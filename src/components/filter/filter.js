import React, {useState} from "react";
import {SetFilterAC} from "../../state/app-reducer";
import styles from './filter.module.css'
const Filter = ({SetFilterAC}) => {
    const [toggleSearch, changeToggleSearch] = useState(null)

    const checkedState = (x) => {
        changeToggleSearch(x)
        SetFilterAC(x)
    }

    return <div className={styles.filter}>
        <div className={styles.text}>количество пересадок</div>

        <label className={styles.checkbox}>
            <input checked={toggleSearch === 'SHOW_ALL'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_ALL')
            }} onChange={() => {
                SetFilterAC('SHOW_ALL')
            }}/><span>Все</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={toggleSearch === 'SHOW_NO_TRANSFER'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_NO_TRANSFER')
            }} onChange={() => {
                SetFilterAC('SHOW_NO_TRANSFER')
            }}/>
            <span>Без пересадок</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={toggleSearch === 'SHOW_ONE_TRANSFER'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_ONE_TRANSFER')
            }} onChange={() => {
                SetFilterAC('SHOW_ONE_TRANSFER')
            }}/> <span>1 пересадка</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={toggleSearch === 'SHOW_TWO_TRANSFERS'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_TWO_TRANSFERS')
            }} onChange={() => {
                SetFilterAC('SHOW_TWO_TRANSFERS')
            }}/><span>2 пересадки</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={toggleSearch === 'SHOW_THREE_TRANSFERS'} type={"checkbox"} onClick={() => {
                changeToggleSearch('SHOW_THREE_TRANSFERS')
            }} onChange={() => {
                SetFilterAC('SHOW_THREE_TRANSFERS')
            }}/><span>3 пересадки</span>

        </label>

    </div>
}

export default Filter