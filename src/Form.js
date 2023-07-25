import React,{useState} from "react";

function Form({addTransaction}){
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
  
    
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
  
      // Create a new transaction object with the form data
      const newTransaction = {
        date,
        description,
        category,
        amount: Number(amount),
      };
  
      try {
        // Make an HTTP POST request to the server's API to add the new transaction
        const response = await fetch("http://localhost:3000/transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTransaction),
        });
  
        if (!response.ok) {
          throw new Error("Error adding transaction.");
        }
  
        // Parse the response data as JSON
        const data = await response.json();
  
        // Call the addTransaction function to update the data state with the new transaction
        addTransaction(data);
  
        // Reset form fields after form submission
        setDate("");
        setDescription("");
        setCategory("");
        setAmount("");
      } catch (error) {
        console.error("Error adding transaction:", error);
      }
    };
  
    // Render the form with input fields for date, description, category, and amount
    return (
      <>
        <div className="Form">
          <form className="add-transac-form" onSubmit={handleSubmit}>
            <h4>Add a transaction</h4>
            <div className="form-group">
              <label htmlFor="dateInput">Date: </label>
              <input
                type="date"
                className="form-control"
                id="dateInput"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)} // Update date state on input change
              />
            </div>

            <div className="form-group">
              <label htmlFor="descriptionInput">Description: </label>
              <input
                type="text"
                className="form-control"
                id="descriptionInput"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} // Update description state on input change
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoryInput">Category: </label>
              <input
                type="text"
                className="form-control"
                id="categoryInput"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)} // Update category state on input change
              />
            </div>
            <div className="form-group">
              <label htmlFor="amountInput">Amount: </label>
              <input
                type="number"
                className="form-control"
                id="amountInput"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} // Update amount state on input change
              />
            </div>
            <button type="submit" className="button-89">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
   


export default Form;