import React from 'react';
import style from './AboutMe.module.css'
import s from '../../common/styles/Container.module.css'
import {data} from "../../Data/Data";

export const AboutMe = () => {
    return (
        <div className={style.aboutMeBlock}>
            <div className={s.container+' '+style.aboutMeContainer}>
                <div className={style.ava}>
                    {data.ava}
                </div>
                <div className={style.aboutMe}>
                    <h3>{data.name}</h3>
                    <div>{data.aboutMe}</div>
                    <div>
                        <label>Birthday: </label>
                        <span>{data.birthday}</span>
                    </div>
                    <div>
                        <label>Age: </label>
                        <span>{data.age}</span>
                    </div>
                    <div>
                        <label>Residence: </label>
                        <span>{data.residence}</span>
                    </div>
                    <div>
                        <label>Address: </label>
                        <span>{data.address}</span>
                    </div>
                    <div>
                        <label>E-mail: </label>
                        <span>{data.eMail}</span>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <span>{data.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
