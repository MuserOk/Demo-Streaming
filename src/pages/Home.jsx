import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-col sm:flex-row m-auto w-51 gap-4 max-w-105 sm:ml-20 md:ml-30 pt-10 pb-10 sm:pb-20 md:pb-30'> 
        <div className='flex flex-col m-auto w-50'>
            <div className='flex flex-col items-center'>
                <div className='relative bg-gray-900 justify-center items-center flex w-50 h-70 overflow-hidden'>
                    <img className='w-50 h-30 scale-200' src="/images/placeholder.png" alt="placeholder" />
                    <h3 className='absolute text-white text-5xl font-medium'>SERIES</h3>
                </div>
            </div>
            <p className='pt-1'>Popular Series</p>
        </div>
        <div className='flex flex-col m-auto w-50'>
            <div className='flex flex-col items-center'>
                <div className='relative bg-gray-900 justify-center items-center flex w-50 h-70 overflow-hidden'>
                    <img className='w-50 h-30 scale-200' src="/images/placeholder.png" alt="placeholder" />
                    <h3 className='absolute text-white text-5xl font-medium'>MOVIES</h3>
                </div>
            </div>
            <p className='pt-1'>Popular Movies</p>
        </div>
        </div>
    )
}
