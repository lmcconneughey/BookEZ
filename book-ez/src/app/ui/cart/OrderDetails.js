'use client'

import { useContext } from "react"
import { StoreContext } from "../../context/index"


const OrderDetails = () => {
   
    const {cartData} = useContext(StoreContext);

    const booksToBuy = cartData.filter((book) => {
        return book.type === 'Buy'
    });    
// we get a grand total price of books we want to buy
    const priceToBuy = booksToBuy.reduce((sum, book) => sum + book.sellPrice, 0) 

    const booksToRent = cartData.filter((book) => {
        return book.type === 'Rent'
    });
// we get a grand total price of books we want to rent
    const priceToRent = booksToRent.reduce((sum, book) => sum + book.rentPrice, 0) 
    const ShippingFee = 20.00
    const grandTotal = (p2b, p2r) => {
        // add priceToBuy, priceToRent, 20.00
        if(!p2b && !p2r){
            return 0.00
        } else {// 20.00 is shipping fee
            return p2b + p2r + ShippingFee
        }     
    }
    const total = grandTotal(priceToBuy, priceToRent)
    //console.log(booksToBuy, booksToRent);
    
     return(
        <div className="w-full bg-gray-500 rounded px-8 pt-6 pb-8 mb-4">
            <h2>OrderDetails</h2>
            
            {
                <ul >
                    <li>Buying {booksToBuy.length} books for ${priceToBuy}</li>
                    <li>Renting {booksToRent.length} books for ${priceToRent}</li>
                    <li>Shipping <span>${ShippingFee}</span></li>
                    <li>${total}</li>
                </ul>
            }
        </div>
    )
}

export default OrderDetails