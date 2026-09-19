import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../styles/Navigation.css'

function Navigation() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container">

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

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavigation"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="mainNavigation"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center nav-links">

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
                <NavLink
                  to="/contact"
                  className="btn nav-cta"
                >
                  Request a Quote
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navigation