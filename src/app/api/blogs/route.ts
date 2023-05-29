import { NextRequest, NextResponse } from "next/server";

function database() {
    return [
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
        { name: 11 },
        { name: 12 },
        { name: 13 },
        { name: 14 },
        { name: 15 },
        { name: 16 },
        { name: 17 },
        { name: 18 },
        { name: 19 },
        { name: 20 },
        { name: 21 },
        { name: 22 },
        { name: 23 },
        { name: 24 },
        { name: 25 },
        { name: 26 },
        { name: 27 },
        { name: 28 },
        { name: 29 },
        { name: 30 },
        { name: 31 },
        { name: 32 },
        { name: 33 },
        { name: 34 },
        { name: 35 },
        { name: 36 },
        { name: 37 },
        { name: 38 },
        { name: 39 },
        { name: 40 },
        { name: 42 },
        { name: 43 },
        { name: 44 },
        { name: 45 },
    ]
}


export async function GET(request: NextRequest) {

    let res = request.nextUrl.searchParams;
    let arrayOfOrignal = database();

    if (res.has("start") && res.has("end")) {

        if (arrayOfOrignal[(Number(res.get("start")))]) {
            let sortedData = arrayOfOrignal.slice(Number(res.get("start")), Number(res.get("end")))
            return NextResponse.json({ sortedData })
        } else {
            return NextResponse.json({ sortedData: "Not found" })
        }
    }

    return NextResponse.json({ array: arrayOfOrignal })
}