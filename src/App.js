import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import Dashboard from "./Pages/Dashboard";
import VehicleRegister from "./Pages/VehicleRegister";
import VehicleAuth from "./Pages/VehicleAuth";
import VehicleCheckOut from "./Pages/VehicleCheckOut";
import DashboardLayoutBasic from "./Components/Sidebar/Appbar";
import Layout from "./Components/Layout/Layout";
import Dashboard2 from "./Pages/Dashboard2";
import CCTV from "./Components/CCTVStream/CCTV";
import TruckTable from "./Pages/TruckDetails";
import ExitReport from "./Pages/ExitReport";
import WeighbridgeReport from "./Pages/WeighbridgeReport";
import VehicleDemo from "./Pages/VehicleDemo";
import Testpage from "./Pages/Testpage";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="dashboard" element={<Dashboard2 />} />
            <Route path="EntryGateReport" element={<TruckTable />} />
            <Route path="ExitGateReport" element={<ExitReport />} />
            <Route path="WeighbridgeReport" element={<WeighbridgeReport />} />
            <Route path="checkIn" element={<VehicleRegister />} />
            <Route path="checkOut" element={<VehicleCheckOut />} />
            <Route path="vehicleAuth" element={<VehicleAuth />} />
            <Route path="vehicleDemo" element={<VehicleDemo />} />
            <Route path="test" element={<Testpage />} />

            {/* <Route path="vehicleAuth" element={<CCTV />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
