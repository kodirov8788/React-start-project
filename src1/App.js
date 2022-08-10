import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import { products } from "./static/static__data"
import { BsFillPersonCheckFill } from "react-icons/bs"



const App = () => {

    const users = [
        {
            id: 1,
            name: "Axror",
            lastname: "Temurov"
        },
        {
            id: 2,
            name: "Sardor",
            lastname: "Ayupov"
        },
        {
            id: 3,
            name: "Ikromjon",
            lastname: "Aripov"
        },
    ]

    console.log(products);
    return (
        <div className="app">
            {/* <Main data={users} /> */}

            {
                products.map(product => (
                    <h1>Salom</h1>
                ))
            }
        </div>
    )
}

export default App;