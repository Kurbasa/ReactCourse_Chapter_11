import React from "react";

const FilterBox = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Filter by name"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value)}
      style={{ marginLeft: "10px", padding: "5px" }}
    />
  );
};

export default FilterBox;
