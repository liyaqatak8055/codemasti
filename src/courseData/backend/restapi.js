export const restapiCourse = {
  id: 'restapi',
  title: 'REST API',
  description: 'Complete Production REST API Masterclass! HTTP/1.1 & HTTP/2 protocols, RESTful resource design, methods (GET, POST, PUT, PATCH, DELETE, OPTIONS), status codes (2xx, 3xx, 4xx, 5xx), headers, query/path parameters, request validation (Zod/Joi), centralized error middleware, JWT authentication & refresh token rotation, HttpOnly cookies, RBAC authorization, CORS & preflight, rate limiting, ETag & HTTP caching, database integration (PostgreSQL transactions & MongoDB), OpenAPI & Swagger documentation, automated testing with Supertest, logging & monitoring (X-Request-ID), Idempotency-Keys, Webhooks, CodeMasti LMS REST API Capstone, aur FAANG interview problems Masti Sir style mein!',
  icon: '🔌',
  category: 'backend',
  certificateName: 'REST API',
  topicsCount: 118,
  practiceCount: 150,
  projectsCount: 12,
  hoursEstimate: 35,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: API FUNDAMENTALS & REST ARCHITECTURE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: API Fundamentals, Client-Server & REST Architecture',
      lessons: [
        {
          id: 'rest-api-fundamentals',
          title: 'What is an API, Client-Server Architecture & REST vs GraphQL vs gRPC vs WebSockets',
          emoji: '🔌',
          xpReward: 35,
          badgeName: 'API Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "API waiter jaisa hai bhai! Client (Customer) order deta hai, API (Waiter) kitchen (Backend) tak message pahunchata hai aur dish (Data) laa kar table par serve karta hai! 🍽️😎"',
            hint: '💡 Masti Sir: "Frontend (React) aur Backend (Node.js/Python) ko connect karne ka universal bridge hai REST API — JSON format mein data exchange hota hai!"',
            success: '🎉 Masti Sir: "API fundamentals aur client-server architecture crystal clear ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "API aur Website ko mix mat karna — Website HTML/CSS render karti hai insano ke liye, API raw JSON data deti hai applications ke liye!"'
          },
          englishDef: 'An Application Programming Interface (API) is a set of defined rules and protocols that enable different software systems to communicate. In modern web development, REST APIs act as the stateless communication bridge between client applications (React web apps, mobile apps, IoT devices) and backend servers managing databases.',
          hinglishExplain: 'API (Application Programming Interface) do alag software applications ke beech baat karne ka tarika hai. Jab aap Zomato app par "Search Pizza" click karte ho, toh Zomato ka frontend ek REST API request backend server ko bhejta hai, server database se pizza restaurants dhoondhta hai aur JSON format mein response frontend ko wapas deta hai.',
          funnyExample: {
            scenario: 'The Restaurant Dining Experience:\n- Customer at Table = Client (React Frontend / Mobile App) 🧑‍💻\n- Menu Card = API Documentation (Endpoints list) 📋\n- Waiter = REST API (Carries request to kitchen and returns food) 🤵\n- Chef & Kitchen = Backend Server (Express.js / Python) 👨‍🍳\n- Food Pantry & Fridge = Database (PostgreSQL / MongoDB) 🥫',
            punchline: 'The API is your trusted waiter in the web development restaurant!'
          },
          visualDiagram: {
            title: 'Modern Client-Server API Architecture',
            nodes: [
              'Client (React Web App / Mobile iOS & Android)',
              'HTTP Request (JSON Payload + Auth Token)',
              'REST API Gateway / Express.js Server',
              'Business Logic Layer & Database (PostgreSQL)',
              'HTTP Response (Status 200 OK + JSON Data)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'REST vs GraphQL vs gRPC vs WebSockets:',
            steps: [
              'REST: Universal standard over HTTP with URL resources and HTTP methods (Best for public APIs & CRUD)',
              'GraphQL: Single endpoint with flexible client-specified query schemas (Prevents over-fetching)',
              'gRPC: High-performance binary Protocol Buffers over HTTP/2 (Best for internal microservice communication)',
              'WebSockets: Full-duplex persistent bidirectional TCP connection (Best for live chat & stock tickers)'
            ]
          },
          code: `// ── 1. REAL-WORLD REST API CLIENT REQUEST (FETCH) ──
async function fetchCourseDetails(courseId) {
  try {
    const response = await fetch(\`https://api.codemasti.com/api/v1/courses/\${courseId}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1Ni...'
      }
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    console.log('Course details loaded:', data);
    return data;
  } catch (error) {
    console.error('Failed to fetch API data:', error.message);
  }
}`,
          codeBreakdown: [
            { part: 'https://api.codemasti.com/api/v1/courses/101', label: 'Canonical RESTful Resource URI with versioning (/v1) and path identifier (:id)', color: '#3b82f6' },
            { part: "'Authorization': 'Bearer ...'", label: 'Standard HTTP authorization header passing security JWT credentials', color: '#10b981' },
            { part: 'const data = await response.json();', label: 'Deserializes incoming raw JSON response body into JavaScript object in memory', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ API response check kiye bina directly data render karne ki koshish karna (always verify `response.ok`)',
            '❌ Backend database connection credentials frontend code mein hardcode kar dena'
          ],
          miniChallenge: 'Ek `fetch` function likho jo `POST /api/v1/enrollments` endpoint par course registration request bheje.',
          quiz: {
            question: 'REST API, GraphQL aur WebSockets mein se live real-time bidirectional messaging ke liye kaunsa protocol best hai?',
            options: ['REST API', 'WebSockets', 'GraphQL', 'gRPC'],
            answer: 'WebSockets',
            explanation: 'WebSockets single persistent full-duplex TCP connection open rakhte hain jo real-time live chat aur stock tickers ke liye ideal hai, jabki REST request-response model par chalta hai.'
          },
          summary: [
            'API frontend aur backend ke beech standard communication bridge hai',
            'Client HTTP request bhejta hai aur Server JSON response return karta hai',
            'REST universal CRUD web applications ka gold standard architectural style hai'
          ],
          flashcard: {
            q: 'REST API mein Statelessness ka kya matlab hota hai?',
            a: 'Server har request ko completely independent maanta hai; har incoming request mein authentication token aur zaroori context shamil hona mandatory hai, server client ka session memory mein hold nahi karta.'
          }
        },
        {
          id: 'rest-principles-crud',
          title: 'REST Architectural Constraints & Resource-Oriented Modeling',
          emoji: '🏛️',
          xpReward: 35,
          badgeName: 'API Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "URL mein `/getUsers` ya `/deleteUser` mat likhna! Nouns use karo, verbs nahi! GET `/users` aur DELETE `/users/:id` standard hota hai! Naming clean rakhoge toh developer team khush rahegi! 😎"',
            hint: '💡 Masti Sir: "REST ke 6 core constraints hote hain: Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, aur Code-on-Demand!"',
            success: '🎉 Masti Sir: "Resource-oriented RESTful API modeling successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "Error aane par bhi 200 OK bhej rahe ho? Client confuse ho jayega! 400 ya 404 status code use karo!"'
          },
          englishDef: 'REST (Representational State Transfer) is an architectural style designed by Roy Fielding. It defines 6 core architectural constraints: (1) Client-Server Separation, (2) Statelessness, (3) Cacheability, (4) Uniform Interface (Resource identification in requests, resource manipulation through representations, self-descriptive messages, HATEOAS), (5) Layered System (Proxies, Gateways, Load Balancers), and (6) Code-on-Demand.',
          hinglishExplain: 'REST koi software library nahi hai balki ek Architectural Style hai. Iska core concept hai "Resource" (koi bhi data entity jaise User, Course, Order). Resources ko hamesha Plural Nouns (`/courses`, `/orders`) se represent karte hain aur unpar actions HTTP Methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) se perform hote hain. Isse poori duniya ke developers ke liye API samajhna ekdum aasan ho jata hai.',
          funnyExample: {
            scenario: 'The Messy vs Clean API Showdown:\n- Junior Dev URLs: `/api/getUsers`, `/api/createNewUser`, `/api/deleteUserById?id=5` 🤦‍♂️ (Messy, inconsistent!)\n- Senior REST Architect:\n  • GET `/api/v1/users` (List users)\n  • POST `/api/v1/users` (Create user)\n  • GET `/api/v1/users/5` (Fetch user #5)\n  • DELETE `/api/v1/users/5` (Delete user #5) 🎯✨',
            punchline: 'REST uses clean nouns for URLs and standard HTTP verbs for actions!'
          },
          visualDiagram: {
            title: 'HTTP Verbs to CRUD Actions Mapping',
            nodes: [
              'Create -> POST /api/v1/users -> Status 201 Created',
              'Read -> GET /api/v1/users/:id -> Status 200 OK',
              'Update (Full) -> PUT /api/v1/users/:id -> Status 200 OK',
              'Update (Partial) -> PATCH /api/v1/users/:id -> Status 200 OK',
              'Delete -> DELETE /api/v1/users/:id -> Status 204 No Content'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'The 6 REST Architectural Constraints:',
            steps: [
              '1. Client-Server: UI concerns separated from data storage concerns',
              '2. Stateless: No client context stored on server between requests',
              '3. Cacheable: Responses must explicitly define whether they can be cached (Cache-Control)',
              '4. Uniform Interface: Standard URIs, representations, and self-descriptive headers',
              '5. Layered System: Client cannot tell whether it is connected directly to end server or intermediary proxy',
              '6. Code-on-Demand (Optional): Server can temporarily extend client functionality (e.g. JavaScript)'
            ]
          },
          code: `// ── STANDARD RESTFUL RESOURCE API CONTRACT (Products Resource) ──

// 1. GET /api/v1/products?page=1&limit=10  -> Paginated collection list
// 2. GET /api/v1/products/45              -> Fetch single product #45
// 3. POST /api/v1/products               -> Create new product
// 4. PUT /api/v1/products/45              -> Complete entity replacement
// 5. PATCH /api/v1/products/45            -> Partial update (e.g. update price only)
// 6. DELETE /api/v1/products/45           -> Delete product entity

// Standard Predictable Response Envelope (JSON):
{
  "success": true,
  "statusCode": 200,
  "data": {
    "id": 45,
    "title": "PostgreSQL & REST API Masterclass",
    "price": 499.00,
    "category": "backend",
    "isPublished": true,
    "createdAt": "2026-08-21T03:30:00.000Z"
  },
  "message": "Product details fetched successfully"
}`,
          codeBreakdown: [
            { part: 'GET /api/v1/products/45', label: 'Plural noun resource endpoint with versioning and specific resource identifier', color: '#3b82f6' },
            { part: 'PUT vs PATCH', label: 'PUT replaces the complete entity; PATCH modifies only the specified fields', color: '#10b981' },
            { part: '"success": true, "data": {...}', label: 'Standardized response envelope format for uniform client consumption', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ URL mein action verbs use karna (`/api/createProduct` ❌ vs `POST /api/products` ✅)',
            '❌ Errors aane par bhi hamesha 200 OK return karna'
          ],
          miniChallenge: 'Articles aur Comments resources ke liye standard nested REST endpoints design karo (e.g. `/articles/:id/comments`).',
          quiz: {
            question: 'Kisi existing resource ke sirf 1 ya 2 specific fields update karne ke liye kaunsa HTTP method best practice hai?',
            options: ['POST', 'PUT', 'PATCH', 'GET'],
            answer: 'PATCH',
            explanation: 'PATCH method partial updates (chhota hissa badalna) ke liye use hota hai, jabki PUT poore resource ko replace karta hai.'
          },
          summary: [
            'REST stateless client-server communication ensure karta hai',
            'Nouns represent resources (`/users`, `/courses`), verbs represent HTTP methods',
            'Predictable JSON response envelopes frontend integration streamline karte hain'
          ],
          flashcard: {
            q: 'Nested resources (jaise user ke orders) ke liye REST URL format kya hona chahiye?',
            a: 'Parent resource + ID + Child resource format use hota hai: `GET /api/v1/users/:userId/orders`.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: HTTP PROTOCOLS, REQUEST-RESPONSE & HEADERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: HTTP Protocols, Request-Response Lifecycle & Headers',
      lessons: [
        {
          id: 'rest-http-protocol-lifecycle',
          title: 'HTTP/1.1 vs HTTP/2 Protocols, HTTPS TLS Handshake & Request-Response Anatomy',
          emoji: '🌐',
          xpReward: 40,
          badgeName: 'HTTP Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTTP request aur response ke andar kya hota hai — Method, URL path, Headers, aur Body! Jab browser request bhejta hai toh wire par raw text packets kaise travel karte hain, aaj deep dive karenge! 🌐😎"',
            hint: '💡 Masti Sir: "HTTP/1.1 mein har request ke liye alag connection ya pipelining hoti thi; HTTP/2 single TCP connection par multiplexing karke 100 requests parallel bhej deta hai!"',
            success: '🎉 Masti Sir: "HTTP protocol internals and wire-level packet flow mastered! 🔥"',
            mistake: '😅 Masti Sir: "Production API ko plain HTTP par mat chalana — hamesha HTTPS (TLS encrypted) use karo!"'
          },
          englishDef: 'Hypertext Transfer Protocol (HTTP) is the application-layer foundation of the World Wide Web. HTTP/1.1 introduced persistent connections, while HTTP/2 added binary framing, header compression (HPACK), and multiplexing over a single TCP stream. An HTTP Request consists of Method, Path, Protocol Version, Headers, and optional Body; an HTTP Response consists of Status Code, Reason Phrase, Headers, and Body payload.',
          hinglishExplain: 'HTTP internet ka communication protocol hai. Jab aap kisi API ko call karte ho toh wire par ek structured packet jata hai: pehli line mein Method aur Path (`POST /api/v1/users HTTP/1.1`), fir key-value Headers (`Content-Type: application/json`), aur aakhri mein Body payload. HTTPS isme TLS encryption add karta hai taaki beech mein koi hacker data sniff na kar sake.',
          funnyExample: {
            scenario: 'The Postal Envelope Analogy:\n- HTTP Request Line = Destination Address written on front: "To: /api/v1/orders" ✉️\n- HTTP Headers = Stamps & Delivery Instructions: "Fragile", "Content-Type: JSON" 🏷️\n- HTTP Body = The actual Letter inside the envelope 📄\n- HTTPS = Armed Security Courier Guard transporting the locked envelope! 🛡️🚚',
            punchline: 'Every HTTP transaction is a carefully structured, addressed envelope!'
          },
          visualDiagram: {
            title: 'HTTP Request & Response Wire Anatomy',
            nodes: [
              'RAW REQUEST: POST /api/v1/users HTTP/1.1 | Host: api.codemasti.com | Content-Type: application/json | {"name": "Kabir"}',
              'NETWORK TRANSMISSION (TLS Encrypted Socket over Port 443)',
              'RAW RESPONSE: HTTP/1.1 201 Created | Content-Type: application/json | {"id": 101, "name": "Kabir"}'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'HTTP/1.1 vs HTTP/2 Multiplexing:',
            steps: [
              'HTTP/1.1: Head-of-Line Blocking; browsers open 6 parallel TCP connections max per host',
              'HTTP/2: Binary Framing Layer breaks messages into frames; single TCP connection multiplexes hundreds of streams concurrently',
              'HPACK algorithm compresses repetitive HTTP headers saving 85% bandwidth'
            ]
          },
          code: `// ── RAW HTTP WIRE PROTOCOL REPRESENTATION ──

/*
=== 1. CLIENT RAW HTTP REQUEST ===
POST /api/v1/auth/login HTTP/1.1
Host: api.codemasti.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)
Content-Type: application/json
Accept: application/json
Content-Length: 57

{
  "email": "kabir@codemasti.com",
  "password": "SuperSecretPassword123!"
}

=== 2. SERVER RAW HTTP RESPONSE ===
HTTP/1.1 200 OK
Date: Fri, 21 Aug 2026 03:30:00 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 142
Connection: keep-alive
Set-Cookie: refreshToken=abc123xyz; HttpOnly; Secure; SameSite=Strict

{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1Ni...",
  "user": {
    "id": 1,
    "email": "kabir@codemasti.com"
  }
}
*/`,
          codeBreakdown: [
            { part: 'POST /api/v1/auth/login HTTP/1.1', label: 'Request line defining verb, target endpoint path, and HTTP specification version', color: '#3b82f6' },
            { part: 'Content-Type: application/json', label: 'Header declaring MIME payload format of the transmitted request body', color: '#10b981' },
            { part: 'HTTP/1.1 200 OK', label: 'Status line returning 3-digit numerical code and human-readable reason phrase', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ JSON body send karte waqt `Content-Type: application/json` header set karna bhool jana (causes backend `req.body` to be undefined)',
            '❌ Large image payloads ko bina compression ke direct JSON base64 string mein bhejna'
          ],
          miniChallenge: 'cURL terminal command likho jo custom headers ke sath raw HTTP request send kare (`curl -v -X POST ...`).',
          quiz: {
            question: 'HTTP/2 mein single TCP connection par multiple requests parallel transmit karne ki capability ko kya kehte hain?',
            options: ['Pipelining', 'Multiplexing', 'Load Balancing', 'Sharding'],
            answer: 'Multiplexing',
            explanation: 'HTTP/2 Multiplexing single TCP socket ke andar binary stream frames use karke multiple parallel requests aur responses bina blocking ke handle karti hai.'
          },
          summary: [
            'HTTP request-response cycle Request Line, Headers aur Body se milkar banta hai',
            'HTTP/2 multiplexing aur HPACK compression se high network throughput deliver karta hai',
            'HTTPS TLS encryption data eavesdropping aur tampering ko prevent karti hai'
          ],
          flashcard: {
            q: '`Content-Type` aur `Accept` headers mein kya difference hai?',
            a: '`Content-Type` batata hai ki client request body mein kaisa data *bhej* raha hai (e.g. application/json); `Accept` server ko batata hai ki client response mein kaisa format *chahta* hai.'
          }
        },
        {
          id: 'rest-http-headers-inspection',
          title: 'HTTP Headers Mastery (Content-Type, Authorization, ETag & X-Request-ID)',
          emoji: '🏷️',
          xpReward: 40,
          badgeName: 'Header Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Headers HTTP request ke ID card aur shipping label hote hain! Authentication token bhejna ho, caching control karni ho, ya request trace karni ho (`X-Request-ID`) — headers ke bina API adhuri hai! 🏷️😎"',
            hint: '💡 Masti Sir: "`Authorization: Bearer <token>` standard format hota hai JWT tokens pass karne ke liye!"',
            success: '🎉 Masti Sir: "HTTP headers mechanics aur custom tracing headers mastered! 🔥"',
            mistake: '😅 Masti Sir: "Custom headers hamesha case-insensitive hote hain standard HTTP specifications ke hisab se!"'
          },
          englishDef: 'HTTP headers are key-value pairs transmitted in request and response messages that convey metadata about the transaction. Primary categories include Representation Headers (`Content-Type`, `Content-Length`), Authentication Headers (`Authorization`), Caching Headers (`Cache-Control`, `ETag`, `If-None-Match`), and Diagnostic/Tracing Headers (`X-Request-ID`, `User-Agent`).',
          hinglishExplain: 'HTTP Headers meta-information carry karte hain. Jaise jab aap courier bhejte ho toh parcel ke upar ek label hota hai (sender address, fragile warning, tracking code). REST APIs mein `Authorization` se token jata hai, `Content-Type` se format pata chalta hai, aur `X-Request-ID` se poore microservices architecture mein request ko trace kiya jata hai.',
          funnyExample: {
            scenario: 'The Security Pass at the Gate:\n- Header: `Authorization: Bearer eyJhbGci...` 🎟️\n- Guard checks the header: "Token verified! User: Kabir (Admin)"\n- If header is missing: Guard rejects with `401 Unauthorized`!\n- If header contains invalid token: Guard rejects with `403 Forbidden`!',
            punchline: 'Headers carry the security badges and routing instructions for every request!'
          },
          visualDiagram: {
            title: 'Core HTTP Headers Functional Categories',
            nodes: [
              'Security: Authorization (Bearer JWT) | Cookie | Strict-Transport-Security',
              'Content Negotiation: Content-Type (application/json) | Accept | Accept-Encoding (gzip)',
              'Caching: Cache-Control (no-cache, max-age=3600) | ETag | If-None-Match',
              'Tracing & CORS: X-Request-ID | Origin | Access-Control-Allow-Origin'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Express.js Parses Headers:',
            steps: [
              'Node.js HTTP parser normalizes all incoming header names to lowercase (`req.headers[\'authorization\']`)',
              'Middleware can attach headers to response stream: `res.setHeader(\'X-Request-ID\', correlationId)`',
              'Headers are transmitted as plaintext CRLF-separated strings before the body payload'
            ]
          },
          code: `// ── EXPRESS.JS MIDDLEWARE: CORRELATION REQUEST-ID & SECURE HEADERS ──
import { randomUUID } from 'crypto';

export function requestTracingMiddleware(req, res, next) {
  // 1. Extract existing correlation ID or generate fresh UUID
  const requestId = req.headers['x-request-id'] || randomUUID();
  req.requestId = requestId;

  // 2. Attach X-Request-ID to outgoing response headers
  res.setHeader('X-Request-ID', requestId);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  console.log(\`[\${new Date().toISOString()}] [\${requestId}] \${req.method} \${req.originalUrl}\`);
  next();
}

// ── EXTRACTING JWT FROM AUTHORIZATION HEADER ──
export function extractAuthToken(req) {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.split(' ')[1]; // Extract raw token string
}`,
          codeBreakdown: [
            { part: "req.headers['x-request-id'] || randomUUID()", label: 'Extracts client tracing correlation ID or generates globally unique identifier', color: '#3b82f6' },
            { part: "res.setHeader('X-Content-Type-Options', 'nosniff')", label: 'Security header preventing browsers from MIME-sniffing away from declared content-type', color: '#10b981' },
            { part: "authHeader.split(' ')[1]", label: 'Extracts pure cryptographic token value by stripping the "Bearer " scheme prefix', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Authorization header mein "Bearer " prefix include kiye bina token parse karna',
            '❌ Sensitive security tokens ko query parameters mein pass karna instead of Authorization headers'
          ],
          miniChallenge: 'Ek middleware banao jo `res.setHeader("X-Response-Time", durationMs)` header attach kare.',
          quiz: {
            question: 'Distributed systems aur microservices mein ek single request ko multiple servers par trace karne ke liye kaunsa header use hota hai?',
            options: ['X-Request-ID / Correlation-ID', 'User-Agent', 'Content-Type', 'Accept-Language'],
            answer: 'X-Request-ID / Correlation-ID',
            explanation: '`X-Request-ID` (ya Correlation ID) har incoming request ko ek unique tracking identifier deta hai jisse logs aur microservice traces connect hote hain.'
          },
          summary: [
            'Headers request aur response ke essential metadata convey karte hain',
            'Authorization Bearer tokens API security ke liye standard convention hain',
            'X-Request-ID distributed system debugging aur observability ko enable karta hai'
          ],
          flashcard: {
            q: '`Authorization: Bearer <token>` mein "Bearer" ka kya matlab hota hai?',
            a: 'Bearer ka matlab hai "jiske paas ye token hai, use access granted hai" (token bearer possesses authorization credentials).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: HTTP METHODS & SEMANTIC OPERATIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: HTTP Methods, Semantic Operations & Idempotency',
      lessons: [
        {
          id: 'rest-http-methods-semantics',
          title: 'Safe vs Idempotent Methods, PUT vs PATCH & Hard vs Soft Delete',
          emoji: '⚙️',
          xpReward: 40,
          badgeName: 'Methods Guru',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PUT poora ghar tod kar dobara banayega, jabki PATCH sirf bedroom ka fan change karega! Aur Idempotent ka matlab: query 1 baar chalao ya 100 baar, result same rahega! 🏠🔧😎"',
            hint: '💡 Masti Sir: "GET, HEAD, OPTIONS safe aur idempotent hain; PUT aur DELETE idempotent hain; POST non-idempotent hota hai!"',
            success: '🎉 Masti Sir: "HTTP methods semantics aur deletion strategies mastered! 🔥"',
            mistake: '😅 Masti Sir: "Partial updates ke liye PUT use mat karna — agar fields missing hue toh data wipe ho sakta hai!"'
          },
          englishDef: 'HTTP methods define semantic operations on resources. A method is **Safe** if it does not alter server state (`GET`, `HEAD`, `OPTIONS`). A method is **Idempotent** if executing it $N$ times produces the identical server state as executing it once (`GET`, `PUT`, `DELETE`). `PUT` replaces the entire target resource, while `PATCH` applies partial delta modifications. Deletions span **Hard Delete** (physical row removal) and **Soft Delete** (`is_deleted = TRUE` audit preservation).',
          hinglishExplain: 'HTTP Methods ke 2 sabse important concepts hote hain:\n1. **Safe Methods**: Jo database mein kuch modify nahi karte (e.g. `GET`).\n2. **Idempotent Methods**: Jinko chahe 1 baar chalao ya 10 baar, database ki final state same rehti hai (e.g. `PUT /users/5`, `DELETE /users/5`).\n`PUT` poora object replace karta hai, jabki `PATCH` sirf bheje gaye specific fields ko update karta hai.',
          funnyExample: {
            scenario: 'The Light Switch Analogy (Idempotency):\n- Press "Turn ON" button (PUT /power/on): Switch turns ON. Press it 10 more times -> Still ON! (Idempotent 💡)\n- Press "Toggle" button (POST /power/toggle): ON -> OFF -> ON -> OFF (Non-Idempotent ⚡)\n- Click "Pay ₹500" (POST /payments): Clicking 2 times deducts ₹1000! (Requires Idempotency Key!) 💸',
            punchline: 'Idempotent operations never create unintended duplicate states!'
          },
          visualDiagram: {
            title: 'HTTP Methods Characteristics Matrix',
            nodes: [
              'GET: Safe (Yes) | Idempotent (Yes) -> Read resource representation',
              'POST: Safe (No) | Idempotent (No) -> Create subordinate resource / trigger action',
              'PUT: Safe (No) | Idempotent (Yes) -> Replace entire resource state',
              'PATCH: Safe (No) | Idempotent (Usually No/Yes) -> Partial modification',
              'DELETE: Safe (No) | Idempotent (Yes) -> Remove resource (Returns 204 or 404)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Hard Delete vs Soft Delete Strategy:',
            steps: [
              'Hard Delete: `DELETE FROM users WHERE id = $1;` physically removes tuple (Cannot recover; destroys foreign key historical integrity)',
              'Soft Delete: `UPDATE users SET is_deleted = TRUE, deleted_at = NOW() WHERE id = $1;` (Preserves audit logs & compliance)',
              'Active queries use filter: `WHERE is_deleted = FALSE` (often indexed via Partial Index)'
            ]
          },
          code: `// ── 1. PUT (COMPLETE RESOURCE REPLACEMENT) ──
app.put('/api/v1/courses/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, price, category } = req.body;

  // PUT requires ALL mandatory fields to be supplied
  if (!title || !price || !category) {
    return res.status(400).json({ success: false, error: 'PUT requires complete entity payload' });
  }

  const updatedCourse = await db.query(
    'UPDATE courses SET title = $1, description = $2, price = $3, category = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
    [title, description || null, price, category, id]
  );

  res.json({ success: true, data: updatedCourse.rows[0] });
});

// ── 2. PATCH (PARTIAL DELTA UPDATE) ──
app.patch('/api/v1/courses/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // e.g. { price: 299 }

  // Dynamically build SET clause only for provided fields
  const fields = Object.keys(updates);
  const values = Object.values(updates);
  const setClause = fields.map((f, i) => \`\${f} = $\${i + 1}\`).join(', ');

  const query = \`UPDATE courses SET \${setClause}, updated_at = NOW() WHERE id = $\${fields.length + 1} RETURNING *\`;
  const result = await db.query(query, [...values, id]);

  res.json({ success: true, data: result.rows[0] });
});`,
          codeBreakdown: [
            { part: 'app.put(...) vs app.patch(...)', label: 'PUT expects complete replacement payload, PATCH applies dynamic partial delta modifications', color: '#3b82f6' },
            { part: 'setClause = fields.map(...)', label: 'Constructs targeted parameterized update SQL string only for supplied request body keys', color: '#10b981' },
            { part: 'RETURNING *', label: 'Returns newly updated database record snapshot in single database round-trip', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `PATCH` endpoint par missing fields ko NULL set kar dena (destructive bug!)',
            '❌ Financial data ya legal transactions par Hard Delete perform karna'
          ],
          miniChallenge: 'Ek `DELETE /api/v1/users/:id` controller likho jo Soft Delete (`deleted_at = NOW()`) implement kare.',
          quiz: {
            question: 'HTTP mein kis method ko Idempotent kaha jata hai?',
            options: [
              'Jise multiple times execute karne par bhi server state par wahi effect padta hai jo 1 baar chalane par padta hai',
              'Jo hamesha 500 status code deta hai',
              'Jo sirf mobile apps mein chalta hai',
              'Jo body accept nahi karta'
            ],
            answer: 'Jise multiple times execute karne par bhi server state par wahi effect padta hai jo 1 baar chalane par padta hai',
            explanation: 'Idempotency ka matlab hai ki operation ko 1 baar run karo ya 100 baar, server par resource ki final state identical rehti hai (jaise PUT ya DELETE).'
          },
          summary: [
            'Safe methods (GET) server state alter nahi karte',
            'Idempotent methods (GET, PUT, DELETE) multiple executions par identical outcome ensure karte hain',
            'Soft Delete enterprise compliance aur historical audit trails preserve karta hai'
          ],
          flashcard: {
            q: '`DELETE` method idempotent kyun hota hai?',
            a: 'Kyonki pehli baar DELETE chalane par resource delete ho jata hai, aur agli 99 baar wahi command chalane par resource already deleted rehta hai — server state change nahi hoti.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: HTTP STATUS CODES & URL DESIGN
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: HTTP Status Codes & Clean URL Resource Design',
      lessons: [
        {
          id: 'rest-status-codes-mastery',
          title: 'Complete HTTP Status Codes Taxonomy (2xx, 3xx, 4xx, 5xx) & Semantic Error Handling',
          emoji: '🚦',
          xpReward: 40,
          badgeName: 'Status Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Status codes backend ka traffic signal hain! 200 = Sab theek hai, 201 = Naya record ban gaya, 401 = Pehle ID dikhao, 403 = Entry denied, 404 = Address sahi tha par banda nahi mila, aur 500 = Server room mein aag lag gayi! 😂🚦"',
            hint: '💡 Masti Sir: "401 (Unauthenticated - Login karo) aur 403 (Forbidden - Permission nahi hai) ke beech ka farak interview mein zaroor poochte hain!"',
            success: '🎉 Masti Sir: "Status codes taxonomy fully mastered! Clean API responses guaranteed! 🔥"',
            mistake: '😅 Masti Sir: "User not found hone par 200 OK ke sath `{ error: \'Not found\' }` return karna criminal offence hai! 404 use karo!"'
          },
          englishDef: 'HTTP Status Codes communicate the outcome of a client request via standard 3-digit numerical categories: **1xx Informational**, **2xx Success** (200 OK, 201 Created, 202 Accepted, 204 No Content), **3xx Redirection** (301 Moved Permanently, 304 Not Modified), **4xx Client Error** (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests), and **5xx Server Error** (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout).',
          hinglishExplain: 'Status codes frontend developer ko 1 microsecond mein bata dete hain ki request ka kya hua:\n- **200 OK**: Request successful.\n- **201 Created**: Naya record (user/order) create ho gaya (`POST` ke baad).\n- **204 No Content**: Action successful raha par wapas bhejne ke liye koi body nahi hai (`DELETE` ke baad).\n- **400 Bad Request**: Client ne invalid data bheja.\n- **401 Unauthorized**: User login nahi hai (Token missing ya expired).\n- **403 Forbidden**: User login hai par permission nahi hai (e.g. Student trying to delete course).\n- **404 Not Found**: Resource exist nahi karta.\n- **409 Conflict**: Duplicate email ya race condition conflict.\n- **429 Too Many Requests**: Rate limit exceed ho gaya.',
          funnyExample: {
            scenario: 'The Nightclub Bouncer Experience:\n- 200 OK: "Welcome back VIP member!" 🎟️\n- 201 Created: "Here is your brand new VIP membership card!" 💳✨\n- 401 Unauthorized: "Where is your ID card? Please login first!" 🛑\n- 403 Forbidden: "I see your ID, but this is the VIP lounge and you have a regular ticket!" 🚫\n- 404 Not Found: "The VIP lounge you are looking for does not exist on this floor!" 🤷‍♂️\n- 429 Too Many Requests: "Slow down! You rang the doorbell 50 times in 1 second!" 🚨',
            punchline: 'Status codes are the universal vocabulary of web servers!'
          },
          visualDiagram: {
            title: 'HTTP Status Code Categories Hierarchy',
            nodes: [
              '2xx Success: 200 (OK) | 201 (Created) | 202 (Accepted Async) | 204 (No Content)',
              '3xx Redirection: 301 (Moved Permanently) | 304 (Not Modified - Cached ETag)',
              '4xx Client Error: 400 (Bad Request) | 401 (Unauthenticated) | 403 (Forbidden) | 404 (Not Found) | 409 (Conflict) | 422 (Validation) | 429 (Rate Limit)',
              '5xx Server Error: 500 (Internal Error) | 502 (Bad Gateway Proxy) | 503 (Overloaded) | 504 (Timeout)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: '401 vs 403 vs 404 Security Best Practice:',
            steps: [
              '401 Unauthorized: Set `WWW-Authenticate` header indicating missing/expired Bearer token',
              '403 Forbidden: User identity is known but access control policy (RBAC) forbids operation',
              '404 Not Found vs 403: For top-secret internal admin resources, returning 404 instead of 403 prevents attackers from discovering valid hidden endpoints'
            ]
          },
          code: `// ── EXPRESS.JS CONTROLLER WITH PRECISE SEMANTIC STATUS CODES ──

// 1. POST: 201 Created on New Resource Generation
app.post('/api/v1/courses', async (req, res) => {
  const { title, price } = req.body;
  if (!title || price === undefined) {
    return res.status(400).json({ success: false, error: 'Title and price are required' });
  }

  const existing = await db.query('SELECT id FROM courses WHERE title = $1', [title]);
  if (existing.rows.length > 0) {
    return res.status(409).json({ success: false, error: 'Course title already exists' });
  }

  const result = await db.query('INSERT INTO courses (title, price) VALUES ($1, $2) RETURNING *', [title, price]);
  res.status(201).json({ success: true, data: result.rows[0] });
});

// 2. DELETE: 204 No Content on Successful Removal
app.delete('/api/v1/courses/:id', async (req, res) => {
  const { id } = req.params;
  const result = await db.query('DELETE FROM courses WHERE id = $1', [id]);

  if (result.rowCount === 0) {
    return res.status(404).json({ success: false, error: 'Course not found' });
  }

  // 204 No Content sends zero body bytes
  res.status(204).send();
});`,
          codeBreakdown: [
            { part: 'res.status(201).json(...)', label: 'Returns 201 Created status confirming successful entity initialization', color: '#3b82f6' },
            { part: 'res.status(409).json(...)', label: 'Returns 409 Conflict when unique duplicate constraint violation occurs', color: '#10b981' },
            { part: 'res.status(204).send();', label: 'Returns 204 No Content on successful deletion without transmitting unnecessary response body payload', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Successful resource creation par `200 OK` return karna instead of `201 Created`',
            '❌ Empty response ke sath `204 No Content` bhejne ke bawajood body payload bhejna (204 must have zero body bytes)'
          ],
          miniChallenge: 'Ek endpoint likho jo async background job start karke `202 Accepted` status code return kare.',
          quiz: {
            question: 'Ek user valid login credentials ke sath authenticated hai, lekin wo doosre user ka private profile delete karne ki koshish karta hai. Server ko kaunsa status code return karna chahiye?',
            options: ['401 Unauthorized', '403 Forbidden', '404 Not Found', '500 Internal Server Error'],
            answer: '403 Forbidden',
            explanation: 'User authenticated hai (isliye 401 nahi aayega), lekin uske paas specific resource modify karne ki authorization permission nahi hai (isliye 403 Forbidden correct code hai).'
          },
          summary: [
            'Status codes client ko execution outcome communicate karte hain',
            '201 Created nayi entities ke liye aur 204 No Content deletions ke liye use hota hai',
            '401 Authentication failure hai aur 403 Authorization permission failure hai'
          ],
          flashcard: {
            q: '`422 Unprocessable Entity` kab use hota hai?',
            a: 'Jab request format valid JSON ho, lekin uske andar ka business data invalid ho (jaise `age: -5` ya invalid email format).'
          }
        },
        {
          id: 'rest-url-design-parameters',
          title: 'Resource-Oriented URL Design, Path vs Query Parameters & JSON Body',
          emoji: '🔗',
          xpReward: 40,
          badgeName: 'URL Designer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "URL ko clean aur predictable rakho! Specific resource identify karna ho toh Path Param (`/users/10`), filtering/sorting karni ho toh Query Param (`?status=active&sort=price`)! Confusion zero! 🔗😎"',
            hint: '💡 Masti Sir: "Plural nouns use karo (`/users`, `/courses`) — singular (`/user`) REST conventions mein avoid kiya jata hai!"',
            success: '🎉 Masti Sir: "Clean RESTful URL hierarchies successfully designed! 🔥"',
            mistake: '😅 Masti Sir: "Sensitive authentication tokens ko query parameters mein pass mat karna — URLs browser history aur server access logs mein save ho jaate hain!"'
          },
          englishDef: 'RESTful URL design is resource-oriented, utilizing hierarchical plural nouns. **Path Parameters** (`/users/:userId/orders/:orderId`) identify specific unique resources within the hierarchy. **Query Parameters** (`?page=2&limit=20&sort=-createdAt&status=active`) filter, paginate, sort, and search collections without altering the base resource URI.',
          hinglishExplain: 'REST URLs mein do tarah ke parameters hote hain:\n1. **Path Parameters**: Kisi specific resource ki pehchan ke liye use hote hain (e.g. `/courses/101` ya `/users/45/orders/9`).\n2. **Query Parameters**: List ko filter, sort, search ya paginate karne ke liye use hote hain (e.g. `/courses?category=backend&page=1&sort=price`). Query parameters question mark `?` se start hote hain aur `&` se judte hain.',
          funnyExample: {
            scenario: 'The Library Shelf Analogy:\n- Path Parameter: "Aisle 4 -> Shelf 2 -> Book #84" (`/aisles/4/shelves/2/books/84`) 📚 (Exact physical location!)\n- Query Parameter: "Give me all science books written in English after Year 2020 sorted by rating!" (`/books?genre=science&lang=en&minYear=2020&sort=-rating`) 🔍 (Filter criteria!)',
            punchline: 'Path params pinpoint the entity, Query params filter the collection!'
          },
          visualDiagram: {
            title: 'Path Parameters vs Query Parameters Decision Tree',
            nodes: [
              'Does the value identify a specific unique resource? -> Use PATH PARAM (/users/:id)',
              'Is the value filtering, sorting, paginating, or searching a collection? -> Use QUERY PARAM (?page=1&sort=date)',
              'Is the value a large, complex, nested payload for creation/update? -> Use REQUEST BODY (JSON)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'URL Decoding & Query Parser in Node.js:',
            steps: [
              'Incoming URL: `/api/v1/search?q=Node%20JS&tags=react&tags=sql`',
              'Node.js URL parser decodes percent-encoded characters (`Node%20JS` -> `Node JS`)',
              'Query parser constructs JavaScript object: `{ q: \'Node JS\', tags: [\'react\', \'sql\'] }`'
            ]
          },
          code: `-- ── RESOURCE URL DESIGN CHEAT SHEET ──

-- GOOD RESTful Design (Nouns, Hierarchical, Plural):
GET    /api/v1/users                      -- List users (supports ?page=1&role=mentor)
GET    /api/v1/users/45                   -- Fetch single user #45
POST   /api/v1/users                      -- Create new user
PATCH  /api/v1/users/45                   -- Update user #45
DELETE /api/v1/users/45                   -- Delete user #45

-- Nested Sub-Resources:
GET    /api/v1/courses/101/lessons        -- List all lessons of course #101
POST   /api/v1/courses/101/lessons        -- Create new lesson inside course #101
GET    /api/v1/courses/101/lessons/5      -- Fetch lesson #5 of course #101

-- Complex Actions that are not pure CRUD:
POST   /api/v1/courses/101/publish        -- State transition action
POST   /api/v1/auth/reset-password        -- Security workflow`,
          codeBreakdown: [
            { part: 'GET /api/v1/courses/101/lessons', label: 'Nested sub-resource relationship mapping parent course entity to child lessons collection', color: '#3b82f6' },
            { part: '?page=1&role=mentor', label: 'Query string filtering and pagination arguments applied dynamically without altering base URI', color: '#10b981' },
            { part: 'POST /api/v1/courses/101/publish', label: 'Controller action sub-route for state transitions when standard CRUD verb does not fit naturally', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Singular URL names use karna (`/course/101` ❌ vs `/courses/101` ✅)',
            '❌ Deeply nested URLs banate jana beyond 2 levels (e.g. `/orgs/1/teams/2/projects/3/tasks/4/comments/5` -> flatten to `/comments/5`)'
          ],
          miniChallenge: 'E-commerce orders aur order items ke liye 4 standard nested RESTful endpoints design karo.',
          quiz: {
            question: 'Course catalog mein se sirf "backend" category wale courses price ke hisab se sort karke fetch karne ke liye kaunsa URL format standard RESTful best practice hai?',
            options: [
              '/api/v1/getBackendCoursesSortedByPrice',
              '/api/v1/courses?category=backend&sort=price',
              '/api/v1/courses/backend/sort/price',
              '/api/v1/filter?type=courses&cat=backend'
            ],
            answer: '/api/v1/courses?category=backend&sort=price',
            explanation: 'Plural noun resource `/api/v1/courses` ke sath query parameters `?category=backend&sort=price` filtering aur sorting ka standard RESTful approach hai.'
          },
          summary: [
            'Resource URLs plural nouns use karte hain (`/users`, `/products`)',
            'Path parameters entity identity specify karte hain (`:id`)',
            'Query parameters filtering, sorting aur pagination manage karte hain'
          ],
          flashcard: {
            q: 'Deep nesting (3+ levels) se bachne ke liye REST APIs mein kya strategy use hoti hai?',
            a: 'Resource URLs ko **Flatten** kiya jata hai — child collections fetch karne ke liye `/courses/10/lessons` theek hai, lekin specific lesson modify karne ke liye direct `/lessons/45` use karte hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: CLEAN BACKEND ARCHITECTURE & CONTROLLERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Clean Architecture, Routing & Controllers',
      lessons: [
        {
          id: 'rest-architecture-controllers-services',
          title: 'Clean Architecture: Routes, Controllers, Services & Repositories',
          emoji: '🏗️',
          xpReward: 45,
          badgeName: 'Clean Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Poora business logic, database queries, aur validation ek hi route file mein mat thons dena! Routes -> Controllers -> Services -> Repositories! Separation of Concerns rakhoge toh code clean aur testable rahega! 🏗️😎"',
            hint: '💡 Masti Sir: "Controller ka kaam sirf HTTP request lena aur response dena hai; actual business logic Service layer mein rehta hai!"',
            success: '🎉 Masti Sir: "Production-grade Clean N-Tier Architecture successfully built! 🔥"',
            mistake: '😅 Masti Sir: "Controllers ko 1000 lines ka \'Fat Controller\' mat banao — business rules Service layer mein extract karo!"'
          },
          englishDef: 'Production REST APIs adhere to Layered Clean Architecture: **Routes** (define endpoints and bind middleware), **Controllers** (extract HTTP request data, invoke services, and return HTTP responses), **Services** (contain pure business logic, calculations, and orchestrate workflows), and **Repositories/Models** (handle raw database I/O and query execution).',
          hinglishExplain: 'Professional backend projects mein 4-tier layered architecture use hoti hai:\n1. **Routes**: Endpoints define karte hain aur validation/auth middleware lagate hain.\n2. **Controllers**: Request se data nikaalte hain (`req.params`, `req.body`) aur service ko bhejte hain.\n3. **Services**: Asli business logic chalate hain (discount calculate karna, payment initiate karna, email bhejna).\n4. **Repositories/Data Access**: Database queries (`SELECT`, `INSERT`) execute karte hain.',
          funnyExample: {
            scenario: 'The Corporate Office Division of Work:\n- Receptionist (Route) = Directs visitor to correct department 🏢\n- Account Manager (Controller) = Takes client request, checks paperwork 📋\n- Operations Expert (Service) = Executes the core business calculation & workflow ⚙️\n- Database Vault Keeper (Repository) = Fetches files from physical storage cabinets 🗄️',
            punchline: 'Each layer does one job and does it exceptionally well!'
          },
          visualDiagram: {
            title: '4-Tier Layered API Architecture Pipeline',
            nodes: [
              'HTTP Request -> Route Layer (middleware guards)',
              'Controller Layer (HTTP req/res parsing & status code mapping)',
              'Service Layer (Pure business logic & orchestration)',
              'Repository / Data Access Layer (SQL queries / ORM models)',
              'Database (PostgreSQL / MongoDB)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Layered Architecture Enables Unit Testing:',
            steps: [
              'Services have no dependency on Express `req` or `res` objects',
              'Services can be tested in pure isolation by mocking the database repository',
              'Switching database engines (e.g. Postgres to Mongo) only requires updating the Repository layer without touching business logic'
            ]
          },
          code: `// ── 1. ROUTE DEFINITION (course.routes.js) ──
import express from 'express';
import * as courseController from '../controllers/course.controller.js';
import { authenticateUser, requireAdmin } from '../middleware/auth.middleware.js';
import { validateBody } from '../middleware/validator.middleware.js';
import { createCourseSchema } from '../validators/course.schema.js';

export const courseRouter = express.Router();

courseRouter.get('/', courseController.getAllCourses);
courseRouter.get('/:id', courseController.getCourseById);
courseRouter.post('/', authenticateUser, requireAdmin, validateBody(createCourseSchema), courseController.createCourse);

// ── 2. CONTROLLER LAYER (course.controller.js) ──
import * as courseService from '../services/course.service.js';

export async function createCourse(req, res, next) {
  try {
    const newCourse = await courseService.registerNewCourse(req.body, req.user.id);
    res.status(201).json({ success: true, data: newCourse });
  } catch (error) {
    next(error); // Forward to Central Error Middleware
  }
}

// ── 3. SERVICE LAYER (course.service.js) ──
import * as courseRepo from '../repositories/course.repository.js';

export async function registerNewCourse(courseData, instructorId) {
  // Business logic: verify title uniqueness & calculate default pricing tiers
  const isDuplicate = await courseRepo.findByTitle(courseData.title);
  if (isDuplicate) {
    const error = new Error('A course with this title already exists');
    error.statusCode = 409;
    throw error;
  }

  return await courseRepo.insertCourse({ ...courseData, instructorId });
}`,
          codeBreakdown: [
            { part: 'courseRouter.post("/", authenticateUser, ...)', label: 'Declarative middleware chain validating auth tokens and request body before controller execution', color: '#3b82f6' },
            { part: 'res.status(201).json({ success: true, data })', label: 'Controller handles pure HTTP status mapping and JSON response envelope construction', color: '#10b981' },
            { part: 'export async function registerNewCourse(...)', label: 'Service encapsulates pure business validation rules independent of HTTP framework', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Express `req` aur `res` objects ko direct service ya repository layer ke andar pass karna',
            '❌ Controller functions ke andar direct raw SQL queries likhna'
          ],
          miniChallenge: 'Ek `user.service.js` function likho jo user register karne se pehle password hash kare aur repository call kare.',
          quiz: {
            question: 'Clean Layered Architecture mein business logic (jaise discounts calculate karna ya fraud check karna) kis layer mein hona chahiye?',
            options: ['Route layer', 'Controller layer', 'Service layer', 'Database view'],
            answer: 'Service layer',
            explanation: '`Service layer` pure business logic aur domain workflows ko encapsulate karti hai, keeping controllers slim and focused only on HTTP translation.'
          },
          summary: [
            'Layered architecture separation of concerns aur maintainability provide karti hai',
            'Controllers HTTP status codes aur JSON serialization handle karte hain',
            'Services pure testable business logic contain karti hain'
          ],
          flashcard: {
            q: 'Slim Controllers vs Fat Controllers mein kya farak hai?',
            a: 'Slim Controllers sirf HTTP req se data nikaal kar Service ko delegate karte hain (5-10 lines); Fat Controllers mein validation, database queries aur business logic mix hota hai jo maintain aur test karna mushkil hota hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: MIDDLEWARE, VALIDATION & ERROR HANDLING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Middleware, Request Validation & Centralized Error Handling',
      lessons: [
        {
          id: 'rest-middleware-pipeline',
          title: 'Express Middleware Pipeline (req, res, next) & Centralized Error Handling',
          emoji: '⛓️',
          xpReward: 45,
          badgeName: 'Middleware Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har controller mein duplicate try-catch likhne ki zaroorat nahi hai! Central Error Handling Middleware banao — error aaye toh `next(error)` feko aur ek hi global handler sabko handle kar lega! ⛓️😎"',
            hint: '💡 Masti Sir: "Error handling middleware ke function signature mein 4 arguments hona mandatory hai: `(err, req, res, next)` — 4 args dekh kar hi Express use error handler maanta hai!"',
            success: '🎉 Masti Sir: "Centralized error handling and async middleware pipeline fully operational! 🔥"',
            mistake: '😅 Masti Sir: "Production par database connection string ya stack trace error response mein client ko leak mat karna!"'
          },
          englishDef: 'Middleware functions in Express intercept the HTTP request-response cycle, executing sequentially via the `next()` callback. Express distinguishes standard middleware `(req, res, next)` from **Centralized Error Handling Middleware** `(err, req, res, next)`. Centralized error handling standardizes error payloads, sanitizes internal database exceptions, and logs issues uniformly.',
          hinglishExplain: 'Middleware ek security check post jaisa hota hai jo request ke controller tak pahunchne se pehle execute hota hai (jaise authentication verify karna, request log karna, rate limit check karna). Centralized Error Handling Middleware poore application ke errors ko ek single function mein catch karta hai, stack trace ko hide karta hai aur client ko clean, professional JSON error message bhejta hai.',
          funnyExample: {
            scenario: 'The Airport Security Checkpoints:\n- Checkpoint 1 (Logging Middleware): Scans passport & stamps time 🛂\n- Checkpoint 2 (Auth Middleware): Verifies boarding pass 🎫\n- Checkpoint 3 (Validation Middleware): Checks luggage weight limit 🧳\n- If any check fails -> Diverted to Red Emergency Desk (Global Error Handler)! 🚨',
            punchline: 'Middleware guarantees that invalid requests are stopped at the gate!'
          },
          visualDiagram: {
            title: 'Express Request Middleware & Error Pipeline',
            nodes: [
              'Incoming Request -> Logger Middleware (next())',
              '-> Authentication Middleware (next())',
              '-> Controller executes -> Throws Error -> next(err)',
              '-> Jumps straight to Central Error Handler (err, req, res, next)',
              '-> Returns Standardized JSON Error Response'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Custom AppError Class Architecture:',
            steps: [
              'Create custom `AppError extends Error` class containing `statusCode`, `errorCode`, and `isOperational` flags',
              'Distinguishes trusted operational errors (e.g. 404 Not Found, 400 Bad Input) from programming bugs (e.g. TypeError, Database disconnect)',
              'Catches unhandled promise rejections globally'
            ]
          },
          code: `// ── 1. CUSTOM OPERATIONAL ERROR CLASS (AppError.js) ──
export class AppError extends Error {
  constructor(message, statusCode, errorCode = 'INTERNAL_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// ── 2. CENTRALIZED ERROR HANDLING MIDDLEWARE (error.middleware.js) ──
export function globalErrorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const errorCode = err.errorCode || 'INTERNAL_SERVER_ERROR';

  // Structured Server Log
  console.error(\`[\${new Date().toISOString()}] [\${req.requestId || 'NO-ID'}] ERROR \${statusCode}: \${err.message}\`);
  if (!err.isOperational) {
    console.error(err.stack); // Print full stack trace only to server logs for unhandled bugs
  }

  // Sanitized Client Response (Never expose raw database stack traces in production!)
  res.status(statusCode).json({
    success: false,
    error: {
      code: errorCode,
      message: err.isOperational ? err.message : 'An unexpected server error occurred. Please try again later.'
    }
  });
}`,
          codeBreakdown: [
            { part: 'class AppError extends Error', label: 'Custom operational error class encapsulating HTTP status codes and custom domain error tokens', color: '#3b82f6' },
            { part: '(err, req, res, next)', label: 'Special 4-parameter signature registering middleware strictly as global error interception boundary', color: '#10b981' },
            { part: 'err.isOperational ? err.message : "..."', label: 'Security defense: prevents internal database table names or credentials from leaking to public clients', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Error middleware mein 4 arguments ki jagah 3 arguments likh dena (Express will treat it as standard middleware and miss errors)',
            '❌ Async functions mein error aane par `next(error)` call na karna (causes request to hang until timeout)'
          ],
          miniChallenge: 'Ek `asyncHandler` wrapper utility function likho jo `Promise.resolve(fn(req, res, next)).catch(next)` execute kare.',
          quiz: {
            question: 'Express.js mein kisi middleware ko Global Error Handling Middleware banaye rakhne ke liye function ke kitne arguments hona mandatory hai?',
            options: ['2 arguments (req, res)', '3 arguments (req, res, next)', '4 arguments (err, req, res, next)', 'Sirf 1 argument'],
            answer: '4 arguments (err, req, res, next)',
            explanation: 'Express.js function ke `length` property (4 parameters: `err, req, res, next`) ko check karke identify karta hai ki ye error-handling middleware hai.'
          },
          summary: [
            'Middleware sequential request interception provide karta hai',
            'Centralized error middleware code duplication eliminate karta hai',
            'Operational errors aur unexpected system bugs ko distinctly separate karna zaroori hai'
          ],
          flashcard: {
            q: '`asyncHandler` utility ka kya fayda hota hai?',
            a: 'Ye async route controllers ko wrap karta hai taaki aapko har controller ke andar baar baar `try { ... } catch(err) { next(err) }` na likhna pade.'
          }
        },
        {
          id: 'rest-validation-error-responses',
          title: 'Request Validation with Zod/Joi & Predictable JSON Response Envelopes',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Validation Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Client se aane wale data par kabhi andha vishwas mat karo! Email galat hai, age negative hai, ya password chhota hai — Zod validation schema se request ko gate par hi rok do! 🛡️😎"',
            hint: '💡 Masti Sir: "Validation middleware `req.body`, `req.query`, aur `req.params` teeno ko validate karta hai!"',
            success: '🎉 Masti Sir: "Strict type validation and clean error envelopes active! 🔥"',
            mistake: '😅 Masti Sir: "Validation errors aane par 400 Bad Request ya 422 Unprocessable Entity status code bhejo!"'
          },
          englishDef: 'Input validation is the primary security defense against malformed data, injection attacks, and business logic corruption. Schema validation libraries like **Zod** or **Joi** enforce runtime contracts on `req.body`, `req.params`, and `req.query`. When validation fails, servers return `422 Unprocessable Entity` or `400 Bad Request` with structured field-level error messages.',
          hinglishExplain: 'Database mein invalid data jane se rokne ke liye Input Validation pehla defence hota hai. Hum **Zod** schema define karte hain (jaise email format valid hona chahiye, password minimum 8 characters hona chahiye, age 18 se 100 ke beech honi chahiye). Agar data galat hota hai toh validation middleware controller chalne se pehle hi request reject karke exact field error return kar deta hai.',
          funnyExample: {
            scenario: 'The Passport Application Officer:\n- User submits: Name: "", Age: -5, Email: "not-an-email" 📝🤦‍♂️\n- Validation Schema Bouncer:\n  • Name: "Required"\n  • Age: "Must be at least 18"\n  • Email: "Invalid email format"\n- Result: Instant 422 response with exact field pointers!',
            punchline: 'Validation schemas ensure only pristine data reaches your database!'
          },
          visualDiagram: {
            title: 'Zod Request Validation Pipeline',
            nodes: [
              'Incoming Request Body: {"email": "invalid", "price": -50}',
              'Zod Schema Validator Middleware (safeParse)',
              'Validation Fails! Formats field error dictionary',
              'Returns HTTP 422 Unprocessable Entity directly to Client'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Zod safeParse vs parse:',
            steps: [
              '`schema.parse(data)` throws an exception on failure',
              '`schema.safeParse(data)` returns `{ success: true, data }` or `{ success: false, error }` without throwing, ideal for middleware',
              'Sanitized and coerced valid output is assigned back to `req.body`'
            ]
          },
          code: `// ── 1. ZOD VALIDATION SCHEMA DEFINITION (user.schema.js) ──
import { z } from 'zod';

export const registerUserSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(30),
  email: z.string().email('Invalid email address format'),
  password: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  role: z.enum(['student', 'mentor']).default('student')
});

// ── 2. REUSABLE VALIDATION MIDDLEWARE ──
export function validateRequest(schema, source = 'body') {
  return (req, res, next) => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      const fieldErrors = result.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }));

      return res.status(422).json({
        success: false,
        error: {
          code: 'VALIDATION_FAILED',
          message: 'Invalid request input parameters',
          details: fieldErrors
        }
      });
    }

    req[source] = result.data; // Assign sanitized/coerced data
    next();
  };
}`,
          codeBreakdown: [
            { part: 'z.string().email().min(8)', label: 'Declarative type safety schema enforcing format, length, and regex security rules at runtime', color: '#3b82f6' },
            { part: 'schema.safeParse(req[source])', label: 'Safe non-throwing validation execution returning clean boolean success status and errors', color: '#10b981' },
            { part: 'status(422).json({ details: fieldErrors })', label: 'Returns standard 422 Unprocessable Entity envelope with detailed field-level error mapping', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Validation fail hone par 200 OK return karna',
            '❌ User input ko sanitize kiye bina direct database query mein pass karna'
          ],
          miniChallenge: 'Ek Zod schema banao jo course creation payload (`title`, `price` positive number, `category`) validate kare.',
          quiz: {
            question: 'REST APIs mein request payload schema validation fail hone par kaunsa HTTP status code return karna industry standard best practice hai?',
            options: ['200 OK', '404 Not Found', '422 Unprocessable Entity (or 400 Bad Request)', '500 Internal Server Error'],
            answer: '422 Unprocessable Entity (or 400 Bad Request)',
            explanation: '`422 Unprocessable Entity` (ya `400 Bad Request`) indicate karta hai ki client request syntax theek tha par data semantic validation rules satisfy nahi kar raha.'
          },
          summary: [
            'Input validation API security ka first line of defense hai',
            'Zod runtime schema enforcement aur sanitization provide karta hai',
            'Field-level structured error messages frontend forms ko highlight karne mein help karte hain'
          ],
          flashcard: {
            q: 'Field-level validation error format kaisa hona chahiye?',
            a: 'Array of objects format hona chahiye jisme har object mein target field aur specific error message ho: `details: [{ field: "email", message: "Invalid email" }]`.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: ADVANCED QUERYING (PAGINATION, FILTERING, SORTING)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Advanced Querying: Pagination, Filtering, Sorting & Search',
      lessons: [
        {
          id: 'rest-pagination-offset-cursor',
          title: 'Offset vs Keyset (Cursor) Pagination Envelopes & Large Dataset Optimization',
          emoji: '📑',
          xpReward: 45,
          badgeName: 'Pagination Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "10 lakh records hain aur aap `OFFSET 500000` kar rahe ho? Database ro padega! Normal pages ke liye Offset Pagination use karo, par Instagram-style infinite scroll feeds ke liye Keyset Cursor Pagination use karo! 🚀📑😎"',
            hint: '💡 Masti Sir: "Keyset pagination mein `WHERE id > last_seen_id LIMIT 20` chalta hai jo B-Tree index ki wajah se O(1) instant seek karta hai!"',
            success: '🎉 Masti Sir: "High-performance pagination envelopes successfully engineered! 🔥"',
            mistake: '😅 Masti Sir: "Pagination metadata envelope mein `totalItems`, `totalPages`, aur `hasNextPage` zaroor provide karein!"'
          },
          englishDef: 'REST APIs manage large datasets using pagination strategies: **Offset Pagination** (`?page=2&limit=20`, easy page jumping via `OFFSET (page - 1) * limit`, but suffers $O(N)$ scanning penalty on deep pages and data drift during concurrent inserts) and **Keyset/Cursor Pagination** (`?cursor=eyJpZCI6NDV9&limit=20`, uses indexed column boundary `WHERE id > last_id`, providing deterministic $O(1)$ performance for infinite scroll feeds).',
          hinglishExplain: 'Pagination API data ko chote chote tukdo (pages) mein divide karti hai taaki server aur browser hang na ho. Do main types hote hain:\n1. **Offset Pagination**: Classic page numbers (Page 1, Page 2, Page 3). Yeh admin tables ke liye best hai.\n2. **Cursor Pagination**: Next page ka pointer/cursor use karta hai. Yeh infinite scroll feeds (Twitter/Instagram) ke liye best hai kyonki naye posts aane par duplicates nahi aate aur speed hamesha instant rehti hai.',
          funnyExample: {
            scenario: 'The Dictionary Page Search:\n- Offset Pagination: "Flip past 500,000 words one by one until you reach word 500,001" 📖🐢 (Slow!)\n- Cursor Pagination: "Open directly to the bookmark labeled \'PostgreSQL\'" 📑⚡ (Instant O(1) jump!)',
            punchline: 'Cursor pagination scales infinitely without breaking a sweat!'
          },
          visualDiagram: {
            title: 'Offset Pagination vs Keyset Cursor Flow',
            nodes: [
              'Offset Pagination: GET /courses?page=5000&limit=20 -> Database scans 100,000 rows & discards 99,980 rows (Slow)',
              'Cursor Pagination: GET /courses?cursor=25000&limit=20 -> WHERE id > 25000 LIMIT 20 -> Direct B-Tree Index Seek (Instant)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'The Data Drift Problem in Offset Pagination:',
            steps: [
              'User is on Page 1 viewing items #1 to #10',
              'Another user inserts 5 new items at the top of the table',
              'When User clicks Page 2 (OFFSET 10), items #6 to #10 are shifted down and appear again (Duplicate rows!)',
              'Cursor pagination completely eliminates data drift'
            ]
          },
          code: `// ── 1. OFFSET PAGINATION ENDPOINT CONTROLLER ──
app.get('/api/v1/courses', async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
  const offset = (page - 1) * limit;

  // 1. Fetch paginated slice & total count in parallel
  const [dataResult, countResult] = await Promise.all([
    db.query('SELECT id, title, price, category FROM courses ORDER BY id ASC LIMIT $1 OFFSET $2', [limit, offset]),
    db.query('SELECT COUNT(*) AS total FROM courses')
  ]);

  const totalItems = parseInt(countResult.rows[0].total);
  const totalPages = Math.ceil(totalItems / limit);

  // 2. Standard Pagination Envelope
  res.json({
    success: true,
    data: dataResult.rows,
    pagination: {
      currentPage: page,
      limit,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  });
});

// ── 2. HIGH-PERFORMANCE CURSOR PAGINATION ENDPOINT ──
app.get('/api/v1/feed', async (req, res) => {
  const limit = Math.min(50, parseInt(req.query.limit) || 20);
  const cursor = req.query.cursor ? parseInt(req.query.cursor) : 0;

  const result = await db.query(
    'SELECT id, title, created_at FROM feed_posts WHERE id > $1 ORDER BY id ASC LIMIT $2',
    [cursor, limit + 1] // Fetch 1 extra to detect next page
  );

  const hasNextPage = result.rows.length > limit;
  const items = hasNextPage ? result.rows.slice(0, limit) : result.rows;
  const nextCursor = items.length > 0 ? items[items.length - 1].id : null;

  res.json({
    success: true,
    data: items,
    pageInfo: {
      nextCursor,
      hasNextPage
    }
  });
});`,
          codeBreakdown: [
            { part: 'const offset = (page - 1) * limit;', label: 'Calculates row discard offset boundary for classic numerical page slicing', color: '#3b82f6' },
            { part: 'pagination: { totalPages, hasNextPage, ... }', label: 'Complete pagination metadata envelope allowing client UI to render page navigation controls', color: '#10b981' },
            { part: 'WHERE id > $1 ... LIMIT $2', label: 'Keyset cursor seek utilizing B-Tree index logarithmic seek without scanning discarded offsets', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Client ko `limit` parameter par koi upper ceiling na lagana (e.g. user requesting `?limit=1000000` crashes server memory)',
            '❌ Offset pagination mein negative page numbers ya non-integer values handle na karna'
          ],
          miniChallenge: 'Ek pagination controller likho jisme max limit 50 enforced ho aur invalid page numbers 1 par fallback karein.',
          quiz: {
            question: 'Social media infinite scroll feeds (Twitter/Instagram) ke liye Keyset (Cursor) Pagination Offset Pagination se behtar kyun maani jaati hai?',
            options: [
              'Kyonki ye naye posts aane par duplicate items prevent karti hai aur millions of rows par O(1) instant speed deti hai',
              'Kyonki isme database ki zaroorat nahi hoti',
              'Kyonki ye sirf mobile phones par chalti hai',
              'Kyonki ye body accept nahi karti'
            ],
            answer: 'Kyonki ye naye posts aane par duplicate items prevent karti hai aur millions of rows par O(1) instant speed deti hai',
            explanation: 'Cursor pagination last seen item ke ID/timestamp boundary par index seek karti hai, eliminating data drift duplicates and deep offset query latency.'
          },
          summary: [
            'Pagination large datasets ko controlled chunks mein stream karti hai',
            'Offset pagination admin tables ke liye standard hai',
            'Cursor pagination high-scale infinite feeds ke liye gold standard hai'
          ],
          flashcard: {
            q: 'Pagination mein `limit` capping lagana kyun zaroori hai?',
            a: 'Agar limit cap na ho toh malicious user `?limit=500000` bhej kar poori table RAM mein load karwa sakta hai jisse Denial of Service (DoS) memory crash ho jayega.'
          }
        },
        {
          id: 'rest-filtering-sorting-search',
          title: 'Whitelisted Filtering, Multi-Field Sorting & Safe Search Queries',
          emoji: '🔍',
          xpReward: 45,
          badgeName: 'Query Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Client bol raha hai `?sort=price` ya `?sort=-createdAt` — user input ko direct SQL query mein mat chipka dena! Whitelisting karo taaki SQL injection aur server crash se bacho! 🛡️🔍😎"',
            hint: '💡 Masti Sir: "Prefix minus sign (`-createdAt`) descending sort represent karta hai, normal (`price`) ascending sort represent karta hai!"',
            success: '🎉 Masti Sir: "Secure filtering, sorting and search endpoints successfully built! 🔥"',
            mistake: '😅 Masti Sir: "Dynamic sorting mein column names ko parameter `$1` ki tarah bind nahi kiya ja sakta — column whitelisting zaroori hai!"'
          },
          englishDef: 'Advanced REST collection querying supports dynamic filtering (`/products?category=mobile&minPrice=100`), multi-field sorting (`?sort=-price,title`), and search. Security requires **Strict Whitelisting** of allowed filter keys and sort columns to prevent SQL injection and unauthorized data leakage.',
          hinglishExplain: 'REST APIs mein collection ko search aur sort karne ke liye Query Parameters use hote hain:\n1. **Filtering**: `?category=backend&isPublished=true`\n2. **Sorting**: `?sort=-price` (Highest price first) ya `?sort=createdAt` (Oldest first).\n3. **Search**: `?q=javascript`.\nSecurity ke liye backend par allowed sort fields ki whitelist check karni mandatory hoti hai.',
          funnyExample: {
            scenario: 'The Restaurant Menu Filter:\n- Customer asks: "Show me Vegetarian dishes under ₹300, sorted by Rating!" 🍲\n- API Request: `GET /dishes?type=veg&maxPrice=300&sort=-rating`\n- Backend: Checks whitelist -> Validates numbers -> Returns exact matching dishes in 2ms! ⚡',
            punchline: 'Clean query params provide powerful e-commerce search experiences!'
          },
          visualDiagram: {
            title: 'Dynamic Query Builder with Security Whitelisting',
            nodes: [
              'Incoming Query: ?category=backend&minPrice=200&sort=-price',
              'Whitelist Validation (Allowed: [category, isPublished, price, createdAt])',
              'Builds Parameterized SQL: WHERE category = $1 AND price >= $2 ORDER BY price DESC',
              'Executes Query safely with Index acceleration'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Dynamic Query Construction Security:',
            steps: [
              'Values are always passed as parameterized placeholders (`$1, $2`)',
              'Column names in ORDER BY cannot be parameterized in SQL; they MUST be validated against a hardcoded array whitelist (`const ALLOWED_SORT = [\'price\', \'created_at\', \'title\']`)',
              'Rejects any query attempting to sort by unindexed or sensitive internal columns (e.g. `password_hash`)'
            ]
          },
          code: `// ── DYNAMIC SECURE QUERY BUILDER CONTROLLER ──
const ALLOWED_SORT_FIELDS = {
  'price': 'price ASC',
  '-price': 'price DESC',
  'createdAt': 'created_at ASC',
  '-createdAt': 'created_at DESC',
  'title': 'title ASC'
};

app.get('/api/v1/products', async (req, res) => {
  const { category, minPrice, maxPrice, sort, q } = req.query;
  const whereClauses = [];
  const queryParams = [];

  // 1. Dynamic Filtering
  if (category) {
    queryParams.push(category);
    whereClauses.push(\`category = $\${queryParams.length}\`);
  }

  if (minPrice && !isNaN(minPrice)) {
    queryParams.push(parseFloat(minPrice));
    whereClauses.push(\`price >= $\${queryParams.length}\`);
  }

  if (maxPrice && !isNaN(maxPrice)) {
    queryParams.push(parseFloat(maxPrice));
    whereClauses.push(\`price <= $\${queryParams.length}\`);
  }

  // 2. Safe Search Pattern
  if (q) {
    queryParams.push(\`%\${q}%\`);
    whereClauses.push(\`title ILIKE $\${queryParams.length}\`);
  }

  const whereString = whereClauses.length > 0 ? \`WHERE \${whereClauses.join(' AND ')}\` : '';

  // 3. Whitelisted Sorting (Prevents SQL injection)
  const sortOrder = ALLOWED_SORT_FIELDS[sort] || 'created_at DESC';

  const sqlQuery = \`SELECT id, title, price, category, created_at FROM products \${whereString} ORDER BY \${sortOrder} LIMIT 20\`;
  const result = await db.query(sqlQuery, queryParams);

  res.json({ success: true, count: result.rows.length, data: result.rows });
});`,
          codeBreakdown: [
            { part: 'ALLOWED_SORT_FIELDS[sort] || "created_at DESC"', label: 'Hardcoded whitelist lookup preventing arbitrary SQL injection in ORDER BY clauses', color: '#3b82f6' },
            { part: 'whereClauses.push(`price >= $${queryParams.length}`)', label: 'Dynamically constructs parameterized WHERE predicates without string concatenation of values', color: '#10b981' },
            { part: 'queryParams.push(`%${q}%`)', label: 'Safe case-insensitive text search parameter binding', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `ORDER BY ${req.query.sort}` directly SQL string mein inject karna (Huge SQL Injection Vulnerability!)',
            '❌ User-supplied query parameters ko type-check aur sanitize kiye bina query mein use karna'
          ],
          miniChallenge: 'Ek search controller likho jo multi-field sort (`?sort=-price,title`) parse karke SQL ORDER BY construct kare.',
          quiz: {
            question: 'SQL queries mein `ORDER BY` clause ke column names ko SQL injection se protect karne ka safe tarika kya hai?',
            options: [
              'Column names ko $1 parameter ki tarah pass karna',
              'Allowed column names ka hardcoded whitelist map/array check karna',
              'Sort disable kar dena',
              'Base64 encode karna'
            ],
            answer: 'Allowed column names ka hardcoded whitelist map/array check karna',
            explanation: 'SQL standard identifiers (column names) ko parameter placeholders ($1) ki tarah bind allow nahi karta, isliye backend par strict whitelist verification mandatory hoti hai.'
          },
          summary: [
            'Filtering, sorting aur search API collections ko versatile banate hain',
            'Strict whitelisting dynamic SQL injection vulnerabilities ko eliminate karti hai',
            'Values ko hamesha parameterized placeholders ($1, $2) ke through bind karein'
          ],
          flashcard: {
            q: 'REST APIs mein `?sort=-price` mein minus sign ka standard meaning kya hota hai?',
            a: 'Minus sign (`-`) **Descending order (DESC)** represent karta hai (highest price first), jabki bina sign ke default **Ascending order (ASC)** hota hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: API VERSIONING & COMPATIBILITY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: API Versioning, Evolution & Backward Compatibility',
      lessons: [
        {
          id: 'rest-versioning-compatibility',
          title: 'API Versioning Strategies (URI, Header, Query), Breaking Changes & Deprecation',
          emoji: '🔄',
          xpReward: 40,
          badgeName: 'Versioning Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ek baar mobile app store par release ho gaya toh purane users update nahi karte! Agar aapne API mein breaking change kiya bina versioning ke, toh 10 lakh users ka app crash ho jayega! URI Versioning `/api/v1/` use karo! 📱💥😎"',
            hint: '💡 Masti Sir: "Breaking changes: field delete karna, data type change karna, required field add karna! Non-breaking: naya optional field add karna!"',
            success: '🎉 Masti Sir: "API versioning and zero-downtime evolution mastered! 🔥"',
            mistake: '😅 Masti Sir: "Purane API version ko bina `Sunset` aur `Deprecation` warning headers ke band mat karna!"'
          },
          englishDef: 'API Versioning manages backward compatibility across client lifecycles. Primary strategies include: **URI Versioning** (`/api/v1/users` - most popular & explicit), **Header Versioning** (`X-API-Version: 2` or `Accept: application/vnd.company.v2+json`), and **Query Parameter Versioning** (`?v=2`). When sunsetting versions, APIs communicate deprecation using standard HTTP headers: `Deprecation: true` and `Sunset: Wed, 11 Nov 2026 00:00:00 GMT`.',
          hinglishExplain: 'API Versioning isliye zaroori hoti hai kyonki sabhi clients (web, iOS app, Android app) ek sath update nahi hote. Agar aap `/api/v1/users` use karte ho toh purana app v1 par chalta rahega aur naya app `/api/v2/users` access karega. Breaking change (jaise koi column rename ya delete karna) hamesha naye version mein aana chahiye.',
          funnyExample: {
            scenario: 'The Mobile App Update Dilemma:\n- User Kabir is on a plane with Mobile App v1.0 (Expects `{ name: "Kabir" }`) ✈️\n- Backend Dev deletes `name` and renames to `{ firstName: "Kabir", lastName: "Sharma" }`\n- Without Versioning: Kabir\'s app crashes on landing! 💥\n- With `/api/v1/` & `/api/v2/`: App v1 continues working flawlessly on v1 endpoint! 🛡️',
            punchline: 'Versioning protects your existing mobile users from sudden breaking changes!'
          },
          visualDiagram: {
            title: 'API Versioning Routing Architecture',
            nodes: [
              'Client Request: GET /api/v1/users -> Routes to v1Controller (Legacy response format)',
              'Client Request: GET /api/v2/users -> Routes to v2Controller (Modern decomposed schema)',
              'Deprecation Header attached to v1: Sunset: Wed, 11 Nov 2026 00:00:00 GMT'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Breaking vs Non-Breaking Changes Matrix:',
            steps: [
              'Non-Breaking (No new version needed): Adding a new optional field, adding a new endpoint, adding optional query params',
              'Breaking (Requires new API version): Renaming/removing an existing field, changing data type (e.g. integer to string), adding a new required field to request body',
              'Use standard `Deprecation: @1762819200` Unix timestamp headers'
            ]
          },
          code: `// ── EXPRESS.JS MODULAR API VERSION ROUTING ──
import express from 'express';
import { v1Router } from './v1/index.js';
import { v2Router } from './v2/index.js';

export const apiRouter = express.Router();

// 1. Deprecation Warning Middleware for Legacy V1 API
function deprecationWarningMiddleware(req, res, next) {
  res.setHeader('Deprecation', 'true');
  res.setHeader('Sunset', 'Wed, 11 Nov 2026 00:00:00 GMT');
  res.setHeader('Link', '<https://docs.codemasti.com/api/v2-migration>; rel="deprecation"');
  next();
}

// 2. Mount API Version Namespaces
apiRouter.use('/v1', deprecationWarningMiddleware, v1Router);
apiRouter.use('/v2', v2Router);

// Access paths:
// GET /api/v1/courses -> Returns legacy v1 course format
// GET /api/v2/courses -> Returns modern v2 course format with rich instructor metadata`,
          codeBreakdown: [
            { part: 'apiRouter.use("/v1", deprecationWarningMiddleware, ...)', label: 'Attaches automated HTTP deprecation metadata headers to all legacy v1 responses', color: '#3b82f6' },
            { part: 'res.setHeader("Sunset", "...")', label: 'Standard RFC 8594 Sunset header announcing exact date and time the legacy API will be decommissioned', color: '#10b981' },
            { part: 'apiRouter.use("/v2", v2Router)', label: 'Clean isolated version routing namespace decoupling modern codebase evolution from legacy clients', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production API mein field names rename karke same version par deploy kar dena',
            '❌ Versioning strategies ko mix karna (keep it consistent: prefer URI path versioning `/api/v1/`)'
          ],
          miniChallenge: 'Ek Express router setup karo jo `/api/v1/users` aur `/api/v2/users` ko alag controllers par route kare.',
          quiz: {
            question: 'Neeche diye gaye changes mein se kaunsa ek "Breaking Change" hai jiske liye naya API version (v2) release karna mandatory hota hai?',
            options: [
              'Existing response field ko delete ya rename karna',
              'Response mein ek naya optional field add karna',
              'Naya API endpoint add karna',
              'Query parameter mein default value add karna'
            ],
            answer: 'Existing response field ko delete ya rename karna',
            explanation: 'Existing fields ko delete ya rename karne se purane mobile apps aur third-party clients ka parsing code break ho jata hai, isliye ye ek breaking change hai.'
          },
          summary: [
            'API versioning client compatibility ensure karti hai',
            'URI Path versioning (/api/v1/) industry standard hai',
            'Sunset aur Deprecation headers legacy client retirement communicate karte hain'
          ],
          flashcard: {
            q: 'RFC 8594 `Sunset` header ka kya purpose hota hai?',
            a: 'Ye client applications ko exact HTTP date format mein batata hai ki ye API endpoint kis tareekh ko permanently band (decommission) kar diya jayega.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: AUTHENTICATION: JWT, SESSIONS & COOKIES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: Authentication: JWT, Refresh Token Rotation & Password Security',
      lessons: [
        {
          id: 'rest-password-security-hashing',
          title: 'Password Security: Cryptographic Salt, bcrypt & Argon2 Hashing',
          emoji: '🔑',
          xpReward: 45,
          badgeName: 'Crypto Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Plaintext password database mein store karna sabse bada paap hai! Agar database leak bhi ho jaye toh hacker ko sirf cryptic hashes dikhne chahiye! bcrypt aur Argon2 with Salt use karo! 🔒😎"',
            hint: '💡 Masti Sir: "Salt ek random cryptographic string hoti hai jo har password mein mix hoti hai taaki Rainbow Table dictionary attacks fail ho jayein!"',
            success: '🎉 Masti Sir: "Cryptographic password hashing successfully implemented! Zero plaintext exposure! 🔥"',
            mistake: '😅 Masti Sir: "Password hashing ke liye fast algorithms jaise MD5 ya SHA256 use mat karna — always use slow salted hashing (bcrypt/Argon2)!"'
          },
          englishDef: 'Storing plaintext passwords violates basic security compliance. Secure systems employ slow, memory-hard adaptive cryptographic hashing functions like **bcrypt** or **Argon2id**. A unique cryptographic **Salt** is generated per user to defeat pre-computed Rainbow Table attacks, and a configurable Work Factor (Cost Factor, e.g. 10-12 rounds) slows down brute-force hardware cracking attempts.',
          hinglishExplain: 'Passwords ko database mein save karte waqt kabhi bhi plain text mein nahi rakhte. Hum **bcrypt** ya **Argon2** hashing algorithm use karte hain. Hashing ek One-Way function hota hai (yani hash se wapas password nikaalna mathematically impossible hota hai). Har password ke sath ek unique random "Salt" jod kar hash banaya jata hai jisse brute force aur dictionary attacks 100% fail ho jaate hain.',
          funnyExample: {
            scenario: 'The Meat Grinder Analogy (One-Way Hashing):\n- Input: Fresh Chicken Breast (Password: `MySecret123`) 🍗\n- Meat Grinder + Spices (bcrypt + Salt): Converts chicken into Keema (Hash: `$2b$12$e8...`) 🥩🌶️\n- Can you turn Keema back into Chicken Breast? IMPOSSIBLE! ❌\n- Verification: Put candidate chicken through same grinder & spices -> Compare Keema! ✅',
            punchline: 'Cryptographic hashing is strictly one-way!'
          },
          visualDiagram: {
            title: 'bcrypt Salted Hashing & Verification Lifecycle',
            nodes: [
              'Registration: User enters "Password123" -> bcrypt generates Salt ($2b$12$) -> Computes Hash -> Saves Hash to DB',
              'Login: User enters "Password123" -> bcrypt.compare("Password123", DB_Hash) -> Re-hashes & verifies -> Returns True / False'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Anatomy of a bcrypt Hash String:',
            steps: [
              '`$2b$`: Algorithm identifier (bcrypt)',
              '`12$`: Cost factor / Work factor ($2^{12} = 4096$ iterations)',
              '`8F...`: 22-character base64 encoded cryptographic Salt',
              '`xyz...`: 31-character base64 encoded resulting password hash'
            ]
          },
          code: `// ── PASSWORD HASHING UTILITY USING BCRYPT (auth.util.js) ──
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12; // 2^12 iterations (Optimal balance: ~250ms hashing time)

export async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return await bcrypt.hash(plainPassword, salt);
}

export async function verifyPassword(plainPassword, storedHash) {
  return await bcrypt.compare(plainPassword, storedHash);
}

// ── USER REGISTRATION CONTROLLER ──
export async function registerUser(req, res, next) {
  try {
    const { username, email, password } = req.body;

    // 1. Check existing user
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ success: false, error: 'Email already registered' });
    }

    // 2. Cryptographically Hash Password
    const hashedPassword = await hashPassword(password);

    // 3. Store User with Hash in Database
    const result = await db.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email, created_at',
      [username, email, hashedPassword]
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    next(error);
  }
}`,
          codeBreakdown: [
            { part: 'const salt = await bcrypt.genSalt(12);', label: 'Generates cryptographically random 128-bit salt string defeating rainbow table lookups', color: '#3b82f6' },
            { part: 'await bcrypt.compare(plainPassword, storedHash)', label: 'Timing-attack safe comparison checking password validity against stored hash', color: '#10b981' },
            { part: 'RETURNING id, username, email', label: 'Returns newly minted user entity without exposing the password_hash attribute', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Fast non-cryptographic hashes jaise MD5 ya SHA-1 use karna (vulnerable to GPU brute force)',
            '❌ User object response mein `password_hash` column return kar dena'
          ],
          miniChallenge: 'Ek login function likho jo `verifyPassword` use karke check kare ki credentials match karte hain ya nahi.',
          quiz: {
            question: 'Password hashing mein "Salt" ka primary purpose kya hota hai?',
            options: [
              'Password ko encrypt karke readable banana',
              'Har password ke sath unique random data jodna taaki Pre-computed Rainbow Table dictionary attacks fail ho sakein',
              'Database storage size chhota karna',
              'Speed 100x fast karna'
            ],
            answer: 'Har password ke sath unique random data jodna taaki Pre-computed Rainbow Table dictionary attacks fail ho sakein',
            explanation: 'Salt ensure karta hai ki agar do alag users ka same password bhi ho, tab bhi unka generated hash completely unique hoga, making rainbow table attacks useless.'
          },
          summary: [
            'Passwords ko hamesha salted adaptive hashing (bcrypt/Argon2) se protect karein',
            'Cost Factor brute force attacks ko hardware-level par slow karta hai',
            'Password hashes ko public API responses se hamesha exclude karein'
          ],
          flashcard: {
            q: 'Password Hashing aur Encryption mein kya farak hai?',
            a: 'Encryption Two-Way hota hai (secret key se decrypt ho sakta hai); Hashing One-Way hota hai (ise decrypt nahi kiya ja sakta, sirf candidate input compare kiya jata hai).'
          }
        },
        {
          id: 'rest-jwt-tokens-refresh-rotation',
          title: 'JWT Deep Dive, Access Tokens, Refresh Token Rotation & HttpOnly Cookies',
          emoji: '🎫',
          xpReward: 50,
          badgeName: 'JWT Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JWT ko identity card samjho! Lekin token ko browser ke localStorage mein rakh ke ghoomoge toh XSS attack mein chori ho jayega! Short-lived Access Token + HttpOnly Cookie mein Refresh Token Rotation use karo! Bank-grade security! 🛡️🎫😎"',
            hint: '💡 Masti Sir: "JWT ke 3 parts hote hain: Header (Algorithm), Payload (User Claims), aur Signature (Secret Key Verification)!"',
            success: '🎉 Masti Sir: "Sliding Refresh Token Rotation and secure cookie auth successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "JWT Payload ke andar sensitive passwords ya financial PIN codes mat daalna — payload base64 encoded hota hai aur koi bhi decode kar sakta hai!"'
          },
          englishDef: 'JSON Web Tokens (JWT, RFC 7519) are compact, URL-safe cryptographically signed tokens consisting of **Header** (alg & typ), **Payload** (claims: sub, userId, role, exp), and **Signature** (`HMACSHA256(header + payload, secret)`). Production security implements dual-token architecture: short-lived **Access Tokens** (15 mins in memory) and long-lived **Refresh Tokens** (7 days stored in `HttpOnly SameSite=Strict` cookies with automatic Token Rotation and revocation tracking).',
          hinglishExplain: 'JWT ek signed identity token hota hai. Iske 3 parts hote hain (`Header.Payload.Signature`).\nProduction security standard:\n1. **Access Token** (15 minutes expiry): Har API call ke sath `Authorization: Bearer <token>` header mein jata hai.\n2. **Refresh Token** (7 days expiry): `HttpOnly SameSite=Strict` cookie mein store hota hai (jisse JavaScript XSS ise access nahi kar sakti).\nJab Access Token expire hota hai, toh frontend `/api/v1/auth/refresh` call karta hai aur server naya access token + naya rotated refresh token issue kar deta hai.',
          funnyExample: {
            scenario: 'The Amusement Park Pass:\n- Access Token = 15-Minute Ride Wristband 🎟️ (Shows operator you have access; expires quickly)\n- Refresh Token = Season Pass Card in your pocket 💳 (Stored securely in HttpOnly cookie)\n- Wristband expired? Go to the counter with Season Pass -> Counter gives you a fresh 15-minute wristband & stamps Season Pass (Rotation)! 🔄✨',
            punchline: 'Short-lived access tokens limit exposure if intercepted!'
          },
          visualDiagram: {
            title: 'Dual-Token Architecture with Refresh Token Rotation',
            nodes: [
              'Client logs in -> Server issues Access Token (15m in memory) + Refresh Token (7d in HttpOnly Cookie)',
              'API Requests: Client sends Authorization: Bearer <AccessToken>',
              'Access Token Expired (401) -> Client calls POST /auth/refresh',
              'Server validates Refresh Token -> Revokes old token -> Issues New Access Token + Rotated Refresh Token!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why localStorage for Tokens is Vulnerable to XSS:',
            steps: [
              'Any malicious npm package or XSS script in the browser can execute `localStorage.getItem(\'token\')` and steal credentials',
              '`HttpOnly` cookies cannot be accessed or read by client-side JavaScript (`document.cookie` returns empty)',
              '`SameSite=Strict` prevents Cross-Site Request Forgery (CSRF) attacks by blocking cookie transmission on third-party cross-site requests'
            ]
          },
          code: `// ── JWT GENERATION & VERIFICATION SERVICE (jwt.service.js) ──
import jwt from 'jsonwebtoken';

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'AccessSuperSecretKey2026!';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'RefreshSuperSecretKey2026!';

export function generateTokens(user) {
  // 1. Short-Lived Access Token (15 Minutes)
  const accessToken = jwt.sign(
    { userId: user.id, role: user.role, email: user.email },
    ACCESS_SECRET,
    { expiresIn: '15m' }
  );

  // 2. Long-Lived Refresh Token (7 Days)
  const refreshToken = jwt.sign(
    { userId: user.id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  return { accessToken, refreshToken };
}

// ── REFRESH TOKEN ROTATION ROUTE CONTROLLER ──
export async function refreshTokens(req, res) {
  const oldRefreshToken = req.cookies.refreshToken;
  if (!oldRefreshToken) {
    return res.status(401).json({ success: false, error: 'Refresh token missing' });
  }

  try {
    const payload = jwt.verify(oldRefreshToken, REFRESH_SECRET);

    // Verify token exists in database whitelist / not revoked
    const user = await db.query('SELECT id, email, role FROM users WHERE id = $1', [payload.userId]);
    if (user.rows.length === 0) {
      return res.status(401).json({ success: false, error: 'User no longer exists' });
    }

    // Generate fresh rotated tokens
    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user.rows[0]);

    // Send new refresh token in Secure HttpOnly Cookie
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({ success: true, accessToken });
  } catch (err) {
    return res.status(403).json({ success: false, error: 'Invalid or expired refresh token' });
  }
}`,
          codeBreakdown: [
            { part: 'jwt.sign({ userId, role }, ACCESS_SECRET, { expiresIn: "15m" })', label: 'Signs compact cryptographic payload token with strict 15-minute expiry boundary', color: '#3b82f6' },
            { part: 'res.cookie("refreshToken", ..., { httpOnly: true, sameSite: "strict" })', label: 'Stores refresh token in secure cookie immune to JavaScript XSS theft and CSRF attacks', color: '#10b981' },
            { part: 'jwt.verify(oldRefreshToken, REFRESH_SECRET)', label: 'Validates cryptographic digital signature preventing tampered token forgery', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Access tokens ko 30 din ki lambi expiry de dena bina revocation system ke',
            '❌ JWT Payload ke andar sensitive passwords ya credit card data store karna (Payload is public base64)'
          ],
          miniChallenge: 'Ek `authenticateUser` middleware likho jo Authorization Bearer token verify kare aur `req.user` attach kare.',
          quiz: {
            question: 'XSS (Cross-Site Scripting) attacks se authentication tokens ko protect karne ke liye refresh tokens ko kahan store karna best practice hai?',
            options: ['localStorage mein', 'sessionStorage mein', 'HttpOnly SameSite=Strict Cookies mein', 'URL Query parameters mein'],
            answer: 'HttpOnly SameSite=Strict Cookies mein',
            explanation: '`HttpOnly` cookies ko browser JavaScript (`document.cookie`) access nahi kar sakti, protecting tokens from malicious XSS scripts.'
          },
          summary: [
            'JWT stateless digital identity signatures provide karta hai',
            'Dual-token architecture short-lived access tokens aur secure refresh tokens use karta hai',
            'HttpOnly SameSite cookies XSS aur CSRF attacks ko neutralize karti hain'
          ],
          flashcard: {
            q: 'Refresh Token Rotation kya hota hai?',
            a: 'Jab bhi client naya access token mangne aata hai, server purane refresh token ko invalidate kar deta hai aur ek bilkul naya refresh token issue karta hai; agar koi chori hua token use ho toh system fraud detect karke access revoke kar deta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: AUTHORIZATION & RBAC ROLES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Authorization, RBAC & Resource Ownership Guards',
      lessons: [
        {
          id: 'rest-rbac-authorization-permissions',
          title: 'Role-Based Access Control (RBAC), Permissions & Resource Ownership Guards',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Security Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Authentication ka matlab: \'Aap kaun ho?\', Authorization ka matlab: \'Aap kya kar sakte ho?\'. Student course dekh sakta hai, Mentor course edit kar sakta hai, aur Admin sab kuch delete kar sakta hai! RBAC roles and ownership guards! 🛡️😎"',
            hint: '💡 Masti Sir: "Resource ownership guard ensure karta hai ki Student A sirf apna profile edit kar sake, kisi doosre student ka nahi (`req.user.id === target.ownerId`)!"',
            success: '🎉 Masti Sir: "Role-Based Access Control and ownership guards fully implemented! 🔥"',
            mistake: '😅 Masti Sir: "Authorization check fail hone par 401 mat bhejna — 403 Forbidden bhejna kyonki identity verified hai par permission missing hai!"'
          },
          englishDef: 'Authorization determines whether an authenticated user has the permissions to perform a requested action on a target resource. Key patterns include **Role-Based Access Control (RBAC)** (coarse-grained roles: `admin`, `instructor`, `student`), **Permission-Based Access Control** (granular capabilities: `courses:write`, `users:delete`), and **Resource Ownership Guards** (`req.user.id === resource.ownerId || req.user.role === \'admin\'`).',
          hinglishExplain: 'Authentication ke baad Authorization check hota hai. RBAC (Role-Based Access Control) ensure karta hai ki:\n1. Admin users ko manage kar sake.\n2. Instructor sirf apne banaye courses edit kar sake.\n3. Student sirf enrolled courses padh sake.\nOwnership Guard check karta hai ki kya current user us specific post/comment ka original author hai ya nahi.',
          funnyExample: {
            scenario: 'The Corporate Office Access Badge:\n- Authentication = Badge scans at entrance -> "Welcome Kabir (Developer)" ✅\n- Authorization at Developer Room: Door Opens! 🚪\n- Authorization at Server Room: Red Alert! "Access Denied: Requires SysAdmin Role" (403 Forbidden)! 🚫',
            punchline: 'Authorization gates specific rooms and actions!'
          },
          visualDiagram: {
            title: 'RBAC & Resource Ownership Authorization Pipeline',
            nodes: [
              'Incoming Request: DELETE /api/v1/comments/45 (With JWT token)',
              '1. authenticateUser Middleware -> Attaches req.user = { id: 10, role: "student" }',
              '2. Ownership / RBAC Guard -> Checks: Is req.user.id === comment.authorId OR role === "admin"?',
              'Pass -> Deletes comment | Fail -> Returns 403 Forbidden'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Dynamic Permission Matrix Design:',
            steps: [
              'Roles define sets of permissions: `const ROLES = { admin: [\'*\'], mentor: [\'courses:create\', \'courses:edit\'], student: [\'courses:read\'] }`',
              'Middleware checks required permission against user\'s active role permission set',
              'Fails fast with HTTP 403 before executing expensive database writes'
            ]
          },
          code: `// ── 1. ROLE-BASED ACCESS CONTROL (RBAC) MIDDLEWARE ──
export function requireRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: \`Access forbidden: requires one of [\${allowedRoles.join(', ')}] roles\`
      });
    }

    next();
  };
}

// ── 2. RESOURCE OWNERSHIP GUARD MIDDLEWARE (e.g. Comments) ──
export async function requireCommentOwnershipOrAdmin(req, res, next) {
  const commentId = req.params.id;
  const currentUserId = req.user.id;
  const currentUserRole = req.user.role;

  const result = await db.query('SELECT author_id FROM comments WHERE id = $1', [commentId]);
  if (result.rows.length === 0) {
    return res.status(404).json({ success: false, error: 'Comment not found' });
  }

  const isOwner = result.rows[0].author_id === currentUserId;
  const isAdmin = currentUserRole === 'admin';

  if (!isOwner && !isAdmin) {
    return res.status(403).json({ success: false, error: 'You do not have permission to modify this comment' });
  }

  next();
}`,
          codeBreakdown: [
            { part: 'requireRoles("admin", "mentor")', label: 'Higher-order middleware factory generating route guards for authorized role hierarchies', color: '#3b82f6' },
            { part: 'const isOwner = ... author_id === currentUserId;', label: 'Resource ownership guard verifying user has authority over the specific entity record', color: '#10b981' },
            { part: 'res.status(403).json(...)', label: 'Returns 403 Forbidden when identity is verified but permission requirements are violated', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ IDOR (Insecure Direct Object Reference) Vulnerability: Client ke bheje gaye `userId` par trust karna instead of token `req.user.id`',
            '❌ Ownership check fail hone par 401 return karna instead of 403'
          ],
          miniChallenge: 'Ek route define karo `DELETE /api/v1/courses/:id` with `requireRoles("admin", "instructor")` guard.',
          quiz: {
            question: 'IDOR (Insecure Direct Object Reference) vulnerability se bachne ke liye API backend ko kya verify karna zaroori hai?',
            options: [
              'Verify karna ki logged-in user (`req.user.id`) hi us target resource ka authorized owner hai ya admin hai',
              'Database table ko delete karna',
              'Sirf frontend par button hide karna',
              'Plain HTTP use karna'
            ],
            answer: 'Verify karna ki logged-in user (`req.user.id`) hi us target resource ka authorized owner hai ya admin hai',
            explanation: 'Backend resource ownership verification ensure karta hai ki logged-in user sirf apna data modify kar sake, even if they manipulate the resource ID in the URL.'
          },
          summary: [
            'Authentication identity confirm karta hai, Authorization permission check karta hai',
            'RBAC middleware route access restrict karta hai',
            'Ownership guards IDOR data tampering vulnerabilities ko eliminate karte hain'
          ],
          flashcard: {
            q: 'IDOR (Insecure Direct Object Reference) kya hota hai?',
            a: 'Jab backend sirf URL parameter (e.g. `DELETE /api/orders/50`) par bharosa karke delete kar de bina ye check kiye ki Order #50 logged-in user ka hai ya kisi aur ka.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: WEB SECURITY: CORS, CSRF, RATE LIMITING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: Web Security: CORS, CSRF, Rate Limiting & Attacks Defense',
      lessons: [
        {
          id: 'rest-cors-csrf-defenses',
          title: 'CORS Preflight (OPTIONS), CSRF Defenses & Security Headers (Helmet)',
          emoji: '🌐',
          xpReward: 45,
          badgeName: 'Security Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Browser bolta hai: \'Ye frontend `localhost:3000` par hai aur backend `localhost:5000` par — Cross-Origin request block!\'. CORS permission do aur Helmet security headers lagao! Browser security masterclass! 🛡️🌐😎"',
            hint: '💡 Masti Sir: "Preflight request ek automatic `OPTIONS` HTTP request hoti hai jo browser bhejta hai check karne ke liye ki kya server cross-origin request allow karta hai!"',
            success: '🎉 Masti Sir: "CORS preflight configuration and Helmet HTTP security headers active! 🔥"',
            mistake: '😅 Masti Sir: "Production par `Access-Control-Allow-Origin: *` mat lagana with credentials — specific allowed domain whitelist karein!"'
          },
          englishDef: '**Cross-Origin Resource Sharing (CORS)** is a browser security mechanism enforcing the Same-Origin Policy. When web frontends make cross-origin API requests with custom headers or non-simple methods (`PUT`, `DELETE`, `PATCH`), browsers dispatch a preflight `OPTIONS` request. **Cross-Site Request Forgery (CSRF)** is prevented using `SameSite=Strict` cookies and Anti-CSRF tokens. **Helmet.js** sets HTTP security headers (`Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`).',
          hinglishExplain: 'Browser security ke 2 main pillars hote hain:\n1. **CORS**: Jab React app (`frontend.com`) doosre domain (`api.backend.com`) se data mangti hai, toh browser pehle ek `OPTIONS` Preflight request bhej kar poochta hai ki kya ye allowed hai. Backend `Access-Control-Allow-Origin` header bhej kar permission deta hai.\n2. **Helmet**: Express mein security headers automatically set karta hai taaki clickjacking aur MIME sniffing attacks block ho sakein.',
          funnyExample: {
            scenario: 'The International Border Check (CORS):\n- Traveler (React Frontend at `app.com`) wants to enter Kingdom (API at `api.com`) 🛂\n- Border Guard (Browser) sends Courier (Preflight OPTIONS request): "Do you allow travelers from app.com with JSON baggage?" 🕊️\n- Kingdom replies: `Access-Control-Allow-Origin: app.com` -> Entry Granted! 🎟️✨',
            punchline: 'CORS is the browser\'s diplomatic border control system!'
          },
          visualDiagram: {
            title: 'CORS Preflight OPTIONS Handshake Flow',
            nodes: [
              '1. Browser sends Preflight: OPTIONS /api/v1/courses (Origin: https://codemasti.com)',
              '2. Server responds: Access-Control-Allow-Origin: https://codemasti.com | Access-Control-Allow-Methods: GET,POST,PUT,DELETE',
              '3. Browser verifies response headers',
              '4. Browser dispatches Actual Request: POST /api/v1/courses'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Simple Requests vs Preflight Requests:',
            steps: [
              'Simple Requests: Methods `GET`, `HEAD`, `POST` with standard headers (`text/plain`, `multipart/form-data`, `application/x-www-form-urlencoded`) skip preflight',
              'Preflight Triggered: Any request with `application/json`, custom headers (`Authorization`, `X-Request-ID`), or methods `PUT`/`PATCH`/`DELETE` triggers an automatic `OPTIONS` preflight request'
            ]
          },
          code: `// ── SECURE CORS & HELMET CONFIGURATION (app.js) ──
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// 1. Helmet Security Headers (Clickjacking & XSS Defenses)
app.use(helmet());

// 2. Strict CORS Whitelist Configuration
const ALLOWED_ORIGINS = [
  'https://codemasti.com',
  'https://admin.codemasti.com',
  'http://localhost:3000' // Local dev
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || ALLOWED_ORIGINS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Cross-Origin Request Blocked by CORS Policy'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Request-ID'],
  credentials: true, // Allow cookies across origins
  maxAge: 86400 // Cache preflight OPTIONS response for 24 hours
};

app.use(cors(corsOptions));`,
          codeBreakdown: [
            { part: 'app.use(helmet())', label: 'Automatically injects 11 standardized HTTP defense headers securing headers against common web vulnerabilities', color: '#3b82f6' },
            { part: 'credentials: true', label: 'Allows client web browsers to transmit secure cookies and authorization headers in cross-origin requests', color: '#10b981' },
            { part: 'maxAge: 86400', label: 'Caches successful preflight OPTIONS handshake for 24 hours eliminating redundant network round-trips', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production par `origin: "*"` ke sath `credentials: true` lagana (browsers will reject this combination for security)',
            '❌ CORS error aane par backend ki jagah frontend code mein fix dhoondhna (CORS is configured on the backend server!)'
          ],
          miniChallenge: 'Express app mein CORS middleware configure karo jo sirf specific frontend domain allow kare.',
          quiz: {
            question: 'Jab browser `application/json` payload ke sath `PUT` ya `DELETE` request bhejta hai, toh actual request se pehle kaunsa HTTP method preflight ke roop mein automatically bhejta hai?',
            options: ['HEAD', 'OPTIONS', 'GET', 'TRACE'],
            answer: 'OPTIONS',
            explanation: 'Browser actual cross-origin request dispatch karne se pehle automatic `OPTIONS` preflight request bhej kar server ki allowed origins aur methods permissions verify karta hai.'
          },
          summary: [
            'CORS browser-enforced cross-origin resource sharing policy hai',
            'Preflight OPTIONS handshake allowed headers aur methods check karta hai',
            'Helmet HTTP security headers attack surface ko minimize karte hain'
          ],
          flashcard: {
            q: 'Preflight response mein `Access-Control-Max-Age` ka kya fayda hota hai?',
            a: 'Ye browser ko batata hai ki kitne seconds tak preflight permission ko cache rakhna hai, taaki agle 24 ghante tak har API call se pehle extra `OPTIONS` request na bhejna pade.'
          }
        },
        {
          id: 'rest-rate-limiting-brute-force',
          title: 'Rate Limiting, IP/User Sliding Windows & Brute Force Attack Prevention',
          emoji: '⏳',
          xpReward: 45,
          badgeName: 'Rate Limit Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "1 second mein 1,000 requests bhej kar server crash karne ki koshish? Rate Limiting lagao! Normal user ko 100 req/min do, par Login endpoint par 5 attempts ke baad 15 minute ka tala laga do! 429 Too Many Requests! ⏳🛑😎"',
            hint: '💡 Masti Sir: "Rate limiting responses mein `Retry-After`, `RateLimit-Limit`, aur `RateLimit-Remaining` headers attach kiye jaate hain!"',
            success: '🎉 Masti Sir: "Sliding window rate limiting and brute force protection active! 🔥"',
            mistake: '😅 Masti Sir: "Distributed microservices mein in-memory rate limiting mat use karna — Redis sliding window use karo!"'
          },
          englishDef: '**Rate Limiting** protects APIs from Denial of Service (DoS), brute force credential stuffing, and resource starvation. Using algorithms such as **Token Bucket** or **Sliding Window Counter**, servers restrict request throughput by IP address, User ID, or API Key. When limits are exceeded, servers return `429 Too Many Requests` with `Retry-After` headers.',
          hinglishExplain: 'Rate Limiting server par traffic control lagata hai. Jaise ek toll gate par gaadiyan ek line mein nikalti hain. Agar koi bot ya hacker login endpoint par 1 second mein 500 passwords try karne ki koshish karega, toh Rate Limiter 5 attempts ke baad use block kar dega aur `429 Too Many Requests` return karega with `Retry-After: 900` (15 minutes wait karo).',
          funnyExample: {
            scenario: 'The ATM Machine Security Lockout:\n- Attempt 1: Wrong PIN ❌\n- Attempt 2: Wrong PIN ❌\n- Attempt 3: Wrong PIN ❌\n- ATM Machine: "3 failed attempts! Card blocked for 24 hours!" (HTTP 429 Too Many Requests!) 💳🔒',
            punchline: 'Rate limiters stop password guessing bots in their tracks!'
          },
          visualDiagram: {
            title: 'Sliding Window Rate Limiter Architecture',
            nodes: [
              'Client Request -> Rate Limiter Middleware',
              'Check Redis Sliding Window Bucket (e.g. IP: 192.168.1.100)',
              'Count < 100 requests/minute -> Pass to Controller (RateLimit-Remaining: 84)',
              'Count >= 100 requests/minute -> Rejects with HTTP 429 (Retry-After: 45s)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Standard Rate Limiting Response Headers:',
            steps: [
              '`RateLimit-Limit: 100`: Maximum allowed requests in the active window',
              '`RateLimit-Remaining: 42`: Number of remaining allowed requests before throttling',
              '`RateLimit-Reset: 1762819260`: Unix epoch timestamp when quota resets',
              '`Retry-After: 45`: Seconds the client must wait before retrying'
            ]
          },
          code: `// ── RATE LIMITING CONFIGURATION (express-rate-limit) ──
import rateLimit from 'express-rate-limit';

// 1. General API Rate Limiter (100 requests per 15 minutes per IP)
export const globalApiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return standard RateLimit-* headers
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many requests from this IP. Please try again after 15 minutes.'
    }
  }
});

// 2. Strict Authentication & Login Rate Limiter (Brute Force Protection)
export const loginBruteForceLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Strictly max 5 failed attempts per IP
  skipSuccessfulRequests: true, // Do not count successful 200 logins against quota
  message: {
    success: false,
    error: {
      code: 'TOO_MANY_LOGIN_ATTEMPTS',
      message: 'Too many failed login attempts. Account temporarily locked for 15 minutes.'
    }
  }
});`,
          codeBreakdown: [
            { part: 'windowMs: 15 * 60 * 1000, max: 100', label: 'Defines 15-minute sliding time window permitting up to 100 request tokens', color: '#3b82f6' },
            { part: 'skipSuccessfulRequests: true', label: 'Ensures legitimate successful logins do not deplete the user security attempt budget', color: '#10b981' },
            { part: 'standardHeaders: true', label: 'Attaches RFC standard RateLimit-Limit and RateLimit-Remaining metadata headers to responses', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Login aur Password Reset endpoints par general relaxed rate limit chhod dena (must be strict: 5 attempts max)',
            '❌ Rate limit block hone par 400 Bad Request bhejna instead of standard `429 Too Many Requests`'
          ],
          miniChallenge: 'Login route par `loginBruteForceLimiter` attach karo aur 5 attempts ke baad 429 response verify karo.',
          quiz: {
            question: 'Jab client API rate limit threshold exceed kar deta hai, toh server ko kaunsa HTTP status code return karna chahiye?',
            options: ['400 Bad Request', '403 Forbidden', '429 Too Many Requests', '503 Service Unavailable'],
            answer: '429 Too Many Requests',
            explanation: '`429 Too Many Requests` standard HTTP status code hai jo indicate karta hai ki client ne configured time window mein allow kiye gaye limits se zyada requests send kar di hain.'
          },
          summary: [
            'Rate limiting DoS attacks aur brute force credential stuffing rokta hai',
            'Login endpoints par strict limits (5 attempts) hone chahiye',
            'HTTP 429 aur Retry-After headers client retry behavior regulate karte hain'
          ],
          flashcard: {
            q: 'Distributed servers (e.g. 5 Node.js instances) mein rate limiting kaise synchronize hoti hai?',
            a: 'Single server memory ki jagah central **Redis** database use hota hai jahan sabhi instances shared sliding window counters atomically update karte hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: RELIABILITY: IDEMPOTENCY, CACHING & ETAG
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: Advanced Reliability: Idempotency Keys, Caching & ETag',
      lessons: [
        {
          id: 'rest-idempotency-keys',
          title: 'Payment Idempotency (Idempotency-Key Header) & Duplicate Charge Prevention',
          emoji: '💳',
          xpReward: 50,
          badgeName: 'Payment Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "User ne payment karte waqt button 2 baar click kar diya ya network timeout ho gaya — kya user ke account se 2 baar paise katenge? NEVER! `Idempotency-Key: uuid` use karo! Stripe, Razorpay aur top fintech APIs ka gold standard! 💳🛡️😎"',
            hint: '💡 Masti Sir: "Agar same Idempotency-Key dubara aaye, toh server nayi transaction chalane ki jagah purani transaction ka cached response wapas return kar deta hai!"',
            success: '🎉 Masti Sir: "Financial-grade Idempotency Key architecture successfully implemented! 🔥"',
            mistake: '😅 Masti Sir: "Idempotency key lock lagate waqt atomic database transactions ya Redis locks zaroor use karein!"'
          },
          englishDef: '**Idempotency Keys** (`Idempotency-Key: <uuid>`) guarantee that executing a non-idempotent operation (such as `POST /payments` or `POST /orders`) multiple times produces the identical side-effect as executing it once. This protects against duplicate financial charges caused by client double-clicks, network timeouts, and automatic retry storms.',
          hinglishExplain: 'Payment aur Order APIs mein Idempotency sabse critical concept hota hai. Jab client payment request bhejta hai, toh wo header mein ek unique `Idempotency-Key: a0eebc99...` bhejta hai. Server is key ko database mein lock karta hai. Agar network timeout ki wajah se client wahi request dobara bhejta hai, toh server naya charge deduct karne ki jagah pehle se processed result instant return kar deta hai.',
          funnyExample: {
            scenario: 'The Double-Click Payment Disaster:\n- User buys ₹50,000 Laptop 💻\n- User impatiently double-clicks "Pay Now" 🖱️🖱️\n- Without Idempotency: Bank deducts ₹100,000! User panics! 😱💥\n- With `Idempotency-Key`: Request 1 processes payment; Request 2 detects same key and returns cached success! Exactly ₹50,000 charged! 🛡️✨',
            punchline: 'Idempotency Keys save e-commerce platforms from costly double-charge disasters!'
          },
          visualDiagram: {
            title: 'Idempotency Key Processing Lifecycle',
            nodes: [
              'Client sends POST /api/v1/payments (Header: Idempotency-Key: key_123)',
              '1. Server checks Database for key_123',
              '2A. First time: Lock key -> Process Payment -> Save Response -> Return 201',
              '2B. Duplicate request: Key exists in DB -> Return Cached Response directly (Zero duplicate charge!)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Idempotency Table Schema Design:',
            steps: [
              'Table `idempotency_records`: `key VARCHAR PK`, `user_id UUID`, `request_hash TEXT`, `response_status INT`, `response_body JSONB`, `created_at TIMESTAMPTZ`',
              'Keys expire automatically after 24 hours using TTL or partial cleanup',
              'If a concurrent request arrives while key is still "in_progress", server returns 409 Conflict'
            ]
          },
          code: `// ── FINANCIAL IDEMPOTENCY MIDDLEWARE / HANDLER ──
export async function processPaymentWithIdempotency(req, res, next) {
  const idempotencyKey = req.headers['idempotency-key'];
  if (!idempotencyKey) {
    return res.status(400).json({ success: false, error: 'Idempotency-Key header is mandatory for payment transactions' });
  }

  const userId = req.user.id;
  const { amount, currency } = req.body;

  try {
    // 1. Check if Idempotency Key already processed
    const existing = await db.query(
      'SELECT response_status, response_body FROM idempotency_keys WHERE key = $1 AND user_id = $2',
      [idempotencyKey, userId]
    );

    if (existing.rows.length > 0) {
      const record = existing.rows[0];
      console.log(\`[IDEMPOTENCY] Replaying cached response for key: \${idempotencyKey}\`);
      return res.status(record.response_status).json(record.response_body);
    }

    // 2. Execute Atomic Payment Operation
    const paymentResult = await executeBankPayment(userId, amount, currency);

    const responsePayload = {
      success: true,
      transactionId: paymentResult.id,
      amount,
      status: 'COMPLETED'
    };

    // 3. Save Response in Idempotency Store
    await db.query(
      'INSERT INTO idempotency_keys (key, user_id, response_status, response_body) VALUES ($1, $2, $3, $4)',
      [idempotencyKey, userId, 201, JSON.stringify(responsePayload)]
    );

    res.status(201).json(responsePayload);
  } catch (error) {
    next(error);
  }
}`,
          codeBreakdown: [
            { part: "req.headers['idempotency-key']", label: 'Extracts client-supplied unique UUID ensuring single-execution semantics', color: '#3b82f6' },
            { part: 'if (existing.rows.length > 0) return res.status(...).json(...)', label: 'Short-circuits duplicate requests by returning pre-computed transaction result', color: '#10b981' },
            { part: 'INSERT INTO idempotency_keys (...)', label: 'Persists response payload ensuring future client retries receive identical responses', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Idempotency keys ko user account ID se scope na karna (allows one user to collide with another user\'s key)',
            '❌ Database failure par idempotency record save na hone par duplicate retries allow ho jana'
          ],
          miniChallenge: 'Ek `POST /orders` controller likho jo `Idempotency-Key` header verify karke duplicate orders block kare.',
          quiz: {
            question: 'Fintech aur E-Commerce payment APIs mein `Idempotency-Key` header ka primary objective kya hota hai?',
            options: [
              'User ka password encrypt karna',
              'Network timeout ya double click hone par duplicate financial charges lagne se rokna',
              'Image upload speed badhana',
              'CSS styles apply karna'
            ],
            answer: 'Network timeout ya double click hone par duplicate financial charges lagne se rokna',
            explanation: '`Idempotency-Key` ensure karta hai ki duplicate ya retry requests par naya payment initiate na ho aur purani transaction ka cached result safe return ho jaye.'
          },
          summary: [
            'Idempotency keys duplicate operations aur financial double-charges prevent karte hain',
            'Cached responses client network retries ko transparently handle karte hain',
            'Fintech aur mission-critical enterprise APIs ka mandatory architectural pattern hai'
          ],
          flashcard: {
            q: 'Agar pehli payment request abhi process ho rahi ho aur usi samay doosri identical key wali request aa jaye toh kya return karna chahiye?',
            a: 'Server ko `409 Conflict` (ya 425 Too Early) return karna chahiye indicating: "An operation with this idempotency key is already currently in progress".'
          }
        },
        {
          id: 'rest-caching-etag-redis',
          title: 'HTTP Caching (Cache-Control, ETag, 304 Not Modified) & Redis Cache-Aside',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Caching Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Data change nahi hua toh 10 lakh rows dobara wire par transfer kyu karein? `ETag` lagao — agar data same hai toh server bolega `304 Not Modified` aur 0 bytes transfer hongi! Instant speed! 🚀⚡😎"',
            hint: '💡 Masti Sir: "`Cache-Control: public, max-age=3600` browser aur CDN ko 1 ghante tak response cache karne ki permission deta hai!"',
            success: '🎉 Masti Sir: "HTTP ETag validation and Redis Cache-Aside architecture fully implemented! 🔥"',
            mistake: '😅 Masti Sir: "Dynamic private user profiles par `Cache-Control: public` mat lagana — use `private, no-cache`!"'
          },
          englishDef: 'HTTP caching optimizes network bandwidth and server latency. **Cache-Control** directives (`public`, `private`, `no-cache`, `max-age`) instruct browsers and CDNs on freshness. **ETags** (Entity Tags) provide conditional validation: clients send `If-None-Match: "etag_hash"`, allowing servers to respond with `304 Not Modified` without re-transmitting body payloads. Server-side caching utilizes the **Redis Cache-Aside Pattern** with explicit TTL.',
          hinglishExplain: 'Caching API response time ko 500ms se 2ms kar deti hai:\n1. **HTTP ETag**: Server response ke sath ek fingerprint (`ETag: "abc123"`) bhejta hai. Agli baar browser `If-None-Match: "abc123"` bhejta hai. Agar data badla nahi hai, toh server empty body ke sath `304 Not Modified` bhej deta hai (99% bandwidth saved!).\n2. **Redis Cache-Aside**: Server pehle Redis memory mein check karta hai; agar cache hit hua toh instant response, agar miss hua toh database query karke Redis mein cache save kar leta hai.',
          funnyExample: {
            scenario: 'The Daily Newspaper Analogy (ETag):\n- Reader asks: "Has today\'s edition changed since Edition #5?" (`If-None-Match: "v5"`) 📰\n- Editor: "No changes!" (`304 Not Modified` - 0 new pages printed!) ⚡\n- If article updated: "Yes! Here is Edition #6" (`200 OK` with full fresh pages) 📑',
            punchline: 'ETags validate data freshness without sending duplicate payloads!'
          },
          visualDiagram: {
            title: 'ETag Conditional Request Lifecycle',
            nodes: [
              '1. First Request: GET /api/v1/courses/10 -> Server returns 200 OK + ETag: "hash_999" + Full JSON Body',
              '2. Subsequent Request: GET /api/v1/courses/10 (Header: If-None-Match: "hash_999")',
              '3. Server compares hash -> Data Unchanged!',
              '4. Returns HTTP 304 Not Modified (Zero payload bytes transmitted!)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Redis Cache-Aside Pattern Workflow:',
            steps: [
              '1. API checks Redis: `const cached = await redis.get(\'course:10\')`',
              '2. Cache HIT: Deserializes JSON string and returns immediately (1-2ms)',
              '3. Cache MISS: Queries PostgreSQL database -> Writes to Redis with TTL: `await redis.setex(\'course:10\', 3600, json)` -> Returns response',
              '4. Invalidation: Any UPDATE/DELETE immediately deletes the Redis key (`redis.del(\'course:10\')`)'
            ]
          },
          code: `// ── 1. HTTP CACHE-CONTROL & ETAG CONDITIONAL VALIDATION ──
import crypto from 'crypto';

app.get('/api/v1/courses/:id', async (req, res, next) => {
  try {
    const course = await db.query('SELECT * FROM courses WHERE id = $1', [req.params.id]);
    if (course.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Course not found' });
    }

    const data = course.rows[0];
    
    // Generate deterministic cryptographic ETag from data content
    const eTag = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

    // Check If-None-Match header from client cache
    if (req.headers['if-none-match'] === eTag) {
      // 304 Not Modified: Instructs client to use cached copy
      return res.status(304).send();
    }

    // Attach Freshness & ETag Headers
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=60');
    res.setHeader('ETag', eTag);

    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
});`,
          codeBreakdown: [
            { part: "if (req.headers['if-none-match'] === eTag) return res.status(304).send()", label: 'Conditional validation returning 304 Not Modified saving 100% of body transmission bandwidth', color: '#3b82f6' },
            { part: 'Cache-Control: public, max-age=3600', label: 'Instructs browser and intermediate CDN proxies to cache response for 1 hour', color: '#10b981' },
            { part: 'res.setHeader("ETag", eTag)', label: 'Attaches entity tag hash fingerprint allowing future client conditional revalidations', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Database update hone ke baad Redis cache key invalidate karna bhool jana (serves stale outdated data)',
            '❌ ETag compare hone par 200 OK return karna instead of `304 Not Modified`'
          ],
          miniChallenge: 'Ek endpoint likho jo ETag calculate kare aur matching hash aane par `304 Not Modified` return kare.',
          quiz: {
            question: 'Jab client `If-None-Match` header bhejta hai aur server par data unchanged hota hai, toh server ko kaunsa status code return karna chahiye?',
            options: ['200 OK', '204 No Content', '304 Not Modified', '412 Precondition Failed'],
            answer: '304 Not Modified',
            explanation: '`304 Not Modified` client ko batata hai ki cached data abhi bhi valid hai aur naya body payload download karne ki zaroorat nahi hai.'
          },
          summary: [
            'Cache-Control headers browser aur CDN freshness define karte hain',
            'ETags 304 Not Modified conditional requests ke through bandwidth save karte hain',
            'Redis Cache-Aside database load 90% reduce karta hai'
          ],
          flashcard: {
            q: '`stale-while-revalidate` Cache-Control directive ka kya fayda hota hai?',
            a: 'Ye browser ko cached data turant dikhane deta hai jabki background mein server se naya fresh data revalidate hota rehta hai (Zero perceived latency for users).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: DATABASE TRANSACTIONS & MULTIPART UPLOADS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: Database Transactions & Multipart File Uploads',
      lessons: [
        {
          id: 'rest-database-transactions-concurrency',
          title: 'REST API Database Transactions, Concurrency & Atomic Operations',
          emoji: '🏦',
          xpReward: 45,
          badgeName: 'Transaction Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "E-Commerce checkout API mein: Order banega, Stock kam hoga, aur Payment record hogi! Agar 3rd step mein error aaya toh pehle 2 steps bhi automatically rollback hone chahiye! Database Transactions ka kamaal! 🏦😎"',
            hint: '💡 Masti Sir: "`client.query(\'BEGIN\')` se shuru karo aur `finally { client.release(); }` se connection pool wapas lauta do!"',
            success: '🎉 Masti Sir: "Atomic multi-step REST API transactions mastered! 🔥"',
            mistake: '😅 Masti Sir: "Connection pool client borrow karke release karna bhool jaoge toh server 20 requests ke baad hang ho jayega!"'
          },
          englishDef: 'Enterprise REST APIs execute complex business workflows requiring multi-table atomicity. Integrating PostgreSQL transactions (`BEGIN`, `COMMIT`, `ROLLBACK`) inside Express route handlers guarantees that all operations (e.g. creating an order, decrementing product inventory, recording billing) succeed together or fail without leaving corrupted partial state. Proper connection pool client release prevents socket starvation.',
          hinglishExplain: 'Jab ek single API request multiple database tables ko modify karti hai (jaise Order place karna + Inventory kam karna + Wallet se balance deduct karna), toh use Database Transaction mein wrap kiya jata hai. Agar beech mein koi bhi error aaye, toh `ROLLBACK` poore changes ko undo kar deta hai, ensuring data hamesha 100% consistent rahe.',
          funnyExample: {
            scenario: 'The Flash Sale Ticket Checkout:\n- User buys last Concert Ticket 🎟️\n- Step 1: Create Order Record ✅\n- Step 2: Decrement available tickets: 1 -> 0 ✅\n- Step 3: Card charge fails! ❌\n- Database Transaction: Automatically triggers `ROLLBACK` -> Ticket stock restored back to 1! Zero ghost sales! 🛡️',
            punchline: 'Transactions make sure your business logic is strictly all-or-nothing!'
          },
          visualDiagram: {
            title: 'REST API Transaction Lifecycle Flow',
            nodes: [
              'POST /api/v1/orders -> Checkout Pool Client -> BEGIN',
              '1. Deduct Stock -> 2. Insert Order -> 3. Insert Payment Audit',
              'All Succeed -> COMMIT -> Release Client -> Return 201 Created',
              'Any Error -> ROLLBACK -> Release Client -> Return 500 Error'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Connection Pool Checkout Semantics:',
            steps: [
              '`const client = await pool.connect()` checks out a dedicated socket connection from the pool',
              'Executes `BEGIN`, multi-table DMLs, and `COMMIT` on the exact same dedicated socket',
              '`client.release()` returns the socket handle back to the pool in the `finally` block'
            ]
          },
          code: `// ── ATOMIC TRANSACTION CHECKOUT CONTROLLER ──
import { pool } from '../config/db.js';

export async function processOrderCheckout(req, res, next) {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  const client = await pool.connect(); // Borrow dedicated socket from pool

  try {
    await client.query('BEGIN'); // Start atomic transaction

    // 1. Check stock and acquire pessimistic row lock
    const product = await client.query(
      'SELECT price, stock_quantity FROM products WHERE id = $1 FOR UPDATE',
      [productId]
    );

    if (product.rows.length === 0 || product.rows[0].stock_quantity < quantity) {
      await client.query('ROLLBACK');
      return res.status(400).json({ success: false, error: 'Insufficient product inventory' });
    }

    const totalAmount = product.rows[0].price * quantity;

    // 2. Decrement Inventory
    await client.query(
      'UPDATE products SET stock_quantity = stock_quantity - $1 WHERE id = $2',
      [quantity, productId]
    );

    // 3. Create Order Record
    const orderResult = await client.query(
      'INSERT INTO orders (user_id, total_amount, status) VALUES ($1, $2, $3) RETURNING id, created_at',
      [userId, totalAmount, 'CONFIRMED']
    );

    await client.query('COMMIT'); // Persist all operations atomically

    res.status(201).json({
      success: true,
      data: { orderId: orderResult.rows[0].id, totalAmount, status: 'CONFIRMED' }
    });
  } catch (error) {
    await client.query('ROLLBACK'); // Abort all changes on any error
    next(error);
  } finally {
    client.release(); // Crucial: Always return connection back to pool!
  }
}`,
          codeBreakdown: [
            { part: 'await client.query("BEGIN")', label: 'Initializes transactional isolation boundary on dedicated checked-out client socket', color: '#3b82f6' },
            { part: 'SELECT ... FOR UPDATE', label: 'Pessimistic row lock preventing concurrent race condition double-spending of inventory', color: '#10b981' },
            { part: 'finally { client.release(); }', label: 'Mandatory cleanup block guaranteeing connection is never leaked under any circumstances', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `finally` block mein `client.release()` call karna bhool jana (crashes API under traffic)',
            '❌ Pool client borrow kiye bina direct `pool.query(\'BEGIN\')` chalana (queries hit random pooled sockets!)'
          ],
          miniChallenge: 'Ek wallet transfer API controller likho jo transaction use karke balance transfer kare.',
          quiz: {
            question: 'Node.js `pg` driver mein multiple queries ko ek single transaction mein chalane ke liye kya rule follow karna zaroori hai?',
            options: [
              '`pool.connect()` se dedicated client borrow karke usi client par BEGIN, queries, aur COMMIT chalana',
              'Har query alag pool par chalana',
              'Database restart karna',
              'JSON parse karna'
            ],
            answer: '`pool.connect()` se dedicated client borrow karke usi client par BEGIN, queries, aur COMMIT chalana',
            explanation: 'Transactions socket-bound hoti hain; isliye pool se ek dedicated client borrow karke sabhi transactional queries usi connection par execute karni hoti hain.'
          },
          summary: [
            'Database transactions multi-step business integrity protect karti hain',
            'BEGIN, COMMIT aur ROLLBACK atomic consistency maintain karte hain',
            'finally { client.release() } connection pool exhaustion prevent karta hai'
          ],
          flashcard: {
            q: 'Pessimistic Lock (`SELECT ... FOR UPDATE`) ka kya role hota hai?',
            a: 'Ye targeted row ko lock kar leta hai taaki doosri concurrent request use modify na kar sake jab tak current transaction commit ya rollback na ho jaye (prevents race conditions).'
          }
        },
        {
          id: 'rest-file-upload-multipart',
          title: 'File & Image Upload APIs with Multer, MIME Validation & Cloud Storage',
          emoji: '📁',
          xpReward: 40,
          badgeName: 'Upload Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "5MB ki images ko database tables ke andar base64 string mein mat bharo! `multipart/form-data` aur Multer use karo, file ko Cloud Storage (S3) par bhejo aur database mein sirf CDN image URL save karo! ☁️🖼️😎"',
            hint: '💡 Masti Sir: "File upload mein hamesha 3 security checks karo: 1. File Size Limit (e.g. 5MB), 2. MIME Type Validation (jpeg/png/webp only), 3. Sanitized Filename!"',
            success: '🎉 Masti Sir: "Secure file upload pipeline and S3 storage architecture active! 🔥"',
            mistake: '😅 Masti Sir: "Client ke bheje gaye original filename par bharosa mat karna — use UUID ya random hash se rename karein!"'
          },
          englishDef: 'Binary file uploads require `multipart/form-data` encoding. Middleware such as **Multer** streams incoming multipart chunks into memory or temporary disk storage. Security best practices mandate strict **File Size Limits** (e.g. 5MB), **MIME Type Validation** (`image/jpeg`, `image/png`, `image/webp`), filename sanitization via UUIDs, and offloading storage to S3/Cloud Storage rather than direct relational database storage.',
          hinglishExplain: 'Profile picture ya PDFs upload karne ke liye REST APIs `multipart/form-data` use karti hain. Express mein **Multer** library use hoti hai. Security ke liye hum file size limit lagate hain (e.g. max 5MB) aur MIME type check karte hain taaki koi hacker executable `.exe` ya `.sh` script upload na kar sake. Upload hone ke baad image AWS S3 par save hoti hai aur database mein sirf public URL store hota hai.',
          funnyExample: {
            scenario: 'The Trojan Horse File Upload:\n- Hacker renames virus script: `virus.sh` -> `profile.jpg` 🦹‍♂️\n- Insecure Server: Accepts by extension -> Hacker runs code! 💥\n- Secure Multer Middleware: Checks binary magic bytes & MIME type (`image/png` only) -> Rejects with 400 Bad Request! Virus destroyed! 🛡️✨',
            punchline: 'MIME validation stops malicious file uploads at the front door!'
          },
          visualDiagram: {
            title: 'Secure Multipart File Upload Pipeline',
            nodes: [
              'Client sends: POST /api/v1/users/avatar (multipart/form-data)',
              'Multer Middleware: Size Check (Max 5MB) + MIME Validation (JPEG/PNG/WebP)',
              'Streams file to Cloud Object Storage (Amazon S3 / Cloudinary)',
              'Saves CDN URL in PostgreSQL (avatar_url: "https://cdn.codemasti.com/avatars/uuid.webp")',
              'Returns HTTP 200 OK + CDN URL'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Storing Files in Relational Databases is an Anti-Pattern:',
            steps: [
              'Bloats database backups and table heap pages dramatically',
              'Consumes database RAM and prevents optimal buffer caching of relational indexes',
              'Cloud Object Storage (S3) costs 90% less and serves assets via global edge CDNs'
            ]
          },
          code: `// ── SECURE MULTER UPLOAD CONFIGURATION (upload.middleware.js) ──
import multer from 'multer';
import path from 'path';
import { randomUUID } from 'crypto';

// 1. In-Memory Buffer Storage (Ideal for streaming direct to S3)
const storage = multer.memoryStorage();

// 2. Strict MIME Type Whitelist Filter
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, and WebP images are allowed.'), false);
  }
};

export const uploadAvatar = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB Max File Size Limit
  fileFilter
});

// ── AVATAR UPLOAD ROUTE CONTROLLER ──
app.post('/api/v1/users/avatar', authenticateUser, uploadAvatar.single('avatar'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No image file provided' });
    }

    // Generate unique sanitized cloud filename
    const fileKey = \`avatars/\${randomUUID()}\${path.extname(req.file.originalname)}\`;

    // Simulated S3 Upload -> returns CDN URL
    const cdnUrl = \`https://cdn.codemasti.com/\${fileKey}\`;

    // Save CDN URL in database
    await db.query('UPDATE users SET avatar_url = $1 WHERE id = $2', [cdnUrl, req.user.id]);

    res.json({ success: true, avatarUrl: cdnUrl });
  } catch (error) {
    next(error);
  }
});`,
          codeBreakdown: [
            { part: 'limits: { fileSize: 5 * 1024 * 1024 }', label: 'Enforces strict 5MB upload ceiling preventing disk and memory exhaustion DoS attacks', color: '#3b82f6' },
            { part: 'allowedMimeTypes.includes(file.mimetype)', label: 'MIME type validation rejecting executable or non-image binary payloads', color: '#10b981' },
            { part: 'randomUUID() + path.extname(...)', label: 'Filename sanitization eliminating path traversal attack vectors', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ File size limits omit kar dena (allows 500MB uploads to crash backend memory)',
            '❌ Original client filenames ko bina sanitization ke filesystem par save karna (Path Traversal Vulnerability)'
          ],
          miniChallenge: 'Ek PDF document upload middleware banao with max file size 10MB.',
          quiz: {
            question: 'REST APIs mein image uploads accept karte waqt HTML/HTTP form encoding type kya hona chahiye?',
            options: ['application/json', 'multipart/form-data', 'application/x-www-form-urlencoded', 'text/plain'],
            answer: 'multipart/form-data',
            explanation: 'Binary files aur images transmit karne ke liye standard HTTP encoding format `multipart/form-data` hota hai.'
          },
          summary: [
            'Multipart/form-data binary file streams transmit karta hai',
            'File size limits aur MIME type checks security vulnerabilities ko block karte hain',
            'Cloud Object Storage (S3) files store karne aur CDNs serve karne ka standard architecture hai'
          ],
          flashcard: {
            q: 'File uploads ke liye Cloud Object Storage (S3) database se behtar kyun hai?',
            a: 'S3 90% cheaper hai, petabytes tak automatically scale karta hai, database backups ko bloat nahi karta, aur global CDNs ke sath high-speed delivery enable karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 14: WEBHOOKS, RETRIES & ASYNC OPERATIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 14: Webhooks, HMAC Signature Verification & Async Jobs',
      lessons: [
        {
          id: 'rest-webhooks-async-jobs',
          title: 'Webhooks Architecture, HMAC Signature Verification & 202 Accepted Async Jobs',
          emoji: '🪝',
          xpReward: 45,
          badgeName: 'Webhook Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Polling karne ki jagah — \'Bhai payment hui? Bhai payment hui?\' 100 baar poochne ke bajaye — Webhook use karo! Jab payment hogi toh Stripe khud aapke server ko notification bhej dega! Event-driven architecture! 🪝😎"',
            hint: '💡 Masti Sir: "Webhook receive karte waqt HMAC SHA256 signature verify karna mandatory hai taaki koi fake hacker requests na bhej sake!"',
            success: '🎉 Masti Sir: "HMAC signature verified webhooks and 202 Accepted background jobs active! 🔥"',
            mistake: '😅 Masti Sir: "Heavy background tasks (PDF certificate generation, video encoding) ko synchronous route mein mat chalao — `202 Accepted` return karo aur task queue ko do!"'
          },
          englishDef: '**Webhooks** are user-defined HTTP callbacks triggered by events (e.g. `POST /webhooks/stripe` on `payment_intent.succeeded`). Security requires **HMAC SHA256 Signature Verification** using a shared secret to authenticate the sender. For long-running server operations (video transcode, certificate generation), APIs return **`202 Accepted`** and offload tasks to background message queues.',
          hinglishExplain: 'Webhook ek reverse API call jaisa hota hai. Normal API mein client server se data mangta hai. Webhook mein third-party service (jaise Stripe/Razorpay) aapke server ko event hone par call karti hai (`payment.success`). Security ke liye hum HMAC cryptographic signature verify karte hain. Agar koi task 10 seconds se zyada le (jaise certificate generate karna), toh server instant `202 Accepted` status code return karta hai aur kaam background queue ko de deta hai.',
          funnyExample: {
            scenario: 'The Restaurant Buzzer Device:\n- Polling: Going to counter every 10 seconds: "Is my pizza ready? Is it ready?" 🏃😫\n- Webhook: Chef gives you a vibration buzzer -> When pizza is hot, the buzzer rings automatically! 📟✨\n- Async 202 Accepted: Counter gives you a Token #45 -> "We are baking it, track status at `/api/orders/45/status`!" 🎫',
            punchline: 'Webhooks notify you automatically when real-world events occur!'
          },
          visualDiagram: {
            title: 'Webhook HMAC Verification & Async Job Architecture',
            nodes: [
              '1. External Event (Stripe Payment Succeeds)',
              '2. Stripe dispatches POST /api/v1/webhooks/stripe (Header: Stripe-Signature)',
              '3. Server verifies HMAC SHA256 Signature using shared Webhook Secret',
              '4. Returns 200 OK immediately & pushes job to Redis Background Queue'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'HMAC SHA256 Signature Verification Math:',
            steps: [
              'Sender computes: `expectedSignature = crypto.createHmac(\'sha256\', WEBHOOK_SECRET).update(rawBody).digest(\'hex\')`',
              'Receiver verifies signature using timing-safe comparison: `crypto.timingSafeEqual(computed, received)`',
              'Prevents man-in-the-middle payload tampering and forgery'
            ]
          },
          code: `// ── SECURE WEBHOOK RECEIVER WITH HMAC VERIFICATION (webhook.controller.js) ──
import crypto from 'crypto';

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_test_secret_2026';

export async function handleStripeWebhook(req, res) {
  const signature = req.headers['stripe-signature'];
  const rawBody = req.rawBody; // Express raw unparsed buffer

  if (!signature) {
    return res.status(400).json({ success: false, error: 'Signature header missing' });
  }

  // 1. Verify HMAC SHA256 Signature
  const expectedSignature = crypto
    .createHmac('sha256', WEBHOOK_SECRET)
    .update(rawBody)
    .digest('hex');

  const isValid = crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );

  if (!isValid) {
    return res.status(401).json({ success: false, error: 'Invalid webhook signature' });
  }

  // 2. Handle Event (Idempotent execution)
  const event = JSON.parse(rawBody.toString());
  if (event.type === 'payment_intent.succeeded') {
    const paymentData = event.data.object;
    console.log(\`[WEBHOOK] Payment verified for Order: \${paymentData.metadata.orderId}\`);
    // Update order status in DB
  }

  // Acknowledge receipt to prevent webhook retry storms
  res.status(200).json({ received: true });
}

// ── 202 ACCEPTED ASYNC TASK ENDPOINT ──
app.post('/api/v1/certificates/generate', authenticateUser, async (req, res) => {
  const { courseId } = req.body;
  const jobId = crypto.randomUUID();

  // Push task to background queue (BullMQ / Redis)
  // await certificateQueue.add('generate', { jobId, userId: req.user.id, courseId });

  res.status(202).json({
    success: true,
    message: 'Certificate generation task accepted and queued for processing',
    jobId,
    statusUrl: \`/api/v1/certificates/status/\${jobId}\`
  });
});`,
          codeBreakdown: [
            { part: 'crypto.createHmac("sha256", WEBHOOK_SECRET)', label: 'Computes cryptographic HMAC digest validating authentic sender origin and un-tampered body', color: '#3b82f6' },
            { part: 'crypto.timingSafeEqual(...)', label: 'Timing-attack immune buffer comparison preventing microsecond timing attack analysis', color: '#10b981' },
            { part: 'res.status(202).json({ statusUrl })', label: 'Standard 202 Accepted response for decoupled async background job queue workflows', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Webhook signature check se pehle body ko JSON parse kar dena (signature verification requires the exact untouched raw body buffer!)',
            '❌ Webhook response mein 500 error aane par external service ko 200 na bhejna (causes exponential retry storm from sender)'
          ],
          miniChallenge: 'Ek endpoint likho jo `202 Accepted` status code ke sath `jobId` aur `statusUrl` return kare.',
          quiz: {
            question: 'Jab koi API request ek heavy long-running background task (e.g. video processing ya heavy PDF generation) initiate karti hai, toh server ko kaunsa HTTP status code return karna standard hai?',
            options: ['200 OK', '201 Created', '202 Accepted', '204 No Content'],
            answer: '202 Accepted',
            explanation: '`202 Accepted` indicate karta hai ki request validate ho kar processing ke liye accept ho chuki hai, lekin execution background mein asynchronously complete hoga.'
          },
          summary: [
            'Webhooks event-driven automated notifications deliver karte hain',
            'HMAC SHA256 signature verification spoofing aur tampering prevent karta hai',
            '202 Accepted heavy tasks ko decoupled background workers par offload karta hai'
          ],
          flashcard: {
            q: 'Webhook verification mein `timingSafeEqual()` kyun use karte hain?',
            a: 'Plain string comparison (`===`) pehle mismatched character par turant return ho jata hai, jisse hackers execution time measure karke signature guess kar sakte hain; `timingSafeEqual()` hamesha exact constant time leta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 15: API DOCUMENTATION (OPENAPI & SWAGGER)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 15: API Documentation: OpenAPI 3.0 & Interactive Swagger UI',
      lessons: [
        {
          id: 'rest-openapi-swagger-contracts',
          title: 'OpenAPI 3.0 Specification, Interactive Swagger UI & Contract-First Design',
          emoji: '📖',
          xpReward: 45,
          badgeName: 'OpenAPI Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Bina documentation ke API aisi hai jaise bina switches ke car ka dashboard! OpenAPI 3.0 aur Swagger UI banao — frontend developer browser khol kar live API test kar sakta hai! Zero confusion! 📖😎"',
            hint: '💡 Masti Sir: "Contract-First Design mein pehle API Swagger schema define hota hai, fir frontend aur backend parallel develop hote hain!"',
            success: '🎉 Masti Sir: "Interactive Swagger documentation and OpenAPI contracts successfully deployed! 🔥"',
            mistake: '😅 Masti Sir: "Documentation mein request parameters, response schemas, aur error status codes zaroor document karein!"'
          },
          englishDef: 'The **OpenAPI Specification (OAS 3.0)** is the industry standard for describing RESTful APIs. It standardizes Paths, HTTP Methods, Parameters, Request Bodies, Responses, and Security Schemes in YAML or JSON. **Swagger UI** renders this specification as an interactive web portal (`/api-docs`), enabling developers to explore, test, and generate client SDKs seamlessly.',
          hinglishExplain: 'OpenAPI 3.0 API documentation ka worldwide standard format hai. Isme hum API ke saare endpoints, required fields, aur responses describe karte hain. **Swagger UI** is specification ko ek beautiful web page (`/api-docs`) mein convert kar deta hai jahan koi bhi developer "Try it out" button click karke direct browser se API test kar sakta hai.',
          funnyExample: {
            scenario: 'The IKEA Furniture Manual:\n- Without Manual: Bag full of 100 wooden parts and screws -> Confusion & Anger! 🤯\n- With Swagger OpenAPI Manual: Step-by-step interactive 3D diagram showing exact screws and assembly! 🪑✨',
            punchline: 'Swagger UI is the crystal-clear interactive manual for your backend API!'
          },
          visualDiagram: {
            title: 'OpenAPI Specification & Swagger Architecture',
            nodes: [
              'OpenAPI 3.0 Schema (YAML / JSDoc Comments)',
              'Swagger JSDoc Parser Engine',
              'Swagger UI Web Portal (Hosted at /api-docs)',
              'Interactive "Try It Out" live API execution sandbox!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Contract-First Development Benefits:',
            steps: [
              '1. Frontend and Backend teams agree upon the OpenAPI contract first',
              '2. Frontend generates TypeScript types and mock servers automatically from OAS schema',
              '3. Both teams develop in parallel without blocking each other'
            ]
          },
          code: `// ── SWAGGER JSDoc OPENAPI 3.0 SPECIFICATION (course.routes.js) ──
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CodeMasti LMS Production REST API',
      version: '1.0.0',
      description: 'Official API documentation for CodeMasti learning platform'
    },
    servers: [{ url: 'https://api.codemasti.com/api/v1' }],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @openapi
 * /courses:
 *   get:
 *     summary: Retrieve paginated courses catalog
 *     tags: [Courses]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *     responses:
 *       200:
 *         description: Successful retrieval
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 */`,
          codeBreakdown: [
            { part: "openapi: '3.0.0'", label: 'Declares standard OpenAPI 3.0 specification compatibility format', color: '#3b82f6' },
            { part: 'BearerAuth: { type: "http", scheme: "bearer" }', label: 'Standardizes JWT Bearer security scheme in Swagger UI authorization modal', color: '#10b981' },
            { part: "app.use('/api-docs', swaggerUi.serve, ...)", label: 'Mounts interactive testing documentation UI at public /api-docs endpoint', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ API code update hone ke baad documentation schema update na karna',
            '❌ Swagger UI ko bina authentication ke production internal admin routes par publicly expose kar dena'
          ],
          miniChallenge: 'Swagger JSDoc comment likho jo `POST /courses` endpoint ka request body aur 201 response describe kare.',
          quiz: {
            question: 'REST API documentation ko interactive web page ke roop mein render karne ke liye kaunsa widely used tool use hota hai?',
            options: ['Swagger UI', 'Photoshop', 'Postman Local', 'Babel'],
            answer: 'Swagger UI',
            explanation: '`Swagger UI` OpenAPI (OAS 3.0) specifications ko interactive browser portal mein render karta hai jahan developers live requests test kar sakte hain.'
          },
          summary: [
            'OpenAPI 3.0 RESTful API contracts ka global standard hai',
            'Swagger UI interactive exploration aur documentation deliver karta hai',
            'Contract-First development team collaboration aur testing speed boost karti hai'
          ],
          flashcard: {
            q: 'Contract-First API Design ka sabse bada fayda kya hai?',
            a: 'Frontend aur Backend pehle API contract (OpenAPI schema) par agree karte hain, jisse dono teams mock data ke sath parallel development kar sakti hain bina ek doosre ka wait kiye.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 16: AUTOMATED API TESTING (SUPERTEST)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 16: Automated API Testing with Supertest, Jest & Test Suites',
      lessons: [
        {
          id: 'rest-testing-supertest-postman',
          title: 'Automated API Integration Testing with Supertest, Vitest & Exhaustive Test Suites',
          emoji: '🧪',
          xpReward: 45,
          badgeName: 'Test Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Postman par haath se 50 endpoints click karke test karne ka zamana gaya! Supertest aur Vitest se automated integration tests likho — 1 second mein 100 endpoints test honge (Happy path, 400 validation, 401 unauth, 403 forbidden)! Zero bugs! 🧪😎"',
            hint: '💡 Masti Sir: "Supertest Express `app` ko direct in-memory call karta hai bina real network port open kiye — lightning fast tests!"',
            success: '🎉 Masti Sir: "Automated API integration test suite successfully executed! 100% test coverage! 🔥"',
            mistake: '😅 Masti Sir: "Test cases mein sirf 200 OK test mat karo — invalid input (400), wrong token (401), aur non-existent ID (404) zaroor test karein!"'
          },
          englishDef: 'Automated API integration testing validates HTTP endpoints under real server execution. Using **Supertest** paired with **Jest** or **Vitest**, developers assert Status Codes, Headers, Response Envelopes, and Database state. An exhaustive test suite covers: (1) Happy Path (200/201), (2) Validation Failures (422/400), (3) Unauthenticated (401), (4) Unauthorized (403), (5) Not Found (404), and (6) Conflict (409).',
          hinglishExplain: 'Automated Testing se hum code likhte hain jo hamari API ko automatically test karta hai. **Supertest** library Express app par HTTP requests bhejti hai aur check karti hai ki kya status 200 aaya, kya data sahi return hua, aur kya galat password par 401 mila. Har code commit par automated tests run hote hain taaki naya code purane features ko na tode.',
          funnyExample: {
            scenario: 'The Crash Test Dummy Testing:\n- Manual Tester: Clicks buttons manually for 3 hours 🥱\n- Automated Supertest Suite: Runs 150 endpoint test cases in 1.4 seconds across all edge cases! 🏎️💨\n- Test Results: All 150 Passed! Green Lights! Deploy to Production with 100% confidence! 🚀',
            punchline: 'Automated tests are your safety net against production bugs!'
          },
          visualDiagram: {
            title: 'Automated API Test Suite Matrix',
            nodes: [
              'POST /api/v1/courses Test Suite',
              '├── Test 1: Valid payload + Admin Token -> Expects 201 Created & DB record',
              '├── Test 2: Missing title -> Expects 422 Validation Error',
              '├── Test 3: No token -> Expects 401 Unauthorized',
              '└── Test 4: Student Token -> Expects 403 Forbidden'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Supertest In-Memory Execution:',
            steps: [
              'Supertest binds to Express application instance directly via Node.js internal HTTP event dispatcher',
              'Zero TCP socket listening overhead; executes at memory speed (~5-10ms per test)',
              'Rolls back test database transactions after each test run for test isolation'
            ]
          },
          code: `// ── AUTOMATED INTEGRATION TEST SUITE (course.test.js) ──
import request from 'supertest';
import { app } from '../app.js';
import { generateTokens } from '../services/jwt.service.js';

describe('POST /api/v1/courses Integration Tests', () => {
  let adminToken;
  let studentToken;

  beforeAll(() => {
    // Generate test mock authentication tokens
    adminToken = generateTokens({ id: 1, role: 'admin', email: 'admin@codemasti.com' }).accessToken;
    studentToken = generateTokens({ id: 2, role: 'student', email: 'student@codemasti.com' }).accessToken;
  });

  // 1. Happy Path Test (201 Created)
  it('should create a new course when valid admin token and data are provided', async () => {
    const response = await request(app)
      .post('/api/v1/courses')
      .set('Authorization', \`Bearer \${adminToken}\`)
      .send({
        title: 'Complete REST API Masterclass',
        price: 499.00,
        category: 'backend'
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.data.title).toBe('Complete REST API Masterclass');
  });

  // 2. Validation Failure Test (422 Unprocessable Entity)
  it('should return 422 error when title is missing', async () => {
    const response = await request(app)
      .post('/api/v1/courses')
      .set('Authorization', \`Bearer \${adminToken}\`)
      .send({ price: 499.00 });

    expect(response.status).toBe(422);
    expect(response.body.success).toBe(false);
  });

  // 3. Authorization Forbidden Test (403 Forbidden)
  it('should return 403 Forbidden when non-admin user attempts creation', async () => {
    const response = await request(app)
      .post('/api/v1/courses')
      .set('Authorization', \`Bearer \${studentToken}\`)
      .send({ title: 'Hacked Course', price: 0 });

    expect(response.status).toBe(403);
  });
});`,
          codeBreakdown: [
            { part: 'request(app).post("/api/v1/courses")', label: 'Supertest in-memory HTTP request dispatcher simulating real client calls', color: '#3b82f6' },
            { part: '.set("Authorization", `Bearer ${adminToken}`)', label: 'Injects valid authorization header simulating authenticated admin session', color: '#10b981' },
            { part: 'expect(response.status).toBe(201)', label: 'Test assertion verifying exact HTTP status code and response payload structure', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Tests ko real production database par run kar dena (always use dedicated test database or in-memory DB)',
            '❌ Test cases ke beech shared state leak hone dena (always clean test DB between suites)'
          ],
          miniChallenge: 'Ek Supertest test case likho jo `GET /api/v1/courses/99999` par 404 Not Found assert kare.',
          quiz: {
            question: 'Node.js aur Express REST APIs ke liye automated integration testing karte waqt in-memory HTTP requests simulate karne ke liye kaunsi standard library use hoti hai?',
            options: ['Supertest', 'Nodemon', 'Babel', 'Webpack'],
            answer: 'Supertest',
            explanation: '`Supertest` Express apps par automated HTTP assertions execute karne ki gold standard library hai.'
          },
          summary: [
            'Automated integration tests regression bugs ko deploy hone se rokte hain',
            'Supertest in-memory speed par HTTP endpoints assert karta hai',
            'Har endpoint par Happy path, 400, 401, 403, 404 test cases hona mandatory hai'
          ],
          flashcard: {
            q: 'Unit Test aur Integration Test mein kya farak hai?',
            a: 'Unit Test kisi single isolated function ko test karta hai (mocking dependencies); Integration Test poori HTTP request pipeline (Routes, Middleware, Controllers, Database) ko ek sath real scenario mein test karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 17: OBSERVABILITY, LOGGING & PERFORMANCE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 17: Observability, Structured Logging, N+1 Problem & Health Checks',
      lessons: [
        {
          id: 'rest-logging-observability-n1',
          title: 'Structured JSON Logging, Correlation IDs, Health Checks & The N+1 Query Problem',
          emoji: '📊',
          xpReward: 45,
          badgeName: 'Observability Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ek request ke liye 100 database queries chalana? Database bolega: \'Bhai ek hi baar mein maang leta!\'. N+1 Problem ko JOINs aur batching se khatam karo! Saath hi `/health` checks aur structured JSON logging enable karo! 📊😎"',
            hint: '💡 Masti Sir: "Kubernetes aur Cloud Load Balancers `/health` (Liveness) aur `/ready` (Readiness) endpoints call karke check karte hain ki kya server alive hai!"',
            success: '🎉 Masti Sir: "Production observability and query optimization successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "Logs mein kabhi bhi passwords, credit cards ya JWT tokens print mat karna!"'
          },
          englishDef: 'Production observability encompasses **Structured JSON Logging** (Winston / Pino), **Correlation Request IDs** (`X-Request-ID`), **Health Checks** (`GET /health` liveness & `GET /ready` readiness checking database sockets), and eliminating the **N+1 Query Problem** (where an API executes 1 query for a parent collection followed by $N$ individual child queries, resolved via relational `JOINs` or batched IN queries).',
          hinglishExplain: 'Production APIs mein do critical cheezein hoti hain:\n1. **Observability & Health Checks**: `/health` endpoint load balancer ko batata hai ki server healthy hai ya nahi. Structured JSON logging se errors search karna aasan hota hai.\n2. **N+1 Problem**: Jab aap 50 courses fetch karte ho aur har course ke author ka naam nikaalne ke liye 50 alag queries chalate ho (Total 51 queries!). Isko Single SQL `JOIN` se 1 query mein solve kiya jata hai.',
          funnyExample: {
            scenario: 'The N+1 Grocery Store Trips:\n- N+1 Anti-Pattern: Go to grocery store -> Buy 1 egg -> Come home -> Go back -> Buy 1 tomato -> Come home... (50 trips! 🏃‍♂️😫)\n- Batched SQL JOIN: Go to store with complete shopping list -> Buy everything in 1 trip! (1 trip! 🛒⚡)',
            punchline: 'Eliminate N+1 queries by fetching related data in a single batched join!'
          },
          visualDiagram: {
            title: 'N+1 Query Disaster vs Single Optimized JOIN',
            nodes: [
              'N+1 Anti-Pattern: 1 Query (SELECT 50 courses) + 50 Queries (SELECT author WHERE id = ?) -> 51 DB Roundtrips (Slow)',
              'Optimized Solution: 1 Single Query (SELECT c.*, u.username FROM courses c JOIN users u ON c.author_id = u.id) -> 1 DB Roundtrip (Instant)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Liveness vs Readiness Health Checks in Kubernetes:',
            steps: [
              '`GET /health/live`: Checks if Node.js event loop is responsive (if fails, container is restarted)',
              '`GET /health/ready`: Checks if external dependencies (PostgreSQL pool, Redis) are reachable (if fails, traffic is routed away)'
            ]
          },
          code: `// ── 1. PRODUCTION HEALTH CHECK ENDPOINTS (health.routes.js) ──
import express from 'express';
import { pool } from '../config/db.js';

export const healthRouter = express.Router();

// Liveness Probe (Is server process running?)
healthRouter.get('/live', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Readiness Probe (Are database dependencies connected?)
healthRouter.get('/ready', async (req, res) => {
  try {
    // Ping PostgreSQL with 1-second timeout
    await pool.query('SELECT 1');
    res.status(200).json({ status: 'READY', database: 'CONNECTED' });
  } catch (error) {
    res.status(503).json({ status: 'DOWN', database: 'DISCONNECTED', error: error.message });
  }
});

// ── 2. SOLVING N+1 QUERY PROBLEM VIA SQL JOIN ──
// BAD N+1 APPROACH (DO NOT DO THIS):
// const courses = await db.query('SELECT * FROM courses');
// for (const c of courses.rows) {
//   c.author = await db.query('SELECT * FROM users WHERE id = $1', [c.author_id]); // 100 queries!
// }

// OPTIMAL SINGLE-QUERY JOIN APPROACH:
export async function getCoursesWithAuthors(req, res) {
  const result = await pool.query(\`
    SELECT 
      c.id,
      c.title,
      c.price,
      json_build_object('id', u.id, 'username', u.username, 'email', u.email) AS author
    FROM courses c
    INNER JOIN users u ON c.instructor_id = u.id
    LIMIT 50;
  \`);

  res.json({ success: true, data: result.rows });
}`,
          codeBreakdown: [
            { part: 'json_build_object("id", u.id, ...)', label: 'PostgreSQL native JSON aggregator constructing nested author object directly inside database engine', color: '#3b82f6' },
            { part: 'INNER JOIN users u ON ...', label: 'Single-roundtrip relational join completely eliminating the N+1 multiple query anti-pattern', color: '#10b981' },
            { part: 'res.status(503).json({ status: "DOWN" })', label: 'Returns 503 Service Unavailable when database connection is severed alerting load balancers', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Loops ke andar `await db.query()` execute karna (causes severe N+1 database connection saturation)',
            '❌ Health check endpoint mein sensitive database credentials ya environment variables return kar dena'
          ],
          miniChallenge: 'Ek `/health/ready` endpoint implement karo jo PostgreSQL aur Redis connectivity verify kare.',
          quiz: {
            question: 'REST APIs mein N+1 Query Problem ka primary cause kya hota hai?',
            options: [
              'Parent records ki list fetch karne ke baad loop ke andar har child record ke liye separate database query chalana',
              'CSS file missing hona',
              'Server port 5432 par chalna',
              'API documentation na hona'
            ],
            answer: 'Parent records ki list fetch karne ke baad loop ke andar har child record ke liye separate database query chalana',
            explanation: 'N+1 problem tab hoti hai jab 1 parent query ke baad har row ke liye loop mein N individual child queries execute hoti hain, saturating the database.'
          },
          summary: [
            'Health checks (`/health/live`, `/health/ready`) high-availability load balancing enable karte hain',
            'N+1 queries ko SQL JOINs aur JSON aggregations se 1 single roundtrip mein solve karein',
            'Structured logging observability aur real-time debugging power karti hai'
          ],
          flashcard: {
            q: 'Liveness Probe aur Readiness Probe mein kya difference hai?',
            a: '`Liveness Probe` check karta hai ki kya app process zinda hai; `Readiness Probe` check karta hai ki kya app database aur cache se connected hai aur traffic accept karne ke liye ready hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 18: INDUSTRY CAPSTONE PROJECT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 18: Industry Capstone Project: CodeMasti Production REST API',
      lessons: [
        {
          id: 'rest-projects-capstone-codemasti',
          title: 'Full Stack Capstone: Complete CodeMasti LMS REST API Architecture',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'REST Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Routes, Zod Validation, Central Error Handlers, JWT Dual-Token Rotation, RBAC, Rate Limiting, ETag Caching, Transactions, aur Swagger Docs — sab kuch jod kar ek complete CodeMasti Production REST API banayenge! 🏆😎"',
            hint: '💡 Masti Sir: "Auth, Courses, Lessons, Quizzes, Progress, aur Bookmarks — saari modules Clean Architecture follow karengi!"',
            success: '🎉 Masti Sir: "Phenomenal achievement! You have built an enterprise-grade Production REST API! 🚀"',
            mistake: '😅 Masti Sir: "Clean architecture follow karo — controller mein direct SQL query mat likhna!"'
          },
          englishDef: 'The final Capstone Project synthesizes advanced REST API engineering to architect the complete CodeMasti Learning Platform backend API. Modules span Authentication (JWT & Refresh Rotation), Course Catalog (Zod validation, Filtering, Pagination), Lessons & Quizzes (Transactional submission, XP reward increments), Bookmarks, Discussions, and OpenAPI/Swagger Documentation.',
          hinglishExplain: 'Is Capstone Project mein hum CodeMasti platform ka complete production REST API architecture build karenge. Isme Auth module (JWT + bcrypt), Courses module (Search, Pagination, Filtering), Lesson Progress module (Atomic database transactions se XP award karna), aur interactive Swagger documentation shamil hai.',
          funnyExample: {
            scenario: 'The Enterprise LMS Production Architecture:\n- 100,000 Concurrent Learners 🧑‍🎓\n- Zero SQL Injection via Parameterized Queries 🛡️\n- Sub-10ms Response Times via Redis & ETag Caching ⚡\n- Zero Double Spending via Idempotency & DB Transactions 🏦\n- Complete Interactive Swagger Docs at `/api-docs` 📖',
            punchline: 'From beginner to certified production REST API architect!'
          },
          visualDiagram: {
            title: 'Complete CodeMasti Production REST API Blueprint',
            nodes: [
              'Client Applications (React Frontend / Mobile Apps)',
              'Reverse Proxy / Helmet / CORS / Global Rate Limiter',
              'API Version Gateway (/api/v1/...)',
              '├── /auth (Register, Login, Refresh, Me)',
              '├── /courses (Catalog, Search, Pagination, ETag)',
              '├── /progress (Atomic Quiz & XP Award Transactions)',
              '└── /api-docs (Swagger UI Interactive Portal)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production Deployment Checklist:',
            steps: [
              'Set `NODE_ENV=production`',
              'Configure secure connection pooling with timeouts',
              'Enable Gzip compression (`compression()` middleware)',
              'Enforce HTTPS and HttpOnly SameSite cookies'
            ]
          },
          code: `// ═══════════════════════════════════════════════════════
// CODEMASTI PRODUCTION REST API SERVER (server.js)
// ═══════════════════════════════════════════════════════
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import { globalErrorHandler } from './middleware/error.middleware.js';
import { requestTracingMiddleware } from './middleware/tracing.middleware.js';
import { globalApiLimiter } from './middleware/rateLimiter.middleware.js';

// Route imports
import { authRouter } from './routes/auth.routes.js';
import { courseRouter } from './routes/course.routes.js';
import { progressRouter } from './routes/progress.routes.js';
import { healthRouter } from './routes/health.routes.js';

const app = express();

// 1. Security & Core Middleware Pipeline
app.use(helmet());
app.use(cors({ origin: 'https://codemasti.com', credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '1mb' }));
app.use(requestTracingMiddleware);
app.use('/api/', globalApiLimiter);

// 2. API Routes
app.use('/health', healthRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/progress', progressRouter);

// 3. Centralized Global Error Handler
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`🚀 CodeMasti Production REST API running on port \${PORT}\`);
});`,
          codeBreakdown: [
            { part: 'app.use(helmet()); app.use(compression());', label: 'Production-ready middleware stack handling security headers and gzip payload compression', color: '#3b82f6' },
            { part: 'app.use("/api/v1/...", ...)', label: 'Clean versioned API endpoint route mounts separating modular business domains', color: '#10b981' },
            { part: 'app.use(globalErrorHandler)', label: 'Final pipeline catch-all sanitizing errors and delivering standard JSON error envelopes', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Global error handler ko routes se pehle declare kar dena (must be placed at the very end of the middleware chain!)',
            '❌ `compression()` middleware omit kar dena (increases JSON payload network transfer latency)'
          ],
          miniChallenge: 'CodeMasti server setup mein `quizRouter` module add karo and test with Supertest.',
          quiz: {
            question: 'Express.js application mein `globalErrorHandler` middleware ko pipeline mein kahan place karna zaroori hota hai?',
            options: [
              'Sabhi routes aur middleware ke sabse aakhri mein (after all routes)',
              'Sabse pehle line mein',
              'Controllers ke andar',
              'Database file mein'
            ],
            answer: 'Sabhi routes aur middleware ke sabse aakhri mein (after all routes)',
            explanation: 'Error handling middleware ko hamesha sabhi routes aur normal middleware ke baad sabse aakhri mein place kiya jata hai taaki preceding routes se aane wale `next(error)` catch ho sakein.'
          },
          summary: [
            'Production REST API modular clean architecture aur security principles combine karti hai',
            'Versioned routing, JWT auth, validation, rate limiting aur error handling enterprise standard hain',
            'CodeMasti REST API scalable high-throughput applications power karne ke liye ready hai'
          ],
          flashcard: {
            q: 'Production REST API launch karne se pehle top 3 security settings kya hain?',
            a: '1. Helmet security headers, 2. Rate limiting on sensitive endpoints, 3. Parameterized queries for SQL injection prevention.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 19: FAANG INTERVIEW MASTERY & SYSTEM DESIGN
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 19: FAANG REST API Interview Mastery & Scalable System Design',
      lessons: [
        {
          id: 'rest-interview-system-design',
          title: 'Top 30 FAANG REST API Interview Questions & High-Scale API System Design',
          emoji: '💼',
          xpReward: 50,
          badgeName: 'API Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Google, Amazon aur Uber ke backend interviews mein jo sabse tough REST API questions aate hain — PUT vs PATCH semantics, Idempotency keys, 401 vs 403, Token Storage security, aur 100,000 req/sec System Design — sab yahan master karenge! 😎"',
            hint: '💡 Masti Sir: "System design answer dete waqt Explain karo: CDN -> Load Balancer -> API Gateway (Rate Limiting/Auth) -> Microservices -> Redis Cache -> Primary/Replica Databases!"',
            success: '🥳 Masti Sir: "Congratulations! You have completed the Complete REST API Masterclass! You are now a Job-Ready Production REST API Certified Architect! 🚀"',
            mistake: '😅 Masti Sir: "Interview mein sirf status code mat bolo — HTTP specification ke underlying reasons bhi explain karo!"'
          },
          englishDef: 'Comprehensive preparation for Tier-1 and FAANG technical interviews covering core REST API architecture: PUT vs PATCH idempotency differences, 401 Unauthorized vs 403 Forbidden, safe storage of JWT tokens against XSS/CSRF, distributed rate limiting algorithms, caching with ETags and Cache-Control, and architecting high-scale distributed API Gateways handling millions of concurrent requests.',
          hinglishExplain: 'Top product companies ke technical interviews mein aane wale classic REST API questions ko master karein. Isme HTTP semantics, security mechanisms (XSS/CSRF/CORS), idempotency in payments, aur high-scale multi-tier system design architecture shamil hai.',
          funnyExample: {
            scenario: 'The FAANG System Design Interview:\n- Interviewer: "How would you design a REST API handling 500,000 requests per minute during a Flash Sale?" 🏢\n- Candidate: "1. Cloudflare CDN caching for static catalog\n2. API Gateway with Redis Token Bucket Rate Limiting\n3. Short-lived JWT verification at Gateway layer\n4. Idempotency Keys on POST /orders to prevent double charge\n5. 202 Accepted with Background Message Queue for billing!\n6. Read Replicas & ETag caching!" 🎯\n- Interviewer: "Hired on the spot as Senior Staff Backend Engineer!" 🚀',
            punchline: 'True REST API mastery connects low-level HTTP headers to high-level scalable architecture!'
          },
          visualDiagram: {
            title: 'High-Scale Multi-Tier REST API System Architecture',
            nodes: [
              '500,000 Clients -> Cloudflare Global Edge CDN (Static Cache & DDoS Protection)',
              'Load Balancer (HAProxy / AWS ALB)',
              'API Gateway Cluster (JWT Verification, Rate Limiting, CORS & Routing)',
              'Stateless Node.js / Express Microservices (Autoscaling Cluster)',
              'Redis Caching Cluster (Hot Data & Session Store)',
              'PostgreSQL Primary (Writes) + 4 Read Replicas (Reads)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Top 5 Interview Rules for REST API Engineers:',
            steps: [
              '1. Always use nouns for URLs (`/users`), verbs for HTTP methods (`POST`)',
              '2. Differentiate 401 (Authentication required) from 403 (Authenticated, but Forbidden by RBAC)',
              '3. Emphasize that PUT is Idempotent full-replacement, while PATCH is partial-update',
              '4. Defend against XSS by storing tokens in HttpOnly SameSite=Strict cookies',
              '5. Always propose Idempotency Keys for critical state-changing POST financial operations'
            ]
          },
          code: `// ── TOUGH INTERVIEW PROBLEM: DISTRIBUTED TOKEN BUCKET RATE LIMITER (CONCEPTUAL) ──
class TokenBucketRateLimiter {
  constructor(capacity, refillRatePerSecond) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRatePerSecond;
    this.lastRefillTimestamp = Date.now();
  }

  allowRequest() {
    this.refill();
    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true; // Request Allowed
    }
    return false; // Throttled -> Return HTTP 429
  }

  refill() {
    const now = Date.now();
    const elapsedTimeInSeconds = (now - this.lastRefillTimestamp) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsedTimeInSeconds * this.refillRate);
    this.lastRefillTimestamp = now;
  }
}`,
          codeBreakdown: [
            { part: 'class TokenBucketRateLimiter', label: 'Classic token bucket rate limiting algorithm powering API Gateways (Envoy/Kong)', color: '#3b82f6' },
            { part: 'this.tokens = Math.min(this.capacity, ...)', label: 'Continuous mathematical token replenishment based on elapsed milliseconds', color: '#10b981' },
            { part: 'return false; // Throttled', label: 'Triggers HTTP 429 Too Many Requests response with calculated Retry-After header', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Interview mein REST ko sirf "GET aur POST" bol kar chhod dena (highlight Statelessness, Uniform Interface, Cacheability)',
            '❌ Scaling question mein Caching aur Connection Pooling propose na karna'
          ],
          miniChallenge: 'Explain karo: "Agar PUT idempotent hai, toh kya har baar same response body aana zaroori hai?" (No, server state must be identical, response body can vary e.g. updated_at timestamp).',
          quiz: {
            question: 'REST API architecture mein Stateless constraint ka kya primary architectural benefit hota hai?',
            options: [
              'Server ko client sessions memory mein hold nahi karni padti, enabling effortless horizontal scaling across multiple servers',
              'Database ki zaroorat khatam ho jaati hai',
              'Password yaad nahi rakhna padta',
              'Browser fast ho jata hai'
            ],
            answer: 'Server ko client sessions memory mein hold nahi karni padti, enabling effortless horizontal scaling across multiple servers',
            explanation: 'Statelessness allow karti hai ki koi bhi incoming request load balancer dwara kisi bhi backend server instance par route ho sake bina session state sync kiye.'
          },
          summary: [
            'REST API architectural principles scalable web systems power karte hain',
            'Idempotency, HTTP status semantics aur Token security core interview topics hain',
            'Scalable system design CDNs, Gateways, Redis caching aur Read Replicas combine karta hai'
          ],
          flashcard: {
            q: '`401 Unauthorized` aur `403 Forbidden` mein kya primary distinction hai?',
            a: '`401 Unauthorized` ka matlab hai client authenticate nahi hai (login required); `403 Forbidden` ka matlab hai client authenticated hai par uske role/permissions ke hisab se use is resource par access mana hai.'
          }
        }
      ]
    }
  ]
}

export default restapiCourse
