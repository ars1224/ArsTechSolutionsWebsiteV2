import {NavLink, useParams } from 'react-router-dom'

import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'
import FAQ from '../components/FAQ'

import { services } from '../data/services'

import '../styles/ServiceDetail.css'

function ServiceDetail() {
  const { slug } = useParams()

  const service = services.find(
    (item) => item.slug === slug
  )

  if (!service) {
      return null
  }

  const serviceUrl =
    `https://arstechsolutions.com/services/${service.slug}`

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.metaDescription,
      url: serviceUrl,
      provider: {
        '@type': 'Organization',
        name: 'ARS Tech Solutions',
        url: 'https://arstechsolutions.com'
      },
      areaServed: {
        '@type': 'Country',
        name: 'New Zealand'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://arstechsolutions.com/'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://arstechsolutions.com/services'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: service.title,
          item: serviceUrl
        }
      ]
    }
  ]

  return (
    <>
      <PageMeta
        title={service.seoTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />

      <StructuredData data={structuredData} />

      <section className="service-detail-hero">
        <div className="container service-detail-hero-container">

          <p className="service-detail-eyebrow">
            {service.title}
          </p>

          <h1>
            {service.h1}
          </h1>

          <p className="service-detail-hero-copy">
            {service.heroCopy}
          </p>

          <NavLink
            to="/contact"
            className="btn service-detail-primary"
          >
            Request a Quote
          </NavLink>

        </div>
      </section>


      <section className="service-detail-section">
        <div className="container service-detail-grid">

          <div>
            <p className="service-detail-label">
              Who It Is For
            </p>

            <h2>
              Built around real business needs.
            </h2>
          </div>

          <ul className="service-detail-list">
            {service.whoItIsFor.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>

        </div>
      </section>


      <section className="service-detail-section service-detail-section-alt">
        <div className="container service-detail-grid">

          <div>
            <p className="service-detail-label">
              Problems It Solves
            </p>

            <h2>
              Common issues this service addresses.
            </h2>
          </div>

          <ul className="service-detail-list">
            {service.problems.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>

        </div>
      </section>


      <section className="service-detail-section">
        <div className="container service-detail-content">

          <p className="service-detail-label">
            What ARS Provides
          </p>

          <h2>
            A practical approach from planning to delivery.
          </h2>

          <p>
            {service.whatWeProvide}
          </p>

        </div>
      </section>


      <section className="service-detail-section service-detail-section-alt">
        <div className="container service-detail-grid">

          <div>
            <p className="service-detail-label">
              Business Benefits
            </p>

            <h2>
              What this means for your business.
            </h2>
          </div>

          <ul className="service-detail-list">
            {service.benefits.map((benefit) => (
              <li key={benefit}>
                {benefit}
              </li>
            ))}
          </ul>

        </div>
      </section>


      <section className="service-detail-section">
        <div className="container">

          <div className="service-detail-heading">
            <p className="service-detail-label">
              What’s Included
            </p>

            <h2>
              Core website design services.
            </h2>
          </div>

          <div className="service-detail-included-grid">
            {service.included.map((item) => (
              <div
                className="service-detail-included-item"
                key={item}
              >
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className="service-detail-section service-detail-section-alt">
        <div className="container">

          <div className="service-detail-heading">
            <p className="service-detail-label">
              Process
            </p>

            <h2>
              How we approach the work.
            </h2>
          </div>

          <ol className="service-detail-process">
            {service.process.map((step) => (
              <li key={step}>
                <p>{step}</p>
              </li>
            ))}
          </ol>

          <NavLink
            to="/about"
            className="service-detail-text-link"
          >
            See our full process →
          </NavLink>

        </div>
      </section>


      {service.relatedWork && (
        <section className="service-detail-section">
          <div className="container">

            <div className="service-detail-heading">
              <p className="service-detail-label">
                Related Work
              </p>

              <h2>
                See the approach in practice.
              </h2>
            </div>

            <div className="service-detail-related-grid">

              {service.relatedWork.map((project) => (
                <article
                  className="service-detail-related-card"
                  key={project.title}
                >

                  <h3>
                    {project.title}
                  </h3>

                  {project.description && (
                    <p>
                      {project.description}
                    </p>
                  )}

                  <NavLink to={project.href}>
                    View Project →
                  </NavLink>

                </article>
              ))}

            </div>

          </div>
        </section>
      )}


      <FAQ
        items={service.faqs}
        description={`Common questions about ${service.title}.`}
      />


      <section className="service-detail-links">
        <div className="container">

          <p className="service-detail-label">
            Related Services
          </p>

          <div className="service-detail-link-list">
            {service.internalLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
              >
                {link.text}
              </NavLink>
            ))}
          </div>

        </div>
      </section>


      <section className="service-detail-cta">
        <div className="container service-detail-cta-container">

          <div>
            <p className="service-detail-label">
              Ready to Talk?
            </p>

            <h2>
              {service.ctaTitle}
            </h2>
          </div>

          <NavLink
            to="/contact"
            className="btn service-detail-primary"
          >
            {service.ctaText}
          </NavLink>

        </div>
      </section>
    </>
  )
}

export default ServiceDetail