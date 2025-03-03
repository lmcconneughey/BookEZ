import Image from "next/image"
import Link from "next/link"
import AddtoCart from "./AddtoCart"
// linked book by its ID 
const BookCard = ({book}) => {
    return (
        <Link href={`/store/${book.id}`} >
            <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-4 w-70 size-150">
                <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                    <Image 
                        className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"
                        src={book.cover} 
                        alt={book.title} 
                        width={150} 
                        height={100} 
                        //style={{height: '200px', width: 'auto'}}
                        priority={true} />
                </div>
                <div>
                    <div className="p-6 text-center">
                        <h1 className="mb-1 font-semibold text-slate-800">{book.title}</h1>
                        <p className="text-sm font-semibold text-slate-500 uppercase">{book.author}</p>
                        <p className="text-base text-slate-600 mt-1 font-light ">Rent for ${book.rentPrice}</p>
                        <p className="text-base text-slate-600 mt-1 font-light ">Buy for ${book.sellPrice}</p>
                    </div>
                </div>
               {/**add conditional render for if book is rented and a count for how many books are rented */}
               <AddtoCart book={book} />
            </div>
        </Link>
    )
}

export default BookCard