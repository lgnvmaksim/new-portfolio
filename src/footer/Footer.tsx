import React from 'react';
import s from './Footer.module.css'
import sc from '../common/styles/container.module.scss'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sc.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Maxim Loginov</h2>
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