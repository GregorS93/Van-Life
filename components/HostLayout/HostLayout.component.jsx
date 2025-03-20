import { Outlet, NavLink } from "react-router-dom";
import { activeStyles } from "../../consts/toConsts";
import { incomeRoute } from "../../pages/Host/HostIncome/Income.route";
import { hostVansRoute } from "../../pages/Host/HostVans/HostVans.route";
import { reviewsRoute } from "../../pages/Host/HostReviews/Reviews.route";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          className="host-nav-link"
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to={incomeRoute}
          className="host-nav-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>

        <NavLink
          to={hostVansRoute}
          className="host-nav-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to={reviewsRoute}
          className="host-nav-link"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
