import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import TruckIcon from "@mui/icons-material/LocalShipping";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import DatePicker from "../Components/DateRangePicker/DatePicker"; // Uncomment this if you want to include the DatePicker component.

const Dashboard = () => {
  // Dummy data
  const totalCheckIns = 15;
  const totalCheckOuts = 12;
  const totalGoodsTransported = 3257;
  const latestCheckInDetails = {
    truckNo: "MP09HH6439",
    driverName: "John Doe",
    goods: "Electronics",
    weight: "1200 kg",
    permitNo: "P123456",
  };
  const latestCheckOutDetails = {
    truckNo: "MP09HH9876",
    driverName: "Jane Smith",
    goods: "Furniture",
    weight: "1500 kg",
    permitNo: "P654321",
  };
  const upcomingEvents = [
    "Maintenance Check",
    "Inspection Day",
    "Safety Training",
  ];

  return (
    <Box sx={{ padding: "16px", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        {/* Left Side: First Grid */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {/* Total Vehicle Check-in Card */}
            <Grid item xs={12} sm={6} lg={4}>
              <Card
                elevation={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "18px",
                  flexDirection: "column",
                  width: "100%", // Ensure cards are the same width
                  transition: "background-color 0.3s ease", // Smooth transition for background color
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // Change the color on hover
                  },
                }}
              >
                <TruckIcon
                  sx={{ fontSize: 40, color: "#3f51b5", marginBottom: "16px" }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">Total Vehicle Check-in</Typography>
                  <Typography variant="h4" color="primary">
                    {totalCheckIns}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Goods Transport */}
            <Grid item xs={12} sm={6} lg={4}>
              <Card
                elevation={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "18px",
                  flexDirection: "column",
                  width: "100%", // Ensure cards are the same width
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <LocalMallIcon
                  sx={{ fontSize: 40, color: "#3f51b5", marginBottom: "16px" }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">Total Goods Transport</Typography>
                  <Typography variant="h4" color="primary">
                    {totalGoodsTransported}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Vehicle Check-out */}
            <Grid item xs={12} sm={6} lg={4}>
              <Card
                elevation={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px",
                  borderRadius: "18px",
                  flexDirection: "column",
                  width: "100%",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <TruckIcon
                  sx={{ fontSize: 40, color: "#3f51b5", marginBottom: "16px" }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">Total Vehicle Check-out</Typography>
                  <Typography variant="h4" color="primary">
                    {totalCheckOuts}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Latest Check-in Details */}
            <Grid item xs={12} sm={6} lg={6}>
              <Card
                elevation={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "16px",
                  borderRadius: "18px",
                  width: "100%",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <TruckIcon sx={{ fontSize: 40, color: "#3f51b5" }} />
                <CardContent>
                  <Typography variant="h6">Latest Check-in Details</Typography>
                  <Typography variant="h5" color="primary">
                    {latestCheckInDetails.truckNo}
                  </Typography>
                  <Box sx={{ marginTop: "16px" }}>
                    <Typography variant="body2">
                      <strong>Driver:</strong> {latestCheckInDetails.driverName}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Goods:</strong> {latestCheckInDetails.goods}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Weight:</strong> {latestCheckInDetails.weight}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Permit No:</strong>{" "}
                      {latestCheckInDetails.permitNo}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Latest Check-out Details */}
            <Grid item xs={12} sm={6} lg={6}>
              <Card
                elevation={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "16px",
                  borderRadius: "18px",
                  width: "100%",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                <TruckIcon sx={{ fontSize: 40, color: "#3f51b5" }} />
                <CardContent>
                  <Typography variant="h6">Latest Check-out Details</Typography>
                  <Typography variant="h5" color="primary">
                    {latestCheckOutDetails.truckNo}
                  </Typography>
                  <Box sx={{ marginTop: "16px" }}>
                    <Typography variant="body2">
                      <strong>Driver:</strong>{" "}
                      {latestCheckOutDetails.driverName}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Goods:</strong> {latestCheckOutDetails.goods}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Weight:</strong> {latestCheckOutDetails.weight}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Permit No:</strong>{" "}
                      {latestCheckOutDetails.permitNo}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side: Second Grid */}
        <Grid item xs={12} md={4}>
          {/* Calendar */}
          <Grid item xs={12}>
            <Card
              elevation={6}
              sx={{
                padding: "16px",
                borderRadius: "18px",
                height: "490px",
                width: "100%",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" color="primary">
                  <CalendarTodayIcon
                    sx={{ fontSize: 40, marginBottom: "16px" }}
                  />
                  Jan 10, Tuesday
                </Typography>
                <Box sx={{ marginTop: "16px" }}>
                  <Typography variant="body1">
                    <strong>Upcoming Events:</strong>
                  </Typography>
                  {upcomingEvents.map((event, index) => (
                    <Box
                      key={index}
                      sx={{
                        margin: "8px 0",
                        padding: "8px",
                        backgroundColor:
                          index % 2 === 0 ? "#c5cae9" : "#fff59d",
                        borderRadius: "8px",
                      }}
                    >
                      {event}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
