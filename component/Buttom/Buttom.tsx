import React from 'react'
import { ButtomProps, ButtomColor } from './Buttom.props';
import styles from './Buttom.module.css'
export const Buttom = ({ size, children, ...props }: ButtomProps): JSX.Element => {

    let colorButtom: ButtomColor = '';
    switch (size) {
        case 'medium':
            colorButtom = styles.medium
            break;
        case 'sort':
            colorButtom = styles.sort
            break
        case 'dell':
            colorButtom = styles.dell
            break
        default:
            break;
    }


    return (
        <button {...props} className={colorButtom}>{children}</button>
    )
}