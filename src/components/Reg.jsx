import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"
import './css/login-signup.css'


function Reg() {
    const history=useHistory();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:4000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history.push("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="Login-Wrapper">
        <div className="login">

            <h1>SIGNUP</h1>

            <form action="POST">
                <h2>EMAIL</h2>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <h2>PASSWORD</h2>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <br />
                <input type="submit" onClick={submit} className="log-submit-btn"/>

            </form>

            <h2 className="DHA">Have a account ? <Link to="/login" className="linkbot">LOGIN</Link></h2>

        </div>
        </div>
    )
}

export default Reg