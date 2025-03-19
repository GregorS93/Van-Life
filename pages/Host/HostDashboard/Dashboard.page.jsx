import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../apis/api";
import { BsStarFill } from "react-icons/bs";
import { hostVansPath } from "../../../consts/toConsts";

export default function Dashboard() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link className="dashboard-link" key={van.id} to={hostVansPath(van.id)}>
      <div className="host-van-div">
        <img src={van.imageUrl} className="host-van-img" />
        <div className="host-van-detail">
          <h4 className="host-van-detail-h">{van.name}</h4>
          <div className="host-van-detail-p">{van.price}/day</div>
        </div>
      </div>
    </Link>
  ));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <section className="earnings-section">
        <div>
          <h1>Welcome!</h1>
          <p>
            Income last <span className="income-span">30 days</span>
          </p>
          <h2>$2260</h2>
        </div>
        <Link to="income" className="details-link">
          Details
        </Link>
      </section>
      <section className="review-section">
        <div>
          <h2>Review Score</h2>
          <BsStarFill className="star" />
          <p>
            <span className="review-span">5.0</span>/5
          </p>
        </div>
        <Link to="reviews" className="details-link">
          Details
        </Link>
      </section>
      <section>
        <div className="listed-vans-dashboard-div">
          <h1 className="host-vans-h1">Your listed Vans</h1>
          <Link to="vans" className="view-all-host-link">
            View all
          </Link>
        </div>
        {loading && !vans ? (
          <h1>Loading...</h1>
        ) : (
          <div className="host-vans-container">{hostVansEls}</div>
        )}
      </section>
    </>
  );
}
