import React from 'react';
import s from './Project.module.css'

type PropsType = {
    title: string
    description: string
    style: {}
}

export const Project = ({title, description, style}: PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.picture} style={style}>
                <a className={s.link} href="">Смотреть</a>
            </div>

            <div className={s.projectInfo}>
                <div className={s.title}>{title}</div>
                <div className={s.description}>{description}</div>
            </div>


        </div>
    );
};