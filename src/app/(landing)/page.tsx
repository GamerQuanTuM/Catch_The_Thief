"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { StepForwardIcon } from "lucide-react"

import Bg from "@/assets/landing.jpg"
import Logo from "@/assets/logo.png"
import { Button } from '@/components/ui/button'

export default function Landing() {
  const router = useRouter()
  return (
    <main className='w-screen h-screen relative' style={{ backgroundImage: `url(${Bg.src})` }}>
      <div className='h-full w-full flex justify-center'>
        <div className='h-20 mt-48 lg:mt-24'>
          <Image className='object-contain h-60 w-60 lg:h-[30rem] lg:w-[30rem]' src={Logo} width={500} height={500} alt='Logo.png' />
        </div>
      </div>

      <div className='absolute bottom-32 left-1/2 transform -translate-x-1/2 '>
        <Button className='h-16 w-44 bg-red-600 rounded-xl hover:bg-red-400 flex gap-3' onClick={() => router.push("city-select")}>
          <StepForwardIcon height={35} width={35} />
          <p className='text-2xl'>START</p>
        </Button>
      </div>
    </main>
  )
}
