'use client'

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {toast} from "react-toastify";


const AddtoCart = ({book}) => {
    const handleCart = (e, reason) => {
        e.preventDefault()
        //console.log(book);
        const newData = {...book, type: reason};
       

   toast.success(`Added ${newData.title} to cart!`, {//<<documentation @ https://www.npmjs.com/package/react-toastify
        autoClose: 1000,
        position:"top-right",
        //transition: Bounce
    })
        
    }

    return (
        <div className="flex justify-around mt-5 border-t-2 p-2">
            <button 
                className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"
                onClick={(e) => handleCart(e, 'Buy')}
            >
                <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Buy</button>
            <button 
                className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"
                onClick={(e) => handleCart(e, 'Rent')}
            > 
            <ShoppingCartIcon className="w-5 mr-0.5 inline" />to Rent</button>
        </div>
    )

}

export default AddtoCart