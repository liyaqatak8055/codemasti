// Chapter 6 — Stack (17 Comprehensive Lessons & Interview Problems)
import { createDsaLesson } from './dsaHelper.js'

export const ch6Stack = {
  chapterTitle: 'Stack',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-stack',
      title: 'What is Stack?',
      emoji: '🥞',
      difficulty: 'Beginner',
      englishDef: 'A Stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. Elements can only be inserted (pushed) or removed (popped) from the Top of the stack.',
      hinglishExplain: 'Stack plates ke dher ki tarah hota hai. Jo plate sabse aakhir mein upar rakhi jayegi, wahi sabse pehle uthayi jayegi (Last In First Out - LIFO).',
      code: `const stack = [];
stack.push(10); // Push
stack.push(20);
console.log(stack.pop()); // 20 (LIFO)`
    }),

    createDsaLesson({
      id: 'dsa-lifo-principle',
      title: 'LIFO (Last In First Out)',
      emoji: '🔄',
      difficulty: 'Beginner',
      englishDef: 'The LIFO principle guarantees that the most recently added element is always the first one to be processed and removed.',
      hinglishExplain: 'Browser ka Back button ya Text Editor ka Undo (Ctrl+Z) LIFO principle par chalta hai — last action pehle undo hota hai.',
      code: `// Undo Stack:
// Action 1: Type "Hello"
// Action 2: Type "World"
// Undo -> Removes "World" first!`
    }),

    createDsaLesson({
      id: 'dsa-stack-operations',
      title: 'Stack Operations',
      emoji: '⚙️',
      difficulty: 'Beginner',
      englishDef: 'Primary stack operations: 1) push(val) O(1), 2) pop() O(1), 3) peek()/top() O(1), 4) isEmpty() O(1), 5) size() O(1).',
      hinglishExplain: 'Stack ke saare core operations constant time O(1) mein execute hote hain.',
      code: `// Push, Pop, Peek, IsEmpty`
    }),

    createDsaLesson({
      id: 'dsa-stack-push',
      title: 'Push Operation',
      emoji: '⬇️',
      difficulty: 'Beginner',
      englishDef: 'The push operation places a new element onto the top of the stack, running in O(1) constant time.',
      hinglishExplain: 'Stack ke top par naya item rakhna.',
      code: `function push(stack, item) { stack.push(item); }`
    }),

    createDsaLesson({
      id: 'dsa-stack-pop',
      title: 'Pop Operation',
      emoji: '⬆️',
      difficulty: 'Beginner',
      englishDef: 'The pop operation removes and returns the top element from the stack in O(1) time. Trying to pop an empty stack causes Stack Underflow.',
      hinglishExplain: 'Top wale element ko bahar nikalna. Empty stack se pop karne par Underflow error aata hai.',
      code: `function pop(stack) {
  if (stack.length === 0) throw new Error("Stack Underflow");
  return stack.pop();
}`
    }),

    createDsaLesson({
      id: 'dsa-stack-peek',
      title: 'Peek / Top Operation',
      emoji: '👁️',
      difficulty: 'Beginner',
      englishDef: 'Peek returns the value of the top element without removing it from the stack in O(1) time.',
      hinglishExplain: 'Bina element ko hataye bas dekhna ki top par kaun baitha hai.',
      code: `function peek(stack) { return stack[stack.length - 1]; }`
    }),

    createDsaLesson({
      id: 'dsa-stack-using-array',
      title: 'Stack using Array',
      emoji: '📦',
      difficulty: 'Beginner',
      englishDef: 'Implementing a stack using dynamic or fixed arrays with pointer `top` tracking the current element index.',
      hinglishExplain: 'Array se stack banana sabse simple aur cache-friendly tareeqa hai.',
      code: `class ArrayStack {
  constructor() { this.items = []; }
  push(x) { this.items.push(x); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}`
    }),

    createDsaLesson({
      id: 'dsa-stack-using-linked-list',
      title: 'Stack using Linked List',
      emoji: '🔗',
      difficulty: 'Intermediate',
      englishDef: 'Implementing a stack with a Linked List where Head represents the Top. Push and Pop operate on Head in strict O(1) time without array resizing.',
      hinglishExplain: 'Head par insert (push) aur head se delete (pop) karne se perfect O(1) stack banta hai.',
      code: `class LLStack {
  constructor() { this.top = null; }
  push(val) {
    const node = new ListNode(val);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (!this.top) return null;
    const val = this.top.val;
    this.top = this.top.next;
    return val;
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-applications-of-stack',
      title: 'Applications of Stack',
      emoji: '🌍',
      difficulty: 'Beginner',
      englishDef: 'Real-world stack applications: 1) Function Call Stack in JavaScript/C++, 2) Undo/Redo mechanisms, 3) Syntax validation in compilers, 4) Backtracking in mazes, 5) Expression evaluation.',
      hinglishExplain: 'Computer systems mein har programming language ka recursion Call Stack par chalta hai, code editors ka Undo stack use karta hai, aur HTML tag validation stack se hota hai.',
      code: `// JS Call Stack Demo: fn1 calls fn2 -> fn2 executes and pops -> fn1 finishes`
    }),

    createDsaLesson({
      id: 'dsa-balanced-parentheses',
      title: 'Balanced Parentheses (Valid Parentheses)',
      emoji: '⚖️',
      difficulty: 'Beginner',
      englishDef: 'Validating matching brackets `()`, `{}`, `[]` using a stack in O(N) time: push opening brackets and pop matching closing brackets.',
      hinglishExplain: 'Opening bracket aate hi stack mein dalo, closing aane par top se match karo. FAANG interviews ka most popular beginner question!',
      code: `function isValidParentheses(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}`
    }),

    createDsaLesson({
      id: 'dsa-infix-expression',
      title: 'Infix Expressions',
      emoji: '📝',
      difficulty: 'Intermediate',
      englishDef: 'Infix notation places operators between operands (e.g. `A + B`). It requires operator precedence and parentheses for evaluation.',
      hinglishExplain: 'Infix notation wahi hai jo hum normal maths mein likhte hain: `(A + B) * C`.',
      code: `// Infix: 3 + 5 * 2`
    }),

    createDsaLesson({
      id: 'dsa-prefix-expression',
      title: 'Prefix Expressions (Polish Notation)',
      emoji: '🔡',
      difficulty: 'Intermediate',
      englishDef: 'Prefix notation places operators before operands (e.g. `+ A B`). It eliminates the need for parentheses.',
      hinglishExplain: 'Operator pehle aata hai, operands baad mein: `+ 3 4`.',
      code: `// Prefix: + 3 5`
    }),

    createDsaLesson({
      id: 'dsa-postfix-expression',
      title: 'Postfix Expressions (Reverse Polish Notation)',
      emoji: '🔤',
      difficulty: 'Intermediate',
      englishDef: 'Postfix notation places operators after operands (e.g. `A B +`). Stack evaluation is linear O(N) without ambiguity.',
      hinglishExplain: 'Operands pehle aate hain aur operator baad mein: `3 5 +`. Compilers aur calculators isme convert karke calculate karte hain.',
      code: `// Postfix: 3 5 2 * + -> (5*2)+3 = 13`
    }),

    createDsaLesson({
      id: 'dsa-expression-evaluation',
      title: 'Expression Evaluation with Stack',
      emoji: '🧮',
      difficulty: 'Intermediate',
      englishDef: 'Evaluating Reverse Polish Notation using a stack: push numbers; on encountering an operator, pop two numbers, apply operation, and push result.',
      hinglishExplain: 'Stack se Postfix expression calculate karna: number aane par push karo, operator aane par 2 numbers nikal kar compute karo.',
      code: `function evalRPN(tokens) {
  const stack = [];
  for (let t of tokens) {
    if (!isNaN(t)) stack.push(Number(t));
    else {
      const b = stack.pop(), a = stack.pop();
      if (t === '+') stack.push(a + b);
      else if (t === '-') stack.push(a - b);
      else if (t === '*') stack.push(a * b);
      else if (t === '/') stack.push(Math.trunc(a / b));
    }
  }
  return stack.pop();
}`
    }),

    createDsaLesson({
      id: 'dsa-monotonic-stack',
      title: 'Monotonic Stack',
      emoji: '📈',
      difficulty: 'Advanced',
      englishDef: 'A Monotonic Stack maintains elements in strictly increasing or decreasing order. It solves Next Greater Element, Daily Temperatures, and Largest Rectangle in Histogram in O(N).',
      hinglishExplain: 'Stack jisme elements hamesha sorted order (increasing ya decreasing) mein rehte hain. O(N²) nested loops ko O(N) linear time mein badal deta hai!',
      code: `// Monotonic Increasing Stack`
    }),

    createDsaLesson({
      id: 'dsa-next-greater-element',
      title: 'Next Greater Element',
      emoji: '👉',
      difficulty: 'Intermediate',
      englishDef: 'Find the next greater element for each item in an array using a monotonic decreasing stack in linear O(N) time.',
      hinglishExplain: 'Array mein har element ke aage pehla bada number kaunsa hai? Monotonic Stack se O(N) mein solve hota hai.',
      code: `function nextGreaterElements(nums) {
  const res = new Array(nums.length).fill(-1);
  const stack = []; // Stores indices
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      res[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-stack-interview-problems',
      title: 'Stack Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Intermediate',
      englishDef: 'Top Stack interview problems: 1) Min Stack (O(1) getMin), 2) Daily Temperatures, 3) Trapping Rain Water with Stack, 4) Largest Rectangle in Histogram, 5) Basic Calculator.',
      hinglishExplain: 'Stack ke top interview questions jo Meta, Google, Amazon aur Microsoft mein repeatedly pooche jaate hain.',
      code: `// Min Stack Implementation with O(1) min retrieval`
    })
  ]
}
