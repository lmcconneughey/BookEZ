'use client'

import { toast } from 'react-toastify';
import { useContext } from "react"
import { StoreContext } from "../../context/index"
import { TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image"


const CartItems = () => {
    const {cartData, setCartData} = useContext(StoreContext);
  
    const removeItem = (event, id, title) => {
        event.preventDefault();
      
        const filteredItem = cartData.filter((item) => {
            return item.id !== id;
        });
        //console.log(filteredItem); works!       
        setCartData([...filteredItem]);
        
        toast.success(`${title} has been removed from the Cart successfully!`, {
            position: "top-right",
            autoClose: 1000,
        });       
    }
  
    return(
      <div className="w-full max-w-xs bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="bg-gray-100 text-md mb-2 h-13 p-1 m-1 shadow-lg rounded-md text-gray-500">{cartData.length} Items in Cart</h2>
        <ul>
        {
          cartData.map((item) => (
            <li 
              key={item.id}
              className="p-2 m-2 rounded-md flex bg-gray-200">
              <div className="bg-gray-400 text-white text-center h-[30px] w-[30px] rounded-full pt-1">{item.type === "Buy" ? 'B' : 'R'}</div>
                <div className="mb-2 h-13 p-1 m-1 shadow-lg">
                    <Image 
                    className="mr-2 rounded-md"
                    src={item.cover} 
                    alt={item.title} 
                    width={150} 
                    height={100} 
                    style={{height: '100px', width: 'auto'}}
                    priority={true} 
                    />
                </div> 
              <div className="flex flex-col pt-1 ml-2 text-xs">
                {item.title}
                <p className="ml-1 pt-1 text-slate-500">{item.type === "Buy" ? `$${item.sellPrice}` : `$${item.rentPrice}`}</p>
              </div>
              <a 
                className="ml-3 mt-1 cursor-pointer"
                onClick = {(event) => removeItem(event, item.id, item.title)}>
                <TrashIcon className="w-6"/>
              </a>
            </li>
          ))
        }
        </ul>
    </div>
    )
  }
  
  export default CartItems;