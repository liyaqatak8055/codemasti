export const cCourse = {
  id: 'c',
  title: 'C Programming',
  description: 'The Ultimate Foundation of Computer Science & Systems Engineering! Low-level memory architecture, Pointers mastery, Stack vs Heap, Dynamic memory management (malloc/free), Structs, Unions, Bit manipulation, File I/O, Data Structures (Linked Lists, Stacks, Queues, Trees, Graphs), Sorting algorithms, GDB debugging, Preprocessor, Makefiles, aur FAANG Systems & C interview problems Masti Sir ke saath!',
  icon: '🔵',
  category: 'programming',
  certificateName: 'C PROGRAMMING',
  topicsCount: 120,
  practiceCount: 140,
  projectsCount: 7,
  hoursEstimate: 40,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: C FUNDAMENTALS & COMPILATION PIPELINE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: C Syntax, Compilation Pipeline & I/O',
      lessons: [
        {
          id: 'c-intro-syntax',
          title: 'C Program Structure, Compilation Pipeline (GCC) & printf/scanf',
          emoji: '🔵',
          xpReward: 35,
          badgeName: 'C Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C sabhi modern languages ki dadi amma hai! C seekh li toh computer ke hardware aur memory se direct dosti ho jayegi! Write code that talks directly to CPU & RAM! 😎"',
            hint: '🤦 Masti Sir: "`scanf` use karte time variable ke aage address-of operator `&` lagana mat bhoolna, jaise `scanf(\"%d\", &age)`!"',
            success: '🥳 Masti Sir: "Wah! C program bina kisi segmentation fault ke successfully compile aur execute ho gaya 🔥"',
            mistake: '😅 Masti Sir: "Semicolon (;) bhool gaye? C compiler bohot strict teacher hai — ek chhota semicolon miss hua aur 10 errors fek dega! 😂"'
          },
          englishDef: 'C is a high-performance, general-purpose procedural programming language created by Dennis Ritchie at Bell Labs in 1972. It provides low-level memory access, clean mapped machine instructions, and minimal runtime overhead. The **C Compilation Pipeline** transforms source code into machine executables across 4 distinct phases: **1. Preprocessor -> 2. Compiler -> 3. Assembler -> 4. Linker**.',
          hinglishExplain: 'C programming language computer ke hardware ke sabse kareeb hoti hai. Isme aap seedha RAM memory address dekh aur control kar sakte ho. Har C program `main()` function se shuru hota hai aur `#include <stdio.h>` se standard I/O functions milte hain. GCC compiler 4 stages mein code ko machine language mein convert karta hai.',
          funnyExample: {
            scenario: 'Automatic Car vs Manual Formula 1 Racecar:\n- Python / JS = Tesla Automatic Car (Driver sirf gas pedal dabata hai, clutch, gear, aur battery computer sambhalta hai 🚗)\n- C Language = Formula 1 Manual Racing Car (Har ek gear, clutch, engine temperature aur tire pressure driver ke direct control mein hota hai! 🏎️💨)',
            punchline: 'C gives you total control over every single byte of computer memory!'
          },
          visualDiagram: {
            title: 'C 4-Stage Compilation Pipeline Architecture',
            nodes: [
              '1. Source Code (main.c) with #include & #define',
              '2. Preprocessor (gcc -E) -> Expanded Source (main.i)',
              '3. Compiler (gcc -S) -> Assembly Code (main.s)',
              '4. Assembler (gcc -c) -> Machine Object Code (main.o)',
              '5. Linker (gcc) -> Links C Standard Library (libc) -> Binary Executable (./main)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: '4 Stages of C Compilation Explained:',
            steps: [
              'Preprocessing (`cpp`): Expands `#include` header files, replaces `#define` macros, strips comments',
              'Compilation (`cc1`): Translates preprocessed C code into target CPU Assembly language instructions',
              'Assembly (`as`): Converts assembly instructions into machine binary object code (`.o`)',
              'Linking (`ld`): Combines object files with system C runtime libraries (`libc`) into an executable binary'
            ]
          },
          code: `// main.c - Standard C99 / C11 Program Structure
#include <stdio.h>

int main(void) {
    // 1. Variable Declarations with Explicit Types
    int studentAge = 21;
    float cgpa = 8.95f;
    char grade = 'A';
    char courseName[] = "CodeMasti C Systems Engineering";

    // 2. Formatted Console Output
    printf("=== %s ===\\n", courseName);
    printf("Student Age : %d years\\n", studentAge);
    printf("Student CGPA: %.2f / 10.0\\n", cgpa);
    printf("Final Grade : %c\\n", grade);

    // 3. Exit Status Code (0 = Clean Success to Operating System)
    return 0;
}`,
          codeBreakdown: [
            { part: '#include <stdio.h>', label: 'Preprocessor directive inserting Standard Input/Output library declarations', color: '#3b82f6' },
            { part: 'int main(void)', label: 'Standard program entry point function returning integer status code to the OS shell', color: '#ef4444' },
            { part: 'printf("Age: %d\\n", studentAge);', label: 'Formatted print writing integer %d, float %.2f and char %c to stdout', color: '#10b981' },
            { part: 'return 0;', label: 'Signals successful execution status code 0 back to calling parent terminal process', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `#include <stdio.h>` header file include karna bhool jana',
            '❌ Format specifier mismatch (e.g. `%d` for float or `%f` for integer causing garbage memory printing)'
          ],
          proTips: [
            '💡 Always compile with strict compiler warning flags: `gcc -Wall -Wextra -pedantic main.c -o main`',
            '💡 Always return `0` from `main()` to signal successful execution to CI/CD pipelines and terminal shells'
          ],
          interviewQuestions: [
            'What are the 4 stages of the C compilation pipeline?',
            'What is the difference between a Declaration and a Definition in C?',
            'What does the `return 0` in `main()` signify to the operating system?'
          ],
          miniChallenge: 'Write a C program that calculates and prints the area and perimeter of a rectangle.',
          quiz: {
            type: 'mcq',
            question: 'C compilation pipeline mein `#include` aur `#define` directives ko expand karne ka kaam kaunsa stage karta hai?',
            options: ['Preprocessor', 'Linker', 'Assembler', 'Debugger'],
            answer: 'Preprocessor',
            explanation: 'The Preprocessor runs before compilation, handling header file inclusion (`#include`), macro expansions (`#define`), and conditional compilation directives.'
          },
          summary: [
            'C high-performance procedural systems language hai',
            'Compilation 4 stages mein hoti hai: Preprocessor -> Compiler -> Assembler -> Linker',
            'Format specifiers (%d, %.2f, %c, %s) formatted I/O provide karte hain'
          ],
          flashcard: {
            q: 'Compiler aur Linker mein kya primary difference hai?',
            a: 'Compiler C source code ko machine object code (`.o`) mein translate karta hai; Linker multiple object files aur C standard library (`libc`) ko jod kar final runnable binary executable banata hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: VARIABLES, DATA TYPES & FORMAT SPECIFIERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Variables, Primitive Types & Format Specifiers',
      lessons: [
        {
          id: 'c-variables-datatypes-specifiers',
          title: 'Variables, Data Types (int, float, char, void), sizeof() & Format Specifiers',
          emoji: '🔢',
          xpReward: 40,
          badgeName: 'Data Types Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C mein har variable RAM mein physical bytes occupy karta hai! `sizeof()` operator se check karo ki tumhare computer par `int` 4 bytes ka hai ya 2 bytes ka! 🔢🧠😎"',
            hint: '💡 Masti Sir: "Signed vs Unsigned: `unsigned int` negative numbers store nahi karta, isliye iski positive range double ho jati hai (0 to 4.29 Billion)!"',
            success: '🎉 Masti Sir: "Data types sizes, limits and format specifiers mastered! 🔥"',
            mistake: '😅 Masti Sir: "Integer overflow se bacho — agar `char` (max 127) mein 128 daaloge toh wrap around hoke -128 ban jayega!"'
          },
          englishDef: 'Variables in C are named memory locations with fixed types and sizes. Fundamental types include `char` (1 Byte), `int` (typically 4 Bytes), `float` (4 Bytes IEEE 754), `double` (8 Bytes), and `void` (absence of type). Modifiers include `signed`, `unsigned`, `short`, and `long`. Because C standards specify minimum sizes rather than exact sizes across architectures, the `sizeof` operator evaluates byte footprint at compile time.',
          hinglishExplain: 'C Data Types aur Format Specifiers ke core concepts:\n1. **Fundamental Types**: `char` (1 byte character / small integer), `int` (4 bytes integer), `float` (single-precision decimal), `double` (double-precision decimal).\n2. **Type Modifiers**: `unsigned int` (sirf 0 aur positive numbers), `long long int` (8 bytes huge numbers).\n3. **sizeof() Operator**: Compile-time operator jo batata hai ki kisi variable ya data type ne kitne bytes memory occupy ki hai.\n4. **Format Specifiers**: `%d` (signed int), `%u` (unsigned int), `%f` (float), `%lf` (double), `%c` (char), `%s` (string), `%p` (pointer memory address in hex).',
          funnyExample: {
            scenario: 'The Memory Locker Sizes (C Data Types):\n- `char` = Tiny Key Drawer (1 Byte: fits 1 character or number up to 127) 🔑\n- `int` = Standard Storage Locker (4 Bytes: fits numbers up to 2.14 Billion) 🗄️\n- `long long` = Heavy Duty Bank Vault (8 Bytes: fits cosmic sized numbers!) 🏦\n- Overflow: Shoving an elephant into a key drawer wraps around and breaks the locker! 🐘💥',
            punchline: 'Choose the right data type size to balance memory efficiency and prevent overflow!'
          },
          visualDiagram: {
            title: 'C Data Types Typical Byte Footprint on Modern 64-bit Systems',
            nodes: [
              'char (1 Byte / 8 bits: -128 to 127 / unsigned: 0 to 255)',
              'short int (2 Bytes: -32,768 to 32,767)',
              'int (4 Bytes / 32 bits: ~ -2.14B to +2.14B)',
              'long long int (8 Bytes: -9.22 Quintillion to +9.22 Quintillion)',
              'float (4 Bytes / 6 digits precision) | double (8 Bytes / 15 digits precision)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Format Specifiers Master Reference Table:',
            steps: [
              '`%d` or `%i`: Signed 32-bit decimal integer',
              '`%u`: Unsigned decimal integer (0 to 4,294,967,295)',
              '`%f`: Single-precision float (default 6 decimal digits)',
              '`%lf`: Double-precision floating point number',
              '`%c`: Single character byte',
              '`%s`: Null-terminated string character sequence',
              '`%p`: Void pointer memory address rendered in hexadecimal (e.g. 0x7ffd9b8)'
            ]
          },
          code: `#include <stdio.h>
#include <limits.h>
#include <float.h>

int main(void) {
    // 1. Primitive Type Demonstrations
    char letter = 'C';
    int count = 42;
    unsigned int positiveOnly = 4000000000U;
    float piFloat = 3.141592f;
    double piDouble = 3.141592653589793;

    // 2. Inspecting Memory Sizes using sizeof operator
    printf("=== C Data Types Memory Footprints ===\\n");
    printf("sizeof(char)        : %zu Byte  (Range: %d to %d)\\n", sizeof(char), CHAR_MIN, CHAR_MAX);
    printf("sizeof(int)         : %zu Bytes (Max: %d)\\n", sizeof(int), INT_MAX);
    printf("sizeof(unsigned int): %zu Bytes (Max: %u)\\n", sizeof(unsigned int), UINT_MAX);
    printf("sizeof(double)      : %zu Bytes (Precision: %d digits)\\n", sizeof(double), DBL_DIG);

    // 3. Format Specifiers Output
    printf("\\nFormatted Outputs:\\n");
    printf("Float (default)     : %f\\n", piFloat);
    printf("Float (2 decimals)  : %.2f\\n", piFloat);
    printf("Double (12 decimals): %.12lf\\n", piDouble);
    printf("Memory Address of count: %p\\n", (void*)&count);

    return 0;
}`,
          codeBreakdown: [
            { part: 'sizeof(int)', label: 'Compile-time operator returning size_t byte length allocated by compiler target ABI', color: '#3b82f6' },
            { part: 'unsigned int positiveOnly = ...U;', label: 'Unsigned modifier doubling positive capacity by reinterpreting sign bit', color: '#10b981' },
            { part: '%p with (void*)&count', label: 'Standard format specifier printing raw hexadecimal memory address of variable', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Double value ko `scanf` karte waqt `%f` use karna instead of `%lf` (causes memory corruption)',
            '❌ `sizeof` return value ko `%d` se print karna (use standard `%zu` for size_t)'
          ],
          proTips: [
            '💡 Use `<stdint.h>` exact-width integer types (`int32_t`, `uint64_t`, `uint8_t`) for portable systems and network programming',
            '💡 Always cast pointers to `(void*)` when printing with `%p` for strict ISO C conformance'
          ],
          interviewQuestions: [
            'Why does the C standard not specify fixed byte sizes for `int` and `long`?',
            'What happens during integer overflow in signed vs unsigned types in C?',
            'What is the difference between `%f` and `%lf` in `printf()` vs `scanf()`?'
          ],
          miniChallenge: 'Write a C program using `<stdint.h>` that prints the exact byte size of `uint8_t`, `uint32_t`, and `uint64_t`.',
          quiz: {
            type: 'mcq',
            question: 'C language mein `sizeof` kya hota hai?',
            options: ['Compile-time operator', 'Runtime library function', 'Preprocessor macro', 'Assembly keyword'],
            answer: 'Compile-time operator',
            explanation: '`sizeof` is a built-in compile-time operator that calculates the byte size of any type or expression during compilation without runtime execution overhead.'
          },
          summary: [
            'C data types physical memory footprint define karte hain',
            'sizeof() operator compile-time par byte size calculate karta hai',
            'Format specifiers input aur output streams ko type-safe format karte hain'
          ],
          flashcard: {
            q: '`signed int` aur `unsigned int` mein kya difference hai?',
            a: '`signed int` Most Significant Bit (MSB) ko sign bit (+ or -) ke roop mein use karta hai (-2.14B to +2.14B); `unsigned int` saari bits ko magnitude treat karta hai (0 to 4.29 Billion).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: OPERATORS, PRECEDENCE & SAFE I/O
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Operators, Precedence & Safe Input/Output',
      lessons: [
        {
          id: 'c-operators-precedence-safe-io',
          title: 'Operators, Precedence & Safe Input Handling (fgets vs scanf)',
          emoji: '⚙️',
          xpReward: 40,
          badgeName: 'Operator Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "String input lene ke liye `gets()` KABHI MAT USE KARNA — ye security vulnerability hai! Hamesha `fgets()` use karo buffer overflow se bachne ke liye! ⚙️🛡️😎"',
            hint: '💡 Masti Sir: "Operator Precedence: Multiplication aur Division pehle hote hain, Addition baad mein! Jab doubt ho, brackets `(a + b) * c` lagao!"',
            success: '🎉 Masti Sir: "Operator precedence and safe input stream handling mastered! 🔥"',
            mistake: '😅 Masti Sir: "`scanf(\"%s\", str)` space aate hi string read karna band kar deta hai — poori line read karne ke liye `fgets(str, sizeof(str), stdin)` use karo!"'
          },
          englishDef: 'C provides comprehensive operators: **Arithmetic** (`+`, `-`, `*`, `/`, `%`), **Relational** (`==`, `!=`, `>`, `<`), **Logical** (`&&`, `||`, `!`), **Bitwise** (`&`, `|`, `^`, `~`, `<<`, `>>`), and **Ternary** (`? :`). Expressions evaluate according to strict **Precedence and Associativity**. Console I/O utilizes formatted `printf`, `scanf`, and secure string stream ingestion via `fgets(buffer, sizeof(buffer), stdin)` to prevent fatal buffer overflows.',
          hinglishExplain: 'C Operators aur Safe I/O ke core concepts:\n1. **Arithmetic & Modulus**: `/` integer division karta hai (truncates decimal); `%` modulus remainder deta hai.\n2. **Logical Short-Circuiting**: `&&` aur `||` pehle expression se result confirm hone par aage evaluate nahi karte.\n3. **Unsafe gets() vs Safe fgets()**: `gets()` buffer boundary check nahi karta (hacker buffer overflow karke program hack kar sakta hai). `fgets(str, sizeof(str), stdin)` maximum allowed characters limit karta hai.\n4. **scanf() Address Operator**: `scanf("%d", &num)` mein `&` address-of operator dena zaroori hai taaki scanf us memory address par value likh sake.',
          funnyExample: {
            scenario: 'The Water Tank Pipe (Buffer Overflow Defense):\n- Unsafe `gets()` = Pouring 1000 Liters of water into a 5-Liter bucket without a tap! Water overflows, floods living room, ruins furniture! 🌊💥\n- Safe `fgets()` = Automatic float valve tap! Accepts strictly up to 5 Liters and shuts off gracefully! 🚰✨',
            punchline: 'Never use gets()! Always use fgets() with buffer size limits!'
          },
          visualDiagram: {
            title: 'Operator Precedence Hierarchy (Highest to Lowest)',
            nodes: [
              '1. Parentheses () & Array subscript [] & Member access ->',
              '2. Unary: ++, --, !, ~, *, &, sizeof',
              '3. Multiplicative: *, /, %',
              '4. Additive: +, -',
              '5. Relational: <, <=, >, >= -> Equality: ==, !=',
              '6. Logical: && -> Logical: ||',
              '7. Assignment: =, +=, -=, *=, /= (Right-to-Left Associativity)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why gets() was Removed from ISO C Standard (C11):',
            steps: [
              '`gets(buffer)` reads stdin until newline without knowing the destination buffer size',
              'If input exceeds buffer bounds, it overwrites the Stack frame, corrupting the Function Return Pointer',
              'Attackers exploit this via Return-Oriented Programming (ROP) to execute arbitrary malicious machine shellcode'
            ]
          },
          code: `#include <stdio.h>
#include <string.h>

int main(void) {
    int a = 10, b = 3;
    char username[32]; // Fixed 32-byte buffer

    // 1. Arithmetic & Division Mechanics
    printf("Integer Division (10 / 3) : %d\\n", a / b);
    printf("Modulus Remainder (10 %% 3) : %d\\n", a % b);
    printf("Float Division (10.0 / 3) : %.2f\\n", (float)a / b);

    // 2. Safe User Input Ingestion using fgets
    printf("\\nEnter your full name (Safe fgets): ");
    if (fgets(username, sizeof(username), stdin) != NULL) {
        // Strip trailing newline character if present
        username[strcspn(username, "\\n")] = '\\0';
        printf("Welcome to CodeMasti C Systems, %s!\\n", username);
    }

    // 3. Bitwise & Ternary Operator Demonstration
    int statusFlag = 0x05; // 0000 0101
    int isEven = (a % 2 == 0) ? 1 : 0;
    printf("Ternary isEven check: %s | Bitwise AND (0x05 & 0x01): %d\\n", 
           isEven ? "YES" : "NO", statusFlag & 0x01);

    return 0;
}`,
          codeBreakdown: [
            { part: 'fgets(username, sizeof(username), stdin)', label: 'Safe string ingestion reading at most 31 bytes + null terminator preventing buffer overflows', color: '#10b981' },
            { part: 'username[strcspn(username, "\\n")] = \'\\0\';', label: 'Idiomatic C technique replacing trailing newline character with string null terminator', color: '#3b82f6' },
            { part: '(float)a / b', label: 'Explicit type cast forcing floating point arithmetic division instead of integer truncation', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Deprecated and dangerous `gets()` function use karna',
            '❌ `scanf("%d", num)` likhna without `&` (causes instant Segmentation Fault)'
          ],
          proTips: [
            '💡 When using `scanf` for strings, always specify maximum width limit: `scanf("%31s", buffer);`',
            '💡 Use parentheses liberally in complex bitwise conditions to avoid operator precedence traps'
          ],
          interviewQuestions: [
            'Why is `gets()` considered a critical security hazard in C and what is the safe replacement?',
            'What is the difference between prefix `++i` and postfix `i++` in expressions?',
            'How does short-circuit evaluation work in C logical operators (`&&` and `||`)?'
          ],
          miniChallenge: 'Write a program using bitwise shift operators to multiply and divide an integer by 4 without using `*` or `/`.',
          quiz: {
            type: 'mcq',
            question: 'C mein `5 / 2` aur `5.0 / 2` evaluate karne par results kya aayenge?',
            options: ['2 aur 2.5', '2.5 aur 2.5', '2 aur 2', 'Compilation Error'],
            answer: '2 aur 2.5',
            explanation: 'When both operands are integers, C performs floor integer division returning `2`. When one operand is floating point (`5.0`), C promotes calculation to float division returning `2.5`.'
          },
          summary: [
            'Precedence aur associativity mathematical order of evaluation govern karte hain',
            'fgets() buffer overflow security vulnerabilities prevent karta hai',
            'Type casting floating point division precision restore karta hai'
          ],
          flashcard: {
            q: 'Prefix `++i` aur Postfix `i++` mein kya difference hota hai?',
            a: '`++i` pehle variable ki value increment karta hai phir expression mein use karta hai; `i++` pehle current value use karta hai phir baad mein memory increment karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: CONTROL FLOW & LOOPS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Control Flow, Conditionals & Loops',
      lessons: [
        {
          id: 'c-control-flow-conditionals-loops',
          title: 'Conditionals (if-else, switch-case) & Iteration Loops (for, while, do-while)',
          emoji: '🔄',
          xpReward: 40,
          badgeName: 'Control Flow Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Loops computer ka asli superpower hain — jo kaam insaan 1 ghante mein kare, loop use milliseconds mein 1 lakh baar execute kar deta hai! 🔄💻😎"',
            hint: '💡 Masti Sir: "`switch-case` mein har case ke end mein `break;` lagana zaroori hai, nahi toh fallthrough hoke agle cases bhi execute ho jayenge!"',
            success: '🎉 Masti Sir: "Loop iterations, nested loops and break/continue control flow mastered! 🔥"',
            mistake: '😅 Masti Sir: "`while(i < 10);` ke aage semicolon mat lagana — ye empty infinite loop ban jata hai jo CPU 100% consume kar leta hai!"'
          },
          englishDef: 'C provides branching constructs (`if-else`, `else-if` ladder, `switch-case-default`) and iterative loops (`for`, `while`, `do-while`). Loop control is augmented by `break` (terminating the nearest loop) and `continue` (skipping to the next iteration cycle).',
          hinglishExplain: 'C Control Flow aur Loops ke core concepts:\n1. **if-else & switch**: Conditionals decide karte hain kaunsa code path run hoga. `switch` integer constants par fast jump-table routing karta hai.\n2. **for Loop**: Jab iterations ki count pehle se pata ho (`for (int i = 0; i < n; i++)`).\n3. **while vs do-while**: `while` pehle condition check karta hai (Entry controlled); `do-while` kam se kam 1 baar execute hota hai phir condition check karta hai (Exit controlled).\n4. **break vs continue**: `break` loop ko turant terminate karta hai; `continue` current round skip karke agle iteration par jump karta hai.',
          funnyExample: {
            scenario: 'The Gym Workout Routine (Loops):\n- `for (int rep = 1; rep <= 10; rep++)` = Push-ups! 1, 2, 3... 10 exact counts! 🏋️\n- `while (hasEnergy)` = Keep jogging until tired 🏃💨\n- `do-while (tryTask)` = Must try bench-press at least once before checking if you can lift it! 🥊\n- `break` = Emergency muscle cramp! Stop workout immediately! 🚨',
            punchline: 'Loops repeat repetitive work with microsecond execution speed!'
          },
          visualDiagram: {
            title: 'while Loop (Entry-Controlled) vs do-while Loop (Exit-Controlled)',
            nodes: [
              'while Loop: Evaluates Condition FIRST -> If True executes Body -> If False executes 0 times',
              'do-while Loop: Executes Body FIRST -> Evaluates Condition -> Guarantees at least 1 execution'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Compilers Optimize Switch Statements via Jump Tables:',
            steps: [
              'When case values are densely clustered integers (e.g. 1 to 10), GCC compiler generates an internal array of jump memory pointers (Jump Table)',
              'Executes in instant O(1) constant time regardless of how many cases exist, rather than O(N) linear if-else checking'
            ]
          },
          code: `#include <stdio.h>

int main(void) {
    int choice = 2;

    // 1. Switch-Case Menu Navigation
    printf("=== C System Menu Selection ===\\n");
    switch (choice) {
        case 1:
            printf("Action: Initializing Network Driver...\\n");
            break;
        case 2:
            printf("Action: Allocating Dynamic Buffer...\\n");
            break;
        case 3:
            printf("Action: Terminating Process...\\n");
            break;
        default:
            printf("Invalid Option Selected!\\n");
            break;
    }

    // 2. For Loop with Prime Number / Divisibility Filter
    printf("\\nEven Numbers from 2 to 10:\\n");
    for (int i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            continue; // Skip odd numbers
        }
        printf("-> %d\\n", i);
    }

    // 3. do-while Loop Guaranteeing Single Execution
    int retries = 0;
    do {
        printf("Connection attempt #%d completed.\\n", retries + 1);
        retries++;
    } while (retries < 2);

    return 0;
}`,
          codeBreakdown: [
            { part: 'switch (choice) { case 1: ... break; }', label: 'Structured branch statement executing matching case with break preventing fallthrough', color: '#3b82f6' },
            { part: 'if (i % 2 != 0) continue;', label: 'Skips remainder of loop body and advances immediately to increment expression', color: '#10b981' },
            { part: 'do { ... } while (retries < 2);', label: 'Exit-controlled loop executing body before evaluating conditional loop predicate', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Switch cases mein `break;` bhool jana (causes unwanted fallthrough bug)',
            '❌ Loop condition mein assignment operator likh dena (`while(x = 5)` instead of `while(x == 5)`)'
          ],
          proTips: [
            '💡 Declare loop index variables inside `for (int i = 0; ...)` for localized scope cleanup in C99+',
            '💡 Use intentional fallthrough comments `/* fallthrough */` when chaining switch cases'
          ],
          interviewQuestions: [
            'How does a C compiler optimize a `switch` statement using a Jump Table?',
            'What is the difference between `while(1)` and `for(;;)` in C?',
            'When is a `do-while` loop preferred over a standard `while` loop?'
          ],
          miniChallenge: 'Write a C program that prints the Fibonacci sequence up to N terms using a loop.',
          quiz: {
            type: 'mcq',
            question: 'C mein kaunsa loop guarantee karta hai ki uska body code kam se kam 1 baar zaroor execute hoga?',
            options: ['do-while loop', 'while loop', 'for loop', 'nested for loop'],
            answer: 'do-while loop',
            explanation: '`do-while` is an exit-controlled loop that executes its body first before evaluating the condition at the end of the iteration.'
          },
          summary: [
            'Conditionals code paths ko dynamically branch karte hain',
            'for loop bounded iterations ke liye aur while loop condition-driven tasks ke liye use hota hai',
            'do-while loop minimum 1 guaranteed execution ensure karta hai'
          ],
          flashcard: {
            q: 'C mein `for(;;)` ka kya matlab hota hai?',
            a: 'Ye ek standard canonical C pattern hai jo ek unconditional infinite loop banata hai (equivalent to `while(1)`).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: POINTERS & DYNAMIC MEMORY ALLOCATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Pointers Mastery & Dynamic Heap Memory (malloc/free)',
      lessons: [
        {
          id: 'c-pointers-malloc',
          title: 'Pointers (&, *), Pointer Arithmetic & Dynamic Heap Memory (malloc, calloc, realloc, free)',
          emoji: '🎯',
          xpReward: 50,
          badgeName: 'Memory Commander',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C ka sabse powerful aur dangerous hathiyar hai POINTERS! Pointer khud value nahi hai — pointer memory ka GPS address hai! `malloc` se Heap memory maango aur `free()` se safely wapas karo! 🎯🧠😎"',
            hint: '💡 Masti Sir: "`int *ptr = &x;` mein `&` address deta hai, aur `*ptr` us address par jakar value read/write karta hai (Dereferencing)!"',
            success: '🎉 Masti Sir: "Pointers, dynamic allocation, and memory leak prevention mastered! 🔥"',
            mistake: '😅 Masti Sir: "`free(ptr);` karne ke baad pointer ko `ptr = NULL;` set karna mat bhoolna, nahi toh Dangling Pointer ban jayega!"'
          },
          englishDef: 'A **Pointer** is a variable that stores the physical hexadecimal memory address of another variable. The **Address-of operator (&)** retrieves a variable\'s address, and the **Dereference operator (*)** accesses or mutates the value at that address. **Dynamic Memory Allocation** requests raw memory from the OS Heap at runtime via `malloc` (uninitialized), `calloc` (zero-initialized), and `realloc` (resizing buffers), with mandatory deallocation via `free()` to prevent fatal **Memory Leaks**.',
          hinglishExplain: 'Pointers aur Dynamic Memory ke core concepts:\n1. **Pointer kya hai**: Normal variable value store karta hai (`int x = 10`), Pointer us variable ka RAM address store karta hai (`int *ptr = &x`).\n2. **Dereferencing (*ptr)**: Pointer ke address par jakar value read ya modify karna (`*ptr = 50`).\n3. **Pointer Arithmetic**: `ptr + 1` agle byte par nahi jata, balki data type ke size ke barabar aage badhta hai (`+ 4 bytes` for int).\n4. **Dynamic Heap Memory**: `malloc(size)` runtime par Heap memory maangta hai, aur `free(ptr)` use OS ko wapas return karta hai.\n5. **Dangling Pointer & Memory Leak**: Agar memory free kar di par pointer abhi bhi purana address pakde hue hai, use Dangling Pointer kehte hain. Solution: `free(ptr); ptr = NULL;`.',
          funnyExample: {
            scenario: 'The Secret Treasure Chest (Pointers & Memory):\n- Variable `int treasure = 100` (Ghar ke andar rakha khazana 💎)\n- Pointer `int *gpsTracker = &treasure` (Khazane ke ghar ka GPS Coordinates `0x7ffee4` 🗺️)\n- Dereferencing `*gpsTracker = 500` (GPS address pe jaakar khazana badal diya!)\n- Dynamic Allocation `malloc()` = Renting a secure bank locker from the bank manager at runtime! 🏦📦',
            punchline: 'Pointers give you direct remote control over physical RAM addresses!'
          },
          visualDiagram: {
            title: 'Pointer Address & Dereferencing Memory Model',
            nodes: [
              'Variable: int score = 95 (Occupies 4 Bytes at Address 0x7FFF0010)',
              'Pointer: int *pScore = &score (Stores address value 0x7FFF0010 at Address 0x7FFF0020)',
              'Dereference: *pScore = 100 -> Modifies memory cell at 0x7FFF0010 directly!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Dynamic Heap Allocation Lifecycle & Traps:',
            steps: [
              '`malloc(N * sizeof(int))`: Requests N*4 raw bytes from the Heap; returns a `void*` pointer',
              'NULL Check: If system is out of memory, `malloc` returns `NULL`. Must ALWAYS check `if (ptr == NULL)` before accessing!',
              '`free(ptr)`: Releases heap block back to the operating system memory allocator',
              '`ptr = NULL`: Neutralizes dangling pointer preventing accidental use-after-free bugs'
            ]
          },
          code: `#include <stdio.h>
#include <stdlib.h>

// Function swapping two numbers using Pointers (Pass-by-Reference effect)
void swapNumbers(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int x = 10, y = 20;

    printf("Before swap: x = %d, y = %d\\n", x, y);
    swapNumbers(&x, &y); // Pass memory addresses
    printf("After swap : x = %d, y = %d\\n", x, y);

    // ── Dynamic Memory Allocation on Heap ──
    int capacity = 5;
    int *dynamicArray = (int *) malloc(capacity * sizeof(int));

    // 1. Crucial Defensive NULL Check
    if (dynamicArray == NULL) {
        fprintf(stderr, "Error: Memory allocation failed!\\n");
        return 1;
    }

    // 2. Populate and Access Heap Memory
    for (int i = 0; i < capacity; i++) {
        *(dynamicArray + i) = (i + 1) * 10; // Equivalent to dynamicArray[i]
    }

    printf("\\nDynamic Heap Array Elements:\\n");
    for (int i = 0; i < capacity; i++) {
        printf("Element [%d] at address %p: %d\\n", i, (void*)(dynamicArray + i), dynamicArray[i]);
    }

    // 3. Clean up memory to prevent Memory Leaks
    free(dynamicArray);
    dynamicArray = NULL; // Defend against dangling pointer

    printf("\\nMemory freed successfully and pointer set to NULL.\\n");
    return 0;
}`,
          codeBreakdown: [
            { part: 'void swapNumbers(int *a, int *b)', label: 'Accepts memory addresses enabling function to modify caller variables directly', color: '#3b82f6' },
            { part: 'malloc(capacity * sizeof(int))', label: 'Allocates contiguous raw byte block on the OS Heap dynamically at runtime', color: '#10b981' },
            { part: 'free(dynamicArray); dynamicArray = NULL;', label: 'Releases allocated memory and neutralizes dangling pointer reference', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Dereferencing a NULL pointer (causes instant Segmentation Fault crash)',
            '❌ `malloc()` use karne ke baad `free()` karna bhool jana (causes Memory Leaks)',
            '❌ Free kiye gaye pointer ko dobara use karna (Use-After-Free security vulnerability)'
          ],
          proTips: [
            '💡 Use `calloc(n, size)` when you need dynamically allocated memory to be zero-initialized automatically',
            '💡 Use tools like **Valgrind** (`valgrind --leak-check=full ./main`) to detect memory leaks and invalid reads'
          ],
          interviewQuestions: [
            'What is the difference between `malloc()`, `calloc()`, and `realloc()` in C?',
            'What is a Dangling Pointer, a Wild Pointer, and a Memory Leak?',
            'Why does pointer arithmetic (`ptr + 1`) advance by the size of the target type rather than 1 byte?'
          ],
          miniChallenge: 'Dynamically allocate an array of 5 integers, expand it to 10 integers using `realloc()`, and print the values.',
          quiz: {
            type: 'mcq',
            question: 'C mein `int *ptr = (int*) malloc(sizeof(int)); free(ptr);` execute karne ke baad `ptr` ko kya kaha jata hai?',
            options: ['Dangling Pointer', 'Null Pointer', 'Wild Pointer', 'Void Pointer'],
            answer: 'Dangling Pointer',
            explanation: 'A Dangling Pointer is a pointer that still holds the memory address of a heap block that has already been deallocated using `free()`.'
          },
          summary: [
            'Pointers memory addresses store aur manipulate karte hain',
            'malloc heap memory allocate karta hai aur free() memory release karta hai',
            'Always check for NULL after malloc and set freed pointers to NULL'
          ],
          flashcard: {
            q: '`malloc()` aur `calloc()` mein kya difference hai?',
            a: '`malloc(size)` raw uninitialized garbage bytes allocate karta hai; `calloc(num, size)` memory allocate karke saari bits ko zero (`0`) se initialize karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: STRUCTURES, UNIONS & MEMORY ALIGNMENT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Structures (struct), Unions & Memory Alignment',
      lessons: [
        {
          id: 'c-structures-unions-enums-typedef',
          title: 'Structures (struct), Arrow Operator (->), Unions & Memory Padding',
          emoji: '🏗️',
          xpReward: 45,
          badgeName: 'Data Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Real world data sirf single int ya float nahi hota — Student mein Name, Roll Number, aur Marks sab ek sath hote hain! C mein custom composite data types banane ke liye `struct` use karte hain! 🏗️📋😎"',
            hint: '💡 Masti Sir: "Struct pointer se member access karne ke liye arrow operator `ptr->name` use hota hai, jo `(*ptr).name` ka clean shortcut hai!"',
            success: '🎉 Masti Sir: "Structures, Unions memory sharing, and typedef aliases mastered! 🔥"',
            mistake: '😅 Masti Sir: "Struct memory padding ka dhyan rakhna — compiler CPU speed ke liye members ke beech invisible padding bytes daalta hai!"'
          },
          englishDef: 'A **Structure (struct)** is a user-defined composite data type grouping variables of different types under a single named type. Members are accessed via dot (`.`) or arrow (`->`) for struct pointers. A **Union** stores multiple members sharing the exact same memory space (sized to its largest member). **Typedef** provides clean type aliases, and **Enums** represent named integer constants.',
          hinglishExplain: 'Structures aur Unions ke core concepts:\n1. **struct**: Alag-alag data types ko ek sath pack karta hai (jaise `struct Student { int id; char name[50]; float gpa; }`).\n2. **Arrow Operator (->)**: Jab struct ka pointer ho (`struct Student *s`), toh members access karne ke liye `s->id` use kiya jata hai.\n3. **struct vs union**: Struct mein har member ki apni alag memory hoti hai; Union mein saare members same memory share karte hain (size of union = size of largest member).\n4. **Structure Padding**: CPU 32-bit ya 64-bit boundaries par fast read karne ke liye struct ke andar invisible padding bytes add karta hai.\n5. **typedef**: Lambe type names ka short readable alias banata hai (`typedef struct Student Student;`).',
          funnyExample: {
            scenario: 'The Multi-Room Apartment vs Hotel Single Bed:\n- `struct` = 3-Bedroom Apartment 🏢: Living room for `int`, Bedroom for `float`, Kitchen for `char[]` — everyone has their own space!\n- `union` = Hotel Single Capsule Bed 🛏️: Only 1 guest can sleep at a time! If `int` sleeps, `float` must wake up and leave!',
            punchline: 'Struct gives every member its own memory; Union shares memory among members!'
          },
          visualDiagram: {
            title: 'struct vs union Memory Allocation Layout Comparison',
            nodes: [
              'struct Data { int i; float f; char c; } -> Total Size: 4 + 4 + 1 + 3 padding = 12 Bytes (Each has own offset)',
              'union Data  { int i; float f; char c; } -> Total Size: 4 Bytes (All members overlap at Offset 0x00!)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Structure Padding & Memory Alignment:',
            steps: [
              'Modern CPUs read memory in 4-byte or 8-byte aligned words for optimal bus speed',
              'If a 1-byte `char` is followed by a 4-byte `int`, the compiler inserts 3 invisible padding bytes between them',
              'Reordering struct members from largest to smallest minimizes padding waste'
            ]
          },
          code: `#include <stdio.h>
#include <string.h>

// 1. Defining Structure with typedef alias
typedef struct {
    int id;
    char name[32];
    float gpa;
} Student;

// 2. Defining Union sharing memory
typedef union {
    int intVal;
    float floatVal;
    char charVal;
} VariantData;

void printStudent(const Student *s) {
    // Arrow operator used with struct pointer
    printf("Student ID  : %d\\n", s->id);
    printf("Student Name: %s\\n", s->name);
    printf("Student GPA : %.2f\\n", s->gpa);
}

int main(void) {
    // 1. Initializing Structure
    Student s1 = {101, "Kabir Sharma", 9.45f};
    printf("=== Student Record (struct) ===\\n");
    printStudent(&s1);

    // 2. Union Memory Sharing Demonstration
    VariantData v;
    v.intVal = 42;
    printf("\\nUnion intVal: %d\\n", v.intVal);
    v.floatVal = 3.14f; // Overwrites the same memory bytes!
    printf("Union floatVal: %.2f (intVal is now overwritten!)\\n", v.floatVal);

    printf("\\nMemory Footprints:\\n");
    printf("sizeof(Student struct): %zu Bytes\\n", sizeof(Student));
    printf("sizeof(Variant union) : %zu Bytes\\n", sizeof(VariantData));

    return 0;
}`,
          codeBreakdown: [
            { part: 'typedef struct { ... } Student;', label: 'Combines structure definition with typedef alias eliminating repetitive struct keyword', color: '#3b82f6' },
            { part: 'printf("ID: %d\\n", s->id);', label: 'Arrow operator dereferencing struct pointer and selecting member in single operation', color: '#10b981' },
            { part: 'sizeof(VariantData)', label: 'Evaluates to 4 bytes because union members share the exact same memory space', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Struct pointer par dot operator use karna (`s.id` instead of `s->id`)',
            '❌ Union ke ek member mein write karke doosre member se read karne ki koshish karna expecting both values to survive'
          ],
          proTips: [
            '💡 Order structure fields by decreasing size (`double` -> `int` -> `char`) to eliminate alignment padding overhead',
            '💡 Pass large structures to functions via `const StructName *ptr` to avoid expensive stack memory copying'
          ],
          interviewQuestions: [
            'What is the difference between a `struct` and a `union` in C?',
            'What is Structure Padding and Alignment, and why does the compiler add padding bytes?',
            'What does the `->` operator do under the hood?'
          ],
          miniChallenge: 'Create a `struct Employee` and sort an array of 3 employees by salary.',
          quiz: {
            type: 'mcq',
            question: 'C mein ek `struct` pointer variable se uske members ko access karne ke liye kaunsa operator use kiya jata hai?',
            options: ['Arrow operator (->)', 'Dot operator (.)', 'Scope resolution (::)', 'Hash operator (#)'],
            answer: 'Arrow operator (->)',
            explanation: 'The arrow operator `ptr->member` is syntactic shorthand for dereferencing a structure pointer and accessing the member `(*ptr).member`.'
          },
          summary: [
            'struct alag-alag data types ko group karke custom composite types banata hai',
            'Arrow operator (->) struct pointers se members access karta hai',
            'union mein saare members same memory space share karte hain'
          ],
          flashcard: {
            q: 'Structure padding kya hoti hai?',
            a: 'Compiler dwara struct members ke beech insert kiye gaye empty unused bytes jo data ko CPU hardware boundary (4/8 bytes) par align karte hain for faster memory access.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: DATA STRUCTURES & ALGORITHMS WITH C
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Data Structures & Algorithms with C',
      lessons: [
        {
          id: 'c-dsa-linkedlist-stacks-sorting',
          title: 'Linked Lists, Stacks, Queues, Binary Search & QuickSort in C',
          emoji: '⛓️',
          xpReward: 50,
          badgeName: 'DSA Master in C',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Data Structures ko C mein implement karne se memory ka har pointer connection crystal clear ho jata hai! Linked Lists, Stacks, Queues, Binary Search aur QuickSort master karo! ⛓️📊😎"',
            hint: '💡 Masti Sir: "Linked List Node = Data + Pointer to Next Node (`struct Node *next`)! Head pointer list ka main entry point hota hai!"',
            success: '🎉 Masti Sir: "Dynamic Linked List implementation and QuickSort recursion algorithm active! 🔥"',
            mistake: '😅 Masti Sir: "Linked List traverse karte waqt `head` pointer ko directly aage mat badhao (`head = head->next`) — use a temporary `current` pointer to preserve head!"'
          },
          englishDef: 'Implementing fundamental data structures in C builds mastery over pointers and dynamic memory management: **Singly Linked Lists** (dynamic nodes linked via `next` pointers), **Stack** (LIFO push/pop), **Queue** (FIFO enqueue/dequeue), and **Binary Search Trees (BST)**. Core algorithms include **Binary Search** O(log N) and **QuickSort** O(N log N) using divide-and-conquer partitioning.',
          hinglishExplain: 'C mein Data Structures aur Algorithms ke core concepts:\n1. **Linked List Node**: `struct Node { int data; struct Node *next; }` — har node memory mein alag jagah banti hai aur `next` pointer se agle node se judti hai.\n2. **Dynamic Insertion**: `malloc(sizeof(Node))` se naya node banta hai aur list ke front ya end mein connect hota hai.\n3. **Stack (LIFO)**: Last-In, First-Out (jaise plates ka dher). `push()` add karta hai, `pop()` remove karta hai.\n4. **Queue (FIFO)**: First-In, First-Out (jaise ticket counter ki line).\n5. **QuickSort**: Divide and Conquer algorithm jo pivot choose karke array ko partition karta hai with O(N log N) average speed.',
          funnyExample: {
            scenario: 'The Human Treasure Hunt Chain (Linked List):\n- Student 1 (Head) = Holds Clue #1 + Points finger to Student 2 in hallway 🏃👉\n- Student 2 = Holds Clue #2 + Points finger to Student 3 in cafeteria 🏃👉\n- Student 3 (Tail) = Holds Final Clue + Points to `NULL` (End of list)! 🏆\n- You can insert a new student in the middle just by changing 2 finger pointers in 1 second!',
            punchline: 'Linked Lists connect scattered memory blocks dynamically using pointer links!'
          },
          visualDiagram: {
            title: 'Singly Linked List Memory Architecture',
            nodes: [
              'Head Pointer -> Node 1 [ Data: 10 | next: 0x2000 ]',
              '-> Node 2 (at 0x2000) [ Data: 20 | next: 0x3000 ]',
              '-> Node 3 (at 0x3000) [ Data: 30 | next: NULL ]'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Array vs Linked List Trade-offs:',
            steps: [
              'Random Access: Array is O(1) instant via index arithmetic; Linked List is O(N) linear traversal',
              'Insertion/Deletion at Beginning: Linked List is O(1) instant pointer swap; Array is O(N) shifting elements',
              'Memory Overhead: Array has zero pointer overhead; Linked List requires extra 8-byte pointer per node'
            ]
          },
          code: `#include <stdio.h>
#include <stdlib.h>

// 1. Definition of a Linked List Node
typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Function to insert node at beginning (O(1))
void insertAtHead(Node **headRef, int newValue) {
    Node *newNode = (Node *) malloc(sizeof(Node));
    if (newNode == NULL) return;

    newNode->data = newValue;
    newNode->next = *headRef;
    *headRef = newNode;
}

// Function to print the Linked List
void printList(const Node *head) {
    const Node *current = head;
    while (current != NULL) {
        printf("[%d] -> ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

// Function to free all allocated nodes (Prevent Memory Leaks)
void freeList(Node *head) {
    Node *current = head;
    while (current != NULL) {
        Node *temp = current;
        current = current->next;
        free(temp);
    }
}

int main(void) {
    Node *head = NULL; // Initially empty list

    printf("=== Dynamic Singly Linked List in C ===\\n");
    insertAtHead(&head, 30);
    insertAtHead(&head, 20);
    insertAtHead(&head, 10);

    printList(head); // Output: [10] -> [20] -> [30] -> NULL

    freeList(head);
    head = NULL;
    printf("Linked list memory cleared cleanly.\\n");

    return 0;
}`,
          codeBreakdown: [
            { part: 'typedef struct Node { int data; struct Node *next; } Node;', label: 'Self-referential structure defining linked list node with data payload and next link', color: '#3b82f6' },
            { part: 'void insertAtHead(Node **headRef, int newValue)', label: 'Pointer-to-pointer parameter allowing function to update caller head reference in O(1)', color: '#10b981' },
            { part: 'freeList(head);', label: 'Iterative node-by-node deallocation preventing severe memory leaks', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Linked list free karte waqt pointer advance karne se pehle node free kar dena (`free(current); current = current->next;` causes use-after-free crash)',
            '❌ Insert at head function mein single pointer pass karna instead of pointer-to-pointer (`Node**`)'
          ],
          proTips: [
            '💡 Always save `Node *next = current->next;` before calling `free(current);` in cleanup routines',
            '💡 When implementing BST or Linked Lists, draw the pointer links on paper first before writing C code'
          ],
          interviewQuestions: [
            'How do you reverse a Singly Linked List iteratively in O(N) time and O(1) space?',
            'How do you detect a cycle in a Linked List using Floyd\'s Cycle-Finding Algorithm (Tortoise and Hare)?',
            'What is the difference between QuickSort and MergeSort regarding memory allocation in C?'
          ],
          miniChallenge: 'Implement an iterative `reverseList(Node **headRef)` function that reverses a Singly Linked List in-place.',
          quiz: {
            type: 'mcq',
            question: 'Singly Linked List ke beginning (head) par naya element insert karne ki time complexity kya hoti hai?',
            options: ['O(1) Constant Time', 'O(N) Linear Time', 'O(log N)', 'O(N^2)'],
            answer: 'O(1) Constant Time',
            explanation: 'Inserting at the head of a linked list requires only allocating the new node and updating 2 pointers, taking constant O(1) time regardless of list size.'
          },
          summary: [
            'Linked Lists dynamically memory nodes ko pointer links se connect karti hain',
            'Head reference update karne ke liye pointer-to-pointer (Node**) use hota hai',
            'Har dynamically allocated node ko freeList() se deallocate karna mandatory hai'
          ],
          flashcard: {
            q: 'Floyd\'s Tortoise and Hare Algorithm kya karta hai?',
            a: 'Ye Linked List mein cycle detect karne ke liye 2 pointers use karta hai (Slow 1 step, Fast 2 steps). Agar dono pointers kisi point par meet karte hain, toh list mein cycle/loop present hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: SYSTEMS PROGRAMMING & FAANG INTERVIEW MASTERY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Systems Programming, GDB Debugging & FAANG Interview Mastery',
      lessons: [
        {
          id: 'c-projects-faang-interview-mastery',
          title: 'Systems Programming, GDB Debugging, Makefile & Top 35 FAANG C Interview Questions',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'Systems Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Pointers, Memory Management, Structs, File I/O, Makefiles, aur Data Structures — sab integrate karke C Systems Engineering master karenge! Aur FAANG systems interview crack karenge! 🏆💻😎"',
            hint: '💡 Masti Sir: "Segmentation Fault aaye toh GDB debugger chalao: `gdb ./main` -> `run` -> `backtrace` (`bt`) — 1 second mein line number mil jayega!"',
            success: '🥳 Masti Sir: "Outstanding achievement! You have mastered C Programming, Low-Level Memory Management, and Systems Engineering! You are now a Certified C Systems Programmer! 🌟"',
            mistake: '😅 Masti Sir: "Undefined Behavior (UB) se bacho — out-of-bounds array access aur uninitialized variables production bugs banate hain!"'
          },
          englishDef: 'The final capstone integrates low-level systems programming disciplines: **GDB Debugging** (`break`, `step`, `print`, `backtrace`), **Multi-File Builds with Makefiles**, **File Handling** (`fopen`, `fwrite`, `fread`), and defensive **C Security** (mitigating buffer overflows, format string bugs, and memory leaks). Covers comprehensive preparation for **Top 35 FAANG Low-Level & Embedded Systems Interview Questions**.',
          hinglishExplain: 'Is Final Capstone mein hum C Systems Programming ke advanced concepts aur debugging tools master karte hain. GDB debugger se Segmentation Faults ko trace karna, Makefiles se multi-file modular projects compile karna, aur FAANG systems & embedded engineering interview questions ki complete preparation shamil hai.',
          funnyExample: {
            scenario: 'The FAANG Systems Engineer Interview:\n- Interviewer: "Why did your program throw a Segmentation Fault?" 🕵️‍♂️\n- Candidate: "1. Loaded core dump in GDB: `gdb ./app core`\n2. Ran `backtrace` -> Identified line 42: Dereferenced pointer after `free()`\n3. Solution: Implemented ownership semantics and set pointer to `NULL` immediately after deallocation!" 🎯\n- Interviewer: "Brilliant! Hired as Lead Systems & Kernel Engineer!" 🚀',
            punchline: 'From beginner to certified low-level C Systems & Software Engineer!'
          },
          visualDiagram: {
            title: 'Complete Modular C Project Architecture with Makefile',
            nodes: [
              'Source Modules: main.c, student.c, student.h',
              'Makefile: gcc -Wall -Wextra -c student.c -> student.o',
              'Makefile: gcc -Wall -Wextra -c main.c -> main.o',
              'Linking: gcc student.o main.o -o codemasti_system',
              'GDB Debugging: gdb ./codemasti_system (Inspect Stack Frames & Pointers)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Essential GDB Debugging Commands Cheat Sheet:',
            steps: [
              '`gcc -g main.c -o main`: Compiles with debug symbols enabled for GDB',
              '`gdb ./main`: Launches interactive GNU Debugger session',
              '`break main.c:25`: Sets a breakpoint at line 25',
              '`run`: Starts program execution until breakpoint',
              '`print var` or `p *ptr`: Inspects variable or pointer memory content in real-time',
              '`backtrace` (`bt`): Displays call stack trace identifying exact crash location'
            ]
          },
          code: `# ── SAMPLE PRODUCTION MAKEFILE (Makefile) ──
CC = gcc
CFLAGS = -Wall -Wextra -pedantic -std=c11 -g
TARGET = codemasti_app
SRCS = main.c database.c utils.c
OBJS = $(SRCS:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $(TARGET) $(OBJS)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)

.PHONY: all clean`,
          codeBreakdown: [
            { part: 'CFLAGS = -Wall -Wextra -pedantic -std=c11 -g', label: 'Enables all strict compiler warnings, modern C11 standard, and GDB debug symbols', color: '#3b82f6' },
            { part: '$(TARGET): $(OBJS)', label: 'Declares target executable dependency on compiled modular object files', color: '#10b981' },
            { part: 'clean: rm -f ...', label: 'Clean build rule removing object files and binaries for reproducible builds', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Makefile mein space use karna instead of Tab characters for recipe indentation (causes `missing separator` error)',
            '❌ Compilation mein `-Wall -Wextra` warnings ko ignore karna'
          ],
          proTips: [
            '💡 Always use AddressSanitizer (`gcc -fsanitize=address -g main.c`) during development to catch memory errors instantly',
            '💡 In technical interviews, always write defensive code checking every pointer for `NULL` before dereferencing'
          ],
          interviewQuestions: [
            'How do you debug a Segmentation Fault using GDB and core dumps?',
            'What is the difference between Static Linking (`.a`) and Dynamic Linking (`.so` / `.dll`)?',
            'Explain how an OS manages virtual memory pages and translates them to physical RAM.'
          ],
          miniChallenge: 'Create a multi-file C program with a header file `math_utils.h` and a `Makefile` to compile it.',
          quiz: {
            type: 'mcq',
            question: 'GDB (GNU Debugger) mein crash hone par exact function call hierarchy aur line number dekhne ke liye kaunsi command use ki jaati hai?',
            options: ['backtrace (bt)', 'print (p)', 'step (s)', 'continue (c)'],
            answer: 'backtrace (bt)',
            explanation: 'The `backtrace` (or `bt`) command in GDB prints a stack trace of all active stack frames, identifying the exact line of code where a crash occurred.'
          },
          summary: [
            'GDB debugger runtime crashes aur memory segmentation faults ko pinpoint karta hai',
            'Makefiles multi-file modular C compilation ko automate karte hain',
            'CodeMasti C Systems Architecture low-level software engineering ke liye certified hai'
          ],
          flashcard: {
            q: 'AddressSanitizer (ASan) kya hota hai?',
            a: 'Ye GCC aur Clang ka compiler tool hai (`-fsanitize=address`) jo memory errors jaise out-of-bounds access, use-after-free aur memory leaks ko runtime par instantly detect karta hai.'
          }
        }
      ]
    }
  ]
};

export default cCourse;
