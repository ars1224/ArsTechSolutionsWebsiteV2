import ReachOutBox from '../components/ReachOutBox'

import '../styles/Contact.css'
import PageMeta from '../components/PageMeta'


function Contact() {
  return (
    <>
    <PageMeta
  title="Digital Solutions for New Zealand Businesses"
  description="Practical digital solutions for businesses that need stronger websites, better customer journeys, custom web systems, improved visibility or technology support."
  path="/solutions"
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