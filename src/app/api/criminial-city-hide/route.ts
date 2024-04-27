import { NextResponse } from "next/server";
import { City } from "@/constants/city"

export async function GET(req: Request) {
    let randomCity = Math.floor(Math.random() * 5);
    return NextResponse.json({ message: City[randomCity] }, { status: 200 })
}