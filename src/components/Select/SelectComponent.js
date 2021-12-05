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
                <label htmlFor="count">Select Size:</label>
                <select name="count" className="select-container pure-input" onChange={handleSelect}>
                    {renderOptions}
                </select>
            </div>
        </form>
    )
}

export default SelectComponent
