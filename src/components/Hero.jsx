import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let animId

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      buildStars()
    }

    let stars = []
    const buildStars = () => {
      stars = Array.from({ length: 320 }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.4 + 0.2,
        alpha: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        pulse: Math.random() * Math.PI * 2,
      }))
    }
    buildStars()

    let shooters = []
    const spawnShooter = () => {
      shooters.push({
        x:     Math.random() * W,
        y:     Math.random() * H * 0.5,
        len:   Math.random() * 120 + 60,
        speed: Math.random() * 8 + 6,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
        alpha: 1,
        life:  0,
      })
    }
    setInterval(spawnShooter, 2800)

    const nebulae = [
      { x: W * 0.15, y: H * 0.3,  r: 260, color: 'rgba(107,33,168,' },
      { x: W * 0.8,  y: H * 0.6,  r: 200, color: 'rgba(14,77,138,'  },
      { x: W * 0.5,  y: H * 0.15, r: 180, color: 'rgba(131,24,67,'  },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = '#02020a'
      ctx.fillRect(0, 0, W, H)

      nebulae.forEach(n => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r)
        g.addColorStop(0,   n.color + '0.18)')
        g.addColorStop(0.5, n.color + '0.06)')
        g.addColorStop(1,   n.color + '0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      stars.forEach(s => {
        s.pulse += s.speed
        const a = 0.4 + Math.sin(s.pulse) * 0.4
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,210,255,${a})`
        ctx.fill()
      })

      shooters = shooters.filter(s => s.life < 1)
      shooters.forEach(s => {
        s.x    += Math.cos(s.angle) * s.speed
        s.y    += Math.sin(s.angle) * s.speed
        s.life += 0.018
        const alpha = 1 - s.life
        const tx = s.x - Math.cos(s.angle) * s.len
        const ty = s.y - Math.sin(s.angle) * s.len
        const g  = ctx.createLinearGradient(tx, ty, s.x, s.y)
        g.addColorStop(0, `rgba(126,179,255,0)`)
        g.addColorStop(1, `rgba(255,255,255,${alpha})`)
        ctx.strokeStyle = g
        ctx.lineWidth   = 1.5
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0 }} />

      <div style={{
        position:   'absolute', inset: 0,
        display:    'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign:  'center',
        padding:    '0 1.5rem',
      }}>
        <div style={{
          fontSize: '0.65rem', letterSpacing: '0.35em',
          textTransform: 'uppercase', color: 'var(--accent)',
          marginBottom: '1.2rem', opacity: 0,
          animation: 'fadeUp 1s 0.3s ease forwards',
        }}>✦ &nbsp; Explore the infinite &nbsp; ✦</div>

        <h1 style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(3.5rem, 13vw, 11rem)',
          lineHeight:    0.9, letterSpacing: '0.04em',
          color:         'var(--text)',
          opacity:       0,
          animation:     'fadeUp 1s 0.55s ease forwards',
        }}>
          THE<br />
          <span style={{
            color: 'var(--accent)',
            WebkitTextStroke: '1px var(--accent)',
            WebkitTextFillColor: 'transparent',
          }}>UNIVERSE</span>
        </h1>

        <p style={{
          marginTop:  '1.8rem',
          maxWidth:   '480px',
          fontSize:   'clamp(0.85rem, 2.5vw, 1rem)',
          lineHeight: 1.8,
          color:      'var(--muted)',
          fontWeight: 300,
          opacity:    0,
          animation:  'fadeUp 1s 0.8s ease forwards',
          padding:    '0 0.5rem',
        }}>
          13.8 billion years of expansion. 200 billion galaxies.
          Trillions of worlds. And you're here, looking up.
        </p>

        <div style={{
          marginTop:  '2.5rem',
          display:    'flex',
          gap:        '0.75rem',
          flexWrap:   'wrap',
          justifyContent: 'center',
          opacity:    0,
          animation:  'fadeUp 1s 1.05s ease forwards',
        }}>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding:      '0.75rem 1.8rem',
              background:   'var(--accent)',
              border:       'none',
              borderRadius: '2px',
              color:        '#fff',
              fontFamily:   'var(--font-body)',
              fontSize:     '0.82rem',
              letterSpacing:'0.1em',
              textTransform:'uppercase',
              cursor:       'pointer',
              transition:   'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 0 30px rgba(79,142,247,0.5)'
            }}
            onMouseLeave={e => {
              e.target.style.transform = 'none'
              e.target.style.boxShadow = 'none'
            }}
          >Begin Journey</button>

          <button
            onClick={() => document.getElementById('universe')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding:      '0.75rem 1.8rem',
              background:   'transparent',
              border:       '1px solid rgba(79,142,247,0.4)',
              borderRadius: '2px',
              color:        'var(--muted)',
              fontFamily:   'var(--font-body)',
              fontSize:     '0.82rem',
              letterSpacing:'0.1em',
              textTransform:'uppercase',
              cursor:       'pointer',
              transition:   'border-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--text)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(79,142,247,0.4)'; e.target.style.color = 'var(--muted)' }}
          >Discover Facts</button>
        </div>

        <div style={{
          position: 'absolute', bottom: '2.5rem',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '8px',
          opacity: 0, animation: 'fadeUp 1s 1.4s ease forwards',
        }}>
          <span style={{ fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--muted)' }}>scroll</span>
          <div style={{
            width:'1px', height:'40px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollLine 2s ease infinite',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  )
}