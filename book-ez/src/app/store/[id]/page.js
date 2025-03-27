
import * as React from 'react'
import { getBookById } from '../../../db/queries'
import Image from "next/image"

const BookDetailsPage = async ({params: {id}}) => {
    //const { id } = await React.use(params)
    const book = await getBookById(id)
    console.log(book);
    
    return(
        <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 w-96">
            <Image 
                className="mr-2 rounded-md"
                src={book.cover} 
                alt={book.title} 
                width={150} 
                height={100} 
                style={{height: '500px', width: 'auto'}}
                priority={true} />
            <div className="p-6 text-center">
                <h3 className="mb-1 text-xl font-semibold text-slate-800">{book.title}</h3>
                <p className="text-center mt-1.5 text-sm text-gray-700"> Rent for ${book.rentPrice}</p>
                <p className="text-center mt-1.5 text-sm text-gray-700">Own for ${book.sellPrice}</p>
                <div>
                    <ul className="mt-1.5 text-xs text-gray-700">
                        <li className="text-sm font-semibold text-slate-500 uppercase">Author: {book.author}</li>
                        <li className="text-base text-slate-600 mt-4 font-light">Description: {book.description}</li>
                        <li className="text-sm font-semibold text-slate-500 uppercase">Genre: {book.genre}</li>
                        <li className="text-sm font-semibold text-slate-500 uppercase">Pages: {book.pages}</li>
                        <li className="text-center text-sm text-red-400">Stock: {book.stock}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookDetailsPage