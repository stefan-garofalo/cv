"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    if (localStorage.theme === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }

  return (
    <button className="ml-auto" onClick={toggleTheme}>
      {theme === "light" ? (
        <MoonIcon height={20} width={20} />
      ) : (
        <SunIcon height={20} width={20} />
      )}
    </button>
  );
};
