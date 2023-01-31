import React from 'react';
import style from './Project.module.css'
import {data} from "../../../Data/Data";

export const Project = () => {
    return (
        <div className={style.project}>
            {data.projects.map(p=>{
                return(
                    <div className={style.oneProject}>
                        <a href={p.href} ><img src={p.img} className={style.icon} alt=""/></a>
                        <h5>{p.title}</h5>
                        <div>{p.description}</div>
                    </div>
                )
            })}
        </div>
    );
};
