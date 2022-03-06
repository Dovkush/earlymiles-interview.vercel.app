import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Routes as RouteSwitch } from "react-router";
import HomeLayout from "./routes/home";
function App() {
  return (
    <>
      <RouteSwitch>
        <Route path="/" element={<HomeLayout />} />
      </RouteSwitch>

      {/* <HomeLayout /> */}
    </>
  );
}

export default App;
