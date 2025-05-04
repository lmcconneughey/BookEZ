// import {bookModel} from "../../models/book-model";
// import { replaceMongoIdInArray, replaceMongoIdInObject } from "../../utils/data-util";
// import {User} from "../../models/user-model"//<< incase user db error, clear this import

// async function getAllBooks() {
//    const allBooks = await bookModel.find().lean()
//    return replaceMongoIdInArray(allBooks)
// }

// async function getBookById(id) {
//    const book = await bookModel.findById(id).lean();
//    return replaceMongoIdInObject(book)
// }

// //-----------------------------------------------------

// async function createUser(user) {
//    try {
//       await User.create(user) 
//    } catch (error) {
//       throw new Error(error)
//    }
     
// }

// export {
//     getAllBooks,
//     getBookById,
//     createUser,
// }
