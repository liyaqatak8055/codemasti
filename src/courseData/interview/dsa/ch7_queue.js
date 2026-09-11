// Chapter 7 — Queue (13 Comprehensive Lessons & Interview Problems)
import { createDsaLesson } from './dsaHelper.js'

export const ch7Queue = {
  chapterTitle: 'Queue',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-queue',
      title: 'What is Queue?',
      emoji: '🚶‍♂️',
      difficulty: 'Beginner',
      englishDef: 'A Queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. Elements are inserted at the Rear (Tail) and removed from the Front (Head).',
      hinglishExplain: 'Queue movie ticket line ki tarah hoti hai: jo pehle aayega wo pehle ticket lekar bahar niklega (First In First Out - FIFO).',
      code: `const queue = [];
queue.push(10); // Enqueue at rear
queue.push(20);
console.log(queue.shift()); // 10 (Dequeue from front - FIFO)`
    }),

    createDsaLesson({
      id: 'dsa-fifo-principle',
      title: 'FIFO (First In First Out)',
      emoji: '🔄',
      difficulty: 'Beginner',
      englishDef: 'The FIFO principle ensures fair ordering: elements are processed strictly in the chronological order of arrival.',
      hinglishExplain: 'First In First Out: Pehla aane wala pehle process hoga. Printer jobs, customer support lines aur CPU task scheduling FIFO par chalte hain.',
      code: `// Job Queue: Job A -> Job B -> Job C`
    }),

    createDsaLesson({
      id: 'dsa-queue-operations',
      title: 'Queue Operations',
      emoji: '⚙️',
      difficulty: 'Beginner',
      englishDef: 'Core queue operations: 1) enqueue(val) O(1), 2) dequeue() O(1), 3) front()/peek() O(1), 4) isEmpty() O(1), 5) size() O(1).',
      hinglishExplain: 'Queue ke saare standard operations constant time O(1) mein execute hote hain.',
      code: `// Enqueue, Dequeue, Front, IsEmpty`
    }),

    createDsaLesson({
      id: 'dsa-queue-enqueue',
      title: 'Enqueue Operation',
      emoji: '📥',
      difficulty: 'Beginner',
      englishDef: 'Enqueue inserts a new element at the rear (tail) of the queue in O(1) constant time.',
      hinglishExplain: 'Line ke aakhri (rear) mein naya person add hona.',
      code: `function enqueue(q, item) { q.push(item); }`
    }),

    createDsaLesson({
      id: 'dsa-queue-dequeue',
      title: 'Dequeue Operation',
      emoji: '📤',
      difficulty: 'Beginner',
      englishDef: 'Dequeue removes and returns the front element from the queue in O(1) time. Dequeuing an empty queue causes Queue Underflow.',
      hinglishExplain: 'Line ke aage (front) se first person ko remove karna.',
      code: `function dequeue(q) {
  if (q.length === 0) throw new Error("Queue Underflow");
  return q.shift();
}`
    }),

    createDsaLesson({
      id: 'dsa-front-and-rear',
      title: 'Front and Rear Pointers',
      emoji: '👉',
      difficulty: 'Beginner',
      englishDef: 'Front points to the oldest element ready to be removed; Rear points to the newest element most recently inserted.',
      hinglishExplain: 'Front = Exit door, Rear = Entry door!',
      code: `// Front -> [10] [20] [30] <- Rear`
    }),

    createDsaLesson({
      id: 'dsa-queue-using-array',
      title: 'Queue using Array',
      emoji: '📦',
      difficulty: 'Beginner',
      englishDef: 'Implementing a queue using an array with two pointer indices (front and rear) to avoid O(N) shift operations.',
      hinglishExplain: 'Array se queue banate waqt shift() O(N) hota hai, isliye pointer approach se O(1) dequeue banaya jata hai.',
      code: `class FastQueue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(item) { this.items[this.rear++] = item; }
  dequeue() {
    if (this.front === this.rear) return null;
    const val = this.items[this.front];
    delete this.items[this.front++];
    return val;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-queue-using-linked-list',
      title: 'Queue using Linked List',
      emoji: '🔗',
      difficulty: 'Intermediate',
      englishDef: 'Queue with a Singly Linked List having Head (Front) and Tail (Rear) pointers provides strict O(1) enqueue and O(1) dequeue without memory shifting.',
      hinglishExplain: 'Tail par insert karna O(1) aur Head se delete karna O(1) — best dynamic queue implementation.',
      code: `class LLQueue {
  constructor() { this.head = null; this.tail = null; }
  enqueue(val) {
    const node = new ListNode(val);
    if (!this.tail) { this.head = this.tail = node; }
    else { this.tail.next = node; this.tail = node; }
  }
  dequeue() {
    if (!this.head) return null;
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return val;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-circular-queue',
      title: 'Circular Queue (Ring Buffer)',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: 'A Circular Queue connects the last position back to the first position using modulo arithmetic `(rear + 1) % Capacity`, preventing wasted memory space in fixed arrays.',
      hinglishExplain: 'Ring buffer: jab aakhri slot bhar jaye aur shuru ke slots khali ho chuke hon, toh modulo `% capacity` se dobara index 0 use ho jata hai.',
      code: `class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.cap = k;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
  enQueue(value) {
    if (this.size === this.cap) return false;
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.cap;
    this.size++;
    return true;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-deque-double-ended-queue',
      title: 'Deque (Double Ended Queue)',
      emoji: '↔️',
      difficulty: 'Intermediate',
      englishDef: 'A Deque allows insertion and deletion from BOTH ends (Front and Rear) in O(1) time. It powers Sliding Window Maximum algorithms.',
      hinglishExplain: 'Dono taraf se insert aur delete karne ki azaadi! Stack aur Queue dono ka combo.',
      code: `// Deque operations: pushFront, pushBack, popFront, popBack`
    }),

    createDsaLesson({
      id: 'dsa-priority-queue-intro',
      title: 'Priority Queue Introduction',
      emoji: '⭐',
      difficulty: 'Intermediate',
      englishDef: 'A Priority Queue serves elements based on priority rather than arrival order. High priority items are dequeued first (implemented efficiently with Binary Heaps in O(log N)).',
      hinglishExplain: 'Hospital Emergency Room ki tarah: normal queue ke bajaye critical patient (high priority) pehle treat hota hai.',
      code: `// Priority Queue (Min Heap / Max Heap)`
    }),

    createDsaLesson({
      id: 'dsa-applications-of-queue',
      title: 'Applications of Queue',
      emoji: '🌍',
      difficulty: 'Beginner',
      englishDef: 'Queue applications: 1) BFS (Breadth First Search) in Graphs/Trees, 2) JavaScript Event Loop Task Queue, 3) Operating system CPU Round-Robin scheduling, 4) Asynchronous message queues (Kafka, RabbitMQ).',
      hinglishExplain: 'JavaScript ka Async Event Loop (Callback Queue / Microtask Queue) aur Graphs ka BFS traversal Queue par chalta hai.',
      code: `// BFS using Queue:
function bfs(root) {
  const q = [root];
  while (q.length) {
    const node = q.shift();
    console.log(node.val);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-queue-interview-problems',
      title: 'Queue Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Intermediate',
      englishDef: 'Top Queue interview problems: 1) Implement Queue using Stacks, 2) Sliding Window Maximum (Monotonic Deque), 3) Rotten Oranges (Multi-source BFS), 4) Design Circular Queue.',
      hinglishExplain: 'Queue ke most asked interview challenges (Rotten Oranges aur Sliding Window Maximum) step-by-step master karo.',
      code: `// Implement Queue using 2 Stacks (LeetCode 232)`
    })
  ]
}
