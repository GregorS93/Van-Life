import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.Page/Home";
import About from "./About.Page/About";
import Vans from "./Vans.Page/Vans";
import VanDetail from "./VansDetail.Page/VanDetail";
import Dashboard from "./HostDashboars.Page/Dashboard";
import Income from "./HostIncome.Page/Income";
import Reviews from "./HostReviews.Page/Reviews";
import Layout from "./Layout.Component/Layout";
import HostLayout from "./HostLayout.Component/HostLayout";
import HostVans from "./HostVans.Page/HostVans";
import HostVansDetail from "./HostVansDetails.Page/HostVansDetail";
import HostVanInfo from "./HostVansInfo.Page/HostVansInfo";
import HostVansPricing from "./HostVansPricing.Page/HostVansPricing";
import HostVansPhotos from "./HostVansPhotos.Page/HostVansPhotos";
import NotFound from "./NotFound.Page/NotFound";
import Login from "./Login.Page/Login";
import AuthRequired from "./AuthReq.Page/AuthRequired";

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
