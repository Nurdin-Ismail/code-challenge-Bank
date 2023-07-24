import React,{useState} from "react";
import Search from "./Search";
import Categories from "./Categories";
import Table from "./Table";

function Filter({transactionData}){
    console.log(transactionData);
    console.log(typeof(transactionData))
    let copy = [] 
    copy = [...transactionData]
    const [copiedData, setCopiedData] = useState(copy)
    // console.log(copiedData)

    const [filtered, setFiltered] = useState([])

    console.log(filtered)
    


    return (
        <div className='Filter'>
            <h1>Filter</h1>
            <div className="Filter-bar">
            <Search/>
            <Categories copiedData={copiedData} setCopiedData={setCopiedData} transactionData={transactionData} filtered={filtered} setFiltered={setFiltered}/> 
            </div>

            <div>
                <Table filtered={filtered}/>


                

            </div>
            
        </div>
    )
}

export default Filter;