import React from 'react'
import "./Navbar.css"


const Navbar = (props) => {


    return (
        <div className='navbar'>
            <div className="logo">
                <a href="/">
                    <h1>LOGO</h1>
                </a>
            </div>
            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="blog">Blog</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar