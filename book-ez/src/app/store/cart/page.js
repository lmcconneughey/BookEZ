import OrderDetails from "../../ui/cart/OrderDetails";
import Payment from "../../ui/cart/Payment";
import CartItems from "../../ui/cart/CartItems";
import { auth } from "../../../auth";

const CartPage = async () => {
    const session = await auth()
    //console.log(session?.user?.name);
    
    return(
        <div className="p-2 flex flex-col w-full">
            <h2 className="text-2xl">Welcome to BookEz {session?.user?.name}</h2>
            <p>Thanks for your purchase</p>
            <div className="flex flex-wrap xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-10">              
                <OrderDetails />
                <CartItems />
                <Payment />               
            </div>
        </div>
    )
}

export default CartPage