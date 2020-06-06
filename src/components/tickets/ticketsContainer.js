import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ThunkLoadTicketsData} from '../../state/app-reducer'
import Tickets from "./tickets";

const TicketsContainer =(props)=>{

        return <>
            <Tickets tickets={props.tickets}
                     ThunkLoadTicketsData={props.ThunkLoadTicketsData}/>
        </>


}

const mapStateToProps = (state) => {
    return {
        tickets: state.app.tickets
    }

}

export default connect(mapStateToProps, {ThunkLoadTicketsData})(TicketsContainer)