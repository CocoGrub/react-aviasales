import React from "react";
import style from './mainPage.module.css'
import TicketsContainer from '../components/tickets/ticketsContainer'
import FilterModuleContainer from "../components/filter/filterContainer";
import UpFilterTabsContainer from "../components/upFilterTabs/upFilterTabsContainer";
const Main=()=>{
    return<div className={style.mainPage} >
        <TicketsContainer/>
        <FilterModuleContainer/>
        <UpFilterTabsContainer/>

    </div>

}

export default Main;