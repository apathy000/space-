export default function About() {
    const stats = [
      { num: '13.8B',  label: 'Years old',         sub: 'Age of the Universe' },
      { num: '200B+',  label: 'Galaxies',           sub: 'In the observable universe' },
      { num: '7×10²²', label: 'Stars',              sub: 'Estimated total count' },
      { num: '4.24',   label: 'Light years',        sub: 'To the nearest star' },
    ]
  
    return (
      <section id="about" style={{
        padding:         '8rem 2.5rem',
        maxWidth:        '1100px',
        margin:          '0 auto',
      }}>
        {/* label */}
        <div className="reveal" style={{
          fontSize:      '0.7rem',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color:         'var(--accent)',
          marginBottom:  '1rem',
        }}>
          ✦ &nbsp; What is out there
        </div>
  
        {/* heading */}
        <h2 className="reveal delay-1" style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(2.8rem, 6vw, 5rem)',
          lineHeight:    1,
          letterSpacing: '0.04em',
          color:         'var(--text)',
          marginBottom:  '2rem',
        }}>
          WE ARE MADE<br />
          <span style={{ color: 'var(--accent)' }}>OF STARDUST</span>
        </h2>
  
        {/* body */}
        <div className="reveal delay-2" style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '2rem',
          marginBottom:        '5rem',
        }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>
            Every atom of carbon in your body was forged inside a dying star. 
            The iron in your blood was scattered by supernovae explosions billions of years ago. 
            The universe didn't just create the conditions for life — it created the materials for it.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300 }}>
            Space is not empty. It hums with cosmic microwave background radiation, 
            dark matter that bends light without being seen, and gravitational waves 
            rippling from collisions so violent they warp the fabric of spacetime itself.
          </p>
        </div>
  
        {/* stats grid */}
        <div className="reveal delay-3" style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap:                 '1px',
          background:          'rgba(79,142,247,0.1)',
          border:              '1px solid rgba(79,142,247,0.1)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding:    '2.5rem 2rem',
              background: 'var(--black)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,142,247,0.06)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
            >
              <div style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '2.8rem',
                letterSpacing: '0.04em',
                color:         'var(--glow)',
                lineHeight:    1,
                marginBottom:  '0.4rem',
              }}>{s.num}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text)', marginBottom:'0.3rem' }}>{s.label}</div>
              <div style={{ fontSize: '0.75rem', color:'var(--muted)', fontWeight:300 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }