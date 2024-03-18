import React, { useState } from "react";
import axios from "axios";

function NewTransaction({ givenUserName = "" }) {
  const [data, setData] = useState({
    username: givenUserName,
    amount: 0,
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const transactionDetails = {
      to: data.username,
      amount: data.amount,
      message: data.message,
    };

    try {
      const response = await axios.post(
        "/api/v2/transactions/new-transaction",
        transactionDetails
      );
      if (response.data.data) setSuccess("Made Transaction Successfully");
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="font-base font-medium">
          Username<span className="text-sent">*</span>
        </label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
        />
        <label htmlFor="amount" className="font-base font-medium">
          Amount<span className="text-sent">*</span>
        </label>
        <input
          id="amount"
          type="number"
          onChange={handleChange}
          className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
        />
        <label htmlFor="message" className="font-base font-medium">
          Message<span className="text-sent">*</span>
        </label>
        <input
          id="message"
          type="text"
          onChange={handleChange}
          className="p-1 font-sm rounded-md border border-gray dark:bg-bg_dark"
        />
        <button
          className="py-1 font-h6 mt-8 font-medium rounded-md bg-primary_dark text-text_dark hover:bg-primary_light"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default NewTransaction;
