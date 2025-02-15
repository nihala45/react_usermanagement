import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Import auth from Firebase config

import Login from './componenets/Login/Login'// Fixed typo in "components" (was "componenets")
import Home from './componenets/Home/Home'  // Fixed typo in "components"


const App = () => {
  return (
    <Router>
      <AuthHandler /> {/* Auth state handler */}
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};


const AuthHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged in');
        navigate('/');
      } else {
        console.log('Logged out');
        navigate('/login');
      }
    });

    return () => unsubscribe(); 
  }, [navigate]);

  return null; 
};

export default App;
