import { webfundamentalsCourse } from './webfundamentals.js'

// Helper to pull lessons from webfundamentalsCourse chapters
const wfCh = webfundamentalsCourse?.chapters || []

export const webDevelopmentCourse = {
  id: 'web-development',
  title: 'Web Development',
  description: 'Complete Full Stack Web Development Roadmap — A guided learning path that takes you from zero to Full Stack Developer. Master Web Foundations (Internet, DNS, HTTP), Frontend (HTML, CSS, JavaScript, React), Backend (Node.js, Express, REST APIs, Auth), Databases (MongoDB, PostgreSQL), Version Control, Testing, Docker, Cloud Deployment & Capstone Projects.',
  icon: '🌐',
  category: 'frontend',
  certificateName: 'Full Stack Web Development Mastery',
  topicsCount: 65,
  practiceCount: 20,
  projectsCount: 8,
  hoursEstimate: 120,
  level: 'Beginner to Full Stack Developer',
  chapters: [
    // ═══════════════════════════════════════════════════════════
    // PHASE 1: WEB FOUNDATIONS & ARCHITECTURE
    // ═══════════════════════════════════════════════════════════

    // CHAPTER 1
    {
      chapterTitle: 'Chapter 1: 🌟 Web Development Overview & Architecture',
      lessons: [
        {
          id: 'webdev-overview',
          title: 'Web Development — Course Overview',
          emoji: '🌐',
          xpReward: 50,
          badgeName: 'Web Pioneer',
          isWebDevOverview: true,
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Swagat hai Full Stack Web Development ki Mahayatra mein! 🚀\n\nAaj se tum sirf code nahi likhoge — internet par live products khade karoge!"',
            hint: '💡 Masti Sir: "Full Stack Roadmap ko step-by-step follow karo. Pehle Foundation (HTML/CSS/JS), phir Frameworks, Backend, aur aakhir mein Cloud Deployment!"',
            success: '🎉 Masti Sir: "Web Development Course Overview explore kar liya! Ab har module ko master karne ke liye tayyar ho jao!"',
            mistake: '😅 Masti Sir: "Direct React ya Docker par jump mat maarna — foundation strong hogi toh advanced concepts 10x tezi se samajh aayenge!"'
          },
          englishDef: 'Web Development is the process of designing, building, testing, and deploying websites and web applications on the Internet. It encompasses Frontend (Client-side UI), Backend (Server-side logic & APIs), Databases (Data persistence), and DevOps (Deployment & infrastructure).',
          hinglishExplain: 'Web Development ka matlab hai poori website ya web application banana jo internet par chal sake. Isme 3 main pillars hote hain:\n\n1. **Frontend (Browser):** Jo user ko screen par dikhta hai — HTML structure, CSS styling, JavaScript interactivity, React UI.\n2. **Backend (Server):** Jo background mein logic chalata hai — Node.js, Express, REST APIs, Authentication.\n3. **Database (Storage):** Jahan user ka data store hota hai — MySQL, PostgreSQL, MongoDB.\n\nDevOps aur Cloud se humari website duniya ke liye 24/7 live hoti hai!',
          storyExplain: 'Ek restaurant ki kahani se samjho:\n\n🍽️ Dining Table & Menu Card = FRONTEND (User interface jahan customer baithta hai aur order deta hai)\n👨‍🍳 Chef & Kitchen = BACKEND (Server jahan recipes/logic execute hoti hai aur khana banta hai)\n📦 Storeroom / Refrigerator = DATABASE (Jahan ingredients safely store rehte hain)\n🚚 Delivery System = DEVOPS (Jo khana customer tak pahunchata hai)\n\nFull Stack Web Developer woh hai jo restaurant ka interior design bhi jaanta hai, kitchen ka head chef bhi hai, aur pure system ko manage bhi karta hai! 🏆',
          whyNeedIt: {
            problem: 'Sirf HTML ya sirf backend seekhne se incomplete application banti hai jo production mein deploy nahi ho sakti.',
            solution: 'Full Stack Web Development complete end-to-end knowledge deta hai — tum independent software engineer bante ho.',
            benefit: 'High-paying remote jobs, freelance projects, SaaS startups, aur top tech companies mein demand!'
          },
          visualDiagram: {
            title: 'Full Stack Web Architecture Pipeline',
            nodes: [
              'Client / Browser (HTML + CSS + JS / React)',
              'HTTP/HTTPS Request',
              'Backend Server (Node.js + Express)',
              'REST API / Auth Middleware',
              'Database (PostgreSQL / MongoDB)',
              'Cloud Hosting (Vercel / Render / AWS)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How a Complete Web App Works Under the Hood',
            steps: [
              'User enters URL → DNS resolves IP address',
              'Browser requests HTML/CSS/JS bundles from CDN',
              'Frontend UI renders & calls Backend REST APIs via Fetch/Axios',
              'Backend authenticates JWT token & executes business logic',
              'Database queries data & returns JSON response',
              'Frontend dynamically updates DOM with zero page reloads'
            ]
          },
          code: `// 🌐 Full Stack Architecture In One Clean Overview
// 1. Client-Side (Frontend React/Fetch)
async function fetchUserProfile(userId) {
  const response = await fetch("https://api.codemasti.com/users/" + userId, {
    headers: { 'Authorization': 'Bearer JWT_TOKEN_HERE' }
  });
  const userData = await response.json();
  console.log('User Loaded:', userData.name);
}

// 2. Server-Side (Backend Node/Express)
// app.get('/users/:id', authMiddleware, async (req, res) => {
//   const user = await db.users.findById(req.params.id);
//   res.status(200).json(user);
// });`,
          codeBreakdown: [
            { part: 'Client-Side (Frontend)', label: 'User browser interaction, forms, UI rendering & animations', color: '#3b82f6' },
            { part: 'REST API Bridge', label: 'HTTP endpoints connecting Frontend client to Server backend', color: '#10b981' },
            { part: 'Server-Side (Backend)', label: 'Node/Express business logic, authentication & database queries', color: '#8b5cf6' },
            { part: 'Database Persistence', label: 'ACID transactions & permanent JSON/relational document storage', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backend code ya database secrets client-side JavaScript mein expose karna',
            '❌ Responsive design aur mobile screen testing miss kar dena',
            '❌ SQL Injection ya XSS protection bina raw queries run karna',
            '❌ Git version control aur feature branches use na karna'
          ],
          proTips: [
            '💡 Har module ke sath hands-on code likho — sirf video ya theory mat padho!',
            '💡 CodeMasti ke interactive playground mein code run karke instant feedback lo.',
            '💡 Har week ek practical mini-project GitHub par push karo.'
          ],
          interviewQuestions: [
            'Frontend aur Backend mein core architectural difference kya hota hai?',
            'Stateless REST API aur Stateful Session management mein kya antar hai?',
            'Relational (SQL) aur Non-Relational (NoSQL) database kab choose karna chahiye?',
            'CI/CD pipeline web development cycle ko kaise speedup karti hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Full Stack Web Development mein Frontend ka primary role kya hota hai?',
            options: [
              'Database tables create karna',
              'User Interface render karna aur user interactions handle karna',
              'Server hardware cooling manage karna',
              'Operating system kernel compile karna'
            ],
            answer: 'User Interface render karna aur user interactions handle karna',
            explanation: 'Frontend client-side UI, layouts, styles, aur user interactions ko browser mein render karta hai.'
          },
          summary: [
            'Web Development includes Frontend, Backend, Databases, APIs, DevOps & Cloud.',
            'Frontend builds the visual UI using HTML, CSS, JS, and React.',
            'Backend powers server logic with Node.js, Express, and REST APIs.',
            'Databases (PostgreSQL, MongoDB) securely store application state.',
            'DevOps & Cloud host your project for millions of users.'
          ]
        },
        {
          id: 'webdev-career-paths',
          title: 'Web Developer Career Paths & Salary Landscape',
          emoji: '💼',
          xpReward: 30,
          badgeName: 'Career Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Web Development seekhne ke baad tu chahe toh 4 alag-alag career paths par jaa sakta hai! 💰"',
            hint: '💡 Pehle Frontend ya Backend pick karo, phir Full Stack bano — sab kuch ek sath mat seekho.',
            success: '🎉 Career paths clear ho gaye! Ab decide karo — Frontend, Backend ya Full Stack?',
            mistake: '⚠️ Career path choose karne se pehle foundation (HTML/CSS/JS) strong hona zaroori hai!'
          },
          englishDef: 'Web Development offers multiple career paths: Frontend Developer, Backend Developer, Full Stack Developer, and DevOps/Cloud Engineer. Each path requires specific skills and has different salary ranges based on experience level.',
          hinglishExplain: '4 Main Career Paths:\n\n👨‍🎨 Frontend Developer: HTML, CSS, JS, React/Next.js mein expert. UI/UX banata hai. Avg Salary: ₹6-15 LPA (India) | $70-120K (US)\n\n⚙️ Backend Developer: Node.js, Express, Databases, APIs mein expert. Server logic likhta hai. Avg Salary: ₹8-18 LPA (India) | $80-140K (US)\n\n🔥 Full Stack Developer: Frontend + Backend dono mein kaam karta hai. Most demanded! Avg Salary: ₹10-25 LPA (India) | $90-160K (US)\n\n☁️ DevOps Engineer: Docker, Kubernetes, CI/CD, Cloud mein expert. Systems ko deploy aur scale karta hai. Avg Salary: ₹12-30 LPA (India) | $100-170K (US)',
          code: `// Career Path Decision Helper
const careerPaths = {
  frontend: {
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
    role: 'Build beautiful, fast user interfaces',
    demand: '⭐⭐⭐⭐ Very High'
  },
  backend: {
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Auth'],
    role: 'Build server logic, APIs, and databases',
    demand: '⭐⭐⭐⭐ Very High'
  },
  fullStack: {
    skills: ['All Frontend + Backend + Deployment'],
    role: 'End-to-end product development',
    demand: '⭐⭐⭐⭐⭐ Extremely High'
  },
  devOps: {
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/GCP', 'Linux', 'Terraform'],
    role: 'Deploy, monitor, scale infrastructure',
    demand: '⭐⭐⭐⭐⭐ Extremely High'
  }
};`,
          quiz: {
            type: 'mcq',
            question: 'Full Stack Developer kya karta hai?',
            options: [
              'Sirf Frontend (UI) banata hai',
              'Sirf Backend (Server) code likhta hai',
              'Frontend + Backend dono mein kaam karta hai',
              'Sirf Database manage karta hai'
            ],
            answer: 'Frontend + Backend dono mein kaam karta hai',
            explanation: 'Full Stack Developer frontend (UI/UX) aur backend (APIs/databases) dono handle karta hai.'
          }
        },
        {
          id: 'webdev-roadmap',
          title: 'Full Stack Learning Roadmap & Milestones',
          emoji: '🗺️',
          xpReward: 35,
          badgeName: 'Roadmap Navigator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Roadmap bina coding karna = bina compass ke jungle mein chalna! Ye raha tumhara complete blueprint! 🎯"',
            hint: '💡 Step-by-step chalo: Pehle HTML/CSS/JS → Phir React → Phir Backend Node/Express → Phir Databases → Phir DevOps!',
            success: '🔥 Shabash! Ab tumhe pata hai ki kab kya padhna hai!',
            mistake: '⚠️ Sab kuch ek hi din mein sikhne ki jaldbazi mat karo — consistency is king!'
          },
          englishDef: 'A structured Full Stack Web Development roadmap outlines sequential milestones from foundational web technologies to advanced cloud deployment and production scaling.',
          hinglishExplain: 'Roadmap tumhara step-by-step guide hai:\n\nPhase 1: Web Foundations (Internet, HTTP, DNS, Browser Architecture)\nPhase 2: Frontend Basics (HTML → CSS → JavaScript Core + DOM)\nPhase 3: Frontend Framework (React.js → Next.js → TypeScript)\nPhase 4: Backend Development (Node.js → Express → REST APIs → Auth)\nPhase 5: Databases (MongoDB → PostgreSQL)\nPhase 6: DevOps & Deployment (Git → Testing → Docker → Cloud → CI/CD)\nPhase 7: Capstone Projects (Portfolio → Blog App → E-Commerce → SaaS)',
          code: `const fullStackRoadmap = {
  phase1: { name: 'Web Foundations', topics: 'Internet, HTTP, DNS, Browser', weeks: '1-2' },
  phase2: { name: 'Frontend Basics', topics: 'HTML, CSS, JavaScript', weeks: '3-8' },
  phase3: { name: 'Frontend Frameworks', topics: 'React.js, Next.js, TypeScript', weeks: '9-14' },
  phase4: { name: 'Backend Development', topics: 'Node.js, Express, REST APIs, Auth', weeks: '15-20' },
  phase5: { name: 'Databases', topics: 'MongoDB, PostgreSQL', weeks: '21-24' },
  phase6: { name: 'DevOps & Deployment', topics: 'Git, Docker, CI/CD, Cloud', weeks: '25-28' },
  phase7: { name: 'Capstone Projects', topics: 'Portfolio, Blog, E-Commerce', weeks: '29-32' }
};

console.log("Total Duration: ~8 months (part-time, 2-3 hours/day)");`,
          quiz: {
            type: 'mcq',
            question: 'JavaScript sikhne se pehle kaunse 2 subjects clear hone chahiye?',
            options: ['HTML aur CSS', 'Docker aur Kubernetes', 'C++ aur Assembly', 'PHP aur Ruby'],
            answer: 'HTML aur CSS',
            explanation: 'HTML page structure aur CSS styling sikhne ke baad JavaScript se interactivity add ki jati hai.'
          }
        },
        {
          id: 'webdev-dev-environment',
          title: 'Development Environment Setup & Tools',
          emoji: '🛠️',
          xpReward: 30,
          badgeName: 'Setup Complete',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Coder bina VS Code ke = Chef bina kitchen ke! Pehle tools setup karo! 🔧"',
            hint: '💡 VS Code + Chrome DevTools + Terminal — ye 3 tools hamesha open rakhna!',
            success: '🎉 Development setup complete! Ab coding shuru karo!',
            mistake: '⚠️ Extension overload mat karo — sirf essential extensions install karo!'
          },
          englishDef: 'A web development environment consists of a code editor (VS Code), a web browser with developer tools (Chrome DevTools), a terminal for running commands, and Node.js as the JavaScript runtime.',
          hinglishExplain: '4 Essential Tools:\n\n1. VS Code (Code Editor): Code likhne ke liye — free, fast, aur extensions ke sath powerful.\n2. Chrome DevTools (Browser Inspector): Console, Elements, Network tab — debugging ke liye.\n3. Terminal / Command Line: npm commands, git, server start karne ke liye.\n4. Node.js + npm: JavaScript ko browser ke bahar run karne ke liye aur packages install karne ke liye.\n\nMust-Have VS Code Extensions:\n- Prettier (Auto formatting)\n- ESLint (Code quality)\n- Live Server (Auto-reload browser)\n- GitLens (Git history visualization)',
          code: `# 1. Install Node.js (includes npm)
# Download from: https://nodejs.org/
node --version    # v20.x.x
npm --version     # 10.x.x

# 2. Install VS Code
# Download from: https://code.visualstudio.com/

# 3. Create your first project
mkdir my-first-website
cd my-first-website
touch index.html style.css script.js

# 4. Open in VS Code
code .`,
          quiz: {
            type: 'mcq',
            question: 'Web development ke liye sabse popular free code editor kaunsa hai?',
            options: ['Notepad', 'Visual Studio Code', 'Microsoft Word', 'Adobe Photoshop'],
            answer: 'Visual Studio Code',
            explanation: 'VS Code free, open-source, lightweight hai aur web development ke liye industry standard code editor hai.'
          }
        }
      ]
    },

    // CHAPTER 2 — HOW THE INTERNET & WEB WORKS (wfCh[0])
    ...(wfCh[0] ? [wfCh[0]] : []),

    // CHAPTER 3 — HTTP, HTTPS & REQUEST/RESPONSE CYCLE (wfCh[1])
    ...(wfCh[1] ? [wfCh[1]] : []),

    // ═══════════════════════════════════════════════════════════
    // PHASE 2: FRONTEND DEVELOPMENT
    // ═══════════════════════════════════════════════════════════

    // CHAPTER 4 — HTML FOUNDATION
    {
      chapterTitle: 'Chapter 4: 🧱 Frontend Foundation — HTML',
      lessons: [
        {
          id: 'webdev-html-basics',
          title: 'HTML5 Structure, Tags & Elements',
          emoji: '📄',
          xpReward: 30,
          badgeName: 'HTML Builder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTML = Website ki pehli eent! Bina HTML ke browser ko kuch dikhana hi nahi aata! 🧱"',
            hint: '💡 Tags ko hamesha close karo: <h1>...</h1>. Self-closing tags: <br />, <img />.',
            success: 'Superb! HTML structure master ho gaya! 🎉',
            mistake: 'Closing tag </tag> lagana mat bhoolo!'
          },
          englishDef: 'HTML (HyperText Markup Language) is the standard markup language used to build the skeleton and document structure of web pages using elements represented by tags.',
          hinglishExplain: 'HTML website ka blueprint aur kankal (skeleton) hai. Ye tags jaise <h1>, <p>, <div>, <button>, <a> use karke page par content arrange karta hai. Browser ye structure padhta hai aur screen par display karta hai.',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meri Pehli Website</title>
</head>
<body>
  <header>
    <h1>Welcome to CodeMasti! 🚀</h1>
    <p>Full Stack Web Development seekho — bilkul free!</p>
  </header>
  <main>
    <h2>Popular Tracks</h2>
    <ul>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>React.js</li>
    </ul>
    <a href="/courses">Explore Courses →</a>
  </main>
  <footer>
    <p>© 2026 CodeMasti</p>
  </footer>
</body>
</html>`,
          quiz: {
            type: 'mcq',
            question: 'HTML mein sabse bada heading tag kaunsa hota hai?',
            options: ['<h6>', '<h1>', '<head>', '<header>'],
            answer: '<h1>',
            explanation: '<h1> tag document ki primary main heading ke liye use hota hai.'
          }
        },
        {
          id: 'webdev-html-forms-semantic',
          title: 'Forms, Inputs, Accessibility & Semantic SEO',
          emoji: '📋',
          xpReward: 30,
          badgeName: 'Semantic Pro',
          englishDef: 'HTML Forms collect user input and submit data to servers, while Semantic tags (<header>, <nav>, <main>, <article>, <section>, <footer>) give meaningful structure to search engines and screen readers.',
          hinglishExplain: 'Forms se users login, signup, ya data submit karte hain. Semantic tags search engines (Google SEO) aur screen reader accessibility ke liye bahut zaroori hote hain.',
          code: `<form action="/api/login" method="POST">
  <label for="email">Email Address:</label>
  <input type="email" id="email" name="email" required placeholder="you@example.com" />
  
  <label for="pwd">Password:</label>
  <input type="password" id="pwd" name="password" required />
  
  <button type="submit">Log In</button>
</form>`,
          quiz: {
            type: 'mcq',
            question: 'Form mein user se password lene ke liye input ka type kya hona chahiye?',
            options: ['text', 'hidden', 'password', 'secure'],
            answer: 'password',
            explanation: 'type="password" characters ko dots/asterisks mein mask karta hai.'
          }
        }
      ]
    },

    // CHAPTER 5 — CSS & STYLING
    {
      chapterTitle: 'Chapter 5: 🎨 Frontend Styling — CSS & Tailwind',
      lessons: [
        {
          id: 'webdev-css-boxmodel',
          title: 'CSS Selectors, Box Model & Typography',
          emoji: '🎨',
          xpReward: 30,
          badgeName: 'CSS Stylist',
          englishDef: 'CSS (Cascading Style Sheets) controls visual appearance, colors, layouts, fonts, and responsiveness of web pages. The CSS Box Model consists of Content, Padding, Border, and Margin.',
          hinglishExplain: 'CSS se HTML structure sundar banta hai. Box Model samajhna sabse important hai: Content -> Padding (andar ki jagah) -> Border (kinara) -> Margin (bahar ki jagah).',
          code: `.card {
  width: 320px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  margin: 16px auto;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}`,
          quiz: {
            type: 'mcq',
            question: 'Box model mein border aur content ke beech ka space kya kehlata hai?',
            options: ['Margin', 'Padding', 'Outline', 'Gutter'],
            answer: 'Padding',
            explanation: 'Padding element ke content aur border ke andar ka space hota hai.'
          }
        },
        {
          id: 'webdev-css-flexbox-grid',
          title: 'Modern Layouts: Flexbox, CSS Grid & Responsive UI',
          emoji: '📐',
          xpReward: 35,
          badgeName: 'Layout Master',
          englishDef: 'Flexbox is a 1D layout model for alignment and distribution of space, while CSS Grid is a 2D layout model for complex rows and columns.',
          hinglishExplain: 'Flexbox se items ko row ya column mein easily center aur align karte hain. CSS Grid se pure page ka 2D grid structure banta hai.',
          code: `/* 1D Navigation Row with Flexbox */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 2D Responsive Card Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}`,
          quiz: {
            type: 'mcq',
            question: 'Flex container ke andar items ko horizontal center karne ke liye kya use hota hai?',
            options: ['align-items: center', 'justify-content: center', 'text-align: center', 'float: center'],
            answer: 'justify-content: center',
            explanation: 'Default row direction mein justify-content main-axis (horizontal) alignment control karta hai.'
          }
        }
      ]
    },

    // CHAPTER 6 — JAVASCRIPT CORE
    {
      chapterTitle: 'Chapter 6: ⚡ Frontend Logic — JavaScript & DOM',
      lessons: [
        {
          id: 'webdev-js-fundamentals',
          title: 'JavaScript Core: Variables, Functions & ES6+',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'JS Ninja',
          englishDef: 'JavaScript is the dynamic programming language that powers client-side interactivity, computations, data manipulation, and modern web applications.',
          hinglishExplain: 'JavaScript website ka dimag (brain) hai. Isse button clicks par actions hote hain, dynamic calculations hoti hain, aur server se live data fetch hota hai.',
          code: `// ES6+ Modern JavaScript
const calculateTotal = (cartItems, discount = 0) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  return subtotal - (subtotal * discount);
};

const items = [
  { id: 1, name: 'Web Dev Course', price: 999, qty: 1 },
  { id: 2, name: 'React Cheatsheet', price: 199, qty: 2 }
];

console.log('Final Bill:', calculateTotal(items, 0.1));`,
          quiz: {
            type: 'mcq',
            question: 'Kaunsa variable declaration block-scoped aur re-assignable hota hai?',
            options: ['var', 'let', 'const', 'global'],
            answer: 'let',
            explanation: 'let block-scoped hota hai aur iski value update/reassign ki ja sakti hai.'
          }
        },
        {
          id: 'webdev-js-dom-async',
          title: 'DOM Manipulation, Events & Async/Await API Fetching',
          emoji: '🔄',
          xpReward: 40,
          badgeName: 'Async Wizard',
          englishDef: 'The Document Object Model (DOM) is an object-oriented representation of the web page. Async/Await and Fetch API handle asynchronous network requests.',
          hinglishExplain: 'JS se DOM elements select karke HTML badal sakte hain. fetch() aur async/await se server se background mein bina page reload kiye data laya jata hai.',
          code: `const btn = document.querySelector('#load-btn');
const output = document.querySelector('#output');

btn.addEventListener('click', async () => {
  try {
    output.innerText = 'Loading live data...';
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    output.innerHTML = '<h3>' + data.title + '</h3><p>' + data.body + '</p>';
  } catch (err) {
    output.innerText = 'Error fetching data!';
  }
});`,
          quiz: {
            type: 'mcq',
            question: 'Async function ke andar Promise resolve hone ka wait karne ke liye kya use hota hai?',
            options: ['wait', 'await', 'pause', 'hold'],
            answer: 'await',
            explanation: 'await keyword Promise resolve hone tak execution pause karta hai cleaner readable code ke sath.'
          }
        }
      ]
    },

    // CHAPTER 7 — BROWSER RENDERING ENGINE & EVENT LOOP (wfCh[2])
    ...(wfCh[2] ? [wfCh[2]] : []),

    // CHAPTER 8 — CLIENT-SIDE STORAGE & STATE MANAGEMENT (wfCh[3])
    ...(wfCh[3] ? [wfCh[3]] : []),

    // CHAPTER 9 — FRONTEND FRAMEWORKS
    {
      chapterTitle: 'Chapter 9: ⚛️ Frontend Frameworks & Tools (React, Next.js, Angular, TS)',
      lessons: [
        {
          id: 'webdev-frameworks-overview',
          title: 'Modern Frontend Ecosystem: React, Next.js, Angular & TypeScript',
          emoji: '⚛️',
          xpReward: 40,
          badgeName: 'Framework Architect',
          englishDef: 'Modern web applications use component-based frameworks (React.js, Angular), full-stack meta-frameworks (Next.js with SSR/SSG), and statically typed TypeScript for maintainability and scalability.',
          hinglishExplain: 'Single Page Applications (SPAs) banane ke liye React aur Angular use hote hain jahan page reload nahi hota. Next.js Server-Side Rendering (SSR) aur SEO deta hai, aur TypeScript bugs ko compile-time par pakadta hai.',
          code: `// React Functional Component with State
import React, { useState } from 'react';

export const CourseBadge = ({ courseTitle }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="badge-card">
      <h3>{courseTitle}</h3>
      <button onClick={() => setCompleted(!completed)}>
        {completed ? '✅ Completed' : '⭕ In Progress'}
      </button>
    </div>
  );
};`,
          quiz: {
            type: 'mcq',
            question: 'Next.js ka sabse bada advantage standard client-side React ke mukable kya hai?',
            options: [
              'Server-Side Rendering (SSR) & better SEO',
              'HTML use nahi karna padta',
              'CSS ki zaroorat khatam ho jati hai',
              'Browser mein JavaScript run nahi hoti'
            ],
            answer: 'Server-Side Rendering (SSR) & better SEO',
            explanation: 'Next.js server par pre-render karta hai jisse initial page load super fast hota hai aur Google SEO top-class rehta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 3: BACKEND DEVELOPMENT
    // ═══════════════════════════════════════════════════════════

    // CHAPTER 10 — NODE.JS & EXPRESS.JS
    {
      chapterTitle: 'Chapter 10: 🟢 Backend Development: Node.js & Express.js',
      lessons: [
        {
          id: 'webdev-backend-node-express',
          title: 'Node.js Runtime, Event Loop & Express Server Setup',
          emoji: '🟢',
          xpReward: 40,
          badgeName: 'Backend Engineer',
          englishDef: 'Node.js is an asynchronous event-driven JavaScript runtime built on Chrome\'s V8 engine. Express.js is a minimal and flexible Node.js web application framework providing robust server routing and middleware.',
          hinglishExplain: 'Node.js se JavaScript ko browser ke bahar server machine par run karte hain. Express framework se routes, APIs aur backend servers easily bante hain.',
          code: `const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'Online', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});`,
          quiz: {
            type: 'mcq',
            question: 'Express.js mein incoming JSON request body parse karne ke liye kaunsa middleware lagta hai?',
            options: ['express.json()', 'express.body()', 'express.parse()', 'express.xml()'],
            answer: 'express.json()',
            explanation: 'express.json() built-in middleware hai jo incoming JSON payloads parse karta hai.'
          }
        }
      ]
    },

    // CHAPTER 11 — REST APIS & CLIENT-SERVER ARCHITECTURE
    {
      chapterTitle: 'Chapter 11: 🔌 REST APIs & Client-Server Architecture',
      lessons: [
        {
          id: 'webdev-rest-apis',
          title: 'REST Architecture, HTTP Methods & CRUD Endpoints',
          emoji: '🔌',
          xpReward: 35,
          badgeName: 'API Master',
          englishDef: 'REST (Representational State Transfer) is a stateless architectural style for building distributed web APIs using standard HTTP methods (GET, POST, PUT, PATCH, DELETE) and status codes (200, 201, 400, 404, 500).',
          hinglishExplain: 'REST APIs Frontend aur Backend ke beech ka communication bridge hai. GET se data padhte hain, POST se naya banate hain, PUT/PATCH se update karte hain aur DELETE se hatate hain.',
          code: `// RESTful CRUD API Endpoints in Express
app.get('/api/courses', getAllCourses);         // READ All (200)
app.post('/api/courses', createCourse);         // CREATE New (201)
app.get('/api/courses/:id', getCourseById);     // READ One (200 / 404)
app.put('/api/courses/:id', updateCourse);      // UPDATE (200)
app.delete('/api/courses/:id', deleteCourse);   // DELETE (200 / 204)`,
          quiz: {
            type: 'mcq',
            question: 'Naya resource successfully create hone par standard HTTP Status Code kya hota hai?',
            options: ['200 OK', '201 Created', '404 Not Found', '500 Internal Error'],
            answer: '201 Created',
            explanation: 'HTTP 201 Created status code indicate karta hai ki request successful rahi aur naya resource create ho gaya.'
          }
        },
        ...(wfCh[5]?.lessons || [])
      ]
    },

    // CHAPTER 12 — AUTHENTICATION & SECURITY
    {
      chapterTitle: 'Chapter 12: 🔐 Authentication, JWT & Authorization',
      lessons: [
        {
          id: 'webdev-auth-jwt',
          title: 'User Auth: JWT Tokens, Password Hashing & Protected Routes',
          emoji: '🔐',
          xpReward: 40,
          badgeName: 'Security Guard',
          englishDef: 'Authentication verifies user identity (via Bcrypt password hashing & JWT tokens), while Authorization determines user permissions (Role-Based Access Control).',
          hinglishExplain: 'Passwords ko kabhi plain text mein nahi rakhte, bcrypt se hash karte hain. Login hone ke baad JSON Web Token (JWT) generate hota hai jisse user protected APIs access karta hai.',
          code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Password Verification & Token Generation
async function loginUser(email, password, userRecord) {
  const isMatch = await bcrypt.compare(password, userRecord.hashedPassword);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { userId: userRecord.id, role: userRecord.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  return token;
}`,
          quiz: {
            type: 'mcq',
            question: 'Database mein passwords ko safely store karne ke liye kya use karte hain?',
            options: ['Base64 Encoding', 'Bcrypt / Argon2 Hashing with Salt', 'Plain text', 'CSS variable'],
            answer: 'Bcrypt / Argon2 Hashing with Salt',
            explanation: 'One-way cryptographic hashing (jaise Bcrypt) se password securely hash hota hai jise reverse decrypt nahi kiya ja sakta.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 4: DATABASES
    // ═══════════════════════════════════════════════════════════

    // CHAPTER 13 — DATABASES
    {
      chapterTitle: 'Chapter 13: 🗄️ Databases: MySQL, PostgreSQL & MongoDB',
      lessons: [
        {
          id: 'webdev-databases-sql-nosql',
          title: 'Relational SQL vs NoSQL: Schema Design & Queries',
          emoji: '🗄️',
          xpReward: 40,
          badgeName: 'Data Architect',
          englishDef: 'Relational databases (MySQL, PostgreSQL) store structured data in tables with ACID guarantees and foreign keys. Document databases (MongoDB) store flexible JSON-like documents.',
          hinglishExplain: 'Financial transactions, users aur orders ke liye SQL (Postgres/MySQL) best hai. Fast flexible dynamic catalogs aur content ke liye MongoDB NoSQL use hota hai.',
          code: `// SQL Query (PostgreSQL / MySQL)
// SELECT u.name, o.total, o.created_at 
// FROM users u 
// JOIN orders o ON u.id = o.user_id 
// WHERE o.status = 'COMPLETED';

// NoSQL Mongoose Query (MongoDB)
// const completedOrders = await Order.find({ status: 'COMPLETED' })
//   .populate('user', 'name email')
//   .sort({ createdAt: -1 });`,
          quiz: {
            type: 'mcq',
            question: 'MongoDB mein data kis format mein store hota hai?',
            options: ['Tables and Columns', 'BSON / JSON Documents', 'CSV Files', 'XML Nodes'],
            answer: 'BSON / JSON Documents',
            explanation: 'MongoDB document-oriented database hai jo flexible BSON (Binary JSON) format use karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════
    // PHASE 5: TOOLS & DEPLOYMENT
    // ═══════════════════════════════════════════════════════════

    // CHAPTER 14 — GIT & GITHUB
    {
      chapterTitle: 'Chapter 14: 🐙 Version Control: Git & GitHub',
      lessons: [
        {
          id: 'webdev-git-workflow',
          title: 'Git Branches, Commits, Pull Requests & Team Collaboration',
          emoji: '🐙',
          xpReward: 30,
          badgeName: 'Git Pro',
          englishDef: 'Git is a distributed version control system for tracking code changes. GitHub is a cloud platform for remote hosting, code reviews, and CI/CD automation.',
          hinglishExplain: 'Git se code ka history manage hota hai. Branches banakar bina main code tode naye features develop kiye jaate hain, aur Pull Request se code review hota hai.',
          code: `# Standard Git Feature Branch Workflow
git checkout -b feature/auth-system
git add .
git commit -m "feat: implement JWT auth middleware"
git push origin feature/auth-system`,
          quiz: {
            type: 'mcq',
            question: 'Nayi branch create karke turant uspe switch karne ki Git command kya hai?',
            options: ['git branch new', 'git checkout -b branch-name', 'git commit -m', 'git merge'],
            answer: 'git checkout -b branch-name',
            explanation: 'git checkout -b nayi branch create karta hai aur automatically uspe switch karta hai.'
          }
        }
      ]
    },

    // CHAPTER 15 — TESTING & QA
    {
      chapterTitle: 'Chapter 15: 🧪 Testing & Quality Assurance',
      lessons: [
        {
          id: 'webdev-testing-strategy',
          title: 'Unit Testing, Integration Testing & End-to-End (Jest/Cypress)',
          emoji: '🧪',
          xpReward: 35,
          badgeName: 'Test Sentinel',
          englishDef: 'Automated testing ensures software reliability through Unit tests (individual functions), Integration tests (API endpoints), and E2E tests (real browser workflows).',
          hinglishExplain: 'Production me bugs rokne ke liye automatic tests likhe jaate hain. Jest se unit tests aur Cypress/Playwright se complete user journeys test hoti hain.',
          code: `// Jest Unit Test Example
describe('Auth Validation', () => {
  test('validates correct email format', () => {
    expect(isValidEmail('test@codemasti.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });
});`,
          quiz: {
            type: 'mcq',
            question: 'Single function ya isolated component ko test karne wale test ko kya kehte hain?',
            options: ['Unit Test', 'Stress Test', 'Smoke Test', 'End-to-End Test'],
            answer: 'Unit Test',
            explanation: 'Unit test code ke smallest testable part (unit) ko independently test karta hai.'
          }
        }
      ]
    },

    // CHAPTER 16 — WEB SECURITY & BEST PRACTICES
    {
      chapterTitle: 'Chapter 16: 🛡️ Web Security & Best Practices',
      lessons: [
        {
          id: 'webdev-security-defense',
          title: 'OWASP Top 10: XSS, CSRF, SQL Injection & CORS Defense',
          emoji: '🛡️',
          xpReward: 40,
          badgeName: 'Cyber Defender',
          englishDef: 'Web Security protects applications from common vulnerabilities like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), SQL Injection, and data breaches.',
          hinglishExplain: 'Website ko hackers aur attacks se bachane ke liye parameterized queries (SQLi protection), CSP headers (XSS defense), aur strict CORS policies zaroori hain.',
          code: `// Express Security Middleware Suite
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

app.use(helmet()); // Sets secure HTTP headers
app.use(cors({ origin: 'https://codemasti.com' })); // Restricted CORS
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })); // Rate limiter`,
          quiz: {
            type: 'mcq',
            question: 'Kaunsa attack malicious JavaScript code ko doosre user ke browser mein inject karta hai?',
            options: ['SQL Injection', 'XSS (Cross-Site Scripting)', 'DDoS', 'Man-In-The-Middle'],
            answer: 'XSS (Cross-Site Scripting)',
            explanation: 'XSS attack mein attacker untrusted input ke zariye malicious scripts run karta hai.'
          }
        },
        ...(wfCh[4]?.lessons || [])
      ]
    },

    // CHAPTER 17 — PERFORMANCE OPTIMIZATION
    {
      chapterTitle: 'Chapter 17: 🚀 Web Performance & Core Web Vitals',
      lessons: [
        {
          id: 'webdev-performance-optimization',
          title: 'Core Web Vitals, Lazy Loading, Caching & Bundle Optimization',
          emoji: '🚀',
          xpReward: 35,
          badgeName: 'Speed Demon',
          englishDef: 'Web performance optimization focuses on fast load times, minimal bundle sizes (code splitting, tree-shaking), browser caching, CDN delivery, and Google Core Web Vitals (LCP, INP, CLS).',
          hinglishExplain: 'Fast website = Happy users & top SEO! Code splitting, image compression (WebP), lazy loading, aur Redis caching se loading time seconds se milliseconds par aa jata hai.',
          code: `// React Dynamic Import & Lazy Loading
import React, { lazy, Suspense } from 'react';

const HeavyDashboard = lazy(() => import('./HeavyDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <HeavyDashboard />
    </Suspense>
  );
}`,
          quiz: {
            type: 'mcq',
            question: 'React mein unused code ko bundle se remove karne ki process ko kya kehte hain?',
            options: ['Tree Shaking', 'Code Breaking', 'Branch Cutting', 'Heap Pruning'],
            answer: 'Tree Shaking',
            explanation: 'Modern bundlers (Vite/Webpack) tree-shaking use karke dead code ko production bundle se hata dete hain.'
          }
        }
      ]
    },

    // CHAPTER 18 — DEVOPS & DOCKER
    {
      chapterTitle: 'Chapter 18: 🐳 DevOps, Docker & CI/CD Pipelines',
      lessons: [
        {
          id: 'webdev-devops-docker',
          title: 'Containerization with Docker, Compose & CI/CD Automation',
          emoji: '🐳',
          xpReward: 40,
          badgeName: 'Docker Captain',
          englishDef: 'Docker packages application code, runtime, system tools, and libraries into lightweight, reproducible containers that run identically on development machines and cloud servers.',
          hinglishExplain: '"Mere computer pe chal raha tha par server pe fat gaya!" — is problem ko Docker khatam kar deta hai. Code, Node version aur dependencies ek container box mein band ho jate hain.',
          code: `# Production Dockerfile for Node.js Web App
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["node", "src/server.js"]`,
          quiz: {
            type: 'mcq',
            question: 'Docker container build karne ke liye kaunsi instruction file use hoti hai?',
            options: ['package.json', 'Dockerfile', 'docker.config', 'Makefile'],
            answer: 'Dockerfile',
            explanation: 'Dockerfile text file hoti hai jisme container image build karne ke step-by-step instructions hote hain.'
          }
        }
      ]
    },

    // CHAPTER 19 — PRODUCTION DEPLOYMENT & EDGE
    {
      chapterTitle: 'Chapter 19: ☁️ Web Hosting, DNS Architecture & Cloud Edge',
      lessons: [
        {
          id: 'webdev-deployment-cloud',
          title: 'Deploying to Vercel, Render, AWS, Custom Domains & SSL',
          emoji: '☁️',
          xpReward: 45,
          badgeName: 'Cloud Architect',
          englishDef: 'Production deployment involves publishing web applications to cloud platforms (Vercel for Frontend, Render/AWS for Backend & DBs), configuring custom domains, HTTPS SSL certificates, and live monitoring.',
          hinglishExplain: 'Localhost se nikal kar apni website ko duniya ke liye live karna! Git push se automatic Vercel/Render deployments, free SSL certificates, aur environment variables setup seekho.',
          code: `// Production Environment Variables Config (.env)
PORT=5000
NODE_ENV=production
DATABASE_URL=postgresql://user:secret@db.render.com/prod
JWT_SECRET=super_secure_production_key_9874
FRONTEND_URL=https://my-app.vercel.app`,
          quiz: {
            type: 'mcq',
            question: 'Production server par secret API keys aur database credentials kahan store kiye jaate hain?',
            options: ['Public GitHub repository mein', 'Environment Variables (process.env)', 'HTML meta tags mein', 'CSS stylesheets mein'],
            answer: 'Environment Variables (process.env)',
            explanation: 'Environment variables server par securely store hote hain aur public code mein commit nahi hote.'
          }
        },
        ...(wfCh[6]?.lessons || [])
      ]
    },

    // CHAPTER 20 — FULL STACK CAPSTONE PROJECTS & ARCHITECTURE
    {
      chapterTitle: 'Chapter 20: 🏆 Full Stack Capstone Projects & FAANG Architecture',
      lessons: [
        {
          id: 'webdev-capstone-projects',
          title: 'Full Stack Capstone Projects: Architecture, Plan & Build',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'Full Stack Creator',
          englishDef: 'Capstone projects integrate all full stack skills — React frontend, Express API backend, MongoDB/PostgreSQL database, Authentication, and live Cloud Deployment to build portfolio-ready production applications.',
          hinglishExplain: 'Real-world projects banao: 1) E-Commerce Store with Payments, 2) Real-Time Chat Application, 3) SaaS Developer Platform. Ye projects tumhare resume aur job interviews ko 100x strong banate hain!',
          code: `// Capstone Project Full Stack Integration Checklist
const projectRoadmap = {
  frontend: 'React + Tailwind + Lucide Icons + Responsive State',
  backend: 'Node.js + Express + REST Endpoints + Error Handlers',
  database: 'PostgreSQL / MongoDB with Indexes & Relationships',
  security: 'JWT Auth + Bcrypt + Helmet + Input Validation',
  deployment: 'Frontend on Vercel + Backend on Render + Live Custom Domain'
};

console.log('Project Ready for Resume Showcase! 🚀');`,
          quiz: {
            type: 'mcq',
            question: 'Job interview mein portfolio project present karte waqt sabse important kya hota hai?',
            options: [
              'Sirf UI animations dikhana',
              'Architecture, Problem solved, Tech stack choices aur Live working demo explain karna',
              'Line by line 10,000 lines code padhna',
              'Project ko localhost par hi rakhna'
            ],
            answer: 'Architecture, Problem solved, Tech stack choices aur Live working demo explain karna',
            explanation: 'Interviewers system design, problem solving decisions, aur live working deployment dekhna pasand karte hain.'
          }
        },
        ...(wfCh[7]?.lessons || [])
      ]
    }
  ]
}

export default webDevelopmentCourse
