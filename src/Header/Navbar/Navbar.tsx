import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {

    return (
        <div>
            <div className={style.navbar}>
                <a href="#greeting" className={style.navbarItem}>Home</a>
                <a href="#about" className={style.navbarItem}>About</a>
                <a href="#skills" className={style.navbarItem}>Skills</a>
                <a href="#projects" className={style.navbarItem}>Projects</a>
                <a href="#contacts" className={style.navbarItem}>Contacts</a>
            </div>
        </div>
    );
};
