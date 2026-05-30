const CARDS = [
  {
    title: 'The Observable Universe', sub: '93 billion light-years in diameter',
    desc:  'The sphere of space visible from Earth, limited by the speed of light and the age of the cosmos.',
    color: 'var(--nebula2)', symbol: '◯',
  },
  {
    title: 'Andromeda Collision', sub: '4.5 billion years from now',
    desc:  'Our galaxy and Andromeda are on a direct collision course. Stars will pass harmlessly — but the night sky will transform beyond recognition.',
    color: 'var(--nebula3)', symbol: '⊗',
  },
  {
    title: 'The Fermi Paradox', sub: 'Where is everybody?',
    desc:  'Given the billions of Earth-like planets in our galaxy alone, statistically speaking — we should have met someone by now. The silence is deafening.',
    color: 'var(--nebula1)', symbol: '?',
  },
  {
    title: 'Cosmic Inflation', sub: '10⁻³⁶ seconds after the Big Bang',
    desc:  'The universe expanded from the size of a proton to the size of a grapefruit in less than a trillionth of a second. Then it kept going for 13.8 billion years.',
    color: '#0e5a5a', symbol: '∞',
  },
  {
    title: 'Dark Energy', sub: '68% of the universe',
    desc:  'An unknown force accelerating the expansion of the universe. The more space there is, the more dark energy there is — it will eventually pull every galaxy beyond the visible horizon.',
    color: '#1a3a6e', symbol: 'Λ',
  },
  {
    title: 'Time Dilation', sub: 'Einstein was right',
    desc:  'Clocks on GPS satellites tick faster than clocks on Earth. Without correcting for relativity, GPS would accumulate 11km of error per day. Space and time are one fabric.',
    color: '#3a1a5e', symbol: 't',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '7rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>

      <div className="reveal" style={{
        fontSize: '0.7rem', letterSpacing: '0.4em',
        textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem',
      }}>✦ &nbsp; Mind-bending concepts</div>

      <h2 className="reveal delay-1" style={{
        fontFamily: 'var(--font-display)',
        fontSize:   'clamp(2.2rem, 6vw, 5rem)',
        lineHeight: 1, letterSpacing: '0.04em',
        color: 'var(--text)', marginBottom: '3rem',
      }}>
        THINGS THAT WILL<br />
        <span style={{ color: 'var(--accent)' }}>BREAK YOUR MIND</span>
      </h2>

      <div className="reveal delay-2 gallery-grid">
        {CARDS.map((c, i) => (
          <div key={i} style={{
            background:  'var(--black)',
            padding:     '2rem 1.5rem',
            position:    'relative', overflow: 'hidden',
            transition:  'background 0.3s', cursor: 'default',
          }}
          onMouseEnter={e => e.currentTarget.style.background = `${c.color}18`}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
          >
            <div style={{
              position: 'absolute', right: '1rem', top: '0.8rem',
              fontFamily: 'var(--font-display)', fontSize: '5rem',
              color: c.color, opacity: 0.12, lineHeight: 1, userSelect: 'none',
            }}>{c.symbol}</div>

            <div style={{
              fontSize: '0.62rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: c.color, marginBottom: '0.7rem',
            }}>{c.sub}</div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize:   'clamp(1.3rem, 4vw, 1.6rem)',
              letterSpacing: '0.05em',
              color: 'var(--text)', marginBottom: '0.9rem', lineHeight: 1.1,
            }}>{c.title}</h3>

            <p style={{
              color: 'var(--muted)', fontSize: '0.85rem',
              lineHeight: 1.8, fontWeight: 300,
            }}>{c.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(79,142,247,0.08);
        }
        @media (max-width: 900px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}