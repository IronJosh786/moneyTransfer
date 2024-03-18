import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./components/Profile.jsx";
import AllUser from "./components/AllUser.jsx";
import NewTransaction from "./components/NewTransaction.jsx";
import AllTransaction from "./components/AllTransaction.jsx";
import "./App.css";

// <div className="">
//   {/* <Navbar />
//   <div className="flex flex-col md:flex-row gap-8 md:gap-0 mt-12 md:mt-0 justify-center items-center">
//     <div className="w-full md:w-1/2 text-center font-h2 font-bold">
//       Money Transfer
//     </div>
//     <Login />
//   </div> */}
//   {/* <Home /> */}
// </div>

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<AllUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/new-transaction" element={<NewTransaction />} />
          <Route path="/all-transactions" element={<AllTransaction />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
