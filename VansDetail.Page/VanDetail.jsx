import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVan } from "../api.js";

export default function VanDetail() {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);

  const search = location.state?.search || "";
  const typeOf = location.state?.type || "all";

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <Link to={`..${search}`} relative="path" className="back-btn">
        &larr; <span>Back to {typeOf} vans</span>
      </Link>
      {van ? (
        <div className="van-detail-div">
          <img src={van.imageUrl} className="van-detail-img" />
          <div className={`van-type ${van.type} van-detail`}>{van.type}</div>
          <h2 className="van-detail-name">{van.name}</h2>
          <div className="van-detail-price">
            <span>${van.price}</span>/day
          </div>
          <p className="van-desc">{van.description}</p>
          <button className="rent-van-btn">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
