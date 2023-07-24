import React from 'react'

function DataRows(props) {
    return (

        <tr className='data'>
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.description}</td>
            <td>{props.category}</td>
            <td>{props.amount}</td>
            
            <td><button className='delete-form'>Delete</button></td>
        </tr>


    )
}

export default DataRows;