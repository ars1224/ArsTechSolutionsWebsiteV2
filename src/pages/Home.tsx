import hero720Avif from '../assets/optimized/hero-ars-devices-720.avif'
import hero1080Avif from '../assets/optimized/hero-ars-devices-1080.avif'
import hero1440Avif from '../assets/optimized/hero-ars-devices-1440.avif'

import hero720Webp from '../assets/optimized/hero-ars-devices-720.webp'
import hero1080Webp from '../assets/optimized/hero-ars-devices-1080.webp'
import hero1440Webp from '../assets/optimized/hero-ars-devices-1440.webp'

import Hero from '../components/Hero'

import Card from '../components/Card'
import CTA from '../components/CTA'
import TechStack from '../components/TechStack'

import FAQ from '../components/FAQ'
import FeaturedProjects from '../components/FeaturedProjects'
import PageMeta from '../components/PageMeta'
import StructuredData from '../components/StructuredData'
import {
  homeStructuredData
} from '../data/structuredData'
import { technologies } from '../data/technologies'


import Partners from '../components/Partners'


function Home() {

 const services = [
  {
    icon: '◫',
    title: 'Website Design & UX/UI',
    description:
      'Modern, responsive interfaces designed around clarity, usability and your business goals.',
    link: '/services/website-design-ux-ui',
    linkText: 'Explore Website Design'
  },
  {
    icon: '</>',
    title: 'Website Development',
    description:
      'Fast, responsive business websites built using modern web technologies and clean development practices.',
    link: '/services/website-development',
    linkText: 'Explore Website Development'
  },
  {
    icon: '↻',
    title: 'Website Redesign',
    description:
      'Refresh outdated or underperforming websites with stronger design, structure and user experience.',
     link: '/services/website-redesign',
    linkText: 'See Redesign Services'
  },
  {
    icon: '{ }',
    title: 'Custom Web Applications',
    description:
      'Practical browser-based tools and systems created around the way your business actually works.',
    link: '/services/custom-web-applications',
    linkText: 'Explore Custom Web Applications'
  },
  {
    icon: '⌕',
    title: 'SEO & Website Performance',
    description:
      'Improve search visibility, website structure, speed and technical performance.',
    link: '/services/seo-website-performance',
    linkText: 'Explore SEO & Performance'
  },
  {
    icon: '⚙',
    title: 'Website Care & Improvements',
    description:
      'Ongoing website updates, fixes, content changes and performance improvements.',
     link: '/services/website-care',
    linkText: 'Explore Website Care'
  },
  {
    icon: '⌘',
    title: 'IT Support',
    description:
      'Practical help with computers, software, troubleshooting, setup and everyday technology issues.',
     link: '/services/it-support',
    linkText: 'Explore IT Support'
  },
  {
    icon: '🛒',
    title: 'E-commerce Websites',
    description:
      'Online stores designed around clear product presentation, simple purchasing journeys and practical business needs.',
    link: '/services/ecommerce-websites',
    linkText: 'Explore E-commerce Websites'
  },
  {
    icon: '☁',
    title: 'Hosting, Domain & Deployment',
    description:
      'Help getting your website online properly, including domain connection, hosting setup, deployment and configuration.',
    link: '/services/hosting-domain-deployment',
    linkText: 'Explore Hosting & Deployment'
  }
]

const faqItems = [
  {
    question: 'What types of websites do you build?',
    answer:
      'ARS Tech Solutions builds business websites, redesigned websites, e-commerce websites and custom web-based solutions based on the needs of each project.'
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. We can review your current website and improve its design, structure, responsiveness, usability and overall presentation.'
  },
  {
    question: 'Do you build custom web applications?',
    answer:
      'Yes. We can build practical browser-based systems and tools designed around specific business workflows and requirements.'
  },
  {
    question: 'Do you provide SEO services?',
    answer:
      'We can improve technical SEO, website structure, performance, metadata, mobile usability and other on-site factors that support search visibility.'
  },
  {
    question: 'Do you offer ongoing website support?',
    answer:
      'Yes. Website care can include updates, fixes, content changes, improvements and general maintenance depending on what your website needs.'
  },
  {
    question: 'Do you provide IT support as well?',
    answer:
      'Yes. ARS Tech Solutions also provides practical help with computers, software setup, troubleshooting and other everyday technology issues.'
  },
  {
    question: 'Can you work with businesses outside Canterbury?',
    answer:
      'Yes. ARS Tech Solutions can work remotely with businesses across New Zealand while also supporting local businesses in Canterbury.'
  }
]

const projects = [
  {
    category: 'Business Website',
    title: 'Business Website Project',
    description:
      'A responsive website focused on clearer services, stronger presentation and easier customer enquiries.',
    link: '/work'
  },
  {
    category: 'Web Application',
    title: 'Custom Web Application',
    description:
      'A practical browser-based system built around real workflows, data and user requirements.',
    link: '/work'
  }
]


  return (
    
    <>

      <PageMeta
        title="Web Design, Development & Digital Solutions NZ"
        description="ARS Tech Solutions builds modern websites, web apps and practical digital solutions for businesses across New Zealand."
        path="/"
      />

      <StructuredData
        data={homeStructuredData}
      />

      <Hero
        eyebrow="WEB DESIGN  •  DEVELOPMENT  •  TECH SOLUTIONS"
        title="Digital solutions built for growing"
        highlightedText="businesses."
        description="From new websites to custom tools, ARS Tech Solutions helps New Zealand businesses show up better online and run more efficiently — without unnecessary complexity."
        primaryText="Request a Quote"
        primaryLink="/contact"
        secondaryText="View Our Work"
        secondaryLink="/work"

        image={hero1440Webp}

        avifSrcSet={`
          ${hero720Avif} 720w,
          ${hero1080Avif} 1080w,
          ${hero1440Avif} 1440w
        `}

        webpSrcSet={`
          ${hero720Webp} 720w,
          ${hero1080Webp} 1080w,
          ${hero1440Webp} 1440w
        `}
      />

      <Partners />



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
                linkText={service.linkText}
              />
            ))}

          </div>

        </div>

      </section>

      <FeaturedProjects projects={projects} />

      <TechStack technologies={technologies} />

      <FAQ
        items={faqItems}
        description="A few common questions about working with ARS Tech Solutions."
      />

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