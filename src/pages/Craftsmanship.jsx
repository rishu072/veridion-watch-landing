import { useLayoutEffect, useRef } from 'react'
import { ArrowRight, Gem, Settings, Shield } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import craft from '../assets/craftmanship.png' // your image

const Craftsmanship = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const featureRefs = useRef([])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.12, y: 50 },
        {
          scale: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      )

      gsap.from(textRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      gsap.from(featureRefs.current, {
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className='flex min-h-125 bg-[#0d0b08]'>

      {/* LEFT: Full Image */}
      <div className='w-[38%] shrink-0'>
        <img
          ref={imageRef}
          src={craft}
          alt="Watch Movement"
          className='w-full h-full object-cover'
        />
      </div>

      {/* MIDDLE: Text Content */}
      <div ref={textRef} className='flex flex-col justify-center px-14 py-16 w-[34%] border-r border-zinc-800'>

        <p className='text-[#c6a15b] tracking-[0.3em] text-xs uppercase mb-4'>
          Craftsmanship
        </p>

        <h2
          style={{ fontFamily: 'Cormorant Garamond' }}
          className='text-4xl lg:text-5xl uppercase font-semibold leading-[1.1] mb-6'
        >
          <span className='text-white'>{'Engineered To'}<br /></span>
          <span className='text-[#c6a15b]'>{'Perfection.'}</span>
        </h2>

        <p className='text-zinc-400 text-sm leading-7 mb-10 max-w-sm'>
          Every Veridion timepiece is a union of precision
          engineering and timeless aesthetics. We use the
          finest materials and the most advanced techniques
          to ensure unparalleled quality.
        </p>

        <button className='flex items-center gap-3 text-white uppercase tracking-[0.2em] text-xs w-fit hover:text-[#c6a15b] transition-colors duration-300'>
          Discover Our Process
          <ArrowRight size={16} />
        </button>

      </div>

      {/* RIGHT: Feature List */}
      <div className='flex flex-col justify-center px-12 py-16 w-[28%] gap-10'>

        {/* Feature 1 */}
        <div ref={(node) => { featureRefs.current[0] = node }} className='flex items-start gap-5'>
          <Gem size={28} className='text-[#c6a15b] shrink-0 mt-1' />
          <div>
            <h4 className='text-white uppercase tracking-widest text-xs font-semibold mb-2'>
              Finest Materials
            </h4>
            <p className='text-zinc-400 text-xs leading-6'>
              Only the world's finest materials make our standards.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-zinc-800' />

        {/* Feature 2 */}
        <div ref={(node) => { featureRefs.current[1] = node }} className='flex items-start gap-5'>
          <Settings size={28} className='text-[#c6a15b] shrink-0 mt-1' />
          <div>
            <h4 className='text-white uppercase tracking-widest text-xs font-semibold mb-2'>
              Swiss Movement
            </h4>
            <p className='text-zinc-400 text-xs leading-6'>
              Precision Swiss automatic movements for unparalleled accuracy.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='w-full h-px bg-zinc-800' />

        {/* Feature 3 */}
        <div ref={(node) => { featureRefs.current[2] = node }} className='flex items-start gap-5'>
          <Shield size={28} className='text-[#c6a15b] shrink-0 mt-1' />
          <div>
            <h4 className='text-white uppercase tracking-widest text-xs font-semibold mb-2'>
              Built to Last
            </h4>
            <p className='text-zinc-400 text-xs leading-6'>
              Each timepiece is tested rigorously to stand the test of time.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Craftsmanship
