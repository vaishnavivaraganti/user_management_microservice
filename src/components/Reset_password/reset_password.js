import React, { useRef, useState } from 'react';
import './reset_password.css';
import logo from '../../assets/login-page-logo.png';


function Password_reset(){

    var password = useRef(HTMLInputElement);
    var confirmPassword = useRef(HTMLInputElement);
    var email = useRef(HTMLInputElement);

    const [btnDisable, setbtnDisable] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(<></>);

    function checkPassword(){
        if((password.current.value === confirmPassword.current.value)){
            setbtnDisable(false);
            setPasswordMatch(<></>);
        }
        else{
            setbtnDisable(true);
            setPasswordMatch(<small className="text-danger">Passwords Doesn't match</small>);
        }
        if(!email.current.value.length){
            setbtnDisable(true);
        }
        else{
            setbtnDisable(false);
        }
    }

    function cancel(){
        setbtnDisable(true);
        setPasswordMatch(<></>);
    }

    return (
        <div className="container w-50 p-5 password-reset-page-content">
            <img src={logo} alt="logo"/>
            <br/>
            <h1>Password Reset</h1>
            <form className="password-reset-page-form">
                <div class="form-group">
                    <label for="login-email-id" style={{float:"left"}}><b>Email</b></label>
                    <input ref={email} id="login-email-id" type="email" onInput={checkPassword} className="form-control" placeholder="Enter your email"/>
                </div>
                <div class="form-group">
                    <label for="login-password" style={{float:"left"}}><b>Password</b></label>
                    <input ref={password} id="login-password" type="password" className="form-control" placeholder=" Enter your Password"/>
                </div>
                <div class="form-group">
                    <label for="confirm-password" style={{float:"left"}}><b>Confirm Password</b></label>
                    <input ref={confirmPassword} id="confirm-pasword" onInput={checkPassword} type="password" className="form-control" placeholder="Confirm your Password"/>
                </div>
                {passwordMatch}
                <button disabled={btnDisable} className="btn btn-primary w-100">Reset Password</button>
                <button onClick={cancel} className="btn btn-primary w-100">Cancel</button>
            </form>
        </div>
    );
}
export default Password_reset ;