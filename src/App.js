import React from "react";
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
