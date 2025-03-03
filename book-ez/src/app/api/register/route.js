import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const {name, email, password} = await request.json()//<< the names on our registration form
    console.log(name, email, password);
    
    // [] Create DB Connection Obj

    // [] Encrypt Password

    // [] Form DB Payload

    // [] Update DB
    return new NextResponse("User has been created", {
        status: 201
    })
}