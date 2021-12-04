import React, { useContext } from 'react'
import ChartComponent from '../../components/Chart/ChartComponent';
import { CoinContext } from '../../context/CoinContext';

function LiquidityInfo() {
    const context = useContext(CoinContext)

    let data = [];

    data = context.data.map(coinData => {
        return {
            rank: coinData.cmc_rank,
            name: coinData.name,
            x: coinData.quote.USD.market_cap,
            y: coinData.quote.USD.volume_24h,
            z: coinData.quote.USD.percent_change_24h
        }
    })

    return (
        <div>
            <ChartComponent data={data}/>
        </div>
    )
}

export default LiquidityInfo
