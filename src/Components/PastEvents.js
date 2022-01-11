import React, { useContext } from 'react'
import Moment from 'moment';
import { useNavigate } from 'react-router-dom';
import reportContext from '../context/Report/ReportContext';
import resultContext from '../context/Result/ResultContext';
const PastEvents = (props) => {
    const { USEvent, text, report } = props
    let navigate = useNavigate();
    const resultcontext = useContext(resultContext)
    const reportcontext = useContext(reportContext)

  
    const { getSpecificResult } = resultcontext
    const { getReport } = reportcontext

    const handleClick = () => {
       
            getSpecificResult(USEvent.E_ID)
            navigate("/Results")
        
    }

    const handleReportClick = () => {

        getReport(USEvent.E_ID)
        navigate("/Report")
    }

    return (
        <div>
            <div className="card my-3" style={{ width: "80vw" }}>
                <div className="card-body my-2">
                    <div className="d-flex align-items-baseline">
                        <h5 className="card-title mx-2">{USEvent.EName}</h5>
                    </div>

                    <p className="card-text mx-2">{USEvent.Description} </p>

                    <p className="card-text mx-2">Location: {USEvent.Location} &emsp; Date: {Moment(USEvent.Date).format('YYYY-MM-DD')} &emsp;
                        Time: {USEvent.Time}  <button  type="button" style={{position:"absolute", right:"2em"}} onClick={() => { handleClick(); }} className="btn btn-success">{text}</button>
                            
                        <button type="button" style={{position:"absolute", right:"10em"}}  onClick={handleReportClick}
                            className="btn btn-success">{report}</button></p>
                </div>
            </div>


        </div>
    )
}

export default PastEvents
