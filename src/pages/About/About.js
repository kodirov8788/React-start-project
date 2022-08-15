import React, { useContext } from 'react'
import img3 from "../../images/about.jpg"
import "./About.css"
import { UserContext } from "../../context/UserContext"



function About() {
    const { name, lastname } = useContext(UserContext)
    console.log(name, lastname);

    return (
        <div >


            <img className='img' src={img3} alt="" />


        </div>
    )
}

export default About