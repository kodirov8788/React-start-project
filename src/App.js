import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    const myFunc = () => {
        console.log("ishladi");
    }
    return (
        <div className="app">
            <Navbar />
            <Sidebar />
            <button onClick={myFunc}>Button</button>
            <h1>salom dunyo</h1>
        </div>
    )
}

export default App;