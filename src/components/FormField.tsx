import '../styles/FormField.css'

type FormFieldProps = {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'url'
  placeholder?: string
  value?: string
  error?: string
  required?: boolean
  textarea?: boolean
  rows?: number
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  error,
  required = false,
  textarea = false,
  rows = 5,
  onChange
}: FormFieldProps) {
  const fieldId = `field-${name}`
  const errorId = `${fieldId}-error`

  return (
    <div
      className={`form-field ${
        error ? 'form-field--error' : ''
      }`}
    >
      <label
        htmlFor={fieldId}
        className="form-field__label"
      >
        {label}

        {required && (
          <span
            className="form-field__required"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>

      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          className="form-field__control form-field__textarea"
          placeholder={placeholder}
          value={value}
          rows={rows}
          required={required}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          className="form-field__control"
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        />
      )}

      {error && (
        <p
          id={errorId}
          className="form-field__error"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField