import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authservice from './authService';

import { toast } from "react-toastify"

const initialState = {
      isLoggedIn: false,
      user: null,
      isError: false,
      isSuccess: false,
      isLoading: false,
      message: "",
}

export const register = createAsyncThunk(
  "auth/register",
  async( userData, thunkAPI )=>{

    try{
        return await authservice.register(userData)     
    }catch(error)
    {
        const message = 
        (
          error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)

    }
  }
)

export const login = createAsyncThunk(
  "auth/login",
  async(userData, thunkAPI) =>{
      try{
        return await authservice.login(userData)
      }catch(error)
      {
          const message = 
          (error.response && error.response.data && error.response.data.message) 
          || error.message || error.toString();
          return thunkAPI.rejectWithValue(message)
      }
  }
)

export const logout = createAsyncThunk(
  "auth/logout",
  async(_, thunkAPI) =>{
      try{
        return await authservice.logout()
      }catch(error)
      {
          const message = 
          (error.response && error.response.data && error.response.data.message) 
          || error.message || error.toString();
          return thunkAPI.rejectWithValue(message)
      }
  }
)

export const loginStatus = createAsyncThunk(
  "auth/loginStatus", 
  async(_,thunkAPI)=>{
    try{
        return await authservice.loginStatus()    
    }catch(error)
    {
      const message = 
      (error.response && error.response.data && error.response.data.message) 
      || error.message || error.toString();
      return thunkAPI.rejectWithValue(message)
        }  
    }
)

export const getUser = createAsyncThunk(
  "auth/getUser", 
  async(_,thunkAPI)=>{
    try{
        return await authservice.getUser()
    }catch(error)
    {
      const message = 
      (error.response && error.response.data && error.response.data.message) 
      || error.message || error.toString();
      return thunkAPI.rejectWithValue(message)
        }  
    }
)

export const updateUser = createAsyncThunk(
  "auth/updateUser", 
  async(userData,thunkAPI)=>{
    try{
        return  await authservice.updateUser(userData) 
    }catch(error)
    {
      const message = 
      (error.response && error.response.data && error.response.data.message) 
      || error.message || error.toString();
      return thunkAPI.rejectWithValue(message)
        }  
    }
)

export const updatePhoto = createAsyncThunk(
  "auth/updatePhoto", 
  async(userData,thunkAPI)=>{
    try{
        return await authservice.updateUserPhoto(userData) 
    }catch(error)
    {
      const message = 
      (error.response && error.response.data && error.response.data.message) 
      || error.message || error.toString();
      return thunkAPI.rejectWithValue(message)
        }  
    }
)


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET_AUTH(state){
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message= ""
    }
  },
  extraReducers: (builder) =>{
    builder

    //register user
    .addCase(register.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      state.user = action.payload;
      toast.success("Registration successful")
    })
    .addCase(register.rejected, (state, action)=>{
      state.isLoading= false;
      state.isError = true;
      state.user = null;
      state.message = action.payload
      toast.error(action.payload)
    })
      //login user
      .addCase(login.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("Successfully Logged In")
        console.log("logged in", state.isLoggedIn)
        console.log("user", state.user)

      })
      .addCase(login.rejected, (state, action)=>{
        state.isLoading= false;
        state.isError = true;
        state.user = null;
        state.message = action.payload
        toast.error(action.payload)
      })

      //log out
      .addCase(logout.pending, (state)=>{
        state.isLoading = true
      })      
      .addCase(logout.fulfilled, (state)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = false;
        state.user = null;
        toast.success("Successfully Logged Out")
        console.log("is logged in", state.isLoggedIn)
      })
      .addCase(logout.rejected, (state, action)=>{
        state.isLoading= false;
        state.isError = true;
        state.message = action.payload
        toast.error(action.payload)
      })

      //get login status
      .addCase(loginStatus.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(loginStatus.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = action.payload;
        console.log("login status", action.payload)
        if(action.payload.message === "invalid Signature")
        {
          state.isLoggedIn = false
        }
      })
      .addCase(loginStatus.rejected, (state, action)=>{
        state.isLoading= false;
        state.isError = true;
        state.message = action.payload
      })

      //getUser
       .addCase(getUser.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action)=>{
        state.isLoading= false;
        state.isError = true;
        toast.error(action.payload)
      })

       //updateUser
       .addCase(updateUser.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("User updated successfully")
      })
      .addCase(updateUser.rejected, (state, action)=>{
        state.isLoading= false;
        state.isError = true;
        state.message = action.payload
        toast.error(action.payload)
      })

        //updatePhoto
      .addCase(updatePhoto.pending, (state)=>{
        state.isLoading = true
      })
      .addCase(updatePhoto.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
        toast.success("User photo updated succesfully")
        console.log("user", state.user)
      })
      .addCase(updatePhoto.rejected, (state, action)=>{
        state.isLoading= false;
        state.isError = true;
        state.message = action.payload
        toast.error(action.payload)
      })
  
  }
});

export const { RESET_AUTH } = authSlice.actions
export default authSlice.reducer
