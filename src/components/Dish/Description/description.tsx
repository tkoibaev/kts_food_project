import react, { Fragment, Children } from 'react'

import Text from 'components/Text';

import styles from './description.module.scss'


export type dishDescriptionProps = {
    /** Дополнительный classname */
    className?: string,
    children:React.ReactNode,
    // title?: React.ReactNode;
};

const DishDescription: React.FC<dishDescriptionProps> = ({ children }) => {
    return (
      <div className={styles['dish-description']}>
        <Text>
          {Children.map(children, (child) => (
            <Fragment>{child}</Fragment>
          ))}
        </Text>
      </div>
    );
  };

export default DishDescription


