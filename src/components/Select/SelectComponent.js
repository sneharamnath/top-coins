import './Select.css';
import React, { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext';

function SelectComponent() {
    const context = useContext(CoinContext)

    const handleSelect = (e) => {
        context.setCount(e.target.value);
    }

    return (
        <form className="pure-form pure-form-stacked">
            <div className="flex">
                <label htmlFor="count">Select Size:</label>
                <select name="count" className="select-container pure-input" onChange={handleSelect}>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="all">All</option>
                </select>
            </div>
        </form>
    )
}

export default SelectComponent
