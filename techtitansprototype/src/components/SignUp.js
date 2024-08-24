import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () =>{
    const[username,setUsernameCol] = useState("");
    const[password,setPasswordCol] = useState("");
    const[email,setEmailCol] = useState("");
    const[phNum,setPhoneCol] = useState("");
    const[companyName,setCompanyNameCol] = useState("");
    const[panNum,setPanNumCol] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e)=>{
        e.preventDefault();
        alert("Signed Up successfully!");
        navigate("/SignIn");
    }

    function generatePassword(length = 12, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$'; // '!@#$%^&*()_+~`|}{[]:;?><,./-='
        
        let charSet = lowercaseChars;
        if (includeUppercase) charSet += uppercaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSymbols) charSet += symbolChars;
      
        let password = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charSet.length);
          password += charSet[randomIndex];
        }
        return password;

    }
        const clrscr = () => {
            setUsernameCol("");
            setEmailCol("");
            setPhoneCol("");
            setPasswordCol("");
            setCompanyNameCol("");
            setPanNumCol("");
        }
        const[psString,setPsString] = useState('');
        let suggestedPassword = (psString);
    
        const handlePasswordFocus = () =>{
            setPsString('Try: '+ generatePassword(12,true,true,true));
        }
        const handlePasswordBlur = () =>{
            setPsString('');
        return password;
      }

      const shouldDispClear = (username.length > 0 || email.length > 0 || phNum.length > 0 || password.length > 0 || companyName.length > 0 || panNum.length > 0);
    return(
        <div>
            <h1 align = "center">
              Sign-Up</h1>
            <hr />
            <br></br>
            <h2 align = "center">
            <form id = "signUpForm" onSubmit = {handleSignUp}>
                <label>Create username:</label><br/>
                <input type = "text" value = {username} onChange={(e) => setUsernameCol(e.target.value)} maxLength={20} minLength={3} placeholder='eg "name123"' required/>
                <br/><br/>
                <label>Set Password:</label><br/>
                <input type="password" className="inputBox" value={password} onChange={(e) => setPasswordCol(e.target.value)} maxLength={20} minLength={3} required autoComplete="off" placeholder= {suggestedPassword}
                            onFocus={handlePasswordFocus} onBlur={handlePasswordBlur} />
                <br/><br/>
                <label>Enter your mobile number:</label><br/>
                <input type = "text" value = {phNum} onChange={(e) => setPhoneCol(e.target.value)} pattern = "^[0]?[6-9]\d{9}$" required/>
                <br/><br/>
                <label>Enter your email id:</label><br/>
                <input tpye = "email" value = {email} onChange={(e) => setEmailCol(e.target.value)} required/> <br/><br/>
                <label>Enter your company name: ONLY FOR COMMERCIAL ACCOUNTS</label><br/>
                <input tpye = "text" value = {companyName} onChange={(e) => setCompanyNameCol(e.target.value)} maxLength={50} minLength={3}/><br/><br/>
                <label>Enter PAN number:</label><br/>
                <input type = "text" value = {panNum} onChange={(e) => setPanNumCol(e.target.value)} pattern = "^[A-Z]{5}[0-9]{4}[A-Z]$" required/><br/><br/>
                <button type="submit" className="buttons" >Sign-Up</button>
                    {shouldDispClear && <div><br></br><br></br><button onClick={clrscr} className="buttons" >Clear</button></div>}
            </form>
            </h2>
        </div>
    );
}

export default SignUp;