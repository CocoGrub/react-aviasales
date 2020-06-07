import React from "react";
import {SetFilterAC} from "../../state/app-reducer";
import styles from './upFilterTabs.module.css'
const UpFilterTabs=({SetFilterAC})=>{
    return <div className={styles.tabs} >
        <div onClick={()=>SetFilterAC('FASTEST')}>Самый быстрый</div>
        <div onClick={()=>SetFilterAC('CHEAPER')}>Самый дешевый</div>
    </div>
}
export default UpFilterTabs;