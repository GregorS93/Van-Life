import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/pages/Home/Home-Page";
import About from "/pages//About/About.page";
import Vans from "/pages/Vans/Vans-Page";
import VanDetail from "/pages/VansDetail/VanDetail.page";
import Dashboard from "/pages/Host/HostDashboard/Dashboard-Page";
import Income from "/pages/Host/HostIncome/Income-Page";
import Reviews from "/pages/Host/HostReviews/Reviews-Page";
import Layout from "/components/Layout/Layout-Component";
import HostLayout from "/components/HostLayout/HostLayout-Component";
import HostVans from "/pages/Host/HostVans/HostVans-Page";
import HostVansDetail from "/pages/Host/HostVansDetails/HostVansDetail-Page";
import HostVanInfo from "/pages/Host/HostVansInfo/HostVansInfo-Page";
import HostVansPricing from "/pages/Host/HostVansPricing/HostVansPricing-Page";
import HostVansPhotos from "/pages/Host/HostVansPhotos/HostVansPhotos-Page";
import NotFound from "/pages/NotFound/NotFound-Page";
import Login from "/pages/Login/Login-Page";
import AuthRequired from "/pages/AuthReq/AuthRequired-Page";

import "./server";
import { aboutRoute } from "./pages/About/about.route";
import { vanDetailRoute } from "./pages/VansDetail/vanDetail.route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={aboutRoute} element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path={vanDetailRoute()} element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              {/* vanDetailRoute() here doesn't work because of some weird react-router mechanics.  */}
              <Route path={"vans/:id"} element={<HostVansDetail />}>
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
