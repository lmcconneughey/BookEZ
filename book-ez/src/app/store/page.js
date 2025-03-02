import { getAllBooks } from "@/db/queries/index.js";
import BookList from "../ui/books/BookList.js";

const BookListPage = async () => {
const books = await getAllBooks()
//console.log(books); works!


    return(
        <BookList books={books}/>
    )
}

export default BookListPage