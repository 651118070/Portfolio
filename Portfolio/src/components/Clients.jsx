import React from 'react'
import logo from '../assets/formons.jpeg'
import logo1 from '../assets/nor.png'
import logo2 from '../assets/yae.png'
export default function Clients() {
  return (
    <div className='flex flex-col justify-center items-center py-20 '>
      <h1 className=' text-3xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-[#4169E1] to-blue-300  mb-12 text-center dark:text-white'>Clients</h1>
      <p className='text-gray-600 dark:text-gray-300 text-xl animate-pulse '>Proud to have worked with amazing companies.</p>
      <div className='flex justify-center items-center gap-10 mt-10'>
<img className='rounded-full w-20' src={logo} alt="logo of formons les meilleurs" />

<img className="rounded-full w-20" src={logo1} alt="logo of le normalien" />
<img className="w-40 rounded-full" src={logo2} alt="logo de yarabyte" />

      </div>
    </div>
  )
}
