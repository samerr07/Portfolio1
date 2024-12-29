import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ModernSVG from './ModernSvg'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
            <a href="#" className='mr-6 flex items-center space-x-2'>
            <ModernSVG />
            </a>
            <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <Link to="about" smooth duration={500} className='cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60'>About</Link>
                <Link to="projects" smooth duration={500} className='cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60'>Projects</Link>
                <Link to="experience" smooth duration={500} className='cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60'>Experience</Link>
                <Link to="contact" smooth duration={500} className='cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60'>Contact</Link>
            </nav>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}>
           <span className='sr-only'>Open main menu</span>
           {mobileMenuOpen ? (
            <X className='h-6 w-6' aria-hidden="true"/>
           ):(
            <Menu className='h-6 w-6' aria-hidden="true"/>
           )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
                <Link to="about" smooth duration={500} className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>About</Link>
                <Link to="projects" smooth duration={500} className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Project</Link>
                <Link to="experience" smooth duration={500} className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Experience</Link>
                <Link to="contact" smooth duration={500} className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'>Contact</Link>
            </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
