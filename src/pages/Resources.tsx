import Button from '../components/Button'

import '../styles/Resources.css'
import PageMeta from '../components/PageMeta'


function Resources() {

  const resources = [
    {
      number: '01',
      category: 'Website Planning',
      title: 'What should a business website include?',
      description:
        'A good business website should make it easy for visitors to understand who you are, what you offer and what they should do next.',
      points: [
        'Clear homepage message',
        'Services or solutions',
        'About your business',
        'Trust and credibility information',
        'Simple contact options',
        'Strong calls to action'
      ]
    },
    {
      number: '02',
      category: 'Website Redesign',
      title: 'When is it time to redesign your website?',
      description:
        'A website does not need a redesign just because it is old. The stronger reason is when it no longer supports your business or creates a poor experience for visitors.',
      points: [
        'Difficult to use on mobile',
        'Outdated information',
        'Confusing navigation',
        'Weak calls to action',
        'Slow loading',
        'Does not represent the business anymore'
      ]
    },
    {
      number: '03',
      category: 'SEO & Performance',
      title: 'The foundations of a search-friendly website',
      description:
        'SEO starts with a website that is structured properly, loads efficiently and clearly explains what the business provides.',
      points: [
        'Clear page titles',
        'Useful page content',
        'Logical heading structure',
        'Mobile responsiveness',
        'Good website performance',
        'Descriptive metadata'
      ]
    },
    {
      number: '04',
      category: 'Web Solutions',
      title: 'Website or custom web application?',
      description:
        'A website mainly presents information and helps customers discover your business. A web application usually performs tasks, manages data or supports a workflow.',
      points: [
        'Website: marketing and information',
        'Website: services and enquiries',
        'Web app: user accounts',
        'Web app: dashboards',
        'Web app: data management',
        'Web app: business workflows'
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

      <section className="resources-hero">

        <div className="container resources-hero-container">

          <p className="resources-eyebrow">
            Resources
          </p>

          <h1>
            Practical information for
            <span> better digital decisions.</span>
          </h1>

          <p className="resources-intro">
            Straightforward guidance about websites, digital
            solutions, SEO and technology — written to help
            businesses understand their options before making
            technical decisions.
          </p>

        </div>

      </section>


      {/* =========================
          RESOURCE GUIDES
      ========================= */}

      <section className="resources-section">

        <div className="container resources-container">

          <div className="resources-grid">

            {resources.map((resource) => (

              <article
                className="resource-card"
                key={resource.number}
              >

                <div className="resource-card-header">

                  <span className="resource-number">
                    {resource.number}
                  </span>

                  <span className="resource-category">
                    {resource.category}
                  </span>

                </div>


                <div className="resource-card-content">

                  <h2>
                    {resource.title}
                  </h2>

                  <p>
                    {resource.description}
                  </p>

                </div>


                <ul className="resource-points">

                  {resource.points.map((point) => (

                    <li key={point}>
                      <span>→</span>

                      {point}
                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          RESOURCE NOTE
      ========================= */}

      <section className="resources-note">

        <div className="container resources-note-container">

          <p className="resources-eyebrow">
            More Resources Coming
          </p>

          <h2>
            Building a useful library for New Zealand businesses.
          </h2>

          <p>
            We’ll continue adding practical guides covering
            websites, digital systems, SEO, performance and
            everyday technology decisions.
          </p>

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="resources-cta">

        <div className="container resources-cta-container">

          <div>

            <p className="resources-eyebrow">
              Need Advice For Your Business?
            </p>

            <h2>
              Have a question that isn't covered here?
            </h2>

            <p className="resources-cta-description">
              Tell us what you're trying to achieve and we can
              help you understand the practical options available.
            </p>

          </div>


          <Button
            to="/contact"
            variant="primary"
            size="large"
          >
            Ask ARS
            <span>→</span>
          </Button>

        </div>

      </section>

    </>
  )
}


export default Resources