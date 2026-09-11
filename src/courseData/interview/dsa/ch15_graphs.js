// Chapter 15 — Graphs (23 Comprehensive Lessons & Graph Algorithms)
import { createDsaLesson } from './dsaHelper.js'

export const ch15Graphs = {
  chapterTitle: 'Graphs',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-graph',
      title: 'What is Graph?',
      emoji: '🕸️',
      difficulty: 'Intermediate',
      englishDef: 'A Graph is a non-linear data structure consisting of a finite set of Vertices (Nodes, V) and a set of Edges (Connections, E) connecting pairs of vertices: `G = (V, E)`.',
      hinglishExplain: 'Graph connections ka network hai: jaise Social Network (Facebook friends), Flight routes, ya Google Maps ke interconnected roads aur cities.',
      code: `// Graph G = (V, E)`
    }),

    createDsaLesson({
      id: 'dsa-graph-vertices',
      title: 'Vertices (Nodes)',
      emoji: '🔵',
      difficulty: 'Beginner',
      englishDef: 'A Vertex (plural Vertices) represents an entity, person, intersection, or data point in a graph network.',
      hinglishExplain: 'Graph ka har individual point ya city Vertex kehlata hai.',
      code: `// Vertices: ['Delhi', 'Mumbai', 'Bangalore']`
    }),

    createDsaLesson({
      id: 'dsa-graph-edges',
      title: 'Edges (Connections)',
      emoji: '➖',
      difficulty: 'Beginner',
      englishDef: 'An Edge represents the relationship or path between two connected vertices.',
      hinglishExplain: 'Do vertices ko aapas mein jodne wala rasta Edge kehlata hai.',
      code: `// Edge: ('Delhi' <-> 'Mumbai')`
    }),

    createDsaLesson({
      id: 'dsa-directed-graph',
      title: 'Directed Graph (Digraph)',
      emoji: '➡️',
      difficulty: 'Beginner',
      englishDef: 'In a Directed Graph, edges have a specific direction `(U -> V)`. Traversal is strictly one-way from origin to destination (e.g. Twitter followers).',
      hinglishExplain: 'One-way rasta! Agar A -> B hai, toh tum A se B ja sakte ho par B se A nahi aa sakte (jaise Instagram follower).',
      code: `// Directed Edge: A -> B`
    }),

    createDsaLesson({
      id: 'dsa-undirected-graph',
      title: 'Undirected Graph',
      emoji: '↔️',
      difficulty: 'Beginner',
      englishDef: 'In an Undirected Graph, edges are bidirectional `(U <-> V)`. Traversal is possible in both directions (e.g. Facebook friendships).',
      hinglishExplain: 'Two-way rasta! Dono taraf aana-jaana allowed hai (jaise Facebook mutual friend).',
      code: `// Undirected Edge: A <-> B`
    }),

    createDsaLesson({
      id: 'dsa-weighted-graph',
      title: 'Weighted Graph',
      emoji: '⚖️',
      difficulty: 'Intermediate',
      englishDef: 'A Weighted Graph assigns a numerical cost, distance, or weight to each edge (e.g. Google Maps road distances or toll fees).',
      hinglishExplain: 'Har raste ka ek specific distance ya cost hota hai (jaise Delhi se Jaipur = 280 km).',
      code: `// Weighted Edge: (Delhi, Mumbai, weight: 1400)`
    }),

    createDsaLesson({
      id: 'dsa-unweighted-graph',
      title: 'Unweighted Graph',
      emoji: '⚪',
      difficulty: 'Beginner',
      englishDef: 'An Unweighted Graph treats all edges as having uniform unit cost 1.',
      hinglishExplain: 'Saare rasto ki cost barabar (1 unit) hoti hai.',
      code: `// Unweighted: All edge costs = 1`
    }),

    createDsaLesson({
      id: 'dsa-adjacency-matrix',
      title: 'Adjacency Matrix Representation',
      emoji: '🔢',
      difficulty: 'Intermediate',
      englishDef: 'A 2D array `matrix[V][V]` where `matrix[i][j] = 1` indicates an edge between node `i` and `j`. Lookup is O(1) but space is O(V²).',
      hinglishExplain: '2D grid jisme agar do nodes connected hain toh 1 likhte hain. Space O(V²) leta hai.',
      code: `const adjMatrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0]
];`
    }),

    createDsaLesson({
      id: 'dsa-adjacency-list',
      title: 'Adjacency List Representation',
      emoji: '📋',
      difficulty: 'Intermediate',
      englishDef: 'An array or map of lists where each node stores a list of its direct neighbors. Space is optimal O(V + E), preferred in 99% of graph problems.',
      hinglishExplain: 'Har node ke paas uske padosi (neighbors) ki list hoti hai. Memory efficient O(V + E)!',
      code: `const adjList = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1]
};`
    }),

    createDsaLesson({
      id: 'dsa-graph-bfs',
      title: 'Breadth First Search (BFS) in Graph',
      emoji: '🌊',
      difficulty: 'Intermediate',
      englishDef: 'BFS traverses graph level-by-level using a Queue and `visited` Set in O(V + E) time. It guarantees finding the Shortest Path in unweighted graphs.',
      hinglishExplain: 'Queue use karke pehle direct neighbors, phir unke neighbors ghumna. Unweighted graph mein shortest path nikalne ka best tareeqa!',
      code: `function bfs(graph, start) {
  const visited = new Set([start]), q = [start];
  while (q.length) {
    let node = q.shift();
    console.log("Visited:", node);
    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push(neighbor);
      }
    }
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-graph-dfs',
      title: 'Depth First Search (DFS) in Graph',
      emoji: '⛏️',
      difficulty: 'Intermediate',
      englishDef: 'DFS explores as deep as possible along each branch before backtracking using recursion/stack in O(V + E) time and O(V) space.',
      hinglishExplain: 'Ek raste par aakhri point tak gehre jao, phir wapas aakar agla rasta explore karo.',
      code: `function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  console.log("Visited:", node);
  for (let neighbor of graph[node] || []) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-connected-components',
      title: 'Connected Components (Number of Islands)',
      emoji: '🏝️',
      difficulty: 'Intermediate',
      englishDef: 'Count disjoint subgraphs in an undirected graph by launching BFS/DFS from every unvisited node in O(V + E) time. Solves LeetCode 200 Number of Islands.',
      hinglishExplain: 'Grid mein disconnected jazeere (islands) count karna BFS/DFS se.',
      code: `// Number of Islands BFS/DFS`
    }),

    createDsaLesson({
      id: 'dsa-cycle-detection-undirected',
      title: 'Cycle Detection in Undirected Graph',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: 'In undirected graphs, a cycle exists if BFS/DFS encounters an already visited adjacent node that is NOT the parent of the current node.',
      hinglishExplain: 'Agar koi neighbor pehle se visited mile aur wo hamara parent nahi hai, toh iska matlab cycle exist karti hai!',
      code: `// Undirected Graph Cycle Detection`
    }),

    createDsaLesson({
      id: 'dsa-topological-sort',
      title: 'Topological Sort (Kahn Algorithm & DFS)',
      emoji: '📋',
      difficulty: 'Intermediate',
      englishDef: 'Topological Sort linearly orders vertices of a Directed Acyclic Graph (DAG) such that for every directed edge U -> V, vertex U comes before V. Solves Course Schedule.',
      hinglishExplain: 'Prerequisite dependencies ko sort karna: jaise Course 1 complete karne ke baad hi Course 2 unlock hoga (Kahn Algorithm using in-degree).',
      code: `function topoSortKahn(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);
  for (let [dest, src] of prerequisites) {
    adj[src].push(dest);
    inDegree[dest]++;
  }
  const q = [];
  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) q.push(i);
  let count = 0;
  while (q.length) {
    let u = q.shift(); count++;
    for (let v of adj[u]) if (--inDegree[v] === 0) q.push(v);
  }
  return count === numCourses; // Can finish all courses
}`
    }),

    createDsaLesson({
      id: 'dsa-shortest-path-unweighted',
      title: 'Shortest Path in Unweighted Graph',
      emoji: '⚡',
      difficulty: 'Intermediate',
      englishDef: 'BFS naturally finds the shortest path in unweighted graphs because it expands search outward by unit edge distance at each level.',
      hinglishExplain: 'BFS se minimum number of edge hops calculate karna.',
      code: `// BFS Shortest Path`
    }),

    createDsaLesson({
      id: 'dsa-dijkstra-algorithm',
      title: "Dijkstra's Shortest Path Algorithm",
      emoji: '🗺️',
      difficulty: 'Advanced',
      englishDef: "Dijkstra's Algorithm finds the shortest path from a single source to all other vertices in non-negative weighted graphs using a Min-Priority Queue in O((V + E) log V) time.",
      hinglishExplain: 'Google Maps ka core algorithm! Min-Priority Queue se hamesha minimum distance wale node ko pick karo aur neighbor distances ko relax karo.',
      code: `// Dijkstra Shortest Path Implementation`
    }),

    createDsaLesson({
      id: 'dsa-bellman-ford',
      title: "Bellman-Ford Algorithm",
      emoji: '📉',
      difficulty: 'Advanced',
      englishDef: 'Bellman-Ford finds single-source shortest paths in graphs with NEGATIVE edge weights and detects Negative Weight Cycles by relaxing all E edges V-1 times in O(V * E) time.',
      hinglishExplain: 'Negative edge weights wale graphs ke liye! Agar V-1 passes ke baad bhi distance kam ho raha ho, toh Negative Cycle exist karti hai.',
      code: `// Bellman-Ford in O(V * E)`
    }),

    createDsaLesson({
      id: 'dsa-floyd-warshall',
      title: 'Floyd-Warshall Algorithm',
      emoji: '🌐',
      difficulty: 'Advanced',
      englishDef: 'Floyd-Warshall is an All-Pairs Shortest Path Dynamic Programming algorithm that computes shortest distances between all pairs in O(V³) time.',
      hinglishExplain: 'Har node se har doosre node tak ka shortest path nikalne ka All-Pairs 3-nested-loop DP algorithm.',
      code: `// Floyd-Warshall: dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j])`
    }),

    createDsaLesson({
      id: 'dsa-minimum-spanning-tree',
      title: 'Minimum Spanning Tree (MST) Concept',
      emoji: '🌲',
      difficulty: 'Advanced',
      englishDef: 'An MST is a subset of edges that connects all V vertices without any cycles while minimizing total edge weight (contains exactly V - 1 edges).',
      hinglishExplain: 'Saare cities ko minimum total wire/road cost mein connect karna bina cycle banaye.',
      code: `// MST: Connects V nodes with V-1 edges of min total cost`
    }),

    createDsaLesson({
      id: 'dsa-prims-algorithm',
      title: "Prim's Algorithm for MST",
      emoji: '🌿',
      difficulty: 'Advanced',
      englishDef: "Prim's Algorithm grows an MST greedily starting from an arbitrary vertex, always picking the minimum weight edge connecting the tree to an unvisited vertex using a Min-Heap in O(E log V).",
      hinglishExplain: 'Ek node se shuru karke hamesha sabse sasta connecting edge chuno aur tree ko expand karo.',
      code: `// Prim's Algorithm`
    }),

    createDsaLesson({
      id: 'dsa-kruskals-algorithm',
      title: "Kruskal's Algorithm for MST",
      emoji: '🔗',
      difficulty: 'Advanced',
      englishDef: "Kruskal's Algorithm sorts all edges by weight and adds edges greedily from smallest to largest if they do not form a cycle (using Disjoint Set Union - DSU) in O(E log E).",
      hinglishExplain: 'Saare edges ko saste se mehenge order mein sort karo aur DSU use karke bina cycle banaye jodh do.',
      code: `// Kruskal's with Disjoint Set Union`
    }),

    createDsaLesson({
      id: 'dsa-disjoint-set-union',
      title: 'Union Find / Disjoint Set Union (DSU)',
      emoji: '🤝',
      difficulty: 'Advanced',
      englishDef: 'DSU maintains partitions of disjoint sets supporting `find(x)` with Path Compression and `union(x, y)` by Rank in near-constant O(α(N)) amortized inverse Ackermann time.',
      hinglishExplain: 'Dynamic connectivity aur cycle detection ka super fast structure. Path compression se O(1) speed milti hai!',
      code: `class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]); // Path compression
  }
  union(i, j) {
    let rootI = this.find(i), rootJ = this.find(j);
    if (rootI !== rootJ) {
      if (this.rank[rootI] < this.rank[rootJ]) this.parent[rootI] = rootJ;
      else if (this.rank[rootI] > this.rank[rootJ]) this.parent[rootJ] = rootI;
      else { this.parent[rootJ] = rootI; this.rank[rootI]++; }
      return true;
    }
    return false; // Cycle detected
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-graph-interview-problems',
      title: 'Graph Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Graph interview problems: 1) Word Ladder (Shortest Path BFS), 2) Network Delay Time (Dijkstra), 3) Alien Dictionary (Topological Sort), 4) Reconstruct Itinerary (Eulerian Path).',
      hinglishExplain: 'FAANG graph interview problems ka comprehensive breakdown.',
      code: `// Word Ladder BFS`
    })
  ]
}
