const WebSearchPage = async ({searchParams}:{searchParams:any}) => {
    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=
        ${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    )
    const data = await response.json();
    const results = data.items;
    
    return (
        <div>
            { results && results.map((result:any, i:number) => {
                return (
                    <h1 key={i.toString()}>{result.title}</h1>
                )
            })}
        </div>
    );
}

export default WebSearchPage;