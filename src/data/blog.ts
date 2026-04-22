export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  author: { name: string; role: string }
  date: string
  readTime: string
  featured?: boolean
  body: string
}

export const categories = [
  'All',
  'Certified Projects',
  'Practitioner Perspectives',
  'Sector Analysis',
  'The Standard',
  'ROSSI',
] as const

export const posts: BlogPost[] = [
  {
    slug: 'the-jack-one-year-later',
    title: 'The Jack, one year later: what Gold certification actually changed',
    excerpt:
      'Twelve months after earning SEAM Gold, The Jack in Kansas City has the data to show what social equity certification means for residents, operators, and the surrounding neighborhood.',
    category: 'Certified Projects',
    author: { name: 'Rainey Vertigan', role: 'Founder, SEAM' },
    date: '2026-03-10',
    readTime: '8 min read',
    featured: true,
    body: `When The Jack earned SEAM <a href="/certification">Gold certification</a> in early 2025, the question from every developer in the room was the same: what will this actually do?

It was a fair question. Certification systems live or die on outcomes, not intentions. Twelve months later, we have enough data to give an honest answer.

## What changed for residents

The most visible shift was in the lobby. Not architecturally (the lobby looked the same) but socially. The community programming requirements of the Gold track meant The Jack had to create recurring, resident-led gathering opportunities. What started as a compliance exercise became the building's defining characteristic.

Resident satisfaction scores climbed 23% year-over-year. Turnover dropped by a third. The property manager told us something we hear often from certified buildings: "We stopped thinking of residents as tenants and started thinking of them as neighbors."

## What changed for the neighborhood

The <a href="/standard/social-justice">economic equity pillar</a> required The Jack to source 40% of contracted services from businesses owned by historically excluded communities within a 15-mile radius. In the first year, that translated to $2.1M in local procurement that would have otherwise gone to national vendors.

Three of those local contractors have since expanded their operations. One hired six additional employees. The multiplier effect is exactly what the Standard's economic equity framework predicts, but seeing it happen in real numbers, attached to real businesses, is different from modeling it.

## What changed for capital

The Jack's investors were initially skeptical of certification. The cost of the <a href="/ap-credential">AP</a> engagement, the documentation burden, the programming commitments (these felt like friction against returns).

The year-one numbers told a different story. Net operating income exceeded pro forma by 11%, driven almost entirely by reduced turnover and the associated avoided costs (unit turns, vacancy loss, marketing). The GRESB score improved by 14 points, which mattered to two of the three institutional LPs. The <a href="/resources/rossi">ROSSI Calculator</a> had projected this improvement within two points of the actual result.

## What we learned

Gold certification did not transform The Jack into something unrecognizable. It sharpened decisions that were already being made and created accountability for outcomes that were already valued. <a href="/resources/standard">The Standard</a> did not impose an ideology. It gave a framework for measuring whether good intentions were producing good results.

That is what certification is for. Not perfection. Measurement, accountability, and a pathway to do better next year.

We are publishing the full case study, including financial performance data, resident survey methodology, and procurement audit results, in the Resources section next month.`,
  },
  {
    slug: 'rossi-v2-financial-language',
    title: 'ROSSI v2: translating equity into the financial language your board speaks',
    excerpt:
      'The updated Return on Social Sustainability Investment calculator now models portfolio-level impact, GRESB alignment, and insurance risk reduction alongside project-level returns.',
    category: 'ROSSI',
    author: { name: 'Dr. Amara Osei', role: 'Research Director, SEAM' },
    date: '2026-03-03',
    readTime: '6 min read',
    body: `The original <a href="/resources/rossi">ROSSI calculator</a> did one thing well: it took a set of social equity activities and translated them into projected financial returns at the project level. Developers and owners used it to make the case for <a href="/certification">certification</a>. It worked.

But we kept hearing the same limitation from capital providers: "This is helpful for a single asset. How do I model this across a portfolio?"

## What is new in v2

ROSSI v2 introduces three capabilities that respond directly to how institutional capital evaluates social sustainability:

**Portfolio modeling.** Upload multiple assets and see aggregated impact projections. The model accounts for geographic variation, asset class differences, and certification level across holdings.

**GRESB alignment scoring.** For every activity entered, ROSSI now maps the projected outcome to the corresponding GRESB indicator. Capital providers can see, before committing to certification, exactly how their GRESB submission will be affected.

**Insurance risk reduction.** Working with actuarial partners, we have built a preliminary model for how specific social equity activities correlate with reduced claims frequency in multifamily and commercial properties. This is early, and we are transparent about the confidence intervals, but the directional data is compelling enough to share.

## How to use it

ROSSI v2 is free and publicly accessible at <a href="/resources/rossi">seamcertification.org/rossi</a>. No account required for project-level modeling. Portfolio features require a free <a href="/community">community membership</a>.

The calculator is not a sales tool. It is a translation layer. Social equity outcomes are real. The challenge has always been expressing them in the quantitative frameworks that capital allocation decisions require. ROSSI exists to close that gap.`,
  },
  {
    slug: 'why-not-just-add-dei-to-leed',
    title: 'Why we did not just add a DEI credit to LEED',
    excerpt:
      'SEAM is complementary to existing certification systems, not competitive. But the question of why social equity needs its own framework deserves a direct answer.',
    category: 'The Standard',
    author: { name: 'Rainey Vertigan', role: 'Founder, SEAM' },
    date: '2026-02-24',
    readTime: '7 min read',
    body: `We get this question at every conference. It comes from people who respect LEED, WELL, and Fitwel (as we do) and wonder why social equity cannot simply be another credit category within an existing system.

The short answer: because social equity is not a feature of a building. It is a relationship between a building and the people it touches. That is why we built <a href="/resources/standard">the SEAM Standard</a> from the ground up.

## The credit problem

Existing certification systems are structured around credits: discrete, measurable interventions that a building either implements or does not. Low-VOC paint. Operable windows. Bike storage. These are valuable. They are also fundamentally about the physical artifact.

Social equity does not work that way. Hiring locally is not a credit you earn once. It is a practice you sustain. Community programming is not a checkbox. It is a commitment that evolves with the community. Resident dignity is not measurable by a sensor.

Adding a "DEI credit" to an existing system would reduce social equity to an intervention, something you install. The Standard treats it as a relationship, something you maintain.

## Complementary, not competitive

We want to be explicit: SEAM works alongside LEED, WELL, and Fitwel. A LEED Platinum, <a href="/certification">SEAM Gold</a> building is not a contradiction. It is the goal. Environmental performance and social equity are not in tension. They are parallel obligations.

The reason SEAM exists as a separate framework is not that existing systems are inadequate. It is that social equity is complex enough to deserve its own rigor, its own measurement methodology, and its own accountability structure.

## What the Standard does differently

Three structural differences matter:

**Ongoing verification.** <a href="/certification">SEAM certification</a> is not a one-time achievement. The Standard requires annual reporting and triennial recertification. Social equity is a practice, not an installation.

**Community voice.** The Standard requires that affected communities participate in the certification process. Not as consultees. As evaluators.

**Intersectional measurement.** The four pillars (<a href="/standard/social-impact">Social Impact</a>, <a href="/standard/social-responsibility">Social Responsibility</a>, <a href="/standard/social-justice">Social Justice</a>, and <a href="/standard/social-accountability">Social Accountability</a>) are scored interdependently. You cannot earn Gold by excelling in one pillar while ignoring another.

These are not features that bolt onto a credit system. They are foundational design decisions that required building from the ground up.`,
  },
  {
    slug: 'ap-field-report-interface-portland',
    title: 'AP field report: leading certification at Interface, Portland',
    excerpt:
      'SEAM AP Marcus Chen shares what it was like to guide a corporate headquarters through its first certification, including the moments that almost derailed the process.',
    category: 'Practitioner Perspectives',
    author: { name: 'Marcus Chen', role: 'SEAM Accredited Professional' },
    date: '2026-02-17',
    readTime: '10 min read',
    body: `I took on the Interface engagement as a <a href="/ap-credential">SEAM Accredited Professional</a> knowing it would be different from anything in my sustainability consulting career. Corporate headquarters are not multifamily housing. The "community" is the workforce. The "neighborhood" is the business district. Every framework in the Standard had to be adapted, not to lower the bar, but to make it meaningful in context.

## The first three months

The gap assessment took longer than projected. Interface had robust environmental sustainability programs (LEED Gold, WELL Silver) but had never systematically evaluated their social equity practices against a framework like <a href="/resources/standard">the SEAM Standard</a>. They were doing more than they thought in some areas (local procurement was already at 35%) and less than they assumed in others (accessibility beyond ADA compliance was essentially nonexistent).

The leadership team's reaction to the gap assessment set the tone for the entire engagement. Instead of defending their existing practices, they asked: "What would Silver look like, and what would it take to get to Gold?"

## The moment it almost fell apart

Month five. The community voice requirement. Interface's leadership was comfortable with employee surveys. They were not comfortable with giving hourly maintenance staff, contracted cleaning crews, and neighboring business owners a formal role in evaluating the building's social equity performance.

This is the conversation every AP has at some point. The Standard is clear: affected communities participate as evaluators, not consultees. For a corporate client accustomed to controlling their narrative, this felt like risk.

I did not argue the philosophical case. I showed them the data from The Jack, where community evaluation surfaced three operational improvements that the management team had missed entirely. Two of them reduced operating costs.

They agreed to the full process.

## What I would do differently

Start the community voice conversation in month one, not month five. By the time we reached it, the project timeline was set, and adding the evaluation process felt like scope creep rather than foundational methodology.

Also: budget more time for the economic equity documentation. Corporate procurement systems are not designed to track the demographic composition of vendor ownership. The data exists, but extracting it requires relationships with procurement teams that take time to build.

## What certification meant for Interface

Silver, with a clear pathway to <a href="/certification">Gold in the recertification cycle</a>. The building did not change dramatically. The relationship between the building and the people inside it did.`,
  },
  {
    slug: 'seam-approved-first-six-months',
    title: 'SEAM Approved at six months: what the activity data tells us',
    excerpt:
      'Since launching SEAM Approved, 47 organizations have verified 312 individual activities. Here is what the early adoption patterns reveal about the market.',
    category: 'Sector Analysis',
    author: { name: 'Dr. Amara Osei', role: 'Research Director, SEAM' },
    date: '2026-02-10',
    readTime: '5 min read',
    body: `<a href="/approved">SEAM Approved</a> launched six months ago as a standalone activity verification program. The hypothesis: organizations that are not ready for full <a href="/certification">certification</a> still want credible, third-party verification of specific social equity practices.

The early data supports the hypothesis, but the adoption patterns surprised us.

## Who is using it

We expected operators and property managers to be the primary adopters. They are, but not by the margin we projected. The breakdown:

- Property management firms: 34%
- Anchor institutions (hospitals, universities): 28%
- Corporate real estate teams: 21%
- Tenant corporations: 17%

The anchor institution segment was the surprise. Hospitals and universities have social equity mandates from their boards but often lack a framework for documenting compliance. SEAM Approved gives them one.

## Which activities are most popular

Of the 35 verifiable O+M activities across the four pillars, five account for 41% of all verifications:

1. Local procurement tracking and reporting
2. Multilingual signage and communication
3. Community advisory board establishment
4. Living wage verification for contracted services
5. Accessibility audit beyond ADA minimum

The pattern is clear: organizations start with activities that are either already partially in place or that have obvious operational benefits. This is not a criticism. It is how adoption works.

## What happens next

The question we are tracking most closely: does SEAM Approved lead to full certification? It is too early for definitive data, but 8 of the 47 organizations (17%) have initiated certification conversations within their first six months. Three have engaged <a href="/ap-credential">APs</a>.

If that conversion rate holds, SEAM Approved is functioning exactly as designed: a credible standalone product that also serves as a natural on-ramp to deeper engagement with <a href="/resources/standard">the Standard</a>.`,
  },
  {
    slug: 'four-pillars-explained',
    title: 'The four pillars, explained: how the Standard measures what matters',
    excerpt:
      'A plain-language guide to the SEAM Standard framework: what each pillar covers, how they interact, and why they are scored interdependently.',
    category: 'The Standard',
    author: { name: 'Rainey Vertigan', role: 'Founder, SEAM' },
    date: '2026-02-03',
    readTime: '9 min read',
    body: `<a href="/resources/standard">The SEAM Standard</a> is built on four pillars. Each one represents a dimension of social equity that buildings either advance or undermine. They are not optional modules. They are interdependent requirements.

This guide explains each pillar in plain language, describes what the Standard measures within it, and clarifies why the interdependence matters.

## Pillar 1: <a href="/standard/social-impact">Social Impact</a>

What it covers: identifying who your project affects, engaging them meaningfully, and measuring whether your efforts are actually working.

This pillar overlaps most visibly with existing certification systems. Indoor air quality, thermal comfort, acoustic performance, and access to daylight are all addressed. But the Standard goes further in two ways.

First, it measures health equity, not just health outcomes. A building where executive floors have operable windows and daylight while maintenance staff work in windowless basements scores poorly, even if aggregate health metrics look acceptable.

Second, it includes mental health and social wellbeing indicators. Spaces for respite. Access to nature. Design that reduces isolation. These are not amenities. They are health infrastructure.

## Pillar 2: <a href="/standard/social-responsibility">Social Responsibility</a>

What it covers: building equity into how your organization operates through governance, community engagement, and social investments.

This is the pillar that most distinguishes SEAM from other certification systems. It asks: who benefits economically from this building's existence?

The Standard measures local procurement percentages, living wage compliance for all workers (including contracted services), workforce development programs, and wealth-building mechanisms for residents and community members.

## Pillar 3: <a href="/standard/social-justice">Social Justice</a>

What it covers: advancing equity and inclusion across procurement, the workplace, the community, and access to capital.

ADA compliance is the floor, not the ceiling. The Standard measures universal design principles, multilingual communication, gender-inclusive facilities, sensory-friendly spaces, and digital accessibility.

The key distinction: accessibility is measured by experience, not by checklist. A building can be ADA-compliant and still be functionally exclusionary if navigation requires literacy in English, if all-gender restrooms are hidden on a single floor, or if sensory overload in common areas effectively bars neurodivergent occupants.

## Pillar 4: <a href="/standard/social-accountability">Social Accountability</a>

What it covers: upholding human rights across the supply chain, supporting safe working conditions, and protecting the health of the people your project touches.

This pillar addresses the relationship between a building and its context. Community advisory structures, cultural programming, public space activation, and neighborhood economic participation are all measured.

The Standard requires that community voice is not just solicited but incorporated into governance. Buildings do not exist in isolation. Their impact on the surrounding community is as much a part of their performance as their energy efficiency.

## Why interdependence matters

The four pillars are scored interdependently. A building cannot earn <a href="/certification">Gold</a> by excelling in Social Impact while ignoring Social Justice. This is a deliberate design decision.

Social equity is not a menu. It is a system. A building that provides excellent indoor air quality but pays its cleaning staff poverty wages is not equitable. A building with perfect accessibility but no relationship to its neighborhood is not complete.

The interdependent scoring ensures that certification reflects holistic performance, not selective excellence.`,
  },
]
