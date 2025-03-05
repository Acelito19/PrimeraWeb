import React from "react";
import { Link } from "react-router-dom";
import logo from "./logos.png";

interface NavbarProps {
    onLogout: () => void;
    userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, userName }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo" />
                <span className="userName">{userName}</span>
            </div>

            <ul className="navbar-menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre Nosotros</Link></li>
                <li><Link to="/gallery">Galería</Link></li>
                <li><button onClick={onLogout} className="logout-button">Cerrar Sesión</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
