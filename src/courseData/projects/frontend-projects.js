import { frontendProjectsMasteryChapters } from './frontend-projects/mastery.js'

export const frontendProjectsCourse = {
  id: 'frontend-projects',
  title: 'Frontend Projects',
  description: 'Production-ready frontend web apps, responsive UIs, React applications, TypeScript dashboards, Next.js platforms, and portfolio capstones.',
  icon: '🖥️',
  category: 'projects',
  certificateName: 'FRONTEND PROJECTS',
  topicsCount: 160,
  practiceCount: 120,
  projectsCount: 28,
  hoursEstimate: 260,
  level: 'Beginner to Capstone',
  achievements: [
    { id: 'first-project', title: 'First Project', icon: '🏆', desc: 'Shipped your first frontend project on CodeMasti', xp: 50 },
    { id: 'html-builder', title: 'HTML Builder', icon: '🏆', desc: 'Mastered semantic HTML5 markup and accessible structure', xp: 50 },
    { id: 'css-designer', title: 'CSS Designer', icon: '🏆', desc: 'Created modern layouts using Flexbox, CSS Grid & transitions', xp: 75 },
    { id: 'javascript-builder', title: 'JavaScript Builder', icon: '🏆', desc: 'Built dynamic DOM applications with persistent browser storage', xp: 100 },
    { id: 'api-explorer', title: 'API Explorer', icon: '🏆', desc: 'Handled asynchronous REST APIs with loading and error boundaries', xp: 150 },
    { id: 'responsive-developer', title: 'Responsive Developer', icon: '🏆', desc: 'Crafted mobile-first layouts with zero horizontal page overflow', xp: 150 },
    { id: 'react-builder', title: 'React Builder', icon: '🏆', desc: 'Engineered modular React applications with hooks and context', xp: 200 },
    { id: 'typescript-developer', title: 'TypeScript Developer', icon: '🏆', desc: 'Delivered strict type-safe UI components and generic contracts', xp: 300 },
    { id: 'nextjs-explorer', title: 'Next.js Explorer', icon: '🏆', desc: 'Built Server Component web applications with dynamic SEO metadata', xp: 350 },
    { id: 'debugging-detective', title: 'Debugging Detective', icon: '🏆', desc: 'Found and resolved complex state, effect, and CSS bugs in the Bug Lab', xp: 150 },
    { id: 'accessibility-champion', title: 'Accessibility Champion', icon: '🏆', desc: 'Passed WCAG AA contrast, keyboard navigation, and ARIA checks', xp: 150 },
    { id: 'performance-optimizer', title: 'Performance Optimizer', icon: '🏆', desc: 'Optimized rendering performance, asset bundles, and lazy loading', xp: 200 },
    { id: 'testing-starter', title: 'Testing Starter', icon: '🏆', desc: 'Wrote unit and component integration tests for frontend features', xp: 150 },
    { id: 'github-builder', title: 'GitHub Builder', icon: '🏆', desc: 'Published professional project repositories with rich READMEs', xp: 100 },
    { id: 'deployment-ready', title: 'Deployment Ready', icon: '🏆', desc: 'Deployed live frontend applications to cloud platforms', xp: 150 },
    { id: 'portfolio-builder', title: 'Portfolio Builder', icon: '🏆', desc: 'Created a recruiter-ready project showcase', xp: 300 },
    { id: 'frontend-capstone-master', title: 'Frontend Project Master', icon: '🏆', desc: 'Engineered a portfolio-grade frontend capstone project', xp: 1000 }
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: PORTFOLIO & THEME SWITCHER
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Project 1: Modern 10-Section Developer Portfolio & Theme Switcher',
      lessons: [
        {
          id: 'proj-portfolio-theme',
          title: 'Building a 10-Section Modern Developer Portfolio (Harry)',
          emoji: '🚀',
          xpReward: 100,
          badgeName: 'Portfolio Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Aapka portfolio aapka sabse bada resume hai! Chalo ek complete 10-section modern developer portfolio banate hain for Harry 😎"',
            hint: '🤦 Masti Sir: "Dark mode preference ko `localStorage` mein save karna aur smooth scroll navigation ko active rakhna taaki recruiter impress ho jaye!"',
            success: '🥳 Masti Sir: "Zabardast! Saare 10 sections live, interactive aur production ready hain 🔥"',
            mistake: '😅 Masti Sir: "Mobile responsive layout miss mat karna! 60% recruiters phone se check karte hain!"'
          },
          englishDef: 'A production-grade developer portfolio encompasses 10 core architectural sections: Navigation, Hero, About, Tech Stack, Featured Projects, Experience Timeline, Education, Resume Showcase, Contact Form, and Footer with persistent dark/light theme switching.',
          hinglishExplain: 'Ek complete portfolio website me 10 vital sections hote hain: Sticky Header Navigation, High-Impact Hero with CTAs, About Bio & Stats, Categorized Skills Grid, Filterable Featured Projects, Career Experience Timeline, Education, Interactive Resume Viewer, Contact Form with Validation, aur Footer.',
          funnyExample: {
            scenario: 'Recruiter lands on Harry.dev:\n1. Hero: "Harry - Frontend Developer"\n2. Projects: Live demos + GitHub links work seamlessly!\n3. Theme Switcher: Smooth dark mode toggle with LocalStorage!\n4. Result: Instant job offer in inbox! 🎉',
            punchline: 'A 10-section portfolio transforms cold applications into direct interview invitations!'
          },
          visualDiagram: {
            title: '10-Section Portfolio Architecture',
            nodes: [
              '1. Navigation (Sticky + Theme Toggle)',
              '2. Hero (Name, Role, CTA Buttons)',
              '3. About Section (Bio & Stats)',
              '4. Skills & Tech Stack Grid',
              '5. Featured Projects (Filterable)',
              '6. Experience Timeline',
              '7. Education & Certifications',
              '8. Resume Viewer & Download',
              '9. Contact Form & Socials',
              '10. Footer & Back-to-Top'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Portfolio Event & State Pipeline:',
            steps: [
              'Checks localStorage for saved theme (dark/light)',
              'IntersectionObserver updates active navigation link on scroll',
              'Projects filter dynamically re-renders grid items',
              'Contact form validates input and prevents empty submissions'
            ]
          },
          code: `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Harry — Frontend Developer Portfolio</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-border: #334155;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #22c55e;
      --primary-dark: #16a34a;
      --primary-light: rgba(34, 197, 94, 0.15);
      --accent: #38bdf8;
      --radius: 12px;
    }
    [data-theme="light"] {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --card-border: #e2e8f0;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --primary: #16a34a;
      --primary-dark: #15803d;
      --primary-light: rgba(22, 163, 74, 0.1);
      --accent: #0284c7;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text-main);
      line-height: 1.6;
      transition: background 0.3s, color 0.3s;
    }
    .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
    
    /* 1. NAVIGATION */
    .navbar {
      position: sticky; top: 0; z-index: 100;
      background: var(--card-bg);
      border-bottom: 1px solid var(--card-border);
      backdrop-filter: blur(10px);
    }
    .nav-inner {
      display: flex; justify-content: space-between; align-items: center;
      height: 70px;
    }
    .logo { font-size: 22px; font-weight: 900; color: var(--primary); text-decoration: none; }
    .logo span { color: var(--text-main); }
    .nav-links { display: flex; gap: 20px; list-style: none; align-items: center; }
    .nav-links a {
      color: var(--text-muted); text-decoration: none; font-size: 14px;
      font-weight: 600; transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--primary); }
    .theme-btn {
      background: var(--primary-light); color: var(--primary);
      border: 1px solid var(--primary); border-radius: 8px;
      padding: 6px 12px; cursor: pointer; font-weight: 700; font-size: 13px;
    }

    /* 2. HERO SECTION */
    .hero {
      padding: 90px 0 60px;
      text-align: center;
      display: flex; flex-direction: column; align-items: center;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: var(--primary-light); color: var(--primary);
      border: 1px solid var(--primary); padding: 5px 14px;
      border-radius: 999px; font-size: 13px; font-weight: 800;
      margin-bottom: 18px;
    }
    .hero h1 {
      font-size: clamp(36px, 6vw, 60px);
      font-weight: 900; line-height: 1.1; margin-bottom: 12px;
    }
    .hero h2 {
      font-size: clamp(20px, 3.5vw, 28px);
      color: var(--primary); margin-bottom: 18px; font-weight: 800;
    }
    .hero-desc {
      max-width: 650px; font-size: 17px; color: var(--text-muted);
      margin-bottom: 30px; line-height: 1.6;
    }
    .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn {
      padding: 12px 24px; border-radius: 10px; font-weight: 700;
      font-size: 14px; text-decoration: none; cursor: pointer;
      display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s;
      border: none;
    }
    .btn-primary { background: var(--primary); color: #ffffff; }
    .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }
    .btn-outline {
      background: transparent; color: var(--text-main);
      border: 1px solid var(--card-border);
    }
    .btn-outline:hover { border-color: var(--primary); color: var(--primary); }

    /* SECTION COMMON */
    section { padding: 70px 0; border-top: 1px solid var(--card-border); }
    .section-title {
      font-size: 28px; font-weight: 900; text-align: center;
      margin-bottom: 10px;
    }
    .section-sub {
      text-align: center; color: var(--text-muted);
      font-size: 15px; margin-bottom: 40px;
    }

    /* 3. ABOUT SECTION */
    .about-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px; align-items: center;
    }
    .about-card {
      background: var(--card-bg); border: 1px solid var(--card-border);
      border-radius: var(--radius); padding: 28px;
    }
    .about-stats {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
    }
    .stat-item {
      background: var(--primary-light); border: 1px solid var(--primary);
      border-radius: 10px; padding: 16px; text-align: center;
    }
    .stat-num { font-size: 26px; font-weight: 900; color: var(--primary); }
    .stat-label { font-size: 12px; color: var(--text-muted); font-weight: 600; }

    /* 4. SKILLS SECTION */
    .skills-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
    }
    .skill-card {
      background: var(--card-bg); border: 1px solid var(--card-border);
      border-radius: var(--radius); padding: 22px; transition: transform 0.2s;
    }
    .skill-card:hover { transform: translateY(-4px); border-color: var(--primary); }
    .skill-card h3 { font-size: 16px; margin-bottom: 12px; color: var(--primary); }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill-pill {
      background: var(--primary-light); color: var(--text-main);
      font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 6px;
    }

    /* 5. FEATURED PROJECTS */
    .filter-bar {
      display: flex; justify-content: center; gap: 10px;
      margin-bottom: 30px; flex-wrap: wrap;
    }
    .filter-btn {
      background: var(--card-bg); border: 1px solid var(--card-border);
      color: var(--text-muted); padding: 8px 16px; border-radius: 20px;
      font-size: 13px; font-weight: 700; cursor: pointer;
    }
    .filter-btn.active, .filter-btn:hover {
      background: var(--primary); color: #fff; border-color: var(--primary);
    }
    .projects-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
    }
    .project-card {
      background: var(--card-bg); border: 1px solid var(--card-border);
      border-radius: var(--radius); padding: 24px;
      display: flex; flex-direction: column; justify-content: space-between;
    }
    .project-card h3 { font-size: 18px; margin-bottom: 8px; }
    .project-card p { font-size: 13px; color: var(--text-muted); margin-bottom: 16px; flex: 1; }
    .project-links { display: flex; gap: 10px; margin-top: 14px; }

    /* 6. EXPERIENCE & 7. EDUCATION TIMELINE */
    .timeline {
      display: flex; flex-direction: column; gap: 18px; max-width: 800px; margin: 0 auto;
    }
    .timeline-card {
      background: var(--card-bg); border: 1px solid var(--card-border);
      border-left: 4px solid var(--primary); border-radius: var(--radius); padding: 20px;
    }
    .timeline-head {
      display: flex; justify-content: space-between; align-items: baseline;
      flex-wrap: wrap; margin-bottom: 6px;
    }
    .timeline-head h3 { font-size: 16px; font-weight: 800; }
    .timeline-date { font-size: 12px; color: var(--primary); font-weight: 700; }

    /* 8. RESUME */
    .resume-box {
      background: var(--card-bg); border: 1px solid var(--card-border);
      border-radius: var(--radius); padding: 36px; text-align: center;
      max-width: 700px; margin: 0 auto;
    }

    /* 9. CONTACT */
    .contact-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    .form-group { margin-bottom: 16px; text-align: left; }
    .form-group label { display: block; font-size: 12px; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; }
    .form-group input, .form-group textarea {
      width: 100%; padding: 12px; border-radius: 8px;
      border: 1px solid var(--card-border); background: var(--bg);
      color: var(--text-main); font-size: 14px; outline: none;
    }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--primary); }

    /* 10. FOOTER */
    footer {
      background: var(--card-bg); border-top: 1px solid var(--card-border);
      padding: 40px 0 30px; text-align: center; font-size: 13px; color: var(--text-muted);
    }
    .footer-links { display: flex; justify-content: center; gap: 20px; margin-bottom: 16px; }
    .footer-links a { color: var(--text-muted); text-decoration: none; }
    .footer-links a:hover { color: var(--primary); }
  </style>
</head>
<body>

  <!-- 1. NAVIGATION -->
  <nav class="navbar">
    <div class="container nav-inner">
      <a href="#hero" class="logo">Harry<span>.dev</span></a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button class="theme-btn" id="themeToggle" onclick="toggleTheme()">☀️ / 🌙</button></li>
      </ul>
    </div>
  </nav>

  <!-- 2. HERO SECTION -->
  <header id="hero" class="hero container">
    <div class="hero-badge">🟢 Available for Full-Time Roles</div>
    <h1>Harry</h1>
    <h2>Frontend Developer</h2>
    <p class="hero-desc">
      I build modern, responsive and interactive web experiences using React, JavaScript and modern frontend technologies.
    </p>
    <div class="hero-actions">
      <a href="#projects" class="btn btn-primary">💼 View Featured Projects</a>
      <a href="#contact" class="btn btn-outline">📬 Contact Me</a>
      <a href="#resume" class="btn btn-outline">📄 View Resume</a>
    </div>
  </header>

  <!-- 3. ABOUT SECTION -->
  <section id="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="section-sub">Passionate about clean code, user-centric interfaces, and web performance</p>
      <div class="about-grid">
        <div class="about-card">
          <h3 style="margin-bottom: 12px; color: var(--primary);">Crafting Digital Experiences</h3>
          <p style="color: var(--text-muted); font-size: 14px; line-height: 1.7;">
            Hey, I'm Harry! I specialize in converting complex system workflows into effortless, visually stunning web applications. My focus is writing clean, scalable component architectures with 100% accessible and responsive designs.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat-item"><div class="stat-num">3+</div><div class="stat-label">Years Experience</div></div>
          <div class="stat-item"><div class="stat-num">24+</div><div class="stat-label">Projects Built</div></div>
          <div class="stat-item"><div class="stat-num">99%</div><div class="stat-label">Client CSAT</div></div>
          <div class="stat-item"><div class="stat-num">100%</div><div class="stat-label">Responsive UIs</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. SKILLS / TECH STACK -->
  <section id="skills">
    <div class="container">
      <h2 class="section-title">Skills & Tech Stack</h2>
      <p class="section-sub">Technologies and modern tools I use to bring ideas to life</p>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>⚡ Core Frontend</h3>
          <div class="skill-tags">
            <span class="skill-pill">React</span><span class="skill-pill">Next.js</span>
            <span class="skill-pill">JavaScript (ES6+)</span><span class="skill-pill">TypeScript</span>
            <span class="skill-pill">HTML5</span><span class="skill-pill">CSS3</span>
          </div>
        </div>
        <div class="skill-card">
          <h3>🎨 UI & Styling</h3>
          <div class="skill-tags">
            <span class="skill-pill">TailwindCSS</span><span class="skill-pill">CSS Grid & Flexbox</span>
            <span class="skill-pill">Framer Motion</span><span class="skill-pill">Responsive Design</span>
          </div>
        </div>
        <div class="skill-card">
          <h3>🛠️ Tools & DevOps</h3>
          <div class="skill-tags">
            <span class="skill-pill">Git / GitHub</span><span class="skill-pill">Vite</span>
            <span class="skill-pill">Webpack</span><span class="skill-pill">Vercel & Netlify</span>
          </div>
        </div>
        <div class="skill-card">
          <h3>🚀 Best Practices</h3>
          <div class="skill-tags">
            <span class="skill-pill">REST APIs</span><span class="skill-pill">Web Accessibility (a11y)</span>
            <span class="skill-pill">Performance Optimization</span><span class="skill-pill">SEO</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. FEATURED PROJECTS -->
  <section id="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-sub">A showcase of production-ready web applications and client projects</p>
      <div class="filter-bar">
        <button class="filter-btn active" onclick="filterProjects('all')">All</button>
        <button class="filter-btn" onclick="filterProjects('react')">React & Next.js</button>
        <button class="filter-btn" onclick="filterProjects('js')">Vanilla JavaScript</button>
      </div>
      <div class="projects-grid" id="projectsGrid">
        <div class="project-card" data-cat="react">
          <div>
            <span class="skill-pill" style="margin-bottom: 8px; display: inline-block;">React · TypeScript</span>
            <h3>E-Commerce Analytics Dashboard</h3>
            <p>Real-time analytics portal with dynamic data charts, sales metrics, and dark mode customization.</p>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary" style="padding: 6px 12px; font-size: 12px;">Live Demo ↗</a>
            <a href="#" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">GitHub ↗</a>
          </div>
        </div>
        <div class="project-card" data-cat="react">
          <div>
            <span class="skill-pill" style="margin-bottom: 8px; display: inline-block;">Next.js · Tailwind</span>
            <h3>SaaS Task & Agile Kanban Studio</h3>
            <p>Full drag-and-drop workflow platform with team collaboration, task priorities, and local caching.</p>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary" style="padding: 6px 12px; font-size: 12px;">Live Demo ↗</a>
            <a href="#" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">GitHub ↗</a>
          </div>
        </div>
        <div class="project-card" data-cat="js">
          <div>
            <span class="skill-pill" style="margin-bottom: 8px; display: inline-block;">JavaScript · CSS3</span>
            <h3>Glassmorphic Interactive Portfolio</h3>
            <p>Personal brand website with dynamic project filters, theme persistence, and accessible contact form.</p>
          </div>
          <div class="project-links">
            <a href="#" class="btn btn-primary" style="padding: 6px 12px; font-size: 12px;">Live Demo ↗</a>
            <a href="#" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;">GitHub ↗</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. EXPERIENCE -->
  <section id="experience">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      <p class="section-sub">My professional career and engineering journey</p>
      <div class="timeline">
        <div class="timeline-card">
          <div class="timeline-head">
            <h3>Frontend Developer — TechPulse Solutions</h3>
            <span class="timeline-date">2023 — Present</span>
          </div>
          <p style="font-size: 13px; color: var(--text-muted);">
            Architected responsive React web applications, reduced bundle size by 35%, and led UI design system migration.
          </p>
        </div>
        <div class="timeline-card">
          <div class="timeline-head">
            <h3>Junior Web Developer — CodeCraft Studio</h3>
            <span class="timeline-date">2021 — 2023</span>
          </div>
          <p style="font-size: 13px; color: var(--text-muted);">
            Built interactive client websites, integrated RESTful APIs, and maintained cross-browser testing suites.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. EDUCATION -->
  <section id="education">
    <div class="container">
      <h2 class="section-title">Education & Certifications</h2>
      <p class="section-sub">Academic foundation and specialized engineering credentials</p>
      <div class="timeline">
        <div class="timeline-card">
          <div class="timeline-head">
            <h3>Bachelor of Technology in Computer Science</h3>
            <span class="timeline-date">2018 — 2022</span>
          </div>
          <p style="font-size: 13px; color: var(--text-muted);">
            Graduated with First Class Honors. Core coursework: Data Structures, Algorithms, Web Engineering.
          </p>
        </div>
        <div class="timeline-card">
          <div class="timeline-head">
            <h3>Certified React & Modern JavaScript Developer</h3>
            <span class="timeline-date">2022</span>
          </div>
          <p style="font-size: 13px; color: var(--text-muted);">
            Verified certification in advanced React hooks, state management, and modern web application development.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. RESUME -->
  <section id="resume">
    <div class="container">
      <h2 class="section-title">Resume Showcase</h2>
      <p class="section-sub">Get a detailed breakdown of my background, skills, and achievements</p>
      <div class="resume-box">
        <h3 style="font-size: 20px; margin-bottom: 8px;">Harry — Frontend Developer Resume</h3>
        <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 24px;">
          Includes comprehensive project breakdown, technical capabilities, and verified professional references.
        </p>
        <button class="btn btn-primary" onclick="alert('Downloading Harry Resume PDF... 📄')">
          📥 Download Resume PDF
        </button>
      </div>
    </div>
  </section>

  <!-- 9. CONTACT SECTION -->
  <section id="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-sub">Have a project in mind or looking for a developer? Let's talk!</p>
      <div class="contact-grid">
        <div class="about-card">
          <h3 style="margin-bottom: 12px; color: var(--primary);">Let's Connect</h3>
          <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 20px;">
            I'm always open to discussing new opportunities, frontend architecture, and exciting web projects.
          </p>
          <p style="font-size: 13px; margin-bottom: 8px;"><strong>📧 Email:</strong> harry@frontend.dev</p>
          <p style="font-size: 13px; margin-bottom: 8px;"><strong>📍 Location:</strong> Remote / Global</p>
          <p style="font-size: 13px;"><strong>💼 Status:</strong> Ready for new projects</p>
        </div>
        <form class="about-card" onsubmit="event.preventDefault(); alert('Thank you, message sent successfully! 🚀');">
          <div class="form-group">
            <label>YOUR NAME</label>
            <input type="text" required placeholder="Kabir Sharma" />
          </div>
          <div class="form-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" required placeholder="kabir@example.com" />
          </div>
          <div class="form-group">
            <label>MESSAGE</label>
            <textarea rows="4" required placeholder="Let's build something awesome together!"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- 10. FOOTER -->
  <footer>
    <div class="container">
      <div class="footer-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <p>© 2026 Harry. Designed & built with modern web technologies.</p>
    </div>
  </footer>

  <script>
    // Theme Toggle with LocalStorage
    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('harry_theme', next);
    }
    const saved = localStorage.getItem('harry_theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    // Project Filtering
    function filterProjects(category) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
      document.querySelectorAll('.project-card').forEach(card => {
        if (category === 'all' || card.dataset.cat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>`,
          codeBreakdown: [
            { part: '<nav class="navbar">', label: 'Sticky Navigation with Theme Toggle and links', color: '#3b82f6' },
            { part: '<header id="hero">', label: 'High-Impact Hero with Harry developer profile and CTAs', color: '#10b981' },
            { part: '<section id="skills">', label: 'Categorized Tech Stack with modern badges', color: '#f59e0b' },
            { part: '<section id="projects">', label: 'Interactive filterable Featured Projects grid', color: '#8b5cf6' },
            { part: '<section id="contact">', label: 'Validated Contact Form with direct message actions', color: '#ec4899' }
          ],
          commonMistakes: [
            '❌ Hardcoded static projects HTML (use dynamic JS arrays for easily maintainable project listings)',
            '❌ Mobile responsiveness test na karna (causes overflow on smaller smartphone screens)'
          ],
          miniChallenge: 'Dark mode CSS styles likho using CSS variables (`--bg-color`, `--text-color`).',
          quiz: {
            question: 'User ki theme preference ko browser refresh ke baad bhi preserve rakhne ke liye kya use karte hain?',
            options: ['CSS Animations', 'localStorage', 'HTML Form', 'alert()'],
            answer: 'localStorage',
            explanation: 'localStorage browser mein key-value pairs persistently store karta hai jo page refresh ya browser restart ke baad bhi retain rehta hai.'
          },
          summary: ['Portfolio aapka personal technical brand hai', 'Semantic HTML aur responsive CSS Grid essential hain', 'Theme switching LocalStorage se stateful banta hai'],
          flashcard: { q: 'Vercel ya Netlify pe portfolio deploy karne ka kya advantage hai?', a: 'GitHub repo push karte hi automatic continuous deployment (CI/CD), global CDN caching, aur free custom domain SSL milta hai.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: KANBAN TASK MANAGER
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Project 2: Interactive Drag & Drop Kanban Board',
      lessons: [
        {
          id: 'proj-kanban-board',
          title: 'HTML5 Drag and Drop & State Management',
          emoji: '📋',
          xpReward: 50,
          badgeName: 'Kanban Master',
          englishDef: 'A Kanban board application provides agile visual task tracking across columns (To Do, In Progress, Done) using the HTML5 Drag and Drop API, modal forms, and persistent browser storage.',
          hinglishExplain: 'Trello ya Jira jaisa Kanban board ek complete frontend project hai jisme cards ko drag karke ek column se doosre column mein drop kiya jata hai. Isme complex DOM events (`dragstart`, `dragover`, `drop`) aur state management seekhne ko milti hai.',
          funnyExample: {
            scenario: 'Trello Board Workflow:\n- Card: "Fix Payment Gateway Bug" 🐛\n- Drag from "To Do" Column ➡️ Drop into "Done" Column 🎉\n- LocalStorage updates instantly and confetti bursts on screen!',
            punchline: 'Kanban Board = Visual productivity powerhouse!'
          },
          visualDiagram: {
            title: 'Kanban Board Drag & Drop Pipeline',
            nodes: ['dragstart: Set card ID in DataTransfer', 'dragover: event.preventDefault() allow drop', 'drop: Append card to target column', 'Save updated board state to LocalStorage'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'HTML5 Drag & Drop Lifecycle:',
            steps: ['draggable="true" attribute enabled', 'dragstart fires -> dataTransfer.setData()', 'dragover fires on column target', 'drop event updates DOM and state array']
          },
          code: `// Kanban Board Drag & Drop Logic
const cards = document.querySelectorAll('.kanban-card');
const columns = document.querySelectorAll('.kanban-column');

// 1. Drag Start
cards.forEach(card => {
  card.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', card.id);
    card.classList.add('dragging');
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
  });
});

// 2. Column Drop Zone
columns.forEach(column => {
  column.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow drop
    column.classList.add('drag-over');
  });

  column.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });

  column.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');
    const cardId = e.dataTransfer.getData('text/plain');
    const draggedCard = document.getElementById(cardId);
    if (draggedCard) {
      column.appendChild(draggedCard);
      console.log(\`Moved card \${cardId} to column \${column.id}\`);
    }
  });
});`,
          codeBreakdown: [
            { part: 'e.dataTransfer.setData("text/plain", card.id)', label: 'Attaches dragged card identifier to transfer payload', color: '#3b82f6' },
            { part: 'e.preventDefault() on dragover', label: 'Mandatory call to allow element to become a valid drop target', color: '#10b981' },
            { part: 'column.appendChild(draggedCard)', label: 'Moves DOM node physically into target container column', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `dragover` event listener mein `e.preventDefault()` call karna bhool jana (without this, drop will NOT fire)',
            '❌ Card element pe `draggable="true"` attribute lagana bhool jana'
          ],
          miniChallenge: 'Add a delete button on each card that removes the card from DOM and updates LocalStorage.',
          quiz: {
            question: 'HTML5 Drag and Drop mein drop event ko allow karne ke liye kis event pe `e.preventDefault()` call karna zaroori hai?',
            options: ['click', 'dragstart', 'dragover', 'dragend'],
            answer: 'dragover',
            explanation: 'Default browser behavior drop allow nahi karta. `dragover` event pe `e.preventDefault()` call karne par hi browser drop accept karta hai.'
          },
          summary: ['HTML5 Drag & Drop API interactive task workflows create karta hai', 'dataTransfer drag metadata transport karta hai', 'LocalStorage persistent task data maintain karta hai'],
          flashcard: { q: '`dataTransfer.setData()` ka kya purpose hai?', a: 'Dragged element se related data (jaise id ya text) store karna taaki drop hone par retrieve kiya ja sake.' }
        }
      ]
    },
    ...frontendProjectsMasteryChapters
  ]
}

export default frontendProjectsCourse
