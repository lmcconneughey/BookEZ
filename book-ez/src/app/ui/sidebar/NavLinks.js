'use client'

import Link from "next/link";
import { useContext } from "react";
import { StoreContext } from "../../context";

import { 
    BookOpenIcon, 
    CogIcon, 
    ArrowLeftEndOnRectangleIcon,
    HomeIcon, 
    RectangleStackIcon, 
    Squares2X2Icon, 
    TruckIcon, 
    ShoppingCartIcon,
    UserGroupIcon 
    } from "@heroicons/react/24/solid"

const links = [
    {name: 'Home', href: '/store/home', icon: HomeIcon},
    {name: 'Books', href: '/store', icon: BookOpenIcon},
    {name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon},
    {name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon},
    {name: 'Track Order', href: '/store/track-order', icon: TruckIcon},//<<updated href
    {name: 'Community', href: '/store/community', icon: UserGroupIcon},
    {name: 'Settings', href: '/store/settings', icon: CogIcon},
    {name: 'About', href: '/store/about', icon: Squares2X2Icon},
    {name: 'Log In', href: '/store/login', icon: ArrowLeftEndOnRectangleIcon},
]

const NavLinks = () => {
    const {cartData} = useContext(StoreContext)
    return(
    <div className="flex flex-col justify-between flex-1 mt-6" >
        {
    links.map((link) => {
        const IconComponent = link.icon
        return(
            <Link
            key={link.name}
            href={link.href}
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 bg-gray-200"
            >
            <IconComponent className="w-6" />{/** for every icon in our array, a component is rendered */}
            <span className="mx-4 font-medium">{(link.name === 'Cart' && cartData && cartData.length > 0) 
             ? `(${cartData.length})` : <p className="hidden md:block">{link.name}</p>}  </span>
                       
            </Link>
            
        )
    })
}
    </div>
    )
}

export default NavLinks