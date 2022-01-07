import React, { useState } from 'react'

import resultContext from './ResultContext'


const ResultState = (props) => {
    const host="http://localhost:5000"
    let resultInitial=[]
    const [results, setResults] = useState([])

    const getresults=async()=>{
        const response = await fetch(`${host}/api/result/getresult`, {
            method: 'GET', 
             headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMUFZMTlJUzAxMiJ9LCJpYXQiOjE2NDE0NjM5NjN9.veMOavhPxl18I1sTaqPAVf_ZszjHbOFy97bce8ow-Dg"
            },
          });
          const json= await response.json();
          setResults(json)
    }

    const getSpecificResult=async(id)=>{

        const response = await fetch(`${host}/api/result/getspecificresult/${id}`, {
            method: 'GET', 
             headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMUFZMTlJUzAxMiJ9LCJpYXQiOjE2NDE0NjM5NjN9.veMOavhPxl18I1sTaqPAVf_ZszjHbOFy97bce8ow-Dg"
            },
          });
          const json= await response.json();
          setResults(json)
       
    }

    return (
        <resultContext.Provider value={{results,getSpecificResult,getresults}}>
            {props.children}
        </resultContext.Provider>

    )
}

export default ResultState
