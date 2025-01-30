import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'



const Contact = () => {
  return (
    <>
    <div>
      <div className='text-2xl text-center pt-10 pb-10 border-t border-gray-300 dark:border-gray-700'>
       <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-10 mb-28' >
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-2'>
          <p className='font-semibold text-2xl text-gray-600 dark:text-gray-200'>Our Store</p>
          <p className='text-gray-500 dark:text-gray-300'>560037 Munnekollal
            <br />
            Site no 93,Bengaluru, India
          </p>

          <p className='text-gray-500 dark:text-gray-300 mb-4'>
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <p className='font-semibold text-2xl text-gray-600 dark:text-gray-200'>Careers at Forever</p>
          <p className='text-gray-500 dark:text-gray-300'>Learn more about our teams and job openings.</p>
          <button className='mt-2 border border-black dark:border-slate-100 px-8 py-4 text-sm hover:bg-black dark:hover:bg-slate-100 hover:text-white dark:hover:text-black transition-all duration-500 rounded-md'>Explore Jobs</button>
        </div>
      </div>
    </div>
    <NewsLetter/>
    </>
  )
}

export default Contact
