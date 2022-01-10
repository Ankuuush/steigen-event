import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import loginContext from '../context/Login/LoginContext';


const LoginType = (props) => {
    const context = useContext(loginContext)
    const {roleFunc,idFunc}=context
    const navigate=useNavigate();
    const handleFaculty=()=>{
        roleFunc("F")
        idFunc("SSN")
        navigate("/signin")
    }
    const handleParticipants=()=>{
        roleFunc("P")
        idFunc("USN")
        navigate("/signin")
    }
    const handleSC=()=>{
        roleFunc("SC")
        idFunc("USN")
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
