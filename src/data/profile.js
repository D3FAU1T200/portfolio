export const profile = {
  name: 'Mohd. Taha Khan',
  firstName: 'Taha',
  role: 'Full Stack Developer and Competitive Programmer',
  tagline: 'I build fast, elegant interfaces for the web.',
  resumeUrl: '/resume.pdf',
  summary:
    'Computer Science (Data Science) undergraduate and competitive programmer building practical, production-ready web products.',
  location: 'Mumbai, India',
  email: 'khanmohammedtaha86@gmail.com',
  phone: '+91 7304600324',
  socials: [
    { label: 'GitHub', url: 'https://github.com/D3FAU1T200' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/mohammed-taha-khan' },
    { label: 'Codeforces', url: 'https://codeforces.com/profile/D3FAU1T' },
  ],
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  intro:
    'I am a Data Science undergraduate and competitive programmer who builds practical, production-ready web products.',
  story: [
    'I am pursuing a B.Tech in Computer Science and Engineering (Data Science) at Dwarkadas J. Sanghvi College of Engineering.',
    'I am a competitive programmer, active across Codeforces, CodeChef, and AtCoder, with 500+ problems solved.',
    'I build full-stack products too — my latest, AgriCore, turns autonomous drone telemetry into real-time field analytics for farmers.',
    'I care about clean interfaces and efficient algorithms, and I am always looking for the next hard problem to solve.',
  ],
  stats: [
    { label: 'Years', value: '1+' },
    { label: 'Projects', value: '3+' },
    { label: 'Tech Stack', value: '10+' },
  ],
}

export const education = [
  {
    school: 'Dwarkadas J. Sanghvi College of Engineering',
    period: 'Sep 2025 – Jun 2029',
    detail: 'B.Tech in Computer Science and Engineering (Data Science)',
  },
  {
    school: 'Jai Hind College, Mumbai',
    period: '2022 – 2024',
    detail: 'HSC: 86% | MHT-CET: 99.21%ile',
  },
  {
    school: 'Anjuman-I-Islam',
    period: '2012 – 2022',
    detail:
      'SSC: 89% — Elected Head Boy; led the School Student Council and student initiatives.',
  },
]

export const skillGroups = [
  {
    index: '01',
    title: 'Languages',
    span: 'lg:col-span-7',
    skills: ['C++', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
  },
  {
    index: '02',
    title: 'Frontend',
    span: 'lg:col-span-5',
    skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    index: '03',
    title: 'Backend',
    span: 'lg:col-span-5',
    skills: ['Flask', 'Python'],
  },
  {
    index: '04',
    title: 'Design & Tools',
    span: 'lg:col-span-7',
    skills: ['Git', 'GitHub'],
  },
]

export const exploring = [
  { name: 'TypeScript', note: 'Typed JavaScript' },
  { name: 'Advanced DSA', note: 'Graphs, DP, and optimization' },
  {
    name: 'Competitive Programming',
    note: 'Codeforces / CodeChef / AtCoder',
  },
]

export const achievementCards = [
  {
    index: '(01)',
    title: 'Competitive Programming',
    metric: '1324',
    description:
      'Active across Codeforces, CodeChef, and AtCoder with a 2★ CodeChef rating and 500+ problems solved.',
    tags: ['Codeforces', 'CodeChef', 'AtCoder'],
  },
  {
    index: '(02)',
    title: 'DSA / Problem Solving',
    metric: '500+',
    description:
      'Focused on algorithmic efficiency and complex problem solving under strict contest time constraints.',
    tags: ['Algorithms', 'Data Structures', 'C++'],
  },
  {
    index: '(03)',
    title: 'Hackathons & Certifications',
    metric: '3 Finals',
    description:
      'ADDAPT 4.0 — Second Runner Up; SPIT CodeHunt — 4th Place; Code Uncode — Finalist (SPIT Rank 37).',
    tags: ['Hackathons', 'Competitions'],
  },
]

export const milestones = [
  {
    year: '2022',
    title: 'Head Boy',
    text: 'Elected Head Boy at Anjuman-I-Islam, leading the School Student Council and student initiatives. SSC: 89%.',
  },
  {
    year: '2024',
    title: 'HSC & MHT-CET',
    text: 'Completed HSC at Jai Hind College with 86% and scored 99.21 percentile in MHT-CET.',
  },
  {
    year: '2025',
    title: 'B.Tech & First Podium',
    text: 'Started B.Tech CSE (Data Science) at DJ Sanghvi and placed Second Runner Up at ADDAPT 4.0.',
  },
]

export const projects = [
  {
    index: '01',
    title: 'AgriCore',
    kind: 'AgTech Platform',
    summary:
      'An intelligent agriculture platform that leverages autonomous drone telemetry to help farmers monitor fields, visualize real-time analytics, and support precision farming through automated crop monitoring.',
    problem:
      'Farmers rely on manual field scouting, which is slow, inconsistent, and difficult to scale across large areas.',
    solution:
      'AgriCore turns drone telemetry into live dashboards, automated field monitoring, and actionable crop insights.',
    impact: [
      'Delivered a production-ready Flask platform with a responsive interface',
      'Enables faster, data-driven decisions from real-time field data',
    ],
    tech: ['Flask', 'Python', 'HTML', 'CSS'],
    github: 'https://github.com/PakshalGada/agricore',
    demo: 'https://agricore.vercel.app/',
  },
  {
    index: '02',
    title: 'Level Up',
    kind: 'Gamified Learning Platform',
    summary:
      'Level Up is a platform that helps students learn topics through interactive lessons and gamified quizzes. The experience is designed to improve engagement, reinforce concepts with instant feedback, and make studying feel rewarding.',
    problem:
      'Traditional study tools struggle to hold attention and rarely provide immediate feedback.',
    solution:
      'Interactive lessons and gamified quizzes turn revision into a rewarding, feedback-driven loop.',
    impact: [
      'Higher engagement and stronger concept retention',
      'Instant feedback that makes studying feel rewarding',
    ],
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/PakshalGada/LevelUp',
    demo: 'https://level-up-three-nu.vercel.app/',
  },
]
