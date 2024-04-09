import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-slate-400 px-5 py-2 w-full grid place-content-center '>
        <ul className='flex   font-bold text-xl my-3 text-white '>
            <li className='mx-10 sm:mx-3 sm:text-base'> <Link href={'/'} >Home</Link> </li>
            <li className='mx-10 sm:mx-3 sm:text-base'> <Link href={'/contact'} >Contact</Link> </li>
            <li className='mx-10 sm:mx-3 sm:text-base'> <Link href={'/about'} >About</Link> </li>
            <li className='mx-10 sm:mx-3 sm:text-base'> <Link href={'/blog'} >Blog</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
