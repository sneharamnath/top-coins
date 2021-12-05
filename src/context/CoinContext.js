import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { apiEndPoints } from '../constants/global';

export const CoinContext = React.createContext();

function CoinContextProvider(props) {
    const [topCoins, setTopCoins] = useState([])
    const [count, setCount] = useState(10);

    useEffect(() => {
        let qs = (count !== 'all') ? `?limit=${count}` : ``
        const url = `${apiEndPoints.getCoinsData}${qs}`
        axios.get(url, {
            headers: { "X-CMC_PRO_API_KEY": process.env.REACT_APP_CMC_API_KEY}
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
