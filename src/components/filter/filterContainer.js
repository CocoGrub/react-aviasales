import React from "react";
import {connect} from "react-redux";
import Filter from "./filter";
import {SetFilterAC} from "../../state/app-reducer";
const FilterModuleContainer=(props)=>{
return<>
    <Filter SetFilterAC={props.SetFilterAC}
    currentFilter={props.currentFilter}/>
</>

}
const mapStateToProps=(state)=>{
    return{
        currentFilter:state.app.filter
    }
}

export default connect(mapStateToProps, {SetFilterAC})(FilterModuleContainer);