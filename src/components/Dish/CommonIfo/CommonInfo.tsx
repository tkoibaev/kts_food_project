import react from 'react'
import './CommonInfo.scss'
import Text from 'components/Text';



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
            <div className='common-info__image'>
                {/* <img src={image} alt="DishPic"></img> */}
            </div>
            <div className='common-info__stats'>
                <div className='common-info__stats_block'>
                    <Text weight='bold'>Preparation</Text>
                    <Text weight='bold' color='accent'>{preparation}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text weight='bold'>Cooking</Text>
                    <Text weight='bold' color='accent'>{cooking}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text weight='bold'>Total</Text>
                    <Text weight='bold' color='accent'>{preparation}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text weight='bold'>Ratings</Text>
                    <Text weight='bold' color='accent'>{ratings}</Text>
                </div>
                <div className='common-info__stats_block'>
                    <Text weight='bold'>Servings</Text>
                    <Text weight='bold' color='accent'>{servings}</Text>
                </div>
            </div>
        </div>
    )
}

export default CommonInfo