//all done
import * as React from 'react'
import classNames  from 'classnames';

import "./text.scss"

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
};

const Text: React.FC<TextProps> = ({ className, view, tag, weight, children, color, maxLines }) => {
    let colorResult: string = ''
    if (color === 'primary') {
        colorResult = "#000"
    } else if (color === 'secondary') {
        colorResult = "#AFADB5"
    } else if (color === "accent") {
        colorResult = "#B5460F"
    }

    const classes = classNames(
        'text',
        className,
    )
    let styles = {
        color: colorResult,
        fontWeight: weight,
        WebkitLineClamp: maxLines, 
    }

    switch (tag) {
        case 'h1':
            return (
                <h1 className={classes} style={styles}>{children}</h1>
            )
        case 'h2':
            return (
                <h2 className={classes} style={styles}>{children}</h2>
            )
        case 'h3':
            return (
                <h3 className={classes} style={styles}>{children}</h3>
            )
        case 'h4':
            return (
                <h4 className={classes} style={styles}>{children}</h4>
            )
        case 'h5':
            return (
                <h5 className={classes} style={styles}>{children}</h5>
            )
        case 'h6':
            return (
                <h6 className={classes} style={styles}>{children}</h6>
            )
        case 'div':
            return (
                <div className={classes} style={styles}>{children}</div>
            )
        case 'span':
            return (
                <span className={classes} style={styles}>{children}</span>
            )
        case 'p':
            return (
                <p className={classes} style={styles}>{children}</p>
            )
        default:
            return (
                <p className={classes} style={styles}>
                    {children}
                </p>
            )
      }
}

export default Text;
