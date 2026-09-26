import netlifyLogo from '../assets/techstack/Netlify.png'

import '../styles/Partners.css'

const netlifyReferralUrl =
  'https://join.netlify.com/zb24zl55iau5'

type PartnersProps = {
  compact?: boolean
}

function Partners({
  compact = false
}: PartnersProps) {

  return (
    <section
      className={`partners-section ${
        compact ? 'partners-section-compact' : ''
      }`}
      aria-labelledby={
        compact ? undefined : 'partners-title'
      }
    >
      <div className="container partners-container">

        {!compact && (
          <div className="partners-heading">

            <p className="partners-eyebrow">
              PARTNERS & PLATFORMS
            </p>

            <h2 id="partners-title">
              Building with trusted modern platforms.
            </h2>

            <p className="partners-description">
              ARS Tech Solutions participates in the
              Netlify Partners Program as an Ecosystem Partner.
            </p>

          </div>
        )}


        <a
          href={netlifyReferralUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="netlify-partner-card"
          aria-label="Learn more about Netlify"
        >

          <div className="netlify-partner-logo">

            <img
              src={netlifyLogo}
              alt="Netlify"
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
            />

          </div>


          <div className="netlify-partner-content">

            <span className="netlify-partner-label">
              ECOSYSTEM PARTNER
            </span>

            <h3>
              Netlify
            </h3>

            <p>
              Modern web hosting, deployment and
              development infrastructure.
            </p>

          </div>


          <span
            className="netlify-partner-arrow"
            aria-hidden="true"
          >
            ↗
          </span>

        </a>


        <p className="partner-disclosure">
          ARS Tech Solutions may receive referral credit
          when you sign up through this Netlify link.
        </p>

      </div>
    </section>
  )
}

export default Partners