import React, {Component} from 'react'

import './navbar.css'

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar-container">
                    <div className="nav-left nav-logo">
                    <img src={require('./img/loggg.png')}/>
                    </div>
                    <div className="nav-left nav-search"><input type="text" placeholder="Search" className="search-box" /></div>
                    <div className="nav-right username">johncena@imal.com</div>
                    <div className="nav-right user-dp">
                    </div>
            </nav>
        )
    }
}