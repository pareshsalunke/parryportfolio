import {Project} from '@/lib/types';

export const mockProjects: Project[] = [
  {
    id: 'p1',
    slug: 'autonomous-vehicle-lifecycle-platform',
    type: 'project',
    title: 'Autonomous Vehicle Lifecycle Platform',
    subtitle: 'Fleet commissioning for SAE Level 4 autonomous driving',
    summary:
      'Owned the Vehicle Onboarding Platform within a SAE Level 4 autonomous driving programme at diconium (Volkswagen Group), the system that commissioned ID. Buzz AD vehicles from post-production acceptance through to B2B fleet operator handover. Scaled from a 10-vehicle US pilot to a 100-vehicle global fleet across 4 cities in EU and US markets, cutting onboarding latency from 10 days to 3.',
    tags: [
      'Platform',
      'Autonomous Vehicles',
      'Fleet Management',
      'B2B',
      'API',
      'RBAC',
      'SAE L4',
    ],
    date: '2022-01-01',
    featured: true,
    status: 'published',
    company: 'diconium (Volkswagen Group)',
    role: 'Senior Product Manager',
    duration: 'Jan 2022 – Jul 2025',
    outcome:
      'Scaled from a 10-vehicle US pilot to a 100-vehicle global fleet across Austin, Munich, Hamburg, and Oslo. Onboarding latency dropped from 10 days to 3 across EU and US regulated markets.',
    metrics: [
      {
        label: 'Onboarding Latency',
        value: '10d → 3d',
        context: '70% reduction',
      },
      {
        label: 'Fleet Scale',
        value: '10 → 100',
        context: 'vehicles across 4 cities',
      },
      {
        label: 'Markets',
        value: 'EU + US',
        context: 'Austin, Munich, Hamburg, Oslo',
      },
    ],
    challenge:
      'Fleet operators managing SAE Level 4 autonomous vehicles had no visibility into what was happening with their fleet. Vehicles were black boxes: no insight into compliance status, onboarding progress, or operational readiness before deployment. Every lifecycle stage relied on manual coordination across hardware provisioning, software configuration, legal, security, and compliance teams. Onboarding a single ID. Buzz AD vehicle took 10 days of error-prone handoffs with no single source of truth.',
    approach:
      'Designed the vehicle lifecycle process covering post-production acceptance through in-fleeting, live monitoring, and end-of-life de-fleeting. Conducted user research with fleet administrators to translate operational pain points into shipped product features. Defined and architected API integrations across vehicle device management, SIM/MNO provisioning, and cloud services, covering both vehicle-side and cloud-side commissioning. Implemented role-based access controls scoping data visibility for fleet admins, vehicle managers, and ops teams. Replaced manual handoffs with system-driven compliance gates enforced before each vehicle reached operational deployment. Secured programme funding through live stakeholder demonstrations and owned delivery from vision through production within a SAFe enterprise agile setup.',
    results: [
      'Vehicle onboarding latency reduced from 10 days to 3 days',
      'Scaled from a 10-vehicle US pilot to a 100-vehicle global fleet across 4 cities',
      'Automated compliance gates eliminated manual errors across the entire vehicle lifecycle',
      'Role-based access controls gave fleet admins, vehicle managers, and ops teams scoped data visibility',
      'B2B fleet operators gained full transparency into commissioning status and operational readiness',
      'Three platform products built from zero within the Level 4 autonomous driving programme',
    ],
    techStack: [
      'Vehicle-to-Cloud APIs',
      'mTLS',
      'RBAC',
      'eSIM/SIM Management',
      'REST APIs',
      'GDPR',
      'UN R155',
    ],
    flowDiagram: '/projects/vehicle-lifecycle-flow.svg',
    flowDiagramAlt:
      'Vehicle lifecycle flow: 7 phases from factory certificate provisioning through logistics, first cloud connection, certificate validation, eSIM remote SIM provisioning, platform activation, to B2B fleet handover',
  },
  {
    id: 'p2',
    slug: 'connected-vehicle-sim-management',
    type: 'project',
    title: 'Connected Vehicle SIM Management',
    subtitle: 'Automated eSIM profile switching across 4 MNO partners',
    summary:
      'Designed and shipped a SIM management solution for SAE Level 4 autonomous vehicles that onboarded and dynamically switched three eSIM profiles across 4 mobile network operator partners (2 EU, 2 US), replacing a manual, error-prone process with an automated GSMA-compliant system deployed in production for the global fleet.',
    tags: [
      'Platform',
      'eSIM',
      'Connectivity',
      'IoT',
      'Autonomous Vehicles',
      'API',
      'MNO Integration',
    ],
    date: '2022-06-01',
    featured: true,
    status: 'published',
    company: 'diconium (Volkswagen Group)',
    role: 'Senior Product Manager',
    duration: 'Jan 2022 – Jul 2025',
    outcome:
      'Replaced a manual, error-prone SIM management process with an automated system: 3 eSIM profiles dynamically switched across 4 MNO partners in EU and US markets, deployed in production for the Level 4 autonomous fleet.',
    metrics: [
      {label: 'MNO Partners', value: '4', context: '2 EU + 2 US markets'},
      {label: 'eSIM Profiles', value: '3', context: 'dynamic switching'},
      {label: 'Process', value: 'Automated', context: 'replaced manual errors'},
    ],
    challenge:
      'SAE Level 4 autonomous vehicles depend on uninterrupted cellular connectivity to operate safely. The existing approach was entirely manual: engineers provisioned and switched SIM profiles for each vehicle one at a time across multiple network operators in different countries. As the fleet scaled from a 10-vehicle US pilot to a 100-vehicle global deployment across 4 cities, this became a critical bottleneck, causing connectivity failures, delayed commissioning, and operational risk with no fallback automation.',
    approach:
      'Designed a SIM management product that integrated with the GSMA-compliant SM-DP+ server architecture to deliver and manage eSIM profiles remotely at scale. Defined use cases for secure vehicle-to-cloud connection, dynamic MNO switching, and full profile lifecycle management. Coordinated requirements across hardware vendors (TCU/eSIM), MNO partners, cloud services, legal, and compliance teams across EU and US markets. Built the product to handle 3 eSIM profile states (bootstrap, operational, fallback) with automated switching logic based on connectivity signals. Shipped from concept through to production deployment within the SAFe programme delivery framework.',
    results: [
      '3 eSIM profiles managed per vehicle with automated dynamic switching',
      '4 MNO partners integrated across EU (2) and US (2) markets',
      'Manual error-prone SIM provisioning replaced with an automated, GSMA-compliant system',
      'Production deployed and operational across the global Level 4 autonomous fleet',
      'Connectivity reliability improved, removing a critical deployment bottleneck as the fleet scaled',
    ],
    techStack: [
      'GSMA RSP (SGP.02)',
      'SM-DP+ Server',
      'eSIM / embedded SIM',
      'mTLS',
      'REST APIs',
      'MNO Integration',
      'AWS',
    ],
    flowDiagram: '/projects/sim-management-flow.svg',
    flowDiagramAlt:
      'SIM management flow: 5 steps from vehicle eSIM bootstrap profile through platform authentication, MNO selection across 4 partners (2 EU, 2 US), SM-DP+ encrypted profile push, to operational profile active',
  },
  {
    id: 'p6',
    slug: 'fleet-monitoring-incident-management',
    type: 'project',
    title: 'Fleet Monitoring & Incident Management',
    subtitle: 'Real-time operations and safety response for live autonomous fleet',
    summary:
      'Owned the Fleet Monitoring and Incident Management platform within a SAE Level 4 autonomous driving programme at diconium (Volkswagen Group), giving internal operations teams and B2B fleet operators real-time visibility into vehicle status, anomaly detection, and safety event escalation across a 100-vehicle global fleet.',
    tags: [
      'Platform',
      'Fleet Monitoring',
      'Incident Management',
      'Real-time',
      'Autonomous Vehicles',
      'B2B',
      'Safety',
    ],
    date: '2022-01-01',
    featured: true,
    status: 'published',
    company: 'diconium (Volkswagen Group)',
    role: 'Senior Product Manager',
    duration: 'Jan 2022 – Jul 2025',
    outcome:
      'Delivered real-time fleet visibility and structured incident response for live Level 4 autonomous operations, enabling ops teams and B2B fleet operators to monitor vehicle status, escalate safety events, and close incident reviews across EU and US markets.',
    metrics: [
      {
        label: 'Fleet Visibility',
        value: 'Real-time',
        context: '100-vehicle global fleet',
      },
      {
        label: 'User Groups',
        value: '3',
        context: 'ops, fleet operators, safety/compliance',
      },
      {
        label: 'Markets',
        value: 'EU + US',
        context: 'Austin, Munich, Hamburg, Oslo',
      },
    ],
    challenge:
      'Once autonomous vehicles moved from commissioning into live operations, there was no structured system for monitoring what was happening in the field. Internal ops teams and B2B fleet operators had no real-time view of vehicle status, no automated alerting for anomalies, and no defined workflows for escalating and reviewing safety events. In a SAE Level 4 deployment operating in geofenced urban environments, an undetected issue or an unstructured incident response carried direct safety and regulatory risk.',
    approach:
      'Defined the full monitoring and incident lifecycle: from real-time vehicle status visibility through anomaly detection, safety event escalation, remote supervision, and post-incident review. Conducted discovery with internal ops, fleet operator stakeholders, and safety/compliance teams to understand each group\'s information needs and response requirements. Designed role-appropriate views: ops teams, fleet operators, and safety each got only the data and actions relevant to their role. Built structured escalation and review workflows so safety events were handled consistently with full audit trails. Delivered within a SAFe programme setup, coordinating with engineering, UX, legal, and compliance teams.',
    results: [
      'Real-time vehicle status visibility delivered to ops teams and B2B fleet operators across EU and US markets',
      'Anomaly detection and automated alerting replaced manual, ad-hoc incident discovery',
      'Structured safety event escalation workflows ensured consistent, auditable incident response',
      'Role-appropriate dashboards gave ops teams, fleet operators, and safety/compliance scoped, actionable views',
      'Post-incident review process established, supporting regulatory compliance and operational learning',
      'Remote supervision workflows enabled ops teams to respond to live events without physical intervention',
    ],
    techStack: [
      'Real-time APIs',
      'Event-driven Architecture',
      'RBAC',
      'GDPR',
      'SAE L4 Compliance',
      'REST APIs',
    ],
    flowDiagram: '/projects/fleet-monitoring-flow.svg',
    flowDiagramAlt:
      'Fleet monitoring flow: 5 stages from real-time vehicle telemetry through anomaly detection, safety event escalation, remote supervision, to post-incident review',
  },
  {
    id: 'p7',
    slug: 'astro-pm-journey',
    type: 'project',
    title: 'Astro PM Journey',
    subtitle: 'A gamified AI PM learning platform I designed, PRD\'d, and built with AI',
    summary:
      'I kept saving PM frameworks and newsletters without any of it changing how I actually think. So I wrote a full PRD to diagnose the problem, then used AI to build the solution: a 7-planet gamified learning platform where every planet is a writing exercise grounded in real practitioner resources. Built as a personal project using Astro, React, and Claude Code.',
    tags: [
      'Personal Project',
      'AI',
      'Product',
      'Gamification',
      'Learning',
      'Side Project',
    ],
    date: '2026-03-01',
    featured: true,
    status: 'published',
    company: 'Personal Project',
    role: 'Product Manager + Builder',
    duration: '2026',
    outcome:
      'Shipped a 7-planet learning game with XP rewards, sequential unlock gates, and local storage persistence. PRD written before a single line of code.',
    metrics: [
      {label: 'Planets', value: '7', context: 'each a writing exercise'},
      {label: 'XP Range', value: '100–300', context: 'per planet completed'},
      {label: 'Stack', value: 'Astro + AI', context: 'Claude Code + Cursor'},
    ],
    challenge:
      'Passive content consumption doesn\'t change how you think. I had a backlog of saved PM newsletters, frameworks, and resources. None of it was changing my actual approach to product problems. Reading is frictionless; it generates the feeling of progress without the work of internalising. Self-paced learning lacks consequence. There\'s no feedback when you skim, no signal when you\'ve understood, and nothing to pull you back the next day.',
    approach:
      'I treated this as a real product problem. Before writing any code, I wrote a full PRD: problem statement, user research (engineers, designers, and business professionals learning PM skills), prioritisation rationale, and success metrics. The clearest finding: abandonment doesn\'t happen at hard content, it happens when there\'s no feedback. That pushed the entire v1 focus away from social features (leaderboards, badges) toward reward loops. The result was a 7-planet galaxy map built in Astro v5 with React islands, where each planet pairs a practitioner-authored AI PM resource with a minimum-character writing exercise. XP scales with difficulty: 100 at the entry planet, 300 at PRD Planet, signalling depth over speed. Sequential unlocking enforces curriculum logic, with explanations when a gate blocks access. Local storage with a versioned schema persists state across sessions without any backend.',
    results: [
      '7 planets shipped, each grounded in real practitioner AI PM resources',
      'XP reward system scales from 100 (Origin) to 300 (PRD Planet), communicating depth over speed',
      'Sequential unlock gates enforce curriculum logic and prevent skipping to advanced topics',
      'Minimum character counts prevent surface-level responses and create a fair friction contract with the learner',
      'Galaxy map with visual trail feedback gives immediate, visible progress across sessions',
      'Built as a personal project, PRD written first, then shipped with AI assistance',
    ],
    techStack: [
      'Astro v5',
      'React',
      'Tailwind CSS',
      'localStorage',
      'Claude Code',
      'Cursor',
    ],
    link: 'https://parrywithawhy.substack.com/p/i-wrote-a-prd-for-a-pm-learning-game',
    comingSoon: [
      'AI-powered exercise feedback: Claude evaluates responses against rubrics for the specific planet, replacing the binary character-count gate with qualitative scoring and targeted coaching',
      'Adaptive difficulty: response quality informs XP multipliers and unlocks optional stretch exercises for learners moving faster than the baseline curriculum expects',
      'Personalised learning paths: an intake prompt maps prior background (engineering, design, business) to planet emphasis and recommended starting points rather than a fixed linear sequence',
      'Spaced repetition: AI identifies which planet exercises had the weakest responses and surfaces them as optional revisits with new prompts, reinforcing retention over time',
      'Cohort mode: shared galaxy map for teams doing the curriculum together, with async comment threads on each planet\'s exercises powered by AI summarisation',
    ],
  },
  {
    id: 'p3',
    slug: 'vw-digital-product-experience',
    type: 'project',
    title: 'VW Group Digital Product Experience',
    subtitle: 'UX and funnel optimization for customer-facing vehicle pages',
    summary:
      "Owned UX and funnel optimization for VW Group's customer-facing product pages, increasing engagement by 8% and improving downstream appointment conversion by 2% through redesigned information architecture and a guided virtual booking flow.",
    tags: [
      'UX',
      'Funnel Optimization',
      'Product Analytics',
      'A/B Testing',
      'Customer-Facing',
      'Conversion Rate Optimization',
      'B2C',
    ],
    date: '',
    featured: true,
    status: 'published',
    company: '',
    role: 'Senior Product Manager',
    duration: '',
    outcome:
      'Engagement on VW Group product pages increased by 8% and downstream appointment conversion improved by 2% through redesigned information architecture and a guided virtual booking flow.',
    metrics: [
      {
        label: 'Page Engagement',
        value: '+8%',
        context: 'customer-facing product pages',
      },
      {
        label: 'Appointment Conversion',
        value: '+2%',
        context: 'downstream booking flow',
      },
      {
        label: 'Approach',
        value: 'Data-driven',
        context: 'A/B testing + UX research',
      },
    ],
    challenge:
      "VW Group's customer-facing product pages were not converting browsing interest into dealership appointments. The information architecture was unclear, making it hard for customers to find the right vehicle configuration or next steps. The appointment booking flow added unnecessary friction, causing drop-off before customers could commit to a test drive or consultation.",
    approach:
      'Ran user research and analysed funnel drop-off data to identify the highest-friction points in the customer journey. Redesigned the information architecture to clarify vehicle feature presentation and surface key decision information earlier. Built and shipped a guided virtual booking flow that reduced steps and gave customers a clearer path from product interest to appointment confirmation. Validated changes with A/B testing and product analytics instrumentation to measure impact at each funnel stage.',
    results: [
      'Customer engagement on VW Group product pages increased by 8%',
      'Downstream appointment conversion improved by 2% through the redesigned booking flow',
      'Information architecture redesign improved clarity of vehicle feature presentation',
      'Guided virtual booking flow reduced friction in the path from product interest to appointment',
      'Product analytics instrumentation gave the business deeper funnel visibility for ongoing optimization',
    ],
    techStack: ['SQL', 'Grafana', 'Figma', 'A/B Testing'],
    flowDiagram: '/projects/vw-digital-flow.svg',
    flowDiagramAlt:
      'VW digital experience user journey: 4 stages from product page through redesigned information architecture and virtual booking flow to appointment confirmation',
  },
  {
    id: 'p4',
    slug: 'akelius-construction-lifecycle-platform',
    type: 'project',
    title:
      'Construction Lifecycle Platform for Real Estate Investment Analytics',
    subtitle:
      'Automated department handovers for real estate construction projects',
    summary:
      'Led development of a construction lifecycle platform at Akelius Residential Property AB that automated department handovers and investment analytics dashboards. Decision accuracy improved by 15% and report turnaround dropped by 53%.',
    tags: [
      'Platform',
      'Real Estate',
      'Analytics',
      'React',
      'GraphQL',
      'AWS',
      'Full-Stack',
    ],
    date: '2019-08-01',
    featured: true,
    status: 'published',
    company: '',
    role: 'Software Engineer',
    duration: 'Aug 2019 – Dec 2020',
    outcome:
      'Construction lifecycle platform automated department handovers and investment analytics, improving decision accuracy by 15% and cutting report turnaround time by 53%.',
    metrics: [
      {
        label: 'Decision Accuracy',
        value: '+15%',
        context: 'investment decision making',
      },
      {
        label: 'Report Turnaround',
        value: '↓ 53%',
        context: 'automated vs manual',
      },
      {
        label: 'Handovers',
        value: 'Automated',
        context: 'across all departments',
      },
    ],
    challenge:
      'Akelius managed construction projects across multiple departments: acquisition, planning, construction, legal, and property management. Handovers between departments were manual, error-prone, and siloed. Critical project data lived in spreadsheets and emails, making it impossible to track construction progress or make timely investment decisions. Report generation was a recurring time sink for analysts, taking days instead of hours.',
    approach:
      "Developed and delivered the Akelius construction lifecycle project using React, TypeScript, GraphQL, Server-Side Rendering (SSR), Node.js, and AWS, with a focus on frontend development. Drove cross-team efficiency by establishing and maintaining a React component and utilities library aligned with the organisation's Design System principles. Launched automated investment analytics dashboards that replaced manual reporting workflows. Served as the bridge between business stakeholders and engineering, validating technical feasibility against user needs and working with Product Owners to finalise roadmaps.",
    results: [
      'Investment decision-making accuracy improved by 15% through high-fidelity analytics dashboards',
      'Report turnaround time cut by 53% via automated data workflows and reporting tools',
      'Department handovers automated across the full construction lifecycle',
      'Reusable React component library established, keeping UI/UX consistent across projects',
      'Cross-team coordination improved by serving as bridge between business stakeholders and engineering',
    ],
    techStack: [
      'React',
      'TypeScript',
      'GraphQL',
      'Server-Side Rendering (SSR)',
      'Node.js',
      'AWS',
    ],
    flowDiagram: '/projects/akelius-analytics-flow.svg',
    flowDiagramAlt:
      'Akelius construction lifecycle flow: 5 stages from multi-department source data through manual handover pain point, automated lifecycle platform, analytics dashboard, to better investment decisions',
  },
  {
    id: 'p5',
    slug: 'wework-site-selection-analytics',
    type: 'project',
    title: 'WeWork Site Selection Analytics Tool',
    subtitle: 'Data-driven real estate expansion decisions at global scale',
    summary:
      "Built an internal analytics application for WeWork's real estate investment teams that pulled together location and market data in one place. Site selection accuracy improved by 60% and platform engagement rose by 23%.",
    tags: [
      'Analytics',
      'Real Estate',
      'Data Visualization',
      'React',
      'Redux',
      'TypeScript',
      'Internal Tools',
      'B2B',
    ],
    date: '2018-02-01',
    featured: true,
    status: 'published',
    company: 'WeWork',
    role: 'Software Engineer III',
    duration: 'Feb 2018 – Jul 2019',
    outcome:
      'Site selection decision accuracy improved by 60% and platform engagement increased by 23% through intuitive self-serve analytics tools that simplified complex data workflows for non-technical investment teams.',
    metrics: [
      {
        label: 'Decision Accuracy',
        value: '+60%',
        context: 'site selection decisions',
      },
      {
        label: 'Platform Engagement',
        value: '+23%',
        context: 'self-serve analytics',
      },
      {
        label: 'Users',
        value: 'Non-technical',
        context: 'investment + ops teams',
      },
    ],
    challenge:
      "WeWork's real estate investment teams were making site selection decisions (which cities to enter, which buildings to lease) based on gut feel and fragmented data. Analysts were manually combining location data, foot traffic reports, competitor maps, and market trend data in spreadsheets. The process was slow, inconsistent, and introduced significant human error. There was no single tool that could surface the right data in a usable format for non-technical decision makers.",
    approach:
      'Built an internal application for real estate investment teams in close collaboration with data scientists and product stakeholders. Integrated location and market data into a unified analytics interface with high-fidelity data visualisations. Designed specifically for non-technical users: real estate analysts and operations managers who needed geospatial and market data in a form they could act on. Built and maintained a reusable front-end component library and managed complex application state with Redux-Saga and TypeScript. Operated within a distributed agile team across New York and Berlin, coordinating with product managers and data analysts.',
    results: [
      'Site selection decision accuracy improved by 60% through high-fidelity data visualisation tools',
      'Platform engagement increased by 23% by designing intuitive, self-serve analytics for non-technical users',
      'Real estate investment teams gained a single source of truth for location and market data',
      'Reusable front-end component library increased development efficiency and scalability across teams',
      'Directly informed which new co-working locations to open, reducing expansion risk for WeWork',
    ],
    techStack: ['React', 'Redux-Saga', 'TypeScript', 'Data Visualisation', 'Geospatial APIs'],
    flowDiagram: '/projects/wework-decision-flow.svg',
    flowDiagramAlt:
      'WeWork site selection flow: 5 steps from location data and market analysis through the analytics tool and site scoring to the final expansion decision',
  },
];
