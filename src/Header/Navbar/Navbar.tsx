import React from 'react';
import style from './Navbar.module.css'

export const Navbar = () => {

    return (
        <div>
            <div className={style.navbar}>
                <a href="#greeting">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
        </div>
    );
};
