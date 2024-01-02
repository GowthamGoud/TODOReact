import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import './signup.css';
import 'react-toastify/dist/ReactToastify.css'

function Signup()   {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
//   const navigate = useNavigate('/todomain');



  

  const handleSignup = async () =>  {
    if(Username.match("^[a-zA-Z0-9]+@gmail.com$")!=null){
        try {

            const response = await fetch('http://localhost:8080/demo/add?name='+Name+"&passwd="+Password+"&email="+Username, {
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
          } catch (error) {
            console.error('Error during registration:', error);
          }
    }
    else{

      console.log("Use Correct Username");
      toast.error('Please enter a valid username (e.g., example@gmail.com)');
    }
    console.log('Login button clicked');
    console.log('Username:', Username);
    console.log('Password:', Password);
    console.log('Name:', Name);
  };

  return (
    <div style={{color:'white', textAlign: 'center', marginTop: '50px' }}>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password :
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Name :
          <input
            type="name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <ToastContainer />
        <br />
       
        <button type="button" onClick={handleSignup}>
          Register.
        </button>
      </form>
    </div>
  );
};

export default Signup;