import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomeUser from "./HomeUser";
import CancelPolicy from "./CancelPolicy";
import GrievanceRedressal from "./GrievanceRedressal";


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
        <Route path = "/Home" element = {((username !== "") && (companyName === ""))? <HomeUser username = {username}/> : null}/>
        <Route path = "/Home/CancelPolicy" element = {((username !== "") && (companyName === ""))? <CancelPolicy panNum = {panNum}/> : null}/> 
        <Route path = "/Home/GrievanceRedressal" element = {((username !== "") && (companyName === ""))? <GrievanceRedressal panNum = {panNum}/> : null}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;