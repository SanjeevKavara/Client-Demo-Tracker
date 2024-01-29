import React from 'react'
import './LoginForm.css'
import LoginBtn from '../LoginBtn/LoginBtn'
import { useRef } from 'react'
import postApi from '../../api/loginApi'

function LoginForm() {

    const userRef = useRef()
    const passRef = useRef();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const user =  {
            username : userRef.current?.value,
            password : passRef.current?.value
        }

        postApi(user)

        console.log("user", user);
    }

  

    return (
        <div className='container'>
            <div className="inner-container">
                <div className="headings">
                    <h1 className='head1'>Client Demo Tracker</h1>
                    <h3 className='head2'>Welcome back! Enter your credentials to login.</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder='  Username or Email' ref={userRef} />
                    <input type="password" placeholder='  Password' ref={passRef} />
                    <LoginBtn />
                </form>
              
            </div>

        </div>
    )
}

export default LoginForm