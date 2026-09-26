import { NavLink } from 'react-router-dom'
import '../styles/Card.css'

type CardProps = {
  icon?: string
  eyebrow?: string
  title: string
  description?: string

  image?: string
  imageAlt?: string

  link?: string
  linkText?: string

  variant?: 'service' | 'project' | 'resource'
}

function Card({
  icon,
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  link,
  linkText,
  variant = 'service'
}: CardProps) {

  const resolvedLinkText =
    linkText ??
    (
      variant === 'project'
        ? `View ${title}`
        : variant === 'resource'
          ? `Read ${title}`
          : `Explore ${title}`
    )

  return (
    <article className={`content-card content-card--${variant}`}>

      {image && (
        <div className="content-card__image-wrapper">
          <img
            src={image}
            alt={imageAlt}
            className="content-card__image"
          />
        </div>
      )}

      <div className="content-card__body">

        {icon && (
          <div className="content-card__icon">
            {icon}
          </div>
        )}

        {eyebrow && (
          <p className="content-card__eyebrow">
            {eyebrow}
          </p>
        )}

        <h3 className="content-card__title">
          {title}
        </h3>

        {description && (
          <p className="content-card__description">
            {description}
          </p>
        )}

        {link && (
          <NavLink
            to={link}
            className="content-card__link"
            aria-label={resolvedLinkText}
          >
            <span className="content-card__link-text">
              {resolvedLinkText}
            </span>

            <span aria-hidden="true">
              →
            </span>
          </NavLink>
        )}

      </div>

    </article>
  )
}

export default Card