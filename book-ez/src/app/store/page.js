import { getAllBooks } from "../../db/queries";
import BookList from "../ui/books/BookList.js";

const BookListPage = async () => {
const books = await getAllBooks()
//console.log(books); works!


    return(
        <div className="">
            <BookList books={books}/>
        </div>
        
        
    )
}

export default BookListPage