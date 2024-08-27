import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomeUser from "./HomeUser";
import HomeCommerce from "./HomeCommerce";
import CancelPolicy from "./CancelPolicy";
import GrievanceRedressal from "./GrievanceRedressal";
import PurchasePolicy from "./PurchasePolicy";
import BrowsePolicies from "./BrowsePolicies";
import ViewActivePoliciesUser from './ViewActivePoliciesUser';
import ViewActivePoliciesCommerce from './ViewActivePoliciesCommerce';
import NewPolicy from "./NewPolicy"
import CustomerDetails from './CustomerDetails';
import ApplyLicense from './ApplyLicense';
import CustomerGrievances from './CustomerGrievances';
import "../styles/global.css"



const App = () =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone_no, setphoneNo] = useState("");
  const [email_id, setEmailId] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [panNum, setPanNum] = useState("");
  return(
   <Router>
    <div>
      <Routes>
        <Route path = "/SignIn" element = {<SignIn setUsername = {setUsername} setPassword = {setPassword} setphoneNo = {setphoneNo} setEmailId = {setEmailId} setCompanyName = {setCompanyName} setPanNum = {setPanNum}/>} />
        <Route path = "/SignUp" element = {<SignUp/>} />
        <Route path = "/Home" element = {((username !== "") && (companyName === ""))? <HomeUser username = {username}/> : (username && <HomeCommerce username = {username} companyName = {companyName}/>)}/>
        <Route path = "/Home/BrowsePolicies" element = {((username !== "") && (companyName === ""))? <BrowsePolicies/> : null}/>
        <Route path = "/Home/ViewActivePolicies" element = {((username !== "") && (companyName === ""))? <ViewActivePoliciesUser/> : (username && <ViewActivePoliciesCommerce/>)}/>
        <Route path = "/Home/CancelPolicy" element = {((username !== "") && (companyName === ""))? <CancelPolicy panNum = {panNum}/> : null}/> 
        <Route path = "/Home/PurchasePolicies" element = {((username !== "") && (companyName === ""))? <PurchasePolicy/> : null}/> 
        <Route path = "/Home/GrievanceRedressal" element = {((username !== "") && (companyName === ""))? <GrievanceRedressal panNum = {panNum}/> : null}/>
        <Route path = "/Home/DeployNewPolicy" element = {((username !== "") && (companyName !== ""))? <NewPolicy/> : null}/>
        <Route path = "/Home/ViewCustomerDetails" element = {((username !== "") && (companyName !== ""))? <CustomerDetails/> : null}/>
        <Route path = "/Home/ApplyLicense" element = {((username !== "") && (companyName !== ""))? <ApplyLicense/> : null}/>
        <Route path = "/Home/CustomerGrievances" element = {((username !== "") && (companyName !== ""))? <CustomerGrievances/> : null}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;