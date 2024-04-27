"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { Carousel, CarouselContent, CarouselPrevious, CarouselNext, CarouselItem } from '@/components/ui/carousel'

import Cop1 from "@/assets/police/cop1.png"
import Cop2 from "@/assets/police/cop2.png"
import Cop3 from "@/assets/police/cop3.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Cops = [
    { name: "Cop1", id: 0, imageUrl: Cop1.src },
    { name: "Cop2", id: 1, imageUrl: Cop2.src },
    { name: "Cop2", id: 2, imageUrl: Cop3.src },

]


export default function CopsAvailable() {
    const router = useRouter()
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-screen overflow-hidden">
            <h1 className='pt-20 lg:pt-5 font-bold text-4xl text-white flex justify-center'>Cops Available</h1>
            <div className='w-[65%] h-[80%] mx-auto mt-10'>
                <Carousel>
                    <CarouselContent className='h-full'>
                        {Cops.map((cop) => (
                            <CarouselItem className='' key={cop.id}>
                                <Image src={cop.imageUrl} className='h-[20rem] lg:h-[35rem] w-[20rem] lg:w-full mx-auto object-cover' alt="Cop.png" height={500} width={500} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className='mt-5 mx-auto flex justify-center'>
                    <Button className='w-48 text-lg bg-red-600 text-white hover:bg-red-500' onClick={() => router.push("/vehicle-select")}>Next</Button>
                </div>
            </div>
        </div>
    )
}
