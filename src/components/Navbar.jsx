import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Universe', 'Gallery']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav style={{
        position:   'fixed',
        top: 0, left: 0, right: 0,
        zIndex:     1000,
        padding:    '1rem 2rem',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled || open ? 'rgba(2,2,10,0.95)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(79,142,247,0.12)' : 'none',
      }}>
        {/* Logo */}
        <div onClick={() => scrollTo('home')} style={{
          fontFamily: 'var(--font-display)',
          fontSize:   '1.6rem',
          letterSpacing: '0.15em',
          color:      'var(--glow)',
          cursor:     'pointer',
        }}>COSMOS</div>

        {/* Desktop links */}
        <ul style={{
          display:    'flex',
          gap:        '2.5rem',
          listStyle:  'none',
          fontSize:   '0.82rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }} className="nav-desktop">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} style={{
                background: 'none', border: 'none',
                color: 'var(--muted)', cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: 'inherit', letterSpacing: 'inherit',
                textTransform: 'inherit', padding: '4px 0',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--glow)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >{l}</button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-desktop nav-cta" onClick={() => scrollTo('gallery')} style={{
          padding: '0.5rem 1.4rem',
          border: '1px solid var(--accent)',
          borderRadius: '2px',
          background: 'transparent',
          color: 'var(--accent)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background 0.3s, color 0.3s',
        }}
        onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#fff' }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
        >Explore</button>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} style={{
          background: 'none', border: 'none',
          cursor: 'pointer', padding: '6px',
          display: 'flex', flexDirection: 'column',
          gap: '5px', alignItems: 'flex-end',
        }}>
          <span style={{
            display: 'block', height: '1.5px', width: open ? '24px' : '24px',
            background: 'var(--glow)',
            transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            transition: 'transform 0.3s',
          }} />
          <span style={{
            display: 'block', height: '1.5px', width: '16px',
            background: 'var(--glow)',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', height: '1.5px', width: open ? '24px' : '24px',
            background: 'var(--glow)',
            transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            transition: 'transform 0.3s',
          }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position:   'fixed',
        top:        0, left: 0, right: 0, bottom: 0,
        zIndex:     999,
        background: 'rgba(2,2,10,0.97)',
        backdropFilter: 'blur(20px)',
        display:    'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:        '2.5rem',
        opacity:    open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        {links.map((l, i) => (
          <button key={l} onClick={() => scrollTo(l)} style={{
            background: 'none', border: 'none',
            fontFamily: 'var(--font-display)',
            fontSize:   'clamp(2.2rem, 8vw, 3.5rem)',
            letterSpacing: '0.1em',
            color:      'var(--muted)',
            cursor:     'pointer',
            textTransform: 'uppercase',
            transform:  open ? 'translateY(0)' : 'translateY(20px)',
            opacity:    open ? 1 : 0,
            transition: `transform 0.4s ${i * 0.07}s ease, opacity 0.4s ${i * 0.07}s ease, color 0.2s`,
          }}
          onMouseEnter={e => e.target.style.color = 'var(--glow)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{l}</button>
        ))}
      </div>

      <style>{`
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}