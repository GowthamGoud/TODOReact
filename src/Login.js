// Login.js

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
// import todomain from './todomain';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css'

function Login()   {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('/todomain');
  // const history = useHistory();
  const handleLogin = () => {
    // Implement your login logic here
    // history.push('/todomain');
    if(username.match("^[a-zA-Z0-9]+@gmail\.com$")!=null){
    navigate('/todomain');
    }
    else{

      console.log("Use Correct Username");
      toast.error('Please enter a valid username (e.g., example@gmail.com)');
    }
    console.log('Login button clicked');
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={{color:'white', textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <ToastContainer />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;