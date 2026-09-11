export const testingCourse = {
  id: 'testing',
  title: 'Testing & QA',
  description: 'Production-Grade Software Quality Engineering Masterclass! STLC, Test Case Design (BVA & Equivalence Partitioning), Unit Testing with Vitest & Jest, React Testing Library, API Testing with Supertest, Playwright & Cypress E2E Automation, Page Object Model (POM), Database & Contract Testing, Accessibility (axe-core), Performance & Load Testing with k6, Defensive Security Testing, CI/CD Quality Gates with GitHub Actions, Flaky Test Elimination, Shift-Left/Right, CodeMasti QA Capstone, aur FAANG SDET interview problems Masti Sir ke saath!',
  icon: '🧪',
  category: 'backend',
  certificateName: 'TESTING & QA',
  topicsCount: 122,
  practiceCount: 135,
  projectsCount: 6,
  hoursEstimate: 30,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: QUALITY ENGINEERING & TESTING FUNDAMENTALS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Quality Engineering, SDLC, STLC & Testing Fundamentals',
      lessons: [
        {
          id: 'test-qa-fundamentals-stlc',
          title: 'Quality Engineering, QA vs Testing vs SDET, SDLC vs STLC & Bug Definitions',
          emoji: '🧪',
          xpReward: 40,
          badgeName: 'Quality Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Testing ka matlab sirf \'button click karke bug dhoondna\' nahi hota! Quality Engineering ka matlab hai: shuru se aisi car banana jo crash test mein 5-Star safety le kar aaye! SDLC aur STLC master karo! 🚗🧪😎"',
            hint: '💡 Masti Sir: "Bug vs Defect vs Error vs Failure: Developer ki galti = Error, Code mein galti = Bug/Defect, aur Production pe user ke samne crash = Failure!"',
            success: '🎉 Masti Sir: "Quality engineering fundamentals and STLC phases crystal clear ho gaye! 🔥"',
            mistake: '😅 Masti Sir: "QA ko sirf project ke end mein mat bulao — Shift-Left approach mein QA requirements planning se hi participate karta hai!"'
          },
          englishDef: 'Software Testing is the systematic verification and validation of software systems against functional and non-functional requirements. **Quality Assurance (QA)** focuses on process defect prevention, while **Quality Control (QC)** and **Software Testing** detect defects. **Software Development Life Cycle (SDLC)** integrates with **Software Testing Life Cycle (STLC)**: Requirement Analysis, Test Planning, Test Design, Environment Setup, Test Execution, and Test Closure.',
          hinglishExplain: 'Software Testing modern software engineering ka sabse critical part hai:\n1. **QA (Quality Assurance)**: Defects ko aane se rokna (Process improvement).\n2. **Testing (QC)**: Bane hue software mein bugs dhoondna.\n3. **SDET (Software Development Engineer in Test)**: Automated test frameworks aur CI/CD quality pipelines build karna.\n4. **STLC Phases**: Requirement analysis se lekar Test planning, Execution, aur Closure tak ka systematic workflow.',
          funnyExample: {
            scenario: 'The Automotive Manufacturing Analogy:\n- Car Blueprint Design Review = Quality Assurance (Preventing flaws before production) 📐\n- Spark Plug & Engine Bench Test = Unit & Integration Testing 🔧\n- Crash Test Dummy Collision = Extreme Safety Testing 💥🚗\n- Showroom Delivery Drive = Acceptance Testing! ✅',
            punchline: 'Testing guarantees safety before your users hit the highway!'
          },
          visualDiagram: {
            title: 'Software Testing Life Cycle (STLC) Flow',
            nodes: [
              '1. Requirement Analysis (Identify testable features & edge cases)',
              '2. Test Planning (Scope, strategy, resource allocation & tools)',
              '3. Test Design (Scenarios, Test Cases, Data preparation)',
              '4. Test Environment Setup (Staging DB, Mock services, CI runner)',
              '5. Test Execution & Defect Reporting (Execute suites, log bugs)',
              '6. Test Closure (Metrics, Coverage analysis, Sign-off report)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Error vs Bug vs Defect vs Failure Taxonomy:',
            steps: [
              'Human Error: Developer misunderstands requirement or writes typo (`<` instead of `<=`)',
              'Bug / Defect: Flawed code logic persisting in the application codebase',
              'Software Failure: Application deviates from expected behavior during runtime (e.g. 500 Internal Server Error experienced by user)'
            ]
          },
          code: `// ── CONCEPTUAL QUALITY ENGINEERING TESTING WORKFLOW ──

// 1. Business Logic Component (Payment Discount Calculator)
export function applyVoucher(orderAmount, voucherCode) {
  if (typeof orderAmount !== 'number' || orderAmount < 0) {
    throw new TypeError('Invalid order amount');
  }

  if (voucherCode === 'CODEMASTI50') {
    if (orderAmount < 500) {
      return { success: false, finalAmount: orderAmount, error: 'Minimum order amount for CODEMASTI50 is ₹500' };
    }
    const discount = Math.min(orderAmount * 0.5, 300); // 50% discount capped at ₹300
    return { success: true, finalAmount: orderAmount - discount, discountApplied: discount };
  }

  return { success: true, finalAmount: orderAmount, discountApplied: 0 };
}

// 2. Automated Test Specification (Arrange-Act-Assert)
import { describe, it, expect } from 'vitest';

describe('Quality Verification: applyVoucher()', () => {
  it('should cap discount at ₹300 when order exceeds ₹600', () => {
    // Arrange
    const orderAmount = 1000;
    const voucher = 'CODEMASTI50';

    // Act
    const result = applyVoucher(orderAmount, voucher);

    // Assert
    expect(result.success).toBe(true);
    expect(result.discountApplied).toBe(300);
    expect(result.finalAmount).toBe(700);
  });
});`,
          codeBreakdown: [
            { part: 'applyVoucher(orderAmount, voucherCode)', label: 'Target business function under quality verification testing', color: '#3b82f6' },
            { part: 'if (typeof orderAmount !== "number")', label: 'Defensive input type validation guarding against unexpected edge-case runtime failures', color: '#10b981' },
            { part: 'expect(result.discountApplied).toBe(300)', label: 'Deterministic test assertion verifying discount cap constraint holds true', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Testing ko development khatam hone ke baad aakhri din par plan karna (Shift-Left testing is crucial)',
            '❌ Bug report mein steps to reproduce ya expected vs actual output omit kar dena'
          ],
          miniChallenge: 'Ek unit test case likho jo verify kare ki jab orderAmount ₹400 ho aur voucher CODEMASTI50 ho, toh minimum amount error throw ho.',
          quiz: {
            question: 'Software development mein "Error", "Bug", aur "Failure" ke beech kya connection hota hai?',
            options: [
              'Developer ki Human Error se code mein Bug/Defect banta hai, jo runtime par execute hone par user ke samne Failure banta hai',
              'Teeno bilkul same shabd hain',
              'Failure pehle hota hai, bug baad mein',
              'Sirf frontend mein bugs hote hain'
            ],
            answer: 'Developer ki Human Error se code mein Bug/Defect banta hai, jo runtime par execute hone par user ke samne Failure banta hai',
            explanation: 'Human mistake (Error) leads to a code flaw (Bug/Defect), which results in observable runtime system deviation (Failure).'
          },
          summary: [
            'QA defect prevention par focus karta hai; Testing defect detection par focus karta hai',
            'STLC requirement analysis se test closure tak structured verification provide karta hai',
            'SDETs automation frameworks aur continuous quality pipelines engineer karte hain'
          ],
          flashcard: {
            q: 'STLC (Software Testing Life Cycle) ke 6 core phases kya hain?',
            a: '1. Requirement Analysis, 2. Test Planning, 3. Test Design, 4. Test Environment Setup, 5. Test Execution, 6. Test Closure.'
          }
        },
        {
          id: 'test-cases-bva-bug-lifecycle',
          title: 'Test Case Design: Equivalence Partitioning, BVA, Decision Tables & Bug Lifecycle',
          emoji: '📋',
          xpReward: 45,
          badgeName: 'Test Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Test case likhna boring lagta hai? Lekin Boundary Value Analysis (BVA) aur Equivalence Partitioning wo jaadui techniques hain jo 10,000 faltu tests ko sirf 6 smart tests mein convert kar deti hain! 📋📐😎"',
            hint: '💡 Masti Sir: "BVA Rule: Bugs hamesha boundaries par chhupte hain (jaise age >= 18 mein 17, 18, 19 test karo)!"',
            success: '🎉 Masti Sir: "Black-box test design techniques and Bug Lifecycle mastered! 🔥"',
            mistake: '😅 Masti Sir: "Bug report mein \'Login broken\' mat likho — proper title, steps to reproduce, expected vs actual result, aur screenshots attach karo!"'
          },
          englishDef: 'Effective test design eliminates redundant testing while maximizing defect detection through: **Equivalence Partitioning (EP)** (grouping valid/invalid input partitions), **Boundary Value Analysis (BVA)** (testing min, min-1, min+1, max, max-1, max+1 boundaries), **Decision Tables** (combinatorial logic matrices), and **State Transition Testing**. The **Bug Lifecycle** tracks defects from New -> Assigned -> Fixed -> Retested -> Closed.',
          hinglishExplain: 'Smart Test Case Design techniques se hum minimum tests mein maximum bugs pakadte hain:\n1. **Equivalence Partitioning (EP)**: Inputs ko valid aur invalid groups mein baantna (e.g. Age 18-60 ke liye sirf ek value 25 test karna kaafi hai).\n2. **Boundary Value Analysis (BVA)**: Maximum bugs boundary par aate hain (e.g. Password min length 8 hai toh 7, 8, 9 test karo).\n3. **Bug Severity vs Priority**: Severity = System par kitna bada impact hai; Priority = Kitni jaldi fix karna zaroori hai.\n4. **Bug Lifecycle**: New -> Assigned -> In Progress -> Fixed -> Retested -> Verified -> Closed.',
          funnyExample: {
            scenario: 'The Nightclub Age Checker (BVA in Action):\n- Rule: "Must be 18+ to enter"\n- Lazy Tester: Tests Age 50 (Passes ✅)\n- BVA Pro Tester: Tests Age 17 (Fails ❌), Tests Age 18 (Passes ✅), Tests Age 19 (Passes ✅)!\n- Pro Tester finds the bug where developer mistakenly wrote `age > 18` instead of `age >= 18`! 🎯',
            punchline: 'Bugs live on boundaries!'
          },
          visualDiagram: {
            title: 'Bug Lifecycle State Machine Flow',
            nodes: [
              '1. NEW (Bug logged by QA with steps to reproduce)',
              '2. ASSIGNED (Lead assigns defect to backend/frontend developer)',
              '3. IN PROGRESS -> FIXED (Developer resolves code issue)',
              '4. RETEST (QA verifies bug fix in test environment)',
              '5A. If Verified -> CLOSED (Resolved permanently) ✅',
              '5B. If Still Broken -> REOPENED (Returned to developer) 🔄'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Bug Severity vs Priority Matrix:',
            steps: [
              'High Severity + High Priority: Payment gateway 500 crash on checkout (System down + revenue loss)',
              'Low Severity + High Priority: Company CEO name misspelled on landing page (Cosmetic flaw, but urgent PR fix)',
              'High Severity + Low Priority: App crashes when exporting 1,000,000 legacy rows in rare Windows 98 browser'
            ]
          },
          code: `// ── BOUNDARY VALUE ANALYSIS (BVA) TEST SPECIFICATION ──
import { describe, it, expect } from 'vitest';

// Function: Password length validator (Allowed: 8 to 32 characters)
export function validatePasswordLength(password) {
  if (typeof password !== 'string') return false;
  return password.length >= 8 && password.length <= 32;
}

describe('Boundary Value Analysis (BVA) Test Suite: Password Length', () => {
  // Boundary 1: Lower Boundary (8 chars)
  it('should reject 7 chars (min - 1) [INVALID]', () => {
    expect(validatePasswordLength('Ab1!xyz')).toBe(false); // Length: 7
  });

  it('should accept 8 chars (min) [VALID]', () => {
    expect(validatePasswordLength('Ab1!xyza')).toBe(true); // Length: 8
  });

  it('should accept 9 chars (min + 1) [VALID]', () => {
    expect(validatePasswordLength('Ab1!xyzab')).toBe(true); // Length: 9
  });

  // Boundary 2: Upper Boundary (32 chars)
  it('should accept 32 chars (max) [VALID]', () => {
    const password32 = 'A'.repeat(32);
    expect(validatePasswordLength(password32)).toBe(true);
  });

  it('should reject 33 chars (max + 1) [INVALID]', () => {
    const password33 = 'A'.repeat(33);
    expect(validatePasswordLength(password33)).toBe(false);
  });
});`,
          codeBreakdown: [
            { part: 'password.length >= 8 && password.length <= 32', label: 'Boundary conditions under verification', color: '#3b82f6' },
            { part: 'expect(validatePasswordLength("Ab1!xyz")).toBe(false)', label: 'Testing Min - 1 (7 characters) boundary condition rejection', color: '#10b981' },
            { part: 'expect(validatePasswordLength("A".repeat(33))).toBe(false)', label: 'Testing Max + 1 (33 characters) upper boundary rejection', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ BVA mein sirf nominal middle values test karna aur boundary limits (min-1, min, max, max+1) chhod dena',
            '❌ Bug severity aur priority ko confuse karna'
          ],
          miniChallenge: 'Ek Decision Table design karo ek e-commerce discount policy ke liye (IsStudent, HasCouponCode, IsFirstOrder).',
          quiz: {
            question: 'Ek website par user age field ke liye allowed range "18 to 60" hai. Boundary Value Analysis (BVA) ke tahat kaunse values test karna sabse zaroori hai?',
            options: [
              '17, 18, 19 aur 59, 60, 61',
              '25, 30, 45',
              '0, 100, 200',
              'Sirf 18 aur 60'
            ],
            answer: '17, 18, 19 aur 59, 60, 61',
            explanation: 'BVA boundary values (min-1, min, min+1) aur (max-1, max, max+1) ko test karta hai jahan comparison operators (`<`, `<=`, `>`, `>=`) sabse zyada fail hote hain.'
          },
          summary: [
            'Equivalence Partitioning redundant test count reduce karti hai',
            'Boundary Value Analysis edge limit bugs detect karti hai',
            'Bug Lifecycle defects ko logging se verification tak track karta hai'
          ],
          flashcard: {
            q: 'Bug Severity aur Bug Priority mein kya difference hota hai?',
            a: 'Severity system technical impact measure karti hai (e.g. Data loss / Crash); Priority business urgency measure karti hai (e.g. Kitni jaldi release mein fix chahiye).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: MANUAL, EXPLORATORY & NON-FUNCTIONAL TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Manual, Exploratory, Smoke & Non-Functional Testing',
      lessons: [
        {
          id: 'test-manual-exploratory-smoke-sanity',
          title: 'Manual & Exploratory Testing, Smoke vs Sanity, Regression vs Retesting & Non-Functional Types',
          emoji: '🔍',
          xpReward: 40,
          badgeName: 'Bug Hunter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Smoke testing ka matlab: \'Software ko on karke dekho, kahin dhuwan (smoke) toh nahi nikal raha?\' Agar build stable hai, tabhi deep testing shuru hoti hai! Smoke vs Sanity aur Regression vs Retesting ka difference seekho! 💨🔍😎"',
            hint: '💡 Masti Sir: "Retesting = Jo bug fix hua tha sirf usi ko check karna. Regression Testing = Us bug fix se baki ka poora system toh nahi toot gaya, ye check karna!"',
            success: '🎉 Masti Sir: "Manual, exploratory and non-functional testing methodologies mastered! 🔥"',
            mistake: '😅 Masti Sir: "Exploratory testing ko bina goal ke ad-hoc clicking mat samajhna — use structured Time-Boxed Test Charters!"'
          },
          englishDef: 'Testing spans multiple specialized disciplines: **Smoke Testing** (Build Verification Testing verifying basic critical stability), **Sanity Testing** (focused quick validation of a specific bug fix or sub-module), **Retesting** (verifying a fixed defect), and **Regression Testing** (confirming recent code modifications have not adversely affected existing un-modified features). **Non-Functional Testing** evaluates Performance, Security, Usability, Accessibility, and Reliability.',
          hinglishExplain: 'Testing types ka clear understanding hona zaroori hai:\n1. **Smoke Testing**: Har naye build ke baad basic health check (Kya app launch ho raha hai? Login chal raha hai?).\n2. **Sanity Testing**: Chhote release ya bug fix ke baad specific feature ki quick checking.\n3. **Retesting vs Regression**: Retesting usi specific bug ko verify karta hai; Regression verify karta hai ki fix ki wajah se koi purana feature na toota ho.\n4. **Exploratory Testing**: Tester bina script ke intuition, curiosity aur test charters ke through application explore karke hidden edge cases dhoondta hai.',
          funnyExample: {
            scenario: 'The Car Repair Analogy:\n- Car engine repaired -> Mechanic starts car key (Smoke Test: Engine starts without smoke! 💨)\n- Check if specific horn issue is fixed (Retesting: Horn honks! 📯)\n- Check if fixing the horn accidentally disconnected the headlights or brakes! (Regression Testing: Headlights & Brakes still work! 🚗💡)',
            punchline: 'Retesting fixes the bug; Regression protects the rest of the application!'
          },
          visualDiagram: {
            title: 'Smoke vs Sanity vs Regression vs Retesting Comparison',
            nodes: [
              'New Software Build Deployed -> SMOKE TEST (Broad & Shallow health check)',
              'If Smoke Passes -> Detailed Test Execution -> Bug Found & Logged',
              'Developer fixes defect -> RETESTING (Verifies specific defect fix)',
              'SANITY TEST (Focused check on modified module)',
              'REGRESSION TEST SUITE (Automated check across entire system to ensure zero regressions)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Core Non-Functional Testing Dimensions:',
            steps: [
              'Performance & Scalability: Response time under 10,000 concurrent users',
              'Security & Penetration: Authorization, authentication, data encryption, injection defense',
              'Accessibility (a11y): WCAG 2.1 compliance for screen readers and keyboard navigation',
              'Cross-Browser & Responsiveness: Pixel fidelity across Chrome, Safari, Firefox, iOS, Android'
            ]
          },
          code: `// ── AUTOMATED SMOKE TEST SPECIFICATION (Playwright) ──
import { test, expect } from '@playwright/test';

test.describe('Production Deployment Smoke Test Suite', () => {
  test('Smoke: Homepage loads, core navigation renders, and API health responds', async ({ page, request }) => {
    // 1. Check API Health Probe Endpoint
    const healthRes = await request.get('https://api.codemasti.com/health/live');
    expect(healthRes.status()).toBe(200);

    // 2. Navigate to Frontend App
    await page.goto('https://codemasti.com');

    // 3. Verify Critical Landing Page Elements
    await expect(page).toHaveTitle(/CodeMasti/);
    await expect(page.getByRole('button', { name: /explore/i })).toBeVisible();

    // 4. Verify Course Catalog is renderable
    await expect(page.getByText('Featured Courses')).toBeVisible();
  });
});`,
          codeBreakdown: [
            { part: 'await request.get(".../health/live")', label: 'Validates backend health probe status in zero-render HTTP mode', color: '#3b82f6' },
            { part: 'await page.goto("https://codemasti.com")', label: 'Loads client single-page application in headless browser', color: '#10b981' },
            { part: 'await expect(page.getByRole(...)).toBeVisible()', label: 'Verifies primary call-to-action interactive element is mounted in DOM', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Smoke test mein 500 lambe test cases run karna (Smoke should be fast, < 3 minutes)',
            '❌ Bug fix hone ke baad regression test run na karna'
          ],
          miniChallenge: 'Ek 60-minute Exploratory Test Charter design karo CodeMasti Quiz & XP reward system ke liye.',
          quiz: {
            question: 'Retesting aur Regression Testing mein kya primary difference hota hai?',
            options: [
              'Retesting specific fixed bug ko verify karta hai; Regression testing ensure karta hai ki us fix se baki features na toote hon',
              'Retesting manual hoti hai aur regression automated',
              'Dono bilkul same hote hain',
              'Retesting sirf database mein hoti hai'
            ],
            answer: 'Retesting specific fixed bug ko verify karta hai; Regression testing ensure karta hai ki us fix se baki features na toote hon',
            explanation: 'Retesting specifically checks the reported bug fix; Regression testing tests unmodified parts of the system to prevent side-effect breakages.'
          },
          summary: [
            'Smoke testing build acceptance verify karti hai; Sanity focused quick check karti hai',
            'Retesting bug fix confirm karti hai; Regression side-effect breakages prevent karti hai',
            'Non-functional testing performance, security aur accessibility guarantee karti hai'
          ],
          flashcard: {
            q: 'Exploratory Testing kya hoti hai?',
            a: 'Simultaneous learning, test design, aur test execution — jisme tester bina rigid test script ke critical thinking aur curiosity se product explore karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: UNIT TESTING, AAA PATTERN & VITEST / JEST
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Unit Testing, AAA Pattern & Vitest / Jest Mastery',
      lessons: [
        {
          id: 'test-unit-vitest-jest',
          title: 'Testing Pyramid, AAA Pattern, Test Isolation & Vitest / Jest Test Runners',
          emoji: '🔺',
          xpReward: 45,
          badgeName: 'Test Driven Dev',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Bina testing ke code deploy karna matlab bina parachute ke hawai jahaz se koodna! AAA Pattern yaad rakho: Arrange (Data banao), Act (Function chalao), Assert (Result check karo)! Vitest blazing fast hai! 🔺🧪😎"',
            hint: '💡 Masti Sir: "Test Isolation rule: Ek test ka outcome doosre test par kabhi depend nahi karna chahiye — `beforeEach` aur `afterEach` se database aur state clean karo!"',
            success: '🎉 Masti Sir: "All Unit tests PASSING! Green tick dekh ke dil khush ho gaya! 🟢"',
            mistake: '😅 Masti Sir: "Testing implementation details (private variables) mat karo — public observable behavior aur outputs test karo!"'
          },
          englishDef: 'Unit Testing validates isolated, deterministic software units (functions, classes, utility helpers) in complete isolation from external side effects. The **Testing Pyramid** balances high-volume Unit Tests (70%), medium-volume Integration Tests (20%), and selective End-to-End Tests (10%). Unit tests strictly follow the **AAA Pattern (Arrange, Act, Assert)** and enforce 100% **Test Isolation**.',
          hinglishExplain: 'Unit Testing automated testing ka foundation hai:\n1. **Testing Pyramid**: Sabse zyada fast Unit tests hote hain jo microsecond mein chalte hain.\n2. **AAA Pattern**: Arrange (Variables aur test data setup karo), Act (Function call karo), Assert (Result check karo `expect(res).toBe(...)`).\n3. **Test Isolation**: Har test independent hona chahiye. Kisi bhi test ke pass ya fail hone se doosra test affect nahi hona chahiye.\n4. **Vitest**: Modern Vite-native lightning fast test runner hai.',
          funnyExample: {
            scenario: 'Junior Dev modifying Cart Calculation:\n- Function: `calculateCartTotal(items, discountPercent)`\n- Junior Dev accidentally types `subtotal * discount` instead of `subtotal - discount` 😱\n- Vitest runs in 12ms: ❌ Expected 800, Received -160000!\n- Junior Dev: "Bach gaye! Production par jaane se pehle hi bug pakad liya!" 🟢✨',
            punchline: 'Automated unit tests catch silly bugs in milliseconds!'
          },
          visualDiagram: {
            title: 'The Testing Pyramid vs Testing Trophy',
            nodes: [
              'E2E Tests (10% - Real browser, slowest, highest cost)',
              'Integration Tests (20% - DB, APIs, Component integration)',
              'Unit Tests (70% - Isolated functions, blazing fast, lowest cost)',
              'Static Analysis (Base - TypeScript, ESLint type checking)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Vitest Test Execution Lifecycle:',
            steps: [
              '`beforeAll`: Runs once before all tests in the file (Setup shared test environment)',
              '`beforeEach`: Runs before every individual `it()` test (Reset state, clean database mocks)',
              '`it / test`: Executes test block with Arrange-Act-Assert assertions',
              '`afterEach`: Runs after every test (Cleanup memory, reset timers)',
              '`afterAll`: Runs once after all tests complete'
            ]
          },
          code: `// ── VITEST UNIT TEST SUITE (cart.test.js) ──
import { describe, it, expect, beforeEach } from 'vitest';

// 1. Function Under Test
export function calculateDiscountedTotal(items, couponCode = null) {
  if (!Array.isArray(items)) throw new TypeError('Items must be an array');

  const subtotal = items.reduce((acc, item) => {
    if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
      throw new Error('Invalid item price or quantity');
    }
    return acc + (item.price * item.quantity);
  }, 0);

  if (couponCode === 'SAVE20') {
    return subtotal * 0.8; // 20% discount
  }

  return subtotal;
}

// 2. Unit Test Suite
describe('calculateDiscountedTotal()', () => {
  let sampleCart;

  beforeEach(() => {
    // Arrange: Fresh isolated fixture before each test
    sampleCart = [
      { id: 1, name: 'JavaScript Course', price: 500, quantity: 2 }, // ₹1000
      { id: 2, name: 'Testing Masterclass', price: 1000, quantity: 1 } // ₹1000
    ];
  });

  it('should accurately calculate total without coupon', () => {
    // Act
    const total = calculateDiscountedTotal(sampleCart);

    // Assert
    expect(total).toBe(2000);
  });

  it('should apply 20% discount when SAVE20 coupon is supplied', () => {
    // Act
    const total = calculateDiscountedTotal(sampleCart, 'SAVE20');

    // Assert
    expect(total).toBe(1600);
  });

  it('should throw TypeError when non-array is passed', () => {
    // Assert Exception Throwing
    expect(() => calculateDiscountedTotal(null)).toThrow(TypeError);
    expect(() => calculateDiscountedTotal('invalid')).toThrow('Items must be an array');
  });
});`,
          codeBreakdown: [
            { part: 'describe("calculateDiscountedTotal()", () => ...)', label: 'Groups related test specifications into a cohesive domain unit suite', color: '#3b82f6' },
            { part: 'beforeEach(() => { sampleCart = [...] })', label: 'Enforces test isolation by resetting mock fixture state prior to each assertion', color: '#10b981' },
            { part: 'expect(() => ...).toThrow(TypeError)', label: 'Validates defensive exception handling for unexpected or malicious input parameters', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Tests ke andar global variables modify karke reset na karna (causes flaky dependent tests)',
            '❌ Sirf positive happy path test karna aur exceptions/error handling test na karna'
          ],
          miniChallenge: 'Ek unit test likho jo verify kare ki empty cart `[]` pass karne par 0 return ho.',
          quiz: {
            question: 'Unit testing mein standard "AAA Pattern" ka full form aur sequence kya hota hai?',
            options: [
              'Arrange (Setup), Act (Execution), Assert (Verification)',
              'Action, Analysis, Automation',
              'Authentication, Authorization, Auditing',
              'Array, Async, Await'
            ],
            answer: 'Arrange (Setup), Act (Execution), Assert (Verification)',
            explanation: 'AAA stands for Arrange (setup data & dependencies), Act (execute the target unit function), and Assert (verify that outcome equals expected value).'
          },
          summary: [
            'Unit tests isolated logic aur algorithmic units verify karte hain',
            'AAA pattern tests ko deterministic, readable aur structured banata hai',
            'Test isolation test suites ko flaky hone se rokti hai'
          ],
          flashcard: {
            q: 'Unit testing mein Test Isolation kyun zaroori hai?',
            a: 'Kyonki agar ek test doosre test ke state ya database par depend karega, toh tests parallel mein run nahi ho sakenge aur order badalne par flaky ho jayenge.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: TEST DOUBLES & FLAKY TEST ELIMINATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Test Doubles (Mocks, Stubs, Spies, Fakes) & Flaky Tests Defense',
      lessons: [
        {
          id: 'test-mocking-spies-flaky-defense',
          title: 'Test Doubles: Mocks, Stubs, Spies, Fakes & Eliminating Flaky Tests',
          emoji: '🎭',
          xpReward: 45,
          badgeName: 'Mock Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Test chalate waqt real Stripe payment API ya real email service hit karoge toh bank account khali ho jayega aur test 10 second slow ho jayega! Mocks aur Stubs use karo! Aur Flaky tests ko jad se khatam karo! 🎭⚡😎"',
            hint: '💡 Masti Sir: "Flaky Test = Jo test bina code change kiye kabhi PASS hota hai aur kabhi FAIL hota hai! 90% flakiness hardcoded `sleep(3000)` aur race conditions ki wajah se aati hai!"',
            success: '🎉 Masti Sir: "Test doubles and Flaky test defense mechanisms mastered! 🔥"',
            mistake: '😅 Masti Sir: "Over-mocking mat karna — agar poora database aur internal functions hi mock kar doge toh real bugs pakad mein nahi aayenge!"'
          },
          englishDef: '**Test Doubles (Gerard Meszaros Taxonomy)** replace real dependencies during testing: **Dummies** (passed to satisfy parameters), **Stubs** (provide canned responses), **Spies** (record call history and arguments), **Mocks** (pre-programmed with verified expectations), and **Fakes** (working lightweight in-memory implementations like SQLite or in-memory repositories). **Flaky Tests** produce non-deterministic results due to async timing, network race conditions, or uncleaned state.',
          hinglishExplain: 'Automated testing mein Test Doubles aur Flakiness control critical topics hain:\n1. **Stub**: Fake data return karta hai (e.g. `getWeather()` returns fixed `{ temp: 25 }`).\n2. **Spy**: Function call ko monitor karta hai (kitni baar call hua, kya arguments pass hue `expect(spy).toHaveBeenCalledWith(...)`).\n3. **Mock**: Pre-programmed expectations verify karta hai.\n4. **Flaky Tests**: Wo tests jo kabhi pass aur kabhi fail hote hain. Flakiness ko rokte hain auto-waiting, deterministic clocks (`vi.useFakeTimers()`), aur isolated state ke through.',
          funnyExample: {
            scenario: 'The Stunt Double Movie Analogy:\n- Real Action Star = Real Payment API (Costs money, dangerous to jump off helicopter) 🚁💸\n- Stunt Double = Mock/Stub (Looks like real star, performs safely in controlled studio) 🎬✨\n- Verification: "Did the stunt double jump when director shouted ACTION?" (Spy check passed!) ✅',
            punchline: 'Test doubles allow safe, instant, zero-cost test execution!'
          },
          visualDiagram: {
            title: 'Test Doubles Taxonomy Overview',
            nodes: [
              'Test Double Hierarchy',
              '├── Dummy: Passed around but never actually used (e.g. empty user object)',
              '├── Stub: Returns hardcoded canned answers to calls made during test',
              '├── Spy: Wraps real/fake function to record call counts and parameters',
              '├── Mock: Pre-programmed with expectations that must be verified',
              '└── Fake: Working lightweight implementation (e.g. In-Memory Mock Database)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Top 4 Causes of Flaky Tests & Cures:',
            steps: [
              'Cause 1: Hardcoded timeouts (`setTimeout / sleep(2000)`) -> Cure: Use Event-driven auto-waiting (`waitFor / findBy`)',
              'Cause 2: Shared mutable database state -> Cure: Truncate tables / Rollback transactions in `afterEach`',
              'Cause 3: Timezone / Date sensitivity -> Cure: Freeze mock clocks via `vi.setSystemTime(new Date(\'2026-08-21\'))`',
              'Cause 4: Network unpredictability -> Cure: Intercept network traffic via Mock Service Worker (MSW)'
            ]
          },
          code: `// ── SPY & MOCK IMPLEMENTATION WITH VITEST (email.service.test.js) ──
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Real Notification Service
export async function sendWelcomeNotification(emailClient, user) {
  if (!user.isVerified) return false;

  const emailBody = \`Welcome to CodeMasti, \${user.name}!\`;
  await emailClient.sendEmail(user.email, 'Welcome!', emailBody);
  return true;
}

describe('Notification Service with Spies & Mocks', () => {
  let mockEmailClient;

  beforeEach(() => {
    // Arrange: Create Mock Object with Vitest Spy Functions
    mockEmailClient = {
      sendEmail: vi.fn().mockResolvedValue({ messageId: 'msg_123' })
    };
  });

  it('should send welcome email and record spy invocations when user is verified', async () => {
    // Arrange
    const verifiedUser = { name: 'Kabir', email: 'kabir@codemasti.com', isVerified: true };

    // Act
    const result = await sendWelcomeNotification(mockEmailClient, verifiedUser);

    // Assert
    expect(result).toBe(true);
    expect(mockEmailClient.sendEmail).toHaveBeenCalledTimes(1);
    expect(mockEmailClient.sendEmail).toHaveBeenCalledWith(
      'kabir@codemasti.com',
      'Welcome!',
      'Welcome to CodeMasti, Kabir!'
    );
  });

  it('should not call email client when user is unverified', async () => {
    // Arrange
    const unverifiedUser = { name: 'Rahul', email: 'rahul@test.com', isVerified: false };

    // Act
    const result = await sendWelcomeNotification(mockEmailClient, unverifiedUser);

    // Assert
    expect(result).toBe(false);
    expect(mockEmailClient.sendEmail).not.toHaveBeenCalled();
  });
});`,
          codeBreakdown: [
            { part: 'mockEmailClient = { sendEmail: vi.fn().mockResolvedValue(...) }', label: 'Creates mock test double with simulated asynchronous resolved response', color: '#3b82f6' },
            { part: 'expect(mockEmailClient.sendEmail).toHaveBeenCalledTimes(1)', label: 'Spy assertion verifying exact function invocation frequency', color: '#10b981' },
            { part: 'expect(...).toHaveBeenCalledWith(...)', label: 'Spy parameter assertion verifying exact payloads dispatched to external provider', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Hardcoded `sleep(5000)` lagana instead of auto-waiting (creates notoriously flaky test suites)',
            '❌ Har test ke baad `vi.clearAllMocks()` run karna bhool jana'
          ],
          miniChallenge: 'Ek test likho jo `vi.useFakeTimers()` use karke ek 5-second countdown timer function ko bina wait kiye fast-forward kare.',
          quiz: {
            question: 'Automated testing mein "Stub" aur "Spy" ke beech kya primary difference hota hai?',
            options: [
              'Stub pre-configured fixed canned response return karta hai; Spy function invocation count aur arguments record karta hai',
              'Stub sirf Python mein hota hai aur Spy JavaScript mein',
              'Spy se database delete ho jata hai',
              'Dono bilkul same hote hain'
            ],
            answer: 'Stub pre-configured fixed canned response return karta hai; Spy function invocation count aur arguments record karta hai',
            explanation: 'A Stub returns canned fixed response data; a Spy monitors and records how a function was called (number of times, arguments passed).'
          },
          summary: [
            'Test doubles external slow/expensive dependencies ko isolate karte hain',
            'Spies function invocation frequency aur parameters verify karte hain',
            'Flaky tests ko auto-waiting aur mock timer freezing se eradicate karein'
          ],
          flashcard: {
            q: 'Flaky Test kya hota hai aur iska primary solution kya hai?',
            a: 'Flaky test wo test hai jo bina code change kiye random pass/fail hota hai; Solution: Hardcoded sleep hatayein, auto-waiting assertions use karein, aur database state isolate karein.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: REACT COMPONENT & ASYNC UI TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: React Component Testing & Async UI (React Testing Library)',
      lessons: [
        {
          id: 'test-react-rtl-api-supertest',
          title: 'React Testing Library (RTL), User Events, Async UI States & Supertest API Testing',
          emoji: '⚛️',
          xpReward: 45,
          badgeName: 'Component Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "React components ko waise test karo jaise real user browser mein chalata hai! Component ke internal state variable mat check karo — screen par accessible button dhoondo, click karo aur dekho UI update hua ya nahi! ⚛️🧪😎"',
            hint: '💡 Masti Sir: "RTL Query Rule: `getByRole` sabse pehle, `getByLabelText` form inputs ke liye, aur async data ke aane ka intezar karne ke liye `findByRole`!"',
            success: '🎉 Masti Sir: "React Testing Library and Supertest in-memory API testing mastered! 🔥"',
            mistake: '😅 Masti Sir: "`container.querySelector(\'.btn-primary\')` use mat karo — accessible queries use karo!"'
          },
          englishDef: '**React Testing Library (RTL)** enforces testing components from the perspective of an actual end user rather than implementation details. Elements are queried via accessible roles (`getByRole`), text content (`getByText`), and labels (`getByLabelText`). Asynchronous UI updates (loading spinners, API fetches) are handled with `findBy*` queries and `waitFor`. **Supertest** complements frontend testing by executing in-memory HTTP integration assertions against Express API routes.',
          hinglishExplain: 'React Testing Library (RTL) modern UI testing ka gold standard hai:\n1. **User Perspective**: Internal state ya props test mat karo, screen par dikhne wala text aur buttons test karo.\n2. **Accessible Queries Hierarchy**: `getByRole("button", { name: "Submit" })` -> `getByLabelText` -> `getByText` -> `getByTestId` (Last resort).\n3. **Async UI Testing**: Jab API call ho rahi ho toh `findByText` ya `waitFor` use karke loading spinner se success state ka wait karo.\n4. **Supertest**: Backend Express API routes ko bina live server start kiye in-memory test karta hai.',
          funnyExample: {
            scenario: 'The ATM Screen Testing Analogy:\n- Bad Tester: Opens ATM casing with screwdriver, checks voltage on chip capacitor #42 (Testing implementation details! ❌)\n- RTL Good Tester: Types PIN into keypad, presses "Withdraw ₹500" button, asserts cash dispenser opens! (Testing user behavior! 🏧✨)',
            punchline: 'The more your tests resemble how your software is used, the more confidence they give you!'
          },
          visualDiagram: {
            title: 'React Testing Library (RTL) Query & Interaction Flow',
            nodes: [
              '1. render(<CourseEnrollmentModal course={sampleCourse} />)',
              '2. userEvent.type(screen.getByLabelText("Student Email"), "user@test.com")',
              '3. userEvent.click(screen.getByRole("button", { name: /enroll now/i }))',
              '4. await screen.findByText("Enrollment Successful! Welcome aboard.")',
              '5. expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument()'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'RTL Query Family Differences:',
            steps: [
              '`getBy*`: Returns element or throws immediate error if not found (Use for elements guaranteed to exist right now)',
              '`queryBy*`: Returns element or `null` if not found (Use specifically to assert that an element does NOT exist)',
              '`findBy*`: Returns a Promise that polls DOM until element appears or times out (Use for Async data / API responses)'
            ]
          },
          code: `// ── REACT COMPONENT TEST WITH RTL & USER-EVENT (LoginForm.test.jsx) ──
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { LoginForm } from '../components/LoginForm';

describe('<LoginForm />', () => {
  it('submits credentials and renders success message when inputs are valid', async () => {
    // Arrange: Mock login handler
    const mockOnSuccess = vi.fn();
    const user = userEvent.setup();

    render(<LoginForm onLoginSuccess={mockOnSuccess} />);

    // Act: Simulate realistic user interactions
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /log in/i });

    await user.type(emailInput, 'student@codemasti.com');
    await user.type(passwordInput, 'Secret123!');
    await user.click(submitButton);

    // Assert: Async wait for success confirmation
    const successAlert = await screen.findByRole('alert');
    expect(successAlert).toHaveTextContent(/login successful/i);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
  });

  it('displays validation error when submitting with empty email', async () => {
    const user = userEvent.setup();
    render(<LoginForm onLoginSuccess={vi.fn()} />);

    const submitButton = screen.getByRole('button', { name: /log in/i });
    await user.click(submitButton);

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
  });
});`,
          codeBreakdown: [
            { part: 'render(<LoginForm ... />)', label: 'Mounts virtual DOM instance inside JSDOM runtime environment', color: '#3b82f6' },
            { part: 'screen.getByRole("button", { name: /log in/i })', label: 'Accessible role query discovering interactive elements exactly like screen readers and users', color: '#10b981' },
            { part: 'await screen.findByRole("alert")', label: 'Asynchronous polling assertion awaiting completion of state transitions and rendering', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `fireEvent` use karna instead of `userEvent` (`userEvent` simulates realistic mouse/keyboard focus & blur)',
            '❌ Non-existence check karne ke liye `getBy*` use karna (will throw error instead of returning null; use `queryBy*`)'
          ],
          miniChallenge: 'Ek React component test likho jo verify kare ki Loading button disable ho jab form submit ho raha ho.',
          quiz: {
            question: 'React Testing Library mein kisi element ke DOM mein NA HONE (non-existence) ko verify karne ke liye kaunsi query use karni chahiye?',
            options: ['queryBy*', 'getBy*', 'findBy*', 'searchBy*'],
            answer: 'queryBy*',
            explanation: '`queryBy*` element na milne par exception throw karne ki jagah `null` return karta hai, allowing assertions like `expect(screen.queryByText("Error")).toBeNull()`.'
          },
          summary: [
            'RTL user behavior aur accessibility perspective se components test karta hai',
            'userEvent realistic browser events (focus, hover, type) dispatch karta hai',
            'findBy* aur waitFor async state updates aur API integration smoothly handle karte hain'
          ],
          flashcard: {
            q: 'React Testing Library mein `getBy*`, `queryBy*` aur `findBy*` mein kya farak hai?',
            a: '`getBy*` element dhoondta hai (fail hone par crash); `queryBy*` element dhoondta hai (na milne par `null` deta hai); `findBy*` async promise return karta hai (DOM mein aane tak wait karta hai).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: REST API, CONTRACT & DATABASE TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: REST API Testing, Contract Validation & Database Integration',
      lessons: [
        {
          id: 'test-api-contracts-database-integration',
          title: 'REST API Automation, API Contract Testing (JSON Schema) & Database Transactions Isolation',
          emoji: '🔌',
          xpReward: 45,
          badgeName: 'API Test Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Frontend bol raha hai user object mein `userId` aayega, backend bhej raha hai `id` — dono ka jhagda solve karne ke liye API Contract Testing use hoti hai! Saath hi Database Testing mein Transaction Rollbacks use karo taaki test DB kabhi ganda na ho! 🔌🗄️😎"',
            hint: '💡 Masti Sir: "Database integration test chalate waqt test shuru hone par `BEGIN` karo aur test khatam hone par `ROLLBACK` karo — zero dirty data!"',
            success: '🎉 Masti Sir: "REST API, schema contracts and isolated database integration tests active! 🔥"',
            mistake: '😅 Masti Sir: "API test mein sirf status code 200 check mat karo — response headers, JSON schema aur edge-case error envelopes bhi verify karo!"'
          },
          englishDef: '**REST API Testing** verifies endpoint behavior across HTTP verbs (GET, POST, PUT, DELETE), status codes (2xx, 4xx, 5xx), headers, and payload structures. **API Contract Testing** validates that frontend and backend adhere to agreed-upon JSON schema contracts (preventing breaking schema drift). **Database Integration Testing** tests transactional integrity and schema constraints while keeping environments clean via **Transaction Rollback Isolation** (`BEGIN ... ROLLBACK`).',
          hinglishExplain: 'Backend testing ke 3 major pillars hote hain:\n1. **REST API Testing**: Status codes (200, 201, 400, 401, 403, 404, 422), response headers aur JSON bodies verify karna.\n2. **API Contract Testing**: Verify karna ki API exact agreed schema return kar rahi hai (types, required fields).\n3. **Database Testing**: CRUD operations, unique constraints, foreign keys aur rollback testing taaki har test ke baad database 100% clean ho jaye.',
          funnyExample: {
            scenario: 'The Contract Agreement Bridge:\n- Backend Engineer: "Maine API update kar di!"\n- Frontend App: Crashes because backend changed `user_name` to `username`! 😱\n- Contract Testing in CI: ❌ Fails on PR build: "Response schema violation on field \'user_name\'"!\n- Breaking change caught before deployment! 🛡️✨',
            punchline: 'Contract tests prevent breaking frontend-backend communication!'
          },
          visualDiagram: {
            title: 'Database Integration Test with Transaction Rollback',
            nodes: [
              '1. Test Setup: Acquire DB Client -> Run "BEGIN" (Start isolated transaction)',
              '2. Test Execution: INSERT INTO users (email, role) VALUES (...) -> Call API Controller',
              '3. Assertions: expect(user.id).toBeDefined() -> Verify DB constraints',
              '4. Test Teardown: Run "ROLLBACK" -> Database restored to pristine clean state!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'API Testing Checklists:',
            steps: [
              'Status Code Assertions (201 Created vs 200 OK vs 204 No Content)',
              'Validation Error Envelopes (422 Unprocessable Entity with field error array)',
              'Authentication & Authorization Guards (401 Unauthorized, 403 Forbidden)',
              'JSON Schema Contract Verification (Zod / JSON Schema validation)'
            ]
          },
          code: `// ── SUPERTEST REST API & DATABASE TRANSACTION TEST (courses.api.test.js) ──
import request from 'supertest';
import { app } from '../app.js';
import { db } from '../config/database.js';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('POST /api/v1/courses (Integration Test)', () => {
  let dbClient;

  beforeEach(async () => {
    // 1. Start isolated transaction for test
    dbClient = await db.connect();
    await dbClient.query('BEGIN');
  });

  afterEach(async () => {
    // 2. Rollback all database modifications made during test!
    await dbClient.query('ROLLBACK');
    dbClient.release();
  });

  it('should create course and return 201 with valid schema when payload is valid', async () => {
    const newCoursePayload = {
      title: 'Full Stack QA Engineering',
      category: 'testing',
      level: 'Advanced',
      price: 1999
    };

    const response = await request(app)
      .post('/api/v1/courses')
      .set('Authorization', 'Bearer valid_instructor_token')
      .send(newCoursePayload);

    // Assert Status & Headers
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toMatch(/json/);

    // Assert Contract Schema
    expect(response.body).toMatchObject({
      success: true,
      data: {
        id: expect.any(String),
        title: 'Full Stack QA Engineering',
        category: 'testing',
        price: 1999
      }
    });
  });

  it('should return 422 Unprocessable Entity when title is missing', async () => {
    const invalidPayload = { category: 'testing' };

    const response = await request(app)
      .post('/api/v1/courses')
      .set('Authorization', 'Bearer valid_instructor_token')
      .send(invalidPayload);

    expect(response.status).toBe(422);
    expect(response.body.success).toBe(false);
    expect(response.body.errors).toContainEqual(
      expect.objectContaining({ field: 'title' })
    );
  });
});`,
          codeBreakdown: [
            { part: 'await dbClient.query("BEGIN") / ("ROLLBACK")', label: 'Transactional database sandbox isolation guaranteeing zero dirty state contamination between tests', color: '#3b82f6' },
            { part: 'request(app).post("/api/v1/courses")', label: 'In-memory Supertest HTTP dispatch testing controllers, middleware and database queries', color: '#10b981' },
            { part: 'expect(response.body).toMatchObject(...)', label: 'Schema contract assertion validating required response payload structure and field types', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Integration test ke baad database clean na karna (leads to primary key collision errors on subsequent runs)',
            '❌ API error responses par standardized JSON error envelopes test na karna'
          ],
          miniChallenge: 'Ek Supertest API test likho jo verify kare ki bina Bearer token ke protected endpoint hit karne par 401 return ho.',
          quiz: {
            question: 'Database integration tests ko fast aur isolated rakhne ke liye har test case ke baad kaunsi SQL command run karni chahiye?',
            options: ['ROLLBACK', 'DROP TABLE', 'DELETE ALL', 'SHUTDOWN'],
            answer: 'ROLLBACK',
            explanation: 'Har test case ko transaction (`BEGIN`) ke andar run karke test ke end par `ROLLBACK` karne se test data database se automatically revert ho jata hai, keeping the DB completely clean.'
          },
          summary: [
            'REST API tests HTTP status codes, headers aur payloads validate karte hain',
            'Contract testing frontend aur backend ke data contracts ko sync rakhti hai',
            'Transaction rollbacks database integration testing ko fast aur isolated banate hain'
          ],
          flashcard: {
            q: 'API Contract Testing kya hoti hai?',
            a: 'Ye ensure karna ki API provider ka actual response format aur consumer ka expected request/response schema (types, fields, constraints) exact match kar rahe hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: END-TO-END (E2E) AUTOMATION (PLAYWRIGHT)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: End-to-End (E2E) Testing with Playwright & Page Object Model (POM)',
      lessons: [
        {
          id: 'test-e2e-playwright-cypress',
          title: 'Playwright E2E Automation, Locators, Auto-Waiting, Network Interception & Page Object Model',
          emoji: '🎭',
          xpReward: 50,
          badgeName: 'E2E Automation Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Playwright is pure magic! Real Chromium, Firefox aur WebKit browsers automatically khulte hain, user ki tarah click aur type karte hain, aur agar test fail ho toh Trace Viewer mein poora video aur network log mil jata hai! Page Object Model (POM) architecture seekho! 🎭🚀😎"',
            hint: '💡 Masti Sir: "Playwright auto-waiting built-in hoti hai — element visible, enabled aur animation stable hone tak Playwright khud wait karta hai! Hardcoded sleep kabhi mat lagao!"',
            success: '🎉 Masti Sir: "Playwright multi-browser E2E automation with Page Object Model mastered! 🔥"',
            mistake: '😅 Masti Sir: "Brittle selectors jaise `div > div:nth-child(3)` use mat karo — use user-facing locators: `page.getByRole()` ya `page.getByLabel()`!"'
          },
          englishDef: '**Playwright (by Microsoft)** is the modern standard for fast, reliable cross-browser End-to-End (E2E) automation across Chromium, Firefox, and WebKit. Core capabilities include **Smart Locators**, **Auto-Waiting** (eliminating flaky timeouts), **Network Mocking/Interception**, **Parallel Execution**, and the **Page Object Model (POM)** architectural pattern which encapsulates page selectors and interactions into reusable classes.',
          hinglishExplain: 'Playwright modern automated testing ka sabse powerful tool hai:\n1. **Cross-Browser**: Ek sath Chrome, Firefox aur Safari (WebKit) mein test chala sakta hai.\n2. **Auto-Waiting**: Button click karne se pehle Playwright check karta hai ki button visible hai, enabled hai aur animation ruk chuki hai.\n3. **Page Object Model (POM)**: Page ke selectors aur actions ko separate class mein rakhna taaki UI change hone par sirf ek jagah update karna pade.\n4. **Trace Viewer**: Test fail hone par DOM snapshot, screenshots aur network waterfall inspect karne ka feature.',
          funnyExample: {
            scenario: 'The Superhuman QA Robot:\n- Human QA: Takes 4 hours to manually test 50 course enrollment flows across 3 browsers 😴\n- Playwright: Launches 10 headless browser workers in parallel -> Tests all 50 flows in 15 seconds with recorded video traces! ⚡🤖✨',
            punchline: 'Automate repetitive end-to-end user journeys with Playwright!'
          },
          visualDiagram: {
            title: 'Playwright Page Object Model (POM) Architecture',
            nodes: [
              'Test Suite (e2e/courses.spec.ts)',
              '├── LoginPage (Encapsulates email input, password input, submit)',
              '├── CourseCatalogPage (Encapsulates search, category filters, course tiles)',
              '└── LessonViewerPage (Encapsulates video player, quiz submit, next button)',
              'Result: Clean, readable, highly maintainable E2E test scripts!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Playwright Auto-Waiting Actionability Checks:',
            steps: [
              'Attached: Element is attached to the DOM tree',
              'Visible: Element has non-empty bounding box and is not hidden (`display: none`)',
              'Stable: Element has finished animating and transitions',
              'Enabled: Element is not `disabled`',
              'Editable: Element is not `readonly` (for text typing)'
            ]
          },
          code: `// ── 1. PAGE OBJECT MODEL CLASS (pages/CoursePage.js) ──
export class CoursePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search courses...');
    this.enrollButton = page.getByRole('button', { name: /enroll in course/i });
    this.successBadge = page.getByText(/enrolled successfully/i);
  }

  async goto() {
    await this.page.goto('/courses');
  }

  async searchAndOpenCourse(courseTitle) {
    await this.searchInput.fill(courseTitle);
    await this.page.keyboard.press('Enter');
    await this.page.getByRole('heading', { name: new RegExp(courseTitle, 'i') }).first().click();
  }

  async enroll() {
    await this.enrollButton.click();
  }
}

// ── 2. PLAYWRIGHT E2E TEST SUITE (tests/course-enrollment.spec.js) ──
import { test, expect } from '@playwright/test';
import { CoursePage } from './pages/CoursePage.js';

test.describe('Course Enrollment User Flow (E2E)', () => {
  test('user can search course, open details, and complete enrollment', async ({ page }) => {
    const coursePage = new CoursePage(page);

    // 1. Navigate to course catalog
    await coursePage.goto();

    // 2. Search and click course
    await coursePage.searchAndOpenCourse('Testing & QA');

    // 3. Verify URL navigation
    await expect(page).toHaveURL(/.*testing/);

    // 4. Trigger enrollment
    await coursePage.enroll();

    // 5. Assert successful enrollment confirmation
    await expect(coursePage.successBadge).toBeVisible();
  });
});`,
          codeBreakdown: [
            { part: 'export class CoursePage { ... }', label: 'Page Object Model class encapsulating selectors and page interaction methods', color: '#3b82f6' },
            { part: 'await expect(page).toHaveURL(/.*testing/)', label: 'Web-first auto-polling assertion waiting for URL state transition', color: '#10b981' },
            { part: 'await expect(coursePage.successBadge).toBeVisible()', label: 'Verifies successful confirmation badge is rendered and visible to the end user', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Hardcoded `page.waitForTimeout(3000)` timeouts use karna',
            '❌ E2E tests mein Page Object Model na use karke selectors har test mein hardcode kar dena'
          ],
          miniChallenge: 'Playwright mein ek test likho jo `page.route()` use karke backend API failure mock kare aur verify kare ki error banner show ho.',
          quiz: {
            question: 'Playwright mein "Page Object Model" (POM) design pattern use karne ka primary architectural benefit kya hai?',
            options: [
              'Page selectors aur actions ko separate class mein encapsulate karta hai, jisse UI badalne par test code maintainable rehta hai',
              'Ye internet speed fast karta hai',
              'Ye JavaScript ko TypeScript mein convert karta hai',
              'Ye database backup banata hai'
            ],
            answer: 'Page selectors aur actions ko separate class mein encapsulate karta hai, jisse UI badalne par test code maintainable rehta hai',
            explanation: 'Page Object Model encapsulates page locators and interaction helper methods into reusable classes, dramatically improving test maintainability.'
          },
          summary: [
            'Playwright modern fast cross-browser automation provide karta hai',
            'Auto-waiting actionability checks flaky timeouts ko eliminate karti hain',
            'Page Object Model E2E code maintainability aur readability maximize karta hai'
          ],
          flashcard: {
            q: 'Playwright Trace Viewer kya hai?',
            a: 'Ek GUI tool jo test run ke har step ka DOM snapshot, screenshots, console logs aur network waterfall record karta hai for instant debugging.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: CROSS-BROWSER, RESPONSIVE & VISUAL TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Cross-Browser, Responsive & Visual Regression Testing',
      lessons: [
        {
          id: 'test-cross-browser-visual-regression',
          title: 'Cross-Browser (Chromium, Firefox, WebKit), Mobile Viewports & Visual Regression Testing',
          emoji: '📸',
          xpReward: 45,
          badgeName: 'Visual Pixel Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Developer ne CSS mein 1 pixel padding badli aur pura checkout button screen se bahar chala gaya! Visual Regression Testing pixel-by-pixel screenshot compare karke unintended UI changes pakadti hai! 📸📱😎"',
            hint: '💡 Masti Sir: "Cross-browser testing mein Chromium (Chrome/Edge), Firefox, aur WebKit (Safari) teeno engines par tests execute karein!"',
            success: '🎉 Masti Sir: "Visual regression and responsive viewport testing active! 🔥"',
            mistake: '😅 Masti Sir: "Visual snapshot test karte waqt dynamic data (jaise live clock timestamp) ko mock ya mask karna zaroori hai!"'
          },
          englishDef: '**Cross-Browser Testing** executes test matrices across rendering engines: Chromium (Blink), Firefox (Gecko), and WebKit (Safari engine). **Responsive Testing** validates layouts across mobile (375px), tablet (768px), and desktop (1440px) viewports. **Visual Regression Testing** compares rendered UI screenshots pixel-by-pixel against golden baseline images to catch unintended layout shifts, misalignments, and styling regressions.',
          hinglishExplain: 'Visual aur Cross-Browser quality engineering ke important concepts:\n1. **Cross-Browser Matrix**: Chrome, Safari (WebKit) aur Firefox par UI ka behavior check karna.\n2. **Responsive Viewport Testing**: Mobile, Tablet aur Desktop screens par navigation drawer, buttons aur text overflow test karna.\n3. **Visual Regression Testing**: Golden screenshot baseline ke sath naye screenshot ko compare karna (Pixel diffing). Agar button 2px bhi khisak gaya toh visual test pakad leta hai.',
          funnyExample: {
            scenario: 'The Sneaky CSS Bug (Visual Regression in Action):\n- Dev updates Tailwind font size.\n- Functional test: "Button exists" -> Passes ✅\n- Visual Regression test: ❌ Fails! "Button text wrapped into 2 lines and pushed checkout total below screen fold!" 📸\n- Screenshot diff highlights shifted pixels in neon pink! 🔍✨',
            punchline: 'Visual regression catches bugs that functional tests cannot see!'
          },
          visualDiagram: {
            title: 'Visual Regression Snapshot Comparison Pipeline',
            nodes: [
              'Baseline Screenshot (Golden Approved Reference)',
              'Test Run Screenshot (Current Candidate Build)',
              'Pixel Diff Engine (Compares RGB values per pixel)',
              'If Diff > 0.1% -> Generates Visual Diff Artifact (Highlights shifted pixels) -> Fails Test!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How to Prevent Flaky Visual Tests:',
            steps: [
              'Disable CSS animations & transitions during visual snapshot capture',
              'Mask dynamic elements (User avatars, live clocks, randomized IDs)',
              'Set consistent font rendering flags across CI runners'
            ]
          },
          code: `// ── PLAYWRIGHT VISUAL REGRESSION & RESPONSIVE TEST (visual.spec.js) ──
import { test, expect } from '@playwright/test';

test.describe('Visual Regression & Responsive UI Suite', () => {
  test('Landing Page visual snapshot matches golden baseline', async ({ page }) => {
    await page.goto('https://codemasti.com');

    // 1. Mask dynamic timestamps and user avatar
    const liveCounter = page.getByTestId('live-user-counter');

    // 2. Assert Visual Snapshot with pixel tolerance
    await expect(page).toHaveScreenshot('landing-page-desktop.png', {
      maxDiffPixelRatio: 0.02, // 2% pixel tolerance threshold
      mask: [liveCounter] // Masks live counter to prevent false positive visual diffs
    });
  });

  test('Mobile viewport navigation menu renders correctly on iPhone 14', async ({ page }) => {
    // 3. Emulate Mobile Viewport
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('https://codemasti.com');

    // Verify Hamburger button is visible on mobile
    const hamburgerBtn = page.getByRole('button', { name: /open navigation menu/i });
    await expect(hamburgerBtn).toBeVisible();

    // Open Drawer & Assert Mobile Layout Snapshot
    await hamburgerBtn.click();
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page).toHaveScreenshot('mobile-nav-drawer.png');
  });
});`,
          codeBreakdown: [
            { part: 'await expect(page).toHaveScreenshot("...", { mask: [...] })', label: 'Captures full-page DOM raster snapshot and compares against baseline repository image', color: '#3b82f6' },
            { part: 'maxDiffPixelRatio: 0.02', label: 'Configures pixel difference threshold tolerating minor sub-pixel font anti-aliasing variations', color: '#10b981' },
            { part: 'await page.setViewportSize({ width: 390, height: 844 })', label: 'Emulates mobile device viewport dimensions for responsive layout verification', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Dynamic live data (dates, randomized IDs) ko mask kiye bina visual screenshot lena',
            '❌ Visual tests ko bina animation disable kiye run karna'
          ],
          miniChallenge: 'Playwright config mein WebKit, Firefox, aur Mobile Chrome projects configure karo.',
          quiz: {
            question: 'Visual Regression Testing mein "Masking" ka use kyun kiya jata hai?',
            options: [
              'Dynamic elements (jaise live clocks ya random avatars) ko visual comparison se hide karne ke liye taaki false positive test failures na hon',
              'CSS hide karne ke liye',
              'Images compress karne ke liye',
              'Password encrypt karne ke liye'
            ],
            answer: 'Dynamic elements (jaise live clocks ya random avatars) ko visual comparison se hide karne ke liye taaki false positive test failures na hon',
            explanation: 'Masking dynamic content (dates, usernames, animated ads) prevents minor dynamic text changes from triggering false visual regression diff failures.'
          },
          summary: [
            'Cross-browser testing layout parity across rendering engines verify karti hai',
            'Responsive tests mobile aur desktop viewports validate karte hain',
            'Visual regression testing unintended layout shifts aur CSS regressions catch karti hai'
          ],
          flashcard: {
            q: 'Visual Regression Testing functional testing se kaise different hai?',
            a: 'Functional testing check karti hai "kya button click hone par kaam kar raha hai"; Visual testing check karti hai "kya button ka color, alignment aur layout visual design ke mutabik sahi dikh raha hai".'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: ACCESSIBILITY & PERFORMANCE TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: Accessibility (a11y) & Performance / Load Testing (k6)',
      lessons: [
        {
          id: 'test-accessibility-performance-load',
          title: 'Accessibility Testing (axe-core, WCAG 2.1) & Performance Load Testing with k6 (p95/p99)',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Perf & a11y Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Website fast aur accessible honi chahiye! Accessibility Testing (axe-core) se ensure karo ki screen-reader aur keyboard users bina kisi dikkat ke sikh sakein! Aur k6 se 10,000 concurrent users ka Load Test chalao! ⚡♿😎"',
            hint: '💡 Masti Sir: "Performance metrics mein Average response time se zyada p95 aur p99 percentiles matter karte hain — yani 99% users ko kaisa response mil raha hai!"',
            success: '🎉 Masti Sir: "Automated accessibility scans and k6 performance load testing mastered! 🔥"',
            mistake: '😅 Masti Sir: "Load testing production live database par mat chalao — use dedicated staging environment!"'
          },
          englishDef: '**Accessibility (a11y) Testing** guarantees software usability for individuals with disabilities adhering to **WCAG 2.1 AA** guidelines (color contrast, ARIA landmarks, keyboard focus, semantic HTML) via automated tools like **axe-core** and Lighthouse. **Performance & Load Testing** measures application throughput and latency percentiles (p50, p90, p95, p99) under simulated traffic (Load, Stress, Spike, Soak tests) using **k6**.',
          hinglishExplain: 'Quality engineering mein Accessibility aur Performance critical hote hain:\n1. **Accessibility (a11y)**: `axe-core` ke through WCAG compliance check karna (Missing alt tags, Color contrast, Keyboard Tab navigation, ARIA labels).\n2. **Load Testing with k6**: Check karna ki application 1,000 se 10,000 concurrent users par kaisa behave karti hai.\n3. **Performance Metrics**: p95 aur p99 percentiles (e.g. "95% requests 200ms ke andar resolve honi chahiye, with < 1% error rate").',
          funnyExample: {
            scenario: 'The Flash Sale Stampede (Load Testing):\n- Without Load Testing: 5,000 learners rush to enroll at 8:00 PM -> Server crashes with 504 Gateway Timeout! 😱💥\n- With k6 Load Test: Found database connection pool bottleneck at 1,500 users -> Optimized pool size & Redis cache -> Successfully handles 20,000 learners smoothly! 🚀✨',
            punchline: 'Load test before your big launch, not during it!'
          },
          visualDiagram: {
            title: 'Performance Testing Latency Percentile Distribution',
            nodes: [
              'Total 100,000 Requests Dispatched by k6',
              '├── p50 (Median): 45ms (50% of users experience blazing speed)',
              '├── p90 Percentile: 120ms (90% of requests finish in 120ms)',
              '├── p95 Percentile: 190ms (Quality Gate Threshold: < 200ms) ✅',
              '└── p99 Percentile (Worst 1%): 380ms'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Performance Testing Types Taxonomy:',
            steps: [
              'Load Testing: Validates system behavior under expected normal production traffic',
              'Stress Testing: Pushes system beyond max design capacity to discover the breaking point',
              'Spike Testing: Sudden instantaneous burst of traffic (e.g. breaking news / viral flash sale)',
              'Soak / Endurance Testing: Sustained normal load over 24-48 hours to uncover memory leaks'
            ]
          },
          code: `// ── 1. AUTOMATED ACCESSIBILITY AUDIT WITH AXE-CORE (a11y.spec.js) ──
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('WCAG 2.1 AA Accessibility Audit', () => {
  test('Course viewer page should have zero automated accessibility violations', async ({ page }) => {
    await page.goto('https://codemasti.com/course/testing');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

// ── 2. K6 LOAD TEST SCRIPT (k6-load-test.js) ──
/*
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },  // Ramp up to 50 concurrent virtual users
    { duration: '1m', target: 50 },   // Stay at 50 users
    { duration: '20s', target: 0 },   // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<250'], // 95% of requests must complete below 250ms
    http_req_failed: ['rate<0.01'],   // Error rate must be strictly under 1%
  },
};

export default function () {
  const res = http.get('https://api.codemasti.com/api/v1/courses');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
*/`,
          codeBreakdown: [
            { part: 'new AxeBuilder({ page }).withTags(["wcag2aa"]).analyze()', label: 'Scans rendered DOM against official WCAG accessibility compliance rules', color: '#3b82f6' },
            { part: "stages: [{ duration: '30s', target: 50 }]", label: 'Defines staged ramping load profile simulating real human traffic influx', color: '#10b981' },
            { part: "thresholds: { 'http_req_duration': ['p(95)<250'] }", label: 'Automated performance quality gate asserting 95th percentile latency remains below 250ms', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Accessibility audit ko ignore karna (violates legal compliance and hurts disabled users)',
            '❌ Load test metrics mein average response time dekh kar khush ho jana (Average masks severe tail latency spikes; always inspect p95 and p99!)'
          ],
          miniChallenge: 'Ek axe-core audit test run karo aur verify karo ki buttons par accessible name present ho.',
          quiz: {
            question: 'Performance load testing mein "p95 Latency" metric ka kya matlab hota hai?',
            options: [
              '95% requests us specified time ya usse kam time mein complete hui hain',
              '95% requests fail ho gayi hain',
              '95 users online hain',
              'Average response time'
            ],
            answer: '95% requests us specified time ya usse kam time mein complete hui hain',
            explanation: 'The 95th percentile (p95) means 95% of all observed requests were served within that latency threshold or faster, representing the real experience of the vast majority of users.'
          },
          summary: [
            'axe-core automated WCAG 2.1 AA accessibility compliance audit karta hai',
            'k6 modern scalable load, stress aur spike testing provide karta hai',
            'p95 aur p99 latency thresholds real-world user performance guarantee karte hain'
          ],
          flashcard: {
            q: 'Average Latency ke mukable p95 / p99 Latency dekhna kyun behtar hota hai?',
            a: 'Kyonki average outliers ko chhipa deta hai; p95/p99 batata hai ki aapke 95% ya 99% users ko kitna fast response mil raha hai including worst-case slow spikes.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: DEFENSIVE SECURITY TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Defensive Security Testing & Authentication Audits',
      lessons: [
        {
          id: 'test-security-auth-defensive-audits',
          title: 'Defensive Security QA: AuthN/AuthZ Bypasses, IDOR Vulnerabilities & Security Headers Verification',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Security QA Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "QA Engineer ka kaam sirf feature chalana nahi hota, balki ye dekhna bhi hota hai ki hacker feature ka galat faayda na utha sake! IDOR vulnerability, missing token bypass, aur SQL injection defensiveness test karo! 🛡️💻😎"',
            hint: '💡 Masti Sir: "IDOR test: User A ke token se User B ka data modify karne ki request bhejo — server ko turant 403 Forbidden return karna chahiye!"',
            success: '🎉 Masti Sir: "Defensive security test suites and vulnerability prevention verified! 🔥"',
            mistake: '😅 Masti Sir: "Security testing karte waqt real production accounts ko test mat karo — use isolated mock staging environments!"'
          },
          englishDef: 'Defensive Security QA systematically audits applications against OWASP Top 10 vulnerabilities through automated functional assertions: **Authentication Bypasses** (accessing protected routes without tokens or with expired tokens), **Broken Access Control & IDOR** (Insecure Direct Object References where User A modifies User B\'s entities), **Rate Limit Enforcement**, and **Security Headers** (`Content-Security-Policy`, `HSTS`, `X-Frame-Options`).',
          hinglishExplain: 'Security QA mein hum defensive automated test cases likhte hain:\n1. **Authentication Bypass Test**: Bina token ya expired token ke protected route hit karke verify karna ki 401 Unauthorized return ho.\n2. **IDOR Test**: Student account se instructor ya doosre student ka profile update karne ki koshish karna aur 403 Forbidden verify karna.\n3. **Security Headers Test**: Helmet security headers verify karna.\n4. **Rate Limit Test**: 10 rapid login attempts bhej kar 429 Too Many Requests verify karna.',
          funnyExample: {
            scenario: 'The Digital Impersonator (IDOR Test in Action):\n- Attacker logs in as Student #50 🧑‍🎓\n- Attacker calls: `PATCH /api/users/1` (Targeting Admin account!) 🦹‍♂️\n- Secure Server with QA Guard: ❌ 403 Forbidden: "You do not own this account!"\n- QA test verifies IDOR vulnerability is 100% patched! 🛡️✨',
            punchline: 'Defensive security testing blocks unauthorized data breaches!'
          },
          visualDiagram: {
            title: 'Automated Security QA Audit Test Matrix',
            nodes: [
              'Security QA Test Suite',
              '├── Test 1: GET /api/admin/users without token -> Expects 401 Unauthorized',
              '├── Test 2: PATCH /api/users/99 with User #50 token -> Expects 403 Forbidden (IDOR Guard)',
              '├── Test 3: 10 Failed Logins in 1 second -> Expects 429 Too Many Requests',
              '└── Test 4: Inspect Response Headers -> Expects Strict-Transport-Security & CSP'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Security QA Checklist:',
            steps: [
              'Verify 401 Unauthorized for missing, invalid, or expired tokens',
              'Verify 403 Forbidden for insufficient permissions (IDOR and RBAC)',
              'Verify 429 Too Many Requests on brute-force login attempts',
              'Verify sensitive headers (e.g. `X-Powered-By: Express`) are hidden'
            ]
          },
          code: `// ── AUTOMATED DEFENSIVE SECURITY TEST SUITE (security.test.js) ──
import request from 'supertest';
import { app } from '../app.js';
import { describe, it, expect } from 'vitest';
import jwt from 'jsonwebtoken';

describe('Defensive Security QA Test Suite', () => {
  it('should return 401 Unauthorized when Authorization header is missing on private routes', async () => {
    const res = await request(app).get('/api/v1/users/me');
    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('should return 403 Forbidden when Student attempts to delete Course (RBAC Guard)', async () => {
    const studentToken = jwt.sign(
      { sub: 'student_123', role: 'student' },
      process.env.JWT_SECRET || 'TestSecretKey2026!'
    );

    const res = await request(app)
      .delete('/api/v1/courses/course_xyz')
      .set('Authorization', \`Bearer \${studentToken}\`);

    expect(res.status).toBe(403);
  });

  it('should include hardened security headers in all HTTP responses', async () => {
    const res = await request(app).get('/api/v1/courses');

    expect(res.headers['x-frame-options']).toBe('DENY');
    expect(res.headers['x-content-type-options']).toBe('nosniff');
    expect(res.headers['x-powered-by']).toBeUndefined(); // Information leakage prevented!
  });
});`,
          codeBreakdown: [
            { part: 'expect(res.status).toBe(401)', label: 'Validates that unauthenticated requests are strictly rejected at the gateway', color: '#3b82f6' },
            { part: 'expect(res.status).toBe(403)', label: 'Validates role-based authorization guards preventing privilege escalation', color: '#10b981' },
            { part: "expect(res.headers['x-powered-by']).toBeUndefined()", label: 'Validates technology stack fingerprint masking preventing targeted framework exploits', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Security testing mein sirf happy path scenarios test karna',
            '❌ IDOR ownership test cases likhna bhool jana'
          ],
          miniChallenge: 'Ek security test likho jo verify kare ki 5 galat passwords submit karne par 6th request 429 status code return kare.',
          quiz: {
            question: 'Security QA testing mein IDOR (Insecure Direct Object Reference) check karne ke liye kaisa test likha jata hai?',
            options: [
              'User A ke credentials ke sath User B ke resource ID ko modify karne ki request bhej kar 403 Forbidden verify karna',
              'Valid password se login karna',
              'Database tables count karna',
              'CSS test karna'
            ],
            answer: 'User A ke credentials ke sath User B ke resource ID ko modify karne ki request bhej kar 403 Forbidden verify karna',
            explanation: 'An IDOR test verifies that the system blocks authenticated users from modifying or deleting resources that belong to other tenant accounts.'
          },
          summary: [
            'Defensive security QA authentication bypasses aur IDOR flaws catch karti hai',
            'Role-based access control (RBAC) negative test cases privilege escalation rokte hain',
            'Security headers automated test assertions deployment safety ensure karte hain'
          ],
          flashcard: {
            q: 'Negative Security Testing kya hoti hai?',
            a: 'System ko intentionally unauthorized, expired ya malformed requests bhej kar check karna ki system gracefully aur securely reject (401/403/422/429) karta hai ya nahi.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: CI/CD QUALITY GATES & GITHUB ACTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: CI/CD Quality Gates & GitHub Actions Continuous Testing',
      lessons: [
        {
          id: 'test-cicd-github-actions-quality-gates',
          title: 'Continuous Testing in CI/CD, GitHub Actions Workflows, Coverage Metrics & Quality Gates',
          emoji: '⚙️',
          xpReward: 45,
          badgeName: 'CI/CD Tester',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Developer ne code push kiya? Ab GitHub Actions ka robot automatically Lint check karega, Unit tests chalayega, API tests chalayega, aur agar ek bhi test fail hua toh Pull Request ko block kar dega! Isse Quality Gate kehte hain! ⚙️🤖😎"',
            hint: '💡 Masti Sir: "Code Coverage metric: 80%+ critical business logic cover karo, lekin yaad rakho: 100% coverage ka matlab 100% bug-free hona nahi hota — quality assertions matter karte hain!"',
            success: '🎉 Masti Sir: "Continuous testing pipeline and GitHub Actions Quality Gates active! 🔥"',
            mistake: '😅 Masti Sir: "CI pipeline ko 45 minute slow mat banao — parallel jobs aur caching use karke pipeline ko 5 minute mein finish karo!"'
          },
          englishDef: '**Continuous Testing** executes automated test suites inside CI/CD pipelines (such as GitHub Actions) on every commit and pull request. **Quality Gates** are automated pass/fail criteria enforcing standards: zero failing tests, type check validity, linting rules, security vulnerability audits (`npm audit`), and code coverage thresholds (Line, Branch, Statement). Failing any quality gate automatically blocks deployment.',
          hinglishExplain: 'CI/CD mein automated quality pipeline setup karna modern engineering standard hai:\n1. **GitHub Actions Workflow**: Developer jab bhi code push karta hai, server automatically repository checkout karta hai, dependencies install karta hai aur tests run karta hai.\n2. **Quality Gates**: Rule set hota hai ki agar Unit/E2E test fail hua ya code coverage 80% se kam hua toh Pull Request merge nahi ho sakti.\n3. **Code Coverage Metrics**: Line, Branch, aur Function coverage measure karta hai ki codebase ka kitna hissa tests dwara execute hua hai.',
          funnyExample: {
            scenario: 'The Automated Border Control (CI/CD Quality Gate):\n- Developer submits Pull Request to `main` branch 📦\n- GitHub Actions Bot executes:\n  1. ESLint & TypeScript Check -> PASS ✅\n  2. 120 Vitest Unit Tests -> PASS ✅\n  3. Supertest API Integration -> PASS ✅\n  4. Playwright Smoke Tests -> PASS ✅\n  5. Coverage = 88% -> PASS ✅\n- Pull Request automatically approved for staging deployment! 🚀',
            punchline: 'Automated CI/CD quality gates protect production 24/7!'
          },
          visualDiagram: {
            title: 'CI/CD Automated Quality Gate Pipeline Flow',
            nodes: [
              '1. Git Push / Pull Request Created',
              '2. Job 1: Linting & TypeScript Typecheck',
              '3. Job 2: Vitest Unit & Component Tests (With Coverage Thresholds)',
              '4. Job 3: Supertest API Integration Tests',
              '5. Job 4: Playwright Cross-Browser E2E Tests',
              'Quality Gate: ALL Jobs GREEN -> Deploy to Production 🚀 (If ANY fails -> BLOCK ❌)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Code Coverage Metrics Deep Dive:',
            steps: [
              'Statement Coverage: Has each executable code statement been executed by tests?',
              'Branch Coverage: Have both `if (true)` and `if (false)` paths been evaluated?',
              'Function Coverage: Has every declared function been invoked in test runs?',
              'Line Coverage: Percentage of source code lines traversed during testing'
            ]
          },
          code: `# ── GITHUB ACTIONS CONTINUOUS TESTING WORKFLOW (.github/workflows/test.yml) ──
name: CodeMasti Automated Quality Gate Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality-gate:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code Repository
        uses: actions/checkout@v4

      - name: Setup Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Execute Linter & Typecheck
        run: npm run lint

      - name: Execute Vitest Unit & Integration Tests (With Coverage Gate)
        run: npx vitest run --coverage --coverage.thresholds.lines=80

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Execute Playwright E2E Smoke Tests
        run: npx playwright test

      - name: Upload Test Results & Trace Artifacts
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-test-traces
          path: test-results/`,
          codeBreakdown: [
            { part: 'on: pull_request: branches: [main]', label: 'Triggers automated quality verification workflow on every candidate pull request', color: '#3b82f6' },
            { part: '--coverage.thresholds.lines=80', label: 'Strict quality gate failing CI pipeline if overall line coverage drops below 80%', color: '#10b981' },
            { part: 'if: failure() -> upload-artifact@v4', label: 'Automatically captures and archives failure screenshots and video traces for developer inspection', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ 100% coverage ko quality ka proof samajhna (High coverage with bad assertions catches zero bugs!)',
            '❌ CI/CD pipeline mein test failure artifacts (traces/screenshots) save na karna'
          ],
          miniChallenge: 'GitHub Actions workflow mein ek parallel job add karo jo dependency security scan (`npm audit`) run kare.',
          quiz: {
            question: 'Software engineering mein "Quality Gate" ka primary function kya hota hai?',
            options: [
              'Pre-defined automated quality standards (Tests passing, coverage threshold, lint) enforce karna aur standards fail hone par deployment block karna',
              'Server restart karna',
              'Database password change karna',
              'CSS optimize karna'
            ],
            answer: 'Pre-defined automated quality standards (Tests passing, coverage threshold, lint) enforce karna aur standards fail hone par deployment block karna',
            explanation: 'Quality gates enforce automated criteria (zero test failures, code coverage thresholds, security checks) to prevent broken or unverified code from reaching production.'
          },
          summary: [
            'CI/CD pipelines automated testing ko development workflow mein embed karti hain',
            'Quality gates unverified code ko production mein merge hone se rokte hain',
            'Artifact uploads failed tests ki fast root-cause debugging empower karti hain'
          ],
          flashcard: {
            q: 'Branch Coverage Line Coverage se superior kyun maani jaati hai?',
            a: 'Kyonki line coverage sirf ye batati hai ki line execute hui, jabki branch coverage check karti hai ki `if-else` aur `ternary` conditions ke dono TRUE aur FALSE branches test hue hain ya nahi.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: SHIFT-LEFT, SHIFT-RIGHT & AI-ASSISTED TESTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: Shift-Left, Shift-Right & Responsible AI-Assisted Testing',
      lessons: [
        {
          id: 'test-shift-left-right-ai-testing',
          title: 'Shift-Left vs Shift-Right, Observability, Feature Flags, Canary Releases & AI-Assisted Testing',
          emoji: '🤖',
          xpReward: 45,
          badgeName: 'Modern QA Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Shift-Left ka matlab: coding shuru hone se pehle hi test scenarios sochna! Aur Shift-Right ka matlab: production par Feature Flags, Canary releases, aur Observability logs se quality monitor karna! AI testing tools use karo, lekin human verification mandatory hai! 🤖📊😎"',
            hint: '💡 Masti Sir: "AI se test data aur edge cases generate karwao, lekin AI generated tests ko bina review kiye commit mat karna — AI hallucinated fake APIs invent kar sakta hai!"',
            success: '🎉 Masti Sir: "Shift-Left/Right strategies and AI-assisted testing workflows mastered! 🔥"',
            mistake: '😅 Masti Sir: "AI generated test assertions ko blind trust mat karna — verify that assertions actually test true business logic!"'
          },
          englishDef: '**Shift-Left Testing** moves quality practices earlier in the SDLC (requirements reviews, static analysis, developer unit tests). **Shift-Right Testing** evaluates production behavior in real time via **Observability** (logs, metrics, traces), **Feature Flags** (gradual controlled rollouts), and **Canary Releases** (deploying to 5% of users to monitor error rates before 100% rollout). **AI-Assisted Testing** accelerates test generation and edge-case discovery while requiring human validation against hallucinated APIs.',
          hinglishExplain: 'Modern Quality Engineering ke 2 powerful movements hain:\n1. **Shift-Left**: Testing ko project ke start mein le aana (Code review, Static analysis, TDD, early test planning).\n2. **Shift-Right**: Production mein quality monitor karna (Feature Flags se naya feature 10% users ko dikhana, Canary deployments, Real-user error tracking with Sentry/Datadog).\n3. **AI-Assisted Testing**: AI ko edge cases aur mock data generator ki tarah use karna, with mandatory human verification.',
          funnyExample: {
            scenario: 'The Canary in the Coal Mine (Canary Release):\n- New Checkout v2.0 deployed to 5% of users in Mumbai 🐤\n- Real-time Observability: Error rate jumps from 0.1% to 8%!\n- Automated Circuit Breaker: Instantly rolls back to v1.0 in 3 seconds! 🛡️\n- 95% of users never experienced any disruption! ✨',
            punchline: 'Shift-Right testing minimizes production blast radius!'
          },
          visualDiagram: {
            title: 'Shift-Left vs Shift-Right Continuum',
            nodes: [
              'SHIFT-LEFT (Pre-Production Quality Prevention)',
              '├── Requirement Reviews -> Static Analysis -> Unit Tests -> CI/CD Quality Gates',
              'PRODUCTION DEPLOYMENT',
              'SHIFT-RIGHT (Post-Production Quality Verification)',
              '└── Feature Flags -> Canary Releases (5% -> 50% -> 100%) -> Sentry/Datadog Observability'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Responsible AI Testing Guidelines:',
            steps: [
              'DO USE AI FOR: Generating diverse test data strings, brainstorming boundary edge-cases, explaining complex test regex',
              'NEVER DO: Blindly commit AI-generated tests without running and verifying assertion logic',
              'BEWARE OF: AI hallucinating non-existent API endpoints or writing tautological assertions (`expect(true).toBe(true)`)'
            ]
          },
          code: `// ── FEATURE FLAG CONTROLLED TESTING SPECIFICATION (featureFlag.test.js) ──
import { describe, it, expect, vi } from 'vitest';

// Feature Under Test with Dynamic Feature Flag
export function renderCourseCard(course, featureFlags) {
  const hasInteractivePlayground = Boolean(featureFlags?.enableInteractivePlayground);

  return {
    title: course.title,
    badge: course.level,
    showPlaygroundButton: hasInteractivePlayground,
    ctaText: hasInteractivePlayground ? 'Open Interactive Playground' : 'Start Course'
  };
}

describe('Feature Flag Controlled Quality Testing', () => {
  const sampleCourse = { title: 'Playwright Mastery', level: 'Advanced' };

  it('should render standard CTA when feature flag is disabled (Control Variant)', () => {
    const flags = { enableInteractivePlayground: false };
    const ui = renderCourseCard(sampleCourse, flags);

    expect(ui.showPlaygroundButton).toBe(false);
    expect(ui.ctaText).toBe('Start Course');
  });

  it('should render playground CTA when feature flag is enabled (Experimental Variant)', () => {
    const flags = { enableInteractivePlayground: true };
    const ui = renderCourseCard(sampleCourse, flags);

    expect(ui.showPlaygroundButton).toBe(true);
    expect(ui.ctaText).toBe('Open Interactive Playground');
  });
});`,
          codeBreakdown: [
            { part: 'hasInteractivePlayground = Boolean(featureFlags?....)', label: 'Decoupled feature toggle logic allowing runtime conditional execution', color: '#3b82f6' },
            { part: 'expect(ui.showPlaygroundButton).toBe(false)', label: 'Validates baseline control experience when experimental flag is switched off', color: '#10b981' },
            { part: 'expect(ui.ctaText).toBe("Open Interactive Playground")', label: 'Validates new experimental user variant behavior when feature flag is active', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Feature flags ke dono ON aur OFF states ko test na karna',
            '❌ AI se generate kiye gaye test cases ko bina execute kiye pass maan lena'
          ],
          miniChallenge: 'Ek canary release testing strategy document karo jo 5% users se start ho kar automated rollback trigger kare agar errors > 1% hon.',
          quiz: {
            question: 'Software testing mein "Shift-Left" approach ka kya matlab hota hai?',
            options: [
              'Testing activities aur quality focus ko SDLC ke early stages (Requirements, Design, Coding) mein move karna',
              'Left side ke buttons test karna',
              'Production mein test karna',
              'Testing band kar dena'
            ],
            answer: 'Testing activities aur quality focus ko SDLC ke early stages (Requirements, Design, Coding) mein move karna',
            explanation: 'Shift-Left moves testing earlier into requirements, architecture, and code creation, preventing defects from reaching downstream stages where fixing costs 10x more.'
          },
          summary: [
            'Shift-Left early defect prevention par focus karta hai',
            'Shift-Right production observability, feature flags aur canary rollouts use karta hai',
            'AI tools test generation accelerate karte hain with mandatory human quality oversight'
          ],
          flashcard: {
            q: 'Canary Release deployment ka kya benefit hota hai?',
            a: 'Naya version sirf 5% real users ko release karke production metrics monitor kiye jaate hain; agar koi bug ho toh baki 95% users affect hue bina instant rollback ho jata hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: INDUSTRY CAPSTONE PROJECT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: Industry Capstone: Complete CodeMasti Quality Engineering Architecture',
      lessons: [
        {
          id: 'test-projects-capstone-codemasti-qa',
          title: 'Full Stack Capstone: Enterprise Quality Engineering Architecture for CodeMasti Platform',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'SDET Ready',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Test Case Design (BVA), Vitest Unit Tests, React Testing Library, Supertest API Suites, Playwright E2E Automation, Accessibility Scans, k6 Load Tests, aur GitHub Actions CI/CD Quality Gates — sab kuch combine karke CodeMasti ka Complete Enterprise QA Architecture banayenge! 🏆🚀😎"',
            hint: '💡 Masti Sir: "A complete Quality Engineering strategy covers: Unit (70%) + API Integration (20%) + E2E (10%) + CI/CD Quality Gates!"',
            success: '🎉 Masti Sir: "Incredible achievement! You have built a world-class production Quality Engineering Framework! 🌟"',
            mistake: '😅 Masti Sir: "Production deployment sign-off se pehle Final QA Test Report verify karein!"'
          },
          englishDef: 'The final Capstone Project synthesizes all modern testing methodologies into an enterprise-grade Quality Engineering architecture for the CodeMasti platform. The architecture encompasses **Test Strategy**, **Vitest Unit Suites** for business logic, **RTL Component Tests**, **Supertest REST API Suites**, **Playwright Page Object Model E2E Suites**, **axe-core Accessibility Audits**, **k6 Load Performance Baselines**, and a **GitHub Actions CI/CD Quality Gate Pipeline**.',
          hinglishExplain: 'Is Capstone Project mein hum CodeMasti platform ke liye ek complete enterprise Quality Engineering ecosystem build karenge. Isme Comprehensive Test Strategy, Unit & Component Suites, REST API Automation, Playwright E2E flows, a11y Scans, k6 Load Testing, aur GitHub Actions CI/CD Quality Gate Pipeline shamil hain.',
          funnyExample: {
            scenario: 'The Enterprise QA Fortress:\n- 1,000,000 Registered Active Learners 🧑‍🎓\n- 500+ Automated Vitest & Supertest Suites executing in < 15 seconds ⚡\n- Zero Broken Deployments via GitHub Actions Quality Gates 🛡️\n- 100% WCAG 2.1 AA Accessibility Compliant ♿\n- Certified Software Development Engineer in Test (SDET)! 🎓✨',
            punchline: 'From beginner to certified enterprise Software Quality Engineer & SDET!'
          },
          visualDiagram: {
            title: 'Complete CodeMasti Quality Engineering Architecture',
            nodes: [
              'CodeMasti Quality Engineering Architecture',
              '├── 1. Unit & Component Layer: Vitest + React Testing Library (AAA Pattern)',
              '├── 2. API & Contract Layer: Supertest + JSON Schema Validation + DB Rollback',
              '├── 3. E2E Automation Layer: Playwright + Page Object Model (Chromium/Firefox/WebKit)',
              '├── 4. Non-Functional Layer: axe-core (a11y) + k6 (p95/p99 Load Testing)',
              '└── 5. Continuous Delivery Layer: GitHub Actions CI/CD Quality Gate'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production QA Sign-Off Deliverables:',
            steps: [
              '1. Master Test Plan & Scope Definition Matrix',
              '2. Automated Regression Test Suite Execution Report (100% Pass)',
              '3. Code Coverage Report (>80% line/branch coverage on critical paths)',
              '4. Accessibility Compliance Certification (Zero critical WCAG violations)',
              '5. Performance Benchmark Sign-off (p95 latency < 250ms under peak load)'
            ]
          },
          code: `// ═══════════════════════════════════════════════════════
// CODEMASTI ENTERPRISE QA AUTOMATION FRAMEWORK
// ═══════════════════════════════════════════════════════

// 1. Playwright Comprehensive E2E Test Suite (e2e/codemasti-journey.spec.js)
import { test, expect } from '@playwright/test';

test.describe('CodeMasti Complete Learner Journey (E2E)', () => {
  test('Learner can explore course, open lesson, submit quiz and earn XP', async ({ page }) => {
    // A. Navigate to CodeMasti
    await page.goto('https://codemasti.com');

    // B. Search and Open Course
    const searchBox = page.getByPlaceholder('Search courses...');
    await searchBox.fill('Testing');
    await page.keyboard.press('Enter');

    await page.getByRole('heading', { name: /Testing & QA/i }).first().click();
    await expect(page).toHaveURL(/.*testing/);

    // C. Open First Lesson
    await page.getByText(/Testing Pyramid, Vitest/i).click();
    await expect(page.getByRole('heading', { name: /Testing Pyramid/i })).toBeVisible();

    // D. Solve Quiz Question
    const correctQuizOption = page.getByRole('button', { name: /Arrange, Act, Assert/i });
    await correctQuizOption.click();

    // E. Verify Instant XP Reward & Congratulatory Feedback
    await expect(page.getByText(/Masti Sir/i)).toBeVisible();
    await expect(page.getByText(/XP Earned/i)).toBeVisible();
  });
});`,
          codeBreakdown: [
            { part: 'test.describe("CodeMasti Complete Learner Journey", ...)', label: 'End-to-End user flow testing critical business path from landing to quiz reward', color: '#3b82f6' },
            { part: 'await correctQuizOption.click()', label: 'Simulates interactive learner quiz solving interaction with realistic browser event dispatch', color: '#10b981' },
            { part: 'await expect(page.getByText(/XP Earned/i)).toBeVisible()', label: 'Verifies successful gamification state transition and XP credit in UI', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Hardcoded selectors use karna instead of accessible user roles',
            '❌ CI pipeline mein automated E2E smoke tests integrate na karna'
          ],
          miniChallenge: 'Ek complete Test Strategy document likho CodeMasti platform ke next major release ke liye.',
          quiz: {
            question: 'Modern software engineering teams mein SDET (Software Development Engineer in Test) ka primary responsibility kya hota hai?',
            options: [
              'Automated testing frameworks, CI/CD quality pipelines, aur scalable test architecture engineer karna',
              'Sirf manual bug click karna',
              'Database tables delete karna',
              'HTML design karna'
            ],
            answer: 'Automated testing frameworks, CI/CD quality pipelines, aur scalable test architecture engineer karna',
            explanation: 'An SDET designs and builds scalable test automation frameworks, continuous testing pipelines, and developer tooling to guarantee software quality at scale.'
          },
          summary: [
            'Enterprise QA unit, API, E2E, accessibility aur performance testing combine karta hai',
            'Page Object Model E2E maintainability ensure karta hai',
            'CodeMasti Quality Engineering Architecture high-reliability scale ke liye certified hai'
          ],
          flashcard: {
            q: 'Production Release Sign-Off ke Top 3 pillars kya hain?',
            a: '1. All automated test suites passing (Unit/API/E2E), 2. Zero critical security/a11y defects, 3. Performance p95 latency thresholds verified under load.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 14: FAANG SDET INTERVIEW MASTERY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 14: FAANG SDET Interview Mastery & Quality System Design',
      lessons: [
        {
          id: 'test-interview-system-design-sdet',
          title: 'Top 35 FAANG SDET & QA Interview Questions & Scalable Quality System Design',
          emoji: '💼',
          xpReward: 50,
          badgeName: 'SDET Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Google, Microsoft, Amazon aur Meta ke SDET interviews ke classic tough questions — Flaky tests ko kaise debug karein, 60-minute test suite ko 5 minute mein kaise convert karein, Testing Trophy vs Pyramid trade-offs, aur Enterprise Quality System Design — sab yahan master karenge! 😎"',
            hint: '💡 Masti Sir: "Interview mein answer dete waqt Explain karo: Test Sharding + Parallel Workers + In-Memory Mocks + Dockerized Test Containers = 10x Fast CI feedback!"',
            success: '🥳 Masti Sir: "Congratulations! You have completed the Complete Modern Quality Engineering & Testing Masterclass! You are now a Certified SDET & Quality Architect! 🚀"',
            mistake: '😅 Masti Sir: "Interview mein \'100% test automation\' ka dawa mat karna — practical risk-based ROI explain karo!"'
          },
          englishDef: 'Comprehensive preparation for FAANG and Tier-1 SDET and Quality Engineering technical interviews: Debugging and eliminating Flaky Tests, reducing a 60-minute CI pipeline to 5 minutes via **Test Sharding & Parallelization**, Testing Trophy vs Testing Pyramid trade-offs, Contract Testing with Pact/OpenAPI, and architecting an **Enterprise CI/CD Multi-Tier Quality System**.',
          hinglishExplain: 'Top tech companies ke SDET aur Quality Engineering interviews mein aane wale classic questions aur system design scenarios ko master karein. Isme Flaky tests debugging, CI optimization via parallel test sharding, Testing Trophy vs Pyramid deep comparison, aur distributed microservices quality architecture shamil hai.',
          funnyExample: {
            scenario: 'The FAANG SDET System Design Interview:\n- Interviewer: "Our E2E test suite takes 65 minutes on CI, blocking deployments. How would you redesign it?" 🏢\n- Candidate: "1. Push unit-level logic down to Vitest (Runs in 15s)\n2. Mock slow third-party network APIs via MSW\n3. Parallelize Playwright across 8 CI matrix shards (`--shard=1/8`)\n4. Implement selective test execution on changed PR files only\nResult: 65 minutes reduced to 4.5 minutes!" 🎯\n- Interviewer: "Brilliant! Hired as Lead SDET!" 🚀',
            punchline: 'True quality engineering connects testing depth with developer velocity!'
          },
          visualDiagram: {
            title: 'High-Scale Parallel Test Sharding Architecture',
            nodes: [
              'Total 1,000 E2E Test Cases (Previously: 60 mins sequential)',
              '├── CI Runner Shard 1/4 (Executes Tests 1-250) -> Finishes in 7 mins',
              '├── CI Runner Shard 2/4 (Executes Tests 251-500) -> Finishes in 7 mins',
              '├── CI Runner Shard 3/4 (Executes Tests 501-750) -> Finishes in 7 mins',
              '└── CI Runner Shard 4/4 (Executes Tests 751-1000) -> Finishes in 7 mins',
              'Merged Test Report generated in under 8 minutes! ⚡'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Top 5 Interview Rules for SDET Candidates:',
            steps: [
              '1. Differentiate between Testing (defect detection) and QA (defect prevention)',
              '2. Emphasize testing user behavior rather than private implementation details',
              '3. Propose Test Sharding and parallel workers to optimize slow CI pipelines',
              '4. Explain that 100% code coverage does not guarantee quality without meaningful assertions',
              '5. Champion Shift-Left testing to reduce bug remediation costs by up to 10x'
            ]
          },
          code: `// ── PLAYWRIGHT CI TEST SHARDING CONFIGURATION (playwright.config.ts) ──
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true, // Run tests in files in parallel
  workers: process.env.CI ? 4 : undefined, // 4 Parallel worker processes on CI
  retries: process.env.CI ? 2 : 0, // Auto-retry flaky tests twice on CI
  reporter: [
    ['html', { open: 'never' }],
    ['github']
  ],
  use: {
    baseURL: process.env.BASE_URL || 'https://staging.codemasti.com',
    trace: 'on-first-retry', // Capture full debug trace only on retried failures
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 14'] } }
  ]
});`,
          codeBreakdown: [
            { part: 'fullyParallel: true, workers: 4', label: 'Enables multi-threaded concurrent test execution across independent worker threads', color: '#3b82f6' },
            { part: 'trace: "on-first-retry"', label: 'Intelligent trace recording optimizing CI disk space while capturing complete diagnostics on failures', color: '#10b981' },
            { part: "projects: [{ name: 'Chromium' }, { name: 'WebKit' }, ...]", label: 'Defines multi-browser and mobile device emulation testing matrix', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Interview mein sirf manual testing tools mention karna bina automation aur CI/CD integration ke',
            '❌ Flaky tests ko ignore karna instead of root-cause analysis propose karna'
          ],
          miniChallenge: 'Explain karo: "Ek 1-hour test suite ko 10 minutes mein kaise optimize karenge without sacrificing quality?"',
          quiz: {
            question: 'Playwright ya Vitest mein "Test Sharding" ka primary purpose kya hota hai?',
            options: [
              'Test suite ko multiple independent CI machines par baant kar parallel mein run karna taaki execution time drastically reduce ho jaye',
              'Tests delete karna',
              'Database drop karna',
              'Code encrypt karna'
            ],
            answer: 'Test suite ko multiple independent CI machines par baant kar parallel mein run karna taaki execution time drastically reduce ho jaye',
            explanation: 'Test Sharding splits a large test suite across multiple parallel CI runner machines (e.g. 4 shards run 25% of tests each simultaneously), reducing total execution time by up to 75%.'
          },
          summary: [
            'SDETs quality engineering, automation architecture aur developer velocity unite karte hain',
            'Test sharding aur parallelization slow CI pipelines ko 10x fast banate hain',
            'Modern quality engineering Shift-Left prevention se Shift-Right observability tak span karti hai'
          ],
          flashcard: {
            q: 'Testing Trophy vs Testing Pyramid mein kya difference hai?',
            a: 'Testing Pyramid Unit tests par sabse zyada focus karta hai; Testing Trophy (by Kent C. Dodds) Integration & Component tests par sabse zyada focus karta hai kyonki wo confidence aur cost ka best balance dete hain.'
          }
        }
      ]
    }
  ]
}

export default testingCourse
