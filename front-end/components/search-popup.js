import React, { useContext } from "react";
import { SearchContext } from "../context/search-context";
const SearchPopup = () => {
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const handleSearchClick = (e) => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  return (
    <div className={`search-popup ${true === searchStatus ? "active" : ""}`}>
      <div
        className="search-popup__overlay search-toggler"
        onClick={handleSearchClick}
      ></div>
      <div className="search-popup__content">
        <form action="#">
          <label htmlFor="search" className="sr-only">
            search here
          </label>
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="thm-btn">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPopup;
