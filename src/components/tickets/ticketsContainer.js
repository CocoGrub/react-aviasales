import React from "react";
import {connect} from "react-redux";
import {ThunkLoadTicketsData} from '../../state/app-reducer'
import Tickets from "./tickets";
import styles from './tickets.module.css'
const TicketsContainer = (props) => {

    return <div className={styles.tickets} >
        <Tickets tickets={props.tickets}
                 ThunkLoadTicketsData={props.ThunkLoadTicketsData}
                 TicketsNoTransfer={props.TicketsNoTransfer}/>

    </div>


}

const getVisibleTickets = (tickets, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return tickets
        case 'SHOW_NO_TRANSFER':
            return tickets.filter((x) => {
                return x.segments[0].stops.length === 0 && x.segments[1].stops.length === 0
            })
        case 'SHOW_ONE_TRANSFER':
            return tickets.filter((x) => {
                return x.segments[0].stops.length + x.segments[1].stops.length === 1
            })
        case 'SHOW_TWO_TRANSFERS':
            return tickets.filter((x) => {
                return x.segments[0].stops.length + x.segments[1].stops.length === 2
            })
        case 'SHOW_THREE_TRANSFERS':
            return tickets.filter((x) => {
                return x.segments[0].stops.length + x.segments[1].stops.length === 3
            })

        case 'FASTEST':
            const x = tickets.reduce((res, x) => {
                return (x.segments[0].duration+x.segments[1].duration < res.segments[0].duration+res.segments[1].duration) ? x : res
            })
            // const y = tickets.reduce((res, x) => {
            //     return (x.segments[1].duration < res.segments[1].duration) ? x : res
            // })
            // return x.duration < y.duration? [x]:[y] //returns one way ( fastest there or back)
            return [x]//returns fastest there and back

        case 'CHEAPER':

            return [tickets.reduce((res, x) => { //returns array with one object inside
                return (x.price < res.price) ? x : res;
            })]

        default:
            return tickets
    }
}

const mapStateToProps = (state) => {


    return {
        tickets: getVisibleTickets(state.app.tickets, state.app.filter).slice(0, 5)
    }

}

export default connect(mapStateToProps, {ThunkLoadTicketsData})(TicketsContainer)