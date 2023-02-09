import React, {useEffect, useRef, useState} from 'react';
import style from './Main.module.css'
import {AboutMe} from "./AboutMe/AboutMe";
import {Skills} from "./Skills/Skills";
import {Greeting} from "./Greeting/Greeting";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Header} from "../Header/Header";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min.js"
// @ts-ignore
import * as THREE from "three";
import HideAppBar from "../common/HideAppBar/HideAppBar";


export const Main = () => {

    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0xcda173,
                    midtoneColor: 0xa7a3a3,
                    lowlightColor: 0xd2caca,
                    baseColor: 0xe5e5e5,
                    speed: 3,
                    zoom: 2
                })
            );
        }
        return () => {
            if (vantaEffect) setVantaEffect(0)
        };
    }, [vantaEffect]);

    return (
        <div className={style.main}>
            <div ref={vantaRef}>
                <HideAppBar children={<Header/>}/>
                <Greeting />
            </div>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    );
};
