import express from "express"
import {PrismaClient} from "@prisma/client"
import cors from "cors"
import { log } from "console"
import axios from "axios"

const app = express()
const prisma = new PrismaClient()
const Port = 8080

app.use(cors())
app.use(express.json())

// get all users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
    console.log(users)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

// get user by id
app.get("/users/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

// add new user
app.post("/users/add", async (req, res) => {
  try {
    
    const createUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
     
    })
    res.status(200).json(createUser)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})
// add books to data base inventory
app.post("/books/add", async (req, res) => {
  try {
    const newBook = await prisma.book.create({
      data: {
        title: "Moby Dick",
        description: "Herman Melville's Moby Dick is the story of Captain Ahab's self-destructive obsession with the white whale called Moby Dick. It is told through the narration of Ishmael, a sailor new to Ahab's ship, the Pequod. The plot of the novel follows Ahab's manic drive to kill the whale, even as it endangers his crew.",
        author: "Herman Melville",
        cover: "https://res.cloudinary.com/atapas/image/upload/v1711539686/litloop/books/mobydick_dqtkvc.jpg",
        genre: "Novels",
        pages: 320,
        isRented: false,
        stock: 10,
        rentPrice: 15,
        sellPrice: 120,
        sold: 1,
        ISBN: "1-86092-056-0"
      }
    })
    res.status(200).json(newBook)
    console.log("successfuly added new book" + newBook())
    res.status(500).json({message: error.message})
  } catch (error) {
    console.log(error.message)
  }
})
//get all books
app.get('/books', async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// update user
app.put("/users/:id", async (req, res) => {
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        name: req.body.name,
        email: req.body.email
      }
    })
    res.status(200).json(updateUser)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

// delete user
app.delete("/users/:id", async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id)
      }
    })
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
  }
})

// async function main() {
//   // ... you will write your Prisma Client queries here
 
  
//   await prisma.user.create({
//       data: {
//         name: '',
//         email: '',
//         password: ''  
//       },
//     })
//     const allUsers = await prisma.user.findMany()
//     console.dir(allUsers, { depth: null })    
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

// start server
app.listen(Port, () => {
    console.log(`Backend Server started on port ${Port}!`)
})