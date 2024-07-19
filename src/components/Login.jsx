import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { useHistory, Link } from "react-router-dom"
import './css/login-signup.css'
import { UserContext } from "../App"


function Login() {
    const {state , dispatch} = useContext(UserContext);

    const history=useHistory();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')


    
    // useEffect(() => {
    //     // Check if user is already logged in
    //     const userLoggedIn = localStorage.getItem('loggedInUser'); // Assume you store user info in localStorage
    //     if (userLoggedIn) {
    //         alert('You are already logged in');
    //         history('/'); // Redirect to home page
    //     }
    // }, [history]);


    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:4000/login",{
                email,password
            })
            .then(res=>{
                // localStorage.setItem('loggedInUser', email); // Store user info in localStorage
                if(res.data=="exist"){
                    dispatch({type:'USER' , payload:true})
                    history.push("/",{state:{id:email}})
                    alert("Successfully Logged in")
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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

            <h1>LOGIN</h1>

            <form action="POST">
                <h2>EMAIL</h2>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <h2>PASSWORD</h2>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <br />
                <input type="submit" onClick={submit} className="log-submit-btn"/>

            </form>

            <h2 className="DHA">Not Yet Registered ? <Link to="/signup" className="linkbot">SIGNUP</Link></h2>

        </div>
        </div>
    )
}

export default Login