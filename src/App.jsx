import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Craftsmanship from './pages/Craftsmanship'
import Collection from './pages/Collection'
import Story from './pages/Story'
import TrustBadges from './pages/Badges'
import Footer from './pages/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    })

    let frameId = 0

    const raf = (time) => {
      lenis.raf(time)
      frameId = globalThis.requestAnimationFrame(raf)
    }

    frameId = globalThis.requestAnimationFrame(raf)

    return () => {
      globalThis.cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return (
    <main className='min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden'>
      <Navbar />
      <Home />
      <Craftsmanship />
      <Collection />
      <Story />
      <TrustBadges />
      <Footer />
    </main>
  )
}

export default App
