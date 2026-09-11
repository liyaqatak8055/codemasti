# CodeMasti 🚀

> **100% Frontend-Only Gamified Visual Coding & Computer Science Learning Platform**

CodeMasti makes learning computer science, web development, programming languages, system design, and technical interview preparation intuitive, fun, and memorable through real-life Hinglish analogies, visual DOM diagrams, interactive in-browser compilers, timed quiz arenas, career roadmaps, and specialized engineering labs.

---

## 🌟 Key Features

- **28+ Comprehensive Course Tracks**: Interactive breakdowns across HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, MySQL, PostgreSQL, Python, Java, C, C++, DSA, and System Design.
- **Specialized Engineering Labs**:
  - 🗄️ **SQL Interview Engineering Lab**: 15-level SQL query simulator, pattern recognition, and test runner.
  - 🖥️ **Frontend Engineering Lab**: 12-level stage-by-stage HTML, CSS, JS, and React workbench.
  - ⚙️ **Backend Engineering Lab**: REST APIs, database schemas, auth patterns, and microservices.
  - 🚀 **Full Stack Engineering Lab**: 14-stage production-grade full stack capstone projects.
- **Interactive Code Playgrounds**: Write, test, and run code directly in the browser with live preview and instant output.
- **Career Roadmaps**: Visual learning paths for 11+ tech careers with salary trends, milestones, and step-by-step skills.
- **Interview Prep Arena**: Curated real-world interview Q&A with deep explanations, follow-up questions, and common mistakes to avoid.
- **Quiz Arena**: Multi-level timed quizzes (MCQ, Fill in the Blank, Fix the Bug, Code Arrange, Output Prediction) with instant XP rewards.
- **Client-Side Persistence & Gamification**: XP points, daily learning streaks, achievement badges, and spaced revision reminders safely persisted in browser `localStorage`.
- **Search Engine**: Instant fuzzy search across all courses, lessons, roadmaps, and interactive labs with keyboard navigation (Cmd+K / Ctrl+K).
- **SEO & Performance**: Optimized chunk splitting, dynamic meta tags, Schema.org LD+JSON, and automated XML sitemaps (`sitemap.xml`).

---

## 🛠️ Technology Stack

- **Framework**: React 18, Vite 8
- **Routing**: React Router v7 (Pure URL-based navigation & history support)
- **Animation & Icons**: Framer Motion, Lucide React
- **Search Engine**: Fuse.js (Client-side indexed fuzzy search)
- **State & Storage**: Centralized `localStorage` storage engine (`src/utils/storage.js`)
- **Styling**: Vanilla CSS Design System with light/dark theme variables and modern glassmorphism

---

## 📁 Project Structure

```text
├── public/                  # Favicon, robots.txt, sitemap.xml, static assets
├── scripts/
│   └── generateSitemap.js   # Automated sitemap generator (545+ indexed routes)
├── src/
│   ├── components/          # Reusable UI widgets, QuizBlock, LessonWidgets, SearchOverlay, CertificateModal
│   ├── context/             # ThemeContext (light/dark mode)
│   ├── courseData/          # Static curriculum datasets (frontend, backend, database, programming, interview, projects)
│   ├── pages/               # LandingPage, CourseViewerPage, CareerRoadmapsPage, InterviewPage,
│   │                        # QuizPage, DashboardPage, ProfilePage, ContactPage, FooterPages, NotFoundPage,
│   │                        # FullStackLabPage, BackendLabPage, FrontendLabPage, SqlInterviewLabPage
│   ├── utils/               # Storage engine, SEO utilities, DOM helpers, analytics, helpers
│   ├── App.jsx              # Main application shell, topbar, routing, and modal management
│   ├── coursesData.js       # Master aggregated course catalog
│   ├── main.jsx             # React DOM root entry
│   └── styles.css           # Core styling tokens, dark mode variables, and component styles
├── .env.example             # Example environment configuration (client-side analytics)
├── vite.config.js           # Vite bundling configuration with manual chunk splitting
└── package.json             # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/codemasti.git
cd codemasti

# Install dependencies
npm install
```

### 3. Running the Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Production Build & Deployment

### Build for Production
```bash
npm run build
```

This automatically generates the sitemap (`sitemap.xml`) with 545+ URLs and produces optimized, compressed static assets in the `dist/` directory.

### Static Hosting
Because CodeMasti is 100% frontend-only, you can deploy the `dist/` folder directly to any static web hosting platform:
- **Vercel**: Run `vercel deploy` or connect your Git repository.
- **Netlify**: Drag and drop the `dist/` folder or link your Git repository.
- **GitHub Pages**: Deploy using GitHub Actions or `gh-pages`.
- **Cloudflare Pages**: Connect your repository with build command `npm run build` and output directory `dist`.

---

## 📄 License

CodeMasti is open-source educational software. Built with ❤️ for students and developers worldwide.
