// Chapters 9 to 13: Hashing, Two Pointers, Sliding Window, Prefix Sum & Hybrid Patterns

export const hashingAndPatternsChapters = [
  {
    chapterTitle: 'Chapter 9 — Hashing & Hash Tables (Collision Resolution, Chaining & O(1) Lookups)',
    lessons: [
      {
        id: 'ds-hashing-hash-tables',
        title: 'Hash Tables, Hash Functions, Collisions & Separate Chaining',
        emoji: '🔑',
        xpReward: 45,
        badgeName: 'Hash Hero',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Hash Table matlab ek magical locker system! Key do, magic hash function slot number nikalega, aur O(1) mein saman mil jayega! 🔐"',
          hint: '🤦 Masti Sir: "Do alag keys same bucket mein chale gaye? Usi ko Collision bolte hain! Isko Separate Chaining (Linked List) ya Open Addressing se solve karte hain!"',
          success: '🥳 Masti Sir: "Zabardast! Two Sum, Longest Consecutive Sequence, sab O(N) mein crack ho gaye!"',
          mistake: '😅 Masti Sir: "Load factor > 0.75 hone par hash table slow ho sakti hai. Tab Rehashing karke table size double kiya jata hai!"'
        },
        englishDef: 'A Hash Table is an associative data structure that stores key-value pairs. It uses a Hash Function to compute an integer index into an array of buckets. When two distinct keys hash to the same bucket, Collisions are resolved using Separate Chaining (Linked List / Balanced BST) or Open Addressing (Linear Probing, Quadratic Probing).',
        hinglishExplain: 'Hash Table key-value pairs ko store karne ke liye ek array aur ek Hash Function use karti hai. Key ko hash function ek numeric index mein convert karta hai jisse average O(1) time mein insertion, deletion aur lookup ho jata hai. Jab do keys ka same hash index aa jaye toh use Collision kehte hain.',
        storyExplain: 'Socho ek Hotel mein 100 rooms hain. Guest ka naam "Kabir" aaya. Receptionist ne name ka sum karke Room #42 allot kar diya (Hash Function). Agar agle guest "Rohan" ka bhi calculation Room #42 nikla (Collision), toh Room #42 ke andar ek additional bunk bed laga diya (Separate Chaining)! 🏨',
        funnyExample: {
          scenario: 'College Roll Number vs Aadhaar Lookup:\n- Search by Roll Number in List: Ek-ek roll number check karo → O(N) thaka dene wala kaam 😫\n- Search by Hash Table: Aadhaar number dala → Direct Student File open → O(1) instant! ⚡',
          punchline: 'Hash Table: Direct access pass to your data!'
        },
        memoryTrick: 'Key Concepts:\nHash(key) % TableSize = Bucket Index\nSeparate Chaining = Bucket points to Linked List\nLoad Factor = (Number of Elements) / (Total Buckets)',
        visualDiagram: {
          title: 'Hash Table & Separate Chaining Collision Resolution',
          nodes: [
            'Key: "apple" -> Hash(key) = 2 -> Bucket[2] -> ["apple": 50] -> null',
            'Key: "banana" -> Hash(key) = 4 -> Bucket[4] -> ["banana": 30] -> null',
            'Key: "cherry" -> Hash(key) = 2 (COLLISION!) -> Bucket[2] -> ["apple": 50] -> ["cherry": 80] -> null'
          ],
          type: 'flow'
        },
        code: `// Hash Table & Advanced Hashing Problems
class HashTableMastery {
  // 1. Longest Consecutive Sequence: O(N) Time, O(N) Space
  static longestConsecutive(nums) {
    if (!nums.length) return 0;
    const numSet = new Set(nums); // O(N) hash set creation
    let longestStreak = 0;

    for (let num of numSet) {
      // Only start counting if num is the beginning of a streak
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentStreak = 1;

        while (numSet.has(currentNum + 1)) {
          currentNum += 1;
          currentStreak += 1;
        }

        longestStreak = Math.max(longestStreak, currentStreak);
      }
    }
    return longestStreak;
  }

  // 2. Subarray Sum Equals K: O(N) Time, O(N) Space
  static subarraySum(nums, k) {
    const prefixCount = new Map();
    prefixCount.set(0, 1); // Base case: prefix sum 0 occurs once
    let currentPrefixSum = 0;
    let totalSubarrays = 0;

    for (let num of nums) {
      currentPrefixSum += num;
      // If (currentPrefixSum - k) exists in map, we found valid subarrays
      if (prefixCount.has(currentPrefixSum - k)) {
        totalSubarrays += prefixCount.get(currentPrefixSum - k);
      }
      prefixCount.set(currentPrefixSum, (prefixCount.get(currentPrefixSum) || 0) + 1);
    }
    return totalSubarrays;
  }
}

console.log("Longest Consecutive Sequence ([100, 4, 200, 1, 3, 2]):", HashTableMastery.longestConsecutive([100, 4, 200, 1, 3, 2])); // 4 ([1, 2, 3, 4])
console.log("Subarrays with sum K=2 in [1, 1, 1]:", HashTableMastery.subarraySum([1, 1, 1], 2)); // 2 ([1,1] and [1,1])`,
        languages: {
          javascript: `function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (const n of set) {
    if (!set.has(n - 1)) {
      let curr = n, len = 1;
      while (set.has(curr + 1)) { curr++; len++; }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}`,
          python: `def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0
    for num in num_set:
        if num - 1 not in num_set:
            curr = num
            streak = 1
            while curr + 1 in num_set:
                curr += 1
                streak += 1
            longest = max(longest, streak)
    return longest`,
          java: `import java.util.HashSet;
import java.util.Set;

public class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int n : nums) set.add(n);
        int longest = 0;
        for (int n : set) {
            if (!set.contains(n - 1)) {
                int curr = n, streak = 1;
                while (set.contains(curr + 1)) { curr++; streak++; }
                longest = Math.max(longest, streak);
            }
        }
        return longest;
    }
}`,
          cpp: `#include <vector>
#include <unordered_set>
#include <algorithm>

int longestConsecutive(const std::vector<int>& nums) {
    std::unordered_set<int> s(nums.begin(), nums.end());
    int longest = 0;
    for (int n : s) {
        if (!s.count(n - 1)) {
            int curr = n, streak = 1;
            while (s.count(curr + 1)) { curr++; streak++; }
            longest = std::max(longest, streak);
        }
    }
    return longest;
}`,
          c: `// Hash table implementation in C
#include <stdio.h>
#include <stdlib.h>

// Custom hash table with chaining for integers
`
        },
        codeBreakdown: [
          { part: '!numSet.has(num - 1)', label: 'Ensures we only launch the while loop from the absolute start of a sequence (avoids redundant checks)', color: '#10b981' },
          { part: 'prefixCount.has(currentPrefixSum - k)', label: 'Uses Prefix Sum + HashMap equality to find contiguous subarrays summing to K in O(1)', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Average Case: O(N) for both Longest Consecutive and Subarray Sum K',
          space: 'O(N) to store elements in Hash Set / Map'
        },
        commonMistakes: [
          '❌ Longest Consecutive mein har element ke liye `while` loop chalana bina `has(num - 1)` check kiye (degrades to O(N^2))',
          '❌ Subarray Sum Equals K mein Prefix Sum Map mein base case `{0: 1}` add karna bhool jana'
        ],
        edgeCases: [
          'Empty array (returns 0)',
          'Array with duplicate numbers',
          'Negative numbers in Subarray Sum K'
        ],
        bestPractices: [
          '✅ When you need instant O(1) lookups for existence, always use a HashSet',
          '✅ When counting frequencies or mapping relationships, use a HashMap'
        ],
        miniChallenge: 'Why can a Hash Table operation degrade to O(N) in the absolute worst case?',
        quiz: {
          question: 'Hash Table mein collision hone ka kya matlab hota hai?',
          options: [
            'Computer crash ho jana',
            'Do alag-alag keys ka hash function same bucket index return kare',
            'Data delete ho jana',
            'Memory leak ho jana'
          ],
          answer: 'Do alag-alag keys ka hash function same bucket index return kare',
          explanation: 'Jab do different input keys same array bucket index par hash ho jati hain, use collision kehte hain.'
        },
        summary: [
          'Hash tables provide average O(1) search, insert, and delete',
          'Separate chaining handles collisions by attaching a linked list or balanced tree to each bucket',
          'Longest Consecutive Sequence and Subarray Sum K are hallmark Hash Table patterns'
        ],
        flashcard: {
          q: 'Java 8 HashMap mein Separate Chaining kaise optimize hoti hai?',
          a: 'Jab kisi bucket ki linked list 8 elements se badi ho jati hai, Java automatically use O(N) linked list se O(log N) Red-Black Balanced Tree mein convert kar deta hai.'
        },
        funFact: 'Git version control system har commit aur file ka unique identifier generate karne ke liye SHA-1 Cryptographic Hash function use karta hai!',
        interviewQuestions: [
          'Explain what happens internally when a collision occurs in a Hash Table.',
          'How does the Subarray Sum Equals K algorithm use Prefix Sums with a HashMap to achieve O(N) time?',
          'What is Rehashing, and when is it triggered?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 10 — Two Pointers Pattern Masterclass',
    lessons: [
      {
        id: 'ds-two-pointers-pattern',
        title: 'Two Pointers Pattern (Opposite Direction, Same Direction & 3Sum)',
        emoji: '👉👈',
        xpReward: 45,
        badgeName: 'Pointer Prodigy',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Sorted array dekhte hi dimag ki ghanti bajao: TWO POINTERS! Ek pointer left pe, ek right pe. O(N^2) seedha O(N) ban jayega! 😎"',
          hint: '🤦 Masti Sir: "3Sum mein pehle array ko Sort karo, fir outer loop fix karke inner remaining range par Two Pointers lagao!"',
          success: '🥳 Masti Sir: "Container With Most Water aur 3Sum dono crystal clear ho gaye!"',
          mistake: '😅 Masti Sir: "3Sum mein duplicates skip karna mat bhoolna, warna output mein duplicate triplets aa jayenge!"'
        },
        englishDef: 'The Two Pointers pattern uses two integer index pointers to traverse a linear data structure simultaneously. Variations include Opposite Direction (shrinking from ends towards center, common in sorted arrays and palindromes) and Same Direction (Fast & Slow pointers).',
        hinglishExplain: 'Two Pointers pattern mein hum do index pointers maintain karte hain jo condition ke according move karte hain. Sorted arrays mein pair sum, 3Sum, Container With Most Water, aur Trap Rain Water jaise hard problems Two Pointers se quadratic O(N^2) se optimize hokar O(N) ho jate hain.',
        storyExplain: 'Socho do dost ek lambi road ke do opposite ends se chalna shuru karte hain. Target hai ek particular milestone dhoondhna. Agar sum bohot chhota hai, toh left wala dost aage badhta hai. Agar sum bohot bada hai, toh right wala dost peeche aata hai. Dono milkar exact solution dhoondh lete hain! 🏃‍♂️...🏃‍♀️',
        funnyExample: {
          scenario: 'Container With Most Water:\n- Left Wall (Height 8) vs Right Wall (Height 7)\n- Water Level = Math.min(8, 7) = 7\n- Shorter wall is the bottleneck! Move the shorter pointer inwards to find a taller pillar! 🌊',
          punchline: 'Never move the tall wall — eliminate the bottleneck!'
        },
        memoryTrick: 'Two Pointer Movement Rule on Sorted Array:\nif (sum < target) left++ (increase sum)\nif (sum > target) right-- (decrease sum)\nif (sum === target) Found Match!',
        visualDiagram: {
          title: 'Container With Most Water Two-Pointer Traversal',
          nodes: [
            'Left [0] height=1 <-------------------> Right [8] height=7 (Area: 1 * 8 = 8)',
            'Left is shorter -> left moves to index 1 (height=8)',
            'Left [1] height=8 <-----------------> Right [8] height=7 (Area: 7 * 7 = 49)',
            'Right is shorter -> right moves to index 7',
            'Max Area Tracked: 49'
          ],
          type: 'flow'
        },
        code: `// Two Pointers Masterclass: 3Sum & Container With Most Water
class TwoPointersMastery {
  // 1. Container With Most Water: O(N) Time, O(1) Space
  static maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
      const width = right - left;
      const currentArea = width * Math.min(height[left], height[right]);
      maxWater = Math.max(maxWater, currentArea);

      // Always move the shorter line pointer inwards
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxWater;
  }

  // 2. 3Sum Problem (Find unique triplets summing to 0): O(N^2) Time, O(1) Auxiliary Space
  static threeSum(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort O(N log N)
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicate outer elements
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);
          // Skip duplicates for left & right
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) {
          left++; // Need larger sum
        } else {
          right--; // Need smaller sum
        }
      }
    }
    return result;
  }
}

console.log("Max Water Area ([1,8,6,2,5,4,8,3,7]):", TwoPointersMastery.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log("3Sum for [-1, 0, 1, 2, -1, -4]:", TwoPointersMastery.threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]`,
        languages: {
          javascript: `function maxArea(height) {
  let l = 0, r = height.length - 1, max = 0;
  while (l < r) {
    max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
    if (height[l] < height[r]) l++; else r--;
  }
  return max;
}`,
          python: `def max_area(height):
    l, r, max_w = 0, len(height) - 1, 0
    while l < r:
        max_w = max(max_w, (r - l) * min(height[l], height[r]))
        if height[l] < height[r]: l += 1
        else: r -= 1
    return max_w`,
          java: `public class Solution {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1, max = 0;
        while (l < r) {
            max = Math.max(max, (r - l) * Math.min(height[l], height[r]));
            if (height[l] < height[r]) l++; else r--;
        }
        return max;
    }
}`,
          cpp: `#include <vector>
#include <algorithm>

int maxArea(const std::vector<int>& height) {
    int l = 0, r = height.size() - 1, maxW = 0;
    while (l < r) {
        maxW = std::max(maxW, (r - l) * std::min(height[l], height[r]));
        if (height[l] < height[r]) l++; else r--;
    }
    return maxW;
}`,
          c: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    int l = 0, r = heightSize - 1, maxW = 0;
    while (l < r) {
        int minH = height[l] < height[r] ? height[l] : height[r];
        int area = (r - l) * minH;
        if (area > maxW) maxW = area;
        if (height[l] < height[r]) l++; else r--;
    }
    return maxW;
}`
        },
        codeBreakdown: [
          { part: 'nums.sort((a, b) => a - b)', label: 'Sorting unlocks the directional guarantee for moving left/right pointers', color: '#10b981' },
          { part: 'if (height[left] < height[right]) left++', label: 'Moving the smaller height is the ONLY way to potentially find a larger area', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Container: O(N), 3Sum: O(N^2)',
          space: 'O(1) auxiliary space beyond the output array'
        },
        commonMistakes: [
          '❌ 3Sum mein duplicate elements ko skip na karna jisse output mein duplicate triplets aate hain',
          '❌ Container with Most Water mein taller line ko move karna (taller line move karne se width kam hoti hai aur height kabhi badh nahi sakti)'
        ],
        edgeCases: [
          'Array with less than 3 elements for 3Sum',
          'All duplicate numbers (e.g. [0, 0, 0, 0])',
          'Strictly increasing or decreasing heights'
        ],
        bestPractices: [
          '✅ Sorted Array + Target Sum = Two Pointers',
          '✅ Unsorted Array + Target Sum = Hash Map (unless sorting is affordable)'
        ],
        miniChallenge: 'How would you adapt the 3Sum pattern to solve 4Sum in O(N^3) time and O(1) space?',
        quiz: {
          question: 'Container With Most Water problem mein hum shorter wall wale pointer ko kyun move karte hain?',
          options: [
            'Random choice hoti hai',
            'Kyunki taller wall ko move karne par width ghategi aur height kabhi badh nahi sakti, isliye shorter wall ko move karna hi area badha sakta hai',
            'Kyunki left hamesha right se pehle move hota hai',
            'Kyunki shorter wall memory waste karti hai'
          ],
          answer: 'Kyunki taller wall ko move karne par width ghategi aur height kabhi badh nahi sakti, isliye shorter wall ko move karna hi area badha sakta hai',
          explanation: 'Water capacity shorter wall par depend karti hai (min(h[l], h[r])). Taller wall ko move karne se height bottleneck solve nahi hota aur width bhi kam ho jati hai.'
        },
        summary: [
          'Two Pointers effectively reduces quadratic O(N^2) complexity to O(N)',
          'Requires sorted order or clear monotonic condition to decide which pointer to advance',
          '3Sum combines 1 outer loop with inner two-pointer search in O(N^2)'
        ],
        flashcard: {
          q: 'Two Pointers kab use karna chahiye?',
          a: 'Jab problem mein: (1) Array sorted ho ya sort kiya ja sake, (2) Pair sum ya palindrome check karna ho, (3) Shorter/Taller boundary comparison ho.'
        },
        funFact: 'Self-driving cars ke LiDAR sensor processing algorithms 3D obstacle boundaries ko eliminate karne ke liye Two-Pointer geometric clipping use karte hain!',
        interviewQuestions: [
          'Explain why Container With Most Water has a greedy choice property that guarantees optimal answer in O(N).',
          'How do you handle duplicate avoidance in 3Sum without using an extra HashSet?',
          'Compare Two Pointers vs Hash Map for Two Sum: when is each preferred?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 11 — Sliding Window Pattern Masterclass',
    lessons: [
      {
        id: 'ds-sliding-window-pattern',
        title: 'Sliding Window Pattern (Fixed vs Variable Window & Substrings)',
        emoji: '🪟',
        xpReward: 50,
        badgeName: 'Window Wizard',
        readingTime: '12 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Subarray ya Substring ka continuous problem hai? Sliding Window lagao! Window ko aage se bada karo (Expand), piche se chhota karo (Shrink) 😎"',
          hint: '🤦 Masti Sir: "Fixed Window mein size K fix rehta hai (e.g. Max sum of size K). Variable Window mein condition violate hote hi Left pointer ko aage badhao!"',
          success: '🥳 Masti Sir: "Longest Substring Without Repeating Characters O(N) mein clear ho gaya!"',
          mistake: '😅 Masti Sir: "Window shrink karte waqt frequency count ko decrement karna mat bhoolna!"'
        },
        englishDef: 'The Sliding Window pattern is an algorithmic technique for processing contiguous subarrays or substrings. In Fixed-Size Windows, the window of size K slides one element at a time in O(1). In Variable-Size Windows, the right pointer expands the window while the left pointer shrinks it when a constraint is violated.',
        hinglishExplain: 'Sliding Window pattern mein hum ek imaginary window (range [left, right]) maintain karte hain. Har step mein right pointer window ko bada karta hai (Expand). Agar window ki condition violate ho jaye (jaise duplicate character aa gaya ya sum limit exceed ho gayi), toh left pointer window ko chhota karta hai (Shrink). Isse O(N^2) brute force seedha O(N) ban jata hai.',
        storyExplain: 'Imagine tum train ki window se baahar ka view dekh rahe ho. Jaise hi train aage badhti hai, ek naya ped samne aata hai (Right Expand) aur pichla ped window se bahar nikal jata hai (Left Shrink). Tumhe har baar pura jungle shuru se count nahi karna padta! 🚂🌲',
        funnyExample: {
          scenario: 'Fixed vs Variable Window:\n- Fixed Window (Size 3): [1, 2, 3] -> [2, 3, 4] -> [3, 4, 5] (Purana minus karo, naya plus karo!)\n- Variable Window: "abcabcbb" -> Duplicate "a" dekha toh window ke left se purana "a" bahar phenko! 🧹',
          punchline: 'Slide the window, reuse the computed state!'
        },
        memoryTrick: 'Variable Window Template:\n1. Expand right: add s[right] to state\n2. While (condition violated): remove s[left] from state, left++\n3. Update answer: maxLen = Math.max(maxLen, right - left + 1)',
        visualDiagram: {
          title: 'Variable Sliding Window on "abcabcbb"',
          nodes: [
            'Window [a] -> valid (len=1)',
            'Window [a, b] -> valid (len=2)',
            'Window [a, b, c] -> valid (len=3)',
            'Window [a, b, c, a] -> DUPLICATE "a"! Shrink left -> Window becomes [b, c, a] (len=3)',
            'Max non-repeating substring length = 3 ("abc")'
          ],
          type: 'flow'
        },
        code: `// Sliding Window Masterclass
class SlidingWindowMastery {
  // 1. Fixed Window: Maximum Sum Subarray of Size K: O(N) Time, O(1) Space
  static maxSubArraySumFixed(nums, k) {
    if (nums.length < k) return 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += nums[i];

    let maxSum = windowSum;
    for (let i = k; i < nums.length; i++) {
      windowSum += nums[i] - nums[i - k]; // Slide window: Add incoming, subtract outgoing
      maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
  }

  // 2. Variable Window: Longest Substring Without Repeating Characters: O(N) Time, O(min(N, Alphabet)) Space
  static lengthOfLongestSubstring(s) {
    const lastSeen = new Map(); // char -> last index
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      // If char was seen inside current window, jump left pointer
      if (lastSeen.has(char) && lastSeen.get(char) >= left) {
        left = lastSeen.get(char) + 1;
      }
      lastSeen.set(char, right);
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
  }
}

console.log("Max sum of window k=3 in [2, 1, 5, 1, 3, 2]:", SlidingWindowMastery.maxSubArraySumFixed([2, 1, 5, 1, 3, 2], 3)); // 9 ([5, 1, 3])
console.log("Longest Substring without repeats in 'abcabcbb':", SlidingWindowMastery.lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")`,
        languages: {
          javascript: `function lengthOfLongestSubstring(s) {
  let map = new Map(), left = 0, max = 0;
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= left) left = map.get(s[r]) + 1;
    map.set(s[r], r);
    max = Math.max(max, r - left + 1);
  }
  return max;
}`,
          python: `def length_of_longest_substring(s: str) -> int:
    last_seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1
        last_seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len`,
          java: `import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, max = 0;
        for (int r = 0; r < s.length(); r++) {
            char c = s.charAt(r);
            if (map.containsKey(c) && map.get(c) >= left) {
                left = map.get(c) + 1;
            }
            map.put(c, r);
            max = Math.max(max, r - left + 1);
        }
        return max;
    }
}`,
          cpp: `#include <string>
#include <unordered_map>
#include <algorithm>

int lengthOfLongestSubstring(const std::string& s) {
    std::unordered_map<char, int> map;
    int left = 0, maxLen = 0;
    for (int r = 0; r < (int)s.length(); ++r) {
        if (map.count(s[r]) && map[s[r]] >= left) {
            left = map[s[r]] + 1;
        }
        map[s[r]] = r;
        maxLen = std::max(maxLen, r - left + 1);
    }
    return maxLen;
}`,
          c: `#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int lastSeen[256];
    memset(lastSeen, -1, sizeof(lastSeen));
    int left = 0, maxLen = 0;
    for (int r = 0; s[r] != '\\0'; r++) {
        unsigned char c = (unsigned char)s[r];
        if (lastSeen[c] >= left) left = lastSeen[c] + 1;
        lastSeen[c] = r;
        int len = r - left + 1;
        if (len > maxLen) maxLen = len;
    }
    return maxLen;
}`
        },
        codeBreakdown: [
          { part: 'left = lastSeen.get(char) + 1', label: 'Directly jumps left pointer past previous occurrence of duplicate in O(1)', color: '#10b981' },
          { part: 'right - left + 1', label: 'Current valid window size calculation', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(N) single-pass iteration',
          space: 'O(min(N, AlphabetSize)) auxiliary space'
        },
        commonMistakes: [
          '❌ Duplicate milne par left pointer ko sirf `left = lastSeen.get(char) + 1` karna bina check kiye ki lastSeen index current window ke andar hai ya bahar (`>= left`)',
          '❌ Shrinking loop mein state update karna bhool jana'
        ],
        edgeCases: [
          'Empty string (returns 0)',
          'String with all identical characters (e.g. "bbbbb" -> 1)',
          'String with all unique characters (returns length)'
        ],
        bestPractices: [
          '✅ Contiguous substring/subarray + Min/Max length constraint → Think Sliding Window',
          '✅ Jump optimization using LastSeen HashMap reduces inner while loops to instant jumps'
        ],
        miniChallenge: 'How would you solve Minimum Window Substring (find shortest substring in S containing all characters of T) in O(N) using sliding window with frequency counts?',
        quiz: {
          question: 'Sliding Window mein Variable Window kab shrink (left++) hoti hai?',
          options: [
            'Har step par unconditionally',
            'Jab window ki given condition ya constraint violate ho jati hai',
            'Jab right pointer end tak pahunch jaye',
            'Kyunki memory full ho jati hai'
          ],
          answer: 'Jab window ki given condition ya constraint violate ho jati hai',
          explanation: 'Right pointer window ko expand karta hai aur jaise hi condition (jaise duplicate character ya sum limit) toot-ti hai, left pointer shrink karke window ko dobara valid banata hai.'
        },
        summary: [
          'Sliding Window avoids redundant re-calculation across overlapping subarrays',
          'Fixed window maintains size K by adding incoming and dropping outgoing element',
          'Variable window dynamically expands with right pointer and shrinks with left pointer'
        ],
        flashcard: {
          q: 'Two Pointers vs Sliding Window mein kya difference hai?',
          a: 'Two Pointers aksar sorted arrays mein opposite ends se move karte hain, jabki Sliding Window hamesha same direction mein contiguous sub-segment (range [L, R]) maintain karta hai.'
        },
        funFact: 'TCP/IP computer networking protocol internet par packet transmission manage karne ke liye Sliding Window Flow Control use karta hai taaki receiver buffer overflow na ho!',
        interviewQuestions: [
          'Explain the difference between Fixed-size and Variable-size Sliding Window with examples.',
          'How does the Last-Seen Index optimization eliminate the inner while-loop in Longest Substring Without Repeating Characters?',
          'What is the template for Minimum Window Substring in O(N) time?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 12 — Prefix Sum & Difference Arrays',
    lessons: [
      {
        id: 'ds-prefix-sum-range-queries',
        title: 'Prefix Sum, Range Sum Queries O(1) & 2D Prefix Sum',
        emoji: '➕',
        xpReward: 45,
        badgeName: 'Prefix Prodigy',
        readingTime: '10 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Range [L, R] ka sum baar-baar calculate kar rahe ho? Prefix Sum array banao! Kisi bhi range ka sum instant O(1) mein niklega: Prefix[R] - Prefix[L-1] 😎"',
          hint: '🤦 Masti Sir: "Equilibrium Index dhoondhna hai? Left Sum = Prefix[i-1], Right Sum = TotalSum - Prefix[i]! O(N) time O(1) space!"',
          success: '🥳 Masti Sir: "Prefix Sum aur Range queries master ho gaye!"',
          mistake: '😅 Masti Sir: "L = 0 ho toh `Prefix[L-1]` index out of bound ho jayega! 1-indexed prefix array use karo ya L=0 ka condition check lagao!"'
        },
        englishDef: 'A Prefix Sum array precomputes cumulative sums such that `prefix[i] = prefix[i-1] + arr[i]`. This enables querying the sum of any contiguous range `[L, R]` in O(1) constant time using the formula: `RangeSum(L, R) = prefix[R] - prefix[L-1]`. Extended to 2D matrices, it enables O(1) submatrix sum queries.',
        hinglishExplain: 'Prefix Sum ek technique hai jisme hum pehle se hi elements ka cumulative sum calculate karke array mein rakh lete hain. Iska sabse bada faayda ye hai ki agar 10 lakh range queries `sum(L, R)` aayein, toh har query bina loop ke instant O(1) mein solve ho jati hai.',
        storyExplain: 'Socho tumhare piggy bank mein har din paise jama hote hain. Day 1: ₹10, Day 2: ₹20, Day 3: ₹30. Agar koi pooche "Day 2 se Day 3 ke beech kitna jama hua?", toh tum Total(Day 3) - Total(Day 1) karoge: ₹60 - ₹10 = ₹50 instant! 🐷💰',
        funnyExample: {
          scenario: 'Range Sum Query:\n- Without Prefix Sum: 10,000 queries x Loop of 1000 items = 10,000,000 operations (Slow! 🐌)\n- With Prefix Sum: Precompute O(N) once → Har query O(1) 1-step subtraction! ⚡',
          punchline: 'Precompute once, query a million times in O(1)!'
        },
        memoryTrick: 'Range Sum Formula:\n1D: Sum(L, R) = Prefix[R] - (L > 0 ? Prefix[L-1] : 0)\n2D Submatrix Sum(r1, c1, r2, c2) = P[r2][c2] - P[r1-1][c2] - P[r2][c1-1] + P[r1-1][c1-1]',
        visualDiagram: {
          title: '1D Prefix Sum Array Construction',
          nodes: [
            'Array:        [ 2,  4,  6,  8, 10 ]',
            'Prefix Sum:   [ 2,  6, 12, 20, 30 ]',
            'Query Sum(1 to 3) = [4 + 6 + 8] = 18',
            'Formula: Prefix[3] - Prefix[0] = 20 - 2 = 18 (Instant O(1)!)'
          ],
          type: 'flow'
        },
        code: `// Prefix Sum Array & Range Queries
class PrefixSumEngine {
  constructor(nums) {
    this.prefix = new Array(nums.length);
    if (nums.length > 0) {
      this.prefix[0] = nums[0];
      for (let i = 1; i < nums.length; i++) {
        this.prefix[i] = this.prefix[i - 1] + nums[i];
      }
    }
  }

  // O(1) Range Sum Query
  sumRange(left, right) {
    if (left === 0) return this.prefix[right];
    return this.prefix[right] - this.prefix[left - 1];
  }

  // Find Equilibrium Index where LeftSum === RightSum: O(N) Time, O(1) Space
  static findEquilibriumIndex(nums) {
    const totalSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
      const rightSum = totalSum - leftSum - nums[i];
      if (leftSum === rightSum) return i; // Equilibrium index!
      leftSum += nums[i];
    }
    return -1;
  }
}

const engine = new PrefixSumEngine([2, 4, 6, 8, 10]);
console.log("Range Sum [1, 3] (4+6+8):", engine.sumRange(1, 3)); // 18
console.log("Equilibrium Index of [1, 7, 3, 6, 5, 6]:", PrefixSumEngine.findEquilibriumIndex([1, 7, 3, 6, 5, 6])); // 3 (left sum = 1+7+3=11, right sum = 5+6=11)`,
        languages: {
          javascript: `class NumArray {
  constructor(nums) {
    this.p = [0];
    for (let n of nums) this.p.push(this.p[this.p.length - 1] + n);
  }
  sumRange(l, r) { return this.p[r + 1] - this.p[l]; }
}`,
          python: `class NumArray:
    def __init__(self, nums):
        self.p = [0]
        for n in nums:
            self.p.append(self.p[-1] + n)
    def sum_range(self, l: int, r: int) -> int:
        return self.p[r + 1] - self.p[l]`,
          java: `public class NumArray {
    private int[] p;
    public NumArray(int[] nums) {
        p = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) p[i + 1] = p[i] + nums[i];
    }
    public int sumRange(int l, int r) {
        return p[r + 1] - p[l];
    }
}`,
          cpp: `#include <vector>

class NumArray {
    std::vector<int> p;
public:
    NumArray(const std::vector<int>& nums) : p(nums.size() + 1, 0) {
        for (size_t i = 0; i < nums.size(); ++i) p[i + 1] = p[i] + nums[i];
    }
    int sumRange(int l, int r) {
        return p[r + 1] - p[l];
    }
};`,
          c: `#include <stdlib.h>

typedef struct {
    int* p;
} NumArray;

NumArray* numArrayCreate(int* nums, int numsSize) {
    NumArray* obj = (NumArray*)malloc(sizeof(NumArray));
    obj->p = (int*)malloc((numsSize + 1) * sizeof(int));
    obj->p[0] = 0;
    for (int i = 0; i < numsSize; i++) obj->p[i + 1] = obj->p[i] + nums[i];
    return obj;
}

int numArraySumRange(NumArray* obj, int left, int right) {
    return obj->p[right + 1] - obj->p[left];
}`
        },
        codeBreakdown: [
          { part: 'this.prefix[i] = this.prefix[i - 1] + nums[i]', label: 'Precomputes cumulative running total in O(N) once', color: '#10b981' },
          { part: 'this.prefix[right] - this.prefix[left - 1]', label: 'Answers any subsequent range query in instant O(1)', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Precomputation: O(N), Each Range Query: O(1)',
          space: 'O(N) to store precomputed prefix array'
        },
        commonMistakes: [
          '❌ 0-indexed prefix array mein `left = 0` hone par `prefix[left - 1]` access karna (use 1-indexed prefix array of size N+1 with `prefix[0] = 0`)',
          '❌ Array dynamically update ho raha ho tab bhi plain prefix sum use karna (point updates take O(N) — use Fenwick/Segment tree for updates)'
        ],
        edgeCases: [
          'Range query from index 0 to N-1 (total sum)',
          'Single element range query `sumRange(i, i)` (returns `nums[i]`)',
          'Negative numbers and zeros'
        ],
        bestPractices: [
          '✅ Use size N+1 prefix array where `prefix[i]` stores sum of first `i` elements to avoid edge-case branching for index 0',
          '✅ Combine Prefix Sum with HashMap to count subarrays matching a target sum in O(N)'
        ],
        miniChallenge: 'How would you compute the sum of any 2D submatrix (r1, c1) to (r2, c2) in O(1) time using 2D prefix sums?',
        quiz: {
          question: 'Array `[3, 1, 4, 2]` ka Prefix Sum array kya hoga?',
          options: [
            '[3, 4, 8, 10]',
            '[3, 1, 4, 2]',
            '[10, 8, 4, 3]',
            '[0, 3, 1, 4]'
          ],
          answer: '[3, 4, 8, 10]',
          explanation: 'p[0]=3, p[1]=3+1=4, p[2]=4+4=8, p[3]=8+2=10.'
        },
        summary: [
          'Prefix Sum precalculates cumulative sums in O(N) upfront',
          'Enables instant O(1) range sum queries across any range [L, R]',
          'Equilibrium Index and Subarray Target Sum are solved elegantly using prefix sums'
        ],
        flashcard: {
          q: 'Difference Array technique kab use hoti hai?',
          a: 'Jab multiple range updates (e.g. range [L, R] mein value +X add karo) karni hon, toh Difference Array se har range update O(1) mein ho jati hai, aur final array prefix sum se O(N) mein reconstruct hota hai.'
        },
        funFact: 'Financial stock trading algorithms historical moving averages aur daily profit/loss calculation ke liye Prefix Sum arrays use karte hain!',
        interviewQuestions: [
          'Derive the formula for calculating 2D submatrix range sum in O(1) time using the Principle of Inclusion-Exclusion.',
          'What is a Difference Array and how does it allow O(1) range update operations?',
          'How do you find the Pivot/Equilibrium index of an array in O(N) time and O(1) space?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 13 — Advanced Linear Patterns (Monotonic Stack/Queue, Intervals & Greedy Sorting)',
    lessons: [
      {
        id: 'ds-advanced-linear-patterns',
        title: 'Monotonic Stack/Queue, Interval Merging & Prefix+Hashing Combinations',
        emoji: '🧩',
        xpReward: 50,
        badgeName: 'Pattern Specialist',
        readingTime: '13 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Advanced Linear Patterns wo secret weapon hain jo FAANG ke 80% array-string problems solve karte hain! Monotonic Stack + Interval Merging ko ghol ke pee jao 😎"',
          hint: '🤦 Masti Sir: "Interval problems mein Step 1 hamesha SORTING hoti hai! Start time ke hisaab se sort karo, fir overlaps check karo!"',
          success: '🥳 Masti Sir: "Merge Intervals aur Daily Temperatures dono conquer ho gaye! 🚀"',
          mistake: '😅 Masti Sir: "Intervals compare karte waqt `curr.start <= prev.end` overlap condition yaad rakhna!"'
        },
        englishDef: 'Advanced Linear Patterns synthesize foundational structures into high-performance patterns: Monotonic Stacks (Next Greater / Smaller Element in O(N)), Monotonic Queues (Sliding Window Extremes in O(N)), Interval Scheduling (Sorting + Merging Overlaps in O(N log N)), and Prefix Sum + Hashing (Subarray Sums in O(N)).',
        hinglishExplain: 'Advanced linear patterns multiple basic concepts ko combine karte hain. Interval problems mein pehle start times sort karke overlapping ranges merge kiye jate hain. Monotonic stack order (increasing ya decreasing) maintain karke Next Greater Element aur Daily Temperatures jaise problems ko linear time mein solve karta hai.',
        storyExplain: 'Calendar Meeting Rooms ka socho: Ek meeting 10am-11am hai, dusri 10:30am-12pm. Dono overlap ho gayi! Agar hum saari meetings ko start time ke hisaab se schedule board par arrange kar lein (Sorting), toh aasaani se pata chal jayega kahan conflict hai aur kahan merge kar sakte hain! 📅',
        funnyExample: {
          scenario: 'Daily Temperatures (Weather Forecast):\n- Input: [73, 74, 75, 71, 69, 72, 76, 73]\n- Monotonic Decreasing Stack keeps waiting for a warmer day!\n- As soon as 76 arrives, it resolves all colder pending days at once! ☀️',
          punchline: 'Monotonic Stack: The patient waiter that resolves all past queries in O(1) amortized!'
        },
        memoryTrick: 'Interval Merge Formula:\nif (current.start <= prev.end) -> Overlap! prev.end = Math.max(prev.end, current.end)\nelse -> No Overlap! Push current to result.',
        visualDiagram: {
          title: 'Interval Merging Visual Flow',
          nodes: [
            'Intervals: [[1, 3], [2, 6], [8, 10], [15, 18]]',
            'Sorted by Start Time: [1, 3] and [2, 6] overlap (2 <= 3)',
            'Merged: [1, max(3, 6)] -> [1, 6]',
            '[8, 10] does NOT overlap with [1, 6] (8 > 6) -> Add [8, 10]',
            'Final Output: [[1, 6], [8, 10], [15, 18]]'
          ],
          type: 'flow'
        },
        code: `// Advanced Linear Patterns: Merge Intervals & Daily Temperatures
class AdvancedLinearPatterns {
  // 1. Merge Overlapping Intervals: O(N log N) Time, O(N) Space
  static mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
    // Step 1: Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i];
      const prev = merged[merged.length - 1];

      if (current[0] <= prev[1]) {
        // Overlap: Merge by expanding the end time
        prev[1] = Math.max(prev[1], current[1]);
      } else {
        // No overlap: add as new interval
        merged.push(current);
      }
    }
    return merged;
  }

  // 2. Daily Temperatures (Monotonic Stack): O(N) Time, O(N) Space
  static dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const answer = new Array(n).fill(0);
    const stack = []; // Stores indices of unresolved colder days

    for (let i = 0; i < n; i++) {
      while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const prevIndex = stack.pop();
        answer[prevIndex] = i - prevIndex; // Days waited
      }
      stack.push(i);
    }
    return answer;
  }
}

console.log("Merged Intervals ([[1,3],[2,6],[8,10],[15,18]]):", AdvancedLinearPatterns.mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log("Days to warmer temp ([73,74,75,71,69,72,76,73]):", AdvancedLinearPatterns.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]`,
        languages: {
          javascript: `function merge(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i], prev = res[res.length - 1];
    if (curr[0] <= prev[1]) prev[1] = Math.max(prev[1], curr[1]);
    else res.push(curr);
  }
  return res;
}`,
          python: `def merge(intervals):
    if not intervals: return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for curr in intervals[1:]:
        prev = merged[-1]
        if curr[0] <= prev[1]:
            prev[1] = max(prev[1], curr[1])
        else:
            merged.append(curr)
    return merged`,
          java: `import java.util.*;

public class Solution {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        List<int[]> result = new ArrayList<>();
        int[] curr = intervals[0];
        result.add(curr);
        for (int[] interval : intervals) {
            if (interval[0] <= curr[1]) {
                curr[1] = Math.max(curr[1], interval[1]);
            } else {
                curr = interval;
                result.add(curr);
            }
        }
        return result.toArray(new int[result.size()][]);
    }
}`,
          cpp: `#include <vector>
#include <algorithm>

std::vector<std::vector<int>> merge(std::vector<std::vector<int>>& intervals) {
    if (intervals.empty()) return {};
    std::sort(intervals.begin(), intervals.end());
    std::vector<std::vector<int>> merged;
    merged.push_back(intervals[0]);
    for (size_t i = 1; i < intervals.size(); ++i) {
        if (intervals[i][0] <= merged.back()[1]) {
            merged.back()[1] = std::max(merged.back()[1], intervals[i][1]);
        } else {
            merged.push_back(intervals[i]);
        }
    }
    return merged;
}`,
          c: `// Interval merge in C
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int**)a)[0] - (*(int**)b)[0];
}`
        },
        codeBreakdown: [
          { part: 'intervals.sort((a, b) => a[0] - b[0])', label: 'Guarantees sequential start times so overlaps only occur with adjacent intervals', color: '#10b981' },
          { part: 'prev[1] = Math.max(prev[1], current[1])', label: 'Merges overlapping intervals by extending the end boundary', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Merge Intervals: O(N log N) due to sorting, Daily Temperatures: O(N) single-pass stack',
          space: 'O(N) to store output array and stack'
        },
        commonMistakes: [
          '❌ Interval merging mein pehle array ko sort na karna',
          '❌ End time update karte waqt `Math.max` use na karna (e.g. interval [1, 5] aur [2, 4] merge hone par end 5 rehna chahiye, 4 nahi)'
        ],
        edgeCases: [
          'No overlapping intervals',
          'One large interval completely containing all others (e.g. [1, 10], [2, 3], [4, 5])',
          'All duplicate intervals'
        ],
        bestPractices: [
          '✅ When meeting / schedule overlaps occur: Sort by start time first',
          '✅ When you need the "Next warmer/greater" element: Use a Monotonic Stack'
        ],
        miniChallenge: 'How would you find the minimum number of Meeting Rooms required to host all intervals without conflict in O(N log N)?',
        quiz: {
          question: 'Merge Intervals problem mein intervals ko start time se sort karne ka sabse bada faayda kya hai?',
          options: [
            'Array sundar dikhta hai',
            'Hume sirf adjacent intervals ke beech overlap check karna padta hai, har pair ko compare nahi karna padta',
            'Memory kam lagti hai',
            'Output reverse ho jata hai'
          ],
          answer: 'Hume sirf adjacent intervals ke beech overlap check karna padta hai, har pair ko compare nahi karna padta',
          explanation: 'Sorting ensure karti hai ki overlapping intervals hamesha bagal-bagal mein aayenge, jisse single linear pass O(N) mein merging ho jati hai.'
        },
        summary: [
          'Interval problems require sorting by start time before merging',
          'Monotonic Stack resolves waiting dependencies (like Daily Temperatures) in linear time',
          'Combining patterns (Sorting + Greedy, Prefix + Hashing) solves complex FAANG challenges'
        ],
        flashcard: {
          q: 'Meeting Rooms II (Min rooms required) kaise solve karte hain?',
          a: 'Start times aur End times ko separately sort karo. Two pointers se iterate karo: agar start < end toh new room chahiye (rooms++), warna room free ho gaya (end pointer aage badhao).'
        },
        funFact: 'Flight scheduling systems (Aviation traffic control) hazaron aircraft flight paths aur runway slots allocate karne ke liye Interval Scheduling aur Priority Queues use karte hain!',
        interviewQuestions: [
          'Why does sorting intervals by start time simplify overlap detection to a single O(N) pass?',
          'Explain how Daily Temperatures is solved in linear time using a Monotonic Decreasing Stack.',
          'How do you solve the Non-overlapping Intervals problem (minimum intervals to remove)?'
        ]
      }
    ]
  }
];
