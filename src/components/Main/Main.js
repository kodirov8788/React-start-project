import React, { useState, useEffect } from 'react'
import "./Main.css"
import Card from "../Card/Card"
import axios from "axios"


function Main({ products }) {
    const [Time, setTime] = useState("")

    // useEffect(() => {
    //     const myFunc = () => {
    //         setTimeout(() => {
    //             setTime("Salom Uzbekistan")
    //         }, 2000)
    //     }
    //     myFunc()
    // }, [])

    // useEffect(() => {
    //     const myFunc = () => {
    //         setTimeout(() => {
    //             if (Time !== "") {
    //                 setTime("")
    //             }
    //         }, 2000)
    //     }

    //     myFunc()
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get("https://jsonplaceholder.typicode.com/users")
                .then(data => console.log(data.data))
                .catch(error => console.log(error))
        }
        fetchData()
    }, [])



    return (
        <div className='main'>
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))
            }
            {/* <button onClick={myFunc}>Button</button> */}
            {Time !== "" &&
                < div className="main_effect">
                    <h1>{Time}</h1>
                </div>
            }
        </div >
    )
}

export default Main