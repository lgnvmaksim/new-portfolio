import React from 'react';
import s from './Contact.module.css'
import sc from './../../common/styles/container.module.css'

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sc.container}  ${s.contactContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <form className={s.textContacts}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.input}></textarea>
                    <button type={'submit'} className={s.link}>Отправить</button>
                </form>


            </div>
        </div>
    );
};