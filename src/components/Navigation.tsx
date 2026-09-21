import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../styles/Navigation.css'
import Button from './Button'

function Navigation() {
  return (
    <>
      <header className="site-header">

        <nav className="navbar">
          <div className="container nav-container">

            {/* Mobile burger + logo */}
            <div className="nav-brand-group">

              <button
                className="navbar-toggler mobile-menu-button"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileNavigation"
                aria-controls="mobileNavigation"
                aria-label="Open navigation menu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <NavLink
                to="/"
                className="navbar-brand"
                aria-label="ARS Tech Solutions home"
              >
                <img
                  src={logo}
                  alt="ARS Tech Solutions"
                  className="nav-logo"
                />
              </NavLink>

            </div>


            {/* Desktop Navigation */}
            <div className="desktop-navigation">

              <ul className="navbar-nav nav-links">

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/solutions">
                    Solutions
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/work">
                    Work
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/resources">
                    Resources
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item ms-lg-3">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="medium"
                  >
                    Request a Quote
                  </Button>
                </li>

              </ul>

            </div>

          </div>
        </nav>

      </header>


      {/* Mobile Navigation - OUTSIDE HEADER */}
      <div
        className="offcanvas offcanvas-start mobile-offcanvas"
        tabIndex={-1}
        id="mobileNavigation"
        aria-labelledby="mobileNavigationLabel"
      >

        <div className="offcanvas-header">

          <NavLink
            to="/"
            className="offcanvas-brand"
            data-bs-dismiss="offcanvas"
            aria-label="ARS Tech Solutions home"
          >
            <img
              src={logo}
              alt="ARS Tech Solutions"
              className="offcanvas-logo"
            />
          </NavLink>

          <span
            id="mobileNavigationLabel"
            className="visually-hidden"
          >
            Mobile Navigation
          </span>

          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close navigation"
          />

        </div>


        <div className="offcanvas-body">

          <ul className="mobile-nav-links">

            <li>
              <NavLink
                to="/"
                data-bs-dismiss="offcanvas"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                data-bs-dismiss="offcanvas"
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/solutions"
                data-bs-dismiss="offcanvas"
              >
                Solutions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/work"
                data-bs-dismiss="offcanvas"
              >
                Work
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resources"
                data-bs-dismiss="offcanvas"
              >
                Resources
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                data-bs-dismiss="offcanvas"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                data-bs-dismiss="offcanvas"
              >
                Contact
              </NavLink>
            </li>

          </ul>


          <NavLink
            to="/contact"
            className="btn nav-cta mobile-cta"
            data-bs-dismiss="offcanvas"
          >
            Request a Quote
          </NavLink>

        </div>

      </div>
    </>
  )
}

export default Navigation