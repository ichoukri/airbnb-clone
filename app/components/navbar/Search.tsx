'use client';

import { BsSearch } from 'react-icons/bs'

const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm 
            hover:shadow-md transition cursor-pointer"
        >
            <div className="flex items-center justify-between">
                <div className="text-sm font-semibold px-5 ">
                    Anywhere
                </div>
                <div className="hidden sm:block text-sm font-semibold px-5 border-x-[1px] 
                    flex-1 text-center"
                >
                    AnyWeek
                </div>
                <div className="text-sm font-normal pl-5 pr-2 text-center text-gray-600 flex flex-row items-center gap-3">
                    <div className='hidden sm:block'>Add Guests</div>
                    <div className='p-2 text-white bg-rose-500 rounded-full '> 
                        <BsSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search   