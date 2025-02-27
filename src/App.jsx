import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import OtpVerification from "./pages/OtpVerification";

const App = () => {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/otp/:email/:phone" element={<OtpVerification/>}></Route>
      <Route path="/password/forgot" element={<ForgotPassword/>}></Route>
      <Route path="/password/reset/:token" element={<ResetPassword/>}></Route>
    </Routes>
    <ToastContainer theme="colored"/>
  </Router>
  </>;
};

export default App;
