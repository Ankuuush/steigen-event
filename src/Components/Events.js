import React, { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import eventContext from '../context/events/EventContext'
import EventItem from './EventItem'

const Events = (props) => {
    const context = useContext(eventContext)    
    const {upcoming,past,getEvents} =context
    const {showAlert}=props
    // console.log(upcoming)
    let navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token'))
        getEvents()
        else
        navigate('/role');
    }, [])
    return (
        <div className='container my-3'>
            <h2>Upcoming Events</h2>
            {upcoming.length>0?upcoming.map((USEvent)=>{
                return <EventItem text="Register" showAlert={showAlert} report="" key={USEvent.E_ID} USEvent={USEvent} />
            }):<p>No upcoming events</p>}
            <h2>Past Events</h2>
            {past.length>0?past.map((USEvent)=>{
                return <EventItem  text="View Result"  report="View Report" key={USEvent.E_ID} USEvent={USEvent} />
            }):<p>No past events</p>}
        </div>
    )
}

export default Events
