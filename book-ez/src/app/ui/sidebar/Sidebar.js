import Link from "next/link"
import NavLinks from "./NavLinks"
import Logo from "../sidebar/Logo"
import {ArrowLeftEndOnRectangleIcon} from '@heroicons/react/24/solid'

const Sidebar = () => {
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link 
                href="/store"
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-500 p-4 md:h-30"
            >
                <div className="w-20 md:w-20 bg-slate-300 rounded-md">
                    <Logo />
                </div>
            </Link>{/**<< we'll have a static logo/link back to our store */}
            <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <form>
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
                        <ArrowLeftEndOnRectangleIcon className="w-6" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Sidebar