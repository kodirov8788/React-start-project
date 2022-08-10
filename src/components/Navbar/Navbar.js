import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"


const Navbar = (props) => {

    const [color, setColor] = useState(null)
    const [AddClass, setAddClass] = useState(null)
    console.log("color >>", color);
    console.log("addclass >>", AddClass);
    const myFunc = () => {
        setColor({ background: "blue", text: "red" })
        setAddClass("rang")
        console.log("Ishladi");
    }
    const myFuncOut = () => {
        setColor(null)
        setAddClass(null)
    }
    return (
        <div className="navbar" style={{ background: color?.background }}>
            <div className="logo">
                <li> <Link className={AddClass} to="/" style={{ color: color?.text }}> LOGO</Link></li>
            </div>
            <ul className="ul">
                <li><Link className={AddClass} to="/home">Home</Link></li>
                <li><Link className={AddClass} to="/blog">Blog</Link></li>
                <li><Link className={AddClass} to="/about">About</Link></li>
                <li><Link className={AddClass} to="/contact">Contact</Link></li>
            </ul>
            <button onMouseOver={myFunc} onMouseOut={myFuncOut}>BUTTON</button>

        </div >
    )
}

export default Navbar