import React, {Component} from 'react'

import './navbar.css'

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar-container">
                    <div className="nav-left nav-logo">Logo</div>
                    <div className="nav-left nav-search"><input type="text" className="search-box" /></div>
                    <div className="nav-right username">Username</div>
                    <div className="nav-right user-dp">DP</div>
            </nav>
        )
    }
}