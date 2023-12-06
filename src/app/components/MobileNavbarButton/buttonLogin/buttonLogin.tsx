import React from 'react'
import Image from 'next/image';

export default function buttonLogin() {
  return (
    <button className='flex flex-col items-center p-1 ml-5'
        type="button"
        aria-expanded="true"
        aria-haspopup="true"
        >
         <Image src='/account.svg' alt='menu SVG' width={20} height={20} priority={true} />
         <div>Login</div>
    </button>
   
  )
}

