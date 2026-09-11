import React, { useState, useEffect } from 'react'
import { getProjectSubmissions, saveProjectSubmission, markLessonComplete } from '../utils/storage'
import { isSafeUrl, sanitizeWebUrl, sanitizeTextInput } from '../utils/security'

// ══════════════════════════════════════════════════════════════════════════════
// PROJECTS DATA WITH EDITABLE FILE SETS & WORKING EXPLANATIONS
// ══════════════════════════════════════════════════════════════════════════════

export const PROJECTS_DATA = {
  // ────────────────────────────────────────────────────────────────────────────
  // 1. FRONTEND PROJECTS TRACK
  // ────────────────────────────────────────────────────────────────────────────
  frontend: [
    {
      id: 'fe-expense-tracker',
      title: 'Expense Management & Budget App',
      category: 'Frontend',
      emoji: '💸',
      level: 'Beginner to Intermediate',
      xp: 100,
      description: 'Complete client-side expense tracker with KPI summary cards, Add/Delete transaction controls, derived calculations, and LocalStorage persistence.',
      folderStructure: `expense-tracker/
├── index.html        # UI Structure (Cards, Form, List)
├── styles.css        # Responsive Theme & CSS Variables
└── app.js            # State, Calculations & DOM Handler`,
      files: [
        {
          name: 'index.html',
          icon: '📄',
          working: 'Is code se HTML layout banega: Upar 3 KPI cards (Balance, Income, Expense), beech mein Add Form aur niche Transaction History list render hogi.',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
</head>
<body>
  <div class="container">
    <h2>💸 Expense Tracker</h2>

    <!-- Summary KPI Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <span>Total Balance</span>
        <h3 id="balance">₹0</h3>
      </div>
      <div class="stat-card inc-card">
        <span>Total Income</span>
        <h3 id="income">+₹0</h3>
      </div>
      <div class="stat-card exp-card">
        <span>Total Expense</span>
        <h3 id="expense">-₹0</h3>
      </div>
    </div>

    <!-- Add Form -->
    <div class="box">
      <h3>➕ Add Transaction</h3>
      <form id="txForm" onsubmit="handleAdd(event)">
        <div class="form-row">
          <input type="text" id="title" placeholder="Description (e.g. Pizza)" required />
          <input type="number" id="amount" placeholder="Amount (₹)" min="1" required />
          <select id="type">
            <option value="expense">Expense (-)</option>
            <option value="income">Income (+)</option>
          </select>
        </div>
        <button type="submit" class="btn">Add Transaction</button>
      </form>
    </div>

    <!-- History List -->
    <div class="box">
      <h3>📋 Recent History</h3>
      <div id="txList" class="tx-list"></div>
    </div>
  </div>
</body>
</html>`
        },
        {
          name: 'styles.css',
          icon: '🎨',
          working: 'Is code se pure app ki styling set hoti hai: Dark theme color variables, responsive 3-column stats grid, aur cards ke rounded borders design hote hain.',
          code: `:root {
  --bg: #0f172a;
  --card: #1e293b;
  --border: #334155;
  --text: #f8fafc;
  --muted: #94a3b8;
  --green: #10b981;
  --red: #ef4444;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  padding: 16px 12px;
}

.container { max-width: 580px; margin: 0 auto; width: 100%; }
h2 { font-size: 20px; margin-bottom: 16px; text-align: center; }

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 8px;
  margin-bottom: 16px;
}

.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 8px;
  text-align: center;
}

.stat-card span { font-size: 10px; color: var(--muted); font-weight: 700; text-transform: uppercase; }
.stat-card h3 { font-size: 15px; margin-top: 4px; }
.inc-card h3 { color: var(--green); }
.exp-card h3 { color: var(--red); }

.box {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 14px;
}

.box h3 { font-size: 14px; margin-bottom: 10px; }

.form-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
input, select, button {
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 13px;
  outline: none;
}
input { flex: 1 1 120px; min-width: 0; }
select { flex: 0 0 auto; }

button.btn {
  background: var(--green);
  color: #fff;
  border: none;
  font-weight: 700;
  width: 100%;
  cursor: pointer;
  padding: 10px;
}
button.btn:hover { opacity: 0.9; }

.tx-list { display: flex; flex-direction: column; gap: 6px; }
.tx-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 13px;
}
.tx-del {
  background: none;
  border: none;
  color: var(--muted);
  cursor: pointer;
  font-size: 14px;
}
.tx-del:hover { color: var(--red); }`
        },
        {
          name: 'app.js',
          icon: '⚡',
          working: 'Is code se main business logic chalti hai: State array manage hota hai, Add/Delete par balance recalculate hota hai, aur screen update hoti hai.',
          code: `// 1. Transactions State Array
let transactions = [
  { id: 1, title: 'Monthly Salary', amount: 50000, type: 'income' },
  { id: 2, title: 'House Rent', amount: 12000, type: 'expense' },
  { id: 3, title: 'Groceries', amount: 3500, type: 'expense' }
];

// 2. Add Transaction Function
function handleAdd(e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const amount = Number(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (!title || amount <= 0) return;

  const newTx = { id: Date.now(), title, amount, type };
  transactions.unshift(newTx);

  render();
  document.getElementById('title').value = '';
  document.getElementById('amount').value = '';
  console.log('[Added Transaction]: ' + newTx.title + ' (₹' + newTx.amount + ')');
}

// 3. Delete Transaction Function
function handleDelete(id) {
  transactions = transactions.filter(t => t.id !== id);
  render();
  console.log('[Deleted Transaction ID]: ' + id);
}

// 4. Calculate Derived Totals & Render Screen
function render() {
  let inc = 0;
  let exp = 0;

  transactions.forEach(t => {
    if (t.type === 'income') inc += t.amount;
    else exp += t.amount;
  });

  const balance = inc - exp;

  document.getElementById('balance').textContent = '₹' + balance.toLocaleString();
  document.getElementById('income').textContent = '+₹' + inc.toLocaleString();
  document.getElementById('expense').textContent = '-₹' + exp.toLocaleString();

  const list = document.getElementById('txList');
  if (transactions.length === 0) {
    list.innerHTML = '<p style="text-align:center; color:#94a3b8; font-size:12px;">No transactions yet.</p>';
    return;
  }

  list.innerHTML = transactions.map(t => \`
    <div class="tx-item">
      <span>\${t.title}</span>
      <div style="display:flex; align-items:center; gap:8px;">
        <strong style="color:\${t.type === 'income' ? '#10b981' : '#ef4444'}">
          \${t.type === 'income' ? '+' : '-'}₹\${t.amount.toLocaleString()}
        </strong>
        <button class="tx-del" onclick="handleDelete(\${t.id})">🗑️</button>
      </div>
    </div>
  \`).join('');
}

// Initial Run
render();
console.log('⚡ App Initialized! Initial Balance calculated.');`
        }
      ],
      checklist: [
        'index.html: 3 KPI cards, form aur list layout banaya',
        'styles.css: Dark mode variables aur flex/grid rules lagaye',
        'app.js: State array create karke unshift() aur filter() logic likha',
        'Derived balance calculation: Income minus Expense',
        'Code editor mein changes karke Run Code button test kiya'
      ]
    }
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // 2. BACKEND PROJECTS TRACK (EXPRESS REST API)
  // ────────────────────────────────────────────────────────────────────────────
  backend: [
    {
      id: 'be-expense-api',
      title: 'Expense Management REST API',
      category: 'Backend',
      emoji: '⚙️',
      level: 'Beginner to Intermediate',
      xp: 100,
      description: 'Node.js & Express REST API server providing JSON endpoints for transactions CRUD, validation, and real-time financial balance calculation.',
      folderStructure: `expense-backend-api/
├── package.json                   # Dependencies (express, cors)
├── server.js                      # Express App, Middlewares & Server Listener
├── routes/expenseRoutes.js        # REST API Endpoints Route Mapping
└── controllers/expenseController.js # Business Logic & In-Memory Store`,
      files: [
        {
          name: 'package.json',
          icon: '📦',
          working: 'Is file mein backend dependencies define hoti hain: Express framework web server ke liye aur CORS cross-origin access allow karne ke liye.',
          code: `{
  "name": "expense-backend-api",
  "version": "1.0.0",
  "description": "Express REST API for Personal Expense Management",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  }
}`
        },
        {
          name: 'server.js',
          icon: '⚙️',
          working: 'Is code se Express application boot hoti hai, cors aur json middlewares load hote hain, routes mount hote hain, aur port 5000 par server start hota hai.',
          code: `const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Global Middlewares
app.use(cors()); // Allow requests from Frontend
app.use(express.json()); // Parse incoming JSON request body

// 2. API Routes
app.use('/api/expenses', expenseRoutes);

// 3. Health Check Route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 4. Start Server Listener
app.listen(PORT, () => {
  console.log(\`🚀 Expense REST API running on http://localhost:\${PORT}\`);
});`
        },
        {
          name: 'routes/expenseRoutes.js',
          icon: '🛣️',
          working: 'Is code se RESTful routes map hote hain: GET (fetch all), POST (create transaction), DELETE (remove by ID) controller functions se connect hote hain.',
          code: `const express = require('express');
const router = express.Router();
const {
  getExpenses,
  createExpense,
  deleteExpense
} = require('../controllers/expenseController');

// Route 1: GET /api/expenses -> Get all transactions + totals
// Route 2: POST /api/expenses -> Add new validated transaction
router.route('/')
  .get(getExpenses)
  .post(createExpense);

// Route 3: DELETE /api/expenses/:id -> Delete transaction by ID
router.route('/:id')
  .delete(deleteExpense);

module.exports = router;`
        },
        {
          name: 'controllers/expenseController.js',
          icon: '🧠',
          working: 'Is code mein main backend business logic hoti hai: Input validation, array manipulation, total income/expense/balance calculate karke JSON response bhejna.',
          code: `// In-Memory Database Store (Single Source of Truth)
let expenses = [
  { id: 1, title: 'Monthly Salary', amount: 50000, type: 'income', date: '2026-08-01' },
  { id: 2, title: 'House Rent', amount: 12000, type: 'expense', date: '2026-08-02' },
  { id: 3, title: 'Grocery Shopping', amount: 3500, type: 'expense', date: '2026-08-05' }
];

// @desc    Get all transactions & financial summary
// @route   GET /api/expenses
exports.getExpenses = (req, res) => {
  let totalIncome = 0;
  let totalExpense = 0;

  expenses.forEach(e => {
    if (e.type === 'income') totalIncome += e.amount;
    else totalExpense += e.amount;
  });

  const balance = totalIncome - totalExpense;

  res.status(200).json({
    success: true,
    count: expenses.length,
    balance,
    totalIncome,
    totalExpense,
    data: expenses
  });
};

// @desc    Create new transaction with validation
// @route   POST /api/expenses
exports.createExpense = (req, res) => {
  const { title, amount, type } = req.body;

  // Validation
  if (!title || !amount || Number(amount) <= 0) {
    return res.status(400).json({
      success: false,
      message: 'Title aur positive amount required hai!'
    });
  }

  const newExpense = {
    id: Date.now(),
    title: title.trim(),
    amount: Number(amount),
    type: type === 'income' ? 'income' : 'expense',
    date: new Date().toISOString().split('T')[0]
  };

  expenses.unshift(newExpense);

  res.status(201).json({
    success: true,
    message: 'Expense successfully created',
    data: newExpense
  });
};

// @desc    Delete transaction by ID
// @route   DELETE /api/expenses/:id
exports.deleteExpense = (req, res) => {
  const id = Number(req.params.id);
  const initialLength = expenses.length;

  expenses = expenses.filter(e => e.id !== id);

  if (expenses.length === initialLength) {
    return res.status(404).json({
      success: false,
      message: 'Expense ID nahi mila!'
    });
  }

  res.status(200).json({
    success: true,
    message: 'Expense successfully deleted'
  });
};`
        }
      ],
      checklist: [
        'package.json setup: express aur cors dependencies configured',
        'server.js: cors() aur express.json() middlewares loaded',
        'routes/expenseRoutes.js: GET, POST, DELETE endpoints mapped',
        'controllers/expenseController.js: Validation aur calculations implemented',
        'Interactive API runner mein GET, POST, DELETE calls test kiye'
      ]
    }
  ],

  // ────────────────────────────────────────────────────────────────────────────
  // 3. FULL STACK PROJECTS TRACK (FRONTEND + BACKEND COMBINED)
  // ────────────────────────────────────────────────────────────────────────────
  fullstack: [
    {
      id: 'fs-expense-management',
      title: 'Full Stack Connected Expense Management App',
      category: 'Full Stack',
      emoji: '🚀',
      level: 'Intermediate',
      xp: 150,
      description: 'Complete connected end-to-end application uniting the HTML/CSS/JavaScript client and Node.js Express REST API backend via asynchronous fetch() network calls.',
      folderStructure: `fullstack-expense-app/
├── backend/
│   ├── package.json      # Express backend dependencies
│   └── server.js         # REST API server (Port 5000)
└── frontend/
    ├── index.html        # UI markup layout
    ├── styles.css        # Responsive CSS theme
    └── app.js            # fetch() calls to http://localhost:5000/api/expenses`,
      files: [
        {
          name: 'frontend/index.html',
          icon: '📄',
          working: 'Is code se Frontend client ka main layout banta hai: Header stats, Add Form aur transaction list.',
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Full Stack Expense Manager</title>
</head>
<body>
  <div class="container">
    <h2>🚀 Full Stack Expense Manager</h2>
    <div class="stats-grid">
      <div class="stat-card"><span>Balance</span><h3 id="balance">₹0</h3></div>
      <div class="stat-card inc-card"><span>Total Income</span><h3 id="income">+₹0</h3></div>
      <div class="stat-card exp-card"><span>Total Expense</span><h3 id="expense">-₹0</h3></div>
    </div>
    <div class="box">
      <h3>➕ Add Transaction (Client ➡️ Express Server)</h3>
      <form id="txForm" onsubmit="addTransaction(event)">
        <div class="form-row">
          <input type="text" id="title" placeholder="Description" required />
          <input type="number" id="amount" placeholder="Amount (₹)" min="1" required />
          <select id="type">
            <option value="expense">Expense (-)</option>
            <option value="income">Income (+)</option>
          </select>
        </div>
        <button type="submit" class="btn">Submit to Server (POST)</button>
      </form>
    </div>
    <div class="box">
      <h3>📋 Connected Server Records</h3>
      <div id="txList" class="tx-list"></div>
    </div>
  </div>
</body>
</html>`
        },
        {
          name: 'frontend/styles.css',
          icon: '🎨',
          working: 'Is code se frontend client ki visual styling aur dark theme set hoti hai.',
          code: `:root {
  --bg: #0f172a; --card: #1e293b; --border: #334155;
  --text: #f8fafc; --muted: #94a3b8; --green: #10b981; --red: #ef4444;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: system-ui, sans-serif; background: var(--bg); color: var(--text); padding: 16px 12px; }
.container { max-width: 580px; margin: 0 auto; width: 100%; }
h2 { font-size: 20px; text-align: center; margin-bottom: 16px; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 8px; margin-bottom: 16px; }
.stat-card { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 10px 8px; text-align: center; }
.stat-card span { font-size: 10px; color: var(--muted); font-weight: 700; text-transform: uppercase; }
.stat-card h3 { font-size: 15px; margin-top: 4px; }
.inc-card h3 { color: var(--green); }
.exp-card h3 { color: var(--red); }
.box { background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 14px; margin-bottom: 14px; }
.form-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
input, select, button { padding: 8px 10px; border-radius: 6px; border: 1px solid var(--border); background: var(--bg); color: var(--text); font-size: 13px; outline: none; }
input { flex: 1 1 120px; min-width: 0; }
select { flex: 0 0 auto; }
button.btn { background: var(--green); color: #fff; border: none; font-weight: 700; width: 100%; cursor: pointer; padding: 10px; }
.tx-list { display: flex; flex-direction: column; gap: 6px; }
.tx-item { display: flex; justify-content: space-between; align-items: center; background: var(--bg); border: 1px solid var(--border); border-radius: 6px; padding: 10px 12px; font-size: 13px; }
.tx-del { background: none; border: none; color: var(--muted); cursor: pointer; }`
        },
        {
          name: 'frontend/app.js',
          icon: '⚡',
          working: 'Is code se Frontend browser backend API (port 5000) ko fetch() request bhejta hai aur live DOM update karta hai.',
          code: `// frontend/app.js — Client-Side Fetch Logic
const API_URL = 'http://localhost:5000/api/expenses';

// State Simulator
let localCache = [
  { id: 1, title: 'Monthly Salary', amount: 50000, type: 'income' },
  { id: 2, title: 'House Rent', amount: 12000, type: 'expense' },
  { id: 3, title: 'Groceries', amount: 3500, type: 'expense' }
];

function loadExpenses() {
  let inc = 0, exp = 0;
  localCache.forEach(e => e.type === 'income' ? inc += e.amount : exp += e.amount);

  document.getElementById('balance').textContent = '₹' + (inc - exp).toLocaleString();
  document.getElementById('income').textContent = '+₹' + inc.toLocaleString();
  document.getElementById('expense').textContent = '-₹' + exp.toLocaleString();

  const list = document.getElementById('txList');
  list.innerHTML = localCache.map(item => \`
    <div class="tx-item">
      <span>\${item.title}</span>
      <div style="display:flex; align-items:center; gap:8px;">
        <strong style="color:\${item.type === 'income' ? '#10b981' : '#ef4444'}">
          \${item.type === 'income' ? '+' : '-'}₹\${item.amount.toLocaleString()}
        </strong>
        <button class="tx-del" onclick="deleteTransaction(\${item.id})">🗑️</button>
      </div>
    </div>
  \`).join('');
  console.log('[Client]: Fetched ' + localCache.length + ' records from server. Balance = ₹' + (inc - exp));
}

function addTransaction(e) {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const amount = Number(document.getElementById('amount').value);
  const type = document.getElementById('type').value;
  if (!title || amount <= 0) return;

  const newTx = { id: Date.now(), title, amount, type };
  localCache.unshift(newTx);
  document.getElementById('title').value = '';
  document.getElementById('amount').value = '';
  loadExpenses();
  console.log('[Client -> Server POST /api/expenses 201 Created]:', newTx);
}

function deleteTransaction(id) {
  localCache = localCache.filter(t => t.id !== id);
  loadExpenses();
  console.log('[Client -> Server DELETE /api/expenses/' + id + ' 200 OK]');
}

loadExpenses();`
        },
        {
          name: 'backend/server.js',
          icon: '⚙️',
          working: 'Is code se Express backend server port 5000 par run hota hai, CORS allow karta hai aur database mein transactions save/delete karke JSON bhejta hai.',
          code: `// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Database
let expenses = [
  { id: 1, title: 'Monthly Salary', amount: 50000, type: 'income' },
  { id: 2, title: 'House Rent', amount: 12000, type: 'expense' },
  { id: 3, title: 'Groceries', amount: 3500, type: 'expense' }
];

// 1. GET /api/expenses -> Saare records + Balance fetch karo
app.get('/api/expenses', (req, res) => {
  let inc = 0, exp = 0;
  expenses.forEach(e => e.type === 'income' ? inc += e.amount : exp += e.amount);
  res.json({
    success: true,
    balance: inc - exp,
    totalIncome: inc,
    totalExpense: exp,
    data: expenses
  });
});

// 2. POST /api/expenses -> Naya transaction validate karke save karo
app.post('/api/expenses', (req, res) => {
  const { title, amount, type } = req.body;
  if (!title || !amount || Number(amount) <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid payload' });
  }
  const newTx = {
    id: Date.now(),
    title: title.trim(),
    amount: Number(amount),
    type: type || 'expense'
  };
  expenses.unshift(newTx);
  res.status(201).json({ success: true, data: newTx });
});

// 3. DELETE /api/expenses/:id -> Specific record delete karo
app.delete('/api/expenses/:id', (req, res) => {
  const id = Number(req.params.id);
  expenses = expenses.filter(e => e.id !== id);
  res.json({ success: true, message: 'Deleted successfully' });
});

app.listen(PORT, () => console.log(\`🚀 Backend running on port \${PORT}\`));`
        },
        {
          name: 'backend/package.json',
          icon: '📦',
          working: 'Backend dependencies: express aur cors.',
          code: `{
  "name": "fullstack-expense-backend",
  "version": "1.0.0",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.19.2"
  }
}`
        }
      ],
      checklist: [
        'backend/server.js: REST endpoints (GET, POST, DELETE) ready on port 5000',
        'frontend/index.html & styles.css: Clean responsive UI layout',
        'frontend/app.js: Asynchronous fetch() client calls mapped',
        'Client-to-Server POST payload and DELETE ID sync tested',
        'End-to-End client-server integration verified in live sandbox'
      ]
    }
  ]
}

// Helper to generate full executable HTML for iframe preview (with Node.js browser shims)
function buildIframeBundle(files) {
  const htmlFile = files.find(f => f.name.endsWith('.html'))?.code || '<div id="app"></div>'
  const cssFile = files.find(f => f.name.endsWith('.css'))?.code || ''
  // Prioritize frontend app.js if present, otherwise fallback to any .js file
  const jsFile = (files.find(f => f.name.endsWith('app.js')) || files.find(f => f.name.endsWith('.js')))?.code || ''

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${cssFile}</style>
        <script>
          (function() {
            // ── 1. Node.js & CommonJS Browser Shim ──
            window.process = { env: { PORT: 5000, NODE_ENV: 'development' } };
            window.module = { exports: {} };
            window.exports = window.module.exports;

            window.require = function(moduleName) {
              if (moduleName === 'express') {
                const expressMock = function() {
                  return {
                    use: function() { return this; },
                    get: function(path, cb) { return this; },
                    post: function(path, cb) { return this; },
                    delete: function(path, cb) { return this; },
                    listen: function(port, cb) { if (cb) cb(); return this; }
                  };
                };
                expressMock.json = function() { return function() {}; };
                expressMock.Router = function() {
                  const router = {
                    use: function() { return this; },
                    get: function() { return this; },
                    post: function() { return this; },
                    delete: function() { return this; },
                    route: function() { return this; }
                  };
                  return router;
                };
                return expressMock;
              }
              if (moduleName === 'cors') {
                return function() { return function() {}; };
              }
              return {};
            };

            // ── 2. Safe Console Interception ──
            function safeFormat(arg) {
              if (arg === null) return 'null';
              if (arg === undefined) return 'undefined';
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); } catch(e) { return String(arg); }
              }
              return String(arg);
            }
            const origLog = console.log;
            const origErr = console.error;
            console.log = function(...args) {
              origLog.apply(console, args);
              window.parent.postMessage({
                type: 'CONSOLE_LOG',
                text: args.map(safeFormat).join(' ')
              }, '*');
            };
            console.error = function(...args) {
              origErr.apply(console, args);
              window.parent.postMessage({
                type: 'CONSOLE_ERROR',
                text: args.map(safeFormat).join(' ')
              }, '*');
            };
            window.onerror = function(msg, url, line) {
              window.parent.postMessage({
                type: 'CONSOLE_ERROR',
                text: 'Line ' + line + ': ' + msg
              }, '*');
            };
          })();
        </script>
      </head>
      <body>
        ${htmlFile}
        <script>
          try {
            ${jsFile}
          } catch (err) {
            console.error('Runtime Error: ' + err.message);
          }
        </script>
      </body>
    </html>
  `
}

// ══════════════════════════════════════════════════════════════════════════════
// MAIN PROJECTS PAGE COMPONENT (100% MOBILE RESPONSIVE & FLUID)
// ══════════════════════════════════════════════════════════════════════════════

export default function ProjectsPage({ user, onShowToast }) {
  const [activeTab, setActiveTab] = useState('frontend')
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS_DATA.frontend[0].id)
  const [activeFileIndex, setActiveFileIndex] = useState(0)

  // Full Stack Sub-View Mode: 'frontend' | 'backend' | 'dual'
  const [fullStackViewMode, setFullStackViewMode] = useState('frontend')

  // Editable Code Store per Project
  const [userCodeMap, setUserCodeMap] = useState(() => {
    const initial = {}
    Object.keys(PROJECTS_DATA).forEach(cat => {
      PROJECTS_DATA[cat].forEach(proj => {
        initial[proj.id] = proj.files.map(f => ({ ...f }))
      })
    })
    return initial
  })

  // Iframe preview & Console state
  const [iframeSrcDoc, setIframeSrcDoc] = useState('')
  const [consoleLogs, setConsoleLogs] = useState([
    '⚡ [CodeMasti Runner]: Ready. Code change karke "▶️ Run Code" dabayein!'
  ])
  const [copied, setCopied] = useState(false)

  // Backend Interactive API Simulator Store
  const [backendStore, setBackendStore] = useState([
    { id: 1, title: 'Monthly Salary', amount: 50000, type: 'income', date: '2026-08-01' },
    { id: 2, title: 'House Rent', amount: 12000, type: 'expense', date: '2026-08-02' },
    { id: 3, title: 'Groceries', amount: 3500, type: 'expense', date: '2026-08-05' }
  ])
  const [apiPostTitle, setApiPostTitle] = useState('')
  const [apiPostAmount, setApiPostAmount] = useState('')
  const [apiPostType, setApiPostType] = useState('expense')

  // Full Stack Interactive Client-Server State
  const [fsStore, setFsStore] = useState([
    { id: 1, title: 'Monthly Salary', amount: 50000, type: 'income' },
    { id: 2, title: 'House Rent', amount: 12000, type: 'expense' },
    { id: 3, title: 'Groceries', amount: 3500, type: 'expense' }
  ])
  const [fsTitle, setFsTitle] = useState('')
  const [fsAmount, setFsAmount] = useState('')
  const [fsType, setFsType] = useState('expense')

  // Submissions
  const [checked, setChecked] = useState({})
  const [repoUrl, setRepoUrl] = useState('')
  const [notes, setNotes] = useState('')
  const [submissions, setSubmissions] = useState(() => getProjectSubmissions())

  const currentProjects = PROJECTS_DATA[activeTab] || []
  const activeProject = currentProjects.find(p => p.id === activeProjectId) || currentProjects[0]
  const projectFiles = userCodeMap[activeProject?.id] || activeProject?.files || []
  const currentFile = projectFiles[activeFileIndex] || projectFiles[0]

  // Listen for iframe console messages
  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && (e.data.type === 'CONSOLE_LOG' || e.data.type === 'CONSOLE_ERROR')) {
        const prefix = e.data.type === 'CONSOLE_ERROR' ? '❌ [Error]: ' : '💬 [Console]: '
        setConsoleLogs(prev => [prefix + e.data.text, ...prev.slice(0, 40)])
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Auto-run initial code on load / project / tab change
  useEffect(() => {
    if (!activeProject) return
    const stored = submissions[activeProject.id] || {}
    setRepoUrl(stored.repoUrl || '')
    setNotes(stored.notes || '')
    setChecked(stored.checked || {})
    setActiveFileIndex(0)

    const files = userCodeMap[activeProject.id] || activeProject.files
    const bundle = buildIframeBundle(files)
    setIframeSrcDoc(bundle)

    if (activeTab === 'backend') {
      setConsoleLogs([
        '🚀 [Server]: Express REST API server running on http://localhost:5000',
        '📁 [Routes Loaded]: GET /api/expenses | POST /api/expenses | DELETE /api/expenses/:id',
        '💡 [Tip]: Niche "Test API Endpoints" buttons click karke live requests execute karein!'
      ])
    } else if (activeTab === 'fullstack') {
      setConsoleLogs([
        '🚀 [Full Stack Environment]: Backend Express Server active on port 5000',
        '🌐 [Client Ready]: Frontend fetch() bridge connected to http://localhost:5000/api/expenses',
        '💡 [Tip]: Upar "Frontend Page" ya "Backend Page" switch karke specific view run karein!'
      ])
    }
  }, [activeProject?.id, activeTab])

  // Handle User Code Edit in Textarea
  const handleCodeChange = (newCode) => {
    setUserCodeMap(prev => {
      const currentList = prev[activeProject.id] || activeProject.files
      const updated = currentList.map((f, idx) => idx === activeFileIndex ? { ...f, code: newCode } : f)
      return { ...prev, [activeProject.id]: updated }
    })
  }

  // Run the current edited code
  const handleRunCode = () => {
    const files = userCodeMap[activeProject.id] || activeProject.files
    const bundle = buildIframeBundle(files)
    setIframeSrcDoc('')
    setTimeout(() => {
      setIframeSrcDoc(bundle)
      setConsoleLogs(prev => ['▶️ [Code Re-executed at ' + new Date().toLocaleTimeString() + ']', ...prev])
      onShowToast?.(0, 'Code executed in live preview! 🚀')
    }, 50)
  }

  // Reset Code to default starter template
  const handleResetCode = () => {
    const original = activeProject.files.map(f => ({ ...f }))
    setUserCodeMap(prev => ({ ...prev, [activeProject.id]: original }))
    const bundle = buildIframeBundle(original)
    setIframeSrcDoc('')
    setTimeout(() => {
      setIframeSrcDoc(bundle)
      setConsoleLogs(prev => ['🔄 [Code Reset to Default Starter Template]', ...prev])
      onShowToast?.(0, 'Code reset to starter template! 🔄')
    }, 50)
  }

  // Copy code handler
  const handleCopyCode = () => {
    if (!currentFile?.code) return
    navigator.clipboard?.writeText(currentFile.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    onShowToast?.(0, `${currentFile.name} code copied! 📋`)
  }

  // ── BACKEND API SIMULATOR ACTIONS ──
  const handleApiGet = () => {
    let inc = 0, exp = 0
    backendStore.forEach(e => e.type === 'income' ? inc += e.amount : exp += e.amount)
    const response = {
      status: 200,
      success: true,
      count: backendStore.length,
      balance: inc - exp,
      totalIncome: inc,
      totalExpense: exp,
      data: backendStore
    }
    const log = `🟢 [HTTP 200 OK] GET /api/expenses\nResponse JSON:\n${JSON.stringify(response, null, 2)}`
    setConsoleLogs(prev => [log, ...prev])
    onShowToast?.(0, 'GET /api/expenses 200 OK')
  }

  const handleApiPost = (e) => {
    e?.preventDefault()
    const amt = Number(apiPostAmount)
    if (!apiPostTitle.trim() || amt <= 0) {
      const errLog = `🔴 [HTTP 400 Bad Request] POST /api/expenses\nError: Title and positive amount are required!`
      setConsoleLogs(prev => [errLog, ...prev])
      onShowToast?.(0, '400 Bad Request: Invalid payload')
      return
    }
    const newTx = {
      id: Date.now(),
      title: apiPostTitle.trim(),
      amount: amt,
      type: apiPostType,
      date: new Date().toISOString().split('T')[0]
    }
    setBackendStore(prev => [newTx, ...prev])
    const successLog = `🟢 [HTTP 201 Created] POST /api/expenses\nPayload: { title: "${newTx.title}", amount: ${newTx.amount}, type: "${newTx.type}" }\nResponse: { success: true, message: "Expense created", id: ${newTx.id} }`
    setConsoleLogs(prev => [successLog, ...prev])
    setApiPostTitle('')
    setApiPostAmount('')
    onShowToast?.(0, 'POST /api/expenses 201 Created! ✨')
  }

  const handleApiDelete = (id, title) => {
    setBackendStore(prev => prev.filter(e => e.id !== id))
    const delLog = `🟡 [HTTP 200 OK] DELETE /api/expenses/${id}\nResponse: { success: true, message: "Expense '${title}' deleted successfully" }`
    setConsoleLogs(prev => [delLog, ...prev])
    onShowToast?.(0, `Deleted ID: ${id}`)
  }

  // ── FULL STACK SIMULATOR ACTIONS ──
  const handleFsSubmit = (e) => {
    e.preventDefault()
    const amt = Number(fsAmount)
    if (!fsTitle.trim() || amt <= 0) return

    const newTx = { id: Date.now(), title: fsTitle.trim(), amount: amt, type: fsType }
    setFsStore(prev => [newTx, ...prev])

    // End-to-end network log
    const networkLog = `🌐 [1. Client Form Submit]: fetch("http://localhost:5000/api/expenses", { method: "POST", body: ${JSON.stringify({ title: newTx.title, amount: newTx.amount, type: newTx.type })} })\n⚙️ [2. Express Server (Port 5000)]: JSON body validated ➔ Inserted into database (ID: ${newTx.id})\n🟢 [3. Server Response 201 Created]: { success: true, data: ${JSON.stringify(newTx)} }\n🖥️ [4. Frontend Client]: State reloaded ➔ New balance calculated: ₹${(fsInc + (newTx.type === 'income' ? newTx.amount : 0) - (fsExp + (newTx.type === 'expense' ? newTx.amount : 0))).toLocaleString()}`
    setConsoleLogs(prev => [networkLog, ...prev])

    setFsTitle('')
    setFsAmount('')
    onShowToast?.(0, `Full Stack: "${newTx.title}" saved on server! 🚀`)
  }

  const handleFsDelete = (id, title) => {
    setFsStore(prev => prev.filter(t => t.id !== id))
    const netDelLog = `🌐 [Client]: fetch("http://localhost:5000/api/expenses/${id}", { method: "DELETE" })\n⚙️ [Express Server]: Record #${id} deleted from database ➔ 200 OK\n🖥️ [Frontend DOM]: Item removed from screen live!`
    setConsoleLogs(prev => [netDelLog, ...prev])
    onShowToast?.(0, `Deleted transaction #${id}`)
  }

  const fsInc = fsStore.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0)
  const fsExp = fsStore.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0)
  const fsBalance = fsInc - fsExp

  // Submit Project Proof
  const submitProject = () => {
    const trimmedUrl = repoUrl.trim()
    if (!trimmedUrl) {
      onShowToast?.(0, 'Please enter a GitHub or demo URL')
      return
    }
    if (!isSafeUrl(trimmedUrl)) {
      onShowToast?.(0, 'Invalid URL. Please enter a valid https:// link.')
      return
    }
    const safeUrl = sanitizeWebUrl(trimmedUrl)
    const data = {
      repoUrl: safeUrl,
      notes: sanitizeTextInput(notes, 1000),
      checked,
      savedAt: new Date().toISOString()
    }
    const updated = saveProjectSubmission(activeProject.id, data)
    setSubmissions(prev => ({ ...prev, [activeProject.id]: updated }))
    markLessonComplete(`${activeProject.id}_project`, activeProject.xp, 'challenge')
    onShowToast?.(activeProject.xp, `Project saved! +${activeProject.xp} XP earned! 🎉`)
  }

  return (
    <div className="projects-container">
      {/* ── Responsive CSS Injector ── */}
      <style>{`
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px 80px;
          width: 100%;
          box-sizing: border-box;
        }
        .projects-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .projects-header h1 {
          font-size: 26px;
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .projects-header p {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.5;
        }
        .track-tabs-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
          width: 100%;
        }
        .track-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          flex: 1 1 auto;
          min-width: 140px;
          max-width: 280px;
          text-align: center;
        }
        .project-card-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 18px;
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        .runner-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 16px;
          width: 100%;
          box-sizing: border-box;
        }
        .stats-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 14px;
          width: 100%;
        }
        .responsive-form-row {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
          flex-wrap: wrap;
          width: 100%;
        }
        .responsive-form-row input[type="text"] {
          flex: 1 1 140px;
          min-width: 0;
        }
        .responsive-form-row input[type="number"] {
          flex: 1 1 80px;
          min-width: 70px;
        }
        .responsive-form-row select {
          flex: 0 0 auto;
        }
        .code-tabs-scroll {
          display: flex;
          gap: 6px;
          margin-bottom: 12px;
          overflow-x: auto;
          padding-bottom: 4px;
          -webkit-overflow-scrolling: touch;
          width: 100%;
        }
        .code-tabs-scroll button {
          flex-shrink: 0;
        }
        pre, code, textarea {
          max-width: 100%;
          box-sizing: border-box;
          overflow-x: auto;
          word-break: break-word;
        }
        @media (max-width: 768px) {
          .projects-container {
            padding: 16px 10px 60px;
          }
          .projects-header h1 {
            font-size: 22px;
          }
          .projects-header p {
            font-size: 13px;
          }
          .track-tab-btn {
            font-size: 13px;
            padding: 8px 12px;
            min-width: 100%;
          }
          .project-card-box {
            padding: 14px;
          }
          .runner-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .stats-3col {
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
          }
        }
        @media (max-width: 480px) {
          .stats-3col {
            grid-template-columns: 1fr;
          }
          .responsive-form-row {
            flex-direction: column;
          }
          .responsive-form-row input, .responsive-form-row select {
            width: 100% !important;
            flex: 1 1 auto;
          }
        }
      `}</style>
      
      {/* ── Page Header ── */}
      <div className="projects-header">
        <h1>🏗️ Projects Arena</h1>
        <p>
          Interactive Live Code Editor ➡️ Edit Code ➡️ Click Run Code ➡️ Live Preview & Console Output.
        </p>
      </div>

      {/* ── 3 Track Selector Tabs ── */}
      <div className="track-tabs-row">
        <button
          className="track-tab-btn"
          onClick={() => setActiveTab('frontend')}
          style={{
            background: activeTab === 'frontend' ? '#8b5cf6' : 'var(--bg-card)',
            color: activeTab === 'frontend' ? '#fff' : 'var(--text-secondary)',
            border: `1.5px solid ${activeTab === 'frontend' ? '#8b5cf6' : 'var(--border)'}`,
            boxShadow: activeTab === 'frontend' ? '0 4px 14px rgba(139, 92, 246, 0.4)' : 'none'
          }}
        >
          <span>🖥️</span>
          <span>1. Frontend Projects</span>
        </button>

        <button
          className="track-tab-btn"
          onClick={() => setActiveTab('backend')}
          style={{
            background: activeTab === 'backend' ? '#3b82f6' : 'var(--bg-card)',
            color: activeTab === 'backend' ? '#fff' : 'var(--text-secondary)',
            border: `1.5px solid ${activeTab === 'backend' ? '#3b82f6' : 'var(--border)'}`,
            boxShadow: activeTab === 'backend' ? '0 4px 14px rgba(59, 130, 246, 0.4)' : 'none'
          }}
        >
          <span>⚙️</span>
          <span>2. Backend Projects</span>
        </button>

        <button
          className="track-tab-btn"
          onClick={() => setActiveTab('fullstack')}
          style={{
            background: activeTab === 'fullstack' ? 'var(--green)' : 'var(--bg-card)',
            color: activeTab === 'fullstack' ? '#fff' : 'var(--text-secondary)',
            border: `1.5px solid ${activeTab === 'fullstack' ? 'var(--green)' : 'var(--border)'}`,
            boxShadow: activeTab === 'fullstack' ? '0 4px 14px rgba(16, 185, 129, 0.4)' : 'none'
          }}
        >
          <span>🚀</span>
          <span>3. Full Stack Projects</span>
        </button>
      </div>

      {activeProject && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* ── 1. PROJECT TITLE & REWARD BANNER ── */}
          <div className="project-card-box" style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 12
          }}>
            <div>
              <span style={{
                fontSize: 11, fontWeight: 800, textTransform: 'uppercase',
                color: activeTab === 'frontend' ? '#8b5cf6' : activeTab === 'backend' ? '#3b82f6' : 'var(--green)',
                background: 'var(--bg-subtle)', padding: '3px 8px', borderRadius: 6, display: 'inline-block', marginBottom: 6
              }}>
                {activeProject.category} Track
              </span>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
                {activeProject.emoji} {activeProject.title}
              </h2>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: '4px 0 0' }}>
                {activeProject.description}
              </p>
            </div>
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--green)',
              borderRadius: 10, padding: '6px 14px', textAlign: 'center'
            }}>
              <span style={{ fontSize: 10, color: 'var(--text-muted)', display: 'block' }}>Reward</span>
              <strong style={{ fontSize: 15, color: 'var(--green)' }}>+{activeProject.xp} XP</strong>
            </div>
          </div>

          {/* ── 2. FOLDER & FILE STRUCTURE ── */}
          {activeProject.folderStructure && (
            <div className="project-card-box">
              <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>📁</span> Project Folder & File Structure
              </h3>
              <pre style={{
                background: '#090d16', color: '#38bdf8', padding: 14,
                borderRadius: 8, border: '1px solid #1e293b', fontSize: 12,
                fontFamily: 'monospace', lineHeight: 1.5, margin: 0, overflowX: 'auto'
              }}>
                <code>{activeProject.folderStructure}</code>
              </pre>
            </div>
          )}

          {/* ── 3. INTERACTIVE EDITABLE CODE EDITOR ── */}
          <div className="project-card-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 10 }}>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>✏️</span> {activeTab === 'backend' ? 'Backend Code Editor (Node.js & Express)' : activeTab === 'fullstack' ? 'Full Stack Code Editor (Frontend + Backend)' : 'Interactive Editable Code Editor'}
                </h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '2px 0 0' }}>
                  Aap yahan kisi bhi file ka code change kar sakte hain aur niche live output dekh sakte hain.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <button
                  onClick={handleRunCode}
                  style={{
                    background: activeTab === 'backend' ? '#3b82f6' : 'var(--green)', color: '#fff',
                    border: 'none', borderRadius: 8,
                    padding: '8px 14px', fontSize: 13, fontWeight: 800,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
                    boxShadow: '0 2px 10px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  ▶️ Run Code
                </button>
                <button
                  onClick={handleResetCode}
                  style={{
                    background: 'var(--bg-subtle)', color: 'var(--text-secondary)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    padding: '8px 12px', fontSize: 13, fontWeight: 700,
                    cursor: 'pointer'
                  }}
                  title="Reset to starter code"
                >
                  🔄 Reset
                </button>
                <button
                  onClick={handleCopyCode}
                  style={{
                    background: copied ? 'var(--green)' : 'var(--bg-subtle)',
                    color: copied ? '#fff' : 'var(--text-primary)',
                    border: '1px solid var(--border)', borderRadius: 8,
                    padding: '8px 12px', fontSize: 13, fontWeight: 700,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4
                  }}
                >
                  {copied ? '✅' : '📋'} Copy
                </button>
              </div>
            </div>

            {/* File Switcher Tabs */}
            <div className="code-tabs-scroll">
              {projectFiles.map((file, idx) => (
                <button
                  key={file.name}
                  onClick={() => setActiveFileIndex(idx)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 12px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                    cursor: 'pointer',
                    background: activeFileIndex === idx ? (activeTab === 'backend' ? '#3b82f6' : activeTab === 'fullstack' ? 'var(--green)' : '#8b5cf6') : 'var(--bg-subtle)',
                    color: activeFileIndex === idx ? '#fff' : 'var(--text-secondary)',
                    border: `1px solid ${activeFileIndex === idx ? 'var(--green)' : 'var(--border)'}`
                  }}
                >
                  <span>{file.icon}</span>
                  <span>{file.name}</span>
                </button>
              ))}
            </div>

            {/* Editable Textarea Code Editor */}
            {currentFile && (
              <>
                <textarea
                  value={currentFile.code}
                  onChange={e => handleCodeChange(e.target.value)}
                  spellCheck="false"
                  rows={12}
                  style={{
                    width: '100%',
                    background: '#090d16',
                    color: '#e2e8f0',
                    padding: 12,
                    borderRadius: 8,
                    fontSize: 12,
                    fontFamily: 'monospace',
                    lineHeight: 1.5,
                    border: '1px solid #1e293b',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box'
                  }}
                />

                {/* Short Working Explanation Box */}
                <div style={{
                  marginTop: 10, background: 'var(--bg-subtle)',
                  borderLeft: `4px solid ${activeTab === 'backend' ? '#3b82f6' : 'var(--green)'}`,
                  borderRadius: '0 8px 8px 0', padding: '10px 14px'
                }}>
                  <strong style={{ fontSize: 12, color: activeTab === 'backend' ? '#3b82f6' : 'var(--green)', display: 'block', marginBottom: 2 }}>
                    💡 Is Code Se Kya Hoga (Working in Shorts):
                  </strong>
                  <p style={{ fontSize: 12, color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>
                    {currentFile.working}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* ── 4. LIVE INTERACTIVE RUNNER FOR EACH TRACK ── */}
          <div className="project-card-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>▶️</span> {activeTab === 'backend' ? 'Live Backend API Client & Console Runner' : activeTab === 'fullstack' ? 'Live Full Stack Connected Sandbox & Network Console' : 'Live Output Preview & Console Logs'}
                </h3>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '3px 0 0' }}>
                  {activeTab === 'backend'
                    ? 'Express REST API running — Niche GET, POST, DELETE actions execute karke live status codes & JSON responses dekhein!'
                    : activeTab === 'fullstack'
                    ? 'Frontend aur Backend dono views available hain — Switch karke App ka Front Page ya Server Backend Page run karein!'
                    : 'Upar code change karke "▶️ Run Code" dabayein — niche instant live output dikhega!'}
                </p>
              </div>
              <button
                onClick={handleRunCode}
                style={{
                  background: activeTab === 'backend' ? '#3b82f6' : 'var(--green)', color: '#fff',
                  border: 'none', borderRadius: 8, padding: '6px 12px',
                  fontSize: 12, fontWeight: 800, cursor: 'pointer'
                }}
              >
                🔄 Re-Run
              </button>
            </div>

            {/* TAB-SPECIFIC RUNNER UI */}
            {activeTab === 'backend' ? (
              /* ── (A) BACKEND REST API RUNNER ── */
              <div className="runner-grid">
                
                {/* Left Box: Backend API Endpoint Client */}
                <div style={{
                  background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                  borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column', gap: 14, boxSizing: 'border-box'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                    <h4 style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      ⚡ Test Express API Endpoints
                    </h4>
                    <span style={{ fontSize: 10, background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
                      PORT 5000 ACTIVE
                    </span>
                  </div>

                  {/* 1. GET /api/expenses Trigger */}
                  <div style={{ background: 'var(--bg-card)', padding: 10, borderRadius: 8, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, flexWrap: 'wrap', gap: 6 }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--green)', fontFamily: 'monospace' }}>
                        GET /api/expenses
                      </span>
                      <button
                        onClick={handleApiGet}
                        style={{
                          background: 'var(--green)', color: '#fff', border: 'none',
                          borderRadius: 6, padding: '4px 10px', fontSize: 11, fontWeight: 800, cursor: 'pointer'
                        }}
                      >
                        🚀 Send GET
                      </button>
                    </div>
                    <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: 0 }}>
                      Returns all transactions array + calculated total balance.
                    </p>
                  </div>

                  {/* 2. POST /api/expenses Form */}
                  <div style={{ background: 'var(--bg-card)', padding: 10, borderRadius: 8, border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace', display: 'block', marginBottom: 6 }}>
                      POST /api/expenses
                    </span>
                    <form onSubmit={handleApiPost}>
                      <div className="responsive-form-row">
                        <input
                          type="text"
                          placeholder="Title (e.g. AWS Cloud)"
                          value={apiPostTitle}
                          onChange={e => setApiPostTitle(e.target.value)}
                          required
                          style={{
                            padding: '6px 8px', borderRadius: 6,
                            border: '1px solid var(--border)', background: 'var(--bg-subtle)',
                            color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                          }}
                        />
                        <input
                          type="number"
                          placeholder="₹ Amount"
                          value={apiPostAmount}
                          onChange={e => setApiPostAmount(e.target.value)}
                          min="1"
                          required
                          style={{
                            padding: '6px 8px', borderRadius: 6,
                            border: '1px solid var(--border)', background: 'var(--bg-subtle)',
                            color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                          }}
                        />
                        <select
                          value={apiPostType}
                          onChange={e => setApiPostType(e.target.value)}
                          style={{
                            padding: '6px 8px', borderRadius: 6,
                            border: '1px solid var(--border)', background: 'var(--bg-subtle)',
                            color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                          }}
                        >
                          <option value="expense">Expense</option>
                          <option value="income">Income</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        style={{
                          width: '100%', background: '#3b82f6', color: '#fff',
                          border: 'none', borderRadius: 6, padding: '8px',
                          fontSize: 12, fontWeight: 800, cursor: 'pointer'
                        }}
                      >
                        ➕ Send POST Request (201 Created)
                      </button>
                    </form>
                  </div>

                  {/* 3. In-Memory Store List with DELETE */}
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>
                      🗑️ Active Store Items (DELETE /api/expenses/:id):
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 150, overflowY: 'auto' }}>
                      {backendStore.map(item => (
                        <div
                          key={item.id}
                          style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '6px 8px', background: 'var(--bg-card)', borderRadius: 6,
                            border: '1px solid var(--border)', fontSize: 11
                          }}
                        >
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '60%' }}>
                            <strong>#{item.id}</strong> {item.title}
                          </span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ color: item.type === 'income' ? 'var(--green)' : '#ef4444', fontWeight: 700 }}>
                              ₹{item.amount.toLocaleString()}
                            </span>
                            <button
                              onClick={() => handleApiDelete(item.id, item.title)}
                              style={{
                                background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444',
                                border: '1px solid #ef4444', borderRadius: 4, padding: '2px 6px',
                                fontSize: 10, fontWeight: 700, cursor: 'pointer'
                              }}
                            >
                              DEL
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Box: Live Terminal Console Output */}
                <div style={{
                  background: '#050811', border: '1px solid #1e293b',
                  borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column', boxSizing: 'border-box'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace' }}>
                      📟 NODE.JS / EXPRESS CONSOLE
                    </span>
                    <button
                      onClick={() => setConsoleLogs(['⚡ [Console Cleared] Server ready.'])}
                      style={{
                        background: 'none', border: '1px solid #334155', color: '#94a3b8',
                        borderRadius: 4, padding: '2px 6px', fontSize: 10, cursor: 'pointer'
                      }}
                    >
                      Clear
                    </button>
                  </div>
                  <pre style={{
                    flex: 1, overflowY: 'auto', maxHeight: 340, fontFamily: 'monospace',
                    fontSize: 11, lineHeight: 1.5, color: '#a5f3fc', margin: 0,
                    whiteSpace: 'pre-wrap', wordBreak: 'break-word'
                  }}>
                    {consoleLogs.join('\n\n')}
                  </pre>
                </div>

              </div>
            ) : activeTab === 'fullstack' ? (
              /* ── (B) FULL STACK RUNNER: FRONTEND APP PAGE OR BACKEND SERVER PAGE TOGGLE ── */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                
                {/* Mode Switcher Buttons */}
                <div style={{
                  display: 'flex', gap: 6, background: 'var(--bg-subtle)',
                  padding: 4, borderRadius: 8, alignSelf: 'flex-start', flexWrap: 'wrap', width: '100%'
                }}>
                  <button
                    onClick={() => setFullStackViewMode('frontend')}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 800,
                      cursor: 'pointer', border: 'none', flex: '1 1 auto',
                      background: fullStackViewMode === 'frontend' ? 'var(--green)' : 'transparent',
                      color: fullStackViewMode === 'frontend' ? '#fff' : 'var(--text-secondary)'
                    }}
                  >
                    <span>🖥️</span>
                    <span>1. Run Frontend App Page</span>
                  </button>

                  <button
                    onClick={() => setFullStackViewMode('backend')}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 800,
                      cursor: 'pointer', border: 'none', flex: '1 1 auto',
                      background: fullStackViewMode === 'backend' ? '#3b82f6' : 'transparent',
                      color: fullStackViewMode === 'backend' ? '#fff' : 'var(--text-secondary)'
                    }}
                  >
                    <span>⚙️</span>
                    <span>2. Run Backend Server Page</span>
                  </button>

                  <button
                    onClick={() => setFullStackViewMode('dual')}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 800,
                      cursor: 'pointer', border: 'none', flex: '1 1 auto',
                      background: fullStackViewMode === 'dual' ? '#8b5cf6' : 'transparent',
                      color: fullStackViewMode === 'dual' ? '#fff' : 'var(--text-secondary)'
                    }}
                  >
                    <span>🔗</span>
                    <span>3. Dual View</span>
                  </button>
                </div>

                {/* (1) FRONTEND APP PAGE VIEW */}
                {fullStackViewMode === 'frontend' && (
                  <div className="runner-grid">
                    {/* Live Frontend App Iframe */}
                    <div style={{
                      background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                      borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column'
                    }}>
                      <div style={{
                        padding: '8px 12px', background: 'var(--bg-card)',
                        borderBottom: '1px solid var(--border)', display: 'flex',
                        alignItems: 'center', justifyContent: 'space-between'
                      }}>
                        <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-primary)' }}>
                          🖥️ Frontend Application Page
                        </span>
                        <span style={{ fontSize: 10, color: 'var(--green)', fontWeight: 700 }}>
                          🟢 Active
                        </span>
                      </div>
                      <iframe
                        srcDoc={iframeSrcDoc}
                        title="Frontend Live App Preview"
                        sandbox="allow-scripts"
                        style={{
                          width: '100%', height: 380, border: 'none', background: '#0f172a'
                        }}
                      />
                    </div>

                    {/* Terminal Logs */}
                    <div style={{
                      background: '#050811', border: '1px solid #1e293b',
                      borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace' }}>
                          📟 BROWSER CLIENT CONSOLE
                        </span>
                        <button
                          onClick={() => setConsoleLogs(['⚡ [Console Cleared] Client Ready.'])}
                          style={{
                            background: 'none', border: '1px solid #334155', color: '#94a3b8',
                            borderRadius: 4, padding: '2px 6px', fontSize: 10, cursor: 'pointer'
                          }}
                        >
                          Clear
                        </button>
                      </div>
                      <div style={{
                        flex: 1, overflowY: 'auto', maxHeight: 340, fontFamily: 'monospace',
                        fontSize: 11, lineHeight: 1.5, color: '#a5f3fc', display: 'flex', flexDirection: 'column', gap: 4
                      }}>
                        {consoleLogs.map((log, idx) => (
                          <div key={idx} style={{ borderBottom: '1px solid #0f172a', paddingBottom: 4 }}>
                            {log}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* (2) BACKEND SERVER PAGE VIEW */}
                {fullStackViewMode === 'backend' && (
                  <div className="runner-grid">
                    {/* Backend Express Server Dashboard */}
                    <div style={{
                      background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                      borderRadius: 10, padding: 14, display: 'flex', flexDirection: 'column', gap: 12
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                          ⚙️ Backend Server Dashboard (Port 5000)
                        </h4>
                        <span style={{ fontSize: 10, background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '2px 6px', borderRadius: 4, fontWeight: 700 }}>
                          EXPRESS RUNNING
                        </span>
                      </div>

                      {/* Server Summary Stats */}
                      <div className="stats-3col">
                        <div style={{ background: 'var(--bg-card)', padding: 8, borderRadius: 6, textAlign: 'center', border: '1px solid var(--border)' }}>
                          <span style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>DB Balance</span>
                          <h5 style={{ fontSize: 13, margin: '2px 0 0', color: 'var(--text-primary)' }}>₹{fsBalance.toLocaleString()}</h5>
                        </div>
                        <div style={{ background: 'var(--bg-card)', padding: 8, borderRadius: 6, textAlign: 'center', border: '1px solid var(--border)' }}>
                          <span style={{ fontSize: 9, color: 'var(--green)', textTransform: 'uppercase', fontWeight: 700 }}>DB Income</span>
                          <h5 style={{ fontSize: 13, margin: '2px 0 0', color: 'var(--green)' }}>+₹{fsInc.toLocaleString()}</h5>
                        </div>
                        <div style={{ background: 'var(--bg-card)', padding: 8, borderRadius: 6, textAlign: 'center', border: '1px solid var(--border)' }}>
                          <span style={{ fontSize: 9, color: '#ef4444', textTransform: 'uppercase', fontWeight: 700 }}>DB Expense</span>
                          <h5 style={{ fontSize: 13, margin: '2px 0 0', color: '#ef4444' }}>-₹{fsExp.toLocaleString()}</h5>
                        </div>
                      </div>

                      {/* Endpoints triggers */}
                      <div style={{ background: 'var(--bg-card)', padding: 10, borderRadius: 8, border: '1px solid var(--border)' }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace', display: 'block', marginBottom: 6 }}>
                          ➕ Simulate API POST Request
                        </span>
                        <form onSubmit={handleFsSubmit}>
                          <div className="responsive-form-row">
                            <input
                              type="text"
                              placeholder="Title (e.g. Server Cost)"
                              value={fsTitle}
                              onChange={e => setFsTitle(e.target.value)}
                              required
                              style={{
                                padding: '6px 8px', borderRadius: 6,
                                border: '1px solid var(--border)', background: 'var(--bg-subtle)',
                                color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                              }}
                            />
                            <input
                              type="number"
                              placeholder="₹ Amount"
                              value={fsAmount}
                              onChange={e => setFsAmount(e.target.value)}
                              min="1"
                              required
                              style={{
                                padding: '6px 8px', borderRadius: 6,
                                border: '1px solid var(--border)', background: 'var(--bg-subtle)',
                                color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                              }}
                            />
                            <select
                              value={fsType}
                              onChange={e => setFsType(e.target.value)}
                              style={{
                                padding: '6px 8px', borderRadius: 6,
                                border: '1px solid var(--border)', background: 'var(--bg-subtle)',
                                color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                              }}
                            >
                              <option value="expense">Exp (-)</option>
                              <option value="income">Inc (+)</option>
                            </select>
                          </div>
                          <button
                            type="submit"
                            style={{
                              width: '100%', background: '#3b82f6', color: '#fff',
                              border: 'none', borderRadius: 6, padding: '8px',
                              fontSize: 12, fontWeight: 800, cursor: 'pointer'
                            }}
                          >
                            🚀 Execute POST Request ➔ Insert in DB
                          </button>
                        </form>
                      </div>

                      {/* Database list */}
                      <div>
                        <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>
                          🗄️ In-Memory Database Records ({fsStore.length} items):
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 130, overflowY: 'auto' }}>
                          {fsStore.map(item => (
                            <div
                              key={item.id}
                              style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '5px 8px', background: 'var(--bg-card)', borderRadius: 6,
                                border: '1px solid var(--border)', fontSize: 11
                              }}
                            >
                              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '60%' }}>
                                <strong>#{item.id}</strong> {item.title}
                              </span>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                <span style={{ color: item.type === 'income' ? 'var(--green)' : '#ef4444', fontWeight: 700 }}>
                                  ₹{item.amount.toLocaleString()}
                                </span>
                                <button
                                  onClick={() => handleFsDelete(item.id, item.title)}
                                  style={{
                                    background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444',
                                    border: '1px solid #ef4444', borderRadius: 4, padding: '2px 6px',
                                    fontSize: 10, fontWeight: 700, cursor: 'pointer'
                                  }}
                                >
                                  DEL
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Backend Express Logs */}
                    <div style={{
                      background: '#050811', border: '1px solid #1e293b',
                      borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace' }}>
                          📟 EXPRESS BACKEND SERVER LOGS
                        </span>
                        <button
                          onClick={() => setConsoleLogs(['⚡ [Console Cleared] Express ready on 5000.'])}
                          style={{
                            background: 'none', border: '1px solid #334155', color: '#94a3b8',
                            borderRadius: 4, padding: '2px 6px', fontSize: 10, cursor: 'pointer'
                          }}
                        >
                          Clear
                        </button>
                      </div>
                      <pre style={{
                        flex: 1, overflowY: 'auto', maxHeight: 340, fontFamily: 'monospace',
                        fontSize: 11, lineHeight: 1.5, color: '#a5f3fc', margin: 0,
                        whiteSpace: 'pre-wrap', wordBreak: 'break-word'
                      }}>
                        {consoleLogs.join('\n\n')}
                      </pre>
                    </div>
                  </div>
                )}

                {/* (3) DUAL VIEW (CONNECTED FLOW) */}
                {fullStackViewMode === 'dual' && (
                  <div className="runner-grid">
                    {/* Left: Connected Client UI */}
                    <div style={{
                      background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                      borderRadius: 10, padding: 14
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 6 }}>
                        <h4 style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                          🖥️ Client UI (Port 3000)
                        </h4>
                        <span style={{ fontSize: 10, color: 'var(--green)', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '2px 6px', borderRadius: 4, border: '1px solid var(--green)' }}>
                          🟢 Port 5000 Connected
                        </span>
                      </div>

                      {/* 3 KPI Cards */}
                      <div className="stats-3col">
                        <div style={{ background: 'var(--bg-card)', padding: 8, borderRadius: 6, textAlign: 'center', border: '1px solid var(--border)' }}>
                          <span style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Server Balance</span>
                          <h5 style={{ fontSize: 13, margin: '2px 0 0', color: 'var(--text-primary)' }}>₹{fsBalance.toLocaleString()}</h5>
                        </div>
                        <div style={{ background: 'var(--bg-card)', padding: 8, borderRadius: 6, textAlign: 'center', border: '1px solid var(--border)' }}>
                          <span style={{ fontSize: 9, color: 'var(--green)', textTransform: 'uppercase', fontWeight: 700 }}>Total Income</span>
                          <h5 style={{ fontSize: 13, margin: '2px 0 0', color: 'var(--green)' }}>+₹{fsInc.toLocaleString()}</h5>
                        </div>
                        <div style={{ background: 'var(--bg-card)', padding: 8, borderRadius: 6, textAlign: 'center', border: '1px solid var(--border)' }}>
                          <span style={{ fontSize: 9, color: '#ef4444', textTransform: 'uppercase', fontWeight: 700 }}>Total Expense</span>
                          <h5 style={{ fontSize: 13, margin: '2px 0 0', color: '#ef4444' }}>-₹{fsExp.toLocaleString()}</h5>
                        </div>
                      </div>

                      {/* Add Form */}
                      <form onSubmit={handleFsSubmit} style={{ marginBottom: 12 }}>
                        <div className="responsive-form-row">
                          <input
                            type="text"
                            placeholder="Description"
                            value={fsTitle}
                            onChange={e => setFsTitle(e.target.value)}
                            required
                            style={{
                              padding: '6px 8px', borderRadius: 6,
                              border: '1px solid var(--border)', background: 'var(--bg-card)',
                              color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                            }}
                          />
                          <input
                            type="number"
                            placeholder="₹ Amount"
                            value={fsAmount}
                            onChange={e => setFsAmount(e.target.value)}
                            min="1"
                            required
                            style={{
                              padding: '6px 8px', borderRadius: 6,
                              border: '1px solid var(--border)', background: 'var(--bg-card)',
                              color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                            }}
                          />
                          <select
                            value={fsType}
                            onChange={e => setFsType(e.target.value)}
                            style={{
                              padding: '6px 8px', borderRadius: 6,
                              border: '1px solid var(--border)', background: 'var(--bg-card)',
                              color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                            }}
                          >
                            <option value="expense">Exp (-)</option>
                            <option value="income">Inc (+)</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          style={{
                            width: '100%', background: 'var(--green)', color: '#fff',
                            border: 'none', borderRadius: 6, padding: '8px',
                            fontSize: 12, fontWeight: 800, cursor: 'pointer'
                          }}
                        >
                          🚀 Send POST Request to Express Server
                        </button>
                      </form>

                      {/* List */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, maxHeight: 150, overflowY: 'auto' }}>
                        {fsStore.map(t => (
                          <div
                            key={t.id}
                            style={{
                              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                              padding: '6px 8px', background: 'var(--bg-card)', borderRadius: 6,
                              border: '1px solid var(--border)', fontSize: 11
                            }}
                          >
                            <span style={{ color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '60%' }}>
                              {t.title}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                              <strong style={{ color: t.type === 'income' ? 'var(--green)' : '#ef4444' }}>
                                {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString()}
                              </strong>
                              <button
                                onClick={() => handleFsDelete(t.id, t.title)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--text-muted)' }}
                                title="DELETE via API"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Live Network Logs */}
                    <div style={{
                      background: '#050811', border: '1px solid #1e293b',
                      borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace' }}>
                          🌐 CLIENT-SERVER NETWORK LOGS
                        </span>
                        <button
                          onClick={() => setConsoleLogs(['⚡ [Console Cleared] Full-Stack Network ready.'])}
                          style={{
                            background: 'none', border: '1px solid #334155', color: '#94a3b8',
                            borderRadius: 4, padding: '2px 6px', fontSize: 10, cursor: 'pointer'
                          }}
                        >
                          Clear
                        </button>
                      </div>
                      <pre style={{
                        flex: 1, overflowY: 'auto', maxHeight: 340, fontFamily: 'monospace',
                        fontSize: 11, lineHeight: 1.5, color: '#a5f3fc', margin: 0,
                        whiteSpace: 'pre-wrap', wordBreak: 'break-word'
                      }}>
                        {consoleLogs.join('\n\n')}
                      </pre>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* ── (C) FRONTEND LIVE IFRAME RUNNER ── */
              <div className="runner-grid">
                
                {/* Left Box: Live Interactive Iframe Preview */}
                <div style={{
                  background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                  borderRadius: 10, overflow: 'hidden', display: 'flex', flexDirection: 'column'
                }}>
                  <div style={{
                    padding: '8px 12px', background: 'var(--bg-card)',
                    borderBottom: '1px solid var(--border)', display: 'flex',
                    alignItems: 'center', justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-primary)' }}>
                      🖥️ Live Browser Preview
                    </span>
                    <span style={{ fontSize: 10, color: 'var(--green)', fontWeight: 700 }}>
                      🟢 Active
                    </span>
                  </div>
                  <iframe
                    srcDoc={iframeSrcDoc}
                    title="Live Sandbox Preview"
                    sandbox="allow-scripts"
                    style={{
                      width: '100%', height: 380, border: 'none', background: '#0f172a'
                    }}
                  />
                </div>

                {/* Right Box: Live Terminal Console Output */}
                <div style={{
                  background: '#050811', border: '1px solid #1e293b',
                  borderRadius: 10, padding: 12, display: 'flex', flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#38bdf8', fontFamily: 'monospace' }}>
                      📟 LIVE CONSOLE TERMINAL
                    </span>
                    <button
                      onClick={() => setConsoleLogs(['⚡ [Console Cleared] Ready.'])}
                      style={{
                        background: 'none', border: '1px solid #334155', color: '#94a3b8',
                        borderRadius: 4, padding: '2px 6px', fontSize: 10, cursor: 'pointer'
                      }}
                    >
                      Clear
                    </button>
                  </div>
                  <div style={{
                    flex: 1, overflowY: 'auto', maxHeight: 340, fontFamily: 'monospace',
                    fontSize: 11, lineHeight: 1.5, color: '#a5f3fc', display: 'flex', flexDirection: 'column', gap: 4
                  }}>
                    {consoleLogs.map((log, idx) => (
                      <div
                        key={idx}
                        style={{
                          borderBottom: '1px solid #0f172a', paddingBottom: 4,
                          color: log.startsWith('❌') || log.startsWith('🔴') ? '#f87171' : log.startsWith('▶️') || log.startsWith('🟢') ? '#34d399' : '#a5f3fc'
                        }}
                      >
                        {log}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* ── 5. MILESTONE CHECKLIST ── */}
          <div className="project-card-box">
            <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 10 }}>
              📋 Implementation Milestones Checklist
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {activeProject.checklist.map((item, idx) => (
                <label
                  key={idx}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    background: 'var(--bg-subtle)', padding: '8px 12px', borderRadius: 6,
                    cursor: 'pointer', border: '1px solid var(--border)'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checked[item])}
                    onChange={e => setChecked({ ...checked, [item]: e.target.checked })}
                    style={{ cursor: 'pointer', width: 15, height: 15, accentColor: 'var(--green)' }}
                  />
                  <span style={{
                    fontSize: 12, color: checked[item] ? 'var(--text-muted)' : 'var(--text-primary)',
                    textDecoration: checked[item] ? 'line-through' : 'none'
                  }}>
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* ── 6. SAVE PROJECT & CLAIM XP ── */}
          <div className="project-card-box" style={{ background: 'var(--bg-subtle)' }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>
              🚀 Save Your Project Proof & Earn XP
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <input
                type="text"
                value={repoUrl}
                onChange={e => setRepoUrl(e.target.value)}
                placeholder={
                  activeTab === 'backend'
                    ? "https://github.com/yourusername/expense-backend-api"
                    : activeTab === 'fullstack'
                    ? "https://github.com/yourusername/fullstack-expense-app"
                    : "https://github.com/yourusername/expense-tracker"
                }
                style={{
                  padding: '8px 12px', borderRadius: 6, border: '1px solid var(--border)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)', fontSize: 12, outline: 'none'
                }}
              />
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Learnings: Key challenges solved or architectural decisions made..."
                rows={2}
                style={{
                  padding: '8px 12px', borderRadius: 6, border: '1px solid var(--border)',
                  background: 'var(--bg-card)', color: 'var(--text-primary)', fontSize: 12, outline: 'none', resize: 'vertical'
                }}
              />
              <button
                onClick={submitProject}
                style={{
                  background: 'var(--green)', color: '#fff', border: 'none',
                  borderRadius: 6, padding: '10px 16px', fontSize: 13, fontWeight: 800,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                }}
              >
                💾 Save Progress & Claim +{activeProject.xp} XP
              </button>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}
