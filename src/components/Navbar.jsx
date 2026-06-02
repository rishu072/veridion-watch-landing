import { Menu, ChevronDown } from 'lucide-react'
import { GiImperialCrown } from 'react-icons/gi'

const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-6'>

      {/* LEFT: Logo */}
      <div className="flex items-center gap-1.5">
        <GiImperialCrown className="text-[#c6a15b] text-lg" />

        <span
          style={{ fontFamily: 'Cinzel' }}
          className="uppercase text-[#c6a15b] text-2xl tracking-[0.3em]"
        >
          Veridion
        </span>
      </div>

      {/* CENTER: Nav Links */}
      <ul className='flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-white'>
        <li><button type='button' className='hover:text-[#c6a15b] transition'>Collection</button></li>
        <li><button type='button' className='hover:text-[#c6a15b] transition'>Craftsmanship</button></li>
        <li><button type='button' className='hover:text-[#c6a15b] transition'>Story</button></li>
        <li><button type='button' className='hover:text-[#c6a15b] transition'>Journal</button></li>
        <li><button type='button' className='hover:text-[#c6a15b] transition'>Contact</button></li>
      </ul>

      {/* RIGHT: EN + Menu */}
      <div className='flex items-center gap-6 text-xs tracking-widest uppercase text-white'>
        <button className='flex items-center gap-1 hover:text-[#c6a15b] transition'>
          EN <ChevronDown size={12} />
        </button>
      </div>

    </nav>
  )
}

export default Navbar
