import React, { useState } from 'react'
import Navbar from "./components/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Users from './pages/Users/Users';
import Home from './pages/Home';
import AuthContext from './context/AuthContext';
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App
