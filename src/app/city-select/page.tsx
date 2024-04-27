"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Image from 'next/image'
import City from '@/components/City'



export default function CitySelect() {
    const [city, setCity] = useState<City[]>([])
    useEffect(() => {
        const citySelect = async () => {
            const { data } = await axios.get("http://localhost:3000/api/city-select")
            setCity(data.message)
        }
        citySelect()
    }, [])

    return (
        <City city={city} />
    )
}
