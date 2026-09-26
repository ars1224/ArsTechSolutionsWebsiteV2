import '../styles/TechStack.css'


import type { Technology } from '../data/technologies'

import '../styles/TechStack.css'


type TechStackProps = {
  technologies: Technology[]
  eyebrow?: string
  title?: string
  description?: string
}


function TechStack({
  technologies,
  eyebrow = 'Tools & Technologies',
  title = 'Technologies we use to build modern digital solutions.',
  description =
    'We choose practical tools based on the needs of each project.'
}: TechStackProps) {

  const technologiesWithLogos =
    technologies.filter(
      (
        technology
      ): technology is Technology & {
        logo: string
      } => Boolean(technology.logo)
    )


  if (technologiesWithLogos.length === 0) {
    return null
  }


  const carouselTechnologies = [
    ...technologiesWithLogos,
    ...technologiesWithLogos
  ]


  return (
    <section className="tech-stack">

      <div className="container tech-stack-container">

        <div className="tech-stack-heading">

          <p>
            {eyebrow}
          </p>

          <h2>
            {title}
          </h2>

          <span>
            {description}
          </span>

        </div>

      </div>


      <div className="tech-carousel">

        <div className="tech-carousel-track">

          {carouselTechnologies.map(
            (technology, index) => (

              <div
                className="tech-item"
                key={`${technology.name}-${index}`}
              >

                <img
                  src={technology.logo}
                  alt={`${technology.name} logo`}
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />

                <span>
                  {technology.name}
                </span>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  )
}


export default TechStack
