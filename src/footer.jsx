import React from 'react';
import './Nav and footer style/footer.css';
import facebook from './assets/images/icons8-facebook-32.png';
import instagram from './assets/images/icons8-instagram-50.png';
import X from './assets/images/icons8-twitterx-50.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                <div className="section">
                    <h5 className="section-head">Attend Event</h5>
                    <ul className="section-text">
                        <li className="section-link"><a href="/events" className="text-primary">Events</a></li>
                        <li className="section-link"><a href="/events" className="text-primary">Book</a></li>
                    </ul>
                </div>
                <div className="section">
                    <h5 className="section-head">Art Club</h5>
                    <ul className="section-text">
                        <li className="section-link"><a href="/about-us" className="text-primary">About</a></li>
                        <li className="section-link"><a href="/members" className="text-primary">Membership</a></li>
                    </ul>
                </div>
                <div className="section">
                    <h5 className="section-head">Support </h5>
                    <ul className="section-text">
                        <li className="section-link"><a href="/events" className="text-primary">Tickets</a></li>
                        <li className="section-link"><a href="/members" className="text-primary">Shares</a></li>
                    </ul>
                </div>
                <div className="section">
                    <h5 className="section-head">
                        Contacts
                    </h5>
                    <p className="section-contact">
                        George Gathiani<br />+254768466643<br />george@indiearts.art<br />
                    </p>
                    <h5 className="section-socials">
                        Social Media
                    </h5>
                    <div className="social-row">
                        <div className="soc-item">
                        <a href="https://www.instagram.com/indie.artske?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" target="_blank" rel="noopener noreferrer"> {/* Add your facebook links here */}   
                                <img src={facebook} alt="Facebook" className="social-icon" /> 
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://www.instagram.com/indie.artske?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" target="_blank" rel="noopener noreferrer">{/* Add your X links here */}
                                <img src={X} alt="X" className="social-icon" />
                            </a>
                        </div>
                        <div className="soc-item">
                            <a href="https://www.instagram.com/indie.artske?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw==" target="_blank" rel="noopener noreferrer"> {/* Add your instagram links here */}
                                <img src={instagram} alt="Instagram" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="section-copy">
                    <p className="copy-text">
                        © Copyright {new Date().getFullYear()} Indie - All Rights Reserved
                    </p>
                    <p class="design-credit">Designed by 
                    <a href="https://www.techwithbrands.com/" target="_blank" rel="noopener noreferrer">TwB</a>  
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
