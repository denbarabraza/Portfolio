import React from 'react';
import style from './Skill.module.css'
import {data} from "../../../Data/Data";

export const Skill = () => {
    return (
        <div className={style.skill}>
            {data.skills.map(e => {
                return (
                    <div key={e.id} className={style.oneSkill}>
                        <img src={e.img} className={style.icon}/>
                        <h3>{e.title}</h3>
                        <span className={style.description}>{e.description}</span>
                    </div>
                )
            })}
        </div>
    );
};
