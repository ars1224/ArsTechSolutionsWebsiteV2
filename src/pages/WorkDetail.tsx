import {
  NavLink,
  useParams
} from 'react-router-dom'

import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'
import CTA from '../components/CTA'

import { projects } from '../data/projects'
import { technologies } from '../data/technologies'

import '../styles/WorkDetail.css'


function WorkDetail() {

  const { slug } = useParams()


  const project = projects.find(
    (item) => item.slug === slug
  )


  if (!project) {
    return null
  }


const technologyAliases: Record<string, string> = {
  HTML: 'HTML5',
  CSS: 'CSS3'
}


const projectTechnologies =
  project.technologies.map(
    (technologyName) => {

      const catalogueName =
        technologyAliases[technologyName]
        ?? technologyName


      const technology =
        technologies.find(
          (item) =>
            item.name === catalogueName
        )


      return {
        name: technologyName,
        logo: technology?.logo
      }
    }
  )


  const projectUrl =
    `https://arstechsolutions.com/work/${project.slug}`


  const structuredData = [
    {
      '@context': 'https://schema.org',

      '@type': 'CreativeWork',

      name: project.title,

      headline: project.h1,

      description: project.metaDescription,

      url: projectUrl,

      creator: {
        '@type': 'Organization',

        name: 'ARS Tech Solutions',

        url: 'https://arstechsolutions.com'
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

          item:
            'https://arstechsolutions.com/'
        },

        {
          '@type': 'ListItem',

          position: 2,

          name: 'Work',

          item:
            'https://arstechsolutions.com/work'
        },

        {
          '@type': 'ListItem',

          position: 3,

          name: project.title,

          item: projectUrl
        }
      ]
    }
  ]


  return (
    <>

      {/* =========================
          SEO
      ========================= */}

      <PageMeta
        title={project.seoTitle}
        description={project.metaDescription}
        path={`/work/${project.slug}`}
      />


      <StructuredData
        data={structuredData}
      />



      {/* =========================
          HERO
      ========================= */}

      <section className="work-detail-hero">

        <div className="container work-detail-hero-container">

          <NavLink
            to="/work"
            className="work-detail-back"
          >
            ← Back to Work
          </NavLink>


          <p className="work-detail-eyebrow">
            {project.type}
          </p>


          <h1>
            {project.h1}
          </h1>


          <p className="work-detail-summary">
            {project.summary}
          </p>

        </div>

      </section>



      {/* =========================
          PROJECT IMAGE
      ========================= */}

      <section className="work-detail-media">

        <div className="container work-detail-media-container">

          <img
            src={project.image}
            alt={project.imageAlt}
            className="work-detail-image"
            loading="eager"
            decoding="async"
          />

        </div>

      </section>



      {/* =========================
          PROJECT OVERVIEW
      ========================= */}

      <section className="work-detail-section">

        <div className="container work-detail-content">

          <div className="work-detail-section-heading">

            <p className="work-detail-eyebrow">
              Project Overview
            </p>


            <h2>
              What was built?
            </h2>

          </div>


          <div className="work-detail-copy">

            <p>
              {project.overview}
            </p>

          </div>

        </div>

      </section>



      {/* =========================
          CONTRIBUTION
      ========================= */}

      <section className="work-detail-section work-detail-contribution">

        <div className="container work-detail-content">

          <div className="work-detail-section-heading">

            <p className="work-detail-eyebrow">
              Contribution
            </p>


            <h2>
              My role in the project.
            </h2>

          </div>


          <div className="work-detail-copy">

            <p>
              {project.contribution}
            </p>

          </div>

        </div>

      </section>



      {/* =========================
          KEY FEATURES
      ========================= */}

      <section className="work-detail-section">

        <div className="container">

          <div className="work-detail-section-heading">

            <p className="work-detail-eyebrow">
              Key Features
            </p>


            <h2>
              What the project includes.
            </h2>

          </div>


          <div className="work-detail-feature-grid">

            {project.highlights.map(
              (highlight, index) => (

                <article
                  className="work-detail-feature"
                  key={highlight}
                >

                  <span className="work-detail-feature-number">
                    {String(index + 1).padStart(
                      2,
                      '0'
                    )}
                  </span>


                  <p>
                    {highlight}
                  </p>

                </article>

              )
            )}

          </div>

        </div>

      </section>



  <section className="work-detail-technologies">

  <div className="container">

    <div className="work-detail-section-heading">

      <p className="work-detail-eyebrow">
        Technology
      </p>

      <h2>
        Tools and technologies used.
      </h2>

      <p className="work-detail-tech-description">
        The core technologies used to design, build and support this project.
      </p>

    </div>


    <div className="work-detail-tech-grid">

      {projectTechnologies.map(
        (technology) => (

          <div
            className="work-detail-tech-item"
            key={technology.name}
          >

            {technology.logo ? (

              <img
                src={technology.logo}
                alt={`${technology.name} logo`}
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />

            ) : (

              <div
                className="work-detail-tech-missing-logo"
                aria-hidden="true"
              >
                ?
              </div>

            )}


            <span>
              {technology.name}
            </span>

          </div>

        )
      )}

    </div>
  </div>

</section>



      {/* =========================
          RELATED SERVICES
      ========================= */}

      <section className="work-detail-section">

        <div className="container">

          <div className="work-detail-section-heading">

            <p className="work-detail-eyebrow">
              Related Services
            </p>


            <h2>
              Similar solutions for businesses.
            </h2>

          </div>


          <div className="work-detail-service-links">

            {project.relatedServices.map(
              (service) => (

                <NavLink
                  to={service.href}
                  key={service.href}
                >

                  <span>
                    {service.text}
                  </span>


                  <span aria-hidden="true">
                    →
                  </span>

                </NavLink>

              )
            )}

          </div>

        </div>

      </section>



      {/* =========================
          GITHUB
      ========================= */}

      {project.githubUrl && (

        <section className="work-detail-github">

          <div className="container work-detail-github-container">

            <div>

              <p className="work-detail-eyebrow">
                Source Code
              </p>


              <h2>
                View the project on GitHub.
              </h2>


              <p>
                Explore the repository, project
                structure and development history.
              </p>

            </div>


            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="work-detail-github-link"
            >
              View GitHub Repository
              <span>↗</span>
            </a>

          </div>

        </section>

      )}



      {/* =========================
          CTA
      ========================= */}

      <CTA
        eyebrow="Have A Similar Idea?"
        title="Need something built for your business?"
        description="Tell us what you're trying to improve, automate or create and we'll help you work out a practical way forward."
        primaryText="Request a Quote"
        primaryLink="/contact"
        secondaryText="View All Work"
        secondaryLink="/work"
      />

    </>
  )
}


export default WorkDetail
