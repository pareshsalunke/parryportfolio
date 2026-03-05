export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  results: string[];
  metrics: {label: string; value: string}[];
  tags: string[];
  date: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Placeholder Case Study 1',
    subtitle: 'Add your case study details',
    challenge: 'To be filled',
    approach: 'To be filled',
    results: ['Result 1', 'Result 2'],
    metrics: [
      {label: 'Metric 1', value: 'Value'},
      {label: 'Metric 2', value: 'Value'},
    ],
    tags: ['Strategy', 'Analytics'],
    date: '2025-01-01',
  },
];

export interface Resume {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  summary: string;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    school: string;
    degree: string;
    field: string;
    year: string;
  }>;
  skills: string[];
}

export const resume: Resume = {
  name: 'Your Name',
  title: 'Product Manager',
  email: 'your.email@example.com',
  linkedin: 'linkedin.com/in/yourprofile',
  summary: 'Add your professional summary here',
  experience: [
    {
      company: 'Company Name',
      role: 'Product Manager',
      period: '2023 - Present',
      description: ['Add your responsibilities and achievements'],
    },
  ],
  education: [
    {
      school: 'University Name',
      degree: 'Degree',
      field: 'Field of Study',
      year: '2023',
    },
  ],
  skills: [
    'Product Strategy',
    'User Research',
    'Analytics',
    'Roadmap Planning',
  ],
};
