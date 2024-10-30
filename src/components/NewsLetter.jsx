import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 bg-[#24262b]'>
        <div className='grid mx-auto  lg:grid-cols-3'>
            <div className='col-span-2 p-4 my-4'>
                <h1 className='text-3xl font-bold'>Want to get the latest food news?</h1>
                <p className='text-lg'>Subscribe to our newsletter and get the latest news and updates about the food industry.</p>
            </div>
            <div>

            <div className=' py-4 mt-4 flex flex-col sm:flex-row'>
                    <input type="email" placeholder='Enter your email' className='p-3 my-2 rounded-md focus:outline-none'  />
                    <button className='bg-orange-500 text-white rounded-md p-3 my-2 mx-2'>Subscribe</button>
            </div>
            <p className=' text-sm text-gray-400 '>We care about your privacy. <span className='text-orange-500'>Privacy Policy</span></p>
            </div>
        </div>
           
        
    </div>
  )
}

export default NewsLetter