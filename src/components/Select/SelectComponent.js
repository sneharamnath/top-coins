import './Select.css';
import React, { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext';
import { coinLimits } from '../../constants/global';

function SelectComponent() {
    const context = useContext(CoinContext)

    const handleSelect = (e) => {
        context.setCount(e.target.value);
    }

    const renderOptions = coinLimits.map((limit, index) => {
        return (<option key={index} value={limit.value}>{limit.label}</option>)
    })

    return (
        <form className="pure-form pure-form-stacked">
            <div className="flex">
                <label className="mr-1" htmlFor="count">Show Rows:</label>
                <select name="count" className="pure-input" onChange={handleSelect}>
                    {renderOptions}
                </select>
            </div>
        </form>
    )
}

export default SelectComponent
