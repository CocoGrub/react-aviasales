import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ThunkLoadTicketsData} from '../../state/app-reducer'
import Tickets from "./tickets";

const TicketsContainer =(props)=>{

        return <>
            <Tickets tickets={props.tickets}
                     ThunkLoadTicketsData={props.ThunkLoadTicketsData}
                     TicketsNoTransfer={props.TicketsNoTransfer}/>

        </>


}

const getVisibleTickets = (tickets, filter) => {
    console.log(filter)
    switch (filter) {
        case 'SHOW_ALL':
            return tickets
        case 'SHOW_NO_TRANSFER':
            return tickets.filter((x)=>{
                return x.segments[0].stops.length===0 && x.segments[1].stops.length===0
            })
        case 'SHOW_ONE_TRANSFER':return tickets.filter((x)=>{
            return x.segments[0].stops.length + x.segments[1].stops.length ===1
        })
        case 'SHOW_TWO_TRANSFERS':return tickets.filter((x)=>{
            return x.segments[0].stops.length + x.segments[1].stops.length ===2
        })
        case 'SHOW_THREE_TRANSFERS':return tickets.filter((x)=>{
            return x.segments[0].stops.length + x.segments[1].stops.length ===3
        })

        // case 'SHOW_ACTIVE':
        //     return todos.filter(t => !t.completed)
        default:return tickets
    }
}

const mapStateToProps = (state) => {


    return {
        tickets: getVisibleTickets(state.app.tickets,state.app.filter)
    }

}

export default connect(mapStateToProps, {ThunkLoadTicketsData})(TicketsContainer)