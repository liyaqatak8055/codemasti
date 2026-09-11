import React from 'react'
import { AlertTriangle, RotateCcw, Home, Trash2 } from 'lucide-react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('CodeMasti Application Error Boundary caught:', error, errorInfo)

    // Detect chunk loading errors and auto-recover once per session
    const msg = error?.message || ''
    const isChunkLoadError =
      error?.name === 'ChunkLoadError' ||
      /Loading chunk|Failed to fetch dynamically imported module/i.test(msg)

    if (isChunkLoadError && typeof window !== 'undefined') {
      const guardKey = 'cm_boundary_chunk_reload'
      if (!sessionStorage.getItem(guardKey)) {
        sessionStorage.setItem(guardKey, 'true')
        window.location.reload()
      }
    }
  }

  handleReload = () => {
    if (this.props.onReset) {
      this.props.onReset()
    }
    window.location.reload()
  }

  handleGoHome = () => {
    this.setState({ hasError: false, error: null })
    if (this.props.onReset) {
      this.props.onReset()
    }
    window.location.href = '/'
  }

  handleClearCacheAndReset = () => {
    if (typeof window !== 'undefined' && window.confirm('Reset application state and reload? (Your progress is preserved in emergency backup)')) {
      try {
        const backup = localStorage.getItem('codemasti_app_state')
        sessionStorage.setItem('cm_emergency_backup', backup || '')
      } catch {}
      window.location.reload()
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({ error: this.state.error, reset: this.handleReload })
          : this.props.fallback
      }

      const isInline = Boolean(this.props.inline)

      return (
        <div style={{
          minHeight: isInline ? 'auto' : '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isInline ? '24px 16px' : '40px 20px',
          background: isInline ? 'transparent' : 'var(--bg-page, #0f172a)',
          color: 'var(--text-primary, #f8fafc)',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}>
          <div style={{
            maxWidth: 520,
            width: '100%',
            background: 'var(--bg-card, #1e293b)',
            border: '1px solid var(--border, rgba(255,255,255,0.1))',
            borderRadius: 20,
            padding: isInline ? '24px' : '36px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16
            }}>
              <AlertTriangle size={32} />
            </div>

            <h2 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 8px' }}>
              Oops! Technical Error Encountered
            </h2>
            <p style={{ fontSize: 13, color: 'var(--text-muted, #94a3b8)', margin: '0 0 20px', lineHeight: 1.6 }}>
              A technical error occurred while rendering this section. Your completed courses and XP are safely saved in local storage.
            </p>

            {this.state.error && (
              <pre style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '10px 14px',
                borderRadius: 8,
                fontSize: 12,
                color: '#f87171',
                textAlign: 'left',
                overflowX: 'auto',
                marginBottom: 20,
                fontFamily: 'monospace'
              }}>
                {this.state.error.message || String(this.state.error)}
              </pre>
            )}

            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReload}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 18px',
                  borderRadius: 10,
                  border: 'none',
                  background: 'var(--green, #22c55e)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={15} /> Reload
              </button>
              <button
                onClick={this.handleGoHome}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '9px 18px',
                  borderRadius: 10,
                  border: '1px solid var(--border, rgba(255,255,255,0.2))',
                  background: 'transparent',
                  color: 'var(--text-primary, #f8fafc)',
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: 'pointer'
                }}
              >
                <Home size={15} /> Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
