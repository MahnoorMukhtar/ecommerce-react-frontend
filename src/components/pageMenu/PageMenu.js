import React from 'react';
import "./PageMenu.scss";
import { NavLink } from 'react-router-dom';


function PageMenu(props) {
    return (
        <div>
            <nav className='-btn-primary my-3 p-2 text-align-center'>
                <ul className='profileLinks'>
                    <li>
                        <NavLink to="/profile" >Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="wallet" >My Wallet</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wishList" >WishList</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default PageMenu;