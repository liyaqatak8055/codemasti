export const performanceCourse = {
  id: 'performance',
  title: 'Web Performance & Optimization',
  description: 'Website ko 100/100 Rocket Speed do! Core Web Vitals (LCP, INP, CLS, TTFB), Critical Rendering Path, Layout Thrashing, Chrome DevTools Profiling, Code Splitting, Responsive AVIF/WebP, HTTP/3, Edge Caching, Web Workers, React Optimization & Production Capstone Masti Sir style mein!',
  icon: '⚡',
  category: 'frontend',
  certificateName: 'WEB PERFORMANCE & OPTIMIZATION',
  topicsCount: 75,
  practiceCount: 90,
  projectsCount: 16,
  hoursEstimate: 30,
  level: 'Intermediate to Advanced',
  chapters: [
    {
      chapterTitle: 'Chapter 1: Core Web Vitals, Critical Rendering Path & Metrics Deep Dive',
      lessons: [
        {
          id: 'perf-core-web-vitals',
          title: 'Core Web Vitals (LCP, INP, CLS, TTFB) & Critical Rendering Path',
          emoji: '📊',
          xpReward: 45,
          badgeName: 'Speed Demon',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Website slow hai? Pehle measure karo bhai! Andaza laga ke optimization karna aisa hai jaise mechanic bina car dekhe bole \'Engine change kar do\'! LCP, INP aur CLS ko green zone mein laao aur Google search pe top rank pao! 😎"',
            hint: '💡 Masti Sir: "LCP (Loading speed < 2.5s), INP (Click response < 200ms), CLS (Visual stability < 0.1) — ye 3 metrics Google ke sabse favorite indicators hain!"',
            success: '🎉 Masti Sir: "Lighthouse Score: 100 🟢 All Core Web Vitals passed in the Green Zone!"',
            mistake: '😅 Masti Sir: "Images pe width aur height specify na karne se jab image late aati hai toh poora text jump kar jata hai — isko Cumulative Layout Shift (CLS) disaster kehte hain!"'
          },
          englishDef: 'Core Web Vitals are Google\'s standardized real-user metrics: Largest Contentful Paint (LCP < 2.5s for load performance), Interaction to Next Paint (INP < 200ms for UI responsiveness), and Cumulative Layout Shift (CLS < 0.1 for visual stability). The Critical Rendering Path converts HTML/CSS/JS into rendered pixels via DOM, CSSOM, Render Tree, Layout, Paint, and Composite.',
          hinglishExplain: 'Google Core Web Vitals ke basis par website ki user experience aur search ranking decide karta hai. LCP batata hai ki page ka main bada content (hero banner/heading) kitni jaldi load hua, INP batata hai ki user ke button click karne par UI kitni tezi se react karta hai, aur CLS batata hai ki load hote waqt elements achanak jump toh nahi karte.',
          storyExplain: 'Socho tum newspaper padh rahe ho. LCP: Headline kitni jaldi print hui. INP: Page palatne par kitni jaldi naya article dikha. CLS: Tum article padh rahe the aur achanak upar ek late ad inject ho gaya jisse poora text niche khisak gaya aur tumhara concentration toot gaya! 😠 CLS ko 0 rakhna sabse zaroori hai!',
          funnyExample: {
            scenario: 'User "Cancel Order" button dabane ja raha tha. Achanak late-loading ad pop hua aur button niche shift ho gaya -> User ne galti se "Confirm Buy $500" pe click kar diya! 😱\n(High CLS Disaster)\nSolution: Reserve space with CSS `aspect-ratio: 16 / 9`!',
            punchline: 'CLS prevention stops accidental wrong clicks and saves users money!'
          },
          memoryTrick: 'Core Web Vitals Thresholds:\n1. LCP (Largest Contentful Paint) < 2.5s 🟢\n2. INP (Interaction to Next Paint) < 200ms 🟢\n3. CLS (Cumulative Layout Shift) < 0.1 🟢\n4. TTFB (Time to First Byte) < 800ms 🟢',
          visualDiagram: {
            title: 'Critical Rendering Path Pipeline',
            nodes: ['HTML Parser -> DOM Tree', 'CSS Parser -> CSSOM Tree', 'DOM + CSSOM -> Render Tree', 'Layout (Calculate Geometry & Coordinates)', 'Paint (Fill Pixels)', 'Composite (GPU Layers to Screen)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Chrome Measures Web Vitals with PerformanceObserver:',
            steps: ['Browser PerformanceObserver records paint timing entries', 'Calculates layout shift scores using geometry delta', 'Measures event loop latency during input dispatch (INP)', 'Reports Field Data via CrUX (Chrome User Experience Report)']
          },
          code: `// Measuring Core Web Vitals with standard 'web-vitals' library
import { onLCP, onINP, onCLS, onTTFB, onFCP } from 'web-vitals';

function sendToAnalytics(metric) {
  const payload = JSON.stringify({
    name: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
    delta: metric.delta,
    id: metric.id
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics/vitals', payload);
  } else {
    fetch('/api/analytics/vitals', { body: payload, method: 'POST', keepalive: true });
  }

  console.log(\`⚡ [\${metric.name}] Value: \${metric.value} (Rating: \${metric.rating})\`);
}

// Register real-user monitoring (RUM) listeners
onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
onTTFB(sendToAnalytics);
onFCP(sendToAnalytics);`,
          codeBreakdown: [
            { part: 'onLCP(sendToAnalytics)', label: 'Tracks Largest Contentful Paint timing in milliseconds', color: '#3b82f6' },
            { part: 'onINP(sendToAnalytics)', label: 'Measures responsiveness latency across all user interactions on the page', color: '#10b981' },
            { part: 'navigator.sendBeacon(...)', label: 'Asynchronously transmits telemetry data without blocking page unload', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Lazy loading the above-the-fold hero image (delays LCP by 2+ seconds — use `fetchpriority="high"` instead)',
            '❌ Missing explicit `width` and `height` attributes on images and iframes (causes layout shifts / high CLS)',
            '❌ Blocking the main thread with long synchronous JavaScript tasks > 50ms (destroys INP score)'
          ],
          proTips: [
            '💡 Preload critical LCP assets: `<link rel="preload" as="image" href="hero.webp" fetchpriority="high">`',
            '💡 Use `aspect-ratio: 16 / 9` and `content-visibility: auto` in CSS for instant layout stability'
          ],
          interviewQuestions: [
            'What are Core Web Vitals, what are their ideal threshold values, and how do they impact Google SEO ranking?',
            'What replaced FID (First Input Delay) in Core Web Vitals in 2024 and why? (INP - Interaction to Next Paint)',
            'Explain the Critical Rendering Path step-by-step and how render-blocking CSS and JavaScript affect it.'
          ],
          miniChallenge: 'Run Chrome DevTools Lighthouse audit on any website, record the LCP and CLS scores, and identify the top 3 recommendations.',
          quiz: {
            type: 'mcq',
            question: 'Google Core Web Vitals ke hisab se ek good Largest Contentful Paint (LCP) score kitna hona chahiye?',
            options: ['Less than 2.5 seconds', 'Less than 5.0 seconds', 'Less than 10.0 seconds', 'Under 50 milliseconds'],
            answer: 'Less than 2.5 seconds',
            explanation: 'Google specifies that an LCP under 2.5 seconds represents a good user experience.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Metric name fill karo:',
              sentence: '2024 mein FID (First Input Delay) ko replace karke Google ne ___ ko primary interactivity metric banaya.',
              answer: 'INP',
              explanation: 'INP (Interaction to Next Paint) measures responsiveness across the entire page lifecycle.'
            }
          ],
          summary: ['LCP measures loading speed (< 2.5s)', 'INP measures interaction responsiveness (< 200ms)', 'CLS measures visual stability (< 0.1)', 'SendBeacon safely logs RUM data'],
          flashcard: { q: 'What is INP?', a: 'Interaction to Next Paint: Measures the longest interaction latency (tap, click, keydown) on a webpage from input to painted frame.' },
          funFact: 'Google found that improving page load speed by just 0.1s can boost retail e-commerce conversions by up to 8%!',
          didYouKnow: 'Lab data (Lighthouse in DevTools) simulates a Moto G4 on a throttled 4G network, while Field Data (CrUX) records actual real-world user metrics.',
          realWorldUseCases: ['E-commerce checkout speed optimization', 'News portal SEO ranking', 'SaaS application perceived performance', 'Mobile web responsiveness'],
          practiceQuestions: [
            'Install the Web Vitals Chrome Extension and inspect real-time metrics',
            'Fix a high CLS issue caused by dynamic ad injection'
          ]
        },
        {
          id: 'perf-rendering-dom-layout-thrashing',
          title: 'DOM Performance, Reflow, Layout Thrashing & GPU Compositing',
          emoji: '🏎️',
          xpReward: 50,
          badgeName: '60 FPS Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Browser mein 60 FPS animation chahiye? Har frame ke liye sirf 16.6 milliseconds ka time milta hai! Layout Thrashing ko eliminate karo aur GPU layers ka jaadu dekho!"',
            hint: '💡 Masti Sir: "CSS `top/left` ko bhool jao, `transform: translate3d()` aur `opacity` use karo — ye CPU Layout aur Paint dono ko bypass karke direct GPU composite pe chalta hai!"',
            success: '🎉 Masti Sir: "Silky smooth 60 FPS achieved! Buttery animations running effortlessly!"',
            mistake: '😅 Masti Sir: "Loop ke andar `element.offsetWidth` read karna aur turant `element.style.width` write karna — isko forced synchronous layout yaani Layout Thrashing kehte hain!"'
          },
          englishDef: 'Reflow (Layout) calculates element geometry and is the most CPU-intensive rendering step. Layout Thrashing occurs when JavaScript repeatedly interleaves DOM reads and writes in rapid succession. GPU Compositing offloads layer rendering to the hardware graphics pipeline, achieving 60/120 FPS.',
          hinglishExplain: 'Jab bhi aap DOM mein kisi element ki width, height ya position change karte ho, browser ko poore page ka geometry map dobara calculate karna padta hai (Reflow). Agar aap loop mein ek element ki width read kar ke doosre ko set karoge, toh browser har step pe force layout karega jisse frame drops aur stutter hoga. Solution: Saare READ operations pehle batch karo, phir saare WRITE operations `requestAnimationFrame` mein execute karo.',
          storyExplain: 'Socho tum ek painting gallery organize kar rahe ho. Har baar ek nayi painting aati hai aur tum baaki sab paintings ko utaar ke scale se dobara naapne lag jaate ho (Layout Thrashing). Iski jagah saari nayi paintings ka size pehle hi ek list mein note kar lo (Batch Reads) aur shaam ko ek hi baar sabko wall pe hang kar do (Batch Writes)!',
          funnyExample: {
            scenario: 'User page scroll kar raha tha aur UI 15 FPS pe atak atak ke chal rahi thi jaise 2005 ka video game chal raha ho! 🕹️\nReason: Scroll listener mein bina throttling ke `getBoundingClientRect()` call ho raha tha!\nFix: Use `IntersectionObserver` or `requestAnimationFrame` debounce!',
            punchline: 'Batch reads and writes to keep your frames running at 60 FPS!'
          },
          memoryTrick: 'Rendering Cost Tier List:\n1. Transform & Opacity: GPU Compositor Only (Cheapest / 60-120fps) 🚀\n2. Color / Background: Paint + Composite (Medium cost) 🎨\n3. Width / Height / Top / Left / Margin: Layout + Paint + Composite (Most Expensive!) 🐢',
          visualDiagram: {
            title: 'Layout Thrashing vs Batch Execution',
            nodes: ['Bad: Read -> Write -> Read -> Write (4 Reflows)', 'Good: Read -> Read -> Read (0 Reflows)', 'Batch Write via requestAnimationFrame (1 Single Reflow)', 'GPU Hardware Composite Layer (60 FPS)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Chrome DevTools Performance Panel Tracks Long Tasks:',
            steps: ['Chrome records Main Thread Flame Chart activity', 'Marks any task taking > 50ms with a red warning corner (Long Task)', 'Identifies "Forced reflow is a likely bottleneck" with direct source-code line linkage', 'Shows Compositor Thread vs Main Thread frame breakdowns']
          },
          code: `// FastDOM pattern: Eliminating Layout Thrashing
// ❌ SLOW: Triggers 100 forced synchronous reflows
function slowDOMUpdate(items) {
  const elements = document.querySelectorAll('.card');
  elements.forEach((el, index) => {
    const height = el.clientHeight; // READ: Forces browser to calculate layout
    el.style.height = (height + 10) + 'px'; // WRITE: Invalidates layout immediately!
  });
}

// ✅ FAST: Batched Reads + requestAnimationFrame Writes (1 Reflow)
function fastDOMUpdate(items) {
  const elements = Array.from(document.querySelectorAll('.card'));
  
  // Phase 1: Batch all READS
  const currentHeights = elements.map(el => el.clientHeight);

  // Phase 2: Batch all WRITES synced with next frame render
  requestAnimationFrame(() => {
    elements.forEach((el, index) => {
      el.style.height = \`\${currentHeights[index] + 10}px\`;
    });
  });
}

// GPU Layer Promotion with CSS will-change
const animatedCard = document.querySelector('.card-animated');
animatedCard.style.willChange = 'transform, opacity';
animatedCard.style.transform = 'translate3d(0, 0, 0)'; // Promotes to hardware layer`,
          codeBreakdown: [
            { part: 'el.clientHeight', label: 'Geometry read that triggers synchronous layout if previous styles were invalidated', color: '#ef4444' },
            { part: 'requestAnimationFrame(...)', label: 'Schedules writes directly before the browser next screen repaint', color: '#10b981' },
            { part: 'willChange = "transform, opacity"', label: 'Hints to browser compositor to promote element to its own GPU render layer', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Using `scroll` event listeners without passive flags (`{ passive: true }`) or throttle wrappers',
            '❌ Animating `top`, `left`, `margin`, `width` instead of `transform: translate()` and `scale()`',
            '❌ Overusing `will-change: transform` on hundreds of elements (consumes massive GPU VRAM)'
          ],
          proTips: [
            '💡 Use `IntersectionObserver` instead of calculating scroll offsets with `getBoundingClientRect()`',
            '💡 Toggle Chrome DevTools > Rendering > "Paint Flashing" and "Layout Shift Regions" to visually debug live re-paints'
          ],
          interviewQuestions: [
            'What causes Layout Thrashing (Forced Synchronous Layout) in JavaScript?',
            'What is the difference between the Browser Main Thread and the Compositor Thread?',
            'When should you use `will-change` in CSS and what are its performance trade-offs?'
          ],
          miniChallenge: 'Open Chrome DevTools Rendering panel, turn on "Frame Rendering Stats", and scroll a web page to observe FPS and GPU memory.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa browser method DOM writes ko screen refresh rate (60Hz/120Hz) ke sath synchronize karke layout thrashing prevent karta hai?',
            options: ['setTimeout', 'requestAnimationFrame', 'setImmediate', 'setInterval'],
            answer: 'requestAnimationFrame',
            explanation: 'requestAnimationFrame pauses execution until right before the browser performs its next screen repaint.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'CSS property fill karo:',
              sentence: 'Browser ko GPU hardware layer promote karne ka hint dene ke liye `___: transform, opacity;` use karte hain.',
              answer: 'will-change',
              explanation: 'will-change informs the browser to allocate dedicated compositor layers.'
            }
          ],
          summary: ['Reflow is the most expensive rendering phase', 'Layout thrashing happens when reads and writes alternate repeatedly', 'Batch reads then writes in requestAnimationFrame', 'Promote animated layers to GPU compositor'],
          flashcard: { q: 'What is Passive Event Listener?', a: 'Adding `{ passive: true }` to touch/wheel listeners informs the browser the callback will not call `preventDefault()`, allowing instantaneous scrolling without blocking.' },
          funFact: 'A 60Hz display refreshes every 16.67ms; a 120Hz ProMotion display gives the browser only 8.33ms per frame!',
          didYouKnow: 'Transform and opacity animations run on the GPU Compositor thread, meaning they can continue running smoothly even if the JavaScript main thread is completely frozen!',
          realWorldUseCases: ['Smooth drag-and-drop kanban boards', 'Infinite scrolling feeds (Instagram/Twitter)', 'Parallax scrolling animations', 'Interactive charting dashboards'],
          practiceQuestions: [
            'Refactor a scroll-based progress bar to use requestAnimationFrame',
            'Use IntersectionObserver to implement lazy loading without scroll events'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 2: Image, Video & Media Optimization',
      lessons: [
        {
          id: 'perf-image-optimization',
          title: 'Next-Gen Images (AVIF, WebP), Responsive `<picture>` & Native Lazy Loading',
          emoji: '🖼️',
          xpReward: 45,
          badgeName: 'Pixel Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Average website ka 60% weight un-optimized images ki wajah se hota hai! JPEG aur PNG se AVIF/WebP pe switch karo aur 80% payload bachaao!"',
            hint: '💡 Masti Sir: "Above-the-fold hero image ko lazy load mat karna — uspar `fetchpriority=\'high\'` lagao!"',
            success: '🎉 Masti Sir: "Images 5MB se 150KB ho gayi bina kisi visual quality loss ke!"',
            mistake: '😅 Masti Sir: "Mobile screen pe 4K desktop resolution image serve kar rahe ho? Responsive `srcset` use karo!"'
          },
          englishDef: 'Image optimization reduces payload via modern compression algorithms (AVIF provides ~50% savings over JPEG; WebP ~30%), responsive selection using `<picture>` and `srcset`, aspect-ratio reservation for zero CLS, and native `loading="lazy"`.',
          hinglishExplain: 'JPEG/PNG bohot purane format hain. Modern formats jaise AVIF aur WebP same image quality ko 70-80% chhote file size mein deliver karte hain. `<picture>` tag browser ko allow karta hai ki agar browser AVIF support karta hai toh AVIF download kare, warna WebP ya JPEG fallback de. Mobile users ko chhota image aur desktop users ko bada image bhejne ke liye `srcset` aur `sizes` use hota hai.',
          storyExplain: 'Socho tum Courier service chala rahe ho. Ek packet mein hawa bhari hui hai (PNG) aur doosre packet ko vacuum seal karke compress kar diya (AVIF). Dono mein same shirt hai, par vacuum sealed packet delivery bike pe 10x kam jagah leta hai!',
          funnyExample: {
            scenario: 'User 2G network pe tha aur website ne 10MB ki uncompressed PNG image load karni shuru ki. User ne phone band karke chai peene chala gaya! ☕\nFix: Convert to AVIF (120KB) + `loading="lazy"`!',
            punchline: 'Modern image formats save mobile data and prevent user churn!'
          },
          memoryTrick: 'Image Optimization Checklist:\n1. Format: AVIF > WebP > JPEG/PNG\n2. Sizing: `srcset` and `sizes` for device width\n3. Loading: `loading="lazy"` for below-the-fold, `fetchpriority="high"` for hero banner\n4. Dimensions: Explicit `width`, `height`, or `aspect-ratio` to kill CLS',
          visualDiagram: {
            title: 'Modern Responsive Picture Element Fallback Tree',
            nodes: ['`<picture>` Tag', '`<source type="image/avif">` (Best compression)', '`<source type="image/webp">` (Secondary modern)', '`<img>` Fallback (Universal JPEG/PNG + Dimensions)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Browser Selects from `<picture>` and `srcset`:',
            steps: ['Browser inspects viewport width (e.g. 390px mobile)', 'Checks device pixel ratio (DPR: 2x/3x)', 'Calculates required image slot width via `sizes` attribute', 'Picks best supported format and smallest matching resolution file']
          },
          code: `<!-- Production Modern Responsive & Optimized Image Markup -->
<picture>
  <!-- 1. Next-Gen AVIF for modern browsers (Chrome, Firefox, Safari 16+) -->
  <source
    type="image/avif"
    srcset="/images/hero-400.avif 400w, /images/hero-800.avif 800w, /images/hero-1600.avif 1600w"
    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 1200px"
  />

  <!-- 2. WebP Fallback for older browsers -->
  <source
    type="image/webp"
    srcset="/images/hero-400.webp 400w, /images/hero-800.webp 800w, /images/hero-1600.webp 1600w"
    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 1200px"
  />

  <!-- 3. Standard Fallback img with explicit dimensions and priority -->
  <img
    src="/images/hero-800.jpg"
    alt="CodeMasti Learning Platform"
    width="1600"
    height="900"
    fetchpriority="high"
    decoding="async"
    style="width: 100%; height: auto; aspect-ratio: 16 / 9;"
  />
</picture>`,
          codeBreakdown: [
            { part: 'type="image/avif"', label: 'Delivers bleeding-edge compression (AV1 image file format)', color: '#3b82f6' },
            { part: 'fetchpriority="high"', label: 'Tells browser preload scanner this is critical LCP hero image', color: '#10b981' },
            { part: 'aspect-ratio: 16 / 9', label: 'Reserves vertical placeholder space immediately before image downloads (0 CLS)', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Putting `loading="lazy"` on above-the-fold Hero images (causes severe LCP delay)',
            '❌ Omitting `width` and `height` attributes on `<img>` tags',
            '❌ Serving un-compressed raw camera photos (3000x2000px) in small 100x100 thumbnail containers'
          ],
          proTips: [
            '💡 Use Sharp or Squoosh CLI in your build pipeline to automate AVIF/WebP batch conversions',
            '💡 In Next.js, always use `next/image` which automatically handles WebP/AVIF generation, sizing, and lazy loading'
          ],
          interviewQuestions: [
            'What is the difference between AVIF and WebP image formats?',
            'How do the `srcset` and `sizes` attributes work together in responsive images?',
            'Why should you never lazy-load the Largest Contentful Paint (LCP) image?'
          ],
          miniChallenge: 'Convert a 2MB JPEG image to AVIF using squoosh.app and observe the file size reduction and quality comparison.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa modern image format JPEG ke comparison mein approximately 50% tak better compression provide karta hai?',
            options: ['BMP', 'AVIF', 'GIF', 'TIFF'],
            answer: 'AVIF',
            explanation: 'AVIF is derived from the AV1 video codec and delivers industry-leading image compression efficiency.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'HTML attribute fill karo:',
              sentence: 'Critical LCP hero image ko highest network priority dene ke liye `___="high"` use karte hain.',
              answer: 'fetchpriority',
              explanation: 'fetchpriority="high" boosts resource download priority.'
            }
          ],
          summary: ['AVIF & WebP slash image payloads by 50-80%', '<picture> and srcset deliver perfect device-sized assets', 'aspect-ratio prevents layout shift', 'Never lazy load above-the-fold LCP hero images'],
          flashcard: { q: 'What is decoding="async"?', a: 'An image attribute that offloads image decoding from the main thread to a background thread, preventing UI jank.' },
          funFact: 'Netflix uses AVIF for their entire movie poster catalog, saving petabytes of bandwidth daily!',
          didYouKnow: 'SVG is XML-based vector graphics, meaning SVGs scale infinitely without any resolution loss or pixelation.',
          realWorldUseCases: ['E-commerce product galleries', 'Photography portfolio sites', 'Social media feed image streams', 'High-DPI retina display branding'],
          practiceQuestions: [
            'Implement responsive <picture> with AVIF, WebP, and JPG fallbacks',
            'Optimize an SVG logo using SVGO'
          ]
        },
        {
          id: 'perf-media-streaming',
          title: 'Video, Audio & SVG Optimization (HLS, Byte-Range & Vector Minification)',
          emoji: '🎬',
          xpReward: 50,
          badgeName: 'Media Streamer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "500MB ka video file direct `<video src>` mein daal diya? User ka data pack khatam! HLS Adaptive Bitrate Streaming aur Byte-Range requests seekho!"',
            hint: '💡 Masti Sir: "User ka internet slow ho toh 360p, fast ho toh 1080p — isko Adaptive Bitrate Streaming (HLS) kehte hain!"',
            success: '🎉 Masti Sir: "Instant video playback without buffering lag!"',
            mistake: '😅 Masti Sir: "Inline SVG mein Illustrator ka garbage XML metadata chhod diya? SVGO se clean karo!"'
          },
          englishDef: 'Media optimization spans Adaptive Bitrate Streaming (HLS / DASH with `.m3u8` playlists), HTTP 206 Partial Content Byte-Range requests for audio/video seeking, and SVGO vector minification to strip metadata and compress paths.',
          hinglishExplain: 'Agar aap poora MP4 video ek sath download karwaoge toh user ko initial play button dabane ke baad 10 second wait karna padega. HLS (HTTP Live Streaming) video ko 6-second ke chhote `.ts` chunks mein divide kar deta hai. Browser sirf wahi chunk download karta hai jo user dekh raha hai. SVGO tool SVG vectors se unwanted metadata aur coordinates clean karta hai.',
          storyExplain: 'Direct MP4 = Poori 200 episode ki web series ek hi giant box mein courier karna (pehle pura box receive karo tab dekho). HLS Streaming = Har episode ke 5-5 minute ke clip zaroorat ke hisab se kitchen se serve karna (instant start, zero buffer)!',
          funnyExample: {
            scenario: 'User ne video scrub karke 45th minute pe click kiya. Server ne HTTP 206 Partial Content ke zariye seedha 45th minute ka byte range bhej diya bina shuruat ka 400MB download kiye! ⏩',
            punchline: 'Byte-Range requests enable instant scrubbing without full file downloads!'
          },
          memoryTrick: 'Media Optimization Formula:\n1. Short Background Loops (< 10s): Silent `<video autoplay muted loop playsinline>` in WebM/MP4 (10x lighter than GIF!)\n2. Long Videos (> 1 min): HLS / DASH Streaming with HLS.js\n3. SVGs: Minify with SVGO & use inline `<svg>` for critical icons',
          visualDiagram: {
            title: 'HLS Adaptive Bitrate Streaming Flow',
            nodes: ['Master Playlist (.m3u8)', '1080p Stream (High Bandwidth)', '720p Stream (Medium Bandwidth)', '360p Stream (Low Bandwidth)', 'Client auto-switches based on network speed'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How HLS.js Plays Video Chunks with MediaSource Extensions (MSE):',
            steps: ['Browser loads master manifest (`master.m3u8`)', 'HLS.js measures bandwidth of downloaded chunks', 'Requests matching bitrate chunk index (e.g. `segment_004.ts`)', 'Appends binary chunks directly into video SourceBuffer via MSE API']
          },
          code: `// Modern HLS.js Video Player Implementation
import Hls from 'hls.js';

function setupAdaptiveVideo(videoElement, videoSourceUrl) {
  if (Hls.isSupported()) {
    const hls = new Hls({
      maxBufferLength: 30, // Keep 30s buffer ahead
      maxMaxBufferLength: 60,
      enableWorker: true // Decode manifests in Web Worker
    });

    hls.loadSource(videoSourceUrl);
    hls.attachMedia(videoElement);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      console.log('🎬 HLS Manifest loaded: Adaptive qualities available');
    });

    hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
      console.log(\`⚡ Switched video quality to level: \${data.level}\`);
    });
  } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    // Native Safari HLS support
    videoElement.src = videoSourceUrl;
  }
}`,
          codeBreakdown: [
            { part: 'Hls.isSupported()', label: 'Checks if browser supports MediaSource Extensions (MSE) API', color: '#3b82f6' },
            { part: 'maxBufferLength: 30', label: 'Limits forward buffer to conserve client memory and data bandwidth', color: '#10b981' },
            { part: 'enableWorker: true', label: 'Moves HLS chunk parsing off the main JavaScript thread to a Web Worker', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Using animated GIFs instead of compressed looping `<video>` (GIFs are 10x-20x larger and lack hardware decoding!)',
            '❌ Missing the `playsinline` attribute on mobile video tags (causes iOS Safari to force fullscreen)',
            '❌ Inlining huge 500KB SVGs directly in HTML body (bloats DOM tree and delays HTML parsing)'
          ],
          proTips: [
            '💡 Always replace heavy GIFs with `.mp4` / `.webm` loops: `<video autoplay loop muted playsinline>`',
            '💡 Use SVGO plugin in Vite/Webpack to strip comments, doctypes, and editor metadata automatically'
          ],
          interviewQuestions: [
            'What is HLS (HTTP Live Streaming) and how does Adaptive Bitrate Streaming work?',
            'Why are animated GIFs terrible for web performance compared to HTML5 video?',
            'How does HTTP 206 Partial Content status support media streaming?'
          ],
          miniChallenge: 'Convert an animated GIF to WebM/MP4 using FFmpeg and compare the file size difference (typically 90%+ reduction).',
          quiz: {
            type: 'mcq',
            question: 'Streaming media mein adaptive quality switching enable karne ke liye kaunsa manifest format standard hai?',
            options: ['.mp3', '.m3u8 (HLS Playlist)', '.exe', '.zip'],
            answer: '.m3u8 (HLS Playlist)',
            explanation: 'HLS uses .m3u8 playlists to describe multiple quality bitrates and chunk URLs.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'HTTP status code fill karo:',
              sentence: 'Media byte-range partial stream requests ke response mein server HTTP status code ___ Partial Content bhejta hai.',
              answer: '206',
              explanation: 'HTTP 206 Partial Content is sent for Range header requests.'
            }
          ],
          summary: ['HLS divides video into small streaming chunks', 'HLS.js uses MSE for adaptive bitrate playback', 'Replace heavy GIFs with silent looping WebM/MP4 videos', 'Minify SVGs with SVGO'],
          flashcard: { q: 'What is MediaSource Extensions (MSE)?', a: 'A browser JavaScript API that allows media streams to be generated dynamically and fed directly into `<audio>` or `<video>` elements.' },
          funFact: 'YouTube and Netflix stream petabytes of video daily using DASH and HLS protocols over standard HTTP ports without requiring proprietary streaming servers!',
          didYouKnow: 'An animated GIF stores every single frame as an uncompressed bitmap palette, while MP4 video uses temporal inter-frame delta compression.',
          realWorldUseCases: ['EdTech video lessons (CodeMasti video player)', 'OTT streaming platforms (Netflix/Hotstar)', 'Landing page background motion loops', 'Interactive animated vector icons'],
          practiceQuestions: [
            'Replace a GIF with a compressed MP4 video loop',
            'Set up HLS.js player with quality switcher'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 3: JavaScript Bundling, Tree Shaking & Web Workers',
      lessons: [
        {
          id: 'perf-code-splitting-bundling',
          title: 'Code Splitting, Dynamic `import()`, Tree Shaking & Bundle Analysis',
          emoji: '📦',
          xpReward: 50,
          badgeName: 'Bundle Surgeon',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "5MB ka monolithic bundle ek sath bhej diya? User homepage pe hai aur tum admin dashboard ka code download karwa rahe ho! Code splitting aur Tree Shaking se bundle ko slim banao!"',
            hint: '💡 Masti Sir: "React.lazy() aur dynamic `import()` se page-by-page chunking karo. Jo page user khole, sirf wahi code download hona chahiye!"',
            success: '🎉 Masti Sir: "Initial bundle size 3.5MB se 85KB ho gaya! Instant load!"',
            mistake: '😅 Masti Sir: "`import lodash from \'lodash\'` likha aur poori 70KB library aa gayi! `import debounce from \'lodash-es/debounce\'` likho taaki Tree Shaking chale!"'
          },
          englishDef: 'Code Splitting breaks monolithic JavaScript bundles into smaller chunks loaded on-demand via dynamic `import()`. Tree Shaking uses ES Module static analysis (`import`/`export`) to eliminate dead/unused code from the final bundle.',
          hinglishExplain: 'Agar aapki app mein 20 pages hain, toh user ko first visit pe sirf Home page ka JS chahiye. Code Splitting (React.lazy ya route-based splitting) har route ka alag chunk banati hai. Tree Shaking ek digital jhadoo (broom) hai jo unused functions aur dead code ko final production bundle se bahar phenk deti hai.',
          storyExplain: 'Socho tum travel bag pack kar rahe ho. Monolithic bundle = Poori almirah ke saare kapde, kambal aur bartan bag mein pack kar lena (chalna mushkil). Code splitting = Sirf aaj ke 2 kapde bag mein rakhna, baaki hotels pe on-demand delivery mangwana!',
          funnyExample: {
            scenario: 'Developer ne PDF export karne ke liye 2MB ki library import ki jo sirf 1% users saal mein ek baar use karte hain. Par uski wajah se 100% users ka homepage 3 second slow ho gaya! 🤦\nFix: Dynamic `const { jsPDF } = await import(\'jspdf\')` on button click!',
            punchline: 'Load heavy features only when the user clicks them!'
          },
          memoryTrick: 'Bundle Optimization Trinity:\n1. Route-level splitting (React.lazy / Vue defineAsyncComponent)\n2. Component-level splitting (Heavy modals, rich text editors, charts)\n3. ESM Tree Shaking (Use ESM packages like `date-fns` or `lodash-es`, avoid CommonJS)',
          visualDiagram: {
            title: 'Monolith vs Route-Split Bundle Architecture',
            nodes: ['Monolith: single 3MB bundle.js (Slow Initial Load)', 'Split: main.js (50KB)', 'HomeChunk.js (30KB)', 'DashboardChunk.js (40KB - Loaded on demand)', 'AdminChunk.js (Loaded only for admins)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Webpack / Rollup Performs Tree Shaking:',
            steps: ['Parses static ES Module AST (Abstract Syntax Tree)', 'Identifies exported functions that are never imported or invoked', 'Marks unused functions as dead code', 'Terser / Rollup minifier deletes marked functions completely during build']
          },
          code: `// 1. Route-Based Code Splitting in React
import React, { Suspense, lazy } from 'react';

// Heavy pages loaded asynchronously on demand
const AnalyticsDashboard = lazy(() => import('./pages/AnalyticsDashboard'));
const CodeEditorPage = lazy(() => import('./pages/CodeEditorPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<div className="spinner">Loading CodeMasti...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<AnalyticsDashboard />} />
        <Route path="/editor" element={<CodeEditorPage />} />
      </Routes>
    </Suspense>
  );
}

// 2. On-Demand Dynamic Import for Heavy Libraries
async function exportToPDF(reportData) {
  // Dynamically load library only when user clicks Export button
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF();
  doc.text(reportData.title, 10, 10);
  doc.save('report.pdf');
}`,
          codeBreakdown: [
            { part: 'lazy(() => import(...))', label: 'Creates separate chunk file downloaded only when route is navigated to', color: '#3b82f6' },
            { part: '<Suspense fallback={...}>', label: 'Provides graceful UI loading state while asynchronous chunk downloads', color: '#10b981' },
            { part: 'await import("jspdf")', label: 'Keeps initial bundle featherweight by deferring heavy PDF engine download', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Importing CommonJS modules (`require`) which breaks static tree-shaking analysis',
            '❌ Missing bundle visualizer auditing (`rollup-plugin-visualizer` or `webpack-bundle-analyzer`)',
            '❌ Importing full icon packs (e.g. `import * as Icons from "lucide-react"`) instead of named individual icons'
          ],
          proTips: [
            '💡 Use Vite with `rollup-plugin-visualizer` to see exact visual treemap of your production bundle dependencies',
            '💡 Set `"sideEffects": false` in your `package.json` to allow aggressive tree shaking of unused module exports'
          ],
          interviewQuestions: [
            'How does Tree Shaking work and why does it require ES Modules (import/export) instead of CommonJS (require)?',
            'What is Route-based vs Component-based Code Splitting?',
            'What does the `sideEffects` property in package.json do?'
          ],
          miniChallenge: 'Run `npx vite-bundle-visualizer` or inspect your dist folder to find the top 3 heaviest npm packages in your project.',
          quiz: {
            type: 'mcq',
            question: 'Tree Shaking successful hone ke liye JavaScript dependencies ko kis module format mein hona zaroori hai?',
            options: ['CommonJS (require/module.exports)', 'ES Modules (ESM: import/export)', 'AMD', 'UMD'],
            answer: 'ES Modules (ESM: import/export)',
            explanation: 'ES Modules are statically analyzable at build time, allowing bundlers to determine unused exports.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'React API fill karo:',
              sentence: 'React mein component ko lazily load karne ke liye `const Component = ___(() => import(...))` use karte hain.',
              answer: 'lazy',
              explanation: 'React.lazy() defines dynamically loaded components.'
            }
          ],
          summary: ['Code splitting breaks bundles into on-demand chunks', 'Tree shaking strips dead code via static ESM analysis', 'Dynamic import() defers heavy libraries until needed', 'Suspense renders graceful fallback states'],
          flashcard: { q: 'What is Dynamic import()?', a: 'A standard JavaScript function that returns a Promise resolving to a module, enabling runtime lazy loading.' },
          funFact: 'Rich Harris created Rollup in 2015 specifically to introduce the concept of Tree Shaking to the JavaScript ecosystem!',
          didYouKnow: 'Moment.js is ~70KB and cannot be tree-shaken; modern alternatives like date-fns or dayjs allow importing individual 2KB helper functions.',
          realWorldUseCases: ['Large SaaS multi-dashboard apps', 'E-commerce checkout flows', 'Admin panels separated from user stores', 'On-demand chart and PDF generation'],
          practiceQuestions: [
            'Split a React app with React.lazy and Suspense',
            'Analyze bundle size using webpack-bundle-analyzer'
          ]
        },
        {
          id: 'perf-web-workers-offloading',
          title: 'Web Workers & Off-Main-Thread Architecture (Comlink & Heavy Computation)',
          emoji: '🧵',
          xpReward: 50,
          badgeName: 'Thread Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JavaScript single-threaded hai toh kya hua? Web Workers ke zariye background CPU threads pe heavy calculations chalao aur UI ko 100% lag-free rakho!"',
            hint: '💡 Masti Sir: "Main thread sirf UI render aur user clicks handle karegi. Image processing, heavy data sorting aur crypto hashing background Web Worker mein chalega!"',
            success: '🎉 Masti Sir: "Zero dropped frames even during heavy multi-core background computation!"',
            mistake: '😅 Masti Sir: "Web Worker ke andar `window` ya `document` access karne ki koshish mat karna — Workers have no direct DOM access!"'
          },
          englishDef: 'Web Workers execute JavaScript in background threads isolated from the main UI thread. They communicate via asynchronous message passing (`postMessage` / `onmessage`) or SharedArrayBuffers, preventing heavy computations from freezing the UI.',
          hinglishExplain: 'JavaScript ka main thread UI render karta hai aur user ke clicks sunta hai. Agar aap main thread pe 5 lakh data items sort karoge ya image filter process karoge toh browser screen freeze ho jayegi. Web Worker ek background thread banata hai jo alag CPU core pe chalta hai. Calculation khatam hone par worker main thread ko result bhej deta hai bina UI ko 1 millisecond ke liye bhi freeze kiye.',
          storyExplain: 'Main Thread = Restaurant ka Waiter (customer se order leta hai aur khana table pe serve karta hai). Agar waiter khud kitchen mein baith ke 30 minute tak sabzi kaatne lage (heavy task on main thread), toh naye customers ka order kaun lega? Sab bhookhe bhagenge! Kitchen ke chef = Web Workers (background mein heavy kaam karte hain aur ready dish waiter ko pass kar dete hain)!',
          funnyExample: {
            scenario: 'User ne 50MB CSV file upload karke "Analyze Data" dabaya. Bina Web Worker ke spinner ghoomna band ho gaya, button click nahi ho raha tha (Main thread locked). Web Worker lagane ke baad background mein analysis chali aur user aaram se page pe doosre tabs navigate karta raha! 🚀',
            punchline: 'Keep the main thread free for buttery smooth 60 FPS interactions!'
          },
          memoryTrick: 'Web Worker Rules:\n- CAN use: fetch, WebSockets, IndexedDB, setTimeout, crypto, WebAssembly\n- CANNOT use: DOM (document), window, localStorage, alert',
          visualDiagram: {
            title: 'Main UI Thread vs Web Worker Background Thread',
            nodes: ['Main Thread: User Clicks + 60fps UI Rendering', 'postMessage(rawData) ->', 'Web Worker Thread (Background CPU Core)', '<- onmessage(processedData)', 'Main Thread updates UI seamlessly'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Structured Clone Algorithm Under the Hood:',
            steps: ['Main thread calls `worker.postMessage(data)`', 'Browser uses Structured Clone to deep copy data into worker memory space', 'For huge ArrayBuffers, use Transferable Objects (0-copy memory transfer in 0ms!)', 'Worker receives message event and begins execution']
          },
          code: `// 1. Worker File: heavyCalculator.worker.js
self.onmessage = (event) => {
  const { numbers, filterThreshold } = event.data;
  console.log('🧵 Worker received data. Processing on background thread...');

  // Heavy CPU computation (e.g. prime factorization or complex sorting)
  const result = numbers
    .filter(n => n > filterThreshold)
    .map(n => Math.sqrt(n) * Math.sin(n));

  // Send processed result back to main thread
  self.postMessage({ status: 'done', resultCount: result.length, sample: result.slice(0, 5) });
};

// 2. Main Thread: App.js
const worker = new Worker(new URL('./heavyCalculator.worker.js', import.meta.url), {
  type: 'module'
});

worker.onmessage = (e) => {
  console.log('✅ Main Thread received results from Worker:', e.data);
  updateUI(e.data);
};

function startHeavyProcessing() {
  const largeArray = Array.from({ length: 1_000_000 }, (_, i) => i + 1);
  worker.postMessage({ numbers: largeArray, filterThreshold: 500_000 });
}`,
          codeBreakdown: [
            { part: 'new Worker(new URL(..., import.meta.url))', label: 'Standard modern Vite/Webpack syntax for loading ESM Web Workers', color: '#3b82f6' },
            { part: 'self.onmessage', label: 'Worker message handler running in dedicated isolated background thread', color: '#10b981' },
            { part: 'worker.postMessage(...)', label: 'Transmits data between main thread and worker via structured cloning', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Trying to manipulate `document.getElementById` inside a Web Worker (Workers cannot access the DOM directly)',
            '❌ Passing huge 500MB objects via standard structured clone without using Transferable Objects (causes cloning overhead)',
            '❌ Creating hundreds of workers instead of using a Worker Pool (e.g. `navigator.hardwareConcurrency`)'
          ],
          proTips: [
            '💡 Use Google\'s `Comlink` library to call Web Worker functions as if they were standard async functions via RPC proxies!',
            '💡 Use `OffscreenCanvas` inside Web Workers to render canvas graphics and 3D WebGL in the background'
          ],
          interviewQuestions: [
            'What is a Web Worker, how does it communicate with the main thread, and what are its limitations?',
            'What are Transferable Objects in Web Workers and why are they zero-copy?',
            'What is the difference between Web Workers, Service Workers, and Worklets?'
          ],
          miniChallenge: 'Build a background Fibonacci calculator with a Web Worker and verify that UI input typing never stutters during computation.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa browser API Web Worker ke andar directly accessible NAHI hota?',
            options: ['fetch()', 'IndexedDB', 'document (DOM)', 'crypto.subtle'],
            answer: 'document (DOM)',
            explanation: 'Web Workers run in a separate global scope without access to the DOM or window object.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Communication method fill karo:',
              sentence: 'Main thread aur Web Worker ke beech messages send karne ke liye `___()` method use hota hai.',
              answer: 'postMessage',
              explanation: 'postMessage is the standard API for inter-thread communication.'
            }
          ],
          summary: ['Web Workers offload heavy CPU work from main thread', 'UI stays responsive at 60fps during heavy computations', 'Communication happens via postMessage and Structured Clone', 'Comlink provides clean Promise-based Worker RPCs'],
          flashcard: { q: 'What is OffscreenCanvas?', a: 'A canvas interface that can be rendered inside Web Workers off the main thread, decoupled from the DOM.' },
          funFact: 'Figma runs their entire C++ canvas rendering engine inside a Web Worker compiled to WebAssembly!',
          didYouKnow: 'You can query `navigator.hardwareConcurrency` in JavaScript to determine how many CPU cores the user device has.',
          realWorldUseCases: ['Large CSV/Excel file parsing in browser', 'In-browser video/audio transcoding (FFmpeg.wasm)', 'Complex financial graph rendering', 'Client-side image compression and filtering'],
          practiceQuestions: [
            'Implement a heavy array sorter in a Web Worker',
            'Use Comlink to wrap a worker in async RPC calls'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 4: CSS & Web Font Performance',
      lessons: [
        {
          id: 'perf-critical-css',
          title: 'Critical CSS Extraction, CSS Containment & `content-visibility: auto`',
          emoji: '🎨',
          xpReward: 45,
          badgeName: 'CSS Speedster',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSS by default render-blocking hoti hai! Jab tak poori CSS download nahi hoti, browser white screen dikhata hai! Critical CSS aur `content-visibility` se instant first paint achieve karo!"',
            hint: '💡 Masti Sir: "Above-the-fold HTML ke liye inline Critical CSS daalo aur baaki CSS ko non-blocking asynchronous load karo!"',
            success: '🎉 Masti Sir: "First Contentful Paint (FCP) dropped from 3.2s to 0.4s!"',
            mistake: '😅 Masti Sir: "10,000 DOM elements ka layout calculate karwa rahe ho? `content-visibility: auto` lagao taaki off-screen DOM render hi na ho!"'
          },
          englishDef: 'Critical CSS inlines the minimal styles required to render above-the-fold content directly in `<head>`, deferring the remaining stylesheet asynchronously. `content-visibility: auto` skips rendering and layout calculations for off-screen elements until scrolled into view.',
          hinglishExplain: 'Browser jab tak external CSS file download aur parse nahi kar leta, wo screen pe kuch bhi render nahi karta (Render-Blocking). Critical CSS technique mein hum pehle 100vh viewport ka zaroori CSS seedha `<style>` tag mein inline kar dete hain, aur baaki heavy CSS background mein load hoti hai. CSS property `content-visibility: auto` browser ko batati hai ki jo cards screen ke bahar hain unka layout aur paint tab tak skip karo jab tak user scroll karke wahan na pahunche.',
          storyExplain: 'Socho tum book padh rahe ho. Render-blocking CSS = Poori 500-page book ke covers aur saare chapters print hone tak pehla page padhne se mana kar dena. Critical CSS = Pehle page ka text turant samne rakh dena taaki reading shuru ho jaye, jabki baaki pages printer background mein print karta rahe!',
          funnyExample: {
            scenario: 'Long infinite list of 1,000 blog posts render kiye. Initial load pe page 5 second freeze ho gaya.\nOne-line fix: `.blog-card { content-visibility: auto; contain-intrinsic-size: 0 350px; }`\nResult: Initial rendering time dropped by 85%! 🚀',
            punchline: 'content-visibility: auto is virtual scrolling built directly into the browser CSS engine!'
          },
          memoryTrick: 'CSS Performance Golden Rules:\n1. Inline Critical CSS in `<head>` (< 14KB)\n2. Defer non-critical CSS: `<link rel="preload" as="style" onload="this.rel=\'stylesheet\'">`\n3. Use `content-visibility: auto` on offscreen sections\n4. Use CSS Containment (`contain: layout paint`) on complex widgets',
          visualDiagram: {
            title: 'Render-Blocking vs Critical Inline CSS Loading',
            nodes: ['Blocking: HTML -> Wait for 200KB CSS -> Render (Slow 2.5s FCP)', 'Optimized: HTML + Inline Critical CSS (<10KB) -> Instant First Paint (0.3s FCP)', 'Asynchronous non-critical styles stream in background'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How content-visibility: auto Works in Chromium:',
            steps: ['Browser encounters off-screen DOM element with `content-visibility: auto`', 'Skips styling, layout calculation, and paint operations for its subtree completely', 'Uses `contain-intrinsic-size` as height placeholder to prevent scrollbar jumping', 'When element approaches viewport, browser seamlessly executes layout and paints']
          },
          code: `<!-- 1. Critical Inlined CSS + Asynchronous Non-Critical CSS Loader -->
<head>
  <!-- Inline Critical CSS for above-the-fold navbar and hero -->
  <style>
    :root { --primary: #3b82f6; --bg: #0f172a; }
    body { margin: 0; font-family: system-ui, sans-serif; background: var(--bg); color: #fff; }
    .hero { min-height: 80vh; display: flex; align-items: center; justify-content: center; }
    .hero h1 { font-size: 2.5rem; margin: 0; }
  </style>

  <!-- Non-critical full stylesheet loaded asynchronously without blocking render -->
  <link rel="preload" href="/styles/full-bundle.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/styles/full-bundle.css"></noscript>
</head>

/* 2. Modern CSS Containment & Virtualized Rendering */
.long-feed-item {
  /* Skips off-screen layout and paint until scrolled near viewport */
  content-visibility: auto;
  /* Provides estimated placeholder size to keep scrollbar smooth (0 CLS) */
  contain-intrinsic-size: auto 280px;
  /* Isolates subtree layout from affecting parent document */
  contain: layout paint;
}`,
          codeBreakdown: [
            { part: 'rel="preload" as="style"', label: 'Downloads stylesheet at high priority in background without blocking initial HTML render', color: '#3b82f6' },
            { part: 'content-visibility: auto', label: 'Skips rendering operations for offscreen elements until scrolled into view', color: '#10b981' },
            { part: 'contain-intrinsic-size: auto 280px', label: 'Maintains height estimation so page scrollbar does not wobble or jump', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Inlining 500KB of CSS in HTML (HTML exceeds TCP initial congestion window of 14KB)',
            '❌ Using `@import` statements inside CSS files (creates sequential waterfall request chains)',
            '❌ Forgetting `contain-intrinsic-size` when using `content-visibility: auto` (causes scrollbar jumping)'
          ],
          proTips: [
            '💡 Use tools like `Critters` or `critical` in your build pipeline to automate critical CSS extraction',
            '💡 Never use `@import url("theme.css")` in production CSS; use `<link>` tags in HTML instead'
          ],
          interviewQuestions: [
            'Why is CSS considered a Render-Blocking Resource by browsers?',
            'How does `content-visibility: auto` optimize DOM rendering performance?',
            'What is the purpose of `contain: layout paint` (CSS Containment)?'
          ],
          miniChallenge: 'Add `content-visibility: auto` to a long list of 200 items in a webpage and compare the DevTools Performance panel rendering time.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsi CSS property browser ko off-screen elements ka layout aur paint skip karne ki permission deti hai?',
            options: ['display: none', 'content-visibility: auto', 'visibility: hidden', 'opacity: 0'],
            answer: 'content-visibility: auto',
            explanation: 'content-visibility: auto skips layout and painting for offscreen elements until they near the viewport.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Property companion fill karo:',
              sentence: '`content-visibility: auto` ke sath scrollbar jumps rokne ke liye `___` property use karte hain.',
              answer: 'contain-intrinsic-size',
              explanation: 'contain-intrinsic-size supplies placeholder dimensions for unrendered elements.'
            }
          ],
          summary: ['CSS is render-blocking by default', 'Critical CSS inlines above-the-fold styles for instant FCP', 'content-visibility: auto delivers built-in DOM virtualization', 'Avoid @import in CSS'],
          flashcard: { q: 'What is the Initial Congestion Window (initcwnd)?', a: 'The first TCP packet burst (~14KB), making inlined critical CSS + HTML under 14KB ideal for 1-RTT instant render.' },
          funFact: 'Google Search results page inlines 100% of its critical CSS directly in HTML to ensure near-zero millisecond first paints worldwide!',
          didYouKnow: 'CSS Containment (`contain: layout`) creates an isolated boundary, meaning DOM changes inside the container never trigger reflows in outer parent elements.',
          realWorldUseCases: ['Large e-commerce catalog feeds', 'News article comment threads', 'Search results pages', 'Mobile web responsive layout optimization'],
          practiceQuestions: [
            'Extract and inline critical CSS using Critters',
            'Benchmark rendering time with and without content-visibility'
          ]
        },
        {
          id: 'perf-font-optimization',
          title: 'Web Font Optimization (`font-display: swap`, WOFF2, Subsetting & FOUT/FOIT)',
          emoji: '🔤',
          xpReward: 45,
          badgeName: 'Typography Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Website khulte hi text invisible ho gaya ya 2 second baad achanak font jump ho gaya? FOIT aur FOUT ko khatam karo WOFF2, Preloading aur `font-display: swap` se!"',
            hint: '💡 Masti Sir: "`font-display: swap` se pehle system font dikhao, font aate hi smoothly swap karo! WOFF2 format use karo jo 30% chhota hota hai!"',
            success: '🎉 Masti Sir: "Zero layout shift web typography achieved!"',
            mistake: '😅 Masti Sir: "Poora 1MB font file download kar rahe ho jisme Greek, Cyrillic aur Chinese characters hain? Subsetting karke sirf Latin/English lo (20KB)!"'
          },
          englishDef: 'Web font optimization prevents Flash of Invisible Text (FOIT) and Flash of Unstyled Text (FOUT) via `font-display: swap`, preloading critical `.woff2` files with `crossorigin`, font subsetting (removing unused glyphs), and size-adjust matching for 0-CLS font loading.',
          hinglishExplain: 'Jab browser custom font download karta hai, agar network slow ho toh ya toh text gayab rehta hai (FOIT - Flash of Invisible Text) ya pehle normal font dikhta hai phir naye font aane par achanak jump karta hai (FOUT / CLS). WOFF2 modern compressed format hai. `font-display: swap` browser ko bolta hai ki pehle system font se text dikhao aur jaise hi custom font download ho, swap kar do. Subsetting se hum faltu foreign characters delete karke font size 80% chhota kar dete hain.',
          storyExplain: 'Socho tum party mein gaye aur tumhari customized designer dress abhi tak tailor se aayi nahi hai. FOIT = Tum ghar ke andar chhup ke baith gaye (invisible). FOUT = Tum normal T-shirt pehan ke party mein chale gaye (instant visible), aur jab designer dress aayi toh change kar liya!',
          funnyExample: {
            scenario: 'Custom font load hone par character width change ho gayi aur poori heading 1 line se 2 line ban gayi -> High CLS score!\nFix: CSS `@font-face { size-adjust: 98%; ascent-override: 95%; }` perfectly matches fallback font geometry!',
            punchline: 'Font metric matching prevents layout shifts during font swap!'
          },
          memoryTrick: 'Font Performance Formula:\n1. Format: WOFF2 only (Drop TTF/EOT)\n2. Preload: `<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>`\n3. CSS: `font-display: swap`\n4. Subsetting: `unicode-range: U+0000-00FF`\n5. Self-host instead of Google Fonts CDN to eliminate extra DNS/TLS roundtrips',
          visualDiagram: {
            title: 'FOIT vs FOUT vs Optimized Font Loading',
            nodes: ['FOIT (Default): Blank Invisible Text for 3s (Bad)', 'FOUT (font-display: swap): Instant System Font -> Swap Custom Font', 'Optimized: Preloaded WOFF2 + size-adjust = Instant Custom Font with 0 CLS'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Font Loading Timeline in Browser:',
            steps: ['Browser parses HTML/CSS and discovers `@font-face`', 'If preloaded, font is already in memory cache', 'Renders system fallback font immediately', 'Swaps in custom WOFF2 font with zero layout shift']
          },
          code: `<!-- 1. Preload primary critical body font in HTML <head> -->
<link
  rel="preload"
  href="/fonts/inter-latin.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>

/* 2. Self-Hosted Optimized @font-face with Subsetting & Metric Overrides */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400 700; /* Variable Font covering normal to bold */
  font-display: swap; /* Immediate fallback rendering */
  src: url('/fonts/inter-latin.woff2') format('woff2');
  /* Subset only standard Latin alphanumeric glyphs (drops file from 300KB to 18KB!) */
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC;
}

/* 3. Fallback Font Metric Matching to eliminate CLS */
@font-face {
  font-family: 'Inter-Fallback';
  src: local('Arial');
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 107%;
}

body {
  font-family: 'Inter', 'Inter-Fallback', system-ui, sans-serif;
}`,
          codeBreakdown: [
            { part: 'as="font" type="font/woff2" crossorigin', label: 'Required attributes for font preloading (fonts always require CORS anonymous)', color: '#3b82f6' },
            { part: 'font-display: swap', label: 'Instructs browser to render fallback font immediately and swap when ready', color: '#10b981' },
            { part: 'unicode-range: U+0000-00FF', label: 'Subsetting filter ensuring only required character glyphs are downloaded', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Forgetting `crossorigin="anonymous"` on font preloads (browser will fetch font twice!)',
            '❌ Loading 6 separate font weights (300, 400, 500, 600, 700, 800) instead of 1 Variable Font',
            '❌ Using uncompressed `.ttf` or `.otf` font files in production'
          ],
          proTips: [
            '💡 Self-host fonts on your own origin/CDN to save 2 extra DNS lookups and TLS handshakes to `fonts.googleapis.com`',
            '💡 Use Variable Fonts (e.g. Inter Variable) which contain all font weights (100-900) in a single compact 35KB WOFF2 file'
          ],
          interviewQuestions: [
            'What is the difference between FOIT (Flash of Invisible Text) and FOUT (Flash of Unstyled Text)?',
            'Why does `<link rel="preload" as="font">` require the `crossorigin` attribute even for same-origin fonts?',
            'What is font subsetting and how does `unicode-range` work?'
          ],
          miniChallenge: 'Inspect your web app in Chrome DevTools Network tab, filter by "Font", and check if all fonts are in WOFF2 format with `font-display: swap`.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa font-display value text ko turant system fallback font se render karta hai aur custom font ready hone par swap karta hai?',
            options: ['font-display: block', 'font-display: swap', 'font-display: fallback', 'font-display: optional'],
            answer: 'font-display: swap',
            explanation: 'font-display: swap gives the font face an extremely small block period and an infinite swap period.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Font format fill karo:',
              sentence: 'Modern web development mein sabse best compressed font format ___ use hota hai.',
              answer: 'woff2',
              explanation: 'WOFF2 uses Brotli compression for maximum font file size reduction.'
            }
          ],
          summary: ['WOFF2 is the standard compressed font format', 'font-display: swap prevents blank FOIT text', 'Font subsetting removes unused foreign glyphs', 'Preloading critical fonts eliminates typography delay'],
          flashcard: { q: 'Why must font preloads include crossorigin?', a: 'The W3C font specification mandates that web fonts must be fetched using anonymous CORS mode, even for same-origin assets.' },
          funFact: 'WOFF2 achieves approximately 30% better compression than WOFF1 by utilizing the Brotli compression algorithm!',
          didYouKnow: 'Variable Fonts allow smooth dynamic transitions across infinite font weights (e.g. `font-weight: 432`) without downloading separate files.',
          realWorldUseCases: ['Zero-CLS web typography', 'Multilingual website internationalization', 'Design system typography tokens', 'High-performance mobile reading experiences'],
          practiceQuestions: [
            'Self-host a Google Font as WOFF2 with unicode-range subsetting',
            'Match fallback font metrics using size-adjust to eliminate CLS'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 5: Caching, Service Workers & Edge CDNs',
      lessons: [
        {
          id: 'perf-caching-cdn-http3',
          title: 'HTTP Cache-Control Directives, Stale-While-Revalidate & Edge CDNs',
          emoji: '💾',
          xpReward: 50,
          badgeName: 'Cache Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Sabse fast network request wo hoti hai jo kabhi send hi na ho! Browser Cache aur Edge CDN ko sahi headers do aur 0 millisecond instant page loads achieve karo!"',
            hint: '💡 Masti Sir: "Hashed assets (bundle.a7b9.js) pe `max-age=31536000, immutable` lagao, aur dynamic API data pe `stale-while-revalidate`!"',
            success: '🎉 Masti Sir: "Cache hit ratio: 98%! Zero server load!"',
            mistake: '😅 Masti Sir: "`index.html` file pe 1 year cache laga diya? Naya release deploy karne ke baad bhi users ko purani broken site dikhegi! `index.html` pe `no-cache` lagao!"'
          },
          englishDef: 'HTTP Caching leverages `Cache-Control` directives (`max-age`, `immutable`, `no-cache`, `no-store`, `stale-while-revalidate`) and ETags to eliminate redundant network round trips. Global CDN edge servers cache assets in Point-of-Presence (POP) data centers.',
          hinglishExplain: 'Cache-Control header browser aur CDN ko batata hai ki kisi file ko kitni der tak apne paas save rakhna hai. Static files jinme hash hota hai (jaise `app.8f3a.js`) unhe 1 saal ke liye `immutable` cache karte hain (0ms load). Dynamic `index.html` pe `no-cache` lagate hain taaki browser har baar server se check kare ki naya update aaya ya nahi via ETag (304 Not Modified). `stale-while-revalidate` purana cached data turant screen pe dikhata hai aur background mein naya data fetch kar leta hai.',
          storyExplain: 'Cache = Tumhare fridge mein rakha hua cold drink. Agar fridge mein hai (Cache Hit), toh market jane ki zaroorat nahi (0 second). Agar fridge khali hai (Cache Miss), toh market (Origin Server) se lana padega. `immutable` = Sealed can (kabhi kharab nahi hogi). `no-cache` = Doodh (har baar check karo ki fresh hai ya nahi)!',
          funnyExample: {
            scenario: 'User ne site reload ki. Browser ne local disk cache se 2MB files 0ms mein load kar li! Network tab mein likha aaya: `200 OK (from disk cache), Size: 0 B, Time: 0 ms`! ⚡\nServer CPU: 0% usage!',
            punchline: 'The fastest request is the one that never leaves the user device!'
          },
          memoryTrick: 'The Golden Caching Strategy:\n1. `index.html` -> `Cache-Control: no-cache` (Always validate with ETag)\n2. Hashed Assets (`*.js`, `*.css`, `*.webp`) -> `Cache-Control: public, max-age=31536000, immutable`\n3. API Feeds -> `Cache-Control: public, max-age=60, stale-while-revalidate=600`\n4. Sensitive User Data -> `Cache-Control: no-store`',
          visualDiagram: {
            title: 'HTTP Cache-Control & ETag Revalidation Lifecycle',
            nodes: ['Browser Request', 'Check Local Cache (max-age fresh?)', 'Fresh -> Return from Disk/Memory Cache (0ms)', 'Expired -> Send `If-None-Match: "etag_v1"`', 'Server checks: Not modified -> 304 Not Modified (0 bytes body)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'stale-while-revalidate Step-by-Step Flow:',
            steps: ['Browser requests API data', 'Cache returns stale cached data instantly to UI (0ms perceived latency)', 'Browser silently triggers background HTTP request to origin server', 'Server returns fresh data; cache updates for next time']
          },
          code: `// Express.js Production Caching Middleware Strategy
const express = require('express');
const app = express();

// 1. Immutable Caching for Content-Hashed Static Assets (Vite/Webpack dist)
app.use('/assets', express.static('dist/assets', {
  maxAge: '1y',
  immutable: true, // Tells browser this file URL will never change
  setHeaders: (res) => {
    res.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// 2. Dynamic index.html - Always revalidate to guarantee instant new deployments
app.get('/', (req, res) => {
  res.set('Cache-Control', 'no-cache'); // Requires ETag check before reuse
  res.sendFile(__dirname + '/dist/index.html');
});

// 3. Stale-While-Revalidate for Public API Feeds (e.g. course lists)
app.get('/api/courses', (req, res) => {
  // Fresh for 60 seconds; if older, serve stale instantly and revalidate in background up to 10 minutes
  res.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=600');
  res.json({ courses: getCourseCatalog() });
});

// 4. Sensitive User Data - Never store in any cache
app.get('/api/user/profile', (req, res) => {
  res.set('Cache-Control', 'no-store, private');
  res.json({ user: req.user });
});`,
          codeBreakdown: [
            { part: 'max-age=31536000, immutable', label: 'Caches versioned hashed files for 1 year without revalidating', color: '#10b981' },
            { part: 'no-cache', label: 'Forces browser to validate ETag with server before using cached copy', color: '#3b82f6' },
            { part: 'stale-while-revalidate=600', label: 'Serves stale response instantly while asynchronously refreshing cache in background', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Confusing `no-cache` (revalidate with server) with `no-store` (do not save in cache at all)',
            '❌ Setting long `max-age` on un-hashed filenames like `style.css` (users will get stuck on outdated styles)',
            '❌ Caching authenticated private user data on shared public CDN edge proxies'
          ],
          proTips: [
            '💡 Use SWR (Stale-While-Revalidate) client library in React for client-side API data caching and automatic revalidation',
            '💡 Verify 304 Not Modified responses in DevTools Network tab to confirm ETag revalidation is working'
          ],
          interviewQuestions: [
            'What is the difference between `Cache-Control: no-cache` and `Cache-Control: no-store`?',
            'How does the `stale-while-revalidate` caching directive improve user perceived performance?',
            'How do ETags and `If-None-Match` HTTP headers work together during 304 Not Modified revalidations?'
          ],
          miniChallenge: 'Inspect response headers of `main.js` and `index.html` on any major website in DevTools Network tab and identify their Cache-Control policies.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa Cache-Control directive browser ko purana cached data turant serve karne aur background mein naya fetch karne ki permission deta hai?',
            options: ['no-store', 'stale-while-revalidate', 'must-revalidate', 'private'],
            answer: 'stale-while-revalidate',
            explanation: 'stale-while-revalidate permits immediate return of stale cache while asynchronously fetching fresh data.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'HTTP status code fill karo:',
              sentence: 'Jab ETag match ho jata hai aur file modify nahi hui hoti, toh server HTTP status code ___ Not Modified return karta hai.',
              answer: '304',
              explanation: 'HTTP 304 signals the cached version is valid without resending the body.'
            }
          ],
          summary: ['Hashed assets get 1-year immutable cache', 'index.html gets no-cache with ETag validation', 'stale-while-revalidate eliminates API latency', 'no-store protects sensitive data'],
          flashcard: { q: 'What is the immutable Cache-Control directive?', a: 'It tells the browser that the response body will never change during its max-age, preventing even manual page reloads from issuing conditional requests.' },
          funFact: 'Facebook serves more than 99% of its static assets directly from browser cache and CDN edges!',
          didYouKnow: 'An HTTP 304 Not Modified response sends zero body bytes, saving mobile data and server CPU.',
          realWorldUseCases: ['Static asset CDN distribution', 'Instant API response caching with SWR/TanStack Query', 'Zero-downtime cache busting deployments', 'Offline content resilience'],
          practiceQuestions: [
            'Configure Cache-Control headers in an Express/Nginx server',
            'Test ETag conditional requests with curl or Postman'
          ]
        },
        {
          id: 'perf-service-workers-pwa',
          title: 'Service Workers, Offline Caching Strategies & Progressive Web Apps (PWA)',
          emoji: '📱',
          xpReward: 50,
          badgeName: 'PWA Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Internet chala bhi gaya toh website crash nahi hogi! Service Workers browser ke andar ka personal proxy ban kar offline app chalate hain! Web app ko Native Mobile App jaisa banao!"',
            hint: '💡 Masti Sir: "Cache-First (Images/Fonts), Network-First (Live Data), Stale-While-Revalidate (Articles/Feeds) — ye 3 caching patterns yaad rakho!"',
            success: '🎉 Masti Sir: "Offline PWA ready! Installable on iOS and Android!"',
            mistake: '😅 Masti Sir: "Service Worker mein `sw.js` ko khud cache kar diya? Naya service worker kabhi install nahi hoga! `sw.js` pe hamesha `no-cache` rakho!"'
          },
          englishDef: 'A Service Worker is an event-driven background script acting as a programmable network proxy between browser, cache, and network. It enables offline functionality, background sync, push notifications, and PWA installability.',
          hinglishExplain: 'Service Worker browser ke background mein chalne wala worker hai jo aapki app ki har network request ko intercept (beech mein pakad) sakta hai. Jab browser koi file mangta hai, Service Worker decide karta hai ki network se lana hai ya Cache Storage se. Iski madad se agar user offline (bina internet) bhi ho, tab bhi aapki web app 100% smoothly open hoti hai.',
          storyExplain: 'Service Worker = Aapki company ka Secretary. Jab bhi aapko koi document chahiye (network request), aap secretary ko bolte ho. Secretary pehle apne file cabinet (Cache Storage) mein dekhta hai. Agar mil gaya toh turant deta hai. Agar nahi mila toh internet se mangwata hai aur cabinet mein copy rakh leta hai!',
          funnyExample: {
            scenario: 'User aeroplane mein baitha tha bina internet ke. Usne CodeMasti app open ki aur saare DSA lessons bina kisi error ke instant open ho gaye! ✈️📱\nUser: "Ye website hai ya native app?!"\nAnswer: Progressive Web App (PWA) with Service Worker!',
            punchline: 'Service workers make web apps resilient against spotty or offline connections!'
          },
          memoryTrick: 'PWA Core Caching Strategies:\n1. Cache-First: Static assets (Images, Fonts, JS/CSS bundles)\n2. Network-First: Critical dynamic data (Bank balance, auth status)\n3. Stale-While-Revalidate: Content feeds, article pages, user dashboards\n4. Network-Only: Payments, form submissions',
          visualDiagram: {
            title: 'Service Worker Network Interception Flow',
            nodes: ['Web App (React/JS)', 'Fetch Event Intercepted by Service Worker', 'Cache Storage Match?', 'Hit -> Return Cached Response (Instant / Offline)', 'Miss -> Fetch from Network and update Cache'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Service Worker Lifecycle Phases:',
            steps: ['Registration: `navigator.serviceWorker.register("/sw.js")`', 'Install Event: Pre-caches critical app shell assets (`cache.addAll`)', 'Activate Event: Deletes old outdated caches from previous versions', 'Fetch Event: Intercepts network requests and returns cached responses']
          },
          code: `// sw.js - Production Service Worker with Cache-First & Stale-While-Revalidate
const CACHE_NAME = 'codemasti-v2';
const APP_SHELL = ['/', '/index.html', '/styles/main.css', '/js/app.js', '/offline.html'];

// 1. Install Phase: Pre-cache core App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('📦 Pre-caching App Shell assets');
      return cache.addAll(APP_SHELL);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Phase: Purge stale cache versions
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Phase: Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      }).catch(() => {
        // If both cache and network fail, return offline fallback page
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });

      // Return cached copy immediately if available, else wait for network
      return cachedResponse || fetchPromise;
    })
  );
});`,
          codeBreakdown: [
            { part: 'caches.open(CACHE_NAME)', label: 'Opens browser native Cache Storage sandbox', color: '#3b82f6' },
            { part: 'self.skipWaiting()', label: 'Forces newly installed service worker to activate immediately without waiting for old tabs to close', color: '#10b981' },
            { part: 'event.respondWith(...)', label: 'Hijacks browser network pipeline and supplies custom cached/network response', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Caching API requests containing sensitive user credentials or dynamic POST mutations',
            '❌ Forgetting to delete old cache versions in the `activate` event (wastes user storage)',
            '❌ Running Service Workers over plain HTTP (Service Workers require HTTPS for security!)'
          ],
          proTips: [
            '💡 Use Google\'s `Workbox` library (`workbox-webpack-plugin` or `vite-plugin-pwa`) to generate bulletproof service workers automatically',
            '💡 Add a Web App Manifest (`manifest.json`) with icons and `display: standalone` to make your site installable on mobile home screens'
          ],
          interviewQuestions: [
            'Explain the complete lifecycle of a Service Worker (Registration, Installation, Activation, Fetch).',
            'What is the difference between Cache Storage API and HTTP Browser Cache?',
            'What is the Stale-While-Revalidate caching strategy in Service Workers?'
          ],
          miniChallenge: 'Open Chrome DevTools Application tab > Service Workers, check "Offline", reload your app, and verify it renders cleanly offline.',
          quiz: {
            type: 'mcq',
            question: 'Service Worker install hone ke baad purane outdated caches ko delete karne ka best event kaunsa hota hai?',
            options: ['install event', 'activate event', 'fetch event', 'message event'],
            answer: 'activate event',
            explanation: 'The activate event is the designated phase to clean up old caches after the new service worker takes control.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Security requirement fill karo:',
              sentence: 'Service Workers security reasons ki wajah se sirf ___ protocol (ya localhost) par kaam karte hain.',
              answer: 'HTTPS',
              explanation: 'HTTPS is strictly required for Service Workers to prevent Man-in-the-Middle attacks.'
            }
          ],
          summary: ['Service Workers act as client-side network proxies', 'Enable full offline PWA functionality', 'Cache-First, Network-First, and SWR strategies', 'Workbox automates PWA generation'],
          flashcard: { q: 'What is an App Shell architecture?', a: 'A PWA design pattern that caches the minimal HTML, CSS, and JS required to render the application UI shell instantly offline.' },
          funFact: 'Twitter Lite reduced their data consumption by 70% and increased tweets sent by 75% after switching to a Service Worker powered PWA!',
          didYouKnow: 'Service Workers run in a separate execution context, have no DOM access, and are completely terminated by the browser when idle to conserve memory.',
          realWorldUseCases: ['Offline news reading (NYTimes/Medium)', 'Installable desktop & mobile apps (Spotify/VS Code Web)', 'Background sync when connection restores', 'Push notifications'],
          practiceQuestions: [
            'Register a Service Worker that caches an offline fallback page',
            'Configure vite-plugin-pwa in a React project'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 6: Memory Profiling & DevTools Diagnostics',
      lessons: [
        {
          id: 'perf-memory-leaks-heap',
          title: 'Memory Leak Detection, Detached DOM Nodes & Chrome Heap Snapshots',
          emoji: '🔍',
          xpReward: 50,
          badgeName: 'Memory Doctor',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Aapki website thodi der chalne ke baad slow aur laggy ho jaati hai? Tab 2GB RAM consume kar raha hai? Detached DOM nodes aur Memory Leaks ko Heap Snapshot se pakdo!"',
            hint: '💡 Masti Sir: "`addEventListener` lagaya par `removeEventListener` bhool gaye? Component unmount hone ke baad bhi memory leak hoti rahegi!"',
            success: '🎉 Masti Sir: "Zero memory leaks! RAM usage stable at 45MB!"',
            mistake: '😅 Masti Sir: "Global array mein bina limit ke data `push()` karte rehna garbage collector ko memory free karne se rok deta hai!"'
          },
          englishDef: 'A Memory Leak occurs when allocated memory is no longer needed by the application but cannot be reclaimed by the V8 Garbage Collector due to lingering references (Detached DOM nodes, unbound event listeners, closures, un-cleared intervals). Chrome DevTools Heap Snapshots diagnose retaining paths.',
          hinglishExplain: 'JavaScript mein V8 Garbage Collector automatically unused memory free karta hai. Lekin agar aapne kisi variable, listener ya DOM node ka reference kisi global scope ya closure mein chhod diya, toh GC use delete nahi kar pata (Memory Leak). Time ke sath browser ka RAM usage badhta rehta hai aur end mein tab crash ho jata hai ("Aw, Snap! Out of Memory"). Chrome DevTools Memory tab se 3 Snapshots le kar compare karke leaks pakde jaate hain.',
          storyExplain: 'Socho tum hotel mein stay karte ho. Jab tum checkout karte ho, toh room key wapas karni hoti hai taaki hotel room saaf ho sake. Agar tum checkout ke baad bhi key pocket mein rakh kar ghoomte rahoge (unbound listener reference), toh hotel wo room kisi naye guest ko nahi de payega (Memory Leak)!',
          funnyExample: {
            scenario: 'Developer ne `setInterval(fetchData, 1000)` lagaya aur component unmount hone pe `clearInterval` karna bhool gaya. 1 ghante baad 3600 timers background mein chal rahe the aur laptop ka fan helicopter jaisa aawaz karne laga! 🚁🔥\nFix: Always cleanup in `useEffect` return callback!',
            punchline: 'Always clear timers and event listeners when components unmount!'
          },
          memoryTrick: 'Top 4 Memory Leak Culprits:\n1. Forgotten Timers (`setInterval` without `clearInterval`)\n2. Unbound Event Listeners (`window.addEventListener` without cleanup)\n3. Detached DOM Nodes (Removed from DOM tree but referenced in JS variable)\n4. Uncleared Closures & Global Variables (`window.cache = []`)',
          visualDiagram: {
            title: 'Garbage Collection Root Reachability & Leak Diagram',
            nodes: ['GC Root (window / Global Scope)', 'Reachable Variable (Protected from GC)', 'Detached DOM Node holding references', 'Unreachable Objects -> Reclaimed by Garbage Collector'],
            type: 'flow'
          },
          browserBehindScene: {
            title: '3-Snapshot Memory Leak Hunt Technique in Chrome DevTools:',
            steps: ['Take Heap Snapshot 1 (Baseline state)', 'Perform user action and revert it (e.g. open modal and close it 5 times)', 'Take Heap Snapshot 2', 'Filter Snapshot 2 by "Objects allocated between Snapshot 1 and 2" -> Inspect Retainer Tree']
          },
          code: `// 1. ❌ BAD: Classic React / JS Memory Leaks
function badComponent() {
  const heavyData = new Array(1_000_000).fill('leak_payload');

  // Leak 1: Event listener never removed on unmount
  window.addEventListener('resize', () => {
    console.log('Window resized:', heavyData.length);
  });

  // Leak 2: Interval keeps running forever
  setInterval(() => {
    console.log('Heartbeat tick');
  }, 1000);
}

// 2. ✅ GOOD: Clean React Hook with Full Memory Cleanup
import { useEffect, useState } from 'react';

function GoodComponent() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler function
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Timer
    const timerId = setInterval(() => {
      console.log('Clean tick');
    }, 1000);

    // ✨ Cleanup function executed on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timerId);
      console.log('🧹 Cleaned up listeners and timers! Zero memory leaks.');
    };
  }, []);

  return <div>Width: {windowWidth}px</div>;
}`,
          codeBreakdown: [
            { part: 'return () => { ... }', label: 'React cleanup callback invoked right before component unmounts', color: '#10b981' },
            { part: 'window.removeEventListener(...)', label: 'Releases DOM reference so garbage collector can free component memory', color: '#3b82f6' },
            { part: 'clearInterval(timerId)', label: 'Terminates recurring interval timer to prevent zombie background execution', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Passing anonymous inline functions to `addEventListener` (e.g. `addEventListener("click", () => ...)` cannot be removed with `removeEventListener`)',
            '❌ Storing DOM elements in long-lived arrays or Maps without deleting them when nodes are removed from DOM',
            '❌ Ignoring WebSocket or EventSource connections that stay alive after navigating away'
          ],
          proTips: [
            '💡 Use `WeakMap` or `WeakSet` for caching DOM elements — they hold weak references that do NOT prevent garbage collection!',
            '💡 Use `AbortController` signal to cleanly cancel fetch requests and event listeners: `addEventListener("click", fn, { signal: controller.signal })`'
          ],
          interviewQuestions: [
            'How does Mark-and-Sweep Garbage Collection work in the V8 JavaScript engine?',
            'What is a Detached DOM Node and how do you find it using Chrome DevTools Heap Snapshots?',
            'Why do WeakMaps not cause memory leaks when storing object keys?'
          ],
          miniChallenge: 'Open Chrome DevTools Memory tab, take a Heap Snapshot, search for "Detached", and inspect if any detached HTML elements exist.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa data structure object keys ke weak references hold karta hai jisse garbage collection block nahi hoti?',
            options: ['Array', 'Object', 'WeakMap', 'Set'],
            answer: 'WeakMap',
            explanation: 'WeakMap allows keys to be garbage collected when there are no other references to the key object.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Cleanup function fill karo:',
              sentence: '`setInterval` ko memory leak se bachaane ke liye `___(intervalId)` call karna zaroori hai.',
              answer: 'clearInterval',
              explanation: 'clearInterval cancels timed interval tasks.'
            }
          ],
          summary: ['Garbage Collector frees unreachable memory', 'Uncleaned listeners, intervals, and detached DOM nodes cause leaks', '3-Snapshot technique identifies retaining paths', 'WeakMap prevents object memory leaks'],
          flashcard: { q: 'What is a Detached DOM Node?', a: 'A DOM element that has been removed from the visible page DOM tree, but JavaScript variables still hold a reference to it in memory.' },
          funFact: 'V8 uses a two-stage Garbage Collector: Scavenger (ultra-fast for young short-lived objects) and Major Mark-Sweep-Compact (for long-lived objects)!',
          didYouKnow: 'Chrome DevTools allows you to force Garbage Collection manually by clicking the trash can icon in the Performance/Memory tab.',
          realWorldUseCases: ['Single Page Applications (SPAs) running for hours without refresh', 'Real-time financial trading charts', 'Web-based video editors (Canva/Figma)', 'Long-running admin consoles'],
          practiceQuestions: [
            'Diagnose a simulated memory leak in Chrome DevTools Memory tab',
            'Refactor event listeners to use AbortController for clean teardown'
          ]
        },
        {
          id: 'perf-profiling-flamecharts',
          title: 'Chrome DevTools Performance Panel, Flame Charts & Long Task Auditing',
          emoji: '🔥',
          xpReward: 50,
          badgeName: 'Flame Profiler',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "DevTools Performance panel web developer ka MRI scan machine hai! Flame Chart dekh kar batao kaunsa function kitna millisecond kha raha hai!"',
            hint: '💡 Masti Sir: "Red triangle wale tasks Long Tasks (>50ms) hote hain! Inko `scheduler.yield()` ya chunking se tod kar green banayein!"',
            success: '🎉 Masti Sir: "Flame Chart clean! Total Blocking Time (TBT) dropped to 0ms!"',
            mistake: '😅 Masti Sir: "Production profiling karte waqt Chrome Extensions on chhod diye? Extensions flame chart mein fake lag create karte hain — hamesha Incognito mode mein profile karo!"'
          },
          englishDef: 'The Chrome DevTools Performance Panel records Main Thread execution, rendering events, network waterwalls, and frame rates. The Flame Chart visualizes call stacks over time, highlighting Long Tasks (> 50ms) responsible for Total Blocking Time (TBT) and input latency.',
          hinglishExplain: 'Performance panel aapki website ki live recording karta hai. Flame Chart mein upar se niche function call stack dikhta hai (kaunse function ne kisko call kiya aur kitna time liya). 50ms se zyada lene wale tasks ko "Long Tasks" kehte hain jinke upar red corner hota hai. Jab bhi long task chalta hai, user ka click ya scroll freeze ho jata hai. Hum long tasks ko `scheduler.yield()` ya `setTimeout` se chhote 10ms ke pieces mein break karte hain.',
          storyExplain: 'Flame Chart = Hospital ka ECG monitor. Har heartbeat (frame) 16ms mein aani chahiye. Agar ECG line achanak 300ms ke liye flat ho gayi (Long Task / Cardiac Arrest 😱), toh screen freeze ho gayi! Profiler batata hai ki kaunsi dawai (function optimize) dene se heartbeat smooth 60fps ho jayegi!',
          funnyExample: {
            scenario: 'User ne "Filter Products" select kiya aur click ke baad 400ms tak kuch nahi hua (high INP lag).\nFlame chart check kiya: Ek heavy regex parser 350ms le raha tha!\nFix: Pre-compiled regex + chunking -> Latency dropped to 12ms! ⚡',
            punchline: 'Read the flame chart to find the exact bottleneck line of code!'
          },
          memoryTrick: 'Flame Chart Reading Rules:\n- Width of bar = Duration (Wider = Slower function)\n- Depth of stack = Call hierarchy (Top = Parent, Bottom = Leaf function)\n- Red flag on top = Long Task (> 50ms threshold)\n- Always test in Incognito with 4x CPU Throttling!',
          visualDiagram: {
            title: 'Flame Chart Call Stack Visualization',
            nodes: ['Main Thread Timeline', 'Parent Function: handleFilterClick() [180ms - Long Task ⚠️]', 'Child: parseDataset() [120ms]', 'Leaf: regexMatch() [90ms]', 'Optimized: Yield to Event Loop every 16ms'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Yielding to the Main Thread with Modern `scheduler.yield()`:',
            steps: ['Long loop begins processing 10,000 items', 'After every 50 items (or 10ms), calls `await scheduler.yield()`', 'Browser pauses execution, handles pending user clicks and paints frame', 'Loop resumes immediately on next tick without dropping frames']
          },
          code: `// Breaking up Long Tasks using modern scheduler.yield() / setTimeout fallback
async function yieldToMainThread() {
  if ('scheduler' in window && 'yield' in window.scheduler) {
    return window.scheduler.yield(); // Native Chrome 115+ task yielding API
  }
  // Fallback to macro-task queue
  return new Promise(resolve => setTimeout(resolve, 0));
}

// Processing 50,000 items without freezing the UI (Zero Long Tasks!)
async function processLargeDatasetNonBlocking(items, onProgress) {
  console.log('🚀 Starting non-blocking data processing...');
  const results = [];
  const startChunkTime = performance.now();
  let lastYield = performance.now();

  for (let i = 0; i < items.length; i++) {
    // Process single item
    results.push(heavyTransform(items[i]));

    // Every 16ms, yield execution back to browser main thread for clicks and rendering
    if (performance.now() - lastYield > 16) {
      onProgress(Math.round((i / items.length) * 100));
      await yieldToMainThread();
      lastYield = performance.now();
    }
  }

  console.log(\`✅ Finished in \${(performance.now() - startChunkTime).toFixed(1)}ms with zero UI freeze\`);
  return results;
}

function heavyTransform(item) {
  return Math.sin(item) * Math.cos(item);
}`,
          codeBreakdown: [
            { part: 'scheduler.yield()', label: 'Modern W3C standard API that yields control back to event loop without penalty', color: '#10b981' },
            { part: 'performance.now() - lastYield > 16', label: 'Guarantees execution never exceeds one 60Hz frame budget (16.6ms)', color: '#3b82f6' },
            { part: 'onProgress(...)', label: 'Updates live UI progress bar smoothly while computation is actively running', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Profiling web apps in regular browser windows with active extensions (React DevTools/AdBlockers add heavy profiling noise)',
            '❌ Testing performance only on fast M2/M3 MacBook laptops without CPU throttling (real users use $150 budget Android phones!)',
            '❌ Trying to optimize micro-functions taking 0.01ms instead of fixing wide 200ms bottlenecks'
          ],
          proTips: [
            '💡 Always enable "4x CPU slowdown" and "Fast 3G" in Chrome DevTools Performance settings to test realistic mobile devices',
            '💡 Use `console.time("operation")` and `console.timeEnd("operation")` or `performance.mark()` for rapid targeted benchmarks'
          ],
          interviewQuestions: [
            'What is a Long Task in browser rendering and how does it impact Total Blocking Time (TBT) and INP?',
            'How do you profile and diagnose performance bottlenecks using Chrome DevTools Flame Charts?',
            'What is `scheduler.yield()` and how does it differ from `setTimeout(fn, 0)`?'
          ],
          miniChallenge: 'Record 5 seconds of page interaction in Chrome DevTools Performance panel, locate the longest task, and find the exact JavaScript function responsible.',
          quiz: {
            type: 'mcq',
            question: 'Browser mein kitne millisecond se zyada execute hone wale JavaScript task ko "Long Task" mark kiya jata hai?',
            options: ['10 milliseconds', '50 milliseconds', '500 milliseconds', '1 second'],
            answer: '50 milliseconds',
            explanation: 'The W3C performance standard defines any task taking longer than 50ms on the main thread as a Long Task.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Modern API fill karo:',
              sentence: 'Main thread ko voluntarily pause karke user events handle karne ke liye modern `await ___()` use karte hain.',
              answer: 'scheduler.yield',
              explanation: 'scheduler.yield() is the modern API for yielding main thread execution.'
            }
          ],
          summary: ['Performance panel provides comprehensive MRI scan of execution', 'Flame chart width indicates duration; depth indicates call hierarchy', 'Long tasks > 50ms block UI and destroy INP', 'Yield to main thread with scheduler.yield() every 16ms'],
          flashcard: { q: 'What is Total Blocking Time (TBT)?', a: 'The sum of all time periods between FCP and Time to Interactive (TTI) where main thread tasks exceeded 50ms.' },
          funFact: 'Chrome DevTools Performance panel was originally called the "Timeline Panel" when introduced in 2011!',
          didYouKnow: 'User Perception Rule (Rail Model): 0-16ms feels instantaneous, 100-300ms feels slightly delayed, > 1000ms causes user mental context loss.',
          realWorldUseCases: ['Fixing sluggish UI typing in search inputs', 'Eliminating stutter in chart zooming and panning', 'Optimizing heavy client-side data filters', 'FAANG frontend system performance audits'],
          practiceQuestions: [
            'Record and analyze a Flame Chart with 4x CPU throttling',
            'Convert a blocking synchronous loop to non-blocking chunked execution'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 7: Automated Auditing & Performance Budgets',
      lessons: [
        {
          id: 'perf-lighthouse-budgets',
          title: 'Lighthouse CI, Performance Budgets & Automated Regression Testing',
          emoji: '🚦',
          xpReward: 45,
          badgeName: 'CI/CD Auditor',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Website ek baar optimize kar li, par agle developer ne bina dekhe 2MB ki heavy library merge kar di! Lighthouse CI aur Performance Budgets se regression ko pull request pe hi block karo!"',
            hint: '💡 Masti Sir: "`budget.json` set karo: JavaScript bundle < 150KB, LCP < 2.2s. Agar budget exceed hua toh CI build fail ho jayega!"',
            success: '🎉 Masti Sir: "Automated performance guardian active on GitHub Actions!"',
            mistake: '😅 Masti Sir: "Lighthouse audit sirf desktop pe run karna — hamesha mobile throttling simulation ke sath test karo!"'
          },
          englishDef: 'Lighthouse CI automates web quality auditing in CI/CD pipelines (GitHub Actions, GitLab CI). Performance Budgets enforce strict upper bounds on bundle sizes, asset weights, and Web Vital scores, failing pull requests that introduce regressions.',
          hinglishExplain: 'Manual testing se performance optimize toh ho jaati hai par agle release mein koi developer galti se heavy package add kar deta hai jisse site dobara slow ho jaati hai. Lighthouse CI har Pull Request (PR) pe automatically test run karta hai aur report generate karta hai. Agar JavaScript file size 150KB se badh gayi ya LCP score drop hua, toh GitHub PR merge hone se block ho jaati hai (Performance Budget).',
          storyExplain: 'Performance Budget = Flight ka luggage limit (max 15kg). Agar aapka bag 15.1kg hua toh airport staff plane mein board nahi karne dega. Isi tarah agar aapka code budget se 1KB bhi zyada hua, toh CI pipeline deployment block kar degi!',
          funnyExample: {
            scenario: 'Junior developer ne PR raise ki: "Added cute emoji animation library (+1.8MB)".\nLighthouse CI bot commented on PR: "❌ Build Failed: JS Budget exceeded by 1.65MB. LCP degraded to 4.2s. Merge blocked!"\nSenior Engineer: "Good bot! 🤖"',
            punchline: 'Automated performance budgets protect production speed forever!'
          },
          memoryTrick: 'Performance Budget Strategy:\n1. JS Bundle Size: < 150KB gzipped\n2. Total Page Weight: < 1MB initial load\n3. LCP: < 2.2s on simulated 4G\n4. Lighthouse Score: > 95 in CI pipeline',
          visualDiagram: {
            title: 'Lighthouse CI GitHub Actions Pipeline',
            nodes: ['Developer opens Pull Request', 'GitHub Actions runs `npm run build`', 'Lighthouse CI audits preview URL', 'Verifies `budget.json` limits', 'Pass -> PR Green ✅ / Fail -> Block Merge ❌'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'How Lighthouse Calculates Overall Performance Score:',
            steps: ['Runs 5 core audits: LCP (25%), TBT (30%), CLS (25%), FCP (10%), Speed Index (10%)', 'Applies log-normal distribution curve against global HTTP Archive data', 'Generates weighted overall score (0 to 100)', 'Emits JSON metrics to CI dashboard']
          },
          code: `// 1. Performance Budget Definition: budget.json
[
  {
    "resourceSizes": [
      { "resourceType": "script", "budget": 150 },
      { "resourceType": "stylesheet", "budget": 30 },
      { "resourceType": "image", "budget": 400 },
      { "resourceType": "font", "budget": 80 },
      { "resourceType": "total", "budget": 800 }
    ],
    "timings": [
      { "metric": "largest-contentful-paint", "budget": 2200 },
      { "metric": "total-blocking-time", "budget": 150 },
      { "metric": "cumulative-layout-shift", "budget": 0.05 }
    ]
  }
]

# 2. GitHub Actions CI Workflow: .github/workflows/lighthouse.yml
name: Performance CI
on: [pull_request]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci && npm run build
      - name: Run Lighthouse CI Audit
        run: |
          npm install -g @lhci/cli
          lhci autorun --config=./lighthouserc.json
        env:
          LHCI_GITHUB_APP_TOKEN: \${{ secrets.LHCI_GITHUB_TOKEN }}`,
          codeBreakdown: [
            { part: 'resourceSizes: [{ resourceType: "script", budget: 150 }]', label: 'Caps total JavaScript payload at 150KB gzipped', color: '#3b82f6' },
            { part: 'largest-contentful-paint: 2200', label: 'Enforces sub-2.2s LCP score threshold on all builds', color: '#10b981' },
            { part: 'lhci autorun', label: 'Spins up headless Chrome, audits preview build, and reports status to GitHub PR', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Not testing in CI on simulated mobile throttling (desktop audits give false confidence)',
            '❌ Setting unrealistic zero-tolerance budgets that fail on normal minor updates',
            '❌ Running audits on local dev server instead of production-built bundles (`npm run build`)'
          ],
          proTips: [
            '💡 Use `bundlesize` or `size-limit` npm packages for fast sub-second bundle size checks in CI',
            '💡 Store Lighthouse CI historical trends on a free self-hosted LHCI server to track speed over months'
          ],
          interviewQuestions: [
            'What is a Performance Budget and how do you enforce it in a CI/CD pipeline?',
            'What are the weightings of individual metrics in the Lighthouse Performance score?',
            'What is the difference between Synthetic Lab testing (Lighthouse) and Real User Monitoring (CrUX)?'
          ],
          miniChallenge: 'Create a `budget.json` file in a project, run `lighthouse --budget-path=budget.json` and verify if your site passes all limits.',
          quiz: {
            type: 'mcq',
            question: 'Lighthouse v10+ scoring formula mein sabse zyada weight (30%) kaunse metric ka hota hai?',
            options: ['Total Blocking Time (TBT)', 'First Contentful Paint (FCP)', 'Speed Index', 'Time to Interactive'],
            answer: 'Total Blocking Time (TBT)',
            explanation: 'Total Blocking Time accounts for 30% of the overall Lighthouse Performance score, reflecting main-thread responsiveness.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Tool name fill karo:',
              sentence: 'CI/CD pipeline mein Lighthouse audits automate karne ke liye official Google tool ___ use hota hai.',
              answer: 'Lighthouse CI',
              explanation: 'Lighthouse CI (@lhci/cli) is Google automated CI auditing suite.'
            }
          ],
          summary: ['Lighthouse CI runs automated performance checks on every PR', 'Performance budgets cap bundle sizes and Web Vital timings', 'Prevents performance regressions from reaching production', 'TBT and LCP carry the largest scoring weights'],
          flashcard: { q: 'What is a Performance Regression?', a: 'An unintended degradation in page load speed, responsiveness, or visual stability introduced by a new code deployment.' },
          funFact: 'Google Lighthouse was named after actual coastal lighthouses that guide ships safely through foggy waters!',
          didYouKnow: 'Lighthouse runs 3 to 5 iterations by default in CI to compute median scores, eliminating network noise variations.',
          realWorldUseCases: ['Enterprise CI/CD deployment gates', 'E-commerce bundle size monitoring', 'Open-source repository quality checks', 'Agile sprint performance governance'],
          practiceQuestions: [
            'Set up Lighthouse CI in a GitHub Actions workflow',
            'Define a budget.json that caps JS at 150KB and LCP at 2.5s'
          ]
        },
        {
          id: 'perf-edge-performance',
          title: 'Rendering Strategies: SSR vs SSG vs ISR vs Edge-Side Rendering',
          emoji: '🌐',
          xpReward: 50,
          badgeName: 'Rendering Strategist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "CSR, SSR, SSG, ISR, Edge Streaming — har project ke liye sahi rendering pattern chuno! Best SEO aur instant 0ms TTFB ka master formula!"',
            hint: '💡 Masti Sir: "Static blogs/marketing -> SSG. E-commerce/Dynamic -> ISR / Streaming SSR. Global personalization -> Edge Functions!"',
            success: '🎉 Masti Sir: "Fullstack rendering architecture decoded!"',
            mistake: '😅 Masti Sir: "Pure Client-Side Rendering (CSR) mein poora app blank HTML bhejta hai — search engine crawlers aur slow devices ro padte hain!"'
          },
          englishDef: 'Web rendering strategies balance TTFB, SEO, build time, and dynamicity: Client-Side Rendering (CSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), Server-Side Rendering (SSR), and Edge Streaming SSR near the user.',
          hinglishExplain: 'CSR (Client-Side Rendering) mein browser khali HTML download karke JS se page banata hai (Slow initial load, bad SEO). SSG (Static Site Generation) mein build time pe saare HTML pages pehle se generate ho kar CDN pe rakh diye jaate hain (Super fast 10ms TTFB). ISR (Incremental Static Regeneration) bina poori site rebuild kiye background mein individual pages update karta hai. Edge SSR serverless code ko duniya bhar ke 300+ CDN edge nodes pe chala kar personalized dynamic pages 30ms mein render karta hai.',
          storyExplain: 'CSR = Raw vegetables ghar lana aur khud banana (time lagta hai). SSG = Pre-packaged snacks (packet kholo aur turant khao). SSR = Restaurant chef se fresh order banwana. ISR = Display counter jahan naye dishes har 10 minute mein refresh hote rehte hain!',
          funnyExample: {
            scenario: 'Blog site ne pure SSR use kiya. Har page visit pe database query hui aur server crash ho gaya.\nFix: Switched to SSG + CDN caching -> TTFB dropped from 800ms to 12ms! ⚡',
            punchline: 'Use SSG for static content and Edge SSR for personalized dynamic data!'
          },
          memoryTrick: 'Rendering Strategy Matrix:\n- SSG (Static): Zero server cost, fastest TTFB (<20ms), ideal for blogs/marketing\n- ISR (Incremental): Best of SSG + background page updates on-demand\n- SSR (Server-Rendered): Dynamic real-time data, perfect SEO, higher server load\n- Edge SSR: Sub-50ms dynamic personalization globally\n- CSR (SPA): Rich dashboards behind auth login',
          visualDiagram: {
            title: 'Rendering Architecture Spectrum',
            nodes: ['CSR: Browser downloads bundle -> Renders DOM', 'SSG: Pre-rendered HTML on CDN Edge (Fastest TTFB)', 'ISR: Stale CDN Cache + Background Revalidation', 'Edge SSR: Dynamic streaming rendering on CDN POPs'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Incremental Static Regeneration (ISR) Lifecycle:',
            steps: ['User requests `/courses/python`', 'CDN serves existing cached static HTML instantly (0ms)', 'If revalidation interval (e.g. 60s) passed, Next.js triggers background rebuild', 'Generated new HTML silently replaces old cache for future visitors']
          },
          code: `// Next.js (App Router) Rendering Strategies Demonstration
// 1. Static Site Generation (SSG) - Pre-rendered at build time
export async function generateStaticParams() {
  const posts = await getTopPosts();
  return posts.map(p => ({ slug: p.slug }));
}

// 2. Incremental Static Regeneration (ISR) - Revalidates every 60 seconds
export const revalidate = 60; // Invalidate cache after 60 seconds

// 3. Streaming Server-Side Rendering (SSR) with React Suspense
import { Suspense } from 'react';

export default async function CoursePage({ params }) {
  const courseMeta = await getCourseMeta(params.slug); // Fast database read

  return (
    <div className="course-container">
      {/* Critical hero renders immediately */}
      <h1>{courseMeta.title}</h1>
      <p>{courseMeta.description}</p>

      {/* Heavy comments and reviews stream in progressively via Suspense */}
      <Suspense fallback={<div className="skeleton">Loading student reviews...</div>}>
        <SlowStudentReviews courseId={courseMeta.id} />
      </Suspense>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'export const revalidate = 60', label: 'Enables ISR: regenerates static page in background when requested after 60s', color: '#10b981' },
            { part: '<Suspense fallback={...}>', label: 'Enables Streaming SSR: sends fast HTML shell immediately while slow components stream', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Using full SSR for static marketing pages (wastes server CPU and inflates TTFB)',
            '❌ Blocking the entire SSR response on a slow 3rd-party API instead of streaming with React Suspense',
            '❌ Relying purely on CSR for public e-commerce pages where SEO and LCP are critical'
          ],
          proTips: [
            '💡 Use Streaming SSR with React Suspense to deliver initial HTML in under 100ms while slow database queries resolve',
            '💡 Deploy dynamic logic to Edge Runtime (Vercel Edge / Cloudflare Workers) to execute auth and geo-routing at sub-10ms latency'
          ],
          interviewQuestions: [
            'Compare CSR, SSR, SSG, and ISR in terms of TTFB, Build Time, SEO, and Server Costs.',
            'What is Streaming SSR and how does it improve Time to First Byte (TTFB) and First Contentful Paint (FCP)?',
            'How does Edge Computing differ from traditional centralized Origin Server rendering?'
          ],
          miniChallenge: 'Inspect a Next.js or Astro application build output and verify which routes are marked as Static (○) vs Dynamic (λ).',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa rendering pattern static pages ko build-time pe generate karta hai aur background mein on-demand revalidate karta hai bina full rebuild ke?',
            options: ['Client-Side Rendering (CSR)', 'Incremental Static Regeneration (ISR)', 'WebSockets', 'Server-Sent Events'],
            answer: 'Incremental Static Regeneration (ISR)',
            explanation: 'ISR allows static pages to be regenerated in the background on-demand per route.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'React feature fill karo:',
              sentence: 'Streaming SSR mein heavy slow components ko progressively stream karne ke liye `<___ fallback={...}>` use karte hain.',
              answer: 'Suspense',
              explanation: 'React Suspense coordinates streaming SSR boundaries.'
            }
          ],
          summary: ['SSG offers unbeatable 10ms TTFB for static content', 'ISR combines static speed with background updates', 'Streaming SSR delivers progressive HTML without blocking', 'Edge computing runs rendering logic closest to users'],
          flashcard: { q: 'What is HTML Streaming in SSR?', a: 'The server sends the initial HTML `<head>` and shell immediately over HTTP chunked transfer encoding, streaming remaining component HTML as data resolves.' },
          funFact: 'Vercel and Cloudflare Edge networks execute serverless edge functions inside lightweight V8 isolates in under 5 milliseconds with zero cold starts!',
          didYouKnow: 'Astro allows "Island Architecture" where the entire page is pure 0KB static HTML and only interactive islands load JavaScript.',
          realWorldUseCases: ['Marketing and documentation portals (SSG)', 'High-traffic e-commerce catalogs (ISR)', 'Live auction and stock dashboards (Streaming SSR)', 'Personalized multi-region SaaS apps (Edge SSR)'],
          practiceQuestions: [
            'Build an ISR page with Next.js revalidate flag',
            'Implement Streaming SSR with React Suspense boundaries'
          ]
        }
      ]
    },
    {
      chapterTitle: 'Chapter 8: Production Performance Capstone & FAANG Interview Prep',
      lessons: [
        {
          id: 'perf-production-capstone',
          title: 'Capstone Project: 100/100 Lighthouse Speed Optimization Lab',
          emoji: '🏆',
          xpReward: 60,
          badgeName: 'Lighthouse 100 Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Ab aayi asli test ki baari! Ek slow, un-optimized 15-second load hone wali app ko hum step-by-step audit karke 100/100 Green Lighthouse Score banayenge!"',
            hint: '💡 Masti Sir: "Step 1: AVIF/WebP images -> Step 2: Critical CSS -> Step 3: Code splitting -> Step 4: Font swap -> Step 5: Caching!"',
            success: '🎉 Masti Sir: "Lighthouse Performance Score: 100/100! All Core Web Vitals in the Green Zone!"',
            mistake: '😅 Masti Sir: "Ek metric ko optimize karte waqt doosre ko kharab mat kar dena — balance is key!"'
          },
          englishDef: 'A comprehensive hands-on optimization capstone: auditing a bloated legacy web app with severe LCP/INP/CLS bottlenecks, applying holistic engineering remediations, and achieving a verified 100/100 Lighthouse Performance score.',
          hinglishExplain: 'Ye performance mastery ka final practical capstone lab hai. Isme hum ek aisi real-world app ko optimize karte hain jo initially 15 second mein load hoti thi (Lighthouse score 22). Humne: 1. 4MB PNGs ko 120KB AVIF banaya -> 2. Monolithic 3MB JS ko route-split kiya -> 3. Critical CSS inline kiya -> 4. `font-display: swap` aur size-adjust lagaya -> 5. Layout thrashing ko RAF mein batch kiya -> 6. Service worker caching add ki. Result: 100/100 Lighthouse Score!',
          storyExplain: 'Socho ek purani rusty vintage car hai jisme 500kg extra loha bhara hua hai aur engine choke ho raha hai. Humne car se faltu weight hataya (Tree shaking), aerodynamics theek ki (Critical CSS), high-octane fuel daala (HTTP/3 & CDN Edge), aur turbocharger laga diya (Web Workers)! Ab car F1 track pe 300 km/h ki speed se daud rahi hai! 🏎️💨',
          funnyExample: {
            scenario: 'Initial Audit:\n- Lighthouse Score: 22 🔴\n- LCP: 6.8s | INP: 580ms | CLS: 0.42 | Total Weight: 8.4MB\n\nAfter Capstone Optimization:\n- Lighthouse Score: 100 🟢\n- LCP: 0.8s | INP: 24ms | CLS: 0.00 | Total Weight: 142KB!\nClient: "Did you use black magic?!"\nEngineer: "No, just CodeMasti Web Performance principles! 😎"',
            punchline: 'From 22 to 100 — scientific measurement and systematic optimization!'
          },
          memoryTrick: 'The 6-Step Capstone Optimization Checklist:\n1. Audit: Chrome DevTools Performance + Lighthouse\n2. Media: AVIF/WebP + aspect-ratio + fetchpriority\n3. JavaScript: Code splitting + Tree shaking + Web Workers\n4. CSS & Fonts: Critical CSS inlining + font-display: swap\n5. DOM & Rendering: Batch reads/writes in RAF + content-visibility\n6. Network: Cache-Control immutable + HTTP/3 + CDN Edge',
          visualDiagram: {
            title: 'Legacy Slow App vs Optimized Capstone Architecture',
            nodes: ['Legacy: 8.4MB Payload | Blocking CSS | 6.8s LCP (Score 22 🔴)', 'Step 1: Convert Media to AVIF (-85%)', 'Step 2: Route Split JS (-90%)', 'Step 3: Critical CSS + Font Metric Match', 'Optimized: 142KB Payload | 0.8s LCP | 0.00 CLS (Score 100 🟢)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Before vs After Performance Metric Comparison:',
            steps: [
              'LCP (Largest Contentful Paint): 6.8s 🔴 -> 0.8s 🟢 (-88% reduction)',
              'INP (Interaction to Next Paint): 580ms 🔴 -> 24ms 🟢 (-95% latency)',
              'CLS (Cumulative Layout Shift): 0.42 🔴 -> 0.00 🟢 (Zero visual jump)',
              'TTFB (Time to First Byte): 1400ms 🔴 -> 45ms 🟢 (Edge CDN cached)'
            ]
          },
          code: `// Capstone Performance Health Audit Script
export async function runComprehensivePerformanceAudit() {
  console.log('⚡ Starting CodeMasti Production Performance Audit...');
  
  if (!('performance' in window)) {
    console.error('Performance API not supported');
    return;
  }

  // 1. Measure Navigation Timings
  const navTiming = performance.getEntriesByType('navigation')[0];
  if (navTiming) {
    const dnsTime = navTiming.domainLookupEnd - navTiming.domainLookupStart;
    const tcpTime = navTiming.connectEnd - navTiming.connectStart;
    const ttfb = navTiming.responseStart - navTiming.requestStart;
    const domReady = navTiming.domContentLoadedEventEnd - navTiming.startTime;
    const fullLoad = navTiming.loadEventEnd - navTiming.startTime;

    console.log('📊 Network & Navigation Breakdown:');
    console.log(\`   - DNS Lookup: \${dnsTime.toFixed(1)}ms\`);
    console.log(\`   - TCP / TLS Handshake: \${tcpTime.toFixed(1)}ms\`);
    console.log(\`   - Time to First Byte (TTFB): \${ttfb.toFixed(1)}ms \${ttfb < 800 ? '🟢' : '🔴'}\`);
    console.log(\`   - DOM Content Loaded: \${domReady.toFixed(1)}ms\`);
    console.log(\`   - Complete Page Load: \${fullLoad.toFixed(1)}ms\`);
  }

  // 2. Audit Resource Payload Distribution
  const resources = performance.getEntriesByType('resource');
  let totalBytes = 0;
  const breakdown = { js: 0, css: 0, img: 0, font: 0, other: 0 };

  resources.forEach(r => {
    const size = r.transferSize || 0;
    totalBytes += size;
    if (r.name.endsWith('.js')) breakdown.js += size;
    else if (r.name.endsWith('.css')) breakdown.css += size;
    else if (r.name.match(/\\.(png|jpg|jpeg|webp|avif|svg)$/)) breakdown.img += size;
    else if (r.name.match(/\\.(woff|woff2|ttf)$/)) breakdown.font += size;
    else breakdown.other += size;
  });

  console.log(\`📦 Total Transferred Payload: \${(totalBytes / 1024).toFixed(1)} KB\`);
  console.log(\`   - JavaScript: \${(breakdown.js / 1024).toFixed(1)} KB\`);
  console.log(\`   - Images: \${(breakdown.img / 1024).toFixed(1)} KB\`);
  console.log(\`   - Fonts: \${(breakdown.font / 1024).toFixed(1)} KB\`);
  console.log(\`   - CSS: \${(breakdown.css / 1024).toFixed(1)} KB\`);

  return { totalBytes, navTiming, breakdown };
}`,
          codeBreakdown: [
            { part: 'performance.getEntriesByType("navigation")', label: 'Inspects precise network lifecycle timestamps (DNS, TCP, TTFB, DOMContentLoaded)', color: '#3b82f6' },
            { part: 'r.transferSize', label: 'Measures exact compressed wire bytes downloaded for each network asset', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Optimizing only for synthetic Lighthouse audits without monitoring Real User Field Data (CrUX)',
            '❌ Over-optimizing with excessive complex service worker logic that introduces difficult cache-invalidation bugs'
          ],
          proTips: [
            '💡 Always verify performance wins across both desktop and low-end mobile devices before closing optimization tickets',
            '💡 Track Core Web Vitals continuously in production using Google Analytics 4 or Datadog RUM'
          ],
          interviewQuestions: [
            'Walk me through how you would take a slow web application (Lighthouse score < 30) and optimize it to achieve a 95+ score.',
            'What trade-offs do you consider between developer experience, build complexity, and runtime performance?',
            'How do you establish and maintain a performance-first culture in an engineering team?'
          ],
          miniChallenge: 'Run the Capstone Performance Health Audit script in your browser console on 3 real production websites and compare their TTFB and payload sizes.',
          quiz: {
            type: 'mcq',
            question: 'Agar webpage ka LCP score 6.8s se 0.8s par lana ho, toh sabse high-impact remediation kya hoti hai?',
            options: ['Hero image ko AVIF format + fetchpriority="high" + CDN Edge caching dena', 'CSS variable ka naam badalna', 'Comments delete karna', 'Font size chhota karna'],
            answer: 'Hero image ko AVIF format + fetchpriority="high" + CDN Edge caching dena',
            explanation: 'Optimizing the LCP resource format, priority, and CDN delivery directly cuts 80%+ of LCP latency.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Metric rating fill karo:',
              sentence: 'Lighthouse mein green zone score ___ se 100 ke beech hota hai.',
              answer: '90',
              explanation: 'Lighthouse classifies scores from 90 to 100 as Good (Green).'
            }
          ],
          summary: ['Capstone systematically applies media, bundle, CSS, font, rendering, and network optimizations', 'Reaches 100/100 Lighthouse Performance score', 'Transforms slow 15s app into instant sub-second experience'],
          flashcard: { q: 'What is the Golden Rule of Web Performance?', a: 'Measure first, identify the true critical path bottleneck, optimize systematically, and automate regression prevention in CI.' },
          funFact: 'Amazon calculated that every 100ms of latency cost them 1% in total retail sales ($3.8+ Billion annually)!',
          didYouKnow: 'Google prioritizes Core Web Vitals as an official search ranking signal on mobile and desktop worldwide.',
          realWorldUseCases: ['Full-scale corporate website re-architectures', 'High-stakes Black Friday retail optimization', 'Enterprise performance consulting', 'FAANG Principal Engineer system reviews'],
          practiceQuestions: [
            'Perform a full end-to-end performance audit on your portfolio website',
            'Achieve 95+ on all 4 Lighthouse categories (Performance, Accessibility, Best Practices, SEO)'
          ]
        },
        {
          id: 'perf-interview-masterclass',
          title: 'Top 25 Technical Performance Interview Questions & FAANG System Optimization',
          emoji: '🎓',
          xpReward: 60,
          badgeName: 'Staff Performance Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "FAANG aur top product companies mein Web Performance interview questions ka level bohot high hota hai! Critical Rendering Path se le kar Memory Profiling tak — top 25 technical Q&A master karo!"',
            hint: '💡 Masti Sir: "Answer dete time hamesha 3 cheezein mention karo: 1. Problem (Root Cause), 2. Measurement (How to detect), 3. Solution (Engineering fix & Trade-offs)!"',
            success: '🎉 Masti Sir: "You are now fully certified to ace Staff & Senior Frontend Performance Interviews!"',
            mistake: '😅 Masti Sir: "Generic answer mat do jaise \'I will compress images\'. Specific bolo: \'I will use AVIF with responsive picture srcset, aspect-ratio to eliminate CLS, and fetchpriority=high for LCP\'!"'
          },
          englishDef: 'A comprehensive curated masterclass covering the top 25 technical web performance interview questions, algorithmic bottlenecks, browser internals, and scalable FAANG performance system design interview scenarios.',
          hinglishExplain: 'Ye Web Performance track ka final interview preparation masterclass hai. Isme FAANG (Google, Meta, Amazon, Netflix, Apple) ke technical interviews mein puche jane wale top performance questions ka deep analysis hai: Core Web Vitals, Event Loop latency, Memory leaks, Layout thrashing, Web Workers, Tree shaking, Caching headers aur real-world system optimization case studies.',
          storyExplain: 'Technical interview ek chess game jaisa hai. Normal candidate sirf pehla move sochta hai. Senior Engineer 5 moves aage sochta hai: performance bottleneck identify karta hai, measurement tools (DevTools/RUM) explain karta hai, code fix deta hai aur architectural trade-offs discuss karta hai!',
          funnyExample: {
            scenario: 'Interviewer: "How do you improve website speed?"\nCandidate A: "Minify code." (Junior response ❌)\nCandidate B: "Audit Critical Rendering Path, eliminate render-blocking CSS via inlining, convert LCP to AVIF with fetchpriority, batch DOM writes in requestAnimationFrame, and enforce a 150KB budget in Lighthouse CI." Interviewer: "Offer letter incoming!" (Senior response 🚀)',
            punchline: 'Deep technical precision wins high-paying senior engineering roles!'
          },
          memoryTrick: 'The 3-Step Interview Answer Formula:\n1. Root Cause: Explain browser internals (DOM/CSSOM, Layout, Main thread)\n2. Measurement: Mention DevTools (Performance flame chart, Heap snapshots, Lighthouse, CrUX)\n3. Solution & Trade-offs: Concrete code solution + architectural considerations',
          visualDiagram: {
            title: 'Top 25 Performance Interview Masterclass Roadmap',
            nodes: ['1. Core Web Vitals (LCP/INP/CLS)', '2. Critical Rendering Path & DOM Engine', '3. JS Execution & Memory Leaks', '4. Network Protocols (HTTP/3 & Caching)', '5. Architecture (Edge SSR & Web Workers)'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Top 5 Must-Know Interview Questions Summary:',
            steps: [
              'Q1: How do you optimize LCP? (Preload, AVIF/WebP, fetchpriority=high, CDN edge caching)',
              'Q2: What causes high INP? (Long tasks > 50ms on main thread, un-chunked loops, synchronous layout)',
              'Q3: How do you eliminate CLS? (Explicit width/height, aspect-ratio, font metric size-adjust)',
              'Q4: How do you catch Memory Leaks? (3-Heap Snapshot comparison in DevTools, retainers tree)',
              'Q5: Difference between microtasks and macrotasks? (Promises drain first before timers/renders)'
            ]
          },
          code: `// Comprehensive Real-Time Performance Monitor for Production
class WebPerformanceGuard {
  constructor() {
    this.metrics = {};
    this.initObservers();
  }

  initObservers() {
    if (!('PerformanceObserver' in window)) return;

    // 1. Track Long Tasks (> 50ms)
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.warn(\`⚠️ Long Task Detected: \${entry.duration.toFixed(1)}ms on main thread!\`, entry);
        });
      });
      longTaskObserver.observe({ type: 'longtask', buffered: true });
    } catch {}

    // 2. Track Layout Shifts (CLS)
    try {
      let clsValue = 0;
      const layoutShiftObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log(\`📐 Layout Shift Delta: \${entry.value.toFixed(3)} | Total CLS: \${clsValue.toFixed(3)}\`);
          }
        });
      });
      layoutShiftObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {}
  }
}

// Instantiate performance guard in production
const perfGuard = new WebPerformanceGuard();`,
          codeBreakdown: [
            { part: 'new PerformanceObserver(...)', label: 'Standard browser API for monitoring runtime performance metrics in production', color: '#3b82f6' },
            { part: 'type: "longtask"', label: 'Captures main-thread blocking tasks exceeding 50ms threshold', color: '#ef4444' },
            { part: 'type: "layout-shift"', label: 'Captures unexpected element movement for live CLS monitoring', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Giving vague answers without mentioning standard browser metrics (LCP, INP, CLS, TTFB)',
            '❌ Failing to distinguish between client-side bottlenecks (DOM/JS) and server/network bottlenecks (TTFB/CDN)'
          ],
          proTips: [
            '💡 Always use the STAR format (Situation, Task, Action, Result) when discussing past performance optimization achievements in behavioral rounds',
            '💡 Mention business metrics alongside technical metrics (e.g. "Reducing LCP by 1.2s increased checkout conversion rate by 6.4%")'
          ],
          interviewQuestions: [
            'How would you diagnose and fix a website that is dropping frames and stuttering during user scrolling?',
            'What is the difference between Critical CSS, CSS Containment, and content-visibility?',
            'How does HTTP/3 QUIC improve web performance on unstable mobile network connections?'
          ],
          miniChallenge: 'Practice answering 3 performance interview questions out loud using the Root Cause -> Measurement -> Solution formula.',
          quiz: {
            type: 'mcq',
            question: 'Interview mein agar interviewer pooche ki user click karne ke baad UI slow react karta hai, toh sabse pehle kaunsa metric investigate karenge?',
            options: ['Cumulative Layout Shift (CLS)', 'Interaction to Next Paint (INP)', 'Time to First Byte (TTFB)', 'DNS Lookup Time'],
            answer: 'Interaction to Next Paint (INP)',
            explanation: 'INP is Google standard metric for measuring responsiveness across all user clicks, taps, and key presses.'
          },
          miniQuiz: [
            {
              type: 'fillblank',
              question: 'Interview concept fill karo:',
              sentence: 'Continuous production monitoring ke liye real users se capture hone wale metrics ko ___ (Real User Monitoring) kehte hain.',
              answer: 'RUM',
              explanation: 'RUM stands for Real User Monitoring.'
            }
          ],
          summary: ['Top 25 performance questions master Core Web Vitals, Rendering, Memory, and Network', 'Use Root Cause -> Measurement -> Solution formula in interviews', 'Connect technical latency wins to real-world business conversions', 'Congratulations on completing Web Performance & Optimization!'],
          flashcard: { q: 'What is the CrUX report?', a: 'The Chrome User Experience Report: a public dataset of real-world user performance data gathered from millions of opted-in Chrome browsers worldwide.' },
          funFact: 'Google engineering teams conduct performance reviews where every pull request must provide before/after Lighthouse and bundle size metrics!',
          didYouKnow: 'Pinterest reduced perceived wait times by 40% which drove a 15% increase in search engine traffic and sign-ups!',
          realWorldUseCases: ['Senior & Staff Frontend Engineer Interviews', 'FAANG Fullstack System Design interviews', 'Technical Architect assessments', 'Production web engineering excellence'],
          practiceQuestions: [
            'Conduct a mock technical interview answering CRP and Web Vitals questions',
            'Implement a PerformanceObserver telemetry utility in your project'
          ]
        }
      ]
    }
  ]
};

export default performanceCourse;
