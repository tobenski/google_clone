'use client'

import { AiOutlineSearch, AiOutlineCamera } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const SearchHeaderOptions = () => {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');

    const selectTab = (tab:string) => {
        router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
    }

    return (
        <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
            <div
                onClick={()=>selectTab("All")} 
                className={`flex items-center 
            space-x-1 border-b-4 border-transparent
            active:text-blue-500 cursor-pointer px-2 
            pb-3 ${pathName === "/search/web" && 
            "!text-blue-600 !border-blue-600"}`}>
                <AiOutlineSearch className='text-md' />
                <p>All</p>
            </div>
            <div
                onClick={()=>selectTab("Images")} 
                className={`flex items-center 
            space-x-1 border-b-4 border-transparent
            active:text-blue-500 cursor-pointer px-2 
            pb-3 ${pathName === "/search/image" && 
            "!text-blue-600 !border-blue-600"}`}>
                <AiOutlineCamera className='text-md' />
                <p>Images</p>
            </div>
            
        </div>
    );
}

export default SearchHeaderOptions;