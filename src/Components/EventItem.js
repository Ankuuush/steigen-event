import React, { useContext, useState } from 'react'
import eventContext from '../context/events/EventContext'
import resultContext from '../context/Result/ResultContext'
import { useNavigate } from 'react-router-dom'
import reportContext from '../context/Report/ReportContext'
import Moment from 'moment'


const EventItem = (props) => {
    let navigate = useNavigate();
    const eventcontext = useContext(eventContext)
    const resultcontext = useContext(resultContext)
    const reportcontext = useContext(reportContext)

    const { register, deleteEvent, editEvent } = eventcontext
    const { getSpecificResult } = resultcontext
    const { getReport } = reportcontext

    const { USEvent, text, report } = props
    const [disabled, setDisabled] = useState(false)
    const [textAlter, setTextAlter] = useState(text)

    const handleClick = () => {
        if (textAlter === 'Register') {
            setDisabled(true)
            setTextAlter('Registered')
            register(USEvent.E_ID)
        }
        else {
            getSpecificResult(USEvent.E_ID)
            navigate("/Results")
        }
    }

    const handleReportClick = () => {

        getReport(USEvent.E_ID)
        navigate("/Report")
    }

    return (
        <div >
            <div className="card my-3" style={{ width: "80vw" }}>
                <div className="card-body my-2">
                    <div className="d-flex align-items-baseline">
                        <h5 className="card-title mx-2">{USEvent.EName}</h5>
                        {text !== "View Result" && localStorage.getItem('role') !== "P" ? <><i className="fas fa-edit mx-2" onClick={() => { editEvent(USEvent.E_ID, "Kumar", "Sanu ki awaz me", "Bollywood", "12:43:59", "2023-12-03", "1234567809") }}
                            style={{ position: "absolute", right: "2em" }}></i>
                            <i className="fas fa-trash-alt mx-2" onClick={() => { deleteEvent(USEvent.E_ID) }} style={{ position: "absolute", right: "5em" }}></i></> : <></>}
                    </div>

                    <p className="card-text mx-2">{USEvent.Description} </p>

                    <p className="card-text mx-2">Location: {USEvent.Location} &emsp; Date: {Moment(USEvent.Date).format('YYYY-MM-DD')} &emsp;
                        Time: {USEvent.Time} {localStorage.getItem('role')!=='P' && text==='View Result'?<button type="button" style={{ position: "absolute", right: "2em" }} disabled={disabled} onClick={() => { handleClick(); }} className="btn btn-success">{textAlter}</button>:
                        localStorage.getItem('role')==='P'?<button type="button" style={{ position: "absolute", right: "2em" }} disabled={disabled} onClick={() => { handleClick(); }} className="btn btn-success">{textAlter}</button>:<></>}
                        {text === "View Result" ? <button type="button" style={{ position: "absolute", right: "10em" }} onClick={handleReportClick}
                            className="btn btn-success">{report}</button> : <></>}</p>
                </div>
            </div>
        </div>
    )
}

export default EventItem
