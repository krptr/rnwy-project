import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") ?? "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    // 1. Define the function to update the DOM class
    function updateTheme() {
      if (theme === "system") {
        localStorage.removeItem("theme");
        // Fixed typo: changed "prefers-colors-scheme" to "prefers-color-scheme"
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        root.classList.toggle("dark", systemPrefersDark);
      } else {
        localStorage.setItem("theme", theme);
        root.classList.toggle("dark", theme === "dark");
      }
    }

    // 2. Run the update immediately when theme changes
    updateTheme();

    // 3. If theme is "system", listen for OS-level changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Listen to real-time OS theme switches
      mediaQuery.addEventListener("change", updateTheme);

      // Cleanup: remove listener if theme changes or component unmounts
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [theme]);

  function cycleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme == "dark") return "light";
      if (prevTheme == "light") return "dark";
      return "system";
    });
  }

  return { theme, cycleTheme };
}

export { useTheme };
