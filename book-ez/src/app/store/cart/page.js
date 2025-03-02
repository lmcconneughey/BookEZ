import OrderDetails from "@/app/ui/cart/OrderDetails";
import Payment from "@/app/ui/cart/Payment";



const CartPage = () => {
    return(
        <div className="p-2 flex flex-col w-full">
            <h2 className="text-2xl">Welcome to BookEz **${}dyn-User**</h2>
            <p>Thanks for your purchase</p>
            <div className="flex flex-wrap xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-10">              
                <OrderDetails />
                <Payment />
            </div>
        </div>
    )
}

export default CartPage