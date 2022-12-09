import React from "react";
import './Login.css';

function Login(){
    return(
        <div className='login'>
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="Logo do linkedin"/>

            <form>
                <input placeholder="Full name(required if registering)" type='text'/>
                <input placeholder="Profile pic URL (optional)" type='text'/>
                <input placeholder="Email" type='email'/>
                <input placeholder="Password" type='password'/>

                <button>Sing in</button>
            </form>

            
        </div>
    )
}

export default Login