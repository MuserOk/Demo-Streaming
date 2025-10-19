import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='text-[0.5rem] md:text-[1rem] px-2 sm:px-10 md:px-20 py-2 sm:py-4 md:py-8 bg-[#1e1e1e] text-white flex flex-col justify-center '>
            <nav className='pt-2 md:pt-4 font-medium'>
                <Link className='pr-2 sm:pr-4' to="/">Home</Link>
                <a href="#" className='px-2 sm:px-4 border-r-1  border-l-1'>Terms and Conditions</a>
                <a href="#" className='px-2 sm:px-4'>Privacy Policy</a>
                <a href="#" className='px-2 sm:px-4 border-r-1  border-l-1'>Collection Statement</a>
                <a href="#" className='px-2 sm:px-4'>Help</a>
                <a href="#" className='px-2 sm:px-4 border-r-1  border-l-1'>Manage Account</a>
            </nav>
            <p className='pt-2 md:pt-4 text-[05] md:text-[1rem]'>Copyright © 2016 DEMO Streaming All Rights Reserved</p>
            <div className='flex justify-between items-center pt-6 md:pt-10'>
                <div className='flex gap-2 sm:gap-4 md:gap-6 justify-center items-center'>
                    <a href="#">
                        <img className='w-2.5 sm:w-6' src="/images/social/facebook-white.svg" alt="" />
                    </a>
                    <a href="#">
                        <img className='w-5 sm:w-11' src="/images/social/twitter-white.svg" alt="" />
                    </a>
                    <a href="#">
                        <img className='w-4 sm:w-10' src="/images/social/instagram-white.svg" alt="" />
                    </a>
                </div>
                <div className='flex flex-col md:flex-row  gap-2 md:gap-4' >
                    <button>
                        <img className='h-6 sm:h-8 md:h-12' src="/images/store/app-store.svg" alt="" />
                    </button>
                    <button>
                        <img className='h-6 sm:h-8 md:h-12' src="/images/store/play-store.svg" alt="" />
                    </button>
                    <button>
                        <img className='h-6 sm:h-8 md:h-12' src="/images/store/windows-store.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
