import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../api";
import { hostVansPath } from "../consts/toConsts";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setHostVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const hostVansEls = hostVans.map((van) => (
    <Link className="linksis" key={van.id} to={`hostVansPath{van.id}`}>
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
      <h1 className="host-vans-h1">Your listed Vans</h1>
      <div className="host-vans-container">{hostVansEls}</div>
    </>
  );
}
