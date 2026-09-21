import Button from './Button'
import '../styles/Hero.css'

type HeroProps = {
  eyebrow?: string
  title: string
  highlightedText?: string
  description?: string

  primaryText?: string
  primaryLink?: string

  secondaryText?: string
  secondaryLink?: string

  image?: string
}

function Hero({
  eyebrow,
  title,
  highlightedText,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  image
}: HeroProps) {
  return (
    <section
      className="hero"
      style={
        image
          ? {
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(6, 9, 14, 0.98) 0%,
                  rgba(6, 9, 14, 0.90) 34%,
                  rgba(6, 9, 14, 0.35) 62%,
                  rgba(6, 9, 14, 0.08) 100%
                ),
                url(${image})
              `
            }
          : undefined
      }
    >
      <div className="container hero-container">

        <div className="hero-content">

          {eyebrow && (
            <div className="hero-eyebrow">
              {eyebrow}
              <span className="hero-eyebrow-line"></span>
            </div>
          )}


          <h1 className="hero-title">
            {title}

            {highlightedText && (
              <>
                <br />
                <span>{highlightedText}</span>
              </>
            )}
          </h1>


          {description && (
            <p className="hero-description">
              {description}
            </p>
          )}


          <div className="hero-actions">

            {primaryText && primaryLink && (
              <Button
                to={primaryLink}
                variant="primary"
                size="large"
              >
                {primaryText}

                <span className="hero-arrow">
                  →
                </span>
              </Button>
            )}


            {secondaryText && secondaryLink && (
              <Button
                to={secondaryLink}
                variant="secondary"
                size="large"
              >
                {secondaryText}
              </Button>
            )}

          </div>


          <div className="hero-capabilities">

            <div className="hero-capability">

              <span className="capability-icon">
                ▣
              </span>

              <div>
                <strong>
                  WEBSITES
                </strong>

                <small>
                  Professional & Modern
                </small>
              </div>

            </div>


            <div className="hero-capability">

              <span className="capability-icon">
                &lt;/&gt;
              </span>

              <div>
                <strong>
                  WEB APPS
                </strong>

                <small>
                  Custom Solutions
                </small>
              </div>

            </div>


            <div className="hero-capability">

              <span className="capability-icon">
                ◉
              </span>

              <div>
                <strong>
                  TECH SUPPORT
                </strong>

                <small>
                  Reliable Help
                </small>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero