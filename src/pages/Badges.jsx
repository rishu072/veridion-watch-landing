import React from 'react'
import { Gem, RotateCcw, Shield, HeadphonesIcon } from 'lucide-react'

const badges = [
  {
    icon: <Gem size={28} />,
    title: 'Complimentary Shipping',
    subtitle: 'Worldwide on all orders',
  },
  {
    icon: <RotateCcw size={28} />,
    title: 'Easy Returns',
    subtitle: '30-day return policy',
  },
  {
    icon: <Shield size={28} />,
    title: 'International Warranty',
    subtitle: '5-year warranty on all watches',
  },
  {
    icon: <HeadphonesIcon size={28} />,
    title: 'Dedicated Concierge',
    subtitle: 'Personal assistance',
  },
]

const TrustBadges = () => {
  return (
    <section className='bg-[#0d0b08] border-t border-b border-zinc-800'>
      <div className='grid grid-cols-4 divide-x divide-zinc-800'>
        {badges.map((badge, index) => (
          <div
            key={index}
            className='flex items-center gap-5 px-10 py-8'
          >
            <span className='text-[#c6a15b] flex-shrink-0'>
              {badge.icon}
            </span>
            <div>
              <h4 className='text-white uppercase tracking-widest text-xs font-semibold mb-1'>
                {badge.title}
              </h4>
              <p className='text-zinc-500 text-xs leading-5'>
                {badge.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges
