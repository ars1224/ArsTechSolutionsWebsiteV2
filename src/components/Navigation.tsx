import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../styles/Navigation.css'
import Button from './Button'

function Navigation() {

  const closeMobileNavigation = () => {
    window.setTimeout(() => {
      const closeButton = document.querySelector<HTMLButtonElement>(
        '#mobileNavigation .btn-close'
      )

      closeButton?.click()
    }, 0)
  }

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
                aria-expanded="false"
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


      {/* Mobile Navigation */}
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
            onClick={closeMobileNavigation}
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

          {/* Only the actual close button uses data-bs-dismiss */}
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
                onClick={closeMobileNavigation}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={closeMobileNavigation}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/solutions"
                onClick={closeMobileNavigation}
              >
                Solutions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/work"
                onClick={closeMobileNavigation}
              >
                Work
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resources"
                onClick={closeMobileNavigation}
              >
                Resources
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMobileNavigation}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMobileNavigation}
              >
                Contact
              </NavLink>
            </li>

          </ul>


          <NavLink
            to="/contact"
            className="btn nav-cta mobile-cta"
            onClick={closeMobileNavigation}
          >
            Request a Quote
          </NavLink>

        </div>

      </div>
    </>
  )
}

export default Navigation