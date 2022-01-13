import React, { useContext, useEffect  } from 'react'
import { useNavigate } from 'react-router-dom'
import eventContext from '../context/events/EventContext'
import resultContext from '../context/Result/ResultContext'
import AddEvent from './AddEvent'
import PastEvents from './PastEvents'
import UpcomingEvents from './UpcomingEvents'
const Events = (props) => {
    const eventcontext = useContext(eventContext)    
    const {upcoming,past,getEvents,getparticipantevents,pevents} =eventcontext
    const resultcontext = useContext(resultContext)
    const { getSpecificResult,results,getresults } = resultcontext
    const {showAlert}=props
    
    let navigate=useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
        getEvents()
        getresults()
        getparticipantevents()
        }
        else
        navigate('/role');
    }, [])

    return (
        
        <div className='container my-3'>
           {localStorage.getItem('role')=='SC'?<AddEvent showAlert={showAlert}/>: null}


            <h2 className='my-3'>Upcoming Events</h2>
            <UpcomingEvents showAlert={showAlert}  pevents={pevents} events={upcoming}  />
            {/* {upcoming.length>0?upcoming.map((USEvent)=>{
                return <UpcomingEvents text="Register"   report="" key={USEvent.E_ID} USEvent={USEvent} />
            }):<p>No upcoming events</p>} */}


            <h2>Past Events</h2>
            <PastEvents results={results} events={past} getSpecificResult={getSpecificResult}/>
        </div>
    )
}

export default Events
