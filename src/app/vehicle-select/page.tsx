"use client"
import { useEffect, useState } from "react";
import axios from "axios";

import Vehicle from "@/components/Vehicle";

export default function VehicleSelect() {
    const [vehicle, setVehicle] = useState<Vehicle[]>([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/vehicle-select").then(({ data }) => setVehicle(data.message)).catch((err) => console.log(err))
    }, [])

    return (
        <Vehicle vehicle={vehicle} />
    )
}
