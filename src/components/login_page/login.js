import React from 'react';
import './login.css';
import logo from '../../assets/login-page-logo.png';


function LoginPage(){
    return (
        <div className="container w-50 p-5 login-page-content">
            <img src={logo} alt="logo"/>
            <br/>
            <form className="login-page-form">
                <div class="form-group">
                    <label for="login-user-id" style={{float:"left"}}><b>User name</b></label>
                    <input maxLength={"20"} id="login-user-id" type="text" className="form-control" placeholder="Enter your User ID or email"/>
                </div>
                <div class="form-group">
                    <label for="login-password" style={{float:"left"}}><b>Password</b></label>
                    <input id="login-password" type="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="small">
                    <div style={{float:"left"}}> 
                        <input type="checkbox" className="form-check-input" id="login-remember-me"/>
                        <label for="login-remember-me" style={{marginLeft:"5px"}} className="form-check-label">Remeber me</label>
                    </div>

                    <div style={{float:"right"}}>
                        <a href="#">Forgot Password ?</a>
                    </div>
                </div>
                <button className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;