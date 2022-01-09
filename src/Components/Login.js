import React,{useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import loginContext from '../context/LoginContext';


const Login = (props) => {
    const context = useContext(loginContext)
    const {role,id}=context
    let navigate =useNavigate();
    useEffect(() => {
        if(!role)
        navigate("/role")
    }, [])
        const [credentials, setCredentials] = useState({id:"",Password:""})
       
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({[id]:credentials.id,Password:credentials.Password,UserType:role})
            });
            const json = await response.json();
            console.log(json)
            if(json.success){
                //redirect
                localStorage.setItem("token",json.authToken)
                props.showAlert("Welcome Back!!","success")
                navigate('/')
            }
            else{
                props.showAlert("Invalid Credentials","danger")
            }
        }
        const onChange=(e)=>{
            setCredentials({...credentials,[e.target.name]:e.target.value})
        }
        return (
            <div className='container' style={{marginTop:"4em"}}>
                <div className="my-3">
                    <h1>Log In to continue</h1>
                </div>
    
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">{id}</label>
                        <input type="id" className="form-control" id="id" onChange={onChange} value={credentials.id} name="id" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="Password" className="form-control" id="Password" onChange={onChange} value={credentials.Password} name='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>    )
}

export default Login
