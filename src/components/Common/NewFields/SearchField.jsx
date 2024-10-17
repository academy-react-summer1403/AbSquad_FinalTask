import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import TitleSpan from "./TitleSpan";
import { useSearchParams } from "react-router-dom";
const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const handleSearch = (val) => {
    if (searchValue) {
      setSearchParams((op) => {
        op.set("Query", val);
        return op;
      });
    } else {
      setSearchParams((op) => {
        op.delete("Query");
        return op;
      });
    }
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <TitleSpan title="جست‌جو دوره" Icon={CiSearch} />
      <div className="w-full relative">
        <input
          className="filterStyle outline-none dark:bg-primaryBlack dark:border relative"
          placeholder="جست و جو کنید..."
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          onClick={() => handleSearch(searchValue)}
          className="flex items-center justify-center w-12 h-full absolute left-0 top-0 bg-primaryBlue text-primaryWhite  rounded-2xl dark:bg-primaryBlack dark:border-l dark:border-y dark:rounded-r-none z-10"
        >
          <CiSearch className="w-8 h-full" />
        </button>
      </div>
    </div>
  );
};

export default SearchField;
