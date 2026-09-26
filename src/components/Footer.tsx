import { NavLink } from 'react-router-dom'

import logo from '../assets/Logo.png'
import facebookIcon from '../assets/Facebook_Logo_Secondary.png'
import instagramIcon from '../assets/Instagram_Glyph_White.png'
import linkedinIcon from '../assets/LinkedIn_Logo_White.png'
import whatsappIcon from '../assets/Digital_Glyph_White_RGB_2026.png'
import emailIcon from '../assets/mail_40dp_E3E3E3_FILL0_wght400_GRAD0_opsz40.png'

import '../styles/Footer.css'

import BusinessProfiles from '../components/BusinessProfiles.tsx'

import netlifyLogo from '../assets/techstack/Netlify.png'

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
              width={480}
              height={270}
              loading="lazy"
              decoding="async"
            />
          </NavLink>

          <p className="footer-description">
            Web development, digital solutions and technology support
            for businesses across New Zealand.
          </p>


          {/* Business Details */}
          <div className="footer-business-details">

            <p className="footer-business-name">
              ARS Tech Solutions
            </p>

            <p>
              Rolleston, Canterbury, New Zealand
            </p>

            <a href="tel:+64272078245">
              +64 27 207 8245
            </a>

            <a href="mailto:contact@arstechsolutions.com">
              contact@arstechsolutions.com
            </a>

            <a
              href="https://arstechsolutions.com"
              aria-label="ARS Tech Solutions website"
            >
              arstechsolutions.com
            </a>

          </div>

          {/* Social Media */}
          <div className="footer-socials">

            {/* Facebook */}
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
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
              />

              <span>ARStechsolutions</span>
            </a>


            {/* Instagram */}
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
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
              />

              <span>ars.techsolutions</span>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ars-tech-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="ARS Tech Solutions on LinkedIn"
            >
              <img
                src={linkedinIcon}
                alt=""
                className="social-icon"
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
              />

              <span>ARS Tech Solutions</span>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@arstechsolutions.com"
              className="social-link"
              aria-label="Email ARS Tech Solutions"
            >
              <img
                src={emailIcon}
                alt=""
                className="social-icon"
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
              />

              <span>contact@arstechsolutions.com</span>
            </a>


            {/* WhatsApp */}
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
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
              />

              <span>+64 27 207 8245</span>
            </a>

          </div>

        </div>

        <BusinessProfiles />
        {/* Footer Links */}
        <div className="footer-links">

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>

            <NavLink to="/services/website-design-ux-ui">
              Website Design & UX/UI
            </NavLink>

            <NavLink to="/services/website-development">
              Website Development
            </NavLink>

            <NavLink to="/services/website-redesign">
              Website Redesign
            </NavLink>

            <NavLink to="/services/custom-web-applications">
              Custom Web Applications
            </NavLink>

            <NavLink to="/services/seo-website-performance">
              SEO & Website Performance
            </NavLink>

            <NavLink to="/services/website-care">
              Website Care
            </NavLink>

            <NavLink to="/services/ecommerce-websites">
              E-commerce Websites
            </NavLink>

            <NavLink to="/services/hosting-domain-deployment">
              Hosting & Deployment
            </NavLink>

            <NavLink to="/services/it-support">
              IT Support
            </NavLink>
          </div>


          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/canterbury">
              Canterbury
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


          {/* CTA */}
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

                      <a
            href="https://join.netlify.com/zb24zl55iau5"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="footer-partner"
            aria-label="ARS Tech Solutions - Netlify Ecosystem Partner"
          >
            <img
              src={netlifyLogo}
              alt="Netlify"
              width="34"
              height="34"
              loading="lazy"
              decoding="async"
            />

            <div>
              <span className="footer-partner-label">
                ECOSYSTEM PARTNER
              </span>

              <span className="footer-partner-name">
                Netlify
              </span>
            </div>

            <span
              className="footer-partner-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          </div>

        </div>
      </div>

      


      {/* Footer Bottom */}
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