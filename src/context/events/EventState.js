import moment from 'moment'
import React, { useState } from 'react'
import eventContext from './EventContext'


const EventState = (props) => {

    const initialEvent=[
        {
            E_ID:5,
            EName:"Ankush",
            Location:"Bokaro",
            Time:"18:40:00",
            Date:"2023-10-17",
            SUSN:"1234567809",
            SSN:"1234567890",
            Status:0,
            Description:"I am don"
        },
        {
            E_ID:6,
            EName:"Party",
            Location:"Bokaro",
            Time:"18:40:00",
            Date:"2019-09-10",
            SUSN:"1234567809",
            SSN:"1234567890",
            Status:1,
            Description:"I am don"
        },
        {
            E_ID:7,
            EName:"Cricket",
            Location:"Bokaro",
            Time:"18:40:00",
            Date:"2022-04-20",
            SUSN:"1234567809",
            SSN:"1234567890",
            Status:1,
            Description:"I am don"
        },
        {
            E_ID:8,
            EName:"webinar",
            Location:"Bokaro",
            Time:"18:40:00",
            Date:"2019-09-10",
            SUSN:"1234567809",
            SSN:"1234567890",
            Status:1,
            Description:"Mai hu don ka bhai john ka papa kon??"
        }
    ]
    const yourDate = new Date()
    const NewDate = moment(yourDate).format('YYYY-MM-DD')
    const [event, setEvent] = useState(initialEvent)
    const upcomingInitial=event.filter((ev)=>NewDate<=ev.Date)
    const [upcoming, setUpcoming] = useState(upcomingInitial)
    const pastInitial=event.filter((ev)=>NewDate>ev.Date)
    const [past, setPast] = useState(pastInitial)

    const register=(USN,E_ID)=>{
        console.log(USN+" "+E_ID)

    }

    const setUp=(newEvent)=>{
        setEvent(newEvent)
        const newUpcoming=newEvent.filter((ev)=>NewDate<=ev.Date)
        setUpcoming(newUpcoming)
    }

    const deleteEvent=(id)=>{
        const newEvent=event.filter((ev)=>ev.E_ID!==id)
        setUp(newEvent)
    }

    const editEvent=async (id,EName,Description,Location,Time,Date)=>{
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
        <eventContext.Provider value={{ upcoming, past,register,deleteEvent,editEvent}}>
        {props.children}
      </eventContext.Provider>
    )
}

export default EventState
