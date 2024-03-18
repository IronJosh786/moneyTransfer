import React, { useEffect, useState } from "react";
import axios from "axios";

function AllUser({ className }) {
  const [allUser, setAllUser] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("/api/v2/users/get-all-users");
        if (response.data.success) setSuccess("Fetched Users Successfully");
        console.log(response.data);
      } catch (error) {
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
      }
    };
    fetchAllUsers();
  }, [allUser]);

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

  return <div className={`${className}`}></div>;
}

export default AllUser;
