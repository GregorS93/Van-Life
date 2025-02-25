import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])

    const hostVansEls = hostVans.map(van =>
        <Link className="linksis" key={van.id} to={`/host/vans/${van.id}`}>
            <div className="host-van-div">
                <img src={van.imageUrl} className="host-van-img" />
                <div className="host-van-detail">
                    <h4 className="host-van-detail-h">{van.name}</h4>
                    <div className="host-van-detail-p">{van.price}/day</div>
                </div>
            </div>
        </Link>
    )
 
    return (
        <>
            <h1 className="host-vans-h1">Your listed Vans</h1>
            <div className="host-vans-container">
                {hostVansEls}
            </div>   
        </>
    )
}