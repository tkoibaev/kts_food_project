import react from 'react'
import { Link } from 'react-router-dom';

import Text from 'components/Text';

import styles from './CommonInfo.module.scss'

export type CommonInfoProps = {
    /** Дополнительный classname */
    className?: string,
    /** URL изображения */
    image: string;
    /** Слот над заголовком */
    preparation: React.ReactNode;
    /** Заголовок карточки */
    cooking: React.ReactNode;
    /** Описание карточки */
    total?: React.ReactNode;
    ratings: React.ReactNode;
    servings: React.ReactNode;
    // /** Содержимое карточки (футер/боковая часть), может быть пустым */
    // contentSlot?: React.ReactNode;
    // /** Клик на карточку */
    // onClick?: React.MouseEventHandler;
    // /** Слот для действия */
    // actionSlot?: React.ReactNode;
};

const CommonInfo: React.FC<CommonInfoProps> = ({className, image, preparation, cooking, total, ratings, servings}) => {

    return(
        <div className={styles['common-info']}>
            <div className={styles['common-info__image']} style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
                {/* Содержимое элемента */}
            </div>
            <div className={styles['common-info__stats']}>
                {/* Во многих записях время подготовки и готовки равняются -1, поэтому при таких значения эти блоки не отображаются */}
                {preparation !== -1 && (
                <div className={styles['common-info__stats_block']}>
                    <Text view='p-16' weight='normal'>Preparation</Text>
                    <Text weight='bold' color='accent'>{preparation}</Text>
                </div>
                )}
                {cooking !== -1 && (
                <div className={styles['common-info__stats_block']}>
                    <Text view='p-16' weight='normal'>Cooking</Text>
                    <Text weight='bold' color='accent'>{cooking}</Text>
                </div>
                )}
                <div className={styles['common-info__stats_block']}>
                    <Text view='p-16' weight='normal'>Total Time</Text>
                    <Text weight='bold' color='accent'>{total}</Text>
                </div>
                <div className={styles['common-info__stats_block']}>
                    <Text view='p-16' weight='normal'>Ratings</Text>
                    <Text weight='bold' color='accent'>{ratings}</Text>
                </div>
                <div className={styles['common-info__stats_block']}>
                    <Text view='p-16' weight='normal'>Servings</Text>
                    <Text weight='bold' color='accent'>{servings}</Text>
                </div>
            </div>
        </div>
    )
}

export default CommonInfo