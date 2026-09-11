import { useMemo, useState } from 'react'
import { RotateCcw } from 'lucide-react'

export default function HrInterviewStudio() {
  const [profile, setProfile] = useState({ name: '', background: '', skills: '', project: '', experience: '', goal: '' })
  const [mode, setMode] = useState('introduction')
  const set = key => event => setProfile(current => ({ ...current, [key]: event.target.value }))
  const draft = useMemo(() => {
    const pieces = []
    if (profile.name || profile.background) pieces.push(`Hello, I’m ${profile.name || '[your name]'}. ${profile.background ? `I come from ${profile.background}.` : 'I’d briefly introduce my current background.'}`)
    if (profile.skills) pieces.push(`My current strengths include ${profile.skills}.`)
    if (profile.project || profile.experience) pieces.push(`A relevant example is ${profile.project || '[a project]'}${profile.experience ? `, where ${profile.experience}` : ''}.`)
    pieces.push(profile.goal ? `I’m now looking for an opportunity to ${profile.goal}.` : 'I’m now looking for a role where I can contribute, learn, and grow.')
    return pieces.join(' ')
  }, [profile])
  const resumeQuestions = [
    profile.project && `What problem did ${profile.project} solve, and what was your own role?`,
    profile.skills && `Which example best proves your experience with ${profile.skills}?`,
    profile.experience && `What did you learn from this experience: ${profile.experience}?`,
    'Which resume claim would you be most comfortable explaining with a concrete example?',
    'What would you improve if you repeated one project today?'
  ].filter(Boolean)
  return <section style={{ marginTop: 18, padding: 20, border: '1px solid #bbf7d0', borderRadius: 18, background: '#f7fff9' }}>
    <strong>HR Answer Studio</strong><p style={{ marginTop: 4, color: '#64748b', fontSize: 13 }}>Create a personal draft and practice questions. It never invents achievements—replace every placeholder with your real details.</p>
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '12px 0' }}>{[['introduction', 'Build introduction'], ['resume', 'Resume questions']].map(([id, label]) => <button type="button" key={id} onClick={() => setMode(id)} className={mode === id ? 'primary-btn compact' : 'ghost-btn compact'}>{label}</button>)}</div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))', gap: 10 }}>{[['name', 'Name'], ['background', 'Education / current role'], ['skills', 'Skills'], ['project', 'Project'], ['experience', 'Your contribution or experience'], ['goal', 'Career goal']].map(([key, label]) => <label key={key} style={{ fontSize: 13, color: '#334155' }}>{label}<input value={profile[key]} onChange={set(key)} placeholder={`Your ${label.toLowerCase()}`} style={{ width: '100%', marginTop: 5, padding: 9, border: '1px solid #cbd5e1', borderRadius: 8 }} /></label>)}</div>
    {mode === 'introduction' ? <div style={{ marginTop: 14, padding: 13, background: '#fff', borderRadius: 10, lineHeight: 1.65 }}><strong>Personalize this draft</strong><p>{draft}</p></div> : <div style={{ marginTop: 14, padding: 13, background: '#fff', borderRadius: 10 }}><strong>Resume-based practice questions</strong><ol>{resumeQuestions.map(question => <li key={question} style={{ marginTop: 8 }}>{question}</li>)}</ol></div>}
    <button type="button" className="ghost-btn compact" style={{ marginTop: 12 }} onClick={() => setProfile({ name: '', background: '', skills: '', project: '', experience: '', goal: '' })}><RotateCcw size={13} /> Reset</button>
  </section>
}
