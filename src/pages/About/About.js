import React, { useContext, useState } from 'react'
import img3 from "../../images/about.jpg"
import "./About.css"
import { UserContext } from "../../context/UserContext"



function About() {
    const [InputData, setInputData] = useState({
        InputName: "",
        InputLastname: ""
    })
    const { name, lastname, ChangeValue } = useContext(UserContext)
    console.log(name, lastname);

    const UploadContext = () => {
        ChangeValue(InputData.InputName, InputData.InputLastname)
    }

    return (
        <div >
            <input style={{ height: "50px", width: "200px" }} type="text" placeholder='Name...'
                onChange={(e) => setInputData({ ...InputData, InputName: e.target.value })} />


            <input style={{ height: "50px", width: "200px" }} type="text" placeholder='Last Name...'
                onChange={(e) => setInputData({ ...InputData, InputLastname: e.target.value })} />

            <button onClick={UploadContext}>Upload to Context Api</button>

            {name && <h1>{name}</h1>}
            {lastname && <h1>{lastname}</h1>}
        </div>
    )
}

export default About