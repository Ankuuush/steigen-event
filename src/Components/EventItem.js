import React, { useContext, useState } from 'react'
import eventContext from '../context/events/EventContext'

const EventItem = (props) => {
    const context = useContext(eventContext)
    const {register,deleteEvent,editEvent}=context
    const { USEvent,text } = props
    const [disabled, setDisabled] = useState(false)
    const [textAlter, setTextAlter] = useState(text) 
    const handleClick=()=>{
        if(textAlter==='Register'){
        setDisabled(true)
        setTextAlter('Registered')
        register('1AY19IS012',USEvent.E_ID)
    }
    }

    return (
        <div >
            <div className="card my-3" style={{ width: "80vw" }}>
                <div className="card-body my-2">
                    <div className="d-flex align-items-baseline">
                        <h5 className="card-title mx-2">{USEvent.EName}</h5>
                        <i className="fas fa-edit mx-2" onClick={()=>{editEvent(USEvent.E_ID,"Kumar","Sanu ki awaz me","Bollywood","12:43:59","2023-12-03")}} style={{position:"absolute", right:"2em"}}></i>
                        <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteEvent(USEvent.E_ID)}}  style={{position:"absolute", right:"5em"}}></i>
                    </div>
                    <p className="card-text mx-2">{USEvent.Description} <button type="button" style={{position:"absolute", right:"2em"}} disabled={disabled} onClick={handleClick} className="btn btn-success">{textAlter}</button></p>
                    <p className="card-text mx-2">Location: {USEvent.Location} &emsp; Date:{USEvent.Date} &emsp; Time: {USEvent.Time}</p>
                </div>
            </div>
        </div>
    )
}

export default EventItem
