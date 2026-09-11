import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  BookOpen,
  Braces,
  Code2,
  Database,
  FileCode,
  Laptop,
  Layers,
  LockKeyhole,
  Network,
  Server,
  Sparkles,
  Trophy,
  Users
} from 'lucide-react'
import { updatePageSeo, getCourseUrl } from '../utils/seo'

const EXPLORE_COURSES = [
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master DSA concepts and problem-solving techniques.',
    lessons: '120+ Lessons',
    level: 'Beginner Friendly',
    Icon: Network
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Master full stack web development from overview to cloud deployment.',
    lessons: '160+ Lessons',
    level: 'Beginner to Architect',
    Icon: Code2
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Learn Python from basics to advanced level.',
    lessons: '100+ Lessons',
    level: 'Beginner Friendly',
    Icon: Braces
  },
  {
    id: 'react',
    title: 'React Development',
    description: 'Build interactive UIs with React and modern tools.',
    lessons: '80+ Lessons',
    level: 'Intermediate',
    Icon: Layers
  },
  {
    id: 'systemdesign',
    title: 'System Design',
    description: 'Design scalable and high-performance systems.',
    lessons: '60+ Lessons',
    level: 'Advanced',
    Icon: Laptop
  },
  {
    id: 'java',
    title: 'Java Development',
    description: 'Learn Java programming and build enterprise apps.',
    lessons: '90+ Lessons',
    level: 'Beginner Friendly',
    Icon: FileCode
  },
  {
    id: 'nodejs',
    title: 'Node.js Development',
    description: 'Build fast and scalable server-side applications.',
    lessons: '70+ Lessons',
    level: 'Intermediate',
    Icon: Server
  },
  {
    id: 'sqlinterview',
    title: 'SQL Interview',
    description: 'Master SQL queries and prepare for interviews.',
    lessons: '50+ Lessons',
    level: 'Beginner Friendly',
    Icon: Database
  }
]

const TECH_TRAIN_COURSES = [
  {
    id: 'git',
    title: 'Git',
    badgeBg: '#F05032',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M23.5 10.9L13.1.5c-.6-.6-1.6-.6-2.2 0L8.6 2.8l3.4 3.4c.6-.2 1.3-.1 1.8.4.5.5.7 1.3.4 1.9l3.3 3.3c.7-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.5-.5-.7-1.3-.5-1.9l-3.1-3.1v5.6c.2.2.4.4.5.7.7.7.7 1.9 0 2.6-.7.7-1.9.7-2.6 0-.7-.7-.7-1.9 0-2.6.3-.3.6-.5 1-.6V8.6c-.4-.1-.7-.3-1-.6-.5-.5-.7-1.2-.5-1.8L7.3 3.9.5 10.8c-.6.6-.6 1.6 0 2.2l10.4 10.4c.6.6 1.6.6 2.2 0l10.4-10.4c.6-.6.6-1.5 0-2.1z" fill="white"/>
      </svg>
    )
  },
  {
    id: 'devops',
    title: 'Docker',
    badgeBg: '#2496ED',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M13.98 10.02h2.09v1.98h-2.09zm-2.85 0h2.09v1.98h-2.09zm-2.85 0h2.09v1.98H8.28zm8.55-2.66h2.09v1.98h-2.09zm-2.85 0h2.09v1.98h-2.09zm-2.85 0h2.09v1.98h-2.09zm-2.85 0h2.09v1.98H5.43zm8.55-2.66h2.09v1.98h-2.09zm-2.85 0h2.09v1.98h-2.09zm10.74 7.37c-.38-.28-1.5-.37-2.31-.08-.13-.7-.52-1.32-1.12-1.74l-.57-.4-.36.6c-.53.9-.62 2.05-.24 3.03-.4.22-.89.34-1.46.34H1.36c-.47 0-.85.38-.85.85 0 2.65.94 4.54 2.8 5.62 2.11 1.22 5.09 1.45 8.16.65 3.32-.86 5.86-3.1 6.83-6.04.81-.1 2.29-.46 2.76-2.18l.08-.34-.3-.15z" fill="white" />
      </svg>
    )
  },
  {
    id: 'python',
    title: 'Python',
    badgeBg: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M11.9 1c-4.8 0-4.5 2.1-4.5 2.1l.1 2.2h4.5v.6H5.7S2 5.4 2 10.3c0 4.8 3.2 4.7 3.2 4.7h1.9v-2.7s-.1-3.2 3.2-3.2h5.5s3.1.1 3.1-3c0-3.2-2.7-5.1-7-5.1zm-2.6 1.7c.6 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .4-1 1-1zm2.8 20.3c4.8 0 4.5-2.1 4.5-2.1l-.1-2.2H12v-.6h6.3s3.7.5 3.7-4.4c0-4.8-3.2-4.7-3.2-4.7h-1.9v2.7s.1 3.2-3.2 3.2H8.2s-3.1-.1-3.1 3c0 3.2 2.7 5.1 7 5.1zm2.6-1.7c-.6 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1z" fill="white" />
      </svg>
    )
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    badgeBg: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5c.5.8 1.3 1.3 2.3 1.3 1.3 0 2.2-.7 2.2-2.4v-6.9H9.4v6.8c0 .8-.4 1.2-1 1.2-.5 0-.9-.3-1.1-.7l-1.3.7zm7.5-.1c.7.9 1.7 1.4 3 1.4 2.1 0 3.3-1.1 3.3-2.7 0-1.7-1-2.3-2.6-3-.9-.4-1.3-.7-1.3-1.3 0-.5.4-.9 1.1-.9.7 0 1.2.3 1.6.8l1.3-.9c-.7-1-1.7-1.4-2.8-1.4-2 0-3.1 1.1-3.1 2.5 0 1.6.9 2.3 2.5 2.9.9.4 1.4.7 1.4 1.4 0 .6-.5 1-1.3 1-.8 0-1.4-.4-1.8-1.1l-1.3.8z" fill="#000" />
      </svg>
    )
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    badgeBg: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M12.5 13.5v-1.5h6v1.5h-2.1v6h-1.8v-6h-2.1zm-7 1.5c.3-1.1 1.2-1.6 2.5-1.6 1.6 0 2.5.8 2.5 2.1 0 2.4-3.2 2-3.2 3.1 0 .4.4.7 1 .7.6 0 1.1-.3 1.3-.7l1.4.9c-.6 1-1.6 1.5-2.7 1.5-1.9 0-2.8-1-2.8-2.3 0-2.3 3.3-2 3.3-3.2 0-.3-.3-.6-.8-.6-.6 0-1 .3-1.2.7l-1.3-.6z" fill="white" />
      </svg>
    )
  },
  {
    id: 'react',
    title: 'React',
    badgeBg: '#20232a',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    id: 'nextjs',
    title: 'Next.js',
    badgeBg: '#000000',
    icon: (
      <svg viewBox="0 0 180 180" width="16" height="16">
        <circle cx="90" cy="90" r="90" fill="#000"/>
        <path fill="#fff" d="M149.508 159.525L69.839 56H56v68.397h12.593V71.799l70.732 91.564a90.22 90.22 0 0 0 10.183-3.838zM123.593 56H111v46.155l12.593 16.294V56z"/>
      </svg>
    )
  },
  {
    id: 'html',
    title: 'HTML',
    badgeBg: '#E34F26',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17.6 4.8H4.9l.4 4.5h13.4l-.5 5.5-3.8 1-3.8-1-.2-2.7h-2.9l.4 5 6.5 1.8 6.5-1.8 1.1-12.3z" fill="white" />
      </svg>
    )
  },
  {
    id: 'css',
    title: 'CSS',
    badgeBg: '#1572B6',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17.6 4.8H4.9l.4 4.5h8.9l-.3 3.6-1.9.5-1.9-.5-.1-1.3H7.1l.3 3.6 4.6 1.3 4.6-1.3.8-9.4h-12z" fill="white" />
      </svg>
    )
  },
  {
    id: 'java',
    title: 'Java',
    badgeBg: '#ED8B00',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M8.8 17.2s-.5.3.4.4c1.1.2 1.8.2 3.1-.1 0 0 .4.3.8.4-2.8 1-6.1-.2-4.3-.7zm-1.2-2.3s-.6.4.4.5c1.4.2 2.7.2 4.6-.2 0 0 .3.3.6.4-3.5.9-8.1 0-5.6-.7zm4.7-6.2c.7.8.5 1.5.5 1.5s-.9 1.1-2.9 1.3c-2.3.2-4.3-.7-4.3-.7s1.3-.2 2.2-.4c1.4-.4 2.8-.7 4.5-1.7zm-2.4 12.3c2.7.2 6.9-.3 7-2.6 0 0-.2.7-1.7 1.3-1.8.7-4.6.9-7.3.3 0 0 .8.6 2 .1z" fill="white" />
      </svg>
    )
  },
  {
    id: 'cpp',
    title: 'C++',
    badgeBg: '#00599C',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M12 1L2 6.8v10.4L12 23l10-5.8V6.8L12 1zm-2.5 13.5c-2.2 0-3.5-1.6-3.5-3.5s1.3-3.5 3.5-3.5c1.4 0 2.4.7 2.8 1.8l-1.5.8c-.3-.6-.7-.9-1.3-.9-1.1 0-1.7.9-1.7 1.8s.6 1.8 1.7 1.8c.6 0 1.1-.3 1.3-.9l1.5.8c-.4 1.1-1.4 1.8-2.8 1.8zm6.5-2h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm3 0h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1z" fill="white"/>
      </svg>
    )
  },
  {
    id: 'mysql',
    title: 'SQL',
    badgeBg: '#00758F',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M12 2C6.48 2 2 4.01 2 6.5v11C2 19.99 6.48 22 12 22s10-2.01 10-4.5v-11C22 4.01 17.52 2 12 2zm0 3c4.41 0 8 1.34 8 2s-3.59 2-8 2-8-1.34-8-2 3.59-2 8-2zm8 12.5c0 .66-3.59 2-8 2s-8-1.34-8-2v-2.35c2.14 1.34 5.38 1.85 8 1.85s5.86-.51 8-1.85v2.35zm0-4.5c0 .66-3.59 2-8 2s-8-1.34-8-2v-2.35c2.14 1.34 5.38 1.85 8 1.85s5.86-.51 8-1.85v2.35z" fill="white" />
      </svg>
    )
  },
  {
    id: 'c',
    title: 'C',
    badgeBg: '#659AD2',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <circle cx="12" cy="12" r="11" fill="#659AD2" />
        <path d="M14.5 7.5c-1-.7-2.1-.9-3.2-.9-3 0-5.3 2.2-5.3 5.4s2.2 5.4 5.3 5.4c1.2 0 2.3-.3 3.3-1l-.9-2.1c-.7.5-1.5.7-2.3.7-1.8 0-3.1-1.3-3.1-3s1.3-3 3.1-3c.8 0 1.6.3 2.2.7l.9-2.2z" fill="white" />
      </svg>
    )
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    badgeBg: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M12 2l10 5.8v11.6L12 25 2 19.4V7.8L12 2zm0 3L4.5 9.3v7.4L12 21l7.5-4.3V9.3L12 5z" fill="white" />
      </svg>
    )
  },
  {
    id: 'mongodb',
    title: 'MongoDB',
    badgeBg: '#47A248',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M12 1.5c-.3 0-.6.1-.7.4C10.1 4 6 10 6 14.5c0 3.6 2.7 6.5 6 6.5s6-2.9 6-6.5c0-4.5-4.1-10.5-5.3-12.6-.1-.3-.4-.4-.7-.4zm0 2.5c.8 1.6 4.3 7 4.3 10.5 0 2.5-1.9 4.5-4.3 4.5s-4.3-2-4.3-4.5C7.7 11 11.2 5.6 12 4z" fill="white" />
      </svg>
    )
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    badgeBg: '#4169E1',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 16.5c-3.6 0-6.5-2.9-6.5-6.5S9.4 5.5 13 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" fill="white" />
      </svg>
    )
  },
  {
    id: 'angular',
    title: 'Angular',
    badgeBg: '#DD0031',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M12 2L2.5 5.4 3.9 17.6 12 22l8.1-4.4 1.4-12.2L12 2zm0 3.3l5.2 11.6h-2.1l-1.1-2.7H10l-1.1 2.7H6.8L12 5.3zm-1.3 6.9h2.6L12 9.7l-1.3 2.5z" fill="white" />
      </svg>
    )
  },
  {
    id: 'dsa',
    title: 'DSA',
    badgeBg: '#F59E0B',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <circle cx="12" cy="4" r="3" fill="white" />
        <circle cx="5" cy="19" r="3" fill="white" />
        <circle cx="19" cy="19" r="3" fill="white" />
        <path d="M12 7v5M12 12l-5 4M12 12l5 4" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    )
  },
  {
    id: 'systemdesign',
    title: 'System Design',
    badgeBg: '#EC4899',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <rect x="2" y="3" width="8" height="6" rx="1" fill="white" />
        <rect x="14" y="3" width="8" height="6" rx="1" fill="white" />
        <rect x="8" y="15" width="8" height="6" rx="1" fill="white" />
        <path d="M6 9v3h12V9M12 12v3" stroke="white" strokeWidth="1.5" fill="none" />
      </svg>
    )
  }
]

const EXPLORE_FEATURES = [
  { title: 'Expert Instructors', description: 'Learn from industry experts', Icon: Users },
  { title: 'Hands-on Projects', description: 'Build real-world projects', Icon: Code2 },
  { title: 'Certificates', description: 'Earn verified certificates', Icon: Trophy },
  { title: 'Lifetime Access', description: 'Learn at your own pace', Icon: LockKeyhole }
]

const TOP_COMPANIES = [
  {
    name: 'Meta',
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16.944 5c-1.892 0-3.568 1.054-4.944 2.825C10.624 6.054 8.948 5 7.056 5 3.714 5 1 7.747 1 11.13c0 3.385 2.714 6.131 6.056 6.131 2.215 0 4.095-1.328 5.444-3.328 1.349 2 3.229 3.328 5.444 3.328C21.286 17.261 24 14.515 24 11.13 24 7.747 21.286 5 16.944 5zm-9.888 9.97c-2.122 0-3.844-1.748-3.844-3.84 0-2.091 1.722-3.839 3.844-3.839 1.583 0 3.02 1.138 4.043 2.92-1.023 1.783-2.46 2.759-4.043 2.759zm9.888 0c-1.583 0-3.02-.976-4.043-2.759 1.023-1.782 2.46-2.92 4.043-2.92 2.122 0 3.844 1.748 3.844 3.839 0 2.092-1.722 3.84-3.844 3.84z"/>
      </svg>
    )
  },
  {
    name: 'Microsoft',
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M1 1h10v10H1zM13 1h10v10H13zM1 13h10v10H1zM13 13h10v10H13z"/>
      </svg>
    )
  },
  {
    name: 'Google',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    )
  },
  {
    name: 'Electronic Arts',
    icon: (
      <svg viewBox="0 0 32 24" width="34" height="26" fill="currentColor" aria-hidden="true">
        <path d="M2 17l4.5-10h2.4l4.5 10h-2.5l-.9-2.3H5.5l-.9 2.3H2zm4.3-4.2h2.7l-1.3-3.4-1.4 3.4zm10.7 4.2V7h9v2.2h-6.4v2.2h5.4v2.1h-5.4v2.3h6.6v2.2H17z"/>
      </svg>
    )
  },
  {
    name: 'Apple',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.96 2.76 1.01.08 2.06-.51 2.69-1.26z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'Spotify',
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.305c-.215.353-.675.465-1.028.25-2.817-1.722-6.363-2.112-10.539-1.157-.402.092-.803-.16-.895-.562-.092-.403.16-.804.563-.896 4.571-1.045 8.492-.595 11.649 1.336.353.216.465.676.25 1.029zm1.464-3.255c-.27.44-.848.58-1.288.31-3.225-1.982-8.14-2.556-11.954-1.398-.498.15-1.026-.135-1.177-.633-.15-.498.136-1.026.634-1.177 4.364-1.324 9.774-.688 13.475 1.587.44.27.58.848.31 1.288zm.126-3.41c-3.867-2.296-10.248-2.508-13.941-1.387-.593.18-1.22-.164-1.4-.757-.18-.593.164-1.22.757-1.4 4.246-1.29 11.287-1.043 15.748 1.605.533.316.707 1.008.39 1.541-.316.533-1.007.707-1.54.39z"/>
      </svg>
    )
  },
  {
    name: 'Reddit',
    icon: (
      <svg viewBox="0 0 24 24" width="29" height="29" fill="currentColor" aria-hidden="true">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.56 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.56 12 8 12.56 8 13.25c0 .688.56 1.25 1.25 1.25.688 0 1.25-.56 1.25-1.25 0-.688-.56-1.25-1.25-1.25zm5.5 0c-.688 0-1.25.56-1.25 1.25 0 .688.56 1.25 1.25 1.25.688 0 1.25-.56 1.25-1.25 0-.688-.56-1.25-1.25-1.25zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.197-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    )
  },
  {
    name: 'IBM',
    icon: (
      <svg viewBox="0 0 28 20" width="34" height="24" fill="currentColor" aria-hidden="true">
        <path d="M0 1h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 3.4h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 5.8h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 8.2h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 10.6h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 13h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 15.4h7v1.1H0zm10 0h5v1.1h-5zm8 0h8v1.1h-8zM0 17.8h7V19H0zm10 0h5V19h-5zm8 0h8V19h-8z"/>
      </svg>
    )
  }
]

export default function LandingPage({ onStartCourse, onShowAuth, onNavigate, scrollTarget, coursesData }) {
  const routerNavigate = useNavigate()

  const handleGoToCareer = () => {
    if (onNavigate) {
      onNavigate('/roadmaps')
    } else {
      routerNavigate('/roadmaps')
    }
  }

  useEffect(() => {
    updatePageSeo({
      title: 'CodeMasti – Master Programming Through Visual Learning in Hinglish',
      description: 'Learn full stack web development, Python, JavaScript, React, SQL, and DSA in simple Hinglish with interactive code execution, visual diagrams, and career roadmaps.',
      path: '/',
      breadcrumbs: [{ name: 'Home', url: '/' }]
    })
  }, [])

  useEffect(() => {
    if (!scrollTarget) return
    const el = document.getElementById(`section-${scrollTarget}`) || document.getElementById(`${scrollTarget}-section`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [scrollTarget])
  return (
    <div className="home-page">
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-tagline-pill">
            <Sparkles size={14} /> CodeMastii Vision
          </div>
          <h1 className="hero-headline">
            Read → Understand → Visualize<br />
            <span className="hero-highlight">Practice → Remember Forever</span>
          </h1>
          <p className="hero-sub">
            Student sirf padhkar na nikle. Topic samajh aaye, dimaag mein image ban jaaye, aur kabhi na bhuley.
          </p>
          <div className="hero-actions">
            <button
              onClick={() => onShowAuth('register')}
              className="primary-btn hero-cta"
            >
              <BookOpen size={18} /> Start Learning Free
            </button>
            <button
              onClick={() => document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="ghost-btn hero-cta"
            >
              Explore Courses <ArrowRight size={16} />
            </button>
          </div>
          <div className="hero-stats">
            <div><strong>30+</strong><span>Courses</span></div>
            <div><strong>600+</strong><span>Lessons</span></div>
            <div><strong>14-Step</strong><span>Format</span></div>
            <div><strong>100%</strong><span>Free</span></div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="hero-feature-pills">
          {['📖 English + Hinglish', '😂 Funny Analogies', '🎨 Visual Diagrams', '💻 Live Code Editor', '🧠 Flashcards', '⏰ Spaced Revision'].map((f) => (
            <span key={f} className="feature-pill">
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* ── LEARNERS WORK AT / SOCIAL PROOF LOGO BAR ── */}
      <section className="learners-trust-section" aria-label="Our learners work at">
        <div className="learners-trust-inner">
          <div className="learners-trust-header">
            <span className="learners-trust-dot" />
            <span className="learners-trust-title">Our learners work at</span>
          </div>
          <div className="learners-trust-logos">
            {TOP_COMPANIES.map((c) => (
              <div key={c.name} className="learners-trust-logo-item" title={c.name} aria-label={c.name}>
                {c.icon}
                <span className="learners-trust-logo-tooltip">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USP SECTION ── */}
      <section className="usp-section">
        <h2>Ye Platform Kyun Different Hai?</h2>
        <div className="usp-grid">
          {[
            { icon: '📖', title: 'English + Hinglish', desc: 'Har concept pehle proper English mein, phir simple Hinglish mein. Dono worlds best of!' },
            { icon: '😂', title: 'Funny Real-Life Analogies', desc: 'Tech jargon nahi, everyday examples. Dimaag mein automatically link ho jaata hai.' },
            { icon: '🎨', title: 'Visual Memory Diagrams', desc: 'Flowcharts, architecture visualizers, animated pipelines. Read kam, visualize zyada.' },
            { icon: '💻', title: 'Interactive Live Playground', desc: 'Browser mein hi code chalao. Har lesson ke sath live compiler aur challenges.' },
            { icon: '🧠', title: 'Smart Flashcards', desc: 'Key definitions aur tricky concepts ke flashcards. Quick recall test karo.' },
            { icon: '⏰', title: 'Automated Spaced Revision', desc: '1-3-7-14 din ka revision cycle. Jo padha hai, kabhi nahi bhoolonge.' },
          ].map(u => (
            <div key={u.title} className="usp-card">
              <span className="usp-icon">{u.icon}</span>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTINUOUS COURSES TRAIN MARQUEE (Right to Left slow animation) ── */}
      <div className="courses-train-marquee-container" aria-label="Available Courses Marquee Track">
        <div className="courses-train-track">
          {/* First loop track */}
          {TECH_TRAIN_COURSES.map((t, idx) => (
            <button
              key={`train-1-${t.id}-${idx}`}
              type="button"
              className="course-train-pill"
              onClick={() => {
                const course = (coursesData || []).find(c => c.id === t.id) || t.id
                onStartCourse(course)
              }}
              title={`Start ${t.title} Course`}
            >
              <span className="course-train-icon-wrap" style={{ background: t.badgeBg || '#1e293b' }}>
                {t.icon}
              </span>
              <span className="course-train-name">{t.title}</span>
            </button>
          ))}
          {/* Second duplicate track for seamless infinite marquee */}
          {TECH_TRAIN_COURSES.map((t, idx) => (
            <button
              key={`train-2-${t.id}-${idx}`}
              type="button"
              className="course-train-pill"
              onClick={() => {
                const course = (coursesData || []).find(c => c.id === t.id) || t.id
                onStartCourse(course)
              }}
              title={`Start ${t.title} Course`}
            >
              <span className="course-train-icon-wrap" style={{ background: t.badgeBg || '#1e293b' }}>
                {t.icon}
              </span>
              <span className="course-train-name">{t.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── COURSES SECTION ── */}
      <section id="courses-section" className="explore-courses-section">
        <div className="explore-header">
          <div>
            <h2>Explore. Learn. <span>Grow.</span></h2>
            <p>Choose a course and start your learning journey with CodeMastii.</p>
          </div>
          <Link to="/courses" onClick={() => onStartCourse?.(null)} className="explore-view-all" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            View All Courses <ArrowRight size={18} />
          </Link>
        </div>
        <span id="section-frontend" className="course-scroll-anchor" />
        <span id="section-interview" className="course-scroll-anchor" />
        <span id="section-projects" className="course-scroll-anchor" />
        <div className="explore-course-grid">
          {EXPLORE_COURSES.map((item) => {
            const course = (coursesData || []).find(c => c.id === item.id) || { id: item.id, title: item.title }
            const Icon = item.Icon
            const courseUrl = getCourseUrl(course)

            return (
              <article
                key={item.id}
                className="explore-course-card"
              >
                <Link
                  to={courseUrl}
                  onClick={() => onStartCourse?.(course)}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div className="explore-card-top-bar">
                    <div className="explore-card-icon">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="explore-card-title">{item.title}</h3>
                  </div>

                  <p className="explore-card-desc">{item.description}</p>

                  <div className="explore-card-bottom-info">
                    <span className="explore-card-meta-item">
                      <BookOpen size={15} />
                      <span>{item.lessons}</span>
                    </span>
                    <span className="explore-card-meta-item">
                      <BarChart3 size={15} />
                      <span>{item.level}</span>
                    </span>
                  </div>

                  <div className="explore-course-button" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    View Course <ArrowRight size={15} />
                  </div>
                </Link>
              </article>
            )
          })}
        </div>
        <div className="explore-feature-strip">
          {EXPLORE_FEATURES.map(({ title, description, Icon }) => (
            <div className="explore-feature-item" key={title}>
              <span><Icon size={24} /></span>
              <div>
                <strong>{title}</strong>
                <small>{description}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CODING JOURNEY PROMO BANNER (Post-Courses) ── */}
      <section className="coding-journey-banner-section" aria-label="Start Your Coding Journey">
        <div className="coding-journey-banner-card">
          <img
            src="/coding-journey-banner.png"
            alt="Start Your Coding Journey with CodeMastii"
            className="coding-journey-banner-img"
            loading="lazy"
          />
          <button
            type="button"
            className="coding-journey-interactive-btn"
            onClick={handleGoToCareer}
            title="Level Up Your Skills now - View Career Roadmaps"
            aria-label="Level Up Your Skills now - View Career Roadmaps"
          >
            Level Up Your Skills now
          </button>
        </div>
      </section>

      <footer className="footer">
        <BookMarked size={18} />
        <span>CodeMastii © 2026 · Read → Understand → Visualize → Practice → Remember Forever</span>
      </footer>
    </div>
  )
}
