import {Project} from '@/lib/types';

export const mockProjects: Project[] = [
  {
    id: 'p1',
    slug: 'autonomous-vehicle-lifecycle-platform',
    type: 'project',
    title: 'Autonomous Vehicle Lifecycle Platform',
    subtitle: 'End-to-end fleet management for Level 4 autonomous driving',
    summary:
      'Owned the Vehicle Onboarding Management platform within a Level 4 autonomous driving program at diconium (Volkswagen Group) — the integration layer between autonomous vehicle systems and fleet operations. Reduced vehicle onboarding latency from 10 days to 3 days across 500 vehicles and 2 fleet operators in EU and US markets.',
    tags: [
      'Platform',
      'Autonomous Vehicles',
      'Fleet Management',
      'B2B',
      'API',
      'RBAC',
      'eSIM',
    ],
    date: '',
    featured: true,
    status: 'published',
    company: '',
    role: 'Senior Product Manager',
    duration: '',
    outcome:
      'Reduced vehicle onboarding latency from 10 days to 3 days, onboarding 500 autonomous vehicles across 2 fleet operators in EU and US regulated markets.',
    metrics: [
      {
        label: 'Onboarding Latency',
        value: '10d → 3d',
        context: '70% reduction',
      },
      {
        label: 'Vehicles Onboarded',
        value: '500',
        context: 'across 2 fleet operators',
      },
      {
        label: 'Markets',
        value: 'EU + US',
        context: 'with regulatory compliance',
      },
    ],
    challenge:
      'Fleet operators were managing autonomous vehicles blindly. Vehicles were black boxes — no visibility into compliance status, onboarding progress, or operational readiness. Manual processes caused errors at every lifecycle stage: no single source of truth, no automated compliance gates, no role-based data access. Onboarding a single vehicle took 10 days of manual coordination across hardware, cloud, legal, and ops teams.',
    approach:
      'I designed the end-to-end vehicle lifecycle process covering production through in-fleeting, monitoring, and end-of-life de-fleeting. Conducted user research and persona development for fleet administrators, translating pain points into shipped features. Architected API integrations across vehicle device management, SIM/MNO provisioning, and cloud services - orchestrating both vehicle-side and cloud-side processes. Built role-based access controls giving fleet admins, vehicle managers, and ops teams only the data relevant to their role. Automated onboarding/offboarding workflows, replacing manual processes with system-driven compliance gates before operational deployment. Secured program funding through live stakeholder demonstrations and owned end-to-end delivery from vision through production.',
    results: [
      'Vehicle onboarding and processing latency reduced from 10 days to 3 days',
      '500 autonomous vehicles onboarded across 2 fleet operators in EU and US markets',
      'Automated compliance gates eliminated manual errors across the entire vehicle lifecycle',
      'Role-based access controls gave fleet admins, vehicle managers, and ops teams scoped data visibility',
      'Autonomous vehicles transformed from opaque assets into transparent, compliant, fleet-ready operations',
      'Three product lines built from zero within the Level 4 autonomous driving program',
    ],
    techStack: [
      'Vehicle-to-Cloud APIs',
      'mTLS',
      'RBAC',
      'eSIM/SIM Management',
      'REST APIs',
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
      'Designed and shipped a SIM management solution for autonomous vehicles that onboarded and dynamically switched three eSIM profiles across 4 mobile network operator partners (2 EU, 2 US) — replacing a manual, error-prone process with an automated system deployed in production.',
    tags: [
      'Platform',
      'eSIM',
      'Connectivity',
      'IoT',
      'Autonomous Vehicles',
      'API',
      'MNO Integration',
    ],
    date: '',
    featured: true,
    status: 'published',
    company: '',
    role: 'Senior Product Manager',
    duration: '',
    outcome:
      'Replaced a manual, error-prone SIM management process with an automated system — 3 eSIM profiles dynamically switched across 4 MNO partners in EU and US markets, deployed in production.',
    metrics: [
      {label: 'MNO Partners', value: '4', context: '2 EU + 2 US markets'},
      {label: 'eSIM Profiles', value: '3', context: 'dynamic switching'},
      {label: 'Process', value: 'Automated', context: 'replaced manual errors'},
    ],
    challenge:
      'Autonomous vehicles require reliable cellular connectivity to operate. The existing approach was manual and error-prone: engineers had to manually provision and switch SIM profiles for each vehicle across multiple network operators in different countries. This caused connectivity failures, delayed deployments, and created a bottleneck as the fleet scaled. There was no automated system to handle eSIM profile management across EU and US markets simultaneously.',
    approach:
      'Designed a SIM management product that integrated with the GSMA-compliant SM-DP+ server architecture to deliver and manage eSIM profiles remotely. Defined use cases for secure vehicle-to-cloud connection, dynamic MNO switching, and profile lifecycle management. Coordinated requirements across hardware (TCU/eSIM vendors), MNO partners, cloud services, legal, and compliance teams. Built the product to handle 3 eSIM profile states — bootstrap, operational, and fallback — with automated switching logic based on connectivity signals. Shipped from concept through to production deployment.',
    results: [
      '3 eSIM profiles managed per vehicle with automated dynamic switching',
      '4 MNO partners integrated across EU (2) and US (2) markets',
      'Manual error-prone SIM provisioning replaced with an automated, GSMA-compliant system',
      'Production deployed and operational for the Level 4 autonomous driving fleet',
      'Connectivity reliability significantly improved, removing a critical deployment bottleneck',
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
      "VW Group's customer-facing product pages were not converting browsing interest into dealership appointments effectively. The information architecture was unclear, making it hard for customers to find the right vehicle configuration and next steps. The appointment booking flow added unnecessary friction, causing drop-off before customers could commit to a test drive or consultation.",
    approach:
      'Ran user research and analyed funnel drop-off data to identify the highest-friction points in the customer journey. Redesigned the information architecture to clarify vehicle feature presentation and surface key decision information earlier. Built and shipped a guided virtual booking flow that reduced steps and gave customers a clearer path from product interest to appointment confirmation. Validated changes with A/B testing and product analytics instrumentation to measure impact at each funnel stage.',
    results: [
      'Customer engagement on VW Group product pages increased by 8%',
      'Downstream appointment conversion improved by 2% through the redesigned booking flow',
      'Information architecture redesign improved clarity of vehicle feature presentation',
      'Guided virtual booking flow reduced friction in the path from product interest to appointment',
      'Product analytics instrumentation gave the business deeper funnel visibility for ongoing optimization',
    ],
    techStack: [
      'Product Analytics',
      'A/B Testing',
      'UX Research',
      'Funnel Analysis',
      'Information Architecture',
    ],
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
      'Spearheaded the development of a construction lifecycle platform at Akelius Residential Property AB, enabling seamless handovers between departments and automated investment analytics dashboards — yielding a 15% improvement in decision-making accuracy and cutting report turnaround time by 53%.',
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
      'Construction lifecycle platform enabled seamless department handovers, improving investment decision accuracy by 15% and cutting report turnaround time by 53% through automated analytics dashboards.',
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
      'Akelius managed complex real estate construction projects spanning multiple departments — acquisition, planning, construction, legal, and property management. Handovers between departments were manual, error-prone, and siloed. Critical project data lived in spreadsheets and emails, making it impossible to track construction progress or make timely investment decisions. Report generation was a recurring time sink for analysts, taking days instead of hours.',
    approach:
      "Developed and delivered the Akelius construction lifecycle project using React, TypeScript, GraphQL, Server-Side Rendering (SSR), Node.js, and AWS, with a focus on frontend development. Drove cross-team efficiency by establishing and maintaining a React component and utilities library aligned with the organisation's Design System principles. Launched automated investment analytics dashboards that replaced manual reporting workflows. Served as the primary bridge between business stakeholders and engineering execution — validating technical feasibility against user needs and working closely with Product Owners and Business Owners to finalise roadmaps.",
    results: [
      'Investment decision-making accuracy improved by 15% through high-fidelity analytics dashboards',
      'Report turnaround time cut by 53% via automated data workflows and reporting tools',
      'Seamless department handovers enabled across the full construction lifecycle',
      'Reusable React component library established, ensuring UI/UX consistency across projects',
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
      "Built an internal end-to-end data-driven analytics application for WeWork's real estate investment teams that integrated location and market data — improving site selection decision accuracy by 60% and driving a 23% increase in platform engagement by simplifying complex data workflows for non-technical users.",
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
      "WeWork's real estate investment teams were making site selection decisions — which cities and neighbourhoods to enter, which buildings to lease — based on gut feel and fragmented data sources. Analysts were manually combining location data, foot traffic reports, competitor maps, and market trend data in spreadsheets. The process was slow, inconsistent, and introduced significant human error. There was no single tool that could surface the right data in a usable format for non-technical decision makers.",
    approach:
      'Built an internal end-to-end application for real estate investment teams in close collaboration with data scientists and product stakeholders. Integrated location and market data into a unified analytics interface with high-fidelity data visualisations. Designed the tool specifically for non-technical users — real estate analysts and operations managers — simplifying complex geospatial and market data into actionable insights. Built and maintained a reusable front-end component library and managed complex application state with Redux-Saga and TypeScript. Operated within a distributed agile team across New York and Berlin, coordinating with product managers and data analysts.',
    results: [
      'Site selection decision accuracy improved by 60% through high-fidelity data visualisation tools',
      'Platform engagement increased by 23% by designing intuitive, self-serve analytics for non-technical users',
      'Real estate investment teams gained a single source of truth for location and market data',
      'Reusable front-end component library increased development efficiency and scalability across teams',
      'Directly informed which new co-working locations to open, reducing expansion risk for WeWork',
    ],
    techStack: [
      'React',
      'Redux-Saga',
      'TypeScript',
      'Data Visualisation',
      'Geospatial APIs',
      'Agile / Scrum',
    ],
    flowDiagram: '/projects/wework-decision-flow.svg',
    flowDiagramAlt:
      'WeWork site selection flow: 5 steps from location data and market analysis through the analytics tool and site scoring to the final expansion decision',
  },
];
