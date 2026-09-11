export const mongodbCourse = {
  id: 'mongodb',
  title: 'MongoDB',
  description: 'Enterprise NoSQL Document Database! BSON, CRUD, Advanced Query Operators, Data Modeling (Embedding vs Referencing), Indexes (Compound, TTL, Multikey), Aggregation Pipelines ($lookup, $group, $unwind), Transactions, Replication, Sharding, Mongoose ODM aur Production LMS Capstone Masti Sir style mein!',
  icon: '🍃',
  category: 'database',
  certificateName: 'MONGODB',
  topicsCount: 75,
  practiceCount: 90,
  projectsCount: 16,
  hoursEstimate: 30,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: NOSQL ARCHITECTURE, BSON & CRUD MASTERY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: MongoDB Architecture, BSON Documents & CRUD Mastery',
      lessons: [
        {
          id: 'mongo-intro-crud',
          title: 'MongoDB Architecture, BSON Documents, CRUD & Advanced Operators',
          emoji: '🍃',
          xpReward: 40,
          badgeName: 'MongoDB Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Fixed tables aur rigid columns ka jhanjhat khatam! MongoDB mein data flexible JSON/BSON format mein store hota hai! Table ko bolo Collection aur Row ko bolo Document! Chalo fullstack database master karte hain! 😎"',
            hint: '💡 Masti Sir: "MongoDB internally BSON (Binary JSON) use karta hai jisme 12-byte unique `ObjectId`, Date, aur Decimal128 types natively support hote hain!"',
            success: '🎉 Masti Sir: "Zabardast! MongoDB CRUD operations and query operators successfully mastered!"',
            mistake: '😅 Masti Sir: "`updateOne` mein `$set` lagana mat bhoolna — bina `$set` ke poora document overwrite ho jayega! 😂"'
          },
          englishDef: 'MongoDB is a high-performance, document-oriented NoSQL database storing semi-structured BSON (Binary JSON) documents inside Collections. It provides dynamic schemas, atomic single-document updates, and expressive query operators ($gt, $in, $elemMatch, $set, $push, $inc).',
          hinglishExplain: 'MongoDB mein data JavaScript objects (JSON) jaisa store hota hai. Yahan koi rigid columns nahi hote — ek document mein 4 fields aur dusre mein 6 fields ho sakti hain. BSON format se data ultra-fast read/write hota hai aur binary types directly store hote hain.',
          storyExplain: 'SQL database ek formal Excel sheet jaisa hai jahan har column pehle se fix hota hai — agar kisi student ka middle name nahi hai, tab bhi blank cell chhodna padta hai. MongoDB ek digital folder jaisa hai jahan har student ka ek personalized laminated card (Document) rakha hai — jisko jo details chahiye, wahi likhi hoti hai! 📁',
          funnyExample: {
            scenario: 'Junior Dev updates user XP: `db.users.updateOne({ name: "Kabir" }, { xp: 100 });` 😱\nResult: User ka name, email, password sab delete ho gaya aur sirf `{ xp: 100 }` bacha!\nCorrect Way: `db.users.updateOne({ name: "Kabir" }, { $set: { xp: 100 } });` 🥳',
            punchline: 'Always use $set or $inc when updating specific fields!'
          },
          memoryTrick: 'MongoDB Core Mapping:\n- SQL Database -> MongoDB Database\n- SQL Table -> MongoDB Collection\n- SQL Row / Record -> MongoDB Document (BSON)\n- SQL Column -> MongoDB Field\n- SQL Primary Key -> `_id: ObjectId("...")`',
          visualDiagram: {
            title: 'MongoDB Database & Document Hierarchy',
            nodes: ['Database (codeMastiDB)', 'Collections (users, courses, orders)', 'BSON Documents ({ _id, title, xp, tags: [] })', 'Nested Sub-Documents & Embedded Arrays'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Inside the 12-Byte ObjectId Structure:',
            steps: ['4 Bytes: Unix Epoch Timestamp (Seconds)', '5 Bytes: Random Process Value (Machine & PID)', '3 Bytes: Incrementing Counter (Generates unique IDs across distributed clusters)', 'Allows automatic sorting by creation time via _id']
          },
          code: `// ── 1. INSERT OPERATIONS (insertOne & insertMany) ──
db.learners.insertMany([
  {
    name: "Kabir Sharma",
    email: "kabir@codemasti.com",
    xp: 1250,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    role: "student",
    enrolledAt: new Date(),
    profile: { city: "Bengaluru", isVerified: true }
  },
  {
    name: "Ananya Iyer",
    email: "ananya@codemasti.com",
    xp: 2100,
    skills: ["React", "Next.js", "TypeScript", "MongoDB"],
    role: "mentor",
    enrolledAt: new Date(),
    profile: { city: "Chennai", isVerified: true }
  }
]);

// ── 2. READ WITH ADVANCED OPERATORS ($gte, $in, $elemMatch) ──
// Find all active learners with XP >= 1000 who know React
db.learners.find(
  {
    xp: { $gte: 1000 },
    skills: { $in: ["React", "Next.js"] },
    "profile.isVerified": true
  },
  { name: 1, email: 1, xp: 1, _id: 0 } // Projection: Return only name, email, xp
).sort({ xp: -1 }).limit(10);

// ── 3. ATOMIC UPDATE OPERATORS ($set, $inc, $push, $addToSet) ──
db.learners.updateOne(
  { email: "kabir@codemasti.com" },
  {
    $inc: { xp: 100 },                        // Increment XP by 100 atomically
    $addToSet: { skills: "MongoDB" },         // Adds skill only if not already present
    $set: { "profile.lastLogin": new Date() } // Update nested field
  },
  { upsert: true } // Creates document if email not found
);

// ── 4. SAFE DELETE (deleteOne / deleteMany) ──
db.learners.deleteOne({ email: "spammer@bot.com" });`,
          codeBreakdown: [
            { part: 'db.learners.insertMany([...])', label: 'Batch inserts multiple documents in a single network round-trip', color: '#3b82f6' },
            { part: '{ $addToSet: { skills: "MongoDB" } }', label: 'Ensures array uniqueness without duplicate skills', color: '#10b981' },
            { part: '{ upsert: true }', label: 'Atomic update-or-insert flag preventing race conditions during document creation', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Forgetting `$set` during updates causing entire document replacement',
            '❌ Using unindexed `$regex` queries on millions of documents (forces slow collection scans COLLSCAN)',
            '❌ Storing unbounded growing arrays inside a single document (exceeding 16MB BSON limit)'
          ],
          proTips: [
            '💡 Use `$elemMatch` when querying multiple criteria on objects inside an array: `courses: { $elemMatch: { score: { $gt: 80 }, completed: true } }`',
            '💡 Use projection `{ _id: 0, name: 1 }` to save network bandwidth by omitting unused heavy fields'
          ],
          interviewQuestions: [
            'What is BSON in MongoDB, how does it differ from standard JSON, and why is the 16MB document size limit enforced?',
            'Explain the difference between `$push` and `$addToSet` array update operators in MongoDB.',
            'How does MongoDB handle atomic operations at the single-document level without requiring distributed multi-document transactions?'
          ],
          miniChallenge: 'Write a query to find all users with XP between 500 and 1500, projection of name and skills only, sorted descending by XP.',
          quiz: {
            type: 'mcq',
            question: 'MongoDB mein kisi array field mein duplicate value add hone se rokne ke liye kaunsa update operator use karte hain?',
            options: ['$push', '$addToSet', '$insert', '$append'],
            answer: '$addToSet',
            explanation: '`$addToSet` adds an element to an array only if the value does not already exist, maintaining set uniqueness.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'MongoDB document ka maximum allowable size kitna hota hai?',
              code: 'BSON Document Size Limit = ?',
              options: ['2 MB', '16 MB', '64 MB', 'Unlimited'],
              answer: '16 MB',
              explanation: 'A single BSON document in MongoDB has a hard limit of 16 Megabytes to ensure optimal RAM cache utilization.'
            }
          ],
          summary: ['MongoDB stores flexible BSON documents inside Collections', 'Atomic operators ($set, $inc, $addToSet) mutate data safely', 'Projection and cursor pagination optimize query transfer speed'],
          flashcard: { q: 'What is an Upsert in MongoDB?', a: 'An operation where MongoDB updates an existing document if it matches the query filter, or inserts a brand new document if no match is found.' },
          funFact: 'The name "MongoDB" comes from the word "humongous" because the founders wanted to build a database capable of handling humongous amounts of data!',
          didYouKnow: 'The first 4 bytes of every MongoDB `ObjectId` encode the exact Unix creation timestamp, meaning you can extract the creation date of any document without saving a separate `createdAt` field!',
          realWorldUseCases: ['User profiles & authentication records in MERN stack', 'E-commerce product catalogs with varying specifications', 'Content Management Systems (CMS) with dynamic article blocks', 'High-throughput gaming leaderboard XP tracking'],
          practiceQuestions: [
            'Insert 5 mock course documents and query using `$and` with multiple conditions',
            'Perform an atomic `$inc` update on user streak and verify the resulting document'
          ]
        },
        {
          id: 'mongo-data-modeling-indexes',
          title: 'Data Modeling (Embedding vs Referencing) & Indexes (Compound, TTL, Multikey)',
          emoji: '📐',
          xpReward: 45,
          badgeName: 'Schema Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Embedding vs Referencing ka golden rule: Jo data hamesha ek sath read hota hai use Embed karo (roommates ki tarah), aur jo data independent hai ya unbounded badhta hai use Reference karo! Aur har slow query pe Index lagao! 📐"',
            hint: '💡 Masti Sir: "Index lagane se query COLLSCAN (10 lakh document scan) se seedha IXSCAN (1ms instant lookup) ban jati hai!"',
            success: '🎉 Masti Sir: "High-performance schema design and compound indexes mastered!"',
            mistake: '😅 Masti Sir: "Har field pe index mat bana dena — indexes se reads fast hoti hain par writes aur storage ka cost badhta hai!"'
          },
          englishDef: 'MongoDB schema design centers on application access patterns. Embedding sub-documents is optimized for high-read 1:1 and bounded 1:N data. Referencing (Normalized ObjectIds) is optimal for 1:Many and Many:Many relationships. Indexes (Single, Compound, Multikey, TTL, Unique) eliminate full collection scans (COLLSCAN) for blazing fast IXSCAN queries.',
          hinglishExplain: 'Schema design mein sabse bada decision hota hai: data ko document ke andar hi embed karein ya alag collection mein rakh kar reference karein. Agar data bounded hai (jaise user ka address), toh embed karna best hai. Agar data unlimited badh sakta hai (jaise user ke comments), toh reference use karte hain. Indexes database ki book ke index page jaise hote hain jo queries ko 1000x fast kar dete hain.',
          storyExplain: 'Socho tum library mein book dhoondh rahe ho. Without Index (COLLSCAN): Tum library ki har shelf ki har ek book ka title padh rahe ho (Ghanton lag jayenge ⏳). With Index (IXSCAN): Tum librarian ke search computer (Index Tree) pe jaate ho, shelf number milta hai aur 2 second mein book nikaal lete ho! 📚⚡',
          funnyExample: {
            scenario: 'Unindexed query on 1,000,000 users:\n`db.users.find({ email: "user@test.com" })` -> Scanned: 1,000,000 docs (Time: 850ms) 🐢\nAfter `db.users.createIndex({ email: 1 }, { unique: true })`:\nScanned: 1 doc (Time: 0.8ms) 🚀\n1000x speedup!',
            punchline: 'Indexes turn slow full scans into instant lookups!'
          },
          memoryTrick: 'Data Modeling Decision Tree:\n- 1:1 or Bounded 1:N (Address, Settings) -> EMBED\n- Unbounded 1:N (Logs, Activity, Comments) -> REFERENCE (Parent/Child)\n- Need automatic expiry after 10 mins (OTPs, Sessions)? -> TTL INDEX\n- Querying multiple fields together (`status` + `createdAt`) -> COMPOUND INDEX',
          visualDiagram: {
            title: 'COLLSCAN vs IXSCAN Performance Comparison',
            nodes: ['Without Index: COLLSCAN (Scans all 1,000,000 documents on disk)', 'With Compound Index: B-Tree Traversal -> IXSCAN (Scans exactly 1 B-Tree leaf node)', '0.5ms Instant Response Time!'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How MongoDB B-Tree Indexes Work Internally:',
            steps: ['MongoDB builds balanced B-Tree structure in RAM for indexed keys', '`explain("executionStats")` details `totalDocsExamined` vs `nReturned`', 'TTL index background thread purges expired documents automatically every 60 seconds']
          },
          code: `// ── 1. EMBEDDED VS REFERENCED DATA MODELS ──

// A. Embedded Schema (Bounded 1:N - User Profile with Addresses)
const embeddedUser = {
  _id: ObjectId("65c8f1a2b3c4d5e6f7a8b9c0"),
  name: "Vikramaditya",
  email: "vikram@codemasti.com",
  addresses: [
    { type: "home", street: "MG Road", city: "Bengaluru", pincode: "560001" },
    { type: "office", street: "Hitech City", city: "Hyderabad", pincode: "500081" }
  ]
};

// B. Referenced Schema (Unbounded 1:N - Course with independent Lessons)
const courseDoc = {
  _id: ObjectId("65c8f1a2b3c4d5e6f7a8b9c1"),
  title: "Complete MongoDB Mastery",
  instructorId: ObjectId("65c8f1a2b3c4d5e6f7a8b9c0") // Reference to User
};

const lessonDoc = {
  _id: ObjectId("65c8f1a2b3c4d5e6f7a8b9c2"),
  courseId: ObjectId("65c8f1a2b3c4d5e6f7a8b9c1"), // Reference to Course
  title: "Compound Indexes & Query Optimization",
  durationMinutes: 25
};

// ── 2. INDEX CREATION & MANAGEMENT ──

// A. Unique Compound Index (Prefix order matters!)
db.users.createIndex(
  { email: 1, role: 1 },
  { unique: true, name: "idx_email_role" }
);

// B. Multikey Index (Automatic when indexing array fields)
db.learners.createIndex({ skills: 1 });

// C. TTL Index (Auto-deletes OTP verification records after 600 seconds / 10 mins)
db.otpSessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 600 }
);

// ── 3. QUERY PERFORMANCE PROFILING WITH explain() ──
db.users.find({ email: "vikram@codemasti.com" }).explain("executionStats");`,
          codeBreakdown: [
            { part: 'createIndex({ email: 1, role: 1 })', label: 'Compound index speeding up queries matching both email and role', color: '#3b82f6' },
            { part: '{ expireAfterSeconds: 600 }', label: 'TTL index automatically deleting expired documents from disk', color: '#10b981' },
            { part: '.explain("executionStats")', label: 'Profiles query plan revealing whether IXSCAN or COLLSCAN was used', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Querying fields in compound indexes against the prefix order (Compound index on `{ a: 1, b: 1 }` cannot optimize `{ b: 1 }` alone)',
            '❌ Embedding unbounded arrays (e.g. 50,000 comments in a blog post) causing document overflow',
            '❌ Creating redundant indexes consuming unnecessary RAM memory'
          ],
          proTips: [
            '💡 Follow the **ESR Rule** for Compound Indexes: **E**quality fields first, **S**ort fields second, **R**ange fields last',
            '💡 Check `executionStats.totalDocsExamined === executionStats.nReturned` to ensure an optimal 1:1 index query ratio'
          ],
          interviewQuestions: [
            'What is the ESR (Equality, Sort, Range) rule for designing optimal Compound Indexes in MongoDB?',
            'What is the difference between an Embedded Data Model and a Referenced Data Model, and when should you choose each?',
            'What is a TTL (Time-To-Live) Index in MongoDB and how does the background cleanup thread function?'
          ],
          miniChallenge: 'Create a compound index following the ESR rule for a query filtering by `{ category: "frontend", xp: { $gt: 500 } }` and sorting by `{ createdAt: -1 }`.',
          quiz: {
            type: 'mcq',
            question: 'MongoDB mein Compound Index `{ status: 1, createdAt: -1 }` kaunsi query ko OPTIMIZE NAHI karega?',
            options: ['find({ status: "active" })', 'find({ status: "active" }).sort({ createdAt: -1 })', 'find({ createdAt: -1 }) bina status filter ke', 'find({ status: "pending", createdAt: { $gt: date } })'],
            answer: 'find({ createdAt: -1 }) bina status filter ke',
            explanation: 'Compound indexes require the prefix field (`status`) to be present in the query; they cannot optimize queries using only the non-prefix field (`createdAt`).'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`explain("executionStats")` mein agar stage `IXSCAN` dikhayi de, toh iska kya matlab hota hai?',
              code: 'stage: "IXSCAN"',
              options: ['Full Collection Scan on entire disk', 'Query successfully used a B-Tree Index', 'Query crashed with error', 'Data was corrupted'],
              answer: 'Query successfully used a B-Tree Index',
              explanation: '`IXSCAN` indicates an Index Scan, meaning MongoDB traversed an index to find documents instead of scanning the full collection.'
            }
          ],
          summary: ['Embed bounded cohesive data; reference independent unbounded collections', 'Compound indexes must follow the ESR (Equality, Sort, Range) rule', 'TTL indexes automate session and temporary data deletion'],
          flashcard: { q: 'What is the ESR Rule in MongoDB indexing?', a: 'A compound index design rule: place Equality fields first, Sort fields second, and Range filter fields last in the index definition.' },
          funFact: 'MongoDB uses the WiredTiger storage engine, which provides compression of up to 80% on disk data using snappy and zlib algorithms!',
          didYouKnow: 'A single collection in MongoDB can have up to 64 indexes, but having more than 5-8 indexes per collection is discouraged due to write latency.',
          realWorldUseCases: ['OTP and session expiry management with TTL indexes', 'Fast search filters on e-commerce catalog attributes', 'High-speed social media follow systems with referenced IDs', 'Financial audit logs with compound timestamps'],
          practiceQuestions: [
            'Design a normalized schema for an E-commerce store with Users, Products, and Orders',
            'Run `.explain("executionStats")` on an unindexed query, create an index, and verify the performance improvement'
          ]
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: AGGREGATIONS, TRANSACTIONS & CLUSTERING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Aggregation Pipelines, Transactions, Mongoose & Scale',
      lessons: [
        {
          id: 'mongo-mongoose-aggregation',
          title: 'Aggregation Pipelines ($match, $group, $lookup, $unwind) & Mongoose ODM',
          emoji: '⚙️',
          xpReward: 50,
          badgeName: 'Aggregation Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Aggregation Pipeline ko ek factory assembly line samjho! Documents stage by stage aage badhte hain — `$match` filter karta hai, `$group` total nikalta hai, `$lookup` dusri collection se join karta hai, aur end mein report ready! 🚂"',
            hint: '💡 Masti Sir: "Mongoose ODM Node.js backend mein Schema validation, pre/post hooks aur type safety provide karta hai!"',
            success: '🎉 Masti Sir: "Complex multi-stage aggregation pipelines and Mongoose integration mastered!"',
            mistake: '😅 Masti Sir: "Aggregation pipeline stages mein field reference karte waqt `$` lagana zaroori hai: `$group: { _id: "$role" }`!"'
          },
          englishDef: 'MongoDB Aggregation Pipelines execute multi-stage document transformations for complex analytics: `$match` (filtering), `$group` (accumulators like `$sum`, `$avg`), `$lookup` (relational left outer joins), and `$unwind` (array deconstruction). Mongoose provides schema validation, middleware hooks, and model abstractions in Node.js.',
          hinglishExplain: 'Aggregation Pipeline data analysis ka powerhouse hai. Isme documents ek sequence of stages se guzarte hain. `$lookup` se hum do alag collections ke beech relational JOIN karte hain (jaise Users aur unke Orders). Mongoose se hum Node.js mein schema rules, validation aur pre-save hooks lagate hain.',
          storyExplain: 'Socho tum car manufacturing plant mein ho. Stage 1 ($match): Sirf passed engines ko line pe lo. Stage 2 ($lookup): Engine ke sath matching chassis aur wheels attach karo. Stage 3 ($group): Har car model ke hisaab se total production count calculate karo. Stage 4 ($sort): Highest sales wali cars ko showroom bhej do! 🏎️',
          funnyExample: {
            scenario: 'Project Manager: "Mujhe har state ke top 5 highest earning instructors ka monthly report chahiye with total students enrolled!" 📊\nSQL Developer: 5 nested JOIN queries.\nMongoDB Aggregation Developer: 1 clean pipeline with `$match`, `$unwind`, `$group`, `$sort`, `$limit`! Done in 10 lines! 🚀',
            punchline: 'Aggregation pipelines turn raw documents into actionable business analytics!'
          },
          memoryTrick: 'Top Pipeline Stages:\n- `$match`: Filter documents (Always put first to reduce dataset size!)\n- `$group`: Aggregate with `$sum`, `$avg`, `$min`, `$max`\n- `$lookup`: Left outer join with another collection\n- `$unwind`: Deconstruct array into individual documents\n- `$project` / `$set`: Shape output fields',
          visualDiagram: {
            title: 'MongoDB Aggregation Pipeline Assembly Line',
            nodes: ['Collection Documents', 'Stage 1: $match (Filter active)', 'Stage 2: $lookup (Join Orders collection)', 'Stage 3: $unwind (Flatten order items)', 'Stage 4: $group (Sum total revenue)', 'Final Analytics Report'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How $lookup Executes in the MongoDB Query Engine:',
            steps: ['Takes foreign collection name (`from: "courses"`)', 'Matches `localField` with `foreignField` using foreign collection indexes', 'Attaches matching array of documents as a new field', 'Streams joined documents to the subsequent pipeline stage']
          },
          code: `// ── 1. MONGOOSE SCHEMA WITH VALIDATION & HOOKS ──
import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  xp: number;
  role: 'student' | 'instructor' | 'admin';
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3 },
  email: { type: String, required: true, unique: true, lowercase: true },
  passwordHash: { type: String, required: true },
  xp: { type: Number, default: 0, min: 0 },
  role: { type: String, enum: ['student', 'instructor', 'admin'], default: 'student' }
}, { timestamps: true });

// Pre-save middleware hook (Automatically hashes password before saving)
UserSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) return next();
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
  next();
});

export const User = mongoose.model<IUser>('User', UserSchema);

// ── 2. COMPLEX AGGREGATION PIPELINE ($match, $lookup, $unwind, $group) ──
export async function getInstructorAnalytics() {
  const analytics = await User.aggregate([
    // Stage 1: Filter only instructors
    { $match: { role: 'instructor' } },

    // Stage 2: Left outer join with 'courses' collection
    {
      $lookup: {
        from: 'courses',
        localField: '_id',
        foreignField: 'instructorId',
        as: 'authoredCourses'
      }
    },

    // Stage 3: Unwind courses array to process each course
    { $unwind: '$authoredCourses' },

    // Stage 4: Group by instructor and calculate metrics
    {
      $group: {
        _id: '$_id',
        instructorName: { $first: '$username' },
        totalCourses: { $sum: 1 },
        totalXPAllocated: { $sum: '$authoredCourses.xpReward' }
      }
    },

    // Stage 5: Sort by total XP allocated descending
    { $sort: { totalXPAllocated: -1 } }
  ]);

  return analytics;
}`,
          codeBreakdown: [
            { part: 'UserSchema.pre("save", ...)', label: 'Mongoose pre-save lifecycle hook executing validation or encryption before database writes', color: '#3b82f6' },
            { part: '$lookup: { from: "courses", ... }', label: 'Performs relational-style left outer join connecting foreign documents', color: '#10b981' },
            { part: '$group: { _id: "$_id", ... }', label: 'Accumulator stage computing counts, sums, and averages across grouped keys', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Placing `$lookup` before `$match` in aggregation pipelines (causes massive unindexed joins across the entire collection)',
            '❌ Forgetting to `$unwind` an array field before grouping by array items',
            '❌ Not creating an index on the `foreignField` used in `$lookup` stages'
          ],
          proTips: [
            '💡 Always place `$match` and `$project` stages as early as possible in your aggregation pipeline to filter documents early and reduce RAM consumption',
            '💡 Use `$facet` stage to execute multiple independent aggregation pipelines (e.g. paginated results + total count) in a single database round-trip'
          ],
          interviewQuestions: [
            'What is the MongoDB Aggregation Pipeline and how does `$lookup` perform joins between collections?',
            'What is the difference between `$unwind` and `$group` stages in an aggregation pipeline?',
            'How do Mongoose pre/post middleware hooks work and what are their common real-world use cases?'
          ],
          miniChallenge: 'Write an aggregation pipeline that groups enrolled students by course ID and calculates the average XP and total student count.',
          quiz: {
            type: 'mcq',
            question: 'MongoDB Aggregation pipeline mein do alag collections ke beech relational JOIN perform karne ke liye kaunsa stage operator use hota hai?',
            options: ['$join', '$lookup', '$merge', '$combine'],
            answer: '$lookup',
            explanation: '`$lookup` performs a left outer join to an unsharded collection in the same database to filter in documents from the "joined" collection.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: '`$unwind: "$skills"` stage chalane par kya hota hai?',
              code: '{ $unwind: "$skills" }',
              options: ['Skills array delete ho jata hai', 'Array ke har element ke liye ek naya document clone ban jata hai', 'Array sort ho jata hai', 'Array reverse ho jata hai'],
              answer: 'Array ke har element ke liye ek naya document clone ban jata hai',
              explanation: '`$unwind` deconstructs an array field from the input documents to output a document for each element in the array.'
            }
          ],
          summary: ['Aggregation pipelines deliver high-speed multi-stage analytics', '$lookup joins related collections seamlessly', 'Mongoose schema validation and middleware hooks secure data at the application layer'],
          flashcard: { q: 'What is $facet in MongoDB Aggregation?', a: 'A stage that processes multiple aggregation pipelines within a single stage on the same set of input documents (e.g. paginated results and total count at once).' },
          funFact: 'MongoDB Aggregation Pipeline uses up to 100MB of RAM per stage by default; setting `{ allowDiskUse: true }` allows pipelines to spill over to temporary disk storage for huge datasets!',
          didYouKnow: 'Mongoose was created by Aaron Heckmann in 2010 and has over 2 million weekly downloads as the de-facto ODM for Node.js.',
          realWorldUseCases: ['E-commerce sales analytics and revenue dashboards', 'Course enrollment leaderboards with joined user profiles', 'Multi-tenant reporting engines with dynamic faceting', 'Automated password hashing and slug generation in Mongoose'],
          practiceQuestions: [
            'Build an aggregation pipeline that returns monthly sales metrics with `$group` and date operators',
            'Implement a Mongoose schema with custom validation regex and virtual properties'
          ]
        },
        {
          id: 'mongo-scale-transactions-capstone',
          title: 'ACID Transactions, Replica Sets, Sharding & Production LMS Capstone',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'MongoDB Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Jab baat ho financial transactions, 99.999% high availability aur petabytes of data scaling ki — MongoDB Replica Sets, Sharding aur Multi-Document ACID Transactions picture mein aate hain! Chalo LMS Database Capstone launch karte hain! 🎓"',
            hint: '💡 Masti Sir: "Multi-document transactions mein `session.startTransaction()` aur `session.commitTransaction()` use hota hai — agar beech mein error aaye toh `abortTransaction()` se sab rollback ho jata hai!"',
            success: '🎉 Masti Sir: "Congratulations! You have completed the Ultimate CodeMasti MongoDB Masterclass! You are 100% Production & Job Ready! 🚀"',
            mistake: '😅 Masti Sir: "Sharding mein Shard Key dhyan se choose karna — low cardinality key chuni toh hotspot ban jayega aur saara traffic ek hi server pe gir jayega!"'
          },
          englishDef: 'MongoDB guarantees multi-document ACID transactions via sessions. High availability is achieved through Replica Sets (1 Primary + Secondary nodes with automatic failover). Horizontal scaling uses Sharding with `mongos` query routers and Config Servers. Production databases enforce strict network security and backup policies.',
          hinglishExplain: 'Bank transfer jaisi critical operations ke liye hum Multi-Document ACID Transactions use karte hain taaki ya toh dono updates success hon ya fir poora operation rollback ho jaye. Replica Sets se agar Primary database server crash ho jaye, toh 2 second mein Secondary server naya Primary ban jata hai (Zero downtime). Sharding se data multiple servers pe distribute hota hai.',
          storyExplain: 'Bank Transfer Scenario: Rahul Kabir ko ₹500 bhejta hai. Transaction Step 1: Rahul ke account se ₹500 kate. Step 2: Achanak server crash! Without Transactions: Rahul ka paisa gaya, Kabir ko nahi mila (Paisa gayab! 😱). With ACID Transactions: Agar Step 2 fail hua, toh Step 1 automatically ROLLBACK ho jayega aur Rahul ka paisa 100% safe rahega! 🏦',
          funnyExample: {
            scenario: 'Primary Database Server catches fire at 2:00 AM 💥\nReplica Set Heartbeat: "Primary down! Voting election started..."\nSecondary Node elected as New Primary in 1.8 seconds! 🗳️\nUsers on Website: "Kuch pata hi nahi chala, website mast chal rahi hai!" 😎',
            punchline: 'Replica Sets deliver automatic zero-downtime failover!'
          },
          memoryTrick: 'Enterprise Scaling Architecture:\n1. High Availability -> REPLICA SET (Primary -> Secondary -> Secondary)\n2. Horizontal Scale -> SHARDING (`mongos` Router -> Config Server -> Shards)\n3. Critical Money/Enrollment Logic -> ACID TRANSACTIONS (`withTransaction`)',
          visualDiagram: {
            title: 'MongoDB Production Cluster Architecture (Sharding & Replication)',
            nodes: ['Application (Next.js / Node.js Backend)', 'mongos Query Routers (Stateless)', 'Config Server Replica Set (Metadata & Routing Map)', 'Shard 1 Replica Set (Primary + 2 Secondaries)', 'Shard 2 Replica Set (Primary + 2 Secondaries)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Multi-Document ACID Transactions Work Internally:',
            steps: ['Backend acquires ClientSession via `client.startSession()`', 'Calls `session.startTransaction({ readConcern: "majority", writeConcern: "majority" })`', 'Executes multiple collection writes inside session', 'On error: Calls `abortTransaction()` rolling back all uncommitted WiredTiger memory buffers']
          },
          code: `// ── 1. MULTI-DOCUMENT ACID TRANSACTION EXAMPLE ──
import mongoose from 'mongoose';

export async function enrollStudentInCourse(studentId: string, courseId: string, feeAmount: number) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Step 1: Deduct student wallet balance
    const updatedStudent = await mongoose.model('User').findOneAndUpdate(
      { _id: studentId, walletBalance: { $gte: feeAmount } },
      { $inc: { walletBalance: -feeAmount } },
      { session, new: true }
    );

    if (!updatedStudent) {
      throw new Error("Insufficient wallet balance for enrollment!");
    }

    // Step 2: Create Enrollment Record
    await mongoose.model('Enrollment').create([
      {
        studentId,
        courseId,
        enrolledAt: new Date(),
        status: 'active'
      }
    ], { session });

    // Step 3: Increment Course enrolled count
    await mongoose.model('Course').findByIdAndUpdate(
      courseId,
      { $inc: { totalEnrollments: 1 } },
      { session }
    );

    // Commit all operations atomically
    await session.commitTransaction();
    console.log("✅ Enrollment Transaction Committed Successfully!");
    return { success: true };

  } catch (error) {
    // Rollback all operations if any step fails
    await session.abortTransaction();
    console.error("❌ Transaction Aborted due to error:", error);
    throw error;
  } finally {
    session.endSession();
  }
}`,
          codeBreakdown: [
            { part: 'mongoose.startSession()', label: 'Initiates dedicated client session required for multi-document ACID transactions', color: '#3b82f6' },
            { part: 'session.commitTransaction()', label: 'Atomically commits all batched database mutations simultaneously', color: '#10b981' },
            { part: 'session.abortTransaction()', label: 'Rolls back all intermediate modifications if an error occurs, ensuring data integrity', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Using multi-document transactions for simple single-document updates (single-document updates are already atomic and much faster)',
            '❌ Choosing a monotonically increasing Shard Key (e.g. `createdAt`) which causes all writes to hit a single shard (Write Hotspot)',
            '❌ Forgetting to end the session in a `finally` block causing connection pool leaks'
          ],
          proTips: [
            '💡 Use a hashed Shard Key (`{ _id: "hashed" }`) for uniform write distribution across sharded clusters',
            '💡 Set `readPreference: "secondaryPreferred"` on heavy analytics queries to offload read traffic from the primary replica node'
          ],
          interviewQuestions: [
            'How do Multi-Document ACID Transactions work in MongoDB and when should you avoid using them in favor of atomic embedded updates?',
            'What is the difference between Replication (High Availability) and Sharding (Horizontal Scalability) in MongoDB?',
            'How do you choose an effective Shard Key and what is the risk of selecting a low-cardinality shard key?'
          ],
          miniChallenge: 'Write a bank transfer transaction that moves funds between two account documents with error rollback handling.',
          quiz: {
            type: 'mcq',
            question: 'MongoDB Replica Set mein Primary server crash hone par naya Primary choose karne ke liye kaunsi process execute hoti hai?',
            options: ['Manual reboot', 'Replica Set Election (Heartbeat voting)', 'Shard Split', 'Database reload'],
            answer: 'Replica Set Election (Heartbeat voting)',
            explanation: 'Secondary replica nodes continuously ping each other via heartbeats (every 2 seconds) and automatically hold an election to promote a new Primary if the current Primary becomes unreachable.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Agar Multi-Document Transaction execute hote waqt exception throw ho jaye, toh kaunsa method call karna padta hai?',
              code: 'catch (err) { await session.___(); }',
              options: ['closeTransaction', 'abortTransaction', 'cancelTransaction', 'restartSession'],
              answer: 'abortTransaction',
              explanation: '`session.abortTransaction()` discards all pending uncommitted changes made within the transaction session.'
            }
          ],
          summary: ['ACID transactions ensure all-or-nothing data consistency', 'Replica sets provide automatic failover and high availability', 'Sharding enables horizontal scaling across distributed server clusters'],
          flashcard: { q: 'What is the difference between Replication and Sharding?', a: 'Replication duplicates data across multiple nodes for High Availability and fault tolerance; Sharding distributes data partitions across multiple servers for Horizontal Scaling.' },
          funFact: 'MongoDB Atlas processes over 20 billion database queries every single hour for Fortune 500 enterprises around the world!',
          didYouKnow: 'MongoDB 4.0 introduced multi-document ACID transactions for replica sets, and MongoDB 4.2 expanded ACID transactions across distributed sharded clusters.',
          realWorldUseCases: ['Banking, payment gateways, and wallet deductions', 'E-commerce flash sales with guaranteed inventory consistency', 'Multi-region enterprise applications with high-availability replica sets', 'Petabyte-scale clickstream logging platforms with sharded clusters'],
          practiceQuestions: [
            'Build a transactional checkout system reserving items in stock and charging customer balance',
            'Simulate a Replica Set configuration using MongoDB Atlas Cloud with 3-node clustering'
          ]
        }
      ]
    }
    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: AGGREGATION PIPELINE MASTERY
    // ═══════════════════════════════════════════════════════
    ,{
      chapterTitle: 'Chapter 3: Aggregation Pipeline — $match, $group, $lookup & $unwind',
      lessons: [
        {
          id: 'mongo-aggregation-basics',
          title: 'Aggregation Pipeline — $match, $project & $sort',
          emoji: '🔧',
          xpReward: 45,
          badgeName: 'Pipeline Engineer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "MongoDB Aggregation Pipeline = SQL GROUP BY + JOIN + HAVING ka combination! Data ko stage-by-stage transform karo! 🔧"',
            hint: '💡 Masti Sir: "Pipeline stages sequence matter karta hai — pehle $match lagao taaki less documents aage jaayein, performance boost milegi!"',
            success: '🥳 Masti Sir: "Aggregation pipeline perfectly kaam kar raha hai! Complex analytics data ek hi query mein! 🔥"',
            mistake: '😅 Masti Sir: "Aggregation mein $match pehle lagao then $group — agar ulta karo toh poora collection process hoga, slow hoga!"'
          },
          englishDef: "MongoDB's Aggregation Pipeline processes documents through sequential transformation stages. Each stage transforms documents and passes results to the next. Key stages: $match (filter), $group (aggregate), $project (reshape), $sort (order), $limit (paginate).",
          hinglishExplain: 'Aggregation pipeline = assembly line jaisa. Pehli stage mein documents filter hote hain ($match), dusri mein group hote hain ($group), teesri mein shape change hota hai ($project). Har stage ka output agla stage ka input hota hai.',
          code: `// Aggregation Pipeline Examples

// Example 1: Average course completion by category
db.enrollments.aggregate([
  // Stage 1: Filter only active enrollments
  { $match: { status: 'active', completionPercent: { $gte: 0 } } },
  
  // Stage 2: Lookup course details (JOIN)
  { $lookup: {
    from: 'courses',
    localField: 'courseId',
    foreignField: '_id',
    as: 'course'
  }},
  
  // Stage 3: Unwind the array (one doc per course)
  { $unwind: '$course' },
  
  // Stage 4: Group by category
  { $group: {
    _id: '$course.category',
    avgCompletion: { $avg: '$completionPercent' },
    totalEnrollments: { $sum: 1 },
    uniqueStudents: { $addToSet: '$userId' }
  }},
  
  // Stage 5: Project clean output
  { $project: {
    category: '$_id',
    avgCompletion: { $round: ['$avgCompletion', 1] },
    totalEnrollments: 1,
    uniqueStudentCount: { $size: '$uniqueStudents' },
    _id: 0
  }},
  
  // Stage 6: Sort by avgCompletion descending
  { $sort: { avgCompletion: -1 } },
  
  // Stage 7: Limit top 5
  { $limit: 5 }
]);`,
          commonMistakes: [
            '❌ $match pipeline ke end mein lagana — har document process hoga (index use nahi hoga!)',
            '❌ $lookup ke baad $unwind bhoolna — array fields aggregation mein unwrap nahi hote automatically'
          ],
          quiz: {
            question: 'Aggregation pipeline mein $match stage sabse pehle kyu lagaani chahiye?',
            options: ['Syntax requirement hai', 'Early filtering se fewer documents agle stages mein process hote hain — faster aur index use hota hai', 'Ye mandatory hai', '$lookup ke baad kaam nahi karta'],
            answer: 'Early filtering se fewer documents agle stages mein process hote hain — faster aur index use hota hai',
            explanation: 'Pehle $match se documents drastically reduce hote hain. Indexes $match pe lete hain. Baaki stages pe less work hota hai — O(n) se O(filtered_n) ho jaata hai.'
          },
          summary: ['Aggregation pipeline stages sequentially execute hoti hain', '$match → $lookup → $unwind → $group → $project → $sort → $limit optimal order hai', 'Pipeline har stage ka output agla stage ka input hai'],
          flashcard: { q: '$group mein _id kya represent karta hai?', a: '$group ka _id grouping key hai — is field ki value ke basis pe documents group hote hain. null dene se sab documents ek group mein aate hain.' }
        },
        {
          id: 'mongo-aggregation-advanced',
          title: '$group, $addFields, $facet & Window Functions',
          emoji: '📊',
          xpReward: 50,
          badgeName: 'Analytics Master',
          englishDef: '$group aggregates documents by a key using accumulator operators ($sum, $avg, $max, $min, $push, $addToSet). $facet enables multi-dimensional analytics in a single pass. Window functions ($rank, $denseRank) provide SQL-like analytics.',
          hinglishExplain: '$group SQL ke GROUP BY jaisa hai. $sum se count karo, $avg se average lo, $push se array banao. $facet se ek query mein multiple aggregations simultaneously karo — e.g. total count + category breakdown + top 5 courses ek hi query mein.',
          code: `// Advanced Aggregation Examples

// 1. Multi-facet analytics in one query
db.courses.aggregate([
  { $match: { isPublished: true } },
  { $facet: {
    // Facet 1: Category breakdown
    byCategory: [
      { $group: { _id: '$category', count: { $sum: 1 }, avgPrice: { $avg: '$price' } } },
      { $sort: { count: -1 } }
    ],
    // Facet 2: Price ranges
    priceRanges: [
      { $bucket: {
        groupBy: '$price',
        boundaries: [0, 500, 1000, 5000],
        default: '5000+',
        output: { count: { $sum: 1 }, courses: { $push: '$title' } }
      }}
    ],
    // Facet 3: Summary
    summary: [
      { $group: {
        _id: null,
        totalCourses: { $sum: 1 },
        avgPrice: { $avg: '$price' },
        maxEnrollments: { $max: '$enrolledCount' }
      }}
    ]
  }}
]);

// 2. $addFields — Add computed fields
db.students.aggregate([
  { $addFields: {
    fullName: { $concat: ['$firstName', ' ', '$lastName'] },
    ageInMonths: { $multiply: ['$age', 12] },
    grade: {
      $switch: {
        branches: [
          { case: { $gte: ['$score', 90] }, then: 'A' },
          { case: { $gte: ['$score', 75] }, then: 'B' },
          { case: { $gte: ['$score', 60] }, then: 'C' }
        ],
        default: 'D'
      }
    }
  }}
]);`,
          quiz: {
            question: 'MongoDB $facet stage kya enable karta hai?',
            options: ['Single document ko multiple parts mein split karna', 'Ek aggregation pipeline mein multiple sub-pipelines simultaneously run karna', 'Indexes create karna', 'Documents delete karna'],
            answer: 'Ek aggregation pipeline mein multiple sub-pipelines simultaneously run karna',
            explanation: '$facet se ek single pass mein multiple independent aggregations simultaneously ho sakti hain — dashboard analytics ke liye perfect!'
          },
          summary: ['$facet se multi-dimensional analytics ek query mein possible hai', '$addFields se computed/derived fields add hote hain', '$bucket se continuous data ranges mein group hota hai'],
          flashcard: { q: '$push aur $addToSet mein kya fark hai $group mein?', a: '$push sab values array mein add karta hai (duplicates allowed). $addToSet sirf unique values add karta hai (set semantics — no duplicates).' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: MONGOOSE ODM
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Mongoose ODM — Schemas, Models & Middleware',
      lessons: [
        {
          id: 'mongoose-schema-model',
          title: 'Mongoose Schemas, Models & CRUD',
          emoji: '🦕',
          xpReward: 45,
          badgeName: 'Mongoose Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Raw MongoDB driver use karna mushkil hai! Mongoose se schemas, validation, middleware, virtual fields — sab easy ho jaata hai! 🦕"',
            hint: '💡 Masti Sir: "{ timestamps: true } Schema option add karo — automatically createdAt aur updatedAt fields manage hoti hain!"',
            success: '🥳 Masti Sir: "Mongoose Schema + Model perfectly configured! Database layer ekdum clean aur type-safe hai 🔥"',
            mistake: '😅 Masti Sir: "required: true aur unique: true dono alag hain! required = field hona chahiye, unique = duplicate nahi hona chahiye database mein!"'
          },
          englishDef: 'Mongoose provides a schema-based solution to model application data in MongoDB. Schemas define document structure, type validation, default values, and virtual properties. Models are constructors that allow creating, querying, updating, and deleting documents.',
          hinglishExplain: 'Mongoose = MongoDB ka ORM/ODM. Schema se document structure define karo (field types, validation, defaults). Model from schema banao. Model se CRUD operations karo: Model.create(), Model.find(), Model.findByIdAndUpdate(), Model.deleteOne().',
          code: `const mongoose = require('mongoose');

// 1. Define Schema
const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'],
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  description: { type: String, required: true },
  price: { 
    type: Number, 
    required: true,
    min: [0, 'Price cannot be negative'],
    default: 0
  },
  category: { 
    type: String, 
    enum: ['frontend', 'backend', 'database', 'programming'],
    required: true
  },
  instructor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  tags: [String],
  isPublished: { type: Boolean, default: false },
  enrolledCount: { type: Number, default: 0 }
}, { 
  timestamps: true,  // Auto-adds createdAt, updatedAt
  versionKey: false  // Removes __v field
});

// 2. Virtual field (not stored in DB)
courseSchema.virtual('formattedPrice').get(function() {
  return \`₹\${this.price.toLocaleString()}\`;
});

// 3. Instance method
courseSchema.methods.isAffordable = function() {
  return this.price < 1000;
};

// 4. Static method
courseSchema.statics.findByCategory = function(category) {
  return this.find({ category, isPublished: true });
};

// 5. Create Model
const Course = mongoose.model('Course', courseSchema);

// 6. CRUD Operations
async function courseOperations() {
  // Create
  const course = await Course.create({
    title: 'React Masterclass',
    price: 999,
    category: 'frontend',
    instructor: userId
  });
  
  // Read with populate
  const courses = await Course.find({ isPublished: true })
    .populate('instructor', 'name email')
    .sort('-createdAt')
    .limit(10)
    .lean();
  
  // Update
  const updated = await Course.findByIdAndUpdate(
    courseId,
    { $set: { price: 799 }, $inc: { enrolledCount: 1 } },
    { new: true, runValidators: true }
  );
  
  // Delete
  await Course.findByIdAndDelete(courseId);
}`,
          quiz: {
            question: 'Mongoose mein `{ new: true }` findByIdAndUpdate mein kya karta hai?',
            options: ['Naya document create karta hai', 'Update se pehle wala document return karta hai', 'Update ke baad updated document return karta hai', 'Validation skip karta hai'],
            answer: 'Update ke baad updated document return karta hai',
            explanation: 'By default findByIdAndUpdate update se pehle wala document return karta hai. { new: true } se updated document milta hai.'
          },
          summary: ['Mongoose Schema document structure aur validation define karta hai', 'Virtual fields computed properties hain jo DB mein store nahi hote', 'timestamps: true automatically createdAt/updatedAt manage karta hai'],
          flashcard: { q: '.lean() kab use karo Mongoose mein?', a: 'Read-only queries mein — plain JS object milta hai, Mongoose Document nahi. Much faster because no Mongoose overhead. populate() ke baad lean() nahi hota.' }
        },
        {
          id: 'mongoose-middleware-hooks',
          title: 'Mongoose Middleware, Hooks & Query Helpers',
          emoji: '🔗',
          xpReward: 45,
          badgeName: 'Hook Expert',
          englishDef: 'Mongoose middleware (pre/post hooks) allows executing code before or after document operations (save, validate, remove, find). Pre hooks can modify documents before saving. Post hooks run after operations complete.',
          hinglishExplain: 'Mongoose middleware = lifecycle hooks. pre("save") se document save hone se pehle kuch karo (jaise password hash karo). post("save") save ke baad kuch karo (jaise email send karo). Query middleware bhi hoti hai — find se pehle filter lagao.',
          code: `const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  role: { type: String, enum: ['admin', 'student'], default: 'student' },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// 1. Pre-save hook — Hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash if password field was modified
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// 2. Post-save hook — Log after user creation
userSchema.post('save', function(doc) {
  console.log(\`User \${doc.email} saved to database\`);
});

// 3. Pre-find hook — Never return inactive users
userSchema.pre(/^find/, function(next) {
  this.find({ isActive: { $ne: false } });
  next();
});

// 4. Pre-findOneAndUpdate — Run validators on update
userSchema.pre('findOneAndUpdate', function(next) {
  this.setOptions({ runValidators: true, new: true });
  next();
});

// 5. Instance method — Compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// 6. Query Helper — Chainable query method
userSchema.query.byRole = function(role) {
  return this.find({ role });
};

// Usage: User.find().byRole('admin').limit(10)

const User = mongoose.model('User', userSchema);`,
          quiz: {
            question: 'Mongoose pre("save") hook mein `this.isModified("password")` kyu check karte hain?',
            options: ['Performance ke liye', 'Sirf modified password fields ko hash karne ke liye — har update pe re-hash nahi hona chahiye', 'Validation ke liye', 'Async handling ke liye'],
            answer: 'Sirf modified password fields ko hash karne ke liye — har update pe re-hash nahi hona chahiye',
            explanation: 'Agar already hashed password ko dobara hash karo toh password corrupt ho jaata hai. isModified check ensure karta hai sirf fresh/changed passwords hash hote hain.'
          },
          summary: ['Pre hooks operations se pehle run hote hain', 'Post hooks operations ke baad run hote hain', 'Query middleware find se pehle automatic filters add kar sakti hai'],
          flashcard: { q: 'Mongoose middleware mein next() call karna kyu zaroori hai?', a: 'next() call na karne se Mongoose operation hang ho jaata hai — document save nahi hogi. Error hone par next(err) call karo.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: INDEXES & PERFORMANCE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: MongoDB Indexes — Compound, Text, TTL & Partial',
      lessons: [
        {
          id: 'mongo-indexes-mastery',
          title: 'Index Types — Single, Compound, Text, TTL & Geospatial',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Index Optimizer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Index na hone pe query O(n) sab documents scan karta hai! Sahi index se O(log n) — 100x faster! ⚡"',
            hint: '💡 Masti Sir: "Explain().executionStats() se query plan dekhao! COLLSCAN = no index (bad), IXSCAN = index used (good)!"',
            success: '🥳 Masti Sir: "Index lagaane ke baad query 50ms se 2ms aa gayi! Production speed! 🔥"',
            mistake: '😅 Masti Sir: "Har field pe index mat lagao! Write operations slow ho jaati hain — sirf query-heavy fields pe lagao!"'
          },
          englishDef: 'MongoDB indexes speed up query execution by creating data structures that enable efficient lookups. Types: Single field, Compound (multiple fields), Text (full-text search), TTL (auto-expiry), Partial (subset), Sparse (only non-null), Geospatial (location queries).',
          hinglishExplain: 'Indexes = book ki index page ki tarah. Bina index ke MongoDB har document scan karta hai (Collection Scan). Index se direct relevant documents pe jump hota hai. Compound indexes multiple fields ke combination pe kaam karte hain.',
          code: `// 1. Single Field Index
db.courses.createIndex({ category: 1 }); // 1=ascending, -1=descending

// 2. Compound Index (ESR Rule: Equality, Sort, Range)
db.courses.createIndex({ 
  category: 1,    // Equality first
  price: 1,       // Sort next
  createdAt: -1   // Range last
}, { name: 'courses_category_price_date' });

// 3. Unique Index
db.users.createIndex({ email: 1 }, { unique: true });

// 4. Text Index for full-text search
db.courses.createIndex({ 
  title: 'text', 
  description: 'text',
  tags: 'text'
}, {
  weights: { title: 10, description: 5, tags: 1 }, // Priority
  name: 'courses_text_search'
});

// Full text search query
db.courses.find(
  { $text: { $search: 'react hooks typescript' } },
  { score: { $meta: 'textScore' } }
).sort({ score: { $meta: 'textScore' } });

// 5. TTL Index (auto-delete after 24 hours)
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }
);

// 6. Partial Index (only index documents matching filter)
db.courses.createIndex(
  { price: 1 },
  { partialFilterExpression: { isPublished: true } }
);

// 7. Analyze query performance
db.courses.find({ category: 'backend' }).explain('executionStats');
// Look for: totalDocsExamined vs totalDocsReturned
// IXSCAN = Good! COLLSCAN = Add index!`,
          interviewQuestions: [
            'MongoDB mein ESR (Equality, Sort, Range) rule compound index ke liye kya hai?',
            'TTL index ka use case kya hai?'
          ],
          quiz: {
            question: 'MongoDB explain() mein "COLLSCAN" stage ka kya matlab hai?',
            options: ['Index use hua — fast', 'Poori collection scan hui — slow, no index used', 'Data corrupt hai', 'Query syntax galat hai'],
            answer: 'Poori collection scan hui — slow, no index used',
            explanation: 'COLLSCAN = Collection Scan = har document check hua. Large collections mein extremely slow. Index add karo aur IXSCAN (Index Scan) achieve karo.'
          },
          summary: ['Indexes queries drastically fast karte hain', 'Compound index ESR (Equality → Sort → Range) order follow kare', 'TTL indexes se auto-expiry implement hoti hai (sessions, OTPs)'],
          flashcard: { q: 'Zyada indexes ke kya disadvantages hain?', a: 'Write operations slow hoti hain kyunki har insert/update/delete pe indexes bhi update hote hain. Storage bhi zyada consume hota hai.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: MONGODB ATLAS & PRODUCTION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: MongoDB Atlas, Security & Production Architecture',
      lessons: [
        {
          id: 'mongo-atlas-production',
          title: 'MongoDB Atlas — Cloud Setup, Security & Connection',
          emoji: '☁️',
          xpReward: 40,
          badgeName: 'Cloud DBA',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Local MongoDB production ke liye nahi! MongoDB Atlas cloud database use karo — managed, scalable, secure! ☁️"',
            hint: '💡 Masti Sir: "Atlas IP Whitelist mein sirf zaroori IPs allow karo! 0.0.0.0/0 kabhi production mein mat karo — security risk!"',
            success: '🥳 Masti Sir: "Atlas cluster perfectly configured! Automatic backups, monitoring, aur global replication — enterprise-grade! 🔥"',
            mistake: '😅 Masti Sir: "Connection string mein username/password `.env` mein raho! Kabhi code mein hardcode mat karo!"'
          },
          englishDef: 'MongoDB Atlas is a fully managed cloud database service. It provides automatic scaling, backup, monitoring, global distribution, and built-in security (encryption, IP whitelisting, field-level encryption).',
          hinglishExplain: 'MongoDB Atlas = AWS/GCP/Azure pe managed MongoDB. Koi server setup nahi, koi maintenance nahi. Free tier available. Connection string se Node.js se connect karo. IP whitelist, database user, network access sab Atlas dashboard se manage hota hai.',
          code: `// 1. Install Mongoose
// npm install mongoose

// 2. Connect to MongoDB Atlas
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Connection pool settings
      maxPoolSize: 10,       // Max concurrent connections
      minPoolSize: 5,        // Keep minimum connections alive
      socketTimeoutMS: 45000, // Socket timeout
      serverSelectionTimeoutMS: 5000, // Server selection timeout
    });
    
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
    
    // Connection events
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB Disconnected!');
    });
    
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;

// 3. .env file
// MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/codemasti?retryWrites=true&w=majority

// 4. Graceful shutdown
process.on('SIGTERM', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed on SIGTERM');
  process.exit(0);
});

// 5. Connection health check endpoint
app.get('/health', async (req, res) => {
  const dbStatus = mongoose.connection.readyState;
  // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
  res.json({
    status: dbStatus === 1 ? 'ok' : 'degraded',
    database: dbStatus === 1 ? 'connected' : 'disconnected',
    uptime: process.uptime()
  });
});`,
          quiz: {
            question: 'MongoDB Atlas mein maxPoolSize kyu configure karte hain?',
            options: ['Speed increase karne ke liye', 'Concurrent database connections ki max limit set karne ke liye — DB overload prevent hota hai', 'Memory usage control karne ke liye', 'Index performance ke liye'],
            answer: 'Concurrent database connections ki max limit set karne ke liye — DB overload prevent hota hai',
            explanation: 'Connection pool se har request pe naya connection nahi banta — connections reuse hote hain. maxPoolSize limit karta hai kitni concurrent connections DB pe ho sakti hain.'
          },
          summary: ['MongoDB Atlas fully managed cloud database hai', 'Connection pooling performance aur resource management ke liye zaroori hai', 'Environment variables mein connection credentials rakhna mandatory security practice hai'],
          flashcard: { q: 'MongoDB Atlas free tier mein kya milta hai?', a: '512MB storage, shared cluster, basic monitoring — perfect for development aur learning. Production ke liye M10+ cluster recommend hai.' }
        },
        {
          id: 'mongo-final-project',
          title: 'Complete MongoDB Production Architecture — CodeMasti LMS',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'MongoDB Expert',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "FINAL BOSS! Sab kuch ek mein — CRUD, Aggregation, Indexes, Mongoose, Atlas, Transactions! MongoDB Master bano! 🏆"',
            hint: '💡 Masti Sir: "Production MongoDB = Atlas + Indexes + Mongoose + Connection Pooling + Error Handling + Monitoring. Sab check karo!"',
            success: '🥳 Masti Sir: "MONGODB EXPERT CERTIFICATE! Tum database engineering ke master ho! Full-stack koi bhi project banao confidently! 🎉🔥"',
            mistake: '😅 Masti Sir: "Production mein Mongoose autoIndex:false set karo aur manually indexes create karo — startup pe index creation avoid karo!"'
          },
          englishDef: 'Production MongoDB architecture for a Learning Management System includes: properly indexed schemas, aggregation pipelines for analytics, transactions for financial operations, Atlas for cloud hosting, and Mongoose ODM for application layer.',
          hinglishExplain: 'Complete LMS database architecture: Users, Courses, Enrollments, Progress, Payments — sab ke schema, relationships, indexes, aur aggregation queries. Real production-grade MongoDB application.',
          code: `// Complete LMS MongoDB Schema Architecture

// 1. User Schema
const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ['student', 'instructor', 'admin'] },
  purchasedCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
  xpPoints: { type: Number, default: 0 },
  streak: { type: Number, default: 0 }
}, { timestamps: true });

// 2. Course Schema with pre-populated stats
const courseSchema = new Schema({
  title: { type: String, index: true },
  instructor: { type: Schema.Types.ObjectId, ref: 'User' },
  price: Number,
  category: { type: String, index: true },
  rating: { $avg: 0 },
  enrolledCount: { type: Number, default: 0 }
}, { timestamps: true });
courseSchema.index({ category: 1, price: 1 });
courseSchema.index({ title: 'text', description: 'text' });

// 3. Enrollment with Progress
const enrollmentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  course: { type: Schema.Types.ObjectId, ref: 'Course', index: true },
  completedLessons: [String],
  progressPercent: { type: Number, default: 0 },
  certificate: { type: String, default: null }
}, { timestamps: true });
enrollmentSchema.index({ user: 1, course: 1 }, { unique: true });

// 4. Student Dashboard Aggregation
const studentDashboard = await Enrollment.aggregate([
  { $match: { user: userId } },
  { $lookup: { from: 'courses', localField: 'course', foreignField: '_id', as: 'courseDetails' } },
  { $unwind: '$courseDetails' },
  { $group: {
    _id: '$user',
    totalCourses: { $sum: 1 },
    avgProgress: { $avg: '$progressPercent' },
    completedCourses: { $sum: { $cond: [{ $eq: ['$progressPercent', 100] }, 1, 0] } },
    totalTimeSpent: { $sum: '$timeSpentMinutes' }
  }}
]);`,
          interviewQuestions: [
            'MongoDB mein embedding vs referencing data kab choose karte hain?',
            'Large-scale LMS ke liye MongoDB schema design approach kya hogi?',
            'MongoDB transactions kab use karte hain relational database ki tarah?'
          ],
          quiz: {
            question: 'MongoDB mein data embedding kab prefer karte hain referencing ke bjaaye?',
            options: ['Hamesha embedding better hai', 'Jab data hamesha saath access hota ho aur sub-documents frequently update na hote hoon (1:1 ya 1:few relationships)', 'Jab datasets large hoon', 'Jab unique constraint chahiye ho'],
            answer: 'Jab data hamesha saath access hota ho aur sub-documents frequently update na hote hoon (1:1 ya 1:few relationships)',
            explanation: 'Embedding: single read operation, atomic updates. Referencing: data independently update ho sake, many-to-many relationships, large sub-documents. MongoDB: embed unless compelling reason to reference.'
          },
          summary: ['MongoDB Course 100% Complete! 🏆', 'CRUD, Aggregation Pipelines, Mongoose ODM, Indexes, Atlas, Transactions — sab master hua!', 'Next: Full-stack projects mein MongoDB use karo!'],
          flashcard: { q: 'MongoDB ka 16MB document size limit kaise handle karte hain?', a: 'GridFS use karo large files (images, videos) ke liye. Regular documents mein large arrays aur deeply nested structures avoid karo — referencing use karo.' },
          funFact: '🎉 MongoDB duniya ke 12,000+ companies use karte hain including Uber, eBay, Bosch, Forbes, aur The Weather Channel! 5 billion devices MongoDB-backed applications se data access karte hain daily!'
        }
      ]
    }
  ]
}

export default mongodbCourse
