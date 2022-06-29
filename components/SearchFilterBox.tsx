import { SearchIcon } from "@heroicons/react/solid";
import { ChangeEvent, useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import debounce from "lodash.debounce";

export default function SearchFilterBox(props: any) {
  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    props.setSearchWord(event.target.value);
  }
  return (
    <div className="lg:w-[1000px] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0 ">
      <div
        className={
          `${props.checkedTheme ? " bg-[#2b3945] " : " bg-white  "}` +
          "relative flex items-center  w-full md:w-[400px] px-3 h-10 rounded-lg shadow-lg  "
        }
      >
        <span>
          <SearchIcon className="h-5 w-5" />
        </span>
        <input
          type="search"
          name="countrySearch"
          value={props.searchWord}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
          className={
            `${props.checkedTheme ? "" : " text-[#858585] "}` +
            "flex-1 outline-none px-2 rounded-lg border-none bg-transparent text-sm "
          }
        />
      </div>
      <SelectBox
        checkedTheme={props.checkedTheme}
        setCheckedTheme={props.setCheckedTheme}
        setFilteredCountryByRegion={props.setFilteredCountryByRegion}
      />
    </div>
  );
}
