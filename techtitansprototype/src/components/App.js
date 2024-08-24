import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
      </Routes>
    </div>
   </Router>
  );
}

export default App;