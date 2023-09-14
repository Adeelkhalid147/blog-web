import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 border-b-[1px] bprder-b-black font-titleFont sticky top-0 bg-white z-50 px-4'>
        <div className='max-w-7xl h-full mx-auto flex justify-between items-center'>
            <Link href={"/"}>
            <div>
                <div className='text-xl font-bold'>AK</div>
            </div>
            </Link>
            <div>
                <ul className='hidden lg:inline-flex gap-8 uppercase text-sm font-semibold'>
                    <li className='headerLi'>Home</li>
                    <li>Posts</li>
                    <li>Pages</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex items-center gap-8 text-lg'>
                <div className='flex items-center gap-1'>
                    <Image className='w-8 h-8 rounded-full' src={"/adeel.jpeg"} height={1000} width={1000} alt='logo'/>
                    <p className='text-sm font-medium'>Hello Stranger!</p>
                </div>
                <button className='uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600'>Sign In</button>
            </div>
        </div>

    </div>
  )
}

export default Header