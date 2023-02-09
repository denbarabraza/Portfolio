import emailjs from '@emailjs/browser';
import {FormType} from "../Main/Contacts/ContactsForm/ContactsForm";
import axios from "axios";

export const message={
    sendMessage(data:FormType){
        return axios.post('https://formspree.io/f/xqkopbzq', data)
    }
}