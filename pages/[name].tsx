import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { imageLoader } from "../components/Countries";
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

        <section className="px-4 my-10">
          <Link href="/">
            <div className="lg:w-[1000px] mx-auto">
              <button
                className={
                  `${
                    checkedTheme ? " bg-[#2b3945] " : " bg-white border-[1px] "
                  }` +
                  "flex items-center space-x-2 hover:shadow-md h-7 px-4 font-medium capitalize rounded-md"
                }
              >
                {checkedTheme ? <LeftArrowIcon /> : <DarkLeftArrowIcon />}
                back
              </button>
            </div>
          </Link>
        </section>

        <section className="lg:px-20 px-4 pb-4 lg:pb-0  ">
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
                className="lg:flex w-fit lg:w-auto mx-auto h-[250px] max-w-[1000px] lg:space-x-8 lg:mx-auto space-y-4 lg:space-y-0 "
              >
                <div className="flex custom-md:w-[300px] w-full md:h-full h-full overflow-hidden slideInFlag">
                  <Image
                    loader={imageLoader}
                    src={country.flags.svg}
                    alt="Country flag"
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <div className=" flex flex-1 flex-col justify-center pb-4 py-3 slideInDetails">
                  <div className="font-bold capitalize text-2xl ">
                    <p>{country.name.common}</p>
                  </div>
                  <div className="my-4 text-sm lg:space-x-4 lg:flex justify-between items-center  ">
                    <div>
                      <span className="flex space-x-2 ">
                        <p className="font-semibold">Area: </p>
                        <p>{country.area}</p>
                      </span>
                      <span className="flex space-x-2">
                        <p className="font-semibold">Population: </p>
                        <p>{country.population}</p>
                      </span>
                      <span className="flex space-x-2">
                        <p className="font-semibold">Region: </p>
                        <p>{country.region}</p>
                      </span>
                      <span className="flex space-x-2">
                        <p className="font-semibold">Sub Region: </p>
                        <p>{country.subregion}</p>
                      </span>

                      <span className="flex space-x-2">
                        <p className="font-semibold">Official: </p>
                        <p>{country.name.official}</p>
                      </span>
                    </div>
                    <div className="lg:w-[400px] ">
                      <span className="flex space-x-2">
                        <p className="font-semibold">Capital: </p>
                        <div className="flex space-x-2">
                          {country.capital
                            ? country.capital.map(
                                (item: string, el: number) => (
                                  <p key={el}>{item}</p>
                                )
                              )
                            : "No Capital"}
                        </div>
                      </span>

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
                      <div className="space-x-2">
                        <span className="font-semibold">Languages: </span>
                        {Object.keys(country.languages).map(
                          (language: string, languageIndex: number) => (
                            <span key={languageIndex}>
                              {country.languages[language]}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <span className="">
                    <span className="font-semibold">Border Countries: </span>
                    <div className="flex space-x-2">
                      {country.borders
                        ? country.borders.map((item: string, el: number) => (
                            <span
                              className={
                                `${
                                  checkedTheme
                                    ? " bg-[#2b3945] "
                                    : " bg-white border-[1px] "
                                }` + "shadow-sm font-medium px-2 rounded-lg "
                              }
                              key={el}
                            >
                              {item}
                            </span>
                          ))
                        : "No boder info"}
                    </div>
                  </span>
                </div>
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}
