import React from 'react';
import style from './Project.module.css'
import {data} from "../../../Data/Data";

export const Project = () => {
    return (
        <div className={style.project}>
            {data.projects.map(p => {
                return (
                    <a href={p.href} className={style.oneProject}>
                        <div>
                            <img src={p.img} className={style.icon} alt=""/>
                        </div>
                        <h3>{p.title}</h3>
                        <div className={style.description}>{p.description}</div>
                    </a>
                )
            })}
        </div>
    );
};
