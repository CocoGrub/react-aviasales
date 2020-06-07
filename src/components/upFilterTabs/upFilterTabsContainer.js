import React from "react";
import {connect} from "react-redux";
import UpFilterTabs from "./upFilterTabs";
import {SetFilterAC} from "../../state/app-reducer";

const UpFilterTabsContainer=(props)=>{

    return <div>
        <UpFilterTabs SetFilterAC={props.SetFilterAC}/>
    </div>
}
export default connect(null,{SetFilterAC})(UpFilterTabsContainer)