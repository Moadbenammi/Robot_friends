import React from "react";

function Search_Box({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
        placeholder="search your Robot"
        type="search"
      />
    </div>
  );
}

export default Search_Box;
