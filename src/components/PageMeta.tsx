import { Head } from 'vite-react-ssg'


type PageMetaProps = {
  title: string
  description: string
  path: string
  noIndex?: boolean
}


function PageMeta({
  title,
  description,
  path,
  noIndex = false
}: PageMetaProps) {

  const siteName = 'ARS Tech Solutions'

  const siteUrl =
    'https://arstechsolutions.com'


  const fullTitle =
    title.includes(siteName)
      ? title
      : `${title} | ${siteName}`


  const canonicalUrl =
    path === '/'
      ? siteUrl
      : `${siteUrl}${path}`


  return (
    <Head>

      {/* =========================
          BASIC SEO
      ========================= */}

      <title>
        {fullTitle}
      </title>


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


      {/* =========================
          OPEN GRAPH
      ========================= */}

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


      {/* =========================
          TWITTER
      ========================= */}

      <meta
        name="twitter:card"
        content="summary"
      />


      <meta
        name="twitter:title"
        content={fullTitle}
      />


      <meta
        name="twitter:description"
        content={description}
      />

    </Head>
  )
}


export default PageMeta