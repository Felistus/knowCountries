import { SearchIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ModeToggle from "../components/ModeToggle";
import SelectBox from "../components/SelectBox";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-[#202c37] h-screen text-slate-300 overflow-y-auto ">
      <main className="h-screen">
        <section className="bg-[#2b3945] h-11 px-4 lg:px-20 py-4 flex justify-between items-center">
          <p>Where in the world?</p>
          <div className="flex items-center space-x-1">
            <ModeToggle />
            <p>Dark Mode</p>
          </div>
        </section>

        <section className="lg:px-20 px-4 my-6 md:h-10 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0  ">
          <div className="relative flex items-center bg-[#2b3945] w-full md:w-[400px] px-3 h-10 rounded-lg  ">
            <span>
              <SearchIcon className="h-5 w-5" />
            </span>
            <input
              type="search"
              name="countrySearch"
              id="countrySearch"
              placeholder="Search for a country..."
              className="flex-1 outline-none px-2 rounded-lg border-none bg-transparent text-sm "
            />
          </div>
          <SelectBox />
        </section>

        <section className="w-full lg:h-[calc(100vh-132px)] px-4 py-4 md:py-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] gap-x-[53.33px] gap-y-12 mx-auto ">
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-green-800  ">Flag</div>
              <div className="w-full flex-1 bg-green-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-red-800 ">Flag</div>
              <div className="w-full flex-1 bg-green-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-yellow-800 ">Flag</div>
              <div className="w-full flex-1 bg-green-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-slate-800 ">Flag</div>
              <div className="w-full flex-1 bg-green-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-pink-800 ">Flag</div>
              <div className="w-full flex-1 bg-yellow-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-green-800 ">Flag</div>
              <div className="w-full flex-1 bg-red-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-gray-800 ">Flag</div>
              <div className="w-full flex-1 bg-slate-400 ">info</div>
            </div>
            <div className=" h-56 flex flex-col ">
              <div className="w-full h-[100px] bg-green-800 ">Flag</div>
              <div className="w-full flex-1 bg-pink-400 ">info</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
