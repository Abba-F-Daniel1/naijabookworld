import React from "react";
import { useBookstore } from "../../context/BookstoreContext";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const { state, dispatch } = useBookstore();

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {state.darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
