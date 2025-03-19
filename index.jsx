import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/pages/Home/Home.page";
import About from "/pages//About/About.page";
import Vans from "/pages/Vans/Vans.page";
import VanDetail from "/pages/VansDetail/VanDetail.page";
import Dashboard from "/pages/Host/HostDashboard/Dashboard.page";
import Income from "/pages/Host/HostIncome/Income.page";
import Reviews from "/pages/Host/HostReviews/Reviews.page";
import Layout from "/components/Layout/Layout.component";
import HostLayout from "/components/HostLayout/HostLayout.component";
import HostVans from "/pages/Host/HostVans/HostVans.page";
import HostVansDetail from "/pages/Host/HostVansDetails/HostVansDetail.page";
import HostVanInfo from "/pages/Host/HostVansInfo/HostVansInfo.page";
import HostVansPricing from "/pages/Host/HostVansPricing/HostVansPricing.page";
import HostVansPhotos from "/pages/Host/HostVansPhotos/HostVansPhotos.page";
import NotFound from "/pages/NotFound/NotFound.page";
import Login from "/pages/Login/Login.page";
import AuthRequired from "/pages/AuthReq/AuthRequired.page";

import "./server";

import { aboutRoute } from "/pages/About/About.route";
import { vansRoute } from "/pages/Vans/Vans.route";
import { vanDetailRoute } from "/pages/VansDetail/VanDetail.route";
import { loginRoute } from "/pages/Login/Login.route";
import { hostLayout } from "/components/HostLayout/HostLayout.route";
import { incomeRoute } from "/pages/Host/HostIncome/Income.route";
import { reviewsRoute } from "/pages/Host/HostReviews/Reviews.route";
import { hostVansRoute } from "/pages/Host/HostVans/HostVans.route";
import { pricingRoute } from "/pages/Host/HostVansPricing/HostVansPricing.route";
import { photosRoute } from "/pages/Host/HostVansPhotos/HostVansPhotos.route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={aboutRoute} element={<About />} />
          <Route path={vansRoute} element={<Vans />} />
          <Route path={vanDetailRoute()} element={<VanDetail />} />
          <Route path={loginRoute} element={<Login />} />

          <Route element={<AuthRequired />}>
            <Route path={hostLayout} element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path={incomeRoute} element={<Income />} />
              <Route path={reviewsRoute} element={<Reviews />} />
              <Route path={hostVansRoute} element={<HostVans />} />
              <Route path={vanDetailRoute()} element={<HostVansDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path={pricingRoute} element={<HostVansPricing />} />
                <Route path={photosRoute} element={<HostVansPhotos />} />
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
