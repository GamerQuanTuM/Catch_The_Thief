import React, { useState } from 'react'
import Select from 'react-select'

import { useSelectedCityStore } from '@/hooks/useSelectedCity'

export default function Vehicle({ vehicle }: { vehicle: Vehicle[] }) {
    const { selectedCity } = useSelectedCityStore()

    const [selectedVehicleForCop1, setSelectedVehicleForCop1] = useState<Vehicle | null>(null)
    const [selectedVehicleForCop2, setSelectedVehicleForCop2] = useState<Vehicle | null>(null)
    const [selectedVehicleForCop3, setSelectedVehicleForCop3] = useState<Vehicle | null>(null)

    const [errorCop1, setErrorCop1] = useState<string | null>(null);
    const [errorCop2, setErrorCop2] = useState<string | null>(null);
    const [errorCop3, setErrorCop3] = useState<string | null>(null);

    const handleSelectChangeForCop1 = (selectedVehicle: any) => {
        setSelectedVehicleForCop1(selectedVehicle);
        if (selectedVehicle && selectedCity && selectedVehicle.mileage < selectedCity[0]?.distance * 2) {
            setErrorCop1("Mileage is less than the distance to cover");
        } else {
            setErrorCop1(null);
        }
    };

    const handleSelectChangeForCop2 = (selectedVehicle: any) => {
        setSelectedVehicleForCop2(selectedVehicle);
        if (selectedVehicle && selectedCity && selectedVehicle.mileage < selectedCity[1]?.distance * 2) {
            setErrorCop2("Mileage is less than the distance to cover");
        } else {
            setErrorCop2(null);
        }
    };

    const handleSelectChangeForCop3 = (selectedVehicle: any) => {
        setSelectedVehicleForCop3(selectedVehicle);
        if (selectedVehicle && selectedCity && selectedVehicle.mileage < selectedCity[2]?.distance * 2) {
            setErrorCop3("Mileage is less than the distance to cover");
        } else {
            setErrorCop3(null);
        }
    };



    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen w-screen overflow-auto lg:overflow-hidden">
            <h1 className='pt-20 lg:pt-5 font-bold text-4xl text-white flex justify-center'>Vehicle Selection</h1>
            <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row  mt-10 lg:mt-20 mx-5 lg:mx-10'>
                <div className='w-full lg:w-[33.33%]'>
                    <h1 className='flex justify-center text-2xl text-white font-medium'>First Cop</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='text-white text-xl'>Place: <span>{selectedCity && selectedCity[0]?.value}</span></h2>
                        <h2 className='text-white text-xl'>Distance to cover : <span>{selectedCity && selectedCity[0]?.distance * 2}  kms</span></h2>
                        <div className='flex gap-2 items-center'>
                            <h2 className='text-white text-xl'>Vehicle :</h2>
                            <div className='text-black'>
                                <Select value={selectedVehicleForCop1} onChange={handleSelectChangeForCop1} placeholder="Select a car" className='w-[10rem] lg:w-[20rem]' options={vehicle} />
                            </div>

                        </div>
                        <div>
                            {selectedVehicleForCop1 && !errorCop1 && <h2 className='text-white text-xl'>Mileage : <span>{selectedVehicleForCop1.mileage} kms</span></h2>}
                        </div>
                        <span>{errorCop1 && <p className='text-red-700 text-sm'>{errorCop1}</p>}</span>
                    </div>
                </div>
                <div className='w-full lg:w-[33.33%]'>
                    <h1 className='flex justify-center text-2xl text-white font-medium'>Second Cop</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='text-white text-xl'>Place: <span>{selectedCity && selectedCity[1]?.value}</span></h2>
                        <h2 className='text-white text-xl'>Distance to cover : <span>{selectedCity && selectedCity[1]?.distance * 2}  kms</span></h2>
                        <div className='flex gap-2 items-center'>
                            <h2 className='text-white text-xl'>Vehicle :</h2>
                            <div className='text-black'>
                                <Select value={selectedVehicleForCop2} onChange={handleSelectChangeForCop2} placeholder="Select a car" className='w-[10rem] lg:w-[20rem]' options={vehicle} />
                            </div>

                        </div>
                        <div>
                            {selectedVehicleForCop2 && !errorCop2 && <h2 className='text-white text-xl'>Mileage : <span>{selectedVehicleForCop2 && selectedVehicleForCop2.mileage} kms</span></h2>}
                        </div>
                        <span>{errorCop2 && <p className='text-red-700 text-sm'>{errorCop2}</p>}</span>
                    </div>
                </div>
                <div className='w-full lg:w-[33.33%]'>
                    <h1 className='flex justify-center text-2xl text-white font-medium'>Third Cop</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        <h2 className='text-white text-xl'>Place: <span>{selectedCity && selectedCity[2]?.value}</span></h2>
                        <h2 className='text-white text-xl'>Distance to cover : <span>{selectedCity && selectedCity[2]?.distance * 2}  kms</span></h2>
                        <div className='flex gap-2 items-center'>
                            <h2 className='text-white text-xl'>Vehicle :</h2>
                            <div className='text-black'>
                                <Select value={selectedVehicleForCop3} onChange={handleSelectChangeForCop3} placeholder="Select a car" className='w-[10rem] lg:w-[20rem]' options={vehicle} />
                            </div>

                        </div>
                        <div>
                            {selectedVehicleForCop3 && !errorCop3 && <h2 className='text-white text-xl'>Mileage : <span>{selectedVehicleForCop3 && selectedVehicleForCop3.mileage} kms</span></h2>}
                        </div>
                        <span>{errorCop3 && <p className='text-red-700 text-sm'>{errorCop3}</p>}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
