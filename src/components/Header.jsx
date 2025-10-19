import React from 'react'

export default function Header() {
  return (
    <>
     <div className='flex justify-between items-center px-2 sm:px-10 md:px-20 py-2 bg-[#0082fe]'>
        <p className='text-white text-md sm:text-3xl font-medium animate-pulse'>
          DEMO Streaming
        </p>
      <nav className='flex gap-1 sm:gap-6 items-center'>
        <a href="#" className='text-white hover:text-gray-300 active:text-gray-400 text-[0.75rem] md:text-[1rem]'>
          Log in
        </a>
        <button className='rounded-[1px] bg-[#434343] text-white text-[0.75rem] md:text-[1rem] px-[0.2rem] sm:px-2 md:px-4 md:py-2 text-center'>
          Start your free trial
        </button>
      </nav>
    </div>

    </>
   
  )
}
