export const cssCourse = {
  id: 'css',
  title: 'CSS',
  description: 'Boring HTML ko stunning, responsive visual masterpiece mein badlo. Selectors, Box Model, Flexbox, Grid, Animations, Variables aur Projects Masti Sir ke saath seekho!',
  icon: '🎨',
  category: 'frontend',
  certificateName: 'CSS',
  topicsCount: 30,
  practiceCount: 30,
  projectsCount: 3,
  hoursEstimate: 16,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: CSS BASICS & SELECTORS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: CSS Basics & Selectors',
      lessons: [
        // ─── LESSON 1: INTRODUCTION & SYNTAX ──────────────
        {
          id: 'css-intro',
          title: 'CSS Introduction & Syntax',
          emoji: '🎨',
          xpReward: 25,
          badgeName: 'CSS Starter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "HTML skeleton hai toh CSS uske fancy designer kapde! Chalo webpage ko hero banate hain! Selector pakdo, property do, value set karo aur magic dekho 😎"',
            hint: '💡 Masti Sir: "CSS rule ka format hamesha selector { property: value; } hota hai. Semicolon ; lagana mat bhoolna!"',
            success: '🥳 Masti Sir: "Zabardast! Pehla CSS rule create ho gaya! Ab styling ki power tumhare haath mein hai 🔥"',
            mistake: '😅 Masti Sir: "Semicolon (;) bhool gaye? CSS error nahi degi, par style bhi apply nahi hoga!"'
          },
          englishDef: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and design of a document written in HTML. A CSS rule consists of a Selector targeting elements and a Declaration Block containing property-value pairs.',
          hinglishExplain: 'CSS ka kaam hai HTML elements ko sundar aur styled banana. Sabse pehle aap Selector se element ko choose karte ho (jaise h1 ya .btn), aur phir curly braces `{}` ke andar properties likhte ho jaise `color: red;` ya `font-size: 20px;`.',
          storyExplain: 'Socho HTML ek nayi car ka chassis aur engine hai. CSS us car ka metallic paint, leather seats, alloy wheels aur LED lights hai. Bina CSS ke car chalegi toh sahi, lekin koi uski taraf dekhega nahi! 🏎️✨',
          funnyExample: {
            scenario: 'Tumne dost ko bola: "Wo laal shirt wale ko bulao."\n- Dost = Browser\n- "Laal shirt wala" = Selector (.red-shirt)\n- "Bulao" = Action / Styling apply karo!\nSahi selector se sahi element style hota hai! 😂',
            punchline: 'CSS = Webpage ka beauty parlour!'
          },
          memoryTrick: 'CSS Formula: `Selector { Property: Value; }`\n- Inline: style="..."\n- Internal: <style>...</style>\n- External: <link rel="stylesheet" href="style.css"> (Best practice)',
          visualDiagram: {
            title: 'CSS Syntax Structure',
            nodes: ['Selector (h1, .card)', 'Declaration Block { ... }', 'Property (color, font-size)', 'Value (#3b82f6, 16px)', 'Styled Element on Screen'],
            type: 'flow'
          },
          code: `/* 1. Element Selector */
h1 {
  color: #3b82f6;
  font-size: 32px;
  text-align: center;
}

/* 2. Paragraph Styling */
p {
  color: #475569;
  font-size: 16px;
  line-height: 1.6;
}`,
          codeBreakdown: [
            { part: 'h1, p', label: 'Selectors — Target HTML elements', color: '#ef4444' },
            { part: 'color, font-size', label: 'Properties — Kya change karna hai', color: '#3b82f6' },
            { part: '#3b82f6, 32px', label: 'Values — Kaisa banana hai', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Property ke baad colon : bhool jana',
            '❌ Value ke baad semicolon ; na lagana',
            '❌ HTML file mein <style> tag ke bahar CSS likh dena'
          ],
          proTips: [
            '💡 Hamesha External CSS (`<link rel="stylesheet">`) use karo for clean code separation',
            '💡 CSS file ko lowercase mein name karo jaise `style.css`'
          ],
          interviewQuestions: [
            'CSS kya hai aur iske 3 types (Inline, Internal, External) mein kya farak hai?',
            'CSS rule ke main components kya hote hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS mein property aur value ke beech kaunsa symbol use hota hai?',
            options: [': (Colon)', '= (Equals)', '- (Hyphen)', '; (Semicolon)'],
            answer: ': (Colon)',
            explanation: 'CSS mein Property aur Value ke beech colon `:` lagta hai jaise `color: blue;`.'
          },
          summary: ['CSS HTML presentation ko style karta hai', 'Syntax: Selector { Property: Value; }', 'External CSS best practice hai'],
          flashcard: { q: 'CSS ka full form kya hai?', a: 'Cascading Style Sheets' },
          funFact: '🎉 Fun Fact: CSS ko 1994 mein Håkon Wium Lie ne invent kiya tha jab wo Tim Berners-Lee ke saath CERN mein kaam kar rahe the!',
          challenge: {
            instruction: 'Ek h1 selector banao jisme color #22c55e aur font-size 28px ho.',
            initialCode: '/* CSS yahan likho */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('h1') && n.includes('color:') && n.includes('font-size:')
            },
            successMessage: 'First CSS Rule Mastered! +25 XP 🎨'
          }
        },

        // ─── LESSON 2: SELECTORS ──────────────────────────
        {
          id: 'css-selectors',
          title: 'CSS Selectors & Specificity',
          emoji: '🎯',
          xpReward: 25,
          badgeName: 'Target Sniper',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Selectors — Target pe teer maarna! 🏹\n\nClass selector ke aage dot (.) aur ID ke aage hash (#)!\nGalat selector lagaya toh padosi ka element style ho jayega! 😂"',
            hint: '💡 Masti Sir: "Class reusable hoti hai (.card), ID unique hoti hai (#hero)!"',
            success: '🥳 Masti Sir: "Selectors Sniper! Accurate targeting unlocked! 🔥"',
            mistake: '😅 Masti Sir: "Class selector mein dot . lagana bhool gaye? .btn likho, sirf btn nahi!"'
          },
          englishDef: 'CSS Selectors are patterns used to select and target the HTML elements you want to style. Common types include Element selectors, Class selectors (.), ID selectors (#), Universal selectors (*), and Attribute selectors ([type="text"]). Specificity determines which rule wins when multiple clash.',
          hinglishExplain: 'Selectors browser ko batate hain ki kis HTML tag par styling lagani hai. Element selector sabhi tags ko target karta hai (`p`), Class selector dot `.` ke saath multiple elements par lagta hai (`.card`), aur ID selector hash `#` ke saath sirf ek unique element par lagta hai (`#navbar`).',
          storyExplain: 'Socho ek school assembly:\n- `student` (Element) = Sabhi students\n- `.blue-house` (Class) = Blue house ke 50 students\n- `#head-boy` (ID) = Sirf ek unique Head Boy!\nSpecificity ka rule: ID > Class > Element! 🎯',
          code: `/* 1. Universal Selector (Reset) */
* {
  margin: 0;
  padding: 0;
}

/* 2. Element Selector */
p {
  color: #334155;
}

/* 3. Class Selector (Dot .) */
.highlight {
  background-color: #fef08a;
  padding: 4px 8px;
}

/* 4. ID Selector (Hash #) */
#main-header {
  background-color: #0f172a;
  color: #ffffff;
}

/* 5. Grouping Selectors */
h1, h2, h3 {
  font-family: sans-serif;
}`,
          codeBreakdown: [
            { part: '*', label: 'Universal Selector — Sabhi elements ko select karta hai', color: '#8b5cf6' },
            { part: '.highlight', label: 'Class Selector (.) — Multiple elements par reusable', color: '#10b981' },
            { part: '#main-header', label: 'ID Selector (#) — Single unique element', color: '#ef4444' },
            { part: 'h1, h2, h3', label: 'Grouping — Comma se multiple tags ko ek sath style karo', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Class ke aage dot . bhool jana (`my-class { }`)',
            '❌ Ek page par duplicate IDs use karna',
            '❌ ID selector ko unnecessarily over-use karna (CSS specificity issue)'
          ],
          proTips: [
            '💡 90% styling ke liye Classes use karo — ID sirf unique anchors ya JS hooks ke liye rakho',
            '💡 CSS Specificity order: Inline Style (1000) > ID (100) > Class (10) > Element (1)'
          ],
          interviewQuestions: [
            'Class aur ID selector mein kya difference hai?',
            'CSS Specificity kya hoti hai aur rule clash hone par kaun jeet-ta hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Class selector ko target karne ke liye kaunsa symbol use hota hai?',
            options: ['. (Dot)', '# (Hash)', '* (Asterisk)', '@ (At)'],
            answer: '. (Dot)',
            explanation: 'Class selector ke aage dot `.` lagta hai jaise `.btn`, jabki ID ke aage hash `#` lagta hai.'
          },
          summary: ['Element selector sabhi tags par lagta hai', 'Class selector (.) reusable group ke liye hota hai', 'ID selector (#) unique element ke liye hota hai'],
          flashcard: { q: 'Specificity order kya hai?', a: 'Inline Style > ID (#) > Class (.) > Element (tag)' },
          funFact: '🎉 Fun Fact: CSS Specificity ko 4 numbers (0,0,0,0) ki tarah calculate kiya jata hai!',
          challenge: {
            instruction: 'Ek class selector `.badge` banao jisme background-color #3b82f6 aur color #ffffff ho.',
            initialCode: '/* CSS Class selector yahan */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.badge') && n.includes('background-color:')
            },
            successMessage: 'Class Selector Mastered! +25 XP 🎯'
          }
        },

        // ─── LESSON 3: COMBINATORS ────────────────────────
        {
          id: 'css-combinators',
          title: 'CSS Combinators',
          emoji: '🔗',
          xpReward: 25,
          badgeName: 'Relation Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Combinators — HTML ke rishte-naate! 👨‍👩‍👧‍👦\n\nParent, child, sibling — kaun kiska beta hai aur kaun kiska bhai!\nSpace, >, +, ~ — chalo seekhein! 😎"',
            hint: '💡 Masti Sir: "Space matlab koi bhi descendant (andar ka koi bhi),\n> matlab sirf direct child!"',
            success: '🥳 Masti Sir: "Combinators Master! Complex element targeting ho gayi aasan! 🔥"',
            mistake: '😅 Masti Sir: "div > p sirf direct child par lagta hai, agar p kisi aur div ke andar hua toh nahi chalega!"'
          },
          englishDef: 'A CSS combinator explains the relationship between selectors. There are four types: Descendant selector (space), Child selector (>), Adjacent sibling selector (+), and General sibling selector (~).',
          hinglishExplain: 'Combinators do ya zyada selectors ke beech ka relation batate hain. `div p` (Space) div ke andar ke sabhi paragraphs ko select karta hai. `div > p` sirf direct child paragraphs ko select karta hai. `h2 + p` h2 ke theek agle paragraph ko select karta hai.',
          storyExplain: 'Family tree socho:\n- `div p` (Descendant) = Dada ji ke sabhi vanshaj (Bete, pote, par-pote).\n- `div > p` (Child) = Dada ji ke sirf direct bete.\n- `h2 + p` (Adjacent Sibling) = Theek bagal wala saga bhai.\n- `h2 ~ p` (General Sibling) = Saare chhote bhai! 🌳',
          code: `/* 1. Descendant Selector (Space) — Sabhi andar wale */
.card p {
  color: #64748b;
}

/* 2. Direct Child Selector (>) — Sirf direct baccha */
.nav-list > li {
  display: inline-block;
}

/* 3. Adjacent Sibling (+) — Theek agla bhai */
h2 + p {
  font-weight: bold;
  color: #0f172a;
}

/* 4. General Sibling (~) — Saare agle bhai */
h2 ~ p {
  line-height: 1.8;
}`,
          codeBreakdown: [
            { part: '.card p', label: 'Descendant (Space) — Any nested child inside .card', color: '#3b82f6' },
            { part: '.nav-list > li', label: 'Direct Child (>) — Only 1 level deep children', color: '#10b981' },
            { part: 'h2 + p', label: 'Adjacent (+) — Immediate next sibling element', color: '#ef4444' },
            { part: 'h2 ~ p', label: 'General (~) — All following siblings', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Descendant space aur direct child `>` mein confuse hona',
            '❌ `+` lagate waqt sochna ki saare siblings select honge (sirf 1st agla hota hai)'
          ],
          proTips: [
            '💡 Navbars mein dropdowns ko style karne ke liye `ul > li` direct child selector best hota hai',
            '💡 Article ke pehle intro paragraph ko style karne ke liye `h1 + p` adjacent selector use hota hai'
          ],
          interviewQuestions: [
            'Descendant selector (space) aur Child selector (>) mein kya farak hai?',
            'Adjacent sibling (+) aur General sibling (~) kab use karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Sirf DIRECT child element ko select karne ke liye kaunsa combinator use hota hai?',
            options: ['> (Greater than)', 'Space', '+ (Plus)', '~ (Tilde)'],
            answer: '> (Greater than)',
            explanation: '`parent > child` sirf direct children ko select karta hai, grand-children ko ignore karta hai.'
          },
          summary: ['Space = Sabhi descendants', '> = Sirf direct children', '+ = Theek agla sibling', '~ = Saare aage wale siblings'],
          flashcard: { q: 'div > p aur div p mein kya difference hai?', a: 'div > p = direct child only. div p = any descendant (deeply nested bhi).' },
          funFact: '🎉 Fun Fact: Modern CSS mein `:has()` selector bhi aa gaya hai jisse Parent selector ki tarah use kar sakte hain!',
          challenge: {
            instruction: 'Ek child selector `.container > p` banao jisme font-size 18px aur color #1e293b ho.',
            initialCode: '/* Combinator yahan likho */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.container') && n.includes('>') && n.includes('p')
            },
            successMessage: 'Combinators Mastered! +25 XP 🔗'
          }
        },

        // ─── LESSON 4: COMMENTS & BEST PRACTICES ──────────
        {
          id: 'css-comments',
          title: 'CSS Comments & Organization',
          emoji: '💬',
          xpReward: 20,
          badgeName: 'Clean Coder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Comments — Future wale tumhare liye notes! 📝\n\n6 mahine baad apna code dekhoge toh samajh nahi aayega agar comments nahi honge! Chalo clean code likhna seekhein! 😎"',
            hint: '💡 Masti Sir: "CSS mein comment /* se shuru aur */ par khatam hota hai! // HTML ya JS wala double slash mat use karna!"',
            success: '🥳 Masti Sir: "Clean Coder Badge Earned! Beautifully organized CSS! 🔥"',
            mistake: '😅 Masti Sir: "CSS mein // comment invalid hai! Hamesha /* comment */ use karo!"'
          },
          englishDef: 'CSS comments are used to explain the code, organize sections of a stylesheet, and make the code more readable and maintainable. Comments are ignored by browsers during rendering and use the /* comment */ syntax.',
          hinglishExplain: 'CSS comments notes hote hain jo browser screen par render nahi karta. Ye developers ke samajhne ke liye hote hain taaki pata chale ki kaunsa section kis cheez ka hai. CSS mein comments `/*` se shuru aur `*/` par close hote hain.',
          code: `/* ══════════════════════════════════
   1. GLOBAL RESET & BASE STYLES
   ══════════════════════════════════ */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ── Typography Section ── */
body {
  font-family: 'Inter', sans-serif;
  color: #1e293b;
}

/* 
   Button Component:
   - Supports .btn-primary and .btn-secondary
*/
.btn-primary {
  background-color: #22c55e; /* Brand Green */
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
}`,
          codeBreakdown: [
            { part: '/* ... */', label: 'Multi-line ya Single-line comment — Browser ise ignore karta hai', color: '#10b981' },
            { part: '/* Brand Green */', label: 'Inline note explaining specific color or purpose', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ JS style `//` use karna — CSS ise parse nahi karti aur niche ka code break ho sakta hai',
            '❌ Comment close karna bhool jana (`/* text` without `*/`)'
          ],
          proTips: [
            '💡 Stylesheet ko sections mein divide karo: Base, Layout, Components, Utilities',
            '💡 VS Code shortcut: `Ctrl + /` (Windows) ya `Cmd + /` (Mac) se auto-comment hota hai'
          ],
          interviewQuestions: [
            'CSS mein comment syntax kya hai?',
            'CSS file ko badi projects mein kaise organize karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS mein valid comment syntax kaunsa hai?',
            options: ['/* Comment */', '// Comment', '<!-- Comment -->', '# Comment'],
            answer: '/* Comment */',
            explanation: 'CSS mein sirf `/* comment */` syntax valid hota hai. `//` JS mein aur `<!-- -->` HTML mein use hota hai.'
          },
          summary: ['CSS comments /* ... */ se likhe jaate hain', 'Browser comments ko ignore karta hai', 'Code readability aur maintenance improve hoti hai'],
          flashcard: { q: 'CSS comment ka syntax kya hai?', a: '/* comment yahan likhein */' },
          funFact: '🎉 Fun Fact: Production mein build tools (jaise Vite) automatically comments remove karke file size chota kar dete hain (Minification)!',
          challenge: {
            instruction: 'Ek valid CSS comment likho aur uske niche `.card` class with padding 16px likho.',
            initialCode: '/* Yahan likho */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('/*') && n.includes('*/') && n.includes('.card')
            },
            successMessage: 'Clean Code Ninja! +20 XP 💬'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: TEXT & FONTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Text & Fonts',
      lessons: [
        // ─── LESSON 5: FONTS ──────────────────────────────
        {
          id: 'css-fonts',
          title: 'CSS Fonts & Web Fonts',
          emoji: '🔤',
          xpReward: 25,
          badgeName: 'Typography Star',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Typography — Website ki aawaz! 🗣️\n\nBoring Times New Roman ko chhodo, Google Fonts lagao jaise Inter aur Poppins!\nFont-family, font-size, font-weight — chalo seekhein! 😎"',
            hint: '💡 Masti Sir: "Font fallback hamesha do: font-family: \'Poppins\', sans-serif; agar Poppins na mili toh generic sans-serif chalegi!"',
            success: '🥳 Masti Sir: "Typography Star! Website ab super modern dikh rahi hai! 🔥"',
            mistake: '😅 Masti Sir: "Font name mein space ho jaise \'Open Sans\', toh quotes lagana zaroori hai!"'
          },
          englishDef: 'CSS Font properties define the typeface, size, weight, and style of text. Key properties include font-family (with fallback generic families like serif, sans-serif, monospace), font-size (px, rem, em), font-weight (100-900, bold), and font-style (italic, normal).',
          hinglishExplain: 'Fonts website ka look and feel decide karte hain. `font-family` se text ka typeface badalte hain (jaise Arial, Inter). `font-size` se size chota-bada karte hain. `font-weight` se text ko patla (300) ya mota (700 bold) karte hain.',
          storyExplain: 'Socho tum newspaper ya wedding card print kar rahe ho:\n- News Headline = Bold, clean sans-serif font (Modern & sharp)\n- Wedding card = Elegant cursive/serif font\n- Code editor = Monospace font jahan har letter ka width same hota hai! 📰✍️',
          code: `/* 1. Google Web Font Integration */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

body {
  /* Font Family with fallback */
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400; /* Regular */
}

h1 {
  font-size: 2.5rem; /* 40px */
  font-weight: 800;   /* Extra Bold */
  font-style: normal;
}

.subtext {
  font-size: 0.875rem; /* 14px */
  font-style: italic;
  font-weight: 300;   /* Light */
}`,
          codeBreakdown: [
            { part: "font-family: 'Poppins', sans-serif", label: 'Primary font and fallback generic family', color: '#3b82f6' },
            { part: 'font-size: 2.5rem', label: 'Scalable relative sizing based on root html size', color: '#10b981' },
            { part: 'font-weight: 800', label: 'Numeric weight: 400=Regular, 600=SemiBold, 700=Bold, 800=ExtraBold', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Fallback font na dena (`font-family: MyFont;` without `sans-serif`)',
            '❌ Fixed px har jagah use karna accessibility ke khilaaf hai — rem use karo'
          ],
          proTips: [
            '💡 Best Modern Web Fonts: Inter, Roboto, Poppins, Outfit, Plus Jakarta Sans',
            '💡 1rem = 16px (default browser size). 1.5rem = 24px, 2rem = 32px'
          ],
          interviewQuestions: [
            'rem aur em units mein kya difference hota hai?',
            'Web safe fonts aur Google Web Fonts mein kya farak hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Agar primary font user ke system mein na ho, toh browser kya use karta hai?',
            options: ['Fallback font (e.g. sans-serif)', 'Error message dikhata hai', 'Text hide kar deta hai', 'Image render karta hai'],
            answer: 'Fallback font (e.g. sans-serif)',
            explanation: '`font-family` list mein aage diye gaye fallback fonts browser sequentially check karke render karta hai.'
          },
          summary: ['font-family typeface set karta hai', 'font-size text ka size define karta hai (rem best practice)', 'font-weight numeric 100-900 hota hai'],
          flashcard: { q: '1rem kitne pixels ke barabar hota hai default?', a: '1rem = 16px default browser settings mein.' },
          funFact: '🎉 Fun Fact: Sans-serif ka matlab French mein "Without Serif" (bina kono wala) hota hai!',
          challenge: {
            instruction: 'Ek h2 rule banao jisme font-family sans-serif, font-size 2rem, aur font-weight 700 ho.',
            initialCode: '/* Font styling yahan */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('h2') && n.includes('font-family:') && n.includes('font-size:')
            },
            successMessage: 'Typography Mastered! +25 XP 🔤'
          }
        },

        // ─── LESSON 6: TEXT FORMATTING & ALIGN ────────────
        {
          id: 'css-text-format',
          title: 'Text Alignment & Formatting',
          emoji: '📑',
          xpReward: 25,
          badgeName: 'Alignment Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Text Alignment — Center karo, Left karo, ya Justify karo! 📑\n\nHero section ka title center mein, article left mein! Line-height se text ko saans lene do! 😎"',
            hint: '💡 Masti Sir: "line-height: 1.6 dene se paragraph padhna 10 guna aasan ho jata hai!"',
            success: '🥳 Masti Sir: "Text alignment & spacing pro! 🔥"',
            mistake: '😅 Masti Sir: "line-height bhool gaye toh text aapas mein chipak jayega!"'
          },
          englishDef: 'CSS Text formatting properties control the visual layout of text lines and paragraphs. Key properties include text-align (left, center, right, justify), line-height (line spacing), letter-spacing (character tracking), and word-spacing.',
          hinglishExplain: '`text-align` se text ko left, center, right ya justify kiya jata hai. `line-height` do lines ke beech ki vertical space hoti hai jisse paragraph padhna aasan banta hai. `letter-spacing` letters ke beech ka gap badhata hai.',
          code: `/* Hero Section Heading */
.hero-title {
  text-align: center;
  letter-spacing: -0.02em; /* Tight modern tracking */
  line-height: 1.2;
}

/* Article Body Paragraph */
.article-body {
  text-align: left;
  line-height: 1.7; /* Comfortable reading */
  letter-spacing: 0.01em;
  word-spacing: 2px;
}

/* Quote Center Aligned */
blockquote {
  text-align: center;
  font-style: italic;
}`,
          codeBreakdown: [
            { part: 'text-align: center', label: 'Horizontal text alignment (left, center, right, justify)', color: '#ef4444' },
            { part: 'line-height: 1.7', label: 'Vertical spacing between lines (1.5 - 1.8 ideal for readability)', color: '#3b82f6' },
            { part: 'letter-spacing: -0.02em', label: 'Character spacing (tracking)', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ text-align ko block element center karne ke liye use karna (margin: 0 auto use karo divs ke liye)',
            '❌ Mobile par `text-align: justify` use karna jisse ajeeb bade gaps ban jaate hain'
          ],
          proTips: [
            '💡 Best reading line-height: 1.5 se 1.7 ke beech',
            '💡 Uppercase badges mein letter-spacing 1px dene se premium look aata hai'
          ],
          interviewQuestions: [
            'text-align property kya div ko center karti hai ya sirf inline text ko?',
            'line-height unitless (1.6) kyun prefer ki jaati hai pixel (24px) ke mukable?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Paragraph ki lines ke beech vertical spacing control karne ke liye kaunsi property use hoti hai?',
            options: ['line-height', 'letter-spacing', 'text-spacing', 'word-height'],
            answer: 'line-height',
            explanation: '`line-height` property text lines ke beech ka vertical space adjust karti hai.'
          },
          summary: ['text-align horizontal alignment set karta hai', 'line-height reading comfort improve karta hai', 'letter-spacing characters ka gap control karta hai'],
          flashcard: { q: 'text-align: justify kya karta hai?', a: 'Text lines ko left aur right dono edges par perfectly align karta hai newspaper jaisa.' },
          funFact: '🎉 Fun Fact: Web par sabse zyada common readability issue tight line-height hona hai!',
          challenge: {
            instruction: 'Ek `.article-text` class banao jisme text-align left aur line-height 1.6 ho.',
            initialCode: '/* Text formatting yahan */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.article-text') && n.includes('text-align:') && n.includes('line-height:')
            },
            successMessage: 'Text Formatting Mastered! +25 XP 📑'
          }
        },

        // ─── LESSON 7: TEXT DECORATION & TRANSFORM ────────
        {
          id: 'css-text-decoration',
          title: 'Text Decoration & Transform',
          emoji: '✨',
          xpReward: 25,
          badgeName: 'Style Crafter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Text Decoration & Transform — Links se underline hatana aur text UPPERCASE karna! 🔠\n\ntext-decoration: none sabse famous property hai! 😎"',
            hint: '💡 Masti Sir: "Link se default blue underline hatane ke liye a { text-decoration: none; } use karo!"',
            success: '🥳 Masti Sir: "Text styling craft unlocked! 🔥"',
            mistake: '😅 Masti Sir: "Uppercase HTML mein mat type karo, CSS se text-transform: uppercase karo!"'
          },
          englishDef: 'CSS text-decoration adds or removes decorations like underlines, overlines, and line-throughs. text-transform controls capitalization (uppercase, lowercase, capitalize). text-shadow adds drop shadows to typography.',
          hinglishExplain: '`text-decoration: none;` se link ke niche ki blue underline hatayi jaati hai. `text-transform: uppercase;` kisi bhi text ko ALL CAPS mein badal deta hai bina HTML change kiye. `text-shadow` se text ke peeche shadow aati hai.',
          code: `/* 1. Remove Link Underline */
a {
  text-decoration: none;
  color: #2563eb;
}

a:hover {
  text-decoration: underline; /* Hover pe wapas lao */
}

/* 2. Text Transform (Uppercase / Capitalize) */
.badge-tag {
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  font-weight: 700;
}

.blog-title {
  text-transform: capitalize; /* Har word ka pehla letter capital */
}

/* 3. Strike-through price */
.old-price {
  text-decoration: line-through;
  color: #94a3b8;
}

/* 4. Text Shadow */
.hero-glow {
  text-shadow: 0 2px 10px rgba(59, 130, 246, 0.4);
}`,
          codeBreakdown: [
            { part: 'text-decoration: none', label: 'Underline remove karta hai (link default reset)', color: '#ef4444' },
            { part: 'text-transform: uppercase', label: 'ALL CAPS text transformation', color: '#3b82f6' },
            { part: 'text-decoration: line-through', label: 'Discounted old price strikethrough', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ HTML mein direct ALL CAPS type karna — screen readers ise spell out karte hain, CSS text-transform use karo',
            '❌ Links se underline hatakar hover state bhi na dena — accessibility issue'
          ],
          proTips: [
            '💡 Modern CSS mein `text-decoration: underline dotted #3b82f6 2px;` jaise stylish underlines bana sakte ho'
          ],
          interviewQuestions: [
            'text-transform: capitalize aur text-transform: uppercase mein kya difference hai?',
            'Link se default underline kaise hatate hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Anchor tag <a> se default underline hatane ke liye kaunsi property use hoti hai?',
            options: ['text-decoration: none;', 'text-style: none;', 'underline: false;', 'font-decoration: none;'],
            answer: 'text-decoration: none;',
            explanation: '`text-decoration: none;` link ki default underline ko remove karta hai.'
          },
          summary: ['text-decoration underline aur strikethrough control karta hai', 'text-transform uppercase/lowercase banata hai', 'text-shadow typography glow effect deta hai'],
          flashcard: { q: 'Har word ka pehla letter capital kaise karein?', a: 'text-transform: capitalize;' },
          funFact: '🎉 Fun Fact: text-decoration-thickness aur text-underline-offset se modern underlines banayi jaati hain!',
          challenge: {
            instruction: 'Ek `.nav-link` class banao jisme text-decoration none aur text-transform uppercase ho.',
            initialCode: '/* Link styling */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.nav-link') && n.includes('text-decoration:') && n.includes('text-transform:')
            },
            successMessage: 'Text Decoration Mastered! +25 XP ✨'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: STYLING & CORE PROPERTIES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Styling & Core Properties',
      lessons: [
        // ─── LESSON 8: COLORS & GRADIENTS ─────────────────
        {
          id: 'css-colors',
          title: 'CSS Colors & Gradients',
          emoji: '🎨',
          xpReward: 25,
          badgeName: 'Color Artist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Colors & Gradients — Website ka colorful magic! 🌈\n\nHEX, RGB, HSL aur Smooth Gradients — chalo visual designer bante hain! 😎"',
            hint: '💡 Masti Sir: "Linear gradients ke liye background: linear-gradient(135deg, #3b82f6, #10b981); use karo!"',
            success: '🥳 Masti Sir: "Color Master! Super aesthetic palettes ready! 🔥"',
            mistake: '😅 Masti Sir: "Opacity ke liye HEX ke bajaye rgba() ya modern hex #rrggbbaa use karo!"'
          },
          englishDef: 'CSS supports multiple color formats including Named colors, Hexadecimal (#RRGGBB), RGB/RGBA, and HSL/HSLA. Gradients (linear-gradient, radial-gradient, conic-gradient) allow smooth multi-color transitions without images.',
          hinglishExplain: 'CSS mein colors dene ke kayi tarike hain: Hex code `#3b82f6`, RGB `rgb(59, 130, 246)`, ya HSL. Gradients do ya teen colors ka smooth transition hote hain jaise Instagram ka logo.',
          code: `/* 1. Hex & RGB Colors */
.card-header {
  background-color: #0f172a;
  color: #f8fafc;
}

/* 2. RGBA with Alpha Transparency */
.glass-panel {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
}

/* 3. Linear Gradient (Modern Hero) */
.hero-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
  color: #ffffff;
}

/* 4. Radial Gradient */
.glow-circle {
  background: radial-gradient(circle, #38bdf8 0%, transparent 70%);
}`,
          codeBreakdown: [
            { part: '#0f172a', label: 'Hex format — #RRGGBB values', color: '#ef4444' },
            { part: 'rgba(255, 255, 255, 0.85)', label: 'RGB + Alpha opacity (0 = transparent, 1 = solid)', color: '#3b82f6' },
            { part: 'linear-gradient(135deg, ...)', label: 'Linear gradient at 135 degree angle', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Basic plain red, green, blue use karna — hamesha curated hex palettes use karo',
            '❌ Low contrast text (e.g. light gray on white) jisse readability kharab ho'
          ],
          proTips: [
            '💡 Modern tools: Coolors.co ya Tailwind Color Palette se harmonious colors choose karo',
            '💡 WCAG Accessibility standard: Text aur Background ka contrast minimum 4.5:1 hona chahiye'
          ],
          interviewQuestions: [
            'HEX, RGB, aur HSL color models mein kya difference hai?',
            'linear-gradient aur radial-gradient mein kya farak hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'RGBA format mein "A" letter kis cheez ko represent karta hai?',
            options: ['Alpha (Transparency / Opacity)', 'Angle', 'Appearance', 'Alignment'],
            answer: 'Alpha (Transparency / Opacity)',
            explanation: 'Alpha channel 0 (fully transparent) se 1 (fully opaque) ke beech transparency control karta hai.'
          },
          summary: ['HEX #RRGGBB sabse common format hai', 'RGBA transparency add karta hai', 'linear-gradient multi-color transitions banata hai'],
          flashcard: { q: 'Gradients CSS mein image maani jaati hain ya color?', a: 'Gradients technically background images maani jaati hain!' },
          funFact: '🎉 Fun Fact: CSS Color Module Level 4 mein lab() aur lch() jaise human-eye accurate color spaces add ho chuke hain!',
          challenge: {
            instruction: 'Ek `.gradient-btn` banao jisme linear-gradient(90deg, #3b82f6, #10b981) aur color #ffffff ho.',
            initialCode: '/* Gradient button */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.gradient-btn') && n.includes('linear-gradient')
            },
            successMessage: 'Colors & Gradients Mastered! +25 XP 🎨'
          }
        },

        // ─── LESSON 9: BACKGROUNDS ────────────────────────
        {
          id: 'css-backgrounds',
          title: 'CSS Background Properties',
          emoji: '🖼️',
          xpReward: 25,
          badgeName: 'Background Boss',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Background Properties — Website ka backdrop set karo! 🖼️\n\nbackground-size: cover aur background-position: center — har hero section ka secret formula! 😎"',
            hint: '💡 Masti Sir: "Background image blur ya repeat hone se bachane ke liye background-size: cover aur background-repeat: no-repeat use karo!"',
            success: '🥳 Masti Sir: "Backgrounds Mastered! Hero banners ab stunning lagenge! 🔥"',
            mistake: '😅 Masti Sir: "background-repeat: no-repeat lagana bhool gaye toh image tile ban jayegi!"'
          },
          englishDef: 'CSS background properties control the backdrop of elements. Key properties include background-color, background-image (url()), background-size (cover, contain, auto), background-position (center, top), background-repeat (no-repeat, repeat), and background-attachment (fixed for parallax).',
          hinglishExplain: 'Background properties se kisi bhi element ke peeche color ya photo lagayi jaati hai. `background-image: url(...)` se photo lagti hai. `background-size: cover;` se image poore container mein bina stretch huye perfectly fit ho jaati hai.',
          code: `/* Hero Banner Background */
.hero-section {
  background-image: url('hero-banner.webp');
  background-size: cover;          /* Poora cover karo */
  background-position: center;     /* Center mein focus */
  background-repeat: no-repeat;    /* Tile repeat mat karo */
  background-attachment: fixed;    /* Parallax scroll effect */
  min-height: 400px;
}

/* Shorthand Property */
.card-bg {
  background: #f8fafc url('pattern.png') no-repeat center / contain;
}`,
          codeBreakdown: [
            { part: 'background-size: cover', label: 'Scales image to cover entire container without distortion', color: '#ef4444' },
            { part: 'background-position: center', label: 'Centers the image focal point', color: '#3b82f6' },
            { part: 'background-repeat: no-repeat', label: 'Prevents tiling duplication', color: '#10b981' },
            { part: 'background-attachment: fixed', label: 'Fixed position creating subtle parallax scrolling', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ background-repeat: no-repeat bhool jana jisse image 10 baar repeat ho jati hai',
            '❌ Heavy 10MB images background mein lagana jisse website slow ho jaye'
          ],
          proTips: [
            '💡 Background images ko hamesha WebP format mein compress karo',
            '💡 Dark image ke upar white text padhne ke liye semi-transparent overlay use karo'
          ],
          interviewQuestions: [
            'background-size: cover aur background-size: contain mein kya difference hai?',
            'background-attachment: fixed se kya effect banta hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Background image ko poore container mein bina distort huye fill karne ke liye kaunsi value best hai?',
            options: ['background-size: cover;', 'background-size: contain;', 'background-size: 100%;', 'background-size: auto;'],
            answer: 'background-size: cover;',
            explanation: '`background-size: cover;` image ke aspect ratio ko maintain karte huye poore element box ko fill karta hai.'
          },
          summary: ['background-image photo lagata hai', 'background-size: cover perfect responsiveness deta hai', 'background-repeat: no-repeat image tiling rokta hai'],
          flashcard: { q: 'cover aur contain mein kya difference hai?', a: 'cover = Poora box fill karega (kuch edges crop ho sakti hain). contain = Poori image dikhayega (khali space chhoot sakti hai).' },
          funFact: '🎉 Fun Fact: CSS mein ek hi element par comma laga kar MULTIPLE background images lagayi ja sakti hain!',
          challenge: {
            instruction: 'Ek `.hero-box` class banao jisme background-image url("bg.jpg"), background-size cover, aur background-repeat no-repeat ho.',
            initialCode: '/* Background CSS */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.hero-box') && n.includes('background-size: cover') && n.includes('no-repeat')
            },
            successMessage: 'Background Properties Mastered! +25 XP 🖼️'
          }
        },

        // ─── LESSON 10: BORDERS & RADIUS ──────────────────
        {
          id: 'css-borders',
          title: 'CSS Borders, Outlines & Radius',
          emoji: '🔲',
          xpReward: 25,
          badgeName: 'Border Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Borders & Border-Radius — Sharp corners ko smooth rounded banayein! 🔲✨\n\nborder-radius: 9999px se circular pill button banta hai! 😎"',
            hint: '💡 Masti Sir: "border: 1px solid #e2e8f0; format mein width, style aur color teeno aate hain!"',
            success: '🥳 Masti Sir: "Rounded border mastery unlocked! 🔥"',
            mistake: '😅 Masti Sir: "border-radius: 50% square element par lagane par perfect circle banta hai!"'
          },
          englishDef: 'CSS border properties define the boundary line around an element (border-width, border-style, border-color). border-radius curves the corners of elements. outline draws a line outside the border without affecting layout geometry.',
          hinglishExplain: '`border` kisi bhi box ke charo taraf boundary banata hai (jaise `border: 2px solid blue;`). `border-radius` corners ko curve (gol) karta hai. Agar square box par `border-radius: 50%` doge toh perfect circle avatar ban jata hai.',
          code: `/* 1. Clean Card Border */
.card {
  border: 1px solid #e2e8f0;
  border-radius: 12px; /* Smooth rounded corners */
}

/* 2. Circular Avatar Profile */
.avatar-circle {
  width: 64px;
  height: 64px;
  border: 3px solid #22c55e;
  border-radius: 50%; /* Perfect circle */
}

/* 3. Pill Button */
.pill-btn {
  border: 2px solid #3b82f6;
  border-radius: 9999px; /* Pill shape */
  padding: 8px 24px;
}

/* 4. Accessibility Focus Outline */
button:focus-visible {
  outline: 3px solid #6366f1;
  outline-offset: 2px;
}`,
          codeBreakdown: [
            { part: 'border: 1px solid #e2e8f0', label: 'Width (1px), Style (solid), Color (#e2e8f0)', color: '#3b82f6' },
            { part: 'border-radius: 12px', label: 'Rounded corners radius', color: '#10b981' },
            { part: 'border-radius: 50%', label: 'Converts square to perfect circle', color: '#ef4444' },
            { part: 'outline-offset: 2px', label: 'Spaces the accessibility outline away from border', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ `outline: none` lagakar koi replacement focus indicator na dena (accessibility violation)',
            '❌ Non-square image par border-radius 50% lagana jisse oval banta hai'
          ],
          proTips: [
            '💡 Modern UI design mein subtle 1px borders (`#e2e8f0` light / `#334155` dark) premium lagte hain',
            '💡 Individual corners: `border-top-left-radius`, `border-bottom-right-radius`'
          ],
          interviewQuestions: [
            'border aur outline mein kya difference hota hai box-sizing geometry ke terms mein?',
            'border-radius: 50% aur border-radius: 9999px kab use karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Square box (100px x 100px) ko perfect circle banane ke liye kaunsa border-radius lagayein?',
            options: ['border-radius: 50%;', 'border-radius: 100px;', 'border-radius: circle;', 'border-radius: round;'],
            answer: 'border-radius: 50%;',
            explanation: 'Square element par `border-radius: 50%` charo corners ko center tak curve karke perfect circle banata hai.'
          },
          summary: ['border width, style aur color specify karta hai', 'border-radius rounded corners banata hai', 'outline accessibility focus ke liye use hota hai'],
          flashcard: { q: 'outline box model ka size badhata hai ya nahi?', a: 'Nahi! Outline layout geometry par koi extra space nahi leta.' },
          funFact: '🎉 Fun Fact: border-radius mein do values dekar elliptical corners (jaise egg shape) bhi banaye ja sakte hain!',
          challenge: {
            instruction: 'Ek `.card-box` banao with border 1px solid #cbd5e1 aur border-radius 16px.',
            initialCode: '/* Border card */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.card-box') && n.includes('border:') && n.includes('border-radius:')
            },
            successMessage: 'Border & Radius Mastered! +25 XP 🔲'
          }
        },

        // ─── LESSON 11: WIDTH & HEIGHT ────────────────────
        {
          id: 'css-height-width',
          title: 'Width, Height & Constraints (max/min)',
          emoji: '📏',
          xpReward: 25,
          badgeName: 'Dimension Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Width & Height — Elements ki dimensions set karo! 📏\n\nFixed width: 800px doge toh mobile pe horizontal scroll aayega!\nmax-width: 800px aur width: 100% — responsive formula! 😎"',
            hint: '💡 Masti Sir: "max-width: 100% images ko mobile screen se bahar overflow hone se rokta hai!"',
            success: '🥳 Masti Sir: "Dimensions Master! Responsive widths unlocked! 🔥"',
            mistake: '😅 Masti Sir: "Fixed height mat do text containers ko, varna text box se bahar beh jayega!"'
          },
          englishDef: 'CSS width and height properties set the dimensions of elements. min-width, max-width, min-height, and max-height set boundaries that prevent elements from becoming too small or overflowing their containers on responsive screens.',
          hinglishExplain: '`width` aur `height` se element ka size tay hota hai. Lekin responsive design ke liye `max-width` aur `min-width` use karna zaroori hai. `max-width: 1200px; width: 100%;` se content badi screens par 1200px tak rahega aur mobile par screen ke hisaab se 100% adjust ho jayega.',
          code: `/* 1. Responsive Container */
.container {
  width: 100%;
  max-width: 1200px; /* Badi screen pe limit */
  margin: 0 auto;    /* Center horizontally */
}

/* 2. Responsive Image */
img {
  max-width: 100%;  /* Never overflow container */
  height: auto;     /* Maintain aspect ratio */
}

/* 3. Min-Height Hero Section */
.hero-banner {
  min-height: 80vh; /* Minimum 80% viewport height */
  display: flex;
  align-items: center;
}`,
          codeBreakdown: [
            { part: 'max-width: 1200px', label: 'Maximum ceiling boundary on large monitors', color: '#ef4444' },
            { part: 'min-height: 80vh', label: 'At least 80% of screen height, but can grow if content expands', color: '#3b82f6' },
            { part: 'height: auto', label: 'Maintains intrinsic image aspect ratio without squishing', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Container ko fixed `width: 900px` dena — mobile par page cut ho jata hai',
            '❌ Paragraph containers ko fixed `height: 50px` dena jisse content overflow ho jaye'
          ],
          proTips: [
            '💡 Golden Rule: Cards aur Paragraphs ko `height: auto` ya `min-height` do, fixed `height` avoid karo',
            '💡 Viewport Units: `100vw` = 100% viewport width, `100vh` / `100dvh` = viewport height'
          ],
          interviewQuestions: [
            'width aur max-width mein kya difference hai?',
            'Responsive images ke liye max-width: 100% aur height: auto kyun zaroori hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Mobile screens par content overflow rokne ke liye kaunsi property combination best hai?',
            options: ['width: 100%; max-width: 1200px;', 'width: 1200px;', 'min-width: 1200px;', 'height: 100%;'],
            answer: 'width: 100%; max-width: 1200px;',
            explanation: '`width: 100%; max-width: 1200px;` element ko mobile par full width aur desktop par maximum 1200px limit par rakhta hai.'
          },
          summary: ['width element ki horizontal size set karta hai', 'max-width mobile overflow prevent karta hai', 'min-height content expansion allow karta hai'],
          flashcard: { q: 'vh aur vw ka kya matlab hai?', a: 'vh = Viewport Height (1vh = 1% screen height), vw = Viewport Width (1vw = 1% screen width).' },
          funFact: '🎉 Fun Fact: Modern mobile browsers ke dynamic address bar ke liye `dvh` (Dynamic Viewport Height) unit introduce hui hai!',
          challenge: {
            instruction: 'Ek `.content-box` class banao jisme width 100%, max-width 800px, aur min-height 200px ho.',
            initialCode: '/* Responsive dimension */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.content-box') && n.includes('max-width:') && n.includes('min-height:')
            },
            successMessage: 'Width & Height Constraints Mastered! +25 XP 📏'
          }
        },

        // ─── LESSON 12: MARGINS & PADDING ─────────────────
        {
          id: 'css-margins-padding',
          title: 'Margins, Padding & Margin Collapse',
          emoji: '📦',
          xpReward: 25,
          badgeName: 'Spacing Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Margin vs Padding — Bahar ki space vs Andar ki space! 📦\n\nPadding = Box ke ANDAR ki padding (cushion)\nMargin = Box ke BAHAR doosre boxes se doori!\nDon\'t mix them up! 😎"',
            hint: '💡 Masti Sir: "margin: 0 auto block element ko horizontal center kar deta hai!"',
            success: '🥳 Masti Sir: "Spacing Pro! Spacing layout crystal clear! 🔥"',
            mistake: '😅 Masti Sir: "Vertical margins collapse ho jaate hain! Top 20px aur bottom 30px milkar 50px nahi balki 30px (bada wala) banenge!"'
          },
          englishDef: 'Padding creates space inside an element (between content and border). Margin creates space outside an element (around the border to push neighboring elements away). Margin Collapse occurs when vertical top and bottom margins combine into a single margin equal to the largest.',
          hinglishExplain: '`padding` box ke andar ka gap hai (jaise sofa ka foam). `margin` box ke bahar ka gap hai (jaise do building ke beech ka rasta). Shorthand order: Clockwise — Top, Right, Bottom, Left (`TRouBLe`).',
          storyExplain: 'Socho ek gift box:\n- Box ke andar gift item aur box ke border ke beech ka thermocol/bubble wrap = **PADDING** (Andar ka aaram).\n- Ek gift box aur pados ke gift box ke beech ki distance = **MARGIN** (Bahar ki doori)! 🎁📦',
          code: `/* 1. Shorthand: Clockwise (Top, Right, Bottom, Left) */
.card {
  padding: 20px 16px 20px 16px; /* T R B L */
  margin: 24px 0;               /* Top/Bottom, Left/Right */
}

/* 2. Individual Sides */
.hero {
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 32px;
}

/* 3. Center a fixed/max-width Block */
.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto; /* margin: 0 auto */
}

/* 4. Margin Collapse Demonstration */
.box-1 { margin-bottom: 30px; }
.box-2 { margin-top: 20px; }
/* Beech ka gap 50px nahi, 30px (largest) hoga! */`,
          codeBreakdown: [
            { part: 'padding: 20px 16px', label: 'Vertical padding (20px), Horizontal padding (16px)', color: '#ef4444' },
            { part: 'margin: 0 auto', label: 'Centers a block element horizontally', color: '#10b981' },
            { part: 'Margin Collapse', label: 'Adjacent vertical margins merge into the single largest value', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Inline elements (`<span>`, `<a>`) par top/bottom margin lagana (ye vertical flow affect nahi karte)',
            '❌ Margin collapse na samajh kar double spacing expect karna'
          ],
          proTips: [
            '💡 Shorthand yaad rakhne ki trick: **TRBL** (Top, Right, Bottom, Left)',
            '💡 2 values shorthand: `padding: 20px 10px;` (Top/Bottom, Left/Right)',
            '💡 1 value shorthand: `padding: 16px;` (Charo taraf 16px)'
          ],
          interviewQuestions: [
            'Margin aur Padding mein kya difference hai?',
            'Margin Collapse kya hota hai aur isko kaise prevent karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS Shorthand `padding: 10px 20px 30px 40px;` mein 20px kaunsi side apply hogi?',
            options: ['Right side', 'Top side', 'Bottom side', 'Left side'],
            answer: 'Right side',
            explanation: 'Shorthand clockwise chalta hai: Top (10px), Right (20px), Bottom (30px), Left (40px).'
          },
          summary: ['Padding andar ki space create karti hai', 'Margin bahar ki space create karti hai', 'Shorthand: Top Right Bottom Left (TRBL)'],
          flashcard: { q: 'margin: 0 auto kya karta hai?', a: 'Block element jisme width set ho, usko horizontally center align karta hai.' },
          funFact: '🎉 Fun Fact: Flexbox aur Grid containers ke andar vertical margins collapse nahi hote!',
          challenge: {
            instruction: 'Ek `.box` class banao jisme padding 20px aur margin 0 auto ho.',
            initialCode: '/* Spacing rule */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.box') && n.includes('padding:') && n.includes('margin:')
            },
            successMessage: 'Margins & Padding Mastered! +25 XP 📦'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: LAYOUTS & CLASSIC POSITIONING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Layouts & Classic Positioning',
      lessons: [
        // ─── LESSON 13: THE BOX MODEL ─────────────────────
        {
          id: 'css-box-model',
          title: 'The CSS Box Model & box-sizing',
          emoji: '📐',
          xpReward: 30,
          badgeName: 'Box Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "The Box Model — CSS ka sabse bada foundation! 📐\n\nHTML ka har single element ek invisible aayatakaar (rectangular) box hai!\nContent -> Padding -> Border -> Margin!\n\nAur `box-sizing: border-box` har developer ka lifesaver hai! 😎"',
            hint: '💡 Masti Sir: "* { box-sizing: border-box; } lagane se padding aur border width ke andar include ho jaate hain, box expand nahi hota!"',
            success: '🥳 Masti Sir: "Box Model Master! CSS layout ka core funda clear! 🔥"',
            mistake: '😅 Masti Sir: "Agar width: 200px di aur padding: 20px di, content-box mein total 240px ho jayega! border-box use karo!"'
          },
          englishDef: 'The CSS Box Model is a container that wraps around every HTML element. It consists of: Content (text/images), Padding (clear area around content), Border (edge line), and Margin (space outside border). box-sizing: border-box includes padding and border within the specified width/height.',
          hinglishExplain: 'HTML ka har element ek box hota hai jisme 4 layers hoti hain: 1. **Content** (main text/image), 2. **Padding** (content ke charo taraf ka space), 3. **Border** (box ki deewar), 4. **Margin** (doosre boxes se doori). Default mein padding aur border width ko bada dete hain, isliye hum hamesha `box-sizing: border-box` lagate hain.',
          storyExplain: 'Socho ek Photo Frame:\n- Photo = Content\n- White border mount = Padding\n- Wooden Frame = Border\n- Frame aur deewar par doosri painting ke beech ki jagah = Margin!\n\n`border-box` ka matlab: "Frame ka total size 10 inch rahega, chahe photo kitni bhi badi ho!" 🖼️📐',
          code: `/* Universal Box-Sizing Reset (Must have in every project!) */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Box Model Demonstration */
.product-card {
  width: 300px;          /* Total width remains 300px with border-box */
  padding: 20px;         /* 1. Inside space */
  border: 2px solid #e2e8f0; /* 2. Boundary edge */
  margin: 16px auto;     /* 3. Outside distance */
  background-color: #ffffff;
}`,
          codeBreakdown: [
            { part: 'box-sizing: border-box', label: 'Includes padding and border within width/height', color: '#10b981' },
            { part: 'Content Layer', label: 'Innermost area where text/images sit', color: '#3b82f6' },
            { part: 'Padding -> Border -> Margin', label: 'The 4 concentric box model layers', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ `box-sizing: border-box` reset na lagana jisse 100% width wale elements padding ke sath screen se bahar nikal jayein'
          ],
          proTips: [
            '💡 Hamesha apni CSS file ki pehli line mein `* { box-sizing: border-box; }` reset add karo',
            '💡 Browser DevTools (F12) ke "Computed" tab mein Box Model ka live visual diagram dikhta hai'
          ],
          interviewQuestions: [
            'CSS Box Model kya hai aur iske 4 components kaunse hain?',
            'content-box aur border-box mein kya farak hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Kaunsi property padding aur border ko element ki width ke andar include karti hai?',
            options: ['box-sizing: border-box;', 'box-sizing: content-box;', 'box-model: include;', 'box-layout: fixed;'],
            answer: 'box-sizing: border-box;',
            explanation: '`box-sizing: border-box;` width ko fix rakhta hai aur padding/border ko usi width ke andar fit karta hai.'
          },
          summary: ['Har element 4 layers ka box hota hai: Content, Padding, Border, Margin', 'box-sizing: border-box width calculation aasan banata hai', 'Universal reset har project mein lagana chahiye'],
          flashcard: { q: 'content-box aur border-box ka formula kya hai?', a: 'content-box: Total = Width + Padding + Border. border-box: Total = Width (Padding/Border already included).' },
          funFact: '🎉 Fun Fact: Internet Explorer 6 ne pehli baar border-box behaviour use kiya tha, jo baad mein CSS3 ka standard ban gaya!',
          challenge: {
            instruction: 'Universal reset likho: `* { box-sizing: border-box; margin: 0; padding: 0; }`',
            initialCode: '/* Box model reset */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('*') && n.includes('box-sizing: border-box')
            },
            successMessage: 'The Box Model Mastered! Foundation Solid! +30 XP 📐'
          }
        },

        // ─── LESSON 14: DISPLAY PROPERTY ──────────────────
        {
          id: 'css-display',
          title: 'Display Property (block, inline, inline-block, none)',
          emoji: '🧱',
          xpReward: 25,
          badgeName: 'Flow Controller',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Display Property — Elements screen par kaise khade honge! 🧱\n\nBlock = Poori line lene wala dada!\nInline = Line mein adjust hone wala dost!\nInline-Block = Dono ka best combination! 😎"',
            hint: '💡 Masti Sir: "display: none element ko DOM mein rakhta hai par screen se gayab kar deta hai bina space liye!"',
            success: '🥳 Masti Sir: "Display modes clear! 🔥"',
            mistake: '😅 Masti Sir: "Inline elements (jaise <span>) par width aur height nahi lagti! display: inline-block use karo!"'
          },
          englishDef: 'The display property specifies the display behavior (the type of rendering box) of an element. Common values include block (takes full width, new line), inline (flows within text, no width/height), inline-block (inline flow but supports width/height/padding), and none (hides element completely).',
          hinglishExplain: '`display: block` nayi line se shuru hota hai aur 100% width leta hai (jaise `<div>`, `<p>`). `display: inline` text ke beech mein fit hota hai aur ispe width/height nahi lagti (jaise `<span>`, `<a>`). `display: inline-block` ek hi line mein rehta hai par width aur height bhi support karta hai.',
          code: `/* 1. Block: Takes full width, starts on new line */
.block-box {
  display: block;
  width: 100%;
}

/* 2. Inline-Block: Side-by-side buttons with width & padding */
.btn {
  display: inline-block;
  padding: 10px 20px;
  width: auto;
}

/* 3. Inline: Flows inside text */
.highlight-span {
  display: inline;
  color: #2563eb;
}

/* 4. Hide Element */
.hidden-modal {
  display: none; /* Completely removed from visual flow */
}`,
          codeBreakdown: [
            { part: 'display: block', label: 'New line, occupies 100% available width', color: '#ef4444' },
            { part: 'display: inline-block', label: 'Side-by-side flow + supports custom width/height/padding', color: '#10b981' },
            { part: 'display: none', label: 'Hides element completely from layout tree', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ `display: inline` element par `width` ya `margin-top` lagakar sochna ki chal kyun nahi raha',
            '❌ `display: none` aur `visibility: hidden` mein confuse hona'
          ],
          proTips: [
            '💡 Buttons aur Badges ke liye `display: inline-block` ya `display: inline-flex` best hota hai',
            '💡 `visibility: hidden` element ko hide karta hai par uski blank jagah screen par reserved rehti hai'
          ],
          interviewQuestions: [
            'display: inline aur display: inline-block mein kya difference hai?',
            'display: none aur visibility: hidden mein kya farak hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Kaunsa display mode elements ko ek hi line mein rakhta hai AUR width/height support karta hai?',
            options: ['display: inline-block;', 'display: inline;', 'display: block;', 'display: flex;'],
            answer: 'display: inline-block;',
            explanation: '`inline-block` inline flow maintain karta hai lekin block elements ki tarah custom width, height aur vertical padding support karta hai.'
          },
          summary: ['block poori line leta hai', 'inline text ke sath flow hota hai (no width)', 'inline-block side-by-side with dimensions support', 'none element hide karta hai'],
          flashcard: { q: 'display: none aur visibility: hidden mein kya difference hai?', a: 'display: none = Space remove ho jati hai. visibility: hidden = Invisible hota hai par blank space rehti hai.' },
          funFact: '🎉 Fun Fact: HTML5 ke naye layout modes (flex, grid) ne purane float layouts ko replace kar diya hai!',
          challenge: {
            instruction: 'Ek `.btn-tag` class banao jisme display inline-block, padding 6px 12px, aur border-radius 4px ho.',
            initialCode: '/* Inline-block button */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.btn-tag') && n.includes('display: inline-block')
            },
            successMessage: 'Display Modes Mastered! +25 XP 🧱'
          }
        },

        // ─── LESSON 15: FLOAT AND CLEAR ───────────────────
        {
          id: 'css-float-clear',
          title: 'CSS Float and Clear',
          emoji: '⛵',
          xpReward: 25,
          badgeName: 'Float Navigator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Float & Clear — Text ke chaaron taraf image wrap karna! ⛵\n\nNewspaper mein photo left mein aur text uske bagal se behta hua dekha hai? Usko Float bolte hain! 😎"',
            hint: '💡 Masti Sir: "Parent container collapse na ho isliye clearfix ya clear: both lagana zaroori hota hai!"',
            success: '🥳 Masti Sir: "Float & Clear clear ho gaya! 🔥"',
            mistake: '😅 Masti Sir: "Poori website ka layout float se mat banao — layout ke liye Flexbox aur Grid use karo!"'
          },
          englishDef: 'The float property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The clear property specifies what elements can float beside the cleared element or on which side.',
          hinglishExplain: '`float: left;` ya `float: right;` element ko ek taraf khiska deta hai aur baki text uske aaspas wrap (flow) ho jata hai (jaise magazine article mein photo ke sath text). Float hone par parent container ki height collapse ho jati hai, jisko theek karne ke liye `clear: both;` ya clearfix use karte hain.',
          code: `/* 1. Float Image inside Article */
.article-img {
  float: left;
  margin-right: 16px;
  margin-bottom: 12px;
  width: 200px;
}

/* 2. Clear element below floats */
.footer-clear {
  clear: both; /* Dono sides clear */
}

/* 3. Modern Clearfix on Parent */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}`,
          codeBreakdown: [
            { part: 'float: left', label: 'Pushes element to left, wrapping following text around it', color: '#3b82f6' },
            { part: 'clear: both', label: 'Prevents element from sitting next to previous floating items', color: '#ef4444' },
            { part: '.clearfix::after', label: 'Standard clearfix micro-hack preventing parent height collapse', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Full page multi-column layout ke liye float use karna (legacy technique — modern CSS Flexbox/Grid use karo)'
          ],
          proTips: [
            '💡 Float ka main modern use case sirf article text wrapping around an image hai'
          ],
          interviewQuestions: [
            'Float property ka kya use hai aur clearfix hack kyun zaroori hota hai?',
            'clear: both ka kya matlab hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Floating elements ke baad agle element ko unke bagal mein aane se rokne ke liye kaunsi property use hoti hai?',
            options: ['clear: both;', 'float: none;', 'display: block;', 'position: static;'],
            answer: 'clear: both;',
            explanation: '`clear: both;` element ko previous left aur right floating elements ke theek niche drop karta hai.'
          },
          summary: ['float text wrap karne ke liye use hota hai', 'clear: both floating elements ke niche space clear karta hai', 'Layouts ke liye Flexbox/Grid use karein'],
          flashcard: { q: 'Float ka primary modern use case kya hai?', a: 'Article mein images ke chaaron taraf text wrap karna.' },
          funFact: '🎉 Fun Fact: 2010 se pehle lagbhag har website ka layout floats aur table tags se banta tha!',
          challenge: {
            instruction: 'Ek `.float-left-img` class banao jisme float left aur margin-right 16px ho.',
            initialCode: '/* Float image */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.float-left-img') && n.includes('float: left')
            },
            successMessage: 'Float & Clear Mastered! +25 XP ⛵'
          }
        },

        // ─── LESSON 16: OVERFLOW PROPERTY ─────────────────
        {
          id: 'css-overflow',
          title: 'CSS Overflow Property',
          emoji: '🌊',
          xpReward: 25,
          badgeName: 'Overflow Handler',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Overflow Property — Jab content box se bahar behne lage! 🌊\n\nvisible, hidden, scroll, auto — kab box mein scrollbar aayegi aur kab cut hoga! 😎"',
            hint: '💡 Masti Sir: "overflow: hidden rounded corners ke bahar nikalne wale images ko mask karne ke liye bhi use hota hai!"',
            success: '🥳 Masti Sir: "Overflow handled perfectly! No messy scrollbars! 🔥"',
            mistake: '😅 Masti Sir: "overflow: scroll hamesha scrollbar dikhata hai chahe content chota ho! overflow: auto use karo!"'
          },
          englishDef: 'The CSS overflow property specifies whether to clip content, display a scrollbar, or let content overflow when it is too large to fit in an element specified area. Values include visible (default), hidden, scroll, and auto.',
          hinglishExplain: 'Jab kisi box mein text ya image uski height/width se zyada badi ho jati hai toh `overflow` decide karta hai kya hoga. `overflow: hidden` bahar nikalte hisse ko kaat (clip) deta hai. `overflow: auto` sirf tab scrollbar deta hai jab content bada ho.',
          code: `/* 1. Scrollable Code Block */
pre {
  max-height: 250px;
  overflow-y: auto;  /* Vertical scroll only when needed */
  overflow-x: auto;  /* Horizontal scroll for long lines */
}

/* 2. Card with Rounded Image (Clipping) */
.card-wrapper {
  border-radius: 16px;
  overflow: hidden;  /* Inner image will not spill over rounded corners */
}

/* 3. Single-line Text Truncation with Ellipsis (...) */
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Dikhayega: "This is a long title..." */
}`,
          codeBreakdown: [
            { part: 'overflow: hidden', label: 'Crops overflowing content (used for rounded cards & truncation)', color: '#ef4444' },
            { part: 'overflow: auto', label: 'Shows scrollbars only when content exceeds dimensions', color: '#10b981' },
            { part: 'text-overflow: ellipsis', label: 'Adds 3 dots (...) to truncated single-line text', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ `overflow: scroll` use karna jisse empty inactive scrollbar bhi screen par gandi lagti hai (use `overflow: auto`)',
            '❌ Text truncation mein `white-space: nowrap` bhool jana'
          ],
          proTips: [
            '💡 3-line formula for text truncation: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`',
            '💡 Modern multi-line truncate: `-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;`'
          ],
          interviewQuestions: [
            'overflow: hidden aur overflow: auto mein kya difference hai?',
            'CSS mein single line text truncation (...) kaise banate hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Content bada hone par sirf zaroorat padne par scrollbar dikhane ke liye kaunsi value best hai?',
            options: ['overflow: auto;', 'overflow: scroll;', 'overflow: visible;', 'overflow: hidden;'],
            answer: 'overflow: auto;',
            explanation: '`overflow: auto;` smart scrollbar deta hai — agar content box se bada hoga tabhi scrollbar aayega, varna nahi.'
          },
          summary: ['overflow: hidden content ko crop karta hai', 'overflow: auto zaroorat padne par scroll deta hai', 'text-overflow: ellipsis teen dots (...) add karta hai'],
          flashcard: { q: 'Text truncate karne ke 3 rules kya hain?', a: '1. white-space: nowrap; 2. overflow: hidden; 3. text-overflow: ellipsis;' },
          funFact: '🎉 Fun Fact: Mobile par smooth momentum scrolling ke liye purane iOS mein `-webkit-overflow-scrolling: touch;` use hota tha!',
          challenge: {
            instruction: 'Ek `.scroll-box` class banao jisme max-height 150px aur overflow-y auto ho.',
            initialCode: '/* Overflow container */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.scroll-box') && (n.includes('overflow-y: auto') || n.includes('overflow: auto'))
            },
            successMessage: 'Overflow Property Mastered! +25 XP 🌊'
          }
        },

        // ─── LESSON 17: POSITIONING & Z-INDEX ─────────────
        {
          id: 'css-positioning',
          title: 'Positioning & Z-Index (relative, absolute, fixed, sticky)',
          emoji: '📌',
          xpReward: 30,
          badgeName: 'Position Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Positioning & Z-Index — Element ko exact jagah par bithana! 📌\n\nRelative = Parent anchor\nAbsolute = Parent ke andar exact coordinate\nFixed = Screen par chipka hua\nSticky = Scroll karne par chipakne wala!\nAur z-index = Kaun kiske upar aayega! 😎"',
            hint: '💡 Masti Sir: "Absolute child ko constrain karne ke liye Parent element par position: relative; lagana mandatory hota hai!"',
            success: '🥳 Masti Sir: "Positioning & Z-Index Mastered! Stacking context clear! 🔥"',
            mistake: '😅 Masti Sir: "Parent par position: relative lagana bhool gaye? Toh absolute child poori body ke relative chala jayega!"'
          },
          englishDef: 'The position property defines the positioning method for an element (static, relative, absolute, fixed, sticky) along with top, right, bottom, left offsets. The z-index property specifies the stack order of positioned elements (which element sits in front/behind).',
          hinglishExplain: '`position: relative` element ko normal flow mein rakhta hai aur absolute children ke liye anchor banta hai. `position: absolute` top/left coordinates se parent ke andar exact jagah par fit hota hai. `position: fixed` screen par lock ho jata hai (jaise WhatsApp chat button). `position: sticky` scroll hone par top par chipak jata hai (jaise sticky navbar). `z-index` layer number hota hai (bada z-index upar dikhta hai).',
          storyExplain: 'Socho ek notification badge card par:\n- Shopping Cart Box = `position: relative` (Ghar)\n- Red Badge "3 items" = `position: absolute; top: -5px; right: -5px;` (Ghar ki chhat par jhanda)\n- Floating Help Button = `position: fixed; bottom: 20px; right: 20px;` (Screen ka permanent guard)\n- Header = `position: sticky; top: 0;` (Scroll par upar chipakne wala navigation)! 🚩📌',
          code: `/* 1. Parent Anchor Container */
.card-container {
  position: relative;
  width: 280px;
  height: 180px;
  border-radius: 12px;
}

/* 2. Absolute Badge Pin (Top-Right Corner) */
.badge-hot {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10; /* Sits above card image */
  background-color: #ef4444;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
}

/* 3. Sticky Navbar (Sticks when scrolled) */
.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}

/* 4. Fixed Floating Action Button */
.floating-chat-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;
  width: 56px;
  height: 56px;
  border-radius: 50%;
}`,
          codeBreakdown: [
            { part: 'position: relative', label: 'Normal flow anchor reference for absolute children', color: '#3b82f6' },
            { part: 'position: absolute; top/right', label: 'Precision coordinate positioning relative to nearest positioned ancestor', color: '#ef4444' },
            { part: 'position: sticky; top: 0', label: 'Scrolls normally until it hits top: 0, then sticks', color: '#10b981' },
            { part: 'z-index: 100', label: 'Stack order — higher number appears on top of lower numbers', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ `z-index` static element par lagana (z-index sirf positioned elements `relative/absolute/fixed/sticky` par kaam karta hai)',
            '❌ Absolute child ke parent par `position: relative` na dena'
          ],
          proTips: [
            '💡 Modal / Popup overlays ke liye `position: fixed; inset: 0; z-index: 1000;` standard formula hai',
            '💡 Modern shorthand: `top: 0; right: 0; bottom: 0; left: 0;` ki jagah `inset: 0;` likhein'
          ],
          interviewQuestions: [
            'relative, absolute, fixed, aur sticky positioning mein kya difference hai?',
            'z-index kyun kaam nahi karta agar element position: static ho?',
            'Stacking Context kya hoti hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Scroll karte waqt navbar ko top par chipkane ke liye kaunsi position best hai?',
            options: ['position: sticky; top: 0;', 'position: absolute;', 'position: static;', 'position: relative;'],
            answer: 'position: sticky; top: 0;',
            explanation: '`position: sticky; top: 0;` element ko natural scroll karne deta hai aur screen top par aate hi stick kar deta hai.'
          },
          summary: ['relative anchor banta hai', 'absolute coordinates par baith-ta hai', 'fixed viewport par chipakta hai', 'sticky scroll par lock hota hai', 'z-index layer depth decide karta hai'],
          flashcard: { q: 'z-index kaam karne ke liye kya requirement hai?', a: 'Element par position (relative, absolute, fixed, sticky) set hona zaroori hai (static par z-index kaam nahi karta).' },
          funFact: '🎉 Fun Fact: CSS `inset: 0;` ek single line mein top, right, bottom, left chaaron ko 0 set kar deta hai!',
          challenge: {
            instruction: 'Ek `.badge` element banao with position absolute, top 8px, right 8px, aur z-index 10.',
            initialCode: '/* Position badge */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.badge') && n.includes('position: absolute') && n.includes('z-index:')
            },
            successMessage: 'Positioning & Z-Index Mastered! +30 XP 📌'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: MODERN LAYOUTS — FLEXBOX
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Modern Layouts — Flexbox',
      lessons: [
        // ─── LESSON 18: FLEXBOX FUNDAMENTALS ──────────────
        {
          id: 'css-flexbox-basics',
          title: 'Flexbox Fundamentals (flex-direction, flex-wrap)',
          emoji: '📦',
          xpReward: 30,
          badgeName: 'Flex Starter',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Flexbox — 1-Dimensional Layout ka Superstar! 🌟\n\nNavbars, card rows, centering — Flexbox ne web development ko 100x aasan bana diya hai! `display: flex;` lagao aur elements line mein khade! 😎"',
            hint: '💡 Masti Sir: "flex-direction: row horizontal line banata hai, flex-direction: column vertical stack banata hai!"',
            success: '🥳 Masti Sir: "Flexbox Fundamentals Mastered! Welcome to modern CSS layouts! 🔥"',
            mistake: '😅 Masti Sir: "display: flex parent par lagana hota hai, children automatically flex items ban jaate hain!"'
          },
          englishDef: 'CSS Flexbox (Flexible Box Layout) is a 1-dimensional layout model designed for distributing space and aligning items along a single axis (row or column). Setting display: flex on a parent container turns all immediate children into flexible flex items.',
          hinglishExplain: 'Flexbox modern CSS ka sabse popular layout tool hai. Jaise hi parent par `display: flex;` lagate ho, uske andar ke saare elements ek seedhi line (row) mein side-by-side aa jaate hain. `flex-direction: column;` se unhe vertical stack banaya ja sakta hai aur `flex-wrap: wrap;` se mobile par agli line mein bhej sakte hain.',
          code: `/* 1. Flex Container (Row by default) */
.nav-container {
  display: flex;
  flex-direction: row;       /* row | column */
  flex-wrap: wrap;           /* Allows items to wrap on smaller screens */
  gap: 16px;                 /* Space between items */
}

/* 2. Vertical Column Stack */
.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 3. Shorthand: flex-flow */
.card-row {
  display: flex;
  flex-flow: row wrap; /* direction + wrap shorthand */
}`,
          codeBreakdown: [
            { part: 'display: flex', label: 'Activates flex formatting context on parent', color: '#ef4444' },
            { part: 'flex-direction: row / column', label: 'Defines the main axis orientation', color: '#3b82f6' },
            { part: 'flex-wrap: wrap', label: 'Wraps items to next line if screen width runs out', color: '#10b981' },
            { part: 'gap: 16px', label: 'Modern gap spacing between flex items without margin hacks', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ `display: flex` child element par lagana instead of parent container',
            '❌ `flex-wrap: wrap` na lagana jisse mobile par items squish hokar shrink ho jayein'
          ],
          proTips: [
            '💡 Hamesha `gap: 16px;` use karo flex items ke beech space ke liye (margin hacks ki zaroorat nahi)'
          ],
          interviewQuestions: [
            'Flexbox 1D hai ya 2D layout model? Kyun?',
            'flex-direction: row aur flex-direction: column mein Main Axis aur Cross Axis kaise switch hote hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Flex container mein items ko screen overflow hone par agli line mein wrap karne ke liye kaunsi property use hoti hai?',
            options: ['flex-wrap: wrap;', 'flex-flow: next;', 'flex-break: true;', 'display: wrap;'],
            answer: 'flex-wrap: wrap;',
            explanation: '`flex-wrap: wrap;` items ko horizontal space khatam hone par automatically next line mein move karta hai.'
          },
          summary: ['display: flex parent par lagta hai', 'flex-direction main axis define karta hai (row/column)', 'gap flex items ke beech clean space deta hai'],
          flashcard: { q: 'Flexbox ka default flex-direction kya hota hai?', a: 'row (horizontal left-to-right).' },
          funFact: '🎉 Fun Fact: Flexbox aane se pehle div ko vertically center karna web developers ka sabse bada nightmare tha!',
          challenge: {
            instruction: 'Ek `.flex-nav` class banao jisme display flex, flex-wrap wrap, aur gap 16px ho.',
            initialCode: '/* Flexbox nav */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.flex-nav') && n.includes('display: flex') && n.includes('gap:')
            },
            successMessage: 'Flexbox Basics Mastered! +30 XP 📦'
          }
        },

        // ─── LESSON 19: JUSTIFY-CONTENT & ALIGN-ITEMS ──────
        {
          id: 'css-flex-align',
          title: 'Flexbox Justify Content & Align Items',
          emoji: '⚖️',
          xpReward: 30,
          badgeName: 'Centering Guru',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Justify-Content & Align-Items — Divine Centering Formula! 🧘‍♂️\n\n`display: flex; justify-content: center; align-items: center;`\n3 lines mein kisi bhi cheez ko perfect center karo! Web dev ka 100-crore ka mantra! 😎"',
            hint: '💡 Masti Sir: "justify-content Main Axis (horizontal in row) par kaam karta hai, align-items Cross Axis (vertical in row) par!"',
            success: '🥳 Masti Sir: "Centering Guru! You solved the famous CSS centering meme! 🔥"',
            mistake: '😅 Masti Sir: "justify-content aur align-items mein ulta mat sochna — Main axis vs Cross axis yaad rakho!"'
          },
          englishDef: 'In Flexbox, justify-content aligns items along the Main Axis (flex-start, center, flex-end, space-between, space-around, space-evenly). align-items aligns items along the Cross Axis (flex-start, center, flex-end, stretch, baseline).',
          hinglishExplain: '`justify-content` elements ko main line par aage-peeche karta hai — jaise `space-between` navbar mein logo ko left aur menu ko right mein bhej deta hai. `align-items` elements ko vertically center ya stretch karta hai. Dono ko `center` dekar perfect 100% horizontal + vertical centering ho jaati hai.',
          code: `/* 1. Famous 3-Line Perfect Centering */
.perfect-center {
  display: flex;
  justify-content: center; /* Main Axis Center */
  align-items: center;     /* Cross Axis Center */
  min-height: 200px;
}

/* 2. Navbar Layout (Logo on Left, Links on Right) */
.navbar {
  display: flex;
  justify-content: space-between; /* Maximum separation */
  align-items: center;            /* Vertical alignment */
  padding: 12px 24px;
}

/* 3. Space-Evenly Cards Row */
.card-row {
  display: flex;
  justify-content: space-evenly;
  align-items: stretch; /* Cards will have equal height */
}`,
          codeBreakdown: [
            { part: 'justify-content: space-between', label: 'First item at start, last item at end, equal space in between', color: '#ef4444' },
            { part: 'justify-content: center', label: 'Packs all flex items together in the center of main axis', color: '#3b82f6' },
            { part: 'align-items: center', label: 'Centers items vertically along the cross axis', color: '#10b981' },
            { part: 'align-items: stretch', label: 'Default: Stretches items to match tallest sibling height', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ Parent container ko height na dena aur sochna vertical center kyun nahi hua (parent height zero hoti hai)',
            '❌ space-between aur space-around mein difference na samajhna'
          ],
          proTips: [
            '💡 Navbars ke liye `justify-content: space-between; align-items: center;` universal golden standard hai',
            '💡 Space-evenly har item ke chaaron taraf exact equal space deta hai'
          ],
          interviewQuestions: [
            'CSS mein kisi div ko horizontally aur vertically center kaise karte hain (3 ways)?',
            'space-between, space-around aur space-evenly mein kya difference hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Navbar mein logo ko extreme left aur navigation links ko extreme right bhejne ke liye kaunsi justify-content value use hoti hai?',
            options: ['justify-content: space-between;', 'justify-content: center;', 'justify-content: space-around;', 'justify-content: flex-end;'],
            answer: 'justify-content: space-between;',
            explanation: '`space-between` first item ko start edge aur last item ko end edge par place karke beech mein space divide karta hai.'
          },
          summary: ['justify-content main axis align karta hai', 'align-items cross axis align karta hai', 'space-between navbars ke liye perfect hai', 'Dono center dekar perfect centering hoti hai'],
          flashcard: { q: 'Perfect CSS centering ka 3-line formula kya hai?', a: 'display: flex; justify-content: center; align-items: center;' },
          funFact: '🎉 Fun Fact: "How to center a div in CSS" Google par web development ka #1 most searched question raha hai!',
          challenge: {
            instruction: 'Ek `.hero-center` class banao jisme display flex, justify-content center, aur align-items center ho.',
            initialCode: '/* Perfect centering */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.hero-center') && n.includes('justify-content: center') && n.includes('align-items: center')
            },
            successMessage: 'Centering Mastered! Div centered like a Pro! +30 XP ⚖️'
          }
        },

        // ─── LESSON 20: FLEX GROW, SHRINK & BASIS ─────────
        {
          id: 'css-flex-content',
          title: 'Flex Grow, Shrink, Basis & Align Content',
          emoji: '🔄',
          xpReward: 30,
          badgeName: 'Flex Dynamic',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Flex Grow, Shrink & Basis — Items ka dynamic aakaar! 🔄\n\nflex-grow: 1 bache hue saare space ko le leta hai!\nflex: 1 shorthand sabse powerful hai! 😎"',
            hint: '💡 Masti Sir: "Search bar layout: input pe flex: 1 do aur button pe fixed width — input poori bachi hui space le lega!"',
            success: '🥳 Masti Sir: "Flex sizing dynamics mastered! Responsive UI pro! 🔥"',
            mistake: '😅 Masti Sir: "align-content tab kaam karta hai jab multiple flex lines (flex-wrap: wrap) hon!"'
          },
          englishDef: 'Flex item sizing properties control how items expand and contract: flex-grow (growth factor into remaining space), flex-shrink (shrink factor when space overflows), and flex-basis (initial default size before growth/shrink). The shorthand is flex: grow shrink basis (e.g. flex: 1 1 auto or flex: 1). align-content aligns wrapped lines.',
          hinglishExplain: '`flex-grow: 1;` item ko bacha hua saara khali space lene ki power deta hai (jaise search input). `flex-shrink: 0;` item ko screen choti hone par bhi shrink (dabaane) se rokta hai. `flex: 1;` shorthand sabhi flex columns ko equal width mein divide kar deta hai.',
          code: `/* 1. Flexible Search Input Bar */
.search-form {
  display: flex;
  gap: 8px;
}

.search-input {
  flex: 1; /* Takes all available remaining width! */
}

.search-btn {
  flex-shrink: 0; /* Button will never shrink or squish */
  padding: 10px 20px;
}

/* 2. Equal 3-Column Cards */
.card-col {
  flex: 1 1 0; /* Equal width columns regardless of content size */
}

/* 3. Multi-line Wrapped Alignment */
.multi-line-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between; /* Space between wrapped row lines */
  min-height: 400px;
}`,
          codeBreakdown: [
            { part: 'flex: 1', label: 'Shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 0% — fills available space', color: '#10b981' },
            { part: 'flex-shrink: 0', label: 'Protects critical elements (like icons/buttons) from shrinking', color: '#ef4444' },
            { part: 'align-content', label: 'Aligns wrapped flex lines along cross axis (requires flex-wrap: wrap)', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ `align-content` ko single-line flex container par lagana (ye sirf wrapped multi-line containers par kaam karta hai)',
            '❌ flex items par fixed `width` lagakar shrink hone par layout break hona'
          ],
          proTips: [
            '💡 Input with Button formula: `.input { flex: 1; } .btn { flex-shrink: 0; }`'
          ],
          interviewQuestions: [
            'flex: 1 shorthand ka kya matlab hota hai?',
            'align-items aur align-content mein kya difference hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Flex container mein bachi hui poori khali space ko occupy karne ke liye flex item par kya lagate hain?',
            options: ['flex: 1; (ya flex-grow: 1;)', 'width: 100%;', 'flex-shrink: 1;', 'align-self: fill;'],
            answer: 'flex: 1; (ya flex-grow: 1;)',
            explanation: '`flex: 1;` flex item ko remaining empty space proportionally distribute karke expand hone deta hai.'
          },
          summary: ['flex-grow bacha hua space allocate karta hai', 'flex-shrink: 0 squishing rokta hai', 'flex: 1 equal columns banata hai', 'align-content wrapped lines ko align karta hai'],
          flashcard: { q: 'flex: 1 ka full shorthand kya hota hai?', a: 'flex: 1 1 0% (flex-grow: 1, flex-shrink: 1, flex-basis: 0%).' },
          funFact: '🎉 Fun Fact: Modern UI frameworks jaise Bootstrap aur Tailwind ke grid systems internally Flexbox flex: 1 use karte hain!',
          challenge: {
            instruction: 'Ek `.search-input` class banao with flex 1 aur ek `.search-btn` class with flex-shrink 0.',
            initialCode: '/* Flex grow and shrink */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.search-input') && n.includes('flex: 1') && n.includes('flex-shrink: 0')
            },
            successMessage: 'Flex Grow & Shrink Mastered! +30 XP 🔄'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: MODERN LAYOUTS — CSS GRID
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Modern Layouts — CSS Grid',
      lessons: [
        // ─── LESSON 21: CSS GRID FUNDAMENTALS ─────────────
        {
          id: 'css-grid-basics',
          title: 'CSS Grid Layout Fundamentals',
          emoji: '▦',
          xpReward: 30,
          badgeName: 'Grid Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Grid — 2-Dimensional Layout Engine! ▦🏗️\n\nFlexbox 1D tha (sirf row ya column), Grid 2D hai (Rows AUR Columns dono ek sath)! Dashboard aur Photo Gallery ka king! 😎"',
            hint: '💡 Masti Sir: "display: grid; grid-template-columns: repeat(3, 1fr); se instant 3-column responsive grid banti hai!"',
            success: '🥳 Masti Sir: "CSS Grid Architect! 2D layout powers unlocked! 🔥"',
            mistake: '😅 Masti Sir: "fr (fractional unit) use karo percentage % ke bajaye — gaps automatically calculate ho jaate hain!"'
          },
          englishDef: 'CSS Grid Layout is a 2-dimensional grid-based layout system with rows and columns, making it easy to design complex responsive web layouts without floats or positioning. Key properties include display: grid, grid-template-columns, and grid-template-rows.',
          hinglishExplain: 'CSS Grid 2-Dimensional layout engine hai — isme Rows (horizontal) aur Columns (vertical) dono ek sath control hote hain (jaise chessboard ya Excel sheet). `grid-template-columns: 1fr 1fr 1fr;` se 3 equal columns ban jaate hain bina kisi complex calculation ke.',
          code: `/* 1. 3-Column Grid Layout */
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  grid-template-rows: auto;
  gap: 20px;
}

/* 2. Sidebar + Main Content Layout */
.dashboard-layout {
  display: grid;
  grid-template-columns: 260px 1fr; /* Fixed 260px sidebar + remaining space */
  gap: 24px;
}`,
          codeBreakdown: [
            { part: 'display: grid', label: 'Activates 2D grid container formatting context', color: '#ef4444' },
            { part: 'grid-template-columns: 1fr 1fr 1fr', label: 'Defines 3 columns sharing available space in fractions (fr)', color: '#3b82f6' },
            { part: 'grid-template-columns: 260px 1fr', label: 'Fixed sidebar column + fluid flexible content column', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Grid columns ke liye hardcoded percentages `33.33%` calculate karna (fr unit use karo)'
          ],
          proTips: [
            '💡 When to use what: **Flexbox** for 1D micro-components (navbars, button groups); **Grid** for 2D macro-layouts (dashboards, galleries)'
          ],
          interviewQuestions: [
            'Flexbox aur CSS Grid mein kya fundamental difference hai?',
            'fr unit kya hoti hai aur ye percentage (%) se better kyun hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS Grid ko activate karne ke liye parent element par kaunsi property lagate hain?',
            options: ['display: grid;', 'display: flex-grid;', 'grid: true;', 'layout: grid;'],
            answer: 'display: grid;',
            explanation: '`display: grid;` element ko CSS 2D Grid container mein convert karta hai.'
          },
          summary: ['Grid 2D rows aur columns layout hai', 'fr unit space divide karti hai', 'Dashboard aur galleries ke liye best hai'],
          flashcard: { q: 'fr unit ka full form kya hai?', a: 'Fractional Unit (1fr = 1 fraction of available free space).' },
          funFact: '🎉 Fun Fact: CSS Grid CSS history ka pehla module tha jo Microsoft ne W3C ke saath milkar design kiya tha!',
          challenge: {
            instruction: 'Ek `.grid-container` class banao jisme display grid, grid-template-columns 1fr 1fr, aur gap 16px ho.',
            initialCode: '/* 2-Column Grid */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.grid-container') && n.includes('display: grid') && n.includes('1fr 1fr')
            },
            successMessage: 'CSS Grid Basics Mastered! +30 XP ▦'
          }
        },

        // ─── LESSON 22: GRID GAP & REPEAT() ───────────────
        {
          id: 'css-grid-gap',
          title: 'Grid Gap, Fractional Units & repeat()',
          emoji: '⚡',
          xpReward: 30,
          badgeName: 'Grid Optimizer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "repeat() function — Code ko chota aur smart banao! ⚡\n\n1fr 1fr 1fr 1fr likhne ke bajaye `repeat(4, 1fr)` likho! Aur gap se rows aur columns ke beech spacing do! 😎"',
            hint: '💡 Masti Sir: "gap: 20px rows aur columns dono ke beech barabar space deta hai!"',
            success: '🥳 Masti Sir: "repeat() & gap mastered! Clean professional grid code! 🔥"',
            mistake: '😅 Masti Sir: "repeat(3, 1fr) mein count aur unit dono comma se alag hote hain!"'
          },
          englishDef: 'The repeat() function simplifies repetitive grid track declarations (e.g. repeat(3, 1fr) instead of 1fr 1fr 1fr). The gap property (along with row-gap and column-gap) specifies spacing between grid cells without affecting outer margins.',
          hinglishExplain: '`repeat()` function se baar-baar same columns likhne ki zaroorat nahi hoti — jaise 12-column grid ke liye `repeat(12, 1fr)` likh sakte hain. `gap: 20px;` grid items ke beech automatic space maintain karta hai.',
          code: `/* 1. 4-Column Card Grid using repeat() */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 equal columns */
  gap: 24px;                             /* Space between cards */
}

/* 2. Distinct Row and Column Gaps */
.custom-gap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 32px;    /* Vertical row spacing */
  column-gap: 16px; /* Horizontal column spacing */
}`,
          codeBreakdown: [
            { part: 'repeat(4, 1fr)', label: 'Repeats 1fr unit 4 times cleanly', color: '#10b981' },
            { part: 'row-gap & column-gap', label: 'Separate horizontal vs vertical grid cell spacing', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ `grid-gap` likhna — modern standard property sirf `gap:` hai (`grid-` prefix deprecated ho chuka hai)'
          ],
          proTips: [
            '💡 12-Column System: `grid-template-columns: repeat(12, 1fr);` se Bootstrap-style layout ban jata hai'
          ],
          interviewQuestions: [
            'repeat() function grid-template-columns mein kaise help karta hai?',
            'gap property aur margin mein kya difference hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: '6 equal columns define karne ka sabse clean syntax kaunsa hai?',
            options: ['grid-template-columns: repeat(6, 1fr);', 'grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;', 'grid-columns: 6;', 'columns: repeat(6);'],
            answer: 'grid-template-columns: repeat(6, 1fr);',
            explanation: '`repeat(6, 1fr)` 6 equal columns ko clean aur maintainable syntax mein declare karta hai.'
          },
          summary: ['repeat() track declarations ko compact banata hai', 'gap grid cells ke beech space deta hai', 'row-gap aur column-gap independent control dete hain'],
          flashcard: { q: 'repeat(4, 1fr) ka kya matlab hai?', a: '4 equal fractional columns (1fr 1fr 1fr 1fr).' },
          funFact: '🎉 Fun Fact: gap property ab CSS Grid ke sath-sath Flexbox par bhi 100% browsers mein kaam karti hai!',
          challenge: {
            instruction: 'Ek `.photo-gallery` class banao jisme display grid, grid-template-columns repeat(3, 1fr), aur gap 16px ho.',
            initialCode: '/* Gallery Grid */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.photo-gallery') && n.includes('repeat(3, 1fr)') && n.includes('gap:')
            },
            successMessage: 'repeat() & Gap Mastered! +30 XP ⚡'
          }
        },

        // ─── LESSON 23: GRID TEMPLATE AREAS & AUTO-FIT ────
        {
          id: 'css-grid-areas',
          title: 'Grid Template Areas & Auto-Fit Magic',
          emoji: '🪄',
          xpReward: 30,
          badgeName: 'Grid Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Grid Template Areas & Auto-Fit Magic! 🪄✨\n\n`repeat(auto-fit, minmax(250px, 1fr))` — Bina kisi Media Query ke 100% responsive card grid! Web design ka sabse powerful magic trick! 😎"',
            hint: '💡 Masti Sir: "grid-template-areas se ASCII art ki tarah layout likh sakte ho: \"header header\" \"sidebar main\" \"footer footer\"!"',
            success: '🥳 Masti Sir: "Grid Wizard! Zero Media-Query Responsive Grid unlocked! 🔥"',
            mistake: '😅 Masti Sir: "minmax(250px, 1fr) ensure karta hai ki card 250px se chota na ho aur space milne par 1fr expand ho!"'
          },
          englishDef: 'grid-template-areas allows named ASCII-like visual layout design. The auto-fit and minmax() combination (repeat(auto-fit, minmax(280px, 1fr))) creates fully responsive auto-wrapping grids that automatically adjust column counts based on screen size without writing media queries.',
          hinglishExplain: '`repeat(auto-fit, minmax(250px, 1fr))` ek magical one-line responsive grid formula hai. Desktop par 4 cards dikhenge, tablet par 2, aur mobile par 1 — bina ek bhi `@media` query likhe! `grid-template-areas` se page ko naam dekar ("header", "main", "footer") map kiya ja sakta hai.',
          code: `/* 1. Magical Zero-Media-Query Responsive Grid */
.responsive-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* 2. Visual Layout Blueprint with Named Areas */
.page-layout {
  display: grid;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 16px;
}

.site-header { grid-area: header; }
.site-sidebar { grid-area: sidebar; }
.site-main    { grid-area: main; }
.site-footer  { grid-area: footer; }`,
          codeBreakdown: [
            { part: 'auto-fit', label: 'Fits as many columns as possible into available container width', color: '#10b981' },
            { part: 'minmax(280px, 1fr)', label: 'Minimum 280px width, but expands up to 1fr share', color: '#3b82f6' },
            { part: 'grid-template-areas', label: 'Visual blueprint mapping named layout regions', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ minmax mein min value max se badi likhna (e.g. minmax(1fr, 250px) is invalid)'
          ],
          proTips: [
            '💡 E-commerce product listings ke liye `repeat(auto-fit, minmax(240px, 1fr))` sabse best formula hai'
          ],
          interviewQuestions: [
            'auto-fit aur auto-fill mein kya difference hota hai?',
            'minmax() function kaise kaam karta hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Zero Media Query responsive grid banane ke liye kaunsa formula use hota hai?',
            options: ['repeat(auto-fit, minmax(250px, 1fr))', 'repeat(12, 1fr)', 'grid-template-columns: 100%', 'grid-auto-flow: dense'],
            answer: 'repeat(auto-fit, minmax(250px, 1fr))',
            explanation: '`repeat(auto-fit, minmax(250px, 1fr))` screen width ke hisaab se automatic column calculation karta hai bina media query ke.'
          },
          summary: ['auto-fit aur minmax responsive grids banate hain', 'grid-template-areas visual blueprint layout deta hai', 'E-commerce cards ke liye golden formula hai'],
          flashcard: { q: 'minmax(200px, 1fr) kya karta hai?', a: 'Element ko minimum 200px size deta hai aur extra space milne par 1fr expand karta hai.' },
          funFact: '🎉 Fun Fact: CSS Grid template areas se layout design bilkul ASCII text art jaisa dikhta hai!',
          challenge: {
            instruction: 'Ek `.auto-grid` class banao jisme display grid, grid-template-columns repeat(auto-fit, minmax(200px, 1fr)), aur gap 16px ho.',
            initialCode: '/* Auto-fit grid */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.auto-grid') && n.includes('auto-fit') && n.includes('minmax')
            },
            successMessage: 'Grid Template Areas & Auto-Fit Mastered! +30 XP 🪄'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: RESPONSIVE DESIGN, TRANSITIONS & ANIMATIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Responsive Design, Transitions & Animations',
      lessons: [
        // ─── LESSON 24: MEDIA QUERIES & RESPONSIVE DESIGN ─
        {
          id: 'css-responsive',
          title: 'Media Queries & Responsive Design',
          emoji: '📱',
          xpReward: 30,
          badgeName: 'Mobile First Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Media Queries — Mobile, Tablet aur Desktop ka magic switch! 📱💻\n\nMobile-first approach follow karo! Pehle phone ke liye style likho, phir `@media (min-width: 768px)` se screen badi hone par expand karo! 😎"',
            hint: '💡 Masti Sir: "HTML <head> mein <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> hona mandatory hai!"',
            success: '🥳 Masti Sir: "Responsive Design Master! Har device par pixel-perfect! 🔥"',
            mistake: '😅 Masti Sir: "Viewport meta tag bhool gaye toh mobile browser desktop zoom view dikhayega!"'
          },
          englishDef: 'Responsive Web Design (RWD) ensures web pages render well on a variety of devices and screen sizes. Media Queries (@media) apply specific CSS rules based on device characteristics like screen width, orientation, and resolution.',
          hinglishExplain: 'Media Queries `@media` se hum screen width ke hisaab se styles change karte hain — jaise mobile par 1 column, tablet par 2 columns aur desktop par 4 columns. **Mobile-First Approach** mein pehle mobile ka clean base style likhte hain aur `@media (min-width: 768px)` se screen badi hone par layout upgrade karte hain.',
          code: `/* 1. Base Styles (Mobile First — Default) */
.container {
  width: 100%;
  padding: 16px;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr; /* 1 column on Mobile */
  gap: 16px;
}

/* 2. Tablet Breakpoint (768px and up) */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on Tablet */
    gap: 20px;
  }
}

/* 3. Desktop Breakpoint (1024px and up) */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on Desktop */
    gap: 24px;
  }
}`,
          codeBreakdown: [
            { part: 'Mobile-First Default', label: 'Clean single-column mobile styling without media queries', color: '#10b981' },
            { part: '@media (min-width: 768px)', label: 'Tablet breakpoint: triggers when screen is >= 768px', color: '#3b82f6' },
            { part: '@media (min-width: 1024px)', label: 'Desktop breakpoint: triggers when screen is >= 1024px', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ HTML mein viewport meta tag na lagana',
            '❌ Max-width queries se desktop-first likhna (mobile-first min-width zyada clean aur fast hota hai)'
          ],
          proTips: [
            '💡 Standard Breakpoints: 640px (Mobile landscape), 768px (Tablet), 1024px (Laptop), 1280px (Desktop)',
            '💡 Chrome DevTools (Ctrl+Shift+M) se alag-alag phone screen sizes test karo'
          ],
          interviewQuestions: [
            'Mobile-First design kya hai aur min-width vs max-width queries mein kya farak hai?',
            'Viewport meta tag ka kya purpose hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Mobile-first responsive design mein kaunsi media query use ki jaati hai?',
            options: ['@media (min-width: 768px)', '@media (max-width: 768px)', '@media (device: tablet)', '@media (screen: mobile)'],
            answer: '@media (min-width: 768px)',
            explanation: 'Mobile-first strategy mein base styles mobile ke liye hote hain aur `(min-width: ...)` se screen badi hone par styles add hote hain.'
          },
          summary: ['Media Queries screen width ke hisaab se styles adapt karti hain', 'Mobile-first min-width standard practice hai', 'Breakpoints: 768px tablet, 1024px desktop'],
          flashcard: { q: 'Mobile-first approach mein kaunsi query use hoti hai?', a: '@media (min-width: ...)' },
          funFact: '🎉 Fun Fact: 2015 mein pehli baar mobile web traffic ne desktop traffic ko overtake kar liya tha — aaj 60%+ traffic mobile se aata hai!',
          challenge: {
            instruction: 'Ek media query likho: `@media (min-width: 768px) { .nav { display: flex; } }`',
            initialCode: '/* Media query yahan */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('@media') && n.includes('min-width: 768px') && n.includes('.nav')
            },
            successMessage: 'Responsive Design & Media Queries Mastered! +30 XP 📱'
          }
        },

        // ─── LESSON 25: TRANSITIONS & TRANSFORMS ──────────
        {
          id: 'css-transforms',
          title: 'CSS Transitions & 2D/3D Transforms',
          emoji: '🔄',
          xpReward: 30,
          badgeName: 'Motion Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Transitions & Transforms — Website ko smooth aur interactive banayein! 🔄✨\n\ntransition: all 0.2s ease; aur transform: translateY(-4px); — har modern card hover ka secret! 😎"',
            hint: '💡 Masti Sir: "Transform (translate, scale, rotate) GPU accelerated hota hai — 60 FPS buttery smooth animation!"',
            success: '🥳 Masti Sir: "Motion Master! Smooth micro-interactions ready! 🔥"',
            mistake: '😅 Masti Sir: "Hover par width ya top animate mat karo — lag karega! transform: translate aur scale use karo!"'
          },
          englishDef: 'CSS Transitions allow you to smoothly animate property changes over a specified duration (transition: all 0.2s ease). CSS Transforms modify the coordinate space to translate (move), scale (resize), rotate, and skew elements in 2D or 3D space.',
          hinglishExplain: '`transition` property changes ko smooth animated banati hai (jaise button hover par color foran change hone ke bajaye 0.2s mein smoothly change ho). `transform` element ko move (`translate`), bada-chota (`scale`), ya ghumana (`rotate`) karta hai.',
          code: `/* 1. Smooth Interactive Button */
.btn-primary {
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  /* Property, Duration, Timing Function */
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.2s;
}

.btn-primary:hover {
  background-color: #2563eb;
  transform: translateY(-2px); /* Slight lift */
}

/* 2. Modern Elevated Card Hover */
.feature-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-6px) scale(1.02); /* Lift and micro-zoom */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* 3. 2D Rotation Icon */
.icon-spin:hover {
  transform: rotate(180deg);
}`,
          codeBreakdown: [
            { part: 'transition: transform 0.2s ease', label: 'Defines duration and easing for smooth state transition', color: '#10b981' },
            { part: 'transform: translateY(-4px)', label: 'Moves element 4px upward on Y-axis (GPU accelerated)', color: '#3b82f6' },
            { part: 'transform: scale(1.02)', label: 'Enlarges element by 2% on hover', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Hover transition par `top` ya `margin` animate karna — repaint trigger hota hai aur lag karta hai',
            '❌ Transition duration bohot lambi dena (1s se zyada sluggish lagta hai — 0.15s se 0.3s best hai)'
          ],
          proTips: [
            '💡 Performance Golden Rule: Sirf `transform` aur `opacity` animate karo (60fps GPU Compositor thread)'
          ],
          interviewQuestions: [
            'transform vs top/left animation mein performance ka kya farak hai?',
            'transition-timing-function (ease, linear, cubic-bezier) kya hoti hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Card hover par smooth upward lift effect ke liye kaunsa transform use hota hai?',
            options: ['transform: translateY(-4px);', 'top: -4px;', 'margin-top: -4px;', 'transform: lift(4px);'],
            answer: 'transform: translateY(-4px);',
            explanation: '`transform: translateY(-4px);` GPU accelerated way mein element ko 4px upward move karta hai.'
          },
          summary: ['transition changes ko smooth banata hai', 'transform translate, scale aur rotate karta hai', 'GPU acceleration se 60 FPS smooth animations banti hain'],
          flashcard: { q: 'High-performance animation ke liye kaunsi 2 CSS properties use karni chahiye?', a: 'transform aur opacity (GPU Compositor layer).' },
          funFact: '🎉 Fun Fact: `cubic-bezier()` curve se physics-like spring aur bounce effects banaye ja sakte hain!',
          challenge: {
            instruction: 'Ek `.card` class banao jisme transition transform 0.2s ease ho aur hover par transform translateY(-4px) ho.',
            initialCode: '/* Hover transition */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.card') && n.includes('transition:') && n.includes('translatey')
            },
            successMessage: 'Transitions & Transforms Mastered! +30 XP 🔄'
          }
        },

        // ─── LESSON 26: KEYFRAME ANIMATIONS ───────────────
        {
          id: 'css-animations',
          title: 'CSS @keyframes Animations',
          emoji: '🎬',
          xpReward: 30,
          badgeName: 'Animation Director',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "@keyframes Animations — Pure CSS mein chalne wala movie show! 🎬🍿\n\nSpinners, pulses, bounce effects aur skeleton loaders — bina JavaScript ke infinite animations! 😎"',
            hint: '💡 Masti Sir: "@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }"',
            success: '🥳 Masti Sir: "Animation Director! Movie-like CSS animations ready! 🔥"',
            mistake: '😅 Masti Sir: "animation-iteration-count: infinite lagana bhool gaye toh animation sirf 1 baar chalke ruk jayegi!"'
          },
          englishDef: 'CSS @keyframes rules let you create complex, multi-step animations by controlling intermediate steps between start (0% / from) and finish (100% / to). The animation property configures name, duration, timing-function, delay, iteration-count, and direction.',
          hinglishExplain: '`@keyframes` se custom animations banti hain. Aap 0% (shuruat), 50% (beech), aur 100% (khatam) par alag-alag styles define karte ho. Phir element par `animation: spin 1s infinite linear;` lagakar usko continuously ghumate ya pulse karte ho.',
          code: `/* 1. Loading Spinner Keyframe */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e2e8f0;
  border-top-color: #3b82f6; /* Blue spinner head */
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* 2. Pulsing Notification Dot */
@keyframes pulseGlow {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.15);
    opacity: 0.7;
  }
}

.pulse-dot {
  width: 12px;
  height: 12px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: pulseGlow 1.5s ease-in-out infinite;
}`,
          codeBreakdown: [
            { part: '@keyframes name { ... }', label: 'Defines the animation keyframe steps (0% to 100%)', color: '#ef4444' },
            { part: 'animation: spin 0.8s linear infinite', label: 'Name (spin), Duration (0.8s), Timing (linear), Repeats (infinite)', color: '#10b981' },
            { part: '0%, 50%, 100%', label: 'Multi-stage animation checkpoints', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ `animation-duration` bhool jana — default 0s hota hai toh animation chalti hi nahi',
            '❌ Non-GPU properties (jaise width, margin) ko continuously animate karna jisse CPU fan tej chalne lage'
          ],
          proTips: [
            '💡 Respect Accessibility: `@media (prefers-reduced-motion: reduce)` se motion-sensitive users ke liye animations disable karo'
          ],
          interviewQuestions: [
            '@keyframes animation aur transition mein kya difference hai?',
            'animation-fill-mode property (forwards, backwards) kya karti hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Animation ko continuously bina ruke chalane ke liye kaunsi iteration-count value use hoti hai?',
            options: ['infinite', 'loop', 'continuous', 'forever'],
            answer: 'infinite',
            explanation: '`animation-iteration-count: infinite;` animation ko endless loop mein run karta hai.'
          },
          summary: ['@keyframes intermediate animation steps define karta hai', 'animation shorthand name, duration, loop set karta hai', 'Loading spinners aur pulse dots @keyframes se bante hain'],
          flashcard: { q: 'animation-fill-mode: forwards kya karta hai?', a: 'Animation khatam hone par element ko 100% wali final state par hold karta hai (reset nahi hone deta).' },
          funFact: '🎉 Fun Fact: Pure CSS mein 3D solar system aur cartoon animations banayi ja sakti hain bina 1 line JS ke!',
          challenge: {
            instruction: 'Ek `@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }` banao aur `.fade` class mein `animation: fadeIn 0.5s ease;` lagao.',
            initialCode: '/* Keyframe animation */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('@keyframes fadein') && n.includes('animation:')
            },
            successMessage: 'Keyframe Animations Mastered! +30 XP 🎬'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: MODERN CSS, INTERVIEW & PROJECTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Modern CSS, Interview & Projects',
      lessons: [
        // ─── LESSON 27: CSS VARIABLES & DARK MODE ─────────
        {
          id: 'css-variables',
          title: 'CSS Custom Properties (Variables) & Dark Mode',
          emoji: '🌙',
          xpReward: 30,
          badgeName: 'Dark Mode Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Variables & Dark Mode — 1 click mein poori website ka theme badlo! 🌙☀️\n\n--primary-color: #3b82f6; define karo aur `var(--primary-color)` se har jagah use karo! Design System ka heart! 😎"',
            hint: '💡 Masti Sir: ":root { --bg: #fff; --text: #000; } aur [data-theme=\"dark\"] { --bg: #0f172a; --text: #fff; } — effortless dark mode!"',
            success: '🥳 Masti Sir: "Dark Mode Wizard! Production-level design system architecture unlocked! 🔥"',
            mistake: '😅 Masti Sir: "CSS variables ke aage double dash (--) lagana zaroori hai! --my-color!"'
          },
          englishDef: 'CSS Custom Properties (Variables) are entities defined by CSS authors containing specific values reused throughout a document using the var() function. They cascade, inherit, and allow dynamic runtime theming like Dark Mode.',
          hinglishExplain: 'CSS Variables se hum color, spacing ya fonts ko ek jagah `--primary: #3b82f6;` define kar lete hain aur poore code mein `var(--primary)` se use karte hain. Jab Light se Dark mode switch karna hota hai, toh sirf variable ki value badalte hain aur poori website ek instant mein theme switch kar leti hai.',
          code: `/* 1. Global Variables Defined on :root */
:root {
  --bg-color: #ffffff;
  --text-color: #0f172a;
  --primary: #3b82f6;
  --card-bg: #f8fafc;
  --border-color: #e2e8f0;
}

/* 2. Dark Mode Overrides */
[data-theme="dark"] {
  --bg-color: #0f172a;
  --text-color: #f8fafc;
  --card-bg: #1e293b;
  --border-color: #334155;
}

/* 3. Using CSS Variables */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease;
}

.card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
}`,
          codeBreakdown: [
            { part: ':root { --primary: #3b82f6; }', label: 'Declares global CSS variable with double-dash prefix', color: '#10b981' },
            { part: 'var(--primary)', label: 'Consumes variable value at runtime', color: '#3b82f6' },
            { part: '[data-theme="dark"]', label: 'Theme selector swapping variables dynamically', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ `--` double dash bhool jana (`primary-color` is invalid)',
            '❌ Fallback value na dena: `var(--accent, #3b82f6)`'
          ],
          proTips: [
            '💡 Fallback syntax: `var(--custom-color, #22c55e)` — agar variable na mile toh fallback use hoga',
            '💡 JavaScript se variable change: `document.documentElement.style.setProperty("--primary", "#ef4444");`'
          ],
          interviewQuestions: [
            'CSS Variables aur SASS/SCSS variables mein kya farak hai?',
            'Dark mode CSS variables se kaise implement kiya jaata hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS Variable ko access karne ke liye kaunsa function use hota hai?',
            options: ['var(--variable-name)', 'val(--variable-name)', 'get(--variable-name)', '$variable-name'],
            answer: 'var(--variable-name)',
            explanation: 'CSS Custom Properties ko `var(--name)` function ke through call kiya jata hai.'
          },
          summary: ['Variables --name se declare hote hain', 'var(--name) se consume hote hain', ':root global scope deta hai', 'Dark mode effortlessly switch hota hai'],
          flashcard: { q: 'CSS variable ka syntax kya hai?', a: 'Declare: --color-primary: #3b82f6; Use: var(--color-primary);' },
          funFact: '🎉 Fun Fact: SASS variables compile hone ke baad static ho jaate hain, jabki CSS variables browser ke andar real-time JavaScript se change kiye ja sakte hain!',
          challenge: {
            instruction: '`:root` mein `--brand-color: #22c55e;` define karo aur `.btn` mein `background-color: var(--brand-color);` lagao.',
            initialCode: '/* CSS Variables */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes(':root') && n.includes('--brand-color') && n.includes('var(--brand-color)')
            },
            successMessage: 'CSS Variables & Dark Mode Mastered! +30 XP 🌙'
          }
        },

        // ─── LESSON 28: CSS INTERVIEW QUESTIONS ───────────
        {
          id: 'css-interview',
          title: 'CSS Top Technical Interview Questions',
          emoji: '🎯',
          xpReward: 30,
          badgeName: 'CSS Interview Ace',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Interview Questions — Google, Amazon, Zomato ke actual frontend questions! 🎯\n\nBox Model, Specificity, Centering, Flexbox vs Grid — confidence ke saath answer do! 🏆"',
            hint: '💡 Masti Sir: "Interview mein answer dete waqt real code example aur mental model explain karo!"',
            success: '🥳 Masti Sir: "Interview Ready! Frontend CSS round cleared! 🔥"',
            mistake: '😅 Masti Sir: "Answer ratta mat maro — visual concept explain karo!"'
          },
          englishDef: 'This lesson consolidates the most frequently asked CSS interview questions across junior to senior frontend engineering interviews, including Specificity hierarchy, Box Model, Stacking Context, Flexbox vs Grid, BEM naming, and responsive architecture.',
          hinglishExplain: 'Frontend interviews mein CSS ke core fundamentals par questions aate hain. Yahan top 10 most common questions unke clear concise answers aur code examples ke saath compiled hain.',
          code: `/* Top Interview Concepts as Code */

/* 1. Centering a Div */
.center-demo {
  display: grid;
  place-items: center; /* 1-line Grid Center */
}

/* 2. Specificity War */
/* 0,0,0,1 */ p { color: black; }
/* 0,0,1,0 */ .text-blue { color: blue; }
/* 0,1,0,0 */ #main-title { color: green; } /* GREEN WINS! */

/* 3. BEM Methodology (Block Element Modifier) */
.card { }                /* Block */
.card__header { }        /* Element */
.card--highlighted { }   /* Modifier */

/* 4. Reset vs Normalize */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}`,
          codeBreakdown: [
            { part: 'place-items: center', label: '1-line modern CSS Grid horizontal + vertical center', color: '#10b981' },
            { part: 'Specificity Hierarchy', label: 'ID (100) > Class (10) > Element (1)', color: '#ef4444' },
            { part: 'BEM Naming', label: 'Block__Element--Modifier scalable architecture', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ !important ka over-use karna (interview mein red flag mana jata hai)',
            '❌ Stacking context ko sirf z-index samajhna bina parent position context soche'
          ],
          proTips: [
            '💡 Interview Question 1: "Div center kaise karoge?" -> `display: flex; justify-content: center; align-items: center;` ya `display: grid; place-items: center;`',
            '💡 Interview Question 2: "box-sizing: border-box kyun lagate hain?" -> Padding aur border ko total width ke andar lock karne ke liye'
          ],
          interviewQuestions: [
            'Specificity calculation kaise hoti hai?',
            'BEM methodology kya hai?',
            'Stacking context kab create hoti hai?',
            'Flexbox aur Grid kab use karna chahiye?',
            'CSS animation performance kaise optimize karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS Specificity ke hisaab se kaunsa selector sabse zyada powerful hai?',
            options: ['#header (ID Selector)', '.nav-item (Class Selector)', 'p (Element Selector)', '* (Universal Selector)'],
            answer: '#header (ID Selector)',
            explanation: 'ID Selector ki specificity score 100 hoti hai, jo Class (10) aur Element (1) se kaafi zyada powerful hoti hai.'
          },
          summary: ['Specificity ID > Class > Element hoti hai', 'Box Model border-box standard hai', 'Grid 2D aur Flexbox 1D layout hai', 'BEM maintainable naming convention hai'],
          flashcard: { q: 'BEM ka full form kya hai?', a: 'Block __Element --Modifier (e.g. card__title--bold).' },
          funFact: '🎉 Fun Fact: CSS Grid mein `place-items: center;` ek single declaration se div ko horizontally aur vertically dono center kar deta hai!',
          challenge: {
            instruction: 'Ek grid center shortcut class `.grid-center` banao with `display: grid; place-items: center;`',
            initialCode: '/* Grid centering */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.grid-center') && n.includes('display: grid') && n.includes('place-items: center')
            },
            successMessage: 'Interview Ace! Technical Questions Mastered! +30 XP 🎯'
          }
        },

        // ─── LESSON 29: MINI PROJECT — RESPONSIVE LANDING PAGE
        {
          id: 'css-project',
          title: 'Mini Project: Modern Responsive Landing Page',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'CSS Builder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Mini Project — Real World Responsive Landing Page! 🚀\n\nFlexbox Navbar, Grid Hero Cards, Gradient Buttons, aur Responsive Layouts — sab combine karke ek complete webpage style karo! 😎"',
            hint: '💡 Masti Sir: "Mobile-first approach use karo — base styles pehle, phir media queries!"',
            success: '🥳 Masti Sir: "PROJECT COMPLETE! 🎉 Tumne ek real professional landing page style kiya hai! 🏆"',
            mistake: '😅 Masti Sir: "Containers ko max-width: 1200px aur margin: 0 auto zaroor dena!"'
          },
          englishDef: 'Build a production-ready, fully responsive Modern Landing Page combining all core CSS principles: CSS Variables, Flexbox navigation bar, CSS Grid feature cards, responsive typography, modern button hover states, and dark mode ready styling.',
          hinglishExplain: 'Ab sabhi CSS concepts (Flexbox, Grid, Variables, Hover Effects, Media Queries) ko combine karke ek complete professional Landing Page design karo.',
          code: `/* ══════════════════════════════════════════════
   MODERN RESPONSIVE LANDING PAGE — CSS STYLESHEET
   ══════════════════════════════════════════════ */

:root {
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --bg: #ffffff;
  --text: #0f172a;
  --text-muted: #64748b;
  --card-bg: #f8fafc;
  --border: #e2e8f0;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

/* 1. Sticky Flexbox Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: var(--text);
  font-weight: 600;
  transition: color 0.15s;
}

.nav-links a:hover {
  color: var(--primary);
}

/* 2. Hero Section */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
  text-align: center;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #3b82f6, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.125rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 32px;
}

/* 3. Action Buttons */
.btn-primary {
  display: inline-block;
  background-color: var(--primary);
  color: #ffffff;
  padding: 12px 28px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s, background-color 0.2s;
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  transform: translateY(-2px);
}

/* 4. 2D Auto-Fit Grid Cards */
.features-grid {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.08);
}`,
          codeBreakdown: [
            { part: 'clamp(2rem, 5vw, 3.5rem)', label: 'Fluid responsive typography without media queries', color: '#10b981' },
            { part: 'repeat(auto-fit, minmax(280px, 1fr))', label: 'Self-adapting responsive card grid', color: '#3b82f6' },
            { part: 'backdrop-filter: blur(10px)', label: 'Modern frosted-glass sticky header', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ Hardcoded fixed pixel widths on mobile',
            '❌ Hover transforms without transitions'
          ],
          proTips: [
            '💡 Fluid Typography: `font-size: clamp(min, preferred, max)` responsive headings ke liye industry standard hai'
          ],
          interviewQuestions: [
            'clamp() function responsive design mein kaise help karta hai?',
            'Glassmorphism effect CSS mein kaise banate hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS clamp(1.5rem, 4vw, 3rem) mein 1.5rem kis cheez ko represent karta hai?',
            options: ['Minimum font size', 'Preferred font size', 'Maximum font size', 'Default margin'],
            answer: 'Minimum font size',
            explanation: '`clamp(MIN, VAL, MAX)` mein pehli value minimum size limit define karti hai.'
          },
          summary: ['Landing page CSS Variables, Flexbox, Grid aur Clamp use karta hai', 'Sticky navbar frosted glass effect ke sath', 'Auto-fit grid seamlessly responsive rehta hai'],
          flashcard: { q: 'clamp() ke 3 arguments kya hote hain?', a: 'clamp(minimum, preferred_fluid_value, maximum).' },
          funFact: '🎉 Fun Fact: Modern CSS itni powerful ho chuki hai ki bina kisi framework ke lightweight, ultra-fast websites banayi ja sakti hain!',
          challenge: {
            instruction: 'Complete landing page CSS create karo: .navbar (flex), .hero (centered), .btn-primary (hover transform), aur .features-grid (auto-fit 2D grid).',
            initialCode: `/* ═══════════════════════════════════════════════════════
   CSS Mini Project: Modern Responsive Landing Page 🚀
   Edit below to customize colors, cards, and animations!
   ═══════════════════════════════════════════════════════ */

:root {
  --primary: #3b82f6;
  --bg: #ffffff;
  --text: #0f172a;
}

/* 1. Navbar Layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #e2e8f0;
}

.logo {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 16px;
  list-style: none;
}

/* 2. Hero Section */
.hero {
  text-align: center;
  padding: 40px 16px;
}

.hero h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 12px;
}

.btn-primary {
  display: inline-block;
  background-color: var(--primary);
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

/* 3. Features 2D Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.feature-card {
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}`,
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('.navbar') && n.includes('.hero') && n.includes('display: grid')
            },
            successMessage: '🎉 CAPSTONE PROJECT COMPLETE! +50 XP! CSS Builder Badge Earned! 🏆'
          }
        },

        // ─── LESSON 30: COMPLETE CSS CHEAT SHEET & REFERENCE
        {
          id: 'css-cheatsheet',
          title: 'Complete CSS Cheat Sheet & Reference',
          emoji: '📋',
          xpReward: 25,
          badgeName: 'CSS Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS Master Cheat Sheet — Developer ka Pocket Reference! 📋\n\nIs lesson ko bookmark karo! Jab bhi koi property ya syntax bhool jao — yahan dekh lena! Congratulations, tumne poora CSS course complete kiya! 🏆🎉"',
            hint: '💡 Masti Sir: "Flexbox, Grid, Box Model, Variables aur Selectors sab is reference sheet mein ek sath compiled hain!"',
            success: '🥳 Masti Sir: "CSS MASTERY COMPLETE! You are now a CSS Frontend Specialist! 🏆🚀"',
            mistake: ''
          },
          englishDef: 'A comprehensive CSS quick-reference cheat sheet containing syntax, common properties, Flexbox rules, Grid blueprints, Box Model resets, responsive media query breakpoints, and modern CSS variables.',
          hinglishExplain: 'Ye CSS cheat sheet aapka quick reference guide hai. Development ke time jab bhi koi property bhool jao, yahan se instant check kar sakte ho.',
          code: `/* ═══════════════════════════════════════
   CSS MASTER CHEAT SHEET — CodeMasti
   ═══════════════════════════════════════ */

/* 1. UNIVERSAL RESET */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 2. CSS VARIABLES */
:root {
  --primary: #3b82f6;
  --bg: #ffffff;
  --text: #0f172a;
}
/* Use: var(--primary) */

/* 3. FLEXBOX ESSENTIALS */
.flex-container {
  display: flex;
  flex-direction: row;       /* row | column */
  justify-content: center;   /* start | center | end | space-between | space-evenly */
  align-items: center;       /* start | center | end | stretch */
  flex-wrap: wrap;           /* nowrap | wrap */
  gap: 16px;
}
.flex-child {
  flex: 1;                   /* grow, shrink, basis */
  flex-shrink: 0;
}

/* 4. CSS GRID ESSENTIALS */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.center-div {
  display: grid;
  place-items: center;
}

/* 5. POSITIONING */
.relative { position: relative; }
.absolute { position: absolute; top: 0; right: 0; }
.fixed    { position: fixed; bottom: 20px; right: 20px; }
.sticky   { position: sticky; top: 0; z-index: 100; }

/* 6. TYPOGRAPHY & SPACING */
body {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;           /* 16px */
  line-height: 1.6;
  text-align: left;          /* left | center | right | justify */
}
a { text-decoration: none; }
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 7. TRANSITIONS & TRANSFORMS */
.btn {
  transition: transform 0.2s ease, background-color 0.2s;
}
.btn:hover {
  transform: translateY(-2px) scale(1.02);
}

/* 8. MEDIA QUERIES (MOBILE FIRST) */
@media (min-width: 768px) {
  /* Tablet styles */
}
@media (min-width: 1024px) {
  /* Desktop styles */
}`,
          codeBreakdown: [
            { part: 'Universal Reset', label: 'box-sizing border-box reset', color: '#10b981' },
            { part: 'Flexbox & Grid', label: '1D and 2D layout standards', color: '#3b82f6' },
            { part: 'Positioning & Media Queries', label: 'Stacking context & mobile-first breakpoints', color: '#ef4444' }
          ],
          commonMistakes: [],
          proTips: [
            '💡 Is cheat sheet ko bookmark karke har project ke start mein refer karein'
          ],
          interviewQuestions: [
            'CSS ke top 5 layout techniques kaunse hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS course complete karne ke baad next step kya hai?',
            options: ['JavaScript seekho for dynamic logic', 'React seekho seedha', 'CSS bhool jao', 'Kuch mat karo'],
            answer: 'JavaScript seekho for dynamic logic',
            explanation: 'HTML + CSS ke baad JavaScript seekhna web developer banne ka agla natural step hai!'
          },
          summary: [
            'CSS Course 100% Completed! 🏆',
            'Selectors, Box Model, Flexbox, Grid, Animations, Variables — sab master hua!',
            'Next: JavaScript Mastery Course!'
          ],
          flashcard: { q: 'CSS Mastery ka core mantra kya hai?', a: 'Structure HTML deta hai, Beauty CSS deti hai, Brains JavaScript deta hai!' },
          funFact: '🎉 Final Fun Fact: Tum ab duniya ke 100% websites ke layout ko inspect karke samajh aur recreate kar sakte ho! You are a CSS Master! 🚀',
          challenge: {
            instruction: 'FINAL CHALLENGE: Reference cheat sheet use karke ek complete styled component banao jisme variables, flexbox, border-radius aur transitions sab ho.',
            initialCode: '/* CSS Master Final */\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('display: flex') || n.includes('display: grid')
            },
            successMessage: '🏆 CSS MASTER CERTIFICATE EARNED! +50 XP! Outstanding achievement!'
          }
        }
      ]
    }
  ]
}

export default cssCourse
