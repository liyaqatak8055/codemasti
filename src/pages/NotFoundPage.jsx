import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, Compass, BookOpen, Search } from 'lucide-react'
import { updatePageSeo } from '../utils/seo'

export default function NotFoundPage({ onNavigateHome, onNavigateCourses, onOpenSearch }) {
  useEffect(() => {
    updatePageSeo({
      title: '404: Page Not Found | CodeMasti',
      description: 'The page you requested could not be found on CodeMasti.',
      path: '/404',
      noIndex: true
    })
  }, [])
  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          maxWidth: 540,
          width: '100%',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 24,
          padding: '48px 32px',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <span style={{ fontSize: 64, display: 'block', marginBottom: 12 }}>🕵️‍♂️</span>
        <span style={{
          display: 'inline-block',
          padding: '4px 14px',
          borderRadius: 20,
          background: 'var(--green-light)',
          color: 'var(--green)',
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          marginBottom: 16
        }}>
          404 • Page Not Found
        </span>
        <h1 style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 900, marginBottom: 12, color: 'var(--text-primary)' }}>
          Ye Page Gayab Hai!
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6, marginBottom: 28 }}>
          Lagta hai galat link pe click ho gaya ya page move ho gaya hai. Chalo sahi jagah chalte hain!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            className="primary-btn"
            onClick={onNavigateCourses}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 20px', fontSize: 15 }}
          >
            <BookOpen size={18} /> Explore All Courses
          </button>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              className="ghost-btn"
              onClick={onNavigateHome}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 16px' }}
            >
              <Home size={16} /> Home
            </button>
            <button
              className="ghost-btn"
              onClick={onOpenSearch}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '10px 16px' }}
            >
              <Search size={16} /> Search
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
