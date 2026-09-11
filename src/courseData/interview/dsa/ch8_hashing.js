// Chapter 8 — Hashing (14 Comprehensive Lessons & Interview Problems)
import { createDsaLesson } from './dsaHelper.js'

export const ch8Hashing = {
  chapterTitle: 'Hashing',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-hashing',
      title: 'What is Hashing?',
      emoji: '🔑',
      difficulty: 'Beginner',
      englishDef: 'Hashing is a technique that maps large keys of arbitrary size to fixed-size integer indices in an array (Hash Table) using a mathematical Hash Function, achieving O(1) average time lookups.',
      hinglishExplain: 'Hashing ek jaadui formula (Hash Function) hai jo kisi bhi naam ya key ko turant ek array index number mein convert kar deta hai, jisse search O(1) instant speed se ho jati hai.',
      code: `const phoneBook = new Map();
phoneBook.set("Ali", "9876543210");
console.log(phoneBook.get("Ali")); // O(1) instant search`
    }),

    createDsaLesson({
      id: 'dsa-hash-function',
      title: 'Hash Function',
      emoji: '⚙️',
      difficulty: 'Intermediate',
      englishDef: 'A Hash Function converts a key into a numeric hash code: `Index = Hash(Key) % Table_Size`. A good hash function is deterministic, fast to compute, and distributes keys uniformly to avoid clustering.',
      hinglishExplain: 'Hash Function ka kaam: Key (jaise "Aman") ko number (jaise 4) mein convert karna. Har baar same key par exact same number milna chahiye.',
      code: `function simpleHash(key, tableSize) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash + key.charCodeAt(i) * 31) % tableSize;
  }
  return hash;
}`
    }),

    createDsaLesson({
      id: 'dsa-hash-table',
      title: 'Hash Table',
      emoji: '🗄️',
      difficulty: 'Beginner',
      englishDef: 'A Hash Table is an array-backed associative data structure that stores key-value pairs indexed by hash codes for O(1) insertions, deletions, and lookups.',
      hinglishExplain: 'RAM mein ek array jiske indices par hash keys mapped hoti hain.',
      code: `// Hash Table Array layout`
    }),

    createDsaLesson({
      id: 'dsa-hashmap-data-structure',
      title: 'HashMap (Map in JavaScript)',
      emoji: '🗺️',
      difficulty: 'Beginner',
      englishDef: 'HashMap stores key-value pairs where keys can be of any data type (objects, numbers, strings), preserving insertion order and supporting O(1) get, set, has, and delete.',
      hinglishExplain: 'Key-Value pair store karne ka best structure. JavaScript mein `Map` use karte hain.',
      code: `const userMap = new Map();
userMap.set("id_1", { name: "Rahul", role: "Dev" });
console.log(userMap.has("id_1")); // true`
    }),

    createDsaLesson({
      id: 'dsa-hashset-data-structure',
      title: 'HashSet (Set in JavaScript)',
      emoji: '🎯',
      difficulty: 'Beginner',
      englishDef: 'HashSet stores only UNIQUE values without keys or duplicates, providing O(1) average membership tests (add, has, delete).',
      hinglishExplain: 'Sirf unique values rakhne ke liye Set use karte hain. Duplicates automatically discard ho jaate hain.',
      code: `const visited = new Set();
visited.add(10);
visited.add(10); // Ignored
console.log(visited.size); // 1`
    }),

    createDsaLesson({
      id: 'dsa-hash-collision',
      title: 'Hash Collision',
      emoji: '💥',
      difficulty: 'Intermediate',
      englishDef: 'A Hash Collision occurs when two distinct keys produce the exact same hash index from the hash function: `Hash(Key1) === Hash(Key2)`.',
      hinglishExplain: 'Jab do alag-alag keys (jaise "John" aur "Smith") ka hash formula same index (jaise index 3) de de, toh use Collision kehte hain.',
      code: `// Key1 ("John") -> Index 3
// Key2 ("Smith") -> Index 3 (Collision!)`
    }),

    createDsaLesson({
      id: 'dsa-collision-handling',
      title: 'Collision Handling Techniques',
      emoji: '🛡️',
      difficulty: 'Intermediate',
      englishDef: 'Two main collision resolution strategies: 1) Separate Chaining (Linked Lists / Red-Black Trees at each bucket), 2) Open Addressing (Linear Probing, Quadratic Probing, Double Hashing).',
      hinglishExplain: '1) Separate Chaining: Us index par ek Linked List bana do (sabse common).\n2) Open Addressing: Agla khali slot dhoondh kar waha store karo.',
      code: `// Separate Chaining: Bucket[3] -> [Key1, Val1] -> [Key2, Val2]`
    }),

    createDsaLesson({
      id: 'dsa-frequency-map',
      title: 'Frequency Map Pattern',
      emoji: '📊',
      difficulty: 'Beginner',
      englishDef: 'Counting character and number frequencies using HashMaps in O(N) time to solve majority elements, anagrams, and top-K elements.',
      hinglishExplain: 'Array ke numbers ka count map banana. 90% interview problems ka pehla step hota hai.',
      code: `function buildFreqMap(arr) {
  const map = new Map();
  for (let x of arr) map.set(x, (map.get(x) || 0) + 1);
  return map;
}`
    }),

    createDsaLesson({
      id: 'dsa-hashing-for-searching',
      title: 'Hashing for Fast Searching',
      emoji: '⚡',
      difficulty: 'Beginner',
      englishDef: 'Converting nested O(N²) search loops into O(1) set/map lookups, reducing overall complexity to O(N).',
      hinglishExplain: 'Nested loop lagane ke bajaye elements ko pehle Set mein store kar lo, phir O(1) lookup se fast search karo.',
      code: `// Check if pair with sum exists in O(N) using Set
function hasPairSum(nums, sum) {
  const seen = new Set();
  for (let x of nums) {
    if (seen.has(sum - x)) return true; // O(1) lookup
    seen.add(x);
  }
  return false;
}`
    }),

    createDsaLesson({
      id: 'dsa-two-sum-hashmap',
      title: 'Two Sum using HashMap (LeetCode 1)',
      emoji: '🏆',
      difficulty: 'Beginner',
      englishDef: 'Two Sum finds indices of two numbers that add up to target in O(N) time and O(N) space using a single-pass HashMap storing complements.',
      hinglishExplain: 'Har number ke liye uska complement (`target - num`) map mein check karo. Mil jaye toh instant answer return karo!',
      code: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}`
    }),

    createDsaLesson({
      id: 'dsa-duplicate-detection-hashset',
      title: 'Contains Duplicate using HashSet',
      emoji: '👯',
      difficulty: 'Beginner',
      englishDef: 'Detecting if any value appears at least twice in an array in O(N) time and O(N) space using a HashSet.',
      hinglishExplain: 'Array traverse karte hue number ko Set mein dalo. Agar number pehle se Set mein hai toh duplicate mil gaya!',
      code: `function containsDuplicate(nums) {
  const seen = new Set();
  for (let x of nums) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}`
    }),

    createDsaLesson({
      id: 'dsa-group-anagrams',
      title: 'Group Anagrams (LeetCode 49)',
      emoji: '🔤',
      difficulty: 'Intermediate',
      englishDef: 'Grouping anagram strings together in O(N * K log K) by sorting each word to form a normalized HashMap key.',
      hinglishExplain: 'Har word ko sort karke Map ki key banao: `"eat" -> "aet"`, `"tea" -> "aet"`. Saare anagrams ek hi bucket mein collect ho jaate hain.',
      code: `function groupAnagrams(strs) {
  const map = {};
  for (let s of strs) {
    const key = s.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}`
    }),

    createDsaLesson({
      id: 'dsa-longest-consecutive-sequence',
      title: 'Longest Consecutive Sequence (LeetCode 128)',
      emoji: '🔗',
      difficulty: 'Advanced',
      englishDef: 'Finding the length of the longest consecutive elements sequence in O(N) time using a HashSet to locate sequence starting points (`!set.has(num - 1)`).',
      hinglishExplain: 'Bina sorting ke O(N) mein consecutive count nikalna: Set use karke sirf un numbers se count shuru karo jinka `num - 1` set mein nahi hai.',
      code: `function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxStreak = 0;
  for (let num of set) {
    if (!set.has(num - 1)) { // Start of sequence
      let curr = num, streak = 1;
      while (set.has(curr + 1)) { curr++; streak++; }
      maxStreak = Math.max(maxStreak, streak);
    }
  }
  return maxStreak;
}`
    }),

    createDsaLesson({
      id: 'dsa-hashing-interview-problems',
      title: 'Hashing Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Intermediate',
      englishDef: 'Top Hashing interview problems: 1) Subarray Sum Equals K (Prefix Sum + HashMap), 2) First Unique Character, 3) 4Sum, 4) LRU Cache.',
      hinglishExplain: 'Hashing ke core interview patterns master karo jo Google, Amazon aur startups mein pooche jaate hain.',
      code: `// Subarray Sum Equals K in O(N)`
    })
  ]
}
