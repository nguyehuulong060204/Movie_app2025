import React from "react";

const Search = ({ searchTexm, setSearchText }) => {
  return (
    <div className="search">
      <div>
        <img src="/public/search.svg" alt="search" />
        <input type="text" placeholder="Search through thousands of movie" value={searchTexm}
        onChange={(event) => setSearchText(event.target.value)} />
      </div>
    </div>
  );
};

export default Search;
