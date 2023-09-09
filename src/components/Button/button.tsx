//all except one technical test
import React from 'react';
import classNames  from 'classnames';
import Loader from 'components/Loader';
import Text from 'components/Text';
// import './button.scss'

import styles from './button.module.scss'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
  state?: boolean
};

const Button: React.FC<ButtonProps> = ({children, onClick, className, disabled, state, loading,  ...rest }) => {
  
  const classes = classNames(
    styles['btn'],
    className,
    {
      loading: loading,
      disableStatus: disabled
    }
  )
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (loading||disabled) {
      event.preventDefault();
      return;
    }
    if (onClick) {
      onClick(event);
    }
  };
  return(
    <button className={classes} disabled={loading||disabled} onClick={handleClick} {...rest}>
      {loading ? <Loader className={styles['button-loader']} size="s"/> : <></>}
      <Text className={styles['button-text']}>{children}</Text>
    </button>
  )
};

export default Button;
