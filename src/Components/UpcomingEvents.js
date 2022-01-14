import React, { useContext, useEffect, useState } from 'react'
import eventContext from '../context/events/EventContext'
import { useNavigate } from 'react-router-dom'
import Moment from 'moment'


const UEvent = (props) => {
    let navigate = useNavigate();
    const eventcontext = useContext(eventContext)
    const { deleteEvent, editEvent, register,getparticipantevents,pevents } = eventcontext

    const { USEvent, text, disabled,updateEvent } = props
    const [disable, setDisable] = useState(disabled)
    const [textAlter, setTextAlter] = useState(text)

    const handleClick = (e) => {
        setTextAlter("Registered")
        setDisable(true)
        register(USEvent.E_ID)
    }



    return (
        <div >
            <div className="card my-3" style={{ width: "80vw" }}>
                <div className="card-body my-2">
                    <div className="d-flex align-items-baseline">
                        <h5 className="card-title mx-2">{USEvent.EName}</h5>
                        <i className="fas fa-edit mx-2" onClick={() =>  {updateEvent(USEvent) }}
                            style={{ position: "absolute", right: "2em" }}></i>
                        <i className="fas fa-trash-alt mx-2" onClick={() => { deleteEvent(USEvent.E_ID) }} style={{ position: "absolute", right: "5em" }}></i>
                    </div>

                    <p className="card-text mx-2">{USEvent.Description} </p>

                    <p className="card-text mx-2">Location: {USEvent.Location} &emsp; Date: {Moment(USEvent.Date).format('YYYY-MM-DD')} &emsp; Time: {USEvent.Time}
                        {localStorage.getItem("role") === 'P' ? <button type="button" style={{ position: "absolute", right: "2em" }} disabled={disable} onClick={() => { handleClick(); }} className="btn btn-success">{textAlter}</button> : null}
                    </p>
                </div>
            </div>
        </div>
    )
}



const UpcomingEvents = (props) => {
    const { pevents, events,updateEvent } = props
    

    let Eventarr = []

    for (let index = 0; index < events.length; index++) {
        const upcomingEvt = events[index];
        let count = true
        for (let pevent = 0; pevent < pevents.length; pevent++) {
            const element = pevents[pevent];
            if (upcomingEvt.E_ID === element.E_ID) {
                Eventarr.push(<UEvent disabled={true} updateEvent={updateEvent} USEvent={upcomingEvt} key={upcomingEvt.E_ID} text="Registered" />)
                count = false;
                break;
            }
        }
        if (count)
            Eventarr.push(<UEvent disabled={false} updateEvent={updateEvent} USEvent={upcomingEvt} key={upcomingEvt.E_ID} text="Register" />)
    }

    return (
        Eventarr.length > 0 ? Eventarr : <p>No upcoming Events</p>
    )

}


export default UpcomingEvents
