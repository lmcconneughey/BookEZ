'use client'

import Link from "next/link";

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
    {name: 'Track Order', href: '/store/track', icon: TruckIcon},
    {name: 'Community', href: '/store/community', icon: UserGroupIcon},
    {name: 'Settings', href: '/store/settings', icon: CogIcon},
    {name: 'About', href: '/store/about', icon: Squares2X2Icon},
    {name: 'Admin', href: '/store/Admin', icon: CubeTransparentIcon},
]

const NavLinks = () => {
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
            > {/*needs re style */}
            <IconComponent className="w-6" />{/** dor every icon in our array, a component is rendered */}
            </Link>
            
        )
    })
}
    </div>
    )
}

export default NavLinks