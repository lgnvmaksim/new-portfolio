import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {RemoteWork} from "./contact/remoteWork/RemoteWork";
import {Contact} from "./contact/contact/Contact";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <RemoteWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
