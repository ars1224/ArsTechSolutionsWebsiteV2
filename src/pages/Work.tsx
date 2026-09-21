import Button from '../components/Button'

import '../styles/Work.css'
import PageMeta from '../components/PageMeta'


function Work() {

  const projects = [
    {
      type: 'Internal Project',
      title: 'ARS Tech Solutions Website V2',
      description:
        'A complete rebuild of the ARS Tech Solutions website using React, TypeScript and Vite, with reusable components, responsive layouts and a stronger multi-page structure.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Bootstrap',
        'CSS'
      ]
    },
    {
      type: 'Homepage Redesign Concept',
      title: 'UDI Painting & Decorating',
      description:
        'A homepage redesign concept focused on presenting services more clearly, showcasing completed work, strengthening trust and making customer enquiries easier.',
      technologies: [
        'UI/UX',
        'Responsive Design',
        'Conversion Design',
        'Web Design'
      ]
    },
    {
      type: 'Web Application',
      title: 'Wedding RSVP & Guest Manager',
      description:
        'A custom RSVP system with guest lookup, attendance responses, food selections and an administration interface for managing guests and reporting.',
      technologies: [
        'JavaScript',
        'Supabase',
        'Netlify Functions',
        'HTML',
        'CSS'
      ]
    },
    {
      type: 'Study Project',
      title: 'TaskFlow',
      description:
        'A task management web application with authentication, dashboards, task tracking, overdue monitoring, history and notifications.',
      technologies: [
        'Flask',
        'Python',
        'PostgreSQL',
        'SQLAlchemy',
        'AWS'
      ]
    }
  ]


  return (
    <>
<PageMeta
  title="Digital Solutions for New Zealand Businesses"
  description="Practical digital solutions for businesses that need stronger websites, better customer journeys, custom web systems, improved visibility or technology support."
  path="/solutions"
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


      {/* =========================
          PROJECTS
      ========================= */}

      <section className="work-projects">

        <div className="container work-projects-container">

          <div className="work-grid">

            {projects.map((project, index) => (

              <article
                className="work-card"
                key={project.title}
              >

                <div className="work-card-top">

                  <span className="work-card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="work-card-type">
                    {project.type}
                  </span>

                </div>


                <div className="work-card-content">

                  <h2>
                    {project.title}
                  </h2>

                  <p>
                    {project.description}
                  </p>

                </div>


                <div className="work-card-tech">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

              </article>

            ))}

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