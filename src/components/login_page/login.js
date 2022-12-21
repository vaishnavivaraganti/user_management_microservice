import React, { useRef, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './login.css';
import logo from '../../assets/login-page-logo.png';
import DummyPage from '../DummyPage/DummyPage';

const hostURL = 'http://localhost:8000'

function LoginPage(){


    var user_name = useRef(HTMLInputElement);
    var password = useRef(HTMLInputElement);
    var [loginStatus, setLoginStatus] = useState(<></>);
    var [loginBtnEnable, setLoginBtnEnable] = useState(true);
    const navigate = useNavigate();

    function loginSubmit(e){
        e.preventDefault();
        navigate('/welcome');
        console.dir(user_name.current.value);
        fetch(hostURL+'/login', {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({User_Name:user_name.current.value, Password:password.current.value})
        })
        .then(res => res.json())
        .then((data)=> {
            console.log(data);
            if(data.err){
                setLoginStatus(<small className="text-danger">{data.err}</small>);
                return ;
            }
            setLoginStatus(<small className="text-success">{data.msg}</small>)
            return;
        }).catch((err) => {
            console.log(err);
        });    
    }

    function checkInputFields(){
        if(user_name.current.value.length > 0 && password.current.value.length > 0){
            setLoginBtnEnable(false);
        }
        else{
            setLoginBtnEnable(true);
        }
    }

    return (
        <div className="container  p-5 login-page-content">
            <img src={logo} alt="logo"/>
            <br/>
            <form className="login-page-form">
                <div className="form-group">
                    <label for="login-user-id" style={{float:"left"}}><b>User name</b></label>
                    <input ref={user_name} onInput={checkInputFields} id="login-user-id" type="text" className="form-control" placeholder="Enter your User ID or email"/>
                </div>
                <div className="form-group">
                    <label for="login-password" style={{float:"left"}}><b>Password</b></label>
                    <input ref={password} onInput={checkInputFields} id="login-password" type="password" className="form-control" placeholder="Password"/>
                    <i className='bi bi-eye'></i>
                </div>
                <div className="small">
                    <div style={{float:"left"}}> 
                        <input type="checkbox" className="form-check-input" id="login-remember-me"/>
                        <label for="login-remember-me" style={{marginLeft:"5px"}} className="form-check-label">Remember me</label>
                    </div>

                    <div style={{float:"right"}}>
                        <Link to="/forgot">Forgot Password ?</Link>
                    </div>
                </div>
                <button onClick={loginSubmit} disabled={loginBtnEnable} id="login-submit-btn" className="btn btn-primary w-100">Login</button>
                {loginStatus}
            </form>
        </div>
    );
}

export default LoginPage;

