export const mysqlCourse = {
  id: 'mysql',
  title: 'MySQL',
  description: 'Complete MySQL Masterclass! Relational database architecture, data types, keys & constraints, CRUD, advanced JOINs, subqueries, CTEs, Window Functions, indexing, transactions, ACID, locking, normalization, stored procedures, triggers, security, Node.js/Python integration, real-world projects & FAANG interview problem solving Masti Sir style mein!',
  icon: '🐬',
  category: 'database',
  certificateName: 'MYSQL',
  topicsCount: 120,
  practiceCount: 145,
  projectsCount: 10,
  hoursEstimate: 35,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: DATABASE FUNDAMENTALS, RDBMS & MYSQL ARCHITECTURE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Database Fundamentals, RDBMS Concepts & MySQL Architecture',
      lessons: [
        {
          id: 'mysql-what-is-database',
          title: 'What is a Database, DBMS vs RDBMS & SQL vs MySQL',
          emoji: '🗄️',
          xpReward: 35,
          badgeName: 'Data Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Socho agar ek school ke 10,000 bachhon ka data kachhe kagaz par likha ho — jab roll no 500 ka result dhoondhna hoga toh dimaag ka dahi ho jayega! Database wahi organized digital almari hai! 😎"',
            hint: '💡 Masti Sir: "Yaad rakhna: SQL ek language hai (jaise Hindi/English), aur MySQL wo software hai jo us language ko samajhkar data store karta hai!"',
            success: '🎉 Masti Sir: "Shabaash! Database, RDBMS aur MySQL ka difference clear ho gaya! Ab tum structured data ke champion banoge! 🔥"',
            mistake: '😅 Masti Sir: "Kabhi mat bolna \'MySQL is always better than MongoDB\'. Har database ka apna use-case hota hai (relational vs document)!"'
          },
          englishDef: 'A database is an organized collection of structured data stored electronically. A Relational Database Management System (RDBMS) organizes data into related tables (rows and columns) connected by primary and foreign keys. SQL (Structured Query Language) is the standard query language, and MySQL is the world\'s most popular open-source RDBMS powered by the InnoDB storage engine.',
          hinglishExplain: 'Database ek digital system hai jahan data structured aur secure tarike se store hota hai. RDBMS mein data tables (rows aur columns) ke format mein hota hai jahan alag-alag tables aapas mein related hoti hain (jaise Users aur unke Orders). SQL wo bhasha hai jisse hum database se baat karte hain, aur MySQL wo engine hai jo queries ko execute karke data lata hai.',
          funnyExample: {
            scenario: 'School Management Analogy:\n- School (Database) 🏫\n  ├── Students Table (Roll No, Name, Class) 🧑‍🎓\n  ├── Courses Table (Course ID, Subject, Teacher) 📚\n  ├── Teachers Table (Emp ID, Name, Dept) 👨‍🏫\n  └── Marks Table (Student ID, Course ID, Marks) 📝\nSab kuch interconnected hai — agar student ka roll no pata hai, toh uske teachers aur marks ek second mein mil jayenge!',
            punchline: 'Database = Sabse organized digital almari jahan koi bhi data kabhi kho nahi sakta!'
          },
          visualDiagram: {
            title: 'School Relational Database Hierarchy',
            nodes: ['Database: school_db', 'Table: students (id, name)', 'Table: courses (id, title)', 'Table: enrollments (student_id -> students.id, course_id -> courses.id)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'SQL vs MySQL Ecosystem:',
            steps: ['SQL is the ANSI standard query language definition', 'MySQL is the actual database server implementing SQL specifications', 'MySQL Client sends SQL text over TCP/IP (Port 3306)', 'MySQL Server parses query, optimizes it, and InnoDB executes read/write on disk']
          },
          code: `-- 1. Show existing databases
SHOW DATABASES;

-- 2. Create school database
CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

-- 3. Check current database and connection status
SELECT DATABASE(), USER(), VERSION(), NOW();`,
          codeBreakdown: [
            { part: 'SHOW DATABASES;', label: 'Lists all schemas currently hosted on the MySQL server instance', color: '#3b82f6' },
            { part: 'CREATE DATABASE IF NOT EXISTS', label: 'Creates the new database schema safely without throwing error if it already exists', color: '#10b981' },
            { part: 'USE school_db;', label: 'Sets school_db as the active database context for subsequent SQL queries', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `USE database_name` likhna bhool jana aur direct `CREATE TABLE` chala dena (No database selected error)',
            '❌ SQL aur MySQL ko ek hi cheez samajh lena (SQL is query language, MySQL is DB engine)',
            '❌ Statement ke end mein semicolon (;) miss kar dena'
          ],
          miniChallenge: 'MySQL CLI mein ek naya database `codemasti_app` create karo aur active database switch karo.',
          quiz: {
            question: 'SQL aur MySQL mein main difference kya hai?',
            options: [
              'SQL ek programming language hai, MySQL ek operating system hai',
              'SQL ek query language hai, MySQL ek RDBMS software hai jo SQL use karta hai',
              'SQL sirf NoSQL ke liye hota hai, MySQL relational ke liye',
              'Dono bilkul same cheez hain koi difference nahi hai'
            ],
            answer: 'SQL ek query language hai, MySQL ek RDBMS software hai jo SQL use karta hai',
            explanation: 'SQL (Structured Query Language) ek standard language hai, jabki MySQL ek Relational Database Management System (RDBMS) software hai jo SQL syntax ko process karta hai.'
          },
          summary: [
            'Database structured electronic data storage provide karta hai',
            'RDBMS tables, rows, columns aur foreign key relationships use karta hai',
            'SQL standard query language hai aur MySQL robust open-source database engine hai'
          ],
          flashcard: {
            q: 'DBMS aur RDBMS mein kya difference hai?',
            a: 'DBMS data files ya flat structure mein store karta hai bina strict table relationships ke; RDBMS tables ke beech Primary Key & Foreign Key relationships enforce karta hai.'
          }
        },
        {
          id: 'mysql-intro-schema',
          title: 'MySQL Architecture, Tables & Primary Keys',
          emoji: '🐬',
          xpReward: 35,
          badgeName: 'SQL Starter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Data ko organized aur structured rakhna hai toh SQL se behtar koi nahi! Rows aur columns ka magic seekho 😎"',
            hint: '🤦 Masti Sir: "Har table mein ek UNIQUE PRIMARY KEY zaroor hona chahiye taaki har record ki apni alag identity ho!"',
            success: '🥳 Masti Sir: "Zabardast! Table schema ekdum perfectly structured ho gaya 🔥"',
            mistake: '😅 Masti Sir: "SQL query ke aakhri mein semicolon (;) lagana mat bhoolna 😂"'
          },
          englishDef: 'MySQL follows a modular client-server architecture consisting of the Connection Pool layer, SQL Parser & Optimizer, Pluggable Storage Engine (InnoDB), and File System. Every table requires a Primary Key to enforce entity integrity, frequently created as an `INT AUTO_INCREMENT PRIMARY KEY`.',
          hinglishExplain: 'MySQL Client-Server model par kaam karta hai. Client (jaise aapka Node.js backend ya MySQL Workbench) query bhejta hai, MySQL Server use parse aur optimize karta hai, aur InnoDB storage engine B-Tree data pages se data nikaal kar deta hai. Har table mein Primary Key har row ka Aadhaar card hoti hai jo kabhi null ya duplicate nahi ho sakti.',
          funnyExample: {
            scenario: 'Aadhaar Card Analogy:\n- Students Table = Poore desh ke citizens\n- Primary Key (id) = Aapka 12-digit unique Aadhaar Number 🪪\n(Naam aur sheher do logon ka same ho sakta hai, par Aadhaar ID hamesha unique hota hai!)',
            punchline: 'Primary Key = Har row ka unique identity card!'
          },
          visualDiagram: {
            title: 'MySQL Client-Server Architecture',
            nodes: [
              'Application / Node.js Client (mysql2)',
              'Connection Pool & Authentication',
              'SQL Parser & Query Optimizer',
              'Storage Engine: InnoDB (B-Tree Buffer Pool)',
              'Disk Storage (ibdata1 / .ibd data files)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'SQL Query Execution Pipeline:',
            steps: [
              'Client sends query string over connection socket',
              'Parser validates SQL syntax and builds Abstract Syntax Tree (AST)',
              'Optimizer evaluates cost, chooses optimal index and join order',
              'InnoDB executes index lookups via Buffer Pool and writes WAL redo logs'
            ]
          },
          code: `-- 1. Create Users Table with Primary Key & Constraints
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  xp_points INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Insert Records
INSERT INTO users (username, email, xp_points)
VALUES 
  ('kabir_sharma', 'kabir@codemasti.com', 450),
  ('riya_patel', 'riya@codemasti.com', 820);

-- 3. Query Records
SELECT id, username, email, xp_points FROM users WHERE xp_points > 500;`,
          codeBreakdown: [
            { part: 'id INT AUTO_INCREMENT PRIMARY KEY', label: 'Automatically generates unique incrementing integer ID (1, 2, 3...) for entity integrity', color: '#3b82f6' },
            { part: 'VARCHAR(50) NOT NULL UNIQUE', label: 'Ensures username cannot be blank and no two users share the same handle', color: '#10b981' },
            { part: 'ENGINE=InnoDB', label: 'Selects MySQL standard transactional storage engine with ACID and row-level locking', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Table mein Primary Key banana bhool jana (performance and replication degradation)',
            '❌ Natural keys (jaise email) ko mutable hone par primary key banana (surrogate AUTO_INCREMENT ID is preferred)',
            '❌ Case-sensitive passwords plaintext mein store karna (hamesha bcrypt hash store karein)'
          ],
          miniChallenge: 'Ek `courses` table create karo with `id` (PK AUTO_INCREMENT), `title` (VARCHAR 100 UNIQUE NOT NULL), `category`, `price` (DECIMAL 10,2) aur `created_at`.',
          quiz: {
            question: 'MySQL table mein kisi column ko duplicate values accept na karne ke liye kaunsa constraint lagate hain?',
            options: ['NOT NULL', 'UNIQUE', 'DEFAULT', 'AUTO_INCREMENT'],
            answer: 'UNIQUE',
            explanation: 'UNIQUE constraint ensure karta hai ki us column mein koi bhi do rows same value hold na karein (jaise email ya username).'
          },
          summary: [
            'MySQL client-server architecture aur pluggable InnoDB storage engine use karta hai',
            'Primary Key har record ko uniquely identify karta hai aur Clustered Index create karta hai',
            'AUTO_INCREMENT surrogate integer keys provide karta hai jo sequence maintain karti hain'
          ],
          flashcard: {
            q: '`CHAR` aur `VARCHAR` mein kya fark hai?',
            a: '`CHAR` fixed-length string hoti hai (e.g. CHAR(5) hamesha 5 bytes legi); `VARCHAR` variable-length hoti hai (sirf entered characters + 1 byte length overhead leti hai).'
          }
        },
        {
          id: 'mysql-installation-workbench-cli',
          title: 'Installation, MySQL Workbench & CLI Mastery',
          emoji: '💻',
          xpReward: 35,
          badgeName: 'Terminal Operator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GUI tools dekhne mein acche lagte hain, par ek real backend developer terminal CLI par queries run karke flow samajhta hai! Dono master karenge! 😎"',
            hint: '💡 Masti Sir: "CLI mein `DESCRIBE table_name;` se column structure aur data types instant dikhte hain!"',
            success: '🎉 Masti Sir: "Superb! Workbench aur mysql CLI dono par command ho gayi! 🚀"',
            mistake: '😅 Masti Sir: "Root user ka password bhool jana junior developers ka national hobby hai! Password safe rakho 😂"'
          },
          englishDef: 'MySQL can be managed via the graphical MySQL Workbench (supporting SQL editing, visual ER modeling, and server administration) or the official `mysql` Command Line Interface (CLI). Key CLI diagnostic commands include `SHOW DATABASES;`, `USE db;`, `SHOW TABLES;`, `DESCRIBE table;`, and `SHOW CREATE TABLE table;`.',
          hinglishExplain: 'MySQL ke sath do primary tools aate hain: MySQL Workbench (jisme visual ER diagrams, query editor aur database admin tools milte hain) aur MySQL CLI (terminal prompt jahan lightning fast queries execute hoti hain). Production servers par koi GUI nahi hota, isliye CLI commands master karna mandatory hai.',
          funnyExample: {
            scenario: 'Pilot vs Passenger Analogy:\n- MySQL Workbench = Flight Simulator with graphical UI 🎛️\n- MySQL CLI = Real Cockpit Switches where real commands run directly on production Linux servers ✈️',
            punchline: 'GUI for designing, CLI for real developer speed!'
          },
          visualDiagram: {
            title: 'Developer to MySQL Connection Flow',
            nodes: [
              'Developer (Terminal CLI / MySQL Workbench)',
              'TCP Connection (localhost:3306, user: root)',
              'Authentication & Handshake',
              'Interactive Session (SHOW TABLES, DESCRIBE, SELECT)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'CLI Diagnostic Commands Under the Hood:',
            steps: [
              '`SHOW TABLES` queries information_schema.tables metadata table',
              '`DESCRIBE table` queries information_schema.columns for data types & nullability',
              '`SHOW CREATE TABLE` retrieves the exact DDL statement used to construct the table'
            ]
          },
          code: `-- 1. Connect to MySQL from Terminal:
-- mysql -u root -p -h localhost -P 3306

-- 2. Inspect Environment & Schemas
SHOW DATABASES;
USE codemasti_db;
SHOW TABLES;

-- 3. Inspect Table Structure (Columns, Types, Keys, Defaults)
DESCRIBE users;

-- 4. View exact DDL creation statement
SHOW CREATE TABLE users;

-- 5. Check Server Status & Engine Variables
SHOW ENGINES;
SHOW VARIABLES LIKE 'version';`,
          codeBreakdown: [
            { part: 'DESCRIBE users;', label: 'Displays columns, data types, nullability, key indexes, and default values', color: '#3b82f6' },
            { part: 'SHOW CREATE TABLE users;', label: 'Dumps the complete exact CREATE TABLE definition including constraints and storage engine', color: '#10b981' },
            { part: 'SHOW ENGINES;', label: 'Verifies InnoDB is DEFAULT and active with transaction support', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Terminal mein direct `SHOW DATABASES;` chalana bina `mysql -u root -p` login kiye',
            '❌ Workbench connection mein default port 3306 block hone par port check na karna'
          ],
          miniChallenge: 'CLI mein `DESCRIBE` command run karke kisi table ki primary key aur nullability check karo.',
          quiz: {
            question: 'MySQL CLI mein kisi table ke sabhi columns aur unke data types dekhne ke liye kaunsi command use hoti hai?',
            options: ['VIEW TABLE;', 'DESCRIBE table_name;', 'INSPECT table_name;', 'PRINT COLUMNS;'],
            answer: 'DESCRIBE table_name;',
            explanation: '`DESCRIBE table_name;` (ya `DESC table_name;`) table ke sabhi columns, data types, nullability, keys aur defaults print karta hai.'
          },
          summary: [
            'MySQL Workbench visual ER diagramming aur schema management provide karta hai',
            'mysql CLI headless Linux production servers par administration ke liye essential hai',
            'DESCRIBE aur SHOW CREATE TABLE schema debugging ke primary tools hain'
          ],
          flashcard: {
            q: '`SHOW CREATE TABLE users;` ka output kahan use hota hai?',
            a: 'Ye exact CREATE TABLE SQL statement print karta hai jisse table schema ko replicate, backup ya migration files mein export kiya ja sake.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: DATABASE, TABLE MANAGEMENT & DATA TYPES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Database, Table Management & Data Types',
      lessons: [
        {
          id: 'mysql-database-table-ddl',
          title: 'Database & Table Creation DDL (CREATE, ALTER, DROP, TRUNCATE)',
          emoji: '🔨',
          xpReward: 40,
          badgeName: 'Schema Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "DROP, TRUNCATE aur DELETE mein farak samajh lo, varna production par galti se pure company ka data 1 second mein gayab ho jayega! 😱"',
            hint: '💡 Masti Sir: "DROP TABLE pura ghar tod deta hai; TRUNCATE ghar khali karke saara samaan fek deta hai; DELETE ek ek kamra chun kar saaf karta hai!"',
            success: '🎉 Masti Sir: "DDL mastery unlocked! Tables alter aur modify karna aasan ho gaya! 😎"',
            mistake: '😅 Masti Sir: "Production par kabhi bhi bina backup ke DROP DATABASE mat chalana! 😂"'
          },
          englishDef: 'Data Definition Language (DDL) commands manage the structure of database objects. `CREATE TABLE` initializes schema, `ALTER TABLE` modifies columns/constraints, `TRUNCATE TABLE` resets table data instantly while preserving schema, and `DROP TABLE` permanently destroys the table and its metadata.',
          hinglishExplain: 'DDL commands se hum database ka structure banate aur modify karte hain. Agar table mein naya column add karna ho toh `ALTER TABLE` use karte hain. `TRUNCATE` table ke saare rows ko super-fast delete karta hai aur auto-increment ko 1 par reset kar deta hai, jabki `DROP` table ko hi existance se mita deta hai.',
          funnyExample: {
            scenario: 'The House Analogy:\n- `DELETE FROM users WHERE id=5;` = Ghar se sirf ek purani chair bahar nikaalna 🪑\n- `TRUNCATE TABLE users;` = Ghar ke andar ka saara furniture bahar fekna, par building khadi rahegi 🏠\n- `DROP TABLE users;` = Bulldozer laakar poori building hi tod dena! 🚜💥',
            punchline: 'DROP = Destruction of structure, TRUNCATE = Empty structure, DELETE = Targeted removal!'
          },
          visualDiagram: {
            title: 'DROP vs TRUNCATE vs DELETE Comparison',
            nodes: [
              'DELETE: DML | Logs every row | WHERE supported | Slow for millions | Keeps AUTO_INCREMENT',
              'TRUNCATE: DDL | De-allocates data pages | Fast | No WHERE | Resets AUTO_INCREMENT to 1',
              'DROP: DDL | Removes data + metadata + schema definition permanently'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'TRUNCATE vs DELETE Engine Internals:',
            steps: [
              'DELETE writes individual undo/redo log entries for every deleted row (expensive I/O)',
              'TRUNCATE drops and recreates the entire .ibd tablespace file on disk in a single metadata operation',
              'TRUNCATE invalidates table cache and resets AUTO_INCREMENT sequence in memory'
            ]
          },
          code: `-- 1. Create Products Table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Alter Table: Add new column
ALTER TABLE products 
ADD COLUMN sku VARCHAR(50) NOT NULL UNIQUE AFTER id;

-- 3. Alter Table: Modify column type
ALTER TABLE products 
MODIFY COLUMN title VARCHAR(200) NOT NULL;

-- 4. Alter Table: Add Index & Rename column
ALTER TABLE products 
ADD INDEX idx_price (price);

-- 5. Empty table vs Drop table
-- TRUNCATE TABLE products; -- Fast reset
-- DROP TABLE IF EXISTS products; -- Permanent removal`,
          codeBreakdown: [
            { part: 'ADD COLUMN sku VARCHAR(50) NOT NULL UNIQUE AFTER id', label: 'Adds a new column at a specific ordinal position in the table structure', color: '#3b82f6' },
            { part: 'MODIFY COLUMN title VARCHAR(200)', label: 'Changes existing column data type capacity without losing table contents', color: '#10b981' },
            { part: 'ADD INDEX idx_price (price)', label: 'Creates a B-Tree index to accelerate price range filtering queries', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production table par peak hours mein heavy `ALTER TABLE` run karna (table lock ho sakta hai; use gh-ost or pt-online-schema-change for huge tables)',
            '❌ `TRUNCATE` chalate waqt sochna ki `WHERE` clause chal jayega (`TRUNCATE` does not support WHERE)'
          ],
          miniChallenge: 'Ek `orders` table banao aur `ALTER TABLE` se `payment_status` ENUM column add karo.',
          quiz: {
            question: 'Kaunsi command table ke saare records delete karti hai aur AUTO_INCREMENT counter ko wapas 1 par reset kar deti hai?',
            options: ['DELETE FROM table;', 'TRUNCATE TABLE table;', 'DROP TABLE table;', 'RESET TABLE table;'],
            answer: 'TRUNCATE TABLE table;',
            explanation: '`TRUNCATE TABLE` DDL command hai jo tablespace deallocate karti hai, saare rows instant wipe karti hai aur AUTO_INCREMENT counter reset karti hai.'
          },
          summary: [
            'CREATE, ALTER, DROP aur TRUNCATE core DDL commands hain',
            'ALTER TABLE columns add, modify, rename aur drop karne ke liye use hota hai',
            'DROP schema destroy karta hai, TRUNCATE schema preserve karke wipe karta hai, DELETE row-level logging use karta hai'
          ],
          flashcard: {
            q: 'Kya `TRUNCATE` transaction ke andar ROLLBACK ho sakta hai?',
            a: 'MySQL mein DDL commands (jaise TRUNCATE aur ALTER) implicit COMMIT trigger karti hain, isliye standard MySQL setup mein TRUNCATE ko rollback nahi kiya ja sakta.'
          }
        },
        {
          id: 'mysql-data-types',
          title: 'MySQL Data Types Deep Dive (Numeric, String, Date, JSON & ENUM)',
          emoji: '🔢',
          xpReward: 40,
          badgeName: 'Type Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Paisa store karne ke liye kabhi FLOAT ya DOUBLE use mat karna! Rounding error aayega toh customer ka balance 1000 ki jagah 999.99999 dikhayega! DECIMAL use karo! 💰"',
            hint: '💡 Masti Sir: "Date ke liye `DATETIME` fixed date store karta hai jabki `TIMESTAMP` UTC mein convert karke timezone-aware rehta hai!"',
            success: '🎉 Masti Sir: "Zabardast! Data types ki perfect knowledge se storage aur memory 50% optimize ho gayi! 🔥"',
            mistake: '😅 Masti Sir: "Phone number ko INT mein store mat karna (overflow ho jayega aur leading zeroes gayab ho jayenge — use VARCHAR)!"'
          },
          englishDef: 'MySQL provides specialized data types across Numeric (INT, BIGINT, DECIMAL for financial accuracy), String (CHAR, VARCHAR, TEXT), Date/Time (DATE, DATETIME, TIMESTAMP), and Complex types (BOOLEAN, JSON, ENUM). Selecting appropriate data types optimizes disk storage, buffer pool RAM usage, and index performance.',
          hinglishExplain: 'Database design ka sabse important rule hai right data type choose karna. Financial calculations (jaise cart total ya salary) ke liye hamesha `DECIMAL(10,2)` use karein kyonki floating-point data types precision lose karte hain. Short text ke liye `VARCHAR`, long articles ke liye `TEXT`, fixed status ke liye `ENUM`, aur semi-structured data ke liye `JSON` use hota hai.',
          funnyExample: {
            scenario: 'The Floating Point Banking Disaster:\n- Float calculation: `0.1 + 0.2 = 0.30000000000000004` 😱 (Float/Double lose precision!)\n- Decimal calculation: `DECIMAL(10,2)` keeps exact `0.30` paisa accurate! 🏦',
            punchline: 'Never use FLOAT for money; always use DECIMAL!'
          },
          visualDiagram: {
            title: 'MySQL Core Data Types Overview',
            nodes: [
              'Numeric: INT (4B), BIGINT (8B), DECIMAL(10,2) [Exact Money]',
              'String: CHAR(n) [Fixed], VARCHAR(n) [Variable], TEXT / LONGTEXT',
              'Date/Time: DATE, TIME, DATETIME [Fixed], TIMESTAMP [UTC Epoch]',
              'Special: BOOLEAN (TINYINT 1), ENUM(\'active\',\'inactive\'), JSON'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Storage Requirements on Disk & RAM:',
            steps: [
              'INT uses 4 bytes (-2.1B to +2.1B), BIGINT uses 8 bytes',
              'VARCHAR(50) storing "Kabir" uses 5 bytes + 1 byte length prefix = 6 bytes',
              'TEXT columns are stored off-page on overflow pages if row size exceeds 8KB'
            ]
          },
          code: `-- E-Commerce Item Specification with Diverse Data Types
CREATE TABLE products_catalog (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  sku CHAR(8) NOT NULL UNIQUE,                -- Fixed 8-char code (e.g. 'PROD1001')
  title VARCHAR(150) NOT NULL,                -- Variable length string
  description TEXT,                           -- Long text description
  price DECIMAL(10, 2) NOT NULL,              -- Exact currency precision (e.g. 1499.99)
  discount_percentage FLOAT DEFAULT 0.0,      -- Approximate percentage
  is_in_stock BOOLEAN DEFAULT TRUE,           -- 1 / 0 flag
  item_status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  metadata JSON,                              -- Key-value JSON specs
  published_at DATETIME,                      -- Fixed date-time (e.g. 2026-08-20 18:30:00)
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert JSON & ENUM data
INSERT INTO products_catalog (sku, title, price, item_status, metadata)
VALUES (
  'LAP88401', 
  'MacBook Air M3', 
  114900.00, 
  'published', 
  JSON_OBJECT('ram', '16GB', 'storage', '512GB SSD', 'colors', JSON_ARRAY('silver', 'midnight'))
);`,
          codeBreakdown: [
            { part: 'DECIMAL(10, 2)', label: '10 total digits with 2 digits after decimal point (exact financial math up to 99,999,999.99)', color: '#3b82f6' },
            { part: "ENUM('draft', 'published', 'archived')", label: 'Restricts values strictly to defined enumeration set, stored internally as 1-byte integer', color: '#10b981' },
            { part: 'metadata JSON', label: 'Stores structured JSON documents with built-in validation and JSON path querying', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Phone number ko INT mein store karna (Overflow + leading zeroes lost; use `VARCHAR(20)`)',
            '❌ Har column ko `VARCHAR(255)` bana dena bina soche (wastes temporary table memory in sorting operations)'
          ],
          miniChallenge: 'Ek `payments` table banao jisme `amount` DECIMAL(12,2), `status` ENUM, aur `gateway_payload` JSON ho.',
          quiz: {
            question: 'Financial transactions aur currency values store karne ke liye sabse recommended data type kaunsa hai?',
            options: ['FLOAT', 'DOUBLE', 'DECIMAL', 'BIGINT'],
            answer: 'DECIMAL',
            explanation: '`DECIMAL` exact fixed-point numerical representation provide karta hai jo floating-point rounding errors ko prevent karta hai.'
          },
          summary: [
            'Numeric types mein INT, BIGINT aur exact currency ke liye DECIMAL use hota hai',
            'VARCHAR variable string ke liye aur TEXT large body of content ke liye ideal hai',
            'TIMESTAMP UTC timestamp store karta hai jo server timezone transitions handle karta hai'
          ],
          flashcard: {
            q: '`TIMESTAMP` aur `DATETIME` mein kya difference hai?',
            a: '`TIMESTAMP` 4 bytes leta hai aur time ko UTC mein convert karke store karta hai (range: 1970 to 2038); `DATETIME` 8 bytes leta hai aur exact entered value bina timezone conversion ke store karta hai (range: 1000 to 9999).'
          }
        },
        {
          id: 'mysql-keys-constraints',
          title: 'Keys & Relational Constraints (PK, FK, UNIQUE, CHECK, DEFAULT & CASCADE)',
          emoji: '🔐',
          xpReward: 40,
          badgeName: 'Constraint Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Constraints database ke security guards hain! Agar user invalid ya duplicate data bheje toh database gate par hi rok dega! 🛡️"',
            hint: '💡 Masti Sir: "`ON DELETE CASCADE` ka matlab: agar baap (User) delete hua, toh uske bachhe (Orders/Comments) bhi automatically delete ho jayenge!"',
            success: '🎉 Masti Sir: "Referential integrity fully secured! Database corruption impossible ho gaya! 😎"',
            mistake: '😅 Masti Sir: "Foreign key lagate waqt dono tables ke columns ka data type same hona chahiye (e.g. dono INT ya dono BIGINT)!"'
          },
          englishDef: 'Constraints enforce relational data integrity at the database engine level. Key constraints include `PRIMARY KEY` (uniqueness + NOT NULL), `FOREIGN KEY` (referential integrity between child and parent tables with `ON DELETE CASCADE / SET NULL / RESTRICT`), `UNIQUE`, `NOT NULL`, `CHECK` (boolean validation rules), and `DEFAULT`.',
          hinglishExplain: 'Constraints database ke rules hote hain jo galat data aane se rokte hain. Foreign Key do tables ko jodti hai (jaise Orders table ka `user_id` Users table ke `id` ko point karta hai). `ON DELETE CASCADE` lagane se agar user delete hota hai toh uske saare orders automatically delete ho jaate hain taaki database mein koi orphan records na bachein.',
          funnyExample: {
            scenario: 'The Orphan Order Mystery:\n- User (id: 10) ne 5 pizza order kiye 🍕\n- Agar User 10 delete ho gaya par orders table mein `user_id = 10` reh gaya toh delivery boy kiske ghar jayega? 🛵❓\n- Solution: `FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE` — user delete hote hi orphan orders bhi safely clean!',
            punchline: 'Foreign Keys prevent ghost & orphan records!'
          },
          visualDiagram: {
            title: 'Parent-Child Foreign Key Relationship',
            nodes: [
              'Parent Table: users (id PK: 1, name: "Kabir")',
              'Foreign Key Link: orders.user_id -> users.id',
              'Child Table: orders (order_id PK: 101, user_id FK: 1, total: 1499)',
              'ON DELETE CASCADE: If User 1 deleted -> Order 101 automatically purged'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Constraint Validation in InnoDB Engine:',
            steps: [
              'Before row insertion, InnoDB checks UNIQUE B-Tree index for existing duplicates',
              'Foreign key check reads parent table clustered index to ensure parent record exists',
              'CHECK constraint evaluates conditional expression; throws Error 3819 if false'
            ]
          },
          code: `-- 1. Parent Table: Users
CREATE TABLE learners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  CONSTRAINT chk_age CHECK (age >= 13 AND age <= 100)
);

-- 2. Child Table: Enrollments with Foreign Key & Cascade Action
CREATE TABLE course_enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  learner_id INT NOT NULL,
  course_id INT NOT NULL,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  grade CHAR(2) DEFAULT 'NA',
  -- Enforce referential integrity
  CONSTRAINT fk_enrollment_learner
    FOREIGN KEY (learner_id) REFERENCES learners(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  -- Prevent duplicate enrollments in the same course
  CONSTRAINT uq_learner_course UNIQUE (learner_id, course_id)
);`,
          codeBreakdown: [
            { part: 'CONSTRAINT chk_age CHECK (age >= 13)', label: 'Enforces business logic at database engine layer: rejects users under 13', color: '#3b82f6' },
            { part: 'FOREIGN KEY (learner_id) REFERENCES learners(id)', label: 'Establishes referential integrity connecting child table to parent table primary key', color: '#10b981' },
            { part: 'ON DELETE CASCADE', label: 'Automatically purges child records when parent learner is deleted', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Foreign key column aur parent primary key column ka data type alag rakhna (e.g. parent BIGINT but child INT)',
            '❌ Orphan records create hone dena bina Foreign Key constraints lagaye'
          ],
          miniChallenge: 'Ek `comments` table create karo with `user_id` FK (CASCADE) aur `post_id` FK.',
          quiz: {
            question: 'Agar parent table ka row delete hone par child table ka corresponding `user_id` NULL set karna ho toh kaunsa clause use karenge?',
            options: ['ON DELETE CASCADE', 'ON DELETE SET NULL', 'ON DELETE RESTRICT', 'ON DELETE NO ACTION'],
            answer: 'ON DELETE SET NULL',
            explanation: '`ON DELETE SET NULL` child row ko delete karne ki jagah uske foreign key column ki value NULL kar deta hai.'
          },
          summary: [
            'Constraints database engine layer par data validity enforce karte hain',
            'Foreign Keys parent-child referential integrity maintain karte hain',
            'CASCADE, SET NULL aur RESTRICT deletion actions define karte hain'
          ],
          flashcard: {
            q: 'Composite Unique Constraint kya hota hai?',
            a: 'Jab do ya do se zyada columns ka combination unique hona chahiye (jaise `UNIQUE (learner_id, course_id)` taaki ek learner same course mein do baar enroll na ho sake).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: CRUD OPERATIONS, FILTERING & SORTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: CRUD Operations, Filtering & Sorting',
      lessons: [
        {
          id: 'mysql-crud-insert-select',
          title: 'CRUD: INSERT & SELECT Mastery (Bulk Inserts & Anti-Patterns)',
          emoji: '📝',
          xpReward: 40,
          badgeName: 'CRUD Operator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "SELECT ka matlab simple hai: Database bhai, mujhe ye wali information chahiye! Aur INSERT ka matlab: Naya record almari mein rakh do! 😎"',
            hint: '💡 Masti Sir: "Production code mein kabhi `SELECT *` mat likhna — sirf wahi columns maango jinki zaroorat hai!"',
            success: '🎉 Masti Sir: "Zabardast! Bulk insert aur selective queries speed se execute ho gayi! 🔥"',
            mistake: '😅 Masti Sir: "Single-row INSERT loop mein 10,000 baar mat chalana — bulk INSERT karo 1 query mein! 😂"'
          },
          englishDef: 'CRUD represents the four fundamental database operations: Create (`INSERT`), Read (`SELECT`), Update (`UPDATE`), and Delete (`DELETE`). Production best practices mandate avoiding `SELECT *` to conserve bandwidth and memory, and utilizing multi-row bulk `INSERT` statements to minimize round-trip network latency.',
          hinglishExplain: 'CRUD operations database ki backbone hain. `INSERT INTO` se naya record create hota hai (ek sath multiple rows bhi insert ki ja sakti hain). `SELECT` se data read hota hai. Production apps mein `SELECT *` avoid karna chahiye kyonki agar table mein 30 columns hain aur aapko sirf `name` aur `email` chahiye, toh faltu memory aur network bandwidth waste hoti hai.',
          funnyExample: {
            scenario: 'The Restaurant Menu Analogy:\n- `SELECT *` = Waiter se bolna "Menu ka har ek item mere table par le aao!" (Table bhar jayega, bill 50,000 aayega aur khana waste hoga! 🍔🍕🍜🍛)\n- `SELECT name, price` = Waiter se bolna "Sirf 1 Burger aur 1 Coke laao!" 🥤🍔',
            punchline: 'Never ask for the whole kitchen when you just want a burger!'
          },
          visualDiagram: {
            title: 'CRUD Data Flow Diagram',
            nodes: [
              'CREATE -> INSERT INTO table (col1, col2) VALUES (...)',
              'READ   -> SELECT col1, col2 FROM table WHERE ...',
              'UPDATE -> UPDATE table SET col1 = val WHERE id = ...',
              'DELETE -> DELETE FROM table WHERE id = ...'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Bulk INSERT vs Single INSERT Performance:',
            steps: [
              '1,000 single INSERTs = 1,000 network round trips + 1,000 transaction log commits (~15 seconds)',
              '1 multi-row INSERT with 1,000 tuples = 1 network packet + 1 single atomic redo log sync (~0.05 seconds)',
              'Bulk operations are 300x faster in production database workloads'
            ]
          },
          code: `-- 1. Bulk INSERT (Highly Optimized Multi-Row Tuple)
INSERT INTO users (username, email, xp_points, is_active)
VALUES 
  ('kabir_dev', 'kabir@codemasti.com', 1250, TRUE),
  ('riya_coder', 'riya@codemasti.com', 2100, TRUE),
  ('dev_singh', 'dev@codemasti.com', 850, TRUE),
  ('ananya_v', 'ananya@codemasti.com', 3400, FALSE);

-- 2. Specific Column Selection (Production Standard)
SELECT 
  id, 
  username, 
  xp_points 
FROM users;

-- 3. Targeted UPDATE
UPDATE users 
SET xp_points = xp_points + 100, is_active = TRUE 
WHERE username = 'kabir_dev';

-- 4. Safe DELETE
DELETE FROM users 
WHERE is_active = FALSE AND xp_points < 100;`,
          codeBreakdown: [
            { part: 'VALUES (...), (...), (...)', label: 'Multi-row bulk insertion batching multiple rows into a single atomic disk write', color: '#3b82f6' },
            { part: 'SELECT id, username, xp_points', label: 'Explicit column projection preventing unnecessary I/O on unneeded fields', color: '#10b981' },
            { part: 'SET xp_points = xp_points + 100', label: 'Atomic increment directly executed on database server preventing race conditions', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Bina `WHERE` clause ke `UPDATE` ya `DELETE` chala dena (saara data update/wipe ho jayega!)',
            '❌ Production API endpoints mein `SELECT *` use karna'
          ],
          miniChallenge: 'Ek query likho jo sabhi `is_active = TRUE` users ke `xp_points` mein 50 points add kare.',
          quiz: {
            question: 'Production backend APIs mein `SELECT *` use karna anti-pattern kyun mana jata hai?',
            options: [
              'Kyonki SELECT * SQL standard mein allowed nahi hai',
              'Kyonki ye unneeded data fetch karke memory, network bandwidth aur index efficiency waste karta hai',
              'Kyonki SELECT * se database crash ho jata hai',
              'Kyonki SELECT * sirf root user ke liye kaam karta hai'
            ],
            answer: 'Kyonki ye unneeded data fetch karke memory, network bandwidth aur index efficiency waste karta hai',
            explanation: '`SELECT *` saare columns (including large TEXT / JSON fields) load karta hai, jisse memory, network transfer aur covering index utilization degrade hota hai.'
          },
          summary: [
            'CRUD operations database mein data manage karne ke 4 pillars hain',
            'Bulk INSERT multi-row tuples use karke network I/O 100x reduce karta hai',
            'Explicit column projection production performance ke liye standard best-practice hai'
          ],
          flashcard: {
            q: '`UPDATE` query mein atomic increment (e.g. `xp = xp + 10`) ka kya fayda hai?',
            a: 'Ye database engine par atomically execute hota hai jisse do concurrent requests aane par race condition nahi hoti aur data accurately increment hota hai.'
          }
        },
        {
          id: 'mysql-where-logical-operators',
          title: 'Filtering with WHERE, Comparison & Logical Operators (AND, OR, NOT)',
          emoji: '🔍',
          xpReward: 40,
          badgeName: 'Query Filterer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "WHERE clause database ka magnifying glass hai! 10 lakh rows mein se wahi 5 rows nikaal kar layega jo aapko chahiye! 🔍"',
            hint: '💡 Masti Sir: "`AND` aur `OR` ko mix karte waqt parenthesis `( )` lagana zaroori hai, kyonki `AND` ki priority `OR` se zyada hoti hai!"',
            success: '🎉 Masti Sir: "Zabardast! Complex filtering condition ekdum accurate nikli! 🔥"',
            mistake: '😅 Masti Sir: "`status = \'active\' OR status = \'pending\' AND age > 20` bina brackets ke galat result dega kyonki AND pehle chalega!"'
          },
          englishDef: 'The `WHERE` clause filters rows based on conditional predicate evaluation before grouping or returning results. It supports comparison operators (`=`, `!=`, `<>`, `>`, `<`, `>=`, `<=`) and logical operators (`AND`, `OR`, `NOT`). In boolean operator precedence, `NOT` evaluates first, followed by `AND`, and finally `OR`.',
          hinglishExplain: '`WHERE` clause se hum records ko filter karte hain. Agar dono conditions match honi chahiye toh `AND`, koi ek match ho toh `OR`, aur condition reverse karni ho toh `NOT` use hota hai. Hamesha dhyan rakhein ki `AND` ki priority `OR` se high hoti hai, isliye jab dono mix hon toh parenthesis `( )` lagakar group karna zaroori hai.',
          funnyExample: {
            scenario: 'Club Entry Rules Analogy:\n- Condition: (VIP Pass OR Age >= 21) AND Has ID Card 🪪\n- Agar brackets na lagao: `VIP Pass OR Age >= 21 AND Has ID Card` -> VIP Pass wale bina ID card ke ghus jayenge kyonki `AND` pehle evaluate ho gaya!\n- Moral: Hamesha brackets `( )` use karo!',
            punchline: 'Parentheses save your logic from operator precedence traps!'
          },
          visualDiagram: {
            title: 'Logical Operator Precedence Hierarchy',
            nodes: [
              '1. Parentheses ( ) -> Highest Precedence',
              '2. Comparison Operators (=, !=, <, >, <=, >=)',
              '3. NOT Operator (Negation)',
              '4. AND Operator (Conjunction)',
              '5. OR Operator (Disjunction) -> Lowest Precedence'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How MySQL Evaluates WHERE Conditions:',
            steps: [
              'Optimizer uses available indexes on filtered columns to form range scans',
              'Evaluates index conditions first (Index Condition Pushdown)',
              'Filters remaining non-indexed predicates on fetched data pages',
              'Discards non-matching row pointers before building the final result buffer'
            ]
          },
          code: `-- 1. Basic Comparison Filtering
SELECT id, title, price, stock_quantity
FROM products
WHERE price >= 999.00 AND stock_quantity > 0;

-- 2. Complex Filtering with Operator Precedence & Parentheses
SELECT id, username, email, xp_points, role, is_active
FROM users
WHERE (role = 'mentor' OR role = 'admin')
  AND xp_points >= 2000
  AND is_active = TRUE;

-- 3. NOT Operator Negation
SELECT id, username, status
FROM learners
WHERE NOT (status = 'banned' OR status = 'suspended');`,
          codeBreakdown: [
            { part: "WHERE (role = 'mentor' OR role = 'admin')", label: 'Parenthesized group evaluated first, ensuring user matches either role before checking XP', color: '#3b82f6' },
            { part: 'AND xp_points >= 2000', label: 'Second required condition that both candidate roles must satisfy', color: '#10b981' },
            { part: 'WHERE NOT (...)', label: 'Negates the interior boolean match to exclude all restricted user states', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `AND` aur `OR` mix karte waqt parentheses `( )` omit kar dena',
            '❌ Not-equal ke liye `<>` aur `!=` dono valid hain par `==` likhna (Syntax Error)'
          ],
          miniChallenge: 'Ek query likho jo sabhi `price BETWEEN 500 AND 2000` wale products nikaale jo `category = "Tech"` mein hon.',
          quiz: {
            question: 'SQL expression `A OR B AND C` mein kaunsa operator pehle evaluate hoga?',
            options: ['A OR B', 'B AND C', 'Left to right evaluate hoga', 'Random order mein evaluate hoga'],
            answer: 'B AND C',
            explanation: 'SQL operator precedence rules ke according `AND` ki priority `OR` se zyada hoti hai, isliye `B AND C` pehle evaluate hoga jab tak parentheses na lage hon.'
          },
          summary: [
            'WHERE clause row-level filtering provide karta hai',
            'Comparison operators (=, !=, <, >, <=, >=) range aur equality check karte hain',
            'Parentheses `( )` ambiguous logical operator precedence errors ko prevent karte hain'
          ],
          flashcard: {
            q: '`!=` aur `<>` mein kya difference hai?',
            a: 'Dono functional roop se identical hain aur "Not Equal To" check karte hain. `<>` ISO/ANSI SQL standard operator hai, jabki `!=` modern dialect support hai.'
          }
        },
        {
          id: 'mysql-in-between-like',
          title: 'Pattern Matching with IN, BETWEEN & LIKE Wildcards',
          emoji: '🎯',
          xpReward: 40,
          badgeName: 'Pattern Hunter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Search bar banana hai? E-Commerce website par products dhoondhne hain? LIKE, IN aur BETWEEN aapke best friends hain! 🎯"',
            hint: '💡 Masti Sir: "`LIKE \'%code%\'` index bypass karke slow ho jata hai, par `LIKE \'code%\'` index use karke super-fast chalta hai! ⚡"',
            success: '🎉 Masti Sir: "Zabardast! Search queries aur range filtering master ho gayi! 🔥"',
            mistake: '😅 Masti Sir: "`BETWEEN 10 AND 20` dono 10 aur 20 ko include karta hai (inclusive hota hai)!"'
          },
          englishDef: 'Advanced filtering predicates include `IN` (matches any value in a defined list), `BETWEEN ... AND` (inclusive range evaluation across numbers and dates), and `LIKE` (pattern matching with `%` matching zero or more characters and `_` matching exactly one character).',
          hinglishExplain: 'Multiple OR conditions likhne ki jagah hum `IN (\'a\', \'b\', \'c\')` use karte hain. Range check karne ke liye `BETWEEN min AND max` use hota hai (ye dono boundaries ko include karta hai). Text search ke liye `LIKE` operator use hota hai jahan `%` kitne bhi characters represent karta hai aur `_` exact ek single character ko match karta hai.',
          funnyExample: {
            scenario: 'Wildcard Search Analogy:\n- `LIKE \'K%\'` = Sabhi naam jo "K" se start hote hain (Kabir, Karan, Kush) 🔤\n- `LIKE \'%dev%\'` = Jahan kahin bhi "dev" ho (dev_singh, webdeveloper, software_dev) 💻\n- `LIKE \'R_m\'` = Exact 3 letters jahan middle mein koi bhi letter ho (Ram, Rom, Rim) 🎯',
            punchline: '% = Infinite characters, _ = Exactly one character!'
          },
          visualDiagram: {
            title: 'SQL Pattern Matching Operators',
            nodes: [
              'IN: role IN (\'admin\', \'mentor\', \'author\') -> Clean replacement for multiple ORs',
              'BETWEEN: created_at BETWEEN \'2026-01-01\' AND \'2026-12-31\' -> Inclusive date/number range',
              'LIKE \'A%\': Prefix match (Index friendly)',
              'LIKE \'%A%\': Substring match (Full table scan)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'B-Tree Indexing on LIKE Wildcards:',
            steps: [
              '`LIKE \'apple%\'` uses B-Tree index range scan because the leading character is fixed',
              '`LIKE \'%apple\'` cannot utilize B-Tree index prefix search; forces a full table scan',
              'For deep full-text substring queries across large datasets, use MySQL FULLTEXT index'
            ]
          },
          code: `-- 1. IN Operator (Clean replacement for chained OR clauses)
SELECT id, username, role, xp_points
FROM users
WHERE role IN ('admin', 'instructor', 'mentor')
  AND city IN ('Bengaluru', 'Delhi', 'Mumbai', 'Hyderabad');

-- 2. BETWEEN Operator (Inclusive range for dates and numbers)
SELECT id, title, price, created_at
FROM courses
WHERE price BETWEEN 499.00 AND 2999.00
  AND created_at BETWEEN '2026-01-01 00:00:00' AND '2026-08-20 23:59:59';

-- 3. LIKE Wildcard Search
-- Find all users whose email ends with @codemasti.com
SELECT id, username, email
FROM users
WHERE email LIKE '%@codemasti.com';

-- 4. Single-character wildcard (_)
-- Match codes like 'CS101', 'CS102', 'CS109'
SELECT id, course_code, title
FROM courses
WHERE course_code LIKE 'CS10_';`,
          codeBreakdown: [
            { part: "WHERE role IN ('admin', 'instructor', 'mentor')", label: 'Evaluates against candidate set; allows query optimizer to use index lookups', color: '#3b82f6' },
            { part: 'WHERE price BETWEEN 499.00 AND 2999.00', label: 'Evaluates inclusive boundary condition (equivalent to price >= 499 AND price <= 2999)', color: '#10b981' },
            { part: "LIKE '%@codemasti.com'", label: 'Suffix wildcard matching any characters preceding domain string', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Sochna ki `BETWEEN 10 AND 20` mein 20 exclude hoga (it is 100% INCLUSIVE)',
            '❌ High-traffic table par `WHERE name LIKE "%query%"` chalana bina indexing strategy ke'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise users dhoondhe jinka username "dev_" se start hota ho.',
          quiz: {
            question: 'SQL LIKE query mein exact 1 single character match karne ke liye kaunsa wildcard symbol use hota hai?',
            options: ['%', '_ (underscore)', '*', '?'],
            answer: '_ (underscore)',
            explanation: '`_` (underscore) exact ek single character match karta hai, jabki `%` zero ya zyada characters match karta hai.'
          },
          summary: [
            'IN operator multiple OR conditions ko clean and performant banata hai',
            'BETWEEN inclusive ranges evaluate karta hai numeric aur datetime columns par',
            'LIKE pattern matching provide karta hai (% multiple chars, _ single char)'
          ],
          flashcard: {
            q: '`WHERE col NOT IN (1, 2, NULL)` query empty result kyun return karti hai?',
            a: 'SQL three-valued logic mein kisi value ko `!= NULL` compare karne par `UNKNOWN` aata hai, isliye `NOT IN` ke andar agar koi value NULL ho toh poora expression kabhi TRUE nahi hota.'
          }
        },
        {
          id: 'mysql-null-three-valued-logic',
          title: 'NULL & Three-Valued Logic (TRUE, FALSE & UNKNOWN Deep Dive)',
          emoji: '❓',
          xpReward: 40,
          badgeName: 'Logic Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "NULL ko zero ya empty string samajh liya? Bhai ye database hai, maths ka classroom nahi! NULL ka matlab hai \'Unknown / Missing Data\'! 😂"',
            hint: '💡 Masti Sir: "NULL ke sath kabhi `= NULL` mat likhna — hamesha `IS NULL` ya `IS NOT NULL` use karo!"',
            success: '🎉 Masti Sir: "Three-Valued Logic master ho gayi! Ab SQL interviewers tumhein trap nahi kar payenge! 😎"',
            mistake: '😅 Masti Sir: "`SELECT * WHERE age = NULL;` humesha 0 rows dega kyonki NULL = NULL ka result UNKNOWN hota hai!"'
          },
          englishDef: 'In SQL, `NULL` represents missing, unknown, or inapplicable information. SQL implements Three-Valued Logic (3VL) with truth values `TRUE`, `FALSE`, and `UNKNOWN`. Because `NULL` is not a value, equality comparisons (`col = NULL` or `NULL = NULL`) evaluate to `UNKNOWN` rather than `TRUE`, necessitating `IS NULL` and `IS NOT NULL`.',
          hinglishExplain: 'SQL mein `NULL` ka matlab hota hai "Information unknown ya missing hai". NULL na toh 0 hai, na empty string `""`, na hi false. Agar do anjaan logon ki jeb mein kitne paise hain ye kisi ko nahi pata (dono NULL hain), toh aap ye nahi keh sakte ki dono ke paas barabar paise hain! Isliye `NULL = NULL` ka answer TRUE nahi balki `UNKNOWN` hota hai.',
          funnyExample: {
            scenario: 'The Mystery Box Analogy:\n- Box A has unknown contents (NULL) 📦❓\n- Box B has unknown contents (NULL) 📦❓\n- Question: "Kya Box A aur Box B mein exactly same cheez hai?"\n- Answer: "Pata nahi! (UNKNOWN)"\n- Moral: Isliye `NULL = NULL` hamesha UNKNOWN deta hai!',
            punchline: 'NULL is not equal to anything, not even another NULL!'
          },
          visualDiagram: {
            title: 'SQL Three-Valued Logic Truth Table (AND / OR)',
            nodes: [
              'TRUE AND UNKNOWN  -> UNKNOWN (Depends on unknown)',
              'FALSE AND UNKNOWN -> FALSE (Already false!)',
              'TRUE OR UNKNOWN   -> TRUE (Already true!)',
              'FALSE OR UNKNOWN  -> UNKNOWN (Depends on unknown)',
              'NOT UNKNOWN       -> UNKNOWN'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'WHERE Clause 3VL Filtering Rule:',
            steps: [
              'The WHERE clause ONLY returns rows where the condition evaluates strictly to TRUE',
              'Rows evaluating to FALSE or UNKNOWN are completely discarded from the result set',
              'Aggregate functions (SUM, AVG, MIN, MAX) automatically ignore NULL values; COUNT(*) counts all rows'
            ]
          },
          code: `-- 1. Correct vs Incorrect NULL checking
-- INCORRECT (Will return 0 rows):
-- SELECT * FROM users WHERE phone_number = NULL;

-- CORRECT:
SELECT id, username, email, phone_number
FROM users
WHERE phone_number IS NULL;

-- 2. Handling NULL with COALESCE & IFNULL
-- IFNULL(expr, default) -> MySQL specific
-- COALESCE(val1, val2, val3, default) -> ANSI standard
SELECT 
  id, 
  username, 
  IFNULL(phone_number, 'Not Provided') AS display_phone,
  COALESCE(alternate_email, email, 'no-email@codemasti.com') AS contact_email
FROM users;

-- 3. Sorting with NULL values (NULLS appear first in ASC by default in MySQL)
SELECT id, username, phone_number
FROM users
ORDER BY phone_number ASC;`,
          codeBreakdown: [
            { part: 'WHERE phone_number IS NULL', label: 'Dedicated ANSI operator specifically designed to test for presence of missing/unassigned data', color: '#3b82f6' },
            { part: "IFNULL(phone_number, 'Not Provided')", label: 'Returns alternate fallback string if phone_number column holds NULL', color: '#10b981' },
            { part: 'COALESCE(alternate_email, email, ...)', label: 'Evaluates arguments in sequence and returns the first non-NULL value found', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `WHERE column = NULL` likhna instead of `WHERE column IS NULL`',
            '❌ `COUNT(column)` aur `COUNT(*)` mein confuse hona (`COUNT(col)` ignores NULLs; `COUNT(*)` counts total rows)'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise users dikhaye jinka `avatar_url IS NOT NULL` ho aur missing bio par "No bio" print kare.',
          quiz: {
            question: 'SQL query `SELECT * FROM users WHERE NULL = NULL;` chalane par kya return hoga?',
            options: ['Sabhi users return honge', '0 rows return hongi (Empty set)', 'Error aayega', 'Sirf wo users jinki primary key NULL hai'],
            answer: '0 rows return hongi (Empty set)',
            explanation: '`NULL = NULL` expression `UNKNOWN` evaluate karta hai. SQL WHERE clause sirf wahi rows return karta hai jahan condition `TRUE` ho, isliye empty set aayega.'
          },
          summary: [
            'NULL missing/unknown value represent karta hai na ki zero ya empty string',
            'Three-Valued Logic mein TRUE, FALSE aur UNKNOWN truth values hoti hain',
            'COALESCE aur IFNULL functions NULL values ke liye safe fallback defaults provide karte hain'
          ],
          flashcard: {
            q: '`COALESCE` function kaise kaam karta hai?',
            a: '`COALESCE(val1, val2, val3...)` list of arguments mein se pehli non-NULL value return karta hai. Agar saare NULL hon toh NULL deta hai.'
          }
        },
        {
          id: 'mysql-order-limit-distinct',
          title: 'Sorting, Pagination & Distinct (ORDER BY, LIMIT, OFFSET & Aliases)',
          emoji: '📊',
          xpReward: 40,
          badgeName: 'Pagination Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Leaderboard banana ho ya Infinite Scroll pagination — ORDER BY aur LIMIT ke bina koi modern app nahi chal sakti! 😎"',
            hint: '💡 Masti Sir: "Deep pagination mein `LIMIT 1000000, 10` bohot slow ho jata hai! Keyset pagination (Cursor pagination) use karo!"',
            success: '🎉 Masti Sir: "Zabardast! High-performance pagination aur clean sorting master ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "`ORDER BY` specify kiye bina `LIMIT` mat lagana — bina sort ke database kisi bhi random order mein rows return kar sakta hai!"'
          },
          englishDef: '`ORDER BY` sorts result sets in ascending (`ASC`, default) or descending (`DESC`) order across single or multiple columns. `LIMIT offset, count` restricts returned row count for pagination. `DISTINCT` eliminates duplicate rows from results, and `AS` defines column and table aliases.',
          hinglishExplain: '`ORDER BY` se data sort hota hai (jaise highest XP wale users pehle dikhana via `ORDER BY xp_points DESC`). `LIMIT` aur `OFFSET` pagination ke liye use hote hain (e.g. `LIMIT 10 OFFSET 20` page 3 ke 10 records lata hai). `DISTINCT` duplicate values ko hata kar unique list deta hai.',
          funnyExample: {
            scenario: 'Leaderboard Analogy:\n- Total 1,00,000 Gamers 🎮\n- `ORDER BY score DESC LIMIT 3` -> Gold, Silver, Bronze trophy winners! 🥇🥈🥉\n- Bina `ORDER BY` ke: Database koi bhi 3 random players utha ke trophy de dega! 😂',
            punchline: 'Always combine LIMIT with ORDER BY for predictable results!'
          },
          visualDiagram: {
            title: 'Offset Pagination vs Keyset (Cursor) Pagination',
            nodes: [
              'Offset Pagination: LIMIT 20 OFFSET 100000 -> Scans 100,020 rows and discards 100,000 (Slow I/O)',
              'Keyset Pagination: WHERE id > 100000 ORDER BY id ASC LIMIT 20 -> Direct B-Tree Index Jump (Instant O(1))'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Sorting Engine Internals (Filesort):',
            steps: [
              'If ORDER BY column is indexed, InnoDB traverses B-Tree index in sorted order (Zero sort cost)',
              'If column is not indexed, MySQL allocates memory buffer (sort_buffer_size) and performs Filesort algorithm',
              'For huge datasets exceeding sort_buffer, temporary merge sort files are written to disk'
            ]
          },
          code: `-- 1. Multi-Column Sorting
-- Sort by role ASC, then highest XP points DESC
SELECT 
  id, 
  username, 
  role, 
  xp_points 
FROM users
ORDER BY role ASC, xp_points DESC;

-- 2. Pagination (Page 2: Page size 10, offset 10)
SELECT 
  id, 
  title, 
  price 
FROM courses
ORDER BY price ASC
LIMIT 10 OFFSET 10;
-- Equivalent MySQL syntax: LIMIT 10, 10; (offset, count)

-- 3. DISTINCT Unique Values
SELECT DISTINCT category, level
FROM courses
ORDER BY category;

-- 4. Column and Table Aliases (AS)
SELECT 
  u.username AS learner_name,
  u.xp_points AS score
FROM users AS u
WHERE u.xp_points > 1000;`,
          codeBreakdown: [
            { part: 'ORDER BY role ASC, xp_points DESC', label: 'Primary sort on role alphabetically, tie-breaker sort on xp_points numerically descending', color: '#3b82f6' },
            { part: 'LIMIT 10 OFFSET 10', label: 'Skips first 10 records and fetches the subsequent 10 records for page 2', color: '#10b981' },
            { part: 'SELECT DISTINCT category', label: 'Scans and deduplicates rows returning only unique category values', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Deep pagination (`LIMIT 500000, 10`) mein heavy performance degradation ignore karna',
            '❌ `SELECT DISTINCT col1, col2` mein sochna ki sirf col1 distinct hoga (DISTINCT applies to the entire row tuple)'
          ],
          miniChallenge: 'Top 5 highest priced courses nikaalo with `ORDER BY price DESC LIMIT 5`.',
          quiz: {
            question: 'Agar page size 20 ho aur aapko Page 4 ka data fetch karna ho, toh LIMIT aur OFFSET kya hoga?',
            options: ['LIMIT 20 OFFSET 60', 'LIMIT 20 OFFSET 80', 'LIMIT 4 OFFSET 20', 'LIMIT 60 OFFSET 20'],
            answer: 'LIMIT 20 OFFSET 60',
            explanation: 'Page 4 ke liye offset formula hota hai `(Page - 1) * PageSize = (4 - 1) * 20 = 60`. Isliye `LIMIT 20 OFFSET 60`.'
          },
          summary: [
            'ORDER BY ASC/DESC result sorting provide karta hai',
            'LIMIT aur OFFSET standard UI pagination build karne ke liye use hote hain',
            'DISTINCT row tuples mein se duplicate entries eliminate karta hai'
          ],
          flashcard: {
            q: 'Keyset (Cursor-based) pagination OFFSET pagination se fast kyun hoti hai?',
            a: 'Keyset pagination `WHERE id > last_seen_id ORDER BY id LIMIT 10` use karti hai jo B-Tree index par seedha point karti hai bina pichle hazaron rows ko scan aur discard kiye.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: SQL FUNCTIONS, AGGREGATIONS & GROUPING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Built-in SQL Functions & Grouping',
      lessons: [
        {
          id: 'mysql-scalar-functions',
          title: 'Built-in SQL Functions (String, Numeric & Date Calculations)',
          emoji: '🛠️',
          xpReward: 40,
          badgeName: 'Function Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Data ko format karne ke liye backend server par 10 line ka JavaScript/Python code likhne ki zaroorat nahi hai — SQL ke built-in functions 1 microsecond mein kar dete hain! 😎"',
            hint: '💡 Masti Sir: "Date differences ke liye `DATEDIFF(date1, date2)` use karo aur text jodane ke liye `CONCAT(first, \' \', last)`!"',
            success: '🎉 Masti Sir: "Scalar functions mastered! Formatting aur date manipulation ekdum crisp ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "`WHERE YEAR(created_at) = 2026` mat likhna — function column par lagane se index scan toot jata hai! Range query use karo!"'
          },
          englishDef: 'MySQL provides a rich suite of built-in scalar functions operating on individual row values across Strings (`CONCAT`, `LOWER`, `UPPER`, `LENGTH`, `TRIM`, `SUBSTRING`, `REPLACE`), Numerics (`ROUND`, `CEIL`, `FLOOR`, `ABS`, `MOD`), and Dates (`NOW`, `CURDATE`, `DATE`, `YEAR`, `DATEDIFF`, `DATE_ADD`, `DATE_SUB`).',
          hinglishExplain: 'Scalar functions har row ke data ko transform karte hain. String functions naam ko format ya uppercase/lowercase karne ke kaam aate hain. Date functions se hum orders kab aaye, expiry date kab hai (`DATE_ADD`), ya do dates ke beech kitne din ka gap hai (`DATEDIFF`) calculate karte hain.',
          funnyExample: {
            scenario: 'User Profile Formatter:\n- Raw DB Data: first_name: "  kAbIr  ", last_name: "sHaRmA"\n- Cleaned with SQL: `CONCAT(UPPER(SUBSTRING(TRIM(first_name), 1, 1)), LOWER(SUBSTRING(TRIM(first_name), 2)), \' \', ...)`\n- Result: "Kabir Sharma" 🎩✨',
            punchline: 'Clean and format messy user data directly inside the database query!'
          },
          visualDiagram: {
            title: 'MySQL Built-in Functions Categories',
            nodes: [
              'String: CONCAT(), LOWER(), UPPER(), TRIM(), SUBSTRING(), REPLACE(), LENGTH()',
              'Numeric: ROUND(price, 2), CEIL(), FLOOR(), ABS(), MOD(a, b)',
              'Date/Time: NOW(), CURDATE(), DATEDIFF(d1, d2), DATE_ADD(d, INTERVAL 7 DAY), DATE_SUB()'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Sargable Queries & Function Performance:',
            steps: [
              'Non-Sargable: `WHERE YEAR(created_at) = 2026` applies function to every single row, breaking B-Tree index',
              'Sargable: `WHERE created_at >= \'2026-01-01\' AND created_at < \'2027-01-01\'` uses direct index range scan',
              'Always keep column clean on the left-hand side of WHERE comparisons'
            ]
          },
          code: `-- 1. String Functions (Formatting names & handles)
SELECT 
  id,
  CONCAT(first_name, ' ', last_name) AS full_name,
  LOWER(TRIM(email)) AS clean_email,
  UPPER(role) AS role_badge,
  LENGTH(username) AS char_count,
  REPLACE(bio, 'bad_word', '***') AS moderated_bio
FROM users;

-- 2. Numeric Calculations
SELECT 
  title,
  price,
  ROUND(price * 0.82, 2) AS discounted_price,  -- 18% off rounded to 2 decimals
  CEIL(price) AS round_up_price,
  FLOOR(price) AS round_down_price
FROM courses;

-- 3. Date & Time Analytics (Orders dashboard)
SELECT 
  order_id,
  total_amount,
  created_at,
  NOW() AS current_system_time,
  DATEDIFF(NOW(), created_at) AS days_since_order,
  DATE_ADD(created_at, INTERVAL 7 DAY) AS return_window_expiry
FROM orders;`,
          codeBreakdown: [
            { part: "CONCAT(first_name, ' ', last_name)", label: 'Concatenates multiple string tokens into a single clean unified full name', color: '#3b82f6' },
            { part: 'ROUND(price * 0.82, 2)', label: 'Calculates discounted value with strict two-decimal rounding precision', color: '#10b981' },
            { part: 'DATE_ADD(created_at, INTERVAL 7 DAY)', label: 'Computes future expiration milestone timestamp by adding interval', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Indexed column par function wrap karna `WHERE SUBSTRING(name, 1, 1) = "A"` (destroys index lookup)',
            '❌ `DATEDIFF(date1, date2)` mein order ulta likhna (returns negative numbers)'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise orders select kare jo pichle 30 dino mein place hue hon (`DATEDIFF(NOW(), created_at) <= 30`).',
          quiz: {
            question: 'Date mein 30 din add karke expiry date calculate karne ke liye kaunsa function use hota hai?',
            options: ['DATE_PLUS(date, 30)', 'DATE_ADD(date, INTERVAL 30 DAY)', 'ADDDATE_DAYS(date, 30)', 'DATE_EXTEND(date, 30)'],
            answer: 'DATE_ADD(date, INTERVAL 30 DAY)',
            explanation: 'MySQL mein `DATE_ADD(date, INTERVAL 30 DAY)` standard syntax hai date calculations ke liye.'
          },
          summary: [
            'String functions text cleaning aur formatting provide karte hain',
            'Numeric functions rounding aur math operations execute karte hain',
            'Date functions interval arithmetic aur time differences handle karte hain'
          ],
          flashcard: {
            q: '`Sargable query` ka kya matlab hota hai?',
            a: 'Sargable (Search Argument Able) query wo hoti hai jisme WHERE clause mein column par koi function nahi laga hota, jisse database B-Tree index ka direct use kar sake.'
          }
        },
        {
          id: 'mysql-aggregate-group-having',
          title: 'Aggregate Functions, GROUP BY & HAVING (WHERE vs HAVING)',
          emoji: '📈',
          xpReward: 40,
          badgeName: 'Data Aggregator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ek ek row padhna band karo, poori company ka total revenue, average salary, aur department-wise metrics nikaalna seekho! GROUP BY + HAVING ka kamaal dekho! 📊"',
            hint: '💡 Masti Sir: "WHERE individual rows ko filter karta hai group banne se PEHLE; HAVING aggregated groups ko filter karta hai group banne ke BAAD!"',
            success: '🎉 Masti Sir: "Analytics hero unlocked! Category-wise sales reports instant generate ho gayi! 🔥"',
            mistake: '😅 Masti Sir: "`WHERE AVG(salary) > 50000` likhna sabse common mistake hai! Aggregate functions par filter lagane ke liye `HAVING` use karo!"'
          },
          englishDef: 'Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) compute a single summary value across multiple rows. `GROUP BY` partitions data into summary groups matching distinct column values. The `HAVING` clause filters aggregated grouped results, unlike `WHERE` which filters raw rows before aggregation.',
          hinglishExplain: 'Aggregate functions hazaron rows ka summary nikaalte hain: `COUNT` rows ginta hai, `SUM` total karta hai, `AVG` average nikaalta hai, `MIN`/`MAX` lowest/highest value dete hain. `GROUP BY` se hum category-wise ya city-wise grouping karte hain. Sabse critical concept: `WHERE` table ke raw rows filter karta hai, jabki `HAVING` calculated groups par filter lagata hai.',
          funnyExample: {
            scenario: 'Cricket Tournament Stats:\n- Raw Table: Player Name, Team, Runs in Match 🏏\n- `GROUP BY Team` = Har team ke saare players ke runs jod do\n- `SELECT Team, SUM(Runs) AS TotalRuns`\n- `HAVING SUM(Runs) > 300` = Sirf wahi teams dikhao jinhone 300+ runs banaye! 🏆',
            punchline: 'WHERE filters players before the match; HAVING filters teams after calculating total scores!'
          },
          visualDiagram: {
            title: 'SQL Query Logical Execution Order',
            nodes: [
              '1. FROM & JOINs (Identify data source)',
              '2. WHERE (Filter individual rows)',
              '3. GROUP BY (Aggregate rows into buckets)',
              '4. HAVING (Filter aggregated buckets)',
              '5. SELECT & Window Functions (Compute columns)',
              '6. DISTINCT (Deduplicate)',
              '7. ORDER BY (Sort final results)',
              '8. LIMIT / OFFSET (Slice output)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How MySQL Processes GROUP BY & Aggregation:',
            steps: [
              'Filters input rows through WHERE condition predicate',
              'Creates temporary in-memory hash table with grouping keys',
              'Accumulates COUNT, SUM, MIN, MAX into hash buckets',
              'Evaluates HAVING conditions on hash bucket results and discards non-matching groups'
            ]
          },
          code: `-- 1. Basic Aggregate Metrics
SELECT 
  COUNT(*) AS total_learners,
  SUM(xp_points) AS total_community_xp,
  AVG(xp_points) AS average_xp,
  MIN(xp_points) AS lowest_xp,
  MAX(xp_points) AS top_score
FROM users;

-- 2. Category-wise Course Analytics (GROUP BY)
SELECT 
  category,
  COUNT(id) AS total_courses,
  AVG(price) AS avg_course_price,
  MAX(price) AS highest_price
FROM courses
WHERE is_published = TRUE
GROUP BY category;

-- 3. Advanced GROUP BY + HAVING (Departments with high average salary)
SELECT 
  department,
  COUNT(emp_id) AS team_size,
  AVG(salary) AS avg_salary
FROM employees
WHERE is_active = TRUE
GROUP BY department
HAVING COUNT(emp_id) >= 5 AND AVG(salary) > 75000
ORDER BY avg_salary DESC;`,
          codeBreakdown: [
            { part: 'GROUP BY department', label: 'Groups employee rows by department key before calculating aggregate averages', color: '#3b82f6' },
            { part: 'HAVING COUNT(emp_id) >= 5', label: 'Filters aggregated groups: requires team size of at least 5 members', color: '#10b981' },
            { part: 'HAVING AVG(salary) > 75000', label: 'Discards departments whose calculated average salary does not exceed 75,000 threshold', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `WHERE` clause ke andar aggregate functions use karna (e.g. `WHERE SUM(price) > 500` -> Syntax Error; use `HAVING`)',
            '❌ Non-aggregated columns ko SELECT list mein rakhna jo `GROUP BY` clause mein included nahi hain (fails in `ONLY_FULL_GROUP_BY` mode)'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise cities nikaale jahan 10 se zyada users rehte hon (`GROUP BY city HAVING COUNT(*) > 10`).',
          quiz: {
            question: 'SQL query execution order mein `WHERE` aur `HAVING` kis sequence mein chalte hain?',
            options: [
              'WHERE group banne se pehle chalta hai, HAVING group banne ke baad chalta hai',
              'HAVING pehle chalta hai, WHERE baad mein',
              'Dono bilkul same time par chalte hain',
              'HAVING sirf subqueries mein chalta hai'
            ],
            answer: 'WHERE group banne se pehle chalta hai, HAVING group banne ke baad chalta hai',
            explanation: 'Logical query execution order mein `WHERE` pehle rows filter karta hai, fir `GROUP BY` grouping karta hai, aur fir `HAVING` aggregated groups ko filter karta hai.'
          },
          summary: [
            'COUNT, SUM, AVG, MIN, MAX core aggregate functions hain',
            'GROUP BY distinct values ke basis par summary buckets create karta hai',
            'WHERE individual rows filter karta hai; HAVING aggregated groups filter karta hai'
          ],
          flashcard: {
            q: '`COUNT(*)` aur `COUNT(column_name)` mein kya fark hai?',
            a: '`COUNT(*)` table ki total rows count karta hai (including rows with NULL values); `COUNT(column_name)` sirf wahi rows count karta hai jahan specified column NULL nahi hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: MASTERING RELATIONAL JOINS & RELATIONSHIPS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Mastering Relational JOINs & Multi-Table Relationships',
      lessons: [
        {
          id: 'mysql-joins-relationships',
          title: 'Foreign Keys & SQL JOINs (INNER, LEFT, RIGHT, CROSS & Emulating FULL OUTER)',
          emoji: '🔗',
          xpReward: 40,
          badgeName: 'JOIN Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Do tables ki aapas mein dosti karani hai? JOIN bulao! Relational database ki asli taakat JOINs mein hi hai! 😎"',
            hint: '💡 Masti Sir: "INNER JOIN sirf common matching dosti dikhata hai, LEFT JOIN left table ke sabhi doston ko preserve karta hai chahe right table khali ho!"',
            success: '🎉 Masti Sir: "Zabardast! Table relationships aur JOINs crystal clear ho gaye! 🔥"',
            mistake: '😅 Masti Sir: "MySQL mein native `FULL OUTER JOIN` keyword nahi hota — uske liye LEFT JOIN aur RIGHT JOIN ko `UNION` karte hain!"'
          },
          englishDef: 'SQL JOIN clauses combine rows from two or more tables based on a related column between them (Foreign Key). Types include `INNER JOIN` (returns rows with matches in both tables), `LEFT JOIN` (returns all rows from left table + matched right rows), `RIGHT JOIN` (all right rows + matched left rows), `CROSS JOIN` (Cartesian product), and emulated `FULL OUTER JOIN` via `UNION`.',
          hinglishExplain: 'Relational databases ka sabse powerful feature JOINs hain. Ek table mein Users hain, dusre mein Orders hain. Dono ko `user_id` foreign key se joda jata hai. INNER JOIN sirf wahi users lata hai jinhone order place kiya hai. LEFT JOIN sabhi users lata hai — agar kisi user ne koi order nahi kiya toh order columns mein `NULL` dikhayi deta hai. MySQL mein `FULL OUTER JOIN` keyword nahi hota, isliye LEFT JOIN aur RIGHT JOIN ko `UNION` karke emulate karte hain.',
          funnyExample: {
            scenario: 'The Party Invitation Analogy:\n- Table 1: Students Invited (Rahul, Priya, Dev, Sneha) 🎟️\n- Table 2: Gate Entry Logs (Rahul, Priya) 🚪\n- INNER JOIN = Sirf wo jo party ke andar pahuche (Rahul & Priya) 🥳\n- LEFT JOIN = Sabhi invited students, chahe aaye hon ya ghar par so rahe hon (Dev & Sneha entry = NULL)! 😴',
            punchline: 'INNER JOIN = Mutual intersection, LEFT JOIN = Preserves the whole left guest list!'
          },
          visualDiagram: {
            title: 'SQL JOIN Types Venn Diagram Representation',
            nodes: [
              'INNER JOIN: Intersection of Table A and Table B (A ∩ B)',
              'LEFT JOIN: All of Table A + Overlap with Table B (A + [A ∩ B])',
              'RIGHT JOIN: All of Table B + Overlap with Table A (B + [A ∩ B])',
              'FULL OUTER JOIN (UNION): Table A LEFT JOIN Table B  UNION  Table A RIGHT JOIN Table B'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'MySQL Join Algorithms Under the Hood:',
            steps: [
              'Nested Loop Join (NLJ): Reads each row from driving table and probes indexed child table',
              'Block Nested Loop (BNL) / Hash Join: Used when join columns lack indexes; builds hash table in join_buffer_size',
              'Always index foreign key join columns to ensure fast index lookups (O(log N))'
            ]
          },
          code: `-- 1. INNER JOIN (Only users who have active enrollments)
SELECT 
  u.id AS student_id,
  u.username,
  e.course_id,
  e.enrolled_at
FROM users u
INNER JOIN course_enrollments e 
  ON u.id = e.learner_id;

-- 2. LEFT JOIN (Find all users + detect who has NEVER enrolled)
SELECT 
  u.id,
  u.username,
  u.email,
  e.course_id,
  IFNULL(e.course_id, 'No Courses') AS enrollment_status
FROM users u
LEFT JOIN course_enrollments e 
  ON u.id = e.learner_id;

-- 3. Anti-Join: Users who NEVER enrolled in any course
SELECT u.id, u.username, u.email
FROM users u
LEFT JOIN course_enrollments e 
  ON u.id = e.learner_id
WHERE e.id IS NULL;

-- 4. Emulating FULL OUTER JOIN in MySQL using UNION
SELECT u.username, e.course_id
FROM users u
LEFT JOIN course_enrollments e ON u.id = e.learner_id
UNION
SELECT u.username, e.course_id
FROM users u
RIGHT JOIN course_enrollments e ON u.id = e.learner_id;`,
          codeBreakdown: [
            { part: 'INNER JOIN course_enrollments e ON u.id = e.learner_id', label: 'Matches parent primary key with child foreign key; discards non-matching rows', color: '#3b82f6' },
            { part: 'LEFT JOIN course_enrollments e ON u.id = e.learner_id', label: 'Preserves all user records even when no enrollment record exists in child table', color: '#10b981' },
            { part: 'WHERE e.id IS NULL', label: 'Anti-join pattern: isolates unmatched left-table records', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `ON` clause bhool jana (causes accidental Cartesian Product / Cross Join with millions of duplicate rows)',
            '❌ MySQL mein `FULL OUTER JOIN` keyword likhna (causes Syntax Error; use UNION of LEFT + RIGHT)'
          ],
          miniChallenge: 'Ek query likho jo sabhi courses aur unke enrolled students ki count nikaale (use `LEFT JOIN` + `COUNT(e.id)`).',
          quiz: {
            question: 'Kaunsa JOIN left table ke saare rows return karta hai, chahe right table mein matching row ho ya na ho?',
            options: ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'RIGHT JOIN'],
            answer: 'LEFT JOIN',
            explanation: '`LEFT JOIN` left table ke 100% rows include karta hai; matching right rows na milne par right columns mein `NULL` populate karta hai.'
          },
          summary: [
            'Foreign keys tables ke beech relational links maintain karte hain',
            'INNER JOIN common intersection records return karta hai',
            'LEFT JOIN + WHERE right.id IS NULL anti-join pattern se missing relationships dhoondhi ja sakti hain'
          ],
          flashcard: {
            q: 'MySQL mein FULL OUTER JOIN kaise execute karte hain?',
            a: 'MySQL natively FULL OUTER JOIN support nahi karta; iske liye ek `LEFT JOIN` query aur ek `RIGHT JOIN` query ko `UNION` operator se combine karke execute kiya jata hai.'
          }
        },
        {
          id: 'mysql-advanced-joins-debugging',
          title: 'Advanced JOINs, SELF JOIN, Multi-Table Chains & Debugging Lab',
          emoji: '🧪',
          xpReward: 45,
          badgeName: 'JOIN Detective',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Real-world mein 4-5 tables ek sath judti hain (Users -> Orders -> Order Items -> Products)! Chalo enterprise-grade multi-table JOINs master karte hain! 😎"',
            hint: '💡 Masti Sir: "SELF JOIN mein ek hi table ko do alag aliases dete hain — jaise `employees e` (worker) aur `employees m` (manager)!"',
            success: '🎉 Masti Sir: "Zabardast! Complex 4-table join chain aur join debugging lab clear! 🔥"',
            mistake: '😅 Masti Sir: "Multi-table join mein agar duplicate rows aa rahi hain toh check karo kisi One-to-Many join mein grouping miss toh nahi hui!"'
          },
          englishDef: 'Enterprise data models require multi-table relational chains and self-referential queries (`SELF JOIN` for employee-manager or category hierarchies). Debugging broken JOINs involves resolving Cartesian explosions (missing join predicates), duplicate rows due to 1:N fan-out, and unintended row elimination caused by placing filters in `WHERE` rather than `ON` in outer joins.',
          hinglishExplain: 'Real-world backend mein hum aksar 3 se 5 tables ko ek chain mein jodte hain: Users -> Orders -> Order Items -> Products. SELF JOIN tab use hota hai jab ek hi table apne aap se related ho (jaise Employees table mein har employee ka ek `manager_id` hota hai jo usi table ke doosre employee ki `emp_id` hoti hai). JOIN debugging mein hum missing ON conditions aur Cartesian product explosions ko fix karte hain.',
          funnyExample: {
            scenario: 'The Corporate Tree (SELF JOIN):\n- Table: Employees (id, name, manager_id)\n- Row 1: 1 | Sundar (CEO) | NULL\n- Row 2: 2 | Kabir (Engineering Lead) | manager_id: 1\n- Row 3: 3 | Dev (Junior Dev) | manager_id: 2\n- Query: `employees emp LEFT JOIN employees mgr ON emp.manager_id = mgr.id`\n- Output: "Dev reports to Kabir, Kabir reports to Sundar, Sundar reports to Board!" 🌳',
            punchline: 'SELF JOIN = The ultimate corporate hierarchy unraveler!'
          },
          visualDiagram: {
            title: '4-Table E-Commerce Relational Join Chain',
            nodes: [
              'users (u.id)',
              'orders (o.user_id = u.id)',
              'order_items (oi.order_id = o.id)',
              'products (p.id = oi.product_id)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Cartesian Explosion Trap Debugging:',
            steps: [
              'Table A (1,000 rows) JOIN Table B (1,000 rows) without ON condition = 1,000,000 rows generated (N x M Cartesian Product)',
              'Server memory spikes, CPU hits 100%, and query hangs',
              'Fix: Always ensure every JOIN has a precise `ON primary_key = foreign_key` equality predicate'
            ]
          },
          code: `-- 1. SELF JOIN: Employee to Manager Hierarchy
SELECT 
  emp.emp_id AS employee_id,
  emp.name AS employee_name,
  emp.job_title,
  IFNULL(mgr.name, 'Top Level Executive (CEO)') AS manager_name
FROM employees emp
LEFT JOIN employees mgr 
  ON emp.manager_id = mgr.emp_id;

-- 2. Multi-Table 4-Tier Relational Chain
-- (Users -> Orders -> Order Items -> Products)
SELECT 
  u.id AS customer_id,
  u.username,
  o.id AS order_id,
  o.created_at AS order_date,
  p.title AS product_name,
  oi.quantity,
  oi.unit_price,
  (oi.quantity * oi.unit_price) AS line_item_total
FROM users u
INNER JOIN orders o 
  ON u.id = o.user_id
INNER JOIN order_items oi 
  ON o.id = oi.order_id
INNER JOIN products p 
  ON oi.product_id = p.id
WHERE o.status = 'completed'
ORDER BY o.created_at DESC;

-- 3. Debugging Lab: Filter placement in LEFT JOIN
-- WRONG: Filters right table in WHERE clause (converts LEFT JOIN into INNER JOIN!)
-- SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.status = 'completed';

-- CORRECT: Keep filter in ON clause to preserve non-ordering users
SELECT u.username, o.id, o.status
FROM users u
LEFT JOIN orders o 
  ON u.id = o.user_id AND o.status = 'completed';`,
          codeBreakdown: [
            { part: 'LEFT JOIN employees mgr ON emp.manager_id = mgr.emp_id', label: 'SELF JOIN joining the table to itself using two distinct table aliases', color: '#3b82f6' },
            { part: 'INNER JOIN order_items oi ON o.id = oi.order_id', label: 'Intermediate junction link connecting order headers to individual line item records', color: '#10b981' },
            { part: 'ON u.id = o.user_id AND o.status = "completed"', label: 'Preserves left-table users by applying the filter during the join stage rather than in WHERE', color: '#f59e0b' }
          ],
          commonMistakes: [
            '`LEFT JOIN` ke baad `WHERE right_table.status = "active"` likhna (this accidentally removes all left table rows with NULLs, effectively acting as an INNER JOIN)',
            'Multi-table joins mein ambiguous column names (like `id` or `created_at`) bina table prefix ke likhna'
          ],
          miniChallenge: 'Ek SELF JOIN query likho jo category hierarchy dikhaye (`sub_category` -> `parent_category`).',
          quiz: {
            question: 'Agar LEFT JOIN query mein right table ke column par WHERE filter (e.g. `WHERE right_table.col = "X"`) laga diya jaye, toh kya hota hai?',
            options: [
              'Query error throw karti hai',
              'LEFT JOIN accidentally INNER JOIN ki tarah behave karne lagta hai kyonki NULL rows discard ho jaati hain',
              'Query fast ho jaati hai bina result change hue',
              'Right table ke saare rows duplicate ho jaate hain'
            ],
            answer: 'LEFT JOIN accidentally INNER JOIN ki tarah behave karne lagta hai kyonki NULL rows discard ho jaati hain',
            explanation: 'WHERE clause tab evaluate hota hai jab LEFT JOIN ho chuka hota hai. Jahan right columns NULL the, `NULL = "X"` evaluate hokar UNKNOWN ho jata hai aur rows discard ho jaati hain. Isliye filter ko `ON` clause mein lagana chahiye.'
          },
          summary: [
            'SELF JOIN hierarchical aur recursive relationships model karta hai',
            'Multi-table joins real-world normalized schemas se unified datasets query karte hain',
            'LEFT JOIN filters ko WHERE ki jagah ON clause mein rakhna referential preservation ke liye critical hai'
          ],
          flashcard: {
            q: 'CROSS JOIN kab use hota hai aur iska danger kya hai?',
            a: '`CROSS JOIN` do tables ka Cartesian product (N x M rows) generate karta hai. Ye color x size matrix jaisi combinations generate karne ke liye use hota hai, par large tables par accidental CROSS JOIN database ko crash kar sakta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: SUBQUERIES, CTES & MODERN WINDOW FUNCTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Subqueries, CTEs & Modern SQL Window Functions',
      lessons: [
        {
          id: 'mysql-subqueries-exists',
          title: 'Subqueries & Correlated Existence Checks (Scalar, IN vs EXISTS)',
          emoji: '📥',
          xpReward: 40,
          badgeName: 'Subquery Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ek query ke andar doosri query? Jaise movie ke andar flashback scene! Scalar subquery, correlated subquery aur EXISTS ka power dekho! 😎"',
            hint: '💡 Masti Sir: "`EXISTS` tab super-fast hota hai jab aapko sirf ye check karna ho ki record exist karta hai ya nahi — pehla match milte hi search stop kar deta hai!"',
            success: '🎉 Masti Sir: "Zabardast! Subqueries aur EXISTS clause master ho gaye! 🔥"',
            mistake: '😅 Masti Sir: "Scalar subquery agar multiple rows return karegi toh error aayega: \'Subquery returns more than 1 row\'!"'
          },
          englishDef: 'A Subquery is a nested SQL query embedded within another statement. Categories include Scalar subqueries (returns 1 value), Multi-row subqueries (used with `IN`, `ANY`, `ALL`), and Correlated subqueries (references columns from the outer query). `EXISTS` and `NOT EXISTS` evaluate boolean existence and short-circuit immediately upon finding the first matching row.',
          hinglishExplain: 'Subquery ek query ke andar doosri query hoti hai. Jaise "Aise employees nikaalo jinki salary department ke average se zyada ho" — pehle subquery average salary nikaalegi, fir main query unhe filter karegi. Correlated subquery har outer row ke liye chalti hai. `EXISTS` check karta hai ki subquery mein koi record mila ya nahi — jaise hi 1 matching row milti hai, wo aage search karna band kar deta hai (short-circuit execution).',
          funnyExample: {
            scenario: 'High Earner Detection:\n- Outer Query: "Rohan, tumhari salary kitni hai?" (₹1,20,000) 💼\n- Inner Subquery: "Engineering team ki average salary kitni hai?" (₹80,000) 📊\n- Comparison: ₹1,20,000 > ₹80,000 -> Rohan selected as Above Average Earner! 🚀',
            punchline: 'Inner query calculates the benchmark; outer query finds the champions!'
          },
          visualDiagram: {
            title: 'Correlated Subquery vs Independent Subquery',
            nodes: [
              'Independent Subquery: Runs ONCE -> Returns fixed scalar/set -> Outer query filters against result',
              'Correlated Subquery: Runs ONCE PER OUTER ROW -> References outer.id -> Evaluates condition dynamically',
              'EXISTS Operator: Short-circuits on first true match (O(1) boolean check)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'MySQL Query Optimizer Subquery Unnesting:',
            steps: [
              'Modern MySQL 8.0 transforms many correlated subqueries into semi-joins internally',
              'Transforms `WHERE id IN (SELECT user_id FROM orders)` into hash-lookup semi-join',
              'Avoids running subquery N times on disk whenever index lookups are available'
            ]
          },
          code: `-- 1. Scalar Subquery in WHERE (Employees earning above company average)
SELECT 
  emp_id, 
  name, 
  salary 
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 2. Correlated Subquery (Employees earning above THEIR OWN department average)
SELECT 
  e.emp_id, 
  e.name, 
  e.department, 
  e.salary
FROM employees e
WHERE e.salary > (
  SELECT AVG(sub.salary) 
  FROM employees sub 
  WHERE sub.department = e.department
);

-- 3. EXISTS vs NOT EXISTS (Users who have placed at least 1 order)
SELECT u.id, u.username, u.email
FROM users u
WHERE EXISTS (
  SELECT 1 
  FROM orders o 
  WHERE o.user_id = u.id AND o.status = 'completed'
);

-- 4. Subquery in SELECT Clause (Column Projection)
SELECT 
  u.username,
  (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS total_orders
FROM users u;`,
          codeBreakdown: [
            { part: 'WHERE salary > (SELECT AVG(salary) FROM employees)', label: 'Scalar subquery executes once, evaluating to single numeric benchmark', color: '#3b82f6' },
            { part: 'WHERE sub.department = e.department', label: 'Correlated predicate binding inner subquery directly to current outer row context', color: '#10b981' },
            { part: 'WHERE EXISTS (SELECT 1 FROM orders ...)', label: 'Short-circuit boolean probe returning TRUE the moment 1 matching record is found', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Scalar comparison operator (`=`) ke sath multi-row subquery run karna (`Error: Subquery returns more than 1 row`)',
            '❌ `NOT IN` ke sath subquery chalana jisme NULL values hon (causes 0 rows returned due to 3VL trap; use `NOT EXISTS`)'
          ],
          miniChallenge: 'Ek query likho with `NOT EXISTS` jo sabhi aise users nikaale jinhone kabhi koi quiz attempt nahi kiya.',
          quiz: {
            question: 'Subquery mein `IN` aur `EXISTS` ke beech main difference kya hota hai?',
            options: [
              '`EXISTS` pehla match milte hi short-circuit (stop) kar deta hai, jabki `IN` poora dataset scan karke list banata hai',
              '`IN` sirf numeric data ke liye hota hai',
              '`EXISTS` MySQL mein supported nahi hai',
              'Dono bilkul same speed par execute hote hain'
            ],
            answer: '`EXISTS` pehla match milte hi short-circuit (stop) kar deta hai, jabki `IN` poora dataset scan karke list banata hai',
            explanation: '`EXISTS` boolean existence check karta hai aur first matching record milte hi execution stop kar deta hai, jo large datasets par `IN` se bohot zyada efficient hota hai.'
          },
          summary: [
            'Scalar subqueries single value return karti hain jo comparison operators ke sath use hoti hain',
            'Correlated subqueries outer row context par depend karti hain',
            'EXISTS aur NOT EXISTS boolean checks ke liye safe and performant choice hain'
          ],
          flashcard: {
            q: 'Subquery unnesting / semi-join optimization kya hoti hai?',
            a: 'MySQL optimizer internally nested subqueries ko JOIN operations mein rewrite kar deta hai taaki loop execution ki jagah hash joins ya index scans use ho sakein.'
          }
        },
        {
          id: 'mysql-ctes-recursive',
          title: 'Common Table Expressions (WITH CTEs, Multiple CTEs & Recursive Hierarchies)',
          emoji: '🌲',
          xpReward: 45,
          badgeName: 'CTE Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Nested subqueries ka spaghetti code dekhkar sar dard ho raha hai? CTE (WITH clause) bulao! Code readable, elegant aur modular ban jayega! 😎"',
            hint: '💡 Masti Sir: "Recursive CTE se aap poora organization tree (CEO -> VP -> Director -> Manager -> Dev) ek single query mein nikaal sakte ho! 🌲"',
            success: '🎉 Masti Sir: "Modern SQL mastery achieved! CTEs aur Recursive SQL queries ekdum sharp! 🔥"',
            mistake: '😅 Masti Sir: "Recursive CTE mein base condition (anchor member) aur termination condition zaroor lagao varna infinite loop ho jayega!"'
          },
          englishDef: 'A Common Table Expression (CTE) defined via the `WITH` clause creates a temporary, named result set existing solely for the execution scope of a single SQL statement. CTEs enhance query readability over nested subqueries and enable `RECURSIVE CTEs` for traversing hierarchical trees, bill-of-materials, and category breadcrumbs.',
          hinglishExplain: 'CTE (Common Table Expression) `WITH` keyword se banta hai. Ye ek temporary virtual table jaisa hota hai jisse aap query ke shuru mein define karte ho aur baad mein normal table ki tarah use karte ho. Isse complex nested subqueries ka messy code ekdum clean aur readable ho jata hai. Recursive CTE apne aap ko bar-bar call karke organizational hierarchies aur nested categories ko explore karta hai.',
          funnyExample: {
            scenario: 'Family Tree / Org Chart (Recursive CTE):\n- Step 1 (Anchor): Start with CEO (Sundar Pichai) 👔\n- Step 2 (Recursive Step): Find everyone who reports to Sundar (VPs) 👩‍💼👨‍💼\n- Step 3: Find everyone who reports to VPs (Managers) 👨‍💻\n- Step 4: Find engineers reporting to Managers 👩‍💻\n- Result: Complete company hierarchy generated in 1 query!',
            punchline: 'Recursive CTE climbs up and down the organizational tree automatically!'
          },
          visualDiagram: {
            title: 'Recursive CTE Execution Lifecycle',
            nodes: [
              '1. Anchor Member: Non-recursive query (e.g. Find CEO where manager_id IS NULL)',
              '2. UNION ALL',
              '3. Recursive Member: References the CTE itself (JOIN employees ON emp.manager_id = cte.id)',
              '4. Loop terminates when recursive query returns 0 rows (Tree depth reached)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'CTE Materialization & Execution in MySQL 8.0:',
            steps: [
              'MySQL 8.0 can either inline the CTE directly into the main query plan or materialize it into an in-memory temporary table',
              'Recursive CTEs maintain an internal working table and intermediate result table',
              '`cte_max_recursion_depth` system variable prevents runaway infinite loops (default 1000)'
            ]
          },
          code: `-- 1. Clean Modular Multi-CTE Pipeline
WITH high_xp_learners AS (
  SELECT id, username, email, xp_points
  FROM users
  WHERE xp_points >= 1500
),
learner_course_counts AS (
  SELECT learner_id, COUNT(*) AS enrolled_count
  FROM course_enrollments
  GROUP BY learner_id
)
SELECT 
  h.username,
  h.email,
  h.xp_points,
  IFNULL(c.enrolled_count, 0) AS total_courses
FROM high_xp_learners h
LEFT JOIN learner_course_counts c 
  ON h.id = c.learner_id
ORDER BY h.xp_points DESC;

-- 2. Recursive CTE: Organization Hierarchy Tree
WITH RECURSIVE org_hierarchy AS (
  -- Anchor Member: Find CEO (top of hierarchy)
  SELECT 
    emp_id, 
    name, 
    manager_id, 
    1 AS hierarchy_level,
    CAST(name AS CHAR(500)) AS reporting_path
  FROM employees
  WHERE manager_id IS NULL

  UNION ALL

  -- Recursive Member: Find reporting subordinates
  SELECT 
    e.emp_id, 
    e.name, 
    e.manager_id, 
    h.hierarchy_level + 1,
    CONCAT(h.reporting_path, ' -> ', e.name)
  FROM employees e
  INNER JOIN org_hierarchy h 
    ON e.manager_id = h.emp_id
)
SELECT * FROM org_hierarchy ORDER BY hierarchy_level, name;`,
          codeBreakdown: [
            { part: 'WITH high_xp_learners AS (...)', label: 'Initial named CTE isolating candidate user set into a reusable semantic block', color: '#3b82f6' },
            { part: 'WITH RECURSIVE org_hierarchy AS (...)', label: 'Declares recursive execution capability for traversing self-referencing tree datasets', color: '#10b981' },
            { part: 'INNER JOIN org_hierarchy h ON e.manager_id = h.emp_id', label: 'Recursive join step linking subordinate employee to previously evaluated manager level', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Recursive CTE mein termination condition na hona (hits `cte_max_recursion_depth` limit)',
            '❌ Nested subqueries likh kar code unreadable banana jab CTE easily used ho sakti thi'
          ],
          miniChallenge: 'Ek CTE banao jo top 3 most popular categories calculate kare aur fir un categories ke courses fetch kare.',
          quiz: {
            question: 'CTE define karne ke liye kaunsa SQL keyword use hota hai?',
            options: ['WITH', 'LET', 'DEFINE', 'CREATE CTE'],
            answer: 'WITH',
            explanation: 'Common Table Expressions ko `WITH cte_name AS (SELECT ...)` syntax se define kiya jata hai.'
          },
          summary: [
            'CTEs code modularity aur readability dramatically improve karte hain',
            'Multiple CTEs comma-separated list mein sequentially define kiye ja sakte hain',
            'Recursive CTEs hierarchical trees aur graph paths explore karne ke liye essential hain'
          ],
          flashcard: {
            q: 'CTE aur Subquery mein kya main difference hai?',
            a: 'Functionally dono similar hain, par CTE code ko modular aur readable banata hai, aur ek hi query mein multiple times reuse ho sakta hai (unlike inline subqueries).'
          }
        },
        {
          id: 'mysql-window-functions',
          title: 'Job-Ready Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD & Running Totals)',
          emoji: '🪟',
          xpReward: 50,
          badgeName: 'Window Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GROUP BY rows ko compress karke collapse kar deta hai, jabki Window Function bolta hai: \'Main group calculation bhi karunga aur original rows ko gayab bhi nahi hone dunga!\' 😎"',
            hint: '💡 Masti Sir: "`ROW_NUMBER()` hamesha 1, 2, 3 deta hai; `RANK()` tie hone par 1, 1, 3 deta hai; `DENSE_RANK()` tie hone par 1, 1, 2 deta hai! 🏆"',
            success: '🎉 Masti Sir: "FAANG SQL Interviewer ka sabse favorite topic tumne master kar liya! You are a SQL Ninja! 🚀"',
            mistake: '😅 Masti Sir: "Window functions sirf `SELECT` aur `ORDER BY` clause mein chalte hain — `WHERE` clause mein direct nahi chalte!"'
          },
          englishDef: 'Window functions perform calculations across a set of table rows related to the current row without collapsing rows into a single summary output (unlike `GROUP BY`). Powered by the `OVER (PARTITION BY ... ORDER BY ...)` clause, core functions include ranking (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`), value navigation (`LAG()`, `LEAD()`), and running totals (`SUM() OVER(...)`).',
          hinglishExplain: 'Window functions modern SQL ka sabse powerful feature hain. `GROUP BY` sabhi rows ko merge karke ek single row bana deta hai, par Window Function har individual row ko barkarar rakhte hue sath mein aggregate ya ranking calculate karta hai. `OVER (PARTITION BY category ORDER BY score DESC)` se hum category-wise ranking, previous month ka data comparison (`LAG`), aur daily sales running total (`SUM() OVER`) nikaalte hain.',
          funnyExample: {
            scenario: 'The Exam Marks Ranking:\n- Students Marks: Kabir (95), Riya (95), Dev (80)\n- `ROW_NUMBER()`: Kabir = 1, Riya = 2, Dev = 3 (Unique sequential numbers) 🔢\n- `RANK()`: Kabir = 1, Riya = 1, Dev = 3 (Skips rank 2 because of tie!) 🥈\n- `DENSE_RANK()`: Kabir = 1, Riya = 1, Dev = 2 (Does not skip rank!) 🥇',
            punchline: 'Window functions give you analytical super-powers without losing row identity!'
          },
          visualDiagram: {
            title: 'GROUP BY vs Window Function Architecture',
            nodes: [
              'Input: 100 Employee Rows across 4 Departments',
              'GROUP BY: Returns 4 rows (1 row per department, individual employees lost)',
              'WINDOW FUNCTION: Returns all 100 rows + Department Average + Rank next to each employee!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Window Frame Execution Mechanics:',
            steps: [
              'Data is partitioned into buckets matching `PARTITION BY` columns',
              'Each partition is sorted according to `ORDER BY` specifications',
              'Window frame (default: `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`) evaluates cumulative aggregations'
            ]
          },
          code: `-- 1. Ranking Functions Comparison
SELECT 
  username,
  category,
  xp_points,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY xp_points DESC) AS row_num,
  RANK() OVER (PARTITION BY category ORDER BY xp_points DESC) AS rank_num,
  DENSE_RANK() OVER (PARTITION BY category ORDER BY xp_points DESC) AS dense_rank_num
FROM user_scores;

-- 2. Value Navigation: Month-over-Month Growth (LAG & LEAD)
SELECT 
  order_month,
  monthly_revenue,
  LAG(monthly_revenue, 1) OVER (ORDER BY order_month) AS prev_month_revenue,
  ROUND(
    ((monthly_revenue - LAG(monthly_revenue, 1) OVER (ORDER BY order_month)) / 
    LAG(monthly_revenue, 1) OVER (ORDER BY order_month)) * 100, 
    2
  ) AS mom_growth_percentage
FROM monthly_sales_summary;

-- 3. Running Total & Cumulative Revenue
SELECT 
  order_id,
  order_date,
  total_amount,
  SUM(total_amount) OVER (
    ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_total_revenue
FROM orders;

-- 4. Top N Records Per Category Pattern (CTE + DENSE_RANK)
WITH ranked_products AS (
  SELECT 
    title,
    category,
    price,
    DENSE_RANK() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
  FROM products
)
SELECT * FROM ranked_products WHERE price_rank <= 3;`,
          codeBreakdown: [
            { part: 'ROW_NUMBER() OVER (PARTITION BY category ORDER BY xp_points DESC)', label: 'Assigns unique sequential integer (1,2,3...) reset per category partition', color: '#3b82f6' },
            { part: 'LAG(monthly_revenue, 1) OVER (ORDER BY order_month)', label: 'Fetches the preceding row revenue value to compute MoM delta comparison', color: '#10b981' },
            { part: 'SUM(total_amount) OVER (ORDER BY order_date ...)', label: 'Calculates cumulative running total across time-ordered sequence', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Window function ko direct `WHERE` clause mein use karne ki koshish karna (`WHERE ROW_NUMBER() <= 3` -> Error; wrap in CTE instead)',
            '❌ Running total mein `ORDER BY` omit kar dena (without ORDER BY, SUM() OVER() calculates grand total for the whole table)'
          ],
          miniChallenge: 'Ek CTE query likho jo har department ke top 2 highest salary earners nikaale using `DENSE_RANK()`.',
          quiz: {
            question: 'Previous row ki value access karke month-over-month difference calculate karne ke liye kaunsa window function use hota hai?',
            options: ['LAG()', 'LEAD()', 'PREV()', 'PRIOR()'],
            answer: 'LAG()',
            explanation: '`LAG(column, offset)` preceding row se data access karta hai, jabki `LEAD(column, offset)` upcoming (next) row se data access karta hai.'
          },
          summary: [
            'Window functions row identity collapse kiye bina analytical calculations execute karte hain',
            'ROW_NUMBER, RANK aur DENSE_RANK ties handling mein differ karte hain',
            'LAG aur LEAD historical trends aur sequence analysis ke liye primary tools hain'
          ],
          flashcard: {
            q: '`RANK()` aur `DENSE_RANK()` mein kya difference hai?',
            a: 'Agar do records same score par tie ho jayein (e.g. rank 1), toh `RANK()` agle record ko rank 3 dega (rank 2 skip ho jayega); `DENSE_RANK()` agle record ko rank 2 dega (kisi rank ko skip nahi karta).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: DATABASE DESIGN, NORMALIZATION & ER MODELING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Database Design, Normalization & ER Modeling',
      lessons: [
        {
          id: 'mysql-normalization-design',
          title: 'Database Normalization (1NF, 2NF, 3NF, BCNF & Denormalization Trade-offs)',
          emoji: '📐',
          xpReward: 45,
          badgeName: 'Normalization Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ek hi customer ka address 10 alag jagah copy karoge toh kal jab customer flat shift karega toh 9 jagah purana address reh jayega! Normalization wahi data redundancy aur anomalies ko khatam karta hai! 😂"',
            hint: '💡 Masti Sir: "1NF = Atomic values (no comma separated lists); 2NF = No partial dependency; 3NF = No transitive dependency (non-key determines non-key)!"',
            success: '🎉 Masti Sir: "Zabardast! 3NF Normalized schema ready! Data redundancy aur anomalies completely eliminated! 🔥"',
            mistake: '😅 Masti Sir: "Analytics / Read-heavy systems mein kabhi kabhi intentional denormalization ki zaroorat hoti hai — balance samajhna zaroori hai!"'
          },
          englishDef: 'Database Normalization systematically organizes table schemas to minimize data redundancy and eliminate Update, Insertion, and Deletion anomalies. Progression spans 1NF (atomic values), 2NF (removal of partial dependencies on composite keys), 3NF (removal of transitive dependencies), and BCNF. Denormalization deliberately introduces managed redundancy to optimize high-throughput read queries.',
          hinglishExplain: 'Normalization ek technique hai jisse hum database tables ko structured banate hain taaki duplicate data store na ho. 1NF mein har cell mein single atomic value hoti hai (comma separated items nahi). 2NF mein partial dependencies hatayi jaati hain. 3NF mein rule hai: har column sirf aur sirf Primary Key par depend kare. Agar normalization na ho toh Update Anomaly hoti hai (ek jagah update hua, doosri jagah purana data reh gaya).',
          funnyExample: {
            scenario: 'The Messy Spreadsheet Nightmare (Un-normalized):\n- Row: Student | Courses Enrolled | Teacher Phone\n- Kabir | "HTML, CSS, React" | 9876543210 ❌ (Violates 1NF!)\n- Jab Teacher ka phone number badla, toh 500 rows mein update karna padega! Agar ek row miss hui toh inconsistency! 😱\n- Normalized (3NF): Separate Students, Courses, aur Teachers tables! 🎯',
            punchline: 'Every non-key attribute must depend on the key, the whole key, and nothing but the key!'
          },
          visualDiagram: {
            title: 'Normalization Progression Stages (1NF -> 2NF -> 3NF)',
            nodes: [
              'Un-normalized Table: Repeating groups, comma lists, duplicate metadata',
              '1NF: Atomic columns (single values per cell), primary key defined',
              '2NF: 1NF + No partial key dependency (all columns depend on full composite key)',
              '3NF: 2NF + No transitive dependency (columns do not depend on other non-key columns)',
              'Denormalization: Calculated summary columns cached for read performance'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Trade-offs: Normalization vs Denormalization:',
            steps: [
              '3NF: Maximum data integrity, zero redundancy, fast writes (INSERT/UPDATE), requires JOINs on reads',
              'Denormalized: High-speed single-table reads (ideal for reporting/data warehouse), higher storage, write overhead',
              'Standard practice: Normalize transactional OLTP databases (3NF); denormalize analytical OLAP systems'
            ]
          },
          code: `-- ── 1. UN-NORMALIZED ANOMALY EXAMPLE ──
-- BAD SCHEMA:
-- orders_bad (order_id, customer_name, customer_city, product_name, product_price)

-- ── 2. PROPERLY NORMALIZED 3NF SCHEMA ──

-- Table 1: Customers (1NF, 2NF, 3NF compliant)
CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  city VARCHAR(50) NOT NULL
);

-- Table 2: Products
CREATE TABLE catalog_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

-- Table 3: Orders (Header metadata)
CREATE TABLE customer_orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10, 2) DEFAULT 0.00,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Table 4: Order Line Items (Junction / Line entity)
CREATE TABLE customer_order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  unit_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES customer_orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES catalog_products(id)
);`,
          codeBreakdown: [
            { part: 'CREATE TABLE customers', label: 'Isolates customer entity; city and email update in exactly one place with zero anomalies', color: '#3b82f6' },
            { part: 'CREATE TABLE customer_orders', label: 'Maintains order header metadata linked via customer_id foreign key', color: '#10b981' },
            { part: 'CREATE TABLE customer_order_items', label: 'Normalizes Many-to-Many relationship between orders and products with historical unit_price snapshot', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Single column mein comma-separated IDs store karna (violates 1NF, cannot index or join)',
            '❌ Order Items mein `unit_price` store na karna (agar product ka price kal badla toh purane orders ka total corrupt ho jayega)'
          ],
          miniChallenge: 'Ek un-normalized `hospital_records` schema ko `patients`, `doctors`, aur `appointments` tables mein 3NF normalize karo.',
          quiz: {
            question: 'Database table 3NF (Third Normal Form) mein kab maani jaati hai?',
            options: [
              'Jab table 2NF mein ho aur usme koi Transitive Dependency na ho (non-key columns do not depend on other non-key columns)',
              'Jab table mein 3 se zyada columns na hon',
              'Jab table mein saare data types VARCHAR hon',
              'Jab table mein koi Foreign Key na ho'
            ],
            answer: 'Jab table 2NF mein ho aur usme koi Transitive Dependency na ho (non-key columns do not depend on other non-key columns)',
            explanation: '3NF tab satisfy hoti hai jab table 2NF mein ho aur har non-key column sirf Primary Key par depend kare (koi transitive dependency na ho).'
          },
          summary: [
            '1NF atomic values aur single attribute cells enforce karta hai',
            '2NF partial key dependencies aur 3NF transitive dependencies eliminate karta hai',
            '3NF schema insertion, update aur deletion anomalies ko completely prevent karta hai'
          ],
          flashcard: {
            q: 'Update Anomaly kya hoti hai?',
            a: 'Jab ek hi information multiple rows mein duplicated ho, aur data update karte waqt kuch rows update ho jayein aur kuch purani reh jayein, jisse database inconsistent ho jata hai.'
          }
        },
        {
          id: 'mysql-relationships-er-diagrams',
          title: 'Database Relationships & ER Modeling (1:1, 1:N, M:N Junction Tables & Design Lifecycle)',
          emoji: '🗺️',
          xpReward: 45,
          badgeName: 'Data Modeler',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Code likhne se pehle ER Diagram banana ek architect ke blue-print jaisa hai! Bina drawing ke makaan banaoge toh deewar gir jayegi! 📐"',
            hint: '💡 Masti Sir: "Many-to-Many relationship (Students <-> Courses) ko solve karne ke liye beech mein hamesha ek Junction Table (Enrollments) lagti hai!"',
            success: '🎉 Masti Sir: "Zabardast! Complete Relational Data Model successfully designed! 🔥"',
            mistake: '😅 Masti Sir: "One-to-One relationship mein dono tables mein Primary Key same rakh sakte hain ya Foreign Key par UNIQUE constraint lagate hain!"'
          },
          englishDef: 'Entity-Relationship (ER) modeling defines real-world business domains using Entities, Attributes, and Cardinality Relationships: One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (M:N). Many-to-Many relationships are physically decomposed into two 1:N relationships via a Junction (Bridging/Associative) table.',
          hinglishExplain: 'Database design ka structure ER (Entity Relationship) model se decide hota hai. Teen tarah ke relationships hote hain:\n1. One-to-One (1:1): Ek User ka ek hi Profile\n2. One-to-Many (1:N): Ek User ke multiple Orders\n3. Many-to-Many (M:N): Ek Student multiple Courses padh sakta hai aur ek Course mein multiple Students ho sakte hain (iske liye beech mein Junction table banti hai).',
          funnyExample: {
            scenario: 'Social Media Relationships:\n- 1:1 -> User 🧑 <-> Aadhaar Identity 🪪 (1 User has 1 Aadhaar ID)\n- 1:N -> User 🧑 <-> Posts 📝 (1 User creates many Posts)\n- M:N -> Users 🧑 <-> Groups 👥 (Many users join many groups via `group_members` junction table!)',
            punchline: 'Junction tables turn complex Many-to-Many tangles into clean 1:N connections!'
          },
          visualDiagram: {
            title: 'Many-to-Many Junction Table Architecture',
            nodes: [
              'Entity: students (student_id PK: 101, name: "Kabir")',
              'Junction Table: student_courses (student_id FK, course_id FK, enrolled_at)',
              'Entity: courses (course_id PK: 501, title: "MySQL Masterclass")'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Database Design Lifecycle Stages:',
            steps: [
              '1. Business Requirements Gathering (Entities & Cardinalities identified)',
              '2. Conceptual ER Diagram (Entities, Attributes, Primary Keys)',
              '3. Logical Schema Normalization (Transform to 3NF tables & junction tables)',
              '4. Physical Schema Implementation (Data types, InnoDB storage engine, Indexes)'
            ]
          },
          code: `-- ── COMPLETE PRODUCTION LMS RELATIONSHIP MODEL ──

-- 1. Entity: Users
CREATE TABLE app_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE
);

-- 2. One-to-One (1:1): User Profiles
CREATE TABLE user_profiles (
  user_id INT PRIMARY KEY, -- Same as user id (enforces 1:1)
  bio TEXT,
  github_url VARCHAR(200),
  avatar_url VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES app_users(id) ON DELETE CASCADE
);

-- 3. One-to-Many (1:N): Courses -> Lessons
CREATE TABLE app_courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL UNIQUE
);

CREATE TABLE app_lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  lesson_order INT NOT NULL,
  FOREIGN KEY (course_id) REFERENCES app_courses(id) ON DELETE CASCADE
);

-- 4. Many-to-Many (M:N): Users <-> Courses via Junction Table
CREATE TABLE lms_enrollments (
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  progress_percentage INT DEFAULT 0,
  is_completed BOOLEAN DEFAULT FALSE,
  -- Composite Primary Key prevents duplicate enrollments
  PRIMARY KEY (user_id, course_id),
  FOREIGN KEY (user_id) REFERENCES app_users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES app_courses(id) ON DELETE CASCADE
);`,
          codeBreakdown: [
            { part: 'user_id INT PRIMARY KEY', label: 'Enforces strict 1:1 cardinality by making the foreign key serve directly as the primary key', color: '#3b82f6' },
            { part: 'FOREIGN KEY (course_id) REFERENCES app_courses(id)', label: 'Standard 1:N relationship mapping multiple lesson children to single parent course', color: '#10b981' },
            { part: 'PRIMARY KEY (user_id, course_id)', label: 'Junction table composite primary key enforcing uniqueness on the many-to-many relationship', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Many-to-Many relationship mein Junction table na banakar comma-separated IDs store karna',
            '❌ One-to-One table mein Foreign Key par `UNIQUE` constraint lagana bhool jana'
          ],
          miniChallenge: 'Ek `tags` aur `articles` table ke beech Many-to-Many relationship ke liye `article_tags` junction table create karo.',
          quiz: {
            question: 'Many-to-Many (M:N) relationship ko relational database mein implement karne ke liye kya zaroori hota hai?',
            options: [
              'Dono tables mein comma-separated IDs store karna',
              'Ek Junction (Bridge) table create karna jisme dono tables ki Foreign Keys hon',
              'Dono tables ko ek single table mein merge kar dena',
              'Array data type use karna'
            ],
            answer: 'Ek Junction (Bridge) table create karna jisme dono tables ki Foreign Keys hon',
            explanation: 'Relational databases mein Many-to-Many relationships ko do One-to-Many relationships mein todne ke liye ek Junction (Associative) table create ki jaati hai.'
          },
          summary: [
            'ER modeling entities aur unke cardinality relationships ko visual map karta hai',
            '1:1 foreign key unique constraint ya shared primary key se banta hai',
            'M:N relationships composite primary key wali Junction tables se model hote hain'
          ],
          flashcard: {
            q: 'Composite Primary Key kya hoti hai?',
            a: 'Ek aisi Primary Key jo do ya do se zyada columns ko mila kar banti hai (jaise Junction table mein `PRIMARY KEY (user_id, course_id)`).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: INDEXING, EXPLAIN & QUERY OPTIMIZATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Indexing, EXPLAIN & Performance Optimization',
      lessons: [
        {
          id: 'mysql-indexes-btrees',
          title: 'Indexing Fundamentals, B-Trees & Composite Leftmost Prefix Rules',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Index Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Index database ka shortcut hai! Socho 1000 page ki book mein topic dhoondhna ho — har page padhoge? Nahi na! Index dekho aur seedha page 542 par pahuche! 😎"',
            hint: '💡 Masti Sir: "Composite Index `(status, created_at)` leftmost prefix rule follow karta hai — ye `status` par search karega, par agar sirf `created_at` search karoge toh index bypass ho jayega!"',
            success: '🎉 Masti Sir: "Query speed 10 seconds se 2 milliseconds par aa gayi! Indexing masterclass unlocked! 🔥"',
            mistake: '😅 Masti Sir: "Har column par index mat bana dena! Index read fast karta hai par INSERT/UPDATE/DELETE ko slow kar deta hai!"'
          },
          englishDef: 'A database Index is a specialized B-Tree data structure that enables the storage engine to locate rows in logarithmic time ($O(\\log N)$) instead of performing a sequential Full Table Scan ($O(N)$). Types include Clustered Indexes (Primary Key data pages), Secondary Single-Column, Unique, Composite (multi-column following leftmost prefix rules), and Covering Indexes.',
          hinglishExplain: 'Index database ki book ka index page hota hai. Bina index ke agar 10 lakh users mein se `email = "kabir@codemasti.com"` dhoondhna ho, toh database ko har ek row scan karni padegi (Full Table Scan). Index lagane par B-Tree structure se sirf 3-4 steps mein exact record mil jata hai. Har table par ek Clustered Index (Primary Key) hota hai aur baaki Secondary Indexes hote hain.',
          funnyExample: {
            scenario: 'Book Index Analogy:\n- Without Index: Library mein 10,000 books hain. "MySQL" book dhoondhne ke liye har ek shelf ki har book dekhni padegi (Full Scan - 5 Ghante!) 📚😫\n- With B-Tree Index: Computer catalogue mein "M" section -> Shelf 4 -> Book #12 (Index Lookup - 3 Seconds!) ⚡😎',
            punchline: 'Indexes turn slow Full Table Scans into lightning-fast binary lookups!'
          },
          visualDiagram: {
            title: 'B-Tree Index Lookup vs Full Table Scan',
            nodes: [
              'Without Index: Query -> Scan Row 1 -> Row 2 -> ... -> Row 1,000,000 (Very Slow Disk I/O)',
              'B-Tree Index: Root Node -> Branch Node -> Leaf Node Pointer -> Instant Data Page Fetch (3 I/O hops)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Leftmost Prefix Rule & Write Overhead:',
            steps: [
              'Index on (A, B, C) can satisfy queries filtering on: (A), (A, B), or (A, B, C)',
              'Index on (A, B, C) CANNOT be used efficiently for queries filtering only on (B) or (C)',
              'Every INSERT/UPDATE/DELETE must update both the base table and all secondary B-Tree indexes'
            ]
          },
          code: `-- 1. Create Secondary Single-Column Index
CREATE INDEX idx_user_email ON users(email);

-- 2. Create Composite Index (Multi-Column)
-- Column order: Equality column first, Range column second
CREATE INDEX idx_orders_status_date ON orders(status, created_at);

-- Queries that USE this Composite Index:
-- Query 1 (Matches A):
SELECT * FROM orders WHERE status = 'completed';
-- Query 2 (Matches A and B):
SELECT * FROM orders WHERE status = 'completed' AND created_at >= '2026-08-01';

-- Query that CANNOT fully use this index (Violates leftmost prefix):
-- SELECT * FROM orders WHERE created_at >= '2026-08-01'; -- (Skips 'status')

-- 3. Covering Index (Index contains ALL requested columns)
CREATE INDEX idx_users_covering ON users(role, id, username);
-- Index-Only Scan: Fetches data directly from index leaf nodes without touching main table!
SELECT id, username FROM users WHERE role = 'mentor';`,
          codeBreakdown: [
            { part: 'CREATE INDEX idx_user_email ON users(email)', label: 'Creates a secondary B-Tree index structure pointing to Primary Key clustered index', color: '#3b82f6' },
            { part: 'CREATE INDEX idx_orders_status_date ON orders(status, created_at)', label: 'Composite index ordered for filtering status first and sorting/ranging by created_at second', color: '#10b981' },
            { part: 'CREATE INDEX idx_users_covering ON users(role, id, username)', label: 'Covering index enabling index-only queries without primary table page lookups', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Composite index mein column order galat rakhna (Range column ko equality column se pehle rakh dena)',
            '❌ Small tables (less than 500 rows) par unnecessary indexes banana (table scan is already in RAM buffer)'
          ],
          miniChallenge: 'Ek composite index create karo `products` table par jo `category` aur `price` range queries ko optimize kare.',
          quiz: {
            question: 'Agar composite index `(dept_id, salary)` par bana ho, toh kaunsi query index ka use nahi kar payegi?',
            options: [
              'WHERE dept_id = 5 AND salary > 50000',
              'WHERE dept_id = 5',
              'WHERE salary > 50000 (bina dept_id ke)',
              'WHERE dept_id = 5 ORDER BY salary'
            ],
            answer: 'WHERE salary > 50000 (bina dept_id ke)',
            explanation: 'Leftmost Prefix Rule ke mutabik composite index ka pehla column (`dept_id`) query predicate mein hona zaroori hai, varna B-Tree search tree root se traverse nahi ho sakti.'
          },
          summary: [
            'B-Tree indexes sequential scans ko logarithmic time lookups mein convert karte hain',
            'Composite indexes leftmost prefix rule follow karte hain',
            'Covering indexes main table pages access kiye bina leaf nodes se data return karte hain'
          ],
          flashcard: {
            q: 'Clustered Index aur Secondary Index mein kya difference hai?',
            a: 'Clustered Index (Primary Key) actual table data rows ko B-Tree leaf nodes mein physically store karta hai (1 per table); Secondary Index separate B-Tree banata hai jisme column value aur Primary Key pointer hota hai.'
          }
        },
        {
          id: 'mysql-explain-query-optimization',
          title: 'Reading EXPLAIN Plans & Query Optimization Lab',
          emoji: '🔬',
          xpReward: 45,
          badgeName: 'Query Optimizer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Query slow chal rahi hai? Tukka mat maaro! EXPLAIN ANALYZE chalao aur database se poocho ki usne kaunsa index use kiya aur kitne lakh rows scan kiye! 🔬"',
            hint: '💡 Masti Sir: "EXPLAIN output mein `type: ALL` ka matlab hai disaster (Full Table Scan)! Aim karo `type: const`, `ref`, ya `range` par!"',
            success: '🎉 Masti Sir: "Query bottleneck diagnosed aur fixed! 5 second ki query 4 millisecond mein execute ho gayi! 🔥"',
            mistake: '😅 Masti Sir: "`EXPLAIN` query ko sirf plan karta hai, jabki `EXPLAIN ANALYZE` query ko physically execute karke exact runtime timings dikhata hai!"'
          },
          englishDef: '`EXPLAIN` and `EXPLAIN ANALYZE` reveal MySQL\'s execution plan, access types (`const`, `eq_ref`, `ref`, `range`, `index`, `ALL`), chosen indexes, evaluated rows, and execution costs. Query optimization strategies include eliminating `type: ALL`, removing non-sargable expressions, indexing foreign keys, and minimizing sorting overhead.',
          hinglishExplain: 'Jab koi SQL query slow hoti hai toh hum uske aage `EXPLAIN` lagate hain. MySQL execution plan batata hai: kya index use hua (`key`), kitni rows scan hui (`rows`), aur access method kya tha (`type`). Agar `type = ALL` dikhe toh iska matlab hai poora table scan ho raha hai. Index add karke `type` ko `ref` ya `range` mein badalna query optimization ka primary goal hota hai.',
          funnyExample: {
            scenario: 'The Doctor\'s X-Ray Analogy:\n- Slow Query = Patient ke pet mein dard 🩺\n- `EXPLAIN query;` = X-Ray scan jo exactly dikhata hai ki problem kahan hai (Missing index on `user_id`, 5,00,000 rows scanned unnecessarily!)\n- Solution = Index prescription lagao aur patient fit! ⚡',
            punchline: 'EXPLAIN is the MRI scan for your database queries!'
          },
          visualDiagram: {
            title: 'EXPLAIN Access Types Hierarchy (Best to Worst)',
            nodes: [
              '1. system / const (Primary Key / Unique lookup - O(1)) -> BEST',
              '2. eq_ref (1:1 Unique join match)',
              '3. ref (Indexed non-unique lookup)',
              '4. range (Index range scan: BETWEEN, >, <, IN)',
              '5. index (Full index scan)',
              '6. ALL (Full table scan - Reading every row on disk) -> WORST'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How to Read EXPLAIN Output Columns:',
            steps: [
              '`type`: Access method (avoid ALL; prefer ref, range, const)',
              '`possible_keys`: Indexes candidate for query evaluation',
              '`key`: The actual index chosen by the cost-based optimizer',
              '`rows`: Estimated number of rows MySQL must examine',
              '`Extra`: Look for "Using index" (Good: covering index) vs "Using filesort / Using temporary" (Warning: memory sort)'
            ]
          },
          code: `-- 1. Slow Query without Index (EXPLAIN reveals type: ALL, rows: 500000)
EXPLAIN SELECT id, username, email 
FROM users 
WHERE email = 'kabir@codemasti.com';

-- 2. Add Index to Optimize
CREATE UNIQUE INDEX idx_users_email ON users(email);

-- 3. Re-run EXPLAIN (Now reveals type: const, key: idx_users_email, rows: 1)
EXPLAIN SELECT id, username, email 
FROM users 
WHERE email = 'kabir@codemasti.com';

-- 4. Deep Inspection with EXPLAIN ANALYZE (MySQL 8.0+)
-- Shows actual execution time in milliseconds and iterator tree
EXPLAIN ANALYZE 
SELECT 
  o.id, 
  o.total_amount, 
  u.username
FROM orders o
INNER JOIN users u ON o.user_id = u.id
WHERE o.status = 'completed' AND o.created_at >= '2026-08-01';`,
          codeBreakdown: [
            { part: 'EXPLAIN SELECT ...', label: 'Analyzes query optimizer plan without executing the query', color: '#3b82f6' },
            { part: 'type: const / ref', label: 'Access type indicating index lookup with predictable O(1) or O(log N) execution', color: '#10b981' },
            { part: 'EXPLAIN ANALYZE', label: 'Executes query and reports actual execution time and iterator engine metrics', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `Extra: Using filesort` aur `Using temporary` ko high-traffic queries par ignore karna',
            '❌ Index hone ke bawajood query mein wildcard prefix `WHERE email LIKE "%@gmail.com"` use karna (forces type: ALL)'
          ],
          miniChallenge: 'Ek slow query par `EXPLAIN` run karke `possible_keys` aur `type` inspect karo aur index suggest karo.',
          quiz: {
            question: 'MySQL EXPLAIN output mein kaunsa `type` sabse worst performance (Full Table Scan) indicate karta hai?',
            options: ['ref', 'range', 'ALL', 'index'],
            answer: 'ALL',
            explanation: '`type: ALL` ka matlab hai Full Table Scan jahan database ko table ki har ek row ko disk se read karna padta hai.'
          },
          summary: [
            'EXPLAIN optimizer plan, join order aur index utilization reveal karta hai',
            'Access type const, ref aur range optimize queries represent karte hain',
            'EXPLAIN ANALYZE exact runtime execution timings profile karta hai'
          ],
          flashcard: {
            q: 'EXPLAIN output mein `Extra: Using index` ka kya matlab hota hai?',
            a: 'Iska matlab hai query "Covering Index" use kar rahi hai aur saara requested data direct index B-Tree se mil gaya bina main table data pages ko touch kiye.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: TRANSACTIONS, ACID, LOCKING & CONCURRENCY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: Transactions, ACID, Locking & Concurrency',
      lessons: [
        {
          id: 'mysql-transactions-acid',
          title: 'Transactions & ACID Properties Deep Dive (COMMIT, ROLLBACK & SAVEPOINT)',
          emoji: '🏦',
          xpReward: 45,
          badgeName: 'Transaction Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Bank transfer mein Account A se paisa kat gaya aur server crash hone par Account B mein nahi pahuche... Ye movie ka suspense real life mein nahi chahiye! Transactions use karo! 😂"',
            hint: '💡 Masti Sir: "ACID: Atomicity (Sabhi operations honge ya ek bhi nahi), Consistency, Isolation, Durability (Data disk par permanently safe)!"',
            success: '🎉 Masti Sir: "Banking-grade transaction system successfully implemented! Zero data loss! 🔥"',
            mistake: '😅 Masti Sir: "`START TRANSACTION` ke baad agar error aaye toh catch block mein `ROLLBACK` karna mat bhoolna!"'
          },
          englishDef: 'A database Transaction is an atomic unit of work consisting of multiple SQL operations that must execute successfully in its entirety or leave the database state unmodified. ACID compliance guarantees: Atomicity (all-or-nothing), Consistency (integrity constraints preserved), Isolation (concurrent operations do not interfere), and Durability (committed changes persist across server crashes via redo logs).',
          hinglishExplain: 'Transaction multiple SQL operations ka ek bundle hota hai jo "All-or-Nothing" principle par kaam karta hai. Example: Bank Transfer mein Account A se ₹5,000 deduct hona aur Account B mein ₹5,000 credit hona dono ek sath complete hone chahiye. Agar beech mein server band ho gaya toh `ROLLBACK` saari changes ko undo kar deta hai jaise kuch hua hi na ho.',
          funnyExample: {
            scenario: 'The Bank Transfer Crisis:\n- Step 1: Account A balance: ₹10,000 -> Deduct ₹5,000 (Balance: ₹5,000) 💸\n- Step 2: ⚡ Power Cut / Server Crash! 💥\n- Without Transaction: Account A ka paisa gaya, Account B ko nahi mila! (Customer crying 😭)\n- With Transaction: Database automatically rolls back on crash -> Account A balance restored to ₹10,000! 🏦🛡️',
            punchline: 'All operations succeed together, or none of them happen at all!'
          },
          visualDiagram: {
            title: 'ACID Transaction Lifecycle',
            nodes: [
              'START TRANSACTION',
              'Operation 1: UPDATE accounts SET balance = balance - 5000 WHERE id = 1',
              'Operation 2: UPDATE accounts SET balance = balance + 5000 WHERE id = 2',
              'Success? -> COMMIT (Permanent write to InnoDB Redo Log)',
              'Error?   -> ROLLBACK (Undo changes via InnoDB Undo Log)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'InnoDB WAL (Write-Ahead Logging) Mechanics:',
            steps: [
              'Changes are written to in-memory Buffer Pool and appended to Redo Log (ib_logfile)',
              'On COMMIT, the redo log buffer is flushed to disk (fsync)',
              'If server crashes, InnoDB Crash Recovery reads redo logs and restores committed state'
            ]
          },
          code: `-- ── SECURE BANKING TRANSACTION WITH ACID GUARANTEE ──

-- 1. Initialize Tables
CREATE TABLE bank_accounts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  holder_name VARCHAR(100) NOT NULL,
  balance DECIMAL(12, 2) NOT NULL,
  CONSTRAINT chk_positive_balance CHECK (balance >= 0.00)
) ENGINE=InnoDB;

INSERT INTO bank_accounts (holder_name, balance)
VALUES ('Kabir Sharma', 10000.00), ('Riya Patel', 5000.00);

-- 2. Execute Atomic Bank Transfer
START TRANSACTION;

-- Step A: Deduct from Sender
UPDATE bank_accounts 
SET balance = balance - 3000.00 
WHERE id = 1;

-- Step B: Credit to Receiver
UPDATE bank_accounts 
SET balance = balance + 3000.00 
WHERE id = 2;

-- Step C: Log Transaction Audit Record
INSERT INTO transaction_audit_logs (sender_id, receiver_id, amount, status)
VALUES (1, 2, 3000.00, 'SUCCESS');

-- If all steps succeeded without error:
COMMIT;

-- In case of any constraint failure or application error:
-- ROLLBACK;`,
          codeBreakdown: [
            { part: 'START TRANSACTION;', label: 'Disables autocommit mode and begins atomic transactional boundary', color: '#3b82f6' },
            { part: 'CONSTRAINT chk_positive_balance CHECK (balance >= 0.00)', label: 'Consistency guarantee: automatically triggers error if sender lacks sufficient balance', color: '#10b981' },
            { part: 'COMMIT;', label: 'Atomically persists all operations and releases acquired row locks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ MyISAM storage engine use karna (MyISAM does NOT support transactions; always use InnoDB)',
            '❌ Backend code mein error aane par catch block mein `ROLLBACK` call na karna'
          ],
          miniChallenge: 'Ek transaction likho jo naye user ko register kare aur sath mein welcome 100 XP points credit kare with `COMMIT`.',
          quiz: {
            question: 'ACID properties mein "Atomicity" ka kya matlab hota hai?',
            options: [
              'Transaction ke saare operations complete honge ya fir ek bhi execute nahi hoga (All-or-Nothing)',
              'Transaction bohot fast execute hoga',
              'Data JSON format mein store hoga',
              'Table mein atom jaisa structure hoga'
            ],
            answer: 'Transaction ke saare operations complete honge ya fir ek bhi execute nahi hoga (All-or-Nothing)',
            explanation: 'Atomicity ensure karta hai ki transaction ek indivisible unit of work hai — ya toh saare operations successfully commit honge ya koi bhi change persist nahi hoga.'
          },
          summary: [
            'Transactions multiple SQL operations ko atomic unit of work mein bundle karte hain',
            'ACID properties enterprise data reliability aur crash recovery provide karti hain',
            'START TRANSACTION, COMMIT aur ROLLBACK core transaction control commands hain'
          ],
          flashcard: {
            q: '`SAVEPOINT` ka kya use hota hai?',
            a: '`SAVEPOINT savepoint_name` transaction ke andar ek checkpoint set karta hai jisse aap `ROLLBACK TO SAVEPOINT savepoint_name` karke sirf partial operations undo kar sakte hain bina poori transaction cancel kiye.'
          }
        },
        {
          id: 'mysql-isolation-locking-deadlocks',
          title: 'Isolation Levels, Row/Table Locking & Deadlock Handling',
          emoji: '🔒',
          xpReward: 50,
          badgeName: 'Concurrency Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Jab 10,000 log ek sath Tatkal ticket ya Flash Sale book kar rahe hote hain, tab locking aur isolation levels decide karte hain ki double-booking hogi ya system rock-solid rahega! 🎟️"',
            hint: '💡 Masti Sir: "Deadlock tab hota hai jab Transaction A ne Row 1 lock ki aur Row 2 maang raha hai, jabki Transaction B ne Row 2 lock ki aur Row 1 maang raha hai! Dono ek doosre ka wait karte reh jaate hain! 🔄"',
            success: '🎉 Masti Sir: "Enterprise concurrency, locking mechanisms aur deadlock resolution master ho gaya! 🏆"',
            mistake: '😅 Masti Sir: "`READ UNCOMMITTED` production mein use mat karna — dirty reads se uncommitted fake data read ho sakta hai!"'
          },
          englishDef: 'Transaction Isolation levels control data visibility and concurrency phenomena (Dirty Reads, Non-Repeatable Reads, Phantom Reads): `READ UNCOMMITTED`, `READ COMMITTED`, `REPEATABLE READ` (MySQL InnoDB default using MVCC), and `SERIALIZABLE`. Locking mechanisms include Shared (S) locks, Exclusive (X) locks, Row-level locks, and Gap locks. Deadlocks occur during cyclical lock dependencies and are resolved via automatic victim rollback and application retry loops.',
          hinglishExplain: 'Jab hazaron users ek sath database use karte hain toh Concurrency issues aate hain. MySQL 4 Isolation Levels provide karta hai. Default level `REPEATABLE READ` hai jo MVCC (Multi-Version Concurrency Control) use karta hai taaki reads kabhi writes ko block na karein. Deadlock tab hota hai jab do transactions aapas mein ek doosre ke locked rows ka wait karti hain. MySQL automatic deadlock detect karke ek transaction ko rollback kar deta hai.',
          funnyExample: {
            scenario: 'The Deadlock Standoff:\n- Transaction 1 holds Lock on Table A, wants Lock on Table B 🔒👉\n- Transaction 2 holds Lock on Table B, wants Lock on Table A 🔒👈\n- Result: Mexican Standoff! Dono ek dusre ko bol rahe hain "Pehle tu chhod!" 🤠🔫\n- MySQL Deadlock Detector: "Tum dono chup raho, main Transaction 2 ko rollback karta hoon!" 💥',
            punchline: 'Deadlocks require consistent lock ordering and retry logic!'
          },
          visualDiagram: {
            title: 'Transaction Isolation Levels & Concurrency Anomalies',
            nodes: [
              'READ UNCOMMITTED: Allows Dirty Reads (Reading uncommitted data)',
              'READ COMMITTED: Prevents Dirty Reads; allows Non-Repeatable Reads',
              'REPEATABLE READ (MySQL Default): Prevents Dirty & Non-Repeatable Reads via MVCC',
              'SERIALIZABLE: Strict locking; prevents all anomalies including Phantoms'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'InnoDB MVCC (Multi-Version Concurrency Control):',
            steps: [
              'Every row has hidden system columns: `DB_TRX_ID` (Transaction ID) and `DB_ROLL_PTR` (Roll Pointer)',
              'When a row is updated, the old version is written to Undo Log tablespace',
              'SELECT queries read consistent snapshots from undo logs without taking locks (Non-blocking reads)'
            ]
          },
          code: `-- 1. Check and Set Global/Session Isolation Level
SELECT @@transaction_isolation;
SET SESSION TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- 2. Explicit Locking Queries (Pessimistic Locking)
START TRANSACTION;

-- Exclusive Row Lock (FOR UPDATE) - Prevents others from reading/modifying this row
SELECT * FROM products 
WHERE id = 101 
FOR UPDATE;

-- Update safely with exclusive lock held
UPDATE products 
SET stock_quantity = stock_quantity - 1 
WHERE id = 101;

COMMIT;

-- 3. Shared Lock (FOR SHARE / LOCK IN SHARE MODE)
-- Allows others to read, but prevents any write/modification
START TRANSACTION;
SELECT * FROM courses WHERE id = 501 FOR SHARE;
COMMIT;

-- 4. Inspect Active Locks & Deadlock History
SHOW ENGINE INNODB STATUS;`,
          codeBreakdown: [
            { part: 'SELECT ... FOR UPDATE', label: 'Acquires exclusive (X) row lock preventing concurrent transactions from modifying or locking this record', color: '#3b82f6' },
            { part: 'FOR SHARE', label: 'Acquires shared (S) lock permitting concurrent reads but blocking conflicting updates', color: '#10b981' },
            { part: 'SHOW ENGINE INNODB STATUS', label: 'Prints comprehensive engine diagnostic dump including the most recent recorded deadlock trace', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Multi-table transactions mein inconsistent order mein locks acquire karna (e.g. Tx1 locks A then B, Tx2 locks B then A -> Causes Deadlock)',
            '❌ High-traffic checkout API mein bina `FOR UPDATE` ke inventory check karna (Causes race condition & overselling)'
          ],
          miniChallenge: 'Ek pessimistic locking query likho jo inventory update karne se pehle `FOR UPDATE` use kare.',
          quiz: {
            question: 'MySQL InnoDB storage engine ka default transaction isolation level kaunsa hota hai?',
            options: ['READ UNCOMMITTED', 'READ COMMITTED', 'REPEATABLE READ', 'SERIALIZABLE'],
            answer: 'REPEATABLE READ',
            explanation: 'MySQL InnoDB default roop se `REPEATABLE READ` isolation level use karta hai jo MVCC snapshot reads ke sath dirty reads aur non-repeatable reads ko prevent karta hai.'
          },
          summary: [
            'Isolation levels concurrency performance aur data consistency ke beech trade-off balance karte hain',
            'InnoDB MVCC non-blocking consistent reads provide karta hai',
            'FOR UPDATE pessimistic locking se race conditions aur overselling prevent hoti hai'
          ],
          flashcard: {
            q: 'Deadlock hone par application layer ko kya karna chahiye?',
            a: 'Application ko MySQL Error 1213 (Deadlock found) catch karke exponential backoff ke sath transaction ko automatically retry karna chahiye.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: VIEWS, PROCEDURES, TRIGGERS & ADVANCED MYSQL
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Views, Stored Procedures, Triggers & Advanced MySQL Features',
      lessons: [
        {
          id: 'mysql-views-procedures-triggers',
          title: 'Programmability: Views, Stored Procedures, Functions & Triggers',
          emoji: '⚙️',
          xpReward: 45,
          badgeName: 'SQL Programmer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Database sirf storage nahi hai, iske paas apna dimaag bhi hai! Stored Procedures, Functions aur Triggers se database automatically business logic run kar sakta hai! 🧠"',
            hint: '💡 Masti Sir: "Triggers bohot powerful hain par over-use mat karna — hidden behavior ki wajah se debugging mushkil ho sakti hai!"',
            success: '🎉 Masti Sir: "Database programmability unlocked! Audit logs automatically trigger ho rahe hain! 🔥"',
            mistake: '😅 Masti Sir: "Stored Procedure mein `DELIMITER //` lagana zaroori hai taaki MySQL semicolon ko procedure ka end na samajh le!"'
          },
          englishDef: 'MySQL provides database-level programmability through `VIEWS` (saved virtual queries providing security abstraction), `STORED PROCEDURES` (compiled routine blocks with `IN`, `OUT`, `INOUT` parameters), `STORED FUNCTIONS` (deterministic routines returning scalar values), and `TRIGGERS` (automated callbacks firing `BEFORE/AFTER INSERT/UPDATE/DELETE`).',
          hinglishExplain: 'Database programmability se hum database ke andar logic save kar sakte hain. `VIEW` ek saved query hoti hai jo complex joins ko simple table ki tarah represent karti hai. `STORED PROCEDURE` ek function jaisa hota hai jisme parameters pass karke multiple queries execute ki ja sakti hain. `TRIGGER` ek automatic alarm jaisa hota hai — jaise hi koi user delete ho, trigger automatically audit log table mein entry kar deta hai.',
          funnyExample: {
            scenario: 'The Security Camera Trigger:\n- Table: Bank Accounts 💳\n- Trigger: `AFTER UPDATE ON bank_accounts`\n- Event: Jaise hi kisi account ka balance change hua, Security Camera (Trigger) automatically `audit_logs` table mein photo khinch kar purana balance aur naya balance save kar deta hai! 📸',
            punchline: 'Triggers act as automatic audit watchdogs inside the database!'
          },
          visualDiagram: {
            title: 'Database Programmability Architecture',
            nodes: [
              'VIEW: Saved SQL query abstraction (hides sensitive salary columns)',
              'STORED PROCEDURE: CALL enroll_student(user_id, course_id, @status)',
              'STORED FUNCTION: SELECT calculate_gst(price) -> Returns scalar float',
              'TRIGGER: AFTER INSERT ON orders -> Automatically decrements inventory'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Procedure Delimiters & Trigger Execution:',
            steps: [
              'Default delimiter is `;`. Inside procedures, custom `DELIMITER //` allows multi-statement blocks',
              'Triggers execute in the same transactional context as the triggering statement',
              'If a trigger fails, the entire parent DML statement is rolled back'
            ]
          },
          code: `-- 1. CREATE VIEW: Security Abstraction (Hides salary/password)
CREATE OR REPLACE VIEW v_public_mentors AS
SELECT 
  id, 
  username, 
  email, 
  xp_points 
FROM users 
WHERE role = 'mentor' AND is_active = TRUE;

-- Query the view just like a real table:
SELECT * FROM v_public_mentors WHERE xp_points > 2000;

-- 2. STORED PROCEDURE with IN and OUT parameters
DELIMITER //

CREATE PROCEDURE sp_register_and_enroll(
  IN p_username VARCHAR(50),
  IN p_email VARCHAR(100),
  IN p_course_id INT,
  OUT p_user_id INT
)
BEGIN
  -- Insert User
  INSERT INTO users (username, email, xp_points)
  VALUES (p_username, p_email, 100);
  
  SET p_user_id = LAST_INSERT_ID();
  
  -- Insert Enrollment
  INSERT INTO course_enrollments (learner_id, course_id)
  VALUES (p_user_id, p_course_id);
END //

DELIMITER ;

-- Call the procedure:
-- CALL sp_register_and_enroll('neha_sharma', 'neha@codemasti.com', 1, @new_id);
-- SELECT @new_id;

-- 3. AUDIT TRIGGER (Fires automatically on every User XP update)
DELIMITER //

CREATE TRIGGER trg_user_xp_audit
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
  IF OLD.xp_points <> NEW.xp_points THEN
    INSERT INTO user_xp_history (user_id, old_xp, new_xp, changed_at)
    VALUES (OLD.id, OLD.xp_points, NEW.xp_points, NOW());
  END IF;
END //

DELIMITER ;`,
          codeBreakdown: [
            { part: 'CREATE OR REPLACE VIEW v_public_mentors AS ...', label: 'Virtual table abstraction providing clean reporting interface and data encapsulation', color: '#3b82f6' },
            { part: 'DELIMITER //', label: 'Temporarily alters command boundary separator to enable compound multi-line procedural definitions', color: '#10b981' },
            { part: 'AFTER UPDATE ON users FOR EACH ROW', label: 'Trigger hook accessing OLD and NEW pseudo-records to log audit changes', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Business logic ko 100% stored procedures mein daal dena (hard to version control, test and scale horizontally; keep core logic in backend app code)',
            '❌ Recursive triggers ya heavy operations triggers ke andar run karna (slows down all regular INSERT/UPDATE operations)'
          ],
          miniChallenge: 'Ek VIEW banao `v_course_stats` jo course title ke sath total enrolled students count dikhaye.',
          quiz: {
            question: 'Trigger ke andar update hone se pehle ki purani value read karne ke liye kaunsa keyword use hota hai?',
            options: ['OLD.column_name', 'PREV.column_name', 'BEFORE.column_name', 'PAST.column_name'],
            answer: 'OLD.column_name',
            explanation: 'MySQL triggers mein `OLD.column_name` update/delete se pehle ki value represent karta hai, aur `NEW.column_name` nayi incoming value represent karta hai.'
          },
          summary: [
            'Views complex SQL queries ko reusable virtual tables mein abstract karte hain',
            'Stored Procedures batch operations aur parameterization support karte hain',
            'Triggers data modification events par automatic audit aur business validation execute karte hain'
          ],
          flashcard: {
            q: 'Stored Procedure aur Stored Function mein kya main difference hai?',
            a: 'Stored Function hamesha ek single scalar value return karta hai aur `SELECT` query ke andar direct use ho sakta hai; Stored Procedure `CALL sp_name()` se execute hota hai aur multiple result sets ya OUT parameters return kar sakta hai.'
          }
        },
        {
          id: 'mysql-json-fulltext-temp',
          title: 'Advanced Features: JSON Data Type, Full-Text Search & Temporary Tables',
          emoji: '🧩',
          xpReward: 45,
          badgeName: 'MySQL Polyglot',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Log sochte hain JSON sirf MongoDB mein hota hai! MySQL 8.0 mein JSON documents, arrow operators (`->`), aur FULLTEXT search itne fast hain ki NoSQL ki kami mehsus hi nahi hogi! 😎"',
            hint: '💡 Masti Sir: "`->` JSON object return karta hai, jabki `->>` unquoted clean text string return karta hai!"',
            success: '🎉 Masti Sir: "Semi-structured JSON aur Natural Language Full-Text search master ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "Poora database JSON column mein mat bhar dena — relational data ko structured tables mein hi rakho!"'
          },
          englishDef: 'MySQL supports native `JSON` documents with virtual generated columns, arrow extraction operators (`->`, `->>`), and JSON functions (`JSON_EXTRACT`, `JSON_ARRAY`, `JSON_OBJECT`). `FULLTEXT` indexes enable natural language search via `MATCH(...) AGAINST(...)`, while `TEMPORARY TABLES` provide session-scoped scratchpads for complex multi-stage batch processing.',
          hinglishExplain: 'MySQL 8.0 mein semi-structured data ke liye native `JSON` type milta hai jisme aap nested objects aur arrays store karke unhe query kar sakte ho (`->>` operator se clean text nikalta hai). Large articles aur blog posts mein Google-style keyword search ke liye `FULLTEXT` index aur `MATCH() AGAINST()` use hota hai. `TEMPORARY TABLE` sirf current user session tak rehti hai aur disconnect hote hi automatically delete ho jaati hai.',
          funnyExample: {
            scenario: 'Search Engine Analogy:\n- Standard LIKE: `WHERE content LIKE \'%react%\'` (Slow table scan, cannot rank relevance) 🐢\n- FULLTEXT Search: `WHERE MATCH(title, body) AGAINST(\'react performance\' IN NATURAL LANGUAGE MODE)` -> Instant relevance score ranked results! 🚀',
            punchline: 'FULLTEXT gives you Google-style ranked search inside MySQL!'
          },
          visualDiagram: {
            title: 'MySQL Native JSON Querying Flow',
            nodes: [
              'JSON Column: metadata = {"specs": {"ram": "16GB", "cpu": "M3"}}',
              'Operator -> : metadata->\'$.specs.ram\' -> Returns \'"16GB"\' (JSON string with quotes)',
              'Operator ->>: metadata->>\'$.specs.ram\' -> Returns \'16GB\' (Unquoted clean text)',
              'Virtual Column + Index: Generated column on JSON field enables fast B-Tree indexing!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'FULLTEXT Inverted Index Engine:',
            steps: [
              'Breaks text into words (tokens), eliminates stop words (the, a, is)',
              'Builds Inverted Index mapping word tokens to document row pointers',
              '`MATCH ... AGAINST` computes TF-IDF relevance score for instant ranking'
            ]
          },
          code: `-- 1. JSON Querying with Arrow Operators
SELECT 
  id,
  title,
  metadata->>'$.brand' AS brand,
  metadata->>'$.specs.ram' AS ram_size,
  JSON_EXTRACT(metadata, '$.tags[0]') AS primary_tag
FROM products_catalog
WHERE metadata->>'$.brand' = 'Apple';

-- 2. Indexing JSON via Virtual Generated Column
ALTER TABLE products_catalog 
ADD COLUMN brand_name VARCHAR(50) 
GENERATED ALWAYS AS (metadata->>'$.brand') STORED;

CREATE INDEX idx_products_brand ON products_catalog(brand_name);

-- 3. FULLTEXT Search on Articles / Courses
CREATE TABLE article_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  FULLTEXT idx_ft_content (title, content)
) ENGINE=InnoDB;

-- Natural Language Mode Search with Relevance Score
SELECT 
  id, 
  title,
  MATCH(title, content) AGAINST('mysql optimization index' IN NATURAL LANGUAGE MODE) AS relevance_score
FROM article_posts
WHERE MATCH(title, content) AGAINST('mysql optimization index' IN NATURAL LANGUAGE MODE)
ORDER BY relevance_score DESC;

-- 4. Session-Scoped Temporary Table
CREATE TEMPORARY TABLE temp_active_students AS
SELECT id, username, xp_points FROM users WHERE is_active = TRUE;

SELECT * FROM temp_active_students WHERE xp_points > 1000;
-- Automatically dropped when database connection closes!`,
          codeBreakdown: [
            { part: "metadata->>'$.specs.ram'", label: 'Unquoted inline JSON extraction operator pulling nested object property as raw text', color: '#3b82f6' },
            { part: 'FULLTEXT idx_ft_content (title, content)', label: 'Constructs inverted index for high-speed lexical and natural language text searching', color: '#10b981' },
            { part: 'CREATE TEMPORARY TABLE', label: 'Session-isolated scratchpad table automatically destroyed upon client disconnection', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ JSON column par direct index banane ki koshish karna (use Virtual Generated Column + Index)',
            '❌ `->` aur `->>` mein confuse hona (`->` returns JSON with quotes `""`, `->>` returns raw text)'
          ],
          miniChallenge: 'Ek JSON query likho jo `users.profile` column se `city` extract karke filter kare.',
          quiz: {
            question: 'MySQL mein JSON column se property ko bina quotes ke clean text string ke roop mein nikaalne ke liye kaunsa operator use hota hai?',
            options: ['->', '->>', '::text', '=>'],
            answer: '->>',
            explanation: '`->>` (inline unquoting extract operator) JSON field se value ko bina quotation marks ke clean text string ke roop mein extract karta hai.'
          },
          summary: [
            'JSON data type relational tables ke andar semi-structured flexibility provide karta hai',
            'Virtual generated columns JSON properties par high-speed indexing enable karte hain',
            'FULLTEXT indexes large text bodies par relevance-ranked keyword search provide karte hain'
          ],
          flashcard: {
            q: 'Temporary Table aur Permanent Table mein kya difference hai?',
            a: '`TEMPORARY TABLE` sirf current database connection session ke liye exist karti hai, doosre users ko visible nahi hoti, aur connection close hote hi automatically memory/disk se destroy ho jaati hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: SECURITY, ADMINISTRATION, BACKUP & HA
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: Security, Administration, Backup & High Availability',
      lessons: [
        {
          id: 'mysql-security-injection-grants',
          title: 'MySQL Security, User Management & SQL Injection Prevention',
          emoji: '🛡️',
          xpReward: 50,
          badgeName: 'Security Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "User input ko string concatenation se direct SQL query mein chipka diya? Masti Sir: \'Bhai, database ko public Wi-Fi mat banao!\' Parameterized queries use karo! 😂"',
            hint: '💡 Masti Sir: "Principle of Least Privilege: Web app backend ko kabhi `root` user access mat do — sirf wahi privileges do jinki usko zaroorat hai!"',
            success: '🎉 Masti Sir: "Zero SQL Injection vulnerabilities! Bank-grade user security achieved! 🛡️"',
            mistake: '😅 Masti Sir: "Frontend React app mein database password store karna ya GitHub par .env push karna sabse dangerous mistake hai!"'
          },
          englishDef: 'Database security encompasses User Management (`CREATE USER`, `GRANT`, `REVOKE`, `SHOW GRANTS`), Principle of Least Privilege, Secret Management (environment variables), and preventing SQL Injection through Prepared Statements and Parameterized Queries. Direct string concatenation of untrusted user input into SQL commands is strictly forbidden in production systems.',
          hinglishExplain: 'Database security ka sabse important rule hai: User input par kabhi andha bharosa mat karo. Agar aap user ka input direct query mein jodh kar bhejoge, toh hacker malicious SQL code (jaise `\' OR \'1\'=\'1`) daal kar poora database delete ya steal kar sakta hai. Isko SQL Injection kehte hain. Iska 100% solution hai Prepared Statements / Parameterized Queries use karna. Saath hi backend app ko sirf limited permissions (`SELECT, INSERT, UPDATE`) wala user dena chahiye, root admin nahi.',
          funnyExample: {
            scenario: 'The Classic SQL Injection Trap:\n- Vulnerable Code: `"SELECT * FROM users WHERE email = \'" + userInput + "\'"`\n- Hacker Input: `admin@codemasti.com\' OR \'1\'=\'1` 💀\n- Generated Query: `SELECT * FROM users WHERE email = \'admin@codemasti.com\' OR \'1\'=\'1\';` (Logs in as Admin without password! 😱)\n- Safe Prepared Query: `SELECT * FROM users WHERE email = ?` (Input treated strictly as text string, hacker blocked! 🛡️)',
            punchline: 'Always use parameterized queries — never concatenate raw user input!'
          },
          visualDiagram: {
            title: 'SQL Injection Vulnerability vs Prepared Statement Protection',
            nodes: [
              'Vulnerable: String Concatenation -> Input executed as executable SQL commands (Dangerous!)',
              'Secure Prepared Statement: Query compiled first with ? placeholders -> Input bound strictly as data parameters (100% Safe)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Prepared Statement Two-Phase Protocol:',
            steps: [
              'Phase 1 (PREPARE): Application sends query template with ? placeholders to MySQL Server. Server parses syntax and builds execution plan',
              'Phase 2 (EXECUTE): Application sends raw parameter values. Server executes pre-compiled plan treating values purely as literals (cannot alter syntax)'
            ]
          },
          code: `-- ── 1. USER MANAGEMENT & PRINCIPLE OF LEAST PRIVILEGE ──

-- Create dedicated application user (Restricted to specific host)
CREATE USER 'codemasti_app'@'localhost' IDENTIFIED BY 'Strong_App_P@ssw0rd!2026';

-- Grant only required CRUD permissions on specific database
GRANT SELECT, INSERT, UPDATE, DELETE 
ON codemasti_db.* 
TO 'codemasti_app'@'localhost';

-- Inspect granted permissions
SHOW GRANTS FOR 'codemasti_app'@'localhost';

-- Revoke dangerous permissions if needed
REVOKE DROP, ALTER ON codemasti_db.* FROM 'codemasti_app'@'localhost';
FLUSH PRIVILEGES;

-- ── 2. PREPARED STATEMENTS (SQL Injection Immune) ──
-- Template with ? placeholder
PREPARE stmt_find_user FROM 'SELECT id, username, email, xp_points FROM users WHERE email = ? AND is_active = ?';

-- Bind parameters
SET @input_email = 'kabir@codemasti.com';
SET @input_active = 1;

-- Execute safely
EXECUTE stmt_find_user USING @input_email, @input_active;

-- Deallocate memory when done
DEALLOCATE PREPARE stmt_find_user;`,
          codeBreakdown: [
            { part: "CREATE USER 'codemasti_app'@'localhost'", label: 'Creates isolated service account restricted strictly to localhost connections', color: '#3b82f6' },
            { part: 'GRANT SELECT, INSERT, UPDATE, DELETE', label: 'Implements Least Privilege by granting only required CRUD operations without DDL destruction rights', color: '#10b981' },
            { part: 'EXECUTE stmt_find_user USING @input_email', label: 'Executes pre-compiled statement treating parameters strictly as literal data values', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Web application ko `root` user credentials se connect karna',
            '❌ Dynamic SQL queries mein user input concatenate karna (`SELECT ... WHERE id = " + req.body.id`)'
          ],
          miniChallenge: 'Ek limited user `report_reader` banao jisko sirf `SELECT` permission ho.',
          quiz: {
            question: 'SQL Injection vulnerabilities ko completely eliminate karne ka sabse reliable and standard tareeka kaunsa hai?',
            options: [
              'Input text ko sanitize karne ke liye regex use karna',
              'Prepared Statements aur Parameterized Queries use karna',
              'Database port change kar dena',
              'Root user ka password bada kar dena'
            ],
            answer: 'Prepared Statements aur Parameterized Queries use karna',
            explanation: 'Prepared Statements query syntax aur input data ko completely alag kar dete hain, jisse malicious input kabhi executable code ki tarah run nahi ho sakta.'
          },
          summary: [
            'Least Privilege principle application users ko sirf necessary permissions grant karta hai',
            'SQL Injection user input concatenation ki wajah se hota hai',
            'Prepared statements parameterized execution se injection attacks ko 100% block karte hain'
          ],
          flashcard: {
            q: 'Principle of Least Privilege kya hota hai?',
            a: 'Har user ya application service ko sirf wahi minimum permissions dena jo uske task ke liye strictly zaroori hain (e.g. read-only reporting service ko sirf `SELECT` grant karna).'
          }
        },
        {
          id: 'mysql-backup-replication-scaling',
          title: 'Backup, Disaster Recovery, Replication Scaling & Partitioning',
          emoji: '📦',
          xpReward: 50,
          badgeName: 'DevOps DB Admin',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Replication backup nahi hota! Agar galti se Primary DB par `DROP DATABASE` chal gaya toh replica par bhi 1 second mein delete ho jayega! Backup alag cheez hai, Replication alag! 😎"',
            hint: '💡 Masti Sir: "mysqldump logical backup create karta hai (.sql file); Binary Logs se Point-in-Time Recovery (PITR) hoti hai!"',
            success: '🎉 Masti Sir: "High-Availability architecture ready! Primary-Replica read scaling enabled! 🚀"',
            mistake: '😅 Masti Sir: "Backup lena kaafi nahi hai — backup ko restore karke verify karna bhi zaroori hai!"'
          },
          englishDef: 'Enterprise database administration mandates robust Backup strategies (Logical backups via `mysqldump`, Physical snapshots, Point-In-Time Recovery via Binary Logs), High Availability through Primary-Replica Replication (scaling read throughput via replicas while routing writes to Primary), and Table Partitioning (Range, List, Hash) for petabyte-scale data management.',
          hinglishExplain: 'Production systems mein data loss se bachne ke liye regular automated backups liye jaate hain (`mysqldump` se complete SQL dump banta hai). Binary logs se hum server crash hone par exact minute/second tak data restore (Point-in-Time Recovery) kar sakte hain. Replication mein ek Primary DB hota hai (jahan writes hoti hain) aur multiple Read Replicas hote hain (jahan reads distribute hoti hain) jisse application high traffic handle kar sakti hai.',
          funnyExample: {
            scenario: 'The Hospital Architecture:\n- Primary Database = Head Surgeon (Sirf wahi operation/write kar sakte hain) 👨‍⚕️✍️\n- Read Replicas = Assistant Doctors (Patients ki report padh kar check kar sakte hain/read only) 👨‍⚕️📋\n- Backup = Safe Locker jisme sabhi patient records ki photocopy lock hai! 🗄️',
            punchline: 'Replication scales reads; Backups save you from disasters!'
          },
          visualDiagram: {
            title: 'Primary-Replica High Availability Architecture',
            nodes: [
              'Application Backend (Writes -> Primary DB | Reads -> Read Replicas)',
              'MySQL Primary (Writes: INSERT/UPDATE/DELETE -> Appends to Binary Log)',
              'Asynchronous / Semi-Sync Replication Stream',
              'Read Replica 1 (Reads) | Read Replica 2 (Reads) | Read Replica 3 (Analytics)',
              'Daily mysqldump + Continuous Binlog Archive -> Amazon S3 Cold Storage'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How MySQL Binary Log Replication Works:',
            steps: [
              'Primary server writes all schema changes and data modifications to its Binary Log (binlog)',
              'Replica I/O thread connects to Primary and copies binlog events into its local Relay Log',
              'Replica SQL thread reads relay log and executes events sequentially to stay in sync'
            ]
          },
          code: `-- ── 1. LOGICAL BACKUP & RESTORE VIA TERMINAL CLI ──

-- Create complete database dump with stored routines and triggers:
-- mysqldump -u root -p --single-transaction --routines --triggers codemasti_db > codemasti_backup_2026_08_20.sql

-- Restore dump into fresh database:
-- mysql -u root -p codemasti_db < codemasti_backup_2026_08_20.sql

-- ── 2. TABLE PARTITIONING BY RANGE (For Huge Time-Series Datasets) ──
CREATE TABLE traffic_analytics_logs (
  id BIGINT NOT NULL,
  ip_address VARCHAR(45) NOT NULL,
  url_path VARCHAR(255) NOT NULL,
  created_at DATE NOT NULL,
  PRIMARY KEY (id, created_at)
) ENGINE=InnoDB
PARTITION BY RANGE (YEAR(created_at)) (
  PARTITION p_2024 VALUES LESS THAN (2025),
  PARTITION p_2025 VALUES LESS THAN (2026),
  PARTITION p_2026 VALUES LESS THAN (2027),
  PARTITION p_future VALUES LESS THAN MAXVALUE
);

-- Pruning: Query only scans the specific partition file on disk!
EXPLAIN SELECT * FROM traffic_analytics_logs 
WHERE created_at BETWEEN '2026-01-01' AND '2026-08-01';`,
          codeBreakdown: [
            { part: 'mysqldump --single-transaction', label: 'Executes consistent snapshot backup without locking tables or interrupting active users', color: '#3b82f6' },
            { part: 'PARTITION BY RANGE (YEAR(created_at))', label: 'Physically splits large tables into dedicated yearly disk partition files', color: '#10b981' },
            { part: 'PARTITION p_future VALUES LESS THAN MAXVALUE', label: 'Catch-all partition preventing insertion failures for upcoming date intervals', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Sochna ki Replication backup ko replace kar sakti hai (accidental deletion instantly replicates)',
            '❌ Small tables (< 10GB) par premature partitioning implement karna (adds unnecessary complexity)'
          ],
          miniChallenge: 'Explain karo ki `mysqldump --single-transaction` flag InnoDB tables par kyu zaroori hota hai.',
          quiz: {
            question: 'Database Replication ka primary architectural benefit kya hota hai?',
            options: [
              'Read traffic ko multiple replicas par distribute karna aur high-availability provide karna',
              'Database table structure ko auto-format karna',
              'Database ke passwords ko delete kar dena',
              'Storage space ko zero kar dena'
            ],
            answer: 'Read traffic ko multiple replicas par distribute karna aur high-availability provide karna',
            explanation: 'Replication read scaling provide karti hai (reads replica par route hoti hain aur writes primary par) aur primary fail hone par failover enable karti hai.'
          },
          summary: [
            'mysqldump consistent logical backups generate karta hai',
            'Primary-Replica replication high availability aur read scalability enable karti hai',
            'Table Partitioning massive time-series datasets ko physical segments mein divide karti hai'
          ],
          flashcard: {
            q: 'Point-in-Time Recovery (PITR) kaise achieve hoti hai?',
            a: 'Pehle full base backup restore kiya jata hai, fir uske baad ke Binary Logs (`mysqlbinlog`) ko replay karke exact crash timestamp tak data restore kiya jata hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: FULL STACK APPLICATION INTEGRATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: Full Stack Application Integration (Node.js, Express, Python & Prisma)',
      lessons: [
        {
          id: 'mysql-nodejs-express-python',
          title: 'Full Stack Integration: mysql2 Connection Pools, Express REST APIs, Python & Prisma ORM',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'Full Stack Integrator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har HTTP request ke liye naya database connection banaoge toh 100 users aate hi server crash ho jayega! Connection Pool use karo — connections reuse honge aur speed rocket ban jayegi! 🚀"',
            hint: '💡 Masti Sir: "Node.js mein `mysql2/promise` aur Express use karo, aur queries mein hamesha `[params]` array pass karo!"',
            success: '🎉 Masti Sir: "Production-ready REST API with MySQL connection pool and Prisma ORM ready! 🏆"',
            mistake: '😅 Masti Sir: "Database connection credentials hardcode mat karna — `.env` file aur `process.env` use karo!"'
          },
          englishDef: 'Production web applications connect to MySQL using Connection Pooling (`mysql2/promise` in Node.js, `mysql-connector-python` in Python) to reuse existing socket connections and minimize handshake latency. Developers build REST APIs (`GET`, `POST`, `PUT`, `DELETE`), manage schema migrations via ORMs (such as Prisma), and implement transactional consistency across service endpoints.',
          hinglishExplain: 'Full Stack applications mein backend server database se connect karta hai. Har request par naya connection banana bohot heavy hota hai, isliye hum Connection Pool banate hain jo 10-20 connections pehle se ready rakhta hai aur unhe reuse karta hai. Node.js Express mein hum REST APIs banate hain, Parameterized queries execute karte hain, aur Prisma ORM se TypeScript type-safety aur automated database migrations manage karte hain.',
          funnyExample: {
            scenario: 'The Taxi Fleet Pool Analogy:\n- Bad Approach (No Pool): Har passenger ke liye nayi car khareedo, showroom se register karao, fir ride khatam hone par car tod do! 🚗💥 (Insanely slow and expensive!)\n- Good Approach (Connection Pool): 10 Taxis ka ready fleet khada hai — passenger aaya, taxi li, ride khatam hui, taxi wapas pool mein aa gayi agle passenger ke liye! 🚕💨',
            punchline: 'Connection pools reuse connections for maximum throughput!'
          },
          visualDiagram: {
            title: 'Full Stack MySQL Architecture Flow',
            nodes: [
              'React / Next.js Frontend (fetch / axios)',
              'Express.js REST API (/api/v1/courses)',
              'Connection Pool (mysql2 / Prisma ORM - 10 pooled connections)',
              'MySQL Database (InnoDB Engine on Port 3306)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Connection Pool Lifecycle in Node.js:',
            steps: [
              'Application starts and initializes pool with min/max connections (e.g. connectionLimit: 10)',
              'Incoming HTTP request borrows idle connection from pool in < 1ms',
              'Executes parameterized query over existing TCP socket and releases connection back to pool'
            ]
          },
          code: `// ── 1. NODE.JS CONNECTION POOL (db.js) ──
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'codemasti_app',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'codemasti_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ── 2. EXPRESS REST API ROUTE (coursesController.js) ──
import express from 'express';
export const router = express.Router();

// GET /api/courses (With filtering and pagination)
router.get('/courses', async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    let query = 'SELECT id, title, price, category FROM courses WHERE is_published = 1';
    const params = [];
    
    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }
    
    query += ' ORDER BY id ASC LIMIT ? OFFSET ?';
    params.push(Number(limit), Number(offset));
    
    // Execute safe parameterized query
    const [rows] = await pool.query(query, params);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ── 3. PYTHON MYSQL INTEGRATION (app.py) ──
# import mysql.connector
# conn = mysql.connector.connect(host="localhost", user="root", password="pw", database="db")
# cursor = conn.cursor(dictionary=True)
# cursor.execute("SELECT * FROM users WHERE xp_points > %s", (1000,))
# learners = cursor.fetchall()`,
          codeBreakdown: [
            { part: 'mysql.createPool({ connectionLimit: 10 })', label: 'Initializes connection pool managing reusable socket connections', color: '#3b82f6' },
            { part: 'const [rows] = await pool.query(query, params)', label: 'Promise-based parameterized execution preventing SQL injection', color: '#10b981' },
            { part: 'const offset = (Number(page) - 1) * Number(limit)', label: 'Calculates standard pagination window for high-performance API slice fetching', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Har request handler ke andar `mysql.createConnection()` call karna (exhausts server socket descriptors)',
            '❌ Query parameters ko string template literal \`${param}\` se inject karna (causes SQL Injection)'
          ],
          miniChallenge: 'Ek Express POST route likho jo transaction use karke naya order aur order_items insert kare.',
          quiz: {
            question: 'Backend web server mein Connection Pool use karne ka main reason kya hota hai?',
            options: [
              'Har request par naye TCP connection handshake aur authentication ka overhead bacha kar connections reuse karna',
              'Database table ko delete karna',
              'SQL queries ko JavaScript mein convert karna',
              'Frontend CSS ko optimize karna'
            ],
            answer: 'Har request par naye TCP connection handshake aur authentication ka overhead bacha kar connections reuse karna',
            explanation: 'Connection Pool pre-created connections ka pool maintain karta hai jisse har incoming HTTP request bina naye TCP connection handshake overhead ke instant query execute kar sake.'
          },
          summary: [
            'Connection pooling high-concurrency production backends ke liye mandatory hai',
            'Parameterized queries backend APIs ko SQL injection attacks se protect karti hain',
            'Prisma aur ORMs schema migrations aur type-safe query building provide karte hain'
          ],
          flashcard: {
            q: 'Database Migration kya hoti hai?',
            a: 'Migration ek version-controlled code file hoti hai jo database schema changes (jaise nayi table banana ya column modify karna) ko development, staging aur production environments par reliably aur consistently execute karti hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: REAL-WORLD INDUSTRY PROJECTS & CAPSTONE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: Industry Projects & Capstone Database Architecture',
      lessons: [
        {
          id: 'mysql-projects-capstone',
          title: 'Full Stack Capstone: CodeMasti LMS Database Architecture & Analytics System',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'Database Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Tables, Keys, Constraints, Normalization, Indexes, Transactions, CTEs, Window Functions — sab kuch ek saath jod kar CodeMasti LMS ka production database design karenge! 🏆"',
            hint: '💡 Masti Sir: "Real-world database mein audit trails, progress tracking, bookmarks aur transactional XP rewards sab interconnected hote hain!"',
            success: '🎉 Masti Sir: "Incredible achievement! You have designed an enterprise-grade production database architecture! 🚀"',
            mistake: '😅 Masti Sir: "Foreign keys aur indexes ko logically plan karo — production par har foreign key column par index hona mandatory hai!"'
          },
          englishDef: 'The final Capstone Project synthesizes all relational database principles to design the complete production-grade CodeMasti LMS Database Architecture. The model includes Users, Roles, Courses, Lessons, Enrollments, Progress, Quizzes, Questions, Answers, Attempts, Bookmarks, Comments, XP Transactions, and Certificates with full normalization, foreign keys, performance indexes, and analytical reporting queries.',
          hinglishExplain: 'Is Capstone Project mein hum poora CodeMasti LMS database shuru se banayenge. Isme 15 interconnected tables hongi jo Users, Courses, Lessons, Quizzes, XP System, Progress, Bookmarks aur Certificates ko support karengi. Sath hi hum business analytics queries likhenge jo monthly active learners, top rated courses aur student retention metrics calculate karengi.',
          funnyExample: {
            scenario: 'The Complete Masterpiece:\n- 15 Normalized Tables in 3NF 📊\n- Primary & Foreign Keys with CASCADE protections 🔐\n- Performance B-Tree Indexes on all search columns ⚡\n- Atomic Transactions for Quiz Completion & XP Awards 🏦\n- Window Functions for Student Leaderboards 🥇\n- CTEs for Course Progression Analytics 🌲',
            punchline: 'From beginner to complete database architect!'
          },
          visualDiagram: {
            title: 'CodeMasti LMS Complete Schema Architecture',
            nodes: [
              'users (id, username, email, xp_points) <-> roles',
              'courses <-> lessons <-> quizzes <-> questions <-> answers',
              'course_enrollments <-> lesson_progress <-> certificates',
              'xp_transactions <-> bookmarks <-> discussion_comments'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production Scale Considerations:',
            steps: [
              'Partition large event tables (like user_activity_logs or xp_transactions) by date range',
              'Maintain read-replicas for heavy analytical reporting queries',
              'Use Redis caching in front of hot queries (like active course list or user profile)'
            ]
          },
          code: `-- ═══════════════════════════════════════════════════════
-- CODEMASTI LMS PRODUCTION DATABASE SCHEMA
-- ═══════════════════════════════════════════════════════

CREATE DATABASE IF NOT EXISTS codemasti_production_db;
USE codemasti_production_db;

-- 1. Users & Authentication
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  xp_points INT DEFAULT 0,
  role ENUM('student', 'mentor', 'admin') DEFAULT 'student',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. Courses Catalog
CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL UNIQUE,
  category VARCHAR(50) NOT NULL,
  level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
  price DECIMAL(10, 2) DEFAULT 0.00,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_courses_category (category),
  INDEX idx_courses_slug (slug)
) ENGINE=InnoDB;

-- 3. Lessons Entity
CREATE TABLE lessons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  slug VARCHAR(150) NOT NULL,
  chapter_title VARCHAR(150) NOT NULL,
  lesson_order INT NOT NULL,
  xp_reward INT DEFAULT 35,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  INDEX idx_lessons_course_order (course_id, lesson_order)
) ENGINE=InnoDB;

-- 4. Enrollments & Tracking
CREATE TABLE enrollments (
  user_id INT NOT NULL,
  course_id INT NOT NULL,
  enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP NULL,
  PRIMARY KEY (user_id, course_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 5. Progress Tracking
CREATE TABLE lesson_progress (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  lesson_id INT NOT NULL,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_user_lesson (user_id, lesson_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6. Analytics Reporting Query: Course Completion Rates
SELECT 
  c.id AS course_id,
  c.title AS course_title,
  COUNT(DISTINCT e.user_id) AS total_enrolled,
  COUNT(DISTINCT CASE WHEN e.is_completed = TRUE THEN e.user_id END) AS total_graduated,
  ROUND(
    (COUNT(DISTINCT CASE WHEN e.is_completed = TRUE THEN e.user_id END) / 
    NULLIF(COUNT(DISTINCT e.user_id), 0)) * 100, 
    2
  ) AS completion_percentage
FROM courses c
LEFT JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.title
ORDER BY total_enrolled DESC;`,
          codeBreakdown: [
            { part: 'PRIMARY KEY (user_id, course_id)', label: 'Junction table composite primary key enforcing strict cardinality on enrollment relationship', color: '#3b82f6' },
            { part: 'INDEX idx_lessons_course_order (course_id, lesson_order)', label: 'Composite index optimizing sequential curriculum lesson traversal queries', color: '#10b981' },
            { part: 'COUNT(DISTINCT CASE WHEN e.is_completed = TRUE ...)', label: 'Conditional aggregation metric calculating real-time course graduation percentage', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Foreign key columns par index lagana bhool jana (slows down multi-table JOINs)',
            '❌ Zero division error handle na karna in percentage calculation (always use `NULLIF(count, 0)`)'
          ],
          miniChallenge: 'LMS schema ke liye ek `certificates` table create karo with `uuid`, `user_id`, `course_id` aur `issue_date`.',
          quiz: {
            question: 'Relational database design mein conditional aggregation calculate karne ke liye kaunsa pattern use hota hai?',
            options: [
              'COUNT(CASE WHEN condition THEN 1 END)',
              'FILTER_IF(condition)',
              'SELECT IF TRUE',
              'SUM_WHEN()'
            ],
            answer: 'COUNT(CASE WHEN condition THEN 1 END)',
            explanation: 'SQL mein conditional aggregation ke liye `COUNT(CASE WHEN condition THEN 1 END)` ya `SUM(CASE WHEN condition THEN 1 ELSE 0 END)` standard pattern hota hai.'
          },
          summary: [
            'Capstone Project complete production relational architecture synthesize karta hai',
            'Composite primary keys aur indexes query throughput maximize karte hain',
            'Conditional aggregation aur CTEs real-time LMS analytics dashboards power karte hain'
          ],
          flashcard: {
            q: '`NULLIF(val1, val2)` function kya karta hai?',
            a: 'Agar `val1 == val2` ho toh `NULLIF` NULL return karta hai; varna `val1` deta hai. Ye query calculations mein "Division by Zero" errors ko prevent karne ke liye use hota hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 14: FAANG INTERVIEW PREPARATION & PROBLEM BANK
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 14: FAANG SQL Interview Preparation & Problem Bank',
      lessons: [
        {
          id: 'mysql-interview-mastery',
          title: 'Top 20 FAANG SQL Interview Problems (Nth Salary, Gaps & Islands, MoM Growth & System Design)',
          emoji: '💼',
          xpReward: 50,
          badgeName: 'SQL Interview Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Google, Amazon, Microsoft aur top startups ke SQL interview mein jo 20 sabse difficult questions aate hain — N-th highest salary, duplicate removal, consecutive active days — sab yahan master karenge! 😎"',
            hint: '💡 Masti Sir: "Nth highest salary ke liye hamesha `DENSE_RANK()` use karo taaki ties handle hon aur duplicate salaries rank skip na karein!"',
            success: '🥳 Masti Sir: "Zabardast! Congratulations on completing the Complete MySQL Masterclass! You are now a Job-Ready MySQL Database Specialist! 🚀"',
            mistake: '😅 Masti Sir: "Interview mein solution likhne ke baad hamesha time complexity aur edge cases (NULLs, empty tables, ties) zaroor explain karna!"'
          },
          englishDef: 'Comprehensive preparation for Tier-1 and FAANG technical interviews covering classic patterns: N-th Highest Salary (`DENSE_RANK()`), Duplicate Detection and Removal without data loss, Finding Unmatched Records (Anti-Joins), Consecutive Active Logins (Gaps and Islands problem), Month-over-Month Growth Metrics, and Database System Design architecture.',
          hinglishExplain: 'Top product companies ke technical interviews mein aane wale classic SQL problems ko master karein. Har question ka problem statement, optimal query solution, edge cases analysis aur Masti Sir explanation diya gaya hai. In patterns ko samajhne ke baad aap kisi bhi complex SQL interview challenge ko confidence ke sath solve kar sakte hain.',
          funnyExample: {
            scenario: 'The 2nd Highest Salary Classic:\n- Table: Salaries [100k, 100k, 90k, 80k]\n- Flawed `LIMIT 1 OFFSET 1`: Returns 100k! ❌ (Because of tie!)\n- Perfect `DENSE_RANK()`: 100k (Rank 1), 90k (Rank 2) -> Correctly returns 90k! 🎯🏆',
            punchline: 'Always use DENSE_RANK for Nth highest salary to conquer tie edge-cases!'
          },
          visualDiagram: {
            title: 'Top FAANG SQL Patterns Map',
            nodes: [
              '1. Nth Highest Salary -> DENSE_RANK() OVER (ORDER BY salary DESC)',
              '2. Consecutive Active Days -> LAG() / Date Arithmetic (Gaps & Islands)',
              '3. Top N Per Group -> CTE + ROW_NUMBER() / DENSE_RANK()',
              '4. Inactive Users -> LEFT JOIN WHERE right.id IS NULL',
              '5. Month-over-Month Growth -> LAG(revenue, 1) OVER (ORDER BY month)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Interview Strategy Workflow:',
            steps: [
              '1. Clarify Requirements (Ask about duplicates, NULL values, ties, and table volume)',
              '2. Propose Approach (Explain whether to use CTE, Window Function, or JOIN)',
              '3. Write Clean Query with Table Aliases',
              '4. Discuss Edge Cases & Indexing Strategy for Production Scale'
            ]
          },
          code: `-- ── 1. FIND N-TH HIGHEST SALARY (Generic for N=2, N=3, etc.) ──
WITH ranked_salaries AS (
  SELECT 
    emp_id,
    name,
    salary,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
  FROM employees
)
SELECT salary AS second_highest_salary
FROM ranked_salaries
WHERE salary_rank = 2
LIMIT 1;

-- ── 2. FIND DUPLICATE RECORDS ──
SELECT email, COUNT(*) AS occurrences
FROM users
GROUP BY email
HAVING COUNT(*) > 1;

-- ── 3. DELETE DUPLICATES WHILE PRESERVING LOWEST ID ──
DELETE u1 FROM users u1
INNER JOIN users u2 
  ON u1.email = u2.email AND u1.id > u2.id;

-- 4. CONSECUTIVE ACTIVE LOGINS (Gaps & Islands Pattern)
WITH numbered_logins AS (
  SELECT 
    user_id,
    login_date,
    DATE_SUB(login_date, INTERVAL ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) DAY) AS island_group
  FROM user_logins
)
SELECT 
  user_id,
  MIN(login_date) AS streak_start,
  MAX(login_date) AS streak_end,
  COUNT(*) AS consecutive_days
FROM numbered_logins
GROUP BY user_id, island_group
HAVING COUNT(*) >= 3;`,
          codeBreakdown: [
            { part: 'DENSE_RANK() OVER (ORDER BY salary DESC)', label: 'Handles ties cleanly ensuring second highest distinct salary is accurately ranked', color: '#3b82f6' },
            { part: 'DELETE u1 FROM users u1 INNER JOIN users u2 ON u1.email = u2.email AND u1.id > u2.id', label: 'Self-join deletion removing duplicate email records while preserving the oldest original ID', color: '#10b981' },
            { part: 'DATE_SUB(login_date, INTERVAL ROW_NUMBER() ... DAY)', label: 'Gaps and Islands mathematical transformation mapping consecutive date sequences to matching island key', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ N-th highest salary mein `ORDER BY salary DESC LIMIT 1 OFFSET N-1` likhna bina duplicate tie handling ke',
            '❌ Duplicate deletion query mein bina self-join condition ke data wipe kar dena'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise customers nikaale jinhone pichle 6 mahine mein koi purchase nahi kiya.',
          quiz: {
            question: 'SQL interview mein 2nd Highest Salary nikaalte waqt duplicate values (ties) ko accurately handle karne ke liye kaunsi technique sabse reliable hai?',
            options: [
              '`DENSE_RANK() OVER (ORDER BY salary DESC)` with CTE',
              '`LIMIT 1 OFFSET 1`',
              '`ORDER BY salary DESC LIMIT 2`',
              '`MAX(salary) - 1`'
            ],
            answer: '`DENSE_RANK() OVER (ORDER BY salary DESC)` with CTE',
            explanation: '`DENSE_RANK()` duplicate values ko same rank deta hai bina agla rank skip kiye, jisse rank 2 hamesha guaranteed second distinct highest salary return karta hai.'
          },
          summary: [
            'DENSE_RANK Nth highest salary aur ranking problems ke liye industry gold standard hai',
            'Self-joins duplicate records isolation aur cleanup mein help karte hain',
            'Gaps and Islands patterns consecutive date sequences aur user streaks detect karte hain'
          ],
          flashcard: {
            q: 'Gaps & Islands problem kya hoti hai?',
            a: 'Gaps & Islands SQL ka ek classic problem hai jisme continuous sequential data (Islands, jaise 5 din lagatar login) aur beech ke missing gaps ko date arithmetic aur Window Functions se identify kiya jata hai.'
          }
        }
      ]
    }
  ]
}

export default mysqlCourse
