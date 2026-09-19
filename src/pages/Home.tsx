import Hero from '../components/Hero'
import heroImage from '../assets/hero-ars-devices.png'
import Card from '../components/Card'

function Home() {
  return (
    <>
      <Hero
        eyebrow="WEB DESIGN  •  DEVELOPMENT  •  TECH SOLUTIONS"
        title="Digital solutions built for growing"
        highlightedText="businesses."
        description="ARS Tech Solutions helps New Zealand businesses build stronger websites, improve their digital presence and create practical technology solutions."
        primaryText="Request a Quote"
        primaryLink="/contact"
        secondaryText="View Our Work"
        secondaryLink="/work"
        image={heroImage}
      />

      <section className="home-services">

        <div className="container">

          <div className="section-heading">
            <p>What We Do</p>

            <h2>
              Practical digital solutions for modern businesses.
            </h2>
          </div>


          <div className="card-grid">

            <Card
              eyebrow="Web"
              title="Business Websites"
              description="Modern, responsive websites designed to build trust, communicate clearly and support business growth."
              link="/services"
              linkText="Explore Websites"
            />

            <Card
              eyebrow="Development"
              title="Custom Web Applications"
              description="Practical web-based systems and tools designed around the way your business actually works."
              link="/solutions"
              linkText="Explore Solutions"
            />

            <Card
              eyebrow="Support"
              title="Technology Support"
              description="Straightforward technical help for businesses that need reliable support without unnecessary complexity."
              link="/services"
              linkText="Explore Support"
            />

          </div>

        </div>

      </section>
    </>
  )
}

export default Home