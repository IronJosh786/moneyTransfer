import React, { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { userData } = useSelector((state) => state.user);
  const [details, setDetails] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };
  const handleChangePassword = async () => {};

  return (
    <div className={`col-span-8 px-8 lg-px-0`}>
      <h4 className="font-h4">Profile</h4>
      <div className="my-4 flex flex-col items-center md:items-start text-center md:flex-row gap-4 md:justify-between font-sm bg-primary_light dark:bg-primary_dark rounded-md p-2 text-white">
        <div>
          <img
            src={userData.profilePictureUrl}
            alt="user profile picture"
            className="h-32 w-32 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-base font-semibold underline">Details</div>
          <p>
            <span className="font-semibold">Username:</span> {userData.username}
          </p>
          <p>
            <span className="font-semibold">Full Name:</span>{" "}
            {userData.fullName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {userData.email}
          </p>
          <p>
            <span className="font-semibold">Balance:</span> $ {userData.balance}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-base font-semibold underline">
            Change Password
          </div>
          <label htmlFor="currentPassword" className="font-semibold">
            Current Password
          </label>
          <input
            type="text"
            id="currentPassword"
            onChange={handleChange}
            className="max-w-[200px] p-1 font-sm rounded-md border border-gray dark:bg-primary_light"
          />
          <label htmlFor="newPassword" className="font-semibold">
            New Password
          </label>
          <input
            type="text"
            id="newPassword"
            onChange={handleChange}
            className="max-w-[200px] p-1 font-sm rounded-md border border-gray dark:bg-primary_light"
          />
          <button
            className="max-w-[200px] p-1 rounded-md font-sm text-white bg-primary_dark dark:bg-primary_light hover:bg-primary_light dark:hover:bg-primary_dark"
            onClick={handleChangePassword}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
