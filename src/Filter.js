import React,{useState} from "react";
import Search from "./Search";
import Categories from "./Categories";
import Table from "./Table";

function Filter({transactionData}){
    const [search, setSearch] = useState('')
    const handleSearch = (value) => {
        setSearch(value)
        console.log(value)
    }
    // console.log(transactionData);
    // console.log(typeof(transactionData))
    let copy = [] 
    copy = [...transactionData]
    const [copiedData, setCopiedData] = useState(copy)
    // console.log(copiedData)

    const [filtered, setFiltered] = useState([])

    
    // {search.length >=1? setFiltered(filtered.map((item) => {})): console.log('nothing')}

   


    return (
        <div className='Filter'>
            
            <div className="Filter-bar">
            <Search handleSearch={handleSearch}/>
            <Categories copiedData={copiedData} setCopiedData={setCopiedData} transactionData={transactionData} filtered={filtered} setFiltered={setFiltered} /> 
            </div>

            <div>

                <Table filtered={filtered} setFiltered={setFiltered} search={search}/>


                

            </div>
            
        </div>
    )
}

export default Filter;