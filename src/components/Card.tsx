import { NavLink } from 'react-router-dom'
import '../styles/Card.css'

type CardProps = {
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
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  link,
  linkText = 'Learn More',
  variant = 'service'
}: CardProps) {
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
          >
            {linkText}
            <span>→</span>
          </NavLink>
        )}

      </div>

    </article>
  )
}

export default Card