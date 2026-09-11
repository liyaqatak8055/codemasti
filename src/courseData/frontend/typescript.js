export const typescriptCourse = {
  id: 'typescript',
  title: 'TypeScript',
  description: 'JavaScript with Superpowers! Types, Interfaces, Discriminated Unions, Generics, Utility Types, tsconfig.json, React & Node.js Type Safety, Zod validation, OOP Classes, Advanced Types aur Job-Ready Capstone Masti Sir style mein!',
  icon: '🔷',
  category: 'frontend',
  certificateName: 'TYPESCRIPT',
  topicsCount: 65,
  practiceCount: 80,
  projectsCount: 14,
  hoursEstimate: 26,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: TYPESCRIPT BASICS & TYPE SYSTEM
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: TypeScript Fundamentals, Tooling & Basic Types',
      lessons: [
        {
          id: 'ts-intro-primitives-inference',
          title: 'TypeScript Intro, Primitives, Type Inference & any vs unknown',
          emoji: '🛡️',
          xpReward: 40,
          badgeName: 'Type Guard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript mein \`undefined is not a function\` dekh kar rona aata tha na? TypeScript runtime bugs ko compile time pe hi pakad ke dho deta hai! TypeScript koi alag language nahi hai — JavaScript ke upar static type checking ka bulletproof kavach hai! 😎"',
            hint: '💡 Masti Sir: "\`any\` type use karke TypeScript ko JavaScript mat banao! \`any\` use karna matlab seatbelt nikaal ke gaadi chalana! \`unknown\` use karo aur pehle check karo!"',
            success: '🎉 Masti Sir: "Zero Type Errors! Clean, robust, production-grade code!"',
            mistake: '😅 Masti Sir: "TypeScript types compile hone ke baad gayab ho jaate hain (Type Erasure) — browser sirf standard JavaScript chalata hai!"'
          },
          englishDef: 'TypeScript is a strongly typed superset of JavaScript that compiles to clean, standard JavaScript. It adds static type checking, type inference, interfaces, and compile-time verification, catching runtime bugs before code ever deploys to production.',
          hinglishExplain: 'JavaScript dynamic language hai (jahan variable ka type runtime pe achanak badal sakta hai aur bugs production mein aate hain). TypeScript static typing add karta hai taaki code likhte waqt hi VS Code aapko bata de ki galat data type pass kiya hai. Types compile hone par remove ho jaate hain aur browser mein pure JS chalta hai.',
          storyExplain: 'Socho tum medicine store chalate ho. JavaScript mein saari dawaiyan ek bina label wale plastic dabbe mein rakhi hain — koi bhi tablet kisi ko bhi de do, customer hospital pahunch sakta hai! TypeScript har dabbe pe clear label (Type) laga deta hai: "Sirf Paracetamol (number)" ya "Sirf Cough Syrup (string)". Galat dawai daalte hi buzzer baj jata hai! 💊',
          funnyExample: {
            scenario: 'JS: `const sum = "5" + 5; // "55"` 🤦\nTS: `const sum: number = "5" + 5;` 🛑 Compiler Error: Type \'string\' is not assignable to type \'number\'!\nDeveloper: "Shukr hai TS ne bacha liya!" 🥳',
            punchline: 'TypeScript = Production bugs ka prevention vaccine!'
          },
          memoryTrick: 'TS Primitive Types:\n- `string`: "Masti Sir"\n- `number`: 100, 3.14\n- `boolean`: true / false\n- `null` & `undefined`\n- `any`: (Escape hatch - DANGEROUS!)\n- `unknown`: (Safe alternative to any - requires narrowing)\n- `never`: (Values that never occur - infinite loops/errors)\n- `void`: (Functions returning no useful value)',
          visualDiagram: {
            title: 'TypeScript Compilation Lifecycle',
            nodes: ['TypeScript Source Code (.ts / .tsx)', 'TSC (TypeScript Compiler) Static Analysis', 'Compile Errors caught in IDE at write-time', 'Type Erasure -> Clean JavaScript Output (.js)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Types Disappear at Compile Time (Type Erasure):',
            steps: ['TSC performs AST parsing and static type analysis', 'Type checking verifies all function contracts and object shapes', 'All types, interfaces, and generic markers are completely erased', 'Emits pure optimized JavaScript for the V8 runtime engine']
          },
          code: `// 1. Primitive Types & Type Inference
let studentName: string = 'Rahul Sharma';
let studentAge: number = 22;
let isEnrolled: boolean = true;

// Type Inference: TS automatically infers 'string'
let courseTitle = 'Modern React & TypeScript';
// courseTitle = 100; // ❌ TS Error: Type 'number' is not assignable to type 'string'

// 2. Arrays & Tuples
let scores: number[] = [95, 88, 76, 99];
let tags: Array<string> = ['react', 'nextjs', 'typescript'];

// Tuple: Fixed length and strict type order
let studentTuple: [number, string, boolean] = [101, 'Ananya', true];

// 3. ANY vs UNKNOWN (The Safety Comparison)
let unsafeValue: any = "Hello";
unsafeValue.someFakeMethod(); // Compiles fine, CRASHES at runtime! 💥

let safeValue: unknown = "Hello";
// safeValue.toUpperCase(); // ❌ TS Error: Object is of type 'unknown'

// Safe usage via Type Narrowing
if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase()); // ✅ Allowed! (HELLO)
}

// 4. VOID vs NEVER
function logMessage(msg: string): void {
  console.log("LOG:", msg);
}

function throwFatalError(message: string): never {
  throw new Error(message); // Never returns a normal value
}`,
          codeBreakdown: [
            { part: 'let studentName: string', label: 'Explicit type annotation ensuring variable strictly holds strings', color: '#3b82f6' },
            { part: 'let safeValue: unknown', label: 'Type-safe alternative to any requiring type narrowing check before usage', color: '#10b981' },
            { part: 'function throwFatalError(...): never', label: 'Return type representing code paths that will never finish normally', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Overusing `any` everywhere which turns off TypeScript type checking entirely',
            '❌ Manually annotating simple inferred variables (`let x: string = "hi"` is redundant — let TS infer it)',
            '❌ Expecting TypeScript types to perform runtime data validation on external API payloads'
          ],
          proTips: [
            '💡 Always prefer `unknown` over `any` when accepting arbitrary input from external sources',
            '💡 Enable `"strict": true` and `"strictNullChecks": true` in `tsconfig.json` for maximum safety'
          ],
          interviewQuestions: [
            'What is TypeScript, what are its benefits, and what is meant by "Type Erasure" at compile-time?',
            'What is the difference between `any`, `unknown`, `never`, and `void` in TypeScript?',
            'What is Type Inference versus Type Annotation, and when should you explicitly annotate types?'
          ],
          miniChallenge: 'Create a typed function `formatProduct(id: number, title: string, price: number, inStock?: boolean): string`.',
          quiz: {
            type: 'mcq',
            question: 'TypeScript mein `any` aur `unknown` mein kya main difference hota hai?',
            options: ['Dono bilkul same hain', '`unknown` type-safe hai aur use karne se pehle type check (narrowing) mangta hai, jabki `any` saari type checking disable kar deta hai', '`unknown` sirf numbers ke liye hota hai', '`any` compile nahi hota'],
            answer: '`unknown` type-safe hai aur use karne se pehle type check (narrowing) mangta hai, jabki `any` saari type checking disable kar deta hai',
            explanation: '`unknown` forces developers to perform type narrowing (`typeof x === "string"`) before accessing methods, preventing runtime crashes.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Type identify karo:',
              sentence: 'Function jo hamesha exception throw karta hai ya infinite loop chalata hai uska return type ___ hota hai.',
              answer: 'never',
              explanation: '`never` represents values that never occur, such as a function that always throws or never finishes executing.'
            }
          ],
          summary: ['TypeScript adds compile-time static type checking', 'Types are completely erased during compilation to standard JS', 'Prefer unknown over any for safe external data handling'],
          flashcard: { q: 'What is a Tuple in TypeScript?', a: 'An array of fixed length where elements have predetermined, specific types at each index (e.g. `[number, string]`).' },
          funFact: 'Anders Hejlsberg, the creator of TypeScript at Microsoft, also created C# and Turbo Pascal!',
          didYouKnow: 'TypeScript compiler `tsc` is written entirely in TypeScript itself and compiles itself into JavaScript.',
          realWorldUseCases: ['Enterprise React/Next.js frontend applications', 'Type-safe Node.js and Express/NestJS APIs', 'Public NPM package library development', 'Full-stack monorepo type sharing'],
          practiceQuestions: [
            'Setup a TypeScript project with `npx tsc --init` and compile your first typed file',
            'Refactor a function accepting `any` to use `unknown` with `typeof` narrowing'
          ]
        },
        {
          id: 'ts-tsconfig-compiler-options',
          title: 'tsconfig.json Configuration & Strict Mode Mastery',
          emoji: '⚙️',
          xpReward: 35,
          badgeName: 'Config Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`tsconfig.json` TypeScript ka control panel hai! `"strict": true` on karo aur TypeScript ko uski poori taakat se kaam karne do! 😎"',
            hint: '💡 Masti Sir: "`noImplicitAny` aur `strictNullChecks` do aisi settings hain jo 90% production runtime errors ko akele khatam kar deti hain!"',
            success: '🎉 Masti Sir: "Professional tsconfig.json configuration setup complete!"',
            mistake: '😅 Masti Sir: "`skipLibCheck: true` na lagane par node_modules ke third-party types compile time pe fail ho sakte hain!"'
          },
          englishDef: 'The `tsconfig.json` file specifies root files and compiler options for a TypeScript project. Key flags include `target` (JS version output), `module` (module system), `strict` (enables comprehensive type-safety rules), `outDir` (compiled JS folder), and `include`/`exclude`.',
          hinglishExplain: '`tsconfig.json` file compiler ko batati hai ki TypeScript code ko kaise compile karna hai — kaunsa JavaScript version banana hai (ES2022), kahan output save karna hai (`dist/`), aur kitni strictness ke sath type errors check karne hain.',
          storyExplain: 'Socho tum car ka safety system configure kar rahe ho. Normal settings = Sirf seatbelt warning. Strict Mode (`"strict": true`) = ABS brakes, 6 airbags, lane departure warning aur automatic emergency braking — sab on! Gaadi crash hone ka chance zero!',
          funnyExample: {
            scenario: 'Without `strictNullChecks`:\n`let user = findUser("vikram");`\n`console.log(user.name); // Runtime Crash: Cannot read property "name" of undefined 💥`\nWith `strictNullChecks: true`:\nTS: 🛑 "user can be undefined! Add `if (!user)` check first!" 🥳',
            punchline: 'strictNullChecks prevents the #1 most common JavaScript runtime error!'
          },
          memoryTrick: 'Crucial tsconfig Flags:\n- `"target": "ES2022"`: Modern JavaScript output\n- `"strict": true`: Enables all strict type-checking flags\n- `"noImplicitAny": true`: Flags unannotated variables\n- `"strictNullChecks": true`: Disallows implicit null/undefined assignments\n- `"skipLibCheck": true`: Skips type checking of `.d.ts` in node_modules',
          visualDiagram: {
            title: 'tsconfig.json Compiler Pipeline',
            nodes: ['src/ (*.ts, *.tsx)', 'tsconfig.json Compiler Options (strict: true)', 'tsc Type Check & Transpile', 'dist/ (*.js, *.d.ts)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How tsc Uses tsconfig.json:',
            steps: ['Reads `include` globs to discover source files', 'Resolves module dependencies via `moduleResolution: "node"`', 'Applies AST type checking rules defined in `compilerOptions`', 'Emits compiled JS into `outDir` and declaration files `.d.ts`']
          },
          code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "outDir": "./dist",
    "rootDir": "./src",
    
    /* Strict Type-Checking Options */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true,
    
    /* Module & Interop */
    "esModuleInterop": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
          codeBreakdown: [
            { part: '"strict": true', label: 'Enables a broad suite of strict type-checking behaviors', color: '#3b82f6' },
            { part: '"strictNullChecks": true', label: 'Treats null and undefined as distinct types requiring explicit handling', color: '#10b981' },
            { part: '"noUnusedLocals": true', label: 'Reports errors on unused local variables preventing dead code accumulation', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Disabling `"strict": true` in enterprise projects to suppress compiler warnings',
            '❌ Forgetting `"skipLibCheck": true` causing dependency type declaration errors to halt builds',
            '❌ Not setting `"outDir": "./dist"` causing `.js` files to be emitted alongside `.ts` files in `src/`'
          ],
          proTips: [
            '💡 Use `npx tsc --noEmit` in your Git CI/CD pipeline to perform fast type checking without generating build files',
            '💡 Use `"isolatedModules": true` when working with fast bundlers like Vite, esbuild, or Babel'
          ],
          interviewQuestions: [
            'What is the purpose of `tsconfig.json` and what are the most critical compiler options?',
            'What specific checks are enabled when setting `"strict": true` in TypeScript?',
            'How does `"strictNullChecks": true` prevent "Cannot read property of undefined" errors?'
          ],
          miniChallenge: 'Create a clean `tsconfig.json` for a Node.js TypeScript project with strict mode enabled and compile a small project.',
          quiz: {
            type: 'mcq',
            question: '`tsconfig.json` mein kaunsa flag ensure karta hai ki koi variable bina type ke accidentally `any` na ban jaye?',
            options: ['noImplicitAny', 'strictNullChecks', 'skipLibCheck', 'esModuleInterop'],
            answer: 'noImplicitAny',
            explanation: '`noImplicitAny: true` causes the TypeScript compiler to throw an error whenever an expression or parameter implicitly defaults to `any`.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'What command executes TypeScript type checking in CI without generating JavaScript output files?',
              code: 'npx tsc ?',
              options: ['npx tsc --watch', 'npx tsc --noEmit', 'npx tsc --clean', 'npx tsc --test'],
              answer: 'npx tsc --noEmit',
              explanation: '`--noEmit` tells the compiler to perform full type checking without outputting any `.js` build files.'
            }
          ],
          summary: ['tsconfig.json configures compilation targets and rules', 'strict: true enables industry-standard type safety', 'noEmit is ideal for CI type checking pipelines'],
          flashcard: { q: 'What does strictNullChecks do?', a: 'Ensures `null` and `undefined` are not assignable to other types (like `string` or `number`) unless explicitly included in a union.' },
          funFact: 'You can extend base tsconfigs using `"extends": "@tsconfig/node20/tsconfig.json"` provided by the official TypeScript team!',
          didYouKnow: 'Vite and Next.js automatically generate and update optimal `tsconfig.json` files when you initialize projects.',
          realWorldUseCases: ['Configuring monorepo package type builds', 'Setting up CI/CD GitHub Action type check steps', 'Configuring React JSX emit options (`"jsx": "react-jsx"`)', 'Enabling path aliases (`"@/*": ["src/*"]`)'],
          practiceQuestions: [
            'Initialize a tsconfig with `npx tsc --init` and customize compilerOptions for Vite',
            'Test the difference in compiler behavior before and after enabling strictNullChecks'
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: INTERFACES, UNIONS & GENERICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Interfaces, Type Aliases, Discriminated Unions & Generics',
      lessons: [
        {
          id: 'ts-interfaces-unions-generics',
          title: 'Interfaces vs Types, Discriminated Unions & Generics (<T>) Masterclass',
          emoji: '🧩',
          xpReward: 50,
          badgeName: 'Generics Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Generics TypeScript ka Swiss Army Knife hai! Ek hi function likho jo string, number, objects sabke saath type-safe kaam kare! Aur Discriminated Unions se UI states (loading, success, error) ko 100% bug-free banao! 😎"',
            hint: '💡 Masti Sir: "Generic parameter `<T>` dekh ke daro mat — `T` bas ek placeholder variable hai data type ke liye!"',
            success: '🎉 Masti Sir: "Reusable Generics aur Discriminated Unions master ho gaya!"',
            mistake: '😅 Masti Sir: "Interface object blueprint ke liye best hai (kyunki declaration merging aur `extends` support karta hai), Type alias unions aur primitives ke liye best hai!"'
          },
          englishDef: 'Interfaces and Type Aliases define custom object shapes and contracts. Discriminated Unions use a literal discriminant property for bulletproof type-safe branching. Generics (`<T>`) enable writing reusable, flexible functions, interfaces, and classes without sacrificing type safety.',
          hinglishExplain: 'Interface se aap define karte ho ki kisi object mein kaunse fields hone chahiye. Discriminated Union mein ek common `status: "loading" | "success" | "error"` tag hota hai jisse TypeScript `switch` case mein automatically exact properties narrow kar leta hai. Generics `<T>` se ek hi function har type ke data ke sath kaam kar sakta hai.',
          storyExplain: 'Socho tum universal courier box factory chalate ho. Agar tum sirf "Shoe Box" banaoge, toh phone fit nahi hoga. Generic `Box<T>` ek aisi universal packaging machine hai jisme chahe Shoe dalo (`Box<Shoe>`) ya Laptop (`Box<Laptop>`), dabba type-safe rehta hai aur andar ka item perfectly tracked rehta hai! 📦',
          funnyExample: {
            scenario: 'Discriminated Union in Action:\n```ts\ntype Response = { status: "success"; data: User } | { status: "error"; errorMsg: string };\nif (res.status === "success") {\n  console.log(res.data.name); // 100% Type Safe!\n}\n```\nTypeScript prevents you from accessing `res.data` on error states!',
            punchline: 'Discriminated Unions eliminate impossible UI states!'
          },
          memoryTrick: 'Generics & Types Matrix:\n- `interface User { id: number; name: string; }` (Object Contract)\n- `type Status = "idle" | "loading" | "success";` (Union)\n- `function identity<T>(arg: T): T` (Generic function)\n- `type ApiResponse<T> = { data: T; status: number; }` (Generic Interface)',
          visualDiagram: {
            title: 'Generic Type Parameter Flow (<T>)',
            nodes: ['Generic Function: getFirstItem<T>(items: T[]): T', 'Call with numbers: getFirstItem([10, 20]) -> Return type inferred as number', 'Call with strings: getFirstItem(["a", "b"]) -> Return type inferred as string', 'Zero any types used!'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Control Flow Type Narrowing via Discriminated Unions:',
            steps: ['TypeScript analyzes literal tag property (`status: "success"`)', 'Inside `if (res.status === "success")`, TS narrows the union type to that exact branch', 'Exposes `res.data` while hiding `res.errorMsg`', 'Guarantees you never read undefined properties']
          },
          code: `// 1. Interfaces vs Type Aliases
interface BaseEntity {
  readonly id: string;
  createdAt: Date;
}

interface User extends BaseEntity {
  name: string;
  email: string;
  role: "admin" | "student" | "mentor";
  avatarUrl?: string; // Optional
}

// 2. Discriminated Union for Robust Network State
type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

function handleState(state: AsyncState<User>) {
  switch (state.status) {
    case "idle":
      return "Ready to load.";
    case "loading":
      return "⏳ Loading user...";
    case "success":
      return \`✅ Hello \${state.data.name} (\${state.data.email})\`;
    case "error":
      return \`❌ Error: \${state.error.message}\`;
  }
}

// 3. Generics with Constraints (T extends { id: string })
interface HasId {
  id: string | number;
}

function findById<T extends HasId>(items: T[], targetId: string | number): T | undefined {
  return items.find(item => item.id === targetId);
}

const users: User[] = [
  { id: "u1", name: "Vikram", email: "v@codemasti.com", role: "student", createdAt: new Date() }
];

const foundUser = findById(users, "u1");
console.log(foundUser?.name); // "Vikram" (Fully Typed!)`,
          codeBreakdown: [
            { part: 'interface User extends BaseEntity', label: 'Interface inheritance reusing shared base properties', color: '#3b82f6' },
            { part: 'type AsyncState<T> = ...', label: 'Generic Discriminated Union modeling complete async state lifecycle', color: '#10b981' },
            { part: 'function findById<T extends HasId>(...)', label: 'Generic constraint guaranteeing that T must have an id property', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Using `any` instead of a generic parameter `<T>` in reusable functions',
            '❌ Forgetting a `default` or comprehensive `case` branches in discriminated union switch statements',
            '❌ Trying to extend primitive union types with `interface` (use `type` for unions and primitives)'
          ],
          proTips: [
            '💡 Use the `keyof` operator to create type-safe property accessors: `function getProp<T, K extends keyof T>(obj: T, key: K): T[K]`',
            '💡 Use `type` when working with Unions, Tuples, or Primitives; use `interface` when defining extensible Object schemas'
          ],
          interviewQuestions: [
            'What is the difference between `type` and `interface` in TypeScript and when should you use each?',
            'What are Discriminated Unions (Tagged Unions) and how do they eliminate impossible states in frontend applications?',
            'What are Generic Constraints (`T extends ...`) and how do they differ from unconstrained Generics?'
          ],
          miniChallenge: 'Create a generic type-safe API client function `fetchData<T>(url: string): Promise<T>` with proper error typing.',
          quiz: {
            type: 'mcq',
            question: 'TypeScript mein `interface` aur `type` mein se kaunsa Declaration Merging support karta hai?',
            options: ['type', 'interface', 'Dono karte hain', 'Dono nahi karte'],
            answer: 'interface',
            explanation: 'Interfaces with the same name in the same scope automatically merge their declarations into a single interface.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`keyof { name: string; age: number }` ka resulting type kya hoga?',
              code: 'type PersonKeys = keyof { name: string; age: number };',
              options: ['string | number', '"name" | "age"', '["name", "age"]', 'Object'],
              answer: '"name" | "age"',
              explanation: '`keyof` produces a union of string/number literal property names of an object type.'
            }
          ],
          summary: ['Interfaces define extensible object blueprints', 'Discriminated unions ensure exhaustive state handling', 'Generics enable reusable, type-safe APIs without using any'],
          flashcard: { q: 'What is a Generic Constraint in TypeScript?', a: 'Using `T extends Type` to restrict the types that can be passed to a generic parameter while preserving type safety.' },
          funFact: 'TypeScript\'s type system is structural ("Duck Typing"): if two objects have the exact same properties, TypeScript considers them compatible regardless of their declaration names!',
          didYouKnow: 'React\'s `useState<T>()`, `useRef<T>()`, and `createContext<T>()` are all built using TypeScript Generics under the hood.',
          realWorldUseCases: ['React component props & state contracts', 'Reusable data tables and paginators with Generics', 'Redux / Zustand action payloads with Discriminated Unions', 'ORM database queries with type-safe schemas'],
          practiceQuestions: [
            'Build a generic Stack class `Stack<T>` with `push(item: T)`, `pop(): T | undefined`, and `peek(): T`',
            'Define a Discriminated Union for a Payment Processor (CreditCard, UPI, NetBanking)'
          ]
        },
        {
          id: 'ts-utility-types-advanced',
          title: 'Utility Types (Partial, Pick, Omit, Record) & Advanced Types',
          emoji: '🛠️',
          xpReward: 45,
          badgeName: 'Type Alchemist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har baar naya interface copy-paste karke mat banao! TypeScript ke built-in Utility Types (`Partial`, `Pick`, `Omit`, `Record`, `ReturnType`) use karo aur code DRY rakho! 🛠️"',
            hint: '💡 Masti Sir: "`Pick<T, "name" | "email">` sirf chuni hui properties rakhta hai, `Omit<T, "password">` specific property hata deta hai!"',
            success: '🎉 Masti Sir: "Utility Types aur Advanced Type Transformations mastered!"',
            mistake: '😅 Masti Sir: "`Record<string, User>` dictionary lookup ke liye best hai — har key ke liye manually interface mat banao!"'
          },
          englishDef: 'TypeScript provides built-in Utility Types for type transformation: `Partial<T>` (makes all optional), `Required<T>`, `Readonly<T>`, `Pick<T, K>` (selects subset), `Omit<T, K>` (removes subset), `Record<K, T>` (dictionary map), `ReturnType<T>`, and `Awaited<T>` (unwraps Promises).',
          hinglishExplain: 'Utility Types pehle se bane-banaye type helpers hain jo kisi existing interface ko modify karke naya type bana dete hain. Jaise agar user update API mein saare fields optional karne hain, toh naya interface banane ki jagah sirf `Partial<User>` likho!',
          storyExplain: 'Socho tumhare paas ek master ID card template hai jisme 10 fields hain. `Pick`: Library card ke liye sirf Name aur Photo chhaant lo. `Omit`: Public card ke liye Aadhaar number hata do. `Partial`: Form update ke liye saare fields optional kar do. Ek master template se hazaron customized cards ban gaye!',
          funnyExample: {
            scenario: 'Junior Dev creates 4 separate interfaces for User:\n- UserCreate\n- UserUpdate\n- UserResponse\n- UserWithoutPassword\nSenior Dev: `type UserUpdate = Partial<Omit<User, "id">>;&` -> 1 line replaces 40 lines of duplicate code! 🚀',
            punchline: 'Utility types keep your type definitions DRY and maintainable!'
          },
          memoryTrick: 'Top Utility Types:\n- `Partial<T>`: All properties become optional (`?`)\n- `Required<T>`: All properties become mandatory\n- `Readonly<T>`: All properties become frozen\n- `Pick<T, "a" | "b">`: Keep only "a" and "b"\n- `Omit<T, "c">`: Keep everything EXCEPT "c"\n- `Record<string, number>`: Key-value map\n- `Awaited<Promise<T>>`: Extracts `T`',
          visualDiagram: {
            title: 'Utility Type Transformations',
            nodes: ['Original Type User { id, name, email, password }', 'Omit<User, "password"> -> PublicUser', 'Partial<PublicUser> -> UpdateUserPayload', 'Pick<User, "id" | "name"> -> UserSummary'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How TypeScript Computes Mapped Utility Types:',
            steps: ['Evaluates `keyof T` to extract all property keys', 'Applies mapped type modifiers (e.g. `[P in keyof T]?: T[P]` for Partial)', 'Resolves resulting transformed type at compile-time', 'Completely zero runtime JavaScript performance penalty']
          },
          code: `interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
  published: boolean;
}

// 1. Partial<T>: Ideal for Update / Patch APIs
type UpdateCourseDTO = Partial<Course>;

// 2. Pick<T, K>: Extract specific properties for UI cards
type CourseCardProps = Pick<Course, "id" | "title" | "price">;

// 3. Omit<T, K>: Remove sensitive or internal properties
type CreateCoursePayload = Omit<Course, "id">;

// 4. Record<K, T>: Dictionary / Map lookup
type CourseCatalog = Record<string, Course>;

// 5. ReturnType<T> and Parameters<T>
function enrollStudent(courseId: string, studentId: string) {
  return { success: true, enrollmentDate: new Date(), courseId };
}

type EnrollmentResult = ReturnType<typeof enrollStudent>;
type EnrollmentParams = Parameters<typeof enrollStudent>; // [string, string]

// 6. Awaited<T>: Unwrap async Promise types
async function fetchCourseList(): Promise<Course[]> {
  return [];
}

type FetchedCourses = Awaited<ReturnType<typeof fetchCourseList>>; // Course[]`,
          codeBreakdown: [
            { part: 'type UpdateCourseDTO = Partial<Course>', label: 'Constructs type with all Course properties set to optional for PATCH requests', color: '#3b82f6' },
            { part: 'type CourseCardProps = Pick<Course, "id" | "title" | "price">', label: 'Picks only the specified keys from the Course interface', color: '#10b981' },
            { part: 'type CourseCatalog = Record<string, Course>', label: 'Constructs an object type whose property keys are strings and values are Course objects', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Manually copying and pasting interfaces for create/update DTOs instead of using `Pick`, `Omit`, and `Partial`',
            '❌ Trying to pass invalid property names into `Pick` or `Omit` (TS enforces type-safe keys via `keyof T`)'
          ],
          proTips: [
            '💡 Combine utilities: `type SafeUpdate = Partial<Omit<User, "id" | "role">>` to prevent modifying primary keys or permissions',
            '💡 Use `NonNullable<T>` to strip `null` and `undefined` from a union type'
          ],
          interviewQuestions: [
            'Explain how `Pick<T, K>` and `Omit<T, K>` work under the hood using Mapped Types and `keyof`.',
            'What is the difference between `Record<string, number>` and `Map<string, number>` in TypeScript?',
            'What is `Awaited<T>` and how is it used to extract the resolved value of nested Promises?'
          ],
          miniChallenge: 'Create a typed user management API service where creation uses `Omit<User, "id">` and updates use `Partial<Omit<User, "id">>`.',
          quiz: {
            type: 'mcq',
            question: '`Omit<User, "password" | "token">` utility type ka kya kaam hota hai?',
            options: ['Password aur token ko required bana dena', 'User interface se password aur token properties ko hata kar naya type construct karna', 'Password ko encrypt karna', 'User delete karna'],
            answer: 'User interface se password aur token properties ko hata kar naya type construct karna',
            explanation: '`Omit<T, K>` creates a new type by taking all properties from T and excluding the keys listed in K.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`Awaited<Promise<string>>` ka resolved type kya hoga?',
              code: 'type Result = Awaited<Promise<string>>;',
              options: ['Promise<string>', 'string', 'void', 'unknown'],
              answer: 'string',
              explanation: '`Awaited<T>` unwraps Promises recursively to extract the underlying resolved value type (`string`).'
            }
          ],
          summary: ['Utility types eliminate duplicate type definitions', 'Partial/Pick/Omit streamline API payloads', 'Awaited cleanly unwraps Promise return types'],
          flashcard: { q: 'What is Record<K, T>?', a: 'A utility type that constructs an object type with keys of type K and values of type T (e.g. `Record<string, User>`).' },
          funFact: 'All utility types in TypeScript are implemented using standard TypeScript features like Mapped Types, Conditional Types, and `keyof` — there is no hardcoded compiler magic!',
          didYouKnow: 'The `ReturnType<typeof fn>` utility lets you extract the exact return type of any function without having to manually write an interface for it.',
          realWorldUseCases: ['React form state partial updates', 'API request and response DTO definitions', 'Dictionary and cache lookups via Record', 'Extracting database row models from ORM functions'],
          practiceQuestions: [
            'Write custom implementations of `MyPartial<T>` and `MyReadonly<T>` using Mapped Types',
            'Transform a complex User model into safe frontend DTOs using Pick and Omit'
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: TYPESCRIPT WITH REACT, NODE & CAPSTONE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: React + Node.js Fullstack Type Safety & Capstone',
      lessons: [
        {
          id: 'ts-react-node-integration',
          title: 'React TypeScript, Node.js Express Type Safety & Production Capstone',
          emoji: '⚡',
          xpReward: 60,
          badgeName: 'Fullstack Type Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Frontend mein React + TypeScript aur Backend mein Node.js + TypeScript = End-to-End Type Safety! Shared interfaces use karo aur runtime crashes ko hamesha ke liye bye-bye bolo! 🎓"',
            hint: '💡 Masti Sir: "React event handlers mein `any` mat likho — `React.ChangeEvent<HTMLInputElement>` aur `React.FormEvent` use karo!"',
            success: '🎉 Masti Sir: "Congratulations! You have mastered Modern TypeScript from Fundamentals to Full Stack Architecture! 🚀"',
            mistake: '😅 Masti Sir: "External API se aane wale data ko bina Zod validation ke blindly type-cast mat karo — TypeScript runtime pe data check nahi karti!"'
          },
          englishDef: 'Production TypeScript applications combine typed React components (Props, State, Hooks, Events), typed Node.js/Express backends (Request, Response, Middleware, DTOs), and runtime validation libraries like Zod to guarantee end-to-end data integrity.',
          hinglishExplain: 'React mein TypeScript component props aur event handlers ko type-safe banata hai taaki autocomplete aur safety mile. Node.js backend mein request body aur database models type-safe hote hain. Zod se hum incoming runtime JSON data validate karte hain.',
          storyExplain: 'Socho tum ek international bridge (Full Stack App) bana rahe ho. Ek side India hai (React Frontend), dusri side Europe hai (Node Backend). Agar dono taraf ke engineers ne standard blueprint (Shared TypeScript Interface) use kiya hai, toh bridge theek beech mein bina 1 millimeter ke mismatch ke perfectly connect ho jayega! 🌉',
          funnyExample: {
            scenario: 'Junior Dev forgets prop: `<CourseCard />` ❌\nTypeScript: 🛑 "Property \'title\' and \'price\' are missing in type \'{}\'!"\nBug caught in 0.1 seconds before saving the file! 🥳',
            punchline: 'TypeScript is your 24/7 automated pair programmer!'
          },
          memoryTrick: 'Fullstack TS Flow:\nShared Types (`types/user.ts`) -> Express Backend (`Request<Params, Res, Body>`) -> Zod Schema Validation -> React Frontend (`useState<User>`, `Props`)',
          visualDiagram: {
            title: 'End-to-End Full Stack TypeScript Architecture',
            nodes: ['Shared Models (types/index.ts)', 'Node.js Express Controller (Typed Request/Response)', 'Zod Runtime Schema Validation', 'React Frontend Component (Typed Props & State)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Zod Bridges Compile-Time and Runtime Safety:',
            steps: ['Zod defines runtime validation schema: `z.object({ email: z.string().email() })`', 'Parses untrusted incoming JSON payload from API', 'Infers static TypeScript type: `type User = z.infer<typeof UserSchema>`', 'Guarantees 100% type safety at compile-time AND runtime']
          },
          code: `// ── 1. TYPED REACT COMPONENT ──
import React, { useState } from 'react';

interface CourseItem {
  id: string;
  title: string;
  xpReward: number;
  isCompleted: boolean;
}

interface CourseCardProps {
  course: CourseItem;
  onToggle: (id: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onToggle }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>Reward: +{course.xpReward} XP</p>
      <button onClick={() => onToggle(course.id)}>
        {course.isCompleted ? "✅ Completed" : "Mark Done"}
      </button>
    </div>
  );
};

// ── 2. TYPED REACT FORM WITH HOOKS ──
export function CourseForm({ onAdd }: { onAdd: (title: string, xp: number) => void }) {
  const [title, setTitle] = useState<string>("");
  const [xp, setXp] = useState<number>(50);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, xp);
    setTitle("");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} placeholder="Course Title" />
      <button type="submit">Add Course</button>
    </form>
  );
}`,
          codeBreakdown: [
            { part: 'interface CourseCardProps', label: 'Strict contract defining component inputs and callback function signatures', color: '#3b82f6' },
            { part: 'React.FormEvent<HTMLFormElement>', label: 'Type-safe React synthetic form submission event', color: '#10b981' },
            { part: 'React.ChangeEvent<HTMLInputElement>', label: 'Type-safe input change event giving access to e.target.value', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Typing React event handlers as `any` instead of `React.ChangeEvent<HTMLInputElement>`',
            '❌ Believing TypeScript types automatically check backend API responses at runtime (use Zod for runtime checks)',
            '❌ Not typing `useRef<HTMLInputElement>(null)` when manipulating DOM nodes'
          ],
          proTips: [
            '💡 Use `React.ReactNode` for typing flexible children props that can accept strings, JSX, fragments, or numbers',
            '💡 Use `import type { User } from "./types"` to ensure type-only imports are completely removed by bundlers'
          ],
          interviewQuestions: [
            'How do you type React component Props, State, Hooks (`useState`, `useRef`, `useReducer`), and Event handlers in TypeScript?',
            'What is the difference between Compile-Time Type Safety (TypeScript) and Runtime Data Validation (Zod)?',
            'How do you type Express.js Request body, query parameters, and Response handlers in a Node.js TypeScript backend?'
          ],
          miniChallenge: 'Build a typed custom hook `useFetch<T>(url: string): { data: T | null; loading: boolean; error: string | null }`.',
          quiz: {
            type: 'mcq',
            question: 'React component mein `children` prop ko type karne ke liye sabse recommended aur flexible TypeScript type kaunsa hai?',
            options: ['string', 'React.ReactNode', 'JSX.Element', 'any'],
            answer: 'React.ReactNode',
            explanation: '`React.ReactNode` represents anything that can be rendered in React: JSX elements, strings, numbers, fragments, portals, null, and booleans.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`useState<string | null>(null)` mein `setName(123)` call karne par kya hoga?',
              code: 'const [name, setName] = useState<string | null>(null);\nsetName(123);',
              options: ['Compiles fine, converts 123 to "123"', 'TS Compiler Error: Argument of type "number" is not assignable to parameter of type "string | null"', 'Runtime error in browser', 'Sets name to null'],
              answer: 'TS Compiler Error: Argument of type "number" is not assignable to parameter of type "string | null"',
              explanation: 'TypeScript enforces that only `string` or `null` can be passed into `setName`.'
            }
          ],
          summary: ['React components receive strongly typed props and events', 'Zod bridges the gap between compile-time types and runtime API payloads', 'End-to-end type safety eliminates runtime data contract mismatches'],
          flashcard: { q: 'What is React.ReactNode vs JSX.Element?', a: '`JSX.Element` represents a single JSX tag; `React.ReactNode` represents anything renderable (JSX, text, number, array of elements, null, boolean).' },
          funFact: 'Over 95% of modern React and Next.js starter templates come pre-configured with TypeScript out of the box!',
          didYouKnow: 'The `@types/react` package is maintained by the community under DefinitelyTyped and is downloaded over 30 million times every week.',
          realWorldUseCases: ['Full-stack SaaS dashboard development with React & Node', 'E-commerce checkout forms with Zod validation', 'Custom typed React hooks for API data loading', 'Shared Monorepo type systems with Turborepo'],
          practiceQuestions: [
            'Build a full typed User Registration Form in React with field validation and error indicators',
            'Create an Express.js API endpoint validating request body using Zod and returning typed JSON'
          ]
        }
      ]
    }
    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: OOP & CLASSES IN TYPESCRIPT
    // ═══════════════════════════════════════════════════════
    ,{

      chapterTitle: 'Chapter 4: OOP — Classes, Abstract & Decorators',
      lessons: [
        {
          id: 'ts-classes-oop',
          title: 'Classes, Access Modifiers & Inheritance',
          emoji: '🏛️',
          xpReward: 45,
          badgeName: 'OOP Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "TypeScript Classes = JavaScript classes + type safety + access modifiers! Private, protected, public — sab kuch proper OOP 🏛️"',
            hint: '💡 Masti Sir: "Constructor shorthand use karo — `constructor(private name: string)` automatically property declare aur assign karta hai!"',
            success: '🥳 Masti Sir: "OOP TypeScript mein perfectly implement ho gaya! Professional code likh rahe ho 🔥"',
            mistake: '😅 Masti Sir: "private member child class se access nahi hota — protected use karo agar children ko access dena hai!"'
          },
          englishDef: 'TypeScript classes support all OOP principles with type safety: public/private/protected access modifiers, readonly properties, parameter properties (shorthand constructor), getters/setters, and static members.',
          hinglishExplain: 'TypeScript mein class = blueprint. Access modifiers se control karo ki kaunsa member bahar se accessible hai (public), sirf class ke andar (private), ya class aur subclasses mein (protected). Constructor shorthand se code clean rehta hai.',
          code: `// TypeScript Class with all features
class Course {
  static totalCourses: number = 0; // Shared across all instances
  
  // Constructor Shorthand (auto-declares properties!)
  constructor(
    private id: string,
    public title: string,
    protected price: number,
    readonly createdAt: Date = new Date()
  ) {
    Course.totalCourses++;
  }
  
  // Getter
  get formattedPrice(): string {
    return \`₹\${this.price.toLocaleString()}\`;
  }
  
  // Setter with validation
  set newPrice(value: number) {
    if (value < 0) throw new Error('Price cannot be negative');
    this.price = value;
  }
  
  // Method
  getInfo(): string {
    return \`\${this.title} — \${this.formattedPrice}\`;
  }
}

// Inheritance
class PaidCourse extends Course {
  constructor(id: string, title: string, price: number, private mentor: string) {
    super(id, title, price); // Call parent constructor
  }
  
  getInfo(): string {
    return \`\${super.getInfo()} | Mentor: \${this.mentor}\`;
  }
}

const react = new PaidCourse('r1', 'React Masterclass', 999, 'Masti Sir');
console.log(react.getInfo()); // React Masterclass — ₹999 | Mentor: Masti Sir
console.log(Course.totalCourses); // 1`,
          codeBreakdown: [
            { part: 'private id: string', label: 'Constructor shorthand: auto-declares private property', color: '#3b82f6' },
            { part: 'readonly createdAt', label: 'Can be set in constructor only — immutable after that', color: '#10b981' },
            { part: 'get formattedPrice()', label: 'Getter: accessed like property but runs computation', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ private members ko subclass mein access karne ki koshish',
            '❌ Static property access karna instance se — class name se access karo'
          ],
          quiz: {
            question: 'TypeScript mein `protected` access modifier ka kya matlab hai?',
            options: ['Sirf class ke andar accessible', 'Class aur iske subclasses ke andar accessible', 'Sabhi jagah accessible', 'Read-only property'],
            answer: 'Class aur iske subclasses ke andar accessible',
            explanation: 'protected = class ke andar + child classes mein. private = sirf class ke andar. public = har jagah.'
          },
          summary: ['TypeScript access modifiers (private/protected/public) OOP encapsulation enforce karte hain', 'Constructor shorthand se verbose property declarations avoid hote hain', 'readonly properties immutability enforce karti hain'],
          flashcard: { q: 'Abstract class aur Interface mein kya fark hai?', a: 'Abstract class implementation (method bodies) rakh sakta hai aur sirf extend hoti hai. Interface sirf contracts define karta hai aur implement hota hai — multiple interfaces implement ho sakti hain.' }
        },
        {
          id: 'ts-abstract-interfaces',
          title: 'Abstract Classes, Interfaces & Implements',
          emoji: '🔷',
          xpReward: 45,
          badgeName: 'Interface Guru',
          englishDef: 'Abstract classes define a base structure with abstract methods (no implementation) that must be overridden by subclasses. Interfaces define pure contracts. A class can implement multiple interfaces but extend only one class.',
          hinglishExplain: 'Abstract class ek incomplete blueprint hai — kuch methods abstract (sirf signature, koi body nahi) hote hain jo har subclass ko implement karna zaroori hai. Interface ek contract hai — class implement kare toh sab required members provide karne padenge.',
          code: `// Abstract Class Example
abstract class DatabaseAdapter {
  abstract connect(url: string): Promise<void>;
  abstract query<T>(sql: string, params?: unknown[]): Promise<T[]>;
  abstract disconnect(): Promise<void>;
  
  // Concrete method (shared implementation)
  async executeWithRetry<T>(sql: string, retries = 3): Promise<T[]> {
    for (let i = 0; i < retries; i++) {
      try {
        return await this.query<T>(sql);
      } catch (err) {
        if (i === retries - 1) throw err;
        await new Promise(r => setTimeout(r, 1000 * (i + 1)));
      }
    }
    return [];
  }
}

// Interface for contract
interface Serializable {
  serialize(): string;
  deserialize(data: string): void;
}

interface Cacheable {
  cacheKey: string;
  ttl: number;
}

// Class implementing multiple interfaces
class MongoDBAdapter extends DatabaseAdapter implements Serializable, Cacheable {
  cacheKey = 'mongo-connection';
  ttl = 300;
  
  async connect(url: string): Promise<void> {
    console.log(\`MongoDB connecting to \${url}\`);
  }
  
  async query<T>(sql: string): Promise<T[]> {
    return [] as T[];
  }
  
  async disconnect(): Promise<void> {
    console.log('MongoDB disconnected');
  }
  
  serialize(): string {
    return JSON.stringify({ adapter: 'mongodb', cacheKey: this.cacheKey });
  }
  
  deserialize(data: string): void {
    const parsed = JSON.parse(data);
    this.cacheKey = parsed.cacheKey;
  }
}`,
          quiz: {
            question: 'TypeScript mein ek class kitni abstract classes extend kar sakti hai?',
            options: ['Unlimited', 'Sirf ek (single inheritance)', '2 tak', 'Koi bhi nahi'],
            answer: 'Sirf ek (single inheritance)',
            explanation: 'TypeScript mein single inheritance hoti hai — sirf ek class extend kar sakte hain. Lekin unlimited interfaces implement ho sakti hain.'
          },
          summary: ['Abstract classes partial implementation + abstract contract deti hain', 'Interfaces pure contracts define karte hain', 'Multiple interface implementation se multiple inheritance ka effect milta hai'],
          flashcard: { q: 'Kab Interface use karein aur kab Abstract Class?', a: "Interface: Pure contracts, multiple types across unrelated classes. Abstract Class: Shared base implementation + forced overrides for related family of classes." }
        },
        {
          id: 'ts-decorators',
          title: 'TypeScript Decorators',
          emoji: '🎀',
          xpReward: 40,
          badgeName: 'Decorator Master',
          englishDef: 'Decorators are a TypeScript/JavaScript proposal that allow annotating and modifying classes, methods, properties, and parameters using @ syntax. They are heavily used in NestJS, Angular, and TypeORM frameworks.',
          hinglishExplain: 'Decorators `@` se start hote hain aur class/method ke upar lagate hain. Ye meta-programming feature hai — class ya method ka behavior modify karo bina code change kiye. NestJS, Angular, TypeORM mein bahut use hote hain.',
          code: `// Enable in tsconfig.json: "experimentalDecorators": true

// 1. Class Decorator
function Injectable(target: Function) {
  console.log(\`Class \${target.name} is injectable!\`);
}

// 2. Method Decorator — logging
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(\`[LOG] Calling \${methodName} with args:\`, args);
    const result = original.apply(this, args);
    console.log(\`[LOG] \${methodName} returned:\`, result);
    return result;
  };
  
  return descriptor;
}

// 3. Property Decorator
function Validate(target: any, propertyKey: string) {
  let value: any;
  Object.defineProperty(target, propertyKey, {
    get: () => value,
    set: (newValue: any) => {
      if (typeof newValue !== 'string') throw new Error(\`\${propertyKey} must be a string\`);
      value = newValue;
    }
  });
}

@Injectable
class UserService {
  @Validate
  name: string = 'Rahul';
  
  @Log
  greet(userId: number): string {
    return \`Hello, User #\${userId}!\`;
  }
}

const service = new UserService();
service.greet(42);
// [LOG] Calling greet with args: [42]
// [LOG] greet returned: "Hello, User #42!"`,
          quiz: {
            question: 'TypeScript Decorators enable karne ke liye tsconfig.json mein kya set karna hoga?',
            options: ['"decorators": true', '"experimentalDecorators": true', '"useDecorators": true', '"decorator": "legacy"'],
            answer: '"experimentalDecorators": true',
            explanation: 'TypeScript mein decorators abhi experimental feature hain. tsconfig.json mein "experimentalDecorators": true set karna zaroori hai.'
          },
          summary: ['Decorators @ syntax se class/method behavior modify karte hain', 'NestJS aur Angular decorators pe heavily rely karte hain', 'Method decorators original function ko wrap karke functionality add karte hain'],
          flashcard: { q: 'Decorator execution order kya hota hai?', a: 'Property/Method decorators bottom-to-top evaluate hote hain, phir Class decorator. Multiple decorators ek method pe ho toh bhi bottom-to-top.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: ADVANCED TYPES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Advanced Types — Mapped, Conditional & Template Literal',
      lessons: [
        {
          id: 'ts-mapped-types',
          title: 'Mapped Types & Index Signatures',
          emoji: '🗺️',
          xpReward: 45,
          badgeName: 'Type Mapper',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Mapped Types se existing types transform karo! Sabhi properties optional ya readonly banao ek hi line mein! 🗺️"',
            hint: '💡 Masti Sir: "Record<K, V>, Readonly<T>, Partial<T>, Required<T> — ye sab Mapped Types pe based utility types hain!"',
            success: '🥳 Masti Sir: "Mapped Types samajh aa gayi! Ab tum custom utility types khud bana sakte ho 🔥"',
            mistake: '😅 Masti Sir: "Index signatures mein key type sirf string, number, ya symbol ho sakta hai!"'
          },
          englishDef: "Mapped types create new types by iterating over the keys of an existing type using the `in keyof` syntax. They allow transforming all properties of a type (making them optional, readonly, etc.). Index signatures allow objects with dynamic keys.",
          hinglishExplain: 'Mapped types se ek type ke sabhi properties transform kar sakte ho. Jaise `Partial<User>` se sab properties optional ho jaati hain, `Readonly<User>` se sab read-only. Apne custom mapped types bhi bana sakte ho.',
          code: `// 1. Custom Mapped Types
type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
};

// Make all properties Optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Make all properties Readonly
type Immutable<T> = {
  readonly [K in keyof T]: T[K];
};

// Make all properties Nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// 2. Index Signatures — dynamic keys
interface CourseProgress {
  [courseId: string]: number; // courseId → completion percentage
}

const progress: CourseProgress = {
  'html-basics': 100,
  'react-advanced': 65,
  'typescript-mastery': 40
};

// 3. Conditional Mapped Type — Remove null from all values
type NonNullableProps<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

// Usage
const partialUser: Optional<User> = { name: 'Rahul' }; // Only name provided!
const readonlyUser: Immutable<User> = { id: 1, name: 'Priya', email: 'p@test.com', role: 'admin' };
// readonlyUser.name = 'X'; // ❌ Error: Cannot assign to 'name' readonly property`,
          quiz: {
            question: 'Mapped Type syntax mein `[K in keyof T]?` mein `?` kya karta hai?',
            options: ['Property nullable banata hai', 'Property optional banata hai', 'Property ko check karta hai', 'Property readonly banata hai'],
            answer: 'Property optional banata hai',
            explanation: '`?` modifier property ko optional banata hai. `-?` se required banate hain (Required<T> mein ye use hota hai).'
          },
          summary: ['Mapped types existing types ke har property ko transform karte hain', 'Index signatures dynamic key structures allow karte hain', 'Built-in utility types (Partial, Readonly, Required, Record) Mapped Types pe based hain'],
          flashcard: { q: 'Record<K, V> kya karta hai?', a: 'Record<Keys, ValueType> se ek object type banata hai jahan keys K type ke hain aur values V type ke hain. Eg: Record<string, number>.' }
        },
        {
          id: 'ts-conditional-types',
          title: 'Conditional Types & infer Keyword',
          emoji: '🔀',
          xpReward: 50,
          badgeName: 'Type Wizard',
          englishDef: "Conditional types use `T extends U ? X : Y` syntax — like ternary operators for types. The `infer` keyword extracts type information from a type within a conditional expression.",
          hinglishExplain: 'Conditional types type-level if-else hain: `T extends string ? "yes" : "no"`. `infer` keyword se conditional type ke andar se type extract karte hain — jaise function return type automatically nikalna.',
          code: `// 1. Basic Conditional Type
type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'

// 2. Distributed Conditional Types (Union distribution)
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; // string[] | number[]

// 3. infer keyword — Extract types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type PromiseInner<T> = T extends Promise<infer U> ? U : T;
type ArrayElement<T> = T extends (infer E)[] ? E : never;

// Practical usage
async function fetchUser(id: number): Promise<{ name: string; id: number }> {
  return { name: 'Rahul', id };
}

type FetchUserReturn = ReturnType<typeof fetchUser>;
// type: Promise<{ name: string; id: number }>

type UserData = PromiseInner<FetchUserReturn>;
// type: { name: string; id: number }

// 4. Complex: Deep Readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

type Config = {
  db: { host: string; port: number };
  app: { name: string; debug: boolean };
};

const config: DeepReadonly<Config> = {
  db: { host: 'localhost', port: 5432 },
  app: { name: 'CodeMasti', debug: false }
};
// config.db.host = 'x'; // ❌ Error: Cannot assign to 'host' — deep readonly!`,
          quiz: {
            question: '`infer` keyword TypeScript mein kahan use hota hai?',
            options: ['Variable declare karne ke liye', 'Conditional Types ke andar type extract karne ke liye', 'Generic constraints ke liye', 'Abstract methods ke liye'],
            answer: 'Conditional Types ke andar type extract karne ke liye',
            explanation: 'infer sirf conditional type expressions mein use hota hai. Ye pattern match karke type extract karta hai — jaise function se return type nikalna ya Promise se inner type.'
          },
          summary: ['Conditional types type-level ternary operators hain', 'infer keyword se types conditional expressions mein extract hote hain', 'Built-in ReturnType, Parameters, Awaited ye sab infer use karte hain'],
          flashcard: { q: 'NonNullable<T> kya karta hai?', a: 'T se null aur undefined remove karta hai. Jaise NonNullable<string | null | undefined> => string' }
        },
        {
          id: 'ts-template-literal-types',
          title: 'Template Literal Types & String Manipulation',
          emoji: '📝',
          xpReward: 40,
          badgeName: 'String Typer',
          englishDef: 'Template literal types use backtick syntax to create string types by combining literal types. TypeScript also provides built-in string manipulation types: Uppercase, Lowercase, Capitalize, Uncapitalize.',
          hinglishExplain: 'Template literal types string interpolation jaisi hoti hain lekin type level par. `${string}-id` type sirf "something-id" strings allow karega. Event names, API routes, CSS properties — sab type-safe ban jaate hain.',
          code: `// Template Literal Types
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = \`on\${Capitalize<EventName>}\`; // 'onClick' | 'onFocus' | 'onBlur'

// API Route types
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type APIRoute = \`/api/\${string}\`;

// CSS property types
type Direction = 'top' | 'right' | 'bottom' | 'left';
type Padding = \`padding-\${Direction}\`;
// 'padding-top' | 'padding-right' | 'padding-bottom' | 'padding-left'

// String Manipulation Types
type Original = 'hello world typescript';
type Upper = Uppercase<Original>;       // 'HELLO WORLD TYPESCRIPT'
type Lower = Lowercase<'REACT NEXT'>; // 'react next'
type Cap = Capitalize<Original>;        // 'Hello world typescript'

// Practical: Getter/Setter types from object
type ObjectKeys = { name: string; age: number; email: string };

type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

type UserGetters = Getters<ObjectKeys>;
// { getName: () => string; getAge: () => number; getEmail: () => string; }`,
          quiz: {
            question: 'Template literal type `` `prefix-\${string}` `` kis tarah ke strings allow karega?',
            options: ['Sirf "prefix-" string', 'Koi bhi string jo "prefix-" se start ho', 'Sirf numbers ke baad "prefix-"', 'Koi bhi string'],
            answer: 'Koi bhi string jo "prefix-" se start ho',
            explanation: '`` `prefix-\${string}` `` type "prefix-" ke baad koi bhi string value allow karta hai — "prefix-abc", "prefix-123", "prefix-xyz" etc. sab valid hain.'
          },
          summary: ['Template literal types string patterns type-safe banate hain', 'Uppercase, Lowercase, Capitalize built-in string manipulation types hain', 'as clause se mapped type keys transform ho sakti hain'],
          flashcard: { q: 'Template Literal Types ka real-world use case kya hai?', a: 'Event handlers (onClick, onFocus), API routes (/api/users), CSS class names, database column names — sab type-safe string patterns banane ke liye.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: UTILITY TYPES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Built-in Utility Types — Partial, Pick, Omit & More',
      lessons: [
        {
          id: 'ts-utility-types-basic',
          title: 'Partial, Required, Readonly, Record & Pick',
          emoji: '🛠️',
          xpReward: 40,
          badgeName: 'Utility Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "TypeScript ke built-in utility types — ye sab problems jo aap solve karte rahe, TypeScript ne already solve kar diye! 🛠️"',
            hint: '💡 Masti Sir: "Update API mein sirf kuch fields update karne hain? `Partial<User>` use karo! All required banana hai? `Required<T>`! Simple!"',
            success: '🥳 Masti Sir: "Utility types perfectly use kar rahe ho! Type definitions zyada DRY aur maintainable hain 🔥"',
            mistake: '😅 Masti Sir: "Pick aur Omit confuse karo mat — Pick include karta hai listed keys, Omit exclude karta hai!"'
          },
          englishDef: "TypeScript's built-in utility types transform existing types without rewriting them. Most common: Partial<T> (all optional), Required<T> (all required), Readonly<T> (all readonly), Pick<T,K> (select keys), Omit<T,K> (exclude keys), Record<K,V> (key-value map).",
          hinglishExplain: 'Utility types = pre-made type transformers. Partial se ek type ke sabhi properties optional ho jaate hain (UPDATE API ke liye). Pick se sirf selected properties rakhte hain. Omit se kuch properties hata dete hain. Ye sab daily use hote hain!',
          code: `type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
};

// Partial<T> — All optional (great for PATCH/update APIs)
type UpdateUserDTO = Partial<Omit<User, 'id' | 'createdAt'>>;
// { name?: string; email?: string; password?: string; role?: 'admin' | 'user'; }

// Required<T> — All required
type RequiredConfig = Required<Partial<User>>;

// Readonly<T> — Immutable
type ImmutableUser = Readonly<User>;

// Pick<T, K> — Select specific keys
type PublicUser = Pick<User, 'id' | 'name' | 'email' | 'role'>;
// No password exposed! 🔐

// Omit<T, K> — Exclude specific keys
type CreateUserDTO = Omit<User, 'id' | 'createdAt'>;
// { name: string; email: string; password: string; role: 'admin' | 'user'; }

// Record<K, V> — Key-value map
type CourseMap = Record<string, { title: string; instructor: string }>;
const courses: CourseMap = {
  'react-101': { title: 'React Basics', instructor: 'Masti Sir' },
  'ts-advanced': { title: 'TypeScript Pro', instructor: 'Masti Sir' }
};

// Combining utility types
type LoginDTO = Pick<User, 'email' | 'password'>;
type UserResponse = Omit<User, 'password'>; // Never send password in response!`,
          interviewQuestions: [
            'Partial aur Required utility types kab use karte hain?',
            'Pick vs Omit: kaunsa kab choose karein?'
          ],
          quiz: {
            question: '`Omit<User, "password" | "id">` kya return karta hai?',
            options: ['Sirf password aur id wala type', 'User type se password aur id hatakar baki sabhi properties ka type', 'Empty type', 'Required<User>'],
            answer: 'User type se password aur id hatakar baki sabhi properties ka type',
            explanation: "Omit specified keys ko exclude karta hai aur remaining properties ka type return karta hai. Password API response mein kabhi mat bhejo!"
          },
          summary: ['Partial, Pick, Omit, Record daily TypeScript development mein use hote hain', 'CreateDTO, UpdateDTO, ResponseDTO patterns banane ke liye ye utility types essential hain', 'Utility types combine karke complex transformations possible hain'],
          flashcard: { q: 'Exclude<T, U> aur Omit<T, K> mein kya fark hai?', a: "Exclude union types ke liye hai (Exclude<'a'|'b'|'c', 'a'> => 'b'|'c'). Omit object types ke liye hai (object keys exclude karna)." }
        },
        {
          id: 'ts-extract-exclude-return',
          title: 'Extract, Exclude, ReturnType, Parameters & Awaited',
          emoji: '🔬',
          xpReward: 45,
          badgeName: 'Advanced Type Pro',
          englishDef: "Extract<T,U> extracts members from T assignable to U. Exclude<T,U> removes members from T assignable to U. ReturnType<T> gets function's return type. Parameters<T> gets parameter types tuple. Awaited<T> unwraps Promise types.",
          hinglishExplain: 'Ye utility types function types aur union types se information extract karne ke liye use hote hain. ReturnType aur Parameters bahut useful hain jab function ki types manually likhna redundant ho.',
          code: `// Extract & Exclude — for Union Types
type Status = 'pending' | 'active' | 'suspended' | 'banned';
type ActiveStatus = Extract<Status, 'active' | 'suspended'>; // 'active' | 'suspended'
type BlockedStatus = Exclude<Status, 'pending' | 'active'>; // 'suspended' | 'banned'

// ReturnType — Get what a function returns
async function getUserWithCourses(id: number) {
  return { id, name: 'Rahul', courses: ['react', 'typescript'] };
}

type UserWithCourses = Awaited<ReturnType<typeof getUserWithCourses>>;
// { id: number; name: string; courses: string[] }

// Parameters — Get function parameter types
function createCourse(title: string, price: number, category: string): void {}

type CourseParams = Parameters<typeof createCourse>;
// [title: string, price: number, category: string]

type FirstParam = CourseParams[0]; // string (title)

// Practical: Wrapping external function
function withLogging<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
  return (...args) => {
    console.log('Calling with:', args);
    return fn(...args);
  };
}

const loggedCreateCourse = withLogging(createCourse);
loggedCreateCourse('React Pro', 999, 'frontend'); // Typed!`,
          quiz: {
            question: '`Awaited<Promise<string>>` ka result kya hoga?',
            options: ['Promise<string>', 'string', 'unknown', 'never'],
            answer: 'string',
            explanation: 'Awaited<T> Promise ko unwrap karta hai. Awaited<Promise<string>> = string. Awaited<Promise<Promise<number>>> = number (deeply unwraps).'
          },
          summary: ['ReturnType aur Parameters function signatures se types extract karte hain', 'Awaited<T> Promise chains ko unwrap karta hai', 'Extract aur Exclude union types ko filter karte hain'],
          flashcard: { q: 'ConstructorParameters<T> kya karta hai?', a: 'Class constructor ke parameter types tuple return karta hai. Eg: ConstructorParameters<typeof User> = [id: number, name: string]' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: TSCONFIG & ADVANCED PATTERNS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: tsconfig.json, Type Guards & Advanced Patterns',
      lessons: [
        {
          id: 'ts-tsconfig-setup',
          title: 'tsconfig.json Deep Dive & Compiler Options',
          emoji: '⚙️',
          xpReward: 35,
          badgeName: 'Config Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "tsconfig.json TypeScript ka heart hai! Sahi options set nahi kiye toh bugs production mein aayenge. Har option samjho! ⚙️"',
            hint: '💡 Masti Sir: "strict: true lagao hamesha! Ye shorthand hai strictNullChecks, strictFunctionTypes, strictBindCallApply etc. sabke liye!"',
            success: '🥳 Masti Sir: "tsconfig perfectly configured! Compiler maximum type safety enforce kar raha hai 🔥"',
            mistake: '😅 Masti Sir: "skipLibCheck: true laga diya? Library types ke errors hide ho jaayenge — careful!"'
          },
          englishDef: "tsconfig.json configures the TypeScript compiler behavior. Key options: strict mode, module system (ESNext/CommonJS), target JavaScript version, paths aliases, include/exclude patterns, and source maps for debugging.",
          hinglishExplain: 'tsconfig.json project root mein hota hai. `tsc --init` se auto-generate hota hai. strict: true maximum safety deta hai. paths se `@components/Button` jaisi aliases ban jaati hain. outDir se compiled JS kahan jaaye specify hota hai.',
          code: `{
  "compilerOptions": {
    "target": "ES2022",           // Output JS version
    "lib": ["ES2022", "DOM"],     // Available APIs
    "module": "ESNext",           // Module format
    "moduleResolution": "Bundler", // How modules are resolved
    
    // Strictness (always enable these!)
    "strict": true,               // Enables all strict checks
    "noImplicitAny": true,        // Error on implicit 'any'
    "strictNullChecks": true,     // Null/undefined safety
    "noUnusedLocals": true,       // Error on unused variables
    "noUnusedParameters": true,   // Error on unused parameters
    "exactOptionalPropertyTypes": true,
    
    // Output
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,          // Generate .d.ts files
    "sourceMap": true,            // Debug source maps
    
    // Path Aliases (import cleanliness!)
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@utils/*": ["./src/utils/*"]
    },
    
    // JSX (for React projects)
    "jsx": "react-jsx",
    
    // Skip type checking of .d.ts declaration files
    "skipLibCheck": false
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}`,
          quiz: {
            question: '`strict: true` tsconfig option kya enable karta hai?',
            options: ['Sirf strictNullChecks', 'Compilation faster karta hai', 'Multiple strict options ek saath: noImplicitAny, strictNullChecks, strictFunctionTypes, strictBindCallApply etc.', 'Sirf syntax errors check karta hai'],
            answer: 'Multiple strict options ek saath: noImplicitAny, strictNullChecks, strictFunctionTypes, strictBindCallApply etc.',
            explanation: 'strict: true ek shorthand flag hai jo kaafi strict checking options ek saath enable karta hai. Production TypeScript projects mein hamesha true rakhna chahiye.'
          },
          summary: ['tsconfig.json TypeScript compiler behavior control karta hai', 'strict: true maximum safety ke liye zaroori hai', 'paths aliases se clean imports milte hain (@ prefix)'],
          flashcard: { q: 'declaration: true kya karta hai tsconfig mein?', a: 'TypeScript library banate waqt .d.ts type declaration files generate karta hai jisse dusre TypeScript users types consume kar sakein.' }
        },
        {
          id: 'ts-type-guards',
          title: 'Type Guards, Narrowing & Assertion Functions',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Narrowing Ninja',
          englishDef: "Type guards narrow the type of a value within a conditional block. typeof, instanceof, 'in' operator, custom type predicates (is keyword), and assertion functions are various type narrowing techniques.",
          hinglishExplain: 'TypeScript runtime par types nahi hote, lekin conditional checks se TypeScript samajhta hai ki ek specific branch mein kaunsa type hoga (narrowing). Custom type guard functions `value is Type` return type se TypeScript ko explicitly batate hain.',
          code: `// Type union
type Circle = { kind: 'circle'; radius: number };
type Rectangle = { kind: 'rectangle'; width: number; height: number };
type Triangle = { kind: 'triangle'; base: number; height: number };
type Shape = Circle | Rectangle | Triangle;

// 1. Discriminated Union Narrowing (Best Pattern!)
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2; // TypeScript knows: Circle
    case 'rectangle':
      return shape.width * shape.height;   // TypeScript knows: Rectangle
    case 'triangle':
      return 0.5 * shape.base * shape.height; // TypeScript knows: Triangle
    default:
      // Exhaustiveness check!
      const _exhaustive: never = shape;
      throw new Error('Unknown shape');
  }
}

// 2. Custom Type Predicate
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === 'circle';
}

// 3. Assertion Function
function assertIsString(val: unknown): asserts val is string {
  if (typeof val !== 'string') {
    throw new Error(\`Expected string but got \${typeof val}\`);
  }
}

// Usage
const shape: Shape = { kind: 'circle', radius: 5 };

if (isCircle(shape)) {
  console.log(shape.radius); // TypeScript knows: Circle!
}

function processInput(val: unknown) {
  assertIsString(val);
  console.log(val.toUpperCase()); // TypeScript knows: string after assertion!
}`,
          interviewQuestions: [
            'TypeScript mein Type Narrowing kaise kaam karta hai?',
            'Custom Type Predicate function kya hota hai aur kab use karte hain?',
            'Exhaustiveness checking kaise implement karte hain TypeScript mein?'
          ],
          quiz: {
            question: 'Custom type predicate function ka return type kya hota hai?',
            options: ['boolean', 'void', 'value is Type', 'unknown'],
            answer: 'value is Type',
            explanation: '`function isString(val: unknown): val is string` — ye return type TypeScript ko batata hai ki agar function true return kare toh val string hai.'
          },
          summary: ['Discriminated unions narrowing ka best pattern hain', 'never type se exhaustiveness check karo switch statements mein', 'Assertion functions runtime validation + compile time narrowing dete hain'],
          flashcard: { q: 'Exhaustiveness checking kya hai aur kyu useful hai?', a: 'never type assignment se TypeScript ensure karta hai ki switch/if-else mein har possible case handle ho. Naya type add hone par compiler immediately error deta hai.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: PRODUCTION PATTERNS & FINAL PROJECT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Production Patterns, Declaration Files & Capstone',
      lessons: [
        {
          id: 'ts-declaration-files',
          title: 'Declaration Files (.d.ts) & @types Packages',
          emoji: '📋',
          xpReward: 40,
          badgeName: 'Type Declarant',
          englishDef: 'Declaration files (.d.ts) describe the types of JavaScript libraries for TypeScript. @types packages (DefinitelyTyped) provide type definitions for popular JS libraries. You can write custom declarations for untyped libraries.',
          hinglishExplain: '.d.ts files pure type definitions hote hain — koi runtime code nahi. Ye TypeScript ko batate hain ki kisi JS library mein kaunse functions/types hain. `npm install @types/lodash` se lodash ke types milte hain. Custom declaration banao untyped libraries ke liye.',
          code: `// Example: Writing custom .d.ts for an untyped library
// File: declarations/legacy-analytics.d.ts

declare module 'legacy-analytics' {
  export interface TrackingEvent {
    name: string;
    userId?: string;
    properties?: Record<string, string | number | boolean>;
    timestamp?: number;
  }
  
  export function track(event: TrackingEvent): void;
  export function identify(userId: string, traits?: Record<string, unknown>): void;
  export function reset(): void;
  
  interface AnalyticsConfig {
    writeKey: string;
    debug?: boolean;
    host?: string;
  }
  
  export function initialize(config: AnalyticsConfig): void;
}

// Augmenting existing module types
declare module 'express' {
  interface Request {
    user?: { id: string; role: string }; // Extend Express Request!
    requestId?: string;
  }
}

// Global augmentation
declare global {
  interface Window {
    analytics: { track: (name: string, props?: object) => void };
    __APP_VERSION__: string;
  }
}`,
          quiz: {
            question: '`declare module "library-name" {}` ka kya kaam hai .d.ts file mein?',
            options: ['Library install karta hai', 'Module ke type definitions declare karta hai taaki TypeScript usse type-safe use kar sake', 'Module ko bundle karta hai', 'Module ko import karta hai'],
            answer: 'Module ke type definitions declare karta hai taaki TypeScript usse type-safe use kar sake',
            explanation: 'declare module se untyped JavaScript libraries ke types TypeScript ko bataye jaate hain. Isse TypeScript wo library use karne par type checking kar sakta hai.'
          },
          summary: ['.d.ts files runtime code nahi, sirf type definitions contain karte hain', '@types/* packages DefinitelyTyped community ke type definitions hain', 'Module augmentation se existing library types extend ho sakti hain'],
          flashcard: { q: 'DefinitelyTyped kya hai?', a: 'GitHub pe ek massive repository jo 10,000+ JavaScript libraries ke liye community-maintained TypeScript declaration files (.d.ts) host karta hai @types scope mein.' }
        },
        {
          id: 'ts-generics-advanced',
          title: 'Advanced Generics — Constraints, Defaults & Inference',
          emoji: '🧬',
          xpReward: 50,
          badgeName: 'Generics Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Generics — TypeScript ka ultimate power tool! Ek function likho, hazaron types ke saath kaam karo! 🧬"',
            hint: '💡 Masti Sir: "`extends` se constraints lagao — `T extends object` ya `T extends keyof U` — type safety ensure karo!"',
            success: '🥳 Masti Sir: "Advanced Generics perfectly implement ho gayi! Type-safe, reusable, production-grade code 🔥"',
            mistake: '😅 Masti Sir: "Generic type parameters hamesha single letter nahi honi chahiye! `TData`, `TError`, `TKey` — descriptive names use karo!"'
          },
          englishDef: 'Advanced generics include: constraints (T extends interface), default types (T = string), multiple type parameters with relationships, and generic class/interface patterns. These enable type-safe, reusable abstractions.',
          hinglishExplain: 'Advanced generics se: constraints se T ko specific shape tak restrict karo, default types se optional generic parameters do, multiple T, U se inter-related types express karo. Ye production code mein API clients, state managers, form handlers sab banane ke liye use hote hain.',
          code: `// 1. Generic Constraints
interface HasId { id: string | number; }
interface HasTimestamps { createdAt: Date; updatedAt: Date; }

// T must extend HasId — guarantees T has .id property
function findById<T extends HasId>(items: T[], id: T['id']): T | undefined {
  return items.find(item => item.id === id);
}

// 2. Multiple constrained generics with relationship
function getProperty<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey): TObj[TKey] {
  return obj[key]; // Type-safe property access!
}

const user = { id: 1, name: 'Rahul', role: 'admin' as const };
const name = getProperty(user, 'name'); // type: string ✅
// getProperty(user, 'age'); // ❌ TS Error: 'age' not in user

// 3. Generic class
class Repository<TEntity extends HasId & HasTimestamps> {
  private items: TEntity[] = [];
  
  add(item: TEntity): TEntity {
    this.items.push(item);
    return item;
  }
  
  findById(id: TEntity['id']): TEntity | undefined {
    return this.items.find(i => i.id === id);
  }
  
  getAll(filter?: Partial<TEntity>): TEntity[] {
    if (!filter) return this.items;
    return this.items.filter(item =>
      Object.entries(filter).every(([k, v]) => item[k as keyof TEntity] === v)
    );
  }
}

// 4. Default Generic Types
type ApiResponse<TData = unknown, TError = string> = {
  data: TData | null;
  error: TError | null;
  loading: boolean;
  status: number;
};

type UserResponse = ApiResponse<{ id: number; name: string }>;
type ErrorResponse = ApiResponse<never, { code: string; message: string }>;`,
          quiz: {
            question: '`T extends keyof U` constraint kya ensure karta hai?',
            options: ['T ko U se extend karna padega', 'T ki value U object ki ek valid key hogi', 'T aur U same type honge', 'T ko U mein assign kar sakte hain'],
            answer: 'T ki value U object ki ek valid key hogi',
            explanation: '`T extends keyof U` matlam T = U ke kisi bhi property key ka union. getProperty<User, "name"> mein "name" user ki ek valid key hai — type-safe property access.'
          },
          summary: ['Constraints se generic types restrict hote hain specific shapes tak', 'keyof ke saath generics se type-safe property access milta hai', 'Default generic parameters optional type arguments dete hain'],
          flashcard: { q: 'Infer kab use karte hain generic type mein?', a: 'Conditional type mein jab automatically kisi nested type ko extract karna ho — jaise Promise<infer T> se inner type nikalna ya function se ReturnType.' }
        },
        {
          id: 'ts-final-project',
          title: 'TypeScript Complete Production Project',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'TypeScript Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "FINAL BOSS! Sab kuch ek mein — Types, Generics, Utility Types, Decorators, Type Guards, Declaration Files! TypeScript Master bano! 🏆"',
            hint: '💡 Masti Sir: "Production TypeScript project = strict mode + descriptive generic names + no any + shared types package + zod validation. Ye sab must-haves hain!"',
            success: '🥳 Masti Sir: "TYPESCRIPT MASTER! Zero runtime type errors, maximum IDE support, production-grade type safety! Tu ek real senior developer hai ab! 🎉🔥"',
            mistake: '😅 Masti Sir: "`any` ek baar bhi use kiya? Wapas jaao aur fix karo — compromise nahi! 😄"'
          },
          englishDef: 'A production-ready TypeScript project follows: strict mode, descriptive type names, shared types between frontend/backend, Zod for runtime validation, proper tsconfig setup, no any usage, and comprehensive type coverage.',
          hinglishExplain: 'Complete TypeScript project mein: shared types package (frontend + backend same types use kare), Zod schema se runtime validation + TypeScript types simultaneously, Generic API client, Custom hooks, Repository pattern — sab type-safe.',
          code: `// Shared Types Package (monorepo/packages/types)
// types/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'instructor' | 'student';
  createdAt: Date;
}

export type CreateUserDTO = Omit<User, 'id' | 'createdAt'> & { password: string };
export type UpdateUserDTO = Partial<Omit<User, 'id' | 'createdAt'>>;
export type PublicUser = Omit<User, 'password'>;

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Generic API Client
class TypedApiClient {
  private baseUrl: string;
  
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  
  async get<TResponse>(path: string): Promise<TResponse> {
    const res = await fetch(\`\${this.baseUrl}\${path}\`);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return res.json() as Promise<TResponse>;
  }
  
  async post<TBody, TResponse>(path: string, body: TBody): Promise<TResponse> {
    const res = await fetch(\`\${this.baseUrl}\${path}\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return res.json() as Promise<TResponse>;
  }
}

// Usage
const api = new TypedApiClient('https://api.codemasti.com');

const users = await api.get<PaginatedResponse<User>>('/api/users');
const newUser = await api.post<CreateUserDTO, User>('/api/users', {
  name: 'Rahul', email: 'r@test.com', role: 'student', password: 'Pass123!'
});`,
          challenge: {
            instruction: 'TypeScript mein ek fully typed repository pattern implement karo: Generic Repository class, typed CRUD operations, Partial update support aur find methods.',
            initialCode: `// TypeScript Repository Pattern
interface Entity {
  id: string;
}

class Repository<T extends Entity> {
  // Implement: add, findById, findAll, update, delete
  private items: T[] = [];
  
  // TODO: Add all methods with proper TypeScript types
}
`,
            validator: (code) => {
              const n = code.toLowerCase();
              return n.includes('extends') && (n.includes('generic') || n.includes('<t>') || n.includes('items'));
            },
            successMessage: '🏆 TYPESCRIPT MASTER CERTIFICATE EARNED! Type-safe code likhna tum ab perfectly jaante ho! +60 XP!'

          },
          interviewQuestions: [
            'TypeScript mein type safety achieve karne ke best practices kya hain?',
            'TypeScript aur JavaScript mein kya choose karein naye project ke liye?',
            'TypeScript mein runtime validation kaise karte hain compile-time types ke saath?'
          ],
          quiz: {
            question: 'TypeScript project mein `any` type use karna kab acceptable hai?',
            options: ['Kabhi nahi — hamesha specific type do', 'Sirf when genuinely type is unknown — prefer unknown instead', 'Har jagah for simplicity', 'Third-party library code mein always'],
            answer: 'Sirf when genuinely type is unknown — prefer unknown instead',
            explanation: 'any ek escape hatch hai jo type checking disable karta hai. Agar type genuinely unknown hai toh unknown prefer karo (safer). any sirf extreme cases mein — legacy migration, truly dynamic data.'
          },
          summary: ['TypeScript Course 100% Complete! 🏆', 'Types, Interfaces, Generics, Utility Types, Decorators, tsconfig, Declaration Files — sab master hua!', 'Next: Full-stack projects mein TypeScript apply karo!'],
          flashcard: { q: 'TypeScript ka sabse bada real-world benefit kya hai?', a: 'Refactoring confidence! TypeScript se ek file/function change karne par compiler turant batata hai ki kaun kaunsi jagah break hui. Bina fear ke large codebase refactor hota hai.' },
          funFact: '🎉 TypeScript GitHub pe sabse popular languages mein aata hai! Microsoft, Google, Airbnb, Stripe, Slack sab TypeScript use karte hain production mein!'
        }
      ]
    }
  ]
}

export default typescriptCourse
