import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Download, Printer, Share2, Check, X, Sparkles, BookOpen, ShieldCheck, UserCheck, CheckCircle2, ArrowRight, Edit3 } from 'lucide-react'
import { COURSES_DATA } from '../coursesData'
import { sanitizeTextInput } from '../utils/security'

export default function CertificateModal({ isOpen, onClose, user, course, onShowToast }) {
  const activeCourse = course || COURSES_DATA[0]
  const [studentName, setStudentName] = useState(user?.username || 'Enter the Name')
  const [step, setStep] = useState('prompt') // 'prompt' -> 'ready'
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const inputRef = useRef(null)

  const cleanName = sanitizeTextInput(studentName || 'Learner', 100)
  const courseTitle = (activeCourse?.certificateName || activeCourse?.title || 'Web Development Mastery').toUpperCase()

  const issueDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const certId = `CM-CERT-${new Date().getFullYear()}-${Math.abs(((activeCourse?.id || 'course') + cleanName).split('').reduce((a, b) => ((a << 5) - a) + b.charCodeAt(0), 0)).toString().slice(0, 7)}`

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://codemastii.com'
  const verificationUrl = `${baseUrl}/verify/${certId}?name=${encodeURIComponent(cleanName)}&course=${encodeURIComponent(activeCourse?.id || 'web')}`

  useEffect(() => {
    if (isOpen) {
      setStep('prompt')
      if (user?.username && (!studentName || studentName === 'Learner')) {
        setStudentName(user.username)
      }
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus()
      }, 150)

      const handleKey = (e) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, user?.username, onClose])

  const handleStartGenerate = (e) => {
    if (e) e.preventDefault()
    if (!studentName.trim()) {
      if (onShowToast) onShowToast(0, 'Please enter your name for the certificate')
      return
    }
    setStep('ready')
    if (onShowToast) {
      onShowToast(0, `Certificate generated for ${studentName}! 🎓`)
    }
  }

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(verificationUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
    if (onShowToast) {
      onShowToast(0, 'Certificate verification link copied! 📋')
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPNG = () => {
    setDownloading(true)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setDownloading(false)
      return
    }

    const width = 2400
    const height = 1650
    canvas.width = width
    canvas.height = height

    // 1. Background
    const bgGrad = ctx.createLinearGradient(0, 0, width, height)
    bgGrad.addColorStop(0, '#ffffff')
    bgGrad.addColorStop(0.5, '#f8fdf9')
    bgGrad.addColorStop(1, '#ecfdf5')
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, width, height)

    // 2. Outer Border (Deep Emerald)
    ctx.lineWidth = 32
    ctx.strokeStyle = '#064e3b'
    ctx.strokeRect(32, 32, width - 64, height - 64)

    // 3. Inner Border (Gold & Emerald Accents)
    ctx.lineWidth = 6
    ctx.strokeStyle = '#d97706'
    ctx.strokeRect(60, 60, width - 120, height - 120)

    ctx.lineWidth = 2
    ctx.strokeStyle = '#10b981'
    ctx.strokeRect(74, 74, width - 148, height - 148)

    // 4. Corner Ornaments
    const drawCorner = (x, y) => {
      ctx.save()
      ctx.fillStyle = '#064e3b'
      ctx.font = 'bold 36px serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('✦', x, y)
      ctx.restore()
    }
    drawCorner(100, 100)
    drawCorner(width - 100, 100)
    drawCorner(100, height - 100)
    drawCorner(width - 100, height - 100)

    // 5. Watermark Emblem
    ctx.save()
    ctx.fillStyle = 'rgba(34, 197, 94, 0.032)'
    ctx.font = '900 180px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('CodeMastii', width / 2, height / 2 + 60)
    ctx.restore()

    // 6. Top Header Brand
    ctx.fillStyle = '#16a34a'
    ctx.font = 'bold 30px sans-serif'
    ctx.textAlign = 'center'
    ctx.letterSpacing = '6px'
    ctx.fillText('CODEMASTII • ACADEMY OF COMPUTER SCIENCE', width / 2, 190)

    // 7. Certificate Main Title
    ctx.fillStyle = '#0f172a'
    ctx.font = '900 68px serif'
    ctx.fillText('CERTIFICATE OF COMPLETION', width / 2, 290)

    ctx.fillStyle = '#d97706'
    ctx.font = 'bold 24px sans-serif'
    ctx.fillText('COURSE COMPLETION & CURRICULUM ACHIEVEMENT', width / 2, 340)

    // Horizontal divider
    ctx.beginPath()
    ctx.moveTo(width / 2 - 320, 375)
    ctx.lineTo(width / 2 + 320, 375)
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.stroke()

    // 8. Body "This is proudly presented to"
    ctx.fillStyle = '#64748b'
    ctx.font = 'italic 32px Georgia, serif'
    ctx.fillText('This certificate is proudly awarded to', width / 2, 460)

    // 9. Student Name
    ctx.fillStyle = '#064e3b'
    ctx.font = 'bold italic 84px Georgia, serif'
    ctx.fillText(studentName || 'Learner', width / 2, 580)

    // Name Underline
    ctx.beginPath()
    ctx.moveTo(width / 2 - 420, 620)
    ctx.lineTo(width / 2 + 420, 620)
    ctx.strokeStyle = '#10b981'
    ctx.lineWidth = 4
    ctx.stroke()

    // 10. Course Mastery Statement
    ctx.fillStyle = '#475569'
    ctx.font = '28px sans-serif'
    ctx.fillText('for successfully completing all curriculum chapters, live code challenges,', width / 2, 700)
    ctx.fillText('and demonstrating professional proficiency in', width / 2, 745)

    // 11. Course Title
    ctx.fillStyle = '#065f46'
    ctx.font = 'bold 62px sans-serif'
    ctx.fillText(courseTitle, width / 2, 850)

    // 12. Bottom Official Medium Stamp (Background Right-Bottom)
    ctx.save()
    ctx.translate(width - 440, 1140)
    ctx.rotate(-0.16) // ~ -9 deg authentic stamp angle
    
    // Outer dashed stamp ring
    ctx.beginPath()
    ctx.arc(0, 0, 140, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(22, 163, 74, 0.55)'
    ctx.lineWidth = 4
    ctx.setLineDash([8, 6])
    ctx.stroke()

    // Inner solid stamp ring
    ctx.beginPath()
    ctx.arc(0, 0, 126, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(22, 163, 74, 0.7)'
    ctx.lineWidth = 3
    ctx.setLineDash([])
    ctx.stroke()

    // Stamp Center Content
    ctx.fillStyle = 'rgba(22, 163, 74, 0.75)'
    ctx.textAlign = 'center'
    ctx.font = '900 20px sans-serif'
    ctx.fillText('CODEMASTII', 0, -42)
    ctx.font = 'bold 15px sans-serif'
    ctx.fillText('★ OFFICIAL SEAL ★', 0, -18)
    ctx.font = '900 26px sans-serif'
    ctx.fillText('COMPLETED', 0, 16)
    ctx.font = 'bold 13px sans-serif'
    ctx.fillText('ACADEMIC BOARD', 0, 42)
    ctx.font = 'bold 11px monospace'
    ctx.fillText('AUTH • REGISTRY', 0, 62)
    ctx.restore()

    // 13. Left: Director Signature (L.A. Khan)
    ctx.fillStyle = '#064e3b'
    ctx.font = 'italic bold 44px Georgia, serif'
    ctx.textAlign = 'left'
    ctx.fillText('L.A. Khan', 240, 1260)

    ctx.beginPath()
    ctx.moveTo(240, 1285)
    ctx.lineTo(620, 1285)
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = '#16a34a'
    ctx.font = 'bold 22px sans-serif'
    ctx.fillText('MANAGING DIRECTOR', 240, 1320)
    ctx.fillStyle = '#64748b'
    ctx.font = '18px sans-serif'
    ctx.fillText('CodeMastii Academic Board', 240, 1350)

    // Center: Gold Seal Emblem
    ctx.save()
    ctx.beginPath()
    ctx.arc(width / 2, 1260, 110, 0, Math.PI * 2)
    ctx.fillStyle = '#064e3b'
    ctx.fill()
    ctx.lineWidth = 6
    ctx.strokeStyle = '#fbbf24'
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(width / 2, 1260, 96, 0, Math.PI * 2)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#ffffff'
    ctx.stroke()

    ctx.fillStyle = '#fbbf24'
    ctx.font = 'bold 28px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('★ COMPLETED ★', width / 2, 1235)

    ctx.fillStyle = '#ffffff'
    ctx.font = '900 24px sans-serif'
    ctx.fillText('OFFICIAL', width / 2, 1270)
    ctx.font = 'bold 18px sans-serif'
    ctx.fillText('CREDENTIAL', width / 2, 1295)
    ctx.restore()

    // Right: Date & Verification
    ctx.fillStyle = '#0f172a'
    ctx.font = 'bold 30px sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(issueDate, width - 240, 1260)

    ctx.beginPath()
    ctx.moveTo(width - 600, 1285)
    ctx.lineTo(width - 240, 1285)
    ctx.strokeStyle = '#94a3b8'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = '#64748b'
    ctx.font = 'bold 22px sans-serif'
    ctx.fillText('DATE OF ISSUANCE', width - 240, 1320)
    ctx.font = '18px sans-serif'
    ctx.fillText('CodeMasti Academic Registry', width - 240, 1350)

    // 14. Bottom Verification Strip
    ctx.fillStyle = '#94a3b8'
    ctx.font = 'bold 18px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(`CERTIFICATE ID: ${certId}  •  VERIFY: ${verificationUrl}`, width / 2, 1530)

    // 15. Export to Download
    try {
      const link = document.createElement('a')
      const sanitizedName = (courseTitle || 'Course').replace(/[^a-zA-Z0-9]/g, '_')
      link.download = `CodeMastii_Certificate_${sanitizedName}.png`
      link.href = canvas.toDataURL('image/png')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      if (onShowToast) {
        onShowToast(0, 'Certificate downloaded successfully! 🎓🎉')
      }
    } catch {
      window.print()
    }
    setDownloading(false)
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="modal-overlay certificate-modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-label="Course Completion Certificate"
        onClick={onClose}
      >
        <motion.div
          className="modal-box certificate-modal-box"
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
        >
          <button type="button" onClick={onClose} className="modal-close" aria-label="Close certificate dialog">
            <X size={20} aria-hidden="true" />
          </button>

          {/* ── STEP 1: ASK STUDENT NAME FIRST ── */}
          {step === 'prompt' ? (
            <div style={{ maxWidth: 560, margin: '16px auto', textAlign: 'center', padding: '10px 8px' }}>
              <div style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                background: '#f0fdf4',
                border: '2px solid #22c55e',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#16a34a',
                marginBottom: 16,
                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.22)'
              }}>
                <Award size={36} />
              </div>

              <div className="cert-control-badge" style={{ marginBottom: 12 }}>
                <Sparkles size={15} /> Official Verified Certification
              </div>

              <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 26px)', fontWeight: 900, color: 'var(--text-primary, #0f172a)', margin: '0 0 8px' }}>
                Enter Student Name for Certificate
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted, #64748b)', margin: '0 auto 24px', maxWidth: 440 }}>
                Certificate par print hone ke liye apna exact name (Holder Name) enter karein:
              </p>

              <form onSubmit={handleStartGenerate} style={{ display: 'flex', flexDirection: 'column', gap: 18, textAlign: 'left' }}>
                <div className="form-field">
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <UserCheck size={16} style={{ color: 'var(--green)' }} /> Student Name (Holder name)
                  </label>
                  <input
                    ref={inputRef}
                    type="text"
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    placeholder="Enter name (e.g. Liyaqat Khan)"
                    className="cert-name-input"
                    style={{ fontSize: 16, padding: '14px 16px' }}
                    required
                  />
                </div>

                <div className="form-field">
                  <label style={{ fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                    <BookOpen size={16} style={{ color: 'var(--green)' }} /> Completed Course
                  </label>
                  <div className="cert-course-readonly-badge">
                    <span className="course-badge-icon">{activeCourse?.icon || '🎓'}</span>
                    <div className="course-badge-info">
                      <strong>{courseTitle}</strong>
                      <small>100% Curriculum Completed & Verified</small>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="primary-btn cert-download-btn"
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 15, marginTop: 8 }}
                >
                  Generate Certificate <ArrowRight size={18} />
                </button>
              </form>
            </div>
          ) : (
            /* ── STEP 2: CERTIFICATE GENERATED & READY ── */
            <>
              <div className="cert-control-panel no-print">
                <div className="cert-control-header">
                  <div className="cert-control-badge">
                    <Sparkles size={16} /> CodeMastii Official Certification
                  </div>
                  <h2>🎓 Certificate Ready for Download</h2>
                  <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span>Holder Name: <strong style={{ color: 'var(--green)' }}>{studentName}</strong></span>
                    <button
                      onClick={() => setStep('prompt')}
                      className="ghost-btn compact"
                      style={{ fontSize: 11, padding: '2px 8px', gap: 4 }}
                    >
                      <Edit3 size={12} /> Edit Name
                    </button>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="cert-action-toolbar">
                  <button
                    onClick={handleDownloadPNG}
                    className="primary-btn cert-download-btn"
                    disabled={downloading}
                  >
                    <Download size={18} /> {downloading ? 'Generating...' : 'Download Certificate (PNG Image)'}
                  </button>

                  <button
                    onClick={handlePrint}
                    className="ghost-btn cert-print-btn"
                  >
                    <Printer size={18} /> Print / Save as PDF
                  </button>

                  <button
                    onClick={() => setShowVerifyModal(true)}
                    className="ghost-btn cert-share-btn"
                    style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
                  >
                    <ShieldCheck size={18} /> Verify Credential
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className="ghost-btn cert-share-btn"
                  >
                    {copied ? <Check size={18} className="text-green" /> : <Share2 size={18} />}
                    {copied ? 'Link Copied!' : 'Copy Verification Link'}
                  </button>
                </div>
              </div>

              {/* ── LUXURY PRINTABLE / PREVIEW CERTIFICATE PAPER ── */}
              <div className="cert-preview-scroll-wrapper">
                <div id="printable-certificate" className="luxury-certificate-canvas">
                  {/* Ornamental Borders */}
                  <div className="luxury-cert-outer-border" />
                  <div className="luxury-cert-inner-border" />
                  <div className="luxury-cert-accent-border" />

                  {/* Corner Ornaments */}
                  <span className="luxury-corner top-left">✦</span>
                  <span className="luxury-corner top-right">✦</span>
                  <span className="luxury-corner bottom-left">✦</span>
                  <span className="luxury-corner bottom-right">✦</span>

                  {/* Certificate Content */}
                  <div className="luxury-cert-content">
                    {/* Header Emblem */}
                    <div className="luxury-cert-brand-strip">
                      <span className="luxury-brand-icon">
                        <Award size={34} />
                      </span>
                      <span className="luxury-brand-title">CODEMASTII • ACADEMY OF COMPUTER SCIENCE</span>
                    </div>

                    <h1 className="luxury-cert-heading">CERTIFICATE OF COMPLETION</h1>
                    <div className="luxury-cert-subheading">VERIFIED PROFESSIONAL MASTERY & ACHIEVEMENT</div>
                    <div className="luxury-cert-divider" />

                    <p className="luxury-cert-lead">This certificate is proudly awarded to</p>

                    <div className="luxury-cert-recipient">
                      {studentName || 'Learner'}
                    </div>
                    <div className="luxury-cert-recipient-underline" />

                    <p className="luxury-cert-description">
                      for successfully completing all curriculum chapters, live code challenges, and demonstrating professional proficiency in
                    </p>

                    <div className="luxury-cert-course-title">
                      {courseTitle}
                    </div>

                    {/* Medium Official Seal Stamp on Right Bottom */}
                    <div className="luxury-cert-official-stamp">
                      <div className="stamp-outer-ring">
                        <div className="stamp-inner-ring">
                          <span className="stamp-star-top">★ CODEMASTII ★</span>
                          <strong className="stamp-title">VERIFIED</strong>
                          <span className="stamp-sub">OFFICIAL SEAL</span>
                          <small className="stamp-id">AUTH • REGISTRY</small>
                        </div>
                      </div>
                    </div>

                    {/* Footer Credentials & Signatures */}
                    <div className="luxury-cert-footer">
                      {/* Left Signature: L.A. Khan Director */}
                      <div className="luxury-signature-block left">
                        <div className="luxury-signature-line" style={{ color: '#064e3b', fontWeight: 900, letterSpacing: '0.04em', fontSize: 20 }}>
                          L.A. Khan
                        </div>
                        <div className="luxury-signature-border" />
                        <strong style={{ color: '#16a34a' }}>MANAGING DIRECTOR</strong>
                        <span>CodeMastii Academic & Certification Board</span>
                      </div>

                      {/* Center Seal */}
                      <div className="luxury-seal-container">
                        <div className="luxury-gold-seal">
                          <div className="luxury-seal-inner">
                            <span className="luxury-seal-stars">★ ★ ★</span>
                            <strong>VERIFIED</strong>
                            <small>CREDENTIAL</small>
                          </div>
                        </div>
                      </div>

                      {/* Right Signature & Date */}
                      <div className="luxury-signature-block right">
                        <div className="luxury-signature-line">{issueDate}</div>
                        <div className="luxury-signature-border" />
                        <strong>DATE OF ISSUANCE</strong>
                        <span>Global Verification Registry</span>
                      </div>
                    </div>

                    {/* Bottom Security Code & Verification Link */}
                    <div
                      className="luxury-cert-security-bar"
                      onClick={() => setShowVerifyModal(true)}
                      style={{ cursor: 'pointer' }}
                      title="Click to view live verified status"
                    >
                      <span>CERTIFICATE ID: <strong>{certId}</strong></span>
                      <span className="security-dot">•</span>
                      <span>VERIFICATION: <strong style={{ textDecoration: 'underline', color: '#16a34a' }}>{verificationUrl}</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>

      {/* ── DEDICATED VERIFICATION MODAL / POPUP ── */}
      <AnimatePresence>
        {showVerifyModal && (
          <div className="modal-overlay" style={{ zIndex: 1200, padding: 16 }} onClick={() => setShowVerifyModal(false)}>
            <motion.div
              className="modal-box"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ maxWidth: 580, width: '100%', padding: '32px 28px', textAlign: 'center', position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowVerifyModal(false)} className="modal-close">
                <X size={20} />
              </button>

              <div style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                background: '#f0fdf4',
                border: '2px solid #22c55e',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#16a34a',
                marginBottom: 16,
                boxShadow: '0 8px 24px rgba(34, 197, 94, 0.25)'
              }}>
                <ShieldCheck size={38} />
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: '#dcfce7',
                color: '#15803d',
                fontWeight: 800,
                fontSize: 12,
                padding: '4px 14px',
                borderRadius: 999,
                marginBottom: 12
              }}>
                <CheckCircle2 size={15} /> CodeMasti Course Completion Record
              </div>

              <h2 style={{ fontSize: 24, fontWeight: 900, color: 'var(--text-primary, #0f172a)', margin: '0 0 8px' }}>
                CodeMasti Certificate Record
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted, #64748b)', margin: '0 auto 24px', maxWidth: 460 }}>
                Ye record aapke completed course modules aur practical assessments ko demonstrate karta hai. Full online verification system upcoming release mein available hoga.
              </p>

              <div style={{
                background: 'var(--bg-page, #f8fafc)',
                border: '1px solid var(--border, #e2e8f0)',
                borderRadius: 16,
                padding: '18px 20px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                marginBottom: 24
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: 8 }}>
                  <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>Certificate ID</span>
                  <strong style={{ fontSize: 13, fontFamily: 'monospace', color: '#0f172a' }}>{certId}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: 8 }}>
                  <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>Holder Name</span>
                  <strong style={{ fontSize: 14, color: '#16a34a' }}>{studentName || 'Learner'}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: 8 }}>
                  <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>Course Completed</span>
                  <strong style={{ fontSize: 13.5, color: '#0f172a' }}>{courseTitle}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: 8 }}>
                  <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>Issued By</span>
                  <strong style={{ fontSize: 13, color: '#0f172a' }}>CodeMastii Academy</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: 8 }}>
                  <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>Managing Director</span>
                  <strong style={{ fontSize: 13, color: '#064e3b' }}>L.A. KHAN</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12.5, color: '#64748b', fontWeight: 600 }}>Issue Date</span>
                  <strong style={{ fontSize: 13, color: '#0f172a' }}>{issueDate}</strong>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <button onClick={handleCopyLink} className="ghost-btn" style={{ gap: 6, fontSize: 13 }}>
                  {copied ? <Check size={16} /> : <Share2 size={16} />} {copied ? 'Copied' : 'Share Verification'}
                </button>
                <button onClick={() => setShowVerifyModal(false)} className="primary-btn" style={{ background: '#16a34a', fontSize: 13 }}>
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
