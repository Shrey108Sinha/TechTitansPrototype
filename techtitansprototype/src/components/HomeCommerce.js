import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/HomeUser.css";

const HomeCommerce = ({username,companyName}) =>{
    //const navigate = useNavigate();
    return(
        <div>
            <header>
        <h1>Welcome back, {username}, from {companyName}</h1>
    </header>

    <nav>
        <Link to="/Home/DeployNewPolicy" >Deploy New Policy</Link>
        <Link to="/Home/ViewCustomerDetails">View Customer Details</Link>
        <Link to="/Home/ViewActivePolicies">View Active Policies</Link>
        <Link to="/Home/ApplyLicense">Apply for License</Link>
        <Link to="/Home/CustomerGrievances">View Customer Grievances</Link>
    </nav>

    <div class="container">
        <div id="new-policies" class="section">
            <h2>Deploy New Policy</h2>
            <p>Do you want to deploy a new policy? You have reached the right place!</p>
        </div>

        <div id="customer-details" class="section">
            <h2>View Customer Details</h2>
            <p>Keep track of your active customers. View the details and stats of customer activity, to get new insights.</p>
        </div>

        <div id="view-active-policies" class="section">
            <h2>View Active Policies</h2>
            <p>Keep track of your active policies. Review the details of each policy here.</p>
        </div>

        <div id="apply-license" class="section">
            <h2>Apply for License</h2>
            <p>Need to get approval for a new policy? You can do so easily here. Please ensure to review our approval terms before proceeding.</p>
        </div>

        <div id="customer-grievances" class="section">
            <h2>View Customer Grievances</h2>
            <p>Take a look at the issues faced by your customers. Helps to improve service and revise policy terms.</p>
        </div>
    </div>

    <footer>
        <p>Developed by Team TechTitans</p>
    </footer>

        </div>
    );
}

export default HomeCommerce;