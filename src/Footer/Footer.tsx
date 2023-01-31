import React from 'react';
import style from './Footer.module.css'
import s from "../common/styles/Container.module.css";
import {data} from "../Data/Data";
import teleg from '../Data/img/social/teleg.png'
import insta from '../Data/img/social/inst.png'
import git from '../Data/img/social/git.png'
import link from '../Data/img/social/link.png'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={s.container + ' ' + style.footerContainer}>
                <h3>{data.name}</h3>
                <div className={style.social}>
                    <a href={data.telegram} target="_blank"><img src={teleg} /></a>
                    <a href={data.instagram} target="_blank"><img src={insta}/></a>
                    <a href={data.gitHub} target="_blank"><img src={git}/></a>
                    <a href={data.linkedin} target="_blank"><img src={link}/></a>
                </div>
                <div>
                    © 2023 All rights reserved
                </div>
            </div>
        </div>
    );
};
