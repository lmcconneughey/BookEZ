import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(String(process.env.MONGO_URI))
        return connection
    } catch (err) {
        console.log(`failed to fetch data from db ${err}`)
    }
}

export default dbConnect

