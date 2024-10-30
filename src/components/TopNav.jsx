import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'

const TopNav = () => {
    const [sidemenu, setSidemenu] = useState(false)
    
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={() => setSidemenu(!sidemenu)} className='cursor-pointer'>
                <AiOutlineMenu size={25} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Yum
                <span className='font-bold'> Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-sm'>
                <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>Free</p>
                <p className='p-2'>Delivery</p>
            </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}  />
            <input type='text' placeholder='Search' className='bg-transparent p-2 w-full focus:outline-none' />
        </div>
        <button className='bg-orange-700 text-white px-4 py-2 hidden md:flex items-center rounded-full'> <BsFillCartFill size={25} />  Cart </button>
        {sidemenu ? 
            <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0 duration-200'></div> : ("")
        }
        <div className={sidemenu ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed left-[-100%]'}>
            <AiOutlineClose className='absolute top-3 right-3 cursor-pointer' size={25} onClick={() => setSidemenu(!sidemenu)} />
                <h2 className='text-2xl p-2'>Yum <span className='font-bold text-orange-600'>Eats</span></h2>
                <BsPerson size={30} className='ml-3 text-white bg-black rounded-full p-1 cursor-pointer' />
            <div className='flex flex-col h-full'>
                <ul className='flex flex-col justify-start items-start p-4 text-gray-900 gap-4'>
                    <li className='text-2xl hover:text-orange-500 cursor-pointer transition-all duration-300'>Home</li>
                    <li className='text-2xl hover:text-orange-500 cursor-pointer transition-all duration-300'>Menu</li>
                    <li className='text-2xl hover:text-orange-500 cursor-pointer transition-all duration-300'>Delivery</li>
                    <li className='text-2xl hover:text-orange-500 cursor-pointer transition-all duration-300'>My Orders</li>
                    <li className='text-2xl hover:text-orange-500 cursor-pointer transition-all duration-300'>Help</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TopNav