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
    <nav style={{
      position:   'fixed',
      top:        0,
      left:       0,
      right:      0,
      zIndex:     1000,
      padding:    '1rem 2.5rem',
      display:    'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
      background: scrolled ? 'rgba(2,2,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(79,142,247,0.12)' : 'none',
    }}>
      {/* Logo */}
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize:   '1.6rem',
        letterSpacing: '0.15em',
        color:      'var(--glow)',
        cursor:     'pointer',
      }} onClick={() => scrollTo('home')}>
        COSMOS
      </div>

      {/* Desktop links */}
      <ul style={{
        display:    'flex',
        gap:        '2.5rem',
        listStyle:  'none',
        fontFamily: 'var(--font-body)',
        fontSize:   '0.85rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} style={{
              background: 'none',
              border:     'none',
              color:      'var(--muted)',
              cursor:     'pointer',
              fontFamily: 'inherit',
              fontSize:   'inherit',
              letterSpacing: 'inherit',
              textTransform: 'inherit',
              transition: 'color 0.25s',
              padding:    '4px 0',
              position:   'relative',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--glow)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >{l}</button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button style={{
        padding:      '0.5rem 1.4rem',
        border:       '1px solid var(--accent)',
        borderRadius: '2px',
        background:   'transparent',
        color:        'var(--accent)',
        fontFamily:   'var(--font-body)',
        fontSize:     '0.8rem',
        letterSpacing:'0.1em',
        textTransform:'uppercase',
        cursor:       'pointer',
        transition:   'background 0.3s, color 0.3s',
      }}
      onMouseEnter={e => { e.target.style.background = 'var(--accent)'; e.target.style.color = '#fff' }}
      onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent)' }}
      onClick={() => scrollTo('gallery')}
      >Explore</button>
    </nav>
  )
}