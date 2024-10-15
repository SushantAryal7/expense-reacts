import React, { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import Signup from './pages/SignUP'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactDetail from './pages/ContactDetail'
import ForgetPassword from './pages/ForgetPassword'
import ExpenseForm from './pages/ExpenseForm'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/firebase'


function App() {


  const [user, setUser] = useState(null)

  const onchange = (value)=>{
    setUser(value)
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (users)=>{
      if(users){
        // localStorage.setItem('loginUser', true)
        setUser(true)
      }
    })
  }, [])
  return (
    <Fragment>
      
      <Router>
      <Routes>
        <Route path="/" element={user? <ExpenseForm onchange={onchange} />: <Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactdetail" element={<ContactDetail />} />
        <Route path="/forget-password" element={<ForgetPassword />} />


      </Routes>
    </Router>
    </Fragment>
  )
}

export default App