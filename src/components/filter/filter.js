import React from "react";

import styles from './filter.module.css'
const Filter = ({SetFilterAC,currentFilter}) => {


    return <div className={styles.filter}>
        <div className={styles.text}>количество пересадок</div>

        <label className={styles.checkbox}>
            <input checked={currentFilter === 'SHOW_ALL'} type={"checkbox"}  onChange={() => {
                SetFilterAC('SHOW_ALL')
            }}/><span>Все</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={currentFilter === 'SHOW_NO_TRANSFER'} type={"checkbox"} onChange={() => {
                SetFilterAC('SHOW_NO_TRANSFER')
            }}/>
            <span>Без пересадок</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={currentFilter === 'SHOW_ONE_TRANSFER'} type={"checkbox"}  onChange={() => {
                SetFilterAC('SHOW_ONE_TRANSFER')
            }}/> <span>1 пересадка</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={currentFilter === 'SHOW_TWO_TRANSFERS'} type={"checkbox"} onChange={() => {
                SetFilterAC('SHOW_TWO_TRANSFERS')
            }}/><span>2 пересадки</span>
        </label>

        <label className={styles.checkbox}>
            <input checked={currentFilter === 'SHOW_THREE_TRANSFERS'} type={"checkbox"}  onChange={() => {
                SetFilterAC('SHOW_THREE_TRANSFERS')
            }}/><span>3 пересадки</span>

        </label>

    </div>
}

export default Filter