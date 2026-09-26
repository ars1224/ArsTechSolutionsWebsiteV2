import { NavLink, useParams } from 'react-router-dom'

import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'

import { resources } from '../data/resources'

import '../styles/ResourceDetail.css'

function ResourceDetail() {
  const { slug } = useParams()

  const resource = resources.find(
    (item) => item.slug === slug
  )

  if (!resource) {
    return null
  }

  const resourceUrl =
    `https://arstechsolutions.com/resources/${resource.slug}`

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: resource.h1,
      description: resource.metaDescription,
      url: resourceUrl,

      author: {
        '@type': 'Organization',
        name: 'ARS Tech Solutions',
        url: 'https://arstechsolutions.com'
      },

      publisher: {
        '@type': 'Organization',
        name: 'ARS Tech Solutions',
        url: 'https://arstechsolutions.com'
      },

      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': resourceUrl
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
          name: 'Resources',
          item: 'https://arstechsolutions.com/resources'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: resource.title,
          item: resourceUrl
        }
      ]
    }
  ]

  return (
    <>
      <PageMeta
        title={resource.seoTitle}
        description={resource.metaDescription}
        path={`/resources/${resource.slug}`}
      />

      <StructuredData data={structuredData} />


      <article className="resource-detail">

        <header className="resource-detail-hero">
          <div className="container resource-detail-hero-container">

            <NavLink
              to="/resources"
              className="resource-detail-back"
            >
              ← Resources
            </NavLink>

            <p className="resource-detail-eyebrow">
              Practical Guides
            </p>

            <h1>
              {resource.h1}
            </h1>

            <p className="resource-detail-introduction">
              {resource.introduction}
            </p>

          </div>
        </header>


        <section className="resource-detail-body">
          <div className="container resource-detail-content">

            {resource.blocks.map((block, index) => {

              if (block.type === 'heading') {
                return (
                  <h2 key={index}>
                    {block.text}
                  </h2>
                )
              }

              if (block.type === 'subheading') {
                return (
                    <h3 key={index}>
                    {block.text}
                    </h3>
                )
            }

              if (block.type === 'paragraph') {
                return (
                  <p key={index}>
                    {block.text}
                  </p>
                )
              }

              if (block.type === 'list') {
                return (
                  <ul
                    className="resource-detail-list"
                    key={index}
                  >
                    {block.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }

              return null
            })}

          </div>
        </section>


        {resource.relatedResources.length > 0 && (
          <section className="resource-detail-related">
            <div className="container">

              <div className="resource-detail-heading">
                <p className="resource-detail-eyebrow">
                  Related Resources
                </p>

                <h2>
                  Keep reading
                </h2>
              </div>

              <div className="resource-detail-related-links">

                {resource.relatedResources.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className="resource-detail-related-link"
                  >
                    <span>
                      {link.text}
                    </span>

                    <span aria-hidden="true">
                      →
                    </span>
                  </NavLink>
                ))}

              </div>

            </div>
          </section>
        )}


        {resource.internalLinks.length > 0 && (
          <section className="resource-detail-services">
            <div className="container">

              <p className="resource-detail-eyebrow">
                Related Services
              </p>

              <div className="resource-detail-service-links">

                {resource.internalLinks.map((link) => (
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
        )}


        <section className="resource-detail-cta">
          <div className="container resource-detail-cta-container">

            <div>
              <p className="resource-detail-eyebrow">
                Need Help?
              </p>

              <h2>
                {resource.ctaTitle}
              </h2>
            </div>

            <NavLink
              to="/contact"
              className="btn resource-detail-primary"
            >
              {resource.ctaText}
            </NavLink>

          </div>
        </section>

      </article>
    </>
  )
}

export default ResourceDetail