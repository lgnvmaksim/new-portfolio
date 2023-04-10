import React from 'react';
import s from './Main.module.css'
import sc from '../common/styles/container.module.scss'

export const Main = () => {
    return <div className={s.mainBlock}>
            <div className={sc.container}>
                <div className={s.text}>
                    <span>Hello</span>
                    <h1>My name is Max</h1>
                    <p>I'm great Front-end developer</p>
                </div>
                <div className={s.photo}></div>
            </div>

        </div>

};
