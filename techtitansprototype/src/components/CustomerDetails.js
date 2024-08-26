import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const  CustomerDetails = () =>{
    const navigate = useNavigate();
    const products = [
        "C012543   Arun   23   Tamil Nadu",
        "C012743   Arjun   43   Uttar Pradesh",
        "C025312   Sreenidhi   25   Kerala",
        "C872453   Ritesh   31   Karnataka",
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
    <p class="tagline"><h3 id="unique-heading">Your Customers</h3></p>
        
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

export default CustomerDetails;