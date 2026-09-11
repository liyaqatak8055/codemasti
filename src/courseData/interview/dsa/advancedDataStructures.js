// Chapters 35 to 39: Advanced Data Structures, Segment Tree, Fenwick Tree, String Algorithms & Amortized Analysis

export const advancedDataStructuresChapters = [
  {
    chapterTitle: 'Chapter 35 — Advanced Data Structures Overview [ADVANCED]',
    lessons: [
      {
        id: 'ds-advanced-ds-overview',
        title: 'Advanced Data Structures (Segment Trees, Fenwick Trees, Sparse Tables & Skip Lists)',
        emoji: '🔮',
        xpReward: 50,
        badgeName: 'Advanced DS Pioneer',
        readingTime: '12 min',
        difficulty: 'Expert',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Competitive Programming aur System Architecture ke high-performance monsters yahan aate hain! Segment Tree aur Fenwick Tree range queries ko O(log N) mein execute karte hain chahe live updates chal rahe hon! ⚡"',
          hint: '🤦 Masti Sir: "Prefix Sum array static data ke liye O(1) deta hai, par updates O(N) leta hai. Segment Tree aur Fenwick Tree dono updates AUR queries O(log N) mein karte hain!"',
          success: '🥳 Masti Sir: "Advanced Range Query data structures master ho gaye!"',
          mistake: '😅 Masti Sir: "Beginners ko basic tree/graph pehle clear karne do; Advanced DS interview ke bonus expert round mein aate hain!"'
        },
        englishDef: 'Advanced Data Structures are specialized structures designed for dynamic updates and high-performance queries. Key structures include Segment Trees (Range queries & Point/Range Updates in O(log N)), Fenwick Trees / Binary Indexed Trees (Prefix sums and point updates with minimal O(N) memory), Sparse Tables (Static Range Minimum Queries in O(1)), and Skip Lists (Probabilistic O(log N) search/insert in linked lists).',
        hinglishExplain: 'Advanced data structures dynamic range queries aur real-time data streaming ke liye design kiye gaye hain. Plain array mein range sum update O(N) leta hai, jabki Fenwick Tree aur Segment Tree update aur query dono ko logarithmic O(log N) time mein perform karte hain.',
        storyExplain: 'Stock Market Live Ticker socho: Har second 10,000 stocks ke price badal rahe hain (Dynamic Updates) aur sath hi investors range queries pooch rahe hain "Top 100 stocks ka average kya hai?". Simple array crash ho jayega — yahan Segment Trees aur Fenwick Trees O(log N) mein live updates aur queries ko sync rakhte hain! 📈',
        funnyExample: {
          scenario: 'Range Query Comparison:\n- Plain Array: Query = O(N), Update = O(1)\n- Prefix Sum: Query = O(1), Update = O(N) [Slow update!]\n- Segment Tree: Query = O(log N), Update = O(log N) [Balanced Beast! 🦁]\n- Sparse Table: Query = O(1), Update = N/A [Static RMQ God!]',
          punchline: 'Segment Trees: Balanced power for dynamic queries!'
        },
        memoryTrick: 'Query vs Update Trade-Off Matrix:\nArray:       Query O(N)     | Update O(1)\nPrefix Sum:  Query O(1)     | Update O(N)\nFenwick/Seg: Query O(log N) | Update O(log N)\nSparse Table: Query O(1)    | Static only',
        visualDiagram: {
          title: 'Segment Tree Range Decomposition',
          nodes: [
            'Root [0..7] Sum',
            'Left Child [0..3] Sum  |  Right Child [4..7] Sum',
            '[0..1] & [2..3]       |  [4..5] & [6..7]',
            'Leaves [0] [1] [2] [3] [4] [5] [6] [7]',
            'Any range query [L, R] covers at most 2 * log N tree segments!'
          ],
          type: 'tree'
        },
        code: `// Segment Tree & Fenwick Tree Comparison
class NumArraySegmentTree {
  constructor(nums) {
    this.n = nums.length;
    this.tree = new Array(4 * this.n).fill(0);
    if (this.n > 0) this.build(nums, 0, 0, this.n - 1);
  }

  build(nums, node, start, end) {
    if (start === end) {
      this.tree[node] = nums[start];
      return;
    }
    const mid = Math.floor((start + end) / 2);
    this.build(nums, 2 * node + 1, start, mid);
    this.build(nums, 2 * node + 2, mid + 1, end);
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }

  update(index, val, node = 0, start = 0, end = this.n - 1) {
    if (start === end) {
      this.tree[node] = val;
      return;
    }
    const mid = Math.floor((start + end) / 2);
    if (index <= mid) this.update(index, val, 2 * node + 1, start, mid);
    else this.update(index, val, 2 * node + 2, mid + 1, end);
    this.tree[node] = this.tree[2 * node + 1] + this.tree[2 * node + 2];
  }

  query(l, r, node = 0, start = 0, end = this.n - 1) {
    if (r < start || end < l) return 0; // Out of range
    if (l <= start && end <= r) return this.tree[node]; // Total overlap
    const mid = Math.floor((start + end) / 2);
    return (
      this.query(l, r, 2 * node + 1, start, mid) +
      this.query(l, r, 2 * node + 2, mid + 1, end)
    );
  }
}

const segTree = new NumArraySegmentTree([1, 3, 5, 7, 9, 11]);
console.log("Segment Tree Query [1, 4] (3+5+7+9):", segTree.query(1, 4)); // 24
segTree.update(2, 10); // Change index 2 from 5 to 10
console.log("Query [1, 4] after update (3+10+7+9):", segTree.query(1, 4)); // 29`,
        languages: {
          javascript: `// Segment Tree in JS
class SegmentTree {
  constructor(nums) { /* 4 * N array */ }
  query(l, r) { /* O(log N) */ }
  update(i, val) { /* O(log N) */ }
}`,
          python: `class SegmentTree:
    def __init__(self, nums):
        self.n = len(nums)
        self.tree = [0] * (4 * self.n)
        if self.n: self.build(nums, 0, 0, self.n - 1)
    def build(self, nums, node, s, e):
        if s == e: self.tree[node] = nums[s]; return
        m = (s + e) // 2
        self.build(nums, 2*node+1, s, m)
        self.build(nums, 2*node+2, m+1, e)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]`,
          java: `class SegmentTree {
    int[] tree; int n;
    public SegmentTree(int[] nums) {
        n = nums.length;
        tree = new int[4 * n];
        if (n > 0) build(nums, 0, 0, n - 1);
    }
    private void build(int[] nums, int node, int s, int e) {
        if (s == e) { tree[node] = nums[s]; return; }
        int m = s + (e - s) / 2;
        build(nums, 2*node+1, s, m);
        build(nums, 2*node+2, m+1, e);
        tree[node] = tree[2*node+1] + tree[2*node+2];
    }
}`,
          cpp: `#include <vector>

class SegmentTree {
    std::vector<int> tree;
    int n;
public:
    SegmentTree(const std::vector<int>& nums) {
        n = nums.size();
        tree.resize(4 * n, 0);
        if (n > 0) build(nums, 0, 0, n - 1);
    }
    void build(const std::vector<int>& nums, int node, int s, int e) {
        if (s == e) { tree[node] = nums[s]; return; }
        int m = s + (e - s) / 2;
        build(nums, 2*node+1, s, m);
        build(nums, 2*node+2, m+1, e);
        tree[node] = tree[2*node+1] + tree[2*node+2];
    }
};`,
          c: `// Segment Tree in C
`
        },
        codeBreakdown: [
          { part: 'this.tree = new Array(4 * this.n)', label: 'Allocates 4*N array memory to safely store the complete binary segment tree', color: '#10b981' },
          { part: 'this.query(l, r, ...)', label: 'Decomposes requested range [L, R] into at most 2 * log N canonical segment intervals', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Build: O(N), Range Query: O(log N), Point Update: O(log N)',
          space: 'O(N) (4 * N auxiliary storage for tree nodes)'
        },
        commonMistakes: [
          '❌ Segment Tree array size ko 2*N allocate karna (must be 4*N to avoid tree indexing buffer overflows for arbitrary N)',
          '❌ Static range queries par Segment Tree lagana jabki simple Prefix Sum O(1) query de sakta hai'
        ],
        edgeCases: [
          'Empty array input',
          'Single element array',
          'Query range completely outside array bounds'
        ],
        bestPractices: [
          '✅ Static array range queries → Use Prefix Sum (O(1)) or Sparse Table for Range Minimum Queries (O(1))',
          '✅ Dynamic array point updates + range queries → Use Fenwick Tree (less memory) or Segment Tree (more flexible)'
        ],
        miniChallenge: 'What is Lazy Propagation in Segment Trees, and how does it optimize RANGE UPDATES (e.g. add +X to range [L, R]) from O(N) to O(log N)?',
        quiz: {
          question: 'Segment Tree array representation ke liye maximum kitni memory array allocate karni chahiye?',
          options: ['N', '2 * N', '4 * N', 'N^2'],
          answer: '4 * N',
          explanation: 'Nearest power of 2 rounding aur 1-based indexing tree height ko accommodate karne ke liye theoretical upper bound 4 * N elements hota hai.'
        },
        summary: [
          'Segment Trees enable dynamic O(log N) range queries and point updates',
          'Fenwick Tree (BIT) provides concise O(log N) prefix sum updates using bitwise manipulation',
          'Sparse Table solves static Range Minimum Queries in O(1) time'
        ],
        flashcard: {
          q: 'Fenwick Tree (BIT) index bit transition rule kya hai?',
          a: '`index += (index & -index)` update ke liye next index jump karta hai, aur `index -= (index & -index)` prefix sum ke liye parent index jump karta hai.'
        },
        funFact: 'Real-time database analytics engines (ClickHouse, Druid) billions of rows par sub-millisecond range aggregation karne ke liye Segment Trees aur Bitmaps use karte hain!',
        interviewQuestions: [
          'Compare Segment Tree vs Fenwick Tree (Binary Indexed Tree): when would you choose one over the other?',
          'Explain Lazy Propagation in Segment Trees and why it maintains O(log N) range updates.',
          'How does a Sparse Table answer Range Minimum Queries (RMQ) in constant O(1) time?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 36 — Advanced String Algorithms (KMP with LPS Array & Rabin-Karp)',
    lessons: [
      {
        id: 'ds-string-algorithms-kmp-rabinkarp',
        title: 'String Matching Algorithms (Knuth-Morris-Pratt KMP, LPS Array & Rabin-Karp Rolling Hash)',
        emoji: '📜',
        xpReward: 50,
        badgeName: 'Pattern Matcher',
        readingTime: '13 min',
        difficulty: 'Expert',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Text mein pattern dhoondhna hai bina piche mude? KMP (Knuth-Morris-Pratt) algorithm LPS array banakar linear O(N + M) time mein pattern match karta hai! 🚀"',
          hint: '🤦 Masti Sir: "LPS array ka matlab: Longest Prefix which is also Suffix! Ye batata hai ki mismatch hone par kitne characters skip karne hain!"',
          success: '🥳 Masti Sir: "KMP LPS construction aur Rabin-Karp Rolling Hash master ho gaye!"',
          mistake: '😅 Masti Sir: "KMP mein mismatch hone par text pointer ko piche mat bhejna, sirf pattern pointer LPS table se jump karta hai!"'
        },
        englishDef: 'Advanced String Matching algorithms find occurrences of pattern P (length M) in text T (length N). Naive search takes O(N * M). The Knuth-Morris-Pratt (KMP) algorithm precomputes the Longest Proper Prefix which is also Suffix (LPS array) to achieve strictly linear O(N + M) time without backtracking the text pointer. Rabin-Karp uses Rolling Polynomial Hashes.',
        hinglishExplain: 'Naive string search mein mismatch hone par text pointer wapas shuru mein chala jata hai jisse O(N * M) lagta hai. KMP algorithm LPS table banata hai jisse pata chalta hai ki mismatch hone par pattern kitna aage khiskana hai, aur text pointer kabhi peeche nahi mudta — guaranteeing O(N + M) linear time.',
        storyExplain: 'Reading a long book for word "onion": Agar "onio..." tak padh liya aur 5th letter \'n\' nahi mila, toh kya tum book ke shuru se dobara padhna shuru karoge? Nahi! Tumhe pata hai "on" already match ho chuka hai, toh tum wahan se aage padhte ho! Yehi KMP ka intelligence hai! 📖🧅',
        funnyExample: {
          scenario: 'KMP LPS Array:\n- Pattern: "ABABCABAB"\n- LPS Array: [0, 0, 1, 2, 0, 1, 2, 3, 4]\n- On mismatch at 5th char: Jumps directly to index 2 instead of starting from 0! ⚡',
          punchline: 'Never backtrack the text pointer!'
        },
        memoryTrick: 'LPS Array Definition:\nLPS[i] = Length of the longest proper prefix of pattern[0..i] that is also a suffix of pattern[0..i].',
        visualDiagram: {
          title: 'KMP Pattern Matching State Jumps',
          nodes: [
            'Text:    A B A B D A B A B C',
            'Pattern: A B A B C',
            'Mismatch at \'D\' vs \'C\'!',
            'LPS jump: Pattern index shifts to 2 ("AB" preserved)',
            'Text pointer keeps moving forward monotonically -> O(N + M) Total'
          ],
          type: 'flow'
        },
        code: `// Knuth-Morris-Pratt (KMP) Algorithm Implementation
class KMPAlgorithm {
  // 1. Build Longest Prefix Suffix (LPS) Array: O(M) Time
  static buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // Length of previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1]; // Jump back in LPS
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  }

  // 2. KMP Search: O(N + M) Time, O(M) Space
  static search(text, pattern) {
    if (!pattern.length) return 0;
    const lps = this.buildLPS(pattern);
    const matches = [];
    let i = 0; // text index
    let j = 0; // pattern index

    while (i < text.length) {
      if (text[i] === pattern[j]) {
        i++;
        j++;
      }

      if (j === pattern.length) {
        matches.push(i - j); // Found match at index i - j
        j = lps[j - 1];      // Look for next match
      } else if (i < text.length && text[i] !== pattern[j]) {
        if (j !== 0) {
          j = lps[j - 1];    // Jump pattern index without moving i
        } else {
          i++;
        }
      }
    }
    return matches;
  }
}

const text = "AABAACAADAABAABA";
const pattern = "AABA";
console.log("KMP Matches at indices:", KMPAlgorithm.search(text, pattern)); // [0, 9, 12]`,
        languages: {
          javascript: `function kmpSearch(txt, pat) {
  const lps = Array(pat.length).fill(0);
  let len = 0, i = 1;
  while (i < pat.length) {
    if (pat[i] === pat[len]) lps[i++] = ++len;
    else if (len) len = lps[len - 1];
    else lps[i++] = 0;
  }
  const res = [];
  let ti = 0, pi = 0;
  while (ti < txt.length) {
    if (txt[ti] === pat[pi]) { ti++; pi++; }
    if (pi === pat.length) { res.push(ti - pi); pi = lps[pi - 1]; }
    else if (ti < txt.length && txt[ti] !== pat[pi]) {
      if (pi) pi = lps[pi - 1]; else ti++;
    }
  }
  return res;
}`,
          python: `def kmp_search(text, pattern):
    if not pattern: return []
    # Build LPS
    lps = [0] * len(pattern)
    length, i = 0, 1
    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        elif length != 0:
            length = lps[length - 1]
        else:
            lps[i] = 0
            i += 1
    # Search
    res, i, j = [], 0, 0
    while i < len(text):
        if text[i] == pattern[j]:
            i += 1; j += 1
        if j == len(pattern):
            res.append(i - j)
            j = lps[j - 1]
        elif i < len(text) and text[i] != pattern[j]:
            if j != 0: j = lps[j - 1]
            else: i += 1
    return res`,
          java: `import java.util.*;

public class KMP {
    public static List<Integer> search(String text, String pattern) {
        List<Integer> res = new ArrayList<>();
        int[] lps = computeLPS(pattern);
        int i = 0, j = 0;
        while (i < text.length()) {
            if (text.charAt(i) == pattern.charAt(j)) { i++; j++; }
            if (j == pattern.length()) {
                res.add(i - j);
                j = lps[j - 1];
            } else if (i < text.length() && text.charAt(i) != pattern.charAt(j)) {
                if (j != 0) j = lps[j - 1];
                else i++;
            }
        }
        return res;
    }
    private static int[] computeLPS(String pat) {
        int[] lps = new int[pat.length()];
        int len = 0, i = 1;
        while (i < pat.length()) {
            if (pat.charAt(i) == pat.charAt(len)) lps[i++] = ++len;
            else if (len != 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
        return lps;
    }
}`,
          cpp: `#include <vector>
#include <string>

std::vector<int> kmpSearch(const std::string& text, const std::string& pattern) {
    int m = pattern.size(), n = text.size();
    std::vector<int> lps(m, 0), res;
    int len = 0, i = 1;
    while (i < m) {
        if (pattern[i] == pattern[len]) lps[i++] = ++len;
        else if (len != 0) len = lps[len - 1];
        else lps[i++] = 0;
    }
    int ti = 0, pi = 0;
    while (ti < n) {
        if (text[ti] == pattern[pi]) { ti++; pi++; }
        if (pi == m) {
            res.push_back(ti - pi);
            pi = lps[pi - 1];
        } else if (ti < n && text[ti] != pattern[pi]) {
            if (pi != 0) pi = lps[pi - 1];
            else ti++;
        }
    }
    return res;
}`,
          c: `// KMP in C
`
        },
        codeBreakdown: [
          { part: 'const lps = this.buildLPS(pattern)', label: 'Precomputes the longest prefix suffix lookup table in linear O(M) time', color: '#10b981' },
          { part: 'j = lps[j - 1]', label: 'Smart jump: Skips already matched prefix characters without backtracking the text index i', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(N + M) strictly linear time (N text length, M pattern length)',
          space: 'O(M) space for the LPS prefix array'
        },
        commonMistakes: [
          '❌ LPS calculation mein mismatch hone par `len` ko `0` set kar dena instead of `lps[len - 1]`',
          '❌ Match milne ke baad `j` ko `0` reset karna (must be `j = lps[j - 1]` to detect overlapping pattern occurrences)'
        ],
        edgeCases: [
          'Pattern is longer than text (returns empty list)',
          'Pattern not present in text',
          'Pattern contains repeated repeating units (e.g. "AAAA" in "AAAAAA")'
        ],
        bestPractices: [
          '✅ When searching for substrings in massive texts: Use KMP for guaranteed O(N + M)',
          '✅ For multiple pattern searches: Use Aho-Corasick or Rabin-Karp Multi-hash'
        ],
        miniChallenge: 'How does the Z Algorithm construct its Z-Array to achieve O(N + M) pattern matching?',
        quiz: {
          question: 'KMP Algorithm naive string matching se fast kyun hota hai?',
          options: [
            'Kyunki wo GPU par chalta hai',
            'Kyunki mismatch hone par text pointer `i` kabhi peeche nahi mudta aur pattern LPS table se aage jump karta hai',
            'Kyunki wo strings ko binary mein convert karta hai',
            'Kyunki wo multi-threading use karta hai'
          ],
          answer: 'Kyunki mismatch hone par text pointer `i` kabhi peeche nahi mudta aur pattern LPS table se aage jump karta hai',
          explanation: 'Text pointer monotonically 0 se N tak aage badhta hai bina kisi redundant comparison ke, isliye total operations bounded O(N + M) rehte hain.'
        },
        summary: [
          'KMP achieves O(N + M) linear pattern matching using the precomputed LPS array',
          'LPS (Longest Proper Prefix which is also Suffix) avoids backtracking the text pointer',
          'Rabin-Karp uses rolling polynomial hashes to compare string fingerprints in O(1) average time'
        ],
        flashcard: {
          q: 'Rabin-Karp Rolling Hash ka formula kya hai?',
          a: '`Hash(S[1..M]) = (Hash(S[0..M-1]) - S[0] * P^(M-1)) * P + S[M] (mod Q)` — sliding window mein naya character add aur purana subtract O(1) time mein hota hai.'
        },
        funFact: 'Plagiarism detection tools aur Biocomputing DNA pattern matchers (BLAST algorithm) millions of base pairs scan karne ke liye KMP aur Rabin-Karp use karte hain!',
        interviewQuestions: [
          'Construct the LPS array step-by-step for the string "AABAACAADAABAABA".',
          'Explain how Rabin-Karp Rolling Hash handles hash collisions in O(1) expected time.',
          'What is the difference between KMP, Z-Algorithm, and Boyer-Moore string search?'
        ]
      }
    ]
  }
];
