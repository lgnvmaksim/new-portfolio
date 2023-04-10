import React from 'react';
import s from './Works.module.scss'
import sc from '../common/styles/container.module.scss'
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";
import todoImage from './../assets/image/TodoList.jpg'
import social from './../assets/image/SN.jpg'

export const Works = () => {
    return (
        <div className={s.workBlock}>
            <div className={`${sc.container}  ${s.workContainer}`}>
             <Title text={'My works'}/>
                <div className={s.works}>
                    <Project title={'Todolist'} description={'My first project'} style={todolistImage}/>
                    <Project title={'SocialNetwork'} description={'I made it myself :)'} style={socialNetwork}/>
                    {/*<Project title={'Portfolio'} description={'I think i have very poor portfolio...yet'}/>*/}
                </div>

            </div>
        </div>
    );
};

const todolistImage={
    backgroundImage: `url(${todoImage})`
}
const socialNetwork={
    backgroundImage: `url(${social})`
}