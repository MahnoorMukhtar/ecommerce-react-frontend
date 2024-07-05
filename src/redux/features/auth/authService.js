import axios from "axios"

const backend_url = process.env.REACT_APP_BACKEND_URL
export const API_URL = `${backend_url}/api/user/`

const register = async(userData) =>{
    const response = await axios.post(API_URL + "registerUser", userData, {
        withCredentials: true,
    })
    return response.data
}

const login = async(userData) => {
    const response = await axios.post(API_URL+ "loginUser", userData)
    return response.data
}

const logout = async()=>{
    const response = await axios.get(API_URL + "logout")
    return response.data.msg
}

const loginStatus = async()=>{
    const response = await axios.get(API_URL + "getLoginStatus")
    return response.data
}

const getUser = async()=>{
    const response = await axios.get(API_URL+ "getUser");
    return response.data
}

const updateUser = async(userData)=>{
    const response = await axios.patch(API_URL+ "updateUser", userData);
    return response.data
}

const updateUserPhoto = async(userData)=>{
    const response = await axios.patch(API_URL+ "updateUserPhoto", userData);
    console.log("response", response)
    return response.data
}

const authservice = {
    register, 
    login, 
    logout, loginStatus, 
    getUser, 
    updateUser, 
    updateUserPhoto
}

export default authservice;