
import { auth } from "../../../auth"
import Image from "next/image"
import { redirect } from "next/navigation"
import Logout from "../../ui/log-in-out-form/Logout"

const HomePage = async () => {
    
    const session = await auth()

    if(!session?.user) redirect("/store")//<< 
    console.log(session)
    return(
        <div>
            <div>
                User Home Page
            </div>
            <div className="flax flex-col items-center m-4">
                <h1>{session?.user?.name}</h1>
                <Image 
                    src={session?.user?.image}
                    alt={session?.user?.name} 
                    width={72}
                    height={72}
                    className="rounded-full"
                />
            </div>
            <div>
                <Logout />
            </div>
        </div>
        
    )
}

export default HomePage