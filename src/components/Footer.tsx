import { NavLink } from 'react-router-dom'

import logo from '../assets/Logo.png'
import facebookIcon from '../assets/Facebook_Logo_Secondary.png'
import instagramIcon from '../assets/Instagram_Glyph_White.png'
import whatsappIcon from '../assets/Digital_Glyph_White_RGB_2026.png'
import emailIcon from '../assets/mail_40dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png'

import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <NavLink
            to="/"
            aria-label="ARS Tech Solutions home"
          >
            <img
              src={logo}
              alt="ARS Tech Solutions"
              className="footer-logo"
            />
          </NavLink>

          <p className="footer-description">
            Web development, digital solutions and technology support
            for businesses across New Zealand.
          </p>


          {/* Social Media */}
          <div className="footer-socials">

            <a
              href="https://www.facebook.com/ARStechsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="ARS Tech Solutions on Facebook"
            >
              <img
                src={facebookIcon}
                alt=""
                className="social-icon"
              />

              <span>ARStechsolutions</span>
            </a>


            <a
              href="https://www.instagram.com/ars.techsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="ARS Tech Solutions on Instagram"
            >
              <img
                src={instagramIcon}
                alt=""
                className="social-icon"
              />

              <span>ars.techsolutions</span>
            </a>

            <a
                href="mailto:contact@arstechsolutions.com"
                className="social-link"
                aria-label="Email ARS Tech Solutions"
                >
                <img
                    src={emailIcon}
                    alt=""
                    className="social-icon"
                />

                <span>contact@arstechsolutions.com</span>
                </a>


            <a
              href="https://wa.me/64272078245"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Contact ARS Tech Solutions on WhatsApp"
            >
              <img
                src={whatsappIcon}
                alt=""
                className="social-icon"
              />

              <span>+64 27 207 8245</span>
            </a>

          </div>

        </div>


        {/* Footer links */}
        <div className="footer-links">

          <div className="footer-column">

            <h3>Services</h3>

            <NavLink to="/services">
              Web Development
            </NavLink>

            <NavLink to="/solutions">
              Digital Solutions
            </NavLink>

            <NavLink to="/services">
              Tech Support
            </NavLink>

          </div>


          <div className="footer-column">

            <h3>Company</h3>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/work">
              Work
            </NavLink>

            <NavLink to="/resources">
              Resources
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>

          </div>


          <div className="footer-column">

            <h3>Get Started</h3>

            <p>
              Have a project in mind?
            </p>

            <NavLink
              to="/contact"
              className="btn footer-cta"
            >
              Request a Quote
            </NavLink>

          </div>

        </div>

      </div>


        <div className="container footer-bottom">

            <p className="footer-copyright">
                © 2026 ARS Tech Solutions. All rights reserved. · NZBN 9429053837134
            </p>

            <div className="footer-legal">
                <NavLink to="/privacy">
                Privacy
                </NavLink>

                <NavLink to="/terms">
                Terms
                </NavLink>

                <span>
                Rolleston, Canterbury, New Zealand
                </span>
            </div>

        </div>

    </footer>
  )
}

export default Footer