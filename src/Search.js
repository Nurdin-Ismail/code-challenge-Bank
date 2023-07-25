import { logDOM } from "@testing-library/react";
import React,{useState} from "react";

function Search({ search, setSearch, filtered, setFiltered }){
        


  function searchInputHandler(e) {
    let target = `${e.target.value}`
    setSearch(target);
    console.log(search);
    // filtered.filter((item) => item.description === target.toLocaleLowerCase)
     console.log(filtered.map(item => item.description).filter((item) => item === target))
    

    

  }
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="form__field"
        onChange={searchInputHandler}
        placeholder="Type to Filter..."
      />
      
    </div>
  );
}

export default Search;



  
