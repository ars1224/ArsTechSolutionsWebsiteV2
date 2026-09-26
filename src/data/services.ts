export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceLink = {
  text: string
  href: string
}

export type RelatedWork = {
  title: string
  description?: string
  href: string
}

export type ServiceData = {
  slug: string
  title: string
  seoTitle: string
  metaDescription: string
  h1: string
  heroCopy: string

  whoItIsFor: string[]
  problems: string[]

  whatWeProvide: string
  benefits: string[]
  included: string[]

  process: string[]

  relatedWork?: RelatedWork[]

  faqs: ServiceFaq[]

  ctaTitle: string
  ctaText: string

  internalLinks: ServiceLink[]
}

export const services: ServiceData[] = [
  {
    slug: 'website-design-ux-ui',

    title: 'Website Design & UX/UI',

    seoTitle:
      'Website Design & UX/UI Services NZ | ARS Tech Solutions',

    metaDescription:
      'Clear, responsive website design and UX/UI for New Zealand businesses. ARS Tech Solutions designs interfaces built around usability and real customer journeys.',

    h1:
      'Website design that makes sense to your customers.',

    heroCopy:
      'A website only delivers results when visitors can use it with ease. We create responsive, intuitive interfaces for New Zealand businesses—built for clarity, usability, and the outcomes that matter most to your customers, not just the latest trends.',

    whoItIsFor: [
      'Businesses launching a first website and want it done properly from the start',
      'Businesses whose current site looks fine but visitors still struggle to find what they need',
      'Businesses expanding services or locations and need a structure that can grow with them'
    ],

    problems: [
      'Visitors land on the site and aren’t sure what the business actually offers',
      'Navigation is cluttered or inconsistent across devices',
      'Forms, menus or calls to action are hard to find on mobile',
      'Design decisions were made without considering how customers actually browse'
    ],

    whatWeProvide:
      'We plan your site structure before any visual design starts—mapping out what each page needs to do and how visitors move through it. From there, we design responsive layouts that work properly on phones, tablets and desktops, with navigation and calls to action placed where people actually look for them.',

    benefits: [
      'Visitors understand what you offer faster, reducing drop-off',
      'A consistent experience across every device',
      'Fewer support queries caused by confusing navigation',
      'A stronger first impression for people researching you online',
      'A structure that supports new pages later without a full redesign'
    ],

    included: [
      'Responsive website design',
      'UX and information architecture planning',
      'Mobile-first layouts',
      'Clear calls to action',
      'Business-focused page structure'
    ],

    process: [
      'Understand what your customers need to find quickly, and what isn’t working now.',
      'Plan the structure and layout before any visual design begins.',
      'Design and build responsive pages, tested across devices.'
    ],

    relatedWork: [
      {
        title: 'UDI Painting & Decorating',
        description:
          'See how this approach applied to a real homepage redesign.',
        href: '/work'
      }
    ],

    faqs: [
      {
        question: 'How long does website design take?',
        answer:
          'It depends on the size and complexity of the site, but we’ll give you a realistic timeframe once we understand what you need.'
      },
      {
        question: 'Do you design for mobile as well as desktop?',
        answer:
          'Yes, every site we design is responsive and tested across phone, tablet and desktop.'
      },
      {
        question:
          'Can you redesign my current website instead of starting from scratch?',
        answer:
          'Yes, we can review what you have and improve the design and usability rather than rebuilding everything.'
      },
      {
        question:
          'Do I need to know exactly what I want before we start?',
        answer:
          'No. Part of the process is working out what your website actually needs to do before we design anything.'
      }
    ],

    ctaTitle:
      'Have a website that needs a clearer design?',

    ctaText:
      'Request a Quote',

    internalLinks: [
      {
        text: 'Website Redesign',
        href: '/services/website-redesign'
      },
      {
        text: 'Our Process',
        href: '/about'
      }
    ]
  },

  {
  slug: 'website-development',

  title: 'Website Development',

  seoTitle:
    'Website Development Services NZ | ARS Tech Solutions',

  metaDescription:
    'Custom website development for New Zealand businesses — fast, responsive builds using modern technologies like React and WordPress, built for performance and easy management.',

  h1:
    'Websites built properly, not just quickly.',

  heroCopy:
    'A good-looking website is useless if it loads slowly or fails on mobile. We deliver responsive, high-performance websites for New Zealand businesses—using the right technology for your needs, not just the most convenient platform available.',

  whoItIsFor: [
    'Businesses that need a new website built from a design or from scratch',
    'Businesses whose current site is slow, hard to update, or not mobile-friendly',
    'Businesses that want a site they or ARS can maintain and extend later without starting over'
  ],

  problems: [
    'The current site is slow to load, especially on mobile',
    'Basic content updates require a developer every time',
    'The site was built years ago and doesn’t reflect how the business works now',
    'Choosing between a custom build and a platform like WordPress feels confusing'
  ],

  whatWeProvide:
    'We build responsive websites using modern frontend practices—custom-coded for full control and performance, or WordPress-based when a content-managed platform genuinely fits the business better. Either way, we plan the build around real usability and solid technical foundations, not just visual polish.',

  benefits: [
    'Faster page loads, especially on mobile connections',
    'A site that displays correctly across devices and browsers',
    'A technical foundation that supports SEO rather than working against it',
    'Easier ongoing updates, depending on the platform used',
    'Fewer bugs and broken layouts down the track'
  ],

  included: [
    'Custom frontend development',
    'Responsive layouts',
    'React-based websites',
    'WordPress development',
    'Performance-focused builds'
  ],

  process: [
    'Confirm the design, content and functionality the site needs to support.',
    'Choose the right technical approach — custom-built or WordPress — for the business.',
    'Build, test across devices, and prepare for launch.'
  ],

  relatedWork: [
    {
      title: 'ARS Tech Solutions Website V2',
      description:
        'A modern custom-built business website created with React, TypeScript and static site generation.',
      href: '/work'
    }
  ],

  faqs: [
    {
      question: 'Do you build with WordPress or custom code?',
      answer:
        'Both, depending on what suits the business. We’ll recommend an approach once we understand how the site needs to be managed and used.'
    },
    {
      question: 'Will my website work properly on mobile?',
      answer:
        'Yes, every site we build is responsive and tested across devices.'
    },
    {
      question: 'Can you build a website from a design I already have?',
      answer:
        'Yes, we can develop from an existing design, or handle design and development together.'
    },
    {
      question: 'Do you offer ongoing updates after the site is built?',
      answer:
        'Yes, through Website Care & Improvements.'
    }
  ],

  ctaTitle:
    'Need a website built properly, not just quickly?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Website Design & UX/UI',
      href: '/services/website-design-ux-ui'
    },
    {
      text: 'Website Care & Improvements',
      href: '/services/website-care'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},
{
  slug: 'website-redesign',

  title: 'Website Redesign',

  seoTitle:
    'Website Redesign Services NZ | ARS Tech Solutions',

  metaDescription:
    'Refresh an outdated or underperforming website. ARS Tech Solutions redesigns business websites for stronger design, structure and usability across New Zealand.',

  h1:
    'Give your outdated website a reason to convert again.',

  heroCopy:
    'Not every website issue requires a full rebuild. If your site looks outdated, is difficult to use, or no longer matches your business, a targeted redesign can address problem areas—while preserving what already works for you.',

  whoItIsFor: [
    'Businesses whose website was built years ago and hasn’t kept pace with the business',
    'Businesses getting traffic but few enquiries, because the site is confusing or slow',
    'Businesses that like their branding but know the website itself needs work'
  ],

  problems: [
    'The site looks and feels outdated compared to competitors',
    'Visitors bounce because navigation or layout is confusing',
    'The site isn’t properly responsive on mobile',
    'Content is outdated or no longer matches current services',
    'Calls to action are weak or hard to find'
  ],

  whatWeProvide:
    'We start by reviewing your current website honestly — what’s working, what isn’t, and why. From there, we improve the design, structure, and content presentation while keeping what’s already serving the business well, rather than rebuilding everything unnecessarily.',

  benefits: [
    'A website that better reflects how the business operates today',
    'Improved usability, especially on mobile',
    'Clearer paths to enquiry or purchase for visitors',
    'Reduced bounce caused by outdated design or confusing structure',
    'A stronger overall impression for new visitors'
  ],

  included: [
    'Visual redesign',
    'Improved page structure',
    'Mobile responsiveness',
    'UX improvements',
    'Content presentation improvements'
  ],

  process: [
    'Review the current website and identify what’s not working.',
    'Plan the improved structure, design direction and content changes.',
    'Rebuild the affected areas, test across devices, and launch.'
  ],

  relatedWork: [
    {
      title: 'UDI Painting & Decorating',
      description:
        'See a real homepage redesign concept.',
      href: '/work'
    }
  ],

  faqs: [
    {
      question:
        'Do I need a full rebuild, or can you redesign parts of my site?',
      answer:
        'Often just the weaker areas need attention. We assess what genuinely needs to change rather than rebuilding everything by default.'
    },
    {
      question:
        'Will a redesign affect my current search rankings?',
      answer:
        'We take care to preserve what’s working from an SEO perspective during a redesign — see SEO & Website Performance for more.'
    },
    {
      question:
        'How do I know if it’s time to redesign rather than keep my current site?',
      answer:
        'If it’s hard to use on mobile, has outdated content, or no longer represents the business well, it’s usually worth a review.'
    },
    {
      question:
        'Can you work with my existing branding?',
      answer:
        'Yes, a redesign doesn’t require changing your branding unless you want to.'
    }
  ],

  ctaTitle:
    'Think your website needs a refresh?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'SEO & Website Performance',
      href: '/services/seo-website-performance'
    },
    {
      text: 'Website Development',
      href: '/services/website-development'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},

{
  slug: 'custom-web-applications',

  title: 'Custom Web Applications',

  seoTitle:
    'Custom Web Application Development NZ | ARS Tech Solutions',

  metaDescription:
    'Custom browser-based systems for New Zealand businesses — dashboards, workflow tools and database-driven applications built around real requirements.',

  h1:
    'Software built around how your business actually works.',

  heroCopy:
    'A website shares information. A web application gets real work done—managing data, automating tasks, or streamlining workflows that are stuck in spreadsheets and manual processes. We develop browser-based systems tailored to your business processes.',

  whoItIsFor: [
    'Businesses running processes manually that a simple system could handle',
    'Businesses that need a tool with logins, dashboards or data management',
    'Businesses whose workflow doesn’t fit an off-the-shelf product'
  ],

  problems: [
    'Manual processes eat up time that could go elsewhere',
    'Spreadsheets have become the unofficial system of record and are getting unwieldy',
    'Off-the-shelf software doesn’t quite fit how the business operates',
    'Staff or customers need a simple way to submit, track or manage information online'
  ],

  whatWeProvide:
    'We design and build browser-based systems around the specific workflow, data, and users involved — from a simple tool with a single form and dashboard to systems with authentication, reporting, and automation.',

  benefits: [
    'Less time spent on manual, repetitive tasks',
    'Data kept in one place instead of scattered across spreadsheets',
    'A tool shaped around how the business actually works, not a generic template',
    'Room to expand functionality as requirements grow'
  ],

  included: [
    'Custom business systems',
    'Dashboards',
    'Database-driven applications',
    'User authentication',
    'Workflow automation'
  ],

  process: [
    'Understand the workflow, data and users the system needs to support.',
    'Plan the features, structure and technical approach.',
    'Build, test with real scenarios, and launch.'
  ],

  relatedWork: [
    {
      title: 'Wedding RSVP & Guest Manager',
      description:
        'Guest lookup, responses and an admin interface.',
      href: '/work'
    },
    {
      title: 'TaskFlow',
      description:
        'Task management with authentication, dashboards and reporting.',
      href: '/work'
    }
  ],

  faqs: [
    {
      question:
        'What counts as a “custom web application” rather than a website?',
      answer:
        'If it needs logins, manages data, or performs a task rather than just presenting information, it’s a web application.'
    },
    {
      question:
        'Do you build systems with user accounts and logins?',
      answer:
        'Yes, including authentication and role-based access where needed.'
    },
    {
      question:
        'Can you build something that replaces a spreadsheet we currently use?',
      answer:
        'Often, yes — this is one of the more common reasons businesses come to us for a custom system.'
    },
    {
      question:
        'What technology do you build with?',
      answer:
        'It depends on the project; we choose the stack that fits the requirements rather than defaulting to one platform.'
    }
  ],

  ctaTitle:
    'Stuck managing things manually?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Hosting, Domain & Deployment',
      href: '/services/hosting-domain-deployment'
    },
    {
      text: 'Website Development',
      href: '/services/website-development'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},

{
  slug: 'seo-website-performance',

  title: 'SEO & Website Performance',

  seoTitle:
    'SEO & Website Performance Services NZ | ARS Tech Solutions',

  metaDescription:
    'Technical SEO and website performance improvements for New Zealand businesses — better site structure, speed, metadata and mobile usability to support search visibility.',

  h1:
    'A website that’s easy for search engines to understand.',

  heroCopy:
    'Effective SEO begins before content creation—with a website that is structured for search, loads quickly, and clearly communicates its purpose to search engines. We prioritise these technical essentials, laying the groundwork for all your future SEO efforts.',

  whoItIsFor: [
    'Businesses with a website that isn’t showing up in search results',
    'Businesses whose site is slow, especially on mobile',
    'Businesses that suspect their site has technical issues but aren’t sure what they are',
    'Businesses building a new site who want SEO considered from the start, not bolted on after'
  ],

  problems: [
    'The website doesn’t appear for searches it reasonably should',
    'Pages load slowly, particularly on mobile connections',
    'Titles, descriptions and headings are missing, generic or duplicated across pages',
    'The site structure makes it hard for search engines or visitors to find key pages',
    'Mobile usability issues are quietly costing search visibility'
  ],

  whatWeProvide:
    'We review your website’s technical foundations—structure, metadata, performance, and mobile usability—and fix what’s holding it back. This gives your site a fair chance to be found, not a guaranteed outcome.',

  benefits: [
    'Improved chances of appearing in relevant search results',
    'Faster page loads, which also improves the visitor experience',
    'Clearer signals to search engines about what each page is about',
    'A mobile experience that doesn’t work against your visibility',
    'A technical foundation that supports content and marketing efforts going forward'
  ],

  included: [
    'Technical SEO',
    'Metadata improvements',
    'Website performance',
    'Mobile optimisation',
    'Site structure improvements'
  ],

  process: [
    'Review the site’s current technical SEO and performance.',
    'Identify and prioritise the issues actually holding it back.',
    'Implement fixes and confirm improvements.'
  ],

  faqs: [
    {
      question:
        'Can you guarantee first-page rankings?',
      answer:
        'No one legitimately can. We can fix the technical issues that are realistically holding your site back.'
    },
    {
      question:
        'What’s the difference between technical SEO and content SEO?',
      answer:
        'Technical SEO is the structural and performance side of the site; content SEO is about what’s actually written on the pages. We focus on the technical foundations here.'
    },
    {
      question:
        'Is this a one-off fix or ongoing work?',
      answer:
        'It can be either, depending on what your site needs — an initial technical review, or ongoing monitoring and improvement.'
    },
    {
      question:
        'Will improving my site’s speed really make a difference?',
      answer:
        'Speed affects both visitor experience and how search engines assess your site, so yes, it’s one of the more direct levers available.'
    }
  ],

  ctaTitle:
    'Not showing up in search the way you should?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Website Care & Improvements',
      href: '/services/website-care'
    },
    {
      text: 'Website Redesign',
      href: '/services/website-redesign'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},

{
  slug: 'website-care',

  title: 'Website Care & Improvements',

  seoTitle:
    'Website Care & Maintenance NZ | ARS Tech Solutions',

  metaDescription:
    'Ongoing website updates, fixes and improvements for New Zealand businesses. ARS Tech Solutions helps keep your site accurate, working and up to date after launch.',

  h1:
    'A website that gets looked after, not just launched.',

  heroCopy:
    'A website isn’t a set-and-forget project—it needs regular updates, timely fixes, and continual improvements as your business evolves. We provide proactive website care to keep your site accurate, functional, and ahead of the curve.',

  whoItIsFor: [
    'Businesses with a website but no one to make regular updates',
    'Businesses that notice small bugs or issues but don’t have time to fix them',
    'Businesses whose services, pricing or team have changed since the site was built',
    'Businesses that want a working relationship for ongoing support, not just a one-off build'
  ],

  problems: [
    'Content on the site is out of date — old services, old team members, old pricing',
    'Small bugs or broken elements go unfixed because there’s no one to handle them',
    'Every minor change requires finding a developer from scratch',
    'The site slowly falls behind as the business evolves around it'
  ],

  whatWeProvide:
    'We handle the ongoing updates, fixes and improvements a website needs after launch — content changes, bug fixes, and general upkeep — so the site keeps reflecting the business accurately without you having to chase someone down each time.',

  benefits: [
    'A website that stays accurate as the business changes',
    'Issues get fixed before they affect visitors',
    'One point of contact for updates, rather than starting over each time',
    'More time back for you to focus on running the business'
  ],

  included: [
    'Content updates',
    'Bug fixes',
    'Design improvements',
    'Performance checks',
    'General website maintenance'
  ],

  process: [
    'Confirm what kind of ongoing support the site needs.',
    'Agree on how updates and requests will be handled.',
    'Make changes as they come up, with regular checks in between.'
  ],

  faqs: [
    {
      question:
        'Is this a subscription, or do you charge per fix?',
      answer:
        'That depends on what suits the business — we can talk through what makes sense once we understand how much ongoing support you’re likely to need.'
    },
    {
      question:
        'What counts as a “fix” versus a bigger change?',
      answer:
        'Small content changes and bug fixes fall under care; larger structural or design changes are usually closer to a redesign. We’ll be upfront about which is which.'
    },
    {
      question:
        'Do you look after sites you didn’t originally build?',
      answer:
        'Yes, we can take over care of an existing site as long as we can properly assess it first.'
    },
    {
      question:
        'How quickly do you respond to issues?',
      answer:
        'Response times depend on the arrangement in place — this is worth confirming directly.'
    }
  ],

  ctaTitle:
    'Website going stale since launch?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Website Redesign',
      href: '/services/website-redesign'
    },
    {
      text: 'SEO & Website Performance',
      href: '/services/seo-website-performance'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},
{
  slug: 'ecommerce-websites',

  title: 'E-commerce Websites',

  seoTitle:
    'E-commerce Website Development NZ | ARS Tech Solutions',

  metaDescription:
    'Online stores built for New Zealand businesses — clear product presentation, simple purchasing journeys and practical e-commerce setups from ARS Tech Solutions.',

  h1:
    'Online stores that make buying easy.',

  heroCopy:
    'Successful online selling depends on customers being able to easily find what they want and complete purchases without obstacles. We build e-commerce websites for New Zealand businesses with clear product displays and seamless, user-friendly checkout experiences—never unnecessary complexity.',

  whoItIsFor: [
    'Businesses moving from in-person or marketplace-only sales to their own online store',
    'Businesses whose current store is confusing to browse or awkward to check out on',
    'Businesses that want a store they can manage themselves without needing a developer for every product change'
  ],

  problems: [
    'Customers abandon their cart because checkout is confusing or slow',
    'Product pages don’t clearly show what’s on offer, pricing or availability',
    'The store isn’t properly usable on mobile, where a lot of shopping happens',
    'Adding or updating products requires technical help every time'
  ],

  whatWeProvide:
    'We design and build online stores around clear product presentation, simple navigation and a checkout process that doesn’t create unnecessary friction — with the store set up so day-to-day product management doesn’t depend on us.',

  benefits: [
    'A clearer path from browsing to purchase, with less drop-off',
    'Product pages that actually help customers decide',
    'A store that works properly on mobile, not just desktop',
    'Easier day-to-day management of products and stock'
  ],

  included: [
    'Online store setup',
    'Product page design',
    'Responsive storefronts',
    'Payment integration support',
    'Store configuration'
  ],

  process: [
    'Understand the products, catalogue size and how the business wants to manage orders.',
    'Plan store structure, product pages and checkout flow.',
    'Build, configure payments, test the full purchase journey, and launch.'
  ],

  faqs: [
    {
      question:
        'Which platform do you build stores on?',
      answer:
        'It depends on the catalogue size and how the business wants to manage it; we’ll recommend an approach once we understand the requirements.'
    },
    {
      question:
        'Can you set up payment options like card and other local payment methods?',
      answer:
        'Yes, we handle payment integration as part of the store setup.'
    },
    {
      question:
        'Will I be able to add and update products myself?',
      answer:
        'Yes, stores are set up so day-to-day product management doesn’t require a developer.'
    },
    {
      question:
        'Can you move my existing store to a new platform?',
      answer:
        'Yes, we can assess your current store and plan a migration if that’s what’s needed.'
    }
  ],

  ctaTitle:
    'Ready to sell online properly?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Hosting, Domain & Deployment',
      href: '/services/hosting-domain-deployment'
    },
    {
      text: 'Website Development',
      href: '/services/website-development'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},

{
  slug: 'hosting-domain-deployment',

  title: 'Hosting, Domain & Deployment',

  seoTitle:
    'Website Hosting & Deployment NZ | ARS Tech Solutions',

  metaDescription:
    'Hosting, domain and deployment support for New Zealand businesses — reliable setup, DNS configuration and ongoing management so your website stays online.',

  h1:
    'The part of your website most people never think about.',

  heroCopy:
    'Hosting, domains, and deployment work behind the scenes—but they are what keep your website online, fast, and secure. We set up and manage these technical essentials from day one, so your site stays reliable and trouble-free.',

  whoItIsFor: [
    'Businesses launching a new website and unsure where or how to host it',
    'Businesses whose current hosting is slow, unreliable, or hard to manage',
    'Businesses that own a domain but don’t know how to point it at a new site',
    'Businesses that want deployment handled properly rather than pieced together'
  ],

  problems: [
    'The site is slow or occasionally goes offline due to poor hosting',
    'Domain and DNS settings are confusing or were set up incorrectly',
    'No one is sure who currently manages hosting or renewals',
    'Deploying updates to the live site is manual, risky or unclear'
  ],

  whatWeProvide:
    'We set up hosting, domain configuration and deployment so the website goes live properly and stays reliable — including DNS setup, SSL, and a deployment process that makes future updates straightforward rather than risky.',

  benefits: [
    'A website that stays online and loads reliably',
    'Correct domain and DNS setup, avoiding email or access issues',
    'A secure connection (SSL) visitors and search engines expect',
    'A clear deployment process for future updates'
  ],

  included: [
    'Hosting setup',
    'Domain configuration',
    'DNS management',
    'SSL setup',
    'Deployment management'
  ],

  process: [
    'Review current hosting, domain and DNS setup or plan from scratch for a new site.',
    'Configure hosting, domain and SSL correctly.',
    'Deploy the site and confirm everything resolves and loads as expected.'
  ],

  relatedWork: [
    {
      title: 'ARS Tech Solutions Website V2',
      description:
        'Built and deployed via Netlify with static site generation.',
      href: '/work'
    }
  ],

  faqs: [
    {
      question:
        'Do I need to buy my own domain, or can you handle that?',
      answer:
        'Either way — we can register and configure one for you, or work with a domain you already own.'
    },
    {
      question:
        'What happens if my hosting goes down?',
      answer:
        'This depends on the hosting provider and setup in place; we can talk through reliability expectations before choosing an approach.'
    },
    {
      question:
        'Can you move my site from another host?',
      answer:
        'Yes, we can assess your current setup and migrate hosting, domain and DNS as needed.'
    },
    {
      question:
        'Is SSL included?',
      answer:
        'Yes, a secure connection is set up as standard as part of hosting and deployment.'
    }
  ],

  ctaTitle:
    'Not sure your hosting is set up properly?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Website Development',
      href: '/services/website-development'
    },
    {
      text: 'Custom Web Applications',
      href: '/services/custom-web-applications'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
},

{
  slug: 'it-support',

  title: 'IT Support',

  seoTitle:
    'IT Support for Small Business NZ | ARS Tech Solutions',

  metaDescription:
    'Practical IT support for New Zealand small businesses — troubleshooting, setup and ongoing tech help from ARS Tech Solutions, based in Rolleston, Canterbury.',

  h1:
    'Practical tech support, without the jargon.',

  heroCopy:
    'Not every tech challenge requires an in-house IT team. We deliver hands-on, jargon-free IT support for New Zealand small businesses—resolving issues, setting up systems, and providing clear guidance for everyday technology decisions.',

  whoItIsFor: [
    'Small businesses without dedicated in-house IT',
    'Businesses that need help setting up new hardware, software or systems',
    'Businesses that run into recurring tech issues with no one to call',
    'Businesses that want advice on tech decisions in plain language, not jargon'
  ],

  problems: [
    'Recurring tech issues with no clear person responsible for fixing them',
    'New software or systems that were never set up properly',
    'Uncertainty about what tech solution actually fits the business',
    'Technical explanations that are hard to follow, making decisions harder than they should be'
  ],

  whatWeProvide:
    'We help troubleshoot issues, set up systems properly, and explain the technical side of decisions in plain language — so you understand what’s being done and why, not just that it’s “fixed.”',

  benefits: [
    'Fewer ongoing tech headaches',
    'Systems set up correctly the first time',
    'Clear explanations that make future decisions easier',
    'One point of contact for practical tech problems'
  ],

  included: [
    'Troubleshooting',
    'System setup',
    'Software support',
    'Technical advice',
    'General small business IT help'
  ],

  process: [
    'Understand the issue or system that needs attention.',
    'Diagnose the cause or plan the required setup.',
    'Resolve it and explain what was done, in plain language.'
  ],

  faqs: [
    {
      question:
        'Do you offer remote support, or only in person?',
      answer:
        'Both, depending on the issue — many things can be resolved remotely, though in-person support is available locally around Rolleston and Christchurch.'
    },
    {
      question:
        'Is this only for computer problems, or does it cover software too?',
      answer:
        'It covers both hardware and software issues, plus general setup and configuration help.'
    },
    {
      question:
        'Do I need an ongoing contract, or can I get one-off help?',
      answer:
        'Either — we can help with a single issue or provide ongoing support, depending on what you need.'
    },
    {
      question:
        'Can you help me decide what tech or software to use, not just fix problems?',
      answer:
        'Yes, that kind of practical advice is part of what this service covers.'
    }
  ],

  ctaTitle:
    'Got a tech problem with no one to call?',

  ctaText:
    'Request a Quote',

  internalLinks: [
    {
      text: 'Website Care & Improvements',
      href: '/services/website-care'
    },
    {
      text: 'Our Process',
      href: '/about'
    }
  ]
}



]