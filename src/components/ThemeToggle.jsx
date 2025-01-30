import React, { useState, useEffect } from "react";

function ThemeToggle() {
  // Ensure a valid default theme
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = storedTheme === "light" ? "light" : "dark";  // Ensuring "light" as fallback
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    console.log("Applying theme:", theme); // Debugging

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
      }}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all duration-700"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
