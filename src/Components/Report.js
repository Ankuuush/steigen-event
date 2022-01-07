import React,{useContext} from 'react'
import reportContext from '../context/Report/ReportContext'

const Report = () => {
    const context = useContext(reportContext)
    const {reports}= context  
        
    return (
        <div className="container d-flex">
            <p>{reports[0].Report}</p>
        </div>
    )
}

export default Report
