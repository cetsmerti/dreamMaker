import React, { useState } from 'react'
import styles from './Ul.module.css';
import star from './star.svg';
import selectStar from './activeStar.svg';
import { todoData } from '../CoverInterface/CoverInterface.props'
import { Buttom } from '../Buttom/Buttom';
import { dellTodos } from './../../store/todoSlice';
import { useAppDispatch, useAppSelector } from '../../store/Hooks/hooks'
import type { TObjonPush } from '../../store/todoSlice'
export const Ul = ({ ...props }): JSX.Element => {
    const { todos, objonPush } = useAppSelector(state => state.todos);
    const dispatch = useAppDispatch()
    const showStar = (rate: number) => {

        return Array(5).fill(<></>).map((el, i) => {
            const starStyle = rate < i ? star : selectStar
            return (
                <img key={i} src={starStyle} />
            )
        })
    }
    const dellItem = (id: string) => {
        dispatch(dellTodos(id))
    }

    const showObj = (object: TObjonPush): JSX.Element => {
        const { list, todo, rate } = object
        return (
            <li key={123} className={styles.list}>
                <div className={styles.infoList}>
                    <span >{todo.length < 30 ? todo : todo.slice(0, 30) + '...'}</span>
                    <span className={styles.star}>{showStar(rate)}</span>
                </div>
                <div>
                    <span> {list}</span>
                </div>
            </li>
        )
    }
    const showMassLi = (data: TObjonPush[]) => {
        return data.map((item: TObjonPush) => {
            const { list, todo, rate, id } = item
            return (
                <li className={styles.list} key={id}>

                    <div className={styles.infoList}>
                        <span >{todo}</span>
                        <span>{showStar(rate)}</span>
                    </div>
                    <Buttom onClick={() => dellItem(id ? id : 'as')} size='dell'>x</Buttom>
                    <div>
                        <span> {list}</span>
                    </div>

                </li>
            )
        })
    }
    return (
        <ul className={styles.ul} {...props}>
            <>
                {showObj(objonPush)}
                {showMassLi(todos)}
            </>
        </ul>
    )

}