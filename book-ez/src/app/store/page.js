import {getAllBooks} from "../lib/fake-data";
import BookList from "../ui/books/BookList.js";

const BookListPage =  () => {
const books = getAllBooks()
//console.log(books);


    return(
        <BookList books={books}/>
    )
}

export default BookListPage