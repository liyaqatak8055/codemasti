// Additional Courses Interview Tracks: TypeScript, Next.js, Git, DevOps, REST API, C/C++
export const MORE_COURSE_INTERVIEWS = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. TYPESCRIPT INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'typescript-interview',
    courseId: 'typescript',
    title: 'TypeScript Interview',
    icon: '🔷',
    category: 'frontend',
    categoryLabel: 'Modern Web & Types',
    description: 'Generics, Utility Types (Partial, Pick, Omit), Discriminated Unions, Type Narrowing, any vs unknown, and Type vs Interface.',
    totalQuestions: 20,
    questions: [
      {
        id: 'ts-1',
        question: 'What is the difference between Type Alias (type) and Interface in TypeScript?',
        companies: ['Google', 'Microsoft', 'Meta'],
        difficulty: 'Medium to Hard',
        answer: `1. Interface: Open for Declaration Merging (declaring same interface twice merges properties), extends with 'extends', best for object-oriented public library APIs.
2. Type Alias: Can define Primitives, Unions (type ID = string | number), Tuples, Mapped Types, and Conditional Types. Cannot be reopened for declaration merging.`,
        traps: 'Thinking interfaces can create union types directly.',
        followUp: ['What is declaration merging in TypeScript interfaces?']
      },
      {
        id: 'ts-2',
        question: 'Explain any vs unknown vs never types in TypeScript.',
        companies: ['Apple', 'Microsoft', 'Amazon'],
        difficulty: 'Hard',
        answer: `any: disables all type checking (unsafe escape hatch). unknown: type-safe top type; forces explicit type narrowing/type guard before accessing properties. never: bottom type representing unreachable code (e.g. functions that throw errors or infinite loops, or exhaustive switch checks).`,
        traps: 'Using any in API responses instead of unknown + Zod runtime parsing.',
        followUp: ['How does never help achieve Exhaustive Checking in switch statements?']
      },
      {
        id: 'ts-3',
        question: 'What are TypeScript Generics and how do Generic Constraints (extends) work?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Generics enable creating reusable components working over multiple types while preserving type safety:
\`\`\`ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`
Generic constraint <K extends keyof T> guarantees K is a valid key on object T at compile time.`,
        traps: 'Using <T extends any> which provides zero type constraint.',
        followUp: ['What is default generic parameter syntax: <T = string>?']
      },
      {
        id: 'ts-4',
        question: 'Explain Discriminated Unions (Tagged Unions) and Exhaustive Pattern Matching.',
        companies: ['Meta', 'Microsoft', 'Apple'],
        difficulty: 'Hard',
        answer: `A Discriminated Union is a union of object types sharing a common literal discriminator property (e.g. { status: 'loading' } | { status: 'success', data: T } | { status: 'error', error: Error }). TypeScript automatically narrows properties inside switch(state.status).`,
        traps: 'Forgetting the shared literal discriminator property in union members.',
        followUp: ['How does default: const _exhaustive: never = state ensure all union cases are handled?']
      },
      {
        id: 'ts-5',
        question: 'What are Built-in Utility Types: Partial, Required, Readonly, Pick, Omit, Record?',
        companies: ['Microsoft', 'Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `- Partial<T>: Makes all properties optional.
- Required<T>: Makes all properties required.
- Readonly<T>: Makes all properties readonly.
- Pick<T, 'id' | 'name'>: Selects subset of keys.
- Omit<T, 'password'>: Removes subset of keys.
- Record<K, V>: Creates object type with key type K and value type V.`,
        traps: 'Using Omit with typo key names (TypeScript does not error if omitted key does not exist unless typed with keyof).',
        followUp: ['How to implement Pick<T, K> from scratch using Mapped Types?']
      },
      {
        id: 'ts-6',
        question: 'Explain Type Guards: typeof, instanceof, in operator, and User-Defined Type Predicates (is).',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `Type guards narrow types at runtime:
1. typeof x === 'string'
2. x instanceof Date
3. 'role' in user
4. Custom Type Predicate: function isFish(pet: Fish | Bird): pet is Fish { return (pet as Fish).swim !== undefined; }`,
        traps: 'Returning boolean from custom type guard without the `arg is Type` predicate return type.',
        followUp: ['What is asserts condition in assertion functions?']
      },
      {
        id: 'ts-7',
        question: 'What are Conditional Types and the infer keyword in TypeScript?',
        companies: ['Google', 'Meta'],
        difficulty: 'Hard',
        answer: `Conditional types follow ternary syntax: T extends U ? X : Y.
infer keyword deduces types within conditional expressions:
\`\`\`ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
\`\`\``,
        traps: 'Using infer outside the extends condition branch.',
        followUp: ['What is distributive conditional types over union types?']
      },
      {
        id: 'ts-8',
        question: 'What is the difference between keyof and typeof in TypeScript?',
        companies: ['Infosys', 'IBM'],
        difficulty: 'Medium',
        answer: `typeof captures the TypeScript type of an existing JavaScript runtime variable. keyof extracts a union of string/number keys from a Type:
\`\`\`ts
const config = { host: 'localhost', port: 8080 };
type ConfigKeys = keyof typeof config; // 'host' | 'port'
\`\`\``,
        traps: 'Using keyof directly on a JS object variable without typeof.',
        followUp: ['What is Indexed Access Type: typeof config["port"]?']
      },
      {
        id: 'ts-9',
        question: 'Explain Mapped Types and Template Literal Types in TypeScript.',
        companies: ['Microsoft', 'Apple'],
        difficulty: 'Hard',
        answer: `Mapped Types iterate over keys: type Readonly<T> = { readonly [P in keyof T]: T[P] }. Template Literal Types build string types using template syntax: type Event = \`on\${Capitalize<'click' | 'change'>}\` -> 'onClick' | 'onChange'.`,
        traps: 'Using mapped types inside interfaces (mapped types must use type alias).',
        followUp: ['What is Key Remapping using as: [P in keyof T as \`get\${Capitalize<string & P>}\`]?']
      },
      {
        id: 'ts-10',
        question: 'What are TypeScript Enums vs Const Enums vs Literal Unions?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Medium to Hard',
        answer: `Regular enum generates bidirectional lookup runtime JavaScript objects (increases bundle size). const enum inlines numeric/string values directly at compile-time (no runtime JS object). Best practice in modern TS: String Literal Unions (type Direction = 'North' | 'South' | 'East' | 'West') with as const.`,
        traps: 'Numeric enums allow invalid numbers to be assigned without compiler errors.',
        followUp: ['What is const assertion (as const) on object literals?']
      },
      {
        id: 'ts-11',
        question: 'What is strict mode in tsconfig.json and what compiler flags does it enable?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Medium',
        answer: `"strict": true enables: strictNullChecks (null/undefined are distinct types), noImplicitAny, strictFunctionTypes, strictPropertyInitialization, noImplicitThis, and useUnknownInCatchVariables.`,
        traps: 'Disabling strictNullChecks which leads to runtime null reference crashes.',
        followUp: ['What is noUncheckedIndexedAccess compiler flag?']
      },
      {
        id: 'ts-12',
        question: 'Explain Covariance, Contravariance, and Invariance in TypeScript function types.',
        companies: ['Google', 'Meta'],
        difficulty: 'Hard',
        answer: `Return types are Covariant (subtype is assignable). Parameter types under strictFunctionTypes are Contravariant (supertype is assignable to parameter). This ensures calling the function will never pass unexpected arguments.`,
        traps: 'Assuming function parameters and return types follow the same variance direction.',
        followUp: ['What is bivariant method declaration syntax vs contravariant property syntax?']
      },
      {
        id: 'ts-13',
        question: 'What are Ambient Declarations (.d.ts files) and declare keyword?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `.d.ts files contain pure type declarations with zero runtime JavaScript output. declare keyword informs TypeScript that a variable, module, or function exists globally at runtime (e.g. declare var process: any). Used by @types packages.`,
        traps: 'Writing executable JavaScript code inside a .d.ts declaration file.',
        followUp: ['What is declare module "*.png" used for in frontend bundlers?']
      },
      {
        id: 'ts-14',
        question: 'What is Non-Null Assertion Operator (!) and when is it dangerous?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Beginner to Medium',
        answer: `x! tells TypeScript to ignore null and undefined checks. Dangerous because if x is actually null at runtime, it causes unhandled exceptions. Always prefer optional chaining (?.) or explicit type guards over !.`,
        traps: 'Overusing ! to bypass compiler errors instead of fixing actual null safety.',
        followUp: ['What is Optional Chaining (?.) vs Nullish Coalescing (??)?']
      },
      {
        id: 'ts-15',
        question: 'Explain TypeScript Module Resolution: NodeNext vs Bundler vs Classic.',
        companies: ['Vercel', 'Google'],
        difficulty: 'Hard',
        answer: `NodeNext strictly enforces Node.js ESM standards (requires explicit .js file extensions in imports and checks exports map in package.json). Bundler mimics Vite/Webpack rules allowing extensionless imports and arbitrary asset imports.`,
        traps: 'Using moduleResolution: "node" with pure ESM dependencies causing import resolution failures.',
        followUp: ['What is isolatedModules flag in tsconfig?']
      },
      {
        id: 'ts-16',
        question: 'How do you create Brands / Nominal Typing in TypeScript structural type system?',
        companies: ['Google', 'Stripe'],
        difficulty: 'Hard',
        answer: `TypeScript is structurally typed (duck typed). To enforce nominal types (e.g. prevent passing a UserId to a function expecting OrderId):
\`\`\`ts
type Brand<K, T> = K & { __brand: T };
type UserId = Brand<string, 'UserId'>;
type OrderId = Brand<string, 'OrderId'>;
\`\`\``,
        traps: 'Passing raw strings directly to branded types without validation casting helper.',
        followUp: ['How does Stripe SDK use branded types for idempotency keys?']
      },
      {
        id: 'ts-17',
        question: 'What is satisfies operator introduced in TypeScript 4.9?',
        companies: ['Microsoft', 'Meta'],
        difficulty: 'Hard',
        answer: `satisfies validates that an expression matches a type WITHOUT widening the inferred type:
\`\`\`ts
const palette = { red: [255, 0, 0], green: "#00ff00" } satisfies Record<string, string | number[]>;
palette.red.map(...) // TS knows red is number[]!
\`\`\``,
        traps: 'Using type annotation : Record<string, string | number[]> which widens red to string | number[], breaking array methods.',
        followUp: ['Difference between satisfies and type assertion as?']
      },
      {
        id: 'ts-18',
        question: 'Explain Function Overloading in TypeScript with implementation signatures.',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Medium',
        answer: `Define multiple overload signatures followed by a single compatible implementation signature:
\`\`\`ts
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) return new Date(y, mOrTimestamp, d);
  return new Date(mOrTimestamp);
}
\`\`\``,
        traps: 'Calling the implementation signature directly if arguments do not match any overload signature.',
        followUp: ['Why are union types often preferred over function overloads?']
      },
      {
        id: 'ts-19',
        question: 'What is ReadonlyArray vs Array in TypeScript?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `ReadonlyArray<T> (or readonly T[]) removes all mutator methods (push, pop, splice, shift) and prevents index assignment (arr[0] = 5), guaranteeing immutability in functional code.`,
        traps: 'Passing ReadonlyArray into a function expecting standard mutable Array.',
        followUp: ['How to convert ReadonlyArray to mutable array using [...arr]?']
      },
      {
        id: 'ts-20',
        question: 'What are Decorators in TypeScript 5.0+ (Stage 3 TC39 Standard)?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `TypeScript 5 implements the official Stage 3 JS Decorator standard. Decorators wrap classes, methods, getters/setters, and fields with context metadata ({ kind, name, addInitializer }) without experimentalDecorators flag.`,
        traps: 'Mixing legacy experimentalDecorators with modern TS 5.0 Stage 3 decorators.',
        followUp: ['How does NestJS use decorators for dependency injection and routing?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. NEXT.JS INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'nextjs-interview',
    courseId: 'nextjs',
    title: 'Next.js Interview',
    icon: '▲',
    category: 'frontend',
    categoryLabel: 'Modern Full Stack',
    description: 'App Router vs Pages Router, Server Components (RSC), Server Actions, ISR, SSG, SSR, Middleware, and Image optimization.',
    totalQuestions: 20,
    questions: [
      {
        id: 'next-1',
        question: 'Compare App Router vs Pages Router in Next.js 13/14/15.',
        companies: ['Vercel', 'Meta', 'Google'],
        difficulty: 'Hard',
        answer: `App Router (app/): React Server Components by default, nested layouts (layout.js), streaming with Suspense (loading.js), Server Actions, error handling (error.js), and parallel/intercepting routes. Pages Router (pages/): Client components by default, getServerSideProps / getStaticProps, single _app.js.`,
        traps: 'Using getServerSideProps inside the App Router (disallowed; use direct async Server Components).',
        followUp: ['How do route handlers (route.ts) replace API routes in App Router?']
      },
      {
        id: 'next-2',
        question: 'Explain the 4 Rendering Strategies: SSG, SSR, ISR, and CSR in Next.js.',
        companies: ['Google', 'Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `1. SSG (Static Site Generation): HTML pre-rendered at build time. Ultra fast on CDN.
2. SSR (Server-Side Rendering): HTML rendered on server per request for dynamic user data.
3. ISR (Incremental Static Regeneration): Re-validates and regenerates static pages in background on timer (revalidate: 60) without full rebuild.
4. CSR (Client-Side Rendering): Standard React rendering in browser.`,
        traps: 'Using SSR for static marketing blogs where SSG/ISR is 10x faster and cheaper.',
        followUp: ['What is On-Demand Revalidation with revalidatePath() and revalidateTag()?']
      },
      {
        id: 'next-3',
        question: 'What are Server Actions in Next.js and how do they eliminate traditional REST API endpoints for forms?',
        companies: ['Vercel', 'Google'],
        difficulty: 'Hard',
        answer: `Server Actions ('use server') are asynchronous functions executed exclusively on the server that can be called directly from form action attributes or client components. Automatically handles POST requests, serialization, CSRF protection, and triggers revalidatePath().`,
        traps: 'Forgetting to validate input inside server action (always validate with Zod).',
        followUp: ['How does useActionState / useFormStatus hook handle server action pending states?']
      },
      {
        id: 'next-4',
        question: 'How does Next.js Image Component (<Image>) optimize Core Web Vitals (LCP and CLS)?',
        companies: ['Apple', 'Google'],
        difficulty: 'Medium to Hard',
        answer: `Next.js <Image>: 1) Automatically converts images to modern AVIF/WebP on the fly. 2) Resizes images per device viewport with srcset. 3) Prevents CLS by requiring width/height or fill with parent aspect-ratio. 4) Supports priority attribute for LCP hero banner preloading.`,
        traps: 'Setting loading="lazy" on the above-the-fold hero image (destroying LCP score).',
        followUp: ['What is placeholder="blur" with blurDataURL in Next.js?']
      },
      {
        id: 'next-5',
        question: 'Explain Middleware in Next.js (middleware.ts) and edge runtime execution.',
        companies: ['Vercel', 'Amazon'],
        difficulty: 'Hard',
        answer: `middleware.ts runs before a request is completed at the Edge CDN layer (Edge Runtime). Used for authentication checks, redirects, geolocation-based rewrites, A/B testing cookies, and rate limiting with minimal latency before hitting origin server.`,
        traps: 'Using heavy Node.js libraries (like fs or raw crypto) in Edge Middleware (only Web standard APIs are supported).',
        followUp: ['How does the config = { matcher: [...] } filter middleware execution paths?']
      },
      {
        id: 'next-6',
        question: 'What is Streaming and Progressive Hydration with loading.js and Suspense in Next.js?',
        companies: ['Google', 'Meta'],
        difficulty: 'Hard',
        answer: `Streaming breaks server HTML into chunks sent over HTTP connection as they become ready. Fast static shell renders instantly while slow database queries render fallback skeletons (<Suspense fallback={<Skeleton />}>) and stream in without blocking the entire page response.`,
        traps: 'Blocking the entire page render by awaiting slow database queries at the root layout level.',
        followUp: ['How does PPR (Partial Prerendering) combine static shell with dynamic streaming?']
      },
      {
        id: 'next-7',
        question: 'What is the "use client" directive and what code belongs in Client vs Server Components?',
        companies: ['Microsoft', 'Google'],
        difficulty: 'Medium to Hard',
        answer: `'use client' marks the boundary between Server and Client component trees.
- Client Components: useState, useEffect, onClick, window/localStorage, browser APIs.
- Server Components: Direct database queries (Prisma/Drizzle), backend secrets, file system access, zero client bundle weight.`,
        traps: 'Adding "use client" at the very top page level (converts entire page subtree into client bundle).',
        followUp: ['How to pass Server Components as children to Client Components?']
      },
      {
        id: 'next-8',
        question: 'Explain Next.js Route Handlers (route.ts) and custom HTTP methods (GET, POST, PUT, DELETE).',
        companies: ['Infosys', 'IBM'],
        difficulty: 'Medium',
        answer: `In App Router, route.ts files export named async functions: export async function GET(request: Request) { return NextResponse.json({ data }); }. Replaces pages/api routes with standard Web Request and Response APIs.`,
        traps: 'Creating page.tsx and route.ts in the exact same route directory folder (causes collision error).',
        followUp: ['How do you access dynamic route parameters in Route Handlers ({ params }: { params: { id: string } })?']
      },
      {
        id: 'next-9',
        question: 'What are Parallel Routes (@folder) and Intercepting Routes ((.)folder) in Next.js?',
        companies: ['Vercel', 'Meta'],
        difficulty: 'Hard',
        answer: `1. Parallel Routes (@modal, @analytics): Renders multiple independent pages simultaneously inside the same layout with independent error/loading states.
2. Intercepting Routes ((.)photo/[id]): Intercepts navigation to show a photo modal overlay on feed while preserving direct URL shareability on hard refresh.`,
        traps: 'Forgetting default.js fallback component for parallel slots.',
        followUp: ['How does Instagram / Twitter web use intercepting routes for photo viewer modals?']
      },
      {
        id: 'next-10',
        question: 'Explain Static vs Dynamic Metadata in Next.js for modern SEO (generateMetadata).',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Medium',
        answer: `Static: export const metadata = { title: "Home", description: "..." }. Dynamic: export async function generateMetadata({ params }): Promise<Metadata> { const product = await getProduct(params.id); return { title: product.name, openGraph: { images: [product.img] } }; }.`,
        traps: 'Trying to use generateMetadata in Client Components ("use client").',
        followUp: ['How does robots.txt and sitemap.ts generation work in Next.js?']
      },
      {
        id: 'next-11',
        question: 'How does Next.js Caching Layer work (Data Cache, Full Route Cache, Router Cache)?',
        companies: ['Vercel', 'Amazon'],
        difficulty: 'Hard',
        answer: `1. Request Memoization: Deduplicates identical fetch() calls in single render tree.
2. Data Cache: Persists fetch data across requests on server ({ next: { revalidate: 3600, tags: ['posts'] } }).
3. Full Route Cache: Caches static HTML and RSC payload at build/revalidate time.
4. Client Router Cache: In-memory browser cache for prefetched routes.`,
        traps: 'Not understanding that fetch() in Next.js 14 cached responses indefinitely by default unless opted out.',
        followUp: ['How did Next.js 15 change default fetch caching behavior to uncached?']
      },
      {
        id: 'next-12',
        question: 'What is next/font and how does it eliminate Cumulative Layout Shift (CLS) and external Google Font requests?',
        companies: ['Apple', 'Google'],
        difficulty: 'Medium',
        answer: `next/font (Google and Local fonts) automatically downloads font files at build time and hosts them with your static assets (zero external requests to Google). Inlines optimal fallback CSS with matched size metrics, completely eliminating font layout shifts (CLS = 0).`,
        traps: 'Loading Google fonts via external <link> tags in layout <head>.',
        followUp: ['What is font-display: swap vs optional?']
      },
      {
        id: 'next-13',
        question: 'How do you handle Authentication in Next.js using Auth.js (NextAuth) or Clerk?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Auth.js uses Edge-compatible session cookies with JWT or database adapters. Handles OAuth (Google, GitHub) and Credentials. Middleware protects routes, while auth() helper retrieves session in Server Components and Route Handlers without client roundtrips.`,
        traps: 'Reading session state exclusively on client side causing UI flicker.',
        followUp: ['How does auth() helper work in Next.js Server Components?']
      },
      {
        id: 'next-14',
        question: 'What is Dynamic IO and cacheLife in Next.js 15?',
        companies: ['Vercel', 'Google'],
        difficulty: 'Hard',
        answer: `Next.js 15 introduced experimental dynamicIO and 'use cache' directive with cacheLife('hours') to provide fine-grained caching on functions and components rather than whole-route heuristic guessing.`,
        traps: 'Using experimental flags in production without validating canary updates.',
        followUp: ['What is the purpose of the "use cache" directive?']
      },
      {
        id: 'next-15',
        question: 'Explain generateStaticParams in App Router for static pre-rendering of dynamic routes.',
        companies: ['Amazon', 'Infosys'],
        difficulty: 'Medium to Hard',
        answer: `generateStaticParams() replaces getStaticPaths. It returns an array of route parameters to pre-render at build time:
\`\`\`ts
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(p => ({ slug: p.slug }));
}
\`\`\``,
        traps: 'Returning non-string parameter values in generateStaticParams.',
        followUp: ['What is dynamicParams = true / false?']
      },
      {
        id: 'next-16',
        question: 'What is the difference between redirect() and permanentRedirect() in Next.js Server Actions?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `redirect() returns HTTP 307 (Temporary Redirect) commonly used after form submission/login. permanentRedirect() returns HTTP 308 (Permanent Redirect) used for URL restructuring, updating search engine index canonical URLs.`,
        traps: 'Catching redirect() inside try/catch blocks (redirect throws an internal NEXT_REDIRECT error that must propagate).',
        followUp: ['Why should redirect() be invoked outside of try/catch blocks?']
      },
      {
        id: 'next-17',
        question: 'How do you analyze and optimize Next.js bundle sizes using @next/bundle-analyzer?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Install @next/bundle-analyzer and run ANALYZE=true npm run build. Generates visual interactive treemap of client and server chunks. Identifies heavy duplicate libraries (e.g. Moment.js, Lodash) to replace with date-fns or native JS.`,
        traps: 'Importing full icon libraries without tree-shaking.',
        followUp: ['How does next.config.js modularizeImports optimize lucide-react imports?']
      },
      {
        id: 'next-18',
        question: 'What is instrumentation.ts in Next.js and how is it used for OpenTelemetry?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `instrumentation.ts exports a register() hook that runs ONCE when the Next.js server boots up. Used to initialize OpenTelemetry SDKs, Sentry tracing, and global database connection pre-warming before requests arrive.`,
        traps: 'Placing request-scoped logic inside register().',
        followUp: ['What is the difference between nodejs and edge runtime in instrumentation?']
      },
      {
        id: 'next-19',
        question: 'Explain Error Handling in Next.js App Router (error.js, not-found.js, global-error.js).',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `error.js must be a Client Component ('use client') acting as an Error Boundary wrapping child layout/page, providing a reset() function to retry. not-found.js renders on notFound() invocation. global-error.js catches errors in root layout.`,
        traps: 'Making error.js a Server Component.',
        followUp: ['Why does global-error.js require its own <html> and <body> tags?']
      },
      {
        id: 'next-20',
        question: 'How do Environment Variables work in Next.js (NEXT_PUBLIC_ prefix)?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `Variables without prefix (DATABASE_URL, API_SECRET) are private and ONLY accessible on the server side (Server Components, Route Handlers). Variables prefixed with NEXT_PUBLIC_ (NEXT_PUBLIC_APP_URL) are inlined into client JS bundles during build and visible to browser.`,
        traps: 'Prefixing private database passwords with NEXT_PUBLIC_, exposing database credentials publicly.',
        followUp: ['How does .env.production override .env.local in production builds?']
      }
    ]
  }
]
