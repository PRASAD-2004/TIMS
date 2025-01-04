import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import App from '../pages/Maindisplay';

export default function Main() {
    const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLogin === 'true');
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
            navigate('../pages/Maindisplay')
        </div>
      ) : (
        <div className="main-container">
            <h1>Telecom Inventory Management System</h1>
        </div>
      )}
    </div>
  );
}