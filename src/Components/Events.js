import React, { useContext  } from 'react'
import eventContext from '../context/events/EventContext'
import EventItem from './EventItem'

const Events = () => {
    const context = useContext(eventContext)    
    const {upcoming,past} =context
    return (
        <div className='container my-3'>
            <h2>Upcoming Events</h2>
            {upcoming.map((USEvent)=>{
                return <EventItem text="Register" key={USEvent.E_ID} USEvent={USEvent} />
            })}
            <h2>Past Events</h2>
            {past.map((USEvent)=>{
                return <EventItem  text="View Result" key={USEvent.E_ID} USEvent={USEvent} />
            })}
        </div>
    )
}

export default Events
