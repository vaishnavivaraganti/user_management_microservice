import React, { useEffect, useRef, useState } from 'react';
import './reset_password.css';
import logo from '../../assets/login-page-logo.png';

const hostURL = 'http://localhost:8000'

function Password_reset(){

    var password = useRef(HTMLInputElement);
    var confirmPassword = useRef(HTMLInputElement);
    var email = useRef(HTMLInputElement);

    const [btnDisable, setbtnDisable] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(<></>);
    const [resetStatus,setResetStatus]=useState(<></>)
    const [cond1, setCond1] = useState(false);
    const [cond2, setCond2] = useState(false);
    const [cond3, setCond3] = useState(false);
    const [cond4, setCond4] = useState(false);
    const [cond5, setCond5] = useState(false);
    const [cfPasswordDisable, setCfPasswordDisable] = useState(true);
    useEffect(()=>{
        if(cond1 && cond2 && cond3 && cond4 && cond5){
            setCfPasswordDisable(false);
        }
        else{
            setCfPasswordDisable(true);
        }
    }, [cond1, cond2, cond3,cond4, cond5]);


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

    function checkPasswordConditions(){
        if(password.current.value.length < 8){
            setCond1(false);
        }
        else{
            setCond1(true);
        }

        const alpha = "abcdefghijklmnopqrstuvwxyz";
        let cond = false;
        for(let i of password.current.value){
            if(alpha.includes(i)){
                setCond3(true);
                cond = true;
            }
        }
        if(!cond){
            setCond3(false);
        }

        const Alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        cond = false;
        for(let i of password.current.value){
            if(Alpha.includes(i)){
                setCond2(true);
                cond = true;
            }
        }
        if(!cond){
            setCond2(false);
        }

        const spcl = "!@#$%^&*()_+-=`~/[]{}:;'\".<>,?|\\";
        cond = false;
        for(let i of password.current.value){
            if(spcl.includes(i)){
                setCond4(true);
                cond = true;
            }
        }
        if(!cond){
            setCond4(false);
        }

        const digit = "0123456789";
        cond = false;
        for(let i of password.current.value){
            if(digit.includes(i)){
                setCond5(true);
                cond = true;
            }
        }
        if(!cond){
            setCond5(false);
        }

        console.log(cond1 + " " + cond2 + " " + cond3 + " " + cond4 + " " + cond5 + " ");
        // if(cond1 && cond2 && cond3 && cond4 && cond5){
        //     setCfPasswordDisable(false);
        // }
        // else{
        //     setCfPasswordDisable(true);
        // }
    }

    function cancel(){
        setbtnDisable(true);
        setPasswordMatch(<></>);
    }
    function reset(e){
        e.preventDefault();
        fetch(hostURL+'/reset_password',{
            method:"PUT",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Email:email.current.value,Password:password.current.value})

        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data);
            if(data.err){
                setResetStatus(<small className="text-danger">{data.err}</small>);
                return;

            }
            setResetStatus(<small className="text-success">{data.msg}</small>)
            return;
        }).catch((err) =>{
            console.log(err);

        });


    }

    return (
        <div className="container  p-5 password-reset-page-content">
            <img src={logo} alt="logo"/>
            <br/>
            <h1>Password Reset</h1>
            <form className="password-reset-page-form">
                <div className="form-group">
                    <label for="login-email-id" style={{float:"left"}}><b>Email</b></label>
                    <input ref={email} id="login-email-id" type="email" onInput={checkPassword} className="form-control" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label for="login-password" style={{float:"left"}}><b>Password</b></label>
                    <input ref={password} id="login-password" type="password" onChange={checkPasswordConditions} className="form-control" placeholder=" Enter your Password"/>
                </div>
                <div className="password-rules">
                    <ul style={{listStyleType:"none", fontSize:"x-small", float:"left", textJustify:"left"}}>
                        <li align="left" className={cond1 ? 'text-success' : 'text-danger'}>{cond1 ? <>&#x2705;</> : <>&#x274C;</>} Atleast 8 characters long.</li>
                        <li align="left" className={cond2 ? 'text-success' : 'text-danger'}>{cond2 ? <>&#x2705;</> : <>&#x274C;</>} Atleast one Uppercase Alphabet.</li>
                        <li align="left" className={cond3 ? 'text-success' : 'text-danger'}>{cond3 ? <>&#x2705;</> : <>&#x274C;</>} Atleast one Lowercase Alphabet.</li>
                        <li align="left" className={cond4 ? 'text-success' : 'text-danger'}>{cond4 ? <>&#x2705;</> : <>&#x274C;</>} Atleast one special Character.</li>
                        <li align="left" className={cond5 ? 'text-success' : 'text-danger'}>{cond5 ? <>&#x2705;</> : <>&#x274C;</>} Atleast one Digit.</li>
                    </ul>
                </div>
                <div className="form-group">
                    <label for="confirm-password" style={{float:"left"}}><b>Confirm Password</b></label>
                    <input ref={confirmPassword} disabled={cfPasswordDisable} id="confirm-pasword" onInput={checkPassword} type="password" className="form-control" placeholder="Confirm your Password"/>
                </div>
                {passwordMatch}
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <button onClick={reset} style={{fontSize:"12px", width:"120px"}} disabled={btnDisable} className="btn btn-primary">Reset Password</button>
                    <button onClick={cancel} style={{fontSize:"12px", width:"120px"}} className="btn btn-primary">Cancel</button>
                </div>
                {resetStatus}
            </form>
        </div>
    );
}
export default Password_reset ;