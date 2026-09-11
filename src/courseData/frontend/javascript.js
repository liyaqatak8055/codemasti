export const javascriptCourse = {
  id: 'javascript',
  title: 'JavaScript',
  description: 'Master Modern JavaScript from Basics to Advanced! JavaScript Basics, Arrays, Strings, Functions, Function Expressions, Function Overloading, Objects, Constructors, OOP Classes & Access Modifiers, Asynchronous JS, Callbacks, Promises, Event Loop, Async/Await, Exception Handling & DOM Manipulation — Masti Sir style mein!',
  icon: '⚡',
  category: 'frontend',
  certificateName: 'JAVASCRIPT',
  topicsCount: 30,
  practiceCount: 35,
  projectsCount: 8,
  hoursEstimate: 25,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: JAVASCRIPT BASICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'JavaScript Basics',
      lessons: [
        {
          id: 'js-intro',
          title: 'Introduction to JavaScript',
          emoji: '⚡',
          xpReward: 30,
          badgeName: 'JS Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript internet ki sabse powerful language hai! HTML-CSS body aur kapde hain toh JS uska tez dimaag hai! 1995 mein Brendan Eich ne ise sirf 10 din mein banaya tha! 🚀"',
            hint: '💡 Masti Sir: "Browser ke Console mein `console.log("Hello Masti!");` likho — ye JavaScript ka pehla jaadu hai!"',
            success: '🎉 Masti Sir: "Wah! JavaScript engine aur script tag ka funda clear ho gaya!"',
            mistake: '😅 Masti Sir: "Java aur JavaScript alag alag hain — jaise Car aur Carpet! Dono ka aapas mein koi rishta nahi hai! 😂"'
          },
          englishDef: 'JavaScript is a lightweight, cross-platform, single-threaded, interpreted (JIT-compiled) scripting language used to create dynamic, interactive web pages and fullstack server applications.',
          hinglishExplain: 'JavaScript website mein jaan daalti hai — button click hone par popup dikhana, validation check karna, backend se bina page reload kiye data laana. HTML se structure banta hai, CSS se styling hoti hai, aur JavaScript se logic aur interactivity chalti hai.',
          storyExplain: 'Socho ek Car showroom hai: HTML car ka loha aur structure hai, CSS uska paint aur seats hain, par bina Engine aur Wiring ke car chalegi nahi — wahi Engine aur Wiring JavaScript hai!',
          funnyExample: {
            scenario: 'Interviewer: "Java aur JavaScript mein kya relation hai?"\nJunior: "Sir, Java father hai aur JS unka smart beta!"\nInterviewer: "Bhaag yahan se! 😂"',
            punchline: 'Java is Object-Oriented compiled, JavaScript is dynamic scripting!'
          },
          memoryTrick: '3 Pillars of Web:\n- HTML: Skeleton (Structure)\n- CSS: Skin & Clothes (Design)\n- JavaScript: Brain & Muscles (Behavior & Action)',
          visualDiagram: {
            title: 'How Browser Runs JavaScript',
            nodes: ['HTML Parser meets <script>', 'V8 Engine Downloads JS', 'Parser creates AST (Abstract Syntax Tree)', 'Ignition Bytecode -> TurboFan Machine Code -> Execution'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Inside the V8 Engine:',
            steps: ['Lexer breaks code into tokens', 'Parser builds AST (Abstract Syntax Tree)', 'Ignition converts AST into Bytecode', 'TurboFan compiles hot code to binary machine code']
          },
          code: `// Welcome to JavaScript with Masti Sir! ⚡
console.log("Hello, Web Developers! 🚀");

// Simple arithmetic & dynamic interaction
let currentYear = 2026;
let birthYear = 2004;
let age = currentYear - birthYear;

console.log("Your Age is:", age);
console.log("JavaScript Engine is Ready!");`,
          codeBreakdown: [
            { part: 'console.log(...)', label: 'Prints messages or output directly into the browser DevTools console', color: '#3b82f6' },
            { part: 'let age = currentYear - birthYear', label: 'Dynamic mathematical computation at runtime', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Confusing Java with JavaScript (completely different technologies)',
            '❌ Placing heavy `<script>` tags in `<head>` without `defer` or `async`, blocking HTML parsing'
          ],
          proTips: [
            '💡 Always place `<script defer src="app.js"></script>` in the `<head>` or at the end of `<body>`',
            '💡 Use Chrome DevTools (F12 -> Console) as your instant scratchpad'
          ],
          interviewQuestions: [
            'What is JavaScript and how does JIT compilation work inside the V8 engine?',
            'What is the difference between synchronous script loading, `async`, and `defer`?'
          ],
          miniChallenge: 'Print your name, favorite programming language, and current year in the console using console.log().',
          quiz: {
            type: 'mcq',
            question: 'JavaScript kis type ki language hai?',
            options: ['Purely Compiled Language like C++', 'Dynamically-Typed Interpreted / JIT-Compiled Language', 'Only Markup Language', 'Database Query Language'],
            answer: 'Dynamically-Typed Interpreted / JIT-Compiled Language',
            explanation: 'JavaScript is dynamically typed and JIT-compiled (Just-In-Time) by engines like V8.'
          },
          summary: ['JS provides interactivity and dynamic logic to websites', 'JIT compiled inside V8 engine', 'defer/async ensures non-blocking page load'],
          flashcard: { q: 'JavaScript kisne aur kab create kiya?', a: 'Brendan Eich ne 1995 mein sirf 10 dino mein create kiya tha.' },
          funFact: '🎉 Fun Fact: JavaScript ka pehla naam "Mocha" tha, fir "LiveScript" hua aur aakhir mein marketing ke liye "JavaScript" rakha gaya!',
          challenge: {
            instruction: 'Create two variables for price and taxPercent, calculate total price and output with console.log.',
            initialCode: `// Calculate total price with tax
const price = 500;
const taxPercent = 18;
// Write calculation below:
const totalPrice = price + (price * taxPercent / 100);
console.log("Total Price:", totalPrice);`,
            validator: (code) => code.includes('totalPrice') && (code.includes('console.log') || code.includes('taxPercent'))
          }
        },
        {
          id: 'js-variables',
          title: 'Variables (var, let, const & Data Types)',
          emoji: '📦',
          xpReward: 35,
          badgeName: 'Memory Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Variables memory ke naam-wale dabbe hain! `var` 1995 ka leak hone wala dabba tha, modern JS mein 90% `const` aur 10% `let` use karo! 😎"',
            hint: '💡 Masti Sir: "`const` ka matlab reference lock hai — object ki property badal sakti hai par variable reassign nahi ho sakta!"',
            success: '🎉 Masti Sir: "Variables aur 7 Primitives ka funda ekdum crystal clear!"',
            mistake: '😅 Masti Sir: "`typeof null` object return karta hai — ye JS ka 30 saal purana famous bug hai, ghabrana mat! 😂"'
          },
          englishDef: 'Variables are named containers used to store data values. JavaScript supports block-scoped `let` and `const`, legacy function-scoped `var`, and handles 7 Primitive Data Types plus Reference Objects.',
          hinglishExplain: 'Variable ek dabba hai jisme hum data store karte hain. `let` se aisi value store karte hain jo baad mein change ho sakti hai (jaise score). `const` se aisi value jo fix rehti hai (jaise API URL). `var` purana ho chuka hai jo scope leak karta hai isliye use nahi karte.',
          storyExplain: 'Socho bank account: `const accountNumber = "98765"` (account number lock rehta hai, reassign nahi ho sakta). `let balance = 5000` (balance deposit/withdraw par badalta rehta hai).',
          funnyExample: {
            scenario: 'Junior dev with `var` in loop:\n`for(var i=0; i<3; i++) setTimeout(()=>console.log(i), 100);` -> prints 3, 3, 3 😱\nWith `let` -> prints 0, 1, 2 🎉',
            punchline: 'let is block-scoped, var leaks everywhere!'
          },
          memoryTrick: 'Variables Rule:\n- `const`: Default choice (Immutable binding)\n- `let`: When reassignment is needed\n- `var`: Never use in modern code\n- 7 Primitives: String, Number, BigInt, Boolean, Undefined, Null, Symbol',
          visualDiagram: {
            title: 'Stack vs Heap Memory',
            nodes: ['Call Stack (Primitives: let x = 10, const name = "Masti")', 'Heap Memory (Objects: { user: "Rahul", score: 95 })', 'Stack Reference pointer -> Heap Object'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Temporal Dead Zone (TDZ):',
            steps: ['let and const are hoisted to top of block', 'They remain uninitialized in TDZ until execution reaches declaration', 'Accessing them before declaration throws ReferenceError']
          },
          code: `// 1. Modern Variable Declarations
const platformName = "CodeMasti"; // Cannot be reassigned
let activeUsers = 1200;
activeUsers += 50; // Reassignment allowed

// 2. JavaScript Data Types
const studentName = "Aman";            // String
const totalMarks = 95.5;              // Number
const isPassed = true;                // Boolean
let batchSlot;                        // undefined
const emptyData = null;               // null (Intentional absence)
const bigNum = 9007199254740991n;     // BigInt
const uniqueKey = Symbol("id");       // Symbol

// 3. Reference Type (Object)
const student = { name: studentName, marks: totalMarks };
student.marks = 99; // Mutating property inside const is allowed!

console.log(typeof studentName, typeof totalMarks, typeof isPassed, typeof emptyData);`,
          codeBreakdown: [
            { part: 'const platformName = "CodeMasti"', label: 'Block-scoped immutable variable binding', color: '#3b82f6' },
            { part: 'let activeUsers = 1200', label: 'Block-scoped reassignable variable', color: '#10b981' },
            { part: 'typeof emptyData // "object"', label: 'Historical JS quirk where typeof null returns "object"', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Reassigning a `const` variable (`const a = 1; a = 2;` throws TypeError)',
            '❌ Accessing `let` or `const` before declaration hitting Temporal Dead Zone (TDZ)'
          ],
          proTips: [
            '💡 Always default to `const`; switch to `let` only when variable value needs reassignment',
            '💡 Use strict equality `===` instead of loose `==` to avoid automatic type coercion'
          ],
          interviewQuestions: [
            'What is the difference between `var`, `let`, and `const` regarding scope, hoisting, and re-declaration?',
            'What is the Temporal Dead Zone (TDZ)?'
          ],
          miniChallenge: 'Declare a `const` object representing a smartphone with properties brand, price, and inStock. Update its price property.',
          quiz: {
            type: 'mcq',
            question: 'JavaScript mein kaunsa data type Primitive nahi hai?',
            options: ['String', 'Number', 'Object', 'Boolean'],
            answer: 'Object',
            explanation: 'Object (including Arrays and Functions) is a Reference Type stored in Heap memory.'
          },
          summary: ['const is block-scoped immutable binding', 'let allows block-scoped reassignment', '7 primitive types stored in stack by value'],
          flashcard: { q: 'Temporal Dead Zone (TDZ) kya hota hai?', a: 'let/const declaration se pehle ka wo area jahan variable access karne par ReferenceError aata hai.' },
          funFact: '🎉 Fun Fact: JavaScript mein `NaN` ka type `number` hota hai! (`typeof NaN === "number"` 😂)',
          challenge: {
            instruction: 'Declare a const user object with name and role, and update role to "Admin".',
            initialCode: `const user = { name: "Kabir", role: "Student" };
// Update role below:
user.role = "Admin";
console.log(user);`,
            validator: (code) => code.includes('user.role') && code.includes('Admin')
          }
        },
        {
          id: 'js-operators',
          title: 'Operators (Arithmetic, Logical, Comparison & Ternary)',
          emoji: '➕',
          xpReward: 30,
          badgeName: 'Logic Warrior',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Operators data ke sath khelne ke tools hain! `==` aur `===` ka farak samajh liya toh 50% JS bugs khatam! Hamesha `===` use karo! 😎"',
            hint: '💡 Masti Sir: "Ternary operator `condition ? trueVal : falseVal` ek line ka if-else shortcut hai!"',
            success: '🎉 Masti Sir: "Operators and Nullish Coalescing (`??`) master ho gaya!"',
            mistake: '😅 Masti Sir: "`"5" + 2` banega `"52"` (string concatenation) par `"5" - 2` banega `3` (numeric conversion)! JS ka fun! 😂"'
          },
          englishDef: 'Operators perform mathematical calculations, string concatenations, logical comparisons, and ternary evaluations on operands.',
          hinglishExplain: 'Operators se hum mathematical calculation (+, -, *, /), comparison (===, !==, >, <), logical check (&&, ||, !), aur short decision making (ternary ?: aur nullish ??) karte hain.',
          storyExplain: 'Socho guard gate: `hasTicket && hasID` (dono hone chahiye - AND), `hasPass || isVIP` (koi ek ho - OR), `age >= 18 ? "Enter" : "Wait"` (ek line ka entry pass - Ternary).',
          funnyExample: {
            scenario: 'console.log([] + []); // ""\nconsole.log([] + {}); // "[object Object]"\nconsole.log(0 == "0"); // true (Loose)\nconsole.log(0 === "0"); // false (Strict)',
            punchline: 'Always use === for strict type check!'
          },
          memoryTrick: 'Operator Superstars:\n- `===` Strict equality (checks value AND type)\n- `&&` Logical AND (stops at first falsy)\n- `||` Logical OR (stops at first truthy)\n- `??` Nullish coalescing (checks ONLY null or undefined)\n- `?.` Optional chaining (safely access deep properties)',
          visualDiagram: {
            title: 'Comparison: == vs ===',
            nodes: ['5 == "5" -> True (Type Coerced)', '5 === "5" -> False (Number !== String)', 'null ?? "Default" -> "Default"'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Short-Circuit Evaluation:',
            steps: ['&& evaluates left operand; if false, returns it immediately without checking right', '|| evaluates left; if true, returns it immediately', '?? only checks if value is null or undefined (preserves 0 and false)']
          },
          code: `// 1. Arithmetic & Increment
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b, a % b, a ** b);

// 2. Strict Comparison
console.log(10 === "10"); // false (Strict: type mismatch)
console.log(10 == "10");  // true (Loose: coerced)

// 3. Logical & Nullish Coalescing (??)
const userRole = "Admin";
const isLoggedIn = true;
const canAccess = isLoggedIn && userRole === "Admin";

const userSetting = null;
const fallbackSetting = userSetting ?? "Default Dark Mode";

// 4. Ternary Operator
const score = 85;
const status = score >= 40 ? "Pass 🎓" : "Fail ❌";

console.log("Access:", canAccess, "| Setting:", fallbackSetting, "| Status:", status);`,
          codeBreakdown: [
            { part: '10 === "10" // false', label: 'Strict equality prevents accidental string-number coercion', color: '#3b82f6' },
            { part: 'userSetting ?? "Default"', label: 'Nullish operator falls back only when value is null or undefined', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Using `==` instead of `===` leading to unexpected type coercion bugs',
            '❌ Using `||` when `0` or `""` are valid intended values (use `??` instead)'
          ],
          proTips: [
            '💡 Use Optional Chaining `user?.profile?.avatar` with Nullish `?? "/default.png"` for robust defensive code',
            '💡 Avoid chaining more than 2 ternary operators for readability'
          ],
          interviewQuestions: [
            'What is the difference between `==` and `===` in JavaScript?',
            'How does the Nullish Coalescing operator (`??`) differ from the Logical OR operator (`||`)?'
          ],
          miniChallenge: 'Write a ternary expression that checks if an age is >= 18 and returns "Eligible to Vote", else "Minor".',
          quiz: {
            type: 'mcq',
            question: 'JavaScript mein `0 || "Default"` aur `0 ?? "Default"` ka result kya hoga?',
            options: ['"Default" aur "Default"', '"Default" aur 0', '0 aur "Default"', '0 aur 0'],
            answer: '"Default" aur 0',
            explanation: '`||` treats 0 as falsy and returns "Default", whereas `??` only checks for null/undefined so it preserves 0.'
          },
          summary: ['Use === for strict comparison', '?? handles null/undefined safely', 'Ternary ?: provides clean inline conditionals'],
          flashcard: { q: 'Nullish Coalescing (??) aur Logical OR (||) mein kya fark hai?', a: '|| har falsy value (0, "", false) par fallback karta hai, jabki ?? sirf null aur undefined par fallback karta hai.' },
          funFact: '🎉 Fun Fact: JavaScript mein `typeof NaN` Number hota hai aur `NaN === NaN` FALSE hota hai!',
          challenge: {
            instruction: 'Use ternary operator to set discount = 20 if isPremium is true, otherwise discount = 5.',
            initialCode: `const isPremium = true;
// Set discount with ternary:
const discount = isPremium ? 20 : 5;
console.log("Discount:", discount);`,
            validator: (code) => code.includes('isPremium ? 20 : 5') || (code.includes('?') && code.includes(':'))
          }
        },
        {
          id: 'js-control-statements',
          title: 'Control Statements (if-else, switch, loops & break/continue)',
          emoji: '🔀',
          xpReward: 35,
          badgeName: 'Flow Controller',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Control statements code ka traffic signal hain! Kab kaunsi road leni hai ye if-else aur loops decide karte hain! 🚦"',
            hint: '💡 Masti Sir: "Loops mein `break` poore loop ko khatam karta hai, aur `continue` sirf current round ko skip karke next round pe jata hai!"',
            success: '🎉 Masti Sir: "Loops and Switch statements controlled perfectly!"',
            mistake: '😅 Masti Sir: "Infinite loop mat bana dena warna browser tab crash ho jayega! `i++` condition update karna kabhi mat bhoolo! 😂"'
          },
          englishDef: 'Control flow statements direct the order of code execution using conditionals (`if-else`, `switch-case`) and iterative loops (`for`, `while`, `do-while`, `for...of`, `for...in`).',
          hinglishExplain: 'Control statements se hum decisions lete hain ki kab kaunsa code run hoga. `if-else` condition check karta hai, `switch` specific cases match karta hai, aur `for`/`while` loops kisi task ko bar-bar repeat karte hain jab tak condition true hai.',
          storyExplain: 'Traffic Police Officer: Agar signal Green hai toh "Go", Yellow hai toh "Slow", Red hai toh "Stop" (if-else). 10 students ko ek-ek karke certificate baantna (for loop).',
          funnyExample: {
            scenario: 'while(isAlive) {\n  eat();\n  sleep();\n  code();\n  repeat();\n}',
            punchline: 'The infinite programmer life loop!'
          },
          memoryTrick: 'Control Flow Arsenal:\n- `if / else if / else`: Branching based on boolean conditions\n- `switch (val) { case x: break; }`: Multi-way value matching\n- `for (let i=0; i<N; i++)`: Fixed counter loop\n- `for...of`: Iterate array values\n- `for...in`: Iterate object keys\n- `break`: Exit loop immediately\n- `continue`: Skip to next iteration',
          visualDiagram: {
            title: 'Control Flow Decision Tree',
            nodes: ['Condition Evaluated', 'True -> Execute Block A', 'False -> Execute Block B', 'Loop repeats until exit condition is met'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Loop Optimization in V8:',
            steps: ['Loop counter variable is allocated in CPU register', 'JIT compiler unrolls small tight loops for maximum execution speed', 'Guard clauses avoid deep nested if-else indentation']
          },
          code: `// 1. If-Else & Guard Clause
function getGrade(marks) {
  if (marks >= 90) return "A+ 🌟";
  if (marks >= 75) return "A 🥇";
  if (marks >= 60) return "B 🥈";
  return "Needs Improvement 📚";
}
console.log("Marks 88 Grade:", getGrade(88));

// 2. Switch Case
const dayCode = 3;
switch (dayCode) {
  case 1: console.log("Monday 🚀"); break;
  case 2: console.log("Tuesday 💻"); break;
  case 3: console.log("Wednesday ⚡"); break;
  default: console.log("Other Day 🎉");
}

// 3. For Loop with Break and Continue
console.log("Even Numbers (Skipping 4, Stopping at 8):");
for (let i = 1; i <= 10; i++) {
  if (i === 4) continue; // Skip 4
  if (i > 8) break;      // Stop loop when i > 8
  if (i % 2 === 0) console.log("->", i);
}

// 4. For...of Loop over Array
const frameworks = ["React", "Vue", "Next.js"];
for (const fw of frameworks) {
  console.log("Framework:", fw);
}`,
          codeBreakdown: [
            { part: 'if (marks >= 90) return "A+"', label: 'Guard clause pattern avoids nested pyramid code', color: '#3b82f6' },
            { part: 'continue // skips current turn', label: 'Skips remainder of loop body and moves to next turn', color: '#f59e0b' },
            { part: 'for (const fw of frameworks)', label: 'Modern clean syntax to iterate over iterable array values', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting `break` in `switch` cases, causing unintentional fallthrough',
            '❌ Creating infinite while loops by omitting the iteration step (`i++`)'
          ],
          proTips: [
            '💡 Use Guard Clauses (`if (!user) return;`) instead of nesting 4-5 layers of `if-else`',
            '💡 Use `for...of` for arrays and `for...in` for object keys'
          ],
          interviewQuestions: [
            'What is the difference between `for...of` and `for...in` in JavaScript?',
            'What happens if you omit the `break` statement in a switch-case block?'
          ],
          miniChallenge: 'Write a loop from 1 to 20 that prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.',
          quiz: {
            type: 'mcq',
            question: 'Loop mein `continue` statement kya karta hai?',
            options: ['Poora loop terminate karta hai', 'Sirf current iteration skip karke agle round par jata hai', 'Program ko exit karta hai', 'Variables ko reset karta hai'],
            answer: 'Sirf current iteration skip karke agle round par jata hai',
            explanation: '`continue` skips the rest of the current iteration and jumps to the next cycle, unlike `break` which halts the entire loop.'
          },
          summary: ['Guard clauses keep logic flat and clean', 'break stops loop, continue skips iteration', 'for...of iterates values, for...in iterates keys'],
          flashcard: { q: 'for...of aur for...in mein kya difference hai?', a: 'for...of array ke elements/values par iterate karta hai, jabki for...in object ke keys/indexes par iterate karta hai.' },
          funFact: '🎉 Fun Fact: JavaScript mein labels ke sath break use karke nested loops mein outer loop ko bhi direct break kiya ja sakta hai!',
          challenge: {
            instruction: 'Write a for loop that calculates the sum of numbers from 1 to 10.',
            initialCode: `let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);`,
            validator: (code) => code.includes('sum') && (code.includes('for') || code.includes('55'))
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: ARRAY & STRING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Array & String',
      lessons: [
        {
          id: 'js-arrays',
          title: 'Arrays (Creation, Indexing & Multi-dimensional)',
          emoji: '📚',
          xpReward: 30,
          badgeName: 'Array Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Array ek ordered list hai jisme ek sath kai items store hote hain! Index hamesha 0 se start hota hai — 0th index is the first king! 👑"',
            hint: '💡 Masti Sir: "Array ke last element ko access karne ke liye `arr.at(-1)` modern syntax use karo!"',
            success: '🎉 Masti Sir: "Array basics and multi-dimensional grids mastered!"',
            mistake: '😅 Masti Sir: "`arr[10]` access karoge jab length 3 ho toh error nahi aata, `undefined` aata hai! 😂"'
          },
          englishDef: 'An Array in JavaScript is a high-level, list-like object used to store multiple items under a single variable name with 0-indexed positions.',
          hinglishExplain: 'Array ek list ya dabbe ki train hai jisme hum bohot saare data items (strings, numbers, objects) ko order mein store karte hain. Array ka pehla element index 0 par hota hai, doosra index 1 par.',
          storyExplain: 'Egg Tray ya Train ke Coaches: Coach 0 (Engine ke pass), Coach 1, Coach 2... Har coach ka apna number (index) hota hai jisse passenger ko direct dhundha ja sakta hai.',
          funnyExample: {
            scenario: 'const arr = [1, 2, 3];\narr[10] = 99;\nconsole.log(arr.length); // 11! (Created 7 empty holes!) 😱',
            punchline: 'JavaScript arrays are dynamic and sparse!'
          },
          memoryTrick: 'Array Index Formula:\n- First element: `arr[0]` or `arr.at(0)`\n- Last element: `arr[arr.length - 1]` or `arr.at(-1)`\n- Length property: `arr.length`\n- Multi-dimensional: `matrix[row][col]`',
          visualDiagram: {
            title: 'Array Index Memory Representation',
            nodes: ['Index 0: "HTML"', 'Index 1: "CSS"', 'Index 2: "JS"', 'Index 3: "React"', 'Length = 4'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'V8 Fast vs Slow Arrays:',
            steps: ['Packed SMI (Small Integers) are stored as continuous C++ arrays (ultra fast)', 'Holey Arrays (with missing indices) switch to slower dictionary mode', 'Keep array types consistent for high performance']
          },
          code: `// 1. Array Creation & Access
const skills = ["HTML", "CSS", "JavaScript", "TypeScript"];
console.log("First Skill:", skills[0]);
console.log("Last Skill (Modern .at):", skills.at(-1));
console.log("Total Count:", skills.length);

// 2. Modifying Elements
skills[1] = "Tailwind CSS";

// 3. Multi-Dimensional Array (2D Matrix / Grid)
const ticTacToe = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
];
console.log("Center Element [1][1]:", ticTacToe[1][1]); // "X"

// 4. Array Destructuring & Spread
const [first, second, ...restSkills] = skills;
console.log("Destructured:", first, second, "Rest:", restSkills);`,
          codeBreakdown: [
            { part: 'skills.at(-1)', label: 'Modern ES2022 method to access the last element with negative index', color: '#3b82f6' },
            { part: 'ticTacToe[1][1]', label: 'Accessing row 1 and column 1 in a 2D matrix', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Assuming array indices start from 1 instead of 0',
            '❌ Checking array type with `typeof arr` (returns `"object"` instead of Array; use `Array.isArray(arr)` instead)'
          ],
          proTips: [
            '💡 Always verify if a variable is an array using `Array.isArray(myVar)`',
            '💡 Use `arr.at(-1)` instead of verbose `arr[arr.length - 1]`'
          ],
          interviewQuestions: [
            'How do you accurately check if a variable is an Array in JavaScript?',
            'What is the difference between dense and sparse arrays in V8 engine?'
          ],
          miniChallenge: 'Create a 2D array representing a 2x2 coordinate matrix and print the element at row 0, col 1.',
          quiz: {
            type: 'mcq',
            question: 'JavaScript mein variable Array hai ya nahi ye verify karne ka best tareeqa kya hai?',
            options: ['typeof arr === "array"', 'Array.isArray(arr)', 'arr instanceof String', 'arr.type == "array"'],
            answer: 'Array.isArray(arr)',
            explanation: '`typeof []` returns `"object"`, so `Array.isArray(arr)` is the standard reliable method.'
          },
          summary: ['0-indexed list-like data structure', 'arr.at(-1) grabs the last element cleanly', 'Array.isArray() checks valid arrays'],
          flashcard: { q: 'Array.isArray([]) kya return karta hai?', a: 'true (kyunki typeof [] object return karta hai, isliye Array.isArray use hota hai).' },
          funFact: '🎉 Fun Fact: JavaScript arrays heterogeneous hote hain — ek hi array mein string, number, boolean aur function sab sath mein reh sakte hain!',
          challenge: {
            instruction: 'Create an array of 3 fruits and print the length of the array.',
            initialCode: `const fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.length);`,
            validator: (code) => code.includes('fruits') && code.includes('.length')
          }
        },
        {
          id: 'js-array-methods',
          title: 'Array Methods (map, filter, reduce, slice, splice & sort)',
          emoji: '🛠️',
          xpReward: 35,
          badgeName: 'Functional Guru',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Array methods JavaScript developer ke super weapons hain! `map`, `filter`, aur `reduce` ko master kar liya toh 90% logic chudkiyon mein solve hoga! 🪄"',
            hint: '💡 Masti Sir: "`map` transformed array return karta hai, `filter` condition match karne wale items return karta hai, aur `reduce` poori list ko ek single value mein summarize karta hai!"',
            success: '🎉 Masti Sir: "Higher-order functional array transformation master ho gaya!"',
            mistake: '😅 Masti Sir: "`splice` original array ko mutate karta hai jabki `slice` ek nayi copy return karta hai bina original ko chede! ⚠️"'
          },
          englishDef: 'Array methods provide functional transformations and mutations: `map()` transforms each element, `filter()` selects matching items, `reduce()` accumulates values, `slice()` extracts portions immutably, and `splice()` modifies in-place.',
          hinglishExplain: 'Array methods se hum array ke elements ko transform karte hain bina manual for loop chalaye. `map` har item par function chala kar naya array deta hai. `filter` sirf matching items ko filter karta hai. `reduce` array ko jodkar ek single number/object bana deta hai.',
          storyExplain: 'Juice Factory: Fruits ki basket (`[Apple, Mango, Orange]`). `map` -> Har fruit ka juice glass ban gaya. `filter` -> Sirf meethe fruits chune. `reduce` -> Sab fruits ko mix karke ek bada cocktail jug bana diya!',
          funnyExample: {
            scenario: '[10, 5, 40, 25].sort(); // [10, 25, 40, 5] 😱 (Alphabetical sort!)\n[10, 5, 40, 25].sort((a,b) => a - b); // [5, 10, 25, 40] 🎉 (Numeric sort!)',
            punchline: 'Always provide a comparator (a, b) => a - b to .sort()!'
          },
          memoryTrick: 'Big 3 Array Powerhouses:\n- `map(fn)`: 1-to-1 transformation (Length same)\n- `filter(fn)`: 1-to-subset filtering (Length <= original)\n- `reduce(fn, init)`: List-to-one accumulation\n- `slice(start, end)`: Pure, immutable copy\n- `splice(start, count, ...items)`: Mutates original in-place',
          visualDiagram: {
            title: 'Map, Filter & Reduce Pipeline',
            nodes: ['Original: [1, 2, 3, 4]', 'map(x => x*2) -> [2, 4, 6, 8]', 'filter(x => x > 4) -> [6, 8]', 'reduce((sum, x) => sum + x, 0) -> 14'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Chaining & Immutability:',
            steps: ['map() allocates a new array in memory', 'filter() tests each predicate and pushes to result', 'Method chaining creates a clean declarative pipeline without side effects']
          },
          code: `const numbers = [10, 20, 30, 40, 50];

// 1. Map: Transform elements
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// 2. Filter: Select elements matching condition
const above25 = numbers.filter(n => n > 25);
console.log("Above 25:", above25);

// 3. Reduce: Accumulate into single total
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum:", totalSum);

// 4. Find & Some & Every
const firstBig = numbers.find(n => n > 35);
const hasNegative = numbers.some(n => n < 0);
console.log("First > 35:", firstBig, "| Has Negative:", hasNegative);

// 5. Slice (Non-destructive) vs Splice (Mutating)
const sliced = numbers.slice(1, 4); // [20, 30, 40] (numbers unchanged)
console.log("Sliced Copy:", sliced);`,
          codeBreakdown: [
            { part: 'numbers.map(n => n * 2)', label: 'Creates a brand new array with each number doubled', color: '#3b82f6' },
            { part: 'numbers.reduce((acc, curr) => acc + curr, 0)', label: 'Accumulator starts at 0 and adds each item sequentially', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling `.sort()` without comparator on numbers (`[1, 10, 2].sort()` produces `[1, 10, 2]`)',
            '❌ Modifying state directly in React with `.splice()` instead of immutable `.filter()` / `.slice()`'
          ],
          proTips: [
            '💡 In modern React/Redux development, prefer immutable methods (`map`, `filter`, `toSorted`) to avoid accidental state mutation',
            '💡 Always pass initial value (e.g. `0` or `{}`) as the second argument to `reduce()`'
          ],
          interviewQuestions: [
            'What is the difference between `map()` and `forEach()`?',
            'Explain how `reduce()` works with an accumulator and initial value.',
            'What is the difference between `slice()` and `splice()`?'
          ],
          miniChallenge: 'Given an array of product prices `[100, 200, 300]`, use map to apply a 10% discount to all of them.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa method original array ko mutate (change) NAHI karta?',
            options: ['splice()', 'push()', 'map()', 'sort()'],
            answer: 'map()',
            explanation: '`map()` is a pure functional method that returns a brand new array without modifying the source array.'
          },
          summary: ['map() transforms, filter() selects, reduce() accumulates', 'slice() is immutable, splice() mutates', 'Always use comparator for numeric sort'],
          flashcard: { q: 'map() aur forEach() mein kya main difference hai?', a: 'map() ek naya transformed array return karta hai jabki forEach() undefined return karta hai aur side effects ke liye use hota hai.' },
          funFact: '🎉 Fun Fact: Modern JavaScript (ES2023) mein `toSorted()`, `toReversed()`, aur `toSpliced()` methods add kiye gaye hain jo original array ko mutate kiye bina copy return karte hain!',
          challenge: {
            instruction: 'Use filter to get all numbers greater than 50 from [25, 60, 15, 80, 45, 99].',
            initialCode: `const scores = [25, 60, 15, 80, 45, 99];
// Filter scores > 50:
const passing = scores.filter(s => s > 50);
console.log("Passing:", passing);`,
            validator: (code) => code.includes('scores.filter') && code.includes('> 50')
          }
        },
        {
          id: 'js-strings',
          title: 'Strings & Template Literals',
          emoji: '🔤',
          xpReward: 30,
          badgeName: 'Text Crafter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Strings text data represent karte hain! Purane zamane ke single/double quotes ke baad Template Literals (`\${name}`) ne developer life aasan bana di! 📝"',
            hint: '💡 Masti Sir: "Strings immutable hoti hain — agar `str[0] = "X"` karoge toh error nahi aayega par string change bhi nahi hogi!"',
            success: '🎉 Masti Sir: "Strings and Template Literals mastered!"',
            mistake: '😅 Masti Sir: "Backticks (``) aur Single quotes (\'\') mein confuse mat hona — multi-line aur \${} sirf backticks mein chalta hai! 😂"'
          },
          englishDef: 'Strings in JavaScript are immutable sequences of UTF-16 code units used to represent text. Modern ES6 template literals enclosed by backticks (``) support multi-line text and string interpolation via `${expression}`.',
          hinglishExplain: 'String text data store karta hai. JavaScript mein strings immutable (un-changeable) hoti hain. Template literals (backticks ``) se hum direct string ke andar `${variable}` likh sakte hain bina `+` operator ke.',
          storyExplain: 'Socho ek printed newspaper: Tum newspaper ke print par pen se direct letter change nahi kar sakte (Immutable). Agar naya text chahiye toh naya page print hoga (New string return hogi).',
          funnyExample: {
            scenario: 'Old style:\n"Hello " + user + ", you have " + points + " points!"\nModern ES6:\n`Hello ${user}, you have ${points} points! 🎉`',
            punchline: 'Template literals make string concatenation effortless!'
          },
          memoryTrick: 'String Superpowers:\n- Double/Single quotes: `"Hello"` / \'Hello\'\n- Template Literals: `` `Hello ${name}` ``\n- Multi-line support: Direct enter inside backticks\n- Immutable: Methods return new string, original stays intact',
          visualDiagram: {
            title: 'Template Literal Interpolation',
            nodes: ['Backtick container: `...`', '${name} evaluated dynamically', 'Multi-line preserved automatically', 'Final merged string created in memory'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'String Immutability in Memory:',
            steps: ['Strings are stored in the String Pool in V8', 'Modifying a string creates a completely new string in memory', 'Garbage collector cleans unreferenced old strings']
          },
          code: `// 1. String Declarations
const greeting = "Namaste";
const platform = 'CodeMasti';

// 2. Modern Template Literals with Expressions
const student = "Rohan";
const completedLessons = 15;
const totalLessons = 25;

const statusMessage = \`Welcome back, \${student}! 🚀
Your Progress: \${completedLessons}/\${totalLessons} (\${Math.round((completedLessons / totalLessons) * 100)}%)
Keep up the great work!\`;

console.log(statusMessage);

// 3. String Length & Indexing
console.log("Length:", platform.length);
console.log("First Char:", platform[0], "| Last Char:", platform.at(-1));`,
          codeBreakdown: [
            { part: '`Welcome back, ${student}!`', label: 'Template literal interpolates JavaScript expression inside text', color: '#3b82f6' },
            { part: 'platform.length', label: 'Property indicating total UTF-16 characters in string', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Trying to mutate string index directly (`str[0] = "Z"` fails silently in non-strict mode)',
            '❌ Forgetting backticks when using `${variable}` syntax'
          ],
          proTips: [
            '💡 Use template literals for all multi-line strings, SQL queries, and HTML templates',
            '💡 Use `.trim()` before validating user input strings from forms'
          ],
          interviewQuestions: [
            'What does it mean that strings are immutable in JavaScript?',
            'What advantages do template literals have over traditional string concatenation?'
          ],
          miniChallenge: 'Create a template literal that formats an invoice summary with item name, quantity, and total price calculated inside ${}.',
          quiz: {
            type: 'mcq',
            question: 'Agar `const str = "Code"; str[0] = "M";` karein toh `str` ki value kya hogi?',
            options: ['"Mode"', '"Code"', 'TypeError', 'undefined'],
            answer: '"Code"',
            explanation: 'JavaScript strings are immutable, so individual character index assignment fails silently without changing the original string.'
          },
          summary: ['Strings are immutable UTF-16 text sequences', 'Template literals support multi-line and ${} expressions', 'Methods return fresh new strings'],
          flashcard: { q: 'Template literal mein expression embed karne ke liye kya syntax use hota hai?', a: '`${expression}` backticks (``) ke andar.' },
          funFact: '🎉 Fun Fact: Tagged template literals se aap advanced DSLs jaise `styled.div\`color: red;\`` (Styled Components) aur GraphQL queries bana sakte hain!',
          challenge: {
            instruction: 'Create a template literal greeting string combining name and score variables.',
            initialCode: `const name = "Aarav";
const score = 98;
const message = \`Student: \${name}, Score: \${score}\`;
console.log(message);`,
            validator: (code) => code.includes('${name}') && code.includes('${score}')
          }
        },
        {
          id: 'js-string-methods',
          title: 'String Methods (slice, substring, replace, split, trim & includes)',
          emoji: '✂️',
          xpReward: 35,
          badgeName: 'String Surgeon',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "String methods se hum text ko cut, clean, search aur split karte hain! `includes`, `replace`, aur `split` real projects mein roz use hote hain! 💡"',
            hint: '💡 Masti Sir: "CSV data ya sentence ko words mein todna ho toh `str.split(" ")` use karo!"',
            success: '🎉 Masti Sir: "String methods mastery complete!"',
            mistake: '😅 Masti Sir: "`replace()` sirf pehle match ko replace karta hai — sabhi matches ke liye `replaceAll()` ya regex `/g` lagao! 😂"'
          },
          englishDef: 'JavaScript provides built-in string methods to inspect, extract, transform, and search text data including `slice()`, `substring()`, `replace()`, `replaceAll()`, `split()`, `trim()`, and `includes()`.',
          hinglishExplain: 'String methods se hum text ko modify aur search karte hain: `slice(start, end)` text ka hissa kaat-ta hai, `split(",")` string ko todkar array banata hai, `trim()` faltu spaces hatata hai, `includes("word")` check karta hai ki word maujood hai ya nahi.',
          storyExplain: 'Search Engine & Cleaner: User search box mein "  javascript course  " type karta hai. Pehle `trim()` se space hatai, `toLowerCase()` se case match kiya, fir `includes("javascript")` se relevant results dikhaye.',
          funnyExample: {
            scenario: '"I love python, python is cool".replace("python", "JS");\n// -> "I love JS, python is cool" (Only 1st replaced!)\nUse .replaceAll("python", "JS")\n// -> "I love JS, JS is cool" 🎉',
            punchline: 'replaceAll() cleans every occurrence!'
          },
          memoryTrick: 'Essential String Methods:\n- `.includes(sub)`: Checks substring (returns true/false)\n- `.slice(start, end)`: Extracts slice (supports negative index)\n- `.split(delimiter)`: Converts string -> Array\n- `.trim()`: Removes start & end whitespace\n- `.toLowerCase()` / `.toUpperCase()`: Normalizes casing\n- `.replaceAll(old, new)`: Replaces all occurrences',
          visualDiagram: {
            title: 'String Methods Transformation',
            nodes: ['Input: "  JavaScript  "', '.trim() -> "JavaScript"', '.toUpperCase() -> "JAVASCRIPT"', '.slice(0, 4) -> "JAVA"', '.split("") -> ["J","A","V","A"]'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Search & Replace Performance:',
            steps: ['indexOf and includes use Boyer-Moore or SIMD optimized byte scanning', 'split() creates an array of substrings sharing memory pointers where possible', 'Regular expressions compile into bytecode for fast pattern matching']
          },
          code: `const rawText = "  Master Modern JavaScript with CodeMasti!  ";

// 1. Cleaning & Casing
const cleanText = rawText.trim();
console.log("Trimmed:", cleanText);
console.log("Upper:", cleanText.toUpperCase());

// 2. Searching
console.log("Includes 'JavaScript':", cleanText.includes("JavaScript")); // true
console.log("Starts with 'Master':", cleanText.startsWith("Master"));     // true

// 3. Slicing Substrings
console.log("Slice (0 to 6):", cleanText.slice(0, 6)); // "Master"
console.log("Last 10 chars:", cleanText.slice(-10));  // "CodeMasti!"

// 4. Replacing
const updated = cleanText.replaceAll("JavaScript", "Fullstack JS");
console.log("Replaced:", updated);

// 5. Splitting into Array & Joining
const words = cleanText.split(" ");
console.log("Words Array:", words);
console.log("Slug format:", words.join("-").toLowerCase());`,
          codeBreakdown: [
            { part: 'cleanText.includes("JavaScript")', label: 'Case-sensitive boolean check for substring existence', color: '#3b82f6' },
            { part: 'cleanText.split(" ")', label: 'Splits string by spaces into an Array of word tokens', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Expecting `includes()` to be case-insensitive (always convert to `.toLowerCase()` before checking)',
            '❌ Using `replace()` expecting all occurrences to change (use `replaceAll()` instead)'
          ],
          proTips: [
            '💡 Always sanitize user inputs with `.trim().toLowerCase()` before performing database search queries',
            '💡 Use `str.padStart(2, "0")` to easily format numbers like `"09"` for clocks and dates'
          ],
          interviewQuestions: [
            'What is the difference between `slice()` and `substring()` on strings?',
            'How do you convert a sentence into a URL-friendly slug in JavaScript?'
          ],
          miniChallenge: 'Take a string "apple,banana,mango", split it by comma into an array, and join it with " | ".',
          quiz: {
            type: 'mcq',
            question: '"developer".slice(0, 3) kya return karega?',
            options: ['"dev"', '"deve"', '"eve"', '"velo"'],
            answer: '"dev"',
            explanation: '`slice(0, 3)` extracts characters from index 0 up to (but not including) index 3 -> "d", "e", "v".'
          },
          summary: ['slice() extracts substring cleanly', 'split() converts string to array', 'replaceAll() replaces all matches', 'trim() strips whitespace'],
          flashcard: { q: 'String ko words ke array mein convert karne ke liye kaunsa method use karte hain?', a: 'str.split(" ")' },
          funFact: '🎉 Fun Fact: `String.prototype.repeat(3)` se aap ek hi line mein `"Ha".repeat(3)` karke `"HaHaHa"` generate kar sakte hain!',
          challenge: {
            instruction: 'Clean the dirty string "   hello world   " and convert it to uppercase.',
            initialCode: `const dirty = "   hello world   ";
const result = dirty.trim().toUpperCase();
console.log(result);`,
            validator: (code) => code.includes('.trim()') && code.includes('.toUpperCase()')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: FUNCTION & OBJECT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Function & Object',
      lessons: [
        {
          id: 'js-functions',
          title: 'Functions (Declarations, Parameters & Arrow Functions)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Function Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Functions reusable machines hain! Ek baar banao, sau baar chalao! Arrow functions `() => {}` modern JS ki jaan hain! 🚀"',
            hint: '💡 Masti Sir: "Arrow functions ka apna `this` nahi hota — wo surrounding scope ka `this` lexical inherit karte hain!"',
            success: '🎉 Masti Sir: "Functions and Arrow syntax crystal clear!"',
            mistake: '😅 Masti Sir: "Function declaration hoisted hoti hai (pehle call kar sakte ho), par Arrow function variable mein hoti hai toh TDZ mein rehti hai! ⚠️"'
          },
          englishDef: 'Functions are reusable blocks of code designed to perform specific tasks. JavaScript supports Function Declarations (hoisted), Function Expressions, and ES6 Arrow Functions with concise syntax and lexical `this` binding.',
          hinglishExplain: 'Function ek aisi machine hai jisme hum inputs (parameters) daalte hain, wo calculation karta hai, aur result (return value) deta hai. Arrow function `const add = (a, b) => a + b;` chhota aur modern tareeqa hai function likhne ka.',
          storyExplain: 'Coffee Vending Machine: Parameter hai coffee beans aur milk. Function ke andar process hota hai (grind & brew). Return value milti hai: Hot Cappuccino Cup!',
          funnyExample: {
            scenario: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5)); // 20 🎉\nOne line, no curly braces, automatic return!',
            punchline: 'Arrow functions keep code sleek and clean!'
          },
          memoryTrick: 'Function Flavors:\n- Declaration: `function add(a,b) { return a+b; }` (Hoisted)\n- Arrow: `const add = (a,b) => a + b;` (Concise, lexical `this`)\n- Default Params: `function greet(name = "Guest")`\n- Rest Params: `function sum(...nums)`',
          visualDiagram: {
            title: 'Function Execution Context',
            nodes: ['Function Invocation add(5, 10)', 'New Execution Context Created', 'Local Scope Variables Allocated', 'Return Value popped to Caller, Context destroyed'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Call Stack Execution:',
            steps: ['Function call pushes new stack frame onto Call Stack', 'Local variables and arguments object are created', 'Code executes until return statement', 'Stack frame pops off and control returns to caller']
          },
          code: `// 1. Function Declaration (Hoisted)
function calculateTax(amount, taxRate = 0.18) {
  return amount * taxRate;
}
console.log("Tax on 1000:", calculateTax(1000));

// 2. ES6 Arrow Function (Concise & Implicit Return)
const formatPrice = (price, currency = "₹") => \`\${currency}\${price.toFixed(2)}\`;
console.log("Formatted:", formatPrice(1250));

// 3. Rest Parameters (Infinite arguments)
const calculateTotal = (...prices) => prices.reduce((sum, p) => sum + p, 0);
console.log("Total Cart Value:", calculateTotal(299, 499, 199, 999));`,
          codeBreakdown: [
            { part: 'taxRate = 0.18', label: 'Default parameter used if caller omits second argument', color: '#3b82f6' },
            { part: '(...prices) => ...', label: 'Rest parameter gathers all arguments into an array', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling an Arrow Function before its `const` declaration (throws ReferenceError due to TDZ)',
            '❌ Using Arrow functions as Object methods when you need `this` to point to the parent object'
          ],
          proTips: [
            '💡 Use Arrow functions for array callbacks (`map`, `filter`) and short utility helpers',
            '💡 Use standard function declarations for top-level component/module functions where hoisting is desirable'
          ],
          interviewQuestions: [
            'What are the key differences between regular function declarations and Arrow functions?',
            'How does lexical `this` binding work in Arrow functions?'
          ],
          miniChallenge: 'Write an arrow function `isEven(num)` that returns true if a number is even, else false.',
          quiz: {
            type: 'mcq',
            question: 'Arrow functions ke bare mein kaunsa statement SAHI hai?',
            options: ['Unka apna independent `this` hota hai', 'Wo surround lexical scope ka `this` inherit karte hain', 'Unhe `new` keyword ke sath construct kiya ja sakta hai', 'Wo hamesha function declaration se slow hote hain'],
            answer: 'Wo surround lexical scope ka `this` inherit karte hain',
            explanation: 'Arrow functions do not bind their own `this`; they lexically capture the `this` value of the enclosing execution context.'
          },
          summary: ['Declarations are hoisted, arrow functions are lexical', 'Default parameters prevent undefined bugs', 'Rest parameters bundle arbitrary arguments into an array'],
          flashcard: { q: 'Arrow function mein `this` keyword kaise behave karta hai?', a: 'Arrow function ka apna `this` nahi hota, wo surrounding (parent) scope se `this` lexically inherit karta hai.' },
          funFact: '🎉 Fun Fact: Agar arrow function sirf ek hi expression return karta hai toh curly braces `{}` aur `return` keyword dono optional hote hain!',
          challenge: {
            instruction: 'Write an arrow function square that takes a number x and returns x squared.',
            initialCode: `const square = x => x * x;
console.log("Square of 6:", square(6));`,
            validator: (code) => code.includes('x * x') || code.includes('x ** 2')
          }
        },
        {
          id: 'js-function-expressions',
          title: 'Function Expressions (Anonymous Functions & IIFE)',
          emoji: '🎭',
          xpReward: 30,
          badgeName: 'Scope Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript mein functions First-Class Citizens hain! Matlab function ko variable mein store kar sakte ho, doosre function mein pass kar sakte ho, aur return bhi kar sakte ho! 🎩"',
            hint: '💡 Masti Sir: "IIFE `(function() { ... })()` banate hi turant execute ho jata hai aur global scope ko pollute nahi karta!"',
            success: '🎉 Masti Sir: "Function Expressions and First-Class nature mastered!"',
            mistake: '😅 Masti Sir: "Function expression ko define karne se pehle call karoge toh `ReferenceError` aayega kyunki wo variable mein stored hai! ⚠️"'
          },
          englishDef: 'A Function Expression defines a function inside an expression assigned to a variable. JavaScript treats functions as First-Class Citizens, allowing them to be passed as arguments, returned from other functions, or invoked immediately as IIFEs (Immediately Invoked Function Expressions).',
          hinglishExplain: 'Function Expression mein hum function ko ek variable mein assign karte hain. JavaScript mein function ko kisi bhi regular value ki tarah treat kiya jata hai — use variable mein store kar sakte hain, doosre function mein argument bhej sakte hain (Callbacks), aur function se naya function return kar sakte hain (Higher Order Functions).',
          storyExplain: 'Ticket Counter: Function declaration ek permanent building hai. Function expression ek mobile ticket machine hai jise aap kisi bhi counter (variable) par fit kar sakte ho aur zaroorat padne par idhar-udhar pass kar sakte ho.',
          funnyExample: {
            scenario: '// IIFE: Runs immediately!\n(function() {\n  const secretKey = "Masti999";\n  console.log("Initialized privately!");\n})();\nconsole.log(typeof secretKey); // undefined (Safe!) 🎉',
            punchline: 'IIFE shields your secrets from the global window object!'
          },
          memoryTrick: 'First-Class Function Powers:\n1. Store in variable: `const fn = function() {}`\n2. Pass as argument: `setTimeout(fn, 1000)`\n3. Return from function: `function outer() { return fn; }`\n4. IIFE: `(function() { /* private code */ })()`',
          visualDiagram: {
            title: 'First-Class Functions Pipeline',
            nodes: ['Function defined as value', 'Passed as argument to Higher-Order Function', 'Executed dynamically at runtime', 'Returned to outer caller'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Scope Isolation via IIFE:',
            steps: ['IIFE creates a private execution context immediately on script load', 'Internal variables exist only during execution', 'Prevents accidental collisions in the global Window / Global scope']
          },
          code: `// 1. Function Expression (Anonymous)
const greetUser = function(userName) {
  return \`Welcome to CodeMasti, \${userName}! 🌟\`;
};
console.log(greetUser("Kabir"));

// 2. Passing Function as Argument (First-Class Citizen)
function executeAction(actionFn, data) {
  console.log("Executing Action Pipeline...");
  return actionFn(data);
}
console.log(executeAction(greetUser, "Ananya"));

// 3. Immediately Invoked Function Expression (IIFE)
const appConfig = (function() {
  const apiKey = "SECRET_KEY_8829"; // Private variable
  return {
    getMode: () => "Production",
    isSecure: () => true
  };
})();

console.log("App Mode:", appConfig.getMode());`,
          codeBreakdown: [
            { part: 'const greetUser = function(userName)', label: 'Function expression assigned to constant variable', color: '#3b82f6' },
            { part: '(function() { ... })()', label: 'IIFE executes immediately and encapsulates private variables', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling a function expression before its declaration line (unlike function declarations, expressions are not hoisted with definition)'
          ],
          proTips: [
            '💡 Use Named Function Expressions `const f = function helper() {}` when debugging to get clear stack traces in DevTools',
            '💡 In modern JS, ES Modules (`import/export`) have mostly replaced the need for manual IIFEs for module bundling'
          ],
          interviewQuestions: [
            'What does it mean that functions are "First-Class Citizens" in JavaScript?',
            'What is an IIFE and why was it historically used before ES Modules?'
          ],
          miniChallenge: 'Create a function expression `calculateDiscount` and pass it to another function that prints the final price.',
          quiz: {
            type: 'mcq',
            question: 'IIFE (Immediately Invoked Function Expression) ka primary use case kya hai?',
            options: ['Data ko database mein save karna', 'Private scope create karke global scope pollution se bachna', 'CSS animation trigger karna', 'Loops ko fast chalana'],
            answer: 'Private scope create karke global scope pollution se bachna',
            explanation: 'An IIFE creates a private lexical scope immediately, preventing variables from leaking into the global namespace.'
          },
          summary: ['Functions are first-class values in JavaScript', 'Expressions are assigned to variables', 'IIFEs encapsulate private module state'],
          flashcard: { q: 'JavaScript mein "First-Class Function" ka kya matlab hai?', a: 'Functions ko kisi bhi regular variable ki tarah store, argument ke roop mein pass, aur return kiya ja sakta hai.' },
          funFact: '🎉 Fun Fact: jQuery aur puraane saare JavaScript libraries IIFE ke andar wrap karke hi distribute kiye jaate the!',
          challenge: {
            instruction: 'Create an IIFE that returns an object with a version property set to "1.0.0".',
            initialCode: `const myModule = (function() {
  return { version: "1.0.0" };
})();
console.log(myModule.version);`,
            validator: (code) => code.includes('function') && code.includes('version') && code.includes('1.0.0')
          }
        },
        {
          id: 'js-function-overloading',
          title: 'Function Overloading (Arguments & Rest Signatures)',
          emoji: '🔀',
          xpReward: 30,
          badgeName: 'Signature Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C++ ya Java ki tarah JavaScript mein native function overloading nahi hoti! Par hum rest parameters aur `arguments` check karke multiple signatures emulate karte hain! 😎"',
            hint: '💡 Masti Sir: "`typeof` aur `arguments.length` check karke function ko dynamic banao!"',
            success: '🎉 Masti Sir: "JavaScript Function Overloading pattern mastered!"',
            mistake: '😅 Masti Sir: "Agar same naam ke do `function foo()` likh doge toh doosra pehle wale ko overwrite kar dega! Overload emulate karne ke liye single function mein check lagao! 😂"'
          },
          englishDef: 'JavaScript does not natively support method overloading with multiple signatures of the same name. Instead, developers emulate overloading using default parameters, Rest parameters (`...args`), or argument type checking inside a single function.',
          hinglishExplain: 'Java ya C++ mein same naam ke alag alag parameter wale function hote hain. JavaScript mein agar same naam ke 2 function likhoge toh doosra pehle wale ko overwrite kar dega. Isliye JS mein hum ek hi function ke andar `typeof` aur `args.length` check karke alag alag behavior handle karte hain.',
          storyExplain: 'Swiss Army Knife: Ek hi knife mein chaku, scissors, aur bottle opener hota hai. Knife ek hi hai, par aap usme jo attachment (arguments) kholte ho wo waisa kaam karta hai.',
          funnyExample: {
            scenario: '// Wrong in JS:\nfunction add(a, b) { return a + b; }\nfunction add(a, b, c) { return a + b + c; }\nadd(2, 3); // NaN! (Second one overwrote first one!)\n// Correct: Use single function with rest/defaults! 🎉',
            punchline: 'Single function with dynamic arguments handles all signatures!'
          },
          memoryTrick: 'Emulating Overload in JS:\n- Check `args.length` for parameter count\n- Check `typeof arg` for parameter types\n- Use Rest `(...args)` to accept any number of inputs\n- Provide default values `(a, b = 0, c = 0)`',
          visualDiagram: {
            title: 'Dynamic Signature Dispatcher',
            nodes: ['Function Called with (a, b, c...)', 'Inspect arguments.length / types', 'Branch 1: 1 Argument -> Handle Single', 'Branch 2: 2 Arguments -> Handle Pair', 'Branch 3: Array / Object -> Handle Collection'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'V8 Monomorphic vs Megamorphic Calls:',
            steps: ['Functions called with consistent types are monomorphic (fast JIT inline cache)', 'Functions handling wildly different signature types become megamorphic (slightly slower dispatch)', 'Keep dynamic branches clean and structured']
          },
          code: `// Emulating Function Overloading in JavaScript
function formatUserData(...args) {
  // Case 1: Single ID passed -> formatUserData(101)
  if (args.length === 1 && typeof args[0] === "number") {
    return \`User ID: #\${args[0]} (Quick Lookup)\`;
  }

  // Case 2: Name and Age passed -> formatUserData("Aditi", 24)
  if (args.length === 2 && typeof args[0] === "string" && typeof args[1] === "number") {
    return \`User: \${args[0]}, Age: \${args[1]} years\`;
  }

  // Case 3: Complete Object passed -> formatUserData({ name: "Rahul", role: "Dev" })
  if (args.length === 1 && typeof args[0] === "object") {
    const { name, role } = args[0];
    return \`Profile: \${name} | Role: \${role}\`;
  }

  return "Invalid arguments passed to formatUserData";
}

console.log(formatUserData(101));
console.log(formatUserData("Aditi", 24));
console.log(formatUserData({ name: "Rahul", role: "Dev" }));`,
          codeBreakdown: [
            { part: 'function formatUserData(...args)', label: 'Gathers all passed parameters into a flexible array', color: '#3b82f6' },
            { part: 'if (args.length === 1 && typeof ...)', label: 'Dispatches execution based on parameter count and runtime types', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Declaring two `function calculate()` with different parameters in same scope (last declaration overwrites earlier ones)'
          ],
          proTips: [
            '💡 For complex APIs, pass a single Config Object `{ name, age, filter }` instead of relying on heavily overloaded positional arguments',
            '💡 In TypeScript, you can write formal overload signature declarations with a single implementation body'
          ],
          interviewQuestions: [
            'Does JavaScript support function overloading natively? If not, how is it emulated?',
            'What is the difference between `arguments` object and rest parameters (`...args`)?'
          ],
          miniChallenge: 'Create a function `multiply` that multiplies 2 numbers if 2 args are given, or squares the number if only 1 arg is given.',
          quiz: {
            type: 'mcq',
            question: 'JavaScript mein agar same naam ke 2 function declarations likhe jayein toh kya hota hai?',
            options: ['Compiler error aata hai', 'Pehle wala chalega', 'Doosra wala pehle wale ko overwrite kar deta hai', 'Dono combine ho jate hain'],
            answer: 'Doosra wala pehle wale ko overwrite kar deta hai',
            explanation: 'In JavaScript, declaring a second function with the same name replaces the first function in memory.'
          },
          summary: ['No native overloading in JS; emulated via rest parameters and type checks', 'Last declaration overwrites earlier ones', 'Config objects are modern best practice'],
          flashcard: { q: 'JavaScript mein Function Overloading kaise emulate ki ja sakti hai?', a: 'Rest parameters (...args) aur arguments.length / typeof checks ke zariye.' },
          funFact: '🎉 Fun Fact: jQuery ka `$()` function JS overloading ka classic example hai — aap `$("#id")`, `$(".class")`, `$("<div>")`, ya `$(document).ready()` sab kuch ek hi function se pass kar sakte the!',
          challenge: {
            instruction: 'Write a calculate function that adds 2 numbers if 2 args are given, or doubles the number if 1 arg is given.',
            initialCode: `function calculate(...args) {
  if (args.length === 1) return args[0] * 2;
  if (args.length === 2) return args[0] + args[1];
  return 0;
}
console.log(calculate(5));     // 10
console.log(calculate(5, 7));  // 12`,
            validator: (code) => code.includes('args.length') && code.includes('return')
          }
        },
        {
          id: 'js-objects',
          title: 'Objects (Literals, Methods, this & Destructuring)',
          emoji: '🗃️',
          xpReward: 35,
          badgeName: 'Object Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript mein lagbhag sab kuch Object hai! Key-value pairs ka jadoo aur `this` keyword ka role samajhna har senior developer ki pehchan hai! 🎩"',
            hint: '💡 Masti Sir: "Regular method mein `this` us object ko point karta hai jo method ko call karta hai (`obj.method()`)!"',
            success: '🎉 Masti Sir: "Objects, Destructuring and this keyword mastered!"',
            mistake: '😅 Masti Sir: "Object method mein arrow function mat banao agar `this` use karna hai — arrow function ka apna `this` nahi hota! ⚠️"'
          },
          englishDef: 'Objects are collections of key-value pairs representing state (properties) and behavior (methods). Modern JavaScript supports concise methods, computed keys, destructuring assignment, and the `this` context.',
          hinglishExplain: 'Object ek aisi data structure hai jisme hum real-world entities ko represent karte hain — jaise user ka naam, age, aur unke functions (methods). Object destructuring `{ name, age } = user` se hum values ko seedhe nikal sakte hain.',
          storyExplain: 'Car Identity Card: Car Object ke properties hain `{ brand: "Tata", model: "Nexon", speed: 80 }` aur method hai `drive()` jo car chalata hai aur `this.speed` badhata hai.',
          funnyExample: {
            scenario: 'const user = {\n  name: "Vikram",\n  greet: function() { return `Hi, I am ${this.name}`; },\n  wrongGreet: () => `Hi, I am ${this.name}` // undefined! 😱\n};',
            punchline: 'Always use standard method syntax when using this inside objects!'
          },
          memoryTrick: 'Object Power Toolkit:\n- Dot notation: `user.name`\n- Bracket notation: `user["property-name"]`\n- Shorthand: `{ name, score }`\n- Destructuring: `const { name, age } = user;`\n- Spread Operator: `const copy = { ...user, active: true };`\n- `this`: Points to current invoking object',
          visualDiagram: {
            title: 'Object Memory & Destructuring',
            nodes: ['Heap Memory: Object Reference', 'Keys: "name", "role", "xp"', 'Values: "Aryan", "Lead", 4500', 'Destructuring: const { name, xp } creates local stack bindings'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'V8 Hidden Classes (Shapes):',
            steps: ['V8 creates hidden classes (Shapes) for objects sharing same property order', 'Adding properties in the same order enables fast field lookups', 'Deleting properties switches object to slower dictionary mode']
          },
          code: `// 1. Object Literal with Methods and Shorthand
const userName = "Priya";
const currentRole = "Frontend Architect";

const developer = {
  name: userName,
  role: currentRole,
  xp: 3500,
  skills: ["React", "TypeScript", "Node.js"],

  // Method definition
  gainXp(points) {
    this.xp += points;
    return \`\${this.name} gained \${points} XP! New Total: \${this.xp}\`;
  }
};

console.log(developer.gainXp(500));

// 2. Object Destructuring & Renaming
const { name, xp: developerXp, skills } = developer;
console.log("Destructured:", name, "| XP:", developerXp);

// 3. Object Spread & Immutability
const updatedDeveloper = {
  ...developer,
  level: "Senior",
  xp: 5000
};
console.log("Updated Developer:", updatedDeveloper);`,
          codeBreakdown: [
            { part: 'gainXp(points) { this.xp += points; }', label: 'Object method accessing its own property via this keyword', color: '#3b82f6' },
            { part: 'const { name, xp: developerXp } = developer', label: 'Destructuring with property renaming', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Accessing nested properties on undefined (`user.profile.avatar` throws TypeError if profile is undefined; use optional chaining `user?.profile?.avatar`)',
            '❌ Using arrow functions for object methods that rely on `this`'
          ],
          proTips: [
            '💡 Use `Object.freeze(obj)` to prevent adding, modifying, or deleting properties in immutable constants',
            '💡 Use `Object.entries(obj)` and `Object.keys(obj)` to loop through objects with ease'
          ],
          interviewQuestions: [
            'How does the `this` keyword work inside regular object methods vs arrow functions?',
            'What are V8 Hidden Classes and why should you initialize object properties in the same order?'
          ],
          miniChallenge: 'Create a bankAccount object with balance and deposit(amount) method that updates this.balance.',
          quiz: {
            type: 'mcq',
            question: 'JavaScript object method mein `this` keyword kisko refer karta hai?',
            options: ['Hamesha Global Window object ko', 'Us Object ko jisne method ko call kiya hai', 'Parent function ko', 'Undefined ko'],
            answer: 'Us Object ko jisne method ko call kiya hai',
            explanation: 'When a function is called as a method of an object (e.g. `obj.method()`), `this` refers to the object before the dot.'
          },
          summary: ['Objects store key-value state and methods', 'this refers to invoking object context', 'Destructuring and spread enable clean immutable patterns'],
          flashcard: { q: 'Object destructuring mein property rename karne ka syntax kya hai?', a: '`const { oldKey: newName } = obj;`' },
          funFact: '🎉 Fun Fact: JavaScript mein arrays aur functions bhi internally Objects hi hote hain (`typeof [] === "object"` aur `typeof function(){} === "function"` but inherits from Object.prototype)!',
          challenge: {
            instruction: 'Create an object car with brand "Tesla" and a method getBrand() that returns this.brand.',
            initialCode: `const car = {
  brand: "Tesla",
  getBrand() {
    return this.brand;
  }
};
console.log(car.getBrand());`,
            validator: (code) => code.includes('this.brand') && code.includes('getBrand')
          }
        },
        {
          id: 'js-constructors',
          title: 'Constructors & Prototypes (new keyword, prototype chain)',
          emoji: '🏗️',
          xpReward: 35,
          badgeName: 'Prototype Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Constructor function naye objects banane ki blueprint factory hai! Aur `prototype` JavaScript ka secret memory-saving hero hai! 🦸‍♂️"',
            hint: '💡 Masti Sir: "Jab `new Hero("Thor")` call karte ho, toh JS 4 kaam karta hai: naya object banata hai, prototype link karta hai, `this` bind karta hai, aur return karta hai!"',
            success: '🎉 Masti Sir: "Constructor functions and Prototype Chain crystal clear!"',
            mistake: '😅 Masti Sir: "Constructor function ko bina `new` keyword ke call karoge toh `this` global window pe lag jayega aur disaster hoga! 😂"'
          },
          englishDef: 'Constructor functions serve as object templates invoked with the `new` keyword. JavaScript uses prototypal inheritance, where objects delegate shared methods through their prototype chain (`__proto__` / `prototype`).',
          hinglishExplain: 'Constructor function ek aisi factory hai jisse hum same design ke hazaro objects bana sakte hain. Har object mein methods ko copy karne ke bajaye hum `Constructor.prototype` par method lagate hain jisse saare objects ek hi shared memory space use karte hain.',
          storyExplain: 'Apartment Blueprint: Constructor blueprint hai. Har flat (object instance) ka apna room number aur owner hai (properties), par sabhi flats ek hi shared swimming pool aur garden use karte hain (Prototype methods).',
          funnyExample: {
            scenario: 'function User(name) { this.name = name; }\nconst u1 = new User("Aman");\nconst u2 = new User("Rahul");\nconsole.log(u1.__proto__ === User.prototype); // true! 🎉 Shared DNA!',
            punchline: 'Prototype chain connects all instances to common ancestors!'
          },
          memoryTrick: 'What `new` keyword does in 4 Steps:\n1. Creates empty object `{}`\n2. Sets `__proto__` to `Constructor.prototype`\n3. Binds `this` to the new object and executes constructor\n4. Returns the newly created object',
          visualDiagram: {
            title: 'Prototype Chain Delegation',
            nodes: ['Instance u1 (name: "Aman")', '__proto__ points to -> User.prototype (shared methods: login())', '__proto__ points to -> Object.prototype (toString, hasOwnProperty)', 'Top of Chain -> null'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Prototypal Lookup Mechanism:',
            steps: ['Property accessed on instance (u1.login())', 'Engine checks if property exists directly on u1', 'If not found, walks up __proto__ chain to User.prototype', 'Finds method and executes with this = u1']
          },
          code: `// 1. Constructor Function
function Student(name, batch, score) {
  this.name = name;
  this.batch = batch;
  this.score = score;
}

// 2. Attaching Shared Method to Prototype (Memory Efficient!)
Student.prototype.getDetails = function() {
  return \`Student: \${this.name} | Batch: \${this.batch} | Score: \${this.score}%\`;
};

Student.prototype.isHonorStudent = function() {
  return this.score >= 90;
};

// 3. Creating Instances with 'new'
const student1 = new Student("Sameer", "Fullstack 2026", 94);
const student2 = new Student("Neha", "Backend 2026", 82);

console.log(student1.getDetails(), "| Honors:", student1.isHonorStudent());
console.log(student2.getDetails(), "| Honors:", student2.isHonorStudent());
console.log("Shared Prototype:", student1.getDetails === student2.getDetails); // true!`,
          codeBreakdown: [
            { part: 'Student.prototype.getDetails = function()', label: 'Attaches method to prototype so all instances share one memory copy', color: '#3b82f6' },
            { part: 'new Student("Sameer", ...)', label: 'Creates instance, binds this, and establishes prototype linkage', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Defining methods inside constructor `this.method = function()` causing every instance to duplicate the method in memory',
            '❌ Forgetting the `new` keyword when instantiating a constructor'
          ],
          proTips: [
            '💡 Always attach shared methods to `Constructor.prototype` instead of inside constructor body',
            '💡 In modern JavaScript, ES6 `class` syntax is the preferred syntactic sugar over manual constructor prototypes'
          ],
          interviewQuestions: [
            'Explain step-by-step what the `new` keyword does in JavaScript.',
            'What is the Prototype Chain and how does property lookup delegation work?'
          ],
          miniChallenge: 'Create a Car constructor with model and year, attach a getAge() method to Car.prototype.',
          quiz: {
            type: 'mcq',
            question: 'Constructor function ke sath `new` keyword use karne par `this` kisko point karta hai?',
            options: ['Global Window object ko', 'Newly created blank object ko', 'Constructor function ke code ko', 'Undefined ko'],
            answer: 'Newly created blank object ko',
            explanation: 'The `new` operator creates a new empty object and sets `this` to point directly to that new object during execution.'
          },
          summary: ['Constructors create object instances via new keyword', 'Prototypes share methods across instances efficiently', 'Lookup delegates up the prototype chain until null'],
          flashcard: { q: '`new` keyword execute karne par 4 steps kya hote hain?', a: '1. Naya object banta hai, 2. Prototype link hota hai, 3. `this` bind hota hai, 4. Object return hota hai.' },
          funFact: '🎉 Fun Fact: JavaScript mein inheritance class-based nahi balki prototypal hoti hai — classes sirf prototypes ke upar ek sundar wrapper (syntactic sugar) hain!',
          challenge: {
            instruction: 'Define a Product constructor and attach getPriceTag method to Product.prototype.',
            initialCode: `function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.getPriceTag = function() {
  return \`\${this.name}: $\${this.price}\`;
};
const p = new Product("Keyboard", 49);
console.log(p.getPriceTag());`,
            validator: (code) => code.includes('Product.prototype') && code.includes('this.price')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: OOP (OBJECT ORIENTED PROGRAMMING)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'OOP',
      lessons: [
        {
          id: 'js-oop-concepts',
          title: 'OOP Core Concepts (Encapsulation, Inheritance & Polymorphism)',
          emoji: '🏛️',
          xpReward: 35,
          badgeName: 'OOP Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Object-Oriented Programming real-world problems ko code mein model karne ka tareeqa hai! 4 Pillars yaad rakho: Encapsulation, Abstraction, Inheritance, Polymorphism! 🏛️"',
            hint: '💡 Masti Sir: "Encapsulation data aur methods ko ek unit mein pack karta hai aur private data ko protect karta hai!"',
            success: '🎉 Masti Sir: "OOP 4 Pillars in JavaScript crystal clear!"',
            mistake: '😅 Masti Sir: "Composition over inheritance! Har jagah 10-level deep inheritance mat bana dena! 😂"'
          },
          englishDef: 'Object-Oriented Programming (OOP) in JavaScript organizes software design around data/objects. The 4 foundational pillars are Encapsulation (data bundling & protection), Abstraction (hiding complexity), Inheritance (code reuse via prototype/extends), and Polymorphism (methods behaving differently in subclasses).',
          hinglishExplain: 'OOP ek programming style hai jisme hum real-world cheezon ko Classes aur Objects ke roop mein likhte hain. 4 Pillars:\n1. Encapsulation: Data aur methods ko capsule mein pack karna.\n2. Abstraction: Complex internal details chupana aur simple interface dena.\n3. Inheritance: Parent class ki khoobiyan child class mein reuse karna.\n4. Polymorphism: Ek hi method alag alag classes mein alag tareeqe se kaam kare.',
          storyExplain: 'Vehicle Architecture: Parent class `Vehicle` mein `startEngine()` hai. Child class `Car` aur `Airplane` dono `Vehicle` se inherit karte hain, par Car sadak pe chalegi aur Airplane aasmaan mein udega (Polymorphism)!',
          funnyExample: {
            scenario: 'Parent: Human { sleep() { return "8 hours"; } }\nChild: Programmer extends Human { sleep() { return "What is sleep? ☕"; } }',
            punchline: 'Polymorphism allows child classes to override parent behavior!'
          },
          memoryTrick: '4 Pillars of OOP:\n- Encapsulation: Capsule (bundle + protect)\n- Abstraction: Car Steering (hide complex engine)\n- Inheritance: DNA (inherit traits)\n- Polymorphism: Poly-Morph (many forms of same method)',
          visualDiagram: {
            title: '4 Pillars of OOP',
            nodes: ['Encapsulation (Private fields & Methods)', 'Abstraction (Simple public interface)', 'Inheritance (extends superclass)', 'Polymorphism (Method Overriding)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'V8 Method Dispatch:',
            steps: ['Child class overrides parent method on its prototype', 'Calling method looks at child prototype first', 'If found, executes child override immediately (Polymorphic dispatch)']
          },
          code: `// Demonstrating 4 Pillars of OOP in JavaScript

// 1. Abstraction & Encapsulation Base Class
class BankAccount {
  #balance = 0; // Private field (Encapsulation)

  constructor(accountHolder, initialDeposit) {
    this.accountHolder = accountHolder;
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount <= 0) return "Invalid amount";
    this.#balance += amount;
    return \`Deposited ₹\${amount}. New Balance: ₹\${this.#balance}\`;
  }

  getBalance() {
    return this.#balance; // Controlled Abstraction
  }

  // Polymorphic method to be overridden
  calculateInterest() {
    return this.#balance * 0.04; // Base 4%
  }
}

// 2. Inheritance (extends) & Polymorphism (Overriding)
class SavingsAccount extends BankAccount {
  calculateInterest() {
    // Overriding parent method for higher 7% rate
    return this.getBalance() * 0.07;
  }
}

const mySavings = new SavingsAccount("Ankit", 10000);
console.log(mySavings.deposit(5000));
console.log("Annual Interest (7%):", mySavings.calculateInterest());`,
          codeBreakdown: [
            { part: '#balance = 0', label: 'Private field syntax enforcing strict encapsulation', color: '#3b82f6' },
            { part: 'class SavingsAccount extends BankAccount', label: 'Inheritance reusing parent properties and methods', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Trying to access private fields from outside (`acc.#balance` throws SyntaxError)',
            '❌ Creating overly deeply nested inheritance trees (favour composition where applicable)'
          ],
          proTips: [
            '💡 Use private fields `#field` to guarantee internal state cannot be tampered with by external code',
            '💡 Polymorphism makes your codebase extensible — new subclasses can be added without modifying existing consumer code'
          ],
          interviewQuestions: [
            'Explain the 4 main pillars of OOP with real-world JavaScript examples.',
            'How is Polymorphism achieved in JavaScript classes?'
          ],
          miniChallenge: 'Create a base Shape class with getArea() and a Circle subclass that overrides getArea() with Math.PI * r * r.',
          quiz: {
            type: 'mcq',
            question: 'Child class dwara parent class ke method ko naye logic ke sath rewrite karna kya kehlata hai?',
            options: ['Encapsulation', 'Method Overriding (Polymorphism)', 'Abstraction', 'Compilation'],
            answer: 'Method Overriding (Polymorphism)',
            explanation: 'When a subclass provides its own specific implementation of a method already defined in its superclass, it is called Method Overriding (Polymorphism).'
          },
          summary: ['Encapsulation bundles and protects state', 'Abstraction hides internal mechanics', 'Inheritance shares code via extends', 'Polymorphism allows method overriding'],
          flashcard: { q: 'OOP ke 4 pillars kaunse hain?', a: 'Encapsulation, Abstraction, Inheritance, aur Polymorphism.' },
          funFact: '🎉 Fun Fact: JavaScript mein private fields `#` ES2022 mein officially standard bane — pehle developers `_underscore` convention use karte the!',
          challenge: {
            instruction: 'Create a Shape class with area() returning 0, and a Square subclass that overrides area() returning side * side.',
            initialCode: `class Shape {
  area() { return 0; }
}
class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() { return this.side * this.side; }
}
const sq = new Square(5);
console.log("Area:", sq.area());`,
            validator: (code) => code.includes('class Square extends Shape') && code.includes('this.side * this.side')
          }
        },
        {
          id: 'js-classes-objects',
          title: 'Classes & Objects (ES6 class, Static Methods & Instances)',
          emoji: '📦',
          xpReward: 35,
          badgeName: 'Class Commander',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "ES6 Classes ne JavaScript ko clean aur readable bana diya! `static` methods class ke utility methods hote hain jo bina object banaye direct call hote hain! 🚀"',
            hint: '💡 Masti Sir: "`static helper()` ko `ClassName.helper()` karke call karte hain, `instance.helper()` se nahi!"',
            success: '🎉 Masti Sir: "Classes, Instances, and Static methods mastered!"',
            mistake: '😅 Masti Sir: "`class` syntax ke andar commas `,` nahi lagate methods ke beech mein! Seedhe method likho! ⚠️"'
          },
          englishDef: 'ES6 Classes provide clean, declarative syntax for object creation and inheritance. Classes include instance fields, methods, constructor logic, and `static` methods that belong to the class itself rather than instances.',
          hinglishExplain: 'ES6 `class` syntax object banane ka modern aur saaf tareeqa hai. Class ke andar `constructor()` se data initialize hota hai, methods se behavior define hota hai, aur `static` methods bina `new` keyword ke direct `Class.method()` karke use hote hain (jaise `Math.round`).',
          storyExplain: 'User Factory: `class User` factory hai. `new User("Rahul")` se Rahul ka instance bana. `User.compareAge(u1, u2)` ek static utility tool hai jo factory level par kaam karta hai.',
          funnyExample: {
            scenario: 'class MathHelper {\n  static add(a, b) { return a + b; }\n}\nMathHelper.add(5, 10); // 15 🎉\nconst m = new MathHelper();\nm.add(5, 10); // TypeError! (Static methods belong to class!)',
            punchline: 'Static methods live on the class blueprint, not instances!'
          },
          memoryTrick: 'Class Anatomy:\n- `class Name { ... }`: Class definition\n- `constructor(...) { ... }`: Instantiation hook\n- `methodName() { ... }`: Instance method (shared on prototype)\n- `static methodName() { ... }`: Utility method on Class directly\n- `const obj = new Name()`: Create instance',
          visualDiagram: {
            title: 'Class vs Instance Architecture',
            nodes: ['Class User (Static: User.createGuest())', 'Prototype: User.prototype (login, logout)', 'Instance u1 = new User("Aman") -> has access to prototype methods'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Class Under the Hood:',
            steps: ['Class body is executed in strict mode automatically', 'Methods defined in class body are non-enumerable on the prototype', 'Classes are not hoisted like function declarations']
          },
          code: `// 1. ES6 Class Declaration
class Course {
  // Instance field default
  isPublished = true;

  constructor(title, instructor, price) {
    this.title = title;
    this.instructor = instructor;
    this.price = price;
  }

  // Instance Method
  getSummary() {
    return \`📚 \${this.title} by \${this.instructor} - ₹\${this.price}\`;
  }

  // Static Utility Method (Called on Course directly)
  static comparePrice(courseA, courseB) {
    return courseA.price > courseB.price
      ? \`\${courseA.title} is costlier\`
      : \`\${courseB.title} is costlier or equal\`;
  }
}

// 2. Creating Instances
const jsCourse = new Course("JavaScript Mastery", "Masti Sir", 999);
const reactCourse = new Course("React Supercharged", "Masti Sir", 1499);

console.log(jsCourse.getSummary());
console.log(reactCourse.getSummary());
console.log(Course.comparePrice(reactCourse, jsCourse));`,
          codeBreakdown: [
            { part: 'constructor(title, instructor, price)', label: 'Special initialization method triggered automatically on new', color: '#3b82f6' },
            { part: 'static comparePrice(...)', label: 'Utility method attached directly to Course constructor, not instances', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling a static method on an instance (`jsCourse.comparePrice()` fails)',
            '❌ Trying to instantiate a class before its declaration (classes are in TDZ and not hoisted like functions)'
          ],
          proTips: [
            '💡 Use static factory methods like `User.fromJSON(jsonString)` for clean object deserialization',
            '💡 All code inside classes automatically executes in `"use strict";` mode'
          ],
          interviewQuestions: [
            'What is the difference between an instance method and a static method in JavaScript classes?',
            'Are ES6 classes truly new or just syntactic sugar over prototypes?'
          ],
          miniChallenge: 'Create a Temperature class with a static method `celsiusToFahrenheit(c)` that returns c * 1.8 + 32.',
          quiz: {
            type: 'mcq',
            question: '`static` method ko call karne ka sahi tareeqa kya hai?',
            options: ['instance.methodName()', 'ClassName.methodName()', 'this.methodName()', 'window.methodName()'],
            answer: 'ClassName.methodName()',
            explanation: 'Static methods are attached to the constructor class itself and must be called using `ClassName.methodName()`.'
          },
          summary: ['ES6 class offers clean declarative OOP syntax', 'constructor initializes instance state', 'static methods act as class-level utilities'],
          flashcard: { q: 'Static method aur instance method mein kya difference hai?', a: 'Instance method object banakar `instance.method()` se chalta hai, jabki static method bina object banaye direct `Class.method()` se chalta hai.' },
          funFact: '🎉 Fun Fact: JavaScript classes internally prototype function hi hoti hain (`typeof class {} === "function"`), par unhe bina `new` ke call karne par TypeError throw hota hai!',
          challenge: {
            instruction: 'Create a MathUtils class with a static cube(n) method that returns n * n * n.',
            initialCode: `class MathUtils {
  static cube(n) {
    return n * n * n;
  }
}
console.log(MathUtils.cube(3)); // 27`,
            validator: (code) => code.includes('static cube') && code.includes('n * n * n')
          }
        },
        {
          id: 'js-access-modifiers',
          title: 'Access Modifiers (Private Fields #, Getters & Setters)',
          emoji: '🔒',
          xpReward: 35,
          badgeName: 'Security Sentinel',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Private fields `#` aur Getters/Setters se data security pakki hoti hai! Koi bhi bahar se balance direct change nahi kar sakta! 🛡️"',
            hint: '💡 Masti Sir: "Getter property ki tarah read hota hai `user.fullName` aur setter validation ke sath value update karta hai!"',
            success: '🎉 Masti Sir: "Private fields and Encapsulation mastered!"',
            mistake: '😅 Masti Sir: "Private field ko bina class ke andar declare kiye use karoge toh SyntaxError aayega! Top par `#field` declare karna zaroori hai! ⚠️"'
          },
          englishDef: 'JavaScript provides native private fields using the `#` prefix for strict encapsulation, along with `get` and `set` keywords to intercept, validate, and compute property access and mutations.',
          hinglishExplain: 'Access Modifiers se hum class ke andar ke data ko secure karte hain. Private field `#password` ko class ke bahar se koi access ya change nahi kar sakta. `get` se hum property ko calculate karke read karte hain aur `set` se value validate karke update karte hain.',
          storyExplain: 'ATM Machine: ATM ke andar ka cash vault `#cashVault` private hai — koi bahar se hath daal kar paise nahi nikal sakta. Aap `withdraw(amount)` setter/method ke zariye PIN validate karke hi paise nikal sakte hain.',
          funnyExample: {
            scenario: 'class User {\n  #password = "secret123";\n}\nconst u = new User();\nconsole.log(u.#password); // SyntaxError: Private field \'#password\' must be declared in an enclosing class! 🛡️',
            punchline: 'True hard privacy at the JavaScript engine level!'
          },
          memoryTrick: 'Encapsulation Controls:\n- `#privateField`: Accessible ONLY inside class methods\n- `get propName() { return val; }`: Read accessor\n- `set propName(newVal) { validate & set; }`: Write validator\n- Public fields: Default access everywhere',
          visualDiagram: {
            title: 'Private Field Encapsulation',
            nodes: ['External Scope -> BLOCKED (#privateField)', 'Public Getter -> Validates & Reads', 'Public Setter -> Validates & Writes', 'Private State #data safely encapsulated'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Hard Private Fields in V8:',
            steps: ['#private fields are stored in a PrivateSymbols table in V8', 'No Object.keys() or reflection can access or inspect private fields', 'Engine throws compile-time SyntaxError if accessed externally']
          },
          code: `class UserProfile {
  // 1. Private Fields (Hard Privacy)
  #email;
  #passwordHash;

  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#email = email;
    this.#passwordHash = \`hashed_\${password}\`;
  }

  // 2. Getter (Computed Property)
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }

  // 3. Setter with Validation
  set email(newEmail) {
    if (!newEmail.includes("@") || !newEmail.includes(".")) {
      console.error("❌ Invalid Email Format!");
      return;
    }
    this.#email = newEmail;
    console.log("✅ Email updated successfully!");
  }

  get email() {
    // Masked email for privacy
    const [name, domain] = this.#email.split("@");
    return \`\${name[0]}***@\${domain}\`;
  }
}

const profile = new UserProfile("Ananya", "Sharma", "ananya@example.com", "pass123");
console.log("Full Name (Getter):", profile.fullName);
console.log("Masked Email:", profile.email);

// Updating via Setter with validation
profile.email = "invalid-email";      // Fails validation
profile.email = "ananya.new@work.com"; // Succeeds
console.log("Updated Masked Email:", profile.email);`,
          codeBreakdown: [
            { part: '#email; #passwordHash;', label: 'Native private fields completely hidden from external access', color: '#3b82f6' },
            { part: 'get fullName() { return ... }', label: 'Getter acts like a regular property but dynamically computes value', color: '#10b981' },
            { part: 'set email(newEmail) { ... }', label: 'Setter intercepts assignment and enforces validation rules', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Setting up an infinite loop in a setter (`set age(v) { this.age = v; }` calls setter recursively; store in `#age` instead!)',
            '❌ Forgetting that `#` is part of the property name inside the class (`this.#email`, not `this.email`)'
          ],
          proTips: [
            '💡 Always use private fields `#` instead of legacy `_underscore` convention for sensitive credentials and state',
            '💡 Use getters for derived state (e.g. `fullName`) to avoid state synchronization bugs'
          ],
          interviewQuestions: [
            'How do JavaScript native private fields (`#`) differ from TypeScript `private` keyword?',
            'What problem does a Setter solve and how do you prevent infinite recursion in setters?'
          ],
          miniChallenge: 'Create a Temperature class with a private field `#celsius`, a getter `fahrenheit` and setter `fahrenheit`.',
          quiz: {
            type: 'mcq',
            question: 'JavaScript class mein private field declare karne ke liye kaunsa symbol use hota hai?',
            options: ['_', '#', '$', 'private'],
            answer: '#',
            explanation: 'In JavaScript (ES2022+), prefixing a property name with `#` creates a native private field inaccessible outside the class.'
          },
          summary: ['# denotes hard private fields', 'get computes derived properties on read', 'set intercepts and validates mutations'],
          flashcard: { q: 'Getter aur regular method call mein kya difference hota hai?', a: 'Getter ko bina parenthesis ke property ki tarah read kiya jata hai (`user.fullName`), jabki regular method ko call karna padta hai (`user.getFullName()`).' },
          funFact: '🎉 Fun Fact: TypeScript ka `private` keyword sirf compile time check karta hai (compiled JS mein public ban jata hai), par JavaScript ka `#` runtime par bhi hard private rehta hai!',
          challenge: {
            instruction: 'Create a Wallet class with a private field #money, a constructor setting initial money, and a get balance getter.',
            initialCode: `class Wallet {
  #money;
  constructor(initial) {
    this.#money = initial;
  }
  get balance() {
    return this.#money;
  }
}
const w = new Wallet(500);
console.log("Balance:", w.balance);`,
            validator: (code) => code.includes('#money') && code.includes('get balance')
          }
        },
        {
          id: 'js-class-constructor',
          title: 'Constructor & Inheritance (super keyword & extends)',
          emoji: '🧬',
          xpReward: 35,
          badgeName: 'Inheritance Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Subclass mein parent class ki powers lene ke liye `extends` aur `super()` use hota hai! Subclass constructor mein `this` use karne se pehle `super()` call karna mandatory hai! ⚡"',
            hint: '💡 Masti Sir: "`super(name, age)` parent class ke constructor ko arguments pass karta hai!"',
            success: '🎉 Masti Sir: "Class inheritance and super keyword mastered!"',
            mistake: '😅 Masti Sir: "Subclass constructor mein `super()` se pehle `this.property = value` likhoge toh ReferenceError aayega! Pehle super(), fir this! ⚠️"'
          },
          englishDef: 'Inheritance enables a subclass to extend a parent class using the `extends` keyword. The `super()` function calls the parent constructor and `super.method()` invokes parent methods from within overridden subclasses.',
          hinglishExplain: 'Jab ek child class ko parent class ki properties aur methods inherit karne hote hain toh hum `extends` keyword use karte hain. Child class ke constructor ke andar sabse pehle `super()` call karna padta hai taaki parent class initialize ho sake, uske baad hi `this` kaam karta hai.',
          storyExplain: 'Smartphone Family: Base class `Phone` (makeCall, sendSMS). Child class `SmartPhone extends Phone` (browseInternet, takePhoto). SmartPhone ke paas Phone ki saari powers pehle se hain, plus apni nayi smart powers!',
          funnyExample: {
            scenario: 'class Child extends Parent {\n  constructor(name) {\n    this.name = name; // ReferenceError: Must call super constructor! 😱\n    super();\n  }\n}',
            punchline: 'Always call super() before touching this in subclasses!'
          },
          memoryTrick: 'Inheritance Golden Rules:\n1. `class Child extends Parent`: Creates inheritance link\n2. `super(...args)`: Calls parent constructor (MUST be first line in child constructor)\n3. `super.parentMethod()`: Calls parent implementation inside overridden child method\n4. `instanceof`: Checks if object is instance of class or any ancestor in hierarchy',
          visualDiagram: {
            title: 'Inheritance Prototype Chain',
            nodes: ['Employee Class (name, id, getInfo())', 'Manager Class extends Employee (teamSize, conductMeeting())', 'm1 = new Manager(...) -> inherits all Employee methods'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How super() Initializes Memory:',
            steps: ['Subclass constructor is called', 'super() executes Parent constructor and binds newly created prototype instance', 'Subclass constructor can now safely access and attach fields to this']
          },
          code: `// 1. Parent Class
class Employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }

  getDetails() {
    return \`Employee #\${this.id}: \${this.name} | Salary: ₹\${this.salary}\`;
  }

  work() {
    return \`\${this.name} is working on standard tasks.\`;
  }
}

// 2. Subclass extending Parent
class SoftwareEngineer extends Employee {
  constructor(name, id, salary, techStack) {
    // Calling Parent Constructor FIRST!
    super(name, id, salary);
    this.techStack = techStack;
  }

  // Overriding method & extending with super
  work() {
    const baseWork = super.work();
    return \`\${baseWork} Writing robust \${this.techStack.join(", ")} code! 🚀\`;
  }
}

const dev = new SoftwareEngineer("Vikram", 1042, 120000, ["React", "Node.js", "Docker"]);
console.log(dev.getDetails());
console.log(dev.work());
console.log("Is Employee:", dev instanceof Employee); // true
console.log("Is SoftwareEngineer:", dev instanceof SoftwareEngineer); // true`,
          codeBreakdown: [
            { part: 'super(name, id, salary)', label: 'Must be invoked before accessing this in subclass constructor', color: '#3b82f6' },
            { part: 'super.work()', label: 'Calls the original parent method implementation from inside child override', color: '#10b981' },
            { part: 'dev instanceof Employee', label: 'Evaluates to true because Employee is in dev prototype chain', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Accessing `this` before `super()` in derived class constructor (ReferenceError)',
            '❌ Forgetting to pass required parent parameters into `super(param1, param2)`'
          ],
          proTips: [
            '💡 If a subclass does not define a constructor, JavaScript automatically generates `constructor(...args) { super(...args); }`',
            '💡 Use `instanceof` to verify polymorphic object types in application code'
          ],
          interviewQuestions: [
            'Why must `super()` be called before accessing `this` in a derived class constructor?',
            'How does method overriding work in combination with `super.method()`?'
          ],
          miniChallenge: 'Create a Vehicle parent class and a Car child class that passes brand to super(brand) and adds doors property.',
          quiz: {
            type: 'mcq',
            question: 'Subclass ke constructor mein `this` access karne se pehle kya call karna mandatory hai?',
            options: ['this.init()', 'super()', 'parent()', 'Object.create()'],
            answer: 'super()',
            explanation: 'In JavaScript derived classes, you must call `super()` before accessing `this`, otherwise a ReferenceError is thrown.'
          },
          summary: ['extends establishes class inheritance', 'super() runs parent constructor and initializes this', 'instanceof tests prototype ancestor chain'],
          flashcard: { q: 'Subclass mein `super()` ka kya kaam hota hai?', a: 'Parent class ke constructor ko call karna aur child class ke liye `this` ko initialize karna.' },
          funFact: '🎉 Fun Fact: `super` keyword ko object literals ke andar bhi use kiya ja sakta hai agar object prototype chain par linked ho!',
          challenge: {
            instruction: 'Create an Animal class and a Dog class extends Animal that calls super(name) and has a bark() method.',
            initialCode: `class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    return \`\${this.name} says Woof!\`;
  }
}
const d = new Dog("Bruno", "Labrador");
console.log(d.bark());`,
            validator: (code) => code.includes('class Dog extends Animal') && code.includes('super(name)')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: ASYNCHRONOUS JAVASCRIPT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Asynchronous JavaScript',
      lessons: [
        {
          id: 'js-async-intro',
          title: 'Asynchronous JavaScript (Sync vs Async & Single Threaded)',
          emoji: '⏳',
          xpReward: 35,
          badgeName: 'Async Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript Single-Threaded hai — matlab ek time par ek hi task kar sakti hai! Lekin Web APIs aur Asynchronous architecture ki wajah se ye bina freeze huye hazaro requests handle karti hai! 🚀"',
            hint: '💡 Masti Sir: "Synchronous code line-by-line block karta hai, jabki Asynchronous code background mein chalta hai bina UI freeze kiye!"',
            success: '🎉 Masti Sir: "Synchronous vs Asynchronous core concept crystal clear!"',
            mistake: '😅 Masti Sir: "`setTimeout(fn, 0)` immediate nahi chalta — wo Call Stack khali hone ke baad chalta hai! 😂"'
          },
          englishDef: 'JavaScript is a single-threaded language with a non-blocking, asynchronous event-driven runtime architecture. Heavy operations (network fetch, timers, disk I/O) offload to background browser Web APIs so the main execution thread never freezes.',
          hinglishExplain: 'JavaScript single-threaded hai (ek hi main rasta hai). Agar hum server se 5 second mein data la rahe hain aur code synchronous hoga toh poori screen 5 second ke liye freeze ho jayegi. Asynchronous programming se server request background mein chalti hai aur user aaram se website scroll/click kar sakta hai.',
          storyExplain: 'Restaurant Waiter: Synchronous waiter ek table ka order kitchen mein dekar wahin khada rehta hai jab tak khana na bane (Baaqi tables bhookhi mar jayengi!). Asynchronous waiter order dekar turant doosri tables ko serve karta hai aur khana ready hote hi le aata hai!',
          funnyExample: {
            scenario: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nconsole.log("3");\n// Output: 1, 3, 2! (Even with 0 milliseconds timeout!) 🎉',
            punchline: 'Async tasks wait in queue until Call Stack is completely clear!'
          },
          memoryTrick: 'Sync vs Async:\n- Synchronous: Blocking, sequential, freezes thread\n- Asynchronous: Non-blocking, concurrent background execution\n- JavaScript Thread: Single Main Call Stack\n- Offloaded to: Browser Web APIs / Node.js Libuv',
          visualDiagram: {
            title: 'Sync vs Async Execution',
            nodes: ['Main Thread Call Stack', 'Async Task (Fetch / Timer) offloaded to Web API', 'Main Thread continues executing next lines', 'When ready -> Task Queue -> Event Loop -> Call Stack'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'The Non-Blocking Model:',
            steps: ['Call Stack executes synchronous code directly', 'Asynchronous Web APIs (fetch, setTimeout, DOM Events) execute in background C++ threads', 'Completed callbacks are placed in the Callback Queue', 'Event Loop moves callback to Stack when stack is empty']
          },
          code: `// 1. Synchronous Blocking Demonstration
console.log("👉 1. Synchronous Task Start");

// 2. Asynchronous Non-Blocking Timer
setTimeout(() => {
  console.log("⏳ 3. Async Timer Completed (After background delay)");
}, 1000);

console.log("👉 2. Synchronous Task End (Executed immediately without waiting!)");`,
          codeBreakdown: [
            { part: 'console.log("👉 1. Synchronous Task Start")', label: 'Executes immediately on main call stack', color: '#3b82f6' },
            { part: 'setTimeout(..., 1000)', label: 'Offloads timer to browser Web API without blocking execution', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Assuming `setTimeout(fn, 0)` executes synchronously before the next line of code'
          ],
          proTips: [
            '💡 Never run heavy CPU-intensive synchronous loops on the main thread; use Web Workers if heavy calculation is needed',
            '💡 Always use asynchronous APIs (`fetch`, `async/await`) for network and I/O tasks'
          ],
          interviewQuestions: [
            'How can JavaScript be single-threaded yet handle asynchronous non-blocking operations?',
            'Why does `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");` print A, C, B?'
          ],
          miniChallenge: 'Use setTimeout to log "Welcome after 2 seconds" after a 2000ms delay.',
          quiz: {
            type: 'mcq',
            question: 'JavaScript engine ka main Call Stack kaisa hota hai?',
            options: ['Multi-threaded', 'Single-threaded', 'Dual-threaded', 'Non-threaded'],
            answer: 'Single-threaded',
            explanation: 'JavaScript has a single call stack and executes one command at a time on its main thread.'
          },
          summary: ['JavaScript is single-threaded and non-blocking', 'Web APIs handle timers and network in background', 'Call stack stays responsive for smooth 60fps UI'],
          flashcard: { q: 'JavaScript single-threaded hone ke bawajood non-blocking kaise kaam karta hai?', a: 'Browser Web APIs aur Event Loop ke asynchronous background architecture ke zariye.' },
          funFact: '🎉 Fun Fact: Node.js mein asynchronous operations ke piche `libuv` naam ki high-performance C library kaam karti hai!',
          challenge: {
            instruction: 'Log "Start", set a setTimeout for 100ms logging "Async", and log "End".',
            initialCode: `console.log("Start");
setTimeout(() => {
  console.log("Async");
}, 100);
console.log("End");`,
            validator: (code) => code.includes('setTimeout') && code.includes('Start') && code.includes('End')
          }
        },
        {
          id: 'js-callbacks',
          title: 'Callbacks (Higher-Order Functions & Callback Hell)',
          emoji: '📞',
          xpReward: 30,
          badgeName: 'Callback Navigator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Callback ek aisi function hai jo doosre function ko pass ki jati hai taaki task complete hone par wapis call ki ja sake! Par jab callbacks ke andar callbacks nest hote hain toh banta hai Callback Hell! 😱"',
            hint: '💡 Masti Sir: "Pyramid of Doom se bachne ke liye hi modern JS mein Promises aur Async/Await aaye hain!"',
            success: '🎉 Masti Sir: "Callbacks and handling strategies mastered!"',
            mistake: '😅 Masti Sir: "Error handling bhool jana sabse badi callback mistake hai! Node.js style error-first `(err, data)` hamesha check karo! ⚠️"'
          },
          englishDef: 'A Callback is a function passed as an argument to another function to be executed after an asynchronous operation completes. Nested callbacks lead to Callback Hell (Pyramid of Doom), creating unmaintainable code and inversion of control.',
          hinglishExplain: 'Callback ek aisa function hai jo hum doosre function ko dete hain ki "bhai jab tera kaam ho jaye toh mujhe call kar dena". Jab bohot saare async tasks ek ke baad ek chain hote hain toh nested pyramid ban jata hai jise Callback Hell kehte hain.',
          storyExplain: 'Order Pizza Flow: Pizza order karo -> Callback: Jab bane toh Bake karo -> Callback: Jab bake ho toh Deliver karo -> Callback: Jab deliver ho toh Eat karo. Har step doosre ke andar ghus jata hai!',
          funnyExample: {
            scenario: 'getUser(userId, (user) => {\n  getOrders(user.id, (orders) => {\n    getOrderDetails(orders[0].id, (details) => {\n      getReceipt(details.id, (receipt) => {\n        // Pyramid of Doom! 😱 7 layers deep!\n      });\n    });\n  });\n});',
            punchline: 'Callback Hell makes code unreadable and hard to debug!'
          },
          memoryTrick: 'Callback Essentials:\n- Callback: Function passed as parameter\n- Error-First pattern: `(err, result) => { if (err) ... }`\n- Callback Hell / Pyramid of Doom: Deeply nested callbacks\n- Solution: Promises & async/await',
          visualDiagram: {
            title: 'Callback Hell (Pyramid of Doom)',
            nodes: ['Step 1: Fetch User', '  -> Step 2: Fetch Orders', '    -> Step 3: Fetch Payment', '      -> Step 4: Send Email (Code shifts heavily to the right)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Inversion of Control Issue:',
            steps: ['You give control of your callback function to a 3rd party function', 'You cannot guarantee if your callback will be called 0 times, 1 time, or multiple times', 'Promises solved this by maintaining immutable internal state']
          },
          code: `// 1. Basic Callback Example
function fetchUserData(userId, callback) {
  console.log(\`Fetching data for User #\${userId}...\`);
  setTimeout(() => {
    const user = { id: userId, name: "Aman", role: "Developer" };
    callback(null, user); // Error-first callback
  }, 500);
}

// 2. Consuming Callback
fetchUserData(101, (err, user) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("User Data Received:", user);
});`,
          codeBreakdown: [
            { part: 'callback(null, user)', label: 'Standard Node.js error-first pattern: first argument is error, second is data', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Forgetting to return inside error checks in callbacks, causing code below to execute anyway',
            '❌ Hardcoding deep nested callbacks instead of modularizing functions or using Promises'
          ],
          proTips: [
            '💡 In modern codebases, convert legacy callback APIs into Promises using `util.promisify` or new Promise wrappers',
            '💡 Name your callback functions instead of writing anonymous arrow functions inside nested chains'
          ],
          interviewQuestions: [
            'What is "Callback Hell" and what are the two main issues with callbacks (Pyramid of Doom & Inversion of Control)?',
            'What is the error-first callback pattern in Node.js?'
          ],
          miniChallenge: 'Write a function `doMath(a, b, callback)` that passes `a + b` to the callback function.',
          quiz: {
            type: 'mcq',
            question: 'Deeply nested callbacks ki wajah se banne wale shape ko kya kehte hain?',
            options: ['Circle of Death', 'Pyramid of Doom (Callback Hell)', 'Event Loop Stack', 'Recursion Tree'],
            answer: 'Pyramid of Doom (Callback Hell)',
            explanation: 'The heavily indented triangular indentation formed by nested callbacks is known as the Pyramid of Doom or Callback Hell.'
          },
          summary: ['Callbacks are functions passed as parameters', 'Error-first pattern handles failures', 'Promises resolve Pyramid of Doom and Inversion of Control'],
          flashcard: { q: 'Callback Hell se bachne ke liye modern JavaScript mein kya use hota hai?', a: 'Promises aur Async/Await.' },
          funFact: '🎉 Fun Fact: `http://callbackhell.com/` naam ki ek dedicated website bani hui hai jo developers ko callback hell se bachne ke tareeqe sikhati hai!',
          challenge: {
            instruction: 'Create a function performOperation(x, callback) that calls callback(x * 2).',
            initialCode: `function performOperation(x, callback) {
  callback(x * 2);
}
performOperation(10, (result) => {
  console.log("Result:", result);
});`,
            validator: (code) => code.includes('callback(x * 2)') || code.includes('callback(')
          }
        },
        {
          id: 'js-promises',
          title: 'Promises (States, .then, .catch, .finally & Promise.all)',
          emoji: '🤝',
          xpReward: 35,
          badgeName: 'Promise Keeper',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Promise ek vaada hai jo future mein poora hoga ya reject hoga! 3 States hoti hain: Pending, Fulfilled, Rejected! Chaining se code bilkul clean rehta hai! 🌟"',
            hint: '💡 Masti Sir: "Multiple async requests ko parallel chalana ho toh `Promise.all([p1, p2])` use karo — ye sabse tez tareeqa hai!"',
            success: '🎉 Masti Sir: "Promises and Combinators mastered!"',
            mistake: '😅 Masti Sir: "Promise chain ke aakhri mein `.catch()` lagana kabhi mat bhoolo, warna `UnhandledPromiseRejection` error aayega! ⚠️"'
          },
          englishDef: 'A Promise is an object representing the eventual completion (fulfillment) or failure (rejection) of an asynchronous operation. Promises exist in one of three states: Pending, Fulfilled, or Rejected, and support combinators like `Promise.all()`, `Promise.allSettled()`, and `Promise.race()`.',
          hinglishExplain: 'Promise ek vaada hai jo JavaScript deta hai. Jab tak data aa raha hai, status "Pending" rehta hai. Jab data mil jaye toh "Fulfilled" (resolve ho gaya), aur agar error aaye toh "Rejected". `.then()` se success handle karte hain, `.catch()` se error, aur `.finally()` hamesha chalta hai.',
          storyExplain: 'Swiggy/Zomato Order: Order place kiya -> Order ID mila (Pending Promise). Khana deliver hua -> Resolve (.then: Maze se khao). Restaurant band nikla -> Reject (.catch: Refund lo). Dono cases mein bill generate hota hai (.finally).',
          funnyExample: {
            scenario: 'const promise = new Promise((resolve, reject) => {\n  const salaryCredited = true;\n  salaryCredited ? resolve("Party time! 🍕") : reject("Broke! 😭");\n});\npromise.then(msg => console.log(msg)).catch(err => console.error(err));',
            punchline: 'Promises handle future values reliably and immutably!'
          },
          memoryTrick: '3 Promise States:\n1. `Pending`: Working in background\n2. `Fulfilled`: Resolved successfully (.then)\n3. `Rejected`: Failed with error (.catch)\n- `.finally()`: Always runs (cleanup)\n- `Promise.all([p1, p2])`: Fails fast if ANY rejects\n- `Promise.allSettled([p1, p2])`: Waits for all regardless of outcome',
          visualDiagram: {
            title: 'Promise State Lifecycle',
            nodes: ['new Promise (Pending)', 'Success -> resolve(data) -> Fulfilled -> .then()', 'Failure -> reject(error) -> Rejected -> .catch()', 'Cleanup -> .finally()'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Microtask Queue Priority:',
            steps: ['Promise callbacks (.then, .catch) go into the Microtask Queue', 'Microtask Queue has higher priority than Macrotask Queue (setTimeout)', 'All microtasks execute immediately after the current stack frame finishes']
          },
          code: `// 1. Creating a Promise
function fetchProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, title: "Wireless Headphones", price: 2999 });
      } else {
        reject(new Error("Invalid Product ID"));
      }
    }, 600);
  });
}

// 2. Consuming Promise with .then, .catch, .finally
fetchProduct(101)
  .then(product => {
    console.log("Product Loaded:", product.title, "₹" + product.price);
    return product.price * 0.9; // Apply 10% discount in chain
  })
  .then(discountedPrice => {
    console.log("Discounted Price:", "₹" + discountedPrice);
  })
  .catch(err => {
    console.error("Fetch Failed:", err.message);
  })
  .finally(() => {
    console.log("Operation Finished (Loading Spinner Closed)");
  });

// 3. Parallel Execution with Promise.all
const p1 = Promise.resolve("Data 1");
const p2 = Promise.resolve("Data 2");
Promise.all([p1, p2]).then(results => console.log("All Parallel Results:", results));`,
          codeBreakdown: [
            { part: 'new Promise((resolve, reject) => { ... })', label: 'Creates a Promise with resolver and rejector callbacks', color: '#3b82f6' },
            { part: '.then(...).catch(...).finally(...)', label: 'Chainable handlers executing cleanly without nested indentation', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting to return a value or Promise inside a `.then()` block, breaking the chain',
            '❌ Using `Promise.all` when you want all requests to complete even if one fails (use `Promise.allSettled` instead)'
          ],
          proTips: [
            '💡 Use `Promise.all()` for simultaneous parallel API calls to reduce total page loading time',
            '💡 Always return Promises inside `.then()` handlers to maintain flat asynchronous chains'
          ],
          interviewQuestions: [
            'What are the 3 states of a Promise in JavaScript?',
            'What is the difference between `Promise.all()`, `Promise.allSettled()`, and `Promise.race()`?'
          ],
          miniChallenge: 'Create a Promise that resolves with "Data Loaded" after a 500ms setTimeout and log the result using .then().',
          quiz: {
            type: 'mcq',
            question: 'Agar `Promise.all([p1, p2, p3])` mein `p2` reject ho jaye toh kya hoga?',
            options: ['Baaqi dono complete hone ka wait karega', 'Turant poora Promise.all reject ho jayega (Fail-Fast)', 'Error ko ignore karke empty array dega', 'Undefined return karega'],
            answer: 'Turant poora Promise.all reject ho jayega (Fail-Fast)',
            explanation: '`Promise.all` has a fail-fast behavior: if any single promise rejects, the entire `Promise.all` immediately rejects with that error.'
          },
          summary: ['3 states: Pending, Fulfilled, Rejected', '.then() chains transformations, .catch() handles errors', 'Promise.all runs tasks in parallel'],
          flashcard: { q: 'Promise.all() aur Promise.allSettled() mein kya farak hai?', a: 'Promise.all ek bhi fail hone par turant reject hota hai, jabki Promise.allSettled sabhi ke pass/fail hone tak wait karta hai aur sabka status deta hai.' },
          funFact: '🎉 Fun Fact: Promises ES2015 (ES6) mein aaye the — usse pehle developers Q aur Bluebird jaise external libraries use karte the!',
          challenge: {
            instruction: 'Create a Promise that resolves with "Success" and log it using .then().',
            initialCode: `const myPromise = new Promise((resolve) => {
  resolve("Success");
});
myPromise.then(res => console.log(res));`,
            validator: (code) => code.includes('new Promise') && code.includes('resolve') && code.includes('.then')
          }
        },
        {
          id: 'js-event-loop',
          title: 'Event Loop (Call Stack, Web APIs, Microtasks & Macrotasks)',
          emoji: '🔄',
          xpReward: 35,
          badgeName: 'Event Loop Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Event Loop JavaScript ka sabse mashhoor interview topic hai! Call Stack, Web APIs, Microtask Queue aur Callback Queue ka choreography samajh gaye toh aap JS ke jadugar ban gaye! 🪄"',
            hint: '💡 Masti Sir: "Microtasks (Promises, queueMicrotask) ki priority hamesha Macrotasks (setTimeout, setInterval) se pehle hoti hai!"',
            success: '🎉 Masti Sir: "Event Loop and Task Queues mastered!"',
            mistake: '😅 Masti Sir: "Never block the Call Stack with heavy synchronous loops — Event Loop ruk jayega aur website unresponsive ho jayegi! ⚠️"'
          },
          englishDef: 'The Event Loop is the concurrency model mechanism in JavaScript that continuously monitors the Call Stack and task queues, pushing tasks onto the Call Stack whenever it becomes empty. Microtasks (Promises) always execute before Macrotasks (setTimeout/setInterval).',
          hinglishExplain: 'Event Loop ek police officer ki tarah hai jo dekhta rehta hai: "Kya Call Stack khali hai?". Jaise hi Call Stack khali hota hai, wo pehle Microtask Queue (Promises) ke saare tasks chalata hai, aur uske baad Macrotask Queue (setTimeout) se ek task utha kar stack mein daalta hai.',
          storyExplain: 'VIP Airport Lounge: Main Flight boarding Call Stack hai. Regular Passengers (setTimeout) Macrotask line mein khade hain. VIP Passengers (Promise.then) Microtask line mein khade hain. Officer pehle saare VIPs ko board karega, fir regular queue se ek-ek ko lega.',
          funnyExample: {
            scenario: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");\n// Order: 1, 4, 3, 2! 🎉',
            punchline: 'Sync (1, 4) -> Microtask (3) -> Macrotask (2)!'
          },
          memoryTrick: 'Execution Priority Hierarchy:\n1. Synchronous Code (Call Stack) - TOP Priority\n2. Microtask Queue (Promise.then, catch, finally, queueMicrotask, MutationObserver)\n3. Render Pipeline (DOM Repaint, requestAnimationFrame)\n4. Macrotask Queue (setTimeout, setInterval, setImmediate, I/O)',
          visualDiagram: {
            title: 'JavaScript Runtime Architecture',
            nodes: ['Call Stack (Executes JS)', 'Web APIs (Timers, Network)', 'Microtask Queue (Promises - High Priority)', 'Macrotask Queue (setTimeout - Normal Priority)', 'Event Loop (Transfers Queues -> Stack)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Step-by-Step Event Loop Tick:',
            steps: ['Execute all synchronous code in Call Stack until empty', 'Check Microtask Queue; drain ALL pending microtasks sequentially', 'Trigger UI render if frame is due (60Hz / 16.6ms)', 'Pick the OLDEST macrotask from Task Queue and push to Stack', 'Repeat tick continuously']
          },
          code: `// Ultimate Event Loop Predictor Demo!
console.log("1. Synchronous Start");

// Macrotask (Timer)
setTimeout(() => {
  console.log("4. Macrotask (setTimeout 0ms)");
}, 0);

// Microtask (Promise)
Promise.resolve()
  .then(() => {
    console.log("3. Microtask (Promise.then #1)");
  })
  .then(() => {
    console.log("3b. Microtask (Promise.then #2 in chain)");
  });

console.log("2. Synchronous End");

// Output Order:
// 1. Synchronous Start
// 2. Synchronous End
// 3. Microtask (Promise.then #1)
// 3b. Microtask (Promise.then #2 in chain)
// 4. Macrotask (setTimeout 0ms)`,
          codeBreakdown: [
            { part: 'console.log("1. ...")', label: 'Synchronous line executed immediately in Call Stack', color: '#3b82f6' },
            { part: 'Promise.resolve().then(...)', label: 'Queued into Microtask Queue; runs before any macrotask', color: '#10b981' },
            { part: 'setTimeout(..., 0)', label: 'Queued into Macrotask Callback Queue; runs after microtasks drain', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Believing setTimeout delay guarantees exact execution timing (it only guarantees minimum delay before entering queue)',
            '❌ Starving the Event Loop by generating an infinite recursive chain of microtasks'
          ],
          proTips: [
            '💡 Use `queueMicrotask(() => { ... })` when you need a callback to execute after current synchronous code but before DOM render',
            '💡 Keep the call stack free from long tasks (>50ms) to ensure perfect 100/100 INP (Interaction to Next Paint) web performance'
          ],
          interviewQuestions: [
            'Explain how the JavaScript Event Loop works with Call Stack, Web APIs, Microtasks, and Macrotasks.',
            'What is the difference between a Microtask and a Macrotask? Give examples of each.'
          ],
          miniChallenge: 'Predict the console output of a snippet with 2 sync logs, 1 Promise, and 1 setTimeout.',
          quiz: {
            type: 'mcq',
            question: 'Call Stack khali hone ke baad Event Loop sabse pehle kis queue ko drain karta hai?',
            options: ['Macrotask Queue (setTimeout)', 'Microtask Queue (Promises)', 'DOM Animation Queue', 'Garbage Collector Queue'],
            answer: 'Microtask Queue (Promises)',
            explanation: 'The Event Loop always prioritizes and completely drains the Microtask Queue before processing any macrotasks.'
          },
          summary: ['Call Stack executes synchronous code', 'Microtasks (Promises) run before Macrotasks (setTimeout)', 'Event Loop coordinates non-blocking execution'],
          flashcard: { q: 'Microtask Queue aur Macrotask Queue mein kiski priority zyada hoti hai?', a: 'Microtask Queue (Promises) ki priority hamesha Macrotask Queue (setTimeout) se pehle hoti hai.' },
          funFact: '🎉 Fun Fact: Philip Roberts ka "What the heck is the event loop anyway?" JS community ka sabse zyada dekha gaya video tutorial hai (millions of views)!',
          challenge: {
            instruction: 'Log "Sync", queue a microtask with Promise.resolve().then, and log "End".',
            initialCode: `console.log("Sync");
Promise.resolve().then(() => console.log("Microtask"));
console.log("End");`,
            validator: (code) => code.includes('Sync') && code.includes('Promise.resolve') && code.includes('End')
          }
        },
        {
          id: 'js-async-await',
          title: 'Async/Await (Syntax, Error Handling & Parallel Tasks)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Async Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Async/Await asynchronous code ko bilkul synchronous jaisa clean aur readable bana deta hai! Callback hell aur lambe .then() chains ka the end! 🎉"',
            hint: '💡 Masti Sir: "`async` function hamesha Promise return karta hai, aur `await` sirf `async` function ke andar hi use hota hai!"',
            success: '🎉 Masti Sir: "Async/Await with try-catch mastered!"',
            mistake: '😅 Masti Sir: "Loop ke andar sequential `await` lagane se slow ho jayega — parallel ke liye `await Promise.all(items.map(fn))` use karo! 🚀"'
          },
          englishDef: 'The `async` and `await` keywords provide syntactic sugar over Promises, allowing asynchronous code to be written in a clean, readable synchronous style with standard `try...catch` error handling.',
          hinglishExplain: '`async/await` Promises ko use karne ka sabse aasan aur modern tareeqa hai. Function ke aage `async` likhte hain aur jis task ka wait karna hai uske aage `await` likhte hain. Code bilkul seedha chalta hai aur errors ko standard `try { ... } catch (err) { ... }` se handle karte hain.',
          storyExplain: 'Coffee Shop Ordering: `async function getCoffee()` -> `const beans = await grindBeans();` -> `const cup = await brewCoffee(beans);` -> `return cup;`. Har step seedha line-by-line padha ja sakta hai bina kisi nested callback ke!',
          funnyExample: {
            scenario: '// Clean & Beautiful:\nasync function loadApp() {\n  try {\n    const user = await fetchUser();\n    const posts = await fetchPosts(user.id);\n    console.log(posts);\n  } catch (err) {\n    console.error("Oops:", err.message);\n  }\n}',
            punchline: 'No .then() chains, just clean synchronous-looking code!'
          },
          memoryTrick: 'Async/Await Rules:\n- `async` before function: Automatically returns Promise\n- `await` before Promise: Pauses execution until Promise settles\n- `try...catch`: Native synchronous-style error handling\n- Parallel: `await Promise.all([task1(), task2()])`',
          visualDiagram: {
            title: 'Async Await Execution Flow',
            nodes: ['Call async function', 'Hits await task1() -> function pauses', 'Background Promise resolves -> function resumes', 'Hits await task2() -> repeats -> returns final result'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How V8 Implements Async/Await:',
            steps: ['async/await is built on top of ES6 Generators and Promises', 'await yields execution back to the caller while awaiting the microtask', 'When Promise settles, the engine resumes generator state with the resolved value']
          },
          code: `// Simulating API Fetch Helpers
const fetchUser = (id) => new Promise(res => setTimeout(() => res({ id, name: "Kavita", tier: "Pro" }), 400));
const fetchOrders = (userId) => new Promise(res => setTimeout(() => res(["Order #101", "Order #102"]), 400));

// Modern Async/Await Function
async function displayDashboard(userId) {
  try {
    console.log("⏳ Loading User Profile...");
    const user = await fetchUser(userId);
    console.log("✅ User Loaded:", user.name, \`(\${user.tier})\`);

    console.log("⏳ Loading Orders in Parallel...");
    const orders = await fetchOrders(user.id);
    console.log("📦 Orders Count:", orders.length, orders);

    return { success: true, user, orders };
  } catch (error) {
    console.error("❌ Dashboard Error:", error.message);
  } finally {
    console.log("🏁 Dashboard Data Fetch Complete.");
  }
}

displayDashboard(42);`,
          codeBreakdown: [
            { part: 'async function displayDashboard(userId)', label: 'Declares an asynchronous function returning a Promise', color: '#3b82f6' },
            { part: 'const user = await fetchUser(userId)', label: 'Pauses execution until fetchUser resolves and returns value', color: '#10b981' },
            { part: 'try { ... } catch (error) { ... }', label: 'Handles asynchronous network and runtime errors cleanly', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Forgetting the `async` keyword on the outer function when using `await` (SyntaxError)',
            '❌ Awaiting multiple independent promises in a sequential loop instead of using `Promise.all`'
          ],
          proTips: [
            '💡 When loading multiple independent endpoints, trigger them simultaneously: `const [u, o] = await Promise.all([fetchU(), fetchO()]);`',
            '💡 Top-level `await` is supported in ES Modules (no need to wrap in an async IIFE in modern JS)'
          ],
          interviewQuestions: [
            'How does `async/await` work under the hood in JavaScript?',
            'How do you handle errors with `async/await` compared to Promise `.catch()`?'
          ],
          miniChallenge: 'Write an async function `getData()` that awaits a Promise and returns the uppercase result.',
          quiz: {
            type: 'mcq',
            question: '`async` function hamesha kya return karta hai?',
            options: ['String', 'Number', 'Promise', 'Boolean'],
            answer: 'Promise',
            explanation: 'An async function always wraps its return value in a Promise (e.g. `async () => 5` returns `Promise.resolve(5)`).'
          },
          summary: ['async functions always return a Promise', 'await pauses until resolution without blocking main thread', 'try...catch cleanly handles all errors'],
          flashcard: { q: 'Async function ke andar error handle karne ke liye kya use karte hain?', a: '`try { ... } catch (error) { ... }` block.' },
          funFact: '🎉 Fun Fact: Top-level `await` (module level par bina async function ke await use karna) modern browsers aur Node.js 14.8+ mein fully supported hai!',
          challenge: {
            instruction: 'Create an async function loadData that awaits Promise.resolve("Done") and logs the result.',
            initialCode: `async function loadData() {
  const result = await Promise.resolve("Done");
  console.log(result);
}
loadData();`,
            validator: (code) => code.includes('async function') && code.includes('await Promise')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: EXCEPTION HANDLING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Exception Handling',
      lessons: [
        {
          id: 'js-error-handling',
          title: 'Error and Exception Handling (Built-in Error Types)',
          emoji: '⚠️',
          xpReward: 30,
          badgeName: 'Error Detective',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Bugs aur Errors se darna nahi hai, unhe samajhna hai! JavaScript ke 6 Built-in Error types (SyntaxError, ReferenceError, TypeError, etc.) ko pehchanna seekho! 🔍"',
            hint: '💡 Masti Sir: "`TypeError` tab aata hai jab aap kisi undefined cheez par method call karte ho ya const ko reassign karte ho!"',
            success: '🎉 Masti Sir: "JavaScript Built-in Error types mastered!"',
            mistake: '😅 Masti Sir: "ReferenceError: variable exist nahi karta; TypeError: variable exist karta hai par galat operation kiya ja raha hai! Dono ka farak samjho! 😂"'
          },
          englishDef: 'Exception Handling manages runtime errors gracefully so applications do not crash. JavaScript provides standard Error types including `Error`, `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`, and `URIError`.',
          hinglishExplain: 'Jab code mein koi galti hoti hai toh JavaScript crash hone se pehle ek Error object banata hai. Agar hum use handle nahi karenge toh poori app band ho jayegi. Error types:\n1. ReferenceError: Aisa variable access karna jo exist nahi karta.\n2. TypeError: Undefined par function call karna ya galat type use karna.\n3. RangeError: Number limit se bahar jana.\n4. SyntaxError: Code likhne mein spelling ya bracket ki galti.',
          storyExplain: 'Emergency Alarm: Building mein aag lage toh poori building collapse hone ke bajaye Fire Alarm baje aur Sprinklers chal jayein — wahi kaam Exception Handling karta hai.',
          funnyExample: {
            scenario: 'const user = null;\nuser.getName();\n// 💥 Uncaught TypeError: Cannot read properties of null (reading \'getName\')\n// The #1 most common error in JavaScript history! 😂',
            punchline: 'TypeError happens when operating on unexpected types!'
          },
          memoryTrick: 'Top 4 Error Types:\n- `ReferenceError`: "Who is this?" (Undeclared variable)\n- `TypeError`: "I can\'t do that to this type!" (Calling null.foo())\n- `SyntaxError`: "Invalid Grammar!" (Missing closing bracket)\n- `RangeError`: "Out of bounds!" (Array length -1 or stack overflow)',
          visualDiagram: {
            title: 'JavaScript Error Hierarchy',
            nodes: ['Error (Base Class: name, message, stack)', 'TypeError (Invalid type operations)', 'ReferenceError (Non-existent variables in scope)', 'RangeError (Values outside allowed boundaries)', 'SyntaxError (Malformed code parser errors)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Error Stack Trace:',
            steps: ['When an Error object is created, V8 captures the current Call Stack', 'stack property contains file name, line number, and function call chain', 'Helps developers pinpoint exact line of failure in DevTools']
          },
          code: `// Inspecting Built-in JavaScript Errors
function demonstrateErrors() {
  // 1. ReferenceError (Variable doesn't exist)
  try {
    console.log(nonExistentVar);
  } catch (err) {
    console.log("Caught:", err.name, "|", err.message);
  }

  // 2. TypeError (Invalid type operation)
  try {
    const num = 42;
    num.toUpperCase(); // Numbers don't have toUpperCase!
  } catch (err) {
    console.log("Caught:", err.name, "|", err.message);
  }

  // 3. RangeError (Invalid array length)
  try {
    const arr = new Array(-5);
  } catch (err) {
    console.log("Caught:", err.name, "|", err.message);
  }
}

demonstrateErrors();`,
          codeBreakdown: [
            { part: 'err.name, err.message', label: 'Standard properties on every JavaScript Error instance', color: '#3b82f6' },
            { part: 'num.toUpperCase() // TypeError', label: 'Calling string method on a number throws TypeError', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Confusing `ReferenceError` (variable not declared) with `TypeError` (variable is null/undefined or wrong type)'
          ],
          proTips: [
            '💡 Use Optional Chaining `user?.address?.city` to completely eliminate `"Cannot read properties of undefined"` TypeErrors',
            '💡 Always log `err.stack` during development to quickly trace call frames'
          ],
          interviewQuestions: [
            'What are the core differences between a `ReferenceError` and a `TypeError` in JavaScript?',
            'What properties are available on standard JavaScript Error objects?'
          ],
          miniChallenge: 'Write a function that catches a TypeError when calling a method on null and logs a friendly message.',
          quiz: {
            type: 'mcq',
            question: '`null.toString()` execute karne par JavaScript kaunsa error throw karega?',
            options: ['SyntaxError', 'ReferenceError', 'TypeError', 'RangeError'],
            answer: 'TypeError',
            explanation: 'Attempting to access properties or methods on `null` or `undefined` throws a `TypeError`.'
          },
          summary: ['TypeError occurs on invalid type operations', 'ReferenceError occurs on undeclared variables', 'Error objects contain name, message, and stack trace'],
          flashcard: { q: 'ReferenceError aur TypeError mein kya farak hai?', a: 'ReferenceError tab aata hai jab variable define hi na ho; TypeError tab aata hai jab variable galat type ka ho (jaise null par method call karna).' },
          funFact: '🎉 Fun Fact: Sentry aur Datadog ki report ke mutabiq duniya mein web applications ka #1 sabse common runtime error `"TypeError: Cannot read properties of undefined"` hai!',
          challenge: {
            instruction: 'Wrap a block in try-catch to catch a TypeError when calling a number as a function.',
            initialCode: `try {
  const x = 10;
  x(); // TypeError: x is not a function
} catch (error) {
  console.log("Caught error:", error.name);
}`,
            validator: (code) => code.includes('try') && code.includes('catch') && code.includes('error.name')
          }
        },
        {
          id: 'js-try-catch-throw',
          title: 'Errors Throw & Try to Catch (try, catch, finally & throw)',
          emoji: '🛡️',
          xpReward: 35,
          badgeName: 'Exception Guard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`try-catch-finally` aapka safety net hai! Code ko try block mein daalo, agar error aayi toh catch pakad lega aur `finally` har haal mein chalega! 🛡️"',
            hint: '💡 Masti Sir: "Custom validation fail hone par `throw new Error("Invalid Input")` feko!"',
            success: '🎉 Masti Sir: "Try Catch Throw and Finally mastered!"',
            mistake: '😅 Masti Sir: "`catch(err)` ko khali mat chhodna (swallowing errors) — error ko log karo ya user ko friendly message do! ⚠️"'
          },
          englishDef: 'The `try...catch...finally` statement handles blocks of code that may throw exceptions. The `throw` statement allows developers to create custom runtime exceptions.',
          hinglishExplain: '`try` block ke andar hum wo code likhte hain jisme error aane ka chance hota hai (jaise network call, JSON parsing). Agar error aati hai toh control seedhe `catch` block mein jata hai aur app crash nahi hoti. `finally` block hamesha chalta hai chahe error aaye ya na aaye (jaise loading spinner band karna).',
          storyExplain: 'Trapeze Artist with Safety Net: Artist (Code) stunts perform karta hai (`try`). Agar haath chhut gaya toh niche Safety Net (`catch`) usko bacha leta hai. Show khatam hone par lights band hoti hain (`finally`).',
          funnyExample: {
            scenario: 'try {\n  flyToMoon();\n} catch (err) {\n  console.log("Rocket failed, taking bicycle instead! 🚲");\n} finally {\n  console.log("Always brush your teeth! 🪥");\n}',
            punchline: 'finally block ALWAYS executes, no matter what!'
          },
          memoryTrick: 'Try-Catch-Finally Anatomy:\n- `try`: Code that might fail\n- `throw new Error(...)`: Trigger custom exception\n- `catch (err)`: Handle failure gracefully\n- `finally`: Guaranteed cleanup (runs 100% of the time)',
          visualDiagram: {
            title: 'Exception Handling Flow',
            nodes: ['try block executes', 'If error -> jump immediately to catch(err)', 'If no error -> skip catch block', 'finally block runs in BOTH scenarios'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Unwinding the Stack:',
            steps: ['When throw executes, engine pauses current execution', 'Walks up call stack searching for the nearest enclosing try-catch block', 'If no catch block is found in entire stack, unhandled exception terminates execution']
          },
          code: `// Function with Input Validation & Custom Throw
function processPayment(amount, userBalance) {
  try {
    console.log("💳 Initiating Payment processing...");

    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Payment amount must be a positive number.");
    }

    if (amount > userBalance) {
      throw new Error(\`Insufficient balance! Required: ₹\${amount}, Available: ₹\${userBalance}\`);
    }

    const remaining = userBalance - amount;
    console.log(\`✅ Payment Successful! Remaining: ₹\${remaining}\`);
    return { success: true, remaining };

  } catch (error) {
    console.error("❌ Payment Failed:", error.message);
    return { success: false, error: error.message };

  } finally {
    console.log("🔒 Transaction connection closed securely.");
  }
}

processPayment(1500, 1000); // Triggers insufficient balance error
console.log("---");
processPayment(500, 1000);  // Succeeds`,
          codeBreakdown: [
            { part: 'throw new Error(...)', label: 'Explicitly creates and raises an exception with a custom message', color: '#3b82f6' },
            { part: 'finally { ... }', label: 'Guaranteed execution block used for closing sockets, spinners, or DB connections', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Throwing plain strings (`throw "Error!"`) instead of `throw new Error("Error!")` (loses stack trace)',
            '❌ Catching errors and doing nothing with them (silent failure anti-pattern)'
          ],
          proTips: [
            '💡 Always throw instances of `Error` (`throw new Error(...)`) so your logs preserve stack traces and line numbers',
            '💡 Use `finally` to hide UI loading indicators and spinners so they never get stuck forever'
          ],
          interviewQuestions: [
            'Why should you always throw an `Error` object instead of a string or number in JavaScript?',
            'In what scenarios will the `finally` block execute?'
          ],
          miniChallenge: 'Write a JSON parsing helper that wraps `JSON.parse` in try-catch and returns a fallback object if parsing fails.',
          quiz: {
            type: 'mcq',
            question: '`try...catch...finally` mein `finally` block kab execute hota hai?',
            options: ['Sirf jab error aati hai', 'Sirf jab error nahi aati', 'Har haal mein execute hota hai (chahe error aaye ya na aaye)', 'Sirf asynchronous code mein'],
            answer: 'Har haal mein execute hota hai (chahe error aaye ya na aaye)',
            explanation: 'The `finally` block is guaranteed to execute after try and catch have finished, regardless of whether an exception occurred.'
          },
          summary: ['try tests dangerous code blocks', 'throw triggers custom exceptions', 'catch handles error payload', 'finally executes guaranteed cleanup'],
          flashcard: { q: 'JavaScript mein custom error raise karne ke liye kaunsa keyword use hota hai?', a: '`throw new Error("Error message");`' },
          funFact: '🎉 Fun Fact: Agar try block mein `return 1` ho aur finally block mein `return 2` ho, toh function `2` return karega kyunki finally hamesha jeet-ta hai!',
          challenge: {
            instruction: 'Write a function safeDivide(a, b) that throws an Error if b === 0, caught by a try-catch block.',
            initialCode: `function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    return err.message;
  }
}
console.log(safeDivide(10, 0));`,
            validator: (code) => code.includes('throw new Error') && code.includes('catch')
          }
        },
        {
          id: 'js-custom-errors',
          title: 'Custom Errors (Extending Error Class & Validation)',
          emoji: '🏷️',
          xpReward: 35,
          badgeName: 'Error Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Generic Error fekne ke bajaye `class ValidationError extends Error` banao! Production apps mein custom error classes se debugging 10 guna aasan ho jati hai! 🎯"',
            hint: '💡 Masti Sir: "Custom error class mein `this.name = this.constructor.name` aur `super(message)` lagao!"',
            success: '🎉 Masti Sir: "Custom Error classes mastered!"',
            mistake: '😅 Masti Sir: "Parent Error ke `super(message)` ko call karna mat bhoolna, warna message property set nahi hogi! ⚠️"'
          },
          englishDef: 'Custom Error classes extend the built-in `Error` class to provide domain-specific error types (e.g., `ValidationError`, `AuthenticationError`, `DatabaseError`) with custom metadata (status codes, field names).',
          hinglishExplain: 'Badi applications mein generic `Error` use karne ke bajaye hum apni Custom Error classes banate hain — jaise `ValidationError`, `AuthError`, ya `NotFoundError`. Isse hum catch block mein `if (err instanceof ValidationError)` check karke user ko specific error message dikha sakte hain.',
          storyExplain: 'Hospital Emergency Triage: Har patient ko sirf "Bimaar" kehne ke bajaye doctors "Fracture", "Cardiac", ya "Burn" classify karte hain taaki sahi doctor ko bheja ja sake. Custom errors wahi specialized classification hain.',
          funnyExample: {
            scenario: 'class CoffeeEmptyError extends Error {\n  constructor() {\n    super("Critical Alert: No Coffee in Developer! ☕");\n    this.name = "CoffeeEmptyError";\n  }\n}',
            punchline: 'Custom errors give crystal clear domain semantics!'
          },
          memoryTrick: 'Custom Error Blueprint:\n```js\nclass MyError extends Error {\n  constructor(message, statusCode) {\n    super(message);\n    this.name = "MyError";\n    this.statusCode = statusCode;\n  }\n}\n```\n- Check with: `if (err instanceof MyError)`',
          visualDiagram: {
            title: 'Custom Error Class Hierarchy',
            nodes: ['Built-in Error (message, stack)', 'ValidationError extends Error (field, rule)', 'AuthenticationError extends Error (statusCode: 401)', 'NotFoundError extends Error (statusCode: 404)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Error Inheritance Chain:',
            steps: ['Subclass extends built-in Error prototype', 'super(message) initializes message and captures stack trace', 'instanceof check matches error type through prototype chain']
          },
          code: `// 1. Domain Specific Custom Error Classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class AuthError extends Error {
  constructor(message = "Unauthorized Access") {
    super(message);
    this.name = "AuthError";
    this.statusCode = 401;
  }
}

// 2. Using Custom Errors in Service Logic
function registerUser(userData) {
  if (!userData.username || userData.username.length < 3) {
    throw new ValidationError("Username must be at least 3 characters long", "username");
  }

  if (!userData.isAdmin) {
    throw new AuthError("Only Admins can perform bulk registration!");
  }

  return "User Registered Successfully! 🎉";
}

// 3. Graceful Type-Specific Catch Handling
try {
  registerUser({ username: "Al", isAdmin: false });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(\`⚠️ Validation Failed on field [\${error.field}]: \${error.message}\`);
  } else if (error instanceof AuthError) {
    console.error(\`🔒 Auth Error (\${error.statusCode}): \${error.message}\`);
  } else {
    console.error("💥 Unknown System Error:", error.message);
  }
}`,
          codeBreakdown: [
            { part: 'class ValidationError extends Error', label: 'Inherits stack trace, name, and message from base Error', color: '#3b82f6' },
            { part: 'if (error instanceof ValidationError)', label: 'Type-safe error branching based on custom error class instance', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting to set `this.name = "CustomErrorName"` (defaults to "Error" otherwise)',
            '❌ Forgetting `super(message)` in custom error constructor'
          ],
          proTips: [
            '💡 In Express.js and backend APIs, attach `statusCode` (400, 401, 404, 500) to custom errors for centralized error handling middleware',
            '💡 Use `Error.captureStackTrace(this, this.constructor)` to clean up internal frames in V8'
          ],
          interviewQuestions: [
            'Why should you create custom Error classes instead of using generic Error objects?',
            'How do you check what kind of custom error was caught in a `catch` block?'
          ],
          miniChallenge: 'Create a NotFoundError class that extends Error and adds a `resourceName` property.',
          quiz: {
            type: 'mcq',
            question: 'Custom error create karne ke liye kis built-in class ko extend kiya jata hai?',
            options: ['Exception', 'Object', 'Error', 'Throwable'],
            answer: 'Error',
            explanation: 'Custom error classes extend JavaScript\'s built-in `Error` class (`class MyError extends Error`).'
          },
          summary: ['Custom error classes extend built-in Error', 'Add custom metadata like statusCode and field', 'instanceof enables clean error dispatching'],
          flashcard: { q: 'Catch block mein specific error type kaise identify karte hain?', a: '`if (err instanceof CustomErrorClass)` check karke.' },
          funFact: '🎉 Fun Fact: Express.js aur Fastify jaise modern backend frameworks mein 90% error handling custom error classes ke zariye hi centralized middleware mein hoti hai!',
          challenge: {
            instruction: 'Create a DatabaseError class extending Error that attaches a query property.',
            initialCode: `class DatabaseError extends Error {
  constructor(message, query) {
    super(message);
    this.name = "DatabaseError";
    this.query = query;
  }
}
const dbErr = new DatabaseError("Connection timeout", "SELECT * FROM users");
console.log(dbErr.name, dbErr.query);`,
            validator: (code) => code.includes('class DatabaseError extends Error') && code.includes('this.query')
          }
        },
        {
          id: 'js-typeerror-sort-debug',
          title: 'TypeError & Invalid Array.prototype.sort (Deep Debugging)',
          emoji: '🐞',
          xpReward: 35,
          badgeName: 'Bug Slayer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript ka `Array.prototype.sort()` sabse zyada surprise karne wala method hai! Numbers ko string samajh kar sort karta hai! Aaj iska poora postmortem karenge! 🔬"',
            hint: '💡 Masti Sir: "Hamesha numeric comparator `(a, b) => a - b` (Ascending) ya `(a, b) => b - a` (Descending) pass karo!"',
            success: '🎉 Masti Sir: "Array sort quirks and TypeError debugging mastered!"',
            mistake: '😅 Masti Sir: "`[10, 5, 40, 25].sort()` bina comparator ke `[10, 25, 40, 5]` dega kyunki string \'10\' string \'5\' se pehle aati hai! 😂"'
          },
          englishDef: 'Understanding common runtime TypeErrors and Array.prototype.sort quirks is essential for defensive JavaScript development. Default `.sort()` converts elements to strings, requiring explicit comparator functions `(a, b) => a - b` for reliable numeric ordering.',
          hinglishExplain: 'JavaScript mein `Array.prototype.sort()` by default numbers ko strings mein convert karke alphabetically sort karta hai, isliye `100` number `25` se pehle aa jata hai. Is bug aur related TypeErrors se bachne ke liye hum comparator function `(a, b) => a - b` likhte hain aur defensive checks lagate hain.',
          storyExplain: 'Dictionary vs Number Sorting: Dictionary mein "Banana" "Cat" se pehle aayega aur "100" "25" se pehle aayega kyunki pehla letter "1" "2" se pehle aata hai. Par mathematics mein 25 chhota hota hai 100 se — isliye comparator zaroori hai!',
          funnyExample: {
            scenario: 'const prices = [1000, 200, 50, 5];\nprices.sort(); // [1000, 200, 5, 50] 😱\nprices.sort((a, b) => a - b); // [5, 50, 200, 1000] 🎉',
            punchline: 'Never sort numbers without a comparator function!'
          },
          memoryTrick: 'Sort Comparator Formula:\n- Ascending (Chhota -> Bada): `(a, b) => a - b` (If negative, a comes first)\n- Descending (Bada -> Chhota): `(a, b) => b - a` (If positive, b comes first)\n- Object Array by key: `(a, b) => a.price - b.price`\n- Defensive Array check: `Array.isArray(arr) && arr.sort(...)`',
          visualDiagram: {
            title: 'Numeric Sort Comparator Logic',
            nodes: ['Compare pair (a, b)', 'a - b < 0 -> a comes before b', 'a - b === 0 -> order unchanged', 'a - b > 0 -> b comes before a'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'V8 Timsort / Dual-Pivot Quicksort Algorithm:',
            steps: ['V8 uses Timsort (hybrid of Merge Sort and Insertion Sort)', 'Comparator is called O(N log N) times on element pairs', 'If comparator throws or returns non-numbers, sort behavior becomes unpredictable']
          },
          code: `// 1. Default Sort Quirk (Alphabetical)
const scores = [10, 5, 40, 25, 100, 1];
console.log("Default Sort (String Alphabetical):", [...scores].sort()); 
// -> [1, 10, 100, 25, 40, 5] (Buggy for numbers!)

// 2. Correct Numeric Sort (Ascending & Descending)
const ascending = [...scores].sort((a, b) => a - b);
const descending = [...scores].sort((a, b) => b - a);

console.log("✅ Numeric Ascending:", ascending);
console.log("✅ Numeric Descending:", descending);

// 3. Sorting Array of Objects by Property
const products = [
  { name: "Laptop", price: 65000 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 2500 }
];

products.sort((a, b) => a.price - b.price);
console.log("Products Sorted by Price:", products);

// 4. Defensive TypeError Handling
function safeSort(arr, comparator) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array to sort, received " + typeof arr);
  }
  return [...arr].sort(comparator || ((a, b) => a - b));
}

console.log("Safe Sorted:", safeSort([90, 12, 45]));`,
          codeBreakdown: [
            { part: '[...scores].sort((a, b) => a - b)', label: 'Creates a copy first via spread, then sorts numerically ascending', color: '#3b82f6' },
            { part: 'products.sort((a, b) => a.price - b.price)', label: 'Sorts complex objects by numeric property values', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Sorting in-place on original array in React state (always copy first with `[...arr].sort()` or use `arr.toSorted()`)',
            '❌ Returning a boolean `a > b` from comparator instead of a number (`a - b`)'
          ],
          proTips: [
            '💡 Use the new ES2023 `arr.toSorted((a, b) => a - b)` method to sort immutably without mutating the source array',
            '💡 For string arrays with accents or international characters, use `a.localeCompare(b)` instead of `<`'
          ],
          interviewQuestions: [
            'Why does `[10, 5, 40].sort()` result in `[10, 40, 5]` by default?',
            'What should a comparator function return for ascending vs descending order?'
          ],
          miniChallenge: 'Sort an array of students `[{name: "B", grade: 80}, {name: "A", grade: 95}]` descending by grade.',
          quiz: {
            type: 'mcq',
            question: 'Array.prototype.sort mein numbers ko Ascending order (chhota se bada) mein sort karne ka correct comparator kya hai?',
            options: ['(a, b) => a > b', '(a, b) => a - b', '(a, b) => b - a', '(a, b) => a == b'],
            answer: '(a, b) => a - b',
            explanation: 'Returning `a - b` yields a negative number when `a < b`, ordering elements in ascending numerical sequence.'
          },
          summary: ['Default sort casts elements to strings', '(a, b) => a - b gives numeric ascending sort', 'Use [...arr].sort() or toSorted() to avoid state mutation'],
          flashcard: { q: 'Numeric sorting ke liye comparator `(a, b) => a - b` kyu zaroori hota hai?', a: 'Kyunki default `.sort()` numbers ko string bana kar alphabetical order mein sort karta hai.' },
          funFact: '🎉 Fun Fact: V8 engine mein array size 10 se kam hone par Insertion Sort aur bada hone par Timsort use hota hai!',
          challenge: {
            instruction: 'Sort the array [45, 12, 89, 3] in ascending order using a comparator.',
            initialCode: `const numbers = [45, 12, 89, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);`,
            validator: (code) => code.includes('.sort((a, b) => a - b)') || code.includes('a - b')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: DOM (DOCUMENT OBJECT MODEL)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'DOM',
      lessons: [
        {
          id: 'js-dom-intro-selectors',
          title: 'DOM Introduction & Selecting Elements',
          emoji: '🌲',
          xpReward: 35,
          badgeName: 'DOM Scout',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "DOM (Document Object Model) HTML document ka JavaScript representation hai! `document.querySelector` aur `getElementById` se hum kisi bhi element ko pakad sakte hain! 🎯"',
            hint: '💡 Masti Sir: "`querySelector("#id")` single element deta hai, aur `querySelectorAll(".card")` matching elements ki NodeList deta hai!"',
            success: '🎉 Masti Sir: "DOM Selectors and NodeList mastered!"',
            mistake: '😅 Masti Sir: "`querySelectorAll` array nahi balki NodeList return karta hai — isme map/filter chalane ke liye `Array.from()` ya `[...nodes]` use karo! ⚠️"'
          },
          englishDef: 'The Document Object Model (DOM) is a tree-like programming interface for web documents, allowing JavaScript to dynamically read, query, and manipulate HTML elements and styling.',
          hinglishExplain: 'DOM browser dwara banaya gaya ek Tree structure hai jo HTML code ko JavaScript objects mein convert karta hai. `document.querySelector("#btn")` se hum HTML ke kisi bhi element ko CSS selector ke zariye pakad sakte hain aur uske content, color ya text ko change kar sakte hain.',
          storyExplain: 'Remote Control & TV: HTML aapka TV screen hai aur DOM uska sensor hai. JavaScript remote control hai — button dabane par JavaScript DOM ke zariye screen ka channel (text/color) change karta hai.',
          funnyExample: {
            scenario: 'const heading = document.querySelector("h1");\nheading.textContent = "Hacked by Masti Sir! 🚀";\n// Instant page update without reload! 🎉',
            punchline: 'DOM connects JavaScript to the live visual browser window!'
          },
          memoryTrick: 'Top DOM Selectors:\n- `document.getElementById("id")`: Ultra fast single element\n- `document.querySelector(".class / #id")`: Modern versatile CSS selector (First match)\n- `document.querySelectorAll(".card")`: Returns NodeList of all matches\n- Convert to Array: `Array.from(document.querySelectorAll(".card"))`',
          visualDiagram: {
            title: 'DOM Tree Hierarchy',
            nodes: ['document', '  -> html', '    -> head (title, meta)', '    -> body', '      -> header, main (#app), footer'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Browser Builds the DOM:',
            steps: ['Raw HTML bytes converted into characters', 'Characters tokenized into HTML tags (<div ...>)', 'Tokens converted into Node objects', 'Nodes linked into the hierarchical DOM Tree']
          },
          code: `// 1. Selecting Single Elements
const mainHeading = document.getElementById("main-title");
const submitBtn = document.querySelector(".btn-submit");

// 2. Selecting Multiple Elements (NodeList)
const featureCards = document.querySelectorAll(".feature-card");
console.log("Total Feature Cards:", featureCards.length);

// 3. Iterating Over NodeList
featureCards.forEach((card, index) => {
  console.log(\`Card #\${index + 1}:\`, card.textContent);
});

// 4. Converting NodeList to True Array
const cardsArray = Array.from(featureCards);
const highlighted = cardsArray.filter(c => c.classList.contains("highlight"));`,
          codeBreakdown: [
            { part: 'document.querySelector(".btn-submit")', label: 'Finds the first matching element using standard CSS selector syntax', color: '#3b82f6' },
            { part: 'document.querySelectorAll(".feature-card")', label: 'Returns a static NodeList of all matching elements', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Running `.map()` or `.filter()` directly on a NodeList without converting to an Array (`Array.from()` or `[...nodes]`)',
            '❌ Trying to query elements before DOM has loaded (place script at end of body or use `DOMContentLoaded`)'
          ],
          proTips: [
            '💡 Use `querySelector` and `querySelectorAll` as your default selectors for maximum flexibility',
            '💡 Cache DOM queries in variables instead of querying the DOM repeatedly inside tight loops'
          ],
          interviewQuestions: [
            'What is the difference between `HTMLCollection` and `NodeList` in the DOM?',
            'How does `querySelector` differ from `getElementById` in terms of syntax and performance?'
          ],
          miniChallenge: 'Select all elements with class `.price-tag` and calculate their total combined value.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa selector CSS selector syntax (".my-class", "#my-id") support karta hai aur first match return karta hai?',
            options: ['getElementById', 'getElementsByTagName', 'querySelector', 'querySelectorAll'],
            answer: 'querySelector',
            explanation: '`document.querySelector` accepts any valid CSS selector string and returns the first matching Element node in the document.'
          },
          summary: ['DOM is the JS tree representation of HTML', 'querySelector selects first match via CSS selector', 'querySelectorAll returns iterable NodeList'],
          flashcard: { q: 'querySelector aur getElementById mein kya farak hai?', a: 'querySelector kisi bhi CSS selector (.class, #id, tag[attr]) ko match karta hai, jabki getElementById sirf exact ID match karta hai.' },
          funFact: '🎉 Fun Fact: DOM JavaScript ka part nahi hai — ye Browser Web API ka hissa hai jise JavaScript ke zariye control kiya jata hai!',
          challenge: {
            instruction: 'Select an element with ID "title" and update its textContent to "Hello World".',
            initialCode: `// Assume <h1 id="title">Old Title</h1> exists:
const el = document.getElementById("title") || { textContent: "" };
el.textContent = "Hello World";
console.log(el.textContent);`,
            validator: (code) => code.includes('textContent') && code.includes('Hello World')
          }
        },
        {
          id: 'js-dom-manipulation',
          title: 'DOM Manipulation & Attributes (innerHTML, textContent, classList & styles)',
          emoji: '🎨',
          xpReward: 35,
          badgeName: 'DOM Painter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "DOM Manipulation se website dynamic banti hai! `textContent` se text badlo aur `classList.toggle()` se dark mode on-off karo! 🎨"',
            hint: '💡 Masti Sir: "User input ke sath `innerHTML` mat use karo — XSS security attack ho sakta hai! Hamesha `textContent` prefer karo!"',
            success: '🎉 Masti Sir: "DOM Manipulation and ClassList mastered!"',
            mistake: '😅 Masti Sir: "`classList.add("dark")` mein dot `.` mat lagana — sirf class ka naam pass karo! 😂"'
          },
          englishDef: 'DOM Manipulation allows JavaScript to dynamically modify element text (`textContent`), HTML markup (`innerHTML`), attributes (`setAttribute`, `getAttribute`), inline styles (`element.style`), and CSS classes (`classList.add`, `remove`, `toggle`).',
          hinglishExplain: 'DOM Manipulation se hum web page ke elements ko live update karte hain. `textContent` se text badalte hain, `classList.add("active")` se styling class lagate hain, aur `classList.toggle("dark-mode")` se themes switch karte hain.',
          storyExplain: 'Digital Notice Board: Notice board ka text badalna (`textContent = "Holiday Tomorrow!"`), notice board par "Important" ka red tag lagana (`classList.add("badge-urgent")`), aur purana notice hatana.',
          funnyExample: {
            scenario: '// Dark Mode Toggle in 1 line:\ndocument.body.classList.toggle("dark-theme");\n// Switched themes with ease! 🎉',
            punchline: 'classList.toggle eliminates manual boolean tracking!'
          },
          memoryTrick: 'DOM Manipulation Arsenal:\n- Text: `el.textContent = "Safe Text"` (XSS Safe)\n- HTML: `el.innerHTML = "<b>Bold</b>"`\n- Classes: `el.classList.add("c")`, `remove("c")`, `toggle("c")`\n- Attributes: `el.setAttribute("src", "img.png")`, `el.getAttribute("src")`\n- Style: `el.style.backgroundColor = "#2f8d46"`',
          visualDiagram: {
            title: 'DOM Property & Style Updates',
            nodes: ['Target Node (e.g. #banner)', 'textContent = "Sale Live"', 'classList.toggle("active")', 'style.color = "var(--green)"', 'Triggers Reflow & Repaint in Browser'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Reflow vs Repaint:',
            steps: ['Changing textContent or color causes Repaint (fast)', 'Changing width, height, margin or layout causes Reflow/Relayout (costly)', 'Batch DOM updates together to avoid layout thrashing']
          },
          code: `// Mocking DOM element manipulation
const banner = document.createElement("div");
banner.id = "notification-banner";

// 1. Text & Content Manipulation (Safe from XSS)
banner.textContent = "🎉 50% Off Flash Sale Live Now!";

// 2. ClassList Manipulation
banner.classList.add("alert", "alert-success", "pulse-animation");
banner.classList.remove("pulse-animation");
banner.classList.toggle("visible"); // Adds if missing, removes if present

// 3. Attribute Manipulation
banner.setAttribute("role", "alert");
banner.setAttribute("data-discount", "50");
console.log("Discount Attribute:", banner.getAttribute("data-discount"));

// 4. Dynamic Inline Styles
banner.style.backgroundColor = "#16a34a";
banner.style.color = "#ffffff";
banner.style.padding = "12px 20px";
banner.style.borderRadius = "8px";

console.log("Banner HTML:", banner.outerHTML);`,
          codeBreakdown: [
            { part: 'banner.textContent = ...', label: 'Safe plain text assignment preventing malicious script injection', color: '#3b82f6' },
            { part: 'banner.classList.toggle("visible")', label: 'Toggles class state on element in a single clean method call', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Using `innerHTML` with unsanitized user inputs creating Cross-Site Scripting (XSS) vulnerabilities',
            '❌ Forgetting CSS property names use camelCase in JS (`backgroundColor` instead of `background-color`)'
          ],
          proTips: [
            '💡 Always prefer `classList.add / remove / toggle` over direct `element.className = ...` assignment',
            '💡 Use CSS variables with `element.style.setProperty("--primary", color)` for smooth theme transitions'
          ],
          interviewQuestions: [
            'What is the security difference between `innerHTML` and `textContent`?',
            'What is the difference between a Browser Reflow and Repaint, and how do you minimize layout thrashing?'
          ],
          miniChallenge: 'Create a button that toggles a `.dark-theme` class on `document.body` on each click.',
          quiz: {
            type: 'mcq',
            question: 'User input ko safely render karne ke liye XSS attacks se bachne ke liye kya use karna chahiye?',
            options: ['innerHTML', 'textContent', 'outerHTML', 'document.write'],
            answer: 'textContent',
            explanation: '`textContent` treats all inputs as literal text and automatically escapes HTML tags, preventing Cross-Site Scripting (XSS).'
          },
          summary: ['textContent is safe from XSS', 'classList.toggle switches states effortlessly', 'Batch style changes to prevent reflows'],
          flashcard: { q: 'innerHTML aur textContent mein kya security difference hai?', a: 'innerHTML HTML tags ko parse karke execute karta hai (XSS risk), jabki textContent plain text treat karta hai (100% safe).' },
          funFact: '🎉 Fun Fact: `classList.contains("active")` boolean check se aap bina try-catch ke verify kar sakte hain ki element par class lagi hai ya nahi!',
          challenge: {
            instruction: 'Set an element\'s textContent to "Updated", add class "active", and set style.color to "blue".',
            initialCode: `const el = document.createElement("p");
el.textContent = "Updated";
el.classList.add("active");
el.style.color = "blue";
console.log(el.outerHTML);`,
            validator: (code) => code.includes('textContent') && code.includes('classList.add') && code.includes('style.color')
          }
        },
        {
          id: 'js-dom-events',
          title: 'DOM Events & Event Listeners (Bubbling, Capturing & Delegation)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Event Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Events se website interactive banti hai — Click, Keypress, Scroll, Submit! Event Bubbling aur Event Delegation ka funda senior interviews mein zaroor pucha jata hai! 🎯"',
            hint: '💡 Masti Sir: "Event Delegation mein 100 buttons par alag alag listener lagane ke bajaye unke 1 Parent element par single listener lagao!"',
            success: '🎉 Masti Sir: "DOM Events, Bubbling and Delegation mastered!"',
            mistake: '😅 Masti Sir: "Form submit par page reload hone se bachane ke liye `e.preventDefault()` lagana mat bhoolna! ⚠️"'
          },
          englishDef: 'DOM Events represent browser interactions (click, input, submit, scroll). The event flow occurs in three phases: Capturing (down), Target, and Bubbling (up). Event Delegation optimizes performance by attaching a single listener to a parent element.',
          hinglishExplain: 'Jab user button dabata hai ya type karta hai toh Event fire hota hai. `addEventListener("click", handler)` se hum us event par code chalate hain. Event Bubbling ka matlab hai event child se parent ki taraf bubble up hota hai. Event Delegation se hum 1000 items par alag alag listener lagane ke bajaye 1 parent par listener lagate hain.',
          storyExplain: 'Shopping Mall Announcement: Har dukan mein alag security guard rakhne ke bajaye Mall ke Main Gate (Parent) par ek security guard rakh diya jo har aane wale customer (e.target) ka pass check karta hai (Event Delegation).',
          funnyExample: {
            scenario: 'form.addEventListener("submit", (e) => {\n  e.preventDefault(); // Stop page reload!\n  console.log("Handled via AJAX! 🚀");\n});',
            punchline: 'e.preventDefault() keeps your single-page app alive!'
          },
          memoryTrick: 'Event 3-Phase Flow:\n1. Capturing Phase (Window -> Document -> Body -> Target)\n2. Target Phase (Direct element clicked)\n3. Bubbling Phase (Target -> Body -> Document -> Window)\n- `e.stopPropagation()`: Stops bubbling up\n- `e.preventDefault()`: Stops default browser action\n- `e.target`: The actual element clicked',
          visualDiagram: {
            title: 'Event Propagation (Capture vs Bubble)',
            nodes: ['Capture Phase (Top -> Down to Target)', 'Target Clicked (e.target)', 'Bubbling Phase (Bottom -> Up to Parent)', 'Parent Event Delegation intercepts e.target'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Event Loop & Dispatch:',
            steps: ['User clicks element on screen', 'Browser creates Event Object with coordinates, target, timestamp', 'Dispatches event through Capture -> Target -> Bubble phases', 'Executes registered handler callbacks on Call Stack']
          },
          code: `// 1. Standard Event Listener
const submitButton = document.createElement("button");
submitButton.textContent = "Submit Form";

submitButton.addEventListener("click", (event) => {
  console.log("Button Clicked at coordinates:", event.clientX, event.clientY);
  console.log("Target Element:", event.target);
});

// 2. Form Submit with preventDefault
const form = document.createElement("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevents full page browser refresh!
  console.log("Form submitted seamlessly via JavaScript!");
});

// 3. High-Performance Event Delegation Pattern
// Single listener on parent <ul> handles clicks on 10,000 <li> items!
const todoList = document.createElement("ul");
todoList.addEventListener("click", (e) => {
  // Check if the clicked target was a delete button
  if (e.target.matches(".btn-delete")) {
    const item = e.target.closest("li");
    console.log("Deleting todo item:", item.textContent);
    item.remove();
  }
});`,
          codeBreakdown: [
            { part: 'e.preventDefault()', label: 'Prevents default browser behavior like form reload or anchor navigation', color: '#3b82f6' },
            { part: 'e.target.matches(".btn-delete")', label: 'Event Delegation pattern: checks if clicked target matches selector', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Attaching separate click event listeners inside a loop to 500 list items (causes high memory usage; use Event Delegation instead!)',
            '❌ Confusing `e.target` (the actual clicked element) with `e.currentTarget` (the element that owns the event listener)'
          ],
          proTips: [
            '💡 Always use Event Delegation on dynamic lists where items can be added or removed at runtime',
            '💡 Use `{ once: true }` option in `addEventListener` if a button should only fire once (e.g. submit payment)'
          ],
          interviewQuestions: [
            'What is the difference between Event Bubbling and Event Capturing?',
            'What is Event Delegation and what performance benefits does it provide?',
            'What is the difference between `e.target` and `e.currentTarget`?'
          ],
          miniChallenge: 'Attach an event listener to a parent div that logs the text of whichever child button was clicked.',
          quiz: {
            type: 'mcq',
            question: 'Event Delegation ka sabse bada fayda kya hai?',
            options: ['CSS fast load hoti hai', 'Bohot saare child elements ke liye parent par single listener se memory optimize hoti hai', 'HTML size kam ho jata hai', 'Database fast respond karta hai'],
            answer: 'Bohot saare child elements ke liye parent par single listener se memory optimize hoti hai',
            explanation: 'Event Delegation attaches a single event listener to a common ancestor, utilizing event bubbling to manage dynamic children efficiently with minimal memory.'
          },
          summary: ['addEventListener registers user interactions', 'e.preventDefault() stops native reload/navigation', 'Event delegation optimizes thousands of items via parent'],
          flashcard: { q: '`e.target` aur `e.currentTarget` mein kya fark hai?', a: '`e.target` wo exact element hai jahan click hua, aur `e.currentTarget` wo element hai jispar event listener attach kiya gaya hai.' },
          funFact: '🎉 Fun Fact: React ka pura synthetic event system internally root document level par Event Delegation use karta hai!',
          challenge: {
            instruction: 'Add a submit event listener to a form that calls e.preventDefault() and logs "Form Handled".',
            initialCode: `const form = document.createElement("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form Handled");
});`,
            validator: (code) => code.includes('addEventListener') && code.includes('e.preventDefault()')
          }
        },
        {
          id: 'js-dom-traversal',
          title: 'DOM Traversal & Node Creation (createElement, appendChild & parent/children)',
          emoji: '🌳',
          xpReward: 35,
          badgeName: 'DOM Constructor',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "DOM Traversal se hum tree mein upar-niche navigate karte hain, aur `createElement` + `DocumentFragment` se high-speed dynamic elements create karte hain! 🌲"',
            hint: '💡 Masti Sir: "`DocumentFragment` ek invisible memory container hai jisme 100 elements daal kar 1 hi baar mein DOM mein insert kar sakte hain!"',
            success: '🎉 Masti Sir: "DOM Traversal and Dynamic Node Creation mastered!"',
            mistake: '😅 Masti Sir: "Loop ke andar baar-baar `parentElement.appendChild()` mat karo — Fragment use karke 1 baar append karo for 10x speed! 🚀"'
          },
          englishDef: 'DOM Traversal navigates relationships between nodes (`parentElement`, `children`, `nextElementSibling`, `closest`). Node creation utilizes `document.createElement()`, `appendChild()`, `append()`, and memory-optimized `DocumentFragment`.',
          hinglishExplain: 'DOM Traversal se hum kisi element ke mummy-papa (`parentElement`), bachhe (`children`), ya padosi (`nextElementSibling`) tak pohonchte hain. `document.createElement("div")` se hum memory mein naya HTML element banate hain aur `appendChild` se use page par add karte hain.',
          storyExplain: 'Family Tree Navigation: Aap khade ho (Current Node). Papa ke paas jana hai -> `parentElement`. Chhote bhai ke paas jana hai -> `nextElementSibling`. Poore parivaar ki photo frame banana -> `DocumentFragment`.',
          funnyExample: {
            scenario: 'const li = document.createElement("li");\nli.textContent = "New Masti Topic 🚀";\nul.appendChild(li);\n// Boom! Clean dynamic element added to live page! 🎉',
            punchline: 'createElement + append constructs rich dynamic user interfaces!'
          },
          memoryTrick: 'Traversal & Creation Toolkit:\n- Up: `el.parentElement`, `el.closest(".container")`\n- Down: `el.children` (HTML elements), `el.firstElementChild`\n- Sideways: `el.nextElementSibling`, `el.previousElementSibling`\n- Create: `document.createElement("tag")`\n- Insert: `parent.append(child)`, `parent.appendChild(child)`\n- High Perf Batch: `document.createDocumentFragment()`',
          visualDiagram: {
            title: 'DOM Node Traversal Matrix',
            nodes: ['parentElement (Upwards)', 'previousElementSibling <- Target Element -> nextElementSibling', 'children / firstElementChild (Downwards)', 'createDocumentFragment (Batch Inserter)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'DocumentFragment Performance Optimization:',
            steps: ['DocumentFragment is an in-memory lightweight container with no parent', 'Appending 100 items to Fragment causes 0 Reflows in live DOM', 'Appending Fragment once to live DOM triggers exactly 1 single layout pass']
          },
          code: `// 1. Traversing Existing DOM Nodes
const card = document.createElement("div");
card.className = "user-card";
card.innerHTML = \`<span class="badge">PRO</span><h3>Aman Verma</h3><button class="btn-delete">Delete</button>\`;

const btn = card.querySelector(".btn-delete");
console.log("Parent Element:", btn.parentElement.className); // "user-card"
console.log("Closest Card Container:", btn.closest(".user-card"));

// 2. High-Performance Batch Node Creation using DocumentFragment
const studentList = document.createElement("ul");
const students = ["Aman", "Rohan", "Kavita", "Aditi", "Sameer"];

// Create memory fragment
const fragment = document.createDocumentFragment();

students.forEach(studentName => {
  const li = document.createElement("li");
  li.className = "student-item";
  li.textContent = \`🎓 \${studentName}\`;
  fragment.appendChild(li); // Appended to memory container (0 reflows!)
});

// Single insertion to live list
studentList.appendChild(fragment);
console.log("Total Created Items in List:", studentList.children.length);`,
          codeBreakdown: [
            { part: 'document.createDocumentFragment()', label: 'In-memory virtual node container preventing multiple layout reflows', color: '#3b82f6' },
            { part: 'btn.closest(".user-card")', label: 'Traverses upwards to find the nearest ancestor matching the CSS selector', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Confusing `childNodes` (includes text/whitespace nodes) with `children` (only HTML element tags)',
            '❌ Appending elements one by one inside large loops causing heavy layout thrashing'
          ],
          proTips: [
            '💡 Always use `element.closest(selector)` to find ancestor containers in event delegation handlers',
            '💡 Use `DocumentFragment` whenever inserting 10+ dynamic items into a list or table'
          ],
          interviewQuestions: [
            'What is a `DocumentFragment` and why is it used for performance optimization?',
            'What is the difference between `parentElement` and `parentNode`?',
            'How does the `closest()` method work in DOM traversal?'
          ],
          miniChallenge: 'Create an un-ordered list `<ul>`, generate 5 `<li>` elements dynamically in a fragment, and append to the list.',
          quiz: {
            type: 'mcq',
            question: 'Loop mein 100 naye elements ko DOM mein fastest tareeqe se insert karne ke liye kya use karna chahiye?',
            options: ['Loop mein 100 baar appendChild call karna', 'DocumentFragment mein assemble karke 1 baar append karna', 'innerHTML ko += string concatenate karna', 'document.write use karna'],
            answer: 'DocumentFragment mein assemble karke 1 baar append karna',
            explanation: 'Using a `DocumentFragment` batches all node additions in memory, resulting in a single reflow/repaint when attached to the DOM.'
          },
          summary: ['parentElement and closest() traverse upwards', 'children traverses downwards', 'DocumentFragment provides high-speed batch DOM insertions'],
          flashcard: { q: '`element.closest(".card")` method kya karta hai?', a: 'Element se shuru karke parent hierarchy mein upar traverse karta hai aur sabse pehle matching ancestor ko return karta hai.' },
          funFact: '🎉 Fun Fact: Modern UI libraries jaise React aur Virtual DOM internally DocumentFragment aur batch reconciliation techniques hi use karti hain!',
          challenge: {
            instruction: 'Create a DocumentFragment, append a new <li> element to it, and attach it to a <ul> element.',
            initialCode: `const ul = document.createElement("ul");
const fragment = document.createDocumentFragment();
const li = document.createElement("li");
li.textContent = "Mastered JavaScript!";
fragment.appendChild(li);
ul.appendChild(fragment);
console.log(ul.children.length);`,
            validator: (code) => code.includes('createDocumentFragment') && code.includes('appendChild')
          }
        }
      ]
    }
  ]
}

export default javascriptCourse
