// ════════════════════════════════════════════════════════════════════════════════
// 🌟 CODEMASTI NEXT.JS 15 COMPLETE MASTER CURRICULUM (12 CHAPTERS & 61 LESSONS)
// ════════════════════════════════════════════════════════════════════════════════

const makeLesson = ({ id, title, emoji = '▲', xpReward = 30, badgeName = 'Next Pro', englishDef, hinglishExplain, storyExplain = '', code = '', quiz = null, flashcard = null }) => ({
  id,
  title,
  emoji,
  xpReward,
  badgeName,
  mastirQuote: {
    start: `👨‍🏫 Masti Sir: "${title} Next.js 15 App Router ka ek powerful feature hai! Isko samajhte hi aap fullstack production web apps confidence ke sath build kar paoge! 🚀"`,
    hint: `💡 Masti Sir: "${title} par dhyan do — Next.js architecture me ye direct performance aur SEO ko boost karta hai!"`,
    success: `🎉 Masti Sir: "${title} concept successfully mastered!"`,
    mistake: `😅 Masti Sir: "Syntax aur server/client execution boundary ko hamesha dhyan me rakhein!"`
  },
  englishDef,
  hinglishExplain,
  storyExplain: storyExplain || `Real World Analogy: Jaise ek modern smart city me har transport aur building interconnected hoti hai, waise hi ${title} Next.js app ko high-speed aur optimized banata hai!`,
  funnyExample: {
    scenario: `${title} in action -> Zero latency & instant render! ⚡`,
    punchline: 'Next.js eliminates web performance bottlenecks!'
  },
  memoryTrick: `${title} Key Rule: Write clean server-first modular code.`,
  visualDiagram: {
    title: `${title} Flow Architecture`,
    nodes: ['Client Request', `Next.js Engine (${title})`, 'Server / Edge Execution', 'Instant UI Response'],
    type: 'tree'
  },
  browserBehindScene: {
    title: 'How It Executes Under the Hood:',
    steps: ['Parses route and component configuration', 'Executes server logic on Node/Edge runtime', 'Streams lightweight payload to the client']
  },
  code: code || `import React from 'react';

export default function DemoComponent() {
  return (
    <div className="card">
      <h3>⚡ ${title}</h3>
      <p>Mastered with CodeMasti Next.js 15 Masterclass.</p>
    </div>
  );
}`,
  codeBreakdown: [
    { part: 'export default function', label: 'Modular React component definition for Next.js', color: '#3b82f6' }
  ],
  commonMistakes: ['❌ Mixing server-only APIs inside client components or vice versa'],
  proTips: ['💡 Keep components as Server Components by default for optimal performance'],
  interviewQuestions: [`Explain how ${title} works in Next.js App Router.`],
  miniChallenge: `Implement a working example demonstrating ${title}.`,
  quiz: quiz || {
    type: 'mcq',
    question: `${title} ka primary objective kya hota hai?`,
    options: ['Application performance aur structure ko improve karna', 'Database ko delete karna', 'CSS styles ko disable karna', 'Server band karna'],
    answer: 'Application performance aur structure ko improve karna',
    explanation: `${title} is designed to optimize fullstack performance and developer workflow.`
  },
  summary: [`${title} is essential for modern Next.js development`, 'Improves scalability, SEO, and developer productivity', 'Integrates with React 19 and App Router'],
  flashcard: flashcard || { q: `${title} kya karta hai?`, a: `${title} Next.js application me specific routing, styling ya data handling capability provide karta hai.` }
});

export const nextjsCourse = {
  id: 'nextjs',
  title: 'Next.js',
  description: 'Master Modern Next.js 15 & App Router from scratch to production! Basics, Routing, Data Fetching, Rendering, Styling, Optimizing, Configuring, Deploying, Components, File Conventions, Built-in Functions & 6 Fullstack Real-World Projects — Masti Sir style mein!',
  icon: '▲',
  category: 'frontend',
  certificateName: 'NEXT.JS MASTER',
  topicsCount: 61,
  practiceCount: 75,
  projectsCount: 6,
  hoursEstimate: 40,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: NEXT.JS BASICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js basics',
      lessons: [
        makeLesson({
          id: 'next-intro',
          title: 'Next.js Introduction',
          emoji: '▲',
          englishDef: 'Next.js is a production-ready, open-source React framework developed by Vercel that provides full-stack capabilities including SSR, SSG, and file-system based routing.',
          hinglishExplain: 'Next.js React ka fullstack framework hai jo server-side rendering, static site generation, aur built-in routing provide karke React apps ko fast aur SEO-friendly banata hai.'
        }),
        makeLesson({
          id: 'next-getting-started',
          title: 'Getting Started with Next JS',
          emoji: '🏁',
          englishDef: 'Getting started with Next.js involves initializing a modern project structure using create-next-app CLI, configuring TypeScript, ESLint, Tailwind CSS, and Turbopack.',
          hinglishExplain: 'Next.js shuru karne ke liye `npx create-next-app@latest` command use hoti hai jisse interactive prompts me TypeScript aur Tailwind CSS configure ho jate hain.'
        }),
        makeLesson({
          id: 'next-installation',
          title: 'Next.js Installation',
          emoji: '⚙️',
          englishDef: 'Next.js installation can be automated via create-next-app or manually installed using next, react, and react-dom packages.',
          hinglishExplain: 'Next.js ko automated CLI ya manual `npm install next react react-dom` se install kiya ja sakta hai. Iske liye Node.js 18.18+ mandatory hai.'
        }),
        makeLesson({
          id: 'next-folder-structure',
          title: 'Next.js Folder Structure',
          emoji: '📁',
          englishDef: 'Next.js App Router folder structure uses nested directories under app/ to define routes, layouts, error boundaries, loading skeletons, and static assets in public/.',
          hinglishExplain: 'App Router me `app/` folder ke andar banaye gaye folders URL routes bante hain aur `public/` folder static images/assets store karta hai.'
        }),
        makeLesson({
          id: 'next-first-app',
          title: 'Next Installation and First Application',
          emoji: '🎉',
          englishDef: 'Building your first Next.js application involves creating the root layout, rendering the homepage with dynamic components, and launching the development server on localhost:3000.',
          hinglishExplain: 'Pehli Next.js application me `app/page.tsx` create karke `npm run dev` chalate hi `http://localhost:3000` par interactive UI live render hoti hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: NEXT.JS ROUTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Routing',
      lessons: [
        makeLesson({
          id: 'next-routing-overview',
          title: 'Routing in Next.js',
          emoji: '🧭',
          englishDef: 'Next.js uses a file-system based router where folders define routes and special files like page.js define publicly accessible UI.',
          hinglishExplain: 'Next.js me routing file-system par chalti hai — har folder ek URL route banta hai aur `page.tsx` uska visual view render karta hai.'
        }),
        makeLesson({
          id: 'next-nested-routes',
          title: 'Next.js Nested Routes',
          emoji: '🌳',
          englishDef: 'Nested Routes in Next.js are created by nesting folders within each other, enabling multi-segment URLs and partial rendering.',
          hinglishExplain: 'Nested folders bana kar multi-level URLs (jaise `/dashboard/analytics/reports`) bante hain jahan parent layouts state preserve rakhte hain.'
        }),
        makeLesson({
          id: 'next-pages',
          title: 'Next.js Pages',
          emoji: '📄',
          englishDef: 'A page.js file is the UI unique to a route. In App Router, pages are Server Components by default and export metadata objects for SEO.',
          hinglishExplain: '`page.tsx` route ka primary view hota hai jo by default Server Component rehta hai aur built-in `metadata` object se SEO title/description set karta hai.'
        }),
        makeLesson({
          id: 'next-layout-component',
          title: 'Next JS Layout Component',
          emoji: '📐',
          englishDef: 'A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render.',
          hinglishExplain: '`layout.tsx` Header/Footer/Sidebar jaise shared UI ko wrap karta hai aur route change hone par bina re-render hue state ko preserve rakhta hai.'
        }),
        makeLesson({
          id: 'next-navigate-pages',
          title: 'Navigate Between Pages in NextJS',
          emoji: '🚀',
          englishDef: 'Navigating between pages in Next.js is performed using client-side transitions via the Link component or programmatic useRouter navigation.',
          hinglishExplain: 'Pages ke beech switch karne ke liye client-side navigation use hoti hai jisse bina page reload kiye instant smooth transitions milte hain.'
        }),
        makeLesson({
          id: 'next-linking-pages',
          title: 'Linking between pages in Next.js',
          emoji: '🔗',
          englishDef: 'The Next.js <Link> component extends HTML <a> tags with viewport prefetching and client-side single page transitions.',
          hinglishExplain: '`<Link href="...">` component links ko viewport me aate hi background me prefetch kar leta hai jisse click karte hi 0ms me page khul jata hai.'
        }),
        makeLesson({
          id: 'next-redirects',
          title: 'Next.js Redirects',
          emoji: '🔀',
          englishDef: 'Next.js provides server-side redirects via the redirect() function and permanentRedirect() in Server Components and next.config.js.',
          hinglishExplain: '`redirect("/login")` function server par hi execution stop karke user ko instant target URL par redirect kar deta hai.'
        }),
        makeLesson({
          id: 'next-dynamic-segments',
          title: 'Next.js Dynamic Route Segments',
          emoji: '🎯',
          englishDef: 'Dynamic Route Segments ([id], [...slug], [[...slug]]) allow capturing dynamic path parameters from the URL.',
          hinglishExplain: 'Square brackets `[id]` dynamic URL parameters ko capture karte hain (jaise `/courses/[id]`) aur component me async params ke roop me milte hain.'
        }),
        makeLesson({
          id: 'next-middlewares',
          title: 'Middlewares in Next.js',
          emoji: '🛡️',
          englishDef: 'Middleware in Next.js runs on the Edge runtime before a request completes, enabling authentication checks, redirects, and header rewrites.',
          hinglishExplain: '`middleware.ts` har request ke aage security guard ki tarah kaam karta hai jo auth token check karke unauthorized access ko block ya redirect karta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: DATA FETCHING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Data Fetching',
      lessons: [
        makeLesson({
          id: 'next-data-fetching-core',
          title: 'Next.js Data Fetching',
          emoji: '⚡',
          englishDef: 'Data Fetching in Next.js App Router is built directly into React Server Components using async/await and an extended Web fetch API.',
          hinglishExplain: 'Server Components me direct `async/await` se database ya API se data fetch hota hai — `useEffect` ya client libraries ki zaroorat nahi hoti.'
        }),
        makeLesson({
          id: 'next-server-actions',
          title: 'Server Actions in Next.js',
          emoji: '🪄',
          englishDef: 'Server Actions are asynchronous functions marked with "use server" that execute securely on the server for form submissions and mutations.',
          hinglishExplain: '`"use server"` likhte hi function direct backend server par execute hota hai jisse form submit aur DB mutations bina extra API banaye ho jate hain.'
        }),
        makeLesson({
          id: 'next-ssg-ssr',
          title: 'Data fetching in Next.js Using SSG and SSR',
          emoji: '🔄',
          englishDef: 'Next.js unifies SSG (Static Site Generation) and SSR (Server-Side Rendering) via fetch cache configuration (force-cache vs no-store).',
          hinglishExplain: '`cache: "force-cache"` se SSG (Static build-time) aur `cache: "no-store"` se real-time SSR execute hota hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: RENDERING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Rendering',
      lessons: [
        makeLesson({
          id: 'next-server-components',
          title: 'Server Components in Next.js',
          emoji: '🖥️',
          englishDef: 'React Server Components (RSC) render exclusively on the server, sending zero JavaScript to the client bundle.',
          hinglishExplain: 'Server Components server par render hote hain aur browser ko 0kb extra JavaScript bhejte hain, jisse ultra-fast performance milti hai.'
        }),
        makeLesson({
          id: 'next-edge-functions-middleware',
          title: 'Edge Functions and Middleware in Next JS',
          emoji: '🌐',
          englishDef: 'Edge Functions and Middleware execute in lightweight V8 isolates distributed globally close to users for sub-millisecond response times.',
          hinglishExplain: 'Edge Runtime duniya bhar ke CDN nodes par user ke bilkul paas run hota hai jisse 10ms se bhi kam time me request process hoti hai.'
        }),
        makeLesson({
          id: 'next-dev-cache-reset',
          title: 'How to Reset Next.js Development Cache?',
          emoji: '🧹',
          englishDef: 'Resetting the Next.js development cache involves stopping the dev server and removing the .next build cache directory.',
          hinglishExplain: 'Agar dev mode me purana cache stuck ho jaye toh dev server stop karke `rm -rf .next` run karte hain taaki fresh clean build ban sake.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: STYLING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Styling',
      lessons: [
        makeLesson({
          id: 'next-add-stylesheet',
          title: 'Add Stylesheet in Next.js',
          emoji: '🎨',
          englishDef: 'Adding global stylesheets in Next.js is performed by importing CSS files directly into the root app/layout.tsx file.',
          hinglishExplain: 'Global CSS styles add karne ke liye `globals.css` ko root `app/layout.tsx` me import kiya jata hai jo poori app me available rehta hai.'
        }),
        makeLesson({
          id: 'next-css-modules-specificity',
          title: 'Controlling the specificity of CSS Modules in a Next.js App',
          emoji: '📦',
          englishDef: 'CSS Modules generate unique hashed class names (Component_class__hash) ensuring scoped styling with zero specificity conflicts.',
          hinglishExplain: 'CSS Modules `*.module.css` scoped unique class names banate hain jisse ek component ke styles doosre component se clash nahi karte.'
        }),
        makeLesson({
          id: 'next-tailwind-setup',
          title: 'Install & Setup Tailwind CSS with Next.js',
          emoji: '🌊',
          englishDef: 'Installing Tailwind CSS in Next.js configures PostCSS and tailwind.config.js for utility-first responsive styling.',
          hinglishExplain: 'Tailwind CSS utility classes se pixel-perfect responsive layouts aur dark mode bina custom CSS likhe fast banaye ja sakte hain.'
        }),
        makeLesson({
          id: 'next-css-in-js',
          title: 'CSS-in-JS Next JS',
          emoji: '💅',
          englishDef: 'CSS-in-JS libraries (Styled Components, Emotion) in App Router require client boundary wrapper components with style registry injection.',
          hinglishExplain: 'App Router me CSS-in-JS libraries use karne ke liye `"use client"` style registry wrapper configure kiya jata hai.'
        }),
        makeLesson({
          id: 'next-styling-sass',
          title: 'Next.js Styling: Sass',
          emoji: '💎',
          englishDef: 'Next.js has built-in support for Sass/SCSS using both .scss and .module.scss extensions after installing the sass package.',
          hinglishExplain: '`npm install -D sass` run karte hi Next.js `.scss` aur `.module.scss` files ko bina kisi extra Webpack config ke compile kar leta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: OPTIMIZING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Optimizing',
      lessons: [
        makeLesson({
          id: 'next-bundle-optimization',
          title: 'Next.js Bundle Optimization to improve Performance',
          emoji: '📊',
          englishDef: 'Next.js bundle optimization uses dynamic imports, code splitting, and @next/bundle-analyzer to minimize client JavaScript size.',
          hinglishExplain: 'Code splitting aur dynamic imports se sirf zaroori JavaScript browser me load hoti hai jisse initial page load time 70% improve ho jata hai.'
        }),
        makeLesson({
          id: 'next-image-optimization',
          title: 'Next JS Image Optimization',
          emoji: '🖼️',
          englishDef: 'The next/image component automatically serves images in modern WebP/AVIF formats with lazy loading and zero Cumulative Layout Shift (CLS).',
          hinglishExplain: '`<Image>` component automatically images ko device screen ke according resize aur WebP/AVIF format me convert karta hai jisse bandwidth save hoti hai.'
        }),
        makeLesson({
          id: 'next-lazy-loading',
          title: 'Lazy Loading in Next.js',
          emoji: '⏳',
          englishDef: 'Lazy loading in Next.js is implemented using next/dynamic to defer loading of heavy client components until they are required in the DOM.',
          hinglishExplain: '`next/dynamic` se heavy charts aur modals tabhi download hote hain jab user unhe view ya trigger karta hai.'
        }),
        makeLesson({
          id: 'next-google-analytics',
          title: 'How to Add Google Analytics to a Next.js Application?',
          emoji: '📈',
          englishDef: 'Google Analytics is added in Next.js using the next/third-parties library or next/script with afterInteractive strategy.',
          hinglishExplain: '`@next/third-parties/google` use karke Google Analytics bina website ki performance slow kiye background me integrate kiya jata hai.'
        }),
        makeLesson({
          id: 'next-static-file-serving',
          title: 'Next.js Static File Serving',
          emoji: '📁',
          englishDef: 'Static files like images, fonts, and robots.txt are served automatically from the public/ directory mapped to the root domain path.',
          hinglishExplain: '`public/` folder me rakhi hui images aur favicon files domain ke root path `/logo.png` par automatically accessible hoti hain.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: CONFIGURING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Configuring',
      lessons: [
        makeLesson({
          id: 'next-typescript',
          title: 'Next.js TypeScript',
          emoji: '🔷',
          englishDef: 'Next.js provides out-of-the-box TypeScript support with automatic tsconfig.json configuration and route type-checking.',
          hinglishExplain: 'Next.js me TypeScript built-in hoti hai jo build time par static type safety aur auto-completion provide karti hai.'
        }),
        makeLesson({
          id: 'next-environment-variables',
          title: 'Next.js Environment Variables',
          emoji: '🔐',
          englishDef: 'Environment variables in .env.local keep secrets on the server, while the NEXT_PUBLIC_ prefix safely exposes variables to the browser.',
          hinglishExplain: 'Secret API keys `.env.local` me server par safe rehti hain, jabki browser me access karne ke liye `NEXT_PUBLIC_` prefix lagaya jata hai.'
        }),
        makeLesson({
          id: 'next-mdx',
          title: 'MDX in Next JS',
          emoji: '📝',
          englishDef: 'MDX allows writing JSX components directly inside Markdown files, enabling interactive documentation and blog pages.',
          hinglishExplain: '`@next/mdx` se Markdown documentation ke andar direct live interactive React components render kiye ja sakte hain.'
        }),
        makeLesson({
          id: 'next-src-directory',
          title: 'Next.js src Directory',
          emoji: '📂',
          englishDef: 'Next.js supports nesting the app/ and components/ folders inside a src/ directory to separate application code from root config files.',
          hinglishExplain: '`src/` folder use karne se project ka application code root configuration files (jaise `next.config.js`) se alag aur clean rehta hai.'
        }),
        makeLesson({
          id: 'next-draft-mode',
          title: 'Draft Mode Next.js',
          emoji: '✏️',
          englishDef: 'Draft Mode bypasses static generation to fetch live draft content from headless CMS systems (Sanity, Contentful) in real time.',
          hinglishExplain: 'Draft Mode headless CMS se unpublished draft articles ko live website par bina rebuild kiye preview karne deta hai.'
        }),
        makeLesson({
          id: 'next-security-headers',
          title: 'Next.js Security Headers',
          emoji: '🛡️',
          englishDef: 'Security headers (CSP, X-Frame-Options, HSTS, X-Content-Type-Options) are configured via next.config.js headers() function.',
          hinglishExplain: '`next.config.js` me security headers laga kar XSS attacks aur clickjacking se application ko protect kiya jata hai.'
        }),
        makeLesson({
          id: 'next-unit-testing',
          title: 'Unit Testing in Next.js',
          emoji: '🧪',
          englishDef: 'Unit testing in Next.js is configured with Jest/Vitest and React Testing Library to test Server and Client components.',
          hinglishExplain: 'Jest aur React Testing Library se Next.js components aur server actions ke automated unit tests likhe jaate hain.'
        }),
        makeLesson({
          id: 'next-auth-js',
          title: 'Implement User Authentication in Next.js with Auth.js',
          emoji: '🔑',
          englishDef: 'Auth.js (NextAuth.js v5) provides secure session management, OAuth providers (Google, GitHub), and database adapters for App Router.',
          hinglishExplain: 'Auth.js se Google, GitHub login aur email credentials authentication secure HTTP-only cookies ke sath implement hota hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: DEPLOYING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Deploying',
      lessons: [
        makeLesson({
          id: 'next-deploying-app',
          title: 'Deploying your Next.js App',
          emoji: '🚢',
          englishDef: 'Deploying Next.js to Vercel provides automatic Git CI/CD, Serverless Functions, Edge Middleware, and global CDN caching.',
          hinglishExplain: 'Vercel par Git push karte hi Next.js application automatically build hokar worldwide edge network par live ho jati hai.'
        }),
        makeLesson({
          id: 'next-static-html-export',
          title: 'Next.js Static HTML Export',
          emoji: '📦',
          englishDef: 'Static HTML Export (output: "export") generates standalone HTML, CSS, and JS files suitable for hosting on AWS S3, Nginx, or GitHub Pages.',
          hinglishExplain: '`output: "export"` config se Next.js pure static HTML files generate karta hai jise kisi bhi normal web server par host kiya ja sakta hai.'
        }),
        makeLesson({
          id: 'next-cra-migration',
          title: 'Migrating from Create React App to NextJS: A Practical Guide',
          emoji: '🔄',
          englishDef: 'Migrating from CRA to Next.js involves replacing react-router with App Router, moving public assets, and migrating index.html into RootLayout.',
          hinglishExplain: 'CRA se Next.js par migrate karte waqt `react-router-dom` hata kar file-based App Router aur Server Components adopt kiye jaate hain.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: COMPONENTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Components',
      lessons: [
        makeLesson({
          id: 'next-components-overview',
          title: 'Next.js Components',
          emoji: '🧱',
          englishDef: 'Next.js components are Server Components by default with optional Client Component boundaries ("use client") for interactive UI.',
          hinglishExplain: 'Next.js me components by default server par run hote hain; interactive button ya form inputs ke liye `"use client"` boundary banti hai.'
        }),
        makeLesson({
          id: 'next-fonts',
          title: 'Fonts in Next JS',
          emoji: '🔤',
          englishDef: 'next/font automatically downloads and self-hosts Google and local fonts at build time, eliminating layout shifts and external network requests.',
          hinglishExplain: '`next/font/google` se fonts locally host ho jate hain jisse zero Cumulative Layout Shift aur fast font rendering milti hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: FILE CONVENTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js File Conventions',
      lessons: [
        makeLesson({
          id: 'next-file-conventions-core',
          title: 'File Conventions in Next.js',
          emoji: '📋',
          englishDef: 'App Router uses special file conventions with designated roles: page, layout, loading, error, not-found, and route.',
          hinglishExplain: 'Next.js App Router me har special file ka fixed role hota hai jo routing, error handling aur layouts ko control karta hai.'
        }),
        makeLesson({
          id: 'next-default-js',
          title: 'Next JS File Conventions: default.js',
          emoji: '📌',
          englishDef: 'default.js serves as a fallback view for unmatched slots in Parallel Routes during hard page navigations.',
          hinglishExplain: '`default.js` Parallel Routes (@modal, @analytics) me unmatched slots ke liye fallback UI render karta hai.'
        }),
        makeLesson({
          id: 'next-layouts-convention',
          title: 'Next.js Layouts',
          emoji: '📐',
          englishDef: 'layout.js defines a persistent shared UI wrapping child pages and sub-layouts without losing state on navigation.',
          hinglishExplain: '`layout.tsx` common navigation shells banata hai jo sub-pages change hone par re-render nahi hota.'
        }),
        makeLesson({
          id: 'next-loading-js',
          title: 'loading.js in Next JS',
          emoji: '⏳',
          englishDef: 'loading.js automatically wraps route content in a React Suspense boundary, streaming an instant skeleton loader while data fetches.',
          hinglishExplain: '`loading.tsx` background data fetch hone tak automatic skeleton loader screen par display karta hai.'
        }),
        makeLesson({
          id: 'next-not-found-js',
          title: 'Next JS File Conventions: not-found.js',
          emoji: '❌',
          englishDef: 'not-found.js renders when the notFound() function is triggered or when a requested URL does not match any route.',
          hinglishExplain: '`not-found.tsx` custom 404 page render karta hai jab `notFound()` call hota hai ya route exist nahi karta.'
        }),
        makeLesson({
          id: 'next-route-js',
          title: 'Next JS File Conventions: route.js',
          emoji: '🌐',
          englishDef: 'route.js files define custom HTTP request handlers (GET, POST, PUT, DELETE) for backend REST APIs and webhooks.',
          hinglishExplain: '`route.ts` se Next.js ke andar backend REST API endpoints banaye jaate hain bina alag se Express server lagaye.'
        }),
        makeLesson({
          id: 'next-template-js',
          title: 'template.js in Next JS',
          emoji: '🔄',
          englishDef: 'template.js creates a new instance on each navigation, re-mounting components and resetting state for entry animations.',
          hinglishExplain: '`template.tsx` har navigation par re-mount hota hai, jo page transition animations aur fresh state ke liye useful hai.'
        }),
        makeLesson({
          id: 'next-metadata-files',
          title: 'Metadata Files Next.js',
          emoji: '🏷️',
          englishDef: 'Special metadata files like favicon.ico, opengraph-image.png, robots.txt, and sitemap.xml are automatically served and evaluated.',
          hinglishExplain: '`sitemap.xml`, `robots.txt`, aur `opengraph-image.png` files Next.js me automatically discover hokar SEO tags generate karti hain.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: FUNCTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Functions',
      lessons: [
        makeLesson({
          id: 'next-fn-generate-metadata',
          title: 'Next.js Functions: generateMetadata',
          emoji: '🏷️',
          englishDef: 'generateMetadata is an async function in page or layout files used to dynamically compute and fetch SEO metadata tags (title, description, openGraph) based on route params.',
          hinglishExplain: '`generateMetadata({ params })` se database ya API se product/blog details fetch karke dynamic SEO title, description aur social share cards banaye jaate hain.'
        }),
        makeLesson({
          id: 'next-fn-generate-static-params',
          title: 'generateStaticParams in Next.js',
          emoji: '⚡',
          englishDef: 'generateStaticParams works with dynamic route segments to statically generate routes at build time (SSG) instead of on-demand at request time.',
          hinglishExplain: '`generateStaticParams()` build time par chal kar dynamic URLs (jaise top 100 blog posts) ki static HTML pehle se generate kar deta hai jisse instant CDN response milta hai.'
        }),
        makeLesson({
          id: 'next-fn-eslint',
          title: 'Next.js ESLint',
          emoji: '🔍',
          englishDef: 'Next.js provides an integrated ESLint experience with eslint-config-next, enforcing best practices for Core Web Vitals, images, and React rules.',
          hinglishExplain: '`next lint` command aur `eslint-config-next` code me common mistakes, broken imports aur performance issues ko develop karte waqt hi pakad leti hai.'
        }),
        makeLesson({
          id: 'next-fn-cookies-headers',
          title: 'cookies() and headers() in Next.js',
          emoji: '🍪',
          englishDef: 'cookies() and headers() are asynchronous server functions to read incoming HTTP request headers and manage auth cookies.',
          hinglishExplain: '`cookies()` aur `headers()` se server components aur actions me user session cookies aur request headers access kiye jaate hain.'
        }),
        makeLesson({
          id: 'next-fn-redirects',
          title: 'redirect() and permanentRedirect() in Next.js',
          emoji: '🔀',
          englishDef: 'redirect() returns a 307 temporary redirect, while permanentRedirect() issues a 308 permanent redirect for SEO canonical URLs.',
          hinglishExplain: '`redirect()` temporary redirect karta hai aur `permanentRedirect()` 308 permanent status code ke sath URL redirect karta hai.'
        }),
        makeLesson({
          id: 'next-fn-not-found',
          title: 'notFound() in Next.js',
          emoji: '🚫',
          englishDef: 'notFound() immediately terminates rendering and displays the nearest not-found.js boundary with a 404 HTTP status.',
          hinglishExplain: '`notFound()` function call karte hi rendering ruk jati hai aur 404 UI template render hota hai.'
        }),
        makeLesson({
          id: 'next-fn-revalidation',
          title: 'revalidatePath() and revalidateTag() in Next.js',
          emoji: '🔄',
          englishDef: 'revalidatePath() and revalidateTag() purge on-demand cached data for specific routes or cache tags after mutations.',
          hinglishExplain: '`revalidatePath()` ya `revalidateTag()` database update hone ke baad cached static pages ko on-demand refresh karta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: REAL-WORLD PROJECTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Next js Real-World Projects',
      lessons: [
        makeLesson({
          id: 'next-project-blog',
          title: 'Project 1: NextBlog Pro - Markdown Dev Blog with ISR',
          emoji: '📝',
          xpReward: 50,
          badgeName: 'Blog Architect',
          englishDef: 'Build a production-grade Developer Blog featuring dynamic route slugs (/blog/[slug]), category chips, search filtering, reading time calculation, and ISR caching.',
          hinglishExplain: 'NextBlog Pro ek high-speed tech blog platform hai jisme markdown articles, live search, categories aur ISR background caching integrated hai.'
        }),
        makeLesson({
          id: 'next-project-saas-dashboard',
          title: 'Project 2: SaaS Organization & Multi-Tenant Analytics Dashboard',
          emoji: '📊',
          xpReward: 50,
          badgeName: 'SaaS Builder',
          englishDef: 'Build a production-grade SaaS analytics and organization management portal with persistent sidebar layouts, metrics cards, and team member invite workflows.',
          hinglishExplain: 'SaaS Dashboard me Revenue metrics, user charts, team invitations aur role-based access control (Admin/Member) implement kiya gaya hai.'
        }),
        makeLesson({
          id: 'next-project-snapshop',
          title: 'Project 3: SnapShop E-Commerce Store with Server Actions',
          emoji: '🛒',
          xpReward: 50,
          badgeName: 'Commerce Pro',
          englishDef: 'Build a high-performance modern E-Commerce Store with product catalog grids, interactive cart drawer, coupon discounts, and Server Action checkout processing.',
          hinglishExplain: 'SnapShop me product catalog, interactive cart drawer, quantity controls, aur Server Action checkout flow shamil hai.'
        }),
        makeLesson({
          id: 'next-project-promptforge-ai',
          title: 'Project 4: PromptForge AI Hub - Next.js AI Streaming Playground',
          emoji: '🤖',
          xpReward: 50,
          badgeName: 'AI Engineer',
          englishDef: 'Build a modern generative AI Chat Playground with prompt templates, real-time token streaming animations, token counters, and markdown response rendering.',
          hinglishExplain: 'PromptForge AI me generative AI coding assistant, streaming token responses aur prompt templates develop kiye gaye hain.'
        }),
        makeLesson({
          id: 'next-project-devpulse',
          title: 'Project 5: DevPulse - Real-Time Server Health & Uptime Monitor',
          emoji: '📡',
          xpReward: 50,
          badgeName: 'Uptime Sentinel',
          englishDef: 'Build a real-time server health and API uptime monitoring dashboard with latency metrics, incident alerts, response time graphs, and operational status pills.',
          hinglishExplain: 'DevPulse me live API health monitoring, response latency telemetry (ms), aur 99.99% uptime status indicators hain.'
        }),
        makeLesson({
          id: 'next-project-flowdesk',
          title: 'Project 6: FlowDesk - Customer Support Ticketing System',
          emoji: '🎫',
          xpReward: 50,
          badgeName: 'Flow Master',
          englishDef: 'Build a production-grade Customer Support Ticketing & Helpdesk portal featuring multi-status workflow (Open, In Progress, Resolved), priority badges, and search filters.',
          hinglishExplain: 'FlowDesk me Zendesk jaisa support ticketing portal banaya gaya hai jisme priority tags, status filters aur ticket workflow available hai.'
        })
      ]
    }
  ]
};

export default nextjsCourse;
