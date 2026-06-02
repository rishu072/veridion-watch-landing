import { useLayoutEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Watch1 from '../assets/Aurelus.png'
import Watch2 from '../assets/Infinitas.jpeg'
import Watch3 from '../assets/Novus.png'

const watches = [
  {
    id: 1,
    name: 'Veridion Aurelus',
    type: 'Chronograph',
    price: '$ 5,950',
    image: Watch1,
  },
  {
    id: 2,
    name: 'Veridion Novus',
    type: 'Automatic',
    price: '$ 4,250',
    image: Watch2,
  },
  {
    id: 3,
    name: 'Veridion Infinitas',
    type: 'Perpetual Calendar',
    price: '$ 8,900',
    image: Watch3,
  },
]

const Collection = () => {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.from(cardRefs.current, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
        },
      })

      gsap.to(cardRefs.current, {
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className='bg-black px-16 py-20'>

      {/* Header Row */}
      <div className='flex items-end justify-between mb-10'>
        <div>
          <p className='text-[#c6a15b] tracking-[0.3em] text-xs uppercase mb-3'>
            The Collection
          </p>
          <h2
            style={{ fontFamily: 'Cormorant Garamond' }}
            className='text-white uppercase text-5xl lg:text-6xl font-semibold'
          >
            Iconic by Design.
          </h2>
        </div>

        <button className='flex items-center gap-3 text-[#c6a15b] tracking-[0.2em] uppercase text-xs hover:opacity-70 transition'>
          View All Collections
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-3 gap-4'>
        {watches.map((watch) => (
          <div
            key={watch.id}
            ref={(node) => { cardRefs.current[watch.id - 1] = node }}
            className='relative border border-zinc-800 cursor-pointer group overflow-hidden h-95'
          >
            {/* Full Image */}
            <img
              src={watch.image}
              alt={watch.name}
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
            />

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent' />

            {/* Bottom Text Overlay */}
            <div className='absolute bottom-0 left-0 right-0 p-6'>
              <h3 className='text-white uppercase tracking-widest text-sm font-bold mb-1'>
                {watch.name}
              </h3>
              <p className='text-zinc-400 uppercase tracking-widest text-xs mb-4'>
                {watch.type}
              </p>
              <div className='flex items-center justify-between'>
                <span className='text-white text-sm'>{watch.price}</span>
                <ArrowRight
                  size={16}
                  className='text-[#c6a15b] group-hover:translate-x-1 transition-transform duration-300'
                />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Collection
