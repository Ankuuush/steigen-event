import React, { useState } from 'react'
import resultContext from './ReportContext'

const ReportState = (props) => {

    const reportInitial=[
        {
            E_ID: null, Report: '', USN: ''
        }
    ]
    const [reports, setReport] = useState(reportInitial)
    const host="http://localhost:5000"
    const getReport= async(id)=>{

        const response = await fetch(`${host}/api/report/getreport/${id}`, {
            method: 'GET', 
             headers: {
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem("token")
            },
          });
          const json= await response.json();
          setReport(json)
    }

    
    return (
       <resultContext.Provider value={{reports,getReport}}>
        {props.children}
      </resultContext.Provider>
    
    )
}

export default ReportState
