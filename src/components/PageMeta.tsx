import { useEffect } from 'react'


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

  useEffect(() => {

    const siteName = 'ARS Tech Solutions'
    const siteUrl = 'https://arstechsolutions.com'

    const fullTitle =
      `${title} | ${siteName}`

    const canonicalUrl =
      `${siteUrl}${path}`


    document.title = fullTitle


    function setMeta(
      selector: string,
      attribute: string,
      value: string
    ) {

      let element =
        document.head.querySelector<HTMLMetaElement>(
          selector
        )


      if (!element) {

        element =
          document.createElement('meta')

        document.head.appendChild(element)

      }


      const selectorMatch =
        selector.match(
          /\[(name|property)="([^"]+)"\]/
        )


      if (selectorMatch) {

        element.setAttribute(
          selectorMatch[1],
          selectorMatch[2]
        )

      }


      element.setAttribute(
        attribute,
        value
      )

    }


    /* =========================
       DESCRIPTION
    ========================= */

    setMeta(
      'meta[name="description"]',
      'content',
      description
    )


    /* =========================
       ROBOTS
    ========================= */

    setMeta(
      'meta[name="robots"]',
      'content',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow'
    )


    /* =========================
       OPEN GRAPH
    ========================= */

    setMeta(
      'meta[property="og:title"]',
      'content',
      fullTitle
    )

    setMeta(
      'meta[property="og:description"]',
      'content',
      description
    )

    setMeta(
      'meta[property="og:type"]',
      'content',
      'website'
    )

    setMeta(
      'meta[property="og:url"]',
      'content',
      canonicalUrl
    )

    setMeta(
      'meta[property="og:site_name"]',
      'content',
      siteName
    )


    /* =========================
       TWITTER
    ========================= */

    setMeta(
      'meta[name="twitter:card"]',
      'content',
      'summary'
    )

    setMeta(
      'meta[name="twitter:title"]',
      'content',
      fullTitle
    )

    setMeta(
      'meta[name="twitter:description"]',
      'content',
      description
    )


    /* =========================
       CANONICAL
    ========================= */

    let canonical =
      document.head.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      )


    if (!canonical) {

      canonical =
        document.createElement('link')

      canonical.rel = 'canonical'

      document.head.appendChild(canonical)

    }


    canonical.href = canonicalUrl

  }, [
    title,
    description,
    path,
    noIndex
  ])


  return null
}


export default PageMeta