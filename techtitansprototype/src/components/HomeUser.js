import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import "../styles/HomeUser.css";

const HomeUser = ({username}) =>{
    //const navigate = useNavigate();
    return(
        <div>
            <header>
        <h1>Welcome back, {username}</h1>
    </header>

    <nav>
        <a href="/Home/BrowsePolicies" target="_blank">Browse Policies</a>
        <a href="/Home/PurchasePolicies" target="_blank">Purchase Policies</a>
        <a href="/Home/ViewActivePolicies" target="_blank">View Active Policies</a>
        <a href="/Home/CancelPolicy" target="_blank">Cancel Policy</a>
        <a href="/Home/GreivanceRedressal" target="_blank">Grievance Redressal</a>
    </nav>

    <div class="container">
        <div id="browse-policies" class="section">
            <h2>Browse Policies</h2>
            <p>Explore a variety of insurance policies tailored to your needs. Select the one that suits you the best.</p>
        </div>

        <div id="purchase-policies" class="section">
            <h2>Purchase Policies</h2>
            <p>Ready to get insured? Purchase your preferred insurance policy with just a few clicks.</p>
        </div>

        <div id="view-active-policies" class="section">
            <h2>View Active Policies</h2>
            <p>Keep track of your active policies. View the details and benefits of each policy here.</p>
        </div>

        <div id="cancel-policy" class="section">
            <h2>Cancel Policy</h2>
            <p>Need to cancel a policy? You can do so easily here. Please ensure to review our cancellation policy before proceeding.</p>
        </div>

        <div id="grievance-redressal" class="section">
            <h2>Grievance Redressal</h2>
            <p>If you have any issues or concerns, our grievance redressal team is here to help. Submit your complaints and we'll address them promptly.</p>
        </div>
    </div>

    <footer>
        <p>Developed by Team TechTitans</p>
    </footer>

        </div>
    );
}

export default HomeUser;