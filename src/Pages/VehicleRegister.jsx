import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import stream from "../assets/img/image 2.png";
import "./VehiCheckOut.css";
import checkin from "../assets/img/checkin.webp";
import numberplate from "../assets/img/numberplate.png";

export default function VehicleRegister() {
  return (
    <>
      <Card
        sx={{
          display: "inline-flex",
          padding: "10px",
          borderRadius: "18px",
          backgroundColor: "#4b57ec",
          color: "white",
          marginBottom: "5px",
        }}
      >
        <Typography variant="h5">CHECK IN</Typography>
      </Card>
      <Card
        elevation={5}
        style={{
          borderRadius: "18px",
          padding: "10px",
        }}
      >
        <Grid container>
          <Grid item lg={9}>
            <img
              src={checkin}
              style={{ height: "450px", width: "1020px", objectFit: "cover" }}
              alt="stream"
            />
          </Grid>
          <Grid item lg={3}>
            <Card sx={{ padding: "10px" }}>
              <img src={numberplate} alt="numberplate" />
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                spacing={2}
              >
                {/* Row 1 */}
                <Grid item xs={12} className="align-form">
                  <Typography variant="body1" align="center">
                    Truck No.
                  </Typography>
                  <TextField
                    className="textfield-form"
                    // label="Truck No."
                    value="MP 09 HH 6439"
                    variant="outlined"
                    size="small"
                    disabled
                  />
                </Grid>
                {/* <Grid item xs={12} className="align-form">
                  Chasis No.
                  <TextField
                    // label="Chasis No."
                    value="VIN16238X1428"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid> */}

                {/* Row 2 */}
                <Grid item xs={12} className="align-form">
                  Driver Name
                  <TextField
                    // label="Owner Name"
                    value="DILJIT DOSANJH"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} className="align-form">
                  Good Contain
                  <TextField
                    // label="Engine No."
                    value="Mattress"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid>

                {/* Row 3 */}
                <Grid item xs={12} className="align-form">
                  Weight
                  <TextField
                    // label="Pin No."
                    value="560 Ton"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid>
                <Grid item xs={12} className="align-form">
                  Permit No.
                  <TextField
                    // label="Permit No."
                    value="AQLYYV1254fhyy"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid>

                {/* Row 4 */}
                {/* <Grid item xs={12} className="align-form">
                  Make
                  <TextField
                    // label="Make"
                    value="TATA MOTORS"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid> */}
                {/* <Grid item xs={12} className="align-form">
                  Policy No.
                  <TextField
                    // label="Policy No."
                    value="AGTI654r6"
                    variant="outlined"
                    size="small"
                    className="textfield-form"
                    disabled
                  />
                </Grid> */}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Card>

      <Grid
        container
        spacing={2}
        id="captured-image-section"
        style={{
          marginTop: "16px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          //   alignItems: "center",
        }}
      >
        {/* First Column (Captured Image) */}
        <Grid item xs={12} sm={4} lg={3}>
          <Card
            elevation={5}
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              //   alignItems: "center",
              borderRadius: "18px",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                style={{
                  color: "#0078FF",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Captured Image:
              </Typography>
              <img
                src={checkin}
                alt="Captured"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Second Column (Truck Details) */}
        <Grid item xs={12} sm={8} lg={9}>
          <Card
            elevation={5}
            style={{
              borderRadius: "18px",
              //   boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
              //   border: "2px solid #0078FF",
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

                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  spacing={2}
                >
                  {/* Row 1 */}
                  <Grid item xs={6} className="align-form">
                    <Typography variant="body1" align="center">
                      Truck No.
                    </Typography>
                    <TextField
                      className="textfield-form"
                      label="MP 09 HH 6439"
                      variant="outlined"
                      size="small"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} className="align-form">
                    Chasis No.
                    <TextField
                      // label="Chasis No."
                      value="VIN16238X1428"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>

                  {/* Row 2 */}
                  <Grid item xs={6} className="align-form">
                    Owner Name
                    <TextField
                      label="Honey Singh"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} className="align-form">
                    Engine No.
                    <TextField
                      label="TGI1J56856Sd"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>

                  {/* Row 3 */}
                  <Grid item xs={6} className="align-form">
                    Pin No.
                    <TextField
                      label="45897"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} className="align-form">
                    Permit No.
                    <TextField
                      label="PjUt563436Jk"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>

                  {/* Row 4 */}
                  <Grid item xs={6} className="align-form">
                    Make
                    <TextField
                      label="Tata Motors"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} className="align-form">
                    Policy No.
                    <TextField
                      label="YUING657876"
                      variant="outlined"
                      size="small"
                      className="textfield-form"
                      disabled
                    />
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
