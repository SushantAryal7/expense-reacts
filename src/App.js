import React, { Fragment } from 'react'
import Header from './components/Header'
import Signup from './pages/SignUP'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactDetail from './pages/ContactDetail'
import ForgetPassword from './pages/ForgetPassword'


function App() {
  return (
    <Fragment>
      
      <Router>
      <Routes>
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