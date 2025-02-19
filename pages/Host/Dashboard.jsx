import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { getHostVans } from '../../api'
import { BsStarFill } from "react-icons/bs"

export default function Dashboard() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        getHostVans()
            .then(data => setVans(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    const hostVansEls = vans.map(van =>
        <Link key={van.id} to={`/host/vans/${van.id}`}>
            <div className="host-van-div">
                <img src={van.imageUrl} className="host-van-img" />
                <div className="host-van-detail">
                    <h4 className="host-van-detail-h">{van.name}</h4>
                    <div className="host-van-detail-p">{van.price}/day</div>
                </div>
            </div>
        </Link>
    )

    if (error) {
        return <h1>Error: {error.message}</h1>
    }

    return (
        <>
            <section className="earnings-section">
                <div>
                    <h1>Welcome!</h1>
                    <p>Income last <span className='income-span'>30 days</span></p>
                    <h2>$2260</h2>
                </div>
                <Link to="income" className='details-link'>Details</Link>
            </section>
            <section className='review-section'>
                <div>
                    <h2>Review Score</h2>
                    <BsStarFill className="star" />
                    <p><span className='review-span'>5.0</span>/5</p>
                </div>
                <Link to="reviews" className='details-link'>Details</Link>
            </section>
            <section>
                <div className='listed-vans-dashboard-div'>
                    <h1 className="host-vans-h1">Your listed Vans</h1>
                    <Link to="vans" className='view-all-host-link'>View all</Link>
                </div>
                { loading && !vans 
                    ? <h1>Loading...</h1> 
                    : <div className="host-vans-container">
                        {hostVansEls}
                    </div> }
            </section>
        </>
    )
}