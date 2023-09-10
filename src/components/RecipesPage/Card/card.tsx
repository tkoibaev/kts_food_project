import React, { useState } from 'react';
import classNames from 'classnames';

import Text from 'components/Text';

import styles from './card.module.scss'

 
export type CardProps = {
    /** Дополнительный classname */
    className?: string,
    /** URL изображения */
    image: string;
    /** Слот над заголовком */
    captionSlot?: React.ReactNode;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Описание карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    contentSlot?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    /** Слот для действия */
    actionSlot?: React.ReactNode;
};
 
 
const Card: React.FC<CardProps> = ({className, image, captionSlot, title, subtitle, contentSlot, onClick, actionSlot}) => {
    let isCaptionSlotVisible = true
    if (captionSlot === -1) {
        captionSlot='No'
    }
    return (
        <div className={classNames(styles['card'],className)} onClick={onClick}>
            <img className={styles.card_image} src={image} alt="card image" />
            <div className={styles.card_container}>
               {isCaptionSlotVisible && <div className={styles.card_caption}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.1818 1L13 2.81818M10.8182 10.8182L12.2727 13M2.81818 1L1 2.81818M3.18182 10.8182L1.72727 13M6.81818 3.90909V7.18182H8.63636M12.2727 7C12.2727 9.91207 9.91207 12.2727 7 12.2727C4.08795 12.2727 1.72727 9.91207 1.72727 7C1.72727 4.08796 4.08795 1.72727 7 1.72727C9.91207 1.72727 12.2727 4.08796 12.2727 7Z" stroke="#B5460F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {captionSlot && `${captionSlot} minutes` }
                </div>}
                <Text view='p-20' weight='medium' className={styles.card_title} tag='h3' maxLines={1}>{title}</Text>
                <Text className={styles.card_subtitle} weight='normal' view='p-16' maxLines={1}>{subtitle}</Text>
                <div className={styles.footer_container}>
                    <div className={styles.card_content}>{contentSlot && contentSlot}</div>
                    <div className={styles.card_action}>{actionSlot && actionSlot }</div>
                </div>
            </div>
 
        </div>
    )
};
 
export default Card;
