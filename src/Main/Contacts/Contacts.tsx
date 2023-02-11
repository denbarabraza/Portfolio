import React from 'react';
import style from './Contacts.module.css'
import s from '../../common/styles/Container.module.css'
import {ContactsForm} from "./ContactsForm/ContactsForm";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={s.container + ' ' + style.contactsContainer}>
                <h2>Contact Me</h2>
                <ContactsForm/>
            </div>
        </div>
    );
};
