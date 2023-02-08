import React, {useEffect, useState} from 'react';
import style from './Greeting.module.css'
import s from '../../common/styles/Container.module.css'
import sApp from '../../App.module.css'
import Typewriter from 'typewriter-effect';
import {data} from "../../Data/Data";

export const Greeting = () => {

    let ar1=data.statusMe.filter((e,index)=>index%2!==0)
    let ar2=data.statusMe.filter((e,index)=>index%2===0)

    return (
        <div className={style.greetingBlock}>
            <div className={s.container + ' ' + style.greetingContainer}>
                <div className={`${style.greeting} && ${sApp.shadowApp}`}>
                    <h1 className={style.greetingCommon}>
                        <div>Hello,</div>
                        <div>I’m</div>
                        <div className={`${style.statusMe} && ${sApp.colorClass}`}>
                            <Typewriter
                                options={{
                                    strings: ar1,
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    deleteSpeed: 20,
                                }}
                            />
                            <Typewriter
                                options={{
                                    strings: ar2,
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    deleteSpeed: 20,
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
