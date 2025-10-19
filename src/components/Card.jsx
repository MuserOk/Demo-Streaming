import React from 'react'
import { Link } from 'react-router-dom'


export default function Card({title, image, to}) {
  console.log(title, image, to);
  
  return (
    <>
    <div className='flex flex-col m-auto w-30 sm:w-50'>
      <div className='flex flex-col items-center'>
        <Link to={to} className='relative bg-[#1e1e1e] justify-center items-center flex w-40 h-56 sm:w-50 sm:h-70 overflow-hidden'>
          <img className='w-30 h-16 sm:w-50 sm:h-30 scale-200' src={image} alt="placeholder" />
          <h3 className='absolute text-white text-3xl sm:text-5xl font-medium'>
            {title}
          </h3>
        </Link>
      </div>
      <p className='pt-1'>Popular {to}</p>
      </div>
    </>
  )
}
