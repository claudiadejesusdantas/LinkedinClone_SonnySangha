import React, { useState } from "react";
import './Login.css';

function Login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[profilePic, setProfilePic] = useState('');

    const loginToApp = (e) => {
        e.preventDefault();
    }

    const register = {} = {};

    return(
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="Logo do linkedin"/>

            <form>
                <input value={name} onChange={e=> setName(e.target.value)}placeholder="Full name(required if registering)" type='text'/>
                <input value={profilePic} onChange={e=> setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)" type='text'/>
                <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" type='email'/>
                <input value={password} onChange={e=> setPassword(e.target.value)} placeholder="Password" type='password'/>

                <button type='submit' onClick={loginToApp}>Sing in</button>
            </form>

            <p>Not a member? {" "}
                <span className='login__register'> Register Now</span>
            </p>
        </div>
    )
}

export default Login