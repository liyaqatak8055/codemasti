// ════════════════════════════════════════════════════════════════════════════════
// 🌟 CODEMASTI ANGULAR & ANGULARJS COMPLETE MASTER CURRICULUM (7 CHAPTERS & 64 LESSONS)
// ════════════════════════════════════════════════════════════════════════════════

const makeLesson = ({ id, title, emoji = '🅰️', xpReward = 30, badgeName = 'Angular Master', englishDef, hinglishExplain, storyExplain = '', code = '', quiz = null, flashcard = null }) => ({
  id,
  title,
  emoji,
  xpReward,
  badgeName,
  mastirQuote: {
    start: `👨‍🏫 Masti Sir: "${title} Angular & AngularJS ka ek mahatvapurna topic hai! Isko samajhne ke baad aap dynamic two-way binding aur clean MVC architecture effortlessly implement kar paoge! 🚀"`,
    hint: `💡 Masti Sir: "${title} par dhyan do — ye DOM manipulation aur data synchronization ko simplify karta hai!"`,
    success: `🎉 Masti Sir: "${title} topic successfully mastered!"`,
    mistake: `😅 Masti Sir: "Scope isolation aur directive syntax ko hamesha dhyan me rakhein!"`
  },
  englishDef,
  hinglishExplain,
  storyExplain: storyExplain || `Real World Analogy: Jaise ek automated remote control TV ke har channel ko instant sync me rakhta hai, waise hi ${title} UI aur Model ko synchronized rakhta hai!`,
  funnyExample: {
    scenario: `${title} in action -> Instant two-way data sync! ⚡`,
    punchline: 'Angular takes care of synchronization automatically!'
  },
  memoryTrick: `${title} Key Rule: Model changes automatically reflect in View.`,
  visualDiagram: {
    title: `${title} Architecture Flow`,
    nodes: ['Model ($scope / State)', `Angular Engine (${title})`, 'Two-Way Data Binding', 'Live Rendered View (DOM)'],
    type: 'tree'
  },
  browserBehindScene: {
    title: 'How It Works Behind the Scenes:',
    steps: ['Registers directive / watcher with AngularJS compiler', 'Evaluates expressions during $digest cycle', 'Mutates DOM nodes only when changes are detected']
  },
  code: code || `<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="myApp" ng-controller="myCtrl">
  <div class="card">
    <h2>🅰️ ${title}</h2>
    <p>{{ message }}</p>
  </div>

  <script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
      $scope.message = '${title} is running live in AngularJS!';
    });
  </script>
</body>
</html>`,
  codeBreakdown: [
    { part: 'ng-app / angular.module', label: 'Initializes the AngularJS application boundary and module registry', color: '#dd0031' }
  ],
  commonMistakes: ['❌ Modifying model outside of Angular context without triggering $scope.$apply()'],
  proTips: ['💡 Keep controllers lean by moving business logic and API requests into custom services'],
  interviewQuestions: [`What is the purpose of ${title} and how does it work in AngularJS?`],
  miniChallenge: `Create an interactive AngularJS example demonstrating ${title}.`,
  quiz: quiz || {
    type: 'mcq',
    question: `${title} ka primary purpose kya hai?`,
    options: ['Application UI aur Data synchronization ko simplify karna', 'CSS styles ko completely delete karna', 'Database format badalna', 'Browser band karna'],
    answer: 'Application UI aur Data synchronization ko simplify karna',
    explanation: `${title} provides structured MVC architecture and seamless data binding.`
  },
  summary: [`${title} is a core foundation of Angular/AngularJS development`, 'Enables modular, testable, and maintainable web applications', 'Provides declarative HTML templates and two-way data binding'],
  flashcard: flashcard || { q: `${title} kya hai?`, a: `${title} AngularJS application me data binding, directive control, ya utility manipulation provide karta hai.` }
});

export const angularCourse = {
  id: 'angular',
  title: 'Angular',
  description: 'Complete Masterclass for AngularJS & Modern Angular! Basics, Directives (ng-app, ng-model, ng-bind, ng-repeat), Filters, Converting & Comparing Functions, Controllers, Scope ($scope/$rootScope), Services, AJAX ($http), Form Validation, W3.CSS, Top Interview Questions & 5 Real-World Projects — Masti Sir style mein!',
  icon: '🅰️',
  category: 'frontend',
  certificateName: 'ANGULAR MASTER',
  topicsCount: 64,
  practiceCount: 80,
  projectsCount: 5,
  hoursEstimate: 35,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: ANGULARJS BASICS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'AngularJS Basics',
      lessons: [
        makeLesson({
          id: 'ng-tutorial',
          title: 'AngularJS Tutorial',
          emoji: '📖',
          englishDef: 'AngularJS is an open-source JavaScript MVC/MVVM framework created by Google for building dynamic Single Page Applications (SPAs).',
          hinglishExplain: 'AngularJS Google dwara banaya gaya JavaScript framework hai jo HTML ko dynamic banata hai aur Single Page Web Apps banane ke kaam aata hai.'
        }),
        makeLesson({
          id: 'ng-intro',
          title: 'AngularJS Introduction',
          emoji: '🅰️',
          englishDef: 'AngularJS extends standard HTML with custom attributes called Directives and provides automatic Two-Way Data Binding between Model and View.',
          hinglishExplain: 'AngularJS HTML me custom attributes (jaise `ng-app`, `ng-model`) add karke model aur view ke beech automatic do-tarfa data binding provide karta hai.'
        }),
        makeLesson({
          id: 'ng-cli-setup',
          title: 'Angular CLI | Angular Project Setup',
          emoji: '⚙️',
          englishDef: 'Angular CLI (@angular/cli) is the official command-line interface used to initialize, scaffold, develop, test, and build Angular applications.',
          hinglishExplain: 'Angular CLI terminal command `ng new my-app` se poora project architecture, TypeScript, routing aur build tools ek click me setup kar deta hai.'
        }),
        makeLesson({
          id: 'ng-expressions',
          title: 'AngularJS Expressions',
          emoji: '🔢',
          englishDef: 'AngularJS Expressions are written inside double braces {{ expression }} and evaluate dynamic JavaScript expressions directly into HTML.',
          hinglishExplain: 'Double curly braces `{{ 5 + 5 }}` ya `{{ name }}` ke andar likhe expressions evaluate hokar web page par dynamic value print karte hain.'
        }),
        makeLesson({
          id: 'ng-modules',
          title: 'AngularJS Modules',
          emoji: '📦',
          englishDef: 'An AngularJS Module (angular.module) defines an application container for controllers, directives, filters, and configuration services.',
          hinglishExplain: '`angular.module("myApp", [])` application ka main container hota hai jahan controllers, services aur custom directives organize hote hain.'
        }),
        makeLesson({
          id: 'ng-model-directive',
          title: 'AngularJS ng-model Directive',
          emoji: '🔄',
          englishDef: 'The ng-model directive binds the value of HTML input controls (input, select, textarea) to application data in the scope.',
          hinglishExplain: '`ng-model="userName"` input box ki value ko seedha `$scope.userName` ke sath bind kar deta hai — input type karte hi data instant update hota hai.'
        }),
        makeLesson({
          id: 'ng-data-binding',
          title: 'AngularJS Data Binding',
          emoji: '🔗',
          englishDef: 'Two-Way Data Binding synchronizes data between the Model (JavaScript variables) and the View (DOM HTML) automatically.',
          hinglishExplain: 'Two-way binding ka matlab hai agar user input me change kare toh JavaScript data update hoga, aur agar code me data badle toh UI automatically change hogi.'
        }),
        makeLesson({
          id: 'ng-controllers',
          title: 'AngularJS Controllers',
          emoji: '🎮',
          englishDef: 'An AngularJS Controller is a JavaScript constructor function that controls the application data and business logic for a specific DOM element.',
          hinglishExplain: '`app.controller("myCtrl", function($scope) { ... })` controller view ke logic aur data variables ko manage karta hai.'
        }),
        makeLesson({
          id: 'ng-scope',
          title: 'AngularJS | Scope',
          emoji: '🎯',
          englishDef: 'The Scope ($scope) is the glue object between the Controller and the View, holding model data and emitting events.',
          hinglishExplain: '`$scope` Model aur View ke beech bridge (pul) ka kaam karta hai; `$scope` par define kiye gaye variables HTML template me access ho sakte hain.'
        }),
        makeLesson({
          id: 'ng-services',
          title: 'AngularJS Services',
          emoji: '🛠️',
          englishDef: 'AngularJS Services are singleton objects or functions ($location, $http, $timeout, $interval) that organize and share reusable business logic.',
          hinglishExplain: 'Services reusable business logic aur utilities hoti hain jo multiple controllers ke beech data share karne ke kaam aati hain.'
        }),
        makeLesson({
          id: 'ng-ajax-http',
          title: 'AngularJS | AJAX - $http',
          emoji: '🌐',
          englishDef: 'The $http core service facilitates communication with remote HTTP servers via XMLHttpRequest or JSONP promises.',
          hinglishExplain: '`$http.get("/api/users").then(...)` se backend server aur REST APIs se asynchronous AJAX data fetch kiya jata hai.'
        }),
        makeLesson({
          id: 'ng-tables',
          title: 'AngularJS | Tables',
          emoji: '📊',
          englishDef: 'Rendering dynamic tables in AngularJS is implemented using ng-repeat over array collections combined with orderBy and filter formatting.',
          hinglishExplain: '`<tr ng-repeat="user in users | orderBy:\'name\'">` se array ka data beautifully structured table rows me render hota hai.'
        }),
        makeLesson({
          id: 'ng-select-boxes',
          title: 'AngularJS Select Boxes',
          emoji: '📋',
          englishDef: 'Dropdown select menus in AngularJS are populated using ng-options or ng-repeat directives bound to model values.',
          hinglishExplain: '`ng-options="item.name for item in items"` se dropdown select box me dynamic options bind kiye jaate hain.'
        }),
        makeLesson({
          id: 'ng-sql',
          title: 'AngularJS SQL',
          emoji: '🗄️',
          englishDef: 'Connecting AngularJS to SQL databases involves querying a backend API (PHP, Node.js, Python) that returns JSON records via $http.',
          hinglishExplain: 'AngularJS backend API ke through MySQL/PostgreSQL database se data JSON format me retrieve karke web page par display karta hai.'
        }),
        makeLesson({
          id: 'ng-html-dom',
          title: 'AngularJS HTML DOM',
          emoji: '🖥️',
          englishDef: 'AngularJS provides directives like ng-disabled, ng-show, ng-hide, and ng-if to dynamically manipulate DOM elements and attributes.',
          hinglishExplain: '`ng-show` aur `ng-hide` directives boolean condition ke basis par HTML elements ko display ya hide karne ke kaam aate hain.'
        }),
        makeLesson({
          id: 'ng-events',
          title: 'AngularJS Events',
          emoji: '⚡',
          englishDef: 'AngularJS provides custom event directives (ng-click, ng-dblclick, ng-mouseenter, ng-keypress, ng-change) to handle user interactions.',
          hinglishExplain: '`ng-click="handleClick()"` user ke click event par controller ka function trigger karta hai aur `$digest` cycle run karta hai.'
        }),
        makeLesson({
          id: 'ng-forms',
          title: 'AngularJS | Forms',
          emoji: '📝',
          englishDef: 'AngularJS forms provide state tracking properties ($pristine, $dirty, $valid, $invalid, $submitted) on form and input controls.',
          hinglishExplain: 'AngularJS form controls track karte hain ki user ne input touch kiya ya nahi (`$dirty`), aur input valid hai ya nahi (`$valid`).'
        }),
        makeLesson({
          id: 'ng-form-validation',
          title: 'AngularJS Form Validation',
          emoji: '✅',
          englishDef: 'Client-side validation in AngularJS leverages HTML5 constraints (required, email, minlength) with real-time error messaging classes.',
          hinglishExplain: '`required`, `type="email"`, aur `ng-minlength` se form submit hone se pehle user ke input ko validate karke red error messages dikhaye jaate hain.'
        }),
        makeLesson({
          id: 'ng-api',
          title: 'AngularJS | API',
          emoji: '🧩',
          englishDef: 'The global angular object exposes utility functions like angular.copy(), angular.extend(), angular.forEach(), and angular.isString().',
          hinglishExplain: 'Global `angular` object me built-in helper functions hote hain jaise `angular.forEach()` collections loop karne ke liye aur `angular.copy()` cloning ke liye.'
        }),
        makeLesson({
          id: 'ng-w3-css',
          title: 'AngularJS and W3.CSS',
          emoji: '🎨',
          englishDef: 'Integrating W3.CSS with AngularJS provides lightweight responsive styling classes (w3-container, w3-card, w3-table) for clean UI layout.',
          hinglishExplain: 'W3.CSS classes use karke AngularJS applications me fast, responsive aur clean mobile-first designs banaye ja sakte hain.'
        }),
        makeLesson({
          id: 'ng-includes',
          title: 'AngularJS Includes',
          emoji: '📥',
          englishDef: 'The ng-include directive embeds external HTML fragments into an AngularJS template for modular header, footer, and navigation components.',
          hinglishExplain: '`<div ng-include="\'header.html\'"></div>` se common header ya footer HTML file ko multiple pages me reuse kiya ja sakta hai.'
        }),
        makeLesson({
          id: 'ng-animations',
          title: 'AngularJS Animations',
          emoji: '✨',
          englishDef: 'AngularJS animations are powered by the ngAnimate module, triggering CSS transitions when directives (ng-repeat, ng-show, ng-hide) update the DOM.',
          hinglishExplain: '`ngAnimate` module add karne par jab bhi element show, hide ya add hota hai, smooth fade aur slide CSS animations trigger hote hain.'
        }),
        makeLesson({
          id: 'ng-application',
          title: 'AngularJS | Application',
          emoji: '🚀',
          englishDef: 'Building a complete AngularJS application combines modules, controllers, custom services, filters, and routing (ngRoute/$routeProvider).',
          hinglishExplain: 'Ek complete AngularJS app me controllers, filters, services aur `ngRoute` combine hokar seamless single-page experience banate hain.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: ANGULARJS DIRECTIVES
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'AngularJS Directives',
      lessons: [
        makeLesson({
          id: 'ng-directives-overview',
          title: 'AngularJS Directives',
          emoji: '🧭',
          englishDef: 'Directives are markers on DOM elements (such as attributes, elements, or CSS classes) that tell AngularJS to attach behavior or transform the DOM.',
          hinglishExplain: 'Directives HTML elements ke custom markers hote hain jo AngularJS ko batate hain ki DOM ko kaise manipulate ya transform karna hai.'
        }),
        makeLesson({
          id: 'ng-app-directive',
          title: 'AngularJS ng-app Directive',
          emoji: '🚀',
          englishDef: 'The ng-app directive designates the root element of an AngularJS application and auto-bootstraps the application on page load.',
          hinglishExplain: '`ng-app="myApp"` HTML page ke root tag par lagaya jata hai jo AngularJS application ko automatically start (bootstrap) karta hai.'
        }),
        makeLesson({
          id: 'ng-bind-directive',
          title: 'AngularJS ng-bind Directive',
          emoji: '🪢',
          englishDef: 'The ng-bind directive replaces the text content of a DOM element with the value of an expression, preventing raw {{ }} flickering on load.',
          hinglishExplain: '`<span ng-bind="name"></span>` page load hote waqt `{{ name }}` ka uncompiled flicker rokte hue smooth text display karta hai.'
        }),
        makeLesson({
          id: 'ng-bind-html-directive',
          title: 'AngularJS ng-bind-html Directive',
          emoji: '🛡️',
          englishDef: 'The ng-bind-html directive evaluates an expression and inserts the resulting sanitized HTML string into the element using the $sanitize service.',
          hinglishExplain: '`ng-bind-html` dynamic HTML strings ko securely sanitize karke element ke andar safe render karta hai (XSS protection).'
        }),
        makeLesson({
          id: 'ng-bind-template-directive',
          title: 'AngularJS ng-bind-template Directive',
          emoji: '📄',
          englishDef: 'The ng-bind-template directive specifies that the element text content should be replaced with a string interpolated with multiple {{ }} expressions.',
          hinglishExplain: '`ng-bind-template="{{firstName}} {{lastName}}"` multiple variables ko ek hi element me interpolate karne ke kaam aata hai.'
        }),
        makeLesson({
          id: 'ng-blur-directive',
          title: 'AngularJS ng-blur Directive',
          emoji: '🌫️',
          englishDef: 'The ng-blur directive specifies custom behavior to evaluate when an HTML element loses input focus.',
          hinglishExplain: '`ng-blur="validateField()"` input field se focus hatne par validation function ko execute karta hai.'
        }),
        makeLesson({
          id: 'ng-change-directive',
          title: 'AngularJS ng-change Directive',
          emoji: '🔄',
          englishDef: 'The ng-change directive evaluates an expression whenever the input value changes due to user interaction (requires ng-model).',
          hinglishExplain: '`ng-change="onSearch()"` input box me text change hone par instant search ya calculations trigger karta hai.'
        }),
        makeLesson({
          id: 'ng-checked-directive',
          title: 'AngularJS ng-checked Directive',
          emoji: '☑️',
          englishDef: 'The ng-checked directive sets the checked attribute on checkbox or radio input elements based on a boolean expression.',
          hinglishExplain: '`ng-checked="allSelected"` checkbox ko condition true hone par automatically tick (checked) kar deta hai.'
        }),
        makeLesson({
          id: 'ng-class-directive',
          title: 'AngularJS ng-class Directive',
          emoji: '🎨',
          englishDef: 'The ng-class directive dynamically sets CSS classes on an HTML element by evaluating expressions returning strings, arrays, or objects.',
          hinglishExplain: '`ng-class="{ \'active\': isActive, \'danger\': hasError }"` condition ke basis par CSS classes dynamically add/remove karta hai.'
        }),
        makeLesson({
          id: 'ng-class-even-directive',
          title: 'AngularJS ng-class-even Directive',
          emoji: '2️⃣',
          englishDef: 'The ng-class-even directive works inside ng-repeat to apply specific CSS classes only on even-numbered rows (0, 2, 4...).',
          hinglishExplain: '`ng-class-even="\'even-row\'"` tables me even rows ko alternate zebra stripe background color dene ke kaam aata hai.'
        }),
        makeLesson({
          id: 'ng-class-odd-directive',
          title: 'AngularJS ng-class-odd Directive',
          emoji: '1️⃣',
          englishDef: 'The ng-class-odd directive works inside ng-repeat to apply specific CSS classes only on odd-numbered rows (1, 3, 5...).',
          hinglishExplain: '`ng-class-odd="\'odd-row\'"` tables me odd rows par styling apply karta hai.'
        }),
        makeLesson({
          id: 'ng-click-directive',
          title: 'AngularJS ng-click Directive',
          emoji: '🖱️',
          englishDef: 'The ng-click directive specifies custom behavior to evaluate when an element is clicked by the user.',
          hinglishExplain: '`ng-click="saveData()"` button click par JavaScript function run karta hai.'
        }),
        makeLesson({
          id: 'ng-cloak-directive',
          title: 'AngularJS ng-cloak Directive',
          emoji: '🧥',
          englishDef: 'The ng-cloak directive prevents raw AngularJS template code from flickering on screen before the application fully compiles.',
          hinglishExplain: '`ng-cloak` CSS `[ng-cloak] { display: none; }` ke sath milkar page load hone tak raw template code ko hide rakhta hai.'
        }),
        makeLesson({
          id: 'ng-controller-directive',
          title: 'AngularJS ng-controller Directive',
          emoji: '🎮',
          englishDef: 'The ng-controller directive attaches a Controller class to the view, instantiating a new child scope for that DOM subtree.',
          hinglishExplain: '`ng-controller="UserCtrl"` specific HTML section ko controller se link karta hai aur naya `$scope` create karta hai.'
        }),
        makeLesson({
          id: 'ng-directives-reference',
          title: 'AngularJS Directives Complete Reference',
          emoji: '📚',
          englishDef: 'Complete catalog of all core AngularJS built-in directives (ng-repeat, ng-show, ng-hide, ng-if, ng-switch, ng-src, ng-href, ng-style).',
          hinglishExplain: 'AngularJS ki sabhi major directives ka complete reference guide jo dynamic DOM manipulation ko cover karta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: ANGULARJS FILTERS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'AngularJS Filters',
      lessons: [
        makeLesson({
          id: 'ng-filters-overview',
          title: 'AngularJS | Filters',
          emoji: '🧹',
          englishDef: 'Filters transform and format data expressions using the pipe (|) syntax inside template bindings, controllers, and services.',
          hinglishExplain: 'Filters pipe `|` character use karke data ko format (currency, date, numbers, case) karke display karte hain.'
        }),
        makeLesson({
          id: 'ng-filter-currency',
          title: 'AngularJS currency Filter',
          emoji: '💰',
          englishDef: 'The currency filter formats a number into a localized currency string ($1,250.00, ₹500.00) with configurable currency symbols.',
          hinglishExplain: '`{{ amount | currency:"₹" }}` number ko currency format me convert karke symbol aur decimals ke sath dikhata hai.'
        }),
        makeLesson({
          id: 'ng-filter-date',
          title: 'AngularJS | date Filter',
          emoji: '📅',
          englishDef: 'The date filter formats a date timestamp into customizable string formats (yyyy-MM-dd, mediumDate, fullDate).',
          hinglishExplain: '`{{ timestamp | date:"dd/MM/yyyy" }}` date timestamp ko readable calendar format me convert karta hai.'
        }),
        makeLesson({
          id: 'ng-filter-array',
          title: 'AngularJS filter Filter',
          emoji: '🔍',
          englishDef: 'The filter filter selects a subset of items from an array based on a search string or custom predicate object.',
          hinglishExplain: '`ng-repeat="user in users | filter:searchQuery"` search box ke text ke base par live items filter karta hai.'
        }),
        makeLesson({
          id: 'ng-filter-json',
          title: 'AngularJS json Filter',
          emoji: '📦',
          englishDef: 'The json filter formats a JavaScript object into a pretty-printed, indented JSON string for easy debugging in templates.',
          hinglishExplain: '`{{ userObject | json }}` complex objects ko formatted JSON string me print karke debugging easy banata hai.'
        }),
        makeLesson({
          id: 'ng-filter-limitto',
          title: 'AngularJS limitTo Filter',
          emoji: '✂️',
          englishDef: 'The limitTo filter returns an array or string containing only a specified number of elements, starting from the beginning or an optional index.',
          hinglishExplain: '`{{ myString | limitTo:50 }}` ya `ng-repeat="item in items | limitTo:5"` results ko specific limit tak restrict karta hai.'
        }),
        makeLesson({
          id: 'ng-filter-lowercase',
          title: 'AngularJS lowercase Filter',
          emoji: '🔡',
          englishDef: 'The lowercase filter formats a string into all lowercase characters for uniform display.',
          hinglishExplain: '`{{ email | lowercase }}` text ko small letters me convert karta hai.'
        }),
        makeLesson({
          id: 'ng-filter-number',
          title: 'AngularJS number Filter',
          emoji: '🔢',
          englishDef: 'The number filter formats a number into text with comma separators and a specified number of decimal fraction digits.',
          hinglishExplain: '`{{ 1234567.89 | number:2 }}` number ko commas `1,234,567.89` ke sath format karta hai.'
        }),
        makeLesson({
          id: 'ng-filter-orderby',
          title: 'AngularJS orderBy Filter',
          emoji: '📶',
          englishDef: 'The orderBy filter sorts an array by an expression predicate in ascending or descending order.',
          hinglishExplain: '`ng-repeat="item in items | orderBy:\'price\':true"` items ko price ke descending order me sort karta hai.'
        }),
        makeLesson({
          id: 'ng-filter-uppercase',
          title: 'AngularJS uppercase Filter',
          emoji: '🔤',
          englishDef: 'The uppercase filter formats a string into all capital uppercase characters.',
          hinglishExplain: '`{{ name | uppercase }}` string ko poora capital letters me convert karta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: CONVERTING FUNCTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'AngularJS Converting Functions',
      lessons: [
        makeLesson({
          id: 'ng-fn-lowercase',
          title: 'AngularJS angular.lowercase() Function',
          emoji: '🔡',
          englishDef: 'The angular.lowercase(string) function converts the specified string to all lowercase characters.',
          hinglishExplain: '`angular.lowercase("HELLO")` string ko programmatically `"hello"` me convert karta hai.'
        }),
        makeLesson({
          id: 'ng-fn-uppercase',
          title: 'AngularJS angular.uppercase() Function',
          emoji: '🔠',
          englishDef: 'The angular.uppercase(string) function converts the specified string to all uppercase characters.',
          hinglishExplain: '`angular.uppercase("world")` string ko `"WORLD"` me convert karta hai.'
        }),
        makeLesson({
          id: 'ng-fn-foreach',
          title: 'AngularJS angular.forEach() Function',
          emoji: '🔁',
          englishDef: 'The angular.forEach(obj, iterator, [context]) function iterates over key-value pairs of an object or elements of an array.',
          hinglishExplain: '`angular.forEach(items, function(value, key) { ... })` collections aur objects par clean iteration provide karta hai.'
        }),
        makeLesson({
          id: 'ng-fn-fromjson',
          title: 'AngularJS angular.fromJson() Function',
          emoji: '🔄',
          englishDef: 'angular.fromJson(jsonString) deserializes a JSON-formatted string into a native JavaScript object or array.',
          hinglishExplain: '`angular.fromJson(str)` JSON text string ko wapas JavaScript object me convert (parse) karta hai.'
        }),
        makeLesson({
          id: 'ng-fn-tojson',
          title: 'AngularJS angular.toJson() Function',
          emoji: '📤',
          englishDef: 'angular.toJson(obj, pretty) serializes a JavaScript object into a JSON string, stripping internal properties starting with $$.',
          hinglishExplain: '`angular.toJson(data)` object ko JSON string me serialize karta hai aur internal `$$` properties ko automatically remove karta hai.'
        }),
        makeLesson({
          id: 'ng-fn-copy-extend',
          title: 'AngularJS angular.copy() & angular.extend()',
          emoji: '📑',
          englishDef: 'angular.copy() performs a deep clone of an object, while angular.extend() shallow-copies properties from source objects to a destination.',
          hinglishExplain: '`angular.copy()` object ki deep copy banata hai jisse original data mutate nahi hota, aur `angular.extend()` multiple objects ko merge karta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: COMPARING FUNCTIONS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'AngularJS Comparing Functions',
      lessons: [
        makeLesson({
          id: 'ng-fn-isarray',
          title: 'AngularJS angular.isArray() Function',
          emoji: '📦',
          englishDef: 'angular.isArray(value) determines if a reference is an Array, returning a boolean true or false.',
          hinglishExplain: '`angular.isArray(val)` check karta hai ki variable Array hai ya nahi.'
        }),
        makeLesson({
          id: 'ng-fn-isdate',
          title: 'AngularJS angular.isDate() Function',
          emoji: '📅',
          englishDef: 'angular.isDate(value) determines if a reference is a JavaScript Date object.',
          hinglishExplain: '`angular.isDate(val)` check karta hai ki value valid Date object hai ya nahi.'
        }),
        makeLesson({
          id: 'ng-fn-isdefined',
          title: 'AngularJS angular.isDefined() Function',
          emoji: '❓',
          englishDef: 'angular.isDefined(val) verifies whether a variable has been defined (is not undefined).',
          hinglishExplain: '`angular.isDefined(val)` check karta hai ki variable me koi value defined hai ya wo undefined hai.'
        }),
        makeLesson({
          id: 'ng-fn-iselement',
          title: 'AngularJS angular.isElement() Function',
          emoji: '🧱',
          englishDef: 'angular.isElement(value) determines if a reference is a DOM element (or wrapped in jqLite/jQuery).',
          hinglishExplain: '`angular.isElement(val)` check karta hai ki reference valid DOM element ya jqLite element hai.'
        }),
        makeLesson({
          id: 'ng-fn-isfunction',
          title: 'AngularJS angular.isFunction() Function',
          emoji: '⚡',
          englishDef: 'angular.isFunction(val) verifies if a reference is a JavaScript function.',
          hinglishExplain: '`angular.isFunction(val)` check karta hai ki passed value executable function hai ya nahi.'
        }),
        makeLesson({
          id: 'ng-fn-isnumber',
          title: 'AngularJS angular.isNumber() Function',
          emoji: '🔢',
          englishDef: 'angular.isNumber(val) determines if a reference is a numeric primitive value.',
          hinglishExplain: '`angular.isNumber(val)` check karta hai ki variable number type hai ya nahi.'
        }),
        makeLesson({
          id: 'ng-fn-isobject',
          title: 'AngularJS angular.isObject() Function',
          emoji: '🧩',
          englishDef: 'angular.isObject(val) verifies if a reference is a non-null JavaScript object.',
          hinglishExplain: '`angular.isObject(val)` check karta hai ki value non-null object hai.'
        }),
        makeLesson({
          id: 'ng-fn-isstring',
          title: 'AngularJS | angular.isString() Function',
          emoji: '🔤',
          englishDef: 'angular.isString(val) determines if a reference is a string value.',
          hinglishExplain: '`angular.isString(val)` check karta hai ki value string type hai ya nahi.'
        }),
        makeLesson({
          id: 'ng-fn-isundefined',
          title: 'AngularJS angular.isUndefined() Function',
          emoji: '🚫',
          englishDef: 'angular.isUndefined(val) verifies if a variable has not been defined (is undefined).',
          hinglishExplain: '`angular.isUndefined(val)` check karta hai ki value undefined hai ya nahi.'
        }),
        makeLesson({
          id: 'ng-fn-equals',
          title: 'AngularJS angular.equals() Function',
          emoji: '⚖️',
          englishDef: 'angular.equals(o1, o2) performs deep structural comparison of two objects, ignoring internal $$ properties and function references.',
          hinglishExplain: '`angular.equals(obj1, obj2)` do complex objects ka deep content comparison karta hai.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: QUESTIONS & INTERVIEWS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'AngularJS Questions',
      lessons: [
        makeLesson({
          id: 'ng-qna-core',
          title: 'AngularJS Top Interview Questions (Core Concepts)',
          emoji: '💡',
          englishDef: 'Master the top frequently asked AngularJS interview questions regarding two-way data binding, scope inheritance, dependency injection, and directives.',
          hinglishExplain: 'AngularJS ke most popular technical interview questions — MVC pattern, $scope vs $rootScope, aur DI lifecycle.'
        }),
        makeLesson({
          id: 'ng-qna-diff',
          title: 'AngularJS vs Modern Angular 17/18/19 Differences',
          emoji: '🔄',
          englishDef: 'Key architectural differences between AngularJS (1.x JavaScript MVC) and modern Angular (TypeScript, Standalone Components, Signals, RxJS).',
          hinglishExplain: 'Puraane AngularJS 1.x aur modern Angular (v17/v18) ke beech architecture, performance aur syntax ke differences.'
        }),
        makeLesson({
          id: 'ng-qna-digest',
          title: 'AngularJS Scope LifeCycle & Digest Cycle Questions',
          emoji: '⚙️',
          englishDef: 'In-depth breakdown of the $digest cycle, $watch list, $apply(), dirty checking, and solving $apply already in progress errors.',
          hinglishExplain: 'AngularJS ka `$digest` cycle kaise kaam karta hai, dirty checking mechanism, aur `$scope.$apply()` ka sahi use.'
        }),
        makeLesson({
          id: 'ng-qna-perf',
          title: 'AngularJS Performance & Migration Best Practices',
          emoji: '🚀',
          englishDef: 'Optimization techniques in AngularJS: one-time bindings (::), reducing watchers, track by in ng-repeat, and step-by-step upgrade to Angular.',
          hinglishExplain: 'AngularJS apps ko fast banane ke tareeqe — `::` one-time binding, watchers limit karna, aur modern Angular me migration roadmap.'
        })
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 7: REAL-WORLD PROJECTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Real-World AngularJS Projects',
      lessons: [
        makeLesson({
          id: 'ng-project-taskmaster',
          title: 'Project 1: TaskMaster MVC - AngularJS Todo & Task Planner',
          emoji: '📝',
          xpReward: 50,
          badgeName: 'TaskMaster Pro',
          englishDef: 'Build a full MVC Task Planner with categories, status toggles ($valid/$dirty tracking), localStorage persistence, and live stats counters.',
          hinglishExplain: 'TaskMaster ek interactive Todo application hai jisme category filtering, completed tasks counter, aur localStorage data saving hai.'
        }),
        makeLesson({
          id: 'ng-project-quickbazaar',
          title: 'Project 2: QuickBazaar - AngularJS Product Catalog with Custom Filters',
          emoji: '🛍️',
          xpReward: 50,
          badgeName: 'Catalog Master',
          englishDef: 'Build a dynamic E-Commerce Product Catalog featuring live search filter, price sorting (orderBy), currency formatting, and shopping cart calculator.',
          hinglishExplain: 'QuickBazaar me product grid, instant search filter, price sort aur cart total calculation implement kiya gaya hai.'
        }),
        makeLesson({
          id: 'ng-project-medicare',
          title: 'Project 3: MediCare Portal - Patient Record Manager with $http API',
          emoji: '🏥',
          xpReward: 50,
          badgeName: 'HealthTech Builder',
          englishDef: 'Build a Patient Records Management dashboard with mock $http API calls, patient registration form with validation, and medical history table.',
          hinglishExplain: 'MediCare me hospital patient records, `$http` AJAX data fetching, aur form validation system banaya gaya hai.'
        }),
        makeLesson({
          id: 'ng-project-finpulse',
          title: 'Project 4: FinPulse - Currency Converter & Expense Tracker',
          emoji: '💵',
          xpReward: 50,
          badgeName: 'FinTech Wizard',
          englishDef: 'Build a multi-currency conversion utility with real-time rate multipliers, monthly expense tracker, and category distribution percentages.',
          hinglishExplain: 'FinPulse me real-time currency converter aur monthly budget expense tracking dashboard create kiya gaya hai.'
        }),
        makeLesson({
          id: 'ng-project-quizwhiz',
          title: 'Project 5: QuizWhiz - Interactive Timed MCQ Assessment Engine',
          emoji: '🧠',
          xpReward: 50,
          badgeName: 'Quiz Master',
          englishDef: 'Build an interactive timed Quiz Assessment Engine with score tallying, answer review mode, timer countdown ($interval), and results badge.',
          hinglishExplain: 'QuizWhiz me live timer, MCQ question flow, score calculation aur instant result analysis dashboard shamil hai.'
        })
      ]
    }
  ]
};

export default angularCourse;
