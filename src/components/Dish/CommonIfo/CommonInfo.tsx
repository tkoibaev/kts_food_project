import react from 'react'
import './CommonInfo.scss'
import Text from 'components/Text';
import { Link } from 'react-router-dom';



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
        <div className='common-info'>
            <div className='common-info__image' style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
                {/* Содержимое элемента */}
            </div>
            <div className='common-info__stats'>
                <div className='common-info__stats_block'>
                    <Text view='p-16' weight='normal'>Preparation</Text>
                    <Text weight='bold' color='accent'>{preparation}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text view='p-16' weight='normal'>Cooking</Text>
                    <Text weight='bold' color='accent'>{cooking}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text view='p-16' weight='normal'>Total</Text>
                    <Text weight='bold' color='accent'>{preparation}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text view='p-16' weight='normal'>Ratings</Text>
                    <Text weight='bold' color='accent'>{ratings}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text view='p-16' weight='normal'>Servings</Text>
                    <Text weight='bold' color='accent'>{servings}</Text>
                </div>
            </div>
        </div>
    )
}

export default CommonInfo