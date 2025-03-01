import BookCard from "./BookCard"

const BookList = ({books}) => {

    return (
        <div>
            {books.map((book) => {
                return(
                    <BookCard key={book.id} book={book} />
                )
            })}
        </div>
    )

}

export default BookList