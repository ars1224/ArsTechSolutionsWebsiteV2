import Button from './Button'
import '../styles/Hero.css'

type HeroProps = {
  eyebrow: string
  title: string
  highlightedText: string
  description: string

  primaryText: string
  primaryLink: string

  secondaryText: string
  secondaryLink: string

  image: string

  avifSrcSet?: string
  webpSrcSet?: string
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
  image,
  avifSrcSet,
  webpSrcSet
}: HeroProps) {
  return (
    <section className="hero">

      <picture
        className="hero-media"
        aria-hidden="true"
      >
        {avifSrcSet && (
          <source
            type="image/avif"
            srcSet={avifSrcSet}
            sizes="100vw"
          />
        )}

        {webpSrcSet && (
          <source
            type="image/webp"
            srcSet={webpSrcSet}
            sizes="100vw"
          />
        )}

      <img
        src={image}
        alt=""
        width={1440}
        height={810}
        sizes="100vw"
        fetchPriority="high"
        loading="eager"
        className="hero-media-image"
      />
      </picture>

      <div
        className="hero-overlay"
        aria-hidden="true"
      />
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