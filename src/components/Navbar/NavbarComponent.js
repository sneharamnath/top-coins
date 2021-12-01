import React from 'react'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <div className="pure-menu pure-menu-horizontal">
            <Link to="/" className="pure-menu-heading pure-menu-link">Top Coins</Link>
            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                    <Link to="/liquidity" className="pure-menu-link">Liquidity</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarComponent
