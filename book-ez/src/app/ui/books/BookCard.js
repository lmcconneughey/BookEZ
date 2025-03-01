import Image from "next/image"
import Link from "next/link"
import AddtoCart from "./AddtoCart"
// linked book by its ID 
const BookCard = ({book}) => {
    return (
        <Link href={`/store/${book.id}`} >
            <div className="flex flex-col items-center rounded-xl bg-gray-500 p-2 m-2 shadow-sm">
                <div className="mb-2 h-13">
                    <Image 
                        className="mr-2 rounded-md"
                        src={book.cover} 
                        alt={book.title} 
                        width={150} 
                        height={100} 
                        style={{height: '200px', width: 'auto'}}
                        priority={true} />
                </div>
                <h1>{book.title}</h1>
                <p>{book.author}</p>
                <p>Rent for ${book.rentPrice}</p>
                <p>Buy for ${book.sellPrice}</p>
               {/**add conditional render for if book is rented and a count for how many books are rented */}
               <AddtoCart book={book} />
            </div>
        </Link>
    )
}

export default BookCard