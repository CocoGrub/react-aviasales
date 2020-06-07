import React from "react";
import style from './mainPage.module.css'
import TicketsContainer from '../components/tickets/ticketsContainer'
import FilterModuleContainer from "../components/filter/filterContainer";
const Main=()=>{
    return<div className={style.mainPage} >
        <TicketsContainer/>
        <FilterModuleContainer/>

    </div>

}

export default Main;