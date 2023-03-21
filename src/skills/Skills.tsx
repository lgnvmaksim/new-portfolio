import React from 'react';
import s from './Skills.module.css'
import sc from '../common/styles/container.module.css'
import {SkillOnly} from "./skillOnly/SkillOnly";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sc.container} ${s.skillsContainer} `}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <SkillOnly title={'HTML'} description={'стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'}/>
                    <SkillOnly title={'JS'} description={'мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили'}/>
                    <SkillOnly title={'CSS'} description={'формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Также может применяться к любым XML-документам, например, к SVG или XUL'}/>
                </div>
            </div>
        </div>
    );
};