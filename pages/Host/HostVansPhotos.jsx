import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { listedVan } = useOutletContext();

  return (
    <div className="listed-van-details">
      <img
        src={listedVan.imageUrl}
        alt="Pictures of the selected listed Van"
        className="listed-van-photos"
      />
    </div>
  );
}
