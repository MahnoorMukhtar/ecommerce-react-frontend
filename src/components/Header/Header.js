import React, { useState } from 'react';
import styles from "./Header.module.scss"
import {Link, NavLink, useNavigate} from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { TbMenuDeep } from "react-icons/tb";
import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { RESET_AUTH, logout } from '../../redux/features/auth/authSlice';
import ShowOnLogin, { ShowOnLogout } from '../hiddenLink/HiddenLink';
import { User } from '../../pages/profile/Profile';
import { FaUserCircle } from "react-icons/fa";

export const logo = (
    <div className={styles.logo}>
        <Link to='/'>
            <p>
                Shop<span>Ito</span>
            </p>
        </Link>
    </div>
)


function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [showMenu, setShowMenu] = useState(false);
    const [scrollbar, setScrollBar] = useState(false)

    const fixNavBar = ()=>{
        if(window.scrollY > 50)
        {
            setScrollBar(true)
        }
        else{
            setScrollBar(false)
        }
    }

    window.addEventListener("scroll", fixNavBar)



    const toggleMenu =()=>{
        setShowMenu(!showMenu)
    }
    const hideMenu =()=>{
        setShowMenu(false)
    }

    const cart=(
        <span className={styles.cart}>
            <Link to='/cart' >
                Cart
                <FaCartShopping size={20}/>
                <p>0</p>
            </Link>
        </span>
    )
    
    const activeLink = (props)=>{
        return props.isActive ? styles.active : ''
    }

    const logoutUser = async() => {

        await dispatch(logout())
        await dispatch(RESET_AUTH())
        navigate("/login")
    }

    return (
        <header className={scrollbar ? `${styles.fixed}` : null} >
            <div className={styles.header}>
              {logo}
                <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
                    <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}` } onClick={hideMenu}>
                    </div>

                    <ul>
                        <li className={styles["logo-mobile"]}>
                            {logo}
                            <FaTimes size={20} onClick={hideMenu} />
                        </li>
                        <li>
                            <NavLink to='/shop' className={activeLink}>Shop</NavLink>
                        </li>
                    </ul>
                    <div className={styles['header-right']}>
                        <span className={styles.links}>

                            <ShowOnLogout>
                                <NavLink to='/login' className={activeLink}>
                                    Login
                                </NavLink>
                            </ShowOnLogout>
                            <ShowOnLogout>
                                <NavLink to='/register' className={activeLink}>
                                    Register
                                </NavLink> 
                            </ShowOnLogout>
                            <ShowOnLogin>
                                 <NavLink to='/profile' className={activeLink}>
                                    <FaUserCircle color='#ff7722' size={20} />
                                    <User/>
                                </NavLink> 
                            </ShowOnLogin>
                            <ShowOnLogin>
                                <NavLink to='/orders' className={activeLink}>
                                    My Order
                                </NavLink>   
                            </ShowOnLogin>
                            <ShowOnLogin>
                                <Link to='/' onClick={logoutUser}>
                                    Log out
                                </Link>    
                            </ShowOnLogin>

                        </span>
                           {cart}
                    </div>
                </nav>
                <div className={styles["menu-icons"]}>
                    {cart}
                    <TbMenuDeep size={27} onClick={toggleMenu} />
                </div>
            </div>
        </header>
    );
}

export default Header;