export const htmlCourse = {
  id: 'html',
  title: 'HTML',
  description: 'Web pages ka foundation. Structure, tags, aur browser se dosti karo. Masti Sir ke saath seekho — bilkul beginner-friendly!',
  icon: '📘',
  category: 'frontend',
  certificateName: 'HTML',
  topicsCount: 40,
  practiceCount: 40,
  projectsCount: 3,
  hoursEstimate: 12,
  level: 'Beginner',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1 — HTML BASICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: HTML Basics',
      lessons: [
        // ─── LESSON 1: INTRODUCTION ───────────────────────
        {
          id: 'html-intro',
          title: 'Introduction to HTML',
          emoji: '🌐',
          xpReward: 30,
          badgeName: 'HTML Starter',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Welcome Programmer 😎\n\nAaj HTML seekhenge.\n\nTension mat lo...\n\nBrowser ko rulayenge nahi...\n\nSirf samjhayenge 😂"',
            hint: '🤦 Masti Sir: "Arre bhai 😂\nHTML file kholne ke liye\nsirf .html extension chahiye.\nNotebook bhi nahi chahiye!"',
            success: '🥳 Masti Sir: "Wah bhai 🔥\nPehla HTML lesson complete!\nLagta hai HTML tumse dosti karne laga hai."',
            mistake: '😅 Masti Sir: "Computer tumhari feelings nahi...\nSyntax samajhta hai 😅"'
          },
          englishDef: 'HTML (HyperText Markup Language) is the standard language used to create and structure web pages. It uses elements represented by tags to define the structure and content of a webpage. Every website you visit is built on HTML.',
          hinglishExplain: 'HTML woh language hai jo browser ko batati hai ki page ko kaise dikhana hai. Jaise ek building ka naksha hota hai — usme rooms, doors, windows hote hain — waise hi HTML mein headings, paragraphs, images hote hain. Browser woh naksha padhta hai aur website build kar deta hai.',
          storyExplain: 'Socho tum ek architect ho. Tumhara client kehta hai — "Mujhe ek ghar chahiye."\n\nTum blueprint banate ho:\n- Drawing room kahan hoga\n- Kitchen kahan hogi\n- Bathroom kahan hoga\n\nYe blueprint = HTML hai.\n\nHTML browser ko batata hai:\n- Heading kahan hogi\n- Image kahan aayegi\n- Button kahan chahiye\n\nBina HTML ke website = bina blueprint ke ghar = incomplete! 🏠',
          funnyExample: {
            scenario: 'Socho tumhara dost tumse bol raha hai:\n\n"Bhai, mere ghar aa jao"\n\nPar agar tumhe address hi nahi pata, toh tum jayoge kahan?\n\nHTML browser ka address hai. Bina HTML ke browser ko pata hi nahi ki page mein kya dikhana hai! 😂',
            punchline: 'HTML = Website ka GPS Address!'
          },
          memoryTrick: 'HTML = "Har Tag Matlab Likho" 😂\n<h1> = Heading, <p> = Paragraph, <a> = Anchor.\nHar tag ka ek matlab hota hai — bas yaad rakho!',
          visualDiagram: {
            title: 'Web Page kaise banta hai?',
            nodes: ['Aap HTML likhte ho', 'Browser padhta hai', 'DOM banta hai', 'Website dikhti hai'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Browser ke andar kya hota hai?',
            steps: ['HTML File Load', 'HTML Parser', 'DOM Tree Build', 'Rendering Engine', 'Website Display']
          },
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>Meri Pehli Website</title>
  </head>
  <body>
    <h1>Namaste CodeMastii Family !</h1>
    <p>Ye meri pehli website hai!</p>
  </body>
</html>`,
          codeBreakdown: [
            { part: '<!DOCTYPE html>', label: 'Document Type Declaration — Browser ko batata hai ki ye HTML5 file hai', color: '#f59e0b' },
            { part: '<html>', label: 'Root Element — Poori website iske andar hoti hai', color: '#3b82f6' },
            { part: '<head>', label: 'Head Section — Page ki settings (title, CSS links)', color: '#8b5cf6' },
            { part: '<title>', label: 'Browser Tab mein jo naam dikhta hai', color: '#10b981' },
            { part: '<body>', label: 'Body — Yahan sab kuch likha jata hai jo screen pe dikhna chahiye', color: '#ef4444' },
            { part: '<h1>', label: 'Heading Tag — Sabse bada heading', color: '#f97316' }
          ],
          commonMistakes: [
            '❌ DOCTYPE bhool jana — Browser quirks mode mein chala jata hai',
            '❌ <body> ke bahar content likhna',
            '❌ <html> tag close karna bhool jana',
            '❌ head aur body ka order ulta karna'
          ],
          proTips: [
            '💡 HTML file .html extension se save karo',
            '💡 VS Code mein ! type karo aur Enter dabao — pura boilerplate milega!',
            '💡 Hamesha UTF-8 charset use karo'
          ],
          interviewQuestions: [
            'HTML ka full form kya hai?',
            'DOCTYPE declaration kyun zaroori hai?',
            'HTML aur HTML5 mein kya farak hai?',
            'Browser HTML ko kaise process karta hai?'
          ],
          miniChallenge: 'Apna naam aur apne school/college ka naam dikhane wali ek simple HTML page banao. Title mein "Mera Page" likho.',
          quiz: {
            type: 'mcq',
            question: 'HTML mein sabse pehle kaunsa tag likhna zaroori hai?',
            options: ['<html>', '<!DOCTYPE html>', '<head>', '<body>'],
            answer: '<!DOCTYPE html>',
            explanation: 'DOCTYPE browser ko batata hai ki document HTML5 standards mode mein render karna hai.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Blank fill karo:',
              sentence: 'HTML ka full form ___ hai.',
              answer: 'HyperText Markup Language',
              explanation: 'HyperText Markup Language — HTML ka poora naam hai!'
            },
            {
              type: 'predict',
              question: 'Ye code browser mein kya dikhayega?',
              code: '<h1>Namaste!</h1>\n<p>CodeMasti rocks!</p>',
              options: ['Ek bada heading "Namaste!" aur ek paragraph', 'Sirf text without formatting', 'Error message', 'Kuch nahi dikhega'],
              answer: 'Ek bada heading "Namaste!" aur ek paragraph',
              explanation: '<h1> bada bold heading dikhata hai aur <p> paragraph text dikhata hai.'
            }
          ],
          summary: ['HTML web pages ka structure define karta hai', 'Browser HTML parse karke website dikhata hai', 'DOCTYPE, html, head, body — ye 4 basic structure hai'],
          flashcard: { q: 'HTML ka full form kya hai?', a: 'HyperText Markup Language' },
          flashcards: [
            { q: 'DOCTYPE declaration kyun likhte hain?', a: 'Browser ko batane ke liye ki ye HTML5 document hai — standards mode activate hota hai.' },
            { q: 'HTML mein content kahan likhte hain?', a: '<body> tag ke andar — jo kuch screen pe dikhna chahiye.' }
          ],
          funFact: '🎉 Fun Fact: HTML 1.0 sirf 18 tags ke saath aaya tha 1991 mein! Aaj HTML5 mein 100+ tags hain!',
          didYouKnow: '🤯 Did You Know? Tim Berners-Lee ne HTML invent kiya tha 1989 mein CERN mein. Woh World Wide Web ke father hain!',
          realWorldUseCases: ['Google, Facebook, YouTube — sab websites HTML se start hoti hain', 'Email templates HTML mein likhe jate hain', 'Mobile apps ke UI bhi HTML/CSS se bante hain (PWA)'],
          practiceQuestions: [
            'Apne favourite actor ki ek simple HTML page banao',
            'Ek HTML page banao jisme 3 headings (h1, h2, h3) aur 2 paragraphs ho'
          ],
          challenge: {
            instruction: 'Ek complete HTML page banao jisme DOCTYPE, html, head (title: "CodeMasti"), aur body mein ek h1 heading "Namaste!" ho.',
            initialCode: '<!-- Yahan apni HTML page likho -->\n',
            validator: (code) => {
              const n = code.toLowerCase().replace(/\s+/g, '')
              return n.includes('<!doctypehtml>') && n.includes('<html') && n.includes('<head') && n.includes('<body') && n.includes('<h1')
            },
            successMessage: 'Shabaash! Tumne apni pehli HTML page bana li! +30 XP 🎉'
          }
        },

        // ─── LESSON 2: EDITORS & SETUP ────────────────────
        {
          id: 'html-editors',
          title: 'HTML Editors & Setup',
          emoji: '⚙️',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML likhne ke liye\nsabse pehle ek editor chahiye 😎\n\nNotepad bhi kaam karta hai...\npar VS Code use karo — life easy hogi!"',
            hint: '🤦 Masti Sir: "Arre bhai,\nfile .txt se save mat karo!\n.html likho — warna browser nahi samjhega 😂"',
            success: '🥳 Masti Sir: "Setup complete! 🔥\nAb tum ek real developer ki tarah kaam karte ho!"',
            mistake: '😅 Masti Sir: "File extension galat hai... .html likhna tha, .txt nahi! 😅"'
          },
          englishDef: 'An HTML editor is a tool used to write and edit HTML code. You can use simple editors like Notepad, or advanced ones like VS Code which provide syntax highlighting, auto-complete, and live preview features.',
          hinglishExplain: 'HTML likhne ke liye sirf ek text editor chahiye. Sabse simple hai Notepad — par professionals VS Code use karte hain. VS Code free hai, fast hai, aur bahut saari helpful features deta hai jaise auto-complete, error highlighting, aur live preview.',
          storyExplain: 'Socho tum ek chef ho.\n\nTum cheap tools se bhi khana bana sakte ho — pressure cooker mein.\n\nPar agar tum professional kitchen mein kaam karo — proper oven, mixer, knife set — toh kaam fast aur easy hoga!\n\nNotepad = Pressure Cooker\nVS Code = Professional Kitchen\n\nDono se HTML banta hai, par VS Code se zyada comfortable feel hoga! 🍳',
          funnyExample: {
            scenario: 'Notepad se HTML likhna:\n- Koi colors nahi\n- Koi auto-complete nahi\n- Har tag manually dhundho\n- Galti find karna mushkil\n\nVS Code se HTML likhna:\n- Color-coded tags 🎨\n- Auto-close tags ✅\n- Emmet shortcuts ⚡\n- Live Preview 👁️\n\nDono se kaam chalta hai...\nPar VS Code se mood bhi achha rehta hai! 😂',
            punchline: 'VS Code = HTML Developer ka Best Friend!'
          },
          memoryTrick: 'Editor yaad rakhne ka trick:\n"V = Very Smart Code editor" = VS Code!\nBaki editors: Sublime Text, Atom, Notepad++ bhi good options hain.',
          visualDiagram: {
            title: 'HTML Development Setup',
            nodes: ['Install VS Code', 'Create .html file', 'Write HTML code', 'Open in Browser', 'See Output'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'File se Browser tak:',
            steps: ['.html file create', 'Browser mein drag drop', 'File:// URL load', 'HTML parse', 'Display']
          },
          code: `<!-- Step 1: VS Code install karo (code.visualstudio.com) -->
<!-- Step 2: New file banao — index.html -->
<!-- Step 3: Ye shortcut try karo: type ! and press Enter -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meri Website</title>
  </head>
  <body>
    <h1>VS Code Ready hai! 🎉</h1>
    <p>HTML journey start ho gayi!</p>
  </body>
</html>`,
          codeBreakdown: [
            { part: 'lang="en"', label: 'Language attribute — Screen readers ko batata hai page English mein hai', color: '#3b82f6' },
            { part: 'charset="UTF-8"', label: 'Character encoding — Hindi, Emoji sab support karta hai', color: '#10b981' },
            { part: 'viewport', label: 'Mobile responsiveness ke liye zaroori — iske bina mobile pe zoom issue aata hai', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ File .txt se save karna — .html extension use karo',
            '❌ Browser mein file path nahi milti — file drag-drop karo ya double-click',
            '❌ VS Code mein changes save kiye bina reload karna'
          ],
          proTips: [
            '💡 VS Code mein ! + Enter dabao — pura HTML boilerplate milta hai',
            '💡 "Live Server" extension install karo — auto-reload feature milega',
            '💡 Ctrl+Shift+P = Command Palette — sab kuch yahan milega'
          ],
          interviewQuestions: [
            'HTML file ka extension kya hota hai?',
            'VS Code mein Emmet kya hai?',
            'Kaunse popular HTML editors hain?'
          ],
          miniChallenge: 'VS Code install karo, ek index.html file banao, aur "Hello CodeMasti!" heading wali page browser mein open karo.',
          quiz: {
            type: 'mcq',
            question: 'VS Code mein pura HTML boilerplate quickly likhne ke liye kya shortcut use karte hain?',
            options: ['Ctrl+H', '! + Enter (Emmet)', 'html:5 + Tab', 'Ctrl+B'],
            answer: '! + Enter (Emmet)',
            explanation: 'Emmet shortcut ! + Enter se VS Code automatically pura DOCTYPE, html, head, body structure generate kar deta hai!'
          },
          summary: ['HTML file .html extension se save karte hain', 'VS Code best editor hai beginners ke liye', 'Live Server extension se auto-reload milta hai'],
          flashcard: { q: 'HTML file ka correct extension kya hota hai?', a: '.html — jaise index.html, about.html' },
          funFact: '🎉 Fun Fact: VS Code duniya ka sabse popular code editor hai — 15+ million developers use karte hain!',
          didYouKnow: '🤯 Did You Know? Pehle developers Notepad se hi websites banate the! VS Code 2015 mein Microsoft ne release kiya tha.',
          challenge: {
            instruction: 'Ek valid HTML file structure likho jisme lang="en", charset="UTF-8", viewport meta, title aur body mein kuch content ho.',
            initialCode: '<!-- Complete HTML structure yahan likho -->\n',
            validator: (code) => {
              const n = code.toLowerCase().replace(/\s+/g, '')
              return n.includes('lang=') && n.includes('charset=') && n.includes('viewport') && n.includes('<title') && n.includes('<body')
            },
            successMessage: 'Perfect setup! Professional developer ki tarah HTML likhi! +20 XP ⚙️'
          }
        },

        // ─── LESSON 3: PAGE STRUCTURE ─────────────────────
        {
          id: 'html-structure',
          title: 'HTML Page Structure',
          emoji: '🏗️',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML ka structure\nbilkul ek sandwich jaisa hai 🥪\n\nBread = html tag\nFilling = head + body\n\nBina bread ke sandwich nahi hoti!\nBina html tag ke page nahi hoti! 😂"',
            hint: '🤦 Masti Sir: "head ke andar content mat daalo...\nwoh toh browser ke liye instructions hain!\nContent sirf body mein jaata hai! 😅"',
            success: '🥳 Masti Sir: "HTML Structure ek dam perfect! 🔥\nBhai tum toh architect ban gaye!"',
            mistake: '😅 Masti Sir: "Closing tag bhool gaye?\nHar opening tag ka ek closing tag hota hai...\n<html> ka </html>!"'
          },
          englishDef: 'Every HTML page has a standard structure: DOCTYPE declaration, html element (root), head section (metadata), and body section (visible content). This structure tells the browser how to interpret and display the page.',
          hinglishExplain: 'HTML page ka ek standard structure hota hai jo hamesha same rehta hai. DOCTYPE pehle aata hai, phir html tag shuru hota hai jiske andar do main parts hote hain: head (page ki settings) aur body (screen pe jo dikhega). Ye structure ek blueprint ki tarah hai jo browser follow karta hai.',
          storyExplain: 'Socho ek school building:\n\n🏫 Building = <html> (poora container)\n📋 Office Room = <head>\n  - School name (title)\n  - Rules board (meta tags)\n  - Library books list (CSS links)\n\n🏫 Classrooms = <body>\n  - Blackboard (headings)\n  - Students (paragraphs)\n  - Photos on wall (images)\n  - Doors (links)\n\nHar cheez apni jagah pe hoti hai!\nHTML structure bhi exactly aisa hai! 🏫',
          funnyExample: {
            scenario: 'Ek confused developer ne aisa likha:\n\n<body>\n  <title>Meri Site</title>  ← GALAT!\n  <h1>Hello</h1>\n</body>\n\nBrowser ne socha:\n"Bhai title body mein kya kar raha hai? 😂"\n\nSahi tarika:\n<head>\n  <title>Meri Site</title>  ← SAHI!\n</head>\n<body>\n  <h1>Hello</h1>\n</body>',
            punchline: 'Head mein settings, Body mein content — simple rule!'
          },
          memoryTrick: 'Yaad rakho: "HEAD mein dimag ki baatein, BODY mein dikhne wali baatein!" 🧠\n<head> = metadata, settings, links\n<body> = text, images, buttons, forms',
          visualDiagram: {
            title: 'HTML Page Structure Tree',
            nodes: ['<!DOCTYPE html>', '<html>', '<head> (metadata)', '<body> (visible content)', '<title>, <meta>, <link>', '<h1>, <p>, <img>, <a>'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Browser structure kaise process karta hai:',
            steps: ['DOCTYPE read', 'html tag detect', 'head process (settings)', 'body parse', 'Render to screen']
          },
          code: `<!DOCTYPE html>
<html lang="en">

  <!-- HEAD: Browser settings, metadata -->
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CodeMasti HTML Course">
    <title>Page Title — Tab mein dikhta hai</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <!-- BODY: Screen pe dikhnewali cheezein -->
  <body>
    <h1>Yeh Heading dikhti hai</h1>
    <p>Yeh paragraph dikhta hai</p>
    <img src="image.jpg" alt="Photo">
    <a href="https://codemasti.com">Link</a>
  </body>

</html>`,
          codeBreakdown: [
            { part: 'lang="en"', label: 'Page ki language — SEO aur accessibility ke liye', color: '#3b82f6' },
            { part: '<head>', label: 'Metadata section — sab kuch jo browser needs but user nahi dekhta', color: '#8b5cf6' },
            { part: '<meta charset="UTF-8">', label: 'UTF-8 encoding — sabhi characters support karta hai', color: '#10b981' },
            { part: '<title>', label: 'Tab title + Google search title', color: '#ef4444' },
            { part: '<body>', label: 'Visible content — sab kuch jo user dekhta hai', color: '#f97316' }
          ],
          commonMistakes: [
            '❌ <title> ko <body> mein likhna',
            '❌ <style> ya <link> ko <body> mein daalna',
            '❌ <html> tag ke bahar kuch likhna',
            '❌ Closing tags bhool jana (</html>, </body>)'
          ],
          proTips: [
            '💡 Always charset="UTF-8" set karo — Hindi text bhi support karega',
            '💡 lang attribute screen readers ke liye important hai',
            '💡 meta description SEO ke liye bahut important hai'
          ],
          interviewQuestions: [
            '<head> aur <body> mein kya farak hai?',
            'HTML mein kaunsa element root element hota hai?',
            'meta charset kyun use karte hain?'
          ],
          miniChallenge: 'Ek complete HTML structure banao — proper head (charset, viewport, title, description) aur body mein ek heading aur paragraph.',
          quiz: {
            type: 'arrange',
            question: 'HTML page ka sahi structure arrange karo:',
            options: ['<body>Content</body>', '<!DOCTYPE html>', '<html lang="en">', '<head><title>Page</title></head>'],
            answer: '<!DOCTYPE html>|<html lang="en">|<head><title>Page</title></head>|<body>Content</body>',
            explanation: 'DOCTYPE pehle, phir html, phir head, phir body — ye sahi order hai!'
          },
          summary: ['DOCTYPE pehle aata hai, phir html tag', 'head mein metadata hoti hai jo screen pe nahi dikhti', 'body mein woh sab hota hai jo user dekhta hai'],
          flashcard: { q: '<head> mein kya jaata hai?', a: 'Metadata: title, meta tags, CSS links, script tags — jo browser ke liye hai, user ke liye nahi.' },
          funFact: '🎉 Fun Fact: Agar <body> tag nahi likhoge, browser automatically add kar deta hai! Lekin hamesha explicitly likhna better practice hai.',
          didYouKnow: '🤯 Did You Know? DOCTYPE ke bina browser "quirks mode" mein run karta hai — jahan CSS bahut differently behave karta hai!',
          challenge: {
            instruction: 'Ek complete HTML structure banao jisme: DOCTYPE, html(lang="en"), head(charset, viewport, title="Meri Website"), body(h1 aur p element) ho.',
            initialCode: '<!-- Complete structure yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase().replace(/\s+/g, '')
              return n.includes('<!doctypehtml>') && n.includes('lang=') && n.includes('charset=') && n.includes('viewport') && n.includes('<title') && n.includes('<h1') && n.includes('<p')
            },
            successMessage: 'Perfect HTML Structure! Architect ban gaye tum! +25 XP 🏗️'
          }
        },

        // ─── LESSON 4: ELEMENTS & ATTRIBUTES ──────────────
        {
          id: 'html-elements',
          title: 'HTML Elements & Attributes',
          emoji: '🧩',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Elements aur Attributes —\nHTML ke dono main pillars hain!\n\nElement = noun (kya hai)\nAttribute = adjective (kaisa hai)\n\nSamjhe? No? Chill — abhi samjhayenge! 😎"',
            hint: '🤦 Masti Sir: "Attribute quotes ke bina?\nBhai 😂 Attribute value hamesha quotes mein honi chahiye!\nattribute="value" — ye rule yaad rakhna!"',
            success: '🥳 Masti Sir: "Elements aur Attributes crystal clear! 🔥\nHTML ki duniya ab khul gayi tumhare liye!"',
            mistake: '😅 Masti Sir: "Attribute name aur value ke beech space mat daalo!\nclass="container" — bina space ke!"'
          },
          englishDef: 'An HTML element is defined by a start tag, some content, and an end tag. Elements can have attributes that provide additional information. Attributes appear in the opening tag as name="value" pairs. Some elements are self-closing (void elements) and don\'t need a closing tag.',
          hinglishExplain: 'HTML element = opening tag + content + closing tag. Jaise <p>Namaste</p> ek element hai. Attributes opening tag mein likhe jaate hain aur element ko extra information dete hain — jaise color, size, src, href. Self-closing elements jaise <br>, <img>, <hr> ko closing tag ki zaroorat nahi hoti.',
          storyExplain: 'Socho HTML element ek LEGO block jaisa hai:\n\n🧩 Block ka type = Tag name (<p>, <h1>, <img>)\n🎨 Block ka color = Attributes (class="red", id="header")\n📝 Block ka content = Jo text/image andar hai\n\nAur kuch LEGO blocks solid hote hain — unhe close nahi karte:\n🔴 <br> (line break) — self-closing\n🔴 <img> (image) — self-closing\n🔴 <hr> (horizontal line) — self-closing\n\nBaki sab khule blocks hain — open karke close karte hain! 🎮',
          funnyExample: {
            scenario: 'Mast analogy:\n\n<a href="https://google.com" target="_blank">Google</a>\n\nYe ek SUPERHERO hai:\n🦸 Name: <a> (anchor tag)\n🌐 Power 1: href — kahan jaana hai\n🪟 Power 2: target — kaise jaana hai\n💪 Content: Google — kya naam dikhega\n\nSurekha: "Itna sab ek tag mein?" 😂\nMasti Sir: "Haan bhai — ek tag, multiple attributes!" 😎',
            punchline: 'Tag = Character, Attribute = Character ki Powers!'
          },
          memoryTrick: 'VOID tags yaad karne ka trick:\n"A Big Crazy Elephant Helped In Little Matters, Sometimes To Work"\n\n<area> <base> <col> <embed> <hr> <img> <input> <link> <meta> <source> <track> <wbr>\n\nInhein kabhi close mat karo! 🐘',
          visualDiagram: {
            title: 'HTML Element Anatomy',
            nodes: ['Opening Tag (<p class="text">)', 'Attribute Name (class)', 'Attribute Value ("text")', 'Content (Hello World)', 'Closing Tag (</p>)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Element kaise parse hota hai:',
            steps: ['Tag name detect', 'Attributes parse', 'Content collect', 'DOM node create', 'Render']
          },
          code: `<!-- Normal Element (Opening + Closing tag) -->
<p class="intro" id="first-para">
  Yeh ek paragraph element hai.
</p>

<!-- Element with multiple attributes -->
<a href="https://codemasti.com" target="_blank" title="CodeMasti Website">
  CodeMasti Visit Karo
</a>

<!-- Self-Closing Elements (Void Elements) -->
<img src="photo.jpg" alt="Meri Photo" width="300">
<br>
<hr>
<input type="text" placeholder="Naam likho">`,
          codeBreakdown: [
            { part: 'class="intro"', label: 'class attribute — CSS styling ke liye use hota hai', color: '#3b82f6' },
            { part: 'id="first-para"', label: 'id attribute — unique identifier, sirf ek element ke liye', color: '#8b5cf6' },
            { part: 'href="..."', label: 'href attribute — link ka destination', color: '#ef4444' },
            { part: 'target="_blank"', label: 'target attribute — new tab mein khulega', color: '#f59e0b' },
            { part: 'src="photo.jpg"', label: 'src attribute — image ka source path', color: '#10b981' },
            { part: 'alt="..."', label: 'alt attribute — image ka description (accessibility)', color: '#f97316' }
          ],
          commonMistakes: [
            '❌ Attribute value ke aaround quotes bhool jana: class=intro (galat) → class="intro" (sahi)',
            '❌ Self-closing elements ko close karna: </br> (galat) → <br> (sahi)',
            '❌ Case sensitive attribute values: type="TEXT" (fail) → type="text" (sahi)',
            '❌ Same id do elements ko dena — id hamesha unique hona chahiye'
          ],
          proTips: [
            '💡 id hamesha unique hona chahiye; class repeat ho sakti hai',
            '💡 Attribute values ke liye double quotes preferred hain',
            '💡 Global attributes (id, class, style, title) kisi bhi tag mein chal sakte hain'
          ],
          interviewQuestions: [
            'HTML element aur HTML tag mein kya farak hai?',
            'Self-closing elements (void elements) kya hote hain? Examples do.',
            'id aur class attribute mein kya farak hai?',
            'Global attributes kaunse hain?'
          ],
          miniChallenge: 'Ek <a> tag banao jisme href, target="_blank", title attribute ho. Ek <img> tag banao jisme src, alt, width attribute ho.',
          quiz: {
            type: 'fixbug',
            question: 'Bug fix karo — yeh attribute galat hai:',
            buggyCode: '<img src=photo.jpg alt=Meri Photo width=200>',
            answer: '<img src="photo.jpg" alt="Meri Photo" width="200">',
            validator: (code) => code.includes('"photo.jpg"') && code.includes('"Meri Photo"'),
            explanation: 'Attribute values hamesha double quotes mein likhni chahiye!'
          },
          summary: ['Element = Opening tag + Content + Closing tag', 'Attributes opening tag mein name="value" format mein likhte hain', 'Void elements (img, br, hr, input) ko closing tag ki zaroorat nahi'],
          flashcard: { q: 'Self-closing (void) elements ke examples kaunse hain?', a: '<img>, <br>, <hr>, <input>, <meta>, <link>, <col>, <area>' },
          funFact: '🎉 Fun Fact: Boolean attributes sirf naam se kaam karte hain! jaise <input disabled> — value likhne ki zaroorat nahi!',
          didYouKnow: '🤯 Did You Know? HTML case-insensitive hai — <P> aur <p> same hain. Lekin lowercase always preferred hai!',
          challenge: {
            instruction: 'Ek <a> tag likho jisme href="https://codemasti.com", target="_blank", aur text "CodeMasti" ho. Plus ek <img> tag jisme src, alt, width="300" ho.',
            initialCode: '<!-- Elements aur attributes yahan likho -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('href=') && n.includes('target=') && n.includes('<img') && n.includes('alt=') && n.includes('width=')
            },
            successMessage: 'Elements aur Attributes mastered! +25 XP 🧩'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2 — TEXT & FORMATTING
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Text & Formatting',
      lessons: [
        // ─── LESSON 5: HEADINGS ───────────────────────────
        {
          id: 'html-headings',
          title: 'HTML Headings',
          emoji: '📰',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Headings — website ka TOC!\n\nh1 = Main title\nh2 = Chapter\nh3 = Sub-chapter\n...\nh6 = Footnote footnote footnote 😂\n\nEk page mein sirf EK h1 — ye rule golden hai!"',
            hint: '🤦 Masti Sir: "Bhai size ke liye headings use mat karo!\nh4 use karna sirf isliye ki text chota dikhna chahiye — GALAT hai!\nCSS use karo size ke liye!"',
            success: '🥳 Masti Sir: "Heading hierarchy perfect! 🔥\nSEO bhi khush, readers bhi khush!"',
            mistake: '😅 Masti Sir: "Multiple h1 tags?!\nGoogle confuse ho gaya! Sirf ek h1 per page bhai! 😅"'
          },
          englishDef: 'HTML provides 6 levels of headings, from <h1> (largest/most important) to <h6> (smallest/least important). Headings define the hierarchy and structure of your content. Search engines use headings to understand page structure.',
          hinglishExplain: 'Headings matlab "titles". Jaise newspaper mein bada title hota hai (breaking news), uske neeche thoda chota (details), uske neeche aur chota (sub-details). HTML mein h1 sabse bada heading hota hai, h6 sabse chota. Ek page mein sirf ek h1 hona chahiye — SEO ke liye!',
          storyExplain: 'Socho tumhara school notice board:\n\n🏫 ANNUAL SPORTS DAY (h1 — main event)\n  🏃 Running Events (h2 — category)\n    📏 100 Meter Race (h3 — item)\n    📏 200 Meter Race (h3 — item)\n  🏊 Swimming Events (h2 — category)\n    💧 Freestyle (h3 — item)\n\nHar cheez apne level pe hai!\nYahi hierarchy HTML mein headings banati hai! 🏫',
          funnyExample: {
            scenario: 'Ek beginner ne likha:\n\n<h4>Mera Blog</h4>  ← h1 use karna chahiye tha\n<h1>Hello</h1>  ← Middle mein h1? 😂\n<h2>About Me</h2>\n<h5>Contact</h5>  ← h3 use karna tha\n\nGoogle ne socha:\n"Bhai ye page samajh nahi aa raha!\nKuch toh structure rakho!" 🤦\n\nSahi tarika:\n<h1>Mera Blog</h1>  ← Sirf ek, sabse pehle\n<h2>Hello</h2>\n<h2>About Me</h2>\n<h3>Contact</h3>',
            punchline: 'Heading = Website ka Table of Contents!'
          },
          memoryTrick: 'h1 se h6 yaad karne ka trick:\n"H1 Hero hai — sirf ek!\nH2 Har Section ke liye\nH3 Har Sub-Section ke liye\nH4-H6 Bahut kam use hote hain"\n\nSimple rule: Kabhi level skip mat karo! h1 ke baad h3 mat aao — h2 aao!',
          visualDiagram: {
            title: 'Heading Hierarchy Tree',
            nodes: ['<h1> Main Page Title (biggest, 1 per page)', '<h2> Section Heading', '<h3> Sub-Section', '<h4> Minor Heading', '<h5> Smaller', '<h6> Smallest'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Headings ka size kaise decide hota hai:',
            steps: ['h1-h6 tag detect', 'Default browser CSS apply', 'Font size calculate', 'Bold render', 'Margin add & display']
          },
          code: `<h1>CodeMasti — HTML Course</h1>

<h2>Chapter 1: Basics</h2>
  <h3>Lesson 1: Introduction</h3>
  <h3>Lesson 2: Editors</h3>

<h2>Chapter 2: Text Formatting</h2>
  <h3>Lesson 5: Headings</h3>
  <h3>Lesson 6: Paragraphs</h3>
  
  <h4>Paragraph Tips</h4>
    <h5>Pro Tip 1</h5>
    <h5>Pro Tip 2</h5>`,
          codeBreakdown: [
            { part: '<h1>', label: 'Sabse bada heading — Sirf ek baar use karo per page — SEO critical!', color: '#ef4444' },
            { part: '<h2>', label: 'Second level — Section titles ke liye', color: '#f97316' },
            { part: '<h3>', label: 'Third level — Sub-sections ke liye', color: '#f59e0b' },
            { part: '<h4>', label: 'Minor heading — sub-sub sections', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Ek page mein multiple <h1> tags — SEO ke liye bura',
            '❌ Size ke liye headings use karna — CSS use karo',
            '❌ h1 ke baad seedha h4 skip karna — hierarchy maintain karo',
            '❌ Empty heading likhna — <h1></h1> — koi content nahi'
          ],
          proTips: [
            '💡 Sirf ek <h1> per page — yeh Google ka golden rule hai',
            '💡 Headings keyword-rich rakho — SEO improve hoti hai',
            '💡 Visually bade text ke liye CSS font-size use karo, heading tags nahi'
          ],
          interviewQuestions: [
            'Ek page mein kitne h1 tags hone chahiye?',
            'Headings SEO ke liye kyun important hain?',
            'h1 aur h2 mein visual difference kaise aata hai?'
          ],
          miniChallenge: 'Apni favourite movie ki website ka heading structure banao — h1 mein movie name, h2 mein "Cast", "Plot", "Reviews", h3 mein character names.',
          quiz: {
            type: 'mcq',
            question: 'SEO ke liye ek HTML page mein kitne <h1> tags hone chahiye?',
            options: ['Jitne chahiye utne', 'Sirf ek', 'Do ya teen', 'Koi nahi — h2 se start karo'],
            answer: 'Sirf ek',
            explanation: 'Google ek h1 ko page ka main topic maanta hai. Multiple h1 tags se SEO confuse hota hai.'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Yeh code browser mein kaisa dikhega?',
              code: '<h1>Big Title</h1>\n<h6>Small Title</h6>',
              options: ['h1 bada bold dikhega, h6 bahut chota', 'Dono same size mein dikhenge', 'h6 bada dikhega', 'Kuch nahi dikhega'],
              answer: 'h1 bada bold dikhega, h6 bahut chota',
              explanation: 'h1 sabse bada (default ~32px), h6 sabse chota (default ~11px) hota hai.'
            }
          ],
          summary: ['h1 to h6 — 6 levels of headings', 'h1 sabse important, ek page mein sirf ek', 'Headings content hierarchy define karte hain — SEO ke liye crucial'],
          flashcard: { q: 'Sabse bada HTML heading tag kaunsa hai?', a: '<h1> — Sirf ek baar per page! SEO ka golden rule.' },
          flashcards: [
            { q: 'h1 se h6 mein kya change hota hai?', a: 'Size ghatta hai — h1 sabse bada (~32px), h6 sabse chota (~11px). Bold hamesha rehta hai.' }
          ],
          funFact: '🎉 Fun Fact: HTML originally sirf 3 heading levels support karta tha! h4, h5, h6 baad mein add hue.',
          didYouKnow: '🤯 Did You Know? Screen readers headings use karke page ko navigate karte hain — isliye proper hierarchy accessibility ke liye zaroori hai!',
          challenge: {
            instruction: 'Ek blog page ka heading structure banao: h1 mein "Meri Coding Journey", h2 mein "HTML Seekha" aur "CSS Seekha", h3 mein under each h2 ek ek lesson title.',
            initialCode: '<!-- Heading structure yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<h1') && n.includes('<h2') && n.includes('<h3') && n.includes('</h1>') && n.includes('</h2>') && n.includes('</h3>')
            },
            successMessage: 'Perfect heading hierarchy! SEO master ban gaye! +25 XP 📰'
          }
        },

        // ─── LESSON 6: PARAGRAPHS ─────────────────────────
        {
          id: 'html-paragraph',
          title: 'HTML Paragraphs',
          emoji: '📝',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Paragraph — sabse simple tag!\n\nSocho WhatsApp message:\nHar ek bubble = ek paragraph\n\nHTML mein: <p>message</p>\nBS! Simple hai na? 😂"',
            hint: '🤦 Masti Sir: "Arre bhai 😂\nOpening tag to de diya...\nClosing tag kidhar gaya?\nHTML bhi confuse ho gaya."',
            success: '🥳 Masti Sir: "Teen paragraphs perfect! 🔥\nText structure samajh gaya lagta hai!"',
            mistake: '😅 Masti Sir: "P ke andar doosra P?\nNested paragraphs nahi hote bhai!\nHTML specification ka rule hai yeh!"'
          },
          englishDef: 'A paragraph in HTML is defined using the <p> element. It creates a block of text with automatic spacing above and below. Browsers add margin automatically. Each <p> element starts on a new line.',
          hinglishExplain: 'Paragraph matlab normal text. Jaise school ki book mein ek paragraph hota hai — kuch lines ka ek complete thought — waise hi HTML mein <p> tag use hota hai. Browser automatically uske upar-neeche thodi jagah deta hai.',
          storyExplain: 'Socho ek WhatsApp conversation:\n\nRahul: "Aaj kya hua?" ← <p>\nPriya: "Bahut masti ki!" ← <p>\nRahul: "Kahan gaye?" ← <p>\nPriya: "Mall gaye, movie dekhi, ice cream khai!" ← <p>\n\nHar message = ek paragraph\nHar paragraph apni line pe dikhta hai\nBeech mein space hoti hai\n\nYahi HTML ka <p> tag karta hai! 💬',
          funnyExample: {
            scenario: 'Mummy: "Sabzi le aao."\n\nPapa: "Doodh bhi le aana."\n\nTum: "Chocolate bhi le aana." 😂\n\nYe teen alag paragraphs hain!\nHar ek alag line, alag thought = alag <p> tag.\n\nAgar sab ek <p> mein daala:\n<p>Sabzi le aao. Doodh bhi le aana. Chocolate bhi le aana.</p>\n\nBoring! Aur confusing! Har thought alag karo bhai!',
            punchline: '<p> = Ek complete baat / thought!'
          },
          memoryTrick: 'P = Paragraph = "Poori Baat"\nHar poori baat ke liye alag <p> tag.\n\nExtra spaces/lines: Browser ignore karta hai!\nSirf <p> tags se proper spacing milti hai.',
          visualDiagram: {
            title: 'Paragraph ka flow',
            nodes: ['<p> tag start', 'Text content', 'Auto margin top', 'Auto margin bottom', '</p> tag end', 'Next element'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Paragraph render kaise hota hai:',
            steps: ['<p> tag detect', 'Block element create', 'Text wrap calculate', 'Margin auto add', 'Display on screen']
          },
          code: `<!-- Basic paragraph -->
<p>Mera naam CodeMasti hai.</p>

<!-- Multiple paragraphs — each gets its own space -->
<p>Main web development sikhata hoon.</p>
<p>HTML bahut simple language hai. Har koi seekh sakta hai!</p>

<!-- Line break inside paragraph -->
<p>
  Pehli line.<br>
  Doosri line same paragraph mein.<br>
  Teesri line.
</p>

<!-- Note: Extra spaces/lines ignored karein browser -->
<p>Ye        text     spacing         ignore hogi.</p>`,
          codeBreakdown: [
            { part: '<p>', label: 'Paragraph opening tag — block element, naye line se shuru', color: '#3b82f6' },
            { part: 'Content text', label: 'Paragraph ka actual content', color: '#10b981' },
            { part: '</p>', label: 'Closing tag — hamesha likhna!', color: '#3b82f6' },
            { part: '<br>', label: 'Line break — same paragraph mein naya line (self-closing)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ </p> closing tag bhool jana',
            '❌ <p> ke andar doosra <p> daalna (nested paragraphs)',
            '❌ Ek hi p tag mein sab kuch daalna — alag thoughts alag p mein',
            '❌ <br> use karke paragraph jaisi look banana — galat tarika'
          ],
          proTips: [
            '💡 Browser extra whitespace aur enters ignore karta hai — sirf <p> se proper spacing milti hai',
            '💡 <br> sirf line break ke liye hai, naya paragraph ke liye nahi',
            '💡 CSS se paragraphs ki spacing customize kar sakte ho'
          ],
          interviewQuestions: [
            '<p> tag block element hai ya inline?',
            'HTML mein extra spaces kyon ignore hote hain?',
            '<br> aur <p> mein kya farak hai?'
          ],
          miniChallenge: 'Teen paragraphs likho — ek apne bare mein, ek apni hobby ke bare mein, ek apne favourite food ke bare mein.',
          quiz: {
            type: 'fillblank',
            question: 'Blank fill karo:',
            sentence: 'HTML mein paragraph banane ke liye ___ tag use karte hain.',
            answer: '<p>',
            explanation: '<p> ek block-level paragraph element hai. Browser automatically spacing deta hai.'
          },
          summary: ['<p> tag paragraph banata hai', 'Browser automatically margin top/bottom add karta hai', 'Har alag thought ke liye alag <p> tag use karo'],
          flashcard: { q: 'HTML mein same paragraph mein naya line kaise laate hain?', a: '<br> tag se — self-closing element hai, naya paragraph nahi banta.' },
          funFact: '🎉 Fun Fact: HTML mein aap kitne bhi spaces ya enter daalo — browser sirf ek space dikhata hai! Ise "whitespace collapse" kehte hain.',
          didYouKnow: '🤯 Did You Know? CSS mein word-break, text-overflow, aur white-space properties se paragraph ki exact behavior control kar sakte ho!',
          challenge: {
            instruction: '3 <p> tags likho. Pehle mein "Namaste", doosre mein "Main HTML seekh raha hoon", teesre mein "CodeMasti rocks!" ho.',
            initialCode: '<!-- Teen paragraphs yahan likho -->\n',
            validator: (code) => {
              const count = (code.match(/<p>/gi) || []).length
              return count >= 3 && code.toLowerCase().includes('</p>')
            },
            successMessage: 'Wah! Teen paragraphs perfect! +20 XP 📝'
          }
        },

        // ─── LESSON 7: TEXT FORMATTING ────────────────────
        {
          id: 'html-formatting',
          title: 'HTML Text Formatting',
          emoji: '✍️',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Text formatting — HTML ka makeup kit! 💄\n\n<b> = Bold\n<i> = Italic\n<u> = Underline\n<mark> = Highlight\n<del> = Strike-through\n\nSab kuch ek lesson mein! Chalte hain! 😎"',
            hint: '🤦 Masti Sir: "<b> aur <strong> SAME nahi hain!\n<b> sirf bold karta hai (visual)\n<strong> important content batata hai (semantic)\n\nScreen readers <strong> pe zyada attention dete hain! 😅"',
            success: '🥳 Masti Sir: "Formatting master! 🔥\nText ab sirf plain text nahi — expressive hai!"',
            mistake: '😅 Masti Sir: "Nesting sahi se karo:\n<b><i>Ye sahi hai</i></b>\n<b><i>Ye galat</b></i> — cross karo nahi!"'
          },
          englishDef: 'HTML provides various text formatting elements. Some are presentational (<b>, <i>, <u>) and some are semantic (<strong>, <em>, <mark>, <del>, <ins>, <sub>, <sup>). Semantic elements carry meaning for screen readers and SEO.',
          hinglishExplain: 'HTML mein text ko different tarike se format kar sakte ho — bold, italic, underline, highlight, strikethrough. Kuch tags sirf visual hain (b, i), kuch tags meaning bhi carry karte hain (strong, em). Strong = important content, Em = emphasis — screen readers aur Google dono ko samajh aata hai.',
          storyExplain: 'Socho ek WhatsApp message:\n\n*Bold message* — kuch important\n_Italic message_ — thoda dramatic\n~~Strikethrough~~ — jo change ho gaya\n\nHTML mein:\n<strong>Important warning!</strong> — "YAHAN DHYAN DO!"\n<em>Maybe...</em> — "Shayad..."\n<del>Old Price: ₹999</del> <ins>New Price: ₹499</ins> — Sale!\n<mark>This will be in exam!</mark> — Highlight!\n\nSab formatting ko ek purpose hai! 📝',
          funnyExample: {
            scenario: 'Shopping website pe:\n\n<p>\n  <del>Original Price: ₹2000</del><br>\n  <strong>Sale Price: ₹999</strong><br>\n  <mark>Limited Offer!</mark><br>\n  Sirf <sub>2</sub> items bache hain!\n</p>\n\nMasti Sir: "Bhai yeh HTML hai ya\nmarketing trick hai? 😂\n\nDono — formatting se text effective banta hai!"',
            punchline: 'Formatting = Text ka makeup!'
          },
          memoryTrick: 'Semantic vs Presentational:\n\n<b> = Bold only (presentation)\n<strong> = Bold + Important (semantic)\n\n<i> = Italic only (presentation)\n<em> = Italic + Emphasis (semantic)\n\nRule: Always semantic prefer karo!',
          visualDiagram: {
            title: 'Text Formatting Tags',
            nodes: ['<strong> — Important/Bold', '<em> — Emphasis/Italic', '<mark> — Highlighted', '<del> — Deleted Text', '<ins> — Inserted Text', '<sub>/<sup> — Sub/Superscript'],
            type: 'tree'
          },
          code: `<p>
  <!-- Bold -->
  <b>Ye bold hai</b> (sirf visual)
  <strong>Ye important hai</strong> (semantic + bold)
</p>

<p>
  <!-- Italic -->
  <i>Ye italic hai</i> (sirf visual)
  <em>Yahan emphasis hai</em> (semantic + italic)
</p>

<p>
  <!-- Other formatting -->
  <u>Underline</u> — avoid karo! Links jaisi lagti hai
  <mark>Highlighted text</mark> — yellow background
  <del>Purana price: ₹999</del> → <ins>Naya: ₹499</ins>
  H<sub>2</sub>O aur x<sup>2</sup>+y<sup>2</sup>=z<sup>2</sup>
  <small>Fine print / copyright text</small>
  <code>inline code snippet</code>
</p>`,
          codeBreakdown: [
            { part: '<strong>', label: 'Semantic bold — important content, screen readers pause here', color: '#ef4444' },
            { part: '<em>', label: 'Semantic italic — emphasis, screen readers change tone', color: '#8b5cf6' },
            { part: '<mark>', label: 'Highlight — yellow background, like physical highlighter', color: '#f59e0b' },
            { part: '<del>', label: 'Deleted/strikethrough text — shows removed content', color: '#6b7280' },
            { part: '<ins>', label: 'Inserted text — shows added content, usually underlined', color: '#10b981' },
            { part: '<sub>/<sup>', label: 'Subscript/Superscript — for math, chemistry formulas', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ <b> aur <strong> ko same samajhna — semantic difference important hai',
            '❌ <u> use karna links ke liye — users confused hote hain (underline = link?)',
            '❌ Tags ko cross-nest karna: <b><i>text</b></i> — galat nesting',
            '❌ Sirf formatting ke liye overuse karna — readability kharab hoti hai'
          ],
          proTips: [
            '💡 <strong> aur <em> prefer karo — semantic HTML better hai',
            '💡 <code> tag inline code snippets ke liye perfect hai',
            '💡 <abbr title="..."> abbreviations explain karne ke liye use karo'
          ],
          interviewQuestions: [
            '<b> aur <strong> mein kya farak hai?',
            '<i> aur <em> mein kya farak hai?',
            'Semantic HTML formatting kyun important hai?'
          ],
          miniChallenge: 'Ek paragraph likho jisme strong, em, mark, del, ins, sub, sup — sab formatting tags use karo real-world example se.',
          quiz: {
            type: 'mcq',
            question: 'Screen readers ke liye kaun sa tag semantically better hai?',
            options: ['<b>', '<strong>', '<span style="font-weight:bold">', 'Teeno same hain'],
            answer: '<strong>',
            explanation: '<strong> semantic element hai — screen readers ise "important content" ki tarah treat karte hain. <b> sirf visual bold hai.'
          },
          summary: ['<strong> aur <em> semantic tags hain — meaning carry karte hain', '<b> aur <i> sirf visual hain', '<mark>, <del>, <ins>, <sub>, <sup> additional formatting options hain'],
          flashcard: { q: '<b> aur <strong> mein kya farak hai?', a: '<b> = sirf bold (visual). <strong> = bold + semantic importance. Screen readers <strong> pe extra attention dete hain.' },
          funFact: '🎉 Fun Fact: <blink> aur <marquee> tags the jo text blink aur scroll karte the — browsers ne bahut pehle support band kar di! 😂',
          didYouKnow: '🤯 Did You Know? <abbr title="World Health Organization">WHO</abbr> — jab user hover karta hai toh full form dikhti hai! Accessibility ke liye use karo.',
          challenge: {
            instruction: 'Ek paragraph banao jisme: <strong> se important text, <em> se emphasis, <mark> se highlight, <del> se old price, <ins> se new price ho.',
            initialCode: '<!-- Text formatting paragraph yahan -->\n<p>\n  \n</p>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<strong') && n.includes('<em') && n.includes('<mark') && n.includes('<del') && n.includes('<ins')
            },
            successMessage: 'Formatting master! HTML ka makeup artist ban gaye! +25 XP ✍️'
          }
        },

        // ─── LESSON 8: QUOTATIONS ─────────────────────────
        {
          id: 'html-quotations',
          title: 'HTML Quotations & Citations',
          emoji: '💬',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Quotes — jab kisi ki baat mention karni ho!\n\n<blockquote> = Famous quote\n<q> = Inline quote\n<cite> = Source batao\n\nBs itna hi hai! ☕"',
            hint: '🤦 Masti Sir: "blockquote ke andar <q> mat daalo!\n<blockquote> block level hai, <q> inline.\nEk saath nahi chalte properly!"',
            success: '🥳 Masti Sir: "Quotations perfect! 🔥\nAPJ Abdul Kalam bhi khush hain!" 😄',
            mistake: '😅 Masti Sir: "cite attribute alag hai, <cite> tag alag hai!\nDono ka kaam alag hai — confuse mat hona!"'
          },
          englishDef: 'HTML provides elements for quotations and citations: <blockquote> for block-level quotes from external sources, <q> for inline quotes, <cite> for titles of creative works, and <abbr> for abbreviations. The cite attribute provides the URL of the quote source.',
          hinglishExplain: 'Quotes aur citations ke liye HTML mein special tags hain. <blockquote> bade quotes ke liye — jaise kisi famous person ka statement. <q> chhote inline quotes ke liye — browser automatically quotation marks lagata hai. <cite> kisi book, movie ya website ka naam batane ke liye.',
          storyExplain: 'Socho school essay likhna:\n\n"APJ Abdul Kalam ne kaha:\n\'Sapne woh nahi jo neend mein aate hain,\nSapne woh hain jo neend nahi aane dete.\'\n— APJ Abdul Kalam, Wings of Fire"\n\nHTML mein:\n<blockquote cite="wings-of-fire.com">\n  Sapne woh nahi jo neend mein aate hain...\n</blockquote>\n<cite>Wings of Fire — APJ Abdul Kalam</cite>\n\nYahi professional way hai quotes add karne ka! 📚',
          funnyExample: {
            scenario: 'Ek website pe:\n\n<q>Sirf coding se developer nahi bante</q>,\n<cite>Masti Sir</cite> ne kaha\n\nAur phir unhone toda:\n<blockquote>\n  "Coding ke saath attitude bhi chahiye,\n   patience bhi chahiye,\n   aur thoda sa pagalpan bhi!" 😂\n</blockquote>\n\nBlockquote = Bada quote, apni line pe!\nq = Chhota quote, sentence ke beech!',
            punchline: '<blockquote> = Bada Quote, <q> = Chhota Quote!'
          },
          memoryTrick: 'Q = Quote (short, inline)\nBLOCKQUOTE = Block-level Quote (long, separate line)\nCITE = Citation (source ka naam)\n\nYaad rakho: Block = Bada, Q = Quick Inline!',
          code: `<!-- Block Quote — Bada quote, alag section mein -->
<blockquote cite="https://apjabdulkalam.com">
  <p>
    "Sapne woh nahi jo neend mein aate hain, sapne woh hain
    jo neend nahi aane dete."
  </p>
  <footer>— <cite>APJ Abdul Kalam</cite></footer>
</blockquote>

<!-- Inline Quote — sentence ke beech -->
<p>
  Masti Sir ne kaha <q>Coding sikhna band mat karo!</q>
  aur phir lesson continue kiya.
</p>

<!-- Abbreviation with title -->
<p>
  <abbr title="HyperText Markup Language">HTML</abbr>
  web development ka foundation hai.
</p>

<!-- Address element -->
<address>
  Contact: <a href="mailto:hello@codemasti.com">hello@codemasti.com</a>
</address>`,
          codeBreakdown: [
            { part: '<blockquote>', label: 'Block-level quote — large, indented, from external source', color: '#3b82f6' },
            { part: 'cite="URL"', label: 'cite attribute — quote ka source URL (browser nahi dikhata, screen readers use karte hain)', color: '#8b5cf6' },
            { part: '<q>', label: 'Inline quote — browser automatic quotation marks add karta hai', color: '#10b981' },
            { part: '<cite>', label: 'Citation tag — book, movie, website ka title', color: '#ef4444' },
            { part: '<abbr title="...">', label: 'Abbreviation — hover pe full form dikhti hai', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ <cite> aur cite attribute ko same samajhna',
            '❌ <q> ke andar manual quotes likhna — browser already add karta hai',
            '❌ <blockquote> ke liye <q> use karna'
          ],
          proTips: [
            '💡 <blockquote> ke saath <footer> aur <cite> use karo proper attribution ke liye',
            '💡 <abbr> use karo — accessibility aur UX improve hoti hai',
            '💡 <address> tag contact information ke liye use hota hai'
          ],
          interviewQuestions: [
            '<blockquote> aur <q> mein kya farak hai?',
            '<cite> tag kab use karte hain?',
            '<abbr> tag ka kya use hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Browser automatically quotation marks kab add karta hai?',
            options: ['<blockquote> element pe', '<q> element pe', '<cite> element pe', 'Kabhi nahi'],
            answer: '<q> element pe',
            explanation: '<q> tag ke content ko browser automatically quotation marks se wrap karta hai.'
          },
          summary: ['<blockquote> bade quotes ke liye — block level element', '<q> chhote inline quotes ke liye — browser quotes add karta hai', '<cite> creative works ka title batata hai', '<abbr title=""> abbreviations ke liye'],
          flashcard: { q: '<blockquote> aur <q> mein basic farak?', a: '<blockquote> block-level bada quote, <q> inline chhota quote. <q> pe browser auto-quotes add karta hai.' },
          funFact: '🎉 Fun Fact: Alag countries mein quotation marks alag hote hain — lang attribute set karne se browser automatically sahi marks use karta hai!',
          challenge: {
            instruction: 'Ek <blockquote> likho apne favourite quote ke saath, <cite> se author batao, aur ek sentence mein <q> se inline quote use karo.',
            initialCode: '<!-- Quotation example yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<blockquote') && n.includes('<cite') && n.includes('<q')
            },
            successMessage: 'Quote master! Citation perfect! +20 XP 💬'
          }
        },

        // ─── LESSON 9: COMMENTS ───────────────────────────
        {
          id: 'html-comments',
          title: 'HTML Comments',
          emoji: '💭',
          xpReward: 15,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Comments — code ke andar notes!\n\nBrowser comments nahi dikhata...\nLekin developers bahut khush rehte hain!\n\nFuture me tum hi apna comment padhoge\naur socho ge — \"Yeh maine kyun likha tha?\" 😂"',
            hint: '🤦 Masti Sir: "Comment proper syntax se likho:\n<!-- Comment yahan -->\n\nAgar dash ya > bhool gaye — toh rest of page comment ban jaata hai! 😱"',
            success: '🥳 Masti Sir: "Comments ek dam sahi! 🔥\nCode readable ho gaya — team bhi khush hai!"',
            mistake: '😅 Masti Sir: "Password comment mein mat likhna bhai!\nView Source se koi bhi padh sakta hai! 🔓"'
          },
          englishDef: 'HTML comments are text that the browser ignores completely. They are written between <!-- and --> markers. Comments are used to explain code, temporarily disable code sections, and leave notes for other developers.',
          hinglishExplain: 'Comments HTML code mein notes hain jo browser display nahi karta. <!-- se shuru hoke --> pe band hote hain. Comments developers ke liye hote hain — code explain karne ke liye, temporarily code disable karne ke liye, ya team members ke liye notes chodne ke liye.',
          funnyExample: {
            scenario: '<!-- TODO: CSS likhna hai kal 😅 -->\n<!-- Ye wala section kuch sahi nahi lag raha... -->\n<!-- Mera nahi, Rahul ne likha tha ye! -->\n<!-- Copy paste from Stack Overflow, dont touch -->\n\nMasti Sir: "Yeh comments hain 😂\nBrowser nahi padhta...\nLekin code review mein sab dekhte hain!" 🤣',
            punchline: 'Comments = Developer ka diary entry!'
          },
          memoryTrick: '<!-- = Comment Open\n--> = Comment Close\n\nYaad karo: "Less than, bang, dash dash = comment open"',
          code: `<!-- Yeh ek single-line comment hai -->

<!--
  Yeh ek
  multi-line
  comment hai
-->

<!-- Section labels -->
<!-- ====== HEADER START ====== -->
<header>
  <h1>CodeMastii</h1>
</header>
<!-- ====== HEADER END ====== -->

<!-- TODO: Mobile menu add karna hai -->
<!-- FIXME: Image load ho rahi hai slowly -->

<!-- Temporarily disable karna: -->
<!--
<p>Yeh abhi show nahi karna</p>
-->`,
          commonMistakes: [
            '❌ Nested comments: <!-- <!-- comment --> --> — nahi chalte',
            '❌ Password ya sensitive info comment mein — View Source se koi dekh sakta hai!',
            '❌ Double dash comment ke andar: <!-- -- invalid -- --> — error'
          ],
          proTips: [
            '💡 TODO: comments kaam track karne ke liye best practice hai',
            '💡 Section labels (HEADER START/END) large files mein navigation easy karte hain',
            '💡 VS Code shortcut: Ctrl+/ (Windows) ya Cmd+/ (Mac) — selected text ko comment/uncomment karo'
          ],
          interviewQuestions: [
            'HTML comments ka syntax kya hai?',
            'Comments kab use karte hain?',
            'HTML comments kya secure hain sensitive data ke liye?'
          ],
          quiz: {
            type: 'fillblank',
            question: 'Blank fill karo:',
            sentence: 'HTML comment shuru hota hai ___ se aur band hota hai ___ se.',
            answer: '<!--',
            explanation: 'Comment <!-- se shuru hota hai aur --> se band hota hai. Browser is content ko ignore karta hai.'
          },
          summary: ['Comments <!-- se shuru aur --> se band hote hain', 'Browser comments display nahi karta', 'Code explain karne, temporarily disable karne ke liye use karo'],
          flashcard: { q: 'HTML comment ka syntax kya hai?', a: '<!-- Comment text here --> — HTML comment open aur close.' },
          funFact: '🎉 Fun Fact: View Source (Ctrl+U) se koi bhi HTML comments dekh sakta hai! Secrets mat rakhna comments mein! 🕵️',
          challenge: {
            instruction: 'Ek HTML page banao jisme section labels comments ho (HEADER, MAIN, FOOTER), aur ek TODO comment, plus ek temporarily disabled section.',
            initialCode: '<!-- Yahan comments ke saath structured page banao -->\n',
            validator: (code) => {
              const commentCount = (code.match(/<!--/g) || []).length
              return commentCount >= 3
            },
            successMessage: 'Comments perfect! Team player ban gaye! +15 XP 💭'
          }
        },

        // ─── LESSON 10: COLORS ────────────────────────────
        {
          id: 'html-colors',
          title: 'HTML Colors',
          emoji: '🎨',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Colors — HTML ka paint brush! 🎨\n\nTeen tarike se color specify karo:\n1. Named: red, blue, green\n2. Hex: #FF0000\n3. RGB: rgb(255, 0, 0)\n\nSabka kaam ek hi hai — color specify karna!\nBas style alag hai! 😎"',
            hint: '🤦 Masti Sir: "#FF0000 yaad karna mushkil hai?\nBhai simple trick:\nR=255, G=0, B=0 = Pure Red\n#FF = 255, #00 = 0\nFF0000 = Red! 😅"',
            success: '🥳 Masti Sir: "Color palettes ek dum fire! 🔥\nDesigner banne ka khayal hai kya? 😄"',
            mistake: '😅 Masti Sir: "Background color body ke inline style se lagana galat practice hai!\nCSS file mein daalo bhai — separation of concerns!"'
          },
          englishDef: 'Colors in HTML can be specified using named colors (red, blue), hexadecimal codes (#FF0000), RGB values (rgb(255,0,0)), RGBA (with alpha/transparency), HSL (hue, saturation, lightness), and HSLA values. Colors are primarily applied via CSS.',
          hinglishExplain: 'HTML mein colors teen main tarike se specify karte hain: Named colors (red, blue, green — simple names), Hex codes (#FF5733 — 6 digit code), RGB (rgb(255, 87, 51) — Red Green Blue values 0-255). RGBA mein A = Alpha (transparency) hota hai. Colors mostly inline style ya CSS se apply hote hain.',
          funnyExample: {
            scenario: 'Ek web designer ne bola:\n\n"#000000 aur #FFFFFF — ye dono kya hain?"\n\nAnswer:\n#000000 = Black (R=0, G=0, B=0 — sab off)\n#FFFFFF = White (R=255, G=255, B=255 — sab on!)\n\nMasti Sir: "Aise socho:\nRGB = Teen lights (Red, Green, Blue)\nSab band = Andhera = Black\nSab on = Roshni = White 💡\n\nLights ka game hai ye!" 😂',
            punchline: 'Color = Light ka combination!'
          },
          memoryTrick: 'Hex code yaad karne ka trick:\n#RRGGBB — R=Red, G=Green, B=Blue\nFF = 255 (max), 00 = 0 (min)\n\n#FF0000 = Pure Red (R max, G off, B off)\n#00FF00 = Pure Green\n#0000FF = Pure Blue\n#FFFF00 = Yellow (R+G max)',
          code: `<!-- Colors in HTML via inline style -->
<p style="color: red;">Named Color — red</p>
<p style="color: #FF5733;">Hex Color — Orange Red</p>
<p style="color: rgb(46, 204, 113);">RGB Color — Green</p>
<p style="color: rgba(52, 152, 219, 0.7);">RGBA — Blue 70% opacity</p>
<p style="color: hsl(270, 60%, 70%);">HSL Color — Purple</p>

<!-- Background color -->
<div style="background-color: #2C3E50; color: white; padding: 10px;">
  Dark background, white text
</div>

<!-- Gradient (CSS) -->
<div style="background: linear-gradient(90deg, #667eea, #764ba2); 
            color: white; padding: 20px;">
  Beautiful gradient background
</div>`,
          codeBreakdown: [
            { part: 'color: red', label: 'Named color — simple but limited (only 140 named colors)', color: '#ef4444' },
            { part: '#FF5733', label: 'Hex color — #RRGGBB — 6 digit hexadecimal, 16 million colors!', color: '#f97316' },
            { part: 'rgb(46, 204, 113)', label: 'RGB — Red Green Blue values, each 0-255', color: '#10b981' },
            { part: 'rgba(..., 0.7)', label: 'RGBA — plus Alpha (0=transparent, 1=opaque)', color: '#3b82f6' },
            { part: 'hsl(270, 60%, 70%)', label: 'HSL — Hue(0-360), Saturation(%), Lightness(%) — easiest to adjust!', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ Hex code mein # bhool jana',
            '❌ RGB values 255 se zyada likhna — invalid',
            '❌ Inline colors overuse karna — CSS file mein rakho',
            '❌ Alpha value mein 0-1 ki jagah 0-100 likhna'
          ],
          proTips: [
            '💡 HSL sabse intuitive hai — hue adjust karo color change hoga, lightness alag karo shade',
            '💡 Coolors.co pe beautiful palettes milte hain — free!',
            '💡 Color contrast check karo accessibility ke liye — dark text on dark bg = problem'
          ],
          interviewQuestions: [
            'HTML mein colors specify karne ke kitne tarike hain?',
            'Hex color code mein #RRGGBB kya represent karta hai?',
            'rgba mein Alpha ka kya matlab hai?',
            'HSL color model kya hai?'
          ],
          quiz: {
            type: 'mcq',
            question: '#FF0000 kaunsa color represent karta hai?',
            options: ['Green', 'Blue', 'Red', 'Yellow'],
            answer: 'Red',
            explanation: '#FF0000 mein R=FF(255), G=00(0), B=00(0) — pure red!'
          },
          summary: ['Named, Hex, RGB, RGBA, HSL — 5 ways to specify colors', '#RRGGBB format mein 6 hex digits', 'RGB mein 0-255, RGBA mein extra alpha (0-1) hota hai'],
          flashcard: { q: 'Black aur White ka hex code kya hai?', a: '#000000 = Black (all zero), #FFFFFF = White (all max)' },
          funFact: '🎉 Fun Fact: CSS mein 140+ named colors hain — jaise "rebeccapurple" jo ek developer ki beti ki yaad mein add ki gayi thi! 💜',
          challenge: {
            instruction: 'Ek div banao jisme: background-color hex mein, text color named color mein, aur ek rgba background wala paragraph ho.',
            initialCode: '<div style="">\n  <p style="">Yahan text</p>\n</div>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('#') && n.includes('rgba(')
            },
            successMessage: 'Color expert! Design journey shuru! +20 XP 🎨'
          }
        },

        // ─── LESSON: HTML ENTITIES, SYMBOLS & EMOJIS ──────
        {
          id: 'html-entities',
          title: 'HTML Entities, Symbols & Emojis',
          emoji: '✨',
          xpReward: 25,
          badgeName: 'Entity Wizard',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML Entities — Reserved characters ka secret passcode!\n\nAgar browser mein < ya > likhoge,\ntoh browser confuse ho jayega ki tag hai ya text!\n\nEntities se hum browser ko batate hain:\n\'Ye tag nahi, plain text hai bhai!\' 😎"',
            hint: '🤦 Masti Sir: "Copyright sign chahiye?\n&copy; likho!\nSpace ke liye non-breaking space &nbsp; use karo!\nSemicolon ; lagana mat bhoolna!"',
            success: '🥳 Masti Sir: "Entities and Symbols mastered! 🔥\nAb koi bhi special symbol display kar sakte ho!"',
            mistake: '😅 Masti Sir: "Entity ke end mein semicolon ; lagana bhool gaye?\n&copy; ya &lt; ke baad ; zaroori hai!"'
          },
          englishDef: 'HTML entities are used to display reserved characters in HTML (such as <, >, &, ", \') that would otherwise be interpreted as HTML code. Entities are written using either an entity name (&name;) or an entity number (&#number;). They also allow rendering special math symbols, currencies, and emojis.',
          hinglishExplain: 'HTML mein kuch characters reserved hote hain jaise `<` aur `>` — agar tum text mein `<` likhoge toh browser samjhega ki naya tag shuru ho raha hai. Isliye hum Entities use karte hain jaise `&lt;` (less than) aur `&gt;` (greater than). Iske alawa copyright `&copy;`, non-breaking space `&nbsp;`, aur Emojis `&#128512;` bhi entity se aate hain.',
          storyExplain: 'Socho tum airport security mein ho.\n\nKuch words prohibited hote hain. Lekin agar tum bolna chahte ho "Mere paas scissors ka photo hai, actual scissors nahi", toh tumhe code word use karna hoga.\n\nHTML mein `<` = tag starter.\nAgar tumhe maths likhna hai: "5 < 10", toh `<` likhne ke bajaye `&lt;` likho: "5 &lt; 10". Browser screen par `5 < 10` hi dikhayega bina kisi tag error ke! ✈️',
          funnyExample: {
            scenario: 'Code mein likha:\n<p>5 < 10 and 10 > 5</p>\n\nBrowser: "Arre bhai! < 10 kaunsa tag hai? Main confuse ho gaya!" 🤯\n\nSolution:\n<p>5 &lt; 10 and 10 &gt; 5</p>\nBrowser: "Ah! Less than aur greater than symbol! Clear hai!" 😂',
            punchline: 'Entities = Browser ke liye clear translation!'
          },
          memoryTrick: '&lt; = Less Than (<)\n&gt; = Greater Than (>)\n&amp; = Ampersand (&)\n&copy; = Copyright (©)\n&nbsp; = Non-Breaking Space',
          visualDiagram: {
            title: 'HTML Entity Translation Flow',
            nodes: ['Aap likhte ho &lt;', 'HTML Parser read karta hai', 'Convert to < symbol', 'Screen pe < display'],
            type: 'flow'
          },
          code: `<!-- 1. Reserved Characters -->
<p>5 &lt; 10 (Less than)</p>
<p>10 &gt; 5 (Greater than)</p>
<p>Tom &amp; Jerry (Ampersand)</p>
<p>&quot;Double Quotes&quot; and &apos;Single Quote&apos;</p>

<!-- 2. Common Symbols & Currencies -->
<p>&copy; 2026 CodeMasti. All Rights Reserved.</p>
<p>&reg; Registered Trademark | &trade; Trademark</p>
<p>&euro; Euro | &pound; Pound | &#8377; Indian Rupee</p>
<p>&hearts; Heart | &spades; Spade | &diams; Diamond</p>

<!-- 3. Non-breaking space (keeps words together) -->
<p>10&nbsp;Kilometers (Never splits across lines)</p>

<!-- 4. Emojis with UTF-8 -->
<p>&#128512; Grinning Face</p>
<p>&#128640; Rocket</p>
<p>&#128293; Fire Emoji</p>`,
          codeBreakdown: [
            { part: '&lt; and &gt;', label: 'Less than (<) aur Greater than (>) symbols bina tag clash ke', color: '#ef4444' },
            { part: '&amp;', label: 'Ampersand (&) symbol display karta hai', color: '#3b82f6' },
            { part: '&copy;', label: 'Copyright © symbol footer ke liye', color: '#10b981' },
            { part: '&nbsp;', label: 'Non-Breaking Space — words ko break hone se rokta hai', color: '#8b5cf6' },
            { part: '&#128640;', label: 'Unicode decimal entity rocket emoji 🚀 render karta hai', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ End mein semicolon bhool jana — &lt nahi, &lt; likho!',
            '❌ Direct < likhna paragraph text mein — HTML parsing error',
            '❌ Multiple spaces ke liye 10 baar space bar dabana — browser collapse kar deta hai, &nbsp; use karo'
          ],
          proTips: [
            '💡 Footer mein &copy; hamesha use karo copyright symbol ke liye',
            '💡 HTML5 UTF-8 charset hone par direct emojis (🔥 🚀) bhi copy-paste kar sakte ho',
            '💡 Code examples dikhane ke liye &lt;code&gt; tag ke andar entities best hoti hain'
          ],
          interviewQuestions: [
            'HTML Entities kya hain aur kyun use karte hain?',
            '&nbsp; ka full form aur use kya hai?',
            'Entity name aur Entity number mein kya difference hai?',
            'HTML mein reserved characters kaunse hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'HTML mein "<" symbol ko display karne ke liye kaunsi entity use karte hain?',
            options: ['&lt;', '&gt;', '&amp;', '&le;'],
            answer: '&lt;',
            explanation: '&lt; ka matlab hai "Less Than" (<). Ye reserved character ko display karne ka standard tarika hai.'
          },
          summary: ['Reserved characters jaise <, >, & ke liye entities use karte hain', '&copy; copyright ke liye, &nbsp; non-breaking space ke liye', 'Entity hamesha & se shuru aur ; par khatam hoti hai'],
          flashcard: { q: 'HTML mein copyright symbol ka entity code kya hai?', a: '&copy; ya &#169; — Copyright (©) symbol display karta hai.' },
          funFact: '🎉 Fun Fact: HTML mein 2,000 se zyada named entities hain — math symbols se lekar musical notes tak!',
          challenge: {
            instruction: 'Ek paragraph banao jisme: &lt; aur &gt; use ho (e.g. 5 &lt; 10), copyright symbol &copy;, aur ek rocket emoji &#128640; ho.',
            initialCode: '<p>\n  <!-- Entities yahan add karo -->\n</p>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('&lt;') && n.includes('&copy;')
            },
            successMessage: 'Entities Mastered! Special characters wizard! +25 XP ✨'
          }
        },

        // ─── LESSON: HTML COMPUTER CODE ELEMENTS ──────────
        {
          id: 'html-computercode',
          title: 'HTML Computer Code Elements',
          emoji: '💻',
          xpReward: 25,
          badgeName: 'Code Formatter',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Computer Code Elements — Programmer ki pehchaan!\n\nJab hum website par code snippets, keyboard shortcuts,\nya terminal output dikhana chahte hain —\ntoh HTML ke special tags use hote hain!\n\n<code>, <pre>, <kbd>, <samp> — chalo seekhein! 😎"',
            hint: '🤦 Masti Sir: "<pre> tag spaces aur line breaks exact waise hi preserve karta hai jaise tumne likha hai!\n<code> tag ke saath <pre> use karo code blocks ke liye!"',
            success: '🥳 Masti Sir: "Code formatting pro! 🔥\nTechnical documentation ready!"',
            mistake: '😅 Masti Sir: "Sirf <code> tag lagaya par line breaks gayab?\nMultiline code ke liye <pre><code>...</code></pre> use karo!"'
          },
          englishDef: 'HTML includes semantic elements specifically for defining computer code and user inputs: <code> for programming code snippets, <pre> for preserving preformatted whitespace and line breaks, <kbd> for keyboard input shortcuts, <samp> for sample program output, and <var> for mathematical variables.',
          hinglishExplain: 'HTML mein code snippets ko sundar aur monospaced font mein dikhane ke liye special tags hote hain. `<code>` tag inline code ke liye, `<pre>` tag multiline indentation preserve karne ke liye, `<kbd>` keyboard keys (Ctrl+C) ke liye, aur `<samp>` terminal output ke liye use hota hai.',
          storyExplain: 'Jab tum documentation website (jaise MDN ya CodeMasti) kholte ho, toh notice kiya hoga ki code alag font (Courier/Monospace) mein dikhta hai aur keyboard shortcut jaise [Ctrl] + [C] ek button jaisa dikhta hai.\n\nHTML ne iske liye dedicated semantic tags diye hain:\n- <code> = programming code\n- <kbd> = Keyboard button\n- <samp> = Computer ka response/output\n- <pre> = Exact spaces and enters maintain karo! 🖥️',
          code: `<!-- 1. Inline Code -->
<p>JavaScript mein variable declare karne ke liye <code>const</code> ya <code>let</code> use karo.</p>

<!-- 2. Multi-line Code Block with <pre> and <code> -->
<pre><code>function sayHello() {
    console.log("Namaste CodeMasti!");
}
sayHello();</code></pre>

<!-- 3. Keyboard Input (<kbd>) -->
<p>Copy karne ke liye <kbd>Ctrl</kbd> + <kbd>C</kbd> press karein.</p>
<p>Undo karne ke liye <kbd>Ctrl</kbd> + <kbd>Z</kbd> dabayein.</p>

<!-- 4. Sample Program Output (<samp>) -->
<p>Terminal output: <samp>Error 404: File Not Found</samp></p>
<p>Server message: <samp>Server started on port 3000</samp></p>

<!-- 5. Mathematical Variable (<var>) -->
<p>Einstein equation: <var>E</var> = <var>m</var><var>c</var><sup>2</sup></p>`,
          codeBreakdown: [
            { part: '<code>', label: 'Inline code snippet ko monospace font deta hai', color: '#3b82f6' },
            { part: '<pre>', label: 'Preformatted text — spaces aur line breaks exact maintain karta hai', color: '#8b5cf6' },
            { part: '<kbd>', label: 'Keyboard shortcut input represent karta hai', color: '#10b981' },
            { part: '<samp>', label: 'Sample program output ya terminal response', color: '#f59e0b' },
            { part: '<var>', label: 'Mathematical ya programming variable', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ <pre> ke andar extra indentation dena — woh screen par exact dikhegi',
            '❌ <kbd> ki jagah normal <span> use karna — accessibility lose hoti hai',
            '❌ Multiline code ke liye sirf <code> use karna — single line ban jayegi bina <pre>'
          ],
          proTips: [
            '💡 Best practice for code blocks: <pre><code>...code...</code></pre>',
            '💡 <kbd> tag ko CSS se border aur box-shadow dekar real keyboard key jaisa style banao',
            '💡 Math formulas mein <var>x</var> + <var>y</var> use karne se screen readers variable samajhte hain'
          ],
          interviewQuestions: [
            '<pre> aur <code> tag mein kya farak hai?',
            '<kbd> tag kis purpose ke liye use hota hai?',
            '<samp> aur <var> elements ka semantic meaning kya hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Keyboard shortcut (jaise Ctrl+C) ko represent karne ke liye kaunsa semantic tag use karte hain?',
            options: ['<key>', '<kbd>', '<code>', '<button>'],
            answer: '<kbd>',
            explanation: '<kbd> element specifically user keyboard input (shortcuts jaise Ctrl+C, Enter) represent karne ke liye use hota hai.'
          },
          summary: ['<code> inline code ke liye, <pre> multiline formatting ke liye', '<kbd> keyboard input shortcuts ke liye', '<samp> program output ke liye, <var> variables ke liye'],
          flashcard: { q: '<pre> tag kya karta hai?', a: '<pre> (preformatted) whitespace aur line breaks ko exactly code file jaisa preserve karta hai.' },
          funFact: '🎉 Fun Fact: Stack Overflow ki poori website par daily 100 million+ <code> aur <pre> tags render hote hain!',
          challenge: {
            instruction: 'Ek code demo banao: ek <pre><code> block, ek keyboard shortcut with <kbd>, aur ek terminal output with <samp>.',
            initialCode: '<!-- Code demo yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<pre>') && n.includes('<code>') && n.includes('<kbd>') && n.includes('<samp>')
            },
            successMessage: 'Computer Code Elements Mastered! Documentation Ninja! +25 XP 💻'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3 — LINKS, IMAGES & MEDIA
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Links, Images & Lists',
      lessons: [
        // ─── LESSON 11: LINKS ─────────────────────────────
        {
          id: 'html-links',
          title: 'HTML Links (Anchor Tag)',
          emoji: '🔗',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Links — Internet ka backbone!\n\nBina links ke internet ek dead end hota.\nSocho Google pe search karo...\naur koi result click na ho sake — what a tragedy! 😂\n\n<a href> = Internet ka teleport! 🚀"',
            hint: '🤦 Masti Sir: "href bhool gaya?\nArre bhai 😂\nhref ke bina anchor tag sirf ek\nfake door hai — dikhta hai,\nkhulta nahi! 🚪"',
            success: '🥳 Masti Sir: "Links perfectly connected! 🔗\nAb internet tumhare haath mein hai! 😎"',
            mistake: '😅 Masti Sir: "URL mein https:// likhna bhool gaye?\nhttps:// nahi likha toh browser same folder mein dhundega!\nExternal links ke liye hamesha complete URL!"'
          },
          englishDef: 'Links in HTML are created using the <a> (anchor) element with an href attribute. They allow users to navigate from one page to another, jump to sections within the same page, open email clients, or download files. The target attribute controls where the link opens.',
          hinglishExplain: '<a> tag ek "anchor" hai — jaise ek rope se ek jagah doosri jagah connect karte ho. href mein woh address likhte ho jahan user jane wala hai. Click karo, wahan pahunch jao! Instagram, YouTube, Google — sab links hi hain.',
          storyExplain: 'Socho Zomato app:\n\n"Biryani Order Karo" button pe click karo\n  ↓\nPayment page pe pahunch jao\n  ↓\n"Back" click karo\n  ↓\nWapis restaurant page\n\nHar button basically ek <a> tag tha!\nBina links ke internet ek dead end hota! 😂',
          funnyExample: {
            scenario: 'Types of links:\n\nhttps://google.com → External (dusri website)\n#section-id → Internal (same page ka section)\nmailto:hello@gmail.com → Email kholta hai\ntel:+919876543210 → Phone dial karta hai\n./page.html → Relative (same folder ki file)\n\nMasti Sir: "Links ek universal remote ki tarah hain —\nhar button alag kaam karta hai! 😂\nHref mein destination change karo, kaam change!"',
            punchline: '<a href> = Internet ka teleport! 🚀'
          },
          memoryTrick: 'href Types yaad karo:\n"HTTPS = External\n# = Internal same page\nmailto: = Email\ntel: = Phone\n./ = Relative file"\n\nYaad karo: Anchor = Paani mein roka — href = direction batata hai kahan jana hai!',
          visualDiagram: {
            title: 'Link Types',
            nodes: ['External: https://website.com', 'Internal: #section-id', 'Relative: ./page.html', 'Email: mailto:email@mail.com', 'Phone: tel:+91XXXXXXXXXX'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Link click se page load tak:',
            steps: ['Click event fire', 'href attribute read', 'URL validate', 'HTTP GET request', 'New page render']
          },
          code: `<!-- External link -->
<a href="https://codemasti.com">CodeMasti Visit Karo</a>

<!-- New tab mein kholo -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google (New Tab mein)
</a>

<!-- Same page section jump -->
<a href="#contact">Contact Section</a>
<section id="contact">...</section>

<!-- Email link -->
<a href="mailto:hello@codemasti.com">Email Bhejo</a>

<!-- Phone link -->
<a href="tel:+919876543210">Call Karo</a>

<!-- Download link -->
<a href="resume.pdf" download="Mera-Resume">Resume Download</a>

<!-- Relative link -->
<a href="./about.html">About Page</a>`,
          codeBreakdown: [
            { part: '<a', label: 'Anchor element — link container', color: '#3b82f6' },
            { part: 'href="https://codemasti.com"', label: 'href — destination URL (required for functional link)', color: '#ef4444' },
            { part: 'target="_blank"', label: 'target — "_blank" = new tab, "_self" = same tab (default)', color: '#f59e0b' },
            { part: 'rel="noopener noreferrer"', label: 'Security — target="_blank" ke saath hamesha add karo', color: '#8b5cf6' },
            { part: 'download="filename"', label: 'download attribute — click pe file download hoga', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ href mein https:// na likhna — relative path ban jaata hai',
            '❌ target="_blank" bina rel="noopener" — security vulnerability!',
            '❌ Closing tag </a> bhool jana',
            '❌ Link text empty rakhna — accessibility problem'
          ],
          proTips: [
            '💡 target="_blank" ke saath hamesha rel="noopener noreferrer" — tab-napping prevent karta hai',
            '💡 Meaningful link text use karo — "Click here" nahi, "HTML Tutorial padho"',
            '💡 aria-label se screen readers ko better context do'
          ],
          interviewQuestions: [
            'target="_blank" mein security risk kya hai?',
            'rel="noopener noreferrer" kyun use karte hain?',
            'Internal links kaise kaam karte hain?',
            'mailto: aur tel: links kab use karte hain?'
          ],
          miniChallenge: 'Teen links banao: 1) Google pe jane ka link (new tab), 2) Same page ke #about section ka link, 3) Email link.',
          quiz: {
            type: 'fixbug',
            question: 'Bug fix karo: link new tab mein khulna chahiye aur secure hona chahiye.',
            buggyCode: '<a href="https://google.com" target="blank">Google</a>',
            answer: 'target="_blank" rel="noopener noreferrer"',
            validator: (code) => code.includes('target="_blank"') && (code.includes('rel=') || code.includes('noopener')),
            explanation: 'target="_blank" sahi value hai (underscore se), plus rel="noopener noreferrer" security ke liye.'
          },
          summary: ['<a> tag se links banate hain, href attribute destination specify karta hai', 'target="_blank" new tab mein kholne ke liye', 'mailto:, tel:, #id — alag alag link types hain'],
          flashcard: { q: 'External links ke liye target="_blank" ke saath kaunsa attribute add karna chahiye?', a: 'rel="noopener noreferrer" — tab-napping attack se bachata hai!' },
          funFact: '🎉 Fun Fact: "href" ka matlab "Hypertext REFerence" hai — 1991 se exist karta hai jab Tim Berners-Lee ne HTML invent kiya!',
          didYouKnow: '🤯 Did You Know? Original HTML sirf links ke liye banaya gaya tha — scientists documents ko link karte the! Images aur forms baad mein aaye!',
          challenge: {
            instruction: 'Teen links banao: 1) href="https://codemasti.com", target="_blank", rel="noopener noreferrer", 2) href="#about" internal link, 3) href="mailto:test@test.com" email link.',
            initialCode: '<!-- Links yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('target="_blank"') && n.includes('#') && n.includes('mailto:')
            },
            successMessage: 'Link master! Internet connected! +25 XP 🔗'
          }
        },

        // ─── LESSON 12: IMAGES ────────────────────────────
        {
          id: 'html-images',
          title: 'HTML Images',
          emoji: '🖼️',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Images — websites ki jaan!\n\nBina images ke website boring hoti hai.\nLekin images likhna easy hai:\n<img src=\"photo.jpg\" alt=\"Photo\">\n\nBas itna! Seedha aur simple! 📸"',
            hint: '🤦 Masti Sir: "alt attribute bhool gaya?\nArre bhai! \nAlt text nahi = Accessibility fail!\nBlind users ke liye ye bahut zaroori hai! 😔"',
            success: '🥳 Masti Sir: "Images perfect! 🔥\nAlt text bhi hai — accessibility champion! 🏆"',
            mistake: '😅 Masti Sir: "<img> ko close karna chahiye?</img>?\nNahi bhai! <img> self-closing hai!\nAp close nahi karte ise! 😅"'
          },
          englishDef: 'The <img> element embeds an image in an HTML page. It is a void element (self-closing) with two required attributes: src (image source/URL) and alt (alternative text for accessibility and when image fails to load). Width and height attributes prevent layout shift.',
          hinglishExplain: '<img> tag image display karta hai. Ye ek "self-closing" tag hai — matlab isko close karne ki zaroorat nahi. src mein image ka path ya URL dete hain. alt text tab dikhta hai jab image load na ho — aur screen readers bhi alt text use karte hain blind users ke liye.',
          storyExplain: 'Socho Instagram:\n\nAgar tumne ek photo upload ki aur wo load nahi ho rahi...\nWahan alt text dikhega:\n"[Image: Biryani ki photo on Eid]"\n\nBina alt ke screen reader bolta:\n"[Image: img_20240101_183422.jpg]"\n\nKoi samajhega? Nahi! 😂\nHamesha meaningful alt text likho bhai!\n\nAur blind users jo screen reader use karte hain —\nwoh alt text sun ke samajhte hain image mein kya hai! 🔊',
          funnyExample: {
            scenario: 'Galat alt texts:\n❌ alt="" — khali alt\n❌ alt="image" — kuch nahi batata\n❌ alt="IMG_20240101.jpg" — filename = useless!\n\nSahi alt texts:\n✅ alt="Rahul ka birthday cake with candles"\n✅ alt="CodeMasti HTML course dashboard"\n✅ alt="Map showing route from Delhi to Mumbai"\n\nMasti Sir: "Alt text ek aankhon se\ndekhne wale ki description honi chahiye!\nKisi ko blindfold karo aur explain karo!" 🤣',
            punchline: 'alt = Image ka "description for blind users"!'
          },
          memoryTrick: 'img attributes yaad karo:\nsrc = Source (kahan se aayegi)\nalt = Alternative text (backup description)\nwidth/height = Size (layout shift rokne ke liye)\nloading="lazy" = Performance trick\n\nYaad karo: "SAW" — Src, Alt, Width!',
          visualDiagram: {
            title: 'Image load flow',
            nodes: ['<img src="URL">', 'Browser sends HTTP request', 'Server returns image file', 'Browser decodes', 'Layout calculate', 'Display on screen'],
            type: 'flow'
          },
          code: `<!-- Basic image -->
<img src="photo.jpg" alt="Meri Photo">

<!-- Online image with size -->
<img 
  src="https://picsum.photos/400/200"
  alt="Random nature photo"
  width="400"
  height="200"
>

<!-- Lazy loading (performance!) -->
<img 
  src="large-photo.jpg"
  alt="Beautiful landscape"
  loading="lazy"
  width="800"
  height="600"
>

<!-- Decorative image (no alt needed) -->
<img src="decoration.svg" alt="" role="presentation">

<!-- Clickable image (image + link) -->
<a href="https://codemasti.com">
  <img src="logo.png" alt="CodeMasti Homepage">
</a>`,
          codeBreakdown: [
            { part: '<img', label: 'Image tag — self-closing, no </img> needed', color: '#3b82f6' },
            { part: 'src="..."', label: 'Source — relative path ya absolute URL to the image', color: '#ef4444' },
            { part: 'alt="..."', label: 'Alt text — REQUIRED! Accessibility + SEO ke liye', color: '#10b981' },
            { part: 'width="400" height="200"', label: 'Dimensions — layout shift rokta hai (CLS improvement)', color: '#f59e0b' },
            { part: 'loading="lazy"', label: 'Lazy loading — image tab load ho jab viewport mein aaye — performance!', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ alt attribute bhool jana — accessibility violation!',
            '❌ Galat file path ya URL — image nahi dikhegi (broken icon)',
            '❌ </img> likhna — img self-closing hai!',
            '❌ Width/height na likhna — CLS (Cumulative Layout Shift) increase hota hai'
          ],
          proTips: [
            '💡 Hamesha width aur height specify karo — page layout stable rehta hai',
            '💡 Large images ke liye loading="lazy" use karo — page fast load hoga',
            '💡 WebP format prefer karo — 30% smaller than JPG!',
            '💡 Decorative images ke liye alt="" (empty, not missing) use karo'
          ],
          interviewQuestions: [
            '<img> tag kya self-closing hai? Kyun?',
            'alt attribute kyun important hai?',
            'loading="lazy" kya karta hai?',
            'Image ke width/height specify karna kyun zaroori hai?'
          ],
          miniChallenge: 'Picsum.photos se ek image load karo — proper alt text, width=400, height=300, loading="lazy" ke saath.',
          quiz: {
            type: 'mcq',
            question: '<img> tag ke baare mein kaunsa statement GALAT hai?',
            options: ['Isko closing tag chahiye </img>', 'Ye self-closing tag hai', 'src attribute required hai', 'alt attribute accessibility ke liye zaroori hai'],
            answer: 'Isko closing tag chahiye </img>',
            explanation: '<img> ek void/self-closing element hai. Koi closing tag nahi hota.'
          },
          summary: ['<img> self-closing tag hai — koi </img> nahi', 'src = image path/URL, alt = description (required!)', 'width/height layout shift rokta hai, loading="lazy" performance improve karta hai'],
          flashcard: { q: '<img> tag mein kaunse 2 attributes REQUIRED hain?', a: 'src (image source) aur alt (alternative text) — dono mandatory hain!' },
          funFact: '🎉 Fun Fact: WebP format JPEG se 25-34% aur PNG se 26% smaller hota hai — Google ne banaya tha!',
          didYouKnow: '🤯 Did You Know? Pehle HTML mein <img> tag nahi tha! Tim Berners-Lee iska plan nahi tha. Marc Andreessen ne 1993 mein add kiya!',
          challenge: {
            instruction: 'Ek img tag likho jisme src="https://picsum.photos/400/200", alt text meaningful ho, width=400, height=200, loading="lazy" ho.',
            initialCode: '<!-- Image tag yahan likho -->\n',
            validator: (code) => {
              const n = code.toLowerCase().replace(/\s+/g, '')
              return n.includes('<img') && n.includes('src=') && n.includes('alt=') && n.includes('loading=')
            },
            successMessage: 'Image perfectly embedded! +25 XP 🖼️'
          }
        },

        // ─── LESSON 13: LISTS ─────────────────────────────
        {
          id: 'html-lists',
          title: 'HTML Lists',
          emoji: '📋',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Lists — information organize karne ka best tarika!\n\nul = Unordered (bullets)\nol = Ordered (numbers)\ndl = Definition (term + description)\n\nZomato ki grocery list = ul\nRecipe ke steps = ol\nDictionary = dl\n\nSimple hai! 😎"',
            hint: '🤦 Masti Sir: "<li> ko <ul> ke bahar mat rakho!\n<li> hamesha <ul> ya <ol> ke andar hota hai!\nOrphan <li> invalid HTML hai! 😅"',
            success: '🥳 Masti Sir: "Lists perfectly structured! 📋\nInformation organize ho gayi ek dam! 🔥"',
            mistake: '😅 Masti Sir: "<ul> ke andar seedha text mat likho!\n<li> ke andar likho text!\nBhai rules hain — follow karo! 😅"'
          },
          englishDef: 'HTML has three types of lists: Unordered Lists (<ul>) for bullet points, Ordered Lists (<ol>) for numbered sequences, and Description Lists (<dl>) for term-definition pairs. List items use <li>, and description lists use <dt> (term) and <dd> (description).',
          hinglishExplain: 'Lists teen type ki hoti hain: numbered (ol) aur bullets (ul). Jaise shopping list pe numbers nahi hote, par recipe ke steps pe hote hain. HTML mein bhi yahi logic hai — recipe ke liye ol, ingredients ke liye ul!',
          storyExplain: 'Swiggy Order List:\n\n🔢 Recipe Steps (Ordered — sequence matters):\n1. Chawal bhigao\n2. Tadka lagao\n3. Chawal daalo\n4. Pakao\n5. Serve karo! 😋\n\n• Grocery List (Unordered — sequence doesn\'t matter):\n• Chawal\n• Dal\n• Ghee\n• Pyaz\n• Tomato\n\nol = Steps (ORDER matters)\nul = Shopping list (ORDER doesn\'t matter)\n\nYahi HTML ka logic hai! 🛒',
          funnyExample: {
            scenario: 'Aik confused developer ne likha:\n\n<ul>\n  1. HTML\n  2. CSS\n  3. JavaScript\n</ul>\n\nBhai yeh kya tha? 😂\nUL bullets deta hai, tum numbers likh rahe ho!\n\nSahi tarika:\nUl ke liye:\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n\nOl ke liye automatic numbers aate hain!',
            punchline: 'ol = Recipe Steps, ul = Grocery List!'
          },
          memoryTrick: 'U = Unordered = Unsequenced (bullets)\nO = Ordered = Organized sequence (numbers)\nD = Definition list (dictionary style)\n\nNested lists: <ul> ke andar <ul> — possible hai!\nBus har <li> ke andar naya <ul>/<ol> daalo!',
          code: `<!-- Unordered List (bullets) -->
<ul>
  <li>HTML — Structure</li>
  <li>CSS — Styling</li>
  <li>JavaScript — Interactivity</li>
</ul>

<!-- Ordered List (numbers) -->
<ol>
  <li>HTML Sikho</li>
  <li>CSS Sikho</li>
  <li>JS Sikho</li>
  <li>Job Pao 🎉</li>
</ol>

<!-- Ordered — custom start -->
<ol start="5" reversed>
  <li>Item 5</li>
  <li>Item 4</li>
</ol>

<!-- Nested List -->
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — web structure</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets — web styling</dd>
</dl>`,
          codeBreakdown: [
            { part: '<ul>', label: 'Unordered List — bullet points, order matters nahi', color: '#3b82f6' },
            { part: '<ol>', label: 'Ordered List — numbers, order important hai', color: '#8b5cf6' },
            { part: '<li>', label: 'List Item — ul ya ol ke andar hona zaroori', color: '#10b981' },
            { part: '<dl>', label: 'Description List — term aur definition pairs ke liye', color: '#ef4444' },
            { part: 'start="5"', label: 'ol attribute — starting number set karo', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ <li> ko <ul> ke bahar likhna — invalid HTML',
            '❌ <ul> ke andar seedha text likhna — <li> mein daalo',
            '❌ Nested list <li> ke bahar daalna — <li> ke andar daalo',
            '❌ <ol> aur <ul> ka purpose mix karna'
          ],
          proTips: [
            '💡 Nested lists: <li> ke andar naya <ul> ya <ol> daao',
            '💡 <ol start="10"> se list 10 se start kar sakte ho',
            '💡 Navigation menus ke liye <ul> + <li> + <a> combination use karte hain!'
          ],
          interviewQuestions: [
            'ol aur ul mein kya farak hai?',
            'Navigation menu ke liye konsa list tag use karte hain?',
            'Nested lists kaise banate hain?',
            'Description list (<dl>) kab use karte hain?'
          ],
          miniChallenge: '"Top 5 Favourite Foods" ki ul banao aur "Morning Routine" ki ol (5 steps).',
          quiz: {
            type: 'mcq',
            question: 'Numbered list banane ke liye kaunsa tag use karte hain?',
            options: ['<ul>', '<nl>', '<ol>', '<list>'],
            answer: '<ol>',
            explanation: '<ol> = Ordered List — browser automatically numbers add karta hai. <ul> bullets deta hai.'
          },
          summary: ['<ul> = bullet list, <ol> = numbered list', '<li> har item ke liye use hota hai', 'Nested lists <li> ke andar <ul>/<ol> se banate hain', '<dl> term-definition pairs ke liye'],
          flashcard: { q: 'Bullet list ke liye? Numbered list ke liye?', a: '<ul> = bullets, <ol> = numbers, <li> = items — teeno hamesha saath!' },
          funFact: '🎉 Fun Fact: CSS se list bullets ko emojis bana sakte ho! list-style-type: "🍕" — pizza bullets! 😂',
          challenge: {
            instruction: 'Ek unordered list banao jisme 3 programming languages ho (HTML, CSS, JavaScript). Phir ek ordered list banao (5 steps to become developer).',
            initialCode: '<!-- Lists yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<ul>') && (n.match(/<li>/g) || []).length >= 3 && n.includes('<ol>')
            },
            successMessage: 'List perfectly structured! +20 XP 📋'
          }
        },

        // ─── LESSON: HTML FAVICON & PAGE TITLE ───────────
        {
          id: 'html-favicon',
          title: 'HTML Favicon & Page Title',
          emoji: '🔖',
          xpReward: 25,
          badgeName: 'Brand Master',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Favicon — Browser tab ki choti DP! 😎\n\nGoogle, YouTube, WhatsApp ke tab pe chota icon dekha hai?\nUsko Favicon (Favorites Icon) bolte hain!\n\nYe website ko professional look deta hai!\nChalo favicon add karna seekhein! 🔖"',
            hint: '🤦 Masti Sir: "Favicon hamesha <head> tag ke andar jaata hai!\n<link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\nBody mein mat daal dena! 😅"',
            success: '🥳 Masti Sir: "Favicon added! 🔥\nBrowser tab pe tumhara brand logo live hai!"',
            mistake: '😅 Masti Sir: "Favicon load nahi ho raha?\nHref path check karo! File images folder mein hai ya root pe?"'
          },
          englishDef: 'A favicon (favorite icon) is a small 16x16 or 32x32 pixel image displayed next to the page title in browser tabs, bookmarks, and address bars. It is declared in the HTML <head> using a <link rel="icon"> tag. The <title> element defines the document title displayed in the browser tab and search engine results.',
          hinglishExplain: 'Favicon browser tab ka chota logo icon hota hai jo website title ke bagal mein dikhta hai. Isko add karne ke liye `<head>` ke andar `<link rel="icon" type="image/x-icon" href="favicon.ico">` likhte hain. Ye user ko multiple open tabs mein aapki website foran pehchanne mein madad karta hai.',
          storyExplain: 'Jab tum 50 tabs kholte ho Chrome mein, toh website ka pura naam cut ho jata hai. Sirf chota sa logo dikhta hai — YouTube ka Red play button, Google ka G, ya WhatsApp ka green icon.\n\nUsi chote logo ko Favicon bolte hain!\nBina Favicon ke website aisi lagti hai jaise bina DP wali WhatsApp profile! 😂',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 1. Page Title (Tab name & Google SERP) -->
  <title>CodeMasti — Learn Programming in Hinglish</title>

  <!-- 2. Standard Favicon (ICO / PNG / SVG) -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  
  <!-- 3. Apple Touch Icon (iOS Home Screen Bookmark) -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
</head>
<body>
  <h1>Namaste CodeMasti!</h1>
  <p>Browser tab check karo — top pe favicon aur title dikhega!</p>
</body>
</html>`,
          codeBreakdown: [
            { part: '<title>', label: 'Browser tab name aur Google search title', color: '#ef4444' },
            { part: 'rel="icon"', label: 'Browser ko batata hai ki ye icon favicon hai', color: '#3b82f6' },
            { part: 'type="image/x-icon"', label: 'Image format MIME type (.ico / .png / .svg)', color: '#10b981' },
            { part: 'rel="apple-touch-icon"', label: 'iPhone/iPad home screen bookmark icon', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ <link rel="icon"> ko <body> mein daalna — hamesha <head> mein aayega',
            '❌ Heavy 5MB image ko favicon banana — 16x16 ya 32x32 pixel lightweight .ico/.png use karo',
            '❌ Title tag bhool jana — "Untitled Document" dikhega'
          ],
          proTips: [
            '💡 Modern browsers SVG favicons bhi support karte hain: type="image/svg+xml"',
            '💡 Free favicon generator websites (jaise favicon.io) se 1-click mein saare sizes generate ho jate hain',
            '💡 <title> tag 50-60 characters ke beech rakho for best SEO'
          ],
          interviewQuestions: [
            'Favicon kya hai aur HTML mein kaise include karte hain?',
            'Favicon ke common image formats kaunse hain?',
            'Apple Touch Icon kya hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Favicon ko link karne ke liye HTML mein kaunsa tag use kiya jaata hai?',
            options: ['<link rel="icon"> in head', '<img src="favicon.ico"> in body', '<meta name="favicon">', '<icon src="favicon.ico">'],
            answer: '<link rel="icon"> in head',
            explanation: '<link rel="icon" type="image/x-icon" href="..."> tag <head> element ke andar use kiya jaata hai.'
          },
          summary: ['Favicon tab ka icon hota hai, <head> mein <link rel="icon"> se lagta hai', '<title> tab ka naam aur search result title hota hai', 'Standard formats: .ico, .png, .svg'],
          flashcard: { q: 'Favicon ka standard size kya hota hai?', a: '16x16 pixels aur 32x32 pixels (high-dpi screens ke liye 180x180 ya SVG).' },
          funFact: '🎉 Fun Fact: "Favicon" word "Favorite Icon" ka short form hai, jo pehli baar Internet Explorer 5 ne 1999 mein introduce kiya tha!',
          challenge: {
            instruction: 'Ek <head> section banao jisme: ek descriptive <title>, ek standard favicon <link rel="icon">, aur ek apple-touch-icon link ho.',
            initialCode: '<head>\n  <!-- Favicon aur Title yahan -->\n</head>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<title>') && n.includes('rel="icon"')
            },
            successMessage: 'Favicon & Page Title Mastered! Brand ready! +25 XP 🔖'
          }
        },

        // ─── LESSON: HTML FILE PATHS ──────────────────────
        {
          id: 'html-filepaths',
          title: 'HTML File Paths (Relative vs Absolute)',
          emoji: '📁',
          xpReward: 25,
          badgeName: 'Path Finder',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "File Paths — Image aur Link ka sahi pata (Address)! 🗺️\n\nAgar file ka path galat hua,\ntoh 404 Broken Image ka cross dikhega!\n\nRelative vs Absolute path — aaj clear karenge! 😎"',
            hint: '🤦 Masti Sir: "./ matlab current folder\n../ matlab ek folder peeche (Parent folder)\n/ matlab website ka root folder!\nYe 3 symbols yaad rakho!"',
            success: '🥳 Masti Sir: "Path Finder Master! 🔥\nAb kabhi broken image error nahi aayegi!"',
            mistake: '😅 Masti Sir: "C:\\Users\\Computer\\picture.jpg ka path web pe nahi chalta!\nYe local path hai! Relative path ./images/pic.jpg use karo!"'
          },
          englishDef: 'A file path describes the location of a file in a web folder structure. Absolute file paths point to a full URL (including https://domain.com/path), while Relative file paths point to a file relative to the current webpage (e.g., ./image.jpg for current folder, images/pic.jpg for subfolder, ../pic.jpg for parent directory).',
          hinglishExplain: 'File path matlab file ka address. Jab tum `<img src="...">` ya `<a href="...">` likhte ho, toh browser ko file dhoondhne ka rasta batana padta hai. **Absolute path** full internet URL hota hai (https://...). **Relative path** tumhare project folder ke hisaab se hota hai (`./`, `../`, `images/`).',
          storyExplain: 'Socho tum dost ko address de rahe ho:\n\n1. **Absolute Path**: "Planet Earth, India, Delhi, House 42" (Full global address — sab jagah kaam karega).\n2. **Relative Path**: "Mere kamre se bahar niklo, right mud jao, agla room" (Current jagah ke reference se).\n\nHTML mein:\n- `./cat.jpg` = Mere hi folder mein rakhi cat image\n- `images/cat.jpg` = Mere folder ke andar `images` subfolder mein\n- `../cat.jpg` = Ek folder peeche (Parent folder) mein! 🗺️',
          code: `<!-- 1. Same Folder (Current Directory) -->
<img src="picture.jpg" alt="Same folder">
<img src="./picture.jpg" alt="Explicit same folder">

<!-- 2. Subfolder (e.g. images folder) -->
<img src="images/picture.jpg" alt="In images subfolder">
<link rel="stylesheet" href="css/style.css">

<!-- 3. Parent Folder (One level up: ../) -->
<img src="../picture.jpg" alt="One folder up">
<img src="../../assets/logo.png" alt="Two folders up">

<!-- 4. Root Relative (Starting from website root: /) -->
<img src="/images/logo.png" alt="From website root">

<!-- 5. Absolute URL (Full Web Address / CDN) -->
<img src="https://cdn.codemasti.com/images/hero.jpg" alt="External CDN image">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>`,
          codeBreakdown: [
            { part: 'src="pic.jpg"', label: 'Same folder mein file dhoondhta hai', color: '#3b82f6' },
            { part: 'src="images/pic.jpg"', label: 'images naam ke subfolder ke andar', color: '#10b981' },
            { part: 'src="../pic.jpg"', label: '../ matlab ek folder bahar (parent folder) nikalna', color: '#ef4444' },
            { part: 'src="/images/pic.jpg"', label: '/ se shuru = domain root se path shuru hota hai', color: '#8b5cf6' },
            { part: 'https://...', label: 'Absolute full URL — kisi bhi external server ya CDN se', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Windows local path C:\\Users\\... likhna — live hosting par crash ho jata hai',
            '❌ ../ lagana bhool jana jab file sub-page folder ke andar ho',
            '❌ Case-sensitive spelling mistakes — Logo.PNG vs logo.png Linux servers pe alag hoti hain'
          ],
          proTips: [
            '💡 Production websites ke liye Relative paths (`./` ya `/assets/...`) hamesha best hote hain',
            '💡 CDNs aur Google Fonts ke liye Absolute URLs (`https://fonts.googleapis.com/...`) use karo',
            '💡 File aur folder names hamesha lowercase aur hyphens ke saath rakho (e.g. `user-avatar.webp`)'
          ],
          interviewQuestions: [
            'Relative path aur Absolute path mein kya difference hai?',
            'File path mein ../ ka kya matlab hota hai?',
            'Root relative path (/) kab use karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'File structure mein ek folder upar (Parent directory) jane ke liye kaunsa syntax use hota hai?',
            options: ['./', '../', '/', '.../'],
            answer: '../',
            explanation: '../ ka matlab hai "Go up one directory" (Parent folder). ./ current folder hota hai.'
          },
          summary: ['Relative paths project files ke liye, Absolute paths external URLs ke liye', './ = current folder, ../ = parent folder, / = root directory', 'Files aur folders ke naam lowercase mein rakhein'],
          flashcard: { q: 'Path mein ../ kya karta hai?', a: '../ browser ko ek folder upar (Parent directory) jane ko bolta hai.' },
          funFact: '🎉 Fun Fact: Web servers Linux pe chalte hain jo strictly case-sensitive hote hain — isliye Pic.JPG aur pic.jpg do alag files maani jaati hain!',
          challenge: {
            instruction: 'Path practice code banao: ek relative image src="images/logo.png", ek parent folder link href="../index.html", aur ek external absolute link href="https://codemasti.com".',
            initialCode: '<!-- Paths yahan add karo -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('images/') && n.includes('../') && n.includes('https://')
            },
            successMessage: 'File Paths Mastered! Directory Navigator Ninja! +25 XP 📁'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4 — ORGANIZING CONTENT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Organizing Content',
      lessons: [
        // ─── LESSON 14: TABLES ────────────────────────────
        {
          id: 'html-tables',
          title: 'HTML Tables',
          emoji: '📊',
          xpReward: 30,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Tables — HTML ka Excel sheet!\n\nSocho report card:\n| Subject | Marks | Grade |\n|---------|-------|-------|\n| HTML    |  95   |   A   |\n\nTable banao aise!\nRows aur columns — simple! 📊"',
            hint: '🤦 Masti Sir: "<td> ko <tr> ke bahar nikala?\nArre bhai 😂\n<td> hamesha <tr> ke andar,\n<tr> hamesha <table> ke andar!\nNesting order bhool gaye? 🙈"',
            success: '🥳 Masti Sir: "Table structure perfect! 🔥\nData organize ho gaya ek dum! 📊"',
            mistake: '😅 Masti Sir: "Layout ke liye table use karna?\nYeh 2005 ka tarika tha bhai!\nAaj CSS Grid aur Flexbox se karo layout! 😅"'
          },
          englishDef: 'HTML tables display data in rows and columns. The <table> element contains rows (<tr>), which contain header cells (<th>) or data cells (<td>). <thead>, <tbody>, and <tfoot> provide semantic structure. colspan and rowspan attributes span cells across multiple columns or rows.',
          hinglishExplain: 'HTML table bilkul Excel spreadsheet jaisa hai. Rows hain (horizontal lines), columns hain (vertical lines). <tr> = table row, <th> = table heading (bold, centered), <td> = table data (normal). Sirf data organize karne ke liye use karo — layout ke liye CSS use karo!',
          storyExplain: 'School ka Result Card:\n\n| Subject | Marks | Grade |\n|---------|-------|-------|\n| HTML    |  95   |   A+  |\n| CSS     |  88   |   A   |\n| JS      |  72   |   B+  |\n\nHar subject = Row\nSubject, Marks, Grade = Columns\nBold header = <th>\nNormal data = <td>\n\nYahi HTML table ka basic idea hai! 📝',
          funnyExample: {
            scenario: 'Ek developer bola:\n"Table se page layout banunga!"\n\nMasti Sir: 😱\n"Bhai yeh 2001 mein karte the!\nAaj hamare paas CSS Grid hai!\nCSS Flexbox hai!\n\nTable sirf tabular data ke liye hai —\njaise:\n- Price comparison\n- Schedule/timetable\n- Sports standings\n\nLayout ke liye table = Sin of HTML! 😂"',
            punchline: 'Table = HTML ka Excel sheet!'
          },
          memoryTrick: 'Table hierarchy yaad karo:\ntable > thead/tbody/tfoot > tr > th/td\n\n"Tortillas Taste Better Richer Than Dry" 😂\nTable → Thead/Tbody → TR → TH/TD\n\nSimple: Outer se inner mein jao!',
          visualDiagram: {
            title: 'Table Structure',
            nodes: ['<table>', '<thead> (headers)', '<tbody> (data rows)', '<tfoot> (footer)', '<tr> (row)', '<th>/<td> (cells)'],
            type: 'tree'
          },
          code: `<table>
  <caption>Students' Progress Report</caption>
  
  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">Course</th>
      <th scope="col">Score</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Rahul</td>
      <td>HTML Mastery</td>
      <td>95</td>
      <td><strong>A+</strong></td>
    </tr>
    <tr>
      <td>Priya</td>
      <td>CSS Styling</td>
      <td>88</td>
      <td><strong>A</strong></td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colspan="2">Class Average</td>
      <td>91.5</td>
      <td>A</td>
    </tr>
  </tfoot>
</table>`,
          codeBreakdown: [
            { part: '<table>', label: 'Table container — sab kuch iske andar', color: '#3b82f6' },
            { part: '<caption>', label: 'Table ka title — accessibility ke liye important', color: '#8b5cf6' },
            { part: '<thead>', label: 'Table header section — header rows ke liye', color: '#ef4444' },
            { part: '<tbody>', label: 'Table body — main data rows', color: '#10b981' },
            { part: '<tfoot>', label: 'Table footer — totals, averages', color: '#f97316' },
            { part: '<th scope="col">', label: 'Header cell — bold, scope attribute accessibility ke liye', color: '#f59e0b' },
            { part: 'colspan="2"', label: 'Cell ko 2 columns mein spread karo', color: '#6b7280' }
          ],
          commonMistakes: [
            '❌ <td> ko <tr> ke bahar likhna',
            '❌ Layout ke liye tables use karna — CSS use karo!',
            '❌ thead/tbody/tfoot bhool jana — screen readers ke liye important',
            '❌ <caption> skip karna — screen reader users ko koi context nahi milta'
          ],
          proTips: [
            '💡 <caption> hamesha add karo — screen readers ke liye important',
            '💡 scope="col" ya scope="row" <th> pe accessibility improve karta hai',
            '💡 CSS mein border-collapse: collapse; se table borders combine hote hain'
          ],
          interviewQuestions: [
            '<th> aur <td> mein kya farak hai?',
            'colspan aur rowspan kya karte hain?',
            'Layout ke liye tables kyun nahi use karte?',
            '<thead>, <tbody>, <tfoot> kyun use karte hain?'
          ],
          miniChallenge: 'Apne 3 favourite movies ki table banao — columns: Movie Name, Year, Rating.',
          quiz: {
            type: 'mcq',
            question: 'Table cell ko 3 columns mein spread karne ke liye kaunsa attribute use karte hain?',
            options: ['rowspan="3"', 'colspan="3"', 'width="3"', 'span="3"'],
            answer: 'colspan="3"',
            explanation: 'colspan cell ko horizontally (columns) spread karta hai. rowspan vertically (rows) spread karta hai.'
          },
          summary: ['<table>, <tr>, <th>, <td> — basic table structure', '<thead>, <tbody>, <tfoot> semantic organization ke liye', 'colspan/rowspan cells merge karte hain', 'Tables sirf tabular data ke liye — layout ke liye nahi!'],
          flashcard: { q: '<th> aur <td> mein kya farak hai?', a: '<th> = Table Header (bold, centered, semantic). <td> = Table Data (normal cell). <th> pe scope attribute add karo accessibility ke liye.' },
          funFact: '🎉 Fun Fact: 1990s mein poori website layout tables se banti thi — 3 nested tables ek page ka layout tha! CSS aane ke baad sab badal gaya.',
          challenge: {
            instruction: 'Ek table banao jisme <thead>, <tbody> ho. Headers: Name, Age, City. 2 data rows add karo. Ek cell mein colspan use karo.',
            initialCode: '<!-- Table yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<table') && n.includes('<tr>') && n.includes('<td>') && n.includes('<th') && n.includes('colspan')
            },
            successMessage: 'Table perfectly structured! Data organized! +30 XP 📊'
          }
        },

        // ─── LESSON 15: BLOCK VS INLINE ───────────────────
        {
          id: 'html-block-inline',
          title: 'Block & Inline Elements',
          emoji: '📦',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Block vs Inline — CSS ka sabse important concept!\n\nBlock = Bada heavy furniture (sofa, table)\nInline = Chhoti cheezein (pillow, cup)\n\nBlock poori line leta hai\nInline sirf apna space\n\nSamjhe? Chal seekhte hain! 😎"',
            hint: '🤦 Masti Sir: "<span> ke andar <div> dala?\nArre bhai! 😂\nInline element ke andar\nblock element NAHI jaata!\nYe HTML rules hain! 😅"',
            success: '🥳 Masti Sir: "Block vs Inline crystal clear! 🔥\nCSS aur layout ab aasaan lagega!"',
            mistake: '😅 Masti Sir: "<p> ke andar <div> dala?\nGalat! <p> block hai aur <div> bhi block —\npar <p> ke andar <div> invalid HTML hai!"'
          },
          englishDef: 'HTML elements are either block-level or inline. Block elements start on a new line and take full available width (div, p, h1-h6, ul, table). Inline elements flow within text and take only necessary width (span, a, img, strong, em). CSS display property can change this behavior.',
          hinglishExplain: 'Block elements poori line lete hain aur next element ko neeche dhakelte hain — jaise sofa jo poori wall le leta hai. Inline elements sirf apna space lete hain aur text ke saath flow karte hain — jaise ek pillow jo sofa pe set ho jaata hai.',
          funnyExample: {
            scenario: 'Socho office desk arrangement:\n\n🪑 BLOCK elements = Bade furniture:\n  <div> = Room divider\n  <p> = Bookshelf\n  <h1> = Main table\n  (Har ek apni poori line leta hai!)\n\n💊 INLINE elements = Chhoti cheezein:\n  <span> = Pen\n  <a> = Sticky note\n  <strong> = Highlighter\n  (Sab ek hi line pe fit ho jaate hain!)\n\nMasti Sir: "Bada furniture line change karta hai!\nChhoti cheezein wahi rehti hain!" 😂',
            punchline: 'Block = Room ka sofa, Inline = Table ki pen!'
          },
          memoryTrick: 'Block elements B = "Bade"\nDiv, P, H1-H6, UL, OL, LI, TABLE, HEADER, FOOTER, SECTION\n\nInline elements I = "chhote Items"\nSpan, A, Img, Strong, Em, B, I, Label, Input\n\nCSSS trick: display: block ya display: inline se change karo!',
          code: `<!-- Block Elements — Each takes full width -->
<div>I am a block element — full width</div>
<p>I am also block — starts new line</p>
<h2>Heading — block element</h2>

<!-- Inline Elements — Flow within text -->
<p>
  Yeh normal text hai,
  <strong>yeh bold hai (inline)</strong>,
  aur <a href="#">yeh ek link hai (inline)</a>,
  aur <span style="color:red">yeh red span hai (inline)</span>.
  Sab ek hi line pe hain!
</p>

<!-- CSS se change karo -->
<span style="display: block;">
  Ye span ab block ban gaya — apni line lega!
</span>

<div style="display: inline;">
  Ye div inline ban gaya — line nahi lega!
</div>`,
          codeBreakdown: [
            { part: '<div>', label: 'Block element — full width, new line se shuru', color: '#3b82f6' },
            { part: '<span>', label: 'Inline element — sirf text ke jitna width', color: '#10b981' },
            { part: 'display: block', label: 'CSS se inline ko block banana', color: '#f59e0b' },
            { part: 'display: inline', label: 'CSS se block ko inline banana', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ Inline element (<span>) ke andar block element (<div>) daalna',
            '❌ <p> ke andar <div> ya <ul> — invalid!',
            '❌ Block vs inline confusion se layout issues'
          ],
          proTips: [
            '💡 CSS display: flex aur display: grid se advanced layout banao',
            '💡 display: inline-block — inline flow + block dimensions (best of both!)',
            '💡 Modern CSS: block aur inline ka concept CSS Grid se blur ho gaya hai'
          ],
          interviewQuestions: [
            'Block aur inline elements mein kya farak hai?',
            'Konse elements block-level hain?',
            'CSS se element ka display type kaise change karte hain?',
            'display: inline-block kya karta hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Konsa element INLINE hai?',
            options: ['<div>', '<p>', '<span>', '<h1>'],
            answer: '<span>',
            explanation: '<span> inline element hai — text ke saath flow karta hai, new line nahi leta.'
          },
          summary: ['Block elements full width lete hain aur new line se shuru hote hain', 'Inline elements sirf required width lete hain aur text ke flow mein rehte hain', 'CSS display property se change kar sakte hain'],
          flashcard: { q: '<div> aur <span> mein kya farak hai?', a: '<div> = block element (full width, new line). <span> = inline element (text flow, no new line).' },
          funFact: '🎉 Fun Fact: display: inline-block element inline flow karta hai par height aur width set kar sakte ho — web dev ka favorite hack!',
          challenge: {
            instruction: 'Ek paragraph banao jisme inline elements use karo (strong, em, span, a). Phir ek div banao block-level content ke saath.',
            initialCode: '<!-- Block aur Inline elements demonstrate karo -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<div') && n.includes('<span') && n.includes('<p')
            },
            successMessage: 'Block vs Inline crystal clear! +20 XP 📦'
          }
        },

        // ─── LESSON 16: DIV & SPAN ────────────────────────
        {
          id: 'html-div-span',
          title: 'HTML Div & Span',
          emoji: '🗂️',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Div aur Span — HTML ke \'empty boxes\'!\n\n<div> = Bada empty box (block)\n<span> = Chhota empty container (inline)\n\nInhein tab use karo jab koi\nkoi semantic tag fit nahi hota!\n\nOveruse mat karna — DIV soup nahi banana! 😂"',
            hint: '🤦 Masti Sir: "Arre bhai 😂\nSab kuch div mein mat daalo!\nHeader ke liye <header>\nNav ke liye <nav>\nMain content ke liye <main>\nDiv soup se bachao HTML ko! 🍜"',
            success: '🥳 Masti Sir: "Div aur Span sahi jagah use kiya! 🔥\nNo div soup — clean HTML!"',
            mistake: '😅 Masti Sir: "<span> ke andar <p> dala?\nSpan inline hai, p block hai!\nInline ke andar block nahi jaata! 😅"'
          },
          englishDef: '<div> (division) is a generic block-level container used to group elements for styling or scripting. <span> is a generic inline container. Both have no semantic meaning themselves but are essential for CSS styling and JavaScript manipulation.',
          hinglishExplain: '<div> aur <span> "generic containers" hain — inka koi specific meaning nahi hota. Jab koi bhi semantic tag (header, main, nav, footer) fit nahi hota, tab div use karo grouping ke liye. Span inline text ko target karne ke liye. CSS class/id ke saath milkar ye powerful hote hain.',
          funnyExample: {
            scenario: 'Coding interview mein:\n\nInterviewer: "Yeh sab div kyun hai bhai?\n  <div class="header">\n  <div class="nav">\n  <div class="content">\n  <div class="sidebar">\n  <div class="footer">"\n\nAnswer: <header>, <nav>, <main>, <aside>, <footer>\n\nMasti Sir: "Div soup se bachao! 😂\nHTML5 semantic tags use karo!\nDiv sirf jab koi option na ho!"',
            punchline: 'Div = Last Resort, Semantic tags = First Choice!'
          },
          memoryTrick: 'DIV = "Don\'t Ignore Values" — semantic tags prefer karo!\nSPAN = "Small Piece ANywhere" — inline text target karo\n\nWhen to use div:\n✅ CSS layout wrapper\n✅ JavaScript target karna\n✅ Koi semantic option nahi\n\n❌ Header ke jagah div\n❌ Nav ke jagah div',
          code: `<!-- Good use of div — layout wrapper -->
<div class="card">
  <div class="card-header">
    <h3>Course Title</h3>
  </div>
  <div class="card-body">
    <p>Course description...</p>
  </div>
  <div class="card-footer">
    <button>Enroll Now</button>
  </div>
</div>

<!-- Good use of span — inline text styling -->
<p>
  Price: <span class="original-price">₹999</span>
  <span class="sale-price">₹499</span>
  <span class="badge">50% OFF!</span>
</p>

<!-- BAD: Div soup (avoid!) -->
<!-- <div class="header"> — use <header> instead -->
<!-- <div class="nav"> — use <nav> instead -->
<!-- <div class="footer"> — use <footer> instead -->`,
          codeBreakdown: [
            { part: '<div class="card">', label: 'div with class — grouping ke liye, CSS target karne ke liye', color: '#3b82f6' },
            { part: '<span class="badge">', label: 'span with class — inline text styling', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Semantic tags ki jagah div use karna (<div class="header"> instead of <header>)',
            '❌ <span> ke andar block elements',
            '❌ Classes ya IDs ke bina div/span — useless without hooks'
          ],
          proTips: [
            '💡 Semantic tags prefer karo — div/span last resort hain',
            '💡 Ek class ya id ke bina div/span usually useless hai',
            '💡 Debugging: DevTools mein div soup dekh ke pata chalta hai ki code messy hai'
          ],
          interviewQuestions: [
            '<div> aur <span> mein kya farak hai?',
            'Div soup kya hai aur kyun avoid karna chahiye?',
            'Div ki jagah semantic tags kab use karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Navigation links ko wrap karne ke liye best practice kya hai?',
            options: ['<div class="nav">', '<nav>', '<span class="navigation">', '<section id="nav">'],
            answer: '<nav>',
            explanation: '<nav> semantic element hai — navigation links ke liye specifically designed. Div se zyada meaningful!'
          },
          summary: ['<div> block container, <span> inline container', 'Dono ka koi semantic meaning nahi', 'Semantic tags prefer karo — div/span last resort'],
          flashcard: { q: 'Jab header, nav, main koi fit nahi hota, tab kya use karte hain?', a: '<div> — generic block container. Aur inline text ke liye <span>.' },
          funFact: '🎉 Fun Fact: "Divitis" ek term hai jo HTML mein excessive div use karne ko describe karta hai — real developer problem! 😂',
          challenge: {
            instruction: 'Ek card component banao using divs: card-wrapper, card-header (h3), card-body (p), card-footer (button). Span use karo price highlight karne ke liye.',
            initialCode: '<!-- Card component yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<div') && n.includes('<span') && n.includes('<h') && n.includes('<p')
            },
            successMessage: 'Div aur Span perfectly used! +20 XP 🗂️'
          }
        },

        // ─── LESSON 17: CLASS & ID ────────────────────────
        {
          id: 'html-class-id',
          title: 'HTML Class & ID Attributes',
          emoji: '🏷️',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Class aur ID — CSS ka hook!\n\nClass = Ek group ka naam (multiple elements)\nID = Ek element ka unique naam (sirf ek)\n\nSocho school:\nClass = \"10-A students\" (many students)\nID = \"Roll No. 42\" (ek student)\n\nSamjhe? 😎"',
            hint: '🤦 Masti Sir: "Same ID do elements ko diya?\nArre bhai! 😂\nID hamesha UNIQUE hoti hai!\nDo elements same ID nahi le sakte!\nCSS aur JS dono confuse ho jaate hain! 😱"',
            success: '🥳 Masti Sir: "Class aur ID sahi use kiya! 🔥\nCSS ka door khul gaya tumhare liye!"',
            mistake: '😅 Masti Sir: "ID selector JavaScript mein \n#id-name se target karte hain.\nClass .class-name se.\nHash vs dot — bhool mat jana! 😅"'
          },
          englishDef: 'The class attribute allows the same value to be assigned to multiple elements for CSS styling and JavaScript selection. The id attribute provides a unique identifier for one specific element. Both are used to target elements with CSS selectors and JavaScript.',
          hinglishExplain: 'class = ek naam jo multiple elements le sakte hain (jaise school mein "10-A" class mein 40 students). id = ek unique naam jo sirf ek element le sakta hai (jaise Roll Number — sirf ek student ka). CSS mein class ko . se aur id ko # se target karte hain.',
          funnyExample: {
            scenario: 'CSS targeting:\n\n.highlight { color: yellow; }  ← Sab highlight class\n#hero-title { font-size: 48px; }  ← Sirf ek hero-title ID\n\nJS targeting:\ndocument.querySelector(".card")  ← Pehla card milega\ndocument.getElementById("submit-btn")  ← Woh specific button\n\nMasti Sir: "ID = Aadhar Card (unique!)\nClass = Club membership (multiple log!)" 😂',
            punchline: 'ID = Unique, Class = Group!'
          },
          memoryTrick: 'ID = "I am the one and only!" (unique)\nClass = "We are a group!" (multiple)\n\nCSS syntax:\n#id-name { } ← hash for ID\n.class-name { } ← dot for class\n\nJS:\ndocument.getElementById("id")\ndocument.getElementsByClassName("class")',
          code: `<!-- ID — Unique identifier, sirf ek element -->
<header id="main-header">
  <h1 id="site-title">CodeMastii</h1>
</header>

<!-- Class — Multiple elements share karte hain -->
<div class="card featured">
  <h2 class="card-title">HTML Course</h2>
  <p class="card-text description">Best HTML course!</p>
  <button class="btn btn-primary">Enroll</button>
</div>

<div class="card">
  <h2 class="card-title">CSS Course</h2>
  <p class="card-text">Coming soon!</p>
  <button class="btn btn-secondary">Notify Me</button>
</div>

<!-- Multiple classes on one element -->
<p class="text-large text-bold text-blue">
  Multiple classes ek element pe!
</p>`,
          codeBreakdown: [
            { part: 'id="main-header"', label: 'Unique ID — sirf ek element pe, # se CSS target karo', color: '#ef4444' },
            { part: 'class="card featured"', label: 'Multiple classes — space se alag karo, har class alag styling', color: '#3b82f6' },
            { part: 'class="btn btn-primary"', label: 'Component + modifier pattern — modern CSS approach', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Same ID do ya zyada elements ko dena — always unique!',
            '❌ ID mein spaces — id="my header" invalid! id="my-header" sahi',
            '❌ CSS mein ID ko # ki jagah . se target karna',
            '❌ JavaScript targets mein class/id confuse karna'
          ],
          proTips: [
            '💡 BEM naming convention use karo: block__element--modifier',
            '💡 ID se zyada class prefer karo — reusable hoti hai',
            '💡 Ek element mein unlimited classes add kar sakte ho (space se separate)'
          ],
          interviewQuestions: [
            'class aur id mein kya fundamental farak hai?',
            'Ek element mein kitni classes ho sakti hain?',
            'CSS mein class aur id kaise target karte hain?',
            'Kab id prefer karte hain aur kab class?'
          ],
          quiz: {
            type: 'mcq',
            question: 'CSS mein <p id="hero"> ko kaise target karenge?',
            options: ['.hero { }', '#hero { }', 'p.hero { }', 'id.hero { }'],
            answer: '#hero { }',
            explanation: 'ID ko CSS mein # se target karte hain. Class ko . se target karte hain.'
          },
          summary: ['class — multiple elements ke liye, CSS mein . se target', 'id — unique, ek element ke liye, CSS mein # se target', 'Ek element mein multiple classes (space se separate) ho sakti hain'],
          flashcard: { q: 'CSS mein class ko kaise target karte hain? ID ko?', a: 'Class: .class-name { } — dot se. ID: #id-name { } — hash se.' },
          funFact: '🎉 Fun Fact: Ek element ke paas theoretically unlimited classes ho sakti hain! class="a b c d e f..."',
          challenge: {
            instruction: 'Ek card component banao: id="featured-card", class="card card-premium". Heading mein class="card-title", paragraph mein class="card-body", button mein id="enroll-btn" class="btn btn-primary" ho.',
            initialCode: '<!-- Class aur ID use karo -->\n',
            validator: (code) => {
              const n = code
              return n.includes('id=') && n.includes('class=') && (n.match(/class="/g) || []).length >= 2
            },
            successMessage: 'Class aur ID master! CSS ready! +20 XP 🏷️'
          }
        },

        // ─── LESSON 18: IFRAMES ───────────────────────────
        {
          id: 'html-iframes',
          title: 'HTML Iframes',
          emoji: '🪟',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Iframe — window within a window! 🪟\n\nSocho ek photo frame:\nFrame ke andar doosri website!\n\nYouTube embed, Google Maps embed —\nsab iframe ka kaam hai!\n\nLet\'s learn! 😎"',
            hint: '🤦 Masti Sir: "Iframe mein kisi bhi website embed nahi hoti!\nBahut websites X-Frame-Options: DENY set karti hain!\nSecurity reasons se! 😅\nSirf woh websites embed hongi jo allow karti hain."',
            success: '🥳 Masti Sir: "Iframe perfectly placed! 🔥\nYouTube embed kar diya — impressive!"',
            mistake: '😅 Masti Sir: "title attribute bhool gaye iframe mein?\nAccessibility issue! Screen readers ko\npata nahi chalega iframe mein kya hai! 😔"'
          },
          englishDef: 'The <iframe> (inline frame) element embeds another HTML page within the current page. It is commonly used to embed videos (YouTube), maps (Google Maps), social media posts, and external content. The src attribute specifies the URL to embed.',
          hinglishExplain: 'Iframe ek "window" hai apne page ke andar — jaise TV ke andar TV! Isse doosri websites ka content apne page pe show kar sakte ho. YouTube videos embed karna, Google Maps add karna — sab iframe se hota hai.',
          funnyExample: {
            scenario: 'Iframe use cases:\n\n📹 YouTube Video embed:\n<iframe src="https://www.youtube.com/embed/VIDEO_ID">\n\n🗺️ Google Maps embed:\n<iframe src="https://www.google.com/maps/embed?...">\n\n📝 Codepen embed:\n<iframe src="https://codepen.io/pen/...">\n\nMasti Sir: "Iframe = Website mein website!\nJaise dream mein dream (Inception style) 😂"',
            punchline: 'Iframe = Window within a Window!'
          },
          code: `<!-- YouTube Video Embed -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
  allowfullscreen
></iframe>

<!-- Google Maps Embed -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Office Location Map"
></iframe>`,
          commonMistakes: [
            '❌ title attribute bhool jana — screen readers ke liye required',
            '❌ Same-origin content ke liye iframe — performance waste',
            '❌ Iframe size set na karna — default 300x150 hoga'
          ],
          proTips: [
            '💡 Hamesha title attribute add karo accessibility ke liye',
            '💡 loading="lazy" use karo below-fold iframes ke liye',
            '💡 sandbox attribute se security improve karo'
          ],
          interviewQuestions: [
            'iframe kya hai aur kab use karte hain?',
            'X-Frame-Options header kya karta hai?',
            'iframe ki security concerns kya hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'YouTube video embed karne ke liye URL format kya use karte hain?',
            options: ['youtube.com/watch?v=ID', 'youtube.com/embed/ID', 'youtube.com/video/ID', 'youtu.be/ID'],
            answer: 'youtube.com/embed/ID',
            explanation: 'YouTube embed ke liye /embed/VIDEO_ID format use karo — regular watch URL iframe mein nahi chalti.'
          },
          summary: ['iframe doosri webpage embed karta hai apne page mein', 'YouTube, Google Maps embed ke liye use hota hai', 'title attribute accessibility ke liye zaroori hai'],
          flashcard: { q: 'YouTube video iframe mein embed karne ke liye URL format kya hota hai?', a: 'https://www.youtube.com/embed/VIDEO_ID — /embed/ prefix zaroor lagao!' },
          funFact: '🎉 Fun Fact: Facebook aur Twitter apni posts embed karne ke liye iframes use karte hain — har Twitter embed ek iframe hai!',
          challenge: {
            instruction: 'Ek iframe banao jisme src, width="560", height="315", title attribute ho. YouTube embed URL use karo.',
            initialCode: '<!-- iframe yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<iframe') && n.includes('src=') && n.includes('title=') && n.includes('width=')
            },
            successMessage: 'Iframe embedded! Web integration master! +20 XP 🪟'
          }
        },

        // ─── LESSON: HTML & JAVASCRIPT INTEGRATION ───────
        {
          id: 'html-javascript',
          title: 'HTML & JavaScript Integration',
          emoji: '⚡',
          xpReward: 30,
          badgeName: 'Script Commander',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "JavaScript — HTML ke sharir mein dimaag aur jaan! 🧠⚡\n\nHTML = Haddi-maans (Structure)\nCSS = Sundar kapde (Style)\nJavaScript = Action aur Dimag (Interactivity)!\n\n<script> tag se JavaScript link karna seekhein! 😎"',
            hint: '🤦 Masti Sir: "Inline events jaise onclick=\"alert()\" beginner ke liye theek hain,\npar professional code mein external .js file aur addEventListener use karte hain!"',
            success: '🥳 Masti Sir: "HTML + JavaScript Connected! 🔥\nWebsite ab zinda ho chuki hai!"',
            mistake: '😅 Masti Sir: "<script> tag bina defer ke <head> mein daala?\nBrowser page render rok deta hai! defer attribute lagao!"'
          },
          englishDef: 'JavaScript is integrated into HTML using the <script> element to make web pages dynamic and interactive. Scripts can be written inline within <script> tags or loaded from external files using src="script.js". The <noscript> element provides fallback content for users who have disabled JavaScript in their browser.',
          hinglishExplain: 'HTML page ko interactive banane ke liye JavaScript use hoti hai — jaise button click par modal kholna, form validate karna, ya dark mode toggle karna. `<script>` tag se JS link hoti hai. Agar user ke browser mein JS disabled ho, toh `<noscript>` tag fallback message dikhata hai.',
          storyExplain: 'Socho tumne ek car banayi:\n- Metal body & Chassis = HTML (Structure)\n- Metallic Red Paint & Leather Seats = CSS (Style)\n- Engine & Steering Controller = JavaScript (Action)!\n\nCar bina engine ke sirf showroom mein khadi rahegi. Jaise hi tum `<script>` lagate ho, engine start ho jata hai! 🚗💨',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML + JS Demo</title>

  <!-- 1. External Script with defer (Executes after DOM is loaded) -->
  <script src="main.js" defer></script>
</head>
<body>

  <h1 id="greeting">Namaste World!</h1>
  <p id="counter-text">Clicks: 0</p>

  <!-- 2. Interactive Button triggering JS -->
  <button type="button" id="btn-click" onclick="handleClick()">
    Click Karo! 🚀
  </button>

  <!-- 3. Inline Script (Usually before </body>) -->
  <script>
    let count = 0;
    function handleClick() {
      count++;
      document.getElementById('counter-text').innerText = "Clicks: " + count;
      document.getElementById('greeting').innerText = "Shukriya CodeMasti! 🎉";
    }
  </script>

  <!-- 4. Fallback for disabled JavaScript -->
  <noscript>
    <div style="background:#fee2e2; color:#991b1b; padding:12px;">
      ⚠️ Please enable JavaScript in your browser for the full interactive experience!
    </div>
  </noscript>

</body>
</html>`,
          codeBreakdown: [
            { part: '<script src="main.js" defer>', label: 'External JS file load karta hai bina page rendering roke', color: '#3b82f6' },
            { part: 'onclick="handleClick()"', label: 'Inline event handler — button click par function chalata hai', color: '#10b981' },
            { part: 'document.getElementById()', label: 'HTML DOM element ko JS mein select karta hai', color: '#8b5cf6' },
            { part: '<noscript>', label: 'Jab user ka browser JS block kare, tab ye warning dikhti hai', color: '#ef4444' }
          ],
          commonMistakes: [
            '❌ <script> tag ko <head> mein bina defer/async daalna — page loading slow ho jaati hai',
            '❌ Case-sensitive ID mismatch — id="Greeting" aur getElementById("greeting") crash karega',
            '❌ <noscript> bhool jana — search engines aur privacy-focused users ke liye problem'
          ],
          proTips: [
            '💡 Always use `<script src="..." defer>` in `<head>` for optimal performance',
            '💡 Production mein inline scripts avoid karo aur clean external `.js` files use karo',
            '💡 HTML DOM events jaise `onclick`, `onchange`, `onsubmit` standard interactivity dete hain'
          ],
          interviewQuestions: [
            '<script defer> aur <script async> mein kya farak hai?',
            '<noscript> tag kis liye use hota hai?',
            'DOM Manipulation HTML aur JS ke beech kaise kaam karti hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Agar user ke browser mein JavaScript disabled ho, toh kaunsa tag fallback message display karta hai?',
            options: ['<fallback>', '<noscript>', '<nojs>', '<error>'],
            answer: '<noscript>',
            explanation: '<noscript> element ka content sirf tab render hota hai jab browser mein JavaScript disabled ya unsupported ho.'
          },
          summary: ['<script> tag HTML mein JavaScript run karta hai', 'defer attribute se script DOM parse hone ke baad run hoti hai', '<noscript> fallback message deta hai jab JS disabled ho'],
          flashcard: { q: '<script defer> kya karta hai?', a: 'Script ko background mein parallel download karta hai aur poora DOM parse hone ke baad execute karta hai.' },
          funFact: '🎉 Fun Fact: JavaScript ko 1995 mein Brendan Eich ne sirf 10 din mein banaya tha taaki Netscape browser mein HTML pages interactive ban sakein!',
          challenge: {
            instruction: 'Ek interactive HTML structure banao: ek <h1> with id, ek <button> with onclick, ek <script> block with a function, aur ek <noscript> fallback tag.',
            initialCode: '<!-- HTML + JS demo yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<script') && n.includes('onclick=') && n.includes('<noscript>')
            },
            successMessage: 'HTML & JS Integration Mastered! Dynamic Web Wizard! +30 XP ⚡'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5 — FORMS & INPUT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Forms & Input',
      lessons: [
        // ─── LESSON 19: FORMS ─────────────────────────────
        {
          id: 'html-forms',
          title: 'HTML Forms',
          emoji: '📝',
          xpReward: 30,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Forms — website ka data collector!\n\nLogin page, signup page, contact form —\nsab forms hain!\n\nAb asli game start hota hai 😎\nTheory khatam... Coding ki baari!"',
            hint: '🤦 Masti Sir: "name attribute bhool gaya?\nServer ko data nahi milega!\nname = data ki ID — zaroori hai!" 😅',
            success: '🥳 Masti Sir: "Form ready for input! 🔥\nAb users data de sakte hain!"',
            mistake: '😅 Masti Sir: "label aur input ka for-id match nahi?\nUsability aur accessibility fail!\nfor="name" → id="name" — match karo!"'
          },
          englishDef: 'HTML forms collect user input. The <form> element wraps all form controls. The action attribute specifies where to send data, method (GET/POST) specifies how. Input elements collect different types of data. Labels improve usability and accessibility.',
          hinglishExplain: 'Form woh cheez hai jahan user kuch type karta hai aur submit karta hai. Login page, signup page, search bar — sab forms hain. <input> mein type attribute se decide hota hai ki kya lena hai — text, email, password, number, checkbox, radio, etc.',
          storyExplain: 'Zomato pe delivery address daalna:\n\n📦 "Apna naam daalo"\n[_________________________] ← input type="text"\n\n📧 "Email daalo"\n[_________________________] ← input type="email"\n\n🔑 "Password"\n[••••••••••••••••] ← input type="password"\n\n📞 "Phone Number"\n[_________________________] ← input type="tel"\n\n[Order Karo! 🛵] ← button type="submit"\n\nHar field ek <input> tag hai!\nForm = Data collection system! 📝',
          funnyExample: {
            scenario: 'GET vs POST:\n\nGET: Data URL mein jaata hai:\n/search?q=HTML+tutorial&lang=en\n(Sab visible hai — password mat daalo! 😱)\n\nPOST: Data URL mein nahi dikhta:\nRequest body mein secure jaata hai\n(Login forms ke liye!)\n\nMasti Sir: "GET = Open postcard\nPOST = Sealed envelope 😂"',
            punchline: 'Form = Website ka data collection form!'
          },
          memoryTrick: 'Form ke 3 important parts:\nACTION = Kahan bhejoge data (URL)\nMETHOD = Kaise bhejoge (GET/POST)\nENCTYPE = Kaise encode karoge (file upload ke liye multipart)\n\nGET = URL mein visible (search queries)\nPOST = Hidden in body (passwords, sensitive data)',
          visualDiagram: {
            title: 'Form data flow',
            nodes: ['User types data', 'Submit click', 'Browser validation', 'Data encode', 'HTTP request send', 'Server process', 'Response back'],
            type: 'flow'
          },
          code: `<form action="/api/register" method="POST" novalidate>

  <!-- Text Input with Label -->
  <div class="form-group">
    <label for="username">Username:</label>
    <input 
      type="text" 
      id="username" 
      name="username"
      placeholder="Apna username daalo"
      required
      minlength="3"
      maxlength="20"
    >
  </div>

  <!-- Email Input -->
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>

  <!-- Password Input -->
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
  </div>

  <!-- Submit Button -->
  <button type="submit">Register Karo!</button>
  <button type="reset">Reset</button>
</form>`,
          codeBreakdown: [
            { part: 'action="/api/register"', label: 'action — form data kahan bhejenge', color: '#3b82f6' },
            { part: 'method="POST"', label: 'POST — body mein data bhejo (secure), GET — URL mein', color: '#ef4444' },
            { part: '<label for="username">', label: 'label — for attribute se input se link, click pe focus milta hai', color: '#8b5cf6' },
            { part: 'name="username"', label: 'name — server pe data is naam se milega — zaroori!', color: '#10b981' },
            { part: 'required', label: 'required — browser validation — empty submit nahi hoga', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ label aur input ka for-id match na karna',
            '❌ name attribute bhool jana — server ko data nahi milega',
            '❌ Password field mein type="text" — PASSWORD VISIBLE!',
            '❌ form ke bahar button rakhna'
          ],
          proTips: [
            '💡 novalidate attribute browser validation disable karta hai (custom validation ke liye)',
            '💡 autocomplete="off" sensitive fields pe (passwords)',
            '💡 fieldset aur legend related inputs group karne ke liye'
          ],
          interviewQuestions: [
            'GET aur POST method mein kya farak hai?',
            'label ke liye for attribute kyun important hai?',
            'name attribute kyun zaroori hai?',
            'HTML form validation kaise kaam karta hai?'
          ],
          miniChallenge: 'Ek simple contact form banao — Name, Email, Message (textarea), aur Send button. Sab required fields.',
          quiz: {
            type: 'mcq',
            question: 'Password field ke liye kaunsa input type use karte hain?',
            options: ['type="text"', 'type="password"', 'type="hidden"', 'type="secret"'],
            answer: 'type="password"',
            explanation: 'type="password" input ke characters ko mask (••••) kar deta hai — secure!'
          },
          miniQuiz: [
            {
              type: 'predict',
              question: 'Is form submit pe kya hoga?',
              code: '<form action="/search" method="GET">\n  <input type="text" name="q" value="HTML">\n  <button type="submit">Search</button>\n</form>',
              options: ['/search?q=HTML URL pe jaayega', 'Data POST body mein jaayega', 'Page refresh hoga only', 'Kuch nahi hoga'],
              answer: '/search?q=HTML URL pe jaayega',
              explanation: 'GET method data URL query string mein bhejta hai.'
            }
          ],
          summary: ['<form> user input collect karta hai', 'action = destination, method = GET/POST', 'label se input link karo for accessibility', 'name attribute server ke liye zaroori hai'],
          flashcard: { q: 'form mein GET aur POST ka farak?', a: 'GET = URL mein visible (search). POST = Body mein hidden (login, sensitive data).' },
          funFact: '🎉 Fun Fact: HTML5 se pehle date picker, color picker, range slider — sab JavaScript se banate the. HTML5 ne input types se sab built-in kar diya!',
          didYouKnow: '🤯 Did You Know? Browser ke autocomplete feature ne lakho lives save ki hain — passwords fill karna easy ho gaya aur phishing attacks kam hue!',
          challenge: {
            instruction: 'Ek complete registration form banao: username (text, required), email (email, required), password (password, required), aur submit button. Sab labels ke saath.',
            initialCode: '<form action="/register" method="POST">\n  <!-- Form fields yahan -->\n</form>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<form') && n.includes('type="text"') && n.includes('type="email"') && n.includes('type="password"') && n.includes('type="submit"')
            },
            successMessage: 'Form ready for users! +30 XP 📝'
          }
        },

        // ─── LESSON 20: INPUT TYPES ───────────────────────
        {
          id: 'html-input-types',
          title: 'HTML Input Types',
          emoji: '⌨️',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML5 ne 20+ input types diye!\n\nHar type ka kaam alag:\ntype=date → Calendar popup\ntype=color → Color picker\ntype=range → Slider\n\nJab sahi type use karo —\nbrowser validation FREE milti hai! 😎"',
            hint: '🤦 Masti Sir: "Number ke liye text type use kiya?\nToh tum manually validate karoge!\ntype=\"number\" use karo — browser automatically check karega! 😅"',
            success: '🥳 Masti Sir: "Input types mastered! 🔥\nForms ab smart hain!"',
            mistake: '😅 Masti Sir: "Mobile pe date picker auto-open hota hai\njab type=\"date\" use karo!\nBetter UX = Better form = Happy users! 😊"'
          },
          englishDef: 'HTML5 introduced many new input types beyond text: email, password, number, tel, url, date, time, datetime-local, month, week, color, range, file, checkbox, radio, search, and hidden. Each type provides appropriate keyboard on mobile and browser validation.',
          hinglishExplain: 'Input type bahut important hai — sahi type use karne se browser automatically validation karta hai aur mobile pe sahi keyboard show karta hai. Email type pe @ wala keyboard aata hai, number type pe numeric keyboard, date type pe calendar!',
          code: `<!-- Text types -->
<input type="text" placeholder="Regular text">
<input type="email" placeholder="Email address (@ required)">
<input type="password" placeholder="Password (masked)">
<input type="tel" placeholder="Phone number">
<input type="url" placeholder="https://website.com">
<input type="search" placeholder="Search...">

<!-- Number types -->
<input type="number" min="0" max="100" step="5">
<input type="range" min="0" max="100" value="50">

<!-- Date & Time -->
<input type="date">
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">

<!-- Selection -->
<input type="checkbox" id="agree"> 
<label for="agree">I agree</label>

<input type="radio" name="gender" value="male" id="male">
<label for="male">Male</label>
<input type="radio" name="gender" value="female" id="female">
<label for="female">Female</label>

<!-- File & Color -->
<input type="file" accept=".jpg,.png,.pdf">
<input type="color" value="#3b82f6">

<!-- Hidden (not visible) -->
<input type="hidden" name="csrf_token" value="abc123">`,
          codeBreakdown: [
            { part: 'type="email"', label: 'Email validation automatic — @ aur . required, mobile mein @ keyboard', color: '#3b82f6' },
            { part: 'type="number" min max step', label: 'Number input — min/max/step constraints, spin buttons', color: '#10b981' },
            { part: 'type="date"', label: 'Date picker — mobile mein calendar popup automatic', color: '#8b5cf6' },
            { part: 'type="radio" name="group"', label: 'Radio — same name wale ek group mein, sirf ek select', color: '#ef4444' },
            { part: 'type="checkbox"', label: 'Checkbox — multiple select possible, ek ek independent', color: '#f59e0b' },
            { part: 'type="file" accept=".jpg"', label: 'File upload — accept se allowed file types limit karo', color: '#f97316' }
          ],
          commonMistakes: [
            '❌ Phone number ke liye type="text" — type="tel" use karo',
            '❌ Radio buttons mein same name attribute na dena — sab independent ban jaate hain',
            '❌ type="number" mein step ignore karna',
            '❌ File upload ke liye form mein enctype="multipart/form-data" bhool jana'
          ],
          proTips: [
            '💡 Mobile ke liye sahi type bahut important hai — UX drastically improve hota hai',
            '💡 type="hidden" CSRF tokens aur user IDs pass karne ke liye use karte hain',
            '💡 type="range" ke saath <output> tag use karo value display karne ke liye'
          ],
          interviewQuestions: [
            'Sahi input type use karne se kya benefits hain?',
            'Radio aur Checkbox mein kya farak hai?',
            'File upload ke liye form mein kaunsa attribute zaroori hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Ek group mein sirf ek radio button select karne ke liye kaunsa attribute same rakhna zaroori hai?',
            options: ['id', 'value', 'name', 'class'],
            answer: 'name',
            explanation: 'Same name wale radio buttons ek group banaate hain — sirf ek select hota hai.'
          },
          summary: ['HTML5 mein 20+ input types hain', 'Sahi type use karo — free validation + mobile keyboard', 'Radio: same name = one group. Checkbox: independent'],
          flashcard: { q: 'Mobile pe numeric keypad automatic kab aata hai?', a: 'type="number" ya type="tel" use karo — mobile automatically numeric keyboard dikhata hai!' },
          funFact: '🎉 Fun Fact: type="color" use karo — ek native color picker milta hai! CSS color picker banana bilkul zaroorat nahi! 🎨',
          challenge: {
            instruction: 'Ek survey form banao: name (text), email (email), age (number, min=13, max=100), birth date (date), gender (radio, 3 options), interests (checkbox, 3 options), aur submit button.',
            initialCode: '<form>\n  <!-- Survey form yahan -->\n</form>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('type="number"') && n.includes('type="date"') && n.includes('type="radio"') && n.includes('type="checkbox"')
            },
            successMessage: 'Input types master! Forms pro-level! +25 XP ⌨️'
          }
        },

        // ─── LESSON 21: SELECT, TEXTAREA, BUTTON ──────────
        {
          id: 'html-form-controls',
          title: 'Select, Textarea & Buttons',
          emoji: '🎛️',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Forms ka advanced level!\n\n<select> = Dropdown menu\n<textarea> = Multi-line text box\n<button> = Clickable button (3 types!)\n\nYeh teeno forms ko complete karte hain!\nChalte hain! 😎"',
            hint: '🤦 Masti Sir: "Button type bhool gaya?\nDefault type=\"submit\" hota hai!\nIsliye form submit ho jaata hai\naccidentally jab button click karo! 😅\ntype=\"button\" explicitly likho!"',
            success: '🥳 Masti Sir: "Form controls mastered! 🔥\nUser interface complete hai!"',
            mistake: '😅 Masti Sir: "<textarea> mein rows aur cols lagao!\nNahi to default size bahut chota hoga\naur user frustrated hoga! 😔"'
          },
          englishDef: 'The <select> element creates dropdown menus with <option> elements. <textarea> provides multi-line text input. The <button> element creates clickable buttons with three types: submit (sends form), reset (clears form), and button (no default action).',
          hinglishExplain: '<select> ek dropdown menu banata hai jisme user ek ya multiple options choose karta hai. <textarea> multi-line text input ke liye — jaise WhatsApp ka message box. <button> ka type important hai — type="submit" form bhejta hai, type="button" koi action nahi karta by default.',
          code: `<!-- Select Dropdown -->
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">-- Select --</option>
  <option value="in" selected>India 🇮🇳</option>
  <option value="us">USA 🇺🇸</option>
  <option value="uk">UK 🇬🇧</option>
</select>

<!-- Grouped Dropdown -->
<select name="course">
  <optgroup label="Frontend">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
  </optgroup>
  <optgroup label="Backend">
    <option value="nodejs">Node.js</option>
  </optgroup>
</select>

<!-- Multiple select -->
<select name="skills" multiple size="4">
  <option>HTML</option>
  <option>CSS</option>
  <option>JavaScript</option>
  <option>React</option>
</select>

<!-- Textarea -->
<label for="message">Message:</label>
<textarea 
  id="message" 
  name="message" 
  rows="5" 
  cols="40"
  placeholder="Apna message yahan type karo..."
  maxlength="500"
></textarea>

<!-- Buttons -->
<button type="submit">Submit Form</button>
<button type="reset">Reset All</button>
<button type="button" onclick="doSomething()">Click Me</button>`,
          codeBreakdown: [
            { part: '<option value="" selected>', label: 'selected attribute — default selected option', color: '#3b82f6' },
            { part: '<optgroup label="Frontend">', label: 'optgroup — related options group karta hai', color: '#8b5cf6' },
            { part: 'multiple', label: 'multiple attribute — Ctrl+Click se multiple select', color: '#10b981' },
            { part: 'rows="5" cols="40"', label: 'textarea size — rows = height, cols = width in characters', color: '#ef4444' },
            { part: 'type="button"', label: 'Button type — submit, reset, ya button (no default action)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ <textarea> ko self-closing banana: <textarea /> — nahi chalega!',
            '❌ <button> type na likhna — default submit ho jaata hai (unexpected behavior)',
            '❌ <select> mein <option> value attribute bhool jana — server ko value nahi milega',
            '❌ Textarea mein default text likhna (placeholder ki jagah)'
          ],
          proTips: [
            '💡 <textarea> resize karne se rokna: resize: none; CSS se',
            '💡 <button> inside form ke baad default type="submit" — always explicitly specify karo',
            '💡 <datalist> use karo autocomplete suggestions ke liye — input + list = magic!'
          ],
          interviewQuestions: [
            '<select> aur multiple select mein kya farak hai?',
            'Button ke teen types kaunse hain aur unka kaam kya hai?',
            '<textarea> aur <input type="text"> mein kya farak hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Form mein kaunsa button type form submit nahi karta?',
            options: ['type="submit"', 'type="reset"', 'type="button"', 'Type attribute na ho'],
            answer: 'type="button"',
            explanation: 'type="button" koi default action nahi karta — JavaScript se manually handle karo. type="submit" form bhejta hai, type="reset" form reset karta hai.'
          },
          summary: ['<select> dropdown menu banata hai', '<textarea> multi-line text input ke liye', '<button> ke 3 types: submit, reset, button'],
          flashcard: { q: 'Button type="" ke 3 values kya hain?', a: 'submit (form send), reset (form clear), button (no default — JS handle karo).' },
          funFact: '🎉 Fun Fact: <datalist> element se input mein suggestions add kar sakte ho bina JavaScript ke! input list="my-list" + datalist id="my-list"',
          challenge: {
            instruction: 'Ek form banao: select dropdown (country options), textarea (message, rows=5), aur ek submit + ek type="button" banao.',
            initialCode: '<form>\n  <!-- Controls yahan -->\n</form>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<select') && n.includes('<option') && n.includes('<textarea') && n.includes('type="button"')
            },
            successMessage: 'Form controls mastered! +20 XP 🎛️'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6 — SEMANTIC HTML & SEO
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Semantic HTML & SEO',
      lessons: [
        // ─── LESSON 22: SEMANTIC HTML ─────────────────────
        {
          id: 'html-semantic',
          title: 'Semantic HTML',
          emoji: '🧠',
          xpReward: 30,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Semantic HTML — code mein meaning!\n\nDon\'t be a div hoarder 😂\n\nHeader ke liye <header>\nNav ke liye <nav>\nMain ke liye <main>\nSide info ke liye <aside>\nBottom ke liye <footer>\n\nSab ki apni jagah hai!" 😎',
            hint: '🤦 Masti Sir: "Arre bhai 😂\nSab kuch <div> mein mat daalo!\nHTML5 semantic tags use karo!\n<div class=\"header\"> → <header>\n<div class=\"nav\"> → <nav>\n\nDev tools mein clear dikhega! 🙏"',
            success: '🥳 Masti Sir: "Semantic structure perfect! 🔥\nSEO bhi khush, screen readers bhi khush!"',
            mistake: '😅 Masti Sir: "<main> ek hi hona chahiye per page!\nDo <main> tags invalid hai!\nBhai ek hi main content hoti hai page ki! 😅"'
          },
          englishDef: 'Semantic HTML uses meaningful elements that describe their content\'s purpose. Elements like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> give structure and meaning, improving SEO, accessibility, and code readability.',
          hinglishExplain: 'Semantic matlab "meaningful" — tag ka naam hi bata deta hai ki andar kya hai. Sab kuch <div> mein mat daalo! Header content <header> mein, navigation <nav> mein, main content <main> mein. Isse screen readers, search engines, aur developers — sab samajhte hain.',
          storyExplain: 'Socho ek newspaper:\n\n📰 [HEADER] — Newspaper ka naam + logo\n🗺️ [NAV] — Sections: Sports, Politics, Business\n📰 [MAIN]\n  📝 [ARTICLE] — Main story (independent content)\n  📌 [ASIDE] — Related news (sidebar)\n  📄 [SECTION] — Another topic section\n📅 [FOOTER] — Date, Contact, Copyright\n\nHar cheez apni jagah pe!\nBhi <div> soup nahi!\n\nSemantic = Newspaper ki tarah organized! 😎',
          funnyExample: {
            scenario: 'Non-semantic (2005 style):\n<div class="header">\n<div class="nav">\n<div class="main">\n<div class="sidebar">\n<div class="footer">\n\nHaha — ye sab developer le skte hain, browser confuse!\n\nSemantic (2024 style):\n<header>\n<nav>\n<main>\n  <article>\n  <section>\n  <aside>\n<footer>\n\nMasti Sir: "Pehla wala code ko padho...\nKuch pata nahi chala na? 😂\nYahi problem tha! Semantic HTML mein\nkod khud bolata hai kya hai!" 😎',
            punchline: 'Semantic HTML = Organized Newspaper!'
          },
          memoryTrick: 'HANS MAF = Semantic tags\nH = Header\nA = Article\nN = Nav\nS = Section\nM = Main\nA = Aside\nF = Footer\n\nYaad karo: "HANS MAF" 😂',
          visualDiagram: {
            title: 'Semantic Page Layout',
            nodes: ['<header> — Logo, Nav', '<nav> — Navigation links', '<main>', '<article> — Main content', '<aside> — Sidebar', '<section> — Content sections', '<footer> — Copyright, links'],
            type: 'tree'
          },
          code: `<body>

  <header>
    <a href="/" class="logo">CodeMastii</a>
    <nav>
      <ul>
        <li><a href="/html">HTML</a></li>
        <li><a href="/css">CSS</a></li>
        <li><a href="/js">JavaScript</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h1>HTML Mastery Course</h1>
        <time datetime="2024-01-15">January 15, 2024</time>
      </header>
      <section>
        <h2>What is HTML?</h2>
        <p>HTML is the foundation of the web...</p>
      </section>
      <section>
        <h2>Why Learn HTML?</h2>
        <p>Every website uses HTML...</p>
      </section>
    </article>

    <aside>
      <h2>Quick Tips</h2>
      <ul>
        <li>Always add alt text</li>
        <li>Use semantic tags</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2024 CodeMastii. All rights reserved.</p>
  </footer>

</body>`,
          codeBreakdown: [
            { part: '<header>', label: 'Page ya section ka top — logo, navigation (multiple headers allowed!)', color: '#3b82f6' },
            { part: '<nav>', label: 'Navigation links — menu bar ke liye', color: '#8b5cf6' },
            { part: '<main>', label: 'Page ka primary content — sirf ek per page!', color: '#ef4444' },
            { part: '<article>', label: 'Self-contained independent content — blog post, news, comment', color: '#10b981' },
            { part: '<section>', label: 'Thematic content group — chapters, tabs, related sections', color: '#f59e0b' },
            { part: '<aside>', label: 'Sidebar — related but secondary content', color: '#f97316' },
            { part: '<footer>', label: 'Page ya section ka bottom — copyright, contact, links', color: '#6b7280' }
          ],
          commonMistakes: [
            '❌ Sab kuch <div> mein daalna',
            '❌ Multiple <main> elements — sirf ek hona chahiye',
            '❌ <nav> mein non-navigation content',
            '❌ <article> use karna jab content independent nahi hai',
            '❌ <section> ke liye heading skip karna'
          ],
          proTips: [
            '💡 <article> ke andar <header> aur <footer> ho sakti hain',
            '💡 <section> mein hamesha ek heading (h2-h6) honi chahiye',
            '💡 <time datetime="2024-01-15"> — machine-readable date format'
          ],
          interviewQuestions: [
            'Semantic HTML kya hai aur kyun use karte hain?',
            '<article> aur <section> mein kya farak hai?',
            '<aside> kab use karte hain?',
            'Screen readers semantic tags se kaise benefit karte hain?'
          ],
          miniChallenge: 'Ek simple blog page ka structure banao — header, nav (3 links), main (1 article with 2 sections), aside (tips), footer.',
          quiz: {
            type: 'mcq',
            question: 'Navigation links ke liye konsa semantic tag use karte hain?',
            options: ['<menu>', '<links>', '<nav>', '<navigation>'],
            answer: '<nav>',
            explanation: '<nav> specifically navigation links ke liye banaya gaya element hai.'
          },
          summary: ['Semantic tags content ka meaning batate hain', 'header, nav, main, article, section, aside, footer', 'SEO aur accessibility ke liye semantic HTML zaroori hai', '<main> sirf ek per page!'],
          flashcard: { q: 'Semantic HTML kyun use karte hain?', a: '3 reasons: SEO (Google samjhe), Accessibility (screen readers), Code Readability (developers samjhe)' },
          funFact: '🎉 Fun Fact: Screen readers heading structure use karke page navigate karte hain — isliye proper h1>h2>h3 hierarchy accessibility ke liye critical hai!',
          didYouKnow: '🤯 Did You Know? Google apne crawl mein semantic HTML pe zyada weight deta hai! Semantic structure = Better search rankings!',
          challenge: {
            instruction: 'Ek complete semantic page banao: header (with nav), main (article with 2 sections + aside), footer. Sab proper semantic tags use karo.',
            initialCode: '<body>\n  <!-- Semantic structure yahan -->\n</body>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<header') && n.includes('<nav') && n.includes('<main') && n.includes('<footer') && n.includes('<article')
            },
            successMessage: 'Semantic structure perfect! SEO ninja! +30 XP 🧠'
          }
        },

        // ─── LESSON 23: SEO BASICS ────────────────────────
        {
          id: 'html-seo',
          title: 'HTML & SEO Basics',
          emoji: '🔍',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "SEO — Google ko samjhana!\n\nAgar sahi HTML likha,\ntoh Google tumhara page pehle dikhayega.\n\nFree marketing hai ye!\nSunn lo dhyan se! 😎"',
            hint: '🤦 Masti Sir: "Meta description 160+ characters?\nArre bhai! Google kat dega!\n150-160 characters — ye limit yaad rakhna!\n\'...\" se khatam hogi Google pe! 😅"',
            success: '🥳 Masti Sir: "SEO optimized page! 🔥\nGoogle bhi khush, user bhi khush!"',
            mistake: '😅 Masti Sir: "Multiple h1 tags SEO ke liye bura hai!\nGoogle confuse ho jaata hai:\n\'Kaunsa topic hai iska?\'\nSirf ek h1 per page! 😅"'
          },
          englishDef: 'SEO (Search Engine Optimization) in HTML involves using proper title tags, meta descriptions, heading hierarchy, alt attributes for images, structured semantic HTML, and canonical URLs to help search engines understand and rank your pages better.',
          hinglishExplain: 'SEO matlab "Google ko samjhana". Agar tumne sahi HTML likha, toh Google tumhara page pehle dikhayega. Meta tags, title, h1 hierarchy, alt text — ye sab Google ko batate hain ki tumhara page kiske baare mein hai.',
          storyExplain: 'Socho Google ek library ka librarian hai.\n\nTum ek book laaye without title, without index.\nLibrarian: "Bhai ye kya hai?" 🤷\n\nDusra banda book laaya:\nTitle: "Best Biryani Recipes"\nCategory: "Cooking"\nIndex: Chicken Biryani, Veg Biryani...\nSummary: "Best biryani recipes for home cooks"\n\nLibrarian: "Cooking section mein rakho — 1st shelf!"\n\nSEO = Apni book ko proper label karna!\nHTML tags = Library labels! 😂',
          funnyExample: {
            scenario: 'Search result dikhta hai:\n\n[HTML Tutorial for Beginners | CodeMastii] ← Title tag\nhttps://codemasti.com/html\nSikhiye HTML beginner-friendly way mein ← Meta description\nMasti Sir ke saath funny aur interactive!\n\nYe sab controlled hota hai HTML se:\n<title>HTML Tutorial for Beginners | CodeMastii</title>\n<meta name="description" content="Sikhiye HTML...">\n\nMasti Sir: "Ye description likhoge sahi\ntoh user click karega! Click = Traffic! 😎"',
            punchline: 'SEO = Google librarian ke liye proper book labeling!'
          },
          memoryTrick: 'SEO checklist yaad karo (THAT):\nT = Title tag (60 chars max)\nH = Heading hierarchy (h1 sirf ek)\nA = Alt text on images\nT = Title/Topic in URL\n\nBonus: Meta description (150-160 chars)',
          visualDiagram: {
            title: 'Google crawl flow',
            nodes: ['Googlebot visits page', 'HTML read karta hai', 'Title, Meta, H1 check', 'Semantic structure analyze', 'Content index', 'Search ranking'],
            type: 'flow'
          },
          code: `<head>
  <!-- 1. Title Tag — SERP mein dikhta hai (60 chars max) -->
  <title>HTML Mastery Course | Learn HTML Free | CodeMastii</title>

  <!-- 2. Meta Description — Search result description (150-160 chars) -->
  <meta name="description" 
    content="CodeMastii pe HTML Mastery seekho. Beginner to Advanced, 
             Hinglish mein, interactive practice ke saath. Free!">

  <!-- 3. Viewport (Mobile SEO) -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 4. Charset -->
  <meta charset="UTF-8">

  <!-- 5. Canonical URL (duplicate content prevent) -->
  <link rel="canonical" href="https://codemasti.com/html">

  <!-- 6. Open Graph (Social sharing) -->
  <meta property="og:title" content="HTML Mastery Course">
  <meta property="og:description" content="Best HTML course for beginners">
  <meta property="og:image" content="https://codemasti.com/og-image.jpg">
  <meta property="og:url" content="https://codemasti.com/html">

  <!-- 7. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
</head>

<body>
  <!-- 8. Single H1 — Main topic -->
  <h1>HTML Mastery Course — Beginners ke liye</h1>
  
  <!-- 9. Alt text on images -->
  <img src="html-logo.png" alt="HTML5 Logo — CodeMasti HTML Course">
  
  <!-- 10. Semantic structure -->
  <main>
    <article>
      <h2>HTML Kya Hai?</h2>
    </article>
  </main>
</body>`,
          codeBreakdown: [
            { part: '<title>', label: 'Tab + Google result title — 50-60 chars, keyword include karo', color: '#ef4444' },
            { part: 'meta name="description"', label: 'Google search snippet description — 150-160 chars compelling text', color: '#3b82f6' },
            { part: '<link rel="canonical"', label: 'Canonical URL — duplicate pages ko merge karta hai SEO ke liye', color: '#8b5cf6' },
            { part: 'og:title, og:image', label: 'Open Graph — WhatsApp, Facebook pe share karne pe card dikhta hai', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Title tag 60+ characters — Google cut kar deta hai',
            '❌ Meta description 160+ characters — ...(truncated) dikhega',
            '❌ Multiple h1 tags — Google confuse',
            '❌ Images mein alt attribute na hona — images SEO contribute nahi karti'
          ],
          proTips: [
            '💡 Title mein primary keyword pehle rakho',
            '💡 Meta description clickbait-y mat rakho — honest raho',
            '💡 Google Search Console pe performance track karo (free tool)',
            '💡 Page speed bhi SEO factor hai — images optimize karo'
          ],
          interviewQuestions: [
            'Meta description SEO mein kya role play karta hai?',
            'Canonical URL kab use karte hain?',
            'Open Graph tags kyun important hain?',
            'Page speed SEO ko kaise affect karta hai?'
          ],
          miniChallenge: 'Apne favourite website ki SEO-optimized head section banao — title, description, viewport, OG tags ke saath.',
          quiz: {
            type: 'mcq',
            question: 'Google search results mein dikhne wali description kahan se aati hai?',
            options: ['<title> tag se', 'meta name="description" se', '<h1> tag se', 'First paragraph se'],
            answer: 'meta name="description" se',
            explanation: 'meta description Google search snippet mein dikhta hai — compelling description click-through rate improve karta hai!'
          },
          summary: ['Title (60 chars), Meta description (160 chars) — basic SEO', 'Sirf ek h1, proper heading hierarchy', 'Alt text images ke liye', 'Canonical URL duplicate content rokta hai'],
          flashcard: { q: 'Meta description kitne characters ka hona chahiye?', a: '150-160 characters — isse zyada Google cut kar deta hai "..."!' },
          funFact: '🎉 Fun Fact: Google ne 2019 mein officially announce kiya ki meta description sirf click-through rate affect karta hai, directly ranking nahi — lekin CTR indirectly ranking affect karta hai!',
          challenge: {
            instruction: 'Ek SEO-optimized <head> banao: title (under 60 chars), meta description (under 160 chars), viewport, canonical link, og:title, og:description.',
            initialCode: '<head>\n  <!-- SEO tags yahan -->\n</head>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<title>') && n.includes('description') && n.includes('viewport') && n.includes('og:')
            },
            successMessage: 'SEO optimized! Google pe rank karoge! +25 XP 🔍'
          }
        },

        // ─── LESSON 24: META TAGS ─────────────────────────
        {
          id: 'html-meta-tags',
          title: 'HTML Meta Tags',
          emoji: '🏷️',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Meta tags — page ki ID card!\n\nBrowser ko batate hain:\n- Charset kya hai\n- Mobile ke liye viewport kya hai\n- Social sharing mein kya dikhega\n\nSab meta tags <head> mein jaate hain!\nUsers nahi dekhte — lekin bahut zaroori hain! 😎"',
            hint: '🤦 Masti Sir: "og:image minimum 1200x630 pixels hona chahiye!\nChhota image social share mein blurry dikhega!\nProper image use karo social cards ke liye! 😅"',
            success: '🥳 Masti Sir: "Meta tags perfect! 🔥\nPage ka ID card complete hai!"',
            mistake: '😅 Masti Sir: "robots meta tag mein noindex?\nHai toh website Google mein index nahi hogi!\nDevelopment pe use karo, production pe hata do! 😱"'
          },
          englishDef: 'Meta tags provide metadata about an HTML document. They are placed inside the <head> element and are not displayed on the page. Meta tags provide information to browsers, search engines, and social media platforms about the page content.',
          hinglishExplain: 'Meta tags HTML document ke baare mein information dete hain — jo users nahi dekhte lekin browser, Google aur social media platforms use karte hain. Ye sab <head> mein likhte hain. Charset, viewport, description, keywords, OG tags, Twitter cards — sab meta tags hain.',
          code: `<head>
  <!-- Essential Meta Tags -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Page description yahan — 150-160 chars">
  <meta name="keywords" content="HTML, web development, coding">
  <meta name="author" content="Masti Sir">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="CodeMasti HTML Course">
  <meta property="og:description" content="Best HTML course">
  <meta property="og:image" content="https://codemasti.com/og-image.jpg">
  <meta property="og:url" content="https://codemasti.com/html">
  <meta property="og:site_name" content="CodeMasti">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@codemasti">
  <meta name="twitter:title" content="HTML Mastery Course">
  <meta name="twitter:description" content="Best HTML course">
  <meta name="twitter:image" content="https://codemasti.com/twitter-img.jpg">
  
  <!-- Theme Color (Browser UI color on mobile) -->
  <meta name="theme-color" content="#3b82f6">
  
  <!-- HTTP Equiv (Old style, mostly avoid) -->
  <meta http-equiv="refresh" content="30">
</head>`,
          codeBreakdown: [
            { part: 'meta charset="UTF-8"', label: 'Character encoding — UTF-8 = sab languages support', color: '#3b82f6' },
            { part: 'meta name="robots"', label: 'robots — index,follow (default) ya noindex,nofollow', color: '#ef4444' },
            { part: 'meta property="og:..."', label: 'Open Graph — Facebook/WhatsApp share card control', color: '#8b5cf6' },
            { part: 'meta name="twitter:..."', label: 'Twitter Cards — Twitter share preview control', color: '#10b981' },
            { part: 'meta name="theme-color"', label: 'Browser toolbar ka color set karo mobile pe (PWA feature)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ og:image URL relative path — absolute URL chahiye!',
            '❌ Meta tags body mein daalna — head mein jaate hain',
            '❌ noindex production mein — site Google se disappear!',
            '❌ og:image 200x200 — minimum 1200x630 chahiye good social cards ke liye'
          ],
          proTips: [
            '💡 Social Media Card testing: Facebook Debug Tool, Twitter Card Validator',
            '💡 og:image 1200x630px — most platforms ke liye perfect',
            '💡 theme-color se mobile browser ka UI color match karo apne brand se'
          ],
          interviewQuestions: [
            'Open Graph tags kya hain?',
            'meta robots="noindex" kab use karte hain?',
            'theme-color meta tag kya karta hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'WhatsApp pe share karne pe preview card kaunse meta tags control karte hain?',
            options: ['twitter: tags', 'og: (Open Graph) tags', 'meta name="keywords"', 'Regular meta description'],
            answer: 'og: (Open Graph) tags',
            explanation: 'WhatsApp, Facebook, LinkedIn — sab Open Graph (og:) tags use karte hain share preview ke liye.'
          },
          summary: ['Meta tags <head> mein hote hain, users nahi dekhte', 'og: tags social sharing control karte hain', 'robots meta tag Google indexing control karta hai', 'theme-color mobile browser UI color set karta hai'],
          flashcard: { q: 'WhatsApp share preview ke liye kaunse meta tags zaroori hain?', a: 'og:title, og:description, og:image, og:url — Open Graph tags!' },
          funFact: '🎉 Fun Fact: Facebook ne 2010 mein Open Graph Protocol banaya — aaj ye standard hai aur WhatsApp se Slack tak sab use karte hain!',
          challenge: {
            instruction: 'Complete meta tags head banao: charset, viewport, description, og:title, og:description, og:image, og:url, twitter:card, theme-color.',
            initialCode: '<head>\n  <!-- Meta tags yahan -->\n</head>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('og:title') && n.includes('og:image') && n.includes('twitter:card') && n.includes('theme-color')
            },
            successMessage: 'Meta tags complete! Social ready! +20 XP 🏷️'
          }
        },

        // ─── LESSON 25: ACCESSIBILITY ─────────────────────
        {
          id: 'html-accessibility',
          title: 'HTML Accessibility (a11y)',
          emoji: '♿',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Accessibility — sab ke liye web!\n\nDuniya mein 1 billion+ log disabilities ke saath jite hain.\nHamara web unke liye bhi kaam karna chahiye!\n\nAria attributes, alt text, semantic HTML —\nye sab accessibility ke tools hain!\n\nBehtar developer bano — inclusive bano! 😎"',
            hint: '🤦 Masti Sir: "Button mein sirf icon hai?\nScreen reader kya bolta hai? — \"button\"\n\narialabel=\"Close menu\" lagao!\nTaaki screen reader bole: \"Close menu button\"! 😅"',
            success: '🥳 Masti Sir: "Accessible code! 🔥\nHar user ke liye website ready! Inclusive developer! 🏆"',
            mistake: '😅 Masti Sir: "tabindex=\"999\" mat lagao randomly!\nTabindex 0 = natural order (best)\nTabindex -1 = JavaScript ke liye focus remove\nPositive values avoid karo! 😅"'
          },
          englishDef: 'Web accessibility (a11y) ensures websites work for everyone, including people with disabilities. Key techniques include: semantic HTML, ARIA attributes (aria-label, aria-describedby, role), keyboard navigation, color contrast, focus management, and meaningful alt text.',
          hinglishExplain: 'Accessibility matlab website sab ke liye kaam kare — blind users, deaf users, physically disabled users. Semantic HTML already bahut help karta hai. ARIA (Accessible Rich Internet Applications) attributes aur bhi help karte hain jahan HTML ke paas proper semantic tags nahi hain.',
          code: `<!-- 1. Semantic HTML (Foundation of a11y) -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- 2. Skip Link (keyboard users ke liye) -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- 3. Images with alt text -->
<img src="logo.png" alt="CodeMasti — Learn to Code">
<img src="decoration.svg" alt="" role="presentation">

<!-- 4. Forms accessibility -->
<form>
  <label for="search">Search courses:</label>
  <input 
    type="search"
    id="search"
    name="search"
    aria-describedby="search-hint"
    required
    aria-required="true"
  >
  <small id="search-hint">HTML, CSS, JavaScript type karo</small>
</form>

<!-- 5. Buttons with clear labels -->
<button aria-label="Open navigation menu">
  ☰  <!-- Icon only button — label zaroori! -->
</button>

<!-- 6. ARIA roles -->
<div role="alert" aria-live="polite">
  Form successfully submit hua!
</div>

<!-- 7. Keyboard focus visible -->
<style>
  :focus { outline: 2px solid #3b82f6; }
  .skip-link { position: absolute; left: -9999px; }
  .skip-link:focus { position: static; }
</style>`,
          codeBreakdown: [
            { part: 'aria-label="Main navigation"', label: 'aria-label — screen reader ko extra context deta hai', color: '#3b82f6' },
            { part: 'aria-describedby="search-hint"', label: 'aria-describedby — input ko description se link karta hai', color: '#8b5cf6' },
            { part: 'aria-required="true"', label: 'aria-required — screen readers ko field required batata hai', color: '#ef4444' },
            { part: 'role="alert"', label: 'role attribute — element ka role define karta hai screen readers ke liye', color: '#10b981' },
            { part: 'aria-live="polite"', label: 'aria-live — dynamic content changes announce karta hai', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Sirf color se information convey karna — colorblind users ke liye problem',
            '❌ Icons buttons mein bina label ke',
            '❌ Keyboard trap — Tab se focus kahi phans jaye',
            '❌ Low contrast text — WCAG 4.5:1 ratio minimum hai'
          ],
          proTips: [
            '💡 WAVE tool se accessibility check karo (free browser extension)',
            '💡 Keyboard sirf se poori website navigate karo — test karo!',
            '💡 Contrast ratio check: WebAIM Contrast Checker',
            '💡 Screen reader test karo: NVDA (free, Windows), VoiceOver (built-in Mac/iOS)'
          ],
          interviewQuestions: [
            'ARIA attributes kya hain aur kab use karte hain?',
            'WCAG kya hai?',
            'Skip links kya hain?',
            'aria-label aur aria-labelledby mein farak?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Icon-only button ke liye screen readers ko kaunsa attribute add karna chahiye?',
            options: ['title="Close"', 'aria-label="Close menu"', 'alt="Close"', 'name="close"'],
            answer: 'aria-label="Close menu"',
            explanation: 'Buttons ke liye aria-label use karo — alt attribute sirf img ke liye hai.'
          },
          summary: ['Semantic HTML accessibility ka foundation hai', 'ARIA labels screen readers ke liye extra context dete hain', 'Keyboard navigation test karo', 'Color contrast WCAG standards follow karo'],
          flashcard: { q: 'a11y kya hai?', a: 'a11y = accessibility (11 letters between a and y). Web sabke liye kaam kare — disabled users ke liye bhi!' },
          funFact: '🎉 Fun Fact: Duniya mein 2.2 billion log vision impairment ke saath jeete hain! Proper alt text unke liye web ko accessible banata hai.',
          challenge: {
            instruction: 'Ek accessible form banao: labels with for, aria-required, aria-describedby, error message div with role="alert". Plus ek button with aria-label.',
            initialCode: '<form>\n  <!-- Accessible form yahan -->\n</form>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('aria-') && n.includes('<label') && n.includes('for=')
            },
            successMessage: 'Accessible code! Inclusive developer! +25 XP ♿'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7 — ADVANCED HTML
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Advanced HTML',
      lessons: [
        // ─── LESSON 26: AUDIO & VIDEO ─────────────────────
        {
          id: 'html-media',
          title: 'HTML Audio & Video',
          emoji: '🎵',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Audio aur Video — multimedia magic!\n\nHTML5 ne native support diya:\n<audio> aur <video> tags!\n\nPehle Flash plugin chahiye hota tha!\nAaj sirf ek tag aur done! 😎\n\nLet\'s make some noise! 🔊"',
            hint: '🤦 Masti Sir: "controls attribute bhool gaya?\nArre bhai! User kaise play/pause karega?\nMind reading se? 😂\ncontrols attribute add karo please!"',
            success: '🥳 Masti Sir: "Media elements perfect! 🔥\nWebsite ab multimedia-ready hai!"',
            mistake: '😅 Masti Sir: "Sirf ek source format mat use karo!\nBajajhe browsers alag formats support karte hain!\nMP4 + WebM = maximum compatibility! 😅"'
          },
          englishDef: 'HTML5 introduced native <audio> and <video> elements for embedding media directly in web pages without plugins. They support multiple source formats for browser compatibility, have built-in controls, and include important attributes like autoplay, loop, muted, and preload.',
          hinglishExplain: 'HTML5 se pehle videos/audio ke liye Flash plugin install karna padta tha. Ab <video> aur <audio> tags se directly embed kar sakte ho. Multiple <source> elements alag formats ke liye add karo — har browser kuch formats support karta hai aur kuch nahi.',
          code: `<!-- Audio Element -->
<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  <source src="music.ogg" type="audio/ogg">
  <p>Aapka browser audio support nahi karta.
     <a href="music.mp3">MP3 download karo</a>
  </p>
</audio>

<!-- Audio with options -->
<audio 
  controls 
  autoplay 
  loop 
  muted
  preload="metadata"
>
  <source src="bg-music.mp3" type="audio/mpeg">
</audio>

<!-- Video Element -->
<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  
  <!-- Subtitles/Captions -->
  <track 
    src="subtitles-en.vtt" 
    kind="subtitles" 
    srclang="en" 
    label="English" 
    default
  >
  <track 
    src="subtitles-hi.vtt" 
    kind="subtitles" 
    srclang="hi" 
    label="Hindi"
  >
  
  <p>Aapka browser video support nahi karta.</p>
</video>`,
          codeBreakdown: [
            { part: 'controls', label: 'Play/pause/volume controls dikhao — almost hamesha chahiye', color: '#3b82f6' },
            { part: '<source src type="...">', label: 'Multiple sources — browser supported format use karta hai', color: '#8b5cf6' },
            { part: 'poster="thumbnail.jpg"', label: 'Video poster — play button ke pehle ye image dikhegi', color: '#ef4444' },
            { part: '<track kind="subtitles">', label: 'Subtitles track — accessibility ke liye zaroori', color: '#10b981' },
            { part: 'muted autoplay', label: 'autoplay sirf muted ke saath kaam karta hai modern browsers mein', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ controls attribute bhool jana — user media control nahi kar sakta',
            '❌ autoplay bina muted — modern browsers block karte hain',
            '❌ Sirf ek source format — cross-browser issues',
            '❌ Captions/subtitles na add karna — accessibility problem for deaf users'
          ],
          proTips: [
            '💡 preload="metadata" = sirf duration/dimensions load, not full video',
            '💡 poster image hamesha add karo — better UX',
            '💡 YouTube embed (iframe) usually better than hosting video yourself'
          ],
          interviewQuestions: [
            'HTML5 audio/video ka fallback content kya hota hai?',
            'autoplay kyun modern browsers mein nahi kaam karta by default?',
            'WebVTT kya hai aur <track> element kab use karte hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Video mein autoplay kaam karne ke liye kaunsa attribute zaroori hai modern browsers mein?',
            options: ['controls', 'loop', 'muted', 'preload'],
            answer: 'muted',
            explanation: 'Modern browsers autoplay sirf allow karte hain agar video muted ho — user experience protect karne ke liye.'
          },
          summary: ['<audio> aur <video> HTML5 elements hain', '<source> multiple formats ke liye', 'controls hamesha add karo', 'subtitles (<track>) accessibility ke liye'],
          flashcard: { q: 'Video autoplay ke liye kaunsa attribute mandatory hai?', a: 'muted — bina muted ke autoplay modern browsers block karte hain.' },
          funFact: '🎉 Fun Fact: YouTube 2009 mein HTML5 video experimental support diya tha. 2015 mein HTML5 default ban gaya, Flash retire ho gaya! 🎉',
          challenge: {
            instruction: 'Ek video element banao: width=640, height=360, controls, poster image, ek MP4 source, ek WebM source, aur ek subtitle track.',
            initialCode: '<!-- Video element yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<video') && n.includes('controls') && n.includes('<source') && n.includes('poster=')
            },
            successMessage: 'Media element perfect! +25 XP 🎵'
          }
        },

        // ─── LESSON: HTML5 CANVAS GRAPHICS ────────────────
        {
          id: 'html-canvas',
          title: 'HTML5 Canvas 2D Graphics',
          emoji: '🎨',
          xpReward: 30,
          badgeName: 'Canvas Painter',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML Canvas — Website ka Drawing Board! 🎨🖌️\n\nGame development, charts, graphs, aur animations —\nsab <canvas> tag aur JavaScript se banta hai!\n\nPehle Flash chahiye hota tha — ab sirf HTML5 Canvas! 😎"',
            hint: '🤦 Masti Sir: "<canvas> tag khud ek khali canvas sheet hai!\nDrawing karne ke liye JavaScript ka getContext(\"2d\") use karna padta hai!"',
            success: '🥳 Masti Sir: "Canvas master! 🔥\nBrowser pe custom graphics aur games draw karne ke liye ready!"',
            mistake: '😅 Masti Sir: "Canvas width/height CSS se stretch mat karo!\nDirect <canvas width=\"400\" height=\"200\"> attributes do, varna blur ho jayega!"'
          },
          englishDef: 'The HTML5 <canvas> element is used to draw graphics on the fly via scripting (usually JavaScript). It acts as a raster pixel grid container where you can draw shapes, lines, text, images, animations, and build 2D web games using the 2D rendering context.',
          hinglishExplain: '`<canvas>` ek blank drawing sheet hai jisme JavaScript ke through real-time shapes (rectangles, circles, lines, text, charts) draw kiye jaate hain. Web games jaise Flappy Bird ya interactive charts (Chart.js) isi canvas element par render hote hain.',
          storyExplain: 'Socho tum drawing class mein ho:\n- `<canvas>` = Khali White Board (drawing sheet)\n- JavaScript Context (`ctx`) = Paint Brush & Colors\n- `ctx.fillRect()` = Brush se rectangle color karna!\n\nBina JS ke canvas khali screen rahega. Jaise hi JS command deti hai — screen par dynamic drawing shuru ho jaati hai! 🖌️✨',
          code: `<!DOCTYPE html>
<html>
<body>

  <h2>HTML5 Canvas Drawing</h2>

  <!-- 1. Canvas Container with fixed dimensions -->
  <canvas id="myCanvas" width="400" height="200" style="border:2px solid #334155; border-radius:8px;">
    Your browser does not support the HTML canvas tag.
  </canvas>

  <script>
    // 2. Get Canvas & 2D Drawing Context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // 3. Draw a Red Rectangle
    ctx.fillStyle = "#ef4444";
    ctx.fillRect(20, 20, 120, 80);

    // 4. Draw a Blue Circle
    ctx.beginPath();
    ctx.arc(220, 60, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#3b82f6";
    ctx.fill();

    // 5. Draw Canvas Text
    ctx.font = "bold 16px Inter, sans-serif";
    ctx.fillStyle = "#10b981";
    ctx.fillText("CodeMasti Canvas 🚀", 20, 150);
  </script>

</body>
</html>`,
          codeBreakdown: [
            { part: '<canvas width="400" height="200">', label: 'Pixel resolution define karta hai (blur-free)', color: '#3b82f6' },
            { part: 'canvas.getContext("2d")', label: '2D drawing methods (brush) ko unlock karta hai', color: '#10b981' },
            { part: 'ctx.fillRect(x, y, w, h)', label: 'Filled rectangle draw karta hai', color: '#ef4444' },
            { part: 'ctx.arc(x, y, r, 0, 2*PI)', label: 'Circle ya curved arc draw karta hai', color: '#8b5cf6' },
            { part: 'ctx.fillText("text", x, y)', label: 'Canvas surface par text draw karta hai', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Canvas dimensions CSS width/height se set karna — drawing stretch/blur ho jaati hai',
            '❌ getContext("2d") call karna bhool jana',
            '❌ ctx.beginPath() call na karna multiple shapes draw karte waqt'
          ],
          proTips: [
            '💡 Chart.js jaise top data visualization libraries internally HTML5 Canvas use karti hain',
            '💡 2D game loops ke liye `requestAnimationFrame()` function use hota hai',
            '💡 Fallback text hamesha `<canvas>Fallback text</canvas>` ke beech likho'
          ],
          interviewQuestions: [
            'HTML Canvas aur SVG mein kya difference hai?',
            'getContext("2d") ka kya purpose hota hai?',
            'Canvas raster-based hai ya vector-based?'
          ],
          quiz: {
            type: 'mcq',
            question: 'HTML Canvas par 2D shapes draw karne ke liye JavaScript mein kaunsa method call karna zaroori hai?',
            options: ['canvas.draw2D()', 'canvas.getContext("2d")', 'canvas.render()', 'canvas.createBrush()'],
            answer: 'canvas.getContext("2d")',
            explanation: '`canvas.getContext("2d")` built-in HTML5 2D rendering engine object return karta hai jisme fillRect, arc, drawImage methods hote hain.'
          },
          summary: ['<canvas> raster pixel-based graphics drawing sheet hai', 'JavaScript 2D context se shapes aur animations draw hoti hain', 'HTML5 games aur chart libraries canvas use karti hain'],
          flashcard: { q: 'Canvas raster hai ya vector?', a: 'Canvas raster (pixel-based) hai — zoom karne par pixels blur hote hain. Jabki SVG vector hai.' },
          funFact: '🎉 Fun Fact: Web browser games jaise Chrome Offline Dinosaur Game poora HTML5 Canvas par chalta hai!',
          challenge: {
            instruction: 'Ek <canvas> element banao with id="gameCanvas", width="400", height="200", aur fallback message.',
            initialCode: '<!-- Canvas element yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<canvas') && n.includes('id=') && n.includes('width=') && n.includes('height=')
            },
            successMessage: 'Canvas Element Mastered! Game Graphics Ready! +30 XP 🎨'
          }
        },

        // ─── LESSON: HTML5 SVG VECTOR GRAPHICS ────────────
        {
          id: 'html-svg',
          title: 'HTML5 SVG Vector Graphics',
          emoji: '📐',
          xpReward: 30,
          badgeName: 'Vector Virtuoso',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "SVG — Scalable Vector Graphics! 📐✨\n\nKitna bhi zoom karo, 4K screen ho ya 8K projector,\nSVG kabhi pixelate ya blur nahi hota!\n\nModern web icons aur logos SVG se bante hain! 😎"',
            hint: '🤦 Masti Sir: "SVG tags HTML elements ki tarah hi hote hain!\n<circle>, <rect>, <polygon>, <path> —\nCSS se inka color fill: #22c55e se badla ja sakta hai!"',
            success: '🥳 Masti Sir: "SVG Master! 🔥\nCrystal-clear vector graphics ninja!"',
            mistake: '😅 Masti Sir: "SVG mein background color ke liye \'background\' nahi,\n\'fill\' attribute use karte hain! fill=\"#3b82f6\"!"'
          },
          englishDef: 'SVG (Scalable Vector Graphics) is an XML-based vector image format for 2D graphics with support for interactivity and animation. Because SVG images are defined by mathematical formulas (shapes, paths, coordinates), they scale infinitely without losing resolution on Retina/4K screens and can be styled directly with CSS.',
          hinglishExplain: 'SVG mathematical formulas par based images hoti hain. Normal PNG/JPEG zoom karne par phat (pixelate) jaate hain, lekin SVG ko chahe 10x zoom karo ya cinema screen par project karo, bilkul sharp rehta hai. Lucide icons, Google logo, aur web illustrations SVG se hi bante hain.',
          storyExplain: 'Socho do tarike ki painting:\n\n1. **PNG/JPG (Raster)**: Chote chote colored dots (pixels). Zoom karo toh dots bade hokar blurry square ban jaate hain.\n2. **SVG (Vector)**: Geometric formula: "Center (50, 50) se 40 radius ka circle banao".\nJab screen badi hoti hai, browser formula recalculate karta hai aur 100% crystal clear rehta hai! 🔍💎',
          code: `<!-- 1. Inline SVG Container -->
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc; border-radius:12px;">
  
  <!-- 2. Rectangle with Rounded Corners -->
  <rect x="10" y="10" width="100" height="60" rx="8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" />
  
  <!-- 3. Circle -->
  <circle cx="180" cy="40" r="30" fill="#22c55e" stroke="#15803d" stroke-width="3" />
  
  <!-- 4. Line -->
  <line x1="10" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5" />
  
  <!-- 5. SVG Text -->
  <text x="30" y="135" font-family="sans-serif" font-size="16" font-weight="bold" fill="#0f172a">
    CodeMasti SVG 🚀
  </text>

</svg>`,
          codeBreakdown: [
            { part: '<svg width height>', label: 'SVG vector canvas container', color: '#3b82f6' },
            { part: '<rect x y width height rx>', label: 'Rectangle with rounded border radius (rx)', color: '#10b981' },
            { part: '<circle cx cy r>', label: 'Circle with center coordinates (cx, cy) and radius (r)', color: '#8b5cf6' },
            { part: 'fill and stroke', label: 'fill = background color, stroke = border outline', color: '#ef4444' },
            { part: '<text>', label: 'Scalable text inside vector canvas', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `background-color` attribute likhna — SVG mein `fill="..."` use hota hai',
            '❌ `border` attribute likhna — SVG mein `stroke="..."` use hota hai',
            '❌ viewBox attribute na use karna responsiveness ke liye'
          ],
          proTips: [
            '💡 SVG elements ko CSS `:hover` se directly animate aur color change kar sakte ho (`fill: #ef4444;`)',
            '💡 Lucide Icons aur FontAwesome icons internally inline SVGs render karte hain',
            '💡 SVG files ka size PNG ke comparison mein 80% chota hota hai'
          ],
          interviewQuestions: [
            'Canvas vs SVG: Kab Canvas use karna chahiye aur kab SVG?',
            'SVG scalable kyun hota hai bina pixelation ke?',
            'Inline SVG aur <img> SVG mein kya difference hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'SVG shape ka background color set karne ke liye kaunsa attribute use hota hai?',
            options: ['color', 'background', 'fill', 'bgcolor'],
            answer: 'fill',
            explanation: 'SVG vector shapes mein background color ke liye `fill` attribute aur border ke liye `stroke` attribute use hota hai.'
          },
          summary: ['SVG XML-based mathematical vector format hai', 'Infinite scaling without losing quality (Retina/4K ready)', 'CSS aur JavaScript se directly style aur manipulate kar sakte ho'],
          flashcard: { q: 'SVG ka full form kya hai?', a: 'Scalable Vector Graphics — resolution-independent 2D vector graphics.' },
          funFact: '🎉 Fun Fact: World Wide Web Consortium (W3C) ne SVG standard 2001 mein banaya tha — aaj duniya ke 95%+ websites ke logos SVG hain!',
          challenge: {
            instruction: 'Ek inline SVG banao jisme width="200", height="100", ek <circle> with fill color, aur ek <text> element ho.',
            initialCode: '<!-- Inline SVG yahan banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<svg') && n.includes('<circle') && n.includes('fill=')
            },
            successMessage: 'SVG Vector Graphics Mastered! Infinite Resolution Ninja! +30 XP 📐'
          }
        },

        // ─── LESSON: HTML5 WEB APIS ───────────────────────
        {
          id: 'html-web-apis',
          title: 'HTML5 Web APIs (Geolocation, Drag & Drop, Storage)',
          emoji: '🌐',
          xpReward: 30,
          badgeName: 'API Pioneer',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML5 Web APIs — Browser ki Superpowers! 🦸‍♂️⚡\n\nUser ki GPS location pata karni ho,\nelements ko drag-and-drop karna ho,\nya data browser mein save karna ho —\nHTML5 APIs se sab possible hai! 😎"',
            hint: '🤦 Masti Sir: "Geolocation hamesha user ki permission mangta hai!\nBina user consent ke browser location nahi deta!\nHTTPS connection zaroori hai!"',
            success: '🥳 Masti Sir: "Web APIs Mastered! 🔥\nModern web application features unlocked!"',
            mistake: '😅 Masti Sir: "Drag and drop ke liye draggable=\"true\" attribute lagana bhool gaye?\nNormal HTML element bina draggable ke drag nahi hota!"'
          },
          englishDef: 'HTML5 introduced powerful native Web APIs that allow web pages to interact with device hardware and browser capabilities: Geolocation API for GPS location coordinates, Drag and Drop API for interactive dragging of elements, and Web Storage API (localStorage & sessionStorage) for persistent client-side data.',
          hinglishExplain: 'HTML5 APIs browser ki special powers hain. **Geolocation API** se user ki latitude/longitude GPS position milti hai (jaise Swiggy ya Uber mein). **Drag and Drop API** se elements ko mouse se utha kar doosre box mein daal sakte hain (jaise Trello ya Kanban board). **localStorage** se data browser band hone ke baad bhi saved rehta hai.',
          storyExplain: 'Socho tum Swiggy ya Uber app kholte ho:\n- "Use Current Location" popup aata hai = **HTML5 Geolocation API**\n- Trello board pe card ek column se doosre column mein drag karte ho = **Drag and Drop API**\n- Dark mode preference ya cart items refresh karne par bhi nahi udte = **Web Storage (localStorage)**!\n\nYe sab modern browser ke built-in HTML5 APIs hain! 📱📍',
          code: `<!DOCTYPE html>
<html>
<body>

  <!-- 1. HTML5 Geolocation API -->
  <button onclick="getLocation()">📍 Meri Location Batao</button>
  <p id="location-output">Coordinates yahan aayenge...</p>

  <script>
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          document.getElementById('location-output').innerText = 
            "Latitude: " + pos.coords.latitude + 
            ", Longitude: " + pos.coords.longitude;
        });
      } else {
        alert("Geolocation not supported by browser.");
      }
    }
  </script>

  <!-- 2. HTML5 Drag and Drop API -->
  <div 
    draggable="true" 
    ondragstart="event.dataTransfer.setData('text', event.target.id)"
    id="drag-item"
    style="padding:12px; background:#3b82f6; color:#fff; border-radius:8px; width:120px; cursor:grab;">
    📦 Drag Me!
  </div>

  <div 
    ondragover="event.preventDefault()" 
    ondrop="event.preventDefault(); event.target.appendChild(document.getElementById(event.dataTransfer.getData('text')))"
    style="width:200px; height:100px; border:2px dashed #94a3b8; border-radius:8px; margin-top:12px; display:flex; align-items:center; justify-content:center;">
    Drop Zone
  </div>

  <!-- 3. Web Storage API -->
  <script>
    // Save to localStorage (persistent)
    localStorage.setItem("username", "CodeMastiUser");
    // Retrieve
    const user = localStorage.getItem("username");
  </script>

</body>
</html>`,
          codeBreakdown: [
            { part: 'navigator.geolocation', label: 'Browser GPS location API access karta hai', color: '#3b82f6' },
            { part: 'draggable="true"', label: 'Element ko draggable banata hai', color: '#10b981' },
            { part: 'ondragstart & ondrop', label: 'Drag start hone aur target box mein drop hone ke events', color: '#8b5cf6' },
            { part: 'localStorage.setItem()', label: 'Data ko browser mein permanently save karta hai', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ HTTP pe Geolocation test karna — modern browsers security ke liye sirf HTTPS par allow karte hain',
            '❌ ondragover mein `event.preventDefault()` bhool jana — bina iske drop event fire nahi hota',
            '❌ Sensitive passwords ko localStorage mein store karna — plain text hota hai'
          ],
          proTips: [
            '💡 Always handle Geolocation error callbacks (jaise user permission deny kar de)',
            '💡 localStorage maximum 5MB data store kar sakta hai, strings ke roop mein (JSON.stringify use karo)',
            '💡 Drag and drop par modern CSS `cursor: grab;` and `cursor: grabbing;` add karo'
          ],
          interviewQuestions: [
            'HTML5 Geolocation API kaise kaam karti hai?',
            'HTML Drag and Drop API ke main events kaunse hain?',
            'localStorage, sessionStorage, aur Cookies mein kya farak hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'HTML element ko user dwara drag karne yogya banane ke liye kaunsa attribute add kiya jaata hai?',
            options: ['draggable="true"', 'drag="allow"', 'movable="true"', 'dragdrop="yes"'],
            answer: 'draggable="true"',
            explanation: '`draggable="true"` HTML5 standard attribute hai jo kisi bhi text, image ya div element ko draggable banata hai.'
          },
          summary: ['Geolocation API user ki GPS position coordinates deti hai', 'Drag & Drop API interactive UI components banata hai', 'Web Storage API client-side 5MB permanent storage provide karta hai'],
          flashcard: { q: 'localStorage aur sessionStorage mein kya farak hai?', a: 'localStorage browser band hone ke baad bhi persist rehta hai; sessionStorage tab band hote hi delete ho jata hai.' },
          funFact: '🎉 Fun Fact: HTML5 Web APIs ke aane se pehle drag-and-drop aur storage ke liye bhari JavaScript libraries aur Flash plugins use karne padte the!',
          challenge: {
            instruction: 'Ek draggable element banao with draggable="true" aur ek drop container div with ondragover="event.preventDefault()".',
            initialCode: '<!-- Drag and Drop code yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('draggable="true"') && n.includes('ondragover=')
            },
            successMessage: 'HTML5 Web APIs Mastered! Advanced Feature Ninja! +30 XP 🌐'
          }
        },

        // ─── LESSON: HTML VS XHTML & DOCTYPE RULES ────────
        {
          id: 'html-xhtml',
          title: 'HTML vs XHTML & DOCTYPE Rules',
          emoji: '📜',
          xpReward: 25,
          badgeName: 'Syntax Specialist',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "HTML vs XHTML — Strict vs Forgiving Syntax! 📜\n\nHTML forgiving hai (choti galtiyan maaf kar deta hai),\nlekin XHTML strict XML rules follow karta tha!\n\nHTML5 ne dono ki best qualities ko merge kiya! Chalo samjhein! 😎"',
            hint: '🤦 Masti Sir: "<!DOCTYPE html> HTML5 ka clean declaration hai!\nOld HTML4 aur XHTML mein 3 line ka lamba DOCTYPE URL hota tha!"',
            success: '🥳 Masti Sir: "HTML Standards Specialist! 🔥\nWeb standards aur history clear ho gayi!"',
            mistake: '😅 Masti Sir: "Self-closing tags jaise <br /> XHTML mein mandatory the,\nHTML5 mein <br> aur <br /> dono valid hain!"'
          },
          englishDef: 'HTML (HyperText Markup Language) and XHTML (Extensible HTML) are two web markup formats. XHTML enforces strict XML syntax rules: all tags must be lowercase, all elements must be properly closed (<br />), all attributes must have quotes and explicit values. HTML5 is a forgiving, living standard that simplifies the <!DOCTYPE html> declaration while supporting clean, semantic coding.',
          hinglishExplain: 'HTML aur XHTML mein main difference strictness ka hai. XHTML mein agar tumne closing tag bhool gaya ya uppercase tag `<P>` likh diya toh poora page crash ho jata tha (XML Parser error). HTML5 forgiving hai — browser choti galtiyan khud handle kar leta hai aur `<!DOCTYPE html>` se simple banata hai.',
          storyExplain: 'Socho do traffic police officers:\n\n1. **XHTML Officer (Super Strict)**: "Chalan katega! Tag lowercase nahi hai? Helmet ka strap dheela hai? Page stop!" 🚨\n2. **HTML5 Officer (Smart & Friendly)**: "Main samajh gaya aap kya keh rahe ho, safety standard follow karo aur website smooth chalao!" 👮‍♂️👍',
          code: `<!-- 1. HTML5 Standard (Simple, Clean, Living Standard) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Clean Standard</title>
</head>
<body>
  <h1>HTML5 is Easy & Powerful</h1>
  <p>Self closing: <br> and <hr></p>
  <input type="text" disabled>
</body>
</html>

<!-- 2. Old Strict XHTML 1.0 (Strict XML Rules) -->
<!--
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Strict XHTML</title>
</head>
<body>
  <p>Self closing must have space and slash: <br /> and <hr /></p>
  <input type="text" disabled="disabled" />
</body>
</html>
-->`,
          codeBreakdown: [
            { part: '<!DOCTYPE html>', label: 'HTML5 universal clean doctype declaration', color: '#10b981' },
            { part: 'disabled vs disabled="disabled"', label: 'HTML5 allows boolean attributes directly; XHTML required full value', color: '#3b82f6' },
            { part: '<br> vs <br />', label: 'HTML5 supports both clean <br> and self-closed <br />', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ DOCTYPE declaration bhool jana — browser Quirks Mode mein chala jata hai',
            '❌ Uppercase tag names `<DIV>` likhna — HTML5 mein valid hai par best practice lowercase hai'
          ],
          proTips: [
            '💡 Hamesha `<!DOCTYPE html>` page ke first line par likho (no blank lines before)',
            '💡 React/JSX syntax XHTML ki tarah strict closing tags (`<img />`, `<input />`) require karta hai'
          ],
          interviewQuestions: [
            'HTML aur XHTML mein kya difference hai?',
            'DOCTYPE declaration browser ko kya batati hai?',
            'Quirks Mode aur Standards Mode kya hota hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'HTML5 mein standard DOCTYPE declaration kya hoti hai?',
            options: ['<!DOCTYPE html>', '<!DOCTYPE HTML5>', '<doctype html5.0>', '<html doctype="5">'],
            answer: '<!DOCTYPE html>',
            explanation: '<!DOCTYPE html> HTML5 ka standard, case-insensitive aur universal declaration hai.'
          },
          summary: ['<!DOCTYPE html> browser ko modern standards mode mein render karne ko bolta hai', 'XHTML strict XML rules follow karta tha; HTML5 modern forgiving standard hai', 'React aur JSX mein strict self-closing tags use hote hain'],
          flashcard: { q: 'DOCTYPE nahi likhenge toh kya hoga?', a: 'Browser "Quirks Mode" mein chala jayega aur old 1999 buggy behavior simulate karega.' },
          funFact: '🎉 Fun Fact: HTML5 DOCTYPE itna chota isliye hai kyunki HTML5 SGML-based nahi hai — isliye lambe DTD URLs ki zaroorat khatam ho gayi!',
          challenge: {
            instruction: 'Ek valid HTML5 document structure banao jisme: <!DOCTYPE html>, <html lang="en">, <meta charset="UTF-8">, aur ek self-closing <hr> tag ho.',
            initialCode: '<!-- Valid HTML5 structure yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<!doctype html>') && n.includes('lang=') && n.includes('<meta charset')
            },
            successMessage: 'HTML vs XHTML & Standards Mastered! Standards Specialist! +25 XP 📜'
          }
        },

        // ─── LESSON 27: BEST PRACTICES ────────────────────
        {
          id: 'html-best-practices',
          title: 'HTML Best Practices',
          emoji: '⭐',
          xpReward: 25,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Best Practices — Pro Developer ka manual!\n\nAaj tak sab individual topics seekhe.\nAb sab ko combine karo pro style mein!\n\nYe sab follow karo toh:\n✅ Interviews clear honge\n✅ Code maintainable rahega\n✅ Team se accha impression padega\n\nChalte hain! 😎"',
            hint: '🤦 Masti Sir: "Validate karo apna HTML!\nW3C Validator free tool hai!\nErrors aur warnings dikhata hai!\nPro developers hamesha validate karte hain! 😅"',
            success: '🥳 Masti Sir: "Pro developer level HTML! 🔥\nBest practices follow kar ke code likhna — level up ho gaya! 🏆"',
            mistake: '😅 Masti Sir: "Inline styles everywhere?\nBhai CSS file use karo!\nInline styles = maintenance nightmare!\nEveryone hates inline styles! 😱"'
          },
          englishDef: 'HTML best practices include: writing valid HTML (W3C validator), using semantic elements, proper nesting and indentation, always including alt text, using lowercase for tags and attributes, proper document structure, optimizing for performance and accessibility, and separating concerns (HTML + CSS + JS).',
          hinglishExplain: 'Best practices woh rules hain jo professional developers follow karte hain. Valid HTML, proper indentation, semantic tags, lowercase tags, external CSS/JS — ye sab code readable, maintainable aur professional banate hain.',
          code: `<!-- ✅ Best Practice: Proper DOCTYPE and charset -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Site Name</title>
  <link rel="stylesheet" href="style.css">  <!-- External CSS, not inline! -->
</head>
<body>

  <!-- ✅ Semantic structure -->
  <header>
    <nav aria-label="Main">
      <a href="/">Home</a>
    </nav>
  </header>

  <main id="main-content">
    <article>
      <!-- ✅ Single H1 -->
      <h1>Main Page Topic</h1>
      
      <!-- ✅ Proper image with alt -->
      <img src="image.webp" alt="Descriptive alt text" width="800" height="400" loading="lazy">
      
      <!-- ✅ Meaningful link text (not "click here") -->
      <a href="/html-course">HTML Course dekho →</a>
      
      <!-- ✅ Properly nested lists -->
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </article>
  </main>

  <footer>
    <p>&copy; 2024 Site Name</p>
  </footer>

  <!-- ✅ JS at end of body -->
  <script src="app.js"></script>
</body>
</html>`,
          codeBreakdown: [
            { part: 'lang="en"', label: 'Always specify language — SEO + accessibility', color: '#10b981' },
            { part: '<link rel="stylesheet">', label: 'External CSS — separation of concerns', color: '#3b82f6' },
            { part: '<script src=""> at end of body', label: 'JS at body end — page render nahi rokta', color: '#8b5cf6' },
            { part: 'loading="lazy"', label: 'Lazy load images — performance boost', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Inline styles everywhere — CSS file mein rakho',
            '❌ Uppercase tags <P>, <DIV> — lowercase use karo',
            '❌ Improper nesting <p><div>...</div></p> — div p ke andar nahi jaata!',
            '❌ Click here link text — meaningless, bad UX + SEO',
            '❌ <script> head mein bina defer/async — page block hota hai'
          ],
          proTips: [
            '💡 W3C Validator: validator.w3.org — free HTML validation',
            '💡 Prettier extension VS Code mein — auto format karta hai',
            '💡 <script defer> ya <script async> — head mein rakh sakte ho bhi',
            '💡 HTML linter setup karo project mein — automatic error detection'
          ],
          interviewQuestions: [
            'HTML best practices konsi hain?',
            'Inline styles kyun avoid karte hain?',
            'JS ko body ke end mein kyun rakhte hain?',
            'W3C validator kya hai?'
          ],
          quiz: {
            type: 'mcq',
            question: 'HTML mein external CSS link karne ke liye best practice kya hai?',
            options: ['Inline style= attribute', '<style> tag in body', '<link rel="stylesheet"> in head', 'CSS file ko body end mein link karo'],
            answer: '<link rel="stylesheet"> in head',
            explanation: '<link> tag head mein — CSS pehle load hoti hai, page bina FOUC ke render hota hai.'
          },
          summary: ['Valid HTML, semantic structure, proper nesting', 'Lowercase tags, external CSS/JS', 'Meaningful alt text, link text', 'JS at body end (or defer/async in head)'],
          flashcard: { q: 'HTML best practice: JS kahan rakhna chahiye?', a: 'Body ke end mein (<script> before </body>), ya head mein <script defer> ke saath.' },
          funFact: '🎉 Fun Fact: W3C HTML Validator 1994 se exist karta hai — 30 saal se web developers ka best friend! validator.w3.org',
          challenge: {
            instruction: 'Ek complete best-practice HTML page banao: proper DOCTYPE, lang, charset, external CSS link, semantic structure (header, main, footer), lazy-loaded image, meaningful links, JS at end.',
            initialCode: '<!-- Best practice HTML page yahan -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('lang=') && n.includes('<link rel="stylesheet"') && n.includes('<main') && n.includes('loading="lazy"')
            },
            successMessage: 'Pro-level HTML! Best practices followed! +25 XP ⭐'
          }
        },

        // ─── LESSON 28: HTML INTERVIEW Q&A ───────────────
        {
          id: 'html-interview',
          title: 'HTML Interview Questions',
          emoji: '🎯',
          xpReward: 30,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Interview Questions — real test!\n\nYe sab questions Google, Flipkart, Zomato\ncompanies ke actual interviews mein puchhe jaate hain!\n\nPadho, practice karo, confident raho!\nTumhara hard work pay off hoga! 🏆"',
            hint: '🤦 Masti Sir: "Interview mein nervous mat hona!\nSab concepts seekhe hain tumne!\nBas explain karo simply — story tell karo!\nMasti Sir yaad aayenge 😂 — confidently bol do!"',
            success: '🥳 Masti Sir: "Interview ready ho gaye! 🔥\nAb job offer ka wait karo! 🎉"',
            mistake: '😅 Masti Sir: "HTML only seekh ke job nahi milegi!\nHTML + CSS + JavaScript = Frontend Developer\nEk cheez ek time — HTML done, ab CSS ki baari! 😅"'
          },
          englishDef: 'This lesson covers the most commonly asked HTML interview questions at all levels — fresher to experienced. Practice these to confidently answer technical interviews for frontend developer positions.',
          hinglishExplain: 'Interview mein HTML ke fundamentals se advanced topics tak questions puchhe jaate hain. Ye sab questions actual companies ke interviews se collect kiye gaye hain. Har answer simple aur clear rakho — interviewer ko impress karo story-telling se!',
          interviewQuestions: [
            'HTML ka full form kya hai?',
            'Semantic aur non-semantic HTML mein kya farak hai?',
            'Block aur inline elements mein kya farak hai? Examples do.',
            'Void (self-closing) elements kaunse hain? 5 examples do.',
            '<div> aur <span> mein kya farak hai?',
            'HTML5 mein kaunse new elements introduce hue?',
            'DOCTYPE declaration kya hai aur kyun zaroori hai?',
            'meta tags kya hain? Kaunse important meta tags hain?',
            'Accessibility (a11y) kya hai? ARIA attributes kya hain?',
            'alt text kyun important hai?',
            '<script> tag kahan rakhna chahiye? defer aur async ka farak?',
            'Local storage aur session storage kya hain?',
            'GET aur POST method mein kya farak hai?',
            'SEO ke liye kaunse HTML elements important hain?',
            'Responsive design ke liye HTML mein kya karte hain?',
            'Canvas aur SVG mein kya farak hai?',
            'HTML5 ka data attribute kya hai? Kab use karte hain?',
            'iframe kya hai? Cross-origin issues kya hain?',
            'Web storage (localStorage, sessionStorage) kya hain?',
            'Progressive Enhancement aur Graceful Degradation kya hain?'
          ],
          code: `<!-- Common Interview Answers as Code Examples -->

<!-- Q: Semantic vs Non-Semantic -->
<!-- Non-semantic: -->
<div class="header">  <div class="nav">  <div class="footer">

<!-- Semantic: -->
<header>  <nav>  <footer>  <main>  <article>  <section>

<!-- Q: Void elements examples -->
<br> <hr> <img> <input> <meta> <link>

<!-- Q: data attributes -->
<div data-user-id="42" data-role="admin">User Card</div>
<button data-action="delete" data-confirm="true">Delete</button>
<!-- JS mein: element.dataset.userId, element.dataset.role -->

<!-- Q: Script placement -->
<head>
  <script src="app.js" defer></script>  <!-- defer = DOM ready pe run -->
  <script src="analytics.js" async></script>  <!-- async = parallel load -->
</head>

<!-- Q: Responsive HTML -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Responsive image">
</picture>`,
          codeBreakdown: [
            { part: 'defer vs async', label: 'defer = DOM ready pe run, async = parallel load aur run', color: '#3b82f6' },
            { part: 'data-* attributes', label: 'Custom data attributes — JavaScript ke liye extra info store karo', color: '#10b981' },
            { part: '<picture>', label: 'Responsive images — different images for different screens', color: '#8b5cf6' }
          ],
          commonMistakes: [
            '❌ Interview mein basics bhool jana — HTML5 new elements yaad rakho',
            '❌ Semantic tags ke baare mein aadhi-adhuri answer',
            '❌ Accessibility mention na karna — nowadays har company poochti hai'
          ],
          proTips: [
            '💡 Har answer mein example do — code ya real-world',
            '💡 "Main nahi jaanta" — honest rehno par follow-up karo: "Par mujhe lagta hai..."',
            '💡 Portfolio banao practical skills dikhane ke liye — certificates se zyada impressive'
          ],
          miniChallenge: 'Apne interview preparation ke liye khud se in sawaalon ke answers likhne ki koshish karo bina dekhe.',
          quiz: {
            type: 'mcq',
            question: '<script defer> aur <script async> mein kya farak hai?',
            options: [
              'Koi farak nahi — dono same hain',
              'defer = DOM ready pe run, async = jab download ho tab run',
              'async = DOM ready pe run, defer = parallel run',
              'defer sirf external scripts ke liye'
            ],
            answer: 'defer = DOM ready pe run, async = jab download ho tab run',
            explanation: 'defer: script download parallel hota hai, execute DOM ready pe. async: download parallel, execute jaise hi load ho — DOM ready wait nahi karta.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Interview blank fill karo:',
              sentence: 'HTML5 mein navigation links ke liye ___ semantic element use karte hain.',
              answer: '<nav>',
              explanation: '<nav> semantic element navigation links ke liye design kiya gaya hai.'
            }
          ],
          summary: ['Semantic HTML, accessibility, best practices — common interview topics', 'defer vs async script loading', 'data attributes, responsive images, SEO meta tags'],
          flashcard: { q: 'Frontend interview mein HTML ke top 3 topics kaunse hain?', a: '1. Semantic HTML 2. Accessibility (ARIA, alt text) 3. Forms & validation' },
          funFact: '🎉 Fun Fact: Google ke HTML/CSS interview mein commonly poochha jaata hai: "Ek email template kaise banate ho?" — Tables use karte hain! (Email clients CSS Grid support nahi karte 😂)',
          challenge: {
            instruction: 'Interview demo page banao: semantic structure, data attributes on elements, defer script tag, responsive image with picture element.',
            initialCode: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <!-- Interview-ready head -->\n</head>\n<body>\n  <!-- Interview-ready body -->\n</body>\n</html>',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('defer') && n.includes('data-') && n.includes('<nav') && n.includes('<main')
            },
            successMessage: 'Interview ready! Job offer incoming! +30 XP 🎯'
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8 — PROJECTS & REFERENCE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Projects & Reference',
      lessons: [
        // ─── LESSON 29: PROJECT 1 — PORTFOLIO ────────────
        {
          id: 'html-project-portfolio',
          title: 'Mini Project 1: Portfolio Page',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'HTML Builder',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Ab asli game start hota hai! 😎\n\nTheory khatam — coding ki baari!\n\nTumhari pehli real project:\nPersonal Portfolio Page!\n\nYe page tumhara career mein kaam aayega!\nBanao — dikhao — impress karo! 🚀"',
            hint: '🤦 Masti Sir: "Page boring lag raha hai?\nCSS sikhne ke baad sab theek ho jaayega!\nAbhitoh HTML structure pe focus karo!\nFoundation solid rakho! 😅"',
            success: '🥳 Masti Sir: "Portfolio page ready! 🔥🔥🔥\nAb tum officially ek developer ho!\nLevel Up! 🏆\n\nYe screenshot save karo —\ntumhari pehli project! 🎉"',
            mistake: '😅 Masti Sir: "Sections sahi se structure karo!\nHar section ki apni heading honi chahiye!\nVisitor ko samajh aana chahiye bina CSS ke bhi! 😔"'
          },
          englishDef: 'Build a personal portfolio HTML page from scratch. This project combines all learned concepts: semantic structure, headings, paragraphs, links, images, lists, and a contact form. No CSS yet — just clean, structured HTML.',
          hinglishExplain: 'Ab sab kuch jo seekha hai use karke ek real portfolio page banao. Isme tumhara naam, about, skills, projects, aur contact section hoga. Sirf HTML — CSS baad mein aayega. Pehle foundation solid karo!',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="[Your Name] — Frontend Developer Portfolio">
  <title>John Doe | Frontend Developer</title>
</head>
<body>

  <!-- Header + Nav -->
  <header>
    <h1>John Doe</h1>
    <p>Frontend Developer | HTML & CSS Enthusiast</p>
    <nav aria-label="Portfolio navigation">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <!-- About Section -->
    <section id="about">
      <h2>About Me</h2>
      <img src="profile.jpg" alt="John Doe — Frontend Developer" width="200">
      <p>
        Namaste! Main <strong>John Doe</strong> hoon, ek passionate frontend developer.
        Mujhe web development bahut achha lagta hai — specially HTML aur CSS.
      </p>
      <p>
        Abhi main <em>CodeMastii</em> pe HTML seekh raha hoon aur 
        ek full-stack developer banna chahta hoon!
      </p>
    </section>

    <!-- Skills Section -->
    <section id="skills">
      <h2>My Skills</h2>
      <h3>Frontend</h3>
      <ul>
        <li>HTML5 ⭐⭐⭐⭐⭐</li>
        <li>CSS3 ⭐⭐⭐</li>
        <li>JavaScript ⭐⭐</li>
      </ul>
      <h3>Tools</h3>
      <ul>
        <li>VS Code</li>
        <li>Git & GitHub</li>
        <li>Figma (learning)</li>
      </ul>
    </section>

    <!-- Projects Section -->
    <section id="projects">
      <h2>My Projects</h2>
      
      <article>
        <h3>Project 1: Personal Website</h3>
        <p>Meri pehli HTML/CSS website — simple portfolio.</p>
        <p>Technologies: <strong>HTML5, CSS3</strong></p>
        <a href="https://github.com/johndoe/portfolio" target="_blank" rel="noopener">
          GitHub pe dekho →
        </a>
      </article>

      <article>
        <h3>Project 2: Restaurant Menu</h3>
        <p>HTML tables use karke ek restaurant menu page banaya.</p>
        <p>Technologies: <strong>HTML5, CSS3</strong></p>
        <a href="#" target="_blank">Demo Link</a>
      </article>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <h2>Contact Me</h2>
      <address>
        <p>
          📧 Email: <a href="mailto:john@example.com">john@example.com</a>
        </p>
        <p>
          💼 LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener">
            linkedin.com/in/johndoe
          </a>
        </p>
        <p>
          🐙 GitHub: <a href="https://github.com/johndoe" target="_blank" rel="noopener">
            github.com/johndoe
          </a>
        </p>
      </address>

      <!-- Contact Form -->
      <form action="/contact" method="POST">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Apna naam">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Email address">
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required 
            placeholder="Message yahan..."></textarea>
        </div>
        <button type="submit">Message Bhejo! 🚀</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 John Doe. Banaya CodeMasti ke saath! ❤️</p>
  </footer>

</body>
</html>`,
          miniChallenge: 'Apna khud ka portfolio page banao — real information ke saath: tumhara naam, about, skills, 1-2 projects, contact form.',
          challenge: {
            initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio | Frontend Developer</title>
</head>
<body>

  <!-- 1. Header & Navigation -->
  <header>
    <h1>Aapka Naam</h1>
    <p>Frontend Developer in Training</p>
    <nav>
      <a href="#about">About</a> |
      <a href="#skills">Skills</a> |
      <a href="#projects">Projects</a> |
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <!-- 2. About Section -->
    <section id="about">
      <h2>About Me</h2>
      <p>Namaste! Main ek web developer hoon aur HTML/CSS seekh raha hoon.</p>
    </section>

    <!-- 3. Skills Section -->
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        <li>HTML5 — Advanced Structure</li>
        <li>CSS3 — Modern Styling</li>
        <li>JavaScript — Logic & DOM</li>
      </ul>
    </section>

    <!-- 4. Projects Section -->
    <section id="projects">
      <h2>My Projects</h2>
      <article>
        <h3>Project 1: Restaurant Menu Page</h3>
        <p>HTML tables and semantic formatting se banaya gaya menu.</p>
      </article>
      <article>
        <h3>Project 2: Survey Form</h3>
        <p>Advanced HTML5 form inputs aur validation.</p>
      </article>
    </section>

    <!-- 5. Contact Form Section -->
    <section id="contact">
      <h2>Contact Me</h2>
      <form action="/contact" method="POST">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required placeholder="Apna naam">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder="Apna email">
        </div>
        <button type="submit">Message Bhejo 🚀</button>
      </form>
    </section>
  </main>

  <!-- 6. Footer -->
  <footer>
    <p>&copy; 2026 CodeMasti. All Rights Reserved.</p>
  </footer>

</body>
</html>`,
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<header') && n.includes('<main') && n.includes('<section') && n.includes('<article') && n.includes('<form') && n.includes('<footer')
            },
            successMessage: '🎉 PORTFOLIO COMPLETE! +50 XP! HTML Builder Badge Earned! 🏆\n\nYe tumhari pehli real project hai — isko GitHub pe upload karo!'
          },
          quiz: {
            type: 'mcq',
            question: 'Portfolio page mein project cards ke liye konsa semantic element best hai?',
            options: ['<div>', '<section>', '<article>', '<aside>'],
            answer: '<article>',
            explanation: '<article> self-contained, independent content ke liye — portfolio project ek independent unit hai.'
          },
          summary: ['Portfolio page = sab HTML concepts ka combination', 'Semantic structure, forms, images, links, lists sab use hue', 'GitHub pe upload karo — real portfolio!'],
          flashcard: { q: 'Portfolio page mein kaunse HTML elements use hote hain?', a: 'header, nav, main, section, article, aside, footer, form, img, a, ul, ol — sab!' },
          funFact: '🎉 Fun Fact: Duniya ka pehla website still live hai: info.cern.ch — sirf HTML, koi CSS nahi! 😂 1991 mein banaya Tim Berners-Lee ne!',
          didYouKnow: '🤯 Did You Know? GitHub Pages se tumhara portfolio page FREE mein host kar sakte ho! GitHub.com pe jaao, repository banao, Pages enable karo — done!',
          practiceQuestions: [
            'Portfolio page mein contact form ke fields kya hone chahiye?',
            'Skills section ke liye table better hai ya list? Kyun?',
            'Portfolio ke navigation mein kaunse links hone chahiye?'
          ],
          realWorldUseCases: ['Job applications ke liye portfolio link share karo', 'GitHub profile pe pin karo', 'LinkedIn bio mein website URL add karo']
        },

        // ─── LESSON 30: CHEAT SHEET ───────────────────────
        {
          id: 'html-cheatsheet',
          title: 'HTML Cheat Sheet',
          emoji: '📋',
          xpReward: 20,
          mastirQuote: {
            start: '👨🏫 Masti Sir: "Cheat Sheet — developer ka best friend! 😎\n\nYe lesson bookmark karo!\nJab bhi koi tag bhool jao —\nyahan aa jao!\n\nMaza aayega dekh ke\nkitna seekh liya tumne! 🎉"',
            hint: '🤦 Masti Sir: "Cheat sheet sirf reference ke liye hai!\nPractice karo — toh sab yaad ho jaayega!\nSirf yaadaasht ke liye — tab dekhna! 😅"',
            success: '🥳 Masti Sir: "Course almost complete! 🔥\nCheat sheet bookmark kiya? Done!\nTum ready ho next level ke liye!"',
            mistake: '😅 Masti Sir: "Cheat sheet mein sab nahi hota!\nMDN Documentation — developer ka real bible!\nmdn.io/html — bookmark karo! 🙏"'
          },
          englishDef: 'A complete HTML reference cheat sheet covering all major tags, attributes, and their uses. Bookmark this for quick reference during development.',
          hinglishExplain: 'Ye cheat sheet tumhara quick reference guide hai. Jab koi tag ya attribute bhool jao — yahan dekh lo. Development mein sabse zyada use hone wale tags aur attributes yahan compile kiye hain.',
          code: `<!-- ═══════════════════════════════════════
     HTML CHEAT SHEET — CodeMasti Edition
     ═══════════════════════════════════════ -->

<!-- DOCUMENT STRUCTURE -->
<!DOCTYPE html>          <!-- HTML5 declaration -->
<html lang="en">         <!-- Root element -->
<head>...</head>         <!-- Metadata section -->
<body>...</body>         <!-- Visible content -->

<!-- HEAD ELEMENTS -->
<title>Page Title</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="...">
<link rel="stylesheet" href="style.css">
<script src="app.js" defer></script>

<!-- SEMANTIC STRUCTURE -->
<header>     <!-- Page/section header -->
<nav>        <!-- Navigation -->
<main>       <!-- Main content (1 per page) -->
<article>    <!-- Independent content -->
<section>    <!-- Thematic section -->
<aside>      <!-- Sidebar -->
<footer>     <!-- Page/section footer -->

<!-- HEADINGS -->
<h1>Biggest</h1> to <h6>Smallest</h6>  <!-- 1 h1 per page! -->

<!-- TEXT -->
<p>Paragraph</p>
<strong>Bold + Important</strong>
<em>Italic + Emphasis</em>
<mark>Highlighted</mark>
<del>Strikethrough</del>
<ins>Inserted</ins>
<sup>Superscript</sup>
<sub>Subscript</sub>
<code>inline code</code>
<pre>Preformatted text</pre>
<blockquote>Long quote</blockquote>
<q>Short inline quote</q>
<abbr title="Full form">Abbr</abbr>
<br>  <!-- Line break (self-closing) -->
<hr>  <!-- Horizontal rule (self-closing) -->

<!-- LINKS -->
<a href="URL">Text</a>
<a href="URL" target="_blank" rel="noopener">New Tab</a>
<a href="#id">Same page section</a>
<a href="mailto:email@mail.com">Email</a>
<a href="tel:+91XXXXXXXXXX">Phone</a>

<!-- IMAGES -->
<img src="image.jpg" alt="Description" width="300" height="200" loading="lazy">
<figure>
  <img src="..." alt="...">
  <figcaption>Caption</figcaption>
</figure>
<picture>
  <source media="(min-width:800px)" srcset="large.jpg">
  <img src="small.jpg" alt="Responsive">
</picture>

<!-- LISTS -->
<ul><li>Bullet</li></ul>    <!-- Unordered -->
<ol><li>Numbered</li></ol>  <!-- Ordered -->
<dl><dt>Term</dt><dd>Def</dd></dl>  <!-- Description -->

<!-- TABLES -->
<table>
  <caption>Title</caption>
  <thead><tr><th>Header</th></tr></thead>
  <tbody><tr><td>Data</td></tr></tbody>
  <tfoot><tr><td colspan="2">Footer</td></tr></tfoot>
</table>

<!-- FORMS -->
<form action="/url" method="POST">
  <label for="id">Label:</label>
  <input type="text|email|password|number|date|checkbox|radio|file" id="id" name="name">
  <textarea rows="5" name="msg"></textarea>
  <select name="opt"><option value="v">Option</option></select>
  <button type="submit|reset|button">Button</button>
</form>

<!-- MEDIA -->
<audio controls><source src="audio.mp3" type="audio/mpeg"></audio>
<video controls poster="thumb.jpg" width="640" height="360">
  <source src="video.mp4" type="video/mp4">
  <track src="subs.vtt" kind="subtitles" srclang="en">
</video>

<!-- IFRAME -->
<iframe src="URL" width="560" height="315" title="Description"></iframe>

<!-- CONTAINERS -->
<div class="block-container">Block container</div>
<span class="inline-container">Inline container</span>

<!-- SELF-CLOSING ELEMENTS (Void Elements) -->
<br> <hr> <img> <input> <meta> <link> <col> <area> <base> <embed> <source> <track> <wbr>

<!-- GLOBAL ATTRIBUTES (any element pe) -->
id="unique-id"          <!-- Unique identifier -->
class="class-name"      <!-- CSS class -->
style="color:red"       <!-- Inline style (avoid!) -->
title="Tooltip text"    <!-- Hover tooltip -->
lang="en"               <!-- Language -->
tabindex="0"            <!-- Keyboard tab order -->
hidden                  <!-- Hide element -->
contenteditable         <!-- User can edit content -->
data-custom="value"     <!-- Custom data attribute -->

<!-- ARIA ATTRIBUTES -->
aria-label="Description"
aria-labelledby="id"
aria-describedby="id"
aria-required="true"
aria-expanded="false"
role="alert|navigation|main|..."`,
          summary: ['Ye cheat sheet quick reference ke liye bookmark karo', 'MDN Documentation real bible hai — mdn.io/html', 'Practice se sab naturally yaad ho jaata hai'],
          flashcard: { q: 'HTML ke top 10 most-used tags kaunse hain?', a: 'div, p, a, img, h1-h3, span, ul/li, form/input, button, table — ye sab hamesha use hote hain!' },
          funFact: '🎉 Fun Fact: HTML5 mein 110+ elements hain — lekin development mein mostly 30-40 tags hi use hote hain daily!',
          quiz: {
            type: 'mcq',
            question: 'HTML mein self-closing (void) element kaunsa hai?',
            options: ['<div>', '<p>', '<input>', '<section>'],
            answer: '<input>',
            explanation: '<input> ek void element hai — koi closing tag nahi hota. <div>, <p>, <section> sab ko closing tag chahiye.'
          },
          challenge: {
            instruction: 'Cheat sheet reference use karke ek page banao jisme: 5 alag input types, ek table (2x3), ek audio element, aur ek semantic structure ho.',
            initialCode: '<!-- Reference use karke page banao -->\n',
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('<table') && n.includes('<audio') && n.includes('<header') && (n.match(/type="/g) || []).length >= 3
            },
            successMessage: 'Cheat sheet mastered! Reference expert! +20 XP 📋'
          }
        },

        // ─── LESSON 31: HTML COURSE COMPLETION ────────────
        {
          id: 'html-complete',
          title: '🎉 HTML Course Complete!',
          emoji: '🏆',
          xpReward: 100,
          badgeName: 'HTML Master',
          mastirQuote: {
            start: '👨🏫 Masti Sir: "YEH TO BADA HUA! 🎉🎉🎉\n\nTumne HTML Master Course complete kar liya!\n\nMujhe tumpe FAKHR hai! 🥹\n\nRemember:\nHar expert kabhi beginner tha.\nAur tum? Tum ab HTML ke expert ho!\n\nNEXT STOP: CSS! 🚀"',
            hint: '',
            success: '🏆 Masti Sir: "HTML MASTER! 💪\n\nCertificate ready hai!\nAb CSS seekhne ka time!\n\nTumhara journey abhi shuru hua hai!\nRuko mat — aage badho! 🚀"',
            mistake: ''
          },
          englishDef: 'Congratulations! You have completed the HTML Master Course. You now know semantic HTML, forms, accessibility, SEO basics, media elements, and best practices. You are ready to move on to CSS!',
          hinglishExplain: 'Mubarakbad! Tumne poora HTML Master Course complete kar liya! Ab tumhare paas solid HTML foundation hai. Aage CSS seekho — website ko beautiful banana shuru karo!',
          code: `<!-- 🎉 Tumne ye sab seekha! -->

<!-- Chapter 1: HTML Basics -->
<!DOCTYPE html> <html> <head> <body>

<!-- Chapter 2: Text & Formatting -->
<h1>-<h6> <p> <strong> <em> <mark> <blockquote>

<!-- Chapter 3: Links, Images, Lists -->
<a href="URL" target="_blank"> 
<img src="" alt="" loading="lazy">
<ul> <ol> <li> <dl>

<!-- Chapter 4: Organizing Content -->
<table> <div> <span> class id
<iframe>

<!-- Chapter 5: Forms & Input -->
<form> <input type="..."> <label>
<select> <textarea> <button>

<!-- Chapter 6: Semantic HTML & SEO -->
<header> <nav> <main> <article> <section> <aside> <footer>
<meta name="description"> <title> og: tags

<!-- Chapter 7: Advanced HTML -->
<audio> <video> <track>
Best practices, Interview Q&A

<!-- Chapter 8: Projects -->
Portfolio Page ✅
Cheat Sheet ✅

<!-- NEXT STEPS: -->
<!-- 1. CSS Seekho — website ko beautiful banao -->
<!-- 2. JavaScript Seekho — interactive banao -->
<!-- 3. Portfolio pe live deploy karo -->
<!-- 4. GitHub profile update karo -->

<!-- Remember: Practice > Theory! 💪 -->`,
          miniChallenge: 'Apna final project banao — ek complete website page jisme sab HTML concepts use ho. GitHub pe upload karo!',
          quiz: {
            type: 'mcq',
            question: 'HTML seekhne ke baad next step kya hona chahiye?',
            options: ['React seedha seekho', 'CSS seekho', 'Python seekho', 'Rest karo'],
            answer: 'CSS seekho',
            explanation: 'HTML structure ke baad CSS styling — phir JavaScript interactivity. Yahi web development ka natural path hai!'
          },
          summary: [
            'HTML Master Course complete! 🏆',
            'Semantic HTML, Forms, Accessibility, SEO, Media — sab seekha',
            'Next: CSS Mastery Course → JavaScript → React',
            'Portfolio GitHub pe upload karo — portfolio website publish karo!'
          ],
          flashcard: { q: 'HTML ke baad kya seekhna chahiye?', a: 'CSS (styling) → JavaScript (interactivity) → Framework (React/Vue) — Web Dev roadmap!' },
          funFact: '🎉 Final Fun Fact: Tumne jo HTML seekhi hai, same HTML pe Google, Facebook, YouTube — sab bane hain. Tum real technology seekh rahe ho!',
          didYouKnow: '🤯 Did You Know? Stack Overflow ke according, HTML aaj bhi duniya ki 5 most-used programming languages mein hai — 2024 mein!',
          challenge: {
            instruction: 'FINAL CHALLENGE: Ek complete, semantic, accessible, SEO-optimized HTML page banao. Sab concepts use karo. Ye tumhari HTML mastery ka proof hai!',
            initialCode: '<!-- FINAL HTML PROJECT -->\n<!DOCTYPE html>\n<html lang="en">\n<!-- Complete karo... -->\n</html>',
            validator: (code) => {
              const n = code.toLowerCase()
              const checks = [
                n.includes('<!doctype html>'),
                n.includes('lang='),
                n.includes('<meta charset'),
                n.includes('<title'),
                n.includes('<meta name="description"'),
                n.includes('<header'),
                n.includes('<main'),
                n.includes('<footer'),
                n.includes('<h1'),
                n.includes('<form') || n.includes('<nav')
              ]
              return checks.filter(Boolean).length >= 7
            },
            successMessage: '🏆🎉🚀 HTML MASTER! COURSE COMPLETE! +100 XP!\n\nCertificate earned! Masti Sir bahut proud hai!\n\nYAD RAKHO: Har expert kabhi beginner tha.\nAb tum beginner nahi — tum HTML Developer ho! 💪'
          }
        }
      ]
    }
  ]
}

export default htmlCourse
