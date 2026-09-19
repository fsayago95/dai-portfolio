/**
 * Single source of truth for the portfolio copy.
 * Every fact here comes from the CV. There is deliberately no phone field,
 * and no place for metrics, client names or testimonials until they are confirmed.
 */

export interface NavItem {
  readonly id: string;
  readonly label: string;
}

export interface Moment {
  readonly label: string;
  /** ISO year or year-month, used for the <time datetime> attribute. */
  readonly iso: string;
}

export interface Role {
  readonly title: string;
  readonly organisation: string;
  readonly from: Moment;
  /** Omitted when the role is ongoing. */
  readonly to?: Moment;
  readonly bullets: readonly string[];
}

export interface Practice {
  readonly code: string;
  readonly title: string;
  readonly ordered: boolean;
  readonly items: readonly string[];
}

export interface FlightSegment {
  /** Decimal years, e.g. April 2022 is 2022 + 3/12. */
  readonly from: number;
  readonly to: number;
  readonly tone: 'solid' | 'outline';
}

export interface FlightLane {
  readonly label: string;
  readonly segments: readonly FlightSegment[];
}

export const PROFILE = {
  name: 'Daiana Santillán',
  title: 'Media Planner & Digital Marketing Specialist',
  email: 'daianasantillan92@gmail.com',
  location: 'Sliema, Malta',
} as const;

export const NAV: readonly NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'method', label: 'How I work' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const HERO = {
  headlineStart: 'I turn campaign data into ',
  headlineEmphasis: 'clear decisions.',
  lead:
    "I'm Daiana, a media planner with agency experience at Publicis Group and Havas Media in Argentina, " +
    'and freelance digital marketing for multiple clients since 2019. I monitor campaign performance, ' +
    'keep the numbers accurate, and turn them into clear recommendations.',
  facts: [
    { label: 'Based in', value: 'Sliema, Malta' },
    { label: 'Work status', value: 'Valid Maltese work permit' },
    { label: 'Languages', value: 'Spanish (native), English (B2)' },
    { label: 'Focus', value: 'Meta Ads, Google Ads, reporting' },
  ],
} as const;

export const EXPERIENCE: readonly Role[] = [
  {
    title: 'Marketing Media Planner',
    organisation: 'Havas Media Argentina',
    from: { label: 'Apr 2024', iso: '2024-04' },
    to: { label: 'Jul 2025', iso: '2025-07' },
    bullets: [
      'Monitored and analyzed daily campaign performance across multiple brands, flagging irregular trends and reporting discrepancies.',
      'Kept reporting accurate through detailed Excel reports, budget tracking and cross-checking of metrics.',
      'Tracked and reported KPIs: reach, impressions, CTR, CPC, conversions and ROAS.',
      'Analyzed performance to optimize content and paid media strategies.',
      'Worked with internal teams to solve issues and improve workflow, delivering reports and updates on tight deadlines across several accounts.',
    ],
  },
  {
    title: 'Marketing Media Planner',
    organisation: 'Publicis Group Argentina',
    from: { label: 'Jun 2023', iso: '2023-06' },
    to: { label: 'Apr 2024', iso: '2024-04' },
    bullets: [
      'Followed daily performance for multiple brands and flagged irregular trends and data discrepancies.',
      'Produced detailed Excel reports and tracked budgets, cross-checking metrics.',
      'Collaborated with internal departments to resolve issues and improve workflow.',
    ],
  },
  {
    title: 'Planner Media Assistant',
    organisation: 'Publicis Group',
    from: { label: 'Apr 2022', iso: '2022-04' },
    to: { label: 'Jun 2023', iso: '2023-06' },
    bullets: [
      'Ran administrative checks, data verification and scheduling to keep media operations accurate.',
      'Verified billing by reconciling invoices against media orders.',
      'Carried out spot controls, found inconsistencies and escalated them.',
      'Managed campaign documentation and coordinated orders with external media partners.',
      'Worked with Advertmind on time-sensitive, precision-driven tasks.',
    ],
  },
  {
    title: 'Freelance Marketing & Social Media Specialist',
    organisation: 'Multiple clients',
    from: { label: '2019', iso: '2019' },
    bullets: [
      'Delivered end-to-end digital marketing for several clients: social media, content creation and paid advertising.',
      'Planned, launched and optimized Meta Ads and Google Ads campaigns, monitoring performance and budget allocation.',
      'Built content strategies and calendars from each client’s objectives, audience and brand identity.',
      'Created social content myself, including filming, copywriting and publishing.',
      'Analyzed CTR, conversions, reach, impressions and engagement, and wrote performance reports with actionable recommendations.',
      'Managed client communication and requirements independently.',
    ],
  },
];

export const HOSPITALITY = {
  heading: 'Alongside marketing',
  text:
    'In Malta I have worked in customer-facing hospitality: Water Polo Restaurant ' +
    '(October 2025 to February 2026) and Ladurée (February 2026 to present). At Ladurée I open the ' +
    'restaurant, run morning operations independently and handle the cash register and payments. ' +
    'What carries over: working independently, accuracy with cash and orders, and resolving customer ' +
    'concerns professionally.',
} as const;

/** Career timeline drawn only from CV dates. `end` of a running role is the axis end (about September 2026). */
export const FLIGHT_AXIS = { start: 2019, end: 2026.75 } as const;

export const FLIGHT_PLAN: readonly FlightLane[] = [
  {
    label: 'Freelance',
    segments: [{ from: 2019, to: FLIGHT_AXIS.end, tone: 'solid' }],
  },
  {
    label: 'Publicis',
    segments: [
      { from: 2022 + 3 / 12, to: 2023 + 5 / 12, tone: 'outline' },
      { from: 2023 + 5 / 12, to: 2024 + 3 / 12, tone: 'solid' },
    ],
  },
  {
    label: 'Havas',
    segments: [{ from: 2024 + 3 / 12, to: 2025 + 6 / 12, tone: 'solid' }],
  },
];

export const METHOD_INTRO =
  "Most of my work sits inside agency and client accounts, so I don't have public case studies to show. " +
  'Instead, here is how I approach the work.';

export const PRACTICES: readonly Practice[] = [
  {
    code: '01',
    title: 'How I run campaigns',
    ordered: true,
    items: [
      'Start from the client’s objectives, target audience and brand identity.',
      'Plan the content and the paid campaigns around them, with a budget allocation.',
      'Keep documentation, orders and billing accurate.',
      'Launch, then monitor performance and budget.',
      'Optimize content and paid media based on the metrics.',
    ],
  },
  {
    code: '02',
    title: 'How I check data',
    ordered: false,
    items: [
      'Cross-check performance metrics.',
      'Reconcile invoices with media orders and run spot controls.',
      'Look for irregular trends and reporting discrepancies in daily monitoring.',
      'Escalate the inconsistencies I find.',
    ],
  },
  {
    code: '03',
    title: 'How I report',
    ordered: false,
    items: [
      'Detailed Excel reports with budget tracking.',
      'Report the KPIs: reach, impressions, CTR, CPC, conversions and ROAS.',
      'Turn the data into actionable recommendations for clients.',
    ],
  },
  {
    code: '04',
    title: 'How I work with people',
    ordered: false,
    items: [
      'Collaborate with internal departments to resolve issues and improve workflow.',
      'Keep clients supported and informed with correct information.',
      'Manage client communication and requirements independently on freelance accounts.',
    ],
  },
];

export const KPI_HEADING = 'The numbers I track and report';

export const KPI_TERMS: readonly string[] = [
  'Reach',
  'Impressions',
  'CTR',
  'CPC',
  'Conversions',
  'ROAS',
];

export const TOOLS = [
  { label: 'Paid media', value: 'Meta Ads, Google Ads' },
  { label: 'Media operations and data', value: 'Excel, Advertmind' },
  { label: 'Content', value: 'Canva, CapCut, Lightroom' },
  { label: 'KPIs I report', value: 'Reach, impressions, CTR, CPC, conversions, ROAS, engagement' },
] as const;

export const STRENGTHS: readonly string[] = [
  'Attention to detail',
  'Analytical thinking',
  'Problem solving',
  'Communication',
  'Working independently',
];

export const EDUCATION = [
  { label: 'Digital Marketing', value: 'Coder House, Community Manager & Advertising certificate' },
  { label: 'ISTQB certification', value: 'In progress' },
  { label: 'English', value: 'Upper-intermediate, B2 certificate, Gateway School of English, Malta' },
  { label: 'Spanish', value: 'Native' },
] as const;

export const ABOUT: readonly string[] = [
  "I'm a media planner and digital marketer. I started my agency career in media operations at Publicis Group in Argentina, " +
    'checking data, reconciling invoices with media orders and coordinating orders with external media partners. ' +
    'I then moved into planning at Publicis and Havas Media, where I followed daily performance for multiple brands, ' +
    'tracked budgets and reported on reach, impressions, CTR, CPC, conversions and ROAS.',
  'Alongside agency work, I have run digital marketing for several freelance clients since 2019: content strategy, ' +
    'filming and copywriting, and Meta Ads and Google Ads campaigns from planning to optimization.',
  'What ties it together is attention to detail. I cross-check metrics, flag irregular trends and reporting ' +
    'discrepancies, and communicate what the data shows.',
  "I now live in Sliema, Malta, hold a valid work permit, and I'm looking to grow and gain new experience " +
    'in media planning and digital marketing.',
];

export const CONTACT = {
  heading: "Let's talk.",
  text: "I'm open to media planning and digital marketing roles. The best way to reach me is by email.",
} as const;
