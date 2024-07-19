import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './css/SignUp.css';
import axios from 'axios';
const SignUp = () => {

    const [email, setEmail] = useState('');
    const [displayName, setUser] = useState('');
    const [password, setPasswd] = useState('');
    const history = useHistory();

    async function insert(e) {
        e.preventDefault();
        if (email && password && displayName) {
            if (!/.+@gmail\.com/.test(email)) {
                alert("Enter valid email id");
                return false;
            }
            try {
                const res = await axios.post("http://localhost:5000/user/insert", {
                    displayName, email, password
                });
                console.log(res);
                if (res.data.message === "exists") {
                    alert("User already exists");
                }
                else {
                    history.push("/login", { state: { id: displayName, email: email } });
                }
            } catch (error) {
                // Handle request failure
                console.error("Error inserting the data:", error);
                alert("Error inserting the data");
            }
        }
        else {
            alert("Please fill all the details");
            return false;
        }
    }
    return (
    <>
        <div className="reg-page">
                <div className="reg-container">
                    <h1 className="reg-heading">Register</h1>
                    <form className="reg-form">
                        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} className="reg-input" />
                        <input type="text" placeholder="Username" onChange={(e) => { setUser(e.target.value) }} className="reg-input" />
                        <input type="password" placeholder="Password" onChange={(e) => { setPasswd(e.target.value) }} className="reg-input" />
                        <button className="reg-button" onClick={(e) => {insert(e)}}>Register</button>
                    </form>
                    <p className="reg-message">Already registered? <a href="/login" className="reg-link">Sign in here</a></p>
                </div>
            </div>
    </>
    );
}

export default SignUp;