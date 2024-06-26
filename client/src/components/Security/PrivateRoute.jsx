import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";

// Replace "isLoggedIn" with your actual authentication logic
const isLoggedIn = () => {
  // Simulate checking for a token or logged-in state
  return localStorage.getItem('Logintoken') !== null;
  return secureLocalStorage.getItem('loginNew') !== null;

};

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  if (!isLoggedIn()) {
    // Redirect to login if not authenticated
    return <Navigate to="/SignIn" replace state={{ from: location }} />;
  }

  // Render the protected component if authenticated
  return children;
};

export default PrivateRoute;
