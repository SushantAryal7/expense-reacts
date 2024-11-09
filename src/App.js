import React, { Fragment, useEffect, useState } from "react";
import Signup from "./pages/SignUP";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactDetail from "./pages/ContactDetail";
import ForgetPassword from "./pages/ForgetPassword";
import ExpenseForm from "./pages/ExpenseForm";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import PrivateRoutes from "./pages/PrivateRoutes";
import About from "./pages/About";

function App() {
  const [user, setUser] = useState(false);
  // const navigate   = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      if (users) {
        localStorage.setItem("login", JSON.stringify(users.uid));
        setUser(users.uid);
      }
    });

    // Clean up subscription on unmount
    // return () => unsubscribe();
  }, []);

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={user ? <ExpenseForm /> : <Login />} />
          <Route path="/private" element={<PrivateRoutes />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactdetail" element={<ContactDetail />} />
            <Route path="forget-password" element={<ForgetPassword />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
