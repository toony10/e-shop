import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '@/public/assets/assets'

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white shadow'>
            <div className='container mx-auto flex items-center justify-between px-4 py-4'>
                <Link href='/'>
                    <Image src={ assets.logo } alt='logo' width={ 170 } height={ 170 } />
                </Link>

                <div className='hidden md:flex space-x-6'>
                    <Link href='/' className='hover:text-blue-400 transition duration-300'>Home</Link>
                    <Link href='/products' className='hover:text-blue-400 transition duration-300'>Products</Link>
                    <Link href='/checkOut' className='hover:text-blue-400 transition duration-300'>Checkout</Link>
                </div>
                <div className='flex items-center space-x-4'>Cart!</div>
            </div>
        </nav>
    )
}

export default Navbar
