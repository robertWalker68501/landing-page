import { useState } from 'react';

import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className='fixed top-0 z-50 w-full bg-slate-950/20 backdrop-blur-sm transition-all duration-300'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-14 items-center justify-between sm:h-16 md:h-20'>
          <a href='#'>
            <div className='group flex cursor-pointer items-center space-x-1'>
              <div>
                <img
                  src='/logo.png'
                  alt='CodeFlow'
                  className='size-6 sm:size-8'
                />
              </div>
              <span className='text-lg font-medium sm:text-xl md:text-2xl'>
                <span className='text-white'>Code</span>
                <span className='text-blue-400'>Flow</span>
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className='hidden items-center space-x-6 md:flex lg:space-x-8'>
            <a
              href='#features'
              className='text-sm text-gray-300 hover:text-white lg:text-base'
            >
              Features
            </a>
            <a
              href='#pricing'
              className='text-sm text-gray-300 hover:text-white lg:text-base'
            >
              Pricing
            </a>
            <a
              href='#testimonials'
              className='text-sm text-gray-300 hover:text-white lg:text-base'
            >
              Testimonials
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            className='p-2 text-gray-300 hover:text-white sm:cursor-pointer md:hidden'
          >
            {mobileMenuIsOpen ? (
              <X className='size-5 sm:size-6' />
            ) : (
              <Menu className='size-5 sm:size-6' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div className='animate-in slide-in-from-top border-t border-b-slate-800 bg-slate-900/95 backdrop-blur-lg duration-300 md:hidden'>
          <div className='space-y-3 px-4 py-4 sm:space-y-4 sm:py-6'>
            <a
              href='#features'
              className='block text-sm text-gray-300 hover:text-white lg:text-base'
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Features
            </a>
            <a
              href='#pricing'
              className='block text-sm text-gray-300 hover:text-white lg:text-base'
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href='#testimonials'
              className='block text-sm text-gray-300 hover:text-white lg:text-base'
              onClick={() => setMobileMenuIsOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
