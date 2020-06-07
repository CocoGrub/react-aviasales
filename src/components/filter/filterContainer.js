import React from "react";
import {connect} from "react-redux";
import Filter from "./filter";
import {SetFilterAC} from "../../state/app-reducer";
const FilterModuleContainer=(props)=>{
return<div>
    <Filter SetFilterAC={props.SetFilterAC}/>
</div>


}


export default connect(null, {SetFilterAC})(FilterModuleContainer);