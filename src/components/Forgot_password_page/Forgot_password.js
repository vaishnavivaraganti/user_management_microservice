import React from 'react';
import './Forgot_password.css';
import logo from '../../assets/login-page-logo.png';


function ForgotPasswordPage(){
    return (
        <div className="container w-50 p-5 Forgot-page-content">
            <img src={logo} alt="logo"/>
            <br/>
            <h1>Forgot Password</h1>
            <form className="Forgot-page-form">
                <div class="form-group">
                    <label for="forgot-user-id" style={{float:"left"}}><b>User name</b></label>
                    <input maxLength={"20"} id="forgot-user-id" type="text" className="form-control" placeholder="Enter your User ID or email"/>
                </div>
                <div class="form-group">
                    <label for="forgot-email" style={{float:"left"}}><b>Password</b></label>
                    <input id="forgot-email" type="text" className="form-control" placeholder="Enter your email"/>
                    <small style={{float:"left"}}>Password will be sent to this email address.</small>
                </div>
                
                <button className="btn btn-primary w-100">Send Password</button>
            </form>
        </div>
    );
}

export default ForgotPasswordPage;