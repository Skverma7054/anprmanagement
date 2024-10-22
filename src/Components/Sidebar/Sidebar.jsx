import React, { useEffect, useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard"); // default active link

  useEffect(() => {
    const localData = localStorage.getItem("theme");
    if (localData === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", newTheme);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <section className={`sidebar ${isExpanded ? "expand" : ""}`}>
        <div className="nav-header">
          <p className="logo">Logimetrix</p>
          <i className="bx bx-menu btn-menu" onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="dashboard"
              className={activeLink === "dashboard" ? "active" : ""}
              onClick={() => handleLinkClick("dashboard")}
            >
              <i className="bx bx-home-alt-2"></i>
              <span className="title">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a
              href="details"
              className={activeLink === "details" ? "active" : ""}
              onClick={() => handleLinkClick("details")}
            >
              <i className="bx bx-home-alt-2"></i>
              <span className="title">Details</span>
            </a>
            <span className="tooltip">Details</span>
          </li>
          <li>
            <a
              href="checkIn"
              className={activeLink === "checkIn" ? "active" : ""}
              onClick={() => handleLinkClick("checkIn")}
            >
              <i className="bx bx-phone-call"></i>
              <span className="title">Vehicle CheckIn</span>
            </a>
            <span className="tooltip">Vehicle CheckIn</span>
          </li>
          <li>
            <a
              href="checkOut"
              className={activeLink === "checkOut" ? "active" : ""}
              onClick={() => handleLinkClick("checkOut")}
            >
              <i className="bx bx-phone-call"></i>
              <span className="title">Vehicle CheckOut</span>
            </a>
            <span className="tooltip">Vehicle CheckOut</span>
          </li>
          <li>
            <a
              href="vehicleAuth"
              className={activeLink === "vehicleAuth" ? "active" : ""}
              onClick={() => handleLinkClick("vehicleAuth")}
            >
              <i className="bx bx-home-alt-2"></i>
              <span className="title">Vehicle CheckIn/CheckOut</span>
            </a>
            <span className="tooltip">Vehicle CheckIn/CheckOut</span>
          </li>
        </ul>

        <div className="theme-wrapper">
          <i className="bx bxs-moon theme-icon"></i>
          <p>Dark Theme</p>
          <div className="theme-btn" onClick={toggleTheme}>
            <span className={`theme-ball ${isDarkMode ? "dark" : ""}`}></span>
          </div>
        </div>
      </section>
    </>
  );
}
