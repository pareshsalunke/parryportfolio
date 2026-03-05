import {CaseStudy} from '@/lib/types';

export const mockCaseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    slug: 'search-relevance-overhaul',
    type: 'case-study',
    title: 'Search Relevance Overhaul',
    subtitle: 'From keyword matching to intent-based search',
    summary:
      'Deep-dive into how I rebuilt search from keyword matching to ML-powered intent ranking, improving find-rate by 44% and driving $1.1M in incremental GMV.',
    tags: ['Search', 'Machine Learning', 'Growth', 'B2C'],
    date: '2024-06-01',
    featured: true,
    status: 'published',
    company: 'MarketPlace Co',
    role: 'Senior Product Manager',
    problemStatement:
      'Search was the #1 entry point for purchases — 62% of sessions started with a search. But our keyword-matching engine returned irrelevant results for natural-language queries and zero results for 18% of searches. Users were bouncing to competitors.',
    researchInsights:
      'I analyzed 500k search queries across 90 days, segmented by zero-result rate, session abandonment, and eventual purchase. User interviews revealed 3 mental models: (1) exact product hunters, (2) category browsers, and (3) problem-solvers. Our engine only served type 1. Competitor benchmarking showed ML-based re-ranking as table stakes in our category.',
    solutionDesign:
      'I wrote a product spec for a two-layer search architecture: (1) a query understanding layer using an LLM to normalize intent and expand synonyms, and (2) a re-ranking layer using a gradient-boosted model trained on historical purchase signals. I phased delivery: synonym expansion in sprint 1 (no ML infra needed), click-through re-ranking in sprint 2, personalization in sprint 3.',
    metrics: [
      {label: 'Find Rate', value: '↑ 44%', context: 'sessions with a product click'},
      {label: 'Zero-Result Rate', value: '↓ 78%', context: 'from 18% to 4%'},
      {label: 'GMV Lift', value: '$1.1M', context: 'incremental, annualized'},
    ],
    learnings: [
      'Synonym expansion alone (no ML) recovered 60% of the GMV opportunity at 20% of the effort — shipping the easy win first built stakeholder trust for the harder ML investment.',
      'Search quality metrics (find rate, zero-result rate) are better leading indicators than GMV — they move faster and are easier to attribute.',
      'Involving the ML team in discovery (not just delivery) halved the time to a working model.',
    ],
    artifacts: [
      {label: 'Product Spec', url: '#', type: 'doc'},
      {label: 'Search Metrics Dashboard', url: '#', type: 'link'},
    ],
  },
  {
    id: 'cs2',
    slug: 'onboarding-activation-redesign',
    type: 'case-study',
    title: 'Onboarding Activation Redesign',
    subtitle: 'Doubling week-1 activation for a SaaS product',
    summary:
      'How I identified the "aha moment" for a B2B SaaS tool and redesigned onboarding around it, doubling the percentage of new users who activated in week 1.',
    tags: ['Onboarding', 'Activation', 'SaaS', 'B2B'],
    date: '2023-08-01',
    featured: false,
    status: 'published',
    company: 'SaaS Platform Inc',
    role: 'Product Manager',
    problemStatement:
      'Only 24% of new sign-ups created their first workspace and invited a teammate within 7 days. Sales was manually following up with churned trials, burning time and margin. We needed activation to be self-serve.',
    researchInsights:
      'Cohort analysis showed that users who invited ≥1 teammate in their first session had an 89% 90-day retention rate vs 12% for those who did not. The "aha moment" was collaborative — not solo. Yet our onboarding flow spent 6 steps on solo setup before any mention of teammates. Exit surveys cited "didn\'t understand the value" as the top drop reason.',
    solutionDesign:
      'I redesigned onboarding around a "collaboration-first" narrative: step 1 asks for a project name (low effort, high commitment), step 2 prompts teammate invites before any feature tour. I removed 4 of the 9 original steps and replaced the feature walkthrough with a 30-second interactive demo. We ran a 50/50 A/B test for 3 weeks.',
    metrics: [
      {label: 'Week-1 Activation', value: '↑ 2×', context: 'from 24% to 49%'},
      {label: 'Trial-to-Paid', value: '↑ 18pp', context: 'from 29% to 47%'},
      {label: 'Time to Activate', value: '↓ 55%', context: 'median: 8 min → 3.5 min'},
    ],
    learnings: [
      'The "aha moment" analysis was the most valuable hour I spent on this project — it gave the entire team a north star metric that everyone agreed on.',
      'Removing steps is harder than adding them politically, but the data made the case: every removed step was a drop-off point.',
      'Framing the redesign as a revenue experiment (not a UX cleanup) got immediate exec buy-in.',
    ],
    artifacts: [
      {label: 'Activation Framework Doc', url: '#', type: 'doc'},
      {label: 'A/B Test Results', url: '#', type: 'sheet'},
    ],
  },
  {
    id: 'cs3',
    slug: 'pricing-model-transition',
    type: 'case-study',
    title: 'Pricing Model Transition',
    subtitle: 'Moving from seat-based to usage-based pricing',
    summary:
      'End-to-end case study of how I led the transition from per-seat to usage-based pricing, expanding ACV by 31% while reducing churn by 22%.',
    tags: ['Pricing', 'Monetization', 'Strategy', 'B2B'],
    date: '2024-02-01',
    featured: false,
    status: 'published',
    company: 'CloudTools Ltd',
    role: 'Senior Product Manager',
    problemStatement:
      'Per-seat pricing was creating friction at two extremes: large enterprises were seat-capping to control costs and under-using the product, while SMBs felt the per-seat price was too high to add occasional users. Both segments were churning at elevated rates.',
    researchInsights:
      'Win/loss analysis across 120 deals revealed that "pricing flexibility" was the #3 objection in lost deals. Customer interviews surfaced a clear value driver: API call volume, not seat count, correlated with outcomes customers cared about. Usage data confirmed: power users drove 80% of API calls but only 40% of seats.',
    solutionDesign:
      'I designed a hybrid model: a lower base fee covering up to 10 seats, then usage-based overage for API calls beyond a free tier. I built a revenue impact model across 5 pricing scenarios, stress-tested with the CFO and key customer advisory board members. Migration path: existing customers grandfathered for 12 months with a voluntary opt-in that offered a 20% discount as incentive.',
    metrics: [
      {label: 'ACV', value: '↑ 31%', context: 'average across active accounts'},
      {label: 'Churn Rate', value: '↓ 22%', context: 'enterprise segment'},
      {label: 'Expansion Revenue', value: '↑ 2.4×', context: 'vs prior year'},
    ],
    learnings: [
      'Pricing changes are fundamentally cross-functional — legal, finance, sales, and CS all need to be co-designers, not informed stakeholders.',
      'Grandfathering with an opt-in incentive converted 41% of existing customers voluntarily in 90 days, reducing forced migration risk.',
      'The most important metric to define upfront is "what does success look like in 6 months" — without it, pricing discussions spiral endlessly.',
    ],
    artifacts: [
      {label: 'Pricing Strategy Memo', url: '#', type: 'doc'},
      {label: 'Revenue Impact Model', url: '#', type: 'sheet'},
    ],
  },
];
