import React from "react";
import style from './ticket.module.css'

const Ticket = ({ticket}) => {
    const {price, carrier, segments} = ticket;
    const currData = Date.parse(segments[1].date)
    console.log(new Date(currData))
    const durationHM=(minutes)=> {
        const hours = Math.trunc(minutes/60);
        const min = minutes % 60;
        return hours + 'ч: ' + min + 'м';
    }
return <div className={style.ticketMain}>
            <div className={style.header}>
                <div className={style.price}>{price} Р
                </div>
                <div className={style.logo}>{carrier}</div>
            </div>

            <div className={style.infoBlock1}>
                <div className={style.routeDestination}>{segments[0].origin} – {segments[0].destination}HKT </div>
                <div className={style.routeDestination}>В пути</div>
                <div className={style.routeDestination}>Пересадка</div>
            </div>
            <div className={style.infoBlock2}>
                <div className={style.routeTime}>{segments[0].date.substring(11, 16)}</div>
                <div className={style.routeTime}>{durationHM(segments[0].duration)}</div>
                <div className={style.routeTime}>{segments[0].stops}</div>
            </div>
            <div className={style.infoBlock3}>
                <div className={style.routeDestination}>{segments[1].origin} – {segments[1].destination}</div>
                <div className={style.routeDestination}>В пути</div>
                <div className={style.routeDestination}>Пересадка</div>
            </div>
            <div className={style.infoBlock4}>
                <div className={style.routeTime}>{segments[1].date.substring(11, 16)}</div>
                <div className={style.routeTime}>{durationHM(segments[1].duration)}</div>
                <div className={style.routeTime}>{segments[1].stops}</div>
            </div>
        </div>


}
export default Ticket