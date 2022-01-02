import React from 'react'
import resultContext from './ResultContext'

const ResultState = (props) => {
    const resultInitial=[
        {
            USN:"1AY19IS012",
            E_ID:5,
            Marks:105,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS011",
            E_ID:5,
            Marks:60,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS013",
            E_ID:10,
            Marks:15,
            SSN:"1234567890"
        },
        {
            USN:"1AY19IS018",
            E_ID:5,
            Marks:90,
            SSN:"1234567890"
        }
    ]

    

    return (
        <resultContext.Provider value={{}}>
            {props.children}
        </resultContext.Provider>

    )
}

export default ResultState
