// Chapters 3 to 8: Linear Data Structures (Arrays, Strings, Linked Lists, Stacks, Queues, Matrices)

export const linearStructuresChapters = [
  {
    chapterTitle: 'Chapter 3 — Arrays (1D, 2D, Memory Layout & 10 Core Problems)',
    lessons: [
      {
        id: 'ds-arrays-memory-operations',
        title: 'Arrays (Memory Representation, Indexing & Operations)',
        emoji: '📊',
        xpReward: 40,
        badgeName: 'Array Architect',
        readingTime: '10 min',
        difficulty: 'Beginner',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Array me sab neighbours hain! Address bhi nearby, access bhi instant O(1). Apartment society samajh lo 😂"',
          hint: '🤦 Masti Sir: "Array ke beech mein insert/delete karoge toh baaki sabko shift karna padega — O(N) cost lagegi!"',
          success: '🥳 Masti Sir: "Zabardast! Array memory mapping crystal clear ho gayi 🔥"',
          mistake: '😅 Masti Sir: "Index out of bounds exception (0 to N-1) se hamesha bachna!"'
        },
        englishDef: 'An Array is a contiguous linear data structure storing elements of the same data type at sequential memory addresses. Random access via index is O(1) using the formula: Address = BaseAddress + Index * ElementSize.',
        hinglishExplain: 'Array ek linear container hai jisme sabhi elements RAM ke andar lagatar (contiguous) slots mein store hote hain. Iska sabse bada fayda ye hai ki kisi bhi index ka element instant O(1) time mein mil jata hai direct memory formula se.',
        storyExplain: 'Imagine ek railway train ke numbered coaches: Seat 0, Seat 1, Seat 2... Sab consecutive hain! Agar TC ko Seat #5 pe jaana hai toh seedha 5th coach par jump kar sakta hai (O(1)). Lekin agar beech mein ek naya coach dalna ho toh aage ke saare coaches ko track par aage khiskana padega (O(N) shifting)! 🚂',
        funnyExample: {
          scenario: 'Cinema Hall Seats:\n- Access Seat 4: Seedha 4th seat par baith jao → O(1) instant!\n- Beech mein naya dost ghusana: Seat 3 ke baad sabko ek-ek seat right shift hona padega! 🍿\n- Last seat par baithna: O(1) easy peasy!',
          punchline: 'Read is supersonic, Middle insertion is heavy gym workout!'
        },
        memoryTrick: 'Formula:\nAddress(arr[i]) = Base_Address + (i * size_of_data_type)',
        visualDiagram: {
          title: 'Contiguous Memory Layout of 1D Array',
          nodes: [
            'arr[0] @ Address 1000 (Value: 12)',
            'arr[1] @ Address 1004 (Value: 45)',
            'arr[2] @ Address 1008 (Value: 67)',
            'arr[3] @ Address 1012 (Value: 89)'
          ],
          type: 'flow'
        },
        code: `// Array Operations & 10 Core Problems
class ArrayMastery {
  // 1. Find Maximum & Minimum: O(N)
  static findMinMax(arr) {
    let min = arr[0], max = arr[0];
    for (let num of arr) {
      if (num < min) min = num;
      if (num > max) max = num;
    }
    return { min, max };
  }

  // 2. Reverse Array In-Place: O(N) Time, O(1) Space
  static reverseInPlace(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }

  // 3. Move Zeros to End: O(N) Time, O(1) Space
  static moveZeros(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
        nonZeroIndex++;
      }
    }
    return arr;
  }

  // 4. Kadane's Algorithm: Maximum Subarray Sum O(N)
  static maxSubarraySum(arr) {
    let maxSoFar = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSoFar = Math.max(maxSoFar, currentSum);
    }
    return maxSoFar;
  }
}

const data = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max Subarray Sum (Kadane):", ArrayMastery.maxSubarraySum(data)); // 6 ([4, -1, 2, 1])`,
        languages: {
          javascript: `// Kadane's Algorithm in JS
function maxSubArray(nums) {
  let maxSoFar = nums[0], current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSoFar = Math.max(maxSoFar, current);
  }
  return maxSoFar;
}`,
          python: `# Kadane's Algorithm in Python
def max_sub_array(nums):
    max_so_far = current = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)
        max_so_far = max(max_so_far, current)
    return max_so_far`,
          java: `public class Kadane {
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0], current = nums[0];
        for (int i = 1; i < nums.length; i++) {
            current = Math.max(nums[i], current + nums[i]);
            maxSoFar = Math.max(maxSoFar, current);
        }
        return maxSoFar;
    }
}`,
          cpp: `#include <vector>
#include <algorithm>

int maxSubArray(const std::vector<int>& nums) {
    int maxSoFar = nums[0], current = nums[0];
    for (size_t i = 1; i < nums.size(); ++i) {
        current = std::max(nums[i], current + nums[i]);
        maxSoFar = std::max(maxSoFar, current);
    }
    return maxSoFar;
}`,
          c: `#include <stdio.h>

int maxSubArray(int nums[], int n) {
    int maxSoFar = nums[0], current = nums[0];
    for (int i = 1; i < n; i++) {
        if (current + nums[i] > nums[i]) current += nums[i];
        else current = nums[i];
        if (current > maxSoFar) maxSoFar = current;
    }
    return maxSoFar;
}`
        },
        codeBreakdown: [
          { part: 'currentSum = Math.max(arr[i], currentSum + arr[i])', label: 'Decides whether to start a new subarray or extend current subarray', color: '#10b981' },
          { part: 'maxSoFar = Math.max(maxSoFar, currentSum)', label: 'Tracks overall best subarray sum found so far', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Access: O(1), Search: O(N), Insert/Delete middle: O(N), Kadane: O(N)',
          space: 'O(1) auxiliary space (in-place modification)'
        },
        bruteForce: {
          title: 'All Subarrays Brute Force',
          description: 'Evaluate sum of all N*(N+1)/2 possible subarrays using nested loops.',
          timeComplexity: 'O(N^2) or O(N^3)',
          spaceComplexity: 'O(1)'
        },
        optimalApproach: {
          title: "Kadane's Dynamic Programming",
          description: 'Single-pass carry-forward strategy: drop negative running sums.',
          timeComplexity: 'O(N)',
          spaceComplexity: 'O(1)'
        },
        commonMistakes: [
          '❌ `maxSoFar` ko `0` se initialize karna jab array mein saare numbers negative hon (e.g. [-5, -2, -8])',
          '❌ Insertion ke time array size overflow handle na karna'
        ],
        edgeCases: [
          'All negative numbers in array (returns highest negative value)',
          'Single element array',
          'Array with all zeros'
        ],
        bestPractices: [
          '✅ In-place pointer manipulation use karein taaki O(1) auxiliary space rahe',
          '✅ Subarray problems mein hamesha Prefix Sum ya Kadane pattern evaluate karein'
        ],
        miniChallenge: 'How would you rotate an array of size N to the right by K steps in O(N) time and O(1) space?',
        quiz: {
          question: 'Array mein index ke through element access O(1) kyun hota hai?',
          options: [
            'Kyunki RAM mein fast processor laga hota hai',
            'Kyunki formula Address = Base + i * size se direct memory location calculate ho jati hai',
            'Kyunki array loop use karta hai',
            'Kyunki array binary search karta hai'
          ],
          answer: 'Kyunki formula Address = Base + i * size se direct memory location calculate ho jati hai',
          explanation: 'Contiguous memory layout ki wajah se simple multiplication aur addition se CPU exact hardware RAM address jump kar leta hai.'
        },
        summary: [
          'Arrays provide O(1) random access but O(N) middle insertion/deletion',
          "Kadane's algorithm solves maximum subarray in O(N) single-pass",
          'Two-pointer techniques enable in-place array manipulation without extra memory'
        ],
        flashcard: {
          q: "Kadane's Algorithm ka core idea kya hai?",
          a: "Har index pe decide karo: Kya pichla sum carry karna faaydemand hai ya naye number se fresh subarray shuru karein (`current = max(x, current + x)`)."
        },
        funFact: 'CPU L1/L2 caches array data ko linearly prefetch karte hain, isliye arrays linked list se 10x-50x fast iterate hote hain cache locality ki wajah se!',
        proTips: ['Rotate Array in O(1) space: Reverse whole array, reverse first K, reverse remaining N-K!'],
        interviewQuestions: [
          'Why does an array provide O(1) random access while a linked list takes O(N)?',
          'How does CPU cache locality benefit array traversals over linked structures?',
          "Explain Kadane's algorithm and prove why it works correctly with negative numbers."
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 4 — Strings & String Algorithms',
    lessons: [
      {
        id: 'ds-strings-algorithms',
        title: 'Strings, Immutability, Palindromes & Frequency Counting',
        emoji: '🔤',
        xpReward: 40,
        badgeName: 'String Sorcerer',
        readingTime: '9 min',
        difficulty: 'Beginner',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "String character ka array hi hai, par JavaScript/Java/Python mein String IMMUTABLE hoti hai! Nayi copy banti hai!"',
          hint: '🤦 Masti Sir: "Palindrome check karne ke liye Two Pointers (Left aur Right) use karo — O(N) time O(1) space!"',
          success: '🥳 Masti Sir: "Awesome! String frequency count aur anagrams master ho gaye!"',
          mistake: '😅 Masti Sir: "String concatenation loop mein mat lagana (`str += char`), usse O(N^2) ban jata hai!"'
        },
        englishDef: 'A String is an ordered sequence of characters. In languages like JavaScript, Java, and Python, strings are immutable — any modification creates a new string in memory. Two Pointers and Frequency Arrays are primary techniques for string algorithms.',
        hinglishExplain: 'String characters ki ek linear sequence hoti hai. String problems mein frequency array (size 26 for lowercase a-z) aur Two Pointers (start & end) sabse powerful patterns hain. Immutability ka dhyan rakhna zaroori hai taaki memory waste na ho.',
        storyExplain: 'Socho ek printed book ke page pe likha sentence. Tum wahan white-out laga ke direct modify nahi kar sakte (Immutable) — naya page print karna padega! Isliye string manipulation ke liye pehle Array / StringBuilder use karte hain.',
        funnyExample: {
          scenario: 'Palindrome Mirror Check:\n- "racecar" → Left pointer starts at "r", Right pointer at "r" → Match!\n- "a" == "a" → Match! "c" == "c" → Match!\n- Result = Ulti seedhi ek samaan! 😂',
          punchline: 'Two pointers: Left chala Mumbai se, Right chala Delhi se, mil gaye beech mein!'
        },
        memoryTrick: 'Anagram Formula:\nTwo strings are anagrams IF length is equal AND character frequencies match exactly.',
        visualDiagram: {
          title: 'Two Pointers Palindrome Verification',
          nodes: [
            'Left Pointer @ index 0 [r] <---> Right Pointer @ index 6 [r]',
            'Left Pointer @ index 1 [a] <---> Right Pointer @ index 5 [a]',
            'Left Pointer @ index 2 [c] <---> Right Pointer @ index 4 [c]',
            'Middle Pointer @ index 3 [e] (Pointers Meet -> Valid Palindrome!)'
          ],
          type: 'flow'
        },
        code: `// String Algorithms Masterclass
class StringMastery {
  // 1. Valid Palindrome (Two Pointers): O(N) Time, O(1) Space
  static isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = clean.length - 1;
    while (left < right) {
      if (clean[left] !== clean[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  // 2. Valid Anagram (Frequency Map / Array): O(N) Time, O(1) Space (26 letters)
  static isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const freq = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      freq[s.charCodeAt(i) - 97]++;
      freq[t.charCodeAt(i) - 97]--;
    }
    return freq.every(count => count === 0);
  }

  // 3. First Non-Repeating Character: O(N) Time, O(1) Space
  static firstUniqChar(s) {
    const counts = new Map();
    for (let char of s) counts.set(char, (counts.get(char) || 0) + 1);
    for (let i = 0; i < s.length; i++) {
      if (counts.get(s[i]) === 1) return i;
    }
    return -1;
  }
}

console.log("Is 'racecar' Palindrome?", StringMastery.isPalindrome("racecar")); // true
console.log("Is 'anagram' & 'nagaram' Anagram?", StringMastery.isAnagram("anagram", "nagaram")); // true
console.log("First Unique Char in 'loveleetcode':", StringMastery.firstUniqChar("loveleetcode")); // 2 ('v')`,
        languages: {
          javascript: `function isPalindrome(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }
  return true;
}`,
          python: `def is_palindrome(s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]: return False
        l += 1; r -= 1
    return True`,
          java: `public class Solution {
    public boolean isPalindrome(String s) {
        int l = 0, r = s.length() - 1;
        while (l < r) {
            if (s.charAt(l++) != s.charAt(r--)) return false;
        }
        return true;
    }
}`,
          cpp: `bool isPalindrome(const std::string& s) {
    int l = 0, r = s.length() - 1;
    while (l < r) {
        if (s[l++] != s[r--]) return false;
    }
    return true;
}`,
          c: `#include <stdbool.h>
#include <string.h>

bool isPalindrome(const char* s) {
    int l = 0, r = strlen(s) - 1;
    while (l < r) {
        if (s[l++] != s[r--]) return false;
    }
    return true;
}`
        },
        codeBreakdown: [
          { part: 'freq[s.charCodeAt(i) - 97]++', label: 'Increment frequency of character in fixed size 26 array', color: '#10b981' },
          { part: 'while (left < right)', label: 'Two pointers meet at the center in N/2 comparisons → O(N)', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(N) for single or two-pointer passes',
          space: 'O(1) auxiliary space (fixed alphabet size 26 or 128 ASCII)'
        },
        commonMistakes: [
          '❌ Repeated string concatenation in loop creating O(N^2) string copies',
          '❌ Non-alphanumeric characters aur uppercase/lowercase differences handle na karna'
        ],
        edgeCases: [
          'Empty string',
          'Single character string (always palindrome)',
          'Strings with special characters and spaces'
        ],
        bestPractices: [
          '✅ Alphabet counting ke liye 26-element integer array use karein (faster than Map)',
          '✅ In Java/C#, use `StringBuilder` for dynamic string building'
        ],
        miniChallenge: 'How would you find the longest palindromic substring in O(N^2) using the Expand Around Center technique?',
        quiz: {
          question: 'String frequency count karne ke liye 26-size array ka space complexity kya hota hai?',
          options: ['O(N)', 'O(1) constant space', 'O(N^2)', 'O(log N)'],
          answer: 'O(1) constant space',
          explanation: 'Kyunki English alphabets hamesha fixed 26 hote hain, input size N kitna bhi bada ho memory hamesha 26 integers hi rahegi — isliye O(1) space.'
        },
        summary: [
          'Two Pointers is the golden pattern for Palindromes and String Reversals',
          'Fixed size frequency arrays (26/128/256) offer O(1) auxiliary space frequency counting',
          'String immutability requires caution against O(N^2) concatenation loops'
        ],
        flashcard: {
          q: 'Substring aur Subsequence mein kya farq hai?',
          a: 'Substring continuous (contiguous) sequence of characters hoti hai, jabki Subsequence non-contiguous ho sakti hai lekin relative character order same hona chahiye.'
        },
        funFact: 'DNA sequencing algorithms human genome (3 billion letters of A, C, G, T) ko process karne ke liye advanced String matching algorithms (KMP, suffix trees) use karte hain!',
        interviewQuestions: [
          'Why are strings immutable in languages like Java, Python, and JavaScript?',
          'How does the Two-Pointer approach achieve O(N) time and O(1) space for Palindrome verification?',
          'What is the difference between an Anagram and a Palindrome?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 5 — Linked Lists (Singly, Doubly, Circular & Pointer Mastery)',
    lessons: [
      {
        id: 'ds-linked-lists-pointers',
        title: 'Linked Lists (Nodes, Pointers, Insertion, Reversal & Cycle Detection)',
        emoji: '🔗',
        xpReward: 45,
        badgeName: 'Pointer Master',
        readingTime: '12 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Linked List me har node ke paas agle bande ka address hai! Bilkul dost ka dost ko bolna: Bhai agla banda udhar hai! 😂"',
          hint: '🤦 Masti Sir: "Cycle detect karni hai? Floyd ka Slow & Fast pointer (Tortoise & Hare) lagao! Agar cycle hai toh dono zaroor milenge!"',
          success: '🥳 Masti Sir: "Shabaash! Reversal aur cycle detection pointer patterns master ho gaye 🔥"',
          mistake: '😅 Masti Sir: "Node pointer update karne se pehle next pointer ko temporary variable mein save kar lena, warna chain toot jayegi!"'
        },
        englishDef: 'A Linked List is a linear collection of data elements called Nodes, where each node stores a data value and a pointer (reference) to the next node in memory. Unlike arrays, linked list elements are non-contiguous in memory, allowing O(1) insertion/deletion at known references.',
        hinglishExplain: 'Linked List mein data contiguous RAM mein nahi hota, balki alag-alag scattered memory blocks mein hota hai. Har Node ke paas 2 cheezein hoti hain: Data aur Next pointer. Iska sabse bada advantage ye hai ki bina shifting ke O(1) insertion/deletion ho sakta hai.',
        storyExplain: 'Treasure Hunt game yaad hai? Pehla clue (Head) ek paper deta hai jisme likha hota hai "Next clue kitchen mein milega". Kitchen wala paper bolta hai "Next clue terrace pe milega". Yehi Linked List hai! Aakhiri clue ke paas "Null" (End of hunt) hota hai! 🗺️',
        funnyExample: {
          scenario: 'Train Bogies vs Linked List:\n- Singly Linked List = Ek taraf judne wali bogies (Aage ka hook)\n- Doubly Linked List = Dono taraf hooks (Next aur Prev dono pata hai)\n- Reverse List = Puri train ke hooks ulti taraf jod dena! 🚂',
          punchline: 'Lose the pointer, lose the universe!'
        },
        memoryTrick: '3-Pointer Reverse Technique:\nprev = null, curr = head, next = null\nLoop: next = curr.next -> curr.next = prev -> prev = curr -> curr = next',
        visualDiagram: {
          title: 'Singly Linked List & In-Place Reversal',
          nodes: [
            'Head -> [Node 1 | next] -> [Node 2 | next] -> [Node 3 | null]',
            'Reversal Step: prev = null, curr = Node 1',
            'curr.next points backward to prev',
            'Final: New Head -> [Node 3] -> [Node 2] -> [Node 1] -> null'
          ],
          type: 'flow'
        },
        code: `// Complete Singly Linked List Implementation
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedListUtils {
  // 1. Reverse Linked List In-Place: O(N) Time, O(1) Space
  static reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
      let nextTemp = curr.next; // Save next node
      curr.next = prev;         // Reverse pointer
      prev = curr;              // Move prev forward
      curr = nextTemp;          // Move curr forward
    }
    return prev; // New head
  }

  // 2. Floyd's Cycle Detection (Tortoise & Hare): O(N) Time, O(1) Space
  static hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;         // 1 step
      fast = fast.next.next;    // 2 steps
      if (slow === fast) return true; // Cycle detected!
    }
    return false;
  }

  // 3. Find Middle Node: O(N) Time, O(1) Space
  static findMiddle(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

// Build List: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Middle Node Value:", LinkedListUtils.findMiddle(head).val); // 3
const reversedHead = LinkedListUtils.reverseList(head);
console.log("New Head after Reversal:", reversedHead.val); // 5`,
        languages: {
          javascript: `function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
          python: `def reverse_list(head):
    prev, curr = None, head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`,
          java: `public class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}`,
          cpp: `ListNode* reverseList(ListNode* head) {
    ListNode *prev = nullptr, *curr = head;
    while (curr) {
        ListNode *next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`,
          c: `struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode *prev = NULL, *curr = head, *next = NULL;
    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}`
        },
        codeBreakdown: [
          { part: 'let nextTemp = curr.next', label: 'Prevents losing reference to remaining chain before modifying curr.next', color: '#f59e0b' },
          { part: 'curr.next = prev', label: 'Reverses current node pointer to point to previous node', color: '#10b981' },
          { part: 'fast = fast.next.next', label: 'Fast pointer moves at double speed, creating distance differential in cycles', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Reversal: O(N), Middle: O(N), Cycle Detection: O(N), Insertion at Head: O(1)',
          space: 'O(1) auxiliary space (pointer manipulation)'
        },
        commonMistakes: [
          '❌ `curr.next = prev` karne se pehle `curr.next` ko save na karna, jisse aage ki saari list lost ho jati hai',
          '❌ Fast pointer check mein `fast.next !== null` bhool jana (causes NullPointer exception)',
          '❌ Empty list (head = null) aur single node list handle na karna'
        ],
        edgeCases: [
          'List with 0 nodes (head is null)',
          'List with 1 node (already reversed, no cycle)',
          'Even vs Odd length list for middle node calculation'
        ],
        bestPractices: [
          '✅ Dummy head node technique use karein deletion/merging problems mein code simple rakhne ke liye',
          '✅ Fast & Slow pointer pattern master karein (Middle, Cycle, Palindrome LL)'
        ],
        miniChallenge: 'How do you find the exact node where the cycle begins in a Linked List using Floyd’s algorithm?',
        quiz: {
          question: "Floyd's Cycle Detection Algorithm mein Slow aur Fast pointers ki speed kya hoti hai?",
          options: [
            'Slow: 1 step, Fast: 1 step',
            'Slow: 1 step, Fast: 2 steps',
            'Slow: 2 steps, Fast: 3 steps',
            'Slow: 0 steps, Fast: 1 step'
          ],
          answer: 'Slow: 1 step, Fast: 2 steps',
          explanation: 'Fast pointer 2 steps aur Slow pointer 1 step chalta hai. Agar list mein loop hai toh fast pointer har step mein 1 node slow ke paas aata hai aur eventually dono collide karte hain.'
        },
        summary: [
          'Linked Lists allow O(1) insertions without memory reallocation',
          'In-place list reversal requires 3 pointers: prev, curr, and next',
          "Floyd's Tortoise and Hare algorithm detects loops in O(N) time and O(1) space"
        ],
        flashcard: {
          q: 'Dummy Head Node pattern kab use karna chahiye?',
          a: 'Jab list ka head change ho sakta ho (e.g. Remove Nth node, Merge Two Lists, Partition List) tab Dummy node code ko clean aur edge-case free banata hai.'
        },
        funFact: 'Music apps (Spotify, Apple Music) ki playlists aur Browser History back/forward buttons internally Doubly Linked Lists use karte hain!',
        interviewQuestions: [
          'Compare Array vs Linked List across CPU Cache locality, Memory overhead, and Insertion/Deletion complexities.',
          'Prove mathematically why Floyd’s Tortoise and Hare algorithm is guaranteed to detect a cycle in O(N) time.',
          'How do you check if a singly linked list is a palindrome in O(N) time and O(1) space?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 6 — Stack (LIFO, Parentheses & Monotonic Stack)',
    lessons: [
      {
        id: 'ds-stack-lifo-applications',
        title: 'Stack Data Structure (LIFO, Balanced Parentheses & Monotonic Stack)',
        emoji: '📚',
        xpReward: 45,
        badgeName: 'Stack Commander',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Stack me last wala pehle bahar! Bilkul wedding buffet ki plates ki tower. Upar wali plate pehle niklegi 😎"',
          hint: '🤦 Masti Sir: "Jab bhi problem mein Last Seen, Undo/Redo, ya Matching Parentheses aaye — aankh band karke STACK socho!"',
          success: '🥳 Masti Sir: "Badiya! Valid Parentheses aur Monotonic Stack master ho gaye!"',
          mistake: '😅 Masti Sir: "Empty stack par `pop()` karne se pehle check zaroor karna, warna Stack Underflow ho jayega!"'
        },
        englishDef: 'A Stack is a linear data structure following the LIFO (Last In First Out) principle. The main operations are push (add to top), pop (remove from top), and peek (inspect top element) — all executing in O(1) constant time.',
        hinglishExplain: 'Stack ek aisi list hai jisme elements sirf ek hi taraf (TOP) se daale (push) aur nikale (pop) ja sakte hain. Jo element sabse aakhir mein aayega, wo sabse pehle bahar niklega (LIFO). Browser back button, undo button, aur function call stack sabhi Stack par based hain.',
        storyExplain: 'Socho ek CD storage tube ya Pringles chips ka dabba. Naya chip upar daala (Push), aur khate waqt sabse upar wala pehle nikala (Pop). Sabse niche wala chip tab tak nahi nikal sakta jab tak upar ke saare chips kha na lo! 🥔',
        funnyExample: {
          scenario: 'Wedding Buffet Plates Tower:\n- Waiter adds clean plates: Plate 1, Plate 2, Plate 3 on top (Push)\n- Guest arrives: Takes Plate 3 from top (Pop)\n- Result = LIFO principle in pure action!',
          punchline: 'LIFO: Last in, First out!'
        },
        memoryTrick: 'Stack Checklist:\nPush = O(1) | Pop = O(1) | Peek = O(1) | isEmpty = O(1)',
        visualDiagram: {
          title: 'Stack LIFO Principle & State Changes',
          nodes: [
            'Empty Stack: []',
            'push("A") -> [A (Top)]',
            'push("B") -> [A, B (Top)]',
            'push("C") -> [A, B, C (Top)]',
            'pop() returns "C" -> [A, B (Top)]'
          ],
          type: 'flow'
        },
        code: `// Stack Applications: Balanced Parentheses & Next Greater Element
class StackApplications {
  // 1. Valid Parentheses: O(N) Time, O(N) Space
  static isValidParentheses(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        if (stack.length === 0 || stack.pop() !== map[char]) return false;
      }
    }
    return stack.length === 0;
  }

  // 2. Next Greater Element using Monotonic Stack: O(N) Time, O(N) Space
  static nextGreaterElement(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = []; // Stores indices
    for (let i = 0; i < nums.length; i++) {
      while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = nums[i];
      }
      stack.push(i);
    }
    return result;
  }
}

console.log("Is '{[()]}' Valid?", StackApplications.isValidParentheses("{[()]}")); // true
console.log("Is '{[(])}' Valid?", StackApplications.isValidParentheses("{[(])}")); // false
console.log("Next Greater for [4, 5, 2, 25]:", StackApplications.nextGreaterElement([4, 5, 2, 25])); // [5, 25, 25, -1]`,
        languages: {
          javascript: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let c of s) {
    if ('({['.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}`,
          python: `def is_valid(s: str) -> bool:
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
          java: `import java.util.Stack;
public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`,
          cpp: `#include <stack>
#include <string>

bool isValid(const std::string& s) {
    std::stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if (st.empty()) return false;
            if (c == ')' && st.top() != '(') return false;
            if (c == '}' && st.top() != '{') return false;
            if (c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}`,
          c: `#include <stdbool.h>
#include <string.h>

bool isValid(char* s) {
    char stack[10000];
    int top = -1;
    for (int i = 0; s[i] != '\\0'; i++) {
        char c = s[i];
        if (c == '(' || c == '{' || c == '[') stack[++top] = c;
        else {
            if (top == -1) return false;
            char match = (c == ')') ? '(' : (c == '}') ? '{' : '[';
            if (stack[top--] != match) return false;
        }
    }
    return top == -1;
}`
        },
        codeBreakdown: [
          { part: 'stack.push(char)', label: 'Pushes opening bracket to remember most recent open context', color: '#10b981' },
          { part: 'stack.pop() !== map[char]', label: 'Validates that top bracket matches current closing bracket', color: '#ef4444' },
          { part: 'stack.length === 0', label: 'Ensures no leftover unclosed opening brackets remained', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(N) single-pass iteration',
          space: 'O(N) worst case stack size'
        },
        commonMistakes: [
          '❌ Loop khatam hone ke baad `stack.length === 0` verify na karna (e.g. "(((" string)',
          '❌ Monotonic stack mein elements ko multiple times push/pop samajhkar O(N^2) complexity calculate karna (har element max 1 baar push aur 1 baar pop hota hai → O(N))'
        ],
        edgeCases: [
          'Only opening brackets (e.g. "{{{")',
          'Only closing brackets (e.g. "]]]")',
          'Mixed invalid nesting (e.g. "{[(])}")'
        ],
        bestPractices: [
          '✅ Evaluate Infix, Postfix, Prefix mathematical expressions using Stacks',
          '✅ Use Monotonic Stack for Next Greater / Previous Smaller Element problems in O(N)'
        ],
        miniChallenge: 'How does MinStack achieve getMin() in O(1) time without searching through the stack?',
        quiz: {
          question: 'Valid Parentheses problem mein agar input string "([)]" ho, toh output kya hona chahiye?',
          options: ['true', 'false', 'undefined', 'StackOverflow'],
          answer: 'false',
          explanation: 'Kyunki brackets ka nesting galat hai. Square bracket [ pehle khula aur parenthesis ) pehle band hone ki koshish kar raha hai.'
        },
        summary: [
          'Stack operates on LIFO (Last In First Out) with O(1) push, pop, peek',
          'Balanced parentheses matching uses a stack to pair inner-most open brackets first',
          'Monotonic Stacks solve Next Greater / Histogram problems in linear O(N) time'
        ],
        flashcard: {
          q: 'MinStack O(1) getMin() kaise implement karta hai?',
          a: 'Har push operation ke sath ek companion Min value store karo (ya toh pair `[val, currentMin]` bana kar ya ek separate minStack maintain karke).'
        },
        funFact: 'Jab aap code mein infinite recursion karte ho toh browser "Maximum call stack size exceeded" error deta hai kyunki OS ka call stack memory bhar jata hai!',
        interviewQuestions: [
          'How does the browser Call Stack manage execution contexts during function calls and recursions?',
          'Explain how to design a MinStack that supports push, pop, top, and retrieving minimum element in O(1) time.',
          'What is a Monotonic Stack, and why is its amortized time complexity O(N)?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 7 — Queue (FIFO, Circular Queue, Deque & Priority Queue)',
    lessons: [
      {
        id: 'ds-queue-fifo-deque',
        title: 'Queue Data Structure (FIFO, Circular Queue, Deque & Sliding Window Maximum)',
        emoji: '🚶‍♂️',
        xpReward: 45,
        badgeName: 'Queue Master',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Queue me jo pehle aaya wo pehle jayega (FIFO). Railway ticket line aur printer spooler ka asli algorithm! 😂"',
          hint: '🤦 Masti Sir: "Sliding Window Maximum mein Monotonic Deque use karo — har window ka max O(1) amortized mein milega!"',
          success: '🥳 Masti Sir: "Superb! Queue, Circular Buffer aur Deque concepts locked in!"',
          mistake: '😅 Masti Sir: "JS array.shift() O(N) hota hai! Real production queue ke liye pointer head/tail ya Linked List use karo!"'
        },
        englishDef: 'A Queue is a linear data structure following the FIFO (First In First Out) principle. Elements are inserted at the Rear (Enqueue) and removed from the Front (Dequeue). Variations include Circular Queue, Double-Ended Queue (Deque), and Priority Queue.',
        hinglishExplain: 'Queue bilkul supermarket billing counter ki line ki tarah kaam karti hai. Jo sabse pehle line mein aayega (Front), wo sabse pehle bill pay karke jayega (Dequeue). Naye log line ke aakhiri end (Rear) par join karenge (Enqueue).',
        storyExplain: 'Office Printer ka socho: 5 logo ne ek sath print command diya. Printer kya karta hai? Print Queue banata hai! User 1 ka document pehle print hoga, fir User 2 ka. Kisi ko beech mein VIP treatment nahi milta jab tak Priority Queue na ho! 🖨️',
        funnyExample: {
          scenario: 'Movie Ticket Counter:\n- Front = Person getting ticket and exiting (Dequeue)\n- Rear = New person joining line at back (Enqueue)\n- Deque = VIP line jisme aage aur peeche dono taraf se ghus aur nikal sakte hain! 😎',
          punchline: 'FIFO: First In, First Out!'
        },
        memoryTrick: 'Queue Rules:\nEnqueue @ Rear = O(1) | Dequeue @ Front = O(1) | Peek @ Front = O(1)',
        visualDiagram: {
          title: 'Queue FIFO Pipeline & Double-Ended Deque',
          nodes: [
            'Front [Exit] <--- [Item 1] <--- [Item 2] <--- [Item 3] <--- Rear [Enter]',
            'Enqueue(Item 4): Enters at Rear',
            'Dequeue(): Item 1 exits from Front',
            'Deque: Push/Pop allowed at BOTH Front and Rear in O(1)'
          ],
          type: 'flow'
        },
        code: `// Queue Implementations: Circular Queue & Sliding Window Maximum via Deque
class EfficientQueue {
  constructor(capacity = 1000) {
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = capacity;
  }

  enqueue(val) {
    if (this.size === this.capacity) throw new Error("Queue Overflow");
    this.items[this.rear] = val;
    this.rear = (this.rear + 1) % this.capacity; // Circular wrap
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error("Queue Underflow");
    const val = this.items[this.front];
    this.front = (this.front + 1) % this.capacity; // Circular wrap
    this.size--;
    return val;
  }

  peek() {
    return this.size > 0 ? this.items[this.front] : null;
  }
}

// Sliding Window Maximum using Monotonic Deque: O(N) Time, O(K) Space
function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = []; // Stores indices in decreasing order of values

  for (let i = 0; i < nums.length; i++) {
    // 1. Remove indices outside current sliding window [i - k + 1, i]
    while (deque.length > 0 && deque[0] < i - k + 1) {
      deque.shift();
    }

    // 2. Remove smaller elements from back as they are useless
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // 3. Add to result once first window of size k is formed
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

const q = new EfficientQueue(5);
q.enqueue(10);
q.enqueue(20);
console.log("Dequeued:", q.dequeue()); // 10
console.log("Sliding Window Max ([1,3,-1,-3,5,3,6,7], k=3):", maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]`,
        languages: {
          javascript: `// Monotonic Deque Sliding Window Max
function maxSlidingWindow(nums, k) {
  const res = [], deque = [];
  for (let i = 0; i < nums.length; i++) {
    if (deque[0] < i - k + 1) deque.shift();
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) res.push(nums[deque[0]]);
  }
  return res;
}`,
          python: `from collections import deque

def max_sliding_window(nums, k):
    res = []
    q = deque()
    for i, n in enumerate(nums):
        if q and q[0] < i - k + 1:
            q.popleft()
        while q and nums[q[-1]] < n:
            q.pop()
        q.append(i)
        if i >= k - 1:
            res.append(nums[q[0]])
    return res`,
          java: `import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] res = new int[n - k + 1];
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            if (!q.isEmpty() && q.peekFirst() < i - k + 1) q.pollFirst();
            while (!q.isEmpty() && nums[q.peekLast()] < nums[i]) q.pollLast();
            q.offerLast(i);
            if (i >= k - 1) res[i - k + 1] = nums[q.peekFirst()];
        }
        return res;
    }
}`,
          cpp: `#include <vector>
#include <deque>

std::vector<int> maxSlidingWindow(const std::vector<int>& nums, int k) {
    std::vector<int> res;
    std::deque<int> dq;
    for (int i = 0; i < (int)nums.size(); ++i) {
        if (!dq.empty() && dq.front() < i - k + 1) dq.pop_front();
        while (!dq.empty() && nums[dq.back()] < nums[i]) dq.pop_back();
        dq.push_back(i);
        if (i >= k - 1) res.push_back(nums[dq.front()]);
    }
    return res;
}`,
          c: `// Sliding Window Queue in C
#include <stdlib.h>

int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    int* res = (int*)malloc((numsSize - k + 1) * sizeof(int));
    *returnSize = numsSize - k + 1;
    // Circular indices or deque
    return res;
}`
        },
        codeBreakdown: [
          { part: 'deque.shift() [when outside window]', label: 'Evicts expired index that fell off the left side of the window', color: '#ef4444' },
          { part: 'nums[deque[deque.length - 1]] < nums[i]', label: 'Maintains decreasing monotonic order by discarding smaller useless items', color: '#f59e0b' },
          { part: 'nums[deque[0]]', label: 'The front of deque always holds the max element for current window in O(1)', color: '#10b981' }
        ],
        complexity: {
          time: 'O(N) total runtime because every element is pushed and popped at most once',
          space: 'O(K) auxiliary space to store window indices in Deque'
        },
        commonMistakes: [
          '❌ Array `shift()` use karna inside a loop without noticing it is an O(N) operation in JS',
          '❌ Deque mein elements ki jagah indices store na karna (indices are needed to check window expiry)'
        ],
        edgeCases: [
          'Window size k = 1 (result is same array)',
          'Window size k = nums.length (result is single max element)',
          'Array with strictly decreasing or strictly increasing elements'
        ],
        bestPractices: [
          '✅ Graph BFS traversals ke liye hamesha Queue use karein',
          '✅ Sliding Window Minimum/Maximum ke liye Monotonic Deque use karein'
        ],
        miniChallenge: 'How would you implement a Queue using two Stacks such that enqueue and dequeue have O(1) amortized time?',
        quiz: {
          question: 'JavaScript mein `array.shift()` ko queue dequeue ke liye use karna kyun un-optimal hai?',
          options: [
            'Kyunki shift() syntax error deta hai',
            'Kyunki shift() ke baad baaki sabhi N-1 elements ko 1 index left shift hona padta hai → O(N) cost',
            'Kyunki shift() memory delete nahi karta',
            'Kyunki shift() numbers support nahi karta'
          ],
          answer: 'Kyunki shift() ke baad baaki sabhi N-1 elements ko 1 index left shift hona padta hai → O(N) cost',
          explanation: 'Array contiguous memory hoti hai, isliye first element hatane par saare subsequent elements ko memory mein re-index/shift karna padta hai.'
        },
        summary: [
          'Queue adheres to FIFO (First In First Out) behavior',
          'Circular Queue reuses freed memory slots with modulo indexing: (rear + 1) % capacity',
          'Monotonic Deque solves Sliding Window Maximum in optimal linear O(N) time'
        ],
        flashcard: {
          q: 'Circular Queue ka sabse bada faayda kya hai?',
          a: 'Ordinary array-based queue mein dequeued space waste ho jati hai, jabki Circular queue modulo wrapping se us unused memory space ko efficiently reuse karti hai.'
        },
        funFact: 'Node.js event loop ka Message Queue aur Microtask Queue (Promises) millions of asynchronous web requests ko FIFO order mein process karte hain!',
        interviewQuestions: [
          'Implement a Queue using two Stacks and explain the amortized complexity of operations.',
          'How does a Double-Ended Queue (Deque) optimize sliding window problems over brute force?',
          'What is the difference between an unbounded queue and a bounded circular queue in OS task scheduling?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 8 — Matrices & 2D Grid Traversals',
    lessons: [
      {
        id: 'ds-matrices-2d-traversals',
        title: 'Matrices (2D Traversal, Spiral Matrix, Rotate Image & Search 2D Matrix)',
        emoji: '🔲',
        xpReward: 45,
        badgeName: 'Matrix Navigator',
        readingTime: '12 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Matrix matlab row aur column ka jaal! (row, col) coordinates ko control karna seekh lo, saare 2D problems hal ho jayenge 😎"',
          hint: '🤦 Masti Sir: "Matrix 90 degree clockwise rotate karni hai? Pehle Transpose karo (row-col swap), fir har row ko Reverse kar do! Magic trick 🔥"',
          success: '🥳 Masti Sir: "Spiral Matrix aur 2D Binary Search dono conquer kar liye!"',
          mistake: '😅 Masti Sir: "Row boundaries (0 to M-1) aur Column boundaries (0 to N-1) ko dhyan se check karna!"'
        },
        englishDef: 'A Matrix (2D Array) is a grid of elements arranged in rows and columns stored in row-major or column-major order in memory. Key operations include Spiral Traversal, In-place Transpose & Rotate 90°, and O(log(M*N)) 2D Binary Search.',
        hinglishExplain: 'Matrix ek 2-dimensional grid hota hai jisme data Rows aur Columns mein organized hota hai. Row-major order mein har row memory mein lagatar store hoti hai. Spiral traversal, 90-degree matrix rotation, aur grid-based binary search top interview questions hain.',
        storyExplain: 'Chess Board (8x8 matrix) socho! Har square ka ek address hai: (row, col). Knight ya Bishop ka move calculate karna ek 2D array traversal hai. Spiral Matrix traversal bilkul Jalebi banane ke gol-gol chakkar jaisa hai! 🥨',
        funnyExample: {
          scenario: 'Matrix Rotate 90° Clockwise Trick:\n1. Transpose: Rows ko Columns bana do (arr[i][j] swap arr[j][i])\n2. Reverse each row: [1, 2, 3] becomes [3, 2, 1]\n3. Boom! 90 degree rotate ho gaya bina extra memory ke! 🔄',
          punchline: 'Transpose + Reverse = Instant 90° Rotation!'
        },
        memoryTrick: '2D Coordinates formula:\nIn Row-Major: Index in 1D array = (row * numCols) + col\nReverse: row = Math.floor(index / numCols), col = index % numCols',
        visualDiagram: {
          title: 'Spiral Matrix Boundary Traversal Flow',
          nodes: [
            'Top Row: Left -> Right (then increment top boundary)',
            'Right Col: Top -> Bottom (then decrement right boundary)',
            'Bottom Row: Right -> Left (then decrement bottom boundary)',
            'Left Col: Bottom -> Top (then increment left boundary)'
          ],
          type: 'flow'
        },
        code: `// 2D Matrix Algorithms Masterclass
class MatrixMastery {
  // 1. Spiral Matrix Traversal: O(M * N) Time, O(1) Space
  static spiralOrder(matrix) {
    if (!matrix.length || !matrix[0].length) return [];
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
      // Traverse Right
      for (let c = left; c <= right; c++) result.push(matrix[top][c]);
      top++;

      // Traverse Down
      for (let r = top; r <= bottom; r++) result.push(matrix[r][right]);
      right--;

      if (top <= bottom) {
        // Traverse Left
        for (let c = right; c >= left; c--) result.push(matrix[bottom][c]);
        bottom--;
      }

      if (left <= right) {
        // Traverse Up
        for (let r = bottom; r >= top; r--) result.push(matrix[r][left]);
        left++;
      }
    }
    return result;
  }

  // 2. Rotate Image 90° Clockwise In-Place: O(N^2) Time, O(1) Space
  static rotate(matrix) {
    const n = matrix.length;
    // Step 1: Transpose (swap matrix[i][j] with matrix[j][i])
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
      matrix[i].reverse();
    }
    return matrix;
  }

  // 3. Search in a 2D Sorted Matrix (Binary Search): O(log(M * N)) Time, O(1) Space
  static searchMatrix(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let low = 0, high = m * n - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
      const val = matrix[row][col];

      if (val === target) return true;
      else if (val < target) low = mid + 1;
      else high = mid - 1;
    }
    return false;
  }
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Spiral Order:", MatrixMastery.spiralOrder(mat)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log("Search 5 in sorted matrix:", MatrixMastery.searchMatrix([[1,3,5],[7,10,11],[16,20,30]], 10)); // true`,
        languages: {
          javascript: `function rotate(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
    matrix[i].reverse();
  }
}`,
          python: `def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        matrix[i].reverse()`,
          java: `public class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        for (int i = 0; i < n; i++) {
            int l = 0, r = n - 1;
            while (l < r) {
                int t = matrix[i][l];
                matrix[i][l++] = matrix[i][r];
                matrix[i][r--] = t;
            }
        }
    }
}`,
          cpp: `void rotate(std::vector<std::vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; ++i) {
        for (int j = i + 1; j < n; ++j) {
            std::swap(matrix[i][j], matrix[j][i]);
        }
        std::reverse(matrix[i].begin(), matrix[i].end());
    }
}`,
          c: `void rotate(int** matrix, int matrixSize, int* matrixColSize) {
    int n = matrixSize;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (int i = 0; i < n; i++) {
        int l = 0, r = n - 1;
        while (l < r) {
            int t = matrix[i][l];
            matrix[i][l++] = matrix[i][r];
            matrix[i][r--] = t;
        }
    }
}`
        },
        codeBreakdown: [
          { part: 'mid / n and mid % n', label: 'Maps 1D virtual index back to 2D (row, col) coordinates in O(1)', color: '#10b981' },
          { part: 'matrix[i][j] <-> matrix[j][i]', label: 'Transposes the matrix along the main diagonal', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Rotate: O(N^2), Spiral: O(M * N), 2D Search: O(log(M * N))',
          space: 'O(1) auxiliary space (in-place transformations)'
        },
        commonMistakes: [
          '❌ Spiral matrix mein `top <= bottom` ya `left <= right` re-check na karna before reverse traversals (causes duplicate prints in rectangular matrices)',
          '❌ Search in 2D Matrix mein standard row/col binary search ke bajaye O(M*N) linear search likhna'
        ],
        edgeCases: [
          '1 x 1 Matrix',
          'Single row matrix (1 x N)',
          'Single column matrix (M x 1)',
          'Rectangular non-square matrices in Spiral order'
        ],
        bestPractices: [
          '✅ Treat a 2D sorted matrix as a flattened virtual 1D array of size M*N for binary search',
          '✅ Matrix coordinate transformations: Transpose + Reverse = Rotate 90° Clockwise'
        ],
        miniChallenge: 'How would you rotate an N x N matrix 90 degrees COUNTER-CLOCKWISE in place?',
        quiz: {
          question: 'An N x N matrix ko 90 degree clockwise rotate karne ka 2-step in-place shortcut formula kya hai?',
          options: [
            'Pehle Reverse karo, fir Transpose',
            'Pehle Transpose karo (row-col swap), fir har row ko Reverse karo',
            'Pehle Sort karo, fir Filter',
            'Do nested for-loops se naya array banao'
          ],
          answer: 'Pehle Transpose karo (row-col swap), fir har row ko Reverse karo',
          explanation: 'Transpose karne par row columns ban jati hain, aur rows reverse karne par values 90 degree clockwise shift ho jati hain bina extra memory allocate kiye.'
        },
        summary: [
          'Matrices use 2D (row, col) coordinate system stored in row-major memory',
          'Spiral Traversal manages 4 shifting boundaries: top, bottom, left, right',
          'Sorted 2D matrix can be searched in O(log(M*N)) using virtual 1D index mapping'
        ],
        flashcard: {
          q: '1D index `k` ko M x N matrix ke `(row, col)` mein kaise convert karte hain?',
          a: '`row = Math.floor(k / N)` aur `col = k % N`, jahan N total number of columns hai.'
        },
        funFact: 'Computer Graphics aur 3D Video Game engines (Unity, Unreal) 3D objects ko rotate, scale, aur transform karne ke liye 4x4 matrix multiplication use karte hain!',
        interviewQuestions: [
          'How do you map a 1D coordinate to 2D row/col coordinates and vice versa in constant time?',
          'Explain the in-place algorithm to rotate an N x N matrix 90 degrees without using extra space.',
          'How do you search for an element in an M x N matrix that is sorted both row-wise and column-wise in O(M + N) time?'
        ]
      }
    ]
  }
];
