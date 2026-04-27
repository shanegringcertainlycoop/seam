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

export const posts: BlogPost[] = [
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
    image: { src: '/images/blog/the-jack-pioneer-square.jpg', alt: 'The Jack office building in Seattle, the world\'s first SEAM Certified location' },
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
    image: { src: '/images/blog/seam-ap-credential-launch.jpg', alt: 'SEAM Accredited Professional credential seal' },
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
    image: { src: '/images/blog/cre-industry-first.jpg', alt: 'SEAM Inc. logo — the first social impact certification for commercial real estate' },
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
    image: { src: '/images/blog/bisnow-launch.jpg', alt: 'Commercial real estate cityscape — Bisnow coverage of SEAM certification launch' },
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
    slug: 'pursuing-leed-head-start-seam-certification',
    title: 'Pursuing LEED? That gives you a head start in SEAM Certification',
    excerpt:
      'SEAM has developed a crosswalk mapping three LEED Social Equity Pilot Credits to specific SEAM activities — showing where your LEED efforts translate into a head start within SEAM Certification.',
    category: 'The Standard',
    author: { name: 'SEAM, Inc.', role: '' },
    date: '2025-04-22',
    readTime: '4 min read',
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

The SEAM + LEED crosswalk document walks through each alignment in detail, including the specific SEAM points available for each pilot credit and what additional documentation your project team needs to submit to claim them. For project teams pursuing both certifications, it's a practical tool for understanding where your efforts compound rather than compete.

If you're already pursuing or hold a LEED certification and want to understand what SEAM Certification would require on top of what you've done, <a href="/get-started">we're glad to walk you through it</a>.`,
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

SEAM's Impacted Party Engagement framework operationalizes this logic by structuring listening, documenting insights, and creating processes for community input to shape decisions. The industry has typically viewed community engagement as a risk to mitigate; it's actually an asset when approached strategically.`,
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
    image: { src: '/images/blog/why-i-created-seam.jpg', alt: 'Rainey Shane, co-founder of SEAM' },
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

The S in ESG is hard because it should be. We're trying to measure what happens to people, and people deserve that level of care.`,
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
    image: { src: '/images/blog/architecture-is-political.jpg', alt: 'Rainey Shane on the Architecture is Political podcast' },
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
    image: { src: '/images/blog/embodied-suffering.jpg', alt: 'The Jack building in Seattle — the first SEAM-certified project' },
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

Start by asking your suppliers direct questions about labor practices. Specify materials from manufacturers who can demonstrate chain-of-custody documentation. And consider <a href="/certification">SEAM Certification</a> or <a href="/approved">SEAM Approved</a> as frameworks for making these practices systematic rather than ad hoc.

The industry did not solve embodied carbon overnight. Embodied suffering will take the same sustained commitment. But the tools are emerging, and the obligation is clear.`,
  },
]
