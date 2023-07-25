import React,{useState} from "react";
import './App.css';
import DataRows from "./DataRows";

function Table(filtered){

    function tableRows(){


        let nanu = filtered.filtered.map((item) => {
                    console.log(item);

                    return <DataRows key={item.id} id={item.id}date={item.date} description={item.description} category={item.category} amount={item.amount} />


                })
                
                return nanu

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

                {tableRows()}



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