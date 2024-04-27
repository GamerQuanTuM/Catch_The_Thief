import Select from 'react-select'
import { useRouter } from 'next/navigation'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { Button } from './ui/button';
import { useSelectedCityStore } from '@/hooks/useSelectedCity';



export default function City({ city }: { city: City[] }) {
    const router = useRouter()
    const { selectedCity, setSelectedCity } = useSelectedCityStore()

    const handleSelectChange = (selectedCity:any) => {
        if (selectedCity.length <= 3) {
            setSelectedCity(selectedCity);
        }
    };
    return (
        <div className="flex flex-col items-center gap-12 bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-screen">
            <h1 className='mt-20 lg:mt-5 font-bold text-4xl text-white'>City Selection</h1>
            <div className='flex flex-col justify-center'>
                <div className='w-[70%] lg:w-[30rem] mx-auto'>
                    <Select
                        value={selectedCity}
                        onChange={handleSelectChange}
                        isMulti
                        name="city"
                        options={city}
                        className="basic-multi-select w-full"
                        classNamePrefix="select"
                        placeholder="Select a city"
                    />
                </div>
                <div className='mt-5 w-[65%] lg:w-[30rem] mx-auto'>
                    <Carousel>
                        <CarouselContent>
                            {selectedCity?.map((city) => (
                                <CarouselItem key={city.id}>
                                    <Image src={city.imageUrl} alt='City.png' height={500} width={500} />
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                        {selectedCity && selectedCity?.length > 0 && <CarouselPrevious />}
                        {selectedCity && selectedCity?.length > 0 && <CarouselNext />}
                    </Carousel>
                </div>

                {selectedCity && selectedCity?.length > 0 && <div className='mt-5 flex justify-center'>
                    <Button className='w-48 text-lg bg-red-600 text-white hover:bg-red-500' disabled={selectedCity.length < 3} onClick={() => router.push("/cops-available")}>Next</Button>
                </div>}
            </div>
        </div>
    )
}
