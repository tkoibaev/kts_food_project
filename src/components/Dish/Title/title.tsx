import react from 'react'

import Text from 'components/Text';
import ArrowDownIcon from 'components/icons/ArrowDownIcon';

import './title.scss'

export type dishTitleProps = {
    /** Дополнительный classname */
    className?: string,
    children:string,
    // title?: React.ReactNode;
};

const DishTitle: React.FC<dishTitleProps> = ({children}) => {

    return(
        <div className='dish-title'>
            <ArrowDownIcon style={{transform:'rotate(90deg)'}} />
            <Text view='title' weight='bold' tag='h2'>{children}</Text>
        </div>
    )
}

export default DishTitle