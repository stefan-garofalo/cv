"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return "dark";
  }

  return "light";
};

export const DarkMode = () => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);

  useEffect(() => {
    localStorage.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
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
