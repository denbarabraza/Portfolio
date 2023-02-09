import React from 'react';
import {Project} from "./Project/Project";
import style from './Projects.module.css'
import s from '../../common/styles/Container.module.css'

export const Projects = () => {
    return (
        <div className={style.projectBlock} id={'projects'}>
            <div className={s.container + ' ' + style.projectContainer}>
                <h2>Projects</h2>
                <Project/>
            </div>
        </div>
    );
};

