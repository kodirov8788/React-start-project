import React, { useContext, useState } from 'react'
import img3 from "../../images/about.jpg"
import "./About.css"
import { UserContext } from "../../context/UserContext"



function About() {
    const [InputData, setInputData] = useState(null)
    const { name, lastname } = useContext(UserContext)
    console.log(name, lastname);
    // const func = (e) => {
    //     console.log(e.target.value);
    // }

    return (
        <div >
            <input style={{ height: "50px", width: "200px" }} type="text" placeholder='Name...'
                onChange={(e) => console.log(e.target.value)} />


            <input style={{ height: "50px", width: "200px" }} type="text" placeholder='Last Name...'
                onChange={(e) => console.log(e.target.value)} />
        </div>
    )
}

export default About