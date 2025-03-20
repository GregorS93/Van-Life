import { useState, useEffect } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { getVan } from "../../../apis/api";
import { activeStyles } from "../../../consts/toConsts";
import { pricingRoute } from "../HostVansPricing/HostVansPricing.route";
import { photosRoute } from "../HostVansPhotos/HostVansPhotos.route";

export default function HostVanDetail() {
  const { id } = useParams();
  const [listedVan, setListedVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setListedVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="van-listed">
      <Link to=".." relative="path" className="back-btn">
        &larr; <span>Back to all vans</span>
      </Link>
      {listedVan && (
        <div className="van-listed-container">
          <div className="van-listed-div">
            <img src={listedVan.imageUrl} className="listed-van-img" />
            <div className="van-listed-detail">
              <div className={`van-type ${listedVan.type} van-type-listed`}>
                {listedVan.type}
              </div>
              <div className="van-listed-name">{listedVan.name}</div>
              <div className="van-listed-price">
                <span>${listedVan.price}</span>/day
              </div>
            </div>
          </div>
          <nav className="host-vans-nav">
            <NavLink
              className="host-van-detail-links"
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Details
            </NavLink>
            <NavLink
              className="host-van-detail-links"
              to={pricingRoute}
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              className="host-van-detail-links"
              to={photosRoute}
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ listedVan }} />
        </div>
      )}
    </div>
  );
}
