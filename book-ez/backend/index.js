import express from "express"
import {PrismaClient} from "@prisma/client"
import cors from "cors"

const app = express()
const prisma = new PrismaClient()
const Port = 8080

app.use(cors())

app.get("/api/home", (req, res) => {
    res.json({message: "Whassup World"})
});
async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          password: "catsarenice" 
          
        },
      })
    
      const allUsers = await prisma.user.findMany()
      console.dir(allUsers, { depth: null })    
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

app.listen(Port, () => {
    console.log(`Backend Server started on port ${Port}!`)
})