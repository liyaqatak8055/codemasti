export const postgresqlCourse = {
  id: 'postgresql',
  title: 'PostgreSQL',
  description: 'Complete PostgreSQL Masterclass! Enterprise Object-Relational Database architecture, schemas, advanced data types (UUID, JSONB, Arrays, Range types), identity columns, CRUD RETURNING, advanced JOINs (FULL OUTER, LATERAL), CTEs, Recursive CTEs, Window functions, Materialized Views, PL/pgSQL functions & triggers, GIN/GiST/BRIN indexes, EXPLAIN ANALYZE, MVCC internals, VACUUM & autovacuum, locking (SKIP LOCKED), Row Level Security (RLS), partitioning, WAL, logical & physical backups, connection pooling (PgBouncer), Node.js/Python/FastAPI/Prisma integration, multi-tenant SaaS Capstone, aur FAANG interview problems Masti Sir style mein!',
  icon: '🐘',
  category: 'database',
  certificateName: 'POSTGRESQL',
  topicsCount: 135,
  practiceCount: 160,
  projectsCount: 12,
  hoursEstimate: 40,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: POSTGRESQL FUNDAMENTALS, ECOSYSTEM & ARCHITECTURE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: PostgreSQL Fundamentals, Ecosystem & Architecture',
      lessons: [
        {
          id: 'pg-intro-what-is-postgres',
          title: 'What is PostgreSQL, ORDBMS Concepts & PostgreSQL vs MySQL vs MongoDB',
          emoji: '🐘',
          xpReward: 35,
          badgeName: 'Postgres Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL ko sirf normal database mat samjho — ye relational databases ka Swiss Army Knife aur SQL ka gym hai! Thoda advanced hai, lekin muscles bhi solid banata hai! 🐘💪"',
            hint: '💡 Masti Sir: "PostgreSQL ek Object-Relational Database (ORDBMS) hai — isme strict SQL tables ke sath JSONB documents, custom data types, aur arrays natively support hote hain!"',
            success: '🎉 Masti Sir: "Zabardast! PostgreSQL ecosystem aur architecture ka foundation crystal clear ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "MySQL aur PostgreSQL ko identical mat samajhna — PostgreSQL standard compliance, complex queries aur advanced data types mein bohot aage hai!"'
          },
          englishDef: 'PostgreSQL is the world\'s most advanced open-source Object-Relational Database Management System (ORDBMS). Originating from UC Berkeley\'s POSTGRES project, it provides full ACID compliance, Multi-Version Concurrency Control (MVCC), extensible type systems, native JSONB documents, and support for complex analytical workloads. SQL is the query language, while PostgreSQL is the database server engine.',
          hinglishExplain: 'PostgreSQL relational databases ka sabse powerful aur extensible engine hai. Ye sirf traditional tables hi nahi balki JSON documents (`JSONB`), Arrays, Custom Types, aur GIS Location data ko bhi handle karta hai. Modern tech giants (Apple, Spotify, Reddit, Uber) PostgreSQL ko iski reliability, data integrity aur concurrency handling (MVCC) ki wajah se prefer karte hain.',
          funnyExample: {
            scenario: 'Database Showdown Analogy:\n- MySQL = Reliable Maruti Suzuki Swift (Fast, simple, great for straightforward websites) 🚗\n- MongoDB = Electric Scooter (Flexible, easy to load JSON baggage) 🛵\n- PostgreSQL = Heavy-Duty Armored Cyber-Truck (Handles SQL, JSON, GIS maps, complex analytics, and never crashes under load!) 🚚🛡️',
            punchline: 'PostgreSQL = The rock-solid database that never lets your data down!'
          },
          visualDiagram: {
            title: 'PostgreSQL vs MySQL vs MongoDB Core Capabilities',
            nodes: [
              'PostgreSQL: ORDBMS | Strict ACID | JSONB Documents | Arrays | Window Functions | Extensions (PostGIS)',
              'MySQL: RDBMS | Web Default | InnoDB Storage Engine | Fast Key-Value Reads',
              'MongoDB: NoSQL Document Store | Dynamic Schemas | BSON | Horizontal Sharding'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'PostgreSQL Process-Based Architecture:',
            steps: [
              'Postmaster Daemon (postgres parent process) listens on Port 5432',
              'On new connection, Postmaster forks a dedicated Backend Worker Process (1 process per client connection)',
              'Worker processes communicate via Shared Memory (Shared Buffers, WAL Buffers, Lock Table)',
              'Background workers (Checkpointer, Background Writer, Autovacuum Launcher, WAL Writer) manage disk persistence'
            ]
          },
          code: `-- 1. Check PostgreSQL Server Version & System Time
SELECT version();
SELECT current_database(), current_user, inet_server_port(), now();

-- 2. Inspect Server Settings (Shared Buffers & Work Memory)
SHOW shared_buffers;
SHOW work_mem;
SHOW max_connections;`,
          codeBreakdown: [
            { part: 'SELECT version();', label: 'Returns complete PostgreSQL build version string and compiler architecture', color: '#3b82f6' },
            { part: 'SHOW shared_buffers;', label: 'Displays dedicated RAM allocated to PostgreSQL for caching table and index data pages', color: '#10b981' },
            { part: 'SHOW work_mem;', label: 'Specifies memory budget available per sorting operation or hash table join', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ PostgreSQL ko MySQL samajh kar `AUTO_INCREMENT` likhna (use `GENERATED ALWAYS AS IDENTITY` or `SERIAL`)',
            '❌ Port 3306 connect karna instead of default PostgreSQL port 5432'
          ],
          miniChallenge: '`SELECT version()` run karke PostgreSQL version aur active database context inspect karo.',
          quiz: {
            question: 'PostgreSQL ko Object-Relational Database (ORDBMS) kyun kaha jata hai?',
            options: [
              'Kyonki ye sirf JavaScript objects store karta hai',
              'Kyonki ye relational tables ke sath custom data types, inheritance, JSONB aur extensible functions support karta hai',
              'Kyonki ye C++ mein likha gaya hai',
              'Kyonki isme koi SQL queries nahi chalti'
            ],
            answer: 'Kyonki ye relational tables ke sath custom data types, inheritance, JSONB aur extensible functions support karta hai',
            explanation: 'PostgreSQL relational SQL model ko object-oriented capabilities (custom types, table inheritance, rich domain constraints aur extensible procedural languages) ke sath extend karta hai.'
          },
          summary: [
            'PostgreSQL enterprise-grade open-source ORDBMS hai',
            'Multi-Version Concurrency Control (MVCC) aur strict ACID guarantees provide karta hai',
            'Process-based architecture aur Shared Memory buffers use karta hai'
          ],
          flashcard: {
            q: 'PostgreSQL default port number kya hota hai?',
            a: 'PostgreSQL default roop se TCP port **5432** par listen karta hai (jabki MySQL 3306 par chalta hai).'
          }
        },
        {
          id: 'pg-architecture-client-server',
          title: 'PostgreSQL Architecture: Postmaster, Shared Buffers, WAL & Backend Processes',
          emoji: '🏛️',
          xpReward: 35,
          badgeName: 'Systems Explorer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Database ke engine room mein chalte hain! Postmaster, Shared Memory, aur WAL Writer kaise milkar 10,000 queries per second sambhalte hain — internals samajh loge toh DBA ban jaoge! 😎"',
            hint: '💡 Masti Sir: "WAL (Write-Ahead Logging) ensure karta hai ki data pehle disk ke log mein safe ho jaye, taaki server crash hone par bhi 1 byte data na khoye!"',
            success: '🎉 Masti Sir: "PostgreSQL internals fully understood! Superb work! 🔥"',
            mistake: '😅 Masti Sir: "Process-per-connection architecture hone ki wajah se 5000 direct connections server memory chaba jayenge — isliye PgBouncer pooling zaroori hoti hai!"'
          },
          englishDef: 'PostgreSQL architecture operates on a multi-process model. The central `postmaster` supervisor process listens for client connections and forks a dedicated backend process for each active session. Processes communicate via Shared Memory (Shared Buffers for caching 8KB disk blocks, WAL Buffers, and Lock Table) while background utilities (Checkpointer, WAL Writer, Autovacuum) manage asynchronous disk I/O.',
          hinglishExplain: 'PostgreSQL multi-process architecture follow karta hai. Jab bhi aapka backend connect karta hai, master process (`postmaster`) ek naya child process fork karta hai. Sabhi processes Shared Memory (Shared Buffers) access karte hain jahan 8KB ke data blocks RAM mein cache hote hain. Disk par data likhne se pehle PostgreSQL use WAL (Write-Ahead Log) mein likhta hai taaki crash recovery 100% reliable rahe.',
          funnyExample: {
            scenario: 'The Restaurant Kitchen Architecture:\n- Postmaster = Head Receptionist at the door 🛎️\n- Backend Worker = Dedicated personal waiter assigned to your table 🤵\n- Shared Buffers = Central Kitchen Counter where food (data pages) is kept hot in RAM 🍲\n- WAL Log = Bill duplicate copy written before food is served 📝🧾',
            punchline: 'Every connection gets its own dedicated worker process!'
          },
          visualDiagram: {
            title: 'PostgreSQL Server Architecture Flow',
            nodes: [
              'Client Applications (Node.js, Python, psql)',
              'Postmaster Supervisor Process (Port 5432)',
              'Forked Backend Worker Processes (1 per connection)',
              'Shared Memory: Shared Buffers (8KB Blocks) | WAL Buffers | Lock Tables',
              'Storage Engine Disk Files: base/ data directory | pg_wal/ transaction logs'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How PostgreSQL Reads & Writes Data Pages:',
            steps: [
              'Backend worker checks Shared Buffers RAM cache for requested 8KB page',
              'If cache miss occurs, worker issues OS read syscall to fetch page from disk',
              'Modifications (UPDATE/INSERT) mark the RAM buffer page as "dirty"',
              'WAL Writer writes the change to disk WAL log before Checkpointer flushes dirty page to table disk file'
            ]
          },
          code: `-- 1. Inspect Current PostgreSQL Backend Worker Sessions
SELECT 
  pid, 
  usename, 
  datname, 
  client_addr, 
  state, 
  query, 
  backend_start
FROM pg_stat_activity
WHERE state = 'active';

-- 2. Inspect Shared Memory Buffer Cache Stats
SELECT 
  datname, 
  numbackends, 
  xact_commit, 
  xact_rollback, 
  blks_read, 
  blks_hit,
  ROUND(blks_hit::numeric / NULLIF(blks_hit + blks_read, 0) * 100, 2) AS cache_hit_ratio
FROM pg_stat_database
WHERE datname = current_database();`,
          codeBreakdown: [
            { part: 'FROM pg_stat_activity', label: 'System diagnostic catalog displaying active backend worker processes and their running SQL queries', color: '#3b82f6' },
            { part: 'blks_hit / (blks_hit + blks_read)', label: 'Calculates buffer cache hit ratio: values above 99% indicate optimal RAM sizing', color: '#10b981' },
            { part: 'state = "active"', label: 'Filters currently executing worker processes vs idle connection handles', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backend worker sessions monitor na karna (leads to connection exhaustion)',
            '❌ `shared_buffers` ko default 128MB par chhod dena on a 16GB RAM production server (tune to 25% of RAM)'
          ],
          miniChallenge: '`pg_stat_activity` query chala kar active database connections aur unki queries inspect karo.',
          quiz: {
            question: 'PostgreSQL mein client connect hone par naya connection kaise handle hota hai?',
            options: [
              'Postmaster ek naya dedicated child process fork karta hai',
              'Single thread mein saari queries chalti hain',
              'Naya server install hota hai',
              'Node.js ke andar connection banta hai'
            ],
            answer: 'Postmaster ek naya dedicated child process fork karta hai',
            explanation: 'PostgreSQL process-based architecture use karta hai jahan har incoming TCP client connection ke liye Postmaster daemon ek alag backend worker process fork karta hai.'
          },
          summary: [
            'PostgreSQL process-based multi-process model use karta hai',
            'Shared Buffers data blocks ko RAM mein cache karke disk I/O minimize karte hain',
            'WAL (Write-Ahead Logging) crash safety aur data durability ensure karta hai'
          ],
          flashcard: {
            q: '`Cache Hit Ratio` 99%+ hona kyun zaroori hai?',
            a: 'Iska matlab hai 99% data reads seedha RAM (Shared Buffers) se ho rahi hain aur database ko slow magnetic disk ya SSD se fetch nahi karna pad raha.'
          }
        },
        {
          id: 'pg-installation-setup',
          title: 'Installation, Cluster Initialization & Database Configuration',
          emoji: '⚙️',
          xpReward: 35,
          badgeName: 'Cluster Admin',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL setup karna aasan hai, par configuration files (`postgresql.conf` aur `pg_hba.conf`) ko samajhna असली engineering hai! Chalo configure karte hain! ⚙️"',
            hint: '💡 Masti Sir: "`pg_hba.conf` PostgreSQL ka security firewall hai (Host-Based Authentication) jo decide karta hai kaunsa IP connect kar sakta hai!"',
            success: '🎉 Masti Sir: "Cluster setup and configuration verified! Ready for production! 🔥"',
            mistake: '😅 Masti Sir: "`listen_addresses = \'*\'` set kiye bina remote server se connect karne ki koshish karna connection refused dega!"'
          },
          englishDef: 'PostgreSQL cluster initialization (`initdb`) creates the physical database storage directory containing `postgresql.conf` (server configuration variables such as `shared_buffers`, `work_mem`, `listen_addresses`) and `pg_hba.conf` (Host-Based Authentication rules regulating client connections by type, database, user, CIDR IP address, and authentication method like scram-sha-256).',
          hinglishExplain: 'PostgreSQL install karne ke baad do main configuration files hoti hain:\n1. `postgresql.conf`: Server performance settings (memory, ports, logging, connections).\n2. `pg_hba.conf`: Security rules (kaunse IP address se kaunsa user login kar sakta hai using password encryption `scram-sha-256`).',
          funnyExample: {
            scenario: 'The Bouncer at the Club Gate:\n- Client connects from IP `192.168.1.50` 🚪\n- PostgreSQL checks `pg_hba.conf`: "Is IP 192.168.1.50 allowed to login as user `app_user` with SCRAM password?"\n- If matched -> Access Granted! 🎟️\n- If not in list -> Connection Rejected at the gate! 🚫',
            punchline: 'pg_hba.conf is PostgreSQL\'s gatekeeper security guard!'
          },
          visualDiagram: {
            title: 'PostgreSQL Configuration Architecture',
            nodes: [
              'initdb -> Creates Data Directory (/var/lib/postgresql/data)',
              'postgresql.conf -> listen_addresses, port, shared_buffers, work_mem',
              'pg_hba.conf -> host | database | user | address | auth-method (scram-sha-256)',
              'PostgreSQL Daemon -> Loads configs & listens on 0.0.0.0:5432'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Configuration Reload Mechanics:',
            steps: [
              'Many postgresql.conf settings can be updated without server restart',
              '`SELECT pg_reload_conf();` signals Postmaster (SIGHUP) to re-read config files',
              'Settings requiring shared memory resize (like shared_buffers) require a full server restart'
            ]
          },
          code: `-- 1. Check Configuration Settings Dynamically
SELECT name, setting, unit, context, short_desc 
FROM pg_settings 
WHERE name IN ('listen_addresses', 'port', 'shared_buffers', 'work_mem', 'password_encryption');

-- 2. Reload Configuration without restarting server
SELECT pg_reload_conf();

-- 3. Example pg_hba.conf entry (Host Based Authentication):
-- TYPE  DATABASE        USER            ADDRESS                 METHOD
-- local all             all                                     peer
-- host  codemasti_db    codemasti_app   127.0.0.1/32            scram-sha-256
-- host  all             all             0.0.0.0/0               scram-sha-256`,
          codeBreakdown: [
            { part: 'FROM pg_settings', label: 'System catalog containing all runtime configuration parameters and descriptions', color: '#3b82f6' },
            { part: 'SELECT pg_reload_conf();', label: 'Sends SIGHUP signal to server to apply updated configuration without dropping active connections', color: '#10b981' },
            { part: 'scram-sha-256', label: 'Modern cryptographic authentication algorithm protecting passwords against sniffing and replay attacks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `pg_hba.conf` edit karne ke baad reload na karna',
            '❌ Passwords ke liye outdated insecure `md5` ya `trust` method use karna (always use `scram-sha-256`)'
          ],
          miniChallenge: '`pg_settings` query karke `max_connections` aur `timezone` check karo.',
          quiz: {
            question: 'PostgreSQL mein client IP addresses aur authentication methods restrict karne ke liye kaunsi configuration file use hoti hai?',
            options: ['postgresql.conf', 'pg_hba.conf', 'pg_ident.conf', 'database.json'],
            answer: 'pg_hba.conf',
            explanation: '`pg_hba.conf` (Host-Based Authentication) file client connections, IP ranges, users aur authentication methods regulate karti hai.'
          },
          summary: [
            'postgresql.conf performance aur server parameters tune karta hai',
            'pg_hba.conf network access aur SCRAM-SHA-256 authentication enforce karta hai',
            'pg_reload_conf() active connections interrupt kiye bina config update karta hai'
          ],
          flashcard: {
            q: '`scram-sha-256` authentication kya hai?',
            a: 'PostgreSQL ka modern, industry-standard cryptographic authentication mechanism jo salted challenge-response use karke network par passwords securely verify karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: COMMAND-LINE MASTERY (psql) & PGADMIN
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Command-Line Mastery (psql) & pgAdmin',
      lessons: [
        {
          id: 'pg-psql-cli-mastery',
          title: 'psql Command Line Mastery (Meta-Commands, Timing & Diagnostics)',
          emoji: '💻',
          xpReward: 35,
          badgeName: 'psql Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Terminal kholo aur psql ke magic meta-commands chalao! Backslash commands (`\\l`, `\\dt`, `\\d+`, `\\timing`) seekh loge toh terminal par haath bijli ki tarah chalega! ⚡"',
            hint: '💡 Masti Sir: "`\\d+ table_name` table ke columns, data types, indexes, foreign keys aur storage rules sab kuch ek screen par dikha deta hai!"',
            success: '🎉 Masti Sir: "psql CLI fully conquered! Production server debugging ab bilkul aasan hai! 🚀"',
            mistake: '😅 Masti Sir: "psql meta-commands (`\\dt`, `\\c`, `\\q`) ke end mein semicolon (;) lagane ki zaroorat nahi hoti!"'
          },
          englishDef: '`psql` is the native interactive command-line terminal for PostgreSQL. It supports standard SQL and proprietary backslash meta-commands: `\\l` (list databases), `\\c dbname` (connect to database), `\\dt` (list tables), `\\d table` (describe table structure), `\\d+ table` (detailed description with indexes and constraints), `\\dn` (list schemas), `\\du` (list roles), `\\timing` (toggle execution runtime measurement), `\\x` (expanded auto-vertical display), and `\\q` (quit).',
          hinglishExplain: '`psql` PostgreSQL ka official terminal client hai. Linux servers par production debugging ke liye psql sabse fast tool hai. Isme backslash `\\` se start hone wale meta-commands hote hain jo direct information nikaalte hain: `\\dt` se saari tables dikhti hain, `\\d+ users` se table ke columns + indexes + triggers sab ek sath dikhte hain, aur `\\timing` se har query ka execution time milliseconds mein print hota hai.',
          funnyExample: {
            scenario: 'The Matrix Terminal Experience:\n- Junior Dev: Opens 500MB pgAdmin GUI and waits 2 minutes for window to load ⏳😫\n- Pro DBA: Types `psql -U postgres -d app_db` -> `\\timing` -> `\\dt+` in 0.2 seconds and solves the issue like Neo in The Matrix! 🕶️⚡',
            punchline: 'psql is pure speed for real database engineers!'
          },
          visualDiagram: {
            title: 'Top Essential psql Meta-Commands Cheat Sheet',
            nodes: [
              '\\l -> List all databases on server cluster',
              '\\c db_name -> Connect / switch active database context',
              '\\dt -> List tables in active schema',
              '\\d+ table_name -> Describe table with full indexes, constraints & storage',
              '\\dn -> List all schemas | \\du -> List all user roles & privileges',
              '\\timing -> Toggle query execution time stopwatch | \\q -> Quit psql'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How psql Meta-Commands Work Internally:',
            steps: [
              'psql does not have special server protocol commands',
              'Every `\\` meta-command is translated by psql into a standard SQL query against PostgreSQL system catalogs (`pg_class`, `pg_attribute`, `pg_namespace`)',
              'Running `psql -E` prints the underlying SQL queries executed by each meta-command'
            ]
          },
          code: `-- ── 1. ESSENTIAL PSQL TERMINAL COMMANDS ──

-- Connect to PostgreSQL from Terminal:
-- psql -h localhost -p 5432 -U postgres -d codemasti_db

-- Inside psql prompt:
-- \\l                  -- List all databases
-- \\c codemasti_db     -- Connect to codemasti_db
-- \\dn                 -- List schemas (public, analytics)
-- \\dt                 -- List tables in active schema
-- \\d+ users           -- Deep inspection: columns, data types, indexes, constraints, child tables
-- \\du                 -- List all roles and privileges
-- \\timing             -- Toggle query execution stopwatch ON
-- \\x auto             -- Auto-switch to vertical format for wide column records
-- \\q                  -- Exit psql session

-- 2. Inspecting Catalogs via SQL
SELECT schemaname, tablename, tableowner, tablespace, hasindexes 
FROM pg_tables 
WHERE schemaname = 'public';`,
          codeBreakdown: [
            { part: '\\d+ users', label: 'Displays columns, types, collation, nullability, default sequences, indexes, and foreign key references', color: '#3b82f6' },
            { part: '\\timing', label: 'Toggles client-side execution stopwatch displaying elapsed query time in milliseconds', color: '#10b981' },
            { part: '\\x auto', label: 'Expands wide multi-column result sets into readable key-value vertical records', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backslash meta-commands (`\\dt`, `\\d`) ke aage semicolon lagana (not required)',
            '❌ `\\q` ki jagah `exit` ya `quit` type karke atak jana'
          ],
          miniChallenge: 'Terminal mein `psql` connect karo, `\\timing` enable karo aur `\\d+` se kisi table ke indexes inspect karo.',
          quiz: {
            question: 'psql CLI mein kisi table ke columns ke sath uske saare indexes aur foreign key constraints inspect karne ke liye kaunsi command use hoti hai?',
            options: ['\\dt', '\\d+ table_name', '\\list', '\\inspect'],
            answer: '\\d+ table_name',
            explanation: '`\\d+ table_name` detailed description provide karta hai jisme columns, data types, defaults, indexes, foreign keys aur referencing constraints sab list hote hain.'
          },
          summary: [
            'psql lightweight, lightning-fast terminal client hai',
            'Backslash meta-commands system catalogs ko seamlessly query karte hain',
            '\\timing aur \\x debugging aur profiling workflows ko streamline karte hain'
          ],
          flashcard: {
            q: 'psql mein `\\x` command kya karti hai?',
            a: '`\\x` (Expanded Display) result rows ko horizontal table ki jagah vertically (key-value pair format) mein display karta hai, jo wide tables jisme 20+ columns hon unhe padhna bohot aasan banata hai.'
          }
        },
        {
          id: 'pg-pgadmin-tools',
          title: 'pgAdmin Management GUI, Visual Query Tools & ERD Modeler',
          emoji: '🖥️',
          xpReward: 35,
          badgeName: 'GUI Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Visual ERD diagrams banana ho ya Graphical Explain Plan dekh kar slow query pakadna ho — pgAdmin visual developers ka best friend hai! 🖥️"',
            hint: '💡 Masti Sir: "pgAdmin Query Tool mein `F7` se Explain Plan aur `Shift+F7` se Explain Analyze visual tree khul jata hai!"',
            success: '🎉 Masti Sir: "pgAdmin GUI tools aur visual diagnostics fully mastered! 🔥"',
            mistake: '😅 Masti Sir: "GUI se database drop karte waqt dhyan rakhein — confirmation prompt dhyan se padhein!"'
          },
          englishDef: 'pgAdmin 4 is the leading open-source web and desktop management platform for PostgreSQL. It provides an interactive Query Tool, Visual Explain Plan visualizer, Graphical ERD (Entity Relationship Diagram) modeler, Schema tree explorer, Role & Privilege manager, and integrated Backup/Restore utilities.',
          hinglishExplain: 'pgAdmin PostgreSQL ka graphical management interface hai. Isme aap database schema tree ko visually browse kar sakte hain, Query Tool mein SQL likh sakte hain, aur Graphical Explain Plan se dekh sakte hain ki query mein kahan Seq Scan ya Nested Loop chal raha hai. Saath hi iska ERD Tool visual database diagrams generate karta hai.',
          funnyExample: {
            scenario: 'Visual Query Inspection:\n- Query slow hai 🐢\n- pgAdmin Query Tool mein `Explain Analyze` button click kiya 📊\n- Screen par visual red alert block dikha: "Seq Scan on 1,000,000 rows (Cost: 45,000)" 🚨\n- Visual diagram ne 1 second mein exact bottleneck dikha diya!',
            punchline: 'Visual Explain Plans turn complex query metrics into clear interactive maps!'
          },
          visualDiagram: {
            title: 'pgAdmin 4 Feature Workflow',
            nodes: [
              'Servers Tree -> Databases -> Schemas -> Tables -> Views -> Functions',
              'Query Tool (F5 Execute, F7 Visual Explain Plan)',
              'ERD Tool -> Generate Schema Diagrams with Foreign Key connectors',
              'Maintenance Tool -> VACUUM, ANALYZE, REINDEX, Backup & Restore'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'pgAdmin Client-Server Architecture:',
            steps: [
              'pgAdmin 4 runs as a Python Flask web application communicating with browser UI',
              'Connects to PostgreSQL instances via psycopg driver over TCP sockets',
              'Translates UI actions into SQL DDL/DML statements sent to PostgreSQL server'
            ]
          },
          code: `-- 1. Schema Diagnostic Query executed by pgAdmin Explorer
SELECT 
  c.relname AS table_name,
  n.nspname AS schema_name,
  pg_size_pretty(pg_total_relation_size(c.oid)) AS total_size,
  pg_size_pretty(pg_relation_size(c.oid)) AS data_size,
  pg_size_pretty(pg_indexes_size(c.oid)) AS index_size
FROM pg_class c
JOIN pg_namespace n ON n.oid = c.relnamespace
WHERE n.nspname = 'public' AND c.relkind = 'r'
ORDER BY pg_total_relation_size(c.oid) DESC;`,
          codeBreakdown: [
            { part: 'pg_total_relation_size(c.oid)', label: 'Calculates total disk storage consumption including table data, indexes, and TOAST tables', color: '#3b82f6' },
            { part: 'pg_size_pretty(...)', label: 'Formats raw byte numbers into human-readable strings (e.g. 14 MB, 1.2 GB)', color: '#10b981' },
            { part: "WHERE n.nspname = 'public'", label: 'Restricts size inspection strictly to tables residing in the public schema', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production servers par heavy pgAdmin automatic auto-refresh queries chhod dena',
            '❌ Index size monitor na karna (kabhi kabhi index size table data se 3x bada ho jata hai)'
          ],
          miniChallenge: 'pgAdmin Query Tool mein total table size aur index size inspect karne wali query execute karo.',
          quiz: {
            question: 'pgAdmin 4 mein visual query execution plan dekhne ke liye kaunsa shortcut / tool use hota hai?',
            options: ['Visual Explain / Explain Analyze (F7)', 'Format Code (F2)', 'Terminal Mode', 'Zoom Window'],
            answer: 'Visual Explain / Explain Analyze (F7)',
            explanation: 'pgAdmin ka Visual Explain Tool (F7 / Shift+F7) query plan ko visual tree graph mein convert karta hai jisse bottlenecks aur scans turant identify ho jate hain.'
          },
          summary: [
            'pgAdmin visual administration aur schema navigation provide karta hai',
            'Visual Explain Plan query plan bottlenecks ko graphically highlight karta hai',
            'Built-in ERD modeler database relationships visually design karta hai'
          ],
          flashcard: {
            q: '`pg_total_relation_size()` aur `pg_relation_size()` mein kya difference hai?',
            a: '`pg_relation_size()` sirf actual table data pages ka size batata hai; `pg_total_relation_size()` table data + saare B-Tree indexes + TOAST storage ka complete combined size batata hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: DATABASES, SCHEMAS & TABLE DDL
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Databases, Schemas & Table DDL',
      lessons: [
        {
          id: 'pg-databases-schemas-searchpath',
          title: 'Databases vs Schemas, Multi-Tenant Namespaces & search_path',
          emoji: '📁',
          xpReward: 40,
          badgeName: 'Schema Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Database ke andar Schemas? Bilkul cupboard ke andar alag-alag folders jaisa! Saara samaan ek hi drawer (`public`) mein mat phenko — clean schemas banao! 📁😎"',
            hint: '💡 Masti Sir: "`search_path` decide karta hai ki jab aap `SELECT * FROM users;` likhoge toh PostgreSQL pehle kis schema mein dhoondhega!"',
            success: '🎉 Masti Sir: "Multi-schema architecture aur search_path mastery unlocked! 🔥"',
            mistake: '😅 Masti Sir: "Schema drop karte waqt agar usme tables hain toh `DROP SCHEMA schema_name CASCADE;` likhna padta hai!"'
          },
          englishDef: 'In PostgreSQL, a Database is an isolated physical container, whereas a Schema is a logical namespace within a database grouping tables, views, types, and functions. The `search_path` configuration variable specifies the order of schemas searched when an object is referenced without a schema prefix (e.g. `SET search_path TO tenant_a, public;`). Schemas are widely used for multi-tenant SaaS architecture.',
          hinglishExplain: 'PostgreSQL mein Database sabse bada physical container hota hai, aur uske andar multiple Schemas hote hain (jaise `public`, `analytics`, `tenant_101`). Har schema ke andar apni alag tables hoti hain. `search_path` PostgreSQL ko batata hai ki bina schema prefix ke query chalane par pehle kaunse schema mein table dhoondhni hai. Multi-tenant SaaS apps mein har company ke liye ek alag schema banana bohot popular pattern hai.',
          funnyExample: {
            scenario: 'The Apartment Building Analogy:\n- Database = Poori Building 🏢\n- Schemas = Alag-alag Flats (Flat 101, Flat 102, Flat 103) 🚪\n- Har flat ke andar apna kitchen (Tables), bedroom (Views) hota hai!\n- Flat 101 ka resident Flat 102 ke kitchen mein bina permission ke nahi ghus sakta! 🔒',
            punchline: 'Schemas provide clean logical isolation within a single shared database!'
          },
          visualDiagram: {
            title: 'PostgreSQL Database -> Schema -> Table Hierarchy',
            nodes: [
              'Database: codemasti_production',
              '├── Schema: public (shared lookup tables, app_users)',
              '├── Schema: analytics (materialized views, event_logs, daily_metrics)',
              '└── Schema: tenant_apple (apple_users, apple_orders, apple_projects)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'search_path Resolution Engine:',
            steps: [
              'Client executes `SELECT * FROM orders;` without schema prefix',
              'PostgreSQL reads current `search_path` (e.g. `"$user", public, analytics`)',
              'Checks each schema in order; executes query on first matching table found',
              'Throws Error 42P01 (relation does not exist) if table is missing across all search_path schemas'
            ]
          },
          code: `-- 1. Create Dedicated Logical Schemas
CREATE SCHEMA IF NOT EXISTS core;
CREATE SCHEMA IF NOT EXISTS analytics;
CREATE SCHEMA IF NOT EXISTS tenant_google;

-- 2. Create Tables in Specific Schemas
CREATE TABLE core.users (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE analytics.daily_signups (
  signup_date DATE PRIMARY KEY,
  total_users INT DEFAULT 0
);

-- 3. Inspect and Set search_path
SHOW search_path;
SET search_path TO core, analytics, public;

-- Now 'users' resolves directly to 'core.users':
SELECT * FROM users;

-- 4. Drop Schema and all nested objects
-- DROP SCHEMA tenant_google CASCADE;`,
          codeBreakdown: [
            { part: 'CREATE SCHEMA IF NOT EXISTS analytics', label: 'Creates isolated logical namespace for analytics objects without throwing error if existing', color: '#3b82f6' },
            { part: 'CREATE TABLE core.users (...)', label: 'Explicit schema qualification placing table definition directly into core schema', color: '#10b981' },
            { part: 'SET search_path TO core, analytics, public;', label: 'Configures session schema resolution precedence order for unqualified table queries', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Saari tables ko bina soche default `public` schema mein daal dena in large enterprise projects',
            '❌ Multi-tenant schema setup mein `search_path` set karna bhool jana (leads to queries hitting wrong tenant tables)'
          ],
          miniChallenge: 'Ek naya schema `marketing` banao, usme `campaigns` table create karo aur `search_path` configure karo.',
          quiz: {
            question: 'PostgreSQL mein `search_path` ka primary role kya hota hai?',
            options: [
              'Hard drive par files dhoondhna',
              'Unqualified table names ko search karne ke liye schema precedence order define karna',
              'Google search engine se connect karna',
              'Query speed ko slow karna'
            ],
            answer: 'Unqualified table names ko search karne ke liye schema precedence order define karna',
            explanation: '`search_path` wo schema priority order specify karta hai jahan PostgreSQL unqualified table references (jaise `SELECT * FROM users`) ko resolve karta hai.'
          },
          summary: [
            'Databases physical containers hain aur Schemas logical namespaces hain',
            'search_path unqualified SQL references ko systematically resolve karta hai',
            'Multi-schema architecture clean tenant isolation aur domain separation provide karta hai'
          ],
          flashcard: {
            q: '`DROP SCHEMA analytics CASCADE;` mein CASCADE kya karta hai?',
            a: '`CASCADE` schema ke andar maujood sabhi tables, views, functions aur foreign keys ko schema ke sath automatically drop kar deta hai.'
          }
        },
        {
          id: 'pg-tables-ddl-truncate',
          title: 'Table DDL Management (CREATE, ALTER, TRUNCATE CASCADE & DROP)',
          emoji: '🔨',
          xpReward: 40,
          badgeName: 'DDL Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL mein `TRUNCATE TABLE users CASCADE;` chalate waqt dhyan rakhna — foreign key linked saari child tables bhi instant wipe ho jayengi! DDL ka power sambhalke use karo! ⚠️"',
            hint: '💡 Masti Sir: "`ALTER TABLE ... ADD COLUMN` PostgreSQL mein instant metadata update hota hai (agar default value constant ho) — table lock nahi hoti!"',
            success: '🎉 Masti Sir: "DDL modifications aur safe truncation operations mastered! 🔥"',
            mistake: '😅 Masti Sir: "Production table drop karne se pehle confirmation aur snapshot backup lena mandatory hai!"'
          },
          englishDef: 'PostgreSQL Data Definition Language (DDL) manages schema evolution. `CREATE TABLE` initializes structured entities, `ALTER TABLE` supports non-blocking column additions, type conversions (`USING` clause), and constraint additions. `TRUNCATE TABLE ... CASCADE` rapidly deallocates disk pages across the target and all referencing foreign key tables.',
          hinglishExplain: 'DDL commands se hum tables banate aur modify karte hain. PostgreSQL mein `ALTER TABLE table ADD COLUMN col type` lightning fast hota hai kyonki ye disk rewrite kiye bina metadata update karta hai. Column data type change karne ke liye `ALTER COLUMN col TYPE new_type USING col::new_type` use hota hai. `TRUNCATE TABLE ... CASCADE` table ke sath sath uske child foreign key tables ko bhi instant empty kar deta hai.',
          funnyExample: {
            scenario: 'The Domino Effect (TRUNCATE CASCADE):\n- Parent Table: Orders 📦\n- Child Table: Order Items (Linked via FK) 📑\n- `TRUNCATE TABLE orders CASCADE;` -> Orders khali hue aur sath hi Order Items bhi 1 microsecond mein wipe ho gaye jaise dominoes girte hain! 🀄💥',
            punchline: 'CASCADE wipes the parent and all connected foreign key children!'
          },
          visualDiagram: {
            title: 'PostgreSQL Safe Schema Evolution Workflow',
            nodes: [
              'CREATE TABLE -> Defines columns, constraints, storage',
              'ALTER TABLE ADD COLUMN -> Instant metadata operation (No table lock in modern Postgres)',
              'ALTER COLUMN TYPE ... USING -> Explicit cast transformation',
              'TRUNCATE CASCADE -> Fast physical page deallocation across parent + child tables'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Instant ADD COLUMN with DEFAULT in PostgreSQL 11+:',
            steps: [
              'When adding a column with constant DEFAULT (e.g. `DEFAULT 0`), PostgreSQL does NOT rewrite existing table blocks on disk',
              'Stores default value in `pg_attribute` catalog metadata (O(1) execution)',
              'Existing rows return the default value dynamically upon read'
            ]
          },
          code: `-- 1. Create Courses Table
CREATE TABLE courses (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Alter Table: Add column with instant default (O(1) metadata operation)
ALTER TABLE courses 
ADD COLUMN discount_percentage NUMERIC(5, 2) DEFAULT 0.00;

-- 3. Alter Table: Type conversion with USING clause
ALTER TABLE courses 
ALTER COLUMN title TYPE TEXT;

-- 4. Alter Table: Add Check Constraint without full table lock validation
ALTER TABLE courses 
ADD CONSTRAINT chk_positive_price CHECK (price >= 0.00) NOT VALID;
-- Validate in background:
ALTER TABLE courses VALIDATE CONSTRAINT chk_positive_price;

-- 5. Rapid Data Deallocation
-- TRUNCATE TABLE courses RESTART IDENTITY CASCADE;`,
          codeBreakdown: [
            { part: 'GENERATED ALWAYS AS IDENTITY PRIMARY KEY', label: 'Modern SQL standard auto-incrementing identity column replacing legacy SERIAL sequence', color: '#3b82f6' },
            { part: 'ADD CONSTRAINT ... NOT VALID', label: 'Adds constraint instantly without locking large tables to validate existing legacy rows', color: '#10b981' },
            { part: 'VALIDATE CONSTRAINT chk_positive_price;', label: 'Validates existing rows in the background taking only a weak share lock', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ High-traffic table par `ALTER TABLE ADD CONSTRAINT` bina `NOT VALID` ke run karna (causes table-level exclusive lock during full scan)',
            '❌ Legacy `SERIAL` use karna in new PostgreSQL 14+ codebases (prefer `GENERATED ALWAYS AS IDENTITY`)'
          ],
          miniChallenge: 'Ek table par `ALTER TABLE` use karke `NOT VALID` constraint add karo aur fir use `VALIDATE` karo.',
          quiz: {
            question: 'Large production table par bina long exclusive lock ke CHECK constraint add karne ka safe pattern kya hai?',
            options: [
              'ADD CONSTRAINT ... NOT VALID karke baad mein VALIDATE CONSTRAINT run karna',
              'Table drop karke recreate karna',
              'Server band karke query chalana',
              'Check constraint kabhi use na karna'
            ],
            answer: 'ADD CONSTRAINT ... NOT VALID karke baad mein VALIDATE CONSTRAINT run karna',
            explanation: '`NOT VALID` flag constraint ko instant add karta hai bina existing rows ko validate kiye, aur baad mein `VALIDATE CONSTRAINT` bina heavy write lock ke background mein check karta hai.'
          },
          summary: [
            'ALTER TABLE modern PostgreSQL mein highly optimized metadata operations provide karta hai',
            'NOT VALID constraints zero downtime schema migrations enable karte hain',
            'TRUNCATE RESTART IDENTITY CASCADE tables aur auto sequences dono ko reset karta hai'
          ],
          flashcard: {
            q: '`TRUNCATE TABLE ... RESTART IDENTITY` kya karta hai?',
            a: 'Ye table ke saare rows ko instantly delete karta hai aur IDENTITY sequence counter ko wapas 1 par reset kar deta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: ADVANCED DATA TYPES, UUID & TIME ZONES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Advanced Data Types, UUID & Time Zones',
      lessons: [
        {
          id: 'pg-data-types-numeric-string',
          title: 'PostgreSQL Numeric, String & Boolean Types Deep Dive',
          emoji: '🔢',
          xpReward: 40,
          badgeName: 'Type Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL mein `TEXT` aur `VARCHAR(n)` performance mein exactly same speed par chalte hain! Fixed length ki zaroorat na ho toh `TEXT` use karo bina kisi dar ke! 😎"',
            hint: '💡 Masti Sir: "Paisa aur currency ke liye hamesha `NUMERIC(12, 2)` use karo — floating point calculation kabhi exact nahi hoti!"',
            success: '🎉 Masti Sir: "Data types fully mastered! Storage efficiency aur precision guaranteed! 🔥"',
            mistake: '😅 Masti Sir: "`REAL` ya `DOUBLE PRECISION` ko financial balances ke liye use mat karna — precision lose ho jayegi!"'
          },
          englishDef: 'PostgreSQL provides a robust data type system spanning Numerics (`smallint` 2B, `integer` 4B, `bigint` 8B, arbitrary-precision `numeric`/`decimal`, `real` 4B, `double precision` 8B), Strings (`char(n)`, `varchar(n)`, unbounded `text` with identical underlying storage performance), and `boolean` (`true`, `false`, `null`).',
          hinglishExplain: 'PostgreSQL mein data types bohot well-engineered hain. Financial amounts (jaise order totals) ke liye arbitrary-precision `NUMERIC(10,2)` use hota hai. Strings ke mamle mein, PostgreSQL mein `TEXT` aur `VARCHAR` dono same internal storage format use karte hain (koi performance difference nahi hota), isliye arbitrary limits lagane ki jagah `TEXT` + `CHECK` constraint use karna standard best practice hai.',
          funnyExample: {
            scenario: 'The VARCHAR(255) Habit:\n- Developer: "Main har jagah VARCHAR(255) likhta hoon kyonki purane database mein aadat thi!" 😅\n- Masti Sir: "PostgreSQL mein `TEXT` likho! Dono ki speed identical hai aur kal agar user ka 260 char ka bio aaya toh crash nahi hoga!" 🚀',
            punchline: 'In PostgreSQL, TEXT is first-class and just as fast as VARCHAR!'
          },
          visualDiagram: {
            title: 'PostgreSQL Core Scalar Data Types',
            nodes: [
              'Integer Types: smallint (2B: ±32k) | integer (4B: ±2.1B) | bigint (8B: ±9 Quintillion)',
              'Arbitrary Precision: NUMERIC(precision, scale) / DECIMAL -> Exact Financial Calculations',
              'Floating Point: REAL (4B) | DOUBLE PRECISION (8B) -> Scientific / Approximate math',
              'Character Types: TEXT (Unbounded) | VARCHAR(n) | CHAR(n) [Padded]',
              'Boolean: BOOLEAN (true / false / NULL)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'TOAST (The Oversized-Attribute Storage Technique):',
            steps: [
              'PostgreSQL page size is 8KB; rows cannot span across multiple pages directly',
              'If large TEXT or JSONB values exceed 2KB, PostgreSQL automatically compresses and moves them to out-of-line TOAST tables',
              'Table scans remain ultra-fast because bulky text is only fetched when explicitly selected'
            ]
          },
          code: `-- E-Commerce Catalog Entity with Strict Data Types
CREATE TABLE product_specs (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sku VARCHAR(30) NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  cost_price NUMERIC(12, 2) NOT NULL,
  selling_price NUMERIC(12, 2) NOT NULL,
  weight_kg REAL DEFAULT 0.5,
  is_active BOOLEAN DEFAULT TRUE,
  CONSTRAINT chk_positive_selling_price CHECK (selling_price >= cost_price)
);

INSERT INTO product_specs (sku, title, cost_price, selling_price)
VALUES ('TECH-M3-MAC', 'MacBook Pro 16" M3 Max', 210000.00, 249999.00);`,
          codeBreakdown: [
            { part: 'NUMERIC(12, 2)', label: 'Exact financial math supporting up to 10 integer digits and 2 decimal points (no rounding drift)', color: '#3b82f6' },
            { part: 'title TEXT NOT NULL', label: 'Unbounded text field with zero performance penalty compared to VARCHAR', color: '#10b981' },
            { part: 'CONSTRAINT chk_positive_selling_price', label: 'Database-level business integrity check ensuring profitable pricing models', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Financial math ke liye `DOUBLE PRECISION` use karna',
            '❌ Small incrementing counters ke liye `smallint` choose karna jo jaldi 32,767 par overflow ho jaye (prefer `integer` or `bigint`)'
          ],
          miniChallenge: 'Ek `user_wallets` table create karo jisme `balance` NUMERIC(14,2) aur `currency` CHAR(3) ho.',
          quiz: {
            question: 'PostgreSQL mein `TEXT` aur `VARCHAR(255)` ke read/write performance mein kya difference hota hai?',
            options: [
              '`VARCHAR` 10x fast hota hai',
              '`TEXT` 5x fast hota hai',
              'Dono ki performance bilkul identical hoti hai (underlying storage mechanism is the same)',
              '`TEXT` sirf temporary tables mein allowed hai'
            ],
            answer: 'Dono ki performance bilkul identical hoti hai (underlying storage mechanism is the same)',
            explanation: 'PostgreSQL internally `TEXT`, `VARCHAR` aur `CHAR` ko same varlena storage format mein handle karta hai, isliye performance mein koi difference nahi hota.'
          },
          summary: [
            'NUMERIC exact precision financial calculations ke liye essential hai',
            'TEXT PostgreSQL mein first-class performant string type hai',
            'TOAST 2KB+ se bade strings ko automatically compress karke out-of-line store karta hai'
          ],
          flashcard: {
            q: 'TOAST storage kya hota hai?',
            a: 'The Oversized-Attribute Storage Technique (TOAST) PostgreSQL ka background system hai jo 2KB se bade text/jsonb data ko compress karke secondary storage table mein store karta hai taaki main table scans fast rahein.'
          }
        },
        {
          id: 'pg-uuid-distributed-keys',
          title: 'UUID Data Type, gen_random_uuid() & Distributed Primary Keys',
          emoji: '🆔',
          xpReward: 40,
          badgeName: 'UUID Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Sequential IDs (1, 2, 3) se competitor pata laga sakta hai ki aapki company mein roz kitne orders aa rahe hain (`/api/orders/105` -> 105 orders total)! UUID use karo — secure bhi aur distributed systems ready bhi! 🆔😎"',
            hint: '💡 Masti Sir: "PostgreSQL 13+ mein `gen_random_uuid()` built-in function hota hai — kisi external extension ki zaroorat nahi hoti (UUID v4)!"',
            success: '🎉 Masti Sir: "Globally unique, collision-proof UUID primary keys successfully implemented! 🔥"',
            mistake: '😅 Masti Sir: "UUID ko VARCHAR(36) string mein store mat karna — PostgreSQL ka native `UUID` type sirf 16 bytes leta hai!"'
          },
          englishDef: 'A Universally Unique Identifier (UUID) is a 128-bit (16-byte) globally unique identifier. PostgreSQL provides a native `UUID` data type and built-in `gen_random_uuid()` generator (UUIDv4). UUIDs prevent enumeration attacks on public APIs, enable client-side key generation in distributed microservices, and eliminate primary key collision during database merging.',
          hinglishExplain: 'UUID 128-bit ka unique hexadecimal code hota hai (e.g. `a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11`). Auto-increment integer (1, 2, 3) ki jagah UUID use karne se hackers URLs guess nahi kar sakte (Enumeration Attack prevention). Microservices architecture mein client ya frontend apna unique ID generate karke bhej sakta hai bina central database lock ka wait kiye.',
          funnyExample: {
            scenario: 'The Startup Competitor Spy:\n- Auto-Increment ID: Competitor places order on Monday (Order #100), places order on Tuesday (Order #150). Competitor knows: "Company got exactly 50 orders today!" 🕵️‍♂️📈\n- UUID: Order ID: `550e8400-e29b-41d4-a716-446655440000`. Competitor confused: "No idea how many orders they have!" 🕶️🛡️',
            punchline: 'UUIDs keep your business metrics private and distributed systems safe!'
          },
          visualDiagram: {
            title: 'Integer Auto-Increment vs UUID Primary Keys',
            nodes: [
              'Integer ID (4B/8B): 1, 2, 3 -> Sequential | Predictable | Fast B-Tree insertion | Hard to shard',
              'UUIDv4 (16B): c4a7d... -> Globally Unique | Unpredictable | Microservice friendly | Slight B-Tree fragmentation'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'UUID Storage & Collision Probability:',
            steps: [
              'UUID is stored as raw 16-byte binary data on disk (not 36-char string)',
              'UUIDv4 uses 122 bits of cryptographic entropy',
              'Generating 1 billion UUIDs per second for 100 years has a collision probability of near zero ($< 10^{-15}$)'
            ]
          },
          code: `-- 1. Table with Native UUID Primary Key & Default Generator
CREATE TABLE user_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insert Records (UUID auto-generated)
INSERT INTO user_accounts (username, email)
VALUES 
  ('kabir_dev', 'kabir@codemasti.com'),
  ('riya_coder', 'riya@codemasti.com')
RETURNING id, username, email;

-- 3. Querying by UUID
SELECT id, username 
FROM user_accounts 
WHERE id = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'::uuid;`,
          codeBreakdown: [
            { part: 'id UUID PRIMARY KEY DEFAULT gen_random_uuid()', label: '16-byte native UUID column automatically populated with cryptographically random UUIDv4 value', color: '#3b82f6' },
            { part: 'RETURNING id, username, email', label: 'Returns newly generated UUID identity directly to client without second SELECT query', color: '#10b981' },
            { part: "'...'::uuid", label: 'Explicit PostgreSQL type cast converting string literal into internal 16-byte UUID binary', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ UUID ko `VARCHAR(36)` mein store karna (wastes 20 bytes per row and slows B-Tree index lookups)',
            '❌ UUID columns ko bina native `UUID` type ke index karna'
          ],
          miniChallenge: 'Ek `invoices` table banao with `id UUID PRIMARY KEY DEFAULT gen_random_uuid()` aur `RETURNING id` query run karo.',
          quiz: {
            question: 'PostgreSQL 13+ mein random UUIDv4 generate karne ke liye kaunsa built-in function use hota hai?',
            options: ['gen_random_uuid()', 'uuid_generate_v4()', 'new_uuid()', 'uuid_make()'],
            answer: 'gen_random_uuid()',
            explanation: 'PostgreSQL 13+ mein `gen_random_uuid()` standard built-in function hai jiske liye kisi external extension ki zaroorat nahi hoti.'
          },
          summary: [
            'UUID 128-bit globally unique identifier provide karta hai',
            'gen_random_uuid() native cryptographically random UUIDs generate karta hai',
            'UUIDs enumeration attacks ko prevent karte hain aur distributed microservices enable karte hain'
          ],
          flashcard: {
            q: 'PostgreSQL native UUID column disk par kitna space leta hai?',
            a: 'PostgreSQL native `UUID` data type disk par exact **16 bytes** leta hai (jabki string representation 36 bytes leti hai).'
          }
        },
        {
          id: 'pg-timestamp-timestamptz-intervals',
          title: 'Timestamp, TIMESTAMPTZ & Interval Arithmetic (Time Zone Architecture)',
          emoji: '⏰',
          xpReward: 40,
          badgeName: 'Time Lord',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Time zones database ka sabse tricky part hain! Hamesha `TIMESTAMPTZ` use karo — ye data ko internally UTC mein convert karke store karta hai aur har user ko uske local timezone mein dikhata hai! ⏰🌍"',
            hint: '💡 Masti Sir: "`NOW() + INTERVAL \'7 days 2 hours\'` se aap future expiry dates instant calculate kar sakte ho bina date libraries ke!"',
            success: '🎉 Masti Sir: "Timezone-aware scheduling aur interval arithmetic master ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "`TIMESTAMP` (without timezone) use karoge toh daylight saving aur international users ka schedule gadbad ho jayega!"'
          },
          englishDef: 'PostgreSQL provides two primary timestamp types: `TIMESTAMP` (timestamp without time zone, stores entered literal value) and `TIMESTAMPTZ` (timestamp with time zone, normalizes input to UTC internally and converts to client session timezone upon retrieval). The `INTERVAL` type represents spans of time supporting arithmetic (`+`, `-`) across days, hours, months, and years.',
          hinglishExplain: 'Production databases mein time handling ka golden rule hai: hamesha `TIMESTAMPTZ` use karein. Jab New York ka user 5:00 PM par order karega aur India ka user 2:30 AM par dekhega, toh `TIMESTAMPTZ` internally UTC mein exact same time store karega aur dono users ko unke respective timezone ke hisab se convert karke dikhayega. `INTERVAL` se hum date calculations karte hain (e.g. `NOW() - INTERVAL \'30 days\'`).',
          funnyExample: {
            scenario: 'The Global Flight Ticket Disaster:\n- Plain `TIMESTAMP`: Ticket time stored as "2026-08-20 10:00:00". Indian passenger arrives at 10 AM IST, London pilot lands at 10 AM GMT -> 5.5 hour flight missed! ✈️💥\n- `TIMESTAMPTZ`: Stored as UTC timestamp -> Converts to 10:00 AM London / 3:30 PM India automatically! 🌍✈️',
            punchline: 'Always use TIMESTAMPTZ for production timestamps!'
          },
          visualDiagram: {
            title: 'TIMESTAMPTZ UTC Normalization Pipeline',
            nodes: [
              'Client Input: "2026-08-20 18:30:00+05:30" (IST)',
              'PostgreSQL Server: Converts and stores internally as UTC "2026-08-20 13:00:00Z" (8 Bytes)',
              'Client in London queries: Retrieved as "2026-08-20 14:00:00+01:00" (BST)',
              'Client in Tokyo queries: Retrieved as "2026-08-20 22:00:00+09:00" (JST)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Interval Arithmetic & Date Truncation:',
            steps: [
              '`date_trunc(\'month\', created_at)` truncates timestamp to the first day of that month (great for monthly reports)',
              '`EXTRACT(DOW FROM created_at)` pulls day-of-week (0=Sunday to 6=Saturday)',
              '`AGE(timestamp1, timestamp2)` calculates human-readable interval difference'
            ]
          },
          code: `-- 1. Table with Timezone-Aware Timestamps
CREATE TABLE subscription_plans (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id UUID NOT NULL,
  plan_name VARCHAR(50) NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Insert with Interval Arithmetic (30-day subscription)
INSERT INTO subscription_plans (user_id, plan_name, expires_at)
VALUES (
  gen_random_uuid(),
  'Pro Annual Pass',
  NOW() + INTERVAL '1 year 14 days'
);

-- 3. Date Analytics & Grouping with date_trunc
SELECT 
  date_trunc('month', started_at) AS signup_month,
  COUNT(id) AS total_subscriptions,
  AVG(expires_at - started_at) AS avg_duration
FROM subscription_plans
GROUP BY date_trunc('month', started_at)
ORDER BY signup_month DESC;

-- 4. Session Timezone Inspection & Conversion
SHOW timezone;
SELECT NOW() AT TIME ZONE 'UTC' AS utc_time, NOW() AT TIME ZONE 'Asia/Kolkata' AS ist_time;`,
          codeBreakdown: [
            { part: 'TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP', label: 'Timezone-aware 8-byte UTC timestamp ensuring multi-region consistency', color: '#3b82f6' },
            { part: "NOW() + INTERVAL '1 year 14 days'", label: 'Native interval arithmetic adding duration directly without external date calculation libraries', color: '#10b981' },
            { part: "date_trunc('month', started_at)", label: 'Truncates timestamps down to month granularity for clean time-series aggregations', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `TIMESTAMP WITHOUT TIME ZONE` use karna multi-region web applications mein',
            '❌ Time difference calculate karne ke liye custom math karna instead of `AGE()` or `INTERVAL`'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise subscriptions fetch kare jo agle 7 dino mein expire hone wali hon (`expires_at BETWEEN NOW() AND NOW() + INTERVAL \'7 days\'`).',
          quiz: {
            question: 'PostgreSQL mein `TIMESTAMPTZ` database disk par time ko kis format mein physically store karta hai?',
            options: ['Client ke local timezone mein', 'UTC (Coordinated Universal Time) mein', 'Server ke OS timezone string mein', 'Plain string format mein'],
            answer: 'UTC (Coordinated Universal Time) mein',
            explanation: '`TIMESTAMPTZ` data ko internally hamesha UTC mein convert karke 8-byte integer offset ke roop mein store karta hai aur client session timezone ke mutabik format karke return karta hai.'
          },
          summary: [
            'TIMESTAMPTZ UTC-normalized global timezone reliability provide karta hai',
            'INTERVAL data type rich date arithmetic (+, -) enable karta hai',
            'date_trunc time-series grouping aur monthly reporting ke liye standard function hai'
          ],
          flashcard: {
            q: '`date_trunc(\'day\', now())` ka output kya hoga?',
            a: 'Ye current timestamp ke time portion (hours, minutes, seconds) ko zero karke aaj ki date ka midnight `00:00:00` timestamp return karta hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: KEYS, IDENTITY COLUMNS & CONSTRAINTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Keys, Identity Columns & Integrity Constraints',
      lessons: [
        {
          id: 'pg-identity-primary-keys',
          title: 'Identity Columns (GENERATED AS IDENTITY vs SERIAL) & Primary Keys',
          emoji: '🔑',
          xpReward: 40,
          badgeName: 'Identity Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Purane zamane ka `SERIAL` keyword bhool jao! Modern PostgreSQL mein `GENERATED ALWAYS AS IDENTITY` standard hai — ye SQL compliant hai aur accidental manual ID overrides ko rokta hai! 😎"',
            hint: '💡 Masti Sir: "`GENERATED ALWAYS` manual user values ko block karta hai; `GENERATED BY DEFAULT` user ko manual ID pass karne ki permission deta hai agar provided ho!"',
            success: '🎉 Masti Sir: "SQL Standard Identity columns successfully implemented! 🔥"',
            mistake: '😅 Masti Sir: "`SERIAL` use karne par sequence permissions alag se manage karni padti thi, Identity columns mein sab automatic hota hai!"'
          },
          englishDef: 'PostgreSQL 10+ implements the SQL:2003 standard `IDENTITY` columns: `INT GENERATED ALWAYS AS IDENTITY` (strictly enforces system sequence generation, rejecting explicit manual inserts unless overridden) and `INT GENERATED BY DEFAULT AS IDENTITY` (uses sequence only when no explicit value is provided). This modern mechanism replaces legacy `SERIAL` pseudo-types.',
          hinglishExplain: 'Purane PostgreSQL mein auto-increment ke liye `SERIAL` use hota tha jo background mein ek separate sequence banata tha. Modern PostgreSQL mein standard SQL `GENERATED ALWAYS AS IDENTITY` use hota hai. Iska sabse bada fayda ye hai ki agar koi user galti se manual ID insert karne ki koshish karega toh database error de kar rok dega, jisse ID collisions nahi hoti.',
          funnyExample: {
            scenario: 'The VIP Queue Hopper:\n- Legacy SERIAL: User can sneak in `INSERT INTO users (id) VALUES (500);` (Breaks sequential order! 😱)\n- GENERATED ALWAYS AS IDENTITY: Bouncer blocks manual ID: "Error: cannot insert a non-DEFAULT value into column id!" (Order maintained! 🛡️)',
            punchline: 'GENERATED ALWAYS AS IDENTITY protects your sequence from manual corruption!'
          },
          visualDiagram: {
            title: 'Modern IDENTITY Columns vs Legacy SERIAL',
            nodes: [
              'Legacy SERIAL: Non-standard pseudo-type | Creates loose sequence | Allows accidental manual ID overrides',
              'GENERATED ALWAYS AS IDENTITY: SQL Standard | Embedded sequence ownership | Blocks manual insertion without OVERRIDING clause',
              'GENERATED BY DEFAULT AS IDENTITY: SQL Standard | Uses sequence unless manual value is explicitly provided'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Sequence State & Identity Tracking:',
            steps: [
              'PostgreSQL manages an internal sequence generator attached directly to the table attribute metadata',
              'Sequence increments atomically in memory; rollback of a transaction does not decrement sequence (prevents race condition deadlocks)',
              'Dropping the table automatically cascades and removes the identity sequence cleanly'
            ]
          },
          code: `-- 1. Strict Identity Column (GENERATED ALWAYS)
CREATE TABLE learners (
  id INT GENERATED ALWAYS AS IDENTITY (START WITH 1000 INCREMENT BY 1) PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Safe Insert (System generates ID 1000, 1001...)
INSERT INTO learners (username, email)
VALUES ('kabir_sharma', 'kabir@codemasti.com');

-- 2. Permissive Identity Column (GENERATED BY DEFAULT)
CREATE TABLE legacy_migrated_records (
  id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  record_name TEXT NOT NULL
);

-- Can insert with automatic ID OR explicit preserved ID:
INSERT INTO legacy_migrated_records (id, record_name) 
VALUES (505, 'Preserved Historical Record');`,
          codeBreakdown: [
            { part: 'GENERATED ALWAYS AS IDENTITY (START WITH 1000)', label: 'Standard SQL identity column initialized with custom starting boundary value', color: '#3b82f6' },
            { part: 'PRIMARY KEY', label: 'Enforces entity uniqueness and creates underlying B-Tree Clustered Index', color: '#10b981' },
            { part: 'GENERATED BY DEFAULT AS IDENTITY', label: 'Permits explicit manual ID injection useful during database migration ETL scripts', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Naye projects mein outdated `SERIAL` keyword use karna',
            '❌ Sequence numbers mein gaps aane par panic hona (transactions rollback hone par sequence incremented rehti hai by design)'
          ],
          miniChallenge: 'Ek `orders` table create karo with `id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY`.',
          quiz: {
            question: '`GENERATED ALWAYS AS IDENTITY` aur `GENERATED BY DEFAULT AS IDENTITY` mein kya difference hai?',
            options: [
              '`ALWAYS` manual values insert karne par error throw karta hai jab tak OVERRIDING clause na ho; `BY DEFAULT` manual values allow karta hai',
              '`ALWAYS` string generate karta hai, `BY DEFAULT` integer',
              '`ALWAYS` sirf MySQL mein chalta hai',
              'Dono bilkul same hain'
            ],
            answer: '`ALWAYS` manual values insert karne par error throw karta hai jab tak OVERRIDING clause na ho; `BY DEFAULT` manual values allow karta hai',
            explanation: '`GENERATED ALWAYS` strictly database sequence generation enforce karta hai aur explicit user input block karta hai; `GENERATED BY DEFAULT` user provided values ko accept kar leta hai.'
          },
          summary: [
            'Identity columns SQL standard compliant auto-incrementing integers hain',
            'GENERATED ALWAYS accidental manual sequence corruption prevent karta hai',
            'Identity sequences table drop hone par automatically clean ho jaati hain'
          ],
          flashcard: {
            q: 'Transaction rollback hone par Identity sequence number wapas pichhe kyun nahi hota?',
            a: 'Concurrency aur multi-threading performance ke liye sequences lock-free atomic counters use karti hain; agar rollback par sequence revert hoti toh doosre concurrent users block ho jaate.'
          }
        },
        {
          id: 'pg-foreign-keys-constraints',
          title: 'Foreign Keys, Integrity Constraints & Exclusion Rules (EXCLUDE USING)',
          emoji: '🛡️',
          xpReward: 40,
          badgeName: 'Constraint Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Double booking prevent karni hai? Hotel room booking mein do log same room same date par book na kar sakein — PostgreSQL ka `EXCLUDE USING gist` constraint bina code likhe database level par overlap block kar deta hai! 🏨🛡️"',
            hint: '💡 Masti Sir: "Foreign Key actions: `ON DELETE CASCADE` (delete children), `ON DELETE SET NULL` (nullify children), `ON DELETE RESTRICT` (block deletion)!"',
            success: '🎉 Masti Sir: "Database integrity constraints aur advanced exclusion rules mastered! 🔥"',
            mistake: '😅 Masti Sir: "Foreign key column par index lagana mat bhoolna — varna parent table delete/update karte waqt full child table scan hogi!"'
          },
          englishDef: 'PostgreSQL constraints guarantee structural and semantic data integrity: `PRIMARY KEY`, `FOREIGN KEY` (referential integrity with `ON DELETE CASCADE / SET NULL / RESTRICT`), `UNIQUE`, `NOT NULL`, `CHECK`, and PostgreSQL\'s advanced `EXCLUSION` constraints (`EXCLUDE USING gist`) which enforce generalized non-overlapping interval conditions.',
          hinglishExplain: 'Constraints database level par invalid data aane se rokte hain. Foreign Key parent aur child tables ke beech rishta banati hai. `ON DELETE CASCADE` parent delete hone par child rows delete karta hai. PostgreSQL ka ek bohot advanced constraint hota hai `EXCLUDE USING gist` jo date intervals ke overlap ko prevent karta hai (e.g. hotel room booking ya doctor appointment mein double booking rokna).',
          funnyExample: {
            scenario: 'The Hotel Room Double-Booking Disaster:\n- Guest A books Room 101: `2026-08-20` to `2026-08-25` 🛏️\n- Guest B tries to book Room 101: `2026-08-22` to `2026-08-28` 😱\n- Standard UNIQUE constraint fails (because start dates are different!)\n- PostgreSQL `EXCLUDE USING gist (room_id WITH =, booking_dates WITH &&)`: BLOCKS overlapping booking instantly at the database layer! 🛡️',
            punchline: 'Exclusion constraints solve complex scheduling overlaps with zero application code!'
          },
          visualDiagram: {
            title: 'PostgreSQL Constraint Hierarchy',
            nodes: [
              'PRIMARY KEY: Uniqueness + NOT NULL (Clustered B-Tree)',
              'FOREIGN KEY: Parent-Child referential integrity (ON DELETE CASCADE / SET NULL)',
              'CHECK: Boolean business logic validation (age >= 18)',
              'EXCLUSION (EXCLUDE USING gist): Prevents overlapping spatial / date range intervals (&&)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Exclusion Constraint Mechanics (GiST Index):',
            steps: [
              'Exclusion constraints use Generalized Search Tree (GiST) indexing',
              'When a new range is inserted, GiST index evaluates boolean overlap operator `&&`',
              'If overlapping range exists for matching key, database throws Error 23P01 (exclusion_violation)'
            ]
          },
          code: `-- 1. Enable btree_gist extension for combining scalar and range types
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- 2. Hotel Room Booking System with Overlap Prevention
CREATE TABLE room_bookings (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  room_number INT NOT NULL,
  guest_name TEXT NOT NULL,
  booking_period DATERANGE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  -- Prevents two guests from booking the same room during overlapping dates:
  CONSTRAINT exclude_overlapping_bookings 
    EXCLUDE USING gist (room_number WITH =, booking_period WITH &&)
);

-- Successful First Booking
INSERT INTO room_bookings (room_number, guest_name, booking_period)
VALUES (101, 'Kabir Sharma', daterange('2026-09-01', '2026-09-07'));

-- Attempted Overlapping Booking (WILL FAIL with exclusion_violation error):
-- INSERT INTO room_bookings (room_number, guest_name, booking_period)
-- VALUES (101, 'Riya Patel', daterange('2026-09-05', '2026-09-10'));`,
          codeBreakdown: [
            { part: 'CREATE EXTENSION IF NOT EXISTS btree_gist;', label: 'Installs module allowing standard equality operators (=) inside GiST exclusion indexes', color: '#3b82f6' },
            { part: 'booking_period DATERANGE NOT NULL', label: 'Native PostgreSQL range type representing contiguous span of dates [start, end)', color: '#10b981' },
            { part: 'EXCLUDE USING gist (room_number WITH =, booking_period WITH &&)', label: 'Enforces non-overlapping constraint: rejects same room with overlapping range (&&)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Double booking prevention ke liye complex backend locks likhna instead of Exclusion constraint',
            '❌ Child table ke Foreign Key column par B-Tree index create karna bhool jana'
          ],
          miniChallenge: 'Ek `doctor_appointments` table banao jisme `EXCLUDE USING gist` se overlapping appointments block hon.',
          quiz: {
            question: 'PostgreSQL mein overlapping date ranges (e.g. hotel room booking conflict) ko database level par prevent karne ke liye kaunsa constraint use hota hai?',
            options: ['UNIQUE constraint', 'CHECK constraint', 'EXCLUDE USING gist constraint', 'NOT NULL constraint'],
            answer: 'EXCLUDE USING gist constraint',
            explanation: '`EXCLUSION` constraint GiST index aur range overlap operator `&&` use karke overlapping intervals ko reject karta hai.'
          },
          summary: [
            'Foreign Keys parent-child referential integrity enforce karte hain',
            'CHECK constraints field-level validation rules execute karte hain',
            'EXCLUSION constraints scheduling aur booking systems mein overlap conflicts eliminate karte hain'
          ],
          flashcard: {
            q: 'PostgreSQL mein `daterange(\'2026-09-01\', \'2026-09-07\')` ka default boundary format kya hota hai?',
            a: 'PostgreSQL ranges default roop se `[)` (inclusive lower bound, exclusive upper bound) format use karte hain (start date included, end date excluded).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: CRUD MASTERY, RETURNING CLAUSE & FILTERING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: CRUD Mastery, RETURNING Clause & Filtering',
      lessons: [
        {
          id: 'pg-insert-select-returning',
          title: 'CRUD Operations & The Powerful RETURNING Clause in Web APIs',
          emoji: '📝',
          xpReward: 40,
          badgeName: 'CRUD Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Node.js ya Python backend mein `INSERT` ke baad `SELECT` karne ke liye 2 alag queries mat bhejo! `INSERT ... RETURNING *` lagao aur 1 query mein naya ID aur created data wapas pao! ⚡😎"',
            hint: '💡 Masti Sir: "`RETURNING` clause `INSERT`, `UPDATE`, aur `DELETE` teeno ke sath kaam karta hai!"',
            success: '🎉 Masti Sir: "Single-roundtrip CRUD APIs successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "`UPDATE` mein agar `WHERE` bhool gaye toh poore table ka data overwrite ho jayega — hamesha testing environment mein verify karo!"'
          },
          englishDef: 'PostgreSQL extends standard DML commands with the powerful `RETURNING` clause across `INSERT`, `UPDATE`, and `DELETE` operations. This allows backend applications to atomically retrieve generated values (such as auto-generated UUIDs, serial IDs, or computed defaults) in a single database round-trip without executing a secondary `SELECT` query.',
          hinglishExplain: '`RETURNING` clause PostgreSQL ka sabse useful feature hai backend APIs ke liye. Jab aap naya user insert karte ho, toh database generated `id` aur `created_at` ko usi query ke result ke roop mein turant return kar deta hai (`INSERT INTO users (...) VALUES (...) RETURNING id, created_at;`). Ye `UPDATE` (purana vs naya data) aur `DELETE` (deleted record ki details) ke sath bhi kaam karta hai.',
          funnyExample: {
            scenario: 'The Two-Trip Delivery Boy Analogy:\n- Without RETURNING: Waiter kitchen mein order deta hai -> Wapas table par aata hai -> Dobara kitchen jakar poochta hai "Receipt ID kya bana?" 🏃💨 (2 network round-trips!)\n- With RETURNING: Waiter order deta hai aur chef instant hath mein receipt de deta hai! 🧾✨ (1 trip!)',
            punchline: 'RETURNING eliminates half of your database network round-trips!'
          },
          visualDiagram: {
            title: 'RETURNING Clause Single Round-Trip Lifecycle',
            nodes: [
              'Client API -> Sends: INSERT INTO users (name, email) VALUES (...) RETURNING id, created_at;',
              'PostgreSQL Engine: Inserts row -> Generates UUID -> Evaluates Defaults',
              'PostgreSQL Engine -> Returns inserted row tuple directly in the same TCP response packet!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Engine Efficiency of RETURNING Clause:',
            steps: [
              'Standard DML modifies table heap page and logs WAL entry',
              'Before releasing row lock, execution engine projects requested RETURNING columns directly from in-memory heap tuple',
              'Zero index re-scan or secondary query execution required'
            ]
          },
          code: `-- 1. INSERT ... RETURNING (Instant Identity Retrieval for Backend API)
INSERT INTO learners (username, email)
VALUES 
  ('neha_coder', 'neha@codemasti.com'),
  ('rahul_dev', 'rahul@codemasti.com')
RETURNING id, username, email, created_at;

-- 2. UPDATE ... RETURNING (Inspect modified record state)
UPDATE learners 
SET username = 'neha_senior_dev' 
WHERE email = 'neha@codemasti.com'
RETURNING id, username, email;

-- 3. DELETE ... RETURNING (Audit log deleted records before purge)
DELETE FROM learners 
WHERE email = 'rahul_dev@codemasti.com'
RETURNING id, username, email;`,
          codeBreakdown: [
            { part: 'INSERT INTO ... VALUES (...) RETURNING id, created_at', label: 'Returns newly minted surrogate sequence keys directly in the DML response stream', color: '#3b82f6' },
            { part: 'UPDATE ... SET ... RETURNING id, username', label: 'Provides updated row snapshot without requiring follow-up SELECT lookup', color: '#10b981' },
            { part: 'DELETE FROM ... RETURNING *', label: 'Captures and returns the entire deleted tuple record for audit trail archival', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backend code mein `INSERT` ke baad `SELECT LASTVAL()` ya secondary query run karna (use `RETURNING`)',
            '❌ `DELETE ... RETURNING` ko bina `WHERE` clause ke chalana (deletes and returns entire table!)'
          ],
          miniChallenge: 'Ek `UPDATE` query likho jo user ke `xp_points` increment kare aur naya score `RETURNING xp_points` se return kare.',
          quiz: {
            question: 'PostgreSQL mein `INSERT`, `UPDATE`, ya `DELETE` command chalane ke baad inserted/updated values ko single roundtrip mein retrieve karne ke liye kaunsa clause use hota hai?',
            options: ['OUTPUT', 'RETURNING', 'GET VALUES', 'FETCH AFTER'],
            answer: 'RETURNING',
            explanation: 'PostgreSQL mein `RETURNING column1, column2` clause DML operations ke result tuples ko directly client ko return karta hai.'
          },
          summary: [
            'RETURNING clause INSERT, UPDATE aur DELETE teeno par support hota hai',
            'Network latency aur round-trip overhead 50% reduce karta hai',
            'REST API controllers mein created entity response return karne ka industry standard hai'
          ],
          flashcard: {
            q: '`DELETE FROM users WHERE id = 5 RETURNING *;` query kya return karegi?',
            a: 'Ye deleted user row ka complete data record return karegi, jisse application use audit log ya notification system mein use kar sake.'
          }
        },
        {
          id: 'pg-filtering-operators-ilike',
          title: 'Filtering, Case-Insensitive ILIKE & PostgreSQL String Features',
          emoji: '🔍',
          xpReward: 40,
          badgeName: 'Filter Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "User search bar mein \'react\', \'React\', ya \'REACT\' kuch bhi type kare — PostgreSQL ka `ILIKE` bina case-sensitive issue ke exact match nikaal deta hai! 🔍😎"',
            hint: '💡 Masti Sir: "`SPLIT_PART(email, \'@\', 2)` se aap bina complex regex ke domain name instant nikaal sakte ho!"',
            success: '🎉 Masti Sir: "PostgreSQL advanced string operators and ILIKE filtering mastered! 🔥"',
            mistake: '😅 Masti Sir: "`ILIKE \'%term%\'` without index slow ho jata hai — large search ke liye `pg_trgm` GIN index use karo!"'
          },
          englishDef: 'PostgreSQL provides rich string manipulation and filtering predicates including the case-insensitive pattern matching operator `ILIKE` (and its regex counterpart `~*`), `SPLIT_PART()`, `POSITION()`, `CONCAT()`, `SUBSTRING()`, and `REPLACE()`. Unlike standard `LIKE`, `ILIKE` ignores character casing natively without requiring `LOWER()` function wraps.',
          hinglishExplain: 'PostgreSQL text processing ke liye world-class features deta hai. Sabse famous operator hai `ILIKE` jo Case-Insensitive search karta hai (yani "python", "Python", aur "PYTHON" teeno ko match karega). `SPLIT_PART(text, delimiter, field)` kisi bhi string ko split karke specific part nikaalta hai (jaise email se domain nikaalna).',
          funnyExample: {
            scenario: 'Search Box Case Dilemma:\n- User searches: "mYsqL mAstEr"\n- Standard SQL `LIKE`: Returns 0 results! ❌ (Case mismatch!)\n- PostgreSQL `ILIKE`: Matches "MySQL Masterclass" instantly! 🎯✨',
            punchline: 'ILIKE saves your search features from uppercase/lowercase headaches!'
          },
          visualDiagram: {
            title: 'PostgreSQL String & Pattern Operators',
            nodes: [
              'LIKE: Case-sensitive pattern matching (A% matches "Apple", not "apple")',
              'ILIKE: Case-insensitive pattern matching (a% matches "Apple", "apple", "APPLE")',
              'SPLIT_PART(str, delim, n): Extracts n-th token from delimited string',
              '~ and ~*: POSIX Regular Expression matching operators'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'ILIKE vs LOWER(col) LIKE LOWER(val):',
            steps: [
              '`ILIKE` uses locale-aware case-folding rules directly inside the C engine',
              'On large tables, `ILIKE \'%query%\'` can be accelerated using a GIN trigram index (`pg_trgm`)',
              'Plain B-Tree indexes cannot accelerate leading wildcard searches'
            ]
          },
          code: `-- 1. Case-Insensitive Search with ILIKE
SELECT id, title, price, category
FROM courses
WHERE title ILIKE '%postgresql%' OR category ILIKE '%data%';

-- 2. SPLIT_PART: Extract domain name from email
SELECT 
  username,
  email,
  SPLIT_PART(email, '@', 1) AS user_handle,
  SPLIT_PART(email, '@', 2) AS email_domain
FROM learners;

-- 3. POSIX Regular Expression Matching (~* case-insensitive regex)
SELECT id, username, email
FROM learners
WHERE email ~* '^[a-z0-9._%+-]+@(gmail|codemasti)\\.com$';`,
          codeBreakdown: [
            { part: "title ILIKE '%postgresql%'", label: 'Case-insensitive wildcard search matching any casing of the search token', color: '#3b82f6' },
            { part: "SPLIT_PART(email, '@', 2)", label: 'Splits string by delimiter character and extracts the 2nd ordinal segment (domain)', color: '#10b981' },
            { part: "email ~* '^[a-z0-9...'", label: 'Case-insensitive POSIX regular expression validating email domain patterns', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `WHERE LOWER(col) LIKE LOWER("%term%")` likhna jabki direct `WHERE col ILIKE "%term%"` cleaner aur faster hai',
            '❌ Leading wildcard queries (`ILIKE "%term%"`) par B-Tree index expect karna'
          ],
          miniChallenge: 'Ek query likho jo sabhi aise users dhoondhe jinka email domain `codemasti.com` ho using `SPLIT_PART`.',
          quiz: {
            question: 'PostgreSQL mein bina `LOWER()` function use kiye Case-Insensitive LIKE search karne ke liye kaunsa operator use hota hai?',
            options: ['LIKE_CI', 'ILIKE', 'SEARCH', 'CASE_LIKE'],
            answer: 'ILIKE',
            explanation: '`ILIKE` PostgreSQL ka dedicated case-insensitive pattern matching operator hai.'
          },
          summary: [
            'ILIKE case-insensitive text matching provide karta hai',
            'SPLIT_PART delimited text tokens ko easily extract karta hai',
            'POSIX regex operators (~, ~*) advanced pattern validation enable karte hain'
          ],
          flashcard: {
            q: '`SPLIT_PART(\'a-b-c-d\', \'-\', 3)` ka output kya hoga?',
            a: 'Ye string ko `-` se split karega aur 3rd item return karega, yani **`c`**.'
          }
        },
        {
          id: 'pg-sorting-pagination-distinct',
          title: 'DISTINCT ON (...), Keyset Pagination & NULLS FIRST / LAST',
          emoji: '📊',
          xpReward: 45,
          badgeName: 'Pagination Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har customer ka sabse LATEST order nikaalna hai? Normal SQL mein complex subquery likhni padti hai, par PostgreSQL mein `SELECT DISTINCT ON (user_id)` se 1 line mein ho jata hai! Pure magic! 🪄😎"',
            hint: '💡 Masti Sir: "PostgreSQL mein `ORDER BY price DESC NULLS LAST` se NULL values ko hamesha aakhri mein bhej sakte ho!"',
            success: '🎉 Masti Sir: "DISTINCT ON aur Keyset Pagination masterclass unlocked! 🔥"',
            mistake: '😅 Masti Sir: "`DISTINCT ON (col)` use karte waqt `ORDER BY` ka pehla column wahi `col` hona mandatory hai!"'
          },
          englishDef: 'PostgreSQL introduces `DISTINCT ON (expression, ...)` which keeps only the first row of each set of rows where the given expressions evaluate to equal, determined by `ORDER BY`. Furthermore, PostgreSQL supports explicit NULL ordering (`NULLS FIRST` / `NULLS LAST`) and high-performance Keyset (cursor) pagination to avoid the $O(N)$ penalty of large `OFFSET` values.',
          hinglishExplain: 'PostgreSQL ka `DISTINCT ON (column)` feature har group ka pehla record select karta hai jo `ORDER BY` se decide hota hai (jaise har user ka latest order nikaalna). Sorting mein `NULLS FIRST` ya `NULLS LAST` se aap decide kar sakte ho ki missing data upar dikhe ya neeche. Deep pagination mein `OFFSET 100000` ki jagah Keyset Pagination (`WHERE id > last_seen_id LIMIT 20`) use hota hai.',
          funnyExample: {
            scenario: 'The Latest Order Problem:\n- Customer Kabir has 5 orders placed on different dates 📦\n- Goal: Get Kabir\'s newest order!\n- Normal SQL: Subquery + MAX(date) + JOIN (15 lines of code 😫)\n- PostgreSQL: `SELECT DISTINCT ON (user_id) * FROM orders ORDER BY user_id, order_date DESC;` -> Exact newest order in 1 line! 🎯✨',
            punchline: 'DISTINCT ON is PostgreSQL\'s secret weapon for "latest per group" queries!'
          },
          visualDiagram: {
            title: 'DISTINCT ON Execution Logic',
            nodes: [
              'Input: 10,000 Orders across 1,000 Users sorted by (user_id, created_at DESC)',
              'DISTINCT ON (user_id): Keeps the very first row for each distinct user_id',
              'Output: Exact 1,000 rows containing the latest order per customer!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Why Large OFFSET is Slow & Keyset is Instant:',
            steps: [
              '`OFFSET 100000 LIMIT 10` scans and discards 100,000 rows on disk before returning 10 rows (O(N) cost)',
              'Keyset `WHERE id > 100000 ORDER BY id LIMIT 10` jumps directly to B-Tree index leaf node (O(1) cost)',
              'Always use Keyset pagination for infinite-scroll feeds and large datasets'
            ]
          },
          code: `-- 1. DISTINCT ON: Find the LATEST order for every customer
SELECT DISTINCT ON (user_id)
  user_id,
  order_id,
  total_amount,
  created_at
FROM orders
ORDER BY user_id, created_at DESC;

-- 2. Explicit NULL Sorting
SELECT id, title, price, discount_percentage
FROM courses
ORDER BY discount_percentage DESC NULLS LAST, price ASC;

-- 3. High-Performance Keyset (Cursor) Pagination
-- Page 1:
SELECT id, username, xp_points 
FROM learners 
ORDER BY id ASC 
LIMIT 20;

-- Page 2 (Pass last seen id = 20 from previous page):
SELECT id, username, xp_points 
FROM learners 
WHERE id > 20 
ORDER BY id ASC 
LIMIT 20;`,
          codeBreakdown: [
            { part: 'SELECT DISTINCT ON (user_id)', label: 'Keeps only the first row per user group matching the ORDER BY sort precedence', color: '#3b82f6' },
            { part: 'ORDER BY discount_percentage DESC NULLS LAST', label: 'Places items with non-null discounts first, pushing NULL discounts to the end', color: '#10b981' },
            { part: 'WHERE id > 20 ORDER BY id ASC LIMIT 20', label: 'Keyset cursor seek utilizing B-Tree index O(1) jump without scanning discarded offsets', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `DISTINCT ON (col)` use karte waqt `ORDER BY` mein pehla column match na karna (Syntax Error 42P10)',
            '❌ Billions of rows wale tables par `OFFSET 500000` use karna'
          ],
          miniChallenge: 'Ek query likho using `DISTINCT ON (category)` jo har category ka sabse expensive course fetch kare.',
          quiz: {
            question: 'PostgreSQL mein har category ka sabse highest rated course single query mein nikaalne ke liye kaunsa feature sabse clean hai?',
            options: ['DISTINCT ON (category) with ORDER BY category, rating DESC', 'DISTINCT category', 'GROUP BY ALL', 'LIMIT 1'],
            answer: 'DISTINCT ON (category) with ORDER BY category, rating DESC',
            explanation: '`SELECT DISTINCT ON (category) ... ORDER BY category, rating DESC` har category partition ka top highest-rated row directly extract karta hai.'
          },
          summary: [
            'DISTINCT ON "first/latest record per group" problems ko elegantly solve karta hai',
            'NULLS FIRST / NULLS LAST missing data sorting par exact control provide karta hai',
            'Keyset pagination deep pagination performance degrade hone se bachata hai'
          ],
          flashcard: {
            q: '`DISTINCT ON` mein `ORDER BY` ka kya rule hota hai?',
            a: '`ORDER BY` clause ke leftmost expressions exactly wahi hone chahiye jo `DISTINCT ON (...)` ke parentheses ke andar specified hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: AGGREGATIONS, RELATIONAL JOINS & SUBQUERIES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Aggregations, Relational JOINs & Subqueries',
      lessons: [
        {
          id: 'pg-aggregates-group-filter',
          title: 'Aggregations, GROUP BY & The Modern FILTER (WHERE ...) Clause',
          emoji: '📈',
          xpReward: 40,
          badgeName: 'Analytics Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Aggregate functions ke andar conditional counts ke liye ugly `CASE WHEN` likhne ka zamana gaya! PostgreSQL ka `FILTER (WHERE ...)` clause dekho — code ekdum clean aur readable ban jata hai! 📊😎"',
            hint: '💡 Masti Sir: "`COUNT(*) FILTER (WHERE status = \'completed\')` se aap ek hi query mein active, pending, aur completed sabhi counts alag-alag columns mein nikaal sakte ho!"',
            success: '🎉 Masti Sir: "Aggregate FILTER clause mastery achieved! Analytics queries are super clean! 🔥"',
            mistake: '😅 Masti Sir: "Aggregate functions par filter lagane ke liye `HAVING` use karo, individual rows ke liye `WHERE`!"'
          },
          englishDef: 'PostgreSQL implements standard SQL aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) combined with `GROUP BY` and `HAVING`. Additionally, PostgreSQL natively supports the SQL standard `FILTER (WHERE predicate)` clause on aggregate functions, allowing selective aggregation within a single query pass without requiring verbose `CASE WHEN` constructs.',
          hinglishExplain: 'Aggregate functions hazaron rows ka statistical summary nikaalte hain. PostgreSQL ka sabse shandar feature hai `FILTER (WHERE condition)` jo direct aggregate function ke sath lagta hai. Isse aap ek single query mein total orders, completed orders aur cancelled orders ka count alag-alag columns mein bina subquery ke nikaal sakte ho.',
          funnyExample: {
            scenario: 'The Student Exam Dashboard:\n- Old Messy SQL: `SUM(CASE WHEN score >= 90 THEN 1 ELSE 0 END) AS toppers` 😫\n- Modern PostgreSQL: `COUNT(*) FILTER (WHERE score >= 90) AS toppers` 🎩✨\n- Clean, English-like syntax that executes in a single pass!',
            punchline: 'The FILTER clause makes conditional aggregations crystal clear!'
          },
          visualDiagram: {
            title: 'Aggregate FILTER Clause Architecture',
            nodes: [
              'Raw Orders Table (100,000 Rows)',
              'GROUP BY seller_id',
              '├── COUNT(*) -> Total Orders Count',
              '├── COUNT(*) FILTER (WHERE status = \'delivered\') -> Delivered Count',
              '└── SUM(amount) FILTER (WHERE status = \'refunded\') -> Refunded Total'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Single-Pass Execution of FILTER Clause:',
            steps: [
              'PostgreSQL aggregates rows in a single table scan into grouping hash buckets',
              'Evaluates the FILTER condition boolean expression per row before incrementing the accumulator',
              'Executes significantly faster than multiple self-joins or correlated subqueries'
            ]
          },
          code: `-- 1. Clean KPI Dashboard using FILTER (WHERE ...) Clause
SELECT 
  category,
  COUNT(*) AS total_courses,
  COUNT(*) FILTER (WHERE is_published = TRUE) AS published_courses,
  COUNT(*) FILTER (WHERE is_published = FALSE) AS draft_courses,
  AVG(price) FILTER (WHERE is_published = TRUE) AS avg_published_price,
  SUM(price) FILTER (WHERE price > 1000) AS high_ticket_revenue_potential
FROM courses
GROUP BY category
HAVING COUNT(*) >= 3
ORDER BY total_courses DESC;`,
          codeBreakdown: [
            { part: "COUNT(*) FILTER (WHERE is_published = TRUE)", label: 'Selectively increments counter only for rows matching the inline filter condition', color: '#3b82f6' },
            { part: 'GROUP BY category', label: 'Partitions course catalog rows into distinct categorical summary buckets', color: '#10b981' },
            { part: 'HAVING COUNT(*) >= 3', label: 'Filters aggregated category buckets: only returns categories with 3 or more courses', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ FILTER clause support hone ke bawajood complex `CASE WHEN ... THEN 1 ELSE NULL END` likhna',
            '❌ `WHERE` aur `HAVING` ke execution order ko mix kar dena'
          ],
          miniChallenge: 'Ek query likho jo users table se total users, verified users (`FILTER (WHERE is_verified)`), aur active users count kare.',
          quiz: {
            question: 'PostgreSQL mein aggregate function ke andar conditional filtering apply karne ke liye kaunsa modern SQL clause use hota hai?',
            options: ['FILTER (WHERE ...)', 'CONDITIONAL()', 'ONLY IF()', 'WHEN MATCHED'],
            answer: 'FILTER (WHERE ...)',
            explanation: 'PostgreSQL SQL:2003 standard `FILTER (WHERE condition)` clause support karta hai jo aggregate functions ke sath selective counting/summing enable karta hai.'
          },
          summary: [
            'FILTER clause conditional aggregations ko clean aur declarative banata hai',
            'Single table pass mein multi-metric dashboards calculate karta hai',
            'GROUP BY aur HAVING ke sath seamlessly integrate hota hai'
          ],
          flashcard: {
            q: '`COUNT(*) FILTER (WHERE amount > 500)` ka fayda kya hai?',
            a: 'Ye ek hi query mein bina subqueries ya JOINs ke sirf specific condition match karne wali rows ko count karta hai, jisse code clean aur fast rehta hai.'
          }
        },
        {
          id: 'pg-joins-full-outer-lateral',
          title: 'Relational JOINs, Native FULL OUTER JOIN & CROSS JOIN LATERAL',
          emoji: '🔗',
          xpReward: 45,
          badgeName: 'JOIN Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "MySQL mein FULL OUTER JOIN ke liye UNION ka jugad karna padta tha, par PostgreSQL mein native `FULL OUTER JOIN` chalta hai! Aur `LATERAL` join toh SQL ka for-each loop hai! 😎"',
            hint: '💡 Masti Sir: "`CROSS JOIN LATERAL` right subquery ko har left row ke data ko access karne deta hai — jaise subquery ke andar parameters pass karna!"',
            success: '🎉 Masti Sir: "Enterprise multi-table JOINs aur LATERAL subqueries mastered! 🔥"',
            mistake: '😅 Masti Sir: "Unindexed foreign keys par multi-table JOINs database CPU 100% kar sakti hain — always index foreign keys!"'
          },
          englishDef: 'PostgreSQL provides comprehensive relational JOIN support: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, native `FULL OUTER JOIN` (retains unmatched rows from both left and right tables), `CROSS JOIN`, `SELF JOIN`, and `CROSS JOIN LATERAL` (allows the right-side subquery to reference columns provided by preceding left-side table rows, functioning as a correlated subquery in the FROM clause).',
          hinglishExplain: 'PostgreSQL sabhi standard JOINs natively support karta hai. `FULL OUTER JOIN` dono tables ke saare records preserve karta hai (chahe match ho ya na ho). Sabse advanced join hai `LATERAL` join — ye ek for-each loop jaisa hota hai jahan right side ki subquery left side ki har row ke columns ko directly use kar sakti hai (e.g. har customer ke top 2 latest orders nikaalna).',
          funnyExample: {
            scenario: 'The For-Each Loop (LATERAL Join):\n- Left Table: 1,000 Customers 👥\n- LATERAL Subquery: "For this specific customer, fetch their TOP 2 highest value orders" 📦📦\n- Result: Instant top 2 orders per customer without window functions!',
            punchline: 'LATERAL joins act like a programmatic for-each loop inside your SQL FROM clause!'
          },
          visualDiagram: {
            title: 'CROSS JOIN LATERAL Execution Flow',
            nodes: [
              'Left Row: Customer #101 (Kabir)',
              'LATERAL Subquery executes: SELECT * FROM orders WHERE user_id = 101 ORDER BY amount DESC LIMIT 2',
              'Left Row: Customer #102 (Riya)',
              'LATERAL Subquery executes: SELECT * FROM orders WHERE user_id = 102 ORDER BY amount DESC LIMIT 2',
              'Combined Result: Streamed unified dataset'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'PostgreSQL Join Implementations:',
            steps: [
              'Nested Loop: Optimal when outer table is small and inner table has B-Tree index',
              'Hash Join: Builds in-memory hash table of smaller relation and probes larger relation',
              'Merge Join: Sorts both relations on join keys and merges matching streams (efficient for pre-sorted indexed data)'
            ]
          },
          code: `-- 1. Native FULL OUTER JOIN (Both sides preserved)
SELECT 
  u.id AS user_id,
  u.username,
  e.course_id,
  e.enrolled_at
FROM learners u
FULL OUTER JOIN course_enrollments e 
  ON u.id = e.learner_id;

-- 2. CROSS JOIN LATERAL: Top 2 Latest Orders for EVERY Customer
SELECT 
  u.id AS customer_id,
  u.username,
  latest_orders.order_id,
  latest_orders.total_amount,
  latest_orders.created_at
FROM learners u
CROSS JOIN LATERAL (
  SELECT 
    o.id AS order_id, 
    o.total_amount, 
    o.created_at
  FROM customer_orders o
  WHERE o.customer_id = u.id
  ORDER BY o.created_at DESC
  LIMIT 2
) AS latest_orders;`,
          codeBreakdown: [
            { part: 'FULL OUTER JOIN course_enrollments e ON u.id = e.learner_id', label: 'Native SQL standard full outer join preserving unmatched rows from both entities', color: '#3b82f6' },
            { part: 'CROSS JOIN LATERAL (...) AS latest_orders', label: 'Evaluates subquery for each candidate left-hand row passing u.id as input parameter', color: '#10b981' },
            { part: 'WHERE o.customer_id = u.id ORDER BY ... LIMIT 2', label: 'Fetches top 2 correlated child records directly in the FROM join stream', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Normal subquery mein left table column access karne ki koshish karna bina `LATERAL` keyword ke',
            '❌ Large multi-table joins mein missing indexes on join keys'
          ],
          miniChallenge: 'Ek `CROSS JOIN LATERAL` query likho jo har course ke top 3 highest scoring quiz attempts fetch kare.',
          quiz: {
            question: 'PostgreSQL mein `LATERAL` keyword ka kya purpose hota hai?',
            options: [
              'Query ko cancel karna',
              'FROM clause ke andar right-side subquery ko left-side table ke columns access karne ki permission dena',
              'Database tables ko rename karna',
              'Hard disk speed badhana'
            ],
            answer: 'FROM clause ke andar right-side subquery ko left-side table ke columns access karne ki permission dena',
            explanation: '`LATERAL` subqueries ko preceding FROM items ke columns reference karne deta hai, jo correlated subqueries ko join syntax mein powerful banata hai.'
          },
          summary: [
            'PostgreSQL native FULL OUTER JOIN support karta hai',
            'LATERAL subqueries per-row parameterization enable karti hain',
            'Query planner Nested Loop, Hash Join aur Merge Join algorithms dynamically choose karta hai'
          ],
          flashcard: {
            q: '`FULL OUTER JOIN` aur `INNER JOIN` mein kya difference hai?',
            a: '`INNER JOIN` sirf wahi rows deta hai jahan dono tables mein match ho; `FULL OUTER JOIN` left aur right dono tables ke saare rows deta hai (unmatched columns mein NULL populate hota hai).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: CTES, RECURSIVE CTES & WINDOW FUNCTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Modern SQL: CTEs, Recursive CTEs & Window Functions',
      lessons: [
        {
          id: 'pg-ctes-recursive-hierarchies',
          title: 'Common Table Expressions (WITH, Multi-CTEs & Recursive Hierarchy Trees)',
          emoji: '🌲',
          xpReward: 45,
          badgeName: 'CTE Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Nested subqueries ka spaghetti code dekhkar sar dard ho raha hai? CTE (`WITH` clause) use karo! Code modular, clean aur readable ban jayega! 🌲😎"',
            hint: '💡 Masti Sir: "Recursive CTE se organization chart, nested comments thread, aur category trees ek hi query mein solve ho jaate hain!"',
            success: '🎉 Masti Sir: "Recursive SQL queries successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "Recursive query mein termination condition zaroor lagayein varna infinite loop ban jayega!"'
          },
          englishDef: 'Common Table Expressions (CTEs) defined with `WITH` create modular, named temporary result sets for a single statement. In PostgreSQL 12+, CTEs are automatically inlined unless explicitly materialized (`WITH cte AS MATERIALIZED (...)`). `WITH RECURSIVE` enables traversing self-referencing tree graphs such as organizational charts, folder structures, and nested discussion threads.',
          hinglishExplain: 'CTE (`WITH` clause) ek temporary named dataset hota hai jo query ko modular aur readable banata hai. `WITH RECURSIVE` apne aap ko repeatedly call karke tree structures (jaise CEO -> Manager -> Employee ya Reddit-style nested comment replies) ko explore karta hai jab tak last leaf node na aa jaye.',
          funnyExample: {
            scenario: 'The Reddit Nested Comment Thread:\n- Comment 1 (Root): "PostgreSQL is awesome!" 💬\n  ├── Comment 2 (Reply): "Agreed, JSONB is fast!" 🗨️\n      └── Comment 3 (Reply to 2): "And PostGIS is magic!" 🗨️\n- Recursive CTE fetches all nested replies in exact conversation hierarchy order! 🌲',
            punchline: 'Recursive CTE traverses nested reply threads with ease!'
          },
          visualDiagram: {
            title: 'Recursive CTE Tree Traversal Mechanics',
            nodes: [
              '1. Non-Recursive Anchor: SELECT comment where parent_id IS NULL (Root comments)',
              '2. UNION ALL',
              '3. Recursive Step: JOIN comments ON c.parent_id = cte.id (Fetch replies to current level)',
              '4. Loop terminates automatically when no more child rows are found'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'PostgreSQL CTE Inlining Optimization (Postgres 12+):',
            steps: [
              'In older versions, CTEs were an optimization fence (always materialized to memory)',
              'PostgreSQL 12+ inlines non-recursive CTEs directly into the parent query plan',
              'Use `WITH cte AS MATERIALIZED (...)` if you deliberately want to prevent query planner predicate pushdown'
            ]
          },
          code: `-- 1. Recursive CTE: Nested Discussion Comments Hierarchy
WITH RECURSIVE comment_tree AS (
  -- Anchor Member: Root comments (no parent)
  SELECT 
    id, 
    post_id,
    author_name, 
    content, 
    parent_id, 
    1 AS depth_level,
    ARRAY[id] AS path_order
  FROM discussion_comments
  WHERE parent_id IS NULL

  UNION ALL

  -- Recursive Member: Child replies
  SELECT 
    c.id, 
    c.post_id,
    c.author_name, 
    c.content, 
    c.parent_id, 
    ct.depth_level + 1,
    ct.path_order || c.id
  FROM discussion_comments c
  INNER JOIN comment_tree ct ON c.parent_id = ct.id
)
SELECT 
  REPEAT('  ↳ ', depth_level - 1) || author_name AS threaded_author,
  content,
  depth_level
FROM comment_tree
ORDER BY path_order;`,
          codeBreakdown: [
            { part: 'WITH RECURSIVE comment_tree AS (...)', label: 'Declares recursive execution capability for traversing hierarchical datasets', color: '#3b82f6' },
            { part: 'WHERE parent_id IS NULL', label: 'Anchor member query identifying root-level entries of the tree graph', color: '#10b981' },
            { part: 'ARRAY[id] ... ct.path_order || c.id', label: 'Maintains array breadcrumb path guaranteeing correct visual thread ordering', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Recursive CTE mein `UNION` vs `UNION ALL` ke difference ko ignore karna (UNION ALL is faster and avoids duplicate sorting)',
            '❌ Cyclic references (e.g. A reports to B, B reports to A) handle na karna (use path array to check for cycles)'
          ],
          miniChallenge: 'Ek recursive CTE likho jo category hierarchy (`Electronics` -> `Laptops` -> `Gaming Laptops`) generate kare.',
          quiz: {
            question: 'Recursive CTE mein recursion kab stop hoti hai?',
            options: [
              'Jab server band ho jata hai',
              'Jab recursive member query 0 rows return karti hai (empty set)',
              '10 rows ke baad',
              'Error aane par'
            ],
            answer: 'Jab recursive member query 0 rows return karti hai (empty set)',
            explanation: 'Recursive CTE loop tab terminate hota hai jab intermediate recursive query stream empty set (0 rows) return karti hai.'
          },
          summary: [
            'CTEs complex queries ko clean, modular aur maintainable banate hain',
            'WITH RECURSIVE trees, graphs aur nested comment threads traverse karta hai',
            'PostgreSQL 12+ CTEs ko automatically inline karke query optimizer plans create karta hai'
          ],
          flashcard: {
            q: 'PostgreSQL mein `WITH cte AS MATERIALIZED` ka kya purpose hota hai?',
            a: 'Ye PostgreSQL optimizer ko force karta hai ki CTE ko ek separate temporary in-memory result set ki tarah compute kare aur parent query ke sath inline na kare.'
          }
        },
        {
          id: 'pg-window-functions',
          title: 'Modern Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD & Frames)',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'Window Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "GROUP BY data ko compress kar deta hai, jabki Window Function bolta hai: \'Main ranking aur running total bhi nikaalunga aur original rows ko bhi zinda rakhunga!\' 😎"',
            hint: '💡 Masti Sir: "`DENSE_RANK()` leaderboard ties handle karta hai, aur `LAG()` pichle mahine ka revenue nikaal kar growth % calculate karta hai!"',
            success: '🎉 Masti Sir: "Window functions master ho gaya! Analytical queries ready! 🚀"',
            mistake: '😅 Masti Sir: "Window functions direct WHERE clause mein nahi chalte — CTE ya subquery mein wrap karo!"'
          },
          englishDef: 'Window functions perform analytical calculations across a set of table rows related to the current row without collapsing them into a single summary row. Powered by the `OVER (PARTITION BY ... ORDER BY ...)` clause, core functions include ranking (`ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`), value navigation (`LAG()`, `LEAD()`, `FIRST_VALUE()`, `LAST_VALUE()`), and cumulative sums.',
          hinglishExplain: 'Window functions bina rows ko merge kiye calculations execute karte hain. `PARTITION BY` se data logical groups mein baanta jata hai aur `ORDER BY` se rank ya sequence banti hai. `ROW_NUMBER()` 1,2,3 serial number deta hai, `DENSE_RANK()` rank calculate karta hai (ties hone par numbers skip nahi karta), aur `LAG()` pichli row ki value nikaalta hai.',
          funnyExample: {
            scenario: 'Leaderboard Ranking:\n- GROUP BY: Sabhi students ko ek dabba bana ke sirf average batayega 📦\n- Window Function: Har student ki apni row rahegi aur side mein unki class rank #1, #2, #3 jud jayegi! 🏅',
            punchline: 'Window Functions = Row collapse kiye bina advanced ranking analytics!'
          },
          visualDiagram: {
            title: 'Window Function Partitioning & Frame',
            nodes: [
              'Input Table: All Learners across multiple course categories',
              'PARTITION BY category -> Divides data into category partitions',
              'ORDER BY xp_points DESC -> Sorts rows within each partition',
              'Calculates ROW_NUMBER(), DENSE_RANK(), and LAG() per partition'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Window Frame Execution Pipeline:',
            steps: [
              'PostgreSQL scans base table and sorts data by partition and order keys',
              'Window frame buffer computes running aggregates or rank counters',
              'Output rows are projected directly without altering row count'
            ]
          },
          code: `-- 1. Student Ranking within Category & Global Leaderboard
SELECT 
  id,
  username,
  category,
  xp_points,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY xp_points DESC) AS category_rank,
  DENSE_RANK() OVER (ORDER BY xp_points DESC) AS global_rank,
  LAG(xp_points, 1) OVER (PARTITION BY category ORDER BY xp_points DESC) AS next_higher_xp
FROM learners;

-- 2. Running Total of Daily Revenue
SELECT 
  order_date,
  daily_amount,
  SUM(daily_amount) OVER (
    ORDER BY order_date 
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS cumulative_revenue
FROM daily_sales_summary;`,
          codeBreakdown: [
            { part: 'ROW_NUMBER() OVER (PARTITION BY category ORDER BY xp_points DESC)', label: 'Assigns unique sequential integer (1, 2, 3...) per window partition', color: '#3b82f6' },
            { part: 'DENSE_RANK() OVER (ORDER BY xp_points DESC)', label: 'Calculates global rank without skipping numbers during ties', color: '#10b981' },
            { part: 'SUM(daily_amount) OVER (ORDER BY order_date ...)', label: 'Computes cumulative running total across time-ordered sequence', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Window function ko WHERE clause ke andar directly use karne ki koshish karna (use CTE instead)',
            '❌ `RANK()` aur `DENSE_RANK()` ke tie behavior ko ignore karna'
          ],
          miniChallenge: 'Ek query likho jo `DENSE_RANK()` use karke overall top 5 learners select kare.',
          quiz: {
            question: 'Window functions mein `PARTITION BY` ka kya kaam hota hai?',
            options: ['Hard drive divide karna', 'Dataset ko logical groups/windows mein divide karna calculations ke liye', 'Table delete karna', 'Database restart karna'],
            answer: 'Dataset ko logical groups/windows mein divide karna calculations ke liye',
            explanation: 'PARTITION BY dataset ko logical sub-groups mein baant deta hai taaki rank ya running totals har group ke liye alag se calculate ho sakein.'
          },
          summary: [
            'Window functions bina rows collapse kiye calculations calculate karte hain',
            'ROW_NUMBER, RANK, DENSE_RANK ranking ke liye standard hain',
            'OVER (PARTITION BY ... ORDER BY ...) window syntax hai'
          ],
          flashcard: {
            q: '`RANK()` aur `DENSE_RANK()` mein kya difference hai?',
            a: 'Tie aane par `RANK()` next rank skip kar deta hai (1, 1, 3); `DENSE_RANK()` consecutive numbers deta hai bina skip kiye (1, 1, 2).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 9: ARRAYS, JSONB & CUSTOM TYPES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 9: PostgreSQL Power Features: Arrays, JSONB & Custom Types',
      lessons: [
        {
          id: 'pg-intro-jsonb',
          title: 'Native JSONB Documents, Operators (->, ->>, @>, ?) & GIN Indexing',
          emoji: '🐘',
          xpReward: 45,
          badgeName: 'JSONB Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "SQL ki stability aur NoSQL ki flexibility — dono ek hi database mein chahiye? Welcome to PostgreSQL JSONB! 🐘✨"',
            hint: '💡 Masti Sir: "`->` JSON object return karta hai, `->>` clean text deta hai, aur `@>` check karta hai ki kya document ke andar specific JSON match exist karta hai!"',
            success: '🎉 Masti Sir: "JSONB queries aur GIN index indexing successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "Har cheez JSONB mein mat bhar dena — relational tables aur JSONB ka sahi balance banana zaroori hai!"'
          },
          englishDef: 'PostgreSQL provides native semi-structured support via `json` (stores raw text) and `jsonb` (decomposed binary format supporting deep GIN indexing and fast lookups). Operators include `->` (extracts JSON element), `->>` (extracts text value), `#>` (extracts by path), `@>` (containment check), and `?` (key existence).',
          hinglishExplain: 'PostgreSQL ka `JSONB` format binary JSON store karta hai jo parse ho chuka hota hai. Isme aap nested JSON documents store kar sakte ho aur GIN index lagane par millions of JSON documents mein se specific field seconds ki jagah milliseconds mein filter ho jata hai.',
          funnyExample: {
            scenario: 'Swiss Army Knife Database:\n- Normal SQL: Sirf chaaku (Knife)\n- MongoDB: Sirf scissors (Scissors)\n- PostgreSQL: Swiss Army Knife jisme chaaku, scissors, screwdriver sab kuch ek sath milta hai! 🛠️',
            punchline: 'PostgreSQL = SQL + NoSQL in one single database!'
          },
          visualDiagram: {
            title: 'PostgreSQL JSONB Operators & Querying',
            nodes: [
              'Column: details JSONB = {"brand": "Apple", "specs": {"ram": "16GB"}, "tags": ["laptop", "m3"]}',
              'details->\'specs\' -> {"ram": "16GB"} (Returns JSON)',
              'details->>\'brand\' -> Apple (Returns Text)',
              'details @> \'{"brand": "Apple"}\'::jsonb -> True (Fast GIN containment lookup)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'JSONB vs JSON Under the Hood:',
            steps: [
              '`json` stores exact textual copy (slow query parsing, preserves whitespace)',
              '`jsonb` stores parsed binary tree format (fast search, eliminates duplicate keys)',
              'GIN (Generalized Inverted Index) indexes all keys and values inside JSONB automatically'
            ]
          },
          code: `-- 1. Create Table with JSONB Document
CREATE TABLE products (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  details JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Insert Semi-Structured BSON-style Data
INSERT INTO products (name, price, details)
VALUES (
  'MacBook Pro 16',
  249999.00,
  '{"brand": "Apple", "specs": {"ram": "32GB", "storage": "1TB SSD"}, "tags": ["laptop", "apple", "m3"]}'
);

-- 3. Create GIN Index for High-Speed JSON Search
CREATE INDEX idx_products_details_gin ON products USING gin (details);

-- 4. Fast Containment Query (@> utilizes GIN index)
SELECT name, price, details->>'brand' AS brand, details#>>'{specs,ram}' AS ram
FROM products
WHERE details @> '{"brand": "Apple"}'::jsonb;`,
          codeBreakdown: [
            { part: 'details JSONB NOT NULL', label: 'Binary decomposed JSON format supporting deep nested querying and indexing', color: '#3b82f6' },
            { part: 'USING gin (details)', label: 'Generalized Inverted Index indexing every key and value inside the JSON document', color: '#10b981' },
            { part: "details @> '{\"brand\": \"Apple\"}'::jsonb", label: 'Containment operator testing whether left JSONB contains right JSONB document', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Plain `JSON` type use karna instead of `JSONB` (plain JSON cannot use GIN containment indexes)',
            '❌ `->` aur `->>` ke beech confuse hona'
          ],
          miniChallenge: 'Ek JSONB query likho jo `details ? "tags"` use karke check kare ki key exist karti hai ya nahi.',
          quiz: {
            question: 'PostgreSQL mein JSONB field ke andar se text value extract karne ke liye kaunsa operator use karte hain?',
            options: ['->', '->>', '::text', '.extract()'],
            answer: '->>',
            explanation: 'Operator `->>` JSON property ko text string ke roop mein extract karta hai, jabki `->` use raw JSON format mein return karta hai.'
          },
          summary: [
            'JSONB binary format indexing aur high-speed querying provide karta hai',
            'GIN indexes JSONB containment queries (@>) ko index-accelerated banate hain',
            '->> text extraction aur #>> nested path extraction handle karte hain'
          ],
          flashcard: {
            q: '`json` aur `jsonb` mein kya difference hai?',
            a: '`json` raw text store karta hai (har query par re-parse hota hai); `jsonb` decomposed binary format store karta hai jo fast queries aur GIN indexing support karta hai.'
          }
        },
        {
          id: 'pg-arrays-enum-types',
          title: 'PostgreSQL Array Data Types, Operators (ANY, @>) & ENUMs',
          emoji: '📦',
          xpReward: 40,
          badgeName: 'Array Polyglot',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tags ya phone numbers ke liye alag se junction table nahi banani? PostgreSQL Arrays (`TEXT[]`, `INT[]`) use karo! Array operators (`ANY`, `@>`) se filtering ekdum smooth ho jaati hai! 📦😎"',
            hint: '💡 Masti Sir: "`WHERE \'javascript\' = ANY(skills)` check karta hai ki kya array ke andar specific item exist karta hai!"',
            success: '🎉 Masti Sir: "Array manipulation aur Custom ENUM types mastered! 🔥"',
            mistake: '😅 Masti Sir: "Agar array ke elements ke sath heavy relationships ya foreign keys chahiye toh traditional relational table banayein!"'
          },
          englishDef: 'PostgreSQL provides native variable-length multidimensional Array data types (e.g. `text[]`, `integer[]`) with powerful operators: `ANY()` (membership test), `@>` (array contains), `<@` (is contained by), and `&&` (array overlap). Custom `ENUM` types defined via `CREATE TYPE ... AS ENUM` enforce strict finite string value sets.',
          hinglishExplain: 'PostgreSQL mein kisi bhi column ko Array banaya ja sakta hai (jaise `skills TEXT[]` ya `scores INT[]`). Isse simple multi-value lists (tags, phone numbers, role permissions) ko bina separate junction table banaye single row mein store kiya ja sakta hai. Custom `ENUM` se hum fixed values (jaise user roles ya order status) define karte hain.',
          funnyExample: {
            scenario: 'Developer Skills Profile:\n- Without Arrays: Separate `skills` table + `user_skills` junction table (3 tables to join!)\n- With PostgreSQL Array: `skills TEXT[] = ARRAY[\'PostgreSQL\', \'Node.js\', \'React\']` -> Single column, instant querying via `\'PostgreSQL\' = ANY(skills)`! 🚀',
            punchline: 'Arrays make simple list attributes lightweight and intuitive!'
          },
          visualDiagram: {
            title: 'PostgreSQL Array Querying Operators',
            nodes: [
              'Column: skills TEXT[] = ARRAY[\'SQL\', \'PostgreSQL\', \'Python\']',
              '\'SQL\' = ANY(skills) -> True (Membership check)',
              'skills @> ARRAY[\'SQL\', \'Python\'] -> True (Contains sub-array)',
              'skills && ARRAY[\'Java\', \'SQL\'] -> True (Overlaps: shares at least one common element)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'GIN Indexing on PostgreSQL Arrays:',
            steps: [
              'GIN indexes can be created directly on array columns: `CREATE INDEX USING gin (skills)`',
              'GIN creates index entries for every distinct array element',
              'Array overlap (`&&`) and containment (`@>`) queries execute via lightning-fast index scans'
            ]
          },
          code: `-- 1. Create Custom ENUM Type
CREATE TYPE user_role_enum AS ENUM ('student', 'mentor', 'admin', 'moderator');

-- 2. Create Table with Arrays & ENUM
CREATE TABLE developer_profiles (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  full_name TEXT NOT NULL,
  role user_role_enum DEFAULT 'student',
  skills TEXT[] NOT NULL DEFAULT '{}',
  phone_numbers VARCHAR(20)[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Insert Array Data
INSERT INTO developer_profiles (full_name, role, skills, phone_numbers)
VALUES (
  'Kabir Sharma',
  'mentor',
  ARRAY['PostgreSQL', 'Node.js', 'React', 'Docker'],
  ARRAY['+919876543210', '+919876543211']
);

-- 4. Query Array using ANY and Overlap (&&)
SELECT full_name, role, skills 
FROM developer_profiles 
WHERE 'PostgreSQL' = ANY(skills) 
  AND skills && ARRAY['React', 'Vue'];`,
          codeBreakdown: [
            { part: "CREATE TYPE user_role_enum AS ENUM ('student', 'mentor', ...)", label: 'Defines strict custom enumerated data type stored internally as compact 4-byte integer', color: '#3b82f6' },
            { part: "skills TEXT[] NOT NULL DEFAULT '{}'", label: 'Native 1D array column storing list of textual skill tokens with empty array default', color: '#10b981' },
            { part: "'PostgreSQL' = ANY(skills)", label: 'Evaluates boolean true if scalar value exists in candidate array collection', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Array elements par Foreign Key enforce karne ki koshish karna (Foreign keys work on columns, not individual array elements; use relational tables if referential integrity is required)',
            '❌ `ENUM` values ko bina `ALTER TYPE` ke delete karne ki koshish karna'
          ],
          miniChallenge: 'Ek query likho with `array_append(skills, "TypeScript")` jo kisi developer profile ke array mein naya skill add kare.',
          quiz: {
            question: 'PostgreSQL mein check karne ke liye ki kya do arrays ke beech kam se kam 1 common element match karta hai, kaunsa operator use hota hai?',
            options: ['&& (Overlap operator)', '==', '@>', 'IN'],
            answer: '&& (Overlap operator)',
            explanation: '`&&` (overlap operator) TRUE evaluate karta hai agar dono arrays ke beech kam se kam 1 common element shared ho.'
          },
          summary: [
            'Arrays simple multi-value attributes ko without junction tables store karte hain',
            'ANY() aur overlap (&&) operators array filtering simplify karte hain',
            'CREATE TYPE ... AS ENUM strict domain categorical values enforce karta hai'
          ],
          flashcard: {
            q: 'Array mein naya element append karne ke liye kaunsa function use hota hai?',
            a: '`array_append(array_col, new_element)` function array ke end mein naya item add karta hai (ya `array_col || new_element` concatenation operator use kar sakte hain).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 10: VIEWS, MATERIALIZED VIEWS, PL/PGSQL & TRIGGERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 10: Views, Materialized Views, PL/pgSQL & Triggers',
      lessons: [
        {
          id: 'pg-views-materialized-views',
          title: 'Views vs Materialized Views (REFRESH MATERIALIZED VIEW CONCURRENTLY)',
          emoji: '📊',
          xpReward: 45,
          badgeName: 'View Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Normal View har baar underlying table ko query karta hai, jabki Materialized View calculation result ko physically disk par save kar leta hai! 10 lakh rows ka complex analytics dashboard 2 millisecond mein khulega! 🚀📊"',
            hint: '💡 Masti Sir: "`REFRESH MATERIALIZED VIEW CONCURRENTLY` se aap bina active readers ko block kiye background mein data update kar sakte ho!"',
            success: '🎉 Masti Sir: "Materialized Views aur high-performance analytics dashboards successfully built! 🔥"',
            mistake: '😅 Masti Sir: "`CONCURRENTLY` refresh chalane ke liye Materialized View par ek UNIQUE index hona mandatory hai!"'
          },
          englishDef: 'A standard `VIEW` is a saved virtual query re-executed on every read. A `MATERIALIZED VIEW` physically persists the query result on disk, enabling lightning-fast analytical reads and supporting secondary B-Tree indexes. `REFRESH MATERIALIZED VIEW CONCURRENTLY` updates the persisted data in the background without acquiring exclusive table read locks.',
          hinglishExplain: 'Normal View sirf ek saved query hoti hai jo har baar chalane par naya data compute karti hai. `MATERIALIZED VIEW` complex multi-table aggregations ka result physically disk par save kar leta hai. Jab dashboard load hota hai toh 10 lakh rows scan nahi hoti, balki pre-computed result instant load ho jata hai. Background mein data refresh karne ke liye `REFRESH MATERIALIZED VIEW CONCURRENTLY` use hota hai.',
          funnyExample: {
            scenario: 'The Coffee Shop Menu Analogy:\n- Standard View: Customer enters -> Chef goes to farm, picks coffee beans, roasts them, brews coffee (15 minutes per customer! 🐢)\n- Materialized View: Chef already has a fresh flask of brewed coffee ready on the counter -> Serves in 3 seconds! ☕⚡',
            punchline: 'Materialized Views pre-compute expensive queries for instant retrieval!'
          },
          visualDiagram: {
            title: 'Standard View vs Materialized View Architecture',
            nodes: [
              'Standard View: SELECT * FROM v_report -> Executes Underlying Multi-Table JOIN Query Every Single Time',
              'Materialized View: SELECT * FROM mv_daily_revenue -> Reads Directly from Pre-Computed Disk Storage + Indexes (O(1))',
              'Background Refresh: REFRESH MATERIALIZED VIEW CONCURRENTLY mv_daily_revenue (Zero read downtime)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Concurrent Refresh Requirements:',
            steps: [
              'Requires at least one `UNIQUE INDEX` on the materialized view columns',
              'PostgreSQL creates a temporary working table, populates new data, and performs a differential merge',
              'Readers continue reading existing materialized snapshot without blocking'
            ]
          },
          code: `-- 1. Create Standard View (Virtual Abstraction)
CREATE OR REPLACE VIEW v_active_learners AS
SELECT id, username, email, created_at
FROM learners;

-- 2. Create Materialized View for Heavy Analytics Dashboard
CREATE MATERIALIZED VIEW mv_course_performance_summary AS
SELECT 
  c.id AS course_id,
  c.title AS course_title,
  c.category,
  COUNT(e.learner_id) AS total_enrolled,
  COUNT(e.learner_id) FILTER (WHERE e.grade = 'A') AS top_performers
FROM courses c
LEFT JOIN course_enrollments e ON c.id = e.course_id
GROUP BY c.id, c.title, c.category;

-- 3. Create Unique Index required for Concurrent Refresh
CREATE UNIQUE INDEX idx_mv_course_id ON mv_course_performance_summary (course_id);

-- 4. Query Materialized View (Ultra-fast direct read)
SELECT * FROM mv_course_performance_summary WHERE total_enrolled > 10;

-- 5. Non-Blocking Background Data Refresh
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_course_performance_summary;`,
          codeBreakdown: [
            { part: 'CREATE MATERIALIZED VIEW mv_course_performance_summary AS ...', label: 'Physically materializes and caches aggregated query output directly to disk storage', color: '#3b82f6' },
            { part: 'CREATE UNIQUE INDEX idx_mv_course_id ON ...', label: 'Unique index required to identify row deltas during concurrent background refreshes', color: '#10b981' },
            { part: 'REFRESH MATERIALIZED VIEW CONCURRENTLY', label: 'Refreshes pre-computed snapshot in the background without taking exclusive read locks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Materialized View ko real-time transactional data ke liye use karna bina refresh schedule ke',
            '❌ `REFRESH MATERIALIZED VIEW CONCURRENTLY` chalana bina UNIQUE index banaye (Error 42P12)'
          ],
          miniChallenge: 'Ek Materialized View create karo jo monthly revenue summary cache kare aur use refresh karo.',
          quiz: {
            question: 'PostgreSQL mein `REFRESH MATERIALIZED VIEW CONCURRENTLY` use karne ke liye Materialized View par kya hona mandatory hai?',
            options: ['Kam se kam ek UNIQUE INDEX', 'Foreign key', 'JSONB column', 'Root permissions'],
            answer: 'Kam se kam ek UNIQUE INDEX',
            explanation: 'Concurrent refresh differential row merge perform karta hai, isliye Materialized View ke columns par kam se kam ek `UNIQUE INDEX` hona mandatory hai.'
          },
          summary: [
            'Standard Views query encapsulation provide karte hain',
            'Materialized Views expensive analytical queries ko physically cache karte hain',
            'CONCURRENTLY refresh active dashboard readers ko bina block kiye background update ensure karta hai'
          ],
          flashcard: {
            q: 'Materialized View kab use karni chahiye?',
            a: 'Jab query mein heavy JOINs aur GROUP BY aggregations hon aur data ka har millisecond real-time hona zaroori na ho (e.g. daily dashboards, analytics reports, leaderboards).'
          }
        },
        {
          id: 'pg-functions-procedures-plpgsql',
          title: 'Stored Functions, Procedures & PL/pgSQL Procedural Programming',
          emoji: '⚙️',
          xpReward: 45,
          badgeName: 'PL/pgSQL Coder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Database ke andar variables, IF-ELSE conditions, loops aur transactions chalane hain? PL/pgSQL language seekho! Functions aur Procedures database ke super-powers hain! ⚙️😎"',
            hint: '💡 Masti Sir: "`FUNCTION` hamesha value return karta hai aur query ke andar chalta hai; `PROCEDURE` transactions (COMMIT/ROLLBACK) manage kar sakta hai aur `CALL` se execute hota hai!"',
            success: '🎉 Masti Sir: "PL/pgSQL routines and transactional procedures successfully written! 🔥"',
            mistake: '😅 Masti Sir: "PL/pgSQL block ke andar `$$` dollar quotes lagana mat bhoolna taaki single quotes escape na karne padein!"'
          },
          englishDef: 'PL/pgSQL is PostgreSQL\'s fully-featured procedural programming language. `FUNCTIONS` (`CREATE FUNCTION ... RETURNS type`) execute within query expressions, supporting control flow (`IF`, `CASE`, `LOOP`, `FOR`), exception handling, and deterministic optimizations (`IMMUTABLE`, `STABLE`, `VOLATILE`). `PROCEDURES` (`CREATE PROCEDURE ... CALL`) support explicit transaction control (`COMMIT`, `ROLLBACK`).',
          hinglishExplain: 'PL/pgSQL PostgreSQL ki procedural language hai jisme aap variables, IF-ELSE conditions, loops aur custom logic likh sakte ho. `FUNCTION` ek calculated value return karta hai (jaise tax ya discount calculate karna) aur `SELECT` query ke andar call ho sakta hai. `PROCEDURE` batch operations execute karta hai aur apne andar `COMMIT` / `ROLLBACK` transactions chala sakta hai.',
          funnyExample: {
            scenario: 'The Automatic Tax Calculator:\n- Function: `calculate_gst(amount NUMERIC)`\n- Input: `SELECT title, price, calculate_gst(price) AS gst FROM courses;`\n- Database automatically executes the PL/pgSQL math for every row in microseconds!',
            punchline: 'PL/pgSQL brings full procedural logic right inside the database engine!'
          },
          visualDiagram: {
            title: 'PL/pgSQL Routine Execution Architecture',
            nodes: [
              'CREATE FUNCTION calculate_tier(xp INT) RETURNS TEXT -> Deterministic | Used in SELECT',
              'CREATE PROCEDURE process_enrollment(uid INT, cid INT) -> Transactional (CALL with COMMIT/ROLLBACK)',
              'Language: plpgsql | Volatility: IMMUTABLE (Cached) / STABLE / VOLATILE'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Function Volatility Categories:',
            steps: [
              '`IMMUTABLE`: Same inputs always return identical output (e.g. math functions); optimizer can pre-evaluate and cache result',
              '`STABLE`: Returns same result within a single table scan/statement (e.g. `now()`)',
              '`VOLATILE`: Can change on every call (e.g. `random()`, modifying database state)'
            ]
          },
          code: `-- 1. PL/pgSQL Stored Function: Calculate Learner Tier Badge
CREATE OR REPLACE FUNCTION get_learner_tier(p_xp INT)
RETURNS TEXT
LANGUAGE plpgsql
IMMUTABLE
AS $$
BEGIN
  IF p_xp >= 3000 THEN
    RETURN 'Diamond Ninja';
  ELSIF p_xp >= 1500 THEN
    RETURN 'Gold Master';
  ELSIF p_xp >= 500 THEN
    RETURN 'Silver Explorer';
  ELSE
    RETURN 'Bronze Starter';
  END IF;
END;
$$;

-- Query function directly in SQL:
SELECT username, xp_points, get_learner_tier(xp_points) AS rank_tier
FROM users
LIMIT 5;

-- 2. PL/pgSQL Stored Procedure with Transaction Control
CREATE OR REPLACE PROCEDURE sp_award_bonus_xp(
  p_user_id INT,
  p_bonus_xp INT
)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE users 
  SET xp_points = xp_points + p_bonus_xp 
  WHERE id = p_user_id;

  INSERT INTO xp_transactions (user_id, amount, reason)
  VALUES (p_user_id, p_bonus_xp, 'Challenge Completion Bonus');

  -- Procedures can explicitly control transactions:
  COMMIT;
END;
$$;

-- Execute Procedure:
-- CALL sp_award_bonus_xp(1, 150);`,
          codeBreakdown: [
            { part: 'CREATE OR REPLACE FUNCTION ... RETURNS TEXT', label: 'Declares custom scalar function returning a string token inside SQL queries', color: '#3b82f6' },
            { part: 'LANGUAGE plpgsql IMMUTABLE', label: 'PL/pgSQL language engine marker with immutable caching optimization', color: '#10b981' },
            { part: 'CREATE OR REPLACE PROCEDURE ... CALL sp(...)', label: 'Declares procedural routine supporting explicit transaction management boundaries', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Function ke andar `COMMIT` likhne ki koshish karna (`FUNCTION` runs inside the caller transaction; use `PROCEDURE` for explicit COMMIT)',
            '❌ Heavy external API calls PL/pgSQL ke andar daal dena'
          ],
          miniChallenge: 'Ek PL/pgSQL function likho jo `price` aur `discount_pct` accept karke final discounted price return kare.',
          quiz: {
            question: 'PostgreSQL mein Stored Function aur Stored Procedure mein main functional difference kya hota hai?',
            options: [
              'Function hamesha value return karta hai aur query ke andar chalta hai; Procedure transaction control (COMMIT) kar sakta hai aur CALL se chalta hai',
              'Function sirf Python mein likha ja sakta hai',
              'Procedure mein koi parameters nahi ho sakte',
              'Dono bilkul same hote hain'
            ],
            answer: 'Function hamesha value return karta hai aur query ke andar chalta hai; Procedure transaction control (COMMIT) kar sakta hai aur CALL se chalta hai',
            explanation: '`FUNCTION` SQL expressions ke andar scalar ya table values return karta hai; `PROCEDURE` standalone batch operations execute karta hai aur transaction boundaries (`COMMIT`/`ROLLBACK`) manage kar sakta hai.'
          },
          summary: [
            'PL/pgSQL procedural control flow (IF, LOOPS, EXCEPTIONS) provide karta hai',
            'Functions scalar/table calculations ke liye aur Procedures transactional batch operations ke liye use hote hain',
            'IMMUTABLE aur STABLE volatility markers query optimizer ko calculation caching enable karte hain'
          ],
          flashcard: {
            q: 'PL/pgSQL code mein `$$` dollar quoting ka kya fayda hota hai?',
            a: 'Dollar quoting (`$$ ... $$`) string literals ke andar single quotes (`\'`) ko escape karne ki zaroorat ko khatam kar deta hai, jisse complex function code likhna bohot clean ho jata hai.'
          }
        },
        {
          id: 'pg-triggers-audit-logging',
          title: 'Automated Triggers & Enterprise Audit Logging Systems',
          emoji: '🛡️',
          xpReward: 45,
          badgeName: 'Trigger Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Compliance aur security ke liye har data change ka hisab chahiye! Jaise hi koi employee salary update kare ya user delete kare — Trigger automatically `audit_logs` mein purani value aur nayi value time ke sath record kar leta hai! 📸🛡️"',
            hint: '💡 Masti Sir: "PostgreSQL mein Trigger 2 steps mein banta hai: Step 1 = Trigger Function banao (`RETURNS TRIGGER`), Step 2 = `CREATE TRIGGER` bind karo!"',
            success: '🎉 Masti Sir: "Enterprise-grade audit logging trigger successfully created! 🔥"',
            mistake: '😅 Masti Sir: "`BEFORE INSERT` trigger mein `RETURN NEW;` likhna zaroori hai varna row insert hi nahi hogi!"'
          },
          englishDef: 'PostgreSQL Triggers execute automated callback functions in response to table events (`BEFORE` or `AFTER` `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`). Implementing triggers requires two steps: (1) creating a PL/pgSQL function returning `TRIGGER` accessing `OLD` and `NEW` pseudo-records, and (2) attaching the trigger via `CREATE TRIGGER`. Triggers are foundational for automated audit logging, timestamp updates, and data synchronization.',
          hinglishExplain: 'Trigger ek automatic listener hota hai jo kisi table par event (INSERT, UPDATE, DELETE) hone par apne aap execute hota hai. PostgreSQL mein trigger banane ke 2 steps hote hain:\n1. Pehle ek function banate hain jo `RETURNS TRIGGER` karta hai aur `OLD` (purana record) aur `NEW` (naya record) variables ko access karta hai.\n2. Fir `CREATE TRIGGER` se use table ke sath attach karte hain.',
          funnyExample: {
            scenario: 'The Bank Vault CCTV Camera:\n- Table: Bank Balances 💰\n- Manager updates: Kabir balance ₹10,000 -> ₹50,000 ✍️\n- Trigger CCTV clicks photo: "User ID 1 balance changed from 10000 to 50000 by Manager Neha on 2026-08-21 10:30 AM" 📸\n- Audit proof permanently secured in `audit_logs` table!',
            punchline: 'Triggers leave an unalterable audit trail for every change!'
          },
          visualDiagram: {
            title: 'PostgreSQL Trigger Execution Workflow',
            nodes: [
              'Application executes: UPDATE users SET email = "new@ex.com" WHERE id = 1',
              'PostgreSQL fires: AFTER UPDATE ON users FOR EACH ROW',
              'Trigger Function executes: Captures OLD.email and NEW.email',
              'Inserts Audit Log tuple into audit_activity_logs table',
              'Parent transaction commits atomically'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'BEFORE vs AFTER Trigger Semantics:',
            steps: [
              '`BEFORE` triggers can inspect and modify `NEW` values or abort the operation by raising an exception',
              '`AFTER` triggers execute after row modification has succeeded, ideal for secondary audit logging',
              'Statement-level triggers (`FOR EACH STATEMENT`) execute once per SQL command regardless of how many rows were affected'
            ]
          },
          code: `-- ── STEP 1: CREATE AUDIT LOG STORAGE TABLE ──
CREATE TABLE user_audit_logs (
  audit_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id INT NOT NULL,
  action_type VARCHAR(10) NOT NULL, -- 'INSERT', 'UPDATE', 'DELETE'
  old_data JSONB,
  new_data JSONB,
  changed_by VARCHAR(50) DEFAULT CURRENT_USER,
  changed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- ── STEP 2: CREATE TRIGGER FUNCTION ──
CREATE OR REPLACE FUNCTION fn_audit_user_changes()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF (TG_OP = 'UPDATE') THEN
    INSERT INTO user_audit_logs (user_id, action_type, old_data, new_data)
    VALUES (OLD.id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW));
    RETURN NEW;
  ELSIF (TG_OP = 'DELETE') THEN
    INSERT INTO user_audit_logs (user_id, action_type, old_data, new_data)
    VALUES (OLD.id, 'DELETE', to_jsonb(OLD), NULL);
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$;

-- ── STEP 3: BIND TRIGGER TO USERS TABLE ──
CREATE OR REPLACE TRIGGER trg_users_audit
AFTER UPDATE OR DELETE ON users
FOR EACH ROW
EXECUTE FUNCTION fn_audit_user_changes();`,
          codeBreakdown: [
            { part: 'RETURNS TRIGGER', label: 'Specialized return type designating the PL/pgSQL function as a trigger callback handler', color: '#3b82f6' },
            { part: 'to_jsonb(OLD), to_jsonb(NEW)', label: 'Converts entire record tuple snapshots into structured JSONB for lossless historical auditing', color: '#10b981' },
            { part: 'AFTER UPDATE OR DELETE ON users FOR EACH ROW', label: 'Attaches trigger event listener at row-level granularity', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `BEFORE INSERT` trigger function mein `RETURN NEW;` bhool jana (causes row insertion to be silently dropped)',
            '❌ Heavy external network requests trigger ke andar daal dena (blocks active transactions)'
          ],
          miniChallenge: 'Ek `BEFORE UPDATE` trigger banao jo har update par `updated_at = NOW()` automatically set kare.',
          quiz: {
            question: 'PostgreSQL mein trigger banate waqt PL/pgSQL trigger function ka return type kya hona chahiye?',
            options: ['RETURNS TRIGGER', 'RETURNS VOID', 'RETURNS BOOLEAN', 'RETURNS INT'],
            answer: 'RETURNS TRIGGER',
            explanation: 'PostgreSQL trigger callback functions ka return type hamesha `RETURNS TRIGGER` hona mandatory hota hai.'
          },
          summary: [
            'Triggers automated business validation aur audit logging execute karte hain',
            'OLD aur NEW pseudo-records data modifications ko accurately track karte hain',
            'to_jsonb(OLD/NEW) complete row snapshots ko audit tables mein store karta hai'
          ],
          flashcard: {
            q: 'Trigger mein `TG_OP` variable kya batata hai?',
            a: '`TG_OP` ek special built-in string variable hota hai jo trigger ko batata hai ki kaunsa DML operation chal raha hai (`INSERT`, `UPDATE`, ya `DELETE`).'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 11: INDEXING MASTERY (B-TREE, GIN, GIST, BRIN)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 11: Indexing Mastery: B-Tree, GIN, GiST, BRIN & Partial Indexes',
      lessons: [
        {
          id: 'pg-indexes-btree-gin-gist-brin',
          title: 'PostgreSQL Index Types: B-Tree, GIN, GiST, BRIN & Index-Only Scans',
          emoji: '⚡',
          xpReward: 45,
          badgeName: 'Index Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL mein sirf B-Tree index nahi hota — GIN JSONB ke liye, GiST location maps ke liye, aur BRIN 10 crore rows ke time-series tables ke liye! Sahi index choose karoge toh query speed 1000x badh jayegi! ⚡😎"',
            hint: '💡 Masti Sir: "BRIN index 100 crore rows par sirf 50KB space leta hai kyonki ye har 128 data pages ka min/max value store karta hai!"',
            success: '🎉 Masti Sir: "PostgreSQL multi-engine indexing mastery achieved! 🔥"',
            mistake: '😅 Masti Sir: "Unnecessary indexes memory aur disk waste karte hain aur INSERT/UPDATE ko slow karte hain — index strategically!"'
          },
          englishDef: 'PostgreSQL offers specialized index types tailored to diverse access patterns: `B-Tree` (default for equality, ranges, sorting), `GIN` (Generalized Inverted Index for JSONB, Arrays, Full-Text Search), `GiST` (Generalized Search Tree for spatial geometries, range intervals), and `BRIN` (Block Range Index for massive naturally sorted append-only time-series data).',
          hinglishExplain: 'PostgreSQL duniya ka sabse rich indexing support deta hai:\n1. `B-Tree`: Standard index (equality, ranges, sorting).\n2. `GIN`: JSONB fields, Arrays aur Full-Text search ke andar fast lookup ke liye.\n3. `GiST`: Location coordinates (GPS) aur date range overlaps ke liye.\n4. `BRIN`: Massive time-series tables (jaise logs ya transactions) jahan data naturally date-wise store hota hai — ye 99% space bacha leta hai.',
          funnyExample: {
            scenario: 'Index Selection Analogy:\n- B-Tree = Normal Book Index (Fast page lookup) 📖\n- GIN = Dictionary Index (Finds every page containing word "PostgreSQL") 📚\n- GiST = City Navigation Map (Finds nearest coffee shops) 🗺️\n- BRIN = Warehouse Box Labels ("Boxes 1-100 contain Year 2024 records") 📦',
            punchline: 'Choose the right index type for the right data structure!'
          },
          visualDiagram: {
            title: 'PostgreSQL Index Types Decision Matrix',
            nodes: [
              'B-Tree -> Equality (=), Ranges (<, >), Sorting (ORDER BY) [Default]',
              'GIN -> JSONB documents (@>), Arrays (&&), Full-Text search (tsvector)',
              'GiST -> Spatial GIS geometries, Overlapping date ranges (&&)',
              'BRIN -> 100GB+ Append-only sorted time-series logs (Minimal RAM footprint)'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'BRIN (Block Range Index) Storage Efficiency:',
            steps: [
              'Standard B-Tree creates an entry for every single row in the table (Large index size)',
              'BRIN summarizes ranges of disk blocks (e.g. 128 pages = 1MB block range) by storing only (Min, Max) values',
              'Scans the tiny BRIN index and skips unneeded physical block ranges entirely'
            ]
          },
          code: `-- 1. Standard B-Tree Index (Equality and Range)
CREATE INDEX idx_users_email ON users USING btree (email);

-- 2. GIN Index (JSONB Containment & Arrays)
CREATE INDEX idx_products_metadata_gin ON products USING gin (details);

-- 3. BRIN Index (Massive Time-Series Log Table)
CREATE TABLE application_traffic_logs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  ip_address INET NOT NULL,
  url_path TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- BRIN index is 100x smaller on disk than standard B-Tree for time-series:
CREATE INDEX idx_logs_created_at_brin ON application_traffic_logs USING brin (created_at);`,
          codeBreakdown: [
            { part: 'USING btree (email)', label: 'Standard balanced tree structure optimizing logarithmic O(log N) equality and range scans', color: '#3b82f6' },
            { part: 'USING gin (details)', label: 'Inverted index mapping individual internal JSONB keys/values to table row pointers', color: '#10b981' },
            { part: 'USING brin (created_at)', label: 'Block Range Index storing physical page min/max summaries with tiny storage overhead', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Random unsorted data par BRIN index banana (BRIN requires natural physical sorting on disk)',
            '❌ JSONB containment search par standard B-Tree banana (use GIN instead)'
          ],
          miniChallenge: 'Ek time-series table par `BRIN` index create karo aur index size compare karo with `pg_size_pretty(pg_relation_size("idx_name"))`.',
          quiz: {
            question: 'PostgreSQL mein JSONB documents aur Array containment (@>) queries ko optimize karne ke liye kaunsa index type use hota hai?',
            options: ['B-Tree', 'GIN', 'BRIN', 'Hash'],
            answer: 'GIN',
            explanation: '`GIN` (Generalized Inverted Index) multi-value structures jaise JSONB, Arrays aur Full-Text search vectors ke internal elements ko index karta hai.'
          },
          summary: [
            'B-Tree general equality aur range queries ka gold standard hai',
            'GIN multi-key JSONB aur array structures ko index karta hai',
            'BRIN massive append-only time-series tables par 99% storage space save karta hai'
          ],
          flashcard: {
            q: '`Index-Only Scan` kya hota hai?',
            a: 'Jab query mein maanga gaya saara data direct index leaf nodes se hi mil jaye aur database ko main table ke data pages ko disk se read na karna pade.'
          }
        },
        {
          id: 'pg-partial-expression-indexes',
          title: 'Partial Indexes, Expression Indexes & Indexing Best Practices',
          emoji: '🎯',
          xpReward: 45,
          badgeName: 'Index Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Agar table mein 10 lakh users hain par sirf 50,000 active users ko hi baar baar query karna hai — toh poori table par index kyu banayein? Partial Index `WHERE is_active = TRUE` banao! 95% space aur write speed bachegi! 🎯😎"',
            hint: '💡 Masti Sir: "`CREATE INDEX ON users (LOWER(email));` Expression Index hai jo case-insensitive search ko B-Tree fast bana deta hai!"',
            success: '🎉 Masti Sir: "Partial & Expression indexes successfully deployed! Minimal storage, maximum performance! 🔥"',
            mistake: '😅 Masti Sir: "Partial index ki WHERE condition query ke WHERE condition se exactly match honi chahiye taaki optimizer use pick kare!"'
          },
          englishDef: 'PostgreSQL provides advanced indexing techniques: `PARTIAL INDEXES` (indexes only rows satisfying a specific `WHERE` predicate, saving massive disk space and write overhead) and `EXPRESSION INDEXES` (indexes computed expressions such as `LOWER(email)` or date arithmetic, enabling index utilization on function calls).',
          hinglishExplain: 'Partial Index sirf un rows par banta hai jo specific condition match karti hain (e.g. `CREATE INDEX ON orders (created_at) WHERE status = \'pending\';`). Isse un-indexed rows (99% completed orders) par index ka storage aur write overhead zero ho jata hai. Expression Index kisi function ya formula ke result par banta hai (jaise `LOWER(email)`), jisse query mein `WHERE LOWER(email) = "..."` direct B-Tree index use kar sakti hai.',
          funnyExample: {
            scenario: 'The VIP Member Fast Lane:\n- 1,000,000 Regular Users (Never queried in search) 🚶\n- 5,000 Active Mentors (Queried 100 times/sec) 🌟\n- Full Index = 1,000,000 index entries (50MB RAM wasted!)\n- Partial Index `WHERE role = \'mentor\'` = Sirf 5,000 entries (200KB RAM)! Ultra-fast! ⚡',
            punchline: 'Partial indexes give you laser-targeted index efficiency!'
          },
          visualDiagram: {
            title: 'Full Table Index vs Partial Index Footprint',
            nodes: [
              'Full Table Index: 1,000,000 B-Tree entries | 45 MB Disk/RAM | Slows every INSERT',
              'Partial Index (WHERE is_active = TRUE): 50,000 B-Tree entries | 2 MB Disk/RAM | Zero write overhead on inactive rows!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Query Optimizer Matching of Partial Indexes:',
            steps: [
              'Client executes query: `SELECT * FROM users WHERE is_active = TRUE AND role = \'mentor\';`',
              'Optimizer matches the `WHERE is_active = TRUE` predicate with partial index definition',
              'Selects partial index and performs small sub-tree lookup in < 1ms'
            ]
          },
          code: `-- 1. Partial Index (Index ONLY active un-processed queue jobs)
CREATE INDEX idx_queue_pending_jobs 
ON background_jobs (scheduled_at) 
WHERE status = 'pending';

-- Query that utilizes this Partial Index:
SELECT * FROM background_jobs 
WHERE status = 'pending' AND scheduled_at <= NOW();

-- 2. Expression Index on Function Calculation
-- Enables direct B-Tree index lookup on case-insensitive email searches:
CREATE UNIQUE INDEX idx_users_lower_email 
ON users (LOWER(email));

-- Query that utilizes Expression Index:
SELECT id, username FROM users WHERE LOWER(email) = 'kabir@codemasti.com';

-- 3. Composite Partial Index
CREATE INDEX idx_orders_active_users 
ON orders (user_id, created_at DESC) 
WHERE total_amount > 5000.00;`,
          codeBreakdown: [
            { part: 'WHERE status = "pending"', label: 'Partial index predicate restricting B-Tree entries strictly to active queue records', color: '#3b82f6' },
            { part: 'ON users (LOWER(email))', label: 'Expression index storing pre-computed lowercase strings in B-Tree leaf nodes', color: '#10b981' },
            { part: 'WHERE total_amount > 5000.00', label: 'High-value customer order partial index saving 90% disk space', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Query mein `WHERE status = \'pending\'` omit kar dena (partial index cannot be used if predicate is missing)',
            '❌ `WHERE LOWER(email) = \'...\'` query par normal `(email)` index expect karna (requires expression index on `LOWER(email)`)'
          ],
          miniChallenge: 'Ek partial index create karo `users` table par jo sirf `is_verified = TRUE` users ko index kare.',
          quiz: {
            question: 'PostgreSQL mein `CREATE INDEX ON users (created_at) WHERE is_active = TRUE;` kaisa index hai?',
            options: ['Full Table Index', 'Partial Index', 'Temporary Index', 'Virtual Index'],
            answer: 'Partial Index',
            explanation: '`WHERE` clause ke sath banaye gaye index ko `Partial Index` kaha jata hai, jo sirf predicate match karne wali rows ko index karta hai.'
          },
          summary: [
            'Partial indexes disk footprint aur write overhead dramatically reduce karte hain',
            'Expression indexes function-wrapped column queries ko index-accelerated banate hain',
            'SaaS queue processing aur active-status filtering ke liye industry standard hain'
          ],
          flashcard: {
            q: 'Partial Index ka sabse bada fayda kya hai?',
            a: 'Ye sirf targeted rows ko index karta hai, jisse index size 90% chhota ho jata hai aur un-indexed rows ke INSERT/UPDATE par koi index overhead nahi lagta.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 12: QUERY PLANNING, EXPLAIN ANALYZE & MVCC
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 12: Query Planning, EXPLAIN ANALYZE, VACUUM & MVCC Internals',
      lessons: [
        {
          id: 'pg-explain-analyze-optimization',
          title: 'Reading EXPLAIN ANALYZE Plans & Cost-Based Query Optimization',
          emoji: '🔬',
          xpReward: 50,
          badgeName: 'Optimizer Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Query optimize karni hai toh EXPLAIN ANALYZE chalao! Seq Scan, Index Scan, Bitmap Heap Scan — PostgreSQL exact execution tree aur actual millisecond timings khol kar rakh deta hai! 🔬😎"',
            hint: '💡 Masti Sir: "`EXPLAIN` sirf estimate batata hai, jabki `EXPLAIN (ANALYZE, BUFFERS)` query ko physically execute karke exact disk/RAM buffer hits dikhata hai!"',
            success: '🎉 Masti Sir: "Query execution plan mastered! Slow queries diagnosed in seconds! 🔥"',
            mistake: '😅 Masti Sir: "Production par `EXPLAIN ANALYZE DELETE ...` direct mat chala dena — ANALYZE query ko actually execute karta hai!"'
          },
          englishDef: 'PostgreSQL\'s cost-based query optimizer relies on data statistics (`ANALYZE`, `pg_statistic`) to construct optimal execution trees. Diagnostic commands include `EXPLAIN` (plan estimate) and `EXPLAIN (ANALYZE, BUFFERS)` (actual runtime execution, timing, and RAM buffer hits). Scan types include `Seq Scan` (table scan), `Index Scan` (B-Tree traversal), `Index Only Scan` (covering index), and `Bitmap Heap Scan` (multi-index union/intersection).',
          hinglishExplain: 'Jab koi SQL query slow hoti hai toh hum `EXPLAIN (ANALYZE, BUFFERS) query;` chalate hain. PostgreSQL detailed execution plan dikhata hai:\n1. `Seq Scan`: Full table scan (disk se har row read ho rahi hai - slow).\n2. `Index Scan`: Direct B-Tree lookup (fast).\n3. `Bitmap Index/Heap Scan`: Multiple conditions ko match karke batch rows fetch karta hai.\n4. `Index Only Scan`: Saara data index se mil gaya (fastest).',
          funnyExample: {
            scenario: 'The Query Diagnostic Scan:\n- Slow Query: 4.2 seconds to fetch orders ⏳😫\n- Run: `EXPLAIN (ANALYZE, BUFFERS) SELECT ...;`\n- Diagnostic Output: "Seq Scan on orders (Rows: 500,000, Buffers: read=4500 from disk)" 🚨\n- Fix: Added Index -> Re-run: "Index Scan (Time: 1.2ms, Buffers: hit=3 from RAM)"! ⚡',
            punchline: 'EXPLAIN ANALYZE turns query optimization into exact science!'
          },
          visualDiagram: {
            title: 'PostgreSQL Scan Types Performance Hierarchy',
            nodes: [
              '1. Index Only Scan -> Reads strictly from Index RAM pages (O(1) / O(log N)) -> FASTEST',
              '2. Index Scan -> B-Tree lookup + Direct table page fetch',
              '3. Bitmap Index / Heap Scan -> Combines multiple indexes via bitmaps in memory',
              '4. Seq Scan (Sequential Scan) -> Reads every physical page on disk -> SLOWEST on large tables'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Planner Cost Metrics (Cost Units):',
            steps: [
              '`cost=0.00..450.00`: First number is startup cost (time to return 1st row); second number is total execution cost',
              '`rows=50`: Estimated row count vs `actual rows=48` (accurate planner statistics)',
              '`Buffers: shared hit=12 read=2`: 12 blocks found in RAM cache, 2 blocks read from physical disk'
            ]
          },
          code: `-- 1. Basic Query Plan Estimation
EXPLAIN SELECT id, username, email FROM users WHERE email = 'kabir@codemasti.com';

-- 2. Full Runtime Execution Profile with Buffer Memory Stats
EXPLAIN (ANALYZE, BUFFERS, VERBOSE)
SELECT 
  u.username,
  o.id AS order_id,
  o.total_amount
FROM learners u
INNER JOIN customer_orders o ON u.id = o.customer_id
WHERE o.order_date >= '2026-08-01' AND o.total_amount > 2000.00;

-- 3. Updating Planner Statistics for Stale Tables
ANALYZE learners;
ANALYZE customer_orders;`,
          codeBreakdown: [
            { part: 'EXPLAIN (ANALYZE, BUFFERS)', label: 'Executes statement and prints exact actual runtimes, row counts, and shared buffer RAM metrics', color: '#3b82f6' },
            { part: 'ANALYZE customer_orders;', label: 'Collects table statistics into pg_statistic catalog helping optimizer build accurate query plans', color: '#10b981' },
            { part: 'Buffers: shared hit / read', label: 'Measures I/O efficiency: shared hit = RAM cache hit, read = physical disk read', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production par modification query par `EXPLAIN ANALYZE` chala dena (e.g. `EXPLAIN ANALYZE DELETE` physically deletes rows!)',
            '❌ Stale statistics hone par query planner ke wrong decisions ko ignore karna (run `ANALYZE`)'
          ],
          miniChallenge: 'Ek multi-table JOIN query par `EXPLAIN (ANALYZE, BUFFERS)` chalao aur scan types inspect karo.',
          quiz: {
            question: 'PostgreSQL mein `EXPLAIN` aur `EXPLAIN ANALYZE` mein kya primary difference hota hai?',
            options: [
              '`EXPLAIN` sirf estimate plan dikhata hai bina query chalaye; `EXPLAIN ANALYZE` query ko physically execute karke exact timing measure karta hai',
              '`EXPLAIN ANALYZE` sirf MySQL mein chalta hai',
              '`EXPLAIN` table delete karta hai',
              'Dono bilkul same hote hain'
            ],
            answer: '`EXPLAIN` sirf estimate plan dikhata hai bina query chalaye; `EXPLAIN ANALYZE` query ko physically execute karke exact timing measure karta hai',
            explanation: '`EXPLAIN` query optimizer ka cost estimate batata hai; `EXPLAIN ANALYZE` query ko actually run karta hai aur real-world execution timings aur row counts report karta hai.'
          },
          summary: [
            'EXPLAIN ANALYZE query bottlenecks identify karne ka primary tool hai',
            'Scan types (Seq Scan, Index Scan, Bitmap Scan, Index Only Scan) I/O patterns reveal karte hain',
            'ANALYZE command cost-based optimizer ke liye accurate data distribution statistics generate karti hai'
          ],
          flashcard: {
            q: '`Bitmap Index Scan` kab use hota hai?',
            a: 'Jab query mein aisi conditions hon jo multiple indexes use kar sakti hon (jaise `WHERE city = "Delhi" AND age > 25`), PostgreSQL dono indexes ke matching pointers ko memory mein bitmap bana kar AND/OR merge karta hai.'
          }
        },
        {
          id: 'pg-mvcc-vacuum-internals',
          title: 'MVCC Internals, Dead Tuples, VACUUM & Autovacuum Tuning',
          emoji: '🧹',
          xpReward: 50,
          badgeName: 'Internals Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL mein jab aap row UPDATE karte ho, toh purani row overwrite nahi hoti — nayi row banti hai aur purani row \'Dead Tuple\' ban jaati hai! Safai karne ke liye VACUUM aata hai! 🧹😎"',
            hint: '💡 Masti Sir: "`VACUUM ANALYZE` space reclaim karta hai bina table lock kiye; `VACUUM FULL` poori table rewrite karta hai aur heavy exclusive lock leta hai!"',
            success: '🎉 Masti Sir: "MVCC internals and autovacuum tuning mastered! Zero table bloat! 🔥"',
            mistake: '😅 Masti Sir: "Production peak traffic hours mein `VACUUM FULL` mat chalana — poori table par exclusive write lock lag jayega!"'
          },
          englishDef: 'Multi-Version Concurrency Control (MVCC) enables high concurrency where readers never block writers and writers never block readers. Rows contain hidden system attributes (`xmin`, `xmax`). When rows are updated or deleted, the old versions become "Dead Tuples". `VACUUM` reclaims dead tuple storage for reuse, while `autovacuum` runs continuously in the background to prevent table bloat.',
          hinglishExplain: 'PostgreSQL MVCC (Multi-Version Concurrency Control) par chalta hai. Iska golden rule hai: "Readers writers ko block nahi karte, aur writers readers ko block nahi karte". Jab koi row UPDATE ya DELETE hoti hai, toh purani row disk par hi rehti hai aur "Dead Tuple" ban jaati hai taaki doosre active transactions use read kar sakein. `VACUUM` in dead tuples ki jagah ko clean karke naye records ke liye khali karta hai.',
          funnyExample: {
            scenario: 'The Document Versioning Analogy:\n- User edits Wikipedia article 📝\n- Instead of erasing the page: PostgreSQL creates Version 2, marks Version 1 as "Old" (Dead Tuple) 📄\n- Active readers can still finish reading Version 1 smoothly! 👓\n- Autovacuum (The Cleaner) sweeps away Version 1 once all readers are done! 🧹✨',
            punchline: 'MVCC gives every transaction a consistent snapshot without locking readers!'
          },
          visualDiagram: {
            title: 'MVCC Row Versioning & Dead Tuple Lifecycle',
            nodes: [
              '1. INSERT -> Row created with system column (xmin: 100, xmax: 0) [Active Tuple]',
              '2. UPDATE -> Old row marked dead (xmax: 105) | New row inserted (xmin: 105, xmax: 0)',
              '3. Active Transactions finish reading -> Old row is now a "Dead Tuple" (Bloat)',
              '4. Autovacuum Daemon runs -> Marks dead tuple storage space as REUSABLE for new rows!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'VACUUM vs VACUUM FULL Internals:',
            steps: [
              '`VACUUM` scans pages, clears dead tuple pointers, and updates Free Space Map (FSM); does NOT shrink OS file size (Fast, Non-blocking)',
              '`VACUUM FULL` rewrites the entire table to a brand new physical disk file, returning space to OS (Slow, takes AccessExclusiveLock)',
              'Tune `autovacuum_vacuum_scale_factor` (e.g. 0.05) on high-write tables to trigger automatic cleanup frequently'
            ]
          },
          code: `-- 1. Inspect Dead Tuples & Table Bloat in Public Schema
SELECT 
  relname AS table_name,
  n_live_tup AS live_rows,
  n_dead_tup AS dead_tuples,
  ROUND(n_dead_tup::numeric / NULLIF(n_live_tup + n_dead_tup, 0) * 100, 2) AS dead_tuple_pct,
  last_vacuum,
  last_autovacuum
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;

-- 2. Inspect Hidden MVCC System Columns (xmin, xmax)
SELECT ctid, xmin, xmax, id, username FROM users LIMIT 3;

-- 3. Run Standard Non-Blocking Vacuum with Statistics Update
VACUUM (VERBOSE, ANALYZE) users;

-- 4. Tune Table-Specific Autovacuum Parameters for High-Write Tables
ALTER TABLE background_jobs SET (
  autovacuum_vacuum_scale_factor = 0.05, -- Trigger vacuum when 5% rows are dead
  autovacuum_vacuum_cost_limit = 1000
);`,
          codeBreakdown: [
            { part: 'FROM pg_stat_user_tables', label: 'Diagnostic catalog reporting live tuples, dead tuple count, and autovacuum execution history', color: '#3b82f6' },
            { part: 'SELECT ctid, xmin, xmax ...', label: 'Inspects internal tuple physical pointers (ctid) and transaction visibility boundaries (xmin/xmax)', color: '#10b981' },
            { part: 'autovacuum_vacuum_scale_factor = 0.05', label: 'Triggers automated background vacuum when dead tuples reach 5% threshold preventing table bloat', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Production high-traffic databases par Autovacuum disable kar dena (causes catastrophic table bloat and performance collapse)',
            '❌ Long-running transactions ko ghanton khula chhod dena (blocks vacuum from cleaning dead tuples)'
          ],
          miniChallenge: '`pg_stat_user_tables` query chala kar database mein dead tuples count aur last autovacuum time check karo.',
          quiz: {
            question: 'PostgreSQL mein UPDATE operation hone par purani row ka kya hota hai?',
            options: [
              'Purani row disk par turant overwrite ho jaati hai',
              'Purani row "Dead Tuple" ban jaati hai jo MVCC snapshot visibility provide karti hai aur baad mein VACUUM se clean hoti hai',
              'Database crash ho jata hai',
              'Purani row backup server par chali jaati hai'
            ],
            answer: 'Purani row "Dead Tuple" ban jaati hai jo MVCC snapshot visibility provide karti hai aur baad mein VACUUM se clean hoti hai',
            explanation: 'MVCC model mein UPDATE purani row ko delete mark (xmax set) karta hai aur nayi row insert karta hai. Purani row dead tuple ban jaati hai jisse concurrent readers uninhibited read kar sakein.'
          },
          summary: [
            'MVCC non-blocking concurrent reads aur writes provide karta hai',
            'Dead tuples updated/deleted row versions hain jo storage bloat create kar sakti hain',
            'Autovacuum continuously background mein dead space reclaim karta hai'
          ],
          flashcard: {
            q: 'Table Bloat kya hota hai?',
            a: 'Jab table mein bohot zyada dead tuples jama ho jayein aur VACUUM unhe clean na kare, jisse table aur indexes ka size unncessarily bada ho jata hai aur queries slow ho jaati hain.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 13: TRANSACTIONS, LOCKING, DEADLOCKS & UPSERT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 13: Transactions, ACID, Locking, Deadlocks & UPSERT',
      lessons: [
        {
          id: 'pg-transactions-acid-isolation',
          title: 'Transactions, ACID Guarantees & PostgreSQL Isolation Levels',
          emoji: '🏦',
          xpReward: 45,
          badgeName: 'Transaction Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Bank transaction mein ya toh paisa safe transfer hoga ya rollback — half-cooked operations database mein strictly prohibited hain! ACID guarantees ka kamaal dekho! 🏦😎"',
            hint: '💡 Masti Sir: "PostgreSQL mein `READ COMMITTED` default hota hai; `SERIALIZABLE` isolation level SSI (Serializable Snapshot Isolation) use karta hai bina heavy locks ke!"',
            success: '🎉 Masti Sir: "Financial-grade transaction isolation levels mastered! 🔥"',
            mistake: '😅 Masti Sir: "`SERIALIZABLE` mode mein serialization failure (Error 40001) aane par application ko transaction automatically retry karni chahiye!"'
          },
          englishDef: 'PostgreSQL transactions (`BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`) guarantee full ACID compliance. Isolation levels include `READ COMMITTED` (default, evaluates new snapshot per statement), `REPEATABLE READ` (maintains snapshot from transaction start, preventing non-repeatable reads and phantom reads), and `SERIALIZABLE` (uses true Serializable Snapshot Isolation - SSI - to eliminate all concurrency anomalies).',
          hinglishExplain: 'Transactions multiple SQL queries ko ek atomic bundle mein bandhti hain. PostgreSQL 3 isolation levels provide karta hai:\n1. `READ COMMITTED` (Default): Har query statement ke shuru mein committed data ka snapshot leti hai.\n2. `REPEATABLE READ`: Poori transaction ke dauran pehli query ka snapshot maintain rehta hai.\n3. `SERIALIZABLE`: True mathematical serialization guarantee deta hai bina full table locks ke.',
          funnyExample: {
            scenario: 'The Atomic Wallet Transfer:\n- Step 1: User A wallet balance: ₹5,000 -> Deduct ₹2,000 💸\n- Step 2: System Crash! 💥\n- PostgreSQL Transaction: Automatically triggers `ROLLBACK` -> User A balance restored to ₹5,000! Zero money lost! 🏦🛡️',
            punchline: 'Transactions make sure your business logic is all-or-nothing!'
          },
          visualDiagram: {
            title: 'PostgreSQL Isolation Levels & Anomalies Prevented',
            nodes: [
              'READ COMMITTED (Default) -> Prevents Dirty Reads | Allows Non-Repeatable Reads',
              'REPEATABLE READ -> Prevents Dirty Reads, Non-Repeatable Reads & Phantom Rows via MVCC',
              'SERIALIZABLE (SSI) -> Prevents All Anomalies including Serialization Write Skew'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Serializable Snapshot Isolation (SSI) Engine:',
            steps: [
              'Tracks read-write conflicts dynamically using SIREAD locks in memory (locks do not block queries)',
              'If a dangerous cycle of dependencies is detected (Write Skew anomaly), the engine aborts one transaction',
              'Throws PostgreSQL Error `40001: could not serialize access due to concurrent update`'
            ]
          },
          code: `-- ── 1. FINANCIAL TRANSFER WITH SAVEPOINTS ──
BEGIN;

-- Deduct from Sender
UPDATE user_accounts 
SET balance = balance - 1500.00 
WHERE id = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'::uuid;

SAVEPOINT transfer_initiated;

-- Credit to Receiver
UPDATE user_accounts 
SET balance = balance + 1500.00 
WHERE id = 'b1ffcd88-8b0a-4ef7-aa5c-5aa8ac270b22'::uuid;

-- If secondary notification fails, we can rollback to savepoint:
-- ROLLBACK TO SAVEPOINT transfer_initiated;

COMMIT;

-- 2. Setting Serializable Isolation Level
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
-- Business logic queries here...
COMMIT;`,
          codeBreakdown: [
            { part: 'BEGIN; ... COMMIT;', label: 'Defines atomic transaction boundary ensuring all operations succeed or rollback together', color: '#3b82f6' },
            { part: 'SAVEPOINT transfer_initiated;', label: 'Sets internal intermediate recovery checkpoint for fine-grained partial rollbacks', color: '#10b981' },
            { part: 'ISOLATION LEVEL SERIALIZABLE', label: 'Highest isolation tier preventing all concurrent race condition anomalies using SSI tracking', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backend code mein transaction retry logic na likhna jab `SERIALIZABLE` mode use kiya ho',
            '❌ Long-running transactions ko open chhod dena (keeps old MVCC snapshots alive and prevents VACUUM)'
          ],
          miniChallenge: 'Ek transaction likho with `SAVEPOINT` jo error simulate hone par savepoint tak rollback kare.',
          quiz: {
            question: 'PostgreSQL mein `SERIALIZABLE` isolation level concurrency anomalies ko kaise prevent karta hai?',
            options: [
              'Poori database ko lock karke',
              'Serializable Snapshot Isolation (SSI) use karke jo read-write dependency graph track karta hai',
              'Queries ko cancel karke',
              'Single thread mein run karke'
            ],
            answer: 'Serializable Snapshot Isolation (SSI) use karke jo read-write dependency graph track karta hai',
            explanation: 'PostgreSQL SSI (Serializable Snapshot Isolation) use karta hai jo memory mein read-write dependency cycles track karta hai bina heavy blocking locks lagaye.'
          },
          summary: [
            'BEGIN, COMMIT aur ROLLBACK atomic transaction boundaries maintain karte hain',
            'SAVEPOINT transaction ke andar partial rollback checkpoints create karta hai',
            'SERIALIZABLE isolation level highest data consistency guarantee provide karta hai'
          ],
          flashcard: {
            q: 'Error `40001: could not serialize access` aane par backend app ko kya karna chahiye?',
            a: 'Application ko transaction ko exponential backoff ke sath automatically dobara **retry** karna chahiye.'
          }
        },
        {
          id: 'pg-locking-upsert-on-conflict',
          title: 'Row Locking (FOR UPDATE, SKIP LOCKED) & UPSERT (ON CONFLICT)',
          emoji: '🔒',
          xpReward: 45,
          badgeName: 'Concurrency Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Job queue ya background worker banana hai? `SELECT ... FOR UPDATE SKIP LOCKED` se 50 workers ek sath bina clash hue parallel jobs process kar sakte hain! Aur `ON CONFLICT DO UPDATE` se UPSERT 1 line mein! 🚀🔒"',
            hint: '💡 Masti Sir: "`ON CONFLICT (email) DO UPDATE SET ...` se agar record already exist karega toh insert ki jagah automatically update ho jayega!"',
            success: '🎉 Masti Sir: "High-concurrency locking and UPSERT patterns mastered! 🔥"',
            mistake: '😅 Masti Sir: "`ON CONFLICT (col)` mein wahi column hona chahiye jispar UNIQUE ya PRIMARY KEY constraint laga ho!"'
          },
          englishDef: 'PostgreSQL provides explicit locking primitives: `FOR UPDATE` (exclusive row lock), `FOR SHARE` (shared lock), `NOWAIT` (fails immediately if locked), and `SKIP LOCKED` (skips locked rows, enabling high-throughput parallel background task queues). `INSERT ... ON CONFLICT (target) DO UPDATE / DO NOTHING` provides native atomic UPSERT capabilities.',
          hinglishExplain: 'High-concurrency systems mein locking aur UPSERT do sabse important tools hain:\n1. `ON CONFLICT DO UPDATE` (UPSERT): Agar record exist nahi karta toh insert hoga, agar unique key match ho gayi toh existing row update ho jayegi (e.g. user registration ya inventory sync).\n2. `SKIP LOCKED`: Jab multiple background workers queue se jobs uthate hain, toh jo row pehle worker ne lock kar li hai, doosra worker use bina wait kiye skip karke agli free job utha leta hai.',
          funnyExample: {
            scenario: 'The Parallel Task Queue:\n- 10 Workers trying to process 1,000 pending emails 📧\n- Without SKIP LOCKED: Sabhi 10 workers pehli email par lad padte hain (Lock Contention! 😫)\n- With `FOR UPDATE SKIP LOCKED`: Worker 1 picks Email 1, Worker 2 skips Email 1 and picks Email 2, Worker 3 picks Email 3 in parallel! ⚡🚀',
            punchline: 'SKIP LOCKED enables rock-solid parallel background queues in PostgreSQL!'
          },
          visualDiagram: {
            title: 'High-Throughput Queue Processing with SKIP LOCKED',
            nodes: [
              'Pending Task Queue Table (status = \'pending\')',
              'Worker 1 -> SELECT ... FOR UPDATE SKIP LOCKED LIMIT 1 -> Locks Task #1',
              'Worker 2 -> SELECT ... FOR UPDATE SKIP LOCKED LIMIT 1 -> Skips Task #1 -> Locks Task #2',
              'Zero lock contention, maximum multi-core CPU throughput!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Atomic UPSERT Execution:',
            steps: [
              'PostgreSQL attempts standard row insertion into table heap',
              'If UNIQUE index conflict occurs on the target constraint, it switches execution path',
              '`DO UPDATE SET` applies updates directly to existing tuple atomically without race condition'
            ]
          },
          code: `-- 1. ATOMIC UPSERT (INSERT or UPDATE on duplicate)
INSERT INTO product_inventory (sku, product_name, stock_quantity, updated_at)
VALUES ('MAC-M3-16', 'MacBook Air M3', 5, NOW())
ON CONFLICT (sku) 
DO UPDATE SET 
  stock_quantity = product_inventory.stock_quantity + EXCLUDED.stock_quantity,
  updated_at = EXCLUDED.updated_at
RETURNING id, sku, stock_quantity;

-- 2. HIGH-CONCURRENCY TASK QUEUE WITH SKIP LOCKED
-- Worker claims next available job without blocking other workers:
BEGIN;

SELECT id, payload, retry_count
FROM task_queue
WHERE status = 'pending' AND scheduled_at <= NOW()
ORDER BY priority DESC, scheduled_at ASC
LIMIT 1
FOR UPDATE SKIP LOCKED;

-- Mark claimed task as processing:
UPDATE task_queue 
SET status = 'processing', locked_at = NOW() 
WHERE id = 101;

COMMIT;`,
          codeBreakdown: [
            { part: 'ON CONFLICT (sku) DO UPDATE SET ...', label: 'Atomic UPSERT handler executing update when unique constraint violation is encountered', color: '#3b82f6' },
            { part: 'EXCLUDED.stock_quantity', label: 'Pseudo-record holding proposed values that were supplied in the INSERT VALUES statement', color: '#10b981' },
            { part: 'FOR UPDATE SKIP LOCKED', label: 'Acquires exclusive lock while silently bypassing rows locked by other concurrent worker transactions', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ UPSERT ke liye pehle `SELECT` aur fir `INSERT/UPDATE` karna in application code (causes race conditions; use `ON CONFLICT`)',
            '❌ `ON CONFLICT` target column par UNIQUE index na hona (causes Error 4222)'
          ],
          miniChallenge: 'Ek UPSERT query likho jo user registration par agar email already exist kare toh `last_login = NOW()` update kare.',
          quiz: {
            question: 'PostgreSQL mein high-concurrency background job queues build karte waqt lock contention prevent karne ke liye kaunsa locking modifier use hota hai?',
            options: ['NOWAIT', 'SKIP LOCKED', 'LOCK TABLE', 'WAIT FOR'],
            answer: 'SKIP LOCKED',
            explanation: '`SKIP LOCKED` doosre concurrent transactions dwara locked rows ko silently bypass kar deta hai, jisse multiple worker processes bina ek doosre ko block kiye parallel jobs claim kar sakte hain.'
          },
          summary: [
            'ON CONFLICT DO UPDATE atomic race-condition-free UPSERT provide karta hai',
            'EXCLUDED pseudo-record incoming proposed INSERT values access karta hai',
            'FOR UPDATE SKIP LOCKED enterprise message queues aur task workers power karta hai'
          ],
          flashcard: {
            q: 'UPSERT query mein `EXCLUDED` keyword ka kya role hota hai?',
            a: '`EXCLUDED` us data tuple ko represent karta hai jo aapne `INSERT VALUES(...)` mein bheja tha, jisse aap `DO UPDATE SET col = EXCLUDED.col` karke naye data se update kar sakein.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 14: FULL-TEXT SEARCH, RANGE TYPES & EXTENSIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 14: Full-Text Search, Range Types, PostGIS & Extensions',
      lessons: [
        {
          id: 'pg-fulltext-search-tsvector',
          title: 'Full-Text Search with tsvector, tsquery & GIN Indexes',
          emoji: '🔎',
          xpReward: 45,
          badgeName: 'Search Engineer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Elasticsearch install karne ki zaroorat nahi hai jab tak dataset petabytes ka na ho! PostgreSQL ka native Full-Text Search (`tsvector` + `tsquery`) stem words aur rankings ke sath Google-speed search deta hai! 🔎😎"',
            hint: '💡 Masti Sir: "`to_tsvector(\'english\', text)` words ko stem words mein todta hai (jaise \'running\', \'runs\', \'ran\' sab \'run\' ban jaate hain)!"',
            success: '🎉 Masti Sir: "Native full-text search engine successfully built in PostgreSQL! 🔥"',
            mistake: '😅 Masti Sir: "Full-text search queries par GIN index lagana zaroori hai varna large tables par performance degrade ho jayegi!"'
          },
          englishDef: 'PostgreSQL provides enterprise-grade Full-Text Search via specialized data types: `tsvector` (sorted list of distinct normalized lexemes/word stems) and `tsquery` (search tokens with boolean operators `&` AND, `|` OR, `!` NOT, `<->` phrase search). Accelerated by GIN indexes, `ts_rank()` computes relevance ranking scores.',
          hinglishExplain: 'PostgreSQL mein native Search Engine built-in hota hai. `to_tsvector` text ko clean karke word stems nikaalta hai (e.g. "developer", "developing", "develops" sabko standard word `develop` bana deta hai). `to_tsquery` user ke search keywords ko match karta hai (`@@` operator). GIN index lagane par millions of articles mein se instant relevance-ranked results milte hain.',
          funnyExample: {
            scenario: 'The Stemming Search Magic:\n- Article Content: "Kabir is developing advanced PostgreSQL applications" 📝\n- User Searches: `develop & postgres` 🔍\n- PostgreSQL Search: "developing" -> "develop", "PostgreSQL" -> "postgr" -> MATCH! Relevance Score: 0.85! 🎯✨',
            punchline: 'PostgreSQL Full-Text Search understands grammar and word stems natively!'
          },
          visualDiagram: {
            title: 'PostgreSQL Full-Text Search Engine Architecture',
            nodes: [
              'Raw Document: "Advanced PostgreSQL Query Optimization"',
              'to_tsvector(\'english\', ...) -> \'advanc\':1 \'optim\':4 \'postgr\':2 \'queri\':3',
              'to_tsquery(\'english\', \'postgres & optimize\') -> \'postgr\' & \'optim\'',
              'Match Operator (@@) via GIN Index -> Computes ts_rank() Relevance Score!'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Lexeme Normalization & Ranking Algorithm:',
            steps: [
              'Eliminates stop words ("the", "is", "at") using configured English dictionary',
              'Applies Porter Stemming algorithm to reduce words to root lexemes',
              '`ts_rank()` calculates frequency of matching lexemes weighted by document proximity'
            ]
          },
          code: `-- 1. Table with Generated Search Vector Column
CREATE TABLE course_articles (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  -- Stored tsvector column combining title (weight A) and content (weight B)
  search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(content, '')), 'B')
  ) STORED
);

-- 2. Create GIN Index for Instant Full-Text Searches
CREATE INDEX idx_articles_search_vector ON course_articles USING gin (search_vector);

-- 3. Insert Sample Content
INSERT INTO course_articles (title, content)
VALUES 
  ('PostgreSQL Query Optimization', 'Learn B-Tree indexes, EXPLAIN ANALYZE, and vacuum tuning for fast queries.'),
  ('React Frontend Architecture', 'Build modern interactive UIs using React hooks, components, and state management.');

-- 4. Full-Text Search Query with Relevance Ranking
SELECT 
  id,
  title,
  ts_rank(search_vector, query) AS rank_score
FROM course_articles, 
     to_tsquery('english', 'postgres & index') query
WHERE search_vector @@ query
ORDER BY rank_score DESC;`,
          codeBreakdown: [
            { part: "setweight(to_tsvector('english', ...), 'A')", label: 'Assigns higher relevance priority weight (A) to title matches over body content matches (B)', color: '#3b82f6' },
            { part: 'USING gin (search_vector)', label: 'Generalized Inverted Index accelerating boolean full-text vector lookups', color: '#10b981' },
            { part: 'search_vector @@ query', label: 'Full-text search match operator testing vector against search query tokens', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Plain `LIKE \'%word%\'` use karna for article body searches instead of `tsvector @@ tsquery`',
            '❌ `search_vector` par GIN index banana bhool jana'
          ],
          miniChallenge: 'Ek Full-Text search query likho using `to_tsquery(\'english\', \'react | postgres\')` jo ranking score return kare.',
          quiz: {
            question: 'PostgreSQL mein Full-Text Search mein search vector aur search query ke beech match check karne ke liye kaunsa operator use hota hai?',
            options: ['@@', '==', 'LIKE', '~='],
            answer: '@@',
            explanation: '`@@` (match operator) `tsvector` aur `tsquery` ke beech boolean full-text match evaluate karta hai.'
          },
          summary: [
            'tsvector word stems aur positions store karta hai',
            'to_tsquery boolean search expressions (&, |, !) construct karta hai',
            'GIN indexes full-text search queries ko lightning-fast banate hain'
          ],
          flashcard: {
            q: 'Full-Text Search mein `setweight()` ka kya use hota hai?',
            a: '`setweight(vector, \'A\')` se aap specific fields ko higher search relevance priority de sakte hain (jaise Title ko weight \'A\' aur Body text ko weight \'D\').'
          }
        },
        {
          id: 'pg-extensions-pgtrgm-postgis',
          title: 'PostgreSQL Extensions Ecosystem (pg_trgm Fuzzy Search, pgcrypto & PostGIS)',
          emoji: '🧩',
          xpReward: 45,
          badgeName: 'Extension Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "PostgreSQL ki sabse badi taakat iska Extension System hai! `pg_trgm` se typo-tolerant fuzzy search banao, `pgcrypto` se password hash karo, aur `PostGIS` se Zomato/Uber jaisa location-based GPS mapping system banao! 🗺️🧩😎"',
            hint: '💡 Masti Sir: "`CREATE EXTENSION IF NOT EXISTS pg_trgm;` se aap `%` wildcards aur spelling typos ke bawajood instant similarity search kar sakte ho!"',
            success: '🎉 Masti Sir: "PostgreSQL extensions ecosystem successfully mastered! 🔥"',
            mistake: '😅 Masti Sir: "PostGIS use karte waqt spatial indexes (`USING gist`) lagana zaroori hai location queries ke liye!"'
          },
          englishDef: 'PostgreSQL\'s extensible architecture allows installing modular plugins via `CREATE EXTENSION`. Key extensions include `pg_trgm` (trigram matching for fuzzy typo-tolerant string search and similarity scoring), `pgcrypto` (cryptographic hashing and encryption), `uuid-ossp`, and `PostGIS` (the world\'s leading spatial database extension for geographic GIS coordinates, maps, and distance calculations).',
          hinglishExplain: 'PostgreSQL extensions database ke super-plugins hain. `CREATE EXTENSION` command se aap database ke andar naye data types aur functions inject kar sakte ho:\n1. `pg_trgm`: Agar user search mein spelling galat likh de (e.g. "postgreql" instead of "postgresql"), toh Trigram similarity se correct result dhoondh nikaalta hai.\n2. `pgcrypto`: Passwords ko secure bcrypt/sha512 se encrypt karta hai.\n3. `PostGIS`: GPS coordinates (Latitude/Longitude), distance calculations aur nearby store search enable karta hai.',
          funnyExample: {
            scenario: 'The Typo-Tolerant Search:\n- User with typo types: "Pstgresql Mstrclas" 🤦‍♂️\n- Standard SQL: 0 results found! ❌\n- With `pg_trgm` Trigram Similarity (`similarity(title, input) > 0.3`): "Did you mean: PostgreSQL Masterclass?" 🎯✨ (98% similarity match!)',
            punchline: 'Extensions supercharge PostgreSQL beyond traditional database limits!'
          },
          visualDiagram: {
            title: 'Top Essential PostgreSQL Extensions',
            nodes: [
              'pg_trgm -> Trigram fuzzy matching, typo tolerance & fast ILIKE indexing',
              'pgcrypto -> Cryptographic hashing (crypt, gen_salt) & encryption',
              'PostGIS -> Spatial geographic coordinates (POINT, POLYGON), distance (ST_Distance), GPS mapping',
              'uuid-ossp -> Legacy and v1/v5 UUID generation tools'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Trigram (pg_trgm) Matching Works:',
            steps: [
              'Splits words into 3-character slices (Trigrams): "word" -> ["  w", " wo", "wor", "ord", "rd "]',
              'Computes similarity score ($0.0$ to $1.0$) based on shared trigrams ratio',
              'Supports GIN and GiST index acceleration for regular expression and wildcard searches'
            ]
          },
          code: `-- 1. Enable Extensions
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. Typo-Tolerant Fuzzy Search using Trigram Similarity
SELECT 
  title,
  similarity(title, 'postgreql') AS similarity_score
FROM courses
WHERE similarity(title, 'postgreql') > 0.3
ORDER BY similarity_score DESC;

-- 3. Fast Trigram GIN Index for Wildcard Searches (%term%)
CREATE INDEX idx_courses_title_trgm ON courses USING gin (title gin_trgm_ops);

-- Now 'ILIKE %term%' uses GIN index instead of full table scan!
EXPLAIN SELECT * FROM courses WHERE title ILIKE '%optim%';

-- 4. Secure Password Hashing with pgcrypto (bcrypt)
SELECT crypt('MySecureP@ss2026', gen_salt('bf', 10)) AS password_hash;`,
          codeBreakdown: [
            { part: 'CREATE EXTENSION IF NOT EXISTS pg_trgm;', label: 'Installs trigram string matching module directly into active database schema', color: '#3b82f6' },
            { part: 'USING gin (title gin_trgm_ops)', label: 'Trigram operator class enabling index-accelerated leading wildcard (ILIKE %term%) lookups', color: '#10b981' },
            { part: "crypt('password', gen_salt('bf', 10))", label: 'Cryptographic bcrypt blowfish password hashing directly inside database engine', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `ILIKE %term%` queries par standard B-Tree index expect karna (use `USING gin (col gin_trgm_ops)`)',
            '❌ Extensions ko template database mein enable kiye bina naye databases mein miss karna'
          ],
          miniChallenge: '`pg_trgm` extension enable karo aur `similarity("postgresql", "postgreql")` score check karo.',
          quiz: {
            question: 'PostgreSQL mein spelling typos ke bawajood fuzzy similarity search aur fast `ILIKE %term%` indexing enable karne ke liye kaunsi extension use hoti hai?',
            options: ['pg_trgm', 'pgcrypto', 'uuid-ossp', 'hstore'],
            answer: 'pg_trgm',
            explanation: '`pg_trgm` (trigram extension) 3-character slices use karke fuzzy string similarity score aur index-accelerated wildcard searching enable karti hai.'
          },
          summary: [
            'Extensions PostgreSQL ko specialized capabilities ke sath extend karte hain',
            'pg_trgm typo-tolerant fuzzy search aur wildcard GIN indexing provide karta hai',
            'PostGIS enterprise spatial mapping aur geographic GIS queries power karta hai'
          ],
          flashcard: {
            q: 'PostGIS extension kahan use hoti hai?',
            a: 'PostGIS GPS coordinates (Latitude/Longitude), geographic maps, delivery radius zones aur nearest store queries (`ST_DWithin`, `ST_Distance`) ke liye use hoti hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 15: PARTITIONING, SECURITY, RLS & ADMINISTRATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 15: Partitioning, Security, Row Level Security (RLS) & Administration',
      lessons: [
        {
          id: 'pg-roles-privileges-rls',
          title: 'Roles, Privileges & Multi-Tenant Row Level Security (RLS)',
          emoji: '🔒',
          xpReward: 50,
          badgeName: 'Security Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Multi-Tenant SaaS application mein Company A ka employee Company B ka data kabhi na dekh sake — iske liye code mein WHERE tenant_id likhne par bharosa mat karo! Database par Row Level Security (RLS) enable karo! Zero data leaks! 🔒🛡️😎"',
            hint: '💡 Masti Sir: "`ALTER TABLE documents ENABLE ROW LEVEL SECURITY;` ke baad `CREATE POLICY` lagao — database automatically har query par invisible security filter laga deta hai!"',
            success: '🎉 Masti Sir: "Bank-grade Row Level Security and RBAC roles successfully implemented! 🏆"',
            mistake: '😅 Masti Sir: "Table owner aur superuser by default RLS policies ko bypass kar dete hain — test karte waqt standard application role se login karein!"'
          },
          englishDef: 'PostgreSQL provides a unified Role-Based Access Control (RBAC) model via `CREATE ROLE` (`LOGIN`, `NOLOGIN`, `SUPERUSER`, `PASSWORD`) and granular `GRANT / REVOKE` permissions. For multi-tenant SaaS applications, PostgreSQL offers `Row Level Security (RLS)` via `ALTER TABLE ... ENABLE ROW LEVEL SECURITY` and `CREATE POLICY`, filtering rows dynamically based on the current session user or tenant context.',
          hinglishExplain: 'PostgreSQL security do levels par kaam karti hai:\n1. Roles & Privileges: Kaunsa user kaunsi table padh ya likh sakta hai (`GRANT SELECT, INSERT ON ... TO app_user`).\n2. Row Level Security (RLS): Table ke andar kaunsi specific rows user ko dikhni chahiye. Multi-tenant SaaS mein RLS policy lagane ke baad agar backend developer `WHERE tenant_id = ...` lagana bhool bhi jaye, tab bhi PostgreSQL database level par doosri company ka data kabhi leak nahi hone deta.',
          funnyExample: {
            scenario: 'The Multi-Tenant SaaS Nightmare:\n- Without RLS: Junior Dev forgets `WHERE company_id = 1` in code -> Company A sees Company B\'s confidential financial records! 😱💥\n- With PostgreSQL RLS: Database automatically appends tenant check on every single query internally -> 100% Data isolation guaranteed! 🛡️✨',
            punchline: 'Row Level Security guarantees zero data leaks in multi-tenant applications!'
          },
          visualDiagram: {
            title: 'Row Level Security (RLS) Filtering Pipeline',
            nodes: [
              'Application executes: SELECT * FROM documents; (No WHERE clause!)',
              'PostgreSQL RLS Engine: Intercepts query & checks active policy',
              'Applies Policy: USING (tenant_id = current_setting(\'app.current_tenant_id\')::uuid)',
              'Output: Returns STRICTLY the rows belonging to the active tenant!'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How RLS Policies Evaluate Internally:',
            steps: [
              'The query rewrite engine seamlessly injects the policy boolean condition into the Query Abstract Syntax Tree (AST)',
              'Index scans on the tenant_id column are utilized directly',
              'Policies apply independently to SELECT (`USING`), INSERT (`WITH CHECK`), UPDATE, and DELETE'
            ]
          },
          code: `-- 1. Create Dedicated Application Role
CREATE ROLE codemasti_app WITH LOGIN PASSWORD 'SecureP@ss2026!';
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO codemasti_app;

-- 2. Multi-Tenant SaaS Table with Row Level Security
CREATE TABLE tenant_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 3. Enable RLS on Table
ALTER TABLE tenant_documents ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policy based on Session Tenant Variable
CREATE POLICY tenant_isolation_policy ON tenant_documents
  FOR ALL
  USING (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid)
  WITH CHECK (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

-- ── APPLICATION BACKEND WORKFLOW ──
-- In your Express / FastAPI middleware:
-- SET LOCAL app.current_tenant_id = '550e8400-e29b-41d4-a716-446655440000';
-- SELECT * FROM tenant_documents; -- Automatically returns ONLY Tenant 550e rows!`,
          codeBreakdown: [
            { part: 'ALTER TABLE tenant_documents ENABLE ROW LEVEL SECURITY;', label: 'Enforces kernel-level row filtering on all incoming non-superuser queries', color: '#3b82f6' },
            { part: 'CREATE POLICY tenant_isolation_policy ... USING (...)', label: 'Dynamic security predicate evaluated on every read to filter visible row records', color: '#10b981' },
            { part: 'WITH CHECK (...)', label: 'Security predicate evaluated on INSERT/UPDATE preventing users from injecting data for other tenants', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ RLS policies ko Superuser account se test karna (Superusers bypass RLS by default; use `SET ROLE` to test)',
            '❌ `WITH CHECK` omit kar dena (allows tenants to insert records assigned to other tenant IDs)'
          ],
          miniChallenge: 'Ek table par RLS enable karo aur `CREATE POLICY` banao jo users ko sirf unka apna data dikhaye (`user_id = current_user_id`).',
          quiz: {
            question: 'PostgreSQL mein Multi-Tenant SaaS systems mein database level par row isolation enforce karne ke liye kaunsa feature use hota hai?',
            options: ['Row Level Security (RLS)', 'Foreign Key', 'JSONB', 'VACUUM FULL'],
            answer: 'Row Level Security (RLS)',
            explanation: '`Row Level Security (RLS)` policies har SQL query par database engine layer par automatic security filters inject karti hain, preventing cross-tenant data leaks.'
          },
          summary: [
            'PostgreSQL RBAC roles aur granular object permissions provide karta hai',
            'Row Level Security (RLS) multi-tenant SaaS architecture ke liye gold standard hai',
            'USING read security define karta hai aur WITH CHECK insert/update integrity protect karta hai'
          ],
          flashcard: {
            q: 'RLS policy mein `USING` aur `WITH CHECK` mein kya difference hai?',
            a: '`USING` clause decide karta hai ki kaunsi rows `SELECT`, `UPDATE` aur `DELETE` mein visible hongi; `WITH CHECK` clause decide karta hai ki naya data `INSERT` ya `UPDATE` hote waqt security rule satisfy karta hai ya nahi.'
          }
        },
        {
          id: 'pg-backup-wal-replication-pgbouncer',
          title: 'WAL Archiving, Backup & Restore, Streaming Replication & PgBouncer',
          emoji: '📦',
          xpReward: 50,
          badgeName: 'DevOps Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Database backup lena ek cheez hai, par Point-In-Time Recovery (PITR) aur Connection Pooling (PgBouncer) lagana real enterprise engineering hai! High availability architecture master karenge! 🚀📦"',
            hint: '💡 Masti Sir: "PgBouncer 10,000 incoming app connections ko 50 active PostgreSQL backend connections mein pool karke server RAM crash hone se bacha leta hai!"',
            success: '🎉 Masti Sir: "Enterprise High Availability, PITR backups and PgBouncer architecture completed! 🏆"',
            mistake: '😅 Masti Sir: "Replication lag monitor karna zaroori hai taaki standby replica par purana data na dikhe!"'
          },
          englishDef: 'Production PostgreSQL deployment requires comprehensive Backup strategies (`pg_dump` logical backup, `pg_basebackup` physical snapshot, Point-In-Time Recovery via WAL archiving), Streaming Replication (Primary-Standby architecture for high availability and read scaling), and Connection Pooling via PgBouncer to manage thousands of concurrent client connections.',
          hinglishExplain: 'Production systems mein data safety aur scaling ke 3 pillars hote hain:\n1. Backups & PITR: `pg_dump` se logical backup banta hai, aur WAL archiving se server crash hone par exact second tak data restore (Point-in-Time Recovery) ho sakta hai.\n2. Streaming Replication: Ek Primary database hota hai (writes ke liye) aur multiple Standby replicas hote hain (reads distribute karne ke liye).\n3. PgBouncer: Connection pooler jo hazaron incoming requests ko chote se database connection pool se serve karta hai bina server memory exhaust kiye.',
          funnyExample: {
            scenario: 'The Concert Ticket Gate Analogy (PgBouncer):\n- Without PgBouncer: 10,000 fans rush through a tiny door at once -> Stampede and server crash! 🏟️💥\n- With PgBouncer: 5 Revolving turnstile gates admit fans smoothly in rapid queue -> 10,000 fans served without a single hitch! 🎟️⚡',
            punchline: 'PgBouncer protects PostgreSQL from connection storms!'
          },
          visualDiagram: {
            title: 'Enterprise PostgreSQL Production Architecture',
            nodes: [
              'Clients (Web APIs, Microservices - 5,000 Connections)',
              'PgBouncer Connection Pooler (Transaction Mode - 50 Pooled Sockets)',
              'PostgreSQL Primary (Port 5432 - Handles all WRITES & WAL Archiving)',
              'WAL Streaming Stream -> Read Replicas (Handles all Read Analytics)',
              'Continuous WAL Archive -> Amazon S3 (Point-In-Time Recovery PITR)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'PgBouncer Pooling Modes:',
            steps: [
              '`Session Pooling`: Connection assigned to client until client disconnects',
              '`Transaction Pooling`: Connection assigned only for duration of single transaction (Most popular for web APIs)',
              '`Statement Pooling`: Connection released after every single SQL statement (No multi-statement transactions)'
            ]
          },
          code: `-- ── 1. LOGICAL BACKUP & RESTORE VIA TERMINAL ──
-- Logical dump of specific database (compressed custom format):
-- pg_dump -h localhost -U postgres -Fc -d codemasti_db > codemasti_backup_2026.dump

-- Restore dump with parallel worker threads:
-- pg_restore -h localhost -U postgres -d codemasti_db -j 4 codemasti_backup_2026.dump

-- ── 2. REPLICATION STATUS MONITORING QUERY ──
SELECT 
  client_addr, 
  application_name, 
  state, 
  sync_state, 
  replay_lsn,
  pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS replication_lag_bytes
FROM pg_stat_replication;`,
          codeBreakdown: [
            { part: 'pg_dump -Fc ...', label: 'Exports database in PostgreSQL custom compressed binary format supporting selective and parallel restores', color: '#3b82f6' },
            { part: 'pg_restore -j 4 ...', label: 'Restores schema and data utilizing 4 parallel CPU worker threads for maximum speed', color: '#10b981' },
            { part: 'pg_wal_lsn_diff(...)', label: 'Calculates exact byte difference between primary WAL write position and standby replica replay position', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Plain text format mein `pg_dump` lena instead of `-Fc` custom binary format',
            '❌ Transaction pooling mode mein prepared statements ya session variables use karte waqt PgBouncer configuration tune na karna'
          ],
          miniChallenge: '`pg_stat_replication` query chala kar standby replication stream aur replication lag check karo.',
          quiz: {
            question: 'PostgreSQL mein hazaron concurrent web connections ko manage karne aur connection starvation prevent karne ke liye kaunsa lightweight connection pooler use hota hai?',
            options: ['PgBouncer', 'pg_dump', 'Postmaster', 'WAL Writer'],
            answer: 'PgBouncer',
            explanation: '`PgBouncer` industry-standard lightweight connection pooler hai jo connection overhead minimize karta hai aur high concurrency allow karta hai.'
          },
          summary: [
            'pg_dump custom format (-Fc) flexible aur parallel restore support karta hai',
            'WAL archiving disaster recovery aur Point-In-Time Recovery (PITR) enable karta hai',
            'PgBouncer connection pooling microservices scale karne ke liye mandatory component hai'
          ],
          flashcard: {
            q: 'PgBouncer mein `Transaction Pooling` mode ka kya fayda hota hai?',
            a: 'Ye server connection ko sirf actual transaction execute hone ke dauran client ko assign karta hai aur transaction khatam hote hi connection wapas pool mein daal deta hai, allowing 10,000 clients to share 50 DB connections.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 16: FULL STACK APPLICATION INTEGRATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 16: Full Stack Application Integration (Node.js, Python, FastAPI & Prisma)',
      lessons: [
        {
          id: 'pg-fullstack-node-express-prisma',
          title: 'Full Stack Integration: Node.js (pg pool), Express REST APIs & Prisma ORM',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'Full Stack Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Node.js aur TypeScript mein PostgreSQL connect karna ho toh `pg` connection pool aur Prisma ORM sabse powerful combo hain! Type-safe database queries aur automated migrations master karenge! 🚀😎"',
            hint: '💡 Masti Sir: "Node.js `pg.Pool` se parameterized queries chalao: `pool.query(\'SELECT * FROM users WHERE id = $1\', [userId])` — `$1, $2` parameters SQL injection ko 100% block karte hain!"',
            success: '🎉 Masti Sir: "Production-ready Full Stack PostgreSQL + Express + Prisma backend complete! 🏆"',
            mistake: '😅 Masti Sir: "PostgreSQL mein parameterized queries `$1, $2` use karti hain, MySQL ka `?` nahi!"'
          },
          englishDef: 'Production Node.js and TypeScript applications integrate with PostgreSQL using the official `pg` driver with Connection Pooling or modern ORMs like Prisma. Key patterns include parameterized query execution (`$1`, `$2`), multi-step transactional client checkouts (`client.query(\'BEGIN\')`), schema migrations (`prisma migrate dev`), and type-safe data access.',
          hinglishExplain: 'Full Stack applications mein backend server PostgreSQL se connect karta hai. Node.js mein `pg` library connection pooling provide karti hai. Queries mein `$1, $2` placeholders use hote hain jo SQL injection ko prevent karte hain. Prisma ORM TypeScript developers ko complete type-safety aur automated schema migrations provide karta hai.',
          funnyExample: {
            scenario: 'The Parameterized Security Shield:\n- Vulnerable Code: `"SELECT * FROM users WHERE email = \'" + userInput + "\'"` 💀\n- Safe PostgreSQL: `pool.query(\'SELECT * FROM users WHERE email = $1\', [userInput])` 🛡️\n- Hacker input is treated strictly as plain text string, zero security breach!',
            punchline: 'Always use $1, $2 parameter placeholders in PostgreSQL!'
          },
          visualDiagram: {
            title: 'Full Stack PostgreSQL Application Architecture',
            nodes: [
              'React / Next.js Client (HTTP / JSON)',
              'Express.js / Node.js API Controller',
              'Connection Pool (pg.Pool / Prisma Client)',
              'PostgreSQL Database (Port 5432 with RLS & Constraints)'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Prisma Migration & Client Workflow:',
            steps: [
              'Developer updates `schema.prisma` model definition',
              '`npx prisma migrate dev` generates version-controlled SQL migration file and applies it to database',
              'Generates TypeScript types matching database columns for compile-time safety'
            ]
          },
          code: `// ── 1. NODE.JS POSTGRESQL POOL CONNECTION (db.js) ──
import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'codemasti_app',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'codemasti_db',
  max: 20, // Max 20 pooled connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// ── 2. EXPRESS REST API ROUTE WITH TRANSACTIONS (routes.js) ──
import express from 'express';
export const router = express.Router();

router.post('/enroll', async (req, res) => {
  const client = await pool.connect();
  try {
    const { userId, courseId } = req.body;
    await client.query('BEGIN');

    // 1. Insert Enrollment with RETURNING
    const insertRes = await client.query(
      'INSERT INTO course_enrollments (learner_id, course_id) VALUES ($1, $2) RETURNING id, enrolled_at',
      [userId, courseId]
    );

    // 2. Award XP points
    await client.query(
      'UPDATE learners SET xp_points = xp_points + 100 WHERE id = $1',
      [userId]
    );

    await client.query('COMMIT');
    res.json({ success: true, enrollment: insertRes.rows[0] });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ success: false, error: error.message });
  } finally {
    client.release(); // Return connection to pool
  }
});`,
          codeBreakdown: [
            { part: 'new Pool({ max: 20 })', label: 'Initializes connection pool managing reusable client sockets with connection timeouts', color: '#3b82f6' },
            { part: 'client.query("... VALUES ($1, $2)", [userId, courseId])', label: 'Parameterized query execution preventing SQL injection using positional placeholders', color: '#10b981' },
            { part: 'client.release();', label: 'Crucial cleanup: releases borrowed client socket back to pool preventing connection leaks', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Pool client borrow karne ke baad `finally { client.release(); }` call karna bhool jana (causes connection pool starvation)',
            '❌ PostgreSQL queries mein `$1, $2` ki jagah MySQL ka `?` likhna (Syntax Error)'
          ],
          miniChallenge: 'Ek Express GET route likho jo `pool.query("SELECT * FROM courses WHERE category = $1", [req.query.cat])` execute kare.',
          quiz: {
            question: 'Node.js `pg` driver mein SQL queries parameterized karne ke liye kaunse placeholders use hote hain?',
            options: ['$1, $2, $3', '?, ?, ?', ':name, :email', '%s, %s'],
            answer: '$1, $2, $3',
            explanation: 'PostgreSQL native protocol positional placeholders `$1, $2, $3...` use karta hai parameter binding ke liye.'
          },
          summary: [
            'pg.Pool high-throughput Node.js applications ke liye connection reuse provide karta hai',
            '$1, $2 parameterized placeholders SQL injection attacks ko eliminate karte hain',
            'Prisma ORM schema migrations aur complete TypeScript type-safety deliver karta hai'
          ],
          flashcard: {
            q: '`client.release()` call karna kyun zaroori hota hai?',
            a: 'Agar aap transaction ya query ke baad client release nahi karenge, toh connection open reh jayega aur kuch hi requests mein poora connection pool exhaust ho kar server hang ho jayega.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 17: INDUSTRY PROJECTS & MULTI-TENANT CAPSTONE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 17: Real-World Industry Projects & Multi-Tenant SaaS Capstone',
      lessons: [
        {
          id: 'pg-projects-capstone-saas',
          title: 'Full Stack Capstone: Multi-Tenant SaaS LMS Database Architecture with RLS & Full-Text Search',
          emoji: '🏆',
          xpReward: 50,
          badgeName: 'Enterprise Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab tak jo kuch seekha — Schemas, UUIDs, JSONB, RLS Policies, Materialized Views, GIN Full-Text Search, Triggers, aur Partitioning — sab kuch jod kar ek enterprise Multi-Tenant SaaS LMS Database banayenge! 🏆😎"',
            hint: '💡 Masti Sir: "Har tenant ka data RLS se 100% isolated rahega, aur global analytics Materialized View se instant load hogi!"',
            success: '🎉 Masti Sir: "Incredible achievement! You have designed a production-grade PostgreSQL architecture! 🚀"',
            mistake: '😅 Masti Sir: "Foreign keys aur RLS tenant_id columns par index lagana mat bhoolna for high speed!"'
          },
          englishDef: 'The final Capstone Project synthesizes advanced PostgreSQL engineering to design a complete Multi-Tenant SaaS Learning Platform Database. Key components include UUID primary keys, declarative Row Level Security (RLS) tenant isolation, JSONB student preferences, Full-Text search with GIN indexing, Materialized Views for executive reporting, and automated audit triggers.',
          hinglishExplain: 'Is Capstone Project mein hum ek enterprise Multi-Tenant SaaS LMS database build karenge. Isme multiple companies (tenants) apna training data store karengi jo RLS se completely isolated hoga. JSONB se custom user preferences store honge, GIN index se instant full-text course search hoga, aur Materialized Views se real-time analytics reports generate hongi.',
          funnyExample: {
            scenario: 'The Enterprise SaaS Architecture:\n- 100 Corporate Clients (Tenants) 🏢\n- 500,000 Active Learners 🧑‍🎓\n- Zero Data Leakage via RLS 🛡️\n- Sub-millisecond Full-Text Course Search via GIN ⚡\n- Instant Executive Analytics Dashboard via Materialized Views 📊',
            punchline: 'From beginner to enterprise PostgreSQL architect!'
          },
          visualDiagram: {
            title: 'Complete Multi-Tenant SaaS LMS Schema Architecture',
            nodes: [
              'tenants (id UUID PK, name, plan)',
              'app_users (id UUID PK, tenant_id FK) <-> user_preferences (JSONB)',
              'courses (id UUID, tenant_id FK, search_vector GIN) <-> lessons <-> enrollments',
              'Row Level Security Policies active on ALL tenant tables',
              'Materialized Views: mv_tenant_performance_metrics'
            ],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Production Scale Blueprint:',
            steps: [
              'Enable RLS on all tenant-owned tables with session variable tenant_id checks',
              'Create composite indexes on `(tenant_id, created_at DESC)` for high-speed tenant data slicing',
              'Refresh Materialized Views periodically via background worker cron jobs'
            ]
          },
          code: `-- ═══════════════════════════════════════════════════════
-- MULTI-TENANT SAAS LMS DATABASE ARCHITECTURE
-- ═══════════════════════════════════════════════════════

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 1. Tenant Entity (Companies / Organizations)
CREATE TABLE saas_tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  subdomain VARCHAR(50) NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tenant-Scoped Users Entity
CREATE TABLE saas_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES saas_tenants(id) ON DELETE CASCADE,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  role VARCHAR(20) DEFAULT 'student',
  preferences JSONB DEFAULT '{"theme": "dark", "notifications": true}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_tenant_email UNIQUE (tenant_id, email)
);

-- 3. Tenant-Scoped Courses with Full-Text Search Vector
CREATE TABLE saas_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES saas_tenants(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  search_vector tsvector GENERATED ALWAYS AS (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, ''))
  ) STORED,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_saas_courses_search ON saas_courses USING gin (search_vector);
CREATE INDEX idx_saas_courses_tenant ON saas_courses (tenant_id);

-- 4. Enable Row Level Security (RLS) on Tenant Tables
ALTER TABLE saas_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_users ON saas_users
  FOR ALL
  USING (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);

CREATE POLICY tenant_isolation_courses ON saas_courses
  FOR ALL
  USING (tenant_id = NULLIF(current_setting('app.current_tenant_id', true), '')::uuid);`,
          codeBreakdown: [
            { part: 'CONSTRAINT uq_tenant_email UNIQUE (tenant_id, email)', label: 'Tenant-scoped unique constraint permitting same email across distinct corporate tenants', color: '#3b82f6' },
            { part: 'search_vector tsvector GENERATED ALWAYS AS (...) STORED', label: 'Automated full-text search document generation indexed via GIN structure', color: '#10b981' },
            { part: 'CREATE POLICY tenant_isolation_users ...', label: 'Declarative Row Level Security policy ensuring automatic tenant data partitioning at kernel level', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Multi-tenant tables par tenant_id par index na lagana (causes slow RLS evaluations)',
            '❌ Global unique email constraint lagana (email should be unique per tenant: `UNIQUE(tenant_id, email)`)'
          ],
          miniChallenge: 'LMS schema ke liye `saas_enrollments` table create karo with RLS policy enabled.',
          quiz: {
            question: 'Multi-tenant database schema design karte waqt email unique constraint kaise define karni chahiye?',
            options: [
              'UNIQUE (tenant_id, email) combination use karke',
              'Sirf UNIQUE (email)',
              'Bina kisi unique constraint ke',
              'Email store hi na karke'
            ],
            answer: 'UNIQUE (tenant_id, email) combination use karke',
            explanation: 'Multi-tenant SaaS mein same user email do alag-alag companies (tenants) mein exist kar sakti hai, isliye constraint hamesha `UNIQUE (tenant_id, email)` hona chahiye.'
          },
          summary: [
            'Multi-tenant SaaS architecture UUIDs, RLS aur composite keys use karta hai',
            'Full-text search vectors GIN indexes ke sath lightning-fast search deliver karte hain',
            'PostgreSQL single database instance par 100% tenant data isolation provide karta hai'
          ],
          flashcard: {
            q: 'Multi-tenant RLS schema mein database pooling kaise kaam karti hai?',
            a: 'App pool se connection leti hai, `SET LOCAL app.current_tenant_id = \'...\'` execute karti hai, queries chalati hai, aur transaction commit hone par session clean ho jata hai.'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 18: FAANG INTERVIEW MASTERY & SYSTEM DESIGN
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 18: FAANG PostgreSQL Interview Mastery & Scalable System Design',
      lessons: [
        {
          id: 'pg-interview-system-design',
          title: 'Top 25 FAANG PostgreSQL Interview Questions & Scalable System Design Architecture',
          emoji: '💼',
          xpReward: 50,
          badgeName: 'PostgreSQL Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Google, Amazon, Uber aur top unicorn startups ke interviews mein jo sabse tough PostgreSQL questions aate hain — MVCC internals, VACUUM troubleshooting, GIN vs B-Tree, aur Distributed Scalability — sab yahan master karenge! 😎"',
            hint: '💡 Masti Sir: "System design interview mein explain karo: Writes go to Primary DB, Reads go to Read Replicas, Caching layer uses Redis, and PgBouncer pools connections!"',
            success: '🥳 Masti Sir: "Congratulations! You have completed the Complete PostgreSQL Masterclass! You are now a Job-Ready PostgreSQL Certified Database Architect! 🚀"',
            mistake: '😅 Masti Sir: "Interview mein answer dete waqt sirf command mat batao — underlying engine internals (WAL, Buffer Pool, MVCC) zaroor explain karo!"'
          },
          englishDef: 'Comprehensive preparation for Tier-1 and FAANG technical interviews covering core PostgreSQL internals: PostgreSQL vs MySQL differences, MVCC and Dead Tuple lifecycle, VACUUM and autovacuum tuning, WAL mechanics and PITR, GIN vs GiST indexing, DISTINCT ON vs GROUP BY, Row Level Security architecture, and scaling PostgreSQL to millions of users.',
          hinglishExplain: 'Top product companies ke technical aur system design interviews mein aane wale classic PostgreSQL questions ko master karein. Isme PostgreSQL vs MySQL deep comparison, MVCC internals, VACUUM tuning, index strategy, aur multi-region replication architecture shamil hai.',
          funnyExample: {
            scenario: 'The FAANG System Design Interview:\n- Interviewer: "How would you scale PostgreSQL to handle 100,000 queries per second?" 🏢\n- Candidate: "1. PgBouncer connection pooling for 20k clients\n2. Primary-Standby Streaming Replication with 4 Read Replicas\n3. Redis caching layer in front\n4. Declarative Range Partitioning on time-series tables\n5. Partial & GIN indexing for fast filtering!" 🎯\n- Interviewer: "Hired on the spot as Senior Database Architect!" 🚀',
            punchline: 'True database mastery connects low-level SQL to high-level system architecture!'
          },
          visualDiagram: {
            title: 'Enterprise Scalable PostgreSQL System Architecture',
            nodes: [
              '500,000 Active App Clients -> Load Balancer (HAProxy / Envoy)',
              'PgBouncer Connection Pooler Cluster (Transaction Mode)',
              'PostgreSQL Primary (Writes -> WAL Archiving -> S3 PITR)',
              'Streaming Replication Stream -> 4 Read Replicas (Reads / Reporting)',
              'Redis Caching Layer for Hot Row Lookups'
            ],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Top 5 Interview Golden Rules:',
            steps: [
              '1. Always clarify if workload is Read-Heavy (OLAP/Replicas) or Write-Heavy (OLTP/Partitioning)',
              '2. Explain MVCC and why UPDATE creates dead tuples requiring autovacuum',
              '3. Differentiate between B-Tree (ranges), GIN (documents/arrays), and BRIN (time-series)',
              '4. Propose Connection Pooling (PgBouncer) whenever discussing high concurrency',
              '5. Discuss Zero-Downtime schema migrations using NOT VALID constraints'
            ]
          },
          code: `-- ── 1. TOUGH INTERVIEW PROBLEM: TOP N PER CATEGORY USING DISTINCT ON ──
SELECT DISTINCT ON (category)
  category,
  title,
  price,
  created_at
FROM courses
ORDER BY category, price DESC;

-- ── 2. CONSECUTIVE STREAKS (GAPS & ISLANDS IN POSTGRESQL) ──
WITH login_streaks AS (
  SELECT 
    user_id,
    login_date,
    login_date - (ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date))::int AS streak_group
  FROM user_logins
)
SELECT 
  user_id,
  MIN(login_date) AS streak_start,
  MAX(login_date) AS streak_end,
  COUNT(*) AS streak_length
FROM login_streaks
GROUP BY user_id, streak_group
HAVING COUNT(*) >= 5;

-- ── 3. DIAGNOSING SLOW QUERIES VIA PG_STAT_STATEMENTS ──
-- Top 5 most CPU-intensive queries across the entire database:
-- SELECT query, calls, total_exec_time, mean_exec_time, rows 
-- FROM pg_stat_statements 
-- ORDER BY total_exec_time DESC LIMIT 5;`,
          codeBreakdown: [
            { part: 'SELECT DISTINCT ON (category) ... ORDER BY category, price DESC', label: 'Extracts the most expensive course per category in a single elegant query pass', color: '#3b82f6' },
            { part: 'login_date - (ROW_NUMBER() OVER ...)::int', label: 'Gaps and Islands mathematical date shift grouping consecutive daily logins into identical keys', color: '#10b981' },
            { part: 'pg_stat_statements', label: 'Core PostgreSQL extension tracking execution statistics and execution time across all historical queries', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ PostgreSQL ko generic SQL ki tarah treat karna without highlighting its unique features (JSONB, RLS, GIN, DISTINCT ON, FILTER, MVCC)',
            '❌ Production scaling question mein caching aur connection pooling bhool jana'
          ],
          miniChallenge: 'Gaps & Islands pattern use karke 3 din se zyada consecutive daily active users calculate karo.',
          quiz: {
            question: 'PostgreSQL mein poore database cluster ki slow queries aur aggregate execution metrics diagnose karne ke liye kaunsi standard extension use hoti hai?',
            options: ['pg_stat_statements', 'pg_slow_query', 'pg_diagnose', 'query_tracker'],
            answer: 'pg_stat_statements',
            explanation: '`pg_stat_statements` official PostgreSQL extension hai jo sabhi executed SQL queries ke call count, execution time, buffer hits aur CPU statistics track karti hai.'
          },
          summary: [
            'PostgreSQL enterprise capabilities FAANG and Tier-1 architectures power karti hain',
            'MVCC, VACUUM, GIN indexes aur RLS core interview topics hain',
            'Scalable system design Primary-Replica, PgBouncer aur Redis caching combine karta hai'
          ],
          flashcard: {
            q: 'PostgreSQL vs MySQL ka sabse bada architectural difference kya hai?',
            a: 'PostgreSQL ek Object-Relational Database (ORDBMS) hai jo native JSONB, Arrays, Custom Types, RLS, GIN/GiST indexes aur strict SQL standards support karta hai; MySQL pluggable storage engines (InnoDB) ke sath primary read-heavy web applications ke liye optimized hai.'
          }
        }
      ]
    }
  ]
}

export default postgresqlCourse
