import React from 'react';
import s from './Project.module.css'

type PropsType={
    title:string
    description:string
}

export const Project = ({title, description}:PropsType) => {
    return (
        <div className={s.project}>
            <div className={s.picture}>
                <a className={s.link} href="">Смотреть</a>
            </div>
            <div className={s.title}>
                {title}
            </div>
            <div className={s.description}>
                {description}
            </div>
        </div>
    );
};