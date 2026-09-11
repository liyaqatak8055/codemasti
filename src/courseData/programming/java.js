export const javaCourse = {
  id: 'java',
  title: 'Java & Spring Boot',
  description: 'Enterprise Java Masterclass from scratch to production backend engineer! Core Java fundamentals, OOP, Collections Framework, Multithreading, Concurrency, JDBC, JPA & Hibernate, Spring Boot, REST APIs, Spring Security with JWT, Microservices, JUnit 5 & Mockito testing, Docker containerization, aur FAANG interview problems Masti Sir ke saath!',
  icon: '☕',
  category: 'programming',
  certificateName: 'JAVA & SPRING BOOT',
  topicsCount: 120,
  practiceCount: 140,
  projectsCount: 6,
  hoursEstimate: 45,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: JAVA BASICS & JVM ARCHITECTURE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Java Basics & JVM Architecture',
      lessons: [
        {
          id: 'java-intro-jvm',
          title: 'Java Fundamentals & The JVM (Write Once, Run Anywhere)',
          emoji: '☕',
          xpReward: 35,
          badgeName: 'Java Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Java enterprise software ki duniya ka raja hai! Write Once, Run Anywhere (WORA) ka magic seekho 😎"',
            hint: '🤦 Masti Sir: "File ka naam aur public class ka naam EXACTLY SAME hona chahiye (e.g. `public class Main` in `Main.java`)!"',
            success: '🥳 Masti Sir: "Zabardast! Java Bytecode (.class) successfully compile aur execute ho gaya 🔥"',
            mistake: '😅 Masti Sir: "`public static void main(String[] args)` signature mein ek bhi word miss mat karna 😂"'
          },
          englishDef: 'Java is a class-based, object-oriented, strongly-typed programming language created by James Gosling at Sun Microsystems (now Oracle). It follows the **Write Once, Run Anywhere (WORA)** philosophy: source code (`.java`) is compiled by `javac` into platform-independent **Bytecode** (`.class`), which is executed natively on any operating system by the **Java Virtual Machine (JVM)**.',
          hinglishExplain: 'Java ka sabse bada feature hai WORA (Write Once, Run Anywhere). Aap code Windows pe likho aur compile karo, wahi `.class` bytecode file bina kisi change ke Mac, Linux, ya Cloud Server pe chalegi kyunki JVM har OS ke liye alag hota hai par bytecode sabka universal hota hai.',
          funnyExample: {
            scenario: 'Universal Power Adapter:\n- C Language: Indian plug jo US ke socket mein fit nahi hota 🔌 (Har OS ke liye alag compile karo!)\n- Java: Universal Travel Adapter jo duniya ke har desh ke switch mein fit ho jata hai! (JVM = Universal Adapter! 🌍)',
            punchline: 'Java = Write Once, Run on 3 Billion Devices!'
          },
          visualDiagram: {
            title: 'Java WORA Compilation & Execution Lifecycle',
            nodes: [
              'Source Code (Main.java)',
              'javac compiler (JDK)',
              'Platform-Independent Bytecode (Main.class)',
              'Java Virtual Machine (JVM: Windows / Mac / Linux / Cloud)',
              'JIT Compiler -> Native Machine Instructions -> Hardware Execution'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'JDK vs JRE vs JVM Breakdown:',
            steps: [
              'JDK (Java Development Kit): Contains javac compiler, debugging tools, and the JRE for developers',
              'JRE (Java Runtime Environment): Contains standard class libraries (rt.jar) and the JVM to run Java programs',
              'JVM (Java Virtual Machine): Executes bytecode, manages Heap/Stack memory, runs Garbage Collector and JIT compiler',
              'JIT (Just-In-Time) Compiler: Compiles frequently executed "hot" bytecode directly into native machine code for maximum performance'
            ]
          },
          code: `// Main.java - Standard Java 21+ Entry Point
public class Main {
    public static void main(String[] args) {
        String studentName = "Kabir Sharma";
        int xpPoints = 1250;
        double accuracy = 94.5;
        boolean isEnrolled = true;

        System.out.println("=== CodeMasti Java Student ===");
        System.out.println("Name: " + studentName);
        System.out.println("XP Points: " + xpPoints);
        System.out.println("Accuracy: " + accuracy + "%");
        
        if (isEnrolled) {
            System.out.println("Status: Active Enterprise Developer 🚀");
        }
    }
}`,
          codeBreakdown: [
            { part: 'public class Main', label: 'Class name must match the source filename Main.java exactly', color: '#3b82f6' },
            { part: 'public static void main(String[] args)', label: 'Static entry method invoked by the JVM to start execution without instantiating the class', color: '#ef4444' },
            { part: 'System.out.println(...)', label: 'Standard output stream writing formatted line to console', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Java file ka naam class ke naam se match na karna (`Hello.java` containing `public class Main`)',
            '❌ Type mismatch (Java strictly typed hai — int variable mein string store nahi kar sakte)',
            '❌ Semicolon (;) lagana bhool jana at the end of statements'
          ],
          proTips: [
            '💡 Use `javac Main.java && java Main` to compile and run via terminal',
            '💡 Starting from Java 11+, single-file source code can be run directly with `java Main.java` without explicit manual compilation step'
          ],
          interviewQuestions: [
            'Why is Java platform independent while C++ is platform dependent?',
            'What is the difference between JDK, JRE, JVM, and JIT compiler?',
            'Can we execute a Java program without the `main` method?'
          ],
          miniChallenge: 'Ek Java program likho jo 2 numbers ka product aur average calculate karke console par print kare.',
          quiz: {
            type: 'mcq',
            question: 'Java source code (`.java`) compile hone ke baad kaunsi intermediate file create hoti hai?',
            options: ['.exe native binary', '.class Bytecode file', '.bin file', '.dll dynamic link library'],
            answer: '.class Bytecode file',
            explanation: 'javac compiler Java source code ko platform-independent `.class` bytecode file mein compile karta hai jise JVM execute karta hai.'
          },
          summary: [
            'Java strongly typed, object-oriented language hai',
            'JVM "Write Once, Run Anywhere" (WORA) architecture enable karta hai',
            'JDK development ke liye hota hai, JRE runtime ke liye, aur JVM execution ke liye'
          ],
          flashcard: {
            q: 'JDK, JRE, aur JVM mein kya antar hai?',
            a: 'JDK (Development Kit) = Compiler + Dev Tools + JRE; JRE (Runtime Environment) = Core Libraries + JVM; JVM (Virtual Machine) = Executes bytecode and manages memory.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: VARIABLES, DATA TYPES & TYPE CASTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Variables, Primitive Types & Type Casting',
      lessons: [
        {
          id: 'java-variables-datatypes-casting',
          title: 'Variables, 8 Primitive Data Types, Memory Layout & Type Casting',
          emoji: '🔢',
          xpReward: 40,
          badgeName: 'Data Types Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Java memory mein 2 duniya hoti hain: Stack (Fast & local) aur Heap (Objects & dynamic data)! 8 Primitives ko theek se samajh lo! 🔢🧠😎"',
            hint: '💡 Masti Sir: "Widening Casting (int -> double) automatic hoti hai; Narrowing Casting (double -> int) manual karni padti hai `(int) myDouble` kyunki data truncate ho sakta hai!"',
            success: '🎉 Masti Sir: "Primitive types, Stack vs Heap memory layout aur type casting clear ho gaye! 🔥"',
            mistake: '😅 Masti Sir: "Integer overflow se bacho — agar `int` maximum (2,147,483,647) cross karega toh negative value ban jayega! `long` use karo with `L` suffix!"'
          },
          englishDef: 'Java is statically typed with 8 **Primitive Data Types**: `byte` (1B), `short` (2B), `int` (4B), `long` (8B), `float` (4B), `double` (8B), `char` (2B Unicode), and `boolean` (1 bit). Primitive values are stored directly on the **Thread Stack**, while Objects reside in the **JVM Heap**. **Type Casting** includes safe **Widening (Implicit)** and potential data-loss **Narrowing (Explicit)**.',
          hinglishExplain: 'Java mein 8 primitive data types hote hain jo direct Stack memory mein store hote hain:\n1. **Integer types**: `byte`, `short`, `int` (default), `long` (bade numbers ke liye with `L` suffix).\n2. **Floating point**: `float` (with `f`), `double` (default high-precision decimal).\n3. **Character & Boolean**: `char` (single quote \\\'A\\\'), `boolean` (`true`/`false`).\n4. **Type Casting**: Chhote type ko bade type mein daalna Widening hai (automatic); bade type ko chhote type mein daalna Narrowing hai (explicit `(int) 9.99 -> 9`).',
          funnyExample: {
            scenario: 'The Water Bucket Analogy (Type Casting):\n- Widening (Safe): Pouring a small 1-liter bottle (`int`) into a large 10-liter bucket (`double`) -> No water spills! Automatic! 💧🪣\n- Narrowing (Risky): Pouring a 10-liter bucket (`double`) into a 1-liter bottle (`int`) -> Excess 9 liters spill over! `(int) 9.99` leaves only `9`! ⚠️',
            punchline: 'Widening is automatic; Narrowing requires explicit casting and loses precision!'
          },
          visualDiagram: {
            title: 'Primitive Types Size & Widening Conversion Path',
            nodes: [
              'byte (1 Byte / 8 bits: -128 to 127)',
              '-> short (2 Bytes) / char (2 Bytes Unicode)',
              '-> int (4 Bytes / 32 bits: ~ -2.14B to 2.14B)',
              '-> long (8 Bytes / 64 bits)',
              '-> float (4 Bytes) -> double (8 Bytes IEEE 754 Floating Point)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Stack vs Heap Memory in JVM:',
            steps: [
              'Stack Memory: Stores primitive local variables and method call execution frames (LIFO, fast, thread-isolated)',
              'Heap Memory: Stores all objects, arrays, and class instances shared across all threads',
              'Reference Variables: A 4/8-byte pointer on the Stack referencing an Object payload in the Heap'
            ]
          },
          code: `public class DataTypesDemo {
    public static void main(String[] args) {
        // 1. Primitive Declarations
        byte age = 24;
        int salary = 85000;
        long globalPopulation = 8000000000L; // Suffix 'L' required for long literals
        float taxRate = 0.18f;               // Suffix 'f' required for float literals
        double accountBalance = 1250450.75;
        char grade = 'A';
        boolean isEmployed = true;

        // 2. Widening Casting (Implicit: int -> double)
        int num = 100;
        double widened = num; // Automatically 100.0

        // 3. Narrowing Casting (Explicit: double -> int)
        double rawScore = 98.75;
        int roundedScore = (int) rawScore; // Truncates decimal part -> 98

        System.out.println("Salary: ₹" + salary);
        System.out.println("Widened Value: " + widened);
        System.out.println("Narrowed Truncated Score: " + roundedScore);
    }
}`,
          codeBreakdown: [
            { part: 'long globalPopulation = 8000000000L;', label: 'Literal exceeding 32-bit integer boundary requires uppercase L suffix', color: '#3b82f6' },
            { part: 'int roundedScore = (int) rawScore;', label: 'Explicit narrowing cast operator truncating fractional decimals', color: '#ef4444' },
            { part: 'char grade = \'A\';', label: '2-byte Unicode character enclosed strictly in single quotes', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ `long` literal mein `L` suffix na lagana (compiler treats raw integer literals as 32-bit `int`)',
            '❌ `float` literal mein `f` suffix na lagana (`float f = 3.14;` fails because 3.14 is a `double`)'
          ],
          proTips: [
            '💡 Use underscores in numeric literals for readability: `int million = 1_000_000;`',
            '💡 Never use `float` or `double` for financial monetary calculations due to binary floating-point rounding errors; use `BigDecimal` instead'
          ],
          interviewQuestions: [
            'What is the difference between Primitive types and Reference types in Java?',
            'Why does `0.1 + 0.2` not equal `0.3` exactly in `double`, and how do you solve it?',
            'Where are local variables and objects stored in JVM memory?'
          ],
          miniChallenge: 'Declare all 8 primitive types and demonstrate widening and narrowing conversions.',
          quiz: {
            type: 'mcq',
            question: 'Java mein `double d = 19.99; int i = (int) d;` execute karne par `i` ki value kya hogi?',
            options: ['20', '19', '19.99', 'Compilation Error'],
            answer: '19',
            explanation: 'Narrowing type casting from double to int simply truncates (discards) the fractional decimal portion without mathematical rounding.'
          },
          summary: [
            'Java mein 8 primitive types hote hain jo Stack memory mein store hote hain',
            'Widening implicit hoti hai, Narrowing explicit `(type)` hoti hai',
            'Financial calculation ke liye `double` ki jagah `BigDecimal` use karna chahiye'
          ],
          flashcard: {
            q: 'Java mein `char` kitne bytes ka hota hai aur kyun?',
            a: 'Java mein `char` 2 Bytes (16 bits) ka hota hai kyunki Java international Unicode character set support karta hai (C language mein ASCII 1 byte hota hai).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: OPERATORS, SCANNER & CONTROL FLOW
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Operators, Scanner I/O & Modern Control Flow',
      lessons: [
        {
          id: 'java-operators-control-flow-loops',
          title: 'Operators, Scanner Input, Modern Switch Expressions & Loops',
          emoji: '🔄',
          xpReward: 40,
          badgeName: 'Logic Builder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Terminal se user input lena ho toh `Scanner` class use karo! Aur modern Java 14+ ke `switch` expressions se arrow `->` syntax ka maza lo bina `break` statement ke! 🔄☕😎"',
            hint: '💡 Masti Sir: "Modern switch expressions mein `case "MON" -> "Weekday";` directly value return karta hai aur fallthrough bug kabhi nahi hota!"',
            success: '🎉 Masti Sir: "Scanner input parsing and modern switch expressions mastered! 🔥"',
            mistake: '😅 Masti Sir: "`scanner.nextInt()` ke baad `scanner.nextLine()` lagana mat bhoolna, nahi toh newline buffer skip ho jata hai!"'
          },
          englishDef: 'Java provides comprehensive operators, console input reading via `java.util.Scanner`, conditional branching (`if-else`, ternary `? :`), and **Modern Switch Expressions** (Java 14+) utilizing arrow `->` syntax and yield values. Iteration structures include standard `for`, while, `do-while`, and the **Enhanced for-each loop**.',
          hinglishExplain: 'Java control flow aur user input ke core concepts:\n1. **Scanner Input**: `Scanner sc = new Scanner(System.in)` se console se user input read kiya jata hai.\n2. **Modern Switch Expressions**: Java 14+ mein arrow syntax `case 1 -> "One";` use hota hai jisme `break` lagane ki zaroorat nahi padti.\n3. **Enhanced For-Each Loop**: `for (String item : list)` arrays aur collections ko traverse karne ka clean method hai.\n4. **Short-Circuit Evaluation**: `&&` aur `||` pehli condition se result milte hi doosri condition evaluate nahi karte.',
          funnyExample: {
            scenario: 'The Coffee Vending Machine (Switch Expression):\n- Old Switch: Insert coin -> Select Cappuccino -> Machine pours Cappuccino, then forgets `break` and pours Latte, Espresso and Hot Water all over the floor! ☕😱\n- Modern Switch (`->`): Select Cappuccino -> Instantly returns exactly one delicious Cappuccino cup cleanly! ✨',
            punchline: 'Modern switch expressions prevent accidental fallthrough bugs!'
          },
          visualDiagram: {
            title: 'Modern Java Switch Expression vs Traditional Switch',
            nodes: [
              'Input: DayOfWeek (e.g. MONDAY)',
              'Traditional Switch: requires explicit "break;" on every line or falls through!',
              'Modern Switch Expression (Java 14+): "case MONDAY, FRIDAY -> 8;" (Direct expression return with zero boilerplate)',
              'Yield Keyword: Used for multi-line block cases returning a calculated result'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Scanner Buffer Trap & Solution:',
            steps: [
              'When you call `sc.nextInt()`, it consumes only the integer digits, leaving the trailing newline `\\n` in the stdin buffer',
              'If you immediately call `sc.nextLine()`, it reads the leftover `\\n` and returns an empty string!',
              'Solution: Call an extra `sc.nextLine()` immediately after `nextInt()` to clear the buffer'
            ]
          },
          code: `import java.util.Scanner;

public class ControlFlowDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dayNumber = 3; // Simulated input (Wednesday)

        // Modern Java 14+ Switch Expression returning a value
        String dayType = switch (dayNumber) {
            case 1, 2, 3, 4, 5 -> "Weekday (Office / Coding time 💻)";
            case 6, 7          -> "Weekend (Chai & CodeMasti Revision ☕)";
            default            -> "Invalid Day Number!";
        };

        System.out.println("Day " + dayNumber + " is: " + dayType);

        // Enhanced For-Each Loop over Array
        String[] topics = {"JVM", "Variables", "Switch", "Loops"};
        System.out.println("\\nCompleted Java Modules:");
        for (String topic : topics) {
            System.out.println("✓ " + topic);
        }

        scanner.close();
    }
}`,
          codeBreakdown: [
            { part: 'String dayType = switch (dayNumber) { ... };', label: 'Modern Switch expression assigning evaluated result directly to a variable', color: '#3b82f6' },
            { part: 'case 1, 2, 3, 4, 5 -> ...', label: 'Multi-value matching with arrow syntax eliminating fallthrough bugs', color: '#10b981' },
            { part: 'for (String topic : topics)', label: 'Enhanced for-each loop cleanly iterating over elements without index counters', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `Scanner` use karne ke baad `scanner.close()` na karna (causes resource leaks)',
            '❌ Strings ko compare karne ke liye `==` use karna instead of `str.equals("value")`'
          ],
          proTips: [
            '💡 Modern switch expressions can return values and be passed directly as method arguments',
            '💡 Always use Enhanced For-Each loop unless you specifically need the element index'
          ],
          interviewQuestions: [
            'What is the difference between `break` and `continue` statements?',
            'How do modern Java Switch expressions differ from traditional switch statements?',
            'What is short-circuit evaluation in logical operators (`&&` vs `&`)?'
          ],
          miniChallenge: 'Write a program that uses a modern switch expression to return the number of days in a month.',
          quiz: {
            type: 'mcq',
            question: 'Modern Java switch expression (`case 1 -> "A";`) ka traditional switch statement ke mukable sabse bada benefit kya hai?',
            options: [
              'Isme `break` statement ki zaroorat nahi hoti aur direct variable mein value return kar sakte hain',
              'Ye internet speed badha deta hai',
              'Ye database delete kar deta hai',
              'Isme class ki zaroorat nahi hoti'
            ],
            answer: 'Isme `break` statement ki zaroorat nahi hoti aur direct variable mein value return kar sakte hain',
            explanation: 'Modern arrow switch expressions eliminate accidental fallthrough by omitting break statements and can evaluate directly to a return value.'
          },
          summary: [
            'Scanner console input parsing provide karta hai',
            'Modern switch expressions arrow syntax ke sath clean value assignment dete hain',
            'Enhanced for-each loop arrays aur collections ko readable banata hai'
          ],
          flashcard: {
            q: 'Logical AND (`&&`) aur Bitwise AND (`&`) mein kya difference hai boolean expressions mein?',
            a: '`&&` short-circuiting operator hai (agar pehla operand false hai toh doosra evaluate nahi hota); `&` hamesha dono operands evaluate karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: ARRAYS, STRINGS & STRING POOL
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Arrays, Strings & The String Constant Pool',
      lessons: [
        {
          id: 'java-arrays-strings-stringpool',
          title: 'Arrays, String Immutability, String Constant Pool (SCP) & StringBuilder',
          emoji: '🧵',
          xpReward: 45,
          badgeName: 'String Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Interview ka #1 favorite question: \'Why is String immutable in Java?\' Aur `==` vs `.equals()` ka difference! String Constant Pool (SCP) ka raaz jaan lo! 🧵🧠😎"',
            hint: '💡 Masti Sir: "String literal `"hello"` SCP mein rehta hai; `new String("hello")` Heap mein naya object banata hai! Comparison ke liye hamesha `.equals()` use karo!"',
            success: '🎉 Masti Sir: "String Constant Pool mechanics and StringBuilder performance mastered! 🔥"',
            mistake: '😅 Masti Sir: "Loop ke andar `+` se String concatenate mat karo (creates 10,000 garbage objects) — `StringBuilder` use karo!"'
          },
          englishDef: 'Strings in Java are **Immutable Objects** stored in the **String Constant Pool (SCP)** inside the Heap to optimize memory and guarantee security/thread-safety. The `==` operator compares memory object references, whereas `.equals()` compares actual character sequence values. For high-frequency string mutations, **StringBuilder** (fast, non-synchronized) and **StringBuffer** (thread-safe, synchronized) prevent heap object churning.',
          hinglishExplain: 'Java mein Strings aur Arrays ke core internal mechanics:\n1. **String Immutability**: Ek baar String ban gayi toh use modify nahi kiya ja sakta. Jab aap `str += "world"` karte ho, toh purani string change nahi hoti balki ek naya object banta hai.\n2. **String Constant Pool (SCP)**: Agar do variables `"Java"` literal use karte hain, toh dono Heap ke andar same SCP memory location ko point karte hain.\n3. **`==` vs `.equals()`**: `==` memory address check karta hai; `.equals()` content compare karta hai.\n4. **StringBuilder**: Jab loop mein 1000 strings jodti hon, toh `StringBuilder` use karo kyunki ye in-place modify karta hai bina naye objects banaye.',
          funnyExample: {
            scenario: 'The Laminated Certificate vs Whiteboard:\n- `String` = Laminated Printed Certificate 📄🔒: Cannot erase text! If you change a spelling, you must print a brand new fresh certificate!\n- `StringBuilder` = Whiteboard with Marker 🖊️📋: Write, erase, append, and modify in-place as many times as you want without wasting paper!',
            punchline: 'String is a sealed certificate; StringBuilder is a reusable whiteboard!'
          },
          visualDiagram: {
            title: 'JVM Heap Memory & String Constant Pool (SCP) Architecture',
            nodes: [
              'Stack: s1, s2, s3 (Reference pointers)',
              's1 = "CodeMasti" -> Points to SCP Memory Bucket #1',
              's2 = "CodeMasti" -> Reuses same SCP Memory Bucket #1 (s1 == s2 is TRUE)',
              's3 = new String("CodeMasti") -> Creates distinct object in general Heap (s1 == s3 is FALSE, but s1.equals(s3) is TRUE)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why String is Immutable in Java:',
            steps: [
              'Security: Prevents tampering with sensitive database connection URLs, file paths, and network ports passed as strings',
              'Thread Safety: Immutable objects are inherently thread-safe across concurrent threads with zero synchronization overhead',
              'Caching & HashCode: String caches its hash code (`hash`), allowing high-speed O(1) performance in HashMaps'
            ]
          },
          code: `public class StringPoolDemo {
    public static void main(String[] args) {
        // 1. String Literals (Stored in String Constant Pool)
        String s1 = "CodeMasti";
        String s2 = "CodeMasti";

        // 2. Explicit Heap Object via 'new' keyword
        String s3 = new String("CodeMasti");

        // Comparison Checks
        System.out.println("s1 == s2 (SCP reference check): " + (s1 == s2));           // true
        System.out.println("s1 == s3 (Heap reference check): " + (s1 == s3));          // false
        System.out.println("s1.equals(s3) (Content value check): " + s1.equals(s3));   // true

        // 3. High Performance StringBuilder for loops
        StringBuilder sb = new StringBuilder();
        sb.append("Java");
        sb.append(" Enterprise");
        sb.append(" Developer");
        String finalResult = sb.toString();

        System.out.println("\\nStringBuilder Result: " + finalResult);
    }
}`,
          codeBreakdown: [
            { part: 's1 == s2', label: 'Evaluates to true because both string literals share the exact same object in the String Constant Pool', color: '#10b981' },
            { part: 's1 == s3', label: 'Evaluates to false because the new keyword forces creation of a distinct object in general Heap memory', color: '#ef4444' },
            { part: 's1.equals(s3)', label: 'Evaluates to true because it inspects character-by-character value equality', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Strings ko `==` se compare karna instead of `.equals()` (leads to subtle production bugs with dynamic inputs)',
            '❌ Loop mein heavy string concatenation (`str = str + i`) instead of using `StringBuilder`'
          ],
          proTips: [
            '💡 Use `str.equalsIgnoreCase()` for case-insensitive string comparisons (e.g. comparing user roles or email inputs)',
            '💡 `String.join(", ", list)` cleanly joins collections into delimited strings'
          ],
          interviewQuestions: [
            'Why is String immutable in Java?',
            'What is the difference between `==` and `.equals()` in Java?',
            'What is the difference between `String`, `StringBuilder`, and `StringBuffer`?'
          ],
          miniChallenge: 'Demonstrate with code that modifying a string variable creates a new object in memory.',
          quiz: {
            type: 'mcq',
            question: 'Java mein `String a = "test"; String b = new String("test");` mein `a == b` kya return karega?',
            options: ['true', 'false', 'NullPointerException', 'Compilation Error'],
            answer: 'false',
            explanation: '`==` compares memory references. `a` points to the String Constant Pool whereas `new String()` allocates a new memory object in general Heap, so references differ.'
          },
          summary: [
            'Strings immutable hoti hain aur String Constant Pool (SCP) mein cache hoti hain',
            'Reference equality ke liye `==` aur value equality ke liye `.equals()` use karein',
            'Performance-critical string modifications ke liye `StringBuilder` use karein'
          ],
          flashcard: {
            q: '`StringBuilder` aur `StringBuffer` mein kya primary difference hai?',
            a: '`StringBuilder` non-synchronized hai (fast, ideal for single-threaded operations); `StringBuffer` synchronized hai (thread-safe for multithreaded environments but slower).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: OOP PILLARS, INHERITANCE & POLYMORPHISM
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: OOP Mastery: Encapsulation, Inheritance & Polymorphism',
      lessons: [
        {
          id: 'java-oop-pillars-inheritance-polymorphism',
          title: 'OOP 4 Pillars: Classes, Encapsulation, Inheritance & Dynamic Polymorphism',
          emoji: '🏛️',
          xpReward: 50,
          badgeName: 'OOP Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Class blueprint hai, Object actual ghar! Encapsulation data ko protect karta hai, Inheritance code reuse karta hai, aur Polymorphism 1 method ke 100 avatars banata hai! 🏛️😎"',
            hint: '💡 Masti Sir: "Encapsulation = Private fields + Public Getters/Setters! Inheritance = `extends` parent class! Dynamic Method Dispatch = Runtime pe decide hota hai kaunsa method chalega!"',
            success: '🎉 Masti Sir: "Object-Oriented Architecture, super() constructor chaining and dynamic dispatch mastered! 🔥"',
            mistake: '😅 Masti Sir: "Java multiple class inheritance support nahi karta (`class C extends A, B` is ILLEGAL) to prevent the Deadly Diamond of Death problem! Multiple interfaces use karo!"'
          },
          englishDef: 'Java is an **Object-Oriented Programming (OOP)** language built upon 4 pillars: **Encapsulation** (bundling state and restricting direct access via `private` fields and validation getters/setters), **Inheritance** (reusing superclass behaviors via `extends` and `super()`), **Polymorphism** (Compile-time Method Overloading vs Runtime Method Overriding with Dynamic Method Dispatch), and **Abstraction**.',
          hinglishExplain: 'OOP ke 4 foundational pillars:\n1. **Encapsulation**: Class ke variables ko `private` banate hain aur unhe modify karne ke liye public `getter/setter` dete hain with validation logic.\n2. **Inheritance**: Child class parent class ki properties aur methods `extends` keyword se inherit karti hai.\n3. **Polymorphism**: Ek hi method name alag-alag objects par alag behave karta hai (Dynamic Method Dispatch).\n4. **Diamond Problem Prevention**: Java multiple class inheritance allow nahi karta taaki ambiguity na ho, par multiple interfaces allow karta hai.',
          funnyExample: {
            scenario: 'The Bank Account Security (Encapsulation):\n- Without Encapsulation: Bank vault open on street with a box `public int balance` -> Anyone can change balance to ₹10 Crore! 😱\n- With Encapsulation: Vault locked `private int balance`. You must go through teller `public void deposit(amount)` who validates your identity and cash first! 🏦🔒✨',
            punchline: 'Encapsulation protects internal state from unauthorized tampering!'
          },
          visualDiagram: {
            title: 'Dynamic Method Dispatch (Runtime Polymorphism) Architecture',
            nodes: [
              'Base Reference: Account acc = new PremiumSavingsAccount();',
              'Compiler Check: Verifies "calculateInterest()" exists in Account class',
              'Runtime Execution: JVM inspects actual Heap object type (PremiumSavingsAccount)',
              'Dispatches and executes overridden PremiumSavingsAccount.calculateInterest() method!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Dynamic Method Dispatch Works via vtable:',
            steps: [
              'Each loaded class maintains a virtual method table (vtable) storing pointers to its method implementations',
              'When an overridden method is invoked on a superclass reference, JVM looks up the vtable of the actual runtime object instance',
              'Directs CPU execution to the child subclass implementation dynamically'
            ]
          },
          code: `// Base Parent Class
class BankAccount {
    private String accountNumber;
    private double balance; // Encapsulated private state

    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = Math.max(0, initialBalance);
    }

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited: ₹" + amount);
        }
    }

    public double getBalance() {
        return this.balance;
    }

    // Overridable polymorphic method
    public void calculateMonthlyInterest() {
        double interest = balance * 0.03 / 12;
        balance += interest;
        System.out.println("Standard Interest Added: ₹" + interest);
    }
}

// Child Derived Class
class PremiumSavingsAccount extends BankAccount {
    public PremiumSavingsAccount(String accNo, double balance) {
        super(accNo, balance); // Invoke parent constructor
    }

    @Override
    public void calculateMonthlyInterest() {
        double premiumInterest = getBalance() * 0.07 / 12; // 7% interest
        deposit(premiumInterest);
        System.out.println("Premium VIP Interest Added: ₹" + premiumInterest);
    }
}

public class OOPDemo {
    public static void main(String[] args) {
        // Polymorphic reference: Parent type pointing to Child instance
        BankAccount account = new PremiumSavingsAccount("ACC-9021", 500000);
        account.calculateMonthlyInterest(); // Dispatches Premium version at runtime!
    }
}`,
          codeBreakdown: [
            { part: 'private double balance;', label: 'Encapsulated field preventing external unauthorized direct modification', color: '#ef4444' },
            { part: 'super(accNo, balance);', label: 'Explicit constructor chaining delegating initialization to parent superclass', color: '#3b82f6' },
            { part: '@Override public void calculateMonthlyInterest()', label: 'Method overriding demonstrating runtime dynamic method dispatch', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Class fields ko public chhod dena (violates Encapsulation)',
            '❌ `@Override` annotation omit kar dena (causes typos in method names to silently become new methods instead of overrides)'
          ],
          proTips: [
            '💡 Favor Composition over Inheritance (HAS-A relationship is often more flexible than IS-A)',
            '💡 Always annotate overridden methods with `@Override` for compile-time safety verification'
          ],
          interviewQuestions: [
            'What is the difference between Method Overloading and Method Overriding?',
            'Why does Java not support multiple class inheritance?',
            'What is Dynamic Method Dispatch and how does it work?'
          ],
          miniChallenge: 'Create a polymorphic Vehicle hierarchy where `Car` and `ElectricBike` override `startEngine()`.',
          quiz: {
            type: 'mcq',
            question: 'Java mein "Method Overriding" kis type ka polymorphism represent karta hai?',
            options: ['Runtime Polymorphism', 'Compile-time Polymorphism', 'Static Polymorphism', 'Serialization Polymorphism'],
            answer: 'Runtime Polymorphism',
            explanation: 'Method Overriding is resolved dynamically at runtime by the JVM based on the actual object instance in the Heap (Dynamic Method Dispatch).'
          },
          summary: [
            'Encapsulation private variables aur public methods se data protect karta hai',
            'Inheritance `extends` aur `super()` se code reuse enable karta hai',
            'Runtime polymorphism method overriding ke through dynamic behavior deta hai'
          ],
          flashcard: {
            q: 'Java multiple class inheritance kyun allow nahi karta?',
            a: 'Ambiguity (Deadly Diamond of Death) se bachne ke liye jahan 2 parent classes mein same method name hone par compiler confuse ho jata hai ki kaunsa execute karein.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: ABSTRACTION, INTERFACES & PACKAGES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Abstraction, Interfaces & Access Modifiers',
      lessons: [
        {
          id: 'java-abstraction-interfaces-packages',
          title: 'Abstract Classes, Interfaces, Default Methods & Access Modifiers',
          emoji: '📋',
          xpReward: 45,
          badgeName: 'Contract Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Abstract class partial blueprint hai; Interface 100% architectural contract hai! Java 8+ mein interfaces mein `default` aur `static` methods bhi aa gaye hain! 📋😎"',
            hint: '💡 Masti Sir: "Access Modifiers: `public` (Everyone), `protected` (Package + Subclasses), `default` (Package only), `private` (Class only)!"',
            success: '🎉 Masti Sir: "Interfaces architectural contracts and access control mastered! 🔥"',
            mistake: '😅 Masti Sir: "Abstract class ka direct object `new AbstractClass()` kabhi nahi ban sakta — uski concrete child class banani padti hai!"'
          },
          englishDef: '**Abstraction** hides internal implementation details and exposes only essential contracts. An **Abstract Class** (`abstract class`) can contain both abstract methods and concrete implemented methods with state. An **Interface** (`interface`) defines pure contracts, supporting multiple implementation (`implements A, B`), `default` methods (Java 8+), `static` utility methods, and `@FunctionalInterface` declarations.',
          hinglishExplain: 'Abstraction aur Interfaces ke core concepts:\n1. **Abstract Class**: Ek aisi base class jiska direct object nahi ban sakta (`abstract class PaymentGateway`). Isme concrete aur abstract dono methods ho sakte hain.\n2. **Interface**: 100% pure architectural contract. Jo class interface ko `implements` karegi use saare methods define karne honge.\n3. **Multiple Interfaces**: Java ek class ko multiple interfaces implement karne ki full permission deta hai (`class User implements Serializable, Cloneable, AuthUser`).\n4. **Access Modifiers**: `public` (sab jagah), `protected` (same package + child classes), `default` (same package only), `private` (sirf usi class ke andar).',
          funnyExample: {
            scenario: 'The USB Port Standard (Interface):\n- USB Interface = Global Contract 🔌: "Any device that implements USB interface must have 4 standard pins and transfer data!"\n- Mouse, Keyboard, Flash Drive = Concrete Classes implementing USB contract\n- Computer Motherboard = Doesn\'t care who made the mouse, as long as it adheres to the USB interface contract! ✨',
            punchline: 'Interfaces decouple architectural contracts from implementation details!'
          },
          visualDiagram: {
            title: 'Java 4 Access Modifiers Visibility Scope Matrix',
            nodes: [
              'public: Accessible from Any Class across Any Package',
              'protected: Accessible within Same Package + Subclasses in other packages',
              'default (no keyword): Accessible ONLY within Same Package (Package-Private)',
              'private: Accessible strictly inside the Same Declaring Class'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Abstract Class vs Interface Comparison Matrix:',
            steps: [
              'Inheritance: Class can extend ONLY 1 Abstract Class, but can implement MULTIPLE Interfaces',
              'State/Fields: Abstract class can have instance fields (`private int balance`); Interface fields are strictly `public static final` constants',
              'Constructors: Abstract classes have constructors (`super()`); Interfaces CANNOT have constructors',
              'Use Case: Abstract class for code sharing among closely related classes; Interface for defining standardized API contracts'
            ]
          },
          code: `// 1. Interface Architectural Contract
interface PaymentProcessor {
    // Abstract method contract
    boolean processPayment(double amount);

    // Modern Java 8+ Default Method (with default implementation)
    default void printReceipt(String transactionId, double amount) {
        System.out.println("Receipt #" + transactionId + " | Paid: ₹" + amount);
    }
}

// 2. Concrete Implementation for UPI
class UPIPaymentProcessor implements PaymentProcessor {
    private String upiId;

    public UPIPaymentProcessor(String upiId) {
        this.upiId = upiId;
    }

    @Override
    public boolean processPayment(double amount) {
        System.out.println("Processing ₹" + amount + " via UPI ID: " + upiId);
        return true;
    }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        PaymentProcessor payment = new UPIPaymentProcessor("kabir@okhdfcbank");
        if (payment.processPayment(2499.0)) {
            payment.printReceipt("TXN-789012", 2499.0);
        }
    }
}`,
          codeBreakdown: [
            { part: 'interface PaymentProcessor', label: 'Defines pure behavioral contract decoupled from payment gateway vendor', color: '#3b82f6' },
            { part: 'default void printReceipt(...)', label: 'Java 8+ default method providing backward-compatible base implementation', color: '#10b981' },
            { part: 'class UPIPaymentProcessor implements PaymentProcessor', label: 'Concrete vendor class fulfilling the required interface contract', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Interface method ko implement karte waqt `public` access modifier chhod dena (interface methods are public by default)',
            '❌ Abstract class ka direct instance create karne ki koshish karna (`new AbstractClass()` fails)'
          ],
          proTips: [
            '💡 Always program to an interface, not an implementation (`List<String> list = new ArrayList<>()`)',
            '💡 Annotate single-method interfaces with `@FunctionalInterface` to support Lambda expressions'
          ],
          interviewQuestions: [
            'What is the difference between an Abstract Class and an Interface in modern Java?',
            'What are default methods in interfaces and why were they introduced in Java 8?',
            'Explain the 4 Java access modifiers and their visibility scopes.'
          ],
          miniChallenge: 'Create a `DatabaseConnector` interface with `connect()` and `disconnect()` implemented by `PostgresConnector`.',
          quiz: {
            type: 'mcq',
            question: 'Java 8 mein interfaces ke andar "default methods" introduce karne ka main reason kya tha?',
            options: [
              'Bina existing implementing classes ko tode naye methods add karke backward compatibility maintain karna',
              'Memory usage 50% kam karna',
              'HTML render karna',
              'Classes ko delete karna'
            ],
            answer: 'Bina existing implementing classes ko tode naye methods add karke backward compatibility maintain karna',
            explanation: 'Default methods allow interface authors to add new methods to existing interfaces without breaking all existing third-party implementing classes (essential for introducing Streams API to Collections).'
          },
          summary: [
            'Abstract classes partial implementation aur state share karti hain',
            'Interfaces pure decoupled architectural contracts enforce karte hain',
            'Default methods interfaces ko backward-compatible evolution allow karte hain'
          ],
          flashcard: {
            q: '`public`, `protected`, `default` aur `private` mein se sabse restrictive access modifier kaunsa hai?',
            a: '`private` sabse restrictive hai kyunki ye members ko sirf usi specific class ke code block tak limit kar deta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: EXCEPTION HANDLING & CUSTOM EXCEPTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Exception Handling & Robust Error Management',
      lessons: [
        {
          id: 'java-exception-handling-custom-errors',
          title: 'Checked vs Unchecked Exceptions, Try-With-Resources & Custom Exceptions',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Error Handler Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "NullPointerException dekh kar ghabrana mat! Java exception hierarchy ko samajh lo: Checked Exceptions (Compile time pe catch karo) aur Unchecked RuntimeExceptions! 🛡️☕😎"',
            hint: '💡 Masti Sir: "File aur Database connections ke liye `try-with-resources` (`try (Connection c = ...)`) use karo — automatic close ho jata hai bina `finally` block ke!"',
            success: '🎉 Masti Sir: "Robust exception handling architecture and custom business exceptions mastered! 🔥"',
            mistake: '😅 Masti Sir: "Empty `catch (Exception e) {}` block kabhi mat likhna — errors ko swallow karne se production debugging impossible ho jati hai!"'
          },
          englishDef: 'Java organizes error handling under `java.lang.Throwable` with two branches: **Errors** (unrecoverable JVM faults like `OutOfMemoryError`) and **Exceptions**. Exceptions divide into **Checked Exceptions** (inheriting directly from `Exception`, verified at compile-time e.g. `IOException`, `SQLException`) and **Unchecked Exceptions** (inheriting from `RuntimeException` e.g. `NullPointerException`, `IllegalArgumentException`). **Try-with-resources** (`AutoCloseable`) guarantees deterministic resource cleanup.',
          hinglishExplain: 'Java exception handling ke core concepts:\n1. **Checked Exceptions**: Compiler pehle hi check karta hai ki aapne handle kiya ya nahi (`IOException`, `SQLException`). Agar handle nahi kiya toh code compile nahi hoga.\n2. **Unchecked Exceptions**: Runtime par aate hain (`NullPointerException`, `ArithmeticException`). Ye mostly programming logic bugs hote hain.\n3. **Try-With-Resources**: `try (BufferedReader br = new BufferedReader(...))` automatically file ya DB connection ko close kar deta hai chahe exception aaye ya na aaye.\n4. **Custom Exceptions**: Enterprise applications mein business errors ke liye custom exceptions bante hain (`class UserNotFoundException extends RuntimeException`).',
          funnyExample: {
            scenario: 'The Flight Safety Briefing (Exception Handling):\n- Checked Exception = Seatbelt sign & Oxygen mask 💺😷: Flight take-off se pehle mandatory check! (Compile time check!)\n- Unchecked Exception = Stepping on a banana peel inside airplane 🍌💥: Unpredictable runtime accident!\n- Try-With-Resources = Automatic Emergency Doors that safely release passengers automatically! 🚪✨',
            punchline: 'Checked exceptions mandate compile-time safety; Unchecked exceptions handle runtime surprises!'
          },
          visualDiagram: {
            title: 'Java Throwable Class Hierarchy',
            nodes: [
              'Throwable (Root Class)',
              '├── Error (OutOfMemoryError, StackOverflowError - Fatal JVM issues)',
              '└── Exception (Recoverable application errors)',
              '    ├── Checked Exceptions (IOException, SQLException - Compile-time enforced)',
              '    └── RuntimeException / Unchecked (NullPointerException, IllegalArgumentException)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Try-With-Resources Internal Mechanics:',
            steps: [
              'Any class implementing the `java.lang.AutoCloseable` or `java.io.Closeable` interface can be passed into try(...) header',
              'When the try block finishes (normally or exceptionally), JVM invokes `close()` automatically in reverse order of declaration',
              'Suppressed exceptions: If `close()` also throws an exception, it is cleanly attached to the primary exception via `getSuppressed()`'
            ]
          },
          code: `// 1. Custom Enterprise Business Exception
class InsufficientFundsException extends Exception { // Checked Exception
    private double currentBalance;
    private double requestedAmount;

    public InsufficientFundsException(String message, double balance, double requested) {
        super(message);
        this.currentBalance = balance;
        this.requestedAmount = requested;
    }

    public double getDeficit() {
        return requestedAmount - currentBalance;
    }
}

public class ExceptionDemo {
    public static void withdraw(double balance, double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Account deficit! Cannot complete withdrawal.", balance, amount);
        }
        System.out.println("Withdrawal successful! Remaining: ₹" + (balance - amount));
    }

    public static void main(String[] args) {
        try {
            withdraw(5000, 12000);
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction Failed: " + e.getMessage());
            System.err.println("Shortage amount: ₹" + e.getDeficit());
        } finally {
            System.out.println("ATM Session Terminated Cleanly.");
        }
    }
}`,
          codeBreakdown: [
            { part: 'class InsufficientFundsException extends Exception', label: 'Declares custom checked exception mandating compile-time handling', color: '#3b82f6' },
            { part: 'public static void withdraw(...) throws InsufficientFundsException', label: 'Declares exception propagation contract in method signature', color: '#ef4444' },
            { part: 'finally { System.out.println("ATM Session..."); }', label: 'Guaranteed execution block running unconditionally for cleanup', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Catch block mein exception ko log kiye bina chhod dena (Silent failure)',
            '❌ Runtime exceptions ko handle karne ke liye unnecessary checked exceptions banana'
          ],
          proTips: [
            '💡 In modern Spring Boot applications, inherit custom domain exceptions from `RuntimeException` for clean unchecked propagation to global `@RestControllerAdvice`',
            '💡 Always use Try-With-Resources instead of manual `finally { file.close(); }`'
          ],
          interviewQuestions: [
            'What is the difference between Checked and Unchecked Exceptions in Java?',
            'How does Try-With-Resources work and what interface must the resource implement?',
            'What is the difference between `final`, `finally`, and `finalize()`?'
          ],
          miniChallenge: 'Create a custom `InvalidCredentialsException` and demonstrate throwing and catching it.',
          quiz: {
            type: 'mcq',
            question: 'Try-with-resources statement mein use hone ke liye Java class ko kaunsa interface implement karna zaroori hota hai?',
            options: ['AutoCloseable', 'Serializable', 'Cloneable', 'Runnable'],
            answer: 'AutoCloseable',
            explanation: 'Any resource managed by try-with-resources must implement `java.lang.AutoCloseable` (or its sub-interface `java.io.Closeable`).'
          },
          summary: [
            'Checked exceptions compile-time par handle karni padti hain',
            'Unchecked RuntimeExceptions programming bugs hote hain',
            'Try-with-resources automatic deterministic resource closure ensure karta hai'
          ],
          flashcard: {
            q: '`throw` aur `throws` keywords mein kya farak hota hai?',
            a: '`throw` actually exception object create karke throw karta hai (`throw new MyException()`); `throws` method signature mein declare karta hai ki ye method kaunse exceptions throw kar sakta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: COLLECTIONS FRAMEWORK & GENERICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Java Collections Framework & Generics',
      lessons: [
        {
          id: 'java-oop-collections',
          title: 'Inheritance, Interfaces & Collections (ArrayList, HashMap, Generics)',
          emoji: '📦',
          xpReward: 50,
          badgeName: 'Collection Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Fixed-size arrays ka zamana gaya! Java Collections Framework (ArrayList, HashSet, HashMap) se dynamic data structures master karo! Aur HashMap ki O(1) hashing internal working jaan lo! 📦☕😎"',
            hint: '💡 Masti Sir: "HashMap: `hashCode()` se bucket index milta hai, `equals()` se exact key match hoti hai! Generics `<T>` compile-time type safety guarantee karta hai!"',
            success: '🎉 Masti Sir: "Java Collections hierarchy, HashMap bucket collisions and Generics mastered! 🔥"',
            mistake: '😅 Masti Sir: "Custom class ko HashMap key banate waqt `equals()` aur `hashCode()` dono override karna mandatory hai, nahi toh `map.get()` hamesha null dega!"'
          },
          englishDef: 'The **Java Collections Framework (JCF)** provides standardized data structures under `java.util`: **List** (`ArrayList` fast random access O(1), `LinkedList` node insertions), **Set** (`HashSet` unique O(1), `TreeSet` sorted Red-Black tree), **Queue/Deque** (`PriorityQueue`, `ArrayDeque`), and **Map** (`HashMap` hash table O(1), `TreeMap` sorted keys). **Generics** (`<T>`) enforce compile-time type safety, eliminating runtime `ClassCastException`.',
          hinglishExplain: 'Java Collections Framework aur Generics ke core concepts:\n1. **ArrayList vs LinkedList**: `ArrayList` dynamic array use karta hai (index se instant O(1) lookup); `LinkedList` pointer nodes use karta hai (insert/delete at ends fast).\n2. **HashSet**: Duplicate values allow nahi karta; hashing se O(1) lookup deta hai.\n3. **HashMap**: Key-Value pairs store karta hai. `hashCode()` bucket calculate karta hai aur `equals()` exact key match karta hai.\n4. **Generics (<T>)**: Type safety enforce karta hai (`ArrayList<String>` mein integer daalne par compiler error de dega).\n5. **TreeSet & TreeMap**: Elements ko natural sorted order ya custom `Comparator` se sort rakhte hain.',
          funnyExample: {
            scenario: 'The High-Speed Library Storage (HashMap Internals):\n- Book Title = Key ("Clean Code") 📖\n- Hash Function `hashCode()` = Calculates Shelf #42 instantly 🗄️\n- Shelf #42 (Bucket) = Has 2 books (Clean Code, Code Complete)\n- `equals()` = Compares exact title on shelf #42 -> Book found in 1 millisecond!\n- Without Hashing: Librarian checks 100,000 books one by one for 5 hours! 😱',
            punchline: 'HashMap gives instant O(1) search by combining hashCode() and equals()!'
          },
          visualDiagram: {
            title: 'Java Collections Framework Class Hierarchy',
            nodes: [
              'Iterable -> Collection Interface',
              '├── List (Ordered, duplicates allowed): ArrayList, LinkedList',
              '├── Set (Unique elements): HashSet (O(1)), TreeSet (Sorted Red-Black Tree)',
              '└── Queue / Deque: PriorityQueue, ArrayDeque (Fast LIFO/FIFO)',
              'Map Interface (Key-Value pairs): HashMap (O(1)), TreeMap (Sorted Keys), ConcurrentHashMap'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'HashMap Bucket Collision & Treeification (Java 8+):',
            steps: [
              'Keys are hashed into an internal array bucket index: `index = (n - 1) & hash`',
              'If multiple keys land in the same bucket (Collision), elements are stored in a LinkedList',
              'Treeification: If bucket length exceeds threshold of 8 elements, LinkedList converts into a balanced Red-Black Tree (TreeMap node), improving worst-case lookup from O(N) to O(log N)'
            ]
          },
          code: `import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        // 1. Type-safe Generics ArrayList
        List<String> techStack = new ArrayList<>();
        techStack.add("Java 21");
        techStack.add("Spring Boot 3");
        techStack.add("PostgreSQL");

        // 2. HashSet (Unique Elements Only)
        Set<String> uniqueTags = new HashSet<>(techStack);
        uniqueTags.add("Java 21"); // Ignored automatically (Duplicate)

        // 3. HashMap with O(1) Key-Value mapping
        Map<String, Integer> courseDurations = new HashMap<>();
        courseDurations.put("Java Masterclass", 45);
        courseDurations.put("DevOps & Docker", 35);
        courseDurations.put("PostgreSQL DB", 30);

        System.out.println("Tech Stack Count: " + techStack.size());
        System.out.println("Unique Tags Count: " + uniqueTags.size()); // 3
        System.out.println("Java Course Duration: " + courseDurations.get("Java Masterclass") + " hrs");

        // Iterating over Map entries
        System.out.println("\\nAll Course Durations:");
        for (Map.Entry<String, Integer> entry : courseDurations.entrySet()) {
            System.out.println("- " + entry.getKey() + ": " + entry.getValue() + " hrs");
        }
    }
}`,
          codeBreakdown: [
            { part: 'List<String> techStack = new ArrayList<>();', label: 'Programs to the List interface contract using generic type parameters', color: '#3b82f6' },
            { part: 'uniqueTags.add("Java 21");', label: 'Duplicate string insertion safely ignored by HashSet hashing uniqueness check', color: '#10b981' },
            { part: 'for (Map.Entry<String, Integer> entry : ...)', label: 'Most efficient iteration technique traversing both key and value simultaneously', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Primitives ko Collections generic parameter mein pass karna (`List<int>` is illegal — use Wrapper `List<Integer>`)',
            '❌ Custom objects ko HashMap key banate time `hashCode()` aur `equals()` override na karna'
          ],
          proTips: [
            '💡 Always initialize Collections programming to the Interface (`List<T> list = new ArrayList<>()`)',
            '💡 Use `Collections.unmodifiableList(list)` or `List.of(...)` (Java 9+) to return immutable read-only lists from services'
          ],
          interviewQuestions: [
            'How does `HashMap` work internally in Java 8+ (hashing, buckets, treeification)?',
            'Why must both `equals()` and `hashCode()` contracts be overridden together?',
            'What is the difference between `ArrayList` and `LinkedList` in terms of memory and time complexity?'
          ],
          miniChallenge: 'Create a `HashMap<String, Integer>` representing a word frequency counter for a text sentence.',
          quiz: {
            type: 'mcq',
            question: 'Java 8+ mein jab HashMap ke ek bucket mein 8 se zyada elements collide hote hain, toh bucket LinkedList se kis data structure mein convert ho jata hai?',
            options: ['Red-Black Self-Balancing Tree', 'ArrayList', 'Stack', 'Queue'],
            answer: 'Red-Black Self-Balancing Tree',
            explanation: 'Java 8 treeifies heavy collision buckets from LinkedList to Red-Black Balanced Trees (TreeNode), improving worst-case search performance from O(N) to O(log N).'
          },
          summary: [
            'Collections Framework dynamic arrays, sets, maps aur queues provide karta hai',
            'Generics compile-time type safety guarantee karte hain',
            'HashMap O(1) performance deta hai hashCode aur equals ke combination se'
          ],
          flashcard: {
            q: '`Comparable` aur `Comparator` interfaces mein kya farak hota hai?',
            a: '`Comparable` class ke andar natural sorting order define karta hai (`compareTo()`); `Comparator` multiple custom sorting strategies define karta hai (`compare(o1, o2)`).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: FUNCTIONAL PROGRAMMING & STREAMS API
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: Functional Programming: Lambdas & Streams API',
      lessons: [
        {
          id: 'java-lambdas-streams-optional',
          title: 'Lambda Expressions, Functional Interfaces, Streams API & Optional',
          emoji: '🌊',
          xpReward: 50,
          badgeName: 'Stream Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Java 8 ke baad coding ka andaaz badal gaya! Lambdas, Streams API (`filter`, `map`, `reduce`) aur `Optional<T>` se 20 line ka boilerplate code 2 line mein convert ho jata hai! 🌊☕😎"',
            hint: '💡 Masti Sir: "Streams lazy evaluate hote hain: jab tak Terminal Operation (jaise `.collect()`, `.count()`, `.forEach()`) call nahi hota, tab tak processing start nahi hoti!"',
            success: '🎉 Masti Sir: "Declarative Streams pipelines and NullPointerException-free Optional code mastered! 🔥"',
            mistake: '😅 Masti Sir: "`Optional` ko class fields ya method parameters mein use mat karo — ise strictly method return type ke liye use karo jahan value absent ho sakti hai!"'
          },
          englishDef: 'Java 8 introduced **Functional Programming** paradigms. **Lambda Expressions** (`(a, b) -> a + b`) provide concise implementations for **Functional Interfaces** (`Predicate<T>`, `Function<T,R>`, `Consumer<T>`, `Supplier<T>`). The **Streams API** processes collections declaratively via lazy intermediate operations (`filter`, `map`, `sorted`, `distinct`) and terminal operations (`collect`, `reduce`). **Optional<T>** provides a type-level container preventing `NullPointerException`.',
          hinglishExplain: 'Modern Java Functional Programming ke core pillars:\n1. **Lambda Expressions**: Anonymous functions likhne ka concise shortcut `(param) -> { body }`.\n2. **Core Functional Interfaces**: `Predicate<T>` (boolean test), `Function<T, R>` (transform), `Consumer<T>` (consume/print), `Supplier<T>` (generate).\n3. **Streams API**: Data ko conveyor belt pipeline ki tarah process karna: `list.stream().filter(...).map(...).collect(Collectors.toList())`.\n4. **Optional<T>**: Null return karne ki jagah `Optional.ofNullable(user)` return karo, jisse client code `optional.orElseThrow(...)` se safely handle kare.',
          funnyExample: {
            scenario: 'The Juice Factory Conveyor Belt (Streams API):\n- Raw Fruit Basket = Collection (100 Oranges 🍊)\n- `.filter(fruit -> fruit.isRipe)` = Rejects raw fruits\n- `.map(orange -> peelAndExtractJuice(orange))` = Extracts pure juice 🧃\n- `.collect(Collectors.toList())` = Fills and seals 50 juice bottles ready for market! 📦✨',
            punchline: 'Streams pipeline processes data declaratively like a factory conveyor belt!'
          },
          visualDiagram: {
            title: 'Java Streams API Pipeline Architecture',
            nodes: [
              'Source Data (List<User>)',
              '-> Intermediate: .filter(user -> user.isActive()) [Lazy]',
              '-> Intermediate: .map(User::getEmail) [Lazy]',
              '-> Intermediate: .sorted() [Lazy]',
              '-> TERMINAL OPERATION: .collect(Collectors.toList()) -> Triggers full execution pipeline!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Streams Laziness & Short-Circuiting Mechanics:',
            steps: [
              'Intermediate operations (filter, map) construct a pipeline descriptor but perform ZERO computations upfront',
              'Execution begins only when a terminal operation (collect, findFirst, reduce) is invoked',
              'Fuses loops: Elements pass through the entire filter-map chain individually, enabling short-circuiting (`findFirst()` stops after finding 1 match without processing remaining 1,000,000 items)'
            ]
          },
          code: `import java.util.*;
import java.util.stream.Collectors;

class Developer {
    private String name;
    private String primarySkill;
    private int yearsExperience;

    public Developer(String name, String skill, int exp) {
        this.name = name;
        this.primarySkill = skill;
        this.yearsExperience = exp;
    }

    public String getName() { return name; }
    public String getPrimarySkill() { return primarySkill; }
    public int getYearsExperience() { return yearsExperience; }
}

public class StreamsDemo {
    public static void main(String[] args) {
        List<Developer> devs = List.of(
            new Developer("Kabir", "Java", 5),
            new Developer("Aman", "Python", 3),
            new Developer("Riya", "Java", 7),
            new Developer("Neha", "Go", 4),
            new Developer("Vikram", "Java", 2)
        );

        // Streams Pipeline: Filter Senior Java Devs -> Extract Names -> Sort Alphabetically -> Collect to List
        List<String> seniorJavaDevs = devs.stream()
            .filter(d -> d.getPrimarySkill().equalsIgnoreCase("Java"))
            .filter(d -> d.getYearsExperience() >= 4)
            .map(Developer::getName) // Method Reference
            .sorted()
            .collect(Collectors.toList());

        System.out.println("Senior Java Developers: " + seniorJavaDevs);

        // Optional Usage
        Optional<Developer> leadDev = devs.stream()
            .filter(d -> d.getYearsExperience() > 6)
            .findFirst();

        leadDev.ifPresent(d -> System.out.println("Team Lead: " + d.getName() + " (" + d.getYearsExperience() + " yrs)"));
    }
}`,
          codeBreakdown: [
            { part: 'devs.stream().filter(...).map(...)', label: 'Fluent declarative pipeline transforming collection data lazily', color: '#3b82f6' },
            { part: 'Developer::getName', label: 'Method reference shorthand syntax for lambda expression `d -> d.getName()`', color: '#10b981' },
            { part: '.collect(Collectors.toList())', label: 'Terminal operation executing the stream and accumulating results into a List', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Stream ko reuse karne ki koshish karna (a Stream cannot be reused once a terminal operation has executed; throws `IllegalStateException`)',
            '❌ `Optional.get()` blindly call karna bina `isPresent()` ya `orElseThrow()` check kiye'
          ],
          proTips: [
            '💡 Use `Parallel Streams` (`list.parallelStream()`) strictly for CPU-intensive calculations across large datasets, avoiding them for I/O operations',
            '💡 Prefer `Optional.orElseGet(() -> computeDefault())` over `orElse(computeDefault())` to avoid eager default evaluation'
          ],
          interviewQuestions: [
            'What is the difference between Intermediate and Terminal operations in Java Streams?',
            'What is the difference between `map()` and `flatMap()` in Streams?',
            'Why was `Optional` introduced in Java 8 and what are its best practices?'
          ],
          miniChallenge: 'Use Streams to calculate the average salary of employees in an engineering department.',
          quiz: {
            type: 'mcq',
            question: 'Java Streams API mein ek Stream par kitne Terminal Operations execute kiye ja sakte hain?',
            options: ['Sirf 1 baar (Stream cannot be reused)', 'Unlimited baar', 'Max 2 baar', 'Sirf loop ke andar'],
            answer: 'Sirf 1 baar (Stream cannot be reused)',
            explanation: 'A stream is consumed when its terminal operation executes. Attempting to invoke another operation on the same stream instance throws an `IllegalStateException`.'
          },
          summary: [
            'Lambdas concise functional interface implementations provide karte hain',
            'Streams API lazy declarative data transformation pipelines deta hai',
            'Optional safe null-free API return contracts enforce karta hai'
          ],
          flashcard: {
            q: 'Streams API mein `map()` aur `flatMap()` mein kya farak hota hai?',
            a: '`map()` har element ko transform karke 1-to-1 output deta hai; `flatMap()` nested collections (jaise `List<List<String>>`) ko flatten karke single flat stream of elements banata hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: MULTITHREADING, CONCURRENCY & JVM MEMORY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Multithreading, Concurrency & JVM Memory Model',
      lessons: [
        {
          id: 'java-multithreading-concurrency-jmm',
          title: 'Threads, ExecutorService, Synchronization, Locks & Java Memory Model (JMM)',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Concurrency Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Multi-core CPUs ka poora power unlock karna hai toh Multithreading seekho! `ExecutorService` thread pools, `synchronized` blocks, aur Race conditions se bachne ke tarike! ⚡🧵😎"',
            hint: '💡 Masti Sir: "Manually `new Thread()` mat banao enterprise apps mein — use `Executors.newFixedThreadPool(10)` thread pool to reuse threads efficiently!"',
            success: '🎉 Masti Sir: "Thread safety, atomic operations and Java Memory Model (JMM) mastered! 🔥"',
            mistake: '😅 Masti Sir: "Shared mutable variables ko bina `synchronized` ya `AtomicInteger` ke modify karoge toh Race Conditions aur data corruption ho jayega!"'
          },
          englishDef: '**Multithreading** enables concurrent task execution across multiple CPU cores. Java provides the **Thread** class, **Runnable**, and **Callable<V>** (returning futures). Enterprise concurrency utilizes **ExecutorService** Thread Pools, synchronization primitives (`synchronized`, `ReentrantLock`), thread-safe collections (`ConcurrentHashMap`), and lock-free atomic primitives (`AtomicInteger`). The **Java Memory Model (JMM)** governs visibility and ordering via `volatile` and happens-before guarantees.',
          hinglishExplain: 'Multithreading aur Concurrency ke core concepts:\n1. **Thread vs Runnable**: `Runnable` task definition hai, `Thread` execution worker hai.\n2. **ExecutorService Thread Pool**: Har request par naya thread banana slow hota hai. Thread pool (e.g. 10 workers) pehle se ready rehta hai aur tasks ko queue se uthata hai.\n3. **Race Condition & Synchronization**: Jab 2 threads ek sath `balance += 100` karte hain, toh data corrupt ho sakta hai. `synchronized` block ya `ReentrantLock` ek time par sirf 1 thread ko access deta hai.\n4. **Volatile Keyword**: Ensure karta hai ki variable ki latest value direct RAM se read ho, thread ke local CPU cache se nahi.\n5. **JVM Garbage Collection**: Heap memory mein unreferenced unreachable objects ko background GC threads automatically reclaim karte hain.',
          funnyExample: {
            scenario: 'The Bank ATM Single Cabin (Synchronization):\n- Without Lock: Two people insert cards into the exact same ATM machine at the same second -> Machine dispenses ₹10,000 twice but deducts once! (Race Condition! 💸💥)\n- With `synchronized` Lock: First person locks the cabin door 🚪🔒. Second person waits outside in queue. Door opens only when first transaction finishes cleanly! ✨',
            punchline: 'Synchronization prevents two threads from corrupting shared mutable state!'
          },
          visualDiagram: {
            title: 'ExecutorService Thread Pool Task Queue Architecture',
            nodes: [
              'Incoming 1,000 Tasks (Callables / Runnables)',
              'Blocking Task Queue (Tasks wait in FIFO order)',
              'Fixed Thread Pool (Worker Thread 1, Worker Thread 2, Worker Thread 3, Worker Thread 4)',
              'Task Completion -> Returns Future<V> Result -> Worker Thread re-enters pool!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Java Memory Model (JMM) & Thread Caches:',
            steps: [
              'Each CPU Core maintains high-speed L1/L2 hardware caches storing local copies of variables',
              'Without memory barriers, updates made by Thread A on Core 1 might not be immediately visible to Thread B on Core 2',
              'The `volatile` keyword and `synchronized` blocks establish "Happens-Before" relationships, forcing CPU cache flushes to main memory'
            ]
          },
          code: `import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class ConcurrencyDemo {
    // Thread-safe atomic counter (Lock-free CPU atomic instructions)
    private static final AtomicInteger totalOrdersProcessed = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException, ExecutionException {
        // Create Fixed Thread Pool with 3 Worker Threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Submit 5 concurrent order processing tasks
        for (int i = 1; i <= 5; i++) {
            final int orderId = i;
            executor.submit(() -> {
                String threadName = Thread.currentThread().getName();
                System.out.println("Processing Order #" + orderId + " on " + threadName);
                try {
                    Thread.sleep(50); // Simulate network I/O
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                totalOrdersProcessed.incrementAndGet();
            });
        }

        // Graceful shutdown of thread pool
        executor.shutdown();
        executor.awaitTermination(2, TimeUnit.SECONDS);

        System.out.println("\\nTotal Orders Successfully Processed: " + totalOrdersProcessed.get());
    }
}`,
          codeBreakdown: [
            { part: 'AtomicInteger totalOrdersProcessed', label: 'Lock-free thread-safe counter utilizing CPU Compare-And-Swap (CAS) hardware instructions', color: '#3b82f6' },
            { part: 'Executors.newFixedThreadPool(3)', label: 'Creates managed thread pool reusing 3 worker threads across arbitrary tasks', color: '#10b981' },
            { part: 'executor.shutdown();', label: 'Initiates orderly shutdown allowing queued tasks to complete before termination', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Multithreaded apps mein `new Thread().start()` loop mein chalana (leads to OutOfMemoryError thread exhaustion)',
            '❌ Deadlocks: Do threads ka ek doosre ke locks release hone ka infinite wait karna'
          ],
          proTips: [
            '💡 Always use `ConcurrentHashMap` instead of synchronizing standard `HashMap` for high-throughput thread safety',
            '💡 In Java 21+, explore **Virtual Threads (Project Loom)** (`Executors.newVirtualThreadPerTaskExecutor()`) for ultra-high throughput I/O operations'
          ],
          interviewQuestions: [
            'What is the difference between `Runnable` and `Callable` in Java?',
            'How does the `volatile` keyword work in the Java Memory Model?',
            'What is a Deadlock, and what are the 4 Coffman conditions required for a deadlock to occur?'
          ],
          miniChallenge: 'Create a multi-threaded bank transfer simulator using `ReentrantLock` to prevent race conditions.',
          quiz: {
            type: 'mcq',
            question: 'Java mein `volatile` keyword ka primary purpose kya hota hai?',
            options: [
              'Ye guarantee karta hai ki variable ki value hamesha direct main memory se read aur write ho (Visibility guarantee across CPU caches)',
              'Ye variable ko immutable bana deta hai',
              'Ye database connection open karta hai',
              'Ye thread ko sleep mode mein daal deta hai'
            ],
            answer: 'Ye guarantee karta hai ki variable ki value hamesha direct main memory se read aur write ho (Visibility guarantee across CPU caches)',
            explanation: 'The `volatile` modifier ensures that variable writes are instantly visible to all other threads by flushing and reading directly from main memory rather than CPU core caches.'
          },
          summary: [
            'ExecutorService thread pools managed thread reuse provide karte hain',
            'Atomic classes aur Locks race conditions prevent karte hain',
            'Java Memory Model visibility aur happens-before guarantees govern karta hai'
          ],
          flashcard: {
            q: '`synchronized` method aur `ReentrantLock` mein kya difference hai?',
            a: '`synchronized` implicit block lock hai jo auto-release hota hai; `ReentrantLock` explicit programmatic lock hai jo timeouts (`tryLock`), fairness policies, aur interruptible locks support karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: JDBC, SQL INTEGRATION & TRANSACTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: JDBC, SQL Integration & Transactions',
      lessons: [
        {
          id: 'java-jdbc-sql-transactions',
          title: 'JDBC Architecture, PreparedStatements & ACID Transactions',
          emoji: '🗄️',
          xpReward: 45,
          badgeName: 'JDBC Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Java ko PostgreSQL aur MySQL database se connect karne ka bridge hai JDBC! `PreparedStatement` use karo SQL Injection ko rokne ke liye, aur Transactions (`commit`/`rollback`) se bank transfers secure karo! 🗄️☕😎"',
            hint: '💡 Masti Sir: "String concatenation `\"SELECT * FROM users WHERE name = \'\" + input` SQL Injection vulnerability banata hai — ALWAYS use `PreparedStatement` with `?` placeholders!"',
            success: '🎉 Masti Sir: "Database connection, parameterized queries and ACID transactions mastered! 🔥"',
            mistake: '😅 Masti Sir: "Transaction karte waqt `conn.setAutoCommit(false)` lagana aur error aane par `catch` block mein `conn.rollback()` call karna mat bhoolna!"'
          },
          englishDef: '**Java Database Connectivity (JDBC)** is the foundational Java API connecting applications to relational databases (PostgreSQL, MySQL). Components include the **DriverManager**, **Connection**, **PreparedStatement** (pre-compiled, parameterized SQL queries defending against SQL Injection), and **ResultSet**. **ACID Transactions** are managed programmatically via `conn.setAutoCommit(false)`, `conn.commit()`, and `conn.rollback()`.',
          hinglishExplain: 'JDBC aur Database connectivity ke core concepts:\n1. **JDBC Architecture**: Driver -> Connection -> PreparedStatement -> ResultSet.\n2. **SQL Injection Defense**: Hamesha `PreparedStatement` use karte hain jisme `?` placeholder hota hai (`SELECT * FROM users WHERE id = ?`). User input strictly data treat hota hai, SQL command nahi.\n3. **ACID Transactions**: Jab ek transaction mein 2 queries chalein (e.g. Account A se deduct, Account B mein add), toh `conn.setAutoCommit(false)` karte hain. Dono pass hui toh `commit()`, ek bhi fail hui toh `rollback()`.\n4. **HikariCP Connection Pool**: Har request par naya DB connection open karna slow hota hai; HikariCP connection pool connections reuse karta hai.',
          funnyExample: {
            scenario: 'The Bank Money Transfer (ACID Transaction):\n- Step 1: Deduct ₹10,000 from Kabir\'s Account (Success ✅)\n- Power cut / Server crash before Step 2! 😱\n- Step 2: Add ₹10,000 to Aman\'s Account (Failed ❌)\n- Without Transaction: Kabir lost ₹10,000, Aman got nothing! Money vanished!\n- With JDBC Transaction: `conn.rollback()` triggers! Kabir gets his ₹10,000 back instantly as if nothing happened! 🏦🛡️✨',
            punchline: 'ACID transactions guarantee all-or-nothing database integrity!'
          },
          visualDiagram: {
            title: 'JDBC Connection & Transaction Commit/Rollback Architecture',
            nodes: [
              'Java App -> HikariCP Connection Pool -> Active PostgreSQL DB Connection',
              'conn.setAutoCommit(false); // Begin ACID Transaction Boundary',
              'Query 1: UPDATE accounts SET balance = balance - 1000 WHERE id = 1;',
              'Query 2: UPDATE accounts SET balance = balance + 1000 WHERE id = 2;',
              '├── Both Pass: conn.commit() [Permanent State Save]',
              '└── Any Exception: conn.rollback() [Revert to original state]'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How PreparedStatements Prevent SQL Injection:',
            steps: [
              'PreparedStatement sends the SQL template (`SELECT * FROM users WHERE email = ?`) to the database engine first for compilation and execution plan generation',
              'Parameters bound via `setString(1, input)` are transmitted strictly as raw literal data bytes',
              'Even if input contains malicious SQL like `\' OR \'1\'=\'1`, database engine treats it as a literal string value, rendering SQL injection impossible'
            ]
          },
          code: `import java.sql.*;

public class JDBCDemo {
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/codemastidb";
    private static final String DB_USER = "postgres";
    private static final String DB_PASS = "SecurePass2026!";

    public static void transferFunds(int fromId, int toId, double amount) {
        String deductSql = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
        String addSql    = "UPDATE accounts SET balance = balance + ? WHERE id = ?";

        // Try-With-Resources for Connection and PreparedStatements
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASS)) {
            // 1. Disable auto-commit to start transaction
            conn.setAutoCommit(false);

            try (PreparedStatement deductStmt = conn.prepareStatement(deductSql);
                 PreparedStatement addStmt    = conn.prepareStatement(addSql)) {

                // Step 1: Deduct from source account
                deductStmt.setDouble(1, amount);
                deductStmt.setInt(2, fromId);
                deductStmt.executeUpdate();

                // Step 2: Add to destination account
                addStmt.setDouble(1, amount);
                addStmt.setInt(2, toId);
                addStmt.executeUpdate();

                // 2. Commit transaction if both succeed
                conn.commit();
                System.out.println("Transferred ₹" + amount + " successfully!");

            } catch (SQLException e) {
                // 3. Rollback transaction on any failure
                conn.rollback();
                System.err.println("Transaction failed! Rolled back changes: " + e.getMessage());
            }
        } catch (SQLException e) {
            System.err.println("Database connection error: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        System.out.println("JDBC Parameterized Transaction System Initialized.");
    }
}`,
          codeBreakdown: [
            { part: 'conn.setAutoCommit(false);', label: 'Starts ACID transactional boundary preventing individual queries from committing prematurely', color: '#3b82f6' },
            { part: 'deductStmt.setDouble(1, amount);', label: 'Binds parameters safely preventing SQL injection attacks', color: '#10b981' },
            { part: 'conn.rollback();', label: 'Reverts all uncommitted updates in the transaction block on encountering any error', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Raw SQL query mein string concatenation karna (`\"SELECT * FROM users WHERE name = \'\" + name`)',
            '❌ Multi-step database operations mein transaction rollback handle na karna'
          ],
          proTips: [
            '💡 In modern applications, always use HikariCP (`com.zaxxer.hikari.HikariDataSource`) as your connection pool provider for industry-leading speed',
            '💡 Use batch updates (`stmt.addBatch()` and `stmt.executeBatch()`) when inserting thousands of records'
          ],
          interviewQuestions: [
            'What is the difference between `Statement` and `PreparedStatement` in JDBC?',
            'How do you manage database transactions programmatically in JDBC?',
            'What is connection pooling and why is HikariCP the default pool in Spring Boot?'
          ],
          miniChallenge: 'Write a JDBC query using `ResultSet` to fetch and print all active students from a `students` table.',
          quiz: {
            type: 'mcq',
            question: 'JDBC mein SQL Injection vulnerabilities ko neutralize karne ke liye kaunsa statement type use karna mandatory hota hai?',
            options: ['PreparedStatement with ? placeholders', 'Statement with string concatenation', 'CallableStatement without params', 'Static SQL Query'],
            answer: 'PreparedStatement with ? placeholders',
            explanation: 'PreparedStatement compiles the SQL query structure first and treats user parameters strictly as literal data, preventing malicious SQL code injection.'
          },
          summary: [
            'JDBC Java applications ko relational databases se connect karta hai',
            'PreparedStatement parameterized queries SQL Injection prevent karti hain',
            'ACID transactions all-or-nothing database updates guarantee karti hain'
          ],
          flashcard: {
            q: 'JDBC mein `conn.setAutoCommit(false)` kyun zaroori hota hai transactions ke liye?',
            a: 'Kyunki default mode mein har individual SQL query turant commit ho jati hai; `setAutoCommit(false)` se hum multiple queries ko ek single atomic transaction block mein group karte hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: SPRING BOOT & ENTERPRISE REST APIS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: Spring Boot, Dependency Injection & REST APIs',
      lessons: [
        {
          id: 'java-springboot-rest-apis',
          title: 'Spring Boot Architecture, Dependency Injection, REST Controllers & Validation',
          emoji: '🍃',
          xpReward: 50,
          badgeName: 'Spring Boot Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Enterprise Java backend ka king hai Spring Boot! Inversion of Control (IoC), Dependency Injection, `@RestController`, `@GetMapping`, aur Pydantic-style `@Valid` validation master karo! 🍃☕😎"',
            hint: '💡 Masti Sir: "Field Injection (`@Autowired private UserService userSerivce;`) mat use karo — ALWAYS use Constructor Injection for testability and immutability!"',
            success: '🎉 Masti Sir: "Spring Boot REST API with DTO validation and Global Exception Handling active! 🔥"',
            mistake: '😅 Masti Sir: "Entity objects ko directly `@RestController` se return mat karo — use DTOs (Data Transfer Objects) to protect internal database schema!"'
          },
          englishDef: '**Spring Boot** simplifies modern enterprise Java microservice development through opinionated starter dependencies and auto-configuration. Core architecture revolves around the **Spring IoC Container** and **Constructor Dependency Injection**. Standard layered architecture separates: **Controller Layer** (`@RestController`), **Service Layer** (`@Service`), **Repository Layer** (`@Repository` / Spring Data JPA), **DTOs** with Bean Validation (`@NotBlank`, `@Email`), and **Global Error Handling** (`@RestControllerAdvice`).',
          hinglishExplain: 'Spring Boot enterprise backend development ka standard architecture hai:\n1. **Inversion of Control (IoC) & DI**: Spring khud objects (Beans) create karta hai aur unhe constructor ke through inject karta hai.\n2. **Layered Architecture**:\n   - **Controller Layer (`@RestController`)**: HTTP requests receive karta hai (`@GetMapping`, `@PostMapping`).\n   - **Service Layer (`@Service`)**: Business logic aur transactions execute karta hai.\n   - **Repository Layer (`@Repository`)**: Spring Data JPA se database interact karta hai.\n3. **DTO Pattern & Validation**: Request validation ke liye `@Valid`, `@NotBlank`, `@Size` use hota hai.\n4. **Global Exception Handling**: `@RestControllerAdvice` centralized JSON error responses return karta hai.',
          funnyExample: {
            scenario: 'The Restaurant Service Chain (Spring Architecture):\n- Customer = Client Browser sending HTTP POST `/api/orders` 🧑‍🎓\n- Waiter = `@RestController` (Receives order, validates menu item) 🤵\n- Master Chef = `@Service` (Applies business recipe logic, checks ingredients) 👨‍🍳\n- Store Pantry Manager = `@Repository` (Fetches meat & veggies from PostgreSQL Database) 🥫\n- Restaurant Manager = Spring IoC Container (Wires everyone together automatically!) ✨',
            punchline: 'Spring Boot layered architecture provides clean separation of concerns!'
          },
          visualDiagram: {
            title: 'Spring Boot 3 Layered REST API Architecture',
            nodes: [
              'Client HTTP Request (POST /api/v1/students with JSON)',
              '1. Controller Layer (@RestController with @Valid StudentDTO)',
              '2. Service Layer (@Service with Business Logic & @Transactional)',
              '3. Repository Layer (Spring Data JpaRepository<Student, Long>)',
              '4. Database Layer (PostgreSQL Relational Storage via HikariCP)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Constructor Injection is Industry Best Practice:',
            steps: [
              'Immutability: Dependencies can be declared as `final`, ensuring they are not modified after instantiation',
              'Testability: Unit tests (JUnit/Mockito) can easily pass mock dependencies via constructor without needing a Spring container',
              'Prevents NullPointerExceptions: Guarantees that the Bean cannot be instantiated in an incomplete or uninitialized state'
            ]
          },
          code: `package com.codemasti.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

// 1. DTO Record (Java 21+ Immutable Data Transfer Object)
record StudentDTO(String name, String email, String course) {}

// 2. Service Layer (Business Logic)
@org.springframework.stereotype.Service
class StudentService {
    private final List<StudentDTO> students = new ArrayList<>();

    public StudentDTO createStudent(StudentDTO dto) {
        students.add(dto);
        return dto;
    }

    public List<StudentDTO> getAllStudents() {
        return Collections.unmodifiableList(students);
    }
}

// 3. REST Controller Layer
@RestController
@RequestMapping("/api/v1/students")
class StudentController {
    private final StudentService studentService;

    // Constructor Dependency Injection (Best Practice!)
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public ResponseEntity<StudentDTO> registerStudent(@RequestBody StudentDTO request) {
        StudentDTO created = studentService.createStudent(request);
        return new ResponseEntity<>(created, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<StudentDTO>> getStudents() {
        return ResponseEntity.ok(studentService.getAllStudents());
    }
}

// 4. Spring Boot Application Entry Point
@SpringBootApplication
public class SpringBootApplicationDemo {
    public static void main(String[] args) {
        System.out.println("Spring Boot REST Microservice initialized on port 8080");
        // SpringApplication.run(SpringBootApplicationDemo.class, args);
    }
}`,
          codeBreakdown: [
            { part: 'record StudentDTO(String name, ...)', label: 'Java 21 modern immutable record representing clean request/response payload', color: '#3b82f6' },
            { part: 'public StudentController(StudentService studentService)', label: 'Constructor Dependency Injection guaranteeing immutability and easy test isolation', color: '#10b981' },
            { part: '@RestController @RequestMapping("/api/v1/students")', label: 'Declares JSON-serialized RESTful HTTP endpoint handler', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Field injection use karna (`@Autowired private Service s;`) instead of Constructor injection',
            '❌ Database entities ko direct client ko expose karna without using DTOs'
          ],
          proTips: [
            '💡 Use `@RestControllerAdvice` with `@ExceptionHandler` for centralized JSON error responses with consistent HTTP status codes',
            '💡 Add `spring-boot-starter-validation` and use `@Valid` on request bodies for declarative input sanitization'
          ],
          interviewQuestions: [
            'What is Inversion of Control (IoC) and Dependency Injection (DI) in Spring?',
            'Why is Constructor Injection preferred over Field Injection (`@Autowired`)?',
            'How does Spring Boot Auto-Configuration work under the hood (`@EnableAutoConfiguration`)?'
          ],
          miniChallenge: 'Create a Spring Boot `@RestController` with a `@GetMapping("/api/v1/health")` returning status UP.',
          quiz: {
            type: 'mcq',
            question: 'Spring Framework mein dependencies inject karne ka sabse recommended aur industry-standard best practice tareeka kaunsa hai?',
            options: ['Constructor Injection', 'Field Injection (@Autowired on field)', 'Setter Injection', 'Global Static Variables'],
            answer: 'Constructor Injection',
            explanation: 'Constructor Injection ensures dependencies are immutable (final), prevents partial initialization, and enables easy unit testing with mocks without needing a running Spring context.'
          },
          summary: [
            'Spring Boot enterprise REST APIs ka leading framework hai',
            'Layered architecture Controller, Service aur Repository ko separate karti hai',
            'Constructor injection immutability aur testability guarantee karta hai'
          ],
          flashcard: {
            q: '`@Controller` aur `@RestController` mein kya primary difference hai?',
            a: '`@Controller` traditional MVC view templates (JSP/Thymeleaf) return karta hai; `@RestController` is a combination of `@Controller` and `@ResponseBody`, returning direct JSON/XML payloads.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: SPRING SECURITY & JWT AUTHENTICATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: Spring Security, JWT Authentication & API Hardening',
      lessons: [
        {
          id: 'java-spring-security-jwt',
          title: 'Spring Security 6 Architecture, BCrypt Password Hashing & Stateless JWT Authentication',
          emoji: '🔐',
          xpReward: 50,
          badgeName: 'Security Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Backend security ke bina production deployment suicidal hai! Spring Security 6 Filter Chain, BCrypt password hashing, aur Stateless JWT tokens master karo! 🔐☕😎"',
            hint: '💡 Masti Sir: "Spring Security mein `SecurityFilterChain` bean define karke CSRF disable karo (stateless APIs ke liye), session creation policy `STATELESS` rakho, aur `JwtAuthenticationFilter` register karo!"',
            success: '🎉 Masti Sir: "Spring Security 6 with JWT token validation and RBAC active! 🔥"',
            mistake: '😅 Masti Sir: "Plaintext passwords kabhi database mein save mat karna — ALWAYS use `BCryptPasswordEncoder` with salt rounds!"'
          },
          englishDef: '**Spring Security 6** secures Java web applications via a customizable **SecurityFilterChain**. For modern microservices, it implements **Stateless JWT Authentication**: passwords are encrypted using **BCrypt**, user credentials are exchanged for a signed **JSON Web Token (JWT)**, and a custom **OncePerRequestFilter** validates the `Authorization: Bearer <token>` header, enforcing **Role-Based Access Control (RBAC)** via `@PreAuthorize`.',
          hinglishExplain: 'Spring Security aur JWT Authentication ka complete flow:\n1. **BCrypt Password Hashing**: User ka password register hote waqt `BCryptPasswordEncoder` se salted hash ban kar database mein save hota hai.\n2. **Stateless JWT Flow**: Login successful hone par server ek signed JWT token return karta hai (jisme user ID aur roles hote hain).\n3. **JwtAuthFilter**: Har subsequent request ke header `Authorization: Bearer <token>` ko intercept karke token verify karta hai aur `SecurityContextHolder` mein user set karta hai.\n4. **Role-Based Access Control (RBAC)**: `@PreAuthorize("hasRole(\\\'ADMIN\\\')")` se admin routes protect kiye jaate hain.',
          funnyExample: {
            scenario: 'The VIP Club Wristband (Stateless JWT Authentication):\n- Registration / Login = Show National ID & Passport at club entrance 🪪\n- Bouncer verifies ID and clamps a Cryptographically Signed VIP Hologram Wristband (JWT Token) on your wrist! 🎟️✨\n- VIP Lounge Door = Bouncer only inspects your wristband in 1 second! Doesn\'t need to call club headquarters database every time you enter! 🚪🍸',
            punchline: 'Stateless JWT tokens provide high-speed cryptographic access without database lookups on every request!'
          },
          visualDiagram: {
            title: 'Spring Security 6 Stateless JWT Filter Chain Architecture',
            nodes: [
              'Client Request with "Authorization: Bearer <JWT>" Header',
              '1. CorsFilter & SecurityFilterChain Entry Point',
              '2. Custom JwtAuthenticationFilter (Extracts & Validates HMAC-SHA256 Signature)',
              '3. SecurityContextHolder.getContext().setAuthentication(authToken)',
              '4. Controller Endpoint executed with RBAC (@PreAuthorize("hasRole(\'ADMIN\')"))'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'JWT Structure & Claims:',
            steps: [
              'Header: Algorithm type (HS256 / RS256) and token type (JWT)',
              'Payload (Claims): User ID (`sub`), email, roles (`roles: ["ROLE_ADMIN"]`), issue time (`iat`), and expiry timestamp (`exp`)',
              'Signature: Cryptographic hash (`HMAC-SHA256(base64(header) + "." + base64(payload), SECRET_KEY)`) preventing tampering'
            ]
          },
          code: `package com.codemasti.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity // Enables @PreAuthorize("hasRole('ADMIN')")
public class SecurityConfig {

    // 1. Password Encoder Bean (BCrypt with Salt)
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // 2. Spring Security 6 Filter Chain Specification
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF for stateless REST APIs
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            );

        return http.build();
    }
}`,
          codeBreakdown: [
            { part: 'SessionCreationPolicy.STATELESS', label: 'Disables server-side HTTP session storage in favor of token-based authentication', color: '#3b82f6' },
            { part: 'new BCryptPasswordEncoder()', label: 'Cryptographically strong password hashing function with automated per-user salt generation', color: '#10b981' },
            { part: '.requestMatchers("/api/v1/admin/**").hasRole("ADMIN")', label: 'Enforces declarative role-based access control on sensitive administrative API endpoints', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ JWT Secret Key ko source code mein hardcode karna (use environment variables `${JWT_SECRET}`)',
            '❌ Token expiration time na set karna (makes stolen tokens valid indefinitely)'
          ],
          proTips: [
            '💡 Use Short-lived Access Tokens (15 minutes) paired with Long-lived Refresh Tokens stored in HttpOnly cookies',
            '💡 Use `@PreAuthorize("hasAuthority(\\\'COURSE_WRITE\\\')")` for fine-grained permission-based access control'
          ],
          interviewQuestions: [
            'How does the Spring Security Filter Chain work internally?',
            'What is the difference between Authentication and Authorization?',
            'Why is BCrypt preferred over MD5 or SHA-256 for password hashing?'
          ],
          miniChallenge: 'Configure Spring Security to permit public access to `/api/v1/public/**` while protecting all other routes.',
          quiz: {
            type: 'mcq',
            question: 'Stateless REST API backend mein Spring Security configuration ke andar `SessionCreationPolicy` ko kya set kiya jata hai?',
            options: ['SessionCreationPolicy.STATELESS', 'SessionCreationPolicy.ALWAYS', 'SessionCreationPolicy.NEVER', 'SessionCreationPolicy.IF_REQUIRED'],
            answer: 'SessionCreationPolicy.STATELESS',
            explanation: 'For stateless JWT token-based APIs, session creation is set to STATELESS so Spring Security does not store user session cookies in server memory.'
          },
          summary: [
            'Spring Security 6 FilterChain request authentication manage karta hai',
            'BCrypt password hashing brute-force aur rainbow table attacks block karti hai',
            'Stateless JWT tokens distributed microservices authentication empower karte hain'
          ],
          flashcard: {
            q: 'BCrypt password hashing SHA-256 se zyada secure kyun maani jaati hai passwords ke liye?',
            a: 'BCrypt intentionally slow aur computationally heavy key derivation function hai with built-in salt, jo GPU brute-force cracking ko mathematically impractical bana deta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 14: DOCKER CONTAINERIZATION & PRODUCTION CAPSTONE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 14: Docker Containerization, CI/CD & Production Capstone',
      lessons: [
        {
          id: 'java-docker-cicd-production',
          title: 'Production Multi-Stage Dockerfile, Docker Compose & CodeMasti LMS Capstone',
          emoji: '🐳',
          xpReward: 50,
          badgeName: 'Production Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Java app ban gaya, ab use Docker container mein pack karke cloud par deploy karenge! Multi-Stage Dockerfile, Eclipse Temurin JRE, non-root user, aur PostgreSQL compose stack! 🐳☁️😎"',
            hint: '💡 Masti Sir: "Multi-stage build use karo: Stage 1 mein Maven se JAR build karo, Stage 2 mein sirf lightweight JRE (Temurin 21-jre-alpine) mein JAR run karo!"',
            success: '🎉 Masti Sir: "Congratulations! You have mastered Modern Java, Spring Boot, Security, Databases and Production Engineering! 🌟"',
            mistake: '😅 Masti Sir: "Heavy JDK image ko production mein deploy mat karo — use minimal JRE base image with non-root security user!"'
          },
          englishDef: 'Production deployment of Java Spring Boot applications uses **Multi-Stage Dockerfiles** (compiling the fat JAR with Maven in builder stage and executing on a minimal, secure **Eclipse Temurin JRE Alpine** image under an unprivileged non-root user). Architecture integrates **Docker Compose** for local full-stack orchestration (Spring Boot API + PostgreSQL + Redis), **GitHub Actions CI/CD Quality Gates**, and **Spring Boot Actuator** health probing.',
          hinglishExplain: 'Java Production Deployment aur Capstone Architecture:\n1. **Multi-Stage Dockerfile**: Stage 1 mein Maven code compile karke JAR banata hai; Stage 2 mein sirf 50MB ka lightweight JRE image use hota hai.\n2. **Non-Root Security**: Container ko unprivileged user se run kiya jata hai taaki security vulnerability na ho.\n3. **Full-Stack Docker Compose**: Spring Boot API, PostgreSQL database aur Redis cache ek single command `docker compose up` se start hote hain.\n4. **Production Observability**: Spring Boot Actuator `/actuator/health` endpoint cloud load balancers ko real-time health status provide karta hai.',
          funnyExample: {
            scenario: 'The Spacecraft Launch Stage (Multi-Stage Dockerfile):\n- Stage 1 (Heavy Rocket Booster) = Full Maven Compiler (600MB): Lifts code into orbit, compiles JAR!\n- Discard Booster in Ocean! 🚀🌊\n- Stage 2 (Sleek Space Capsule) = Minimal Alpine JRE (70MB): Flies cleanly in space with zero extra weight!\n- Result: 10x faster deployments, ultra-secure production image! ✨',
            punchline: 'Multi-stage Docker builds produce tiny, secure, enterprise-grade runtime images!'
          },
          visualDiagram: {
            title: 'Complete CodeMasti Enterprise Java Production Cloud Architecture',
            nodes: [
              'Client Browser / Mobile App (HTTPS Port 443)',
              'Nginx Reverse Proxy / Cloud Load Balancer (SSL Termination & Rate Limiting)',
              'Spring Boot 3 Microservice Container (Eclipse Temurin JRE - 3 Replicas)',
              '├── Managed PostgreSQL Relational Database Cluster (HikariCP Connection Pool)',
              '└── Redis In-Memory Cache Cluster (JWT Session & Route Caching)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production Spring Boot Optimization Checklist:',
            steps: [
              '1. Security: HTTPS active, BCrypt hashed passwords, secrets in environment variables',
              '2. Database: HikariCP connection pool configured with minimum idle and max lifetime boundaries',
              '3. JVM Optimization: Set JVM memory flags (`-XX:+UseG1GC -XX:MaxRAMPercentage=75.0`)',
              '4. Healthchecks: Spring Boot Actuator enabled on `/actuator/health` for orchestrator probes'
            ]
          },
          code: `# ── PRODUCTION MULTI-STAGE DOCKERFILE FOR JAVA (Dockerfile) ──

# ── STAGE 1: Build & Package JAR with Maven ──
FROM maven:3.9-eclipse-temurin-21-alpine AS builder
WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and build production JAR
COPY src ./src
RUN mvn clean package -DskipTests

# ── STAGE 2: Minimal Production JRE Runtime ──
FROM eclipse-temurin:21-jre-alpine AS runner
WORKDIR /app

# Security: Create non-root unprivileged user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy compiled JAR from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Switch to unprivileged user
USER appuser

EXPOSE 8080

# Configure container-aware JVM memory flags
ENTRYPOINT ["java", "-XX:+UseG1GC", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]`,
          codeBreakdown: [
            { part: 'FROM eclipse-temurin:21-jre-alpine AS runner', label: 'Minimal secure Alpine JRE distribution drastically reducing container image footprint', color: '#3b82f6' },
            { part: 'USER appuser', label: 'Enforces non-root container execution preventing container breakout security risks', color: '#10b981' },
            { part: '-XX:MaxRAMPercentage=75.0', label: 'Container-aware JVM garbage collection flag adapting memory dynamically to cgroup limits', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production image mein full heavy JDK aur source code copy kar dena instead of using JRE',
            '❌ Container ko default `root` user se run karna in production'
          ],
          proTips: [
            '💡 Use Spring Boot Layered Jars (`-Djarmode=layertools`) to cache unchanged library layers and accelerate CI build times',
            '💡 Always configure Spring Boot Actuator health checks for Kubernetes and AWS load balancer liveness probes'
          ],
          interviewQuestions: [
            'How do you containerize and optimize a Spring Boot application using Docker Multi-Stage builds?',
            'What JVM parameters are critical when running Java applications inside Docker/Kubernetes containers?',
            'How do you design a high-availability Spring Boot backend capable of serving 10,000 requests per second?'
          ],
          miniChallenge: 'Write a `compose.yaml` spinning up a Spring Boot container and a PostgreSQL database with health checks.',
          quiz: {
            type: 'mcq',
            question: 'Production Java Dockerfile mein multi-stage builds use karne ka sabse bada primary benefit kya hota hai?',
            options: [
              'Build tools aur Maven ko final image se discard karke image size 80% chhota aur secure bana deta hai',
              'Java code ko C++ mein convert kar deta hai',
              'Database automatically create ho jata hai',
              'Internet speed 10x badha deta hai'
            ],
            answer: 'Build tools aur Maven ko final image se discard karke image size 80% chhota aur secure bana deta hai',
            explanation: 'Multi-stage builds allow developers to compile code with heavy build tools in stage 1 while copying only the compiled JAR into a tiny, secure JRE runtime image in stage 2.'
          },
          summary: [
            'Multi-stage Docker builds lightweight production Java images produce karte hain',
            'Non-root container execution cloud security best practice hai',
            'CodeMasti Java & Spring Boot Architecture enterprise scale ke liye certified hai'
          ],
          flashcard: {
            q: 'JVM parameter `-XX:MaxRAMPercentage=75.0` ka kya role hota hai Docker containers mein?',
            a: 'Ye JVM ko instruct karta hai ki container ko assign kiye gaye total cgroup RAM limit ka 75% Heap memory ke liye allocate kare, preventing container OutOfMemory (OOMKilled) crashes.'
          }
        }
      ]
    }
  ]
};

export default javaCourse;
