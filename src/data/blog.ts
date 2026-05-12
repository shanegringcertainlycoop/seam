export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: { name: string; role: string }
  date: string
  readTime: string
  featured?: boolean
  image?: { src: string; alt: string }
  body: string
}

export const categories = [
  'All',
  'Certified Projects',
  'News',
  'In the Press',
  'Practitioner Perspectives',
  'The Standard',
] as const

const _posts: BlogPost[] = [
  {
    slug: 'seam-ap-credential-built-for-social-equity',
    title: 'What Is AP Certification? And Why Does Social Equity in Real Estate Need One?',
    excerpt:
      'LEED, WELL, and GRESB pushed the industry toward better environmental performance and healthier spaces. The SEAM AP credential is purpose-built for what those programs were never designed to address: social equity.',
    category: 'The Standard',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2025-02-07',
    readTime: '5 min read',
    image: { src: '/images/blog/seam-ap-credential.webp', alt: 'SEAM Accredited Professional credential logo' },
    body: `If you've spent time in the built environment, you've probably come across AP certifications (more commonly known as credentials) before. LEED AP, WELL AP, GRESB AP. These credentials have helped push the industry toward better environmental performance and healthier spaces, and that progress is worth celebrating. But here's what those programs were never designed to address: the social impact that real estate has on the people and communities surrounding it.

That's where SEAM comes in. The <a href="/ap-credential">SEAM Accredited Professional credential</a> is an AP certification purpose-built for social equity, giving real estate professionals the knowledge, framework, and credibility to make a genuine difference in the communities their projects touch.

## A Standard the industry has been missing

SEAM, Inc. is a nonprofit organization created to help businesses make a positive social impact through commercial real estate assets. We built the Social Equity Assessment Method (SEAM) Standard as a framework to help building developers, owners, occupants, and operators advance equity, inclusion, human rights, social justice, and accountability. We can make these advancements in the places that serve as the backdrop to our lives: office buildings, government facilities, community centers, schools, universities, banks, and so on.

For us, every building type is primed to improve social equity for the people it impacts.

Social equity has always deserved a seat at the table alongside sustainability and wellness. The SEAM AP credential finally gives professionals the tools to bring it there. Whether you're a developer, an architect, a property manager, or a community advocate, this credential equips you to lead projects with both confidence and conscience.

## How the SEAM AP certification works

The process is straightforward, self-paced, and designed for working professionals. It begins inside The Stitch, SEAM's online community, where you'll find the SEAM AP Training Program waiting for you. If you're new to commercial real estate, the <a href="/resources/courses/cre-familiarization">CRE Familiarization Course</a> is a great place to start before diving in.

The training is a video-based course, grounded in real-world scenarios that follow an actual project from start to finish. You won't find abstract theory here. You'll see exactly how SEAM principles get applied on the ground, step by step, so that when you walk into your next project, you know what to do.

Once you've completed the training and feel ready, you'll register for the SEAM AP Exam directly inside The Stitch. The exam is a 90-minute, remotely proctored, online assessment that you can launch at a time that works for you. It covers the <a href="/resources/standard">SEAM Standard</a> through multiple-choice and true/false questions, testing not just your recall but your ability to apply what you've learned.

Pass the exam, and you'll receive your SEAM AP certificate and digital badge, credentials you can share on LinkedIn, include in proposals, and use to signal to clients and collaborators that equity is something you take seriously.

## What you're ready to do once you're credentialed

Earning your SEAM AP opens real doors. You'll be qualified to guide projects that are pursuing <a href="/certification">SEAM Certification</a>, consult on equity-focused initiatives, and lead workshops and presentations that move the conversation forward in your organization and your community.

You'll also become a more active member of The Stitch, connecting with other SEAM APs, contributing to shared resources, and staying engaged with the people who are shaping equity standards in the built environment. <a href="/membership">Membership</a> is your gateway into this community.

Staying current is part of the commitment. SEAM APs complete 30 continuing education hours every two years, keeping their knowledge sharp and their practice aligned with best practices as the field grows.

## The credential that completes the picture

The real estate industry has done a lot of good work building credentials around environmental performance, energy efficiency, and occupant wellness. Those things matter. And so do the people outside the building, the neighbors, the longtime residents, the small business owners, the communities that absorb the ripple effects of every development decision.

The SEAM AP certification is for the professionals who understand that. It's for the ones who want their work to mean something beyond the project itself, and who are ready to show up with the knowledge and credentials to back that up.

You belong in this work. <a href="/ap-credential">Learn more about the SEAM AP credential</a> and take your first step today.`,
  },
  {
    slug: 'connect-cre-seattle-building-first-seam-certification',
    title: 'Seattle Building Registers First-Ever SEAM Certification',
    excerpt:
      'Urban Visions, a Seattle-based real estate developer, has become the first organization to register a SEAM certification pilot project with The Jack, a new 8-story building in the historic Pioneer Square District of Seattle.',
    category: 'In the Press',
    author: { name: 'Mark Nieto', role: 'Connect CRE' },
    date: '2022-11-15',
    readTime: '1 min read',
    image: { src: '/images/blog/seattle-first-ever.webp', alt: 'Aerial view of Seattle with The Jack building registering first SEAM certification' },
    body: `Urban Visions, a Seattle-based real estate developer, has become the first organization to register a <a href="/certification">SEAM certification</a> pilot project with <a href="/resources/blog/what-the-jack-teaches-us-about-human-centric-real-estate">The Jack</a>, a new 8-story building in the historic Pioneer Square District of Seattle.

<a href="https://www.connectcre.com/stories/seattle-building-registers-first-ever-seam-certification/" target="_blank" rel="noopener noreferrer">Read the full article on Connect CRE &rarr;</a>`,
  },
  {
    slug: 'globest-seam-certification-social-impact-built-environment',
    title: 'New SEAM Certification Addresses Social Impact in Built Environment',
    excerpt:
      'A new measure of corporate real estate social sustainability was announced this week in SEAM Certification. It provides guidance, resources, and certification for achieving positive social impact in the built environment.',
    category: 'In the Press',
    author: { name: 'Paul Bergeron', role: 'Globe St.' },
    date: '2022-11-16',
    readTime: '1 min read',
    image: { src: '/images/blog/new-seam-certification.webp', alt: 'New SEAM Certification addresses social impact in the built environment' },
    body: `A new measure of corporate real estate social sustainability was announced this week in SEAM Certification.

It provides guidance, resources, and <a href="/certification">certification</a> for achieving positive social impact in the built environment.

<a href="https://www.globest.com/2022/11/16/new-seam-certification-addresses-social-impact-in-built-environment/" target="_blank" rel="noopener noreferrer">Read the full article on Globe St. &rarr;</a>`,
  },
  {
    slug: 'djc-pioneer-square-first-seam-certified-project',
    title: 'Pioneer Square office building will be first SEAM certified project in U.S.',
    excerpt:
      'Urban Visions, a Seattle-based real estate developer, has become the first organization to register a SEAM certification pilot project with The Jack, a new 8-story building in the historic Pioneer Square District of Seattle.',
    category: 'In the Press',
    author: { name: 'Emma Hinchliffe', role: 'Daily Journal of Commerce' },
    date: '2022-11-21',
    readTime: '1 min read',
    image: { src: '/images/blog/pioneer-square-first.webp', alt: 'Pioneer Square office building — first SEAM certified project in the U.S.' },
    body: `Urban Visions, a Seattle-based real estate developer, has become the first organization to register a <a href="/certification">SEAM certification</a> pilot project with <a href="/resources/blog/what-the-jack-teaches-us-about-human-centric-real-estate">The Jack</a>, a new 8-story building in the historic Pioneer Square District of Seattle.

<a href="https://www.djc.com/news/ae/12152803.html" target="_blank" rel="noopener noreferrer">Read the full article on Daily Journal of Commerce &rarr;</a>`,
  },
  {
    slug: 'facility-executive-worlds-first-social-impact-certification',
    title: 'CRE Industry Launches World\u2019s First Social Impact Certification',
    excerpt:
      'SEAM Certification, a measure of corporate real estate social sustainability, will provide guidance, resources, and certification for achieving positive social impact in the built environment.',
    category: 'In the Press',
    author: { name: 'Derek Wells', role: 'Facility Executive' },
    date: '2022-11-22',
    readTime: '1 min read',
    image: { src: '/images/blog/cre-industry-launches.webp', alt: 'CRE industry launches world\'s first social impact certification' },
    body: `SEAM Certification, a measure of corporate real estate social sustainability, will provide guidance, resources, and <a href="/certification">certification</a> for achieving positive social impact in the built environment.

<a href="https://facilityexecutive.com/cre-industry-launches-worlds-first-social-impact-certification/" target="_blank" rel="noopener noreferrer">Read the full article on Facility Executive &rarr;</a>`,
  },
  {
    slug: 'puget-sound-bj-seattle-office-building-global-first-dei',
    title: 'New Seattle office building scores a global first on the DEI front',
    excerpt:
      'The under-construction Jack office building on Seattle\u2019s waterfront is the world\u2019s first to seek a new certification aimed at maximizing positive social impacts.',
    category: 'In the Press',
    author: { name: 'Marc Stiles', role: 'Puget Sound Business Journal' },
    date: '2022-11-22',
    readTime: '1 min read',
    image: { src: '/images/blog/seattle-office-dei.webp', alt: 'New Seattle office building scores a global first on DEI' },
    body: `The under-construction <a href="/resources/blog/what-the-jack-teaches-us-about-human-centric-real-estate">Jack office building</a> on Seattle's waterfront is the world's first to seek a new <a href="/certification">certification</a> aimed at maximizing positive social impacts.

<a href="https://www.bizjournals.com/seattle/news/2022/11/22/new-seattle-building-global-scores-global-first.html" target="_blank" rel="noopener noreferrer">Read the full article on Puget Sound Business Journal &rarr;</a>`,
  },
  {
    slug: 'chain-store-age-shopping-centers-social-impact-certifications',
    title: 'Shopping centers soon to seek social impact certifications',
    excerpt:
      'Retail real estate developers already seek certifications for sustainability in their ESG goals. Now they\u2019ll be doing the same to assess the \u201cS\u201d in their ESG policies.',
    category: 'In the Press',
    author: { name: 'Al Urbanski', role: 'Chain Store Age' },
    date: '2023-02-21',
    readTime: '1 min read',
    image: { src: '/images/blog/shopping-centers.webp', alt: 'Shopping centers seeking social impact certifications' },
    body: `Retail real estate developers already seek certifications for adhering to benchmark standards for sustainability set down in their environmental, social, and governance goals. Now they'll be doing the same to assess the "S" in their ESG policies — and the <a href="/resources/standard">SEAM Standard</a> provides the framework to do it.

<a href="https://chainstoreage.com/shopping-centers-soon-seek-social-impact-certifications" target="_blank" rel="noopener noreferrer">Read the full article on Chain Store Age &rarr;</a>`,
  },
  {
    slug: 'metropolis-can-we-actually-measure-social-equity',
    title: 'Can We Actually Measure for Social Equity?',
    excerpt:
      'The level of interest that manufacturers, design firms, and builders are showing in labels that broadcast how they uphold social equity is remarkable. Metropolis Magazine examines whether this new class of virtue-driven certifications is a good sign.',
    category: 'In the Press',
    author: { name: 'Melissa Daniel', role: 'Metropolis Magazine' },
    date: '2023-06-09',
    readTime: '1 min read',
    image: { src: '/images/blog/measure-social-equity.webp', alt: 'Can we actually measure for social equity in the built environment' },
    body: `The level of interest that manufacturers, design firms, and builders are showing in labels that broadcast how they uphold <a href="/social-equity-101">social equity</a> and earn points for it is remarkable. In fact, credit for internal strides, chiefly in the form of a label on packages and marketing materials, represents a new class of virtue-driven <a href="/certification">certifications</a>. Is this a good sign?

<a href="https://metropolismag.com/viewpoints/can-we-actually-measure-for-social-equity/" target="_blank" rel="noopener noreferrer">Read the full article on Metropolis Magazine &rarr;</a>`,
  },
  {
    slug: 'bbc-spaces-that-shape-us-repurposing-buildings',
    title: 'Repurposing buildings to make them more environmentally and socially conscious',
    excerpt:
      'Expectations of what an office should be are changing. Discover how office spaces are being retrofitted to be more environmentally responsible and designed to care for worker\u2019s wellness.',
    category: 'In the Press',
    author: { name: 'BBC StoryWorks', role: 'The Spaces that Shape Us' },
    date: '2023-09-12',
    readTime: '1 min read',
    image: { src: '/images/blog/repurposing-buildings.webp', alt: 'Repurposing buildings for environmental and social impact' },
    body: `Expectations of what an office should be are changing. Discover how these office spaces are being retrofitted to be more environmentally responsible and designed to care for worker's wellness — core principles of <a href="/social-equity-101">social equity in the built environment</a>.

<a href="https://www.bbc.com/storyworks/the-spaces-that-shape-us/jll" target="_blank" rel="noopener noreferrer">Watch on BBC.com &rarr;</a>`,
  },
  {
    slug: 'streamly-why-i-created-seam-social-equity-assessment-tool',
    title: 'Why I Created SEAM: The Social Equity Assessment Tool',
    excerpt:
      'Rainey Shane\u2019s background in law enforcement and experience leading rescue missions from forced labour led her on a mission for better equity and social justice in the real estate industry and beyond.',
    category: 'In the Press',
    author: { name: 'Sarah Austin', role: 'Streamly' },
    date: '2023-10-24',
    readTime: '1 min read',
    image: { src: '/images/blog/why-i-created-seam.webp', alt: 'Rainey Shane on why she created SEAM' },
    body: `Sometimes it takes just one person to spark a movement for change. Rainey Shane's background in law enforcement and experience leading rescue missions from forced labour led her on a mission for better equity and social justice in the real estate industry and beyond.

We spoke to Shane about <a href="/about">SEAM</a>, the social impact measurement tool she co-created. In this in-depth interview she explains how the <a href="/resources/standard">Social Equity Assessment Method</a> works, why it is so important at this moment in time and what still needs to be done to make it the powerful force for good she envisages.

<a href="https://streamly.video/video/why-i-created-seam-a-social-equity-assessment-tool" target="_blank" rel="noopener noreferrer">Watch the video on Streamly &rarr;</a>`,
  },
  {
    slug: 'green-healthy-places-podcast-social-equity-commercial-real-estate',
    title: 'Social Equity in Commercial Real Estate with Rainey Shane of SEAM',
    excerpt:
      'Rainey Shane joins the Green Healthy Places Podcast to discuss social equity in the built environment, the sustainability standard landscape, human-centered design, and the role of social equity in the real estate supply chain.',
    category: 'In the Press',
    author: { name: 'Matt Morley', role: 'Green Healthy Places Podcast' },
    date: '2024-11-19',
    readTime: '1 min read',
    image: { src: '/images/blog/rainey-podcast.webp', alt: 'Rainey Shane on the Green Healthy Places Podcast' },
    body: `In this episode of the Green Healthy Places Podcast, host Matt Morley is in Atlanta, Georgia talking to Rainey Shane, Co-Founder and CEO of SEAM, the Social Equity Assessment Method for commercial real estate.

<a href="/about">SEAM</a> aims to promote social equity in the planning, design, construction and operation of built environments.

Rainey previously ran a nonprofit focused on forced labour and spent over six years developing this new <a href="/resources/standard">standard</a> intended to help guide developers in creating more equitable buildings.

We discuss <a href="/social-equity-101">social equity</a> and Diversity, Equity & Inclusion (DEI), the sustainability standard landscape, the key challenges Rainey faced pulling this new standard together from scratch, human-centered design practices and the role of social equity in the real estate supply chain, amongst other things.

Click to listen on Apple Podcasts, Spotify, or Zencastr.`,
  },
  {
    slug: 'inaugural-crosswalks-technical-advisory-group',
    title: 'Meet the trailblazers supporting the movement to embed social equity in the built environment',
    excerpt:
      'SEAM announces the formation of our inaugural Crosswalks Technical Advisory Group, a cohort of volunteers shaping standards and developing crosswalks between SEAM and other building certification systems.',
    category: 'News',
    author: { name: 'Rainey Shane', role: 'CEO, SEAM' },
    date: '2024-07-02',
    readTime: '1 min read',
    image: { src: '/images/blog/meet-the-trailblazers.webp', alt: 'Meet the trailblazers of the SEAM Crosswalks Technical Advisory Group' },
    body: `With the ongoing development of SEAM, we are excited to announce the formation of our inaugural Crosswalks Technical Advisory Group (TAG). This unique opportunity allows dedicated volunteers to play a crucial role in shaping our standards and advancing our mission to embed social equity in the built environment.

We are excited to welcome our 2024 cohort, who will collaborate with SEAM staff to develop crosswalks between SEAM and other prominent building certification standards — starting with the <a href="/resources/leed-crosswalk">LEED Crosswalk</a>. Their work will significantly streamline the <a href="/certification">certification</a> process for projects aiming to meet multiple sustainability objectives by facilitating recognition and integration of SEAM's social equity criteria within other certification systems.

Our committee represents a broad spectrum of industries and professional backgrounds, ensuring continuous innovation and comprehensive knowledge as we move forward. These new voices are critical to the success of SEAM. They expand our network within the industry, and we are proud to highlight a diverse group for this first cohort of committee volunteers. If you are interested in joining a SEAM TAG, please <a href="/contact">reach out</a>.

This inaugural group will collaborate to push SEAM standards into new spaces and ensure that our framework for equitable built environments remains highly relevant, accessible, and innovative.`,
  },
  {
    slug: 'unlocking-roi-rossi-calculator-social-equity-investments',
    title: 'Unlocking ROI: The ROSSI\u2122 Calculator \u2014 Your Key to Justifying Social Equity Investments',
    excerpt:
      'Project owners want to know their return on investment in social equity. The ROSSI\u2122 Calculator bridges the gap between social sustainability strategies and financial performance in less than 20 questions.',
    category: 'The Standard',
    author: { name: 'Rainey Shane', role: 'CEO, SEAM' },
    date: '2024-07-18',
    readTime: '2 min read',
    image: { src: '/images/blog/rossi-calculator.webp', alt: 'ROSSI Calculator for social equity ROI' },
    body: `One thing we often hear as we talk to project owners interested in embedding social equity into their projects is the challenge of justifying the cost of the investment. This is not unlike the challenges faced with getting greenlit for environmental sustainability projects.

SEAM has attempted to address this issue through evidence and research. We share statistics and data from an overwhelming number of research studies and reports about the benefits of social sustainability for companies. I have PowerPoint deck after deck showing the latest percentages of customers who won't purchase from, employees who won't work for, or profit margin growth for companies that perform well on social factors.

But we were still coming up short. While this is compelling information, it is intangible and disconnected from the financial value it contributes to the bottom line. It doesn't answer the base-level question they have, which is, "What is my return on investment?" So we went back to the drawing board.

The research shows that social sustainability drives business and societal success, but quantifying the financial impact of efforts in these areas is necessary. We want to make <a href="/certification">SEAM Certification</a> the easy choice, so we needed a way to connect social sustainability strategies with financial performance, ensuring that efforts to promote social equity and social sustainability also lead to measurable financial benefits.

## Bridging the gap

So, we developed the ROSSI\u2122 Calculator to bridge the gap and make that connection. We started by researching tools already in use. We based our foundational model on the NYU Stern Center for Sustainable Business ROSI\u2122 Methodology. Corporate leaders and investors use this Return on Sustainability Investment methodology to bridge the gap between sustainability strategies and financial performance. While our calculator focuses only on social factors, the NYU Stern ROSI Methodology is a much more detailed dive into all the ESG factors of a sustainability program. I urge you to visit that site to learn more.

We then explored the latest research to ensure we had the most up-to-date statistics. During the calculator's development, we examined hundreds of studies, whitepapers, and reports on the direct relationship between social sustainability and financial performance. All quoted research is from 2019 to 2024. We selected the most relevant and applicable statistics as the calculator's foundation.

We ended up with a simple model that allows you to calculate your return on social sustainability (SEAM) investment in less than 20 questions. The <a href="/resources/rossi">ROSSI Calculator</a> is designed to be user-friendly and straightforward, hoping to be the missing link to providing a solid business case for current and future social sustainability initiatives.

For more information about the methodology, formulas, and research behind the calculator, please visit the <a href="/resources/rossi">ROSSI Calculator page</a>. We value your feedback on the tool and have provided a feedback form at the bottom of that webpage. Your insights are important to us and will help us continue to improve the ROSSI Calculator. We can't wait to see what you think!`,
  },
  {
    slug: 'what-the-jack-teaches-us-about-human-centric-real-estate',
    title: "What 'The Jack' teaches us about human-centric real estate",
    excerpt:
      'When Urban Visions set out to certify The Jack in Seattle\'s Pioneer Square, there was no SEAM playbook. They helped us write one — and the lessons are worth sharing with every developer serious about the people their buildings affect.',
    category: 'Certified Projects',
    author: { name: 'Chris Pirschel', role: 'CMO, SEAM' },
    date: '2025-03-25',
    readTime: '2 min read',
    featured: true,
    image: { src: '/images/blog/the-jack-pioneer-square.webp', alt: 'The Jack office building in Seattle, the world\'s first SEAM Certified location' },
    body: `When Urban Visions set out to certify The Jack in Seattle's Pioneer Square, there was no SEAM playbook. They helped us write one, and the lessons from that process are worth sharing with every developer who is serious about the people their buildings affect.

The Jack is a mixed-use building in one of Seattle's most storied neighborhoods. For Urban Visions, <a href="/certification">SEAM Certification</a> wasn't about collecting a credential. It was about doing the work, genuinely, and being willing to let that work be measured.

Here's what we learned together.

## Start with the people, not the building

A core premise of the SEAM process was helping Urban Visions understand who was actually affected by this project. More than just future tenants or the immediate block, they needed the full picture of people whose lives intersected with The Jack: residents, workers, neighboring businesses, and the broader Pioneer Square community, in addition to the tenants who would occupy the building.

SEAM Certification's Impacted Party Engagement process created the structure for that analysis. More than 1,000 community voices were documented, not as public comment on a finished plan, but as input that shaped the project while it could still be shaped. That's a meaningful distinction. All too often, community engagement in real estate happens after the design is locked and with little ability to make meaningful adjustments.

## What certification actually required

The Jack received Bronze Operations + Maintenance certification, the first project in the world to earn that designation with SEAM.

Achieving it meant actively working through four pillars of equity: <a href="/standard/social-impact">Social Impact</a>, <a href="/standard/social-responsibility">Social Responsibility</a>, <a href="/standard/social-justice">Social Justice</a>, and <a href="/standard/social-accountability">Social Accountability</a>.

In practice, that resulted in documented community engagement and resulting impact on decision-making, new inclusive design features, neighborhood safety investments, and operational policies shaped by what the community said they actually needed.

One of the more surprising outcomes was what happened in the contracting process. Every contractor incorporated the human rights requirements into their contracts without pushback. That's not something we take for granted. It means the social impact commitments Urban Visions made didn't stop at the owner level. They traveled down the supply chain and into the working conditions of the people who built and operate the building. That's what extending equity into a project actually looks like.

And the <a href="/resources/standard">SEAM framework</a> is meant to build on itself. Each certification cycle creates a baseline of data and documentation that makes the next round more informed and more impactful. Urban Visions now has that foundation.

## The lesson worth taking

The Jack has the potential to serve up to 459 building occupants. That's a lot of people whose daily experience — the building's design, its operations, its relationship to the surrounding neighborhood — gets shaped by decisions made long before they walk through the door.

SEAM Certification aims to give developers a structured way to make those decisions with an underpinning of best-in-class research, so the decisions they make are grounded in something that creates real impact.

The result is a project that aims to perform better for the business and help create genuine value for the people affected by it.`,
  },
  {
    slug: 'seam-ap-credential-launch',
    title: 'SEAM launches the AP credential: empowering real estate to champion people-centered practices',
    excerpt:
      'SEAM, Inc. has unveiled the SEAM Accredited Professionals program, enabling practitioners worldwide to guide developers, property owners, and occupiers through the certification framework.',
    category: 'News',
    author: { name: 'Rainey Shane', role: 'Co-Founder, SEAM' },
    date: '2024-12-17',
    readTime: '5 min read',
    image: { src: '/images/blog/seam-ap-credential-launch.webp', alt: 'SEAM Accredited Professional credential seal' },
    body: `SEAM, Inc. has unveiled the <a href="/ap-credential">SEAM Accredited Professionals (AP)</a> program — a certification initiative that enables professionals worldwide to guide developers, property owners, and occupiers through SEAM's comprehensive <a href="/certification">certification framework</a>, promoting dignity, community well-being, and economic opportunity in real estate projects.

## Why the AP credential matters

Co-founded in 2018 by Rainey Shane and Alex Demestihas — both former leaders at the global real estate firm JLL — SEAM emerged from a vision to address social inequities through commercial real estate practices. Shane's prior involvement with child rescue organizations combating sex trafficking and forced labor highlighted the necessity of addressing forced labor in construction supply chains.

"There is a need for a people-focused framework that embeds equity into real estate using clear principles rather than relying on proxy metrics," the organization states. SEAM's approach aligns business objectives with meaningful community benefits throughout real estate development and broader supply chains.

## How the program works

The AP program features a self-paced online curriculum and credential examination, with course content developed in partnership with Raccoon Gang. The exam was designed by Caveon's secure exam development team and administered through the Scorpion platform, ensuring accessibility for professionals globally.

The credential signals mastery of <a href="/resources/standard">the SEAM Standard</a> and qualifies practitioners to lead certification projects across all four pillars: <a href="/standard/social-impact">Social Impact</a>, <a href="/standard/social-responsibility">Social Responsibility</a>, <a href="/standard/social-justice">Social Justice</a>, and <a href="/standard/social-accountability">Social Accountability</a>.

## What it means for the industry

The AP program establishes a professional class of practitioners who can translate the Standard into measurable outcomes on real projects. For developers and owners, it means access to qualified professionals who understand how to integrate social equity into every phase of a project — from design and procurement through ongoing operations.

Professionals interested in the credential can learn more about eligibility, preparation, and the exam process on the <a href="/ap-credential">AP Credential page</a>.`,
  },
  {
    slug: 'cre-industry-first-social-impact-certification',
    title: 'CRE industry leaders announce world\'s first social impact certification for commercial real estate',
    excerpt:
      'SEAM, Inc. unveiled SEAM Certification — the first social impact certification designed specifically for commercial real estate — with founding sponsors JLL, Interface, HITT Contracting, Jamestown, and Leapley Construction.',
    category: 'News',
    author: { name: 'Rainey Shane', role: 'Co-Founder, SEAM' },
    date: '2022-11-15',
    readTime: '4 min read',
    image: { src: '/images/blog/cre-industry-first.webp', alt: 'CRE industry leaders announce the first social impact certification for commercial real estate' },
    body: `SEAM, Inc., a nonprofit led by commercial real estate veterans Rainey Shane and Alex Demestihas, has unveiled <a href="/certification">SEAM Certification</a> — the first social impact certification program designed specifically for commercial real estate.

## Addressing a critical gap

The program establishes standards for developers, property owners, and occupiers to demonstrate positive social impact through their built environment projects. "SEAM addresses a critical gap in understanding and metrics surrounding the social impact of commercial real estate," Shane said, positioning it as complementary to existing green building certifications like LEED.

<a href="/resources/standard">The SEAM Standard</a> aligns with UN Sustainable Development Goals and integrates with organizations' ESG, DEI, and CSR strategies. The framework guides companies through project certification, professional accreditation, and membership in a community of practitioners.

## Founding sponsors

Key supporters include founding sponsors JLL, Interface, HITT Contracting, Jamestown, L.P., and Leapley Construction. The organization completed pilot projects across the United States, Canada, and Australia.

## The first certified building

Seattle-based Urban Visions registered the first SEAM Certification pilot project with their development, The Jack — a 175,000 SF, 8-level building in Seattle's historic Pioneer Square District. The Jack is pursuing SEAM Operations and Maintenance Certification, making it the first building in the world to pursue social equity certification.

"With SEAM Certification, organizations can differentiate themselves and their developments by meeting rigorous international standards for positive social impact in their communities and beyond," Shane said.`,
  },
  {
    slug: 'bisnow-social-impact-certification-launches',
    title: 'Social impact certification launches for CRE development, joining LEED and WELL',
    excerpt:
      'Bisnow covers the launch of SEAM Certification — a new nonprofit program to standardize social impact measurement in commercial real estate, founded by JLL veterans.',
    category: 'In the Press',
    author: { name: 'Bianca Barragán', role: 'Bisnow' },
    date: '2022-11-16',
    readTime: '4 min read',
    image: { src: '/images/blog/bisnow-launch.webp', alt: 'Bisnow coverage of social impact certification launch for commercial real estate' },
    body: `<em>Originally published in <a href="https://www.bisnow.com/national/news/commercial-real-estate/seam-social-equity-certification-116429" rel="noopener noreferrer" target="_blank">Bisnow</a>.</em>

A new nonprofit called SEAM Inc. (social equity assessment method) has launched a <a href="/certification">certification program</a> to standardize social impact measurement in commercial real estate development.

## From JLL to social equity

Founded by industry veterans Rainey Shane and Alex Demestihas — both employed at JLL with combined 30 years of CRE experience — SEAM "addresses a critical gap in understanding and metrics surrounding the social impact of commercial real estate," Shane stated.

The certification evaluates projects across social equity criteria inspired by UN Sustainable Development Goals, covering areas including community involvement, social investment, equity and justice, innovation, human rights, and workplace health and safety.

## How it works

Similar to LEED certification for sustainable building practices, SEAM projects receive tiered designations: Bronze, Silver, Gold, or Platinum. Developers accumulate points across categories, with Platinum status requiring solutions that persist beyond ownership changes.

Shane emphasized that current social impact efforts often measure outputs rather than actual outcomes. "As more projects go through this, we will start to develop a body of research that starts to give us facts on what activities truly correlate to outcomes."

## The first project

SEAM's inaugural certification covers Seattle's The Jack, an office and retail development by Urban Visions, which is tracking Platinum status in community involvement by adjusting ground-floor retail to match neighborhood preferences.

The organization also offers <a href="/ap-credential">professional accreditation</a>, with 16 individuals in the beta program at launch.`,
  },
  {
    slug: 'seam-expands-executive-leadership-team',
    title: 'SEAM expands executive leadership team to accelerate growth and operational scale',
    excerpt:
      'SEAM, Inc. appoints a Chief Operating Officer and Chief Marketing Officer, signaling the organization\'s next phase of operational maturity as it scales certification and the AP credential worldwide.',
    category: 'News',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2026-03-03',
    readTime: '3 min read',
    image: { src: '/images/blog/seam-leadership-team.webp', alt: 'SEAM executive leadership team expansion announcement' },
    body: `SEAM, Inc. is expanding its executive leadership team with the appointment of a Chief Operating Officer and Chief Marketing Officer, signaling the organization's next phase of operational maturity and growth.

Co-founder and CEO Rainey Shane will continue leading the vision and evolution of the Social Equity Assessment Method (SEAM) Standard and <a href="/certification">Certification</a>, while newly appointed COO Shane Gring and CMO Christopher Pirschel join to strengthen internal systems and accelerate the adoption of SEAM Certification and the <a href="/ap-credential">SEAM Accredited Professional (AP)</a> credential worldwide.

"We are entering a defining stage in SEAM's evolution," Rainey Shane said. "Our mission remains constant — advancing equity in the built environment. What's changing is our scale."

## Operational leadership to scale delivery

Shane Gring brings more than 15 years of experience advancing mission-driven enterprises in the green building and social impact sectors. He founded BOULD, a national green-job training social enterprise that expanded to 12 locations across 10 states and supported LEED certification for more than 60 affordable housing projects. He also co-led the development of a social equity framework at the U.S. Green Building Council, impacting over 8.5 million square feet of under-resourced real estate.

"My role is to improve the systems, partnerships, and execution mechanisms to support that framework at scale," Gring stated.

## Expanding visibility and market adoption

Christopher Pirschel brings more than a decade of experience in brand development, communications, and growth across the certification and membership industries, including roles working with the International WELL Building Institute and the Oncology Nursing Society.

"Social sustainability is more than a certification conversation. It's a business conversation that resonates with leaders," Pirschel explained.

With this expanded leadership team, SEAM is positioned to grow its standard, support practitioners and SEAM APs, and become a durable, globally recognized framework for social sustainability in the built environment.`,
  },
  {
    slug: 'the-jack-achieves-first-seam-certification',
    title: 'The Jack achieves world\'s first SEAM Certification',
    excerpt:
      'Urban Visions\' The Jack in Seattle\'s Pioneer Square earns Bronze O+M: Developer certification — the first building in the world to achieve SEAM Certification, with input from more than 1,000 community members.',
    category: 'News',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2025-01-27',
    readTime: '3 min read',
    image: { src: '/images/blog/the-jack-first-certification.webp', alt: 'The Jack in Seattle achieves the world\'s first SEAM Certification' },
    body: `The Jack, developed by Urban Visions, has achieved a Bronze level <a href="/certification">SEAM Certification</a> under the Operations + Maintenance: Developer rating system — making it the first building in the world to earn this designation.

Located in Seattle's historic Pioneer Square, The Jack is a 175,000 SF mixed-use building that has set a precedent for what social equity certification looks like in practice.

## A collaborative process

As SEAM's first trailblazer, Urban Visions navigated uncharted territory. The team collaborated with SEAM to refine 143 certification processes, enhance 262 elements in <a href="/resources/standard">the SEAM Standard</a>, and calibrate 46 scorecard activities — creating a framework that is now more actionable for future adopters.

With input from 1,043 community members — representing a 99% confidence level with a 3% margin of error — The Jack is closely aligned with the needs and aspirations of its neighborhood. This level of community engagement goes well beyond what is typical in commercial real estate development.

## What this means for the industry

The Jack's certification demonstrates that social equity in commercial real estate can be measured, verified, and recognized through a rigorous third-party process. It validates the approach that SEAM has been developing since 2018: a framework rooted in social science, aligned with international standards, and designed to create accountability for the relationship between buildings and the people they affect.

For developers and owners considering <a href="/certification">SEAM Certification</a>, The Jack provides a real-world proof point. The process is rigorous but achievable, and the community engagement it requires produces insights that strengthen both the project and its relationship to the surrounding neighborhood.

Professionals interested in leading certification projects can explore the <a href="/ap-credential">SEAM AP credential</a>.`,
  },
  {
    slug: 'pursuing-leed-head-start-seam-certification',
    title: 'Pursuing LEED? That gives you a head start in SEAM Certification',
    excerpt:
      'SEAM has developed a crosswalk mapping three LEED Social Equity Pilot Credits to specific SEAM activities — showing where your LEED efforts translate into a head start within SEAM Certification.',
    category: 'The Standard',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2025-04-22',
    readTime: '4 min read',
    image: { src: '/images/blog/leed-head-start.webp', alt: 'LEED certification gives you a head start toward SEAM Certification' },
    body: `If you're working on a LEED project, there's a good chance some of the work you're already doing moves you meaningfully closer to <a href="/certification">SEAM Certification</a>. SEAM has developed a crosswalk that maps three LEED Social Equity Pilot Credits to specific SEAM activities, identifying exactly where your LEED efforts translate into a head start within SEAM Certification.

This isn't about making the two certifications interchangeable. They're not. SEAM goes deeper on social equity than any environmental or wellness certifications are designed to. But for project teams already committed to LEED, the crosswalk reduces redundancy and makes it easier to understand where you're already building toward both.

Here's what the three LEED Social Equity Pilot Credits map to within SEAM.

## IPpc89: Social equity within the community

This pilot credit is built around community engagement: defining the community your project affects, partnering with local organizations, collecting feedback, and implementing strategies to improve equity. Each of those steps has a corresponding activity in SEAM's Impacted Party Engagement framework.

If you've completed Option 2 (the community-focused path), your community profile work maps to SEAM's activity around understanding who is likely to be affected by your project. Your engagement planning maps to SEAM's requirement to create a reliable, credible, and efficient impacted party engagement plan. And your community programs and volunteer initiatives map to SEAM activities around community involvement partnerships.

One difference worth noting: LEED's definition of community focuses on the immediate area around a project. SEAM's definition is broader in application, extending to workers in the supply chain and others who may be affected upstream or downstream. That's where the partial nature of the alignment comes in, and where SEAM builds on the foundation your LEED work creates.

## IPpc90: Social equity within the project team and operations staff

This pilot credit addresses how your organization treats the people who build and operate your building. SEAM recognizes this work in several places.

If you're paying a living or prevailing wage under Option 1, that maps to SEAM's requirement that suppliers provide a living wage, with points awarded based on the percentage of workers covered. Work around equitable supplier procurement maps to SEAM's Equity + Inclusion in Tier 1 Supplier Procurement activity. And if your path to this credit involved local community employment initiatives, that maps directly to SEAM's activity promoting local community employment.

Option 2, which focuses on organizational social responsibility, maps to SEAM activities around voluntary social responsibility initiatives and implementing site-specific governance policies during both construction and operations.

## IPpc144: Social equity within the supply chain

This pilot credit focuses on ethically sourced materials. If you've pursued it, your work maps to SEAM's Ethical Sourcing of Products and Materials activity. SEAM recognizes ethically sourced materials that align with approved certifications, and the work you've done to identify and document ethical sourcing practices for LEED directly informs what SEAM needs to see.

## How to use the crosswalk

The <a href="/resources/leed-crosswalk">SEAM + LEED crosswalk</a> document walks through each alignment in detail, including the specific SEAM points available for each pilot credit and what additional documentation your project team needs to submit to claim them. For project teams pursuing both certifications, it's a practical tool for understanding where your efforts compound rather than compete.

If you're already pursuing or hold a LEED certification and want to understand what SEAM Certification would require on top of what you've done, <a href="/get-started">we're glad to walk you through it</a>. You can also explore the full <a href="/resources/standard">SEAM Standard</a> or calculate your potential <a href="/resources/rossi">return on social equity investment</a>.`,
  },
  {
    slug: 'community-engagement-usually-starts-wrong-place',
    title: 'Community engagement usually starts in the wrong place',
    excerpt:
      'Most community engagement in CRE happens after the design is locked. SEAM\'s Impacted Party Engagement framework flips the sequence — consult communities before designs finalize.',
    category: 'Practitioner Perspectives',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2025-04-13',
    readTime: '3 min read',
    image: { src: '/images/blog/community-engagement.webp', alt: 'Community engagement in commercial real estate usually starts in the wrong place' },
    body: `Here's how community engagement typically unfolds in commercial real estate: developers prepare materials, schedule public meetings, and invite residents to learn about their project. Renderings are displayed. Q&A sessions occur. Community members react to what they've been shown.

However, this approach conflates education with genuine engagement. The underlying logic seems sound — informed feedback requires informed residents — yet it rests on a flawed assumption: that feedback quality depends on how much residents understand the project, rather than how well developers understand the community.

## The real expertise lies with residents

Residents aren't commercial real estate experts, nor do they need to be. They are unparalleled authorities on their own neighborhoods: what's lacking, what functions poorly, what they value, observed changes, and what risks being lost.

This local knowledge should inform development before design decisions solidify. By the time renderings appear, critical choices — building orientation, street relationships, parking solutions, and intended users — are already locked in. Requesting feedback at this stage puts residents in a reactive position rather than a collaborative one. This explains project rejections and developer frustration.

## A better sequence

The improved approach is straightforward: consult communities before designs finalize. Learn what residents appreciate about their neighborhood, what doesn't work, and what's missing. Integrate these insights into your team's planning. Then present designs that already reflect community input.

This isn't co-design in the sense of transferring design authority to residents. Professional expertise remains with developers and engineers. Rather, the timing and focus of listening changes.

## Better outcomes

Projects incorporating early community input experience less opposition, smoother approvals, and stronger operational goodwill. Benefits manifest in timelines, costs, and long-term performance.

Additionally, quality improves. Early conversations reveal informal gathering spaces, critical transit connections, and historical context that market studies miss — details that strengthen design decisions.

SEAM's Impacted Party Engagement framework — part of the <a href="/standard/social-impact">Social Impact</a> pillar — operationalizes this logic by structuring listening, documenting insights, and creating processes for community input to shape decisions. The industry has typically viewed community engagement as a risk to mitigate; it's actually an asset when approached strategically.

<a href="/resources/blog/what-the-jack-teaches-us-about-human-centric-real-estate">The Jack in Seattle</a> is a case study in what happens when this approach is taken seriously — more than 1,000 community voices shaped the project before designs were finalized.`,
  },
  {
    slug: 'why-i-left-jll-to-work-on-seam-full-time',
    title: 'Why I left JLL to work on SEAM full time',
    excerpt:
      'Rainey Shane shares the personal journey from volunteering on child rescue missions to founding a social equity certification for commercial real estate — and why she left JLL to lead it.',
    category: 'Practitioner Perspectives',
    author: { name: 'Rainey Shane', role: 'Co-Founder, SEAM' },
    date: '2025-04-06',
    readTime: '3 min read',
    image: { src: '/images/blog/why-i-left-jll.webp', alt: 'Rainey Shane on why she left JLL to work on SEAM full time' },
    body: `I used to fly into countries I'd never been to, meet children I'd never forget, and come home to manage real estate projects I couldn't look at the same way twice.

For years I lived in that dissonance. On one side, volunteer work with nonprofits in developing countries — rescue missions for child trafficking and forced labor. On the other, a career in commercial real estate at JLL, managing projects whose supply chains I knew, in some cases, were connected to the very conditions I was fighting against on weekends.

## The gap no one was filling

The commercial real estate industry had rigorous frameworks for measuring environmental performance. LEED for energy and materials. WELL for health and wellness. But when it came to the social dimension — labor practices, community effects, equity concerns — the industry relied on self-reporting and good intentions.

There was no systematic way to measure whether a building was having a positive social impact on the people it touched. No third-party verification. No accountability structure. Just voluntary commitments with no way to evaluate whether they were working.

## Building the Standard

In 2018, a colleague and I began developing what became <a href="/resources/standard">the SEAM Standard</a>. Over six years, we grounded it in international frameworks including UN Human Rights principles and International Labour Organization guidelines. The standard underwent independent verification.

We evaluated buildings across four interdependent pillars: <a href="/standard/social-impact">Social Impact</a>, <a href="/standard/social-responsibility">Social Responsibility</a>, <a href="/standard/social-justice">Social Justice</a>, and <a href="/standard/social-accountability">Social Accountability</a>. Each pillar contains specific activities with defined documentation requirements. Projects earn Bronze through Platinum based on performance across all four.

## Making the leap

The SEAM Standard launched in 2024. The first certified project — <a href="/resources/blog/what-the-jack-teaches-us-about-human-centric-real-estate">The Jack in Seattle</a> — was completed in 2025. That same year, I departed JLL to lead SEAM full-time.

It wasn't a dramatic decision. It was the next step in work I'd already been doing for years. The <a href="/ap-credential">credential program</a> targets professionals — architects, construction managers, sustainability directors — seeking structured, evidence-based approaches to implementing social equity in real estate development.

The industry is just beginning to understand that the "S" in ESG requires the same rigor as the "E." That is what SEAM exists to provide.`,
  },
  {
    slug: 'why-is-measuring-the-s-in-esg-still-so-hard',
    title: 'Why is measuring the S in ESG still so hard?',
    excerpt:
      'The sustainability field has tried to measure social impact using tools built for environmental performance. SEAM takes a different approach — rooted in social science methodology and logic models.',
    category: 'The Standard',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2025-03-30',
    readTime: '5 min read',
    image: { src: '/images/blog/measuring-s-in-esg.webp', alt: 'Why measuring the S in ESG is still so hard' },
    body: `There is a thermometer on the wall of nearly every commercial building in America. It tells you exactly what the temperature is, to the degree. You can argue about whether 68 is the right number, but you cannot argue about what the number is. The measurement is clean, reliable, and replicable.

Now try measuring whether the people in that building feel like they belong there.

That's not a rhetorical provocation. It's the actual challenge at the center of social sustainability, and it explains — more honestly than most people will say out loud — why the S in ESG keeps getting treated as the complicated cousin no one quite knows how to seat at the table.

## The category error hiding in plain sight

For the better part of a decade, the sustainability field has tried to measure social impact using the same tools it developed for environmental performance. On the surface, this seems reasonable: both involve data, both involve targets, both involve third-party verification.

But things and people are not the same kind of subject.

When you measure a building's carbon footprint, you're working in physical science. The variables are knowable, the relationships stable, and the studies replicable because the underlying reality doesn't change much year to year. A kilogram of CO2 is a kilogram of CO2 in 2015 and in 2025.

Social science doesn't work that way. People change. The conditions that shape what a particular intervention means to a particular group of people shift constantly: across time, across cultures, and sometimes across a single city block. A program that reduces economic displacement in one neighborhood might have no effect, or even a negative one, two miles away.

When you apply physical-science thinking to social questions, you get proxy metrics. You count diverse vendors and believe it signals inclusion. You tally volunteer hours and believe it is community investment. None of those numbers are lies. But a proxy is an informed guess about a relationship between activity and outcome that hasn't been proven yet. Treated as an outcome, it's a placeholder pretending to be an answer.

This is the honest reason the S remains hard to measure. Not because the people working on it aren't trying. But because the field largely inherited a measurement philosophy built for a different kind of problem.

## Taking a different approach

When SEAM developed its framework, the organization knew it needed an approach rooted in social science methodology. The logic model — developed in social program evaluation and international development — offered a proven way to measure human outcomes rigorously.

A logic model maps the chain of causation between what you do and what actually changes. It has five stages:

1. **Inputs:** The resources you commit
2. **Activities:** What you do with them
3. **Outputs:** Direct, countable products (e.g., number of community participants, percentage of contracts awarded to diverse suppliers)
4. **Outcomes:** Changes in conditions resulting from activities (e.g., reduced displacement, improved economic mobility, stronger community trust)
5. **Impact:** The portion of changes actually attributable to your project, rather than what would have happened anyway

That last distinction separates substantive impact measurement from preliminary reporting. Claiming positive outcomes is straightforward. Attributing them honestly requires isolating your contribution, accounting for baseline conditions, and specifying precisely how much change you can claim credit for. This represents the only rigorous version of impact measurement.

## Where we are, and where we're going

SEAM acknowledges current limitations: the field cannot yet guarantee specific, quantifiable outcomes for every context. Social science lacks the comprehensive evidentiary datasets needed to offer such certainty immediately.

What <a href="/certification">SEAM Certification</a> does accomplish is establish foundations. Every certified project generates structured, comparable data. Applications document inputs, activities, and outputs in standardized formats, allowing correlations across projects and building the evidence base for future precision.

This mirrors environmental certification's development trajectory — the field didn't arrive with perfect evidence initially but accumulated data project-by-project over years.

The S in ESG is hard because it should be. We're trying to measure what happens to people, and people deserve that level of care. If you're looking for a practical starting point, the <a href="/resources/rossi">ROSSI Calculator</a> can help you quantify the financial return on social equity investment, and the <a href="/resources/standard">SEAM Standard</a> provides the full framework.`,
  },
  {
    slug: 'architecture-is-political-seam-deep-dive',
    title: 'Social equity in commercial real estate: a deep dive into SEAM',
    excerpt:
      'Rainey Shane joins the Architecture is Political podcast for an in-depth conversation on measuring social equity in the built environment, the origins of the SEAM Standard, and what certification means for communities.',
    category: 'In the Press',
    author: { name: 'Melissa Daniel', role: 'Architecture is Political Podcast' },
    date: '2023-09-12',
    readTime: '4 min read',
    image: { src: '/images/blog/architecture-is-political.webp', alt: 'Rainey Shane on the Architecture is Political podcast' },
    body: `<em>Originally featured on the <a href="https://www.archispolly.online/episodes/seam" rel="noopener noreferrer" target="_blank">Architecture is Political podcast</a>, hosted by Melissa Daniel.</em>

Rainey Shane, co-founder of SEAM, joined the Architecture is Political podcast for an extended conversation on what it means to measure social equity in commercial real estate — and why the industry needs a dedicated framework to do it.

## Can we actually measure social equity?

The episode explores a question that Metropolis Magazine posed in a companion article: can we actually measure for social equity? Shane argues that the answer is yes, but only if we build the right tools.

"The built environment has had rigorous measurement for environmental performance for decades," Shane said. "We have LEED for energy and materials, WELL for health and wellness. But when it comes to the social dimension — the relationship between a building and the people it touches — the industry has relied on self-reporting and good intentions."

## The SEAM approach

<a href="/resources/standard">The SEAM Standard</a> addresses this gap with a framework rooted in international human rights principles and social science research. The conversation covers how the four pillars work together, why community voice is built into the evaluation process, and how <a href="/certification">certification</a> creates accountability that voluntary commitments cannot.

## What practitioners need to know

For architects, designers, and consultants, the episode provides practical context on how SEAM integrates with existing workflows. Shane describes it as a defined scope of work — billable, schedulable, and supported by templates — rather than an open-ended obligation layered onto an already-thin design fee.

The model involves a trifecta: a green certification, a health and wellness certification, and a social equity certification. Interface is pursuing all three — LEED, WELL, and SEAM — making it the first repurposed building in the world with that combination.

Professionals interested in leading certification work can explore the <a href="/ap-credential">SEAM AP credential</a>.`,
  },
  {
    slug: 'embodied-suffering-building-materials',
    title: 'Tools to eliminate embodied suffering from the building materials supply chain',
    excerpt:
      'A look at the tools and frameworks — including SEAM Certification — that the industry can use to address forced labor, human trafficking, and unethical practices embedded in building material supply chains.',
    category: 'The Standard',
    author: { name: 'Rainey Shane', role: 'Co-Founder, SEAM' },
    date: '2023-10-24',
    readTime: '7 min read',
    image: { src: '/images/blog/embodied-suffering.webp', alt: 'Embodied suffering in building materials — the human cost behind construction' },
    body: `The term "embodied suffering" describes the human cost hidden inside building materials — forced labor in quarries, child labor in mines, unsafe conditions in factories, and trafficking across supply chains that deliver products to construction sites worldwide.

The scale is staggering. Between June 2022 and December 2023, more than 2,500 shipments valued at $2.2 billion — including PVCs, solar panels, and other building materials — were denied entry to the United States due to forced labor concerns.

## The gap in current practice

The built environment industry has made significant progress on embodied carbon. Tools like the EC3 calculator have given designers and specifiers the ability to evaluate the environmental footprint of materials at the point of specification. But embodied suffering has no equivalent infrastructure.

Most practitioners cannot answer a basic question about their projects: were the materials in this building produced under conditions that respect human rights?

## Where SEAM fits

<a href="/resources/standard">The SEAM Standard</a> addresses supply chain ethics through the <a href="/standard/social-accountability">Social Accountability</a> pillar. <a href="/certification">Certification</a> requires that projects evaluate their supply chains against documented labor and human rights criteria — not as a one-time audit, but as an ongoing practice with third-party verification.

This is not about perfection. No certification can guarantee that every raw material in a building was sourced ethically. But the Standard creates accountability for asking the questions, documenting the answers, and improving over time.

## Tools available now

Several tools and frameworks are emerging to help practitioners address embodied suffering:

1. The SEAM Standard's Social Accountability pillar provides credit-level requirements for supply chain evaluation
2. Grace Farms' Design for Freedom initiative tracks forced labor risks in common building materials
3. The Uyghur Forced Labor Prevention Act has created new compliance requirements for materials sourced from specific regions
4. Industry coalitions are developing shared databases of vetted suppliers

## What practitioners can do

Start by asking your suppliers direct questions about labor practices. Specify materials from manufacturers who can demonstrate chain-of-custody documentation. And consider <a href="/certification">SEAM Certification</a> as a framework for making these practices systematic rather than ad hoc.

The industry did not solve embodied carbon overnight. Embodied suffering will take the same sustained commitment. But the tools are emerging, and the obligation is clear.`,
  },
]

export const posts: BlogPost[] = _posts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)
