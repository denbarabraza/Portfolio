import React from 'react';
import s from './App.module.css';
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";


function App() {

    return (
        <div className={s.App}>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
