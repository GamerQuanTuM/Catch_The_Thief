"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Select from 'react-select'
import axios from 'axios'

import { useSelectedCityStore } from '@/hooks/useSelectedCity'
import { Button } from './ui/button'
import Modal from './Modal'

export default function Vehicle({ vehicle }: { vehicle: Vehicle[] }) {
    const { selectedCity } = useSelectedCityStore()

    const [vehicleSelect, setVehicleSelect] = useState<any>([])
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => setVehicleSelect(vehicle), [vehicle])

    const [selectedVehicleForCop1, setSelectedVehicleForCop1] = useState<Vehicle | null>(null)
    const [selectedVehicleForCop2, setSelectedVehicleForCop2] = useState<Vehicle | null>(null)
    const [selectedVehicleForCop3, setSelectedVehicleForCop3] = useState<Vehicle | null>(null)

    const [dataForCop1, setDataForCop1] = useState<{ name: string, count: number } | null>(null)
    const [dataForCop2, setDataForCop2] = useState<{ name: string, count: number } | null>(null)
    const [dataForCop3, setDataForCop3] = useState<{ name: string, count: number } | null>(null)

    const [winner, setWinner] = useState<{ name: string; count: number; cop: string; place: string } | string | null>(null);

    const [errorCop1, setErrorCop1] = useState<string | null>(null);
    const [errorCop2, setErrorCop2] = useState<string | null>(null);
    const [errorCop3, setErrorCop3] = useState<string | null>(null);


    const handleSelectChangeForCop1 = (selectedVehicle: any) => {
        if (selectedVehicleForCop1) {
            const previousVehicleIndex = selectedVehicleForCop1.id;
            const updatedVehicles = [...vehicleSelect];
            updatedVehicles[previousVehicleIndex].count += 1;
            setVehicleSelect(updatedVehicles);
        }

        setSelectedVehicleForCop1(selectedVehicle);
        const selected = {
            name: selectedVehicle.value,
            count: 1,
            cop: "Cop1",
            place: selectedCity && selectedCity[0].value
        };
        setDataForCop1(selected);

        const updatedVehicles = [...vehicleSelect];
        if (updatedVehicles[selectedVehicle.id].count === 0) {
            setErrorCop1("No more vehicles available");
            return;
        } else {
            updatedVehicles[selectedVehicle.id].count -= 1;
            setErrorCop1(null);
        }

        setVehicleSelect(updatedVehicles);

        if (selectedVehicle && selectedCity && selectedVehicle.mileage < selectedCity[0]?.distance * 2) {
            setErrorCop1("Mileage is less than the distance to cover");
        } else {
            setErrorCop1(null);
        }
    };

    const handleSelectChangeForCop2 = (selectedVehicle: any) => {
        if (selectedVehicleForCop2) {
            const previousVehicleIndex = selectedVehicleForCop2.id;
            const updatedVehicles = [...vehicleSelect];
            updatedVehicles[previousVehicleIndex].count += 1;
            setVehicleSelect(updatedVehicles);
        }

        setSelectedVehicleForCop2(selectedVehicle);
        const selected = {
            name: selectedVehicle.value,
            count: 1,
            cop: "Cop2",
            place: selectedCity && selectedCity[1].value
        };
        setDataForCop2(selected);

        const updatedVehicles = [...vehicleSelect];
        if (updatedVehicles[selectedVehicle.id].count === 0) {
            setErrorCop2("No more vehicles available");
            return;
        } else {
            updatedVehicles[selectedVehicle.id].count -= 1;
            setErrorCop2(null);
        }

        setVehicleSelect(updatedVehicles);

        if (selectedVehicle && selectedCity && selectedVehicle.mileage < selectedCity[1]?.distance * 2) {
            setErrorCop2("Mileage is less than the distance to cover");
        } else {
            setErrorCop2(null);
        }
    };

    const handleSelectChangeForCop3 = (selectedVehicle: any) => {
        if (selectedVehicleForCop3) {
            const previousVehicleIndex = selectedVehicleForCop3.id;
            const updatedVehicles = [...vehicleSelect];
            updatedVehicles[previousVehicleIndex].count += 1;
            setVehicleSelect(updatedVehicles);
        }

        setSelectedVehicleForCop3(selectedVehicle);
        const selected = {
            name: selectedVehicle.value,
            count: 1,
            cop: "Cop3",
            place: selectedCity && selectedCity[2].value
        };
        setDataForCop3(selected);

        const updatedVehicles = [...vehicleSelect];
        if (updatedVehicles[selectedVehicle.id].count === 0) {
            setErrorCop3("No more vehicles available");
            return;
        } else {
            updatedVehicles[selectedVehicle.id].count -= 1;
            setErrorCop3(null);
        }

        setVehicleSelect(updatedVehicles);

        if (selectedVehicle && selectedCity && selectedVehicle.mileage < selectedCity[2]?.distance * 2) {
            setErrorCop3("Mileage is less than the distance to cover");
        } else {
            setErrorCop3(null);
        }
    };

    const handleDataSubmit = async () => {
        try {
            const { data } = await axios.post('http://localhost:3000/api/winner', [dataForCop1, dataForCop2, dataForCop3]);
            setWinner(data.message)
            setIsOpen(true)
        } catch (error) {
            console.error('Error sending data to the backend:', error);
        }
    }


    return (
        <>
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
                                    <Select value={selectedVehicleForCop1} onChange={handleSelectChangeForCop1} placeholder="Select a car" className='w-[10rem] lg:w-[20rem]' options={vehicleSelect} />
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
                                    <Select value={selectedVehicleForCop2} onChange={handleSelectChangeForCop2} placeholder="Select a car" className='w-[10rem] lg:w-[20rem]' options={vehicleSelect} />
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
                                    <Select value={selectedVehicleForCop3} onChange={handleSelectChangeForCop3} placeholder="Select a car" className='w-[10rem] lg:w-[20rem]' options={vehicleSelect} />
                                </div>

                            </div>
                            <div>
                                {selectedVehicleForCop3 && !errorCop3 && <h2 className='text-white text-xl'>Mileage : <span>{selectedVehicleForCop3 && selectedVehicleForCop3.mileage} kms</span></h2>}
                            </div>
                            <span>{errorCop3 && <p className='text-red-700 text-sm'>{errorCop3}</p>}</span>
                        </div>
                    </div>
                </div>
                <Button disabled={!!errorCop1 || !!errorCop2 || !!errorCop3} onClick={handleDataSubmit} className='disabled:cursor-not-allowed mt-10 lg:mt-44 flex justify-center w-[50%] mb-5 lg:mb-0 lg:w-[10%] mx-auto bg-red-600 hover:bg-red-500 text-xl'>CHECK</Button>

            </div>
            {isOpen &&
                <Modal isOpen={isOpen} onClose={closeModal}>
                    <div>
                        <h1 className="text-xl font-bold mb-4 text-center">Result</h1>
                        <div>
                            {winner && typeof winner === 'object' && (
                                <h1 className='text-xl'>Police {winner.cop} found out the thief in place {winner.place}</h1>
                            )}
                            {typeof winner === 'string' && (
                                <h1 className='text-xl'>No Police has able to find the thief</h1>
                            )}
                        </div>
                        <Button className='bg-green-600 hover:bg-green-500 flex justify-center w-[40%] mx-auto mt-3'
                            onClick={() => {
                                router.refresh()
                                router.push("/")
                            }}>Play Again</Button>
                    </div>
                </Modal>
            }
        </>
    )
}
