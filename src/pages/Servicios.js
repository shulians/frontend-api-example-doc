import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Servicios.css";

export default function Servicios() {
    return (
        <div className="servicios-page">
            {/* Header con imagen */}
            <div className="servicios-header">
                <h1>Servicios</h1>
                <p>Explora nuestros servicios</p>
            </div>

            <div className="servicios-container">
                {/* Menú vertical */}
                <div className="menu-vertical">
                    <ul>
                        <li><Link to="servicio1">Servicio 1</Link></li>
                        <li><Link to="servicio2">Servicio 2</Link></li>
                        <li><Link to="servicio3">Servicio 3</Link></li>
                    </ul>
                </div>

                {/* Contenido de la derecha */}
                <div className="contenido-servicio">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
