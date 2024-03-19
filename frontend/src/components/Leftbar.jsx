import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { setData } from "../features/userSlice.js";
import { useDispatch } from "react-redux";
import axios from "axios";

function Leftbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await axios.post("/api/v2/users/logout");
    if (response.data.success) {
      dispatch(setData(null));
      navigate("/login");
    }
  };

  return (
    <div
      className={`col-span-2 px-8 py-2 hidden lg:flex flex-col gap-8 font-base font-semibold`}
    >
      <div className="cursor-pointer">
        <NavLink to="/">All Users</NavLink>
      </div>
      <div className="cursor-pointer">
        <NavLink to="/new-transaction">New Transaction</NavLink>
      </div>
      <div className="cursor-pointer">
        <NavLink to="/all-transactions">Transaction History</NavLink>
      </div>
      <div className="cursor-pointer">
        <NavLink to="/profile">My Profile</NavLink>
      </div>
      <div className="cursor-pointer">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Leftbar;
