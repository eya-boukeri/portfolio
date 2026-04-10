// ══════════════════════════════════════════════
//   MODIFIEZ VOS INFORMATIONS ICI
// ══════════════════════════════════════════════

export const info = {
  prenom:      'AYA',
  nom:         'BOUKARI',
  role:        'Computer Engineering Student',
  specialite:  'Computer Engineering',
  tagline:     'Passionate about emerging technologies and innovative solutions.',
  description: 'Computer Engineering student at ENIT, passionate about AI and machine learning solutions, with hands-on experience across web, mobile, IoT, and microservices architectures. Rigorous, curious, and motivated, I am seeking an internship to contribute to concrete and impactful projects.',
  about: [
    'I am a Computer Engineering student at the National School of Engineers of Tunis (ENIT), passionate about emerging technologies and building practical software solutions.',
    'Through academic and club projects, I have developed practical experience in web and mobile development, IoT systems, and event-driven microservices.',
    'I am currently looking for an internship opportunity where I can apply my technical skills and continue learning in a professional environment.',
  ],
  quickFacts: {
    graduation:  '2027',
    institution: 'ENIT, Tunisia',
    interests:   'IoT Web/Mobile, Distributed systems ,Machine Learning ,IA, Open Source ,Veille technologique',
  },
  location:    'Tabarka, Tunis ,Tunisia',
  phone:       '+216 93160198',
  email:       'aya.boukari@etudiant-enit.utm.tn',
  linkedin:    'https://linkedin.com/in/aya-boukari',
  github:      'https://github.com/eya-boukeri',
  cvUrl:       `${process.env.PUBLIC_URL}/cv.pdf?v=20260410b`,
};

export const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Education',   href: '#education' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Contact',     href: '#contact' },
];

export const education = [
  {
    degree:      'Engineering Degree in Computer Engineering',
    school:      'National School of Engineers of Tunis (ENIT)',
    period:      '2024 — 2027',
    description: 'Computer Engineering curriculum focused on software engineering, distributed systems, networking, and applied AI.',
    tags:        ['Software Engineering', 'Distributed Systems', 'AI', 'Networks'],
  },
  {
    degree:      'Preparatory Classes — Math & Physics',
    school:      'Institute of Preparatory Engineering Studies of Monastir (IPEIM)',
    period:      '2022 — 2024',
    description: 'Intensive program in mathematics and physics. Ranked 405/1700 in the national engineering entrance exam.',
    tags:        ['Mathematics', 'Physics', 'National Exam'],
  },
  {
    degree:      'Baccalaureate in Mathematics',
    school:      'Lycée Tabarka',
    period:      '2021 — 2022',
    description: 'Graduated with honors .',
    tags:        ['Mathematics', 'Honors'],
  },
];

export const experiences = [
  {
    role:        'Observation Internship',
    company:     'Tunisie Telecom',
    period:      '2024',
    description: 'Observed telecom network infrastructure operations, including fiber optic installation and maintenance workflows.',
    tags:        ['Telecom', 'Network Infrastructure', 'Fiber Optics'],
  },
  {
    role:        'Smart Pen for Dyslexic People',
    company:     'IEEE ENIT - WIE Affinity Group',
    period:      '2025',
    description: 'Developed a mobile application, within a club project, connected to a smart pen via Bluetooth to help dyslexic users improve speech.',
    tags:        ['Flutter', 'Bluetooth', 'Mobile Development', 'IEEE Project'],
  },
  {
    role:        'International Files Management Platform',
    company:     'Academic Team Project',
    period:      '2025',
    description: 'Contributed to backend development and task coordination using Scrum practices (sprints, daily meetings, role-based collaboration).',
    tags:        ['Backend', 'Scrum', 'Teamwork', 'Project Coordination'],
  },
  {
    role:        'Former Treasurer & Secretary',
    company:     'IEEE ENIT - WIE Affinity Group',
    period:      '2024 — 2025',
    description: 'Managed club treasury tasks and contributed to team organization and event support.',
    tags:        ['Leadership', 'Organization', 'Teamwork'],
  },
];

export const projects = [
  {
    title:       'Medical Remote Monitoring IoT Platform (PFA2)',
    description: 'Event-driven microservices platform for real-time medical monitoring with connected objects and live dashboard workflows.',
    tags:        ['Docker', 'Kafka', 'Spring Boot', 'MQTT', 'WebSocket'],
    github:      'https://github.com/eya-boukeri/pfa',
    demo:        null,
  },
  {
    title:       'Magical Forest Game (Smurfs Game)',
    description: 'Academic project: developed a graphical game using C# and .NET with MVVM architecture.',
    tags:        ['C#', '.NET Framework', 'WPF', 'MVVM'],
    github:      'https://github.com/eya-boukeri/SmurfGame',
    demo:        `${process.env.PUBLIC_URL}/demo-smurf-game.mp4`,
  },
   {
    title:       'Appointment Booking Web Application',
    description: 'Designed and developed a web application for appointment management with CRUD operations, user session handling, and a dynamic interface.',
    tags:        ['JEE', 'Servlets', 'MySQL', 'CRUD'],
    github:      'https://github.com/eya-boukeri/RendezvousDentaire',
    demo:        `${process.env.PUBLIC_URL}/demo-jee.zip`,
  },
  {
    title:       'Intelligent Nutrition Chatbot (PFA1)',
    description: 'Built an LLM-based chatbot with an interactive web interface and API integration for natural language processing.',
    tags:        ['Flask', 'HTML/CSS/JavaScript', 'LLM', 'OpenAI-Compatible API'],
    github:      '#',
    demo:        null,
  },
  {
    title:       'Library Management Application',
    description: 'Developed a C console application to manage books with add/search/sort/delete functionalities and memory management.',
    tags:        ['C', 'Algorithms', 'Memory Management', 'Console UI'],
    github:      'null',
    demo:        null,
  },
  {
    title:       'Java Desktop Application',
    description: 'Created an object-oriented Java application with a graphical user interface designed for maintainability.',
    tags:        ['Java', 'OOP', 'GUI'],
    github:      'https://github.com/dhieeddine/MiniProjetJava',
    demo:        null,
  },
 
  
];

export const skillCategories = [
  {
    name:   'Languages',
    icon:   '< />',
    color:  '#4f8ef7',
    skills: ['Java', 'Python', 'C/C++', 'JavaScript', 'HTML/CSS', 'SQL'],
  },
  {
    name:   'Frameworks',
    icon:   '⚡',
    color:  '#7c3aed',
    skills: ['Spring Boot', 'JEE', 'Flask', 'Flutter', 'React'],
  },
  {
    name:   'Databases',
    icon:   '🗄',
    color:  '#10b981',
    skills: ['MySQL', 'InfluxDB', 'MongoDB' ,'PostgreSQL'],
  },
  {
    name:   'Architecture & Tools',
    icon:   '🛠',
    color:  '#f59e0b',
    skills: ['Microservices', 'Docker', 'Kafka', 'MQTT', 'WebSocket', 'Git'],
  },
  {
    name:   'Networks & Methodologies',
    icon:   '🧠',
    color:  '#ec4899',
    skills: ['CCNA1 (Cisco)', 'TCP/IP', 'IP Addressing', 'OSI/TCP Model', 'Scrum', 'Project Management'],
  },
];

export const languages = [
  { lang: 'Arabic',  level: 'Native' },
  { lang: 'French',  level: 'B2' },
  { lang: 'English', level: 'B2' },
];

export const aboutCards = [
  { icon: '📍', title: 'Location',   value: 'Tabarka, Tunisia' },
  { icon: '🎓', title: 'Education',  value: 'ENIT - Computer Engineering' },
  { icon: '💡', title: 'Focus',      value: 'IoT, Web/Mobile, Microservices' },
  { icon: '🎯', title: 'Goal',       value: 'Engineering internship' },
];
