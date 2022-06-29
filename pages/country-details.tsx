import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import DarkLeftArrowIcon from "../components/icons/DarkLeftArrowIcon";
import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import Navigation from "../components/Navigation";
import axios from "axios";

export default function CountryDetails() {
  const [checkedTheme, setCheckedTheme] = useState<boolean>(false);

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

        <section className="lg:px-20 px-4 my-10">
          <Link href="/">
            <button
              className={
                `${
                  checkedTheme ? " bg-[#2b3945] " : " bg-white border-[1px] "
                }` +
                "flex items-center space-x-2 hover:shadow-md h-7 px-4 font-medium capitalize rounded-lg"
              }
            >
              {checkedTheme ? <LeftArrowIcon /> : <DarkLeftArrowIcon />}
              back
            </button>
          </Link>
        </section>

        <section className="lg:px-20 px-4 pb-4 lg:pb-0 ">
          <div className="lg:flex w-fit lg:w-auto mx-auto lg:justify-between h-[300px] bg-red-900 max-w-[1200px] lg:space-x-8 lg:mx-auto space-y-4 lg:space-y-0 ">
            <div className="custom-md:w-[400px] w-full md:h-full h-[300px] bg-green-900 overflow-hidden">
              <img
                src="/vercel.svg"
                alt="country details"
                className="w-full h-full"
              />
            </div>
            <div className=" flex flex-col justify-center pb-4 ">
              <div className="font-bold capitalize text-2xl ">
                <p>belgium</p>
              </div>
              <div className="my-8 text-base lg:flex ">
                <div>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Native Name: </p>
                    <p>Belgie</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Population: </p>
                    <p>11, 391.59</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Region: </p>
                    <p>Europe</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Sub Region: </p>
                    <p>Western Europe</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Capital: </p>
                    <p>Brussels</p>
                  </span>
                </div>
                <div>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Top Level Domain: </p>
                    <p>be</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Currencies: </p>
                    <p>Euro</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Language: </p>
                    <p>Dutch, French, German</p>
                  </span>
                </div>
              </div>

              <span className="">
                <p className="font-semibold">Border Countries: </p>
                <div className="flex space-x-2">
                  <p
                    className={
                      `${
                        checkedTheme
                          ? " bg-[#2b3945] "
                          : " bg-white border-[1px] "
                      }` + "shadow-sm font-medium px-2 rounded-lg "
                    }
                  >
                    France
                  </p>
                  <p
                    className={
                      `${
                        checkedTheme
                          ? " bg-[#2b3945] "
                          : " bg-white border-[1px] "
                      }` + "shadow-sm font-medium px-2 rounded-lg "
                    }
                  >
                    Germany
                  </p>
                  <p
                    className={
                      `${
                        checkedTheme
                          ? " bg-[#2b3945] "
                          : " bg-white border-[1px] "
                      }` + "shadow-sm font-medium px-2 rounded-lg "
                    }
                  >
                    Netherland
                  </p>
                </div>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
