import react from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Text from 'components/Text';
import BackIcon from 'components/icons/BackIcon';

import styles from './title.module.scss';

export type DishTitleProps = {
  /** Дополнительный classname */
  className?: string;
  children: string;
};

const DishTitle: React.FC<DishTitleProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles['dish-title'], className)}>
      <Link to={`/`}>
        <BackIcon />
      </Link>
      <Text weight="bold">{children}</Text>
    </div>
  );
};

export default DishTitle;
