import { fullstackProjectsMasteryChapters } from './fullstack-projects/mastery.js'

export const fullstackProjectsCourse = {
  id: 'fullstack-projects',
  title: 'Full Stack Projects',
  description: 'From idea to deployed product — build complete full stack applications across frontend, backend, database, auth, testing, Docker, and deployment.',
  icon: '🚀',
  category: 'projects',
  certificateName: 'FULL STACK PROJECTS',
  topicsCount: 160,
  practiceCount: 120,
  projectsCount: 29,
  hoursEstimate: 300,
  level: 'Beginner to Capstone',
  achievements: [
    { id: 'first-fullstack-app', title: 'First Full Stack App', icon: '🏆', xp: 100, desc: 'Built and connected your first frontend + backend + database' },
    { id: 'crud-builder', title: 'CRUD Full Stack Builder', icon: '🏆', xp: 150, desc: 'Mastered complete CRUD across frontend, API, and database' },
    { id: 'api-integrator', title: 'API Integrator', icon: '🏆', xp: 150, desc: 'Built and consumed a real REST API from your own frontend' },
    { id: 'database-developer', title: 'Database Developer', icon: '🏆', xp: 150, desc: 'Designed relational database schemas with proper relationships' },
    { id: 'auth-builder', title: 'Authentication Builder', icon: '🏆', xp: 200, desc: 'Implemented secure user registration, login, and JWT auth' },
    { id: 'rbac-developer', title: 'RBAC Developer', icon: '🏆', xp: 250, desc: 'Built role-based access control with enforced server-side rules' },
    { id: 'fullstack-debugger', title: 'Full Stack Debugger', icon: '🏆', xp: 200, desc: 'Found and fixed bugs spanning frontend, API, and database' },
    { id: 'security-starter', title: 'Security Starter', icon: '🏆', xp: 300, desc: 'Applied security fundamentals: hashing, validation, headers, env vars' },
    { id: 'testing-developer', title: 'Testing Developer', icon: '🏆', xp: 300, desc: 'Wrote meaningful tests for API endpoints and user flows' },
    { id: 'performance-optimizer', title: 'Performance Optimizer', icon: '🏆', xp: 300, desc: 'Added caching, indexes, and pagination to a real application' },
    { id: 'docker-builder', title: 'Docker Builder', icon: '🏆', xp: 400, desc: 'Containerized a full stack app with Docker Compose' },
    { id: 'deployment-ready', title: 'Deployment Ready', icon: '🏆', xp: 400, desc: 'Deployed a full stack application to a public URL' },
    { id: 'realtime-developer', title: 'Real-Time Developer', icon: '🏆', xp: 400, desc: 'Built live-updating features using WebSockets' },
    { id: 'saas-builder', title: 'SaaS Builder', icon: '🏆', xp: 500, desc: 'Built a multi-tenant SaaS application with organizations and roles' },
    { id: 'fullstack-architect', title: 'Full Stack Architect', icon: '🏆', xp: 500, desc: 'Designed a complete system architecture before writing code' },
    { id: 'production-developer', title: 'Production Developer', icon: '🏆', xp: 650, desc: 'Built an app with testing, security, monitoring, and deployment' },
    { id: 'capstone-master', title: 'Capstone Master', icon: '🏆', xp: 1500, desc: 'Completed a portfolio-grade full stack capstone project' }
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: FULLSTACK MERN EDTECH PLATFORM
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Project 1: MERN EdTech Platform (CodeMasti Clone)',
      lessons: [
        {
          id: 'proj-mern-edtech',
          title: 'Architecting an Interactive MERN Learning Platform',
          emoji: '🚀',
          xpReward: 50,
          badgeName: 'Fullstack Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "MERN Stack seekhne ka ultimate test: Ek poori interactive coding academy create karna! Chalo shuru karte hain 😎"',
            hint: '🤦 Masti Sir: "Frontend aur Backend ko alag domain pe host karne par CORS configuration (`origin: whitelist`) lagana zaroori hai!"',
            success: '🥳 Masti Sir: "Zabardast! Full-stack MERN application seamlessly communicate kar rahi hai 🔥"',
            mistake: '😅 Masti Sir: "Token expiry ke baad user ko logout karna bhool gaye? 401 error interceptor use karo 😂"'
          },
          englishDef: 'A production-grade Full-Stack MERN (MongoDB, Express, React, Node.js) web application featuring user authentication, interactive code sandboxes, dynamic chapter progression, XP rewarding systems, and responsive modern UI.',
          hinglishExplain: 'MERN stack web development ka sabse popular combination hai. React se interactive user interface banta hai, Express aur Node.js se backend REST APIs chalti hain, aur MongoDB Atlas mein learner ka data, XP points, aur badges store hote hain.',
          funnyExample: {
            scenario: 'Full-Stack Orchestra 🎻:\n- React = Stage pe performer jo gaana gaa raha hai (Frontend UI 🎤)\n- Express/Node = Music Director jo beats coordinate karta hai (Backend Controller 🎼)\n- MongoDB = Library jahan saare gaane aur lyrics safe rakhe hain (Database 📚)\n- User = Happy audience jo app enjoy kar rahi hai! 🥳',
            punchline: 'MERN Stack = 4 technologies, 1 powerful ecosystem!'
          },
          visualDiagram: {
            title: 'MERN Architecture Pipeline',
            nodes: ['React Client (Vercel)', 'Axios API Client + JWT Header', 'Express Gateway (CORS + RateLimit)', 'Mongoose Models', 'MongoDB Cloud Cluster'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Fullstack Data Flow:',
            steps: ['User completes lesson in React UI', 'POST /api/progress with JWT Authorization header', 'Express controller validates and updates XP in MongoDB', 'Returns updated streak and badges', 'React updates global state without page refresh']
          },
          code: `// React Frontend Progress Tracker Component
import React, { useState } from 'react';

export default function LessonCompleteButton({ courseId, lessonId, xpReward }) {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleComplete = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/progress/complete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${token}\`
        },
        body: JSON.stringify({ courseId, lessonId, xp: xpReward })
      });

      const data = await response.json();
      if (data.success) {
        setCompleted(true);
        console.log("Earned XP:", data.newXP);
      }
    } catch (err) {
      console.error("Progress save error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleComplete} 
      disabled={loading || completed}
      className={completed ? "btn-success" : "btn-primary"}
    >
      {completed ? "Completed! ✅" : loading ? "Saving..." : \`Complete & Earn +\${xpReward} XP 🚀\`}
    </button>
  );
}`,
          codeBreakdown: [
            { part: 'headers: { "Authorization": `Bearer ${token}` }', label: 'Transmits stateless JWT token to backend API', color: '#3b82f6' },
            { part: 'body: JSON.stringify({...})', label: 'Payload transmitting course and XP reward metrics', color: '#10b981' },
            { part: 'setCompleted(true)', label: 'Optimistic UI update acknowledging user achievement instantly', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Backend mein CORS configure na karna (causes "Blocked by CORS policy" errors in browser)',
            '❌ API URLs ko hardcode karna instead of using environment variables (`process.env.REACT_APP_API_URL`)'
          ],
          miniChallenge: 'Axios response interceptor likho jo 401 Unauthorized status aane par automatic user ko logout karke login page pe bhej de.',
          quiz: {
            question: 'Cross-Origin Resource Sharing (CORS) error kyu aata hai?',
            options: ['Code mein syntax error hone par', 'Jab frontend aur backend alag-alag domain ya port pe run ho rahe hon aur backend ne access allow na kiya ho', 'Database crash hone par', 'Internet band hone par'],
            answer: 'Jab frontend aur backend alag-alag domain ya port pe run ho rahe hon aur backend ne access allow na kiya ho',
            explanation: 'Browser security policy alag origin (domain/port) ke requests ko tab tak block karti hai jab tak backend server explicitly CORS headers (Access-Control-Allow-Origin) return na kare.'
          },
          summary: ['MERN stack full-stack JavaScript ecosystem provide karta hai', 'Stateless JWT tokens frontend aur backend ko securely bind karte hain', 'Continuous deployment: Vercel (Frontend) + Railway (Backend) + MongoDB Atlas'],
          flashcard: { q: 'Production mein environment variables manage kaise karein?', a: 'Development mein `.env` file use karein (jo `.gitignore` mein ho), aur production hosting platforms (Vercel, Render, Railway) ke dashboard mein Environment Variables configure karein.' }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: REAL-TIME WEBSOCKET WORKSPACE
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Project 2: Real-Time Collaborative Workspace with Socket.io',
      lessons: [
        {
          id: 'proj-socketio-chat',
          title: 'Real-Time WebSockets & Active Presence with Socket.io',
          emoji: '⚡',
          xpReward: 50,
          badgeName: 'Realtime Engineer',
          englishDef: 'WebSockets establish a persistent, bidirectional, full-duplex communication channel between client and server over a single TCP connection, ideal for real-time chat, collaborative code editors, and live notifications.',
          hinglishExplain: 'Normal HTTP request-response mein client ko baar baar server se poochna padta hai (Polling). WebSockets (Socket.io) se ek live permanent telephone line khul jati hai — jaise hi kisi user ne message ya code change kiya, wo 10 millisecond mein sabhi online users ke screen pe bina reload ke update ho jata hai.',
          funnyExample: {
            scenario: 'Postman vs Live Phone Call:\n- HTTP Polling: Har 2 second mein door bell bajakar poochna "Kya koi chithi aayi?" 🚪 (Thaka dene wala!)\n- WebSocket (Socket.io): Direct speaker phone on hai — jaise hi koi bolega turant sunai dega! 🎙️',
            punchline: 'WebSockets = Zero latency instant bidirectional communication!'
          },
          visualDiagram: {
            title: 'WebSocket Full-Duplex Connection',
            nodes: ['Client Handshake (HTTP Upgrade)', 'Persistent Bidirectional TCP Pipe', 'Server emits "new-message"', 'All connected clients receive instantly'],
            type: 'flow'
          },
          browserBehindScene: {
            title: 'Socket.io Event Engine:',
            steps: ['HTTP 101 Switching Protocols upgrade', 'Subscribes client socket to specific room channel', 'Broadcasts payload to room members', 'Automatic reconnection on network loss']
          },
          code: `// 1. Backend Server (Node.js + Socket.io)
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join Room
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', { userId: socket.id });
  });

  // Broadcast Message to Room
  socket.on('send-message', ({ roomId, message, username }) => {
    io.to(roomId).emit('receive-message', {
      username,
      message,
      timestamp: new Date().toLocaleTimeString()
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(5005, () => console.log('Socket.io server running on 5005'));`,
          codeBreakdown: [
            { part: 'new Server(server, { cors: ... })', label: 'Initializes real-time WebSocket server wrapper', color: '#3b82f6' },
            { part: 'socket.join(roomId)', label: 'Isolates messaging streams into distinct room channels', color: '#10b981' },
            { part: 'io.to(roomId).emit(...)', label: 'Broadcasts event payload to all clients in the designated room', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ `app.listen()` call karna instead of `server.listen()` when wrapping Express with http server',
            '❌ React components mein multiple socket listeners attach karna on re-render (always cleanup in useEffect return)'
          ],
          miniChallenge: 'Add a "User is typing..." event broadcast using `socket.broadcast.to(roomId).emit("typing")`.',
          quiz: {
            question: 'WebSockets HTTP polling ke mukable kyu bohot zyada efficient hain?',
            options: ['Kyunki WebSockets plain text use nahi karte', 'Kyunki persistent connection rehta hai aur baar baar HTTP headers ka overhead nahi hota', 'Kyunki database use nahi hota', 'Kyunki HTML fast render hota hai'],
            answer: 'Kyunki persistent connection rehta hai aur baar baar HTTP headers ka overhead nahi hota',
            explanation: 'WebSockets single handshake ke baad continuous open stream maintain karte hain, jisse har packet ke sath large HTTP headers ka overhead khatam ho jata hai.'
          },
          summary: ['Socket.io bidirectional real-time events provide karta hai', 'Rooms se multi-user collaboration channels bante hain', 'Chat, live dashboards, aur multiplayer games ke liye standard architecture hai'],
          flashcard: { q: '`socket.emit()` aur `io.emit()` mein kya difference hai?', a: '`socket.emit()` sirf individual client ko message bhejta hai; `io.emit()` sabhi connected clients ko broadcast karta hai.' }
        }
      ]
    },
    ...fullstackProjectsMasteryChapters
  ]
}

export default fullstackProjectsCourse
