import React, {useState} from "react";
import {SetFilterAC} from "../../state/app-reducer";
import styles from './upFilterTabs.module.css'
import {connect} from "react-redux";
import classNames from 'classnames'
const UpFilterTabs=({SetFilterAC,currentFilter})=>{
    const tab1 = classNames(
        styles.select1,{
           [styles.selected]: currentFilter === `CHEAPER`
        }

    );

    const tab2 = classNames(
        styles.select2,{
            [styles.selected]: currentFilter === `FASTEST`
        }

    );


    return <>
        <div className={tab1} onClick={()=>SetFilterAC('CHEAPER')}>Самый дешевый</div>
        <div className={tab2} onClick={()=>SetFilterAC('FASTEST')}>Самый быстрый</div>

    </>
}
const mapStateToProps=(state)=>{
    return{
        currentFilter:state.app.filter
    }
}

export default connect(mapStateToProps,{})( UpFilterTabs);