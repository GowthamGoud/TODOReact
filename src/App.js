// App.js

import React from 'react';
// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todomain from './todomain';
import Login from './Login';
import './App.css';
import Signup from './signup';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/todomain" element={<Todomain />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>
);
}

export default App;
