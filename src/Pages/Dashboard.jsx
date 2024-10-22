import React from "react";
import "./Dashboard.css"; // Make sure to create this CSS file
import Grid from "@mui/material/Grid";
import truck from "../assets/img/mdi_truck.png";
import goods from "../assets/img/ep_goods-filled.png";
import group from "../assets/img/ep_goods-filled.png";
export default function Dashboard() {
  return (
    <>
      <div className="parent">
        <div className="div1">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   background: "#4b57ec",
            }}
          >
            <img
              style={{
                backgroundColor: "whitesmoke",
                marginLeft: "10px",
                padding: "10px",
                display: "inline-flex",
                height: "80px",
                width: "80px",
                borderRadius: "8px",
                alignItems: "center",
              }}
              src={truck}
              alt="truck"
            />

            <div>Total Vehicle Registration</div>
            <div>02</div>
          </div>
        </div>
        <div className="div2">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                backgroundColor: "whitesmoke",
                padding: "10px",
                display: "inline-flex",
                height: "80px",
                width: "80px",
                borderRadius: "8px",
                alignItems: "center",
              }}
              src={truck}
              alt="truck"
            />

            <div>Total Vehicle Departed</div>
            <div>02</div>
          </div>
        </div>
        <div className="div3">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                backgroundColor: "whitesmoke",
                padding: "10px",
                display: "inline-flex",
                height: "80px",
                width: "80px",
                borderRadius: "8px",
                alignItems: "center",
              }}
              src={goods}
              alt="goods"
            />

            <div>Total Good Transport</div>
            <div>02</div>
          </div>
        </div>
        <div className="div4">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              style={{
                backgroundColor: "whitesmoke",
                padding: "10px",
                display: "inline-flex",
                height: "80px",
                width: "80px",
                borderRadius: "8px",
                alignItems: "center",
              }}
              src={group}
              alt="goods"
            />

            <div>Total Vehicle Category</div>
            <div>02</div>
          </div>
        </div>
        {/* <div className="div5">Card 5</div> */}
      </div>
      {/* <Grid style={{ border: "1px solid red" }}>Helllo</Grid> */}
    </>
  );
}
