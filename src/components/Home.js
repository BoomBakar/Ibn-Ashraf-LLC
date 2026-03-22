import React from 'react';
import './Home.css';
import ImageSlider from './ImageSlider';

function Home() {
    return (

        <section id="home" className="home">
            <section className="hero">
                <div className="overlay">
                    <h1>Your Reliable IT Partner in Dubai</h1>
                    <p>Empowering businesses through modern and secure technology solutions.</p>

                </div>
            </section>

            <h2>Welcome to Ibn Ashraf Technical Services LLC</h2>
            <p>
                We provide professional IT solutions including network setup, hardware
                maintenance, system integration, and technical support for businesses
                of all sizes.
            </p>

            <ImageSlider />

            <section id="services" className="services">
                <h3>Our Core Services</h3>
                <div className="service-grid">
                    <div className="service-card">
                        <img src="/slides/net.jpg" alt="Network Solutions" />
                        <h4>Network Design & Implementation</h4>
                        <p>
                            From small business setups to large enterprise networks, we plan and
                            implement reliable, secure, and scalable network solutions.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src="/slides/hardware.jpg" alt="Hardware Maintenance" />
                        <h4>Server & Hardware Maintenance</h4>
                        <p>
                            Complete maintenance and upgrades for servers, desktops, and IT
                            hardware to ensure round‑the‑clock performance.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src="/slides/IT.jpeg" alt="Infrastructure Planning" />
                        <h4>IT Infrastructure Planning</h4>
                        <p>
                            Comprehensive planning and deployment of IT infrastructures tailored
                            to your business operations and growth needs.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src="/slides/cyber.jpg" alt="Cybersecurity" />
                        <h4>Cloud Backup & Cybersecurity</h4>
                        <p>
                            Protect your data and maintain business continuity with secure cloud
                            storage and advanced cyber defense strategies.
                        </p>
                    </div>
                </div>
            </section>

        </section>
    );
}

export default Home;
