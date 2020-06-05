import React, {useEffect} from "react";

const Tickets=(props)=>{
    useEffect(()=>{
        props.ThunkLoadTicketsData()
    },[])
    return <>
        {props.tickets.map((x,k)=>{
            return <div key={k}>
                component {k}
            </div>

        })}
        </>

}
export default Tickets