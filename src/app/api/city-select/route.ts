import { NextResponse } from "next/server";
import { City } from "@/constants/city"

export async function GET(req: Request) {
    return NextResponse.json({ message: City }, { status: 200 })
}