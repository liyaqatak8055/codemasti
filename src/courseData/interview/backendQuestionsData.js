// Backend & Database Courses Interview Data (20 Questions each)
export const BACKEND_COURSE_INTERVIEWS = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. NODE.JS INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'nodejs-interview',
    courseId: 'nodejs',
    title: 'Node.js Interview',
    icon: '🟢',
    category: 'backend',
    categoryLabel: 'Backend Engineering',
    description: 'Event loop, libuv Worker pool, Streams & Buffers, Cluster module, Worker threads, Memory leaks, and Concurrency.',
    totalQuestions: 20,
    questions: [
      {
        id: 'node-1',
        question: 'Explain the internal architecture of Node.js and the role of V8, libuv, and C++ bindings.',
        companies: ['Google', 'Microsoft', 'IBM'],
        difficulty: 'Hard',
        answer: `Node.js is a C++ runtime wrapping Google's V8 engine (executes JS) and libuv (handles cross-platform non-blocking asynchronous I/O, event loop, and thread pool). C++ bindings expose OS-level socket/file APIs to JS layer.`,
        traps: 'Saying Node.js is completely single-threaded without mentioning libuv thread pool.',
        followUp: ['What is the default size of libuv threadpool?']
      },
      {
        id: 'node-2',
        question: 'Deeply explain the 6 phases of the Node.js Event Loop in order.',
        companies: ['Apple', 'Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `1) Timers: executes setTimeout/setInterval callbacks. 2) Pending Callbacks: executes I/O callbacks deferred to next loop iteration. 3) Idle/Prepare: internal use. 4) Poll: retrieves new I/O events and executes I/O callbacks. 5) Check: executes setImmediate() callbacks. 6) Close Callbacks: socket.on('close') cleanup. Between every phase, process.nextTick() and Microtasks run immediately.`,
        traps: 'Thinking setImmediate() runs after setTimeout(fn, 0) in all contexts.',
        followUp: ['How does process.nextTick() differ from setImmediate()?']
      },
      {
        id: 'node-3',
        question: 'Explain Streams in Node.js and the 4 types (Readable, Writable, Duplex, Transform).',
        companies: ['Google', 'Amazon', 'Wipro'],
        difficulty: 'Medium to Hard',
        answer: `Streams process data in chunks without loading entire files into memory:
1. Readable: fs.createReadStream().
2. Writable: fs.createWriteStream().
3. Duplex: TCP sockets (both read and write).
4. Transform: zlib.createGzip() (modifies data while reading/writing).
pipeline() handles backpressure and cleans up stream errors automatically.`,
        traps: 'Using fs.readFile() for 2GB video uploads which causes out-of-memory heap crash.',
        followUp: ['What is Backpressure in Node.js streams and how does stream.pipe() handle it?']
      },
      {
        id: 'node-4',
        question: 'What is the difference between process.nextTick() and setImmediate()?',
        companies: ['Infosys', 'IBM'],
        difficulty: 'Medium',
        answer: `process.nextTick() queues a microtask that fires immediately after current operation before the event loop advances to the next phase. setImmediate() queues a task in the Check phase of the event loop.`,
        traps: 'Recursive process.nextTick() starves the entire I/O poll phase.',
        followUp: ['Why was setImmediate() added to Node.js?']
      },
      {
        id: 'node-5',
        question: 'How do Cluster Module vs Worker Threads differ in scaling Node.js applications?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Cluster spawns multiple OS processes sharing port (great for scaling I/O across CPU cores with PM2). Worker Threads spawn OS threads sharing memory via SharedArrayBuffer (great for CPU-heavy tasks like image processing/crypto).`,
        traps: 'Using Worker Threads for simple network routing instead of Cluster.',
        followUp: ['How does PM2 use Cluster mode under the hood?']
      },
      {
        id: 'node-6',
        question: 'What are Buffers in Node.js and how do they handle binary raw memory?',
        companies: ['Apple', 'Amazon'],
        difficulty: 'Medium',
        answer: `Buffer is an unallocated fixed-size chunk of raw binary memory allocated outside the V8 heap in C++. Used to handle raw TCP streams, file system binaries, and image buffers.`,
        traps: 'Using Buffer.allocUnsafe() without initializing it, which leaks old uncleaned memory data.',
        followUp: ['Difference between Buffer.alloc() and Buffer.allocUnsafe()?']
      },
      {
        id: 'node-7',
        question: 'How do you detect and fix Memory Leaks in Node.js backend services?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Hard',
        answer: `Common leaks: unremoved EventEmitter listeners, global caches, and uncleared setIntervals. Diagnosed by taking Heap Snapshots via node --inspect in Chrome DevTools or Clinic.js / Prometheus memory metrics.`,
        traps: 'Attaching event listeners inside request handlers without removing them on response finish.',
        followUp: ['What is EventEmitter maxListeners warning?']
      },
      {
        id: 'node-8',
        question: 'Explain the difference between require() and ES module import in Node.js.',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `require() is CommonJS: synchronous, dynamic runtime loading, cached in require.cache. import is ES Modules: asynchronous, static top-level parsing, tree-shakeable, requires "type": "module" in package.json.`,
        traps: 'Using __dirname in ESM files (use import.meta.url and fileURLToPath instead).',
        followUp: ['How do you dynamic import() in CJS?']
      },
      {
        id: 'node-9',
        question: 'What are unhandledRejection and uncaughtException in Node.js process events?',
        companies: ['Google', 'HCL'],
        difficulty: 'Hard',
        answer: `uncaughtException catches unhandled synchronous errors. unhandledRejection catches rejected promises without a .catch(). Best practice: Log error, clean up database connections, and restart the process via process.exit(1) with PM2 restart.`,
        traps: 'Resuming normal execution after an uncaughtException (process state is corrupted).',
        followUp: ['Why is process.exit(1) recommended after uncaughtException?']
      },
      {
        id: 'node-10',
        question: 'How does Node.js handle file system operations with fs vs fs/promises?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `fs provides callback-based and sync methods (fs.readFileSync). fs/promises provides Promise-based methods (await fs.readFile()) for clean async/await syntax. Never use sync methods in production request handlers!`,
        traps: 'Using fs.readFileSync inside an Express route handler (blocks all other concurrent users).',
        followUp: ['How does UV_THREADPOOL_SIZE affect fs.readFile performance?']
      },
      {
        id: 'node-11',
        question: 'What is Backpressure in Node.js and how do streams handle it?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Backpressure occurs when data is read faster than the consumer can write. Stream write() returns false when the highWaterMark buffer is full. Consumer pauses read stream and resumes on the 'drain' event. stream.pipeline() automates this.`,
        traps: 'Ignoring return value of stream.write() causing high memory spikes.',
        followUp: ['What is the default highWaterMark buffer size in Node.js?']
      },
      {
        id: 'node-12',
        question: 'What is the purpose of the crypto module in Node.js and what algorithms are threadpool-bound?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Medium to Hard',
        answer: `crypto handles hashing (SHA-256), HMAC, cipher encryption (AES-256-GCM), and password hashing (PBKDF2, Scrypt). PBKDF2, Scrypt, and randomBytes run on libuv worker threads because they are CPU-intensive.`,
        traps: 'Using crypto.pbkdf2Sync in request handlers (freezes event loop).',
        followUp: ['Why use Scrypt or Argon2 over plain MD5/SHA256 for passwords?']
      },
      {
        id: 'node-13',
        question: 'Explain Child Processes in Node.js: spawn vs exec vs execFile vs fork.',
        companies: ['Amazon', 'Infosys'],
        difficulty: 'Hard',
        answer: `1. spawn: streams large output in real-time. 2. exec: buffers whole output in memory (maxBuffer limit). 3. execFile: runs executable file directly without shell. 4. fork: special spawn for Node.js scripts with built-in IPC channel.`,
        traps: 'Using exec with unsanitized user input (vulnerable to command injection).',
        followUp: ['How does IPC message passing work in fork()?']
      },
      {
        id: 'node-14',
        question: 'How do you gracefully shutdown a Node.js server on SIGTERM / SIGINT signals?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Listen to process.on('SIGTERM', () => { server.close(() => { db.disconnect(); process.exit(0); }); setTimeout(() => process.exit(1), 10000); }). Stops accepting new connections while letting ongoing requests complete.`,
        traps: 'Immediately killing process with process.exit(0) without waiting for in-flight requests.',
        followUp: ['How do Docker/Kubernetes pod termination grace periods use SIGTERM?']
      },
      {
        id: 'node-15',
        question: 'What is the difference between EventEmitter.on(), once(), and prependListener()?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `on() registers a listener triggered on every event emission. once() runs once and automatically unregisters itself. prependListener() inserts the listener at the beginning of the listener array so it runs first.`,
        traps: 'Memory leaks caused by registering on() inside nested loops without removing.',
        followUp: ['What is the removeAllListeners() method?']
      },
      {
        id: 'node-16',
        question: 'What is REPL in Node.js and how do you customize a Node.js interactive REPL session?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `REPL (Read-Eval-Print-Loop) is the interactive Node.js terminal shell. Customized via require('repl').start() to expose custom global variables, database models, and commands for debugging.`,
        traps: 'Leaving custom REPL sockets exposed without authentication in production.',
        followUp: ['What is the special variable _ in Node.js REPL?']
      },
      {
        id: 'node-17',
        question: 'How does package.json package-lock.json and semantic versioning (^ vs ~) work?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `Semver: MAJOR.MINOR.PATCH. ^1.2.3 updates MINOR and PATCH (>= 1.2.3 < 2.0.0). ~1.2.3 updates only PATCH (>= 1.2.3 < 1.3.0). package-lock.json locks exact dependency tree versions for deterministic builds across teams.`,
        traps: 'Deleting package-lock.json in CI/CD pipeline.',
        followUp: ['What is the difference between npm install and npm ci?']
      },
      {
        id: 'node-18',
        question: 'Explain DNS lookup in Node.js (dns.lookup vs dns.resolve).',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `dns.lookup uses system getaddrinfo() synchronously via libuv threadpool. dns.resolve performs asynchronous network DNS queries directly using c-ares library without consuming libuv worker threads.`,
        traps: 'High concurrency HTTP requests exhausting libuv threadpool due to dns.lookup.',
        followUp: ['How to cache DNS resolutions with Agentkeepalive?']
      },
      {
        id: 'node-19',
        question: 'What is the difference between process.env and config packages like dotenv?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `process.env is the global Node.js object holding system environment variables. dotenv loads key-value pairs from a local .env file into process.env for local development. Never commit .env with production secrets to git!`,
        traps: 'Committing .env files to GitHub repositories.',
        followUp: ['What is node --env-file=.env native flag in Node.js 20+?']
      },
      {
        id: 'node-20',
        question: 'How does Garbage Collection in Node.js handle Heap vs Native C++ memory?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `V8 GC manages the JS Heap (objects, strings, arrays) with max-old-space-size limit. Native C++ memory (Buffers, C++ addons, sockets) is managed outside V8 heap and freed when JS wrappers are collected.`,
        traps: 'Ignoring RSS (Resident Set Size) memory when only monitoring V8 heap.',
        followUp: ['What is process.memoryUsage() output structure?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. EXPRESS.JS INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'expressjs-interview',
    courseId: 'expressjs',
    title: 'Express.js Interview',
    icon: '🚂',
    category: 'backend',
    categoryLabel: 'Backend Engineering',
    description: 'Middlewares pipeline, Routing architecture, Error handling, REST design, Security headers (Helmet), Rate Limiting, and CORS.',
    totalQuestions: 20,
    questions: [
      {
        id: 'exp-1',
        question: 'What is Middleware in Express.js and how does the next() function work?',
        companies: ['Microsoft', 'Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `Middlewares are functions having access to (req, res, next). They execute code, modify req/res objects, end request-response cycle, or pass control to the next middleware via next(). If next() is not called and response not ended, the request hangs.`,
        traps: 'Calling next() after already sending a response with res.json() (causes Headers Already Sent error).',
        followUp: ['What is the difference between Application-level and Router-level middleware?']
      },
      {
        id: 'exp-2',
        question: 'How does Centralized Error Handling work in Express.js (4-argument middleware)?',
        companies: ['Google', 'Amazon', 'IBM'],
        difficulty: 'Medium to Hard',
        answer: `Error-handling middlewares have 4 parameters: (err, req, res, next). Express automatically catches errors passed to next(err) or thrown synchronously, skipping regular middlewares and jumping straight to the error handler.`,
        traps: 'Declaring error handler with only 3 arguments — Express treats it as regular middleware.',
        followUp: ['How do you handle unhandled async errors in Express 4 vs Express 5?']
      },
      {
        id: 'exp-3',
        question: 'What is CORS (Cross-Origin Resource Sharing) and how do you configure it securely in Express?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Medium to Hard',
        answer: `CORS is a browser security mechanism enforcing same-origin policy. Enabled using cors({ origin: ['https://app.com'], credentials: true, methods: ['GET','POST','PUT','DELETE'] }). Handles preflight OPTIONS requests.`,
        traps: 'Using origin: "*" combined with credentials: true (invalid according to CORS spec).',
        followUp: ['What is an OPTIONS Preflight request and when does the browser trigger it?']
      },
      {
        id: 'exp-4',
        question: 'What is Helmet.js and what security HTTP headers does it set in Express?',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Medium',
        answer: `Helmet sets 15+ secure HTTP headers: Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Content-Type-Options: nosniff, X-Frame-Options: SAMEORIGIN (clickjacking defense), and hides X-Powered-By: Express.`,
        traps: 'Leaving X-Powered-By header visible, leaking server tech stack to attackers.',
        followUp: ['What is Clickjacking and how does X-Frame-Options block it?']
      },
      {
        id: 'exp-5',
        question: 'What is the difference between app.use() and app.all() in Express?',
        companies: ['Wipro', 'HCL'],
        difficulty: 'Beginner',
        answer: `app.use('/api', mw) matches any HTTP method starting with prefix /api (e.g. /api/users, /api/posts). app.all('/api', mw) matches any HTTP method on that exact path only.`,
        traps: 'Using app.all when you intended prefix matching for sub-routes.',
        followUp: ['How does express.Router() modularize sub-routes?']
      },
      {
        id: 'exp-6',
        question: 'How do you handle Request Validation in Express using Joi / Zod or express-validator?',
        companies: ['Amazon', 'Google'],
        difficulty: 'Medium',
        answer: `Create a validation middleware schema (Zod/Joi) that validates req.body, req.query, or req.params before entering the controller. Returns 400 Bad Request with formatted error array on failure.`,
        traps: 'Validating data inside controllers instead of dedicated middleware layers.',
        followUp: ['How do you sanitize input against SQL/NoSQL injection during validation?']
      },
      {
        id: 'exp-7',
        question: 'What is Rate Limiting in Express using express-rate-limit and Redis?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `express-rate-limit tracks client requests per IP/UserID over a window. For multi-server clusters, use Redis store (rate-limit-redis) to share counters and return 429 Too Many Requests with Retry-After header.`,
        traps: 'Using memory store in multi-instance cluster deployments.',
        followUp: ['How does rate limiting handle reverse proxy X-Forwarded-For headers?']
      },
      {
        id: 'exp-8',
        question: 'What is the difference between req.params, req.query, and req.body?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `req.params: Route path parameters (/users/:id -> req.params.id). req.query: URL search query string (/users?sort=asc -> req.query.sort). req.body: Parsed JSON payload sent in POST/PUT request (requires express.json()).`,
        traps: 'Accessing req.body without app.use(express.json()) middleware (returns undefined).',
        followUp: ['What is express.urlencoded({ extended: true }) used for?']
      },
      {
        id: 'exp-9',
        question: 'How does express.static() serve static files and how to set HTTP caching headers?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `app.use(express.static('public', { maxAge: '1d', etag: true })). Automatically sets ETag, Last-Modified, and Cache-Control headers for CSS, JS, and image assets.`,
        traps: 'Exposing root server directory with express.static("./") leaking source code.',
        followUp: ['How does 304 Not Modified status code save bandwidth?']
      },
      {
        id: 'exp-10',
        question: 'What causes "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"?',
        companies: ['Amazon', 'Infosys'],
        difficulty: 'Medium',
        answer: `Happens when your code attempts to send multiple HTTP responses for a single request (e.g. res.json() called twice, or res.send() called after next() without a return statement). Fix by adding 'return res.json(...)'.`,
        traps: 'Missing return keyword before res.status(400).json().',
        followUp: ['How does res.headersSent boolean check if response was already sent?']
      },
      {
        id: 'exp-11',
        question: 'Explain Controller-Service-Repository pattern in Express.js backend architecture.',
        companies: ['Microsoft', 'Google'],
        difficulty: 'Hard',
        answer: `1) Router: Maps URL to controller. 2) Controller: Handles req/res and HTTP status codes. 3) Service: Encapsulates business logic, calculations, third-party APIs. 4) Repository/Model: Directly queries database. Keeps code testable and decoupled.`,
        traps: 'Writing database queries and business logic directly inside route handlers.',
        followUp: ['How does Dependency Injection simplify unit testing in Express services?']
      },
      {
        id: 'exp-12',
        question: 'How do you handle File Uploads in Express using Multer (Disk vs Memory Storage)?',
        companies: ['Apple', 'Amazon'],
        difficulty: 'Medium',
        answer: `Multer parses multipart/form-data. diskStorage saves files directly to disk folder. memoryStorage keeps file in RAM buffer (used when piping directly to AWS S3 bucket). Limits file size and filters MIME types.`,
        traps: 'Using memoryStorage for large 500MB video uploads (causes RAM exhaustion).',
        followUp: ['How to validate file magic numbers / MIME types to prevent malicious executable uploads?']
      },
      {
        id: 'exp-13',
        question: 'What is the purpose of Compression middleware (compression) in Express?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `compression() compresses response JSON and HTML bodies using Gzip/Brotli before sending over network, reducing payload size by up to 70% and drastically speeding up mobile API responses.`,
        traps: 'Compressing already compressed media files like JPG/PNG/MP4.',
        followUp: ['How does Accept-Encoding: gzip header work?']
      },
      {
        id: 'exp-14',
        question: 'How do you structure Authentication middleware with JWT in Express?',
        companies: ['Google', 'IBM'],
        difficulty: 'Medium to Hard',
        answer: `Middleware reads Authorization: Bearer <token> header or HttpOnly cookie, verifies with jwt.verify(token, secret), attaches decoded user payload to req.user, and calls next(). If invalid, returns 401 Unauthorized.`,
        traps: 'Not handling TokenExpiredError distinctly from JsonWebTokenError.',
        followUp: ['How do Refresh Tokens handle silent token renewals?']
      },
      {
        id: 'exp-15',
        question: 'What is Morgan and Winston logging libraries in Express production setup?',
        companies: ['Microsoft', 'Wipro'],
        difficulty: 'Medium',
        answer: `Morgan logs incoming HTTP requests (method, url, status, response time). Winston is a structured logger that writes leveled logs (info, warn, error) formatted as JSON to log files, Datadog, or CloudWatch.`,
        traps: 'Using console.log in high-throughput production servers (blocking synchronous output).',
        followUp: ['How do log rotation policies work in Winston?']
      },
      {
        id: 'exp-16',
        question: 'What is Parameter Pollution (HPP) in Express and how to prevent it?',
        companies: ['Apple', 'Google'],
        difficulty: 'Hard (Security)',
        answer: `HTTP Parameter Pollution occurs when an attacker passes duplicate query parameters (/api?user=1&user=2), turning req.query.user into an array and crashing code expecting a string. Prevented using hpp() middleware.`,
        traps: 'Assuming req.query fields are always strings without type checking.',
        followUp: ['How does hpp whitelist specific query parameters?']
      },
      {
        id: 'exp-17',
        question: 'How does Cookie-Parser work with Signed Cookies in Express?',
        companies: ['Infosys', 'IBM'],
        difficulty: 'Medium',
        answer: `app.use(cookieParser('secret_key')). res.cookie('name', 'val', { signed: true }). Signed cookies append an HMAC SHA256 signature to prevent client tampering. Read via req.signedCookies.`,
        traps: 'Thinking signing encrypts cookie value — it only validates tamper integrity.',
        followUp: ['What is the difference between signed cookies and encrypted cookies?']
      },
      {
        id: 'exp-18',
        question: 'What is Idempotency in REST APIs and how to handle it in Express POST requests?',
        companies: ['Amazon', 'Google'],
        difficulty: 'Hard',
        answer: `Idempotent methods (GET, PUT, DELETE) produce same result when called multiple times. POST is non-idempotent. To make payment POST requests idempotent, clients send an Idempotency-Key header stored in Redis.`,
        traps: 'Retrying network failed POST requests without idempotency keys.',
        followUp: ['How does Stripe handle idempotency keys?']
      },
      {
        id: 'exp-19',
        question: 'How do you implement Health Check endpoints (/health, /readiness) for Kubernetes in Express?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Medium',
        answer: `/healthz (Liveness) returns 200 if server process is running. /ready (Readiness) returns 200 only if database, Redis, and message queues are connected and ready to accept traffic. If DB disconnects, returns 503.`,
        traps: 'Checking heavy database queries in liveness probes (causes Kubernetes to restart container).',
        followUp: ['What is the difference between Liveness and Readiness probes in Kubernetes?']
      },
      {
        id: 'exp-20',
        question: 'What are the main architectural improvements introduced in Express 5.0?',
        companies: ['Meta', 'Amazon'],
        difficulty: 'Hard',
        answer: `Express 5 automatically catches rejected promises in route handlers without requiring express-async-errors or try/catch wrappers! Also removes deprecated methods (app.del, res.sendfile) and updates path routing.`,
        traps: 'Writing redundant try/catch wrappers around async handlers in Express 5.',
        followUp: ['How does Express 5 handle router matching regex updates?']
      }
    ]
  }
]
