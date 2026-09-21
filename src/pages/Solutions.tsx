import Button from '../components/Button'

import '../styles/Solutions.css'
import PageMeta from '../components/PageMeta'


function Solutions() {

  const solutions = [
    {
      number: '01',
      problem: 'Your business needs a professional website',
      title: 'Build a stronger online presence',
      description:
        'A professional website gives your business a place to clearly present what you do, build trust and make it easier for potential customers to contact you.',
      results: [
        'Clear business information',
        'Professional presentation',
        'Mobile-friendly experience',
        'Better enquiry opportunities'
      ]
    },
    {
      number: '02',
      problem: 'Your existing website feels outdated',
      title: 'Modernise your website',
      description:
        'An outdated website can make a good business look behind the times. We can improve the design, structure and usability while keeping what already works.',
      results: [
        'Modern visual design',
        'Improved mobile experience',
        'Clearer navigation',
        'Stronger calls to action'
      ]
    },
    {
      number: '03',
      problem: 'Your website is not generating enough enquiries',
      title: 'Improve your customer journey',
      description:
        'Sometimes the issue is not simply how a website looks. We can improve page structure, messaging and calls to action so visitors can understand what to do next.',
      results: [
        'Clearer service pages',
        'Better page structure',
        'Improved enquiry paths',
        'More focused calls to action'
      ]
    },
    {
      number: '04',
      problem: 'Your business relies on manual processes',
      title: 'Turn repetitive work into a web system',
      description:
        'Custom web applications can help organise information, simplify workflows and create practical tools around how your business operates.',
      results: [
        'Custom dashboards',
        'Data management',
        'Business workflow tools',
        'Purpose-built web systems'
      ]
    },
    {
      number: '05',
      problem: 'Customers struggle to find you online',
      title: 'Strengthen website visibility',
      description:
        'Technical improvements can help search engines understand your website while also improving speed, structure and usability for visitors.',
      results: [
        'Technical SEO improvements',
        'Metadata optimisation',
        'Performance improvements',
        'Better website structure'
      ]
    },
    {
      number: '06',
      problem: 'You want to sell products online',
      title: 'Create an online storefront',
      description:
        'We can help create an e-commerce experience that presents products clearly and makes the buying journey straightforward for customers.',
      results: [
        'Product presentation',
        'Responsive store layouts',
        'Payment setup support',
        'Simple purchasing journeys'
      ]
    },
    {
      number: '07',
      problem: 'Your website needs ongoing attention',
      title: 'Keep your website working and improving',
      description:
        'Websites are not always finished once they launch. We can help with ongoing updates, fixes and improvements as your business changes.',
      results: [
        'Content changes',
        'Bug fixes',
        'Performance improvements',
        'Ongoing website care'
      ]
    },
    {
      number: '08',
      problem: 'Technology is slowing you down',
      title: 'Get practical technology support',
      description:
        'For common computer, software and technology problems, we can help identify the issue and provide practical support.',
      results: [
        'Computer troubleshooting',
        'Software assistance',
        'Setup and configuration',
        'General technology guidance'
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

      <section className="solutions-hero">

        <div className="container solutions-hero-container">

          <p className="solutions-eyebrow">
            Digital Solutions
          </p>


          <h1>
            Start with the problem.
            <span> Build the right solution.</span>
          </h1>


          <p className="solutions-intro">
            You don’t always need to know exactly which
            technology or service you need. Tell us what is
            holding your business back and we can help identify
            a practical digital solution.
          </p>

        </div>

      </section>


      {/* =========================
          SOLUTIONS
      ========================= */}

      <section className="solutions-section">

        <div className="container solutions-container">

          {solutions.map((solution) => (

            <article
              className="solution-item"
              key={solution.number}
            >

              <div className="solution-number">
                {solution.number}
              </div>


              <div className="solution-main">

                <p className="solution-problem">
                  {solution.problem}
                </p>

                <h2>
                  {solution.title}
                </h2>

                <p className="solution-description">
                  {solution.description}
                </p>

              </div>


              <div className="solution-results">

                <p className="solution-results-title">
                  How ARS can help
                </p>

                <ul>

                  {solution.results.map((result) => (

                    <li key={result}>
                      <span>→</span>

                      {result}
                    </li>

                  ))}

                </ul>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =========================
          CTA
      ========================= */}

      <section className="solutions-cta">

        <div className="container solutions-cta-container">

          <div>

            <p className="solutions-eyebrow">
              Not Sure What You Need?
            </p>

            <h2>
              Tell us the problem. We’ll help you work out the next step.
            </h2>

            <p className="solutions-cta-description">
              You don't need to arrive with a technical specification.
              Start by explaining what you want to improve, simplify
              or build.
            </p>

          </div>


          <Button
            to="/contact"
            variant="primary"
            size="large"
          >
            Contact us
            <span>→</span>
          </Button>

        </div>

      </section>

    </>
  )
}


export default Solutions