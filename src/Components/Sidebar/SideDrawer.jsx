import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  IconButton,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import truck from "../../assets/img/truck.png";
import videostream from "../../assets/img/security-camera.png";
import { useNavigate } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CastIcon from "@mui/icons-material/Cast";
import NoCrashRoundedIcon from "@mui/icons-material/NoCrashRounded";
import CarCrashRoundedIcon from "@mui/icons-material/CarCrashRounded";
import truckdetail from "../../assets/img/delivery-time.png";
export default function SideDrawer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("dashboard");
  const navigate = useNavigate(); // Use navigate to handle manual navigation

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
    navigate(`/${link}`);
    setActiveLink(link);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: isExpanded ? 240 : 100,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isExpanded ? 240 : 100,
            boxSizing: "border-box",
            transition: "width 0.2s",
            backgroundColor: "#2F49D0",
            color: "white",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          {isExpanded && <Typography variant="h6">ANPR</Typography>}
          <IconButton onClick={toggleSidebar} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 10px 0px 10px",
            // paddingLeft: "10px",
          }}
        >
          <List>
            <ListItem
              button
              selected={activeLink === "dashboard"}
              onClick={() => handleLinkClick("dashboard")}
              sx={{
                backgroundColor: activeLink === "dashboard" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                <DashboardRoundedIcon />
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Dashboard" />}
            </ListItem>
            <ListItem
              button
              selected={activeLink === "EntryGateReport"}
              onClick={() => handleLinkClick("EntryGateReport")}
              sx={{
                backgroundColor:
                  activeLink === "EntryGateReport" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                <IconButton style={{ color: "white" }}>
                  <NoCrashRoundedIcon />
                  {/* <LocalShippingIcon /> */}
                </IconButton>
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Report Entry Gate" />}
            </ListItem>
            <ListItem
              button
              selected={activeLink === "ExitGateReport"}
              onClick={() => handleLinkClick("ExitGateReport")}
              sx={{
                backgroundColor:
                  activeLink === "ExitGateReport" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                <IconButton style={{ color: "white" }}>
                  <CarCrashRoundedIcon />
                  {/* <LocalShippingIcon /> */}
                </IconButton>
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Report Exit Gate" />}
            </ListItem>
            <ListItem
              button
              selected={activeLink === "WeighbridgeReport"}
              onClick={() => handleLinkClick("WeighbridgeReport")}
              sx={{
                backgroundColor:
                  activeLink === "WeighbridgeReport" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                <IconButton style={{ color: "white" }}>
                  <LocalShippingIcon />
                </IconButton>
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Report Weighbridge" />}
            </ListItem>
            {/* <ListItem
              button
              selected={activeLink === "checkIn"}
              onClick={() => handleLinkClick("checkIn")}
              sx={{
                backgroundColor: activeLink === "checkIn" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                <img
                  src={truck}
                  alt="truck"
                  style={{ height: "30px", backgroundColor: "white" }}
                />
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Vehicle CheckIn" />}
            </ListItem>
            <ListItem
              button
              selected={activeLink === "checkOut"}
              onClick={() => handleLinkClick("checkOut")}
              sx={{
                backgroundColor: activeLink === "checkOut" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                <img
                  src={truck}
                  alt="truck"
                  style={{ height: "30px", backgroundColor: "white" }}
                />
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Vehicle CheckOut" />}
            </ListItem> */}
            <ListItem
              button
              selected={activeLink === "vehicleAuth"}
              onClick={() => handleLinkClick("vehicleAuth")}
              sx={{
                backgroundColor: activeLink === "vehicleAuth" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                {/* <img
                  src={videostream}
                  alt="video-strm"
                  style={{ height: "30px", backgroundColor: "white" }}
                /> */}
                <IconButton style={{ color: "white" }}>
                  <CastIcon />
                </IconButton>
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Vehicle Auth" />}
            </ListItem>
            <ListItem
              button
              selected={activeLink === "vehicleDemo"}
              onClick={() => handleLinkClick("vehicleDemo")}
              sx={{
                backgroundColor: activeLink === "vehicleDemo" ? "#1A2B81" : "",
                "&:hover": { backgroundColor: "#1A2B81" },
                borderRadius: "10px",
              }}
            >
              <ListItemIcon>
                {/* <img
                  src={videostream}
                  alt="video-strm"
                  style={{ height: "30px", backgroundColor: "white" }}
                /> */}
                <IconButton style={{ color: "white" }}>
                  <img
                    src={truckdetail}
                    style={{ height: "40px" }}
                    alt="icon"
                  />

                  {/* <CastIcon /> */}
                </IconButton>
              </ListItemIcon>
              {isExpanded && <ListItemText primary="Vehicle Demo" />}
            </ListItem>
            {/* <ListItem
              button
              selected={activeLink === "vehicleAuth"}
              onClick={() => handleLinkClick("vehicleAuth")}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              {isExpanded && (
                <ListItemText primary="Vehicle Entry Authentication" />
              )}
            </ListItem> */}
          </List>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "16px",
            justifyContent: isExpanded ? "space-between" : "center",
          }}
        >
          <IconButton onClick={toggleTheme}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {isExpanded && (
            <Typography>{isDarkMode ? "Light Theme" : "Dark Theme"}</Typography>
          )}
          <Switch checked={isDarkMode} onChange={toggleTheme} />
        </Box> */}
      </Drawer>
    </Box>
  );
}
