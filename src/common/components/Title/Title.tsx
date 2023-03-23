import React from 'react';
import s from "./Title.module.scss"

type TitleType={
    text: string
}

export const Title = ({text}: TitleType) => {
    return (
        <div className={s.title}>
            <div>{text}</div>
        </div>
    );
}