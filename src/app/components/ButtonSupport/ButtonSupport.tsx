import React from 'react'
import Image from 'next/image';

export default function ButtonSupport() {
  return (
    <button className='flex flex-col items-center p-1'>
        <Image src='/contact.svg' alt='menu SVG' width={40} height={40} priority={true} />
        <div>Suppot</div>
    </button>
    
  )
}
