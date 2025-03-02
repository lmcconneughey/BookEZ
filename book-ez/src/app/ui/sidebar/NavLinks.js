'use client'

import Link from "next/link";
import { useContext } from "react";
import { StoreContext } from "@/app/context";


import { 
    BookOpenIcon, 
    CogIcon, 
    CubeTransparentIcon,
    HomeIcon, 
    RectangleStackIcon, 
    Squares2X2Icon, 
    TruckIcon, 
    ShoppingCartIcon,
    UserGroupIcon 
    } from "@heroicons/react/24/solid"

const links = [
    {name: 'Home', href: '/', icon: HomeIcon},
    {name: 'Books', href: '/store', icon: BookOpenIcon},
    {name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon},
    {name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon},
    {name: 'Track Order', href: '/store/track-order', icon: TruckIcon},//<<updated href
    {name: 'Community', href: '/store/community', icon: UserGroupIcon},
    {name: 'Settings', href: '/store/settings', icon: CogIcon},
    {name: 'About', href: '/store/about', icon: Squares2X2Icon},
    {name: 'Admin', href: '/store/Admin', icon: CubeTransparentIcon},
]

const NavLinks = () => {
    const {cartData} = useContext(StoreContext)
    return(
    <div>
        {
    links.map((link) => {
        const IconComponent = link.icon
        return(
            <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
            <IconComponent className="w-6" />{/** for every icon in our array, a component is rendered */}
            {(link.name === 'Cart' && cartData && cartData.length > 0) 
             ? `(${cartData.length})` : <p className="hidden md:block">{link.name}</p>}             
            </Link>
            
        )
    })
}
    </div>
    )
}

export default NavLinks