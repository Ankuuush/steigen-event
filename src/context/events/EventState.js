import moment from 'moment'
import React, { useState } from 'react'
import eventContext from './EventContext'


const EventState = (props) => {
    const host="http://localhost:5000"
    const initialEvent=[]
    const [event, setEvent] = useState(initialEvent)
    const yourDate = new Date()
    const NewDate = moment(yourDate).format('YYYY-MM-DD')
   
    const upcomingInitial=event.filter((ev)=>NewDate<=ev.Date)
    const [upcoming, setUpcoming] = useState(upcomingInitial)
    const pastInitial=event.filter((ev)=>NewDate>ev.Date)
    const [past, setPast] = useState(pastInitial)

    const getEvents =async () =>  {
    //    console.log("token is" + localStorage.getItem('token'))
    
        const response = await fetch(`${host}/api/events/getall`, {
          method: 'GET', 
           headers: {
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMUFZMTlJUzAxMiJ9LCJpYXQiOjE2NDE0NjM5NjN9.veMOavhPxl18I1sTaqPAVf_ZszjHbOFy97bce8ow-Dg"
          },
        });
        const json= await response.json();
        setEvent(json)
        setUp(json)
       
      }
    
    const register=async(E_ID)=>{

      const response = await fetch(`${host}/api/participatedby`, {
        method: 'POST', 
         headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMUFZMTlJUzAxMiJ9LCJpYXQiOjE2NDE0NjM5NjN9.veMOavhPxl18I1sTaqPAVf_ZszjHbOFy97bce8ow-Dg"
        },
        body:JSON.stringify({E_ID})
      });
      const json= await response.json();
        console.log(json.USN+" "+E_ID)

    }

    const setUp=(newEvent)=>{
        setEvent(newEvent)
        const newUpcoming=newEvent.filter((ev)=>NewDate<=ev.Date)
        setUpcoming(newUpcoming)
        const newPast=newEvent.filter((ev)=>NewDate>ev.Date)
        setPast(newPast)
    }

    const deleteEvent= async(id)=>{

        const response = await fetch(`${host}/api/events/deleteevent/${id}`, {
            method: 'DELETE', 
             headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMUFZMTlJUzAxMiJ9LCJpYXQiOjE2NDE0NjM5NjN9.veMOavhPxl18I1sTaqPAVf_ZszjHbOFy97bce8ow-Dg"
            },
          });
          const json= await response.json();
        const newEvent=event.filter((ev)=>ev.E_ID!==id)
        setUp(newEvent)
    }

    const editEvent=async (id,EName,Description,Location,Time,Date,SUSN)=>{
        const response = await fetch(`${host}/api/events/editevent/${id}`, {
            method: 'PUT', 
             headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTIzNDU2Nzg5MCJ9LCJpYXQiOjE2NDE0ODkzMjV9.c8wb4lsqTUYX_vbyxmChNjZCozRHP3h0-3zkqZzpaMU"
            },
            body:JSON.stringify({EName,Description,Location,Time,Date,SUSN})
          });
        let newEvent=await JSON.parse(JSON.stringify(event))
        for (let index = 0; index < newEvent.length; index++) {
            const element = newEvent[index];
            if(element.E_ID===id){
                newEvent[index].EName=EName;
                newEvent[index].Description=Description;
                newEvent[index].Location=Location;
                newEvent[index].Time=Time;
                newEvent[index].Date=Date;
                break;
            }            
        }
        setUp(newEvent)
    }

    return (
        <eventContext.Provider value={{ upcoming, past,register,deleteEvent,editEvent,getEvents}}>
        {props.children}
      </eventContext.Provider>
    )
}

export default EventState
