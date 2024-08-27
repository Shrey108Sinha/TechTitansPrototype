import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GrievanceRedressal = ({panNum})=>{
    const maskedPan = "XXXXXX" + panNum.substring(6);
    const [polNum, setPolNumCol] = useState('');
    const [compName, setCompNameCol] = useState('');
    const [complaintType, setComplaintTypeCol] = useState('');
    const [complaintReason, setComplaintReasonCol] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Complaint lodged Successfully! Once verified, necessary action will be initiated.");
        navigate("/Home");
    }
    return(
        
        <div align = "center" class = "myDiv">
        <br/>
        
        <h2>Raise a complaint</h2>
        <hr></hr><br/>
        Policy Number
        <br/>
        <form onSubmit = {handleSubmit}>
        <input type="text" id="policyNumber" name="policyNumber" value={polNum} onChange={(e) => setPolNumCol(e.target.value)} placeholder="Enter your policy number" required/>
        <br/>
        Company Name
        <br/>
        <input type="text" id="companyName" name="companyName" value= {compName} onChange={(e) => setCompNameCol(e.target.value)} placeholder="Enter company name" required/>
        <br/>
        Complaint Type
        <br/>
        <input type="text" id="complaintType" name="complaintType" value= {complaintType} onChange={(e) => setComplaintTypeCol(e.target.value)} placeholder="Enter complaint type" required/>
        <br/>

        Complaint Message
        <br/>
        <textarea id="complaintReason" name="complaintReason" rows="3" value={complaintReason} onChange={(e) => setComplaintReasonCol(e.target.value)} placeholder="Enter the complaint"></textarea>
        <br/>
        <button type="submit">Lodge Complaint</button><br/><br/>
        <h3>NOTE: We will check all policies associated with the registered PAN number: {maskedPan}. If the complaint is genuine, necessary action will be taken against the concerned company.</h3>
        </form>
        </div>
    );
}

export default GrievanceRedressal;