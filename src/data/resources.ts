export type ResourceBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      items: string[]
    }
  | {
      type: 'heading'
      text: string
    }
  | {
      type: 'subheading'
      text: string
    }

export type ResourceLink = {
  text: string
  href: string
}

export type ResourceData = {
  slug: string

  title: string
  seoTitle: string
  metaDescription: string

  h1: string
  introduction: string

  blocks: ResourceBlock[]

  relatedResources: ResourceLink[]
  internalLinks: ResourceLink[]

  ctaTitle: string
  ctaText: string
}

export const resources: ResourceData[] = [
  {
    slug: 'what-should-a-business-website-include',

    title: 'What Should a Business Website Include?',

    seoTitle:
      'What Should a Business Website Include? | ARS Tech Solutions',

    metaDescription:
      'A practical guide to what every business website actually needs — from clear navigation and contact options through to mobile usability and the basics of being found online.',

    h1:
      'What should a business website include?',

    introduction:
      'Most business websites share the same core problem: they were built based on what looked right, not what visitors actually need. The result is a site that exists, but doesn’t do much for the business. This guide covers what a functional business website genuinely needs — not an exhaustive wishlist, just what matters.',

    blocks: [
      {
        type: 'heading',
        text: 'A clear explanation of what you do'
      },
      {
        type: 'paragraph',
        text:
          'This sounds obvious, but many business websites make visitors work to figure out what the business actually offers. The homepage — and ideally every key page — should answer three questions quickly: what does this business do, who does it help, and what should someone do next.'
      },
      {
        type: 'paragraph',
        text:
          'If a visitor can’t answer those three questions within a few seconds of landing, you’ve already lost most of them.'
      },

      {
        type: 'heading',
        text: 'Contact information that’s easy to find'
      },
      {
        type: 'paragraph',
        text:
          'This is the most common omission on small business websites, and one of the most costly. If someone wants to get in touch, make it easy. That means a phone number or email address visible without scrolling — not buried on a contact page three clicks away.'
      },
      {
        type: 'paragraph',
        text:
          'A contact form is useful, but it shouldn’t be the only option. Some people prefer to call, email directly, or message you through a channel they already use.'
      },

      {
        type: 'heading',
        text: 'Navigation that makes sense'
      },
      {
        type: 'paragraph',
        text:
          'Navigation should reflect how your customers think about your business, not how you think about it internally. If someone is looking for your services, they should find them without needing to work out your internal category names.'
      },
      {
        type: 'paragraph',
        text:
          'Keep it simple: five to seven navigation items is usually enough. If you have more, you probably need to decide what’s important versus what’s just filling space.'
      },

      {
        type: 'heading',
        text: 'A mobile-friendly design'
      },
      {
        type: 'paragraph',
        text:
          'More than half of web traffic happens on a phone. If your website is hard to use on mobile — tiny text, links too close together, content that doesn’t resize properly — you’re creating friction for the majority of people visiting.'
      },
      {
        type: 'paragraph',
        text:
          'A mobile-friendly website isn’t a feature; it’s a baseline expectation. Search engines also factor mobile usability into how they rank pages, so it has SEO implications beyond the visitor experience.'
      },

      {
        type: 'heading',
        text: 'The basics for search engines'
      },
      {
        type: 'paragraph',
        text:
          'A business website that no one can find is a significant missed opportunity. The technical SEO basics aren’t complicated, but they’re frequently missed: unique page titles, accurate meta descriptions, clear heading structure, and enough body copy that search engines understand what each page is about.'
      },
      {
        type: 'paragraph',
        text:
          'This doesn’t guarantee rankings — nothing does — but it gives your site a fair chance of being found for relevant searches.'
      },

      {
        type: 'heading',
        text: 'Trust signals'
      },
      {
        type: 'paragraph',
        text:
          'Visitors need reasons to contact or buy from a business they’ve found online. Trust signals help with that without requiring a formal testimonials section. They include: a real street address or region, a visible phone number, clear descriptions of services, and photos that show the actual business rather than just stock photography.'
      },
      {
        type: 'paragraph',
        text:
          'The more real your business appears to a first-time visitor, the more likely they are to get in touch.'
      },

      {
        type: 'heading',
        text: 'Clear calls to action'
      },
      {
        type: 'paragraph',
        text:
          'Every page should give visitors a logical next step — not just a footer with a phone number, but a prompt at the right moment. That might be “Request a Quote,” “Book a Consultation,” or “Get in Touch.” The wording doesn’t need to be clever; it needs to be clear and placed where people are ready to take action.'
      },

      {
        type: 'heading',
        text: 'A site that’s easy to update'
      },
      {
        type: 'paragraph',
        text:
          'This one is for you, not your visitors. If updating your own website requires calling a developer every time a service changes or a price updates, the site will fall behind. Businesses change; a website that can’t keep up becomes an inaccurate liability rather than a useful tool.'
      },
      {
        type: 'paragraph',
        text:
          'Whether that means a content management system, a flat file site, or a WordPress installation depends on the site — but the ability to make basic updates without specialist help matters.'
      },

      {
        type: 'heading',
        text: 'What this looks like in practice'
      },
      {
        type: 'paragraph',
        text:
          'A business website doesn’t need to be complex to do its job. A well-structured site with five or six pages — a homepage, a services page, an about page, a contact page, and perhaps a few supporting pages — covers most of what a small or growing business actually needs. The quality of what’s on those pages matters far more than the number of them.'
      },
      {
        type: 'paragraph',
        text:
          'If you’re building a new site and want to make sure it covers these foundations from the start, our Website Design & UX/UI and Website Development services are worth a look.'
      },
      {
        type: 'paragraph',
        text:
          'If you already have a site but suspect it’s missing some of these, a Website Redesign might be more appropriate than starting over.'
      }
    ],

    relatedResources: [
      {
        text: 'When Is It Time to Redesign Your Website?',
        href:
          '/resources/when-is-it-time-to-redesign-your-website'
      },
      {
        text: 'SEO Foundations for a Small Business Website',
        href:
          '/resources/seo-foundations-small-business-website'
      }
    ],

    internalLinks: [
      {
        text: 'Website Design & UX/UI',
        href:
          '/services/website-design-ux-ui'
      },
      {
        text: 'Website Development',
        href:
          '/services/website-development'
      },
      {
        text: 'Website Redesign',
        href:
          '/services/website-redesign'
      }
    ],

    ctaTitle:
      'Want to make sure your website covers the right ground?',

    ctaText:
      'Request a Quote'
  },

    {
    slug: 'when-is-it-time-to-redesign-your-website',

    title: 'When Is It Time to Redesign Your Website?',

    seoTitle:
      'When Is It Time to Redesign Your Website? | ARS Tech Solutions',

    metaDescription:
      'Not sure if your website needs a redesign or just some updates? This guide covers the real signs it’s time to rethink your site—and when a full rebuild isn’t necessary.',

    h1:
      'When is it time to redesign your website?',

    introduction:
      'Most business owners know when their website isn’t working — they just aren’t sure whether the problem is worth fixing, or whether fixing it means starting from scratch. This guide walks through the real signs that a redesign is worth considering, what that actually involves, and when a lighter touch might be enough.',

    blocks: [
      {
        type: 'heading',
        text: 'Your website no longer reflects the business.'
      },
      {
        type: 'paragraph',
        text:
          'Businesses change. Services get added or dropped, pricing changes, teams grow, and the overall direction shifts. A website that was accurate three years ago might now be presenting an outdated version of the business to every new visitor.'
      },
      {
        type: 'paragraph',
        text:
          'This is one of the most common and most overlooked reasons to redesign. It’s not about aesthetics — it’s about whether the website is actively misrepresenting what the business actually offers.'
      },

      {
        type: 'heading',
        text: 'It doesn’t work properly on mobile.'
      },
      {
        type: 'paragraph',
        text:
          'If your website was built before mobile usability was standard practice — or built cheaply and quickly without considering it — there’s a real chance it’s creating friction for most visitors.'
      },
      {
        type: 'paragraph',
        text:
          'Signs of a poor mobile experience include text that’s too small to read without zooming, navigation that’s difficult to tap, images that overflow the screen, and forms that are awkward to fill in on a phone. These aren’t cosmetic problems — they affect whether people stay on the site or leave.'
      },

      {
        type: 'heading',
        text: 'It’s slow to load'
      },
      {
        type: 'paragraph',
        text:
          'Page speed matters to both visitors and search engines. A site that takes several seconds to load — especially on a mobile connection — will lose visitors before they’ve even seen your content.'
      },
      {
        type: 'paragraph',
        text:
          'Slow sites often result from unoptimised images, outdated code, poor hosting, or a combination of all three. Sometimes you can fix these issues without a full redesign, but if the underlying build is old or poorly structured, a redesign is often a cleaner solution.'
      },

      {
        type: 'heading',
        text: 'Visitors aren’t taking the action you want'
      },
      {
        type: 'paragraph',
        text:
          "If people land on the site but don't get in touch, buy, or move past the homepage, the site isn’t doing its job. This can be caused by unclear calls to action, confusing navigation, missing information, or a design that doesn’t give visitors confidence in the business."
      },
      {
        type: 'paragraph',
        text:
          'Traffic without enquiries or sales is a signal worth paying attention to. If the business is getting visitors but the site isn’t converting them into customers, the site structure or content is likely part of the reason.'
      },

      {
        type: 'heading',
        text: 'You’re embarrassed to share the URL'
      },
      {
        type: 'paragraph',
        text:
          'This sounds informal, but it’s a reliable indicator. If you hesitate before sending your website address to a potential client, or feel the need to preface it with an apology, that’s a practical problem — you’re already undermining the first impression the site is supposed to make.'
      },

      {
        type: 'heading',
        text: 'The design feels noticeably dated.'
      },
      {
        type: 'paragraph',
        text:
          'Visual expectations change gradually, and websites that looked modern in 2015 or 2018 can now read as dated without anything specific being “wrong.” If your competitors’ sites look significantly more current, the contrast becomes part of what visitors notice — even if they don’t articulate it.'
      },
      {
        type: 'paragraph',
        text:
          'Design age matters because it signals credibility. A dated website, fairly or not, suggests a business that hasn’t invested in how it presents itself.'
      },

      {
        type: 'heading',
        text: 'It’s difficult to update'
      },
      {
        type: 'paragraph',
        text:
          'If making a basic content change — updating a service description, changing a phone number, adding a new team member — requires calling a developer or taking the site offline, the site was built without ongoing management in mind. That’s a technical problem as much as a design one, and it often compounds over time as changes pile up or get skipped entirely because they’re too difficult to make.'
      },

      {
        type: 'heading',
        text: 'When a full redesign isn’t necessary'
      },
      {
        type: 'paragraph',
        text:
          'Not every problem needs a complete rebuild. If the site’s technical foundations are sound and the structure is still logical, targeted improvements to specific pages, content, or usability issues can achieve a lot without the time and cost of starting over.'
      },
      {
        type: 'paragraph',
        text:
          'A useful starting point is being honest about which parts of the site are working and which aren’t — rather than defaulting to either “leave it as it is” or “rebuild everything.” If you’re genuinely unsure, it’s worth getting an outside perspective on what the site does well and where it falls short.'
      },

      {
        type: 'heading',
        text: 'What a redesign typically involves'
      },
      {
        type: 'paragraph',
        text:
          'A redesign doesn’t have to mean rebuilding from scratch. It can mean improving the structure, updating the design direction, fixing mobile usability, refreshing content, and improving calls to action — while keeping what’s already working.'
      },
      {
        type: 'paragraph',
        text:
          'The scope depends on how much has changed and how deep the problems go. A homepage refresh is very different from rearchitecting the whole site.'
      },

      {
        type: 'heading',
        text: 'Next steps'
      },
      {
        type: 'paragraph',
        text:
          'If any of the situations above sound familiar, it’s worth having a proper look at what the site is and isn’t doing — rather than leaving it as a background problem.'
      },
      {
        type: 'paragraph',
        text:
          'Our Website Redesign service covers this kind of work, and Website Care & Improvements is worth considering if the issues are smaller and more targeted.'
      }
    ],

    relatedResources: [
      {
        text: 'What Should a Business Website Include?',
        href:
          '/resources/what-should-a-business-website-include'
      },
      {
        text: 'SEO Foundations for a Small Business Website',
        href:
          '/resources/seo-foundations-small-business-website'
      }
    ],

    internalLinks: [
      {
        text: 'Website Redesign',
        href:
          '/services/website-redesign'
      },
      {
        text: 'Website Care & Improvements',
        href:
          '/services/website-care'
      }
    ],

    ctaTitle:
      'Think your website might be due for a rethink?',

    ctaText:
      'Request a Quote'
  },

  {
    slug: 'seo-foundations-small-business-website',

    title: 'SEO Foundations for a Small Business Website',

    seoTitle:
      'SEO Foundations for a Small Business Website | ARS Tech Solutions',

    metaDescription:
      'A practical guide to the SEO basics every small business website should have in place — page titles, structure, mobile usability, speed and local search signals.',

    h1:
      'SEO foundations for a small business website.',

    introduction:
      'Search engine optimisation gets talked about as though it’s either a magic solution or a dark art. For most small businesses, the reality is more straightforward. There are a handful of technical and structural basics that a website should have in place, and getting those right puts you in a significantly better position than the majority of sites that don’t bother. This guide covers those foundations — not advanced tactics, just the things that actually move the needle for a small business website.',

    blocks: [
      {
        type: 'heading',
        text: 'What SEO actually means for a small business'
      },
      {
        type: 'paragraph',
        text:
          'For most small businesses, SEO isn’t about competing for national keywords against large competitors with dedicated marketing teams. It’s about making sure your website clearly communicates what you do and where you do it — so that when someone searches for what you offer, your site has a fair chance of showing up.'
      },
      {
        type: 'paragraph',
        text:
          'That starts with technical foundations, not content volume.'
      },

      {
        type: 'heading',
        text: 'Page titles and meta descriptions'
      },
      {
        type: 'paragraph',
        text:
          'Every page on your website has a title — the text that appears in the browser tab and in search results. Many small business websites either use the same title on every page, leave it as whatever the platform defaulted to, or forget it entirely.'
      },
      {
        type: 'paragraph',
        text:
          'Each page should have a unique title that accurately describes what that page is about, includes a relevant term where it fits naturally, and is short enough to display properly in search results (roughly 50–60 characters).'
      },
      {
        type: 'paragraph',
        text:
          'Meta descriptions — the short paragraph shown under the page title in search results — don’t directly affect rankings, but they do affect whether someone clicks through. A clear, accurate description of what the page covers gives people a reason to visit.'
      },

      {
        type: 'heading',
        text: 'Heading structure'
      },
      {
        type: 'paragraph',
        text:
          'Search engines use heading structure (H1, H2, H3) to understand what a page is about and how information is organised. A page with a clear H1 that describes the topic, followed by logical H2 sections, is much easier to interpret than a page where headings were chosen for visual size rather than structure.'
      },
      {
        type: 'paragraph',
        text:
          'Each page should have one H1 — the primary topic of the page. Subheadings should follow a logical order and describe what each section actually covers, rather than being generic or decorative.'
      },

      {
        type: 'heading',
        text: 'Mobile usability'
      },
      {
        type: 'paragraph',
        text:
          'Google uses the mobile version of your website as the primary basis for assessing and ranking your pages. A website that isn’t properly usable on mobile isn’t just creating a poor experience for visitors — it’s working against its own search visibility.'
      },
      {
        type: 'paragraph',
        text:
          'Mobile usability issues include text that requires zooming, navigation that’s difficult to tap, content that overflows the screen, and forms that are awkward to complete on a phone. These are fixable, but they need to be treated as a priority rather than a cosmetic afterthought.'
      },

      {
        type: 'heading',
        text: 'Page speed'
      },
      {
        type: 'paragraph',
        text:
          'Slow pages affect rankings and visitor experience equally. Search engines factor page speed into assessments, and visitors who encounter a slow site frequently leave before it finishes loading.'
      },
      {
        type: 'paragraph',
        text:
          'Common causes of slow page speed include unoptimised images, unnecessary scripts and plugins, poor hosting, and uncleaned code. Improving speed doesn’t always require a rebuild — sometimes targeted fixes to images and hosting make a significant difference.'
      },

      {
        type: 'heading',
        text: 'SSL (the padlock)'
      },
      {
        type: 'paragraph',
        text:
          'A website served over HTTP rather than HTTPS shows a security warning in most browsers and is treated less favourably by search engines. An SSL certificate is now standard and expected — if your website still shows as “Not Secure,” fix it immediately.'
      },
      {
        type: 'paragraph',
        text:
          'Most reputable hosting providers include SSL as standard, or you can add it at low cost. There’s no reason a business website should operate without it.'
      },

      {
        type: 'heading',
        text: 'Clear, accurate content'
      },
      {
        type: 'paragraph',
        text:
          'Search engines rank pages that clearly and accurately answer what someone was searching for. That doesn’t require a high word count or keyword repetition — it requires content that genuinely covers the topic, uses natural language, and reflects what the business actually offers.'
      },
      {
        type: 'paragraph',
        text:
          'Thin pages — those with very little content — give search engines little to work with and are frequently overlooked. Each key page on your website should have enough content to clearly explain what it covers, who it’s for, and what someone should do next.'
      },

      {
        type: 'heading',
        text: 'Local search signals'
      },
      {
        type: 'paragraph',
        text:
          'For businesses serving a specific area, local signals help search engines understand where you operate. This includes:'
      },
      {
        type: 'list',
        items: [
          'Mentioning the area you serve in your page content naturally — not forced, just accurate',
          'A consistent business name, address and phone number across your website and any directories you’re listed in',
          'A Google Business Profile that’s set up, accurate and kept up to date'
        ]
      },
      {
        type: 'paragraph',
        text:
          'For a Christchurch trades business or a Rolleston retailer, getting these local signals right can make a meaningful difference in appearing for local searches — more so than broad national SEO tactics.'
      },

      {
        type: 'heading',
        text: 'What to do if your site is missing these basics'
      },
      {
        type: 'paragraph',
        text:
          'Most small business websites have at least a few of these gaps. The practical starting point is an honest assessment of what’s in place and what isn’t — rather than trying to fix everything at once.'
      },
      {
        type: 'paragraph',
        text:
          'If the technical side feels out of your depth, our SEO & Website Performance service covers exactly these kinds of issues. If the problems run deeper — outdated structure, poor mobile experience, slow loading — a Website Redesign may address them more completely than patching individual issues.'
      },

      {
        type: 'heading',
        text: 'A note on what SEO can’t do'
      },
      {
        type: 'paragraph',
        text:
          'Getting the foundations right improves your website’s chances of being found. It doesn’t guarantee specific rankings, a set number of visitors, or a particular volume of enquiries. Anyone who promises guaranteed rankings is not giving you an accurate picture of how search engines work.'
      },
      {
        type: 'paragraph',
        text:
          'Good foundations give your site a fair chance — which is more than most small business websites currently have.'
      }
    ],

    relatedResources: [
      {
        text: 'What Should a Business Website Include?',
        href:
          '/resources/what-should-a-business-website-include'
      },
      {
        text: 'Website vs Web App: Which Does Your Business Need?',
        href:
          '/resources/website-vs-web-app'
      }
    ],

    internalLinks: [
      {
        text: 'SEO & Website Performance',
        href:
          '/services/seo-website-performance'
      },
      {
        text: 'Website Redesign',
        href:
          '/services/website-redesign'
      }
    ],

    ctaTitle:
      'Want your website’s SEO foundations checked?',

    ctaText:
      'Request a Quote'
  },

  {
    slug: 'website-vs-web-app',

    title: 'Website vs Web App: Which Does Your Business Need?',

    seoTitle:
      'Website vs Web App: Which Does Your Business Need? | ARS Tech Solutions',

    metaDescription:
      'Not sure whether your business needs a website or a web application? This guide explains the real difference and helps you decide which fits your situation.',

    h1:
      'Website vs web app: which does your business need?',

    introduction:
      'The line between a website and a web application has blurred as the web has evolved, and the terminology gets used interchangeably in ways that don’t always help. If you’re trying to work out what kind of digital product your business actually needs, the distinction matters — not for technical reasons, but because the scope, cost and build process are quite different. This guide explains the difference in practical terms and helps you work out which one fits your situation.',

    blocks: [
      {
        type: 'heading',
        text: 'The straightforward distinction'
      },
      {
        type: 'paragraph',
        text:
          'A website presents information. A web application does something.'
      },
      {
        type: 'paragraph',
        text:
          'That’s the simplest version of the difference, and it holds up well enough for most purposes. A website tells people about your business, shows your services, and gives them a way to contact you. A web application takes input, processes it, and produces output — or manages ongoing data and interactions over time.'
      },
      {
        type: 'paragraph',
        text:
          'In practice, many digital products sit somewhere between the two. A website with a contact form is still a website. A system where users log in, manage records, submit requests and receive responses is a web application, even if it looks like a simple interface.'
      },

      {
        type: 'heading',
        text: 'Examples of websites'
      },
      {
        type: 'list',
        items: [
          'A business website presenting services, an about page and a contact form',
          'An e-commerce store where visitors browse and purchase products',
          'A portfolio or blog with regularly updated content',
          'A landing page for a specific campaign or product'
        ]
      },
      {
        type: 'paragraph',
        text:
          'These all present information and facilitate a relatively simple action — browsing, reading, purchasing, or getting in touch.'
      },

      {
        type: 'heading',
        text: 'Examples of web applications'
      },
      {
        type: 'list',
        items: [
          'A job management system where staff log jobs, update statuses and generate reports',
          'A client portal where customers log in to view their account, submit requests or track progress',
          'A booking or scheduling system with user accounts and calendar management',
          'An internal dashboard that pulls together data and presents it in a useful format',
          'A guest management tool for tracking RSVPs, dietary requirements and seating'
        ]
      },
      {
        type: 'paragraph',
        text:
          'The common thread is ongoing interaction with data, user accounts, or processes — rather than presenting fixed information.'
      },

      {
        type: 'heading',
        text: 'Why the distinction matters practically'
      },
      {
        type: 'paragraph',
        text:
          'The difference isn’t just semantic. It affects how the project is scoped, how long it takes, how it’s built, and what it costs.'
      },
      {
        type: 'paragraph',
        text:
          "A straightforward business website can often be planned and built in weeks. A web application — even a relatively simple one — requires more careful upfront planning, because you have to work out the system's logic before building anything. Getting that wrong midway through is expensive."
      },
      {
        type: 'paragraph',
        text:
          'It also affects maintenance. A website with a content management system is designed for non-technical users to update. A web application usually has more moving parts that need technical attention when something changes.'
      },

      {
        type: 'heading',
        text: 'The grey area: websites that do things'
      },
      {
        type: 'paragraph',
        text:
          'Many business websites now include features that push them toward the web application end of the spectrum — booking forms, e-commerce functionality, member areas, or dynamic content. This is fine, and it doesn’t mean you automatically need a custom web application.'
      },
      {
        type: 'paragraph',
        text:
          'The question is whether the functionality you need is well-served by an existing platform — a WordPress plugin, a Shopify store, a booking system integration — or whether your requirements are specific enough that an off-the-shelf solution won’t fit properly.'
      },
      {
        type: 'paragraph',
        text:
          'If you find yourself working around the limitations of a platform constantly, or managing a spreadsheet to compensate for what the platform can’t do, that’s a signal that a custom solution might be worth considering.'
      },

      {
        type: 'heading',
        text: 'How to work out which one you need'
      },
      {
        type: 'paragraph',
        text:
          'A few honest questions help here:'
      },

      {
        type: 'subheading',
        text: 'Does it need user accounts or logins?'
      },
      {
        type: 'paragraph',
        text:
          'If different people need to see different information, or if someone needs to log in to manage something, you’re moving into web application territory.'
      },

      {
        type: 'subheading',
        text: 'Does it need to store and manage data over time?'
      },
      {
        type: 'paragraph',
        text:
          'A contact form submits data once. A system that tracks jobs, customers, orders or requests over time, with the ability to update and report on them, is a web application.'
      },

      {
        type: 'subheading',
        text: 'Does it need to do something with input, not just receive it?'
      },
      {
        type: 'paragraph',
        text:
          'If the system needs to calculate, process, assign, notify or generate something based on what a user enters, it’s doing application-level work.'
      },

      {
        type: 'subheading',
        text: 'Would an existing platform handle it without constant workarounds?'
      },
      {
        type: 'paragraph',
        text:
          'If yes, a website with that platform integrated is often the more practical choice. If no, a custom build is worth considering.'
      },

      {
        type: 'heading',
        text: 'What to do once you’ve worked it out'
      },
      {
        type: 'paragraph',
        text:
          'If you need a website, start with Website Design & UX/UI and Website Development — covering everything from planning through to a working, deployed site.'
      },
      {
        type: 'paragraph',
        text:
          'If what you need is closer to a web application — a custom system, a dashboard, a tool with logins and data management — Custom Web Applications covers that kind of work.'
      },
      {
        type: 'paragraph',
        text:
          'If you’re still not sure which category your idea falls into, the most useful thing to do is describe what you want the system to do, rather than what you want it to look like. That’s usually enough to work out the right approach.'
      }
    ],

    relatedResources: [
      {
        text: 'What Should a Business Website Include?',
        href:
          '/resources/what-should-a-business-website-include'
      },
      {
        text: 'When Is It Time to Redesign Your Website?',
        href:
          '/resources/when-is-it-time-to-redesign-your-website'
      }
    ],

    internalLinks: [
      {
        text: 'Website Design & UX/UI',
        href:
          '/services/website-design-ux-ui'
      },
      {
        text: 'Website Development',
        href:
          '/services/website-development'
      },
      {
        text: 'Custom Web Applications',
        href:
          '/services/custom-web-applications'
      }
    ],

    ctaTitle:
      'Not sure what your business actually needs? Tell us what you’re trying to solve.',

    ctaText:
      'Request a Quote'
  }
]
