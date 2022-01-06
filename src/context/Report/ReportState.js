import React, { useState } from 'react'
import resultContext from './ReportContext'

const ReportState = (props) => {
    const reportInitial=[
        {
            E_ID:6,
            report:"This is the report. Just read it!!!",
            USN:"123456789"
        },{
            E_ID:8,
            report:"This is the 8th report. Just read it!!!",
            USN:"123456789"
        }
    ]
    const [reports, setReport] = useState(reportInitial)

    const getReport= (id)=>{
        console.log(id)
        let newReport=[]
        for (let index = 0; index < reportInitial.length; index++) {
            const element = reportInitial[index];
            if(element.E_ID===id){
            newReport.push(element)
            break;}
        }
        console.log(newReport)
        setReport(newReport)
    }

    
    return (
       <resultContext.Provider value={{reports,getReport}}>
        {props.children}
      </resultContext.Provider>
    
    )
}

export default ReportState
