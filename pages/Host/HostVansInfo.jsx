import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { listedVan } = useOutletContext()

    return (
        <div className="listed-van-details">
            <div><span className="listed-van-span">Name:</span> {listedVan.name}</div>
            <div><span className="listed-van-span">Category:</span> {listedVan.type}</div>
            <div><span className="listed-van-span">Description:</span> {listedVan.description}</div>
            <div><span className="listed-van-span">Visibility:</span> Public</div>
        </div>
    )
}