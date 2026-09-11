// Chapters 33 & 34: Dynamic Programming Fundamentals & Patterns

export const dynamicProgrammingChapters = [
  {
    chapterTitle: 'Chapter 33 — Dynamic Programming In-Depth (Memoization, Tabulation & Classic Problems)',
    lessons: [
      {
        id: 'ds-dp-fundamentals-classic',
        title: 'Dynamic Programming (Overlapping Subproblems, Memoization vs Tabulation, Climbing Stairs & Knapsack)',
        emoji: '⚡',
        xpReward: 50,
        badgeName: 'DP Warrior',
        readingTime: '14 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Same calculation baar-baar? Masti Sir: Ek baar calculate kar, save kar, zindagi bhar repeat mat kar! Yahi hai DYNAMIC PROGRAMMING! 😎"',
          hint: '🤦 Masti Sir: "DP ka 5-step framework: 1. State define karo -> 2. Base case likho -> 3. Transition formula banao -> 4. Order of computation decide karo -> 5. Space optimize karo!"',
          success: '🥳 Masti Sir: "Climbing Stairs, House Robber aur 0/1 Knapsack teeno master ho gaye! 🔥"',
          mistake: '😅 Masti Sir: "Memoization table ko initial invalid value (e.g. -1 ya Map) se initialize karna zaroori hai!"'
        },
        englishDef: 'Dynamic Programming (DP) is an optimization technique that solves complex problems by breaking them down into simpler overlapping subproblems and storing the subproblem results in a table (Memoization for Top-Down or Tabulation for Bottom-Up) to avoid redundant recalculation. It requires Optimal Substructure and Overlapping Subproblems.',
        hinglishExplain: 'Dynamic Programming un problems ke liye hoti hai jahan same calculation bar-bar repeat hoti hai. Agar hum pichle answers ko ek memory table (Array ya Matrix) mein save kar lein, toh exponential O(2^N) recursion seedha polynomial O(N) ya O(N*W) mein convert ho jata hai.',
        storyExplain: 'Exam Cheat Memory Trick: Agar main tumse poochu "1 + 1 + 1 + 1 + 1 kitna hota hai?", tum count karke bologe "5!". Ab agar main aage ek aur "+ 1" likh doon, toh kya tum shuru se dobara count karoge? Nahi! Tum bologe "Pehle 5 tha, 5 + 1 = 6!". Purana result yaad rakhna hi DYNAMIC PROGRAMMING hai! 🧠⚡',
        funnyExample: {
          scenario: 'Fibonacci Without vs With DP:\n- Naive Recursion: fib(5) calculates fib(3) five times! Exponential tree like overgrown weeds! 🌲\n- DP Memoization: Calculates fib(3) once, saves in table, instant O(1) lookup next time!\n- Result = 2^N runtime drops to N steps! 🚀',
          punchline: 'Those who do not remember the past are condemned to repeat it!'
        },
        memoryTrick: 'The 5-Step CodeMasti DP Framework:\n1. State: dp[i] kya represent karta hai?\n2. Transition: dp[i] pichle states se kaise relate hota hai?\n3. Base Case: dp[0] ya starting values\n4. Order: 0 se N ya N se 0?\n5. Space Optimization: Kya sirf last 2 variables se kaam chal sakta hai?',
        visualDiagram: {
          title: 'Fibonacci(5) Overlapping Subproblems Tree vs DP Table',
          nodes: [
            'fib(5) -> fib(4) & fib(3)',
            'fib(4) -> fib(3) & fib(2)',
            'Notice fib(3) is calculated multiple times in naive recursion!',
            'DP Table: dp[0]=0, dp[1]=1, dp[2]=1, dp[3]=2, dp[4]=3, dp[5]=5 (Solved in linear O(N)!)'
          ],
          type: 'tree'
        },
        code: `// Dynamic Programming Masterclass
class DynamicProgrammingMastery {
  // 1. Climbing Stairs: O(N) Time, O(1) Space
  // Problem: Each time you can climb 1 or 2 steps. How many ways to reach top?
  static climbStairs(n) {
    if (n <= 2) return n;
    let prev2 = 1, prev1 = 2;
    for (let i = 3; i <= n; i++) {
      const current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  }

  // 2. House Robber (Cannot rob adjacent houses): O(N) Time, O(1) Space
  static rob(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    let prev2 = 0, prev1 = 0;
    for (let num of nums) {
      const current = Math.max(prev1, prev2 + num);
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  }

  // 3. 0/1 Knapsack Problem: O(N * W) Time, O(W) Space
  static knapsack01(weights, values, capacity) {
    const n = weights.length;
    const dp = new Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
      // Traverse backwards to use previous state without overwriting
      for (let w = capacity; w >= weights[i]; w--) {
        dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
      }
    }
    return dp[capacity];
  }
}

console.log("Climbing 5 stairs ways:", DynamicProgrammingMastery.climbStairs(5)); // 8
console.log("House Robber for [2, 7, 9, 3, 1]:", DynamicProgrammingMastery.rob([2, 7, 9, 3, 1])); // 12 (Rob houses 2 + 9 + 1)
console.log("0/1 Knapsack max value (Cap=50):", DynamicProgrammingMastery.knapsack01([10, 20, 30], [60, 100, 120], 50)); // 220`,
        languages: {
          javascript: `function climbStairs(n) {
  let a = 1, b = 1;
  while (n--) b += a, a = b - a;
  return a;
}`,
          python: `def climb_stairs(n: int) -> int:
    a, b = 1, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b`,
          java: `public class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int a = 1, b = 2;
        for (int i = 3; i <= n; i++) {
            int c = a + b; a = b; b = c;
        }
        return b;
    }
}`,
          cpp: `int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; ++i) {
        int c = a + b; a = b; b = c;
    }
    return b;
}`,
          c: `int climbStairs(int n) {
    if (n <= 2) return n;
    int a = 1, b = 2;
    for (int i = 3; i <= n; i++) {
        int c = a + b; a = b; b = c;
    }
    return b;
}`
        },
        codeBreakdown: [
          { part: 'const current = Math.max(prev1, prev2 + num)', label: 'State Transition: Rob current house (prev2 + num) OR skip it (prev1)', color: '#10b981' },
          { part: 'for (let w = capacity; w >= weights[i]; w--)', label: 'Backwards iteration ensures each item is used AT MOST ONCE (0/1 constraint)', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Climbing Stairs: O(N), House Robber: O(N), 0/1 Knapsack: O(N * W)',
          space: 'O(1) space for 1D Fibonacci state machines, O(W) for 1D Knapsack array'
        },
        commonMistakes: [
          '❌ 0/1 Knapsack mein 1D array ko forward (0 to W) iterate karna (that turns it into Unbounded Knapsack where items are reused infinitely)',
          '❌ Memoization table mein state key ko properly serialize na karna'
        ],
        edgeCases: [
          'n = 0 or n = 1 for state transitions',
          'Knapsack capacity = 0 (returns 0)',
          'All items heavier than knapsack capacity'
        ],
        bestPractices: [
          '✅ When solving DP: First write the recursive top-down memoization, then convert to iterative bottom-up tabulation',
          '✅ Whenever `dp[i]` only depends on `dp[i-1]` and `dp[i-2]`: Optimize space from O(N) to O(1) using two variables'
        ],
        miniChallenge: 'How does the Coin Change (Fewest coins to make amount) problem use 1D DP in O(Amount * Coins)?',
        quiz: {
          question: '0/1 Knapsack problem mein 1D space-optimized DP array ko backwards (from Capacity down to weight) iterate kyun karte hain?',
          options: [
            'Kyunki reverse loop fast hota hai',
            'Taaki current item usi iteration mein multiple times reuse na ho sake (0/1 condition enforce karne ke liye)',
            'Kyunki capacity zero se start nahi ho sakti',
            'Array out of bound error se bachne ke liye'
          ],
          answer: 'Taaki current item usi iteration mein multiple times reuse na ho sake (0/1 condition enforce karne ke liye)',
          explanation: 'Backwards iteration se `dp[w - weight]` pichli item ka result hold karta hai, na ki current item ka naya updated result.'
        },
        summary: [
          'Dynamic programming stores subproblem solutions to eliminate exponential re-computations',
          'Top-Down (Memoization) uses recursion + cache; Bottom-Up (Tabulation) uses iterative table filling',
          'State transitions define how smaller sub-problems build up to the global answer'
        ],
        flashcard: {
          q: 'Top-Down Memoization vs Bottom-Up Tabulation mein kya antar hai?',
          a: 'Top-Down recursion se shuru karke table cache karta hai (on-demand), jabki Bottom-Up base cases se shuru karke for-loops se poori table systematically fill karta hai (no recursion stack overhead).'
        },
        funFact: 'Richard Bellman ne "Dynamic Programming" term 1950s mein RAND Corporation mein military mathematical research funding justify karne ke liye coin kiya tha!',
        interviewQuestions: [
          'Explain the difference between Overlapping Subproblems and Optimal Substructure with examples.',
          'How do you reduce the space complexity of 0/1 Knapsack from O(N * W) to O(W)?',
          'Explain the Coin Change II (number of combinations) vs Combination Sum IV (number of permutations) DP loop order difference.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 34 — DP Patterns & Framework (1D, 2D Grid, String DP, LCS, LIS & Edit Distance)',
    lessons: [
      {
        id: 'ds-dp-patterns-framework',
        title: 'DP Patterns (Grid DP, Longest Common Subsequence, Longest Increasing Subsequence & Edit Distance)',
        emoji: '🧩',
        xpReward: 50,
        badgeName: 'DP Grandmaster',
        readingTime: '14 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "String DP aur Grid DP FAANG interviewers ke signature weapons hain! LCS, LIS aur Edit Distance ka state table samajh lo, koi bhi DP problem haath se nahi chootega! 😎"',
          hint: '🤦 Masti Sir: "LCS formula: Agar characters match karein toh `1 + dp[i-1][j-1]`, agar match na karein toh `max(dp[i-1][j], dp[i][j-1])`!"',
          success: '🥳 Masti Sir: "LCS, LIS and Edit Distance conquered! You are officially a DP Grandmaster! 🏆"',
          mistake: '😅 Masti Sir: "Edit Distance mein 3 operations (Insert, Delete, Replace) ka minimum + 1 hota hai!"'
        },
        englishDef: 'Advanced DP Patterns encompass: 1) Grid DP (Unique Paths, Min Path Sum), 2) String Matching DP (Longest Common Subsequence, Edit Distance / Levenshtein Distance), 3) Subsequence DP (Longest Increasing Subsequence O(N log N) with Binary Search), and 4) Interval & Partition DP.',
        hinglishExplain: 'Advanced DP mein hum 2D tables maintain karte hain. LCS (Longest Common Subsequence) do strings ke common subsequence ki length nikalta hai. Edit Distance string A ko string B mein convert karne ke minimum operations (Insert, Delete, Replace) calculate karta hai. LIS (Longest Increasing Subsequence) binary search se O(N log N) mein optimize hota hai.',
        storyExplain: 'Spell Checker / Autocorrect ka socho: Jab tum "aple" type karte ho, Google "apple" kaise suggest karta hai? Edit Distance algorithm se! "aple" ko "apple" banane ke liye sirf 1 insertion operation lagta hai (Distance = 1), isliye wo top recommendation ban jata hai! 📱✨',
        funnyExample: {
          scenario: 'Git Diff & Edit Distance:\n- String A: "horse", String B: "ros"\n- Operation 1: replace \'h\' with \'r\' ("rorse")\n- Operation 2: remove \'r\' ("rose")\n- Operation 3: remove \'e\' ("ros")\n- Minimum Edit Distance = 3 operations! 📝',
          punchline: 'Git Diff and spell check are powered by 2D DP matrices!'
        },
        memoryTrick: 'LCS 2D Table Transition Rule:\nif (s1[i-1] === s2[j-1]) dp[i][j] = 1 + dp[i-1][j-1]\nelse dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])',
        visualDiagram: {
          title: 'LCS 2D Matrix for "abcde" and "ace"',
          nodes: [
            'Table (6x4): Rows="abcde", Cols="ace"',
            'Diagonal jump whenever characters match (\'a\'==\'a\', \'c\'==\'c\', \'e\'==\'e\')',
            'Final Cell dp[5][3] = 3 (Common Subsequence: "ace")'
          ],
          type: 'flow'
        },
        code: `// Advanced DP Patterns: LCS & Edit Distance
class AdvancedDPMastery {
  // 1. Longest Common Subsequence (LCS): O(M * N) Time, O(min(M, N)) Space
  static longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (text1[i - 1] === text2[j - 1]) {
          dp[i][j] = 1 + dp[i - 1][j - 1]; // Diagonal match
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Skip char from either text
        }
      }
    }
    return dp[m][n];
  }

  // 2. Edit Distance (Levenshtein Distance): O(M * N) Time, O(N) Space
  static minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) dp[i][0] = i; // Deleting all chars
    for (let j = 0; j <= n; j++) dp[0][j] = j; // Inserting all chars

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; // No op needed
        } else {
          dp[i][j] = 1 + Math.min(
            dp[i - 1][j],    // Delete
            dp[i][j - 1],    // Insert
            dp[i - 1][j - 1] // Replace
          );
        }
      }
    }
    return dp[m][n];
  }
}

console.log("LCS of 'abcde' and 'ace':", AdvancedDPMastery.longestCommonSubsequence("abcde", "ace")); // 3 ("ace")
console.log("Edit Distance 'horse' to 'ros':", AdvancedDPMastery.minDistance("horse", "ros")); // 3`,
        languages: {
          javascript: `function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}`,
          python: `def longest_common_subsequence(text1: str, text2: str) -> int:
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = 1 + dp[i - 1][j - 1]
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]`,
          java: `public class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
}`,
          cpp: `#include <string>
#include <vector>
#include <algorithm>

int longestCommonSubsequence(const std::string& text1, const std::string& text2) {
    int m = text1.size(), n = text2.size();
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (text1[i - 1] == text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = std::max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp[m][n];
}`,
          c: `// LCS in C
`
        },
        codeBreakdown: [
          { part: 'if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1]', label: 'When characters match, extend the longest common subsequence from the previous diagonal prefix', color: '#10b981' },
          { part: '1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])', label: 'Takes the minimum cost operation among Delete, Insert, and Replace', color: '#3b82f6' }
        ],
        complexity: {
          time: 'LCS and Edit Distance: O(M * N)',
          space: 'O(M * N) standard 2D table, can be space-optimized to O(min(M, N)) using two rolling rows'
        },
        commonMistakes: [
          '❌ 1-indexed DP table mein `text1[i - 1]` ke bajaye `text1[i]` access karna (causes off-by-one string out-of-bounds)',
          '❌ Edit Distance base cases (first row and column initializing to `0...N` and `0...M`) set na karna'
        ],
        edgeCases: [
          'One or both strings are empty (LCS = 0, Edit Distance = length of non-empty string)',
          'Both strings are identical (LCS = length, Edit Distance = 0)'
        ],
        bestPractices: [
          '✅ Whenever 2 strings are compared: Construct a 2D matrix of size (M+1) x (N+1)',
          '✅ For Longest Increasing Subsequence (LIS): Use Patience Sorting + Binary Search to achieve O(N log N) instead of O(N^2)'
        ],
        miniChallenge: 'How does the Patience Sorting algorithm with binary search (std::lower_bound) solve LIS in O(N log N) time?',
        quiz: {
          question: 'Edit Distance problem mein agar do characters match nahi karte, toh transitions mein kaunse 3 operations ka minimum liya jata hai?',
          options: [
            'Add, Multiply, Subtract',
            'Delete (up), Insert (left), Replace (diagonal)',
            'Push, Pop, Shift',
            'Sort, Reverse, Filter'
          ],
          answer: 'Delete (up), Insert (left), Replace (diagonal)',
          explanation: 'Table mein: Up (`dp[i-1][j]`) delete represent karta hai, Left (`dp[i][j-1]`) insert represent karta hai, aur Diagonal (`dp[i-1][j-1]`) replace represent karta hai.'
        },
        summary: [
          '2D String DP tables model prefix-by-prefix comparisons',
          'LCS diagonal transitions represent character matches',
          'Edit distance finds the minimum operations (Insert, Delete, Replace) to transform strings'
        ],
        flashcard: {
          q: 'Grid Unique Paths ka DP formula kya hai?',
          a: '`dp[r][c] = dp[r-1][c] + dp[r][c-1]` (Top cell paths + Left cell paths).'
        },
        funFact: 'Git diff tool do code commits ke beech changed lines highlight karne ke liye Longest Common Subsequence (Myers Diff algorithm) use karta hai!',
        interviewQuestions: [
          'Derive the state transition equations for Edit Distance (Levenshtein Distance).',
          'How do you reconstruct the actual Longest Common Subsequence string from the 2D DP matrix?',
          'Explain how Longest Increasing Subsequence is optimized from O(N^2) to O(N log N) using Binary Search (Patience Sort).'
        ]
      }
    ]
  }
];
