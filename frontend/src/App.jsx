import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./features/darkModeSlice.js";
import "./App.css";
import Home from "./pages/Home.jsx";

const App = () => {
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
    <div>
      <Home />
    </div>
  );
};

export default App;
