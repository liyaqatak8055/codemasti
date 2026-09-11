import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { COURSES_DATA } from '../coursesData'
import { updatePageSeo } from '../utils/seo'

// ── Career Roadmap Data ──────────────────────────────────────────
const CAREER_ROADMAPS = [
  {
    id: 'software-engineer',
    emoji: '🚀',
    title: 'Software Engineer',
    difficulty: 'Intermediate',
    difficultyColor: '#f59e0b',
    duration: '6–9 months',
    skills: 12,
    xpReward: 3500,
    color: '#6366f1',
    description: 'A well-rounded path covering core CS fundamentals, full-stack development, system design, and interview preparation to land a Software Engineer role at top companies.',
    salaryRange: '₹6L – ₹30L per annum (India) | $80K – $180K (US)',
    careerOverview: 'Software Engineers design, develop, and maintain software systems. The role covers everything from writing clean code to architecting scalable systems. High demand across every industry.',
    requiredSkills: ['Data Structures & Algorithms', 'System Design', 'Full Stack Development', 'Git & Version Control', 'Problem Solving', 'Communication'],
    badges: ['🎯 Problem Solver', '🏗️ System Architect', '🌐 Full Stack'],
    steps: [
      { id: 'se-html',    title: 'HTML',         icon: '📘', desc: 'Web structure basics',     courseId: 'html',          status: null },
      { id: 'se-css',     title: 'CSS',          icon: '🎨', desc: 'Styling & layout',          courseId: 'css',           status: null },
      { id: 'se-js',      title: 'JavaScript',   icon: '📒', desc: 'Core programming language', courseId: 'javascript',    status: null },
      { id: 'se-py',      title: 'Python',       icon: '🐍', desc: 'Scripting & backend',       courseId: 'python',        status: null },
      { id: 'se-dsa',     title: 'DSA',          icon: '🧠', desc: 'Data structures & algorithms', courseId: 'dsa',       status: null },
      { id: 'se-react',   title: 'React',        icon: '⚛️', desc: 'Frontend framework',        courseId: 'react',         status: null },
      { id: 'se-node',    title: 'Node.js',      icon: '🟢', desc: 'Backend server',            courseId: 'nodejs',        status: null },
      { id: 'se-db',      title: 'SQL / MongoDB',icon: '🗄️', desc: 'Database management',      courseId: 'mysql',         status: null },
      { id: 'se-sysdes',  title: 'System Design',icon: '🏗️', desc: 'Architecture patterns',     courseId: 'systemdesign',  status: null },
      { id: 'se-proj',    title: 'Projects',     icon: '💼', desc: 'Portfolio projects',         courseId: 'fullstack-projects', status: null },
      { id: 'se-hr',      title: 'HR & Soft Skills', icon: '🎭', desc: 'Communication mastery',  courseId: 'hrinterview',  status: null },
      { id: 'se-int',     title: 'Interview Prep', icon: '🎯', desc: 'Mock interview practice', courseId: 'dsa',           status: null },
    ]
  },
  {
    id: 'frontend-engineer',
    emoji: '🌐',
    title: 'Frontend Engineer',
    difficulty: 'Beginner',
    difficultyColor: '#10b981',
    duration: '4–6 months',
    skills: 10,
    xpReward: 2800,
    color: '#3b82f6',
    description: 'Master everything needed to build beautiful, responsive, and performant web interfaces. From HTML fundamentals to Next.js and portfolio building.',
    salaryRange: '₹4L – ₹20L per annum (India) | $70K – $150K (US)',
    careerOverview: 'Frontend Engineers create the visual and interactive elements of web applications. Strong UI skills, performance optimization, and accessibility knowledge are key differentiators.',
    requiredSkills: ['HTML5 & CSS3', 'JavaScript ES6+', 'React.js', 'Next.js', 'TypeScript', 'Responsive Design', 'Performance Optimization'],
    badges: ['🎨 UI Master', '⚛️ React Dev', '📱 Responsive Pro'],
    steps: [
      { id: 'fe-wf',    title: 'Web Development', icon: '🌐', desc: 'Internet, HTTP & Architecture', courseId: 'web-development', status: null },
      { id: 'fe-html',  title: 'HTML',         icon: '📘', desc: 'Structure of web pages',     courseId: 'html',       status: null },
      { id: 'fe-css',   title: 'CSS',          icon: '🎨', desc: 'Styling aur layout',          courseId: 'css',        status: null },
      { id: 'fe-js',    title: 'JavaScript',   icon: '📒', desc: 'Interactivity add karo',      courseId: 'javascript', status: null },
      { id: 'fe-git',   title: 'Git & GitHub', icon: '🐙', desc: 'Version control',             courseId: 'git',        status: null },
      { id: 'fe-ts',    title: 'TypeScript',   icon: '🔷', desc: 'Type-safe JavaScript',        courseId: 'typescript', status: null },
      { id: 'fe-react', title: 'React / Angular', icon: '⚛️', desc: 'Component-based UI',       courseId: 'react',      status: null },
      { id: 'fe-next',  title: 'Next.js',      icon: '🔺', desc: 'Fullstack React framework',   courseId: 'nextjs',     status: null },
      { id: 'fe-test',  title: 'Testing',      icon: '🧪', desc: 'Vitest & React Testing Lib',  courseId: 'testing',    status: null },
      { id: 'fe-perf',  title: 'Performance',  icon: '⚡', desc: 'Core Web Vitals & Splitting', courseId: 'performance', status: null },
      { id: 'fe-proj',  title: 'Projects',     icon: '🏗️', desc: 'Build real-world apps',       courseId: 'frontend-projects', status: null },
      { id: 'fe-int',   title: 'Interview Prep', icon: '🎯', desc: 'Crack tech interviews',     courseId: 'dsa',        status: null },
    ]
  },
  {
    id: 'backend-engineer',
    emoji: '⚙️',
    title: 'Backend Engineer',
    difficulty: 'Intermediate',
    difficultyColor: '#f59e0b',
    duration: '5–7 months',
    skills: 10,
    xpReward: 3000,
    color: '#10b981',
    description: 'Build powerful server-side systems, REST APIs, databases, and cloud infrastructure. Become the backbone of web applications.',
    salaryRange: '₹5L – ₹25L per annum (India) | $75K – $160K (US)',
    careerOverview: 'Backend Engineers build the logic that powers apps — APIs, databases, authentication, cloud deployments, and performance at scale.',
    requiredSkills: ['Node.js', 'Express.js', 'MongoDB & PostgreSQL', 'REST API Design', 'Authentication (JWT)', 'Docker', 'AWS Basics'],
    badges: ['⚙️ API Builder', '🗄️ DB Expert', '☁️ Cloud Ready'],
    steps: [
      { id: 'be-wf',     title: 'Web Development', icon: '🌐', desc: 'HTTP, headers & REST API', courseId: 'web-development', status: null },
      { id: 'be-js',     title: 'JavaScript',  icon: '📒', desc: 'Foundation for Node.js',     courseId: 'javascript',  status: null },
      { id: 'be-node',   title: 'Node.js',     icon: '🟢', desc: 'Server-side JavaScript',     courseId: 'nodejs',      status: null },
      { id: 'be-expr',   title: 'Express',     icon: '🚂', desc: 'REST APIs banao',             courseId: 'expressjs',   status: null },
      { id: 'be-rest',   title: 'REST APIs',   icon: '📡', desc: 'API architecture',            courseId: 'restapi',     status: null },
      { id: 'be-mongo',  title: 'MongoDB',     icon: '🍃', desc: 'NoSQL database',              courseId: 'mongodb',     status: null },
      { id: 'be-pg',     title: 'PostgreSQL',  icon: '🐘', desc: 'Relational database',         courseId: 'postgresql',  status: null },
      { id: 'be-auth',   title: 'Auth & Security', icon: '🔐', desc: 'JWT, hashing & security',  courseId: 'auth',        status: null },
      { id: 'be-test',   title: 'Testing',     icon: '🧪', desc: 'Supertest & Unit testing',    courseId: 'testing',     status: null },
      { id: 'be-docker', title: 'Docker & DevOps', icon: '🐳', desc: 'Containerization & CI/CD', courseId: 'devops',      status: null },
      { id: 'be-proj',   title: 'Projects',    icon: '🏗️', desc: 'Build APIs & services',       courseId: 'backend-projects', status: null },
      { id: 'be-int',    title: 'System Design', icon: '🎯', desc: 'Scalability & caching',     courseId: 'systemdesign', status: null },
    ]
  },
  {
    id: 'fullstack-engineer',
    emoji: '💻',
    title: 'Full Stack Engineer',
    difficulty: 'Advanced',
    difficultyColor: '#8b5cf6',
    duration: '8–12 months',
    skills: 16,
    xpReward: 5000,
    color: '#8b5cf6',
    description: 'Master both frontend and backend to build complete web applications end-to-end. The most versatile and in-demand engineering role.',
    salaryRange: '₹6L – ₹35L per annum (India) | $90K – $200K (US)',
    careerOverview: 'Full Stack Engineers own the entire product — from pixel-perfect UIs to scalable backend systems, databases, and cloud deployments.',
    requiredSkills: ['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'System Design'],
    badges: ['🏆 Full Stack', '⚡ Power Dev', '🌐 Web Expert'],
    steps: [
      { id: 'fs-wf',     title: 'Web Development', icon: '🌐', desc: 'Internet, HTTP & Architecture', courseId: 'web-development', status: null },
      { id: 'fs-html',   title: 'HTML',         icon: '📘', desc: 'Structure',                  courseId: 'html',        status: null },
      { id: 'fs-css',    title: 'CSS',          icon: '🎨', desc: 'Styling',                    courseId: 'css',         status: null },
      { id: 'fs-js',     title: 'JavaScript',   icon: '📒', desc: 'Complete JS mastery',        courseId: 'javascript',  status: null },
      { id: 'fs-git',    title: 'Git & GitHub', icon: '🐙', desc: 'Version control',            courseId: 'git',         status: null },
      { id: 'fs-ts',     title: 'TypeScript',   icon: '🔷', desc: 'Type safety',                courseId: 'typescript',  status: null },
      { id: 'fs-react',  title: 'React / Angular', icon: '⚛️', desc: 'Frontend framework',      courseId: 'react',       status: null },
      { id: 'fs-next',   title: 'Next.js',      icon: '🔺', desc: 'Fullstack React framework',  courseId: 'nextjs',      status: null },
      { id: 'fs-node',   title: 'Node.js',      icon: '🟢', desc: 'Backend server',             courseId: 'nodejs',      status: null },
      { id: 'fs-expr',   title: 'Express',      icon: '🚂', desc: 'REST API server',            courseId: 'expressjs',   status: null },
      { id: 'fs-mongo',  title: 'MongoDB',      icon: '🍃', desc: 'NoSQL database',             courseId: 'mongodb',     status: null },
      { id: 'fs-pg',     title: 'PostgreSQL',   icon: '🐘', desc: 'SQL database',               courseId: 'postgresql',  status: null },
      { id: 'fs-auth',   title: 'Auth & Security', icon: '🔐', desc: 'Authentication & Security', courseId: 'auth',      status: null },
      { id: 'fs-test',   title: 'Testing',      icon: '🧪', desc: 'Vitest & E2E tests',         courseId: 'testing',     status: null },
      { id: 'fs-docker', title: 'Docker & DevOps', icon: '🐳', desc: 'Containerization & CI/CD', courseId: 'devops',      status: null },
      { id: 'fs-sysdes', title: 'System Design',icon: '🏗️', desc: 'Architecture patterns',      courseId: 'systemdesign',status: null },
      { id: 'fs-proj',   title: 'Projects',     icon: '💼', desc: 'Full-stack app build',        courseId: 'fullstack-projects', status: null },
      { id: 'fs-int',    title: 'Interview Prep', icon: '🎯', desc: 'System design + DSA',       courseId: 'dsa',         status: null },
    ]
  },
  {
    id: 'ai-engineer',
    emoji: '🤖',
    title: 'AI Engineer',
    difficulty: 'Advanced',
    difficultyColor: '#8b5cf6',
    duration: '8–12 months',
    skills: 12,
    xpReward: 5000,
    color: '#ec4899',
    description: 'Build the future with AI. Master Machine Learning, Deep Learning, LLMs, RAG pipelines and AI Agents using Python and the modern AI stack.',
    salaryRange: '₹10L – ₹60L per annum (India) | $120K – $300K (US)',
    careerOverview: 'AI Engineers design, build, and deploy intelligent systems. From classical ML to cutting-edge LLMs and autonomous AI agents — this is the most exciting frontier in tech.',
    requiredSkills: ['Python', 'NumPy & Pandas', 'Machine Learning', 'Deep Learning', 'PyTorch', 'LLMs', 'RAG', 'LangChain', 'AI Agents'],
    badges: ['🤖 AI Builder', '🧠 ML Expert', '🔮 LLM Master'],
    steps: [
      { id: 'ai-py',     title: 'Python',        icon: '🐍', desc: 'Foundation language',        courseId: 'python',     status: null },
      { id: 'ai-numpy',  title: 'NumPy',         icon: '📐', desc: 'Numerical computing',        courseId: null,         status: null },
      { id: 'ai-pandas', title: 'Pandas',        icon: '🐼', desc: 'Data manipulation',          courseId: null,         status: null },
      { id: 'ai-stats',  title: 'Statistics',    icon: '📊', desc: 'Math for ML',                courseId: null,         status: null },
      { id: 'ai-ml',     title: 'Machine Learning', icon: '⚙️', desc: 'Core ML algorithms',      courseId: null,         status: null },
      { id: 'ai-dl',     title: 'Deep Learning', icon: '🧠', desc: 'Neural networks',            courseId: null,         status: null },
      { id: 'ai-torch',  title: 'PyTorch',       icon: '🔥', desc: 'Deep learning framework',   courseId: null,         status: null },
      { id: 'ai-llm',    title: 'LLMs',          icon: '🤖', desc: 'Large language models',      courseId: null,         status: null },
      { id: 'ai-rag',    title: 'RAG',           icon: '🔍', desc: 'Retrieval-augmented gen',    courseId: null,         status: null },
      { id: 'ai-lc',     title: 'LangChain',     icon: '⛓️', desc: 'LLM orchestration',         courseId: null,         status: null },
      { id: 'ai-agent',  title: 'AI Agents',     icon: '🕵️', desc: 'Autonomous agent systems',  courseId: null,         status: null },
      { id: 'ai-proj',   title: 'Projects',      icon: '💼', desc: 'Build AI applications',      courseId: null,         status: null },
    ]
  },
  {
    id: 'data-engineer',
    emoji: '🏗️',
    title: 'Data Engineer',
    difficulty: 'Advanced',
    difficultyColor: '#8b5cf6',
    duration: '7–10 months',
    skills: 10,
    xpReward: 4200,
    color: '#0ea5e9',
    description: 'Build scalable data pipelines, ETL systems, and data warehouses that power analytics and ML at massive scale.',
    salaryRange: '₹8L – ₹40L per annum (India) | $100K – $220K (US)',
    careerOverview: 'Data Engineers build the infrastructure for data. They create pipelines that move, transform and store data efficiently, enabling data analysts and data scientists to work at scale.',
    requiredSkills: ['Python', 'SQL', 'Apache Spark', 'Kafka', 'Airflow', 'AWS / GCP', 'Data Warehousing', 'ETL Design'],
    badges: ['🏗️ Pipeline Builder', '🗄️ Data Architect', '☁️ Cloud Engineer'],
    steps: [
      { id: 'de-py',     title: 'Python',         icon: '🐍', desc: 'Scripting & automation',  courseId: 'python',     status: null },
      { id: 'de-sql',    title: 'SQL',            icon: '🗄️', desc: 'Query language mastery',  courseId: 'mysql',      status: null },
      { id: 'de-pg',     title: 'PostgreSQL',     icon: '🐘', desc: 'Advanced SQL database',   courseId: 'postgresql', status: null },
      { id: 'de-spark',  title: 'Apache Spark',   icon: '⚡', desc: 'Big data processing',      courseId: null,         status: null },
      { id: 'de-kafka',  title: 'Kafka',          icon: '📨', desc: 'Real-time data streaming', courseId: null,         status: null },
      { id: 'de-air',    title: 'Airflow',        icon: '🌬️', desc: 'Pipeline orchestration',   courseId: null,         status: null },
      { id: 'de-docker', title: 'Docker',         icon: '🐳', desc: 'Containerization',         courseId: null,         status: null },
      { id: 'de-cloud',  title: 'AWS / GCP',      icon: '☁️', desc: 'Cloud data platforms',     courseId: null,         status: null },
      { id: 'de-dw',     title: 'Data Warehouse', icon: '🏛️', desc: 'Snowflake, BigQuery',      courseId: null,         status: null },
      { id: 'de-proj',   title: 'Projects',       icon: '💼', desc: 'End-to-end pipeline',      courseId: null,         status: null },
    ]
  },
  {
    id: 'data-analyst',
    emoji: '📊',
    title: 'Data Analyst',
    difficulty: 'Beginner',
    difficultyColor: '#10b981',
    duration: '3–5 months',
    skills: 8,
    xpReward: 2200,
    color: '#f59e0b',
    description: 'Turn raw data into insights that drive business decisions. Master SQL, Python, Excel, visualization and storytelling with data.',
    salaryRange: '₹3L – ₹15L per annum (India) | $55K – $110K (US)',
    careerOverview: 'Data Analysts collect, process, and analyze data to help organizations make smarter business decisions. Excellent entry point into the data world.',
    requiredSkills: ['SQL', 'Python (Pandas)', 'Excel / Google Sheets', 'Tableau / Power BI', 'Statistics', 'Data Storytelling'],
    badges: ['📊 Data Storyteller', '🔍 Insight Finder', '📈 Business Analyst'],
    steps: [
      { id: 'da-sql',    title: 'SQL',            icon: '🗄️', desc: 'Query & analyze data',     courseId: 'mysql',      status: null },
      { id: 'da-py',     title: 'Python',         icon: '🐍', desc: 'Data manipulation',         courseId: 'python',     status: null },
      { id: 'da-pandas', title: 'Pandas',         icon: '🐼', desc: 'Data wrangling',            courseId: null,         status: null },
      { id: 'da-stats',  title: 'Statistics',     icon: '📐', desc: 'Statistical analysis',      courseId: null,         status: null },
      { id: 'da-excel',  title: 'Excel',          icon: '📋', desc: 'Spreadsheet mastery',       courseId: null,         status: null },
      { id: 'da-viz',    title: 'Tableau / BI',   icon: '📊', desc: 'Data visualization',        courseId: null,         status: null },
      { id: 'da-story',  title: 'Data Storytelling', icon: '📖', desc: 'Present insights',       courseId: null,         status: null },
      { id: 'da-proj',   title: 'Projects',       icon: '💼', desc: 'Real-world analysis',       courseId: null,         status: null },
    ]
  },
  {
    id: 'devops-engineer',
    emoji: '☁️',
    title: 'DevOps Engineer',
    difficulty: 'Advanced',
    difficultyColor: '#8b5cf6',
    duration: '7–10 months',
    skills: 10,
    xpReward: 4500,
    color: '#f97316',
    description: 'Bridge the gap between development and operations. Build CI/CD pipelines, manage cloud infrastructure, and ensure systems run reliably at scale.',
    salaryRange: '₹7L – ₹35L per annum (India) | $90K – $200K (US)',
    careerOverview: 'DevOps Engineers automate software delivery, manage infrastructure as code, and create reliable, scalable deployment pipelines. High demand with excellent growth trajectory.',
    requiredSkills: ['Linux', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'AWS / Azure', 'Terraform', 'Monitoring (Grafana)', 'Scripting (Bash, Python)'],
    badges: ['🚀 CI/CD Expert', '🐳 Container Pro', '☁️ Cloud Architect'],
    steps: [
      { id: 'do-linux',  title: 'Linux',          icon: '🐧', desc: 'OS & shell mastery',        courseId: null,         status: null },
      { id: 'do-py',     title: 'Python / Bash',  icon: '🐍', desc: 'Scripting & automation',    courseId: 'python',     status: null },
      { id: 'do-git',    title: 'Git & GitHub',   icon: '🔧', desc: 'Version control',           courseId: null,         status: null },
      { id: 'do-docker', title: 'Docker',         icon: '🐳', desc: 'Containerization',          courseId: null,         status: null },
      { id: 'do-k8s',    title: 'Kubernetes',     icon: '⚓', desc: 'Container orchestration',   courseId: null,         status: null },
      { id: 'do-cicd',   title: 'CI/CD Pipelines', icon: '🔄', desc: 'Automated deployments',   courseId: null,         status: null },
      { id: 'do-aws',    title: 'AWS / Azure',    icon: '☁️', desc: 'Cloud platforms',            courseId: null,         status: null },
      { id: 'do-tf',     title: 'Terraform',      icon: '🏗️', desc: 'Infrastructure as Code',    courseId: null,         status: null },
      { id: 'do-mon',    title: 'Monitoring',     icon: '📡', desc: 'Grafana, Prometheus',        courseId: null,         status: null },
      { id: 'do-proj',   title: 'Projects',       icon: '💼', desc: 'Deploy real systems',        courseId: null,         status: null },
    ]
  },
  {
    id: 'java-developer',
    emoji: '☕',
    title: 'Java Developer',
    difficulty: 'Intermediate',
    difficultyColor: '#f59e0b',
    duration: '5–8 months',
    skills: 9,
    xpReward: 3200,
    color: '#dc2626',
    description: 'Master Java and the Spring Boot ecosystem to build enterprise-grade backend systems, REST APIs, and scalable microservices.',
    salaryRange: '₹4L – ₹25L per annum (India) | $75K – $160K (US)',
    careerOverview: 'Java Developers build enterprise software, Android apps, and backend microservices. Java remains one of the most-used languages in the industry with massive job opportunities.',
    requiredSkills: ['Core Java', 'OOP Concepts', 'Spring Boot', 'REST APIs', 'Hibernate / JPA', 'SQL', 'Maven / Gradle', 'Microservices'],
    badges: ['☕ Java Master', '🏗️ Spring Expert', '🔧 Enterprise Dev'],
    steps: [
      { id: 'jv-core',  title: 'Core Java',      icon: '☕', desc: 'OOP, collections, streams', courseId: 'java',       status: null },
      { id: 'jv-oop',   title: 'OOP & Design',   icon: '🔷', desc: 'Design patterns',           courseId: 'java',       status: null },
      { id: 'jv-sql',   title: 'SQL & JDBC',      icon: '🗄️', desc: 'Database connectivity',    courseId: 'mysql',      status: null },
      { id: 'jv-spr',   title: 'Spring Boot',    icon: '🌱', desc: 'Web framework',             courseId: null,         status: null },
      { id: 'jv-api',   title: 'REST APIs',      icon: '🌐', desc: 'API development',           courseId: 'restapi',    status: null },
      { id: 'jv-hib',   title: 'Hibernate',      icon: '🔗', desc: 'ORM & database mapping',    courseId: null,         status: null },
      { id: 'jv-ms',    title: 'Microservices',  icon: '⚙️', desc: 'Distributed architecture',  courseId: null,         status: null },
      { id: 'jv-docker',title: 'Docker',          icon: '🐳', desc: 'Containerize Java apps',    courseId: null,         status: null },
      { id: 'jv-proj',  title: 'Projects',        icon: '💼', desc: 'Enterprise-grade projects', courseId: null,         status: null },
    ]
  },
  {
    id: 'python-developer',
    emoji: '🐍',
    title: 'Python Developer',
    difficulty: 'Beginner',
    difficultyColor: '#10b981',
    duration: '4–6 months',
    skills: 9,
    xpReward: 2600,
    color: '#3b82f6',
    description: 'Python is the most versatile language. Build web apps with Django/FastAPI, automate tasks, work with data, and get into AI/ML.',
    salaryRange: '₹3L – ₹20L per annum (India) | $70K – $150K (US)',
    careerOverview: 'Python Developers work across web development, automation, data science, and AI. Python\'s simplicity and power make it one of the most in-demand skills globally.',
    requiredSkills: ['Core Python', 'OOP', 'Django / FastAPI', 'SQL', 'REST APIs', 'Pandas & NumPy', 'Git', 'Testing'],
    badges: ['🐍 Python Pro', '🌐 Web Dev', '⚡ Automation Expert'],
    steps: [
      { id: 'pyd-core',  title: 'Core Python',    icon: '🐍', desc: 'Syntax, OOP, modules',     courseId: 'python',     status: null },
      { id: 'pyd-adv',   title: 'Advanced Python', icon: '⚡', desc: 'Decorators, generators',   courseId: 'python',     status: null },
      { id: 'pyd-sql',   title: 'SQL',            icon: '🗄️', desc: 'Database operations',      courseId: 'mysql',      status: null },
      { id: 'pyd-rest',  title: 'REST APIs',      icon: '🌐', desc: 'Build APIs with FastAPI',   courseId: 'restapi',    status: null },
      { id: 'pyd-django',title: 'Django',         icon: '🎸', desc: 'Full web framework',        courseId: null,         status: null },
      { id: 'pyd-pands', title: 'Pandas & NumPy', icon: '📐', desc: 'Data processing',           courseId: null,         status: null },
      { id: 'pyd-test',  title: 'Testing',        icon: '🧪', desc: 'Unit tests & pytest',       courseId: null,         status: null },
      { id: 'pyd-docker',title: 'Docker',         icon: '🐳', desc: 'Containerization',          courseId: null,         status: null },
      { id: 'pyd-proj',  title: 'Projects',       icon: '💼', desc: 'Real Python projects',      courseId: null,         status: null },
    ]
  },
  {
    id: 'dsa-master',
    emoji: '🧠',
    title: 'DSA Master',
    difficulty: 'Intermediate',
    difficultyColor: '#f59e0b',
    duration: '4–6 months',
    skills: 10,
    xpReward: 3800,
    color: '#a855f7',
    description: 'Crack FAANG and top-tier tech interviews with deep mastery of Data Structures & Algorithms, System Design, and competitive programming.',
    salaryRange: 'Unlocks: ₹15L–₹1Cr+ roles | FAANG & top startups',
    careerOverview: 'DSA mastery is the key to cracking top tech interviews. This roadmap takes you from basics to competitive programming and system design — your ticket to FAANG companies.',
    requiredSkills: ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Recursion', 'System Design', 'Time & Space Complexity'],
    badges: ['🧠 DSA Champion', '⚡ Speed Coder', '🎯 FAANG Ready'],
    steps: [
      { id: 'dsa-lang',  title: 'C++ / Python',    icon: '💻', desc: 'Choose your weapon',       courseId: 'cpp',        status: null },
      { id: 'dsa-arr',   title: 'Arrays & Strings', icon: '📊', desc: 'Foundation data structures',courseId: 'dsa',       status: null },
      { id: 'dsa-ll',    title: 'Linked Lists',    icon: '🔗', desc: 'Pointer mastery',           courseId: 'dsa',        status: null },
      { id: 'dsa-stack', title: 'Stack & Queue',   icon: '📚', desc: 'Linear data structures',    courseId: 'dsa',        status: null },
      { id: 'dsa-tree',  title: 'Trees & Graphs',  icon: '🌳', desc: 'Hierarchical structures',   courseId: 'dsa',        status: null },
      { id: 'dsa-hash',  title: 'Hashing',         icon: '🔑', desc: 'HashMaps & sets',           courseId: 'dsa',        status: null },
      { id: 'dsa-sort',  title: 'Sorting & Search',icon: '🔍', desc: 'Classic algorithms',        courseId: 'dsa',        status: null },
      { id: 'dsa-dp',    title: 'Dynamic Programming', icon: '⚡', desc: 'Optimization problems', courseId: 'dsa',        status: null },
      { id: 'dsa-sysdes',title: 'System Design',   icon: '🏗️', desc: 'Architecture interviews',  courseId: 'systemdesign',status: null },
      { id: 'dsa-mock',  title: 'Mock Interviews',  icon: '🎯', desc: 'Practice with peers',      courseId: null,         status: null },
    ]
  }
]

// ── Mentor Popup Tips ────────────────────────────────────────────
const MENTOR_TIPS = {
  'frontend-engineer': [
    'Frontend Developer banna hai? HTML se shuruaat karte hain 😎',
    'CSS seekh lo — layout aur design ki neev yahi hai!',
    'JavaScript ke bina frontend incomplete hai bhai!',
    'React unlock karne ke liye JavaScript complete karo 🔥',
    'Next.js = React + Backend powers. Full Stack ka rasta yahi se hai!',
  ],
  'backend-engineer': [
    'Backend ka base JavaScript hai — pehle woh mazboot karo 💪',
    'Node.js chalana seekh lo — bina iske Express nahi seekh sakte!',
    'MongoDB aur PostgreSQL dono seekho — market mein dono chahiye!',
    'Docker sikhna ek game-changer hai — sab companies use karti hain!',
  ],
  'ai-engineer': [
    'Python ka mastery AI ka pehla kadam hai 🐍',
    'Statistics boring lagti hai par ML ke liye zaroori hai!',
    'PyTorch > TensorFlow in 2025 — yahi seekho bhai!',
    'LLMs aur RAG seekh ke tum future ke liye ready ho jaoge 🤖',
  ],
  'dsa-master': [
    'DSA sikhna mushkil lagta hai par yahi FAANG ka darwaza hai!',
    'Arrays se shuru karo — sab kuch yahi se build hota hai 📊',
    'Dynamic Programming = sabse powerful technique. Time lo, rush mat karo!',
    'Rooz ek problem solve karo — consistency hi success hai 🎯',
  ],
}

const DEFAULT_TIPS = [
  'Ek topic ek waqt mein seekho — rush mat karo! 🧘',
  'Rooz 1 ghante ki coding se saal bhar mein expert ban sakte ho!',
  'Projects banao — warna theory bhi bhul jaoge 🏗️',
  'Community se seekho — CodeMastii Discord join karo!',
]

// ── Utility: Get course progress ─────────────────────────────────
function getCourseProgressUtil(user, courseId) {
  if (!user || !courseId) return 0
  const course = COURSES_DATA.find(c => c.id === courseId)
  if (!course) return 0
  let total = 0, done = 0
  course.chapters.forEach(ch => ch.lessons.forEach(l => {
    total++
    if (user.completedLessons?.includes(l.id)) done++
  }))
  return total === 0 ? 0 : Math.round((done / total) * 100)
}

function getStepStatus(user, step, index, steps) {
  const pct = getCourseProgressUtil(user, step.courseId)
  if (pct === 100) return 'completed'
  if (pct > 0) return 'current'
  // First step always unlocked
  if (index === 0) return 'available'
  // Previous step done => available
  const prevPct = getCourseProgressUtil(user, steps[index - 1]?.courseId)
  if (prevPct === 100) return 'available'
  return 'locked'
}

import { useParams, useNavigate } from 'react-router-dom'

const findRoadmapByIdOrSlug = (id) => {
  if (!id) return null
  const normalized = id.toLowerCase().replace(/[-_]/g, '')
  return CAREER_ROADMAPS.find(r => {
    const rNorm = r.id.toLowerCase().replace(/[-_]/g, '')
    if (r.id === id || rNorm === normalized) return true
    if ((normalized === 'frontend' || normalized === 'frontenddev' || normalized === 'frontenddeveloper') && r.id === 'frontend-engineer') return true
    if ((normalized === 'backend' || normalized === 'backenddev' || normalized === 'backenddeveloper') && r.id === 'backend-engineer') return true
    if ((normalized === 'fullstack' || normalized === 'fullstackdev' || normalized === 'fullstackdeveloper') && r.id === 'fullstack-developer') return true
    if ((normalized === 'softwareengineer' || normalized === 'se') && r.id === 'software-engineer') return true
    if (normalized === 'dsa' && r.id === 'dsa-problem-solver') return true
    if ((normalized === 'aiml' || normalized === 'ai' || normalized === 'ml') && r.id === 'ai-ml-engineer') return true
    if (normalized === 'devops' && r.id === 'devops-engineer') return true
    if ((normalized === 'systemdesign' || normalized === 'architect') && r.id === 'system-architect') return true
    return false
  }) || null
}

// ── Main Page Component ──────────────────────────────────────────
export default function CareerRoadmapsPage({ user, onStartCourse, initialRoadmapId, onOpenRoadmap, onBackToRoadmaps }) {
  const { roadmapId: paramRoadmapId } = useParams()
  const navigate = useNavigate()
  const currentRoadmapId = paramRoadmapId || initialRoadmapId
  const [selectedRoadmap, setSelectedRoadmap] = useState(() => findRoadmapByIdOrSlug(currentRoadmapId))
  const [mentorTip, setMentorTip] = useState(null)
  const [mentorVisible, setMentorVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(null)

  useEffect(() => {
    setSelectedRoadmap(findRoadmapByIdOrSlug(currentRoadmapId))
  }, [currentRoadmapId])

  useEffect(() => {
    if (selectedRoadmap) {
      updatePageSeo({
        title: `${selectedRoadmap.title} Developer Roadmap 2026 | CodeMasti`,
        description: `Follow a step-by-step career path for ${selectedRoadmap.title}. Master ${selectedRoadmap.skills} core skills with visual modules, practice challenges, and interview prep.`,
        path: `/roadmaps/${selectedRoadmap.id}`,
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Roadmaps', url: '/roadmaps' },
          { name: selectedRoadmap.title, url: `/roadmaps/${selectedRoadmap.id}` }
        ]
      })
    } else {
      updatePageSeo({
        title: 'Career Roadmaps – Developer Learning Paths | CodeMasti',
        description: 'Choose your tech career path: Frontend, Backend, Full Stack, Software Engineer, AI/ML, DevOps, and more with structured step-by-step guidance in Hinglish.',
        path: '/roadmaps',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Roadmaps', url: '/roadmaps' }
        ]
      })
    }
  }, [selectedRoadmap])

  // Show mentor tip on detail page load
  useEffect(() => {
    if (!selectedRoadmap) return
    const tips = MENTOR_TIPS[selectedRoadmap.id] || DEFAULT_TIPS
    const tip = tips[Math.floor(Math.random() * tips.length)]
    const timer = setTimeout(() => {
      setMentorTip(tip)
      setMentorVisible(true)
    }, 1200)
    return () => clearTimeout(timer)
  }, [selectedRoadmap?.id])

  const getRoadmapProgress = (roadmap) => {
    const completed = roadmap.steps.filter(
      s => getStepStatus(user, s, roadmap.steps.indexOf(s), roadmap.steps) === 'completed'
    ).length
    return Math.round((completed / roadmap.steps.length) * 100)
  }

  const getRoadmapXPEarned = (roadmap) => {
    const completedCount = roadmap.steps.filter(
      s => getStepStatus(user, s, roadmap.steps.indexOf(s), roadmap.steps) === 'completed'
    ).length
    return Math.round((completedCount / roadmap.steps.length) * roadmap.xpReward)
  }

  const handleNodeClick = (step) => {
    if (!step.courseId) return
    const course = COURSES_DATA.find(c => c.id === step.courseId)
    if (course) {
      if (onStartCourse) onStartCourse(course)
      else navigate(getCourseUrl(course))
    }
  }

  if (selectedRoadmap) {
    return (
      <RoadmapDetailPage
        roadmap={selectedRoadmap}
        user={user}
        onBack={() => {
          setSelectedRoadmap(null)
          setMentorVisible(false)
          setMentorTip(null)
          if (onBackToRoadmaps) onBackToRoadmaps()
          else navigate('/roadmaps')
        }}
        onNodeClick={handleNodeClick}
        mentorTip={mentorTip}
        mentorVisible={mentorVisible}
        onCloseMentor={() => setMentorVisible(false)}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        getRoadmapProgress={getRoadmapProgress}
        getRoadmapXPEarned={getRoadmapXPEarned}
      />
    )
  }

  return (
    <div className="career-roadmaps-page">
      {/* Header */}
      <motion.div
        className="cr-page-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="cr-header-badge">🗺️ Career Roadmaps</div>
        <h1 className="cr-page-title">
          Choose Your Career Path
        </h1>
        <p className="cr-page-subtitle">
          Step-by-step, topic-by-topic guided paths to land your dream tech job.
          Pick a roadmap, follow the flow, earn XP, and get hired. 🚀
        </p>
        <div className="cr-header-stats">
          <div className="cr-stat-pill">
            <span>🗺️</span>
            <strong>11</strong>
            <span>Roadmaps</span>
          </div>
          <div className="cr-stat-pill">
            <span>📚</span>
            <strong>100+</strong>
            <span>Skills</span>
          </div>
          <div className="cr-stat-pill">
            <span>⚡</span>
            <strong>40K+</strong>
            <span>Total XP</span>
          </div>
          <div className="cr-stat-pill">
            <span>🏆</span>
            <strong>30+</strong>
            <span>Badges</span>
          </div>
        </div>
      </motion.div>

      {/* Roadmap Cards Grid */}
      <div className="cr-cards-grid">
        {CAREER_ROADMAPS.map((roadmap, i) => {
          const progress = getRoadmapProgress(roadmap)
          const xpEarned = getRoadmapXPEarned(roadmap)

          const handleOpen = () => {
            setSelectedRoadmap(roadmap)
            if (onOpenRoadmap) onOpenRoadmap(roadmap.id)
          }

          return (
            <motion.div
              key={roadmap.id}
              className="cr-roadmap-card"
              style={{ '--rm-color': roadmap.color, cursor: 'pointer' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={handleOpen}
            >
              {/* Card top accent */}
              <div className="cr-card-accent" style={{ background: roadmap.color }} />

              {/* Card Header */}
              <div className="cr-card-header">
                <div className="cr-card-emoji" style={{ background: roadmap.color + '18', border: `1.5px solid ${roadmap.color}30` }}>
                  {roadmap.emoji}
                </div>
                <div className="cr-card-header-right">
                  <span
                    className="cr-difficulty-badge"
                    style={{ background: roadmap.difficultyColor + '18', color: roadmap.difficultyColor, border: `1px solid ${roadmap.difficultyColor}33` }}
                  >
                    {roadmap.difficulty}
                  </span>
                </div>
              </div>

              {/* Card Title */}
              <h3 className="cr-card-title">{roadmap.title}</h3>
              <p className="cr-card-desc">{roadmap.description.slice(0, 90)}...</p>

              {/* Metadata */}
              <div className="cr-card-meta">
                <div className="cr-meta-item">
                  <span className="cr-meta-icon">⏱️</span>
                  <span>{roadmap.duration}</span>
                </div>
                <div className="cr-meta-item">
                  <span className="cr-meta-icon">📚</span>
                  <span>{roadmap.skills} Skills</span>
                </div>
                <div className="cr-meta-item">
                  <span className="cr-meta-icon">⚡</span>
                  <span>{roadmap.xpReward.toLocaleString()} XP</span>
                </div>
              </div>

              {/* Progress */}
              <div className="cr-card-progress-section">
                <div className="cr-progress-header">
                  <span className="cr-progress-label">Progress</span>
                  <span className="cr-progress-pct" style={{ color: roadmap.color }}>{progress}%</span>
                </div>
                <div className="cr-progress-bar-track">
                  <motion.div
                    className="cr-progress-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${roadmap.color}, ${roadmap.color}aa)` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.06 + 0.3 }}
                  />
                </div>
                {progress > 0 && (
                  <div className="cr-xp-earned">
                    <span>⚡ {xpEarned} XP earned</span>
                  </div>
                )}
              </div>

              {/* CTA */}
              <button
                className="cr-explore-btn"
                style={{ '--btn-color': roadmap.color }}
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpen()
                }}
              >
                {progress > 0 ? '▶ Continue Roadmap' : '🗺️ Explore Roadmap'}
              </button>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ── Roadmap Detail Page ──────────────────────────────────────────
function RoadmapDetailPage({
  roadmap, user, onBack, onNodeClick,
  mentorTip, mentorVisible, onCloseMentor,
  activeStep, setActiveStep,
  getRoadmapProgress, getRoadmapXPEarned
}) {
  const progress = getRoadmapProgress(roadmap)
  const xpEarned = getRoadmapXPEarned(roadmap)
  const completedCount = roadmap.steps.filter(
    (s, i) => getStepStatus(user, s, i, roadmap.steps) === 'completed'
  ).length

  const tips = MENTOR_TIPS[roadmap.id] || DEFAULT_TIPS
  const [currentTipIdx, setCurrentTipIdx] = useState(0)

  return (
    <div className="cr-detail-page">
      {/* Back Button */}
      <motion.button
        className="cr-back-btn"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -3 }}
      >
        ← Back to Roadmaps
      </motion.button>

      {/* Hero Header */}
      <motion.div
        className="cr-detail-hero"
        style={{ '--rm-color': roadmap.color }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="cr-detail-hero-left">
          <div className="cr-detail-emoji" style={{ background: roadmap.color + '20', border: `2px solid ${roadmap.color}33` }}>
            {roadmap.emoji}
          </div>
          <div>
            <div className="cr-detail-meta-row">
              <span className="cr-detail-difficulty" style={{ background: roadmap.difficultyColor + '18', color: roadmap.difficultyColor }}>
                {roadmap.difficulty}
              </span>
              <span className="cr-detail-duration">⏱️ {roadmap.duration}</span>
            </div>
            <h1 className="cr-detail-title">{roadmap.title}</h1>
            <p className="cr-detail-description">{roadmap.description}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="cr-detail-stats">
          <div className="cr-detail-stat">
            <strong style={{ color: roadmap.color }}>{progress}%</strong>
            <span>Complete</span>
          </div>
          <div className="cr-detail-stat">
            <strong style={{ color: '#f59e0b' }}>{xpEarned.toLocaleString()}</strong>
            <span>XP Earned</span>
          </div>
          <div className="cr-detail-stat">
            <strong style={{ color: '#10b981' }}>{completedCount}/{roadmap.steps.length}</strong>
            <span>Steps Done</span>
          </div>
        </div>
      </motion.div>

      {/* Overall Progress Bar */}
      <div className="cr-detail-progress-bar-wrap">
        <div className="cr-detail-progress-track">
          <motion.div
            className="cr-detail-progress-fill"
            style={{ background: `linear-gradient(90deg, ${roadmap.color}, ${roadmap.color}88)` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
        <span style={{ color: roadmap.color, fontWeight: 800, fontSize: 13 }}>{progress}% Complete</span>
      </div>

      {/* Main Layout */}
      <div className="cr-detail-layout">
        {/* Left: Roadmap Flow */}
        <div className="cr-flow-column">
          <h2 className="cr-flow-title">🗺️ Learning Path</h2>
          <div className="cr-flow-container">
            {roadmap.steps.map((step, i) => {
              const status = getStepStatus(user, step, i, roadmap.steps)
              const pct = getCourseProgressUtil(user, step.courseId)
              const isActive = activeStep === step.id

              return (
                <React.Fragment key={step.id}>
                  <motion.div
                    className={`cr-flow-node cr-node-${status}${isActive ? ' cr-node-active' : ''}`}
                    style={{
                      borderColor: status === 'completed' ? roadmap.color
                        : status === 'current' ? '#f59e0b'
                        : status === 'available' ? roadmap.color + '66'
                        : 'var(--border)',
                      cursor: step.courseId ? 'pointer' : 'default',
                      boxShadow: isActive ? `0 0 0 3px ${roadmap.color}33` : undefined
                    }}
                    onClick={() => {
                      setActiveStep(isActive ? null : step.id)
                      if (step.courseId && status !== 'locked') handleNodeClickInternal(step)
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    whileHover={step.courseId && status !== 'locked'
                      ? { scale: 1.02, boxShadow: `0 8px 24px ${roadmap.color}22` }
                      : {}
                    }
                  >
                    {/* Step Number */}
                    <div
                      className="cr-node-number"
                      style={{
                        background: status === 'completed' ? roadmap.color
                          : status === 'current' ? '#f59e0b'
                          : status === 'available' ? roadmap.color + '33'
                          : 'var(--border)',
                        color: (status === 'completed' || status === 'current') ? '#fff' : 'var(--text-muted)'
                      }}
                    >
                      {status === 'completed' ? '✅' : status === 'current' ? '🔥' : status === 'locked' ? '🔒' : i + 1}
                    </div>

                    {/* Step Icon */}
                    <div
                      className="cr-node-icon"
                      style={{
                        background: status === 'completed' ? roadmap.color + '18'
                          : status === 'current' ? '#fef3c7'
                          : status === 'available' ? roadmap.color + '10'
                          : 'var(--border)',
                        opacity: status === 'locked' ? 0.5 : 1
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Step Info */}
                    <div className="cr-node-info">
                      <strong className={status === 'locked' ? 'cr-node-locked-text' : ''}>{step.title}</strong>
                      <span>{step.desc}</span>
                      {pct > 0 && pct < 100 && (
                        <div className="cr-node-mini-progress">
                          <div className="cr-mini-track">
                            <div className="cr-mini-fill" style={{ width: `${pct}%`, background: '#f59e0b' }} />
                          </div>
                          <span style={{ color: '#f59e0b', fontSize: 10, fontWeight: 800 }}>{pct}%</span>
                        </div>
                      )}
                    </div>

                    {/* Action Badge */}
                    <div className="cr-node-action">
                      {status === 'completed' && <span className="cr-node-badge cr-badge-done">Done</span>}
                      {status === 'current' && <span className="cr-node-badge cr-badge-current">In Progress</span>}
                      {status === 'available' && step.courseId && <span className="cr-node-badge cr-badge-start" style={{ background: roadmap.color + '18', color: roadmap.color }}>Start →</span>}
                      {status === 'locked' && <span className="cr-node-badge cr-badge-locked">Locked</span>}
                    </div>
                  </motion.div>

                  {/* Connector */}
                  {i < roadmap.steps.length - 1 && (
                    <div
                      className="cr-flow-connector"
                      style={{
                        background: status === 'completed'
                          ? `linear-gradient(to bottom, ${roadmap.color}, ${roadmap.color}44)`
                          : 'linear-gradient(to bottom, var(--border), transparent)',
                        opacity: status === 'completed' ? 0.7 : 0.35
                      }}
                    />
                  )}
                </React.Fragment>
              )
            })}

            {/* Finish Line */}
            <motion.div
              className="cr-finish-line"
              style={{ background: `linear-gradient(135deg, ${roadmap.color}, ${roadmap.color}88)` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: roadmap.steps.length * 0.07 + 0.4, duration: 0.5 }}
            >
              🎓 {roadmap.title} — Career Ready!
            </motion.div>
          </div>
        </div>

        {/* Right: Info Panel */}
        <div className="cr-info-column">
          {/* Progress Card */}
          <motion.div
            className="cr-info-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>📊 Your Progress</h3>
            <div className="cr-progress-stats">
              {[
                { label: 'Completed', count: roadmap.steps.filter((s, i) => getStepStatus(user, s, i, roadmap.steps) === 'completed').length, color: '#10b981' },
                { label: 'In Progress', count: roadmap.steps.filter((s, i) => getStepStatus(user, s, i, roadmap.steps) === 'current').length, color: '#f59e0b' },
                { label: 'Available', count: roadmap.steps.filter((s, i) => getStepStatus(user, s, i, roadmap.steps) === 'available').length, color: roadmap.color },
                { label: 'Locked', count: roadmap.steps.filter((s, i) => getStepStatus(user, s, i, roadmap.steps) === 'locked').length, color: '#94a3b8' },
              ].map(s => (
                <div key={s.label} className="cr-progress-stat-row">
                  <span>{s.label}</span>
                  <strong style={{ color: s.color }}>{s.count}</strong>
                </div>
              ))}
            </div>
            <div className="cr-info-progress-bar">
              <div style={{ height: '100%', width: `${progress}%`, background: `linear-gradient(90deg, ${roadmap.color}, ${roadmap.color}88)`, borderRadius: 20, transition: 'width 1.5s ease' }} />
            </div>
            <p style={{ fontSize: 12, fontWeight: 700, color: roadmap.color, textAlign: 'right', marginTop: 6 }}>{progress}% Done</p>
          </motion.div>

          {/* Career Overview */}
          <motion.div
            className="cr-info-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>💼 Career Overview</h3>
            <p className="cr-career-overview-text">{roadmap.careerOverview}</p>
            <div className="cr-salary-badge">
              <span>💰</span>
              <div>
                <strong>Salary Range</strong>
                <span>{roadmap.salaryRange}</span>
              </div>
            </div>
          </motion.div>

          {/* Required Skills */}
          <motion.div
            className="cr-info-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3>🛠️ Required Skills</h3>
            <div className="cr-skills-list">
              {roadmap.requiredSkills.map(skill => (
                <span key={skill} className="cr-skill-tag" style={{ '--tag-color': roadmap.color }}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            className="cr-info-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3>🏆 Career Milestones</h3>
            <div className="cr-badges-list">
              {roadmap.badges.map((badge, i) => {
                const earned = progress >= ((i + 1) / roadmap.badges.length) * 100
                return (
                  <div key={badge} className={`cr-badge-item${earned ? ' cr-badge-earned' : ' cr-badge-locked'}`}>
                    <span className="cr-badge-icon">{badge.split(' ')[0]}</span>
                    <span className="cr-badge-label">{badge.split(' ').slice(1).join(' ')}</span>
                    {earned && <span className="cr-badge-check">✓</span>}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Tips Card */}
          <motion.div
            className="cr-info-card cr-tips-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3>💡 Pro Tips</h3>
            <ul className="cr-tips-list">
              {[
                'Ek topic ek waqt mein complete karo',
                'Rooz 30 min practice karo',
                'Projects build karo — theory se zyada seekhoge',
                'Community se doubts poocho',
                'Progress track karte raho — motivation milti hai!'
              ].map((tip, i) => (
                <li key={i}>
                  <span style={{ color: roadmap.color }}>→</span> {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Masti Sir Mentor Popup */}
      <AnimatePresence>
        {mentorVisible && mentorTip && (
          <motion.div
            className="cr-mentor-popup"
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
          >
            <button className="cr-mentor-close" onClick={onCloseMentor}><X size={14} /></button>
            <div className="cr-mentor-avatar">👨‍🏫</div>
            <div className="cr-mentor-content">
              <strong>Masti Sir</strong>
              <p>"{mentorTip}"</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tip Cycle button */}
      {!mentorVisible && (
        <motion.button
          className="cr-mentor-trigger"
          onClick={() => {
            const tips = MENTOR_TIPS[roadmap.id] || DEFAULT_TIPS
            const nextIdx = (currentTipIdx + 1) % tips.length
            setCurrentTipIdx(nextIdx)
            setMentorTip(tips[nextIdx])
            setMentorVisible(true)
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          👨‍🏫
        </motion.button>
      )}
    </div>
  )

  function handleNodeClickInternal(step) {
    if (onNodeClick) onNodeClick(step)
  }
}
