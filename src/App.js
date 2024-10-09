import React, { Fragment } from 'react'
import Header from './components/Header'
import Signup from './pages/SignUP'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactDetail from './pages/ContactDetail'


function App() {
  return (
    <Fragment>
      
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contactdetail" element={<ContactDetail />} />

      </Routes>
    </Router>
    </Fragment>
  )
}

export default App