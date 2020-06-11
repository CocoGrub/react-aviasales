import React, {useEffect, useState} from "react";
import Ticket from "./ticket/ticket";

const Tickets = (props) => {
    const [x, setX] = useState(1)
    useEffect(() => {
        props.ThunkLoadTicketsData()
    }, [x])
    return <div>
        {props.tickets.map((x, k) => {
            return <div key={k} style={{marginTop: ` 20px`}}>
                <Ticket ticket={x}/>
            </div>

        })}
    </div>

}
export default Tickets