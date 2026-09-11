import { hrInterviewMasteryChapters } from './hrinterview/mastery.js'

export const hrinterviewCourse = {
  id: 'hrinterview',
  title: 'HR Interview',
  description: 'Behavioral interviews, STAR method, salary negotiation, leadership stories, aur cultural fit questions master karo.',
  icon: '🤝',
  category: 'interview',
  certificateName: 'HR INTERVIEW',
  topicsCount: 90,
  practiceCount: 65,
  projectsCount: 4,
  hoursEstimate: 28,
  level: 'Beginner to Advanced',
  achievements: [
    { id: 'hr-explorer', title: 'HR Explorer', icon: '🏆', xp: 50, desc: 'Started HR interview preparation' },
    { id: 'hr-pitch-master', title: 'Pitch Master', icon: '🏆', xp: 100, desc: 'Built a clear self introduction' },
    { id: 'hr-storyteller', title: 'Behavioral Storyteller', icon: '🏆', xp: 150, desc: 'Mastered STAR stories' },
    { id: 'hr-communicator', title: 'Professional Communicator', icon: '🏆', xp: 150, desc: 'Handled workplace scenarios' },
    { id: 'hr-ready', title: 'HR Interview Ready', icon: '🏆', xp: 250, desc: 'Completed the final mock interview' }
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: COMMON HR QUESTIONS & PITCH
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Elevating Your Self Pitch & Core Questions',
      lessons: [
        {
          id: 'hr-elevator-pitch',
          title: 'The 90-Second Self Pitch ("Tell Me About Yourself")',
          emoji: '🙋',
          xpReward: 35,
          badgeName: 'Pitch Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Technical round clear ho gaya par HR round mein confuse ho gaye toh offer letter nahi milega! Storytelling seekho 😎"',
            hint: '🤦 Masti Sir: "Apni poori janam-kundali mat sunana! Present -> Past -> Future formula follow karo!"',
            success: '🥳 Masti Sir: "Shaandar! Interviewer impress ho gaya aur offer letter nikal raha hai 🔥"',
            mistake: '😅 Masti Sir: "Weakness mein bol diya: \'Main bohot lazy hoon\'? Reject ho jaoge 😂 Constructive weakness batao!"'
          },
          englishDef: '"Tell me about yourself" is the foundational icebreaker of every interview. The most effective framework is Present (current role/skills) -> Past (key accomplishments/projects) -> Future (why this company and role match your trajectory).',
          hinglishExplain: 'Ye sawaal interview ka direction set karta hai. Aapko 90-120 seconds ke andar apna professional summary dena hota hai: Abhi aap kya karte ho (skills), pehle kya impact create kiya (real projects with numbers), aur aage is company mein kya value add karoge.',
          funnyExample: {
            scenario: 'Movie Trailer vs Boring History Book:\n- Boring Answer: "Mera naam Kabir hai... main 10th mein tha... phir 12th kiya... phir college gaya... phir coding dekha... 🥱"\n- Blockbuster Trailer: "Main Fullstack Developer hoon jisme React aur Node.js meri superpower hai. Maine ek project banaya jisme 5,000 active users hain aur page load 40% fast kiya! 🚀"',
            punchline: 'Self Pitch = Aapki professional life ka blockbuster trailer!'
          },
          visualDiagram: {
            title: 'Present-Past-Future Formula',
            nodes: ['Present: Current Stack & Focus (30s)', 'Past: Tangible Project Achievements & Metrics (40s)', 'Future: Why this company matches your vision (20s)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'What Interviewers Evaluate:',
            steps: ['Communication clarity and conciseness', 'Confidence and enthusiasm for technology', 'Alignment with team culture and role expectations']
          },
          code: `// Template: Present -> Past -> Future Professional Pitch

/*
"Namaste! I am Kabir Sharma, a Full-Stack Web Developer specializing in the MERN stack and scalable cloud systems.

Currently, I build high-performance web applications using React, Next.js, and Node.js with a strong focus on clean architecture and responsive UI.

Recently, I engineered the 'CodeMasti' interactive learning platform featuring a custom code editor, real-time quizzes, and RESTful APIs, supporting over 2,000 daily active learners with 99.9% uptime.

I am excited about this role at [Company Name] because your focus on building developer-first developer tools aligns perfectly with my passion for developer productivity and scalable systems."
*/`,
          codeBreakdown: [
            { part: 'Present: "I am a Full-Stack Developer..."', label: 'Clear immediate positioning and core technical stack', color: '#3b82f6' },
            { part: 'Past: "Engineered CodeMasti platform with 2,000 users"', label: 'Quantifiable metrics demonstrating real-world impact', color: '#10b981' },
            { part: 'Future: "Excited about Company Name because..."', label: 'Tailored company-specific alignment proving genuine interest', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Resume line-by-line read karna without adding personal narrative',
            '❌ Generic baatein karna without mentioning specific metrics (users, speed improvements)'
          ],
          miniChallenge: 'Apne top 1 project ko Present-Past-Future format mein 3 sentences mein summarize karo.',
          quiz: {
            question: '"Tell me about yourself" answer ka ideal time duration kitna hona chahiye?',
            options: ['30 seconds', '90 seconds to 2 minutes', '10 minutes', 'Jitna lamba bol sakein'],
            answer: '90 seconds to 2 minutes',
            explanation: '90 seconds se 2 minutes ideal time hota hai jo concise, impactful aur engaging rehta hai bina interviewer ko bore kiye.'
          },
          summary: ['Present-Past-Future formula structured clarity deta hai', 'Metrics (numbers, percentages) credibility build karte hain', 'Company-specific research alignment prove karti hai'],
          flashcard: { q: '"Why should we hire you?" ka best answer strategy kya hai?', a: 'Job description ki 2-3 main requirements ko apne past successful projects aur unique problem-solving strengths se directly map karo.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: BEHAVIORAL QUESTIONS (STAR METHOD)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: The STAR Method for Behavioral Questions',
      lessons: [
        {
          id: 'hr-star-method',
          title: 'The STAR Method (Situation, Task, Action, Result)',
          emoji: '⭐',
          xpReward: 40,
          badgeName: 'Behavioral Champion',
          englishDef: 'The STAR method (Situation, Task, Action, Result) is a structured behavioral interview framework designed to provide concrete, story-driven examples of past performance and conflict resolution.',
          hinglishExplain: 'Jab HR pooche: "Tell me about a time when you faced a major bug or deadline crisis", tab hawa mein baatein nahi karni hoti. STAR formula use karo: Situation (kya scene tha), Task (kya kaam karna tha), Action (tumne specifically kya kiya), Result (kya zabardast result aaya with numbers).',
          funnyExample: {
            scenario: 'Movie Climax Storytelling:\n- S (Situation): Production server crash ho gaya launch ke 2 ghante pehle! 🔥\n- T (Task): Mujhe bug dhoondh kar deploy karna tha.\n- A (Action): Maine logs analyze kiye, memory leak patch kiya, aur automated tests run kiye.\n- R (Result): 15 minute mein server live ho gaya aur company ne $50,000 bachaye! 🦸',
            punchline: 'STAR = Climax wali hero story with proof!'
          },
          visualDiagram: {
            title: 'STAR Method Framework',
            nodes: ['S - Situation (Context & Challenge)', 'T - Task (Your specific goal)', 'A - Action (Steps you uniquely took)', 'R - Result (Positive quantifiable outcome)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Behavioral Competencies Assessed:',
            steps: ['Problem solving under pressure', 'Team collaboration and ownership', 'Accountability and data-driven results']
          },
          code: `// Behavioral Story Blueprint (STAR Framework)

// Situation:
// "During the final release week of our web app, the database response times spiked by 400% due to unindexed queries."

// Task:
// "As the lead developer, my goal was to bring query latency below 50ms before the public launch."

// Action:
// "I ran EXPLAIN ANALYZE on slow query logs, identified missing composite indexes on user_id and created_at, added Redis caching for read-heavy routes, and load-tested with k6."

// Result:
// "Query latency dropped by 85% (from 400ms to 35ms), and the platform handled 10,000 concurrent users during launch day without a single crash."`,
          codeBreakdown: [
            { part: 'Situation & Task', label: 'Sets stakes, context and measurable goal', color: '#3b82f6' },
            { part: 'Action', label: 'Emphasizes \'I\' actions rather than passive \'we\'', color: '#10b981' },
            { part: 'Result: "dropped by 85% to 35ms"', label: 'Quantifiable proof validating technical excellence', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ "Action" part mein sirf team ki baat karna ("Humne kiya") without highlighting your individual role',
            '❌ "Result" part skip kar dena ya bina kisi outcome ke kahani khatam karna'
          ],
          miniChallenge: 'Ek time jab kisi teammate se technical disagreement hua ho, use STAR method se frame karo.',
          quiz: {
            question: 'STAR behavioral interview method mein "A" ka kya matlab hota hai?',
            options: ['Analysis', 'Action', 'Agreement', 'Assessment'],
            answer: 'Action',
            explanation: 'Action un specific steps aur initiatives ko describe karta hai jo aapne problem solve karne ke liye personally execute kiye.'
          },
          summary: ['STAR method structured narrative storytelling provide karta hai', 'Action mein personal technical ownership highlight karo', 'Result mein measurable business aur performance impact include karo'],
          flashcard: { q: 'Salary negotiation karte time sabse pehla rule kya hota hai?', a: 'Pehle market research karke range pata karein, aur immediate accept karne ke bajaye counter offer ya entire compensation package (equity, bonuses) consider karein.' }
        }
      ]
    },
    ...hrInterviewMasteryChapters
  ]
}

export default hrinterviewCourse
