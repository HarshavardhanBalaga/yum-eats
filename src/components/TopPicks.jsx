import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import { topPicks } from '../data/data';

const TopPicks = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-orange-500 text-center py-2'>Top Picks</h1>
        <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-4'>
           <Splide options={{
            perPage: 4,
            gap: '1rem',
           }}>
                {topPicks.map((item) => (
                    <SplideSlide key={item.id}>
                    <div 
                        className='rounded-lg drop-shadow-lg hover:scale-105 duration-300 m-2 p-4 w-full h-48 bg-cover bg-center flex flex-col justify-end'
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                        <div className=' flex flex-col justify-center items-center rounded-lg p-2'>
                            <h2 className='text-lg font-bold text-orange-500 bg-white/60 backdrop-blur-md w-1/2 text-center'>{item.title}</h2>
                            <p className='text-white bg-black/60  backdrop-blur-md w-1/2 text-center mt-1'>{item.price}</p>
                            <button className='bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-lg flex items-center justify-center w-1/2 mx-auto px-4 py-2 mt-2'>Add to cart</button>
                        </div>
                    </div>
                    </SplideSlide>
                    ))}

           </Splide>
            
            <div className='flex justify-center items-center'>
                
            </div>
        </div>
    </div>
  )
}

export default TopPicks