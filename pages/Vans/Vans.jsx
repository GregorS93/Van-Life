import {useState, useEffect} from "react"
import {Link, useSearchParams} from 'react-router-dom'
import { getVans } from "../../api"

export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch (err) {
                console.log("There was an error")
                console.log(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    function capitalizeFirst(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    }

    const filteredVans = typeFilter 
        ? vans.filter(van => van.type.toLowerCase() === typeFilter) 
        : vans

    const vanElements = filteredVans.map(van => 
        <div className="van" key={van.id}>
            <Link to={van.id} 
                className="van-link"
                state={{ 
                    search: `?${searchParams.toString()}`, 
                    type: typeFilter} }
            >
            <img src={van.imageUrl} className="van-img" alt={`Image of van named ${van.name}`}/>
            <div className="van-info">
                <h2>{van.name}</h2>
                <p>${van.price}</p>
            </div>
            <div className="day-div">/day</div>    
            <div className={`van-type ${van.type}`}>{capitalizeFirst(van.type)}</div>
            </Link>
        </div>
    )

    function genNewSearPar(key, value) {
        setSearchParams(prevPar => {
            if ( value === null) {
                prevPar.delete(key)
            } else {
                prevPar.set(key, value)
            }
            return prevPar
        })
    }

    if(loading) {
        return <h1 >Loading...</h1>
    }

    if( error ) {
        return <h1 >There was en error: {error.message}</h1>
    }

    return ( 
        <>
            <h1>Explore our van options:</h1>
            <div className="filterBtns">
                <button 
                    onClick={() => genNewSearPar("type", "simple")}
                    className={`van-type van-popravek simplest ${typeFilter === "simple" ? "selected" : null}`}
                >
                    Simple
                </button>
                <button 
                    onClick={() => genNewSearPar("type", "rugged")}
                    className={`van-type van-popravek ruggedy ${typeFilter === "rugged" ? "selected" : null}`}
                >
                    Rugged
                </button>
                <button 
                    onClick={() => genNewSearPar("type", "luxury")}
                    className={`van-type van-popravek luxurious ${typeFilter === "luxury" ? "selected" : null}`}
                >
                    Luxury
                </button>
                { typeFilter && <button 
                        onClick={() => genNewSearPar("type", null)}
                        className="van-type clear-filters"
                    >
                        Clear filters
                    </button>}
            </div>
            <div className="all-vans">
            {vanElements}
            </div>
        </>
    )
}