import React, { useState } from 'react'

import resultContext from './ResultContext'


const ResultState = (props) => {
    
    const resultInitial=[
        {
            USN:"1AY19IS012",
            E_ID:6,
            Marks:105,
            EName:"Party",
            PName:"Ankush",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS011",
            E_ID:6,
            Marks:95,
            EName:"Party",
            PName:"Aniket",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS018",
            E_ID:6,
            Marks:90,
            EName:"Party",
            PName:"Ashutosh",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS013",
            E_ID:10,
            Marks:87,
            EName:"Football",
            PName:"Anshu",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS026",
            E_ID:10,
            Marks:72,
            EName:"Football",
            PName:"Deepak",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS053",
            E_ID:10,
            Marks:72,
            EName:"Football",
            PName:"Monish",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS013",
            E_ID:10,
            Marks:87,
            EName:"Contest",
            PName:"Anshu",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS026",
            E_ID:10,
            Marks:72,
            EName:"Contest",
            PName:"Deepak",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS053",
            E_ID:10,
            Marks:72,
            EName:"Contest",
            PName:"Monish",
            Branch:"ISE",
            Sem:5,
            SSN:"1234567890"
        }
    ]

   
    const [results, setResults] = useState(resultInitial)

    const getSpecificResult=(id)=>{
        let newResult=[]
        for (let index = 0; index < results.length; index++) {
            const element = results[index];
            if(element.E_ID===id)
            newResult.push(element)
        }
        setResults(newResult)
    }

    return (
        <resultContext.Provider value={{results,getSpecificResult}}>
            {props.children}
        </resultContext.Provider>

    )
}

export default ResultState
