import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkModeSlice.js";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
