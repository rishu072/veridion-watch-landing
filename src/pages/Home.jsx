import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import Hero from '../assets/HeroWatch.png'

const Home = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const headingRef = useRef(null)
  const eyebrowRef = useRef(null)
  const copyRef = useRef(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(eyebrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: 'power3.out',
      })

      gsap.from(copyRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.fromTo(
        imageRef.current,
        { scale: 1.12, clipPath: 'inset(0 0 0 100%)' },
        {
          scale: 1,
          clipPath: 'inset(0 0 0 0%)',
          duration: 1.4,
          ease: 'power4.out',
        }
      )
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className='relative h-screen bg-black flex items-center px-16 overflow-hidden'>

      {/* LEFT: Text */}
      <div className='flex-1 z-10 flex flex-col justify-center'>

        <p ref={eyebrowRef} className='tracking-[0.3em] text-[#c6a15b] text-xs uppercase mb-6'>
          Built for Legacy
        </p>

        <h1
          ref={headingRef}
          style={{ fontFamily: 'Cormorant Garamond' }}
          className='text-[#c6a15b] uppercase font-semibold leading-[1.05] text-[72px] lg:text-[88px] xl:text-[100px] mb-6'
        >
          Time Takes<br />
          Everything.<br />
          <span style={{
            fontFamily:'Cormorant Garamond'
          }} className=
          'text-white'>Except Class.</span>
        </h1>

        <p ref={copyRef} className='text-zinc-400 text-sm leading-7 max-w-xs mb-10'>
          Veridion crafts timepieces for those who appreciate
          the value of time and the art of true craftsmanship.
        </p>

        <button className='relative z-20 mt-2 flex w-fit items-center gap-3 border border-[#c6a15b] px-8 py-3 uppercase tracking-[0.2em] text-[#c6a15b] text-xs hover:bg-[#c6a15b] hover:text-black transition-all duration-300'>
          Explore Collections
          <ArrowRight size={16} />
        </button>

      </div>

      {/* RIGHT: Watch Image */}
      <div className='absolute right-0 top-0 h-full w-[60%] flex items-center justify-end'>
        <img
          ref={imageRef}
          src={Hero}
          alt="Veridion Watch"
          className='h-full w-full object-cover object-left'
        />
      </div>

    </section>
  )
}

export default Home
