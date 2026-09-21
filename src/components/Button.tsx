import { NavLink } from 'react-router-dom'
import '../styles/Button.css'

type ButtonProps = {
  children: React.ReactNode
  to?: string
  href?: string

  variant?: 'primary' | 'secondary' | 'ghost'

  size?: 'small' | 'medium' | 'large'

  disabled?: boolean

  className?: string
}

function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = ''
}: ButtonProps) {

  const buttonClass = `
    ars-button
    ars-button--${variant}
    ars-button--${size}
    ${disabled ? 'ars-button--disabled' : ''}
    ${className}
  `

  if (to) {
    return (
      <NavLink
        to={to}
        className={buttonClass}
        aria-disabled={disabled}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
          }
        }}
      >
        {children}
      </NavLink>
    )
  }

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={buttonClass}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button