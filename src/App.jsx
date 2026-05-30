import { useEffect, useRef } from 'react'
import './App.css'
import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Universe  from './components/Universe'
import Gallery   from './components/Gallery'
import Footer    from './components/Footer'

export default function App() {
  const cursorRef     = useRef(null)
  const cursorRingRef = useRef(null)

  useEffect(() => {
    const cursor     = cursorRef.current
    const cursorRing = cursorRingRef.current

    const move = (e) => {
      cursor.style.left     = e.clientX + 'px'
      cursor.style.top      = e.clientY + 'px'
      cursorRing.style.left = e.clientX + 'px'
      cursorRing.style.top  = e.clientY + 'px'
    }

    const over = () => cursor.classList.add('hover')
    const out  = () => cursor.classList.remove('hover')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })

    // reveal on scroll
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor"      ref={cursorRef}     />
      <div className="cursor-ring" ref={cursorRingRef} />
      <Navbar />
      <Hero />
      <About />
      <Universe />
      <Gallery />
      <Footer />
    </>
  )
}