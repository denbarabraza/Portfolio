import React from 'react';
import style from './Greeting.module.css'
import s from '../../common/styles/Container.module.css'
import {data} from "../../Data/Data";
import sApp from '../../App.module.css'

export const Greeting = () => {
    return (
        <div className={style.greetingBlock}>
            <div className={s.container + ' ' + style.greetingContainer}>
                <div className={`${style.greeting} && ${sApp.shadowApp}`}>
                    <h1>
                        <div>Hello<span className={sApp.colorClass}>.</span></div>
                        <div>
                            <div>I’m</div>
                            <div className={`${style.statusMe} && ${sApp.colorClass}`} >
                                {data.statusMe}
                             </div>
                        </div>
                        <div>{data.oneName}</div>
                    </h1>
                </div>
                <div className={style.ava}>
                    {data.ava}
                </div>
            </div>
        </div>
    );
};
