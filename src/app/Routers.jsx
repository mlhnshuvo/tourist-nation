import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="searchresult" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
