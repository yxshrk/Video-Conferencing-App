import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full'>
        <Image 
          src="/icons/YRK Conferencing (5).png"
          alt="Logo"
          width={300}
          height={300}
        />
        <Image 
            src="/icons/loading-circle.svg"
            alt="Loading"
            width={50}
            height={50}
        />
    </div>
  )
}

export default Loader