import { ArrowRight } from 'lucide-react'
import { GiImperialCrown } from 'react-icons/gi'
import { FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#0a0a0a] border-t border-zinc-800'>

      {/* Main Footer */}
      <div className='px-16 py-16 grid grid-cols-6 gap-10'>

        {/* Logo Column */}
        <div className='col-span-1'>
          <div className='mb-6 flex flex-col items-center text-center'>
            <GiImperialCrown className='text-[#c6a15b] text-3xl mb-2' aria-hidden='true' />
            <p
              style={{ fontFamily: 'Cinzel' }}
              className='text-[#c6a15b] text-2xl leading-none tracking-[0.45em] uppercase'
            >
              Veridion
            </p>
            <p className='mt-2 text-zinc-500 text-[10px] tracking-[0.35em] uppercase'>
              Timeless by Design
            </p>
          </div>
        </div>

        {/* Collection */}
        <div>
          <h5 className='text-white uppercase tracking-[0.2em] text-xs font-semibold mb-5'>
            Collection
          </h5>
          <ul className='space-y-3 text-zinc-500 text-xs'>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>All Watches</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>New Arrivals</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Limited Edition</button></li>
          </ul>
        </div>

        {/* Brand */}
        <div>
          <h5 className='text-white uppercase tracking-[0.2em] text-xs font-semibold mb-5'>
            Brand
          </h5>
          <ul className='space-y-3 text-zinc-500 text-xs'>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Our Story</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Craftsmanship</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Sustainability</button></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className='text-white uppercase tracking-[0.2em] text-xs font-semibold mb-5'>
            Support
          </h5>
          <ul className='space-y-3 text-zinc-500 text-xs'>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>FAQs</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Shipping & Returns</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Warranty</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className='text-white uppercase tracking-[0.2em] text-xs font-semibold mb-5'>
            Contact
          </h5>
          <ul className='space-y-3 text-zinc-500 text-xs'>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Boutiques</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Contact Us</button></li>
            <li><button type='button' className='hover:text-[#c6a15b] transition'>Concierge Service</button></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className='text-white uppercase tracking-[0.2em] text-xs font-semibold mb-5'>
            Stay Connected
          </h5>

          {/* Email Input */}
          <div className='flex border border-zinc-700 mb-6'>
            <input
              type='email'
              placeholder='Enter your email'
              className='bg-transparent px-4 py-2 text-xs text-white placeholder-zinc-600 outline-none flex-1 w-full'
            />
            <button className='px-3 bg-zinc-800 hover:bg-[#c6a15b] transition-colors duration-300'>
              <ArrowRight size={14} className='text-white' />
            </button>
          </div>

          {/* Social Icons */}
          <div className='flex items-center gap-4'>
            <button type='button' className='text-zinc-500 hover:text-[#c6a15b] transition'>
              <FaInstagram size={16} />
            </button>
            <button type='button' className='text-zinc-500 hover:text-[#c6a15b] transition'>
              <FaFacebookF size={16} />
            </button>
            <button type='button' className='text-zinc-500 hover:text-[#c6a15b] transition'>
              <FaYoutube size={16} />
            </button>
            <button type='button' className='text-zinc-500 hover:text-[#c6a15b] transition'>
              <FaXTwitter size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className='px-16 py-5 border-t border-zinc-800 flex items-center justify-between'>
        <p className='text-zinc-600 text-xs'>
          © 2024 Veridion. All rights reserved.
        </p>
        <div className='flex items-center gap-6 text-zinc-600 text-xs'>
          <button type='button' className='hover:text-white transition'>Privacy Policy</button>
          <button type='button' className='hover:text-white transition'>Terms & Conditions</button>
        </div>
      </div>

    </footer>
  )
}

export default Footer
