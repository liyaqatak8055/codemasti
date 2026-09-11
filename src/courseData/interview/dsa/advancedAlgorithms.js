// Chapters 46 to 50: advanced algorithmic reasoning that builds on the core DSA track.

// QuizBlock compares the selected option text, so keep answer aligned with its option.
const makeQuiz = (question, options, answerIndex, explanation) => ({ question, options, answer: options[answerIndex], explanation })

export const advancedAlgorithmsChapters = [
  {
    chapterTitle: 'Chapter 46 — Advanced Tree Algorithms',
    lessons: [{
      id: 'ds-advanced-tree-algorithms', title: 'Advanced Tree Algorithms (LCA, Diameter, Binary Lifting & Balanced Trees)', emoji: '🌲', xpReward: 55, badgeName: 'Algorithm Ninja', readingTime: '14 min', difficulty: 'Advanced',
      mastirQuote: { start: '👨‍🏫 Masti Sir: "Tree ko sirf traverse karna warm-up hai; asli game ancestor aur path queries mein shuru hota hai!"', hint: '🤦 Masti Sir: "LCA ke liye har baar root se search karoge, toh query-heavy problems mein time out ho jayega."', success: '🥳 Masti Sir: "Ancestor queries ab tumhare liye family gossip se bhi fast hain!"', mistake: '😅 Masti Sir: "BST property aur generic binary-tree property ko mix mat karo."' },
      englishDef: 'Advanced tree algorithms preprocess parent and depth information so repeated path, ancestor, and subtree queries become fast. Balanced trees keep height near logarithmic; LCA identifies the deepest shared ancestor of two nodes.',
      hinglishExplain: 'Ek-do query ho toh DFS chalega. Lekin lakhon queries ho toh tree ko pehle prepare karo: depth aur 2^k ancestors store karo. Phir node ko lift karke LCA O(log N) mein milta hai.',
      funnyExample: { scenario: 'Office hierarchy mein A aur B ke common manager ko dhoondhna hai. Har baar CEO se roll-call karna slow hai; manager table ready rakho!', punchline: 'Preprocessing = pehle mehnat, baad mein turbo queries.' },
      visualDiagram: { title: 'LCA Query Pipeline', type: 'tree', nodes: ['Root tree once', 'Store depth + parent[node][2^k]', 'Lift deeper node', 'Lift both until parents meet', 'Return lowest common ancestor'] },
      code: `// Binary lifting: kth ancestor / LCA building block
function lift(node, distance, up) {
  for (let bit = 0; distance; bit++, distance >>= 1) {
    if (distance & 1) node = up[node][bit];
  }
  return node;
}`,
      languages: { javascript: `function diameter(root) {\n  let best = 0;\n  function height(node) {\n    if (!node) return 0;\n    const left = height(node.left), right = height(node.right);\n    best = Math.max(best, left + right);\n    return 1 + Math.max(left, right);\n  }\n  height(root); return best;\n}`, python: `def diameter(root):\n    best = 0\n    def height(node):\n        nonlocal best\n        if not node: return 0\n        left, right = height(node.left), height(node.right)\n        best = max(best, left + right)\n        return 1 + max(left, right)\n    height(root)\n    return best` },
      complexity: 'Diameter: O(N) time, O(H) recursion space. Binary lifting preprocessing: O(N log N); each LCA: O(log N).',
      miniQuiz: [makeQuiz('Why does a balanced search tree help?', ['It sorts strings only', 'Its height stays O(log N)', 'It removes all pointers', 'It uses no memory'], 1, 'Search, insert, and delete follow a root-to-leaf path, so height controls their cost.')],
      miniChallenge: 'For a company hierarchy tree, explain why an LCA query is useful for finding the nearest shared manager.', revisionNotes: ['Tree height determines path-operation cost.', 'Binary lifting trades O(N log N) preprocessing for O(log N) queries.', 'Diameter is a path, not necessarily a path through the root.']
    }]
  },
  {
    chapterTitle: 'Chapter 47 — Divide & Conquer',
    lessons: [{
      id: 'ds-divide-and-conquer', title: 'Divide & Conquer (Divide, Conquer, Combine & Recurrence Thinking)', emoji: '✂️', xpReward: 45, badgeName: 'Algorithm Ninja', readingTime: '12 min', difficulty: 'Intermediate',
      mastirQuote: { start: '👨‍🏫 Masti Sir: "Bada problem dekho aur panic mat karo—uske chhote twins banao!"', hint: '🤦 Masti Sir: "Divide & conquer tabhi useful hai jab combine step sensible ho."', success: '🥳 Masti Sir: "Recurrence ko dekhte hi complexity ka x-ray aa gaya!"', mistake: '😅 Masti Sir: "Har recursive function divide-and-conquer nahi hota."' },
      englishDef: 'Divide and conquer splits a problem into smaller independent subproblems, solves them recursively, and combines their results. Its running time is described by a recurrence such as T(n) = 2T(n/2) + O(n).',
      hinglishExplain: 'Pizza ko aadha-aadha baantkar har group solve kare, phir results jodo. Merge sort mein divide cheap hai aur merge linear; har level par N work, total log N levels.',
      funnyExample: { scenario: 'Lost socks ko 1,000-piece pile mein dhoondhne ke bajaye pile ko half-half boxes mein split karo, phir relevant box hi check karo.', punchline: 'Smart splitting beats heroic scanning.' },
      visualDiagram: { title: 'Merge Sort Recursion Tree', type: 'tree', nodes: ['[8,3,6,2]', '[8,3] + [6,2]', '[8] [3] [6] [2]', 'merge → [3,8] + [2,6]', 'merge → [2,3,6,8]'] },
      code: `function mergeSort(a) {\n  if (a.length <= 1) return a;\n  const mid = Math.floor(a.length / 2);\n  return merge(mergeSort(a.slice(0, mid)), mergeSort(a.slice(mid)));\n}`,
      complexity: 'Merge sort: O(N log N) time and O(N) auxiliary space. Binary search: O(log N) time.',
      miniQuiz: [makeQuiz('In merge sort, what is the combine step?', ['Pick a random pivot', 'Merge two sorted halves', 'Visit every graph edge', 'Hash each value'], 1, 'The recursive calls produce sorted halves; merge combines them in linear time.')],
      miniChallenge: 'Write the recurrence for an algorithm that solves three subproblems of size n/2 and spends O(n) combining.', revisionNotes: ['Divide, solve, combine.', 'Count work per level and number of levels.', 'Independence of subproblems matters.']
    }]
  },
  {
    chapterTitle: 'Chapter 48 — Randomized Algorithms',
    lessons: [{
      id: 'ds-randomized-algorithms', title: 'Randomized Algorithms (Random Pivot & Reservoir Sampling)', emoji: '🎲', xpReward: 45, badgeName: 'Algorithm Ninja', readingTime: '11 min', difficulty: 'Advanced',
      mastirQuote: { start: '👨‍🏫 Masti Sir: "Random ka matlab careless nahi; adversary ko predictable pattern mat do!"', hint: '🤦 Masti Sir: "Random pivot ke baad bhi partition correctly hona chahiye."', success: '🥳 Masti Sir: "Expected performance ka funda clear—dice bhi algorithmic ho gaya!"', mistake: '😅 Masti Sir: "Expected O(N log N) ko guaranteed worst case mat bolna."' },
      englishDef: 'A randomized algorithm deliberately uses random choices to make bad input arrangements unlikely. Random-pivot quicksort has expected O(N log N) time; reservoir sampling selects a uniform sample from a stream of unknown length.',
      hinglishExplain: 'Agar input kisi villain ne quicksort ko slow karne ke liye arrange kiya ho, random pivot uska plan spoil kar deta hai. Stream ka end pata nahi? Reservoir sampling har item ko fair chance deta hai.',
      funnyExample: { scenario: 'Class monitor ko alphabetical roll-number se choose karoge toh hamesha Aarav jeetega. Random choice sabko fair chance deti hai.', punchline: 'Randomness is a shield against predictable bad cases.' },
      visualDiagram: { title: 'Reservoir Sampling (one slot)', type: 'flow', nodes: ['Take first stream item', 'At item i, choose it with probability 1/i', 'Otherwise retain current item', 'Every item ends with probability 1/N'] },
      code: `function sampleOne(stream) {\n  let chosen;\n  stream.forEach((value, i) => {\n    if (Math.random() < 1 / (i + 1)) chosen = value;\n  });\n  return chosen;\n}`,
      complexity: 'Reservoir sampling: O(N) time, O(1) space for one sample. Randomized quicksort: expected O(N log N), worst O(N²).',
      miniQuiz: [makeQuiz('Why choose a random quicksort pivot?', ['To remove recursion', 'To make consistently bad partitions unlikely', 'To avoid comparisons', 'To sort only numbers'], 1, 'Randomization protects expected performance from input order.')],
      revisionNotes: ['Randomized ≠ incorrect.', 'State expected and worst-case complexities separately.', 'Use a fair probability invariant for sampling.']
    }]
  },
  {
    chapterTitle: 'Chapter 49 — Amortized Analysis',
    lessons: [{
      id: 'ds-amortized-analysis', title: 'Amortized Analysis (Dynamic Arrays, Aggregate Method & Growth)', emoji: '📈', xpReward: 45, badgeName: 'Algorithm Ninja', readingTime: '12 min', difficulty: 'Advanced',
      mastirQuote: { start: '👨‍🏫 Masti Sir: "Kabhi-kabhi costly operation aata hai, par har operation costly nahi hota—poori series dekho!"', hint: '🤦 Masti Sir: "Amortized average input ka average nahi; one operation sequence ka guarantee hai."', success: '🥳 Masti Sir: "Resize ka darr gaya—dynamic array ka asli economics samajh aa gaya!"', mistake: '😅 Masti Sir: "O(1) amortized ko har single push ka O(1) mat samajhna."' },
      englishDef: 'Amortized analysis bounds the average cost per operation across any sequence of operations. When a dynamic array doubles capacity, rare copying costs are paid for by many inexpensive appends.',
      hinglishExplain: 'Ek push kabhi N elements copy karwa sakta hai, par capacities 1, 2, 4, 8... par hi resize hoti hain. N pushes ka total copying 2N se kam rehta hai, isliye per push amortized O(1).',
      funnyExample: { scenario: 'Hostel room cleaning party: ek Sunday heavy cleaning hoti hai, par daily average effort chhota rehta hai.', punchline: 'A rare expensive day does not make every day expensive.' },
      visualDiagram: { title: 'Dynamic Array Doubling', type: 'flow', nodes: ['capacity 1', 'resize → 2 (copy 1)', 'resize → 4 (copy 2)', 'resize → 8 (copy 4)', 'total copies < 2N'] },
      code: `// Aggregate proof: 1 + 2 + 4 + ... + N/2 < N\n// N appends + fewer than N copies => fewer than 2N operations => O(1) amortized append`,
      complexity: 'Append to a doubling dynamic array: O(1) amortized, O(N) for an individual resize. Pop from a stack: O(1) worst case.',
      miniQuiz: [makeQuiz('What does O(1) amortized append mean?', ['Every append costs one CPU cycle', 'Across a sequence, average cost is constant', 'The array never resizes', 'It requires sorted input'], 1, 'The occasional O(N) resize is spread across many cheap appends.')],
      revisionNotes: ['Aggregate analysis sums a whole sequence.', 'Doubling causes geometric—not quadratic—copying.', 'Amortized guarantees are different from probability.']
    }]
  },
  {
    chapterTitle: 'Chapter 50 — Space Optimization & Trade-offs',
    lessons: [{
      id: 'ds-space-optimization', title: 'Space Optimization (In-Place Work, Rolling DP & Memory Trade-offs)', emoji: '🧳', xpReward: 45, badgeName: 'Algorithm Ninja', readingTime: '12 min', difficulty: 'Advanced',
      mastirQuote: { start: '👨‍🏫 Masti Sir: "Fast code jo memory kha jaaye, production mein bhi trouble karega—space ka bill bhi pay hota hai!"', hint: '🤦 Masti Sir: "In-place bolne se pehle output storage aur recursion stack clarify karo."', success: '🥳 Masti Sir: "DP table ko rolling row bana diya—memory ka gym session successful!"', mistake: '😅 Masti Sir: "Space optimize karte hue previous state overwrite mat kar dena."' },
      englishDef: 'Space optimization reduces auxiliary memory while preserving the information required for future computation. Typical techniques include in-place mutation, reusing buffers, iterative traversal, and rolling dynamic-programming rows.',
      hinglishExplain: 'Agar current DP row ko sirf previous row chahiye, poori N×M table store karna waste hai. Do rows rotate karo. Lekin reconstruct path chahiye toh table rakhna may be worth it—trade-off explain karo.',
      funnyExample: { scenario: 'Trip ke liye 20 suitcases le jaane ke bajaye, laundry karke do bags reuse karo. Lekin wedding photos chahiye toh memory card delete mat karna!', punchline: 'Less memory is useful only when it does not delete information you need.' },
      visualDiagram: { title: 'Rolling Array DP', type: 'flow', nodes: ['previous row', 'compute current row', 'swap buffers', 'reuse old row', 'space: O(columns), not O(rows × columns)'] },
      code: `function uniquePaths(rows, cols) {\n  const dp = Array(cols).fill(1);\n  for (let r = 1; r < rows; r++)\n    for (let c = 1; c < cols; c++) dp[c] += dp[c - 1];\n  return dp[cols - 1];\n}`,
      complexity: 'Rolling-grid DP: O(rows × cols) time, O(cols) auxiliary space. In-place algorithms may mutate input, so document that contract.',
      miniQuiz: [makeQuiz('When is a rolling DP array valid?', ['When each state needs only a bounded number of earlier rows', 'Whenever a problem has a grid', 'Only with recursion', 'Never for integers'], 0, 'The recurrence must not need data that the reuse would overwrite.')],
      miniChallenge: 'For edit distance, describe what feature you lose if you keep only two rows instead of the whole table.', revisionNotes: ['Separate input, output, and auxiliary space.', 'Avoid overwrite hazards by choosing iteration direction.', 'Choose clarity over micro-optimization when constraints are small.']
    }]
  }
]
