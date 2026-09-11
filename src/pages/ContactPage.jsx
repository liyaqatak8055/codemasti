import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare, Send, CheckCircle, Clock, MapPin, Phone } from 'lucide-react'
import { updatePageSeo } from '../utils/seo'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    updatePageSeo({
      title: 'Contact CodeMasti – Support, Feedback & Inquiries',
      description: 'Get in touch with the CodeMasti team for course questions, platform feedback, instructor applications, and student support.',
      path: '/contact',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Contact Us', url: '/contact' }
      ]
    })
  }, [])

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      const mailtoLink = `mailto:support@codemasti.com?subject=${encodeURIComponent(form.subject || 'CodeMasti Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`
      window.open(mailtoLink, '_blank')
    }, 300)
  }

  return (
    <div className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="contact-badge">📬 Contact Us</span>
          <h1>Get In Touch</h1>
          <p>Have a question, feedback, or just want to say hello? We would love to hear from you.</p>
        </motion.div>
      </section>

      <div className="contact-main">

        {/* Info Cards */}
        <motion.div className="contact-info-col"
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Clock size={22} /></div>
            <div>
              <h4>Response Time</h4>
              <p>We usually respond within 24–48 hours on business days.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Mail size={22} /></div>
            <div>
              <h4>Email</h4>
              <p>support@codemasti.com</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><MapPin size={22} /></div>
            <div>
              <h4>Location</h4>
              <p>India 🇮🇳 — Available globally online</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Phone size={22} /></div>
            <div>
              <h4>Community</h4>
              <p>Join our Discord for quick help from the community.</p>
            </div>
          </div>

          <div className="contact-topics">
            <h4>Common Topics</h4>
            {['Technical issue', 'Course feedback', 'Partnership inquiry', 'Bug report', 'Feature request', 'Account support'].map(t => (
              <button key={t} className="contact-topic-chip" onClick={() => setForm(f => ({ ...f, subject: t }))}>{t}</button>
            ))}
          </div>

        </motion.div>

        {/* Form */}
        <motion.div className="contact-form-col"
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>

          {submitted ? (
            <motion.div className="contact-success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <CheckCircle size={48} color="#10b981" />
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out, <strong>{form.name || 'friend'}</strong>! We will get back to you within 24–48 hours.</p>
              <button className="contact-new-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>

              {error && (
                <div style={{
                  padding: '10px 14px',
                  borderRadius: 10,
                  background: '#fff1f2',
                  border: '1px solid #fecaca',
                  color: '#ef4444',
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 16
                }}>
                  ⚠️ {error}
                </div>
              )}

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name"><User size={15} /> Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Liyaqat Khan"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email"><Mail size={15} /> Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject"><MessageSquare size={15} /> Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="How can we help you?"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">📝 Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us more about your question or feedback..."
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <div className="contact-form-footer">
                <p className="contact-response-note">
                  <Clock size={14} /> We usually respond within 24–48 hours.
                </p>
                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="contact-spinner" />
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </div>

            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
