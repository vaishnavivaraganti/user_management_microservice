import React from 'react';
import './reset_password.css';
import logo from '../../assets/login-page-logo.png';
function Password_reset(){
    return (
        <div className="container w-50 p-5 password-reset-page-content">
            <img src={logo} alt="logo"/>
            <br/>
            <h1>Password Reset</h1>
            <form className="password-reset-page-form">
                <div class="form-group">
                    <label for="login-email-id" style={{float:"left"}}><b>User name</b></label>
                    <input maxLength={"20"} id="login-email-id" type="text" className="form-control" placeholder="Enter your email"/>
                </div>
                <div class="form-group">
                    <label for="login-password" style={{float:"left"}}><b>Password</b></label>
                    <input id="login-password" type="password" className="form-control" placeholder=" Enter your Password"/>
                </div>
                <div class="form-group">
                    <label for="confirm-password" style={{float:"left"}}><b>Confirm Password</b></label>
                    <input id="confirm-pasword" type="password" className="form-control" placeholder="Confirm your Password"/>
                </div>
                <div className="small">
                    {/* <div style={{float:"left"}}>
                        <input type="checkbox" className="form-check-input" id="login-remember-me"/>
                        <label for="login-remember-me" style={{marginLeft:"5px"}} className="form-check-label">Remeber me</label>
                    </div>
                    <div style={{float:"right"}}>
                        <a href="#">Forgot Password ?</a>
                    </div> */}
                </div>
                <button className="btn btn-primary w-100">Reset Password</button>
                <button className="btn btn-primary w-100">Cancel</button>
            </form>
        </div>
    );
}
export default Password_reset ;