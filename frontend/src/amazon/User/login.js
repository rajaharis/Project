
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import '../../amazon_css/login.css'


function Login() {
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setmessage] = useState(false);

    async function handleinput() {
        if (password.length == 0) {
            alert("Enter Email and Password")
            console.log(password.length);
        }

        else {
            const response = await fetch('http://localhost:5000/login/' + email + '/' + password + '',
                {
                    method: "post",
                });
            const res = await response.json();

            if (response.status == 200) {
                console.log(res);


                localStorage.setItem("userInfo", JSON.stringify(res))

                setmessage(false)
                history.push(
                    {

                        pathname: "/"
                    }
                )

            }
            else if (response.status == 401) {

                setmessage(res.msg)


            }
        }
    }
    return (

        <div className="main_box">

            <div >
                <img className=" header_logo" src="logo12.png"></img>
            </div>
            <div>
                <div className="fome" >
                    <h2>Sign-in</h2>

                    <div className="Email">
                        <div >
                            <label>Enter Email or phone number</label></div>
                        <input className="input-style" type="" value={email} onChange={(e) => { setEmail(e.target.value) }} required autoFocus
                        ></input>
                    </div>
                    <div >
                        <div  ><label>Enter Password</label></div>

                        <input className="input-style" name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                        <span className="help-block" style={{ color: "red" }}>{message}</span>
                    </div>

                    <button className="continue" type="button" onClick={handleinput}>Continue</button>
                    <div className="describe">
                        <span>By continuing,you agree to Amazon's<strong>Conditions of use</strong>and <strong>Privacy notice</strong></span>
                    </div>
                    <li>Need help?</li>
                </div>
            </div>
            <div className="bar">
                <span className="bar_line" >_______________</span>
                <label >New To Amazon?</label>
                <span className="bar_line">_______________</span>
            </div>
            <Link to="/create"> <button className="create" type="button"  >Create Your Amazon Account</button></Link>
            <div className="cat">

                <li>conditon of use</li>
                <li>privacy notice</li>
                <li>help</li>

            </div>
        </div>
    )

}

export default Login
