// Chapter 13 — Trees (23 Comprehensive Lessons & Tree Traversals/BST)
import { createDsaLesson } from './dsaHelper.js'

export const ch13Trees = {
  chapterTitle: 'Trees',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-tree',
      title: 'What is Tree?',
      emoji: '🌳',
      difficulty: 'Beginner',
      englishDef: 'A Tree is a non-linear hierarchical data structure consisting of nodes connected by directed edges. A tree with N nodes always contains exactly N - 1 edges without any cycles.',
      hinglishExplain: 'Tree ek hierarchical structure hai (jaise Company ki hierarchy ya Family Tree). Sabse upar ek Root node hota hai aur uske niche children branches judti jati hain.',
      code: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-tree-terminology',
      title: 'Tree Terminology',
      emoji: '📖',
      difficulty: 'Beginner',
      englishDef: 'Essential tree terminology: Root, Parent, Child, Siblings, Leaf (terminal node), Subtree, Edge, Path, Level, Depth, and Height.',
      hinglishExplain: 'Tree ke terms:\n• Root = Sabse top wala node\n• Parent = Jiska child ho\n• Child = Jo parent se connected ho\n• Leaf = Jiska koi child na ho\n• Siblings = Same parent ke children',
      code: `// Tree Terms Cheat Sheet`
    }),

    createDsaLesson({
      id: 'dsa-tree-root',
      title: 'Root Node',
      emoji: '👑',
      difficulty: 'Beginner',
      englishDef: 'The Root Node is the topmost node in a tree with no incoming edges (in-degree 0). Every traversal starts from the root.',
      hinglishExplain: 'Tree ka shuruat point! Poore tree mein sirf ek root node hota hai jiska koi parent nahi hota.',
      code: `const root = new TreeNode(1);`
    }),

    createDsaLesson({
      id: 'dsa-tree-parent',
      title: 'Parent Node',
      emoji: '👨‍👧',
      difficulty: 'Beginner',
      englishDef: 'A Parent Node is any node that has one or more outgoing edges pointing to subordinate child nodes.',
      hinglishExplain: 'Jo node kisi aur node ko point karta hai wo uska Parent hota hai.',
      code: `root.left = new TreeNode(2); // root is parent of 2`
    }),

    createDsaLesson({
      id: 'dsa-tree-child',
      title: 'Child Node',
      emoji: '👶',
      difficulty: 'Beginner',
      englishDef: 'A Child Node is a node directly connected to and descended from a parent node.',
      hinglishExplain: 'Parent ke niche aane wala node Child kehlata hai.',
      code: `// node 2 is child of root`
    }),

    createDsaLesson({
      id: 'dsa-tree-leaf',
      title: 'Leaf Node',
      emoji: '🍃',
      difficulty: 'Beginner',
      englishDef: 'A Leaf Node (External node) is a node that has no children (`node.left === null && node.right === null`).',
      hinglishExplain: 'Tree ke aakhri nodes jinke aage koi child nahi hota (left & right = null).',
      code: `function isLeaf(node) {
  return node !== null && node.left === null && node.right === null;
}`
    }),

    createDsaLesson({
      id: 'dsa-tree-height',
      title: 'Height of a Tree',
      emoji: '📏',
      difficulty: 'Intermediate',
      englishDef: 'The Height of a node is the number of edges on the longest downward path from that node to a leaf. Height of tree = Height of Root = `1 + Math.max(height(left), height(right))`.',
      hinglishExplain: 'Root se lekar sabse gehri leaf tak total kitne levels hain.',
      code: `function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`
    }),

    createDsaLesson({
      id: 'dsa-tree-depth',
      title: 'Depth of a Node',
      emoji: '⚓',
      difficulty: 'Intermediate',
      englishDef: 'The Depth of a node is the number of edges from the root down to that specific node. Depth of Root is 0.',
      hinglishExplain: 'Root se kisi specific node tak aane mein kitne steps lagte hain.',
      code: `// Depth of root = 0, children = 1, grandchildren = 2`
    }),

    createDsaLesson({
      id: 'dsa-binary-tree',
      title: 'Binary Tree',
      emoji: '🌲',
      difficulty: 'Beginner',
      englishDef: 'A Binary Tree is a tree data structure in which each node has at most two children, referred to as the Left Child and Right Child.',
      hinglishExplain: 'Aisa tree jisme har node ke maximum 2 hi children (left aur right) ho sakte hain.',
      code: `// Binary Tree: Left & Right pointers`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-tree',
      title: 'Binary Search Tree (BST)',
      emoji: '⭐',
      difficulty: 'Intermediate',
      englishDef: 'A Binary Search Tree (BST) maintains the invariant: for every node X, all values in its Left Subtree are < X.val, and all values in its Right Subtree are > X.val.',
      hinglishExplain: 'BST Rule: Left mein choti values (< root) aur Right mein badi values (> root). Is property ki wajah se search O(log N) mein ho jata hai!',
      code: `// BST Property: Left < Root < Right`
    }),

    createDsaLesson({
      id: 'dsa-tree-traversal',
      title: 'Tree Traversals Overview (DFS vs BFS)',
      emoji: '🚶‍♂️',
      difficulty: 'Beginner',
      englishDef: 'Tree traversals visit every node exactly once: Depth-First Search (Preorder, Inorder, Postorder) using Call Stack vs Breadth-First Search (Level Order) using Queue.',
      hinglishExplain: 'Tree ke saare nodes par ghumne ke 2 tareeqe:\n1) DFS (Gehrai mein jana: Pre, In, Postorder)\n2) BFS (Ek-ek level karke jana: Level Order).',
      code: `// DFS vs BFS`
    }),

    createDsaLesson({
      id: 'dsa-preorder-traversal',
      title: 'Preorder Traversal (Root → Left → Right)',
      emoji: '1️⃣',
      difficulty: 'Beginner',
      englishDef: 'Preorder visits Root first, then recurses on Left Subtree, then Right Subtree. Used for tree serialization and copying.',
      hinglishExplain: 'Order: Pehle Root, phir Left child, phir Right child (Root -> Left -> Right).',
      code: `function preorder(root, res = []) {
  if (!root) return res;
  res.push(root.val); // Root
  preorder(root.left, res);
  preorder(root.right, res);
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-inorder-traversal',
      title: 'Inorder Traversal (Left → Root → Right)',
      emoji: '2️⃣',
      difficulty: 'Beginner',
      englishDef: 'Inorder visits Left Subtree, then Root, then Right Subtree. In a BST, Inorder traversal ALWAYS yields strictly sorted values in ascending order.',
      hinglishExplain: 'Order: Left -> Root -> Right. BST ka Inorder traversal hamesha perfectly SORTED array deta hai!',
      code: `function inorder(root, res = []) {
  if (!root) return res;
  inorder(root.left, res);
  res.push(root.val); // Root
  inorder(root.right, res);
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-postorder-traversal',
      title: 'Postorder Traversal (Left → Right → Root)',
      emoji: '3️⃣',
      difficulty: 'Beginner',
      englishDef: 'Postorder visits Left Subtree, then Right Subtree, and Root last. Used for bottom-up calculations, subtree deletions, and calculating directory sizes.',
      hinglishExplain: 'Order: Left -> Right -> Root. Bottom-up problems aur tree delete karne ke liye use hota hai.',
      code: `function postorder(root, res = []) {
  if (!root) return res;
  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val); // Root
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-level-order-traversal',
      title: 'Level Order Traversal (BFS)',
      emoji: '🌊',
      difficulty: 'Intermediate',
      englishDef: 'Level Order traversal processes nodes level-by-level from top to bottom and left to right using an iterative Queue in O(N) time.',
      hinglishExplain: 'Queue use karke tree ke har level ke nodes ko line se print karna.',
      code: `function levelOrder(root) {
  if (!root) return [];
  const res = [], q = [root];
  while (q.length) {
    let levelSize = q.length, currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();
      currentLevel.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(currentLevel);
  }
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-bst-search',
      title: 'Search in BST (LeetCode 700)',
      emoji: '🔍',
      difficulty: 'Intermediate',
      englishDef: 'Searching in BST: if `target < root.val`, search Left; if `target > root.val`, search Right. Runs in O(H) where H = log N on balanced BST.',
      hinglishExplain: 'Binary search ki tarah: target chota hai toh left jao, bada hai toh right jao.',
      code: `function searchBST(root, val) {
  while (root && root.val !== val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}`
    }),

    createDsaLesson({
      id: 'dsa-bst-insertion',
      title: 'Insert into a BST (LeetCode 701)',
      emoji: '📥',
      difficulty: 'Intermediate',
      englishDef: 'Traverse down comparing val until finding a null spot, then attach a new TreeNode at that location in O(H) time.',
      hinglishExplain: 'Sahi null spot dhoondh kar naya node attach kar do.',
      code: `function insertIntoBST(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else root.right = insertIntoBST(root.right, val);
  return root;
}`
    }),

    createDsaLesson({
      id: 'dsa-bst-deletion',
      title: 'Delete Node in a BST (LeetCode 450)',
      emoji: '🗑️',
      difficulty: 'Advanced',
      englishDef: 'Deleting from BST: 1) Leaf: remove directly, 2) One child: return that child, 3) Two children: replace with Inorder Successor (min of right subtree) and delete successor.',
      hinglishExplain: '2 children wale node ko delete karne ke liye uske Right subtree ka sabse chota node (Inorder Successor) uski jagah laya jata hai.',
      code: `// BST Node Deletion algorithm`
    }),

    createDsaLesson({
      id: 'dsa-tree-max-height',
      title: 'Maximum Depth of Binary Tree',
      emoji: '📐',
      difficulty: 'Beginner',
      englishDef: 'Computing max depth in O(N) using postorder DFS: `1 + Math.max(maxDepth(left), maxDepth(right))`.',
      hinglishExplain: 'Left aur Right subtree ki depth nikal kar unke max mein +1 add kar do.',
      code: `// Max Depth standard formula`
    }),

    createDsaLesson({
      id: 'dsa-balanced-binary-tree',
      title: 'Balanced Binary Tree (LeetCode 110)',
      emoji: '⚖️',
      difficulty: 'Intermediate',
      englishDef: 'A tree is Height-Balanced (AVL property) if for every node, `Math.abs(height(left) - height(right)) <= 1`. Check in O(N) bottom-up DFS.',
      hinglishExplain: 'Har node par left aur right subtree ki height ka difference 1 se zyada nahi hona chahiye.',
      code: `function isBalanced(root) {
  function check(node) {
    if (!node) return 0;
    let l = check(node.left);
    if (l === -1) return -1;
    let r = check(node.right);
    if (r === -1) return -1;
    if (Math.abs(l - r) > 1) return -1; // Unbalanced
    return 1 + Math.max(l, r);
  }
  return check(root) !== -1;
}`
    }),

    createDsaLesson({
      id: 'dsa-lowest-common-ancestor',
      title: 'Lowest Common Ancestor (LCA)',
      emoji: '👨‍👩‍👧',
      difficulty: 'Intermediate',
      englishDef: 'LCA of nodes P and Q is the lowest node in T that has both P and Q as descendants. In BST: if P and Q are on opposite sides of root, root is LCA.',
      hinglishExplain: 'P aur Q ka sabse nazdeeki common parent dhoondhna.',
      code: `function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left && right) return root; // Found split point
  return left || right;
}`
    }),

    createDsaLesson({
      id: 'dsa-diameter-of-binary-tree',
      title: 'Diameter of Binary Tree (LeetCode 543)',
      emoji: '↔️',
      difficulty: 'Intermediate',
      englishDef: 'The diameter is the length of the longest path between any two nodes in a tree, which may or may not pass through the root. Max `left_height + right_height`.',
      hinglishExplain: 'Tree ke kisi bhi 2 nodes ke beech ka sabse lamba path.',
      code: `function diameterOfBinaryTree(root) {
  let diameter = 0;
  function height(node) {
    if (!node) return 0;
    let l = height(node.left), r = height(node.right);
    diameter = Math.max(diameter, l + r);
    return 1 + Math.max(l, r);
  }
  height(root);
  return diameter;
}`
    }),

    createDsaLesson({
      id: 'dsa-tree-interview-problems',
      title: 'Tree Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Tree interview problems: 1) Serialize and Deserialize Binary Tree, 2) Binary Tree Maximum Path Sum, 3) Validate BST, 4) Construct Binary Tree from Preorder and Inorder.',
      hinglishExplain: 'Tree ke hardest interview problems (Serialize/Deserialize aur Max Path Sum) ka step-by-step master breakdown.',
      code: `// Validate BST: Inorder strictly increasing`
    })
  ]
}
