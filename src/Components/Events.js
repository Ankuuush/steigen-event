import React, { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import eventContext from '../context/events/EventContext'
import AddEvent from './AddEvent'
import PastEvents from './PastEvents'
import UpcomingEvents from './UpcomingEvents'

const Events = (props) => {
    const eventcontext = useContext(eventContext)    
    const {upcoming,past,getEvents} =eventcontext
    const {showAlert}=props
    let navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token'))
        getEvents()
        else
        navigate('/role');
    }, [])
    return (
        
        <div className='container my-3'>
           {localStorage.getItem('role')=='SC'?<AddEvent showAlert={showAlert}/>:<></>}
            <h2 className='my-3'>Upcoming Events</h2>
            {upcoming.length>0?upcoming.map((USEvent)=>{
                return <UpcomingEvents text="Register"  showAlert={showAlert} report="" key={USEvent.E_ID} USEvent={USEvent} />
            }):<p>No upcoming events</p>}
            <h2>Past Events</h2>
            {past.length>0?past.map((USEvent)=>{
                return <PastEvents  text="View Result"   report="View Report" key={USEvent.E_ID} USEvent={USEvent} />
            }):<p>No past events</p>}
        </div>
    )
}

export default Events
