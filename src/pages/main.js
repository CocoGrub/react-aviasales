import React from "react";
import style from './mainPage.module.css'
import TicketsContainer from '../components/tickets/ticketsContainer'
import FilterModuleContainer from "../components/filter/filterContainer";
import UpFilterTabsContainer from "../components/upFilterTabs/upFilterTabsContainer";
import Logo from "../components/logo/logo";

const Main = () => {
    return <div className={style.mainPage}>
        <Logo/>
        <TicketsContainer/>
        <FilterModuleContainer/>
        <UpFilterTabsContainer/>

    </div>

}

export default Main;