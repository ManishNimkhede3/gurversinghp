import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.2,
                    zIndex: 0
                }}></div>
                <div className="container">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        Get in touch with our expert investigation team
                    </p>
                </div>
            </section>

            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="info-title">Contact Our Registered Office</h2>
                            <p className="info-subtitle">Gagandeep Singh & Associates</p>

                            <div className="info-section">
                                <h3 className="info-heading">Principal Investigator</h3>
                                <p className="info-text">Gagandeep Singh</p>
                            </div>

                            <div className="info-section">
                                <h3 className="info-heading">📍 Address</h3>
                                <p className="info-text">
                                    Cabin No. 1, 3rd Floor, SCO 15<br />
                                    World 1 High Street Shop<br />
                                    Sector 111, Kharar-Landran Road<br />
                                    Mohali, Punjab — 140307
                                </p>
                            </div>

                            <div className="info-section">
                                <h3 className="info-heading">📞 Mobile</h3>
                                <a href="tel:+919814974333" className="info-link">+91-9814974333</a>
                            </div>

                            <div className="info-section">
                                <h3 className="info-heading">✉️ Email</h3>
                                <a href="mailto:associatesgagandeep.singh@gmail.com" className="info-link">
                                    associatesgagandeep.singh@gmail.com
                                </a>
                            </div>

                            <div className="info-quote">
                                <p>"Investigating with diligence, delivering with integrity."</p>
                            </div>

                            <div className="info-badges">
                                <div className="badge">Active Since 2007</div>
                                <div className="badge">IBNR–FFRM Since 2022</div>
                                <div className="badge">Punjab & Haryana Coverage</div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2 className="form-title">Request Investigation</h2>
                            <p className="form-subtitle">Fill out the form and we'll get back to you shortly</p>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91-XXXXXXXXXX"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company / Organization</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message / Investigation Details *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Please provide details about your investigation requirements..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
