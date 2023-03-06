import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import Signup from "../pages/Signup";
import SidnIn from "../pages/SidnIn";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="searchresult" element={<SearchResult />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SidnIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
