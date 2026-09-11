const analyticsState = {
  initialized: false,
  plausibleLoaded: false,
  clarityLoaded: false,
  gaLoaded: false
}

const loadScript = (src, attrs = {}) => {
  if (typeof document === 'undefined') return null
  const existing = document.querySelector(`script[src="${src}"]`)
  if (existing) return existing
  const script = document.createElement('script')
  script.async = true
  script.src = src
  Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value))
  document.head.appendChild(script)
  return script
}

export const initAnalytics = () => {
  if (analyticsState.initialized || typeof window === 'undefined') return
  analyticsState.initialized = true

  const gaId = import.meta.env.VITE_GA_ID
  const clarityId = import.meta.env.VITE_CLARITY_ID
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN

  if (gaId) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`)
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() { window.dataLayer.push(arguments) }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { send_page_view: false })
    analyticsState.gaLoaded = true
  }

  if (clarityId) {
    window.clarity = window.clarity || function clarity() {
      ;(window.clarity.q = window.clarity.q || []).push(arguments)
    }
    loadScript(`https://www.clarity.ms/tag/${clarityId}`)
    analyticsState.clarityLoaded = true
  }

  if (plausibleDomain) {
    loadScript('https://plausible.io/js/script.js', {
      'data-domain': plausibleDomain
    })
    analyticsState.plausibleLoaded = true
  }
}

export const trackPageView = (path = window.location.pathname) => {
  if (typeof window === 'undefined') return
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title
    })
  }
  if (window.plausible) {
    window.plausible('pageview', { u: window.location.href })
  }
}

export const trackEvent = (name, params = {}) => {
  if (typeof window === 'undefined') return
  if (window.gtag) window.gtag('event', name, params)
  if (window.plausible) window.plausible(name, { props: params })
  if (window.clarity) window.clarity('event', name)
}
