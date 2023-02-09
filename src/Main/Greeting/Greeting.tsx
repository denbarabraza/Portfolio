import React from 'react';
import style from './Greeting.module.css'
import s from '../../common/styles/Container.module.css'
import sApp from '../../App.module.css'
import Typewriter from 'typewriter-effect';
import {data} from "../../Data/Data";

export const Greeting = () => {

    return (
        <div className={style.greetingBlock} >
            <div className={s.container + ' ' + style.greetingContainer}>
                <div className={`${style.greeting} && ${sApp.shadowApp}`} id={'greeting'}>
                    <h1 className={style.greetingCommon}>
                        <div>Hello,</div>
                        <div>I’m</div>
                        <div className={`${style.statusMe}`}>
                            <Typewriter
                                options={{
                                    strings: data.statusMe,
                                    autoStart: true,
                                    loop: true,
                                    delay: 65,
                                    deleteSpeed: 18,
                                }}
                            />
                        </div>
                        <div>{data.oneName}</div>
                    </h1>
                </div>
            </div>
        </div>
    );
};
