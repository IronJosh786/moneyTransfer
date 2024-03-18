import React, { useEffect, useState } from "react";
import axios from "axios";

function AllTransaction() {
  const [allTransaction, setallTransaction] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAllTransactions = async () => {
      try {
        const response = await axios.get(
          "/api/v2/users/get-transaction-history"
        );
        if (response.data.success)
          setSuccess("Fetched Transactions Successfully");
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
    fetchAllTransactions();
  }, [allTransaction]);

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

  return <div className={`${className}`}>AllTransaction</div>;
}

export default AllTransaction;
