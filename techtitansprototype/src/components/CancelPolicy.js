import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CancelPolicy = ({panNum})=>{
    const maskedPan = "XXXXXX" + panNum.substring(6);
    const [polNum, setPolNumCol] = useState('');
    const [compName, setCompNameCol] = useState('');
    const [cancelReason, setCancelReasonCol] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Cancellation Request Submitted Successfully!");
        navigate("/Home");
    }
    return (
        <div align = "center" class = "myDiv">
        <br/>
        
        <h2>Cancel Policy</h2>
        <hr/><br/>
        Policy Number
        <br/>
        <form onSubmit = {handleSubmit}>
        <input type="text" id="policyNumber" name="policyNumber" value={polNum} onChange={(e) => setPolNumCol(e.target.value)} placeholder="Enter your policy number" required/>
        <br/>
        Company Name
        <br/>
        <input type="text" id="companyName" name="companyName" value= {compName} onChange={(e) => setCompNameCol(e.target.value)} placeholder="Enter company name" required/>
        <br/>
        Reason for cancellation
        <br/>
        <textarea id="cancelReason" name="cancelReason" rows="3" value={cancelReason} onChange={(e) => setCancelReasonCol(e.target.value)} placeholder="Enter the reason for cancellation"></textarea>
        <br/>
        <button type="submit">Cancel Policy</button><br/><br/>
        <h3>NOTE: We will check all policies associated with the registered PAN number: {maskedPan}. Cancellation is subject to our terms and conditions.</h3>
        </form>
        </div>
    );
}

export default CancelPolicy;