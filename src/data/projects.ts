import kissWebImage from '../assets/projects/kiss-web.webp'
import nobleInnSyncImage from '../assets/projects/noble-innsync.webp'

import weddingRsvpImage from '../assets/projects/wedding-rsvp.webp'
import taskFlowImage from '../assets/projects/taskflow.webp'
import udiPaintingImage from '../assets/projects/udi-painting.webp'
import aotearoaTreasuresImage from '../assets/projects/aotearoa-treasures.webp'

export type ProjectLink = {
  text: string
  href: string
}

export type Project = {
  slug: string

  title: string

  type: string

  featured: boolean

image: string

imageAlt: string

  seoTitle: string

  metaDescription: string

  h1: string

  summary: string

  overview: string

  contribution: string

  highlights: string[]

  technologies: string[]

  relatedServices: ProjectLink[]

  githubUrl?: string
}


export const projects: Project[] = [

  /* ========================================
     KISS-WEB
  ======================================== */

  {
    slug: 'kiss-web',

    title: 'KISS-Web',


    type: 'Warehouse Management System',

    featured: true,

    image: kissWebImage,

    imageAlt: 'KISS-Web warehouse management system dashboard',

    seoTitle:
      'KISS-Web Warehouse Management System | ARS Tech Solutions',

    metaDescription:
      'A PHP and MySQL warehouse management system for inventory, pallet locations, outbound orders, picking, dispatch, transaction history and label printing.',

    h1:
      'A warehouse system built around real operational workflows.',

    summary:
      'A browser-based warehouse management system for tracking stock locations, pallets, products, outbound orders, picking, dispatch and transaction history.',

    overview:
      'KISS-Web brings day-to-day warehouse processes into one local browser-based system. It supports inventory tracking, order workflows, pallet handling, reporting and operational printing through a PHP and MySQL application.',

    contribution:
      'Designed and developed the application, including warehouse workflows, inventory features, order management, search and filtering improvements, reporting functionality and printing-related processes.',

    highlights: [
      'Stock and inventory management',
      'Pallet location tracking',
      'Product, component and raw material records',
      'Outbound order management',
      'Picking and dispatch workflows',
      'SKU and order search',
      'Transaction history',
      'PDF product and carton labels',
      'Import and export workflows',
      'Role-based operational access'
    ],

    technologies: [
      'PHP',
      'MySQL',
      'MariaDB',
      'PDO',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'TCPDF',
      'PhpSpreadsheet',
      'GitHub',
      'OpenAI'
    ],

    relatedServices: [
      {
        text: 'Custom Web Applications',
        href: '/services/custom-web-applications'
      },
      {
        text: 'Website Development',
        href: '/services/website-development'
      }
    ],

    githubUrl:
      'https://github.com/ars1224/Kiss-Web'
  },


  /* ========================================
     NOBLE INNSYNC
  ======================================== */

  {
    slug: 'noble-innsync',

    title: 'Noble InnSync',

    type: 'Team / Study Web Application',

    featured: true,

    image: nobleInnSyncImage,

    imageAlt: 'Noble InnSync hotel booking and operations management system',

    seoTitle:
      'Noble InnSync Hotel Management System | ARS Tech Solutions',

    metaDescription:
      'A Flask hotel booking and operations management prototype with guest reservations, staff workflows, payments, inventory, maintenance and reporting.',

    h1:
      'One system for hotel bookings and day-to-day operations.',

    summary:
      'A hotel booking and operations management prototype supporting guest reservations, staff workflows, inventory, maintenance, payments and management reporting.',

    overview:
      'Noble InnSync was developed as a team prototype for SD203 at Yoobee Colleges. The application combines guest-facing room booking with staff, administrator and manager workflows inside one Flask application.',

    contribution:
      'Worked as a developer on the two-person project. Contributions included application security improvements, booking and reservation workflow fixes, inventory and maintenance workflows, UI/UX refinements, pricing-related functionality, room details and deployment preparation.',

    highlights: [
      'Room availability search',
      'Guest booking workflow',
      'Reservation tracking',
      'Staff, manager and administrator roles',
      'Walk-in booking management',
      'Payment tracking',
      'Room inventory management',
      'Equipment issue reporting',
      'Maintenance workflows',
      'Activity logging',
      'Management reporting',
      'Automated application tests'
    ],

    technologies: [
      'Python',
      'Flask',
      'Flask-SQLAlchemy',
      'Flask-Login',
      'Flask-WTF',
      'SQLite',
      'SQLAlchemy',
      'Jinja2',
      'JavaScript',
      'HTML',
      'CSS',
      'GitHub',
      'OpenAI'
    ],

    relatedServices: [
      {
        text: 'Custom Web Applications',
        href: '/services/custom-web-applications'
      },
      {
        text: 'Website Development',
        href: '/services/website-development'
      },
      {
        text: 'Hosting, Domain & Deployment',
        href: '/services/hosting-domain-deployment'
      }
    ],

    githubUrl:
      'https://github.com/ars1224/Noble_InnSync'
  },




  /* ========================================
     WEDDING RSVP & GUEST MANAGER
  ======================================== */

  {
    slug: 'wedding-rsvp-guest-manager',

    title: 'Wedding RSVP & Guest Manager',

    type: 'Custom Web Application',

    featured: true,

    image: weddingRsvpImage,

imageAlt:
  'Wedding RSVP and guest management web application',

    seoTitle:
      'Wedding RSVP & Guest Manager Case Study | ARS Tech Solutions',

    metaDescription:
      'A custom RSVP and guest management application using Supabase and Netlify Functions with guest lookup, menu selections and a private administration dashboard.',

    h1:
      'Turning guest management into one practical application.',

    summary:
      'A custom RSVP system with secure guest lookup, attendance responses, food selections and a private administration interface.',

    overview:
      'The application replaces manual wedding RSVP tracking with a browser-based system that lets invited guests find their invitation, respond, review attire information and make menu selections while administrators manage guest records and reporting privately.',

    contribution:
      'Designed and developed the application, database workflow, secure guest lookup, RSVP handling, menu selection process and private guest-management dashboard.',

    highlights: [
      'Name-based guest lookup',
      'Signed guest sessions',
      'Attendance responses',
      'Menu selections',
      'Dietary information',
      'Role-specific attire information',
      'Private administration dashboard',
      'Guest creation and editing',
      'RSVP status management',
      'Catering reporting',
      'Supabase-backed data storage',
      'Serverless API functions'
    ],

    technologies: [
      'JavaScript',
      'Supabase',
      'PostgreSQL',
      'Netlify',
      'HTML',
      'CSS',
      'GitHub',
      'OpenAI'
    ],

    relatedServices: [
      {
        text: 'Custom Web Applications',
        href: '/services/custom-web-applications'
      },
      {
        text: 'Website Development',
        href: '/services/website-development'
      },
      {
        text: 'Hosting, Domain & Deployment',
        href: '/services/hosting-domain-deployment'
      }
    ],

    githubUrl:
      'https://github.com/ars1224/JadeAries'
  },


  /* ========================================
     TASKFLOW
  ======================================== */

  {
    slug: 'taskflow',

    title: 'TaskFlow',

    type: 'Study Web Application',

    featured: true,

    image: taskFlowImage,

  imageAlt:
  'TaskFlow task management application dashboard',

    seoTitle:
      'TaskFlow Task Management Application | ARS Tech Solutions',

    metaDescription:
      'A Flask and PostgreSQL task management study project with authentication, dashboards, task ownership, status tracking, history, notifications and AWS deployment.',

    h1:
      'Task management built around personal workflows.',

    summary:
      'A responsive task-management application with user accounts, dashboards, task tracking, history, notifications and personal statistics.',

    overview:
      'TaskFlow was developed for the SD204B Software Development project. It demonstrates a complete database-driven Flask application with user authentication, task ownership, lifecycle management, filtering and cloud deployment.',

    contribution:
      'Designed and developed the application, including authentication, task ownership, task lifecycle features, dashboards, history, notifications, responsive layouts, automated testing and AWS Elastic Beanstalk deployment work.',

    highlights: [
      'User registration and login',
      'Secure password hashing',
      'User-specific task ownership',
      'Task creation and editing',
      'Four task statuses',
      'Task priorities',
      'Scheduled and due dates',
      'Overdue detection',
      'Daily progress tracking',
      'Search and filtering',
      'Task history',
      'Notifications',
      'User statistics',
      'Automated testing'
    ],

    technologies: [
      'Python',
      'Flask',
      'PostgreSQL',
      'SQLAlchemy',
      'Flask-Login',
      'Flask-Migrate',
      'Alembic',
      'Jinja2',
      'Bootstrap',
      'JavaScript',
      'AWS',
      'GitHub',
      'OpenAI'
    ],

    relatedServices: [
      {
        text: 'Custom Web Applications',
        href: '/services/custom-web-applications'
      },
      {
        text: 'Hosting, Domain & Deployment',
        href: '/services/hosting-domain-deployment'
      }
    ],

    githubUrl:
      'https://github.com/ars1224/TaskFlow'
  },


  /* ========================================
     UDI PAINTING & DECORATING
  ======================================== */

  {
    slug: 'udi-painting-homepage-redesign',

    title: 'UDI Painting & Decorating',

    type: 'Homepage Redesign Concept',

    featured: true,

    image: udiPaintingImage,

imageAlt:
  'UDI Painting and Decorating homepage redesign concept',

    seoTitle:
      'UDI Painting Homepage Redesign | ARS Tech Solutions',

    metaDescription:
      'A homepage redesign concept for UDI Painting & Decorating focused on clearer services, trust signals, project presentation and easier enquiries.',

    h1:
      'A clearer homepage built around trust and enquiries.',

    summary:
      'A homepage redesign concept focused on presenting services clearly, showcasing completed work and making customer enquiries easier.',

    overview:
      'The concept explores how the homepage of a painting and decorating business could communicate services more clearly, improve visual hierarchy and give prospective customers stronger pathways to make contact.',

    contribution:
      'Reviewed the existing digital presence and created a redesigned homepage concept focused on UX, service clarity, trust, visual hierarchy and conversion-oriented calls to action.',

    highlights: [
      'Homepage information architecture',
      'Clear service presentation',
      'Responsive layout planning',
      'Portfolio presentation',
      'Trust-focused content structure',
      'Improved calls to action'
    ],

    technologies: [
      'Figma',
      'Photoshop',
      'OpenAI'
    ],

    relatedServices: [
      {
        text: 'Website Design & UX/UI',
        href: '/services/website-design-ux-ui'
      },
      {
        text: 'Website Redesign',
        href: '/services/website-redesign'
      }
    ]
  },


  /* ========================================
     AOTEAROA TREASURES
  ======================================== */

  {
    slug: 'aotearoa-treasures-inventory-system',

    title: 'Aotearoa Treasures Inventory System',

    type: 'Team / Study Software Project',

    featured: true,

    image: aotearoaTreasuresImage,

imageAlt:
  'Aotearoa Treasures inventory management system',

    seoTitle:
      'Aotearoa Treasures Inventory System | ARS Tech Solutions',

    metaDescription:
      'A C++ and SQLite inventory management study project covering stock, point of sale, employees, rosters, authentication and business reporting.',

    h1:
      'Managing stock, sales and staff through one system.',

    summary:
      'A C++ inventory management application designed to manage stock, point-of-sale operations, employees, rosters and reporting across multiple branches.',

    overview:
      'Aotearoa Treasures was developed as a team project for SD103 Integrated Studio at Yoobee College. The system models inventory and operational workflows across Auckland, Christchurch and Wellington branches.',

    contribution:
      'Worked as a developer and stakeholder representative with responsibility focused on database integration, authentication and reporting functionality.',

    highlights: [
      'Multi-branch inventory management',
      'Stock quantity validation',
      'Point-of-sale workflow',
      'Cart and receipt functionality',
      'Employee management',
      'Authentication roles',
      'Staff roster management',
      'Sales reporting',
      'Stock movement reporting',
      'Low-stock reporting',
      'SQLite database integration'
    ],

    technologies: [
      'C++',
      'SQLite',
      'Visual Studio',
      'Git',
      'GitHub'
    ],

    relatedServices: [
      {
        text: 'Custom Web Applications',
        href: '/services/custom-web-applications'
      }
    ],

    githubUrl:
      'https://github.com/ars1224/Aotearoa-Treasures--inventory-management-system-'
  }

]