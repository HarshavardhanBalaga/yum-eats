import React from 'react'
import { categories } from '../data/data'

const Categories = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-orange-500 text-center py-2'>Trending Categories</h1>
        <p className='text-gray-500 text-lg text-center'>Choose your favorite category</p>
        <div className='ml-52 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-[1520px] m-auto py-4 px-4'>
            {categories.map((category) => (
                <div key={category.id} className='bg-orange-50 rounded-lg drop-shadow-lg hover:scale-105 duration-300 m-2 p-4 w-full'>
                    <img src={category.image} alt={category.name} className='w-full h-40 object-cover rounded-lg' />
                    <h2 className='text-lg font-bold text-orange-500 text-center mt-2'>{category.name}</h2>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Categories