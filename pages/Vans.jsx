import {useState, useEffect} from "react"

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

export default function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    console.log(vans)
    

    // const vansElements = vans.map(van => {
    //     <div className="van">
    //         <img src={van.imageUrl} />
    //         <div className="van-info">
    //             <h3>{van.name}</h3>
    //             <p>{van.price}<span>/day</span></p>
    //         </div>
    //         <i className="van-type">{van.type}</i>
    //     </div>
    // })

    return ( 
        <>
            {/* {vansElements} */}
        </>
    )
}