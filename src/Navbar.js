import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">MiSitio</div>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}
