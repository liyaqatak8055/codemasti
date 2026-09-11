// Chapter 4 — Strings (14 Comprehensive Lessons & Practice Problems)
import { createDsaLesson } from './dsaHelper.js'

export const ch4Strings = {
  chapterTitle: 'Strings',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-a-string',
      title: 'What is a String?',
      emoji: '🔤',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'A String is an ordered sequence of characters used to represent text. In JavaScript, strings are zero-indexed, meaning the first character is located at index 0 and the last character is at index length - 1.',
      secondExplain: 'Characters are individual letters, numbers, punctuation symbols, or whitespaces (e.g. "C", "9", "@", " "). When multiple characters are chained together in sequence, they form a string. JavaScript strings are immutable, meaning individual characters cannot be modified in-place.',
      definitionHighlight: '🔤 Core Definition: String = Ordered Sequence of Characters | First Character = `str[0]` | Last Character = `str[str.length - 1]` | Strings are Immutable in JavaScript',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Are Strings Essential in Programming & DSA?',
        subtitle: 'From user identification to search query parsing and text analytics.',
        mappings: [
          { need: '👤 1. Identity & Auth Systems', ds: 'Usernames, passwords, email addresses, and security tokens are stored and validated as strings.' },
          { need: '🌐 2. Web URLs & API Payloads', ds: 'REST query params, JSON payloads, and network protocols communicate entirely in structured text strings.' },
          { need: '🔍 3. Search & Pattern Matching', ds: 'Search engines, code editors, and bioinformatics analyze genomic DNA patterns as long string sequences.' },
          { need: '💬 4. Natural Language Processing', ds: 'AI models, chatbots, and parsers tokenize sentences into character sequences for comprehension.' }
        ],
        takeaway: '💡 Text is the primary interface between humans and computers, making string manipulation a core requirement in every software application.'
      },
      comparisonTable: {
        title: 'Character vs String vs Array Comparison',
        headers: ['Property', 'Character', 'String (JavaScript)', 'Character Array (`char[]`)'],
        rows: [
          { feature: 'Definition', data: 'Single symbol (e.g. `"A"`)', ds: 'Sequence of characters (`"Code"`)', third: 'Array of characters (`[\'C\',\'o\',\'d\',\'e\']`)', fourth: 'Data structure' },
          { feature: 'Indexing', data: 'No index (Scalar)', ds: 'Zero-indexed (`str[0]`)', third: 'Zero-indexed (`arr[0]`)', fourth: 'Index-based access' },
          { feature: 'Mutability', data: 'Value type', ds: 'Immutable (Cannot edit `str[0] = "X"`)', third: 'Mutable (Can do `arr[0] = "X"`)', fourth: 'In-place edits' },
          { feature: 'Memory Allocation', data: '16-bit UTF-16 code unit', ds: 'Contiguous UTF-16 sequence in engine', third: 'Array object with element pointers', fourth: 'Structure overhead' }
        ],
        takeaway: '💡 Remember: JavaScript strings are immutable sequences of characters; to edit characters in-place, convert to an array using `str.split("")`.'
      },
      tradeoffs: {
        title: 'Important Properties of Strings',
        intro: 'The fundamental properties every programmer must know about strings:',
        items: [
          {
            title: '1. Ordered Sequence (`"CAT" !== "TAC"`)',
            desc: 'Characters maintain exact sequential positions. Changing the order changes the entire identity and meaning of the string.'
          },
          {
            title: '2. Zero-Based Indexing',
            desc: 'The first character is at `str[0]`, the second at `str[1]`, and the last character is at `str[str.length - 1]`.'
          },
          {
            title: '3. String Immutability in JavaScript',
            desc: 'Executing `str[0] = "Y"` does not throw an error in non-strict mode, but it does NOT modify the string. A new string must be reassigned: `str = "Y" + str.slice(1)`.'
          },
          {
            title: '4. Whitespaces and Symbols are Full Characters',
            desc: 'In `"Hello World"`, the space at index 5 is a valid character with length 1. `"12345"` is a text string of digits, not a mathematical number.'
          }
        ]
      },
      hinglishExplain: `String ko simple Hinglish mein samjhein:

"String ka simple matlab hai: Characters (aksharon) ki ek seedhi line!"

Train Coach Analogy:
Ek train ke 4 dabbe hain:
[ C ] [ O ] [ D ] [ E ]
  0     1     2     3

• Pehla dabba (Coach 0): 'C'
• Doosra dabba (Coach 1): 'O'
• Teesra dabba (Coach 2): 'D'
• Chautha dabba (Coach 3): 'E'

Agar koi pooche: "str[2] par kya hai?"
Answer: 'D'

Length vs Last Index:
• Total Dabbe (Length): 4
• Last Dabbe Ka Number (Index): 4 - 1 = 3

JavaScript Immutability Rule:
let str = "Hello";
str[0] = "Y"; // ❌ Kuch nahi badlega! "Hello" hi rahega.
str = "Yello"; // ✅ Nayi string banakar variable mein daalna padega!

🧠 Simple Golden Rule:
"String = Characters ki ordered sequence + Zero-based Indexing + Immutable nature!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Code Ka Naamplate:

Masti Sir ne class mein sabhi students se apna naamplate banane ko kaha.
Student Liyaqat ne wooden plate par letters likhe:
const name = "Liyaqat";

Masti Sir ne plate ko board par rakha aur niche index likhe:
L   i   y   a   q   a   t
0   1   2   3   4   5   6

Masti Sir bole: "Chintu, batao index 4 par kaunsa letter hai?"
Chintu ne gina: 0, 1, 2, 3, 4 ──► "Sir, 'q' hai!"

Masti Sir: "Aur agar hum name[0] ko 'R' banana chahein toh?"
Chintu ne eraser se 'L' mitane ki koshish ki, lekin wooden plate par lakdi khodi ja chuki thi (Immutable)!

Masti Sir bole: "JavaScript strings bilkul wooden plate jaisi hoti hain — ek baar ban gayi toh uske andar ka letter direct change nahi kar sakte. Nayi plate ('Riyaqat') banani padegi!" 💡`,
      conceptMapping: [
        { emoji: '🔤', item: 'String', mapsTo: 'Sequence of text characters' },
        { emoji: '🔠', item: 'Character', mapsTo: 'Single letter, digit, or symbol' },
        { emoji: '📍', item: 'Zero-Based Index', mapsTo: 'Positions starting from 0 to length - 1' },
        { emoji: '📏', item: 'str.length', mapsTo: 'Total count of characters in string' },
        { emoji: '🔒', item: 'Immutable', mapsTo: 'Existing string characters cannot be modified in-place' },
        { emoji: '🚶‍♂️', item: 'String Traversal', mapsTo: 'Visiting each character sequentially in O(N) time' }
      ],
      realWorldVisualDiagram: {
        title: 'String Character Structure & Zero-Based Indexing',
        pipeline: [
          { step: '01. Characters Sequence', desc: 'C   o   d   e   M   a   s   t   i  (Length = 9)' },
          { step: '02. Zero-Based Indices', desc: '0   1   2   3   4   5   6   7   8' },
          { step: '03. Direct Access str[2]', desc: 'Jump to index 2 ──► Returns \'d\' in O(1) time' },
          { step: '04. Last Item str[length - 1]', desc: 'Jump to index (9 - 1) = 8 ──► Returns \'i\'' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// WHAT IS A STRING: JAVASCRIPT FUNDAMENTALS & OPERATIONS
// ══════════════════════════════════════════════════════════════

// 1. Basic String Declaration & Indexing
const str = "CodeMasti";

console.log("Full String:", str);
console.log("Length:", str.length);              // 9
console.log("First Character (str[0]):", str[0]); // 'C'
console.log("Character at Index 3:", str[3]);    // 'e'
console.log("Last Character:", str[str.length - 1]); // 'i'

// 2. Demonstrating JavaScript String Immutability
let word = "Hello";
word[0] = "Y"; // ❌ Does not mutate the string
console.log("After word[0] = 'Y':", word); // "Hello" (unchanged!)

word = "Y" + word.slice(1); // ✅ Correct: Create new string
console.log("After reassignment:", word); // "Yello"

// 3. String Traversal: Index Loop vs for...of Loop
console.log("\\n--- Character Traversal ---");
for (let i = 0; i < str.length; i++) {
  console.log(\`Index \${i}: \${str[i]}\`);
}

// 4. Common Built-in String Operations
console.log("\\n--- Common Operations ---");
console.log("Uppercase:", str.toUpperCase());       // "CODEMASTI"
console.log("Lowercase:", str.toLowerCase());       // "codemasti"
console.log("Includes 'Masti':", str.includes("Masti")); // true
console.log("Index of 'M':", str.indexOf("M"));     // 4
console.log("Substring slice(0, 4):", str.slice(0, 4)); // "Code"
console.log("Replace:", str.replace("Masti", "Learn")); // "CodeLearn"`,
      codeBreakdown: [
        { part: 'const str = "CodeMasti"', label: 'Memory mein 9 characters ka ordered immutable sequence allocate karta hai', color: '#3b82f6' },
        { part: 'str[0] and str[3]', label: 'Zero-based indexing se constant O(1) time mein specific character read karta hai', color: '#10b981' },
        { part: 'str[str.length - 1]', label: 'Length - 1 index hamesha aakhri character ka position point karta hai', color: '#8b5cf6' },
        { part: 'word[0] = "Y" (Immutability)', label: 'JavaScript strings immutable hoti hain, isliye in-place character write fail hota hai', color: '#f59e0b' },
        { part: 'for (let i = 0; i < str.length; i++)', label: 'Linear O(N) pass mein string ke har character ko visit karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run: Traversing "CODE"',
        steps: [
          { step: 'i = 0', action: 'Condition (0 < 4: Yes) ──► Read str[0] = \'C\' ──► Print \'C\'' },
          { step: 'i = 1', action: 'Condition (1 < 4: Yes) ──► Read str[1] = \'O\' ──► Print \'O\'' },
          { step: 'i = 2', action: 'Condition (2 < 4: Yes) ──► Read str[2] = \'D\' ──► Print \'D\'' },
          { step: 'i = 3', action: 'Condition (3 < 4: Yes) ──► Read str[3] = \'E\' ──► Print \'E\'' },
          { step: 'i = 4', action: 'Condition (4 < 4: No ❌) ──► Loop terminates. Visited 4 chars in O(N) time ✅' }
        ]
      },
      timeComplexity: 'Access: O(1) | Traversal: O(N) Linear Time',
      timeComplexityExplain: 'Accessing any character by index (`str[i]`) takes O(1) constant time. Visiting all N characters in a loop takes O(N) linear time.',
      spaceComplexity: 'O(1) Auxiliary Space for Traversal / O(N) for String Storage',
      spaceComplexityExplain: 'Reading characters and running loops uses zero extra memory. Storing a string of N characters requires O(N) engine memory.',
      commonMistakes: [
        '❌ Mistake 1: Forgetting zero-based indexing and thinking the first letter is at index 1.\\n✅ Correct: The first letter is always `str[0]`.',
        '❌ Mistake 2: Writing `for (let i = 0; i <= str.length; i++)` which reads out-of-bounds `undefined` at index length.\\n✅ Correct: Use strict `< str.length`.',
        '❌ Mistake 3: Trying to change a character in-place (`str[0] = "X"`).\\n✅ Correct: Strings are immutable; use `str.slice()` or `str.split("")` to create a new modified string.',
        '❌ Mistake 4: Confusing string length with the last index.\\n✅ Correct: If length is 5, valid indices are 0 to 4 (last index is `length - 1`).',
        '❌ Mistake 5: Forgetting that spaces `" "` and digits `"5"` are full characters that count towards length.',
        '❌ Mistake 6: Confusing character `"C"` (length 1) with multi-character string `"CODE"` (length 4).'
      ],
      proTips: [
        '💡 Last Character Idiom: Use `str.at(-1)` in modern JavaScript as a clean shorthand for `str[str.length - 1]`.',
        '💡 In-Place Editing Trick: When you need mutable character arrays in DSA, convert the string using `const arr = str.split("")`, modify `arr[i]`, then join back `arr.join("")`.',
        '💡 Loop Selection: Use `for (const ch of str)` when you only need character values, and indexed `for (let i = 0; i < str.length; i++)` when you need character positions.'
      ],
      interviewQuestions: [
        'What is a string and how is it represented in JavaScript?',
        'What is the difference between a character and a string?',
        'Why does JavaScript use zero-based indexing for strings?',
        'What does string immutability mean and how do you handle modifications?',
        'How do you access the first and last character of a string in O(1) time?',
        'What is the time complexity of traversing a string of length N?',
        'What is the difference between `str.slice()` and `str.substring()`?',
        'Why does `str[0] = "Z"` fail to modify a string in JavaScript?',
        'How do spaces and special characters affect string length?',
        'How can you check if a string contains a specific substring?'
      ],
      quiz: [
        {
          question: 'Q1. String `const city = "Lucknow";` mein `city[3]` ka output kya hoga?',
          options: ['u', 'c', 'k', 'n'],
          correct: 2,
          explanation: 'Indices: L(0), u(1), c(2), k(3) ──► Output is \'k\'.'
        },
        {
          question: 'Q2. JavaScript string `const word = "Hello";` ke liye `word.length` aur aakhri character ka index kya hoga?',
          options: ['Length: 5, Last Index: 5', 'Length: 5, Last Index: 4', 'Length: 4, Last Index: 4', 'Length: 6, Last Index: 5'],
          correct: 1,
          explanation: 'Total characters 5 hain, aur zero-based indexing ke karan last index 5 - 1 = 4 hai.'
        },
        {
          question: 'Q3. JavaScript mein `let s = "Cat"; s[0] = "B"; console.log(s);` ka output kya hoga?',
          options: ['"Bat"', '"Cat"', 'undefined', 'TypeError'],
          correct: 1,
          explanation: 'JavaScript strings immutable hoti hain, isliye `s[0] = "B"` string ko mutate nahi karta aur output "Cat" hi rehta hai.'
        },
        {
          question: 'Q4. String ke kisi character ko index se access (`str[i]`) karne ki Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(N)', 'O(log N)', 'O(N²)'],
          correct: 0,
          explanation: 'Direct index access takes instant constant O(1) time.'
        },
        {
          question: 'Q5. String `"Code Masti"` ki length kitni hogi?',
          options: ['9', '10 (Space is counted)', '8', '11'],
          correct: 1,
          explanation: '"Code" (4) + space " " (1) + "Masti" (5) = total 10 characters.'
        }
      ],
      practiceProblems: [
        {
          title: 'Print First and Last Character',
          difficulty: 'Easy',
          description: 'Given a non-empty string s, print its first character and last character.',
          hint: 'First char is s[0] and last char is s[s.length - 1].'
        },
        {
          title: 'Count Vowels in a String',
          difficulty: 'Easy',
          description: 'Traverse string s and count how many vowels (a, e, i, o, u) it contains.',
          hint: 'Iterate using for...of and check if "aeiouAEIOU".includes(ch).'
        },
        {
          title: 'Count Spaces in a Sentence',
          difficulty: 'Easy',
          description: 'Given a sentence string, count the total number of whitespace characters.',
          hint: 'Loop through string and increment count whenever ch === " ".'
        },
        {
          title: 'Reverse a String (LeetCode 344)',
          difficulty: 'Easy',
          description: 'Reverse the characters of a string using a two-pointer approach.',
          hint: 'Convert to array using str.split(""), swap left and right pointers, then join back.'
        },
        {
          title: 'Valid Palindrome (LeetCode 125)',
          difficulty: 'Easy',
          description: 'Check if a string reads the same forward and backward after removing non-alphanumeric characters.',
          hint: 'Clean the string to lowercase and compare characters from both ends using two pointers.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-string-representation',
      title: 'String Representation',
      emoji: '📜',
      difficulty: 'Beginner',
      englishDef: 'Strings are represented in memory as an array of characters with integer character codes (e.g. ASCII "A" = 65, "a" = 97).',
      hinglishExplain: 'Memory mein har letter ek number code hota hai. `"A".charCodeAt(0)` se 65 milta hai.',
      code: `console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(65)); // "A"`
    }),

    createDsaLesson({
      id: 'dsa-string-traversal',
      title: 'String Traversal',
      emoji: '🚶‍♂️',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'String Traversal is the process of sequentially visiting and processing each character of a string from index 0 to index length - 1, running in linear O(N) time.',
      secondExplain: 'Traversing a string is the foundational building block for almost all string operations: counting specific letters, filtering vowels, searching words, checking palindromes, and converting character cases.',
      definitionHighlight: '🚶‍♂️ Core Rule: Traversal = Ek-ek karke har character ko visit karna | Starts at `0` | Ends at `length - 1` | Time: O(N) | Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is String Traversal the Foundation of String DSA?',
        subtitle: 'Every string algorithm starts with inspecting characters sequentially.',
        mappings: [
          { need: '🔢 1. Character & Vowel Counting', ds: 'Counting vowels, consonants, spaces, and digits by inspecting each character once.' },
          { need: '🔍 2. Linear Search & Validation', ds: 'Checking if a string contains special characters, valid email formats, or banned words.' },
          { need: '🔄 3. Transformation & Formatting', ds: 'Building new formatted strings (e.g. capitalized titles, slugified URLs, or masked passwords).' },
          { need: '📊 4. Frequency & Anagram Maps', ds: 'Iterating through the string to populate frequency hash tables in single-pass O(N) time.' }
        ],
        takeaway: '💡 Without traversal, you cannot inspect, validate, count, or transform the characters inside a string.'
      },
      comparisonTable: {
        title: 'String Traversal Techniques in JavaScript',
        headers: ['Traversal Method', 'Syntax Example', 'Gives Index?', 'Best Used When'],
        rows: [
          { feature: 'Indexed `for` loop ⭐', data: '`for (let i = 0; i < str.length; i++)`', ds: 'Yes (`i` & `str[i]`)', third: 'Need index positions or adjacent checks' },
          { feature: '`for...of` loop ⭐⭐', data: '`for (const ch of str)`', ds: 'No (Direct `ch`)', third: 'Only need character values (cleanest syntax)' },
          { feature: '`while` loop', data: '`let i = 0; while (i < str.length)`', ds: 'Yes (Manual `i++`)', third: 'Two-pointer converging algorithms' },
          { feature: '`Array.prototype` methods', data: '`str.split("").forEach(ch => ...)`', ds: 'Yes (`ch, index`)', third: 'Functional transformations (costs O(N) array allocation)' }
        ],
        takeaway: '💡 Use `for...of` for simple value reads, and indexed `for` when character positions are needed.'
      },
      tradeoffs: {
        title: 'Traversal Trade-offs & Selection',
        intro: 'Choosing the right traversal loop based on your problem requirements:',
        items: [
          {
            title: '1. `for...of` Loop: Cleanest & Most Readable',
            desc: 'Directly provides character values with zero risk of off-by-one index bugs. Ideal for counting vowels, spaces, or building frequency maps.'
          },
          {
            title: '2. Indexed `for` Loop: Maximum Positional Control',
            desc: 'Provides index `i`, enabling lookahead checks like `str[i + 1]` (e.g. checking consecutive duplicate letters) and bidirectional two-pointer traversal.'
          },
          {
            title: '3. Array Conversion (`str.split("")`): Use Judiciously',
            desc: 'Converting to an array allows `.map()` and `.filter()`, but creates an extra O(N) array in memory. In DSA interviews, prefer native string traversal loops.'
          }
        ]
      },
      hinglishExplain: `String Traversal ko simple Hinglish mein samjhein:

"String Traversal ka matlab hai string ke characters ko ek-ek karke shuru se aakhri tak visit karna!"

🎬 Cinema Hall Seat Analogy:
Socho string ek cinema hall ki row hai:
[ C ] ──► [ O ] ──► [ D ] ──► [ I ] ──► [ N ] ──► [ G ]
  0         1         2         3         4         5

Aap ticket checker ho aur seat-by-seat aage badh rahe ho:
1. Pehle Seat 0 ('C') check kiya
2. Fir Seat 1 ('O') check kiya
3. ...
4. Aakhri mein Seat 5 ('G') check kiya

Traverse Kyun Karte Hain?
• Vowels count karne ke liye
• Kisi letter ko dhoondhne ke liye
• String ko reverse ya transform karne ke liye
• Har letter ka frequency table banane ke liye

🧠 Golden Formula:
"Loop shuru karo index 0 se, condition rakho i < length, aur har step par i++!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Aur Character-tendance:

Masti Sir class mein aaye aur bole:
"Aaj bacho ki attendance nahi, word ki character-tendance hogi!" 😂

Unhone blackboard par likha:
"CODING"

Sir ne apna wooden pointer uthaya aur ek-ek letter par tap kiya:
C ──► O ──► D ──► I ──► N ──► G

Har letter par tap karke bole: "Present! Present! Present!"

Ek student Chintu ne pucha: "Sir, aap seedhe poora word kyun nahi padh lete? Ek-ek letter kyun dekh rahe ho?"

Masti Sir muskuraye aur bole:
"Beta! Agar main poora word ek baar mein dekhunga, toh mujhe kaise pata chalega ki isme kitne Vowels hain aur kaunsa letter kis position par baitha hai?
Jab hume har element ko inspect karna hota hai, toh ek-ek karke visit karna hi padta hai — isiliye ise kehte hain **String Traversal**!" 😎

💡 Lesson:
"String Traversal = String ke har character ko one-by-one visit aur process karna."`,
      conceptMapping: [
        { emoji: '🚶‍♂️', item: 'String Traversal', mapsTo: 'Visiting characters sequentially from start to end' },
        { emoji: '🏁', item: 'Start Index (0)', mapsTo: 'Beginning of traversal at the first character' },
        { emoji: '🛑', item: 'Loop Boundary', mapsTo: 'Strict inequality `i < str.length`' },
        { emoji: '🎯', item: 'str[i]', mapsTo: 'Instant O(1) character access at current position' },
        { emoji: '⏱️', item: 'O(N) Time', mapsTo: 'Linear time proportional to string length N' },
        { emoji: '💾', item: 'O(1) Space', mapsTo: 'Constant extra memory for loop counter' }
      ],
      realWorldVisualDiagram: {
        title: 'Step-by-Step Character Traversal Pipeline on "HELLO"',
        pipeline: [
          { step: '01. Index 0 (H)', desc: 'i = 0 ──► Read word[0] = \'H\' ──► Process/Print' },
          { step: '02. Index 1 (E)', desc: 'i = 1 ──► Read word[1] = \'E\' ──► Process/Print' },
          { step: '03. Index 2 & 3 (L, L)', desc: 'i = 2, 3 ──► Read word[2]=\'L\', word[3]=\'L\'' },
          { step: '04. Index 4 (O)', desc: 'i = 4 (length - 1) ──► Read word[4] = \'O\'' },
          { step: '05. Index 5 (Stop)', desc: 'i = 5 ──► (5 < 5 is False ❌) ──► Traversal Complete ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// STRING TRAVERSAL IN JAVASCRIPT: CORE METHODS & EXAMPLES
// ══════════════════════════════════════════════════════════════

const word = "HELLO";

// 1. Classic Indexed for Loop (Provides Index + Character)
console.log("--- 1. Indexed for Loop ---");
for (let i = 0; i < word.length; i++) {
  console.log(\`Index \${i}: \${word[i]}\`);
}

// 2. Modern for...of Loop (Direct Character Access)
console.log("\\n--- 2. for...of Loop ---");
for (const char of word) {
  console.log("Char:", char);
}

// 3. Practical Example: Count Vowels in a String: O(N) Time, O(1) Space
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

// 4. Practical Example: Count Target Character: O(N) Time, O(1) Space
function countCharacter(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) {
      count++;
    }
  }
  return count;
}

// 🧪 Test Demonstrations
console.log("\\nVowels in 'education':", countVowels("education")); // 5
console.log("Count of 'a' in 'banana':", countCharacter("banana", "a")); // 3`,
      codeBreakdown: [
        { part: 'for (let i = 0; i < word.length; i++)', label: 'Index 0 se lekar length - 1 tak ek-ek step traverse karta hai', color: '#3b82f6' },
        { part: 'word[i]', label: 'Current loop index par baitha character instant O(1) mein fetch karta hai', color: '#10b981' },
        { part: 'for (const char of word)', label: 'Clean ES6 iteration jo directly har character ki value return karta hai', color: '#8b5cf6' },
        { part: 'if (vowels.includes(ch)) count++', label: 'Traversal ke dauran har character ko inspect karke match milne par count badhata hai', color: '#f59e0b' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run: Traversing "HELLO"',
        steps: [
          { step: 'i = 0', action: 'Condition 0 < 5 ✅ ──► word[0] = \'H\' ──► Action: Print \'H\'' },
          { step: 'i = 1', action: 'Condition 1 < 5 ✅ ──► word[1] = \'E\' ──► Action: Print \'E\'' },
          { step: 'i = 2', action: 'Condition 2 < 5 ✅ ──► word[2] = \'L\' ──► Action: Print \'L\'' },
          { step: 'i = 3', action: 'Condition 3 < 5 ✅ ──► word[3] = \'L\' ──► Action: Print \'L\'' },
          { step: 'i = 4', action: 'Condition 4 < 5 ✅ ──► word[4] = \'O\' ──► Action: Print \'O\'' },
          { step: 'i = 5', action: 'Condition 5 < 5 ❌ ──► Loop stops cleanly. All 5 chars visited ✅' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'If a string contains N characters, visiting and processing each character once requires exactly N loop iterations.',
      spaceComplexity: 'O(1) - Constant Auxiliary Space',
      spaceComplexityExplain: 'Simple traversal only uses a scalar counter variable (like `i` or `count`), requiring zero secondary memory buffers.',
      commonMistakes: [
        '❌ Mistake 1: Starting loop at `i = 1` instead of `i = 0`.\\n✅ Correct: Always start at `i = 0` so the first character is not skipped.',
        '❌ Mistake 2: Writing `i <= word.length` instead of `i < word.length`.\\n✅ Correct: `i <= length` tries to access index `length` which is out of bounds (`undefined`).',
        '❌ Mistake 3: Confusing index `i` with character `word[i]`.\\n✅ Correct: `i` is the numeric position (0, 1, 2); `word[i]` is the actual letter (\'H\', \'E\', \'L\').',
        '❌ Mistake 4: Trying to modify characters during traversal (`word[i] = "X"`).\\n✅ Correct: Strings are immutable in JavaScript. Build a new string or array instead.',
        '❌ Mistake 5: Using unnecessary nested loops when a single linear pass suffices.'
      ],
      proTips: [
        '💡 Selection Rule: Use `for (const char of str)` when you only need values, and indexed `for (let i = 0; i < str.length; i++)` when you need positions.',
        '💡 In-Loop Early Exit: When searching for a character, use `return` or `break` immediately upon finding the target to save unnecessary iterations.',
        '💡 Interview Tip: In interview questions, explicitly state: "I will traverse the string once in O(N) time using O(1) auxiliary space."'
      ],
      interviewQuestions: [
        'What is String Traversal and what is its typical time complexity?',
        'What is the index of the first and last character during traversal?',
        'What is the difference between traversing with `for` vs `for...of` in JavaScript?',
        'How do you count vowels or specific characters in a string in O(N) time?',
        'Why does `for (let i = 0; i <= str.length; i++)` cause an off-by-one bug?',
        'How can you traverse a string backward from end to beginning?'
      ],
      quiz: [
        {
          question: 'Q1. String "HELLO" ka first character kis index par hota hai?',
          options: ['1', '0', '-1', '5'],
          correct: 1,
          explanation: 'JavaScript mein zero-based indexing hoti hai, isliye first character hamesha index 0 par hota hai.'
        },
        {
          question: 'Q2. Agar string ki length 10 hai, toh last valid character ka index kya hoga?',
          options: ['10', '9 (Length - 1)', '11', '0'],
          correct: 1,
          explanation: 'Last valid index hamesha length - 1 hota hai (10 - 1 = 9).'
        },
        {
          question: 'Q3. N length ki string ke har character ko exactly ek baar visit karne ki Time Complexity kya hai?',
          options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
          correct: 2,
          explanation: 'N characters ko linear order mein ek baar visit karne par O(N) time lagta hai.'
        },
        {
          question: 'Q4. Code `for (const char of "CAT") { console.log(char); }` ka output kya hoga?',
          options: ['"CAT"', 'C \\n A \\n T', '0 \\n 1 \\n 2', 'Error'],
          correct: 1,
          explanation: 'for...of loop har iteration mein ek-ek character print karta hai.'
        },
        {
          question: 'Q5. String Traversal ka sabse common practical use case kya hai?',
          options: ['Character counting, searching aur validation', 'Computer shutdown karna', 'Variable delete karna', 'Internet connect karna'],
          correct: 0,
          explanation: 'Traversal se characters count, search, validate aur transform kiye jaate hain.'
        }
      ],
      practiceProblems: [
        {
          title: 'Print Characters of a String',
          difficulty: 'Easy',
          description: 'Traverse string s and print each character on a new line.',
          hint: 'Use a simple for...of loop.'
        },
        {
          title: 'Count Vowels in a String',
          difficulty: 'Easy',
          description: 'Return total count of vowels (a, e, i, o, u) in a given string.',
          hint: 'Traverse string and check if "aeiouAEIOU".includes(ch).'
        },
        {
          title: 'Count Specific Character Occurrences',
          difficulty: 'Easy',
          description: 'Given string s and target char c, count how many times c appears.',
          hint: 'Increment counter whenever s[i] === target.'
        },
        {
          title: 'Count Uppercase and Lowercase Letters',
          difficulty: 'Medium',
          description: 'Traverse a string and count total uppercase and lowercase characters separately.',
          hint: 'Check if ch >= "A" && ch <= "Z" for uppercase.'
        },
        {
          title: 'Character Frequency Map',
          difficulty: 'Medium',
          description: 'Traverse a string and return an object with the frequency of each character.',
          hint: 'Use freq[ch] = (freq[ch] || 0) + 1 inside a single traversal pass.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-string-comparison',
      title: 'String Comparison',
      emoji: '⚖️',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'String Comparison is the process of comparing two strings character-by-character from left to right using their Unicode code point values to determine equality or lexicographical (dictionary) order.',
      secondExplain: 'When comparing strings, evaluation proceeds index-by-index. Comparison stops immediately at the first different character. If all compared characters match but one string is longer, the shorter prefix string comes first. Two strings are equal only if they have identical characters and length.',
      definitionHighlight: '⚖️ Dictionary Rule: Left to Right ──► First Different Char Decides ──► Same Prefix? Shorter String Wins ──► Best Time: O(1) | Worst Time: O(N) | Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is String Comparison Essential in Programming & DSA?',
        subtitle: 'From sorting names to password verification and binary search.',
        mappings: [
          { need: '🔤 1. Alphabetical Sorting', ds: 'Sorting contact books, product catalogs, and dictionaries in lexicographical order.' },
          { need: '🔒 2. Authentication & Verification', ds: 'Strict equality checking (`===`) for usernames, passwords, and security hashes.' },
          { need: '🔍 3. Binary Search on Strings', ds: 'Searching for words in sorted string arrays in O(L log N) time based on comparison results.' },
          { need: '✂️ 4. Autocomplete & Prefix Match', ds: 'Comparing prefixes in Trie structures and dropdown search suggestions.' }
        ],
        takeaway: '💡 String comparison is the foundational operation for sorting, searching, and validating text.'
      },
      comparisonTable: {
        title: 'Lexicographical Comparison Decision Matrix',
        headers: ['Comparison', 'Result', 'Reason / Why It Happens'],
        rows: [
          { feature: '`"apple" === "apple"`', data: '`true` (Equal)', ds: 'All characters match and lengths are identical' },
          { feature: '`"apple" < "banana"`', data: '`true` (Smaller)', ds: 'At index 0, \'a\' comes before \'b\' (Unicode 97 < 98)' },
          { feature: '`"app" < "apple"`', data: '`true` (Smaller)', ds: 'Prefix "app" matches; shorter string ends first' },
          { feature: '`"cat" > "car"`', data: '`true` (Greater)', ds: 'At index 2, \'t\' comes after \'r\' (Unicode 116 > 114)' },
          { feature: '`"Apple" < "apple"`', data: '`true` (Smaller)', ds: 'Uppercase \'A\' (65) is numerically smaller than lowercase \'a\' (97)' }
        ],
        takeaway: '💡 JavaScript string comparison is case-sensitive and proceeds strictly by Unicode code point values.'
      },
      tradeoffs: {
        title: 'Comparison Mechanics & Early-Exit Advantage',
        intro: 'Understanding how comparison optimizes character evaluation:',
        items: [
          {
            title: '1. Early Exit Decision: Best Case O(1)',
            desc: 'If `"zebra"` and `"apple"` are compared, the result is decided instantly at index 0 without reading the remaining letters.'
          },
          {
            title: '2. Prefix Matching: Worst Case O(N)',
            desc: 'When comparing `"abcdefghijk"` with `"abcdefghijz"`, the engine must scan all matching prefix characters before finding the mismatch at the end.'
          },
          {
            title: '3. Case Sensitivity Invariant',
            desc: 'All uppercase English letters (A-Z: 65-90) come before lowercase letters (a-z: 97-122). For case-insensitive checks, convert both with `.toLowerCase()` first.'
          }
        ]
      },
      hinglishExplain: `String Comparison ko simple Hinglish mein samjhein:

"String Comparison ka matlab hai: Do words ko Dictionary ke hisaab se compare karna!"

Dictionary Rule Kaise Kaam Karta Hai?
1. **Left se Right** ek-ek character compare hota hai.
2. **Pehla Difference Milte Hi Decision:** Jaise hi koi alag letter mila, decision wahi ho jata hai (aage ke letters check karne ki zaroorat nahi padti).
   • \\"cat\\" vs \\"car\\" ──► index 2 par 't' > 'r' ──► \\"cat\\" > \\"car\\"
3. **Prefix Match & Length Rule:** Agar saare dekhe gaye letters same hain par ek string chhoti hai:
   • \\"app\\" vs \\"apple\\" ──► Chhoti string pehle aayegi ──► \\"app\\" < \\"apple\\"
4. **All Characters & Length Same:** Tabhi dono strings Equal (===) hongi.

🧠 Golden Slogan:
"Same chalo, different mila ──► turant decision karo!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Ki Dictionary Race:

Masti Sir ke class mein do students admission ke liye aaye:
Student 1: "Ali"
Student 2: "Anil"

Sir ko unke roll numbers alphabetical order mein lagane the.
Sir ne magnifying glass uthaya aur ek-ek letter compare kiya:

1. Index 0: 'A' vs 'A' ──► Same hai! Agle letter par chalo.
2. Index 1: 'l' vs 'n' ──► Ruko! 'l' alphabet mein 'n' se pehle aata hai!

Masti Sir bole: "Decision yahi ho gaya! 'Ali' ko Roll Number 1 milega aur 'Anil' ko Roll Number 2!"

Chintu ne pucha: "Sir, Anil ke aage ka 'i' aur 'l' check nahi karenge?"
Masti Sir bole: "Arre Chintu, jab index 1 par hi winner mil gaya, toh aage check karke time waste kyun karein!" 😎

💡 Lesson:
"First different character hi decision le leta hai — baaki string scan karne ki zaroorat nahi padti!"`,
      conceptMapping: [
        { emoji: '⚖️', item: 'String Comparison', mapsTo: 'Left-to-right character-by-character evaluation' },
        { emoji: '📖', item: 'Lexicographical Order', mapsTo: 'Dictionary ordering based on Unicode code points' },
        { emoji: '⚡', item: 'First Difference', mapsTo: 'Instant early-exit decision point' },
        { emoji: '✂️', item: 'Shorter Prefix', mapsTo: 'Shorter string comes first when prefix matches' },
        { emoji: '🟰', item: 'Equal Strings', mapsTo: 'Same length and identical characters at every index' }
      ],
      realWorldVisualDiagram: {
        title: 'Step-by-Step Comparison Flow: "apple" vs "apricot"',
        pipeline: [
          { step: '01. Index 0 (\'a\' vs \'a\')', desc: 'Both \'a\' (Unicode 97) ──► Match, move to index 1' },
          { step: '02. Index 1 (\'p\' vs \'p\')', desc: 'Both \'p\' (Unicode 112) ──► Match, move to index 2' },
          { step: '03. Index 2 (\'p\' vs \'r\')', desc: '\'p\' (112) < \'r\' (114) ──► Decision: "apple" < "apricot" 🎉' },
          { step: '04. Early Exit Stop', desc: 'Remaining characters ("le" and "icot") skipped in O(1) time ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// STRING COMPARISON IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. Built-in JavaScript Comparison Operators
const a = "apple";
const b = "banana";

console.log("a === b:", a === b); // false
console.log("a < b:", a < b);     // true ('a' comes before 'b')
console.log("a > b:", a > b);     // false

// Prefix comparison
console.log("'app' < 'apple':", "app" < "apple"); // true (shorter prefix)

// Case-sensitive comparison
console.log("'Apple' < 'apple':", "Apple" < "apple"); // true ('A': 65 < 'a': 97)

// 2. Custom Character-by-Character Comparison Function
/**
 * Compares string a and b lexicographically:
 * Returns -1 if a < b
 * Returns  0 if a === b
 * Returns  1 if a > b
 */
function compareStrings(str1, str2) {
  const minLength = Math.min(str1.length, str2.length);

  // Compare characters one by one
  for (let i = 0; i < minLength; i++) {
    if (str1[i] < str2[i]) return -1; // str1 comes first
    if (str1[i] > str2[i]) return 1;  // str2 comes first
  }

  // If all compared characters were identical, compare lengths
  if (str1.length < str2.length) return -1;
  if (str1.length > str2.length) return 1;

  return 0; // Both strings are completely identical
}

// 🧪 Test Demonstrations
console.log("\\n--- Custom compareStrings Tests ---");
console.log("compare('apple', 'banana'):", compareStrings("apple", "banana")); // -1
console.log("compare('apple', 'apple'):", compareStrings("apple", "apple"));   //  0
console.log("compare('banana', 'apple'):", compareStrings("banana", "apple")); //  1
console.log("compare('app', 'apple'):", compareStrings("app", "apple"));       // -1`,
      codeBreakdown: [
        { part: 'const minLength = Math.min(str1.length, str2.length)', label: 'Dono strings mein se chhoti length calculate karta hai taaki out-of-bounds na ho', color: '#3b82f6' },
        { part: 'for (let i = 0; i < minLength; i++)', label: 'Index 0 se left-to-right matching characters compare karta hai', color: '#10b981' },
        { part: 'if (str1[i] < str2[i]) return -1', label: 'Pehla different character milte hi early return karta hai (str1 pehle aayegi)', color: '#8b5cf6' },
        { part: 'if (str1.length < str2.length) return -1', label: 'Prefix match hone par shorter string ko pehle rank karta hai', color: '#f59e0b' },
        { part: 'return 0', label: 'Characters aur lengths dono same hone par equality confirm karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run: compareStrings("apple", "apricot")',
        steps: [
          { step: 'i = 0', action: 'str1[0]=\'a\', str2[0]=\'a\' ──► Match (97 === 97), continue loop' },
          { step: 'i = 1', action: 'str1[1]=\'p\', str2[1]=\'p\' ──► Match (112 === 112), continue loop' },
          { step: 'i = 2', action: 'str1[2]=\'p\', str2[2]=\'r\' ──► \'p\' < \'r\' (112 < 114) ──► Return -1 immediately! ✅' }
        ]
      },
      timeComplexity: 'Best Case: O(1) | Worst Case: O(N) Linear Time',
      timeComplexityExplain: 'If the first character is different, decision is O(1). If strings share a long matching prefix or are identical, time is O(N) where N = min(length1, length2).',
      spaceComplexity: 'O(1) - Constant Auxiliary Space',
      spaceComplexityExplain: 'Comparison uses only index variables without allocating any new strings or memory arrays.',
      commonMistakes: [
        '❌ Mistake 1: Thinking string comparison checks only length.\\n✅ Correct: "banana" (6) vs "zebra" (5) ──► "zebra" > "banana" because \'z\' > \'b\'.',
        '❌ Mistake 2: Thinking `"Apple" === "apple"`.\\n✅ Correct: JS comparison is case-sensitive. Uppercase \'A\' (65) is smaller than lowercase \'a\' (97).',
        '❌ Mistake 3: Believing string comparison is always O(1).\\n✅ Correct: Comparison can take O(N) when strings share a long matching prefix.',
        '❌ Mistake 4: Thinking `"app" > "apple"` because it is shorter.\\n✅ Correct: When prefix matches, the shorter string comes first (`"app" < "apple"`).',
        '❌ Mistake 5: Saying JavaScript string comparison is ASCII-only.\\n✅ Correct: JavaScript strings use 16-bit Unicode code points (UTF-16).'
      ],
      proTips: [
        '💡 Dictionary Rule Reflex: Always remember that comparison is left-to-right character-by-character, exactly like finding words in a dictionary.',
        '💡 Case-Insensitive Check: Always convert to `.toLowerCase()` when sorting user-submitted names or search queries.',
        '💡 Interview Tip: Mention to the interviewer that string comparison takes worst-case O(L) time where L is string length, which affects overall sorting complexity to O(L × N log N).'
      ],
      interviewQuestions: [
        'How does JavaScript compare two strings using `<` and `>` operators?',
        'Why is `"app"` considered smaller than `"apple"` in lexicographical comparison?',
        'What is the best-case and worst-case time complexity of comparing two strings of length N?',
        'Why is `"Apple"` lexicographically smaller than `"apple"` in JavaScript?',
        'How does lexicographical comparison affect the time complexity of sorting an array of strings?'
      ],
      quiz: [
        {
          question: 'Q1. Expression `"apple" < "banana"` ka output kya hoga?',
          options: ['true', 'false', 'undefined', 'TypeError'],
          correct: 0,
          explanation: 'Index 0 par \'a\' (Unicode 97) \'b\' (Unicode 98) se pehle aata hai, isliye result true hai.'
        },
        {
          question: 'Q2. Expression `"app" < "apple"` ka result kya aayega aur kyun?',
          options: ['false, kyunki apple bada hai', 'true, kyunki prefix match hone par shorter string pehle aati hai', 'false, kyunki dono match nahi karte', 'Error'],
          correct: 1,
          explanation: 'Prefix "app" match karta hai, aur shorter string dictionary mein pehle aati hai.'
        },
        {
          question: 'Q3. Expression `"Cat" < "cat"` ka output kya hoga?',
          options: ['false', 'true (Uppercase \'C\' code point chhota hota hai)', 'undefined', 'NaN'],
          correct: 1,
          explanation: 'Uppercase \'C\' (67) is numerically smaller than lowercase \'c\' (99).'
        },
        {
          question: 'Q4. Do strings ko compare karne ki Worst-Case Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(log N)', 'O(N) where N = min length', 'O(N²)'],
          correct: 2,
          explanation: 'Agar saare characters match karte hain, toh minLength tak har character check karna padta hai = O(N).'
        },
        {
          question: 'Q5. Expression `"zebra" > "apple"` mein comparison kis index par decide ho jata hai?',
          options: ['Index 0 par hi', 'Index 4 par', 'Poora word check karne ke baad', 'Kareeb 10 checks ke baad'],
          correct: 0,
          explanation: 'Pehle hi character (\'z\' > \'a\') par mismatch milte hi O(1) early exit ho jata hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Check String Equality',
          difficulty: 'Easy',
          description: 'Given two strings s1 and s2, return true if they are identical in both characters and length.',
          hint: 'Use strict equality === or manual character loop.'
        },
        {
          title: 'Find Lexicographically Smaller String',
          difficulty: 'Easy',
          description: 'Given two words, return the word that would appear first in a dictionary.',
          hint: 'Compare character by character from left to right.'
        },
        {
          title: 'Find First Mismatch Index',
          difficulty: 'Medium',
          description: 'Given two strings, return the first index where their characters differ. If identical, return -1.',
          hint: 'Loop up to Math.min(len1, len2) and return index i when s1[i] !== s2[i].'
        },
        {
          title: 'Implement Custom String Comparator',
          difficulty: 'Medium',
          description: 'Write a function that returns -1, 0, or 1 based on lexicographical order without using < or > operators on strings.',
          hint: 'Compare character code points using charCodeAt(i).'
        },
        {
          title: 'Longest Common Prefix (LeetCode 14)',
          difficulty: 'Medium',
          description: 'Find the longest common prefix string amongst an array of strings.',
          hint: 'Compare characters index-by-index across all strings until a mismatch occurs.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-reverse-string',
      title: 'Reverse String',
      emoji: '🔄',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Reversing a string is the process of inverting the order of its characters such that the first character becomes the last and the last becomes the first (e.g. "hello" ──► "olleh").',
      secondExplain: 'In JavaScript, strings are primitive immutable values, so they cannot be modified in-place directly. The standard two-pointer algorithm converts the string into a mutable character array, places pointers at both ends, and swaps opposing characters while moving inward toward the center.',
      definitionHighlight: '🔄 Two-Pointer Invariant: Left starts at 0, Right starts at length - 1 ──► Swap arr[left] & arr[right] ──► Converge toward center ──► Stop when left >= right | Time: O(N) | Space: O(N) in JS',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is String Reversal a Core DSA Foundation?',
        subtitle: 'The foundational symmetry pattern behind palindromes and text manipulation.',
        mappings: [
          { need: '🪞 1. Palindrome Detection', ds: 'Verifying if a word reads the same forwards and backwards relies directly on converging two-pointer symmetry.' },
          { need: '📝 2. Word-by-Word Sentence Reversal', ds: 'Problems like "the sky is blue" ──► "blue is sky the" combine full reversal with individual word reversals.' },
          { need: '🔢 3. Integer & Base Math Operations', ds: 'Converting numbers to strings, adding big numbers as strings, and reversing digits.' },
          { need: '⚡ 4. Two-Pointer Symmetry Mastery', ds: 'Teaches the converging two-pointer technique used in sliding windows, sorting, and array partitioning.' }
        ],
        takeaway: '💡 Mastering string reversal gives you the foundational intuition for all two-pointer converging algorithms.'
      },
      comparisonTable: {
        title: 'String Reversal Approaches in JavaScript',
        headers: ['Approach', 'Core Strategy', 'Time Complexity', 'Auxiliary Space', 'DSA Recommendation'],
        rows: [
          { feature: 'Two Pointers ⭐', data: '`left` and `right` converge swapping elements', ds: 'O(N) (N/2 swaps)', third: 'O(N) (Array buffer in JS)', fourth: '⭐⭐⭐⭐⭐ (Interview Standard)' },
          { feature: 'Backward `for` loop', data: 'Traverse index `N-1` down to `0` and append', ds: 'O(N)', third: 'O(N) (New string)', fourth: '⭐⭐⭐⭐ (Beginner Friendly)' },
          { feature: 'Built-in Chain', data: '`str.split("").reverse().join("")`', ds: 'O(N)', third: 'O(N) (Array + String)', fourth: '⭐⭐⭐ (Production 1-Liner)' }
        ],
        takeaway: '💡 While all methods take O(N) time and O(N) auxiliary space in JavaScript, the Two-Pointer technique is the algorithmic standard asked in technical interviews.'
      },
      tradeoffs: {
        title: 'JavaScript Immutability & Space Complexity Nuance',
        intro: 'Important technical distinction for coding interviews:',
        items: [
          {
            title: '1. Two-Pointer Algorithm Logic: O(1) Pointer Variables',
            desc: 'The algorithm itself only uses two scalar index variables (`left` and `right`), which represents pure O(1) auxiliary space.'
          },
          {
            title: '2. JavaScript Engine Reality: O(N) Memory Buffer',
            desc: 'Because JavaScript strings cannot be mutated in-place (`s[0] = "x"` has no effect), `s.split("")` allocates an O(N) array buffer and `arr.join("")` allocates an O(N) result string.'
          },
          {
            title: '3. Stopping Condition: `while (left < right)`',
            desc: 'When `left === right` in an odd-length string (like index 2 in "HELLO"), the center letter is already at its correct final position and does not need to be swapped with itself.'
          }
        ]
      },
      hinglishExplain: `Reverse String ko simple Hinglish mein samjhein:

"String ko ulta karne ka sabse best tareeka hai Two Pointers technique!"

Two Pointers Kaise Kaam Karta Hai?
1. **Left Pointer:** First character (\`index 0\`) par khada karo.
2. **Right Pointer:** Last character (\`index length - 1\`) par khada karo.
3. **Swap Karo:** Dono characters ko aapas mein exchange karo.
4. **Move Inward:** \`left++\` (aage badhao) aur \`right--\` (piche lao).
5. **Stop Condition:** Jab dono pointers center par mil jayein ya cross kar jayein (\`left >= right\`), loop rok do!

🧠 Slogan:
"Left aur Right ko swap karao, phir dono ko center ki taraf lao!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Ki Reverse Line:

Masti Sir ke class mein 5 students line mein khade the:
[ A ] [ B ] [ C ] [ D ] [ E ]

Masti Sir bole: "Line ko ulta karna hai, jaldi se order reverse karo!"

Pehle Chintu ne socha sabko ek-ek karke piche bheje.
Masti Sir bole: "Arre Chintu! Two-Pointer smart strategy use karo!"

1. **Step 1:** Pehla student [A] aur Aakhri student [E] aapas mein jagah badlo ──► [E, B, C, D, A]
2. **Step 2:** Second student [B] aur Fourth student [D] jagah badlo ──► [E, D, C, B, A]
3. **Step 3:** Center wala student [C] bola: "Sir main kiske sath swap karun?"
Masti Sir bole: "Tum toh center mein ho, tumhari position already perfect hai!" 😎

Result: [E, D, C, B, A] in just 2 quick swaps!

💡 Lesson:
"Two pointers se sirf aadhi line (N/2) swap karni padti hai aur poori string reverse ho jati hai!"`,
      conceptMapping: [
        { emoji: '🔄', item: 'Reverse String', mapsTo: 'Inverting character sequence from last to first' },
        { emoji: '👉', item: 'left Pointer (0)', mapsTo: 'Starts at the beginning of the string' },
        { emoji: '👈', item: 'right Pointer (N-1)', mapsTo: 'Starts at the end of the string' },
        { emoji: '🔀', item: 'Swap `[arr[l], arr[r]]`', mapsTo: 'Exchanging opposing character values' },
        { emoji: '🎯', item: '`while (left < right)`', mapsTo: 'Loop terminates at the exact center' },
        { emoji: '🧵', item: '`arr.join("")`', mapsTo: 'Reassembling mutable array back into string' }
      ],
      realWorldVisualDiagram: {
        title: 'Step-by-Step Two-Pointer Convergence on "HELLO"',
        pipeline: [
          { step: '01. Start Pointers', desc: 'left = 0 (\'H\'), right = 4 (\'O\') ──► [H, E, L, L, O]' },
          { step: '02. First Swap (H ↔ O)', desc: 'Swap \'H\' and \'O\' ──► [O, E, L, L, H], left=1, right=3' },
          { step: '03. Second Swap (E ↔ L)', desc: 'Swap \'E\' and \'L\' ──► [O, L, L, E, H], left=2, right=2' },
          { step: '04. Center Stop', desc: 'left === right (2 === 2) ──► Stop! Result: "OLLEH" ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// REVERSE STRING IN JAVASCRIPT: TWO POINTERS & SIMPLE LOOP
// ══════════════════════════════════════════════════════════════

/**
 * 1. Standard Two-Pointer Approach (DSA Interview Pattern)
 * Time Complexity:  O(N) (N / 2 swaps)
 * Space Complexity: O(N) (Character array buffer in JS)
 */
function reverseString(s) {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // ES6 In-Place Array Destructuring Swap
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join('');
}

/**
 * 2. Backward Loop Approach (Alternative)
 * Time Complexity:  O(N)
 * Space Complexity: O(N)
 */
function reverseStringSimple(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}

// 🧪 Test Demonstrations
console.log("Two Pointer 'hello':", reverseString("hello")); // "olleh"
console.log("Two Pointer 'abcd':", reverseString("abcd"));   // "dcba"
console.log("Simple Loop 'JavaScript':", reverseStringSimple("JavaScript")); // "tpircSavaJ"`,
      codeBreakdown: [
        { part: 'const arr = s.split("")', label: 'Immutable string ko mutable character array mein convert karta hai', color: '#3b82f6' },
        { part: 'let left = 0; let right = arr.length - 1', label: 'Left ko index 0 aur Right ko last index par initialize karta hai', color: '#10b981' },
        { part: 'while (left < right)', label: 'Loop tab tak chalta hai jab tak pointers center par cross na karein', color: '#8b5cf6' },
        { part: '[arr[left], arr[right]] = [arr[right], arr[left]]', label: 'Dono opposite ends ke characters ko aapas mein swap karta hai', color: '#f59e0b' },
        { part: 'left++; right--;', label: 'Left ko aage aur Right ko piche center ki taraf move karta hai', color: '#ec4899' },
        { part: 'return arr.join("")', label: 'Swapped array ko wapas final string mein join karke return karta hai', color: '#06b6d4' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on "HELLO"',
        steps: [
          { step: 'Initial', action: 'arr = [\'H\', \'E\', \'L\', \'L\', \'O\'], left = 0, right = 4' },
          { step: 'Step 1 (0 < 4 ✅)', action: 'Swap arr[0] (\'H\') & arr[4] (\'O\') ──► [\'O\', \'E\', \'L\', \'L\', \'H\'], left: 1, right: 3' },
          { step: 'Step 2 (1 < 3 ✅)', action: 'Swap arr[1] (\'E\') & arr[3] (\'L\') ──► [\'O\', \'L\', \'L\', \'E\', \'H\'], left: 2, right: 2' },
          { step: 'Step 3 (2 < 2 ❌)', action: 'left is not less than right ──► Loop stops! Final String: "OLLEH" ✅' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'The two-pointer loop performs N/2 character swaps. In Big-O notation, constant factors are dropped: O(N/2) = O(N). split() and join() also run in linear O(N) time.',
      spaceComplexity: 'O(N) Auxiliary Space in JavaScript',
      spaceComplexityExplain: 'While the two-pointer logic itself only requires O(1) scalar pointer variables, JavaScript strings are immutable, requiring split() to allocate an O(N) array buffer and join() to create the result string.',
      commonMistakes: [
        '❌ Mistake 1: Trying to modify characters directly on the string (`s[0] = s[n-1]`).\\n✅ Correct: JS strings are immutable; convert to an array using `s.split("")` first.',
        '❌ Mistake 2: Forgetting `left++` or `right--` causing an infinite loop.\\n✅ Correct: Always advance `left++` and decrement `right--` in each iteration.',
        '❌ Mistake 3: Returning the raw array `arr` instead of `arr.join("")`.\\n✅ Correct: Always call `join("")` to return a string.',
        '❌ Mistake 4: Writing `while (left <= right)` which performs an unnecessary self-swap at the center.',
        '❌ Mistake 5: Claiming that the JavaScript implementation runs in O(1) extra space (split/join require O(N)).'
      ],
      proTips: [
        '💡 In-Place Destructuring Swap: `[arr[l], arr[r]] = [arr[r], arr[l]]` is the cleanest ES6 way to swap array elements without a temporary variable.',
        '💡 Odd vs Even Lengths: Even strings (len 4) make 2 swaps; odd strings (len 5) make 2 swaps while the middle character stays untouched.',
        '💡 Interview Tip: Explicitly explain to the interviewer: "The algorithm logic uses O(1) pointers, but in JavaScript we allocate an O(N) array because strings are immutable."'
      ],
      interviewQuestions: [
        'How does the Two-Pointer technique reverse a string in linear time?',
        'Why can we not modify a JavaScript string directly in-place?',
        'What is the time complexity and number of swaps performed by the Two-Pointer approach?',
        'Why is the auxiliary space complexity O(N) for the JavaScript implementation?',
        'Why is `while (left < right)` preferred over `while (left <= right)`?'
      ],
      quiz: [
        {
          question: 'Q1. String "hello" ko reverse karne par kya result aayega?',
          options: ['"olleh"', '"hello"', '"llohe"', '"hleol"'],
          correct: 0,
          explanation: 'Characters inverted sequence mein: h-e-l-l-o ──► o-l-l-e-h.'
        },
        {
          question: 'Q2. Two-pointer reversal mein right pointer kis initial index par start hota hai?',
          options: ['arr.length', 'arr.length - 1', '0', '1'],
          correct: 1,
          explanation: 'Last valid index hamesha length - 1 hota hai.'
        },
        {
          question: 'Q3. 6 characters ki string ko Two-Pointer se reverse karne mein kitne swaps hote hain?',
          options: ['6', '3 (6 / 2 = 3)', '1', '12'],
          correct: 1,
          explanation: 'Har swap 2 characters ko invert karta hai, isliye N / 2 = 3 swaps lagte hain.'
        },
        {
          question: 'Q4. Two-Pointer String Reversal algorithm ki Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
          correct: 2,
          explanation: 'N / 2 swaps execute in linear O(N) time.'
        },
        {
          question: 'Q5. JavaScript mein `split("")` + `join("")` use karke reverse karne par Auxiliary Space kitni lagti hai?',
          options: ['O(1)', 'O(N) (Array buffer create hota hai)', 'O(log N)', 'O(N²)'],
          correct: 1,
          explanation: 'Strings immutable hoti hain, isliye split() O(N) character array memory allocate karta hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Reverse String (LeetCode 344)',
          difficulty: 'Easy',
          description: 'Write a function that reverses a string given as an array of characters in-place with O(1) extra memory.',
          hint: 'Use two pointers left=0 and right=s.length-1, swap and move inward.'
        },
        {
          title: 'Reverse a String Using Backward Loop',
          difficulty: 'Easy',
          description: 'Implement string reversal by iterating backward from length - 1 down to 0.',
          hint: 'Initialize result = "" and append s[i] in a reverse for loop.'
        },
        {
          title: 'Check If String Is Palindrome (LeetCode 125)',
          difficulty: 'Easy',
          description: 'Determine if a string reads the same forwards and backwards using two pointers.',
          hint: 'Compare left and right characters; if s[left] !== s[right], return false.'
        },
        {
          title: 'Reverse Only Vowels of a String (LeetCode 345)',
          difficulty: 'Medium',
          description: 'Reverse only the vowels (a, e, i, o, u) in a string while leaving all other characters in place.',
          hint: 'Use two pointers: advance left until a vowel is found, advance right until a vowel is found, then swap.'
        },
        {
          title: 'Reverse Words in a String (LeetCode 151)',
          difficulty: 'Medium',
          description: 'Given an input string s, reverse the order of the words while trimming multiple whitespace characters.',
          hint: 'Split words by whitespace, reverse the words array, and join with a single space.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-string-palindrome',
      title: 'Palindrome',
      emoji: '🪞',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'A Palindrome is a string that reads identically forward and backward (e.g. "madam", "racecar", "level"). If any opposing character pair differs, the string is not a palindrome.',
      secondExplain: 'The optimal technique to check a palindrome is the Two-Pointer approach: placing one pointer at the start (left = 0) and one at the end (right = length - 1), comparing characters inward, and returning false immediately upon the first mismatch.',
      definitionHighlight: '🪞 Mirror Rule: Left starts at 0, Right starts at length - 1 ──► Match inward ──► First Mismatch = Return False ──► Best Time: O(1) | Worst Time: O(N) | Auxiliary Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is Palindrome a Core DSA Symmetry Pattern?',
        subtitle: 'Symmetry checking across text parsing, bioinformatics, and dynamic programming.',
        mappings: [
          { need: '🧬 1. Bioinformatics & DNA Sequences', ds: 'Restriction enzymes recognize palindromic DNA sequences to cut gene strands precisely.' },
          { need: '🔍 2. Two-Pointer Convergence Pattern', ds: 'Teaches bidirectional search with instant early-exit termination upon mismatch.' },
          { need: '🧩 3. Longest Palindromic Substring', ds: 'Serves as the base condition for expand-around-center and dynamic programming algorithms (LeetCode 5).' },
          { need: '📝 4. Text & Data Normalization', ds: 'Sanitizing sentences (ignoring spaces, punctuation, and casing) to check semantic symmetry.' }
        ],
        takeaway: '💡 Palindrome checking is the cleanest demonstration of the O(1) space two-pointer converging pattern in computer science.'
      },
      comparisonTable: {
        title: 'Two Pointers vs Reverse & Compare',
        headers: ['Method', 'Strategy', 'Time Complexity', 'Auxiliary Space', 'Early Exit?'],
        rows: [
          { feature: 'Two Pointers ⭐', data: 'Compare characters from outer ends inward', ds: 'O(N) (N/2 comparisons)', third: 'O(1) (Pure pointers)', fourth: '✅ Yes (O(1) on first mismatch)' },
          { feature: 'Reverse & Compare', data: 'Create reversed string copy and check `s === rev`', ds: 'O(N)', third: 'O(N) (String/Array allocation)', fourth: '❌ No (Must reverse entire string)' }
        ],
        takeaway: '💡 Always use the Two-Pointer approach in DSA interviews because it achieves O(1) auxiliary space and enables early-exit termination.'
      },
      tradeoffs: {
        title: 'Two-Pointer Palindrome Mechanics',
        intro: 'Why the Two-Pointer approach is optimal:',
        items: [
          {
            title: '1. Instant Early Exit: Best-Case O(1)',
            desc: 'In `"hello"`, comparing index 0 (\'h\') and index 4 (\'o\') immediately returns false in 1 step without reading the middle letters.'
          },
          {
            title: '2. True O(1) Auxiliary Space in JavaScript',
            desc: 'Because we only read characters directly from the string (`str[left] === str[right]`), zero secondary arrays or strings are created.'
          },
          {
            title: '3. Max N/2 Comparisons: O(N) Time',
            desc: 'Even for a true palindrome of length 1000, we only perform 500 pair comparisons. Big-O drops constants: O(N/2) = O(N).'
          }
        ]
      },
      hinglishExplain: `Palindrome ko simple Hinglish mein samjhein:

"Palindrome ka matlab hai wo string jo aage aur piche dono taraf se padhne par bilkul SAME ho!"

Examples:
• "madam" ──► Palindrome ✅
• "racecar" ──► Palindrome ✅
• "level" ──► Palindrome ✅
• "hello" ──► Not Palindrome ❌ ('h' !== 'o')

Two-Pointer Strategy:
1. **Left Pointer:** First character (\`left = 0\`) par rakho.
2. **Right Pointer:** Last character (\`right = length - 1\`) par rakho.
3. **Compare Karo:** Agar \`str[left] !== str[right]\` mila ──► turant \`return false\`!
4. **Move Inward:** \`left++\` aur \`right--\` karke center ki taraf aao.
5. **No Mismatch:** Agar center tak koi mismatch nahi mila ──► \`return true\`!

🧠 Slogan:
"Bahaar se andar aao, har pair match karao — first mismatch par game over!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Ka Mirror Test:

Masti Sir ne class mein 7 students ko ek line mein khada kiya:
[ R ] [ A ] [ C ] [ E ] [ C ] [ A ] [ R ]

Sir ne bola: "Aaj hum Mirror Test karenge!"

1. **Step 1:** Front student [R] aur Last student [R] ko dekha ──► R === R ✅ (Match!)
2. **Step 2:** Second student [A] aur Sixth student [A] ko dekha ──► A === A ✅ (Match!)
3. **Step 3:** Third student [C] aur Fifth student [C] ko dekha ──► C === C ✅ (Match!)
4. **Center:** Center mein [E] akela khada tha.

Masti Sir bole: "Dono ends se har jodi exact match ho gayi — iska matlab ye line ek **Palindrome** hai!" 😂

Fir Sir ne ek doosri line khadi ki: [ H, E, L, L, O ]
Sir ne pehla aur aakhri letter dekha: 'H' vs 'O' ──► Mismatch ❌!
Sir bole: "Pehle hi step par fail! Aage check karne ki zaroorat hi nahi!"

💡 Lesson:
"Ends compare karo ──► center tak aao ──► pehla mismatch milte hi false bol do!"`,
      conceptMapping: [
        { emoji: '🪞', item: 'Palindrome', mapsTo: 'String reading the exact same forward and backward' },
        { emoji: '👉', item: 'left Pointer (0)', mapsTo: 'Scans inward from the beginning' },
        { emoji: '👈', item: 'right Pointer (N-1)', mapsTo: 'Scans inward from the end' },
        { emoji: '⚡', item: 'Early Exit', mapsTo: 'Immediate `return false` on first mismatched character' },
        { emoji: '🎯', item: '`while (left < right)`', mapsTo: 'Halts when pointers meet at center' },
        { emoji: '💾', item: 'O(1) Space', mapsTo: 'Uses only scalar pointer variables' }
      ],
      realWorldVisualDiagram: {
        title: 'Two-Pointer Mirror Convergence on "racecar"',
        pipeline: [
          { step: '01. Check Outer (0 & 6)', desc: 'str[0] (\'r\') === str[6] (\'r\') ✅ ──► Move inward: left=1, right=5' },
          { step: '02. Check Inner (1 & 5)', desc: 'str[1] (\'a\') === str[5] (\'a\') ✅ ──► Move inward: left=2, right=4' },
          { step: '03. Check Inner (2 & 4)', desc: 'str[2] (\'c\') === str[4] (\'c\') ✅ ──► Move inward: left=3, right=3' },
          { step: '04. Center Reached', desc: 'left === right (3 === 3) ──► Loop terminates ──► Returns true ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// PALINDROME CHECK IN JAVASCRIPT: OPTIMAL TWO-POINTER APPROACH
// ══════════════════════════════════════════════════════════════

/**
 * Checks whether a string is a Palindrome:
 * Time Complexity:  O(N) (At most N/2 comparisons)
 * Space Complexity: O(1) (Zero extra memory allocations)
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // If any opposite pair mismatches, it cannot be a palindrome
    if (str[left] !== str[right]) {
      return false; // Early Exit
    }

    left++;
    right--;
  }

  return true; // All symmetric pairs matched!
}

// 🧪 Test Demonstrations
console.log("isPalindrome('racecar'):", isPalindrome("racecar")); // true
console.log("isPalindrome('madam'):", isPalindrome("madam"));     // true
console.log("isPalindrome('level'):", isPalindrome("level"));     // true
console.log("isPalindrome('hello'):", isPalindrome("hello"));     // false (h !== o)

// 🧪 Edge Cases
console.log("Single char 'a':", isPalindrome("a"));               // true
console.log("Empty string '':", isPalindrome(""));                 // true`,
      codeBreakdown: [
        { part: 'let left = 0; let right = str.length - 1', label: 'Left pointer ko start aur Right pointer ko last index par initialize karta hai', color: '#3b82f6' },
        { part: 'while (left < right)', label: 'Loop tab tak chalega jab tak dono pointers center par na mil jayein', color: '#10b981' },
        { part: 'if (str[left] !== str[right]) return false', label: 'Mismatch milte hi turant false return karta hai (Early Exit)', color: '#8b5cf6' },
        { part: 'left++; right--;', label: 'Dono pointers ko ek-ek step center ki taraf move karta hai', color: '#f59e0b' },
        { part: 'return true', label: 'Agar saari symmetric pairs match ho gayi toh palindrome confirm karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on "racecar" vs "hello"',
        steps: [
          { step: 'racecar Step 1', action: 'left = 0 (\'r\'), right = 6 (\'r\') ──► \'r\' === \'r\' ✅ ──► left: 1, right: 5' },
          { step: 'racecar Step 2', action: 'left = 1 (\'a\'), right = 5 (\'a\') ──► \'a\' === \'a\' ✅ ──► left: 2, right: 4' },
          { step: 'racecar Step 3', action: 'left = 2 (\'c\'), right = 4 (\'c\') ──► \'c\' === \'c\' ✅ ──► left: 3, right: 3' },
          { step: 'racecar Step 4', action: '3 < 3 is False ──► Return true (Palindrome) 🎉' },
          { step: 'hello Dry Run', action: 'left = 0 (\'h\'), right = 4 (\'o\') ──► \'h\' !== \'o\' ❌ ──► Immediate return false (1 step exit!)' }
        ]
      },
      timeComplexity: 'Best Case: O(1) | Worst Case: O(N) Linear Time',
      timeComplexityExplain: 'If the outer characters mismatch (like in "hello"), comparison terminates in O(1) time. For palindromes, it checks at most N/2 pairs: O(N/2) = O(N) linear time.',
      spaceComplexity: 'O(1) - Constant Auxiliary Space',
      spaceComplexityExplain: 'Directly reads characters from string using two scalar index variables without allocating any array or string copy.',
      commonMistakes: [
        '❌ Mistake 1: Checking only the first and last characters and assuming the rest is a palindrome.\\n✅ Correct: You must loop all the way inward to the center.',
        '❌ Mistake 2: Returning `true` immediately after the first matching pair.\\n✅ Correct: Only return `false` on mismatch; `true` is returned only after the loop completes.',
        '❌ Mistake 3: Creating a reversed string copy with `split/reverse/join` when an O(1) space solution is expected.\\n✅ Correct: Use two pointers directly on the string.',
        '❌ Mistake 4: Forgetting `left++` or `right--` causing an infinite loop.\\n✅ Correct: Always advance both pointers inward in every matching step.',
        '❌ Mistake 5: Confusing palindrome with sorted strings.'
      ],
      proTips: [
        '💡 Mirror Visualization: Always visualize folding the string in half along its center.',
        '💡 Direct Character Access: In JavaScript, `str[i]` allows direct reading without converting to an array, enabling true O(1) auxiliary space.',
        '💡 Alphanumeric Clean Tip: In interview questions like LeetCode 125 ("A man, a plan, a canal: Panama"), clean non-alphanumeric characters with regex `s.replace(/[^a-z0-9]/gi, \'\').toLowerCase()` before running two pointers.',
        '💡 Interview Tip: Explicitly explain: "I will compare characters symmetrically from both ends inward, stopping at the first mismatch for optimal early-exit performance."'
      ],
      interviewQuestions: [
        'What is a Palindrome and how does the Two-Pointer approach check it?',
        'What is the best-case and worst-case time complexity of the Two-Pointer palindrome check?',
        'Why does the Two-Pointer approach on a JavaScript string have O(1) auxiliary space?',
        'How does early termination improve real-world performance for non-palindromes?',
        'How do you check if a sentence is a palindrome while ignoring spaces, punctuation, and letter casing?'
      ],
      quiz: [
        {
          question: 'Q1. Inme se kaunsa word Palindrome hai?',
          options: ['"hello"', '"world"', '"racecar"', '"javascript"'],
          correct: 2,
          explanation: '"racecar" aage aur piche dono taraf se exact same padha jata hai.'
        },
        {
          question: 'Q2. Two-pointer palindrome check mein agar pehla aur aakhri character match na kare toh kya hota hai?',
          options: ['Loop aage chalta rehta hai', 'Function turant false return karta hai (Early Exit)', 'String reverse hoti hai', 'Error throw hota hai'],
          correct: 1,
          explanation: 'Pehla mismatch milte hi string palindrome nahi ho sakti, isliye turant false return hota hai.'
        },
        {
          question: 'Q3. String "hello" par `isPalindrome("hello")` kitne comparisons ke baad terminate hoga?',
          options: ['1 comparison ke baad (\'h\' !== \'o\')', '5 comparisons ke baad', '2 comparisons ke baad', 'Kabhi nahi'],
          correct: 0,
          explanation: 'Index 0 (\'h\') aur Index 4 (\'o\') ka pehla check mismatch hote hi O(1) time mein terminate ho jata hai.'
        },
        {
          question: 'Q4. Two-Pointer technique se Palindrome check karne ki Auxiliary Space Complexity kya hoti hai?',
          options: ['O(1) (Constant Space)', 'O(N)', 'O(log N)', 'O(N²)'],
          correct: 0,
          explanation: 'Sirf do pointer variables use hote hain bina koi extra string ya array banaye.'
        },
        {
          question: 'Q5. N length ke Palindrome word ko verify karne ke liye maximum kitne pair comparisons lagte hain?',
          options: ['N', 'N / 2', 'N²', '2N'],
          correct: 1,
          explanation: 'Dono taraf se aate hue sirf aadhi string (N / 2 pairs) check karni padti hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Valid Palindrome (LeetCode 125)',
          difficulty: 'Easy',
          description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing non-alphanumeric characters, it reads the same forward and backward.',
          hint: 'Clean string using regex s.toLowerCase().replace(/[^a-z0-9]/g, "") then use two pointers.'
        },
        {
          title: 'Palindrome Number (LeetCode 9)',
          difficulty: 'Easy',
          description: 'Given an integer x, return true if x is a palindrome, and false otherwise without converting to a string (or by string conversion).',
          hint: 'Negative numbers are never palindromes (-121 !== 121-). Convert to string or reverse math digits.'
        },
        {
          title: 'Valid Palindrome II (LeetCode 680)',
          difficulty: 'Medium',
          description: 'Given a string s, return true if the s can be palindrome after deleting at most one character from it.',
          hint: 'When mismatch occurs at (l, r), check if substring (l+1, r) or (l, r-1) is a valid palindrome.'
        },
        {
          title: 'Longest Palindromic Substring (LeetCode 5)',
          difficulty: 'Medium',
          description: 'Given a string s, return the longest palindromic substring in s.',
          hint: 'Expand around each center (odd center i, even center i and i+1) to find maximum palindrome.'
        },
        {
          title: 'Check If Number Is Palindromic String',
          difficulty: 'Easy',
          description: 'Given a number 12321, verify if it is a palindrome.',
          hint: 'Convert to string String(num) and check using left and right pointers.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-character-frequency',
      title: 'Character Frequency',
      emoji: '📊',
      difficulty: 'Beginner',
      englishDef: 'Character frequency maps count occurrences of each character using a Hash Map or fixed 26-element array for lowercase English alphabets.',
      hinglishExplain: 'Har letter kitni baar aaya uska count banana: `{ c: 1, o: 1, d: 1, e: 1 }`. First non-repeating character nikalne mein useful hai.',
      code: `function charFrequency(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return freq;
}`
    }),

    createDsaLesson({
      id: 'dsa-string-anagram',
      title: 'Anagram',
      emoji: '🔀',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Two strings are Anagrams if they contain the exact same characters with identical frequencies, even if the characters appear in a different order (e.g. "listen" and "silent").',
      secondExplain: 'Because character order does not matter in an anagram, the problem reduces to frequency tallying. Anagram verification can be performed in linear O(N) time using a single frequency hash map or a 26-slot fixed array.',
      definitionHighlight: '🔀 Anagram Formula: Same Characters + Identical Counts + Different Order | Single-Pass Hash Map | Time: O(N) | Space: O(K) (O(1) for fixed alphabet)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is Anagram Verification a Key Interview Pattern?',
        subtitle: 'Frequency hashing, word permutations, and anagram grouping.',
        mappings: [
          { need: '🎮 1. Word Games & Puzzles', ds: 'Scrabble, Jumble, and word solvers search valid permutations by verifying anagram signatures.' },
          { need: '🔍 2. Search Query Permutations', ds: 'Matching mis-ordered tokens in full-text search engines and query analyzers.' },
          { need: '📂 3. Group Anagrams (LeetCode 49)', ds: 'Categorizing words into anagram clusters using sorted keys or 26-element frequency signatures.' },
          { need: '🔐 4. Cryptographic Ciphers', ds: 'Frequency analysis of transposition ciphers to detect character distribution invariance.' }
        ],
        takeaway: '💡 Anagram problems demonstrate how frequency counting completely bypasses complex string permutations in linear O(N) time.'
      },
      comparisonTable: {
        title: 'Anagram Verification Approaches',
        headers: ['Approach', 'Core Strategy', 'Time Complexity', 'Auxiliary Space', 'Best Used When'],
        rows: [
          { feature: 'Frequency Map ⭐', data: 'One map: increment for s, decrement for t', ds: 'O(N)', third: 'O(K) (Distinct chars)', fourth: 'General unicode strings, mixed characters' },
          { feature: 'Frequency Array (26) ⭐⭐', data: 'Fixed 26-slot array with `charCodeAt(i) - 97`', ds: 'O(N)', third: 'O(1) (Fixed 26 slots)', fourth: 'Lowercase english letters (`a-z`)' },
          { feature: 'Sorting Approach', data: '`s.split("").sort().join("") === t.sort...`', ds: 'O(N log N)', third: 'O(N) (Array allocations)', fourth: 'Quick 1-liner production scripts' }
        ],
        takeaway: '💡 Use Frequency Map/Array for optimal O(N) interview solutions instead of slow O(N log N) sorting.'
      },
      tradeoffs: {
        title: 'Frequency Map vs Sorting Trade-offs',
        intro: 'Comparing the two most common ways to check anagrams:',
        items: [
          {
            title: '1. Frequency Counting: Optimal O(N) Linear Time',
            desc: 'Traverse string s to increment counts, then traverse string t to decrement. If any count drops below 0 or character is missing, return false immediately.'
          },
          {
            title: '2. Sorting Approach: O(N log N) Overhead',
            desc: 'Sorting both strings aligns characters identically, allowing a direct equality check. However, sorting takes O(N log N) time and allocates O(N) array buffers.'
          },
          {
            title: '3. Immediate Length Check: O(1) Guard',
            desc: 'If `s.length !== t.length`, they cannot possibly be anagrams. Checking length first avoids any loop execution.'
          }
        ]
      },
      hinglishExplain: `Anagram ko simple Hinglish mein samjhein:

"Anagram ka matlab hai: Do words jinme letters aur unka COUNT bilkul same ho, bas ORDER aage-piche ho!"

Examples:
• "listen" ──► l, i, s, t, e, n (Har letter 1 baar)
• "silent" ──► s, i, l, e, n, t (Har letter 1 baar)
Result: Dono words **ANAGRAM** hain! ✅

Computer Ko Kya Check Karna Hai?
1. Kaunsa character aaya?
2. Kitni baar aaya?

🧠 Core Rule:
"Order important nahi hai, har letter ka COUNT (Frequency) important hai!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Aur Letter Cards:

Masti Sir ne class mein do students ko letter cards diye:

Student A: [ A,  A,  B,  C ]
Student B: [ C,  A,  B,  A ]

Masti Sir bole: "Order ko bhool jao! Bas check karo dono ke paas cards ki quantity same hai ya nahi!"

Masti Sir ne frequency tally banayi:
• 'A' ──► 2 cards
• 'B' ──► 1 card
• 'C' ──► 1 card

Dono students ke paas har letter ka exact same count tha!
Masti Sir bole: "Dono cards ke set exact match ho gaye — ye dono words **ANAGRAM** hain!" 🎉

💡 Lesson:
"Anagram mein ORDER matter nahi karta, FREQUENCY matter karti hai!"`,
      conceptMapping: [
        { emoji: '🔀', item: 'Anagram', mapsTo: 'Same characters with identical counts in different order' },
        { emoji: '🃏', item: 'Character', mapsTo: 'Individual letter token' },
        { emoji: '🔢', item: 'Frequency', mapsTo: 'Occurrence count of each distinct character' },
        { emoji: '🗃️', item: 'Count Map `{}`', mapsTo: 'Key-value registry tracking remaining counts' },
        { emoji: '🛑', item: '`s.length !== t.length`', mapsTo: 'Instant O(1) guard check' }
      ],
      realWorldVisualDiagram: {
        title: 'Frequency Counter Pipeline on "listen" vs "silent"',
        pipeline: [
          { step: '01. Check Length', desc: 'listen (6) === silent (6) ✅ ──► Proceed to frequency build' },
          { step: '02. Build Map from "listen"', desc: 'count = { l:1, i:1, s:1, t:1, e:1, n:1 }' },
          { step: '03. Decrement from "silent"', desc: 's--, i--, l--, e--, n--, t-- ──► All counts reach 0 ✅' },
          { step: '04. Final Verdict', desc: 'No missing characters or negative counts ──► Returns true (Anagram!) 🎉' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// VALID ANAGRAM IN JAVASCRIPT: OPTIMAL FREQUENCY MAP
// ══════════════════════════════════════════════════════════════

/**
 * Checks whether string s and string t are Anagrams:
 * Time Complexity:  O(N) (Two single-pass loops)
 * Space Complexity: O(K) (Proportional to distinct characters)
 */
function isAnagram(s, t) {
  // Guard Check: Different lengths cannot be anagrams
  if (s.length !== t.length) {
    return false;
  }

  const count = {};

  // Step 1: Count character frequencies in string s
  for (const ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  // Step 2: Decrement character frequencies for string t
  for (const ch of t) {
    if (!count[ch]) {
      // Character does not exist or count already reached 0
      return false;
    }
    count[ch]--;
  }

  return true;
}

// 🧪 Test Demonstrations
console.log("isAnagram('listen', 'silent'):", isAnagram("listen", "silent")); // true
console.log("isAnagram('hello', 'world'):", isAnagram("hello", "world"));     // false
console.log("isAnagram('anagram', 'nagaram'):", isAnagram("anagram", "nagaram")); // true
console.log("isAnagram('rat', 'car'):", isAnagram("rat", "car"));             // false`,
      codeBreakdown: [
        { part: 'if (s.length !== t.length) return false;', label: 'Agar dono strings ki length different hai toh anagram impossible hai (O(1) exit)', color: '#3b82f6' },
        { part: 'count[ch] = (count[ch] || 0) + 1;', label: 'Pehli string ke har character ka frequency count store karta hai', color: '#10b981' },
        { part: 'if (!count[ch]) return false;', label: 'Agar doosri string ka letter map mein nahi hai ya count 0 ho chuka hai toh false return karta hai', color: '#8b5cf6' },
        { part: 'count[ch]--;', label: 'Matching letter milne par uska count 1 se kam karta hai', color: '#f59e0b' },
        { part: 'return true;', label: 'Saare letters successfully match aur decrement hone par anagram confirm karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on "listen" and "silent"',
        steps: [
          { step: 'Length Check', action: 's.length (6) === t.length (6) ✅' },
          { step: 'Count s ("listen")', action: 'count = { l:1, i:1, s:1, t:1, e:1, n:1 }' },
          { step: 't[0] = \'s\'', action: 'count[\'s\'] is 1 ──► count[\'s\']-- (0)' },
          { step: 't[1] = \'i\'', action: 'count[\'i\'] is 1 ──► count[\'i\']-- (0)' },
          { step: 't[2] = \'l\'', action: 'count[\'l\'] is 1 ──► count[\'l\']-- (0)' },
          { step: 't[3] = \'e\'', action: 'count[\'e\'] is 1 ──► count[\'e\']-- (0)' },
          { step: 't[4] = \'n\'', action: 'count[\'n\'] is 1 ──► count[\'n\']-- (0)' },
          { step: 't[5] = \'t\'', action: 'count[\'t\'] is 1 ──► count[\'t\']-- (0) ──► Return true ✅' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'Traversing string s takes O(N) time and traversing string t takes O(N) time. Total time = O(N) + O(N) = O(N).',
      spaceComplexity: 'O(K) Auxiliary Space (where K <= N is distinct characters)',
      spaceComplexityExplain: 'The frequency object stores at most K distinct characters. For lowercase English letters (a-z), K <= 26 which is constant O(1) space.',
      commonMistakes: [
        '❌ Mistake 1: Checking only character presence without verifying exact counts (e.g. `"aab"` vs `"abb"` have same characters but are NOT anagrams).\\n✅ Correct: Every distinct letter must have the exact same count.',
        '❌ Mistake 2: Forgetting the initial `s.length !== t.length` guard check.',
        '❌ Mistake 3: Assuming letter order matters.',
        '❌ Mistake 4: Forgetting `count[ch]--` decrement during second pass.',
        '❌ Mistake 5: Forgetting case sensitivity (`"Listen"` vs `"silent"` are not anagrams unless converted with `.toLowerCase()`).'
      ],
      proTips: [
        '💡 26-Slot Array Optimization: For lowercase `a-z`, an `Array(26).fill(0)` indexed by `ch.charCodeAt(0) - 97` is faster than Object hashing.',
        '💡 Group Anagrams Tip (LeetCode 49): Use sorted strings or comma-separated 26-count frequency strings as hash keys to group anagram lists.',
        '💡 Interview Tip: Start your interview explanation with: "Since letter order does not matter, I will compare character frequencies using a single hash map in O(N) time and O(1) extra space."'
      ],
      interviewQuestions: [
        'What is an Anagram and how does Frequency Counting solve it in O(N) time?',
        'Why is `isAnagram("aab", "abb")` false even though both strings contain \'a\' and \'b\'?',
        'What is the difference in time complexity between the Sorting approach and the Frequency Map approach?',
        'How does a 26-element array achieve O(1) auxiliary space for English alphabet anagrams?',
        'How do you solve the Group Anagrams problem (LeetCode 49) using frequency signatures?'
      ],
      quiz: [
        {
          question: 'Q1. Anagram check mein kya same hona mandatory hai?',
          options: ['Sirf letter order', 'Sirf first letter', 'Exact same characters aur unki frequencies', 'Sirf word length'],
          correct: 2,
          explanation: 'Dono strings mein har character ka count bilkul identical hona chahiye.'
        },
        {
          question: 'Q2. Expressions `isAnagram("listen", "silent")` ka result kya hoga?',
          options: ['false', 'true', 'undefined', 'Error'],
          correct: 1,
          explanation: 'Dono words mein l, i, s, t, e, n exactly 1-1 baar appear hote hain.'
        },
        {
          question: 'Q3. Frequency Map approach se Anagram check karne ki Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
          correct: 2,
          explanation: 'Dono strings ko single-pass linear scan karte hain = O(N) time.'
        },
        {
          question: 'Q4. Strings "cat" aur "cats" ko compare karne par kya result aayega?',
          options: ['Anagram', 'Not Anagram (Length different hai)', 'Always True', 'TypeError'],
          correct: 1,
          explanation: 'Lengths different hone ke karan direct false return hota hai.'
        },
        {
          question: 'Q5. Anagram problem mein characters ka order:',
          options: ['Bohot important hota hai', 'Matter nahi karta (Ignored)', 'Sirf first letter ka matter karta hai', 'Sirf last letter ka matter karta hai'],
          correct: 1,
          explanation: 'Anagram mein order badal sakta hai, bas total counts match hone chahiye.'
        }
      ],
      practiceProblems: [
        {
          title: 'Valid Anagram (LeetCode 242)',
          difficulty: 'Easy',
          description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
          hint: 'Check lengths first, build frequency map for s, decrement for t.'
        },
        {
          title: 'Case-Insensitive Anagram Check',
          difficulty: 'Easy',
          description: 'Check if "Listen" and "Silent" are anagrams ignoring uppercase differences.',
          hint: 'Convert both strings to lowercase with .toLowerCase() before checking.'
        },
        {
          title: 'Anagram Ignoring Spaces and Punctuation',
          difficulty: 'Easy',
          description: 'Check if "dormitory" and "dirty room" are anagrams by removing spaces first.',
          hint: 'Strip whitespaces using .replace(/\\s+/g, "") before comparing.'
        },
        {
          title: 'Find All Anagrams in a String (LeetCode 438)',
          difficulty: 'Medium',
          description: 'Given two strings s and p, return an array of all start indices of p\'s anagrams in s.',
          hint: 'Use a fixed-size sliding window of length p.length with frequency array matching.'
        },
        {
          title: 'Group Anagrams (LeetCode 49)',
          difficulty: 'Medium',
          description: 'Given an array of strings strs, group the anagrams together in any order.',
          hint: 'Use sorted string representation or 26-count frequency tuple as a Map key.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-substrings',
      title: 'Substrings',
      emoji: '✂️',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'A Substring is a contiguous (unbroken) sequence of characters within a string. A string of length N contains exactly N*(N+1)/2 non-empty substrings.',
      secondExplain: 'Contiguous means there can be no gaps, skips, or rearrangements. For example, in "CODE", "CO", "ODE", and "D" are valid substrings, but "CE" is NOT a substring because the character "D" was skipped.',
      definitionHighlight: '✂️ Substring Formula: Contiguous slice without skips | Total non-empty substrings = N*(N+1)/2 | JavaScript: `str.slice(start, end)` | Single slice: O(L) | Generate all: O(N³)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Are Substrings Critical in String Algorithms?',
        subtitle: 'The foundation for search matching, sliding windows, and text parsing.',
        mappings: [
          { need: '🔍 1. Substring Pattern Matching', ds: 'Finding if a keyword exists inside a large document (e.g. KMP, Rabin-Karp algorithms).' },
          { need: '🪟 2. Sliding Window Problems', ds: 'Finding the Longest Substring Without Repeating Characters or Minimum Window Substring.' },
          { need: '✂️ 3. URL & Text Tokenization', ds: 'Parsing domain names, query parameters, file paths, and file extensions.' },
          { need: '🧬 4. Bioinformatics Motif Search', ds: 'Locating contiguous genetic sequences and repeated nucleotide codons in DNA.' }
        ],
        takeaway: '💡 Almost all advanced string interview questions revolve around finding, counting, or optimizing substrings.'
      },
      comparisonTable: {
        title: 'Substring vs Subsequence vs Subarray',
        headers: ['Concept', 'Contiguous (No Skips)?', 'Preserves Order?', 'Total Count for Length N', 'Example for "CODE"'],
        rows: [
          { feature: 'Substring ⭐', data: '✅ YES (Strictly unbroken)', ds: '✅ YES', third: 'N*(N+1)/2 (Quadratic)', fourth: '"CO", "ODE" (Valid), "CE" (Invalid)' },
          { feature: 'Subsequence', data: '❌ NO (Skips allowed)', ds: '✅ YES', third: '2ⁿ (Exponential)', fourth: '"CO", "CE", "CDE" (All Valid)' },
          { feature: 'Subarray', data: '✅ YES (Contiguous array items)', ds: '✅ YES', third: 'N*(N+1)/2', fourth: '[1, 2] from [1, 2, 3]' }
        ],
        takeaway: '💡 Substring is strictly contiguous text. If you skip any character in between, it becomes a Subsequence, not a Substring.'
      },
      tradeoffs: {
        title: 'JavaScript Extraction Methods: `slice` vs `substring`',
        intro: 'Understanding built-in string slicing:',
        items: [
          {
            title: '1. `str.slice(start, end)`: Preferred & Versatile',
            desc: 'Extracts characters from `start` index up to (but not including) `end` index. Supports negative indices (e.g. `str.slice(-3)` extracts the last 3 characters).'
          },
          {
            title: '2. `str.substring(start, end)`: Swaps Arguments',
            desc: 'If `start > end`, `substring()` automatically swaps the two arguments. It treats negative indices as 0.'
          },
          {
            title: '3. Single Slice Time Complexity: O(L)',
            desc: 'Extracting a substring of length L copies L characters into a new string, taking O(L) time and O(L) space.'
          }
        ]
      },
      hinglishExplain: `Substrings ko simple Hinglish mein samjhein:

"Substring ka matlab hai string ka ek lagataar (contiguous/bina toota hua) tukda!"

Example with "CODE":
• "C" ──► Substring ✅
• "CO" ──► Substring ✅
• "COD" ──► Substring ✅
• "CODE" ──► Substring ✅
• "ODE" ──► Substring ✅
• "CE" ──► ❌ NOT a Substring! (Kyunki 'D' ko beech mein se skip kar diya).

Roti Ka Tukda Analogy:
Roti ka ek tukda todo toh wo ek continuous piece hota hai. Agar aap beech ka hissa chhod kar aage-piche ka hissa jodoge, toh wo continuous nahi kehlayega!

Total Substrings Formula:
Length N ki string mein total non-empty substrings = N * (N + 1) / 2
• "CAT" (len 3) ──► 3 * 4 / 2 = 6 substrings ("C", "A", "T", "CA", "AT", "CAT")
• "CODE" (len 4) ──► 4 * 5 / 2 = 10 substrings

🧠 Golden Rule:
"Contiguous hai toh Substring, gap/skip kiya toh Subsequence!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Ka Ribbon Cutting ✂️:

Masti Sir ne class mein ek lamba satin ribbon dikhaya jispar likha tha:
[ C ] [ O ] [ D ] [ E ]

Sir ne scissor (kainchi) uthayi aur students se bola:
"Aapko ek baar kainchi chala kar ribbon ka ek continuous piece kaatna hai!"

• Student 1 ne kaata: "CO" ──► Masti Sir: "Shaabaash! Valid Substring!" ✅
• Student 2 ne kaata: "ODE" ──► Masti Sir: "Very good! Valid Substring!" ✅
• Chintu ne pehle 'C' kaata, fir 'D' ko phenk diya aur 'E' jod kar bola: "Sir, mera tukda 'CE' hai!"

Masti Sir hase aur bole:
"Arre Chintu! Beech ka ribbon phadkar jodne se wo Substring nahi rehta! Jab tak bina toote continuous piece na mile, tab tak wo Substring nahi kehlata!" 😂

💡 Lesson:
"Substring hamesha bina kisi gap ke lagataar characters ka slice hota hai!"`,
      conceptMapping: [
        { emoji: '✂️', item: 'Substring', mapsTo: 'Contiguous unbroken slice of a string' },
        { emoji: '📍', item: 'Start Index (i)', mapsTo: 'Beginning boundary of the slice' },
        { emoji: '🏁', item: 'End Index (j)', mapsTo: 'Exclusive upper boundary (slice goes up to j - 1)' },
        { emoji: '📐', item: 'N*(N+1)/2', mapsTo: 'Total number of non-empty substrings' },
        { emoji: '⚡', item: '`str.slice(i, j)`', mapsTo: 'JavaScript native method to extract substring' },
        { emoji: '⏱️', item: 'O(N³)', mapsTo: 'Total time to generate and copy all substrings' }
      ],
      realWorldVisualDiagram: {
        title: 'All Substrings Generation on "CODE" (N = 4, Total = 10)',
        pipeline: [
          { step: '01. Starting at Index 0 (\'C\')', desc: '"C", "CO", "COD", "CODE" (4 substrings)' },
          { step: '02. Starting at Index 1 (\'O\')', desc: '"O", "OD", "ODE" (3 substrings)' },
          { step: '03. Starting at Index 2 (\'D\')', desc: '"D", "DE" (2 substrings)' },
          { step: '04. Starting at Index 3 (\'E\')', desc: '"E" (1 substring) ──► Total = 4+3+2+1 = 10 ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// SUBSTRINGS IN JAVASCRIPT: EXTRACTION & GENERATION
// ══════════════════════════════════════════════════════════════

// 1. Basic Substring Extraction with slice()
const word = "CodeMasti";

console.log("slice(0, 4):", word.slice(0, 4)); // "Code" (Index 0, 1, 2, 3)
console.log("slice(4):", word.slice(4));       // "Masti" (Index 4 to end)
console.log("slice(-5):", word.slice(-5));     // "Masti" (Last 5 characters)

// 2. Generate All Substrings of a String
/**
 * Time Complexity:  O(N³) (O(N²) pairs × O(N) slice copy)
 * Space Complexity: O(N³) to store all generated strings
 */
function getAllSubstrings(str) {
  const result = [];
  const n = str.length;

  // Outer loop: Start index of substring
  for (let i = 0; i < n; i++) {
    // Inner loop: End index boundary of substring (exclusive)
    for (let j = i + 1; j <= n; j++) {
      result.push(str.slice(i, j));
    }
  }

  return result;
}

// 🧪 Test Demonstrations
const sample = "CODE";
const allSubs = getAllSubstrings(sample);

console.log("\\nAll Substrings of 'CODE':", allSubs);
console.log("Total Count:", allSubs.length); // 10 (4 * 5 / 2 = 10)

// 3. Formula Verification Function
function countSubstrings(n) {
  return (n * (n + 1)) / 2;
}
console.log("Formula for length 4:", countSubstrings(4)); // 10`,
      codeBreakdown: [
        { part: 'for (let i = 0; i < n; i++)', label: 'Outer loop substring ka starting character index choose karta hai', color: '#3b82f6' },
        { part: 'for (let j = i + 1; j <= n; j++)', label: 'Inner loop ending boundary decide karta hai (j exclusive hota hai)', color: '#10b981' },
        { part: 'str.slice(i, j)', label: 'Index i se lekar j - 1 tak ke characters ko naye string mein copy karke extract karta hai', color: '#8b5cf6' },
        { part: 'result.push(...)', label: 'Generated substring ko list mein collect karta hai', color: '#f59e0b' },
        { part: '(n * (n + 1)) / 2', label: 'Bina loop chalaye direct count calculate karne ka mathematical formula', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on "CAT" (Length = 3, Total = 6)',
        steps: [
          { step: 'i = 0 (\'C\')', action: 'j=1 ──► "C" | j=2 ──► "CA" | j=3 ──► "CAT" (3 substrings)' },
          { step: 'i = 1 (\'A\')', action: 'j=2 ──► "A" | j=3 ──► "AT" (2 substrings)' },
          { step: 'i = 2 (\'T\')', action: 'j=3 ──► "T" (1 substring)' },
          { step: 'Total Collected', action: '["C", "CA", "CAT", "A", "AT", "T"] ──► 6 substrings ✅' }
        ]
      },
      timeComplexity: 'Single Slice: O(L) | Generate All: O(N³) Total Time',
      timeComplexityExplain: 'Extracting a substring of length L takes O(L) time. Generating all N*(N+1)/2 substrings requires O(N²) loop iterations with an average slice copy of O(N), resulting in O(N³) overall time.',
      spaceComplexity: 'O(N³) Auxiliary Space to store all substrings / O(1) if just counting',
      spaceComplexityExplain: 'Storing all N*(N+1)/2 generated substrings takes O(N³) total character memory. Just counting or checking conditions without storing requires O(1) space.',
      commonMistakes: [
        '❌ Mistake 1: Confusing Substring with Subsequence (e.g. thinking `"CE"` is a substring of `"CODE"`).\\n✅ Correct: `"CE"` skips \'D\', making it a Subsequence, not a Substring.',
        '❌ Mistake 2: Forgetting that `.slice(start, end)` is exclusive of `end`.\\n✅ Correct: `str.slice(0, 3)` extracts indices 0, 1, 2 (length 3).',
        '❌ Mistake 3: Thinking total substrings count is 2ⁿ.\\n✅ Correct: 2ⁿ is for subsequences; substrings is N*(N+1)/2.',
        '❌ Mistake 4: Believing `str.slice()` runs in O(1) time.\\n✅ Correct: Slicing copies characters in memory taking O(L) time.'
      ],
      proTips: [
        '💡 Sliding Window Optimization: In interview problems like "Longest Substring", avoid extracting slices repeatedly in O(N³). Track indices `left` and `right` in O(1) space instead!',
        '💡 Formula Reflex: Remember that any string of length N has N*(N+1)/2 non-empty substrings.',
        '💡 Modern JS Slice: Use `str.slice()` as the universal standard; avoid deprecated `substr()`.'
      ],
      interviewQuestions: [
        'What is a Substring and how does it differ from a Subsequence?',
        'How many non-empty substrings does a string of length N have?',
        'What is the time complexity of generating and storing all substrings of a string?',
        'How does `str.slice()` differ from `str.substring()` in JavaScript?',
        'Why does a sliding window optimize substring search from O(N³) down to O(N)?'
      ],
      quiz: [
        {
          question: 'Q1. String "CODE" ke liye inme se kaunsa valid Substring NAHI hai?',
          options: ['"CO"', '"ODE"', '"CE"', '"D"'],
          correct: 2,
          explanation: '"CE" mein character \'D\' ko skip kar diya gaya hai, isliye ye Subsequence hai, Substring nahi.'
        },
        {
          question: 'Q2. 4 characters ki string ke total kitne non-empty substrings hote hain?',
          options: ['4', '10 (4 * 5 / 2 = 10)', '16 (2⁴)', '8'],
          correct: 1,
          explanation: 'Formula: N * (N + 1) / 2 ──► 4 * 5 / 2 = 10.'
        },
        {
          question: 'Q3. JavaScript expression `"JavaScript".slice(0, 4)` ka output kya hoga?',
          options: ['"Java"', '"Jav"', '"JavaS"', '"Script"'],
          correct: 0,
          explanation: 'slice(0, 4) indices 0, 1, 2, 3 ke characters ("Java") extract karta hai.'
        },
        {
          question: 'Q4. N length ki string ke saare substrings generate aur extract karne ki Total Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(N)', 'O(N²)', 'O(N³)'],
          correct: 3,
          explanation: 'O(N²) substrings hote hain aur har substring copy karne mein average O(N) time lagta hai ──► O(N³).'
        },
        {
          question: 'Q5. Substring hamesha kis type ka sequence hota hai?',
          options: ['Contiguous (Lagataar bina gap ke)', 'Non-contiguous (Gaps allowed)', 'Reverse order only', 'Sorted order only'],
          correct: 0,
          explanation: 'Substring strictly contiguous (unbroken) character sequence hota hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Generate All Substrings',
          difficulty: 'Easy',
          description: 'Given a string s, return an array of all its contiguous non-empty substrings.',
          hint: 'Use nested loops from i=0 to n and j=i+1 to n with s.slice(i, j).'
        },
        {
          title: 'Count Palindromic Substrings (LeetCode 647)',
          difficulty: 'Medium',
          description: 'Given a string s, return the number of palindromic substrings in it.',
          hint: 'Expand around center for each index in O(N²) time instead of generating all O(N³) substrings.'
        },
        {
          title: 'Longest Substring Without Repeating Characters (LeetCode 3)',
          difficulty: 'Medium',
          description: 'Find the length of the longest substring without repeating characters.',
          hint: 'Use Sliding Window with a Map to achieve linear O(N) time.'
        },
        {
          title: 'Longest Common Prefix (LeetCode 14)',
          difficulty: 'Easy',
          description: 'Find the longest common prefix substring amongst an array of strings.',
          hint: 'Compare prefixes across all strings until a mismatch is found.'
        },
        {
          title: 'Repeated Substring Pattern (LeetCode 459)',
          difficulty: 'Medium',
          description: 'Check if a string can be constructed by taking a substring of it and appending multiple copies together.',
          hint: 'Check if (s + s).slice(1, -1).includes(s).'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-subsequence',
      title: 'Subsequence',
      emoji: '🧩',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'A Subsequence is a sequence derived by deleting zero or more characters from a string without changing the relative order of the remaining characters (e.g. "ace" from "abcde").',
      secondExplain: 'Unlike a substring, characters in a subsequence do not need to be contiguous (unbroken). Gaps and skips are completely valid as long as the left-to-right sequence order is strictly preserved.',
      definitionHighlight: '🧩 Subsequence Rule: Skips allowed + Relative order preserved | Total Subsequences = 2ⁿ | Two-Pointer check: O(|t|) Time & O(1) Space',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Are Subsequences Fundamental in DSA?',
        subtitle: 'The backbone of Dynamic Programming, fuzzy search, and bioinformatics.',
        mappings: [
          { need: '📊 1. Longest Common Subsequence (LCS)', ds: 'Core DP problem used in file diffing tools (git diff) and text comparison engines.' },
          { need: '🧬 2. Bioinformatics & DNA Sequencing', ds: 'Matching genetic sequences where evolutionary mutations delete or insert base pairs.' },
          { need: '🔍 3. Fuzzy Search & Autocomplete', ds: 'Searching "fbd" to match "facebook_download" in IDEs and command-line search.' },
          { need: '⚡ 4. Two-Pointer Verification Pattern', ds: 'Checking if string s is a valid subsequence of t in linear O(N) time with O(1) space.' }
        ],
        takeaway: '💡 Subsequences teach you how to maintain sequential invariants even when skipping intermediate data.'
      },
      comparisonTable: {
        title: 'Substring vs Subsequence Comparison',
        headers: ['Feature', 'Substring ✂️', 'Subsequence 🧩', '"abcde" Example'],
        rows: [
          { feature: 'Contiguous (No Gaps)?', data: '✅ Strictly YES', ds: '❌ NO (Gaps allowed)', third: '"bcd" (Both) vs "ace" (Subsequence only)' },
          { feature: 'Skip Characters?', data: '❌ NO', ds: '✅ YES', third: '"ace" skips \'b\' and \'d\'' },
          { feature: 'Preserve Order?', data: '✅ YES', ds: '✅ YES', third: '"ca" is INVALID in both' },
          { feature: 'Total Count for Length N', data: 'N*(N+1)/2 (Quadratic)', ds: '2ⁿ (Exponential)', third: 'N=4 ──► 10 Subs vs 16 Subsequences' }
        ],
        takeaway: '💡 Golden Rule: Substring = Continuous | Subsequence = Skip Allowed + Same Order.'
      },
      tradeoffs: {
        title: 'Subsequence Algorithmic Trade-offs',
        intro: 'Comparing subsequence verification vs power set generation:',
        items: [
          {
            title: '1. Two-Pointer Verification: O(|t|) Linear Time',
            desc: 'Pointer `i` scans subsequence `s` while pointer `j` scans string `t`. Whenever `s[i] === t[j]`, advance `i`. Runs in O(|t|) time and O(1) auxiliary space.'
          },
          {
            title: '2. Generating All Subsequences: O(2ⁿ) Exponential Space',
            desc: 'Every character has 2 choices: Include or Exclude. For length N, total subsequences is 2ⁿ (e.g. N=20 ──► 1,048,576 subsequences).'
          },
          {
            title: '3. Order Invariant',
            desc: 'If `c` comes after `a` in the original text, `"ca"` can NEVER be a valid subsequence because relative ordering was reversed.'
          }
        ]
      },
      hinglishExplain: `Subsequence ko simple Hinglish mein samjhein:

"Subsequence ka matlab hai: Characters ko beech mein se skip (delete) kar sakte ho, lekin bache hue letters ka ORDER nahi badal sakte!"

Original String: "abcde"
• "ace"   ──► Valid Subsequence ✅ ('b' aur 'd' ko skip kiya, order A ──► C ──► E same raha)
• "ad"    ──► Valid Subsequence ✅
• "abc"   ──► Valid Subsequence ✅
• "ca"    ──► ❌ INVALID! (Original mein 'a' pehle tha aur 'c' baad mein, order ulta kar diya).

🧠 Core Difference:
• **Substring:** Roti ka unbroken lagataar tukda (No gap allowed).
• **Subsequence:** Beech mein se letters chhod kar aage badhna (Gap allowed, order fixed).`,
      storyExplain: `📖 Masti Sir Ki Kahani — Masti Sir Aur School Assembly 🎒:

Masti Sir ke school mein 5 students line mein khade the:
[ A ] ──► [ B ] ──► [ C ] ──► [ D ] ──► [ E ]

Masti Sir ne bola: "Mujhe sirf A, C aur E students chahiye!"
Students aage aaye:
[ A ] ──► [ C ] ──► [ E ]

Masti Sir bole: "Shaabaash! Ye ek valid **Subsequence** hai kyunki order A ──► C ──► E bilkul original line jaisa hai!" ✅

Tabhi Chintu bola: "Sir, kya hum pehle C ko khada karke fir A ko bula sakte hain [C, A]?"
Masti Sir bole:
"❌ Bilkul nahi Chintu! Original line mein A aage tha aur C piche. Aap students ko chhod (skip) sakte ho, lekin unki line ka sequence nahi ulat sakte!" 😂

💡 Lesson:
"Skip allowed, order change not allowed!"`,
      conceptMapping: [
        { emoji: '🧩', item: 'Subsequence', mapsTo: 'Sequence with zero or more deletions preserving order' },
        { emoji: '👉', item: 'Pointer i', mapsTo: 'Tracks characters in target subsequence s' },
        { emoji: '👉', item: 'Pointer j', mapsTo: 'Traverses through original reference string t' },
        { emoji: '🎯', item: '`s[i] === t[j]`', mapsTo: 'Match found: advance pointer i to next required letter' },
        { emoji: '🏁', item: '`i === s.length`', mapsTo: 'All target characters found in correct order ──► true' }
      ],
      realWorldVisualDiagram: {
        title: 'Two-Pointer Subsequence Match: s = "ace", t = "abcde"',
        pipeline: [
          { step: '01. Match \'a\'', desc: 's[0] (\'a\') === t[0] (\'a\') ✅ ──► i=1, j=1' },
          { step: '02. Skip \'b\'', desc: 's[1] (\'c\') !== t[1] (\'b\') ──► j advances to 2' },
          { step: '03. Match \'c\'', desc: 's[1] (\'c\') === t[2] (\'c\') ✅ ──► i=2, j=3' },
          { step: '04. Skip \'d\'', desc: 's[2] (\'e\') !== t[3] (\'d\') ──► j advances to 4' },
          { step: '05. Match \'e\'', desc: 's[2] (\'e\') === t[4] (\'e\') ✅ ──► i=3 ──► i === s.length (true) 🎉' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// IS SUBSEQUENCE IN JAVASCRIPT: OPTIMAL TWO-POINTER APPROACH
// ══════════════════════════════════════════════════════════════

/**
 * Checks whether string s is a Subsequence of string t:
 * Time Complexity:  O(|t|) Linear Time
 * Space Complexity: O(1) Constant Space
 */
function isSubsequence(s, t) {
  let i = 0; // Pointer for subsequence s
  let j = 0; // Pointer for original string t

  // Traverse both strings
  while (i < s.length && j < t.length) {
    // If characters match, advance target pointer i
    if (s[i] === t[j]) {
      i++;
    }
    // Always advance reference pointer j
    j++;
  }

  // If i reached the end of s, all characters were found in order!
  return i === s.length;
}

// 🧪 Test Demonstrations
console.log("isSubsequence('ace', 'abcde'):", isSubsequence("ace", "abcde")); // true
console.log("isSubsequence('aec', 'abcde'):", isSubsequence("aec", "abcde")); // false (Order mismatch)
console.log("isSubsequence('axc', 'ahbgdc'):", isSubsequence("axc", "ahbgdc")); // false ('x' not found)
console.log("isSubsequence('', 'abcde'):", isSubsequence("", "abcde"));       // true (Empty string is always valid)`,
      codeBreakdown: [
        { part: 'let i = 0; let j = 0;', label: 'i tracks target subsequence s, j tracks original string t', color: '#3b82f6' },
        { part: 'while (i < s.length && j < t.length)', label: 'Loop tab tak chalta hai jab tak dono strings ke bounds ke andar hon', color: '#10b981' },
        { part: 'if (s[i] === t[j]) i++;', label: 'Match milne par agla target letter dhoondhne ke liye i ko aage badhata hai', color: '#8b5cf6' },
        { part: 'j++;', label: 'Chahe match mile ya na mile, original string t mein agle letter par badhte hain', color: '#f59e0b' },
        { part: 'return i === s.length;', label: 'Agar s ke saare characters sequence mein mil gaye toh true return karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on s = "ace", t = "abcde"',
        steps: [
          { step: 'Initial', action: 'i = 0 (target \'a\'), j = 0 (t[0] = \'a\')' },
          { step: 'Step 1 (j=0)', action: 's[0] (\'a\') === t[0] (\'a\') ✅ ──► Match! i: 1, j: 1' },
          { step: 'Step 2 (j=1)', action: 's[1] (\'c\') !== t[1] (\'b\') ──► No match. j: 2' },
          { step: 'Step 3 (j=2)', action: 's[1] (\'c\') === t[2] (\'c\') ✅ ──► Match! i: 2, j: 3' },
          { step: 'Step 4 (j=3)', action: 's[2] (\'e\') !== t[3] (\'d\') ──► No match. j: 4' },
          { step: 'Step 5 (j=4)', action: 's[2] (\'e\') === t[4] (\'e\') ✅ ──► Match! i: 3, j: 5 ──► Return i === 3 (true) 🎉' }
        ]
      },
      timeComplexity: 'O(|t|) - Linear Time',
      timeComplexityExplain: 'In the worst case, pointer j scans through the entire original string t once. Total time is proportional to t.length: O(|t|).',
      spaceComplexity: 'O(1) - Constant Auxiliary Space',
      spaceComplexityExplain: 'Only two integer pointer variables (i and j) are used. Zero additional strings or arrays are allocated in memory.',
      commonMistakes: [
        '❌ Mistake 1: Changing character order (e.g. `"ca"` is not a subsequence of `"abcde"`).\\n✅ Correct: Relative left-to-right order must always be preserved.',
        '❌ Mistake 2: Confusing Substring with Subsequence (thinking `"ace"` is a substring).\\n✅ Correct: `"ace"` has gaps, making it a Subsequence only.',
        '❌ Mistake 3: Advancing pointer `i` unconditionally in every loop iteration.\\n✅ Correct: `i` only advances when `s[i] === t[j]`.',
        '❌ Mistake 4: Forgetting the final `return i === s.length` verification.'
      ],
      proTips: [
        '💡 Memory Formula: Subsequence = Skip Allowed + Same Order.',
        '💡 Total Subsequences: Any string of length N has 2ⁿ total subsequences (including the empty string `""`).',
        '💡 Multiple Calls Follow-up: In interview problems with 10,000 queries against a fixed string t, precompute a character index map with Binary Search (`upper_bound`) for O(S log T) per query!'
      ],
      interviewQuestions: [
        'What is a Subsequence and how does it differ from a Substring?',
        'How does the Two-Pointer technique verify if s is a subsequence of t in O(|t|) time?',
        'Why is auxiliary space complexity strictly O(1) for this check?',
        'Why is "ca" not a valid subsequence of "abcde"?',
        'How many total subsequences does a string of length N have, and why is it 2ⁿ?'
      ],
      quiz: [
        {
          question: 'Q1. String "abcde" ke liye inme se kaunsa valid Subsequence hai?',
          options: ['"ace"', '"ca"', '"edc"', '"ba"'],
          correct: 0,
          explanation: '"ace" original left-to-right relative order (A ──► C ──► E) maintain karta hai.'
        },
        {
          question: 'Q2. Subsequence mein inme se kya karna allowed hai?',
          options: ['Characters ka order reverse karna', 'Characters ko beech mein se skip (delete) karna', 'Random shuffling karna', 'Characters sort karna'],
          correct: 1,
          explanation: 'Subsequence mein kisi bhi character ko skip kiya ja sakta hai bas relative order barkarar rehna chahiye.'
        },
        {
          question: 'Q3. String "abcde" ke liye string "ca" valid subsequence kyun NAHI hai?',
          options: ['Kyunki c original string mein a ke baad aata hai (order reversed)', 'Kyunki length kam hai', 'Kyunki characters lowercase hain', 'Kyunki beech mein gaps hain'],
          correct: 0,
          explanation: 'Original order change karna strictly prohibited hota hai.'
        },
        {
          question: 'Q4. Two-Pointer `isSubsequence(s, t)` function ki Auxiliary Space Complexity kya hoti hai?',
          options: ['O(N)', 'O(log N)', 'O(1) Constant Space', 'O(N²)'],
          correct: 2,
          explanation: 'Sirf do pointer variables (i aur j) use hote hain bina koi extra string ya array allocate kiye.'
        },
        {
          question: 'Q5. Code mein pointer `i++` kab execute hota hai?',
          options: ['Har iteration par', 'Jab `s[i] === t[j]` match karta hai', 'Jab characters different hote hain', 'Loop end hone par'],
          correct: 1,
          explanation: 'Matching character milne par hi target pointer i agle required letter par advance hota hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Is Subsequence (LeetCode 392)',
          difficulty: 'Easy',
          description: 'Given two strings s and t, return true if s is a subsequence of t, or false otherwise.',
          hint: 'Use two pointers i and j. Advance i when s[i] === t[j], always advance j.'
        },
        {
          title: 'Longest Common Subsequence (LeetCode 1143)',
          difficulty: 'Medium',
          description: 'Given two strings text1 and text2, return the length of their longest common subsequence.',
          hint: 'Use 2D Dynamic Programming: dp[i][j] = 1 + dp[i-1][j-1] if match else max(dp[i-1][j], dp[i][j-1]).'
        },
        {
          title: 'Number of Matching Subsequences (LeetCode 792)',
          difficulty: 'Medium',
          description: 'Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.',
          hint: 'Group words waiting for character ch in buckets/queues for O(|s| + total_word_len) time.'
        },
        {
          title: 'Longest Increasing Subsequence (LeetCode 300)',
          difficulty: 'Medium',
          description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
          hint: 'Use Patience Sorting with Binary Search in O(N log N) time.'
        },
        {
          title: 'Append Characters to String to Make Subsequence (LeetCode 2486)',
          difficulty: 'Easy',
          description: 'Find the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.',
          hint: 'Find the prefix of t that is already a subsequence of s; answer is t.length - i.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-string-searching',
      title: 'String Searching',
      emoji: '🔎',
      difficulty: 'Intermediate',
      englishDef: 'String pattern matching locates pattern P in text T. Naive search takes O(N * M), while advanced algorithms like KMP and Rabin-Karp run in linear O(N + M).',
      hinglishExplain: 'Text ke andar kisi word ya pattern ko dhoondhna. Naive search se lekar KMP linear time matching tak.',
      code: `const text = "Hello World";
console.log(text.indexOf("World")); // 6`
    }),

    createDsaLesson({
      id: 'dsa-two-pointer-on-strings',
      title: 'Two Pointer on Strings',
      emoji: '👉👈',
      difficulty: 'Intermediate',
      englishDef: 'Two Pointers on strings efficiently handle palindromes with character deletions, reversal of vowels, and word-by-word sentence reversal in O(N).',
      hinglishExplain: 'Strings par Two Pointers se vowels swap karna, spaces trim karna aur reverse words solve karna super fast ho jata hai.',
      code: `// Reverse Vowels of a String (LeetCode 345)
function reverseVowels(s) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  const arr = s.split('');
  let l = 0, r = arr.length - 1;
  while (l < r) {
    while (l < r && !vowels.has(arr[l])) l++;
    while (l < r && !vowels.has(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr.join('');
}`
    }),

    createDsaLesson({
      id: 'dsa-sliding-window-on-strings',
      title: 'Sliding Window on Strings',
      emoji: '🪟',
      difficulty: 'Advanced',
      englishDef: 'Sliding Window on strings dynamically maintains substring character constraints, solving "Longest Substring Without Repeating Characters" in O(N).',
      hinglishExplain: 'Window ke right pointer se expand karo aur duplicate aate hi left pointer ko shrink karo. FAANG interviews ka top favourite question!',
      code: `// Longest Substring Without Repeating Characters (LeetCode 3)
function lengthOfLongestSubstring(s) {
  const map = new Map();
  let maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`
    }),

    createDsaLesson({
      id: 'dsa-string-manipulation-problems',
      title: 'String Manipulation Practice Problems',
      emoji: '🏆',
      difficulty: 'Intermediate',
      englishDef: 'Comprehensive practice checklist: 1) Valid Palindrome, 2) Valid Anagram, 3) Longest Common Prefix, 4) Group Anagrams, 5) String to Integer (atoi).',
      hinglishExplain: 'Strings ke core practice problems jo har coding test mein aate hain. Unko step-by-step master karo!',
      code: `// Longest Common Prefix (LeetCode 14)
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
}`
    })
  ]
}
