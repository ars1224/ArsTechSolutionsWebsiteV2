import Button from '../components/Button'

import '../styles/About.css'
import PageMeta from '../components/PageMeta'

import Partners from '../components/Partners'

import StructuredData from '../components/StructuredData'


import {
  createBreadcrumbSchema
} from '../data/structuredData'


function About() {

  const values = [
    {
      number: '01',
      title: 'Practical Solutions',
      description:
        'Technology should solve a real problem. We focus on solutions that are useful, maintainable and appropriate for the business.'
    },
    {
      number: '02',
      title: 'Clear Communication',
      description:
        'We explain technical decisions in straightforward language so you understand what is being built and why.'
    },
    {
      number: '03',
      title: 'Built Around the Business',
      description:
        'Every business works differently. We aim to understand your goals, customers and processes before recommending a solution.'
    },
    {
      number: '04',
      title: 'Continuous Improvement',
      description:
        'Digital products can continue improving after launch. We support updates, fixes and improvements as requirements change.'
    }
  ]


  const process = [
    {
      number: '01',
      title: 'Understand',
      description:
        'We start by understanding your business, what you need and the problem you are trying to solve.'
    },
    {
      number: '02',
      title: 'Plan',
      description:
        'We define the structure, features and practical approach before moving into design or development.'
    },
    {
      number: '03',
      title: 'Design & Build',
      description:
        'The solution is designed and developed with responsiveness, usability and maintainability in mind.'
    },
    {
      number: '04',
      title: 'Launch & Improve',
      description:
        'Once everything is ready, we help get it online and can continue supporting improvements after launch.'
    }
  ]


  return (
    <>
        <PageMeta
          title="About ARS Tech Solutions"
          description="Learn about ARS Tech Solutions, a New Zealand digital solutions business helping businesses build stronger websites, web applications and practical technology solutions."
          path="/about"
        />

        <StructuredData
          data={
            createBreadcrumbSchema(
              'About',
              '/about'
            )
          }
        />
      {/* =========================
          HERO
      ========================= */}

      <section className="about-hero">

        <div className="container about-hero-container">

          <p className="about-eyebrow">
            About ARS Tech Solutions
          </p>

          <h1>
            Technology made
            <span> practical for business.</span>
          </h1>

          <p className="about-intro">
            ARS Tech Solutions is a New Zealand-based digital
            solutions business helping businesses create stronger
            websites, improve their online presence and build
            practical technology solutions.
          </p>

        </div>

      </section>

      <Partners compact />



      {/* =========================
          WHO WE ARE
      ========================= */}

      <section className="about-story">

        <div className="container about-story-container">

          <div className="about-story-heading">

            <p className="about-eyebrow">
              Who We Are
            </p>

            <h2>
              Digital solutions without unnecessary complexity.
            </h2>

          </div>


          <div className="about-story-content">

            <p>
              ARS Tech Solutions works with businesses that need
              practical help with websites, web applications and
              everyday technology.
            </p>

            <p>
              Our approach is to understand what the business
              actually needs before choosing the tools or technology.
              Sometimes that means building a new website. Other
              times it may mean improving an existing one, creating
              a custom system or fixing a technical problem.
            </p>

            <p>
              Based in Rolleston, Canterbury, we can work with
              businesses locally and remotely across New Zealand.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          VALUES
      ========================= */}

      <section className="about-values">

        <div className="container about-values-container">

          <div className="about-section-heading">

            <p className="about-eyebrow">
              How We Think
            </p>

            <h2>
              A practical approach to digital work.
            </h2>

          </div>


          <div className="about-values-grid">

            {values.map((value) => (

              <article
                className="about-value"
                key={value.number}
              >

                <span className="about-value-number">
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          PROCESS
      ========================= */}

      <section className="about-process">

        <div className="container about-process-container">

          <div className="about-process-heading">

            <p className="about-eyebrow">
              Our Process
            </p>

            <h2>
              From idea to working solution.
            </h2>

            <p>
              A clear process helps keep projects focused and
              makes it easier to understand what happens next.
            </p>

          </div>


          <div className="about-process-list">

            {process.map((step) => (

              <div
                className="about-process-step"
                key={step.number}
              >

                <span className="about-process-number">
                  {step.number}
                </span>

                <div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          LOCATION
      ========================= */}

      <section className="about-location">

        <div className="container about-location-container">

          <div>

            <p className="about-eyebrow">
              New Zealand
            </p>

            <h2>
              Based in Canterbury. Working across New Zealand.
            </h2>

          </div>


          <p className="about-location-description">
            ARS Tech Solutions is based in Rolleston, Canterbury.
            Local businesses can work with us directly, while
            websites and digital projects can also be delivered
            remotely for businesses throughout New Zealand.
          </p>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="about-cta">

        <div className="container about-cta-container">

          <div>

            <p className="about-eyebrow">
              Let's Work Together
            </p>

            <h2>
              Have something you want to build or improve?
            </h2>

            <p>
              Tell us what you're working on and we'll help you
              identify a practical next step.
            </p>

          </div>


          <Button
            to="/contact"
            variant="primary"
            size="large"
          >
            Get in Touch
            <span>→</span>
          </Button>

        </div>

      </section>

    </>
  )
}


export default About