import { sqlInterviewMasteryChapters } from './sqlinterview/mastery.js'

export const sqlinterviewCourse = {
  id: 'sqlinterview',
  title: 'SQL Interview',
  description: 'Top product company SQL interview questions master karo. Multi-table JOINs, subqueries, CTEs, Window Functions, Gaps & Islands, query optimization, aur mock interviews.',
  icon: '📊',
  category: 'interview',
  certificateName: 'SQL INTERVIEW',
  topicsCount: 180,
  practiceCount: 140,
  projectsCount: 15,
  hoursEstimate: 120,
  level: 'Beginner to Capstone',
  achievements: [
    { id: 'sql-beginner', title: 'SQL Beginner', icon: '🏆', desc: 'Solved your first SQL interview problem', xp: 50 },
    { id: 'query-builder', title: 'Query Builder', icon: '🏆', desc: 'Mastered multi-condition filtering & aggregations', xp: 75 },
    { id: 'join-master', title: 'JOIN Master', icon: '🏆', desc: 'Solved complex multi-table and anti-join challenges', xp: 150 },
    { id: 'subquery-solver', title: 'Subquery Solver', icon: '🏆', desc: 'Mastered correlated subqueries and EXISTS logic', xp: 150 },
    { id: 'window-wizard', title: 'Window Wizard', icon: '🏆', desc: 'Solved Top-N and DENSE_RANK analytical problems', xp: 200 },
    { id: 'gaps-islands-expert', title: 'Gaps & Islands Expert', icon: '🏆', desc: 'Conquered consecutive streak and sequence grouping', xp: 300 },
    { id: 'query-optimizer', title: 'Query Optimizer', icon: '🏆', desc: 'Identified non-sargable expressions and optimized EXPLAIN costs', xp: 300 },
    { id: 'database-architect', title: 'Database Architect', icon: '🏆', desc: 'Mastered ACID transactions and isolation anomalies', xp: 250 },
    { id: 'business-analyst', title: 'Business Analyst', icon: '🏆', desc: 'Engineered cohort retention and revenue funnels', xp: 350 },
    { id: 'mock-interview-ace', title: 'Mock Interview Ace', icon: '🏆', desc: 'Passed dynamic mock interview with Masti Sir', xp: 400 },
    { id: 'sql-capstone-master', title: 'SQL Capstone Master', icon: '🏆', desc: 'Completed the full Enterprise E-Commerce Audit', xp: 1000 }
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: SQL JOINS & PATTERNS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Multi-Table JOINs & Aggregations',
      lessons: [
        {
          id: 'sql-interview-joins',
          title: 'Advanced JOINs & Multi-Table Queries',
          emoji: '🔗',
          xpReward: 35,
          badgeName: 'SQL Query Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "SQL interview mein 80% questions JOINs aur Window functions se aate hain! Chalo master karte hain 😎"',
            hint: '🤦 Masti Sir: "Columns ambiguous na hon isliye hamesha table alias use karo: `e.salary`, `d.dept_name`!"',
            success: '🥳 Masti Sir: "Zabardast! Complex JOIN query optimized tarike se execute ho gayi 🔥"',
            mistake: '😅 Masti Sir: "`HAVING` aur `WHERE` ko mix mat karna! WHERE row filter karta hai, HAVING aggregated groups filter karta hai 😂"'
          },
          englishDef: 'SQL interview questions frequently test multi-table data extraction using INNER, LEFT, FULL, and SELF JOINs combined with aggregate grouping (GROUP BY, HAVING) and subqueries.',
          hinglishExplain: 'Interviews mein aam taur par 2-3 tables ke beech correlation poocha jata hai — jaise "Aise customers nikaalo jinhone pichle 30 din mein koi order nahi kiya (LEFT JOIN WHERE order.id IS NULL)" ya "Department-wise highest salary earners".',
          funnyExample: {
            scenario: 'Unmatched Customers (LEFT JOIN Trick):\n- Customers Table (All customers 👥)\n- Orders Table (Orders placed 📦)\n- Query: `customers LEFT JOIN orders ON ... WHERE orders.id IS NULL`\n(Wo log jo dukaan mein aaye par bina kuch khareede nikal gaye! 🏃)',
            punchline: 'LEFT JOIN + IS NULL = Missing relationship detector!'
          },
          visualDiagram: {
            title: 'Finding Inactive Customers Query',
            nodes: ['All Customers (Left Table)', 'LEFT JOIN Orders (Right Table)', 'Filter: WHERE orders.id IS NULL', 'Result: Inactive customer list'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Database Hash Join vs Nested Loop:',
            steps: ['Small table scanned into memory hash table', 'Large table probed sequentially against hash bucket', 'Matching rows streamed directly to client without disk sort']
          },
          code: `-- 1. Find Inactive Users (Never placed an order)
SELECT 
  u.id, 
  u.name, 
  u.email
FROM users u
LEFT JOIN orders o 
  ON u.id = o.user_id
WHERE o.id IS NULL;

-- 2. Department Average Salary > 50,000 (GROUP BY + HAVING)
SELECT 
  d.department_name,
  COUNT(e.id) AS total_employees,
  AVG(e.salary) AS avg_salary
FROM departments d
INNER JOIN employees e 
  ON d.id = e.department_id
GROUP BY d.department_name
HAVING AVG(e.salary) > 50000;`,
          codeBreakdown: [
            { part: 'WHERE o.id IS NULL', label: 'Classic anti-join pattern finding records in Left table with no match in Right table', color: '#3b82f6' },
            { part: 'GROUP BY d.department_name', label: 'Groups records by department name before calculating aggregates', color: '#10b981' },
            { part: 'HAVING AVG(e.salary) > 50000', label: 'Filters aggregated groups (unlike WHERE which filters individual rows)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Aggregated functions (`COUNT`, `AVG`) ko `WHERE` clause mein use karne ki koshish karna (use `HAVING` instead)',
            '❌ Missing table aliases leading to column ambiguity'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise products nikaale jo kabhi sell nahi hue.',
          quiz: {
            question: 'SQL mein aggregate functions ke results par filter lagane ke liye kaunsa clause use hota hai?',
            options: ['WHERE', 'HAVING', 'FILTER BY', 'GROUP FILTER'],
            answer: 'HAVING',
            explanation: 'WHERE rows ko group hone se pehle filter karta hai; HAVING groups aur aggregate calculations (SUM, AVG) ko filter karta hai.'
          },
          summary: ['LEFT JOIN + IS NULL anti-join pattern missing data detect karta hai', 'GROUP BY aur HAVING categorical summary banate hain', 'Self JOINs hierarchical employee-manager tables ke liye use hote hain'],
          flashcard: { q: '`WHERE` aur `HAVING` mein kya difference hai?', a: '`WHERE` individual rows filter karta hai GROUP BY se pehle; `HAVING` aggregated group values filter karta hai GROUP BY ke baad.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: TOP INTERVIEW QUESTIONS (NTH SALARY & RANK)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: N-th Highest Salary & Window Functions',
      lessons: [
        {
          id: 'sql-interview-nth-salary',
          title: 'N-th Highest Salary & Consecutive Active Users',
          emoji: '🏆',
          xpReward: 40,
          badgeName: 'SQL Interview Ace',
          englishDef: 'Calculating the N-th highest value (e.g. 2nd or 3rd highest salary) and finding consecutive event logs are benchmark SQL interview questions typically solved via DENSE_RANK(), CTEs, or LIMIT/OFFSET.',
          hinglishExplain: 'Interview ka sabse popular sawaal: "Find the 2nd Highest Salary from Employee table". Agar duplicate salaries hain toh LIMIT OFFSET fail ho sakta hai, isliye `DENSE_RANK()` window function ya subquery sabse robust solution mana jata hai.',
          funnyExample: {
            scenario: 'Gold, Silver, Bronze Medalist:\n- 1st Salary: 1,00,000 (Gold 🥇)\n- 2nd Salary: 90,000 (Silver 🥈)\n- 2nd Salary: 90,000 (Silver 🥈 - Tie!)\n- 3rd Salary: 80,000 (Bronze 🥉)\n\n`DENSE_RANK()` tie hone par bhi 3rd salary ko rank #3 hi dega!',
            punchline: 'DENSE_RANK() = The perfect salary ranking tool!'
          },
          visualDiagram: {
            title: 'N-th Highest Salary via CTE',
            nodes: ['Employee Table', 'CTE: DENSE_RANK() OVER (ORDER BY salary DESC)', 'Rank 1 = 100k, Rank 2 = 90k', 'Filter: WHERE rank = 2'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Window Ranking Execution:',
            steps: ['Table salaries sorted in memory buffer', 'Assigns sequential dense rank to unique values', 'Filters rows matching rank N']
          },
          code: `-- Solution 1: Using Common Table Expression (CTE) & DENSE_RANK (Most Preferred in Interviews)
WITH RankedSalaries AS (
  SELECT 
    id,
    name,
    salary,
    DENSE_RANK() OVER (ORDER BY salary DESC) as salary_rank
  FROM employees
)
SELECT salary 
FROM RankedSalaries 
WHERE salary_rank = 2
LIMIT 1;

-- Solution 2: Classic Subquery (Works across all databases)
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);`,
          codeBreakdown: [
            { part: 'WITH RankedSalaries AS (...)', label: 'Common Table Expression (CTE) creating clean readable temporary result set', color: '#3b82f6' },
            { part: 'DENSE_RANK() OVER (ORDER BY salary DESC)', label: 'Handles duplicate salaries gracefully without skipping rank numbers', color: '#10b981' },
            { part: 'WHERE salary_rank = 2', label: 'Extracts exactly the 2nd highest tier', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `LIMIT 1 OFFSET 1` use karna bina duplicates consider kiye (agar do logon ki same highest salary hui toh ye galat answer dega)',
            '❌ Window function ko WHERE clause ke andar bina CTE ya subquery ke use karna'
          ],
          miniChallenge: 'Ek query likho jo 3rd highest salary calculate kare CTE use karke.',
          quiz: {
            question: 'Agar do employees ki salary identical 1,00,000 (highest) ho, toh `DENSE_RANK()` unke agle employee (80,000) ko kaunsa rank assign karega?',
            options: ['Rank 2', 'Rank 3', 'Rank 4', 'Rank 1'],
            answer: 'Rank 2',
            explanation: 'DENSE_RANK() duplicates ko same rank deta hai aur agle value ko bina gap ke consecutive rank 2 deta hai.'
          },
          summary: ['DENSE_RANK() N-th highest salary ka standard production solution hai', 'CTEs (`WITH ... AS`) complex SQL queries ko structured aur readable banate hain', 'Indexing `salary` column window sorting ko O(N log N) se O(1) B-tree lookup bana deta hai'],
          flashcard: { q: 'Subquery aur CTE mein kya difference hai?', a: 'Subquery inline nested query hoti hai; CTE (`WITH ... AS`) named temporary result set hoti hai jo query ke top par define hoti hai aur multiple times reuse ki ja sakti hai.' }
        }
      ]
    },
    ...sqlInterviewMasteryChapters
  ]
}

export default sqlinterviewCourse
