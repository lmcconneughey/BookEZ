import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createUser } from "../../../db/queries";
import dbConnect from "../../../services/mongo";
import bcrypt from "bcryptjs"

export const POST = async (request) => {
    const {name, email, password} = await request.json()//<< the names on our registration form
    console.log(name, email, password);
    
    // [x] Create DB Connection Obj
    await dbConnect()
    // [x] Encrypt Password
    const hashedPassword = await bcrypt.hash(password, 5)
    // [x] Form DB Payload
    const newUser = {
       name,
       password: hashedPassword, //<< password is changed to hashed password  
       email
    }
    // [x] Update DB
    try {
        await createUser(newUser)
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        })
    }
    

    return new NextResponse("User has been created", {
        status: 201
    })
}