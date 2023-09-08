import react from 'react'

import Text from 'components/Text';

import './description.scss'


export type dishDescriptionProps = {
    /** Дополнительный classname */
    className?: string,
    children:React.ReactNode,
    // title?: React.ReactNode;
};

const DishDescription:React.FC<dishDescriptionProps> = ({children}) =>{
    return(
        <div className='dish-description'>
            <Text>{children}</Text>
        </div>
    )
}

export default DishDescription


