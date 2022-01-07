import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
        const [credentials, setCredentials] = useState({email:"",password:""})
        let navigate =useNavigate();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email:credentials.email,password:credentials.password})
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
            <div className='container'>
                <div className="my-3">
                    <h1>Log In to continue</h1>
                </div>
    
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">USN</label>
                        <input type="USN" className="form-control" id="USN" onChange={onChange} value={credentials.email} name="USN" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name='password' />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>    )
}

export default Login
