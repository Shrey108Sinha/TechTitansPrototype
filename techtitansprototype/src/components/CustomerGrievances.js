import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerGrievances = ()=>{
    const navigate = useNavigate();
    const products = [
        "TW6894   C012543   Arun   23   Tamil Nadu    Yearly Cover Policy   Reimbursement_Issue",
        "TW6829   C872453   Ritesh   31   Karnataka   Monthly Comprehensive Cover Policy    Technical_Error"
    ]
    const[searchValue,setSearchValue] = useState("")
    const handleChange = (event) =>{
        setSearchValue(event.target.value)
    }
    const clrscr = ()=>{
        setSearchValue("")
    }
    const checkSub = (product)=>{
        if((product.toLowerCase().replace(/ /g,'').includes(searchValue.toLowerCase().replace(/ /g,'')) && searchValue != "") || (searchValue.toLowerCase() == "all"))
        {
            return(<li key = {product}>{product}</li>)
        }
    }
    const shouldDispClear = searchValue.length > 0
    return(
        <p align = "center">
            <header class="logo-container">
    <p class="tagline"><h3 id="unique-heading">Customer Grievances</h3></p>
        
    </header><br/><br/>
            <input tpye="text" value= {searchValue} onChange = {handleChange}/>
        <br></br><br></br>
        <button onClick={(e)=>{e.preventDefault();navigate("/Home")}}>Home</button><br/><br/>
        {shouldDispClear && <button onClick = {clrscr}>Clear</button>}
        <ul>
        {
            products.map(checkSub)
        }
        </ul>
        </p>
    );
}

export default CustomerGrievances;