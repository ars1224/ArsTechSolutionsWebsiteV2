import ReachOutBox from '../components/ReachOutBox'

import '../styles/Contact.css'
import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'



import {
  createBreadcrumbSchema
} from '../data/structuredData'


function Contact() {
  return (
    <>
        <PageMeta
          title="Contact ARS Tech Solutions"
          description="Contact ARS Tech Solutions to discuss a website, redesign, custom web application, SEO, e-commerce project or practical technology support."
          path="/contact"
        />

        <StructuredData
          data={
            createBreadcrumbSchema(
              'Contact',
              '/contact'
            )
          }
        />

      {/* =========================
          CONTACT INTRO
      ========================= */}

      <section className="contact-hero">

        <div className="container contact-hero-container">

          <p className="contact-eyebrow">
            Let’s Talk
          </p>


          <h1>
            Have a project, idea
            <br />
            or tech problem?
          </h1>


          <p className="contact-intro">
            Tell us what you’re working on and we’ll help you
            figure out the practical next step — whether that’s
            a new website, a redesign, a custom web solution or
            technology support.
          </p>

        </div>

      </section>


      {/* =========================
          REACH OUT FORM
      ========================= */}

      <ReachOutBox />


    </>
  )
}


export default Contact