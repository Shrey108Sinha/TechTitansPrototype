import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const  BrowsePolicies = () =>{
    const navigate = useNavigate();
    const products = [
        "AH6894   Monthly Minimum Cover Policy  ABC inc. Karnataka",
        "AH694   Monthly Minimum Cover Policy  ABC inc. Maharashtra",
        "TW6894   Yearly Comprehensive Cover Policy  NewLife inc. Tamil Nadu",
        "TW6873   Yearly Comprehensive Cover Policy  NewLife inc. Puducherry",
        "ZX6894   Quarterly Cover Policy  GreenLife inc. Kerala",
        "ZX6823   Quarterly Cover Policy  GreenLife inc. Lakshadweep",
        "OU6894   Lifetime Cover Policy  NowCare inc. Telangana",
        "OU6842   Lifetime Cover Policy  NowCare inc. Andhra Pradesh"
    ]
    const[searchValue,setSearchValue] = useState("")
    const handleChange = (event) =>{
        setSearchValue(event.target.value)
    }
    const clrscr = ()=>{
        setSearchValue("")
    }
    const checkSub = (product)=>{
        if(product.toLowerCase().replace(/ /g,'').includes(searchValue.toLowerCase().replace(/ /g,'')) && searchValue != "")
        {
            return(<li key = {product}>{product}</li>)
        }
    }
    const shouldDispClear = searchValue.length > 0
    return(
        <p align = "center">
            <header class="logo-container">
    <p class="tagline"><h3 id="unique-heading">Browse Policies</h3></p>
        
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

export default BrowsePolicies;