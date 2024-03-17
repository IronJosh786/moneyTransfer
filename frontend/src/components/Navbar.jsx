import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/darkModeSlice.js";
import "../App.css";

function Navbar() {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-between px-8 py-4 shadow-md">
      <button className="font-h5 font-semibold cursor-pointer">
        Money Transfer
      </button>
      <button onClick={handleToggleTheme}>
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Navbar;
