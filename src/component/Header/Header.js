import React from 'react';
import "./Header.css";
import Logo from "../../images/Logo.svg";


const Header = () => {
    return (
        <nav className='header-container'>
            <img src={Logo} alt="" />
            <div className="nav-manu">
                <a href="/Shop">Shop</a>
                <a href="/Shop">Order</a>
                <a href="/Shop">Inventory</a>
                <a href="/Shop">Login</a>
            </div>
        </nav>
    );
};

export default Header;