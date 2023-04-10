import React from 'react';
import s from './RemoteWork.module.scss'
import sc from '../../common/styles/container.module.scss'
import {Title} from "../../common/components/Title/Title";

export const RemoteWork = () => {
    return (
        <div className={s.remoteBlock}>
            <div className={`${sc.container}  ${s.remoteContainer}`}>
                <Title text={'Considering remote work'}/>
                <a className={s.link} href="">Contact me</a>
            </div>
        </div>
    );
};