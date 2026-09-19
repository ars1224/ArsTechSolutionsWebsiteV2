import '../styles/TechStack.css'

type Technology = {
  name: string
  logo: string
}

type TechStackProps = {
  technologies: Technology[]
}

function TechStack({ technologies }: TechStackProps) {

  const repeatedTechnologies = [
    ...technologies,
    ...technologies
  ]

  return (
    <section className="tech-stack">

      <div className="container tech-stack-container">

        <div className="tech-stack-heading">

          <p>
            Tools & Technologies
          </p>

          <h2>
            Technologies we use to build modern digital solutions.
          </h2>

          <span>
            We choose practical tools based on the needs of each project.
          </span>

        </div>

      </div>


      <div className="tech-carousel">

        <div className="tech-carousel-track">

          {repeatedTechnologies.map((technology, index) => (
            <div
              className="tech-item"
              key={`${technology.name}-${index}`}
            >

              <img
                src={technology.logo}
                alt={`${technology.name} logo`}
              />

              <span>
                {technology.name}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default TechStack