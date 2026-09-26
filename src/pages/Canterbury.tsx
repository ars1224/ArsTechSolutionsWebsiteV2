import { NavLink } from 'react-router-dom'

import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'
import Button from '../components/Button'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

import {
  createBreadcrumbSchema
} from '../data/structuredData'

import '../styles/Canterbury.css'


function Canterbury() {

  const faqItems = [
    {
      question:
        'Do I need to be based in Rolleston or Christchurch to work with you?',
      answer:
        'No. While ARS Tech Solutions is based in Rolleston and enjoys working with local businesses across Canterbury, we also work remotely with businesses throughout New Zealand.'
    },

    {
      question:
        'Can we meet in person?',
      answer:
        'Yes. If you are based in Rolleston, Selwyn or Christchurch, an in-person meeting can usually be arranged when it makes sense for the project.'
    }
  ]


  return (
    <>
      <PageMeta
        title="Web Design & IT Support — Rolleston, Selwyn & Christchurch | ARS Tech Solutions"
        description="ARS Tech Solutions is based in Rolleston, Canterbury, providing website design, development and IT support to businesses across Selwyn, Christchurch and the rest of New Zealand."
        path="/canterbury"
      />


      <StructuredData
        data={
          createBreadcrumbSchema(
            'Canterbury',
            '/canterbury'
          )
        }
      />


      <div className="canterbury-page">

        {/* =========================
            HERO
        ========================= */}

        <section className="canterbury-hero">

          <div className="container">

            <p className="canterbury-eyebrow">
              Canterbury • New Zealand
            </p>


            <h1>
              Based in Rolleston. Working with businesses across Selwyn,
              Christchurch and beyond.
            </h1>


            <p>
              ARS Tech Solutions is based in Rolleston, Canterbury —
              supporting local businesses across Selwyn and Christchurch,
              while also working remotely with businesses throughout
              New Zealand.
            </p>


            <Button
              to="/contact"
              variant="primary"
              size="large"
            >
              Request a Quote
              <span>→</span>
            </Button>

          </div>

        </section>



        {/* =========================
            LOCAL SUPPORT
        ========================= */}

        <section className="canterbury-local">

          <div className="container canterbury-content-container">

            <div className="canterbury-section-heading">

              <p className="canterbury-eyebrow">
                Local Support
              </p>


              <h2>
                Why work with a local Canterbury business?
              </h2>


              <p>
                There is a difference between working with someone you can
                actually talk to and submitting a request into a queue somewhere.
                Being based in Rolleston gives local businesses a direct point of
                contact, the option to meet in person when it makes sense, and
                practical support from someone familiar with the Canterbury
                business environment.
              </p>        
              
              <NavLink
                to="/about"
                className="canterbury-about-link"
                >
                Learn more about ARS Tech Solutions
                <span>→</span>
              </NavLink>

            </div>

          </div>

        </section>


        {/* =========================
            AREAS WE SUPPORT
        ========================= */}

        <section className="canterbury-areas">

          <div className="container canterbury-content-container">

            <div className="canterbury-section-heading">

              <p className="canterbury-eyebrow">
                Areas We Support
              </p>


              <h2>
                Supporting businesses across Rolleston, Selwyn and Christchurch.
              </h2>

            </div>


            <div className="canterbury-area-grid">

              <article className="canterbury-area-card">

                <span className="canterbury-area-number">
                  01
                </span>


                <h3>
                  Rolleston
                </h3>


                <p>
                  Based right here in Rolleston, ARS Tech Solutions helps
                  local businesses build professional websites, improve their
                  online presence and solve practical technology challenges.
                </p>

              </article>



              <article className="canterbury-area-card">

                <span className="canterbury-area-number">
                  02
                </span>


                <h3>
                  Selwyn
                </h3>


                <p>
                  We support businesses throughout Selwyn, including trades,
                  professional services, retail and growing local businesses
                  that need practical digital solutions without unnecessary
                  complexity.
                </p>

              </article>



              <article className="canterbury-area-card">

                <span className="canterbury-area-number">
                  03
                </span>


                <h3>
                  Christchurch
                </h3>


                <p>
                  Christchurch businesses operate in a larger and more
                  competitive market. We help improve websites, digital
                  visibility and technical foundations so businesses can
                  present themselves more clearly online.
                </p>

              </article>

            </div>

          </div>

        </section>



        {/* =========================
            SERVICES
        ========================= */}

        <section className="canterbury-services">

          <div className="container canterbury-content-container">

            <div className="canterbury-section-heading">

              <p className="canterbury-eyebrow">
                What We Can Help With
              </p>


              <h2>
                Digital services available locally and nationwide.
              </h2>


              <p>
                Whether you are based in Canterbury or elsewhere in New Zealand,
                ARS Tech Solutions provides the same practical website,
                development and technology services.
              </p>

            </div>


            <div className="canterbury-service-links">

              <NavLink to="/services/website-design-ux-ui">
                Website Design & UX/UI
                <span>→</span>
              </NavLink>


              <NavLink to="/services/website-development">
                Website Development
                <span>→</span>
              </NavLink>


              <NavLink to="/services/website-redesign">
                Website Redesign
                <span>→</span>
              </NavLink>


              <NavLink to="/services/custom-web-applications">
                Custom Web Applications
                <span>→</span>
              </NavLink>


              <NavLink to="/services/seo-website-performance">
                SEO & Website Performance
                <span>→</span>
              </NavLink>


              <NavLink to="/services/website-care">
                Website Care & Improvements
                <span>→</span>
              </NavLink>


              <NavLink to="/services/ecommerce-websites">
                E-commerce Websites
                <span>→</span>
              </NavLink>


              <NavLink to="/services/hosting-domain-deployment">
                Hosting, Domain & Deployment
                <span>→</span>
              </NavLink>


              <NavLink to="/services/it-support">
                IT Support
                <span>→</span>
              </NavLink>

            </div>

          </div>

        </section>



        {/* =========================
            REMOTE / NATIONWIDE
        ========================= */}

        <section className="canterbury-remote">

          <div className="container canterbury-content-container">

            <div className="canterbury-remote-layout">

              <div>

                <p className="canterbury-eyebrow">
                  Across New Zealand
                </p>


                <h2>
                  Working remotely, wherever your business is based.
                </h2>

              </div>


              <div className="canterbury-remote-copy">

                <p>
                  Most of the project process — planning, design feedback,
                  development updates and technical support — works effectively
                  through email, phone and video calls.
                </p>


                <p>
                  Being based in Canterbury does not limit who we work with.
                  It simply means businesses around Rolleston, Selwyn and
                  Christchurch also have the option of more direct local support.
                </p>

              </div>

            </div>

          </div>

        </section>



        {/* =========================
            FAQ
        ========================= */}

        <FAQ
          items={faqItems}
          description="Common questions about working with ARS Tech Solutions in Canterbury and across New Zealand."
        />



        {/* =========================
            CTA
        ========================= */}

        <CTA
          eyebrow="Local or Nationwide"
          title="Based in Canterbury or elsewhere in New Zealand?"
          description="Tell us what you're planning and we'll help you understand the practical options for your website, web application or technology needs."
          primaryText="Request a Quote"
          primaryLink="/contact"
          secondaryText="View Our Work"
          secondaryLink="/work"
        />

      </div>

    </>
  )
}


export default Canterbury