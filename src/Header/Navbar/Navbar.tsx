import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href="src/Header/Navbar/Navbar">Home</a>
            <a href="src/Header/Navbar/Navbar">Skills</a>
            <a href="src/Header/Navbar/Navbar">Projects</a>
            <a href="src/Header/Navbar/Navbar">Contacts</a>
        </div>
    );
};
