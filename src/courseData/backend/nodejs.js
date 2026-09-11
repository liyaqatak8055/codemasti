export const nodejsCourse = {
  id: 'nodejs',
  title: 'Node.js',
  description: 'JavaScript ko server pe chalao. High-performance, event-driven, non-blocking asynchronous backend runtime.',
  icon: '🟢',
  category: 'backend',
  certificateName: 'NODE.JS',
  topicsCount: 28,
  practiceCount: 38,
  projectsCount: 7,
  hoursEstimate: 12,
  level: 'Intermediate',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: NODE.JS ARCHITECTURE & EVENT LOOP
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Node.js Architecture & Event Loop',
      lessons: [
        {
          id: 'node-intro-architecture',
          title: 'What is Node.js & Event Loop?',
          emoji: '🟢',
          xpReward: 35,
          badgeName: 'Node.js Starter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Pehle JS sirf browser mein atki thi, Node.js ne use server ki duniya ka raja bana diya 😎"',
            hint: '🤦 Masti Sir: "Node.js single-threaded hai par libuv ke thread pool se background mein heavy tasks bina ruke handle karta hai!"',
            success: '🥳 Masti Sir: "Zabardast! Pehla Node.js backend server successfully running 🔥"',
            mistake: '😅 Masti Sir: "res.end() call karna bhool gaye? Browser ghoomta rahega loader leke 😂"'
          },
          englishDef: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Google Chrome's V8 JavaScript engine. It executes JavaScript outside the browser using an event-driven, non-blocking I/O model powered by libuv.",
          hinglishExplain: 'Node.js browser ke bahar computer/server pe JavaScript chalane ka runtime engine hai. Iska sabse bada fayda ye hai ki single thread pe chalte hue bhi ye hazaron requests ek sath handle kar leta hai bina block hue (Non-blocking asynchronous I/O).',
          funnyExample: {
            scenario: 'Ek Super-Fast Dhaba Waiter:\n- Multi-threaded Server (Java/PHP): Har table ke liye ek naya waiter hire karo 👨‍🍳👨‍🍳👨‍🍳 (Bohot kharcha/RAM consumption!)\n- Node.js Single-Threaded: Ek hi super-active waiter jo sabhi tables se order leta hai, kitchen mein bhejta hai, aur jiska khana pehle tayyar ho use deliver karta hai! ⚡',
            punchline: 'Single thread + Event loop = Millions of concurrent requests!'
          },
          visualDiagram: {
            title: 'Node.js Runtime Architecture',
            nodes: ['V8 Engine (JS execution)', 'libuv (Event Loop & Thread Pool)', 'Node.js C++ Bindings', 'OS Kernel / File System / Network'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Event Loop Phases:',
            steps: ['Timers (setTimeout, setInterval)', 'Pending I/O callbacks', 'Poll (Retrieve new I/O events)', 'Check (setImmediate)', 'Close callbacks']
          },
          code: `const http = require('http');

// Create HTTP Server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  
  const responseData = {
    message: 'Namaste from CodeMasti Node.js Server! 🟢',
    status: 'online',
    timestamp: new Date().toISOString()
  };

  res.end(JSON.stringify(responseData));
});

const PORT = 5005;
server.listen(PORT, () => {
  console.log(\`Server is running smoothly on http://localhost:\${PORT}\`);
});`,
          codeBreakdown: [
            { part: "require('http')", label: 'CommonJS syntax to import built-in HTTP module', color: '#3b82f6' },
            { part: 'http.createServer((req, res) => ...)', label: 'Creates server instance listening to requests', color: '#10b981' },
            { part: 'res.writeHead(200, {...})', label: 'Sets HTTP Status 200 OK and JSON Content-Type header', color: '#f59e0b' },
            { part: 'res.end(...)', label: 'Sends response payload and closes connection stream', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Port already in use error (`EADDRINUSE`) — change port or kill previous running process',
            '❌ `res.end()` ke baad code execute karna ya multiple times response send karne ki koshish karna'
          ],
          miniChallenge: 'Ek server banao jo `/api/status` route pe `{ health: "ok", uptime: process.uptime() }` return kare.',
          quiz: {
            question: 'Node.js backend asynchronous I/O operations ke liye kis C++ library ka use karta hai?',
            options: ['jQuery', 'libuv', 'Babel', 'Webpack'],
            answer: 'libuv',
            explanation: 'libuv ek high-performance multi-platform C library hai jo Node.js mein Event Loop aur asynchronous I/O operations provide karti hai.'
          },
          summary: ['Node.js Chrome V8 engine pe bana JavaScript runtime hai', 'Non-blocking I/O model se high concurrency milti hai', 'Built-in `http` module se lightweight web servers banaye jaate hain'],
          flashcard: { q: 'Node.js non-blocking kyu kehlata hai?', a: 'Kyunki time-consuming I/O operations (file reading, network queries) main execution thread ko block nahi karte balki background mein chalte hain.' }
        },
        {
          id: 'node-modules-npm',
          title: 'Modules System & NPM Package Manager',
          emoji: '📦',
          xpReward: 30,
          badgeName: 'Package Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Node.js ki module system aur npm — ye dono milke duniya ke sabse bade code ecosystem banate hain! 🌍"',
            hint: '💡 Masti Sir: "require() CommonJS hai aur import/export ES Modules! package.json mein type: module add karo ES Modules ke liye!"',
            success: '🥳 Masti Sir: "Package install ho gaya! Duniya bhar ke developers ka code ek npm install se tumhare project mein 🔥"',
            mistake: '😅 Masti Sir: "node_modules folder delete karke git pe push karne ki zaroorat nahi! .gitignore mein add karo 😅"'
          },
          englishDef: 'Node.js uses a module system to organize code into reusable files. CommonJS (require/exports) is the original system. ES Modules (import/export) is the modern standard. NPM (Node Package Manager) manages external packages via package.json.',
          hinglishExplain: 'Node.js mein apna code files mein split kar sakte ho (modules). `require()` se dusri files ka code import karo. NPM se 2 million+ packages free mein use karo — jaise `express`, `mongoose`, `axios`, `lodash` etc.',
          funnyExample: {
            scenario: 'NPM ek magical grocery store jaisa hai:\n- Tumhara project = Recipe (package.json)\n- npm install = Shopping karna 🛒\n- node_modules = Refrigerator mein rakha saman 🧊\n- require()/import = Recipe se ingredient nikalna!\n\nBest part? 2 million+ ingredients free available hain! 😍',
            punchline: 'npm install = Pure coding ki duniya ka superpower!'
          },
          code: `// CommonJS Modules (Traditional Node.js)
// math.js - Module file
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

module.exports = { add, multiply };

// main.js - Using the module
const { add, multiply } = require('./math');
console.log(add(5, 3));       // 8
console.log(multiply(4, 7));  // 28

// ES Modules (Modern - add "type": "module" in package.json)
// mathUtils.mjs
export const subtract = (a, b) => a - b;
export default function divide(a, b) {
  if (b === 0) throw new Error('Division by zero!');
  return a / b;
}

// app.mjs
import divide, { subtract } from './mathUtils.mjs';
console.log(subtract(10, 4)); // 6
console.log(divide(20, 4));   // 5`,
          codeBreakdown: [
            { part: 'module.exports = { add, multiply }', label: 'CommonJS: Exports named functions from module', color: '#3b82f6' },
            { part: "require('./math')", label: 'CommonJS: Imports module synchronously', color: '#10b981' },
            { part: 'export const subtract', label: 'ES Modules: Named export syntax', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ CommonJS (`require`) aur ES Modules (`import`) ek hi file mein mix karna',
            '❌ npm packages ke older versions install karna without version pinning'
          ],
          interviewQuestions: [
            'CommonJS aur ES Modules mein kya fark hai?',
            'package.json aur package-lock.json ka kya role hai?'
          ],
          quiz: {
            question: 'Node.js mein ES Modules (import/export) enable karne ke liye package.json mein kya add karna hoga?',
            options: ['"esModules": true', '"type": "module"', '"modules": "es"', '"useESM": true'],
            answer: '"type": "module"',
            explanation: 'package.json mein `"type": "module"` add karne par Node.js sabhi .js files ko ES Modules ke roop mein treat karta hai.'
          },
          summary: ['CommonJS require() aur ES Modules import/export dono supported hain', 'npm se 2M+ packages available hain', 'package.json project ka dependency manifest hai'],
          flashcard: { q: 'node_modules folder ko git mein kyu nahi push karte?', a: 'Kyunki ye npm install se automatically regenerate ho jata hai aur iski size bohot badi hoti hai.' }
        },
        {
          id: 'node-process-env',
          title: 'Process Object & Environment Variables',
          emoji: '⚙️',
          xpReward: 30,
          badgeName: 'Env Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "API keys aur passwords kabhi hardcode mat karo! .env file use karo ya tumhara GitHub pe secret expose ho jaayega! 😱"',
            hint: '💡 Masti Sir: "process.env.NODE_ENV === development check karo — production mein detailed errors mat dikhao!"',
            success: '🥳 Masti Sir: "Environment variables set ho gayi! Ab secrets safe hain 🔐"',
            mistake: '😅 Masti Sir: ".env file ko .gitignore mein daalna bhool gaye? Database password GitHub pe live ho gaya... oops 😬"'
          },
          englishDef: 'The `process` object is a global Node.js object providing information and control over the current Node.js process. Environment variables (stored in .env files) keep sensitive configuration data like API keys and database URLs out of source code.',
          hinglishExplain: 'process object se Node.js process ki saari information milti hai — current directory, command-line arguments, environment variables, memory usage etc. .env file mein sensitive data store karo aur dotenv package se load karo.',
          code: `// .env file (NEVER commit this to git!)
DATABASE_URL=mongodb://localhost:27017/codemasti
JWT_SECRET=supersecretkey123!
PORT=5005
NODE_ENV=development

// server.js
const dotenv = require('dotenv');
dotenv.config(); // Load .env variables

// Now accessible via process.env
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;

console.log(\`Server mode: \${NODE_ENV}\`);
console.log(\`Process ID: \${process.pid}\`);
console.log(\`Node version: \${process.version}\`);
console.log(\`CPU architecture: \${process.arch}\`);

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('Gracefully shutting down server...');
  server.close(() => {
    process.exit(0);
  });
});`,
          commonMistakes: [
            '❌ .env file ko .gitignore mein add karna bhool jana',
            '❌ dotenv.config() call karne se pehle process.env variables access karne ki koshish'
          ],
          quiz: {
            question: 'Environment variables load karne ke liye sabse popular Node.js package kaunsa hai?',
            options: ['envloader', 'dotenv', 'config', 'env-handler'],
            answer: 'dotenv',
            explanation: 'dotenv package .env file parse karke variables ko process.env mein inject karta hai.'
          },
          summary: ['process.env se runtime environment variables milte hain', 'dotenv package .env file ko load karta hai', '.env file hamesha .gitignore mein add karo'],
          flashcard: { q: 'process.exit(0) vs process.exit(1) mein kya fark hai?', a: '0 means success/clean exit, 1 ya koi non-zero value means error exit code.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: FILE SYSTEM & BUILT-IN MODULES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: File System (fs), Path & Streams',
      lessons: [
        {
          id: 'node-fs-streams',
          title: 'Working with Files & Streams',
          emoji: '📁',
          xpReward: 40,
          badgeName: 'File Wrangler',
          englishDef: "Node.js provides the `fs/promises` module to read, write, append, and delete files asynchronously, and Streams to process large datasets chunk-by-chunk without overwhelming memory.",
          hinglishExplain: '`fs` module se aap server ki hard drive pe files read, write, aur modify kar sakte ho. Badi files (jaise 2GB video) ke liye Streams use hoti hain jo data ko chhota chhota chunk bana kar pipe karti hain.',
          funnyExample: {
            scenario: 'Paani ka gilaas vs Pipe:\n- Normal readFile: Pura 200 litre ka tanki ek baar mein uthane ki koshish karna 🚰 (Out of Memory crash!)\n- Stream: Pipeline se thoda thoda paani continuous flow karna! 🌊',
            punchline: 'Streams = Memory safe big data processing!'
          },
          code: `const fs = require('fs/promises');
const path = require('path');

async function manageDatabaseFile() {
  const filePath = path.join(__dirname, 'database.json');

  try {
    // 1. Write file
    const initialData = { users: [], version: "1.0.0" };
    await fs.writeFile(filePath, JSON.stringify(initialData, null, 2), 'utf8');
    console.log("File written successfully! ✅");

    // 2. Read file
    const fileContent = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(fileContent);
    console.log("Read from DB:", parsed);

    // 3. Append to file
    await fs.appendFile('logs.txt', \`[\${new Date().toISOString()}] Server started\\n\`);
    
    // 4. Check if file exists
    const stats = await fs.stat(filePath);
    console.log("File size:", stats.size, "bytes");
  } catch (error) {
    console.error("File error:", error.message);
  }
}

manageDatabaseFile();`,
          codeBreakdown: [
            { part: "require('fs/promises')", label: 'Promise-based asynchronous file system operations', color: '#3b82f6' },
            { part: "path.join(__dirname, 'database.json')", label: 'Cross-platform safe path resolver (Windows/Mac/Linux)', color: '#10b981' },
            { part: 'await fs.readFile(filePath, "utf8")', label: 'Reads text file asynchronously returning string', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production mein synchronous blocking methods (`fs.readFileSync`) use karna',
            '❌ File paths hardcode karna with slashes instead of `path.join()`'
          ],
          miniChallenge: 'Ek function likho jo log message ko `logs.txt` file mein timestamp ke sath `fs.appendFile` kare.',
          quiz: {
            question: 'Path strings ko combine karne ke liye `path.join()` kyu use karna chahiye?',
            options: ['File size chhota karne ke liye', 'Different operating systems (Windows `\\\\` vs Linux `/`) ke path separators safely handle karne ke liye', 'File ko encrypt karne ke liye', 'RAM speed badhane ke liye'],
            answer: 'Different operating systems (Windows `\\\\` vs Linux `/`) ke path separators safely handle karne ke liye',
            explanation: 'path.join() automatically OS-specific path separators normalize karta hai taaki code har environment mein chale.'
          },
          summary: ['fs/promises non-blocking file operations deta hai', 'path module cross-platform file paths resolve karta hai', 'Streams memory-efficient large file processing ke liye use hote hain'],
          flashcard: { q: 'Buffer kya hota hai Node.js mein?', a: 'Binary raw data (bytes) ko memory mein hold karne wala array-like structure.' }
        },
        {
          id: 'node-streams-pipes',
          title: 'Readable & Writable Streams with Pipes',
          emoji: '🌊',
          xpReward: 40,
          badgeName: 'Stream Surfer',
          englishDef: 'Streams are objects that let you read data from a source or write data to a destination in continuous fashion. The pipe() method connects a Readable stream to a Writable stream automatically managing backpressure.',
          hinglishExplain: 'Streams badi files process karne ka tarika hai. pipe() se ek stream ka output doosre stream ke input se connect kar sakte ho — jaise ek video file ko compress karke doosri file mein likhna, bina pura memory mein load kiye!',
          code: `const fs = require('fs');
const zlib = require('zlib');

// 1. Read large file using Readable Stream
const readStream = fs.createReadStream('largefile.txt', { encoding: 'utf8', highWaterMark: 64 * 1024 });

readStream.on('data', (chunk) => {
  console.log(\`Received chunk of \${chunk.length} bytes\`);
});

readStream.on('end', () => console.log('File reading complete! ✅'));
readStream.on('error', (err) => console.error('Stream error:', err.message));

// 2. Pipe: compress a file using pipe() chain
const source = fs.createReadStream('input.txt');
const gzip = zlib.createGzip();
const destination = fs.createWriteStream('output.txt.gz');

// Pipeline: Read -> Compress -> Write
source.pipe(gzip).pipe(destination);

destination.on('finish', () => {
  console.log('File compressed successfully! 🗜️');
});`,
          commonMistakes: [
            '❌ Stream events listen karne se pehle stream operations shuru karna',
            '❌ Pipe ke baad error events handle na karna'
          ],
          quiz: {
            question: 'Stream mein `highWaterMark` option kya control karta hai?',
            options: ['File ka maximum size', 'Internal buffer mein kitna data ek baar store hoga (chunk size)', 'Stream ki speed', 'File ka encoding format'],
            answer: 'Internal buffer mein kitna data ek baar store hoga (chunk size)',
            explanation: 'highWaterMark internal buffer size define karta hai. Default 16KB hai. Badi files ke liye ise bada set karo.'
          },
          summary: ['Streams large data ko chunk-by-chunk process karte hain', 'pipe() se multiple streams chain ho jaate hain', 'Backpressure automatically manage hota hai pipe se'],
          flashcard: { q: '4 types of streams kaunse hain Node.js mein?', a: 'Readable, Writable, Duplex (both), Transform (modify while piping).' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: ASYNC PATTERNS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Callbacks, Promises & Async/Await',
      lessons: [
        {
          id: 'node-callbacks',
          title: 'Callback Pattern & Callback Hell',
          emoji: '🔄',
          xpReward: 35,
          badgeName: 'Async Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Callbacks Node.js ka bread & butter tha! Aaj bhi built-in modules mein callbacks use hote hain 😎"',
            hint: '💡 Masti Sir: "Nested callbacks = Pyramid of Doom / Callback Hell! Error-first pattern (err, data) hamesha follow karo!"',
            success: '🥳 Masti Sir: "Wah! Callbacks samajh aa gayi! Ab Promises seekhte hain jo isse kaafi behtar hain 🔥"',
            mistake: '😅 Masti Sir: "Error check karna bhool gaye? Crash guaranteed hai production mein 😅"'
          },
          englishDef: "A callback is a function passed as argument to another function, to be called when an asynchronous operation completes. Node.js uses error-first callbacks: (error, data) => {} convention where the first argument is always the error.",
          hinglishExplain: 'Callback ek function hai jo kisi doosre function ko pass kiya jata hai aur async operation complete hone par call hota hai. Node.js convention: pehla argument hamesha `error` hota hai (null means no error), doosra `data` hota hai.',
          code: `const fs = require('fs');

// Error-first Callback Pattern
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return; // IMPORTANT: Return to stop execution!
  }
  console.log('File content:', data);
  
  // Callback Hell (Pyramid of Doom)
  fs.readFile('config.json', 'utf8', (err2, config) => {
    if (err2) return console.error(err2);
    
    const parsed = JSON.parse(config);
    fs.writeFile('output.txt', data + parsed.prefix, (err3) => {
      if (err3) return console.error(err3);
      console.log('All done!'); // Deeply nested - hard to read!
    });
  });
});`,
          commonMistakes: [
            '❌ Error argument check na karna before using data',
            '❌ Callback ke andar synchronous errors ko try/catch se wrap na karna'
          ],
          quiz: {
            question: 'Node.js error-first callback pattern mein pehla argument kya hota hai?',
            options: ['Data', 'Status code', 'Error object (null if success)', 'Callback function'],
            answer: 'Error object (null if success)',
            explanation: 'Error-first pattern mein pehla argument error hota hai — operation fail hone par Error object, success hone par null.'
          },
          summary: ['Callbacks oldest async pattern hain', 'Error-first convention: (err, data) follow karo', 'Deep nesting se Callback Hell hoti hai — Promises se solve karo'],
          flashcard: { q: 'Callback Hell ko kaise avoid karte hain?', a: 'Promises ya Async/Await use karo ya named functions se deeply nested callbacks flatten karo.' }
        },
        {
          id: 'node-promises-async',
          title: 'Promises & Async/Await in Node.js',
          emoji: '⚡',
          xpReward: 40,
          badgeName: 'Promise Keeper',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Promises ne Callback Hell ka end kar diya! Async/Await ne usse aur bhi readable banana — ye Node.js ka modern tarika hai! 🚀"',
            hint: '💡 Masti Sir: "Promise.all se parallel requests karo! Sequential await loop se ek ek karke karo. Difference bada important hai performance ke liye!"',
            success: '🥳 Masti Sir: "Async/Await perfectly implement ho gaya! Code bilkul synchronous jaisa readable hai lekin async hai internally 🔥"',
            mistake: '😅 Masti Sir: "await ke baad try/catch lagana bhool gaye? Promise rejection unhandled rahegi!"'
          },
          englishDef: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation. Async/Await is syntactic sugar over Promises that makes async code look synchronous, improving readability.',
          hinglishExplain: 'Promises callbacks se behtar hain — .then().catch() chain se readable code milta hai. Async/Await aur bhi clean hai — async function ke andar await lagao, synchronous jaisa code likho, lekin asynchronously chalega!',
          code: `const fs = require('fs/promises');

// Promise-based approach
function readUserData(userId) {
  return fs.readFile(\`users/\${userId}.json\`, 'utf8')
    .then(data => JSON.parse(data))
    .catch(err => {
      console.error('User not found:', err.message);
      return null;
    });
}

// Async/Await approach (Recommended!)
async function processUserOrder(userId, productId) {
  try {
    // Sequential: One at a time
    const user = await fs.readFile(\`users/\${userId}.json\`, 'utf8');
    const product = await fs.readFile(\`products/\${productId}.json\`, 'utf8');
    
    return { user: JSON.parse(user), product: JSON.parse(product) };
  } catch (error) {
    throw new Error(\`Processing failed: \${error.message}\`);
  }
}

// Promise.all — Parallel execution (FASTER! 🚀)
async function getAllData() {
  const [users, products, orders] = await Promise.all([
    fs.readFile('users.json', 'utf8'),
    fs.readFile('products.json', 'utf8'),
    fs.readFile('orders.json', 'utf8')
  ]);
  
  return {
    users: JSON.parse(users),
    products: JSON.parse(products),
    orders: JSON.parse(orders)
  };
}`,
          codeBreakdown: [
            { part: 'async function processUserOrder', label: 'async keyword: function returns Promise automatically', color: '#3b82f6' },
            { part: 'await fs.readFile(...)', label: 'Waits for Promise resolution without blocking Event Loop', color: '#10b981' },
            { part: 'Promise.all([...])', label: 'Runs multiple promises in parallel — much faster than sequential', color: '#f59e0b' }
          ],
          interviewQuestions: [
            'Promise.all() aur Promise.allSettled() mein kya fark hai?',
            'Async/Await use karte waqt error handling kaise karte hain?'
          ],
          quiz: {
            question: 'Promise.all() kab fail hota hai?',
            options: ['Jab koi bhi promise pending rahe', 'Jab koi ek bhi promise reject ho', 'Jab sabhi promises reject ho jaayein', 'Jab promises timeout ho jaayein'],
            answer: 'Jab koi ek bhi promise reject ho',
            explanation: 'Promise.all() fail-fast hai — koi bhi ek promise reject hone par immediately reject ho jaata hai, baaki sabhi cancel ho jaate hain.'
          },
          summary: ['Async/Await Promises ka cleaner syntax hai', 'try/catch se errors handle karo async functions mein', 'Promise.all() parallel execution ke liye use karo'],
          flashcard: { q: 'Promise ke 3 states kaunse hain?', a: 'Pending (initial), Fulfilled (resolved with value), Rejected (failed with error).' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: HTTP, ROUTING & REST API
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: HTTP Server, Routing & REST APIs',
      lessons: [
        {
          id: 'node-http-routing',
          title: 'HTTP Routing & Request Handling',
          emoji: '🌐',
          xpReward: 40,
          badgeName: 'Route Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Pure Node.js se REST API banana — koi framework nahi, seedha HTTP module se! Isse samajh aa jaayega ki Express ke andar kya hota hai 💪"',
            hint: '💡 Masti Sir: "req.url aur req.method se har request ko route karo! JSON response ke liye Content-Type header set karna mat bhoolna!"',
            success: '🥳 Masti Sir: "Wah! Raw Node.js API ekdum perfectly kaam kar rahi hai 🔥"',
            mistake: '😅 Masti Sir: "Body parse karna bhool gaye? POST data `Buffer chunks` mein aata hai, directly req.body nahi mila ga!"'
          },
          englishDef: 'Building HTTP servers with pure Node.js requires manually parsing the URL, HTTP method, and request body. This is what frameworks like Express abstract away.',
          hinglishExplain: 'Pure Node.js se HTTP server banate waqt har cheez manually karni padti hai — URL parse karo, method check karo (GET/POST/PUT/DELETE), request body ko chunks mein collect karo, phir parse karo aur response bhejo.',
          code: `const http = require('http');
const url = require('url');

// In-memory data store
let students = [
  { id: 1, name: 'Rahul', marks: 95 },
  { id: 2, name: 'Priya', marks: 88 }
];

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Helper: Send JSON response
  const sendJSON = (data, status = 200) => {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  };

  // Helper: Parse request body
  const getBody = () => new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => resolve(body ? JSON.parse(body) : {}));
  });

  // ROUTING
  if (pathname === '/api/students' && method === 'GET') {
    sendJSON(students);
  } else if (pathname === '/api/students' && method === 'POST') {
    const body = await getBody();
    const newStudent = { id: Date.now(), ...body };
    students.push(newStudent);
    sendJSON(newStudent, 201);
  } else {
    sendJSON({ error: 'Route not found' }, 404);
  }
});

server.listen(5005, () => console.log('API Server running on port 5005 🚀'));`,
          commonMistakes: [
            '❌ POST body direct `req.body` se read karne ki koshish (raw Node.js mein undefined hoga)',
            '❌ JSON response mein Content-Type header set na karna'
          ],
          quiz: {
            question: 'Raw Node.js server mein POST request ka body kaise read karte hain?',
            options: ['req.body se directly', 'req.on("data") chunks ko collect karke', 'req.text() call karke', 'req.json() call karke'],
            answer: 'req.on("data") chunks ko collect karke',
            explanation: 'Raw Node.js mein POST body streaming chunks mein aata hai. Sabhi chunks collect karke concatenate karo phir parse karo.'
          },
          summary: ['HTTP module se manual routing possible hai', 'Request body chunks mein stream hota hai', 'Express in sabhi tasks ko abstract aur simplify karta hai'],
          flashcard: { q: 'CORS header kya hai aur kyu important hai?', a: 'Access-Control-Allow-Origin header browser ko batata hai ki kaunse domains cross-origin requests kar sakte hain.' }
        },
        {
          id: 'node-events-emitter',
          title: 'EventEmitter & Custom Events',
          emoji: '📡',
          xpReward: 35,
          badgeName: 'Event Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Node.js ke core mein EventEmitter hai! Samjho ise aur tum Node.js ko puri tarah samjhoge 🧠"',
            hint: '💡 Masti Sir: "removeListener() ya off() se memory leaks bachao! Warna listeners stack hote rehenge! 😅"',
            success: '🥳 Masti Sir: "Custom event system ban gaya! Ye hi pattern Express, HTTP aur Stream ke andar bhi use hota hai 🔥"',
            mistake: '😅 Masti Sir: "Unlimited listeners add karne par MaxListenersExceededWarning aayega — emitter.setMaxListeners() se fix karo!"'
          },
          englishDef: 'EventEmitter is the core Node.js pattern for asynchronous event-driven programming. Objects that emit events extend EventEmitter. Listeners are registered with .on() and triggered with .emit().',
          hinglishExplain: 'EventEmitter ek pub-sub (publisher-subscriber) pattern implement karta hai. Aap events define karte ho (jaise "orderPlaced"), listeners register karte ho (.on()), aur jab event emit hota hai (.emit()) toh registered listeners automatically call ho jaate hain.',
          code: `const EventEmitter = require('events');

// Custom OrderSystem using EventEmitter
class OrderSystem extends EventEmitter {
  constructor() {
    super();
    this.orders = [];
  }
  
  placeOrder(order) {
    const newOrder = { id: Date.now(), ...order, status: 'pending' };
    this.orders.push(newOrder);
    
    // Emit events for different systems to react!
    this.emit('orderPlaced', newOrder);
    this.emit('notification', \`New order #\${newOrder.id} from \${order.customerName}\`);
    return newOrder;
  }
}

const orderSystem = new OrderSystem();

// Register listeners (different modules can listen independently)
orderSystem.on('orderPlaced', (order) => {
  console.log(\`📦 Warehouse: Preparing order #\${order.id}\`);
});

orderSystem.on('orderPlaced', (order) => {
  console.log(\`📧 Email: Sending confirmation to customer\`);
});

orderSystem.on('notification', (msg) => {
  console.log(\`🔔 SMS Alert: \${msg}\`);
});

// Place an order — all listeners fire automatically!
orderSystem.placeOrder({ customerName: 'Rahul', product: 'Node.js Course', price: 999 });`,
          interviewQuestions: [
            'EventEmitter pattern kya hai aur iska use case kya hai?',
            'once() aur on() mein kya fark hai EventEmitter mein?'
          ],
          quiz: {
            question: 'EventEmitter mein `once()` method ka kya kaam hai?',
            options: ['Event ko ek baar emit karta hai', 'Listener ko sirf ek baar call karta hai aur phir automatically remove karta hai', 'Pehli error ko capture karta hai', 'Event emitter reset karta hai'],
            answer: 'Listener ko sirf ek baar call karta hai aur phir automatically remove karta hai',
            explanation: '.once() se registered listener event ke pehle occurrence par hi call hota hai, phir automatically unregister ho jaata hai.'
          },
          summary: ['EventEmitter pub-sub pattern implement karta hai', '.on() se permanent, .once() se one-time listeners register hote hain', 'Node.js core (HTTP, Streams, fs) internally EventEmitter use karta hai'],
          flashcard: { q: 'EventEmitter mein memory leak kab hoti hai?', a: 'Jab bahut saare listeners register karo aur kabhi remove na karo, listeners stack hote rehte hain.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: DATABASE CONNECTIVITY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Database Integration & ORM/ODM',
      lessons: [
        {
          id: 'node-mongodb-mongoose',
          title: 'MongoDB with Mongoose ODM',
          emoji: '🍃',
          xpReward: 45,
          badgeName: 'Database Driver',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Mongoose = MongoDB ka ORM! Schema, validation, aur queries ekdum clean way mein! 🍃"',
            hint: '💡 Masti Sir: "mongoose.connect() karo pehle, phir models banao! Connection string .env mein rakho, hardcode mat karo!"',
            success: '🥳 Masti Sir: "Database connected! Ab real data save aur read kar rahe ho — production-ready backend ban raha hai 🔥"',
            mistake: '😅 Masti Sir: "await lagana bhool gaye db operations mein? Kuch nahi save hoga aur koi error bhi nahi dikhega 😅"'
          },
          englishDef: 'Mongoose is an Object Document Mapper (ODM) for MongoDB and Node.js. It provides schema-based solution to model application data with built-in type casting, validation, query building and business logic hooks.',
          hinglishExplain: 'Mongoose se MongoDB mein data structured way mein store karte hain. Pehle Schema define karo (fields aur types), phir Model banao, phir .save(), .find(), .findById(), .updateOne(), .deleteOne() methods se CRUD operations karo.',
          code: `const mongoose = require('mongoose');

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch(err => console.error('❌ DB Error:', err.message));

// 2. Define Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  createdAt: { type: Date, default: Date.now }
});

// 3. Create Model
const User = mongoose.model('User', userSchema);

// 4. CRUD Operations
async function userOperations() {
  // Create
  const newUser = await User.create({
    name: 'Rahul Kumar',
    email: 'rahul@codemasti.com',
    password: 'hashed_password_123'
  });
  
  // Read
  const users = await User.find({ role: 'student' }).select('name email');
  const oneUser = await User.findById(newUser._id);
  
  // Update
  await User.findByIdAndUpdate(newUser._id, { name: 'Rahul Sharma' }, { new: true });
  
  // Delete
  await User.findByIdAndDelete(newUser._id);
}`,
          commonMistakes: [
            '❌ Mongoose model mein unique: true lagane ke baad index rebuild na karna',
            '❌ ObjectId ko string se directly compare karna (.equals() method use karo)'
          ],
          quiz: {
            question: 'Mongoose mein `findByIdAndUpdate()` mein `{ new: true }` option kyu lagate hain?',
            options: ['Nayi document create karne ke liye', 'Updated document return karne ke liye (warna old document return hota hai)', 'Validation run karne ke liye', 'Index rebuild karne ke liye'],
            answer: 'Updated document return karne ke liye (warna old document return hota hai)',
            explanation: 'By default findByIdAndUpdate() update se pehle wali document return karta hai. { new: true } se updated document milta hai.'
          },
          summary: ['Mongoose schema se data structure enforce hoti hai', 'Built-in validators (required, unique, enum, minlength) aate hain', 'populate() se references resolve hote hain (JOIN ka MongoDB equivalent)'],
          flashcard: { q: 'Mongoose .lean() kya karta hai?', a: 'Plain JavaScript objects return karta hai Mongoose Document instances ki jagah — faster queries ke liye useful, especially when not modifying data.' }
        },
        {
          id: 'node-mysql-postgres',
          title: 'SQL Databases: MySQL & PostgreSQL with Node.js',
          emoji: '🗄️',
          xpReward: 40,
          badgeName: 'SQL Node Driver',
          englishDef: 'Node.js connects to SQL databases via drivers: `mysql2` for MySQL and `pg` for PostgreSQL. These provide connection pooling, parameterized queries to prevent SQL injection, and transaction support.',
          hinglishExplain: 'Node.js se MySQL ya PostgreSQL se connect karne ke liye drivers use karte hain. Connection Pool se baar baar new connections banana avoid hota hai. Parameterized queries (?) SQL injection se protect karti hain.',
          code: `const mysql = require('mysql2/promise');

// Connection Pool (Recommended for production!)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  waitForConnections: true
});

// CRUD Operations
async function getCourse(courseId) {
  const [rows] = await pool.execute(
    'SELECT id, title, instructor, price FROM courses WHERE id = ? AND is_active = ?',
    [courseId, true] // Parameterized! No SQL injection 🛡️
  );
  return rows[0] || null;
}

async function createEnrollment(userId, courseId) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    
    // Multiple queries in transaction
    await connection.execute(
      'INSERT INTO enrollments (user_id, course_id) VALUES (?, ?)',
      [userId, courseId]
    );
    await connection.execute(
      'UPDATE courses SET enrolled_count = enrolled_count + 1 WHERE id = ?',
      [courseId]
    );
    
    await connection.commit();
    console.log('✅ Enrollment transaction committed!');
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release(); // Always release connection back to pool!
  }
}`,
          commonMistakes: [
            '❌ String concatenation se SQL queries banana — SQL injection risk!',
            '❌ Transaction mein connection.release() finally mein na likhna'
          ],
          quiz: {
            question: 'SQL queries mein `?` placeholders kyu use karte hain?',
            options: ['Performance improve karne ke liye', 'SQL Injection attacks se bachne ke liye', 'Code chhota karne ke liye', 'Database compatible karne ke liye'],
            answer: 'SQL Injection attacks se bachne ke liye',
            explanation: 'Parameterized queries mein user input directly SQL string mein inject nahi hoti — driver safely escape karta hai.'
          },
          summary: ['Connection pooling se repeated connections avoid hoti hain', 'Parameterized queries SQL injection prevent karti hain', 'Transactions se multiple queries atomically run hoti hain'],
          flashcard: { q: 'Connection Pool kyu better hai repeated connect() calls se?', a: 'Pool existing connections reuse karta hai — har query ke liye naya TCP handshake avoid hota hai, latency kam hoti hai.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: SECURITY & AUTHENTICATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Security, JWT & Middleware Guards',
      lessons: [
        {
          id: 'node-jwt-auth',
          title: 'JWT Authentication in Node.js',
          emoji: '🔐',
          xpReward: 50,
          badgeName: 'Security Guard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JWT — JSON Web Tokens! Stateless authentication jo REST APIs ke liye perfect hai! Sign karo, verify karo, safe raho 🔐"',
            hint: '💡 Masti Sir: "JWT secret .env mein rakho aur rotate karte raho! Short expiry time set karo — 15 min access token, 7 days refresh token!"',
            success: '🥳 Masti Sir: "JWT auth system complete! Ab sirf authorized users hi protected routes access kar sakte hain 🔥"',
            mistake: '😅 Masti Sir: "JWT mein sensitive data (password, card number) mat rakho! Base64 encoded hota hai — anyone decode kar sakta hai!"'
          },
          englishDef: 'JSON Web Token (JWT) is a compact, URL-safe token format for securely transmitting information between parties as JSON. It consists of three Base64-encoded parts: Header.Payload.Signature. The signature verifies authenticity.',
          hinglishExplain: 'JWT teen parts ka hota hai: Header (algorithm info), Payload (user data), aur Signature (tamper-proof seal). Login pe server JWT generate karta hai, client har request mein `Authorization: Bearer <token>` header mein bhejta hai, server verify karta hai.',
          code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET;

// 1. Generate JWT on Login
async function loginUser(email, password, user) {
  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
  if (!isValidPassword) throw new Error('Invalid credentials');
  
  // Generate Access Token (short-lived)
  const accessToken = jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '15m' }
  );
  
  // Generate Refresh Token (long-lived)
  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  return { accessToken, refreshToken };
}

// 2. Middleware: Verify JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"
  
  if (!token) return res.status(401).json({ error: 'Access token required' });
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { userId, role, iat, exp }
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired, please refresh' });
    }
    return res.status(403).json({ error: 'Invalid token' });
  }
}

// 3. Protected Route
app.get('/api/profile', authenticateToken, (req, res) => {
  res.json({ userId: req.user.userId, message: 'Welcome back!' });
});`,
          interviewQuestions: [
            'JWT aur Session-based authentication mein kya fark hai?',
            'Refresh Token pattern kyu use karte hain?',
            'JWT ke kya security risks hain?'
          ],
          quiz: {
            question: 'JWT token ke teen parts kaunse hain?',
            options: ['Username.Password.Salt', 'Header.Payload.Signature', 'Algorithm.Data.Hash', 'Token.Secret.Expiry'],
            answer: 'Header.Payload.Signature',
            explanation: 'JWT = Header (alg, type) . Payload (claims/data) . Signature (HMAC/RSA signed) — dot separated, each Base64URL encoded.'
          },
          summary: ['JWT stateless authentication provide karta hai', 'Short-lived access tokens + long-lived refresh tokens use karo', 'JWT payload publicly decodable hai — sensitive data mat rakho'],
          flashcard: { q: 'JWT ki expiry set karna kyu zaroori hai?', a: 'Bina expiry ke stolen token hamesha ke liye valid rahega. Short expiry se attack window minimize hoti hai.' }
        },
        {
          id: 'node-rate-limiting-security',
          title: 'Rate Limiting, CORS & Security Headers',
          emoji: '🛡️',
          xpReward: 40,
          badgeName: 'Security Shield',
          englishDef: 'Rate limiting prevents abuse by limiting how many requests a client can make in a time window. CORS headers control which origins can access your API. Helmet.js sets security-related HTTP headers automatically.',
          hinglishExplain: 'Rate Limiting se DDoS aur brute force attacks prevent hote hain. CORS se browser-level cross-origin control hota hai. Helmet.js se security headers (XSS protection, content sniffing prevention, HSTS etc.) automatically set hote hain.',
          code: `const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// 1. Helmet: Sets security headers automatically
app.use(helmet());
// Sets: X-Content-Type-Options, X-Frame-Options, HSTS, etc.

// 2. CORS Configuration
app.use(cors({
  origin: ['https://codemasti.com', 'https://app.codemasti.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// 3. Global Rate Limiter (100 requests per 15 mins)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});

// 4. Strict Auth Route Limiter (5 attempts per 15 mins)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
  message: { error: 'Too many login attempts. Account locked for 15 minutes.' }
});

app.use(globalLimiter);
app.post('/api/auth/login', authLimiter, loginHandler);`,
          commonMistakes: [
            '❌ CORS wildcard (*) allow karna production APIs mein',
            '❌ Rate limiting sirf globally apply karna — sensitive routes pe stricter limit lagao'
          ],
          quiz: {
            question: 'Helmet.js middleware kya kaam karta hai?',
            options: ['Request body validate karta hai', 'Security-related HTTP response headers set karta hai', 'SSL certificate generate karta hai', 'Passwords hash karta hai'],
            answer: 'Security-related HTTP response headers set karta hai',
            explanation: 'Helmet.js automatically X-Frame-Options, X-XSS-Protection, HSTS, Content-Security-Policy jaise security headers set karta hai.'
          },
          summary: ['Helmet.js HTTP security headers automatically set karta hai', 'CORS se cross-origin requests control hoti hain', 'Rate limiting se brute force aur DDoS attacks prevent hote hain'],
          flashcard: { q: 'DDoS attack se Node.js API ko kaise bachate hain?', a: 'Rate limiting, load balancers (Nginx/Cloudflare), aur horizontal scaling se.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: PRODUCTION & DEPLOYMENT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Performance, Clustering & Deployment',
      lessons: [
        {
          id: 'node-clustering-performance',
          title: 'Cluster Module & Worker Threads',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Performance Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Single core pe Node.js run kar rahe ho? Bhai, multi-core CPU waste ho raha hai! Cluster module se sab cores use karo! 💪"',
            hint: '💡 Masti Sir: "Cluster = Multiple processes. Worker Threads = Multiple threads within ONE process. CPU-intensive tasks ke liye Workers, I/O ke liye Cluster!"',
            success: '🥳 Masti Sir: "App ab 8 cores pe chal raha hai! Throughput literally 8x improve ho gayi 🔥"',
            mistake: '😅 Masti Sir: "Worker thread mein main process ka memory directly access nahi kar sakte — SharedArrayBuffer ya message passing use karo!"'
          },
          englishDef: "Node.js is single-threaded, using only one CPU core by default. The Cluster module allows creating child processes (workers) sharing the same server port, distributing load across all CPU cores. Worker Threads enable true multi-threading for CPU-intensive tasks.",
          hinglishExplain: 'By default Node.js sirf ek CPU core use karta hai. Cluster module se server ke multiple copies (workers) spawn hote hain — har worker ek CPU core pe chalti hai. Master process load balancer ki tarah kaam karta hai.',
          code: `const cluster = require('cluster');
const http = require('http');
const os = require('os');

const numCPUs = os.cpus().length; // Available CPU cores

if (cluster.isPrimary) {
  // Master process: Spawn workers
  console.log(\`Master \${process.pid} started with \${numCPUs} CPUs\`);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // Create worker process
  }
  
  cluster.on('exit', (worker, code) => {
    console.log(\`Worker \${worker.process.pid} crashed! Restarting...\`);
    cluster.fork(); // Auto-restart on crash!
  });
} else {
  // Worker process: Each runs its own HTTP server
  const server = http.createServer((req, res) => {
    // CPU-intensive task to demonstrate load distribution
    let result = 0;
    for (let i = 0; i < 1000000; i++) result += i;
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      worker: process.pid,
      result,
      message: 'Served by worker!'
    }));
  });
  
  server.listen(5005, () => {
    console.log(\`Worker \${process.pid} listening on port 5005\`);
  });
}`,
          interviewQuestions: [
            'Node.js Cluster aur Worker Threads mein kya fark hai?',
            'PM2 kya karta hai aur kyu use karte hain?'
          ],
          quiz: {
            question: 'Node.js Cluster module se kitne workers banana ideal hai?',
            options: ['Hamesha 2 workers', 'os.cpus().length ke barabar — har CPU core ke liye ek', 'Sirf 1 worker', '100 workers for maximum performance'],
            answer: 'os.cpus().length ke barabar — har CPU core ke liye ek',
            explanation: 'os.cpus().length se machine ke CPU cores count milta hai. Har core pe ek worker spawn karna optimal hai — zyada workers pe context switching overhead badhta hai.'
          },
          summary: ['Cluster module se all CPU cores utilize hoti hain', 'Workers crash hone par auto-restart implement karo', 'PM2 production mein cluster management ke liye industry standard hai'],
          flashcard: { q: 'PM2 kyu use karte hain production mein?', a: 'PM2 process manager hai jo auto-restart, cluster mode, log management, monitoring aur zero-downtime reload provide karta hai.' }
        },
        {
          id: 'node-deployment-docker',
          title: 'Docker, PM2 & Node.js Production Deployment',
          emoji: '🚀',
          xpReward: 55,
          badgeName: 'DevOps Node',
          englishDef: 'Production deployment requires process management (PM2), containerization (Docker), reverse proxy (Nginx), environment-specific configurations, and proper logging for monitoring and debugging.',
          hinglishExplain: 'Production mein Node.js app ko Docker container mein wrap karo. PM2 se process management karo. Nginx ko reverse proxy ke roop mein rakho. Environment-specific configs aur proper logging se debugging aasaan hoti hai.',
          code: `# Dockerfile for Node.js Application
FROM node:20-alpine

# Security: Don't run as root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Install dependencies first (layer caching!)
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY --chown=appuser:appgroup . .

# Switch to non-root user
USER appuser

EXPOSE 5005

# Use node directly — PM2 handles clustering outside Docker
CMD ["node", "server.js"]

---

# PM2 ecosystem.config.js
module.exports = {
  apps: [{
    name: 'codemasti-api',
    script: './server.js',
    instances: 'max',        // Use all CPU cores
    exec_mode: 'cluster',
    watch: false,            // Don't watch in production!
    max_memory_restart: '500M',
    env_production: {
      NODE_ENV: 'production',
      PORT: 5005
    },
    error_file: './logs/error.log',
    out_file: './logs/output.log'
  }]
};

// Start: pm2 start ecosystem.config.js --env production`,
          commonMistakes: [
            '❌ Docker container mein root user se app run karna',
            '❌ package.json copy karne se pehle COPY . . likhna (breaks layer caching!)'
          ],
          quiz: {
            question: 'Dockerfile mein dependencies pehle install karne ke baad source code copy karne ka kya faida hai?',
            options: ['Security improve hoti hai', 'Docker layer caching se build faster hoti hai jab code change hota hai', 'Image size chhoti hoti hai', 'Container faster start hota hai'],
            answer: 'Docker layer caching se build faster hoti hai jab code change hota hai',
            explanation: 'package.json rarely changes. Agar dependencies layer pehle hai toh code changes pe sirf last layers rebuild hoti hain, npm install skip hoti hai.'
          },
          summary: ['Docker containerization platform-independent deployment deti hai', 'PM2 production process management ke liye industry standard hai', 'Never run Node.js as root in production containers'],
          flashcard: { q: 'Nginx aur Node.js ek saath kyu use karte hain?', a: 'Nginx reverse proxy, SSL termination, static file serving, load balancing aur rate limiting efficiently handle karta hai. Node.js apni application logic pe focus karta hai.' }
        },
        {
          id: 'node-final-project',
          title: 'Node.js Complete REST API Project',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'Node.js Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Final challenge! Sab kuch ek mein — auth, database, error handling, rate limiting, clustering! Production-ready API banaate hain! 🏆"',
            hint: '💡 Masti Sir: "MVC pattern follow karo: Models (data), Controllers (logic), Routes (endpoints). Code clean aur maintainable rahega!"',
            success: '🥳 Masti Sir: "NODE.JS MASTER! Tumne production-ready REST API banayi! Backend developer ho tum officially ab! 🔥🎉"',
            mistake: '😅 Masti Sir: "Har route mein try/catch mat likho — async wrapper use karo ya express-async-errors package!"'
          },
          englishDef: 'A production-ready Node.js REST API incorporates: MVC architecture, MongoDB/MySQL database, JWT authentication, input validation, rate limiting, error handling middleware, logging (Winston), and proper project structure.',
          hinglishExplain: 'Complete Node.js project mein sab kuch properly organize hota hai: routes/, controllers/, models/, middlewares/, utils/ folders. Centralized error handling, winston logger, input validation (joi/zod), aur proper HTTP status codes.',
          code: `// Project Structure:
// ├── server.js          → Entry point
// ├── app.js             → Express app config
// ├── routes/
// │   ├── auth.routes.js
// │   └── courses.routes.js
// ├── controllers/
// │   ├── auth.controller.js
// │   └── courses.controller.js
// ├── models/
// │   └── User.model.js
// ├── middlewares/
// │   ├── auth.middleware.js
// │   └── error.middleware.js
// └── utils/
//     └── logger.js

// app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/courses', require('./routes/courses.routes'));

// 404 handler
app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }));

// Global error handler (must have 4 parameters!)
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

module.exports = app;`,
          challenge: {
            instruction: 'Complete REST API banao: User registration/login with JWT, course CRUD operations, protected routes with role-based access (admin/student).',
            initialCode: '// Your production-ready Node.js API here!\nconst express = require("express");\nconst app = express();\n\n',
            validator: (code) => {
              const n = code.toLowerCase();
              return n.includes('express') && (n.includes('jwt') || n.includes('auth'));
            },
            successMessage: '🏆 NODE.JS EXPERT CERTIFICATE EARNED! Outstanding backend development skills! +60 XP!'
          },
          interviewQuestions: [
            'Node.js application ko horizontally scale kaise karte hain?',
            'Error handling ke best practices kya hain Node.js mein?',
            'Memory leaks kaise detect aur fix karte hain Node.js mein?'
          ],
          quiz: {
            question: 'MVC pattern mein Controller ka kya kaam hota hai?',
            options: ['Database schema define karta hai', 'HTTP routes define karta hai', 'Business logic handle karta hai — Model se data lekar View/Response ko deta hai', 'CSS styles define karta hai'],
            answer: 'Business logic handle karta hai — Model se data lekar View/Response ko deta hai',
            explanation: 'Controller = Middleman between Model (data) aur View (response). Request process karta hai, Model se data fetch karta hai aur formatted response bhejta hai.'
          },
          summary: ['Node.js Course Complete! 🏆', 'V8 Engine, Event Loop, Modules, Streams, HTTP, Security, Clustering — sab master hua!', 'Next: Express.js framework seekhte hain!'],
          flashcard: { q: 'Node.js ka sabse bada advantage kya hai?', a: 'Non-blocking I/O aur JavaScript dono frontend aur backend mein — ek hi language puri stack ke liye!' },
          funFact: '🎉 Node.js pe LinkedIn, Netflix, PayPal, NASA, aur Uber apne backend power karte hain! Tu bhi ab Node.js developer hai!'
        }
      ]
    }
  ]
}

export default nodejsCourse
