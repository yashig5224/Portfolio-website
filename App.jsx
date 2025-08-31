import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles/global.css";
import "./styles/home.css"; // so theme vars are available everywhere

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-shell">
      <header className="site-header">
      </header>

      <main className="site-main">
        <Outlet context={{ toggleTheme }} />
      </main>
    </div>
  );
}
