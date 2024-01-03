import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import navbarImg from "../assets/img/navbar-brand.png";
import categoryImg from "../assets/img/category.png";
import '../styles/navbar.css';

const Navbar = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);

    const toggleNavMenu = () => {
        setShowNavMenu(!showNavMenu);
    };

    return (
        <>
            <div className={`navbars rounded-pill d-flex mx-auto align-items-center ${showNavMenu ? 'active' : ''}`}>
                <div className="navimg-container">
                    <img src={navbarImg} alt="" className='nav-img'/>
                </div>
                <div className={`nav-menu  ${showNavMenu ? 'active' : ''}`}>
                    <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
                    <ScrollLink to="tentang-acara" smooth={true} duration={500}>Tentang Acara</ScrollLink>
                    <ScrollLink to="galeri" smooth={true} duration={500}>Galeri</ScrollLink>
                    <ScrollLink to="berita" smooth={true} duration={500}>Berita</ScrollLink>
                    <div className="nav-register-button">
                        <a href="https://event.detik.com/" target="_blank" rel="noopener noreferrer">Registrasi</a>
                    </div>
                </div>
                <div className="tests">
                <img src={categoryImg} alt="" className="category" onClick={toggleNavMenu} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
