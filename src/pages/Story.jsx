import { useLayoutEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StoryBg from '../assets/story_bg.mp4' // mountain/landscape image

const Story = () => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.fromTo(
        videoRef.current,
        { scale: 1.12, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      )

      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
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
    <section ref={sectionRef} className='relative h-125 flex items-center overflow-hidden'>

      {/* Background Video */}
      <video
        ref={videoRef}
        className='absolute inset-0 w-full h-full object-cover object-center'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={StoryBg} type='video/mp4' />
      </video>

      {/* Dark Overlay */}
      <div className='absolute inset-0 bg-black/70' />

      {/* Content */}
      <div ref={contentRef} className='relative z-10 w-full px-16 flex items-center justify-between'>

        {/* LEFT: Text */}
        <div className='max-w-md'>
          <p className='text-[#c6a15b] tracking-[0.3em] text-xs uppercase mb-4'>
            Our Story
          </p>
          <h2
            style={{ fontFamily: 'Cormorant Garamond' }}
            className='text-white uppercase text-5xl lg:text-6xl font-semibold leading-[1.1] mb-6'
          >
            Rooted in Heritage.<br />
            <span
              style={{ fontFamily: 'Cormorant Garamond' }}
              className='text-[#c6a15b]'
            >
              Driven by Passion.
            </span>
          </h2>
          <p className='text-zinc-400 text-sm leading-7 mb-8 max-w-sm'>
            Founded in Switzerland, our journey began with a
            simple belief — that time is the most valuable luxury
            of all. Today, that belief drives everything we create.
          </p>
          <button className='flex items-center gap-3 text-white uppercase tracking-[0.2em] text-xs hover:text-[#c6a15b] transition-colors duration-300'>
            Learn Our Story
            <ArrowRight size={16} />
          </button>
        </div>

        {/* CENTER: Play Button */}
        <div className='flex flex-col items-center gap-4 absolute left-1/2 -translate-x-1/2'>
          <button className='w-16 h-16 rounded-full border border-white/50 flex items-center justify-center hover:border-[#c6a15b] hover:text-[#c6a15b] text-white transition-all duration-300'>
            <Play size={20} fill='currentColor' />
          </button>
          <span className='text-white tracking-[0.3em] text-xs uppercase'>
            Watch Our Film
          </span>
        </div>

      </div>

    </section>
  )
}

export default Story
