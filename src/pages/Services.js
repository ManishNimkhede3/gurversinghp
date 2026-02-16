import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <h1 className="page-title">Our Services</h1>
                    <p className="page-subtitle">
                        Powered by a 20+ member backend team, experienced field officers, strong police liaison capability,
                        and IBNR–FFRM project experience since Aug 2022
                    </p>
                    <p className="page-description">
                        GSA delivers structured, evidence-driven investigation and risk-verification services across Punjab and Haryana.
                    </p>
                </div>
            </section>

            <section className="section services-content">
                <div className="container">
                    <div className="services-grid">
                        {/* Motor Insurance Investigations */}
                        <div className="service-card" id="motor">
                            <div className="service-header">
                                <div className="service-icon">🚗</div>
                                <h2 className="service-title">Motor Insurance Investigations</h2>
                                <p className="service-tagline">TP, OD & Theft Claims</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    End-to-end technical verification of motor claims with police-verified ground evidence.
                                </p>

                                <div className="service-category">
                                    <h3>Third-Party (TP) Claims</h3>
                                    <ul>
                                        <li>Accident legitimacy & police record verification</li>
                                        <li>Victim and occupant confirmation</li>
                                        <li>Place of Occurrence (POO) mapping</li>
                                        <li>Witness tracing & police statement correlation</li>
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h3>Own Damage (OD) Scrutiny</h3>
                                    <ul>
                                        <li>Damage vs loss cause correlation</li>
                                        <li>Police intimation consistency</li>
                                        <li>Pre-existing damage detection</li>
                                    </ul>
                                </div>

                                <div className="service-category">
                                    <h3>Theft Investigations</h3>
                                    <ul>
                                        <li>FIR authenticity & police station verification</li>
                                        <li>Theft circumstance validation</li>
                                        <li>Key-set authenticity</li>
                                        <li>Untraced report coordination</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Police Liaison */}
                        <div className="service-card" id="police">
                            <div className="service-header">
                                <div className="service-icon">👮</div>
                                <h2 className="service-title">Police Liaison & Statutory Coordination</h2>
                                <p className="service-tagline">Professional Law Enforcement Coordination</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    Professional dealing and coordination with law-enforcement agencies.
                                </p>

                                <div className="service-category">
                                    <h3>Direct Police Coordination</h3>
                                    <ul>
                                        <li>Direct liaison with Police Stations & Investigating Officers</li>
                                        <li>FIR / DDR / accident record confirmation</li>
                                        <li>Charge-sheet (173 CrPC) verification</li>
                                        <li>Case status & investigation updates</li>
                                        <li>SSP / SHO / IO office coordination</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RTI Services */}
                        <div className="service-card" id="rti">
                            <div className="service-header">
                                <div className="service-icon">📋</div>
                                <h2 className="service-title">RTI Expert Services</h2>
                                <p className="service-tagline">Right to Information</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    RTI-based retrieval of certified police and government records.
                                </p>

                                <div className="service-category">
                                    <h3>RTI Services</h3>
                                    <ul>
                                        <li>RTI drafting & filing with Police, RTO & Hospitals</li>
                                        <li>Certified FIR, DDR, MLC & investigation records</li>
                                        <li>Difficult police document procurement</li>
                                        <li>Legally admissible evidence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* IBNR & FFRM */}
                        <div className="service-card" id="ibnr">
                            <div className="service-header">
                                <div className="service-icon">📊</div>
                                <h2 className="service-title">IBNR & FFRM Risk Verification</h2>
                                <p className="service-tagline">Since August 2022</p>
                            </div>
                            <div className="service-body">
                                <p className="service-intro">
                                    Portfolio-level and early-stage insurance risk detection support.
                                </p>

                                <div className="service-category">
                                    <h3>Risk Verification Services</h3>
                                    <ul>
                                        <li>IBNR (Incurred But Not Reported) investigation</li>
                                        <li>FFRM claim-risk verification assignments</li>
                                        <li>Suspicious pattern identification</li>
                                        <li>Pre-claim field validation</li>
                                        <li>Policy-stage risk intelligence inputs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-cta">
                        <div className="cta-box">
                            <h2>Need Expert Investigation Services?</h2>
                            <p>Contact us today for comprehensive insurance investigation and risk verification</p>
                            <div className="cta-buttons">
                                <a href="/contact" className="btn btn-primary">Request Investigation</a>
                                <a href="tel:+919814974333" className="btn btn-secondary">Call +91-9814974333</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
