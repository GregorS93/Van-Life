import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { listedVan } = useOutletContext();

  return (
    <div className="listed-van-details">
      <h3>
        <span className="listed-van-pricing">${listedVan.price}</span>/day
      </h3>
    </div>
  );
}
