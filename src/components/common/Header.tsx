import { Link } from 'react-router-dom'
import { useUIStore } from '@/store/uiStore'

export default function Header() {
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore()

  return (
    <header className="top-0 z-10 fixed bg-white w-full h-[72px]">
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-40 h-full">
        {/* Logo */}
        <div className="py-6">
          <Link to="/" onClick={() => mobileMenuOpen && toggleMobileMenu()}>
            <img src="/images/shared/desktop/logo.svg" alt="Photosnap" />
          </Link>
        </div>

        {/* Mobile Menu Burger */}
        <div className="md:hidden flex items-center">
          <button
            className="relative focus:outline-none w-5 h-8 cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-5 h-px bg-black transition-transform duration-300 ${
                mobileMenuOpen ? 'top-3.5 rotate-45 translate-y-px' : 'top-3'
              }`}
            />
            <span
              className={`absolute w-5 h-px bg-black transition-transform duration-300 ${
                mobileMenuOpen ? 'top-3.5 -rotate-45 -translate-y-px' : 'top-4'
              }`}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-[-10px] font-bold text-xs uppercase tracking-widest">
          <Link
            to="/stories"
            className="hover:opacity-30 py-7 transition-opacity duration-300"
          >
            Stories
          </Link>
          <Link
            to="/features"
            className="hover:opacity-30 py-7 transition-opacity duration-300"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="hover:opacity-30 py-7 transition-opacity duration-300"
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block py-4">
          <button className="bg-black hover:bg-[#dfdfdf] w-[158px] h-10 font-bold text-white hover:text-black text-xs uppercase tracking-widest transition-colors duration-300">
            Get an Invite
          </button>
        </div>
      </div>
    </header>
  )
}
