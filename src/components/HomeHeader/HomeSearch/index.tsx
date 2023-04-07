'use client'
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { ThreeDots } from 'react-loading-icons';

const HomeSearch = () => {
    const [input, setInput] = useState<string>('')
    const [randomSearchLoading, setRandomSearchLoading] = useState<boolean>(false)
    
    const router = useRouter();

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`search/web?searchTerm=${input}`);
    }

    const randomSearch = async (e:FormEvent) => {
        setRandomSearchLoading(true);
        e.preventDefault();
        const response = await fetch("https://random-word-api.herokuapp.com/word")
                                .then((res) => res.json())
                                .then((data) => data[0]);
                                if(!response) return;
        setRandomSearchLoading(false);
        router.push(`search/web?searchTerm=${response}`);
    }
    return (
        <>
            <form onSubmit={handleSubmit}
                className=' flex w-full mt-5 mx-auto max-w-[90%] 
                            border border-gray-200 px-5 py-3 
                            rounded-full hover:shadow-md transition-shadow 
                            focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
                <AiOutlineSearch className='text-xl text-gray-500 mr-3' />
                <input 
                    type="text" 
                    className='flex-grow focus:outline-none'
                    onChange={(e) => {setInput(e.target.value)}} 
                    value={input}
                    />
                    
                <BsFillMicFill className='text-lg' />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-8">
                <button onClick={handleSubmit} className='btn'>Google Search</button>
                <button disabled={randomSearchLoading} onClick={randomSearch} className='btn flex items-center justify-center disabled:opacity-80'>
                    {randomSearchLoading ? <ThreeDots /> : ("I Am Feeling Lucky")}
                </button>
            </div>
        </>
    );
}

export default HomeSearch;