import React from "react";
import './Login.css';

function Login(){
    const loginToApp = {} = {};
    
    const register = {} = {};

    return(
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="Logo do linkedin"/>

            <form>
                <input placeholder="Full name(required if registering)" type='text'/>
                <input placeholder="Profile pic URL (optional)" type='text'/>
                <input placeholder="Email" type='email'/>
                <input placeholder="Password" type='password'/>

                <button type='submit' onClick={loginToApp}>Sing in</button>
            </form>

            <p>Not a member?</p>
            <span className='login__register'>Register Now</span>
        </div>
    )
}

export default Login