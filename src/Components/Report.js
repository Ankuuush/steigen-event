import React,{useContext} from 'react'
import reportContext from '../context/Report/ReportContext'

const Report = () => {
    const context = useContext(reportContext)
    const {reports}=context
    console.log(reports)
    return (
        <div className="container d-flex">
            <p>{reports[0].report}</p>
        </div>
    )
}

export default Report
