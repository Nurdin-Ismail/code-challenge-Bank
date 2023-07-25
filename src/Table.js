import React,{useState} from "react";
import './App.css';
import DataRows from "./DataRows";

function Table({filtered, search}){

    function tableRows(){


        let nanu = filtered.map((item) => {
                    // console.log(item);

                    return <DataRows key={item.id} id={item.id}date={item.date} description={item.description} category={item.category} amount={item.amount} handleDelete={handleDelete} />


                })
                
                return nanu

    }

 
    
        const searchData = filtered.filter((item) => {
        if (item.description.toLowerCase().includes(search.toLowerCase())){
                 return item
            
           

            

        }
    })

   
    


    function handleDelete(e){
        // console.log(e.target.value)

    }
    return (
        <div className="Table">

            <h1>Transactions:</h1>
            <br />
            <table className="table">
               <tr className='Heading'>
                     <th>Id</th>
                    
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>---</th>
                </tr>

                {/* {tableRows()} */}
                {search === '' ? tableRows():  searchData.map((item) => {
                return <DataRows key={item.id} id={item.id}date={item.date} description={item.description} category={item.category} amount={item.amount} handleDelete={handleDelete} />
            })}



                {/* <tr>
                    <td>1</td>
                    <td>Jan - April</td>
                    <td>Credit</td>
                </tr>

                <tr>
                     <td>2</td>
                     <td>May - August</td>
                     <td>Pass</td>
               </tr>
    
               <tr>
                      <td>2</td>
                      <td>September - December</td>
                      <td>Distinction</td>
               </tr> */}
            </table>

        </div>
    )
}

export default Table;