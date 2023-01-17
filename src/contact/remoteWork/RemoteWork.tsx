import React from 'react';
import s from './RemoteWork.module.css'
import sc from './../../common/styles/container.module.css'

export const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sc.container} ${s.remoteContainer}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <a className={s.link} href="">Нанять меня</a>
            </div>

        </div>
    );
};