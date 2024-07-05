import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Test from './pages/tt';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loginStatus } from './redux/features/auth/authSlice';
import Profile from './pages/profile/Profile';

function App() {
  axios.defaults.withCredentials = true

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loginStatus())
    dispatch(getUser())
  }, [dispatch])
  
  return (
    <div className="App">
       <BrowserRouter>
          <ToastContainer/>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/profile' element={<Profile/>} />
          </Routes>
          <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
