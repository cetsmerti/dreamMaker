import React, { useState } from 'react'
import DropDownProps from './DropDown.props';
import styles from './DropDown.module.css'
export const DropDown = ({ list, setList }: DropDownProps): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const lists = ['Dream of childhood', 'Dream teenage', 'Dream of a lifetime', "Dream to which I fulfill"];
    const toogle = () => setOpen(!open);

    const selectList = (e: string) => {
        setList(e)
    }
    return (
        <div className={styles.wraper}>
            <div
                tabIndex={0}
                className={styles.header}
                role='button'
                onClick={() => toogle()}
            >
                <div>
                    {list.length > 2 ? list :
                        !open && 'Select from the list'}
                </div>
                {open && <ul className={styles.list}>
                    {lists.map((item, i) => (
                        <li className={styles.itemList} key={i}>
                            <button
                                className={styles.buttonList}
                                onClick={() => selectList(item)}
                                type='button'><span>{item}</span></button>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}