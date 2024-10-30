import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>

        <h3 className='text-2xl font-bold text-center text-orange-500'>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src="https://i.pinimg.com/564x/e8/03/16/e80316d006e91ff02f3b49e61a0051c0.jpg" alt="" />
            <div className=' mx-auto flex flex-col justify-center'>
                <p className='text-2xl font-bold text-orange-500'>Easy To Order</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>The Tasty Way To Eat Healthy</h1>
                <p className='text-xl py-4 w-[400px] sm:text-xl md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, tempora.</p>
                <button className='w-[200px] bg-orange-500 text-white px-4 py-2 rounded-md md:mx-0'>Order Now</button>
            </div>
            
        </div>
    </div>
  )
}

export default Delivery