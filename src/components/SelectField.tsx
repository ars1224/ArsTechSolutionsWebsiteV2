import '../styles/SelectField.css'

type SelectOption = {
  value: string
  label: string
}

type SelectFieldProps = {
  label: string
  name: string
  value?: string
  placeholder?: string
  options: SelectOption[]
  error?: string
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function SelectField({
  label,
  name,
  value,
  placeholder = 'Select an option',
  options,
  error,
  required = false,
  onChange
}: SelectFieldProps) {

  const fieldId = `field-${name}`
  const errorId = `${fieldId}-error`

  return (
    <div
      className={`select-field ${
        error ? 'select-field--error' : ''
      }`}
    >

      <label
        htmlFor={fieldId}
        className="select-field__label"
      >
        {label}

        {required && (
          <span
            className="select-field__required"
            aria-hidden="true"
          >
            *
          </span>
        )}
      </label>


      <div className="select-field__wrapper">

        <select
          id={fieldId}
          name={name}
          className="select-field__control"
          value={value}
          required={required}
          onChange={onChange}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        >

          <option value="">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}

        </select>

      </div>


      {error && (
        <p
          id={errorId}
          className="select-field__error"
        >
          {error}
        </p>
      )}

    </div>
  )
}

export default SelectField