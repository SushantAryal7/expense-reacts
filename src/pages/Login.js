// src/Login.js

import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/AuthSlice';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginHandler = ()=>{
        dispatch(loginUser({email, password}))
        navigate('/home')
    }

  return (
    <Fragment>
      <Header />
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <form>
      <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      
        <p>
        <Link to="/forget-password">Forget password?</Link>
        </p>
        
        <button onClick={loginHandler} type="submit">Login</button>
      </form>
      <p>
        Don't have an account?  <Link to="/signup">Sign Up</Link>
      </p>
    </div>
    </Fragment>
  );
};

export default Login;
