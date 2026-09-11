const CHAPTER_BLUEPRINTS = [
  {
    chapterTitle: 'Chapter 1: Python Basics & Environment Setup',
    topics: [
      ['python-what-is-python', 'What is Python?', 'Python is a high-level, interpreted, general-purpose programming language known for its clean syntax, rapid developer productivity, and vast ecosystem.', 'Python ek aisi programming language hai jisse web backend, automation, AI, data analytics aur scripts easily banaye ja sakte hain. Iska syntax English jaisa simple hota hai.', 'print("Hello Python! Welcome to CodeMasti.")', 'Hello Python! Welcome to CodeMasti.'],
      ['python-history', 'History of Python', 'Python was created by Guido van Rossum and released in 1991 to prioritize human readability and productivity.', 'Python ka goal tha code ko simple aur intuitive banana, taaki developers boilerplates ki jagah actual problem solving par focus karein.', 'creator = "Guido van Rossum"\nyear = 1991\nprint(f"{creator} created Python in {year}")', 'Guido van Rossum created Python in 1991'],
      ['python-why-python', 'Why Python?', 'Python is versatile, cross-platform, dynamically typed, and powered by thousands of mature libraries.', 'Python isliye worldwide #1 hai kyunki ek hi language se web APIs, scripting, data engineering aur machine learning sab possible hai.', 'uses = ["Web APIs", "Automation", "AI/ML", "Data Analytics"]\nprint(", ".join(uses))', 'Web APIs, Automation, AI/ML, Data Analytics'],
      ['python-features', 'Features of Python', 'Python features dynamic typing, automatic memory management via garbage collection, multi-paradigm support (OOP/Functional), and an extensive standard library.', 'Python mein data type manually declare nahi karna padta, memory automatic manage hoti hai, aur "Batteries Included" philosophy se ready-made tools milte hain.', 'language = "Python"\nprint(f"Language: {language.upper()} | Dynamic Typing: True")', 'Language: PYTHON | Dynamic Typing: True'],
      ['python-applications', 'Applications of Python', 'Python powers web applications (FastAPI/Django), DevOps scripts, network automation, testing suites (Pytest), and AI pipelines.', 'Python real world mein high-traffic APIs, automation bots, ETL data pipelines, automated QA suites aur cloud microservices mein use hota hai.', 'apps = ["FastAPI Backends", "DevOps Automation", "Data Science", "Pytest QA"]\nfor app in apps:\n    print(f"- {app}")', '- FastAPI Backends\n- DevOps Automation\n- Data Science\n- Pytest QA'],
      ['python-installing', 'Installing Python & REPL', 'Installing Python provides the Python 3 interpreter, standard libraries, pip package manager, and interactive REPL terminal.', 'Python install karke terminal par REPL (Read-Eval-Print Loop) start karke live Python commands test ki ja sakti hain.', 'import sys\nprint(f"Python Version: {sys.version.split()[0]}")', 'Python Version: 3.12.0'],
      ['python-ide-setup', 'IDE Setup & VS Code', 'An IDE like VS Code configured with the Python and Pylance extensions provides intelligent linting, auto-completion, and debugging.', 'VS Code mein Python extension install karke auto-complete, error detection, formatting aur breakpoint debugging fast ho jati hai.', 'editor = "VS Code"\nprint(f"Configured {editor} with Pylance and Black formatter")', 'Configured VS Code with Pylance and Black formatter'],
      ['python-first-program', 'First Program', 'A first Python program outputs text to the standard output stream using the built-in print() function.', 'First program mein hum interpreter verify karte hain aur screen par output print karte hain.', 'print("Namaste CodeMasti! Python learning started.")', 'Namaste CodeMasti! Python learning started.'],
      ['python-comments', 'Comments & Docstrings', 'Comments (#) explain logic for developers and are ignored by the interpreter, while docstrings (""") document modules, classes, and functions.', 'Comments (#) code ke sticky notes hain jo execution mein ignore hote hain, jabki docstrings documentation generate karne mein use hoti hain.', '# Single line comment\n"""Multi-line docstring for documentation"""\nprint("Comments guide humans, Python ignores them")', 'Comments guide humans, Python ignores them'],
      ['python-keywords', 'Keywords & Identifiers', 'Keywords are reserved identifiers (if, def, class, return, async, await) with predefined semantic meaning that cannot be used as variable names.', 'Keywords Python ke reserved words hain jinhe variable ya function ka naam nahi banaya ja sakta.', 'import keyword\nprint(f"Total Keywords: {len(keyword.kwlist)} | Contains async: {\'async\' in keyword.kwlist}")', 'Total Keywords: 35 | Contains async: True'],
      ['python-indentation', 'Indentation & Code Blocks', 'Python uses whitespace indentation (standard 4 spaces) rather than curly braces to define structural code blocks.', 'Python mein curly braces {} ki jagah 4 spaces ki indentation se blocks (if, for, def) define hote hain.', 'if True:\n    print("Inside indented block")\n    print("Still inside block")\nprint("Outside block")', 'Inside indented block\nStill inside block\nOutside block'],
      ['python-variables', 'Variables & Naming Conventions', 'Variables are named memory references storing data values following snake_case naming conventions.', 'Variable ek dabba (box) hai jisme value store hoti hai. Python snake_case convention (e.g. user_age, total_marks) follow karta hai.', 'user_name = "Kabir"\nuser_age = 24\nprint(f"User: {user_name}, Age: {user_age}")', 'User: Kabir, Age: 24'],
      ['python-input-output', 'Input & Output (I/O)', 'The input() function reads user input as a string from stdin, and print() formats output to stdout.', 'input() user se text leta hai (by default string format) aur print() calculated result display karta hai.', 'name = "Ali"  # Simulated input("Enter name: ")\nage = int("22")  # Simulated int(input())\nprint(f"Hello {name}, in 5 years you will be {age + 5}")', 'Hello Ali, in 5 years you will be 27']
    ]
  },
  {
    chapterTitle: 'Chapter 2: Data Types & Type Conversion',
    topics: [
      ['python-numbers', 'Numbers (int, float, complex)', 'Python supports arbitrary-precision integers (int), IEEE 754 floating-point numbers (float), and complex numbers.', 'Python mein integers kitne bhi bade ho sakte hain (no integer overflow), decimals float hote hain aur a+bj complex numbers hote hain.', 'count = 42\nprice = 99.99\nz = 2 + 3j\nprint(type(count), type(price), type(z))', "<class 'int'> <class 'float'> <class 'complex'>"],
      ['python-strings', 'Strings (str)', 'Strings are immutable sequences of Unicode characters enclosed in single, double, or triple quotes.', 'Strings immutable text sequences hoti hain jinhe ek baar banne ke baad directly modify nahi kiya ja sakta.', 'text = "CodeMasti"\nprint(f"Length: {len(text)} | Upper: {text.upper()}")', 'Length: 9 | Upper: CODEMASTI'],
      ['python-boolean', 'Boolean (bool & Truthiness)', 'Boolean values are True and False. In Python, empty collections, 0, None, and empty strings evaluate to False in boolean contexts.', 'Booleans True aur False hote hain. Python mein 0, "", [], {}, None False maane jaate hain, baaki sab True hote hain.', 'is_active = True\nprint(bool(0), bool(""), bool([1, 2]), bool(is_active))', 'False False True True'],
      ['python-none', 'NoneType (None)', 'None is a singleton object used to signal the absence of a value, uninitialized state, or default return value.', 'None ka matlab "kuch nahi" (null). Jab function kuch return na kare toh wo by default None return karta hai.', 'def do_nothing():\n    pass\nresult = do_nothing()\nprint(result, result is None)', 'None True'],
      ['python-type-conversion', 'Type Conversion (Casting)', 'Explicit type casting converts values between types using constructor functions int(), float(), str(), bool(), list(), tuple(), set(), dict().', 'Type conversion se string ko integer (`int("25")`) ya number ko string banaya jata hai.', 'raw_input = "150"\nquantity = int(raw_input)\nunit_price = float("19.5")\nprint(f"Total: {quantity * unit_price}")', 'Total: 2925.0'],
      ['python-type-checking', 'Type Checking (type & isinstance)', 'The type() function inspects an object class, while isinstance() checks if an object is an instance of a class or tuple of classes supporting inheritance.', 'isinstance(x, int) verify karta hai ki value expected type ki hai ya nahi (recommended over type() for inheritance support).', 'score = 95.5\nprint(isinstance(score, (int, float)), type(score) is float)', 'True True']
    ]
  },
  {
    chapterTitle: 'Chapter 3: Operators & Expressions',
    topics: [
      ['python-arithmetic-operators', 'Arithmetic Operators', 'Arithmetic operators include + (addition), - (subtraction), * (multiplication), / (float division), // (floor integer division), % (modulus), and ** (exponentiation).', 'Arithmetic operators calculation ke liye use hote hain: `/` hamesha float deta hai, `//` integer floor value deta hai, aur `**` power calculate karta hai.', 'print(10 / 3)   # Float division\nprint(10 // 3)  # Floor division\nprint(2 ** 4)   # Exponentiation', '3.3333333333333335\n3\n16'],
      ['python-assignment-operators', 'Assignment Operators', 'Assignment operators (=, +=, -=, *=, /=, //=, %=, **=) update and store values in variables in-place.', 'Assignment operators variable ki value ko update karne ka clean shortcut provide karte hain.', 'counter = 10\ncounter += 5\ncounter *= 2\nprint(f"Final counter: {counter}")', 'Final counter: 30'],
      ['python-comparison-operators', 'Comparison Operators', 'Comparison operators (==, !=, >, <, >=, <=) evaluate expressions and return Boolean True or False.', 'Comparison operators values ko compare karke True ya False return karte hain.', 'age = 20\nprint(age >= 18, age != 21, 10 < age < 30)', 'True True True'],
      ['python-logical-operators', 'Logical Operators', 'Logical operators (and, or, not) evaluate Boolean conditions with short-circuit evaluation semantics.', 'Logical operators multiple conditions ko check karte hain. `and` dono true hone par true deta hai, `or` koi ek true hone par.', 'is_logged_in = True\nhas_permission = False\nprint(is_logged_in and has_permission, is_logged_in or has_permission, not has_permission)', 'False True True'],
      ['python-bitwise-operators', 'Bitwise Operators', 'Bitwise operators (&, |, ^, ~, <<, >>) perform operations on individual binary bits of integers.', 'Bitwise operators binary representation (0s and 1s) par kaam karte hain.', 'a = 5  # 0101 in binary\nb = 3  # 0011 in binary\nprint(a & b, a | b, a ^ b, a << 1)', '1 7 6 10'],
      ['python-identity-operators', 'Identity Operators (is vs ==)', 'The == operator checks value equality, while the is operator checks object identity (whether both variables point to the exact same memory address in RAM).', '`==` check karta hai values equal hain ya nahi; `is` check karta hai ki kya dono variables memory mein exact same object ko point kar rahe hain.', 'list1 = [1, 2, 3]\nlist2 = [1, 2, 3]\nlist3 = list1\nprint(list1 == list2, list1 is list2, list1 is list3)', 'True False True'],
      ['python-membership-operators', 'Membership Operators (in & not in)', 'Membership operators (in, not in) test whether a sequence contains a specified element with O(1) lookup on sets/dicts and O(N) on lists/strings.', '`in` operator list, string, set ya dictionary mein kisi item ki presence check karta hai.', 'skills = ["Python", "FastAPI", "PostgreSQL"]\nprint("Python" in skills, "Java" not in skills)', 'True True']
    ]
  },
  {
    chapterTitle: 'Chapter 4: Strings Mastery & Formatting',
    topics: [
      ['python-creating-strings', 'Creating Strings & Raw Strings', 'Strings support single, double, triple quotes (multi-line), and raw strings (r"...") which suppress escape sequence parsing.', 'Strings single, double ya triple quotes mein banti hain. Raw strings `r"C:\\path"` escape characters (`\\n`) ko disable kar deti hain.', 'normal = "Line1\\nLine2"\nraw = r"Line1\\nLine2"\nprint(len(normal.splitlines()), raw)', '2 Line1\\nLine2'],
      ['python-string-indexing', 'String Indexing (Positive & Negative)', 'Positive indexing starts from 0 at the beginning, while negative indexing starts from -1 at the end of the string.', 'Indexing se character access hota hai: `word[0]` pehla character deta hai aur `word[-1]` aakhri character deta hai.', 'lang = "Python"\nprint(lang[0], lang[-1], lang[2])', 'P n t'],
      ['python-string-slicing', 'String Slicing [start:stop:step]', 'Slicing extracts substrings with syntax [start:stop:step]. Step can be negative to reverse strings.', 'Slicing `[start:stop:step]` se substring nikalte hain. `[::-1]` string ko instant reverse kar deta hai.', 'text = "CodeMasti"\nprint(text[0:4], text[4:], text[::-1])', 'Code Masti itsaMedoC'],
      ['python-string-methods', 'String Methods Mastery', 'String methods include upper(), lower(), strip(), replace(), split(), join(), find(), startswith(), and endswith().', 'String methods ready-made text operations hain: `strip()` whitespace hatata hai, `split()` list banata hai, `join()` list ko string banata hai.', 'raw = "  apple,banana,mango  "\nfruits = [f.strip().title() for f in raw.split(",")]\nprint(" | ".join(fruits))', 'Apple | Banana | Mango'],
      ['python-escape-characters', 'Escape Characters', 'Escape sequences (\\n newline, \\t tab, \\\\ backslash, \\\' quote) represent special characters inside string literals.', 'Escape sequences special characters print karne mein madad karte hain.', 'print("Course:\\tPython\\nStatus:\\t\\"Active\\"")', 'Course:\tPython\nStatus:\t"Active"'],
      ['python-string-formatting', 'String Formatting (.format() & %)', 'String formatting dynamically injects variable values into templates via % formatting or str.format().', 'str.format() method templates mein placeholders `{}` ko values se replace karta hai.', 'template = "Student: {}, Score: {:.1f}%"\nprint(template.format("Kabir", 94.678))', 'Student: Kabir, Score: 94.7%'],
      ['python-f-strings', 'f-Strings (Formatted String Literals)', 'f-Strings (Python 3.6+) evaluate embedded expressions and format specifiers inside {expression} at runtime with optimal C-level performance.', 'f-strings modern Python ka sabse clean aur fast formatting method hai jisme `{}` ke andar direct variables aur expressions likhe ja sakte hain.', 'item = "Laptop"\nprice = 75000\ntax = 0.18\nprint(f"Item: {item} | Total: ₹{price * (1 + tax):,.2f}")', 'Item: Laptop | Total: ₹88,500.00']
    ]
  },
  {
    chapterTitle: 'Chapter 5: Control Flow & Conditionals',
    topics: [
      ['python-if', 'if Statement', 'The if statement executes a block of code only when its Boolean condition evaluates to True.', 'if statement check karta hai agar condition True hai tabhi andar ka block execute hoga.', 'score = 85\nif score >= 50:\n    print("Status: Passed")', 'Status: Passed'],
      ['python-else', 'else Statement', 'The else block provides an alternative execution path when preceding if/elif conditions evaluate to False.', 'else tab execute hota hai jab if ki condition False ho jati hai.', 'temperature = 12\nif temperature > 25:\n    print("Warm weather")\nelse:\n    print("Cold weather")', 'Cold weather'],
      ['python-elif', 'elif Ladder', 'The elif ladder evaluates multiple sequential mutually exclusive conditions until the first truthy condition matches.', 'elif ladder multiple choices ko step-by-step evaluate karti hai.', 'marks = 78\nif marks >= 90: grade = "A+"\nelif marks >= 75: grade = "A"\nelif marks >= 60: grade = "B"\nelse: grade = "C"\nprint(f"Grade: {grade}")', 'Grade: A'],
      ['python-nested-if', 'Nested Conditions & Conditional Expressions', 'Nested conditions place if blocks inside other blocks. Ternary conditional expressions (value_if_true if condition else value_if_false) provide concise inline logic.', 'Nested if conditions ke andar aur conditions check karti hain. Ternary expression ek line mein if-else likhne ka shortcut hai.', 'is_member = True\nage = 22\nstatus = "Discounted" if is_member and age >= 18 else "Standard"\nprint(f"Ticket: {status}")', 'Ticket: Discounted'],
      ['python-match-case', 'Structural Pattern Matching (match-case)', 'Structural pattern matching (Python 3.10+) matches values and complex data structures against patterns with case statements and wildcards (_).', 'match-case modern pattern matching hai jo switch-case se zyada powerful hai (data shapes aur types ko match kar sakta hai).', 'status_code = 404\nmatch status_code:\n    case 200:\n        print("200 OK")\n    case 404:\n        print("404 Not Found")\n    case _:\n        print("Other Status")', '404 Not Found']
    ]
  },
  {
    chapterTitle: 'Chapter 6: Loops & Iteration',
    topics: [
      ['python-for-loop', 'for Loops & range()', 'The for loop iterates over sequences and iterables. The range(start, stop, step) function generates arithmetic progressions in memory-efficient lazy ranges.', 'for loop lists, strings aur range() sequence ke har element par loop chalata hai.', 'total = 0\nfor n in range(1, 6): # 1, 2, 3, 4, 5\n    total += n\nprint(f"Sum 1 to 5: {total}")', 'Sum 1 to 5: 15'],
      ['python-while-loop', 'while Loops', 'The while loop repeatedly executes a code block as long as its controlling Boolean condition evaluates to True.', 'while loop tab tak repeat hota hai jab tak condition True rehti hai.', 'count = 3\nwhile count > 0:\n    print(f"Countdown: {count}")\n    count -= 1\nprint("Blast off!")', 'Countdown: 3\nCountdown: 2\nCountdown: 1\nBlast off!'],
      ['python-break', 'break Statement', 'The break statement immediately terminates the innermost executing loop.', 'break loop ka emergency stop button hai jo loop ko instantly terminate kar deta hai.', 'for num in [10, 20, -5, 30]:\n    if num < 0:\n        print("Negative found, breaking!")\n        break\n    print(f"Valid: {num}")', 'Valid: 10\nValid: 20\nNegative found, breaking!'],
      ['python-continue', 'continue Statement', 'The continue statement skips the remainder of the current iteration and jumps to the next evaluation cycle of the loop.', 'continue current round ko skip karke seedhe agle iteration par chala jata hai.', 'evens = []\nfor n in range(6):\n    if n % 2 != 0:\n        continue\n    evens.append(n)\nprint(f"Evens: {evens}")', 'Evens: [0, 2, 4]'],
      ['python-pass', 'pass Statement', 'The pass statement is a null operation placeholder used where syntax requires a statement but no action is needed.', 'pass ek khaali placeholder hai jo syntax error se bachata hai jab code baad mein likhna ho.', 'for i in range(3):\n    pass  # TODO: Implement later\nprint("Loop executed cleanly with pass")', 'Loop executed cleanly with pass'],
      ['python-nested-loops', 'Nested Loops & Loop else Clauses', 'Loops can be nested inside other loops. The else block on loops executes only if the loop terminates normally without encountering a break statement.', 'Nested loops matrix/grid traverse karte hain. Loop ka `else` block tabhi chalta hai agar loop bina `break` ke poora complete hua ho.', 'target = 7\nfor n in [2, 4, 6, 8]:\n    if n == target: break\nelse:\n    print(f"{target} not found in collection")', '7 not found in collection']
    ]
  },
  {
    chapterTitle: 'Chapter 7: Functions & Functional Tools',
    topics: [
      ['python-creating-functions', 'Defining Functions (def & return)', 'Functions are modular, reusable blocks of logic declared with the def keyword that accept arguments and return computed results.', 'Functions reusable recipes hain: `def` se define hote hain aur `return` se result wapas bhejte hain.', 'def calculate_area(width, height):\n    return width * height\nprint(f"Area: {calculate_area(5, 8)}")', 'Area: 40'],
      ['python-parameters', 'Parameters (Positional, Default, Keyword)', 'Python functions support positional parameters, default argument values, and explicit keyword arguments.', 'Parameters function ke inputs hain. Default arguments optional values dete hain, aur keyword arguments se order matter nahi karta.', 'def create_user(name, role="student", is_active=True):\n    return {"name": name, "role": role, "active": is_active}\nprint(create_user("Aman", role="admin"))', "{'name': 'Aman', 'role': 'admin', 'active': True}"],
      ['python-return', '*args & **kwargs (Variable Arguments)', '*args packs excess positional arguments into a tuple, while **kwargs packs excess keyword arguments into a dictionary.', '*args variable positional arguments leta hai (tuple) aur **kwargs keyword arguments leta hai (dictionary).', 'def build_profile(user_id, *skills, **metadata):\n    return {"id": user_id, "skills": list(skills), "meta": metadata}\nprint(build_profile(101, "Python", "FastAPI", role="lead", city="Mumbai"))', "{'id': 101, 'skills': ['Python', 'FastAPI'], 'meta': {'role': 'lead', 'city': 'Mumbai'}}"],
      ['python-scope', 'Scope & Namespaces (LEGB Rule)', 'Python resolves variable names using the LEGB rule: Local -> Enclosing -> Global -> Built-in. The global and nonlocal keywords modify scope bindings.', 'Scope LEGB rule follow karta hai: Local -> Enclosing -> Global -> Built-in. `global` aur `nonlocal` outer variables ko modify karne dete hain.', 'x = "global"\ndef outer():\n    x = "enclosing"\n    def inner():\n        nonlocal x\n        x = "modified enclosing"\n    inner()\n    return x\nprint(outer(), x)', 'modified enclosing global'],
      ['python-lambda', 'Lambda & Higher-Order Functions', 'Lambda functions are concise anonymous functions written in a single expression, frequently paired with map(), filter(), and sorted(key=...).', 'Lambda ek line ka anonymous function hota hai jo sorting aur filtering mein shortcut deta hai.', 'users = [{"name": "Aman", "score": 88}, {"name": "Kabir", "score": 95}]\nusers_sorted = sorted(users, key=lambda u: u["score"], reverse=True)\nprint(users_sorted[0]["name"])', 'Kabir'],
      ['python-recursion', 'Recursion & Call Stack', 'Recursion occurs when a function calls itself to solve smaller subproblems, requiring a base case to terminate execution before hitting the recursion depth limit.', 'Recursion mein function khud ko call karta hai jab tak Base Case hit na ho jaye.', 'def factorial(n):\n    if n <= 1: return 1  # Base case\n    return n * factorial(n - 1)  # Recursive case\nprint(f"5! = {factorial(5)}")', '5! = 120']
    ]
  },
  {
    chapterTitle: 'Chapter 8: Data Structures: Lists & Tuples',
    topics: [
      ['python-list-intro', 'List Fundamentals', 'Lists are ordered, mutable collections of heterogeneous elements enclosed in square brackets [].', 'List ek mutable shopping bag hai jisme kisi bhi type ke multiple items ordered way mein store hote hain.', 'courses = ["Python", "JavaScript", "SQL"]\ncourses.append("DevOps")\nprint(f"Total: {len(courses)} | First: {courses[0]}")', 'Total: 4 | First: Python'],
      ['python-list-indexing', 'List Indexing & Operations', 'Lists support 0-based indexing, negative indexing, containment testing (in), concatenation (+), and repetition (*).', 'Lists mein positive aur negative indexing se elements access aur modify kiye ja sakte hain.', 'nums = [10, 20, 30, 40]\nnums[1] = 25  # In-place modification\nprint(nums, nums[-1])', '[10, 25, 30, 40] 40'],
      ['python-list-slicing', 'List Slicing & Copying', 'Slicing extracts sublists [start:stop:step]. Slicing [:] creates a shallow copy of the list.', 'List slicing sublist banati hai. `nums[:]` ya `nums.copy()` shallow copy banata hai.', 'nums = [0, 1, 2, 3, 4, 5]\nsub = nums[1:5:2]\nprint(sub)', '[1, 3]'],
      ['python-list-methods', 'List Methods (append, extend, pop, sort)', 'Common list methods include append(), extend(), insert(), remove(), pop(), clear(), sort(reverse=...), and reverse().', 'List methods ready-made operations hain: `append()` single item jodta hai, `extend()` doosri list merge karta hai, `pop()` item nikaalta hai, `sort()` order karta hai.', 'items = [3, 1, 4]\nitems.extend([1, 5])\nitems.sort()\npopped = items.pop()\nprint(items, f"Popped: {popped}")', '[1, 1, 3, 4] Popped: 5'],
      ['python-list-comprehension', 'List Comprehensions', 'List comprehensions provide a concise, optimized syntax [expr for item in iterable if condition] to transform and filter lists.', 'List comprehension loop aur filtering ko ek fast, readable single-line expression mein convert kar deta hai.', 'squares = [x * x for x in range(10) if x % 2 == 0]\nprint(f"Even squares: {squares}")', 'Even squares: [0, 4, 16, 36, 64]'],
      ['python-nested-lists', 'Nested Lists & 2D Matrices', 'Nested lists represent multi-dimensional data structures like 2D grids and matrices accessed via chained indices matrix[row][col].', 'Nested lists 2D grid/table jaisi hoti hain jahan row aur column index se cell access hota hai.', 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\nprint(matrix[1][2], [row[0] for row in matrix])', '6 [1, 4]'],
      ['python-tuple-basics', 'Tuples & Immutability', 'Tuples are ordered, immutable sequences enclosed in parentheses () that protect constant data from modification and are hashable for dictionary keys.', 'Tuple ek sealed immutable collection hai. Banne ke baad iske items change nahi kiye ja sakte, isliye ye dictionary keys ban sakte hain.', 'db_config = ("localhost", 5432, "postgres")\nprint(db_config[0], type(db_config))', "localhost <class 'tuple'>"],
      ['python-tuple-indexing', 'Tuple Indexing & Slicing', 'Tuples support indexing, slicing, and sequence methods without supporting in-place item assignment.', 'Tuples par indexing aur slicing exact list ki tarah kaam karti hai, lekin assignment error deta hai.', 'coordinates = (19.0760, 72.8777, "Mumbai")\nlat, lon, city = coordinates\nprint(f"{city}: ({lat}, {lon})")', 'Mumbai: (19.076, 72.8777)'],
      ['python-tuple-unpacking', 'Tuple Unpacking & *star operator', 'Tuple unpacking extracts elements directly into variables, with *rest packing remaining elements into a list.', 'Tuple unpacking variables mein values extract karta hai; `*rest` baaki bache items ko list mein pack kar leta hai.', 'first, *middle, last = (1, 2, 3, 4, 5)\nprint(first, middle, last)', '1 [2, 3, 4] 5'],
      ['python-tuple-methods', 'Tuple Methods & Namedtuples', 'Tuples provide count() and index(). The collections.namedtuple factory creates tuple subclasses with named field access.', 'Tuples mein `count()` aur `index()` methods hote hain. `namedtuple` field names ke sath clean structured data banata hai.', 'from collections import namedtuple\nPoint = namedtuple("Point", ["x", "y"])\np = Point(10, 20)\nprint(f"X: {p.x}, Y: {p.y}")', 'X: 10, Y: 20'],
      ['python-tuple-vs-list', 'List vs Tuple Trade-offs', 'Lists are mutable and slightly heavier in memory overhead, while tuples are immutable, memory-efficient, faster to allocate, and hashable.', 'Lists mutable hoti hain (editable), tuples immutable hoti hain (faster, less memory, hashable).', 'import sys\nprint(sys.getsizeof([1, 2, 3]) > sys.getsizeof((1, 2, 3)))', 'True']
    ]
  },
  {
    chapterTitle: 'Chapter 9: Sets & Dictionaries',
    topics: [
      ['python-set-basics', 'Set Fundamentals & Uniqueness', 'Sets are unordered, mutable collections of unique hashable elements enclosed in curly braces {}.', 'Set unique items ka collection hai jisme duplicate values automatically remove ho jati hain.', 'unique_tags = {"python", "fastapi", "python", "docker"}\nprint(sorted(list(unique_tags)))', "['docker', 'fastapi', 'python']"],
      ['python-set-methods', 'Set Operations (Union, Intersect, Diff)', 'Set operations include union (|), intersection (&), difference (-), symmetric_difference (^), issubset(), and issuperset() with O(1) hash lookups.', 'Set mathematical operations provide karta hai: Union `|` (sab milakar), Intersection `&` (common items), Difference `-` (sirf pehle mein).', 'dev_a = {"Python", "SQL", "Docker"}\ndev_b = {"Python", "React", "TypeScript"}\nprint("Common:", dev_a & dev_b)\nprint("All Skills:", dev_a | dev_b)', "Common: {'Python'}\nAll Skills: {'Docker', 'Python', 'React', 'SQL', 'TypeScript'}"],
      ['python-set-union', 'Set Methods (add, discard, pop)', 'Methods include add(), remove() (throws KeyError if missing), discard() (safe removal without error), and pop().', '`add()` item jodta hai, `discard()` bina error ke safely remove karta hai.', 'roles = {"student", "instructor"}\nroles.add("admin")\nroles.discard("guest") # No error if missing\nprint("admin" in roles)', 'True'],
      ['python-set-intersection', 'Set Comprehensions', 'Set comprehensions create sets using the syntax {expr for item in iterable if condition}.', 'Set comprehension unique filtered values generate karne ka concise syntax hai.', 'evens = {x % 10 for x in [12, 22, 34, 44, 52]}\nprint(sorted(list(evens)))', '[2, 4]'],
      ['python-set-difference', 'Frozenset (Immutable Sets)', 'A frozenset is an immutable, hashable version of a set that can be used as a dictionary key or set element.', 'frozenset ek immutable set hai jo freeze ho chuka hai aur dictionary keys mein use ho sakta hai.', 'frozen = frozenset([1, 2, 3])\nd = {frozen: "valid_key"}\nprint(d[frozen])', 'valid_key'],
      ['python-dict-basics', 'Dictionary Fundamentals (Key-Value)', 'Dictionaries are ordered (Python 3.7+), mutable mappings of unique hashable keys to arbitrary values.', 'Dictionary key-value mapping hai jahan key se value instant O(1) time mein milti hai.', 'user = {"id": 101, "username": "kabir_dev", "role": "student"}\nprint(user["username"], len(user))', 'kabir_dev 3'],
      ['python-dict-access', 'Accessing & get() Method', 'Accessing via dict[key] raises KeyError if missing; dict.get(key, default) safely returns a fallback default value.', '`user["key"]` missing hone par crash karta hai, jabki `user.get("key", default)` safely fallback deta hai.', 'profile = {"name": "Aman"}\nprint(profile.get("email", "no-email@codemasti.com"))', 'no-email@codemasti.com'],
      ['python-dict-update', 'Updating, Merging & Unpacking', 'Dictionaries are updated via dict[key] = value, update(), or dictionary merge operators | and |= (Python 3.9+).', 'Dictionaries ko `|` operator ya `update()` se merge kiya jata hai.', 'base = {"theme": "dark", "fontSize": 14}\noverride = {"fontSize": 16, "language": "hi"}\nmerged = base | override\nprint(merged)', "{'theme': 'dark', 'fontSize': 16, 'language': 'hi'}"],
      ['python-dict-methods', 'Dictionary Methods (keys, values, items)', 'Methods include keys(), values(), items() (returns key-value tuples), pop(), and setdefault().', '`keys()`, `values()`, aur `items()` dictionary ko loop karne aur inspect karne ke standard tools hain.', 'stats = {"views": 1200, "likes": 350}\nfor k, v in stats.items():\n    print(f"{k}: {v}")', 'views: 1200\nlikes: 350'],
      ['python-nested-dictionaries', 'Nested Dictionaries & JSON-like Structures', 'Nested dictionaries represent hierarchical tree data structures commonly used in API payloads and configurations.', 'Nested dictionaries JSON API responses ki tarah complex nested data store karti hain.', 'app_state = {\n    "user": {"id": 1, "profile": {"city": "Delhi"}},\n    "active": True\n}\nprint(app_state["user"]["profile"]["city"])', 'Delhi'],
      ['python-dict-comprehension', 'Dictionary Comprehensions', 'Dictionary comprehensions construct dictionaries via syntax {key_expr: val_expr for item in iterable if condition}.', 'Dictionary comprehension ek line mein mappings generate karta hai.', 'users = ["Aman", "Kabir", "Neha"]\nuser_lengths = {u: len(u) for u in users}\nprint(user_lengths)', "{'Aman': 4, 'Kabir': 5, 'Neha': 4}"]
    ]
  },
  {
    chapterTitle: 'Chapter 10: Advanced Collections & File I/O',
    topics: [
      ['python-collections-module', 'Collections (Counter, defaultdict, deque)', 'The collections module provides specialized containers: Counter (frequency counting), defaultdict (automatic default values), and deque (fast O(1) double-ended queues).', 'collections module advanced data structures deta hai: `Counter` item count karta hai, `defaultdict` missing keys par default value deta hai, `deque` fast queue banata hai.', 'from collections import Counter, defaultdict, deque\ncounts = Counter(["apple", "banana", "apple"])\nd = deque([1, 2, 3])\nd.appendleft(0)\nprint(counts["apple"], list(d))', '2 [0, 1, 2, 3]'],
      ['python-open-files', 'File I/O & open() Modes', 'Files are opened using open(filepath, mode) supporting modes "r" (read), "w" (write/overwrite), "a" (append), "x" (exclusive create), "b" (binary), and "+" (read/write).', 'File open karne ke modes: "r" (padhna), "w" (overwrite likhna), "a" (end mein jodna), "rb"/"wb" (binary images/PDFs).', 'mode = "w"\nprint(f"File mode: {mode} (write/truncate)")', 'File mode: w (write/truncate)'],
      ['python-with-statement', 'The with Statement & Context Managers', 'The with statement ensures deterministic resource acquisition and release, guaranteeing file closing even if exceptions occur.', '`with open(...)` automatically file ko safely close kar deta hai chahe beech mein error aaye.', '# Simulating context managed file handling\nwith open("sample.txt", "w") as f:\n    f.write("CodeMasti Python Masterclass")\nprint("File written and automatically closed cleanly")', 'File written and automatically closed cleanly'],
      ['python-read-files', 'Reading Files (read, readline, readlines)', 'File reading methods include read() (entire string), readline() (single line), and readlines() (list of lines), alongside memory-efficient line iteration.', 'File reading methods: `read()` poora text deta hai, `readline()` ek line deta hai, for loop memory-safe line-by-line padhta hai.', '# Memory-efficient line iteration\nlines = ["Course: Python\\n", "Level: Masterclass\\n"]\nfor line in lines:\n    print(line.strip())', 'Course: Python\nLevel: Masterclass'],
      ['python-write-files', 'Writing & Appending to Files', 'The write() and writelines() methods write strings and iterables to files.', '`write()` naya text likhta hai aur `writelines()` list of lines write karta hai.', 'log_entry = "2026-08-21 [INFO] User login success\\n"\nprint(f"Appended log: {log_entry.strip()}")', 'Appended log: 2026-08-21 [INFO] User login success'],
      ['python-file-modes', 'Working with CSV Files (csv.DictReader)', 'The csv module provides csv.reader, csv.writer, csv.DictReader, and csv.DictWriter to parse tabular comma-separated data into Python dictionaries.', '`csv.DictReader` CSV rows ko automatically Python dictionaries mein convert karta hai.', 'import csv, io\ncsv_data = "name,role\\nKabir,Student\\nAman,Instructor"\nreader = csv.DictReader(io.StringIO(csv_data))\nrows = list(reader)\nprint(rows[0]["name"], rows[0]["role"])', 'Kabir Student'],
      ['python-json-files', 'Working with JSON (json.loads & dumps)', 'The json module serializes Python dictionaries to JSON strings (dumps/dump) and deserializes JSON strings back into Python objects (loads/load).', '`json.loads()` JSON string ko Python dictionary banata hai; `json.dumps()` dictionary ko JSON string banata hai.', 'import json\npayload = {"course": "Python", "rating": 4.9, "published": True}\njson_str = json.dumps(payload)\nrestored = json.loads(json_str)\nprint(json_str, restored["rating"])', '{"course": "Python", "rating": 4.9, "published": true} 4.9']
    ]
  },
  {
    chapterTitle: 'Chapter 11: Exception Handling & Debugging',
    topics: [
      ['python-exceptions', 'Exception Hierarchy & Errors', 'Exceptions represent runtime error conditions disrupting normal program flow, distinct from compile-time syntax errors.', 'Exceptions runtime par aane wale errors hain (jaise ZeroDivisionError, KeyError, FileNotFoundError) jo program crash kar sakte hain.', 'try:\n    x = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Handled error: {type(e).__name__}")', 'Handled error: ZeroDivisionError'],
      ['python-try-except', 'try-except-else-finally Architecture', 'The try block tests code, except catches specified exceptions, else executes only if no exceptions occur, and finally executes unconditionally for cleanup.', '`try` test karta hai, `except` catch karta hai, `else` error na aane par chalta hai, `finally` hamesha cleanup ke liye chalta hai.', 'try:\n    val = int("100")\nexcept ValueError:\n    print("Conversion failed")\nelse:\n    print(f"Success: {val}")\nfinally:\n    print("Cleanup completed")', 'Success: 100\nCleanup completed'],
      ['python-multiple-except', 'Catching Specific Multiple Exceptions', 'Specific exception types should be caught individually rather than using bare except: clauses to avoid masking critical system interrupts.', 'Hamesha specific errors catch karein (`ValueError`, `KeyError`), bare `except:` use na karein.', 'def safe_lookup(d, key, idx):\n    try:\n        return d[key][idx]\n    except (KeyError, IndexError, TypeError) as err:\n        return f"Error: {type(err).__name__}"\nprint(safe_lookup({"items": [1, 2]}, "items", 5))', 'Error: IndexError'],
      ['python-raise', 'Raising Exceptions & Custom Error Classes', 'The raise statement triggers exceptions. Custom exception classes inherit from the built-in Exception class.', '`raise` se hum khud custom error throw karte hain. Custom error classes `class AppError(Exception)` inherit karti hain.', 'class InsufficientFundsError(Exception):\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError("Withdrawal amount exceeds balance")\n    return balance - amount\n\ntry:\n    withdraw(500, 1000)\nexcept InsufficientFundsError as e:\n    print(f"Caught custom error: {e}")', 'Caught custom error: Withdrawal amount exceeds balance'],
      ['python-finally', 'Debugging Strategies & Python Debugger (pdb)', 'Debugging workflows involve inspecting stack tracebacks, setting conditional breakpoints, and interactive step-through debugging via breakpoint() and the pdb module.', '`breakpoint()` code ko wahan pause karke terminal par interactive debugger (`pdb`) open karta hai jahan variables inspect kiye ja sakte hain.', '# Interactive debugging entry point\n# breakpoint()  # Opens pdb debugger in terminal\nprint("Traceback debugging and breakpoint inspection active")', 'Traceback debugging and breakpoint inspection active']
    ]
  },
  {
    chapterTitle: 'Chapter 12: Modules, Packages & Virtual Environments',
    topics: [
      ['python-modules', 'Modules & __name__ == "__main__"', 'A module is a .py file containing functions, classes, and variables. The __name__ == "__main__" guard distinguishes direct execution from module imports.', 'Module ek .py file hai. `if __name__ == "__main__":` guard check karta hai ki file direct run ho rahi hai ya import ki gayi hai.', 'if __name__ == "__main__":\n    print("Running directly as main program")', 'Running directly as main program'],
      ['python-imports', 'Import Statements & Namespace Management', 'Imports load code via import module, from module import item, or import module as alias.', '`import` se code load hota hai, `from ... import` se specific function nikalte hain, `as` se alias banta hai.', 'import math as m\nfrom datetime import datetime\nprint(m.sqrt(25), datetime.now().year)', '5.0 2026'],
      ['python-built-in-modules', 'Python Standard Library Highlights', 'Python includes powerful built-in standard modules: os, sys, math, random, datetime, json, re, hashlib, and pathlib.', '"Batteries Included": Python ke sath essential utilities bina external pip install ke free milti hain.', 'import os, hashlib\nhash_val = hashlib.sha256(b"CodeMasti").hexdigest()[:8]\nprint(f"SHA-256 Prefix: {hash_val}")', 'SHA-256 Prefix: e7b102ca'],
      ['python-packages', 'Package Architecture & __init__.py', 'A package is a directory containing Python modules and an optional __init__.py file that initializes the package namespace.', 'Package ek folder hai jisme multiple module files hoti hain aur `__init__.py` unhe package banata hai.', 'package_structure = "my_app/\\n  ├── __init__.py\\n  ├── models.py\\n  └── services.py"\nprint(package_structure)', 'my_app/\n  ├── __init__.py\n  ├── models.py\n  └── services.py'],
      ['python-virtualenv', 'Virtual Environments (venv)', 'Virtual environments (python -m venv .venv) isolate project dependencies, preventing version conflicts across projects on the same machine.', 'Virtual environment har project ke packages ko isolated room mein rakhta hai taaki project A ka version project B ko na tode.', 'venv_cmd = "python3 -m venv .venv && source .venv/bin/activate"\nprint(f"Activation command: {venv_cmd}")', 'Activation command: python3 -m venv .venv && source .venv/bin/activate'],
      ['python-pip', 'Package Management with pip & requirements.txt', 'The pip installer manages third-party PyPI packages. Requirements files lock dependencies (pip freeze > requirements.txt; pip install -r requirements.txt).', 'pip Python ka package manager hai. `requirements.txt` project ke saare dependencies ko list karta hai.', 'req_file = "fastapi==0.110.0\\nuvicorn==0.28.0\\npydantic==2.6.4"\nprint(req_file.splitlines()[0])', 'fastapi==0.110.0'],
      ['python-pyproject-toml', 'Modern Python Packaging (pyproject.toml)', 'The pyproject.toml specification (PEP 518/621) standardizes project metadata, build systems (Hatch, Flit, Poetry), and linter configurations in a single declarative file.', '`pyproject.toml` modern Python ka unified configuration file hai jo project metadata aur tools (Ruff, Pytest) configure karta hai.', 'toml_sample = "[project]\\nname = \'codemasti-api\'\\nversion = \'1.0.0\'\\ndependencies = [\'fastapi\']"\nprint(toml_sample.splitlines()[0])', '[project]']
    ]
  },
  {
    chapterTitle: 'Chapter 13: Object-Oriented Programming (OOP) Mastery',
    topics: [
      ['python-classes', 'Classes & Objects', 'A class is a blueprint defining attributes (state) and methods (behavior). An object is an instantiated concrete realization of a class.', 'Class ek blueprint (naksha) hai, aur Object us nakshe se bana actual live ghar hai.', 'class Course:\n    def __init__(self, title):\n        self.title = title\nc = Course("Python Masterclass")\nprint(f"Course: {c.title}")', 'Course: Python Masterclass'],
      ['python-objects', 'Constructors (__init__) & self Reference', 'The __init__() constructor initializes new instances. The self parameter represents the explicit reference to the current instance invoking the method.', '`__init__` constructor hai jo object banne par initial variables set karta hai. `self` current object ko point karta hai.', 'class Student:\n    def __init__(self, name, roll_no):\n        self.name = name\n        self.roll_no = roll_no\ns = Student("Kabir", 101)\nprint(s.name, s.roll_no)', 'Kabir 101'],
      ['python-encapsulation', 'Encapsulation & Private Attributes', 'Encapsulation bundles data and methods while restricting direct access using public attributes, protected attributes (_attr convention), and private attributes (__attr name mangling).', 'Encapsulation data ko protect karta hai: `_var` (protected convention) aur `__var` (private name mangling) direct modification rokte hain.', 'class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance # Private\n    def get_balance(self):\n        return self.__balance\nacc = BankAccount(5000)\nprint(f"Balance: ₹{acc.get_balance()}")', 'Balance: ₹5000'],
      ['python-inheritance', 'Inheritance & super()', 'Inheritance allows derived child classes to inherit attributes and methods from base parent classes, leveraging super() to invoke parent implementations.', 'Inheritance se child class parent class ke features reuse karti hai. `super().__init__()` parent constructor call karta hai.', 'class User:\n    def __init__(self, email):\n        self.email = email\nclass Admin(User):\n    def __init__(self, email, role="superadmin"):\n        super().__init__(email)\n        self.role = role\na = Admin("admin@codemasti.com")\nprint(a.email, a.role)', 'admin@codemasti.com superadmin'],
      ['python-polymorphism', 'Polymorphism & Duck Typing', 'Polymorphism allows different classes to implement identical method signatures. Python practices Duck Typing ("If it walks like a duck and quacks like a duck, it is a duck").', 'Polymorphism mein alag-alag classes same method name implement karti hain. Duck typing type se zyada behavior dekhti hai.', 'class PDFExporter:\n    def export(self): return "Exporting PDF..."\nclass CSVExporter:\n    def export(self): return "Exporting CSV..."\nfor exporter in [PDFExporter(), CSVExporter()]:\n    print(exporter.export())', 'Exporting PDF...\nExporting CSV...'],
      ['python-abstraction', 'Abstraction & Abstract Base Classes (ABC)', 'Abstraction hides implementation complexity by declaring Abstract Base Classes (abc.ABC) with @abstractmethod decorators that mandate child class implementation.', 'Abstract class (`ABC`) ek rulebook declare karti hai jiske `@abstractmethod` methods ko implement karna har child class ke liye mandatory hota hai.', 'from abc import ABC, abstractmethod\nclass PaymentGateway(ABC):\n    @abstractmethod\n    def process_payment(self, amount):\n        pass\nprint("Abstract PaymentGateway contract declared")', 'Abstract PaymentGateway contract declared'],
      ['python-special-methods', 'Dunder Methods (__str__, __repr__, __eq__)', 'Special dunder (double underscore) methods customize built-in behaviors: __str__ (user-friendly display), __repr__ (unambiguous developer representation), __len__, and __eq__.', 'Dunder methods Python built-in operations ko customize karte hain: `__str__` print formatting ke liye, `__eq__` `==` comparison ke liye.', 'class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\nv1 = Vector(2, 3)\nv2 = Vector(4, 5)\nprint(v1 + v2)', 'Vector(6, 8)'],
      ['python-dataclasses', 'Dataclasses (@dataclass & Enums)', 'The @dataclass decorator automatically generates boilerplate __init__, __repr__, and __eq__ methods. Enums (enum.Enum) define named constant enumerations.', '`@dataclass` boilerplate code khatam karta hai aur clean data models banata hai. `Enum` type-safe constants provide karta hai.', 'from dataclasses import dataclass\nfrom enum import Enum\nclass Role(Enum):\n    STUDENT = "student"\n    ADMIN = "admin"\n@dataclass(frozen=True)\nclass UserProfile:\n    id: int\n    name: str\n    role: Role = Role.STUDENT\nu = UserProfile(1, "Kabir")\nprint(u, u.role.value)', "UserProfile(id=1, name='Kabir', role=<Role.STUDENT: 'student'>) student"]
    ]
  },
  {
    chapterTitle: 'Chapter 14: Advanced Python: Generators, Decorators & Context Managers',
    topics: [
      ['python-iterators', 'Iterators & The Iterator Protocol', 'An iterable implements __iter__() returning an iterator; an iterator implements __next__() returning successive elements and raising StopIteration when exhausted.', 'Iterator protocol mein `__iter__()` iterator deta hai aur `__next__()` agla item deta hai jab tak `StopIteration` na aaye.', 'nums = iter([10, 20])\nprint(next(nums), next(nums))', '10 20'],
      ['python-generators', 'Generators & Memory Efficiency (yield)', 'Generator functions use the yield keyword to produce values lazily on-demand, executing in O(1) memory space even when streaming millions of items.', 'Generators `yield` use karke memory bachate hain: poora dataset memory mein load karne ki jagah ek-ek karke item deliver karte hain.', 'def fibonacci(limit):\n    a, b = 0, 1\n    for _ in range(limit):\n        yield a\n        a, b = b, a + b\nprint(list(fibonacci(7)))', '[0, 1, 1, 2, 3, 5, 8]'],
      ['python-decorators', 'Decorators & Function Wrappers (@decorator)', 'Decorators are higher-order functions that take a function as input, wrap it with extra behavior (logging, timing, auth), and return the wrapped function.', 'Decorator function ko wrap karke bina uska code badle naya behavior (jaise execution timer ya authentication) add kar deta hai.', 'import time\ndef time_it(func):\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        res = func(*args, **kwargs)\n        return res\n    return wrapper\n@time_it\ndef compute(): return sum(range(1000))\nprint(f"Result: {compute()}")', 'Result: 499500'],
      ['python-context-managers', 'Custom Context Managers (__enter__ & __exit__)', 'Custom context managers implement __enter__() for resource initialization and __exit__() for guaranteed cleanup, or use the contextlib.contextmanager generator decorator.', 'Context manager `__enter__` se lock/resource leta hai aur `__exit__` se hamesha cleanup guarantee karta hai.', 'from contextlib import contextmanager\n@contextmanager\ndef managed_resource(name):\n    print(f"Acquired: {name}")\n    try: yield name\n    finally: print(f"Released: {name}")\nwith managed_resource("DatabaseConnection") as r:\n    print(f"Using {r}")', 'Acquired: DatabaseConnection\nUsing DatabaseConnection\nReleased: DatabaseConnection'],
      ['python-type-hints', 'Modern Type Hints & Static Analysis (mypy)', 'Type hints (PEP 484/585) annotate variable, parameter, and return types (int, str, list[str], dict[str, int], Optional[T], Union[A, B], Callable) verified statically by mypy.', 'Type hints code readability aur auto-complete improve karte hain aur `mypy` type checker build-time par type errors pakad leta hai.', 'from typing import Optional\ndef find_user(user_id: int) -> Optional[dict[str, str]]:\n    if user_id == 1:\n        return {"name": "Kabir"}\n    return None\nprint(find_user(1))', "{'name': 'Kabir'}"]
    ]
  },
  {
    chapterTitle: 'Chapter 15: Databases with Python (SQLite, PostgreSQL & SQLAlchemy)',
    topics: [
      ['python-sqlite', 'SQLite Integration with sqlite3', 'The sqlite3 module provides built-in relational database support with connection objects, cursors, parameterized queries, and transaction commits.', 'Python ke sath `sqlite3` built-in aata hai jisse bina external server ke local SQL database banaya ja sakta hai.', 'import sqlite3\nconn = sqlite3.connect(":memory:")\ncur = conn.cursor()\ncur.execute("CREATE TABLE users (id INT, name TEXT)")\ncur.execute("INSERT INTO users VALUES (?, ?)", (1, "Kabir"))\nconn.commit()\ncur.execute("SELECT * FROM users")\nprint(cur.fetchone())', '(1, \'Kabir\')'],
      ['python-sql-injection', 'SQL Injection Prevention & Parameterized Queries', 'Parameterized queries (? in SQLite, %s in psycopg) separate SQL command structure from user data, neutralizing SQL Injection vulnerabilities.', 'String concatenation se query banane par SQL Injection hota hai; Parameterized queries input ko strictly data treat karti hain.', '# Safe parameterized query pattern\nsafe_query = "SELECT * FROM users WHERE email = ?"\nprint(f"Parameterized SQL Pattern: {safe_query}")', 'Parameterized SQL Pattern: SELECT * FROM users WHERE email = ?'],
      ['python-postgresql', 'PostgreSQL Integration with psycopg', 'The psycopg (psycopg3) library connects Python applications to PostgreSQL clusters, supporting connection pooling, binary parameters, and native JSONB.', '`psycopg` Python ko production PostgreSQL database se connect karta hai with connection pooling.', 'db_url = "postgresql://user:pass@localhost:5432/codemastidb"\nprint(f"Connected to PostgreSQL endpoint: {db_url.split(\'@\')[1]}")', 'Connected to PostgreSQL endpoint: localhost:5432/codemastidb'],
      ['python-sqlalchemy', 'SQLAlchemy Core & ORM Concepts', 'SQLAlchemy provides an Object Relational Mapper (ORM) that maps Python classes to database tables, abstracting raw SQL into type-safe object queries.', 'SQLAlchemy ORM database tables ko Python classes banata hai jisse database queries Python objects ki tarah likhi ja sakti hain.', '# Conceptual SQLAlchemy Model\nmodel_def = "class User(Base):\\n    __tablename__ = \'users\'\\n    id = Column(Integer, primary_key=True)"\nprint(model_def.splitlines()[0])', 'class User(Base):']
    ]
  },
  {
    chapterTitle: 'Chapter 16: Modern Backend Development: FastAPI & Pydantic',
    topics: [
      ['python-fastapi-intro', 'FastAPI Fundamentals & Routing', 'FastAPI is a high-performance modern web framework built on Starlette and Pydantic that automatically generates interactive OpenAPI/Swagger documentation.', 'FastAPI modern high-speed Python backend framework hai jo automatic interactive Swagger UI documentation (`/docs`) generate karta hai.', '# FastAPI app declaration concept\nroutes = ["GET /", "POST /api/v1/users", "GET /api/v1/courses"]\nprint(f"Registered FastAPI Endpoints: {len(routes)}")', 'Registered FastAPI Endpoints: 3'],
      ['python-pydantic-validation', 'Pydantic Models & Request Validation', 'Pydantic models declare strict request/response data schemas, performing automatic type coercion, validation, and JSON serialization.', 'Pydantic schemas API request body ko validate karte hain: galat data type aane par auto 422 Unprocessable Entity error throw hota hai.', '# Pydantic Schema Model Concept\nschema = "class UserCreate(BaseModel):\\n    email: EmailStr\\n    password: str"\nprint(schema.splitlines()[0])', 'class UserCreate(BaseModel):'],
      ['python-fastapi-crud', 'FastAPI CRUD API Architecture', 'A clean FastAPI backend organizes code across Routers, Pydantic Schemas, Service Business Logic, and Database Models.', 'FastAPI CRUD architecture Routers, Schemas aur Controllers ko clean modular separation deta hai.', 'crud_ops = ["Create (POST)", "Read (GET)", "Update (PUT/PATCH)", "Delete (DELETE)"]\nprint(", ".join(crud_ops))', 'Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE)']
    ]
  },
  {
    chapterTitle: 'Chapter 17: Asynchronous Python & Concurrency',
    topics: [
      ['python-async-await', 'Asynchronous Programming (async/await)', 'Asynchronous programming allows a single thread to handle concurrent I/O operations cooperatively without blocking the CPU event loop.', '`async/await` non-blocking I/O enable karta hai: jab ek request database ka wait karti hai, CPU dusri request serve kar leta hai.', 'import asyncio\nasync def fetch_data():\n    await asyncio.sleep(0.01)\n    return {"status": "ok"}\nres = asyncio.run(fetch_data())\nprint(res)', "{'status': 'ok'}"],
      ['python-asyncio-tasks', 'asyncio Tasks & Concurrent Gathering', 'asyncio.gather() and TaskGroup schedule multiple coroutines concurrently, achieving massive throughput on network-bound I/O tasks.', '`asyncio.gather()` multiple async functions ko parallel mein schedule karke unke results collect karta hai.', 'import asyncio\nasync def task(name, delay):\n    await asyncio.sleep(delay)\n    return f"Task {name} completed"\nasync def main():\n    results = await asyncio.gather(task("A", 0.01), task("B", 0.01))\n    return results\nprint(asyncio.run(main()))', "['Task A completed', 'Task B completed']"],
      ['python-threading-multiprocessing', 'Threading vs Multiprocessing vs Async', 'Threads share memory space within the Global Interpreter Lock (GIL) for I/O; Multiprocessing bypasses the GIL across separate CPU cores for CPU-heavy computation.', 'I/O tasks ke liye `asyncio` ya `threading` best hai; CPU-heavy crunching ke liye `multiprocessing` alag CPU cores use karta hai.', 'import multiprocessing\nprint(f"Available CPU Cores: {multiprocessing.cpu_count()}")', 'Available CPU Cores: 8'],
      ['python-gil', 'The Global Interpreter Lock (GIL)', 'The GIL is a mutex protecting Python object memory from race conditions by allowing only one native thread to execute Python bytecode at a time.', 'GIL ek mutex lock hai jo memory safety maintain karta hai; CPU-bound tasks ko multi-core chalane ke liye multiprocessing use ki jaati hai.', 'print("GIL manages thread bytecode execution safely in CPython")', 'GIL manages thread bytecode execution safely in CPython']
    ]
  },
  {
    chapterTitle: 'Chapter 18: Testing & Quality Assurance (Pytest)',
    topics: [
      ['python-pytest-fundamentals', 'Testing with Pytest', 'Pytest is the leading Python testing framework utilizing plain assert statements, automatic test discovery (test_*.py), and informative assertion introspection.', 'Pytest plain `assert` statements use karta hai aur saare `test_*.py` files ko automatically discover karke run karta hai.', 'def add(a, b): return a + b\ndef test_add():\n    assert add(2, 3) == 5\ntest_add()\nprint("Pytest assertion passed")', 'Pytest assertion passed'],
      ['python-pytest-fixtures', 'Pytest Fixtures & Parametrization', 'Fixtures (@pytest.fixture) provide reusable, isolated test dependencies. Parametrization (@pytest.mark.parametrize) runs a test across multiple input-output data sets.', 'Fixtures reusable test setup provide karti hain; Parametrize ek hi test ko multiple data inputs par run karta hai.', '# Pytest Fixture Concept\nfixture_def = "@pytest.fixture\\ndef db_session():\\n    yield session"\nprint(fixture_def.splitlines()[0])', '@pytest.fixture'],
      ['python-mocking', 'Mocking with unittest.mock', 'The unittest.mock module provides Mock and patch to isolate units under test by replacing external APIs, databases, and filesystem dependencies with test doubles.', '`unittest.mock.patch` external slow APIs aur databases ko fake response se replace karta hai.', 'from unittest.mock import MagicMock\napi_client = MagicMock()\napi_client.get_user.return_value = {"id": 1, "name": "Aman"}\nprint(api_client.get_user(1)["name"])', 'Aman']
    ]
  },
  {
    chapterTitle: 'Chapter 19: Automation, Scripting & CLI Apps',
    topics: [
      ['python-pathlib', 'Filesystem Automation with pathlib', 'The pathlib module provides an object-oriented, cross-platform interface (Path) for directory traversal, file manipulation, and glob pattern searching.', '`pathlib.Path` cross-platform file paths aur directory navigation ko clean object methods deta hai.', 'from pathlib import Path\np = Path("/opt/codemastii/logs/app.log")\nprint(p.name, p.suffix, p.parent)', 'app.log .log /opt/codemastii/logs'],
      ['python-argparse-cli', 'Building CLI Tools with argparse', 'The argparse module constructs professional Command Line Interface (CLI) applications with positional arguments, optional flags (--flag), and automatic help generation.', '`argparse` se professional terminal CLI tools bante hain with `--help` flags aur arguments parsing.', 'import argparse\nparser = argparse.ArgumentParser(description="CodeMastii CLI Tool")\nparser.add_argument("--env", default="production")\nprint(parser.description)', 'CodeMastii CLI Tool'],
      ['python-web-scraping', 'Web Scraping Concepts & BeautifulSoup', 'Ethical web scraping parses public HTML document trees using requests and BeautifulSoup (bs4), adhering to robots.txt and rate limits.', 'BeautifulSoup HTML tags ko parse karke public data extract karta hai (ethical guidelines follow karte hue).', 'from bs4 import BeautifulSoup\nsoup = BeautifulSoup("<h1 class=\'title\'>CodeMastii</h1>", "html.parser")\nprint(soup.h1.text)', 'CodeMastii']
    ]
  },
  {
    chapterTitle: 'Chapter 20: Python Security & Production Engineering',
    topics: [
      ['python-security-best-practices', 'Python Security & Secret Management', 'Production Python security mandates environment secrets (.env), password hashing (bcrypt/Argon2), avoiding eval()/pickle serialization attacks, and dependency auditing.', 'Production security ke rules: passwords ko bcrypt se hash karein, `.env` git par commit na karein, aur `eval()` ya `pickle` use na karein.', 'import secrets\ntoken = secrets.token_hex(16)\nprint(f"Cryptographic CSRF Token: {token[:8]}...")', 'Cryptographic CSRF Token: ' + 'e7b102ca' + '...'],
      ['python-dockerfile-production', 'Containerizing Python Apps with Docker', 'Production Python Dockerfiles use multi-stage builds on lightweight python:3.12-slim bases, run as unprivileged non-root users, and optimize layer caching.', 'Python apps ko Dockerize karte waqt `python:3.12-slim` base aur non-root user use karke lightweight secure container banta hai.', 'dockerfile_snippet = "FROM python:3.12-slim\\nWORKDIR /app\\nUSER appuser"\nprint(dockerfile_snippet.splitlines()[0])', 'FROM python:3.12-slim'],
      ['python-logging-production', 'Production Structured Logging (logging)', 'The standard logging module outputs structured logs with severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), timestamps, and contextual correlation IDs.', 'Production mein `print()` ki jagah `logging` use kiya jata hai with timestamps aur severity levels.', 'import logging\nlogging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")\nlogging.info("CodeMasti Production Service started cleanly")', 'INFO: CodeMasti Production Service started cleanly']
    ]
  },
  {
    chapterTitle: 'Chapter 21: Real-World Capstone Projects',
    topics: [
      ['python-project-calculator', 'Project 1: Command-Line Calculator', 'A defensive arithmetic calculator with input validation, exception handling, and calculation history.', 'Calculator project input validation, operators aur clean functions implement karta hai.', 'def calc(a, op, b):\n    ops = {"+": a+b, "-": a-b, "*": a*b, "/": a/b if b!=0 else "Error"}\n    return ops.get(op, "Invalid")\nprint(f"Result: {calc(10, \'*\', 5)}")', 'Result: 50'],
      ['python-project-todo', 'Project 2: SQLite Task Manager', 'A task management CLI application with SQLite CRUD operations, persistent storage, and formatted outputs.', 'Task manager SQLite database, SQL queries aur CRUD operations ko unite karta hai.', 'tasks = [{"id": 1, "task": "Learn Python", "done": True}]\nprint(f"Completed: {tasks[0][\'task\']}")', 'Completed: Learn Python'],
      ['python-project-weather-app', 'Project 3: REST API Data Explorer', 'A weather and public data client making asynchronous HTTP requests, parsing JSON envelopes, and caching responses.', 'REST API client internet se data fetch karta hai aur JSON parse karta hai.', 'api_data = {"city": "Mumbai", "temp": 28.5, "condition": "Sunny"}\nprint(f"{api_data[\'city\']}: {api_data[\'temp\']}°C, {api_data[\'condition\']}")', 'Mumbai: 28.5°C, Sunny'],
      ['python-project-student-management', 'Project 4: Full-Stack FastAPI LMS Backend', 'A production-grade REST API backend built with FastAPI, Pydantic validation, PostgreSQL persistence, and JWT authentication.', 'FastAPI LMS backend authentication, database models, schemas aur API documentation ko combine karta hai.', 'backend_arch = "FastAPI + Pydantic + PostgreSQL + JWT Auth"\nprint(f"Architecture: {backend_arch}")', 'Architecture: FastAPI + Pydantic + PostgreSQL + JWT Auth'],
      ['python-project-expense-tracker', 'Project 5: Automated File & Report Organizer', 'A background automation tool that monitors directories, categorizes files via pathlib, extracts CSV metrics, and generates summary reports.', 'File organizer script automated file management aur CSV reports generate karta hai.', 'report = {"processed": 45, "categorized": 45, "errors": 0}\nprint(f"Report: {report[\'processed\']} files organized with {report[\'errors\']} errors")', 'Report: 45 files organized with 0 errors']
    ]
  },
  {
    chapterTitle: 'Chapter 22: FAANG Interview Mastery & Code Challenges',
    topics: [
      ['python-top-interview-questions', 'Top 35 FAANG Python Interview Questions', 'Mastery of fundamental and advanced interview questions: Memory management, Mutable default argument gotchas, MRO, GIL, Generators, and Decorators.', 'Top tech companies ke Python interviews mein aane wale core questions, memory mechanics aur design trade-offs.', 'faang_topics = ["Memory Management", "GIL & Concurrency", "Decorators & Generators", "FastAPI Architecture"]\nprint(f"Total Interview Modules: {len(faang_topics)}")', 'Total Interview Modules: 4'],
      ['python-output-based-questions', 'Output Prediction & Code Reasoning', 'Mental code execution challenges testing scoping, mutability, closures, dunder evaluation, and operator precedence.', 'Code output prediction questions mentally line-by-line dry run karke edge cases verify karte hain.', 'a = [[]] * 3\na[0].append(1)  # Gotcha: All 3 inner lists share the same reference!\nprint(a)', '[[1], [1], [1]]'],
      ['python-tricky-questions', 'Python Gotchas & Tricky Questions', 'Deep dive into classic Python gotchas: Mutable default arguments (`def fn(x=[])`), late binding closures in loops, and integer caching (-5 to 256).', 'Python ke hidden edge cases jaise mutable default arguments aur late binding closures.', '# Gotcha Fix: Use None as default\ndef append_to(element, target=None):\n    if target is None: target = []\n    target.append(element)\n    return target\nprint(append_to(1), append_to(2))', '[1] [2]'],
      ['python-coding-questions', 'DSA Coding Challenges in Python', 'Algorithmic problem solving leveraging Python idioms: Two pointers, Sliding window, Frequency hashing, and Binary search.', 'Python idioms aur clean functions use karke Data Structures aur Algorithms problems solve karna.', 'def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        if target - n in seen: return [seen[target - n], i]\n        seen[n] = i\nprint(two_sum([2, 7, 11, 15], 9))', '[0, 1]'],
      ['python-hr-questions', 'Production Python System Design & Best Practices', 'Designing high-scale Python backends: Asynchronous event loops, database connection pooling, caching strategies, and horizontal scaling behind Gunicorn/Uvicorn workers.', '10M users ke liye scalable Python architecture design: FastAPI + Gunicorn workers + Redis + PostgreSQL.', 'system_design = "FastAPI + Gunicorn (4 Workers) + Redis Cache + PostgreSQL Read Replicas"\nprint(system_design)', 'FastAPI + Gunicorn (4 Workers) + Redis Cache + PostgreSQL Read Replicas']
    ]
  }
];

const sectionOrder = [
  'English Definition',
  'Hinglish Explanation',
  'Funny Real-Life Example',
  'Visual Diagram / Flowchart',
  'Code Example',
  'Code Line-by-Line Explanation',
  'Output',
  'Common Mistakes',
  'Pro Tips',
  'Interview Questions',
  'Mini Quiz',
  'Practice Questions',
  'Mini Challenge',
  'Summary',
  'Flashcards',
  'Revision Notes'
];

const getEmoji = (chapterIndex) => {
  if (chapterIndex < 2) return '🐍';
  if (chapterIndex < 7) return '🧠';
  if (chapterIndex < 12) return '💻';
  if (chapterIndex < 17) return '⚙️';
  return '🚀';
};

const makeFunnyExample = (title) => {
  if (title === 'Variables & Naming Conventions' || title === 'Variables') {
    return {
      scenario: 'Socho tumhari mummy ne ek dabba diya aur bola isme biscuits rakh do.\n\nDabba = Variable\nBiscuits = Value\n\nAb mummy boli biscuits hatao aur chocolates rakh do.\n\nDabba = Same Variable\nValue = Change',
      punchline: 'Variable wahi raha, value badal gayi!'
    };
  }

  return {
    scenario: `Socho ${title} ko bina samjhe use kar rahe ho.\nPython bolega: "Bhai pehle concept clear karo, phir code likho!"\n\nClear concept = Clean Python code.\nConfused concept = Syntax error party.`,
    punchline: `${title} ko real life se connect karo, syntax hamesha ke liye yaad ho jayega!`
  };
};

const getVisualDiagram = (title) => {
  if (title === 'Variables & Naming Conventions' || title === 'Variables') {
    return {
      title: 'Variable Memory Allocation Flow',
      nodes: ['Variable name: user_name', 'Assignment =', 'String Value: "Kabir"', 'RAM Memory allocated', 'print(user_name) displays value'],
      type: 'flow'
    };
  }

  return {
    title: `${title} Execution Flow`,
    nodes: ['Input / Problem', title, 'Python 3 Interpreter', 'Bytecode Execution', 'Deterministic Output'],
    type: 'flow'
  };
};

const getCodeBreakdown = (title, code) => {
  const firstLine = code.split('\n')[0];
  return [
    { part: firstLine, label: 'Entry point: Initializes core logic structure for this topic', color: '#10b981' },
    { part: 'print', label: 'Outputs computed result to standard output stream', color: '#3b82f6' },
    { part: '=', label: 'Assignment operator stores evaluated expression in memory', color: '#f59e0b' },
    { part: ':', label: 'Colon introduces an indented execution block in Python', color: '#ef4444' }
  ];
};

const makeLesson = ([id, title, englishDef, hinglishExplain, code, output], topicIndex, chapterIndex) => {
  const isPythonIntro = id === 'python-what-is-python';

  return {
    id,
    title,
    emoji: getEmoji(chapterIndex),
    readingTime: `${7 + (topicIndex % 4)} min`,
    difficulty: chapterIndex < 6 ? 'Beginner' : chapterIndex < 14 ? 'Intermediate' : 'Advanced',
    prerequisites: topicIndex === 0 && chapterIndex === 0 ? ['Basic computer usage'] : ['Previous Python topic', 'Code editor basics'],
    fixedFormat: sectionOrder,
    shortIntro: isPythonIntro
      ? 'Python is a high-level, simple, powerful, and beginner-friendly programming language.'
      : '',
    englishDef,
    hinglishExplain,
    mastirQuote: {
      start: `👨‍🏫 Masti Sir: "${title} seekhna easy hai! Bas syntax aur indentation ko dhyan se samajh lo! 🐍😎"`,
      hint: `💡 Masti Sir: "${hinglishExplain.slice(0, 100)}..."`,
      success: `🎉 Masti Sir: "Shabash! ${title} ka concept aur code crystal clear ho gaya! 🔥"`,
      mistake: '😅 Masti Sir: "Indentation aur case-sensitivity ka dhyan rakhein — Python space-space ka game hai!"'
    },
    funnyExample: isPythonIntro
      ? {
          scenario: 'Teacher:\n"Homework karo."\n\nPython:\n"Theek hai, 1 line mein ho gaya 😎"\n\nC++:\n"Pehle bata memory kidhar allocate karni hai 🤯"\n\nJava:\n"Pehle Public Static Void Main Class banao 📦"\n\nPython:\n"Sir kaam batao bas! 😂"',
          punchline: 'Python = Simple instruction, fast execution!'
        }
      : makeFunnyExample(title),
    funnyAnalogy: isPythonIntro
      ? 'Python ko smart assistant ki tarah socho: tum problem batao, Python clean readable code se kaam karwa deta hai.'
      : `${title} ko daily-life tool ki tarah socho: input clear ho, logic simple ho, output predictable ho.`,
    visualDiagram: isPythonIntro
      ? { title: 'How Python Executes Code', nodes: ['Source Code (.py)', 'CPython Compiler', 'Bytecode (.pyc)', 'Python Virtual Machine (PVM)', 'Machine Output'], type: 'flow' }
      : getVisualDiagram(title),
    code,
    codeBreakdown: getCodeBreakdown(title, code),
    output,
    commonMistakes: [
      '❌ Capital/small letter mismatch karna (Python is strictly case-sensitive).',
      '❌ Indentation galat rakhna (Python uses 4 spaces to define code blocks).',
      '❌ Missing quotes, colons (:) ya unclosed brackets.',
      '❌ Code copy karna without understanding the underlying logic.'
    ],
    proTips: [
      '💡 Short code likhne se pehle readable code likho (Readability counts - PEP 20).',
      '💡 Har topic ke baad code ko line-by-line dry run karo.',
      '💡 Error message ko dushman nahi, apna debugging guide samjho.',
      '💡 Real project mein use case soch kar practice karo.'
    ],
    interviewQuestions: [
      `What is ${title} in Python and why is it used?`,
      `Explain a real-world use case for ${title}.`,
      `What common mistakes do developers make when using ${title}?`,
      `How does ${title} behave under edge cases?`
    ],
    quiz: {
      type: 'mcq',
      question: `${title} ka main purpose kya hai?`,
      options: [englishDef, 'CSS styling apply karna', 'Computer shutdown karna', 'Image crop karna'],
      answer: englishDef,
      explanation: `${title} Python programming ka core concept hai: ${hinglishExplain}`
    },
    miniQuiz: [
      {
        type: 'mcq',
        question: `${title} ko effectively kaise master karenge?`,
        options: ['Concept + Code run + Output verification + Practice', 'Sirf code copy paste karke', 'Errors ko ignore karke', 'Sirf theory padh ke'],
        answer: 'Concept + Code run + Output verification + Practice',
        explanation: 'Concept tab pakka hota hai jab example run karke output verify kiya jaye.'
      },
      {
        type: 'fillblank',
        question: 'Blank fill karo:',
        sentence: 'Python mein code blocks define karne ke liye curly braces ki jagah ___ use hoti hai.',
        answer: 'indentation',
        explanation: 'Python curly braces ke bajay indentation (4 spaces) use karta hai.'
      }
    ],
    practiceQuestions: [
      `${title} ka ek clean working example likho.`,
      `Example ka expected output manually predict karo.`,
      `Ek intentional mistake karke dekho ki Python kaisa error throw karta hai.`,
      `${title} ko real-world application se connect karo.`
    ],
    miniChallenge: title.includes('Variable')
      ? 'User se naam lo, variable mein store karo, aur f-string se "Hello <name>" print karo.'
      : `${title} use karke 3-5 line ka Python program banao aur output explain karo.`,
    summary: [
      `${title} Python course ka critical building block hai.`,
      hinglishExplain,
      'Definition, example, output aur hands-on practice ko saath mein padhne se concept permanent yaad rehta hai.'
    ],
    flashcard: {
      q: `${title} kya hai?`,
      a: englishDef
    },
    flashcards: [
      { q: `${title} kya hai?`, a: englishDef },
      { q: `${title} Hinglish me?`, a: hinglishExplain },
      { q: `${title} me common mistake?`, a: 'Case sensitivity, indentation, missing colon, ya output dry-run na karna.' }
    ],
    revisionNotes: [
      `${title}: ${englishDef}`,
      `Hinglish yaad rakho: ${hinglishExplain}`,
      `Code pattern: ${code.split('\n')[0]}`,
      `Expected output: ${output.split('\n')[0]}`
    ],
    aiQuiz: `AI Quiz: ${title} par definition, output aur mistake based questions solve karo.`,
    aiInterview: `AI Interview: ${title} define karo, code example do, output explain karo, phir common mistake batao.`,
    voiceExplanation: `${title}. ${englishDef} Hinglish me: ${hinglishExplain}`,
    languageModes: ['English', 'Hindi/Hinglish'],
    assignment: {
      title: `${title} Practice Assignment`,
      tasks: [
        'Topic ka code khud editor mein type karo.',
        'Output run hone se pehle predict karo.',
        'Ek variation banao aur difference notes mein likho.'
      ]
    },
    aiDoubtSolver: {
      student: `Explain ${title} like I am a beginner.`,
      ai: `${hinglishExplain} Pehle example run karo, phir har line ka kaam samjho. Isi se topic clear hoga.`
    },
    aiSummary: `${title}: ${hinglishExplain}`,
    aiNotes: [
      `${title} definition yaad rakho.`,
      'Code ko line-by-line dry run karo.',
      'Output predict karna interview preparation ke liye zaroori hai.'
    ],
    challenge: {
      instruction: `${title} par based working Python code likho. At least ek print statement ya return hona chahiye.`,
      initialCode: `${code}\n`,
      validator: (studentCode) => studentCode.includes('print') || studentCode.includes('return') || studentCode.includes('def '),
      successMessage: `${title} practice complete! +30 XP`
    }
  };
};

const PYTHON_CHAPTERS = CHAPTER_BLUEPRINTS.map((chapter, chapterIndex) => ({
  chapterTitle: chapter.chapterTitle,
  lessons: chapter.topics.map((topic, topicIndex) => makeLesson(topic, topicIndex, chapterIndex))
}));

const topicsCount = CHAPTER_BLUEPRINTS.reduce((total, chapter) => total + chapter.topics.length, 0);

export const pythonCourse = {
  id: 'python',
  title: 'Python',
  description: 'Complete Python Masterclass from absolute beginner to production engineer! Core syntax, OOP, Collections, Dunder methods, Generators, Decorators, Type hints, SQLite, PostgreSQL, SQLAlchemy ORM, FastAPI REST APIs, Asyncio concurrency, Pytest test suites, Automation scripting, Dockerization, aur FAANG interview problems Masti Sir ke saath!',
  icon: '🐍',
  category: 'programming',
  certificateName: 'PYTHON',
  topicsCount,
  practiceCount: topicsCount * 4,
  projectsCount: 10,
  hoursEstimate: 50,
  level: 'Beginner to Advanced',
  chapters: PYTHON_CHAPTERS
};

export default pythonCourse;
