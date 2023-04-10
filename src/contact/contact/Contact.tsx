import React from 'react';
import s from './Contact.module.scss'
import sc from '../../common/styles/container.module.scss'
import {Title} from "../../common/components/Title/Title";

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sc.container}  ${s.contactContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.textContacts}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.input}></textarea>
                    <button type={'submit'} className={s.link}>Send</button>
                </form>


            </div>
        </div>
    );
};