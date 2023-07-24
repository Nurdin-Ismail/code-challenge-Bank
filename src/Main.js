import React,{useState, useEffect} from "react";
import Filter from "./Filter";
import Form from "./Form";


function Main(){
       
    const [transactionData, setTransactionData] = useState([])
    const [counter, setCounter] = useState(4)
    // console.log(transactionData)
    useEffect(() => {
         
    
        fetch("http://localhost:3000/transactions")
        .then((response) => {
            if (!response.ok) {
              // handle errors on fetch
              throw new Error("Error fetching data.");
            }
            return response.json();
          })
        .then(transaction => {

            setTransactionData(transaction);


        })
    }, [])
    
 

    
         
        
        return(


            

            <div className='Main'>
                 {transactionData.length >= 4 ? (
                       <div>
                        <h1>main</h1>
            

            
                <div>
                     
                    <div>
                        <Filter transactionData={transactionData}/>
                        <Form transactionData={transactionData} setTransactionData={setTransactionData}/>
                    </div>
                   
                   

                </div>




                       </div>
                       
                       

 
            ) : (
                <h1>hallo</h1>
            )}
            
            
            

           </div>
        )
    


    
           
            

    


    
}

export default Main;