import React from 'react';
import style from './Header.module.css'
import s from '../common/styles/Container.module.css'
import {Navbar} from "./Navbar/Navbar";


export const Header = () => {
    return (
        <div className={style.header}>
            <div className={s.container + ' ' + style.navbarContainer}>
                <Navbar/>
            </div>
        </div>
    );
};
