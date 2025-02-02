import React from "react";

function Filter({ searchValue, onSearchChange, onCategoryChange }) {
  return (
    <div className="Filter">
      <input value = {searchValue} type="text" name="search" placeholder="Search..." onChange = {onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
