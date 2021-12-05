import './CoinsBoard.css'
import React, { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';
import { coinTableHeaders } from '../../constants/global';


function CoinsBoard() {
    const context = useContext(CoinContext)

    const tableHeaders = coinTableHeaders.map((item, index) => { return (<th key={index}>{item}</th>) })

    const tableData = context.data.map(coinData => {
        return (<tr key={coinData.id}>
            <td>{coinData.cmc_rank}</td>
            <td>{coinData.name}</td>
            <td>{coinData.quote.USD.price}</td>
            <td>{coinData.quote.USD.percent_change_24h}</td>
            <td>{coinData.quote.USD.market_cap}</td>
            <td>{coinData.quote.USD.volume_24h}</td>
        </tr>)
    })

    return (
        <table className="coin-table-container pure-table pure-table-horizontal pure-table-striped">
            <thead>
                <tr>
                    {tableHeaders}
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
        </table>
    )
}

export default CoinsBoard
