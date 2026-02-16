import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="hero-gradient"></div>
                    <div className="hero-pattern"></div>
                </div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Expert Investigative Coverage: Punjab & Haryana
                        </div>
                        <h1 className="hero-title">
                            Strategic Investigation, Police Liaison & Risk Mitigation for Insurance Claims
                        </h1>
                        <p className="hero-description">
                            High-precision field investigation, direct coordination with Police and statutory authorities,
                            RTI-based evidence procurement, and IBNR–FFRM risk verification support for India's leading insurance companies.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-value">Active Since 2007</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">IBNR–FFRM Since Aug 2022</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">20+ Backend Team</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-value">Dedicated Field Officers</span>
                            </div>
                        </div>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">Request Investigation</Link>
                            <a href="tel:+919814974333" className="btn btn-secondary">Call +91-9814974333</a>
                        </div>
                        <p className="hero-location">
                            Operating from Mohali with strong law-enforcement and insurer coordination across Punjab and Haryana.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section who-we-are">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15,
                    zIndex: 0
                }}></div>
                <div className="container">
                    <h2 className="section-title">Who We Are</h2>
                    <div className="who-content">
                        <p className="lead-text">
                            <strong>Gagandeep Singh & Associates (GSA)</strong> is a premier investigative and insurance
                            risk-verification firm providing claim validation, fraud-risk mitigation, police liaison,
                            and statutory support services to leading private insurance companies in India.
                        </p>
                        <p>
                            From our Mohali headquarters, we deliver reliable field intelligence and structured authority
                            coordination to protect insurers from fraudulent claims, exaggerated losses, and legal exposure.
                        </p>
                        <p>
                            Led by <strong>Gagandeep Singh</strong>, a specialist in insurance investigation and law-enforcement
                            liaison, GSA is a trusted partner for ground-level verification across Punjab and Haryana.
                        </p>
                        <p>
                            Active in the industry since 2007, GSA is supported by a 20-member backend operations team and
                            an experienced field officer network, enabling rapid execution, effective police liaison, accurate
                            verification, and timely delivery of evidence-based reports.
                        </p>
                        <p className="highlight-text">
                            Since August 2022, the firm has additionally been engaged in IBNR and FFRM insurance risk-management
                            projects, expanding its role from investigation to proactive claim-risk detection and portfolio-level
                            verification support for insurers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Specializations Section */}
            <section className="section specializations">
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.1,
                    zIndex: 0
                }}></div>
                <div className="container">
                    <h2 className="section-title">Our Core Specializations</h2>
                    <p className="section-subtitle">
                        Comprehensive investigation and verification services backed by police liaison expertise
                    </p>
                    <div className="specializations-grid">
                        <div className="spec-card">
                            <div className="spec-icon">🚗</div>
                            <h3 className="spec-title">Motor Insurance Investigations (TP, OD & Theft)</h3>
                            <p className="spec-description">
                                End-to-end technical verification of motor claims with police-verified ground evidence.
                            </p>
                            <ul className="spec-list">
                                <li>
                                    <strong>Third-Party (TP) Claims</strong>
                                    <ul>
                                        <li>Accident legitimacy & police record verification</li>
                                        <li>Victim and occupant confirmation</li>
                                        <li>Place of Occurrence (POO) mapping</li>
                                        <li>Witness tracing & police statement correlation</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Own Damage (OD) Scrutiny</strong>
                                    <ul>
                                        <li>Damage vs loss cause correlation</li>
                                        <li>Police intimation consistency</li>
                                        <li>Pre-existing damage detection</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>Theft Investigations</strong>
                                    <ul>
                                        <li>FIR authenticity & police station verification</li>
                                        <li>Theft circumstance validation</li>
                                        <li>Key-set authenticity</li>
                                        <li>Untraced report coordination</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="spec-card">
                            <div className="spec-icon">👮</div>
                            <h3 className="spec-title">Police Liaison & Statutory Coordination</h3>
                            <p className="spec-description">
                                Professional dealing and coordination with law-enforcement agencies.
                            </p>
                            <ul className="spec-list">
                                <li>Direct liaison with Police Stations & Investigating Officers</li>
                                <li>FIR / DDR / accident record confirmation</li>
                                <li>Charge-sheet (173 CrPC) verification</li>
                                <li>Case status & investigation updates</li>
                                <li>SSP / SHO / IO office coordination</li>
                            </ul>
                        </div>

                        <div className="spec-card">
                            <div className="spec-icon">📋</div>
                            <h3 className="spec-title">RTI (Right to Information) Expert Services</h3>
                            <p className="spec-description">
                                RTI-based retrieval of certified police and government records.
                            </p>
                            <ul className="spec-list">
                                <li>RTI drafting & filing with Police, RTO & Hospitals</li>
                                <li>Certified FIR, DDR, MLC & investigation records</li>
                                <li>Difficult police document procurement</li>
                                <li>Legally admissible evidence</li>
                            </ul>
                        </div>

                        <div className="spec-card">
                            <div className="spec-icon">📊</div>
                            <h3 className="spec-title">IBNR & FFRM Risk Verification (Since Aug 2022)</h3>
                            <p className="spec-description">
                                Portfolio-level and early-stage insurance risk detection support.
                            </p>
                            <ul className="spec-list">
                                <li>IBNR (Incurred But Not Reported) investigation</li>
                                <li>FFRM claim-risk verification assignments</li>
                                <li>Suspicious pattern identification</li>
                                <li>Pre-claim field validation</li>
                                <li>Policy-stage risk intelligence inputs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investigation Process Section */}
            <section className="section process">
                <div className="container">
                    <h2 className="section-title">Our Investigation & Verification Process</h2>
                    <p className="section-subtitle">
                        Designed for police-verified, legally defensible evidence
                    </p>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3 className="step-title">Case Intake & Scope Definition</h3>
                                <p className="step-description">
                                    Claim / IBNR brief, documents, required confirmations.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3 className="step-title">Field Investigation & Police Coordination</h3>
                                <p className="step-description">
                                    Site visit, police enquiry, IO interaction, local intelligence.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3 className="step-title">Official Record & Risk Validation</h3>
                                <p className="step-description">
                                    Police records, RTI documents, FFRM / IBNR checks.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3 className="step-title">Structured Final Report Submission</h3>
                                <p className="step-description">
                                    Findings, inconsistencies, photographs & conclusions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="process-cta">
                        <p className="cta-text">Need urgent police or IBNR verification?</p>
                        <a href="tel:+919814974333" className="btn btn-primary">Call for Priority Processing</a>
                    </div>
                </div>
            </section>

            {/* Coverage Section */}
            <section className="section coverage">
                <div className="container">
                    <h2 className="section-title">Expert Investigative Coverage</h2>
                    <p className="section-subtitle">
                        Strong police liaison and insurer coordination across operational zones
                    </p>
                    <div className="coverage-grid">
                        <div className="coverage-card">
                            <div className="coverage-icon">🗺️</div>
                            <h3 className="coverage-title">Punjab</h3>
                            <p className="coverage-description">
                                Mohali, Chandigarh, Ludhiana, Amritsar, Patiala & statewide
                            </p>
                        </div>
                        <div className="coverage-card">
                            <div className="coverage-icon">🗺️</div>
                            <h3 className="coverage-title">Haryana</h3>
                            <p className="coverage-description">
                                Panchkula, Ambala, Karnal & surrounding districts
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* GSA Advantage Section */}
            <section className="section advantage">
                <div className="container">
                    <h2 className="section-title">The GSA Advantage</h2>
                    <div className="advantage-grid">
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>Active Since 2007</h4>
                            <p>Established investigation & insurer credibility</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>IBNR–FFRM Projects Since Aug 2022</h4>
                            <p>Expanded into risk-verification domain</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>Police Liaison Expertise</h4>
                            <p>Direct dealing with SHO, IO & SSP offices</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>20+ Backend & Field Team</h4>
                            <p>Strong documentation & execution</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>Fraud Detection Expertise</h4>
                            <p>Staged accidents & false narratives detection</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>Evidence-Based Reporting</h4>
                            <p>Police inputs + site photos + witness statements</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>Panel-Ready Structured Reports</h4>
                            <p>Aligned with insurer & legal formats</p>
                        </div>
                        <div className="advantage-item">
                            <div className="advantage-icon">✓</div>
                            <h4>Rapid Turnaround (TAT)</h4>
                            <p>Time-bound delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="section industries">
                <div className="container">
                    <h2 className="section-title">Industries We Serve</h2>
                    <div className="industries-content">
                        <div className="industry-card">
                            <h3>Private General Insurance Companies</h3>
                            <ul>
                                <li>Claims & Risk Departments</li>
                                <li>IBNR / FFRM Project Teams</li>
                                <li>Legal & Recovery Units</li>
                                <li>Corporate Investigation Teams</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2 className="cta-title">Ready to Protect Your Insurance Portfolio?</h2>
                        <p className="cta-description">
                            Get expert investigation and risk verification services from Punjab & Haryana's trusted specialists
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">Request Investigation</Link>
                            <a href="tel:+919814974333" className="btn btn-secondary">Call +91-9814974333</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
