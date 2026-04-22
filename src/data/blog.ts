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
    title: 'What The Jack teaches us about human-centric real estate',
    excerpt:
      'As the first SEAM-certified project in the world, The Jack in Seattle\'s Pioneer Square demonstrates what happens when 1,043 community voices shape a building\'s operations — and what that model means for the industry.',
    category: 'Certified Projects',
    author: { name: 'Rainey Shane', role: 'Co-Founder, SEAM' },
    date: '2024-10-30',
    readTime: '6 min read',
    featured: true,
    image: { src: '/images/blog/the-jack-pioneer-square.jpg', alt: 'The Jack building in Seattle\'s Pioneer Square, designed by Olson Kundig. Photo by Nic Lehoux' },
    body: `The Jack is a 175,000 SF, eight-level mixed-use building at 74 S. Jackson Street in Seattle's historic Pioneer Square District. Designed by Olson Kundig and developed by Urban Visions, it opened in 2023 as the first building in the world to achieve <a href="/certification">SEAM Certification</a>.

That distinction matters — not because it was first, but because of what the process revealed about what human-centric real estate actually requires.

## What made The Jack different

Most certification stories begin with design intent. The Jack's begins with listening. Before pursuing SEAM Certification, Urban Visions engaged 1,043 community members in the surrounding Pioneer Square neighborhood. That is not a survey. That is a statistically robust sample large enough to represent genuine community priorities rather than the loudest voices in a public meeting.

What the community asked for was not what the development team expected. The input reshaped ground-floor retail strategy, influenced programming decisions, and created accountability mechanisms that persist beyond the construction phase.

## Bronze certification, platinum lessons

The Jack achieved Bronze under the SEAM O+M: Developer rating system. Some observers asked why not Gold or Platinum on the first attempt. The answer reflects something important about how <a href="/resources/standard">the Standard</a> works.

SEAM Certification is not a design exercise. It is an operational commitment measured over time. Bronze on a first certification, with clear documentation and genuine community engagement, is more meaningful than a higher tier achieved through selective compliance. The Jack's team chose rigor over optics.

## What the pilot process taught us

As the inaugural SEAM Certification pilot, The Jack did not just earn a credential. It stress-tested the entire framework. Urban Visions collaborated with SEAM to refine 143 certification processes, enhance 262 elements in the Standard, and calibrate 46 scorecard activities.

Every one of those refinements made the framework more actionable for the projects that followed. The Jack's contribution to SEAM is not just its certification — it is the infrastructure of accountability that every subsequent project inherits.

## The four pillars in practice

The Jack's certification was evaluated across the four interdependent pillars of the SEAM Standard:

- <a href="/standard/social-impact">Social Impact</a>: measurable outcomes for the people and communities the building touches
- <a href="/standard/social-responsibility">Social Responsibility</a>: ethical practices in procurement, labor, and governance
- <a href="/standard/social-justice">Social Justice</a>: addressing systemic inequity through the built environment
- <a href="/standard/social-accountability">Social Accountability</a>: transparency, reporting, and stakeholder engagement

The interdependence is the point. A building cannot score well in one pillar while ignoring another. Social equity is a system, not a checklist.

## What this means for the industry

The Jack demonstrates that social equity certification is not aspirational — it is operational. The community engagement model, the documentation rigor, and the ongoing accountability structure are all replicable. They are also compatible with financial performance; Urban Visions has not reported any tension between certification requirements and project economics.

For developers considering <a href="/certification">SEAM Certification</a>, The Jack offers a clear precedent. For practitioners, the <a href="/ap-credential">SEAM AP credential</a> provides the training to lead this work. And for the communities that buildings serve, The Jack proves that their voice can be more than advisory — it can be structural.

Todd Lee, EVP at Urban Visions, put it simply: "A certification that solely focuses on social equity within the built environment is long overdue."`,
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
    slug: 'why-i-created-seam',
    title: 'Why I created SEAM: the social equity assessment tool',
    excerpt:
      'Rainey Shane shares the personal and professional journey that led to creating the SEAM Standard — from forced labor rescue missions to a certification framework for commercial real estate.',
    category: 'Practitioner Perspectives',
    author: { name: 'Rainey Shane', role: 'Co-Founder, SEAM' },
    date: '2023-10-09',
    readTime: '6 min read',
    image: { src: '/images/blog/why-i-created-seam.jpg', alt: 'Rainey Shane, co-founder of SEAM' },
    body: `The question I hear most often is: how does someone go from commercial real estate to building a social equity certification? The honest answer is that the two were never as separate as the industry assumed.

## The supply chain problem

For fifteen years I worked in commercial real estate at JLL, mostly in adaptive reuse. During that time I also volunteered as a rescue team operator for child trafficking and forced labor missions. The connection between those two worlds became impossible to ignore.

Every building has a supply chain. Every supply chain touches labor. And some of that labor — in quarries, mills, and factories far from the job site — operates under conditions that would be unrecognizable to the developers who specified the materials. The gap between intent and reality in our industry is not a small gap. It is systemic.

## From awareness to framework

Awareness is not enough. I needed a framework — something that could translate the complexity of social equity into the operational language that real estate professionals already use. Something with the rigor of <a href="/certification">LEED or WELL</a>, but focused entirely on people.

That is what <a href="/resources/standard">the SEAM Standard</a> became. Not a checklist. Not a pledge. A measurement system with independent verification, community voice in evaluation, and ongoing accountability.

## What SEAM actually measures

SEAM evaluates buildings across four interdependent pillars: <a href="/standard/social-impact">Social Impact</a>, <a href="/standard/social-responsibility">Social Responsibility</a>, <a href="/standard/social-justice">Social Justice</a>, and <a href="/standard/social-accountability">Social Accountability</a>. Each pillar contains specific activities with defined documentation requirements. Projects earn Bronze through Platinum based on performance across all four.

The key design decision was interdependence. A building cannot earn Gold by excelling in one area while ignoring another. Social equity is a system, not a menu.

## The road ahead

We have completed pilot projects in the US, Canada, and Australia. The first certified building — The Jack in Seattle — is demonstrating that social equity certification and financial performance are not in tension. They reinforce each other.

But we are early. The body of evidence is small. The practitioner network is growing. And the industry is just beginning to understand that the "S" in ESG requires the same rigor as the "E." That is what SEAM exists to provide.`,
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
