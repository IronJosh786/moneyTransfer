import React from "react";
import { useSelector } from "react-redux";
import LeftBar from "../components/Leftbar.jsx";
import Rightbar from "../components/Rightbar.jsx";
import AllUser from "../components/AllUser.jsx";
import Login from "./Login.jsx";
import { Outlet } from "react-router-dom";

function Home() {
  const { userData } = useSelector((state) => state.user);

  if (!userData) {
    return <Login />;
  }

  return (
    <div className="grid lg:grid-cols-12">
      <LeftBar />
      <Outlet />
      <Rightbar />
    </div>
  );
}

export default Home;
