import React from "react";
import Navbar from "../components/Navbar.jsx";
import LeftBar from "../components/Leftbar.jsx";
import Rightbar from "../components/Rightbar.jsx";
import MainContent from "../components/MainContent.jsx";
import Transaction from "../components/Transaction.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <LeftBar />
      <Rightbar />
      <MainContent />
      <Transaction />
    </div>
  );
}

export default Home;
