export default function Footer() {
    return (
      <footer style={{
        padding:     '4rem 2.5rem 3rem',
        borderTop:   '1px solid rgba(79,142,247,0.12)',
        textAlign:   'center',
        position:    'relative',
        overflow:    'hidden',
      }}>
        {/* glow bg */}
        <div style={{
          position:   'absolute',
          bottom:     '-100px',
          left:       '50%',
          transform:  'translateX(-50%)',
          width:      '500px',
          height:     '200px',
          background: 'radial-gradient(ellipse, rgba(79,142,247,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
  
        <div style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '3rem',
          letterSpacing: '0.1em',
          color:         'var(--glow)',
          marginBottom:  '0.5rem',
        }}>COSMOS</div>
  
        <p style={{
          color:         'var(--muted)',
          fontSize:      '0.8rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom:  '2.5rem',
          fontWeight:    300,
        }}>
          The universe is under no obligation to make sense to you
        </p>
  
        <div style={{
          display:        'flex',
          justifyContent: 'center',
          gap:            '2rem',
          marginBottom:   '3rem',
        }}>
          {['Home', 'About', 'Universe', 'Gallery'].map(l => (
            <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background:    'none',
              border:        'none',
              color:         'var(--muted)',
              fontFamily:    'var(--font-body)',
              fontSize:      '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor:        'pointer',
              transition:    'color 0.25s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--glow)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</button>
          ))}
        </div>
  
        <div style={{
          fontSize:   '0.72rem',
          color:      'rgba(121,134,203,0.5)',
          letterSpacing: '0.1em',
        }}>
          © 2026 COSMOS — A visual exploration of the infinite
        </div>
      </footer>
    )
  }