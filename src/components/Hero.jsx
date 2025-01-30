import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* left section */}
      <div className='w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0'>
        <div className='text-[#414141] dark:text-[#D4D4D4]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141] dark:bg-[#D4D4D4]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
            </div>
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141] dark:bg-[#D4D4D4]'></p>
            </div>
        </div>
      </div>  
        {/*right section  */}
        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Image" />
    </div>
  )
}

export default Hero
