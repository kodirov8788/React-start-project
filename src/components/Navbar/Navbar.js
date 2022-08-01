import React from 'react'
import "./Navbar.css"


const Navbar = (props) => {
    console.log(props);


    return (
        <div className='navbar'>
            <h1>{props.name}</h1>
            <h1>{props.lastname}</h1>
            <button onClick={props.function}>Function</button>
        </div>
    )
}

export default Navbar