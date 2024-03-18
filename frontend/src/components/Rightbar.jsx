import React from "react";
import { useSelector } from "react-redux";

function Rightbar({ className }) {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className={`${className} hidden lg:flex flex-col gap-8 h-full`}>
      <h4 className="font-h4">User Details</h4>
      <div>Username: {userData.username}</div>
      <div>Balance: {userData.balance}</div>
    </div>
  );
}

export default Rightbar;
