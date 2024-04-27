import { NextResponse } from "next/server";
import { City } from "@/constants/city";

type Data = {
    name: string,
    count: number,
    cop: string,
    place: string
}

export async function POST(req: Request) {
    const body: Data[] = await req.json();

    const randomCityIndex = Math.floor(Math.random() * City.length);
    const randomCity = City[randomCityIndex];

    let matchedData = body.find(data => data.place === randomCity.value);

    if (matchedData) {
        return NextResponse.json({ message: matchedData }, { status: 200 });
    } else {
        return NextResponse.json({ message: "No match found" }, { status: 200 });
    }
}
