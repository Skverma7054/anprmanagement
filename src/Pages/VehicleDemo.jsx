import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TablePagination, // For status indicators
} from "@mui/material";
import axios from "axios";

const VehicleDemo = () => {
  const [sampleData, setSampleData] = useState({ table_data: [] });
  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const receivedData = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.37:3002/api/anpr/detail"
      );
      console.log("Success:", response.data);
      let data = response.data;
      setSampleData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    receivedData();
  }, []);

  const ImageTableCell = ({ cropped_plate_image }) => {
    const imageUrl = useMemo(() => {
      if (
        cropped_plate_image &&
        Array.isArray(cropped_plate_image.data) &&
        cropped_plate_image.data.length > 0
      ) {
        try {
          const buffer = new Uint8Array(cropped_plate_image.data);
          const blob = new Blob([buffer], { type: "image/jpeg" });
          return URL.createObjectURL(blob);
        } catch (error) {
          console.error("Error creating image URL:", error);
          return null;
        }
      }
      return null;
    }, [cropped_plate_image]);

    return (
      <TableCell>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Cropped Plate"
            width="150"
            height="120"
            onLoad={() => URL.revokeObjectURL(imageUrl)}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }} // Image styles
          />
        ) : (
          <img
            src="https://via.placeholder.com/150x120"
            alt="Placeholder"
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }} // Placeholder styles
          />
        )}
      </TableCell>
    );
  };
  const ImageRnder64 = ({ cropped_plate_image }) => {
    const imageUrl = useMemo(() => {
      if (
        cropped_plate_image &&
        Array.isArray(cropped_plate_image.data) &&
        cropped_plate_image.data.length > 0
      ) {
        try {
          const buffer = new Uint8Array(cropped_plate_image.data);
          const blob = new Blob([buffer], { type: "image/jpeg" });
          return URL.createObjectURL(blob);
        } catch (error) {
          console.error("Error creating image URL:", error);
          return null;
        }
      }
      return null;
    }, [cropped_plate_image]);

    return (
      <>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Cropped Plate"
            width="150"
            height="120"
            onLoad={() => URL.revokeObjectURL(imageUrl)}
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }} // Image styles
          />
        ) : (
          <img
            src="https://via.placeholder.com/150x120"
            alt="Placeholder"
            style={{
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }} // Placeholder styles
          />
        )}
      </>
    );
  };

  const filteredTruckData = useMemo(
    () =>
      sampleData.table_data.filter((truck) =>
        [truck.vehicle_number].some((field) =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    [searchTerm]
  );
  // Apply pagination to the filtered truck data
  const paginatedTruckData = useMemo(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredTruckData.slice(startIndex, endIndex);
  }, [filteredTruckData, page, rowsPerPage]);
  const formatDate = (isoString) => {
    if (!isoString) return "N/A"; // Return "N/A" if the timestamp is not provided
    const date = new Date(isoString);
    return date.toLocaleString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };
  // Pagination handler
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box p={3}>
      {/* Truck Information Row */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            // style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            elevation={6}
            sx={{ borderRadius: "18px" }}
          >
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="h5" component="div">
                    Truck Number:{" "}
                    {sampleData?.latest_checkin?.vehicle_number || "Loading..."}
                  </Typography>
                  <Typography variant="body1">
                    Gate No: {sampleData?.latest_checkin?.gateNo || "0"}
                  </Typography>
                  <Typography variant="body1">
                    Time:{" "}
                    {formatDate(sampleData?.latest_checkin?.checkin_time) ||
                      "10:30 AM"}
                  </Typography>
                  <Typography variant="body1">
                    Vehicle Type:{" "}
                    {sampleData?.latest_checkin?.loader_type || "N/A"}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ImageRnder64
                    cropped_plate_image={
                      sampleData.latest_checkin?.vehicle_image
                    }
                  />
                  {/* <img
                    src={
                      sampleData.img || "https://via.placeholder.com/400x200"
                    }
                    alt="Truck"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  /> */}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Truck Check-in/Check-out Table */}
        <Grid item xs={12}>
          <Card
            variant="outlined"
            // style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
            elevation={6}
            sx={{ borderRadius: "18px" }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                style={{ marginBottom: "16px" }}
              >
                Truck Details
              </Typography>
              <TableContainer component={Paper} sx={{ borderRadius: "18px" }}>
                <Table aria-label="truck details table">
                  <TableHead sx={{ backgroundColor: "#e0f7fa" }}>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Check-in</TableCell>
                      <TableCell>Check-out</TableCell>
                      <TableCell>Purpose</TableCell>
                      <TableCell>Loader Id</TableCell>
                      <TableCell>Type</TableCell>
                      {/* <TableCell>Status</TableCell> */}
                      <TableCell>Plate Image</TableCell>
                      <TableCell>Vehicle Image</TableCell>
                      {/* <TableCell>Permitted</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedTruckData?.map((row, index) => (
                      <TableRow
                        key={row.id}
                        hover
                        // onClick={() => handleRowClick(truck)}
                        sx={{
                          backgroundColor:
                            index % 2 === 0
                              ? "rgba(240, 240, 240, 1)"
                              : "white", // Light gray for even rows, white for odd
                          "&:hover": {
                            backgroundColor: "rgba(230, 230, 230, 1)", // Change hover effect for both row types
                          },
                        }}
                      >
                        <TableCell>{row.id || index + 1}</TableCell>
                        <TableCell>
                          {formatDate(row.checkin_time) || "08:00 AM"}
                        </TableCell>
                        <TableCell>
                          {formatDate(row.checkout_time) || "12:00 PM"}
                        </TableCell>
                        <TableCell>
                          {row.vehicle_purpose || "Delivery"}
                        </TableCell>
                        <TableCell>{row.loader_id || "123"}</TableCell>
                        <TableCell>{row.loader_type || "Excise"}</TableCell>
                        {/* <TableCell>
                          <Chip
                            label={row.status || "CheckIn"}
                            color={
                              row.status === "CheckIn" ? "primary" : "default"
                            }
                            variant="outlined"
                          />
                        </TableCell> */}
                        <TableCell>
                          <ImageTableCell
                            cropped_plate_image={row.cropped_plate_image}
                          />
                        </TableCell>
                        <TableCell>
                          <ImageTableCell
                            cropped_plate_image={row.vehicle_image}
                          />
                        </TableCell>
                        {/* <TableCell>
                          <Chip
                            label={
                              row.permitted ? "Permitted" : "Not Permitted"
                            }
                            color={row.permitted ? "success" : "error"}
                            variant="outlined"
                          />
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  component="div"
                  count={filteredTruckData.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VehicleDemo;
