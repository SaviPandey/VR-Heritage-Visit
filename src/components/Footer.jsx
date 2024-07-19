import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import "./css/Footer.css";

const Footer = () => {
    return (
            <footer className="footer">
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>VR Brahman</h3>
                        <p>VRTOUR is a unique digital platform which offers 360 degree immersive experience which give the viewers real-life Experience. The portal is completely devoted to meet every requirement of the viewers.</p>
                    </div>

                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" name="email" placeholder="Enter e-mail address" />
                            <input type="submit" value="Subscribe" className="search-button"/>
                        </form>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <a
                                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaYoutube className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Quick Links</h3>
                        <ul>
                                <li><NavLink to="/about">About US</NavLink></li>
                                <li><NavLink to="/blog">Blog & Articles</NavLink></li>
                                <li><NavLink to="/pilgrimage">Pilgrimages</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom--section">
                    <hr />
                    <div className="container2 grid grid-two-column ">
                        <p>@{new Date().getFullYear()}All Rights served by VRTOUR</p>
                        <div className="footer-last">
                            <ul>
                                <li><NavLink to="/about">Terms of Use</NavLink></li>
                                <li><NavLink to="/about">Privacy Policy</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
