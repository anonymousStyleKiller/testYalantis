import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary">
        <span className="navbar-brand ml-5">Test Yalantis</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down mr-5 d-flex justify-content-between">
            <li className="nav-item active mr-3"><NavLink to="/users">All Users</NavLink></li>
            <li className="nav-item"><NavLink to="/data">Data In Tabular Form</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;