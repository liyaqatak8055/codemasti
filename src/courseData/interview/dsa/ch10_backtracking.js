// Chapter 10 — Backtracking (11 Comprehensive Lessons & Classic Puzzles)
import { createDsaLesson } from './dsaHelper.js'

export const ch10Backtracking = {
  chapterTitle: 'Backtracking',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-backtracking',
      title: 'What is Backtracking?',
      emoji: '🔙',
      difficulty: 'Intermediate',
      englishDef: 'Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, piece by piece, removing those solutions that fail to satisfy the constraints at any point of time.',
      hinglishExplain: 'Backtracking ka matlab hai: Har raste par chal kar dekhna. Jaise hi pata chale ki ye rasta galat hai, wapas pichhe mud jao (Backtrack) aur naya rasta try karo!',
      code: `// Backtracking = Controlled Recursion with State Reversal`
    }),

    createDsaLesson({
      id: 'dsa-backtracking-decision-tree',
      title: 'State-Space Decision Tree',
      emoji: '🌳',
      difficulty: 'Intermediate',
      englishDef: 'The State-Space Tree represents all possible valid and invalid partial states generated during problem exploration.',
      hinglishExplain: 'Har decision point par options ki branch banti hai. Invalid branch ko prune (cut) kar diya jata hai.',
      code: `// Decision Tree: Include element vs Exclude element`
    }),

    createDsaLesson({
      id: 'dsa-choose-explore-unchoose',
      title: 'Choose → Explore → Unchoose Paradigm',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: 'The universal 3-step backtracking template: 1) Choose an option and modify state, 2) Recursively Explore deeper, 3) Unchoose (Undo/Revert) the state to try other options cleanly.',
      hinglishExplain: 'Golden Rule of Backtracking:\n1. Choose: Array mein element dalo\n2. Explore: Recursion call karo\n3. Unchoose: Array se element pop karo (Wapas pehle jaisa karo)!',
      code: `function backtrack(path, options) {
  if (isComplete(path)) { result.push([...path]); return; }
  for (let opt of options) {
    path.push(opt);        // 1. Choose
    backtrack(path, rest); // 2. Explore
    path.pop();            // 3. Unchoose (Undo)
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-subsets-backtracking',
      title: 'Subsets / Power Set (LeetCode 78)',
      emoji: '📦',
      difficulty: 'Intermediate',
      englishDef: 'Generate all 2ⁿ possible subsets of an array by making an include/exclude choice at each index in O(N * 2ⁿ) time.',
      hinglishExplain: 'Har number ke paas 2 options hain: ya toh subset mein aao, ya mat aao. Total 2ⁿ subsets bante hain.',
      code: `function subsets(nums) {
  const res = [];
  function dfs(index, current) {
    res.push([...current]);
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]); // Choose
      dfs(i + 1, current);   // Explore
      current.pop();         // Unchoose
    }
  }
  dfs(0, []);
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-subsequences-backtracking',
      title: 'Generate All Subsequences',
      emoji: '🧩',
      difficulty: 'Intermediate',
      englishDef: 'Generate all subsequences of a string using recursive take/not-take branching in O(2ⁿ) time.',
      hinglishExplain: 'String ke har character ko Include ya Exclude karke saari subsequences generate karna.',
      code: `function generateSubsequences(str, index = 0, current = "", res = []) {
  if (index === str.length) { res.push(current); return res; }
  generateSubsequences(str, index + 1, current + str[index], res); // Take
  generateSubsequences(str, index + 1, current, res);              // Not Take
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-permutations-backtracking',
      title: 'Permutations (LeetCode 46)',
      emoji: '🔀',
      difficulty: 'Intermediate',
      englishDef: 'Generate all N! permutations of an array of distinct integers using backtracking with a visited tracking Set.',
      hinglishExplain: 'N numbers ke saare possible arrangements (N! total) banana. Har step par un-used elements ko try karo.',
      code: `function permute(nums) {
  const res = [];
  function backtrack(curr, used) {
    if (curr.length === nums.length) { res.push([...curr]); return; }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      curr.push(nums[i]);
      backtrack(curr, used);
      curr.pop();
      used[i] = false;
    }
  }
  backtrack([], []);
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-combination-sum',
      title: 'Combination Sum (LeetCode 39)',
      emoji: '🎯',
      difficulty: 'Intermediate',
      englishDef: 'Find all unique combinations of candidates that sum to target where the same number may be chosen an unlimited number of times.',
      hinglishExplain: 'Target sum achieve karne ke liye numbers ko bar-bar choose karna jab tak target 0 na ho jaye.',
      code: `function combinationSum(candidates, target) {
  const res = [];
  function dfs(idx, curr, total) {
    if (total === target) { res.push([...curr]); return; }
    if (total > target || idx >= candidates.length) return;
    curr.push(candidates[idx]);
    dfs(idx, curr, total + candidates[idx]); // Reuse same index
    curr.pop();
    dfs(idx + 1, curr, total); // Skip to next
  }
  dfs(0, [], 0);
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-n-queens-problem',
      title: 'N-Queens Problem (LeetCode 51)',
      emoji: '👑',
      difficulty: 'Advanced',
      englishDef: 'Place N non-attacking queens on an N x N chessboard such that no two queens attack each other along rows, columns, or diagonals.',
      hinglishExplain: 'N x N chessboard par N queens ko aise baithana ki koi bhi queen doosri queen ko row, column ya diagonal mein na kaat sake.',
      code: `function solveNQueens(n) {
  const res = [], board = Array.from({ length: n }, () => new Array(n).fill('.'));
  const cols = new Set(), diag1 = new Set(), diag2 = new Set();

  function backtrack(row) {
    if (row === n) { res.push(board.map(r => r.join(''))); return; }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) continue;
      board[row][col] = 'Q';
      cols.add(col); diag1.add(row + col); diag2.add(row - col);
      backtrack(row + 1);
      board[row][col] = '.';
      cols.delete(col); diag1.delete(row + col); diag2.delete(row - col);
    }
  }
  backtrack(0);
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-rat-in-a-maze',
      title: 'Rat in a Maze',
      emoji: '🧀',
      difficulty: 'Intermediate',
      englishDef: 'Find all paths for a rat to travel from (0, 0) to (N-1, N-1) in a grid containing blocked cells (0) and open cells (1) moving Down, Left, Right, Up.',
      hinglishExplain: 'Grid ke start point (0,0) se destination (N-1, N-1) tak pahunchna bina blocked walls se takraye.',
      code: `// Rat in a Maze solver using D, L, R, U movement`
    }),

    createDsaLesson({
      id: 'dsa-sudoku-solver',
      title: 'Sudoku Solver (LeetCode 37)',
      emoji: '🔢',
      difficulty: 'Advanced',
      englishDef: 'Solve a 9x9 Sudoku puzzle by trying digits 1-9 in empty cells and backtracking immediately when row, column, or 3x3 box constraints are violated.',
      hinglishExplain: 'Khali cell mein 1 se 9 tak number dalo. Agar valid hai toh aage badho, agar kahi fas jao toh wapas aakar agla number try karo.',
      code: `// Backtracking Sudoku Solver`
    }),

    createDsaLesson({
      id: 'dsa-backtracking-interview-problems',
      title: 'Backtracking Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Backtracking interview challenges: 1) Word Search (Grid DFS), 2) Palindrome Partitioning, 3) Letter Combinations of a Phone Number, 4) Target Sum.',
      hinglishExplain: 'Amazon, Google aur FAANG ke classic grid DFS aur string partitioning questions.',
      code: `// Word Search in 2D Board (LeetCode 79)`
    })
  ]
}
