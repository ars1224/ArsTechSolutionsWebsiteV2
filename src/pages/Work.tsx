import Button from '../components/Button'
import Card from '../components/Card'
import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'

import Partners from '../components/Partners'

import { projects } from '../data/projects'

import {
  createBreadcrumbSchema
} from '../data/structuredData'

import '../styles/Work.css'


function Work() {

  const featuredProjects =
    projects.filter(
      (project) => project.featured
    )


  const otherProjects =
    projects.filter(
      (project) => !project.featured
    )


  return (
    <>

      <PageMeta
        title="Web Design & Development Projects"
        description="Explore real website, web application and digital project work from ARS Tech Solutions, including business websites, redesign concepts and custom systems."
        path="/work"
      />


      <StructuredData
        data={
          createBreadcrumbSchema(
            'Work',
            '/work'
          )
        }
      />


      {/* =========================
          HERO
      ========================= */}

      <section className="work-hero">

        <div className="container work-hero-container">

          <p className="work-eyebrow">
            Selected Work
          </p>

          <h1>
            Building practical
            <span> digital experiences.</span>
          </h1>

          <p className="work-intro">
            A selection of websites, concepts and web applications
            that demonstrate how we approach design, development
            and practical digital problem solving.
          </p>

        </div>

      </section>

      <Partners compact />




      {/* =========================
          FEATURED PROJECTS
      ========================= */}

      <section className="featured-projects">

        <div className="container featured-projects-container">

          <div className="featured-projects-heading">

            <div>

              <p className="featured-projects-eyebrow">
                Featured Work
              </p>


              <h2>
                A closer look at some of our strongest projects.
              </h2>

            </div>

          </div>


          <div className="featured-projects-grid">

            {featuredProjects.map(
              (project) => (

                <Card
                  key={project.slug}
                  variant="project"
                  eyebrow={project.type}
                  title={project.title}
                  description={project.summary}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  link={`/work/${project.slug}`}
                  linkText="View Case Study"
                />

              )
            )}

          </div>

        </div>

      </section>



      {/* =========================
          MORE PROJECTS
      ========================= */}

      <section className="work-projects">

        <div className="container work-projects-container">

          <div className="work-section-heading">

            <p className="work-eyebrow">
              More Projects
            </p>


            <h2>
              More work across websites, applications and software.
            </h2>

          </div>


          <div className="work-grid">

            {otherProjects.map(
              (project) => (

                <Card
                  key={project.slug}
                  variant="project"
                  eyebrow={project.type}
                  title={project.title}
                  description={project.summary}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  link={`/work/${project.slug}`}
                  linkText="View Project"
                />

              )
            )}

          </div>

        </div>

      </section>



      {/* =========================
          PROJECT NOTE
      ========================= */}

      <section className="work-note">

        <div className="container work-note-container">

          <p className="work-eyebrow">
            More To Come
          </p>


          <h2>
            We’re continuing to build.
          </h2>


          <p>
            As new projects are completed, this portfolio will continue
            to grow with additional websites, applications and digital
            solutions.
          </p>

        </div>

      </section>



      {/* =========================
          CTA
      ========================= */}

      <section className="work-cta">

        <div className="container work-cta-container">

          <div>

            <p className="work-eyebrow">
              Have Something In Mind?
            </p>


            <h2>
              Let’s build something useful for your business.
            </h2>


            <p className="work-cta-description">
              Tell us what you want to create, improve or solve and
              we can help you work out the next step.
            </p>

          </div>


          <Button
            to="/contact"
            variant="primary"
            size="large"
          >
            Start a Conversation
            <span>→</span>
          </Button>

        </div>

      </section>

    </>
  )
}


export default Work
