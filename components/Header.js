import React from "react";
import logo from '../img/logo.svg';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="JANTA Logo" height='40' />
            <h1>JANTA</h1>
        </header>
    );
}

export default Header;