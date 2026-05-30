import { useState } from 'react'

const OBJECTS = [
  {
    name:  'Black Hole', icon: '⬤', color: '#4f8ef7',
    fact:  'A black hole\'s gravity is so intense that not even light can escape. The boundary of no return is called the event horizon. Time itself slows down near it — to an outside observer, someone falling in appears frozen forever.',
    size:  'Up to 40 billion solar masses', temp: '−273.15°C (Hawking radiation)', dist: '26,000 ly (Sgr A*)',
  },
  {
    name:  'Neutron Star', icon: '✦', color: '#f0c060',
    fact:  'The collapsed core of a massive supernova. A teaspoon of neutron star material weighs about a billion tonnes. Some spin 716 times per second, emitting lighthouse-like beams of radiation — we call these pulsars.',
    size:  '20 km diameter, 2× solar mass', temp: '600,000°C surface', dist: '400 ly (closest known)',
  },
  {
    name:  'Nebula', icon: '❋', color: '#a855f7',
    fact:  'Vast clouds of gas and dust — the nurseries where stars are born. The Pillars of Creation inside the Eagle Nebula stretch 5 light-years tall. New stars are condensing inside them right now.',
    size:  'Hundreds of light years across', temp: '−260°C to millions °C', dist: '7,000 ly (Eagle Nebula)',
  },
  {
    name:  'Quasar', icon: '◉', color: '#f97316',
    fact:  'The most luminous objects in the universe. A quasar outshines an entire galaxy of 100 billion stars — powered by supermassive black holes consuming matter at extraordinary rates.',
    size:  'Core: solar system sized', temp: 'Jets reach 10 trillion °C', dist: '13.03 billion ly (farthest)',
  },
  {
    name:  'Dark Matter', icon: '◌', color: '#7986cb',
    fact:  'We cannot see it, touch it, or detect it directly. Yet it makes up 27% of the universe. We know it exists because galaxies rotate too fast — without invisible extra mass, they should fly apart.',
    size:  'Fills the entire universe', temp: 'Unknown', dist: 'Everywhere, including here',
  },
  {
    name:  'Magnetar', icon: '⊕', color: '#ec4899',
    fact:  'A type of neutron star with a magnetic field a trillion times stronger than Earth\'s. One "starquake" released more energy than our Sun will emit in 100,000 years.',
    size:  '20–30 km diameter', temp: '18 million °C', dist: '9,000 ly (closest)',
  },
]

export default function Universe() {
  const [active, setActive] = useState(0)
  const obj = OBJECTS[active]

  return (
    <section id="universe" style={{
      padding:    '7rem 2rem',
      background: 'linear-gradient(to bottom, var(--black), var(--deep), var(--black))',
      position:   'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top:'50%', left:'50%',
        transform: 'translate(-50%,-50%)',
        width:'500px', height:'500px', borderRadius:'50%',
        background: `radial-gradient(circle, ${obj.color}08 0%, transparent 70%)`,
        transition: 'background 0.6s ease', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div className="reveal" style={{
          fontSize:'0.7rem', letterSpacing:'0.4em',
          textTransform:'uppercase', color:'var(--accent)', marginBottom:'1rem',
        }}>✦ &nbsp; Objects of the cosmos</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize:   'clamp(2.2rem, 6vw, 5rem)',
          lineHeight: 1, letterSpacing: '0.04em',
          color: 'var(--text)', marginBottom: '2.5rem',
        }}>
          EXTREME<br />
          <span style={{ color: obj.color, transition: 'color 0.4s' }}>COSMIC OBJECTS</span>
        </h2>

        {/* Tabs — scrollable on mobile */}
        <div className="reveal delay-2" style={{
          display:        'flex',
          overflowX:      'auto',
          borderBottom:   '1px solid rgba(79,142,247,0.15)',
          marginBottom:   '2.5rem',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          gap: '0',
        }}>
          {OBJECTS.map((o, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding:       '0.75rem 1.2rem',
              background:    'none', border: 'none',
              borderBottom:  active === i ? `2px solid ${o.color}` : '2px solid transparent',
              color:         active === i ? o.color : 'var(--muted)',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.78rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', cursor: 'pointer',
              transition:    'color 0.3s, border-color 0.3s',
              marginBottom:  '-1px', whiteSpace: 'nowrap',
              flexShrink:    0,
            }}>{o.icon} {o.name}</button>
          ))}
        </div>

        {/* Content — responsive grid */}
        <div className="universe-content">
          <div>
            <div style={{
              fontSize: 'clamp(3rem, 10vw, 5rem)',
              color: obj.color, marginBottom: '1.5rem',
              transition: 'color 0.4s', lineHeight: 1,
            }}>{obj.icon}</div>
            <p style={{ color:'var(--text)', lineHeight:1.9, fontWeight:300, fontSize:'0.95rem' }}>
              {obj.fact}
            </p>
          </div>

          <div style={{
            border: `1px solid ${obj.color}30`,
            padding: '1.8rem',
            transition: 'border-color 0.4s',
          }}>
            <div style={{
              fontSize:'0.62rem', letterSpacing:'0.3em',
              textTransform:'uppercase', color:obj.color,
              marginBottom:'1.5rem', transition:'color 0.4s',
            }}>Object data</div>

            {[
              ['Size / Scale', obj.size],
              ['Temperature',  obj.temp],
              ['Distance',     obj.dist],
            ].map(([k, v]) => (
              <div key={k} style={{
                display:'flex', justifyContent:'space-between',
                padding:'0.9rem 0',
                borderBottom:'1px solid rgba(79,142,247,0.08)',
                gap:'1rem', flexWrap:'wrap',
              }}>
                <span style={{ fontSize:'0.75rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--muted)' }}>{k}</span>
                <span style={{ fontSize:'0.88rem', color:'var(--text)', textAlign:'right', fontWeight:300 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .universe-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .universe-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}