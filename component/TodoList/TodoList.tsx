import React, { useState } from 'react'
import { Buttom } from '../Buttom/Buttom'
import styles from './TodoList.module.css'
import { Ul } from './../Ul/Ul'
import { filterTodos, filterTodosPunkts } from './../../store/todoSlice'
import { useAppDispatch } from '../../store/Hooks/hooks'
export const TodoList = (): JSX.Element => {
    const reducer = useAppDispatch()
    const [boolFilter, setBoolFilter] = useState<boolean>(false)
    const filterFunction = (func: Function) => {
        reducer(func(boolFilter))
        setBoolFilter(!boolFilter)
    }


    return (
        <div className={styles.wraper}>
            <div className={styles.buttonArea}>
                <Buttom onClick={() => filterFunction(filterTodos)} size='sort'>Sort by rating</Buttom>
                <Buttom onClick={() => filterFunction(filterTodosPunkts)} size='sort'>Sort by list</Buttom>
            </div>
            <Ul />
        </div>
    )
}