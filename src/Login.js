import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import signup from './signup';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css'

function Login()   {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate('/todomain');
  const handleLogin = () => {
   
    if(username.match("^[a-zA-Z0-9]+@gmail.com$")!=null&&(validateUser(username,password))){
     
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

  const validateUser = async() => {
  
    const response = await fetch('http://localhost:8080/demo/checkuser?name='+username+"&passwd="+password, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    //   body: JSON.stringify(userData),
    });
    console.log('User registration successful:', response);

    if (await response.status===200) {
      const data = response.text();
      console.log('User registration successful:', data);
      // Handle successful registration, such as redirecting or showing a success message
    } else {
      console.error('User registration failed:', response.statusText);
      // Handle registration failure, such as showing an error message
    }
  
  };

  const handleRegistration = () => {

    navigate('/signup');

    console.log('Sign Up');

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
        <br />
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;