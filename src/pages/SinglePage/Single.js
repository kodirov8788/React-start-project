import React from 'react'
import { useLocation } from "react-router-dom"
import "./Single.css"

function Single() {
    const Location = useLocation()
    const State = Location.state
    console.log(Location.state);
    return (
        <div className='single'>
            <h1>Single</h1>
            <h1>{State.productName}</h1>
            <img src={State.productImage} alt="" />
            <h1>{State.productPrice}$</h1>
            <h1>{State.productWeight}g</h1>
        </div>
    )
}

export default Single