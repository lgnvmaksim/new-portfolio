import React from 'react';
import s from './Footer.module.scss'
import sc from '../common/styles/container.module.scss'
import {Title} from "../common/components/Title/Title";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <Title text={'Maxim Loginov'}/>
                <div className={s.iconStyle}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>


                <div className={s.lastTitle}>Ⓒ 2023 Все права защищены</div>
            </div>

        </div>
    );
};