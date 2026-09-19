import Hero from '../components/Hero'
import heroImage from '../assets/hero-ars-devices.png'
import Card from '../components/Card'
import CTA from '../components/CTA'
import TechStack from '../components/TechStack'

import photoshopLogo from '../assets/techstack/Adobe Photoshop.png'
import awsLogo from '../assets/techstack/AWS.png'
import bootstrapLogo from '../assets/techstack/Bootstrap.png'
import canvaLogo from '../assets/techstack/Canva.png'
import cloudflareLogo from '../assets/techstack/Cloudflare.png'
import cssLogo from '../assets/techstack/CSS3.png'
import figmaLogo from '../assets/techstack/Figma.png'
import flaskLogo from '../assets/techstack/Flask.png'
import gitLogo from '../assets/techstack/Git.png'
import githubLogo from '../assets/techstack/GitHub_Invertocat_White.png'
import googleCloudLogo from '../assets/techstack/Google Cloud.png'
import htmlLogo from '../assets/techstack/HTML5.png'
import javascriptLogo from '../assets/techstack/JavaScript.png'
import jsonLogo from '../assets/techstack/JSON.png'
import mysqlLogo from '../assets/techstack/MySQL.png'
import netCoreLogo from '../assets/techstack/NET core.png'
import netlifyLogo from '../assets/techstack/netlify.svg'
import nodeLogo from '../assets/techstack/Node.js.png'
import nugetLogo from '../assets/techstack/NuGet.png'
import openaiLogo from '../assets/techstack/OAI_OpenAI-Blossom_White.png'
import phpLogo from '../assets/techstack/PHP.png'
import postgresLogo from '../assets/techstack/PostgresSQL.png'
import pythonLogo from '../assets/techstack/Python.png'
import reactLogo from '../assets/techstack/React.png'
import sqliteLogo from '../assets/techstack/SQLite.png'
import supabaseLogo from '../assets/techstack/supabase.png'
import tailwindLogo from '../assets/techstack/Tailwind CSS.png'
import trelloLogo from '../assets/techstack/Trello.png'
import typescriptLogo from '../assets/techstack/TypeScript.png'
import vscodeLogo from '../assets/techstack/Visual Studio Code (VS Code).png'
import visualStudioLogo from '../assets/techstack/Visual Studio.png'
import viteLogo from '../assets/techstack/vite.svg'
import wordpressLogo from '../assets/techstack/WordPress.png'

function Home() {

  const services = [
    {
      icon: '◫',
      title: 'Website Design & UX/UI',
      description:
        'Modern, responsive interfaces designed around clarity, usability and your business goals.',
      link: '/services'
    },
    {
      icon: '</>',
      title: 'Website Development',
      description:
        'Fast, responsive business websites built using modern web technologies and clean development practices.',
      link: '/services'
    },
    {
      icon: '↻',
      title: 'Website Redesign',
      description:
        'Refresh outdated or underperforming websites with stronger design, structure and user experience.',
      link: '/services'
    },
    {
      icon: '{ }',
      title: 'Custom Web Applications',
      description:
        'Practical browser-based tools and systems created around the way your business actually works.',
      link: '/solutions'
    },
    {
      icon: '⌕',
      title: 'SEO & Website Performance',
      description:
        'Improve search visibility, website structure, speed and technical performance.',
      link: '/services'
    },
    {
      icon: '⚙',
      title: 'Website Care & Improvements',
      description:
        'Ongoing website updates, fixes, content changes and performance improvements.',
      link: '/services'
    },
    {
      icon: '⌘',
      title: 'IT Support',
      description:
        'Practical help with computers, software, troubleshooting, setup and everyday technology issues.',
      link: '/services'
    },

    {
      icon: '🛒',
      title: 'E-commerce Websites',
      description:
        'Online stores designed around clear product presentation, simple purchasing journeys and practical business needs.',
      link: '/services'
    },
    {
      icon: '☁',
      title: 'Hosting, Domain & Deployment',
      description:
        'Help getting your website online properly, including domain connection, hosting setup, deployment and configuration.',
      link: '/services'
    }
  ]

  const technologies = [
  {
    name: 'Adobe Photoshop',
    logo: photoshopLogo
  },
  {
    name: 'AWS',
    logo: awsLogo
  },
  {
    name: 'Bootstrap',
    logo: bootstrapLogo
  },
  {
    name: 'Canva',
    logo: canvaLogo
  },
  {
    name: 'Cloudflare',
    logo: cloudflareLogo
  },
  {
    name: 'CSS3',
    logo: cssLogo
  },
  {
    name: 'Figma',
    logo: figmaLogo
  },
  {
    name: 'Flask',
    logo: flaskLogo
  },
  {
    name: 'Git',
    logo: gitLogo
  },
  {
    name: 'GitHub',
    logo: githubLogo
  },
  {
    name: 'Google Cloud',
    logo: googleCloudLogo
  },
  {
    name: 'HTML5',
    logo: htmlLogo
  },
  {
    name: 'JavaScript',
    logo: javascriptLogo
  },
  {
    name: 'JSON',
    logo: jsonLogo
  },
  {
    name: 'MySQL',
    logo: mysqlLogo
  },
  {
    name: '.NET Core',
    logo: netCoreLogo
  },
  {
    name: 'Netlify',
    logo: netlifyLogo
  },
  {
    name: 'Node.js',
    logo: nodeLogo
  },
  {
    name: 'NuGet',
    logo: nugetLogo
  },
  {
    name: 'OpenAI',
    logo: openaiLogo
  },
  {
    name: 'PHP',
    logo: phpLogo
  },
  {
    name: 'PostgreSQL',
    logo: postgresLogo
  },
  {
    name: 'Python',
    logo: pythonLogo
  },
  {
    name: 'React',
    logo: reactLogo
  },
  {
    name: 'SQLite',
    logo: sqliteLogo
  },
  {
    name: 'Supabase',
    logo: supabaseLogo
  },
  {
    name: 'Tailwind CSS',
    logo: tailwindLogo
  },
  {
    name: 'Trello',
    logo: trelloLogo
  },
  {
    name: 'TypeScript',
    logo: typescriptLogo
  },
  {
    name: 'VS Code',
    logo: vscodeLogo
  },
  {
    name: 'Visual Studio',
    logo: visualStudioLogo
  },
  {
    name: 'Vite',
    logo: viteLogo
  },
  {
    name: 'WordPress',
    logo: wordpressLogo
  }
]

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

            <p>
              What We Do
            </p>

            <h2>
              Digital services built around real business needs.
            </h2>

          </div>


          <div className="card-grid">

            {services.map((service) => (
              <Card
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            ))}

          </div>

        </div>

      </section>

      <TechStack technologies={technologies} />

      <CTA
        eyebrow="Ready to Build?"
        title="Let’s create something that works for your business."
        description="Whether you need a new website, a redesign, a custom web application or practical IT support, ARS Tech Solutions can help you move forward."
        primaryText="Request a Quote"
        primaryLink="/contact"
        secondaryText="View Our Work"
        secondaryLink="/work"
      />
    </>
  )
}

export default Home 