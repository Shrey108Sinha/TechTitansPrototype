import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ApplyLicense = ()=>{
    const [polNum, setPolNumCol] = useState('');
    const [licenseReason, setLicenseReasonCol] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("License Request Submitted Successfully!");
        navigate("/Home");
    }
    return(
        <div align = "center" class = "myDiv">
            <br/>
        
        <h2>Apply for License for a Policy</h2>
        <hr/><br/>
        Policy Number
        <br/>
        <form onSubmit = {handleSubmit}>
        <input type="text" id="policyNumber" name="policyNumber" value={polNum} onChange={(e) => setPolNumCol(e.target.value)} placeholder="Enter your policy number" required/>
        <br/>
        Justification
        <br/>
        <textarea id="licenseReason" name="licenseReason" rows="3" value={licenseReason} onChange={(e) => setLicenseReasonCol(e.target.value)} placeholder="Enter the justification"></textarea>
        <br/>
        <button type="submit">Apply</button><br/><br/>
        <h3>NOTE: Acceptance and provision of a license is subject to our terms and conditions.</h3>
        </form>
        </div>
    );
}

export default ApplyLicense;