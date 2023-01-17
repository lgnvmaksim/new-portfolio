import React from 'react';
import s from './SkillOnly.module.css'

type PropsType={
    title:string
    description:string
}

export const SkillOnly = ({title, description}: PropsType) => {
    return (
        <div className={s.skill}>
          <div className={s.icon}></div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
};