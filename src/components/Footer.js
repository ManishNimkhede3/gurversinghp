import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="footer-logo">
                                <div className="logo-icon">GSA</div>
                                <div className="logo-text">
                                    <span className="logo-main">Gagandeep Singh</span>
                                    <span className="logo-sub">& Associates</span>
                                </div>
                            </div>
                            <p className="footer-tagline">
                                "Investigating with diligence, delivering with integrity."
                            </p>
                            <div className="footer-badges">
                                <div className="badge">Active Since 2007</div>
                                <div className="badge">IBNR–FFRM Since 2022</div>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Our Services</h4>
                            <ul className="footer-links">
                                <li><a href="/services#motor">Motor Insurance Investigations</a></li>
                                <li><a href="/services#police">Police Liaison</a></li>
                                <li><a href="/services#rti">RTI Services</a></li>
                                <li><a href="/services#ibnr">IBNR & FFRM</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Contact Info</h4>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <span className="contact-icon">📍</span>
                                    <div>
                                        <p>Cabin No. 1, 3rd Floor, SCO 15</p>
                                        <p>World 1 High Street Shop</p>
                                        <p>Sector 111, Kharar-Landran Road</p>
                                        <p>Mohali, Punjab — 140307</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">📞</span>
                                    <a href="tel:+919814974333">+91-9814974333</a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-icon">✉️</span>
                                    <a href="mailto:associatesgagandeep.singh@gmail.com">
                                        associatesgagandeep.singh@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-divider"></div>
                        <div className="footer-bottom-content">
                            <p>&copy; {currentYear} Gagandeep Singh & Associates. All rights reserved.</p>
                            <p className="footer-coverage">
                                <span className="gradient-text">Coverage:</span> Punjab & Haryana
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
