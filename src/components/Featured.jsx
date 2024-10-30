import React, { useState } from 'react'
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
            url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'

        },
        {
            url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sliders.length - 1 : currentSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === sliders.length - 1 ? 0 : currentSlide + 1)
    }
  return (
    <div>
        <div className="max-w-[1520px] h-[500px] py-4 px-4 relative group">
            <div
             className="w-full h-full rounded-2xl bg-center bg-cover duration-500" 
             style={{backgroundImage: `url(${sliders[currentSlide].url})`}}>
             </div>
             <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/60 transition-all duration-300'>
                <BsArrowLeftShort size={30} onClick={prevSlide}/>
             </div>
             <div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/60 transition-all duration-300'>
                <BsArrowRightShort size={30} onClick={nextSlide}/>
             </div>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {sliders.map((slide, index) => (
                <div key={index} onClick={()=>{setCurrentSlide(index) } } className={`text-xl cursor-pointer ${currentSlide === index ? 'text-black' : 'text-gray-400'}  `}>
                    <RxDotFilled size={30}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Featured