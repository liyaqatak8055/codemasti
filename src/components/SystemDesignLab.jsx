import { useMemo, useState } from 'react'
import { AlertTriangle, BarChart3, RotateCcw, ServerCrash, ShieldCheck } from 'lucide-react'

const scaleStages = [
  ['1K', ['Single app server', 'Primary database'], 'Keep it simple: measure before adding distributed complexity.'],
  ['100K', ['CDN', 'Load balancer', 'Stateless app replicas', 'Primary + read replica'], 'Move static assets to the edge and scale reads separately.'],
  ['10M', ['Redis cache', 'Message queue', 'Search index', 'Observability'], 'Protect the database and make slow work asynchronous.'],
  ['1B', ['Regional stacks', 'Shards', 'Multi-region routing', 'Disaster recovery'], 'Design for partial failure, data locality, and explicit consistency choices.']
]

const failures = {
  database: { breaks: 'Writes and cache misses can fail.', response: 'Fail over to a healthy replica; shed non-essential writes; protect against stale reads.', recovery: 'Promote safely, repair replication, and verify data before reopening full traffic.' },
  cache: { breaks: 'Latency rises and the database can be flooded by misses.', response: 'Use TTL jitter, request coalescing, rate limits, and a bounded fallback.', recovery: 'Warm hot keys gradually—never stampede the database.' },
  server: { breaks: 'In-flight requests on one node may be lost.', response: 'Health checks remove the node; the load balancer routes to replicas.', recovery: 'Replace the instance and investigate the trace/logs.' },
  region: { breaks: 'A whole availability zone or region is unavailable.', response: 'Route users to a healthy region and use the documented RPO/RTO plan.', recovery: 'Rebuild capacity, reconcile data, then perform a controlled failback.' }
}

export default function SystemDesignLab() {
  const [stage, setStage] = useState(1)
  const [selected, setSelected] = useState(['Client', 'API Gateway', 'Service', 'Database'])
  const [failure, setFailure] = useState('database')
  const [tier, setTier] = useState('Balanced')
  const activeScale = scaleStages[stage]
  const incident = failures[failure]
  const cost = useMemo(() => ({
    Cheap: ['Low', 'Moderate', 'Single region + managed services'],
    Balanced: ['Medium', 'High', 'Cache + replicas + queue'],
    Enterprise: ['High', 'Very high', 'Multi-region + active failover']
  })[tier], [tier])
  const options = ['Client', 'CDN', 'API Gateway', 'Load Balancer', 'Service', 'Cache', 'Queue', 'Database', 'Search', 'Observability']
  const toggle = item => setSelected(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item])

  return <section className="system-design-lab" style={{ border: '1px solid #dbeafe', borderRadius: 18, padding: 20, background: 'linear-gradient(135deg,#f8fbff,#f5f3ff)', marginTop: 18 }}>
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}><BarChart3 color="#6366f1" /><div><strong>System Design Lab</strong><div style={{ color: '#64748b', fontSize: 13 }}>Build, scale, break, and explain an architecture.</div></div></div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16, marginTop: 16 }}>
      <div><strong>1. Architecture builder</strong><div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 9 }}>{options.map(item => <button type="button" key={item} onClick={() => toggle(item)} className="ghost-btn compact" style={{ borderColor: selected.includes(item) ? '#6366f1' : undefined, background: selected.includes(item) ? '#eef2ff' : undefined }}>{selected.includes(item) ? '✓ ' : '+ '}{item}</button>)}</div><div style={{ marginTop: 12, fontSize: 13, color: '#334155', lineHeight: 1.8 }}>{selected.map((item, index) => <span key={item}>{item}{index < selected.length - 1 ? '  →  ' : ''}</span>)}</div></div>
      <div><strong>2. Scale simulator</strong><div style={{ display: 'flex', gap: 6, marginTop: 9, flexWrap: 'wrap' }}>{scaleStages.map(([label], index) => <button type="button" key={label} onClick={() => setStage(index)} className={stage === index ? 'primary-btn compact' : 'ghost-btn compact'}>{label}</button>)}</div><p style={{ margin: '12px 0 6px', color: '#4338ca', fontWeight: 700 }}>{activeScale[0]} users</p><ul style={{ paddingLeft: 18, margin: 0 }}>{activeScale[1].map(item => <li key={item}>{item}</li>)}</ul><p style={{ fontSize: 13, color: '#475569' }}>{activeScale[2]}</p></div>
      <div><strong>3. Failure simulator</strong><div style={{ display: 'flex', gap: 6, marginTop: 9, flexWrap: 'wrap' }}>{Object.keys(failures).map(key => <button type="button" key={key} onClick={() => setFailure(key)} className={failure === key ? 'primary-btn compact' : 'ghost-btn compact'}>{key}</button>)}</div><div style={{ fontSize: 13, marginTop: 12, lineHeight: 1.55 }}><p><AlertTriangle size={14} style={{ verticalAlign: 'middle' }} /> <strong>Impact:</strong> {incident.breaks}</p><p><ServerCrash size={14} style={{ verticalAlign: 'middle' }} /> <strong>Response:</strong> {incident.response}</p><p><ShieldCheck size={14} style={{ verticalAlign: 'middle' }} /> <strong>Recovery:</strong> {incident.recovery}</p></div></div>
    </div>
    <div style={{ borderTop: '1px solid #ddd6fe', marginTop: 16, paddingTop: 14 }}><strong>4. Cost vs performance</strong><div style={{ display: 'flex', gap: 6, margin: '8px 0', flexWrap: 'wrap' }}>{['Cheap', 'Balanced', 'Enterprise'].map(name => <button type="button" key={name} onClick={() => setTier(name)} className={tier === name ? 'primary-btn compact' : 'ghost-btn compact'}>{name}</button>)}<button type="button" className="ghost-btn compact" onClick={() => { setStage(1); setFailure('database'); setTier('Balanced'); setSelected(['Client', 'API Gateway', 'Service', 'Database']) }}><RotateCcw size={13} /> Reset</button></div><span style={{ fontSize: 13, color: '#475569' }}><strong>Cost:</strong> {cost[0]} · <strong>Availability potential:</strong> {cost[1]} · {cost[2]}</span></div>
  </section>
}
