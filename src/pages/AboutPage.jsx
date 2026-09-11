import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Map, Briefcase, MessageSquare, Award, Zap, Users, Target, TrendingUp, Code2, Sparkles } from 'lucide-react'
import { updatePageSeo } from '../utils/seo'

const FEATURES = [
  { icon: BookOpen,     label: 'Visual Learning',       desc: 'Concepts explained with diagrams, animations, and step-by-step walkthroughs.' },
  { icon: Code2,        label: 'Interactive Practice',   desc: 'Write and run code directly in the browser with instant feedback.' },
  { icon: Map,          label: 'Career Roadmaps',        desc: 'Step-by-step learning paths for 17+ career tracks in tech.' },
  { icon: Briefcase,    label: 'Real Projects',          desc: 'Build portfolio-worthy projects that impress recruiters.' },
  { icon: MessageSquare,label: 'Interview Prep',         desc: 'Hundreds of curated Q&A with explanations and follow-up questions.' },
  { icon: Zap,          label: 'XP & Gamification',      desc: 'Earn XP, maintain streaks, and climb the leaderboard as you learn.' },
]

const STATS = [
  { value: '100+', label: 'Lessons',        icon: '📚' },
  { value: '500+', label: 'Quiz Questions', icon: '🎯' },
  { value: '50+',  label: 'Projects',       icon: '🏗️' },
  { value: '10K+', label: 'Learners',       icon: '🚀' },
]

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

export default function AboutPage({ onStartLearning }) {
  useEffect(() => {
    updatePageSeo({
      title: 'About CodeMasti – Interactive Coding Education Platform',
      description: 'Learn about CodeMasti mission, features, visual learning methodology, career roadmaps, and community for aspiring software developers.',
      path: '/about',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' }
      ]
    })
  }, [])

  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <motion.div className="about-hero-content" {...fadeUp} transition={{ duration: 0.6 }}>
          <span className="about-badge">🚀 About CodeMastii</span>
          <h1>Learn Coding<br /><span className="about-hero-highlight">The Smart Way</span></h1>
          <p className="about-hero-sub">
            CodeMastii is built for the next generation of developers — visual, interactive, and gamified learning
            that makes complex concepts simple and enjoyable.
          </p>
          <button className="about-cta-btn" onClick={onStartLearning}>
            Start Learning Free →
          </button>
        </motion.div>
        <div className="about-hero-visual">
          {['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'].map((t, i) => (
            <motion.div
              key={t}
              className="about-hero-bubble"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
            >
              {t}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission-section">
        <motion.div className="about-mission-card" {...fadeUp} transition={{ duration: 0.5 }}>
          <Target size={40} className="about-mission-icon" />
          <h2>Our Mission</h2>
          <p>
            Programming education is often dry, expensive, or inaccessible. We created CodeMastii to change that.
            Our goal is to make high-quality coding education free, visual, and available to everyone — whether
            you are a student in a small town or a working professional looking to switch careers.
          </p>
          <p>
            We believe the best way to learn programming is through <strong>doing</strong> — building real projects,
            practicing with real interview questions, and tracking your progress with a system that keeps you motivated.
          </p>
        </motion.div>
      </section>

      {/* Meet the Leadership & Core Team */}
      <section className="about-team-section">
        <motion.div className="about-section-header" {...fadeUp}>
          <div className="about-team-pill">
            <Users size={16} /> The Minds Behind CodeMastii
          </div>
          <h2>Meet Our Team</h2>
          <p>Passionate engineers, educators, and creators building the future of visual coding education.</p>
        </motion.div>

        {/* Lead Creator Feature Card */}
        <motion.div className="about-creator-card" {...fadeUp} transition={{ duration: 0.5 }}>
          <div className="about-creator-grid">
            <div className="about-creator-image-wrap">
              <img
                src="/developer.jpg"
                alt="Leyaquat Ali Khan – Developer & Creator of CodeMasti"
                className="about-creator-img"
                loading="lazy"
              />
              <div className="about-creator-glow" />
            </div>
            <div className="about-creator-details">
              <div className="about-creator-badge">
                <Sparkles size={15} /> Founder & Lead Developer
              </div>
              <h2 className="about-creator-name">Leyaquat Ali Khan</h2>
              <p className="about-creator-role">Software Engineer & Creator of CodeMastii</p>
              <p className="about-creator-bio">
                Building CodeMastii with the vision of making computer science and modern software engineering
                intuitive, visual, and accessible for everyone through interactive playgrounds, Hinglish visual guides,
                and real-world Software Engineering labs.
              </p>
              <div className="about-creator-tags">
                <span className="creator-tag">🚀 Software Engineering</span>
                <span className="creator-tag">🏛️ System Design</span>
                <span className="creator-tag">🧠 DSA & Visualizations</span>
                <span className="creator-tag">💡 EdTech Innovation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Team Grid */}
        <div className="about-team-grid">
          <motion.div
            className="about-team-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="about-team-avatar">
              <span>OK</span>
            </div>
            <div className="about-team-info">
              <div className="about-team-badge">Core Leadership</div>
              <h3>Osama Khan</h3>
              <p className="about-team-role">Co-Founder & Technical Operations</p>
              <p className="about-team-bio">
                Leading platform scalability, technical infrastructure, and learner experience strategies across CodeMastii learning tracks.
              </p>
              <div className="about-creator-tags">
                <span className="creator-tag">⚡ Tech Operations</span>
                <span className="creator-tag">📈 Platform Growth</span>
                <span className="creator-tag">🌐 Systems</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-team-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="about-team-avatar">
              <span>JK</span>
            </div>
            <div className="about-team-info">
              <div className="about-team-badge">Core Engineering</div>
              <h3>Jasim Khan</h3>
              <p className="about-team-role">Software Engineer & Curriculum Architect</p>
              <p className="about-team-bio">
                Designing interactive problem banks, compiler challenge testcases, and deep-dive programming lab architectures.
              </p>
              <div className="about-creator-tags">
                <span className="creator-tag">💻 Curriculum Design</span>
                <span className="creator-tag">🛠️ Project Engineering</span>
                <span className="creator-tag">🎯 Practice Labs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="about-features-section">
        <motion.div className="about-section-header" {...fadeUp}>
          <h2>Why CodeMastii?</h2>
          <p>Everything you need to go from zero to job-ready developer.</p>
        </motion.div>
        <div className="about-features-grid">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              className="about-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="about-feature-icon">
                <f.icon size={24} />
              </div>
              <h3>{f.label}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats-section">
        <motion.div className="about-stats-inner" {...fadeUp}>
          <div className="about-section-header light">
            <TrendingUp size={32} />
            <h2>Growing Every Day</h2>
          </div>
          <div className="about-stats-grid">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="about-stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
              >
                <span className="about-stat-emoji">{s.icon}</span>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <motion.div className="about-cta-card" {...fadeUp}>
          <Users size={40} />
          <h2>Join 10,000+ Learners Today</h2>
          <p>Start your coding journey for free. No credit card required. No fluff — just pure learning.</p>
          <button className="about-cta-btn large" onClick={onStartLearning}>
            🚀 Start Learning Now
          </button>
        </motion.div>
      </section>

    </div>
  )
}
