export const cppCourse = {
  id: 'cpp',
  title: 'C++',
  description: 'Modern C++ Masterclass from fundamentals to high-performance systems engineering! OOP, Inheritance & Polymorphism, Standard Template Library (STL), Lambda expressions, Templates, C++20 Concepts, Smart Pointers (unique_ptr, shared_ptr, weak_ptr), RAII, Move Semantics, Rule of 0/3/5, std::optional, std::string_view, C++20 Ranges, Multithreading & Concurrency, CMake build systems, GDB & AddressSanitizer debugging, DSA algorithms, aur FAANG C++ interview problems Masti Sir ke saath!',
  icon: '⚡',
  category: 'programming',
  certificateName: 'C++',
  topicsCount: 120,
  practiceCount: 140,
  projectsCount: 8,
  hoursEstimate: 45,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: MODERN C++ FUNDAMENTALS & TOOLCHAIN
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Modern C++ Fundamentals, Toolchain & Streams I/O',
      lessons: [
        {
          id: 'cpp-fundamentals-toolchain-io',
          title: 'Modern C++ Introduction, Toolchain (GCC/Clang) & Streams I/O',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'C++ Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C++ ko sirf \'C with Classes\' mat samajhna! Modern C++ high performance, zero-cost abstractions, game engines, aur financial high-frequency trading (HFT) ka king hai! ⚡🚀😎"',
            hint: '💡 Masti Sir: "`std::cout` standard output stream hai, `std::cin` input stream hai, aur `std::endl` output flush karta hai!"',
            success: '🎉 Masti Sir: "Modern C++ compilation pipeline and stream I/O mastered! 🔥"',
            mistake: '😅 Masti Sir: "Production code mein `using namespace std;` global header files mein kabhi mat lagana — use explicit `std::cout` to prevent naming collisions!"'
          },
          englishDef: 'C++ is a high-performance, multi-paradigm (procedural, object-oriented, functional, generic) programming language designed by Bjarne Stroustrup. It delivers **Zero-Cost Abstractions** where high-level constructs compile down to optimal machine code without runtime overhead. The modern C++ toolchain utilizes `g++` or `clang++` compiling to native binaries with standard streams (`std::cout`, `std::cin`, `std::cerr`).',
          hinglishExplain: 'Modern C++ programming ke core concepts:\n1. **Zero-Cost Abstractions**: Aap classes, templates aur lambdas likho, compiler use raw C-level machine assembly jitna ultra-fast optimize karta hai.\n2. **Where C++ is used**: Unreal Engine game development, web browsers (Chrome V8 engine), operating systems, databases (PostgreSQL/MySQL storage engines), aur High-Frequency Trading (HFT).\n3. **Modern Compilation**: `g++ -std=c++20 -Wall -Wextra -O3 main.cpp -o main`.\n4. **Streams I/O**: `std::cout << "Hello"` type-safe stream output deta hai bina format specifiers ki zaroorat ke.',
          funnyExample: {
            scenario: 'The Supercar Engine (C++ Zero-Cost Abstraction):\n- Java / Python = Passenger Bus with Speed Limiter (Safe, comfortable, but has automatic brakes and garbage collector pauses 🚌)\n- C++ = V12 Supercharged Racecar (Raw titanium engine! Every gear shift, memory byte, and CPU cycle is tuned for 350 km/h top speed without any governor!) 🏎️💨',
            punchline: 'Modern C++ gives you high-level elegance with raw bare-metal execution speed!'
          },
          visualDiagram: {
            title: 'Modern C++ Toolchain & Compilation Pipeline',
            nodes: [
              'Source Code (main.cpp, utils.hpp)',
              '1. Preprocessor (expands #include, templates)',
              '2. Compiler Front-End (Clang / GCC AST & Type Checking)',
              '3. LLVM / GCC Optimizer (-O3 Vectorization & Inlining)',
              '4. Linker (ld) -> Stripped Native ELF/Mach-O Binary'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Avoid "using namespace std;" in Headers:',
            steps: [
              '`using namespace std;` dumps thousands of standard library symbol names into the global namespace',
              'Causes naming collisions if your code declares a function or type matching a standard name (e.g. `count`, `data`, `byte`, `min`)',
              'Best practice: Use explicit namespace qualifications (`std::string`, `std::vector`) or localized imports inside function scope'
            ]
          },
          code: `// main.cpp - Modern C++20 Standard Entry Point
#include <iostream>
#include <string>
#include <format> // C++20 std::format

int main() {
    std::string developerName = "Kabir Sharma";
    int xpScore = 1850;
    double performanceIndex = 99.85;
    bool isCertified = true;

    // Modern Type-Safe Stream Output
    std::cout << "=== CodeMasti Modern C++ Systems ===" << std::endl;
    std::cout << "Developer  : " << developerName << "\\n";
    std::cout << "XP Points  : " << xpScore << "\\n";
    std::cout << "Performance: " << performanceIndex << "%\\n";

    if (isCertified) {
        std::cout << "Status     : Active High-Performance Engineer 🚀\\n";
    }

    return 0; // 0 = Success status to OS
}`,
          codeBreakdown: [
            { part: '#include <iostream>', label: 'Standard I/O stream library header providing std::cout and std::cin', color: '#3b82f6' },
            { part: 'std::cout << "Developer: " << ...', label: 'Stream insertion operator (<<) chaining type-safe outputs to stdout', color: '#10b981' },
            { part: 'return 0;', label: 'Signals successful execution status code 0 back to calling parent terminal shell', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `#include <iostream>` bhool jana ya `std::` prefix omit kar dena',
            '❌ Fast competitive programming I/O mein `std::endl` use karna in high-frequency loops (use `"\\n"` to prevent excessive stream flushing)'
          ],
          proTips: [
            '💡 In Competitive Programming and high-throughput servers, enable Fast I/O: `std::ios_base::sync_with_stdio(false); std::cin.tie(NULL);`',
            '💡 Always compile with modern standard flags: `g++ -std=c++20 -O3 -Wall -Wextra main.cpp`'
          ],
          interviewQuestions: [
            'What is the concept of "Zero-Cost Abstraction" in C++?',
            'What is the difference between `std::endl` and `"\\n"` in C++ streams?',
            'Why should `using namespace std;` be strictly avoided in C++ header files?'
          ],
          miniChallenge: 'Write a C++ program that reads a user\'s full name using `std::getline(std::cin, name)` and prints a personalized greeting.',
          quiz: {
            type: 'mcq',
            question: 'C++ stream output mein `std::endl` aur `\\n` ke beech kya primary difference hota hai?',
            options: [
              '`std::endl` newline add karne ke sath sath stream buffer ko explicitly flush bhi karta hai, jabki `\\n` sirf newline character insert karta hai',
              '`std::endl` sirf Windows par chalta hai',
              '`\\n` C++ mein illegal hai',
              'Dono bilkul identical hote hain'
            ],
            answer: '`std::endl` newline add karne ke sath sath stream buffer ko explicitly flush bhi karta hai, jabki `\\n` sirf newline character insert karta hai',
            explanation: '`std::endl` inserts a newline character and forces a buffer flush (`std::cout.flush()`), which incurs I/O performance penalties inside tight loops compared to raw `"\\n"`.'
          },
          summary: [
            'Modern C++ zero-cost abstractions aur low-level memory efficiency provide karta hai',
            'Streams I/O type-safe formatted console operations deta hai',
            'Compilation flags (-std=c++20, -O3) modern language features aur optimizations enable karte hain'
          ],
          flashcard: {
            q: 'Zero-Cost Abstraction kya hota hai C++ mein?',
            a: 'Bjarne Stroustrup ka design principle: Jo feature aap use nahi karte uski koi cost nahi hoti, aur jo feature aap use karte ho use aap manually assembly mein usse better code nahi likh sakte.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: OOP: CLASSES, OBJECTS & CONSTRUCTORS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Classes, Objects, Encapsulation & Constructors',
      lessons: [
        {
          id: 'cpp-intro-oop',
          title: 'Classes, Objects, Encapsulation & Member Initializer Lists',
          emoji: '🏛️',
          xpReward: 40,
          badgeName: 'C++ Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C++ C ki raw speed aur OOPs ki clean architecture ka deadly combination hai! Member Initializer Lists se objects ko directly memory mein initialize karo! 🏛️⚡😎"',
            hint: '💡 Masti Sir: "Class declaration ke closing curly brace ke baad semicolon (;) lagana mat bhoolna: `class User { ... };`!"',
            success: '🎉 Masti Sir: "Object-Oriented C++ architecture and member initialization lists mastered! 🔥"',
            mistake: '😅 Masti Sir: "Constructor ke andar assignment `this->x = x;` mat karo — use Member Initializer List `: x(x)` for maximum efficiency and avoiding default construction overhead!"'
          },
          englishDef: 'A **Class** in C++ is a user-defined blueprint grouping state (data members) and behavior (member functions). Objects are instantiated instances with controlled visibility via **Access Specifiers** (`public`, `private`, `protected`). **Constructors** initialize state, optimized via **Member Initializer Lists** (`: member(value)`) to construct members in-place.',
          hinglishExplain: 'C++ Object-Oriented Programming ke core pillars:\n1. **Class vs Object**: Class ek architectural blueprint hai (e.g. `class Player`), aur Object uska physical instance hai (`Player p1("Kabir", 100)`).\n2. **Encapsulation**: Data members ko `private` rakha jata hai taaki unhe direct koi corrupt na kar sake, aur access `public` getters/setters se hota hai.\n3. **Member Initializer List**: Constructor body ke andar `=` se assign karne ki jagah `: name(pName), xp(pXp)` syntax use hota hai jo direct in-place initialization karta hai.\n4. **const Member Functions**: Jo functions object ki state modify nahi karte unhe `int getXP() const` mark karte hain.',
          funnyExample: {
            scenario: 'The Game Character Factory (C++ OOP):\n- Class `Player` = Game Designer\'s 3D Rigging Blueprint 🎮\n- Member Initializer List = High-speed 3D Printer printing armor, sword, and HP instantly in 1 step!\n- Object `Player player1("Warrior", 500)` = Live character fighting monsters on screen in 120 FPS! ⚔️🛡️',
            punchline: 'Classes define the blueprint; Objects bring game worlds to life!'
          },
          visualDiagram: {
            title: 'C++ Class Memory Layout & Member Initialization Flow',
            nodes: [
              'Class Declaration: class Player { private: std::string name; int xp; };',
              'Object Instantiation on Stack: Player p("Kabir", 100);',
              'Member Initializer List: : name("Kabir"), xp(100) -> Direct In-Place Construction in RAM',
              'Const Method Invocation: p.getXP() const -> Guaranteed Read-Only'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Member Initializer Lists are Superior to Body Assignment:',
            steps: [
              'Body Assignment (`name = pName;`): First invokes default constructor for `std::string`, then immediately invokes copy assignment operator (Double work!)',
              'Member Initializer List (`: name(pName)`): Directly invokes copy/move constructor once in-place',
              'Mandatory: Const members, Reference members (`&`), and classes without default constructors MUST use member initializer lists'
            ]
          },
          code: `#include <iostream>
#include <string>

class Player {
private:
    std::string name;
    int xp;
    const int playerId; // Const member: MUST be initialized in initializer list!

public:
    // Parameterized Constructor using Member Initializer List
    Player(std::string playerName, int startingXp, int id)
        : name(std::move(playerName)), xp(startingXp), playerId(id) {
        // Constructor body for validation / logging
    }

    // Mutator Member Function
    void earnXP(int amount) {
        if (amount > 0) {
            xp += amount;
            std::cout << name << " earned +" << amount << " XP! (Total: " << xp << ")\\n";
        }
    }

    // Const Inspector Function (Guaranteed Read-Only)
    int getXP() const {
        return xp;
    }

    std::string getName() const {
        return name;
    }
};

int main() {
    Player p1("Kabir Sharma", 100, 9021);
    p1.earnXP(50);
    std::cout << p1.getName() << "'s Current XP: " << p1.getXP() << std::endl;

    return 0;
}`,
          codeBreakdown: [
            { part: ': name(std::move(playerName)), xp(startingXp), playerId(id)', label: 'Member initializer list constructing fields in-place before constructor body executes', color: '#10b981' },
            { part: 'int getXP() const', label: 'Const member function guaranteeing no class data members are mutated during invocation', color: '#3b82f6' },
            { part: 'class Player { ... };', label: 'Class definition properly terminated with mandatory trailing semicolon', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Class declaration ke aakhri closing curly brace ke baad semicolon (;) bhool jana (`class Box { };`)',
            '❌ `const` member functions ke andar class variables ko modify karne ki koshish karna'
          ],
          proTips: [
            '💡 Always use Member Initializer Lists for all constructors to prevent double-initialization overhead',
            '💡 Mark all non-mutating getter methods as `const` to allow them to be invoked on `const Player&` references'
          ],
          interviewQuestions: [
            'Why are Member Initializer Lists preferred over assignment inside constructor bodies?',
            'What is the difference between a `struct` and a `class` in C++?',
            'What does the `const` keyword at the end of a member function signature enforce?'
          ],
          miniChallenge: 'Create a `BankAccount` class with a member initializer list and `deposit()`, `withdraw()`, and `getBalance() const` methods.',
          quiz: {
            type: 'mcq',
            question: 'C++ mein `class` aur `struct` ke beech kya primary difference hota hai?',
            options: [
              'Class ke members by default `private` hote hain, jabki Struct ke members by default `public` hote hain',
              'Struct mein functions nahi ho sakte',
              'Class mein memory allocate nahi hoti',
              'Struct sirf C mein chalta hai'
            ],
            answer: 'Class ke members by default `private` hote hain, jabki Struct ke members by default `public` hote hain',
            explanation: 'In C++, the ONLY technical difference between `class` and `struct` is default member and inheritance accessibility: `class` defaults to `private`, while `struct` defaults to `public`.'
          },
          summary: [
            'Classes encapsulate state aur methods with public/private access specifiers',
            'Member Initializer Lists in-place efficient object construction guarantee karte hain',
            'Const member functions read-only access safety enforce karte hain'
          ],
          flashcard: {
            q: 'C++ mein `const` member function kya hota hai?',
            a: 'Ek aisi method (`int get() const;`) jo compiler ko guarantee deti hai ki ye function object ke kisi bhi member variable ko modify nahi karegi.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: INHERITANCE, POLYMORPHISM & VIRTUAL FUNCTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Inheritance, Polymorphism & Virtual Functions (VTable)',
      lessons: [
        {
          id: 'cpp-inheritance-polymorphism-vtable',
          title: 'Inheritance, Virtual Functions, Abstract Interfaces & VTable Internals',
          emoji: '🧬',
          xpReward: 45,
          badgeName: 'Polymorphism Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C++ Polymorphism ka engine hai Virtual Functions aur VTable (Virtual Method Table)! Base class pointer se derived class ka overridden method execute karo! 🧬⚡😎"',
            hint: '💡 Masti Sir: "Polymorphic Base Class banate waqt `virtual ~Base() = default;` (Virtual Destructor) lagana MANDATORY hai, nahi toh derived class ka cleanup memory leak kar dega!"',
            success: '🎉 Masti Sir: "Virtual dispatch, Pure virtual abstract classes and VTable mechanics mastered! 🔥"',
            mistake: '😅 Masti Sir: "Derived class mein overridden methods par `override` keyword lagana mat bhoolna taaki compiler signature mismatch errors turant catch kar le!"'
          },
          englishDef: '**Inheritance** derives subclass behaviors via `: public BaseClass`. **Runtime Polymorphism** is achieved using `virtual` member functions resolved dynamically via the compiler-generated **Virtual Method Table (VTable)** and **vptr**. An **Abstract Interface** contains at least one **Pure Virtual Function** (`virtual void execute() = 0;`), enforcing strict contracts for derived classes. Base classes with virtual functions MUST declare a **Virtual Destructor**.',
          hinglishExplain: 'C++ Inheritance aur Polymorphism ke core internal mechanics:\n1. **Inheritance**: Derived class base class ke features reuse karti hai (`class Dog : public Animal`).\n2. **Virtual Functions & Override**: `virtual void speak()` batata hai ki child class is method ko override kar sakti hai. `override` keyword compile-time safety deta hai.\n3. **VTable (Virtual Table)**: Har polymorphic class ke liye compiler ek function pointer table banata hai. Runtime par base pointer vptr se derived class ka method execute karta hai.\n4. **Virtual Destructor**: Base class destructor ko `virtual ~Base() = default;` banana mandatory hai taaki `delete basePtr` karne par derived class ka destructor bhi properly run ho.',
          funnyExample: {
            scenario: 'The Universal Game Controller (Polymorphism & VTable):\n- Base Pointer `Controller* pad = new FlightJoystick();` 🎮✈️\n- Player presses Button A: `pad->pressButtonA();`\n- VTable Magic: JVM/Compiler doesn\'t fire standard jump; it looks up FlightJoystick\'s VTable and fires Afterburner Thrusters! 🚀🔥\n- Same code `pad->pressButtonA()` on `DrivingWheel` turns the steering wheel! ✨',
            punchline: 'Virtual functions dispatch the right behavior dynamically at runtime!'
          },
          visualDiagram: {
            title: 'C++ VTable & VPtr Runtime Dynamic Dispatch Architecture',
            nodes: [
              'Base Pointer: Shape *shape = new Circle(5.0);',
              'Object Memory in Heap: [ vptr (8 Bytes) | double radius ]',
              'vptr points to Circle::VTable -> &Circle::draw(), &Circle::getArea()',
              'shape->draw() executes Circle::draw() at runtime with single memory indirection!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Why Virtual Destructors are Mandatory:',
            steps: [
              'Without Virtual Destructor: Deleting a derived object via base pointer (`Base *b = new Derived(); delete b;`) calls ONLY Base destructor',
              'Result: Derived class resources (heap buffers, open files, network sockets) are NEVER freed, causing severe memory leaks and undefined behavior',
              'With `virtual ~Base() = default;`: Compiler looks up VTable and cleanly chains Derived destructor -> Base destructor in reverse order'
            ]
          },
          code: `#include <iostream>
#include <memory>
#include <vector>

// 1. Pure Abstract Interface Class
class Shape {
public:
    // Mandatory Virtual Destructor for Polymorphic Base Classes!
    virtual ~Shape() = default;

    // Pure Virtual Functions defining contract (= 0)
    virtual double getArea() const = 0;
    virtual void draw() const = 0;
};

// 2. Concrete Derived Class 1
class Circle : public Shape {
private:
    double radius;
public:
    explicit Circle(double r) : radius(r) {}

    double getArea() const override {
        return 3.14159 * radius * radius;
    }

    void draw() const override {
        std::cout << "Drawing Circle (Radius: " << radius << ", Area: " << getArea() << ")\\n";
    }
};

// 3. Concrete Derived Class 2
class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double getArea() const override {
        return width * height;
    }

    void draw() const override {
        std::cout << "Drawing Rectangle (" << width << "x" << height << ", Area: " << getArea() << ")\\n";
    }
};

int main() {
    // Polymorphic collection using Smart Pointers
    std::vector<std::unique_ptr<Shape>> canvas;
    canvas.push_back(std::make_unique<Circle>(5.0));
    canvas.push_back(std::make_unique<Rectangle>(4.0, 6.0));

    std::cout << "=== Rendering Polymorphic Shapes ===\\n";
    for (const auto& shape : canvas) {
        shape->draw(); // Dynamic dispatch via VTable!
    }

    return 0;
}`,
          codeBreakdown: [
            { part: 'virtual ~Shape() = default;', label: 'Mandatory virtual destructor guaranteeing complete derived resource deallocation', color: '#ef4444' },
            { part: 'virtual double getArea() const = 0;', label: 'Pure virtual function (= 0) declaring abstract interface method contract', color: '#3b82f6' },
            { part: 'double getArea() const override', label: 'Override keyword instructing compiler to verify method matches base signature exactly', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Base class mein virtual destructor bhool jana (causes catastrophic memory leaks when deleting via base pointers)',
            '❌ `override` keyword na lagana (leaves typos in function signatures silently compiling as new unused functions)'
          ],
          proTips: [
            '💡 Mark derived classes as `final` if they are not intended to be inherited further, enabling compiler devirtualization optimizations',
            '💡 Always prefer Abstract Interfaces with pure virtual methods for clean, decoupled API design'
          ],
          interviewQuestions: [
            'How does the VTable and vptr work under the hood in C++ runtime polymorphism?',
            'Why must a base class with virtual functions always declare a virtual destructor?',
            'What is the difference between an abstract class and an interface in C++?'
          ],
          miniChallenge: 'Create a polymorphic `PaymentMethod` hierarchy where `CreditCard` and `CryptoWallet` override `processPayment(double amount)`.',
          quiz: {
            type: 'mcq',
            question: 'Polymorphic base class mein destructor ko `virtual` banana kyun mandatory best practice hota hai?',
            options: [
              'Taaki base class pointer se delete karte waqt derived class ka destructor bhi properly execute ho aur memory leak na ho',
              'Taaki program faster compile ho',
              'Ye virtual table ka size zero kar deta hai',
              'Isse public variables private ban jaate hain'
            ],
            answer: 'Taaki base class pointer se delete karte waqt derived class ka destructor bhi properly execute ho aur memory leak na ho',
            explanation: 'If the base class destructor is not virtual, `delete basePtr` invokes only the base class destructor, leaking all resources owned by the derived class.'
          },
          summary: [
            'Inheritance `: public Base` code reuse aur hierarchy provide karta hai',
            'Virtual functions aur VTable dynamic runtime polymorphism enable karte hain',
            'Virtual destructors derived memory cleanup safety guarantee karte hain'
          ],
          flashcard: {
            q: 'C++ mein VTable (Virtual Table) kya hota hai?',
            a: 'Compiler dwara banai gayi ek lookup table jisme polymorphic class ke saare virtual member functions ke memory pointers store hote hain for runtime dynamic dispatch.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: C++ STL (STANDARD TEMPLATE LIBRARY)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: C++ STL Containers (Vectors, Maps, Sets & Algorithms)',
      lessons: [
        {
          id: 'cpp-stl-mastery',
          title: 'STL Containers (std::vector, unordered_map, set) & Algorithms',
          emoji: '📦',
          xpReward: 50,
          badgeName: 'STL Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C++ Standard Template Library (STL) competitive programmers aur systems engineers ka sabse bada super-weapon hai! `std::vector`, `std::unordered_map` (O(1)), `std::set`, aur `std::sort()` master karo! 📦⚡😎"',
            hint: '💡 Masti Sir: "Vector mein items add karte waqt `push_back()` se behtar `emplace_back()` use karo — ye arguments se object directly container memory mein in-place construct karta hai!"',
            success: '🎉 Masti Sir: "STL containers, iterators and algorithm pipelines mastered! 🔥"',
            mistake: '😅 Masti Sir: "`std::map` (O(log N) Red-Black Tree) aur `std::unordered_map` (O(1) Hash Table) ke trade-offs samajh kar use karo!"'
          },
          englishDef: 'The **C++ Standard Template Library (STL)** is a generic software framework comprising 4 components: **Containers** (Sequence: `std::vector`, `std::deque`, `std::list`; Associative: `std::set`, `std::map`; Unordered: `std::unordered_map`), **Iterators** (pointer-like traversal abstractions), **Algorithms** (`std::sort`, `std::find_if`, `std::binary_search`), and **Functors/Lambdas**.',
          hinglishExplain: 'C++ STL ke core components aur unke trade-offs:\n1. **std::vector**: Dynamic resizing array (index se instant O(1) random access). `reserve(N)` se pre-allocation karke reallocations avoid ki ja sakti hain.\n2. **std::map vs std::unordered_map**:\n   - `std::map`: Red-Black Self-Balancing Tree use karta hai (Keys hamesha sorted rehti hain, O(log N) search/insert).\n   - `std::unordered_map`: Hash Table use karta hai (Unsorted keys, Average O(1) instant search).\n3. **std::set**: Unique elements ko sorted order mein store karta hai.\n4. **STL Algorithms**: `std::sort(v.begin(), v.end())` optimized IntroSort (QuickSort + HeapSort + InsertionSort hybrid) algorithm use karta hai.',
          funnyExample: {
            scenario: 'The Dynamic Travel Backpack (Vector vs C-Array):\n- Fixed C-Array `int arr[5]` = Small 5-seat auto-rickshaw 🛺 (6th person arrives -> Crash!)\n- STL Vector `vector<int> v` = Magic expandable tourist bus 🚌: Seats automatically double in capacity when full! `v.reserve(100)` books 100 seats upfront so the bus never stops to expand!',
            punchline: 'STL provides pre-built, ultra-optimized, battle-tested data structures!'
          },
          visualDiagram: {
            title: 'C++ STL Container Taxonomy & Time Complexity Matrix',
            nodes: [
              'Sequence Containers: std::vector (O(1) back, O(1) lookup), std::deque, std::list (Doubly linked)',
              'Associative Containers (Sorted Red-Black Tree): std::set, std::map (O(log N) lookup)',
              'Unordered Containers (Hash Tables): std::unordered_set, std::unordered_map (O(1) avg lookup)',
              'Container Adapters: std::stack (LIFO), std::queue (FIFO), std::priority_queue (Max/Min Heap)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Vector Dynamic Growth & Geometric Amortization:',
            steps: [
              'When `v.size() == v.capacity()` on `push_back()`, vector allocates a new memory block of 2× capacity (or 1.5× on MSVC)',
              'Moves elements from old buffer to new buffer via move constructors, then frees old buffer',
              'Amortized Time Complexity: Although single reallocation is O(N), resizing happens exponentially infrequently, giving amortized O(1) push_back time'
            ]
          },
          code: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <string>

int main() {
    // 1. Dynamic Vector with Reserve Optimization
    std::vector<int> scores;
    scores.reserve(10); // Pre-allocate memory capacity to prevent reallocations
    scores.insert(scores.end(), {85, 92, 45, 99, 78, 64});
    scores.emplace_back(100); // In-place construction

    // 2. High-Performance STL IntroSort O(N log N)
    std::sort(scores.begin(), scores.end());

    std::cout << "Sorted Scores: ";
    for (int score : scores) {
        std::cout << score << " ";
    }
    std::cout << "\\n";

    // 3. Hash Map with O(1) Average Lookup
    std::unordered_map<std::string, int> leaderboard;
    leaderboard["Kabir"] = 1850;
    leaderboard["Meera"] = 2100;
    leaderboard["Aman"]  = 1650;

    std::cout << "\\nLeaderboard Standings:\\n";
    for (const auto& [player, xp] : leaderboard) { // C++17 Structured Bindings!
        std::cout << "- " << player << ": " << xp << " XP\\n";
    }

    // Binary Search on Sorted Vector O(log N)
    bool hasPerfectScore = std::binary_search(scores.begin(), scores.end(), 100);
    std::cout << "\\nContains 100 XP: " << (hasPerfectScore ? "YES" : "NO") << std::endl;

    return 0;
}`,
          codeBreakdown: [
            { part: 'scores.reserve(10);', label: 'Pre-allocates heap memory capacity eliminating runtime reallocations and element copying', color: '#3b82f6' },
            { part: 'for (const auto& [player, xp] : leaderboard)', label: 'C++17 structured bindings unpacking map key-value pairs cleanly without boilerplate', color: '#10b981' },
            { part: 'std::sort(scores.begin(), scores.end());', label: 'Hybrid IntroSort algorithm achieving optimal O(N log N) worst-case time complexity', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Out of bounds index access with `v[i]` (use `v.at(i)` if you need bounds checking with exceptions)',
            '❌ Modifying a container (insert/erase) while iterating over it, causing **Iterator Invalidation** crashes'
          ],
          proTips: [
            '💡 Use `emplace_back()` instead of `push_back()` when inserting custom objects to construct them in-place',
            '💡 Prefer `std::unordered_map` for pure lookup speed, and `std::map` when you need sorted keys or range queries'
          ],
          interviewQuestions: [
            'What is the difference between `std::vector::size()` and `std::vector::capacity()`?',
            'What is Iterator Invalidation and when does it occur in `std::vector`?',
            'What is the internal data structure difference between `std::map` and `std::unordered_map`?'
          ],
          miniChallenge: 'Use `std::count_if` with a lambda expression to count how many scores in a vector are greater than 80.',
          quiz: {
            type: 'mcq',
            question: 'C++ mein `std::map` aur `std::unordered_map` mein key search karne ki time complexity kya hoti hai?',
            options: [
              'std::map = O(log N) (Red-Black Tree), std::unordered_map = O(1) average (Hash Table)',
              'Dono O(N) linear time lete hain',
              'std::map O(1) leta hai',
              'std::unordered_map O(N^2) leta hai'
            ],
            answer: 'std::map = O(log N) (Red-Black Tree), std::unordered_map = O(1) average (Hash Table)',
            explanation: '`std::map` is backed by a balanced Red-Black Search Tree giving guaranteed O(log N) operations, whereas `std::unordered_map` uses hashing with O(1) average lookup time.'
          },
          summary: [
            'STL containers dynamic arrays, sets, maps aur queues provide karte hain',
            'C++17 structured bindings map entries ko clean syntax se unpack karti hain',
            'STL algorithms generic reusable high-performance operations dete hain'
          ],
          flashcard: {
            q: 'Vector mein `size()` aur `capacity()` mein kya difference hai?',
            a: '`size()` vector mein currently present elements ki count hai; `capacity()` vector dwara bina naye allocation ke hold kiye ja sakne wale maximum elements ki memory capacity hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: SMART POINTERS & RAII MEMORY MANAGEMENT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Smart Pointers (unique_ptr, shared_ptr) & RAII',
      lessons: [
        {
          id: 'cpp-smart-pointers-raii',
          title: 'Smart Pointers (unique_ptr, shared_ptr, weak_ptr) & RAII Memory Ownership',
          emoji: '🧠',
          xpReward: 50,
          badgeName: 'Memory Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Modern C++ mein raw `new` aur `delete` likhna gunah hai! Smart Pointers (`std::unique_ptr`, `std::shared_ptr`) aur RAII use karo — memory leaks aur dangling pointers ka khatma! 🧠⚡😎"',
            hint: '💡 Masti Sir: "`std::unique_ptr` = Exclusive Ownership (Zero overhead)! `std::shared_ptr` = Shared Reference Counting! `std::weak_ptr` = Circular reference todne ke liye!"',
            success: '🎉 Masti Sir: "RAII automatic memory management and smart pointer ownership mastered! 🔥"',
            mistake: '😅 Masti Sir: "`new` keyword se smart pointer mat banao — ALWAYS use `std::make_unique<T>()` and `std::make_shared<T>()` for single allocation efficiency and exception safety!"'
          },
          englishDef: '**Resource Acquisition Is Initialization (RAII)** ties resource lifetimes (heap memory, file handles, mutex locks) to stack object lifetimes, guaranteeing automatic deallocation upon scope exit. Modern C++ manages dynamic memory via **Smart Pointers** in `<memory>`: **std::unique_ptr** (exclusive ownership, zero runtime overhead), **std::shared_ptr** (shared ownership via atomic reference counting), and **std::weak_ptr** (non-owning observer breaking cyclic references).',
          hinglishExplain: 'Modern C++ Smart Pointers aur RAII ke core concepts:\n1. **RAII Principle**: Resource acquire hote hi object banta hai, aur jaise hi object scope se bahar jata hai uska Destructor automatically resource `free()` / `delete` kar deta hai (zero manual cleanup).\n2. **std::unique_ptr**: Single owner. Ye copy nahi ho sakta (sirf `std::move` se transfer hota hai). Iska runtime overhead 0% hota hai (exact raw pointer jitna fast).\n3. **std::shared_ptr**: Multiple owners. Control block mein reference count track hota hai. Jab aakhri owner destroy hota hai (`ref_count == 0`), tab memory delete hoti hai.\n4. **std::weak_ptr**: Reference count badhaye bina shared_ptr ko observe karta hai (cyclic memory leaks ko prevent karta hai).\n5. **make_unique & make_shared**: Exception-safe single memory allocation provide karte hain.',
          funnyExample: {
            scenario: 'The Dedicated Butler (RAII & Smart Pointers):\n- Raw Pointer (`new/delete`) = Hiring a worker and manually remembering to pay and fire them before leaving the building -> You forget to fire them -> Worker bills you forever (Memory Leak! 💸😱)\n- `std::unique_ptr` = High-Tech Smart Vacuum Robot 🤖: Cleans your room while you are inside -> Automatically docks and shuts down the microsecond you step out of the door! Zero leaks! ✨',
            punchline: 'Smart Pointers clean up memory automatically when the owning variable exits scope!'
          },
          visualDiagram: {
            title: 'std::shared_ptr Reference Counting & Control Block Architecture',
            nodes: [
              'shared_ptr A -> Points to Managed Heap Object + Control Block [ RefCount: 2 | WeakCount: 0 ]',
              'shared_ptr B -> Shares same Managed Heap Object + increments RefCount to 2',
              'A goes out of scope -> RefCount decrements to 1 (Object survives)',
              'B goes out of scope -> RefCount drops to 0 -> Destructor deletes Heap Object automatically!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Circular References Cause Leaks in shared_ptr:',
            steps: [
              'If Node A holds `shared_ptr<Node>` to Node B, and Node B holds `shared_ptr<Node>` back to Node A',
              'When external pointers go out of scope, both RefCounts stay at 1 because they point to each other!',
              'Neither destructor ever executes, creating an uncollectable permanent memory leak',
              'Solution: Break the cycle by declaring one of the pointers as `std::weak_ptr<Node>`'
            ]
          },
          code: `#include <iostream>
#include <memory>
#include <string>

class DatabaseConnection {
private:
    std::string connectionString;
public:
    explicit DatabaseConnection(std::string connStr) : connectionString(std::move(connStr)) {
        std::cout << "[RAII] DB Connection OPENED: " << connectionString << "\\n";
    }

    ~DatabaseConnection() {
        std::cout << "[RAII] DB Connection SAFELY CLOSED: " << connectionString << "\\n";
    }

    void executeQuery(const std::string& query) const {
        std::cout << "Executing SQL: " << query << "\\n";
    }
};

int main() {
    std::cout << "=== 1. std::unique_ptr Exclusive Ownership ===\\n";
    {
        // Allocate unique_ptr cleanly with std::make_unique
        auto db1 = std::make_unique<DatabaseConnection>("postgresql://localhost:5432/codemasti");
        db1->executeQuery("SELECT * FROM courses;");

        // Transfer ownership via std::move
        std::unique_ptr<DatabaseConnection> dbOwner2 = std::move(db1);
        // db1 is now nullptr! dbOwner2 owns the resource.
        std::cout << "Is db1 null after move? " << (db1 == nullptr ? "YES" : "NO") << "\\n";
    } // dbOwner2 exits scope -> Destructor automatically called here!

    std::cout << "\\n=== 2. std::shared_ptr Reference Counting ===\\n";
    {
        std::shared_ptr<DatabaseConnection> shared1 = std::make_shared<DatabaseConnection>("redis://cache:6379");
        std::cout << "Shared Ref Count: " << shared1.use_count() << "\\n"; // 1
        {
            std::shared_ptr<DatabaseConnection> shared2 = shared1; // Shared ownership
            std::cout << "Shared Ref Count inside inner scope: " << shared1.use_count() << "\\n"; // 2
        } // shared2 exits scope -> RefCount drops back to 1
        std::cout << "Shared Ref Count after inner scope: " << shared1.use_count() << "\\n"; // 1
    } // shared1 exits scope -> RefCount drops to 0 -> Connection closed!

    return 0;
}`,
          codeBreakdown: [
            { part: 'auto db1 = std::make_unique<DatabaseConnection>(...);', label: 'Allocates managed heap object returning exclusive-ownership unique_ptr with zero overhead', color: '#10b981' },
            { part: 'std::unique_ptr<DatabaseConnection> dbOwner2 = std::move(db1);', label: 'Explicit move semantics transferring exclusive ownership to new variable pointer', color: '#3b82f6' },
            { part: 'std::make_shared<DatabaseConnection>(...);', label: 'Allocates managed object and control block in single contiguous heap allocation', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `unique_ptr` ko copy karne ki koshish karna (`auto p2 = p1;` fails — use `std::move(p1)`)',
            '❌ Raw pointer se multiple `shared_ptr` create karna (`shared_ptr(rawPtr)`) causing double deletion crashes'
          ],
          proTips: [
            '💡 Default to `std::unique_ptr` unless you explicitly require shared ownership semantics',
            '💡 Use `std::make_unique` and `std::make_shared` instead of `new` for exception-safe memory allocation'
          ],
          interviewQuestions: [
            'What is RAII (Resource Acquisition Is Initialization) and why is it foundational in C++?',
            'What is the difference between `std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr`?',
            'Why does `std::make_shared` perform better than `std::shared_ptr<T>(new T())`?'
          ],
          miniChallenge: 'Create a custom RAII `FileHandle` wrapper class that opens a file in the constructor and closes it in the destructor.',
          quiz: {
            type: 'mcq',
            question: 'C++ mein `std::unique_ptr` ko copy karne par kya hota hai?',
            options: [
              'Compilation Error (unique_ptr is move-only and has deleted copy constructors)',
              'Reference count increment ho jata hai',
              'Dono pointers same memory share karte hain',
              'Object clone ho jata hai'
            ],
            answer: 'Compilation Error (unique_ptr is move-only and has deleted copy constructors)',
            explanation: '`std::unique_ptr` enforces strict single ownership by explicitly deleting its copy constructor and copy assignment operator. It can only be transferred using `std::move()`.'
          },
          summary: [
            'RAII object lifetime ke through automatic resource management guarantee karta hai',
            'unique_ptr zero-overhead exclusive ownership provide karta hai',
            'shared_ptr reference counting use karta hai aur weak_ptr circular references todta hai'
          ],
          flashcard: {
            q: '`std::weak_ptr` ka main purpose kya hota hai?',
            a: 'Ye `std::shared_ptr` dwara managed object ko reference count increment kiye bina observe karta hai, preventing circular dependency memory leaks.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: MOVE SEMANTICS & THE RULE OF 0/3/5
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Move Semantics, Rvalue References & The Rule of 0/3/5',
      lessons: [
        {
          id: 'cpp-move-semantics-rule-of-five',
          title: 'Lvalues vs Rvalues, Move Semantics (std::move) & The Rule of 0/3/5',
          emoji: '📦',
          xpReward: 50,
          badgeName: 'Performance Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "C++11 ka sabse revolutionary feature hai Move Semantics! Heavy 1GB array ko copy karne ki jagah uska memory pointer 1 nanosecond mein transfer (steal) kar lo! 📦⚡😎"',
            hint: '💡 Masti Sir: "Lvalue = jiska memory address hota hai (variable `x`); Rvalue = temporary value jo statement ke baad mar jayegi (`10 + 20`)! `std::move(x)` lvalue ko rvalue reference `T&&` mein cast karta hai!"',
            success: '🎉 Masti Sir: "Move semantics, Rvalue references and the Rule of Five mastered! 🔥"',
            mistake: '😅 Masti Sir: "Rule of Five: Agar aapne Destructor, Copy Constructor, ya Copy Assignment mein se ek bhi custom banaya hai, toh Move Constructor aur Move Assignment bhi define karna mandatory hai!"'
          },
          englishDef: '**Move Semantics** (C++11) eliminates expensive deep copies of temporary objects by transferring ownership of internal heap resources directly using **Rvalue References (`T&&`)** and **`std::move()`**. The **Rule of Five** dictates that managing raw resources requires implementing 5 special member functions: **Destructor, Copy Constructor, Copy Assignment, Move Constructor, and Move Assignment**. The **Rule of Zero** advises designing classes using standard RAII wrappers to avoid writing custom destructors altogether.',
          hinglishExplain: 'Move Semantics aur Rule of 5 ke core concepts:\n1. **Lvalue vs Rvalue**: Lvalue memory mein kisi address par rehti hai (`std::string s = "hello"`). Rvalue temporary expression result hoti hai jo turant destroy hone wali hai (`getName()`).\n2. **Move vs Copy**: Copy naya memory block allocate karke har byte copy karta hai (Expensive). Move purane object ke internal pointer ko steal karke naye object mein daal deta hai aur purane ko `nullptr` kar deta hai (O(1) instant!).\n3. **std::move()**: Ye kuch move nahi karta — ye compiler ko batata hai: "Is variable ko rvalue treat karo, iska saman safely transfer kiya ja sakta hai".\n4. **Rule of 5**: Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment.\n5. **Rule of 0**: Raw pointers ki jagah `std::string`, `std::vector`, `std::unique_ptr` use karo taaki 0 custom destructors likhne padein.',
          funnyExample: {
            scenario: 'Moving to a New House (Copy vs Move Semantics):\n- Copy Semantics 🖨️: Go to furniture store, buy exact identical 500 chairs, tables and sofas, pay ₹10 Lakhs, and deliver to new house! (Super expensive & slow!)\n- Move Semantics 🚚: Pick up the furniture keys from old house and unlock new house in 1 second! Old house is now empty (`nullptr`)! Total cost: ₹0! ✨',
            punchline: 'Move semantics transfers resource ownership instantly without deep memory allocations!'
          },
          visualDiagram: {
            title: 'Copy vs Move Semantics Heap Memory Transfer',
            nodes: [
              'STATE A (Source Vector s1): points to Heap Array Buffer at 0x5000 [ 1, 2, 3, 4, 5 ]',
              'COPY: s2 = s1 -> Allocates NEW Heap Array at 0x9000 -> Copies all 5 elements (Expensive O(N))',
              'MOVE: s3 = std::move(s1) -> s3 takes pointer 0x5000 directly! s1.data set to nullptr! (Instant O(1))'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'The Rule of Five Special Member Functions:',
            steps: [
              '1. Destructor (`~Buffer()`): Frees owned heap resource',
              '2. Copy Constructor (`Buffer(const Buffer&)`): Deep copies heap buffer',
              '3. Copy Assignment (`Buffer& operator=(const Buffer&)`): Cleans old resource + deep copies',
              '4. Move Constructor (`Buffer(Buffer&&) noexcept`): Steals heap pointer + nulls source',
              '5. Move Assignment (`Buffer& operator=(Buffer&&) noexcept`): Frees current + steals source pointer'
            ]
          },
          code: `#include <iostream>
#include <utility>

class DynamicBuffer {
private:
    int* data;
    size_t size;

public:
    // 1. Constructor
    explicit DynamicBuffer(size_t s) : size(s), data(new int[s]()) {
        std::cout << "[Constructed] Buffer of size " << size << "\\n";
    }

    // 2. Destructor
    ~DynamicBuffer() {
        delete[] data;
        std::cout << "[Destroyed] Buffer\\n";
    }

    // 3. Copy Constructor (Deep Copy)
    DynamicBuffer(const DynamicBuffer& other) : size(other.size), data(new int[other.size]) {
        for (size_t i = 0; i < size; i++) data[i] = other.data[i];
        std::cout << "[Deep Copied] Buffer of size " << size << "\\n";
    }

    // 4. Move Constructor (Zero-Cost Pointer Theft)
    DynamicBuffer(DynamicBuffer&& other) noexcept : data(other.data), size(other.size) {
        other.data = nullptr; // Neutralize source pointer!
        other.size = 0;
        std::cout << "[Moved] Stolen resource pointer cleanly!\\n";
    }

    // 5. Move Assignment Operator
    DynamicBuffer& operator=(DynamicBuffer&& other) noexcept {
        if (this != &other) {
            delete[] data; // Free current buffer
            data = other.data; // Steal resource
            size = other.size;
            other.data = nullptr;
            other.size = 0;
            std::cout << "[Move Assigned] Buffer\\n";
        }
        return *this;
    }
};

int main() {
    std::cout << "=== Demonstrating Move Semantics ===\\n";
    DynamicBuffer buf1(1000000); // 1 Million Integers

    // Move construction transfers 4MB memory buffer in 1 nanosecond!
    DynamicBuffer buf2 = std::move(buf1);

    return 0;
}`,
          codeBreakdown: [
            { part: 'DynamicBuffer(DynamicBuffer&& other) noexcept', label: 'Move constructor accepting rvalue reference and marked noexcept for STL container compatibility', color: '#10b981' },
            { part: 'other.data = nullptr;', label: 'Crucial step leaving source in valid destructible state preventing double deletion bugs', color: '#ef4444' },
            { part: 'std::move(buf1)', label: 'Casts lvalue buf1 to rvalue reference enabling compiler to invoke move constructor', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Move constructor mein source pointer ko `nullptr` set karna bhool jana (causes double-free crash when source destructor executes)',
            '❌ Move constructors ko `noexcept` mark na karna (prevents `std::vector` from using move during reallocation)'
          ],
          proTips: [
            '💡 Always mark move constructors and move assignment operators as `noexcept`',
            '💡 Apply the **Rule of Zero**: Use standard RAII wrappers (`std::string`, `std::vector`, `std::unique_ptr`) so the compiler generates perfect special members automatically'
          ],
          interviewQuestions: [
            'What is the difference between an Lvalue and an Rvalue in C++?',
            'What does `std::move()` actually do at runtime?',
            'Explain the Rule of Five and the Rule of Zero with practical examples.'
          ],
          miniChallenge: 'Explain why `std::vector` requires move constructors to be marked `noexcept` to use move during resizing.',
          quiz: {
            type: 'mcq',
            question: 'C++ mein `std::move(x)` function runtime par kya perform karta hai?',
            options: [
              'Ye koi data move nahi karta — ye sirf variable ko ek rvalue reference (`T&&`) mein typecast karta hai',
              'Ye memory ko doosre computer par bhejta hai',
              'Ye memory delete kar deta hai',
              'Ye multithreading start karta hai'
            ],
            answer: 'Ye koi data move nahi karta — ye sirf variable ko ek rvalue reference (`T&&`) mein typecast karta hai',
            explanation: '`std::move()` does not move any bytes at runtime; it is an unconditional static cast that converts an lvalue expression into an rvalue reference, enabling move constructors and move assignment operators to be chosen by overload resolution.'
          },
          summary: [
            'Move semantics unnecessary deep memory copies ko eliminate karta hai',
            'Rvalue references (T&&) temporary resources ko steal karne allow karti hain',
            'The Rule of 5 resource lifecycle correctness guarantee karta hai'
          ],
          flashcard: {
            q: 'C++ mein Rule of Zero kya hota hai?',
            a: 'Agar aapki class raw pointers ki jagah standard RAII types (`std::string`, `std::vector`, `std::unique_ptr`) use karti hai, toh aapko 0 custom destructors ya copy/move operators likhne padte hain (compiler handles everything automatically).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: MULTITHREADING & CONCURRENCY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Multithreading, Concurrency & Synchronization',
      lessons: [
        {
          id: 'cpp-multithreading-concurrency',
          title: 'std::thread, std::jthread, Mutex, Deadlocks & Lock-Free Atomics',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Concurrency Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Modern CPUs mein 16 Cores hote hain! `std::thread`, `std::jthread` (C++20), `std::mutex`, aur lock-free `std::atomic` se high-throughput concurrent programs banao! ⚡🧵😎"',
            hint: '💡 Masti Sir: "Raw `mtx.lock()` aur `mtx.unlock()` mat use karo — use `std::lock_guard<std::mutex>` ya `std::scoped_lock` jo RAII ke through automatically unlock karta hai chahe exception aaye!"',
            success: '🎉 Masti Sir: "Thread synchronization, race condition defense and atomic operations mastered! 🔥"',
            mistake: '😅 Masti Sir: "Do threads agar alag order mein locks acquire karein toh Deadlock ho jata hai — ALWAYS use `std::scoped_lock(m1, m2)` to acquire multiple mutexes atomically!"'
          },
          englishDef: '**Multithreading** in C++ (`<thread>`) executes concurrent operations across CPU hardware threads. Synchronization primitives in `<mutex>` include **std::mutex**, RAII wrappers (**std::lock_guard**, **std::unique_lock**, **std::scoped_lock** for deadlock-free multi-locking), and **std::condition_variable**. Lock-free programming utilizes **std::atomic<T>** (`<atomic>`) executing hardware atomic instructions.',
          hinglishExplain: 'C++ Concurrency aur Multithreading ke core concepts:\n1. **std::thread vs std::jthread (C++20)**: `std::thread` ko `join()` karna zaroori hota hai (warna program crash ho jata hai); `std::jthread` automatically join karta hai aur stop tokens support karta hai.\n2. **Race Condition & Mutex**: Jab 2 threads ek sath shared variable update karte hain, toh data corrupt hota hai. `std::mutex` aur `std::lock_guard` ek time par sirf 1 thread ko critical section mein aane dete hain.\n3. **Deadlock Prevention**: Multiple mutexes acquire karte waqt `std::scoped_lock(m1, m2)` use karo jo deadlock-free algorithm implement karta hai.\n4. **Lock-Free Atomics (`std::atomic<int>`)**: Bina mutex lock overhead ke CPU Compare-And-Swap (CAS) instructions se high-speed thread-safe counter banata hai.',
          funnyExample: {
            scenario: 'The Two Cashiers at One Bank Vault (Deadlock & Mutex):\n- Without Lock: Cashier 1 and Cashier 2 grab the ledger simultaneously -> Overwrite each other\'s transaction! (Data Race! 💥)\n- Deadlock: Cashier 1 locks Door A, wants Door B; Cashier 2 locks Door B, wants Door A -> Both stand staring at each other forever! 🥶\n- `std::scoped_lock`: Master Guard unlocks both Door A and B together atomically! ✨',
            punchline: 'Use RAII lock guards and std::scoped_lock to eliminate concurrency deadlocks!'
          },
          visualDiagram: {
            title: 'std::mutex vs Lock-Free std::atomic Concurrency Architecture',
            nodes: [
              'Thread 1 & Thread 2 attempt to increment shared counter concurrently',
              'MUTEX APPROACH: Thread 1 acquires lock -> Thread 2 sleeps in OS scheduler queue -> Releases lock (Context switch overhead)',
              'ATOMIC APPROACH (std::atomic<int>): Both threads execute hardware CPU atomic increment (FETCH_ADD) with zero OS sleeping!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Data Race vs Race Condition:',
            steps: [
              'Data Race: Two concurrent threads access the same memory location without synchronization, and at least one is a write (Undefined Behavior!)',
              'Race Condition: Flaw in timing or execution order producing incorrect logical program state even if individual accesses are synchronized',
              'Detection: Compile with ThreadSanitizer (`g++ -fsanitize=thread -g main.cpp`) to detect data races at runtime'
            ]
          },
          code: `#include <iostream>
#include <thread>
#include <vector>
#include <mutex>
#include <atomic>

// 1. Lock-free Atomic Counter (Hardware Atomic Instructions)
std::atomic<int> atomicCounter{0};

// 2. Shared Data with Mutex Protection
int sharedBalance = 1000;
std::mutex balanceMutex;

void processTransactions(int threadId) {
    // Increment lock-free atomic counter
    atomicCounter.fetch_add(1, std::memory_order_relaxed);

    // RAII Mutex Lock Guard protecting critical section
    {
        std::lock_guard<std::mutex> lock(balanceMutex);
        sharedBalance += 50;
        std::cout << "[Thread " << threadId << "] Deposited ₹50. New Balance: ₹" << sharedBalance << "\\n";
    } // lock automatically releases here when exiting scope!
}

int main() {
    std::vector<std::thread> workers;

    std::cout << "=== Launching 4 Concurrent Worker Threads ===\\n";
    for (int i = 1; i <= 4; i++) {
        workers.emplace_back(processTransactions, i);
    }

    // Join all threads before main exits
    for (auto& t : workers) {
        if (t.joinable()) {
            t.join();
        }
    }

    std::cout << "\\nFinal Results:\\n";
    std::cout << "Total Atomic Tasks Executed: " << atomicCounter.load() << "\\n";
    std::cout << "Final Reconciled Balance   : ₹" << sharedBalance << std::endl;

    return 0;
}`,
          codeBreakdown: [
            { part: 'std::atomic<int> atomicCounter{0};', label: 'Lock-free thread-safe atomic primitive mapped directly to CPU atomic instructions', color: '#10b981' },
            { part: 'std::lock_guard<std::mutex> lock(balanceMutex);', label: 'RAII lock acquiring mutex on construction and guaranteeing release on scope exit', color: '#3b82f6' },
            { part: 'if (t.joinable()) t.join();', label: 'Mandatory join barrier waiting for worker threads to complete before main process terminates', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `std::thread` ko bina `join()` ya `detach()` kiye destruct hone dena (causes `std::terminate` program crash)',
            '❌ Raw mutex `.lock()` call karke exception aane par `.unlock()` skip ho jana (causes permanent deadlock)'
          ],
          proTips: [
            '💡 In C++20, prefer `std::jthread` which automatically joins in its destructor and supports cooperative cancellation via stop tokens',
            '💡 Use ThreadSanitizer (`-fsanitize=thread`) during automated unit testing to catch subtle race conditions'
          ],
          interviewQuestions: [
            'What is the difference between a Data Race and a Race Condition in C++?',
            'How does `std::scoped_lock` prevent deadlocks when acquiring multiple mutexes?',
            'What is the difference between `std::thread` and C++20 `std::jthread`?'
          ],
          miniChallenge: 'Write a thread-safe Singleton pattern using `std::call_once` and `std::once_flag`.',
          quiz: {
            type: 'mcq',
            question: 'C++ mein do ya do se zyada mutexes ko ek sath bina deadlock ke acquire karne ke liye kaunsa RAII lock use karna recommended hai?',
            options: ['std::scoped_lock (C++17)', 'std::lock_guard on each mutex sequentially', 'Raw mtx1.lock(); mtx2.lock();', 'std::atomic'],
            answer: 'std::scoped_lock (C++17)',
            explanation: '`std::scoped_lock` (C++17) uses a deadlock-avoidance algorithm (equivalent to `std::lock`) to acquire all provided mutexes atomically before locking them.'
          },
          summary: [
            'std::thread aur std::jthread multi-core CPU execution empower karte hain',
            'RAII lock guards (std::lock_guard, std::scoped_lock) mutex release safety ensure karte hain',
            'std::atomic lock-free hardware synchronization provide karta hai'
          ],
          flashcard: {
            q: 'C++20 `std::jthread` ka `std::thread` ke mukable sabse bada fayda kya hai?',
            a: '`std::jthread` (Joining Thread) destructor mein automatically `join()` call karta hai (preventing `std::terminate` crashes) aur cooperative cancellation token support karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: INDUSTRY CAPSTONE & FAANG C++ INTERVIEW MASTERY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Real-World Industry Projects & FAANG C++ Interview Mastery',
      lessons: [
        {
          id: 'cpp-projects-faang-interview-mastery',
          title: 'Modular CMake Application, Multithreaded Task Queue & Top 35 FAANG C++ Questions',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'C++ Master Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Modern C++, OOP, STL, Smart Pointers, RAII, Move Semantics, Multithreading, aur CMake — sab integrate karke C++ Software Engineering master karenge! 🏆⚡😎"',
            hint: '💡 Masti Sir: "FAANG C++ interview mein puchte hain: \'std::vector internal reallocation kaise handle karta hai?\' Explain: Capacity doubling, Move constructors with noexcept, aur Amortized O(1) time!"',
            success: '🥳 Masti Sir: "Outstanding achievement! You have mastered Modern C++, High-Performance Memory Management, and Systems Engineering! You are now a Certified C++ Software Engineer! 🌟"',
            mistake: '😅 Masti Sir: "Interviews mein raw pointer ownership mat dikhana — always demonstrate modern C++ RAII with `std::unique_ptr` and `std::string_view`!"'
          },
          englishDef: 'The final Capstone synthesizes modern C++ software engineering: **CMake Modular Project Configuration**, **Thread-Safe Work Queue Architecture** (`std::condition_variable`, `std::mutex`), **Smart Pointer Ownership Hierarchies**, **Modern C++20 Features**, and comprehensive preparation for **Top 35 FAANG C++ Systems & Software Engineering Interview Questions**.',
          hinglishExplain: 'Is Final Capstone mein hum modern C++ software engineering ke professional practices build karte hain: CMake build scripts, Thread-Safe Work Queues with condition variables, Smart Pointers architecture, aur FAANG systems & game engine engineering interview questions ki complete preparation shamil hai.',
          funnyExample: {
            scenario: 'The FAANG Principal Systems Engineer Interview:\n- Interviewer: "Design a high-throughput thread-safe task processing engine in C++." 🏢\n- Candidate: "1. Thread pool of worker threads synchronized with `std::condition_variable`\n2. Task queue guarded by `std::mutex` with RAII `std::unique_lock`\n3. Tasks encapsulated as `std::packaged_task<void()>`\n4. Zero-copy move semantics on queue push\n5. Graceful shutdown with atomic stop token flag!" 🎯\n- Interviewer: "Flawless modern C++ design! Hired as Lead Systems Architect!" 🚀',
            punchline: 'From beginner to certified modern high-performance C++ Systems & Software Engineer!'
          },
          visualDiagram: {
            title: 'Modern Multithreaded Task Queue Architecture in C++',
            nodes: [
              'Producer Threads push Tasks via Move Semantics (std::move(task))',
              'Thread-Safe Task Queue (Guarded by std::mutex & std::condition_variable)',
              'Worker Thread Pool (std::jthread 1, std::jthread 2, std::jthread 3, std::jthread 4)',
              'Condition Variable notifies available worker -> Executes task -> Returns std::future result!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Top C++ Interview Gotchas Checklist:',
            steps: [
              '1. Diamond Problem: Solved by `class B : virtual public A` (Virtual Base Classes)',
              '2. SFINAE & Concepts: Substitution Failure Is Not An Error replaced by C++20 `requires` clauses',
              '3. Small String Optimization (SSO): Short strings (<15 bytes) stored directly on stack without heap allocation',
              '4. Perfect Forwarding: `template<typename T> void wrapper(T&& arg) { target(std::forward<T>(arg)); }`'
            ]
          },
          code: `# ── PRODUCTION CMakeLists.txt SPECIFICATION (CMakeLists.txt) ──
cmake_minimum_required(VERSION 3.20)
project(CodeMastiEngine VERSION 2.0.0 LANGUAGES CXX)

# Enforce Modern C++20 Standard
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Enable Strict Compiler Warnings and AddressSanitizer in Debug Mode
if (CMAKE_BUILD_TYPE STREQUAL "Debug")
    add_compile_options(-Wall -Wextra -Wpedantic -fsanitize=address,undefined -g)
    add_link_options(-fsanitize=address,undefined)
else()
    add_compile_options(-O3 -DNDEBUG)
endif()

# Declare Executable Target
add_executable(codemasti_app
    src/main.cpp
    src/TaskQueue.cpp
    src/DatabaseClient.cpp
)

# Target Include Directories
target_include_directories(codemasti_app PRIVATE include)

# Link Threading Library
find_package(Threads REQUIRED)
target_link_libraries(codemasti_app PRIVATE Threads::Threads)`,
          codeBreakdown: [
            { part: 'set(CMAKE_CXX_STANDARD 20)', label: 'Mandates ISO C++20 modern standard compliance across GCC, Clang, and MSVC', color: '#3b82f6' },
            { part: 'add_compile_options(-fsanitize=address,undefined)', label: 'Integrates AddressSanitizer and UndefinedBehaviorSanitizer during debug testing', color: '#ef4444' },
            { part: 'target_link_libraries(... Threads::Threads)', label: 'Portably links OS native threading library for high-throughput concurrency', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ CMakeLists.txt mein global `set(CMAKE_CXX_FLAGS ...)` use karna instead of target-specific `target_compile_options`',
            '❌ Technical interviews mein raw `new/delete` code likhna without mentioning smart pointers'
          ],
          proTips: [
            '💡 Always mention Modern C++ features (C++17/C++20: Structured bindings, string_view, Concepts, std::jthread) during FAANG interviews to stand out',
            '💡 In technical whiteboard rounds, write exception-safe code by default utilizing RAII wrappers'
          ],
          interviewQuestions: [
            'What is Small String Optimization (SSO) and how does it optimize `std::string` memory in modern C++?',
            'What is Perfect Forwarding and how does `std::forward` work with Universal/Forwarding References (`T&&`)?',
            'How do C++20 Concepts improve template metaprogramming over traditional SFINAE (`std::enable_if`)?'
          ],
          miniChallenge: 'Create a thread-safe `ThreadSafeQueue<T>` template class in C++ using `std::mutex` and `std::condition_variable`.',
          quiz: {
            type: 'mcq',
            question: 'Modern C++ mein "Small String Optimization" (SSO) ka kya benefit hota hai?',
            options: [
              'Chhoti strings (usually < 15-22 bytes) ke liye Heap memory allocation avoid karke unhe direct Stack object buffer mein store karta hai',
              'Strings ko zip compress kar deta hai',
              'Strings ko uppercase bana deta hai',
              'Internet usage kam karta hai'
            ],
            answer: 'Chhoti strings (usually < 15-22 bytes) ke liye Heap memory allocation avoid karke unhe direct Stack object buffer mein store karta hai',
            explanation: 'Small String Optimization (SSO) uses an internal union inside `std::string` to store short strings directly on the stack, eliminating dynamic heap allocations for short text.'
          },
          summary: [
            'CMake cross-platform modern C++ build configuration automate karta hai',
            'Modern multithreading task queues scalable parallel backend architecture provide karti hain',
            'CodeMasti C++ Architecture high-performance enterprise systems ke liye certified hai'
          ],
          flashcard: {
            q: 'C++ mein Perfect Forwarding kya hoti hai?',
            a: 'Ek generic programming technique jo `std::forward<T>(arg)` aur universal references (`T&&`) use karke argument ke exact value category (lvalue vs rvalue) ko preserve karke doosre function ko pass karti hai.'
          }
        }
      ]
    }
  ]
};

export default cppCourse;
