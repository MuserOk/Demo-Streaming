import React from 'react'
import useEntries from "../hooks/useEntries"

export default function Movies() {

  const { data, loading, error } = useEntries("movie")
    
    if (loading) {return
    <>
      <p className='bg-[#414141] text-sm text-white py-2 sm:pl-10 pl-2 md:pl-20 sm:text-lg font-medium '>
        Popular Movies
      </p>
      <p className="text-center text-gray-600 pl-4 sm:pl-10 md:pl-20">Loading...</p>;
    </>}
  
    if (error){return
    <>
      <p className='bg-[#414141] text-sm text-white py-2 sm:pl-10 pl-2 md:pl-20 sm:text-lg font-medium '>
        Popular Movies
      </p>
      <p className="text-center text-red-500 p-8">Oops, something went wrong...</p>;
    </>}
  


  return (
    <>
      <p className='bg-[#414141] text-sm text-white py-2 sm:pl-10 pl-2 md:pl-20 sm:text-lg font-medium '>
        Popular Movies
      </p>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 px-4 sm:px-10 md:px-20 py-4">
        {data.map((item) => (
          <div key={item.title} className='flex flex-col justify-start gap-2 pb-4'>
          <div className="bg-gray-800 rounded overflow-hidden shadow-lg w-30 h-46">
            <img src={item.images["Poster Art"].url} alt={item.title} className="w-full object-cover" />
          </div>
          <h3 className="font-semibold text-lg">Program {item.title}</h3>
          </div>
        ))}
      </div>
    </>
  )

}
