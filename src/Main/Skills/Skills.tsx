import React from 'react';
import {Skill} from "./Skill/Skill";
import style from './Skills.module.css'
import s from '../../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={s.container + ' ' + style.skillsContainer}>
                <h2>My skills</h2>
                <Skill/>
            </div>
        </div>
    );
};

