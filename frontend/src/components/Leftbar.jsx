import React from "react";
import { NavLink } from "react-router-dom";

function Leftbar() {
  return (
    <div
      className={`col-span-2 px-8 hidden lg:flex flex-col gap-8 font-base font-semibold`}
    >
      <div className="cursor-pointer">
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="cursor-pointer">
        <NavLink to="/">All Users</NavLink>
      </div>
      <div className="cursor-pointer">
        <NavLink to="/new-transaction">New Transaction</NavLink>
      </div>
      <div className="cursor-pointer">
        <NavLink to="/all-transactions">Transaction History</NavLink>
      </div>
    </div>
  );
}

export default Leftbar;
