import React from 'react';
import "./FooterLinks.scss"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function FooterLinks(props) {
    return (
        <div className='footer'>
            <section>
                <div className='footer-top'>
                    <div className='social-icons'>
                        <FaFacebookF size={32} className='icon' />
                        <FaInstagram size={32} className='icon'/>
                        <FaTwitter size={32} className='icon'/>
                        <FaYoutube size={32} className='icon'/>
                    </div>
                    <div className='text'>
                        <h1>Let's Talk?</h1>
                    </div>
                    <div className='btn'>
                        <button>Make An Inquiry!</button>
                    </div>
                </div>
            </section>
            <hr style={{width: '100%', marginTop: '3rem' }} />
            <section className='footer-section'>
                <div className='footerLink_container'>
                    <div className='logo'>
                        <Link>
                        <p>
                            Shop<span>lto.</span>
                        </p>
                        </Link>
                    </div>
                    <div className='footer-menu'>
                        <p>Features</p>
                        <ul className='menu-links'>
                            <li>
                                <a>Link Shortening</a>
                            </li>
                            <li>
                                <a>Branded Links</a>
                            </li>
                            <li>
                                <a>Analytics</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p>Resources</p>
                        <ul className='menu-links'>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Developer</a>
                            </li>
                            <li>
                                <a>Support</a>
                            </li>
                            <li>
                                <a>Docs</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p>Company</p>
                        <ul className='menu-links'>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Our Time</a>
                            </li>
                            <li>
                                <a>Career</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p>Partners</p>
                        <ul className='menu-links'>
                            <li>
                                <a>About</a>
                            </li>
                            <li>
                                <a>Our Time</a>
                            </li>
                            <li>
                                <a>Career</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FooterLinks;