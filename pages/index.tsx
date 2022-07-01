import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Countries from "../components/Countries";
import Navigation from "../components/Navigation";
import SearchFilterBox from "../components/SearchFilterBox";
import {
  fetchCountries,
  filterByRegion,
  searchCountryByName,
} from "../service/utilities";

const Home: NextPage = () => {
  const [searchWord, setSearchWord] = useState<string>("");
  const [regionOption, setRegionOption] = useState<string>("");
  const [checkedTheme, setCheckedTheme] = useState<boolean>(true);
  const [countries, setCountries] = useState<any[]>([]);

  async function getCountriesDetails() {
    const { data } = await fetchCountries();
    if (data) {
      setCountries(data);
    }
    return data;
  }
  async function searchByName() {
    const { data } = await searchCountryByName(searchWord);
    if (data) {
      if (data.code) {
        alert("No such name exist, kindly check the name again and retry!");
      } else {
        setCountries(data);
      }
    }

    return data;
  }
  async function searchByRegion() {
    const { data } = await filterByRegion(regionOption);
    if (data) {
      setCountries(data);
    }
    return data;
  }

  useEffect(() => {
    getCountriesDetails();
  }, []);

  useEffect(() => {
    const killSearchByName = setTimeout(searchByName, 500);
    return () => clearTimeout(killSearchByName);
  }, [searchWord]);

  useEffect(() => {
    if (regionOption) searchByRegion();
  }, [regionOption]);

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

        <section className="w-full lg:h-[calc(100vh-132px)] px-4 py-4 md:py-0   ">
          <div className="lg:w-[1000px] grid lg:grid-cols-4 custom-md:grid-cols-2 justify-center items-center lg:gap-x-[66.67px] gap-y-10 mx-auto ">
            <Countries countries={countries} checkedTheme={checkedTheme} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
