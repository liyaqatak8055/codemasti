// Programming, Database, DSA & System Design Interview Data (20 Questions each)
export const PROGRAMMING_AND_SYSTEM_INTERVIEWS = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. MONGODB INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'mongodb-interview',
    courseId: 'mongodb',
    title: 'MongoDB Interview',
    icon: '🍃',
    category: 'database',
    categoryLabel: 'Database & Storage',
    description: 'Document model, Aggregation pipeline, B-Tree indexes, Replica sets, Sharding, Schema design, and ACID transactions.',
    totalQuestions: 20,
    questions: [
      {
        id: 'mongo-1',
        question: 'Explain the MongoDB Aggregation Pipeline and the most common stages ($match, $group, $project, $lookup, $unwind).',
        companies: ['Google', 'Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Aggregation pipeline processes documents through multi-stage transformations:
- $match: Filters documents early (uses indexes).
- $group: Aggregates values by group key (_id: "$dept", total: { $sum: "$salary" }).
- $project: Reshapes output fields.
- $lookup: Performs left outer join with another collection.
- $unwind: Deconstructs an array field into separate documents.`,
        traps: 'Placing $lookup before $match (forces full collection join before filtering).',
        followUp: ['How does $facet stage perform multi-faceted aggregations in parallel?']
      },
      {
        id: 'mongo-2',
        question: 'Explain Embedding (Denormalization) vs Referencing (Normalization) in MongoDB schema design.',
        companies: ['Apple', 'Microsoft', 'IBM'],
        difficulty: 'Medium to Hard',
        answer: `1. Embedding (Denormalization): Store related data in sub-documents inside parent. Best for 1-to-Few relationships, atomic single-document updates, and high read performance (16MB BSON limit).
2. Referencing (Normalization): Store ObjectId references. Best for 1-to-Many, Many-to-Many, and large unbounded growth data.`,
        traps: 'Embedding unbounded growing arrays (e.g. 100,000 comments in 1 post) exceeding 16MB document limit.',
        followUp: ['What is the 16MB BSON document size limit?']
      },
      {
        id: 'mongo-3',
        question: 'How do Indexes work in MongoDB (Single Field, Compound, Multikey, Text, TTL, Geospatial)?',
        companies: ['Amazon', 'Infosys'],
        difficulty: 'Hard',
        answer: `MongoDB uses B-Tree indexes stored in RAM:
- Compound: Follows leftmost prefix rule (db.col.createIndex({ a: 1, b: -1 })).
- Multikey: Automatically created when indexing array fields.
- TTL (Time-To-Live): Automatically expires and deletes documents after seconds (great for sessions/OTP).
- Text: Supports full-text search.
- Geospatial (2dsphere): Calculates spherical distances ($near, $geoWithin).`,
        traps: 'Indexing every field, which degrades write/insert performance.',
        followUp: ['How to use cursor.explain("executionStats") to verify index usage?']
      },
      {
        id: 'mongo-4',
        question: 'What is a Replica Set in MongoDB and how do Automatic Failover and Heartbeats work?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `A Replica Set is a cluster with 1 Primary node and multiple Secondary nodes. Primary accepts all writes and logs them to oplog (operations log). Secondaries replicate oplog asynchronously. If Primary fails, nodes hold an election using Raft-like consensus in < 2 seconds.`,
        traps: 'Having an even number of voting members without an Arbiter (causes split-brain tie elections).',
        followUp: ['What is Read Preference (primary, secondaryPreferred, nearest)?']
      },
      {
        id: 'mongo-5',
        question: 'Explain Sharding in MongoDB and how to choose an effective Shard Key.',
        companies: ['Apple', 'Amazon'],
        difficulty: 'Hard',
        answer: `Sharding distributes large datasets horizontally across multiple machines using: 1) Shard nodes, 2) Config servers (metadata), 3) Mongos query routers.
A good Shard Key has:
- High Cardinality (many unique values).
- Balanced Write Distribution (avoids hot-spotting monotonic dates).
- Query Isolation (frequently queried fields).`,
        traps: 'Using monotonically increasing auto-increment ID as shard key (all writes hit 1 max shard node).',
        followUp: ['What is Hashed Sharding vs Ranged Sharding?']
      },
      {
        id: 'mongo-6',
        question: 'How do Multi-Document ACID Transactions work in MongoDB 4.0+?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Hard',
        answer: `MongoDB supports multi-document distributed ACID transactions across replica sets and shards using WiredTiger storage engine snapshot isolation:
\`\`\`js
const session = client.startSession();
session.startTransaction();
try {
  await accountA.updateOne({ ... }, { session });
  await accountB.updateOne({ ... }, { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
\`\`\``,
        traps: 'Holding multi-document transactions open for > 60 seconds (times out and aborts).',
        followUp: ['What is Write Concern (w: 1, w: "majority", j: true)?']
      },
      {
        id: 'mongo-7',
        question: 'What is the WiredTiger Storage Engine and how does it handle Concurrency and Compression?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `WiredTiger is MongoDB default storage engine. Features:
- Document-level concurrency control (optimistic concurrency without global database locks).
- Checkpointing and Write-Ahead Logging (WAL) for durability.
- Snappy / zlib compression reducing disk storage by up to 70%.
- In-memory caching using 50% of available RAM.`,
        traps: 'Assuming MongoDB still uses legacy MMAPv1 table-level locking.',
        followUp: ['How do checkpoint intervals work in WiredTiger?']
      },
      {
        id: 'mongo-8',
        question: 'What is the difference between findOneAndUpdate() vs updateOne()?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `updateOne() updates the document and returns a status acknowledgment ({ acknowledged: true, modifiedCount: 1 }). findOneAndUpdate() atomically finds, updates, and returns the actual updated document ({ returnDocument: 'after' }).`,
        traps: 'Forgetting { returnDocument: "after" } which returns the old document before update.',
        followUp: ['How does upsert: true work in findOneAndUpdate?']
      },
      {
        id: 'mongo-9',
        question: 'Explain MongoDB Capped Collections and their use cases.',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `Capped collections are fixed-size circular collections that automatically overwrite the oldest documents when allocated size limit is reached. Preserves strict insertion order without index overhead. Perfect for logging, telemetry, and message queues with Tailable Cursors.`,
        traps: 'Trying to delete individual documents from a Capped Collection (disallowed).',
        followUp: ['What is a Tailable Cursor?']
      },
      {
        id: 'mongo-10',
        question: 'What is the difference between $set, $push, $addToSet, and $pull in MongoDB update operators?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `$set updates specified fields without overwriting the whole document. $push adds an item to an array (allows duplicates). $addToSet adds an item to an array ONLY if it does not already exist (set behavior). $pull removes matching items from an array.`,
        traps: 'Using db.col.replaceOne() when you only wanted to update 1 field.',
        followUp: ['How does the positional operator $ update specific matching array elements?']
      },
      {
        id: 'mongo-11',
        question: 'How does MongoDB handle Change Streams for real-time applications?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Change Streams allow applications to listen to real-time data changes (insert, update, delete) on a collection or database using oplog. Applications subscribe via collection.watch() to push real-time updates to WebSockets without polling.`,
        traps: 'Using Change Streams on standalone MongoDB instances without replica sets.',
        followUp: ['What is resumeToken in Change Streams for fault-tolerant reconnections?']
      },
      {
        id: 'mongo-12',
        question: 'What is BSON and why does MongoDB use BSON instead of plain JSON?',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Medium',
        answer: `BSON (Binary JSON) is a binary serialization format supporting additional data types not present in JSON: Date, ObjectId, Int32, Int64, Decimal128, Binary/Buffer, and Regex. Encodes length prefixes for fast skipping and indexing.`,
        traps: 'Assuming BSON payload is smaller than JSON for tiny single-field objects.',
        followUp: ['What is the structure of a MongoDB ObjectId (12-byte hex)?']
      },
      {
        id: 'mongo-13',
        question: 'What is the difference between Mongoose Schema, Model, and Document?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `Schema defines the structure, data types, defaults, and validation rules. Model is a compiled constructor wrapper around Schema providing database CRUD methods (User.find()). Document is an individual instantiated model row instance with save() and methods.`,
        traps: 'Defining methods on Schema after compiling the Model with mongoose.model().',
        followUp: ['What is Mongoose lean() query and why does it speed up read performance?']
      },
      {
        id: 'mongo-14',
        question: 'Explain Mongoose Virtuals and Populate vs Native MongoDB $lookup.',
        companies: ['Microsoft', 'Amazon'],
        difficulty: 'Medium',
        answer: `Virtuals are computed document properties that do not persist to MongoDB (e.g. fullName from first + last). Populate() makes multiple secondary find() queries under the hood. Native $lookup runs a single atomic pipeline join in database engine (faster).`,
        traps: 'Populating deeply nested relations causing N+1 database roundtrips.',
        followUp: ['How does lean() affect Mongoose virtuals and getters?']
      },
      {
        id: 'mongo-15',
        question: 'What is Collscan vs IXSCAN in MongoDB query execution stats?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `COLLSCAN is a Full Collection Scan (scanned entire collection from disk). IXSCAN is an Index Scan (traversed B-Tree index). Always optimize queries to achieve IXSCAN with totalDocsExamined equal to nReturned.`,
        traps: 'Using regex with leading wildcard /.*abc/ which forces COLLSCAN.',
        followUp: ['What is a Covered Query in MongoDB where totalDocsExamined is 0?']
      },
      {
        id: 'mongo-16',
        question: 'What are Sparse and Partial Indexes in MongoDB?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Sparse indexes only index documents that contain the indexed field. Partial Indexes (partialFilterExpression) index documents matching a specific filter condition (e.g. index email ONLY WHERE isVerified: true), saving memory and index maintenance costs.`,
        traps: 'Sparse indexes ignore documents where the field value is null in compound queries.',
        followUp: ['How do Unique Partial Indexes allow multiple null values while enforcing uniqueness?']
      },
      {
        id: 'mongo-17',
        question: 'How do you prevent NoSQL Injection in MongoDB applications?',
        companies: ['Google', 'IBM'],
        difficulty: 'Hard (Security)',
        answer: `NoSQL Injection happens when raw user input is passed as query objects (e.g. { username: "admin", password: { $ne: null } }). Prevent by: 1) Using express-mongo-sanitize to strip $ and . characters, 2) Strict schema validation with Zod/Mongoose, 3) Casting inputs to strings.`,
        traps: 'Passing raw req.body directly to User.findOne(req.body).',
        followUp: ['How does $where JS injection attack work in MongoDB?']
      },
      {
        id: 'mongo-18',
        question: 'What is Read Concern and Write Concern in MongoDB distributed consistency?',
        companies: ['Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Write Concern ({ w: "majority", j: true, wtimeout: 5000 }): Confirms write is committed to disk journal and replicated to majority of nodes. Read Concern (local, majority, linearizable): Dictates whether reads can see uncommitted or rolled-back data.`,
        traps: 'Setting w: 1 in banking transactions which risks rollback on sudden Primary failover.',
        followUp: ['What is the difference between majority and linearizable read concern?']
      },
      {
        id: 'mongo-19',
        question: 'Explain MongoDB Atlas Search with Apache Lucene integration.',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Atlas Search embeds Apache Lucene directly alongside MongoDB data nodes:
- Supports fuzzy matching, autocomplete, faceting, and synonyms.
- Queries executed inside $search aggregation stage without spinning up separate Elasticsearch clusters.`,
        traps: 'Using standard text indexes ($text) when autocomplete/fuzzy search is required.',
        followUp: ['How do analyzers and tokenizers work in Atlas Search?']
      },
      {
        id: 'mongo-20',
        question: 'How do you perform Data Migrations and Schema Versioning in MongoDB?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Medium to Hard',
        answer: `Include a schemaVersion field in documents (e.g. { schemaVersion: 2 }). Applications read version on retrieval: 1) On-the-fly lazy migration during document save. 2) Background migration scripts using migrate-mongo running batch bulkWrite() operations.`,
        traps: 'Running blocking synchronous migrations on 100M rows during peak production hours.',
        followUp: ['How does bulkWrite() perform 10,000 updates in a single network roundtrip?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. SQL & DATABASE INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'sql-interview',
    courseId: 'sqlinterview',
    title: 'SQL & Database Interview',
    icon: '🐬',
    category: 'database',
    categoryLabel: 'Database & Storage',
    description: 'JOINs, Subqueries, Window Functions (DENSE_RANK, LEAD/LAG), CTEs, Indexing B-Trees, Normalization, and ACID transactions.',
    totalQuestions: 20,
    questions: [
      {
        id: 'sql-1',
        question: 'Explain the 5 types of SQL JOINs: INNER, LEFT, RIGHT, FULL OUTER, and CROSS JOIN.',
        companies: ['Microsoft', 'Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `INNER JOIN: Matching rows in both tables. LEFT JOIN: All rows from left + matched right (unmatched right has NULL). RIGHT JOIN: All rows from right + matched left. FULL OUTER: All rows from both tables. CROSS JOIN: Cartesian product of all rows (M x N rows).`,
        traps: 'Filtering right table in WHERE clause instead of ON clause in LEFT JOIN (turns it into INNER JOIN).',
        followUp: ['What is a Self Join and when is it used (Employee-Manager hierarchy)?']
      },
      {
        id: 'sql-2',
        question: 'Explain Window Functions in SQL (ROW_NUMBER, RANK, DENSE_RANK, NTILE).',
        companies: ['Google', 'Amazon', 'Apple'],
        difficulty: 'Hard',
        answer: `Window functions compute calculations across a set of table rows without collapsing rows like GROUP BY:
- ROW_NUMBER(): Unique sequential integer (1, 2, 3, 4).
- RANK(): Handles ties with gaps (1, 2, 2, 4).
- DENSE_RANK(): Handles ties WITHOUT gaps (1, 2, 2, 3) — standard for finding Nth Highest Salary!
- NTILE(4): Splits rows into 4 equal quartiles.`,
        traps: 'Using RANK() instead of DENSE_RANK() for Nth highest salary when duplicate salaries exist.',
        followUp: ['What is the difference between PARTITION BY and ORDER BY inside OVER()?']
      },
      {
        id: 'sql-3',
        question: 'Write a SQL query to find the 2nd Highest Salary from an Employee table without subquery errors.',
        companies: ['Infosys', 'Wipro', 'HCL', 'IBM'],
        difficulty: 'Medium',
        answer: `\`\`\`sql
-- Approach 1: Using DENSE_RANK() CTE
WITH RankedSalaries AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
)
SELECT salary FROM RankedSalaries WHERE rnk = 2 LIMIT 1;

-- Approach 2: Using OFFSET
SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 1;
\`\`\``,
        traps: 'Using LIMIT 1 OFFSET 1 without DISTINCT when top 2 employees share the exact same salary.',
        followUp: ['How to handle returning NULL if only 1 employee exists in the table?']
      },
      {
        id: 'sql-4',
        question: 'Explain LEAD() and LAG() analytical functions and solve Month-over-Month Growth.',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `LAG(col, 1) accesses data from the previous row; LEAD(col, 1) accesses data from the next row:
\`\`\`sql
SELECT 
  month, revenue,
  LAG(revenue, 1) OVER (ORDER BY month) AS prev_revenue,
  ROUND(((revenue - LAG(revenue, 1) OVER (ORDER BY month)) / LAG(revenue, 1) OVER (ORDER BY month)) * 100, 2) AS mom_growth_pct
FROM monthly_sales;
\`\`\``,
        traps: 'Division by zero when previous month revenue is 0 (use NULLIF(prev_revenue, 0)).',
        followUp: ['How to provide default value in LAG(val, offset, default_val)?']
      },
      {
        id: 'sql-5',
        question: 'What is a CTE (Common Table Expression) and how do Recursive CTEs work?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Hard',
        answer: `A CTE (WITH cte_name AS (...)) is a temporary named result set improving readability over nested subqueries. Recursive CTEs consist of an Anchor member, UNION ALL, and a Recursive member referencing the CTE name, used to traverse organizational charts, bill of materials, and category trees.`,
        traps: 'Infinite loops in recursive CTEs without termination WHERE clause (set max_recursion depth).',
        followUp: ['What is the difference between a CTE and a Temporary Table?']
      },
      {
        id: 'sql-6',
        question: 'Explain the 4 ACID properties of database transactions in detail.',
        companies: ['Google', 'Apple', 'Infosys'],
        difficulty: 'Medium to Hard',
        answer: `1. Atomicity: All operations succeed or all rollback (All or Nothing).
2. Consistency: Database transitions only between valid states satisfying constraints.
3. Isolation: Concurrent transactions do not interfere with each other (MVCC / Locks).
4. Durability: Once committed, data persists even in catastrophic power loss (WAL logs).`,
        traps: 'Confusing Consistency in ACID with Consistency in CAP theorem.',
        followUp: ['How does WAL (Write-Ahead Logging) guarantee durability?']
      },
      {
        id: 'sql-7',
        question: 'Explain Clustered vs Non-Clustered Indexes in SQL databases.',
        companies: ['Microsoft', 'Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `Clustered Index defines the physical sorting order of table data rows on disk (only 1 per table, usually Primary Key). Non-Clustered Index is a separate B-Tree structure storing indexed columns with a pointer (RowID / Clustered Key) back to data row.`,
        traps: 'Creating too many non-clustered indexes which slows down INSERT/UPDATE/DELETE.',
        followUp: ['What is a Covering Index and how does it prevent Bookmark Lookup?']
      },
      {
        id: 'sql-8',
        question: 'What is Database Normalization (1NF, 2NF, 3NF, BCNF) and when to Denormalize?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `1NF: Atomic column values, no repeating groups. 2NF: 1NF + no partial dependencies on composite primary key. 3NF: 2NF + no transitive dependencies (non-key attributes depend only on primary key). BCNF: Stricter 3NF. Denormalize in read-heavy analytics/data warehouses to eliminate expensive multi-table JOINs.`,
        traps: 'Over-normalizing OLAP data warehouse schemas causing slow analytical aggregations.',
        followUp: ['What is Star Schema vs Snowflake Schema in Data Warehousing?']
      },
      {
        id: 'sql-9',
        question: 'What is the difference between WHERE and HAVING in SQL?',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Beginner',
        answer: `WHERE filters individual rows BEFORE aggregation (cannot use aggregate functions like SUM/COUNT). HAVING filters aggregated group rows AFTER GROUP BY (e.g. HAVING COUNT(*) > 5).`,
        traps: 'Filtering non-aggregate columns in HAVING instead of WHERE (degrades index usage).',
        followUp: ['Can you use HAVING without GROUP BY?']
      },
      {
        id: 'sql-10',
        question: 'What is the difference between DELETE, TRUNCATE, and DROP?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `DELETE is DML: deletes rows conditionally with WHERE, row-by-row logged in rollback logs, triggers fire. TRUNCATE is DDL: deallocates all data pages instantly, resets auto-increment, faster, minimal logging, cannot filter with WHERE. DROP is DDL: completely removes table structure and data from database schema.`,
        traps: 'Thinking TRUNCATE fires ON DELETE triggers.',
        followUp: ['Can TRUNCATE be rolled back inside a transaction in PostgreSQL vs MySQL?']
      },
      {
        id: 'sql-11',
        question: 'Explain SQL Injections and how Prepared Statements / Parameterized Queries prevent them.',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard (Security)',
        answer: `SQL Injection occurs when malicious user input string concatenates into query strings (' OR '1'='1). Prepared Statements pre-compile SQL statement template in DB engine; parameters are sent separately as raw data values, completely eliminating code execution risk.`,
        traps: 'Sanitizing input with custom regex replace instead of using parameterized queries.',
        followUp: ['What is second-order SQL injection?']
      },
      {
        id: 'sql-12',
        question: 'What are Correlated Subqueries and why can they cause performance bottlenecks?',
        companies: ['Microsoft', 'Amazon'],
        difficulty: 'Hard',
        answer: `A Correlated Subquery references columns from the outer query. It executes once for EVERY single row evaluated by the outer query (O(M x N) nested loop), causing severe slowness. Optimize by rewriting as a JOIN or Window Function.`,
        traps: 'Using correlated subqueries in WHERE EXISTS when an indexed JOIN is available.',
        followUp: ['What is the difference between EXISTS and IN?']
      },
      {
        id: 'sql-13',
        question: 'Explain Database Deadlocks and how to prevent them in SQL.',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `A Deadlock occurs when Transaction 1 holds Lock A and waits for Lock B, while Transaction 2 holds Lock B and waits for Lock A. DB detects deadlock and aborts one transaction. Prevention: 1) Access tables and rows in consistent order across all transactions. 2) Keep transactions short. 3) Use optimistic locking.`,
        traps: 'Updating tables in random order in concurrent services.',
        followUp: ['What is Lock Escalation in SQL Server?']
      },
      {
        id: 'sql-14',
        question: 'What are Stored Procedures vs Functions (UDF) in SQL?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `Functions must return a value, cannot execute transactions (COMMIT/ROLLBACK), cannot mutate DB state, and can be used in SELECT queries. Stored Procedures can execute transactions, return multiple result sets, and execute complex administrative workflows.`,
        traps: 'Putting heavy business logic in stored procedures making version control and testing hard.',
        followUp: ['What is a Deterministic vs Non-Deterministic function?']
      },
      {
        id: 'sql-15',
        question: 'What is Database Partitioning (Range, List, Hash) vs Sharding?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Partitioning splits a large table into smaller physical chunks on the SAME database server instance (Range by year, Hash by user_id). Sharding distributes partitions horizontally across MULTIPLE independent server nodes.`,
        traps: 'Querying partitioned table without specifying partition key (forces scan across all partitions).',
        followUp: ['What is Partition Pruning in query execution plans?']
      },
      {
        id: 'sql-16',
        question: 'Explain NULL handling in SQL (COALESCE vs IFNULL vs IS NULL).',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `NULL represents unknown value. Comparisons with = NULL always return UNKNOWN (false); must use IS NULL. COALESCE(val1, val2, val3) returns the first non-null argument. Aggregate functions (SUM, AVG) ignore NULL values automatically.`,
        traps: 'Writing `WHERE status != "active"` which accidentally excludes rows with NULL status.',
        followUp: ['What is Three-Valued Logic (True, False, Unknown) in SQL?']
      },
      {
        id: 'sql-17',
        question: 'What is the difference between UNION and UNION ALL?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner',
        answer: `UNION combines result sets and runs a distinct sort operation to remove duplicate rows (slower). UNION ALL combines result sets directly preserving all duplicate rows (much faster). Always prefer UNION ALL if duplicates are acceptable.`,
        traps: 'Using UNION when result sets are guaranteed disjoint.',
        followUp: ['What are the rules regarding column types in UNION?']
      },
      {
        id: 'sql-18',
        question: 'What is Gaps and Islands problem in SQL and how to solve consecutive streaks?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Gaps and Islands identifies consecutive sequences (islands) and missing values (gaps) in sequential data (e.g. login streaks). Solved by subtracting ROW_NUMBER() from date/id — rows in the same consecutive streak produce the identical difference constant!`,
        traps: 'Trying to solve consecutive streaks with self joins instead of ROW_NUMBER() difference.',
        followUp: ['How do you calculate the longest consecutive user login streak?']
      },
      {
        id: 'sql-19',
        question: 'Explain PostgreSQL JSONB vs JSON data types and GIN Indexes.',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `JSON stores raw text (slow query, preserves whitespace). JSONB stores decomposed binary format (fast indexing and query). GIN (Generalized Inverted Index) on JSONB allows sub-millisecond key-value lookups inside nested JSON objects (WHERE data @> '{"status": "paid"}').`,
        traps: 'Using JSON data type instead of JSONB when querying nested keys.',
        followUp: ['What is the containment operator @> in PostgreSQL?']
      },
      {
        id: 'sql-20',
        question: 'How do you read and optimize SQL EXPLAIN / EXPLAIN ANALYZE query plans?',
        companies: ['Google', 'Amazon', 'Apple'],
        difficulty: 'Hard',
        answer: `EXPLAIN shows query execution steps: Sequential Scan (Seq Scan), Index Scan, Index Only Scan, Bitmap Heap Scan, Nested Loop, Hash Join, Merge Join. Look for high cost numbers, mismatched row estimates, and disk temporary sorting (Sort Method: external merge Disk).`,
        traps: 'Optimizing based on EXPLAIN without EXPLAIN ANALYZE (EXPLAIN uses estimates, ANALYZE shows actual runtime execution time).',
        followUp: ['What causes Non-Sargable WHERE clauses that break index usage (e.g. WHERE YEAR(created_at) = 2024)?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. PYTHON INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'python-interview',
    courseId: 'python',
    title: 'Python Interview',
    icon: '🐍',
    category: 'programming',
    categoryLabel: 'Core Programming & Data',
    description: 'GIL internals, Decorators, Generators, Asyncio, Memory management, Metaclasses, and OOP design.',
    totalQuestions: 20,
    questions: [
      {
        id: 'py-1',
        question: 'What is the Python GIL (Global Interpreter Lock) and how does it impact multi-threading?',
        companies: ['Google', 'Microsoft', 'IBM'],
        difficulty: 'Hard',
        answer: `GIL is a mutex in CPython that prevents multiple native OS threads from executing Python bytecode simultaneously to keep reference count memory management safe. For CPU-bound tasks, multi-threading is ineffective (use multiprocessing). For I/O tasks, threading and asyncio release GIL and excel.`,
        traps: 'Saying Python does not support multi-threading at all.',
        followUp: ['What is PEP 703 (No-GIL free-threaded Python in 3.13+)?']
      },
      {
        id: 'py-2',
        question: 'What are Python Decorators and how do you write a decorator with arguments?',
        companies: ['Amazon', 'Apple', 'Infosys'],
        difficulty: 'Medium to Hard',
        answer: `Decorators are functions taking another function and extending behavior without mutating source code.
\`\`\`python
import functools

def repeat(num_times):
    def decorator_repeat(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator_repeat
\`\`\``,
        traps: 'Forgetting @functools.wraps(func) which loses original function name and docstring.',
        followUp: ['How do class-based decorators work using __call__?']
      },
      {
        id: 'py-3',
        question: 'Explain Python Generators, yield keyword, and Generator Expressions.',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Medium',
        answer: `Generators produce items lazily on-demand using yield instead of returning all items at once in memory. Maintains internal execution state between iterations, providing O(1) memory consumption for processing millions of records or infinite streams.`,
        traps: 'Calling len() on a generator (generators do not have pre-computed length).',
        followUp: ['What is yield from syntax?']
      },
      {
        id: 'py-4',
        question: 'What is the difference between shallow copy and deep copy in Python (copy module)?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `copy.copy() creates a new compound object and inserts references to original nested items. copy.deepcopy() recursively copies all nested objects, completely decoupling original and cloned copies.`,
        traps: 'Using a = b[:] on nested lists (only top level is copied).',
        followUp: ['What happens when deepcopy encounters circular object references?']
      },
      {
        id: 'py-5',
        question: 'Explain Python Memory Management (Reference Counting and Cyclic Garbage Collection).',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `CPython manages memory primarily via Reference Counting. When ref count drops to 0, memory is freed immediately. To handle circular reference leaks (Object A references B, B references A), Python uses a generational cyclic GC (gc module) dividing objects into 3 generations.`,
        traps: 'Thinking Python freed memory is always released back to OS immediately (kept in PyMalloc arenas).',
        followUp: ['How does sys.getrefcount() work?']
      },
      {
        id: 'py-6',
        question: 'What are Python Dunder (Magic) Methods: __init__, __str__, __repr__, __call__, __enter__?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Medium',
        answer: `Dunder methods customize class behavior: __str__ (human-readable string for print), __repr__ (unambiguous developer representation), __call__ (makes object callable like a function), __enter__ and __exit__ (Context Managers).`,
        traps: 'Confusing __str__ with __repr__ (fallback is __repr__ if __str__ is missing).',
        followUp: ['How do __eq__ and __hash__ work together for Set / Dict keys?']
      },
      {
        id: 'py-7',
        question: 'Explain Context Managers and the with statement in Python.',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `Context managers guarantee resource acquisition and cleanup (files, DB connections, locks) even if exceptions are raised. Implemented via class with __enter__ and __exit__, or via @contextlib.contextmanager generator decorator.`,
        traps: 'Forgetting to handle exceptions in __exit__ return value.',
        followUp: ['What does returning True from __exit__ do? (Suppresses exception)']
      },
      {
        id: 'py-8',
        question: 'What are Mutable vs Immutable types in Python and default argument trap?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `Immutable: int, float, str, tuple, frozenset. Mutable: list, dict, set.
Default Argument Trap: Default arguments are evaluated ONCE when function is defined, not per call.
\`\`\`python
# ❌ Bug: Shared list across calls
def add_item(item, items=[]):
    items.append(item)
    return items

# ✅ Fix:
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
\`\`\``,
        traps: 'Using mutable default arguments like def fn(a, b={}) or def fn(a, b=[]).',
        followUp: ['Why is string concatenation in a loop inefficient compared to "".join()?']
      },
      {
        id: 'py-9',
        question: 'What is Asyncio in Python and how do async/await event loops work?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `asyncio is a single-threaded cooperative multitasking event loop. async def defines coroutines; await yields control back to event loop while waiting for I/O. Handles 10,000+ concurrent network connections with minimal RAM.`,
        traps: 'Calling synchronous blocking libraries (e.g. requests.get or time.sleep) inside async functions.',
        followUp: ['What is asyncio.gather() vs asyncio.TaskGroup (Python 3.11+)?']
      },
      {
        id: 'py-10',
        question: 'Explain List Comprehension, Dict Comprehension, and Generator Expressions.',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner',
        answer: `List comp: [x**2 for x in nums if x > 0] (creates full list in RAM). Dict comp: {k: v for k, v in pairs}. Generator expression: (x**2 for x in nums) (lazy iterator in O(1) memory).`,
        traps: 'Overusing complex nested list comprehensions reducing readability.',
        followUp: ['How does walrus operator := work inside comprehensions?']
      },
      {
        id: 'py-11',
        question: 'What are Python *args and **kwargs in functions?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `*args collects extra positional arguments into a Tuple. **kwargs collects extra keyword arguments into a Dictionary. Allows writing flexible functions and wrapper decorators.`,
        traps: 'Wrong order in function signature: standard params must come before *args and **kwargs.',
        followUp: ['What is keyword-only arguments syntax: def fn(a, *, b=1)?']
      },
      {
        id: 'py-12',
        question: 'What are Metaclasses in Python and how does type() create classes dynamically?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Classes in Python are instances of metaclasses. type is the default metaclass. Metaclasses inherit from type and intercept class creation via __new__ and __init__, used by ORMs (Django models, Pydantic) to validate class schemas.`,
        traps: 'Using metaclasses when class decorators or __init_subclass__ is much simpler.',
        followUp: ['What is __init_subclass__ introduced in Python 3.6?']
      },
      {
        id: 'py-13',
        question: 'Explain Multi-Threading vs Multi-Processing in Python with concurrent.futures.',
        companies: ['Apple', 'Amazon'],
        difficulty: 'Hard',
        answer: `ThreadPoolExecutor: lightweight OS threads, shared memory, ideal for network requests/disk I/O. ProcessPoolExecutor: separate OS processes, separate GIL, ideal for CPU-heavy computing across multiple CPU cores.`,
        traps: 'Using ThreadPoolExecutor for heavy CPU image crunching.',
        followUp: ['How do processes communicate via multiprocessing.Queue and Pipe?']
      },
      {
        id: 'py-14',
        question: 'What are Python Dataclasses (@dataclass) and how do they differ from NamedTuple and Pydantic?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Medium',
        answer: `@dataclass auto-generates __init__, __repr__, __eq__, and type hints. NamedTuple is an immutable tuple with named fields. Pydantic adds runtime data parsing and strict validation (used in FastAPI).`,
        traps: 'Assuming standard @dataclass validates data types at runtime.',
        followUp: ['What is @dataclass(frozen=True)?']
      },
      {
        id: 'py-15',
        question: 'What is the difference between is and == in Python?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner',
        answer: `== checks equality of values (calls __eq__). is checks identity (whether both variables point to the exact same memory address id(a) == id(b)). Always use 'is None' or 'is not None' for None checks.`,
        traps: 'Using `is` to compare integers/strings (Python small integer caching makes -5 to 256 pass, but fails for larger numbers).',
        followUp: ['What is Python small integer caching optimization?']
      },
      {
        id: 'py-16',
        question: 'What is MRO (Method Resolution Order) and C3 Linearization in multiple inheritance?',
        companies: ['Google', 'IBM'],
        difficulty: 'Hard',
        answer: `MRO defines the search order when calling methods in multiple inheritance hierarchies. Python uses C3 Linearization algorithm to prevent diamond inheritance ambiguity. Inspected via Class.mro() or Class.__mro__.`,
        traps: 'Creating diamond inheritance without calling super().__init__() consistently.',
        followUp: ['How does super() work in multiple inheritance?']
      },
      {
        id: 'py-17',
        question: 'What are Python Slots (__slots__) and how do they optimize memory?',
        companies: ['Apple', 'Amazon'],
        difficulty: 'Hard',
        answer: `By default, Python objects store attributes in a dynamic dictionary (__dict__). Defining __slots__ = ('name', 'age') allocates a fixed-size array instead of __dict__, reducing memory usage by up to 50% when creating millions of small object instances.`,
        traps: 'Trying to dynamically add unlisted attributes to an instance of a class with __slots__.',
        followUp: ['How does __slots__ affect inheritance?']
      },
      {
        id: 'py-18',
        question: 'How do you handle Custom Exceptions and Exception Chaining (raise ... from err)?',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Medium',
        answer: `Inherit from Exception: class PaymentFailedError(Exception): pass. Exception chaining preserves root cause stack trace: raise CustomError("Failed") from original_err (sets __cause__ attribute).`,
        traps: 'Inheriting from BaseException instead of Exception.',
        followUp: ['What is the difference between except Exception as e vs bare except:?']
      },
      {
        id: 'py-19',
        question: 'What are Python Lambda functions and functional tools (map, filter, reduce)?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `Lambda is an anonymous inline single-expression function: lambda x: x * 2. map(fn, iter) transforms items. filter(fn, iter) filters items. functools.reduce(fn, iter, init) aggregates elements into a single value.`,
        traps: 'Writing complex multi-line logic in lambdas (lambdas only accept single expressions).',
        followUp: ['Why are list comprehensions preferred over map/filter in modern Python?']
      },
      {
        id: 'py-20',
        question: 'How does Python handle Type Hinting and Static Analysis with mypy?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Medium',
        answer: `Type hints (x: int, names: list[str], Union[int, str], Optional[User]) improve code readability, IDE autocompletion, and allow static type checkers like mypy and pyright to catch bugs before runtime without affecting runtime execution speed.`,
        traps: 'Assuming Python enforces type hints at runtime (Python remains dynamically typed).',
        followUp: ['What is typing.Protocol for structural subtyping / duck typing?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. JAVA & SPRING BOOT INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'java-interview',
    courseId: 'java',
    title: 'Java & Spring Boot Interview',
    icon: '☕',
    category: 'programming',
    categoryLabel: 'Enterprise Programming',
    description: 'JVM memory layout (Heap, Metaspace), G1GC/ZGC, Multithreading, Spring Boot IoC/DI, Hibernate/JPA, and Microservices.',
    totalQuestions: 20,
    questions: [
      {
        id: 'java-1',
        question: 'Explain JVM Memory Layout: Heap (Young, Old), Stack, Metaspace, and Program Counter.',
        companies: ['Oracle', 'IBM', 'Infosys', 'Wipro'],
        difficulty: 'Hard',
        answer: `JVM Stack: per-thread memory storing method call frames and local primitives. Heap: shared memory holding objects (Young: Eden, S0, S1; Old/Tenured). Metaspace: off-heap native memory storing class bytecode and static constants. PC Register: stores current instruction pointer.`,
        traps: 'Confusing StackOverflowError (deep recursive stack) with OutOfMemoryError: Java heap space.',
        followUp: ['How does ZGC achieve < 1ms pause times using colored pointers?']
      },
      {
        id: 'java-2',
        question: 'What is Inversion of Control (IoC) and Dependency Injection (DI) in Spring Boot?',
        companies: ['Google', 'Microsoft', 'HCL'],
        difficulty: 'Medium to Hard',
        answer: `IoC transfers object lifecycle control from application code to the Spring Container (ApplicationContext). DI injects dependent beans automatically via Constructor Injection (recommended), Setter Injection, or Field Injection (@Autowired).`,
        traps: 'Using field injection (@Autowired on fields) which prevents clean unit testing without Spring context.',
        followUp: ['Why is Constructor Injection preferred over Field Injection?']
      },
      {
        id: 'java-3',
        question: 'What is the difference between HashMap and ConcurrentHashMap in Java multithreading?',
        companies: ['Amazon', 'Microsoft', 'Oracle'],
        difficulty: 'Hard',
        answer: `HashMap is not thread-safe; concurrent put operations can corrupt the linked-list/red-black tree. Hashtable uses synchronized methods locking the whole table. ConcurrentHashMap uses bucket-level CAS (Compare-And-Swap) and synchronized node locking, allowing multiple threads to read and write concurrently without blocking.`,
        traps: 'Using Collections.synchronizedMap() instead of ConcurrentHashMap for high concurrency.',
        followUp: ['How does Java 8 convert HashMap bucket from linked list to Red-Black Tree at TREEIFY_THRESHOLD (8)?']
      },
      {
        id: 'java-4',
        question: 'Explain the String Constant Pool and why String is immutable in Java.',
        companies: ['Infosys', 'Wipro', 'IBM'],
        difficulty: 'Medium',
        answer: `Strings are immutable for: 1) Security (DB URLs, passwords cannot be modified after validation), 2) Thread safety (safe sharing across threads without synchronization), 3) Caching (String Constant Pool in heap reuses identical string literals), 4) Hashcode caching (computed once during creation).`,
        traps: 'Using `new String("abc")` which creates an extra unnecessary object on heap bypassing the pool.',
        followUp: ['What is the difference between String, StringBuilder, and StringBuffer?']
      },
      {
        id: 'java-5',
        question: 'Explain Java 8 Features: Lambda Expressions, Streams API, and Optional.',
        companies: ['Oracle', 'Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `Lambdas: anonymous implementations of Functional Interfaces (@FunctionalInterface). Streams API: declarative functional pipeline (filter, map, reduce, collect) supporting parallel processing. Optional<T>: container preventing NullPointerException by requiring explicit isPresent() / orElseGet().`,
        traps: 'Reusing a Stream after calling a terminal operation (Streams can only be consumed once).',
        followUp: ['What is the difference between intermediate and terminal operations in Streams?']
      },
      {
        id: 'java-6',
        question: 'What are Virtual Threads (Project Loom) in Java 21 and how do they replace thread pools?',
        companies: ['Google', 'Microsoft', 'Netflix'],
        difficulty: 'Hard',
        answer: `Traditional platform threads are 1:1 mapped to expensive OS kernel threads (~1MB stack each). Virtual Threads are lightweight JVM-managed user-mode threads (~few KB) multiplexed over a small pool of carrier OS threads. Allows scaling to 1,000,000+ concurrent requests with simple blocking synchronous code!`,
        traps: 'Pooling virtual threads using Executors.newFixedThreadPool() — virtual threads should be spawned per task and never pooled.',
        followUp: ['What causes thread pinning in virtual threads? (synchronized blocks vs ReentrantLock)']
      },
      {
        id: 'java-7',
        question: 'Explain Hibernate N+1 Select Problem and how to resolve it (@EntityGraph / JOIN FETCH).',
        companies: ['Amazon', 'IBM'],
        difficulty: 'Hard',
        answer: `N+1 occurs when fetching a parent list executes 1 query, and accessing lazy children triggers N separate queries (e.g. 100 orders trigger 101 queries). Resolved via: 1) JOIN FETCH in JPQL (SELECT o FROM Order o JOIN FETCH o.items), 2) @EntityGraph attribute paths, 3) Batch fetching (@BatchSize(size = 25)).`,
        traps: 'Using FetchType.EAGER everywhere which causes massive Cartesian product memory loads.',
        followUp: ['What is Hibernate First-Level Cache (Session) vs Second-Level Cache (Redis/Ehcache)?']
      },
      {
        id: 'java-8',
        question: 'What is @Transactional in Spring and how does Spring AOP Proxy propagation work?',
        companies: ['Oracle', 'Infosys'],
        difficulty: 'Hard',
        answer: `@Transactional wraps methods in database transactions using Spring AOP dynamic proxies. Propagation levels: REQUIRED (joins existing or creates new), REQUIRES_NEW (suspends existing and creates separate transaction), MANDATORY (fails if no existing transaction).`,
        traps: 'Calling @Transactional method from another method in the SAME class (self-invocation bypasses AOP proxy).',
        followUp: ['Why do checked exceptions not trigger rollback by default in @Transactional?']
      },
      {
        id: 'java-9',
        question: 'Explain Java volatile keyword, Happens-Before relationship, and AtomicInteger.',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `volatile guarantees visibility: writes to a volatile variable are immediately flushed to main memory and reads bypass CPU L1/L2 caches. Does NOT guarantee atomicity for compound operations like count++. For atomic operations, use AtomicInteger (CAS CPU instructions).`,
        traps: 'Using volatile for count++ (non-atomic read-modify-write).',
        followUp: ['What is the Java Memory Model (JMM) Happens-Before guarantee?']
      },
      {
        id: 'java-10',
        question: 'What are Spring Boot Starters and Auto-Configuration (@EnableAutoConfiguration)?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `Starters (spring-boot-starter-web) aggregate common dependencies in pom.xml. Auto-Configuration inspects classpath (@ConditionalOnClass, @ConditionalOnMissingBean) and automatically configures Tomcat, Jackson, and DataSource beans without XML configuration.`,
        traps: 'Overriding default beans without @Primary or custom qualifier when duplicate beans exist.',
        followUp: ['How to exclude specific auto-configuration classes in @SpringBootApplication?']
      },
      {
        id: 'java-11',
        question: 'Explain the difference between Comparable and Comparator in Java.',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `Comparable (compareTo) defines natural sorting order inside the class itself (implements Comparable<T>). Comparator (compare) defines custom multiple sorting strategies external to the class (Comparator.comparing(User::getAge).thenComparing(User::getName)).`,
        traps: 'Returning a - b in compareTo when integer subtraction can overflow under large values.',
        followUp: ['How do you reverse a Comparator using .reversed()?']
      },
      {
        id: 'java-12',
        question: 'What is the difference between equals() and hashCode() contract in Java?',
        companies: ['Google', 'Amazon', 'Infosys'],
        difficulty: 'Medium to Hard',
        answer: `Contract: If two objects are equal according to equals(), they MUST return the exact same hashCode(). If you override equals() without hashCode(), objects cannot be found in HashMaps/HashSets because they map to different hash buckets!`,
        traps: 'Overriding equals() without overriding hashCode().',
        followUp: ['How does Objects.hash(field1, field2) generate safe hash codes?']
      },
      {
        id: 'java-13',
        question: 'Explain Exception Hierarchy in Java (Throwable, Error, Checked vs Unchecked Exception).',
        companies: ['Wipro', 'IBM'],
        difficulty: 'Beginner to Medium',
        answer: `Throwable is the root. Error (OutOfMemoryError) represents fatal JVM issues (should not be caught). Checked Exceptions (IOException, SQLException) inherit from Exception and MUST be handled with try-catch or throws. Unchecked Exceptions (NullPointerException, IllegalArgumentException) inherit from RuntimeException.`,
        traps: 'Catching Throwable or Error in standard application controllers.',
        followUp: ['What is try-with-resources and the AutoCloseable interface?']
      },
      {
        id: 'java-14',
        question: 'What is Spring Security Filter Chain and JWT token authentication filter?',
        companies: ['Microsoft', 'Amazon'],
        difficulty: 'Hard',
        answer: `Spring Security processes requests through a chain of security filters (SecurityFilterChain). Custom JwtAuthenticationFilter intercepts request, validates JWT token, extracts UserDetails, and attaches UsernamePasswordAuthenticationToken into SecurityContextHolder.`,
        traps: 'Disabling CSRF without understanding if session cookies are used.',
        followUp: ['What is SecurityContextHolder.getContext().getAuthentication()?']
      },
      {
        id: 'java-15',
        question: 'What are Java Records (record) introduced in Java 16?',
        companies: ['Oracle', 'Google'],
        difficulty: 'Medium',
        answer: `Records (record UserDto(String name, int age) {}) are immutable data carrier classes that auto-generate final fields, canonical constructor, getters, equals(), hashCode(), and toString() in a single line of code without Lombok boilerplate.`,
        traps: 'Trying to extend another class with a record (records implicitly extend java.lang.Record and cannot extend other classes).',
        followUp: ['Can a Record implement interfaces?']
      },
      {
        id: 'java-16',
        question: 'What is CompletableFuture in Java and how to combine asynchronous tasks?',
        companies: ['Amazon', 'Apple'],
        difficulty: 'Hard',
        answer: `CompletableFuture is a non-blocking asynchronous pipeline: thenApply() transforms results, thenCompose() chains futures, CompletableFuture.allOf() waits for multiple independent API calls in parallel on ForkJoinPool.commonPool().`,
        traps: 'Calling .get() synchronously instead of using non-blocking callbacks.',
        followUp: ['What is the difference between thenApply and thenApplyAsync?']
      },
      {
        id: 'java-17',
        question: 'Explain Spring Boot Actuator and Micrometer metrics monitoring.',
        companies: ['Google', 'IBM'],
        difficulty: 'Medium',
        answer: `Actuator exposes production-ready endpoints (/actuator/health, /actuator/metrics, /actuator/prometheus). Micrometer provides vendor-neutral metric instrumentation (gauges, timers, counters) exported to Prometheus and Grafana dashboards.`,
        traps: 'Exposing sensitive actuator endpoints like /actuator/env or /actuator/heapdump to public internet.',
        followUp: ['How to secure actuator endpoints in Spring Security?']
      },
      {
        id: 'java-18',
        question: 'What is the difference between Bean scopes: Singleton, Prototype, Request, Session?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `Singleton (default): 1 shared instance per Spring container. Prototype: new instance created every time requested from container. Request: 1 instance per HTTP request. Session: 1 instance per HTTP session.`,
        traps: 'Injecting a Prototype bean into a Singleton bean (prototype is created only once when singleton initializes unless using ObjectFactory / @Lookup).',
        followUp: ['What is @Lookup method injection in Spring?']
      },
      {
        id: 'java-19',
        question: 'What is Java Reflection API and what are its performance and security drawbacks?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Hard',
        answer: `Reflection inspects and modifies classes, methods, and private fields at runtime (Class.forName(), getDeclaredMethod()). Used by Spring and Hibernate. Drawbacks: 1) Performance overhead (bypasses JIT optimizations), 2) Breaks encapsulation, 3) Fails at runtime rather than compile-time.`,
        traps: 'Using reflection in high-throughput critical path loops.',
        followUp: ['How does MethodHandle provide faster reflection since Java 7?']
      },
      {
        id: 'java-20',
        question: 'Explain Microservices Service Discovery (Eureka / Consul) and Spring Cloud Gateway.',
        companies: ['Amazon', 'Netflix', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Eureka Server maintains a registry of active microservice instances and IP addresses with heartbeat checks. Spring Cloud Gateway routes incoming client traffic to microservices using client-side load balancing (Spring Cloud LoadBalancer) and handles authentication, rate-limiting, and telemetry.`,
        traps: 'Hardcoding microservice IP addresses in cloud environments where pods dynamic scale.',
        followUp: ['What is Circuit Breaking with Resilience4j in Spring Boot?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5. DATA STRUCTURES & ALGORITHMS (DSA) INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'dsa-interview',
    courseId: 'dsa',
    title: 'Data Structures & Algorithms (DSA) Interview',
    icon: '🧠',
    category: 'interview',
    categoryLabel: 'Core Problem Solving',
    description: 'Arrays, Two Pointers, Sliding Window, Trees, Graphs (BFS/DFS, Dijkstra), Dynamic Programming, and Trie.',
    totalQuestions: 20,
    questions: [
      {
        id: 'dsa-1',
        question: 'Explain the Two Pointers vs Sliding Window technique with Time/Space Complexities.',
        companies: ['Google', 'Amazon', 'Microsoft'],
        difficulty: 'Medium to Hard',
        answer: `Two Pointers: two pointers traverse array from opposite ends or at different speeds (e.g. 3Sum, Trapping Rain Water, LinkedList cycle). Sliding Window: maintains a subarray window [L, R] expanding/shrinking to solve contiguous subarray problems (Longest Substring Without Repeating Characters) in O(N) time and O(K) space.`,
        traps: 'Using nested loops (O(N^2)) for contiguous subarray problems.',
        followUp: ['How does the variable-size sliding window template handle negative numbers?']
      },
      {
        id: 'dsa-2',
        question: 'How do you detect and find the starting node of a Cycle in a Linked List (Floyd\'s Cycle-Finding Algorithm)?',
        companies: ['Microsoft', 'Apple', 'Infosys'],
        difficulty: 'Medium to Hard',
        answer: `1. Slow pointer moves 1 step, Fast pointer moves 2 steps. If they meet, a cycle exists.
2. Reset Slow to Head, keep Fast at meeting point.
3. Move both 1 step at a time; the node where they collide is the exact cycle start node!
Time: O(N), Space: O(1) auxiliary.`,
        traps: 'Not checking `fast !== null && fast.next !== null` causing null pointer exceptions.',
        followUp: ['What is the mathematical proof behind why resetting slow to head meets fast at cycle entry?']
      },
      {
        id: 'dsa-3',
        question: 'Explain Binary Search on Answer Space and solve Koko Eating Bananas (LeetCode 875).',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Search space is monotonic: if speed K is valid, all speeds > K are valid. Range: low = 1, high = max(piles). While low <= high, test mid = (low + high) / 2. Calculate hours needed: sum(ceil(p / mid)). If <= H, record answer and try smaller speed (high = mid - 1); otherwise low = mid + 1. Time: O(N log(MaxP)).`,
        traps: 'Integer overflow when calculating (low + high) / 2 in C++/Java (use low + (high - low) / 2).',
        followUp: ['How does this apply to Split Array Largest Sum and Aggressive Cows?']
      },
      {
        id: 'dsa-4',
        question: 'Explain Breadth-First Search (BFS) vs Depth-First Search (DFS) on Graphs with use cases.',
        companies: ['Google', 'Meta', 'Amazon'],
        difficulty: 'Medium to Hard',
        answer: `BFS uses a Queue: explores level by level, guarantees Shortest Path in unweighted graphs (Word Ladder, Rotten Oranges). DFS uses Stack/Recursion: explores deep paths, ideal for Topological Sort, Cycle Detection, Connected Components, and Backtracking (Sudoku). Time: O(V + E), Space: O(V).`,
        traps: 'Forgetting to mark nodes visited when enqueueing in BFS (causes duplicate queue insertions).',
        followUp: ['What is Dijkstra\'s algorithm for shortest path in weighted graphs with positive weights?']
      },
      {
        id: 'dsa-5',
        question: 'Explain Dynamic Programming (Memoization vs Tabulation) and solve 0/1 Knapsack.',
        companies: ['Google', 'Microsoft', 'Apple'],
        difficulty: 'Hard',
        answer: `DP is applicable when problem has Optimal Substructure and Overlapping Subproblems. Top-Down (Memoization): recursion + hash table cache. Bottom-Up (Tabulation): iterative 2D/1D DP table. For 0/1 Knapsack: dp[w] = max(dp[w], val[i] + dp[w - weight[i]]). Time: O(N * W), Space: O(W).`,
        traps: 'Iterating weight forward in 1D array 0/1 Knapsack (causes item to be picked multiple times like Unbounded Knapsack).',
        followUp: ['Difference between 0/1 Knapsack and Coin Change (Unbounded Knapsack)?']
      },
      {
        id: 'dsa-6',
        question: 'What is a Monotonic Stack and how does it solve Next Greater Element in O(N)?',
        companies: ['Amazon', 'Apple'],
        difficulty: 'Medium to Hard',
        answer: `A Monotonic Stack maintains elements in strictly increasing or decreasing order. As you iterate array, pop elements from stack that violate the order. The element that caused the pop is the Next Greater Element! Every element is pushed and popped at most once -> O(N) total time.`,
        traps: 'Storing values in stack instead of array indices.',
        followUp: ['How does Monotonic Stack solve Largest Rectangle in Histogram?']
      },
      {
        id: 'dsa-7',
        question: 'Explain Trie (Prefix Tree) data structure and its operations (insert, search, startsWith).',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Trie is a tree where each node represents a character with children map and isEndOfWord flag. Enables O(L) autocomplete, prefix matching, and spell checking where L is word length, independent of total dataset size N!`,
        traps: 'Memory overhead of fixed 26-character array per node when alphabet is sparse (use HashMap for children).',
        followUp: ['How does a Bitwise Trie solve Maximum XOR of Two Numbers in Array?']
      },
      {
        id: 'dsa-8',
        question: 'Explain Union-Find (Disjoint Set Union - DSU) with Path Compression and Union by Rank.',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `DSU tracks connected components: find(x) finds root representative (with Path Compression: parent[x] = find(parent[x])). union(x, y) connects two sets by attaching smaller rank tree under larger rank tree. Time complexity: O(alpha(N)) nearly constant amortized time! Used in Kruskal\'s MST.`,
        traps: 'Forgetting path compression which degenerates DSU tree into a linked list O(N).',
        followUp: ['What is Kruskal\'s Minimum Spanning Tree algorithm?']
      },
      {
        id: 'dsa-9',
        question: 'What is Top K Elements using Min-Heap / Max-Heap in O(N log K)?',
        companies: ['Amazon', 'Meta'],
        difficulty: 'Medium',
        answer: `To find Top K Largest elements, maintain a Min-Heap of size K. Iterate elements: push to heap; if heap size exceeds K, pop smallest. The remaining K elements in heap are the top K largest! Time: O(N log K), Space: O(K), much faster than O(N log N) sorting.`,
        traps: 'Using a Max-Heap of size N when Min-Heap of size K uses O(K) space.',
        followUp: ['What is Quickselect algorithm for Top K in O(N) average time?']
      },
      {
        id: 'dsa-10',
        question: 'Explain Binary Tree Traversals: Inorder, Preorder, Postorder, and Level Order.',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `Preorder (Root, Left, Right): serialize/clone tree. Inorder (Left, Root, Right): returns elements in sorted order for BST. Postorder (Left, Right, Root): delete tree, compute subtree heights. Level Order (BFS): processes tree tier by tier.`,
        traps: 'Assuming Inorder traversal alone can reconstruct a unique binary tree (requires Inorder + Preorder).',
        followUp: ['How do you validate if a binary tree is a valid Binary Search Tree (BST)?']
      },
      {
        id: 'dsa-11',
        question: 'Solve Longest Substring Without Repeating Characters (LeetCode 3) in O(N) time.',
        companies: ['Google', 'Amazon', 'Microsoft'],
        difficulty: 'Medium',
        answer: `Use Sliding Window + Hash Map: map stores char -> last seen index. Right pointer scans string; if char is in map and index >= left, update left = map[char] + 1. Calculate maxLen = max(maxLen, right - left + 1). Time: O(N), Space: O(min(N, charset)).`,
        traps: 'Not checking if the existing character index is within the current window (>= left).',
        followUp: ['How does this algorithm handle Unicode characters?']
      },
      {
        id: 'dsa-12',
        question: 'Explain Kadane\'s Algorithm for Maximum Subarray Sum in O(N) time and O(1) space.',
        companies: ['Microsoft', 'Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `Iterate through array maintaining current_sum and max_sum. At each index, decide whether to add current element to existing subarray or start a fresh subarray: current_sum = max(nums[i], current_sum + nums[i]). max_sum = max(max_sum, current_sum).`,
        traps: 'Initializing max_sum to 0 when array contains all negative numbers (initialize to nums[0] or -Infinity).',
        followUp: ['How to modify Kadane\'s algorithm to return the start and end indices of the subarray?']
      },
      {
        id: 'dsa-13',
        question: 'What is Topological Sort on a DAG (Directed Acyclic Graph) using Kahn\'s Algorithm (BFS)?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `1. Calculate in-degree for all vertices.
2. Push all vertices with in-degree 0 into queue.
3. While queue is not empty, pop vertex, add to order, decrement in-degree of its neighbors.
4. If neighbor in-degree becomes 0, push to queue.
5. If processed vertices count < total vertices, graph has a cycle! Used for build dependencies and Course Schedule (LeetCode 207).`,
        traps: 'Applying topological sort on a graph with cycles (fails).',
        followUp: ['How to implement Topological Sort using DFS and visited states (0=unvisited, 1=visiting, 2=visited)?']
      },
      {
        id: 'dsa-14',
        question: 'Explain LRU (Least Recently Used) Cache implementation with O(1) get() and put().',
        companies: ['Google', 'Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Combines a Hash Map + Doubly Linked List:
- Hash Map: key -> Doubly Linked List Node (provides O(1) lookups).
- Doubly Linked List: Head stores Most Recently Used, Tail stores Least Recently Used.
- get(key): find in map, move node to Head, return value.
- put(key, val): update/insert node at Head. If capacity exceeded, remove Tail node from list and map in O(1).`,
        traps: 'Using an Array/ArrayList for LRU which requires O(N) shift operations on eviction.',
        followUp: ['How does Java LinkedHashMap implement LRU in 5 lines of code?']
      },
      {
        id: 'dsa-15',
        question: 'Explain Lowest Common Ancestor (LCA) in a Binary Tree vs Binary Search Tree.',
        companies: ['Amazon', 'Meta'],
        difficulty: 'Medium to Hard',
        answer: `In BST: If both nodes > root, search Right; if both < root, search Left; otherwise root is LCA! In General Binary Tree: recurse left and right; if left and right both return non-null, root is LCA; otherwise return the non-null child. Time: O(N).`,
        traps: 'Assuming nodes are guaranteed present in tree without second validation pass.',
        followUp: ['What is Binary Lifting for LCA in trees with Q queries in O(log N) time?']
      },
      {
        id: 'dsa-16',
        question: 'What is Segment Tree and Fenwick Tree (Binary Indexed Tree) for Range Sum Queries with updates?',
        companies: ['Google', 'Uber'],
        difficulty: 'Hard',
        answer: `Segment Tree divides array into tree intervals: builds in O(N), range query in O(log N), point/range update in O(log N). Fenwick Tree uses bitwise operations (i & -i) to compute prefix sums and point updates in O(log N) with minimal code and O(N) array space.`,
        traps: 'Allocating only 2N size for Segment Tree (requires 4N size to prevent out of bounds).',
        followUp: ['What is Lazy Propagation in Segment Trees for range updates?']
      },
      {
        id: 'dsa-17',
        question: 'Explain Backtracking vs Recursion and solve N-Queens Problem.',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Backtracking builds candidate solutions incrementally and abandons (prunes) a candidate as soon as it determines it cannot yield a valid solution. For N-Queens: place queen row by row, track columns, positive diagonals (r + c), and negative diagonals (r - c) in Sets in O(1) lookup.`,
        traps: 'Not removing state during backtracking step (forgetting set.remove()).',
        followUp: ['What is the time complexity of N-Queens? (O(N!))']
      },
      {
        id: 'dsa-18',
        question: 'How do you find the Median of Two Sorted Arrays in O(log(min(M, N))) time (LeetCode 4)?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `Apply Binary Search on the smaller array to partition both arrays into left and right halves such that LeftHalf <= RightHalf and total left elements = total right elements. Partition conditions: maxLeftX <= minRightY and maxLeftY <= minRightX. Median is max(left) or (max(left) + min(right)) / 2.`,
        traps: 'Running binary search on the larger array (must run on smaller array to keep partition index in bounds).',
        followUp: ['How to handle edge cases where partition split is at 0 or array length?']
      },
      {
        id: 'dsa-19',
        question: 'Explain Dijkstra\'s Shortest Path Algorithm and why it fails with negative edge weights.',
        companies: ['Amazon', 'Google'],
        difficulty: 'Hard',
        answer: `Dijkstra uses a Min-Heap (priority queue) to greedily pick unvisited vertex with smallest distance. Time: O((V + E) log V). Fails on negative weights because it assumes once a vertex is visited, its shortest distance is finalized. For negative weights, use Bellman-Ford (O(V x E)).`,
        traps: 'Using Dijkstra on graphs with negative cycles.',
        followUp: ['What is Floyd-Warshall algorithm for All-Pairs Shortest Path in O(V^3)?']
      },
      {
        id: 'dsa-20',
        question: 'Explain Bit Manipulation Tricks: check power of 2, count set bits, find single non-repeating number.',
        companies: ['Microsoft', 'Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `1. Power of 2: (n > 0) && (n & (n - 1)) == 0.
2. Count Set Bits (Brian Kernighan\'s): while n > 0 { n &= (n - 1); count++; }.
3. Single Number (LeetCode 136): XOR all numbers: a ^ a = 0, a ^ 0 = a. The remaining result is the unique non-repeating number in O(N) time and O(1) space!`,
        traps: 'Operator precedence: == has higher precedence than &, so always use parentheses (n & (n-1)) == 0.',
        followUp: ['How to swap two variables without a temporary variable using XOR?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6. SYSTEM DESIGN INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'systemdesign-interview',
    courseId: 'systemdesign',
    title: 'System Design Interview',
    icon: '🏗️',
    category: 'interview',
    categoryLabel: 'Architecture & Scale',
    description: 'CAP Theorem, Consistent Hashing, Distributed Caching (Redis), Load Balancing, Database Sharding, and Microservices.',
    totalQuestions: 20,
    questions: [
      {
        id: 'sd-1',
        question: 'Explain the CAP Theorem and PACELC Theorem with real-world distributed system examples.',
        companies: ['Google', 'Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `CAP Theorem: In the presence of a network Partition (P), a distributed system must choose between Consistency (C) or Availability (A). CP systems (HBase, MongoDB majority) reject writes during partition. AP systems (Cassandra, DynamoDB) accept writes, syncing later. PACELC extends CAP: if Partition (P) -> A or C; Else (E) -> Latency (L) or Consistency (C).`,
        traps: 'Saying you can choose CA in distributed systems across networks — network partitions are inevitable.',
        followUp: ['How does DynamoDB let you tune read consistency per query?']
      },
      {
        id: 'sd-2',
        question: 'Explain Consistent Hashing with Virtual Nodes and why it is critical for distributed caches (Redis/Memcached).',
        companies: ['Google', 'Amazon', 'Uber'],
        difficulty: 'Hard',
        answer: `Traditional hash(key) % N redistributes almost all keys when a server node is added/removed. Consistent Hashing maps keys and servers onto a circular Hash Ring (0 to 2^32-1). Keys map to the nearest clockwise server node. Adding/removing a node only affects K/N keys. Virtual Nodes distribute multiple points per physical server to eliminate hotspots and balance load evenly.`,
        traps: 'Forgetting Virtual Nodes which causes severe load imbalance on small clusters.',
        followUp: ['How does Discord use Consistent Hashing in its Ringpop architecture?']
      },
      {
        id: 'sd-3',
        question: 'Design a Scalable Distributed Cache Architecture (Write-Through, Write-Behind, Cache-Aside).',
        companies: ['Microsoft', 'Apple', 'Meta'],
        difficulty: 'Hard',
        answer: `1. Cache-Aside (Lazy Loading): App reads cache; on miss, reads DB, populates cache, returns.
2. Write-Through: App writes to cache; cache synchronously writes to DB before returning (consistent).
3. Write-Behind (Write-Back): App writes to cache; cache batches writes to DB asynchronously (high write throughput, risk of data loss on crash).
4. Cache Stampede Prevention: Use mutex locks or probabilistic early expiration (XFetch).`,
        traps: 'Updating DB and then deleting cache without handling race conditions.',
        followUp: ['What is Cache Penetration vs Cache Breakdown vs Cache Avalanche?']
      },
      {
        id: 'sd-4',
        question: 'Design a Global Rate Limiter capable of handling 500,000 requests/sec with sub-millisecond latency.',
        companies: ['Google', 'Amazon', 'Stripe'],
        difficulty: 'Hard',
        answer: `Use Sliding Window Counter in Redis executed via atomic Lua script. API gateways (Envoy) enforce local in-memory token buckets to reject obvious DDoS without hitting Redis. Shard Redis cluster by user_id/IP. Return HTTP 429 with X-RateLimit headers.`,
        traps: 'Executing standalone GET and INCR commands in Node.js causing race conditions.',
        followUp: ['How to handle rate limiting across multiple geographic AWS regions?']
      },
      {
        id: 'sd-5',
        question: 'Design a Real-Time Notification System (Push, Email, SMS) at Scale.',
        companies: ['Meta', 'Uber', 'Apple'],
        difficulty: 'Hard',
        answer: `1. API Gateway validates request and pushes to Kafka topics partitioned by channel (email, push, sms).
2. Worker microservices consume Kafka messages with circuit breakers.
3. Third-party integrations (FCM/APNS for push, SendGrid for email, Twilio for SMS) with exponential backoff retries.
4. User Notification Preference Service with Redis cache to respect do-not-disturb and deduplication.`,
        traps: 'Sending third-party HTTP calls synchronously inside main web app request handlers.',
        followUp: ['How do you handle Dead Letter Queues (DLQ) for failed notification deliveries?']
      },
      {
        id: 'sd-6',
        question: 'Compare SQL vs NoSQL databases and explain the 4 types of NoSQL stores.',
        companies: ['IBM', 'Infosys', 'Wipro'],
        difficulty: 'Medium to Hard',
        answer: `SQL (PostgreSQL/MySQL): Structured schema, ACID transactions, complex JOINs, vertical scaling.
NoSQL: Flexible schema, horizontal scaling.
1. Key-Value: Redis, DynamoDB (sub-millisecond sessions).
2. Document: MongoDB, CouchDB (hierarchical JSON).
3. Column-Family: Cassandra, ScyllaDB (time-series, high write throughput).
4. Graph: Neo4j (social networks, recommendation engines).`,
        traps: 'Choosing NoSQL simply because data is JSON without considering ACID transaction needs.',
        followUp: ['What is NewSQL (Google Spanner, CockroachDB)?']
      },
      {
        id: 'sd-7',
        question: 'Explain Load Balancers: Layer 4 (L4) vs Layer 7 (L7) and Load Balancing Algorithms.',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `L4 (Transport Layer - TCP/UDP): routes based on IP:Port without inspecting payload (fast, high throughput, HAProxy). L7 (Application Layer - HTTP): inspects HTTP headers, cookies, URL paths (supports path routing, SSL termination, sticky sessions). Algorithms: Round Robin, Weighted Round Robin, Least Connections, IP Hash.`,
        traps: 'Terminating SSL at individual microservices instead of Layer 7 load balancer/API Gateway.',
        followUp: ['What is Anycast routing and how does Cloudflare use it for global load balancing?']
      },
      {
        id: 'sd-8',
        question: 'Design a Distributed Unique ID Generator (Snowflake ID / UUIDv7).',
        companies: ['Twitter', 'Google', 'Meta'],
        difficulty: 'Hard',
        answer: `UUIDv4 is 128-bit random, causing severe B-Tree index fragmentation. Twitter Snowflake generates 64-bit time-sortable unique IDs:
- 1 bit unused sign.
- 41 bits timestamp in milliseconds (~69 years).
- 10 bits machine/datacenter ID (1024 worker nodes).
- 12 bits sequence number (4096 IDs per millisecond per worker).
Guarantees chronological ordering and zero cross-node network coordination!`,
        traps: 'Using auto-increment database IDs across distributed sharded databases.',
        followUp: ['How do you handle Clock Drift / NTP sync issues in Snowflake?']
      },
      {
        id: 'sd-9',
        question: 'Design a Scalable Chat Application like WhatsApp / Slack.',
        companies: ['Meta', 'Slack', 'Microsoft'],
        difficulty: 'Hard',
        answer: `1. Connection Tier: WebSocket Gateways keep persistent TCP sockets open with clients.
2. Presence Service: Redis Pub/Sub tracks online status with heartbeats.
3. Message Routing: Kafka event streaming topic per user/channel.
4. Message Storage: Cassandra / ScyllaDB (partitioned by chat_id, clustered by message_id timestamp).
5. Media: AWS S3 + CloudFront CDN.`,
        traps: 'Using HTTP polling for chat messaging.',
        followUp: ['How does End-to-End Encryption (Signal Protocol) work in WhatsApp?']
      },
      {
        id: 'sd-10',
        question: 'Explain Microservices Communication: Synchronous (REST, gRPC) vs Asynchronous (Kafka, RabbitMQ).',
        companies: ['Google', 'Amazon', 'Netflix'],
        difficulty: 'Hard',
        answer: `gRPC (HTTP/2 + Protocol Buffers): synchronous, binary serialized, high performance for internal service-to-service RPC. REST (JSON): external public APIs. Asynchronous Message Queues (Kafka/RabbitMQ): decoupled event-driven architecture, handles peak traffic buffering and event sourcing without cascading service timeouts.`,
        traps: 'Chaining multiple synchronous REST calls across 5 services (cascading failure risk).',
        followUp: ['What is the difference between RabbitMQ (smart broker/dumb consumer) and Kafka (dumb broker/smart consumer)?']
      },
      {
        id: 'sd-11',
        question: 'Design a Distributed Web Crawler handling 1 Billion pages.',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `1. URL Frontier: Priority Queue managing URLs to crawl, respecting robots.txt and politeness delays per domain.
2. Fetcher Service: Async HTTP fetchers with DNS caching.
3. Content Deduplication: SimHash / MinHash to detect duplicate pages.
4. Storage: S3 for raw HTML, Bigtable/HBase for inverted document index.`,
        traps: 'Not enforcing per-host rate limiting, resulting in crawling DDoS on target websites.',
        followUp: ['How do Bloom Filters check if a URL was already visited in O(1) memory?']
      },
      {
        id: 'sd-12',
        question: 'Explain Database Replication: Single-Leader vs Multi-Leader vs Leaderless (Dynamo-style).',
        companies: ['Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Single-Leader (PostgreSQL/MySQL): 1 write leader, multiple read replicas (read scaling). Multi-Leader: multiple write leaders in different data centers (conflict resolution with CRDT or LWW). Leaderless (Cassandra/Dynamo): clients write to W nodes and read from R nodes, satisfying Quorum (R + W > N).`,
        traps: 'Assuming Last-Write-Wins (LWW) conflict resolution never loses data during clock skew.',
        followUp: ['What are Vector Clocks used for in distributed conflict detection?']
      },
      {
        id: 'sd-13',
        question: 'Design an E-Commerce Flash Sale System (10,000 items, 1,000,000 concurrent buyers).',
        companies: ['Amazon', 'Flipkart'],
        difficulty: 'Hard',
        answer: `1. Static Assets: CDN caches flash sale page.
2. In-Memory Inventory Reservation: Preload item inventory into Redis (DECR item_stock in atomic Lua script).
3. Async Order Creation: Successful reservations push message to Kafka queue for backend OrderService processing.
4. Database Protection: Direct DB writes are throttled to 500/sec, completely protecting DB from crash.`,
        traps: 'Executing SELECT stock FROM items WHERE id=1 FOR UPDATE directly on SQL DB during 1M RPS flash sale.',
        followUp: ['How to handle automatic inventory replenishment if user does not pay within 15 minutes?']
      },
      {
        id: 'sd-14',
        question: 'Explain API Gateway responsibilities in modern cloud architecture.',
        companies: ['AWS', 'Google', 'Microsoft'],
        difficulty: 'Medium to Hard',
        answer: `API Gateway acts as the single reverse-proxy entry point: 1) Authentication & JWT validation, 2) Rate Limiting & DDoS throttling, 3) Request Routing & Path rewriting, 4) SSL Termination, 5) Response Caching, 6) Distributed Tracing (Correlation ID injection).`,
        traps: 'Putting heavy business domain logic inside the API Gateway.',
        followUp: ['What is the Backend For Frontend (BFF) pattern?']
      },
      {
        id: 'sd-15',
        question: 'Design a Real-Time Proximity Service (Yelp / Uber nearby drivers) using Geohash or QuadTree.',
        companies: ['Uber', 'Google', 'Apple'],
        difficulty: 'Hard',
        answer: `1. Geohash: Encodes (lat, lon) into a Base32 string where common prefixes share the same bounding box (e.g. prefix of length 6 = 1.2km box).
2. QuadTree: In-memory 2D spatial tree where each node splits into 4 quadrants (NW, NE, SW, SE) when point capacity exceeds threshold.
3. Redis Geospatial (GEOADD, GEORADIUS): Uses 52-bit integer geohashes stored in Sorted Sets (ZSET) for sub-millisecond distance queries.`,
        traps: 'Calculating spherical Haversine formula across millions of rows in SQL without spatial indexing.',
        followUp: ['How does Uber handle high-frequency driver location updates (100k updates/sec)?']
      },
      {
        id: 'sd-16',
        question: 'Explain Distributed Tracing (OpenTelemetry) and Correlation IDs.',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Medium to Hard',
        answer: `When a request enters the API Gateway, it attaches a unique X-Correlation-ID / Trace-ID header. Every downstream microservice passes this Trace-ID along HTTP/gRPC headers. Logs and Spans are exported to Jaeger / Zipkin, visualizing end-to-end latency waterfalls across services.`,
        traps: 'Forgetting to propagate trace headers when calling third-party or async message brokers.',
        followUp: ['What is the W3C Trace Context standard (traceparent header)?']
      },
      {
        id: 'sd-17',
        question: 'Design a Video Streaming Platform Architecture (YouTube / Netflix).',
        companies: ['Netflix', 'Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `1. Video Ingestion: Chunked upload to S3 raw bucket.
2. Transcoding Pipeline: Distributed workers (AWS MediaConvert / FFmpeg) encode video into multiple bitrates (1080p, 720p, 480p) and chunk into HLS / MPEG-DASH (.m3u8 index and .ts video chunks).
3. Content Delivery: Edge CDNs (Cloudflare / Open Connect) cache video chunks near users. Adaptive Bitrate Streaming dynamically adjusts resolution based on client network bandwidth.`,
        traps: 'Serving raw MP4 files directly from origin servers instead of adaptive HLS streaming.',
        followUp: ['How does Netflix Open Connect custom CDN appliances work?']
      },
      {
        id: 'sd-18',
        question: 'Explain CQRS (Command Query Responsibility Segregation) and Event Sourcing.',
        companies: ['Microsoft', 'Amazon'],
        difficulty: 'Hard',
        answer: `CQRS separates write operations (Commands: POST/PUT) from read operations (Queries: GET) with separate optimized data models. Event Sourcing stores every state mutation as an immutable append-only sequence of events (OrderPlaced, ItemAdded, OrderPaid) in an Event Store. Current state is reconstructed by replaying events.`,
        traps: 'Using Event Sourcing for simple CRUD apps where snapshotting overhead adds unnecessary complexity.',
        followUp: ['What is the Outbox Pattern in CQRS to guarantee atomic DB write + event publishing?']
      },
      {
        id: 'sd-19',
        question: 'Design a Scalable Distributed Key-Value Store like Amazon DynamoDB.',
        companies: ['Amazon', 'Google'],
        difficulty: 'Hard',
        answer: `1. Data Partitioning: Consistent Hashing on partition key.
2. Replication: Sloppy Quorum and Hinted Handoff across N nodes.
3. Conflict Resolution: Vector Clocks and Read Repair.
4. Failure Detection: Gossip Protocol heartbeats.
5. Storage Engine: LSM-Trees (Log-Structured Merge-tree) with SSTables and Memtable for high write performance.`,
        traps: 'Using B-Trees instead of LSM-Trees for ultra high write-throughput storage engines.',
        followUp: ['What is a Bloom Filter used for in SSTable disk lookups?']
      },
      {
        id: 'sd-20',
        question: 'How do you handle Distributed Locks across Microservices using Redlock?',
        companies: ['Google', 'Redis', 'Apple'],
        difficulty: 'Hard',
        answer: `To acquire a distributed lock across 5 independent Redis master nodes:
1. Client generates random unique token and gets current timestamp.
2. Attempts to acquire lock on all N instances sequentially using SET key token NX PX 10000.
3. Lock is acquired only if client obtains lock on majority (>= 3) of nodes within timeout.
4. Releases lock using Lua script verifying token matches.`,
        traps: 'Releasing lock with simple DEL command (can accidentally delete another client\'s lock if original lock expired).',
        followUp: ['Why does Martin Kleppmann critique Redlock regarding GC pauses, and how do fencing tokens fix it?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 7. HR & BEHAVIORAL INTERVIEW (STAR METHOD)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'hr-interview',
    courseId: 'hrinterview',
    title: 'HR & Behavioral Interview',
    icon: '🤝',
    category: 'interview',
    categoryLabel: 'Culture & Leadership',
    description: 'STAR Method, Amazon Leadership Principles, Google Googlyness, Salary negotiation, Conflict resolution, and Outages RCA.',
    totalQuestions: 20,
    questions: [
      {
        id: 'hr-1',
        question: 'Tell me about yourself and walk me through your engineering background.',
        companies: ['Google', 'Microsoft', 'Apple', 'Infosys'],
        difficulty: 'Mandatory',
        answer: `Structure: Past -> Present -> Future (Elevator Pitch in 90 seconds).
"I am a Full Stack / Backend Engineer with X years of experience building scalable distributed web applications. Currently, I lead core features at [Company], where I recently architected a microservices payment pipeline reducing latency by 40%. I specialize in [React, Node.js, Distributed Systems], and I am excited about this opportunity because your team is solving high-scale challenges that align with my career goals."`,
        traps: 'Reading your entire resume line by line or talking for more than 2 minutes without structure.',
        followUp: ['What is your proudest technical achievement?']
      },
      {
        id: 'hr-2',
        question: 'Tell me about a time you had a technical disagreement with a colleague or Lead. How was it resolved? (STAR)',
        companies: ['Amazon', 'Google', 'Microsoft'],
        difficulty: 'Senior Scenario',
        answer: `Situation: Tech lead proposed synchronous REST polling between services under tight deadline. Task: Advocate for async RabbitMQ queue for high-traffic scalability. Action: Built a 1-day benchmark load-test prototype showing REST timeouts at 1,800 req/s while queue handled 5,000 req/s. Presented data respectfully in 1-on-1 and proposed a phased rollout. Result: Lead approved queue architecture; handled 4.5M Black Friday requests with 99.99% uptime.`,
        traps: 'Saying you argued opinions or saying you proved the colleague was completely wrong.',
        followUp: ['How do you practice "Disagree and Commit" when consensus differs from your opinion?']
      },
      {
        id: 'hr-3',
        question: 'Describe a situation where a major production outage occurred. How did you handle the crisis? (STAR)',
        companies: ['Google', 'Apple', 'IBM'],
        difficulty: 'Senior Scenario',
        answer: `Situation: Post-deployment database migration caused 35% checkout failures. Task: Restore service within 15-minute SLA and identify root cause. Action: Initiated automated rollback immediately (restoring 100% service in 8 min). Investigated staging replica to discover a table lock issue. Authored a blameless Post-Mortem and added CI/CD automated migration linting and canary deployments. Result: Zero lost orders and eliminated migration lock issues organization-wide.`,
        traps: 'Blaming a junior colleague or trying to live-debug in production instead of executing a rollback first.',
        followUp: ['What metrics do you include in an executive incident report?']
      },
      {
        id: 'hr-4',
        question: 'Why do you want to join our company specifically, and why are you leaving your current role?',
        companies: ['Microsoft', 'Infosys', 'Wipro', 'HCL'],
        difficulty: 'Mandatory',
        answer: `"I have reached a point where I have mastered my current scope and am looking for new technical challenges—specifically working on high-concurrency systems at your scale. I admire your engineering culture and recent innovations in cloud platforms. I am eager to contribute my expertise in scalable architectures while continuing to grow under world-class mentorship."`,
        traps: 'Badmouthing your previous manager, team, or complaining about salary.',
        followUp: ['What are the top 3 criteria you look for in a team culture?']
      },
      {
        id: 'hr-5',
        question: 'What are your salary expectations and how do you handle CTC negotiation professionally?',
        companies: ['Google', 'Microsoft', 'Infosys', 'Wipro'],
        difficulty: 'Negotiation',
        answer: `"Based on my experience architecting production-grade full-stack systems and current industry benchmarks for senior engineering roles at top MNCs, I am looking for a total compensation package in the range of [e.g. ₹22 LPA - ₹28 LPA / $140k - $170k]. However, compensation is only one factor—I am equally excited about the learning scope and career growth here, and I am confident we can reach a mutually rewarding agreement."`,
        traps: 'Giving a single rigid number without a range or quoting below market value out of nervousness.',
        followUp: ['Do you have any other active offers or interview pipelines in progress?']
      },
      {
        id: 'hr-6',
        question: 'Where do you see yourself in 3 to 5 years?',
        companies: ['IBM', 'Infosys', 'Wipro', 'HCL'],
        difficulty: 'Mandatory',
        answer: `"In 3 years, my goal is to become an indispensable Senior Technical Lead in this domain—taking end-to-end ownership of mission-critical systems, mentoring engineers, and setting code quality standards. In 5 years, I envision myself guiding technical strategy for large-scale engineering initiatives, bridging business requirements with scalable system architecture."`,
        traps: 'Saying you want to start your own company next year or switch completely away from tech into unrelated fields.',
        followUp: ['What skills are you actively working on improving right now?']
      },
      {
        id: 'hr-7',
        question: 'Tell me about a time you had to deliver a project under an impossible deadline. (STAR)',
        companies: ['Amazon', 'Google'],
        difficulty: 'Behavioral',
        answer: `Situation: Product requested a critical compliance feature 2 weeks before legal deadline. Task: Deliver feature without compromising quality. Action: Applied MoSCoW prioritization to scope out non-critical nice-to-haves with product manager. Reused existing internal auth services and set up automated integration tests. Result: Shipped MVP 2 days before deadline with 100% test coverage and zero compliance penalties.`,
        traps: 'Saying you worked 24 hours without sleep (poor planning) or cutting testing corners.',
        followUp: ['How do you manage technical debt when meeting tight deadlines?']
      },
      {
        id: 'hr-8',
        question: 'What are your greatest strengths and your greatest weakness?',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Mandatory',
        answer: `Strength: "My ability to break down complex architectural problems into pragmatic, testable milestones and communicate technical trade-offs clearly to stakeholders."
Weakness: "Early in my career, I had difficulty delegating tasks because I wanted everything done my exact way. I recognized this and took proactive steps: I established clear PR review guidelines and mentorship pairings, which empowered team members while freeing me to focus on high-level architecture."`,
        traps: 'Giving fake weaknesses like "I am a perfectionist" or "I work too hard".',
        followUp: ['Give an example of feedback you received from your manager.']
      },
      {
        id: 'hr-9',
        question: 'Tell me about a time you mentored a junior engineer who was struggling. (STAR)',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Leadership',
        answer: `Situation: A junior engineer was missing PR deadlines and struggling with async state management. Task: Help them build confidence and deliver independently. Action: Set up weekly 30-minute 1-on-1s, introduced pair-programming for difficult PRs, and created modular code templates with documentation. Result: Within 2 months, their PR review velocity doubled, and they successfully delivered a major feature independently.`,
        traps: 'Taking all the credit or speaking condescendingly about the junior developer.',
        followUp: ['How do you conduct constructive code reviews?']
      },
      {
        id: 'hr-10',
        question: 'How do you handle working with a difficult stakeholder or teammate?',
        companies: ['Amazon', 'Apple'],
        difficulty: 'Behavioral',
        answer: `"I believe empathy and active listening are key. I focus on understanding their underlying priorities and concerns rather than reacting emotionally. By maintaining transparent communication, setting clear expectations in writing, and aligning on shared project goals, I turn friction into productive collaboration."`,
        traps: 'Saying you escalated immediately to HR or manager without trying to communicate first.',
        followUp: ['Tell me about a time a stakeholder changed requirements at the last minute.']
      },
      {
        id: 'hr-11',
        question: 'Describe a time when you failed or made a major technical mistake. What did you learn? (STAR)',
        companies: ['Google', 'Amazon', 'Microsoft'],
        difficulty: 'Humility & Growth',
        answer: `Situation: I pushed a query update that lacked a proper database index, causing high CPU usage during peak load. Task: Acknowledge the oversight and fix it immediately. Action: Took full ownership in the team channel, deployed an index migration, and added an automated EXPLAIN query check in CI/CD pipeline. Result: Restored sub-50ms latency and established a team guideline for database migration reviews.`,
        traps: 'Claiming you have never failed or blaming external tooling.',
        followUp: ['What is your philosophy on blameless post-mortems?']
      },
      {
        id: 'hr-12',
        question: 'How do you keep your technical skills up to date with rapidly evolving technologies?',
        companies: ['Google', 'Meta'],
        difficulty: 'Continuous Learning',
        answer: `"I follow engineering blogs from Netflix, Uber, and Meta, contribute to open-source projects, build proof-of-concept side projects for new tech (like React 19, Go, Rust), and participate in system design communities. Continuous hands-on experimentation keeps my skills sharp."`,
        traps: 'Giving vague answers without naming specific blogs, tools, or recent projects.',
        followUp: ['What new technology did you learn recently and how did you apply it?']
      },
      {
        id: 'hr-13',
        question: 'How do you prioritize between fixing Technical Debt vs Building New Product Features?',
        companies: ['Microsoft', 'Apple'],
        difficulty: 'Senior Engineering',
        answer: `"I advocate for a 80-20 rule or dedicated tech debt sprints. I quantify the business cost of tech debt (e.g. slowed deployment velocity, customer bug reports, high AWS server costs) so product managers see refactoring not as a luxury, but as an investment that accelerates future feature delivery."`,
        traps: 'Saying you only want to refactor code without caring about business product delivery.',
        followUp: ['How do you track tech debt items in Jira?']
      },
      {
        id: 'hr-14',
        question: 'How do you handle receiving critical or negative feedback from your manager?',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Growth Mindset',
        answer: `"I welcome constructive feedback as a tool for rapid growth. I listen without getting defensive, ask clarifying questions to understand specific examples, and create an actionable improvement plan. I follow up in future 1-on-1s to review progress."`,
        traps: 'Showing defensiveness or making excuses.',
        followUp: ['Give an example of how you implemented constructive feedback.']
      },
      {
        id: 'hr-15',
        question: 'Tell me about a time you showed customer obsession or went above and beyond for a client. (STAR)',
        companies: ['Amazon', 'Microsoft'],
        difficulty: 'Customer Focus',
        answer: `Situation: Enterprise client reported intermittent data sync delays during month-end financial reporting. Task: Identify root cause outside normal work hours. Action: Analyzed telemetry logs, traced database connection pool bottlenecks, and deployed a targeted connection pool fix with automated monitoring. Result: Client completed reporting on time with zero data discrepancies, leading to a contract renewal.`,
        traps: 'Saying customer requirements are not your job because you only write code.',
        followUp: ['How do customer needs influence your architectural decisions?']
      },
      {
        id: 'hr-16',
        question: 'How do you explain career gaps or employment transitions on your resume?',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Transparency',
        answer: `"I used that dedicated period intentionally for upskilling in scalable system design, cloud architecture, and modern full-stack engineering. During this time, I built end-to-end production systems, contributed to projects, and refined my problem-solving skills. This focus allows me to contribute at a high level immediately."`,
        traps: 'Being evasive or unconfident about career gaps.',
        followUp: ['What was the most challenging project you built during your gap?']
      },
      {
        id: 'hr-17',
        question: 'Are you comfortable working in Agile / Scrum environments with 2-week sprints?',
        companies: ['IBM', 'Infosys', 'Wipro'],
        difficulty: 'Process',
        answer: `"Yes, I thrive in Agile Scrum workflows—daily standups, sprint planning, backlog grooming, and retrospectives. I find iterative 2-week sprints ensure transparent communication, fast feedback loops, and early risk mitigation."`,
        traps: 'Saying Agile ceremonies are a waste of time.',
        followUp: ['How do you estimate story points during sprint planning?']
      },
      {
        id: 'hr-18',
        question: 'How do you handle working in a remote / hybrid team across different time zones?',
        companies: ['Google', 'Microsoft', 'GitLab'],
        difficulty: 'Remote Work',
        answer: `"I rely on asynchronous communication: detailed PR descriptions, clear documentation in Notion/Confluence, Loom video walkthroughs for complex handoffs, and organized Slack threads. I proactively communicate my working hours and overlap with team schedules for synchronous standups."`,
        traps: 'Expecting everyone to be online at the exact same hour in distributed teams.',
        followUp: ['What tools do you use for async documentation?']
      },
      {
        id: 'hr-19',
        question: 'What type of engineering manager brings out your best performance?',
        companies: ['Apple', 'Google'],
        difficulty: 'Culture Fit',
        answer: `"I perform best with a manager who empowers autonomy and provides clear strategic goals rather than micromanaging. A manager who values open feedback, supports career growth, and removes organizational blockers allows me to take ownership and deliver high-impact results."`,
        traps: 'Saying you need constant supervision or saying you ignore managers.',
        followUp: ['How do you communicate project blockers to your manager?']
      },
      {
        id: 'hr-20',
        question: 'Do you have any questions for us at the end of the interview?',
        companies: ['Google', 'Microsoft', 'Apple', 'Amazon', 'IBM', 'Infosys', 'Wipro', 'HCL'],
        difficulty: 'Mandatory',
        answer: `Always ask 2-3 thoughtful reverse-interview questions:
1. "What are the biggest architectural or scaling challenges your team is tackling in the next 6-12 months?"
2. "How does engineering success get measured for this role during the first 90 days?"
3. "What is the team's culture around code reviews, technical debt, and continuous learning?"`,
        traps: 'Saying "No, I don\'t have any questions" (shows lack of curiosity and interest).',
        followUp: ['What is the next step in the interview process?']
      }
    ]
  }
]

