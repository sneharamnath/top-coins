import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const CoinContext = React.createContext();

function CoinContextProvider(props) {
    const [topCoins, setTopCoins] = useState([])
    const [count, setCount] = useState(10);

    useEffect(() => {
        let qs = (count !== 'all') ? `?limit=${count}` : ``
        axios.get(`/api/cryptocurrency/listings/latest${qs}`, {
            headers: { "X-CMC_PRO_API_KEY": "db280a8b-ef49-4db3-bc70-fb7c451e597b" }
        }).then((response) => {
            setTopCoins(response.data.data)
        })
    }, [count]);

    return (
        <div>
            <CoinContext.Provider value={{ data: topCoins, count, setCount }}>
                {topCoins.length ? props.children : 'Loading...'}
            </CoinContext.Provider>
        </div>
    )
}

export default CoinContextProvider;
