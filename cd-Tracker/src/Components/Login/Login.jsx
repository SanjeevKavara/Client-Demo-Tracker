import React from 'react'
import login from 'D:/ClientDemoTracker/cd-Tracker/src/assets/Loginphoto.png'
import './login.css'
import LoginForm from './LoginForm'


function Login() {
    return (
        <>
            <div className='flxbox'>
                <img src={login} alt="" />
               <LoginForm />
            </div>


        </>
    )
}

export default Login