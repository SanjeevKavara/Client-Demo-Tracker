import React from 'react'
import login from 'D:/ClientDemoTracker/Client-Demo-Tracker/cd-Tracker/src/assets/loginimage.png'
import './login.css'
import LoginForm from './LoginForm'


function Login() {
    return (
        <>
            <div className='flxbox'>
                {/* <img src={login} alt="" /> */}
                <div className='bgcontainer'></div>
               <LoginForm />
            </div>


        </>
    )
}

export default Login