export interface Metric {
  label: string;
  value: string;
  context?: string;
}

export interface Artifact {
  label: string;
  url: string;
  type: 'figma' | 'doc' | 'sheet' | 'link';
}

export interface ContentBase {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  coverImage?: string;
  tags: string[];
  date: string;
  featured: boolean;
  status: 'published' | 'draft';
}

export interface Project extends ContentBase {
  type: 'project';
  company: string;
  role: string;
  duration: string;
  outcome: string;
  metrics: Metric[];
  challenge: string;
  approach: string;
  results: string[];
  techStack?: string[];
  flowDiagram?: string;
  flowDiagramAlt?: string;
  link?: string;
  comingSoon?: string[];
}

export interface CaseStudy extends ContentBase {
  type: 'case-study';
  company: string;
  role: string;
  problemStatement: string;
  researchInsights: string;
  solutionDesign: string;
  metrics: Metric[];
  learnings: string[];
  artifacts?: Artifact[];
}

export interface Prototype extends ContentBase {
  type: 'prototype';
  tool: string;
  embedUrl?: string;
  liveUrl?: string;
  description: string;
  screens?: string[];
}

export type WorkItem = Project | CaseStudy | Prototype;
