import { useState } from 'react'
import type { FormEvent } from 'react'

import FormField from './FormField'
import SelectField from './SelectField'
import Button from './Button'

import '../styles/ReachOutBox.css'


type FormErrors = {
  name?: string
  email?: string
  service?: string
  message?: string
}


type SubmitStatus = 'idle' | 'success' | 'error'


function ReachOutBox() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')
  const [service, setService] = useState('')
  const [website, setWebsite] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState<FormErrors>({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>('idle')


  const serviceOptions = [
    {
      value: 'website-design',
      label: 'Website Design & UX/UI'
    },
    {
      value: 'website-development',
      label: 'Website Development'
    },
    {
      value: 'website-redesign',
      label: 'Website Redesign'
    },
    {
      value: 'custom-web-application',
      label: 'Custom Web Application'
    },
    {
      value: 'seo-performance',
      label: 'SEO & Website Performance'
    },
    {
      value: 'website-care',
      label: 'Website Care & Improvements'
    },
    {
      value: 'ecommerce',
      label: 'E-commerce Website'
    },
    {
      value: 'hosting-domain',
      label: 'Hosting, Domain & Deployment'
    },
    {
      value: 'it-support',
      label: 'IT Support'
    },
    {
      value: 'not-sure',
      label: 'Not Sure Yet'
    }
  ]


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {

    event.preventDefault()

    const newErrors: FormErrors = {}


    /* =========================
       VALIDATION
    ========================= */

    if (!name.trim()) {
      newErrors.name =
        'Please enter your name.'
    }


    if (!email.trim()) {

      newErrors.email =
        'Please enter your email address.'

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

      newErrors.email =
        'Please enter a valid email address.'

    }


    if (!service) {
      newErrors.service =
        'Please select a service.'
    }


    if (!message.trim()) {
      newErrors.message =
        'Please tell us a little about your project.'
    }


    setErrors(newErrors)


    if (Object.keys(newErrors).length > 0) {
      return
    }


    /* =========================
       SUBMISSION
    ========================= */

    try {

      setIsSubmitting(true)
      setSubmitStatus('idle')


      const formData = new URLSearchParams()


      formData.append(
        'form-name',
        'ars-enquiry'
      )


      formData.append(
        'bot-field',
        ''
      )


      formData.append(
        'name',
        name.trim()
      )


      formData.append(
        'email',
        email.trim()
      )


      formData.append(
        'phone',
        phone.trim()
      )


      formData.append(
        'business',
        business.trim()
      )


      formData.append(
        'service',
        service
      )


      formData.append(
        'website',
        website.trim()
      )


      formData.append(
        'message',
        message.trim()
      )


      const response = await fetch('/', {

        method: 'POST',

        headers: {
          'Content-Type':
            'application/x-www-form-urlencoded'
        },

        body: formData.toString()

      })


      if (!response.ok) {

        throw new Error(
          'Form submission failed.'
        )

      }


      /* =========================
         SUCCESS
      ========================= */

      setSubmitStatus('success')


      /* =========================
         CLEAR FORM
      ========================= */

      setName('')
      setEmail('')
      setPhone('')
      setBusiness('')
      setService('')
      setWebsite('')
      setMessage('')

      setErrors({})

    }
    catch (error) {

      console.error(
        'ARS enquiry submission error:',
        error
      )

      setSubmitStatus('error')

    }
    finally {

      setIsSubmitting(false)

    }

  }


  return (
    <section className="reach-out-section">

      <div className="container reach-out-container">

        <div className="reach-out-box">


          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="reach-out-info">

            <p className="reach-out-eyebrow">
              Reach Out
            </p>


            <h2>
              Let’s talk about what you need.
            </h2>


            <p className="reach-out-description">
              Whether you need a new website,
              a redesign, a custom web application
              or practical technology support,
              tell us what you’re working on.
            </p>


            <div className="reach-out-contact-list">


              {/* EMAIL */}

              <div className="reach-out-contact">

                <span className="reach-out-contact-label">
                  Email
                </span>

                <a href="mailto:contact@arstechsolutions.com">
                  contact@arstechsolutions.com
                </a>

              </div>


              {/* PHONE */}

              <div className="reach-out-contact">

                <span className="reach-out-contact-label">
                  Phone / WhatsApp
                </span>

                <a href="tel:+64272078245">
                  +64 27 207 8245
                </a>

              </div>


              {/* LOCATION */}

              <div className="reach-out-contact">

                <span className="reach-out-contact-label">
                  Location
                </span>

                <span>
                  Rolleston, Canterbury, New Zealand
                </span>

              </div>

            </div>


            <div className="reach-out-note">

              <span className="reach-out-note-dot">
              </span>

              <p>
                Serving businesses across New Zealand.
              </p>

            </div>

          </div>


          {/* =========================
              FORM
          ========================= */}

          <form
            className="reach-out-form"
            onSubmit={handleSubmit}
            noValidate
          >

            <div className="reach-out-form-grid">


              {/* NAME */}

              <FormField
                label="Name"
                name="name"
                placeholder="Your name"
                value={name}
                required
                error={errors.name}
                onChange={(event) => {

                  setName(
                    event.target.value
                  )

                  if (errors.name) {

                    setErrors({
                      ...errors,
                      name: undefined
                    })

                  }

                }}
              />


              {/* EMAIL */}

              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                required
                error={errors.email}
                onChange={(event) => {

                  setEmail(
                    event.target.value
                  )

                  if (errors.email) {

                    setErrors({
                      ...errors,
                      email: undefined
                    })

                  }

                }}
              />


              {/* PHONE */}

              <FormField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="+64..."
                value={phone}
                onChange={(event) => {

                  setPhone(
                    event.target.value
                  )

                }}
              />


              {/* BUSINESS */}

              <FormField
                label="Business"
                name="business"
                placeholder="Business name"
                value={business}
                onChange={(event) => {

                  setBusiness(
                    event.target.value
                  )

                }}
              />


              {/* SERVICE */}

              <div className="reach-out-full">

                <SelectField
                  label="What do you need help with?"
                  name="service"
                  value={service}
                  placeholder="Select a service"
                  options={serviceOptions}
                  required
                  error={errors.service}
                  onChange={(event) => {

                    setService(
                      event.target.value
                    )

                    if (errors.service) {

                      setErrors({
                        ...errors,
                        service: undefined
                      })

                    }

                  }}
                />

              </div>


              {/* WEBSITE */}

              <div className="reach-out-full">

                <FormField
                  label="Existing Website"
                  name="website"
                  type="url"
                  placeholder="https://yourwebsite.co.nz"
                  value={website}
                  onChange={(event) => {

                    setWebsite(
                      event.target.value
                    )

                  }}
                />

              </div>


              {/* MESSAGE */}

              <div className="reach-out-full">

                <FormField
                  label="Tell us about your project"
                  name="message"
                  placeholder="What are you looking to build, improve or solve?"
                  textarea
                  rows={6}
                  value={message}
                  required
                  error={errors.message}
                  onChange={(event) => {

                    setMessage(
                      event.target.value
                    )

                    if (errors.message) {

                      setErrors({
                        ...errors,
                        message: undefined
                      })

                    }

                  }}
                />

              </div>

            </div>


            {/* =========================
                FORM FOOTER
            ========================= */}

            <div className="reach-out-form-footer">

              <p>
                We’ll only use your details
                to respond to your enquiry.
              </p>


              <Button
                variant="primary"
                size="large"
                disabled={isSubmitting}
              >

                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Enquiry
                    <span>→</span>
                  </>
                )}

              </Button>

            </div>


            {/* =========================
                SUCCESS MESSAGE
            ========================= */}

            {submitStatus === 'success' && (

              <div
                className="reach-out-status reach-out-status--success"
                role="status"
              >
                Thanks! Your enquiry has been
                sent successfully. We’ll get
                back to you as soon as possible.
              </div>

            )}


            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {submitStatus === 'error' && (

              <div
                className="reach-out-status reach-out-status--error"
                role="alert"
              >

                Something went wrong while
                sending your enquiry. Please
                try again or email us directly
                at{' '}

                <a href="mailto:contact@arstechsolutions.com">
                  contact@arstechsolutions.com
                </a>.

              </div>

            )}

          </form>

        </div>

      </div>

    </section>
  )
}


export default ReachOutBox