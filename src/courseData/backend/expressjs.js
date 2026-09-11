export const expressjsCourse = {
  id: 'expressjs',
  title: 'Express.js',
  description: 'Node.js ka most popular web framework. Routes, middleware pipeline, RESTful APIs, aur error handling master karo.',
  icon: '🚂',
  category: 'backend',
  certificateName: 'EXPRESS.JS',
  topicsCount: 28,
  practiceCount: 35,
  projectsCount: 6,
  hoursEstimate: 12,
  level: 'Intermediate',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: EXPRESS BASICS & ROUTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Express.js Routing & HTTP Methods',
      lessons: [
        {
          id: 'express-intro-routes',
          title: 'Express Setup & Routing Engine',
          emoji: '🚂',
          xpReward: 35,
          badgeName: 'Express Pilot',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Node.js raw engine hai toh Express uski high-speed bullet train hai! Chalo API routes banate hain 🚂"',
            hint: '🤦 Masti Sir: "POST request se data padhna hai? `app.use(express.json())` lagana mat bhoolna, warna `req.body` undefined aayega!"',
            success: '🥳 Masti Sir: "Zabardast! REST API routes ekdum cleanly respond kar rahe hain 🔥"',
            mistake: '😅 Masti Sir: "Ek hi route handler mein 2 baar `res.json()` call karoge toh `Headers already sent` error aayega 😂"'
          },
          englishDef: "Express.js is a fast, unopinionated, minimalist web framework for Node.js. It simplifies HTTP server creation by providing robust routing, middleware chaining, and request/response utility methods.",
          hinglishExplain: 'Express.js se backend banana bohot simple ho jata hai. Aap alag alag URLs (routes) define karte ho — jaise GET se data lena, POST se naya data create karna, PUT se update karna, aur DELETE se remove karna.',
          funnyExample: {
            scenario: 'Restaurant Counter:\n- GET /menu → "Ye lo menu card 📋"\n- POST /order → "1 Butter Chicken order confirm! 🍗"\n- PUT /order/1 → "Extra butter add kar diya 🧈"\n- DELETE /order/1 → "Order cancel! ❌"',
            punchline: 'Express = Har URL ke liye ek smart receptionist counter!'
          },
          visualDiagram: {
            title: 'Express Request-Response Pipeline',
            nodes: ['Client HTTP Request', 'Express App', 'JSON Body Parser Middleware', 'Route Handler (app.get/post)', 'JSON Response sent to client'],
            type: 'flow'
          },
          code: `const express = require('express');
const app = express();

// Body Parser Middleware
app.use(express.json());

// In-memory data store
let courses = [
  { id: 1, title: 'HTML & CSS', category: 'frontend' },
  { id: 2, title: 'Node.js Backend', category: 'backend' }
];

// 1. GET All Courses
app.get('/api/courses', (req, res) => {
  res.status(200).json(courses);
});

// 2. GET Single Course by ID (Route Param)
app.get('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courses.find(c => c.id === courseId);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
});

// 3. POST New Course
app.post('/api/courses', (req, res) => {
  const { title, category } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newCourse = { id: Date.now(), title, category };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// 4. PUT Update Course
app.put('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  const idx = courses.findIndex(c => c.id === courseId);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  courses[idx] = { ...courses[idx], ...req.body };
  res.json(courses[idx]);
});

// 5. DELETE Course
app.delete('/api/courses/:id', (req, res) => {
  const courseId = parseInt(req.params.id);
  courses = courses.filter(c => c.id !== courseId);
  res.status(204).send();
});

app.listen(5005, () => console.log('Express API live on port 5005'));`,
          codeBreakdown: [
            { part: 'app.use(express.json())', label: 'Parses incoming JSON request bodies into req.body', color: '#3b82f6' },
            { part: 'req.params.id', label: 'Extracts dynamic URL parameter (:id)', color: '#10b981' },
            { part: 'res.status(201).json(...)', label: 'Sets HTTP Status 201 Created and sends payload', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `express.json()` middleware add na karna (causes `req.body` to be `undefined`)',
            '❌ Missing `return` before `res.status(404).json(...)` causing code to continue executing'
          ],
          miniChallenge: 'Ek `PATCH /api/courses/:id` route banao jo sirf specific fields update kare (partial update).',
          quiz: {
            question: 'Dynamic URL `/users/:userId` mein se `userId` ki value Express mein kaise read karte hain?',
            options: ['req.body.userId', 'req.params.userId', 'req.query.userId', 'req.headers.userId'],
            answer: 'req.params.userId',
            explanation: 'URL path parameters ko Express `req.params` object ke andar provide karta hai.'
          },
          summary: ['Express.js REST APIs build karne ka standard framework hai', 'req.params se URL segments aur req.query se query parameters milte hain', 'Status codes (200, 201, 400, 404, 500) correct API communication ke liye zaroori hain'],
          flashcard: { q: 'HTTP 200 aur 201 mein kya difference hai?', a: '200 OK standard successful response hai; 201 Created tab return karte hain jab server pe naya resource create hota hai.' }
        },
        {
          id: 'express-query-params',
          title: 'Query Parameters, Search & Filtering',
          emoji: '🔍',
          xpReward: 30,
          badgeName: 'Query Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Query params se search, filter, pagination — sab ho sakta hai! `/api/courses?category=backend&page=2` — samjhe? 😎"',
            hint: '💡 Masti Sir: "req.query se sab query params milte hain! Validate karo pehle — never trust user input!"',
            success: '🥳 Masti Sir: "Search aur filtering perfect kaam kar raha hai! Professional API jaisa lag raha hai 🔥"',
            mistake: '😅 Masti Sir: "req.query se milne wale values hamesha string hote hain! parseInt() ya Number() se convert karo!"'
          },
          englishDef: 'Query parameters appear after ? in URL and are key-value pairs separated by &. They are used for filtering, searching, sorting and pagination without creating new routes.',
          hinglishExplain: 'Query params URL mein `?key=value` format mein hote hain. Jaise `/api/courses?category=backend&level=beginner&page=1&limit=10`. Ye route path change kiye bina search aur filter karne ka tarika hai.',
          code: `const express = require('express');
const app = express();

const courses = [
  { id: 1, title: 'HTML Basics', category: 'frontend', level: 'beginner', price: 0 },
  { id: 2, title: 'React Advanced', category: 'frontend', level: 'advanced', price: 999 },
  { id: 3, title: 'Node.js Backend', category: 'backend', level: 'intermediate', price: 799 },
  { id: 4, title: 'MongoDB', category: 'database', level: 'intermediate', price: 599 },
];

// GET /api/courses?category=frontend&level=beginner&search=html&page=1&limit=2
app.get('/api/courses', (req, res) => {
  const { category, level, search, page = 1, limit = 10, sortBy = 'id' } = req.query;

  let filtered = [...courses];

  // Filter by category
  if (category) {
    filtered = filtered.filter(c => c.category === category);
  }

  // Filter by level
  if (level) {
    filtered = filtered.filter(c => c.level === level);
  }

  // Search in title
  if (search) {
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort
  filtered.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  // Pagination
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const startIdx = (pageNum - 1) * limitNum;
  const paginated = filtered.slice(startIdx, startIdx + limitNum);

  res.json({
    total: filtered.length,
    page: pageNum,
    totalPages: Math.ceil(filtered.length / limitNum),
    data: paginated
  });
});`,
          commonMistakes: [
            '❌ req.query values directly Number operations mein use karna (always strings!)',
            '❌ User ke search input ko validate/sanitize na karna (XSS aur injection risks)'
          ],
          quiz: {
            question: 'URL `/products?sort=price&order=asc` mein `req.query.order` ki value kya hogi?',
            options: ['"asc" (string)', 'asc (identifier)', 'undefined', '1 (number)'],
            answer: '"asc" (string)',
            explanation: 'req.query se milne wali saari values strings hoti hain. Number chahiye toh parseInt() ya Number() use karo.'
          },
          summary: ['req.query se URL query parameters access karo', 'Query params filtering, sorting, search, pagination ke liye use hote hain', 'Always validate aur type-cast query params before using'],
          flashcard: { q: 'Route params aur query params mein kya fark hai?', a: 'Route params `/users/:id` mein URL path ka hissa hain. Query params `?page=1` URL ke baad optional hote hain.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: MIDDLEWARE & ROUTERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Middleware Pipeline & Express.Router',
      lessons: [
        {
          id: 'express-middleware-router',
          title: 'Custom Middleware & Router Architecture',
          emoji: '🛡️',
          xpReward: 40,
          badgeName: 'Middleware Guard',
          englishDef: "Middleware functions have access to the request object (req), the response object (res), and the next middleware function (next). They can execute code, modify req/res, end cycles, or call next().",
          hinglishExplain: 'Middleware ek security guard ya checkpoint jaisa hota hai jo request aane par aur response jaane ke beech mein execute hota hai. Jaise: kya user ke paas valid token hai? Agar haan toh `next()` call karo, agar nahi toh yahin se 401 Unauthorized wapas bhej do.',
          funnyExample: {
            scenario: 'VIP Club Entry Checkpoint:\n- Request = Guest 🚶\n- Middleware 1 = Dress code check (JSON parser)\n- Middleware 2 = Entry pass / ID check (Auth Token)\n- Middleware 3 = Age verification\n- Route Handler = VIP Lounge Party! 🥳\n\nAgar kisi bhi checkpoint pe problem hui toh guard wahi se wapas bhej deta hai!',
            punchline: 'Middleware = Har request ka security checkpoint!'
          },
          code: `const express = require('express');
const app = express();

// 1. Custom Logger Middleware (Global)
const requestLogger = (req, res, next) => {
  const start = Date.now();
  console.log(\`[\${new Date().toLocaleTimeString()}] \${req.method} \${req.url}\`);
  
  res.on('finish', () => {
    console.log(\`  → \${res.statusCode} (\${Date.now() - start}ms)\`);
  });
  next();
};

// 2. Authentication Guard Middleware
const requireAuth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  // Verify token logic here...
  req.user = { id: 1, role: 'admin' }; // Attach to request
  next();
};

// 3. Role-based Access Control Middleware
const requireRole = (roles) => (req, res, next) => {
  if (!roles.includes(req.user?.role)) {
    return res.status(403).json({ error: 'Insufficient permissions' });
  }
  next();
};

app.use(express.json());
app.use(requestLogger); // Apply globally

// Protected routes
app.get('/api/profile', requireAuth, (req, res) => {
  res.json({ userId: req.user.id });
});

app.delete('/api/users/:id', requireAuth, requireRole(['admin']), (req, res) => {
  res.json({ message: 'User deleted by admin' });
});

// Centralized Error Handling Middleware (4 parameters)
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(err.statusCode || 500).json({ 
    error: err.message || 'Internal Server Error'
  });
});`,
          codeBreakdown: [
            { part: 'next()', label: 'Crucial function call to advance to the next middleware in queue', color: '#3b82f6' },
            { part: 'requireAuth', label: 'Route-level guard protecting sensitive endpoints', color: '#10b981' },
            { part: '(err, req, res, next) => {...}', label: '4-argument signature identifies error handling middleware', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Middleware ke andar `next()` call karna bhool jana (request hangs indefinitely)',
            "❌ Error handler mein 4 arguments `(err, req, res, next)` na dena (Express won't recognize it as error handler)"
          ],
          miniChallenge: 'Ek middleware banao jo check kare ki request mein `apiKey` header present hai ya nahi.',
          quiz: {
            question: 'Express mein Error Handling Middleware ke pass kitne arguments hone zaroori hain?',
            options: ['1 argument (err)', '2 arguments (req, res)', '3 arguments (req, res, next)', '4 arguments (err, req, res, next)'],
            answer: '4 arguments (err, req, res, next)',
            explanation: "Express function ki `length` check karke 4 parameters `(err, req, res, next)` hone par use error handler ke taur par identify karta hai."
          },
          summary: ['Middleware req, res, aur next function access karta hai', 'next() call karne se pipeline aage badhti hai', 'express.Router() se modular sub-route files banti hain'],
          flashcard: { q: 'Middleware mein `next()` call na karne par kya hota hai?', a: 'Request wahi atki (hang) reh jati hai aur client browser timeout ho jata hai.' }
        },
        {
          id: 'express-router-modular',
          title: 'Express.Router — Modular Route Organization',
          emoji: '🗂️',
          xpReward: 35,
          badgeName: 'Route Organizer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Saari routes ek hi app.js mein likhoge? 500 routes hoti toh kya hota? Express.Router se organize karo! 😂"',
            hint: '💡 Masti Sir: "Router ek mini Express app jaisa hai! app.use() se prefix laga ke mount karo aur code modular ho jaata hai!"',
            success: '🥳 Masti Sir: "Clean project structure! Professional backend developers yehi approach use karte hain 🔥"',
            mistake: '😅 Masti Sir: "Router file mein `app` nahi `router` use karo aur module.exports se export karo!"'
          },
          englishDef: 'express.Router() creates a mini Express application that can have its own routes and middleware. Router instances are mounted on the main app with app.use() providing URL prefixes and clean code organization.',
          hinglishExplain: 'Bade projects mein routes separate files mein organize karte hain. `express.Router()` se mini-app banao aur main app.js mein `app.use("/api/courses", coursesRouter)` se mount karo.',
          code: `// routes/courses.routes.js
const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middlewares/auth');

// GET /api/courses (public)
router.get('/', async (req, res, next) => {
  try {
    const courses = await CourseModel.find();
    res.json(courses);
  } catch (err) {
    next(err); // Pass to error handler!
  }
});

// POST /api/courses (protected)
router.post('/', requireAuth, async (req, res, next) => {
  try {
    const course = await CourseModel.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// app.js — Mount all routers
const express = require('express');
const app = express();

app.use(express.json());

// Mount Routers with URL prefixes
app.use('/api/courses', require('./routes/courses.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));

// 404 catch-all
app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }));

// Global error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;`,
          commonMistakes: [
            '❌ Router file mein `app.get()` likhna `router.get()` ki jagah',
            '❌ Error ko next(err) se pass na karna — async errors silently fail ho jaate hain'
          ],
          quiz: {
            question: 'Express.Router() se banaya router kaise main app mein mount karte hain?',
            options: ["router.mount(app, '/api/courses')", "app.use('/api/courses', router)", "app.router('/api/courses', router)", "express.use(router, '/api/courses')"],
            answer: "app.use('/api/courses', router)",
            explanation: "app.use('/prefix', router) se router ke sabhi routes given prefix ke saath accessible ho jaate hain."
          },
          summary: ['express.Router() se modular route files banti hain', 'app.use(prefix, router) se routes mount hote hain', 'next(err) se errors global handler tak pahuunchte hain'],
          flashcard: { q: 'Express Router pattern ka main benefit kya hai?', a: 'Routes ko feature-wise organize karna (auth, courses, users) — har team member independently kaam kar sakta hai bina conflicts ke.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: REQUEST VALIDATION & ERROR HANDLING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Input Validation & Robust Error Handling',
      lessons: [
        {
          id: 'express-validation-joi',
          title: 'Request Validation with Joi & Zod',
          emoji: '✅',
          xpReward: 40,
          badgeName: 'Validator Shield',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "User ka data kabhi trust mat karo! Hamesha validate karo pehle — ek bhi invalid input production database ko corrupt kar sakta hai 😱"',
            hint: '💡 Masti Sir: "Joi ya Zod use karo validation ke liye! Schema define karo ek baar, har route pe reuse karo!"',
            success: '🥳 Masti Sir: "Validation middleware ekdum clean hai! Invalid data ko door hi rok liya 🔥"',
            mistake: '😅 Masti Sir: "Client-side validation kafi nahi hai — server-side validation compulsory hai! Anyone can bypass browser validation!"'
          },
          englishDef: 'Input validation ensures that data received in API requests meets your business requirements before processing. Joi and Zod are popular schema-based validation libraries that provide declarative, reusable validation rules.',
          hinglishExplain: 'Joi ya Zod se schema define karo — jaise name required hai, email valid format mein hona chahiye, age 18+ honi chahiye. Phir middleware mein validate karo aur invalid data reject karo before it reaches your database.',
          code: `const Joi = require('joi');

// 1. Define Validation Schemas
const schemas = {
  register: Joi.object({
    name: Joi.string().min(2).max(50).trim().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*\\d)/).required()
      .messages({ 'string.pattern.base': 'Password must contain uppercase and number' }),
    age: Joi.number().integer().min(13).max(100).optional()
  }),
  
  createCourse: Joi.object({
    title: Joi.string().min(5).max(100).required(),
    price: Joi.number().min(0).max(10000).required(),
    category: Joi.string().valid('frontend', 'backend', 'database', 'programming').required()
  })
};

// 2. Reusable Validation Middleware Factory
const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  
  if (error) {
    const errors = error.details.map(d => ({ field: d.path[0], message: d.message }));
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }
  
  req.body = value; // Use sanitized/validated value
  next();
};

// 3. Apply to routes
app.post('/api/auth/register', validate(schemas.register), registerController);
app.post('/api/courses', requireAuth, validate(schemas.createCourse), createCourseController);`,
          codeBreakdown: [
            { part: 'Joi.object({...})', label: 'Schema object defining shape and rules for request body', color: '#3b82f6' },
            { part: '{ abortEarly: false }', label: 'Collect ALL validation errors, not just the first one', color: '#10b981' },
            { part: 'req.body = value', label: 'Replace raw body with sanitized, validated data', color: '#f59e0b' }
          ],
          interviewQuestions: [
            'Server-side validation kyu zaroori hai client-side ke bawajood?',
            'Joi aur Zod mein kya difference hai?'
          ],
          quiz: {
            question: 'Validation middleware mein `{ abortEarly: false }` option kyu lagaate hain?',
            options: ['Validation faster karne ke liye', 'Sabhi validation errors ek saath return karne ke liye (ek hi error nahi)', 'Extra fields remove karne ke liye', 'Async validation enable karne ke liye'],
            answer: 'Sabhi validation errors ek saath return karne ke liye (ek hi error nahi)',
            explanation: 'abortEarly: false se Joi pehli error pe nahi rukta — saari validation errors collect karke ek saath return karta hai jo better UX deta hai.'
          },
          summary: ['Always validate request body, params, aur query strings', 'Joi/Zod se declarative schemas ban jaate hain', 'Validation middleware factory pattern reusable aur clean hota hai'],
          flashcard: { q: 'Joi.string().email() kya validate karta hai?', a: 'String format email jaisi honi chahiye (user@domain.com). Invalid email format pe error throw karta hai.' }
        },
        {
          id: 'express-error-handling',
          title: 'Centralized Error Handling & Custom Error Classes',
          emoji: '🚨',
          xpReward: 40,
          badgeName: 'Error Handler',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har route mein try/catch mat likho! Centralized error handling se code DRY rahega! 💪"',
            hint: '💡 Masti Sir: "Custom Error classes se status codes aur messages clearly define karo. next(err) se pass karo aur global handler handle karega!"',
            success: '🥳 Masti Sir: "Ekdum production-grade error handling! Stack traces development mein dikhao, production mein chhupao 🔐"',
            mistake: '😅 Masti Sir: "Async route mein error aane par next(err) call na karne se unhandled rejection warning aayega!"'
          },
          englishDef: 'Centralized error handling in Express uses a single 4-parameter middleware (err, req, res, next) to catch all errors. Custom error classes with HTTP status codes make error handling consistent and maintainable.',
          hinglishExplain: 'Centralized error handler ka matlab hai ek jagah pe saare errors handle karo. Custom Error classes banao (NotFoundError, ValidationError, UnauthorizedError) jo status code aur message carry karein. Route handlers sirf next(err) call karein.',
          code: `// utils/AppError.js — Custom Error Classes
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // vs programming errors
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super(\`\${resource} not found\`, 404);
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Unauthorized access') {
    super(message, 401);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = { AppError, NotFoundError, UnauthorizedError, ValidationError };

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Route using custom errors
const { NotFoundError, UnauthorizedError } = require('./utils/AppError');

router.get('/courses/:id', async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) throw new NotFoundError('Course');
    res.json(course);
  } catch (err) {
    next(err); // Pass ANY error to global handler
  }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// middlewares/errorHandler.js — Global Handler
const globalErrorHandler = (err, req, res, next) => {
  const isDev = process.env.NODE_ENV === 'development';
  
  // Log error
  console.error('ERROR 💥:', err.stack);
  
  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({ error: 'Duplicate field value' });
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: Object.values(err.errors).map(e => e.message) });
  }
  
  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  res.status(err.statusCode || 500).json({
    error: err.isOperational ? err.message : 'Internal Server Error',
    ...(isDev && { stack: err.stack })
  });
};

module.exports = globalErrorHandler;`,
          commonMistakes: [
            '❌ Async errors ko try/catch ke baghair handle karna',
            '❌ Production mein stack trace expose karna — security risk!'
          ],
          quiz: {
            question: 'Express `isOperational` property custom errors mein kyu add karte hain?',
            options: ['Performance track karne ke liye', 'Expected/operational errors (404, 400) ko unexpected programming errors (null reference) se distinguish karne ke liye', 'Error logging disable karne ke liye', 'Status code set karne ke liye'],
            answer: 'Expected/operational errors (404, 400) ko unexpected programming errors (null reference) se distinguish karne ke liye',
            explanation: 'isOperational: true wali errors user-facing hain (safe to expose). false/undefined wali internal bugs hain jinka detail expose nahi karna chahiye.'
          },
          summary: ['Custom AppError classes consistent error format dete hain', 'Global 4-parameter error handler sab kuch handle karta hai', 'never expose stack traces in production'],
          flashcard: { q: 'Express mein unhandled async rejection kab hota hai?', a: "Jab async route handler mein error throw ho aur next(err) call na kiya gaya ho — express-async-errors package ya try/catch se solve karo." }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: FILE UPLOAD & STATIC FILES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: File Upload, Static Files & Multer',
      lessons: [
        {
          id: 'express-static-files',
          title: 'Serving Static Files with Express',
          emoji: '📂',
          xpReward: 30,
          badgeName: 'Static Server',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Express.js HTML pages, images, CSS, JS files serve kar sakta hai express.static() se! Ye hi basic web server functionality hai 😎"',
            hint: '💡 Masti Sir: "Public folder mein rakho aur express.static() se serve karo! Browser directly file access karega without any route handler!"',
            success: '🥳 Masti Sir: "Static files serve ho gaye! React build bhi Express se serve kar sakte ho production mein 🔥"',
            mistake: '😅 Masti Sir: "express.static() ko galat folder path dene par 404 aayega — `path.join(__dirname, public)` use karo!"'
          },
          englishDef: "express.static() is Express's built-in middleware for serving static files like HTML, CSS, JavaScript, images from a specified directory. Files are served directly without any route handler.",
          hinglishExplain: '`express.static("public")` middleware se Express apne aap `public/` folder ki files serve kar deta hai. Jaise `public/index.html` → `http://localhost:5005/index.html` automatically accessible hoga.',
          code: `const express = require('express');
const path = require('path');
const app = express();

// 1. Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// 2. Serve with virtual URL prefix
app.use('/static', express.static(path.join(__dirname, 'assets')));

// 3. Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  // Catch-all: serve React app for any unknown route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// API routes (before catch-all)
app.use('/api', require('./routes'));

// Send custom file
app.get('/download/certificate/:userId', requireAuth, (req, res) => {
  const filePath = path.join(__dirname, 'certificates', \`\${req.params.userId}.pdf\`);
  res.download(filePath, 'certificate.pdf'); // Forces download
});`,
          quiz: {
            question: 'Production mein React SPA (Single Page Application) Express se serve karte waqt kya zaroori hai?',
            options: ['Sirf static files serve karna', 'Wildcard route (*) se index.html return karna taaki React Router kaam kare', 'React ka code server-side execute karna', 'Nodemon disable karna'],
            answer: 'Wildcard route (*) se index.html return karna taaki React Router kaam kare',
            explanation: 'React Router client-side routing karta hai. API routes ke alawa sabhi routes pe index.html serve karo taaki React handle kar sake.'
          },
          summary: ['express.static() se static files bina route handler ke serve hote hain', 'Production mein React/Vue build Express se serve kar sakte hain', 'res.download() force download trigger karta hai'],
          flashcard: { q: '`path.join(__dirname, "public")` kyu use karte hain?', a: '__dirname current file ka absolute directory path hai. path.join se relative paths cross-platform safe hoti hain.' }
        },
        {
          id: 'express-file-upload-multer',
          title: 'File Upload with Multer',
          emoji: '📤',
          xpReward: 45,
          badgeName: 'Upload Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "File uploads — profile pictures, certificates, documents! Multer middleware se Express mein file upload simple ho jaata hai! 📤"',
            hint: '💡 Masti Sir: "File type aur size validation compulsory hai! Koi bhi .exe ya 1GB file server pe upload na kar sake!"',
            success: '🥳 Masti Sir: "File upload perfect! ab Cloud storage (AWS S3 ya Cloudinary) mein save karo production ke liye 🔥"',
            mistake: '😅 Masti Sir: "Multer ke bina multipart/form-data parse nahi hogi — `req.file` undefined rahega 😅"'
          },
          englishDef: 'Multer is a Node.js middleware for handling multipart/form-data (used for file uploads). It processes uploaded files and makes them available in req.file (single) or req.files (multiple) on the request object.',
          hinglishExplain: 'File upload ke liye form `enctype="multipart/form-data"` use karta hai. Multer isko parse karta hai. diskStorage se local disk pe save, memoryStorage se RAM mein buffer mein save karo (Cloud upload ke liye).',
          code: `const multer = require('multer');
const path = require('path');

// 1. DiskStorage — Save to local server
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder must exist!
  },
  filename: (req, file, cb) => {
    const uniqueName = \`\${req.user.id}-\${Date.now()}\${path.extname(file.originalname)}\`;
    cb(null, uniqueName);
  }
});

// 2. File Filter — Validate file types
const imageFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG, WebP images allowed!'), false);
  }
};

// 3. Configure Multer
const uploadAvatar = multer({
  storage: diskStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2MB max
});

// 4. Route with file upload
app.post('/api/profile/avatar', requireAuth, uploadAvatar.single('avatar'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const avatarUrl = \`/uploads/\${req.file.filename}\`;
  await User.findByIdAndUpdate(req.user.id, { avatar: avatarUrl });
  
  res.json({ message: 'Avatar updated!', url: avatarUrl });
});

// Multiple files upload
app.post('/api/courses/:id/materials', requireAuth, 
  uploadAvatar.array('materials', 5), // max 5 files
  (req, res) => {
    const files = req.files.map(f => f.filename);
    res.json({ uploaded: files });
  }
);`,
          commonMistakes: [
            '❌ File size aur type validation na karna — security risk!',
            '❌ `uploads/` folder git mein push karna — .gitignore mein add karo'
          ],
          quiz: {
            question: 'Multer mein `memoryStorage` ka use kab karte hain?',
            options: ['Local disk mein save karne ke liye', 'Cloud (S3/Cloudinary) pe upload se pehle file ko buffer mein rakhne ke liye', 'Performance test karne ke liye', 'File compress karne ke liye'],
            answer: 'Cloud (S3/Cloudinary) pe upload se pehle file ko buffer mein rakhne ke liye',
            explanation: 'memoryStorage file ko disk pe save kiye bina req.file.buffer mein rakhta hai. Ye buffer phir AWS S3 ya Cloudinary pe directly upload hota hai.'
          },
          summary: ['Multer multipart/form-data parsing handle karta hai', 'fileFilter se file type validate karo', 'limits.fileSize se file size restrict karo'],
          flashcard: { q: 'Production mein uploaded files kahan store karni chahiye?', a: 'Cloud storage (AWS S3, Google Cloud Storage, Cloudinary) mein — local disk pe nahi, kyunki server restart pe files delete ho sakti hain.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: DATABASE INTEGRATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: MongoDB, Mongoose & Complete CRUD',
      lessons: [
        {
          id: 'express-mongoose-crud',
          title: 'Full CRUD API with Mongoose',
          emoji: '🍃',
          xpReward: 50,
          badgeName: 'CRUD Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab real database se kaam karenge! Mongoose + Express = Production-grade REST API! 🍃🚂"',
            hint: '💡 Masti Sir: ".lean() use karo read-only queries ke liye — plain JS object milega, Mongoose document nahi. Much faster!"',
            success: '🥳 Masti Sir: "Database connected! Real data create, read, update, delete ho raha hai! Ye hai proper backend! 🔥"',
            mistake: '😅 Masti Sir: "findById() mein invalid ObjectId doge toh CastError aayega — always validate params!"'
          },
          englishDef: 'Integrating Mongoose with Express.js to build a complete CRUD API for a real-world application. This includes proper error handling, input validation, pagination, and search functionality.',
          hinglishExplain: 'Express routes + Mongoose models se complete CRUD API: courses create karo, list karo (with pagination/search), ek course get karo, update karo, delete karo. Har operation mein proper validation aur error handling.',
          code: `// models/Course.model.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, enum: ['frontend', 'backend', 'database', 'programming'], required: true },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  enrolledCount: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false }
}, { timestamps: true });

// Text index for search
courseSchema.index({ title: 'text', description: 'text' });

module.exports = mongoose.model('Course', courseSchema);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// controllers/course.controller.js

// GET /api/courses?page=1&limit=10&category=frontend&search=react
exports.getCourses = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, search, sortBy = '-createdAt' } = req.query;
    
    const filter = { isPublished: true };
    if (category) filter.category = category;
    if (search) filter.$text = { $search: search };
    
    const [courses, total] = await Promise.all([
      Course.find(filter)
        .sort(sortBy)
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .populate('instructor', 'name avatar')
        .lean(),
      Course.countDocuments(filter)
    ]);
    
    res.json({ courses, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
};

// POST /api/courses
exports.createCourse = async (req, res, next) => {
  try {
    const course = await Course.create({ ...req.body, instructor: req.user.id });
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
};`,
          quiz: {
            question: 'Mongoose `.lean()` method ka kya fayda hai?',
            options: ['Data ko compress karta hai', 'Plain JavaScript objects return karta hai Mongoose Document instances ki jagah — faster aur less memory', 'Schema validation skip karta hai', 'Indexes automatically create karta hai'],
            answer: 'Plain JavaScript objects return karta hai Mongoose Document instances ki jagah — faster aur less memory',
            explanation: 'lean() plain objects return karta hai jo Mongoose methods (save, toJSON, populate) nahi carry karte. Read-only queries mein significantly faster hota hai.'
          },
          summary: ['Promise.all se total count aur data parallel fetch hote hain', '.populate() se referenced documents inline include hote hain', '.lean() read-only queries mein performance improve karta hai'],
          flashcard: { q: 'Mongoose populate() kya karta hai?', a: 'ObjectId references ko actual document data se replace karta hai — MongoDB ka JOIN equivalent.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: ADVANCED PATTERNS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Advanced Express — Caching, WebSockets & Production',
      lessons: [
        {
          id: 'express-caching-redis',
          title: 'Caching with Redis in Express',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Cache Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Same data bar bar database se kyun mango? Cache mein rakho — response time milliseconds mein! 🚀"',
            hint: '💡 Masti Sir: "Redis = Ultra-fast in-memory key-value store. GET se cache hit check karo, miss hone par DB se lo aur Redis mein SET karo with TTL!"',
            success: '🥳 Masti Sir: "Cache hit! Database query skip ho gayi — server load dramatically kam ho gaya 🔥"',
            mistake: '😅 Masti Sir: "Cache invalidation mat bhoolna! Data update hone par purana cache delete karo warna stale data dikhega!"'
          },
          englishDef: "Redis is an in-memory data store used as a cache layer. By storing frequently accessed data in Redis, you avoid repeated database queries, reducing response times from 200ms to <5ms and decreasing database load.",
          hinglishExplain: 'Redis ek super-fast in-memory database hai. Express mein caching aise kaam karta hai: pehle Redis check karo (cache hit?), agar data hai toh seedha return karo, nahi hai toh MongoDB se lo, Redis mein save karo with expiry time (TTL).',
          code: `const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });
client.connect();

// Reusable Caching Middleware
const cacheMiddleware = (ttl = 300) => async (req, res, next) => {
  const cacheKey = \`cache:\${req.url}\`;
  
  try {
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log('⚡ Cache HIT for:', cacheKey);
      return res.json(JSON.parse(cachedData));
    }
    
    // Override res.json to capture and cache response
    const originalJson = res.json.bind(res);
    res.json = (data) => {
      client.setEx(cacheKey, ttl, JSON.stringify(data)).catch(console.error);
      return originalJson(data);
    };
    
    next();
  } catch (err) {
    console.error('Cache error:', err);
    next(); // Fallback to DB if Redis fails
  }
};

// Apply caching to specific routes
app.get('/api/courses', cacheMiddleware(300), getCourses); // Cache 5 mins
app.get('/api/homepage', cacheMiddleware(3600), getHomepageData); // Cache 1 hour

// Cache invalidation on update/delete
app.post('/api/courses', requireAuth, async (req, res, next) => {
  const course = await Course.create(req.body);
  await client.del('cache:/api/courses'); // Invalidate!
  res.status(201).json(course);
});`,
          interviewQuestions: [
            'Cache invalidation ke kya strategies hain?',
            'Redis aur Memcached mein kya fark hai?'
          ],
          quiz: {
            question: 'Cache invalidation kab karna zaroori hai?',
            options: ['Server restart hone par', 'Jab underlying data change (update/delete) ho', 'Har minute automatically', 'User logout hone par'],
            answer: 'Jab underlying data change (update/delete) ho',
            explanation: 'Data update ya delete hone par cache mein purana data rehta hai (stale). Invalidate karo taaki next request fresh data cache kare.'
          },
          summary: ['Redis in-memory caching se response time microseconds mein aa jaata hai', 'TTL se cache auto-expire hota hai', 'Data change hone par manually cache invalidate karo'],
          flashcard: { q: 'Redis mein TTL (Time To Live) kya hai?', a: 'Cache entry ke liye expiry time (seconds mein). TTL expire hone par Redis automatically key delete kar deta hai.' }
        },
        {
          id: 'express-websockets',
          title: 'Real-time Communication with Socket.io',
          emoji: '🔌',
          xpReward: 50,
          badgeName: 'Real-time Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTTP ek hi direction mein baat karta hai! WebSockets se real-time bidirectional communication — chat apps, live notifications, collaborative tools! 🔌"',
            hint: '💡 Masti Sir: "Socket.io WebSockets pe fall back karta hai long-polling pe agar WebSocket support na ho. Automatic reconnection bhi handle karta hai!"',
            success: '🥳 Masti Sir: "Real-time chat kaam kar raha hai! Ek user ne message bheja aur sabko instantly dikhaa 🔥"',
            mistake: '😅 Masti Sir: "socket.emit() ek client ko, io.emit() sabko, socket.to(room).emit() room members ko! Confusion mat karo!"'
          },
          englishDef: 'Socket.io enables real-time, bidirectional communication between web clients and servers using WebSockets. It supports rooms (grouped connections), namespaces, and automatic reconnection.',
          hinglishExplain: 'HTTP request-response mein server kabhi client ko pehle message nahi bhej sakta. WebSockets se persistent connection ban jaata hai — server kab bhi client ko push kar sakta hai. Live chat, notifications, collaborative editing — sab isse possible hai.',
          code: `const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: process.env.CLIENT_URL }
});

// Track online users
const onlineUsers = new Map();

io.on('connection', (socket) => {
  console.log(\`🔌 User connected: \${socket.id}\`);
  
  // User joins with their info
  socket.on('userJoin', ({ userId, username }) => {
    onlineUsers.set(socket.id, { userId, username });
    socket.join(\`user:\${userId}\`); // Personal room
    
    io.emit('onlineUsers', Array.from(onlineUsers.values()));
    socket.broadcast.emit('notification', \`\${username} joined!\`);
  });
  
  // Handle chat message
  socket.on('sendMessage', ({ roomId, message }) => {
    const user = onlineUsers.get(socket.id);
    const msgData = { user: user.username, message, timestamp: new Date() };
    
    // Broadcast to all in room (including sender)
    io.to(roomId).emit('newMessage', msgData);
    
    // Save to database
    Message.create({ ...msgData, room: roomId }).catch(console.error);
  });
  
  // Join specific room
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    socket.emit('joinedRoom', roomId);
  });
  
  // Handle disconnect
  socket.on('disconnect', () => {
    const user = onlineUsers.get(socket.id);
    onlineUsers.delete(socket.id);
    io.emit('onlineUsers', Array.from(onlineUsers.values()));
    if (user) socket.broadcast.emit('notification', \`\${user.username} left\`);
  });
});

httpServer.listen(5005, () => console.log('Server with WebSockets running! 🚀'));`,
          quiz: {
            question: 'Socket.io mein `socket.emit()` aur `io.emit()` mein kya fark hai?',
            options: ['Koi fark nahi', 'socket.emit() sirf current connected client ko bhejta hai, io.emit() sabhi connected clients ko', 'io.emit() server se client ko, socket.emit() client se server ko', 'socket.emit() faster hai'],
            answer: 'socket.emit() sirf current connected client ko bhejta hai, io.emit() sabhi connected clients ko',
            explanation: 'socket = individual connection. io = entire server. socket.to(roomId).emit() specific room ke clients ko bhejta hai.'
          },
          summary: ['WebSockets persistent bidirectional connections dete hain', 'Rooms se grouped communication possible hai', 'disconnect event handle karna zaroori hai cleanup ke liye'],
          flashcard: { q: 'WebSocket HTTP se kaise alag hai?', a: 'HTTP stateless request-response hai. WebSocket ek persistent TCP connection maintain karta hai jisme server bhi client ko kab bhi push kar sakta hai.' }
        },
        {
          id: 'express-final-project',
          title: 'Complete Express.js Production API Project',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'Express.js Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "FINAL BOSS! Sab kuch ek mein — Router, Middleware, Validation, Auth, Database, Caching, File Upload, Error Handling! Production-ready API! 🏆"',
            hint: '💡 Masti Sir: "Production checklist: Helmet ✅, CORS ✅, Rate Limiting ✅, Input Validation ✅, JWT Auth ✅, Error Logging ✅. Sab check karo!"',
            success: '🥳 Masti Sir: "EXPRESS.JS MASTER! Tumne complete production-grade API banayi! Tum ab ek proper backend developer ho! 🎉🔥"',
            mistake: '😅 Masti Sir: "Deployment se pehle `NODE_ENV=production` set karo aur debug logs disable karo!"'
          },
          englishDef: 'A production-ready Express.js API incorporates all best practices: modular routing, middleware layers, authentication, database integration, caching, input validation, centralized error handling, and proper logging.',
          hinglishExplain: 'Complete Express.js project mein sabhi concepts integrate hote hain. Ye ek real-world e-learning platform API hai jisme users, courses, authentication, enrollments, real-time notifications sab kuch hoga.',
          code: `// Final Project Architecture: CodeMasti Learning Platform API
//
// src/
// ├── server.js          → Entry point (cluster + PM2)
// ├── app.js             → Express app config
// ├── config/
// │   ├── database.js    → MongoDB + Redis connections
// │   └── constants.js
// ├── routes/
// │   ├── auth.routes.js
// │   ├── courses.routes.js
// │   ├── users.routes.js
// │   └── enrollment.routes.js
// ├── controllers/       → Business logic
// ├── models/            → Mongoose schemas
// ├── middlewares/
// │   ├── auth.js        → JWT verification
// │   ├── validate.js    → Joi validation
// │   ├── cache.js       → Redis caching
// │   └── errorHandler.js
// └── utils/
//     ├── logger.js      → Winston logger
//     └── email.js       → Nodemailer

// app.js — Complete Setup
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { Server } = require('socket.io');

const app = express();

// Security Layer
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Logging (development)
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/courses', require('./routes/courses.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/enrollments', require('./routes/enrollment.routes'));

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));

// 404 + Error handlers
app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }));
app.use(require('./middlewares/errorHandler'));

module.exports = app;`,
          challenge: {
            instruction: 'Complete production-ready Express.js REST API banao: Routing ✅, Middleware ✅, JWT Auth ✅, Mongoose DB ✅, Validation ✅, Error Handling ✅.',
            initialCode: `const express = require('express');
const app = express();

// Your production Express.js API here!
app.use(express.json());

// Add your routes, middleware, and error handling
`,
            validator: (code) => {
              const n = code.toLowerCase();
              return (n.includes('app.use') || n.includes('router')) && n.includes('express');
            },
            successMessage: '🏆 EXPRESS.JS EXPERT CERTIFICATE EARNED! You are now a backend master! +60 XP!'
          },
          interviewQuestions: [
            'Express.js ko production-ready kaise banate hain?',
            'Horizontal scaling mein Express ke saath kya challenges hain?',
            'API versioning kaise karte hain Express mein?'
          ],
          quiz: {
            question: 'API versioning ke liye Express mein best approach kaunsi hai?',
            options: ['Query params: `?version=2`', 'Header: `Api-Version: 2`', 'URL prefix: `/api/v2/...` — sab se common aur clean', 'Request body mein version bhejni'],
            answer: 'URL prefix: `/api/v2/...` — sab se common aur clean',
            explanation: 'URL-based versioning (/v1, /v2) sabse clear aur cache-friendly hai. Clients bookmarks rakh sakte hain specific versions ke. Header-based ya query-based versioning less discoverable hai.'
          },
          summary: ['Express.js Course 100% Complete! 🏆', 'Routing, Middleware, Auth, Database, Caching, WebSockets — sab master hua!', 'Next: REST API Design Patterns seekhte hain!'],
          flashcard: { q: 'Express.js ka best alternative kaunsa hai?', a: 'Fastify (fastest Node.js framework), Koa (by Express creators, lighter), NestJS (TypeScript, enterprise-grade Angular-style architecture).' },
          funFact: '🎉 Express.js pe Uber, IBM, Accenture, aur Twitter apne APIs power karte hain! Tu bhi ab Express.js developer hai!'
        }
      ]
    }
  ]
}

export default expressjsCourse
