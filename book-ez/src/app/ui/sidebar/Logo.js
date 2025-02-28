import {BookOpenIcon} from '@heroicons/react/24/solid'

const Logo = () => {
    return(
        <div className='flex flex-row items-center text-while leading:none'>
            <BookOpenIcon className="bg-stone-500 text-white rounded-md p-2" />
            <p className='text-[14px] m1-1'>BookEZ</p>
        </div>
    )
}

export default Logo