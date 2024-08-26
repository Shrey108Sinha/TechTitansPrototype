import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PurchasePolicy = ()=>{
    const [polNum, setPolNumCol] = useState('');
    const [compName, setCompNameCol] = useState('');
    const [cityName, setCityNameCol] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Purchase Request Submitted Successfully! You will receive further information thru email.");
        navigate("/Home");
    }
    return(
    <div align = "center">
        <header class="logo-container">
    <img src="\image.jpeg" alt="Your Logo" class="logo"/>
    <p class="tagline"><h3 id="unique-heading">"Every Life Matters!!"</h3></p>
        
    </header>
    <div class="container">
        <h1>Purchase Policy</h1>

        <h2>Policy Details</h2>
        <p>Our health insurance policies provide a comprehensive coverage for a wide range of medical expenses. From hospitalization costs to preventive care, we've got you covered.</p>

        <h2>Benefits</h2>
        <ul>
            <li>Cashless hospitalization at all network hospitals</li>
            <li>Coverage for pre and post-hospitalization expenses</li>
            <li>Free annual health check-ups</li>
            <li>No-claim bonus for claim-free years</li>
            <li>Flexible sum insured options</li>
        </ul>

        <h2>General Terms and Conditions</h2>
        <p>Please read the following terms and conditions carefully before purchasing the policy:</p>
        <ul>
            <li>The policy is applicable for individuals aged between 18 to 65 years.</li>
            <li>Pre-existing diseases are covered after a waiting period of 3 years.</li>
            <li>Claims must be submitted within 30 days of discharge from the hospital.</li>
            <li>Policy renewal is required annually to maintain coverage.</li>
            <li>Any fraudulent claims will result in the termination of the policy.</li>
        </ul>

        <h2>Get Your Policy Now!</h2>
        <p>Ready to secure your health? Scroll below to proceed with the purchase!</p>
        <br/><br/>
        <form id = "purchasePolicy" onSubmit={handleSubmit}>
        Policy Number
        <br/>
        <input type="text" id="policyNumber" name="policyNumber" value={polNum} onChange={(e) => setPolNumCol(e.target.value)} placeholder="Enter your policy number" required/>
        <br/>
        Company Name
        <br/>
        <input type="text" id="companyName" name="companyName" value= {compName} onChange={(e) => setCompNameCol(e.target.value)} placeholder="Enter company name" required/>
        <br/>
        City
        <br/>
        <input type="text" id="cityName" name="cityName" value= {cityName} onChange={(e) => setCityNameCol(e.target.value)} placeholder="Enter city name" required/>
        <br/>
        Preffered Start Date
        <br/>
        <input type = "date" required/><br/>
        Valid Thru <br/>
        <input type = "number" min = "6" max = "60" step = "6"/>
        <br/>
        <button type = "submit">Purchase</button>
        <h3>NOTE: All other necessary details will be taken from your account info.</h3>
        </form>
    </div>

    </div>
    );
}

export default PurchasePolicy;