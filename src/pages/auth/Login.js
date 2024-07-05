import React, { useEffect, useState } from 'react';
import "./auth.scss"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_AUTH, login } from '../../redux/features/auth/authSlice';
import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card';


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { isLoading, isSuccess, isLoggedIn } = useSelector(state=>state.auth)
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async(e) => {
        console.log("login user")   
        e.preventDefault()

        if(!email && !password)
        {
            return toast.error("Please fill in the fields")
        }

         const userData = {
            password, email
         }

        await dispatch(login(userData))
    }

    useEffect(()=>{
        if(isLoggedIn && isSuccess)
        {
            navigate("/")
        }
        dispatch(RESET_AUTH())
    }, [isLoading, navigate, dispatch, isLoggedIn])


    return (
        <>
        { isLoading && <Loader/> }
        <section className="container auth">
            <div className='image'>
                <img 
                    src='/images/4957136.jpg' 
                    alt='loginphoto' 
                    width="400" 
                    height="400"/>
            </div>
            <Card>

            <div className='form'>
                <h2>
                    Login 
                </h2>
                <form onSubmit={loginUser}>
                    <input
                        name='email'
                        type='email'
                        placeholder='Type your Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    <input
                        name='password'
                        type='password'
                        placeholder='Type your Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    <button className='-btn -btn-primary' type='submit'>
                        Login
                    </button>
                    <p>Dont have an account? <Link to='/register' className='register'>Register</Link></p>
                </form>
            </div>
            </Card>
        </section>
        </>

    );
}

export default Login;