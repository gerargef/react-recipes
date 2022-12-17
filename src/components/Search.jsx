import React, {  useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context";


function Search({ search }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    search(searchValue);
    searchValue
      ? setSearchParams({ search: searchValue })
      : setSearchParams({});
  }, [searchValue]);
  return (
    <div className="input-field col s12">
      <input
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        className=" btn cyan darken-1 search-button"
        onClick={() => search(searchValue)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
