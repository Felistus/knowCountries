import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Countries from "../components/Countries";
import Navigation from "../components/Navigation";
import SearchFilterBox from "../components/SearchFilterBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import {
  countriesFetcher,
  filterByRegion,
  searchCountryByName,
} from "../service/utilities";
import Spinner from "../components/icons/Spinner";
import Pagination from "../components/Pagination";
import { paginate } from "../service/paginate";

const Home: NextPage = () => {
  const { data: foundCountries, error } = useSWR("all", countriesFetcher);
  const [searchWord, setSearchWord] = useState<string>("");
  const [regionOption, setRegionOption] = useState<string>("");
  const [checkedTheme, setCheckedTheme] = useState<boolean>(true);
  const [countries, setCountries] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(8);
  const pageOfCountries = paginate(countries, currentPage, pageSize);

  const handlePageChange = (pageNumber: any, totalPages: number) => {
    if (pageNumber !== "prev" && pageNumber !== "next")
      setCurrentPage(pageNumber);
    else if (pageNumber === "prev" && currentPage > 1)
      setCurrentPage(currentPage - 1);
    else if (pageNumber === "next" && currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  };

  async function searchByName() {
    const { data: foundCountry, error } = await searchCountryByName(searchWord);
    if (foundCountry) setCountries(foundCountry.data);
    else toast.error("Invalid Country Name Provided");
  }
  async function searchByRegion() {
    const { data } = await filterByRegion(regionOption);
    if (data) setCountries(data);
  }

  useEffect(() => {
    if (foundCountries) setCountries(foundCountries);
  }, [foundCountries]);

  useEffect(() => {
    const killSearchByName = setTimeout(searchByName, 500);
    return () => clearTimeout(killSearchByName);
  }, [searchWord]);

  useEffect(() => {
    if (regionOption) searchByRegion();
  }, [regionOption]);

  if (!countries) return null;
  return (
    <div
      className={
        `${checkedTheme ? " dark:bg-[#202c37] " : " bg-[#fafafa] "}` +
        "h-screen overflow-y-auto "
      }
    >
      <main className="h-screen ">
        <section>
          <Navigation
            checkedTheme={checkedTheme}
            setCheckedTheme={setCheckedTheme}
          />
        </section>
        <section className="px-4 my-6 lg:h-10 z-40 ">
          <SearchFilterBox
            checkedTheme={checkedTheme}
            setCheckedTheme={setCheckedTheme}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            setRegionOption={setRegionOption}
          />
        </section>

        <section className="w-full px-4 py-4  ">
          {error && (
            <p
              className={
                `${checkedTheme ? " text-white " : " text-[#111517] "}` +
                "italic  h-full flex text-xl items-center justify-center"
              }
            >
              OOPS! an error has occured. Reload to try again!!
            </p>
          )}
          {!error && !foundCountries ? (
            <div
              className={
                `${checkedTheme ? " text-white " : " text-[#111517] "}` +
                "italic flex h-full w-full items-center text-xl justify-center space-x-2 mt-2 animate-pulse "
              }
            >
              <Spinner /> <p>Loading...</p>
            </div>
          ) : null}
          <div className="lg:w-[1000px] grid lg:grid-cols-4 custom-md:grid-cols-2 justify-center items-center lg:gap-x-[66.67px] gap-y-10 mx-auto ">
            <Countries
              countries={pageOfCountries}
              checkedTheme={checkedTheme}
            />
          </div>
        </section>
        <Pagination
          itemsCount={countries.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <ToastContainer autoClose={2000} position="top-center" theme="dark" />
      </main>
    </div>
  );
};

export default Home;
