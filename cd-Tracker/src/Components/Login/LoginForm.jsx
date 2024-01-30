import React from 'react'
import './LoginForm.css'
import LoginBtn from '../LoginBtn/LoginBtn'
import { useRef, useState, useEffect } from 'react'
import postApi from '../../api/loginApi'
import { Link, useNavigate } from 'react-router-dom'



function LoginForm() {

    const userRef = useRef()
    const passRef = useRef();
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: userRef.current?.value,
            password: passRef.current?.value
        }

        if(user.username == ""||user.password == "")
        {
            console.log("Please Enter valid credentials")
            return
        }

        setAuth(await postApi(user));

        
        





    }
    useEffect(() => {
       
        if (auth) {
            navigate('/demo');
        }
        console.log(auth)
    }, [auth]); // Execute the effect whenever `auth` changes



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