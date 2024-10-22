import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";

// Sample logo (replace with your logo path)
import logo from "../../assets/img/logo.png"; // Add the correct logo path

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "vehicle",
    title: "Vehicle CheckIn/CheckOut",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "checkIn",
        title: "CheckIn",
        icon: <DescriptionIcon />,
      },
      {
        segment: "checkOut",
        title: "CheckOut",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "vehicleAuth",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  const location = useLocation(); // Get current path

  return (
    <Box
      sx={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Outlet /> {/* This will render the nested routes */}
    </Box>
  );
}

function DashboardLayoutBasic() {
  const [open, setOpen] = React.useState(false); // Sidebar state
  const [expandedMenus, setExpandedMenus] = React.useState({}); // Track expanded submenus
  const navigate = useNavigate(); // Use navigate to handle manual navigation

  // Handle hover events to open/close sidebar
  const handleMouseEnter = () => {
    setOpen(true); // Open sidebar on hover
  };

  const handleMouseLeave = () => {
    setOpen(false); // Close sidebar when not hovering
  };

  // Toggle submenu visibility
  const handleMenuClick = (menuSegment) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuSegment]: !prev[menuSegment], // Toggle the menu state
    }));
  };

  return (
    <AppProvider navigation={NAVIGATION} theme={demoTheme}>
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* Add mouse events to control drawer open/close */}
        <Box
          sx={{ height: "100vh" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Drawer
            variant="permanent"
            open={open}
            sx={{
              width: open ? 240 : 60, // Control width based on open state
              transition: "width 0.3s ease",
              "& .MuiDrawer-paper": {
                width: open ? 240 : 60,
                transition: "width 0.3s ease",
              },
            }}
          >
            {/* Logo section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: open ? "flex-start" : "center",
                alignItems: "center",
                padding: open ? "20px" : "10px",
                height: "64px", // Adjust the height as needed
              }}
            >
              {/* Adjust image size based on open/closed state */}
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: open ? "150px" : "40px", // Adjust the size for open/close
                  transition: "width 0.3s ease",
                }}
              />
            </Box>

            {/* Navigation items */}
            <List>
              {NAVIGATION.map((navItem, index) => (
                <div key={index}>
                  <ListItem
                    button
                    onClick={() => {
                      if (navItem.children) {
                        handleMenuClick(navItem.segment); // Toggle submenu
                      } else {
                        navigate(`/${navItem.segment}`); // Navigate if no children
                      }
                    }}
                  >
                    <ListItemIcon>{navItem.icon}</ListItemIcon>
                    {open && <ListItemText primary={navItem.title} />}
                    {/* Show expand/collapse icons for parent menus with children */}
                    {open &&
                      navItem.children &&
                      (expandedMenus[navItem.segment] ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      ))}
                  </ListItem>
                  {/* Submenu: Only visible when expanded */}
                  {navItem.children && (
                    <Collapse
                      in={expandedMenus[navItem.segment]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {navItem.children.map((child, childIndex) => (
                          <ListItem
                            key={childIndex}
                            button
                            sx={{ pl: 4 }} // Indent child items
                            onClick={() => navigate(`/${child.segment}`)}
                          >
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            {open && <ListItemText primary={child.title} />}
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </div>
              ))}
            </List>
          </Drawer>
        </Box>

        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          {/* Dynamic content based on the current route */}
          <DemoPageContent />
        </Box>
      </Box>
    </AppProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
