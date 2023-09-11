import React, { useState } from 'react';
import classNames from 'classnames';

import Text from 'components/Text';
import TimerIcon from 'components/icons/TimerIcon';

import styles from './card.module.scss';

export type CardProps = {
  /** Дополнительный classname */
  className?: string;
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

const Card: React.FC<CardProps> = ({
  className,
  image,
  captionSlot,
  title,
  subtitle,
  contentSlot,
  onClick,
  actionSlot,
}) => {
  let isCaptionSlotVisible = true;
  if (captionSlot === -1) {
    captionSlot = 'No';
  }
  return (
    <div className={classNames(styles['card'], className)} onClick={onClick}>
      <img className={styles.card_image} src={image} alt="card image" />
      <div className={styles.card_container}>
        {isCaptionSlotVisible && (
          <div className={styles.card_caption}>
            <TimerIcon />
            {captionSlot && <Text>{`${captionSlot} minutes`}</Text>}
          </div>
        )}
        <Text view="p-20" weight="medium" className={styles.card_title} tag="h3" maxLines={1}>
          {title}
        </Text>
        <Text className={styles.card_subtitle} weight="normal" view="p-16" maxLines={1}>
          {subtitle}
        </Text>
        <div className={styles.footer_container}>
          <div className={styles.card_content}>{contentSlot && <Text weight='bold'>{contentSlot}</Text>}</div>
          <div className={styles.card_action}>{actionSlot && actionSlot}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
