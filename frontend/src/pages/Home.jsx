import React from "react";
import Navbar from "../components/Navbar.jsx";
import LeftBar from "../components/Leftbar.jsx";
import Rightbar from "../components/Rightbar.jsx";
import AllUser from "../components/AllUser.jsx";
import NewTransaction from "../components/NewTransaction.jsx";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="grid">
        <LeftBar className={"grid-cols-3"} />
        <Rightbar className={"grid-cols-3"} />
        <AllUser className={"grid-cols-6"} />
      </div>
    </div>
  );
}

export default Home;
