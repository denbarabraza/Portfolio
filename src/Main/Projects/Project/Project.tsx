import React from 'react';
import style from './Project.module.css'
import {data} from "../../../Data/Data";

export const Project = () => {
    return (
        <div className={style.project}>
            {data.projects.map(p => {
                return (
                    <div className={style.oneProject}>
                        <div className={style.icon} style={{backgroundImage: `url(${p.img})`}}>
                            <div className={style.viewBtn}><a href={p.hrefView}>View</a></div>
                            <div className={style.demoBtn}><a href={p.hrefDemo}>Demo</a></div>
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