import React, { useContext, useState } from 'react'
import resultContext from '../context/Result/ResultContext'


const CreateResult = (props) => {
    const context = useContext(resultContext)
    const {createResult}=context
    const [result, setResult] = useState({USN:"",E_ID:"",Marks:""})
    const handleClick=(e)=>{
        e.preventDefault();
        createResult(result.USN,result.E_ID,result.Marks)
        props.showAlert("Result Created Successfully","success")
        setResult({USN:"",E_ID:"",Marks:""})
    }

    const onChange=(e)=>{
        setResult({...result,[e.target.name]:e.target.value})
    }
    return (
        <form className='container my-3'>
            <div className="form-group">
                <label htmlFor="USN">USN</label>
                <input type="text" onChange={onChange} value={result.USN} name='USN' className="form-control" id="USN" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="E_ID">Event ID</label>
                <input type="text" onChange={onChange} value={result.E_ID} name='E_ID' className="form-control" id="E_ID" />
            </div>
            <div className="form-group">
                <label htmlFor="Marks">Marks</label>
                <input type="text" onChange={onChange} value={result.Marks} name='Marks' className="form-control" id="Marks" />
            </div>
           
            <button type="submit" onClick={handleClick} className="btn btn-primary my-2">Submit</button>
        </form>
    )
}

export default CreateResult
