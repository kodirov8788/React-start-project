import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    const myFunc = () => {
        console.log("ishladi");
    }
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
    ]
    return (
        <div className="app">
            <Navbar name="Abror" lastname="Muxtorov" Users={users} function={myFunc} />
            <Sidebar />
            <button onClick={myFunc}>Button</button>
            <h1>salom dunyo</h1>
        </div>
    )
}

export default App;