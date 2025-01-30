import React from 'react'

const NewsLetter = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 dark:text-gray-100'>Subscribe now & get 20% off</p>
        <p className='text-xs sm:text-sm text-gray-400 dark:text-gray-300 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cupiditate odit laborum quibusdam blanditiis voluptates.</p>
        <form onSubmit={(e) => e.preventDefault()}  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border dark:border-gray-600 pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none dark:bg-gray-900' required />
            <button className='bg-black dark:bg-slate-100 text-white dark:text-black text-sm px-8 py-4 hover:shadow-xl'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter
