import React, { useEffect, useState } from 'react';
import "./Profile.scss"
import ProfileMenu from "../../components/pageMenu/PageMenu"
import { useSelector, useDispatch } from "react-redux"
import Card from '../../components/card/Card';
import Loader from "../../components/loader/Loader"
import { getUser, updatePhoto, updateUser } from '../../redux/features/auth/authSlice';
import { shortenText } from "../../utils/index"


function Profile() {
    const { isLoading, user  } =useSelector(state => state.auth)
    console.log("user", user)

    const initialState = {
        name: user?.name || "",
        email: user?.email || "",
        role: user?.role || "",
        phone: user?.phone || "",
        photo: user?.photo || "",
        address: user?.address || {
            address: user?.address?.address || "" ,
            state: user?.address?.state || "",
            country: user?.address?.country || "",
        },
    }

    const [profile, setProfile] = useState(initialState)
    const [previewPhoto, setPreviewPhoto] = useState(null)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(user === null)
        {
            dispatch(getUser())
        }
    }, [dispatch, user])

    useEffect(()=>{
        if(user)
        {
            setProfile({
                name: user?.name || "",
                email: user?.email || "",
                role: user?.role || "",
                phone: user?.phone || "",
                photo: user?.photo || "",
                address: user?.address || {
                    address: user?.address?.address || "" ,
                    state: user?.address?.state || "",
                    country: user?.address?.country || "",
                },
            })
        }
    }, [dispatch, user])

    const handleFormChange = (e) =>{
        e.preventDefault()
        const {name, value} = e.target
        setProfile({...profile, [name]: value})
    }

    const handlePhotoChange = (e)=>{
            // setProfilePhoto(e.target.files[0])
            setPreviewPhoto(URL.createObjectURL(e.target.files[0]))
    }
    const submitForm = async(e )=>{
        e.preventDefault()
        console.log("profile",profile)

        const userData = {
            name: profile.name,
            phone: profile.phone,
            address: {
                address: profile.address,
                country: profile.country,
                state: profile.state,
            }
        }
        console.log(userData)
        await dispatch(updateUser(userData))
    }

    const uploadPhoto = async(e)=>{
        e.preventDefault()

        const userData = {
            photo: previewPhoto
        }
        console.log("image data",userData)
        await dispatch(updatePhoto(userData))
        setPreviewPhoto(null)
    }

    console.log("preview", previewPhoto)
    console.log("profile", profile)
 
    return (
        <section>
            {isLoading && <Loader/>}
            <div className='container'>
                <ProfileMenu/>
                <h2 className='my-5'>Profile</h2>
                <div className='f-start profile'>
                    <Card cardClass={"card"}>
                        { !isLoading && user && (
                            <>
                                <div className='profile_photo'>
                                    <img 
                                    src={previewPhoto === null ? profile?.photo :previewPhoto} 
                                    alt='profilePic' 
                                    className='profilePic' />
                                    {previewPhoto &&
                                     <button className='-btn -btn-grey' onClick={uploadPhoto}>
                                     Upload Photo
                                     </button>
                                    }
                                   
                                    <h3>Role: {profile.role}</h3>
                                </div>
                                <form onSubmit={submitForm}>
                                    <p>
                                        <label>Change Photo: </label>
                                        <input
                                            type='file'
                                            accept='image/*'
                                            name='photo'
                                            onChange={handlePhotoChange}
                                            />
                                    </p>
                                    <p>
                                        <label>Name: </label>
                                        <input
                                            type='text'
                                            name='name'
                                            onChange={handleFormChange}
                                            value={profile?.name}
                                            required
                                            />
                                    </p>
                                    <p>
                                        <label>Email: </label>
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={handleFormChange}
                                            value={profile?.email}
                                            disabled
                                            />
                                    </p>
                                    <p>
                                        <label>Phone: </label>
                                        <input
                                            type='text'
                                            name='phone'
                                            onChange={handleFormChange}
                                            value={profile?.phone}
                                            required
                                            />
                                    </p>
                                    <p>
                                        <label>Address: </label>
                                        <textarea
                                            name='address'
                                            onChange={handleFormChange}
                                            value={profile?.address?.address}
                                            required
                                            />
                                    </p>
                                    <p>
                                        <label>State: </label>
                                        <input
                                            type='text'
                                            name='state'
                                            onChange={handleFormChange}
                                            value={profile?.address?.state}
                                            required
                                            />
                                    </p>
                                    <p>
                                        <label>Country: </label>
                                        <input
                                            type='text'
                                            name='country'
                                            onChange={handleFormChange}
                                            value={profile?.address?.country}
                                            required
                                            />
                                    </p>
                                    <button className='-btn -btn-primary -btn-block text-white' type='submit'>Update Profile</button>
                                </form>
                            </>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    );
}

export const User = ()=>{
    const { user } = useSelector(state=>state.auth)
    const [isLoading, setIsLoading] = useState(true)
    const username = user?.name

    console.log("user", user)

    useEffect(()=>{
        if(user)
        {
            setIsLoading(false)
        }
    }, [user])
    return (
            isLoading ? 
                (<span>Loading...</span>)
             : (
                <span style={{color: "#ff7722"}}>
                    Hi {shortenText(username, 8)}
                 </span>  
            )
    )
}

export default Profile;