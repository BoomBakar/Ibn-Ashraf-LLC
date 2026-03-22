import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-content">
                <div className="footer-company">
                    <h3>Ibn Ashraf Technical Services LLC</h3>
                    <p>Delivering reliable IT solutions and infrastructure support across the UAE.</p>
                </div>

                <div className="footer-links">
                    <h4>Contact</h4>
                    <p>
                        📧 <a href="mailto:sohailbdxb173@gmail.com">sohailbdxb173@gmail.com</a>
                    </p>
                    <p>
                        📞 <a href="tel:+971042651901">+971 04 265 1901</a>
                    </p>
                    <p>
                        📍 <a
                            href="https://www.google.com/maps?q=Office+401,+Al+Baraha+Building,+Omer+Bin+Khatab+Road,+Deira,+Dubai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Office 401, Al Baraha Bldg, Omer Bin Khatab Rd, Deira, Dubai
                        </a>
                    </p>
                </div>

                <div className="footer-social">
                    <h4>Message Us</h4>
                    <div className="social-icons">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="20"
                            height="20"
                            fill="#25D366"
                            style={{ opacity: 1 }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352"
                            />
                        </svg>
                        <a
                            href="https://wa.me/97142651901"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Ibn Ashraf Technical Services LLC · All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
