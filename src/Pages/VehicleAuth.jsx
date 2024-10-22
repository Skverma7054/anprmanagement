import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Fade,
  Grid,
  CircularProgress,
  Grid2,
  Box,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
// import plate from "../assets/img/WhatsApp Image 2024-10-03 at 10.19.41_7d72db2d.jpg";
import axios from "axios";
import plate from "../assets/img/numberplate9.jpg";

const VehicleAuth = () => {
  const imgRef = useRef(null); // Reference for the img element
  const canvasRef = useRef(null); // Reference for the canvas element
  const [capturedImage, setCapturedImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(false); // Error state
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar open state
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Snackbar severity
  const [truckData, setTruckData] = useState();
  // const captureImage = () => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");
  //   const img = imgRef.current;

  //   // Set the canvas dimensions to match the full image dimensions
  //   canvas.width = img.naturalWidth; // Use natural width of the image
  //   canvas.height = img.naturalHeight; // Use natural height of the image

  //   // Draw the full image onto the canvas
  //   context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

  //   // Convert canvas to data URL and save the full image
  //   const imageData = canvas.toDataURL();
  //   setCapturedImage(imageData);

  //   // Store the full image in localStorage and send it to the backend
  //   localStorage.setItem("image", imageData);
  //   sendImageToBackend(imageData);

  //   // Smooth scroll to the captured image section
  //   scrollToCapturedImage();
  // };
  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = imgRef.current;

    // Set the canvas dimensions to match the full image dimensions
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Draw the full image onto the canvas
    context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

    // Convert the canvas to Blob instead of base64
    canvas.toBlob((blob) => {
      setCapturedImage(blob); // Set the captured Blob image
      // Store the blob in localStorage (optional)
      localStorage.setItem("image", blob);

      // Send the blob image to the backend
      sendImageToBackend(blob);

      // Smooth scroll to the captured image section
      scrollToCapturedImage();
    }, "image/jpeg"); // Set the image format (e.g., 'image/jpeg' or 'image/png')
  };
  const scrollToCapturedImage = () => {
    // Wait for the captured image to render
    setTimeout(() => {
      const capturedImageElement = document.getElementById(
        "captured-image-section"
      );
      if (capturedImageElement) {
        capturedImageElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the image is rendered
  };

  const sendImageToBackend = async (imageData) => {
    const formData = new FormData();

    formData.append("image", imageData, "captured_image.jpg"); // Append the image as a file to FormData

    try {
      const response = await axios.post(
        "http://192.168.1.47:5000/detect_plate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for multipart
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        // setCapturedImage(response.data.cropped_plate);
        // setResponseMessage(
        //   "Image uploaded successfully: " + response.data.message
        // );
        // postNumberPlate(response.data.EasyOCR);
        postNumberPlate("UP32GS6537");

        setSnackbarMessage(
          "Image uploaded successfully: " + response.data.EasyOCR
        );
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
      } else {
        // setResponseMessage(
        //   "Image uploaded successfully: " + response.data.message
        // );
        postNumberPlate("UP32GS6537");
        setSnackbarMessage(response.data.error);
        setSnackbarSeverity("warning");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error sending image:", error);
      setResponseMessage("Error uploading image.");
      setSnackbarMessage("Error uploading image.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  const postNumberPlate = async (loaderId) => {
    try {
      const response = await axios.post(
        "http://192.168.1.47:3002/api/detail/checkin",
        {
          loader_id: loaderId,
        }
      );
      setTruckData(response.data.allRes);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleImageLoad = () => {
    setLoading(false);
    setError(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };
  // Snackbar close handler
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
  return (
    <div>
      <Card sx={{ borderRadius: "18px" }}>
        <CardContent>
          <Typography variant="h5">Live Streaming from CCTV</Typography>
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <CircularProgress />
            </div>
          )}
          {error && !loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <Typography color="error" align="center">
                Failed to load CCTV stream.
              </Typography>
            </div>
          )}
          {!error && (
            <img
              ref={imgRef}
              src="http://192.168.1.8:8080/video"
              // src="http://192.168.29.86:5000/video_feed"
              alt="CCTV Stream"
              crossOrigin="anonymous"
              style={{
                width: "100%",
                maxHeight: "490px",
                objectFit: "cover",
                display: loading ? "none" : "block",
              }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <Button
            variant="contained"
            color="primary"
            onClick={captureImage}
            sx={{ marginTop: "10px" }}
            disabled={error || loading}
          >
            Capture Image
          </Button>
        </CardContent>
      </Card>

      {/* Captured Image and Response Message */}
      {capturedImage && (
        <Fade in={true} timeout={500}>
          <Grid2
            container
            spacing={2}
            id="captured-image-section"
            style={{ marginTop: "16px" }}
          >
            <Grid item xs={6} sm={4}>
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "18px",
                }}
              >
                <CardContent>
                  <Typography variant="h6">Captured Image:</Typography>
                  <img
                    src={URL.createObjectURL(capturedImage)}
                    // src={capturedImage}
                    alt="Captured"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid2 item xs={6} sm={8}>
              {truckData?.map((ele) => (
                <Card
                  key={ele.loader_no} // Added a unique key for each card
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "18px",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", // Shadow for depth
                    border: "2px solid #0078FF", // Border color
                  }}
                >
                  <CardContent>
                    <Box sx={{ width: "100%", padding: "10px" }}>
                      <Typography
                        variant="h6"
                        style={{
                          color: "#0078FF",
                          fontWeight: "bold",
                          marginBottom: "16px",
                        }}
                      >
                        Loader Details
                      </Typography>

                      <Grid container spacing={2}>
                        {/* Row 1 */}
                        <Grid item xs={6}>
                          <TextField
                            label="Loader No."
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={ele.loader_no} // Use 'ele' to get the current item
                            InputProps={{ readOnly: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Vehicle Type"
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={ele.vehicle_type} // Use 'ele' to get the current item
                            InputProps={{ readOnly: true }}
                          />
                        </Grid>

                        {/* Row 2 */}
                        <Grid item xs={6}>
                          <TextField
                            label="Owner Name"
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={ele.loader_owner} // Use 'ele' to get the current item
                            InputProps={{ readOnly: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Weight (kg)"
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={ele.loader_weight} // Use 'ele' to get the current item
                            InputProps={{ readOnly: true }}
                          />
                        </Grid>

                        {/* Row 3 */}
                        <Grid item xs={6}>
                          <TextField
                            label="Permit No."
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={ele.loader_permit_no} // Use 'ele' to get the current item
                            InputProps={{ readOnly: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Driver Name"
                            fullWidth
                            variant="outlined"
                            size="small"
                            value={ele.loader_derivename} // Use 'ele' to get the current item
                            InputProps={{ readOnly: true }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Grid2>
          </Grid2>
        </Fade>
      )}
      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // Changed to bottom-left
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default VehicleAuth;
