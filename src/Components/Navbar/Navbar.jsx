import React, { useState } from "react";
import "./Navbar.css";
import notification from "../../assets/img/Group (1).png";
import admin from "../../assets/img/Vector (3).png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    alert("Logged out"); // Placeholder for logout action
  };

  return (
    <header className="header">
      <div className="logo"></div>
      <div className="admin-icon">
        {/* <span className="icon">
          <img src={notification} style={{ height: "30px" }} />
        </span> */}
        <span className="icon">
          <IconButton sx={{ color: "#2F49D0" }}>
            <NotificationsActiveRoundedIcon />
          </IconButton>
        </span>
        {/* Notification Icon */}
        <span className="icon">
          <IconButton onClick={toggleDropdown} sx={{ color: "#2F49D0" }}>
            <AccountCircleIcon />
          </IconButton>

          {/* <img src={admin} style={{ height: "30px", backgroundColor: "red" }} /> */}
        </span>
        Admin
        {/* Admin Icon */}
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}
