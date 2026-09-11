/**
 * CodeMasti Security & Input Validation Utilities
 * Pure client-side safety checks for URLs, text inputs, and file uploads.
 */

// Allowed URL protocols for user-supplied external links
const SAFE_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'tel:'])

/**
 * Validates whether a given URL string is safe to open or render.
 * Rejects javascript:, data:, vbscript:, and malformed URLs.
 */
export const isSafeUrl = (urlString) => {
  if (!urlString || typeof urlString !== 'string') return false
  const trimmed = urlString.trim()
  if (!trimmed) return false

  // Disallow javascript:, data:, vbscript: schemes even before parsing
  const lower = trimmed.toLowerCase()
  if (
    lower.startsWith('javascript:') ||
    lower.startsWith('data:') ||
    lower.startsWith('vbscript:') ||
    lower.startsWith('file:')
  ) {
    return false
  }

  // Allow relative URLs starting with / or #
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
    return !trimmed.startsWith('//') // Prevent protocol-relative URL bypass
  }

  try {
    const parsed = new URL(trimmed)
    return SAFE_PROTOCOLS.has(parsed.protocol)
  } catch {
    // If not a full URL with scheme, but looks like a domain (e.g. github.com/user/repo)
    if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/.*)?$/.test(trimmed)) {
      return true
    }
    return false
  }
}

/**
 * Normalizes user-supplied web link to ensure safe https protocol.
 */
export const sanitizeWebUrl = (urlString) => {
  if (!isSafeUrl(urlString)) return ''
  const trimmed = urlString.trim()
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed
  }
  if (trimmed.startsWith('/') || trimmed.startsWith('#')) {
    return trimmed
  }
  return `https://${trimmed}`
}

/**
 * Sanitizes plain text input to strip control characters and enforce max length.
 */
export const sanitizeTextInput = (text = '', maxLength = 500) => {
  if (typeof text !== 'string') return ''
  return text
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g, '')
    .trim()
    .slice(0, maxLength)
}

/**
 * Validates client-side file upload (size limit & MIME type).
 */
export const validateUploadedFile = (file, { allowedTypes = ['application/pdf'], maxSizeBytes = 5 * 1024 * 1024 } = {}) => {
  if (!file) {
    return { valid: false, error: 'No file selected' }
  }

  if (file.size > maxSizeBytes) {
    const maxMb = Math.round(maxSizeBytes / (1024 * 1024))
    return { valid: false, error: `File size exceeds maximum limit of ${maxMb}MB.` }
  }

  const isTypeAllowed = allowedTypes.some(type => {
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type.toLowerCase())
    }
    return file.type === type || file.name.toLowerCase().endsWith(`.${type.split('/')[1] || ''}`)
  })

  if (!isTypeAllowed) {
    return { valid: false, error: 'Invalid file type. Only PDF documents are accepted.' }
  }

  return { valid: true, error: null }
}
