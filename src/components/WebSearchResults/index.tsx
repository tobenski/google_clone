import Link from "next/link";
import Parser from 'html-react-parser'
import PaginationButtons from "../PaginationButtons";

const WebSearchResults = ({results}:{results:any}) => {

    return (
        <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {results.searchInformation?.formattedTotalResults} 
                results ({results.searchInformation?.formattedSearchTime} seconds)
            </p>
            {results.items?.map((result:any) => {
                return (
                    <div className="mb-8 max-w-xl" key={result.link}>
                        <div className="group flex flex-col">
                            <Link className="text-sm truncate" href={result.link}>
                                {result.formattedUrl}
                            </Link>
                            <Link className="group-hover:underline decoration-blue-800 text-lg truncate font-medium text-blue-800" href={result.link}>
                                {result.title}
                            </Link>
                        </div>
                        <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
                    </div>
                )
            })
        }
        <PaginationButtons />
        </div>
    );
}

export default WebSearchResults;