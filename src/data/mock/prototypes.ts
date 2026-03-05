import {Prototype} from '@/lib/types';

export const mockPrototypes: Prototype[] = [
  {
    id: 'pr1',
    slug: 'checkout-flow-prototype',
    type: 'prototype',
    title: 'Mobile Checkout Flow',
    subtitle: 'Single-page checkout redesign for iOS & Android',
    summary:
      'High-fidelity Figma prototype of the mobile checkout redesign — tested with 80 users via Maze, achieving a 94% task completion rate.',
    tags: ['Figma', 'Mobile', 'E-Commerce', 'High-Fidelity'],
    date: '2023-09-15',
    featured: true,
    status: 'published',
    tool: 'Figma',
    liveUrl: '#',
    description:
      'This prototype covers the end-to-end checkout experience for mobile: cart review, guest/account selection, address autocomplete, payment (card + Apple Pay), and order confirmation. Built in Figma with Auto Layout and component variants for iOS and Android breakpoints. Used in usability testing with 80 participants via Maze before engineering handoff.',
    screens: [],
  },
  {
    id: 'pr2',
    slug: 'developer-onboarding-prototype',
    type: 'prototype',
    title: 'Developer Onboarding Flow',
    subtitle: 'Interactive quickstart guide for API integration',
    summary:
      'Framer prototype simulating the new developer onboarding experience — live code snippets, credential generation, and first-call walkthrough.',
    tags: ['Framer', 'Developer Experience', 'APIs', 'Interactive'],
    date: '2024-02-20',
    featured: false,
    status: 'published',
    tool: 'Framer',
    liveUrl: '#',
    description:
      'An interactive prototype built in Framer to test the new developer onboarding flow before writing a line of production code. Covers OAuth credential generation, language selector (Node, Python, cURL), pre-filled quickstart code snippets, and a real-time "first call successful" celebration state. Shared with 15 developer beta testers for feedback via Loom recordings.',
    screens: [],
  },
  {
    id: 'pr3',
    slug: 'data-dashboard-concept',
    type: 'prototype',
    title: 'Data Observability Dashboard',
    subtitle: 'Pipeline health monitoring for data engineers',
    summary:
      'Figma concept for a real-time data pipeline health dashboard — status tiles, alert timelines, and drill-down incident views.',
    tags: ['Figma', 'Data', 'Dashboard', 'Internal Tools'],
    date: '2023-02-10',
    featured: false,
    status: 'published',
    tool: 'Figma',
    liveUrl: '#',
    description:
      'Design concept for the internal data observability platform. The dashboard surfaces pipeline status at a glance (green/amber/red tiles), shows an incident timeline for the last 24 hours, and provides a drill-down view into failing pipeline runs with dbt model lineage. Designed in Figma with a dark theme to match terminal aesthetics preferred by the data engineering audience. Validated via 6 corridor tests with engineers.',
    screens: [],
  },
];
