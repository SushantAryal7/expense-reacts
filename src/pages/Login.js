// src/Login.js

import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Login = () => {
    
    const navigate = useNavigate()

    const loginHandler = ()=>{
        navigate('/')
    }

  return (
    <Fragment>
      <Header />
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button onClick={loginHandler} type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
    </Fragment>
  );
};

export default Login;
