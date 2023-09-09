import React from 'react';
import classNames  from 'classnames';
import Text from 'components/Text';
import { Link } from 'react-router-dom';
// import './header.module.scss'

export type HeaderProps = {
    className?: string;
    navElements: string[];
}

import styles from './header.module.scss'

const Header:React.FC<HeaderProps> = ({navElements}) => {
return(
    <div className={styles.header}>
        <div className={styles.header__inner}>
            <div className={styles.header__logo}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="logo-simple-framed-green-gradient 1" clip-path="url(#clip0_508_1449)">
                <g id="Group">
                <path id="Vector" d="M17.8585 0.506165C27.5209 0.506165 35.352 8.33833 35.352 18C35.352 27.6628 27.5209 35.4938 17.8585 35.4938C8.19684 35.4938 0.364685 27.6628 0.364685 18C0.364685 8.33833 8.19684 0.506165 17.8585 0.506165Z" fill="white"/>
                <path id="Vector_2" d="M17.7689 33.4343C26.4389 33.4343 33.4674 26.4058 33.4674 17.7358C33.4674 9.0657 26.4389 2.03723 17.7689 2.03723C9.09884 2.03723 2.07037 9.0657 2.07037 17.7358C2.07037 26.4058 9.09884 33.4343 17.7689 33.4343Z" fill="url(#paint0_linear_508_1449)"/>
                <g id="Group_2">
                <path id="Vector_3" d="M18.1897 30.3613C16.3901 28.1578 15.4422 27.0086 15.3479 26.915C14.9918 26.4884 14.3878 25.8966 13.5356 25.1388C13.9144 23.1008 14.4119 21.5143 15.0282 20.3767C15.2647 19.9739 16.2479 18.6473 17.9773 16.3969C18.9252 18.3629 20.2046 19.6895 21.8149 20.3767C22.1695 20.5189 23.6977 20.839 26.3974 21.3368C28.3882 21.7382 29.9876 22.4852 31.1947 23.5753C32.9004 25.114 34.3804 27.6728 35.6357 31.2494C30.5431 28.3831 26.9068 27.3769 24.7284 28.2294C23.7092 28.8457 22.8326 29.331 22.099 29.6863C20.9858 30.2544 19.6826 30.4798 18.1897 30.3613Z" fill="white"/>
                <path id="Vector_4" d="M18.7585 12.5953C18.5451 13.9457 18.0839 15.0477 17.3729 15.8998C16.9697 16.3973 16.1881 17.0845 15.0275 17.9608C12.7055 19.6657 11.0243 21.8689 9.9821 24.5693C8.96366 27.1278 8.70302 29.722 9.2009 32.3518L8.45498 32.4216C7.88582 29.7699 8.12342 27.1516 9.16526 24.5697C10.2312 21.8218 12.0316 19.5232 14.566 17.6767C15.9639 16.6342 16.8761 15.2485 17.3023 13.5198C17.6339 12.0989 17.5979 10.5466 17.1954 8.86466C16.888 7.41962 16.3779 6.34178 15.6683 5.6315C14.9807 4.94462 14.2938 4.69622 13.6066 4.88558C11.9959 5.31182 11.3796 7.34942 11.7594 10.9969C12.1147 14.4555 12.7782 16.6349 13.7488 17.5345C12.7779 17.6062 11.9373 16.2796 11.2263 13.5551C10.539 10.8547 10.444 8.50934 10.9415 6.51998C11.155 5.5253 11.6169 4.77902 12.3271 4.2815C13.4169 3.52334 14.6844 3.61838 16.1298 4.56554C17.077 5.18186 17.7757 6.1409 18.225 7.44374C18.7704 8.86466 18.949 10.5822 18.7585 12.5953ZM11.8656 32.6041C10.5156 26.532 11.4275 22.149 14.602 19.4523C12.4463 24.1395 11.8779 28.5473 12.8963 32.6769L11.8656 32.6041Z" fill="white"/>
                </g>
                </g>
                </g>
                <defs>
                <linearGradient id="paint0_linear_508_1449" x1="15.0425" y1="2.27336" x2="20.4954" y2="33.1986" gradientUnits="userSpaceOnUse">
                <stop stop-color="#B5460F"/>
                <stop offset="1" stop-color="#B5460F"/>
                </linearGradient>
                <clipPath id="clip0_508_1449">
                <rect width="36" height="36" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <div className={styles.header_logo_name}>
                    <Text view='p-20' weight='bold'>
                        Food Client
                    </Text>
                </div>
            </div>
            <div className={styles.header__navigation}>
                {navElements.map((item)=>(
                    <Text weight='normal' className={styles.header__navigation_element}>
                        {item}
                    </Text>
                ))}
            </div>
            <div className={styles['header__user-menu']}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M9.50001 3.09586C7.80057 0.863387 4.96079 0.173456 2.8315 2.21773C0.702197 4.26201 0.402421 7.67991 2.07457 10.0977C3.46485 12.1079 7.67232 16.3476 9.0513 17.7199C9.20553 17.8734 9.28269 17.9501 9.3727 17.9803C9.45118 18.0066 9.53712 18.0066 9.6157 17.9803C9.70571 17.9501 9.78277 17.8734 9.9371 17.7199C11.3161 16.3476 15.5235 12.1079 16.9138 10.0977C18.5859 7.67991 18.3227 4.2405 16.1568 2.21773C13.9909 0.194961 11.1994 0.863387 9.50001 3.09586Z" stroke="#B5460F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="user-3-svgrepo-com 1" clip-path="url(#clip0_505_651)">
                    <g id="&#233;&#161;&#181;&#233;&#157;&#162;-1">
                    <g id="User">
                    <g id="user_3_line">
                    <path id="&#229;&#189;&#162;&#231;&#138;&#182;" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C14.3955 13 16.5753 13.6937 18.1777 14.6715C18.9786 15.1602 19.6621 15.7363 20.156 16.3615C20.642 16.9767 21 17.713 21 18.5C21 19.3449 20.5889 20.0111 19.9973 20.4859C19.4368 20.9359 18.6982 21.2336 17.9128 21.4416C16.3353 21.8593 14.229 22 12 22C9.77101 22 7.66466 21.8593 6.08716 21.4416C5.30182 21.2336 4.56324 20.9359 4.00266 20.4859C3.41114 20.0111 3 19.3449 3 18.5C3 17.713 3.35805 16.9767 3.84397 16.3615C4.33788 15.7363 5.02143 15.1602 5.82227 14.6715C7.42467 13.6937 9.60453 13 12 13ZM12 15C9.97719 15 8.15705 15.5898 6.86402 16.3788C6.21714 16.7735 5.72913 17.2015 5.41339 17.6013C5.08967 18.0111 5 18.3206 5 18.5C5 18.6216 5.03657 18.7512 5.2547 18.9263C5.50376 19.1262 5.93676 19.3328 6.59914 19.5082C7.91706 19.8572 9.81071 20 12 20C14.1893 20 16.0829 19.8572 17.4009 19.5082C18.0632 19.3328 18.4962 19.1262 18.7453 18.9263C18.9634 18.7512 19 18.6216 19 18.5C19 18.3206 18.9103 18.0111 18.5866 17.6013C18.2709 17.2015 17.7829 16.7735 17.136 16.3788C15.8429 15.5898 14.0228 15 12 15ZM12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2ZM12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4Z" fill="#B5460F"/>
                    </g>
                    </g>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_505_651">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            </div>
        </div>
    </div>
        
    )
}

export default Header