import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    profilePicture: null,
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("profilePicture", formData.profilePicture);
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("password", formData.password);

    try {
      const response = await axios.post("/api/v2/users/register", data);
      if (response.data.success) setSuccess(response.data.data);
    } catch (error) {
      console.error(error);
      if (error.response) {
        // Server responded with an error
        const errorMessage = extractErrorMessage(error.response.data);
        setError(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an error
        setError("An error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const extractErrorMessage = (htmlString) => {
    const regex = /<pre>(.*?)<br>/s;
    const match = htmlString.match(regex);
    if (match) {
      return match[1];
    } else {
      const message = "Error message not found";
      return message;
    }
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="max-w-[380px] mx-auto flex flex-col justify-center gap-4 p-4 rounded-md shadow-md drop-shadow-md dark:shadow-gray">
        <h2 className="font-h3 mb-4 font-semibold">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="fullName" className="font-base font-medium">
            Full Name<span className="text-sent">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            onChange={handleChange}
            className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
          />
          <label htmlFor="profilePicture" className="font-base font-medium">
            Profile Picture<span className="text-sent">*</span>
          </label>
          <input
            id="profilePicture"
            type="file"
            onChange={handleFileChange}
            className="dark:bg-bg_dark"
          />
          <label htmlFor="username" className="font-base font-medium">
            Username<span className="text-sent">*</span>
          </label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
          />
          <label htmlFor="email" className="font-base font-medium">
            Email<span className="text-sent">*</span>
          </label>
          <input
            id="email"
            type="text"
            onChange={handleChange}
            className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
          />
          <label htmlFor="password" className="font-base font-medium">
            Password<span className="text-sent">*</span>
          </label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
          />
          {loading && (
            <div className="font-sm text-center mt-4 text-gray">
              Processing...
            </div>
          )}
          {error && (
            <div className="font-sm text-center mt-4 text-sent">{error}</div>
          )}
          {success && (
            <div className="font-sm text-center mt-4 text-received">
              {success}
            </div>
          )}
          <button
            className="py-1 font-h6 mt-4 font-medium rounded-md bg-primary_dark text-text_dark hover:bg-primary_light"
            type="submit"
          >
            Register
          </button>
          <p className="font-sm text-center">
            Have an account?{" "}
            <span className="font-bold cursor-pointer">Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
