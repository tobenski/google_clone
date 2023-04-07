'use client'

import { useEffect } from "react";

const Error = ({error, reset}:{error:Error, reset: () => void}) => {
    useEffect(() => {
        console.log("Error: ", error);        
    }, [error])
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-4">Something went wrong</h1>
            <button className="text-blue-500" onClick={() => reset()}>Try Again</button>
        </div>
    );
}

export default Error;