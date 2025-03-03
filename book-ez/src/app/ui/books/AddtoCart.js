'use client'

import { useContext } from "react";
import { StoreContext } from "../../context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import {toast} from "react-toastify";


const AddtoCart = ({book}) => {
    const {cartData, setCartData} = useContext(StoreContext);
    const handleCart = (e, reason) => {
        e.preventDefault()
        //console.log(book);
        const newData = {...book, type: reason};
        setCartData([...cartData, newData])
        //console.log(cartData);
        
        toast.success(`Added ${newData.title} to cart!`, {//<<documentation @ https://www.npmjs.com/package/react-toastify
            autoClose: 1000,
            position:"top-right",
        })
        
    }

    return (
        <div className="flex justify-around mt-5 border-t-2 p-2">
            <button 
                className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={(e) => handleCart(e, 'Buy')}
            >
                <ShoppingCartIcon className="w-5 mr-0.5 inline" /> to Buy</button>
            <button 
                className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                onClick={(e) => handleCart(e, 'Rent')}
            > 
            <ShoppingCartIcon className="w-5 mr-0.5 inline" />to Rent</button>
        </div>
    )

}

export default AddtoCart