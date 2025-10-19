import React from 'react'
import { useState, useEffect } from 'react'


export default function MoreInfoCard({item, onClose}) {
    const popupStyles = {
        display: item ? 'flex' : 'none', 
    };

    if (!item || !onClose) {
        return null;
    }


    return (
        <div style={popupStyles} className='fixed inset-0 top-0 bg-gray-900/10 w-screen flex justify-center items-center h-screen'>
            <div className='mx-auto bg-gray-900/70 shadow-2xl w-[90%] h-100 md:w-[50%] md:h-[70%] rounded'>
                <div className='flex justify-end py-4 pr-4'>
                    <button  onClick={onClose}  className='cursor-pointer bg-gray-500/90 hover:bg-blue-400 active:bg-blue-500 w-10 h-10 text-2xl text-white font-bold rounded-sm'>X</button>
                </div>
                <div className='flex flex-col text-white font-medium items-center py-4 w-[90%] m-auto text-lg'>
                    <h2 className='py-1'>{item.title}</h2>
                    <p className='py-1'><strong>Description:</strong> {item.description}</p>
                    <p className='py-1'><strong>Release Year:</strong> {item.releaseYear} </p>
                    <p className='py-1'><strong>Poster:</strong>{item.images["Poster Art"].url}</p>
                </div>
            </div>
        </div>
    )
}
