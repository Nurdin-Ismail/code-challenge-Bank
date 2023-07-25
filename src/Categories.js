import React,{useState} from "react";

function Categories({copiedData, setCopiedData, transactionData, filtered, setFiltered}){
    // console.log(copiedData)

    let unchangedData = [...transactionData]

    // console.log(unchangedData)

    const [categ, setCateg] = useState('All')

    if(categ == 'All'){
        setFiltered(copiedData)
        console.log(filtered)
    }
    // console.log(categ)
    console.log(categ)
    // console.log(copiedData[0].category)
    function handleCategories(e){
        
        let target = e.target.value
        setCateg(target);
        if(target != 'All'){
            
            setFiltered( copiedData.filter((item) => item.category === target))
            
            
           
            return  console.log(filtered)
        }else{
            
            setFiltered(copiedData)
            return console.log(filtered)
        }

       


        
        
        // if (categ == 'All'){
            
        // }else if(categ == 'Income'){
        //     let filteredData = copiedData.filter((item) => item.category === target)
        //     console.log(filteredData)

        // }else if(categ == 'Food'){
        //     let filteredData = copiedData.filter((item) => item.category === target)
        //     console.log(filteredData)

        // }else if(categ == 'Fashion'){
        //     let filteredData = copiedData.filter((item) => item.category === target)
        //     // console.log(filteredData)

        // }else if(categ == 'Gift'){
        //     let filteredData = copiedData.filter((item) => item.category === target)
        //     // console.log(filteredData)

        // }else if(categ == 'Transportation'){
        //     let filteredData = copiedData.filter((item) => item.category.value === target)
        //     // console.log(filteredData)

        // }else if(categ == 'Entertainment'){
        //     let filteredData = copiedData.filter((item) => item.category.value === target)
        //     // console.log(filteredData)

        // }else if(categ == 'Housing'){
        //     let filteredData = copiedData.filter((item) => item.category.value === target)
        //     // console.log(filteredData)

        // }
        

    
        

    }

    return (
        
        <div className="Category">
            
            <select onChange={handleCategories} className="button-89">
                <option value="All">All</option>
                <option value="Income">Income</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Gift">Gift</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Housing">Housing</option>
            </select>
        </div>
    )
}

export default Categories;