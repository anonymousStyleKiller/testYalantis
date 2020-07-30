import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
    return (
        <Router>
            <div className="container">
                <Navbar/>
                <Routes/>
            </div>
        </Router>
    );
}

export default App;
