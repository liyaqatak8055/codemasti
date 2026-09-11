import { systemDesignMasteryChapters } from './systemdesign/mastery.js'

export const systemdesignCourse = {
  id: 'systemdesign',
  title: 'System Design',
  description: 'Large-scale distributed systems architecture. Scalability, load balancing, caching (Redis), CAP theorem, sharding, aur microservices.',
  icon: '🏗️',
  category: 'interview',
  certificateName: 'SYSTEM DESIGN',
  topicsCount: 150,
  practiceCount: 75,
  projectsCount: 10,
  hoursEstimate: 42,
  level: 'Beginner to Advanced',
  achievements: [
    { id: 'sd-explorer', title: 'System Design Explorer', icon: '🏆', xp: 50, desc: 'Started the system design journey' },
    { id: 'sd-api-architect', title: 'API Architect', icon: '🏆', xp: 150, desc: 'Designed reliable API contracts' },
    { id: 'sd-database-designer', title: 'Database Designer', icon: '🏆', xp: 150, desc: 'Mastered data and scaling choices' },
    { id: 'sd-cache-master', title: 'Cache Master', icon: '🏆', xp: 200, desc: 'Handled caching and event-driven flows' },
    { id: 'sd-reliability-engineer', title: 'Reliability Engineer', icon: '🏆', xp: 250, desc: 'Designed for failure and recovery' },
    { id: 'sd-architect', title: 'CodeMasti System Architect', icon: '🏆', xp: 400, desc: 'Completed the global platform capstone' }
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: SCALABILITY & LOAD BALANCING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Scalability, Load Balancers & High Availability',
      lessons: [
        {
          id: 'sd-scalability-lb',
          title: 'Vertical vs Horizontal Scaling & Load Balancing',
          emoji: '⚖️',
          xpReward: 40,
          badgeName: 'System Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "1 user ke liye app banana aasan hai, 10 crore active users ke liye architecture design karna asli engineering hai 😎"',
            hint: '🤦 Masti Sir: "Vertical scaling (RAM badhana) ki ek physical limit hoti hai; Horizontal scaling (multiple servers add karna) infinite scale deta hai!"',
            success: '🥳 Masti Sir: "Zabardast! Load balancer ne traffic smoothly divide kar diya 🔥"',
            mistake: '😅 Masti Sir: "Single Point of Failure (SPOF) chhod diya? Agar wo server gira toh poori company down 😂"'
          },
          englishDef: 'System scalability is the measure of a system’s ability to increase capacity by adding computational resources. Vertical scaling (scale-up) adds power to a single machine, while Horizontal scaling (scale-out) distributes load across multiple commodity servers via Load Balancers (NGINX, HAProxy, AWS ALB).',
          hinglishExplain: 'System Design ka pehla niyam hai: Kabhi bhi saara bojh ek hi computer pe mat daalo. Load Balancer ek traffic police jaisa hota hai jo aane wali lakhon requests ko alag alag backend servers mein barabar baant deta hai (Round Robin ya Least Connections algorithm se).',
          funnyExample: {
            scenario: 'Diwali Sweet Shop:\n- Vertical Scaling: Ek hi dukandar ko Red Bull pila kar 4x speed se kaam karwao (Wo thak ke behosh ho jayega! 😫)\n- Horizontal Scaling: 4 naye counters khol do aur ek gatekeeper baithao jo customers ko line se 1, 2, 3, 4 counter pe bheje! (Smooth and scalable! 🏪)',
            punchline: 'Horizontal Scaling + Load Balancer = Infinite scale!'
          },
          visualDiagram: {
            title: 'High-Level Distributed System Architecture',
            nodes: ['Users (Mobile / Web)', 'DNS / CDN (Cloudflare)', 'Load Balancer (NGINX)', 'Server Cluster (App Server 1, 2, 3)', 'Redis Cache Layer', 'Database (Primary Write + Replica Reads)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Load Balancing Algorithms:',
            steps: ['Round Robin (Cyclic order: Server 1 -> 2 -> 3 -> 1)', 'Least Connections (Sends to least busy server)', 'IP Hash (Sticky sessions where same client hits same server)']
          },
          code: `// Conceptual Load Balancer Simulation (Round Robin)
class LoadBalancer {
  constructor(servers = []) {
    this.servers = servers;
    this.currentIndex = 0;
  }

  routeRequest(clientIp) {
    if (this.servers.length === 0) throw new Error("No available servers!");
    
    // Round Robin selection
    const targetServer = this.servers[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.servers.length;

    console.log(\`Routing request from \${clientIp} -> \${targetServer.name} (\${targetServer.url})\`);
    return targetServer;
  }
}

const cluster = new LoadBalancer([
  { name: "NodeServer-01", url: "10.0.0.1:5000" },
  { name: "NodeServer-02", url: "10.0.0.2:5000" },
  { name: "NodeServer-03", url: "10.0.0.3:5000" }
]);

cluster.routeRequest("192.168.1.10"); // Server 1
cluster.routeRequest("192.168.1.11"); // Server 2
cluster.routeRequest("192.168.1.12"); // Server 3`,
          codeBreakdown: [
            { part: 'this.currentIndex = (this.currentIndex + 1) % this.servers.length;', label: 'Modulo arithmetic cycling through available server pool', color: '#3b82f6' },
            { part: 'routeRequest(clientIp)', label: 'Decoupled proxy distributing incoming network packets', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Single Point of Failure (SPOF) rakhna (Load Balancer ka bhi standby redundant pair hona chahiye)',
            '❌ Stateful session data backend servers pe rakhna (always keep session in Redis or JWT)'
          ],
          miniChallenge: 'Explain karo how a CDN (Content Delivery Network) reduces latency for static video and image assets.',
          quiz: {
            question: 'Horizontal scaling ka kya matlab hota hai?',
            options: ['Server ki RAM 16GB se 64GB karna', 'System mein naye additional server nodes jodna load divide karne ke liye', 'Database delete karna', 'Code optimize karna'],
            answer: 'System mein naye additional server nodes jodna load divide karne ke liye',
            explanation: 'Horizontal scaling (scale-out) ka matlab hai multiple servers add karke system capacity badhana bina single machine hardware limit ke.'
          },
          summary: ['Horizontal scaling scale-out flexibility deta hai', 'Load Balancers traffic distribute karke high availability ensure karte hain', 'Stateless servers auto-scaling ke liye zaroori hain'],
          flashcard: { q: 'High Availability (99.999% SLA) kaise achieve hoti hai?', a: 'Redundancy aur failover mechanisms se taaki agar koi server fail ho toh traffic immediately backup server pe divert ho jaye.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: CACHING & DATABASE SHARDING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Caching Strategies (Redis) & CAP Theorem',
      lessons: [
        {
          id: 'sd-caching-cap',
          title: 'Caching Strategies, Redis & The CAP Theorem',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Cache Architect',
          englishDef: 'Caching stores copies of frequently accessed data in ultra-fast in-memory stores (like Redis or Memcached) to drastically reduce database load. The CAP Theorem states that a distributed system can guarantee at most two out of three: Consistency, Availability, and Partition Tolerance.',
          hinglishExplain: 'Har baar database pe jaana bohot slow hota hai (Disk I/O). Isliye popular data ko RAM (Redis Cache) mein rakh liya jata hai. Cache-Aside pattern mein pehle cache check hota hai (Cache Hit = Instant response). Agar data nahi mila (Cache Miss) toh DB se lakar cache mein save karte hain.',
          funnyExample: {
            scenario: 'Shopkeeper aur Counter Memory:\n- Cache Hit: Sabse zyada bikne wala Maggi packet counter ke theek upar rakha hai (1 second mein customer ko diya! ⚡)\n- Cache Miss: Kuch ajeeb item manga toh godown mein jakar dhoondhna pada (2 minute lage) aur wapas aakar agle ke liye counter pe rakh diya! 📦',
            punchline: 'Redis Cache = 100x faster sub-millisecond responses!'
          },
          visualDiagram: {
            title: 'Cache-Aside Pattern Flow',
            nodes: ['App Request', 'Check Redis Cache', 'Hit: Return Data (O(1))', 'Miss: Fetch from SQL DB -> Populate Redis -> Return'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'CAP Theorem Triangle:',
            steps: ['Consistency (All nodes see same data at same time)', 'Availability (Every request receives non-error response)', 'Partition Tolerance (System continues operating despite network dropped packets)']
          },
          code: `// Conceptual Cache-Aside Implementation with Redis
async function getCourseDetails(courseId) {
  const cacheKey = \`course:\${courseId}\`;

  // 1. Check in-memory Cache (Redis)
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    console.log("⚡ Cache Hit! Serving from Redis in <1ms");
    return JSON.parse(cachedData);
  }

  // 2. Cache Miss: Query slow database
  console.log("🐌 Cache Miss! Querying PostgreSQL database...");
  const dbData = await db.query("SELECT * FROM courses WHERE id = $1", [courseId]);

  if (dbData) {
    // 3. Populate Cache with TTL (Time-To-Live = 3600 seconds)
    await redis.setex(cacheKey, 3600, JSON.stringify(dbData));
  }

  return dbData;
}`,
          codeBreakdown: [
            { part: 'await redis.get(cacheKey)', label: 'Ultra-fast sub-millisecond in-memory RAM lookup', color: '#10b981' },
            { part: 'await redis.setex(cacheKey, 3600, ...)', label: 'Sets Time-To-Live (TTL) so stale cache expires automatically', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Cache invalidation bhool jana (jab DB update ho toh purana cache flush karna zaroori hai)',
            '❌ Cache Stampede (jab TTL khatam hote hi lakho requests ek sath DB pe crash ho jayein)'
          ],
          miniChallenge: 'Database Read Replicas aur Primary Write node ka data flow diagram explain karo.',
          quiz: {
            question: 'CAP Theorem ke according kisi bhi distributed partitioned network (P) mein kin do cheezon mein trade-off chunna padta hai?',
            options: ['Speed vs Memory', 'Consistency (C) vs Availability (A)', 'CPU vs GPU', 'Frontend vs Backend'],
            answer: 'Consistency (C) vs Availability (A)',
            explanation: 'Network partition (P) aane par distributed system ya toh strict Consistency (CP jaise Banking) choose karta hai ya High Availability (AP jaise Social Media feeds).'
          },
          summary: ['Redis in-memory caching database latency ko 90% kam kar deti hai', 'TTL (Time-To-Live) cache freshness maintain karta hai', 'CAP theorem distributed architecture ke fundamental trade-offs explain karta hai'],
          flashcard: { q: 'Cache Invalidation kyu difficult hai?', a: 'Kyunki database mein data change hone par cache mein store purani copy ko synchronize ya purge karna synchronization complexities introduce karta hai.' },
          interviewQuestions: [
            'How would you design a URL Shortener like Bitly (Short URL generation, Base62, Analytics)?',
            'Explain how Database Sharding and Replication differ.',
            'What is the difference between Write-Through and Write-Back caching strategies?'
          ]
        }
      ]
    },
    ...systemDesignMasteryChapters
  ]
}

export default systemdesignCourse
