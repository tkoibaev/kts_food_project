import react from 'react'
import classNames  from 'classnames';

import Text from 'components/Text';
import ArrowDownIcon from 'components/icons/ArrowDownIcon';

import './title.scss'

export type dishTitleProps = {
    /** Дополнительный classname */
    className?: string,
    children:string,
    // title?: React.ReactNode;
};

const DishTitle: React.FC<dishTitleProps> = ({children,className}) => {

    return(
        <div className={classNames('dish-title', className)}>
            {/* <ArrowDownIcon width={40} style={{transform:'rotate(90deg)'}} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M20.1201 26.56L11.4268 17.8667C10.4001 16.84 10.4001 15.16 11.4268 14.1333L20.1201 5.44" stroke="#B5460F" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <Text weight='bold'>{children}</Text>
        </div>
    )
}

export default DishTitle