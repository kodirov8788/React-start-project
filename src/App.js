import Main from "./components/Main/Main";
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
        {
            id: 3,
            name: "Ikromjon",
            lastname: "Aripov"
        },
    ]
    return (
        <div className="app">
            <Navbar name="Abror" lastname="Muxtorov" Users={users} function={myFunc} />
            {/* <Sidebar /> */}
            <Main data={users} />
        </div>
    )
}

export default App;