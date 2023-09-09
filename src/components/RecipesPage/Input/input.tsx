import React from 'react';
import {useState} from 'react'
import cn from 'classnames'
import styles from './input.module.scss'

import Button from 'components/Button';
 
export type InputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
> & {
    /** Значение поля */
    value: string;
    // placeholder?: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
    /** Слот для иконки справа */
    afterSlot?: React.ReactNode;
    // disabled?: Boolean;
    // className?: string;
};
 
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ value, onChange, afterSlot, disabled, className, ...props }, ref) => {
    const [inputValue, setInputValue] = useState<string | undefined>(undefined);

    // const changeHandler = React.useCallback(
    //     (e: React.ChangeEvent<HTMLInputElement>) => {
    //         onChange(e.target.value)
    //     },
    //     [onChange]
    // )
 
    return (
        <label
            className={cn(
                styles['input-wrapper'],
                disabled && styles['input-wrapper_disabled'],
                className
            )}
        >
            <input
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                className={styles.input}
                ref={ref}
                disabled={disabled}
                type="text"
                {...props}
            />
            {!!afterSlot && <div className={styles['input-after']}>{afterSlot}</div>}
        </label>
    )
});
 
export default Input;