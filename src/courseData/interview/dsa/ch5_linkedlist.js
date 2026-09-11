// Chapter 5 — Linked List (20 Comprehensive Lessons & Interview Problems)
import { createDsaLesson } from './dsaHelper.js'

export const ch5LinkedList = {
  chapterTitle: 'Linked List',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-linked-list',
      title: 'What is Linked List?',
      emoji: '🔗',
      difficulty: 'Beginner',
      englishDef: 'A Linked List is a linear dynamic data structure where elements (Nodes) are not stored in contiguous memory locations. Instead, each node contains data and a pointer (reference) to the next node.',
      hinglishExplain: 'Linked List ek train ke dibbon (Nodes) ki tarah hoti hai. Har dibbe mein saman (data) hota hai aur wo agle dibbe se ek kundi (Pointer) ke through juda hota hai.',
      code: `class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-array-vs-linked-list',
      title: 'Array vs Linked List',
      emoji: '⚖️',
      difficulty: 'Beginner',
      englishDef: 'Arrays provide O(1) random access but require contiguous memory and O(N) insertions. Linked Lists offer dynamic size and O(1) head insertion but require O(N) sequential traversal.',
      hinglishExplain: 'Array = Apartment building (room number se direct lookup O(1)). Linked List = Treasure Hunt (ek parchi doosri parchi ka address deti hai, no random access).',
      code: `// Array: Contiguous, Direct index lookup arr[i]
// LinkedList: Scattered in RAM, Node -> Node -> Node`
    }),

    createDsaLesson({
      id: 'dsa-linked-list-node',
      title: 'Node Structure',
      emoji: '🧩',
      difficulty: 'Beginner',
      englishDef: 'A Node is the fundamental building block of a linked list, containing at minimum: 1) Value payload (`val` or `data`), and 2) Next pointer reference (`next`).',
      hinglishExplain: 'Node ke 2 hisse hote hain: 1) Data part (jo value store kare), 2) Next Pointer (jo agle node ka memory address store kare).',
      code: `const node1 = new ListNode(10);
const node2 = new ListNode(20);
node1.next = node2; // Link node1 -> node2`
    }),

    createDsaLesson({
      id: 'dsa-singly-linked-list',
      title: 'Singly Linked List',
      emoji: '➡️',
      difficulty: 'Beginner',
      englishDef: 'In a Singly Linked List, navigation is strictly unidirectional (forward only from Head to Tail), where the tail node points to `null`.',
      hinglishExplain: 'One-way rasta! Sirf aage badh sakte ho (Head se Tail tak). Pichhe mudne ka koi pointer nahi hota.',
      code: `// Head -> [10] -> [20] -> [30] -> null`
    }),

    createDsaLesson({
      id: 'dsa-creating-linked-list',
      title: 'Creating a Linked List',
      emoji: '🛠️',
      difficulty: 'Beginner',
      englishDef: 'Creating a linked list involves initializing a Head node and dynamically appending successive child nodes.',
      hinglishExplain: 'Nodes create karke unke `.next` pointer ko aapas mein connect karna.',
      code: `class LinkedList {
  constructor() {
    this.head = null;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-traversing-linked-list',
      title: 'Traversing a Linked List',
      emoji: '🚶‍♂️',
      difficulty: 'Beginner',
      englishDef: 'Traversal begins at the Head pointer and iteratively follows `.next` references until reaching `null`, running in O(N) time.',
      hinglishExplain: 'Head se shuru karke jab tak `current !== null` na ho, aage badhte raho aur values print karo.',
      code: `function printList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next; // Move to next node
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-ll-insert-beginning',
      title: 'Insertion at Beginning',
      emoji: '📥',
      difficulty: 'Beginner',
      englishDef: 'Inserting at the head takes O(1) constant time: create a new node, point its `.next` to the existing Head, and update Head to the new node.',
      hinglishExplain: 'Array mein shuru mein daalna O(N) lagata hai, par Linked List mein shuru mein daalna instant O(1) hota hai!',
      code: `function insertAtBeginning(head, val) {
  const newNode = new ListNode(val);
  newNode.next = head;
  return newNode; // New head
}`
    }),

    createDsaLesson({
      id: 'dsa-ll-insert-end',
      title: 'Insertion at End',
      emoji: '🔚',
      difficulty: 'Beginner',
      englishDef: 'Inserting at the end takes O(N) traversal (or O(1) with a Tail pointer): traverse to the last node and set its `.next` to the new node.',
      hinglishExplain: 'Aakhri node tak travel karo aur uska `.next` naye node se jod do.',
      code: `function insertAtEnd(head, val) {
  const newNode = new ListNode(val);
  if (!head) return newNode;
  let curr = head;
  while (curr.next) curr = curr.next;
  curr.next = newNode;
  return head;
}`
    }),

    createDsaLesson({
      id: 'dsa-ll-insert-position',
      title: 'Insertion at Position',
      emoji: '📍',
      difficulty: 'Intermediate',
      englishDef: 'Inserting at position K requires traversing to node K-1 and updating pointers: `newNode.next = curr.next; curr.next = newNode;`.',
      hinglishExplain: 'K-th position par pahunch kar pointer todkar naya node beech mein fit karo.',
      code: `function insertAtPosition(head, val, pos) {
  if (pos === 0) return insertAtBeginning(head, val);
  let curr = head;
  for (let i = 0; i < pos - 1 && curr; i++) curr = curr.next;
  if (!curr) return head;
  const newNode = new ListNode(val);
  newNode.next = curr.next;
  curr.next = newNode;
  return head;
}`
    }),

    createDsaLesson({
      id: 'dsa-ll-deletion',
      title: 'Deletion in Linked List',
      emoji: '🗑️',
      difficulty: 'Intermediate',
      englishDef: 'Deleting a node requires bypassing it: `prev.next = curr.next`. Garbage collection cleans up the unreferenced node.',
      hinglishExplain: 'Pichhle node ka `.next` direct agle node se connect kar do, beech wala node automatically delete ho jata hai.',
      code: `function deleteNode(head, val) {
  if (!head) return null;
  if (head.val === val) return head.next;
  let curr = head;
  while (curr.next && curr.next.val !== val) curr = curr.next;
  if (curr.next) curr.next = curr.next.next; // Bypass
  return head;
}`
    }),

    createDsaLesson({
      id: 'dsa-ll-searching',
      title: 'Searching in Linked List',
      emoji: '🔍',
      difficulty: 'Beginner',
      englishDef: 'Searching sequentially inspects each node value from head to null, running in linear O(N) time.',
      hinglishExplain: 'Head se travel karte hue check karo kya `curr.val === target` hai.',
      code: `function searchLL(head, target) {
  let curr = head;
  while (curr) {
    if (curr.val === target) return true;
    curr = curr.next;
  }
  return false;
}`
    }),

    createDsaLesson({
      id: 'dsa-reverse-linked-list',
      title: 'Reverse Linked List',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: 'Reversing pointers in-place requires 3 pointers (`prev`, `curr`, `next`) to flip direction in O(N) time and O(1) space.',
      hinglishExplain: '3 pointers (prev, curr, next) use karke har node ka arrow pichhe ki taraf ghuma do. FAANG ka classic interview question!',
      code: `function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let nextNode = curr.next; // Save next
    curr.next = prev;         // Reverse arrow
    prev = curr;              // Advance prev
    curr = nextNode;          // Advance curr
  }
  return prev; // New head
}`
    }),

    createDsaLesson({
      id: 'dsa-doubly-linked-list',
      title: 'Doubly Linked List',
      emoji: '↔️',
      difficulty: 'Intermediate',
      englishDef: 'A Doubly Linked List has two pointers per node (`next` and `prev`), allowing bidirectional traversal and O(1) node deletion when a reference is given.',
      hinglishExplain: 'Two-way road! Har node aage aur pichhe dono se juda hota hai. Browser back/forward aur LRU Cache mein use hota hai.',
      code: `class DoublyNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-circular-linked-list',
      title: 'Circular Linked List',
      emoji: '⭕',
      difficulty: 'Intermediate',
      englishDef: 'In a Circular Linked List, the tail node points back to the Head node instead of null, forming a continuous closed loop.',
      hinglishExplain: 'Round-robin playlist ki tarah — aakhri gaana khatam hone par wapas pehla gaana shuru ho jata hai.',
      code: `// Tail.next -> Head (No null termination)`
    }),

    createDsaLesson({
      id: 'dsa-fast-slow-pointers',
      title: 'Fast and Slow Pointer (Tortoise & Hare)',
      emoji: '🐢🐇',
      difficulty: 'Intermediate',
      englishDef: 'The Tortoise and Hare algorithm moves two pointers at different speeds (Slow moves 1 step, Fast moves 2 steps) to find midpoints and detect cycles in O(N) time and O(1) space.',
      hinglishExplain: 'Slow pointer 1 step chalega, Fast pointer 2 steps chalega. Jab Fast end tak pahunchega, Slow theek beech mein (middle) hoga!',
      code: `function findMiddle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow; // Middle node
}`
    }),

    createDsaLesson({
      id: 'dsa-detect-cycle-linked-list',
      title: 'Detect Cycle (Floyd Cycle Finding Algorithm)',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: "Floyd's Cycle-Finding Algorithm detects loops in O(N) time and O(1) space: if a cycle exists, the fast pointer will eventually catch up and meet the slow pointer.",
      hinglishExplain: 'Agar circular track par do log bhagein, toh tez daudne wala slow wale ko kabhi na kabhi lap karke cross karega (slow === fast).',
      code: `function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // Cycle detected!
  }
  return false;
}`
    }),

    createDsaLesson({
      id: 'dsa-remove-cycle-linked-list',
      title: 'Remove Cycle in Linked List',
      emoji: '✂️',
      difficulty: 'Advanced',
      englishDef: 'Once a cycle is detected, reset Slow to Head while keeping Fast at meeting point. Move both 1 step at a time until they meet at cycle entry. Break the loop by setting the previous node `.next = null`.',
      hinglishExplain: 'Cycle ka start point dhoondhkar aakhri node ka `.next` null kar do taaki loop break ho jaye.',
      code: `// Cycle Removal Algorithm`
    }),

    createDsaLesson({
      id: 'dsa-merge-two-sorted-lists',
      title: 'Merge Two Sorted Linked Lists',
      emoji: '🤝',
      difficulty: 'Intermediate',
      englishDef: 'Merge two sorted linked lists by comparing head nodes and splicing smaller values into a new sorted list in O(N + M) time and O(1) auxiliary space.',
      hinglishExplain: 'Dono sorted lists ke heads ko compare karke ek single sorted linked list mein link karna (Merge Sort ka foundation).',
      code: `function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }
    else { curr.next = l2; l2 = l2.next; }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}`
    }),

    createDsaLesson({
      id: 'dsa-find-middle-node',
      title: 'Find Middle Node',
      emoji: '🎯',
      difficulty: 'Beginner',
      englishDef: 'Finding the middle node in a single pass using Fast & Slow pointers in O(N) time without measuring list length beforehand.',
      hinglishExplain: 'Fast 2x speed se chalta hai aur Slow 1x se. Fast ke end pahunchte hi Slow exact middle par hota hai.',
      code: `// LeetCode 876 Middle of the Linked List`
    }),

    createDsaLesson({
      id: 'dsa-linked-list-interview-problems',
      title: 'Linked List Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Intermediate',
      englishDef: 'Top Linked List interview problems: 1) Reverse a Linked List, 2) Merge K Sorted Lists, 3) LRU Cache (Doubly LL + Hash Map), 4) Reorder List, 5) Palindrome Linked List.',
      hinglishExplain: 'FAANG level problems jo interview mein 100% test hoti hain. Inka pattern master karo!',
      code: `// LRU Cache Node Definition`
    })
  ]
}
