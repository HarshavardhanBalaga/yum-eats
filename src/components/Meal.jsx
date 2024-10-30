import React, { useState } from 'react'
import { mealsData } from '../data/data'

const Meal = () => {
  const [foods, setFoods] = useState(mealsData)
  const filterItems = (category) => {
    setFoods(
      mealsData.filter((item) => {
        return item.category === category
      })
    )
  }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-2xl font-bold text-orange-500 text-center py-2'>Meals</h1>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex justify-center md:justify-center'>
            <button 
              className='text-orange-500 font-semibold border-white hover:border-orange-500 border-2 transition-all duration-300 rounded-lg m-2 px-4 py-2'
              onClick={() => setFoods(mealsData)}
            >
              All
            </button>
            <button 
              className='text-orange-500 font-semibold border-white hover:border-orange-500 border-2 transition-all duration-300 rounded-lg m-2 px-4 py-2'
              onClick={() => filterItems('pizza')}
            >
              Pizza
            </button>
            <button 
              onClick={() => filterItems('burger')}
              className='text-orange-500 font-semibold border-white hover:border-orange-500 border-2 transition-all duration-300 rounded-lg m-2 px-4 py-2'
            >
              Burger
            </button>
            <button 
              onClick={() => filterItems('salad')}
              className='text-orange-500 font-semibold border-white hover:border-orange-500 border-2 transition-all duration-300 rounded-lg m-2 px-4 py-2'
            >
              Salad
            </button>
            <button 
              onClick={() => filterItems('chicken')}
              className='text-orange-500 font-semibold border-white hover:border-orange-500 border-2 transition-all duration-300 rounded-lg m-2 px-4 py-2'
            >
              Chicken
            </button>
          </div>

        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6'>
            {foods.map((meal) => (
                <div key={meal.id} className='bg-orange-50 rounded-lg drop-shadow-lg hover:scale-105 duration-300 m-2 p-4 w-full'>
                    <img src={meal.image} alt={meal.name} className='w-full h-40 object-cover rounded-lg' />
                    <p className='text-white h-14 w-14 flex justify-center items-center border-4 right-2 m-3 absolute top-[50%] bg-orange-700 rounded-full text-center mt-1'>{meal.price}</p>
                    <h2 className='text-lg font-bold mt-5'>{meal.name}</h2>
                    <button className='bg-transparent text-orange-500 border-2 border-orange-500 hover:bg-orange-200 transition-all duration-300 rounded-lg  mx-auto px-2 py-2 mt-2'>Add to cart</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Meal