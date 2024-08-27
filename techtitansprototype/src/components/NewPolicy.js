import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPolicy = ()=>{
    const [polNum, setPolNumCol] = useState('');
    const [cityName, setCityNameCol] = useState('');
    const [description, setDescriptionCol] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Create Policy Request Submitted Successfully! We will verify the policy terms and get back shortly.");
        navigate("/Home");
    }
    return(
        <div ailign = "center" class = "myDiv">
            
            <p class="tagline"><h3 id="unique-heading">Create a New Policy</h3></p>
        <hr/><br/>
       
        <br/>
        <form onSubmit = {handleSubmit} align = "center">
        Policy Number<br/>
        <input type="text" id="policyNumber" name="policyNumber" value={polNum} onChange={(e) => setPolNumCol(e.target.value)} placeholder="Enter your policy number" required/>
        <br/>
        State
        <br/>
        <input type="text" id="cityName" name="cityName" value= {cityName} onChange={(e) => setCityNameCol(e.target.value)} placeholder="Enter city name" required/>
        <br/>
        Description
        <br/>
        <textarea id="description"  rows="3" value={description} onChange={(e) => setDescriptionCol(e.target.value)} placeholder="Enter the policy description, including pricing, terms and conditions etc."></textarea>
        <br/>
        <button type="submit">Create Policy</button><br/><br/>
        </form>
        </div>
    );
}

export default NewPolicy;