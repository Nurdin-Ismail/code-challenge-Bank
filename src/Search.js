import { logDOM } from "@testing-library/react";
import React,{useState} from "react";

function Search({ search, setSearch, filtered, setFiltered }){
  //   console.log(filtered.map((item) => item.description));
  //   console.log(filtered.map((item) => item.description).filter((item) => item !== 'Birthday Check from Grandma"'))

  // let nanu = filtered.filter((item) => item.description.value === 'Office lunch Wednesday' )
  //   console.log(nanu)


  function searchInputHandler(e) {
    let target = `${e.target.value}`
    setSearch(target);
    console.log(search);
    // filtered.filter((item) => item.description === target.toLocaleLowerCase)
     
    

    

  }
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="input-search"
        onChange={searchInputHandler}
        placeholder="Type to Filter..."
      />
    </div>
  );
}

export default Search;



  
