import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({setUsername, setPassword, setphoneNo, setEmailId, setCompanyName ,setPanNum}) =>{
    const [username, setUsernameCol] = useState('');
    const [password, setPasswordCol] = useState('');
    const navigate = useNavigate();
    const clrscr = () => {
        setUsernameCol("");
        setPasswordCol("");
    }  
    const shouldDispClear = (username.length > 0 || password.length > 0)
    const goSignUp = (event) =>{
        event.preventDefault();
        navigate('/SignUp');
      } 
      
    const handleSignIn = (e) => {
        e.preventDefault();
         const usn1 = "User1";
         const usn2 = "User2";
         const pswrd = "pswrd";
         const phNum = "0000000000";
         const email = "abc@abc.com";
         const compName1 = "NewLife Inc.";
         const compName2 = "";
         const panNum = "THDON0479W";
         if(username === usn1 && pswrd === password)
        {
            alert("Signed in successfully");
            setUsername(username);
            setPassword(password);
            setphoneNo(phNum);
            setEmailId(email);
            setCompanyName(compName1);
            setPanNum(panNum);
            navigate("/Home");
        } 
        else if(username === usn2 && pswrd === password)
        {
            alert("Signed in successfully");
            setUsername(username);
            setPassword(password);
            setphoneNo(phNum);
            setEmailId(email);
            setCompanyName(compName2);
            setPanNum(panNum);
            navigate("/Home");
        }
        
    };
    return(
        <div class = "myDiv">
            <h1 align = "center">
              Sign-In</h1>
            <hr />
            <br></br>
            <h2 align="center">
        <form id="signInForm" onSubmit={handleSignIn}>
        
          <label>Username:</label><br></br>
          <input type="text" className="inputBox" value={username} onChange={(e) => setUsernameCol(e.target.value)} maxLength={20} minLength={3} placeholder='eg "name123"' required />
          <br></br><br></br><br></br>
          <label>Password:</label><br></br>
          <input type="password" className="inputBox" value={password} onChange={(e) => setPasswordCol(e.target.value)} maxLength={20} minLength={3} required autoComplete="off" />
          <br></br><br></br>
                    <button type="submit" className="buttons" >Sign-In</button>
                    {shouldDispClear && <span><br></br><br></br><button onClick={clrscr} className="buttons" >Clear</button></span>}
      </form>
      </h2><br></br>
            <p align="center">Don't have an account? <form onSubmit = {goSignUp}><button type = "submit">Create an account</button></form></p>
           
    </div>
    );
}

export default SignIn;