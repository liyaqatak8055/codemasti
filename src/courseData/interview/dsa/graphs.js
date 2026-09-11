// Chapters 27 to 32: Graph Fundamentals, BFS, DFS, Topo Sort, Shortest Path, MST, DSU & Advanced Graph Algorithms

export const graphsChapters = [
  {
    chapterTitle: 'Chapter 27 — Graph Fundamentals & Representations (Matrix vs List)',
    lessons: [
      {
        id: 'ds-graph-fundamentals-representations',
        title: 'Graph Fundamentals (Vertices, Edges, Directed/Undirected & Adjacency List)',
        emoji: '🕸️',
        xpReward: 45,
        badgeName: 'Graph Explorer',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Graph me sab ek dusre se connected hain! LinkedIn aur Facebook ka asli network syllabus yahan hai 😂"',
          hint: '🤦 Masti Sir: "Sparse graph ke liye Adjacency List use karo — space O(V + E) bachti hai! Adjacency Matrix O(V^2) space khati hai!"',
          success: '🥳 Masti Sir: "Graph representation and degree calculation crystal clear!"',
          mistake: '😅 Masti Sir: "Undirected graph mein edge add karte waqt dono taraf add karna: u->v aur v->u!"'
        },
        englishDef: 'A Graph G = (V, E) is a non-linear data structure consisting of a finite set of Vertices (nodes) and Edges (connections). Graphs can be Directed (one-way arrows), Undirected (bi-directional), Weighted (cost per edge), or Unweighted. Standard representations are Adjacency Matrix (V x V table) and Adjacency List (array/map of neighbor lists).',
        hinglishExplain: 'Graph nodes (vertices) aur unke beech ke connections (edges) ka network hota hai. Social networks (users and friendships), Google Maps (cities and roads), aur Web Pages (links) sabhi Graphs hain. Adjacency List representation space-efficient hoti hai O(V + E) memory ke sath.',
        storyExplain: 'Instagram Followers socho: Agar Virat Kohli ko tum follow karte ho par wo tumhe follow nahi karta, toh ye DIRECTED graph hai (Arrow: You -> Virat). Agar WhatsApp group mein sab connected hain toh wo UNDIRECTED graph hai. Flight ticket price agar road par likhi ho toh wo WEIGHTED graph hai! ✈️📸',
        funnyExample: {
          scenario: 'Graph in Daily Life:\n- Node = Aap aur aapke dost\n- Edge = Dosti ka connection\n- Cyclic Graph = Dost 1 -> Dost 2 -> Dost 3 -> Dost 1 (Gossiping circle! 😂)\n- DAG (Directed Acyclic Graph) = College Course Prerequisites!',
          punchline: 'Nodes are people, Edges are relationships!'
        },
        memoryTrick: 'Representation Comparison:\nAdjacency Matrix: Space O(V^2) | Edge Lookup O(1)\nAdjacency List: Space O(V + E) | Edge Lookup O(Degree)',
        visualDiagram: {
          title: 'Adjacency List vs Adjacency Matrix',
          nodes: [
            'Graph: 0 -- 1, 0 -- 2, 1 -- 2',
            'Adj List: 0 -> [1, 2], 1 -> [0, 2], 2 -> [0, 1]',
            'Adj Matrix: 3x3 table with 1s at (0,1), (0,2), (1,2)...',
            'Sparse Graphs (E << V^2) always prefer Adjacency List'
          ],
          type: 'flow'
        },
        code: `// Graph Representation using Adjacency List
class Graph {
  constructor(isDirected = false) {
    this.adjList = new Map();
    this.isDirected = isDirected;
  }

  addVertex(v) {
    if (!this.adjList.has(v)) this.adjList.set(v, []);
  }

  addEdge(u, v, weight = 1) {
    this.addVertex(u);
    this.addVertex(v);
    this.adjList.get(u).push({ node: v, weight });
    if (!this.isDirected) {
      this.adjList.get(v).push({ node: u, weight });
    }
  }

  printGraph() {
    for (let [vertex, neighbors] of this.adjList.entries()) {
      const edgeStr = neighbors.map(n => \`\${n.node}(\${n.weight})\`).join(", ");
      console.log(\`\${vertex} -> [\${edgeStr}]\`);
    }
  }
}

const g = new Graph();
g.addEdge("Delhi", "Mumbai", 1400);
g.addEdge("Delhi", "Jaipur", 280);
g.addEdge("Jaipur", "Mumbai", 1150);
g.printGraph();`,
        languages: {
          javascript: `const adj = {};
function addEdge(u, v) {
  if (!adj[u]) adj[u] = [];
  if (!adj[v]) adj[v] = [];
  adj[u].push(v);
  adj[v].push(u);
}`,
          python: `from collections import defaultdict
adj = defaultdict(list)
def add_edge(u, v):
    adj[u].append(v)
    adj[v].append(u)`,
          java: `import java.util.*;
public class Graph {
    Map<Integer, List<Integer>> adj = new HashMap<>();
    public void addEdge(int u, int v) {
        adj.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
        adj.computeIfAbsent(v, k -> new ArrayList<>()).add(u);
    }
}`,
          cpp: `#include <vector>
#include <unordered_map>
std::unordered_map<int, std::vector<int>> adj;
void addEdge(int u, int v) {
    adj[u].push_back(v);
    adj[v].push_back(u);
}`,
          c: `// Adjacency list in C
`
        },
        codeBreakdown: [
          { part: 'this.adjList = new Map()', label: 'Stores dynamic mapping of vertex to list of connected neighboring edges', color: '#10b981' },
          { part: 'if (!this.isDirected) this.adjList.get(v).push(...)', label: 'Adds reverse edge for bidirectional undirected graph connections', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Add Edge: O(1), Check Edge: O(Degree of V) in List vs O(1) in Matrix',
          space: 'Adjacency List: O(V + E), Adjacency Matrix: O(V^2)'
        },
        commonMistakes: [
          '❌ Large vertex counts (e.g. V = 10^5) par 2D array Adjacency Matrix create karna (throws Out of Memory Error for 10^10 bytes)',
          '❌ Visited set na lagana leading to infinite cycles during traversal'
        ],
        edgeCases: [
          'Disconnected graph with multiple isolated components',
          'Self-loops (edge from node to itself) and Multi-edges',
          'Graph with 0 edges'
        ],
        bestPractices: [
          '✅ Use Adjacency List for sparse graphs (E << V^2)',
          '✅ Represent weights as objects `{ node, weight }` in neighbor lists'
        ],
        miniChallenge: 'What is the sum of degrees of all vertices in an undirected graph with E edges? (Handshaking Lemma)',
        quiz: {
          question: 'Handshaking Lemma ke hisaab se, kisi bhi Undirected Graph mein sabhi vertices ke degrees ka total sum kitna hota hai?',
          options: ['E', '2 * E', 'V^2', 'V * E'],
          answer: '2 * E',
          explanation: 'Kyunki har ek edge 2 vertices ke beech connect hoti hai, isliye har edge total degree mein 2 count contribute karti hai: Sum(Degrees) = 2 * E.'
        },
        summary: [
          'Graphs model complex networked connections via Vertices and Edges',
          'Adjacency List provides space-optimal O(V + E) storage',
          'Directed vs Undirected and Weighted vs Unweighted dictate algorithm selection'
        ],
        flashcard: {
          q: 'Complete Graph mein kitne edges hote hain?',
          a: 'V vertices wale Complete Graph (jahan har pair connected hai) mein total `V * (V - 1) / 2` edges hote hain.'
        },
        funFact: 'World Wide Web (Internet) ek massive Directed Graph hai jisme har webpage ek vertex hai aur hyperlinks edges hain — Google ka PageRank algorithm is graph ko rank karta hai!',
        interviewQuestions: [
          'Compare Adjacency Matrix vs Adjacency List across Space complexity, Edge lookup, and Neighbor iteration.',
          'What is the Handshaking Lemma, and what does it imply about the number of vertices with odd degrees in any undirected graph?',
          'How do you detect if an undirected graph is Bipartite (2-colorable)?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 28 — Graph Traversals (BFS, DFS, Number of Islands & Shortest Path)',
    lessons: [
      {
        id: 'ds-graph-traversals-bfs-dfs',
        title: 'Graph Traversals (BFS Level-by-Level, DFS Recursion, Number of Islands & Flood Fill)',
        emoji: '🏝️',
        xpReward: 50,
        badgeName: 'Islands Conqueror',
        readingTime: '13 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Unweighted graph mein Shortest Path chahiye? BFS lagao! Connected components dhoondhne hain? DFS lagao! Number of Islands FAANG ka all-time favorite question hai 😎"',
          hint: '🤦 Masti Sir: "Visited set lagana mat bhoolna! Agar visited mark nahi kiya toh graph ke gol chakkar (cycle) mein zindagi bhar ghoomte rahoge! 😂"',
          success: '🥳 Masti Sir: "BFS queue traversal aur 2D Grid Flood Fill dono conquer ho gaye!"',
          mistake: '😅 Masti Sir: "Number of Islands mein visited cell ko wapas \'0\' (water) mark kar do in-place memory save karne ke liye!"'
        },
        englishDef: 'Graph Traversal algorithms systematically visit all reachable vertices. BFS uses a FIFO queue to explore vertices level by level, guaranteeing the Shortest Path in unweighted graphs. DFS explores deep into connected branches using recursion or a stack. In 2D grid graphs, 4-directional Flood Fill and Connected Component counting solve the Number of Islands in O(M * N).',
        hinglishExplain: 'Graph mein traverse karne ke 2 main tareeqe hain: BFS (Breadth First Search) jo queue use karke concentric circles ki tarah level-by-level aage badhta hai (unweighted graph mein shortest path deta hai), aur DFS (Depth First Search) jo recursion se ek raste ki aakhiri limit tak jata hai. Number of Islands problem connected components count karta hai.',
        storyExplain: 'Water Ripple vs Spelunking Cave Explorer: Paani mein patthar phenko toh lehar gol-gol failti hai (BFS) — sabse pass wale kinare pehle touch hote hain! Cave explorer ek rasta pakad ke gufa ke aakhiri kone tak chala jata hai (DFS)! 🌊🧗‍♂️',
        funnyExample: {
          scenario: 'Rotten Oranges in Crate (BFS):\n- Minute 0: One rotten orange at (0, 0)\n- Minute 1: Adjacent 4 oranges become rotten (Level 1)\n- Minute 2: Their neighbors become rotten (Level 2)\n- Multi-source BFS computes minimum minutes for whole crate! 🍊',
          punchline: 'BFS spreads like virus wave, DFS explores like lone ninja!'
        },
        memoryTrick: 'Grid 4-Direction Traversal Offsets:\nconst dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]\nfor (let [dr, dc] of dirs) { nr = r + dr; nc = c + dc; }',
        visualDiagram: {
          title: 'BFS Wavefront Exploration vs DFS Deep Path',
          nodes: [
            'Source [0]',
            'BFS Level 1: [1, 2] (Distance = 1)',
            'BFS Level 2: [3, 4, 5] (Distance = 2)',
            'Guarantees shortest path in unweighted graph'
          ],
          type: 'flow'
        },
        code: `// Graph Traversals: BFS, DFS & Number of Islands
class GraphTraversalsMastery {
  // 1. BFS Traversal & Shortest Path: O(V + E) Time, O(V) Space
  static bfsShortestPath(adj, start, target) {
    const queue = [[start, 0]]; // [node, distance]
    const visited = new Set([start]);

    while (queue.length > 0) {
      const [curr, dist] = queue.shift();
      if (curr === target) return dist;

      for (let neighbor of adj.get(curr) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, dist + 1]);
        }
      }
    }
    return -1; // Unreachable
  }

  // 2. Number of Islands (2D Grid DFS): O(M * N) Time, O(M * N) Space
  static numIslands(grid) {
    if (!grid.length) return 0;
    const m = grid.length, n = grid[0].length;
    let islandCount = 0;

    function dfs(r, c) {
      if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== '1') return;
      grid[r][c] = '0'; // Sink island to mark visited in-place!
      dfs(r - 1, c); // Up
      dfs(r + 1, c); // Down
      dfs(r, c - 1); // Left
      dfs(r, c + 1); // Right
    }

    for (let r = 0; r < m; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c] === '1') {
          islandCount++;
          dfs(r, c); // Sinks all connected land parts
        }
      }
    }
    return islandCount;
  }
}

const mapGrid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];
console.log("Total Islands:", GraphTraversalsMastery.numIslands(mapGrid)); // 3`,
        languages: {
          javascript: `function numIslands(grid) {
  let count = 0;
  function dfs(r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== '1') return;
    grid[r][c] = '0';
    dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1);
  }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') { count++; dfs(r, c); }
    }
  }
  return count;
}`,
          python: `def num_islands(grid):
    if not grid: return 0
    m, n, count = len(grid), len(grid[0]), 0
    def dfs(r, c):
        if 0 <= r < m and 0 <= c < n and grid[r][c] == '1':
            grid[r][c] = '0'
            dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    for r in range(m):
        for c in range(n):
            if grid[r][c] == '1':
                count += 1
                dfs(r, c)
    return count`,
          java: `public class Solution {
    public int numIslands(char[][] grid) {
        int count = 0;
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    dfs(grid, r, c);
                }
            }
        }
        return count;
    }
    private void dfs(char[][] grid, int r, int c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != '1') return;
        grid[r][c] = '0';
        dfs(grid, r+1, c); dfs(grid, r-1, c); dfs(grid, r, c+1); dfs(grid, r, c-1);
    }
}`,
          cpp: `#include <vector>

void dfs(std::vector<std::vector<char>>& grid, int r, int c) {
    if (r < 0 || r >= (int)grid.size() || c < 0 || c >= (int)grid[0].size() || grid[r][c] != '1') return;
    grid[r][c] = '0';
    dfs(grid, r+1, c); dfs(grid, r-1, c); dfs(grid, r, c+1); dfs(grid, r, c-1);
}
int numIslands(std::vector<std::vector<char>>& grid) {
    int count = 0;
    for (int r = 0; r < (int)grid.size(); ++r) {
        for (int c = 0; c < (int)grid[0].size(); ++c) {
            if (grid[r][c] == '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;
}`,
          c: `// Graph DFS in C
`
        },
        codeBreakdown: [
          { part: 'grid[r][c] = "0"', label: 'Sinks the current land cell in-place to avoid needing an extra visited boolean matrix', color: '#10b981' },
          { part: 'for (let [dr, dc] of dirs)', label: 'Explores all 4 cardinal neighbors (North, South, East, West) cleanly', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(V + E) for general graphs, O(M * N) for 2D grids',
          space: 'O(V) for general graphs, O(M * N) call stack worst case for snake-shaped grids'
        },
        commonMistakes: [
          '❌ BFS queue mein node push karte waqt visited mark na karna (causes duplicate nodes in queue resulting in memory explosion)',
          '❌ 2D grid boundary conditions `< 0 || >= rows` check na karna'
        ],
        edgeCases: [
          'Grid with all water ("0")',
          'Grid with all land ("1" -> exactly 1 island)',
          'Target unreachable in BFS shortest path'
        ],
        bestPractices: [
          '✅ For shortest path in unweighted graphs: Always use BFS',
          '✅ In multi-source problems (Rotten Oranges): Enqueue ALL initial sources into queue at Minute 0'
        ],
        miniChallenge: 'How does Multi-Source BFS solve the 01 Matrix / Distance to Nearest 0 problem in linear O(M * N) time?',
        quiz: {
          question: 'Unweighted Graph mein Shortest Path nikalne ke liye BFS kyun DFS se superior hota hai?',
          options: [
            'Kyunki BFS level-by-level explore karta hai, isliye pehli baar target milte hi guaranteed shortest distance hoti hai',
            'Kyunki BFS kam memory leta hai',
            'Kyunki DFS error deta hai',
            'Kyunki BFS sort karta hai'
          ],
          answer: 'Kyunki BFS level-by-level explore karta hai, isliye pehli baar target milte hi guaranteed shortest distance hoti hai',
          explanation: 'BFS distance 1, fir distance 2, fir distance 3 ke nodes check karta hai. Isliye jab target pehli baar dequeue hota hai toh wahi minimum number of edges ka path hota hai.'
        },
        summary: [
          'BFS explores level-by-level and guarantees shortest paths in unweighted graphs',
          'DFS explores down depth branches and finds connected components',
          'Number of Islands sinks connected land components in O(M * N) time'
        ],
        flashcard: {
          q: 'Multi-Source BFS kab use hota hai?',
          a: 'Jab multiple starting points ek sath simultaneous speed se spread ho rahe hon (e.g. Rotten Oranges, Zombie Infection, Nearest Hospital distance).'
        },
        funFact: 'Social network algorithms (LinkedIn Degree of Connection: 1st, 2nd, 3rd) BFS level traversals se compute hote hain!',
        interviewQuestions: [
          'Why does BFS guarantee the shortest path in an unweighted graph while DFS does not?',
          'How do you solve the Word Ladder problem using Bidirectional BFS to reduce time from O(B^D) to O(B^(D/2))?',
          'Explain how to detect connected components in a disconnected undirected graph using DFS.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 29 — Topological Sort & Cycle Detection (DAG & Kahn\'s Algorithm)',
    lessons: [
      {
        id: 'ds-topological-sort-kahn',
        title: 'Topological Sort (DAG, Kahn\'s Algorithm In-Degree BFS & Course Schedule)',
        emoji: '🎓',
        xpReward: 50,
        badgeName: 'Topo Master',
        readingTime: '12 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Course Schedule aur Task Dependencies? Ye DIRECTED ACYCLIC GRAPH (DAG) ka syllabus hai! Kahn\'s In-Degree algorithm se sab line mein aa jayenge! 😎"',
          hint: '🤦 Masti Sir: "Kahn\'s Algorithm: Jiska In-Degree 0 hai (koi prerequisite nahi), use Queue mein daalo! Process karke neighbors ka In-Degree ghatao!"',
          success: '🥳 Masti Sir: "Course Schedule I & II dono conquer ho gaye!"',
          mistake: '😅 Masti Sir: "Agar processed nodes count < Total Vertices reh gaya, toh graph mein CYCLE hai aur task schedule nahi ho sakta!"'
        },
        englishDef: 'Topological Sorting of a Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering. Kahn\'s Algorithm uses In-Degrees with a BFS Queue. Cycle detection in directed graphs is verified if topological sort cannot include all vertices.',
        hinglishExplain: 'Topological Sort sirf Directed Acyclic Graphs (DAG) par kaam karta hai. Ye batata hai ki tasks ko kis order mein execute karna chahiye taaki saari prerequisites pehle poori hon. Kahn\'s Algorithm har node ka In-Degree (incoming edges count) calculate karta hai aur 0 in-degree nodes ko queue se process karta hai.',
        storyExplain: 'College Degree ka curriculum socho: "DSA 101" padhne se pehle "Programming in C" padhna zaroori hai. "Machine Learning" ke liye "Linear Algebra" aur "Python" dono zaroori hain. Ye order decide karna hi Topological Sorting hai! 🎓📚',
        funnyExample: {
          scenario: 'Morning Routine DAG:\n- Socks -> Shoes (Shoes bina socks ke nahi pehen sakte!)\n- Shirt -> Tie -> Blazer\n- Output Order: [Socks, Shirt, Tie, Shoes, Blazer] (Valid Topological Sort!) 👔👞',
          punchline: 'Prerequisites first, graduation next!'
        },
        memoryTrick: 'Kahn\'s Algorithm 4 Steps:\n1. Compute in-degree for all nodes\n2. Push all 0 in-degree nodes to Queue\n3. While queue: pop node, add to topoOrder, decrement in-degree of neighbors\n4. If neighbor in-degree becomes 0 -> Push to Queue!',
        visualDiagram: {
          title: 'Kahn\'s In-Degree Topological Sort Flow',
          nodes: [
            'Edge: 0 -> 1, 0 -> 2, 1 -> 3, 2 -> 3',
            'In-Degrees: Node 0: 0 | Node 1: 1 | Node 2: 1 | Node 3: 2',
            'Queue receives Node 0 (in-degree 0)',
            'Node 0 processed -> In-degrees of 1 & 2 become 0 -> Pushed to Queue',
            'Topo Order: [0, 1, 2, 3]'
          ],
          type: 'flow'
        },
        code: `// Topological Sort using Kahn's Algorithm & Course Schedule
class TopoSortMastery {
  // 1. Course Schedule I (Can all courses be finished? Cycle Detection): O(V + E)
  static canFinish(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adj = new Map();

    for (let [course, prereq] of prerequisites) {
      if (!adj.has(prereq)) adj.set(prereq, []);
      adj.get(prereq).push(course);
      inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    let processedCount = 0;
    while (queue.length > 0) {
      const curr = queue.shift();
      processedCount++;

      for (let nextCourse of adj.get(curr) || []) {
        inDegree[nextCourse]--;
        if (inDegree[nextCourse] === 0) {
          queue.push(nextCourse);
        }
      }
    }

    return processedCount === numCourses; // If equal, No cycle!
  }

  // 2. Course Schedule II (Return actual valid order): O(V + E)
  static findOrder(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adj = new Map();

    for (let [course, prereq] of prerequisites) {
      if (!adj.has(prereq)) adj.set(prereq, []);
      adj.get(prereq).push(course);
      inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    const order = [];
    while (queue.length > 0) {
      const curr = queue.shift();
      order.push(curr);

      for (let nextCourse of adj.get(curr) || []) {
        inDegree[nextCourse]--;
        if (inDegree[nextCourse] === 0) queue.push(nextCourse);
      }
    }

    return order.length === numCourses ? order : [];
  }
}

console.log("Can finish courses [[1, 0], [2, 1], [3, 2]]:", TopoSortMastery.canFinish(4, [[1, 0], [2, 1], [3, 2]])); // true
console.log("Valid Order:", TopoSortMastery.findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0, 1, 2, 3]`,
        languages: {
          javascript: `function canFinish(numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0), adj = {};
  for (let [c, p] of prerequisites) {
    if (!adj[p]) adj[p] = [];
    adj[p].push(c);
    inDegree[c]++;
  }
  const q = [];
  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i);
  let count = 0;
  while (q.length) {
    let u = q.shift(); count++;
    for (let v of (adj[u] || [])) {
      if (--inDegree[v] === 0) q.push(v);
    }
  }
  return count === numCourses;
}`,
          python: `from collections import deque, defaultdict

def can_finish(num_courses, prerequisites):
    in_degree = [0] * num_courses
    adj = defaultdict(list)
    for c, p in prerequisites:
        adj[p].append(c)
        in_degree[c] += 1
    q = deque([i for i in range(num_courses) if in_degree[i] == 0])
    count = 0
    while q:
        node = q.popleft()
        count += 1
        for neighbor in adj[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                q.append(neighbor)
    return count == num_courses`,
          java: `import java.util.*;

public class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int[] inDegree = new int[numCourses];
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
        for (int[] p : prerequisites) {
            adj.get(p[1]).add(p[0]);
            inDegree[p[0]]++;
        }
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.offer(i);
        int count = 0;
        while (!q.isEmpty()) {
            int curr = q.poll();
            count++;
            for (int next : adj.get(curr)) {
                if (--inDegree[next] == 0) q.offer(next);
            }
        }
        return count == numCourses;
    }
}`,
          cpp: `#include <vector>
#include <queue>

bool canFinish(int numCourses, std::vector<std::vector<int>>& prerequisites) {
    std::vector<int> inDegree(numCourses, 0);
    std::vector<std::vector<int>> adj(numCourses);
    for (const auto& p : prerequisites) {
        adj[p[1]].push_back(p[0]);
        inDegree[p[0]]++;
    }
    std::queue<int> q;
    for (int i = 0; i < numCourses; ++i) if (inDegree[i] == 0) q.push(i);
    int count = 0;
    while (!q.empty()) {
        int curr = q.front(); q.pop();
        count++;
        for (int next : adj[curr]) {
            if (--inDegree[next] == 0) q.push(next);
        }
    }
    return count == numCourses;
}`,
          c: `// Kahn's algorithm in C
`
        },
        codeBreakdown: [
          { part: 'if (inDegree[nextCourse] === 0) queue.push(...)', label: 'Once all prerequisite edges are resolved, node becomes ready for immediate execution', color: '#10b981' },
          { part: 'processedCount === numCourses', label: 'If count is less than total courses, a circular dependency (deadlock cycle) exists', color: '#ef4444' }
        ],
        complexity: {
          time: 'O(V + E) linear time in terms of vertices and prerequisite edges',
          space: 'O(V + E) for adjacency graph and in-degree array'
        },
        commonMistakes: [
          '❌ Graph ko undirected assume karna (Topological sort is strictly for Directed Acyclic Graphs)',
          '❌ Prerequisite direction reverse kar dena (`p -> c` vs `c -> p`)'
        ],
        edgeCases: [
          'Graph with cycles (e.g. [[1, 0], [0, 1]] -> impossible, returns false)',
          'All courses completely disconnected with 0 prerequisites (any order valid)',
          'Single course'
        ],
        bestPractices: [
          '✅ Whenever a problem involves "Task Dependencies", "Build Order", or "Prerequisites": Use Topological Sort',
          '✅ Use Kahn\'s BFS algorithm for easy cycle detection in directed graphs'
        ],
        miniChallenge: 'How would you find Alien Dictionary character order given a list of lexicographically sorted words using Topological Sort?',
        quiz: {
          question: 'Kahn\'s Algorithm mein agar processed nodes ka count total vertices V se kam reh jaye, toh iska kya matlab hota hai?',
          options: [
            'Graph disconnected hai',
            'Graph mein Directed Cycle (Deadlock) exist karta hai',
            'Queue memory overflow ho gayi',
            'Data types match nahi hue'
          ],
          answer: 'Graph mein Directed Cycle (Deadlock) exist karta hai',
          explanation: 'Cycle ke andar aane wale nodes ka in-degree kabhi bhi 0 nahi ho pata, isliye wo kabhi queue mein nahi aa paate aur count V se kam reh jata hai.'
        },
        summary: [
          'Topological sort linearly orders DAG vertices respecting all prerequisite edges',
          'Kahn\'s algorithm processes 0 in-degree nodes via BFS queue in O(V + E)',
          'Failure to process all vertices proves the existence of a directed cycle'
        ],
        flashcard: {
          q: 'Topological Sort ke 2 main methods kaunse hain?',
          a: '(1) Kahn\'s BFS Algorithm using In-Degrees, (2) DFS Traversal with a Postorder Stack.'
        },
        funFact: 'Package managers (npm, pip, maven) aur build systems (Webpack, Make) libraries ki dependency tree ko resolve karne ke liye Topological Sort use karte hain!',
        interviewQuestions: [
          'Explain why a graph must be Directed and Acyclic (DAG) for a Topological Sort to exist.',
          'How do you detect a cycle in a Directed Graph using DFS 3-Coloring (White, Gray, Black)?',
          'Explain the Alien Dictionary problem and how it reduces to Topological Sort.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 30 — Shortest Path Algorithms (Dijkstra, Bellman-Ford & Floyd-Warshall)',
    lessons: [
      {
        id: 'ds-shortest-path-dijkstra',
        title: 'Shortest Path Algorithms (Dijkstra with Priority Queue, Bellman-Ford & Negative Cycles)',
        emoji: '🧭',
        xpReward: 50,
        badgeName: 'Pathfinder',
        readingTime: '13 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Google Maps pe shortest route kaise nikalta hai? DIJKSTRA Algorithm se! Non-negative weights par Min-Priority Queue ke sath O((V + E) log V) mein destination tak pahunchata hai! 🗺️"',
          hint: '🤦 Masti Sir: "Negative weights aa gaye? Dijkstra fail ho jayega! Tab BELLMAN-FORD lagao! Negative weight cycles bhi detect ho jayengi!"',
          success: '🥳 Masti Sir: "Dijkstra, Bellman-Ford aur Floyd-Warshall teeno ke use cases locked in!"',
          mistake: '😅 Masti Sir: "Dijkstra mein agar purana distance chhota hai (`d > dist[u]`), toh use skip (continue) zaroor karna!"'
        },
        englishDef: 'Shortest Path algorithms find the minimum weight path between nodes: Dijkstra (Single-Source, Non-Negative weights, O((V + E) log V) via Min-Heap), Bellman-Ford (Single-Source, supports Negative weights and detects Negative Cycles, O(V * E)), and Floyd-Warshall (All-Pairs Shortest Path, O(V^3) Dynamic Programming).',
        hinglishExplain: 'Shortest path algorithms weighted graphs mein minimum cost path dhoondhte hain. Dijkstra algorithm Greedy + Min-Heap use karta hai jo non-negative weights par super fast hota hai. Agar graph mein negative weights ya discounts hon toh Bellman-Ford V-1 times relaxation karke exact shortest path aur negative cycles dhoondhta hai.',
        storyExplain: 'GPS Navigation ka socho: Delhi se Bangalore jaana hai. Har road par toll tax aur traffic time (Weights) likha hai. Dijkstra algorithm har step par sabse kam time wala toll tollbooth select karke fastest route render karta hai! 🚗🛣️',
        funnyExample: {
          scenario: 'Shortest Path Algorithms comparison:\n- Unweighted Graph: Simple BFS (O(V + E) - Fast!)\n- Non-Negative Weights: Dijkstra (O((V+E) log V) - Google Maps! 🗺️)\n- Negative Weights: Bellman-Ford (O(V * E) - Handles Cashback/Discounts!)\n- All pairs of cities: Floyd-Warshall (O(V^3) - Matrix Grid!)',
          punchline: 'Dijkstra for speed, Bellman-Ford for negative safety!'
        },
        memoryTrick: 'Edge Relaxation Formula:\nif (dist[u] + weight < dist[v]) {\n  dist[v] = dist[u] + weight;\n  priorityQueue.push([dist[v], v]);\n}',
        visualDiagram: {
          title: 'Dijkstra Shortest Path Relaxation Flow',
          nodes: [
            'dist[start] = 0, all other dist = Infinity',
            'Min-Heap pops node with smallest known distance',
            'Relax all outgoing edges: dist[v] = min(dist[v], dist[u] + weight)',
            'Repeat until all reachable vertices are finalized'
          ],
          type: 'flow'
        },
        code: `// Dijkstra Shortest Path Implementation
class ShortestPathMastery {
  // Dijkstra Algorithm with Priority Queue: O((V + E) log V)
  static dijkstra(numNodes, edges, start) {
    const adj = new Map();
    for (let i = 0; i < numNodes; i++) adj.set(i, []);
    for (let [u, v, w] of edges) {
      adj.get(u).push({ node: v, weight: w });
      adj.get(v).push({ node: u, weight: w });
    }

    const dist = new Array(numNodes).fill(Infinity);
    dist[start] = 0;

    // Simple priority array simulation (Production uses MinHeap)
    const pq = [[0, start]]; // [distance, node]

    while (pq.length > 0) {
      pq.sort((a, b) => a[0] - b[0]); // Smallest distance first
      const [d, u] = pq.shift();

      if (d > dist[u]) continue; // Stale entry

      for (let edge of adj.get(u) || []) {
        const v = edge.node;
        const weight = edge.weight;

        if (dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight; // Edge Relaxation
          pq.push([dist[v], v]);
        }
      }
    }
    return dist;
  }
}

const edges = [
  [0, 1, 4],
  [0, 2, 1],
  [2, 1, 2],
  [1, 3, 1],
  [2, 3, 5]
];
console.log("Shortest Distances from Node 0:", ShortestPathMastery.dijkstra(4, edges, 0)); // [0, 3, 1, 4] (Node 0->2->1 is dist 3)`,
        languages: {
          javascript: `// Dijkstra Algorithm
function dijkstra(n, edges, src) {
  const dist = Array(n).fill(Infinity); dist[src] = 0;
  // Min-Heap based relaxation...
  return dist;
}`,
          python: `import heapq

def dijkstra(n, edges, src):
    adj = {i: [] for i in range(n)}
    for u, v, w in edges:
        adj[u].append((v, w))
        adj[v].append((u, w))
    dist = [float('inf')] * n
    dist[src] = 0
    pq = [(0, src)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]: continue
        for v, w in adj[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist`,
          java: `import java.util.*;

public class Dijkstra {
    public int[] shortestPath(int n, int[][] edges, int src) {
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) {
            adj.get(e[0]).add(new int[]{e[1], e[2]});
            adj.get(e[1]).add(new int[]{e[0], e[2]});
        }
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[]{0, src});
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int d = curr[0], u = curr[1];
            if (d > dist[u]) continue;
            for (int[] edge : adj.get(u)) {
                int v = edge[0], w = edge[1];
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }
        return dist;
    }
}`,
          cpp: `#include <vector>
#include <queue>

std::vector<int> dijkstra(int n, std::vector<std::vector<int>>& edges, int src) {
    std::vector<std::vector<std::pair<int, int>>> adj(n);
    for (const auto& e : edges) {
        adj[e[0]].push_back({e[1], e[2]});
        adj[e[1]].push_back({e[0], e[2]});
    }
    std::vector<int> dist(n, 1e9);
    dist[src] = 0;
    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
    pq.push({0, src});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d > dist[u]) continue;
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}`,
          c: `// Dijkstra in C
`
        },
        codeBreakdown: [
          { part: 'dist[u] + weight < dist[v]', label: 'Core Relaxation Condition: If a shorter path through u is discovered, update dist[v]', color: '#10b981' },
          { part: 'if (d > dist[u]) continue', label: 'Skips stale outdated heap entries in O(1) time', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Dijkstra: O((V + E) log V), Bellman-Ford: O(V * E), Floyd-Warshall: O(V^3)',
          space: 'O(V + E) for adjacency list and distance array'
        },
        commonMistakes: [
          '❌ Negative edge weights wale graph par Dijkstra chalana (causes incorrect answers or infinite loops)',
          '❌ Priority Queue mein stale distance entries discard na karna (`if (d > dist[u]) continue;`)'
        ],
        edgeCases: [
          'Disconnected unreachable vertices (remain `Infinity`)',
          'Source vertex distance is always 0',
          'Negative Weight Cycles (detected by Bellman-Ford on V-th iteration)'
        ],
        bestPractices: [
          '✅ Use BFS for unweighted graphs (O(V + E) fastest)',
          '✅ Use Dijkstra for positive weighted graphs (O((V + E) log V))',
          '✅ Use Bellman-Ford when negative weights or negative cycle detection is needed'
        ],
        miniChallenge: 'How does Bellman-Ford detect a negative weight cycle during its V-th iteration?',
        quiz: {
          question: 'Negative weight edges wale graph par Dijkstra Algorithm kyun fail ho jata hai?',
          options: [
            'Kyunki Dijkstra ek baar finalize kiye gaye node ka distance dobara revisit nahi karta (Greedy assumption fails on negative edges)',
            'Kyunki code crash ho jata hai',
            'Kyunki negative numbers store nahi ho sakte',
            'Kyunki Priority Queue negative numbers sort nahi karta'
          ],
          answer: 'Kyunki Dijkstra ek baar finalize kiye gaye node ka distance dobara revisit nahi karta (Greedy assumption fails on negative edges)',
          explanation: 'Dijkstra greedily assume karta hai ki popped node ka shortest distance final ho chuka hai. Lekin negative weight aage chalkar us finalized distance ko aur chhota kar sakti hai.'
        },
        summary: [
          'Dijkstra finds Single-Source Shortest Paths in non-negative weighted graphs in O((V + E) log V)',
          'Bellman-Ford handles negative weights and detects negative cycles in O(V * E)',
          'Floyd-Warshall computes all-pairs shortest paths in O(V^3) dynamic programming matrix'
        ],
        flashcard: {
          q: 'Floyd-Warshall algorithm ka core transition formula kya hai?',
          a: '`dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])` jahan k intermediate vertex hai (triple nested loops).'
        },
        funFact: 'Open Shortest Path First (OSPF) internet routing protocol routers ke beech global data packets route karne ke liye Dijkstra Algorithm use karta hai!',
        interviewQuestions: [
          'Prove why Dijkstra’s algorithm fails with negative edge weights and construct a small counterexample.',
          'How does Bellman-Ford detect negative weight cycles in a graph in O(V * E) time?',
          'Compare Dijkstra vs Floyd-Warshall: when should you use each for shortest path calculation?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 31 — Minimum Spanning Tree & Disjoint Set Union (Kruskal, Prim & DSU)',
    lessons: [
      {
        id: 'ds-mst-dsu-kruskal-prim',
        title: 'Minimum Spanning Tree (Kruskal\'s Algorithm, Prim\'s Algorithm & DSU Union-Find)',
        emoji: '🌲',
        xpReward: 50,
        badgeName: 'MST Master',
        readingTime: '13 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Minimum Spanning Tree matlab saare shehron ko connect karo minimum road cost ke sath bina kisi loop (cycle) ke! DSU aur Kruskal iske hero hain! 😎"',
          hint: '🤦 Masti Sir: "DSU (Disjoint Set Union) mein 2 magical optimizations hoti hain: Path Compression aur Union by Rank! Dono lagane par time complexity O(α(N)) almost O(1) ho jati hai!"',
          success: '🥳 Masti Sir: "Kruskal, Prim aur Disjoint Set Union crystal clear!"',
          mistake: '😅 Masti Sir: "Kruskal mein edges ko weight ke hisaab se Sort karna mat bhoolna!"'
        },
        englishDef: 'A Minimum Spanning Tree (MST) of an undirected weighted graph is a subset of edges that connects all V vertices together without any cycles, with the minimum possible total edge weight (exactly V - 1 edges). Kruskal\'s Algorithm sorts edges and uses Disjoint Set Union (DSU with Path Compression and Union by Rank). Prim\'s Algorithm grows the tree greedily using a Min-Priority Queue.',
        hinglishExplain: 'MST (Minimum Spanning Tree) ek aisa sub-network hota hai jo graph ke sabhi V vertices ko connect karta hai bina kisi cycle ke, aur total edge cost minimum hoti hai. Kruskal Algorithm sabse sasti edges ko pehle pick karta hai (Greedy) aur DSU se check karta hai ki cycle toh nahi ban rahi. Prim Algorithm ek node se shuru karke cut property se tree ko grow karta hai.',
        storyExplain: 'Electrical Grid / Water Pipeline socho: Ek gaon ke 50 gharon mein bijli ki taarein bichhani hain. Target hai ki har ghar mein bijli pahunche aur taar (wire) ki total cost minimum ho, aur koi faltu closed circuit na bane. Yehi Minimum Spanning Tree hai! ⚡🏘️',
        funnyExample: {
          scenario: 'Kruskal vs Prim Strategy:\n- Kruskal = Shopping Mall Bargain Hunter (Saare saste items pure mall se chun lo, bas duplicate mat lo!)\n- Prim = Ink Drop spreading (Ek jagah se failo aur sabse saste adjacent point ko jodo!)\n- Result = Exactly V-1 edges with lowest total bill! 🧾',
          punchline: 'Connect all, minimum cost, zero cycles!'
        },
        memoryTrick: 'DSU Template with Path Compression & Rank:\nfind(i): parent[i] = find(parent[i]) (Flattens tree)\nunion(u, v): Attach smaller rank tree under larger rank tree',
        visualDiagram: {
          title: 'Disjoint Set Union (DSU) Path Compression',
          nodes: [
            'Before: 3 -> 2 -> 1 -> 0 (Deep Chain)',
            'find(3) executes Path Compression!',
            'After: 3 -> 0, 2 -> 0, 1 -> 0 (Direct pointers to Root 0)',
            'Result: Future find() operations run in O(1) almost instantaneous time!'
          ],
          type: 'tree'
        },
        code: `// Disjoint Set Union (DSU) & Kruskal's MST
class DisjointSet {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  // Find with Path Compression: O(alpha(N)) ≈ O(1)
  find(u) {
    if (this.parent[u] === u) return u;
    return (this.parent[u] = this.find(this.parent[u])); // Path compression
  }

  // Union by Rank: O(alpha(N))
  union(u, v) {
    const rootU = this.find(u);
    const rootV = this.find(v);
    if (rootU === rootV) return false; // Cycle detected! Same component

    if (this.rank[rootU] < this.rank[rootV]) {
      this.parent[rootU] = rootV;
    } else if (this.rank[rootU] > this.rank[rootV]) {
      this.parent[rootV] = rootU;
    } else {
      this.parent[rootV] = rootU;
      this.rank[rootU]++;
    }
    return true; // Successfully merged
  }
}

// Kruskal's Algorithm for Minimum Spanning Tree: O(E log E)
function kruskalMST(numVertices, edges) {
  // Step 1: Sort edges by weight
  edges.sort((a, b) => a[2] - b[2]); // [u, v, weight]

  const dsu = new DisjointSet(numVertices);
  const mstEdges = [];
  let totalCost = 0;

  for (let [u, v, weight] of edges) {
    // If u and v are not in the same set, add edge to MST
    if (dsu.union(u, v)) {
      mstEdges.push([u, v, weight]);
      totalCost += weight;
      if (mstEdges.length === numVertices - 1) break; // MST complete!
    }
  }

  return { totalCost, mstEdges };
}

const edgesList = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4]
];
const result = kruskalMST(4, edgesList);
console.log("MST Total Cost:", result.totalCost); // 19 (edges: [2,3,4], [0,3,5], [0,1,10])`,
        languages: {
          javascript: `class DSU {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i) => i);
    this.rank = Array(n).fill(0);
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]);
  }
  union(i, j) {
    let rootI = this.find(i), rootJ = this.find(j);
    if (rootI === rootJ) return false;
    if (this.rank[rootI] < this.rank[rootJ]) this.parent[rootI] = rootJ;
    else if (this.rank[rootI] > this.rank[rootJ]) this.parent[rootJ] = rootI;
    else { this.parent[rootJ] = rootI; this.rank[rootI]++; }
    return true;
  }
}`,
          python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    def find(self, i):
        if self.parent[i] == i: return i
        self.parent[i] = self.find(self.parent[i])
        return self.parent[i]
    def union(self, i, j):
        ri, rj = self.find(i), self.find(j)
        if ri == rj: return False
        if self.rank[ri] < self.rank[rj]: self.parent[ri] = rj
        elif self.rank[ri] > self.rank[rj]: self.parent[rj] = ri
        else:
            self.parent[rj] = ri
            self.rank[ri] += 1
        return True`,
          java: `class DSU {
    int[] parent, rank;
    public DSU(int n) {
        parent = new int[n]; rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    public int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]);
    }
    public boolean union(int i, int j) {
        int rootI = find(i), rootJ = find(j);
        if (rootI == rootJ) return false;
        if (rank[rootI] < rank[rootJ]) parent[rootI] = rootJ;
        else if (rank[rootI] > rank[rootJ]) parent[rootJ] = rootI;
        else { parent[rootJ] = rootI; rank[rootI]++; }
        return true;
    }
}`,
          cpp: `class DSU {
    std::vector<int> parent, rank;
public:
    DSU(int n) : parent(n), rank(n, 0) {
        for (int i = 0; i < n; ++i) parent[i] = i;
    }
    int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]);
    }
    bool unite(int i, int j) {
        int ri = find(i), rj = find(j);
        if (ri == rj) return false;
        if (rank[ri] < rank[rj]) parent[ri] = rj;
        else if (rank[ri] > rank[rj]) parent[rj] = ri;
        else { parent[rj] = ri; rank[ri]++; }
        return true;
    }
};`,
          c: `// DSU in C
`
        },
        codeBreakdown: [
          { part: 'this.parent[u] = this.find(this.parent[u])', label: 'Path compression flattens the tree so future queries find root in O(1)', color: '#10b981' },
          { part: 'if (rootU === rootV) return false', label: 'Detects that both vertices already share a common component; adding this edge would form a cycle', color: '#ef4444' }
        ],
        complexity: {
          time: 'Kruskal MST: O(E log E) for sorting, DSU operations: O(alpha(V)) ≈ O(1) practically constant',
          space: 'O(V) for DSU parent and rank arrays'
        },
        commonMistakes: [
          '❌ DSU mein Path Compression lagana bhool jana (without it, skewed trees make find() take O(V) time)',
          '❌ Kruskal algorithm mein V-1 edges complete hone par early exit condition na lagana'
        ],
        edgeCases: [
          'Disconnected graph (cannot form a full spanning tree with V-1 edges)',
          'Graph with duplicate edge weights',
          'Graph with only 1 vertex (0 edges in MST)'
        ],
        bestPractices: [
          '✅ When detecting dynamic connectivity or cycle formation: Use DSU with Path Compression',
          '✅ For sparse graphs: Use Kruskal\'s MST (O(E log E)); for dense graphs: Use Prim\'s MST with adjacency matrix (O(V^2))'
        ],
        miniChallenge: 'How do you find the Critical and Pseudo-Critical Edges in a Minimum Spanning Tree?',
        quiz: {
          question: 'V vertices wale connected graph ke Minimum Spanning Tree (MST) mein kitne edges hote hain?',
          options: ['V edges', 'V - 1 edges', 'V * 2 edges', 'E edges'],
          answer: 'V - 1 edges',
          explanation: 'Tree ki mathematical definition ke mutabik V vertices ko bina kisi cycle ke connect karne ke liye exactly V - 1 edges ki zaroorat hoti hai.'
        },
        summary: [
          'MST connects all V vertices with minimum total edge weight and exactly V - 1 edges',
          'Kruskal\'s algorithm greedily adds cheapest edges avoiding cycles via DSU',
          'DSU with Path Compression and Union by Rank operates in near-constant O(alpha(N)) time'
        ],
        flashcard: {
          q: 'Inverse Ackermann Function α(N) ka kya significance hai?',
          a: 'DSU operations ka time complexity O(α(N)) hota hai. Universe ke atom count (10^80) par bhi α(N) < 5 rehta hai, isliye DSU operations practically constant O(1) hote hain.'
        },
        funFact: 'Telecommunication networks (Fiber optic cable laying) global continents ko minimum underwater cable cost ke sath connect karne ke liye Kruskal\'s MST algorithm use karte hain!',
        interviewQuestions: [
          'Explain why Path Compression and Union by Rank reduce DSU amortized complexity to O(α(N)).',
          'Compare Kruskal\'s vs Prim\'s algorithm: which is faster on sparse vs dense graphs?',
          'How do you solve the Number of Provinces / Connected Components problem using Disjoint Set Union?'
        ]
      }
    ]
  }
];
