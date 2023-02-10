import React from 'react';
import s from './App.module.css';
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";
import {SimpleSnackbar} from "./common/SnackBar/Snackbar";



function App() {

    return (
        <div className={s.App}>
            <Main/>
            <Footer/>
            <SimpleSnackbar/>
        </div>
    );
}

export default App;
