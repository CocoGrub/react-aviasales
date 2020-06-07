import React from "react";
import style from './ticket.module.css'

const Ticket = ({ticket}) => {
    const {price, carrier, segments} = ticket;
    const landingTime=(x)=>{
        const currData = Date.parse(x.date)
        const duration = x.duration
        const landing=currData+(duration/60/1000)
        const hours = (new Date(landing)).getHours()
        const minutes =  (new Date(landing)).getMinutes()

        return {
            hours,minutes
        }

    }



    const durationHM=(minutes)=> {
        const hours = Math.trunc(minutes/60);
        const min = minutes % 60;
        return hours + 'ч ' + min + 'м';
    }
    const transferCount=(x)=>{
        if(x.length<=0){
            return 'пересадок нет'
        }else if(x.length===1){
            return '1 пересадка'
        }else if(x.length===2){
            return '2 пересадки '
        }else {
            return '3 пересадки'
        }
    }
    const image = `http://pics.avs.io/99/36/${carrier}.png`
return <div className={style.ticketMain}>
            <div className={style.header}>
                <div className={style.price}>{price.toString().slice(0, 2) + " " +price.toString().slice(2)} Р
                </div>
                {/*<div className={style.logo} style={{background:`url(${image})`,backgroundRepeat:'no-repeat;'}}></div>*/}
                <img src={image}  className={style.logo} ></img>
            </div>

            <div className={style.infoBlock1}>
                <div className={style.routeDestination}>{segments[0].origin} – {segments[0].destination} </div>
                <div className={style.routeDestination}>В пути</div>
                <div className={style.routeDestination}>{transferCount(segments[0].stops)}</div>
            </div>
            <div className={style.infoBlock2}>
                <div className={style.routeTime}>{segments[0].date.substring(11, 16)} - {landingTime(segments[0]).hours}:{landingTime(segments[0]).minutes}</div>
                <div className={style.routeTime}>{durationHM(segments[0].duration)}</div>
                <div className={style.routeTime}>{segments[0].stops.join()}</div>
            </div>
            <div className={style.infoBlock3}>
                <div className={style.routeDestination}>{segments[1].origin} – {segments[1].destination}</div>
                <div className={style.routeDestination}>В пути</div>
                <div className={style.routeDestination}>{transferCount(segments[1].stops)}</div>
            </div>
            <div className={style.infoBlock4}>
                <div className={style.routeTime}>{segments[1].date.substring(11, 16)} - {landingTime(segments[1]).hours}:{landingTime(segments[1]).minutes}</div>
                <div className={style.routeTime}>{durationHM(segments[1].duration)}</div>
                <div className={style.routeTime}>{segments[1].stops.join()}</div>
            </div>
        </div>


}
export default Ticket