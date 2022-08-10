import React from 'react'
import "./Card.css"

const Card = (props) => {
    // console.log("card >>>", props);


    return (

        <div className='card'>
            <h1>{props.Name}</h1>
            <h2>{props.Lastname}</h2>
        </div>
    )
}

export default Card