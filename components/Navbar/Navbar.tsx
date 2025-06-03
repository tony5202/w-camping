import React from 'react'
import Logo from './Logo'
import Search from './Search'
import { DarkMode } from './DarkMode'
import DropdownListMenu from './DropdownListMenu'


const Navbar = () => {
  return (
    <nav>
        <div className='container flex flex-col justify-between py-8 sm:flex-row items-center gap-4'>
            {/* Logo */}
            <Logo />


            {/* Search */}
            
<Search />

            {/* darkmode */}
            <div className='flex items-center gap-4'>

            <h1><DarkMode/></h1>
            <DropdownListMenu/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar