import React from 'react';
import s from './Works.module.css'
import sc from '../common/styles/container.module.css'
import {Project} from "./project/Project";

export const Works = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${sc.container}  ${s.workContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Project title={'Todolist'} description={'My first project'}/>
                    <Project title={'Counter'} description={'I made it myself :)'}/>
                    <Project title={'Portfolio'} description={'I think i have very poor portfolio...yet'}/>
                </div>

            </div>
        </div>
    );
};