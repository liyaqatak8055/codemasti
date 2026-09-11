// Chapter 1 & 2: Fundamentals & Big O Complexity (Modules 01, 02, 03)

export const fundamentalsChapters = [
  {
    chapterTitle: 'Chapter 1 — Data Structures Fundamentals & Problem Solving Formula',
    lessons: [
      {
        id: 'ds-intro-fundamentals',
        title: 'What is Data Structure & Why We Need It',
        emoji: '📦',
        xpReward: 35,
        badgeName: 'DSA Pioneer',
        readingTime: '8 min',
        difficulty: 'Beginner',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Data structure ka matlab hai computer ki memory mein data ko saleeqe se organize karna! Jaise wardrobe mein kapde rakhna 😎"',
          hint: '🤦 Masti Sir: "Data type batata hai data KYA hai (e.g. Integer), Data structure batata hai unhe KAISE organize kiya hai!"',
          success: '🥳 Masti Sir: "Shabaash! Pehla fundamental concept clear ho gaya 🔥"',
          mistake: '😅 Masti Sir: "Data type aur Data structure ko same mat samajhna 😂"'
        },
        englishDef: 'A Data Structure is a specialized format for organizing, processing, retrieving, and storing data in computer memory efficiently. It defines the relationship between data items and the operations allowed on them.',
        hinglishExplain: 'Data Structure ek tareeka hai jisse hum data ko computer RAM mein aise arrange karte hain taaki search, insert, delete aur update super fast speed se ho sake. Bina data structure ke data bikhra hua kachra ban jata hai.',
        whyNeedIt: {
          title: 'Why Do We Need Data Structures?',
          subtitle: 'Student Problem: Bina Data Structure ke system slow aur unmanageable ho jata hai:',
          comparison: [
            {
              without: 'Difficult search',
              with: 'Fast search',
              withoutIcon: '🔴',
              withIcon: '🟢',
              detail: 'Bina structure ke har element ko 1-by-1 iterate karna padta hai (O(N) slow)',
              withDetail: 'Hash table ya index se direct O(1) ya O(log N) mein fast search'
            },
            {
              without: 'Hard to manage',
              with: 'Easy management',
              withoutIcon: '🔴',
              withIcon: '🟢',
              detail: 'Large data mein insertion/deletion karne par memory fragmentation aur bugs hote hain',
              withDetail: 'Systematic nodes/arrays se elements ko easily manage aur manipulate kar sakte hain'
            },
            {
              without: 'More complexity',
              with: 'Better organization',
              withoutIcon: '🔴',
              withIcon: '🟢',
              detail: 'Spaghetti code banta hai jisko scale aur debug karna extremely complex hota hai',
              withDetail: 'Clean architecture banti hai jisse production software high speed pe run hota hai'
            }
          ]
        },
        starterCodeExample: {
          title: '💻 Example: Storing and Accessing Array Data',
          code: `const students = ["Ali", "Rahul", "Aman"];

console.log(students[0]); // Output: Ali
console.log(students[1]); // Output: Rahul
console.log(students[2]); // Output: Aman`,
          explanation: {
            title: '🧠 Code Explanation',
            flow: [
              { step: 'students', label: 'Variable Identifier' },
              { step: 'Array [ ... ]', label: 'Linear Ordered Data Structure' },
              { step: 'Index 0 → Ali', label: 'First student at memory offset 0' },
              { step: 'Index 1 → Rahul', label: 'Second student at memory offset 1' },
              { step: 'Index 2 → Aman', label: 'Third student at memory offset 2' }
            ],
            conceptNote: 'Array ek linear data structure hai jisme elements ordered form mein store hote hain. Har item ka ek specific Index number (0 se shuru) hota hai jisse hum direct O(1) time mein access kar sakte hain.'
          }
        },
        storyExplain: 'Socho tumhare kamre mein 1000 kitabein zameen par phaili hain (Unorganized Data). Agar kisi specific book ko dhoondhna ho toh ghanton lag jayenge! Par agar unhe Library Bookshelf (Data Structure) mein category aur alphabet ke hisaab se rakh do, toh 5 second mein mil jayegi! 📚',
        funnyExample: {
          scenario: 'Almirah vs Bikhra Kamra:\n- Raw Data = Poore kamre mein bikhre joote, kapde, socks 🧦\n- Data Structure = Labeled Wardrobe jisme socks ka alag dabba, shirts ka alag hanger!\n- Result = Subah college ke liye 2 minute mein ready!',
          punchline: 'Data Structure = Memory ka super organized wardrobe!'
        },
        memoryTrick: 'Formula:\nAlgorithm + Data Structure = High Performance Program!',
        visualDiagram: {
          title: 'Data Structures Classification & Memory Map',
          subtitle: 'Computer memory (RAM) mein data 3 core ways mein organize hota hai:',
          type: 'category-tree',
          root: {
            title: 'Data Structures Family & Memory Architecture',
            desc: 'Organized way of storing & accessing elements in memory'
          },
          categories: [
            {
              id: 'linear',
              name: 'Linear Data Structures',
              icon: '📦',
              color: '#3b82f6',
              tag: 'Sequential (1-by-1 in RAM)',
              desc: 'Elements memory mein ek linear sequence mein store hote hain. Har element ka single previous aur next link hota hai.',
              items: [
                { name: 'Array', icon: '🔢', note: 'Contiguous memory slots, direct O(1) random index lookup' },
                { name: 'Linked List', icon: '🔗', note: 'Nodes connected by memory pointers, dynamic flexible size' },
                { name: 'Stack', icon: '📚', note: 'LIFO (Last In First Out), e.g. Undo/Redo & Function Call Stack' },
                { name: 'Queue', icon: '🚶‍♂️', note: 'FIFO (First In First Out), e.g. Printer Queue & Event Loop' }
              ]
            },
            {
              id: 'nonlinear',
              name: 'Non-Linear Data Structures',
              icon: '🌳',
              color: '#10b981',
              tag: 'Hierarchical & Branching',
              desc: 'Elements kisi single line mein nahi, balki branches aur multi-connected networks mein connected hote hain.',
              items: [
                { name: 'Tree (BST)', icon: '🌲', note: 'Hierarchical branching, O(log N) fast sorted search' },
                { name: 'Graph', icon: '🕸️', note: 'Vertices & Edges for networks (Google Maps, Social Connections)' },
                { name: 'Heap', icon: '⛰️', note: 'Priority Queue (Min/Max element always on top in O(1))' },
                { name: 'Trie', icon: '🔤', note: 'Prefix Tree for search suggestions & spell check' }
              ]
            },
            {
              id: 'hash',
              name: 'Hash-Based Structures',
              icon: '⚡',
              color: '#8b5cf6',
              tag: 'Key-Value Direct O(1)',
              desc: 'Hash Function mathematical key generate karke direct memory location pe jump karta hai.',
              items: [
                { name: 'Hash Map / Object', icon: '🗺️', note: 'Key-Value pair direct memory mapping for O(1) instant search' },
                { name: 'Hash Set', icon: '🛡️', note: 'Unique items collection, instant O(1) duplicate filter' }
              ]
            }
          ],
          nodes: [
            'Data Structures Hierarchy',
            'Linear: Array, Linked List, Stack, Queue (Sequential)',
            'Non-Linear: Tree, Graph, Trie, Heap (Hierarchical / Network)',
            'Hash-Based: Hash Table / HashMap (Key-Value O(1) Access)'
          ]
        },
        browserBehindScene: {
          title: 'Contact Search Performance Comparison:',
          steps: [
            'Unsorted Array: Scan 1-by-1 → O(N) Time (Slow for 10M contacts)',
            'Sorted Array + Binary Search: Halving range → O(log N) Time (Fast)',
            'Hash Map (Object / Map): Direct hash lookup → O(1) Time (Instant!)'
          ]
        },
        code: `// Contact Search Comparison: Unsorted vs Map
class ContactDirectory {
  constructor() {
    this.list = []; // Linear array: O(N) search
    this.map = new Map(); // Hash map: O(1) search
  }

  addContact(name, phone) {
    this.list.push({ name, phone });
    this.map.set(name, phone);
  }

  searchLinear(name) {
    console.time("Linear Search O(N)");
    const result = this.list.find(c => c.name === name);
    console.timeEnd("Linear Search O(N)");
    return result ? result.phone : "Not Found";
  }

  searchOptimized(name) {
    console.time("HashMap Search O(1)");
    const phone = this.map.get(name);
    console.timeEnd("HashMap Search O(1)");
    return phone || "Not Found";
  }
}

const directory = new ContactDirectory();
directory.addContact("Aarav", "9876543210");
directory.addContact("Zara", "9123456780");

console.log("Optimized Lookup:", directory.searchOptimized("Zara"));`,
        languages: {
          javascript: `// JavaScript: Array vs Map Lookup
const contactsMap = new Map();
contactsMap.set("Zara", "+91 9876543210");
console.log("Found:", contactsMap.get("Zara"));`,
          python: `# Python: List vs Dict Lookup O(1)
contacts_dict = {"Zara": "+91 9876543210", "Aarav": "+91 9123456780"}
print("Found:", contacts_dict.get("Zara", "Not Found"))`,
          java: `// Java: HashMap lookup O(1)
import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        HashMap<String, String> contacts = new HashMap<>();
        contacts.put("Zara", "+91 9876543210");
        System.out.println("Found: " + contacts.get("Zara"));
    }
}`,
          cpp: `// C++: std::unordered_map lookup O(1)
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
    std::unordered_map<std::string, std::string> contacts;
    contacts["Zara"] = "+91 9876543210";
    std::cout << "Found: " << contacts["Zara"] << std::endl;
    return 0;
}`,
          c: `// C: Direct Struct array
#include <stdio.h>
#include <string.h>

struct Contact {
    char name[50];
    char phone[20];
};

int main() {
    struct Contact c = {"Zara", "+91 9876543210"};
    printf("Found: %s -> %s\\n", c.name, c.phone);
    return 0;
}`
        },
        codeBreakdown: [
          { part: 'this.list = []', label: 'Linear array storing contact objects in contiguous memory', color: '#3b82f6' },
          { part: 'this.map = new Map()', label: 'Hash table mapping key string directly to value in O(1)', color: '#10b981' },
          { part: 'this.list.find(...)', label: 'O(N) full traversal iteration', color: '#ef4444' },
          { part: 'this.map.get(...)', label: 'O(1) hash bucket lookup', color: '#8b5cf6' }
        ],
        complexity: {
          time: 'O(1) for Map lookup, O(N) for linear array lookup',
          space: 'O(N) to store N items in memory'
        },
        bruteForce: {
          title: 'Brute Force Unsorted List',
          description: 'Store elements in random array order and iterate from start to end.',
          timeComplexity: 'O(N)',
          spaceComplexity: 'O(1) auxiliary'
        },
        optimalApproach: {
          title: 'Hash-Indexed Organization',
          description: 'Pass key through a hash function to get direct memory slot in constant time.',
          timeComplexity: 'O(1)',
          spaceComplexity: 'O(N)'
        },
        commonMistakes: [
          '❌ Data Type (primitive int, float) aur Data Structure (Array, Tree) ke beech confuse hona',
          '❌ Har problem ke liye bina soche Array use karna chahe Search heavy ho ya Insertion heavy',
          '❌ Time complexity aur Space complexity ka trade-off bhool jana'
        ],
        edgeCases: [
          'Handling 0 elements (empty data structure)',
          'Handling millions of entries where RAM limit triggers caching / external storage'
        ],
        bestPractices: [
          '✅ Frequent search ke liye Hash Table ya Balanced BST use karein',
          '✅ Frequent insertion/deletion at ends ke liye Queue / Doubly Linked List use karein'
        ],
        miniChallenge: 'Agar aapko 1 crore Aadhaar numbers mein se check karna ho ki Aadhaar valid hai ya nahi, toh kaunsa data structure chunoge and why?',
        quiz: {
          question: 'Data Structure ka primary purpose kya hota hai?',
          options: [
            'Computer screen ko stylish dikhana',
            'Data ko memory mein efficiently organize aur process karna',
            'Internet speed badhana',
            'CSS compile karna'
          ],
          answer: 'Data ko memory mein efficiently organize aur process karna',
          explanation: 'Data Structures data ko systematic format mein organize karte hain taaki operations fast aur memory-efficient ho sakein.'
        },
        summary: [
          'Data Structure data storage aur access ka organized format hai',
          'Linear (Array, List, Stack, Queue) vs Non-Linear (Tree, Graph)',
          'Sahi data structure chunne se code 1000x fast ho jata hai'
        ],
        flashcard: {
          q: 'Abstract Data Type (ADT) kya hota hai?',
          a: 'ADT sirf ye define karta hai ki KYA operations honge (behavior), bina ye bataye ki KAISE implement honge (internal implementation).'
        },
        funFact: 'Google search index 500+ billion web pages ko instant milliseconds mein serve karta hai complex inverted index & Trie data structures ke dam par!',
        didYouKnow: 'Dijkstra ne apna famous shortest path algorithm ek coffee cafe mein 20 minutes mein bina pen-paper ke dimag mein design kiya tha!',
        proTips: ['Interview mein pehle data access pattern samjho: Read-heavy hai ya Write-heavy? Phir DS select karo!'],
        interviewQuestions: [
          'What is the difference between Primitive Data Types and Abstract Data Types (ADT)?',
          'Why do tech giants like Google, Amazon, and Microsoft focus heavily on DSA in technical interviews?',
          'When would you prefer a Non-Linear Data Structure over a Linear Data Structure?'
        ]
      },
      {
        id: 'ds-problem-solving-formula',
        title: 'CodeMasti 13-Step Problem Solving Formula',
        emoji: '🧠',
        xpReward: 40,
        badgeName: 'Logic Architect',
        readingTime: '10 min',
        difficulty: 'Beginner',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Problem dekhte hi code likhna shuru mat karo! Pehle 13-step formula follow karo. Seedha code likhna = bina recipe ke biryani banana 😂"',
          hint: '🤦 Masti Sir: "Step 6: Pehle Brute force socho, fir Step 8: Bottleneck dhoondh kar optimize karo!"',
          success: '🥳 Masti Sir: "Badiya! Ab tum kisi bhi unseen coding problem ko systematic solve kar sakte ho! 🚀"',
          mistake: '😅 Masti Sir: "Constraints check nahi kiye aur Time Limit Exceeded (TLE) aa gaya? Step 4 yaad rakho!"'
        },
        englishDef: 'The 13-Step Problem Solving Formula is a structured engineering methodology to deconstruct any algorithmic challenge from understanding inputs and constraints to brute force, optimization, edge-case testing, and interview communication.',
        hinglishExplain: 'Coding interview mein problem aate hi directly typing shuru karna sabse badi galti hai. CodeMasti 13-step formula aapko step-by-step thinking deta hai: Problem samajhna → Constraints analyze karna → Brute force sochna → Bottleneck eliminate karke Optimal solution tak pahunchna.',
        storyExplain: 'Imagine ek detective murder mystery solve kar raha hai. Kya wo bina clues aur constraints check kiye kisi ko bhi jail bhej deta hai? Nahi! Pehle suspects list karta hai (Brute Force), fir alibis check karke eliminate karta hai (Optimization), aur proof test karta hai (Dry Run)! 🕵️‍♂️',
        funnyExample: {
          scenario: 'Exam Hall ki Galti:\n- Beginner: Question dekha → Seedha 50 lines ka ganda loop likh diya → TLE / Runtime Error 😭\n- Pro (13-Step): Input/Output likha → Constraints dekhi (N=10^5 means O(N log N) chahiye) → HashMap lagaya → 10 line mein clean AC! 😎',
          punchline: 'Plan like an architect, code like a craftsman!'
        },
        memoryTrick: 'The 13 Steps:\n1. Understand | 2. Input | 3. Output | 4. Constraints | 5. Examples | 6. Brute Force | 7. Complexity | 8. Bottleneck & Optimize | 9. Code | 10. Test | 11. Debug | 12. Refactor | 13. Explain',
        visualDiagram: {
          title: 'CodeMasti 13-Step Problem-Solving Pipeline',
          nodes: [
            '1-3: Understand Problem, Input & Output Definition',
            '4-5: Check Constraints (Time Limit O(N) vs O(N^2)) & Edge Cases',
            '6-7: Formulate Brute Force & Calculate Complexity',
            '8: Identify Bottleneck & Design Optimized Algorithm',
            '9-11: Write Clean Code, Dry Run with Test Cases & Debug',
            '12-13: Space/Time Optimization & Interview Explanation'
          ],
          type: 'flow'
        },
        code: `// Problem Solving in Action: Two Sum Problem
// Problem: Find two indices whose values sum to target

// Step 6: Brute Force O(N^2)
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

// Step 8 & 9: Optimal Solution using HashMap O(N)
function twoSumOptimal(nums, target) {
  const seen = new Map(); // Value -> Index
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}

console.log("Two Sum Optimal:", twoSumOptimal([2, 7, 11, 15], 9)); // Output: [0, 1]`,
        languages: {
          javascript: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
  return [];
}`,
          python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
          java: `import java.util.HashMap;
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}`,
          cpp: `#include <vector>
#include <unordered_map>

std::vector<int> twoSum(std::vector<int>& nums, int target) {
    std::unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.find(complement) != seen.end()) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`,
          c: `// C Hash or Sorted Two Pointer approach
#include <stdio.h>

void twoSumSimple(int* nums, int size, int target, int* out1, int* out2) {
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (nums[i] + nums[j] == target) {
                *out1 = i; *out2 = j; return;
            }
        }
    }
}`
        },
        codeBreakdown: [
          { part: 'const seen = new Map()', label: 'Stores seen number as key and index as value for O(1) lookup', color: '#10b981' },
          { part: 'const complement = target - nums[i]', label: 'Target minus current item tells us exact needed value', color: '#3b82f6' },
          { part: 'if (seen.has(complement))', label: 'Checks in O(1) if complement was already processed', color: '#f59e0b' }
        ],
        dryRun: {
          input: 'nums = [2, 7, 11, 15], target = 9',
          steps: [
            'i = 0, num = 2, complement = 9 - 2 = 7. seen is {}. Store seen[2] = 0',
            'i = 1, num = 7, complement = 9 - 7 = 2. seen HAS 2 at index 0! Return [0, 1]'
          ]
        },
        complexity: {
          time: 'O(N) single-pass iteration',
          space: 'O(N) to store elements in hash map'
        },
        bruteForce: {
          title: 'Nested Loops',
          description: 'Compare every pair (i, j) in the array.',
          timeComplexity: 'O(N^2)',
          spaceComplexity: 'O(1)'
        },
        optimalApproach: {
          title: 'Single-Pass Hash Map',
          description: 'Store complement lookups in constant time map.',
          timeComplexity: 'O(N)',
          spaceComplexity: 'O(N)'
        },
        commonMistakes: [
          '❌ Constraints check kiye bina O(N^2) code submit kar dena',
          '❌ Interviewer ko bina solution explain kiye chup-chap code likhna',
          '❌ Empty array ya negative numbers wale edge cases test na karna'
        ],
        edgeCases: [
          'Array with exactly 2 elements',
          'Array with negative numbers (e.g. [-3, 4, 3, 90], target = 0)',
          'No pair exists that sums to target'
        ],
        bestPractices: [
          '✅ Interviewer ke sath loud thinking karein',
          '✅ Code likhne se pehle brute force + optimal complexity verbally confirm karein'
        ],
        miniChallenge: 'What time complexity does a constraint of N = 10^5 require to pass within 1 second in competitive programming?',
        quiz: {
          question: 'Agar problem constraint N = 100,000 (10^5) hai, toh kaunsa time complexity 1 second time limit mein ACCEPTED hoga?',
          options: ['O(N^2)', 'O(N!)', 'O(N log N) ya O(N)', 'O(2^N)'],
          answer: 'O(N log N) ya O(N)',
          explanation: '1 second mein standard CPU ~10^8 operations karta hai. N=10^5 pe O(N^2) = 10^10 operations (TLE!), jabki O(N log N) ~ 1.7x10^6 operations (Super Fast!).'
        },
        summary: [
          'Code likhne se pehle problem, inputs, outputs aur constraints ko deeply samjho',
          'Brute force se shuru karke bottleneck identify karo aur optimal data structure use karo',
          'Hamesha dry run aur edge cases verify karke interviewer ko explain karo'
        ],
        flashcard: {
          q: 'Constraints dekh kar complexity kaise decide karein?',
          a: 'N <= 20 → O(2^N) / O(N!); N <= 500 → O(N^3); N <= 5000 → O(N^2); N <= 10^5 → O(N log N); N <= 10^8 → O(N) / O(log N).'
        },
        funFact: 'Standard competitive programming platforms (LeetCode, Codeforces) 1 second mein approximately 10^8 basic CPU operations allow karte hain.',
        proTips: ['Hamesha interviewer se clarify karo: "Are there duplicate elements? Can the input array be empty?"'],
        interviewQuestions: [
          'How do you approach an algorithm problem when you have never seen it before?',
          'What is the relationship between problem constraints and expected asymptotic time complexity?',
          'Why is communicating your thought process more important than rushing to code in a FAANG interview?'
        ]
      },
      {
        id: 'ds-types-linear-nonlinear',
        title: 'Types of Data Structures: Linear vs Non-Linear & Static vs Dynamic',
        emoji: '🗂️',
        xpReward: 35,
        badgeName: 'Structure Classifier',
        readingTime: '8 min',
        difficulty: 'Beginner',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Linear structure matlab seedhi katar, Non-linear matlab family tree ya road network!"',
          hint: '🤦 Masti Sir: "Static array ka size fix hota hai, Dynamic array runtime par expand karta hai!"',
          success: '🥳 Masti Sir: "Great! Linear vs Non-linear differentiation clear ho gaya!"',
          mistake: '😅 Masti Sir: "Binary tree ko linear mat keh dena, usme branches hoti hain!"'
        },
        englishDef: 'Data structures are categorized into Linear (sequential elements like Arrays, Linked Lists, Stacks, Queues), Non-Linear (hierarchical/interconnected like Trees, Graphs), Static (fixed size at compile-time), and Dynamic (flexible runtime resizing).',
        hinglishExplain: 'Linear mein har element ka ek previous aur ek next element hota hai (single line flow). Non-linear mein elements 1-to-many ya many-to-many relation banate hain (jaise Family Tree ya Road Map). Static ka size fix hota hai, Dynamic runtime pe shrink/grow ho sakta hai.',
        funnyExample: {
          scenario: 'Movie Ticket Line vs Metro Network:\n- Linear = Ticket Counter ki seedhi line 🧍🧍🧍 (Aage-peeche log)\n- Non-Linear = Delhi Metro Map 🚇 (Ek station se 4 alag lines nikal sakti hain!)\n- Static = 50 seat wali bus (51st banda nahi baith sakta 🚌)\n- Dynamic = Elastic train jo passengers aate hi nayi bogie jod leti hai! 🚂',
          punchline: 'Linear = Line mein khade log, Non-linear = Web network!'
        },
        visualDiagram: {
          title: 'Linear vs Non-Linear Comparison',
          nodes: [
            'Linear: Array [0] -> [1] -> [2] (Sequential Memory)',
            'Non-Linear Tree: Root -> Left/Right Children (Branching)',
            'Non-Linear Graph: Interconnected Nodes with Edges (Cyclic/Acyclic)'
          ],
          type: 'flow'
        },
        code: `// Linear vs Non-Linear Implementation
// 1. Linear & Dynamic Data Structure: Stack (LIFO)
class SimpleStack {
  constructor() { this.items = []; }
  push(val) { this.items.push(val); }
  pop() { return this.items.pop(); }
}

// 2. Non-Linear Data Structure: Hierarchical Tree Node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = []; // 1-to-Many branching relationship
  }
  addChild(childNode) {
    this.children.push(childNode);
  }
}

const root = new TreeNode("CEO");
root.addChild(new TreeNode("Engineering VP"));
root.addChild(new TreeNode("Design VP"));
console.log("Root Children Count:", root.children.length);`,
        languages: {
          javascript: `const linearArray = [10, 20, 30]; // Linear
class TreeNode {
  constructor(val) { this.val = val; this.left = null; this.right = null; }
}`,
          python: `linear_list = [10, 20, 30] # Linear
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right`,
          java: `public class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}`,
          cpp: `struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};`,
          c: `struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};`
        },
        codeBreakdown: [
          { part: 'this.items = []', label: 'Sequential 1D storage for linear traversal', color: '#3b82f6' },
          { part: 'this.children = []', label: 'Array of node references enabling branching hierarchical tree structure', color: '#10b981' }
        ],
        complexity: {
          time: 'Traversal: Linear O(N) sequential vs Tree O(N) recursive DFS/BFS',
          space: 'O(N) node storage'
        },
        commonMistakes: [
          '❌ Static array size exceed hone par buffer overflow ya runtime exception ignore karna',
          '❌ Non-linear structures ko simple for-loop se iterate karne ki koshish karna (DFS/BFS traversal required)'
        ],
        edgeCases: [
          'Empty tree (root = null)',
          'Single node tree',
          'Skewed tree acting like a linked list'
        ],
        bestPractices: [
          '✅ Hierarchical data (Organization, Folders, DOM) ke liye Tree use karein',
          '✅ Network data (Social followers, Flights, Road map) ke liye Graph use karein'
        ],
        miniChallenge: 'Identify whether a File Explorer Folder system is Linear or Non-Linear.',
        quiz: {
          question: 'Inme se kaunsa ek Non-Linear Data Structure hai?',
          options: ['Queue', 'Linked List', 'Binary Tree', 'Stack'],
          answer: 'Binary Tree',
          explanation: 'Binary Tree hierarchical 1-to-many branching structure follow karta hai, isliye ye Non-Linear data structure hai.'
        },
        summary: [
          'Linear DS (Array, LL, Stack, Queue) sequential access provide karte hain',
          'Non-Linear DS (Tree, Graph) hierarchical aur networked relationships represent karte hain',
          'Static DS compile-time size hold karta hai, Dynamic DS runtime grow/shrink hota hai'
        ],
        flashcard: {
          q: 'Contiguous vs Non-Contiguous memory mein kya antar hai?',
          a: 'Array elements memory mein ek ke baad ek lagatar (contiguous) store hote hain, jabki Linked list / Tree nodes alag-alag scattered memory addresses pe pointers ke through judte hain.'
        },
        funFact: 'Operating system ka pura file directory structure (Folders & Subfolders) ek N-ary Tree data structure hota hai!',
        interviewQuestions: [
          'Compare contiguous memory vs non-contiguous memory data structures with pros and cons.',
          'What are the trade-offs of using Dynamic Arrays over Static Arrays?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 2 — Complexity Analysis (Big-O, Time & Space Visualizer)',
    lessons: [
      {
        id: 'ds-complexity-analysis-bigo',
        title: 'Time & Space Complexity (Big-O, Omega, Theta & Growth Rates)',
        emoji: '⏱️',
        xpReward: 45,
        badgeName: 'Big-O Master',
        readingTime: '12 min',
        difficulty: 'Beginner to Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Code chal gaya toh teer nahi maara! Ye dekho ki 10 data par kitna time liya aur 10 lakh data par kitna lega! Yahi Big-O hai 😎"',
          hint: '🤦 Masti Sir: "Constants ko drop karo (O(2N) → O(N)) aur hamesha highest power / dominant term ko pakdo!"',
          success: '🥳 Masti Sir: "Zabardast! Ab tum O(1) se leke O(N!) tak sabhi complexities ko analyze kar sakte ho!"',
          mistake: '😅 Masti Sir: "Auxiliary space aur Input space ko mix mat karo. Auxiliary space wo extra memory hai jo tumhara algorithm leta hai!"'
        },
        englishDef: 'Big-O notation describes the upper bound (worst-case scenario) of an algorithm runtime or memory requirement as the input size (N) grows towards infinity. Omega (Ω) represents best case, and Theta (Θ) represents tight bound average case.',
        hinglishExplain: 'Big-O notation hume batata hai ki jab input N 10 se badhkar 10 lakh ho jayega, toh algorithm kitna slow hoga ya kitni extra memory lega. Hum hardware ki speed seconds mein nahi naapte, balki number of operations calculate karte hain.',
        storyExplain: 'Agar tum Mumbai se Pune 1 pen bhej rahe ho toh courier 2 ghante lega. Agar 1000 kitabein bhej rahe ho tab bhi airplane 2 hi ghante lega (Constant Time O(1)). Lekin agar tum 1000 logo ko phone karke personal birthday wish bol rahe ho, toh 1000x zyada time lagega (Linear Time O(N))! 📞✈️',
        funnyExample: {
          scenario: 'Big-O Zoo:\n- O(1) = Cheetah 🐆 (Flash speed, N chahe 1 ho ya 1 billion)\n- O(log N) = Horse 🐎 (Super efficient binary search)\n- O(N) = Dog 🐕 (Reliable linear loop)\n- O(N log N) = Elephant 🐘 (Efficient merge sort)\n- O(N^2) = Tortoise 🐢 (Nested loops, 10^5 pe laptop hang!)\n- O(2^N) & O(N!) = Dinosaur 🦖 (Extinction level slow recursion!)',
          punchline: 'O(1) is bliss, O(N^2) is pain, O(2^N) is crash!'
        },
        memoryTrick: 'Growth Hierarchy (Fast to Slow):\nO(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(N^3) < O(2^N) < O(N!)',
        visualDiagram: {
          title: 'Asymptotic Complexity Curves & Operation Scaling',
          nodes: [
            'O(1) Constant: Array Indexing, HashMap Lookup',
            'O(log N) Logarithmic: Binary Search, BST Search',
            'O(N) Linear: Single For Loop, Linear Search',
            'O(N log N) Linearithmic: Merge Sort, Quick Sort (Avg), Heap Sort',
            'O(N^2) Quadratic: Nested Loops, Bubble Sort, Matrix Ops',
            'O(2^N) Exponential: Subsets, Recursive Fibonacci',
            'O(N!) Factorial: Permutations, Traveling Salesman Brute Force'
          ],
          type: 'tree'
        },
        browserBehindScene: {
          title: 'Growth Rates Comparison Table (Operations for N):',
          steps: [
            'N = 10: O(log N)=3, O(N)=10, O(N log N)=33, O(N^2)=100, O(2^N)=1024',
            'N = 100: O(log N)=7, O(N)=100, O(N log N)=664, O(N^2)=10,000, O(2^N)=1.26 x 10^30',
            'N = 1,000,000 (10^6): O(log N)=20 ops (Instant!), O(N)=10^6 ops (0.01s), O(N^2)=10^12 ops (Hours!)'
          ]
        },
        code: `// Comparing Big-O Complexities in Code

// 1. O(1) Constant Time
function getFirstElement(arr) {
  return arr[0]; // Exactly 1 step regardless of arr size
}

// 2. O(log N) Logarithmic Time (Binary Search)
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

// 3. O(N) Linear Time
function sumArray(arr) {
  let total = 0;
  for (let num of arr) total += num; // N iterations
  return total;
}

// 4. O(N^2) Quadratic Time
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // N * N operations
    }
  }
}`,
        languages: {
          javascript: `// JS Complexity Comparisons
const o1 = (arr) => arr[0];
const oN = (arr) => arr.reduce((a, b) => a + b, 0);`,
          python: `# Python Complexity Comparisons
def o1(arr): return arr[0]
def oN(arr): return sum(arr)
def oN2(arr): return [(i, j) for i in arr for j in arr]`,
          java: `public class Complexity {
    public static int getFirst(int[] arr) { return arr[0]; } // O(1)
    public static int getSum(int[] arr) { // O(N)
        int s = 0;
        for (int x : arr) s += x;
        return s;
    }
}`,
          cpp: `// C++ Complexity
int getFirst(const std::vector<int>& v) { return v[0]; } // O(1)
int getSum(const std::vector<int>& v) { // O(N)
    int s = 0;
    for (int x : v) s += x;
    return s;
}`,
          c: `// C Complexity
int getFirst(int arr[]) { return arr[0]; } // O(1)`
        },
        codeBreakdown: [
          { part: 'arr[0]', label: 'Direct memory offset calculation: BaseAddress + 0 * sizeof(item) → O(1)', color: '#10b981' },
          { part: 'while (low <= high)', label: 'Each iteration cuts search space in half (N / 2^k = 1 → k = log2 N) → O(log N)', color: '#3b82f6' },
          { part: 'for (let num of arr)', label: 'Linear iteration touching every item once → O(N)', color: '#f59e0b' },
          { part: 'nested for loops', label: 'Matrix of pair combinations generating N * N operations → O(N^2)', color: '#ef4444' }
        ],
        complexity: {
          time: 'Varies from O(1) to O(N!) depending on loop depth and recursive branches',
          space: 'Auxiliary Space: Extra memory allocated (variables, tables, call stack)'
        },
        commonMistakes: [
          '❌ Non-dominant terms retain karna (e.g. O(N^2 + 5N + 100) ko O(N^2) likhne ke bajaye formula likhna)',
          '❌ Space complexity mein input size include karna (Auxiliary space vs Total space)',
          '❌ Recursive call stack memory ko space complexity mein count na karna'
        ],
        edgeCases: [
          'When N is very small (e.g. N <= 5), an O(N^2) algorithm may beat an O(N log N) algorithm due to constant factors',
          'Amortized analysis: Dynamic array insertion is O(1) amortized, even though occasional resizing is O(N)'
        ],
        bestPractices: [
          '✅ Interview mein hamesha specify karo: Best case, Worst case aur Average case',
          '✅ Space complexity calculate karte waqt recursion stack depth ko include karein'
        ],
        miniChallenge: 'What is the time complexity of: for(let i=1; i<n; i*=2) { console.log(i); } ?',
        quiz: {
          question: 'Agar ek loop har step mein `i = i * 2` karta hai jab tak `i < N`, toh iska time complexity kya hoga?',
          options: ['O(N)', 'O(log N)', 'O(N^2)', 'O(1)'],
          answer: 'O(log N)',
          explanation: 'Har step mein i double ho raha hai (1, 2, 4, 8, ... 2^k = N). Isliye k = log2(N) steps lagenge, jo O(log N) hota hai.'
        },
        summary: [
          'Big-O upper bound measure karta hai (worst case scenario)',
          'Constants aur lower-order terms ko drop kiya jata hai',
          'Auxiliary space algorithm ki extra memory consumption ko reflect karta hai'
        ],
        flashcard: {
          q: 'Amortized Complexity kya hoti hai?',
          a: 'Jab kisi sequence of operations mein mostly operations O(1) hote hain aur kabhi-kabhi ek rare expensive operation (e.g. dynamic array doubling) hota hai, toh overall average cost per operation O(1) rehti hai.'
        },
        funFact: 'O(log N) itna fast hota hai ki agar aap 8 billion (Earth population) logon mein se kisi 1 insaan ko binary search se dhoondho, toh maximum sirf 33 comparisons lagenge!',
        proTips: ['Whenever you see dividing search space in half (e.g. Binary Search, Divide & Conquer), think O(log N)!'],
        interviewQuestions: [
          'Explain the difference between Big-O, Big-Omega (Ω), and Big-Theta (Θ) notations.',
          'Why does dynamic array appending have O(1) amortized time complexity despite array resizing taking O(N)?',
          'What is auxiliary space, and how does it differ from space complexity?'
        ]
      }
    ]
  }
];
