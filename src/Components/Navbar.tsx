import { useEffect, useState } from "react";
import styles from "../Styles/Navbar.module.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolioTheme");
    return savedTheme !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");
      localStorage.setItem("portfolioTheme", "dark");
    } else {
      document.body.classList.add("light-theme");
      localStorage.setItem("portfolioTheme", "light");
    }
  }, [darkMode]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Shraddha<span>.</span>
      </div>

      <div className={styles.links}>
        <a href="#profile">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certification">Certifications</a>
        <a href="#examination">Education</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

        <button
          className={styles.themeButton}
          onClick={() => setDarkMode((prev) => !prev)}
          title="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;