import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex sm:gap-2 gap-1 mb-3 items-center'>
      <p className='text-gray-500 dark:text-[#9CA3AF]'>{text1} <span className='text-gray-700 dark:text-[#D1D5DB] font-medium'>{text2}</span></p>
      <p className='w-8 sm:w-11 h-[1px] sm:h-[2px] bg-gray-700 dark:bg-[#D1D5DB]'></p>
    </div>
  )
}

export default Title
