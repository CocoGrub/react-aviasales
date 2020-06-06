import React, {useEffect} from "react";
import Ticket from "../ticket/ticket";

const Tickets=(props)=>{
    useEffect(()=>{
        props.ThunkLoadTicketsData()
    },[])
    return <>
        {props.tickets.map((x,k)=>{
            return<div key={k} style={{marginTop: ` 20px`}}>
            <Ticket   ticket={x}>

            </Ticket>
            </div>

        })}
        </>

}
export default Tickets