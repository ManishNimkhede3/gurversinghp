import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title">About Gagandeep Singh & Associates</h1>
                    <p className="page-subtitle">
                        Investigation Legacy + Insurance Risk Verification Expansion
                    </p>
                </div>
            </section>

            <section className="section about-content">
                <div className="container">
                    <div className="content-box">
                        <p className="lead-text">
                            <strong>Gagandeep Singh & Associates</strong> is a Punjab–Haryana-focused insurance investigation,
                            police liaison, and risk-verification firm supporting insurers in fraud detection and claim validation.
                        </p>
                        <p>
                            Founded and led by <strong>Gagandeep Singh</strong>, the firm combines field investigation,
                            police coordination, statutory record procurement, and technical analysis to produce defensible
                            claim conclusions.
                        </p>
                    </div>

                    <div className="evolution-section">
                        <h2 className="section-title">Evolution</h2>
                        <div className="timeline-grid">
                            <div className="timeline-item">
                                <div className="timeline-year">Since 2007</div>
                                <div className="timeline-content">
                                    <h3>Insurance Investigation & Police Liaison</h3>
                                    <p>Established foundation in motor insurance investigations and law enforcement coordination</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-year">Since Aug 2022</div>
                                <div className="timeline-content">
                                    <h3>IBNR & FFRM Risk Verification Projects</h3>
                                    <p>Expanded services to include proactive risk detection and portfolio-level verification</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="strength-section">
                        <h2 className="section-title">Operational Strength</h2>
                        <div className="strength-grid">
                            <div className="strength-card">
                                <div className="strength-icon">👥</div>
                                <h3>20-member backend team</h3>
                                <p>Documentation & coordination specialists</p>
                            </div>
                            <div className="strength-card">
                                <div className="strength-icon">🔍</div>
                                <h3>Dedicated field officer network</h3>
                                <p>Experienced investigation professionals</p>
                            </div>
                            <div className="strength-card">
                                <div className="strength-icon">🏢</div>
                                <h3>Mohali HQ with regional coverage</h3>
                                <p>Strategic location for Punjab & Haryana operations</p>
                            </div>
                        </div>
                    </div>

                    <div className="values-section">
                        <h2 className="section-title">Core Values</h2>
                        <div className="values-list">
                            <div className="value-item">
                                <span className="value-icon">⚖️</span>
                                <span className="value-text">Accuracy</span>
                            </div>
                            <div className="value-divider">•</div>
                            <div className="value-item">
                                <span className="value-icon">🤝</span>
                                <span className="value-text">Integrity</span>
                            </div>
                            <div className="value-divider">•</div>
                            <div className="value-item">
                                <span className="value-icon">📋</span>
                                <span className="value-text">Compliance</span>
                            </div>
                            <div className="value-divider">•</div>
                            <div className="value-item">
                                <span className="value-icon">🔒</span>
                                <span className="value-text">Confidentiality</span>
                            </div>
                            <div className="value-divider">•</div>
                            <div className="value-item">
                                <span className="value-icon">👮</span>
                                <span className="value-text">Professional Liaison</span>
                            </div>
                        </div>
                    </div>

                    <div className="leader-section">
                        <div className="leader-card">
                            <div className="leader-info">
                                <h2>Gagandeep Singh</h2>
                                <p className="leader-title">Principal Investigator</p>
                                <p className="leader-company">Gagandeep Singh & Associates</p>
                                <div className="leader-contact">
                                    <p>📧 associatesgagandeep.singh@gmail.com</p>
                                    <p>📞 +91-9814974333</p>
                                </div>
                                <p className="leader-quote">
                                    "Investigating with diligence, delivering with integrity."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
