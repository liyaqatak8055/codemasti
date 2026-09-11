// Chapter 9 — Recursion (13 Comprehensive Lessons & Problem Solving)
import { createDsaLesson } from './dsaHelper.js'

export const ch9Recursion = {
  chapterTitle: 'Recursion',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-recursion',
      title: 'What is Recursion?',
      emoji: '🪞',
      difficulty: 'Beginner',
      englishDef: 'Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller subproblem of the same type until reaching a termination condition (Base Case).',
      hinglishExplain: 'Recursion ka matlab hai jab ek function apne aap ko hi dobara call kare kisi chote sub-problem ko solve karne ke liye. Jaise Russian Matryoshka Doll — ek doll ke andar doosri choti doll!',
      code: `function countdown(n) {
  if (n <= 0) { console.log("Done!"); return; } // Base Case
  console.log(n);
  countdown(n - 1); // Recursive Call
}
countdown(3); // Prints 3, 2, 1, Done!`
    }),

    createDsaLesson({
      id: 'dsa-recursion-base-case',
      title: 'Base Case',
      emoji: '🛑',
      difficulty: 'Beginner',
      englishDef: 'The Base Case is the stopping condition of a recursive function that returns a value directly without making further recursive calls, preventing infinite loops and Stack Overflow.',
      hinglishExplain: 'Base Case recursion ka break (stopping point) hai. Agar base case nahi lagaya toh function bar-bar khud ko call karke RAM ka call stack bhar dega (Stack Overflow Crash).',
      code: `function fact(n) {
  if (n === 0 || n === 1) return 1; // Base Case
  return n * fact(n - 1);
}`
    }),

    createDsaLesson({
      id: 'dsa-recursive-case',
      title: 'Recursive Case',
      emoji: '🔄',
      difficulty: 'Beginner',
      englishDef: 'The Recursive Case is the part of the function where the problem is broken down into one or more smaller instances of the same problem through self-invocation.',
      hinglishExplain: 'Main logic jahan function N ki problem ko (N - 1) ki choti problem mein tod kar khud ko call karta hai.',
      code: `// n! = n * (n-1)!`
    }),

    createDsaLesson({
      id: 'dsa-recursion-call-stack',
      title: 'Call Stack in Recursion',
      emoji: '🥞',
      difficulty: 'Intermediate',
      englishDef: 'Each recursive call allocates a Stack Frame in the CPU Call Stack storing local variables and return addresses. When the base case is hit, stack frames unwind (pop) in LIFO order.',
      hinglishExplain: 'Computer memory mein har function call ek frame ki tarah stack par baithti hai. Jab base case hit hota hai, toh frames ek-ek karke return hoti hain.',
      code: `// Call Stack Visualization:
// fact(3) -> pushes fact(2) -> pushes fact(1)
// fact(1) returns 1 -> fact(2) returns 2 -> fact(3) returns 6`
    }),

    createDsaLesson({
      id: 'dsa-recursion-flow',
      title: 'Recursion Execution Flow (Winding vs Unwinding)',
      emoji: '🎢',
      difficulty: 'Intermediate',
      englishDef: 'Recursion has two phases: 1) Winding phase (calling forward while pushing onto stack), and 2) Unwinding phase (returning values backwards while popping off stack).',
      hinglishExplain: 'Pehle function aage badhta hai (going down), phir base case se wapas aate waqt values calculate karta hai (coming back up).',
      code: `function printFlow(n) {
  if (n === 0) return;
  console.log("Going Down:", n); // Winding
  printFlow(n - 1);
  console.log("Coming Up:", n);   // Unwinding
}`
    }),

    createDsaLesson({
      id: 'dsa-factorial-recursion',
      title: 'Factorial of a Number',
      emoji: '❗',
      difficulty: 'Beginner',
      englishDef: 'Factorial N! = N * (N - 1) * ... * 1. Base case: 0! = 1, 1! = 1. Time complexity is O(N) and space complexity is O(N) auxiliary call stack.',
      hinglishExplain: '5! = 5 * 4 * 3 * 2 * 1 = 120. Recursion se calculate karne ka classic standard example.',
      code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`
    }),

    createDsaLesson({
      id: 'dsa-fibonacci-recursion',
      title: 'Fibonacci Sequence',
      emoji: '🐚',
      difficulty: 'Beginner',
      englishDef: 'Fibonacci sequence F(N) = F(N-1) + F(N-2) with F(0)=0, F(1)=1. Naive recursion takes O(2ⁿ) time with depth N call stack.',
      hinglishExplain: 'Har number pichhle do numbers ka jod hota hai: 0, 1, 1, 2, 3, 5, 8, 13...',
      code: `function fib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}`
    }),

    createDsaLesson({
      id: 'dsa-sum-of-numbers-recursion',
      title: 'Sum of N Natural Numbers',
      emoji: '➕',
      difficulty: 'Beginner',
      englishDef: 'Computing sum from 1 to N recursively: `sum(N) = N + sum(N - 1)` with base case `sum(0) = 0`.',
      hinglishExplain: '1 se N tak ka total sum nikalna recursion ke through.',
      code: `function sumN(n) {
  if (n <= 0) return 0;
  return n + sumN(n - 1);
}`
    }),

    createDsaLesson({
      id: 'dsa-reverse-string-recursion',
      title: 'Reverse a String using Recursion',
      emoji: '🔄',
      difficulty: 'Beginner',
      englishDef: 'Reversing a string recursively: return empty string if length is 0, else return `reverse(str.slice(1)) + str[0]`.',
      hinglishExplain: 'Pehle character ko chhodkar bachi string ko reverse karo aur pehle character ko end mein jodh do.',
      code: `function reverseStr(s) {
  if (s.length <= 1) return s;
  return reverseStr(s.slice(1)) + s[0];
}`
    }),

    createDsaLesson({
      id: 'dsa-recursive-array-problems',
      title: 'Recursive Array Traversal & Check Sorted',
      emoji: '📋',
      difficulty: 'Intermediate',
      englishDef: 'Checking if an array is sorted recursively: base case index === length - 1; check `arr[i] <= arr[i+1]` and recurse on `i + 1`.',
      hinglishExplain: 'Bina loop ke array ko check karna ki wo sorted hai ya nahi.',
      code: `function isSorted(arr, i = 0) {
  if (i >= arr.length - 1) return true;
  return arr[i] <= arr[i + 1] && isSorted(arr, i + 1);
}`
    }),

    createDsaLesson({
      id: 'dsa-recursion-tree',
      title: 'Recursion Tree Visualization',
      emoji: '🌳',
      difficulty: 'Intermediate',
      englishDef: 'A Recursion Tree graphs recursive function branches to visualize branching factor, total tree depth, subproblem count, and complexity derivation.',
      hinglishExplain: 'Recursion ke saare branches ko tree ke roop mein draw karke dekhna ki kahan redundant calculations ho rahi hain (DP ki foundation).',
      code: `// Fibonacci Tree:
//          fib(4)
//        /        \\
//     fib(3)      fib(2)
//     /    \\      /    \\
//  fib(2) fib(1) fib(1) fib(0)`
    }),

    createDsaLesson({
      id: 'dsa-recursion-complexity',
      title: 'Recursion Complexity & Recurrence Relations',
      emoji: '🧮',
      difficulty: 'Intermediate',
      englishDef: 'Time complexity is determined by `(Total Nodes in Recursion Tree) * (Work done per node)`. Space complexity equals the maximum depth of the call stack.',
      hinglishExplain: 'Time = Tree ke total nodes kitne hain. Space = Tree ki maximum unchai (depth) kitni hai.',
      code: `// Binary Tree Depth = O(N) worst case, O(log N) balanced`
    }),

    createDsaLesson({
      id: 'dsa-backtracking-intro',
      title: 'Backtracking Introduction',
      emoji: '🧭',
      difficulty: 'Intermediate',
      englishDef: 'Backtracking is an algorithmic paradigm that uses recursion to explore potential solution candidates and abandons (backtracks) a candidate immediately upon determining it cannot yield a valid solution.',
      hinglishExplain: 'Choose -> Explore -> Unchoose (Undo)! Bhoolbhulaiya (maze) ki tarah: aage badho, agar rasta band mile toh wapas pichhe mud kar doosra rasta try karo.',
      code: `// Backtracking template:
// choose(option);
// backtrack(state);
// unchoose(option); // Undo state`
    })
  ]
}
