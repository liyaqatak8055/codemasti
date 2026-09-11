// Chapters 21 to 26: Trees, BST, Tree Patterns, Heaps, Tries & Advanced Trees

export const treesAndHeapsChapters = [
  {
    chapterTitle: 'Chapter 21 — Trees & Traversals (Preorder, Inorder, Postorder & Level-Order BFS)',
    lessons: [
      {
        id: 'ds-tree-traversals-bfs-dfs',
        title: 'Binary Tree Types & Traversals (DFS & BFS Level-Order)',
        emoji: '🌳',
        xpReward: 50,
        badgeName: 'Tree Climber',
        readingTime: '12 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Tree me sabse upar Root baitha hai, neeche Leaves hain! Bilkul ulta ped! Traversals samajh lo, aadha DSA yahin clear ho jayega 😎"',
          hint: '🤦 Masti Sir: "Preorder = Root-Left-Right, Inorder = Left-Root-Right, Postorder = Left-Right-Root! Inorder of BST hamesha SORTED order deta hai!"',
          success: '🥳 Masti Sir: "DFS Call Stack aur BFS Queue traversals master ho gaye!"',
          mistake: '😅 Masti Sir: "BFS level-order mein Queue use karna, DFS mein Recursion / Stack use karna!"'
        },
        englishDef: 'A Binary Tree is a hierarchical non-linear data structure where each node has at most two children (left and right). Depth First Search (DFS) includes Preorder (Root, Left, Right), Inorder (Left, Root, Right), and Postorder (Left, Right, Root). Breadth First Search (BFS) traverses the tree level by level using a FIFO Queue.',
        hinglishExplain: 'Binary Tree ek hierarchical structure hai jisme har node ke maximum 2 bacche (left child, right child) ho sakte hain. DFS tree ki gehrai (depth) tak jata hai recursive call stack se, jabki BFS level-by-level floor-wise traverse karta hai Queue data structure use karke.',
        storyExplain: 'Company Hierarchy socho: CEO (Root) ke neeche 2 VPs (Engineering VP, Sales VP). Har VP ke neeche Directors. Agar CEO pehle har team ki gehrai mein jaakar junior engineer se milta hai toh wo DFS hai. Agar CEO pehle sabhi VPs se, fir sabhi Directors se, fir Managers se milta hai level-by-level toh wo BFS hai! 🏢',
        funnyExample: {
          scenario: 'Traversals ka Masti Rule:\n- Preorder (Root pehle): Boss bolta hai "Pehle main bolunga, fir left team, fir right team!"\n- Inorder (Root beech mein): "Pehle left team, fir main, fir right team!"\n- Postorder (Root aakhir mein): "Tum dono khatam karo, main last mein check karunga!" 😂',
          punchline: 'Pre = Root first, In = Root middle, Post = Root last!'
        },
        memoryTrick: 'Traversals Formula:\nPreorder:  [ ROOT ] -> LEFT -> RIGHT\nInorder:   LEFT -> [ ROOT ] -> RIGHT\nPostorder: LEFT -> RIGHT -> [ ROOT ]\nLevel-Order (BFS): Queue while(!queue.empty)',
        visualDiagram: {
          title: 'Binary Tree Level-Order & DFS Traversals',
          nodes: [
            '       1 (Root)',
            '      / \\',
            '     2   3',
            '    / \\',
            '   4   5',
            'Inorder: [4, 2, 5, 1, 3] | Preorder: [1, 2, 4, 5, 3] | Level-Order: [[1], [2, 3], [4, 5]]'
          ],
          type: 'tree'
        },
        code: `// Binary Tree Node & Complete Traversals
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class TreeTraversals {
  // 1. Inorder Traversal (Left -> Root -> Right): O(N) Time, O(H) Space
  static inorder(root, result = []) {
    if (!root) return result;
    this.inorder(root.left, result);
    result.push(root.val);
    this.inorder(root.right, result);
    return result;
  }

  // 2. Preorder Traversal (Root -> Left -> Right): O(N)
  static preorder(root, result = []) {
    if (!root) return result;
    result.push(root.val);
    this.preorder(root.left, result);
    this.preorder(root.right, result);
    return result;
  }

  // 3. Postorder Traversal (Left -> Right -> Root): O(N)
  static postorder(root, result = []) {
    if (!root) return result;
    this.postorder(root.left, result);
    this.postorder(root.right, result);
    result.push(root.val);
    return result;
  }

  // 4. Level-Order Traversal (BFS via Queue): O(N) Time, O(W) Space
  static levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const currentLevel = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        currentLevel.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(currentLevel);
    }
    return result;
  }
}

// Construct Tree: 1 -> left: 2 (left:4, right:5), right: 3
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log("Inorder DFS:", TreeTraversals.inorder(root)); // [4, 2, 5, 1, 3]
console.log("Level Order BFS:", TreeTraversals.levelOrder(root)); // [[1], [2, 3], [4, 5]]`,
        languages: {
          javascript: `function levelOrder(root) {
  if (!root) return [];
  const res = [], q = [root];
  while (q.length) {
    const len = q.length, level = [];
    for (let i = 0; i < len; i++) {
      const n = q.shift();
      level.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(level);
  }
  return res;
}`,
          python: `from collections import deque

def level_order(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            n = q.popleft()
            level.append(n.val)
            if n.left: q.append(n.left)
            if n.right: q.append(n.right)
        res.append(level)
    return res`,
          java: `import java.util.*;

public class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int size = q.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode n = q.poll();
                level.add(n.val);
                if (n.left != null) q.offer(n.left);
                if (n.right != null) q.offer(n.right);
            }
            res.add(level);
        }
        return res;
    }
}`,
          cpp: `#include <vector>
#include <queue>

std::vector<std::vector<int>> levelOrder(TreeNode* root) {
    if (!root) return {};
    std::vector<std::vector<int>> res;
    std::queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int sz = q.size();
        std::vector<int> level;
        for (int i = 0; i < sz; ++i) {
            TreeNode* n = q.front(); q.pop();
            level.push_back(n->val);
            if (n->left) q.push(n->left);
            if (n->right) q.push(n->right);
        }
        res.push_back(level);
    }
    return res;
}`,
          c: `// Tree traversals in C
#include <stdio.h>
#include <stdlib.h>
`
        },
        codeBreakdown: [
          { part: 'const levelSize = queue.length', label: 'Locks the current number of nodes at this level before pushing their children', color: '#10b981' },
          { part: 'if (node.left) queue.push(node.left)', label: 'Enqueues children for next level in strict Left-to-Right order', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(N) touches every node exactly once',
          space: 'DFS: O(H) where H is tree height (log N for balanced, N for skewed). BFS: O(W) where W is maximum level width (N/2 for leaves).'
        },
        commonMistakes: [
          '❌ BFS mein level size snapshot (`queue.length`) liye bina loop chalana (queue size changes dynamically inside loop)',
          '❌ Inorder traversal mein Left child visit karne se pehle root ko result mein push kar dena (that would make it Preorder)'
        ],
        edgeCases: [
          'Empty tree (root = null)',
          'Single node tree (only root)',
          'Skewed tree (acting like a linked list with height N)'
        ],
        bestPractices: [
          '✅ When you need shortest path / level-wise hierarchy: Use BFS with Queue',
          '✅ When you need leaf-to-root bottom-up computation (like height, diameter): Use Postorder DFS'
        ],
        miniChallenge: 'How would you implement Zigzag / Spiral Level Order Traversal where alternate levels flip direction?',
        quiz: {
          question: 'Binary Search Tree (BST) ka Inorder Traversal hamesha kya produce karta hai?',
          options: [
            'Reverse sorted order',
            'Sorted Ascending order',
            'Random order',
            'Level-by-level numbers'
          ],
          answer: 'Sorted Ascending order',
          explanation: 'BST property ke mutabik Left < Root < Right hota hai. Inorder traversal (Left, Root, Right) naturally numbers ko strictly ascending sorted order mein visit karta hai.'
        },
        summary: [
          'Binary trees have at most 2 children per node (left, right)',
          'DFS traversals (Preorder, Inorder, Postorder) execute via recursion call stack in O(H) memory',
          'BFS Level-Order traversal uses a FIFO queue to process node levels sequentially'
        ],
        flashcard: {
          q: 'Full Binary Tree vs Complete Binary Tree mein kya farq hai?',
          a: 'Full Tree mein har node ke ya toh 0 ya 2 bacche hote hain. Complete Tree mein last level ko chhod kar saare levels fully filled hote hain aur last level left-aligned hota hai (Heap structure).'
        },
        funFact: 'React framework ka Virtual DOM Reconciliation algorithm HTML component updates compute karne ke liye recursive Tree Diffing algorithm use karta hai!',
        interviewQuestions: [
          'Explain why Inorder Traversal of a Binary Search Tree always yields values in strictly increasing sorted order.',
          'How do you construct a unique Binary Tree given its Inorder and Preorder traversal arrays?',
          'What is the maximum number of nodes at level L in a binary tree?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 22 — Binary Search Tree (BST Operations, Validation & LCA)',
    lessons: [
      {
        id: 'ds-bst-search-insert-validate',
        title: 'Binary Search Tree (BST Property, Search, Insert, Delete, Validate BST & LCA)',
        emoji: '🌿',
        xpReward: 50,
        badgeName: 'BST Maestro',
        readingTime: '13 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "BST ka ek hi golden rule hai: Left chhota, Right bada! Har node par ye rule follow hona chahiye! 😎"',
          hint: '🤦 Masti Sir: "Validate BST mein sirf parent se compare mat karo! Range check karo: (min < node.val < max)!"',
          success: '🥳 Masti Sir: "BST Search, Inorder Successor aur LCA sab clear ho gaye!"',
          mistake: '😅 Masti Sir: "BST Delete karte waqt 3 cases hote hain: 0 child (leaf), 1 child, aur 2 children (replace with Inorder Successor)!"'
        },
        englishDef: 'A Binary Search Tree (BST) is a binary tree where for every node: all keys in the left subtree are strictly less than the node’s key, and all keys in the right subtree are strictly greater. Average search, insertion, and deletion take O(log N) time.',
        hinglishExplain: 'BST ek aisi binary tree hoti hai jisme kisi bhi node ka left subtree usse chhota hota hai aur right subtree usse bada hota hai. Is property ki wajah se binary search ki tarah hum har step par aadhi tree ko eliminate karke O(log N) average time mein element dhoondh, insert ya delete kar sakte hain.',
        storyExplain: 'Dictionary Bookshelf socho: Agar tum "M" par khade ho aur "G" dhoondhna hai, toh bina soche Left shelf par jao. Agar "T" dhoondhna hai toh Right shelf par jao. Har mod par 50% kitabein ignore ho jati hain! 📚',
        funnyExample: {
          scenario: 'BST Bouncers at Party:\n- Node 50 stands at door.\n- Guest 20 arrives: "Bhai left side baitho!" (20 < 50)\n- Guest 80 arrives: "Bhai right VIP lounge mein jao!" (80 > 50)\n- Perfect automated sorting! 😎',
          punchline: 'Left is smaller, Right is greater!'
        },
        memoryTrick: 'Validate BST Range Invariant:\nleft_subtree:  (min, root.val)\nright_subtree: (root.val, max)',
        visualDiagram: {
          title: 'BST Property & Inorder Traversal',
          nodes: [
            '        50 (Root)',
            '       /  \\',
            '      30   70',
            '     /  \\  / \\',
            '    20  40 60 80',
            'Inorder: [20, 30, 40, 50, 60, 70, 80] (Sorted!)'
          ],
          type: 'tree'
        },
        code: `// BST Operations & Validation Masterclass
class BSTMastery {
  // 1. Search in BST: O(H) Time -> O(log N) avg, O(N) worst
  static searchBST(root, val) {
    if (!root || root.val === val) return root;
    if (val < root.val) return this.searchBST(root.left, val);
    return this.searchBST(root.right, val);
  }

  // 2. Validate Binary Search Tree: O(N) Time, O(H) Space
  static isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      this.isValidBST(root.left, min, root.val) &&
      this.isValidBST(root.right, root.val, max)
    );
  }

  // 3. Lowest Common Ancestor (LCA) in BST: O(H) Time, O(1) Space
  static lowestCommonAncestor(root, p, q) {
    let curr = root;
    while (curr) {
      if (p.val < curr.val && q.val < curr.val) {
        curr = curr.left; // Both nodes in left subtree
      } else if (p.val > curr.val && q.val > curr.val) {
        curr = curr.right; // Both nodes in right subtree
      } else {
        return curr; // Split point is the LCA!
      }
    }
    return null;
  }
}

// Tree: 50 -> (30, 70)
const bst = new TreeNode(50, new TreeNode(30), new TreeNode(70));
console.log("Is Valid BST?", BSTMastery.isValidBST(bst)); // true
console.log("Search 30 in BST:", BSTMastery.searchBST(bst, 30)?.val); // 30`,
        languages: {
          javascript: `function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}`,
          python: `def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    if not root: return True
    if root.val <= min_val or root.val >= max_val: return False
    return is_valid_bst(root.left, min_val, root.val) and is_valid_bst(root.right, root.val, max_val)`,
          java: `public class Solution {
    public boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
    }
    private boolean validate(TreeNode node, Integer min, Integer max) {
        if (node == null) return true;
        if ((min != null && node.val <= min) || (max != null && node.val >= max)) return false;
        return validate(node.left, min, node.val) && validate(node.right, node.val, max);
    }
}`,
          cpp: `bool validate(TreeNode* node, long minVal, long maxVal) {
    if (!node) return true;
    if (node->val <= minVal || node->val >= maxVal) return false;
    return validate(node->left, minVal, node->val) && validate(node->right, node->val, maxVal);
}
bool isValidBST(TreeNode* root) {
    return validate(root, LONG_MIN, LONG_MAX);
}`,
          c: `// Validate BST in C
#include <stdbool.h>
#include <limits.h>
`
        },
        codeBreakdown: [
          { part: 'root.val <= min || root.val >= max', label: 'Enforces that every node strictly adheres to global upper and lower boundary bounds', color: '#ef4444' },
          { part: 'lowestCommonAncestor split point', label: 'When one node is on left and one is on right, current node is their lowest common ancestor', color: '#10b981' }
        ],
        complexity: {
          time: 'Search, Insert, Delete, LCA: O(log N) Average for balanced BST, O(N) Worst case for skewed BST',
          space: 'O(H) recursion stack space'
        },
        commonMistakes: [
          '❌ Validate BST mein sirf immediate children compare karna (e.g. `left < root && right > root` checks do not detect if a right subtree grandchild is smaller than root)',
          '❌ Duplicate keys BST mein kaise handle hongi clarify na karna (strictly less vs less-than-or-equal)'
        ],
        edgeCases: [
          'Root value equal to `Number.MAX_SAFE_INTEGER` or `Integer.MAX_VALUE`',
          'Single node tree',
          'Degenerate skewed BST (sorted array inserted in order)'
        ],
        bestPractices: [
          '✅ When validating BST: Pass allowed `(min, max)` range parameters down the recursive tree',
          '✅ When finding LCA in BST: Walk down until `p` and `q` diverge to different sides'
        ],
        miniChallenge: 'How do you delete a node with 2 children in a BST using its Inorder Successor (smallest node in right subtree)?',
        quiz: {
          question: 'BST mein Lowest Common Ancestor (LCA) node kab milti hai?',
          options: [
            'Hamesha root node par',
            'Us node par jahan se p aur q do alag-alag subtrees (ek left aur ek right) mein bifurcate / split hote hain',
            'Tree ki sabse pehli leaf node par',
            'Kyunki LCA random hota hai'
          ],
          answer: 'Us node par jahan se p aur q do alag-alag subtrees (ek left aur ek right) mein bifurcate / split hote hain',
          explanation: 'Jab ek node left mein aur dusra right mein ho, wahi node sabse gehra common ancestor hota hai kyunki iske baad dono paths alag ho jate hain.'
        },
        summary: [
          'BST maintains Left < Node < Right for all nodes',
          'Search, Insert, and Delete operate in average O(log N) time',
          'Validation requires enforcing recursive (min, max) boundaries across the whole subtree'
        ],
        flashcard: {
          q: 'Inorder Successor kya hota hai?',
          a: 'Inorder traversal mein current node ke theek baad aane wala element (right subtree ka sabse chhota/left-most node).'
        },
        funFact: 'Database systems (PostgreSQL, MySQL B-Trees) hazaron transactions ke index pointers ko balanced BST structures mein store karte hain!',
        interviewQuestions: [
          'Why does validating a BST require passing `(min, max)` range bounds instead of just checking a node against its immediate children?',
          'How do you convert a sorted array into a height-balanced BST in O(N) time?',
          'Explain the 3 cases of node deletion in a Binary Search Tree.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 23 — Tree Problem Patterns (Height, Diameter, Balanced Tree & Path Sum)',
    lessons: [
      {
        id: 'ds-tree-problem-patterns',
        title: 'Tree Problem Patterns (Max Depth, Diameter, Balanced Tree & Path Sum I/II/III)',
        emoji: '🌲',
        xpReward: 50,
        badgeName: 'Tree Architect',
        readingTime: '12 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Tree problems ka 90% solution Postorder DFS se nikalta hai! Left se height maango, Right se height maango, fir parent par combine kar do! Simple 😎"',
          hint: '🤦 Masti Sir: "Tree Diameter matlab sabse lambi path between any two nodes. Ye zaroori nahi ki Root se hi guzre! Har node par `left_height + right_height` check karo!"',
          success: '🥳 Masti Sir: "Diameter, Max Path Sum aur Balanced Tree teeno conquer ho gaye!"',
          mistake: '😅 Masti Sir: "Diameter mein edges count karne hain ya nodes count karne hain, interview mein clarify zaroor karna!"'
        },
        englishDef: 'Tree Problem Patterns leverage recursive bottom-up postorder DFS to solve structural questions like Maximum Depth (`1 + max(left, right)`), Tree Diameter (longest path between any two nodes), Height-Balanced verification (`|left - right| <= 1`), and Root-to-Leaf Path Sums.',
        hinglishExplain: 'Tree ke mostly complex problems Postorder DFS pattern follow karte hain. Har sub-tree apne left aur right children se information (jaise height ya max sum) collect karta hai aur current node par optimal answer update karta hai.',
        storyExplain: 'Bridge Builder ka socho: Do islands ko connect karne wala sabse lamba bridge banana hai. Har island (sub-tree) apne sabse unche pahad ki height batata hai. Bridge ki length dono pahado ka sum hoti hai (Left Height + Right Height)! 🌉',
        funnyExample: {
          scenario: 'Tree Height Calculation:\n- Root asks Left Child: "Teri height kitni hai?" Left: "2 floors!"\n- Root asks Right Child: "Teri height kitni hai?" Right: "4 floors!"\n- Root calculates: "Mera floor + max(2, 4) = 1 + 4 = 5 floors total!" 🏢',
          punchline: 'Ask children for their best, add 1 for yourself!'
        },
        memoryTrick: 'Golden Tree Recursion Formulas:\nHeight(node) = 1 + Math.max(Height(left), Height(right))\nDiameter at node = Height(left) + Height(right)\nBalanced check: Math.abs(Height(left) - Height(right)) <= 1',
        visualDiagram: {
          title: 'Tree Diameter vs Maximum Depth',
          nodes: [
            'Max Depth: Length of longest path from Root down to Leaf',
            'Diameter: Longest path between ANY TWO NODES in the tree',
            'Formula: At every node, diameter_candidate = left_height + right_height',
            'Global Diameter = max(all diameter candidates)'
          ],
          type: 'flow'
        },
        code: `// Tree Patterns Masterclass
class TreePatternsMastery {
  // 1. Maximum Depth of Binary Tree: O(N) Time, O(H) Space
  static maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(this.maxDepth(root.left), this.maxDepth(root.right));
  }

  // 2. Diameter of Binary Tree: O(N) Time, O(H) Space
  static diameterOfBinaryTree(root) {
    let maxDiameter = 0;

    function height(node) {
      if (!node) return 0;
      const lh = height(node.left);
      const rh = height(node.right);
      maxDiameter = Math.max(maxDiameter, lh + rh); // Update diameter through current node
      return 1 + Math.max(lh, rh); // Return height
    }

    height(root);
    return maxDiameter;
  }

  // 3. Path Sum I (Has Root-to-Leaf sum equal to target): O(N)
  static hasPathSum(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.val === targetSum;
    return (
      this.hasPathSum(root.left, targetSum - root.val) ||
      this.hasPathSum(root.right, targetSum - root.val)
    );
  }
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log("Max Depth:", TreePatternsMastery.maxDepth(tree)); // 3
console.log("Tree Diameter:", TreePatternsMastery.diameterOfBinaryTree(tree)); // 3 (path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3)
console.log("Has Path Sum 7 (1+2+4):", TreePatternsMastery.hasPathSum(tree, 7)); // true`,
        languages: {
          javascript: `function diameterOfBinaryTree(root) {
  let dia = 0;
  function h(n) {
    if (!n) return 0;
    let l = h(n.left), r = h(n.right);
    dia = Math.max(dia, l + r);
    return 1 + Math.max(l, r);
  }
  h(root);
  return dia;
}`,
          python: `def diameter_of_binary_tree(root):
    dia = 0
    def height(node):
        nonlocal dia
        if not node: return 0
        lh, rh = height(node.left), height(node.right)
        dia = max(dia, lh + rh)
        return 1 + max(lh, rh)
    height(root)
    return dia`,
          java: `public class Solution {
    private int dia = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        height(root);
        return dia;
    }
    private int height(TreeNode node) {
        if (node == null) return 0;
        int lh = height(node.left);
        int rh = height(node.right);
        dia = Math.max(dia, lh + rh);
        return 1 + Math.max(lh, rh);
    }
}`,
          cpp: `int dia = 0;
int height(TreeNode* node) {
    if (!node) return 0;
    int lh = height(node->left), rh = height(node->right);
    dia = std::max(dia, lh + rh);
    return 1 + std::max(lh, rh);
}
int diameterOfBinaryTree(TreeNode* root) {
    dia = 0;
    height(root);
    return dia;
}`,
          c: `// Tree patterns in C
`
        },
        codeBreakdown: [
          { part: 'maxDiameter = Math.max(maxDiameter, lh + rh)', label: 'Calculates longest path turning through current node without needing extra passes', color: '#10b981' },
          { part: '1 + Math.max(lh, rh)', label: 'Returns height of current subtree to its parent node', color: '#3b82f6' }
        ],
        complexity: {
          time: 'O(N) single bottom-up postorder traversal touching each node once',
          space: 'O(H) recursion stack space'
        },
        commonMistakes: [
          '❌ Height function ko har node par separate call karna jisse O(N^2) complexity ban jati hai (instead compute diameter simultaneously inside the height recursion)',
          '❌ Path Sum mein leaf check (`!node.left && !node.right`) na lagana (intermediate nodes should not trigger true)'
        ],
        edgeCases: [
          'Empty tree (diameter = 0, depth = 0)',
          'Tree where longest path does NOT pass through root (e.g. deep left subtree)',
          'Tree with negative values in Maximum Path Sum'
        ],
        bestPractices: [
          '✅ Always compute structural properties bottom-up in single postorder pass',
          '✅ Keep a global tracker variable for Diameter / Max Path Sum during height recursion'
        ],
        miniChallenge: 'How would you solve Binary Tree Maximum Path Sum (Hard) where paths can start and end at any nodes and contain negative values?',
        quiz: {
          question: 'Tree Diameter calculate karne ka O(N) optimal method kya hai?',
          options: [
            'Saari leaves ke pairs check karna O(N^2)',
            'Single postorder height recursion mein har node par `left_height + right_height` se max diameter update karna',
            'Queue se level order traversal karna',
            'Array mein convert karke sort karna'
          ],
          answer: 'Single postorder height recursion mein har node par `left_height + right_height` se max diameter update karna',
          explanation: 'Height recursion naturally dono subtrees ki depth provide karta hai, isliye usi bottom-up pass mein O(N) time mein global diameter compute ho jata hai.'
        },
        summary: [
          'Tree depth is calculated as `1 + max(left, right)`',
          'Tree diameter at any node is `left_height + right_height`',
          'Single-pass bottom-up recursion avoids quadratic O(N^2) re-computations'
        ],
        flashcard: {
          q: 'Height-Balanced Binary Tree kya hoti hai?',
          a: 'Aisi tree jisme har node ke left aur right subtrees ki height ka difference maximum 1 ho (`|lh - rh| <= 1`).'
        },
        funFact: 'Hierarchical file compression formats (TAR, ZIP) aur JSON/XML parsers document structure validate karne ke liye Tree traversal patterns use karte hain!',
        interviewQuestions: [
          'Explain why calculating diameter by calling a separate `height()` function leads to O(N^2) time, and how to optimize it to O(N).',
          'How do you check if a binary tree is height-balanced in O(N) time?',
          'Explain the Binary Tree Maximum Path Sum problem and how negative subtree sums are handled.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 24 — Heap & Priority Queue (Min Heap, Max Heap, Heapify & Top K)',
    lessons: [
      {
        id: 'ds-heap-priority-queue',
        title: 'Heap Data Structure (Min/Max Heap, Heapify, Heap Sort & Top-K Problems)',
        emoji: '⛰️',
        xpReward: 50,
        badgeName: 'Heap Hero',
        readingTime: '13 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Jab bhi problem mein Top K, Kth Largest, ya Running Median aaye — dimag mein turant HEAP ki ghanti bajao! O(N log K) time mein answer milta hai! 😎"',
          hint: '🤦 Masti Sir: "Kth Largest dhoondhna hai? MIN-HEAP banao of size K! Min-Heap ka root hamesha Kth largest element hold karega!"',
          success: '🥳 Masti Sir: "Heapify, Heap Sort aur Top K Frequent Elements master ho gaye!"',
          mistake: '😅 Masti Sir: "Kth Largest ke liye Max Heap banake O(N log N) mat banao, Min Heap of size K use karke O(N log K) banao!"'
        },
        englishDef: 'A Binary Heap is a complete binary tree stored in a contiguous array that satisfies the Heap Property: in a Min-Heap, parent <= children; in a Max-Heap, parent >= children. Insertion and Deletion take O(log N) time, while Peek (getting min/max) takes O(1) time. Array index relations: `Parent(i) = floor((i-1)/2)`, `Left(i) = 2i + 1`, `Right(i) = 2i + 2`.',
        hinglishExplain: 'Heap ek complete binary tree hoti hai jise array mein store kiya jata hai bina pointers ke. Min-Heap mein sabse chhota element hamesha Top (index 0) par hota hai. Insertion aur deletion O(log N) time lete hain aur Heapify algorithm array ko O(N) linear time mein heap mein convert kar deta hai.',
        storyExplain: 'Emergency Hospital Triage socho: Doctor ke paas 100 patients hain. Doctor first-come-first-serve nahi karta, balki sabse critical patient (Highest Priority) ko pehle treat karta hai (Priority Queue / Max Heap)! 🏥🚑',
        funnyExample: {
          scenario: 'Kth Largest in Stream:\n- 10 lakh numbers flow ho rahe hain\n- Min-Heap of size K=3: [70, 80, 90]\n- New number 85 arrives: 85 > 70 (Min), so pop 70 and push 85 -> [80, 85, 90]\n- Root (80) is ALWAYS the 3rd largest number in O(1)! ⚡',
          punchline: 'Min-Heap of size K = Kth Largest bodyguard!'
        },
        memoryTrick: 'Heap Array Index Formulas:\nParent Index = Math.floor((i - 1) / 2)\nLeft Child   = 2 * i + 1\nRight Child  = 2 * i + 2',
        visualDiagram: {
          title: 'Min-Heap Tree vs Array Representation',
          nodes: [
            'Tree: Root [10] -> Left [15], Right [20] -> Leaves [30, 40]',
            'Array Layout: [10, 15, 20, 30, 40]',
            'Index 0: Parent of index 1 & 2',
            'Index 1: Parent of index 3 & 4'
          ],
          type: 'tree'
        },
        code: `// Min-Heap Implementation & Top-K Problems
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  push(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop(); // Move last element to root
    this.bubbleDown(0);
    return root;
  }

  peek() { return this.heap[0] ?? null; }
  size() { return this.heap.length; }

  bubbleUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  bubbleDown(i) {
    let smallest = i;
    const l = this.left(i), r = this.right(i);
    if (l < this.heap.length && this.heap[l] < this.heap[smallest]) smallest = l;
    if (r < this.heap.length && this.heap[r] < this.heap[smallest]) smallest = r;
    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.bubbleDown(smallest);
    }
  }
}

// Find Kth Largest Element using Min-Heap of size K: O(N log K) Time, O(K) Space
function findKthLargest(nums, k) {
  const minHeap = new MinHeap();
  for (let num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) {
      minHeap.pop(); // Evict smallest element
    }
  }
  return minHeap.peek();
}

console.log("3rd Largest in [3, 2, 1, 5, 6, 4]:", findKthLargest([3, 2, 1, 5, 6, 4], 3)); // 4 (Sorted: 6, 5, 4, 3, 2, 1)`,
        languages: {
          javascript: `// Top K Elements in JS using Min-Heap
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}`,
          python: `import heapq

def find_kth_largest(nums, k):
    # Min heap of size k
    heap = nums[:k]
    heapq.heapify(heap)
    for n in nums[k:]:
        if n > heap[0]:
            heapq.heappushpop(heap, n)
    return heap[0]`,
          java: `import java.util.PriorityQueue;

public class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int n : nums) {
            minHeap.offer(n);
            if (minHeap.size() > k) minHeap.poll();
        }
        return minHeap.peek();
    }
}`,
          cpp: `#include <vector>
#include <queue>

int findKthLargest(const std::vector<int>& nums, int k) {
    std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;
    for (int n : nums) {
        minHeap.push(n);
        if ((int)minHeap.size() > k) minHeap.pop();
    }
    return minHeap.top();
}`,
          c: `// Heap implementation in C
#include <stdio.h>
`
        },
        codeBreakdown: [
          { part: 'minHeap.push(num); if (size > k) minHeap.pop()', label: 'Maintains exactly K largest elements seen so far; root holds the Kth largest', color: '#10b981' },
          { part: 'this.bubbleDown(0)', label: 'Restores the min-heap invariant in O(log K) steps after removing the root', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Kth Largest: O(N log K), Heap Insert/Delete: O(log N), Heapify: O(N) linear time',
          space: 'O(K) auxiliary space to maintain heap of size K'
        },
        commonMistakes: [
          '❌ Kth Largest ke liye size N ka Max Heap banana (takes O(N log N)) instead of size K Min Heap (takes O(N log K))',
          '❌ Heapify algorithm ko O(N log N) samajhna (mathematical summation proves Heapify is O(N) linear time)'
        ],
        edgeCases: [
          'k = 1 (find maximum element)',
          'k = nums.length (find minimum element)',
          'Array with all duplicate values'
        ],
        bestPractices: [
          '✅ Kth Largest → Use Min-Heap of size K',
          '✅ Kth Smallest → Use Max-Heap of size K',
          '✅ Running Median → Use 2 Heaps (Max-Heap for lower half, Min-Heap for upper half)'
        ],
        miniChallenge: 'How does Dijkstra’s shortest path algorithm use a Min-Priority Queue to achieve O((V + E) log V) time?',
        quiz: {
          question: 'Kth Largest element dhoondhne ke liye hum size K ka Min-Heap kyun use karte hain (Max-Heap ke bajaye)?',
          options: [
            'Kyunki Min-Heap mein sabse chhota element top par hota hai, isliye K largest elements ke group mein se sabse chhota element theek Kth largest element ban jata hai',
            'Kyunki Min-Heap memory nahi leta',
            'Kyunki Max-Heap code nahi ho sakta',
            'Kyunki JS mein heap nahi hota'
          ],
          answer: 'Kyunki Min-Heap mein sabse chhota element top par hota hai, isliye K largest elements ke group mein se sabse chhota element theek Kth largest element ban jata hai',
          explanation: 'Agar heap mein top K sabse bade elements hain, toh un K elements ka minimum hi poore array ka Kth largest element hota hai.'
        },
        summary: [
          'Heaps store complete binary trees inside flat arrays with O(1) peek',
          'Min-Heap keeps minimum at root; Max-Heap keeps maximum at root',
          'Top-K problems run in optimal O(N log K) time with a heap of size K'
        ],
        flashcard: {
          q: 'Build Heap (Heapify) algorithm O(N) linear time mein kaise execute hota hai?',
          a: 'Leaves (50% nodes) par 0 swaps lagte hain, 1 level up par 1 swap, aur root (1 node) par log N swaps. Series summation `N * sum(h / 2^h)` converges mathematically to O(N).'
        },
        funFact: 'Operating systems (Linux kernel CFS scheduler) processes ko CPU time allocate karne ke liye Red-Black trees aur Priority Queues use karte hain!',
        interviewQuestions: [
          'Prove mathematically why building a heap from an unsorted array takes O(N) time and not O(N log N).',
          'Explain how to find the Median from a continuous Data Stream using Two Heaps (Max-Heap and Min-Heap) in O(1) time.',
          'How do you merge K sorted linked lists efficiently using a Min-Heap?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 25 — Trie (Prefix Tree, Word Dictionary & Autocomplete)',
    lessons: [
      {
        id: 'ds-trie-prefix-tree',
        title: 'Trie Data Structure (Prefix Tree, Insert, Search, StartsWith & Autocomplete Engine)',
        emoji: '🌲',
        xpReward: 50,
        badgeName: 'Trie Traversalist',
        readingTime: '12 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Google search bar mein type karte hi dropdown mein suggestions aate hain? Wo TRIE (Prefix Tree) ka kamal hai! Instant O(L) prefix lookup! 🚀"',
          hint: '🤦 Masti Sir: "Har Trie Node ke paas 26 children (a-z) aur ek `isEndOfWord` boolean flag hota hai!"',
          success: '🥳 Masti Sir: "Trie Insert, Search, StartsWith aur Autocomplete sab master ho gaye!"',
          mistake: '😅 Masti Sir: "Prefix match aur complete word match mein confuse mat hona: `isEndOfWord` check karna zaroori hai!"'
        },
        englishDef: 'A Trie (pronounced "try" or "tree", from reTRIEval) is a tree-like data structure used for storing dynamic sets of strings where keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the associated key string.',
        hinglishExplain: 'Trie (Prefix Tree) strings ko character-by-character store karta hai. Agar "app", "apple", "apply" words hon toh "app" ka path share ho jata hai! Iski wajah se kisi bhi word ko insert ya search karna word ki length L ke barabar constant O(L) time leta hai, chahe dictionary mein 10 crore words kyun na hon!',
        storyExplain: 'Search Engine Autocomplete ka socho: Jab tum "cat" type karte ho, Trie root se \'c\' -> \'a\' -> \'t\' node par jump karta hai aur uske neeche ke saare valid words ("caterpillar", "catfish", "cathedral") instant dropdown mein show kar deta hai! 🐱🔍',
        funnyExample: {
          scenario: 'Phone T9 Dictionary:\n- Type "app" → Trie explores \'a\' -> \'p\' -> \'p\'\n- Finds words ending at: "apple", "application", "app"\n- Output in 0.001 milliseconds! ⚡',
          punchline: 'Share common prefixes, search in lightning speed!'
        },
        memoryTrick: 'Trie Node Blueprint:\nchildren = Map() or Array(26)\nisEndOfWord = Boolean flag',
        visualDiagram: {
          title: 'Trie Prefix Tree for ["app", "apple", "bat"]',
          nodes: [
            'Root -> (a) -> (p) -> [p] (isWord: true for "app")',
            '                   └-> (l) -> [e] (isWord: true for "apple")',
            '     -> (b) -> (a) -> [t] (isWord: true for "bat")'
          ],
          type: 'tree'
        },
        code: `// Complete Trie (Prefix Tree) Implementation
class TrieNode {
  constructor() {
    this.children = {}; // char -> TrieNode
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // 1. Insert Word: O(L) Time where L is word length
  insert(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }

  // 2. Search Full Word: O(L) Time
  search(word) {
    let curr = this.root;
    for (let char of word) {
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return curr.isEndOfWord;
  }

  // 3. StartsWith Prefix: O(L) Time
  startsWith(prefix) {
    let curr = this.root;
    for (let char of prefix) {
      if (!curr.children[char]) return false;
      curr = curr.children[char];
    }
    return true;
  }

  // 4. Autocomplete Suggestions: O(Prefix + Subtree Size)
  autocomplete(prefix) {
    let curr = this.root;
    for (let char of prefix) {
      if (!curr.children[char]) return [];
      curr = curr.children[char];
    }
    const results = [];
    this.collectWords(curr, prefix, results);
    return results;
  }

  collectWords(node, currentWord, results) {
    if (node.isEndOfWord) results.push(currentWord);
    for (let char in node.children) {
      this.collectWords(node.children[char], currentWord + char, results);
    }
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("bat");

console.log("Search 'app':", trie.search("app")); // true
console.log("Search 'appl':", trie.search("appl")); // false
console.log("StartsWith 'app':", trie.startsWith("app")); // true
console.log("Autocomplete 'app':", trie.autocomplete("app")); // ['app', 'apple', 'application']`,
        languages: {
          javascript: `class Trie {
  constructor() { this.root = {}; }
  insert(w) {
    let n = this.root;
    for (let c of w) { if (!n[c]) n[c] = {}; n = n[c]; }
    n.isEnd = true;
  }
  search(w) {
    let n = this.root;
    for (let c of w) { if (!n[c]) return false; n = n[c]; }
    return !!n.isEnd;
  }
  startsWith(p) {
    let n = this.root;
    for (let c of p) { if (!n[c]) return false; n = n[c]; }
    return true;
  }
}`,
          python: `class Trie:
    def __init__(self):
        self.root = {}
    def insert(self, word: str):
        node = self.root
        for c in word:
            node = node.setdefault(c, {})
        node['#'] = True
    def search(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c not in node: return False
            node = node[c]
        return '#' in node
    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for c in prefix:
            if c not in node: return False
            node = node[c]
        return True`,
          java: `class Trie {
    private class Node {
        Node[] children = new Node[26];
        boolean isEnd;
    }
    private Node root = new Node();
    public void insert(String word) {
        Node curr = root;
        for (char c : word.toCharArray()) {
            if (curr.children[c - 'a'] == null) curr.children[c - 'a'] = new Node();
            curr = curr.children[c - 'a'];
        }
        curr.isEnd = true;
    }
    public boolean search(String word) {
        Node curr = root;
        for (char c : word.toCharArray()) {
            if (curr.children[c - 'a'] == null) return false;
            curr = curr.children[c - 'a'];
        }
        return curr.isEnd;
    }
    public boolean startsWith(String prefix) {
        Node curr = root;
        for (char c : prefix.toCharArray()) {
            if (curr.children[c - 'a'] == null) return false;
            curr = curr.children[c - 'a'];
        }
        return true;
    }
}`,
          cpp: `class Trie {
    struct Node {
        Node* child[26] = {nullptr};
        bool isEnd = false;
    };
    Node* root = new Node();
public:
    void insert(const std::string& word) {
        Node* curr = root;
        for (char c : word) {
            if (!curr->child[c - 'a']) curr->child[c - 'a'] = new Node();
            curr = curr->child[c - 'a'];
        }
        curr->isEnd = true;
    }
    bool search(const std::string& word) {
        Node* curr = root;
        for (char c : word) {
            if (!curr->child[c - 'a']) return false;
            curr = curr->child[c - 'a'];
        }
        return curr->isEnd;
    }
    bool startsWith(const std::string& prefix) {
        Node* curr = root;
        for (char c : prefix) {
            if (!curr->child[c - 'a']) return false;
            curr = curr->child[c - 'a'];
        }
        return true;
    }
};`,
          c: `// Trie in C
#include <stdbool.h>
#include <stdlib.h>
`
        },
        codeBreakdown: [
          { part: 'curr.children[char] = new TrieNode()', label: 'Creates tree branch for character if not already present', color: '#10b981' },
          { part: 'curr.isEndOfWord = true', label: 'Marks the termination of a complete dictionary word', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Insert, Search, StartsWith: O(L) where L is string length',
          space: 'O(Total Characters * Alphabet Size) node storage'
        },
        commonMistakes: [
          '❌ Search function mein `return true` likhna bina `curr.isEndOfWord` check kiye (Prefix "app" for word "apple" is not a full word unless explicitly inserted)',
          '❌ Memory consumption dhyan na rakhna (each node holding 26 pointers can consume significant memory for sparse tries)'
        ],
        edgeCases: [
          'Empty string insertion',
          'Prefix that does not exist in Trie',
          'Words that are substrings of longer inserted words (e.g. "app" vs "apple")'
        ],
        bestPractices: [
          '✅ When solving Prefix Search, Spell Checker, or Autocomplete problems: Use a Trie',
          '✅ Use Bitwise Trie for Maximum XOR of Two Numbers in an array in O(32 * N)'
        ],
        miniChallenge: 'How does a Bitwise Trie (binary branches 0 and 1) find the Maximum XOR pair in an array in linear O(32 * N) time?',
        quiz: {
          question: 'Trie data structure mein 10 character lambe word ko search karne ki time complexity kya hoti hai?',
          options: [
            'O(N) jahan N dictionary ke total words hain',
            'O(L) = 10 operations (Word length L par depend karti hai, dictionary size par nahi!)',
            'O(N log N)',
            'O(L^2)'
          ],
          answer: 'O(L) = 10 operations (Word length L par depend karti hai, dictionary size par nahi!)',
          explanation: 'Trie direct character path follow karta hai. Isliye 10 crore words ki dictionary mein bhi 10-letter word sirf 10 pointer jumps mein match ho jata hai.'
        },
        summary: [
          'Trie stores words character by character sharing common prefixes',
          'Insert, Search, and StartsWith operate in O(L) time proportional to word length',
          'Powers modern Autocomplete engines, Spellcheckers, and IP Routing tables'
        ],
        flashcard: {
          q: 'Compressed Trie (Radix Tree / Patricia Trie) kya hota hai?',
          a: 'Aisi Trie jisme single-child chains ko ek single edge mein merge kar diya jata hai (e.g. "t" -> "e" -> "s" -> "t" becomes single edge "test") taaki memory optimize ho sake.'
        },
        funFact: 'Router network hardware internet traffic route karne ke liye Longest Prefix Match (LPM) IP address lookup Bitwise Trie data structures se karta hai!',
        interviewQuestions: [
          'Compare Trie vs HashMap for word lookup and prefix matching across Time and Space complexities.',
          'How do you design a Search Autocomplete System that returns top 3 most searched queries for a given prefix?',
          'Explain how a Binary Trie solves the Maximum XOR Pair problem in O(N) time.'
        ]
      }
    ]
  }
];
