import React, { useContext  } from 'react'
import eventContext from '../context/events/EventContext'
import EventItem from './EventItem'

const Events = (props) => {
    const context = useContext(eventContext)    
    const {upcoming,past} =context
    const {showAlert}=props
    return (
        <div className='container my-3'>
            <h2>Upcoming Events</h2>
            {upcoming.map((USEvent)=>{
                return <EventItem text="Register" showAlert={showAlert} report="" key={USEvent.E_ID} USEvent={USEvent} />
            })}
            <h2>Past Events</h2>
            {past.map((USEvent)=>{
                return <EventItem  text="View Result"  report="View Report" key={USEvent.E_ID} USEvent={USEvent} />
            })}
        </div>
    )
}

export default Events
