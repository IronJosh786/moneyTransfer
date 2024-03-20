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
      <div className="">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-inherit" : "text-gray"
            } cursor-pointer hover:underline underline-offset-2`
          }
          to="/"
        >
          All Users
        </NavLink>
      </div>
      <div className="">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-inherit" : "text-gray"
            } cursor-pointer hover:underline underline-offset-2`
          }
          to="/new-transaction"
        >
          New Transaction
        </NavLink>
      </div>
      <div className="">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-inherit" : "text-gray"
            } cursor-pointer hover:underline underline-offset-2`
          }
          to="/all-transactions"
        >
          Transaction History
        </NavLink>
      </div>
      <div className="">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-inherit" : "text-gray"
            } cursor-pointer hover:underline underline-offset-2`
          }
          to="/profile"
        >
          My Profile
        </NavLink>
      </div>
      <div className="">
        <button
          className="cursor-pointer text-gray hover:underline underline-offset-2 hover:text-inherit"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Leftbar;
