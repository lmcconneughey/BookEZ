'use client'
import Link from "next/link"
import { useState } from "react"
import NavLinks from "./NavLinks"
import Logo from "../sidebar/Logo"
import Image from "next/image"
import { doLogout } from "../../actions/index"
import SideBarUserInfo from "./SideBarUserInfo"
import {ArrowLeftEndOnRectangleIcon, ArrowRightStartOnRectangleIcon} from '@heroicons/react/24/solid'

const Sidebar = () => {
    const [isHover, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const showLogin = isHover
     
    return(
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l bg-white-900 dark:border-gray-700">
            <Link 
                href="/"
                className="w-auto h-6 sm:h-7"
            >
                <div className="flex items-center mt-2 mb-1.5 px-4 py-3 text-gray-600 bg-gray-200 rounded-lg">
                    <Logo />
                </div>
            </Link>
            <SideBarUserInfo />
            <div className="flex flex-col justify-between flex-1 mt-6">
                <div >
                     <NavLinks />   
                    <form action={doLogout}>
                        <button type="submit" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  className="flex items-center px-4 py-2 mt-5 text-gray-400 bg-gray-200 rounded-lg">
                        <ArrowRightStartOnRectangleIcon className="w-6" />
                        <span className="mx-4 font-medium text-gray-400">{showLogin && "Log Out"}</span>
                        </button>
                    </form> 
                </div>
                
            </div>
        </div>
    )
}

export default Sidebar