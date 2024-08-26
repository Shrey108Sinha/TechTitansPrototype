import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const  ViewActivePoliciesCommerce = () =>{
    const navigate = useNavigate();
    const products = [
        "TW6894   Yearly Comprehensive Cover Policy  703_customers Tamil Nadu",
        "TW6829   Monthly Comprehensive Cover Policy  374_customers Tamil Nadu"
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
    <p class="tagline"><h3 id="unique-heading">Your Active Policies</h3></p>
        
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

export default ViewActivePoliciesCommerce;