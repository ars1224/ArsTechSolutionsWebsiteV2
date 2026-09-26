const siteUrl = 'https://arstechsolutions.com'

const organizationId =
  `${siteUrl}/#organization`

const websiteId =
  `${siteUrl}/#website`


export const homeStructuredData = {
  '@context': 'https://schema.org',

  '@graph': [

    {
      '@type': 'Organization',

      '@id': organizationId,

      name: 'ARS Tech Solutions',

      url: `${siteUrl}/`,

      logo: {
        '@type': 'ImageObject',

        url:
          `${siteUrl}/ars-tech-solutions-logo.png`
      },

      image:
        `${siteUrl}/social-share.jpg`,

      email:
        'contact@arstechsolutions.com',

      telephone:
        '+64 27 207 8245',

      identifier: {
        '@type': 'PropertyValue',

        propertyID: 'NZBN',

        value: '9429053837134'
      },

      address: {
        '@type': 'PostalAddress',

        addressLocality: 'Rolleston',

        addressRegion: 'Canterbury',

        addressCountry: 'NZ'
      },

      areaServed: {
        '@type': 'Country',

        name: 'New Zealand'
      },

      sameAs: [
        'https://www.facebook.com/ARStechsolutions',
        'https://www.instagram.com/ars.techsolutions/'
      ]
    },

    {
      '@type': 'WebSite',

      '@id': websiteId,

      url: `${siteUrl}/`,

      name: 'ARS Tech Solutions',

      publisher: {
        '@id': organizationId
      },

      inLanguage: 'en-NZ'
    }

  ]
}


export function createBreadcrumbSchema(
  name: string,
  path: string
) {

  return {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',

    itemListElement: [

      {
        '@type': 'ListItem',

        position: 1,

        name: 'Home',

        item: `${siteUrl}/`
      },

      {
        '@type': 'ListItem',

        position: 2,

        name,

        item: `${siteUrl}${path}`
      }

    ]
  }
}


const services = [

  'Website Design & UX/UI',

  'Website Development',

  'Website Redesign',

  'Custom Web Applications',

  'SEO & Website Performance',

  'Website Care & Improvements',

  'E-commerce Websites',

  'Hosting, Domain & Deployment',

  'IT Support'

]


export const servicesStructuredData = {
  '@context': 'https://schema.org',

  '@type': 'ItemList',

  name:
    'ARS Tech Solutions Digital Services',

  itemListElement:
    services.map(
      (service, index) => ({

        '@type': 'ListItem',

        position: index + 1,

        item: {

          '@type': 'Service',

          name: service,

          url:
            `${siteUrl}/services`,

        provider: {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'ARS Tech Solutions',
        url: `${siteUrl}/`
        },

          areaServed: {
            '@type': 'Country',

            name: 'New Zealand'
          }

        }

      })
    )
}