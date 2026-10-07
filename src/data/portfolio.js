// ════════════════════════════════════════════════════════════════
//   PORTFOLIO DATA — AYA (EYA) BOUKARI
//   Software Engineering Student @ ENIT
//   Synchronisé avec le CV Officiel (EN / FR)
// ════════════════════════════════════════════════════════════════

export const info = {
  prenom:      'Aya',
  nom:         'BOUKARI',
  role:        'Software Engineering Student',
  institution: 'National Engineering School of Tunis (ENIT)',
  specialite:  'AI & Software Engineering · Agentic AI & RAG · Distributed Systems',
  tagline:     'Designing reliable distributed architectures, intelligent agentic workflows & data-driven software.',
  description: 'Hands-on experience in Agentic AI, RAG, Machine Learning, Edge Computing, and Event-Driven Microservices. Experienced in designing intelligent platforms and scalable software architectures for healthcare and hydrometric intelligence. Seeking a Final-Year Internship (PFE) in AI Engineering or Software Engineering.',
  about: [
    'I am a 3rd-year Software Engineering student at the National Engineering School of Tunis (ENIT), specializing in AI engineering, distributed systems, and scalable software architectures.',
    'My practical experience spans developing intelligent platforms, event-driven microservices architectures (Kafka, MQTT, Spring Boot), and end-to-end AI applications across healthcare (IoMT, biomedical signal processing) and national hydrometric data management.',
    'I am actively seeking a Final-Year Internship (PFE) in AI Engineering, Agentic AI, Machine Learning, or Software Engineering starting early 2027.',
  ],
  quickFacts: {
    graduation:  '2027',
    institution: 'ENIT, Tunis, Tunisia',
    rank:        'Ranked 405/1700 in National Engineering Exam',
    interests:   'Agentic AI, RAG, Microservices, Edge Computing, IoMT, Cloud & Distributed Systems',
  },
  location:    'Tunis, Tunisia',
  phone:       '+216 93 160 198',
  email:       'aya.boukari@etudiant-enit.utm.tn',
  linkedin:    'https://linkedin.com/in/aya-boukari',
  github:      'https://github.com/eya-boukeri',
  cvUrl:       `${process.env.PUBLIC_URL}/cv.pdf?v=${Date.now()}`,
  cvEnUrl:     `${process.env.PUBLIC_URL}/cv-en.pdf?v=${Date.now()}`,
  cvFrUrl:     `${process.env.PUBLIC_URL}/cv-fr.pdf?v=${Date.now()}`,
};

export const navLinks = [
  { label: 'Home',        href: '#home' },
  { label: 'About',       href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Education',   href: '#education' },
  { label: 'Contact',     href: '#contact' },
];

export const education = [
  {
    degree:      'Engineering Degree in Software Engineering – 3rd Year',
    school:      'National Engineering School of Tunis (ENIT)',
    period:      '2024 – Present',
    description: 'Software Engineering curriculum focused on software architecture, distributed systems, applied AI, network engineering, and cloud computing. Ranked 405/1700 in the national engineering entrance examination.',
    tags:        ['Software Engineering', 'Distributed Systems', 'AI & Machine Learning', 'Networks', 'Ranked 405/1700'],
  },
  {
    degree:      'Preparatory Classes — Mathematics & Physics',
    school:      'Preparatory Institute for Engineering Studies of Monastir (IPEIM)',
    period:      '2022 – 2024',
    description: 'Intensive academic training in advanced mathematics, physics, and computer science. Admitted through the national competitive entrance exam.',
    tags:        ['Mathematics', 'Physics', 'National Exam'],
  },
  {
    degree:      'Baccalaureate in Mathematics',
    school:      'Lycée Tabarka',
    period:      '2022',
    description: 'Graduated with honors (Mention Très Bien).',
    tags:        ['Mathematics', 'Honors'],
  },
];

export const experiences = [
  {
    role:        'Intelligent Hydrometric Data Management Platform',
    company:     'DGRE – ENIT',
    period:      'Summer 2026',
    description: 'Developed the Python backend, PostgreSQL database, and part of the frontend. Designed Agentic AI workflows and a RAG pipeline for a chatbot answering domain-specific hydrometric questions. Automated the generation of hydrometric yearbooks and maps.',
    tags:        ['Python', 'PostgreSQL', 'LLMs', 'RAG', 'Agentic AI', 'REST APIs', 'Geospatial Data'],
  },
  {
    role:        'IoMT Telemonitoring Platform for Cardiac Remote Monitoring',
    company:     'PFA2 – ENIT RISC Lab',
    period:      '2025 – 2026',
    description: 'Designed an event-driven microservices architecture with Docker, MQTT, and Kafka for PPG/ACC signal processing. Implemented an XGBoost cardiac anomaly detection model (14 features, inference time below 50 ms). Developed an Edge Computing preprocessing layer, secure API Gateway with Keycloak/OAuth2/JWT, and React dashboard. Validated the platform with 46,258 messages/hour, 100% success rate, 340 ms average latency, and 50 simultaneous patients.',
    tags:        ['Java', 'Spring Boot', 'FastAPI', 'Python', 'Docker', 'Kafka', 'MQTT', 'XGBoost', 'InfluxDB', 'Keycloak', 'React'],
  },
  {
    role:        'Automatic Absence Seizure Detection from EEG Signals',
    company:     'Data Mining – ENIT',
    period:      '2025 – 2026',
    description: 'Built an EEG pipeline covering preprocessing, annotation extraction, segmentation, and time/frequency feature engineering using FFT. Compared Decision Tree, Random Forest, KNN, and SVM on imbalanced data, prioritizing Recall and F1-score.',
    tags:        ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SciPy', 'Jupyter', 'FFT Signal Processing'],
  },
  {
    role:        'Smart Pen for Dyslexic Users',
    company:     'IEEE ENIT - WIE Affinity Group',
    period:      '2025',
    description: 'Developed a Flutter mobile application with Bluetooth connectivity, speech, and learning modules connected to an IoT smart pen for dyslexic individuals.',
    tags:        ['Flutter', 'Bluetooth', 'Mobile Development', 'IoT', 'IEEE'],
  },
  {
    role:        'International Records Management Platform',
    company:     'Academic Team Project',
    period:      '2025',
    description: 'Developed a records management platform with a Java/Spring Boot backend, REST APIs, and Agile/Scrum sprint coordination.',
    tags:        ['Java', 'Spring Boot', 'REST APIs', 'Scrum Methodology'],
  },
];

export const projects = [
  {
    title:       'Intelligent Hydrometric Data Management Platform',
    description: 'Agentic AI platform dedicated to the management, analysis, and intelligent exploitation of Tunisia\'s national hydrometric data (DGRE). Features multi-agent workflows, a RAG pipeline with LLMs, conversational AI chatbot, automated yearbook generation, and interactive geospatial mapping.',
    tags:        ['Python', 'PostgreSQL', 'LLMs', 'RAG', 'Agentic AI', 'REST APIs', 'Geospatial Data'],
    github:      'https://github.com/eya-boukeri/Agentic-plateforme-AI',
    demo:        null,
  },
  {
    title:       'IoMT Telemonitoring Platform for Cardiac Remote Monitoring',
    description: 'Distributed IoT platform for cardiac remote monitoring at ENIT RISC Lab. Real-time PPG/ACC signal ingestion, Kafka event bus, XGBoost anomaly detection (<50 ms inference), Keycloak security, and validated at 46,258 msgs/hr with 100% success rate across 50 simultaneous patients.',
    tags:        ['Spring Boot', 'Kafka', 'MQTT', 'Docker', 'XGBoost', 'Keycloak', 'React', 'FastAPI'],
    github:      'https://github.com/eya-boukeri/IoMT-Telemonitoring-Platform-Heartline',
    demo:        `${process.env.PUBLIC_URL}/demo-pfa.mp4`,
    videoLabel:  'System Telemetry Demo',
  },
  {
    title:       'Automatic Absence Seizure Detection from EEG Signals',
    description: 'Biomedical signal processing and machine learning pipeline for detecting absence seizures from EEG signals. Preprocessing, annotation extraction, time/frequency feature engineering using FFT, and evaluation of Random Forest, KNN, SVM, and Decision Tree.',
    tags:        ['Python', 'Scikit-learn', 'FFT', 'Pandas', 'NumPy', 'SciPy', 'Jupyter'],
    github:      'https://github.com/eya-boukeri',
    demo:        null,
  },
  {
    title:       'Story Bloom — Library Management System',
    description: 'Enterprise-grade library management application built with .NET 8 and ASP.NET Core MVC. Implements Entity Framework Core 8.0, clean architectural patterns, catalog indexing, member borrowing workflows, and dynamic views.',
    tags:        ['.NET 8', 'C#', 'ASP.NET Core MVC', 'EF Core', 'SQL Server'],
    github:      'https://github.com/eya-boukeri/Library_Project_Complet',
    demo:        null,
  },
  {
    title:       'Intelligent Nutrition Chatbot — PFA1',
    description: 'Conversational assistant with an interactive web UI delivering personalized dietary recommendations through LLM fine-tuning and a RAG pipeline built with Flask and React.',
    tags:        ['LLM Fine-tuning', 'RAG', 'Flask', 'React', 'Python'],
    github:      'https://github.com/eya-boukeri',
    demo:        null,
  },
  {
    title:       'Cabinet Dentaire — Online Appointment Platform',
    description: 'Clinical appointment booking and patient records administration using Jakarta EE, JSP/Servlets, and MySQL. Features full CRUD operations, role-based session authentication, and interactive scheduling.',
    tags:        ['Jakarta EE', 'JSP / Servlets', 'MySQL', 'Java', 'Full-Stack'],
    github:      'https://github.com/eya-boukeri/RendezvousDentaire',
    demo:        `${process.env.PUBLIC_URL}/demo-jee.zip`,
  },
  {
    title:       'Magical Forest Game (Smurfs Game)',
    description: 'Academic 2D desktop game developed in C# and .NET with MVVM architecture. Integrates custom game loop, graphical assets, state management, and event-driven controls built with WPF.',
    tags:        ['C#', '.NET Framework', 'WPF', 'MVVM', 'Desktop Application'],
    github:      'https://github.com/eya-boukeri/SmurfGame',
    demo:        `${process.env.PUBLIC_URL}/demo-smurf-game.mp4`,
    videoLabel:  'Gameplay Demonstration',
  },
];

export const skillCategories = [
  {
    id:     'ai',
    name:   'AI & Machine Learning',
    icon:   'brain',
    skills: ['Machine Learning', 'LLMs', 'RAG', 'Agentic AI', 'XGBoost', 'Scikit-learn', 'NLP', 'Computer Vision', 'Signal Processing (FFT)'],
  },
  {
    id:     'backend',
    name:   'Backend & APIs',
    icon:   'server',
    skills: ['FastAPI', 'Flask', 'Spring Boot', 'REST APIs', 'Jakarta EE', 'ASP.NET Core MVC'],
  },
  {
    id:     'distributed',
    name:   'Distributed Systems & DevOps',
    icon:   'cloud',
    skills: ['Microservices', 'Apache Kafka', 'MQTT', 'Event-Driven Architecture', 'Docker', 'Docker Compose', 'Keycloak', 'OAuth2', 'JWT', 'Git / GitHub'],
  },
  {
    id:     'languages',
    name:   'Programming Languages',
    icon:   'code',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS', 'C#', 'C / C++'],
  },
  {
    id:     'databases',
    name:   'Databases',
    icon:   'database',
    skills: ['PostgreSQL', 'InfluxDB', 'MariaDB', 'MySQL'],
  },
  {
    id:     'frontend',
    name:   'Frontend & Mobile',
    icon:   'layout',
    skills: ['React', 'Flutter', 'Streamlit', 'Responsive Design'],
  },
];

export const activitiesAndCertifications = {
  activities: [
    {
      title: 'IEEE ENIT – Women in Engineering',
      role:  'Treasurer & General Secretary (2024–2025)',
      desc:  'Event and conference organization, team documentation, and awarded 3rd place in the WIE Challenge.',
    },
    {
      title: 'G2FOSS ENIT',
      role:  'Active Member (2025–2026)',
      desc:  'Participation in open-source hackathons and technical engineering events.',
    },
  ],
  certifications: [
    'CCNA 1 — Cisco (Introduction to Networks)',
    'CCNA 2 — Cisco (Switching, Routing, and Wireless Essentials)',
    'Efficient LLM Customization',
  ],
};

export const languages = [
  { lang: 'Arabic',   level: 'Native' },
  { lang: 'French',   level: 'B2 — Professional' },
  { lang: 'English',  level: 'B2 — Professional' },
  { lang: 'German',   level: 'Beginner' },
  { lang: 'Japanese', level: 'Beginner' },
];

export const aboutCards = [
  { key: 'location',  title: 'Location',     value: 'Tunis, Tunisia' },
  { key: 'education', title: 'Education',    value: 'ENIT — Software Engineering' },
  { key: 'focus',     title: 'Core Focus',   value: 'Agentic AI & Distributed Systems' },
  { key: 'goal',      title: 'Availability', value: 'Seeking PFE (AI / SWE)' },
];
