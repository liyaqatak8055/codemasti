// Chapters 41 to 45: Interview Questions, Deep Logic, 10 Projects, Capstone & Final Assessment

export const interviewAndPracticeChapters = [
  {
    chapterTitle: 'Chapter 41 — FAANG Interview Question Bank & Deep "Why" Logic',
    lessons: [
      {
        id: 'ds-interview-question-bank-deep-logic',
        title: 'Deep Interview Logic & Conceptual "Why" Questions (Beginner to Expert)',
        emoji: '🎯',
        xpReward: 50,
        badgeName: 'Interview Ready',
        readingTime: '15 min',
        difficulty: 'Expert',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Interviewers \'WHAT\' nahi poochte, \'WHY\' poochte hain! Why is Binary Search O(log N)? Why does BFS find shortest path? Why does Dijkstra fail on negative weights? Inke answers ready rakho! 😎"',
          hint: '🤦 Masti Sir: "Jab interviewer pooche: \'Can you do better?\', ghabrao mat! Check karo: Kya Space trade karke Time bacha sakte hain? Kya sorting se direction mil sakti hai?"',
          success: '🥳 Masti Sir: "Deep interview logic mastered! You are 100% FAANG interview ready! 🚀"',
          mistake: '😅 Masti Sir: "Surface-level definition mat bolo — underlying mathematical reason aur hardware reality explain karo!"'
        },
        englishDef: 'The Deep Interview Logic repository covers foundational and architectural reasoning questions asked at Google, Meta, Amazon, Microsoft, and Uber. Topics dissect asymptotic math, memory locality, tree balance invariants, graph relaxations, and hash collisions.',
        hinglishExplain: 'Technical interview mein coding se zyada aapka reasoning aur deep understanding judge hota hai. Is module mein hum saare critical "Kyun?" (Why?) sawaalon ko deeply analyze karte hain taaki aap interviewer ko hardware memory aur mathematical proof ke sath satisfy kar sakein.',
        storyExplain: 'Car Race vs Pitstop Strategy: Fast car (code) chala lena theek hai, lekin agar engineer ko ye nahi pata ki engine oil kaise kaam karta hai aur tyre pressure ka speed par kya asar hota hai (Deep Logic), toh wo championship nahi jeet sakta! 🏎️🏁',
        funnyExample: {
          scenario: 'Top 5 "WHY" Interview Questions:\n1. Why Binary Search is O(log N)? -> Har step par search space N / 2^k = 1 ho jati hai (k = log2 N)!\n2. Why Vector access is O(1)? -> Address = Base + i * Size in contiguous RAM!\n3. Why BFS finds shortest path in unweighted? -> Explores in uniform radius waves (distance 1, 2, 3)!\n4. Why Dijkstra fails with negative weights? -> Greedy assumption that distance to finalized node cannot decrease!\n5. Why Merge Sort is preferred for Linked Lists? -> O(1) merge without extra contiguous memory arrays!',
          punchline: 'Understand the WHY, not just the HOW!'
        },
        memoryTrick: 'The Interviewer Answer Structure:\n1. Direct Conclusion\n2. Underlying Mechanism (Memory / Math)\n3. Complexity Trade-Off\n4. Real-world Example',
        visualDiagram: {
          title: 'Deep Architectural Interview Concepts',
          nodes: [
            '1. Memory Locality: Contiguous Arrays (L1/L2 Cache Hit) vs Linked Nodes (Cache Miss)',
            '2. Asymptotic Bounds: Worst-Case O(N) vs Amortized O(1) in Dynamic Arrays / DSU',
            '3. Graph Invariants: BFS Shortest Path Wavefront vs Dijkstra Monotonic Non-Negative Distance',
            '4. Hash Invariants: Birthday Paradox Collisions & O(1) Expected vs O(N) Adversarial Worst-Case'
          ],
          type: 'tree'
        },
        code: `// Deep Architectural Interview Case Studies
class DeepInterviewLogic {
  // Why is Dynamic Array Insertion O(1) Amortized?
  // Proof via Aggregate Analysis:
  // When array doubles at size 1, 2, 4, 8, 16...
  // Total copy operations for N insertions = 1 + 2 + 4 + ... + N = 2N - 1
  // Total cost for N insertions = N (regular pushes) + (2N - 1) (resizing copies) = 3N - 1
  // Average cost per insertion = (3N - 1) / N ≈ 3 operations = O(1) Amortized!

  static simulateAmortizedGrowth(n) {
    let capacity = 1;
    let totalCopies = 0;

    for (let i = 1; i <= n; i++) {
      if (i > capacity) {
        totalCopies += capacity; // Cost to copy existing elements
        capacity *= 2;           // Double capacity
      }
    }
    return {
      elementsInserted: n,
      finalCapacity: capacity,
      totalCopyOperations: totalCopies,
      averageOperationsPerInsert: ((n + totalCopies) / n).toFixed(2)
    };
  }
}

console.log("Amortized Insertion Simulation for 1,000,000 items:", DeepInterviewLogic.simulateAmortizedGrowth(1000000));
// Result shows average operations per insert is strictly ~2.00 to 3.00 (O(1) constant!)`,
        languages: {
          javascript: `// Amortized Proof
const result = DeepInterviewLogic.simulateAmortizedGrowth(100000);
console.log("Avg operations per insert:", result.averageOperationsPerInsert);`,
          python: `# Amortized Proof in Python
def simulate_amortized(n):
    cap, copies = 1, 0
    for i in range(1, n + 1):
        if i > cap:
            copies += cap
            cap *= 2
    return (n + copies) / n
print("Avg cost per insert:", simulate_amortized(100000))`,
          java: `public class AmortizedProof {
    public static double getAverageCost(int n) {
        int cap = 1, copies = 0;
        for (int i = 1; i <= n; i++) {
            if (i > cap) { copies += cap; cap *= 2; }
        }
        return (double)(n + copies) / n;
    }
}`,
          cpp: `#include <iostream>
double getAverageCost(int n) {
    int cap = 1, copies = 0;
    for (int i = 1; i <= n; ++i) {
        if (i > cap) { copies += cap; cap *= 2; }
    }
    return (double)(n + copies) / n;
}`,
          c: `// Amortized analysis in C
`
        },
        codeBreakdown: [
          { part: 'capacity *= 2', label: 'Geometric Doubling ensures copy costs shrink relative to the number of insertions performed between resize events', color: '#10b981' },
          { part: '((n + totalCopies) / n).toFixed(2)', label: 'Mathematical proof that average cost per operation converges to ~3 operations = O(1)', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Amortized O(1) per operation',
          space: 'O(N) memory allocation with at most 50% unused headroom'
        },
        commonMistakes: [
          '❌ Stating that array insertion is always O(1) (Must specify: Worst-case is O(N), but Amortized is O(1))',
          '❌ Forgetting that CPU cache hits make array iteration orders of magnitude faster than pointer-chasing in Linked Lists'
        ],
        edgeCases: [
          'Adversarial Hash collision attacks (forces HashMap into O(N) unless balanced tree fallback exists)',
          'Negative cycles in graph shortest path'
        ],
        bestPractices: [
          '✅ When asked "Why": Give both mathematical proof and practical hardware memory reasons'
        ],
        miniChallenge: 'Why does Python\'s `list` resize using growth factor ~1.125 to ~1.25 instead of 2.0 to conserve RAM in high-memory systems?',
        quiz: {
          question: 'Dynamic Array (e.g. std::vector, ArrayList, JS Array) ka appending time complexity O(1) Amortized kyun hota hai?',
          options: [
            'Kyunki RAM infinite hoti hai',
            'Kyunki capacity doubling har step par nahi hoti, aur N elements insert karne mein total resize copies less than 2*N hoti hain, isliye average cost per insert ~3 operations = O(1) hoti hai',
            'Kyunki CPU fast hota hai',
            'Array automatically sort ho jata hai'
          ],
          answer: 'Kyunki capacity doubling har step par nahi hoti, aur N elements insert karne mein total resize copies less than 2*N hoti hain, isliye average cost per insert ~3 operations = O(1) hoti hai',
          explanation: 'Geometric doubling ensure karti hai ki expensive O(N) resizing operations bohot rare hon, aur unka cost baaki sabhi O(1) regular insertions mein absorb ho jaye.'
        },
        summary: [
          'Deep Interview Logic answers the fundamental architectural reasons behind algorithms',
          'Amortized analysis proves that occasional expensive operations average out to constant time',
          'Cache locality, branching invariants, and mathematical proofs impress FAANG interviewers'
        ],
        flashcard: {
          q: 'Why does BFS find the shortest path in unweighted graphs?',
          a: 'BFS explores vertices in increasing order of distance (Distance 1 first, then Distance 2, etc.). When the target is first visited, it is mathematically impossible for a shorter path to exist.'
        },
        funFact: 'Google interview candidate feedback reports show that candidates who explain "Amortized Complexity" and "Cache Locality" get 3x higher hiring committee ratings!',
        interviewQuestions: [
          'Why does Dijkstra’s algorithm fail when edge weights are negative? Construct a counterexample.',
          'Why is Merge Sort the optimal choice for sorting Linked Lists while QuickSort is preferred for contiguous Arrays?',
          'Explain why HashMap operations degrade from O(1) to O(N) in the presence of malicious hash collision attacks, and how Java 8 mitigates this with Red-Black Trees.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 42 — 10 Real-World Industry Projects (DSA in Action)',
    lessons: [
      {
        id: 'ds-10-industry-projects',
        title: '10 Real-World Industry Projects (LRU Cache, Search Engine & GPS Router)',
        emoji: '🏗️',
        xpReward: 50,
        badgeName: 'System Engineer',
        readingTime: '15 min',
        difficulty: 'Expert',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "DSA sirf interview clear karne ke liye nahi hai! Real-world software engineering ka engine DSA par chalta hai! LRU Cache, GPS Router aur Autocomplete engine banate hain! 🚀"',
          hint: '🤦 Masti Sir: "LRU Cache ka secret: HashMap (for O(1) get) + Doubly Linked List (for O(1) node removal and moving to head)!"',
          success: '🥳 Masti Sir: "LRU Cache in O(1) built successfully! Industrial engineering unlocked!"',
          mistake: '😅 Masti Sir: "LRU Cache capacity exceed hone par tail node ko dono HashMap aur Doubly Linked List se delete karna mat bhoolna!"'
        },
        englishDef: 'The 10 Real-World Industry Projects demonstrate how data structures power production systems: 1) LRU Cache (HashMap + Doubly Linked List in O(1)), 2) Trie Search Autocomplete, 3) GPS Shortest Route Finder (Graph Dijkstra), 4) Task Priority Scheduler (Min-Heap), 5) Inverted File Search Engine (HashMap + Set Intersection), 6) Social Network Connection Analyzer (Graph BFS), 7) Undo/Redo Engine (Dual Stacks), 8) Git Commit History DAG (Topological Sort), 9) Memory Allocator (Segment Trees / Free List), 10) Stock Ticker Streaming Window (Monotonic Deque).',
        hinglishExplain: 'Real software projects DSA ke practical application hain. LRU (Least Recently Used) Cache Redis aur Browser memory mein use hota hai jo HashMap aur Doubly Linked List ko combine karke O(1) get aur put operations provide karta hai.',
        storyExplain: 'Browser Cache / Netflix Video Cache socho: Aapke phone mein 100 movies save karne ki jagah hai. Jab 101st movie download karte ho, toh phone kis movie ko delete karega? Jo sabse purani/kam dekhi gayi ho (Least Recently Used)! HashMap + Doubly Linked List is kaam ko instant O(1) mein execute karte hain! 🎬📱',
        funnyExample: {
          scenario: 'LRU Cache Mechanics:\n- get("movie1") -> O(1) lookup via Map + Move node to Front of Doubly Linked List (Most Recently Used)\n- put("movie101") -> Capacity exceeded! Drop tail node (Least Recently Used) in O(1) and insert new node at Front! ⚡',
          punchline: 'Map gives instant lookup, Doubly Linked List gives instant reordering!'
        },
        memoryTrick: 'LRU Cache Design Recipe:\nHashMap<Key, Node>  // For O(1) key lookup\nDoublyLinkedList (Head = MRU, Tail = LRU)  // For O(1) eviction and reordering',
        visualDiagram: {
          title: 'LRU Cache Architecture (HashMap + Doubly Linked List)',
          nodes: [
            'HashMap: { "A": Node(A), "B": Node(B), "C": Node(C) }',
            'Doubly Linked List: Head <-> [Node C (MRU)] <-> [Node B] <-> [Node A (LRU)] <-> Tail',
            'get("A"): Move Node A to Head (MRU) in O(1)',
            'put("D"): Evict Node A from Tail (LRU) in O(1), Insert Node D at Head'
          ],
          type: 'flow'
        },
        code: `// Production Project: LRU Cache (Least Recently Used Cache in O(1))
class DNode {
  constructor(key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> DNode
    // Dummy head and tail to simplify boundary pointer operations
    this.head = new DNode();
    this.tail = new DNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove node from its current position: O(1)
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // Add node right after head (Most Recently Used): O(1)
  addNodeToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  // Move existing node to head: O(1)
  moveToHead(node) {
    this.removeNode(node);
    this.addNodeToHead(node);
  }

  // Pop the least recently used tail node: O(1)
  popTail() {
    const lru = this.tail.prev;
    this.removeNode(lru);
    return lru;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.moveToHead(node); // Mark as most recently accessed
    return node.val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.val = value;
      this.moveToHead(node);
    } else {
      const newNode = new DNode(key, value);
      this.map.set(key, newNode);
      this.addNodeToHead(newNode);

      if (this.map.size > this.capacity) {
        const lru = this.popTail();
        this.map.delete(lru.key); // Evict from map
      }
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log("Get 1 (returns 1):", cache.get(1)); // 1 (1 is now MRU, 2 is LRU)
cache.put(3, 3); // Evicts key 2!
console.log("Get 2 (returns -1 not found):", cache.get(2)); // -1
console.log("Get 3 (returns 3):", cache.get(3)); // 3`,
        languages: {
          javascript: `// LRU Cache in JS
class LRUCache { /* Map + Doubly Linked List */ }`,
          python: `class DNode:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.map = {}
        self.head, self.tail = DNode(), DNode()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.map: return -1
        node = self.map[key]
        self._remove(node); self._add(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.map:
            self._remove(self.map[key])
        node = DNode(key, value)
        self.map[key] = node
        self._add(node)
        if len(self.map) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.map[lru.key]`,
          java: `import java.util.*;

class LRUCache {
    class Node {
        int key, val;
        Node prev, next;
        Node(int k, int v) { key = k; val = v; }
    }
    private int capacity;
    private Map<Integer, Node> map = new HashMap<>();
    private Node head = new Node(0, 0), tail = new Node(0, 0);

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail; tail.prev = head;
    }
    private void remove(Node n) {
        n.prev.next = n.next; n.next.prev = n.prev;
    }
    private void add(Node n) {
        n.next = head.next; n.prev = head;
        head.next.prev = n; head.next = n;
    }
    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node n = map.get(key);
        remove(n); add(n);
        return n.val;
    }
    public void put(int key, int value) {
        if (map.containsKey(key)) remove(map.get(key));
        Node n = new Node(key, value);
        map.put(key, n); add(n);
        if (map.size() > capacity) {
            Node lru = tail.prev;
            remove(lru); map.remove(lru.key);
        }
    }
}`,
          cpp: `#include <unordered_map>

class LRUCache {
    struct Node {
        int key, val;
        Node *prev, *next;
        Node(int k, int v) : key(k), val(v), prev(nullptr), next(nullptr) {}
    };
    int cap;
    std::unordered_map<int, Node*> map;
    Node *head, *tail;

    void remove(Node* n) {
        n->prev->next = n->next; n->next->prev = n->prev;
    }
    void add(Node* n) {
        n->next = head->next; n->prev = head;
        head->next->prev = n; head->next = n;
    }
public:
    LRUCache(int capacity) : cap(capacity) {
        head = new Node(0, 0); tail = new Node(0, 0);
        head->next = tail; tail->prev = head;
    }
    int get(int key) {
        if (!map.count(key)) return -1;
        Node* n = map[key];
        remove(n); add(n);
        return n->val;
    }
    void put(int key, int value) {
        if (map.count(key)) remove(map[key]);
        Node* n = new Node(key, value);
        map[key] = n; add(n);
        if ((int)map.size() > cap) {
            Node* lru = tail->prev;
            remove(lru);
            map.erase(lru->key);
            delete lru;
        }
    }
};`,
          c: `// LRU Cache in C
`
        },
        codeBreakdown: [
          { part: 'this.head.next = this.tail; this.tail.prev = this.head', label: 'Dummy Head and Tail sentinel nodes eliminate all null-pointer edge cases during insertion and deletion', color: '#10b981' },
          { part: 'this.map.get(key) + this.moveToHead(node)', label: 'Achieves both instant O(1) hash lookup AND instant O(1) recency reordering simultaneously', color: '#3b82f6' }
        ],
        complexity: {
          time: 'get(key): O(1) strictly constant time, put(key, val): O(1) strictly constant time',
          space: 'O(Capacity) to store nodes and hash mapping'
        },
        commonMistakes: [
          '❌ LRU Cache ko single array ya singly linked list se banana (searching or deleting becomes O(N))',
          '❌ Eviction ke time HashMap se key delete karna bhool jana (causes memory leak)'
        ],
        edgeCases: [
          'Capacity = 1',
          'Updating value of an already existing key',
          'Getting key that does not exist (returns -1)'
        ],
        bestPractices: [
          '✅ Combine Hash Tables with Doubly Linked Lists whenever you need O(1) access + O(1) positional ordering'
        ],
        miniChallenge: 'How do you design an LFU Cache (Least Frequently Used) that supports O(1) get and put using Frequency Lists?',
        quiz: {
          question: 'LRU Cache mein Doubly Linked List ke sath HashMap use karne ka main reason kya hai?',
          options: [
            'HashMap O(1) search deta hai aur Doubly Linked List O(1) insertion/deletion aur order shifting deti hai',
            'Kyunki single data structure se kaam nahi chalta',
            'Memory double karne ke liye',
            'Code stylish dikhane ke liye'
          ],
          answer: 'HashMap O(1) search deta hai aur Doubly Linked List O(1) insertion/deletion aur order shifting deti hai',
          explanation: 'HashMap node ka direct reference O(1) mein deta hai, aur Doubly Linked List us node ko O(1) pointer updates se list ke head (MRU position) par move kar deti hai.'
        },
        summary: [
          'LRU Cache combines HashMap + Doubly Linked List for strict O(1) performance',
          'Sentinel dummy nodes (head, tail) eliminate tedious boundary edge cases',
          'Powers production in-memory caching (Redis, Memcached, Web Browsers)'
        ],
        flashcard: {
          q: 'LRU vs LFU Cache mein kya difference hai?',
          a: 'LRU (Least Recently Used) access time ke hisaab se sabse purane item ko evict karta hai, jabki LFU (Least Frequently Used) access count (frequency) ke hisaab se sabse kam baar use hue item ko evict karta hai.'
        },
        funFact: 'Operating Systems (Linux, Windows) virtual memory paging aur RAM page replacement ke liye LRU Page Replacement algorithms use karte hain!',
        interviewQuestions: [
          'Design and implement an LRU Cache with O(1) get and O(1) put operations.',
          'How would you extend an LRU Cache to be thread-safe for high-concurrency production systems?',
          'Explain how an LFU (Least Frequently Used) Cache can be implemented in O(1) using Min-Frequency buckets.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 43 — Capstone Project: CodeMasti Smart Search & Routing Engine',
    lessons: [
      {
        id: 'ds-capstone-smart-search-routing',
        title: 'Capstone: CodeMasti Smart Search, Autocomplete & GPS Routing Engine',
        emoji: '🚀',
        xpReward: 100,
        badgeName: 'DSA Master',
        readingTime: '15 min',
        difficulty: 'Expert',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Mubarak ho! Ye course ka FINAL CAPSTONE PROJECT hai! Isme Trie (Autocomplete) + Graph Dijkstra (GPS Routing) + Min-Heap (Priority) + HashMap (Caching) sab ek sath combine hokar kaam karte hain! 🏆"',
          hint: '🤦 Masti Sir: "Modular architecture follow karo: Har data structure apna specific kaam O(1) ya O(log N) mein karega!"',
          success: '🥳 Masti Sir: "Incredible! CodeMasti Smart Search & Routing Engine complete! You have achieved DSA Mastery! 🎓👑"',
          mistake: '😅 Masti Sir: "Data structure coupling se bachna — keep Trie, Graph, and Cache cleanly separated!"'
        },
        englishDef: 'The Capstone Project integrates multi-domain data structures into a unified production engine: 1) Trie for instant prefix autocomplete search, 2) Graph with Dijkstra Algorithm for shortest-path route computation, 3) Min-Heap for Priority Task scheduling, and 4) HashMap with Doubly Linked List for caching results.',
        hinglishExplain: 'Final Capstone Project ek complete hybrid engine hai jo real Google Maps aur Search Engine ki tarah kaam karta hai. User search karta hai (Trie Autocomplete), route calculate hota hai (Graph Dijkstra), fast access ke liye cache hota hai (LRU Cache), aur delivery orders priority se dispatch hote hain (Min-Heap).',
        storyExplain: 'Uber / Zomato System Architecture socho: Customer restaurant search karta hai (Trie Autocomplete) -> Order place hota hai (Min-Heap Priority) -> Delivery Rider ke liye shortest navigation route nikalta hai (Dijkstra Shortest Path) -> Popular routes cache ho jate hain (LRU Cache)! Pure DSA in 1 single app! 🚗🍕📦',
        funnyExample: {
          scenario: 'The Capstone Flow in Action:\n1. Search "Del..." -> Trie suggests "Delhi", "Delhi Airport", "Delhi Station"\n2. Route from Delhi to Mumbai -> Dijkstra finds shortest highway in O((V+E) log V)\n3. Cache result -> Next user gets instant O(1) response from LRU Cache!\n4. All 5 core data structures working in perfect harmony! 🎻',
          punchline: 'From zero to full-stack DSA system architect!'
        },
        memoryTrick: 'Capstone Component Architecture:\n- Autocomplete -> Trie O(L)\n- Shortest Route -> Dijkstra + Min-Heap O((V+E) log V)\n- Fast Lookup -> LRU Cache O(1)\n- Order Processing -> Priority Queue O(log N)',
        visualDiagram: {
          title: 'CodeMasti Smart Search & Routing Engine Architecture',
          nodes: [
            'User Input -> Trie Autocomplete Engine (O(L) Prefix Suggestions)',
            'Selected Route -> Dijkstra Graph Engine (Computes Minimum Road Distance)',
            'Result -> LRU Cache (Caches Frequent GPS Routes in O(1))',
            'Task Dispatcher -> Min-Heap (Dispatches High Priority Deliveries First)'
          ],
          type: 'flow'
        },
        code: `// Capstone: CodeMasti Smart Search & Routing Engine
class SmartSearchAndRoutingEngine {
  constructor() {
    this.trie = new Trie(); // For search autocomplete
    this.graph = new Map(); // For GPS navigation (Dijkstra)
    this.cache = new LRUCache(100); // For route caching O(1)
  }

  // 1. Add Location to Search Index
  registerLocation(city) {
    this.trie.insert(city.toLowerCase());
    if (!this.graph.has(city)) this.graph.set(city, []);
  }

  // 2. Add Road Highway Connection
  addRoad(cityA, cityB, distanceKm) {
    this.registerLocation(cityA);
    this.registerLocation(cityB);
    this.graph.get(cityA).push({ city: cityB, dist: distanceKm });
    this.graph.get(cityB).push({ city: cityA, dist: distanceKm });
  }

  // 3. Autocomplete Location Search: O(L)
  searchLocation(prefix) {
    return this.trie.autocomplete(prefix.toLowerCase());
  }

  // 4. Find Shortest Route with LRU Caching
  findShortestRoute(startCity, endCity) {
    const cacheKey = \`\${startCity}->\${endCity}\`;
    const cachedDist = this.cache.get(cacheKey);
    if (cachedDist !== -1) {
      return { distanceKm: cachedDist, source: "LRU Cache (O(1) Instant Hit)" };
    }

    // Dijkstra Algorithm Execution
    const distances = new Map();
    for (let city of this.graph.keys()) distances.set(city, Infinity);
    distances.set(startCity, 0);

    const pq = [[0, startCity]]; // [distance, city]
    while (pq.length > 0) {
      pq.sort((a, b) => a[0] - b[0]);
      const [d, u] = pq.shift();

      if (d > distances.get(u)) continue;
      if (u === endCity) break;

      for (let road of this.graph.get(u) || []) {
        const v = road.city;
        const newDist = d + road.dist;
        if (newDist < distances.get(v)) {
          distances.set(v, newDist);
          pq.push([newDist, v]);
        }
      }
    }

    const shortestDist = distances.get(endCity);
    if (shortestDist !== Infinity) {
      this.cache.put(cacheKey, shortestDist); // Save to cache
    }

    return { distanceKm: shortestDist, source: "Computed via Dijkstra O((V+E) log V)" };
  }
}

// Instantiate Engine
const engine = new SmartSearchAndRoutingEngine();
engine.addRoad("Delhi", "Jaipur", 280);
engine.addRoad("Delhi", "Agra", 240);
engine.addRoad("Jaipur", "Mumbai", 1150);
engine.addRoad("Agra", "Mumbai", 1200);

console.log("Autocomplete 'del':", engine.searchLocation("del")); // ['delhi']
console.log("Route Delhi -> Mumbai (1st call):", engine.findShortestRoute("Delhi", "Mumbai")); // 1430 km (Dijkstra)
console.log("Route Delhi -> Mumbai (2nd call):", engine.findShortestRoute("Delhi", "Mumbai")); // 1430 km (LRU Cache Hit!)`,
        languages: {
          javascript: `// Smart Search & Routing Engine in JS
const engine = new SmartSearchAndRoutingEngine();`,
          python: `# Python Capstone Engine
class SmartSearchEngine:
    def __init__(self):
        self.trie = {}
        self.graph = {}
        self.cache = {}`,
          java: `public class SmartSearchEngine {
    // Hybrid architecture combining Trie, Dijkstra and LRU Cache
}`,
          cpp: `// Capstone in C++
#include <iostream>
`,
          c: `// Capstone in C
`
        },
        codeBreakdown: [
          { part: 'this.trie.autocomplete(...)', label: 'Provides sub-millisecond search query predictions in O(L) time', color: '#10b981' },
          { part: 'this.cache.get(cacheKey)', label: 'Checks LRU Cache first to avoid running expensive O((V+E) log V) Dijkstra on repeated queries', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Search: O(L), Cached Route: O(1), Computed Route: O((V + E) log V)',
          space: 'O(V + E + Total Words) unified memory footprint'
        },
        commonMistakes: [
          '❌ Real-world systems mein har route calculation ko recompute karna without an LRU cache layer',
          '❌ Search queries ko linear string regex se scan karna instead of Trie prefix tree'
        ],
        edgeCases: [
          'Disconnected cities (returns Infinity / Unreachable)',
          'Identical start and end city (distance 0)',
          'Empty search queries'
        ],
        bestPractices: [
          '✅ Use Multi-Tiered Data Structures: Front cache (LRU) + Fast Index (Trie) + Graph Optimizer (Dijkstra)'
        ],
        miniChallenge: 'How would you extend this Capstone Engine to support Real-Time Live Traffic Delay updates using a dynamic Segment Tree / Fenwick Tree?',
        quiz: {
          question: 'CodeMasti Smart Search & Routing Engine mein LRU Cache ka sabse bada benefit kya hai?',
          options: [
            'Map ka color change karna',
            'Frequently searched routes ko O(1) instant lookup dena taaki baar-baar expensive Dijkstra algorithm na chalana pade',
            'Internet speed badhana',
            'CSS compile karna'
          ],
          answer: 'Frequently searched routes ko O(1) instant lookup dena taaki baar-baar expensive Dijkstra algorithm na chalana pade',
          explanation: 'Real-world GPS servers par millions of users same popular routes (e.g. Airport -> City Center) request karte hain. LRU Cache unhe O(1) mein serve kar deta hai.'
        },
        summary: [
          'The Capstone integrates Trie, Graph Dijkstra, Min-Heap, and LRU Cache into a production architecture',
          'Demonstrates real-world system design foundations used at Google, Uber, and Amazon',
          'Solidifies your journey from beginner to Master of Data Structures & Algorithms'
        ],
        flashcard: {
          q: 'DSA Master Certificate ka qualification criteria kya hai?',
          a: 'All 77 modules completed, 100% test case pass rate on coding challenges, and successful execution of the Capstone Engine!'
        },
        funFact: 'Google Maps har din 1 billion kilometers of route calculations Dijkstra aur A* Search algorithms ke hybrid caching networks se compute karta hai!',
        interviewQuestions: [
          'Walk through the high-level architecture of a Google Maps navigation backend and which data structures power each layer.',
          'How do you design a high-scale Typeahead Autocomplete service that supports 100,000 queries per second?',
          'Explain how Caching layers (LRU/LFU) reduce backend computational load on graph routing engines.'
        ]
      }
    ]
  }
];
