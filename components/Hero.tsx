import React from 'react'
import Ripple from './ui/ripple'
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg '>
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-blue-700">
        Lumi
      </p>
      <Button className="z-10 mt-4">
        <Link href="#child">
        <p className="z-10 whitespace-pre-wrap text-center font-bold tracking-tighter text-blue-400">
        Click to enlighten your finances.
        
      </p>
      
      </Link>
      </Button>
      
      <Ripple />
    </div>
  )
}

export default Hero;