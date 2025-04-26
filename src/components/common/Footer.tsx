import { Link } from 'react-router-dom'

export default function Footer() {
  // Social media icons
  const socialIcons = [
    { name: 'facebook', path: '/assets/images/shared/desktop/facebook.svg' },
    { name: 'youtube', path: '/assets/images/shared/desktop/youtube.svg' },
    { name: 'twitter', path: '/assets/images/shared/desktop/twitter.svg' },
    { name: 'pinterest', path: '/assets/images/shared/desktop/pinterest.svg' },
    { name: 'instagram', path: '/assets/images/shared/desktop/instagram.svg' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black px-8 md:px-10 lg:px-40 py-14 md:py-12 lg:py-14 text-white">
      <div className="flex flex-col h-full">
        <div className="gap-y-10 md:gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="inline-block relative">
              <img
                src="/assets/images/shared/desktop/logo.svg"
                alt="Photosnap"
                className="invert"
              />
              <div className="top-0 left-0 absolute">
                <img
                  src="/assets/images/shared/desktop/logo.svg"
                  alt=""
                  className="invert w-[170px] h-4 clip-rect-logo"
                />
              </div>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-3 md:row-start-3 lg:row-start-3">
            {socialIcons.map((icon) => (
              <a
                key={icon.name}
                href="#"
                className="hover:filter-none brightness-0 invert w-5 h-5 transition-all duration-300"
                aria-label={icon.name}
              >
                <img src={icon.path} alt={icon.name} />
              </a>
            ))}
          </div>

          {/* Nav Links */}
          <div className="flex md:flex-row flex-col lg:flex-col items-center md:items-start md:space-x-6 lg:space-x-0 space-y-5 md:space-y-0 lg:space-y-5 lg:row-span-3 md:row-start-2">
            <Link
              to="/"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
            >
              Home
            </Link>
            <Link
              to="/stories"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
            >
              Stories
            </Link>
            <Link
              to="/features"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="hover:opacity-30 font-bold text-xs uppercase tracking-widest transition-opacity duration-300"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-end">
            <button className="flex justify-center md:justify-end items-center font-bold text-xs hover:underline uppercase tracking-widest">
              Get an Invite
              <span className="ml-4 w-11 h-3.5">
                <img
                  src="/assets/images/shared/desktop/arrow.svg"
                  alt=""
                  className="invert"
                />
              </span>
            </button>
          </div>

          {/* Copyright - positioned in the grid below the CTA button */}
          <div className="align-self-end md:col-start-2 lg:col-start-3 row-span-2 opacity-50 mt-10 lg:mt-auto text-sm text-center md:text-right">
            Copyright {currentYear}. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
