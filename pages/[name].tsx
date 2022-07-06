import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DarkLeftArrowIcon from "../components/icons/DarkLeftArrowIcon";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import Navigation from "../components/Navigation";
import { getCountryByFullNameFetcher } from "../service/utilities";
import useSWR from "swr";
import Spinner from "../components/icons/Spinner";

export default function CountryDetails() {
  const [checkedTheme, setCheckedTheme] = useState<boolean>(false);
  const router = useRouter();
  const { name } = router.query;
  const { data: selectedCountry, error } = useSWR(
    name,
    getCountryByFullNameFetcher
  );
  return (
    <div
      className={
        `${
          checkedTheme ? " dark:bg-[#202c37] text-white " : " bg-[#fafafa] "
        }` + "h-screen overflow-y-auto "
      }
    >
      <main className="h-screen">
        <Navigation
          checkedTheme={checkedTheme}
          setCheckedTheme={setCheckedTheme}
        />

        <section className="my-10 ">
          <Link href="/">
            <div className="lg:px-10 px-4">
              <button
                className={
                  `${
                    checkedTheme ? " bg-[#2b3945] " : " bg-white border-[1px] "
                  }` +
                  "flex items-center space-x-2 hover:shadow-md h-7 px-4 font-medium capitalize rounded-sm"
                }
              >
                {checkedTheme ? <LeftArrowIcon /> : <DarkLeftArrowIcon />}
                back
              </button>
            </div>
          </Link>
        </section>

        <section className="lg:px-10 px-4 pb-4 lg:pb-0  ">
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
          {!error && !selectedCountry ? (
            <div
              className={
                `${checkedTheme ? " text-white " : " text-[#111517] "}` +
                "italic flex h-full w-full items-center text-xl justify-center space-x-2 mt-2 animate-pulse "
              }
            >
              <Spinner /> <p>Loading...</p>
            </div>
          ) : null}

          {selectedCountry?.data &&
            selectedCountry?.data.map((country: any, index: number) => (
              <div
                key={index}
                className="custom-lg:grid grid-flow-col auto-cols-auto gap-x-8 space-y-10 custom-lg:space-y-0    "
              >
                <div className="custom-md:w-[500px] flex items-center  ">
                  <img
                    src={country.flags.svg}
                    alt={country.name.common + "flag"}
                    className="w-full  rounded-lg"
                  />
                </div>

                <div className="py-4 grid grid-cols-1 ">
                  <div className="font-bold capitalize text-3xl mb-3  ">
                    <p>{country.name.common}</p>
                  </div>
                  <div className="medium:grid grid-flow-col auto-cols-auto gap-x-8 text-base space-y-8 medium:space-y-0">
                    <div>
                      <div className="flex space-x-2 my-2 ">
                        <p className="font-semibold">Area: </p>
                        <p>{country.area.toLocaleString("en-US")}</p>
                      </div>
                      <div className="flex space-x-2">
                        <p className="font-semibold">Population: </p>
                        <p>{country.population.toLocaleString("en-US")}</p>
                      </div>
                      <div className="flex space-x-2 my-2">
                        <p className="font-semibold">Region: </p>
                        <p>{country.region}</p>
                      </div>
                      <div className="flex space-x-2">
                        <p className="font-semibold">Sub Region: </p>
                        <p>{country.subregion}</p>
                      </div>

                      <div className="flex space-x-2 my-2">
                        <p className="font-semibold">Timezone: </p>
                        <p>{country.timezones}</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-wrap my-2">
                        <span className="font-semibold mr-2">Capital: </span>
                        {country.capital
                          ? country.capital.map((item: string, el: number) => (
                              <span className="mr-2" key={el}>
                                {item}
                              </span>
                            ))
                          : "No Capital"}
                      </div>

                      <div className=" space-x-2">
                        <span className="font-semibold">Currencies: </span>
                        {country.currencies
                          ? Object.keys(country.currencies).map(
                              (value: string, valueIndex: number) => (
                                <span key={valueIndex}>
                                  {country.currencies[value].name}
                                </span>
                              )
                            )
                          : "No Currency"}
                      </div>
                      <div className="flex flex-wrap flex-shrink my-2 ">
                        <span className="font-semibold mr-2">Languages: </span>
                        {Object.keys(country.languages).map(
                          (language: string, languageIndex: number) => (
                            <span className="mr-2" key={languageIndex}>
                              {country.languages[language]}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 w-fit">
                    <div className="font-semibold mb-3 text-xl">
                      Border Countries:
                    </div>
                    <div className="grid grid-cols-3 custom-md:grid-cols-6 gap-2  ">
                      {country.borders
                        ? country.borders.map((item: string, el: number) => (
                            <div
                              className={
                                `${
                                  checkedTheme
                                    ? " bg-[#2b3945] "
                                    : " bg-white border-[1px] "
                                }` +
                                "shadow-md font-normal w-20 rounded-sm text-center p-1 "
                              }
                              key={el}
                            >
                              {item}
                            </div>
                          ))
                        : "No boder info"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}
