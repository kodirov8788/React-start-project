import React from 'react'
import Main from "./components/Main/Main"
import { products } from "./static/static__data"
import { BsFillFilePersonFill } from "react-icons/bs"


const App = () => {
    return (
        <div>
            <Main products={products} />
        </div>
    )
}

export default App