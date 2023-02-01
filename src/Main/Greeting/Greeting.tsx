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
                    <h1 className={style.greetingCommon}>
                        <div>Hello,</div>
                        <div>I’m</div>
                        <div className={`${style.statusMe} && ${sApp.colorClass}`}>
                            {data.statusMe}
                        </div>
                        <div>{data.oneName}</div>
                    </h1>
                </div>
            </div>
        </div>
    );
};
