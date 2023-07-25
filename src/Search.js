import { logDOM } from "@testing-library/react";
import React,{useState} from "react";

function Search({ handleSearch }){
        


  // function searchInputHandler(e) {
  //   let target = `${e.target.value}`
  //   setSearch(target);
  //   console.log(search);
  //   // filtered.filter((item) => item.description === target.toLocaleLowerCase)
  //    console.log(filtered.map((item) => item.description).filter(item => item === 'Sunglasses, Urban Outfitters'))
    

    

  // }
  return (
    <div className="search-box">
      <button className="btn-search">
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="form__field"
        onChange={(e) => {
          
          handleSearch(`${e.target.value   }`)
          // console.log(`${e.target.value   }`)
        
        
        }}
        placeholder="Type to Filter..."
      />
      {/* <button onClick={searchInputHandler}></button> */}
      
    </div>
  );
}

export default Search;



  
