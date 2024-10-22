import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActive";

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isDropdownOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    alert("Logged out"); // Placeholder for logout action
    handleMenuClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.11)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#4a90e2", fontWeight: "bold" }}>
          Logo
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#2F49D0" }}>
            <NotificationsActiveRoundedIcon />
          </IconButton>
          <IconButton
            sx={{ color: "#2F49D0", marginLeft: "20px" }}
            onClick={handleMenuOpen}
          >
            <AccountCircleIcon />
          </IconButton>
          <Typography sx={{ marginLeft: "10px", color: "#000" }}>
            Admin
          </Typography>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={isDropdownOpen}
          onClose={handleMenuClose}
          sx={{ marginTop: "10px" }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
