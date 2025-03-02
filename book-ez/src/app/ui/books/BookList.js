import BookCard from "./BookCard"

const BookList = ({books}) => {

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {books.map((book) => {
                return(
                    
                    <BookCard key={book.id} book={book} />
                )
            })}
        </div>
    )

}

export default BookList