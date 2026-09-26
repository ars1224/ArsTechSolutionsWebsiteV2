import Button from '../components/Button'

import '../styles/Services.css'
import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'
import { NavLink } from 'react-router-dom'

import Partners from '../components/Partners'

import {
  createBreadcrumbSchema,
  servicesStructuredData
} from '../data/structuredData'

function Services() {

const services = [
  {
    number: '01',
    title: 'Website Design & UX/UI',
    href: '/services/website-design-ux-ui',
    description:
      'We design modern, responsive website interfaces with a strong focus on clarity, usability and your business goals.',
    features: [
      'Responsive website design',
      'UX and UI planning',
      'Mobile-first layouts',
      'Clear calls to action',
      'Business-focused page structure'
    ]
  },

  {
    number: '02',
    title: 'Website Development',
    href: '/services/website-development',
    description:
      'We build responsive business websites using modern technologies and clean development practices.',
    features: [
      'Custom frontend development',
      'Responsive layouts',
      'React-based websites',
      'WordPress development',
      'Performance-focused builds'
    ]
  },

  {
    number: '03',
    title: 'Website Redesign',
    href: '/services/website-redesign',
    description:
      'If your current website feels outdated, difficult to use or no longer represents your business properly, we can improve it.',
    features: [
      'Visual redesign',
      'Improved page structure',
      'Mobile responsiveness',
      'UX improvements',
      'Content presentation improvements'
    ]
  },

  {
    number: '04',
    title: 'Custom Web Applications',
    href: '/services/custom-web-applications',
    description:
      'We build browser-based systems and tools designed around specific workflows and business requirements.',
    features: [
      'Custom business systems',
      'Dashboards',
      'Database-driven applications',
      'User authentication',
      'Workflow automation'
    ]
  },

  {
    number: '05',
    title: 'SEO & Website Performance',
    href: '/services/seo-website-performance',
    description:
      'We improve the technical foundations of your website to support search visibility, usability and performance.',
    features: [
      'Technical SEO',
      'Metadata improvements',
      'Website performance',
      'Mobile optimisation',
      'Site structure improvements'
    ]
  },

  {
    number: '06',
    title: 'Website Care & Improvements',
    href: '/services/website-care',
    description:
      'Websites need ongoing attention. We can help with updates, fixes and improvements after launch.',
    features: [
      'Content updates',
      'Bug fixes',
      'Design improvements',
      'Performance checks',
      'General website maintenance'
    ]
  },

  {
    number: '07',
    title: 'E-commerce Websites',
    href: '/services/ecommerce-websites',
    description:
      'We can help businesses create online stores with clear product presentation and simple purchasing journeys.',
    features: [
      'Online store setup',
      'Product page design',
      'Responsive storefronts',
      'Payment integration support',
      'Store configuration'
    ]
  },

  {
    number: '08',
    title: 'Hosting, Domain & Deployment',
    href: '/services/hosting-domain-deployment',
    description:
      'We help get your website online correctly and connect the services needed to keep it accessible.',
    features: [
      'Domain connection',
      'Hosting setup',
      'DNS configuration',
      'Website deployment',
      'SSL and HTTPS setup'
    ]
  },

  {
    number: '09',
    title: 'IT Support',
    href: '/services/it-support',
    description:
      'We also provide practical technology assistance for common computer, software and setup problems.',
    features: [
      'Computer troubleshooting',
      'Software setup',
      'General technical support',
      'Device configuration',
      'Technology guidance'
    ]
  }
]



  return (
    <>
      <PageMeta
        title="Web Design & Development Services NZ"
        description="Explore website design, development, redesign, web applications, SEO, e-commerce, website care and IT support services from ARS Tech Solutions."
        path="/services"
      />

      <StructuredData
        data={
          createBreadcrumbSchema(
            'Services',
            '/services'
          )
        }
      />

      <StructuredData
        data={servicesStructuredData}
      />
      {/* =========================
          PAGE INTRO
      ========================= */}

      <section className="services-hero">

        <div className="container services-hero-container">

          <p className="services-eyebrow">
            Our Services
          </p>

          <h1>
            Practical digital solutions
            <span> built around your business.</span>
          </h1>

          <p className="services-intro">
            From business websites and redesigns to custom web
            applications and ongoing technical support, ARS Tech
            Solutions helps businesses build, improve and manage
            their digital presence.
          </p>

        </div>

      </section>

      <Partners compact />


      {/* =========================
          SERVICES
      ========================= */}

      <section className="services-list-section">

        <div className="container services-list">

          {services.map((service) => (

            <article
              className="service-row"
              key={service.title}
            >

              <div className="service-row-number">
                {service.number}
              </div>


              <div className="service-row-content">

                <h2>
                  {service.title}
                </h2>

               <p>
                {service.description}
              </p>

              <NavLink
                to={service.href}
                className="service-row-link"
              >
                Explore {service.title}
                <span aria-hidden="true">→</span>
              </NavLink>

              </div>


              <div className="service-row-features">

                <p>
                  What we can help with
                </p>

                <ul>

                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}

                </ul>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="services-cta">

        <div className="container services-cta-container">

          <div>

            <p className="services-eyebrow">
              Need Something Specific?
            </p>

            <h2>
              Not sure which service fits your project?
            </h2>

            <p>
              Tell us what you're trying to build, improve or solve
              and we can help you work out the next step.
            </p>

          </div>


          <Button
            to="/contact"
            variant="primary"
            size="large"
          >
            Request a Quote
            <span>→</span>
          </Button>

        </div>

      </section>
      

    </>
  )
}


export default Services