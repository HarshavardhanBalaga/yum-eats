import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaDribbbleSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='py-16 px-4 gap-8 text-gray-300 grid '>
          <h1 className='text-2xl font-bold'>Yumeats</h1>
          <p className='w-[50%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid earum voluptates cupiditate unde. Laudantium unde nesciunt ut culpa, quidem minima ad consequatur laborum voluptatem, nemo architecto maiores fugiat optio.</p>
          <div className='flex justify-start gap-3 md:w-[30%] my-6'>
            <FaFacebookF size={20} style={{marginRight: '10px'}} />
            <FaInstagram size={20} style={{marginRight: '10px'}} />
            <FaTwitter size={20} style={{marginRight: '10px'}} />
            <FaDribbbleSquare size={20} style={{marginRight: '10px'}} />
          </div>
        </div>

    </div>
  )
}

export default Footer