import React,{useState, useEffect} from "react";
import Filter from "./Filter";
import Form from "./Form";

function Main(){

    const [transactionData, setTransactionData] = useState([])
    useEffect(() => {
        console.log("Test useeffect") 
    
        fetch("http://localhost:3000/transactions")
        .then(response => response.json())
        .then(transaction => {
            console.log(transaction)
            setTransactionData(transaction);
        })
    },[])


    return(
        <div>
            <h1>main</h1>
            <Filter/>
            <Form/>


        </div>


    )


    
}

export default Main;