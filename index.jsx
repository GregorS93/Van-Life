import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/pages/Home/Home-Page";
import About from "/pages//About/About-Page";
import Vans from "/pages/Vans/Vans-Page";
import VanDetail from "/pages/VansDetail/VanDetail-Page";
import Dashboard from "/pages/HostDashboars/Dashboard-Page";
import Income from "/pages//HostIncome/Income-Page";
import Reviews from "/pages/HostReviews/Reviews-Page";
import Layout from "/components/Layout/Layout-Component";
import HostLayout from "/components/HostLayout/HostLayout-Component";
import HostVans from "/pages/HostVans/HostVans-Page";
import HostVansDetail from "/pages/HostVansDetails/HostVansDetail-Page";
import HostVanInfo from "/pages/HostVansInfo/HostVansInfo-Page";
import HostVansPricing from "/pages/HostVansPricing/HostVansPricing-Page";
import HostVansPhotos from "/pages/HostVansPhotos/HostVansPhotos-Page";
import NotFound from "/pages/NotFound/NotFound-Page";
import Login from "/pages/Login/Login-Page";
import AuthRequired from "/pages/AuthReq/AuthRequired-Page";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVansPricing />} />
                <Route path="photos" element={<HostVansPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
