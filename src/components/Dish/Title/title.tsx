import react from 'react'

import Text from 'components/Text';
import ArrowDownIcon from 'components/icons/ArrowDownIcon';

import './title.scss'

export type dishTitleProps = {
    /** Дополнительный classname */
    className?: string,
    title?: React.ReactNode;
};

const DishTitle: React.FC<dishTitleProps> = ({title}) => {

    return(
        <div className='dish-title'>
            <ArrowDownIcon style={{transform:'rotate(90)'}} />
            <Text>{title}</Text>
        </div>
    )
}

export default DishTitle