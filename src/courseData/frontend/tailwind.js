export const tailwindCourse = {
  id: 'tailwind',
  title: 'Tailwind CSS',
  description: 'Master Modern Utility-First CSS! Rapidly build responsive, pixel-perfect, dark-mode ready web interfaces with Flexbox, CSS Grid, Hover/Focus variants, Transitions, Arbitrary values, and Component extraction — Masti Sir style mein!',
  icon: '🌊',
  category: 'frontend',
  certificateName: 'TAILWIND CSS',
  topicsCount: 25,
  practiceCount: 35,
  projectsCount: 6,
  hoursEstimate: 18,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: GETTING STARTED & UTILITY-FIRST WORKFLOW
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 1: Getting Started & Utility-First Workflow',
      lessons: [
        {
          id: 'tailwind-intro',
          title: 'Introduction to Tailwind CSS & Utility-First Philosophy',
          emoji: '🌊',
          xpReward: 25,
          badgeName: 'Tailwind Initiate',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS likhte-likhte 500 lines ka `styles.css` aur ajeeb-o-gareeb class names (`.main-btn-wrapper-inner-v2`) se tang aa chuke ho? Tailwind CSS tumhare HTML ke andar seedha magic utilities deta hai! Zero context switching! 😎"',
            hint: '💡 Masti Sir: "Tailwind CSS ek Utility-First CSS Framework hai. Har class ek single focused CSS property apply karti hai!"',
            success: '🎉 Masti Sir: "Zabardast! Ab tum utility-first thinking samajh gaye!"',
            mistake: '😅 Masti Sir: "Tailwind mein classes inline styles jaisi lagti hain, lekin ye inline styles se 100 guna behtar hain kyunki isme media queries, pseudo-classes aur design tokens built-in hote hain!"'
          },
          englishDef: 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
          hinglishExplain: 'Tailwind CSS ek utility-first framework hai. Isme pehle se bane-banaye CSS classes hote hain (jaise `flex`, `p-4`, `bg-blue-500`, `rounded-lg`). Aapko alag se `.css` file mein jaakar class names sochne ki zaroorat nahi padti.',
          storyExplain: 'Traditional CSS ek tailor-made suit hai jahan har button ke liye alag se kapda kaatna padta hai. Tailwind CSS ek LEGO set hai jahan predefined standard building blocks milte hain jinhe jodkar aap kuch bhi bana sakte ho! 🧱✨',
          memoryTrick: 'Tailwind Formula:\n- Traditional CSS = HTML + alag CSS file + 1000 custom class names\n- Tailwind CSS = Pre-built atomic classes directly in className',
          visualDiagram: {
            title: 'Traditional CSS vs Tailwind CSS Workflow',
            nodes: [
              'Traditional: HTML ➔ Write CSS in .css ➔ Name class `.card-btn-final` ➔ Fix specificity',
              'Tailwind: HTML ➔ Add `bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-700` ➔ Done! 🚀'
            ],
            type: 'flowchart'
          },
          code: `<!-- Tailwind CSS Button Example -->
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
  Get Started 🚀
</button>`,
          codeBreakdown: [
            { part: 'bg-blue-600', label: 'Sets background-color to blue shade 600', color: '#3b82f6' },
            { part: 'hover:bg-blue-700', label: 'Changes background on hover to darker shade 700', color: '#1d4ed8' },
            { part: 'px-6 py-2.5', label: 'Padding-X (left/right) 24px, Padding-Y (top/bottom) 10px', color: '#10b981' },
            { part: 'rounded-lg', label: 'Border radius: 8px (0.5rem)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Custom CSS likhna jab already Tailwind utility exist karti ho',
            '❌ Tailwind CDN ko production mein heavy use karna bina purging ke'
          ],
          proTips: [
            '💡 VS Code mein "Tailwind CSS IntelliSense" extension install karo — automatic autocomplete aur CSS preview milta hai!'
          ],
          interviewQuestions: [
            'Tailwind CSS aur Bootstrap mein kya farak hai?',
            'Utility-first CSS ke main fayde kya hain?'
          ],
          quiz: {
            type: 'mcq',
            question: 'Tailwind CSS kis type ka CSS framework hai?',
            options: ['Component-based', 'Utility-first', 'Object-Oriented CSS', 'Template engine'],
            answer: 'Utility-first',
            explanation: 'Tailwind CSS utility-first framework hai jisme low-level atomic utility classes milti hain.'
          },
          summary: [
            'Tailwind CSS eliminates writing custom CSS classes in separate stylesheets',
            'Direct markup styling improves development speed drastically',
            'Consistency with design tokens (spacing, typography, color palettes)'
          ],
          flashcard: { q: 'Utility-first framework ka matlab kya hai?', a: 'Markup mein low-level utility classes compose karke bina custom CSS likhe UI design karna.' },
          funFact: '🎉 Fun Fact: Tailwind CSS GitHub pe 80,000+ stars ke sath duniya ka sabse popular utility framework ban chuka hai!',
          challenge: {
            instruction: 'Ek stylish button banao jisme blue background, white text, rounded corners aur hover effect ho.',
            initialCode: '<button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium shadow">\n  Click Me\n</button>',
            validator: (code) => code.includes('bg-') && code.includes('text-') && code.includes('rounded'),
            successMessage: '🎉 Great start with Tailwind! +25 XP'
          }
        },
        {
          id: 'tailwind-setup',
          title: 'Installation, Setup & tailwind.config.js',
          emoji: '⚙️',
          xpReward: 25,
          badgeName: 'Tailwind Setup Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tailwind ko project mein 3 tareeko se add kar sakte hain: CDN for instant testing, Vite / Next.js CLI for production, aur PostCSS plugin! 🛠️"',
            hint: '💡 Masti Sir: "Production mein `@tailwind base; @tailwind components; @tailwind utilities;` zaroor include karna!"',
            success: '🎉 Masti Sir: "Tailwind config setup crystal clear!"',
            mistake: '😅 Masti Sir: "`content` array mein apne JSX/HTML files ka path dena mat bhoolna, varna Tailwind classes purge ho jayengi!"'
          },
          englishDef: 'Installing Tailwind CSS via PostCSS/Vite CLI, configuring template source files in tailwind.config.js, and importing the three base directives (@tailwind base, components, utilities).',
          hinglishExplain: 'Tailwind ko install karne ke liye Vite ya Next.js CLI use karte hain. `tailwind.config.js` file Tailwind ko batati hai ki kin-kin HTML/React files mein classes dhoondhni hain.',
          code: `// ── tailwind.config.js ──
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2f8d46',
      },
    },
  },
  plugins: [],
}

/* ── src/index.css ── */
@tailwind base;
@tailwind components;
@tailwind utilities;`,
          quiz: {
            type: 'mcq',
            question: 'tailwind.config.js mein `content` array ka main purpose kya hai?',
            options: ['Fonts import karna', 'Scan hone wali template files ke path define karna', 'Database connect karna', 'Images optimize karna'],
            answer: 'Scan hone wali template files ke path define karna',
            explanation: 'Tailwind sirf wahi CSS generate karta hai jo `content` array mein specify kiye gaye files mein use hoti hai (JIT engine).'
          },
          summary: ['Vite / CLI se lightweight bundle banta hai', 'tailwind.config.js se custom colors extend kar sakte hain', '@tailwind directives base CSS import karti hain']
        },
        {
          id: 'tailwind-core-concepts',
          title: 'Core Syntax & Utility Naming Formula',
          emoji: '📐',
          xpReward: 25,
          badgeName: 'Syntax Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tailwind ki classes yaad karne ki zaroorat nahi hai! Iska ek universal formula hai: `{property}-{direction}-{size/color}`! Bas formula samjho aur pro bano! 😎"',
            hint: '💡 Masti Sir: "Jaise `p-4` = padding 16px, `px-6` = padding left/right 24px, `pt-2` = padding top 8px!"',
            success: '🎉 Masti Sir: "Formula decode ho gaya!"',
            mistake: '😅 Masti Sir: "1 unit in Tailwind = 4px (0.25rem). To `p-4` = 4 * 4px = 16px!"'
          },
          englishDef: 'Understanding the deterministic utility naming conventions in Tailwind CSS: property prefixes, directional axes (x, y, t, b, l, r), scale multipliers (1 = 0.25rem = 4px), and state modifiers.',
          hinglishExplain: 'Tailwind ka naming standard bohot predictable hai. 1 unit ka matlab 4px hota hai. `w-4` = 16px, `w-8` = 32px, `w-16` = 64px, `w-full` = 100%. Direction ke liye `t` (top), `b` (bottom), `l` (left), `r` (right), `x` (horizontal), `y` (vertical) use hota hai.',
          code: `<div class="p-6 m-4 bg-slate-100 rounded-xl border border-slate-300 shadow-sm">
  <h3 class="text-lg font-bold text-slate-800 mb-2">Tailwind Scale Formula</h3>
  <p class="text-slate-600 text-sm leading-relaxed">
    1 unit = 0.25rem = 4px. So <code class="bg-slate-200 px-1 py-0.5 rounded text-xs">p-4 = 16px</code>.
  </p>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind CSS mein `p-8` kitne pixels padding deta hai?',
            options: ['8px', '16px', '32px', '64px'],
            answer: '32px',
            explanation: 'Tailwind scale multiplier 4px hota hai. 8 * 4px = 32px (2rem).'
          },
          summary: ['Tailwind scale: 1 unit = 4px (0.25rem)', 'Directional modifiers: t, b, l, r, x, y', 'Predictable property prefixes: p-, m-, bg-, text-, border-']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: COLORS, BACKGROUNDS & TYPOGRAPHY
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 2: Colors, Backgrounds & Typography',
      lessons: [
        {
          id: 'tailwind-colors',
          title: 'Color Palette, Shades (50–950) & Opacity Modifiers',
          emoji: '🎨',
          xpReward: 25,
          badgeName: 'Color Alchemist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tailwind mein 22 built-in curated color palettes milti hain (Slate, Zinc, Red, Emerald, Blue, Violet)! Har color ke 50 se 950 tak 11 perfect shades hain! 🎨"',
            hint: '💡 Masti Sir: "Opacity add karne ke liye slash syntax use karo: `bg-blue-500/80` (80% opacity)!"',
            success: '🎉 Masti Sir: "Colors master ho gaye!"',
            mistake: '😅 Masti Sir: "50 sabse light shade hota hai (backgrounds ke liye), aur 950 sabse dark shade hota hai!"'
          },
          englishDef: 'Comprehensive color system with 11 shade steps (50 to 950), opacity slash syntax (bg-emerald-500/50), background colors, text colors, and border colors.',
          hinglishExplain: 'Tailwind har color ke 11 shades deta hai: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950. Kisi bhi color ki transparency control karne ke liye `/` lagakar opacity percentage de sakte hain jaise `bg-black/50` ya `text-blue-600/80`.',
          code: `<div class="flex flex-wrap gap-3 p-4">
  <div class="bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium shadow">Emerald 500</div>
  <div class="bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium shadow">Emerald 600</div>
  <div class="bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium shadow">Emerald 700</div>
  <div class="bg-emerald-500/30 text-emerald-900 border border-emerald-500 px-4 py-2 rounded-lg font-medium">30% Opacity</div>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein 50% background opacity apply karne ke liye kaun sa syntax use hota hai?',
            options: ['bg-opacity-50-blue', 'bg-blue-500/50', 'bg-blue-500-alpha-50', 'opacity-blue-50'],
            answer: 'bg-blue-500/50',
            explanation: 'Modern Tailwind CSS mein `/50` slash modifier se direct opacity apply hoti hai.'
          },
          summary: ['11 shades per color palette (50 to 950)', 'Slash notation `bg-color/opacity` for transparency', 'Consistent palettes: Slate, Gray, Blue, Emerald, Violet, Amber']
        },
        {
          id: 'tailwind-typography',
          title: 'Typography: Font Size, Weights, Tracking & Line Height',
          emoji: '🔤',
          xpReward: 25,
          badgeName: 'Typography Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Headings ko bada aur clean banane ke liye `text-4xl font-extrabold tracking-tight` use karo! UI ekdum Apple website jaisi lagne lagegi! ✨"',
            hint: '💡 Masti Sir: "`text-xs` se lekar `text-9xl` tak saare font sizes ready hain!"',
            success: '🎉 Masti Sir: "Typography setup perfect!"',
            mistake: '😅 Masti Sir: "Paragraph text ko hamesha `text-slate-600 leading-relaxed` do taaki readability best rahe!"'
          },
          englishDef: 'Complete typography utility suite covering font size (text-xs to text-9xl), font weight (font-thin to font-black), letter spacing (tracking-tight to tracking-widest), text alignment, and line height.',
          hinglishExplain: 'Tailwind mein text styling ke liye `text-sm`, `text-base`, `text-lg`, `text-2xl`, `text-4xl` use hota hai. Font weight ke liye `font-normal`, `font-semibold`, `font-bold` aur line height ke liye `leading-relaxed`, `leading-tight` use hota hai.',
          code: `<div class="p-6 bg-white rounded-xl shadow border border-slate-100 max-w-md">
  <span class="text-xs font-bold uppercase tracking-wider text-indigo-600">Article Badge</span>
  <h2 class="text-2xl font-extrabold text-slate-900 tracking-tight mt-1 mb-2">Modern Tailwind Typography</h2>
  <p class="text-slate-600 text-sm leading-relaxed">
    Clean fonts, balanced tracking, and proportional line height make interfaces joyful to read.
  </p>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein sabse bold font weight kaun sa class deta hai?',
            options: ['font-bold', 'font-extrabold', 'font-black', 'font-heavy'],
            answer: 'font-black',
            explanation: '`font-black` font-weight: 900 apply karta hai.'
          },
          summary: ['Font sizes: text-xs (12px) to text-9xl (128px)', 'Font weights: font-thin (100) to font-black (900)', 'Letter spacing: tracking-tight, tracking-wide']
        },
        {
          id: 'tailwind-gradients',
          title: 'Gradients & Text Clips',
          emoji: '🌈',
          xpReward: 25,
          badgeName: 'Gradient Guru',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Text pe gradient chadhana chahte ho? `bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent` — 3 classes aur glow ready! 🌟"',
            hint: '💡 Masti Sir: "Gradients mein `from-`, `via-`, aur `to-` teeno color stops use kar sakte ho!"',
            success: '🎉 Masti Sir: "Gradient mastery achieved!"',
            mistake: '😅 Masti Sir: "Text gradient banate waqt `bg-clip-text` aur `text-transparent` dono lagana mandatory hai!"'
          },
          englishDef: 'Creating modern multi-stop gradients with bg-gradient-to-r/l/t/b, from-color, via-color, and to-color stops, plus text gradient clipping with bg-clip-text text-transparent.',
          hinglishExplain: 'Tailwind mein gradient direction `bg-gradient-to-r` (right), `bg-gradient-to-br` (bottom-right) se set hoti hai. `from-purple-500 via-pink-500 to-red-500` se 3-color smooth transition banta hai.',
          code: `<div class="p-8 bg-slate-950 rounded-2xl text-center">
  <h1 class="text-4xl font-black bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
    Next-Gen Web Design
  </h1>
  <button class="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg transition duration-200">
    Explore Now
  </button>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein text ko gradient color dene ke liye kaun si combination zaroori hai?',
            options: [
              'text-gradient text-white',
              'bg-gradient-to-r from-* to-* bg-clip-text text-transparent',
              'color-gradient-linear',
              'gradient-text-auto'
            ],
            answer: 'bg-gradient-to-r from-* to-* bg-clip-text text-transparent',
            explanation: 'Background gradient laga kar `bg-clip-text` aur `text-transparent` se text par gradient show hota hai.'
          },
          summary: ['Directions: bg-gradient-to-t/tr/r/br/b/bl/l/tl', 'Stops: from-*, via-*, to-*', 'Text clip: bg-clip-text text-transparent']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: SPACING, SIZING & BOX MODEL
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 3: Spacing, Sizing & Box Model',
      lessons: [
        {
          id: 'tailwind-spacing',
          title: 'Padding, Margin & Space Between Utilities',
          emoji: '📏',
          xpReward: 25,
          badgeName: 'Spacing Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Margin collapse aur spacing errors ka solution: `space-y-4` ya `gap-4`! Har child element pe manual margin lagane ki jhanjhat khatam! 📐"',
            hint: '💡 Masti Sir: "Negative margin ke liye minus prefix lagao jaise `-mt-8`!"',
            success: '🎉 Masti Sir: "Spacing concepts mastered!"',
            mistake: '😅 Masti Sir: "`px-` horizontal padding deta hai (left + right), aur `py-` vertical padding deta hai (top + bottom)!"'
          },
          englishDef: 'Comprehensive spacing utilities including directional padding (p, px, py, pt, pb, pl, pr), margin (m, mx, my, mt, mb, ml, mr), negative margins (-mt-4), and space-x/y sibling spacers.',
          hinglishExplain: 'Padding ke liye `p-4` (charo taraf), `px-6` (left aur right), `py-3` (top aur bottom). List ya stack ke items ke beech equal space dene ke liye parent par `space-y-3` laga sakte hain.',
          code: `<div class="p-6 bg-slate-50 border border-slate-200 rounded-xl">
  <div class="space-y-3">
    <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">Item 1 (Auto spaced)</div>
    <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">Item 2 (Auto spaced)</div>
    <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">Item 3 (Auto spaced)</div>
  </div>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'List ke saare direct child elements ke beech vertical space dene ke liye parent par kaun si class best hai?',
            options: ['margin-between-4', 'space-y-4', 'child-margin-y', 'gap-between'],
            answer: 'space-y-4',
            explanation: '`space-y-4` parent par lagane se direct children ke beech `margin-top: 1rem` apply ho jata hai.'
          },
          summary: ['Padding: p, px, py, pt, pr, pb, pl', 'Margin: m, mx, my, mt, mr, mb, ml, -m*', 'Sibling Spacing: space-x-*, space-y-*']
        },
        {
          id: 'tailwind-sizing',
          title: 'Width, Height, Max-Width & Dynamic Viewport Sizing',
          emoji: '📐',
          xpReward: 25,
          badgeName: 'Dimension Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`w-full max-w-4xl mx-auto` — ye hai duniya ke har responsive container ka golden mantra! 🌟"',
            hint: '💡 Masti Sir: "Tailwind mein fractions bhi chalti hain: `w-1/2` (50%), `w-1/3` (33.33%), `w-3/4` (75%)!"',
            success: '🎉 Masti Sir: "Dimensions clear!"',
            mistake: '😅 Masti Sir: "`min-h-screen` full viewport height ke liye best hai!"'
          },
          englishDef: 'Width and height scale utilities, percentage fractions (w-1/2, w-2/3), viewport sizing (w-screen, h-screen, min-h-screen, h-dvh), and maximum constraint bounds (max-w-xs to max-w-7xl).',
          hinglishExplain: 'Width ke liye `w-64` (fixed size), `w-full` (100%), `w-1/2` (50%), `max-w-md` (28rem), `max-w-7xl` (80rem) use hota hai. Full screen height ke liye `h-screen` ya `min-h-screen` use kiya jata hai.',
          code: `<div class="max-w-lg mx-auto p-6 bg-indigo-50 border border-indigo-200 rounded-2xl">
  <div class="w-full bg-indigo-200 h-3 rounded-full overflow-hidden">
    <div class="bg-indigo-600 h-full w-3/4 rounded-full"></div>
  </div>
  <p class="text-xs text-indigo-700 font-semibold mt-2 text-right">75% Completed</p>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein kisi element ko center karne ke liye width ke sath kaun si margin class lagayi jaati hai?',
            options: ['m-center', 'mx-auto', 'align-center', 'margin-auto-all'],
            answer: 'mx-auto',
            explanation: '`mx-auto` margin-left: auto aur margin-right: auto set karke block element ko horizontal center karta hai.'
          },
          summary: ['Fixed sizes: w-12, h-12, size-10', 'Fractions: w-1/2, w-1/3, w-2/3, w-3/4, w-full', 'Max Constraints: max-w-sm to max-w-7xl, max-w-prose']
        },
        {
          id: 'tailwind-borders',
          title: 'Borders, Border Radius, Outlines & Rings',
          emoji: '🔲',
          xpReward: 25,
          badgeName: 'Border Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Focus states pe blue glow outline banana hai? Tailwind ka `ring-2 ring-blue-500 ring-offset-2` lagao — box-shadow based clean focus ring ready! 💍"',
            hint: '💡 Masti Sir: "`rounded-full` se perfect circle ya pill button banta hai!"',
            success: '🎉 Masti Sir: "Borders & rings mastered!"',
            mistake: '😅 Masti Sir: "`border` class lagana zaroori hai tabhi `border-slate-300` kaam karega (default width 1px hoti hai)!"'
          },
          englishDef: 'Border width, border color, border style, border-radius (rounded-sm to rounded-full), and box-shadow based focus rings (ring, ring-offset).',
          hinglishExplain: 'Border ke liye `border border-gray-300`, radius ke liye `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (circle/pill) use hota hai. Modern focus outlines ke liye `ring-2 ring-indigo-500` sabse best hota hai.',
          code: `<div class="flex items-center gap-4 p-4">
  <div class="size-14 rounded-full border-2 border-indigo-500 bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">
    CM
  </div>
  <input 
    type="text" 
    placeholder="Focus on me..." 
    class="border border-slate-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
  />
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein circular avatar banane ke liye kaun si border-radius class use hoti hai?',
            options: ['rounded-circle', 'rounded-50', 'rounded-full', 'border-circle'],
            answer: 'rounded-full',
            explanation: '`rounded-full` border-radius: 9999px apply karta hai jo square element ko perfect circle bana deta hai.'
          },
          summary: ['Borders: border, border-2, border-4, border-dashed', 'Radius: rounded-none to rounded-3xl, rounded-full', 'Rings: ring-1, ring-2, ring-offset-2']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: LAYOUTS — FLEXBOX & CSS GRID IN TAILWIND
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 4: Layouts — Flexbox & CSS Grid in Tailwind',
      lessons: [
        {
          id: 'tailwind-flexbox',
          title: 'Flexbox: Direction, Alignment, Justify & Flex Grow',
          emoji: '📦',
          xpReward: 30,
          badgeName: 'Flexbox Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`flex items-center justify-between` — is 3-word combination se duniya ke 90% modern navbars aur headers design ho jaate hain! 🚀"',
            hint: '💡 Masti Sir: "Centering mantra: `flex items-center justify-center`!"',
            success: '🎉 Masti Sir: "Flexbox in Tailwind crystal clear!"',
            mistake: '😅 Masti Sir: "Child items ke beech spacing ke liye `gap-4` use karo, har item pe alag margin mat lagao!"'
          },
          englishDef: 'Complete Flexbox implementation with flex, flex-row, flex-col, flex-wrap, justify-start/center/between/around, items-center/start/end, gap, and flex-1 (grow/shrink).',
          hinglishExplain: 'Tailwind Flexbox likhne ko bohot aasan banata hai: `flex` (display: flex), `flex-col` (column layout), `justify-between` (left/right space), `items-center` (vertical center), `gap-4` (items ke beech 16px space), `flex-1` (available space fill karna).',
          code: `<nav class="flex items-center justify-between p-4 bg-white border-b border-slate-200 shadow-sm">
  <div class="flex items-center gap-2 font-bold text-lg text-indigo-600">
    <span>⚡</span> CodeMasti
  </div>
  <div class="flex items-center gap-4">
    <a href="#" class="text-slate-600 hover:text-indigo-600 text-sm font-medium">Courses</a>
    <a href="#" class="text-slate-600 hover:text-indigo-600 text-sm font-medium">Projects</a>
    <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg">
      Sign In
    </button>
  </div>
</nav>`,
          quiz: {
            type: 'mcq',
            question: 'Flex container ke andar items ko vertically aur horizontally dono taraf center karne ke liye kaun si combination best hai?',
            options: [
              'flex justify-center items-center',
              'flex align-all-center',
              'flex-center-all',
              'display-flex center-content'
            ],
            answer: 'flex justify-center items-center',
            explanation: '`flex justify-center items-center` horizontal (main-axis) aur vertical (cross-axis) dono par center karta hai.'
          },
          summary: ['Display: flex, inline-flex', 'Direction: flex-row, flex-col, flex-wrap', 'Alignment: items-center, justify-between, gap-4, flex-1']
        },
        {
          id: 'tailwind-grid',
          title: 'CSS Grid: Columns, Rows, Gap & Col-Span',
          emoji: '▦',
          xpReward: 30,
          badgeName: 'Grid Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Card layouts aur dashboards ke liye `grid grid-cols-1 md:grid-cols-3 gap-6` se behtar koi cheez nahi hai! Mobile pe 1 column, desktop pe 3 columns — zero media query CSS! 🪄"',
            hint: '💡 Masti Sir: "Kisi card ko 2 columns jitna chauda banane ke liye `col-span-2` lagao!"',
            success: '🎉 Masti Sir: "CSS Grid mastery achieved!"',
            mistake: '😅 Masti Sir: "Grid container par `grid` class lagana zaroori hai!"'
          },
          englishDef: 'Modern 2D Grid layouts with grid, grid-cols-1 to grid-cols-12, col-span-*, row-span-*, gap-*, and responsive column swapping.',
          hinglishExplain: 'Tailwind CSS Grid se 2-dimensional layouts banaye jaate hain. `grid grid-cols-3 gap-4` se 3 columns ka grid banta hai. Kisi specific card ko multiple columns cover karwane ke liye `col-span-2` use hota hai.',
          code: `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-slate-50">
  <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
    <h3 class="font-bold text-slate-800">Card 1</h3>
    <p class="text-sm text-slate-500 mt-1">Grid column 1</p>
  </div>
  <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
    <h3 class="font-bold text-slate-800">Card 2</h3>
    <p class="text-sm text-slate-500 mt-1">Grid column 2</p>
  </div>
  <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
    <h3 class="font-bold text-slate-800">Card 3</h3>
    <p class="text-sm text-slate-500 mt-1">Grid column 3</p>
  </div>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein 4 equal columns ka grid banane ke liye kaun si class use hoti hai?',
            options: ['grid-4-cols', 'grid-cols-4', 'cols-count-4', 'grid-columns-four'],
            answer: 'grid-cols-4',
            explanation: '`grid-cols-4` grid-template-columns: repeat(4, minmax(0, 1fr)) apply karta hai.'
          },
          summary: ['Columns: grid-cols-1 to grid-cols-12', 'Spanning: col-span-2, col-span-full', 'Gaps: gap-4, gap-x-6, gap-y-8']
        },
        {
          id: 'tailwind-positioning',
          title: 'Positioning, Z-Index & Inset Coordinates',
          emoji: '📌',
          xpReward: 25,
          badgeName: 'Positioning Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Sticky header ya floating notification badge banana hai? Parent ko `relative` do aur badge ko `absolute top-2 right-2`! Z-index ke liye `z-50` lagao! 📌"',
            hint: '💡 Masti Sir: "`inset-0` = top: 0, right: 0, bottom: 0, left: 0 (Modal backdrop ke liye perfect)!"',
            success: '🎉 Masti Sir: "Positioning mastered!"',
            mistake: '😅 Masti Sir: "`absolute` element hamesha apne closest `relative` parent ke according position hota hai!"'
          },
          englishDef: 'Position utilities (static, relative, absolute, fixed, sticky), coordinate offsets (top, right, bottom, left, inset-0), and stacking z-index layers (z-0 to z-50).',
          hinglishExplain: 'Positioning ke liye `relative`, `absolute`, `fixed`, `sticky top-0` use hota hai. `inset-0` poori screen ko cover karne ke liye best hai jaise modal overlay backdrop mein.',
          code: `<div class="relative inline-block p-2">
  <button class="bg-slate-800 text-white p-3 rounded-xl">
    🔔 Notifications
  </button>
  <span class="absolute -top-1 -right-1 size-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
    3
  </span>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Modal backdrop ko full screen stretch karne ke liye kaun si coordinate utility use hoti hai?',
            options: ['stretch-all', 'inset-0', 'full-screen-pos', 'top-left-all'],
            answer: 'inset-0',
            explanation: '`inset-0` top: 0, right: 0, bottom: 0, left: 0 sabko 0 set kar deta hai.'
          },
          summary: ['Positions: relative, absolute, fixed, sticky top-0', 'Offsets: top-*, right-*, bottom-*, left-*, inset-0', 'Z-Index: z-10, z-20, z-30, z-40, z-50']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: RESPONSIVE DESIGN & STATE MODIFIERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 5: Responsive Design, Pseudo-Classes & Dark Mode',
      lessons: [
        {
          id: 'tailwind-responsive',
          title: 'Mobile-First Responsive Design (sm, md, lg, xl, 2xl)',
          emoji: '📱',
          xpReward: 30,
          badgeName: 'Responsive Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tailwind 100% Mobile-First hai! Prefix ke bina likhi gayi class mobile screen ke liye hoti hai, aur `md:` prefix tablet/desktop ke liye! 📱➔💻"',
            hint: '💡 Masti Sir: "Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px)!"',
            success: '🎉 Masti Sir: "Mobile-first philosophy mastered!"',
            mistake: '😅 Masti Sir: "`md:flex-row` likhte waqt pehle mobile default `flex-col` define karna mat bhoolna!"'
          },
          englishDef: 'Mobile-first responsive design workflow where unprefixed classes apply to mobile devices, and min-width breakpoint prefixes (sm:, md:, lg:, xl:, 2xl:) conditionally trigger on larger screens.',
          hinglishExplain: 'Tailwind mein media queries likhne ki zaroorat nahi hoti. Bas class ke aage breakpoint prefix lagao: `w-full md:w-1/2 lg:w-1/3`. Iska matlab mobile par 100% width, tablet par 50% width, aur desktop par 33.3% width.',
          code: `<div class="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow border border-slate-100">
  <div class="size-20 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
    🚀
  </div>
  <div class="text-center md:text-left flex-1">
    <h3 class="text-xl font-bold text-slate-900">Mobile First Card</h3>
    <p class="text-slate-600 text-sm mt-1">
      On mobile this stacks vertically; on tablet/desktop it aligns horizontally in a single row!
    </p>
  </div>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind CSS mein `md:` breakpoint kitne minimum pixels par trigger hota hai?',
            options: ['480px', '640px', '768px', '1024px'],
            answer: '768px',
            explanation: '`md:` corresponds to `@media (min-width: 768px)`.'
          },
          summary: ['sm: 640px (large phones)', 'md: 768px (tablets)', 'lg: 1024px (laptops/desktops)', 'xl: 1280px & 2xl: 1536px']
        },
        {
          id: 'tailwind-states',
          title: 'Hover, Focus, Active, Group-Hover & Peer States',
          emoji: '⚡',
          xpReward: 30,
          badgeName: 'Interaction Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Parent card pe hover karo aur andar ka arrow slide ho jaye? `group` parent pe lagao aur child pe `group-hover:translate-x-2`! Pure magic! 🪄"',
            hint: '💡 Masti Sir: "Focus states: `focus:ring-2 focus:ring-blue-500 focus:outline-none`!"',
            success: '🎉 Masti Sir: "State variants crystal clear!"',
            mistake: '😅 Masti Sir: "Parent par `group` class lagana zaroori hai tabhi child par `group-hover:` kaam karega!"'
          },
          englishDef: 'Pseudo-class state variants (hover:, focus:, active:, disabled:), parent-state propagation with group/group-hover:, and sibling interactions with peer/peer-checked:.',
          hinglishExplain: 'Tailwind har CSS pseudo-class ko prefix ke roop mein deta hai: `hover:bg-blue-600`, `focus:border-blue-500`, `active:scale-95`. `group` aur `group-hover` se parent card ke hover par child elements animate hote hain.',
          code: `<div class="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer">
  <div class="flex items-center justify-between">
    <h3 class="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
      Interactive Card
    </h3>
    <span class="text-indigo-600 font-bold transform group-hover:translate-x-2 transition-transform duration-200">
      →
    </span>
  </div>
  <p class="text-sm text-slate-500 mt-2">Hover over this card to watch the arrow slide right!</p>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Parent element par hover hone par child element ka color change karne ke liye kaun si pair use hoti hai?',
            options: ['parent / parent-hover', 'group / group-hover', 'target / target-hover', 'hover-all'],
            answer: 'group / group-hover',
            explanation: 'Parent par `group` aur child par `group-hover:*` lagane se parent hover par child style trigger hota hai.'
          },
          summary: ['States: hover:, focus:, active:, disabled:, visited:', 'Group variants: group on parent + group-hover:* on child', 'Peer variants: peer on input + peer-checked:* on sibling']
        },
        {
          id: 'tailwind-dark-mode',
          title: 'Dark Mode Variant (class Strategy & dark: Prefix)',
          emoji: '🌙',
          xpReward: 30,
          badgeName: 'Dark Mode Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Dark mode implementation mein hafton lagte the, Tailwind mein bas `dark:bg-slate-900 dark:text-white` lagao aur instant dark theme ready! 🌙✨"',
            hint: '💡 Masti Sir: "`tailwind.config.js` mein `darkMode: \'class\'` set karo taaki toggle button se `<html class=\"dark\">` switch ho sake!"',
            success: '🎉 Masti Sir: "Dark mode perfectly configured!"',
            mistake: '😅 Masti Sir: "Light mode colors pehle likho, phir `dark:` variant add karo!"'
          },
          englishDef: 'Implementing sleek dark mode themes using the dark: variant prefix and configuring the class-based dark mode strategy in tailwind.config.js for toggleable user themes.',
          hinglishExplain: 'Tailwind mein dark mode enable karna bohot simple hai. Light theme ke classes ke sath `dark:` prefix wale classes likh do: `bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100`. Jab HTML root tag par `class="dark"` hoga, dark styles automatically apply ho jayenge.',
          code: `<div class="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow transition-colors">
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-bold text-slate-900 dark:text-white">Dark Mode Ready Card</h3>
    <span class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400">🌙</span>
  </div>
  <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">
    This component automatically adapts between light and dark themes seamlessly.
  </p>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein dark mode styling apply karne ke liye kaun sa modifier prefix use hota hai?',
            options: ['theme-dark:', 'dark:', 'night:', 'mode-dark:'],
            answer: 'dark:',
            explanation: '`dark:` prefix se dark mode specific styles (e.g. `dark:bg-black`) apply hote hain.'
          },
          summary: ['Prefix: dark:bg-*, dark:text-*, dark:border-*', 'Config: darkMode: "class"', 'Smooth theme switching with transition-colors']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: TRANSFORMS, TRANSITIONS & ANIMATIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 6: Transforms, Transitions & Animations',
      lessons: [
        {
          id: 'tailwind-transitions',
          title: 'Transitions, Timing Functions & Duration',
          emoji: '🔄',
          xpReward: 25,
          badgeName: 'Transition Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har button aur link ko smooth feel dene ke liye `transition-all duration-200 ease-in-out` lagana standard industry practice hai! ⚡"',
            hint: '💡 Masti Sir: "Durations: `duration-75`, `duration-150`, `duration-200`, `duration-300`, `duration-500`!"',
            success: '🎉 Masti Sir: "Transitions smooth as butter!"',
            mistake: '😅 Masti Sir: "`transition` class ke bina hover color change sudden jhatke jaisa lagega!"'
          },
          englishDef: 'Configuring CSS transitions with transition-all/colors/opacity/transform, durations (duration-150 to duration-700), and easing curves (ease-in, ease-out, ease-in-out).',
          hinglishExplain: 'Jab bhi kisi element par hover ya state change ho, usko smoothly animate karne ke liye `transition` (ya `transition-colors`, `transition-transform`) aur `duration-300` use kiya jata hai.',
          code: `<button class="bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 ease-in-out">
  Smooth Micro-Interaction 🚀
</button>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein 300 milliseconds transition duration set karne ke liye kaun si class use hoti hai?',
            options: ['time-300', 'duration-300', 'transition-300ms', 'speed-300'],
            answer: 'duration-300',
            explanation: '`duration-300` transition-duration: 300ms apply karta hai.'
          },
          summary: ['Property: transition, transition-colors, transition-transform', 'Duration: duration-150, duration-200, duration-300, duration-500', 'Easing: ease-linear, ease-in, ease-out, ease-in-out']
        },
        {
          id: 'tailwind-transforms',
          title: 'Transforms: Scale, Rotate, Translate & Skew',
          emoji: '🪄',
          xpReward: 25,
          badgeName: 'Transform Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Hover par button ko thoda sa pop out karna ho toh `hover:scale-105` aur click par click press feel ke liye `active:scale-95` lagao! 🎮"',
            hint: '💡 Masti Sir: "Tailwind v3 mein `transform` class lagaye bina seedha `scale-105` ya `rotate-12` kaam karta hai!"',
            success: '🎉 Masti Sir: "Transforms master ho gaye!"',
            mistake: '😅 Masti Sir: "Negative translate ke liye `-translate-y-1` use karo!"'
          },
          englishDef: 'Hardware-accelerated 2D transforms covering scale (scale-95 to scale-125), rotate (rotate-12, -rotate-45), and translate offset axes (translate-x-2, -translate-y-1).',
          hinglishExplain: 'Tailwind transforms se elements ko scale (zoom), rotate (ghoomana), aur translate (move karna) bohot aasan hota hai. Hover effects ke liye `hover:scale-105` aur `hover:-translate-y-1` industry standard hain.',
          code: `<div class="flex gap-4 p-4">
  <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer">
    Zoom Scale Card 🔍
  </div>
  <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:-rotate-3 transition-transform duration-200 cursor-pointer">
    Rotate Card 🎡
  </div>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Element ko hover par 5% bada (zoom) karne ke liye kaun si class use hoti hai?',
            options: ['hover:zoom-5', 'hover:scale-105', 'hover:size-plus', 'hover:grow-5'],
            answer: 'hover:scale-105',
            explanation: '`scale-105` transform: scale(1.05) apply karta hai.'
          },
          summary: ['Scale: scale-90, scale-95, scale-100, scale-105, scale-110', 'Rotate: rotate-1, rotate-6, rotate-12, rotate-45, rotate-180', 'Translate: translate-x-*, -translate-y-*']
        },
        {
          id: 'tailwind-animations',
          title: 'Built-in Animations (spin, pulse, ping, bounce)',
          emoji: '🎬',
          xpReward: 25,
          badgeName: 'Animation Maestro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Loading spinner ke liye `animate-spin`, skeleton loader ke liye `animate-pulse`, aur notification beacon ke liye `animate-ping`! Zero custom @keyframes code! 🎬"',
            hint: '💡 Masti Sir: "Custom animations ke liye `tailwind.config.js` mein `theme.extend.animation` use karo!"',
            success: '🎉 Masti Sir: "Tailwind animations ready!"',
            mistake: '😅 Masti Sir: "`animate-bounce` scroll buttons aur attention-grabbing arrows ke liye perfect hai!"'
          },
          englishDef: 'Built-in CSS animations including animate-spin (loading spinners), animate-pulse (skeleton screens), animate-ping (radar notification pings), and animate-bounce (bouncing arrows).',
          hinglishExplain: 'Tailwind 4 popular ready-made animations deta hai: `animate-spin` (loading spinner), `animate-pulse` (skeleton loading placeholders), `animate-ping` (radar sonar effect), aur `animate-bounce` (bouncing indicators).',
          code: `<div class="flex items-center gap-6 p-6 bg-slate-900 rounded-2xl">
  <!-- Spinner -->
  <div class="size-8 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  
  <!-- Pulse Skeleton -->
  <div class="flex-1 space-y-2 animate-pulse">
    <div class="h-3 bg-slate-700 rounded w-3/4"></div>
    <div class="h-3 bg-slate-700 rounded w-1/2"></div>
  </div>

  <!-- Ping Beacon -->
  <span class="relative flex size-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex rounded-full size-3 bg-emerald-500"></span>
  </span>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein loading spinner ghumane ke liye kaun si built-in animation class use hoti hai?',
            options: ['animate-rotate', 'animate-spin', 'animate-turn', 'animate-loading'],
            answer: 'animate-spin',
            explanation: '`animate-spin` infinite 360-degree linear rotation apply karta hai.'
          },
          summary: ['animate-spin: 360deg continuous rotation', 'animate-pulse: Smooth opacity fade in/out (skeletons)', 'animate-ping: Radar beacon sonar effect', 'animate-bounce: Vertical bounce physics']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: ADVANCED TAILWIND & CUSTOMIZATION
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 7: Advanced Tailwind, JIT & Customization',
      lessons: [
        {
          id: 'tailwind-arbitrary',
          title: 'Arbitrary Values & JIT Square Bracket Syntax',
          emoji: '🪄',
          xpReward: 25,
          badgeName: 'JIT Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tailwind scale mein koi exact custom value nahi hai (jaise exact `117px` ya `#1da1f2`)? Square brackets use karo: `top-[117px] bg-[#1da1f2]`! JIT compiler on the fly CSS generate karega! 🚀"',
            hint: '💡 Masti Sir: "Complex grid columns: `grid-cols-[1fr_500px_2fr]` (spaces ki jagah underscore use karo)!"',
            success: '🎉 Masti Sir: "Arbitrary values mastered!"',
            mistake: '😅 Masti Sir: "Square brackets ke andar space mat daalna, underscore `_` use karna!"'
          },
          englishDef: 'Just-In-Time (JIT) arbitrary value syntax using square brackets [value] for one-off pixel values, specific hex colors, custom clamp calculations, and dynamic grid templates.',
          hinglishExplain: 'Tailwind JIT engine allows writing any custom CSS value directly inside square brackets: `bg-[#ff5722]`, `w-[320px]`, `top-[15px]`, `h-[calc(100vh-80px)]`. Isse poori CSS flexibility markup mein hi mil jaati hai.',
          code: `<div class="p-6 bg-[#0f172a] rounded-[20px] border border-[#334155] shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]">
  <h3 class="text-[22px] font-bold text-[#38bdf8]">
    JIT Arbitrary Values
  </h3>
  <p class="text-[#94a3b8] text-[13px] mt-2">
    Exact pixel sizing, custom hex codes, and bespoke box shadows with zero CSS config!
  </p>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind mein exact custom 117px top position likhne ke liye kaun sa syntax use hota hai?',
            options: ['top-117px', 'top=[117px]', 'top-[117px]', 'top:117px'],
            answer: 'top-[117px]',
            explanation: 'Tailwind JIT square brackets `[117px]` syntax use karta hai.'
          },
          summary: ['Colors: bg-[#1da1f2], text-[#ff0055]', 'Dimensions: w-[320px], h-[calc(100vh-64px)]', 'Spaces in arbitrary values are replaced with underscores `_`']
        },
        {
          id: 'tailwind-config',
          title: 'Customizing tailwind.config.js & Theme Extensions',
          emoji: '⚙️',
          xpReward: 25,
          badgeName: 'Config Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Company ka official brand color `#2f8d46` hai? `tailwind.config.js` ke `theme.extend.colors` mein add karo, aur poore project mein `bg-brand` aur `text-brand` ready! 🏢"',
            hint: '💡 Masti Sir: "Always use `theme.extend` instead of `theme` taaki default colors aur utilities overwrite na hon!"',
            success: '🎉 Masti Sir: "Config extensions mastered!"',
            mistake: '😅 Masti Sir: "Agar `extend` ke bina `theme: { colors: {...} }` likhoge toh saare default Tailwind colors delete ho jayenge!"'
          },
          englishDef: 'Extending the design system via tailwind.config.js: custom color palettes, brand fonts, custom breakpoint sizes, and custom animation keyframes.',
          hinglishExplain: '`tailwind.config.js` mein `theme.extend` use karke custom colors, fonts aur animations add kiye jaate hain. Isse poori team standard company design tokens follow karti hai.',
          code: `// ── tailwind.config.js ──
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          900: '#14532d',
        },
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
}`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind ke default colors ko preserve karte hue custom colors add karne ke liye kya use karna chahiye?',
            options: ['theme: { colors: {} }', 'theme: { extend: { colors: {} } }', 'plugins: []', 'custom: { colors: {} }'],
            answer: 'theme: { extend: { colors: {} } }',
            explanation: '`theme.extend` default palette ke sath custom values merge karta hai bina unhe overwrite kiye.'
          },
          summary: ['Use theme.extend to add tokens safely', 'Custom colors, typography, shadows and spacing', 'Reused throughout the entire codebase with standard class prefixes']
        },
        {
          id: 'tailwind-apply',
          title: 'Reusing Styles with @apply & Component Extraction',
          emoji: '📦',
          xpReward: 25,
          badgeName: 'Component Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Jab koi button 50 alag pages pe repeat ho raha ho, toh React component banao ya CSS file mein `@apply` use karo: `.btn-primary { @apply px-4 py-2 bg-blue-600 text-white rounded-lg; }`! 🎯"',
            hint: '💡 Masti Sir: "Modern frontend mein pehli preference reusable React/Vue components hoti hain, aur CSS buttons ke liye `@apply`!"',
            success: '🎉 Masti Sir: "@apply & component extraction crystal clear!"',
            mistake: '😅 Masti Sir: "Har cheez pe `@apply` mat lagao, varna utility-first ka fayda khatam ho jayega!"'
          },
          englishDef: 'Extracting repeated utility clusters into semantic CSS classes using the @apply directive, and balancing CSS extraction with component-based frameworks (React/Vue).',
          hinglishExplain: 'Jab ek hi button ya badge ki 10 classes baar-baar repeat ho rahi hon, toh use `.css` file mein `@apply` directive se ek class bana sakte hain jaise `.btn-primary { @apply bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold; }`.',
          code: `/* ── src/index.css ── */
@layer components {
  .btn-primary {
    @apply bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200;
  }
  
  .badge-tag {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200;
  }
}`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind utilities ko custom CSS class ke andar bundle karne ke liye kaun si directive use hoti hai?',
            options: ['@include', '@apply', '@import-tailwind', '@bundle'],
            answer: '@apply',
            explanation: '`@apply` directive Tailwind utility classes ko regular CSS rules ke andar inline inject karti hai.'
          },
          summary: ['@apply bundles utility classes in CSS', 'Wrap inside @layer components {}', 'React/Vue component abstraction is preferred in modern codebases']
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 8: REAL WORLD PROJECTS & INTERVIEW PREP
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Chapter 8: Real World Projects & Interview Prep',
      lessons: [
        {
          id: 'tailwind-components',
          title: 'Building Production UI Components (Cards, Modals, Badges)',
          emoji: '💎',
          xpReward: 35,
          badgeName: 'UI Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Pricing cards, testimonials, user profile avatars, aur search filters — sab Tailwind ke components se bante hain! Chalo real components assemble karte hain! 🚀"',
            hint: '💡 Masti Sir: "Card structure: Container (shadow + border) ➔ Header (badge + avatar) ➔ Body (title + desc) ➔ Footer (CTA button)!"',
            success: '🎉 Masti Sir: "Production UI components ready!"',
            mistake: '😅 Masti Sir: "Card borders ko subtle rakho: `border border-slate-200/80`!"'
          },
          englishDef: 'Assembling complete production-ready UI components: glassmorphism cards, pricing tiers, testimonial grids, animated badges, and responsive navigation bars.',
          hinglishExplain: 'Real-world websites ke saare essential building blocks (Pricing cards, feature grids, modal dialogs, status badges) Tailwind ke atomic classes ko compose karke banaye jaate hain.',
          code: `<div class="max-w-sm p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition hover:-translate-y-1 duration-200">
  <div class="flex items-center justify-between">
    <span class="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
      PRO PLAN
    </span>
    <span class="text-2xl font-extrabold text-slate-900 dark:text-white">$29<span class="text-xs text-slate-500 font-normal">/mo</span></span>
  </div>
  <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100 mt-4">Fullstack Developer Tier</h3>
  <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Unlimited access to all courses, projects, and interview simulators.</p>
  <button class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl shadow transition">
    Upgrade Now 🚀
  </button>
</div>`,
          quiz: {
            type: 'mcq',
            question: 'Card component ko hover karne par subtle float effect dene ke liye kaun si combination best hai?',
            options: [
              'hover:-translate-y-1 hover:shadow-xl transition duration-200',
              'float-up-card',
              'card-hover-float',
              'hover:margin-top-minus'
            ],
            answer: 'hover:-translate-y-1 hover:shadow-xl transition duration-200',
            explanation: '`-translate-y-1` element ko 4px upar uthata hai aur `shadow-xl` drop shadow enhance karta hai.'
          },
          summary: ['Composed UI: Pricing, Feature Cards, Avatars', 'Clean typography hierarchy & contrasting badges', 'Micro-interactions with transform & shadows']
        },
        {
          id: 'tailwind-interview',
          title: 'Top Technical Interview Questions & Answers',
          emoji: '🎯',
          xpReward: 35,
          badgeName: 'Tailwind Interview Ready',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Frontend developer interviews mein Tailwind ke JIT engine, CSS Purging, Specificity issues aur Tailwind vs CSS Modules par sawal zaroor aate hain! Ready ho jao! 🎯"',
            hint: '💡 Masti Sir: "JIT ka main benefit: Zero unused CSS generated in production bundle!"',
            success: '🎉 Masti Sir: "Interview questions master ho gaye! Level up! 🏆"',
            mistake: '😅 Masti Sir: "Interview mein explain karo ki Tailwind CSS file size build time par content scanning ke through tiny (under 10kB) rehta hai!"'
          },
          englishDef: 'Comprehensive compilation of essential Tailwind CSS technical interview questions covering the JIT compiler, tree-shaking / purge mechanism, arbitrary values, dark mode strategy, and performance optimization.',
          hinglishExplain: 'Tailwind interview preparation guide jisme JIT architecture, CSS Purging, CSS specificity handling, tailwind.config.js extensions aur Tailwind v3 vs v4 ke top questions explain kiye gaye hain.',
          code: `/* ══════════════════════════════════════════════
   TOP TAILWIND CSS INTERVIEW CONCEPTS
   ══════════════════════════════════════════════ */

// Q1: How does Tailwind JIT (Just-In-Time) compiler work?
// A: It scans your code files on demand and generates only
//    the exact CSS classes you use, making the final bundle <10kB!

// Q2: Why is Tailwind better than traditional BEM CSS?
// A: 1. No naming fatigue (.header-btn-wrapper-v2)
//    2. CSS bundle stops growing as your site gets larger
//    3. Safe changes — modifying one component never breaks another!

// Q3: How do you handle dynamic classes in React with Tailwind?
// A: Do NOT concatenate partial class names like \`bg-\${color}-500\`.
//    Use complete class names or clsx / twMerge:
//    twMerge('px-4 py-2 bg-blue-600', isPrimary && 'bg-indigo-600')`,
          interviewQuestions: [
            'How does the Tailwind JIT engine optimize production bundle sizes?',
            'What is the difference between Tailwind CSS and Bootstrap?',
            'Why should you avoid string interpolation in Tailwind class names?'
          ],
          quiz: {
            type: 'mcq',
            question: 'React mein Tailwind dynamic class conditionally apply karne ke liye kaun si library standard hai?',
            options: ['clsx / tailwind-merge (twMerge)', 'css-dynamic', 'tailwind-inject', 'style-combiner'],
            answer: 'clsx / tailwind-merge (twMerge)',
            explanation: '`clsx` aur `tailwind-merge` conflicting Tailwind classes ko intelligently resolve karte hain.'
          },
          summary: ['JIT compiler delivers instant build speeds and micro bundle sizes', 'Avoid broken dynamic string interpolation', 'twMerge resolves utility conflicts in React']
        },
        {
          id: 'tailwind-project',
          title: 'Mini Project: Modern SaaS Landing Page with Dark Mode',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'Tailwind Master Builder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab poora Tailwind combine karke ek Modern SaaS Landing Page banao! Sticky Flexbox Navbar, Hero Section, Feature Grid, Pricing Cards aur Dark Mode ready styling! 🚀"',
            hint: '💡 Masti Sir: "Containers ko `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` do for standard responsive alignment!"',
            success: '🎉 Masti Sir: "PROJECT COMPLETE! 🎉 Tumne ek complete production-grade Tailwind website banayi hai! 🏆"',
            mistake: '😅 Masti Sir: "Mobile navigation aur grid responsive breakpoints check karna mat bhoolna!"'
          },
          englishDef: 'Build a production-ready, fully responsive SaaS Landing Page combining all core Tailwind principles: sticky navbar, gradient hero typography, 2D responsive feature grid, pricing tier cards, and dark mode support.',
          hinglishExplain: 'Ab tak seekhe gaye sabhi Tailwind concepts (Flexbox navbar, Hero text gradients, 3-column auto grid, Pricing card, Hover transitions aur Dark mode) ko jodkar ek complete Landing Page banao.',
          code: `<!-- Complete Modern SaaS Landing Page (Tailwind CSS) -->
<div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased">
  
  <!-- 1. Sticky Navigation Bar -->
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2 font-black text-xl text-indigo-600 dark:text-indigo-400">
        <span class="p-1.5 bg-indigo-100 dark:bg-indigo-950/70 rounded-lg">⚡</span> CodeMasti
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
        <a href="#features" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Features</a>
        <a href="#pricing" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Pricing</a>
        <a href="#courses" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">Courses</a>
      </div>
      <div class="flex items-center gap-3">
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:shadow transition">
          Get Started 🚀
        </button>
      </div>
    </div>
  </nav>

  <!-- 2. Hero Section -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-6">
      🚀 Tailwind CSS v3.4 Masterclass
    </span>
    <h1 class="text-4xl sm:text-6xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
      Build Stunning Web Apps <br class="hidden sm:inline" />
      <span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        At Lightning Speed
      </span>
    </h1>
    <p class="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
      Utility-first CSS framework for rapid UI development. Responsive, customizable, and production-optimized out of the box.
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition">
        Start Free Trial
      </button>
      <button class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold px-8 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition">
        Live Demo
      </button>
    </div>
  </section>

  <!-- 3. Feature Cards Grid -->
  <section id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div class="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition">
        <div class="size-12 bg-blue-100 dark:bg-blue-950/60 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4">
          📦
        </div>
        <h3 class="text-lg font-bold">Utility-First</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Compose low-level atomic classes directly in HTML without writing custom CSS.
        </p>
      </div>

      <div class="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition">
        <div class="size-12 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-4">
          📱
        </div>
        <h3 class="text-lg font-bold">Responsive by Default</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Mobile-first conditional breakpoint modifiers (sm, md, lg, xl) built-in.
        </p>
      </div>

      <div class="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition">
        <div class="size-12 bg-purple-100 dark:bg-purple-950/60 text-purple-600 rounded-xl flex items-center justify-center text-xl mb-4">
          🌙
        </div>
        <h3 class="text-lg font-bold">Dark Mode Ready</h3>
        <p class="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Transform any component into dark theme with the simple <code class="text-xs bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">dark:</code> prefix.
        </p>
      </div>

    </div>
  </section>

</div>`,
          challenge: {
            instruction: 'Complete landing page banao jisme navbar (flex), hero section (text-center, gradient), aur feature cards (grid) included hon.',
            initialCode: `<div class="min-h-screen bg-slate-50 p-6 font-sans">
  <!-- 1. Navbar -->
  <nav class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
    <div class="font-bold text-indigo-600 text-lg">⚡ My Brand</div>
    <div class="flex gap-4 text-sm font-medium text-slate-600">
      <a href="#" class="hover:text-indigo-600">Home</a>
      <a href="#" class="hover:text-indigo-600">Features</a>
      <a href="#" class="hover:text-indigo-600">Pricing</a>
    </div>
    <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-indigo-700">
      Join Now
    </button>
  </nav>

  <!-- 2. Hero -->
  <div class="text-center py-16">
    <h1 class="text-4xl font-extrabold text-slate-900">
      Build Modern Web Apps with <span class="text-indigo-600">Tailwind CSS</span>
    </h1>
    <p class="text-slate-600 mt-4 max-w-xl mx-auto text-sm">
      Rapidly build responsive websites without writing a single line of custom CSS.
    </p>
    <button class="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow">
      Get Started 🚀
    </button>
  </div>

  <!-- 3. Features Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 class="font-bold text-slate-900">Fast Development</h3>
      <p class="text-slate-500 text-sm mt-1">Write utility classes directly in markup.</p>
    </div>
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 class="font-bold text-slate-900">Responsive Layouts</h3>
      <p class="text-slate-500 text-sm mt-1">Mobile-first breakpoint modifiers built-in.</p>
    </div>
    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <h3 class="font-bold text-slate-900">Dark Mode Ready</h3>
      <p class="text-slate-500 text-sm mt-1">Seamless dark mode integration with dark: prefix.</p>
    </div>
  </div>
</div>`,
            validator: (code) => {
              const n = code.toLowerCase()
              return n.includes('flex') && n.includes('grid') && n.includes('bg-') && n.includes('text-')
            },
            successMessage: '🎉 TAILWIND CAPSTONE PROJECT COMPLETE! +50 XP! Tailwind Master Builder Badge Earned! 🏆'
          },
          summary: ['Complete SaaS landing page built purely with Tailwind utilities', 'Sticky frosted navbar with Flexbox', '2D responsive card grid with hover micro-interactions']
        },
        {
          id: 'tailwind-cheatsheet',
          title: 'Complete Tailwind CSS Utility Cheat Sheet & Quick Reference',
          emoji: '📋',
          xpReward: 25,
          badgeName: 'Tailwind Reference Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Tailwind Master Reference Sheet — Jab bhi koi class bhool jao (spacing, colors, flexbox, grid, breakpoints, transitions) — yahan instant look up karo! Congratulations, tumne poora Tailwind CSS master kar liya! 🏆🎉"',
            hint: '💡 Masti Sir: "Is reference sheet ko bookmark karo!"',
            success: '🎉 Masti Sir: "Tailwind CSS Course 100% Completed! 🏆"',
            mistake: '😅 Masti Sir: "Regular practice se saari classes subconscious memory mein set ho jayengi!"'
          },
          englishDef: 'Complete reference index of core Tailwind CSS utilities across Layout, Spacing, Sizing, Typography, Backgrounds, Borders, Effects, Transforms, and Responsive Breakpoints.',
          hinglishExplain: 'Tailwind CSS ka complete quick reference guide jisme har category ki most important utilities compiled hain.',
          code: `/* ══════════════════════════════════════════════
   TAILWIND CSS MASTER UTILITY CHEAT SHEET
   ══════════════════════════════════════════════ */

// 1. LAYOUT & FLEXBOX
flex, inline-flex, flex-col, flex-row, flex-wrap
justify-start, justify-center, justify-between, justify-end
items-start, items-center, items-end, items-baseline
gap-1 to gap-12, flex-1, flex-auto, flex-none

// 2. CSS GRID
grid, grid-cols-1 to grid-cols-12
col-span-1 to col-span-12, col-span-full
gap-x-*, gap-y-*

// 3. SPACING & SIZING
p-*, px-*, py-*, pt-*, pb-*, pl-*, pr-* (1 = 4px)
m-*, mx-*, my-*, mt-*, mb-*, ml-*, mr-*, -m*
w-*, w-full, w-1/2, w-screen, max-w-sm to max-w-7xl
h-*, h-full, h-screen, min-h-screen, size-*

// 4. TYPOGRAPHY
text-xs (12px), text-sm (14px), text-base (16px), text-lg (18px)
text-xl (20px), text-2xl (24px), text-4xl (36px), text-6xl (60px)
font-light (300), font-normal (400), font-semibold (600), font-bold (700), font-black (900)
leading-none, leading-tight, leading-normal, leading-relaxed
tracking-tighter, tracking-tight, tracking-wide, tracking-widest

// 5. COLORS & BACKGROUNDS
bg-{color}-{50..950}, bg-{color}/{opacity}
text-{color}-{50..950}, text-{color}/{opacity}
bg-gradient-to-{t|tr|r|br|b|bl|l|tl}
from-*, via-*, to-*, bg-clip-text text-transparent

// 6. BORDERS & SHADOWS
border, border-2, border-4, border-{color}
rounded-none, rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-full
ring-1, ring-2, ring-offset-2, ring-{color}
shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl

// 7. RESPONSIVE BREAKPOINTS (Mobile-First)
sm: (640px+), md: (768px+), lg: (1024px+), xl: (1280px+), 2xl: (1536px+)

// 8. STATE VARIANTS
hover:*, focus:*, active:*, disabled:*, group, group-hover:*, peer, peer-checked:*
dark:* (Dark Mode Variant)`,
          quiz: {
            type: 'mcq',
            question: 'Tailwind CSS mein 1 unit spacing kitne pixels ke barabar hoti hai?',
            options: ['2px', '4px', '8px', '16px'],
            answer: '4px',
            explanation: '1 unit = 0.25rem = 4px.'
          },
          summary: ['Complete utility index for quick lookup', 'Covers Layout, Typography, Colors, Borders, Transforms, Dark Mode', 'Bookmark this cheat sheet for daily frontend development']
        }
      ]
    }
  ]
}

export default tailwindCourse
