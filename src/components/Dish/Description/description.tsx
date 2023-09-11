import React, { Fragment, Children } from 'react';

import Text from 'components/Text';

import styles from './description.module.scss';

export type DishDescriptionProps = {
  /** Дополнительный classname */
  className?: string;
  children: React.ReactNode;
};

const DishDescription: React.FC<DishDescriptionProps> = ({ children }) => {
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

export default React.memo(DishDescription);
