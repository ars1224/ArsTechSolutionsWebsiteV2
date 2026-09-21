import Card from './Card'
import '../styles/FeaturedProjects.css'

type Project = {
  title: string
  description: string
  image?: string
  imageAlt?: string
  link: string
  category?: string
}

type FeaturedProjectsProps = {
  projects: Project[]
}

function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="featured-projects">

      <div className="container featured-projects-container">

        <div className="featured-projects-heading">

          <div>
            <p className="featured-projects-eyebrow">
              Selected Work
            </p>

            <h2>
              Projects designed around real needs.
            </h2>
          </div>

          <a
            href="/work"
            className="featured-projects-view-all"
          >
            View All Work
            <span>→</span>
          </a>

        </div>


        <div className="featured-projects-grid">

          {projects.map((project) => (
            <Card
              key={project.title}
              variant="project"
              eyebrow={project.category}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              link={project.link}
              linkText="View Project"
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedProjects