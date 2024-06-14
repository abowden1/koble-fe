import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";

function App() {
    const [userId, setUserId] = useState("");
    return (
        <>
            <Navbar />
            <br />
            <Outlet context={[userId, setUserId]} />
        </>
    );
}

export default App;
