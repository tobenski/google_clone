'use client'
import { useEffect, useState } from 'react';

const CountryLookUp = () => {
    const [country, setCountry] = useState<string>('USA');
    const [data, setData] = useState<any>(null);
    const getData = async () => {
        const resp = await fetch(`https://timezoneapi.io/api/ip/?token=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
        const data = await resp.json()
        setData(data.data);
        // setCountry(data.data.country);
    }
    useEffect(() => {
        getData();        
    }, [])
    return (
        <div>
            {data && (`Country: ${data.country}, City: ${data.city}, IP: ${data.ip}`)}
        </div>
    );
}

export default CountryLookUp;