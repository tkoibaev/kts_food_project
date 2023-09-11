import React from 'react';
import classNames from 'classnames';


import Text from 'components/Text';
import LogoIcon from 'components/icons/LogoIcon';
import LikedIcon from 'components/icons/LikedIcon';
import UserIcon from 'components/icons/UserIcon';

import styles from './header.module.scss';

export type HeaderProps = {
  className?: string;
  navElements: string[];
};

const Header: React.FC<HeaderProps> = ({ navElements }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__logo}>
          <LogoIcon />
          <div className={styles.header_logo_name}>
            <Text view="p-20" weight="bold">
              Food Client
            </Text>
          </div>
        </div>
        <div className={styles.header__navigation}>
          {navElements.map((item) => (
            <Text weight="normal" className={styles.header__navigation_element}>
              {item}
            </Text>
          ))}
        </div>
        <div className={styles['header__user-menu']}>
          <LikedIcon />
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
