// SQL Interview Data — Complete Question Bank, Patterns, Cheat Sheets, and Mock Simulator
// All original content — CodeMasti exclusive

// ─── 4-Level Hint Factory ───────────────────────────────────────────────────

const makeHints = (h1, h2, h3, h4) => [
  { level: 1, label: 'Mental Model & Output Grain', text: h1 },
  { level: 2, label: 'SQL Concept to Apply', text: h2 },
  { level: 3, label: 'Query Structure & Skeleton', text: h3 },
  { level: 4, label: 'Full Reference Solution', text: h4 }
]

// ─── SQL INTERVIEW QUESTION BANK ─────────────────────────────────────────────

export const SQL_QUESTIONS_BANK = [
  // 1. FUNDAMENTALS / AGGREGATIONS
  {
    id: 'sql-q-where-vs-having',
    title: 'Department Average Salary Above 60k',
    difficulty: 'Easy',
    level: 3,
    category: 'Aggregation',
    xpReward: 75,
    scenario: 'Finance needs a report of all departments whose active employees earn an average annual salary greater than $60,000, along with the head count in each department.',
    schema: {
      tables: [
        {
          name: 'employees',
          columns: ['id (INT)', 'name (VARCHAR)', 'department_id (INT)', 'salary (INT)', 'status (VARCHAR)']
        },
        {
          name: 'departments',
          columns: ['id (INT)', 'dept_name (VARCHAR)']
        }
      ]
    },
    sampleData: {
      employees: [
        { id: 1, name: 'Aarav', department_id: 101, salary: 75000, status: 'active' },
        { id: 2, name: 'Diya', department_id: 101, salary: 65000, status: 'active' },
        { id: 3, name: 'Kabir', department_id: 102, salary: 45000, status: 'active' },
        { id: 4, name: 'Isha', department_id: 102, salary: 50000, status: 'active' },
        { id: 5, name: 'Rohan', department_id: 103, salary: 85000, status: 'active' },
        { id: 6, name: 'Pooja', department_id: 103, salary: 90000, status: 'inactive' }
      ],
      departments: [
        { id: 101, dept_name: 'Engineering' },
        { id: 102, dept_name: 'Support' },
        { id: 103, dept_name: 'Product' }
      ]
    },
    expectedOutput: [
      { dept_name: 'Engineering', total_employees: 2, avg_salary: 70000 },
      { dept_name: 'Product', total_employees: 1, avg_salary: 85000 }
    ],
    starterSQL: '-- Write your query below\nSELECT \n  d.dept_name,\n  COUNT(*) AS total_employees,\n  AVG(e.salary) AS avg_salary\nFROM departments d\nJOIN employees e ON d.id = e.department_id\nWHERE e.status = \'active\'\n-- Complete the GROUP BY and HAVING clauses\n',
    solutionSQL: `SELECT 
  d.dept_name,
  COUNT(e.id) AS total_employees,
  AVG(e.salary) AS avg_salary
FROM departments d
INNER JOIN employees e 
  ON d.id = e.department_id
WHERE e.status = 'active'
GROUP BY d.id, d.dept_name
HAVING AVG(e.salary) > 60000
ORDER BY avg_salary DESC;`,
    explanation: '1. `WHERE e.status = \'active\'` filters out inactive employees BEFORE grouping.\n2. `GROUP BY d.id, d.dept_name` aggregates remaining rows per department.\n3. `HAVING AVG(e.salary) > 60000` evaluates the computed average and discards departments below $60k.\n4. `COUNT(e.id)` accurately counts active employees in that group.',
    alternativeSolutions: [
      {
        title: 'CTE Formulation',
        sql: `WITH active_dept_stats AS (
  SELECT department_id, COUNT(*) AS total_employees, AVG(salary) AS avg_salary
  FROM employees
  WHERE status = 'active'
  GROUP BY department_id
  HAVING AVG(salary) > 60000
)
SELECT d.dept_name, s.total_employees, s.avg_salary
FROM departments d
JOIN active_dept_stats s ON d.id = s.department_id;`
      }
    ],
    commonMistakes: [
      'Putting `WHERE AVG(salary) > 60000` — aggregate functions cannot be placed in the WHERE clause.',
      'Filtering `status = \'active\'` inside HAVING instead of WHERE — this causes inactive employees to be processed in the aggregate calculations.'
    ],
    performanceNotes: 'Create a composite index on `employees(status, department_id, salary)`. The database can filter active status and group departments using an index scan without touching table heap pages.',
    interviewFollowUps: [
      'What happens if a department has no active employees?',
      'Why must non-aggregated SELECT columns appear in the GROUP BY clause in standard SQL?'
    ],
    hints: makeHints(
      'The result must have one row per qualifying department. Filter inactive employees first, then group.',
      'Remember: WHERE filters rows before grouping; HAVING filters computed groups after aggregation.',
      'Structure: `SELECT ... FROM departments d JOIN employees e ... WHERE status = \'active\' GROUP BY d.dept_name HAVING AVG(e.salary) > 60000`.',
      'Use `HAVING AVG(e.salary) > 60000` and order by `avg_salary DESC`.'
    )
  },

  // 2. JOINS / ANTI-JOIN
  {
    id: 'sql-q-inactive-customers-join',
    title: 'Customers with No Orders (Anti-Join Pattern)',
    difficulty: 'Easy to Medium',
    level: 4,
    category: 'Joins',
    xpReward: 100,
    scenario: 'Marketing wants to send a re-engagement discount code to all registered users who have NEVER placed any order in the system.',
    schema: {
      tables: [
        {
          name: 'users',
          columns: ['id (INT)', 'name (VARCHAR)', 'email (VARCHAR)', 'created_at (DATE)']
        },
        {
          name: 'orders',
          columns: ['id (INT)', 'user_id (INT)', 'total_amount (INT)', 'order_date (DATE)']
        }
      ]
    },
    sampleData: {
      users: [
        { id: 1, name: 'Ananya', email: 'ananya@example.com', created_at: '2025-01-10' },
        { id: 2, name: 'Vikram', email: 'vikram@example.com', created_at: '2025-01-12' },
        { id: 3, name: 'Sanya', email: 'sanya@example.com', created_at: '2025-01-15' },
        { id: 4, name: 'Dev', email: 'dev@example.com', created_at: '2025-01-20' }
      ],
      orders: [
        { id: 101, user_id: 1, total_amount: 1500, order_date: '2025-01-11' },
        { id: 102, user_id: 1, total_amount: 2300, order_date: '2025-01-25' },
        { id: 103, user_id: 3, total_amount: 800, order_date: '2025-01-18' }
      ]
    },
    expectedOutput: [
      { id: 2, name: 'Vikram', email: 'vikram@example.com' },
      { id: 4, name: 'Dev', email: 'dev@example.com' }
    ],
    starterSQL: '-- Find all users who never placed an order\nSELECT u.id, u.name, u.email\nFROM users u\n-- Complete with LEFT JOIN or NOT EXISTS\n',
    solutionSQL: `SELECT 
  u.id, 
  u.name, 
  u.email
FROM users u
LEFT JOIN orders o 
  ON u.id = o.user_id
WHERE o.id IS NULL
ORDER BY u.id ASC;`,
    explanation: '1. `LEFT JOIN orders o` preserves all rows from `users`, matching orders where `user_id` matches.\n2. When a user has placed zero orders, the joined `o.id` column evaluates to `NULL`.\n3. `WHERE o.id IS NULL` filters specifically for those un-matched customers. This is the classic SQL Anti-Join pattern.',
    alternativeSolutions: [
      {
        title: 'NOT EXISTS (Often Faster on Large Tables)',
        sql: `SELECT u.id, u.name, u.email
FROM users u
WHERE NOT EXISTS (
  SELECT 1 
  FROM orders o 
  WHERE o.user_id = u.id
)
ORDER BY u.id ASC;`
      },
      {
        title: 'NOT IN with NULL Safety',
        sql: `SELECT id, name, email
FROM users
WHERE id NOT IN (
  SELECT DISTINCT user_id 
  FROM orders 
  WHERE user_id IS NOT NULL
)
ORDER BY id ASC;`
      }
    ],
    commonMistakes: [
      'Using `WHERE id NOT IN (SELECT user_id FROM orders)` without ensuring `user_id IS NOT NULL`. If `orders.user_id` contains even a single NULL, `NOT IN` returns zero rows!',
      'Using INNER JOIN instead of LEFT JOIN — INNER JOIN only returns customers who DO have orders.'
    ],
    performanceNotes: 'On PostgreSQL and MySQL 8+, `NOT EXISTS` and `LEFT JOIN ... WHERE IS NULL` produce equivalent optimized anti-join query plans when `orders(user_id)` is indexed.',
    interviewFollowUps: [
      'Why does `NOT IN` return an empty set if the subquery returns a single NULL value?',
      'How would you find customers who have not ordered in the last 60 days (dormant customers)?'
    ],
    hints: makeHints(
      'You want rows from the Left table that have no matching entry in the Right table.',
      'A LEFT JOIN generates NULLs in Right table columns when no relationship exists.',
      'Use `LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL`.',
      'Alternatively, `WHERE NOT EXISTS (SELECT 1 FROM orders WHERE user_id = u.id)` is very clear and avoids NULL traps.'
    )
  },

  // 3. SECOND / NTH HIGHEST SALARY
  {
    id: 'sql-q-second-highest-salary',
    title: 'Find the Second Highest Salary (Handling Duplicates & NULL)',
    difficulty: 'Medium',
    level: 7,
    category: 'Window Functions',
    xpReward: 150,
    scenario: 'HR asks for the 2nd highest unique salary paid across the company. If all employees earn the exact same salary or there is only 1 employee, return NULL.',
    schema: {
      tables: [
        {
          name: 'employees',
          columns: ['id (INT)', 'name (VARCHAR)', 'salary (INT)', 'dept_id (INT)']
        }
      ]
    },
    sampleData: {
      employees: [
        { id: 1, name: 'Alice', salary: 90000, dept_id: 1 },
        { id: 2, name: 'Bob', salary: 90000, dept_id: 1 },
        { id: 3, name: 'Charlie', salary: 80000, dept_id: 2 },
        { id: 4, name: 'David', salary: 70000, dept_id: 2 },
        { id: 5, name: 'Eva', salary: 60000, dept_id: 3 }
      ]
    },
    expectedOutput: [
      { second_highest_salary: 80000 }
    ],
    starterSQL: '-- Write query to find the 2nd highest unique salary\nSELECT \n  -- Return NULL if no 2nd highest exists\nFROM employees;\n',
    solutionSQL: `SELECT (
  SELECT DISTINCT salary 
  FROM employees 
  ORDER BY salary DESC 
  LIMIT 1 OFFSET 1
) AS second_highest_salary;`,
    explanation: '1. `SELECT DISTINCT salary ... ORDER BY salary DESC LIMIT 1 OFFSET 1` skips the top distinct salary and picks the 2nd.\n2. Wrapping the query inside a scalar subquery `SELECT (...) AS second_highest_salary` guarantees that if no 2nd row exists (e.g. only 1 employee or all salaries tied), SQL automatically returns `NULL` rather than an empty result set.',
    alternativeSolutions: [
      {
        title: 'Using DENSE_RANK() Window Function',
        sql: `WITH ranked_salaries AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
)
SELECT MAX(salary) AS second_highest_salary
FROM ranked_salaries
WHERE rnk = 2;`
      },
      {
        title: 'Subquery with MAX (< MAX)',
        sql: `SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);`
      }
    ],
    commonMistakes: [
      'Using `RANK()` instead of `DENSE_RANK()`. If two employees tie for 1st (e.g. 90k, 90k), `RANK()` assigns 1, 1, 3 — skipping rank 2 completely!',
      'Using `ORDER BY salary DESC LIMIT 1 OFFSET 1` without `DISTINCT`. With tied salaries (90k, 90k, 80k), it would return 90k as the 2nd row.',
      'Returning an empty result instead of `NULL` when there is only one unique salary.'
    ],
    performanceNotes: 'If `salary` has an index (`CREATE INDEX idx_emp_salary ON employees(salary DESC)`), `LIMIT 1 OFFSET 1` executes in O(1) time without scanning table rows.',
    interviewFollowUps: [
      'How would you find the N-th highest salary dynamically?',
      'How would you find the 2nd highest salary PER department in a single query?'
    ],
    hints: makeHints(
      'Handle duplicate top salaries (two employees earning 90k means 80k is the 2nd highest, not 90k).',
      'DENSE_RANK() handles ties cleanly without skipping numbers (1, 1, 2).',
      'Wrap the subquery in `SELECT (...) AS second_highest_salary` so empty rows become `NULL`.',
      'Formula: `SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);`.'
    )
  },

  // 4. WINDOW FUNCTIONS / TOP N PER GROUP
  {
    id: 'sql-q-top-3-department-earners',
    title: 'Top 3 Highest Paid Employees per Department',
    difficulty: 'Hard',
    level: 9,
    category: 'Window Functions',
    xpReward: 200,
    scenario: 'Management wants to recognize the top 3 highest earners in each department. If multiple employees tie for a rank, include them without skipping ranks.',
    schema: {
      tables: [
        {
          name: 'employees',
          columns: ['id (INT)', 'name (VARCHAR)', 'department_id (INT)', 'salary (INT)']
        },
        {
          name: 'departments',
          columns: ['id (INT)', 'dept_name (VARCHAR)']
        }
      ]
    },
    sampleData: {
      employees: [
        { id: 1, name: 'Aarav', department_id: 101, salary: 95000 },
        { id: 2, name: 'Diya', department_id: 101, salary: 90000 },
        { id: 3, name: 'Kabir', department_id: 101, salary: 90000 },
        { id: 4, name: 'Isha', department_id: 101, salary: 80000 },
        { id: 5, name: 'Rohan', department_id: 102, salary: 70000 },
        { id: 6, name: 'Pooja', department_id: 102, salary: 68000 },
        { id: 7, name: 'Amit', department_id: 102, salary: 65000 },
        { id: 8, name: 'Tara', department_id: 102, salary: 60000 }
      ],
      departments: [
        { id: 101, dept_name: 'Engineering' },
        { id: 102, dept_name: 'Marketing' }
      ]
    },
    expectedOutput: [
      { dept_name: 'Engineering', name: 'Aarav', salary: 95000, salary_rank: 1 },
      { dept_name: 'Engineering', name: 'Diya', salary: 90000, salary_rank: 2 },
      { dept_name: 'Engineering', name: 'Kabir', salary: 90000, salary_rank: 2 },
      { dept_name: 'Engineering', name: 'Isha', salary: 80000, salary_rank: 3 },
      { dept_name: 'Marketing', name: 'Rohan', salary: 70000, salary_rank: 1 },
      { dept_name: 'Marketing', name: 'Pooja', salary: 68000, salary_rank: 2 },
      { dept_name: 'Marketing', name: 'Amit', salary: 65000, salary_rank: 3 }
    ],
    starterSQL: '-- Write a query using DENSE_RANK() and CTE\nWITH ranked_employees AS (\n  SELECT \n    e.name,\n    e.salary,\n    e.department_id,\n    -- Complete the window function\n  FROM employees e\n)\nSELECT ...\n',
    solutionSQL: `WITH ranked_employees AS (
  SELECT 
    e.name,
    e.salary,
    d.dept_name,
    DENSE_RANK() OVER (
      PARTITION BY e.department_id 
      ORDER BY e.salary DESC
    ) AS salary_rank
  FROM employees e
  JOIN departments d ON e.department_id = d.id
)
SELECT 
  dept_name,
  name,
  salary,
  salary_rank
FROM ranked_employees
WHERE salary_rank <= 3
ORDER BY dept_name ASC, salary_rank ASC, salary DESC;`,
    explanation: '1. `DENSE_RANK() OVER (PARTITION BY e.department_id ORDER BY e.salary DESC)` assigns contiguous ranks per department.\n2. In Engineering, Diya and Kabir tie at 90k (rank 2). The next salary (80k) gets rank 3 because `DENSE_RANK` does not skip numbers.\n3. Window functions cannot be filtered in `WHERE` directly because `WHERE` executes before window functions; wrapping in a CTE allows `WHERE salary_rank <= 3`.',
    alternativeSolutions: [
      {
        title: 'Correlated Subquery Approach',
        sql: `SELECT d.dept_name, e1.name, e1.salary
FROM employees e1
JOIN departments d ON e1.department_id = d.id
WHERE (
  SELECT COUNT(DISTINCT e2.salary)
  FROM employees e2
  WHERE e2.department_id = e1.department_id AND e2.salary >= e1.salary
) <= 3
ORDER BY d.dept_name, e1.salary DESC;`
      }
    ],
    commonMistakes: [
      'Attempting `WHERE DENSE_RANK() OVER (...) <= 3` in the same SELECT — window functions are evaluated AFTER WHERE.',
      'Using `ROW_NUMBER()` which arbitrarily picks one employee when there is a tie.'
    ],
    performanceNotes: 'Create a composite index on `employees(department_id, salary DESC)`. The database engine scans the index in partition order without a separate sort pass.',
    interviewFollowUps: [
      'What is the difference between ROW_NUMBER, RANK, and DENSE_RANK when salaries are [100k, 100k, 90k, 80k]?',
      'How would you write this if your database engine did not support window functions?'
    ],
    hints: makeHints(
      'You need ranking within each department partition separately.',
      'Use `PARTITION BY department_id` inside `OVER(...)`.',
      'Wrap the window query inside a `WITH cte AS (...)` so you can filter `WHERE salary_rank <= 3`.',
      '`DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC)`.'
    )
  },

  // 5. GAPS & ISLANDS / CONSECUTIVE EVENTS
  {
    id: 'sql-q-consecutive-login-streak',
    title: 'Active Users with 3+ Consecutive Days Login Streak',
    difficulty: 'Expert',
    level: 10,
    category: 'Gaps & Islands',
    xpReward: 300,
    scenario: 'Gamification engine needs to reward users who logged into the application for at least 3 consecutive calendar days. A user may log in multiple times in a single day.',
    schema: {
      tables: [
        {
          name: 'logins',
          columns: ['id (INT)', 'user_id (INT)', 'login_date (DATE)']
        },
        {
          name: 'users',
          columns: ['id (INT)', 'username (VARCHAR)']
        }
      ]
    },
    sampleData: {
      logins: [
        { id: 1, user_id: 1, login_date: '2025-01-01' },
        { id: 2, user_id: 1, login_date: '2025-01-02' },
        { id: 3, user_id: 1, login_date: '2025-01-02' }, // Duplicate login on same day
        { id: 4, user_id: 1, login_date: '2025-01-03' },
        { id: 5, user_id: 2, login_date: '2025-01-01' },
        { id: 6, user_id: 2, login_date: '2025-01-03' }, // Gap on Jan 2
        { id: 7, user_id: 2, login_date: '2025-01-04' },
        { id: 8, user_id: 3, login_date: '2025-01-10' },
        { id: 9, user_id: 3, login_date: '2025-01-11' },
        { id: 10, user_id: 3, login_date: '2025-01-12' },
        { id: 11, user_id: 3, login_date: '2025-01-13' }
      ],
      users: [
        { id: 1, username: 'player_one' },
        { id: 2, username: 'casual_gamer' },
        { id: 3, username: 'hardcore_dev' }
      ]
    },
    expectedOutput: [
      { user_id: 1, username: 'player_one', streak_days: 3 },
      { user_id: 3, username: 'hardcore_dev', streak_days: 4 }
    ],
    starterSQL: '-- Step 1: Deduplicate user_id + login_date\n-- Step 2: Calculate date difference groups\n-- Step 3: Count streak size >= 3\n',
    solutionSQL: `WITH distinct_logins AS (
  SELECT DISTINCT user_id, login_date
  FROM logins
),
grouped_streaks AS (
  SELECT 
    user_id,
    login_date,
    login_date - (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date)) * INTERVAL '1 day' AS island_id
  FROM distinct_logins
),
streak_counts AS (
  SELECT 
    user_id,
    island_id,
    COUNT(*) AS streak_days
  FROM grouped_streaks
  GROUP BY user_id, island_id
  HAVING COUNT(*) >= 3
)
SELECT DISTINCT
  s.user_id,
  u.username,
  s.streak_days
FROM streak_counts s
JOIN users u ON s.user_id = u.id
ORDER BY s.streak_days DESC;`,
    explanation: '1. Deduplication: `SELECT DISTINCT user_id, login_date` ensures multiple logins on the same day count once.\n2. Date Math Magic: If dates are consecutive (Jan 1, Jan 2, Jan 3) and row numbers are consecutive (1, 2, 3), subtracting `row_number * 1 day` produces a CONSTANT anchor date (`island_id`).\n3. Grouping: `GROUP BY user_id, island_id` aggregates uninterrupted login runs. `HAVING COUNT(*) >= 3` isolates streaks of 3+ days.',
    alternativeSolutions: [
      {
        title: 'Using LAG() and LEAD() for Exactly 3 Consecutive Days',
        sql: `WITH distinct_logins AS (
  SELECT DISTINCT user_id, login_date FROM logins
),
adjacent_checks AS (
  SELECT 
    user_id,
    login_date,
    LAG(login_date, 1) OVER (PARTITION BY user_id ORDER BY login_date) AS prev_date,
    LEAD(login_date, 1) OVER (PARTITION BY user_id ORDER BY login_date) AS next_date
  FROM distinct_logins
)
SELECT DISTINCT a.user_id, u.username
FROM adjacent_checks a
JOIN users u ON a.user_id = u.id
WHERE a.login_date = a.prev_date + INTERVAL '1 day' 
  AND a.login_date = a.next_date - INTERVAL '1 day';`
      }
    ],
    commonMistakes: [
      'Forgetting to deduplicate logins on the same day before computing streaks.',
      'Assuming consecutive ID values imply consecutive dates (there may be gaps or multiple days per ID).'
    ],
    performanceNotes: 'For large telemetry tables with hundreds of millions of events, index on `logins(user_id, login_date)`.',
    interviewFollowUps: [
      'How would you find each user\'s longest active streak ever?',
      'How does this Gaps & Islands pattern apply to detecting server downtime periods?'
    ],
    hints: makeHints(
      'First deduplicate so you have at most one row per user per calendar day.',
      'Subtracting an incremental integer `ROW_NUMBER()` from consecutive dates produces a static base date.',
      'Group by `(user_id, date - row_number)` and count items per group.',
      'Filter `HAVING COUNT(*) >= 3` to identify qualifying streaks.'
    )
  }
]

// ─── 15 REUSABLE SQL INTERVIEW PATTERNS ───────────────────────────────────────

export const SQL_PATTERNS = [
  {
    id: 'pat-second-highest',
    title: '1. N-th Highest / Lowest Value',
    whenToUse: 'When asked for 2nd highest salary, 3rd latest transaction, or Nth percentile record.',
    template: `SELECT DISTINCT column_name 
FROM table_name 
ORDER BY column_name DESC 
LIMIT 1 OFFSET (N - 1);`,
    alternativeTemplate: `WITH ranked AS (
  SELECT column_name, DENSE_RANK() OVER (ORDER BY column_name DESC) AS rnk
  FROM table_name
)
SELECT column_name FROM ranked WHERE rnk = N;`,
    bestPractice: 'Always use DENSE_RANK() or DISTINCT to prevent duplicate ties from stealing the rank.'
  },
  {
    id: 'pat-top-n-per-group',
    title: '2. Top N Records per Group',
    whenToUse: 'Top 3 products per category, best performing salesperson in each region.',
    template: `WITH ranked AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY category_id ORDER BY score DESC) as rn
  FROM products
)
SELECT * FROM ranked WHERE rn <= N;`,
    bestPractice: 'Use ROW_NUMBER() for strict N rows, or DENSE_RANK() to include tied runners.'
  },
  {
    id: 'pat-anti-join',
    title: '3. Anti-Join (Missing Relations)',
    whenToUse: 'Customers with zero orders, products never purchased, users with no activity.',
    template: `SELECT a.*
FROM table_a a
LEFT JOIN table_b b ON a.id = b.a_id
WHERE b.id IS NULL;`,
    alternativeTemplate: `SELECT * FROM table_a a WHERE NOT EXISTS (SELECT 1 FROM table_b b WHERE b.a_id = a.id);`,
    bestPractice: 'Prefer NOT EXISTS or LEFT JOIN ... IS NULL. Avoid NOT IN when nullable foreign keys exist.'
  },
  {
    id: 'pat-running-total',
    title: '4. Running Total / Cumulative Sum',
    whenToUse: 'Tracking cumulative company revenue, inventory drawdown, or user account balances.',
    template: `SELECT 
  txn_date, 
  amount,
  SUM(amount) OVER (PARTITION BY account_id ORDER BY txn_date, id) AS running_balance
FROM transactions;`,
    bestPractice: 'Always add secondary sort column (like id) to ORDER BY for deterministic tie-breaking.'
  },
  {
    id: 'pat-moving-average',
    title: '5. Moving Average (Rolling Window)',
    whenToUse: '7-day moving average of website visitors, 30-day stock price smoothing.',
    template: `SELECT 
  metric_date,
  AVG(value) OVER (
    ORDER BY metric_date 
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS moving_avg_7d
FROM daily_metrics;`,
    bestPractice: 'Use ROWS BETWEEN N PRECEDING AND CURRENT ROW for strict physical row windowing.'
  },
  {
    id: 'pat-gaps-and-islands',
    title: '6. Gaps and Islands (Sequences)',
    whenToUse: 'Consecutive login days, continuous booking dates, flight connection streaks.',
    template: `WITH numbered AS (
  SELECT date_col, date_col - (ROW_NUMBER() OVER (ORDER BY date_col)) * INTERVAL '1 day' as grp
  FROM user_events
)
SELECT MIN(date_col) as streak_start, MAX(date_col) as streak_end, COUNT(*) as length
FROM numbered
GROUP BY grp;`,
    bestPractice: 'Subtracting continuous ROW_NUMBER() from contiguous dates produces a fixed invariant group ID.'
  },
  {
    id: 'pat-conditional-aggregation',
    title: '7. Pivot & Conditional Aggregation',
    whenToUse: 'Transforming row statuses into columns (e.g. Total, Paid, Pending columns).',
    template: `SELECT 
  user_id,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed_orders,
  SUM(CASE WHEN status = 'completed' THEN amount ELSE 0 END) AS completed_revenue,
  COUNT(CASE WHEN status = 'refunded' THEN 1 END) AS refunded_orders
FROM orders
GROUP BY user_id;`,
    bestPractice: 'Much cleaner and portable than proprietary PIVOT clauses.'
  },
  {
    id: 'pat-deduplication',
    title: '8. Deduplication / Keep Latest Row',
    whenToUse: 'Eliminating duplicate webhook events, getting the most recent profile state.',
    template: `WITH ranked_rows AS (
  SELECT *, ROW_NUMBER() OVER (PARTITION BY entity_id ORDER BY updated_at DESC) AS rn
  FROM telemetry_events
)
SELECT * FROM ranked_rows WHERE rn = 1;`,
    bestPractice: 'Partition by the deduplication key and order by timestamp descending.'
  }
]

// ─── INTERACTIVE CHEAT SHEETS ────────────────────────────────────────────────

export const SQL_CHEAT_SHEETS = [
  {
    id: 'cheat-joins',
    title: 'Visual SQL JOINs Guide',
    icon: '🔗',
    content: `INNER JOIN: Returns only matching rows from both tables.
LEFT JOIN: Returns ALL rows from left table + matched rows from right (or NULL).
RIGHT JOIN: Returns ALL rows from right table + matched rows from left (or NULL).
FULL OUTER JOIN: Returns all rows when there is a match in either table.
CROSS JOIN: Cartesian product (every row of Table A x every row of Table B).
SELF JOIN: A table joined with itself (hierarchies, manager-employee).`
  },
  {
    id: 'cheat-execution-order',
    title: 'Logical Query Processing Order',
    icon: '⚙️',
    content: `1. FROM & JOINs (Assemble base Cartesian product & filter on conditions)
2. WHERE (Filter individual rows before aggregation)
3. GROUP BY (Collapse rows into distinct buckets)
4. HAVING (Filter computed aggregate groups)
5. SELECT (Evaluate expressions, column projections)
6. DISTINCT (Deduplicate projected result set)
7. ORDER BY (Sort final output rows)
8. LIMIT / OFFSET (Slice final pagination window)`
  },
  {
    id: 'cheat-window-functions',
    title: 'Window Functions Cheat Sheet',
    icon: '🪟',
    content: `ROW_NUMBER(): Always assigns sequential integers (1, 2, 3, 4) - no ties.
RANK(): Leaves gaps on ties (1, 2, 2, 4) - sports style ranking.
DENSE_RANK(): Never leaves gaps on ties (1, 2, 2, 3) - optimal for N-th values.
LAG(col, n): Accesses value from n rows BEFORE current row.
LEAD(col, n): Accesses value from n rows AFTER current row.
SUM(col) OVER(PARTITION BY x ORDER BY y): Running cumulative sum.`
  },
  {
    id: 'cheat-sargability',
    title: 'SARGability & Performance Rules',
    icon: '🚀',
    content: `❌ Non-SARGable: WHERE YEAR(created_at) = 2025 (Index on created_at is ignored)
✅ SARGable: WHERE created_at >= '2025-01-01' AND created_at < '2026-01-01' (Index seek!)

❌ Non-SARGable: WHERE first_name LIKE '%arav' (Leading wildcard forces full table scan)
✅ SARGable: WHERE first_name LIKE 'Aar%' (Index range scan possible)

❌ Avoid: WHERE COALESCE(status, 'active') = 'active'
✅ Index friendly: WHERE status = 'active' OR status IS NULL`
  }
]

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────

export const SQL_ACHIEVEMENTS = [
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
]
