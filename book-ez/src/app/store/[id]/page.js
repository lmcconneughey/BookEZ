'use client'
import * as React from 'react'
import { getBookById } from '../../lib/fake-data'
import Image from "next/image"

const BookDetailsPage = ({params}) => {
    const { id } = React.use(params)
    const book = getBookById(id)
    
    return(
        <div className=" grid place-content-center gap-1 max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <Image 
                className="mr-2 rounded-md"
                src={book.cover} 
                alt={book.title} 
                width={150} 
                height={100} 
                style={{height: '300px', width: 'auto'}}
                priority={true} />
            <div className="relative border border-gray-100 bg-white p-6">

                <h3 className="text-center mt-1 text-lg font-medium text-gray-900">{book.title}</h3>

                <p className="text-center mt-1.5 text-sm text-gray-700"> Rent for ${book.rentPrice}</p>
                <p className="text-center mt-1.5 text-sm text-gray-700">Own for ${book.sellPrice}</p>
                <div>
                    <ul className="mt-1.5 text-xs text-gray-700">
                        <li className="text-center">Author: {book.author}</li>
                        <li className="text-center">Description: {book.description}</li>
                        <li className="text-center">Genre: {book.genre}</li>
                        <li className="text-center">Pages: {book.pages}</li>
                        <li className="text-center text-sm text-red-400">Stock: {book.stock}</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default BookDetailsPage