import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('login'));

    // Check if users is defined and authenticated
    if (users ) {
      setIsAuthenticated(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  // If the authentication check is still in progress, return null
  if (isAuthenticated === null) {
    return null;
  }

  return <Outlet />; // Render Outlet if user is authenticated
};

export default PrivateRoutes;
