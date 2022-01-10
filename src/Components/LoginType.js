import React from 'react'
import { useNavigate } from 'react-router-dom'


const LoginType = () => {
    const navigate=useNavigate();
    const handleFaculty=()=>{
        localStorage.setItem('role','F')
        localStorage.setItem('id','SSN')
        navigate("/signin")
    }
    const handleParticipants=()=>{
        localStorage.setItem('role','P')
        localStorage.setItem('id','USN')
        navigate("/signin")
    }
    const handleSC=()=>{
        localStorage.setItem('role','SC')
        localStorage.setItem('id','USN')
        navigate("/signin")
    }
    return (
        <div>
            <button onClick={handleFaculty} type="button" className="btn btn-primary">Faculty</button>
            <button onClick={handleParticipants} type="button" className="btn btn-secondary">Participants</button>
            <button onClick={handleSC} type="button" className="btn btn-success">Student Coordinator</button>
        </div>
    )
}

export default LoginType
