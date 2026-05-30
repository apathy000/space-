import { useState } from 'react'

const OBJECTS = [
  {
    name:  'Black Hole',
    icon:  '⬤',
    color: '#4f8ef7',
    fact:  'A black hole\'s gravity is so intense that not even light can escape. The boundary of no return is called the event horizon. Time itself slows down near it — to an outside observer, someone falling in appears frozen forever.',
    size:  'Up to 40 billion solar masses',
    temp:  '−273.15°C (Hawking radiation)',
    dist:  '26,000 ly (Sgr A*)',
  },
  {
    name:  'Neutron Star',
    icon:  '✦',
    color: '#f0c060',
    fact:  'The collapsed core of a massive supernova. A teaspoon of neutron star material weighs about a billion tonnes. Some spin 716 times per second, emitting lighthouse-like beams of radiation — we call these pulsars.',
    size:  '20 km diameter, 2× solar mass',
    temp:  '600,000°C surface',
    dist:  '400 ly (closest known)',
  },
  {
    name:  'Nebula',
    icon:  '❋',
    color: '#a855f7',
    fact:  'Vast clouds of gas and dust — the nurseries where stars are born. The Pillars of Creation inside the Eagle Nebula stretch 5 light-years tall. New stars are condensing inside them right now, though "right now" means 7,000 years ago from Earth.',
    size:  'Hundreds of light years across',
    temp:  '−260°C to millions °C',
    dist:  '7,000 ly (Eagle Nebula)',
  },
  {
    name:  'Quasar',
    icon:  '◉',
    color: '#f97316',
    fact:  'The most luminous objects in the universe. A quasar outshines an entire galaxy of 100 billion stars — powered by supermassive black holes consuming matter at extraordinary rates. The most distant quasar is over 13 billion light-years away.',
    size:  'Core: solar system sized',
    temp:  'Jets reach 10 trillion °C',
    dist:  '13.03 billion ly (farthest)',
  },
  {
    name:  'Dark Matter',
    icon:  '◌',
    color: '#7986cb',
    fact:  'We cannot see it, touch it, or detect it directly. Yet it makes up 27% of the universe. We know it exists because galaxies rotate too fast — without invisible extra mass, they should fly apart. Dark matter is the scaffolding the cosmos hangs on.',
    size:  'Fills the entire universe',
    temp:  'Unknown',
    dist:  'Everywhere, including here',
  },
  {
    name:  'Magnetar',
    icon:  '⊕',
    color: '#ec4899',
    fact:  'A type of neutron star with a magnetic field a trillion times stronger than Earth\'s. If a magnetar came within 1,000 km of you, it would rip the iron from your blood. The strongest known magnetic field in the universe. One "starquake" released more energy than our Sun will emit in 100,000 years.',
    size:  '20–30 km diameter',
    temp:  '18 million °C',
    dist:  '9,000 ly (closest)',
  },
]

export default function Universe() {
  const [active, setActive] = useState(0)
  const obj = OBJECTS[active]

  return (
    <section id="universe" style={{
      padding:    '8rem 2.5rem',
      background: 'linear-gradient(to bottom, var(--black), var(--deep), var(--black))',
      position:   'relative',
      overflow:   'hidden',
    }}>
      {/* background decoration */}
      <div style={{
        position:  'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${obj.color}08 0%, transparent 70%)`,
        transition: 'background 0.6s ease',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* label */}
        <div className="reveal" style={{
          fontSize: '0.7rem', letterSpacing: '0.4em',
          textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem',
        }}>✦ &nbsp; Objects of the cosmos</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize:   'clamp(2.8rem, 6vw, 5rem)',
          lineHeight: 1, letterSpacing: '0.04em',
          color: 'var(--text)', marginBottom: '3.5rem',
        }}>
          EXTREME<br /><span style={{ color: obj.color, transition: 'color 0.4s' }}>COSMIC OBJECTS</span>
        </h2>

        {/* tabs */}
        <div className="reveal delay-2" style={{
          display: 'flex', gap: '0', flexWrap: 'wrap',
          borderBottom: '1px solid rgba(79,142,247,0.15)',
          marginBottom: '3rem',
        }}>
          {OBJECTS.map((o, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding:       '0.75rem 1.4rem',
              background:    'none',
              border:        'none',
              borderBottom:  active === i ? `2px solid ${o.color}` : '2px solid transparent',
              color:         active === i ? o.color : 'var(--muted)',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.82rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor:        'pointer',
              transition:    'color 0.3s, border-color 0.3s',
              marginBottom:  '-1px',
            }}>
              {o.icon} {o.name}
            </button>
          ))}
        </div>

        {/* content */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '4rem',
          alignItems:          'start',
        }}>
          {/* left: icon + fact */}
          <div>
            <div style={{
              fontSize:   '5rem',
              color:      obj.color,
              marginBottom: '1.5rem',
              transition: 'color 0.4s',
              lineHeight: 1,
            }}>{obj.icon}</div>
            <p style={{
              color:      'var(--text)',
              lineHeight: 1.9,
              fontWeight: 300,
              fontSize:   '1rem',
            }}>{obj.fact}</p>
          </div>

          {/* right: data */}
          <div style={{
            border:       `1px solid ${obj.color}30`,
            padding:      '2rem',
            transition:   'border-color 0.4s',
          }}>
            <div style={{
              fontSize:      '0.65rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color:         obj.color,
              marginBottom:  '1.5rem',
              transition:    'color 0.4s',
            }}>Object data</div>

            {[
              ['Size / Scale', obj.size],
              ['Temperature',  obj.temp],
              ['Distance',     obj.dist],
            ].map(([k, v]) => (
              <div key={k} style={{
                display:      'flex',
                justifyContent: 'space-between',
                padding:      '1rem 0',
                borderBottom: '1px solid rgba(79,142,247,0.08)',
                gap:          '1rem',
              }}>
                <span style={{ fontSize: '0.78rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--muted)' }}>{k}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text)', textAlign:'right', fontWeight:300 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}