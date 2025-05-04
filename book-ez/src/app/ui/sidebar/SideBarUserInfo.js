import avImage from "../../../../public/home/gRnAude0_400x400.png"
import Image from "next/image"


const SidebarUserInfo = () => { 
    // move the image inside the bourder
    return(
        <div className="flex flex-col items-center border-20 mt-6 ">
            <div className="">
                <Image 
                    className=" object-cover w-24 h-24 rounded-full" 
                    height={200} width={200} 
                    src={avImage}
                    alt="avatar"
                />
            </div>
        <h4 className="mx-2 mt-2 font-medium text-gray-800" > John Doe</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
       </div>
    )
}

export default SidebarUserInfo