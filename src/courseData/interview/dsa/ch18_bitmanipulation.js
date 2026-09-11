// Chapter 18 — Bit Manipulation (14 Comprehensive Lessons & Bitwise Magic)
import { createDsaLesson } from './dsaHelper.js'

export const ch18BitManipulation = {
  chapterTitle: 'Bit Manipulation',
  lessons: [
    createDsaLesson({
      id: 'dsa-binary-numbers',
      title: 'Binary Numbers Representation',
      emoji: '0️⃣1️⃣',
      difficulty: 'Beginner',
      englishDef: 'Computers represent all numbers in Base-2 (Binary system) using 0s and 1s. Position `i` represents weight `2^i` (e.g. `5 = 101_2 = 4 + 0 + 1`).',
      hinglishExplain: 'Computer memory mein har cheez 0 aur 1 (Bits) mein store hoti hai. 5 ka binary `101` hota hai.',
      code: `console.log((5).toString(2)); // "101"
console.log(parseInt("101", 2)); // 5`
    }),

    createDsaLesson({
      id: 'dsa-bits-and-bytes',
      title: 'Bits, Bytes and Two’s Complement',
      emoji: '💾',
      difficulty: 'Beginner',
      englishDef: '1 Byte = 8 Bits. Negative integers are represented using Two’s Complement: `~N + 1`, allowing unified binary addition and subtraction.',
      hinglishExplain: '8 bits milkar 1 Byte banate hain. Negative numbers Two’s Complement (`~N + 1`) form mein store hote hain.',
      code: `// 1 Byte = 8 bits: 00000101 (5)`
    }),

    createDsaLesson({
      id: 'dsa-bitwise-and',
      title: 'Bitwise AND (&)',
      emoji: '🤝',
      difficulty: 'Beginner',
      englishDef: 'Bitwise AND (`&`) returns 1 ONLY if both corresponding bits are 1. Used for Bit Masking and clearing bits (`x & 1` checks odd/even).',
      hinglishExplain: 'Dono bits 1 honge tabhi 1 aayega, warna 0. Odd/Even check karne ke liye `n & 1` use karte hain.',
      code: `console.log(5 & 3); // 101 & 011 = 001 (1)`
    }),

    createDsaLesson({
      id: 'dsa-bitwise-or',
      title: 'Bitwise OR (|)',
      emoji: '👐',
      difficulty: 'Beginner',
      englishDef: 'Bitwise OR (`|`) returns 1 if AT LEAST ONE corresponding bit is 1. Used for setting specific bits (`x | (1 << k)` sets kth bit).',
      hinglishExplain: 'Agar koi bhi ek bit 1 ho toh result 1 aayega. Kisi bit ko turn on (set) karne ke liye use hota hai.',
      code: `console.log(5 | 2); // 101 | 010 = 111 (7)`
    }),

    createDsaLesson({
      id: 'dsa-bitwise-xor',
      title: 'Bitwise XOR (^)',
      emoji: '⚡',
      difficulty: 'Beginner',
      englishDef: 'Bitwise XOR (`^`) returns 1 if bits are DIFFERENT. Properties: `x ^ x = 0`, `x ^ 0 = x`, and XOR is associative/commutative.',
      hinglishExplain: 'Magic Operator! Agar do bits alag hon toh 1, same hon toh 0. Rule: `x ^ x = 0` aur `x ^ 0 = x`. Unique element dhoondhne ka superstar operator!',
      code: `console.log(5 ^ 5); // 0
console.log(5 ^ 0); // 5`
    }),

    createDsaLesson({
      id: 'dsa-bitwise-not',
      title: 'Bitwise NOT (~)',
      emoji: '🔄',
      difficulty: 'Beginner',
      englishDef: 'Bitwise NOT (`~`) inverts all bits (0 becomes 1, 1 becomes 0). In 32-bit signed integers, `~N = -(N + 1)`.',
      hinglishExplain: 'Saare bits ko ulta kar dena (0 ko 1, 1 ko 0). `~5` ka answer `-6` hota hai.',
      code: `console.log(~5); // -6`
    }),

    createDsaLesson({
      id: 'dsa-left-shift',
      title: 'Left Shift (<<)',
      emoji: '⬅️',
      difficulty: 'Beginner',
      englishDef: 'Left Shift (`x << k`) shifts bits left by K positions, appending K zeros on the right. Equivalent to fast multiplication: `x * (2^k)`.',
      hinglishExplain: 'Bits ko left shift karna = 2 se multiply karna! `5 << 1` = 10, `5 << 2` = 20.',
      code: `console.log(5 << 1); // 10 (5 * 2^1)
console.log(1 << 3); // 8  (2^3)`
    }),

    createDsaLesson({
      id: 'dsa-right-shift',
      title: 'Right Shift (>>)',
      emoji: '➡️',
      difficulty: 'Beginner',
      englishDef: 'Right Shift (`x >> k`) shifts bits right by K positions. Equivalent to fast integer floor division: `Math.floor(x / (2^k))`.',
      hinglishExplain: 'Bits ko right shift karna = 2 se divide karna! `20 >> 1` = 10, `20 >> 2` = 5.',
      code: `console.log(20 >> 1); // 10
console.log(20 >> 2); // 5`
    }),

    createDsaLesson({
      id: 'dsa-check-odd-even-bitwise',
      title: 'Check Odd / Even using Bits',
      emoji: '⚖️',
      difficulty: 'Beginner',
      englishDef: 'An integer is Odd if its least significant bit (LSB) is 1 (`(N & 1) !== 0`), and Even if LSB is 0 (`(N & 1) === 0`) in O(1) CPU cycles.',
      hinglishExplain: 'Modulo `% 2` se bhi fast: `(n & 1)` agar 1 hai toh Odd, 0 hai toh Even.',
      code: `function isEven(n) { return (n & 1) === 0; }`
    }),

    createDsaLesson({
      id: 'dsa-check-power-of-two',
      title: 'Check if Power of Two (Brian Kernighan)',
      emoji: '✌️',
      difficulty: 'Beginner',
      englishDef: 'A positive integer N is a power of two if and only if it has exactly one set bit: `(N > 0) && (N & (N - 1)) === 0` in O(1) time.',
      hinglishExplain: 'Power of 2 check karne ka 1-line trick: `(n > 0) && ((n & (n - 1)) === 0)`. Zero loop!',
      code: `function isPowerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}`
    }),

    createDsaLesson({
      id: 'dsa-count-set-bits',
      title: 'Count Set Bits (Hamming Weight - LeetCode 191)',
      emoji: '🧮',
      difficulty: 'Intermediate',
      englishDef: "Brian Kernighan's algorithm clears the lowest set bit in each step: `n = n & (n - 1)`. Runs in O(Number of 1s) time.",
      hinglishExplain: 'Binary mein kitne 1s hain count karna: `n = n & (n - 1)` se har step mein ek 1 clear ho jata hai.',
      code: `function hammingWeight(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1); // Clears rightmost set bit
    count++;
  }
  return count;
}`
    }),

    createDsaLesson({
      id: 'dsa-single-number-xor',
      title: 'Single Number (LeetCode 136)',
      emoji: '1️⃣',
      difficulty: 'Beginner',
      englishDef: 'In an array where every element appears twice except one unique element, XORing all elements cancels out pairs `(x ^ x = 0)`, leaving only the unique single number in O(N) time and O(1) space.',
      hinglishExplain: 'Saare elements ka XOR kar do! Pairs aapas mein cancel (0) ho jayenge aur aakhri bacha number single answer hoga!',
      code: `function singleNumber(nums) {
  let unique = 0;
  for (let num of nums) unique ^= num;
  return unique;
}`
    }),

    createDsaLesson({
      id: 'dsa-bit-masking',
      title: 'Bit Masking & Subsets Generation',
      emoji: '🎭',
      difficulty: 'Intermediate',
      englishDef: 'Represent sets of up to 32 elements as integers where bit `i` is 1 if element `i` is present. Iterate from `0` to `(1 << N) - 1` to generate all power sets in O(N * 2ⁿ).',
      hinglishExplain: 'Integer numbers ko subset mask ki tarah use karna: binary 101 ka matlab hai pehla aur teesra item selected hai.',
      code: `function subsetsBitmask(nums) {
  const n = nums.length, res = [];
  for (let mask = 0; mask < (1 << n); mask++) {
    const sub = [];
    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) !== 0) sub.push(nums[i]);
    }
    res.push(sub);
  }
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-bit-manipulation-interview-problems',
      title: 'Bit Manipulation Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Bit Manipulation interview problems: 1) Single Number II & III, 2) Counting Bits (DP + Bits), 3) Reverse Bits, 4) Bitwise AND of Numbers Range.',
      hinglishExplain: 'Bitwise tricks aur interview problems ka complete practice set.',
      code: `// Counting Bits (LeetCode 338)`
    })
  ]
}
