import './Navbar.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarComponent() {
    return (
        <div className="pure-menu pure-menu-horizontal">
            <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/"  className="pure-menu-heading pure-menu-link">Top Coins</NavLink>
            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                    <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/liquidity" className="pure-menu-link">Liquidity</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavbarComponent
