import React from 'react'
import Image from './asset/react-logo.png'

export default function Header() {
  return (
    <nav className='flex justify-between items-center p-4 capitalize shadow-lg'>
      <img src={Image} alt="React Logo" className='cursor-pointer w-24' />
      <ul className='flex space-x-10 text-2xl'>
        <li><a href="./">pricing</a></li>
        <li><a href="./">about</a></li>
        <li><a href="./">Contact</a></li>
      </ul>
    </nav>
  )
}

 
