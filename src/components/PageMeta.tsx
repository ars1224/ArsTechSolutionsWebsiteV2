import { Head } from 'vite-react-ssg'

type PageMetaProps = {
  title: string
  description: string
  path: string
  noIndex?: boolean
  imagePath?: string
  imageAlt?: string
}

function PageMeta({
  title,
  description,
  path,
  noIndex = false,
  imagePath = '/social-share.jpg',
  imageAlt = 'ARS Tech Solutions web design and digital solutions'
}: PageMetaProps) {
  const siteName = 'ARS Tech Solutions'
  const siteUrl = 'https://arstechsolutions.com'

  const fullTitle =
    title.includes(siteName)
      ? title
      : `${title} | ${siteName}`

  const canonicalUrl =
    path === '/'
      ? siteUrl
      : `${siteUrl}${path}`

  const imageUrl =
    imagePath.startsWith('http')
      ? imagePath
      : `${siteUrl}${
          imagePath.startsWith('/')
            ? imagePath
            : `/${imagePath}`
        }`

  return (
    <Head>
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={
          noIndex
            ? 'noindex, nofollow'
            : 'index, follow'
        }
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:locale"
        content="en_NZ"
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:image:secure_url"
        content={imageUrl}
      />

      <meta
        property="og:image:type"
        content="image/jpeg"
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:image:alt"
        content={imageAlt}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />

      <meta
        name="twitter:image:alt"
        content={imageAlt}
      />
    </Head>
  )
}

export default PageMeta