import React, { useState } from 'react'
import { Copy, Check, Code2, Terminal } from 'lucide-react'

export default function DsaMultiLangCode({ languages = {}, defaultCode = '' }) {
  const availableLangs = Object.keys(languages).length > 0
    ? Object.keys(languages)
    : ['javascript']

  const [selectedLang, setSelectedLang] = useState(availableLangs[0] || 'javascript')
  const [copied, setCopied] = useState(false)

  const activeCode = languages[selectedLang] || defaultCode || '// No code snippet provided'

  const langDisplayNames = {
    javascript: 'JavaScript (ES6+)',
    typescript: 'TypeScript',
    python: 'Python 3',
    java: 'Java 17',
    cpp: 'C++ 20 (STL)',
    c: 'C (Standard)'
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="dsa-multilang-code-card">
      <div className="dsa-code-bar">
        <div className="dsa-code-lang-selector">
          <Code2 size={16} color="#3b82f6" />
          {availableLangs.map(lang => (
            <button
              key={lang}
              className={`dsa-lang-btn ${selectedLang === lang ? 'active' : ''}`}
              onClick={() => setSelectedLang(lang)}
            >
              {langDisplayNames[lang] || lang.toUpperCase()}
            </button>
          ))}
        </div>
        <button className="dsa-code-copy-btn" onClick={handleCopy} title="Copy code">
          {copied ? <><Check size={14} color="#10b981" /> Copied!</> : <><Copy size={14} /> Copy</>}
        </button>
      </div>

      <pre className="dsa-code-body">
        <code>{activeCode}</code>
      </pre>
    </div>
  )
}
