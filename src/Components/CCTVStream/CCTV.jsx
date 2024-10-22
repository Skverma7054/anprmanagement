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
} from "@mui/material";
import axios from "axios";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const CCTV = () => {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const videoRef = useRef(null);

  const captureImage = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const img = imgRef.current;

    // Set canvas dimensions to match the image
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the current image on the canvas
    context.drawImage(img, 0, 0);

    // Convert canvas to data URL
    const imageData = canvas.toDataURL("image/png");
    setCapturedImage(imageData);

    // Send the image to the backend
    localStorage.setItem("image", imageData);
    sendImageToBackend(imageData);
    scrollToCapturedImage();
  };

  const scrollToCapturedImage = () => {
    setTimeout(() => {
      const capturedImageElement = document.getElementById(
        "captured-image-section"
      );
      if (capturedImageElement) {
        capturedImageElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const sendImageToBackend = async (imageData) => {
    try {
      const response = await axios.post(
        "http://192.168.1.44:5000/detect_plate",
        { image: imageData }
      );

      if (response.status === 200) {
        setResponseMessage(
          "Image uploaded successfully: " + response.data.message
        );
      }
    } catch (error) {
      console.error("Error sending image:", error);
      setResponseMessage("Error uploading image.");
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

  // Initialize Video.js player
  useEffect(() => {
    if (!videoRef.current) return; // Ensure the videoRef is defined

    const player = videojs(videoRef.current, {
      controls: true,
      responsive: true,
      fluid: true,
    });

    // Set the HLS source
    player.src({
      src: "https://cors-anywhere.herokuapp.com/http://192.168.1.9:8080/F:logimetrixVideoParkingClip/playlist.m3u8", // Replace with the actual path
      type: "application/x-mpegURL",
    });

    return () => {
      // Cleanup the player on unmount
      if (player) {
        player.dispose();
      }
    };
  }, [videoRef.current]); // Add videoRef.current as a dependency

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
          <div>
            {/* Video.js player for HLS streaming */}
            <div data-vjs-player>
              <video
                ref={videoRef}
                className="video-js vjs-big-play-centered"
                controls
                style={{ width: "100%", maxHeight: "490px" }}
              ></video>
            </div>
          </div>
          <canvas ref={canvasRef} style={{ display: "none" }} />
          <Button
            variant="contained"
            color="primary"
            onClick={captureImage}
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
                    src={capturedImage}
                    alt="Captured"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid2 item xs={6} sm={8}>
              <Card
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "18px",
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                  border: "2px solid #0078FF",
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
                      Truck Details
                    </Typography>

                    <Grid container spacing={2}>
                      {/* Row 1 */}
                      <Grid item xs={6}>
                        <TextField
                          label="Truck No."
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Chasis No."
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>

                      {/* Row 2 */}
                      <Grid item xs={6}>
                        <TextField
                          label="Owner Name"
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Engine No."
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>

                      {/* Row 3 */}
                      <Grid item xs={6}>
                        <TextField
                          label="Pin No."
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Permit No."
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>

                      {/* Row 4 */}
                      <Grid item xs={6}>
                        <TextField
                          label="Make"
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="Policy No."
                          fullWidth
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Fade>
      )}
    </div>
  );
};

export default CCTV;
