import { NextResponse } from "next/server";
import { Vehicle } from "@/constants/vehicle"

export async function GET(req: Request) {
    return NextResponse.json({ message: Vehicle }, { status: 200 })
}