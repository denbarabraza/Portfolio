import React from 'react';
import style from './Project.module.css'
import {data} from "../../../Data/Data";

export const Project = () => {
    return (
        <div className={style.project}>
            {data.projects.map(p => {
                return (
                    <div className={style.oneProject} id={p.id}>
                        <div className={style.icon} style={{backgroundImage: `url(${p.img})`}}>
                            {p.hrefView && <a href={p.hrefView} className={style.viewBtn} target="_blank">View</a>}
                            {p.hrefDemo && <a href={p.hrefDemo} className={style.demoBtn} target="_blank">Demo</a>}
                        </div>
                        <div className={style.projectInfo}>
                            <h3>{p.title}</h3>
                            <div className={style.description}>{p.description}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

//<img src={p.img} className={style.icon} alt=""/>