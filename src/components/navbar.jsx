// Navbar.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import navbarImg from "../assets/img/navbar-brand.png";
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbars rounded-pill d-flex mx-auto align-items-center">
                <div>
                    <img src={navbarImg} alt="" />
                </div>
                <div className="nav-menu justify-content-around">
                    <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
                    <ScrollLink to="tentang-acara" smooth={true} duration={500}>Tentang Acara</ScrollLink>
                    <ScrollLink to="galeri" smooth={true} duration={500}>Galeri</ScrollLink>
                    <ScrollLink to="berita" smooth={true} duration={500}>Berita</ScrollLink>
                    <div className="nav-register-button">
                        <a href="https://event.detik.com/" target="_blank" rel="noopener noreferrer">Registrasi</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
