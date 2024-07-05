import React, { useEffect, useState } from 'react';
import "./auth.scss"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux"
import { validateEmail } from '../../utils';
import { RESET_AUTH, register } from '../../redux/features/auth/authSlice';
import Loader from "../../components/loader/Loader"

const initialValues = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
}

function Register() {
    const dispatch = useDispatch() 
    const navigate = useNavigate()

    const { isLoading, isLoggedIn, isSuccess } = useSelector( state=>state.auth )
    
    const [formData, setFormData] = useState(initialValues)
    const { email, password, name, cPassword } = formData
    const handleInputChange = (e)=>{
        const { name, value } = e.target
        
        setFormData({ ...formData, [name]: value })
    }

    const registerUser = async(e) => {
        e.preventDefault()
        console.log(name, email, password, cPassword)
        if(!email || !password)
        {
           return toast.error("All fields are required")
        }
        if(password.length < 6)
        {
            return toast.error("Password must be at least 6 characters")
        }
        if(!validateEmail(email)){
            return toast.error("Please enter a valid email")
        }
        if(password !== cPassword)
        {
            return toast.error("Passwords do not match")
        }
       const userData = {
        name, email, password
       }
       await dispatch(register(userData))
    }

    useEffect(()=>{
        if(isSuccess && isLoggedIn)
        {
            navigate("/")
        }
        dispatch(RESET_AUTH())
    }, [isSuccess, isLoggedIn, navigate, dispatch])

    return (
        <>
        {isLoading && <Loader/>}
        <section className="container auth">
            <div className='form'>
                <h2>
                    Register 
                </h2>
                <form onSubmit={registerUser}>
                        <input
                        name='name'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={handleInputChange}
                        />
                    <input
                        name='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleInputChange}
                        />
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={handleInputChange}
                        />
                        <input
                        name='cPassword'
                        type='password'
                        placeholder='Confirm Password'
                        value={cPassword}
                        onChange={handleInputChange}
                        />
                    <button className='-btn -btn-primary' type='submit'>
                        Register
                    </button>
                    <p>Already have an account? <Link to='/login' className='register'>Login</Link></p>
                </form>
            </div>
            <div className='image'>
                <img 
                    src='/images/4957136.jpg' 
                    alt='registerphoto' 
                    width="400" 
                    height="400"
                    />
            </div>
        </section>
        </>

    );
}

export default Register;