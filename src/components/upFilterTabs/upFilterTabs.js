import React, {useState} from "react";
import {SetFilterAC} from "../../state/app-reducer";
import styles from './upFilterTabs.module.css'
const UpFilterTabs=({SetFilterAC})=>{
    const [activeElement,changeActiveElement]=useState('null')
    return <>
        <div className={styles.select1} onClick={()=>SetFilterAC('CHEAPER')}>Самый дешевый</div>
        <div className={styles.select2} onClick={()=>SetFilterAC('FASTEST')}>Самый быстрый</div>

    </>
}
export default UpFilterTabs;