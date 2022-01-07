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
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTIzNDU2NzgwOSJ9LCJpYXQiOjE2NDA4NjQwMjl9.RSI-7dUkDe7Pm4M8u_lBqBQ5y6jBQ3H69f2OxTE9kFc"
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
