import React from "react";
import {connect} from "react-redux";
import UpFilterTabs from "./upFilterTabs";
import {SetFilterAC} from "../../state/app-reducer";

const UpFilterTabsContainer=(props)=>{

    return <>
        <UpFilterTabs SetFilterAC={props.SetFilterAC}/>
    </>
}
export default connect(null,{SetFilterAC})(UpFilterTabsContainer)