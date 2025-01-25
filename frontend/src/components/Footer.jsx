import React from 'react';
// import '../../assets/css/style.scss';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', fontSize: '8px' }}>
            <div>Footer</div>
            <div className='row'>
                <div className='col-md-2'>
                    <h3 style={{ margin: '3px 10px' }}>Follow Us !</h3>
                    <li><a href="Refer and Earn"><button className='Refer and earn' style={{ margin: '0px', padding: '5px' }}>Refer and Earn</button></a></li>
                    <div className="social_icons">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-whatsapp" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='col-md-2'>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="About Us">About Us</a></li>
                        <li><a href="Careers">Careers</a></li>
                        <li><a href="Newsroom">Newsroom</a></li>
                        <li><a href="Alumni speak">Alumni speak</a></li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <h3>Work With Us</h3>
                    <ul>
                        <li><a href="Become an instructure">Become an instructor</a></li>
                        <li><a href="Blog as guest">Blog as guest</a></li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <h3>Need Help ?</h3>
                    <ul>
                        <li><a href="Contact Us">Contact Us</a></li>
                        <li><a href="Help Center">Help Center</a></li>
                        <li><a href="Grievance">Grievance</a></li>

                    </ul>
                </div>
                <div className='col-md-2'>
                    <h3>For Business</h3>
                    <ul>
                        <li><a href="Corporate training">Corporate training</a></li>
                        <li><a href="Simpli Learning Hub">first VITE e-Learning Hub</a></li>
                        <li><a href="Guranteed to run Classes">Guranteed to run Classes</a></li>
                        <li><a href="Partners">Partners</a></li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <h3>Learn On The Go!</h3>
                    <div className="app-download" >
                        <ul>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.example.app" target="_blank" rel="noopener noreferrer">
                                    <button className='google play-store' >Google Play</button>

                                    {/* <i className="fab fa-android" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                    Get the Android App */}
                                </a>
                            </li>
                            <li>
                                <a href="https://apps.apple.com/us/app/example-ios-app/id123456789" target="_blank" rel="noopener noreferrer">
                                    <button className='app-store'>iOS App Store</button>
                                    {/* <i className="fab fa-apple" style={{ fontSize: '15px', color: '#4267B2' }}></i>
                                    Get the iOS App */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            

            <div className='row'>
                <div className='col-md-6' className='footer-text'>
                    <p>© 2025 First VITE e-learning Private Ltd. All Rights Reserved. The certification names are the trademarks of their respective owners.</p>
                </div>
                <div className='col-md-2' className='footer-links'>
                    <ul>
                        <li><a href="Terms of Use">Terms of Use</a></li>
                        <li><a href="Privacy Policy">Privacy Policy</a></li>
                        <li><a href="Refund Policy">Refund Policy</a></li>
                        <li><a href="Sitemap">Sitemap</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default Footer;
