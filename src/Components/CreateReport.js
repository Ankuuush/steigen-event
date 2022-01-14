import React, { useContext, useState } from 'react'
import reportContext from '../context/Report/ReportContext'

const CreateReport = () => {
    const context = useContext(reportContext)
    const {createReport,reportevnt}=context
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleClick=(e)=>{
        e.preventDefault()
        console.log(reportevnt+" "+text)
        createReport(reportevnt,text)
    }

    const [text,setText]=useState('');
    return (
        <form className='container my-3'>
           <header >Create Report</header>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button type="submit" onClick={handleClick} className="btn btn-primary my-3">Submit</button>
        </form>
    )
}

export default CreateReport
