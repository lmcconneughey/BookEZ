import {BookOpenIcon} from '@heroicons/react/24/solid'

const Logo = () => {
    return(
        <div className='flex flex-row items-center text-while leading:none'>
            <BookOpenIcon className="w-6" />
            <span className=" mx-4 font-medium"><p className='text-gray-600 m1-1'>BookEZ</p></span>
        </div>
    )
}

export default Logo