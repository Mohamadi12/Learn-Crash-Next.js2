import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="logo">
            <Link href='/'>Travel Media</Link>
        </div>
        <div className="links">
            <Link href='/about'>About</Link>
            <Link href='/team'>Our Team</Link>
            <Link href='/code/repos'>Code</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
