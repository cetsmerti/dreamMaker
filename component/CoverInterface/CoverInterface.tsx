import { useEffect, useState } from 'react';
import { Buttom, Rate, DropDown } from '../index';
import styles from './CoverInterface.module.css'
import { todoData } from './CoverInterface.props'
import { useAppDispatch } from './../../store/Hooks/hooks'
import { addTodo, addToObjTodo, addToObjRate, addToObjList } from '../../store/todoSlice';

export const CoverInterface = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [todo, setTodo] = useState<string>('')
    const [rate, setRate] = useState<number>(-1);
    const [list, setList] = useState<string>('');
    const [errorInputn, setErrorInputn] = useState(false)

    useEffect((): void => {
        dispatch(addToObjRate(rate))
        dispatch(addToObjList(list))
        dispatch(addToObjTodo(todo))
    }, [rate, list, todo])
    const pushDataOnList = (): void => {
        if (list != '' && rate != -1 && todo != '') {
            setTodo('')
            setErrorInputn(false);
            setRate(-1)
            setList('')
            dispatch(addTodo({ todo, rate, list, id: new Date().toISOString() }))
        } else {
            setErrorInputn(true);
        }

    }

    return (
        <div className={styles.wrapper}>
            <input onChange={e => setTodo(e.target.value)} value={todo} placeholder={"Write you dream"} />
            <div className={styles.menu}>
                <Rate setRate={setRate} rate={rate} />
                <Buttom onClick={() => pushDataOnList()} size='medium'>Send</Buttom>
            </div>
            <DropDown list={list} setList={setList} />
            {errorInputn && <span className={styles.error}>Please fill in all </span>}
        </div>
    )
}