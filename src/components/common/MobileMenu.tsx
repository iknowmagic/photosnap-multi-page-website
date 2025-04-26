import { Link } from 'react-router-dom'
import { useUIStore } from '@/store/uiStore'

export default function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useUIStore()

  return (
    <>
      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden z-20 fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu content */}
      <div
        className={`fixed z-30 w-full bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-y-[72px]' : 'translate-y-[-100%]'
        }`}
      >
        <div className="p-8">
          <nav className="flex flex-col space-y-5 mb-5 text-center">
            <Link
              to="/stories"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              to="/features"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>

          {/* Divider line */}
          <div className="bg-black bg-opacity-25 my-5 w-full h-px"></div>

          <button className="bg-black w-full h-12 font-bold text-white text-sm uppercase tracking-widest cursor-pointer">
            Get an Invite
          </button>
        </div>
      </div>
    </>
  )
}
