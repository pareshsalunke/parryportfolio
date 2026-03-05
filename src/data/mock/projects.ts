import {Project} from '@/lib/types';

export const mockProjects: Project[] = [
  {
    id: 'p1',
    slug: 'api-developer-platform',
    type: 'project',
    title: 'API Developer Platform',
    subtitle: 'Redesigning the developer onboarding experience',
    summary:
      'Led the 0→1 build of a self-serve API platform that reduced developer time-to-first-call from 3 days to 20 minutes, tripling activation rates.',
    tags: ['Developer Experience', 'APIs', 'Platform', 'B2B'],
    date: '2024-09-01',
    featured: true,
    status: 'published',
    company: 'Acme Corp',
    role: 'Senior Product Manager',
    duration: 'Q1 2024 – Q3 2024',
    outcome:
      'Reduced time-to-first-API-call by 89%, increasing developer activation by 3×.',
    metrics: [
      {label: 'Time to First Call', value: '20 min', context: 'down from 3 days'},
      {label: 'Developer Activation', value: '↑ 3×', context: 'within 30 days of launch'},
      {label: 'Support Tickets', value: '↓ 60%', context: 'onboarding-related'},
    ],
    challenge:
      'Our API had 40,000 registered developers but only 12% ever made a successful first call. Onboarding required manual sandbox provisioning, a 40-page PDF guide, and a support ticket just to get credentials. Developers were churning before they ever saw value.',
    approach:
      'I ran 22 developer interviews across SMB and enterprise segments, shadowed 6 integration sessions, and mapped the full friction surface. I prioritized three bets: (1) instant sandbox provisioning via OAuth, (2) interactive quickstart guides with pre-filled code snippets, and (3) an in-app credential manager that replaced the ticket workflow. I partnered with a 3-engineer pod and shipped in 8-week increments.',
    results: [
      'Time-to-first-successful-API-call dropped from 3 days to 20 minutes',
      'Developer activation (first call within 30 days) increased from 12% to 37%',
      'Onboarding support tickets down 60% within 60 days of launch',
      'NPS among developer segment improved from 22 to 51',
    ],
    techStack: ['REST', 'OpenAPI 3.0', 'OAuth 2.0', 'Postman Collections'],
  },
  {
    id: 'p2',
    slug: 'mobile-checkout-redesign',
    type: 'project',
    title: 'Mobile Checkout Redesign',
    subtitle: 'Reducing cart abandonment on iOS and Android',
    summary:
      'Redesigned the 7-step mobile checkout into a single-page flow, recovering $2.4M in annual revenue from abandoned carts.',
    tags: ['Mobile', 'E-Commerce', 'Conversion', 'UX'],
    date: '2023-11-01',
    featured: true,
    status: 'published',
    company: 'RetailCo',
    role: 'Product Manager',
    duration: 'Q3 – Q4 2023',
    outcome:
      'Cart abandonment rate dropped from 76% to 51%, recovering $2.4M in annual revenue.',
    metrics: [
      {label: 'Cart Abandonment', value: '↓ 25pp', context: 'from 76% to 51%'},
      {label: 'Revenue Recovered', value: '$2.4M', context: 'annualized'},
      {label: 'Checkout Time', value: '↓ 40%', context: 'median time on checkout'},
    ],
    challenge:
      'Mobile accounted for 68% of traffic but only 31% of completed purchases. A 7-step checkout with repeated form fields, no guest option, and mandatory account creation was killing conversion on small screens.',
    approach:
      'Analysed 3 months of session recordings and funnel drop-off data. Ran A/B tests on guest checkout, address autocomplete, and Apple Pay. Built a hypothesis backlog ranked by estimated revenue impact × implementation effort. Collaborated with design on a single-page checkout prototype tested with 80 users via Maze.',
    results: [
      'Cart abandonment rate fell from 76% to 51% (25 percentage points)',
      'Mobile conversion rate improved from 1.8% to 3.1%',
      'Average checkout time reduced by 40% (from 4.2 min to 2.5 min)',
      'Apple Pay adoption reached 34% of mobile completions within 30 days',
    ],
    techStack: ['React Native', 'Stripe', 'Apple Pay', 'Google Pay'],
  },
  {
    id: 'p3',
    slug: 'data-observability-platform',
    type: 'project',
    title: 'Data Observability Platform',
    subtitle: 'Internal tooling for data quality monitoring',
    summary:
      'Built an internal platform giving data engineers real-time visibility into pipeline health, cutting mean-time-to-detect data incidents by 80%.',
    tags: ['Data', 'Internal Tools', 'Platform', 'Engineering'],
    date: '2023-05-01',
    featured: false,
    status: 'published',
    company: 'DataStack Inc',
    role: 'Senior Product Manager',
    duration: 'Q1 – Q2 2023',
    outcome: 'MTTD for data incidents dropped from 6 hours to 72 minutes.',
    metrics: [
      {label: 'MTTD', value: '↓ 80%', context: '6 hrs → 72 min'},
      {label: 'Pipelines Monitored', value: '1,200+', context: 'across 8 teams'},
      {label: 'Incidents Prevented', value: '34/mo', context: 'avg in first quarter'},
    ],
    challenge:
      'Data engineers spent 30% of their time manually checking pipeline health via Slack pings and ad-hoc SQL queries. When bad data reached production dashboards, business teams noticed before engineers did — destroying trust in data products.',
    approach:
      'Embedded with the data engineering team for 2 weeks to map the monitoring toil. Defined a lightweight schema for "data contracts" and built an MVP alerting layer on top of existing dbt and Airflow metadata. Iterated weekly with 4 pilot teams before rolling out org-wide.',
    results: [
      'Mean-time-to-detect data incidents fell from 6 hours to 72 minutes',
      'Engineer toil on manual checks reduced by 30% (2+ hrs/week per engineer)',
      'Platform adopted by 8 teams covering 1,200+ pipeline runs per day',
      'Quarterly business review now uses platform health metrics as SLA input',
    ],
    techStack: ['dbt', 'Airflow', 'Python', 'PostgreSQL', 'Slack API'],
  },
];
