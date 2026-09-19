import { NavLink } from 'react-router-dom'
import '../styles/CTA.css'

type CTAProps = {
  eyebrow?: string
  title: string
  description?: string

  primaryText?: string
  primaryLink?: string

  secondaryText?: string
  secondaryLink?: string
}

function CTA({
  eyebrow,
  title,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink
}: CTAProps) {
  return (
    <section className="cta-section">

      <div className="container cta-container">

        <div className="cta-content">

          {eyebrow && (
            <p className="cta-eyebrow">
              {eyebrow}
            </p>
          )}

          <h2 className="cta-title">
            {title}
          </h2>

          {description && (
            <p className="cta-description">
              {description}
            </p>
          )}

        </div>


        <div className="cta-actions">

          {primaryText && primaryLink && (
            <NavLink
              to={primaryLink}
              className="btn cta-btn cta-btn-primary"
            >
              {primaryText}
              <span>→</span>
            </NavLink>
          )}

          {secondaryText && secondaryLink && (
            <NavLink
              to={secondaryLink}
              className="btn cta-btn cta-btn-secondary"
            >
              {secondaryText}
            </NavLink>
          )}

        </div>

      </div>

    </section>
  )
}

export default CTA