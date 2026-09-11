// Chapter 17 — Dynamic Programming (20 Comprehensive Lessons & Core DP Patterns)
import { createDsaLesson } from './dsaHelper.js'

export const ch17DP = {
  chapterTitle: 'Dynamic Programming',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-dynamic-programming',
      title: 'What is Dynamic Programming?',
      emoji: '🧠',
      difficulty: 'Intermediate',
      englishDef: 'Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into simpler subproblems, solving each subproblem once, and storing their solutions (Memoization/Tabulation) to avoid redundant computations.',
      hinglishExplain: 'DP ka simple rule: "Jo ek baar calculate kar liya use yaad rakho, bar-bar calculate karke time waste mat karo!" Jaise rough paper par pehle calculated calculation ka result note kar lena.',
      code: `// DP = Recursion + Caching (Remembering Past Results)`
    }),

    createDsaLesson({
      id: 'dsa-why-dynamic-programming',
      title: 'Why Dynamic Programming?',
      emoji: '⚡',
      difficulty: 'Intermediate',
      englishDef: 'DP transforms exponential time complexity O(2ⁿ) into polynomial time O(N) or O(N²) by eliminating duplicate overlapping calculations.',
      hinglishExplain: 'Fibonacci(50) bina DP ke 1,000 saal lagayega (O(2ⁿ)), par DP ke sath 1 millisecond (O(N)) mein answer deta hai!',
      code: `// Naive Recursion: O(2^N)
// With Dynamic Programming: O(N)`
    }),

    createDsaLesson({
      id: 'dsa-overlapping-subproblems',
      title: 'Overlapping Subproblems',
      emoji: '🔁',
      difficulty: 'Intermediate',
      englishDef: 'Overlapping Subproblems occur when the recursive tree solves the exact same smaller subproblems repeatedly with identical inputs (e.g. `fib(3)` computed multiple times in `fib(5)`).',
      hinglishExplain: 'Jab ek hi choti problem tree mein bar-bar calculate ho rahi ho. DP us answer ko cache kar leta hai taaki dobara computation na karni pade.',
      code: `// fib(5) computes fib(3) twice, fib(2) three times!`
    }),

    createDsaLesson({
      id: 'dsa-optimal-substructure',
      title: 'Optimal Substructure',
      emoji: '🧩',
      difficulty: 'Intermediate',
      englishDef: 'A problem exhibits Optimal Substructure if the optimal solution to the overall problem can be constructed directly from the optimal solutions of its subproblems.',
      hinglishExplain: 'Badi problem ka best answer uske chote tukdo ke best answers ko mila kar banaya ja sakta hai.',
      code: `// Shortest path from A to C = Shortest(A to B) + Shortest(B to C)`
    }),

    createDsaLesson({
      id: 'dsa-dp-memoization',
      title: 'Memoization (Top-Down DP)',
      emoji: '⬇️',
      difficulty: 'Intermediate',
      englishDef: 'Memoization is Top-Down DP: write the natural recursive solution, and check a cache (hash map / array) before computing. If cached, return immediately; otherwise compute and store in cache.',
      hinglishExplain: 'Top-Down DP: Upar se neeche jao recursion ke sath, aur har calculated result ko array/object cache mein store karte jao.',
      code: `function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n]; // Return cached
  return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}`
    }),

    createDsaLesson({
      id: 'dsa-dp-tabulation',
      title: 'Tabulation (Bottom-Up DP)',
      emoji: '⬆️',
      difficulty: 'Intermediate',
      englishDef: 'Tabulation is Bottom-Up DP: iteratively fill an array `dp[]` starting from base cases `dp[0], dp[1]` up to `dp[N]`, eliminating recursion call stack overhead.',
      hinglishExplain: 'Bottom-Up DP: Neeche se shuru karo! Pehle base case (0 aur 1) table mein bharo, phir loop se aage badhte hue table complete karo. No recursion!',
      code: `function fibTab(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1);
  dp[0] = 0; dp[1] = 1;
  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
  return dp[n];
}`
    }),

    createDsaLesson({
      id: 'dsa-recursion-to-memoization-steps',
      title: 'Step-by-Step: Recursion → Memoization → Tabulation',
      emoji: '🪜',
      difficulty: 'Intermediate',
      englishDef: 'The 3-step master DP formula: 1) Write pure Brute-Force Recursion, 2) Add Memoization cache (Top-Down), 3) Convert to Iterative Tabulation (Bottom-Up) with Space Optimization.',
      hinglishExplain: 'Har DP question ko solve karne ka 3-step blueprint:\n1. Simple Recursion likho\n2. Memo table add karo\n3. Iterative Table mein convert karo!',
      code: `// Master DP 3-Step Formula`
    }),

    createDsaLesson({
      id: 'dsa-fibonacci-dp',
      title: 'Fibonacci with Space Optimization O(1)',
      emoji: '🐚',
      difficulty: 'Beginner',
      englishDef: 'Since Fibonacci only depends on the previous two values `dp[i-1]` and `dp[i-2]`, we can replace the entire array with two variables `prev1` and `prev2`, achieving O(1) space.',
      hinglishExplain: 'Pura array store karne ke bajaye sirf pichhle 2 numbers yaad rakho: O(1) memory mein O(N) speed!',
      code: `function fibOptimized(n) {
  if (n <= 1) return n;
  let prev2 = 0, prev1 = 1;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`
    }),

    createDsaLesson({
      id: 'dsa-climbing-stairs',
      title: 'Climbing Stairs (LeetCode 70)',
      emoji: '🪜',
      difficulty: 'Beginner',
      englishDef: 'Count distinct ways to climb N stairs taking 1 or 2 steps: `ways(N) = ways(N - 1) + ways(N - 2)`. Solved in O(N) time and O(1) space.',
      hinglishExplain: 'N-th seedhi par pahunchne ke 2 raste hain: (N-1)th seedhi se 1 step ya (N-2)th seedhi se 2 steps. Direct Fibonacci pattern!',
      code: `function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}`
    }),

    createDsaLesson({
      id: 'dsa-house-robber',
      title: 'House Robber (LeetCode 198)',
      emoji: '🦹',
      difficulty: 'Intermediate',
      englishDef: 'Maximize stolen loot without robbing two adjacent houses: `dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])` in O(N) time and O(1) space.',
      hinglishExplain: 'Har ghar par choice: Ya toh is ghar ko choro aur pichhla skip karo (`loot + dp[i-2]`), ya is ghar ko chhod kar pichhle tak ka loot lo (`dp[i-1]`).',
      code: `function rob(nums) {
  let prev1 = 0, prev2 = 0;
  for (let num of nums) {
    let curr = Math.max(prev1, num + prev2);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}`
    }),

    createDsaLesson({
      id: 'dsa-01-knapsack',
      title: '0/1 Knapsack Problem',
      emoji: '🎒',
      difficulty: 'Intermediate',
      englishDef: 'Maximize value in capacity W where each item can be chosen at most once (0 or 1): `dp[i][w] = Math.max(dp[i-1][w], val[i] + dp[i-1][w - wt[i]])` in O(N * W) time.',
      hinglishExplain: 'Har item ke paas 2 options: ya toh lo (1) ya mat lo (0). 2D grid DP se O(N*W) mein solve hota hai.',
      code: `function knapsack01(W, wt, val, n) {
  const dp = Array.from({ length: n + 1 }, () => new Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= W; w++) {
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
}`
    }),

    createDsaLesson({
      id: 'dsa-unbounded-knapsack',
      title: 'Unbounded Knapsack Problem',
      emoji: '♾️',
      difficulty: 'Intermediate',
      englishDef: 'Items can be selected an unlimited number of times: `dp[w] = Math.max(dp[w], val[i] + dp[w - wt[i]])` using a 1D DP array of size W in O(N * W).',
      hinglishExplain: 'Jab ek hi item ko multiple baar use karne ki permission ho (Unlimited supplies).',
      code: `// Unbounded Knapsack 1D DP`
    }),

    createDsaLesson({
      id: 'dsa-coin-change',
      title: 'Coin Change (Minimum Coins - LeetCode 322)',
      emoji: '🪙',
      difficulty: 'Intermediate',
      englishDef: 'Find the fewest coins needed to make up amount: `dp[i] = Math.min(dp[i], 1 + dp[i - coin])` in O(Amount * Coins) time.',
      hinglishExplain: 'Amount banane ke liye minimum kitne sikke chahiye. Unbounded DP pattern se O(Amount) mein compute hota hai.',
      code: `function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`
    }),

    createDsaLesson({
      id: 'dsa-longest-common-subsequence',
      title: 'Longest Common Subsequence (LCS - LeetCode 1143)',
      emoji: '🔤',
      difficulty: 'Intermediate',
      englishDef: 'Find the length of the longest subsequence present in both strings: if `s1[i] === s2[j]`, `dp[i][j] = 1 + dp[i-1][j-1]`; else `Math.max(dp[i-1][j], dp[i][j-1])` in O(M * N).',
      hinglishExplain: 'Do strings ke beech sabse lambi common subsequence nikalna (Diff tools aur Git version control ka foundation).',
      code: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}`
    }),

    createDsaLesson({
      id: 'dsa-longest-increasing-subsequence',
      title: 'Longest Increasing Subsequence (LIS - LeetCode 300)',
      emoji: '📈',
      difficulty: 'Intermediate',
      englishDef: 'Find the length of the longest strictly increasing subsequence in O(N²) DP or O(N log N) using Patience Sorting + Binary Search.',
      hinglishExplain: 'Array mein se strictly badhti hui (increasing) subsequence ki maximum length nikalna.',
      code: `function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  const dp = new Array(nums.length).fill(1);
  let maxLen = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
}`
    }),

    createDsaLesson({
      id: 'dsa-matrix-dp',
      title: 'Matrix DP (Unique Paths & Minimum Path Sum)',
      emoji: '🗺️',
      difficulty: 'Intermediate',
      englishDef: 'Grid DP: finding paths from (0, 0) to (M-1, N-1) where `dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])` in O(M * N) time.',
      hinglishExplain: 'Grid mein Top-Left se Bottom-Right tak minimum cost path nikalna.',
      code: `function minPathSum(grid) {
  const m = grid.length, n = grid[0].length;
  const dp = Array.from({ length: m }, () => new Array(n).fill(0));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + grid[i][0];
  for (let j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + grid[0][j];
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}`
    }),

    createDsaLesson({
      id: 'dsa-grid-dp-patterns',
      title: 'Grid DP Patterns',
      emoji: '🏁',
      difficulty: 'Intermediate',
      englishDef: 'Grid DP patterns: 1) Unique Paths with obstacles, 2) Triangle Minimum Total, 3) Maximal Square of 1s in O(M * N) time.',
      hinglishExplain: 'Grid DP ke patterns jahan har cell upar aur left padosi par depend karta hai.',
      code: `// Grid DP Template`
    }),

    createDsaLesson({
      id: 'dsa-dp-on-strings',
      title: 'DP on Strings (Edit Distance - LeetCode 72)',
      emoji: '✂️',
      difficulty: 'Advanced',
      englishDef: 'Compute minimum operations (insert, delete, replace) to convert Word1 into Word2 in O(M * N) time and O(M * N) space.',
      hinglishExplain: 'Ek word ko doosre word mein convert karne ke liye minimum insert/delete/replace operations nikalna.',
      code: `// Edit Distance LeetCode 72`
    }),

    createDsaLesson({
      id: 'dsa-dp-on-trees',
      title: 'DP on Trees',
      emoji: '🌲',
      difficulty: 'Advanced',
      englishDef: 'Tree DP computes subproblems on subtrees during postorder traversal (e.g. House Robber III, Binary Tree Maximum Path Sum) in O(N).',
      hinglishExplain: 'Tree ke har node par uske children ka DP result calculate karna.',
      code: `// House Robber III (Tree DP)`
    }),

    createDsaLesson({
      id: 'dsa-dp-interview-problems',
      title: 'Dynamic Programming Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Master the Top 5 DP Interview archetypes: 1) 1D Linear DP, 2) 0/1 Knapsack, 3) Longest Common Subsequence, 4) Matrix / Grid DP, 5) Partition DP.',
      hinglishExplain: 'FAANG Dynamic Programming interview rounds ko crack karne ka complete framework.',
      code: `// DP Archetypes Reference`
    })
  ]
}
