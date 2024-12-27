import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ResetPassword from './Components/resetpassword';
import Home from './Components/Home';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  
  // Define routes where the Navbar should not appear
  const noNavbarRoutes = ['/login', '/signup', '/resetpassword'];

  return (
    <>
      {/* Render Navbar conditionally */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<Home />} /> {/* Catch-all route */}
      </Routes>
    </>
  );
};

export default App;
