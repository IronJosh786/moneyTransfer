import React from "react";
import { useSelector } from "react-redux";

function Rightbar() {
  const { userData } = useSelector((state) => state.user);

  return (
    <div
      className={`col-span-2 text-right px-8 hidden lg:flex flex-col gap-8 h-full`}
    >
      <h4 className="font-h4">User Details</h4>
      <div className="self-end">
        <img
          src={userData.profilePictureUrl}
          alt="profile picture"
          className="h-28 rounded-full"
        />
      </div>
      <div>Username: {userData.username}</div>
      <div>Balance: ${userData.balance}</div>
    </div>
  );
}

export default Rightbar;
