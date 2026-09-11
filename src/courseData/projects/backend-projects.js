import { backendProjectsMasteryChapters } from './backend-projects/mastery.js'

export const backendProjectsCourse = {
  id: 'backend-projects',
  title: 'Backend Projects',
  description: 'Production-ready backend microservices, REST APIs, databases, authentication, caching, queues, Docker, and capstone systems.',
  icon: '⚙️',
  category: 'projects',
  certificateName: 'BACKEND PROJECTS',
  topicsCount: 150,
  practiceCount: 110,
  projectsCount: 26,
  hoursEstimate: 280,
  level: 'Beginner to Capstone',
  achievements: [
    { id: 'first-api', title: 'First API', icon: '🏆', desc: 'Shipped your first working REST API endpoint', xp: 75 },
    { id: 'crud-builder', title: 'CRUD Builder', icon: '🏆', desc: 'Implemented complete Create, Read, Update, Delete operations', xp: 75 },
    { id: 'rest-api-developer', title: 'REST API Developer', icon: '🏆', desc: 'Built a proper REST API with correct HTTP methods, status codes, and naming', xp: 75 },
    { id: 'database-builder', title: 'Database Builder', icon: '🏆', desc: 'Designed and connected a real database with proper schema', xp: 75 },
    { id: 'auth-engineer', title: 'Authentication Engineer', icon: '🏆', desc: 'Built secure auth with JWT, bcrypt, and refresh tokens', xp: 150 },
    { id: 'auth-master', title: 'Authorization Master', icon: '🏆', desc: 'Implemented RBAC with resource ownership checks', xp: 150 },
    { id: 'api-security-starter', title: 'API Security Starter', icon: '🏆', desc: 'Applied security fundamentals: validation, headers, rate limiting, env vars', xp: 150 },
    { id: 'testing-engineer', title: 'Testing Engineer', icon: '🏆', desc: 'Wrote meaningful unit and integration tests for backend APIs', xp: 150 },
    { id: 'api-optimizer', title: 'API Optimizer', icon: '🏆', desc: 'Improved API performance with caching, indexes, and query optimization', xp: 300 },
    { id: 'cache-explorer', title: 'Cache Explorer', icon: '🏆', desc: 'Implemented Redis caching with proper TTL and invalidation', xp: 300 },
    { id: 'queue-explorer', title: 'Queue Explorer', icon: '🏆', desc: 'Built async job processing with queues, retries, and DLQ', xp: 300 },
    { id: 'realtime-developer', title: 'Real-Time Developer', icon: '🏆', desc: 'Built WebSocket-powered real-time backend features', xp: 300 },
    { id: 'docker-developer', title: 'Docker Developer', icon: '🏆', desc: 'Containerized a backend API with Docker and Docker Compose', xp: 300 },
    { id: 'deployment-ready', title: 'Deployment Ready', icon: '🏆', desc: 'Deployed a backend API to a public cloud platform', xp: 300 },
    { id: 'backend-architect', title: 'Backend Architect', icon: '🏆', desc: 'Designed a complete backend system architecture before writing code', xp: 500 },
    { id: 'production-backend-builder', title: 'Production Backend Builder', icon: '🏆', desc: 'Built a backend with testing, security, monitoring, and deployment', xp: 500 },
    { id: 'backend-capstone-master', title: 'Backend Capstone Master', icon: '🏆', desc: 'Completed a portfolio-grade backend capstone project', xp: 1000 }
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: AUTHENTICATED REST API
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Project 1: Secure Cloud Notes REST API with JWT & MongoDB',
      lessons: [
        {
          id: 'proj-notes-jwt-api',
          title: 'Architecting a Multi-Tenant Notes REST API',
          emoji: '📒',
          xpReward: 50,
          badgeName: 'API Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Backend projects mein sirf endpoints banana nahi, security, validation aur clean MVC architecture dikhana zaroori hai 😎"',
            hint: '🤦 Masti Sir: "User apne hi notes dekh sake, kisi aur ke nahi! Query mein hamesha `userId: req.user.id` filter lagana!"',
            success: '🥳 Masti Sir: "Zabardast! Secure REST API successfully deployed with JWT authentication 🔥"',
            mistake: '😅 Masti Sir: "`process.env` se variables read karte time fallback zaroor rakho 😂"'
          },
          englishDef: 'A production-grade RESTful API service supporting user authentication, password hashing with bcrypt, stateless JWT session tokens, and complete CRUD operations on user-scoped resources backed by MongoDB.',
          hinglishExplain: 'Is project mein hum ek complete professional backend service banayenge. MVC (Model-View-Controller) architecture, user registration with hashed passwords, JWT login, protected notes CRUD routes, aur centralized error handling.',
          funnyExample: {
            scenario: 'Bank Locker Analogy:\n- User Login = Fingerprint scan 🔐\n- JWT Token = Locker Key 🔑\n- GET /api/notes = Sirf apna locker kholna (Doosre ka locker dekhne ki koshish ki toh 403 Forbidden! 👮)',
            punchline: 'Secure API = Har user ka apna private cloud vault!'
          },
          visualDiagram: {
            title: 'MVC Project Architecture',
            nodes: ['server.js (App Entry)', 'routes/ (authRoutes, noteRoutes)', 'controllers/ (Business Logic)', 'middleware/ (authMiddleware, errorHandler)', 'models/ (User, Note Schema)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Request Lifecycle:',
            steps: ['Incoming HTTP request passes CORS and express.json()', 'authMiddleware decodes and validates JWT header', 'Controller queries MongoDB with { userId: req.user.id }', 'Sends formatted JSON response envelope']
          },
          code: `// controllers/noteController.js
const Note = require('../models/Note');

// 1. Get All Notes (Scoped to Authenticated User)
exports.getUserNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: notes.length, data: notes });
  } catch (error) {
    next(error);
  }
};

// 2. Create Note
exports.createNote = async (req, res, next) => {
  try {
    const { title, content, tags } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const note = await Note.create({
      userId: req.user.id,
      title,
      content,
      tags: tags || []
    });

    res.status(201).json({ success: true, data: note });
  } catch (error) {
    next(error);
  }
};`,
          codeBreakdown: [
            { part: 'Note.find({ userId: req.user.id })', label: 'Multi-tenant data isolation ensuring users only see their own notes', color: '#3b82f6' },
            { part: 'res.status(201).json(...)', label: 'HTTP 201 Created status for newly provisioned resources', color: '#10b981' },
            { part: 'next(error)', label: 'Delegates runtime exceptions to centralized error middleware', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ ID based query mein `userId` filter bhool jana (allows unauthorized cross-tenant data access)',
            '❌ Missing input validation leading to null pointer exceptions in MongoDB'
          ],
          miniChallenge: 'Add a search endpoint `GET /api/notes/search?q=keyword` using MongoDB text indexing.',
          quiz: {
            question: 'Secure multi-tenant backend APIs mein data isolation kaise ensure ki jati hai?',
            options: ['Frontend pe filter karke', 'Database query mein authenticated user ka `userId` strictly filter karke', 'Sabka data ek hi array mein rakh kar', 'Tokens disable karke'],
            answer: 'Database query mein authenticated user ka `userId` strictly filter karke',
            explanation: 'Security hamesha backend database level pe enforce honi chahiye jahan queries explicitly verify karti hain ki requested resource authenticated user ka hi hai.'
          },
          summary: ['MVC pattern code readability aur maintainability badhata hai', 'JWT protected routes data security ensure karte hain', 'Centralized error handler clean error responses bhejta hai'],
          flashcard: { q: '`next(error)` call karne par Express kya karta hai?', a: 'Normal middleware execution skip karke seedha registered 4-parameter error handling middleware ko call karta hai.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: HIGH PERFORMANCE URL SHORTENER
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Project 2: High-Performance URL Shortener with Redis',
      lessons: [
        {
          id: 'proj-url-shortener-redis',
          title: 'URL Shortener with Base62 & Redis Caching',
          emoji: '🔗',
          xpReward: 50,
          badgeName: 'Systems Builder',
          englishDef: 'A high-performance URL shortener (like TinyURL or Bitly) converts long URLs into compact 6-7 character alphanumeric slugs using Base62 encoding and serves instant redirects via Redis in-memory caching.',
          hinglishExplain: 'URL Shortener ek classic System Design aur Backend project hai. Jab user lamba URL deta hai, hum ek short code (jaise `c.dev/x9K2`) generate karte hain aur Redis cache mein store karte hain taaki redirection 1 millisecond ke andar ho sake.',
          funnyExample: {
            scenario: 'QR Code vs Lamba Address:\n- Lamba URL: `https://codemasti.com/courses/web-development/frontend/css/box-model?ref=twitter&campaign=winter` (Bohot lamba! 📜)\n- Short URL: `https://cdm.st/box9` (Chhota aur fast shareable! 🚀)',
            punchline: 'URL Shortener = Long links ka super compact capsule!'
          },
          visualDiagram: {
            title: 'URL Shortener Redirect Flow',
            nodes: ['User visits /x9K2', 'Check Redis cache (O(1))', 'Hit: 302 Redirect to Target URL', 'Increment Click Counter asynchronously'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'HTTP 301 vs 302 Redirects:',
            steps: ['301 Moved Permanently (Browser caches forever — avoids analytics)', '302 Found / 307 Temporary (Browser hits server every time — accurate analytics!)']
          },
          code: `const express = require('express');
const crypto = require('crypto');
const app = express();

const urlDatabase = new Map(); // Simulating Redis Cache

// Generate random Base62 slug
function generateShortSlug(length = 6) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// 1. Create Short URL
app.post('/api/shorten', express.json(), (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: 'URL required' });

  const slug = generateShortSlug();
  urlDatabase.set(slug, { originalUrl: longUrl, clicks: 0, createdAt: new Date() });

  res.status(201).json({ shortUrl: \`https://cdm.st/\${slug}\`, slug });
});

// 2. Redirect Route
app.get('/:slug', (req, res) => {
  const entry = urlDatabase.get(req.params.slug);
  if (!entry) return res.status(404).send('Short URL not found');

  entry.clicks++; // Track analytics
  res.redirect(302, entry.originalUrl);
});`,
          codeBreakdown: [
            { part: 'generateShortSlug(6)', label: 'Base62 6-character entropy yielding 62^6 = ~56.8 billion unique combinations', color: '#3b82f6' },
            { part: 'res.redirect(302, entry.originalUrl)', label: 'HTTP 302 redirect ensures server tracks every link click', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ 301 permanent redirect use karna jab accurate click count track karna ho',
            '❌ Hash collisions handle na karna high volume database generation mein'
          ],
          miniChallenge: 'Add a rate limiter middleware preventing any single IP from shortening more than 10 links per minute.',
          quiz: {
            question: 'Base62 encoding mein kaunse characters use hote hain?',
            options: ['0-9 aur a-f', '0-9, a-z, aur A-Z (62 characters)', 'Sirf binary 0 and 1', 'Special symbols !@#$'],
            answer: '0-9, a-z, aur A-Z (62 characters)',
            explanation: 'Base62 10 digits (0-9) + 26 lowercase letters (a-z) + 26 uppercase letters (A-Z) = 62 total alphanumeric characters use karta hai.'
          },
          summary: ['URL shorteners Base62 encoding se compact URLs generate karte hain', 'Redis caching instant sub-millisecond redirection provide karti hai', '302 redirects accurate click metrics capture karne dete hain'],
          flashcard: { q: 'HTTP 301 aur 302 Redirection mein kya difference hai?', a: '301 Permanent Redirect hai jo browser mein cache ho jata hai; 302 Temporary Redirect hai jo har baar server pe aakar click analytics track karne deta hai.' }
        }
      ]
    },
    ...backendProjectsMasteryChapters
  ]
}

export default backendProjectsCourse
