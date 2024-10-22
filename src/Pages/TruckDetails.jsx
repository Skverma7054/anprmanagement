import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
  Avatar,
  Chip,
  Toolbar,
  InputAdornment,
  IconButton,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import truck from "../assets/img/checkin.webp";
import truckplate from "../assets/img/numberplate.png";

// Sample truck data
const truckData = [
  {
    id: 1,
    vehicleNo: "MH12AB1234",

    source: "clip",
    camId: "1",
    watchList: "N/A",
    country: "India",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Heavy-duty Trucks",
    purpose: "Finished Goods",
    driver: "John Doe",
    status: "Checked In",
    checkInTime: "2024-10-10, 08:30 AM", // Date and Time
    checkOutTime: "2024-10-10, 05:00 PM", // Date and Time
    biltyNo: "BILTY12345",
    documents: ["Invoice", "Insurance"],
    goodsName: "Electronics",
    goodsWeight: "2000 Kg",
    ownerName: "Electronics Corp",
    destination: "Mumbai, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 2,
    vehicleNo: "MH14BC5678",
    source: "clip",
    camId: "1",
    watchList: "N/A",
    purpose: "Raw Material",
    country: "India",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Tipper Trucks",
    driver: "Alexa Liras",
    status: "Checked Out",
    checkInTime: "2024-10-09, 09:00 AM", // Date and Time
    checkOutTime: "2024-10-09, 05:30 PM", // Date and Time
    biltyNo: "BILTY67890",
    documents: ["Invoice"],
    goodsName: "Furniture",
    goodsWeight: "1500 Kg",
    ownerName: "Furni Co.",
    destination: "Pune, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 3,
    vehicleNo: "MH15CD9101",
    source: "clip",
    purpose: "Packaging Goods",
    camId: "1",
    watchList: "N/A",
    country: "India",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Heavy-duty Trucks",
    driver: "Laurent Perrier",
    status: "Checked In",
    checkInTime: "2024-10-10, 07:45 AM", // Date and Time
    checkOutTime: "2024-10-10, 04:45 PM", // Date and Time
    biltyNo: "BILTY54321",
    documents: ["Invoice", "Insurance", "Permit"],
    goodsName: "Automobile Parts",
    goodsWeight: "5000 Kg",
    ownerName: "AutoWorks Ltd.",
    destination: "Chennai, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 4,
    vehicleNo: "UP32AB3456",
    source: "clip",
    purpose: "Finished Goods",
    camId: "1",
    watchList: "N/A",
    country: "India",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Flatbed Trailers",
    driver: "Mark Zuckerberg",
    status: "Pending",
    checkInTime: "2024-10-10, 10:15 AM", // Date and Time
    checkOutTime: "2024-10-10, 06:00 PM", // Date and Time
    biltyNo: "BILTY98765",
    documents: ["Insurance", "Permit"],
    goodsName: "Books",
    goodsWeight: "500 Kg",
    ownerName: "Bookstore Ltd.",
    destination: "Lucknow, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 5,
    vehicleNo: "GJ05XY1234",
    source: "clip",
    camId: "1",
    watchList: "N/A",
    country: "India",
    purpose: "Packaging Goods",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Garbage Trucks",
    driver: "Bill Gates",
    status: "Checked In",
    checkInTime: "2024-10-10, 06:30 AM", // Date and Time
    checkOutTime: "2024-10-10, 03:00 PM", // Date and Time
    biltyNo: "BILTY11223",
    documents: ["Invoice", "Permit"],
    goodsName: "Textiles",
    goodsWeight: "1200 Kg",
    ownerName: "Textile Factory",
    destination: "Surat, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 6,
    vehicleNo: "DL01AB0987",
    source: "clip",
    camId: "1",
    watchList: "N/A",
    country: "India",
    purpose: "Raw Materials",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Tanker Trucks",
    driver: "Elon Musk",
    status: "Checked In",
    checkInTime: "2024-10-10, 11:00 AM", // Date and Time
    checkOutTime: "2024-10-10, 07:30 PM", // Date and Time
    biltyNo: "BILTY00987",
    documents: ["Invoice", "Insurance", "Permit"],
    goodsName: "Electronics",
    goodsWeight: "2500 Kg",
    ownerName: "Tesla India Pvt Ltd.",
    destination: "Delhi, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 7,
    vehicleNo: "RJ19XY8765",
    source: "clip",
    purpose: "Packaging Goods",
    camId: "1",
    watchList: "N/A",
    country: "India",
    state: "Uttar Pradesh",
    confidence: "56%",
    category: "Tanker Trucks",
    source: "clip",
    camId: "1",
    watchList: "N/A",
    country: "India",
    state: "Uttar Pradesh",
    confidence: "56%",
    driver: "Larry Page",
    status: "Checked Out",
    checkInTime: "2024-10-09, 12:00 PM", // Date and Time
    checkOutTime: "2024-10-09, 08:00 PM", // Date and Time
    biltyNo: "BILTY56789",
    documents: ["Invoice", "Insurance"],
    goodsName: "Spare Parts",
    goodsWeight: "800 Kg",
    ownerName: "Auto Parts Ltd.",
    destination: "Jaipur, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  {
    id: 8,
    vehicleNo: "KA05MN4321",
    source: "clip",
    camId: "1",
    watchList: "N/A",
    country: "India",
    state: "Uttar Pradesh",
    purpose: "Raw Materials",
    confidence: "56%",
    category: "Heavy-duty Trucks",
    driver: "Sundar Pichai",
    status: "Checked In",
    checkInTime: "2024-10-10, 07:00 AM", // Date and Time
    checkOutTime: "2024-10-10, 03:30 PM", // Date and Time
    biltyNo: "BILTY11234",
    documents: ["Invoice", "Insurance", "Permit"],
    goodsName: "Industrial Goods",
    goodsWeight: "3500 Kg",
    ownerName: "Industrial Corp.",
    destination: "Bangalore, India",
    numberPlateImage: `${truckplate}`,
    truckImage: `${truck}`,
  },
  // Add more trucks as needed
];

const TruckTable = () => {
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle row click to show the modal with truck details
  const handleRowClick = (truck) => {
    setSelectedTruck(truck);
    setOpen(true);
  };

  // Close modal handler
  const handleClose = () => {
    setOpen(false);
  };
  // Function to determine the status chip color
  const getStatusColor = (status) => {
    switch (status) {
      case "Checked In":
        return "#27ae60 ";
      case "Checked Out":
        return "#e74c3c";
      case "Pending":
        return "orange"; // Example color for 'Pending'
      default:
        return "default";
    }
  };

  const filteredTruckData = useMemo(
    () =>
      truckData.filter((truck) =>
        truck.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );
  return (
    <div>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item>
          <Card
            sx={{
              padding: "10px",
              display: "inline-flex",
            }}
            elevation={6}
          >
            <Typography>ENTRY GATE REPORT</Typography>
          </Card>
        </Grid>
        <Grid item>
          <Toolbar>
            <TextField
              variant="outlined"
              placeholder="Search by Vehicle No"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 2, marginRight: 2 }}
            />
          </Toolbar>
        </Grid>
      </Grid>
      {/* Table with enhanced header styling */}
      <TableContainer component={Paper} sx={{ borderRadius: "18px" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#e0f7fa" }}>
            {/* Custom header color */}
            <TableRow>
              <TableCell>Event Id</TableCell>
              <TableCell>Plate Id</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Camera Id</TableCell>

              <TableCell>Watch List</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Confidence</TableCell>
              <TableCell>Type Of Vehicle</TableCell>
              <TableCell>Purpose of Vehicle</TableCell>
              <TableCell>Check In Time</TableCell>
              <TableCell>Status</TableCell>
              {/* <TableCell>Check-In Time</TableCell>
              <TableCell>Check-Out Time</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTruckData.map((truck, index) => (
              <TableRow
                key={truck.id}
                hover
                onClick={() => handleRowClick(truck)}
                sx={{
                  backgroundColor:
                    index % 2 === 0 ? "rgba(240, 240, 240, 1)" : "white", // Light gray for even rows, white for odd
                  "&:hover": {
                    backgroundColor: "rgba(230, 230, 230, 1)", // Change hover effect for both row types
                  },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{truck.vehicleNo}</TableCell>
                <TableCell>{truck.source}</TableCell>
                <TableCell>{truck.camId}</TableCell>
                <TableCell>{truck.watchList}</TableCell>
                <TableCell>{truck.country}</TableCell>
                <TableCell>{truck.state}</TableCell>
                <TableCell>{truck.confidence}</TableCell>
                <TableCell>{truck.category}</TableCell>
                <TableCell>{truck.purpose}</TableCell>

                {/* <TableCell>{truck.driver}</TableCell> */}
                {/* <TableCell>
                  <Chip
                    label={truck.status}
                    color={getStatusColor(truck.status)} // Set color based on status
                  />
                </TableCell> */}
                <TableCell>{truck.checkInTime}</TableCell>
                <TableCell sx={{ color: getStatusColor(truck.status) }}>
                  {truck.status}
                </TableCell>
                {/* <TableCell>{truck.checkInTime}</TableCell> */}
                {/* <TableCell>{truck.checkOutTime}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal with details and images */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="truck-modal-title"
      >
        <Box
          sx={{
            borderRadius: "18px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedTruck && (
            <>
              <Typography
                id="truck-modal-title"
                variant="h6"
                component="h2"
                gutterBottom
              >
                Truck Full Details
              </Typography>

              {/* Truck Image */}
              <Grid container>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Avatar
                      src={selectedTruck.truckImage}
                      alt="Truck Image"
                      sx={{ width: 150, height: 100, mb: 2 }}
                      variant="square"
                    />
                  </Box>
                </Grid>
                {/* Number Plate Image */}
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Avatar
                      src={selectedTruck.numberPlateImage}
                      alt="Number Plate"
                      sx={{ width: 150, height: 60, mb: 2 }}
                      variant="square"
                    />
                  </Box>
                </Grid>
              </Grid>
              {/* Structured form-like layout */}
              <Grid container spacing={2}>
                {/* Row 1: Vehicle No, Category, Driver, and Status */}
                <Grid item xs={4}>
                  <TextField
                    label="Vehicle No"
                    value={selectedTruck.vehicleNo}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Category"
                    value={selectedTruck.category}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Driver"
                    value={selectedTruck.driver}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Status"
                    value={selectedTruck.status}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>

                {/* Row 2: Check-In Time, Check-Out Time, Bilty No, and Documents */}
                <Grid item xs={4}>
                  <TextField
                    label="Check-In Time"
                    value={selectedTruck.checkInTime}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Check-Out Time"
                    value={selectedTruck.checkOutTime}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Bilty No"
                    value={selectedTruck.biltyNo}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Documents"
                    value={selectedTruck.documents.join(", ")}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>

                {/* Row 3: Goods Name, Goods Weight, Owner Name, and Destination */}
                <Grid item xs={4}>
                  <TextField
                    label="Goods Name"
                    value={selectedTruck.goodsName}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Goods Weight"
                    value={selectedTruck.goodsWeight}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Owner Name"
                    value={selectedTruck.ownerName}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    label="Destination"
                    value={selectedTruck.destination}
                    fullWidth
                    InputProps={{ readOnly: true }}
                  />
                </Grid>
              </Grid>

              <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default TruckTable;
