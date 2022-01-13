import React, { useContext, useEffect, useState } from 'react'
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
import reportContext from '../context/Report/ReportContext';
import resultContext from '../context/Result/ResultContext';

const Event = (props) => {
    const { PEvent, text, report, disabled, getSpecificResult } = props;
    let navigate = useNavigate();
    const reportcontext = useContext(reportContext);
    const { getReport } = reportcontext


    const handleClick = () => {
       
        getSpecificResult(PEvent.E_ID)
        navigate("/Results")
    
}



const handleReportClick = () => {

    getReport(PEvent.E_ID)
    navigate("/Report")
}

    return (
        <div>
            <div className="card my-3" style={{ width: "80vw" }}>
                <div className="card-body my-2">
                    <div className="d-flex align-items-baseline">
                        <h5 className="card-title mx-2">{PEvent.EName}</h5>
                    </div>

                    <p className="card-text mx-2">{PEvent.Description} </p>

                    <p className="card-text mx-2">Location: {PEvent.Location} &emsp; Date: {Moment(PEvent.Date).format('YYYY-MM-DD')} &emsp;
                        Time: {PEvent.Time}  <button  type="button" style={{position:"absolute", right:"2em"}} onClick={() => { handleClick(); }} className="btn btn-success" disabled={disabled} >{text}</button>
                            
                        <button type="button" disabled={disabled} style={{position:"absolute", right:"10em"}}  onClick={handleReportClick}
                            className="btn btn-success">{report}</button></p>
                </div>
            </div>


        </div>
    )
}

const PastEvents = (props) => {

    const {results, events, getSpecificResult} = props;

    let EventsArr = [];

    for(let pastEvt = 0; pastEvt < events.length; ++pastEvt) {
        let check = false;
        for(let result = 0; result < results.length; ++result) {
            if(events[pastEvt].E_ID === results[result].E_ID) {
                EventsArr.push(<Event  text="View Result"  report="View Report" key={events[pastEvt].E_ID} PEvent={events[pastEvt]} disabled={false} getSpecificResult={getSpecificResult} />);
                check = true;
                break;
            }
        }
        if(!check) EventsArr.push(<Event  text="View Result"  report="View Report" key={events[pastEvt].E_ID} PEvent={events[pastEvt]} disabled={true} getSpecificResult={getSpecificResult}/>);
    }
    
    return (
        EventsArr.length > 0 ? EventsArr : <p>No past events</p>
    );
}

export default PastEvents
